let apiData = null;

export async function renderDocs(container, hash) {
  if (!apiData) {
    container.innerHTML = '<div class="loading">Parsing documentation...</div>';
    apiData = await loadApiData();
  }

  const path = decodeURIComponent(hash.replace('#docs', '').substring(1));
  
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
  
  const searchInput = document.getElementById('docs-search');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = filterData(apiData, query);
    renderTree(document.getElementById('docs-tree'), filtered, query !== '');
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
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const members = xmlDoc.getElementsByTagName('member');

      for (const member of members) {
        const fullName = member.getAttribute('name');
        const typePrefix = fullName[0]; // T, M, P, F
        const cleanName = fullName.substring(2);
        
        // Handle names like CometEngine::Audio::AudioMixer::GetLayouts()
        // Split by ::
        const parts = cleanName.split('::');
        if (parts.length < 1) continue;

        let current = namespaces;
        for (let i = 0; i < parts.length; i++) {
          let part = parts[i];
          const isLast = i === parts.length - 1;
          
          // Remove method signature for grouping
          const nameOnly = part.split('(')[0];

          if (isLast) {
            if (!current._members) current._members = [];
            current._members.push({
              type: typePrefix,
              fullName: fullName,
              name: part,
              summary: member.getElementsByTagName('summary')[0]?.textContent?.trim() || '',
              params: Array.from(member.getElementsByTagName('param')).map(p => ({
                name: p.getAttribute('name'),
                desc: p.textContent.trim(),
                default: p.getAttribute('default')
              })),
              returns: member.getElementsByTagName('returns')[0]?.textContent?.trim() || ''
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

function renderTree(container, data, autoOpen = false) {
  container.innerHTML = '';
  
  const createNode = (name, obj, parentPath = '') => {
    const node = document.createElement('div');
    node.className = 'tree-item';
    
    const currentPath = parentPath ? `${parentPath}::${name}` : name;
    const hasChildren = Object.keys(obj).filter(k => k !== '_members').length > 0;
    const hasMembers = obj._members && obj._members.some(m => m.type === 'T');

    node.innerHTML = `
      <div class="tree-node" data-path="${currentPath}">
        <i class="fas ${hasChildren ? 'fa-chevron-right' : 'fa-cube'}" style="width: 20px;"></i>
        <span>${name}</span>
      </div>
      <div class="tree-children" style="display: ${autoOpen ? 'block' : 'none'};"></div>
    `;

    const header = node.querySelector('.tree-node');
    const childrenContainer = node.querySelector('.tree-children');

    header.addEventListener('click', (e) => {
      e.stopPropagation();
      if (hasChildren) {
        const icon = header.querySelector('i');
        const isOpen = childrenContainer.style.display === 'block';
        childrenContainer.style.display = isOpen ? 'none' : 'block';
        icon.className = `fas ${isOpen ? 'fa-chevron-right' : 'fa-chevron-down'}`;
      }
      window.location.hash = `#docs/${currentPath}`;
    });

    Object.keys(obj).filter(k => k !== '_members').sort().forEach(key => {
      childrenContainer.appendChild(createNode(key, obj[key], currentPath));
    });

    return node;
  };

  Object.keys(data).sort().forEach(key => {
    container.appendChild(createNode(key, data[key]));
  });
}

function renderDetail(path) {
  const parts = path.split('::');
  let current = apiData;
  let target = null;
  let parent = null;

  for (const part of parts) {
    parent = current;
    current = current[part];
    if (!current) break;
  }

  if (!current) return '<h2>Element not found</h2>';

  const members = current._members || [];
  const classDoc = members.find(m => m.type === 'T');
  
  const methods = members.filter(m => m.type === 'M');
  const properties = members.filter(m => m.type === 'P');
  const fields = members.filter(m => m.type === 'F');

  // Also look into children for classes if this is a namespace
  const childClasses = Object.keys(current).filter(k => k !== '_members').map(k => ({
    name: k,
    summary: current[k]._members?.find(m => m.type === 'T')?.summary || ''
  }));

  return `
    <div class="api-member">
      <h1>${path}</h1>
      ${classDoc ? `<p class="summary" style="font-size: 1.2rem; margin-top: 1rem;">${classDoc.summary}</p>` : ''}
      
      ${childClasses.length > 0 ? `
        <div class="api-section">
          <h3>Sub-elements / Classes</h3>
          <div style="display: grid; gap: 1rem;">
            ${childClasses.map(c => `
              <a href="#docs/${path}::${c.name}" class="api-item">
                <div class="api-item-name">${c.name}</div>
                <div style="color: var(--text-dim); font-size: 0.9rem;">${c.summary}</div>
              </a>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${properties.length > 0 ? `
        <div class="api-section">
          <h3>Properties</h3>
          ${properties.map(p => renderApiItem(p)).join('')}
        </div>
      ` : ''}

      ${methods.length > 0 ? `
        <div class="api-section">
          <h3>Methods</h3>
          ${methods.map(m => renderApiItem(m)).join('')}
        </div>
      ` : ''}

      ${fields.length > 0 ? `
        <div class="api-section">
          <h3>Fields / Enums</h3>
          ${fields.map(f => renderApiItem(f)).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function renderApiItem(item) {
  return `
    <div class="api-item">
      <div class="api-item-name">${item.name}</div>
      <p style="color: var(--text-dim); margin-bottom: 1rem;">${item.summary}</p>
      ${item.params.length > 0 ? `
        <div style="margin-top: 0.5rem;">
          <strong>Parameters:</strong>
          <ul style="margin-left: 1.5rem; font-size: 0.9rem;">
            ${item.params.map(p => `<li><code>${p.name}</code>: ${p.desc} ${p.default ? `(Default: ${p.default})` : ''}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${item.returns ? `<div style="margin-top: 0.5rem;"><strong>Returns:</strong> <span style="font-size: 0.9rem;">${item.returns}</span></div>` : ''}
    </div>
  `;
}

function renderWelcome() {
  return `
    <div style="text-align: center; padding-top: 5rem;">
      <i class="fas fa-book" style="font-size: 5rem; color: var(--accent-color); margin-bottom: 2rem;"></i>
      <h1>CometEngine API Documentation</h1>
      <p style="color: var(--text-dim); max-width: 600px; margin: 1rem auto;">Explore the classes, methods, and properties available in CometEngine. Use the sidebar to navigate or search for a specific element.</p>
    </div>
  `;
}

function filterData(data, query) {
  if (!query) return data;
  const filtered = {};
  
  const search = (obj, target) => {
    let match = false;
    Object.keys(obj).forEach(key => {
      if (key === '_members') {
        const found = obj._members.some(m => m.name.toLowerCase().includes(query) || m.summary.toLowerCase().includes(query));
        if (found) match = true;
      } else {
        const subFiltered = search(obj[key], query);
        if (subFiltered || key.toLowerCase().includes(query)) {
          target[key] = subFiltered || obj[key];
          match = true;
        }
      }
    });
    return match ? target : null;
  };

  search(data, filtered);
  return filtered;
}
