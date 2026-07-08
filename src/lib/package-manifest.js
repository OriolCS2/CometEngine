// ============================================================================
// package.cometPackage manifest handling (pure, no DOM/deps — node-testable).
// Mirrors the engine's PackageManifest validation (EngineC++/Editor/Packages)
// so the registry only ever stores metadata the engine can read back.
// ============================================================================

export const SLUG_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/;
export const MANIFEST_FILE_NAME = 'package.cometPackage';

/** Strict semver parse: returns {major, minor, patch, prerelease: string[]} or null. */
export function parseSemver(text) {
  const match = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z.-]+)?$/.exec(String(text || ''));
  if (!match) return null;
  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    prerelease: match[4] ? match[4].split('.') : [],
  };
}

/** Semver precedence compare (build metadata ignored). */
export function compareSemver(a, b) {
  const va = parseSemver(a);
  const vb = parseSemver(b);
  if (!va || !vb) return String(a).localeCompare(String(b));
  for (const part of ['major', 'minor', 'patch']) {
    if (va[part] !== vb[part]) return va[part] - vb[part];
  }
  if (va.prerelease.length === 0 && vb.prerelease.length === 0) return 0;
  if (va.prerelease.length === 0) return 1;
  if (vb.prerelease.length === 0) return -1;
  const count = Math.max(va.prerelease.length, vb.prerelease.length);
  for (let i = 0; i < count; i++) {
    const ia = va.prerelease[i];
    const ib = vb.prerelease[i];
    if (ia === undefined) return -1;
    if (ib === undefined) return 1;
    const na = /^\d+$/.test(ia);
    const nb = /^\d+$/.test(ib);
    if (na && nb) {
      if (Number(ia) !== Number(ib)) return Number(ia) - Number(ib);
    } else if (na !== nb) {
      return na ? -1 : 1;
    } else if (ia !== ib) {
      return ia < ib ? -1 : 1;
    }
  }
  return 0;
}

/** Release channel of a version: 'exp' (0.x or -exp), 'pre' (other -tag) or 'release'. */
export function versionChannel(version) {
  const parsed = parseSemver(version);
  if (!parsed) return 'release';
  if (parsed.major === 0 || parsed.prerelease.some(p => p.toLowerCase().startsWith('exp'))) return 'exp';
  if (parsed.prerelease.length > 0) return 'pre';
  return 'release';
}

/** Dependency range check: exact, =, ^, ~ or >= (the engine's range grammar). */
export function isValidRange(text) {
  const value = String(text || '').trim();
  if (!value) return false;
  const body = value.replace(/^(\^|~|>=|=)/, '');
  const opMatch = /^(\^|~|>=|=)?/.exec(value)[1] || '';
  if (opMatch === '' || opMatch === '=') {
    return parseSemver(body) !== null;
  }
  return /^(0|[1-9]\d*)(\.(0|[1-9]\d*)(\.(0|[1-9]\d*))?)?(-[0-9A-Za-z.-]+)?$/.test(body);
}

/** Strips // line comments outside strings so JSONC manifests parse. */
export function stripJsonComments(text) {
  let out = '';
  let inString = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inString) {
      out += c;
      if (c === '\\' && i + 1 < text.length) {
        out += text[++i];
      } else if (c === '"') {
        inString = false;
      }
      continue;
    }
    if (c === '"') {
      inString = true;
      out += c;
      continue;
    }
    if (c === '/' && text[i + 1] === '/') {
      while (i < text.length && text[i] !== '\n') i++;
      out += '\n';
      continue;
    }
    out += c;
  }
  return out;
}

function isSafeRelativePath(path) {
  if (typeof path !== 'string' || !path) return false;
  if (path.includes('\\') || path.startsWith('/') || /^[A-Za-z]:/.test(path)) return false;
  const segments = path.split('/');
  return segments.every(s => s !== '' && s !== '.' && s !== '..');
}

/**
 * Parses and validates a package.cometPackage manifest text.
 * Returns { manifest, errors } — errors is empty when the manifest is valid.
 */
export function parsePackageManifest(text) {
  const errors = [];
  let manifest = null;
  try {
    manifest = JSON.parse(stripJsonComments(String(text || '')));
  } catch (e) {
    return { manifest: null, errors: [`The manifest is not valid JSON: ${e.message}`] };
  }
  if (!manifest || typeof manifest !== 'object' || Array.isArray(manifest)) {
    return { manifest: null, errors: ['The manifest must be a JSON object.'] };
  }

  const schemaVersion = manifest.schemaVersion ?? 1;
  if (typeof schemaVersion !== 'number' || schemaVersion > 1) {
    errors.push(`Unsupported manifest schemaVersion (${schemaVersion}); this registry understands schema 1.`);
  }

  const slug = String(manifest.slug || '');
  if (!SLUG_PATTERN.test(slug)) {
    errors.push('The "slug" must be lowercase words separated by single dashes (e.g. "acme-ui-kit").');
  }

  const displayName = String(manifest.displayName || '');
  if (displayName.length < 3 || displayName.length > 80) {
    errors.push('The "displayName" must be 3-80 characters long.');
  }

  if (!parseSemver(manifest.version)) {
    errors.push('The "version" must be a strict semantic version (e.g. "1.2.3" or "1.3.0-pre.1").');
  }

  const packageType = manifest.packageType || 'package';
  if (packageType !== 'package' && packageType !== 'assetPack') {
    errors.push('The "packageType" must be "package" or "assetPack".');
  }

  const summary = String(manifest.summary || '');
  if (summary.length < 10 || summary.length > 160) {
    errors.push('The "summary" must be 10-160 characters long.');
  }

  const dependencies = manifest.dependencies || {};
  if (typeof dependencies !== 'object' || Array.isArray(dependencies)) {
    errors.push('The "dependencies" must be an object of {"slug": "range"}.');
  } else {
    for (const [depSlug, range] of Object.entries(dependencies)) {
      if (!SLUG_PATTERN.test(depSlug)) errors.push(`The dependency slug "${depSlug}" is invalid.`);
      if (!isValidRange(range)) errors.push(`The dependency range "${range}" of "${depSlug}" is invalid (use "1.2.3", "^1.2.0", "~1.2" or ">=1.0").`);
      if (depSlug === slug) errors.push('A package cannot depend on itself.');
    }
  }

  for (const sample of manifest.samples || []) {
    if (!isSafeRelativePath(sample?.path)) {
      errors.push(`The sample path "${sample?.path}" must be a safe relative path.`);
    }
    if (!sample?.displayName) {
      errors.push('Every sample needs a "displayName".');
    }
  }
  for (const hidden of manifest.hiddenFolders || []) {
    if (!isSafeRelativePath(hidden)) {
      errors.push(`The hidden folder "${hidden}" must be a safe relative path.`);
    }
  }

  if (manifest.minEngineVersion && !parseSemver(manifest.minEngineVersion)) {
    errors.push('The "minEngineVersion" must be a semantic version (e.g. "2.8.2").');
  }

  return { manifest, errors };
}

/**
 * Extracts the changelog section for a version from a Keep-a-Changelog file
 * (the "## [x.y.z]" block). Returns '' when there is no matching section.
 */
export function extractChangelogSection(changelogText, version) {
  const text = String(changelogText || '');
  const headings = [...text.matchAll(/^##\s+.*$/gm)];
  for (let i = 0; i < headings.length; i++) {
    if (headings[i][0].includes(`[${version}]`) || headings[i][0].includes(` ${version} `) || headings[i][0].trim().endsWith(` ${version}`)) {
      const start = headings[i].index + headings[i][0].length;
      const end = i + 1 < headings.length ? headings[i + 1].index : text.length;
      return text.slice(start, end).trim();
    }
  }
  return '';
}
