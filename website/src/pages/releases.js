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

    // Highlights
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
            <span class="tag ${r.prerelease ? 'tag-rc' : 'tag-stable'}" style="font-size: 0.7rem;">${r.prerelease ? 'RC' : 'Stable'}</span>
          </div>
          <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(r.published_at).toLocaleDateString()}</div>
        </a>
      `).join('') || '<div style="padding: 2rem; color: var(--text-dim);">No releases found.</div>';
      
      // Inline style for hover since I can't easily add a new CSS class without modifying style.css
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

function createFeaturedCard(release, label) {
  const div = document.createElement('div');
  div.className = 'release-card';
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
      <div style="color: var(--accent-color); font-weight: 700; text-transform: uppercase; font-size: 0.8rem;">${label}</div>
      <span class="tag ${release.prerelease ? 'tag-rc' : 'tag-stable'}">${release.prerelease ? 'Pre-release' : 'Stable'}</span>
    </div>
    <div class="release-header">
      <h3 style="font-size: 1.8rem;"><a href="#releases/${release.tag_name}">${release.name || release.tag_name}</a></h3>
      <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(release.published_at).toLocaleDateString()}</div>
    </div>
    <div style="margin: 1.5rem 0; color: var(--text-dim); font-size: 0.95rem; height: 300px; overflow-y: auto; padding-right: 1rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
      ${formatMarkdown(release.body)}
    </div>
    <div style="margin-top: auto;">
      <a href="#releases/${release.tag_name}" class="download-btn" style="width: 100%; justify-content: center;">View Full Release Notes</a>
    </div>
  `;
  return div;
}

async function renderReleaseDetail(container, tagName) {
  container.innerHTML = `<div class="container" style="padding: 100px 2rem;"><div class="loading">Loading release ${tagName}...</div></div>`;
  
  try {
    const response = await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases/tags/${tagName}`);
    const release = await response.json();

    container.innerHTML = `
      <section style="padding-top: 120px;">
        <div class="container">
          <a href="#releases" style="color: var(--accent-color); margin-bottom: 2rem; display: inline-block;">
            <i class="fas fa-arrow-left"></i> Back to All Releases
          </a>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3rem;">
            <div>
              <h1 style="font-size: 3.5rem; margin-bottom: 0.5rem;">${release.name || release.tag_name}</h1>
              <div style="display: flex; gap: 1rem; align-items: center;">
                <span class="tag ${release.prerelease ? 'tag-rc' : 'tag-stable'}">${release.prerelease ? 'Pre-release' : 'Stable'}</span>
                <span style="color: var(--text-dim);">${new Date(release.published_at).toLocaleDateString()}</span>
              </div>
            </div>
            <a href="${release.html_url}" target="_blank" class="download-btn" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div style="display: flex; gap: 4rem; flex-wrap: wrap;">
            <div style="flex: 2; min-width: 300px;">
              <h2 style="text-align: left; font-size: 1.8rem; margin-bottom: 1.5rem;">Release Notes</h2>
              <div class="markdown-content" style="background: var(--card-bg); padding: 2rem; border-radius: 12px; border: 1px solid var(--border-color); line-height: 1.8;">
                ${formatMarkdown(release.body)}
              </div>
            </div>
            <div style="flex: 1; min-width: 250px;">
              <h2 style="text-align: left; font-size: 1.8rem; margin-bottom: 1.5rem;">Downloads</h2>
              <div style="display: grid; gap: 1rem;">
                ${release.assets.map(asset => `
                  <a href="${asset.browser_download_url}" class="download-btn" style="justify-content: space-between; font-size: 0.95rem; background: var(--bg-secondary); border: 1px solid var(--border-color);">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <i class="fas fa-file-archive" style="color: var(--accent-color);"></i>
                      <span>${asset.name}</span>
                    </div>
                    <span style="font-size: 0.8rem; color: var(--text-dim);">${(asset.size / 1024 / 1024).toFixed(1)} MB</span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  } catch (error) {
    container.innerHTML = `<div class="container" style="padding: 100px 2rem;"><h2>Error loading release details</h2><p>${error.message}</p></div>`;
  }
}

function formatMarkdown(text) {
  if (!text) return '';
  
  // Handle nested lists by looking for spaces before the marker
  // This is a simplified regex-based markdown parser
  let lines = text.split('\n');
  let inList = false;
  let html = '';

  lines.forEach(line => {
    // Indented list item
    if (line.match(/^\s+[\-\*]\s+/)) {
      const indent = line.match(/^\s+/)[0].length;
      html += `<li style="margin-left: ${indent * 10}px; list-style: circle;">${line.replace(/^\s+[\-\*]\s+/, '')}</li>`;
    } 
    // Top-level list item
    else if (line.match(/^[\-\*]\s+/)) {
      html += `<li style="margin-left: 1.5rem; list-style: disc;">${line.replace(/^[\-\*]\s+/, '')}</li>`;
    }
    // Headers
    else if (line.startsWith('### ')) {
      html += `<h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">${line.substring(4)}</h4>`;
    }
    else if (line.startsWith('## ')) {
      html += `<h3 style="margin-top: 2rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; color: #fff;">${line.substring(3)}</h3>`;
    }
    else if (line.startsWith('# ')) {
      html += `<h2 style="margin-top: 2.5rem; margin-bottom: 1.2rem; color: #fff;">${line.substring(2)}</h2>`;
    }
    // Bold/Italic/Code
    else {
      let l = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: monospace;">$1</code>');
      html += l + '<br>';
    }
  });

  return html;
}
