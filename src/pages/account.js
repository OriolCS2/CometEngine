import { navigate, currentRoute } from '../lib/router.js';
import {
  CATEGORIES, MAX_ZIP_BYTES, MAX_SCREENSHOTS,
  isBackendConfigured, getUser, signInWithGoogle, isCurrentUserAdmin, getMyProfile,
  listMyPackages, listAllPackagesAdmin, getPackageById, getPackageBySlug, listVersions,
  createPackage, updatePackage, publishVersion, setPackageStatus, deletePackage,
  setVersionDeprecated, setPackageDeprecated,
  findExistingSlugs, getDailyDownloads, updateMyBio,
} from '../lib/marketplace-api.js';
import {
  escapeHtml, renderMarkdown, formatBytes, formatDownloads, formatDate,
  semverCompare, showToast,
} from '../lib/ui.js';
import { inspectPackageArchive } from '../lib/package-archive.js';
import { compareSemver, versionChannel } from '../lib/package-manifest.js';

// Routes handled here:
//   #account               → my packages dashboard
//   #account/new           → publish a new package
//   #account/edit/{id}     → edit package metadata
//   #account/version/{id}  → publish a new version

export async function renderAccount(container, hash) {
  const parts = (hash || '#account').replace(/^#account\/?/, '').split('/').filter(Boolean);

  if (!isBackendConfigured()) {
    container.innerHTML = `
      <section class="mp-section">
        <div class="container mp-narrow">
          <div class="mp-auth-card">
            <i class="fas fa-plug-circle-xmark"></i>
            <h2>Backend not configured</h2>
            <p>The marketplace backend (Supabase) is not connected yet, so accounts and publishing are disabled.
               Follow the steps in <code>MARKETPLACE_SETUP.md</code> to enable it.</p>
            <a href="/marketplace" class="download-btn" style="font-size: 1rem;">Browse the demo Marketplace</a>
          </div>
        </div>
      </section>
    `;
    return;
  }

  const user = await getUser();
  if (!user) {
    renderSignIn(container);
    return;
  }

  if (parts[0] === 'admin') {
    await renderAdminPanel(container, user, parts[1] ? decodeURIComponent(parts[1]) : null);
  } else if (parts[0] === 'new') {
    await renderPublishFlow(container, user, null);
  } else if (parts[0] === 'edit' && parts[1]) {
    const pkg = await getOwnPackage(container, user, parts[1]);
    if (pkg) renderPackageForm(container, user, pkg);
  } else if (parts[0] === 'version' && parts[1]) {
    const pkg = await getOwnPackage(container, user, parts[1]);
    if (pkg) await renderPublishFlow(container, user, pkg);
  } else {
    await renderDashboard(container, user);
  }
}

async function getOwnPackage(container, user, id) {
  const pkg = await getPackageById(decodeURIComponent(id));
  if (!pkg || pkg.owner_id !== user.id) {
    container.innerHTML = `
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Package not found, or you are not its owner.</p></div>
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
      </div></section>
    `;
    return null;
  }
  return pkg;
}

// ---------------------------------------------------------------------------
// Sign-in
// ---------------------------------------------------------------------------

function renderSignIn(container) {
  container.innerHTML = `
    <section class="mp-section">
      <div class="container mp-narrow">
        <div class="mp-auth-card">
          <i class="fas fa-cubes"></i>
          <h2>Publish on the Comet Marketplace</h2>
          <p>Sign in to upload your own add-ons, manage your packages and publish new versions. It's free.</p>
          <button class="download-btn" id="acc-google-btn" style="font-size: 1rem;">
            <i class="fab fa-google"></i> Sign in with Google
          </button>
        </div>
      </div>
    </section>
  `;
  container.querySelector('#acc-google-btn').addEventListener('click', async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      showToast(`Sign-in failed: ${e.message}`, 'error');
    }
  });

  // Re-render once the session arrives (e.g. returning from the OAuth redirect).
  window.addEventListener('auth-changed', function onAuth(e) {
    window.removeEventListener('auth-changed', onAuth);
    if (e.detail.user && currentRoute().startsWith('#account')) {
      renderAccount(container, currentRoute());
    }
  });
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

async function renderDashboard(container, user) {
  const meta = user.user_metadata || {};
  const name = meta.full_name || meta.name || user.email || 'Account';
  const isAdmin = await isCurrentUserAdmin();
  const profile = await getMyProfile();

  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        <div class="acc-header">
          <div class="acc-identity">
            ${meta.avatar_url ? `<img src="${escapeHtml(meta.avatar_url)}" alt="" referrerpolicy="no-referrer">` : '<i class="fas fa-user-circle"></i>'}
            <div>
              <h1>${escapeHtml(name)} ${isAdmin ? '<span class="mp-badge mp-badge-accent" style="vertical-align: middle;"><i class="fas fa-shield-halved"></i> Admin</span>' : ''}</h1>
              <p>${escapeHtml(user.email || '')}</p>
            </div>
          </div>
          <a href="/account/new" class="download-btn" style="font-size: 1rem;"><i class="fas fa-upload"></i> Upload New Package</a>
        </div>
        ${isAdmin ? `
          <div class="adm-banner">
            <span><i class="fas fa-shield-halved"></i> You are an <strong>admin</strong> — you can moderate every package on the marketplace.</span>
            <a href="/account/admin" class="filter-btn"><i class="fas fa-list-check"></i> Manage all packages</a>
          </div>
        ` : ''}
        <div class="acc-bio-row">
          <input type="text" id="acc-bio" class="search-box" maxlength="200"
                 placeholder="Public publisher bio (shown on your publisher page)..."
                 value="${escapeHtml(profile?.bio || '')}">
          <button class="filter-btn" id="acc-bio-save"><i class="fas fa-floppy-disk"></i> Save bio</button>
        </div>
        <h2 class="acc-section-title">My Packages</h2>
        <div id="acc-list"><div class="loading">Loading your packages...</div></div>
      </div>
    </section>
  `;

  container.querySelector('#acc-bio-save').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      await updateMyBio(user.id, container.querySelector('#acc-bio').value.trim() || null);
      showToast('Bio saved.', 'success');
    } catch (err) {
      showToast(`Could not save the bio: ${err.message}`, 'error');
    }
    btn.disabled = false;
  });

  const list = container.querySelector('#acc-list');
  try {
    const packages = await listMyPackages(user.id);
    if (packages.length === 0) {
      list.innerHTML = `
        <div class="mp-empty">
          <i class="fas fa-box-open"></i>
          <p>You haven't published any packages yet.</p>
          <a href="/account/new" class="download-btn" style="font-size: 1rem; margin-top: 1rem;">Upload your first package</a>
        </div>
      `;
      return;
    }

    list.innerHTML = packages.map(pkg => `
      <div class="acc-pkg-block" data-id="${escapeHtml(pkg.id)}">
        <div class="acc-pkg-row">
          <div class="acc-pkg-info">
            ${pkg.icon_url ? `<img src="${escapeHtml(pkg.icon_url)}" alt="">` : '<div class="mp-card-icon-fallback acc-pkg-icon-fallback"><i class="fas fa-cube"></i></div>'}
            <div>
              <strong>${escapeHtml(pkg.name)}</strong>
              <div class="acc-pkg-meta">
                <span class="mp-badge ${pkg.status === 'published' ? 'mp-badge-green' : 'mp-badge-dim'}">${pkg.status === 'published' ? 'Published' : 'Draft (hidden)'}</span>
                ${pkg.deprecated ? '<span class="mp-badge mp-badge-warn">Deprecated</span>' : ''}
                <span><i class="fas fa-tag"></i> v${escapeHtml(pkg.latest_version || '—')}</span>
                <span><i class="fas fa-download"></i> ${formatDownloads(pkg.download_count)}</span>
                <span>Updated ${formatDate(pkg.updated_at)}</span>
              </div>
            </div>
          </div>
          <div class="acc-pkg-actions">
            <a class="filter-btn" href="/marketplace/${encodeURIComponent(pkg.slug)}" title="View public page"><i class="fas fa-eye"></i></a>
            <a class="filter-btn" href="/account/version/${encodeURIComponent(pkg.id)}" title="Publish new version"><i class="fas fa-circle-up"></i> New version</a>
            <a class="filter-btn" href="/account/edit/${encodeURIComponent(pkg.id)}" title="Edit presentation"><i class="fas fa-pen"></i> Edit</a>
            <button class="filter-btn acc-expand" title="Versions and stats"><i class="fas fa-chart-line"></i> Manage</button>
            <button class="filter-btn acc-toggle-status" title="${pkg.status === 'published' ? 'Hide from the marketplace' : 'Make public'}">
              ${pkg.status === 'published' ? '<i class="fas fa-eye-slash"></i> Unpublish' : '<i class="fas fa-globe"></i> Publish'}
            </button>
            <button class="filter-btn acc-delete" title="Delete package"><i class="fas fa-trash"></i></button>
          </div>
        </div>
        <div class="acc-pkg-details" hidden></div>
      </div>
    `).join('');

    list.querySelectorAll('.acc-pkg-block').forEach(block => {
      const pkg = packages.find(p => String(p.id) === block.dataset.id);

      block.querySelector('.acc-toggle-status').addEventListener('click', async (e) => {
        const btn = e.currentTarget;
        btn.disabled = true;
        try {
          const next = pkg.status === 'published' ? 'draft' : 'published';
          await setPackageStatus(pkg.id, next);
          showToast(next === 'published' ? `"${pkg.name}" is now public.` : `"${pkg.name}" is now hidden.`, 'success');
          renderDashboard(container, user);
        } catch (err) {
          btn.disabled = false;
          showToast(`Could not change status: ${err.message}`, 'error');
        }
      });

      block.querySelector('.acc-delete').addEventListener('click', async (e) => {
        if (!confirm(`Delete "${pkg.name}" permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.`)) return;
        const btn = e.currentTarget;
        btn.disabled = true;
        try {
          await deletePackage(pkg);
          showToast(`"${pkg.name}" was deleted.`, 'success');
          renderDashboard(container, user);
        } catch (err) {
          btn.disabled = false;
          showToast(`Delete failed: ${err.message}`, 'error');
        }
      });

      block.querySelector('.acc-expand').addEventListener('click', async () => {
        const details = block.querySelector('.acc-pkg-details');
        if (!details.hidden) {
          details.hidden = true;
          return;
        }
        details.hidden = false;
        details.innerHTML = '<div class="loading">Loading versions and stats...</div>';
        await renderPackageManage(details, container, user, pkg);
      });
    });
  } catch (e) {
    list.innerHTML = `<div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Error loading packages: ${escapeHtml(e.message)}</p></div>`;
  }
}

// ---------------------------------------------------------------------------
// Per-package manage view: daily download sparkline + version deprecation
// ---------------------------------------------------------------------------

function sparklineSvg(days) {
  if (!days || days.length === 0) {
    return '<p class="acc-spark-empty">No downloads in the last 30 days.</p>';
  }
  const values = days.map(d => Number(d.downloads) || 0);
  const max = Math.max(...values, 1);
  const width = 320;
  const height = 48;
  const step = values.length > 1 ? width / (values.length - 1) : width;
  const points = values.map((v, i) => `${(i * step).toFixed(1)},${(height - (v / max) * (height - 4) - 2).toFixed(1)}`).join(' ');
  const total = values.reduce((s, v) => s + v, 0);
  return `
    <div class="acc-spark">
      <svg viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" aria-hidden="true">
        <polyline points="${points}" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>
      <span>${total} download${total === 1 ? '' : 's'} · last ${days.length} day${days.length === 1 ? '' : 's'}</span>
    </div>
  `;
}

async function renderPackageManage(host, container, user, pkg) {
  let versions = [];
  let days = [];
  try {
    [versions, days] = await Promise.all([listVersions(pkg.id), getDailyDownloads(pkg.id, 30)]);
  } catch (e) {
    host.innerHTML = `<div class="form-error">${escapeHtml(e.message)}</div>`;
    return;
  }

  host.innerHTML = `
    ${sparklineSvg(days)}
    <div class="acc-pkg-deprecate">
      <button class="filter-btn" id="acc-pkg-deprecate-btn">
        ${pkg.deprecated ? '<i class="fas fa-rotate-left"></i> Un-deprecate package' : '<i class="fas fa-ban"></i> Deprecate package'}
      </button>
      ${pkg.deprecated && pkg.deprecated_message ? `<span class="acc-deprecate-msg">${escapeHtml(pkg.deprecated_message)}</span>` : ''}
    </div>
    <table class="pub-deps-table acc-versions-table">
      <thead><tr><th>Version</th><th>Published</th><th>Downloads</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${versions.map(v => `
          <tr data-version-id="${escapeHtml(v.id)}">
            <td>${v.deprecated ? `<s>v${escapeHtml(v.version)}</s>` : `v${escapeHtml(v.version)}`}</td>
            <td>${formatDate(v.created_at)}</td>
            <td>${formatDownloads(v.download_count)}</td>
            <td>${v.deprecated ? `<span class="mp-badge mp-badge-warn" title="${escapeHtml(v.deprecated_message || '')}">Deprecated</span>` : '<span class="mp-badge mp-badge-green">Active</span>'}</td>
            <td><button class="filter-btn acc-ver-deprecate">${v.deprecated ? 'Un-deprecate' : 'Deprecate'}</button></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  host.querySelector('#acc-pkg-deprecate-btn').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      if (pkg.deprecated) {
        await setPackageDeprecated(pkg.id, false, null);
        showToast(`"${pkg.name}" is no longer deprecated.`, 'success');
      } else {
        const message = prompt(`Deprecate "${pkg.name}"?\n\nOptional message shown to users (e.g. "Superseded by acme-ui-kit-2"):`);
        if (message === null) {
          btn.disabled = false;
          return;
        }
        await setPackageDeprecated(pkg.id, true, message.trim() || null);
        showToast(`"${pkg.name}" is now deprecated.`, 'success');
      }
      renderDashboard(container, user);
    } catch (err) {
      btn.disabled = false;
      showToast(`Could not change the deprecation: ${err.message}`, 'error');
    }
  });

  host.querySelectorAll('.acc-ver-deprecate').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const row = e.currentTarget.closest('tr');
      const version = versions.find(v => String(v.id) === row.dataset.versionId);
      if (!version) return;
      e.currentTarget.disabled = true;
      try {
        if (version.deprecated) {
          await setVersionDeprecated(version.id, false, null);
          showToast(`v${version.version} is active again.`, 'success');
        } else {
          const message = prompt(`Deprecate v${version.version}?\n\nOptional message shown to users:`);
          if (message === null) {
            e.currentTarget.disabled = false;
            return;
          }
          await setVersionDeprecated(version.id, true, message.trim() || null);
          showToast(`v${version.version} is now deprecated.`, 'success');
        }
        await renderPackageManage(host, container, user, pkg);
      } catch (err) {
        e.currentTarget.disabled = false;
        showToast(`Could not change the deprecation: ${err.message}`, 'error');
      }
    });
  });
}

// ---------------------------------------------------------------------------
// Markdown editor helper (Write / Preview tabs)
// ---------------------------------------------------------------------------

function mdEditorHtml(id, label, value, placeholder, required, help) {
  return `
    <div class="form-field">
      <label for="${id}">${label}${required ? ' <span class="req">*</span>' : ''}</label>
      ${help ? `<div class="form-help">${help}</div>` : ''}
      <div class="md-editor" data-md-editor="${id}">
        <div class="md-editor-tabs">
          <button type="button" class="md-tab active" data-mode="write">Write</button>
          <button type="button" class="md-tab" data-mode="preview">Preview</button>
          <span class="md-hint"><i class="fab fa-markdown"></i> Markdown supported</span>
        </div>
        <textarea id="${id}" rows="8" placeholder="${escapeHtml(placeholder)}" ${required ? 'required' : ''}>${escapeHtml(value || '')}</textarea>
        <div class="md-preview markdown-content" hidden></div>
      </div>
    </div>
  `;
}

function wireMdEditors(root) {
  root.querySelectorAll('[data-md-editor]').forEach(editor => {
    const textarea = editor.querySelector('textarea');
    const preview = editor.querySelector('.md-preview');
    editor.querySelectorAll('.md-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        editor.querySelectorAll('.md-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const isPreview = tab.dataset.mode === 'preview';
        textarea.hidden = isPreview;
        preview.hidden = !isPreview;
        if (isPreview) {
          preview.innerHTML = textarea.value.trim()
            ? renderMarkdown(textarea.value)
            : '<p style="color: var(--text-dim);">Nothing to preview.</p>';
        }
      });
    });
  });
}

// ---------------------------------------------------------------------------
// Edit package (presentation only: metadata comes from the package manifest)
// ---------------------------------------------------------------------------

function renderPackageForm(container, user, pkg) {
  container.innerHTML = `
    <section class="mp-section">
      <div class="container mp-narrow">
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title">Edit "${escapeHtml(pkg.name)}"</h1>
        <p class="acc-form-subtitle">
          Name, description, license and dependencies come from the <code>package.cometPackage</code> manifest inside the
          uploaded archive — publish a new version to change them. Here you edit how the package is presented.
        </p>

        <form id="pkg-form" class="mp-form" novalidate>
          <h3 class="form-section-title"><i class="fas fa-circle-info"></i> From the manifest (read-only)</h3>
          <div class="pub-review-grid">
            <div><span>Name</span><strong>${escapeHtml(pkg.name)}</strong></div>
            <div><span>Slug</span><strong>${escapeHtml(pkg.slug)}</strong></div>
            <div><span>Latest version</span><strong>${escapeHtml(pkg.latest_version || '—')}</strong></div>
            <div><span>License</span><strong>${escapeHtml(pkg.license || '—')}</strong></div>
            <div><span>Type</span><strong>${escapeHtml(pkg.package_type || 'package')}</strong></div>
            <div><span>Min engine</span><strong>${escapeHtml(pkg.min_engine_version || '—')}</strong></div>
          </div>

          <h3 class="form-section-title"><i class="fas fa-sliders"></i> Presentation</h3>
          <div class="form-row">
            <div class="form-field">
              <label for="f-category">Category <span class="req">*</span></label>
              <select id="f-category" required>
                ${CATEGORIES.map(c => `<option value="${escapeHtml(c)}" ${pkg.category === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
              </select>
            </div>
            <div class="form-field">
              <label for="f-tags">Tags</label>
              <div class="form-help">Comma-separated, up to 8.</div>
              <input type="text" id="f-tags" placeholder="particles, vfx, 2d" value="${escapeHtml((pkg.tags || []).join(', '))}">
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label for="f-icon">Icon</label>
              <div class="form-help">Square image, PNG/JPG, max 4 MB.${pkg.icon_url ? ' Leave empty to keep the current icon.' : ''}</div>
              <input type="file" id="f-icon" accept="image/png,image/jpeg,image/webp,image/gif">
            </div>
            <div class="form-field">
              <label for="f-shots">Screenshots</label>
              <div class="form-help">Up to ${MAX_SCREENSHOTS} images, max 4 MB each.${(pkg.screenshots || []).length ? ' Selecting new files replaces ALL current screenshots.' : ''}</div>
              <input type="file" id="f-shots" accept="image/png,image/jpeg,image/webp,image/gif" multiple>
            </div>
          </div>

          <div class="form-error" id="form-error" hidden></div>

          <div class="form-actions">
            <button type="submit" class="download-btn" id="form-submit" style="font-size: 1.05rem;">
              <i class="fas fa-floppy-disk"></i> Save changes
            </button>
            <a href="/account" class="filter-btn" style="padding: 0.85rem 1.5rem;">Cancel</a>
          </div>
        </form>
      </div>
    </section>
  `;

  const form = container.querySelector('#pkg-form');
  const formError = container.querySelector('#form-error');
  const submitBtn = container.querySelector('#form-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formError.hidden = true;
    try {
      const tags = container.querySelector('#f-tags').value
        .split(',').map(t => t.trim().toLowerCase()).filter(Boolean).slice(0, 8);
      setBusy(submitBtn, true, 'Saving...');
      await updatePackage(user, pkg, {
        category: container.querySelector('#f-category').value,
        tags,
      }, {
        iconFile: container.querySelector('#f-icon').files[0] || null,
        screenshotFiles: limitedShots(container),
      });
      showToast('Package updated.', 'success');
      navigate('/account');
    } catch (err) {
      console.error(err);
      formError.textContent = err.message;
      formError.hidden = false;
      setBusy(submitBtn, false, 'Save changes');
    }
  });
}

function limitedShots(root) {
  const files = Array.from(root.querySelector('#f-shots').files || []);
  if (files.length > MAX_SCREENSHOTS) {
    throw new Error(`You can upload at most ${MAX_SCREENSHOTS} screenshots.`);
  }
  return files;
}

function setBusy(btn, busy, label) {
  btn.disabled = busy;
  btn.innerHTML = busy
    ? `<i class="fas fa-spinner fa-spin"></i> ${escapeHtml(label)}`
    : `<i class="fas fa-rocket"></i> ${escapeHtml(label)}`;
}

// ---------------------------------------------------------------------------
// Manifest-first publish flow (new package and new version).
// Drop the .cometpkg → the manifest inside is parsed, validated and reviewed —
// there is no manual metadata entry, so registry rows can never drift from
// what the engine reads at install time.
// ---------------------------------------------------------------------------

async function renderPublishFlow(container, user, pkg) {
  const isNewVersion = Boolean(pkg);
  let latest = null;
  if (isNewVersion) {
    try {
      const versions = await listVersions(pkg.id);
      latest = versions[0] || null;
    } catch (e) {
      console.error(e);
    }
  }

  container.innerHTML = `
    <section class="mp-section">
      <div class="container mp-narrow">
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title">${isNewVersion ? `New version of "${escapeHtml(pkg.name)}"` : 'Publish a New Package'}</h1>
        <p class="acc-form-subtitle">
          Drop the <strong>.cometpkg</strong> exported by the Comet editor (<em>Package Manager → Export package…</em>).
          Every metadata field — name, version, description, license, dependencies — is read from the
          <code>package.cometPackage</code> manifest inside the archive.
          ${isNewVersion && latest ? `Current latest version: <strong>v${escapeHtml(latest.version)}</strong>.` : ''}
        </p>

        <div class="pub-dropzone" id="pub-drop">
          <i class="fas fa-file-zipper"></i>
          <p><strong>Drop the .cometpkg here</strong> or click to pick it</p>
          <p class="pub-dropzone-hint">.cometpkg or .zip · max 25 MB</p>
          <input type="file" id="pub-file" accept=".cometpkg,.zip,application/zip,application/x-zip-compressed" hidden>
        </div>
        <div class="form-error" id="pub-error" hidden></div>
        <div id="pub-review" hidden></div>
      </div>
    </section>
  `;

  const drop = container.querySelector('#pub-drop');
  const fileInput = container.querySelector('#pub-file');
  const errorBox = container.querySelector('#pub-error');
  const reviewHost = container.querySelector('#pub-review');

  const fail = (message) => {
    errorBox.textContent = message;
    errorBox.hidden = false;
    reviewHost.hidden = true;
    reviewHost.innerHTML = '';
  };

  const handleFile = async (file) => {
    errorBox.hidden = true;
    reviewHost.hidden = true;
    if (!file) return;
    if (!/\.(cometpkg|zip)$/i.test(file.name)) return fail('The package must be a .cometpkg (or .zip) archive.');
    if (file.size > MAX_ZIP_BYTES) return fail(`Maximum archive size is 25 MB (your file is ${formatBytes(file.size)}).`);

    drop.classList.add('pub-dropzone-busy');
    try {
      const inspection = await inspectPackageArchive(file);
      const problems = [...inspection.manifestErrors];
      const manifest = inspection.manifest;

      if (manifest && !problems.length) {
        if (isNewVersion) {
          if (manifest.slug !== pkg.slug) {
            problems.push(`The archive is the package "${manifest.slug}", but you are publishing a version of "${pkg.slug}".`);
          }
          if (latest && compareSemver(manifest.version, latest.version) <= 0) {
            problems.push(`The manifest version (${manifest.version}) must be higher than the current latest (v${latest.version}).`);
          }
        } else {
          const existing = await getPackageBySlug(manifest.slug);
          if (existing) {
            problems.push(`The slug "${manifest.slug}" is already taken on this registry${existing.owner_id === user.id ? ' by one of your packages — publish a new version of it instead' : ''}.`);
          }
        }
      }

      let missingDeps = [];
      if (manifest && Object.keys(manifest.dependencies || {}).length > 0) {
        const wanted = Object.keys(manifest.dependencies);
        const existing = await findExistingSlugs(wanted);
        missingDeps = wanted.filter(slug => !existing.has(slug));
      }

      renderReview(file, inspection, problems, missingDeps);
    } catch (e) {
      console.error(e);
      fail(e.message);
    } finally {
      drop.classList.remove('pub-dropzone-busy');
    }
  };

  drop.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => handleFile(fileInput.files[0]));
  drop.addEventListener('dragover', (e) => { e.preventDefault(); drop.classList.add('pub-dropzone-over'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('pub-dropzone-over'));
  drop.addEventListener('drop', (e) => {
    e.preventDefault();
    drop.classList.remove('pub-dropzone-over');
    handleFile(e.dataTransfer.files[0]);
  });

  function renderReview(file, inspection, problems, missingDeps) {
    const manifest = inspection.manifest;
    const blocked = problems.length > 0;
    const channel = manifest ? versionChannel(manifest.version) : 'release';
    const deps = manifest ? Object.entries(manifest.dependencies || {}) : [];

    reviewHost.innerHTML = `
      ${blocked ? `
        <div class="pub-problems">
          <h3><i class="fas fa-triangle-exclamation"></i> This archive cannot be published</h3>
          <ul>${problems.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul>
        </div>
      ` : `
        <h3 class="form-section-title"><i class="fas fa-file-circle-check"></i> From the manifest (read-only)</h3>
        <div class="pub-review-grid">
          <div><span>Name</span><strong>${escapeHtml(manifest.displayName)}</strong></div>
          <div><span>Slug</span><strong>${escapeHtml(manifest.slug)}</strong></div>
          <div><span>Version</span><strong>${escapeHtml(manifest.version)}</strong> ${channel !== 'release' ? `<span class="mp-badge ${channel === 'pre' ? 'mp-badge-accent' : 'mp-badge-dim'}">${channel === 'pre' ? 'Pre-release' : 'Experimental'}</span>` : ''}</div>
          <div><span>Type</span><strong>${escapeHtml(manifest.packageType || 'package')}</strong></div>
          <div><span>License</span><strong>${escapeHtml(manifest.license || '—')}</strong></div>
          <div><span>Min engine</span><strong>${escapeHtml(manifest.minEngineVersion || '—')}</strong></div>
          <div><span>Author</span><strong>${escapeHtml(manifest.author?.name || '—')}</strong></div>
          <div><span>Archive</span><strong>${escapeHtml(file.name)} · ${formatBytes(file.size)} · ${inspection.fileCount} files</strong></div>
          <div class="pub-grid-wide"><span>Summary</span><strong>${escapeHtml(manifest.summary)}</strong></div>
          <div class="pub-grid-wide"><span>sha256</span><code class="pub-sha">${escapeHtml(inspection.sha256)}</code></div>
        </div>

        ${deps.length > 0 ? `
          <h3 class="form-section-title"><i class="fas fa-diagram-project"></i> Dependencies</h3>
          <table class="pub-deps-table">
            <thead><tr><th>Package</th><th>Range</th><th>On this registry</th></tr></thead>
            <tbody>
              ${deps.map(([slug, range]) => `
                <tr>
                  <td>${escapeHtml(slug)}</td>
                  <td><code>${escapeHtml(range)}</code></td>
                  <td>${missingDeps.includes(slug) ? '<span class="mp-badge mp-badge-warn"><i class="fas fa-triangle-exclamation"></i> Missing</span>' : '<span class="mp-badge mp-badge-green"><i class="fas fa-check"></i> Found</span>'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          ${missingDeps.length > 0 ? `
            <label class="pub-ack">
              <input type="checkbox" id="pub-ack-deps">
              Publish anyway — I know consumers cannot resolve ${missingDeps.length === 1 ? 'this dependency' : 'these dependencies'} until ${missingDeps.length === 1 ? 'it is' : 'they are'} published here.
            </label>
          ` : ''}
        ` : ''}

        ${inspection.versionChangelog ? `
          <h3 class="form-section-title"><i class="fas fa-scroll"></i> Changelog for ${escapeHtml(manifest.version)} (from CHANGELOG.md)</h3>
          <div class="markdown-content pub-changelog">${renderMarkdown(inspection.versionChangelog)}</div>
        ` : `
          <div class="form-help" style="margin: 0.75rem 0;"><i class="fas fa-circle-info"></i> The archive's CHANGELOG.md has no section for ${escapeHtml(manifest?.version || 'this version')}; the version will be published without a changelog.</div>
        `}

        <h3 class="form-section-title"><i class="fas fa-sliders"></i> Presentation</h3>
        <div class="form-row">
          <div class="form-field">
            <label for="pub-category">Category <span class="req">*</span></label>
            <select id="pub-category" required>
              ${CATEGORIES.map(c => `<option value="${escapeHtml(c)}" ${((manifest.category && manifest.category === c) || (!manifest.category && c === 'Other') || (isNewVersion && pkg.category === c)) ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
            </select>
          </div>
          <div class="form-field">
            <label for="pub-tags">Extra tags</label>
            <div class="form-help">Added to the manifest tags (${escapeHtml((manifest.tags || []).join(', ') || 'none')}).</div>
            <input type="text" id="pub-tags" placeholder="particles, vfx" value="${escapeHtml(isNewVersion ? (pkg.tags || []).join(', ') : '')}">
          </div>
        </div>
        ${isNewVersion ? '' : `
          <div class="form-row">
            <div class="form-field">
              <label for="pub-icon">Icon (recommended)</label>
              <div class="form-help">Square image, PNG/JPG, max 4 MB.</div>
              <input type="file" id="pub-icon" accept="image/png,image/jpeg,image/webp,image/gif">
            </div>
            <div class="form-field">
              <label for="pub-shots">Screenshots</label>
              <div class="form-help">Up to ${MAX_SCREENSHOTS} images, max 4 MB each.</div>
              <input type="file" id="pub-shots" accept="image/png,image/jpeg,image/webp,image/gif" multiple>
            </div>
          </div>
        `}

        <div class="form-error" id="pub-submit-error" hidden></div>
        <div class="form-actions">
          <button type="button" class="download-btn" id="pub-submit" style="font-size: 1.05rem;">
            <i class="fas fa-rocket"></i> ${isNewVersion ? `Publish v${escapeHtml(manifest.version)}` : 'Publish package'}
          </button>
          <a href="/account" class="filter-btn" style="padding: 0.85rem 1.5rem;">Cancel</a>
        </div>
      `}
    `;
    reviewHost.hidden = false;
    if (blocked) return;

    const submitBtn = reviewHost.querySelector('#pub-submit');
    const submitError = reviewHost.querySelector('#pub-submit-error');
    submitBtn.addEventListener('click', async () => {
      submitError.hidden = true;
      try {
        if (missingDeps.length > 0 && !reviewHost.querySelector('#pub-ack-deps')?.checked) {
          throw new Error('Some dependencies are not on this registry yet — tick the checkbox to publish anyway.');
        }
        const extraTags = reviewHost.querySelector('#pub-tags').value
          .split(',').map(t => t.trim().toLowerCase()).filter(Boolean);
        const tags = [...new Set([...(manifest.tags || []).map(t => String(t).toLowerCase()), ...extraTags])].slice(0, 8);
        const category = reviewHost.querySelector('#pub-category').value;
        const changelogMd = inspection.versionChangelog || '';

        setBusy(submitBtn, true, 'Uploading...');
        if (isNewVersion) {
          await publishVersion(user, pkg, {
            version: manifest.version,
            changelogMd,
            zipFile: file,
            dependencies: manifest.dependencies || {},
            minEngineVersion: manifest.minEngineVersion || null,
            sha256: inspection.sha256,
            manifest,
            samples: manifest.samples || [],
            assemblies: manifest.assemblies || [],
            packageUpdates: {
              name: manifest.displayName,
              summary: manifest.summary,
              description_md: manifest.description || inspection.readme || manifest.summary,
              readme_md: inspection.readme || null,
              license: manifest.license || 'See LICENSE.md',
              min_engine_version: manifest.minEngineVersion || null,
              homepage_url: manifest.homepageUrl || null,
              repo_url: manifest.repoUrl || null,
              category,
              tags,
            },
          });
          showToast(`v${manifest.version} published!`, 'success');
        } else {
          await createPackage(user, {
            name: manifest.displayName,
            slug: manifest.slug,
            summary: manifest.summary,
            descriptionMd: manifest.description || inspection.readme || manifest.summary,
            readmeMd: inspection.readme || null,
            category,
            tags,
            license: manifest.license || 'See LICENSE.md',
            homepageUrl: manifest.homepageUrl || null,
            repoUrl: manifest.repoUrl || null,
            minEngineVersion: manifest.minEngineVersion || null,
            packageType: manifest.packageType || 'package',
            status: 'published',
            iconFile: reviewHost.querySelector('#pub-icon')?.files[0] || null,
            screenshotFiles: Array.from(reviewHost.querySelector('#pub-shots')?.files || []).slice(0, MAX_SCREENSHOTS),
            version: manifest.version,
            changelogMd,
            zipFile: file,
            dependencies: manifest.dependencies || {},
            sha256: inspection.sha256,
            manifest,
            samples: manifest.samples || [],
            assemblies: manifest.assemblies || [],
          });
          showToast('Your package is live!', 'success');
        }
        navigate('/account');
      } catch (err) {
        console.error(err);
        submitError.textContent = err.message;
        submitError.hidden = false;
        setBusy(submitBtn, false, isNewVersion ? `Publish v${manifest.version}` : 'Publish package');
      }
    });
  }
}

// ---------------------------------------------------------------------------
// Admin panel
//   #account/admin            → all publishers (filterable)
//   #account/admin/{ownerId}  → one publisher's packages, with moderation
// ---------------------------------------------------------------------------

async function renderAdminPanel(container, user, ownerId) {
  if (!(await isCurrentUserAdmin())) {
    container.innerHTML = `
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-empty"><i class="fas fa-lock"></i><p>This area is for administrators only.</p></div>
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
      </div></section>
    `;
    return;
  }

  container.innerHTML = `<section class="mp-section"><div class="container"><div class="loading">Loading all packages...</div></div></section>`;

  let all;
  try {
    all = await listAllPackagesAdmin();
  } catch (e) {
    container.innerHTML = `<section class="mp-section"><div class="container"><div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>${escapeHtml(e.message)}</p></div></div></section>`;
    return;
  }

  // Group packages per publisher.
  const publishers = new Map();
  for (const pkg of all) {
    if (!publishers.has(pkg.owner_id)) {
      publishers.set(pkg.owner_id, {
        ownerId: pkg.owner_id,
        name: pkg.profiles?.display_name || 'Unknown user',
        avatar: pkg.profiles?.avatar_url || null,
        packages: [],
      });
    }
    publishers.get(pkg.owner_id).packages.push(pkg);
  }

  if (ownerId) {
    renderAdminUserView(container, user, publishers.get(ownerId), ownerId);
  } else {
    renderAdminUsersList(container, publishers, all.length);
  }
}

function renderAdminUsersList(container, publishers, totalCount) {
  const rows = [...publishers.values()].sort((a, b) => b.packages.length - a.packages.length);

  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title"><i class="fas fa-shield-halved" style="color: var(--accent-color);"></i> Admin — All Packages</h1>
        <p class="acc-form-subtitle">${totalCount} package${totalCount === 1 ? '' : 's'} from ${rows.length} publisher${rows.length === 1 ? '' : 's'} (drafts included). Click a publisher to moderate their packages.</p>
        <input type="text" id="adm-filter" class="search-box" placeholder="Filter by publisher name...">
        <div id="adm-users"></div>
      </div>
    </section>
  `;

  const listHost = container.querySelector('#adm-users');
  const renderRows = (filter) => {
    const q = (filter || '').toLowerCase();
    const filtered = q ? rows.filter(r => r.name.toLowerCase().includes(q)) : rows;
    listHost.innerHTML = filtered.map(r => {
      const downloads = r.packages.reduce((s, p) => s + (p.download_count || 0), 0);
      const drafts = r.packages.filter(p => p.status !== 'published').length;
      return `
        <a class="acc-pkg-row adm-user-row" href="/account/admin/${encodeURIComponent(r.ownerId)}">
          <div class="acc-pkg-info">
            ${r.avatar ? `<img src="${escapeHtml(r.avatar)}" alt="" referrerpolicy="no-referrer" style="border-radius: 50%;">` : '<div class="mp-card-icon-fallback acc-pkg-icon-fallback" style="border-radius: 50%;"><i class="fas fa-user"></i></div>'}
            <div>
              <strong>${escapeHtml(r.name)}</strong>
              <div class="acc-pkg-meta">
                <span><i class="fas fa-cube"></i> ${r.packages.length} package${r.packages.length === 1 ? '' : 's'}</span>
                ${drafts > 0 ? `<span class="mp-badge mp-badge-dim">${drafts} draft${drafts === 1 ? '' : 's'}</span>` : ''}
                <span><i class="fas fa-download"></i> ${formatDownloads(downloads)}</span>
              </div>
            </div>
          </div>
          <span style="color: var(--text-dim);"><i class="fas fa-chevron-right"></i></span>
        </a>
      `;
    }).join('') || '<div class="mp-empty"><p>No publishers match that name.</p></div>';
  };

  renderRows('');
  container.querySelector('#adm-filter').addEventListener('input', (e) => renderRows(e.target.value));
}

function renderAdminUserView(container, user, publisher, ownerId) {
  if (!publisher) {
    container.innerHTML = `
      <section class="mp-section"><div class="container">
        <a href="/account/admin" class="mp-back"><i class="fas fa-arrow-left"></i> Back to all publishers</a>
        <div class="mp-empty"><p>This user has no packages (or was already cleaned up).</p></div>
      </div></section>
    `;
    return;
  }

  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        <a href="/account/admin" class="mp-back"><i class="fas fa-arrow-left"></i> Back to all publishers</a>
        <div class="acc-header" style="margin-bottom: 2rem;">
          <div class="acc-identity">
            ${publisher.avatar ? `<img src="${escapeHtml(publisher.avatar)}" alt="" referrerpolicy="no-referrer">` : '<i class="fas fa-user-circle"></i>'}
            <div>
              <h1>${escapeHtml(publisher.name)}</h1>
              <p>${publisher.packages.length} package${publisher.packages.length === 1 ? '' : 's'} · admin moderation view</p>
            </div>
          </div>
        </div>
        <div id="adm-pkgs">
          ${publisher.packages.map(pkg => `
            <div class="acc-pkg-row" data-id="${escapeHtml(pkg.id)}">
              <div class="acc-pkg-info">
                ${pkg.icon_url ? `<img src="${escapeHtml(pkg.icon_url)}" alt="">` : '<div class="mp-card-icon-fallback acc-pkg-icon-fallback"><i class="fas fa-cube"></i></div>'}
                <div>
                  <strong>${escapeHtml(pkg.name)}</strong>
                  <div class="acc-pkg-meta">
                    <span class="mp-badge ${pkg.status === 'published' ? 'mp-badge-green' : 'mp-badge-dim'}">${pkg.status === 'published' ? 'Published' : 'Draft (hidden)'}</span>
                    <span><i class="fas fa-tag"></i> v${escapeHtml(pkg.latest_version || '—')}</span>
                    <span><i class="fas fa-download"></i> ${formatDownloads(pkg.download_count)}</span>
                    <span>Updated ${formatDate(pkg.updated_at)}</span>
                  </div>
                </div>
              </div>
              <div class="acc-pkg-actions">
                <a class="filter-btn" href="/marketplace/${encodeURIComponent(pkg.slug)}" title="View public page"><i class="fas fa-eye"></i> View</a>
                <button class="filter-btn adm-toggle-status">
                  ${pkg.status === 'published' ? '<i class="fas fa-eye-slash"></i> Unpublish' : '<i class="fas fa-globe"></i> Publish'}
                </button>
                <button class="filter-btn acc-delete adm-delete"><i class="fas fa-trash"></i> Delete</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.querySelectorAll('#adm-pkgs .acc-pkg-row').forEach(row => {
    const pkg = publisher.packages.find(p => String(p.id) === row.dataset.id);

    row.querySelector('.adm-toggle-status').addEventListener('click', async (e) => {
      const btn = e.currentTarget;
      btn.disabled = true;
      try {
        const next = pkg.status === 'published' ? 'draft' : 'published';
        await setPackageStatus(pkg.id, next);
        showToast(next === 'published' ? `"${pkg.name}" is now public.` : `"${pkg.name}" is now hidden.`, 'success');
        renderAdminPanel(container, user, ownerId);
      } catch (err) {
        btn.disabled = false;
        showToast(`Could not change status: ${err.message}`, 'error');
      }
    });

    row.querySelector('.adm-delete').addEventListener('click', async (e) => {
      if (!confirm(`Delete "${pkg.name}" by ${publisher.name} permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.`)) return;
      const btn = e.currentTarget;
      btn.disabled = true;
      try {
        await deletePackage(pkg);
        showToast(`"${pkg.name}" was deleted.`, 'success');
        renderAdminPanel(container, user, ownerId);
      } catch (err) {
        btn.disabled = false;
        showToast(`Delete failed: ${err.message}`, 'error');
      }
    });
  });
}
