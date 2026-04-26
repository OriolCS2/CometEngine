export async function renderReleases(container) {
  container.innerHTML = `
    <section>
      <div class="container">
        <h2>Engine Releases</h2>
        <div id="releases-filter" style="margin-bottom: 2rem; display: flex; gap: 1rem; justify-content: center;">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="stable">Stable</button>
          <button class="filter-btn" data-filter="rc">Pre-releases</button>
        </div>
        <div id="releases-list" class="release-list">
          <div class="loading">Fetching releases from GitHub...</div>
        </div>
      </div>
    </section>
  `;

  const listContainer = document.getElementById('releases-list');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  let allReleases = [];

  try {
    const response = await fetch('https://api.github.com/repos/OriolCS2/CometEngine/releases');
    allReleases = await response.json();
    
    // Sort by date
    allReleases.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    renderReleaseList(listContainer, allReleases);

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        let filtered = allReleases;
        if (filter === 'stable') filtered = allReleases.filter(r => !r.prerelease);
        if (filter === 'rc') filtered = allReleases.filter(r => r.prerelease);
        
        renderReleaseList(listContainer, filtered);
      });
    });

  } catch (error) {
    console.error('Error fetching releases:', error);
    listContainer.innerHTML = '<p>Error loading releases. Please try again later.</p>';
  }
}

function renderReleaseList(container, releases) {
  if (releases.length === 0) {
    container.innerHTML = '<p style="text-align: center;">No releases found for this filter.</p>';
    return;
  }

  container.innerHTML = releases.map(release => `
    <div class="release-card">
      <div class="release-header">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <h3 style="font-size: 1.5rem;">${release.name || release.tag_name}</h3>
          <span class="tag ${release.prerelease ? 'tag-rc' : 'tag-stable'}">
            ${release.prerelease ? 'Pre-release' : 'Stable'}
          </span>
        </div>
        <div style="color: var(--text-dim); font-size: 0.9rem;">
          ${new Date(release.published_at).toLocaleDateString()}
        </div>
      </div>
      <div class="release-notes" style="margin-bottom: 2rem; color: var(--text-dim); max-height: 200px; overflow-y: auto; padding-right: 1rem;">
        ${formatMarkdown(release.body)}
      </div>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        ${release.assets.map(asset => `
          <a href="${asset.browser_download_url}" class="download-btn" style="font-size: 0.9rem; padding: 0.5rem 1rem;">
            <i class="fas fa-file-archive"></i>
            ${asset.name}
          </a>
        `).join('')}
        <a href="${release.html_url}" target="_blank" class="download-btn" style="font-size: 0.9rem; padding: 0.5rem 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fab fa-github"></i>
          View on GitHub
        </a>
      </div>
    </div>
  `).join('');
}

function formatMarkdown(text) {
  if (!text) return '';
  // Very basic markdown to HTML for release notes
  return text
    .replace(/^### (.*$)/gim, '<h4 style="margin-top: 1rem;">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 style="margin-top: 1rem;">$1</h3>')
    .replace(/^# (.*$)/gim, '<h2 style="margin-top: 1rem;">$1</h2>')
    .replace(/^\* (.*$)/gim, '<li>$1</li>')
    .replace(/^\- (.*$)/gim, '<li>$1</li>')
    .replace(/\n/g, '<br>');
}
