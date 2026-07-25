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
import re
import shutil
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(ROOT, "docs")
API_DOCS_DIR = os.path.join(ROOT, "public", "docs")
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


def _version_sort_key(name):
    """Sort key for a docs version folder: newest first when reversed.

    `2.10` outranks `2.9`, and a release outranks its own pre-releases
    (`2.0` > `2.0-rc.11` > `2.0-rc.2`).
    """
    core, _, pre = name.lstrip("vV").partition("-")
    numbers = [int(c) if c.isdigit() else 0 for c in core.split(".")]
    numbers += [0] * (4 - len(numbers))
    pre_tokens = tuple((0, int(t)) if t.isdigit() else (1, t)
                       for t in re.split(r"[.\-_]", pre) if t)
    return (tuple(numbers[:4]), 0 if pre else 1, pre_tokens)


def write_versions_manifest():
    """List the API doc versions into public/docs/versions.json.

    The docs page reads this one file to fill its version selector. Without it
    the browser has to ask the GitHub API for every release and then probe each
    tag for a docs folder before it can draw anything.
    """
    if not os.path.isdir(API_DOCS_DIR):
        return

    versions = sorted(
        (name for name in os.listdir(API_DOCS_DIR)
         if os.path.isfile(os.path.join(API_DOCS_DIR, name, "CometEngine.xml"))),
        key=_version_sort_key,
        reverse=True,
    )
    if not versions:
        print("[Publish] No API doc versions found; skipping versions.json.")
        return

    manifest = {"default": versions[0], "versions": versions}
    path = os.path.join(API_DOCS_DIR, "versions.json")
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        json.dump(manifest, f, indent=2)
        f.write("\n")
    print(f"[Publish] API versions -> {', '.join(versions)}")


def build():
    cname = read_cname()
    print(f"[Publish] CNAME -> {cname}")

    write_versions_manifest()

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


def _pages_runs(limit=15):
    """Recent 'pages build and deployment' Actions runs (newest first), or None.

    The Actions run is the source of truth for a Pages deploy. The legacy
    /pages/builds API is unreliable here — it can report 'building' even after
    the deploy step has already failed — so we read the workflow runs instead.
    """
    data = _gh_json(f"run list --limit {limit} "
                    "--json databaseId,headSha,status,conclusion,name")
    if not isinstance(data, list):
        return None
    return [r for r in data if "pages" in (r.get("name") or "").lower()]


def pages_deploy_in_progress(runs=None):
    """True if a Pages deploy is currently queued or running."""
    runs = _pages_runs(limit=6) if runs is None else runs
    if not runs:
        return False
    return any(r.get("status") in ("in_progress", "queued", "waiting") for r in runs)


def run_for_commit(sha, runs):
    """The Pages run whose head commit is `sha`, or None."""
    for r in runs or []:
        if sha and (r.get("headSha") or "").startswith(sha[:20]):
            return r
    return None


def current_sha():
    result = run("git rev-parse HEAD", capture_output=True, text=True,
                 encoding="utf-8", errors="replace")
    return result.stdout.strip() if result.returncode == 0 else None


def wait_for_pages_idle(timeout=240, interval=8):
    """Block until no GitHub Pages deploy is running, so our push doesn't pile
    onto an in-flight one. No-op if Pages can't be queried (no `gh`/auth)."""
    if not gh_available():
        return
    deadline = time.time() + timeout
    announced = False
    while time.time() < deadline:
        runs = _pages_runs(limit=6)
        if runs is None:
            return  # Can't query — don't block the publish.
        if not pages_deploy_in_progress(runs):
            if announced:
                print("[Publish] Previous Pages deploy finished.")
            return
        if not announced:
            print("[Publish] A GitHub Pages deploy is still running; waiting for it to "
                  "finish before pushing...")
            announced = True
        time.sleep(interval)
    print("[Publish] Gave up waiting for the previous Pages deploy; pushing anyway.")


def wait_for_pages_deploy(sha, timeout=480, interval=12, retries=3):
    """Wait for the pushed commit's Pages deploy, re-running it if it fails.

    GitHub Pages intermittently fails the deploy step ("Deployment failed, try
    again later.") even though the build succeeded; re-running the failed job
    reliably clears it. Returns False only if it still fails after `retries`
    re-runs; a success, an unverifiable setup, or a timeout return True.
    """
    if not gh_available() or not sha:
        return True
    short = sha[:8]
    print(f"[Publish] Waiting for GitHub Pages to deploy {short}...")
    deadline = time.time() + timeout
    reruns = 0
    while time.time() < deadline:
        runs = _pages_runs()
        if runs is None:
            print("[Publish] (Could not read Actions status — not verifying.)")
            return True
        info = run_for_commit(sha, runs)
        if info is None or info.get("status") != "completed":
            time.sleep(interval)  # run not registered / still building
            continue
        if info.get("conclusion") == "success":
            print(f"[Publish] GitHub Pages deployed {short}.")
            return True
        # Deploy step failed (usually the flaky "try again later") — re-run it.
        if reruns < retries:
            reruns += 1
            print(f"[Publish] Pages deploy failed; re-running it ({reruns}/{retries})...")
            run(f"gh run rerun {info['databaseId']} --failed",
                capture_output=True, text=True, encoding="utf-8", errors="replace")
            time.sleep(interval * 2)
            continue
        print("[Publish] Pages deploy still failing after re-runs; re-run it from the "
              "repo's Actions tab.", file=sys.stderr)
        return False
    print(f"[Publish] Deploy of {short} didn't confirm within {timeout}s; check the "
          "Actions tab.", file=sys.stderr)
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
