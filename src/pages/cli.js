import { marked } from 'marked';

// CometCli is released from its own repository, on its own version numbers, so this page
// reads that repo's releases rather than the engine's.
const CLI_REPO = 'OriolCS2/CometEngineCli';
const RELEASES_API = `https://api.github.com/repos/${CLI_REPO}/releases`;

marked.setOptions({ gfm: true, breaks: true });

/**
 * GitHub allows 60 unauthenticated requests an hour per IP, shared with the rest of the site.
 * Surface what actually went wrong instead of letting `releases.sort is not a function` bubble up.
 */
async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 403 || response.status === 429) {
      throw new Error('GitHub is rate limiting this page. Try again in a few minutes.');
    }
    if (response.status === 404) {
      throw new Error('No releases have been published yet.');
    }
    throw new Error(`GitHub returned ${response.status}.`);
  }
  return response.json();
}

function parseMarkdown(text) {
  if (!text) return 'No release notes provided.';
  try {
    return marked.parse(text.trim());
  } catch (e) {
    console.error('Markdown parsing error:', e);
    return text.replace(/\n/g, '<br>');
  }
}

function parseMarkdownPreview(text) {
  if (!text) return 'No release notes provided.';
  // Drop the leading "## [1.0.1] - date" heading: the card already shows the version and date.
  const cleaned = text.trim().replace(/^#{1,6}[^\n]*(\n|\r\n)*/, '').trim();
  try {
    return marked.parse(cleaned);
  } catch (e) {
    return cleaned.replace(/\n/g, '<br>');
  }
}

/**
 * navigator.platform is deprecated; prefer the UA-CH platform and fall back to the UA string.
 */
function getDetectedOS() {
  const platform = (navigator.userAgentData?.platform || navigator.userAgent || '').toLowerCase();
  if (platform.includes('win')) return 'windows';
  if (platform.includes('linux') || platform.includes('android')) return 'linux';
  if (platform.includes('mac') || platform.includes('darwin')) return 'mac';
  return 'windows';
}

export async function renderCli(container, tag) {
  if (tag) {
    renderCliReleaseDetail(container, tag);
    return;
  }

  container.innerHTML = `
    <section>
      <div class="container">
        <h2>CometCli</h2>
        <p style="text-align: center; color: var(--text-dim); max-width: 720px; margin: -1rem auto 3rem; line-height: 1.7;">
          The command-line interface for Comet Engine. Drive the editor from a terminal, export builds
          headlessly, and control development builds while they run. Released separately from the engine,
          with its own version numbers.
          <a href="https://github.com/${CLI_REPO}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-color);">View on GitHub</a>.
        </p>

        <div id="cli-featured" class="release-list" style="margin-bottom: 4rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
          <div class="loading">Fetching releases from GitHub...</div>
        </div>

        <div class="older-releases-section">
          <h3 style="font-size: 2rem; margin-bottom: 2rem;">All Versions</h3>
          <div id="cli-filter" style="margin-bottom: 2rem; display: flex; gap: 1rem;">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="stable">Stable</button>
            <button class="filter-btn" data-filter="rc">Pre-releases</button>
          </div>
          <div id="cli-version-list" style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden;">
            <div class="loading" style="padding: 2rem;">Loading history...</div>
          </div>
        </div>
      </div>
    </section>
  `;

  const featuredContainer = document.getElementById('cli-featured');
  const listContainer = document.getElementById('cli-version-list');
  const filterBtns = document.querySelectorAll('#cli-filter .filter-btn');

  try {
    const allReleases = await fetchJson(RELEASES_API);
    allReleases.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    if (allReleases.length === 0) {
      featuredContainer.innerHTML = `
        <div class="release-card" style="grid-column: 1/-1;">
          <h3 style="margin-top: 0;">No releases yet</h3>
          <p style="color: var(--text-dim); margin-bottom: 0;">
            CometCli has not published its first release yet. In the meantime you can build it from source:
            <code>python Build.py --build cli --target release</code>.
          </p>
        </div>`;
      listContainer.innerHTML = '<div style="padding: 2rem; color: var(--text-dim);">Nothing here yet.</div>';
      return;
    }

    const latestStable = allReleases.find(r => !r.prerelease);
    const latestRC = allReleases.find(r => r.prerelease &&
      (!latestStable || new Date(r.published_at) > new Date(latestStable.published_at)));

    featuredContainer.innerHTML = '';
    if (latestStable) featuredContainer.appendChild(createFeaturedCard(latestStable, 'Latest Release'));
    if (latestRC) featuredContainer.appendChild(createFeaturedCard(latestRC, 'Latest Pre-release'));

    const renderList = (filtered) => {
      listContainer.innerHTML = filtered.map(r => `
        <a href="/cli/${r.tag_name}" class="older-release-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-color); transition: var(--transition);">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-weight: 600; font-size: 1.1rem;">${r.name || r.tag_name}</span>
            <span class="tag ${r.prerelease ? 'tag-rc' : 'tag-stable'}" style="font-size: 0.7rem;">${r.prerelease ? 'Pre-release' : 'Stable'}</span>
          </div>
          <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(r.published_at).toLocaleDateString()}</div>
        </a>
      `).join('') || '<div style="padding: 2rem; color: var(--text-dim);">No versions match this filter.</div>';

      listContainer.querySelectorAll('.older-release-item').forEach(item => {
        item.onmouseenter = () => { item.style.backgroundColor = 'rgba(255, 140, 0, 0.1)'; };
        item.onmouseleave = () => { item.style.backgroundColor = 'transparent'; };
      });
    };

    renderList(allReleases);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        let filtered = allReleases;
        if (filter === 'stable') filtered = allReleases.filter(r => !r.prerelease);
        if (filter === 'rc') filtered = allReleases.filter(r => r.prerelease);
        renderList(filtered);
      });
    });

  } catch (error) {
    console.error('Error fetching CLI releases:', error);
    featuredContainer.innerHTML = `<p style="grid-column: 1/-1;">${error.message}</p>`;
    listContainer.innerHTML = '';
  }
}

function createFeaturedCard(release, label) {
  const div = document.createElement('div');
  div.className = 'release-card';
  div.style.display = 'flex';
  div.style.flexDirection = 'column';

  div.innerHTML = `
    <style>
      .markdown-content > *:first-child { margin-top: 0 !important; }
    </style>
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
      <div style="color: var(--accent-color); font-weight: 700; text-transform: uppercase; font-size: 0.8rem;">${label}</div>
      <span class="tag ${release.prerelease ? 'tag-rc' : 'tag-stable'}">${release.prerelease ? 'Pre-release' : 'Stable'}</span>
    </div>
    <div class="release-header" style="margin-bottom: 0.5rem;">
      <h3 style="font-size: 1.8rem; margin: 0;"><a href="/cli/${release.tag_name}">${release.name || release.tag_name}</a></h3>
      <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(release.published_at).toLocaleDateString()}</div>
    </div>
    <div class="markdown-content" style="display: flow-root; margin: 0.75rem 0; height: 300px; overflow-y: auto; background: rgba(0,0,0,0.2); padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--border-color); color: var(--text-dim); font-size: 0.95rem; line-height: 1.6;">
      ${parseMarkdownPreview(release.body)}
    </div>
    <div style="margin-top: auto; padding-top: 1.5rem;">
      <a href="/cli/${release.tag_name}" class="download-btn" style="width: 100%; justify-content: center; display: flex; align-items: center;">Download</a>
    </div>
  `;
  return div;
}

async function renderCliReleaseDetail(container, tagName) {
  container.innerHTML = `<div class="container" style="padding: 100px 2rem;"><div class="loading">Loading CometCli ${tagName}...</div></div>`;

  try {
    const release = await fetchJson(`${RELEASES_API}/tags/${encodeURIComponent(tagName)}`);

    const assets = release.assets || [];
    const named = (platform) => assets.filter(a => a.name.toLowerCase().includes(platform));
    const hasWindows = named('windows').length > 0;
    const hasLinux = named('linux').length > 0;
    const hasMac = named('mac').length > 0;
    const others = assets.filter(a => !['windows', 'linux', 'mac'].some(p => a.name.toLowerCase().includes(p)));

    const detectedOS = getDetectedOS();
    let defaultPlatform = 'other';
    if (detectedOS === 'windows' && hasWindows) defaultPlatform = 'windows';
    else if (detectedOS === 'linux' && hasLinux) defaultPlatform = 'linux';
    else if (detectedOS === 'mac' && hasMac) defaultPlatform = 'mac';
    else if (hasWindows) defaultPlatform = 'windows';
    else if (hasLinux) defaultPlatform = 'linux';
    else if (hasMac) defaultPlatform = 'mac';

    container.innerHTML = `
      <style>
        .markdown-content > *:first-child { margin-top: 0 !important; }
        .markdown-content ul, .markdown-content ol { margin-bottom: 1rem; }
      </style>
      <section class="release-detail-section" style="padding-top: 90px;">
        <div class="container">
          <a href="/cli" style="color: var(--accent-color); margin-bottom: 1rem; display: inline-block;">
            <i class="fas fa-arrow-left"></i> Back to All Versions
          </a>
          <div class="release-detail-top" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; gap: 2rem;">
            <div style="flex: 1;">
              <h1 style="font-size: 3.5rem; margin: 0; line-height: 1.1;">${release.name || release.tag_name}</h1>
              <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1rem;">
                <span class="tag ${release.prerelease ? 'tag-rc' : 'tag-stable'}">${release.prerelease ? 'Pre-release' : 'Stable'}</span>
                <span style="color: var(--text-dim);">${new Date(release.published_at).toLocaleDateString()}</span>
              </div>
            </div>
            <a href="${release.html_url}" target="_blank" rel="noopener noreferrer" class="download-btn" style="background: var(--bg-secondary); border: 1px solid var(--border-color); flex-shrink: 0; padding: 0.75rem 1.5rem; font-size: 1rem;">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4rem;">
            <div id="downloads-section">
              <h2 style="text-align: left; font-size: 2rem; margin-bottom: 1.5rem;">Downloads</h2>
              <div id="platform-tabs" style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                ${hasWindows ? `<button class="filter-btn ${defaultPlatform === 'windows' ? 'active' : ''}" data-platform="windows"><i class="fab fa-windows"></i> Windows</button>` : ''}
                ${hasLinux ? `<button class="filter-btn ${defaultPlatform === 'linux' ? 'active' : ''}" data-platform="linux"><i class="fab fa-linux"></i> Linux</button>` : ''}
                ${hasMac ? `<button class="filter-btn ${defaultPlatform === 'mac' ? 'active' : ''}" data-platform="mac"><i class="fab fa-apple"></i> macOS</button>` : ''}
                ${others.length ? `<button class="filter-btn ${defaultPlatform === 'other' ? 'active' : ''}" data-platform="other"><i class="fas fa-box"></i> Other</button>` : ''}
              </div>
              <div id="assets-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1rem;"></div>
              <p style="color: var(--text-dim); margin-top: 1.5rem; font-size: 0.9rem;">
                Unzip anywhere and put the binary on your <code>PATH</code>. Run <code>CometCli doctor</code> to check your setup.
              </p>
            </div>

            <div>
              <h2 style="text-align: left; font-size: 2rem; margin-bottom: 1.5rem;">Changelog</h2>
              <div class="markdown-content" style="display: flow-root; background: var(--card-bg); padding: 2rem; border-radius: 12px; border: 1px solid var(--border-color); line-height: 1.8;">
                ${parseMarkdown(release.body)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;

    const assetsList = document.getElementById('assets-list');
    const tabBtns = document.querySelectorAll('#platform-tabs .filter-btn');

    const filterAssets = (platform) => {
      const filtered = platform === 'other' ? others : named(platform);
      assetsList.innerHTML = filtered.map(asset => `
        <a href="${asset.browser_download_url}" class="download-btn" style="justify-content: space-between; font-size: 0.95rem; background: var(--bg-secondary); border: 1px solid var(--border-color); width: 100%;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <i class="fas fa-file-archive" style="color: var(--accent-color);"></i>
            <span>${asset.name}</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--text-dim);">${(asset.size / 1024 / 1024).toFixed(1)} MB</span>
        </a>
      `).join('') || `<div style="padding: 2rem; color: var(--text-dim); grid-column: 1/-1;">No downloads found for ${platform}.</div>`;
    };

    filterAssets(defaultPlatform);

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterAssets(btn.getAttribute('data-platform'));
      });
    });

  } catch (error) {
    container.innerHTML = `<div class="container" style="padding: 100px 2rem;"><h2>Could not load CometCli ${tagName}</h2><p>${error.message}</p><a href="/cli" style="color: var(--accent-color);">Back to all versions</a></div>`;
  }
}
