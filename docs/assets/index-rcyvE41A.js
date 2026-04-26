(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function e(e){e.innerHTML=`
    <section class="hero">
      <div class="container">
        <img src="./logo.png" alt="CometEngine Logo" style="height: 120px; margin-bottom: 2rem;">
        <h1>CometEngine</h1>
        <p>A powerful and lightweight 2D game engine designed for performance, flexibility, and ease of use. Built for developers by developers.</p>
        <div id="latest-release-container">
          <div class="loading">Finding latest version...</div>
        </div>
      </div>
    </section>

    <section id="social" class="social">
      <div class="container">
        <h2>Connect with Us</h2>
        <div class="social-links">
          <a href="https://github.com/OriolCS2/CometEngine" target="_blank" class="social-card">
            <i class="fab fa-github"></i>
            <span>Engine GitHub</span>
          </a>
          <a href="https://github.com/OriolCS2" target="_blank" class="social-card">
            <i class="fab fa-github-alt"></i>
            <span>Profile</span>
          </a>
          <a href="https://www.linkedin.com/in/oriol-capdevila/" target="_blank" class="social-card">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>

    <section id="made-with" class="featured-game">
      <div class="container">
        <h2>Made with CometEngine</h2>
        <div class="game-card">
          <div class="game-img" style="background-image: url('https://img.itch.zone/aW1nLzE1ODA0NzE0LnBuZw==/347x500/0oX8Y8.png');"></div>
          <div class="game-info">
            <h3>Sant Jordi - The Stone Song</h3>
            <p>A beautiful 2D adventure game inspired by the legend of Sant Jordi. Experience fluid gameplay and stunning visuals powered by CometEngine.</p>
            <a href="https://christt105.itch.io/sant-jordi-the-stone-song" target="_blank" class="download-btn" style="background: #da291c;">
              <i class="fas fa-play"></i>
              Play on Itch.io
            </a>
          </div>
        </div>
      </div>
    </section>
  `,await t(document.getElementById(`latest-release-container`))}async function t(e){try{let t=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();if(!t||t.length===0){e.innerHTML=`<p>No releases found.</p>`;return}t.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let r=t.find(e=>!e.prerelease),i=t.find(e=>e.prerelease),a=r||i,o=a.prerelease;n(),e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <a href="${a.html_url}" target="_blank" class="download-btn">
          <i class="fas fa-download"></i>
          Download ${a.tag_name} ${o?`(RC)`:``}
        </a>
        <div class="os-info">Available for Windows and Linux</div>
        ${r&&i&&new Date(i.published_at)>new Date(r.published_at)?`<p style="font-size: 0.9rem; color: var(--accent-color);">New Release Candidate available: <a href="${i.html_url}" style="text-decoration: underline;">${i.tag_name}</a></p>`:``}
      </div>
    `}catch(t){console.error(`Error fetching releases:`,t),e.innerHTML=`<p>Error loading latest release.</p>`}}function n(){let e=window.navigator.platform.toLowerCase();return e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Desktop`}async function r(e){e.innerHTML=`
    <section>
      <div class="container">
        <h2>Engine Releases</h2>
        <div id="releases-filter" style="margin-bottom: 2rem; display: flex; gap: 1rem; justify-content: center;">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="stable">Stable</button>
          <button class="filter-btn" data-filter="rc">Pre-releases</button>
        </div>
        <div id="releases-list" class="release-list">
          <div class="loading">Fetching releases from GitHub...</div>
        </div>
      </div>
    </section>
  `;let t=document.getElementById(`releases-list`),n=document.querySelectorAll(`.filter-btn`),r=[];try{r=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json(),r.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at)),i(t,r),n.forEach(e=>{e.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let a=e.getAttribute(`data-filter`),o=r;a===`stable`&&(o=r.filter(e=>!e.prerelease)),a===`rc`&&(o=r.filter(e=>e.prerelease)),i(t,o)})})}catch(e){console.error(`Error fetching releases:`,e),t.innerHTML=`<p>Error loading releases. Please try again later.</p>`}}function i(e,t){if(t.length===0){e.innerHTML=`<p style="text-align: center;">No releases found for this filter.</p>`;return}e.innerHTML=t.map(e=>`
    <div class="release-card">
      <div class="release-header">
        <div style="display: flex; align-items: center; gap: 1rem;">
          <h3 style="font-size: 1.5rem;">${e.name||e.tag_name}</h3>
          <span class="tag ${e.prerelease?`tag-rc`:`tag-stable`}">
            ${e.prerelease?`Pre-release`:`Stable`}
          </span>
        </div>
        <div style="color: var(--text-dim); font-size: 0.9rem;">
          ${new Date(e.published_at).toLocaleDateString()}
        </div>
      </div>
      <div class="release-notes" style="margin-bottom: 2rem; color: var(--text-dim); max-height: 200px; overflow-y: auto; padding-right: 1rem;">
        ${a(e.body)}
      </div>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        ${e.assets.map(e=>`
          <a href="${e.browser_download_url}" class="download-btn" style="font-size: 0.9rem; padding: 0.5rem 1rem;">
            <i class="fas fa-file-archive"></i>
            ${e.name}
          </a>
        `).join(``)}
        <a href="${e.html_url}" target="_blank" class="download-btn" style="font-size: 0.9rem; padding: 0.5rem 1rem; background: var(--bg-secondary); border: 1px solid var(--border-color);">
          <i class="fab fa-github"></i>
          View on GitHub
        </a>
      </div>
    </div>
  `).join(``)}function a(e){return e?e.replace(/^### (.*$)/gim,`<h4 style="margin-top: 1rem;">$1</h4>`).replace(/^## (.*$)/gim,`<h3 style="margin-top: 1rem;">$1</h3>`).replace(/^# (.*$)/gim,`<h2 style="margin-top: 1rem;">$1</h2>`).replace(/^\* (.*$)/gim,`<li>$1</li>`).replace(/^\- (.*$)/gim,`<li>$1</li>`).replace(/\n/g,`<br>`):``}var o=null;async function s(e,t){o||=(e.innerHTML=`<div class="loading">Parsing documentation...</div>`,await c());let n=decodeURIComponent(t.replace(`#docs`,``).substring(1));e.innerHTML=`
    <div class="docs-layout">
      <div class="docs-sidebar">
        <input type="text" id="docs-search" class="search-box" placeholder="Search API...">
        <div id="docs-tree"></div>
      </div>
      <div class="docs-content" id="docs-detail">
        ${n?u(n):f()}
      </div>
    </div>
  `,l(document.getElementById(`docs-tree`),o),document.getElementById(`docs-search`).addEventListener(`input`,e=>{let t=e.target.value.toLowerCase(),n=p(o,t);l(document.getElementById(`docs-tree`),n,t!==``)})}async function c(){let e=[`./docs/CometEngine.xml`,`./docs/CometEngineAdditionals.xml`,`./docs/CometEngineGlobals.xml`],t={};for(let n of e)try{let e=await(await fetch(n)).text(),r=new DOMParser().parseFromString(e,`text/xml`).getElementsByTagName(`member`);for(let e of r){let n=e.getAttribute(`name`),r=n[0],i=n.substring(2).split(`::`);if(i.length<1)continue;let a=t;for(let t=0;t<i.length;t++){let o=i[t],s=t===i.length-1;o.split(`(`)[0],s?(a._members||=[],a._members.push({type:r,fullName:n,name:o,summary:e.getElementsByTagName(`summary`)[0]?.textContent?.trim()||``,params:Array.from(e.getElementsByTagName(`param`)).map(e=>({name:e.getAttribute(`name`),desc:e.textContent.trim(),default:e.getAttribute(`default`)})),returns:e.getElementsByTagName(`returns`)[0]?.textContent?.trim()||``})):(a[o]||(a[o]={}),a=a[o])}}}catch(e){console.error(`Error parsing XML:`,e)}return t}function l(e,t,n=!1){e.innerHTML=``;let r=(e,t,i=``)=>{let a=document.createElement(`div`);a.className=`tree-item`;let o=i?`${i}::${e}`:e,s=Object.keys(t).filter(e=>e!==`_members`).length>0;t._members&&t._members.some(e=>e.type===`T`),a.innerHTML=`
      <div class="tree-node" data-path="${o}">
        <i class="fas ${s?`fa-chevron-right`:`fa-cube`}" style="width: 20px;"></i>
        <span>${e}</span>
      </div>
      <div class="tree-children" style="display: ${n?`block`:`none`};"></div>
    `;let c=a.querySelector(`.tree-node`),l=a.querySelector(`.tree-children`);return c.addEventListener(`click`,e=>{if(e.stopPropagation(),s){let e=c.querySelector(`i`),t=l.style.display===`block`;l.style.display=t?`none`:`block`,e.className=`fas ${t?`fa-chevron-right`:`fa-chevron-down`}`}window.location.hash=`#docs/${o}`}),Object.keys(t).filter(e=>e!==`_members`).sort().forEach(e=>{l.appendChild(r(e,t[e],o))}),a};Object.keys(t).sort().forEach(n=>{e.appendChild(r(n,t[n]))})}function u(e){let t=e.split(`::`),n=o;for(let e of t)if(n=n[e],!n)break;if(!n)return`<h2>Element not found</h2>`;let r=n._members||[],i=r.find(e=>e.type===`T`),a=r.filter(e=>e.type===`M`),s=r.filter(e=>e.type===`P`),c=r.filter(e=>e.type===`F`),l=Object.keys(n).filter(e=>e!==`_members`).map(e=>({name:e,summary:n[e]._members?.find(e=>e.type===`T`)?.summary||``}));return`
    <div class="api-member">
      <h1>${e}</h1>
      ${i?`<p class="summary" style="font-size: 1.2rem; margin-top: 1rem;">${i.summary}</p>`:``}
      
      ${l.length>0?`
        <div class="api-section">
          <h3>Sub-elements / Classes</h3>
          <div style="display: grid; gap: 1rem;">
            ${l.map(t=>`
              <a href="#docs/${e}::${t.name}" class="api-item">
                <div class="api-item-name">${t.name}</div>
                <div style="color: var(--text-dim); font-size: 0.9rem;">${t.summary}</div>
              </a>
            `).join(``)}
          </div>
        </div>
      `:``}

      ${s.length>0?`
        <div class="api-section">
          <h3>Properties</h3>
          ${s.map(e=>d(e)).join(``)}
        </div>
      `:``}

      ${a.length>0?`
        <div class="api-section">
          <h3>Methods</h3>
          ${a.map(e=>d(e)).join(``)}
        </div>
      `:``}

      ${c.length>0?`
        <div class="api-section">
          <h3>Fields / Enums</h3>
          ${c.map(e=>d(e)).join(``)}
        </div>
      `:``}
    </div>
  `}function d(e){return`
    <div class="api-item">
      <div class="api-item-name">${e.name}</div>
      <p style="color: var(--text-dim); margin-bottom: 1rem;">${e.summary}</p>
      ${e.params.length>0?`
        <div style="margin-top: 0.5rem;">
          <strong>Parameters:</strong>
          <ul style="margin-left: 1.5rem; font-size: 0.9rem;">
            ${e.params.map(e=>`<li><code>${e.name}</code>: ${e.desc} ${e.default?`(Default: ${e.default})`:``}</li>`).join(``)}
          </ul>
        </div>
      `:``}
      ${e.returns?`<div style="margin-top: 0.5rem;"><strong>Returns:</strong> <span style="font-size: 0.9rem;">${e.returns}</span></div>`:``}
    </div>
  `}function f(){return`
    <div style="text-align: center; padding-top: 5rem;">
      <i class="fas fa-book" style="font-size: 5rem; color: var(--accent-color); margin-bottom: 2rem;"></i>
      <h1>CometEngine API Documentation</h1>
      <p style="color: var(--text-dim); max-width: 600px; margin: 1rem auto;">Explore the classes, methods, and properties available in CometEngine. Use the sidebar to navigate or search for a specific element.</p>
    </div>
  `}function p(e,t){if(!t)return e;let n={},r=(e,n)=>{let i=!1;return Object.keys(e).forEach(a=>{if(a===`_members`)e._members.some(e=>e.name.toLowerCase().includes(t)||e.summary.toLowerCase().includes(t))&&(i=!0);else{let o=r(e[a],t);(o||a.toLowerCase().includes(t))&&(n[a]=o||e[a],i=!0)}}),i?n:null};return r(e,n),n}var m=document.getElementById(`app`),h=document.querySelectorAll(`.nav-links a`);function g(){let t=window.location.hash||`#home`;h.forEach(e=>{e.getAttribute(`href`)===t?e.classList.add(`active`):e.classList.remove(`active`)}),t===`#home`?e(m):t===`#releases`?r(m):t.startsWith(`#docs`)&&s(m,t)}window.addEventListener(`hashchange`,g),window.addEventListener(`load`,g),document.addEventListener(`click`,e=>{e.target.tagName===`A`&&e.target.getAttribute(`href`)?.startsWith(`#docs/`)});