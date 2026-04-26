import { marked } from 'marked';

// Configure marked
marked.setOptions({
  gfm: true,
  breaks: true,
});

export async function renderReleases(container, tag) {
  if (tag) {
    renderReleaseDetail(container, tag);
    return;
  }

  container.innerHTML = `
    <section>
      <div class="container">
        <h2>Engine Releases</h2>
        <div id="featured-releases" class="release-list" style="margin-bottom: 4rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
          <div class="loading">Fetching releases from GitHub...</div>
        </div>
        
        <div class="older-releases-section">
          <h3 style="font-size: 2rem; margin-bottom: 2rem;">Older Releases</h3>
          <div id="releases-filter" style="margin-bottom: 2rem; display: flex; gap: 1rem;">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="stable">Stable</button>
            <button class="filter-btn" data-filter="rc">Pre-releases</button>
          </div>
          <div id="older-releases-list" style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden;">
            <div class="loading" style="padding: 2rem;">Loading history...</div>
          </div>
        </div>
      </div>
    </section>
  `;

  const featuredContainer = document.getElementById('featured-releases');
  const olderListContainer = document.getElementById('older-releases-list');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  try {
    const response = await fetch('https://api.github.com/repos/OriolCS2/CometEngine/releases');
    const allReleases = await response.json();
    allReleases.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    const latestStable = allReleases.find(r => !r.prerelease);
    const latestRC = allReleases.find(r => r.prerelease && (!latestStable || new Date(r.published_at) > new Date(latestStable.published_at)));

    featuredContainer.innerHTML = '';
    if (latestStable) {
      featuredContainer.appendChild(createFeaturedCard(latestStable, 'Latest Stable Release'));
    }
    if (latestRC) {
      featuredContainer.appendChild(createFeaturedCard(latestRC, 'Latest Release Candidate'));
    }

    const renderOlderList = (filtered) => {
      olderListContainer.innerHTML = filtered.map(r => `
        <a href="#releases/${r.tag_name}" class="older-release-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-color); transition: var(--transition);">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-weight: 600; font-size: 1.1rem;">${r.name || r.tag_name}</span>
            <span class="tag ${r.prerelease ? 'tag-rc' : 'tag-stable'}" style="font-size: 0.7rem;">${r.prerelease ? 'Pre-release' : 'Stable'}</span>
          </div>
          <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(r.published_at).toLocaleDateString()}</div>
        </a>
      `).join('') || '<div style="padding: 2rem; color: var(--text-dim);">No releases found.</div>';

      // Restore hover effects
      olderListContainer.querySelectorAll('.older-release-item').forEach(item => {
        item.onmouseenter = () => { item.style.backgroundColor = 'rgba(255, 140, 0, 0.1)'; };
        item.onmouseleave = () => { item.style.backgroundColor = 'transparent'; };
      });
    };

    renderOlderList(allReleases);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        let filtered = allReleases;
        if (filter === 'stable') filtered = allReleases.filter(r => !r.prerelease);
        if (filter === 'rc') filtered = allReleases.filter(r => r.prerelease);
        renderOlderList(filtered);
      });
    });

  } catch (error) {
    console.error('Error fetching releases:', error);
    featuredContainer.innerHTML = '<p>Error loading releases.</p>';
  }
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

function createFeaturedCard(release, label) {
  const div = document.createElement('div');
  div.className = 'release-card';
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  
  const mdContent = parseMarkdown(release.body);
  
  div.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
      <div style="color: var(--accent-color); font-weight: 700; text-transform: uppercase; font-size: 0.8rem;">${label}</div>
      <span class="tag ${release.prerelease ? 'tag-rc' : 'tag-stable'}">${release.prerelease ? 'Pre-release' : 'Stable'}</span>
    </div>
    <div class="release-header">
      <h3 style="font-size: 1.8rem;"><a href="#releases/${release.tag_name}">${release.name || release.tag_name}</a></h3>
      <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(release.published_at).toLocaleDateString()}</div>
    </div>
    <div class="markdown-content" style="
      ul { list-style: disc; margin-left: 1.5rem; margin-bottom: 1rem; }
      ol { list-style: decimal; margin-left: 1.5rem; margin-bottom: 1rem; }
      li { margin-bottom: 0.25rem; }
      height: 300px; overflow-y: auto; padding-right: 1rem; background: rgba(0,0,0,0.2); padding: 1.5rem; border-radius: 8px; border: 1px solid var(--border-color);">
      ${mdContent}
    </div>
    <div style="margin-top: auto; padding-top: 1.5rem;">
      <a href="#releases/${release.tag_name}" class="download-btn" style="width: 100%; justify-content: center; display: flex; align-items: center;">Download</a>
    </div>
  `;
  return div;
}

async function renderReleaseDetail(container, tagName) {
  container.innerHTML = `<div class="container" style="padding: 100px 2rem;"><div class="loading">Loading release ${tagName}...</div></div>`;
  
  try {
    const response = await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases/tags/${tagName}`);
    const release = await response.json();

    const assets = release.assets || [];
    const hasWindows = assets.some(a => a.name.toLowerCase().includes('windows'));
    const hasLinux = assets.some(a => a.name.toLowerCase().includes('linux'));
    const hasMac = assets.some(a => a.name.toLowerCase().includes('mac'));
    const hasOther = assets.some(a => !['windows', 'linux', 'mac'].some(p => a.name.toLowerCase().includes(p)));

    const detectedOS = getDetectedOS();
    let defaultPlatform = 'windows';
    if (detectedOS === 'linux' && hasLinux) defaultPlatform = 'linux';
    else if (detectedOS === 'mac' && hasMac) defaultPlatform = 'mac';
    else if (hasWindows) defaultPlatform = 'windows';
    else if (hasLinux) defaultPlatform = 'linux';
    else if (hasMac) defaultPlatform = 'mac';
    else if (hasOther) defaultPlatform = 'other';

    container.innerHTML = `
      <section style="padding-top: 120px;">
        <div class="container">
          <a href="#releases" style="color: var(--accent-color); margin-bottom: 2rem; display: inline-block;">
            <i class="fas fa-arrow-left"></i> Back to All Releases
          </a>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3rem; gap: 2rem;">
            <div style="flex: 1;">
              <h1 style="font-size: 3.5rem; margin: 0; line-height: 1.1;">${release.name || release.tag_name}</h1>
              <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1rem;">
                <span class="tag ${release.prerelease ? 'tag-rc' : 'tag-stable'}">${release.prerelease ? 'Pre-release' : 'Stable'}</span>
                <span style="color: var(--text-dim);">${new Date(release.published_at).toLocaleDateString()}</span>
              </div>
            </div>
            <a href="${release.html_url}" target="_blank" class="download-btn" style="background: var(--bg-secondary); border: 1px solid var(--border-color); flex-shrink: 0; padding: 0.75rem 1.5rem; font-size: 1rem;">
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
                ${hasOther ? `<button class="filter-btn ${defaultPlatform === 'other' ? 'active' : ''}" data-platform="other"><i class="fas fa-box"></i> Other</button>` : ''}
              </div>
              <div id="assets-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1rem;">
                <!-- Assets will be injected here -->
              </div>
            </div>

            <div>
              <h2 style="text-align: left; font-size: 2rem; margin-bottom: 1.5rem;">Release Notes</h2>
              <div class="markdown-content" style="background: var(--card-bg); padding: 3.5rem; border-radius: 12px; border: 1px solid var(--border-color); line-height: 1.8;">
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
      let filtered = [];
      if (platform === 'other') {
        filtered = assets.filter(a => !['windows', 'linux', 'mac'].some(p => a.name.toLowerCase().includes(p)));
      } else {
        filtered = assets.filter(a => a.name.toLowerCase().includes(platform));
      }

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

    // Initial filter
    filterAssets(defaultPlatform);

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterAssets(btn.getAttribute('data-platform'));
      });
    });

  } catch (error) {
    container.innerHTML = `<div class="container" style="padding: 100px 2rem;"><h2>Error loading release details</h2><p>${error.message}</p></div>`;
  }
}

function getDetectedOS() {
  const platform = window.navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'windows';
  if (platform.includes('linux')) return 'linux';
  if (platform.includes('mac')) return 'mac';
  return 'windows';
}
