(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function e(e){e.innerHTML=`
    <section class="hero">
      <div class="container">
        <img src="./logo.png" alt="CometEngine Logo" style="height: 120px; margin-bottom: 2rem;">
        <h1>CometEngine</h1>
        <p style="font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem;">2D cross platform game engine</p>
        <div style="font-size: 1.5rem; margin-bottom: 2rem; display: flex; justify-content: center; gap: 1.5rem; color: var(--text-dim);">
          <i class="fab fa-windows" title="Windows"></i>
          <i class="fab fa-linux" title="Linux"></i>
          <i class="fab fa-chrome" title="Web"></i>
          <i class="fab fa-android" title="Android"></i>
        </div>
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
        <a href="#releases/${a.tag_name}" class="download-btn">
          <i class="fas fa-download"></i>
          Download ${a.tag_name} ${o?`(RC)`:``}
        </a>
        <div class="os-info">Available Editor for Windows and Linux</div>
        ${r&&i&&new Date(i.published_at)>new Date(r.published_at)?`<p style="font-size: 0.9rem; color: var(--accent-color);">New Release Candidate available: <a href="#releases/${i.tag_name}" style="text-decoration: underline;">${i.tag_name}</a></p>`:``}
      </div>
    `}catch(t){console.error(`Error fetching releases:`,t),e.innerHTML=`<p>Error loading latest release.</p>`}}function n(){let e=window.navigator.platform.toLowerCase();return e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Desktop`}async function r(e,t){if(t){a(e,t);return}e.innerHTML=`
    <section>
      <div class="container">
        <h2>Engine Releases</h2>
        <div id="featured-releases" class="release-list" style="margin-bottom: 4rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem;">
          <div class="loading">Fetching releases from GitHub...</div>
        </div>
        
        <div class="older-releases-section">
          <h3 style="font-size: 2rem; margin-bottom: 2rem;">Older Releases</h3>
          <div id="releases-filter" style="margin-bottom: 2rem; display: flex; gap: 1rem;">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="stable">Stable</button>
            <button class="filter-btn" data-filter="rc">Pre-releases</button>
          </div>
          <div id="older-releases-list" style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden;">
            <div class="loading" style="padding: 2rem;">Loading history...</div>
          </div>
        </div>
      </div>
    </section>
  `;let n=document.getElementById(`featured-releases`),r=document.getElementById(`older-releases-list`),o=document.querySelectorAll(`.filter-btn`);try{let e=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();e.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let t=e.find(e=>!e.prerelease),a=e.find(e=>e.prerelease&&(!t||new Date(e.published_at)>new Date(t.published_at)));n.innerHTML=``,t&&n.appendChild(i(t,`Latest Stable Release`)),a&&n.appendChild(i(a,`Latest Release Candidate`));let s=e=>{r.innerHTML=e.map(e=>`
        <a href="#releases/${e.tag_name}" class="older-release-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-color); transition: var(--transition);">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-weight: 600; font-size: 1.1rem;">${e.name||e.tag_name}</span>
            <span class="tag ${e.prerelease?`tag-rc`:`tag-stable`}" style="font-size: 0.7rem;">${e.prerelease?`RC`:`Stable`}</span>
          </div>
          <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(e.published_at).toLocaleDateString()}</div>
        </a>
      `).join(``)||`<div style="padding: 2rem; color: var(--text-dim);">No releases found.</div>`,r.querySelectorAll(`.older-release-item`).forEach(e=>{e.onmouseenter=()=>{e.style.backgroundColor=`rgba(255, 140, 0, 0.1)`},e.onmouseleave=()=>{e.style.backgroundColor=`transparent`}})};s(e),o.forEach(t=>{t.addEventListener(`click`,()=>{o.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`);let n=t.getAttribute(`data-filter`),r=e;n===`stable`&&(r=e.filter(e=>!e.prerelease)),n===`rc`&&(r=e.filter(e=>e.prerelease)),s(r)})})}catch(e){console.error(`Error fetching releases:`,e),n.innerHTML=`<p>Error loading releases.</p>`}}function i(e,t){let n=document.createElement(`div`);return n.className=`release-card`,n.style.display=`flex`,n.style.flexDirection=`column`,n.innerHTML=`
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem;">
      <div style="color: var(--accent-color); font-weight: 700; text-transform: uppercase; font-size: 0.8rem;">${t}</div>
      <span class="tag ${e.prerelease?`tag-rc`:`tag-stable`}">${e.prerelease?`Pre-release`:`Stable`}</span>
    </div>
    <div class="release-header">
      <h3 style="font-size: 1.8rem;"><a href="#releases/${e.tag_name}">${e.name||e.tag_name}</a></h3>
      <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(e.published_at).toLocaleDateString()}</div>
    </div>
    <div style="margin: 1.5rem 0; color: var(--text-dim); font-size: 0.95rem; height: 300px; overflow-y: auto; padding-right: 1rem; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px; border: 1px solid var(--border-color);">
      ${o(e.body)}
    </div>
    <div style="margin-top: auto;">
      <a href="#releases/${e.tag_name}" class="download-btn" style="width: 100%; justify-content: center;">View Full Release Notes</a>
    </div>
  `,n}async function a(e,t){e.innerHTML=`<div class="container" style="padding: 100px 2rem;"><div class="loading">Loading release ${t}...</div></div>`;try{let n=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases/tags/${t}`)).json();e.innerHTML=`
      <section style="padding-top: 120px;">
        <div class="container">
          <a href="#releases" style="color: var(--accent-color); margin-bottom: 2rem; display: inline-block;">
            <i class="fas fa-arrow-left"></i> Back to All Releases
          </a>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 3rem;">
            <div>
              <h1 style="font-size: 3.5rem; margin-bottom: 0.5rem;">${n.name||n.tag_name}</h1>
              <div style="display: flex; gap: 1rem; align-items: center;">
                <span class="tag ${n.prerelease?`tag-rc`:`tag-stable`}">${n.prerelease?`Pre-release`:`Stable`}</span>
                <span style="color: var(--text-dim);">${new Date(n.published_at).toLocaleDateString()}</span>
              </div>
            </div>
            <a href="${n.html_url}" target="_blank" class="download-btn" style="background: var(--bg-secondary); border: 1px solid var(--border-color);">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div style="display: flex; gap: 4rem; flex-wrap: wrap;">
            <div style="flex: 2; min-width: 300px;">
              <h2 style="text-align: left; font-size: 1.8rem; margin-bottom: 1.5rem;">Release Notes</h2>
              <div class="markdown-content" style="background: var(--card-bg); padding: 2rem; border-radius: 12px; border: 1px solid var(--border-color); line-height: 1.8;">
                ${o(n.body)}
              </div>
            </div>
            <div style="flex: 1; min-width: 250px;">
              <h2 style="text-align: left; font-size: 1.8rem; margin-bottom: 1.5rem;">Downloads</h2>
              <div style="display: grid; gap: 1rem;">
                ${n.assets.map(e=>`
                  <a href="${e.browser_download_url}" class="download-btn" style="justify-content: space-between; font-size: 0.95rem; background: var(--bg-secondary); border: 1px solid var(--border-color);">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <i class="fas fa-file-archive" style="color: var(--accent-color);"></i>
                      <span>${e.name}</span>
                    </div>
                    <span style="font-size: 0.8rem; color: var(--text-dim);">${(e.size/1024/1024).toFixed(1)} MB</span>
                  </a>
                `).join(``)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `}catch(t){e.innerHTML=`<div class="container" style="padding: 100px 2rem;"><h2>Error loading release details</h2><p>${t.message}</p></div>`}}function o(e){if(!e)return``;let t=e.split(`
`),n=``;return t.forEach(e=>{if(e.match(/^\s+[\-\*]\s+/)){let t=e.match(/^\s+/)[0].length;n+=`<li style="margin-left: ${t*10}px; list-style: circle;">${e.replace(/^\s+[\-\*]\s+/,``)}</li>`}else if(e.match(/^[\-\*]\s+/))n+=`<li style="margin-left: 1.5rem; list-style: disc;">${e.replace(/^[\-\*]\s+/,``)}</li>`;else if(e.startsWith(`### `))n+=`<h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">${e.substring(4)}</h4>`;else if(e.startsWith(`## `))n+=`<h3 style="margin-top: 2rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; color: #fff;">${e.substring(3)}</h3>`;else if(e.startsWith(`# `))n+=`<h2 style="margin-top: 2.5rem; margin-bottom: 1.2rem; color: #fff;">${e.substring(2)}</h2>`;else{let t=e.replace(/\*\*(.*?)\*\*/g,`<strong>$1</strong>`).replace(/\*(.*?)\*/g,`<em>$1</em>`).replace(/`(.*?)`/g,`<code style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: monospace;">$1</code>`);n+=t+`<br>`}}),n}var s=null;async function c(e,t){s||=(e.innerHTML=`<div class="loading">Parsing documentation...</div>`,await l());let n=decodeURIComponent(t.replace(`#docs`,``).substring(1));e.innerHTML=`
    <div class="docs-layout">
      <div class="docs-sidebar">
        <input type="text" id="docs-search" class="search-box" placeholder="Search API...">
        <div id="docs-tree"></div>
      </div>
      <div class="docs-content" id="docs-detail">
        ${n?d(n):p()}
      </div>
    </div>
  `,u(document.getElementById(`docs-tree`),s),document.getElementById(`docs-search`).addEventListener(`input`,e=>{let t=e.target.value.toLowerCase();if(t.length>0){let e=m(s,t);u(document.getElementById(`docs-tree`),e,!0)}else u(document.getElementById(`docs-tree`),s)})}async function l(){let e=[`./docs/CometEngine.xml`,`./docs/CometEngineAdditionals.xml`,`./docs/CometEngineGlobals.xml`],t={};for(let n of e)try{let e=await(await fetch(n)).text(),r=new DOMParser().parseFromString(e,`text/xml`).getElementsByTagName(`member`);for(let e of r){let n=e.getAttribute(`name`),r=n[0],i=n.substring(2).split(`::`);if(i.length<1)continue;let a=t;for(let t=0;t<i.length;t++){let o=i[t],s=t===i.length-1;o.split(`(`)[0],s?(a._members||=[],a._members.push({type:r,fullName:n,name:o,summary:e.getElementsByTagName(`summary`)[0]?.textContent?.trim()||``,params:Array.from(e.getElementsByTagName(`param`)).map(e=>({name:e.getAttribute(`name`),desc:e.textContent.trim(),default:e.getAttribute(`default`)})),returns:e.getElementsByTagName(`returns`)[0]?.textContent?.trim()||``})):(a[o]||(a[o]={}),a=a[o])}}}catch(e){console.error(`Error parsing XML:`,e)}return t}function u(e,t,n=!1){e.innerHTML=``;let r=(e,t,i=``)=>{let a=document.createElement(`div`);a.className=`tree-item`;let o=i?`${i}::${e}`:e,s=Object.keys(t).filter(e=>e!==`_members`).length>0;a.innerHTML=`
      <div class="tree-node ${window.location.hash===`#docs/`+o?`active`:``}" data-path="${o}">
        <i class="fas ${s?`fa-chevron-right`:`fa-cube`}" style="width: 20px;"></i>
        <span>${e}</span>
      </div>
      <div class="tree-children" style="display: ${n?`block`:`none`};"></div>
    `;let c=a.querySelector(`.tree-node`),l=a.querySelector(`.tree-children`);return c.addEventListener(`click`,e=>{if(e.stopPropagation(),s){let e=c.querySelector(`i`),t=l.style.display===`block`;l.style.display=t?`none`:`block`,e.className=`fas ${t?`fa-chevron-right`:`fa-chevron-down`}`}window.location.hash=`#docs/${o}`}),Object.keys(t).filter(e=>e!==`_members`).sort().forEach(e=>{l.appendChild(r(e,t[e],o))}),a};Object.keys(t).sort().forEach(n=>{e.appendChild(r(n,t[n]))})}function d(e){let t=e.split(`::`),n=s;for(let e of t)n=n?.[e];if(!n)return`<h2>Element not found</h2>`;let r=n._members||[],i=r.find(e=>e.type===`T`),a=r.filter(e=>e.type===`M`),o=r.filter(e=>e.type===`P`),c=r.filter(e=>e.type===`F`),l=Object.keys(n).filter(e=>e!==`_members`).map(e=>({name:e,summary:n[e]._members?.find(e=>e.type===`T`)?.summary||``}));return`
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

      ${o.length>0?`
        <div class="api-section">
          <h3>Properties</h3>
          ${o.map(e=>f(e)).join(``)}
        </div>
      `:``}

      ${a.length>0?`
        <div class="api-section">
          <h3>Methods</h3>
          ${a.map(e=>f(e)).join(``)}
        </div>
      `:``}

      ${c.length>0?`
        <div class="api-section">
          <h3>Fields / Enums</h3>
          ${c.map(e=>f(e)).join(``)}
        </div>
      `:``}
    </div>
  `}function f(e){return`
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
  `}function p(){return`
    <div style="text-align: center; padding-top: 5rem;">
      <i class="fas fa-book" style="font-size: 5rem; color: var(--accent-color); margin-bottom: 2rem;"></i>
      <h1>CometEngine API Documentation</h1>
      <p style="color: var(--text-dim); max-width: 600px; margin: 1rem auto;">Explore the classes, methods, and properties available in CometEngine.</p>
    </div>
  `}function m(e,t){let n={},r=(e,n)=>{let i=!1;return Object.keys(e).forEach(a=>{if(a===`_members`){let r=e._members.filter(e=>e.name.toLowerCase().includes(t)||e.summary.toLowerCase().includes(t));r.length>0&&(n._members=r,i=!0)}else{let o={};(r(e[a],o)||a.toLowerCase().includes(t))&&(n[a]=o,i=!0)}}),i};return r(e,n),n}var h=document.getElementById(`app`),g=document.querySelectorAll(`.nav-links a`);function _(){let t=window.location.hash||`#home`;g.forEach(e=>{e.getAttribute(`href`)===t?e.classList.add(`active`):e.classList.remove(`active`)}),t===`#home`?e(h):t.startsWith(`#releases`)?r(h,t.replace(`#releases`,``).substring(1)):t.startsWith(`#docs`)&&c(h,t)}window.addEventListener(`hashchange`,_),window.addEventListener(`load`,_),document.addEventListener(`click`,e=>{e.target.tagName===`A`&&e.target.getAttribute(`href`)?.startsWith(`#docs/`)});