import { renderHome } from './src/pages/home.js';
import { renderReleases } from './src/pages/releases.js';
import { renderDocs } from './src/pages/docs.js';

const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-links a');

function handleRoute() {
  const hash = window.location.hash || '#home';
  
  // Update active nav link
  navLinks.forEach(link => {
    if (link.getAttribute('href') === hash) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Render page
  if (hash === '#home') {
    renderHome(app);
  } else if (hash.startsWith('#releases')) {
    const tag = hash.replace('#releases', '').substring(1);
    renderReleases(app, tag);
  } else if (hash.startsWith('#docs')) {
    renderDocs(app, hash);
  }
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

// Global click handler for documentation links
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#docs/')) {
    // Vite/Hash routing handles this
  }
});
