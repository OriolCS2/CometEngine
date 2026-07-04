import { renderHome } from './src/pages/home.js';
import { renderReleases } from './src/pages/releases.js';
import { renderDocs } from './src/pages/docs.js';
import { renderTutorials } from './src/pages/tutorials.js';
import { renderMarketplace } from './src/pages/marketplace.js';
import { renderAccount } from './src/pages/account.js';
import { initAuthUI } from './src/lib/auth-ui.js';
import { onAuthChange } from './src/lib/marketplace-api.js';
import { navigate, currentRoute } from './src/lib/router.js';

const app = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-links a');

// Per-route <title> and description. Prerendered pages ship these baked in;
// this keeps them correct during client-side navigation too.
const DEFAULT_TITLE = 'Comet Engine — Free 2D Game Engine (C++ & AngelScript)';
const DEFAULT_DESC =
  document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

function setMeta(title, desc) {
  document.title = title || DEFAULT_TITLE;
  const m = document.querySelector('meta[name="description"]');
  if (m) m.setAttribute('content', desc || DEFAULT_DESC);
}

function handleRoute() {
  // Supabase returns OAuth tokens in the URL hash — handle that before routing.
  const rawHash = window.location.hash;
  if (rawHash.includes('access_token=') || rawHash.includes('error_description=')) {
    handleAuthCallback(rawHash);
    return;
  }

  const route = currentRoute();            // legacy "#path" form the pages parse
  const path = window.location.pathname;

  // Docs and tutorial pages use a full-height, app-like layout: lock page
  // scroll so only the sidebar tree and content panels scroll.
  document.body.classList.toggle(
    'docs-active',
    route.startsWith('#docs') || route.startsWith('#tutorials/')
  );

  // Highlight the active top-nav link (subpages keep their section active).
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const isActive = href.startsWith('/') && href !== '/' &&
      (path === href || path.startsWith(href.replace(/\/$/, '') + '/'));
    link.classList.toggle('active', Boolean(isActive));
  });

  if (route === '#home') {
    setMeta(DEFAULT_TITLE, DEFAULT_DESC);
    renderHome(app);
  } else if (route.startsWith('#releases')) {
    const tag = route.replace('#releases', '').substring(1);
    setMeta('Releases — Comet Engine', 'Download the latest Comet Engine releases and read the patch notes.');
    renderReleases(app, tag);
  } else if (route.startsWith('#tutorials')) {
    renderTutorials(app, route);           // sets its own per-tutorial title
  } else if (route.startsWith('#docs')) {
    setMeta('Documentation — Comet Engine', 'API reference and documentation for the Comet Engine 2D game engine.');
    renderDocs(app, route);
  } else if (route.startsWith('#marketplace')) {
    setMeta('Marketplace — Comet Engine', 'Browse and download assets and packages for Comet Engine.');
    renderMarketplace(app, route);
  } else if (route.startsWith('#account')) {
    setMeta('Account — Comet Engine', DEFAULT_DESC);
    renderAccount(app, route);
  } else {
    setMeta(DEFAULT_TITLE, DEFAULT_DESC);
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
          <a href="/" class="download-btn" style="font-size: 1rem;">Back to Home</a>
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
  // session lands, move to the account page (which also clears the hash).
  const unsubscribe = onAuthChange((user) => {
    if (user) {
      unsubscribe();
      navigate('/account');
    }
  });
}

// Intercept clicks on internal links so navigation stays an SPA (no reload).
document.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest?.('a');
  if (!a) return;
  const href = a.getAttribute('href');
  if (!href || !href.startsWith('/') || href.startsWith('//')) return; // external / anchor / mailto
  if (a.target === '_blank' || a.hasAttribute('download') || a.getAttribute('rel') === 'external') return;
  e.preventDefault();
  navigate(href);
});

window.addEventListener('popstate', handleRoute);   // browser back/forward
window.addEventListener('route-change', handleRoute); // navigate()
window.addEventListener('load', handleRoute);

initAuthUI();
