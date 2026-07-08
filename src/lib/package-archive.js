import JSZip from 'jszip';
import { MANIFEST_FILE_NAME, parsePackageManifest, extractChangelogSection } from './package-manifest.js';

// ============================================================================
// Client-side .cometpkg/.zip inspection for the manifest-first publish flow:
// the archive is the single source of package metadata — the upload form only
// ever shows what the manifest declares, so registry rows can never drift
// from what the engine reads at install time.
// ============================================================================

/** SHA-256 of a File/Blob as lowercase hex (matches the engine's integrity hash). */
export async function sha256HexOfFile(file) {
  const buffer = await file.arrayBuffer();
  const digest = await crypto.subtle.digest('SHA-256', buffer);
  return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Reads a package archive: parses and validates the package.cometPackage at
 * the archive root, extracts README.md / CHANGELOG.md, and computes sha256.
 *
 * Returns:
 *   {
 *     manifest, manifestErrors,       // parsed manifest + validation problems
 *     readme, changelog,              // file texts ('' when absent)
 *     versionChangelog,               // the CHANGELOG section for manifest.version
 *     sha256, fileCount,
 *   }
 * Throws when the file is not a readable zip or has no manifest at its root.
 */
export async function inspectPackageArchive(file) {
  let zip;
  try {
    zip = await JSZip.loadAsync(file);
  } catch (e) {
    throw new Error('The file is not a readable zip archive.');
  }

  const entries = Object.values(zip.files).filter(entry => !entry.dir);
  for (const entry of entries) {
    const name = entry.name.replace(/\\/g, '/');
    if (name.startsWith('/') || name.includes('../') || /^[A-Za-z]:/.test(name)) {
      throw new Error(`The archive contains an unsafe path: ${entry.name}`);
    }
  }

  const manifestEntry = zip.file(MANIFEST_FILE_NAME);
  if (!manifestEntry) {
    throw new Error(`The archive has no ${MANIFEST_FILE_NAME} at its root — export the package from the Comet editor (Package Manager → Export package…).`);
  }

  const manifestText = await manifestEntry.async('string');
  const { manifest, errors: manifestErrors } = parsePackageManifest(manifestText);

  const readFile = async (name) => {
    const entry = zip.file(name);
    return entry ? entry.async('string') : '';
  };
  const readme = await readFile('README.md');
  const changelog = await readFile('CHANGELOG.md');
  const versionChangelog = manifest?.version ? extractChangelogSection(changelog, manifest.version) : '';

  const sha256 = await sha256HexOfFile(file);

  return {
    manifest,
    manifestErrors,
    readme,
    changelog,
    versionChangelog,
    sha256,
    fileCount: entries.length,
  };
}
