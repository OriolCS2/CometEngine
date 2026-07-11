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

function pageHtml({ title, description, url, contentHtml, image, breadcrumbs }) {
  const full = `${title} — Comet Engine`;
  const imgData = image || { url: `${SITE}/logo.png`, alt: full };

  // 1. Purge all existing SEO/Social/JSON-LD tags to avoid any overlap or multi-line issues
  let html = shell
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>/gi, '')
    .replace(/<link\s+rel="canonical"[\s\S]*?\/>/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[\s\S]*?\/>/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?\/>/gi, '')
    .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '') // Purge shell's LD+JSON
    .replace(/(<main\s+id="app">)[\s\S]*?(<\/main>)/i, `$1<article class="tut-prerender">${contentHtml}</article>$2`);

  // 2. Build fresh JSON-LD (Breadcrumbs help sitelinks)
  let ldJson = '';
  if (breadcrumbs) {
    ldJson = `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": ${JSON.stringify(breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": b.name,
        "item": b.url
      })))}
    }
    </script>`;
  }

  // 3. Build a fresh block of metas.
  const newMetas = `
  <title>${escapeAttr(full)}</title>
  <meta name="description" content="${escapeAttr(description)}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Comet Engine" />
  <meta property="og:title" content="${escapeAttr(full)}" />
  <meta property="og:description" content="${escapeAttr(description)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${imgData.url}" />
  <meta property="og:image:alt" content="${escapeAttr(imgData.alt || full)}" />
  ${imgData.w ? `<meta property="og:image:width" content="${imgData.w}" />` : ''}
  ${imgData.h ? `<meta property="og:image:height" content="${imgData.h}" />` : ''}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${escapeAttr(full)}" />
  <meta name="twitter:description" content="${escapeAttr(description)}" />
  <meta name="twitter:image" content="${imgData.url}" />
  ${ldJson}
  `;

  // 4. Inject at the start of <head>
  const headPos = html.indexOf('<head>') + 6;
  html = html.slice(0, headPos) + newMetas + html.slice(headPos);

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

  writePage(`tutorials/${id}`, pageHtml({
    title, description, url,
    contentHtml: marked.parse(md),
    image,
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: 'Tutorials', url: `${SITE}/tutorials/` },
      { name: title, url }
    ]
  }));
  urls.push(`/tutorials/${id}/`);
  cards.push(`<li><a href="/tutorials/${id}/">${escapeAttr(title)}</a> — ${escapeAttr(description)}</li>`);
  count++;
}

// Tutorials landing
writePage('tutorials', pageHtml({
  title: 'Tutorials',
  description: 'Step-by-step guides to every major subsystem of the Comet Engine 2D game engine.',
  url: `${SITE}/tutorials/`,
  contentHtml: `<h1>Comet Engine Tutorials</h1><p>Learn how to use Comet Engine with these step-by-step guides covering lighting, physics, scripting, and more.</p><ul>${cards.join('')}</ul>`,
  breadcrumbs: [
    { name: 'Home', url: `${SITE}/` },
    { name: 'Tutorials', url: `${SITE}/tutorials/` }
  ]
}));

// Top-level section shells so those routes return HTTP 200 (indexable) with
// their own title/description, instead of falling through to the 404 handler.
// Their content is filled in by the client; deeper sub-routes (e.g.
// /marketplace/<slug>) still use the 404 SPA fallback below.
const sections = [
  {
    path: 'marketplace', title: 'Marketplace',
    description: 'Browse and download assets, templates and packages for the Comet Engine 2D game engine.',
    content: '<p>Explore community-made packages, plugins, and assets to extend your Comet Engine projects.</p>'
  },
  {
    path: 'releases', title: 'Releases',
    description: 'Download the latest Comet Engine releases and read the patch notes.',
    content: '<p>Get the latest version of Comet Engine for Windows, Linux, and more.</p>'
  },
  {
    path: 'docs', title: 'Documentation',
    description: 'API reference and documentation for the Comet Engine 2D game engine.',
    content: '<p>Comprehensive API reference and manual for Comet Engine developers.</p>'
  },
];
for (const s of sections) {
  writePage(s.path, pageHtml({
    title: s.title, description: s.description,
    url: `${SITE}/${s.path}/`,
    contentHtml: `<h1>${escapeAttr(s.title)}</h1>${s.content}`,
    breadcrumbs: [
      { name: 'Home', url: `${SITE}/` },
      { name: s.title, url: `${SITE}/${s.path}/` }
    ]
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
  // No image passed here, so it will use defaults in pageHtml
  breadcrumbs: [
    { name: 'Home', url: `${SITE}/` },
    { name: 'Marketplace', url: `${SITE}/marketplace/` }
  ]
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
