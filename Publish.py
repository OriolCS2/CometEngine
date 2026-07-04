#!/usr/bin/env python3
"""Build and publish the Comet Engine website.

Runs `npm run build` (Vite), guarantees the CNAME file survives in the output
folder, then commits and pushes the result.

Vite's `emptyOutDir` wipes `docs/` on every build, so the CNAME is restored
afterwards as a safety net (it is also kept in `public/` so Vite copies it
automatically).

Before pushing it waits for any GitHub Pages deploy that is still running to
finish, then confirms its own deploy landed (re-triggering a transient
failure). Two pushes landing seconds apart make Pages deployments overlap and
wedge ("Deployment failed, try again later."); serializing them avoids that.
This needs the `gh` CLI; without it those steps are skipped gracefully.

Usage:
    python Publish.py                 # build + commit + push, wait for deploy
    python Publish.py "My message"    # custom commit message
    python Publish.py --no-push       # build + commit, but don't push
    python Publish.py --build-only    # only build (no git)
    python Publish.py --no-wait       # push without waiting on/verifying Pages
"""

import datetime
import json
import os
import shutil
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(ROOT, "docs")
DEFAULT_DOMAIN = "www.cometengine.org"


def find_npm():
    """Locate the npm executable even if it isn't on PATH.

    A terminal opened before Node.js was installed won't have the updated
    PATH, so fall back to the standard install locations.
    """
    found = shutil.which("npm")
    if found:
        return found

    candidates = []
    if os.name == "nt":
        for base in (os.environ.get("ProgramFiles", r"C:\Program Files"),
                     os.environ.get("ProgramFiles(x86)", r"C:\Program Files (x86)"),
                     os.path.join(os.environ.get("LOCALAPPDATA", ""), "Programs")):
            if base:
                candidates.append(os.path.join(base, "nodejs", "npm.cmd"))
    else:
        candidates += ["/usr/local/bin/npm", "/usr/bin/npm"]

    for path in candidates:
        if path and os.path.isfile(path):
            return path
    return None


def run(cmd, **kwargs):
    """Run a command in the repo root, returning the CompletedProcess."""
    return subprocess.run(cmd, shell=True, cwd=ROOT, **kwargs)


def read_cname():
    """Return the CNAME content, preferring public/, then docs/, then default."""
    for path in (os.path.join(ROOT, "public", "CNAME"),
                 os.path.join(OUT_DIR, "CNAME")):
        if os.path.isfile(path):
            with open(path, "r", encoding="utf-8") as f:
                content = f.read().strip()
            if content:
                return content
    return DEFAULT_DOMAIN


def build():
    cname = read_cname()
    print(f"[Publish] CNAME -> {cname}")

    npm = find_npm()
    if not npm:
        print("[Publish] Could not find npm. Install Node.js from "
              "https://nodejs.org and reopen your terminal.", file=sys.stderr)
        return False

    # Make sure npm's own folder is on PATH so it can locate node.exe.
    npm_dir = os.path.dirname(npm)
    if npm_dir:
        os.environ["PATH"] = npm_dir + os.pathsep + os.environ.get("PATH", "")

    print(f"[Publish] Running: {npm} run build")
    result = run(f'"{npm}" run build')
    if result.returncode != 0:
        print("[Publish] Build failed.", file=sys.stderr)
        return False

    cname_path = os.path.join(OUT_DIR, "CNAME")
    with open(cname_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(cname + "\n")
    print(f"[Publish] CNAME ensured at {cname_path}")
    return True


def gh_available():
    """True if the GitHub CLI is installed (used to serialize/verify Pages)."""
    return shutil.which("gh") is not None


def _gh_json(args):
    """Run `gh <args>` and return parsed JSON, or None on any failure."""
    try:
        result = run(f"gh {args}", capture_output=True, text=True,
                     encoding="utf-8", errors="replace")
    except OSError:
        return None
    if result.returncode != 0 or not (result.stdout or "").strip():
        return None
    try:
        return json.loads(result.stdout)
    except ValueError:
        return None


def pages_latest_build():
    """Most recent GitHub Pages build as {'status', 'commit'}, or None."""
    data = _gh_json("api repos/{owner}/{repo}/pages/builds")
    if isinstance(data, list) and data:
        top = data[0]
        return {"status": top.get("status"), "commit": top.get("commit") or ""}
    return None


def current_sha():
    result = run("git rev-parse HEAD", capture_output=True, text=True,
                 encoding="utf-8", errors="replace")
    return result.stdout.strip() if result.returncode == 0 else None


def wait_for_pages_idle(timeout=240, interval=8):
    """Block until GitHub Pages has no build in progress.

    Pushing while a previous deploy is still running makes the two overlap and
    can wedge Pages; waiting for it to settle first keeps deploys serialized.
    Degrades to a no-op if Pages can't be queried (no `gh`, no auth, etc.).
    """
    if not gh_available():
        return
    deadline = time.time() + timeout
    announced = False
    while time.time() < deadline:
        build = pages_latest_build()
        if build is None:
            return  # Can't query Pages — don't block the publish.
        if build["status"] != "building":
            if announced:
                print(f"[Publish] Previous Pages deploy settled ({build['status']}).")
            return
        if not announced:
            print("[Publish] A GitHub Pages deploy is still running; waiting for it to "
                  "finish before pushing (prevents a stuck deploy)...")
            announced = True
        time.sleep(interval)
    print("[Publish] Gave up waiting for the previous Pages deploy; pushing anyway.")


def wait_for_pages_deploy(sha, timeout=360, interval=10, retries=2):
    """Confirm the pushed commit deploys; re-trigger a transient failure.

    Returns False only on a deploy that stays errored after `retries`
    re-triggers. A confirmed success, an ambiguous timeout, or an unqueryable
    Pages setup all return True so a slow-but-fine deploy never fails the run.
    """
    if not gh_available():
        print("[Publish] (gh CLI not found — not verifying the Pages deploy.)")
        return True
    short = (sha or "")[:8]
    print(f"[Publish] Waiting for GitHub Pages to deploy {short}...")
    deadline = time.time() + timeout
    attempts = 0
    while time.time() < deadline:
        build = pages_latest_build()
        if build is None:
            print("[Publish] (Could not read Pages status — not verifying.)")
            return True
        ours = bool(sha) and build["commit"].startswith(sha[:20])
        if ours and build["status"] == "built":
            print(f"[Publish] GitHub Pages deployed {short}.")
            return True
        if ours and build["status"] == "errored":
            if attempts < retries:
                attempts += 1
                print(f"[Publish] Pages deploy errored — re-triggering ({attempts}/{retries})...")
                run("gh api -X POST repos/{owner}/{repo}/pages/builds",
                    capture_output=True, text=True, encoding="utf-8", errors="replace")
                time.sleep(interval)
                continue
            print("[Publish] Pages deploy failed after retries. See the repo's Actions tab.",
                  file=sys.stderr)
            return False
        time.sleep(interval)
    print(f"[Publish] Pages deploy of {short} didn't confirm within {timeout}s; it may "
          "still be finishing. Check the Actions tab.", file=sys.stderr)
    return True


def git_publish(message, push, wait=True):
    # Stage everything (source changes + the freshly built docs/ output).
    run("git add -A")

    # Anything to commit?
    if run("git diff --cached --quiet").returncode == 0:
        print("[Publish] Nothing to commit; working tree clean.")
        return True

    print(f"[Publish] Committing: {message}")
    if run(f'git commit -m "{message}"').returncode != 0:
        print("[Publish] Commit failed.", file=sys.stderr)
        return False

    if not push:
        print("[Publish] Skipping push (--no-push).")
        return True

    # Let any in-flight Pages deploy finish so our push doesn't race it.
    if wait:
        wait_for_pages_idle()

    print("[Publish] Pushing...")
    if run("git push").returncode != 0:
        print("[Publish] Push failed.", file=sys.stderr)
        return False
    print("[Publish] Pushed.")

    # Confirm the deploy actually lands (and recover a transient failure).
    if wait:
        return wait_for_pages_deploy(current_sha())
    return True


def main(argv):
    push = True
    build_only = False
    wait = True
    message = None

    for arg in argv:
        if arg == "--no-push":
            push = False
        elif arg == "--build-only":
            build_only = True
        elif arg == "--no-wait":
            wait = False
        elif arg.startswith("--"):
            print(f"[Publish] Unknown option: {arg}", file=sys.stderr)
            return 2
        else:
            message = arg

    if message is None:
        stamp = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        message = f"Build {stamp}"

    if not build():
        return 1

    if build_only:
        print("[Publish] Done (build only).")
        return 0

    if not git_publish(message, push, wait):
        return 1

    print("[Publish] Done.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
