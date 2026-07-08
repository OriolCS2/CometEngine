import { navigate } from '../lib/router.js';
import {
  CATEGORIES, isBackendConfigured, listPackages, listFeaturedPackages, listPackagesDependingOn,
  getPackageBySlug, listVersions, getProfile, getZipUrl, recordDownload,
  getUser, isCurrentUserAdmin, setPackageStatus, setPackageFeatured, deletePackage,
} from '../lib/marketplace-api.js';
import {
  escapeHtml, renderMarkdown, formatBytes, formatDownloads, formatDate,
  showToast, openLightbox,
} from '../lib/ui.js';
import { versionChannel } from '../lib/package-manifest.js';

function channelBadge(version) {
  const channel = versionChannel(version || '');
  if (channel === 'pre') return '<span class="mp-badge mp-badge-accent">Pre-release</span>';
  if (channel === 'exp') return '<span class="mp-badge mp-badge-dim">Experimental</span>';
  return '';
}

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

const PAGE_SIZE = 24;
const storeState = { search: '', category: '', sort: 'newest', packageType: '', offset: 0, rows: [], hasMore: false };

function renderStoreFront(container) {
  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        ${demoBanner()}
        <div class="mp-header">
          <h1>Marketplace</h1>
          <p>Free community add-ons for Comet Engine: tools, art, audio, templates and more. Install them straight from the editor's <strong>Package Manager</strong>.</p>
        </div>
        <div class="mp-toolbar">
          <input type="text" id="mp-search" class="search-box mp-search" placeholder="Search packages..."
                 value="${escapeHtml(storeState.search)}">
          <div class="mp-type-toggle" id="mp-type">
            <button class="filter-btn ${storeState.packageType === '' ? 'active' : ''}" data-type="">All</button>
            <button class="filter-btn ${storeState.packageType === 'package' ? 'active' : ''}" data-type="package">Packages</button>
            <button class="filter-btn ${storeState.packageType === 'assetPack' ? 'active' : ''}" data-type="assetPack">Asset Packs</button>
          </div>
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
        <div id="mp-featured"></div>
        <div id="mp-grid" class="mp-grid">
          <div class="loading">Loading packages...</div>
        </div>
        <div class="mp-load-more" id="mp-more" hidden>
          <button class="filter-btn" id="mp-more-btn"><i class="fas fa-angles-down"></i> Load more</button>
        </div>
      </div>
    </section>
  `;

  const searchInput = container.querySelector('#mp-search');
  const categorySelect = container.querySelector('#mp-category');
  const sortSelect = container.querySelector('#mp-sort');
  const grid = container.querySelector('#mp-grid');
  const featuredHost = container.querySelector('#mp-featured');
  const moreHost = container.querySelector('#mp-more');

  const reload = () => {
    storeState.offset = 0;
    storeState.rows = [];
    loadGrid(grid, moreHost, featuredHost, false);
  };

  let debounce = null;
  searchInput.addEventListener('input', () => {
    storeState.search = searchInput.value;
    clearTimeout(debounce);
    debounce = setTimeout(reload, 300);
  });
  container.querySelectorAll('#mp-type .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('#mp-type .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      storeState.packageType = btn.dataset.type;
      reload();
    });
  });
  categorySelect.addEventListener('change', () => {
    storeState.category = categorySelect.value;
    reload();
  });
  sortSelect.addEventListener('change', () => {
    storeState.sort = sortSelect.value;
    reload();
  });
  container.querySelector('#mp-more-btn').addEventListener('click', () => {
    storeState.offset += PAGE_SIZE;
    loadGrid(grid, moreHost, featuredHost, true);
  });

  loadGrid(grid, moreHost, featuredHost, false);
}

async function loadGrid(grid, moreHost, featuredHost, append) {
  try {
    const page = await listPackages({
      search: storeState.search,
      category: storeState.category,
      sort: storeState.sort,
      packageType: storeState.packageType,
      limit: PAGE_SIZE,
      offset: storeState.offset,
    });
    storeState.rows = append ? [...storeState.rows, ...page] : page;
    storeState.hasMore = page.length === PAGE_SIZE;
    moreHost.hidden = !storeState.hasMore;

    const noFilters = !storeState.search && !storeState.category && !storeState.packageType;
    if (featuredHost && !append) {
      featuredHost.innerHTML = '';
      if (noFilters) {
        const featured = await listFeaturedPackages();
        if (featured.length > 0) {
          featuredHost.innerHTML = `
            <h2 class="mp-featured-title"><i class="fas fa-star"></i> Featured</h2>
            <div class="mp-grid mp-featured-grid">${featured.map(packageCard).join('')}</div>
            <h2 class="mp-featured-title">All packages</h2>
          `;
        }
      }
    }

    if (storeState.rows.length === 0) {
      grid.innerHTML = `
        <div class="mp-empty">
          <i class="fas fa-box-open"></i>
          <p>No packages found${storeState.search ? ` for "${escapeHtml(storeState.search)}"` : ''}.</p>
        </div>
      `;
      return;
    }
    grid.innerHTML = storeState.rows.map(packageCard).join('');
  } catch (e) {
    console.error(e);
    grid.innerHTML = `<div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Error loading packages: ${escapeHtml(e.message)}</p></div>`;
  }
}

function packageCard(pkg) {
  const author = pkg.profiles?.display_name || 'Unknown';
  return `
    <a href="/marketplace/${encodeURIComponent(pkg.slug)}" class="mp-card">
      <div class="mp-card-top">
        ${pkg.icon_url
          ? `<img class="mp-card-icon" src="${escapeHtml(pkg.icon_url)}" alt="" loading="lazy">`
          : `<div class="mp-card-icon mp-card-icon-fallback"><i class="fas fa-cube"></i></div>`}
        <div class="mp-card-title">
          <h3>${escapeHtml(pkg.name)} ${pkg.deprecated ? '<span class="mp-badge mp-badge-warn">Deprecated</span>' : ''}</h3>
          <span class="mp-card-author">by ${escapeHtml(author)}</span>
        </div>
      </div>
      <p class="mp-card-summary">${escapeHtml(pkg.summary)}</p>
      <div class="mp-card-footer">
        <span class="mp-badge">${escapeHtml(pkg.category)}</span>
        ${pkg.package_type === 'assetPack' ? '<span class="mp-badge mp-badge-green">Asset Pack</span>' : ''}
        ${channelBadge(pkg.latest_version)}
        <span class="mp-card-meta">
          <span title="Downloads"><i class="fas fa-download"></i> ${formatDownloads(pkg.download_count)}</span>
          <span title="Latest version"><i class="fas fa-tag"></i> ${escapeHtml(pkg.latest_version || '—')}</span>
          ${pkg.min_engine_version ? `<span title="Minimum engine version"><i class="fas fa-gear"></i> ${escapeHtml(pkg.min_engine_version)}+</span>` : ''}
          <span title="Last updated"><i class="fas fa-clock"></i> ${formatDate(pkg.updated_at)}</span>
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
  const latestDeps = latest ? Object.entries(latest.dependencies || {}) : [];
  const depString = latest ? `${pkg.slug}@${versionChannel(latest.version) === 'release' ? '^' : ''}${latest.version}` : pkg.slug;

  container.innerHTML = `
    <section class="mp-section">
      <div class="container">
        ${demoBanner()}
        <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
        <div id="mp-mod-bar"></div>

        ${pkg.deprecated ? `
          <div class="mp-deprecated-banner">
            <i class="fas fa-triangle-exclamation"></i>
            <div>
              <strong>This package is deprecated.</strong>
              ${pkg.deprecated_message ? `<div>${escapeHtml(pkg.deprecated_message)}</div>` : ''}
              <div>Projects that already installed it keep working, but it is excluded from new installs.</div>
            </div>
          </div>
        ` : ''}

        <div class="mp-detail-header">
          ${pkg.icon_url
            ? `<img class="mp-detail-icon" src="${escapeHtml(pkg.icon_url)}" alt="">`
            : `<div class="mp-detail-icon mp-card-icon-fallback"><i class="fas fa-cube"></i></div>`}
          <div class="mp-detail-title">
            <h1>${escapeHtml(pkg.name)}</h1>
            <p class="mp-detail-summary">${escapeHtml(pkg.summary)}</p>
            <div class="mp-detail-meta">
              <a class="mp-author-chip" href="/marketplace/publisher/${encodeURIComponent(pkg.owner_id)}">
                ${pkg.profiles?.avatar_url ? `<img src="${escapeHtml(pkg.profiles.avatar_url)}" alt="" referrerpolicy="no-referrer">` : '<i class="fas fa-user"></i>'}
                ${escapeHtml(author)}
              </a>
              <span class="mp-badge">${escapeHtml(pkg.category)}</span>
              ${pkg.package_type === 'assetPack' ? '<span class="mp-badge mp-badge-green">Asset Pack</span>' : ''}
              ${channelBadge(pkg.latest_version)}
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
              <button class="mp-tab-btn active" data-tab="overview">Description</button>
              <button class="mp-tab-btn" data-tab="versions">Versions <span class="mp-tab-count">${versions.length}</span></button>
              <button class="mp-tab-btn" data-tab="deps">Dependencies ${latestDeps.length ? `<span class="mp-tab-count">${latestDeps.length}</span>` : ''}</button>
            </div>

            <div id="mp-tab-overview" class="mp-tab-panel">
              <div class="markdown-content mp-description">
                ${(pkg.readme_md || pkg.description_md) ? renderMarkdown(pkg.readme_md || pkg.description_md) : '<p style="color: var(--text-dim);">No description provided.</p>'}
              </div>
            </div>

            <div id="mp-tab-versions" class="mp-tab-panel" hidden>
              ${versions.length === 0
                ? '<p style="color: var(--text-dim);">No versions published yet.</p>'
                : versions.map((v, i) => versionCard(v, i === 0)).join('')}
            </div>

            <div id="mp-tab-deps" class="mp-tab-panel" hidden>
              <h3 class="mp-deps-heading">Depends on</h3>
              ${latestDeps.length === 0
                ? '<p style="color: var(--text-dim);">The latest version has no dependencies.</p>'
                : `<table class="pub-deps-table"><thead><tr><th>Package</th><th>Range</th></tr></thead><tbody>
                    ${latestDeps.map(([depSlug, range]) => `
                      <tr>
                        <td><a href="/marketplace/${encodeURIComponent(depSlug)}">${escapeHtml(depSlug)}</a></td>
                        <td><code>${escapeHtml(range)}</code></td>
                      </tr>`).join('')}
                  </tbody></table>`}
              <h3 class="mp-deps-heading">Used by</h3>
              <div id="mp-used-by"><p style="color: var(--text-dim);">Loading...</p></div>
            </div>
          </div>

          <aside class="mp-detail-sidebar">
            <div class="mp-install-card">
              <div class="mp-install-title"><i class="fas fa-plug"></i> Install in Comet</div>
              <div class="mp-install-path">Package Manager → Marketplace → <strong>${escapeHtml(pkg.name)}</strong></div>
              <button class="filter-btn mp-copy-dep" id="mp-copy-dep" title="Copy the dependency string">
                <i class="fas fa-copy"></i> <code>${escapeHtml(depString)}</code>
              </button>
            </div>

            <button class="download-btn mp-download-main" id="mp-download-latest" ${latest ? '' : 'disabled'}>
              <i class="fas fa-download"></i>
              <span>Download${latest ? ` v${escapeHtml(latest.version)}` : ''}</span>
            </button>
            ${latest ? `<div class="mp-download-sub">${formatBytes(latest.zip_size)} · .cometpkg archive</div>` : ''}

            <div class="mp-info-list">
              <div><span>Latest version</span><strong>${escapeHtml(pkg.latest_version || '—')}</strong></div>
              <div><span>Last updated</span><strong>${formatDate(pkg.updated_at)}</strong></div>
              <div><span>Published</span><strong>${formatDate(pkg.created_at)}</strong></div>
              <div><span>License</span><strong>${escapeHtml(pkg.license || '—')}</strong></div>
              <div><span>Engine version</span><strong>${pkg.min_engine_version ? escapeHtml(pkg.min_engine_version) + '+' : 'Any'}</strong></div>
              <div><span>Type</span><strong>${pkg.package_type === 'assetPack' ? 'Asset Pack (imports into Assets/)' : 'Package (read-only in Packages/)'}</strong></div>
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

            <a class="mp-report" href="mailto:contrasnya@gmail.com?subject=${encodeURIComponent(`[Comet Marketplace] Report: ${pkg.slug}`)}">
              <i class="fas fa-flag"></i> Report this package
            </a>
          </aside>
        </div>
      </div>
    </section>
  `;

  wireDetailPage(container, pkg, versions, shots);
  renderModerationBar(container, pkg);
  loadUsedBy(container, pkg.slug);
}

async function loadUsedBy(container, slug) {
  const host = container.querySelector('#mp-used-by');
  if (!host) return;
  const dependents = await listPackagesDependingOn(slug);
  if (dependents.length === 0) {
    host.innerHTML = '<p style="color: var(--text-dim);">No published package depends on this one.</p>';
    return;
  }
  host.innerHTML = dependents.map(d => `
    <a class="mp-used-by-row" href="/marketplace/${encodeURIComponent(d.slug)}">
      <i class="fas fa-cube"></i> ${escapeHtml(d.name)} <span class="mp-card-author">(${escapeHtml(d.slug)})</span>
    </a>
  `).join('');
}

// Owner: quick links to manage the package. Admin: moderation controls on any
// package. Hidden for everyone else (and enforced server-side by RLS anyway).
async function renderModerationBar(container, pkg) {
  const host = container.querySelector('#mp-mod-bar');
  if (!host) return;

  const user = await getUser();
  if (!user) return;
  const isOwner = user.id === pkg.owner_id;
  const isAdmin = !isOwner && await isCurrentUserAdmin();
  if (!isOwner && !isAdmin) return;

  const isPublished = pkg.status === 'published';
  host.innerHTML = `
    <div class="mp-mod-bar ${isAdmin ? 'mp-mod-bar-admin' : ''}">
      <span class="mp-mod-label">
        <i class="fas fa-${isAdmin ? 'shield-halved' : 'wrench'}"></i>
        ${isAdmin ? 'Admin moderation' : 'You own this package'}
        ${isPublished ? '' : '<span class="mp-badge mp-badge-dim">Draft (hidden)</span>'}
      </span>
      <span class="mp-mod-actions">
        ${isOwner ? `
          <a class="filter-btn" href="/account/edit/${encodeURIComponent(pkg.id)}"><i class="fas fa-pen"></i> Edit</a>
          <a class="filter-btn" href="/account/version/${encodeURIComponent(pkg.id)}"><i class="fas fa-circle-up"></i> New version</a>
        ` : ''}
        ${isAdmin ? `
          <button class="filter-btn" id="mp-mod-feature">
            ${pkg.featured ? '<i class="fas fa-star"></i> Unfeature' : '<i class="far fa-star"></i> Feature'}
          </button>
        ` : ''}
        <button class="filter-btn" id="mp-mod-status">
          ${isPublished ? '<i class="fas fa-eye-slash"></i> Unpublish' : '<i class="fas fa-globe"></i> Publish'}
        </button>
        <button class="filter-btn mp-mod-delete" id="mp-mod-delete"><i class="fas fa-trash"></i> Delete</button>
      </span>
    </div>
  `;

  const featureBtn = host.querySelector('#mp-mod-feature');
  if (featureBtn) {
    featureBtn.addEventListener('click', async () => {
      featureBtn.disabled = true;
      try {
        await setPackageFeatured(pkg.id, !pkg.featured);
        showToast(pkg.featured ? `"${pkg.name}" is no longer featured.` : `"${pkg.name}" is now featured on the store front.`, 'success');
        renderPackageDetail(container, pkg.slug);
      } catch (err) {
        featureBtn.disabled = false;
        showToast(`Could not change the featured flag: ${err.message}`, 'error');
      }
    });
  }

  host.querySelector('#mp-mod-status').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      await setPackageStatus(pkg.id, isPublished ? 'draft' : 'published');
      showToast(isPublished ? `"${pkg.name}" is now hidden from the marketplace.` : `"${pkg.name}" is now public.`, 'success');
      renderPackageDetail(container, pkg.slug);
    } catch (err) {
      btn.disabled = false;
      showToast(`Could not change status: ${err.message}`, 'error');
    }
  });

  host.querySelector('#mp-mod-delete').addEventListener('click', async (e) => {
    const ownerNote = isAdmin ? `\n\nYou are deleting it as ADMIN — it belongs to another user.` : '';
    if (!confirm(`Delete "${pkg.name}" permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.${ownerNote}`)) return;
    const btn = e.currentTarget;
    btn.disabled = true;
    try {
      await deletePackage(pkg);
      showToast(`"${pkg.name}" was deleted.`, 'success');
      navigate('/marketplace');
    } catch (err) {
      btn.disabled = false;
      showToast(`Delete failed: ${err.message}`, 'error');
    }
  });
}

function versionCard(v, isLatest) {
  return `
    <div class="mp-version-card ${v.deprecated ? 'mp-version-deprecated' : ''}">
      <div class="mp-version-head">
        <div class="mp-version-title">
          <strong>${v.deprecated ? `<s>v${escapeHtml(v.version)}</s>` : `v${escapeHtml(v.version)}`}</strong>
          ${isLatest ? '<span class="mp-badge mp-badge-accent">Latest</span>' : ''}
          ${channelBadge(v.version)}
          ${v.deprecated ? '<span class="mp-badge mp-badge-warn">Deprecated</span>' : ''}
        </div>
        <div class="mp-version-meta">
          <span>${formatDate(v.created_at)}</span>
          <span>${formatBytes(v.zip_size)}</span>
          ${v.min_engine_version ? `<span title="Minimum engine version"><i class="fas fa-gear"></i> ${escapeHtml(v.min_engine_version)}+</span>` : ''}
          <span><i class="fas fa-download"></i> ${formatDownloads(v.download_count)}</span>
          ${v.sha256 ? `<button class="filter-btn mp-copy-sha" data-sha="${escapeHtml(v.sha256)}" title="Copy the sha256 integrity hash"><i class="fas fa-fingerprint"></i> sha256</button>` : ''}
          <button class="filter-btn mp-version-dl" data-version-id="${escapeHtml(v.id)}">
            <i class="fas fa-download"></i> Download
          </button>
        </div>
      </div>
      ${v.deprecated && v.deprecated_message ? `<div class="mp-version-deprecated-msg"><i class="fas fa-triangle-exclamation"></i> ${escapeHtml(v.deprecated_message)}</div>` : ''}
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
      container.querySelector('#mp-tab-deps').hidden = btn.dataset.tab !== 'deps';
    });
  });

  // Copy actions
  const copyDep = container.querySelector('#mp-copy-dep');
  if (copyDep) {
    copyDep.addEventListener('click', () => {
      navigator.clipboard.writeText(copyDep.querySelector('code').textContent);
      showToast('Dependency string copied.', 'success');
    });
  }
  container.querySelectorAll('.mp-copy-sha').forEach(btn => {
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(btn.dataset.sha);
      showToast('sha256 copied.', 'success');
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
          <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
          <div class="mp-publisher-header">
            ${profile?.avatar_url
              ? `<img src="${escapeHtml(profile.avatar_url)}" alt="" referrerpolicy="no-referrer">`
              : '<div class="mp-card-icon-fallback mp-publisher-avatar-fallback"><i class="fas fa-user"></i></div>'}
            <div>
              <h1>${escapeHtml(name)}</h1>
              <p>${packages.length} package${packages.length === 1 ? '' : 's'} · ${formatDownloads(packages.reduce((s, p) => s + (p.download_count || 0), 0))} total downloads</p>
              ${profile?.bio ? `<p class="mp-publisher-bio">${escapeHtml(profile.bio)}</p>` : ''}
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
        <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
        <div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>${escapeHtml(message)}</p></div>
      </div>
    </section>
  `;
}
