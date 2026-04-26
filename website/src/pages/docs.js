let apiData = null;
let expandedPaths = new Set();
let allPaths = [];

export async function renderDocs(container, hash) {
  if (!apiData) {
    container.innerHTML = '<div class="loading">Parsing documentation...</div>';
    apiData = await loadApiData();
    allPaths = getAllPaths(apiData);
  }

  const path = decodeURIComponent(hash.replace('#docs', '').substring(1));
  
  // Update expanded paths for the current selection
  if (path) {
    const parts = path.split('::');
    let current = '';
    parts.forEach((p, i) => {
      current = current ? `${current}::${p}` : p;
      expandedPaths.add(current);
    });
  }

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

  const treeContainer = document.getElementById('docs-tree');
  renderTree(treeContainer, apiData);
  
  const searchInput = document.getElementById('docs-search');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
      const filtered = filterData(apiData, query);
      renderTree(treeContainer, filtered, true); // Auto-open all when searching
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
      const xmlDoc = parser.parseFromString(xmlText, "text/xml");
      const members = xmlDoc.getElementsByTagName('member');

      for (const member of members) {
        const fullName = member.getAttribute('name');
        const typePrefix = fullName[0]; // T, M, P, F
        const cleanName = fullName.substring(2);
        
        // Extract params from signature: Method(ParamType1, ParamType2)
        const sigMatch = cleanName.match(/\((.*)\)/);
        const sigParams = sigMatch ? sigMatch[1].split(',').map(s => s.trim()).filter(s => s) : [];
        
        const nameWithoutSig = cleanName.split('(')[0];
        const parts = nameWithoutSig.split('::');
        
        let current = namespaces;
        for (let i = 0; i < parts.length; i++) {
          let part = parts[i];
          const isLast = i === parts.length - 1;
          
          if (isLast) {
            if (!current._members) current._members = [];
            
            const xmlParams = Array.from(member.getElementsByTagName('param'));
            const params = xmlParams.map((p, idx) => ({
              name: p.getAttribute('name'),
              type: sigParams[idx] || 'unknown',
              desc: p.textContent.trim(),
              default: p.getAttribute('default')
            }));

            current._members.push({
              type: typePrefix,
              fullName: fullName,
              name: part,
              summary: member.getElementsByTagName('summary')[0]?.innerHTML?.trim() || '',
              params: params,
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
    const isExpanded = autoOpen || expandedPaths.has(currentPath);

    node.innerHTML = `
      <div class="tree-node ${window.location.hash === '#docs/' + currentPath ? 'active' : ''}" data-path="${currentPath}">
        <i class="fas ${hasChildren ? (isExpanded ? 'fa-chevron-down' : 'fa-chevron-right') : 'fa-cube'} toggle-icon" style="width: 20px;"></i>
        <span class="node-name">${name}</span>
      </div>
      <div class="tree-children" style="display: ${isExpanded ? 'block' : 'none'};"></div>
    `;

    const toggleIcon = node.querySelector('.toggle-icon');
    const nodeName = node.querySelector('.node-name');
    const childrenContainer = node.querySelector('.tree-children');

    // Clicking the arrow toggles
    toggleIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      if (hasChildren) {
        const isOpen = childrenContainer.style.display === 'block';
        childrenContainer.style.display = isOpen ? 'none' : 'block';
        toggleIcon.className = `fas ${isOpen ? 'fa-chevron-right' : 'fa-chevron-down'} toggle-icon`;
        if (isOpen) expandedPaths.delete(currentPath);
        else expandedPaths.add(currentPath);
      }
    });

    // Clicking the name navigates
    nodeName.addEventListener('click', (e) => {
      e.stopPropagation();
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
  for (const part of parts) {
    current = current?.[part];
  }

  if (!current) return '<h2>Element not found</h2>';

  const members = current._members || [];
  const classDoc = members.find(m => m.type === 'T');
  const methods = members.filter(m => m.type === 'M');
  const properties = members.filter(m => m.type === 'P');
  const fields = members.filter(m => m.type === 'F');

  const childClasses = Object.keys(current).filter(k => k !== '_members').map(k => ({
    name: k,
    summary: current[k]._members?.find(m => m.type === 'T')?.summary || ''
  }));

  return `
    <div class="api-member">
      <div style="color: var(--accent-color); font-weight: 600; margin-bottom: 0.5rem;">${parts.slice(0, -1).join('::') || 'Global'}</div>
      <h1>${parts[parts.length - 1]}</h1>
      ${classDoc ? `<div class="summary" style="font-size: 1.1rem; margin-top: 1rem; color: var(--text-color);">${formatXmlText(classDoc.summary)}</div>` : ''}
      
      ${childClasses.length > 0 ? `
        <div class="api-section">
          <h3>Namespaces & Classes</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
            ${childClasses.map(c => `
              <a href="#docs/${path}::${c.name}" class="api-item" style="display: block;">
                <div class="api-item-name" style="color: var(--accent-color);">${c.name}</div>
                <div style="color: var(--text-dim); font-size: 0.85rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${c.summary}</div>
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
          <h3>Fields & Enums</h3>
          ${fields.map(f => renderApiItem(f)).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function renderApiItem(item) {
  return `
    <div class="api-item">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div class="api-item-name">${item.name}</div>
        <div style="font-family: monospace; color: var(--text-dim); font-size: 0.9rem;">${item.type === 'M' ? 'Method' : item.type === 'P' ? 'Property' : 'Field'}</div>
      </div>
      <div style="color: var(--text-dim); margin-top: 0.5rem; margin-bottom: 1rem;">${formatXmlText(item.summary)}</div>
      
      ${item.params.length > 0 ? `
        <div style="margin-top: 1rem;">
          <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">Parameters</div>
          <div style="display: grid; gap: 0.5rem;">
            ${item.params.map(p => `
              <div style="display: flex; gap: 1rem; font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 0.5rem 1rem; border-radius: 4px;">
                <code style="color: #fff;">${p.name}</code>
                <span style="color: var(--text-dim);">${linkType(p.type)}</span>
                <span style="flex: 1;">${p.desc} ${p.default ? `<i style="color: var(--text-dim);">(Default: ${p.default})</i>` : ''}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${item.returns ? `
        <div style="margin-top: 1rem;">
          <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">Returns</div>
          <div style="font-size: 0.9rem;">${item.returns}</div>
        </div>
      ` : ''}
    </div>
  `;
}

function linkType(type) {
  if (!type || type === 'unknown') return '';
  // Try to find if this type exists in our docs
  const found = allPaths.find(p => p.endsWith('::' + type) || p === type);
  if (found) {
    return `<a href="#docs/${found}" style="color: var(--accent-color); text-decoration: underline;">${type}</a>`;
  }
  return `<span style="color: #61afef;">${type}</span>`;
}

function formatXmlText(text) {
  if (!text) return '';
  // Handle <see> tags and basic formatting
  return text
    .replace(/<see cref="[T|M|P|F]:(.*?)" \/>/g, (match, path) => {
      const cleanPath = path.replace('()', '');
      return `<a href="#docs/${cleanPath}" style="color: var(--accent-color); text-decoration: underline;">${cleanPath.split('::').pop()}</a>`;
    })
    .replace(/\n/g, '<br>');
}

function filterData(data, query) {
  const filtered = {};
  let hasAny = false;

  const search = (obj, target) => {
    let match = false;
    Object.keys(obj).forEach(key => {
      if (key === '_members') {
        const found = obj._members.filter(m => m.name.toLowerCase().includes(query) || m.summary.toLowerCase().includes(query));
        if (found.length > 0) {
          target._members = found;
          match = true;
        }
      } else {
        const subTarget = {};
        if (search(obj[key], subTarget) || key.toLowerCase().includes(query)) {
          target[key] = obj[key]; // Keep original for now to avoid losing non-matching members if the class itself matches
          match = true;
        }
      }
    });
    return match;
  };

  search(data, filtered);
  return filtered;
}

function getAllPaths(data, parentPath = '') {
  let paths = [];
  Object.keys(data).forEach(key => {
    if (key === '_members') return;
    const currentPath = parentPath ? `${parentPath}::${key}` : key;
    paths.push(currentPath);
    paths = paths.concat(getAllPaths(data[key], currentPath));
  });
  return paths;
}

function renderWelcome() {
  return `
    <div style="text-align: center; padding-top: 5rem;">
      <i class="fas fa-book" style="font-size: 5rem; color: var(--accent-color); margin-bottom: 2rem;"></i>
      <h1>CometEngine API Documentation</h1>
      <p style="color: var(--text-dim); max-width: 600px; margin: 1rem auto;">Explore the classes, methods, and properties available in CometEngine. Built from official engine docstrings.</p>
    </div>
  `;
}
