import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Shared UI helpers for the marketplace pages.

export function escapeHtml(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// User-submitted markdown must always go through DOMPurify (unlike release
// notes, which only the repo owner can write).
export function renderMarkdown(md) {
  if (!md) return '';
  try {
    return DOMPurify.sanitize(marked.parse(md.trim(), { gfm: true, breaks: true }));
  } catch (e) {
    console.error('Markdown parsing error:', e);
    return escapeHtml(md).replace(/\n/g, '<br>');
  }
}

export function formatBytes(bytes) {
  if (!bytes && bytes !== 0) return '—';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export function formatDownloads(n) {
  n = n || 0;
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}

export function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString();
}

// --- Semantic versions -------------------------------------------------------

export function isValidSemver(v) {
  return /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(v);
}

export function semverCompare(a, b) {
  const [coreA, preA] = String(a).split('-');
  const [coreB, preB] = String(b).split('-');
  const na = coreA.split('.').map(Number);
  const nb = coreB.split('.').map(Number);
  for (let i = 0; i < 3; i++) {
    if ((na[i] || 0) !== (nb[i] || 0)) return (na[i] || 0) - (nb[i] || 0);
  }
  // 1.0.0-rc.1 < 1.0.0
  if (preA && !preB) return -1;
  if (!preA && preB) return 1;
  if (preA && preB) return preA < preB ? -1 : preA > preB ? 1 : 0;
  return 0;
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

// --- Toasts -------------------------------------------------------------------

export function showToast(message, type = 'info') {
  let host = document.getElementById('toast-container');
  if (!host) {
    host = document.createElement('div');
    host.id = 'toast-container';
    host.className = 'toast-container';
    document.body.appendChild(host);
  }
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'error' ? 'fa-circle-exclamation'
    : type === 'success' ? 'fa-circle-check'
    : 'fa-circle-info';
  toast.innerHTML = `<i class="fas ${icon}"></i><span>${escapeHtml(message)}</span>`;
  host.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 400);
  }, type === 'error' ? 6000 : 3500);
}

// --- Lightbox -----------------------------------------------------------------

export function openLightbox(imageUrl) {
  const overlay = document.createElement('div');
  overlay.className = 'mp-lightbox';
  overlay.innerHTML = `<img src="${escapeHtml(imageUrl)}" alt="Screenshot">`;
  overlay.addEventListener('click', () => overlay.remove());
  document.addEventListener('keydown', function onKey(e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', onKey);
    }
  });
  document.body.appendChild(overlay);
}
