// Run with: node tests/package-manifest.test.mjs
import {
  parseSemver, compareSemver, versionChannel, isValidRange,
  stripJsonComments, parsePackageManifest, extractChangelogSection,
} from '../src/lib/package-manifest.js';

let checks = 0;
let failures = 0;
function check(name, ok) {
  checks++;
  if (!ok) {
    failures++;
    console.error(`FAIL ${name}`);
  } else {
    console.log(`ok   ${name}`);
  }
}

// --- semver ---
check('parse 1.2.3', JSON.stringify(parseSemver('1.2.3')) === JSON.stringify({ major: 1, minor: 2, patch: 3, prerelease: [] }));
check('parse prerelease', parseSemver('1.3.0-pre.2').prerelease.join('.') === 'pre.2');
check('reject partial', parseSemver('1.2') === null);
check('reject leading zero', parseSemver('01.2.3') === null);
check('compare patch', compareSemver('1.2.3', '1.2.4') < 0);
check('prerelease below release', compareSemver('1.0.0-pre.1', '1.0.0') < 0);
check('numeric prerelease order', compareSemver('1.0.0-beta.2', '1.0.0-beta.11') < 0);
check('build ignored', compareSemver('1.2.3+a', '1.2.3+b') === 0);

// --- channels ---
check('release channel', versionChannel('1.2.3') === 'release');
check('pre channel', versionChannel('1.3.0-pre.1') === 'pre');
check('exp channel from tag', versionChannel('2.0.0-exp.3') === 'exp');
check('exp channel from 0.x', versionChannel('0.4.0') === 'exp');

// --- ranges ---
check('exact range', isValidRange('1.2.3'));
check('caret range', isValidRange('^1.2.0'));
check('tilde partial', isValidRange('~1.2'));
check('gte partial', isValidRange('>=1'));
check('reject star', !isValidRange('*'));
check('reject text', !isValidRange('latest'));

// --- jsonc ---
check('strips comments', JSON.parse(stripJsonComments('{\n// hi\n"a": 1}')).a === 1);
check('keeps slashes in strings', JSON.parse(stripJsonComments('{"url": "https://x"}')).url === 'https://x');

// --- manifest validation ---
const good = {
  schemaVersion: 1,
  slug: 'acme-ui-kit',
  displayName: 'Acme UI Kit',
  version: '1.4.0',
  packageType: 'package',
  summary: 'Widgets and helpers for the Comet UI system.',
  dependencies: { 'acme-core': '^2.0.0' },
  samples: [{ displayName: 'Basic', path: 'Samples/Basic' }],
  hiddenFolders: ['Samples'],
  minEngineVersion: '2.8.2',
};
check('valid manifest passes', parsePackageManifest(JSON.stringify(good)).errors.length === 0);
check('bad slug rejected', parsePackageManifest(JSON.stringify({ ...good, slug: 'Bad Slug' })).errors.length > 0);
check('bad version rejected', parsePackageManifest(JSON.stringify({ ...good, version: '1.2' })).errors.length > 0);
check('short summary rejected', parsePackageManifest(JSON.stringify({ ...good, summary: 'short' })).errors.length > 0);
check('bad range rejected', parsePackageManifest(JSON.stringify({ ...good, dependencies: { a: 'latest' } })).errors.length > 0);
check('self dependency rejected', parsePackageManifest(JSON.stringify({ ...good, dependencies: { 'acme-ui-kit': '^1.0.0' } })).errors.length > 0);
check('unknown type rejected', parsePackageManifest(JSON.stringify({ ...good, packageType: 'plugin' })).errors.length > 0);
check('newer schema rejected', parsePackageManifest(JSON.stringify({ ...good, schemaVersion: 99 })).errors.length > 0);
check('jsonc manifest accepted', parsePackageManifest('{\n// comment\n' + JSON.stringify(good).slice(1)).errors.length === 0);
check('not json fails cleanly', parsePackageManifest('{ nope').manifest === null);

// --- changelog extraction ---
const changelog = `# Changelog

## [1.4.0] - 2026-07-08
### Added
- New widgets.

## [1.3.0] - 2026-06-01
### Fixed
- Bugs.
`;
check('extracts version section', extractChangelogSection(changelog, '1.4.0').includes('New widgets'));
check('section stops at next heading', !extractChangelogSection(changelog, '1.4.0').includes('Bugs'));
check('missing section is empty', extractChangelogSection(changelog, '9.9.9') === '');

console.log(`${checks - failures}/${checks} checks passed`);
process.exit(failures === 0 ? 0 : 1);
