import { marked } from 'marked';
import DOMPurify from 'dompurify';

import spritesMd from '../tutorials/sprite-rendering.md?raw';
import lightsMd from '../tutorials/lights.md?raw';
import tilemapMd from '../tutorials/tilemap.md?raw';
import particlesMd from '../tutorials/particles.md?raw';
import videoMd from '../tutorials/video.md?raw';
import animationMd from '../tutorials/animation.md?raw';
import bezierMd from '../tutorials/bezier.md?raw';
import physicsMd from '../tutorials/physics.md?raw';
import inputMd from '../tutorials/input.md?raw';
import inputActionsMd from '../tutorials/input-actions.md?raw';
import uiMd from '../tutorials/ui-system.md?raw';
import audioMd from '../tutorials/audio.md?raw';
import navigationMd from '../tutorials/navigation.md?raw';
import networkingMd from '../tutorials/networking.md?raw';
import nodeGraphMd from '../tutorials/node-graph.md?raw';
import buildMd from '../tutorials/build-and-patches.md?raw';

// ─── Registry ────────────────────────────────────────────────────────────────
// Flat order defines the Previous/Next navigation at the bottom of each page.

const TUTORIALS = [
  {
    id: 'sprite-rendering',
    title: 'Sprite Rendering & the Sprite Editor',
    icon: 'fa-image',
    category: '2D Graphics',
    blurb: 'Textures, sprites, atlases, 9-slicing and everything the SpriteRenderer can do.',
    md: spritesMd,
  },
  {
    id: 'lights',
    title: '2D Lights & Shadows',
    icon: 'fa-lightbulb',
    category: '2D Graphics',
    blurb: 'Light your scenes with global, point, sprite and custom-shaped lights, plus 2D shadows.',
    md: lightsMd,
  },
  {
    id: 'tilemap',
    title: 'Tilemaps & Rule Tiles',
    icon: 'fa-border-all',
    category: '2D Graphics',
    blurb: 'Paint worlds with grids, animated tiles, auto-tiles and neighbour-aware rule tiles.',
    md: tilemapMd,
  },
  {
    id: 'particles',
    title: 'Particle Systems',
    icon: 'fa-fire',
    category: '2D Graphics',
    blurb: 'Fire, smoke, sparks and magic with a modular, Unity-style particle system.',
    md: particlesMd,
  },
  {
    id: 'video',
    title: 'Video Playback',
    icon: 'fa-film',
    category: '2D Graphics',
    blurb: 'Play WebM video onto a render texture or camera plane, with audio routed through a mixer.',
    md: videoMd,
  },
  {
    id: 'animation',
    title: 'Animation & the Animator',
    icon: 'fa-person-running',
    category: 'Animation',
    blurb: 'Animation clips, keyframes, events, the state machine editor, parameters and transitions.',
    md: animationMd,
  },
  {
    id: 'bezier',
    title: 'Bézier Curves & Paths',
    icon: 'fa-bezier-curve',
    category: 'Animation',
    blurb: 'Author smooth paths and move platforms, cameras and projectiles along them.',
    md: bezierMd,
  },
  {
    id: 'physics',
    title: 'Physics: Bodies, Colliders & Joints',
    icon: 'fa-cubes-stacked',
    category: 'Physics',
    blurb: 'Rigid bodies, colliders, triggers, raycasts and joints on the Box2D backend.',
    md: physicsMd,
  },
  {
    id: 'input',
    title: 'Reading Raw Input',
    icon: 'fa-keyboard',
    category: 'Input',
    blurb: 'Poll keyboard, mouse, controllers and touch directly, frame by frame.',
    md: inputMd,
  },
  {
    id: 'input-actions',
    title: 'Input Actions: The Input Module',
    icon: 'fa-gamepad',
    category: 'Input',
    blurb: 'Bind rebindable named actions, add deadzones and hold/tap, and debug them live.',
    md: inputActionsMd,
  },
  {
    id: 'ui-system',
    title: 'Building User Interfaces',
    icon: 'fa-window-maximize',
    category: 'UI',
    blurb: 'Canvas, RectTransform anchoring, buttons, text, layouts and input events.',
    md: uiMd,
  },
  {
    id: 'audio',
    title: 'Audio & Mixers',
    icon: 'fa-volume-high',
    category: 'Audio',
    blurb: 'Play 2D and positional sound, route it through mixer groups and control it from code.',
    md: audioMd,
  },
  {
    id: 'navigation',
    title: 'Navigation: NavMesh, Agents & Obstacles',
    icon: 'fa-route',
    category: 'Navigation',
    blurb: 'Bake navigation meshes, move agents along paths and avoid dynamic obstacles.',
    md: navigationMd,
  },
  {
    id: 'networking',
    title: 'Networking & Multiplayer',
    icon: 'fa-network-wired',
    category: 'Networking',
    blurb: 'Host and join games, call RPCs, replicate state and spawn entities across the network.',
    md: networkingMd,
  },
  {
    id: 'node-graph',
    title: 'Visual Scripting with Node Graphs',
    icon: 'fa-diagram-project',
    category: 'Visual Scripting',
    blurb: 'Author gameplay logic as node graphs and write your own custom nodes in AngelScript.',
    md: nodeGraphMd,
  },
  {
    id: 'build-and-patches',
    title: 'Exporting Builds & Shipping Patches',
    icon: 'fa-box-open',
    category: 'Shipping',
    blurb: 'Export to Windows, Linux, Android and Web, then ship incremental patches to players.',
    md: buildMd,
  },
];

const CATEGORY_ORDER = ['2D Graphics', 'Animation', 'Physics', 'Input', 'UI', 'Audio', 'Navigation', 'Networking', 'Visual Scripting', 'Shipping'];

let sidebarFilter = '';

// ─── AngelScript syntax highlighting ─────────────────────────────────────────
// Small hand-rolled tokenizer: walks the raw code once, longest-priority match
// first, and HTML-escapes every emitted token so the result is safe to inject.

const AS_KEYWORDS = new Set([
  'class', 'interface', 'enum', 'funcdef', 'namespace', 'using', 'import', 'from', 'typedef', 'mixin',
  'void', 'bool', 'int', 'int8', 'int16', 'int32', 'int64', 'uint', 'uint8', 'uint16', 'uint32', 'uint64',
  'float', 'double', 'string', 'array', 'dictionary', 'auto', 'ref', 'any',
  'const', 'private', 'protected', 'shared', 'external', 'final', 'abstract', 'override', 'explicit', 'property',
  'get', 'set', 'in', 'out', 'inout',
  'if', 'else', 'for', 'while', 'do', 'switch', 'case', 'default', 'break', 'continue', 'return',
  'null', 'true', 'false', 'this', 'super', 'cast', 'is', 'not', 'and', 'or', 'xor', 'try', 'catch',
]);

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function highlightAngelScript(code) {
  let out = '';
  let i = 0;
  const n = code.length;

  const push = (cls, text) => {
    out += cls ? `<span class="as-${cls}">${escapeHtml(text)}</span>` : escapeHtml(text);
  };

  while (i < n) {
    const rest = code.slice(i);

    // Comments
    let m = rest.match(/^\/\/[^\n]*/);
    if (m) { push('comment', m[0]); i += m[0].length; continue; }
    m = rest.match(/^\/\*[\s\S]*?(\*\/|$)/);
    if (m) { push('comment', m[0]); i += m[0].length; continue; }

    // Strings
    m = rest.match(/^"(?:[^"\\\n]|\\.)*"/);
    if (m) { push('string', m[0]); i += m[0].length; continue; }
    m = rest.match(/^'(?:[^'\\\n]|\\.)*'/);
    if (m) { push('string', m[0]); i += m[0].length; continue; }

    // Preprocessor (#include ...)
    m = rest.match(/^#[a-zA-Z]+[^\n]*/);
    if (m) { push('meta', m[0]); i += m[0].length; continue; }

    // Metadata attribute at start of line: [Rpc(...)], [Serialize], [Replicate("on_change")]
    if ((i === 0 || code[i - 1] === '\n') ) {
      m = rest.match(/^\s*\[[A-Za-z][^\]\n]*\]/);
      if (m) { push('meta', m[0]); i += m[0].length; continue; }
    }

    // Numbers (hex, float with F suffix, int)
    m = rest.match(/^0[xX][0-9a-fA-F]+|^\d+\.\d+[fF]?|^\.\d+[fF]?|^\d+[fF]?/);
    if (m && /^[\d.]|^0[xX]/.test(m[0])) {
      // avoid matching identifiers that start with digits mid-word
      const prev = i > 0 ? code[i - 1] : '';
      if (!/[A-Za-z0-9_]/.test(prev)) { push('number', m[0]); i += m[0].length; continue; }
    }

    // Identifiers / keywords / types / functions
    m = rest.match(/^[A-Za-z_][A-Za-z0-9_]*/);
    if (m) {
      const word = m[0];
      const after = code.slice(i + word.length);
      if (AS_KEYWORDS.has(word)) {
        push('keyword', word);
      } else if (after.startsWith('::')) {
        push('type', word); // namespace / enum qualifier: KeyCode::W, Time::GetDeltaTime
      } else if (/^\s*\(/.test(after)) {
        push('func', word);
      } else if (/^[A-Z]/.test(word)) {
        push('type', word); // PascalCase identifiers read as types
      } else {
        push(null, word);
      }
      i += word.length;
      continue;
    }

    // Anything else: emit one char
    push(null, code[i]);
    i += 1;
  }

  return out;
}

// ─── Markdown pipeline ───────────────────────────────────────────────────────

function slugify(text) {
  return text.toLowerCase().trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function ensureLightbox() {
  if (window.openLightbox) return;
  window.openLightbox = (src) => {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.85); display: flex; justify-content: center;
      align-items: center; z-index: 9999; cursor: zoom-out;
      opacity: 0; transition: opacity 0.3s ease; backdrop-filter: blur(5px);
    `;
    const img = document.createElement('img');
    img.src = src;
    img.style.cssText = `
      max-width: 90%; max-height: 90%; border-radius: 12px;
      box-shadow: 0 0 50px rgba(0,0,0,0.5); transform: scale(0.9);
      transition: transform 0.3s ease; border: 1px solid rgba(255,255,255,0.1);
    `;
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    setTimeout(() => { overlay.style.opacity = '1'; img.style.transform = 'scale(1)'; }, 10);
    overlay.onclick = () => {
      overlay.style.opacity = '0';
      img.style.transform = 'scale(0.9)';
      setTimeout(() => overlay.remove(), 300);
    };
  };
}

const ADMONITIONS = {
  NOTE: { icon: 'fa-circle-info', label: 'Note' },
  TIP: { icon: 'fa-lightbulb', label: 'Tip' },
  WARNING: { icon: 'fa-triangle-exclamation', label: 'Warning' },
  IMPORTANT: { icon: 'fa-circle-exclamation', label: 'Important' },
};

// Renders markdown to an enhanced, sanitized DOM node.
function renderMarkdown(md) {
  const rawHtml = marked.parse(md, { gfm: true, breaks: false });
  const safeHtml = DOMPurify.sanitize(rawHtml);

  const root = document.createElement('div');
  root.className = 'tut-md';
  root.innerHTML = safeHtml;

  // Heading anchors (used by the "On this page" panel)
  const usedIds = new Set();
  root.querySelectorAll('h2, h3').forEach(h => {
    let id = slugify(h.textContent);
    while (usedIds.has(id)) id += '-x';
    usedIds.add(id);
    h.id = id;
  });

  // GitHub-style admonitions: blockquote starting with [!NOTE] etc.
  root.querySelectorAll('blockquote').forEach(bq => {
    const first = bq.querySelector('p');
    if (!first) return;
    const match = first.textContent.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*/);
    if (!match) return;
    const kind = match[1];
    const conf = ADMONITIONS[kind];

    // Strip the [!KIND] marker from the first paragraph
    first.innerHTML = first.innerHTML.replace(/^\s*\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*(<br\s*\/?>)?\s*/, '');
    if (!first.textContent.trim()) first.remove();

    const box = document.createElement('div');
    box.className = `tut-callout tut-callout-${kind.toLowerCase()}`;
    box.innerHTML = `<div class="tut-callout-title"><i class="fas ${conf.icon}"></i>${conf.label}</div>`;
    while (bq.firstChild) box.appendChild(bq.firstChild);
    bq.replaceWith(box);
  });

  // Images become zoomable figures; the alt text is the caption.
  root.querySelectorAll('img').forEach(img => {
    const figure = document.createElement('figure');
    figure.className = 'tut-figure';
    const caption = img.getAttribute('alt') || '';
    img.loading = 'lazy';
    const p = img.parentElement;
    p.replaceChild(figure, img);
    figure.appendChild(img);
    if (caption) {
      const fc = document.createElement('figcaption');
      fc.textContent = caption;
      figure.appendChild(fc);
    }
    // Unwrap the paragraph marked put the image in (avoids odd margins)
    if (p.tagName === 'P' && p.childNodes.length === 1) p.replaceWith(figure);
  });

  // Code blocks: highlight AngelScript, add language tag + copy button.
  root.querySelectorAll('pre > code').forEach(code => {
    const pre = code.parentElement;
    const langMatch = (code.className || '').match(/language-(\w+)/);
    const lang = langMatch ? langMatch[1] : '';
    const source = code.textContent;

    if (lang === 'angelscript' || lang === 'as') {
      code.innerHTML = highlightAngelScript(source);
    }

    const wrap = document.createElement('div');
    wrap.className = 'tut-codeblock';
    pre.replaceWith(wrap);
    const header = document.createElement('div');
    header.className = 'tut-codeblock-header';
    header.innerHTML = `
      <span class="tut-codeblock-lang">${lang === 'as' ? 'angelscript' : (lang || 'text')}</span>
      <button class="tut-copy-btn" type="button" title="Copy to clipboard"><i class="far fa-copy"></i> Copy</button>
    `;
    wrap.appendChild(header);
    wrap.appendChild(pre);

    header.querySelector('.tut-copy-btn').addEventListener('click', (e) => {
      navigator.clipboard.writeText(source).then(() => {
        const btn = e.currentTarget;
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => { btn.innerHTML = '<i class="far fa-copy"></i> Copy'; }, 1600);
      });
    });
  });

  // Tables scroll horizontally on small screens instead of breaking layout.
  root.querySelectorAll('table').forEach(table => {
    const wrap = document.createElement('div');
    wrap.className = 'tut-table-wrap';
    table.replaceWith(wrap);
    wrap.appendChild(table);
  });

  // Lightbox on figures
  root.querySelectorAll('.tut-figure img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => window.openLightbox(img.src));
  });

  return root;
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function renderSidebar(activeId) {
  const byCategory = new Map();
  CATEGORY_ORDER.forEach(c => byCategory.set(c, []));
  TUTORIALS.forEach(t => byCategory.get(t.category).push(t));

  const filter = sidebarFilter.toLowerCase();

  let html = '';
  byCategory.forEach((tuts, category) => {
    const visible = filter
      ? tuts.filter(t => t.title.toLowerCase().includes(filter) || category.toLowerCase().includes(filter))
      : tuts;
    if (visible.length === 0) return;
    html += `
      <div class="tut-nav-category">${category}</div>
      ${visible.map(t => `
        <a href="#tutorials/${t.id}" class="tut-nav-item ${t.id === activeId ? 'active' : ''}">
          <i class="fas ${t.icon}"></i><span>${t.title}</span>
        </a>
      `).join('')}
    `;
  });

  return html || '<div class="tut-nav-empty">No tutorials match your search.</div>';
}

// ─── Landing page ────────────────────────────────────────────────────────────

function renderLanding(container) {
  const cards = TUTORIALS.map(t => `
    <a href="#tutorials/${t.id}" class="tut-card">
      <div class="tut-card-icon"><i class="fas ${t.icon}"></i></div>
      <div class="tut-card-body">
        <span class="tut-card-category">${t.category}</span>
        <h3>${t.title}</h3>
        <p>${t.blurb}</p>
      </div>
      <div class="tut-card-arrow"><i class="fas fa-arrow-right"></i></div>
    </a>
  `).join('');

  container.innerHTML = `
    <section class="tut-hero">
      <div class="container">
        <h1>Comet Engine Tutorials</h1>
        <p>
          Step-by-step guides to every major subsystem of the engine — written the way
          you build games: a bit of editor, a bit of AngelScript, and screenshots of
          the real thing along the way.
        </p>
      </div>
    </section>
    <section class="tut-grid-section">
      <div class="container">
        <div class="tut-grid">${cards}</div>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}

// ─── Tutorial page ───────────────────────────────────────────────────────────

function renderTutorialPage(container, tutorial) {
  ensureLightbox();

  const idx = TUTORIALS.indexOf(tutorial);
  const prev = idx > 0 ? TUTORIALS[idx - 1] : null;
  const next = idx < TUTORIALS.length - 1 ? TUTORIALS[idx + 1] : null;

  container.innerHTML = `
    <div class="docs-layout">
      <div class="docs-sidebar tut-sidebar">
        <div class="docs-sidebar-search">
          <input type="text" id="tut-search" class="search-box" placeholder="Filter tutorials..." style="margin-bottom: 0;" value="${sidebarFilter.replace(/"/g, '&quot;')}">
        </div>
        <div class="docs-sidebar-tree" id="tut-nav">${renderSidebar(tutorial.id)}</div>
      </div>
      <div class="docs-content tut-content" id="tut-scroll">
        <div class="tut-page">
          <div class="tut-breadcrumb">
            <a href="#tutorials">Tutorials</a>
            <i class="fas fa-chevron-right"></i>
            <span>${tutorial.category}</span>
          </div>
          <div class="tut-article" id="tut-article"></div>
          <div class="tut-pager">
            ${prev ? `
              <a href="#tutorials/${prev.id}" class="tut-pager-link tut-pager-prev">
                <span class="tut-pager-dir"><i class="fas fa-arrow-left"></i> Previous</span>
                <span class="tut-pager-title">${prev.title}</span>
              </a>` : '<span></span>'}
            ${next ? `
              <a href="#tutorials/${next.id}" class="tut-pager-link tut-pager-next">
                <span class="tut-pager-dir">Next <i class="fas fa-arrow-right"></i></span>
                <span class="tut-pager-title">${next.title}</span>
              </a>` : '<span></span>'}
          </div>
        </div>
      </div>
      <div class="tut-toc" id="tut-toc"></div>
    </div>
  `;

  // Mount rendered markdown
  const article = document.getElementById('tut-article');
  article.appendChild(renderMarkdown(tutorial.md));

  // Build "On this page"
  const headings = article.querySelectorAll('h2, h3');
  const toc = document.getElementById('tut-toc');
  if (headings.length > 1) {
    toc.innerHTML = `
      <div class="tut-toc-title">On this page</div>
      ${Array.from(headings).map(h => `
        <a href="#" data-target="${h.id}" class="tut-toc-link tut-toc-${h.tagName.toLowerCase()}">${h.textContent}</a>
      `).join('')}
    `;
    const scroller = document.getElementById('tut-scroll');
    toc.querySelectorAll('.tut-toc-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.getElementById(link.dataset.target);
        if (target) scroller.scrollTo({ top: target.offsetTop - 24, behavior: 'smooth' });
      });
    });

    // Scroll spy
    const links = new Map();
    toc.querySelectorAll('.tut-toc-link').forEach(l => links.set(l.dataset.target, l));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          toc.querySelectorAll('.tut-toc-link.active').forEach(l => l.classList.remove('active'));
          const link = links.get(entry.target.id);
          if (link) link.classList.add('active');
        }
      });
    }, { root: scroller, rootMargin: '0px 0px -75% 0px' });
    headings.forEach(h => observer.observe(h));
  }

  // Sidebar filter
  const search = document.getElementById('tut-search');
  search.addEventListener('input', (e) => {
    sidebarFilter = e.target.value;
    document.getElementById('tut-nav').innerHTML = renderSidebar(tutorial.id);
  });

  document.getElementById('tut-scroll').scrollTop = 0;
}

// ─── Entry point ─────────────────────────────────────────────────────────────

export function renderTutorials(container, hash) {
  const id = decodeURIComponent(hash.replace('#tutorials', '').substring(1));

  if (!id) {
    renderLanding(container);
    return;
  }

  const tutorial = TUTORIALS.find(t => t.id === id);
  if (!tutorial) {
    window.location.hash = '#tutorials';
    return;
  }

  renderTutorialPage(container, tutorial);
}
