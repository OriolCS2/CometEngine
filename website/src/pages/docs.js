let apiData = null;
let allPaths = [];
const expandedPaths = new Set();
let currentSearchQuery = '';

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
          <div class="docs-sidebar-search">
            <input type="text" id="docs-search" class="search-box" placeholder="Search API..." style="margin-bottom: 0;">
          </div>
          <div class="docs-sidebar-tree" id="docs-tree"></div>
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

    const treeContainer = document.getElementById('docs-tree');
    if (currentSearchQuery) {
      renderTree(treeContainer, filterData(apiData, currentSearchQuery), true);
    } else {
      renderTree(treeContainer, apiData);
    }

    const searchInput = document.getElementById('docs-search');
    if (searchInput) searchInput.value = currentSearchQuery;
  }
}

function setupSearch() {
  const searchInput = document.getElementById('docs-search');
  if (!searchInput) return;
  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.toLowerCase();
    const treeContainer = document.getElementById('docs-tree');
    if (currentSearchQuery.length > 0) {
      renderTree(treeContainer, filterData(apiData, currentSearchQuery), true);
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
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      let xmlText = await response.text();
      console.log(`Fetched ${file}: ${xmlText.length} bytes.`);

      // ─── XML Sanitization ──────────────────────────────────────────────────
      // Fix unescaped < > in attributes, de-duplicate attributes, and fix malformed ones (e.g. key=)
      xmlText = xmlText
        // 1. Fix unescaped characters in attribute values
        .replace(/([a-z]+)="([^"]*)"/gi, (m, attr, val) => {
          return `${attr}="${val.replace(/</g, '&lt;').replace(/>/g, '&gt;')}"`;
        })
        // 2. Fix malformed attributes like key=) or key= >
        .replace(/([a-z0-9_]+)\s*=\s*([)>])/gi, '$1="" $2')
        // 3. De-duplicate attributes within tags
        .replace(/<([a-z0-9:]+)\s+([^>]*?)(\/?)>/gi, (m, tag, attrs, selfClose) => {
          const seen = new Set();
          // Improved attribute splitting to handle spaces in values
          const attrRegex = /([a-z0-9_]+)="([^"]*)"/gi;
          const uniqueAttrs = [];
          let attrMatch;
          while ((attrMatch = attrRegex.exec(attrs)) !== null) {
            const key = attrMatch[1].toLowerCase();
            if (!seen.has(key)) {
              seen.add(key);
              uniqueAttrs.push(`${attrMatch[1]}="${attrMatch[2]}"`);
            }
          }
          return `<${tag}${uniqueAttrs.length ? ' ' + uniqueAttrs.join(' ') : ''}${selfClose ? ' /' : ''}>`;
        });

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

      const parseError = xmlDoc.getElementsByTagName('parsererror');
      if (parseError.length > 0) {
        console.error(`Parser error in ${file}:`, parseError[0].textContent);
        continue;
      }

      // ─── Extraction ────────────────────────────────────────────────────────
      const members = Array.from(xmlDoc.getElementsByTagName('member'));

      // Also handle <callback> inside <callbacks>
      const callbacksGroups = xmlDoc.getElementsByTagName('callbacks');
      for (const group of callbacksGroups) {
        const groupName = group.getAttribute('name');
        const items = group.getElementsByTagName('callback');
        for (const item of items) {
          // Map to virtual member
          const name = item.getAttribute('name');
          const fullName = `M:${groupName}::${name}`;
          // Add virtual attribute for our parser
          item.setAttribute('name', fullName);
          item.setAttribute('is-callback', 'true');
          members.push(item);
        }
      }

      console.log(`Loading ${file}: ${members.length} members found.`);

      for (const member of members) {
        try {
          const rawName = member.getAttribute('name');
          if (!rawName) continue;

          const match = rawName.trim().match(/^([A-Z]):(.+)$/);
          if (!match) continue;

          const typePrefix = match[1];
          const fullName = match[2].trim();

          const sigMatch = fullName.match(/\(([^)]*)\)/);
          const sigTypes = sigMatch && sigMatch[1]
            ? sigMatch[1].split(',').map(s => s.trim()).filter(Boolean)
            : [];

          const nameWithoutSig = fullName.split('(')[0].trim();
          const parts = nameWithoutSig.split('::').map(p => p.trim());

          let current = namespaces;
          const parentName = parts.length > 1 ? parts[parts.length - 2] : null;

          for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            const isLast = i === parts.length - 1;

            if (isLast && typePrefix !== 'T') {
              if (!current._members) current._members = [];
              current._members.push(parseMemberData(member, typePrefix, fullName, part, sigTypes, parentName));
            } else {
              if (!current[part]) current[part] = {};
              current = current[part];
              if (isLast) {
                if (!current._members) current._members = [];
                current._members.push(parseMemberData(member, typePrefix, fullName, part, sigTypes, parentName));
              }
            }
          }
        } catch (memberError) {
          console.error(`Error parsing member in ${file}:`, memberError);
        }
      }
    } catch (e) {
      console.error(`Error loading/parsing ${file}:`, e);
    }
  }

  console.log('Final apiData namespaces:', Object.keys(namespaces));
  if (namespaces['CometEditor'] && namespaces['CometEditor']['GUI']) {
    console.log('Final GUI members:', namespaces['CometEditor']['GUI']._members?.length);
  }
  return namespaces;
}

function parseMemberData(member, typePrefix, fullName, name, sigTypes, parentName) {
  const xmlParams = Array.from(member.getElementsByTagName('param'));
  const params = xmlParams.map((p, idx) => ({
    name: p.getAttribute('name'),
    type: sigTypes[idx] || null,
    desc: p.textContent.trim(),
    default: p.getAttribute('default'),
  }));

  const rType = member.getAttribute('return');
  const fType = member.getAttribute('type');
  const isConstructor = member.getAttribute('constructor') === 'true' || (typePrefix === 'M' && name === parentName);
  const isCallback = member.tagName.toLowerCase() === 'callback' || member.getAttribute('is-callback') === 'true';

  return {
    type: typePrefix,
    fullName,
    name,
    sigTypes,
    summary: member.getElementsByTagName('summary')[0]?.textContent?.trim() || '',
    params,
    returnType: rType || null,
    returnDesc: member.getElementsByTagName('return')[0]?.textContent?.trim() || member.getElementsByTagName('returns')[0]?.textContent?.trim() || '',
    fieldType: fType || null,
    isConstructor,
    isCallback
  };
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
  const constructors = members.filter(m => m.isConstructor);
  const callbacks = members.filter(m => m.isCallback);
  const fields = members.filter(m => m.type === 'F');
  const methods = members.filter(m => m.type === 'M' && !m.isConstructor && !m.isCallback);
  const properties = members.filter(m => m.type === 'P');

  const childClasses = Object.keys(current).filter(k => k !== '_members').map(k => ({
    name: k,
    summary: current[k]._members?.find(m => m.type === 'T')?.summary || ''
  }));

  return `
    <div class="api-member">
      <div style="color:var(--accent-color);font-weight:600;margin-bottom:0.25rem;font-size:0.9rem;">${parts.slice(0, -1).join('::') || 'Global'}</div>
      <h1 style="font-size:2.5rem;margin:0 0 1rem;">${parts[parts.length - 1]}</h1>
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

      ${constructors.length > 0 ? `
        <div class="api-section">
          <h3>Constructors</h3>
          ${constructors.map(c => renderMethodItem(c)).join('')}
        </div>
      ` : ''}

      ${callbacks.length > 0 ? `
        <div class="api-section">
          <h3>Callbacks</h3>
          ${callbacks.map(c => renderMethodItem(c)).join('')}
        </div>
      ` : ''}

      ${fields.length > 0 ? `
        <div class="api-section">
          <h3>Fields</h3>
          ${fields.map(f => renderFieldItem(f)).join('')}
        </div>
      ` : ''}

      ${methods.length > 0 ? `
        <div class="api-section">
          <h3>Methods</h3>
          ${methods.map(m => renderMethodItem(m)).join('')}
        </div>
      ` : ''}

      ${properties.length > 0 ? `
        <div class="api-section">
          <h3>Properties</h3>
          ${properties.map(p => renderPropertyItem(p)).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function renderFieldItem(f) {
  const type = f.fieldType || '';
  return `
    <div class="api-item">
      <div style="display:flex;align-items:baseline;gap:0.5rem;font-family:monospace;font-size:1rem;margin-bottom:0.5rem;">
        ${type ? `<span style="color:#61afef;">${linkType(type)}</span>` : ''}
        <span style="font-weight:700;color:#fff;">${f.name}</span>
      </div>
      <p style="color:var(--text-dim);">${f.summary}</p>
    </div>
  `;
}

function renderPropertyItem(p) {
  const type = p.fieldType || p.sigTypes?.[0] || '';
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
  const isConstructor = m.isConstructor;
  const returnType = isConstructor ? '' : (m.returnType || 'void');

  const paramsDecl = m.params.map(p =>
    `<span style="color:#61afef;">${p.type ? linkType(p.type) : ''}</span>${p.type ? ' ' : ''}<span style="color:#fff;">${p.name || ''}</span>`
  ).join('<span style="color:var(--text-dim);">, </span>');

  return `
    <div class="api-item">
      <div style="font-family:monospace;font-size:1rem;margin-bottom:0.75rem;display:flex;flex-wrap:wrap;align-items:baseline;gap:0.25rem;">
        ${returnType ? `<span style="color:#61afef;">${linkType(returnType)}</span>` : ''}
        <span style="font-weight:700;color:#fff;margin-left:${returnType ? '0.4rem' : '0'};">${m.name}</span>
        <span style="color:var(--text-dim);">(</span>${paramsDecl}<span style="color:var(--text-dim);">)</span>
      </div>
      <p style="color:var(--text-dim);margin-bottom:${(m.params.length > 0 || m.returnDesc) ? '1rem' : '0'};">${m.summary}</p>
      ${m.params.length > 0 ? `
        <div style="margin-bottom: 1rem;">
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
      ${m.returnDesc ? `
        <div>
          <div style="font-size:0.8rem;text-transform:uppercase;color:var(--accent-color);font-weight:600;margin-bottom:0.5rem;">Returns</div>
          <div style="font-size:0.9rem;background:rgba(0,0,0,0.2);padding:0.5rem 1rem;border-radius:4px;color:var(--text-dim); display: flex; gap: 0.5rem; align-items: baseline; flex-wrap: wrap;">
            ${m.returnType ? `<span style="font-family:monospace;color:#61afef;">${linkType(m.returnType)}</span> <span style="color:var(--text-dim);">— </span> ` : ''}
            <span>${m.returnDesc}</span>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function linkType(type) {
  if (!type) return '';
  // Unescape common XML entities
  let unescaped = type.replace(/&lt;/g, '<').replace(/&gt;/g, '>');

  // Handle array<Type> specifically
  const arrayMatch = unescaped.match(/^array<(.+)>$/);
  if (arrayMatch) {
    const innerType = arrayMatch[1];
    // Recursive call for the inner type
    return `<span style="color:#61afef;">array&lt;${linkType(innerType)}&gt;</span>`;
  }

  const clean = unescaped.replace(/[?*&]/g, '').trim();
  const found = allPaths.find(p => p === clean || p.endsWith(`::${clean}`));
  if (found) {
    return `<a href="#docs/${found}" style="color:#61afef;text-decoration:underline;">${unescaped}</a>`;
  }
  return `<span style="color:#61afef;">${unescaped}</span>`;
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

    // Check this node's members
    if (obj._members) {
      const matchingMembers = obj._members.filter(m =>
        m.name.toLowerCase().includes(query) ||
        m.summary.toLowerCase().includes(query)
      );
      if (matchingMembers.length > 0) {
        target._members = matchingMembers;
        match = true;
      }
    }

    // Check children (namespaces and classes)
    Object.keys(obj).forEach(key => {
      if (key === '_members') return;

      const sub = {};
      const childMatch = search(obj[key], sub);
      const nameMatch = key.toLowerCase().includes(query);

      if (childMatch || nameMatch) {
        target[key] = sub;
        match = true;

        // If the name matched but no members did, at least include the 'T' member (Class Doc) 
        // so the user can see the summary of the class they searched for.
        if (nameMatch && obj[key]._members && (!sub._members || !sub._members.find(m => m.type === 'T'))) {
          const tMember = obj[key]._members.find(m => m.type === 'T');
          if (tMember) {
            if (!sub._members) sub._members = [];
            sub._members.unshift(tMember);
          }
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
      <h1>Comet Engine API Documentation</h1>
      <p style="color:var(--text-dim);max-width:600px;margin:1rem auto;">
        Explore the classes, methods, and properties available in CometEngine.
      </p>
    </div>
  `;
}
