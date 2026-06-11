import { getClient, isConfigured } from './supabase.js';
import { MOCK_PACKAGES, MOCK_VERSIONS } from './mock-data.js';
import { semverCompare } from './ui.js';

// ============================================================================
// Marketplace data layer.
// When Supabase is configured (src/lib/supabase.js) everything talks to the
// real backend; otherwise reads fall back to demo data and writes throw a
// "backend not configured" error.
// ============================================================================

export const MAX_ZIP_BYTES = 25 * 1024 * 1024;
export const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
export const MAX_SCREENSHOTS = 6;

export const CATEGORIES = ['Tools', 'Scripts', '2D Art', 'UI', 'Audio', 'Shaders & Materials', 'Templates', 'Other'];
export const LICENSES = ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'CC0-1.0', 'CC-BY-4.0', 'Proprietary (free to use)'];

const ZIPS_BUCKET = 'package-zips';
const MEDIA_BUCKET = 'package-media';

export function isBackendConfigured() {
  return isConfigured();
}

function requireClient() {
  const client = getClient();
  if (!client) {
    throw new Error('The marketplace backend is not configured yet. See MARKETPLACE_SETUP.md.');
  }
  return client;
}

// --- Auth -------------------------------------------------------------------

export async function getUser() {
  const client = getClient();
  if (!client) return null;
  const { data } = await client.auth.getSession();
  return data?.session?.user || null;
}

export function onAuthChange(callback) {
  const client = getClient();
  if (!client) {
    callback(null);
    return () => {};
  }
  getUser().then(callback);
  const { data } = client.auth.onAuthStateChange((_event, session) => {
    callback(session?.user || null);
  });
  return () => data.subscription.unsubscribe();
}

export async function signInWithGoogle() {
  const client = requireClient();
  const { error } = await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      // Strip the hash so the OAuth tokens come back on a clean URL.
      redirectTo: window.location.origin + window.location.pathname,
    },
  });
  if (error) throw error;
}

export async function signOut() {
  const client = requireClient();
  await client.auth.signOut();
}

// Profile of the signed-in user (cached per user). Used to know if the
// current user is an admin — the is_admin flag can only be set via SQL in the
// Supabase dashboard, never through the website.
let cachedProfile = null;
let cachedProfileUserId = null;

export async function getMyProfile() {
  const client = getClient();
  if (!client) return null;
  const user = await getUser();
  if (!user) {
    cachedProfile = null;
    cachedProfileUserId = null;
    return null;
  }
  if (cachedProfile && cachedProfileUserId === user.id) return cachedProfile;
  const { data } = await client.from('profiles').select('*').eq('id', user.id).maybeSingle();
  cachedProfile = data;
  cachedProfileUserId = user.id;
  return data;
}

export async function isCurrentUserAdmin() {
  const profile = await getMyProfile();
  return Boolean(profile?.is_admin);
}

// Safety net in case the signup trigger didn't run (e.g. schema applied after
// the first login).
export async function ensureProfile(user) {
  const client = getClient();
  if (!client || !user) return;
  const meta = user.user_metadata || {};
  await client.from('profiles').upsert({
    id: user.id,
    display_name: meta.full_name || meta.name || user.email || 'Anonymous',
    avatar_url: meta.avatar_url || null,
  }, { onConflict: 'id', ignoreDuplicates: true });
}

// --- Reads --------------------------------------------------------------------

const PACKAGE_SELECT = '*, profiles:owner_id (display_name, avatar_url)';

export async function listPackages({ search = '', category = '', sort = 'newest', ownerId = null } = {}) {
  const client = getClient();
  if (!client) {
    let rows = MOCK_PACKAGES.slice();
    if (ownerId) rows = rows.filter(p => p.owner_id === ownerId);
    if (category) rows = rows.filter(p => p.category === category);
    if (search) {
      const q = search.toLowerCase();
      rows = rows.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)));
    }
    return sortPackages(rows, sort);
  }

  let query = client.from('packages').select(PACKAGE_SELECT).eq('status', 'published');
  if (ownerId) query = query.eq('owner_id', ownerId);
  if (category) query = query.eq('category', category);
  if (search) {
    const q = search.replace(/[%,()]/g, ' ').trim();
    if (q) query = query.or(`name.ilike.%${q}%,summary.ilike.%${q}%`);
  }
  if (sort === 'downloads') query = query.order('download_count', { ascending: false });
  else if (sort === 'updated') query = query.order('updated_at', { ascending: false });
  else if (sort === 'name') query = query.order('name', { ascending: true });
  else query = query.order('created_at', { ascending: false });

  const { data, error } = await query;
  if (error) throw error;
  return data || [];
}

function sortPackages(rows, sort) {
  const sorted = rows.slice();
  if (sort === 'downloads') sorted.sort((a, b) => b.download_count - a.download_count);
  else if (sort === 'updated') sorted.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  else if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
  else sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  return sorted;
}

export async function listMyPackages(userId) {
  const client = requireClient();
  const { data, error } = await client
    .from('packages')
    .select(PACKAGE_SELECT)
    .eq('owner_id', userId)
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return data || [];
}

export async function getPackageBySlug(slug) {
  const client = getClient();
  if (!client) return MOCK_PACKAGES.find(p => p.slug === slug) || null;
  const { data, error } = await client.from('packages').select(PACKAGE_SELECT).eq('slug', slug).maybeSingle();
  if (error) throw error;
  return data;
}

export async function getPackageById(id) {
  const client = getClient();
  if (!client) return MOCK_PACKAGES.find(p => p.id === id) || null;
  const { data, error } = await client.from('packages').select(PACKAGE_SELECT).eq('id', id).maybeSingle();
  if (error) throw error;
  return data;
}

export async function listVersions(packageId) {
  const client = getClient();
  let rows;
  if (!client) {
    rows = (MOCK_VERSIONS[packageId] || []).slice();
  } else {
    const { data, error } = await client
      .from('package_versions')
      .select('*')
      .eq('package_id', packageId);
    if (error) throw error;
    rows = data || [];
  }
  // Newest version first, ordered by semver (not upload date).
  rows.sort((a, b) => semverCompare(b.version, a.version));
  return rows;
}

export async function getProfile(userId) {
  const client = getClient();
  if (!client) {
    const pkg = MOCK_PACKAGES.find(p => p.owner_id === userId);
    return pkg ? { id: userId, ...pkg.profiles } : null;
  }
  const { data, error } = await client.from('profiles').select('*').eq('id', userId).maybeSingle();
  if (error) throw error;
  return data;
}

export function getZipUrl(zipPath) {
  const client = getClient();
  if (!client || zipPath === '#') return null;
  return client.storage.from(ZIPS_BUCKET).getPublicUrl(zipPath).data.publicUrl;
}

export async function recordDownload(packageId, versionId) {
  const client = getClient();
  if (!client) return;
  try {
    await client.rpc('increment_download', { p_package: packageId, p_version: versionId });
  } catch (e) {
    console.warn('Could not record download:', e);
  }
}

// --- Validation ---------------------------------------------------------------

export function validateZipFile(file) {
  if (!file) throw new Error('Please select a ZIP file.');
  if (!/\.zip$/i.test(file.name)) throw new Error('The package file must be a .zip archive.');
  if (file.size > MAX_ZIP_BYTES) throw new Error('Maximum ZIP size is 25 MB.');
}

export function validateImageFile(file, label) {
  if (!/\.(png|jpe?g|webp|gif)$/i.test(file.name)) {
    throw new Error(`${label} must be a PNG, JPG, WebP or GIF image.`);
  }
  if (file.size > MAX_IMAGE_BYTES) {
    throw new Error(`${label} is too big (max ${MAX_IMAGE_BYTES / 1024 / 1024} MB per image).`);
  }
}

// --- Writes ---------------------------------------------------------------------

async function uploadFile(bucket, path, file) {
  const client = requireClient();
  const { error } = await client.storage.from(bucket).upload(path, file, {
    upsert: true,
    contentType: file.type || 'application/octet-stream',
    cacheControl: '3600',
  });
  if (error) throw new Error(`Upload failed (${file.name}): ${error.message}`);
  return { path, publicUrl: client.storage.from(bucket).getPublicUrl(path).data.publicUrl };
}

function safeName(name) {
  return name.replace(/[^A-Za-z0-9._-]+/g, '_');
}

// data: { name, slug, summary, descriptionMd, category, tags, license,
//         homepageUrl, repoUrl, minEngineVersion, status,
//         iconFile, screenshotFiles, version, changelogMd, zipFile }
export async function createPackage(user, data) {
  const client = requireClient();
  validateZipFile(data.zipFile);

  const packageId = crypto.randomUUID();
  const base = `${user.id}/${packageId}`;

  let iconUrl = null;
  if (data.iconFile) {
    validateImageFile(data.iconFile, 'Icon');
    iconUrl = (await uploadFile(MEDIA_BUCKET, `${base}/icon-${safeName(data.iconFile.name)}`, data.iconFile)).publicUrl;
  }

  const screenshots = [];
  for (let i = 0; i < (data.screenshotFiles || []).length; i++) {
    const file = data.screenshotFiles[i];
    validateImageFile(file, `Screenshot ${i + 1}`);
    screenshots.push((await uploadFile(MEDIA_BUCKET, `${base}/shots/${i}-${safeName(file.name)}`, file)).publicUrl);
  }

  const zipPath = `${base}/${data.version}/${data.slug}-${data.version}.zip`;
  await uploadFile(ZIPS_BUCKET, zipPath, data.zipFile);

  const { error: pkgError } = await client.from('packages').insert({
    id: packageId,
    owner_id: user.id,
    slug: data.slug,
    name: data.name,
    summary: data.summary,
    description_md: data.descriptionMd,
    category: data.category,
    tags: data.tags,
    license: data.license,
    homepage_url: data.homepageUrl || null,
    repo_url: data.repoUrl || null,
    min_engine_version: data.minEngineVersion || null,
    icon_url: iconUrl,
    screenshots,
    status: data.status || 'published',
    latest_version: data.version,
  });
  if (pkgError) {
    if (pkgError.code === '23505') throw new Error(`The URL id "${data.slug}" is already taken — pick another one.`);
    throw pkgError;
  }

  const { error: verError } = await client.from('package_versions').insert({
    package_id: packageId,
    version: data.version,
    changelog_md: data.changelogMd,
    zip_path: zipPath,
    zip_size: data.zipFile.size,
  });
  if (verError) {
    // Don't leave a package without any downloadable version behind.
    await client.from('packages').delete().eq('id', packageId);
    throw verError;
  }

  return packageId;
}

export async function updatePackage(user, pkg, fields, { iconFile = null, screenshotFiles = [] } = {}) {
  const client = requireClient();
  const base = `${user.id}/${pkg.id}`;
  const updates = { ...fields, updated_at: new Date().toISOString() };

  if (iconFile) {
    validateImageFile(iconFile, 'Icon');
    updates.icon_url = (await uploadFile(MEDIA_BUCKET, `${base}/icon-${safeName(iconFile.name)}`, iconFile)).publicUrl;
  }
  if (screenshotFiles.length > 0) {
    const screenshots = [];
    for (let i = 0; i < screenshotFiles.length; i++) {
      validateImageFile(screenshotFiles[i], `Screenshot ${i + 1}`);
      screenshots.push((await uploadFile(MEDIA_BUCKET, `${base}/shots/${i}-${safeName(screenshotFiles[i].name)}`, screenshotFiles[i])).publicUrl);
    }
    updates.screenshots = screenshots;
  }

  const { error } = await client.from('packages').update(updates).eq('id', pkg.id);
  if (error) throw error;
}

export async function publishVersion(user, pkg, { version, changelogMd, zipFile }) {
  const client = requireClient();
  validateZipFile(zipFile);

  const zipPath = `${user.id}/${pkg.id}/${version}/${pkg.slug}-${version}.zip`;
  await uploadFile(ZIPS_BUCKET, zipPath, zipFile);

  const { error: verError } = await client.from('package_versions').insert({
    package_id: pkg.id,
    version,
    changelog_md: changelogMd,
    zip_path: zipPath,
    zip_size: zipFile.size,
  });
  if (verError) {
    if (verError.code === '23505') throw new Error(`Version ${version} already exists for this package.`);
    throw verError;
  }

  const { error: pkgError } = await client.from('packages').update({
    latest_version: version,
    updated_at: new Date().toISOString(),
  }).eq('id', pkg.id);
  if (pkgError) throw pkgError;
}

export async function setPackageStatus(packageId, status) {
  const client = requireClient();
  const { error } = await client.from('packages').update({ status }).eq('id', packageId);
  if (error) throw error;
}

export async function deletePackage(pkg) {
  const client = requireClient();

  // Best-effort cleanup of stored files (rows are the source of truth).
  // Files live under the OWNER's folder — relevant when an admin deletes
  // someone else's package.
  for (const bucket of [ZIPS_BUCKET, MEDIA_BUCKET]) {
    try {
      const prefix = `${pkg.owner_id}/${pkg.id}`;
      const paths = await listAllFiles(client, bucket, prefix);
      if (paths.length > 0) await client.storage.from(bucket).remove(paths);
    } catch (e) {
      console.warn('Storage cleanup failed:', e);
    }
  }

  const { error } = await client.from('packages').delete().eq('id', pkg.id);
  if (error) throw error;
}

async function listAllFiles(client, bucket, prefix) {
  const out = [];
  const { data } = await client.storage.from(bucket).list(prefix, { limit: 100 });
  for (const entry of data || []) {
    if (entry.id) {
      out.push(`${prefix}/${entry.name}`);
    } else {
      out.push(...await listAllFiles(client, bucket, `${prefix}/${entry.name}`));
    }
  }
  return out;
}
