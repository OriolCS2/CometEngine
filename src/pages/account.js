import {
  CATEGORIES, LICENSES, MAX_ZIP_BYTES, MAX_SCREENSHOTS,
  isBackendConfigured, getUser, signInWithGoogle,
  listMyPackages, getPackageById, listVersions,
  createPackage, updatePackage, publishVersion, setPackageStatus, deletePackage,
} from '../lib/marketplace-api.js';
import {
  escapeHtml, renderMarkdown, formatBytes, formatDownloads, formatDate,
  isValidSemver, semverCompare, slugify, showToast,
} from '../lib/ui.js';

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
            <a href="#marketplace" class="download-btn" style="font-size: 1rem;">Browse the demo Marketplace</a>
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

  if (parts[0] === 'new') {
    renderPackageForm(container, user, null);
  } else if (parts[0] === 'edit' && parts[1]) {
    const pkg = await getOwnPackage(container, user, parts[1]);
    if (pkg) renderPackageForm(container, user, pkg);
  } else if (parts[0] === 'version' && parts[1]) {
    const pkg = await getOwnPackage(container, user, parts[1]);
    if (pkg) renderVersionForm(container, user, pkg);
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
        <a href="#account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
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
    if (e.detail.user && window.location.hash.startsWith('#account')) {
      renderAccount(container, window.location.hash);
    }
  });
}

// ---------------------------------------------------------------------------
// Dashboard
// ---------------------------------------------------------------------------

async function renderDashboard(container, user) {
  const meta = user.user_metadata || {};
  const name = meta.full_name || meta.name || user.email || 'Account';

  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        <div class="acc-header">
          <div class="acc-identity">
            ${meta.avatar_url ? `<img src="${escapeHtml(meta.avatar_url)}" alt="" referrerpolicy="no-referrer">` : '<i class="fas fa-user-circle"></i>'}
            <div>
              <h1>${escapeHtml(name)}</h1>
              <p>${escapeHtml(user.email || '')}</p>
            </div>
          </div>
          <a href="#account/new" class="download-btn" style="font-size: 1rem;"><i class="fas fa-upload"></i> Upload New Package</a>
        </div>
        <h2 class="acc-section-title">My Packages</h2>
        <div id="acc-list"><div class="loading">Loading your packages...</div></div>
      </div>
    </section>
  `;

  const list = container.querySelector('#acc-list');
  try {
    const packages = await listMyPackages(user.id);
    if (packages.length === 0) {
      list.innerHTML = `
        <div class="mp-empty">
          <i class="fas fa-box-open"></i>
          <p>You haven't published any packages yet.</p>
          <a href="#account/new" class="download-btn" style="font-size: 1rem; margin-top: 1rem;">Upload your first package</a>
        </div>
      `;
      return;
    }

    list.innerHTML = packages.map(pkg => `
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
          <a class="filter-btn" href="#marketplace/${encodeURIComponent(pkg.slug)}" title="View public page"><i class="fas fa-eye"></i></a>
          <a class="filter-btn" href="#account/version/${encodeURIComponent(pkg.id)}" title="Publish new version"><i class="fas fa-circle-up"></i> New version</a>
          <a class="filter-btn" href="#account/edit/${encodeURIComponent(pkg.id)}" title="Edit metadata"><i class="fas fa-pen"></i> Edit</a>
          <button class="filter-btn acc-toggle-status" title="${pkg.status === 'published' ? 'Hide from the marketplace' : 'Make public'}">
            ${pkg.status === 'published' ? '<i class="fas fa-eye-slash"></i> Unpublish' : '<i class="fas fa-globe"></i> Publish'}
          </button>
          <button class="filter-btn acc-delete" title="Delete package"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.acc-pkg-row').forEach(row => {
      const pkg = packages.find(p => String(p.id) === row.dataset.id);

      row.querySelector('.acc-toggle-status').addEventListener('click', async (e) => {
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

      row.querySelector('.acc-delete').addEventListener('click', async (e) => {
        if (!confirm(`Delete "${pkg.name}" permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.`)) return;
        const btn = e.currentTarget;
        btn.disabled = true;
        try {
          await deletePackage(user, pkg);
          showToast(`"${pkg.name}" was deleted.`, 'success');
          renderDashboard(container, user);
        } catch (err) {
          btn.disabled = false;
          showToast(`Delete failed: ${err.message}`, 'error');
        }
      });
    });
  } catch (e) {
    list.innerHTML = `<div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Error loading packages: ${escapeHtml(e.message)}</p></div>`;
  }
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
// ZIP picker with the 25 MB cap
// ---------------------------------------------------------------------------

function zipFieldHtml(id, required) {
  return `
    <div class="form-field">
      <label for="${id}">Package ZIP${required ? ' <span class="req">*</span>' : ''}</label>
      <div class="form-help">The add-on archive users will download. Maximum size: <strong>25 MB</strong>.</div>
      <input type="file" id="${id}" accept=".zip,application/zip,application/x-zip-compressed" ${required ? 'required' : ''}>
      <div class="form-error" id="${id}-error" hidden></div>
      <div class="form-file-info" id="${id}-info" hidden></div>
    </div>
  `;
}

function wireZipField(root, id) {
  const input = root.querySelector(`#${id}`);
  const error = root.querySelector(`#${id}-error`);
  const info = root.querySelector(`#${id}-info`);

  input.addEventListener('change', () => {
    error.hidden = true;
    info.hidden = true;
    const file = input.files[0];
    if (!file) return;
    if (!/\.zip$/i.test(file.name)) {
      error.textContent = 'The package file must be a .zip archive.';
      error.hidden = false;
      input.value = '';
      return;
    }
    if (file.size > MAX_ZIP_BYTES) {
      error.textContent = `Maximum ZIP size is 25 MB (your file is ${formatBytes(file.size)}).`;
      error.hidden = false;
      input.value = '';
      return;
    }
    info.innerHTML = `<i class="fas fa-file-zipper"></i> ${escapeHtml(file.name)} · ${formatBytes(file.size)}`;
    info.hidden = false;
  });
}

// ---------------------------------------------------------------------------
// New / edit package form
// ---------------------------------------------------------------------------

function renderPackageForm(container, user, pkg) {
  const isEdit = Boolean(pkg);

  container.innerHTML = `
    <section class="mp-section">
      <div class="container mp-narrow">
        <a href="#account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title">${isEdit ? `Edit "${escapeHtml(pkg.name)}"` : 'Publish a New Package'}</h1>
        ${isEdit ? '' : '<p class="acc-form-subtitle">Fill in the details below. Fields marked with <span class="req">*</span> are required. Everything can be edited later except the URL id.</p>'}

        <form id="pkg-form" class="mp-form" novalidate>
          <h3 class="form-section-title"><i class="fas fa-circle-info"></i> Basic information</h3>

          <div class="form-row">
            <div class="form-field">
              <label for="f-name">Package name <span class="req">*</span></label>
              <input type="text" id="f-name" maxlength="80" required placeholder="e.g. Comet Particles Pro"
                     value="${escapeHtml(isEdit ? pkg.name : '')}">
            </div>
            <div class="form-field">
              <label for="f-slug">URL id (slug) <span class="req">*</span></label>
              <div class="form-help">${isEdit ? 'The URL id cannot be changed after publishing.' : 'Lowercase letters, numbers and dashes. Used in the package URL.'}</div>
              <input type="text" id="f-slug" maxlength="60" required pattern="[a-z0-9]+(-[a-z0-9]+)*"
                     placeholder="comet-particles-pro" value="${escapeHtml(isEdit ? pkg.slug : '')}" ${isEdit ? 'disabled' : ''}>
            </div>
          </div>

          <div class="form-field">
            <label for="f-summary">Short description <span class="req">*</span></label>
            <div class="form-help">One sentence shown on the package card (10–160 characters).</div>
            <input type="text" id="f-summary" maxlength="160" required
                   placeholder="A short, catchy summary of what your add-on does."
                   value="${escapeHtml(isEdit ? pkg.summary : '')}">
          </div>

          ${mdEditorHtml('f-description', 'Full description', isEdit ? pkg.description_md : '',
            '# My Package\n\nDescribe what it does, what it includes and how to use it...', true,
            'The main description shown on the package page.')}

          <div class="form-row">
            <div class="form-field">
              <label for="f-category">Category <span class="req">*</span></label>
              <select id="f-category" required>
                ${CATEGORIES.map(c => `<option value="${escapeHtml(c)}" ${isEdit && pkg.category === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
              </select>
            </div>
            <div class="form-field">
              <label for="f-license">License <span class="req">*</span></label>
              <select id="f-license" required>
                ${LICENSES.map(l => `<option value="${escapeHtml(l)}" ${isEdit && pkg.license === l ? 'selected' : ''}>${escapeHtml(l)}</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label for="f-tags">Tags</label>
              <div class="form-help">Comma-separated, up to 8. E.g. "particles, vfx, 2d".</div>
              <input type="text" id="f-tags" placeholder="particles, vfx, 2d"
                     value="${escapeHtml(isEdit ? (pkg.tags || []).join(', ') : '')}">
            </div>
            <div class="form-field">
              <label for="f-engine">Minimum engine version</label>
              <input type="text" id="f-engine" placeholder="e.g. 2.1" value="${escapeHtml(isEdit ? (pkg.min_engine_version || '') : '')}">
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label for="f-homepage">Website URL</label>
              <input type="url" id="f-homepage" placeholder="https://..." value="${escapeHtml(isEdit ? (pkg.homepage_url || '') : '')}">
            </div>
            <div class="form-field">
              <label for="f-repo">Repository URL</label>
              <input type="url" id="f-repo" placeholder="https://github.com/..." value="${escapeHtml(isEdit ? (pkg.repo_url || '') : '')}">
            </div>
          </div>

          <h3 class="form-section-title"><i class="fas fa-image"></i> Media</h3>

          <div class="form-row">
            <div class="form-field">
              <label for="f-icon">Icon ${isEdit ? '' : '(recommended)'}</label>
              <div class="form-help">Square image, PNG/JPG, max 4 MB.${isEdit && pkg.icon_url ? ' Leave empty to keep the current icon.' : ''}</div>
              <input type="file" id="f-icon" accept="image/png,image/jpeg,image/webp,image/gif">
            </div>
            <div class="form-field">
              <label for="f-shots">Screenshots</label>
              <div class="form-help">Up to ${MAX_SCREENSHOTS} images, max 4 MB each.${isEdit && (pkg.screenshots || []).length ? ' Selecting new files replaces ALL current screenshots.' : ''}</div>
              <input type="file" id="f-shots" accept="image/png,image/jpeg,image/webp,image/gif" multiple>
            </div>
          </div>

          ${isEdit ? '' : `
            <h3 class="form-section-title"><i class="fas fa-tag"></i> First version</h3>
            <div class="form-row">
              <div class="form-field">
                <label for="f-version">Version <span class="req">*</span></label>
                <div class="form-help">Semantic version: MAJOR.MINOR.PATCH, e.g. 1.0.0.</div>
                <input type="text" id="f-version" required placeholder="1.0.0" value="1.0.0">
              </div>
            </div>
            ${mdEditorHtml('f-changelog', 'Changelog', '', '## 1.0.0\n\n- Initial release', true,
              'What\'s in this version. Shown in the version history.')}
            ${zipFieldHtml('f-zip', true)}
          `}

          <div class="form-error" id="form-error" hidden></div>

          <div class="form-actions">
            <button type="submit" class="download-btn" id="form-submit" style="font-size: 1.05rem;">
              <i class="fas fa-${isEdit ? 'floppy-disk' : 'rocket'}"></i> ${isEdit ? 'Save changes' : 'Publish package'}
            </button>
            <a href="#account" class="filter-btn" style="padding: 0.85rem 1.5rem;">Cancel</a>
          </div>
        </form>
      </div>
    </section>
  `;

  wireMdEditors(container);
  if (!isEdit) wireZipField(container, 'f-zip');

  // Auto-fill the slug from the name until the user edits the slug manually.
  const nameInput = container.querySelector('#f-name');
  const slugInput = container.querySelector('#f-slug');
  if (!isEdit) {
    let slugTouched = false;
    slugInput.addEventListener('input', () => { slugTouched = true; });
    nameInput.addEventListener('input', () => {
      if (!slugTouched) slugInput.value = slugify(nameInput.value);
    });
  }

  const form = container.querySelector('#pkg-form');
  const formError = container.querySelector('#form-error');
  const submitBtn = container.querySelector('#form-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    formError.hidden = true;

    try {
      const fields = collectCommonFields(container);

      if (isEdit) {
        setBusy(submitBtn, true, 'Saving...');
        await updatePackage(user, pkg, toDbColumns(fields), {
          iconFile: container.querySelector('#f-icon').files[0] || null,
          screenshotFiles: limitedShots(container),
        });
        showToast('Package updated.', 'success');
        window.location.hash = '#account';
      } else {
        const version = container.querySelector('#f-version').value.trim();
        if (!isValidSemver(version)) throw new Error('Version must follow the MAJOR.MINOR.PATCH format, e.g. 1.0.0.');
        const changelogMd = container.querySelector('#f-changelog').value.trim();
        if (!changelogMd) throw new Error('Please write a changelog for the first version.');
        const zipFile = container.querySelector('#f-zip').files[0];
        if (!zipFile) throw new Error('Please select the package ZIP file.');
        if (zipFile.size > MAX_ZIP_BYTES) throw new Error(`Maximum ZIP size is 25 MB (your file is ${formatBytes(zipFile.size)}).`);

        setBusy(submitBtn, true, 'Uploading...');
        await createPackage(user, {
          ...fields,
          slug: slugInput.value.trim(),
          status: 'published',
          iconFile: container.querySelector('#f-icon').files[0] || null,
          screenshotFiles: limitedShots(container),
          version,
          changelogMd,
          zipFile,
        });
        showToast('Your package is live!', 'success');
        window.location.hash = '#account';
      }
    } catch (err) {
      console.error(err);
      formError.textContent = err.message;
      formError.hidden = false;
      formError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setBusy(submitBtn, false, isEdit ? 'Save changes' : 'Publish package');
    }
  });
}

function collectCommonFields(root) {
  const name = root.querySelector('#f-name').value.trim();
  const summary = root.querySelector('#f-summary').value.trim();
  const descriptionMd = root.querySelector('#f-description').value.trim();
  const slugEl = root.querySelector('#f-slug');

  if (name.length < 3) throw new Error('The package name must be at least 3 characters long.');
  if (!slugEl.disabled && !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slugEl.value.trim())) {
    throw new Error('The URL id may only contain lowercase letters, numbers and dashes (e.g. "my-cool-addon").');
  }
  if (summary.length < 10) throw new Error('The short description must be at least 10 characters long.');
  if (!descriptionMd) throw new Error('Please write a full description.');

  const tags = root.querySelector('#f-tags').value
    .split(',').map(t => t.trim().toLowerCase()).filter(Boolean).slice(0, 8);

  for (const id of ['f-homepage', 'f-repo']) {
    const value = root.querySelector(`#${id}`).value.trim();
    if (value && !/^https?:\/\//i.test(value)) throw new Error('Links must start with http:// or https://.');
  }

  return {
    name,
    summary,
    descriptionMd,
    category: root.querySelector('#f-category').value,
    license: root.querySelector('#f-license').value,
    tags,
    minEngineVersion: root.querySelector('#f-engine').value.trim() || null,
    homepageUrl: root.querySelector('#f-homepage').value.trim() || null,
    repoUrl: root.querySelector('#f-repo').value.trim() || null,
  };
}

// Map the form fields to their database column names.
function toDbColumns(fields) {
  return {
    name: fields.name,
    summary: fields.summary,
    description_md: fields.descriptionMd,
    category: fields.category,
    license: fields.license,
    tags: fields.tags,
    min_engine_version: fields.minEngineVersion,
    homepage_url: fields.homepageUrl,
    repo_url: fields.repoUrl,
  };
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
// New version form
// ---------------------------------------------------------------------------

async function renderVersionForm(container, user, pkg) {
  container.innerHTML = `<section class="mp-section"><div class="container mp-narrow"><div class="loading">Loading...</div></div></section>`;

  let versions = [];
  try {
    versions = await listVersions(pkg.id);
  } catch (e) {
    console.error(e);
  }
  const latest = versions[0] || null;

  container.innerHTML = `
    <section class="mp-section">
      <div class="container mp-narrow">
        <a href="#account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title">New version of "${escapeHtml(pkg.name)}"</h1>
        <p class="acc-form-subtitle">
          Current latest version: <strong>${latest ? `v${escapeHtml(latest.version)}` : 'none'}</strong>${latest ? ` (published ${formatDate(latest.created_at)})` : ''}.
          Users will download the new version by default; older versions stay available in the history.
        </p>

        <form id="ver-form" class="mp-form" novalidate>
          <div class="form-row">
            <div class="form-field">
              <label for="v-version">New version <span class="req">*</span></label>
              <div class="form-help">Must be higher than ${latest ? `v${escapeHtml(latest.version)}` : 'previous versions'} (MAJOR.MINOR.PATCH).</div>
              <input type="text" id="v-version" required placeholder="${latest ? suggestNext(latest.version) : '1.0.0'}"
                     value="${latest ? suggestNext(latest.version) : '1.0.0'}">
            </div>
          </div>

          ${mdEditorHtml('v-changelog', 'Changelog', '', '## What\'s new\n\n- Added ...\n- Fixed ...', true,
            'Tell users what changed in this version (Markdown).')}

          ${zipFieldHtml('v-zip', true)}

          <div class="form-error" id="ver-error" hidden></div>

          <div class="form-actions">
            <button type="submit" class="download-btn" id="ver-submit" style="font-size: 1.05rem;">
              <i class="fas fa-circle-up"></i> Publish version
            </button>
            <a href="#account" class="filter-btn" style="padding: 0.85rem 1.5rem;">Cancel</a>
          </div>
        </form>
      </div>
    </section>
  `;

  wireMdEditors(container);
  wireZipField(container, 'v-zip');

  const form = container.querySelector('#ver-form');
  const error = container.querySelector('#ver-error');
  const submitBtn = container.querySelector('#ver-submit');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    error.hidden = true;

    try {
      const version = container.querySelector('#v-version').value.trim();
      if (!isValidSemver(version)) throw new Error('Version must follow the MAJOR.MINOR.PATCH format, e.g. 1.2.0.');
      if (latest && semverCompare(version, latest.version) <= 0) {
        throw new Error(`The new version must be higher than the current latest (v${latest.version}).`);
      }
      const changelogMd = container.querySelector('#v-changelog').value.trim();
      if (!changelogMd) throw new Error('Please write a changelog so users know what changed.');
      const zipFile = container.querySelector('#v-zip').files[0];
      if (!zipFile) throw new Error('Please select the new package ZIP file.');
      if (zipFile.size > MAX_ZIP_BYTES) throw new Error(`Maximum ZIP size is 25 MB (your file is ${formatBytes(zipFile.size)}).`);

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
      await publishVersion(user, pkg, { version, changelogMd, zipFile });
      showToast(`v${version} published!`, 'success');
      window.location.hash = '#account';
    } catch (err) {
      console.error(err);
      error.textContent = err.message;
      error.hidden = false;
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<i class="fas fa-circle-up"></i> Publish version';
    }
  });
}

function suggestNext(version) {
  const core = version.split('-')[0].split('.').map(Number);
  return `${core[0]}.${core[1]}.${(core[2] || 0) + 1}`;
}
