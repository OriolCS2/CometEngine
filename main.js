import { renderHome } from './src/pages/home.js';
import { renderReleases } from './src/pages/releases.js';
import { renderDocs } from './src/pages/docs.js';
import { renderMarketplace } from './src/pages/marketplace.js';
import { renderAccount } from './src/pages/account.js';
import { initAuthUI } from './src/lib/auth-ui.js';
import { onAuthChange } from './src/lib/marketplace-api.js';

const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-links a');

function handleRoute() {
  const hash = window.location.hash || '#home';

  // Returning from the Google OAuth redirect: Supabase puts the tokens in the
  // URL hash. Show a holding screen until the session is stored, then land on
  // the account page.
  if (hash.includes('access_token=') || hash.includes('error_description=')) {
    handleAuthCallback(hash);
    return;
  }

  // Docs uses a full-height, app-like layout: lock page scroll so only the
  // sidebar tree and content panels scroll (no double scrollbar).
  document.body.classList.toggle('docs-active', hash.startsWith('#docs'));

  // Update active nav link (subpages keep their section highlighted)
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href && href.startsWith('#') && (hash === href || hash.startsWith(href + '/'));
    link.classList.toggle('active', Boolean(isActive));
  });

  // Render page
  if (hash === '#home') {
    renderHome(app);
  } else if (hash.startsWith('#releases')) {
    const tag = hash.replace('#releases', '').substring(1);
    renderReleases(app, tag);
  } else if (hash.startsWith('#docs')) {
    renderDocs(app, hash);
  } else if (hash.startsWith('#marketplace')) {
    renderMarketplace(app, hash);
  } else if (hash.startsWith('#account')) {
    renderAccount(app, hash);
  } else {
    renderHome(app);
  }
}

function handleAuthCallback(hash) {
  if (hash.includes('error_description=')) {
    const params = new URLSearchParams(hash.substring(1));
    const message = params.get('error_description') || 'Unknown error';
    app.innerHTML = `
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-auth-card">
          <i class="fas fa-triangle-exclamation"></i>
          <h2>Sign-in failed</h2>
          <p>${message.replace(/</g, '&lt;')}</p>
          <a href="#home" class="download-btn" style="font-size: 1rem;">Back to Home</a>
        </div>
      </div></section>
    `;
    return;
  }

  app.innerHTML = `
    <section class="mp-section"><div class="container mp-narrow">
      <div class="mp-auth-card"><i class="fas fa-spinner fa-spin"></i><h2>Signing you in...</h2></div>
    </div></section>
  `;
  // supabase-js consumes the tokens from the hash automatically; once the
  // session lands, move to the account page.
  const unsubscribe = onAuthChange((user) => {
    if (user) {
      unsubscribe();
      window.location.hash = '#account';
    }
  });
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

initAuthUI();

// Global click handler for documentation links
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#docs/')) {
    // Vite/Hash routing handles this
  }
});
