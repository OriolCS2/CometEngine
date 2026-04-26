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
        <a href="${a.html_url}" target="_blank" class="download-btn">
          <i class="fas fa-download"></i>
          Download ${a.tag_name} ${o?`(RC)`:``}
        </a>
        <div class="os-info">Available Editor for Windows and Linux</div>
        ${r&&i&&new Date(i.published_at)>new Date(r.published_at)?`<p style="font-size: 0.9rem; color: var(--accent-color);">New Release Candidate available: <a href="${i.html_url}" style="text-decoration: underline;">${i.tag_name}</a></p>`:``}
      </div>
    `}catch(t){console.error(`Error fetching releases:`,t),e.innerHTML=`<p>Error loading latest release.</p>`}}function n(){let e=window.navigator.platform.toLowerCase();return e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Desktop`}async function r(e,t){if(t){a(e,t);return}e.innerHTML=`
    <section>
      <div class="container">
        <h2>Engine Releases</h2>
        <div id="featured-releases" class="release-list" style="margin-bottom: 4rem;">
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
  `;let n=document.getElementById(`featured-releases`),r=document.getElementById(`older-releases-list`),o=document.querySelectorAll(`.filter-btn`);try{let e=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();e.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let t=e.find(e=>!e.prerelease),a=e.find(e=>e.prerelease&&(!t||new Date(e.published_at)>new Date(t.published_at)));n.innerHTML=``,t&&n.appendChild(i(t,`Last Stable Release`)),a&&n.appendChild(i(a,`Latest Release Candidate`));let s=e=>{r.innerHTML=e.map(e=>`
        <a href="#releases/${e.tag_name}" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-color); transition: var(--transition);">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-weight: 600; font-size: 1.1rem;">${e.name||e.tag_name}</span>
            <span class="tag ${e.prerelease?`tag-rc`:`tag-stable`}" style="font-size: 0.7rem;">${e.prerelease?`RC`:`Stable`}</span>
          </div>
          <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(e.published_at).toLocaleDateString()}</div>
        </a>
      `).join(``)||`<div style="padding: 2rem; color: var(--text-dim);">No releases found.</div>`,r.querySelectorAll(`a`).forEach(e=>{e.onmouseover=()=>e.style.background=`rgba(255, 140, 0, 0.05)`,e.onmouseout=()=>e.style.background=`transparent`})};s(e),o.forEach(t=>{t.addEventListener(`click`,()=>{o.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`);let n=t.getAttribute(`data-filter`),r=e;n===`stable`&&(r=e.filter(e=>!e.prerelease)),n===`rc`&&(r=e.filter(e=>e.prerelease)),s(r)})})}catch(e){console.error(`Error fetching releases:`,e),n.innerHTML=`<p>Error loading releases.</p>`}}function i(e,t){let n=document.createElement(`div`);return n.className=`release-card`,n.innerHTML=`
    <div style="color: var(--accent-color); font-weight: 700; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 0.5rem;">${t}</div>
    <div class="release-header">
      <h3 style="font-size: 2rem;"><a href="#releases/${e.tag_name}" style="text-decoration: underline;">${e.name||e.tag_name}</a></h3>
      <div style="color: var(--text-dim);">${new Date(e.published_at).toLocaleDateString()}</div>
    </div>
    <div style="margin-bottom: 1.5rem; color: var(--text-dim); font-size: 0.95rem;">
      ${o(e.body)}
    </div>
    <a href="#releases/${e.tag_name}" class="download-btn" style="padding: 0.6rem 1.5rem; font-size: 1rem;">View Details</a>
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
                ${s(n.body)}
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
`).filter(e=>e.trim().length>0);return t.slice(0,3).join(`<br>`)+(t.length>3?`...`:``)}function s(e){return e?e.replace(/^### (.*$)/gim,`<h4 style="margin-top: 1.5rem; margin-bottom: 0.5rem; color: #fff;">$1</h4>`).replace(/^## (.*$)/gim,`<h3 style="margin-top: 2rem; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem; color: #fff;">$1</h3>`).replace(/^# (.*$)/gim,`<h2 style="margin-top: 2.5rem; margin-bottom: 1.2rem; color: #fff;">$1</h2>`).replace(/^\* (.*$)/gim,`<li style="margin-left: 1.5rem;">$1</li>`).replace(/^\- (.*$)/gim,`<li style="margin-left: 1.5rem;">$1</li>`).replace(/`(.*?)`/g,`<code style="background: rgba(255,255,255,0.1); padding: 0.2rem 0.4rem; border-radius: 4px; font-family: monospace;">$1</code>`).replace(/\n/g,`<br>`):``}var c=null,l=new Set,u=[];async function d(e,t){c||(e.innerHTML=`<div class="loading">Parsing documentation...</div>`,c=await f(),u=y(c));let n=decodeURIComponent(t.replace(`#docs`,``).substring(1));if(n){let e=n.split(`::`),t=``;e.forEach((e,n)=>{t=t?`${t}::${e}`:e,l.add(t)})}e.innerHTML=`
    <div class="docs-layout">
      <div class="docs-sidebar">
        <input type="text" id="docs-search" class="search-box" placeholder="Search API...">
        <div id="docs-tree"></div>
      </div>
      <div class="docs-content" id="docs-detail">
        ${n?m(n):b()}
      </div>
    </div>
  `;let r=document.getElementById(`docs-tree`);p(r,c),document.getElementById(`docs-search`).addEventListener(`input`,e=>{let t=e.target.value.toLowerCase();t.length>0?p(r,v(c,t),!0):p(r,c)})}async function f(){let e=[`./docs/CometEngine.xml`,`./docs/CometEngineAdditionals.xml`,`./docs/CometEngineGlobals.xml`],t={};for(let n of e)try{let e=await(await fetch(n)).text(),r=new DOMParser().parseFromString(e,`text/xml`).getElementsByTagName(`member`);for(let e of r){let n=e.getAttribute(`name`),r=n[0],i=n.substring(2),a=i.match(/\((.*)\)/),o=a?a[1].split(`,`).map(e=>e.trim()).filter(e=>e):[],s=i.split(`(`)[0].split(`::`),c=t;for(let t=0;t<s.length;t++){let i=s[t];if(t===s.length-1){c._members||=[];let t=Array.from(e.getElementsByTagName(`param`)).map((e,t)=>({name:e.getAttribute(`name`),type:o[t]||`unknown`,desc:e.textContent.trim(),default:e.getAttribute(`default`)}));c._members.push({type:r,fullName:n,name:i,summary:e.getElementsByTagName(`summary`)[0]?.innerHTML?.trim()||``,params:t,returns:e.getElementsByTagName(`returns`)[0]?.textContent?.trim()||``})}else c[i]||(c[i]={}),c=c[i]}}}catch(e){console.error(`Error parsing XML:`,e)}return t}function p(e,t,n=!1){e.innerHTML=``;let r=(e,t,i=``)=>{let a=document.createElement(`div`);a.className=`tree-item`;let o=i?`${i}::${e}`:e,s=Object.keys(t).filter(e=>e!==`_members`).length>0,c=n||l.has(o);a.innerHTML=`
      <div class="tree-node ${window.location.hash===`#docs/`+o?`active`:``}" data-path="${o}">
        <i class="fas ${s?c?`fa-chevron-down`:`fa-chevron-right`:`fa-cube`} toggle-icon" style="width: 20px;"></i>
        <span class="node-name">${e}</span>
      </div>
      <div class="tree-children" style="display: ${c?`block`:`none`};"></div>
    `;let u=a.querySelector(`.toggle-icon`),d=a.querySelector(`.node-name`),f=a.querySelector(`.tree-children`);return u.addEventListener(`click`,e=>{if(e.stopPropagation(),s){let e=f.style.display===`block`;f.style.display=e?`none`:`block`,u.className=`fas ${e?`fa-chevron-right`:`fa-chevron-down`} toggle-icon`,e?l.delete(o):l.add(o)}}),d.addEventListener(`click`,e=>{e.stopPropagation(),window.location.hash=`#docs/${o}`}),Object.keys(t).filter(e=>e!==`_members`).sort().forEach(e=>{f.appendChild(r(e,t[e],o))}),a};Object.keys(t).sort().forEach(n=>{e.appendChild(r(n,t[n]))})}function m(e){let t=e.split(`::`),n=c;for(let e of t)n=n?.[e];if(!n)return`<h2>Element not found</h2>`;let r=n._members||[],i=r.find(e=>e.type===`T`),a=r.filter(e=>e.type===`M`),o=r.filter(e=>e.type===`P`),s=r.filter(e=>e.type===`F`),l=Object.keys(n).filter(e=>e!==`_members`).map(e=>({name:e,summary:n[e]._members?.find(e=>e.type===`T`)?.summary||``}));return`
    <div class="api-member">
      <div style="color: var(--accent-color); font-weight: 600; margin-bottom: 0.5rem;">${t.slice(0,-1).join(`::`)||`Global`}</div>
      <h1>${t[t.length-1]}</h1>
      ${i?`<div class="summary" style="font-size: 1.1rem; margin-top: 1rem; color: var(--text-color);">${_(i.summary)}</div>`:``}
      
      ${l.length>0?`
        <div class="api-section">
          <h3>Namespaces & Classes</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1rem;">
            ${l.map(t=>`
              <a href="#docs/${e}::${t.name}" class="api-item" style="display: block;">
                <div class="api-item-name" style="color: var(--accent-color);">${t.name}</div>
                <div style="color: var(--text-dim); font-size: 0.85rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${t.summary}</div>
              </a>
            `).join(``)}
          </div>
        </div>
      `:``}

      ${o.length>0?`
        <div class="api-section">
          <h3>Properties</h3>
          ${o.map(e=>h(e)).join(``)}
        </div>
      `:``}

      ${a.length>0?`
        <div class="api-section">
          <h3>Methods</h3>
          ${a.map(e=>h(e)).join(``)}
        </div>
      `:``}

      ${s.length>0?`
        <div class="api-section">
          <h3>Fields & Enums</h3>
          ${s.map(e=>h(e)).join(``)}
        </div>
      `:``}
    </div>
  `}function h(e){return`
    <div class="api-item">
      <div style="display: flex; justify-content: space-between; align-items: flex-start;">
        <div class="api-item-name">${e.name}</div>
        <div style="font-family: monospace; color: var(--text-dim); font-size: 0.9rem;">${e.type===`M`?`Method`:e.type===`P`?`Property`:`Field`}</div>
      </div>
      <div style="color: var(--text-dim); margin-top: 0.5rem; margin-bottom: 1rem;">${_(e.summary)}</div>
      
      ${e.params.length>0?`
        <div style="margin-top: 1rem;">
          <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">Parameters</div>
          <div style="display: grid; gap: 0.5rem;">
            ${e.params.map(e=>`
              <div style="display: flex; gap: 1rem; font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 0.5rem 1rem; border-radius: 4px;">
                <code style="color: #fff;">${e.name}</code>
                <span style="color: var(--text-dim);">${g(e.type)}</span>
                <span style="flex: 1;">${e.desc} ${e.default?`<i style="color: var(--text-dim);">(Default: ${e.default})</i>`:``}</span>
              </div>
            `).join(``)}
          </div>
        </div>
      `:``}

      ${e.returns?`
        <div style="margin-top: 1rem;">
          <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.9rem; text-transform: uppercase; color: var(--accent-color);">Returns</div>
          <div style="font-size: 0.9rem;">${e.returns}</div>
        </div>
      `:``}
    </div>
  `}function g(e){if(!e||e===`unknown`)return``;let t=u.find(t=>t.endsWith(`::`+e)||t===e);return t?`<a href="#docs/${t}" style="color: var(--accent-color); text-decoration: underline;">${e}</a>`:`<span style="color: #61afef;">${e}</span>`}function _(e){return e?e.replace(/<see cref="[T|M|P|F]:(.*?)" \/>/g,(e,t)=>{let n=t.replace(`()`,``);return`<a href="#docs/${n}" style="color: var(--accent-color); text-decoration: underline;">${n.split(`::`).pop()}</a>`}).replace(/\n/g,`<br>`):``}function v(e,t){let n={},r=(e,n)=>{let i=!1;return Object.keys(e).forEach(a=>{if(a===`_members`){let r=e._members.filter(e=>e.name.toLowerCase().includes(t)||e.summary.toLowerCase().includes(t));r.length>0&&(n._members=r,i=!0)}else (r(e[a],{})||a.toLowerCase().includes(t))&&(n[a]=e[a],i=!0)}),i};return r(e,n),n}function y(e,t=``){let n=[];return Object.keys(e).forEach(r=>{if(r===`_members`)return;let i=t?`${t}::${r}`:r;n.push(i),n=n.concat(y(e[r],i))}),n}function b(){return`
    <div style="text-align: center; padding-top: 5rem;">
      <i class="fas fa-book" style="font-size: 5rem; color: var(--accent-color); margin-bottom: 2rem;"></i>
      <h1>CometEngine API Documentation</h1>
      <p style="color: var(--text-dim); max-width: 600px; margin: 1rem auto;">Explore the classes, methods, and properties available in CometEngine. Built from official engine docstrings.</p>
    </div>
  `}var x=document.getElementById(`app`),S=document.querySelectorAll(`.nav-links a`);function C(){let t=window.location.hash||`#home`;S.forEach(e=>{e.getAttribute(`href`)===t?e.classList.add(`active`):e.classList.remove(`active`)}),t===`#home`?e(x):t.startsWith(`#releases`)?r(x,t.replace(`#releases`,``).substring(1)):t.startsWith(`#docs`)&&d(x,t)}window.addEventListener(`hashchange`,C),window.addEventListener(`load`,C),document.addEventListener(`click`,e=>{e.target.tagName===`A`&&e.target.getAttribute(`href`)?.startsWith(`#docs/`)});