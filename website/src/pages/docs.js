let apiData = null;
let allPaths = [];
// Persists across hash changes — which paths are expanded in the tree
const expandedPaths = new Set();

export async function renderDocs(container, hash) {
  const isFirstLoad = !apiData;

  if (isFirstLoad) {
    container.innerHTML = '<div class="loading">Parsing documentation...</div>';
    apiData = await loadApiData();
    allPaths = getAllPaths(apiData);
  }

  const path = decodeURIComponent(hash.replace('#docs', '').substring(1));

  // Auto-expand ancestors of the active path
  if (path) {
    const parts = path.split('::');
    let acc = '';
    parts.forEach(p => {
      acc = acc ? `${acc}::${p}` : p;
      expandedPaths.add(acc);
    });
  }

  // On first load, rebuild the full layout. On navigation, only swap content.
  if (isFirstLoad || !document.getElementById('docs-tree')) {
    container.innerHTML = `
      <div class="docs-layout">
        <div class="docs-sidebar">
          <input type="text" id="docs-search" class="search-box" placeholder="Search API...">
          <div id="docs-tree"></div>
        </div>
        <div class="docs-content" id="docs-detail">
          ${path ? renderDetail(path) : renderWelcome()}
        </div>
      </div>
    `;
    renderTree(document.getElementById('docs-tree'), apiData);
    setupSearch();
  } else {
    // Just update the content panel and refresh tree active state
    document.getElementById('docs-detail').innerHTML = path ? renderDetail(path) : renderWelcome();
    renderTree(document.getElementById('docs-tree'), apiData);
    const searchVal = document.getElementById('docs-search')?.value;
    if (searchVal) setupSearch();
  }
}

function setupSearch() {
  const searchInput = document.getElementById('docs-search');
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const treeContainer = document.getElementById('docs-tree');
    if (query.length > 0) {
      renderTree(treeContainer, filterData(apiData, query), true);
    } else {
      renderTree(treeContainer, apiData);
    }
  });
}

async function loadApiData() {
  const files = ['./docs/CometEngine.xml', './docs/CometEngineAdditionals.xml', './docs/CometEngineGlobals.xml'];
  const namespaces = {};

  for (const file of files) {
    try {
      const response = await fetch(file);
      const xmlText = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
      const members = xmlDoc.getElementsByTagName('member');

      for (const member of members) {
        const fullName = member.getAttribute('name');
        const typePrefix = fullName[0]; // T, M, P, F
        const cleanName = fullName.substring(2);

        // Extract param types from signature e.g. Method(TypeA,TypeB)
        const sigMatch = cleanName.match(/\(([^)]*)\)/);
        const sigTypes = sigMatch && sigMatch[1]
          ? sigMatch[1].split(',').map(s => s.trim()).filter(Boolean)
          : [];

        const nameWithoutSig = cleanName.split('(')[0];
        const parts = nameWithoutSig.split('::');

        let current = namespaces;
        for (let i = 0; i < parts.length; i++) {
          const part = parts[i];
          const isLast = i === parts.length - 1;

          if (isLast) {
            if (!current._members) current._members = [];

            const xmlParams = Array.from(member.getElementsByTagName('param'));
            // Map XML <param name="x"> with type from the signature position
            const params = xmlParams.map((p, idx) => ({
              name: p.getAttribute('name'),
              type: sigTypes[idx] || null,
              desc: p.textContent.trim(),
              default: p.getAttribute('default'),
            }));

            current._members.push({
              type: typePrefix,
              fullName,
              name: part,
              sigTypes,       // raw types from the signature
              summary: member.getElementsByTagName('summary')[0]?.textContent?.trim() || '',
              params,
              returns: member.getElementsByTagName('returns')[0]?.textContent?.trim() || '',
            });
          } else {
            if (!current[part]) current[part] = {};
            current = current[part];
          }
        }
      }
    } catch (e) {
      console.error('Error parsing XML:', e);
    }
  }

  return namespaces;
}

// ─── Tree ────────────────────────────────────────────────────────────────────

function renderTree(container, data, autoOpen = false) {
  container.innerHTML = '';
  const currentPath = decodeURIComponent(window.location.hash.replace('#docs', '').substring(1));

  const createNode = (name, obj, parentPath = '') => {
    const node = document.createElement('div');
    node.className = 'tree-item';

    const nodePath = parentPath ? `${parentPath}::${name}` : name;
    const hasChildren = Object.keys(obj).filter(k => k !== '_members').length > 0;
    const isExpanded = autoOpen || expandedPaths.has(nodePath);
    const isActive = currentPath === nodePath;

    node.innerHTML = `
      <div class="tree-node ${isActive ? 'active' : ''}" data-path="${nodePath}">
        <span class="tree-toggle" style="width:20px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;">
          ${hasChildren
            ? `<i class="fas ${isExpanded ? 'fa-chevron-down' : 'fa-chevron-right'}" style="font-size:0.75rem;"></i>`
            : `<i class="fas fa-cube" style="font-size:0.7rem;color:var(--text-dim);"></i>`}
        </span>
        <span class="tree-label" style="cursor:pointer;">${name}</span>
      </div>
      <div class="tree-children" style="display:${isExpanded ? 'block' : 'none'};">
      </div>
    `;

    const toggleBtn = node.querySelector('.tree-toggle');
    const label = node.querySelector('.tree-label');
    const children = node.querySelector('.tree-children');
    const icon = toggleBtn.querySelector('i');

    // Arrow: only expand/collapse, never navigate
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!hasChildren) return;
      const open = children.style.display === 'block';
      children.style.display = open ? 'none' : 'block';
      if (icon) icon.className = `fas ${open ? 'fa-chevron-right' : 'fa-chevron-down'}`;
      if (open) expandedPaths.delete(nodePath);
      else expandedPaths.add(nodePath);
    });

    // Label: navigate
    label.addEventListener('click', (e) => {
      e.stopPropagation();
      window.location.hash = `#docs/${nodePath}`;
    });

    Object.keys(obj).filter(k => k !== '_members').sort().forEach(key => {
      children.appendChild(createNode(key, obj[key], nodePath));
    });

    return node;
  };

  Object.keys(data).sort().forEach(key => {
    container.appendChild(createNode(key, data[key]));
  });
}

// ─── Detail ──────────────────────────────────────────────────────────────────

function renderDetail(path) {
  const parts = path.split('::');
  let current = apiData;
  for (const part of parts) current = current?.[part];

  if (!current) return '<h2>Element not found</h2>';

  const members = current._members || [];
  const classDoc = members.find(m => m.type === 'T');
  const methods   = members.filter(m => m.type === 'M');
  const properties = members.filter(m => m.type === 'P');
  const fields    = members.filter(m => m.type === 'F');

  const childClasses = Object.keys(current).filter(k => k !== '_members').map(k => ({
    name: k,
    summary: current[k]._members?.find(m => m.type === 'T')?.summary || ''
  }));

  return `
    <div class="api-member">
      <div style="color:var(--accent-color);font-weight:600;margin-bottom:0.25rem;font-size:0.9rem;">${parts.slice(0,-1).join('::') || 'Global'}</div>
      <h1 style="font-size:2.5rem;margin:0 0 1rem;">${parts[parts.length-1]}</h1>
      ${classDoc ? `<p style="font-size:1.1rem;color:var(--text-dim);margin-bottom:2rem;">${classDoc.summary}</p>` : ''}

      ${childClasses.length > 0 ? `
        <div class="api-section">
          <h3>Namespaces & Classes</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;">
            ${childClasses.map(c => `
              <a href="#docs/${path}::${c.name}" class="api-item" style="display:block;">
                <div class="api-item-name" style="color:var(--accent-color);">${c.name}</div>
                <div style="color:var(--text-dim);font-size:0.85rem;">${c.summary}</div>
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${properties.length > 0 ? `
        <div class="api-section">
          <h3>Properties</h3>
          ${properties.map(p => renderPropertyItem(p)).join('')}
        </div>
      ` : ''}

      ${methods.length > 0 ? `
        <div class="api-section">
          <h3>Methods</h3>
          ${methods.map(m => renderMethodItem(m)).join('')}
        </div>
      ` : ''}

      ${fields.length > 0 ? `
        <div class="api-section">
          <h3>Fields & Enums</h3>
          ${fields.map(f => `
            <div class="api-item">
              <div class="api-item-name">${f.name}</div>
              <p style="color:var(--text-dim);">${f.summary}</p>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function renderPropertyItem(p) {
  // Type comes from the first sigType or returns field
  const type = p.sigTypes?.[0] || '';
  return `
    <div class="api-item">
      <div style="display:flex;align-items:baseline;gap:0.5rem;font-family:monospace;font-size:1rem;margin-bottom:0.5rem;">
        ${type ? `<span style="color:#61afef;">${linkType(type)}</span>` : ''}
        <span style="font-weight:700;color:#fff;">${p.name}</span>
      </div>
      <p style="color:var(--text-dim);">${p.summary}</p>
    </div>
  `;
}

function renderMethodItem(m) {
  const returnType = m.returns ? m.returns.split(/\s/)[0] : 'void';

  const paramsDecl = m.params.map(p =>
    `<span style="color:#61afef;">${p.type ? linkType(p.type) : ''}</span>${p.type ? ' ' : ''}<span style="color:#fff;">${p.name || ''}</span>`
  ).join('<span style="color:var(--text-dim);">, </span>');

  return `
    <div class="api-item">
      <div style="font-family:monospace;font-size:1rem;margin-bottom:0.75rem;display:flex;flex-wrap:wrap;align-items:baseline;gap:0.25rem;">
        <span style="color:#61afef;">${linkType(returnType)}</span>
        <span style="font-weight:700;color:#fff;margin-left:0.4rem;">${m.name}</span>
        <span style="color:var(--text-dim);">(</span>${paramsDecl}<span style="color:var(--text-dim);">)</span>
      </div>
      <p style="color:var(--text-dim);margin-bottom:${m.params.length > 0 ? '1rem' : '0'};">${m.summary}</p>
      ${m.params.length > 0 ? `
        <div>
          <div style="font-size:0.8rem;text-transform:uppercase;color:var(--accent-color);font-weight:600;margin-bottom:0.5rem;">Parameters</div>
          ${m.params.map(p => `
            <div style="display:flex;gap:1rem;font-size:0.9rem;background:rgba(0,0,0,0.2);padding:0.5rem 1rem;border-radius:4px;margin-bottom:0.25rem;align-items:baseline;flex-wrap:wrap;">
              ${p.type ? `<span style="color:#61afef;font-family:monospace;">${linkType(p.type)}</span>` : ''}
              <code style="color:#fff;">${p.name || ''}</code>
              ${p.desc ? `<span style="color:var(--text-dim);">— ${p.desc}</span>` : ''}
              ${p.default ? `<span style="color:var(--text-dim);font-style:italic;">(default: ${p.default})</span>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function linkType(type) {
  if (!type) return '';
  const clean = type.replace(/[?*&]/g, '').trim();
  const found = allPaths.find(p => p === clean || p.endsWith(`::${clean}`));
  if (found) {
    return `<a href="#docs/${found}" style="color:#61afef;text-decoration:underline;">${type}</a>`;
  }
  return `<span style="color:#61afef;">${type}</span>`;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getAllPaths(data, parentPath = '') {
  let paths = [];
  Object.keys(data).forEach(key => {
    if (key === '_members') return;
    const p = parentPath ? `${parentPath}::${key}` : key;
    paths.push(p);
    paths = paths.concat(getAllPaths(data[key], p));
  });
  return paths;
}

function filterData(data, query) {
  const filtered = {};
  const search = (obj, target) => {
    let match = false;
    Object.keys(obj).forEach(key => {
      if (key === '_members') {
        const found = obj._members.filter(m =>
          m.name.toLowerCase().includes(query) || m.summary.toLowerCase().includes(query)
        );
        if (found.length > 0) { target._members = found; match = true; }
      } else {
        const sub = {};
        if (search(obj[key], sub) || key.toLowerCase().includes(query)) {
          target[key] = sub;
          match = true;
        }
      }
    });
    return match;
  };
  search(data, filtered);
  return filtered;
}

function renderWelcome() {
  return `
    <div style="text-align:center;padding-top:5rem;">
      <i class="fas fa-book" style="font-size:5rem;color:var(--accent-color);margin-bottom:2rem;"></i>
      <h1>CometEngine API Documentation</h1>
      <p style="color:var(--text-dim);max-width:600px;margin:1rem auto;">
        Explore the classes, methods, and properties available in CometEngine.
      </p>
    </div>
  `;
}
