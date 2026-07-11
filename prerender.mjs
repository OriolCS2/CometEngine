// Prerender the tutorial pages to static HTML so search engines (and non-JS
// crawlers) index each one at its real URL, then generate the sitemap and the
// SPA 404 fallback. Runs after `vite build` (see package.json `build`).

import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';

const ROOT = dirname(fileURLToPath(import.meta.url));
const DOCS = join(ROOT, 'docs');
const TUT_SRC = join(ROOT, 'src', 'tutorials');
const SITE = 'https://www.cometengine.org';

const shell = readFileSync(join(DOCS, 'index.html'), 'utf8');

const escapeAttr = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** First paragraph of the markdown, flattened to a ~160-char plain description. */
function describe(md) {
  const body = md.replace(/^#\s.*$/m, '').trim();
  const firstPara = (body.split(/\n\s*\n/).find(p => p.trim() && !p.startsWith('!')) || '');
  const text = firstPara
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')      // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')    // links -> their text
    .replace(/[*_`>#|]/g, '')                   // markdown punctuation
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > 160 ? text.slice(0, 157).trimEnd() + '…' : text;
}

/** Read a PNG's pixel dimensions from its IHDR header, or null. */
function pngSize(file) {
  try {
    const buf = readFileSync(file);
    if (buf.length > 24 && buf.readUInt32BE(0) === 0x89504e47) {
      return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
    }
  } catch { /* ignore */ }
  return null;
}

function pageHtml({ title, description, url, contentHtml, image }) {
  const full = `${title} — Comet Engine`;
  let html = shell
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(full)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeAttr(description)}$2`)
    .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${escapeAttr(full)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${escapeAttr(description)}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${escapeAttr(full)}$2`)
    .replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${escapeAttr(description)}$2`)
    .replace(/(<main\s+id="app">)[\s\S]*?(<\/main>)/, `$1<article class="tut-prerender">${contentHtml}</article>$2`);
  if (image) {
    html = html
      .replace(/(<meta\s+property="og:image"\s+content=")[^"]*(")/, `$1${image.url}$2`)
      .replace(/(<meta\s+name="twitter:image"\s+content=")[^"]*(")/, `$1${image.url}$2`)
      .replace(/(<meta\s+property="og:image:alt"\s+content=")[^"]*(")/, `$1${escapeAttr(image.alt || full)}$2`);
    if (image.w && image.h) {
      html = html
        .replace(/(<meta\s+property="og:image:width"\s+content=")[^"]*(")/, `$1${image.w}$2`)
        .replace(/(<meta\s+property="og:image:height"\s+content=")[^"]*(")/, `$1${image.h}$2`);
    }
  }
  return html;
}

function writePage(relDir, html) {
  const dir = join(DOCS, relDir);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf8');
}

const urls = ['/', '/tutorials/', '/marketplace/', '/releases/', '/docs/'];
const cards = [];
let count = 0;

for (const file of readdirSync(TUT_SRC).filter(f => f.endsWith('.md'))) {
  const id = file.replace(/\.md$/, '');
  const md = readFileSync(join(TUT_SRC, file), 'utf8');
  const title = (md.match(/^#\s+(.+)$/m)?.[1] || id).trim();
  const description = describe(md);
  const url = `${SITE}/tutorials/${id}/`;

  // Use the tutorial's first image as its own social-preview (og:image), so a
  // shared link shows that tutorial's screenshot instead of the generic one.
  let image = null;
  const m = md.match(/!\[([^\]]*)\]\((\/tutorials\/[^)]+\.(?:png|jpe?g|webp))\)/i);
  if (m) {
    const size = pngSize(join(ROOT, 'public', m[2].replace(/^\//, '')));
    image = { url: SITE + m[2], alt: m[1], w: size?.w, h: size?.h };
  }

  writePage(`tutorials/${id}`, pageHtml({ title, description, url, contentHtml: marked.parse(md), image }));
  urls.push(`/tutorials/${id}/`);
  cards.push(`<li><a href="/tutorials/${id}">${escapeAttr(title)}</a> — ${escapeAttr(description)}</li>`);
  count++;
}

// Tutorials landing
writePage('tutorials', pageHtml({
  title: 'Tutorials',
  description: 'Step-by-step guides to every major subsystem of the Comet Engine 2D game engine.',
  url: `${SITE}/tutorials/`,
  contentHtml: `<h1>Comet Engine Tutorials</h1><ul>${cards.join('')}</ul>`,
}));

// Top-level section shells so those routes return HTTP 200 (indexable) with
// their own title/description, instead of falling through to the 404 handler.
// Their content is filled in by the client; deeper sub-routes (e.g.
// /marketplace/<slug>) still use the 404 SPA fallback below.
const sections = [
  { path: 'marketplace', title: 'Marketplace', description: 'Browse and download assets, templates and packages for the Comet Engine 2D game engine.' },
  { path: 'releases', title: 'Releases', description: 'Download the latest Comet Engine releases and read the patch notes.' },
  { path: 'docs', title: 'Documentation', description: 'API reference and documentation for the Comet Engine 2D game engine.' },
];
for (const s of sections) {
  writePage(s.path, pageHtml({
    title: s.title, description: s.description,
    url: `${SITE}/${s.path}/`, contentHtml: `<h1>${escapeAttr(s.title)}</h1>`,
  }));
}

// SPA fallback: any remaining path with no static file serves the app shell,
// which client-renders the route (sub-routes, /account, unknown URLs, ...).
// We set generic Marketplace metas here so shared package links look decent
// even without full SSR/prerendering.
const spaShell = pageHtml({
  title: 'Marketplace',
  description: 'Explore community-made packages, assets, and tools for the Comet Engine.',
  url: `${SITE}/marketplace/`,
  contentHtml: '<h1>Loading Comet Engine...</h1>',
  image: { url: `${SITE}/logo.png`, alt: 'Comet Engine' }
});
writeFileSync(join(DOCS, '404.html'), spaShell, 'utf8');

// Sitemap covering the home page, the section pages and every tutorial.
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map(u => `  <url><loc>${SITE}${u}</loc></url>`).join('\n') +
  '\n</urlset>\n';
writeFileSync(join(DOCS, 'sitemap.xml'), sitemap, 'utf8');

console.log(`[prerender] ${count} tutorials + landing + 404.html + sitemap (${urls.length} urls)`);
