import {
  CATEGORIES, isBackendConfigured, listPackages, getPackageBySlug, listVersions,
  getProfile, getZipUrl, recordDownload,
} from '../lib/marketplace-api.js';
import {
  escapeHtml, renderMarkdown, formatBytes, formatDownloads, formatDate,
  showToast, openLightbox,
} from '../lib/ui.js';

// Routes handled here:
//   #marketplace                      → store front (search / filter / sort)
//   #marketplace/publisher/{userId}   → publisher profile + their packages
//   #marketplace/{slug}               → package detail page

export async function renderMarketplace(container, hash) {
  const parts = (hash || '#marketplace').replace(/^#marketplace\/?/, '').split('/').filter(Boolean);

  if (parts[0] === 'publisher' && parts[1]) {
    await renderPublisher(container, decodeURIComponent(parts[1]));
  } else if (parts[0]) {
    await renderPackageDetail(container, decodeURIComponent(parts[0]));
  } else {
    renderStoreFront(container);
  }
}

// ---------------------------------------------------------------------------
// Store front
// ---------------------------------------------------------------------------

const storeState = { search: '', category: '', sort: 'newest' };

function renderStoreFront(container) {
  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        ${demoBanner()}
        <div class="mp-header">
          <h1>Marketplace</h1>
          <p>Free community add-ons for Comet Engine: tools, art, audio, templates and more.</p>
        </div>
        <div class="mp-toolbar">
          <input type="text" id="mp-search" class="search-box mp-search" placeholder="Search packages..."
                 value="${escapeHtml(storeState.search)}">
          <select id="mp-category" class="search-box mp-select">
            <option value="">All categories</option>
            ${CATEGORIES.map(c => `<option value="${escapeHtml(c)}" ${storeState.category === c ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
          </select>
          <select id="mp-sort" class="search-box mp-select">
            <option value="newest" ${storeState.sort === 'newest' ? 'selected' : ''}>Newest</option>
            <option value="updated" ${storeState.sort === 'updated' ? 'selected' : ''}>Recently updated</option>
            <option value="downloads" ${storeState.sort === 'downloads' ? 'selected' : ''}>Most downloaded</option>
            <option value="name" ${storeState.sort === 'name' ? 'selected' : ''}>Name (A-Z)</option>
          </select>
        </div>
        <div id="mp-grid" class="mp-grid">
          <div class="loading">Loading packages...</div>
        </div>
      </div>
    </section>
  `;

  const searchInput = container.querySelector('#mp-search');
  const categorySelect = container.querySelector('#mp-category');
  const sortSelect = container.querySelector('#mp-sort');
  const grid = container.querySelector('#mp-grid');

  let debounce = null;
  searchInput.addEventListener('input', () => {
    storeState.search = searchInput.value;
    clearTimeout(debounce);
    debounce = setTimeout(() => loadGrid(grid), 300);
  });
  categorySelect.addEventListener('change', () => {
    storeState.category = categorySelect.value;
    loadGrid(grid);
  });
  sortSelect.addEventListener('change', () => {
    storeState.sort = sortSelect.value;
    loadGrid(grid);
  });

  loadGrid(grid);
}

async function loadGrid(grid) {
  try {
    const packages = await listPackages(storeState);
    if (packages.length === 0) {
      grid.innerHTML = `
        <div class="mp-empty">
          <i class="fas fa-box-open"></i>
          <p>No packages found${storeState.search ? ` for "${escapeHtml(storeState.search)}"` : ''}.</p>
        </div>
      `;
      return;
    }
    grid.innerHTML = packages.map(packageCard).join('');
  } catch (e) {
    console.error(e);
    grid.innerHTML = `<div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Error loading packages: ${escapeHtml(e.message)}</p></div>`;
  }
}

function packageCard(pkg) {
  const author = pkg.profiles?.display_name || 'Unknown';
  return `
    <a href="#marketplace/${encodeURIComponent(pkg.slug)}" class="mp-card">
      <div class="mp-card-top">
        ${pkg.icon_url
          ? `<img class="mp-card-icon" src="${escapeHtml(pkg.icon_url)}" alt="" loading="lazy">`
          : `<div class="mp-card-icon mp-card-icon-fallback"><i class="fas fa-cube"></i></div>`}
        <div class="mp-card-title">
          <h3>${escapeHtml(pkg.name)}</h3>
          <span class="mp-card-author">by ${escapeHtml(author)}</span>
        </div>
      </div>
      <p class="mp-card-summary">${escapeHtml(pkg.summary)}</p>
      <div class="mp-card-footer">
        <span class="mp-badge">${escapeHtml(pkg.category)}</span>
        <span class="mp-card-meta">
          <span title="Downloads"><i class="fas fa-download"></i> ${formatDownloads(pkg.download_count)}</span>
          <span title="Latest version"><i class="fas fa-tag"></i> ${escapeHtml(pkg.latest_version || '—')}</span>
        </span>
      </div>
    </a>
  `;
}

function demoBanner() {
  if (isBackendConfigured()) return '';
  return `
    <div class="mp-demo-banner">
      <i class="fas fa-flask"></i>
      Showing <strong>demo data</strong> — the marketplace backend is not connected yet (see MARKETPLACE_SETUP.md).
    </div>
  `;
}

// ---------------------------------------------------------------------------
// Package detail
// ---------------------------------------------------------------------------

async function renderPackageDetail(container, slug) {
  container.innerHTML = `<section class="mp-section"><div class="container"><div class="loading">Loading package...</div></div></section>`;

  let pkg;
  try {
    pkg = await getPackageBySlug(slug);
  } catch (e) {
    return renderError(container, e.message);
  }
  if (!pkg) return renderError(container, `Package "${slug}" was not found.`);

  let versions = [];
  try {
    versions = await listVersions(pkg.id);
  } catch (e) {
    console.error(e);
  }
  const latest = versions[0] || null;
  const author = pkg.profiles?.display_name || 'Unknown';
  const shots = pkg.screenshots || [];

  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        ${demoBanner()}
        <a href="#marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>

        <div class="mp-detail-header">
          ${pkg.icon_url
            ? `<img class="mp-detail-icon" src="${escapeHtml(pkg.icon_url)}" alt="">`
            : `<div class="mp-detail-icon mp-card-icon-fallback"><i class="fas fa-cube"></i></div>`}
          <div class="mp-detail-title">
            <h1>${escapeHtml(pkg.name)}</h1>
            <p class="mp-detail-summary">${escapeHtml(pkg.summary)}</p>
            <div class="mp-detail-meta">
              <a class="mp-author-chip" href="#marketplace/publisher/${encodeURIComponent(pkg.owner_id)}">
                ${pkg.profiles?.avatar_url ? `<img src="${escapeHtml(pkg.profiles.avatar_url)}" alt="" referrerpolicy="no-referrer">` : '<i class="fas fa-user"></i>'}
                ${escapeHtml(author)}
              </a>
              <span class="mp-badge">${escapeHtml(pkg.category)}</span>
              <span class="mp-meta-item"><i class="fas fa-download"></i> ${formatDownloads(pkg.download_count)} downloads</span>
            </div>
          </div>
        </div>

        <div class="mp-detail-layout">
          <div class="mp-detail-main">
            ${shots.length > 0 ? `
              <div class="mp-gallery">
                <img id="mp-gallery-main" src="${escapeHtml(shots[0])}" alt="Screenshot">
                ${shots.length > 1 ? `
                  <div class="mp-thumbs">
                    ${shots.map((s, i) => `<img src="${escapeHtml(s)}" data-index="${i}" class="${i === 0 ? 'active' : ''}" alt="Thumbnail ${i + 1}">`).join('')}
                  </div>` : ''}
              </div>` : ''}

            <div class="mp-tabs">
              <button class="mp-tab-btn active" data-tab="overview">Overview</button>
              <button class="mp-tab-btn" data-tab="versions">Versions <span class="mp-tab-count">${versions.length}</span></button>
            </div>

            <div id="mp-tab-overview" class="mp-tab-panel">
              <div class="markdown-content mp-description">
                ${pkg.description_md ? renderMarkdown(pkg.description_md) : '<p style="color: var(--text-dim);">No description provided.</p>'}
              </div>
            </div>

            <div id="mp-tab-versions" class="mp-tab-panel" hidden>
              ${versions.length === 0
                ? '<p style="color: var(--text-dim);">No versions published yet.</p>'
                : versions.map((v, i) => versionCard(v, i === 0)).join('')}
            </div>
          </div>

          <aside class="mp-detail-sidebar">
            <button class="download-btn mp-download-main" id="mp-download-latest" ${latest ? '' : 'disabled'}>
              <i class="fas fa-download"></i>
              <span>Download${latest ? ` v${escapeHtml(latest.version)}` : ''}</span>
            </button>
            ${latest ? `<div class="mp-download-sub">${formatBytes(latest.zip_size)} · ZIP archive</div>` : ''}

            <div class="mp-info-list">
              <div><span>Latest version</span><strong>${escapeHtml(pkg.latest_version || '—')}</strong></div>
              <div><span>Last updated</span><strong>${formatDate(pkg.updated_at)}</strong></div>
              <div><span>Published</span><strong>${formatDate(pkg.created_at)}</strong></div>
              <div><span>License</span><strong>${escapeHtml(pkg.license || '—')}</strong></div>
              <div><span>Engine version</span><strong>${pkg.min_engine_version ? escapeHtml(pkg.min_engine_version) + '+' : 'Any'}</strong></div>
            </div>

            ${(pkg.homepage_url || pkg.repo_url) ? `
              <div class="mp-links">
                ${pkg.homepage_url ? `<a href="${escapeHtml(pkg.homepage_url)}" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i> Website</a>` : ''}
                ${pkg.repo_url ? `<a href="${escapeHtml(pkg.repo_url)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Repository</a>` : ''}
              </div>` : ''}

            ${(pkg.tags || []).length > 0 ? `
              <div class="mp-tags">
                ${pkg.tags.map(t => `<span class="mp-tag">${escapeHtml(t)}</span>`).join('')}
              </div>` : ''}
          </aside>
        </div>
      </div>
    </section>
  `;

  wireDetailPage(container, pkg, versions, shots);
}

function versionCard(v, isLatest) {
  return `
    <div class="mp-version-card">
      <div class="mp-version-head">
        <div class="mp-version-title">
          <strong>v${escapeHtml(v.version)}</strong>
          ${isLatest ? '<span class="mp-badge mp-badge-accent">Latest</span>' : ''}
        </div>
        <div class="mp-version-meta">
          <span>${formatDate(v.created_at)}</span>
          <span>${formatBytes(v.zip_size)}</span>
          <span><i class="fas fa-download"></i> ${formatDownloads(v.download_count)}</span>
          <button class="filter-btn mp-version-dl" data-version-id="${escapeHtml(v.id)}">
            <i class="fas fa-download"></i> Download
          </button>
        </div>
      </div>
      <div class="markdown-content mp-changelog">
        ${v.changelog_md ? renderMarkdown(v.changelog_md) : '<p style="color: var(--text-dim);">No changelog provided.</p>'}
      </div>
    </div>
  `;
}

function wireDetailPage(container, pkg, versions, shots) {
  // Gallery
  const mainImg = container.querySelector('#mp-gallery-main');
  if (mainImg) {
    mainImg.addEventListener('click', () => openLightbox(mainImg.src));
    container.querySelectorAll('.mp-thumbs img').forEach(thumb => {
      thumb.addEventListener('click', () => {
        container.querySelectorAll('.mp-thumbs img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImg.src = shots[Number(thumb.dataset.index)];
      });
    });
  }

  // Tabs
  const tabBtns = container.querySelectorAll('.mp-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      container.querySelector('#mp-tab-overview').hidden = btn.dataset.tab !== 'overview';
      container.querySelector('#mp-tab-versions').hidden = btn.dataset.tab !== 'versions';
    });
  });

  // Downloads
  const downloadVersion = (version) => {
    const url = getZipUrl(version.zip_path);
    if (!url) {
      showToast('Downloads are disabled in demo mode (backend not connected).', 'info');
      return;
    }
    recordDownload(pkg.id, version.id);
    const a = document.createElement('a');
    a.href = url;
    a.download = '';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const latestBtn = container.querySelector('#mp-download-latest');
  if (latestBtn && versions[0]) {
    latestBtn.addEventListener('click', () => downloadVersion(versions[0]));
  }
  container.querySelectorAll('.mp-version-dl').forEach(btn => {
    btn.addEventListener('click', () => {
      const version = versions.find(v => String(v.id) === btn.dataset.versionId);
      if (version) downloadVersion(version);
    });
  });
}

// ---------------------------------------------------------------------------
// Publisher page
// ---------------------------------------------------------------------------

async function renderPublisher(container, userId) {
  container.innerHTML = `<section class="mp-section"><div class="container"><div class="loading">Loading publisher...</div></div></section>`;

  try {
    const [profile, packages] = await Promise.all([
      getProfile(userId),
      listPackages({ ownerId: userId, sort: 'downloads' }),
    ]);

    const name = profile?.display_name || 'Unknown publisher';
    container.innerHTML = `
      <section class="mp-section">
        <div class="container">
          ${demoBanner()}
          <a href="#marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
          <div class="mp-publisher-header">
            ${profile?.avatar_url
              ? `<img src="${escapeHtml(profile.avatar_url)}" alt="" referrerpolicy="no-referrer">`
              : '<div class="mp-card-icon-fallback mp-publisher-avatar-fallback"><i class="fas fa-user"></i></div>'}
            <div>
              <h1>${escapeHtml(name)}</h1>
              <p>${packages.length} package${packages.length === 1 ? '' : 's'} · ${formatDownloads(packages.reduce((s, p) => s + (p.download_count || 0), 0))} total downloads</p>
            </div>
          </div>
          <div class="mp-grid">
            ${packages.length > 0 ? packages.map(packageCard).join('') : '<div class="mp-empty"><p>This publisher has no public packages.</p></div>'}
          </div>
        </div>
      </section>
    `;
  } catch (e) {
    renderError(container, e.message);
  }
}

function renderError(container, message) {
  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        <a href="#marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
        <div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>${escapeHtml(message)}</p></div>
      </div>
    </section>
  `;
}
