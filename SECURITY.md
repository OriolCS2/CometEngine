# Marketplace trust model

What a Comet package can and cannot do, and how the registry keeps users safe.

## What packages contain

- **AngelScript and assets only.** Packages never contain native code or
  plugins. Scripts run inside the engine's AngelScript sandbox: they can only
  do what the exposed engine API allows.
- Editor-only scripts (in `Editor/` folders) run inside the editor with the
  same sandboxed API surface; they are excluded from exported games.

## Integrity

- Every published version stores the **SHA-256** of its exact archive bytes,
  computed in the browser at upload. The editor verifies every download
  against it and refuses mismatches, and records the hash in the project's
  lock file so reinstalls are reproducible.
- Git package installs pin a **commit hash** for the same guarantee.
- Uploads are validated server-side by row-level security and client-side
  against the manifest inside the archive (no hand-typed metadata, path-escape
  and size checks on the zip).

## Moderation

- The registry is moderated: admins can unpublish or delete any package.
- **Deprecation** (package- or version-level, with a message) pulls bad
  versions out of new installs without breaking projects whose lock already
  references them.

## Reporting

Use the **Report this package** link on any package page.

## Not yet (planned)

- Cryptographic publisher signing (the schema keeps room for it). Until then,
  integrity comes from the sha256 hashes plus moderation.
