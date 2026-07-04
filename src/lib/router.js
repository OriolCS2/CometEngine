// Central history-based router helpers.
//
// The site navigates with real URLs (`/tutorials/lights`) instead of hash
// fragments (`#tutorials/lights`) so search engines index each page. To keep
// every page's existing parsing working, `currentRoute()` hands them the route
// back in the legacy `#path` form; only link hrefs and programmatic
// navigations use real `/path` URLs.

/** The current route in legacy `#path` form (e.g. `#tutorials/lights`). */
export function currentRoute() {
  const path = window.location.pathname.replace(/\/+$/, ''); // drop trailing slash
  if (path === '' || path === '/index.html' || path === '/home') return '#home';
  return '#' + path.replace(/^\//, '');
}

/** Navigate to a real path (`/tutorials/lights`) without a full page reload. */
export function navigate(path) {
  if (typeof path !== 'string') return;
  if (path.startsWith('#')) path = '/' + path.slice(1); // tolerate legacy callers
  if (!path.startsWith('/')) path = '/' + path;

  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const targetPath = path.replace(/\/+$/, '') || '/';
  if (targetPath !== currentPath || window.location.hash) {
    window.history.pushState({}, '', path);
  }
  window.dispatchEvent(new Event('route-change'));
  window.scrollTo(0, 0);
}
