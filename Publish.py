#!/usr/bin/env python3
"""Build and publish the Comet Engine website.

Runs `npm run build` (Vite), guarantees the CNAME file survives in the output
folder, then commits and pushes the result.

Vite's `emptyOutDir` wipes `docs/` on every build, so the CNAME is restored
afterwards as a safety net (it is also kept in `public/` so Vite copies it
automatically).

Usage:
    python Publish.py                 # build + commit + push (default message)
    python Publish.py "My message"    # custom commit message
    python Publish.py --no-push       # build + commit, but don't push
    python Publish.py --build-only    # only build (no git)
"""

import datetime
import os
import shutil
import subprocess
import sys

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


def git_publish(message, push):
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

    print("[Publish] Pushing...")
    if run("git push").returncode != 0:
        print("[Publish] Push failed.", file=sys.stderr)
        return False

    print("[Publish] Pushed.")
    return True


def main(argv):
    push = True
    build_only = False
    message = None

    for arg in argv:
        if arg == "--no-push":
            push = False
        elif arg == "--build-only":
            build_only = True
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

    if not git_publish(message, push):
        return 1

    print("[Publish] Done.")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
