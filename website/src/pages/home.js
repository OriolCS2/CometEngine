export async function renderHome(container) {
  container.innerHTML = `
    <section class="hero">
      <div class="container">
        <img src="./logo.png" alt="CometEngine Logo" style="height: 120px; margin-bottom: 2rem;">
        <h1>CometEngine</h1>
        <p>A powerful and lightweight 2D game engine designed for performance, flexibility, and ease of use. Built for developers by developers.</p>
        <div id="latest-release-container">
          <div class="loading">Finding latest version...</div>
        </div>
      </div>
    </section>

    <section id="social" class="social">
      <div class="container">
        <h2>Connect with Us</h2>
        <div class="social-links">
          <a href="https://github.com/OriolCS2/CometEngine" target="_blank" class="social-card">
            <i class="fab fa-github"></i>
            <span>Engine GitHub</span>
          </a>
          <a href="https://github.com/OriolCS2" target="_blank" class="social-card">
            <i class="fab fa-github-alt"></i>
            <span>Profile</span>
          </a>
          <a href="https://www.linkedin.com/in/oriol-capdevila/" target="_blank" class="social-card">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>

    <section id="made-with" class="featured-game">
      <div class="container">
        <h2>Made with CometEngine</h2>
        <div class="game-card">
          <div class="game-img" style="background-image: url('https://img.itch.zone/aW1nLzE1ODA0NzE0LnBuZw==/347x500/0oX8Y8.png');"></div>
          <div class="game-info">
            <h3>Sant Jordi - The Stone Song</h3>
            <p>A beautiful 2D adventure game inspired by the legend of Sant Jordi. Experience fluid gameplay and stunning visuals powered by CometEngine.</p>
            <a href="https://christt105.itch.io/sant-jordi-the-stone-song" target="_blank" class="download-btn" style="background: #da291c;">
              <i class="fas fa-play"></i>
              Play on Itch.io
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  const releaseContainer = document.getElementById('latest-release-container');
  await updateLatestRelease(releaseContainer);
}

async function updateLatestRelease(container) {
  try {
    const response = await fetch('https://api.github.com/repos/OriolCS2/CometEngine/releases');
    const releases = await response.json();
    
    if (!releases || releases.length === 0) {
      container.innerHTML = '<p>No releases found.</p>';
      return;
    }

    // Sort by date just in case
    releases.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));

    const latestStable = releases.find(r => !r.prerelease);
    const latestRC = releases.find(r => r.prerelease);

    let featuredRelease = latestStable || latestRC;
    let isRC = featuredRelease.prerelease;

    // If there's an RC newer than the latest stable, we might want to show both or just the latest stable but mention the RC
    // The user said: "Aqui vigilar perque estaria guay que surti ultima estable i si hi ha un rc mes nova en quant a data que la ultima estable doncs que surti last candidate tmb o algo aixi"
    
    const os = getOS();
    const releaseHtml = `
      <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <a href="${featuredRelease.html_url}" target="_blank" class="download-btn">
          <i class="fas fa-download"></i>
          Download ${featuredRelease.tag_name} ${isRC ? '(RC)' : ''}
        </a>
        <div class="os-info">Available for Windows and Linux</div>
        ${latestStable && latestRC && new Date(latestRC.published_at) > new Date(latestStable.published_at) ? 
          `<p style="font-size: 0.9rem; color: var(--accent-color);">New Release Candidate available: <a href="${latestRC.html_url}" style="text-decoration: underline;">${latestRC.tag_name}</a></p>` : ''}
      </div>
    `;
    
    container.innerHTML = releaseHtml;
  } catch (error) {
    console.error('Error fetching releases:', error);
    container.innerHTML = '<p>Error loading latest release.</p>';
  }
}

function getOS() {
  const platform = window.navigator.platform.toLowerCase();
  if (platform.includes('win')) return 'Windows';
  if (platform.includes('linux')) return 'Linux';
  return 'Desktop';
}
