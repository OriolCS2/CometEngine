import { isBackendConfigured, onAuthChange, signInWithGoogle, signOut, ensureProfile } from './marketplace-api.js';
import { escapeHtml, showToast } from './ui.js';

// Renders the sign-in button / user avatar menu in the navbar and keeps it in
// sync with the Supabase session.

let currentUser = null;

export function getCachedUser() {
  return currentUser;
}

export function initAuthUI() {
  const host = document.getElementById('nav-auth');
  if (!host) return;

  onAuthChange((user) => {
    currentUser = user;
    if (user) ensureProfile(user);
    render(host, user);
    // Let open pages (e.g. #account) react to login/logout.
    window.dispatchEvent(new CustomEvent('auth-changed', { detail: { user } }));
  });

  render(host, null);
}

function render(host, user) {
  if (!user) {
    host.innerHTML = `
      <button class="nav-signin-btn" id="nav-signin">
        <i class="fab fa-google"></i><span>Sign in</span>
      </button>
    `;
    host.querySelector('#nav-signin').addEventListener('click', async () => {
      if (!isBackendConfigured()) {
        showToast('Login is not available yet: the marketplace backend is not configured. See MARKETPLACE_SETUP.md.', 'error');
        return;
      }
      try {
        await signInWithGoogle();
      } catch (e) {
        showToast(`Sign-in failed: ${e.message}`, 'error');
      }
    });
    return;
  }

  const meta = user.user_metadata || {};
  const name = meta.full_name || meta.name || user.email || 'Account';
  const avatar = meta.avatar_url
    ? `<img src="${escapeHtml(meta.avatar_url)}" alt="" referrerpolicy="no-referrer">`
    : `<i class="fas fa-user"></i>`;

  host.innerHTML = `
    <button class="nav-avatar" id="nav-avatar" title="${escapeHtml(name)}">${avatar}</button>
    <div class="nav-menu" id="nav-menu" hidden>
      <div class="nav-menu-name">${escapeHtml(name)}</div>
      <a href="#account"><i class="fas fa-cubes"></i> My Packages</a>
      <a href="#account/new"><i class="fas fa-upload"></i> Upload Package</a>
      <button id="nav-signout"><i class="fas fa-right-from-bracket"></i> Sign out</button>
    </div>
  `;

  const avatarBtn = host.querySelector('#nav-avatar');
  const menu = host.querySelector('#nav-menu');

  avatarBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.hidden = !menu.hidden;
  });
  document.addEventListener('click', () => { menu.hidden = true; });
  menu.addEventListener('click', (e) => e.stopPropagation());
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.hidden = true; }));

  host.querySelector('#nav-signout').addEventListener('click', async () => {
    try {
      await signOut();
      showToast('Signed out.', 'success');
      if (window.location.hash.startsWith('#account')) window.location.hash = '#marketplace';
    } catch (e) {
      showToast(`Sign-out failed: ${e.message}`, 'error');
    }
  });
}
