#!/usr/bin/env python3
"""Build the Comet Engine website.

Runs `npm run build` (Vite) and guarantees the CNAME file survives in the
output folder. Vite's `emptyOutDir` wipes `docs/` on every build, so the
CNAME is restored afterwards as a safety net (it is also kept in `public/`
so Vite copies it automatically).
"""

import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(ROOT, "docs")
DEFAULT_DOMAIN = "www.cometengine.org"


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


def main():
    cname = read_cname()
    print(f"[Publish] CNAME -> {cname}")

    print("[Publish] Running: npm run build")
    result = subprocess.run("npm run build", shell=True, cwd=ROOT)
    if result.returncode != 0:
        print("[Publish] Build failed.", file=sys.stderr)
        return result.returncode

    cname_path = os.path.join(OUT_DIR, "CNAME")
    with open(cname_path, "w", encoding="utf-8", newline="\n") as f:
        f.write(cname + "\n")
    print(f"[Publish] CNAME ensured at {cname_path}")

    print("[Publish] Done.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
