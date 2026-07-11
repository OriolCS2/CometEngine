var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=`/assets/InEditorView-CMpdPe2Z.png`;async function d(e){e.innerHTML=`
    <section class="hero" style="position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('${u}') center center / cover no-repeat; opacity: 0.2; z-index: 0; pointer-events: none; filter: blur(1px);"></div>
      <div class="container" style="position: relative; z-index: 1;">
        <img src="./logo.png" alt="CometEngine Logo" style="height: 120px; margin-bottom: 2rem;">
        <h1>Comet Engine</h1>
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
        <h2>Made with Comet Engine</h2>
        <div class="game-card">
          <div class="game-img" style="background-image: url('https://img.itch.zone/aW1nLzI2ODQ1ODY5LnBuZw==/315x250%23c/B0Ks6Q.png');"></div>
          <div class="game-info">
            <h3>Sant Jordi - The Stone Song</h3>
            <p>The first game ever released using CometEngine! This project was done for a Game Jam, created in a very short time to experiment with the engine's tools and web performance.</p>
            <a href="https://christt105.itch.io/sant-jordi-the-stone-song" target="_blank" class="download-btn" style="background: #da291c;">
              <i class="fas fa-play"></i>
              Play on Itch.io
            </a>
          </div>
        </div>
      </div>
    </section>
  `,await f(document.getElementById(`latest-release-container`))}async function f(e){try{let t=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();if(!t||t.length===0){e.innerHTML=`<p>No releases found.</p>`;return}t.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let n=t.find(e=>!e.prerelease),r=t.find(e=>e.prerelease),i=n||r,a=i.prerelease;p(),e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <a href="/releases/${i.tag_name}" class="download-btn">
          <i class="fas fa-download"></i>
          Download ${i.tag_name} ${a?`(RC)`:``}
        </a>
        <div class="os-info">Available Editor for Windows and Linux</div>
        ${n&&r&&new Date(r.published_at)>new Date(n.published_at)?`<p style="font-size: 0.9rem; color: var(--accent-color);">New Release Candidate available: <a href="/releases/${r.tag_name}" style="text-decoration: underline;">${r.tag_name}</a></p>`:``}
      </div>
    `}catch(t){console.error(`Error fetching releases:`,t),e.innerHTML=`<p>Error loading latest release.</p>`}}function p(){let e=window.navigator.platform.toLowerCase();return e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Desktop`}function m(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var h=m();function g(e){h=e}var _={exec:()=>null};function v(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(b.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var y=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),b={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},x=/^(?:[ \t]*(?:\n|$))+/,S=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,C=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,w=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,T=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,E=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,D=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,O=v(D).replace(/bull/g,E).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),k=v(D).replace(/bull/g,E).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),A=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,j=/^[^\n]+/,M=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ee=v(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,M).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),te=v(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,E).getRegex(),N=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,P=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,F=v(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,P).replace(`tag`,N).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),I=v(A).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,N).getRegex(),L={blockquote:v(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,I).getRegex(),code:S,def:ee,fences:C,heading:T,hr:w,html:F,lheading:O,list:te,newline:x,paragraph:I,table:_,text:j},R=v(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,N).getRegex(),ne={...L,lheading:k,table:R,paragraph:v(A).replace(`hr`,w).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,R).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,N).getRegex()},re={...L,html:v(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,P).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:_,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:v(A).replace(`hr`,w).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,O).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},ie=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,ae=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,oe=/^( {2,}|\\)\n(?!\s*$)/,z=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,se=/[\p{P}\p{S}]/u,B=/[\s\p{P}\p{S}]/u,ce=/[^\s\p{P}\p{S}]/u,V=v(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,B).getRegex(),le=/(?!~)[\p{P}\p{S}]/u,ue=/(?!~)[\s\p{P}\p{S}]/u,de=/(?:[^\s\p{P}\p{S}]|~)/u,fe=v(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,y?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),pe=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,me=v(pe,`u`).replace(/punct/g,se).getRegex(),he=v(pe,`u`).replace(/punct/g,le).getRegex(),ge=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,_e=v(ge,`gu`).replace(/notPunctSpace/g,ce).replace(/punctSpace/g,B).replace(/punct/g,se).getRegex(),ve=v(ge,`gu`).replace(/notPunctSpace/g,de).replace(/punctSpace/g,ue).replace(/punct/g,le).getRegex(),ye=v(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,ce).replace(/punctSpace/g,B).replace(/punct/g,se).getRegex(),be=v(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,se).getRegex(),xe=v(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,ce).replace(/punctSpace/g,B).replace(/punct/g,se).getRegex(),Se=v(/\\(punct)/,`gu`).replace(/punct/g,se).getRegex(),Ce=v(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),we=v(P).replace(`(?:-->|$)`,`-->`).getRegex(),Te=v(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,we).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ee=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,De=v(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Ee).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Oe=v(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Ee).replace(`ref`,M).getRegex(),ke=v(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,M).getRegex(),Ae=v(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Oe).replace(`nolink`,ke).getRegex(),je=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Me={_backpedal:_,anyPunctuation:Se,autolink:Ce,blockSkip:fe,br:oe,code:ae,del:_,delLDelim:_,delRDelim:_,emStrongLDelim:me,emStrongRDelimAst:_e,emStrongRDelimUnd:ye,escape:ie,link:De,nolink:ke,punctuation:V,reflink:Oe,reflinkSearch:Ae,tag:Te,text:z,url:_},Ne={...Me,link:v(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Ee).getRegex(),reflink:v(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Ee).getRegex()},Pe={...Me,emStrongRDelimAst:ve,emStrongLDelim:he,delLDelim:be,delRDelim:xe,url:v(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,je).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:v(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,je).getRegex()},Fe={...Pe,br:v(oe).replace(`{2,}`,`*`).getRegex(),text:v(Pe.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Ie={normal:L,gfm:ne,pedantic:re},Le={normal:Me,gfm:Pe,breaks:Fe,pedantic:Ne},Re={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},ze=e=>Re[e];function Be(e,t){if(t){if(b.escapeTest.test(e))return e.replace(b.escapeReplace,ze)}else if(b.escapeTestNoEncode.test(e))return e.replace(b.escapeReplaceNoEncode,ze);return e}function Ve(e){try{e=encodeURI(e).replace(b.percentDecode,`%`)}catch{return null}return e}function He(e,t){let n=e.replace(b.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(b.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(b.slashPipe,`|`);return n}function Ue(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function We(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&b.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Ge(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Ke(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function qe(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function H(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var Je=class{options;rules;lexer;constructor(e){this.options=e||h}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:We(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=H(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Ue(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Ue(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Ue(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Ue(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.blockquote(a);i[i.length-1]=o,n=n.substring(0,n.length-t.raw.length)+o.raw,r=r.substring(0,r.length-t.text.length)+o.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Ke(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=We(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Ue(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=He(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Ue(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(He(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Ue(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Ue(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Ge(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),qe(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return qe(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Ye=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||h,this.options.tokenizer=this.options.tokenizer||new Je,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:b,block:Ie.normal,inline:Le.normal};this.options.pedantic?(t.block=Ie.pedantic,t.inline=Le.pedantic):this.options.gfm&&(t.block=Ie.gfm,this.options.breaks?t.inline=Le.breaks:t.inline=Le.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ie,inline:Le}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(b.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(b.tabCharGlobal,`    `).replace(b.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},Xe=class{options;parser;constructor(e){this.options=e||h}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(b.notSpaceStart)?.[0],i=e.replace(b.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Be(r)+`">`+(n?i:Be(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Be(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Be(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Ve(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Be(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ve(e);if(i===null)return Be(n);e=i;let a=`<img src="${e}" alt="${Be(n)}"`;return t&&(a+=` title="${Be(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Be(e.text)}},Ze=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Qe=class e{options;renderer;textRenderer;constructor(e){this.options=e||h,this.options.renderer=this.options.renderer||new Xe,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ze}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},$e=class{options;block;constructor(e){this.options=e||h}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Ye.lex:Ye.lexInline}provideParser(e=this.block){return e?Qe.parse:Qe.parseInline}},et=new class{defaults=m();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Qe;Renderer=Xe;TextRenderer=Ze;Lexer=Ye;Tokenizer=Je;Hooks=$e;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new Xe(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Je(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new $e;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];$e.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&$e.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ye.lex(e,t??this.defaults)}parser(e,t){return Qe.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Ye.lex:Ye.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Qe.parse:Qe.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Ye.lex:Ye.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Qe.parse:Qe.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Be(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function U(e,t){return et.parse(e,t)}U.options=U.setOptions=function(e){return et.setOptions(e),U.defaults=et.defaults,g(U.defaults),U},U.getDefaults=m,U.defaults=h,U.use=function(...e){return et.use(...e),U.defaults=et.defaults,g(U.defaults),U},U.walkTokens=function(e,t){return et.walkTokens(e,t)},U.parseInline=et.parseInline,U.Parser=Qe,U.parser=Qe.parse,U.Renderer=Xe,U.TextRenderer=Ze,U.Lexer=Ye,U.lexer=Ye.lex,U.Tokenizer=Je,U.Hooks=$e,U.parse=U,U.options,U.setOptions,U.use,U.walkTokens,U.parseInline,Qe.parse,Ye.lex,U.setOptions({gfm:!0,breaks:!0});async function tt(e,t){if(t){at(e,t);return}e.innerHTML=`
    <section>
      <div class="container">
        <h2>Releases</h2>
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
  `;let n=document.getElementById(`featured-releases`),r=document.getElementById(`older-releases-list`),i=document.querySelectorAll(`.filter-btn`);try{let e=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();e.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let t=e.find(e=>!e.prerelease),a=e.find(e=>e.prerelease&&(!t||new Date(e.published_at)>new Date(t.published_at)));n.innerHTML=``,t&&n.appendChild(it(t,`Latest Stable Release`)),a&&n.appendChild(it(a,`Latest Release Candidate`));let o=e=>{r.innerHTML=e.map(e=>`
        <a href="/releases/${e.tag_name}" class="older-release-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-color); transition: var(--transition);">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-weight: 600; font-size: 1.1rem;">${e.name||e.tag_name}</span>
            <span class="tag ${e.prerelease?`tag-rc`:`tag-stable`}" style="font-size: 0.7rem;">${e.prerelease?`Pre-release`:`Stable`}</span>
          </div>
          <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(e.published_at).toLocaleDateString()}</div>
        </a>
      `).join(``)||`<div style="padding: 2rem; color: var(--text-dim);">No releases found.</div>`,r.querySelectorAll(`.older-release-item`).forEach(e=>{e.onmouseenter=()=>{e.style.backgroundColor=`rgba(255, 140, 0, 0.1)`},e.onmouseleave=()=>{e.style.backgroundColor=`transparent`}})};o(e),i.forEach(t=>{t.addEventListener(`click`,()=>{i.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`);let n=t.getAttribute(`data-filter`),r=e;n===`stable`&&(r=e.filter(e=>!e.prerelease)),n===`rc`&&(r=e.filter(e=>e.prerelease)),o(r)})})}catch(e){console.error(`Error fetching releases:`,e),n.innerHTML=`<p>Error loading releases.</p>`}}function nt(e){if(!e)return`No release notes provided.`;try{return U.parse(e.trim())}catch(t){return console.error(`Markdown parsing error:`,t),e.replace(/\n/g,`<br>`)}}function rt(e){if(!e)return`No release notes provided.`;let t=e.trim();t=t.replace(/^#{1,6}[^\n]*(\n|\r\n)*/,``),t=t.trim();try{return U.parse(t)}catch{return t.replace(/\n/g,`<br>`)}}function it(e,t){let n=document.createElement(`div`);n.className=`release-card`,n.style.display=`flex`,n.style.flexDirection=`column`;let r=rt(e.body);return n.innerHTML=`
    <style>
      /* Força que el primer element del MD no tingui marge superior */
      .markdown-content > *:first-child {
        margin-top: 0 !important;
      }
    </style>
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.25rem;">
      <div style="color: var(--accent-color); font-weight: 700; text-transform: uppercase; font-size: 0.8rem;">${t}</div>
      <span class="tag ${e.prerelease?`tag-rc`:`tag-stable`}">${e.prerelease?`Pre-release`:`Stable`}</span>
    </div>
    <div class="release-header" style="margin-bottom: 0.5rem;">
      <h3 style="font-size: 1.8rem; margin: 0;"><a href="/releases/${e.tag_name}">${e.name||e.tag_name}</a></h3>
      <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(e.published_at).toLocaleDateString()}</div>
    </div>
    <div class="markdown-content" style="display: flow-root; margin: 0.75rem 0; height: 300px; overflow-y: auto; background: rgba(0,0,0,0.2); padding: 0.75rem 1rem; border-radius: 8px; border: 1px solid var(--border-color); color: var(--text-dim); font-size: 0.95rem; line-height: 1.6;">
        ${r}
    </div>
    <div style="margin-top: auto; padding-top: 1.5rem;">
      <a href="/releases/${e.tag_name}" class="download-btn" style="width: 100%; justify-content: center; display: flex; align-items: center;">Download</a>
    </div>
  `,n}async function at(e,t){e.innerHTML=`<div class="container" style="padding: 100px 2rem;"><div class="loading">Loading release ${t}...</div></div>`;try{let n=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases/tags/${t}`)).json(),r=n.assets||[],i=r.some(e=>e.name.toLowerCase().includes(`windows`)),a=r.some(e=>e.name.toLowerCase().includes(`linux`)),o=r.some(e=>e.name.toLowerCase().includes(`mac`)),s=r.some(e=>![`windows`,`linux`,`mac`].some(t=>e.name.toLowerCase().includes(t))),c=ot(),l=`windows`;c===`linux`&&a?l=`linux`:c===`mac`&&o?l=`mac`:i?l=`windows`:a?l=`linux`:o?l=`mac`:s&&(l=`other`),e.innerHTML=`
      <style>
        /* Eliminem el marge superior del primer element dins del markdown per evitar el padding extra */
        .markdown-content > *:first-child {
          margin-top: 0 !important;
        }
        /* Millorem una mica l'espaiat de les llistes per a que no es vegin massa separades */
        .markdown-content ul, .markdown-content ol {
          margin-bottom: 1rem;
        }
      </style>
      <section class="release-detail-section" style="padding-top: 90px;">
        <div class="container">
          <a href="/releases" style="color: var(--accent-color); margin-bottom: 1rem; display: inline-block;">
            <i class="fas fa-arrow-left"></i> Back to All Releases
          </a>
          <div class="release-detail-top" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 2rem; gap: 2rem;">
            <div style="flex: 1;">
              <h1 style="font-size: 3.5rem; margin: 0; line-height: 1.1;">${n.name||n.tag_name}</h1>
              <div style="display: flex; gap: 1rem; align-items: center; margin-top: 1rem;">
                <span class="tag ${n.prerelease?`tag-rc`:`tag-stable`}">${n.prerelease?`Pre-release`:`Stable`}</span>
                <span style="color: var(--text-dim);">${new Date(n.published_at).toLocaleDateString()}</span>
              </div>
            </div>
            <a href="${n.html_url}" target="_blank" class="download-btn" style="background: var(--bg-secondary); border: 1px solid var(--border-color); flex-shrink: 0; padding: 0.75rem 1.5rem; font-size: 1rem;">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4rem;">
            <div id="downloads-section">
              <h2 style="text-align: left; font-size: 2rem; margin-bottom: 1.5rem;">Downloads</h2>
              <div id="platform-tabs" style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                ${i?`<button class="filter-btn ${l===`windows`?`active`:``}" data-platform="windows"><i class="fab fa-windows"></i> Windows</button>`:``}
                ${a?`<button class="filter-btn ${l===`linux`?`active`:``}" data-platform="linux"><i class="fab fa-linux"></i> Linux</button>`:``}
                ${o?`<button class="filter-btn ${l===`mac`?`active`:``}" data-platform="mac"><i class="fab fa-apple"></i> macOS</button>`:``}
                ${s?`<button class="filter-btn ${l===`other`?`active`:``}" data-platform="other"><i class="fas fa-box"></i> Other</button>`:``}
              </div>
              <div id="assets-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 1rem;">
                </div>
            </div>

            <div>
              <h2 style="text-align: left; font-size: 2rem; margin-bottom: 1.5rem;">Release Notes</h2>
              <div class="markdown-content" style="display: flow-root; background: var(--card-bg); padding: 2rem; border-radius: 12px; border: 1px solid var(--border-color); line-height: 1.8;">
                ${nt(n.body)}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;let u=document.getElementById(`assets-list`),d=document.querySelectorAll(`#platform-tabs .filter-btn`),f=e=>{let t=[];t=e===`other`?r.filter(e=>![`windows`,`linux`,`mac`].some(t=>e.name.toLowerCase().includes(t))):r.filter(t=>t.name.toLowerCase().includes(e)),u.innerHTML=t.map(e=>`
        <a href="${e.browser_download_url}" class="download-btn" style="justify-content: space-between; font-size: 0.95rem; background: var(--bg-secondary); border: 1px solid var(--border-color); width: 100%;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <i class="fas fa-file-archive" style="color: var(--accent-color);"></i>
            <span>${e.name}</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--text-dim);">${(e.size/1024/1024).toFixed(1)} MB</span>
        </a>
      `).join(``)||`<div style="padding: 2rem; color: var(--text-dim); grid-column: 1/-1;">No downloads found for ${e}.</div>`};f(l),d.forEach(e=>{e.addEventListener(`click`,()=>{d.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),f(e.getAttribute(`data-platform`))})})}catch(t){e.innerHTML=`<div class="container" style="padding: 100px 2rem;"><h2>Error loading release details</h2><p>${t.message}</p></div>`}}function ot(){let e=window.navigator.platform.toLowerCase();return e.includes(`win`)?`windows`:e.includes(`linux`)?`linux`:e.includes(`mac`)?`mac`:`windows`}function st(){let e=window.location.pathname.replace(/\/+$/,``);return e===``||e===`/index.html`||e===`/home`?`#home`:`#`+e.replace(/^\//,``)}function ct(e){if(typeof e!=`string`)return;e.startsWith(`#`)&&(e=`/`+e.slice(1)),e.startsWith(`/`)||(e=`/`+e);let t=window.location.pathname.replace(/\/+$/,``)||`/`;((e.replace(/\/+$/,``)||`/`)!==t||window.location.hash)&&window.history.pushState({},``,e),window.dispatchEvent(new Event(`route-change`)),window.scrollTo(0,0)}var lt=null,ut=[],dt=new Set,ft=``,pt=``,mt=[];async function ht(){if(mt.length>0)return mt;try{let e=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();e.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let t=e.map(e=>e.tag_name),n=await Promise.all(t.map(async e=>{try{return(await fetch(`./docs/${e}/CometEngine.xml`,{method:`HEAD`})).ok?e:null}catch{return null}}));return mt=t.filter(e=>n.includes(e)&&n[t.indexOf(e)]!==null),mt.length===0&&t.length>0&&(mt=[t[0]]),pt||=mt[0],mt}catch(e){return console.error(`Error fetching versions:`,e),mt=[`2.0-rc.11`],pt=`2.0-rc.11`,mt}}window.openLightbox=e=>{let t=document.createElement(`div`);t.style.cssText=`
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.85);
    display: flex; justify-content: center; align-items: center;
    z-index: 9999; cursor: zoom-out;
    opacity: 0; transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
  `;let n=document.createElement(`img`);n.src=e,n.style.cssText=`
    max-width: 90%; max-height: 90%;
    border-radius: 12px;
    box-shadow: 0 0 50px rgba(0,0,0,0.5);
    transform: scale(0.9); transition: transform 0.3s ease;
    border: 1px solid rgba(255,255,255,0.1);
  `,t.appendChild(n),document.body.appendChild(t),setTimeout(()=>{t.style.opacity=`1`,n.style.transform=`scale(1)`},10),t.onclick=()=>{t.style.opacity=`0`,n.style.transform=`scale(0.9)`,setTimeout(()=>t.remove(),300)}};async function gt(e,t){let n=!lt;n&&(e.innerHTML=`<div class="loading">Discovering versions...</div>`,await ht(),e.innerHTML=`<div class="loading">Parsing documentation...</div>`,lt=await yt(),ut=Dt(lt));let r=decodeURIComponent(t.replace(`#docs`,``).substring(1));if(r){let e=r.split(`::`),t=``;e.forEach(e=>{t=t?`${t}::${e}`:e,dt.add(t)})}if(n||!document.getElementById(`docs-tree`))e.innerHTML=`
      <div class="docs-layout">
        <div class="docs-sidebar">
          <div class="docs-sidebar-search">
            <div style="margin-bottom: 0.75rem;">
              <label style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 0.25rem;">API Version</label>
              <select id="docs-version" class="search-box" style="margin-bottom: 0;">
                ${mt.map(e=>`<option value="${e}" ${e===pt?`selected`:``}>${e}</option>`).join(``)}
              </select>
            </div>
            <input type="text" id="docs-search" class="search-box" placeholder="Search API..." style="margin-bottom: 0;">
          </div>
          <div class="docs-sidebar-tree" id="docs-tree"></div>
        </div>
        <div class="docs-content" id="docs-detail">
          ${r?St(r):kt()}
        </div>
      </div>
    `,xt(document.getElementById(`docs-tree`),lt),_t(),vt(e);else{document.getElementById(`docs-detail`).innerHTML=r?St(r):kt();let e=document.getElementById(`docs-tree`);ft?xt(e,Ot(lt,ft),!0):xt(e,lt);let t=document.getElementById(`docs-search`);t&&(t.value=ft)}}function _t(){let e=document.getElementById(`docs-search`);e&&e.addEventListener(`input`,e=>{ft=e.target.value.toLowerCase();let t=document.getElementById(`docs-tree`);ft.length>0?xt(t,Ot(lt,ft),!0):xt(t,lt)})}function vt(e){let t=document.getElementById(`docs-version`);t&&t.addEventListener(`change`,async t=>{pt=t.target.value,e.innerHTML=`<div class="loading">Switching version...</div>`,lt=await yt(),ut=Dt(lt),gt(e,st())})}async function yt(){let e=[`./docs/${pt}/CometEngine.xml`,`./docs/${pt}/CometEngineAdditionals.xml`,`./docs/${pt}/CometEngineGlobals.xml`],t={};for(let n of e)try{let e=await fetch(n);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);let r=await e.text();console.log(`Fetched ${n}: ${r.length} bytes.`),r=r.replace(/([a-z]+)="([^"]*)"/gi,(e,t,n)=>`${t}="${n.replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}"`).replace(/([a-z0-9_]+)\s*=\s*([)>])/gi,`$1="" $2`).replace(/<([a-z0-9:]+)\s+([^>]*?)(\/?)>/gi,(e,t,n,r)=>{let i=new Set,a=/([a-z0-9_]+)="([^"]*)"/gi,o=[],s;for(;(s=a.exec(n))!==null;){let e=s[1].toLowerCase();i.has(e)||(i.add(e),o.push(`${s[1]}="${s[2]}"`))}return`<${t}${o.length?` `+o.join(` `):``}${r?` /`:``}>`});let i=new DOMParser().parseFromString(r,`text/xml`),a=i.getElementsByTagName(`parsererror`);if(a.length>0){console.error(`Parser error in ${n}:`,a[0].textContent);continue}let o=Array.from(i.getElementsByTagName(`member`)),s=i.getElementsByTagName(`callbacks`);for(let e of s){let t=e.getAttribute(`name`),n=e.getElementsByTagName(`callback`);for(let e of n){let n=`M:${t}::${e.getAttribute(`name`)}`;e.setAttribute(`name`,n),e.setAttribute(`is-callback`,`true`),o.push(e)}}console.log(`Loading ${n}: ${o.length} members found.`);for(let e of o)try{let n=e.getAttribute(`name`);if(!n)continue;let r=n.trim().match(/^([A-Z]):(.+)$/);if(!r)continue;let i=r[1],a=r[2].trim(),o=a.match(/\(([^)]*)\)/),s=o&&o[1]?o[1].split(`,`).map(e=>e.trim()).filter(Boolean):[],c=a.split(`(`)[0].trim().split(`::`).map(e=>e.trim()),l=t,u=c.length>1?c[c.length-2]:null;for(let t=0;t<c.length;t++){let n=c[t],r=t===c.length-1;r&&i!==`T`?(l._members||=[],l._members.push(bt(e,i,a,n,s,u))):(l[n]||(l[n]={}),l=l[n],r&&(l._members||=[],l._members.push(bt(e,i,a,n,s,u))))}}catch(e){console.error(`Error parsing member in ${n}:`,e)}}catch(e){console.error(`Error loading/parsing ${n}:`,e)}return console.log(`Final apiData namespaces:`,Object.keys(t)),t.CometEditor&&t.CometEditor.GUI&&console.log(`Final GUI members:`,t.CometEditor.GUI._members?.length),t}function bt(e,t,n,r,i,a){let o=Array.from(e.getElementsByTagName(`param`)).map((e,t)=>({name:e.getAttribute(`name`),type:i[t]||null,desc:e.textContent.trim(),default:e.getAttribute(`default`)})),s=e.getAttribute(`return`),c=e.getAttribute(`type`),l=e.getAttribute(`constructor`)===`true`||t===`M`&&r===a,u=e.tagName.toLowerCase()===`callback`||e.getAttribute(`is-callback`)===`true`;return{type:t,fullName:n,name:r,sigTypes:i,summary:e.getElementsByTagName(`summary`)[0]?.textContent?.trim()||``,params:o,returnType:s||null,returnDesc:e.getElementsByTagName(`return`)[0]?.textContent?.trim()||e.getElementsByTagName(`returns`)[0]?.textContent?.trim()||``,fieldType:c||null,isConstructor:l,isCallback:u}}function xt(e,t,n=!1){e.innerHTML=``;let r=decodeURIComponent(st().replace(`#docs`,``).substring(1)),i=(e,t,a=``)=>{let o=document.createElement(`div`);o.className=`tree-item`;let s=a?`${a}::${e}`:e,c=Object.keys(t).filter(e=>e!==`_members`).length>0,l=n||dt.has(s);o.innerHTML=`
      <div class="tree-node ${r===s?`active`:``}" data-path="${s}">
        <span class="tree-toggle" style="width:20px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;">
          ${c?`<i class="fas ${l?`fa-chevron-down`:`fa-chevron-right`}" style="font-size:0.75rem;"></i>`:`<i class="fas fa-cube" style="font-size:0.7rem;color:var(--text-dim);"></i>`}
        </span>
        <span class="tree-label" style="cursor:pointer;">${e}</span>
      </div>
      <div class="tree-children" style="display:${l?`block`:`none`};">
      </div>
    `;let u=o.querySelector(`.tree-node`),d=o.querySelector(`.tree-toggle`),f=o.querySelector(`.tree-children`),p=d.querySelector(`i`);return d.addEventListener(`click`,e=>{if(!c)return;e.stopPropagation();let t=f.style.display===`block`;f.style.display=t?`none`:`block`,p&&(p.className=`fas ${t?`fa-chevron-right`:`fa-chevron-down`}`),t?dt.delete(s):dt.add(s)}),u.addEventListener(`click`,e=>{e.stopPropagation(),ct(`/docs/${s}`)}),Object.keys(t).filter(e=>e!==`_members`).sort().forEach(e=>{f.appendChild(i(e,t[e],s))}),o};Object.keys(t).sort().forEach(n=>{e.appendChild(i(n,t[n]))})}function St(e){let t=e.split(`::`),n=lt;for(let e of t)n=n?.[e];if(!n)return`<h2>Element not found</h2>`;let r=n._members||[],i=r.find(e=>e.type===`T`),a=r.filter(e=>e.isConstructor),o=r.filter(e=>e.isCallback),s=r.filter(e=>e.type===`F`),c=r.filter(e=>e.type===`M`&&!e.isConstructor&&!e.isCallback),l=r.filter(e=>e.type===`P`),u=Object.keys(n).filter(e=>e!==`_members`).map(e=>({name:e,summary:n[e]._members?.find(e=>e.type===`T`)?.summary||``}));return`
    <div class="api-member">
      <div style="color:var(--accent-color);font-weight:600;margin-bottom:0.25rem;font-size:0.9rem;">${t.slice(0,-1).join(`::`)||`Global`}</div>
      <h1 style="font-size:2.5rem;margin:0 0 1rem;">${t[t.length-1]}</h1>
      ${i?`<p style="font-size:1.1rem;color:var(--text-dim);margin-bottom:2rem;">${i.summary}</p>`:``}

      ${u.length>0?`
        <div class="api-section">
          <h3>Namespaces & Classes</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem;">
            ${u.map(t=>`
              <a href="/docs/${e}::${t.name}" class="api-item" style="display:block;">
                <div class="api-item-name" style="color:var(--accent-color);">${t.name}</div>
                <div style="color:var(--text-dim);font-size:0.85rem;">${t.summary}</div>
              </a>
            `).join(``)}
          </div>
        </div>
      `:``}

      ${a.length>0?`
        <div class="api-section">
          <h3>Constructors</h3>
          ${a.map(e=>Tt(e)).join(``)}
        </div>
      `:``}

      ${o.length>0?`
        <div class="api-section">
          <h3>Callbacks</h3>
          ${o.map(e=>Tt(e)).join(``)}
        </div>
      `:``}

      ${s.length>0?`
        <div class="api-section">
          <h3>Fields</h3>
          ${s.map(e=>Ct(e)).join(``)}
        </div>
      `:``}

      ${c.length>0?`
        <div class="api-section">
          <h3>Methods</h3>
          ${c.map(e=>Tt(e)).join(``)}
        </div>
      `:``}

      ${l.length>0?`
        <div class="api-section">
          <h3>Properties</h3>
          ${l.map(e=>wt(e)).join(``)}
        </div>
      `:``}
    </div>
  `}function Ct(e){let t=e.fieldType||``;return`
    <div class="api-item">
      <div style="display:flex;align-items:baseline;gap:0.5rem;font-family:monospace;font-size:1rem;margin-bottom:0.5rem;">
        ${t?`<span style="color:#61afef;">${Et(t)}</span>`:``}
        <span style="font-weight:700;color:#fff;">${e.name}</span>
      </div>
      <p style="color:var(--text-dim);">${e.summary}</p>
    </div>
  `}function wt(e){let t=e.fieldType||e.sigTypes?.[0]||``;return`
    <div class="api-item">
      <div style="display:flex;align-items:baseline;gap:0.5rem;font-family:monospace;font-size:1rem;margin-bottom:0.5rem;">
        ${t?`<span style="color:#61afef;">${Et(t)}</span>`:``}
        <span style="font-weight:700;color:#fff;">${e.name}</span>
      </div>
      <p style="color:var(--text-dim);">${e.summary}</p>
    </div>
  `}function Tt(e){let t=e.isConstructor?``:e.returnType||`void`,n=e.params.map(e=>`<span style="color:#61afef;">${e.type?Et(e.type):``}</span>${e.type?` `:``}<span style="color:#fff;">${e.name||``}</span>`).join(`<span style="color:var(--text-dim);">, </span>`);return`
    <div class="api-item">
      <div style="font-family:monospace;font-size:1rem;margin-bottom:0.75rem;display:flex;flex-wrap:wrap;align-items:baseline;gap:0.25rem;">
        ${t?`<span style="color:#61afef;">${Et(t)}</span>`:``}
        <span style="font-weight:700;color:#fff;margin-left:${t?`0.4rem`:`0`};">${e.name}</span>
        <span style="color:var(--text-dim);">(</span>${n}<span style="color:var(--text-dim);">)</span>
      </div>
      <p style="color:var(--text-dim);margin-bottom:${e.params.length>0||e.returnDesc?`1rem`:`0`};">${e.summary}</p>
      ${e.params.length>0?`
        <div style="margin-bottom: 1rem;">
          <div style="font-size:0.8rem;text-transform:uppercase;color:var(--accent-color);font-weight:600;margin-bottom:0.5rem;">Parameters</div>
          ${e.params.map(e=>`
            <div style="display:flex;gap:1rem;font-size:0.9rem;background:rgba(0,0,0,0.2);padding:0.5rem 1rem;border-radius:4px;margin-bottom:0.25rem;align-items:baseline;flex-wrap:wrap;">
              ${e.type?`<span style="color:#61afef;font-family:monospace;">${Et(e.type)}</span>`:``}
              <code style="color:#fff;">${e.name||``}</code>
              ${e.desc?`<span style="color:var(--text-dim);">— ${e.desc}</span>`:``}
              ${e.default?`<span style="color:var(--text-dim);font-style:italic;">(default: ${e.default})</span>`:``}
            </div>
          `).join(``)}
        </div>
      `:``}
      ${e.returnDesc?`
        <div>
          <div style="font-size:0.8rem;text-transform:uppercase;color:var(--accent-color);font-weight:600;margin-bottom:0.5rem;">Returns</div>
          <div style="font-size:0.9rem;background:rgba(0,0,0,0.2);padding:0.5rem 1rem;border-radius:4px;color:var(--text-dim); display: flex; gap: 0.5rem; align-items: baseline; flex-wrap: wrap;">
            ${e.returnType?`<span style="font-family:monospace;color:#61afef;">${Et(e.returnType)}</span> <span style="color:var(--text-dim);">— </span> `:``}
            <span>${e.returnDesc}</span>
          </div>
        </div>
      `:``}
    </div>
  `}function Et(e){if(!e)return``;let t=e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`),n=t.match(/^array<(.+)>$/);if(n){let e=n[1];return`<span style="color:#61afef;">array&lt;${Et(e)}&gt;</span>`}let r=t.replace(/[?*&]/g,``).trim(),i=ut.find(e=>e===r||e.endsWith(`::${r}`));return i?`<a href="/docs/${i}" style="color:#61afef;text-decoration:underline;">${t}</a>`:`<span style="color:#61afef;">${t}</span>`}function Dt(e,t=``){let n=[];return Object.keys(e).forEach(r=>{if(r===`_members`)return;let i=t?`${t}::${r}`:r;n.push(i),n=n.concat(Dt(e[r],i))}),n}function Ot(e,t){let n={},r=(e,n)=>{let i=!1;if(e._members){let r=e._members.filter(e=>e.name.toLowerCase().includes(t)||e.summary.toLowerCase().includes(t));r.length>0&&(n._members=r,i=!0)}return Object.keys(e).forEach(a=>{if(a===`_members`)return;let o={},s=r(e[a],o),c=a.toLowerCase().includes(t);if((s||c)&&(n[a]=o,i=!0,c&&e[a]._members&&(!o._members||!o._members.find(e=>e.type===`T`)))){let t=e[a]._members.find(e=>e.type===`T`);t&&(o._members||=[],o._members.unshift(t))}}),i};return r(e,n),n}function kt(){return`
    <div style="text-align:center;padding-top:5rem;padding-bottom:5rem;">
      <i class="fas fa-book" style="font-size:5rem;color:var(--accent-color);margin-bottom:2rem;"></i>
      <h1>Comet Engine API Documentation</h1>
      <p style="color:var(--text-dim);max-width:600px;margin:1rem auto 3rem;">
        Explore the classes, methods, and properties available in CometEngine.
      </p>
    </div>
  `}function At(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function jt(e){if(Array.isArray(e))return e}function Mt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Nt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pt(e,t){return jt(e)||Mt(e,t)||Ft(e,t)||Nt()}function Ft(e,t){if(e){if(typeof e==`string`)return At(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?At(e,t):void 0}}var It=Object.entries,Lt=Object.setPrototypeOf,Rt=Object.isFrozen,zt=Object.getPrototypeOf,Bt=Object.getOwnPropertyDescriptor,Vt=Object.freeze,Ht=Object.seal,Ut=Object.create,Wt=typeof Reflect<`u`&&Reflect,Gt=Wt.apply,Kt=Wt.construct;Vt||=function(e){return e},Ht||=function(e){return e},Gt||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Kt||=function(e){return new e(...[...arguments].slice(1))};var qt=pn(Array.prototype.forEach),Jt=pn(Array.prototype.lastIndexOf),Yt=pn(Array.prototype.pop),Xt=pn(Array.prototype.push),Zt=pn(Array.prototype.splice),Qt=Array.isArray,$t=pn(String.prototype.toLowerCase),en=pn(String.prototype.toString),tn=pn(String.prototype.match),nn=pn(String.prototype.replace),rn=pn(String.prototype.indexOf),an=pn(String.prototype.trim),on=pn(Number.prototype.toString),sn=pn(Boolean.prototype.toString),cn=typeof BigInt>`u`?null:pn(BigInt.prototype.toString),ln=typeof Symbol>`u`?null:pn(Symbol.prototype.toString),W=pn(Object.prototype.hasOwnProperty),un=pn(Object.prototype.toString),dn=pn(RegExp.prototype.test),fn=mn(TypeError);function pn(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return Gt(e,t,n)}}function mn(e){return function(){return Kt(e,[...arguments])}}function G(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:$t;if(Lt&&Lt(e,null),!Qt(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(Rt(t)||(t[r]=e),i=e)}e[i]=!0}return e}function hn(e){for(let t=0;t<e.length;t++)W(e,t)||(e[t]=null);return e}function gn(e){let t=Ut(null);for(let r of It(e)){var n=Pt(r,2);let i=n[0],a=n[1];W(e,i)&&(Qt(a)?t[i]=hn(a):a&&typeof a==`object`&&a.constructor===Object?t[i]=gn(a):t[i]=a)}return t}function _n(e){switch(typeof e){case`string`:return e;case`number`:return on(e);case`boolean`:return sn(e);case`bigint`:return cn?cn(e):`0`;case`symbol`:return ln?ln(e):`Symbol()`;case`undefined`:return un(e);case`function`:case`object`:{if(e===null)return un(e);let t=e,n=vn(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:un(e)}return un(e)}default:return un(e)}}function vn(e,t){for(;e!==null;){let n=Bt(e,t);if(n){if(n.get)return pn(n.get);if(typeof n.value==`function`)return pn(n.value)}e=zt(e)}function n(){return null}return n}function yn(e){try{return dn(e,``),!0}catch{return!1}}var bn=Vt(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),xn=Vt(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),Sn=Vt([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),Cn=Vt([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),wn=Vt(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),Tn=Vt([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),En=Vt([`#text`]),Dn=Vt(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),On=Vt(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),kn=Vt(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),An=Vt([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),jn=Ht(/{{[\w\W]*|^[\w\W]*}}/g),Mn=Ht(/<%[\w\W]*|^[\w\W]*%>/g),Nn=Ht(/\${[\w\W]*/g),Pn=Ht(/^data-[\-\w.\u00B7-\uFFFF]+$/),Fn=Ht(/^aria-[\-\w]+$/),In=Ht(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Ln=Ht(/^(?:\w+script|data):/i),Rn=Ht(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),zn=Ht(/^html$/i),Bn=Ht(/^[a-z][.\w]*(-[.\w]+)+$/i),Vn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Hn=function(){return typeof window>`u`?null:window},Un=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Wn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Gn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Hn(),t=e=>Gn(e);if(t.version=`3.4.9`,t.removed=[],!e||!e.document||e.document.nodeType!==Vn.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=vn(d,`cloneNode`),p=vn(d,`remove`),m=vn(d,`nextSibling`),h=vn(d,`childNodes`),g=vn(d,`parentNode`),_=vn(d,`shadowRoot`),v=vn(d,`attributes`),y=o&&o.prototype?vn(o.prototype,`nodeType`):null,b=o&&o.prototype?vn(o.prototype,`nodeName`):null;if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let x,S=``,C,w=!1,T=0,E=function(){if(T>0)throw fn(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},D=function(e){E(),T++;try{return x.createHTML(e)}finally{T--}},O=function(e){E(),T++;try{return x.createScriptURL(e)}finally{T--}},k=function(){return w||=(C=Un(u,i),!0),C},A=n,j=A.implementation,M=A.createNodeIterator,ee=A.createDocumentFragment,te=A.getElementsByTagName,N=r.importNode,P=Wn();t.isSupported=typeof It==`function`&&typeof g==`function`&&j&&j.createHTMLDocument!==void 0;let F=jn,I=Mn,L=Nn,R=Pn,ne=Fn,re=Ln,ie=Rn,ae=Bn,oe=In,z=null,se=G({},[...bn,...xn,...Sn,...wn,...En]),B=null,ce=G({},[...Dn,...On,...kn,...An]),V=Object.seal(Ut(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),le=null,ue=null,de=Object.seal(Ut(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),fe=!0,pe=!0,me=!1,he=!0,ge=!1,_e=!0,ve=!1,ye=!1,be=!1,xe=!1,Se=!1,Ce=!1,we=!0,Te=!1,Ee=`user-content-`,De=!0,Oe=!1,ke={},Ae=null,je=G({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),Me=null,Ne=G({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Pe=null,Fe=G({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),Ie=`http://www.w3.org/1998/Math/MathML`,Le=`http://www.w3.org/2000/svg`,Re=`http://www.w3.org/1999/xhtml`,ze=Re,Be=!1,Ve=null,He=G({},[Ie,Le,Re],en),Ue=G({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),We=G({},[`annotation-xml`]),Ge=G({},[`title`,`style`,`font`,`a`,`script`]),Ke=null,qe=[`application/xhtml+xml`,`text/html`],H=null,Je=null,Ye=n.createElement(`form`),Xe=function(e){return e instanceof RegExp||e instanceof Function},Ze=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Je&&Je===e)return;(!e||typeof e!=`object`)&&(e={}),e=gn(e),Ke=qe.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,H=Ke===`application/xhtml+xml`?en:$t,z=W(e,`ALLOWED_TAGS`)&&Qt(e.ALLOWED_TAGS)?G({},e.ALLOWED_TAGS,H):se,B=W(e,`ALLOWED_ATTR`)&&Qt(e.ALLOWED_ATTR)?G({},e.ALLOWED_ATTR,H):ce,Ve=W(e,`ALLOWED_NAMESPACES`)&&Qt(e.ALLOWED_NAMESPACES)?G({},e.ALLOWED_NAMESPACES,en):He,Pe=W(e,`ADD_URI_SAFE_ATTR`)&&Qt(e.ADD_URI_SAFE_ATTR)?G(gn(Fe),e.ADD_URI_SAFE_ATTR,H):Fe,Me=W(e,`ADD_DATA_URI_TAGS`)&&Qt(e.ADD_DATA_URI_TAGS)?G(gn(Ne),e.ADD_DATA_URI_TAGS,H):Ne,Ae=W(e,`FORBID_CONTENTS`)&&Qt(e.FORBID_CONTENTS)?G({},e.FORBID_CONTENTS,H):je,le=W(e,`FORBID_TAGS`)&&Qt(e.FORBID_TAGS)?G({},e.FORBID_TAGS,H):gn({}),ue=W(e,`FORBID_ATTR`)&&Qt(e.FORBID_ATTR)?G({},e.FORBID_ATTR,H):gn({}),ke=W(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?gn(e.USE_PROFILES):e.USE_PROFILES:!1,fe=e.ALLOW_ARIA_ATTR!==!1,pe=e.ALLOW_DATA_ATTR!==!1,me=e.ALLOW_UNKNOWN_PROTOCOLS||!1,he=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ge=e.SAFE_FOR_TEMPLATES||!1,_e=e.SAFE_FOR_XML!==!1,ve=e.WHOLE_DOCUMENT||!1,xe=e.RETURN_DOM||!1,Se=e.RETURN_DOM_FRAGMENT||!1,Ce=e.RETURN_TRUSTED_TYPE||!1,be=e.FORCE_BODY||!1,we=e.SANITIZE_DOM!==!1,Te=e.SANITIZE_NAMED_PROPS||!1,De=e.KEEP_CONTENT!==!1,Oe=e.IN_PLACE||!1,oe=yn(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:In,ze=typeof e.NAMESPACE==`string`?e.NAMESPACE:Re,Ue=W(e,`MATHML_TEXT_INTEGRATION_POINTS`)&&e.MATHML_TEXT_INTEGRATION_POINTS&&typeof e.MATHML_TEXT_INTEGRATION_POINTS==`object`?gn(e.MATHML_TEXT_INTEGRATION_POINTS):G({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),We=W(e,`HTML_INTEGRATION_POINTS`)&&e.HTML_INTEGRATION_POINTS&&typeof e.HTML_INTEGRATION_POINTS==`object`?gn(e.HTML_INTEGRATION_POINTS):G({},[`annotation-xml`]);let t=W(e,`CUSTOM_ELEMENT_HANDLING`)&&e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING==`object`?gn(e.CUSTOM_ELEMENT_HANDLING):Ut(null);if(V=Ut(null),W(t,`tagNameCheck`)&&Xe(t.tagNameCheck)&&(V.tagNameCheck=t.tagNameCheck),W(t,`attributeNameCheck`)&&Xe(t.attributeNameCheck)&&(V.attributeNameCheck=t.attributeNameCheck),W(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(V.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),ge&&(pe=!1),Se&&(xe=!0),ke&&(z=G({},En),B=Ut(null),ke.html===!0&&(G(z,bn),G(B,Dn)),ke.svg===!0&&(G(z,xn),G(B,On),G(B,An)),ke.svgFilters===!0&&(G(z,Sn),G(B,On),G(B,An)),ke.mathMl===!0&&(G(z,wn),G(B,kn),G(B,An))),de.tagCheck=null,de.attributeCheck=null,W(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?de.tagCheck=e.ADD_TAGS:Qt(e.ADD_TAGS)&&(z===se&&(z=gn(z)),G(z,e.ADD_TAGS,H))),W(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?de.attributeCheck=e.ADD_ATTR:Qt(e.ADD_ATTR)&&(B===ce&&(B=gn(B)),G(B,e.ADD_ATTR,H))),W(e,`ADD_URI_SAFE_ATTR`)&&Qt(e.ADD_URI_SAFE_ATTR)&&G(Pe,e.ADD_URI_SAFE_ATTR,H),W(e,`FORBID_CONTENTS`)&&Qt(e.FORBID_CONTENTS)&&(Ae===je&&(Ae=gn(Ae)),G(Ae,e.FORBID_CONTENTS,H)),W(e,`ADD_FORBID_CONTENTS`)&&Qt(e.ADD_FORBID_CONTENTS)&&(Ae===je&&(Ae=gn(Ae)),G(Ae,e.ADD_FORBID_CONTENTS,H)),De&&(z[`#text`]=!0),ve&&G(z,[`html`,`head`,`body`]),z.table&&(G(z,[`tbody`]),delete le.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw fn(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw fn(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=x;x=e.TRUSTED_TYPES_POLICY;try{S=D(``)}catch(e){throw x=t,e}}else e.TRUSTED_TYPES_POLICY===null?(x=void 0,S=``):(x===void 0&&(x=k()),x&&typeof S==`string`&&(S=D(``)));(P.uponSanitizeElement.length>0||P.uponSanitizeAttribute.length>0)&&z===se&&(z=gn(z)),P.uponSanitizeAttribute.length>0&&B===ce&&(B=gn(B)),Vt&&Vt(e),Je=e},Qe=G({},[...xn,...Sn,...Cn]),$e=G({},[...wn,...Tn]),et=function(e){let t=g(e);(!t||!t.tagName)&&(t={namespaceURI:ze,tagName:`template`});let n=$t(e.tagName),r=$t(t.tagName);return Ve[e.namespaceURI]?e.namespaceURI===Le?t.namespaceURI===Re?n===`svg`:t.namespaceURI===Ie?n===`svg`&&(r===`annotation-xml`||Ue[r]):!!Qe[n]:e.namespaceURI===Ie?t.namespaceURI===Re?n===`math`:t.namespaceURI===Le?n===`math`&&We[r]:!!$e[n]:e.namespaceURI===Re?t.namespaceURI===Le&&!We[r]||t.namespaceURI===Ie&&!Ue[r]?!1:!$e[n]&&(Ge[n]||!Qe[n]):!!(Ke===`application/xhtml+xml`&&Ve[e.namespaceURI]):!1},U=function(e){Xt(t.removed,{element:e});try{g(e).removeChild(e)}catch{if(p(e),!g(e))throw fn(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},tt=function(e){let t=h?h(e):e.childNodes;if(t){let e=[];qt(t,t=>{Xt(e,t)}),qt(e,e=>{try{p(e)}catch{}})}let n=v?v(e):null;if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;if(typeof i==`string`)try{e.removeAttribute(i)}catch{}}},nt=function(e,n){try{Xt(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Xt(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(xe||Se)try{U(n)}catch{}else try{n.setAttribute(e,``)}catch{}},rt=function(e){let t=v?v(e):e.attributes;if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;if(!(typeof i!=`string`||B[H(i)]))try{e.removeAttribute(i)}catch{}}},it=function(e){let t=[e];for(;t.length>0;){let e=t.pop();(y?y(e):e.nodeType)===Vn.element&&rt(e);let n=h?h(e):e.childNodes;if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},at=function(e){let t=null,r=null;if(be)e=`<remove></remove>`+e;else{let t=tn(e,/^[\r\n\t ]+/);r=t&&t[0]}Ke===`application/xhtml+xml`&&ze===Re&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=x?D(e):e;if(ze===Re)try{t=new l().parseFromString(i,Ke)}catch{}if(!t||!t.documentElement){t=j.createDocument(ze,`template`,null);try{t.documentElement.innerHTML=Be?S:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),ze===Re?te.call(t,ve?`html`:`body`)[0]:ve?t.documentElement:a},ot=function(e){return M.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},st=function(e){e.normalize();let t=M.call(e.ownerDocument||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),n=t.nextNode();for(;n;){let e=n.data;qt([F,I,L],t=>{e=nn(e,t,` `)}),n.data=e,n=t.nextNode()}let r=e.querySelectorAll?.call(e,`template`)??[];qt(Array.from(r),e=>{lt(e.content)&&st(e.content)})},ct=function(e){let t=b?b(e):null;return typeof t!=`string`||H(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==v(e)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==y(e)||e.childNodes!==h(e)},lt=function(e){if(!y||typeof e!=`object`||!e)return!1;try{return y(e)===Vn.documentFragment}catch{return!1}},ut=function(e){if(!y||typeof e!=`object`||!e)return!1;try{return typeof y(e)==`number`}catch{return!1}};function dt(e,n,r){qt(e,e=>{e.call(t,n,r,Je)})}let ft=function(e){let n=null;if(dt(P.beforeSanitizeElements,e,null),ct(e))return U(e),!0;let r=H(b?b(e):e.nodeName);if(dt(P.uponSanitizeElement,e,{tagName:r,allowedTags:z}),_e&&e.hasChildNodes()&&!ut(e.firstElementChild)&&dn(/<[/\w!]/g,e.innerHTML)&&dn(/<[/\w!]/g,e.textContent)||_e&&e.namespaceURI===Re&&r===`style`&&ut(e.firstElementChild)||e.nodeType===Vn.progressingInstruction||_e&&e.nodeType===Vn.comment&&dn(/<[/\w]/g,e.data))return U(e),!0;if(le[r]||!(de.tagCheck instanceof Function&&de.tagCheck(r))&&!z[r]){if(!le[r]&&ht(r)&&(V.tagNameCheck instanceof RegExp&&dn(V.tagNameCheck,r)||V.tagNameCheck instanceof Function&&V.tagNameCheck(r)))return!1;if(De&&!Ae[r]){let t=g(e),n=h(e);if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=Oe?n[i]:f(n[i],!0);t.insertBefore(r,m(e))}}}return U(e),!0}return(y?y(e):e.nodeType)===Vn.element&&!et(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&dn(/<\/no(script|embed|frames)/i,e.innerHTML)?(U(e),!0):(ge&&e.nodeType===Vn.text&&(n=e.textContent,qt([F,I,L],e=>{n=nn(n,e,` `)}),e.textContent!==n&&(Xt(t.removed,{element:e.cloneNode()}),e.textContent=n)),dt(P.afterSanitizeElements,e,null),!1)},pt=function(e,t,r){if(ue[t]||we&&(t===`id`||t===`name`)&&(r in n||r in Ye))return!1;let i=B[t]||de.attributeCheck instanceof Function&&de.attributeCheck(t,e);if(!(pe&&!ue[t]&&dn(R,t))&&!(fe&&dn(ne,t))){if(!i||ue[t]){if(!(ht(e)&&(V.tagNameCheck instanceof RegExp&&dn(V.tagNameCheck,e)||V.tagNameCheck instanceof Function&&V.tagNameCheck(e))&&(V.attributeNameCheck instanceof RegExp&&dn(V.attributeNameCheck,t)||V.attributeNameCheck instanceof Function&&V.attributeNameCheck(t,e))||t===`is`&&V.allowCustomizedBuiltInElements&&(V.tagNameCheck instanceof RegExp&&dn(V.tagNameCheck,r)||V.tagNameCheck instanceof Function&&V.tagNameCheck(r))))return!1}else if(!Pe[t]&&!dn(oe,nn(r,ie,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&rn(r,`data:`)===0&&Me[e])&&!(me&&!dn(re,nn(r,ie,``)))&&r)return!1}return!0},mt=G({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),ht=function(e){return!mt[$t(e)]&&dn(ae,e)},gt=function(e){dt(P.beforeSanitizeAttributes,e,null);let n=e.attributes;if(!n||ct(e))return;let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:B,forceKeepAttr:void 0},i=n.length;for(;i--;){let a=n[i],o=a.name,s=a.namespaceURI,c=a.value,l=H(o),d=c,f=o===`value`?d:an(d);if(r.attrName=l,r.attrValue=f,r.keepAttr=!0,r.forceKeepAttr=void 0,dt(P.uponSanitizeAttribute,e,r),f=r.attrValue,Te&&(l===`id`||l===`name`)&&rn(f,Ee)!==0&&(nt(o,e),f=Ee+f),_e&&dn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,f)){nt(o,e);continue}if(l===`attributename`&&tn(f,`href`)){nt(o,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){nt(o,e);continue}if(!he&&dn(/\/>/i,f)){nt(o,e);continue}ge&&qt([F,I,L],e=>{f=nn(f,e,` `)});let p=H(e.nodeName);if(!pt(p,l,f)){nt(o,e);continue}if(x&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!s)switch(u.getAttributeType(p,l)){case`TrustedHTML`:f=D(f);break;case`TrustedScriptURL`:f=O(f);break}if(f!==d)try{s?e.setAttributeNS(s,o,f):e.setAttribute(o,f),ct(e)?U(e):Yt(t.removed)}catch{nt(o,e)}}dt(P.afterSanitizeAttributes,e,null)},_t=function(e){let t=null,n=ot(e);for(dt(P.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(dt(P.uponSanitizeShadowNode,t,null),ft(t),gt(t),lt(t.content)&&_t(t.content),(y?y(t):t.nodeType)===Vn.element){let e=_?_(t):t.shadowRoot;lt(e)&&(vt(e),_t(e))}dt(P.afterSanitizeShadowDOM,e,null)},vt=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){_t(e.shadow);continue}let n=e.node,r=(y?y(n):n.nodeType)===Vn.element,i=h?h(n):n.childNodes;if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=b?b(n):null;if(typeof e==`string`&&H(e)===`template`){let e=n.content;lt(e)&&t.push({node:e,shadow:null})}}if(r){let e=_?_(n):n.shadowRoot;lt(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(Be=!e,Be&&(e=`<!-->`),typeof e!=`string`&&!ut(e)&&(e=_n(e),typeof e!=`string`))throw fn(`dirty is not a string, aborting`);if(!t.isSupported)return e;ye||Ze(n),t.removed=[];let c=Oe&&typeof e!=`string`&&ut(e);if(c){let t=b?b(e):e.nodeName;if(typeof t==`string`){let e=H(t);if(!z[e]||le[e])throw fn(`root node is forbidden and cannot be sanitized in-place`)}if(ct(e))throw fn(`root node is clobbered and cannot be sanitized in-place`);try{vt(e)}catch(t){throw tt(e),t}}else if(ut(e))i=at(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===Vn.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),vt(a);else{if(!xe&&!ge&&!ve&&e.indexOf(`<`)===-1)return x&&Ce?D(e):e;if(i=at(e),!i)return xe?null:Ce?S:``}i&&be&&U(i.firstChild);let l=ot(c?e:i);try{for(;o=l.nextNode();)ft(o),gt(o),lt(o.content)&&_t(o.content)}catch(t){throw c&&tt(e),t}if(c)return qt(t.removed,e=>{e.element&&it(e.element)}),ge&&st(e),e;if(xe){if(ge&&st(i),Se)for(s=ee.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(B.shadowroot||B.shadowrootmode)&&(s=N.call(r,s,!0)),s}let u=ve?i.outerHTML:i.innerHTML;return ve&&z[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&dn(zn,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),ge&&qt([F,I,L],e=>{u=nn(u,e,` `)}),x&&Ce?D(u):u},t.setConfig=function(){Ze(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),ye=!0},t.clearConfig=function(){Je=null,ye=!1,x=C,S=``},t.isValidAttribute=function(e,t,n){return Je||Ze({}),pt(H(e),H(t),n)},t.addHook=function(e,t){typeof t==`function`&&Xt(P[e],t)},t.removeHook=function(e,t){if(t!==void 0){let n=Jt(P[e],t);return n===-1?void 0:Zt(P[e],n,1)[0]}return Yt(P[e])},t.removeHooks=function(e){P[e]=[]},t.removeAllHooks=function(){P=Wn()},t}var Kn=Gn(),qn=[{id:`sprite-rendering`,title:`Sprite Rendering & the Sprite Editor`,icon:`fa-image`,category:`2D Graphics`,blurb:`Textures, sprites, atlases, 9-slicing and everything the SpriteRenderer can do.`,md:`# Sprite Rendering & the Sprite Editor

Sprites are the bread and butter of any 2D game. In this tutorial you will import a texture, slice it into sprites with the **Sprite Editor**, display it with a **SpriteRenderer**, and drive all of it from AngelScript — tinting, flipping, 9-slicing and swapping materials at runtime.

![The Comet Engine editor: Scene view, Game view, Hierarchy, Inspector and the Project panel.](/tutorials/editor-overview.png)

## Textures and sprites

Comet makes a clear distinction between the two:

- A **Texture** is the image file you import (\`.png\`, \`.jpg\`, ...). It owns GPU memory and sampling settings.
- A **Sprite** is a rectangular *region* of a texture, plus rendering metadata: a pivot, a pixels-per-unit value and optional 9-slice borders. One texture can contain a single sprite or a whole sprite sheet.

When you drop an image into your project, select it in the **Project** panel and the Inspector shows its import settings:

| Setting | What it does |
|---------|--------------|
| **Texture Type** | \`Sprite and UI\` for regular art, \`Normal Map\` for lighting relief maps. |
| **Filter Type** | \`No Filter\` (crisp pixel art), \`Bilinear\` or \`Trilinear\` (smooth scaling). |
| **Wrap Mode** | \`Repeat\`, \`Mirror Repeat\`, \`Clamp Edge\` or \`Clamp Border\` — how UVs outside 0–1 sample. |
| **Pixels Per Unit** | How many texture pixels equal one world unit. A 128 px sprite at 128 PPU is exactly 1 unit wide. |
| **Modify Pixels** | Keeps a CPU-side copy so scripts can call \`GetPixels()\` / \`SetPixelAt()\`. Costs memory — leave it off unless you need it. |

> [!TIP]
> For pixel art, set **Filter Type** to \`No Filter\` and pick a Pixels Per Unit that matches your tile size (for example 16). Your art will stay razor sharp at any zoom level.

## Slicing with the Sprite Editor

With a texture selected, set its **Texture Type** to \`Sprite and UI\` and click **Open Sprite Editor** in the Inspector.

![The Sprite Editor slicing a sprite sheet into a grid of sprites.](/tutorials/sprite-editor.png)

The Sprite Editor has four tools, selectable from its toolbar:

1. **Sprite Creation** — draw and edit the sprite rectangles themselves.
2. **Secondary Textures** — attach a normal map so 2D lights give your sprite relief.
3. **Physic Shape** — author the collision polygon colliders will use for this sprite.
4. **Shadow Caster** — author the occluder polygon used by 2D shadow casting.

### Automatic and grid slicing

For sprite sheets you rarely slice by hand. Open the slicing options and choose a **Slice Mode**:

- **Automatic** — detects sprites from transparent gaps.
- **Grid Size** — cuts the sheet into cells of a fixed pixel size.
- **Columns & Rows** — cuts the sheet into an exact number of divisions.

Set the **Pivot** for the generated sprites (usually \`Middle\`, or \`Bottom\` for characters standing on the ground), optionally add an **Offset** and **Padding** between cells, enable **Remove Empty Rects** to skip blank cells, and press **Apply Slice**.

### Manual editing, pivots and borders

Click anywhere on the texture to create a new sprite rect, then drag its corners to fit. For each sprite the Inspector shows:

- **Rect** — position and size in pixels.
- **Pivot** — the sprite's origin: \`Middle\`, \`Bottom Left\`, \`Custom\`... Rotation and scaling happen around it.
- **Borders** — left/right/top/bottom margins in pixels, drawn as green lines. These define the 9-slice regions used by the \`Sliced\` and \`Tiled\` render modes below.

## The SpriteRenderer component

Add one with **Add Behaviour → Sprite Renderer** on any entity. Its Inspector properties:

| Property | Meaning |
|----------|---------|
| **Sprite** | The sprite to draw. |
| **Render Mode** | \`Simple\`, \`Sliced\` (9-slice) or \`Tiled\`. |
| **Size** | Target size in world units — only used by \`Sliced\` and \`Tiled\`. |
| **Color** | Tint multiplied over the sprite (white = unchanged). |
| **Flip X / Flip Y** | Mirror the sprite on each axis. |
| **Sorting Layer** | Which named layer this renderer draws in. |
| **Order in Layer** | Draw order within that layer — higher renders on top. |
| **Sort Point** | Sort by the sprite's \`Center\` or its \`Pivot\`. |
| **Material** | Optional custom material/shader. |

### How sorting works

Comet renders **sorting layers** in the order they are defined in the project, and inside each layer sorts by **Order in Layer**. Two classic setups:

- Backgrounds on a \`Background\` layer, gameplay on \`Default\`, UI overlays on a front layer.
- A top-down game where characters sort among trees: give everything the same layer and set **Sort Point** to \`Pivot\` with pivots at the feet.

### 9-slicing: Sliced and Tiled modes

If a sprite has **Borders** defined in the Sprite Editor, the \`Sliced\` render mode stretches only the center while corners keep their size — perfect for panels and buttons of any size. \`Tiled\` repeats the center instead of stretching it. In both cases the **Size** property controls the final world-space size:

\`\`\`angelscript
using namespace CometEngine;

class PanelSetup : CometBehaviour
{
    void Start()
    {
        SpriteRenderer renderer = SpriteRenderer::Get(entity);
        renderer.renderMode = SpriteRenderMode::SLICED;
        renderer.size = Vector2(10.0F, 4.0F); // world units, borders stay crisp
    }
}
\`\`\`

## Controlling sprites from AngelScript

Every behaviour can grab the renderer on its entity with the static \`Get\` accessor. The pattern below is used all over the engine's sample project:

\`\`\`angelscript
using namespace CometEngine;

class PlayerVisuals : CometBehaviour
{
    private SpriteRenderer spriteRenderer;

    void Start()
    {
        spriteRenderer = SpriteRenderer::Get(entity);
    }

    void Update()
    {
        // Face the direction we are moving.
        float moveX = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1).x;
        if (moveX != 0.0F)
        {
            spriteRenderer.flipX = moveX < 0.0F;
        }

        // Flash red while hurt.
        if (Input::GetKeyDown(KeyCode::H))
        {
            spriteRenderer.color = Color(1.0F, 0.25F, 0.25F, 1.0F);
        }
    }
}
\`\`\`

> [!NOTE]
> \`SpriteRenderer::Get(entity)\` returns a reference to the behaviour attached to that entity — the same pattern works for every behaviour type (\`Camera::Get\`, \`Animator::Get\`, ...).

## Materials: shared vs. instanced

Renderers expose two material properties with very different behaviour:

- \`sharedMaterial\` — the material *asset*. Editing it changes **every** renderer that uses it.
- \`material\` — a per-renderer **clone**, created the first time you access it. Perfect for effects on a single entity, but you own its lifetime: call \`Material::Remove()\` when the entity is destroyed.

This dissolve effect from the Sandbox project animates a shader parameter on one sprite only:

\`\`\`angelscript
using namespace CometEngine;

class Disolve : CometBehaviour
{
    private Material spriteMaterial;
    private float value = 0.0F;

    void Start()
    {
        // Accessing .material clones the shared material for this renderer only.
        spriteMaterial = SpriteRenderer::Get(entity).material;
    }

    void Update()
    {
        spriteMaterial.SetFloat("value", value);
        value += Time::GetDeltaTime();
    }

    void OnDestroy()
    {
        // Instanced materials are yours to clean up.
        Material::Remove(spriteMaterial);
    }
}
\`\`\`

> [!WARNING]
> Forgetting \`Material::Remove()\` on an instanced material leaks it. If you only need to change the tint, prefer the \`color\` property — it does not clone anything.

## Loading sprites at runtime

Everything you assign in the Inspector can also be loaded from code through \`RuntimeAssets\`. Paths are relative to your project's \`Assets/\` folder, without extension:

\`\`\`angelscript
using namespace CometEngine;

class RuntimeSpriteSwap : CometBehaviour
{
    void Start()
    {
        // Load a sprite atlas and pick a sprite from it by name.
        SpriteAtlas atlas = cast<SpriteAtlas>(
            RuntimeAssets::LoadResource("Atlases/Characters", ResourceType::SPRITE_ATLAS));

        if (atlas !is null)
        {
            SpriteRenderer::Get(entity).sprite = atlas.GetSprite("hero_idle_0");
        }
    }
}
\`\`\`

For big assets prefer the asynchronous variant, \`RuntimeAssets::LoadResourceAsync()\`, which returns a \`ResourceAsyncOperation\` you can poll (\`isDone\`, \`progress\`, \`resource\`).

## Quick frame animation: AnimatedSprite

When all you need is a looping flipbook — a torch, a coin, an idle loop — the **AnimatedSprite** behaviour replaces the sprite every frame for you, no state machine required:

\`\`\`angelscript
using namespace CometEngine;

class TorchFlame : CometBehaviour
{
    void Start()
    {
        AnimatedSprite anim = AnimatedSprite::Get(entity);
        anim.speed = 12.0F;       // frames per second
        anim.loop = true;
        anim.randomStart = true;  // desync multiple torches
        anim.Play();
    }
}
\`\`\`

The frame list is edited in the Inspector (or from code with \`AddSprite()\` / \`SetSprite()\`). For anything driven by game logic — walk/run/jump blending, transitions, events — use the full **Animator** instead: see the [Animation & the Animator](/tutorials/animation) tutorial.

## The other 2D renderers

| Behaviour | Use it for |
|-----------|-----------|
| \`TextureRectRenderer\` | Drawing a sub-rectangle of a texture directly (pixels or normalized UVs) without creating sprites. |
| \`LineRenderer\` | Polylines with a width curve and color gradient — lasers, ropes, debug paths. |
| \`RenderTextureRenderer\` | Displaying a \`RenderTexture\` that a camera renders into — minimaps, mirrors, picture-in-picture. |

All of them inherit the same sorting-layer, color and material properties from \`Renderer\`, so everything you learned above applies.

## Where to go next

Your sprites are on screen — now light them up with [2D Lights & Shadows](/tutorials/lights), or bring them to life with the [Animator](/tutorials/animation).
`},{id:`lights`,title:`2D Lights & Shadows`,icon:`fa-lightbulb`,category:`2D Graphics`,blurb:`Light your scenes with global, point, sprite and custom-shaped lights, plus 2D shadows.`,md:`# 2D Lights & Shadows

Lighting turns a flat scene into a moody one. Comet ships a full 2D lighting pipeline: five light types, four blend modes, soft and crisp shadows, and normal-map support — all layer-aware and fully scriptable.

![A Point Light on the ship's engine: the radius gizmo in the Scene view, and every light property in the Inspector.](/tutorials/light-scene.png)

## How 2D lighting works in Comet

Lights in Comet accumulate into a per-**sorting-layer** light buffer. That single sentence has two important consequences:

1. **Every light declares which sorting layers it affects.** By default the **All Sorting Layers** toggle is on and the light reaches everything; untick it to pick specific layers — a light whose list doesn't include the layer a sprite renders on will never touch that sprite, no matter how close it is.
2. **Lights compose with a blend mode**, per light:

| Blend Mode | Effect |
|------------|--------|
| \`Additive\` | Brightens what is below — the default for almost everything. |
| \`Subtract\` | Darkens — great for pockets of darkness or negative lights. |
| \`Mix\` | Alpha-blends the light color over the layer. |
| \`Mask\` | Multiplies — use it to reveal or hide by light shape. |

There is no separate "ambient light" setting: an ambient is simply a **GlobalLight** with a low intensity added to your layers.

## The five light types

![All five light types on a dark backdrop: a green spotlight cone, red and blue point lights, a yellow hexagonal parametric light, and a magenta freeform light.](/tutorials/light-types.png)

All lights are behaviours added from **Add Behaviour → Lighting** (\`Global Light\`, \`Point Light\`, \`Freeform Light\`, \`Parametric Light\`, \`Sprite Light\`). They share a common base (color, intensity, blend mode, shadows, sorting layers) and each adds its own shape:

### GlobalLight

A directional, sun-like light that hits everything on its layers equally, regardless of position. Use it for ambient fill and daylight. Its only extra property is **Max Shadow Distance** — how far from the view shadows are still rendered (\`0\` = unlimited).

### PointLight

Light radiating from a point, with angular and radial falloff — your lamps, torches, spotlights, projectiles:

- **Inner / Outer Radius** — full intensity inside the inner radius, fading to zero at the outer one.
- **Inner / Outer Angle** — narrow these from 360° to make a cone spotlight.
- **Falloff** — the shape of the fade curve (0–1).
- **Texture** — optional cookie texture to mask the light.

### FreeformLight

A light whose shape is a **custom polygon** you edit right in the scene view — click **Edit Shape** in its Inspector and drag the vertices. Ideal for light shafts through windows or oddly-shaped glowing areas. **Falloff Radius** controls how far the light fades past the polygon's edges.

### ParametricLight

Like Freeform, but the shape is a regular polygon: pick the number of **Sides** (3–39, higher ≈ circle) and a **Radius**. Cheaper than Freeform and perfect for simple geometric glows.

### SpriteLight

The light's shape *is a sprite*: its alpha channel masks the light. Stained-glass windows, glowing signs, projected logos. **Cookie Scale** and **Cookie Offset** adjust the sprite within the light.

## Common light properties

Every light exposes these in the Inspector:

| Property | Meaning |
|----------|---------|
| **Color** | The light's color. |
| **Intensity** | Multiplier over the color — values above 1 overdrive, negative values darken. |
| **Sorting Layers** | The layers this light affects — **All Sorting Layers** by default, or a hand-picked list. |
| **Height** | Virtual Z height used by normal-mapped sprites to fake relief. No normal map → no visible effect. |
| **Blend Mode** | \`Additive\`, \`Subtract\`, \`Mix\` or \`Mask\`. |
| **Cast Shadows** | Enables shadow rendering for this light (see below). |

## Shadows

Two pieces cooperate to produce 2D shadows:

1. **Lights** opt in with **Cast Shadows** and choose a **Shadow Mode**:
   - \`Soft\` — ray-marched, soft-edged penumbras. Prettier, more expensive. **Shadow Softness** controls the penumbra.
   - \`Crisp\` — sharp shadow-map shadows. Cheap and stylized.

   Both modes share **Shadow Color** (the tint of shadowed areas) and **Shadow Strength** (0 = invisible, 1 = fully dark).

2. **Occluders** are entities with a **Shadow Caster** behaviour (**Add Behaviour → Lighting → Shadow Caster**). Its **Shape Source** is either:
   - \`Sprite\` — reuses the occluder polygon authored in the [Sprite Editor's Shadow Caster tool](/tutorials/sprite-rendering), or
   - \`Custom\` — a polygon you edit in the scene, with a **Closed** toggle and a **Cull Mode** for one-sided shadows.

   Shadow Casters also filter by **Sorting Layers**, so an occluder only blocks lights on matching layers.

![A Point Light casting real-time shadows across a tilemap: the houses block the light and drop shadow wedges over the lit ground.](/tutorials/shadows.png)

## Scripting lights

Lights are regular behaviours: fetch them with the static \`Get\` accessor and drive any property. A flickering torch:

\`\`\`angelscript
using namespace CometEngine;

class TorchLight : CometBehaviour
{
    private PointLight torch;
    private float time = 0.0F;

    void Start()
    {
        torch = PointLight::Get(entity);
        torch.color = Color(1.0F, 0.7F, 0.3F, 1.0F); // warm orange
        torch.outerRadius = 4.0F;
        torch.fallOff = 0.6F;
        torch.castShadows = true;
        torch.shadowMode = ShadowMode::SOFT;
        torch.shadowSoftness = 0.8F;
    }

    void Update()
    {
        // Two overlapping sine waves make a cheap, organic flicker.
        time += Time::GetDeltaTime();
        torch.intensity = 1.5F + Math::Sin(time * 9.0F) * 0.15F + Math::Sin(time * 23.0F) * 0.08F;
    }
}
\`\`\`

A day/night cycle driving a GlobalLight, including which layers it lights:

\`\`\`angelscript
using namespace CometEngine;

class DayNightCycle : CometBehaviour
{
    private GlobalLight sun;
    private float dayTime = 0.0F;      // 0..1 over a full day
    float dayLengthSeconds = 120.0F;

    void Start()
    {
        sun = GlobalLight::Get(entity);

        array<string> layers = {"Background", "Default", "Characters"};
        sun.SetSortingLayers(layers);
    }

    void Update()
    {
        dayTime += Time::GetDeltaTime() / dayLengthSeconds;
        if (dayTime > 1.0F)
        {
            dayTime -= 1.0F;
        }

        // Bright warm white at noon, dim blue at midnight.
        float daylight = (Math::Sin(dayTime * 6.2831853F) + 1.0F) * 0.5F;
        sun.intensity = 0.25F + daylight * 0.9F;
        sun.color = Color(0.55F + daylight * 0.45F,
                          0.6F + daylight * 0.4F,
                          0.8F + daylight * 0.1F,
                          1.0F);
    }
}
\`\`\`

Every light type has the same accessors as any behaviour — \`PointLight::Get(entity)\`, \`PointLight::GetAll(entity)\`, \`PointLight::GetInParent(entity)\`, \`PointLight::GetInChildren(entity)\` — and the generic \`BaseLight::Get(entity)\` works when you don't care which kind it is.

## Normal maps and the Height property

If a sprite has a **normal map** assigned (via the Sprite Editor's **Secondary Textures** tool), lights shade it as if it had depth. The light's **Height** property is its virtual distance above the 2D plane: low values give dramatic, grazing relief; high values flatten the effect. Without a normal map, \`height\` changes nothing — don't be surprised when the slider seems dead on flat art.

## Performance notes

- **Crisp shadows are cheaper than Soft** — reserve soft shadows for hero lights.
- Shape cost grows with complexity: **Point < Parametric < Freeform**.
- Lights only pay for the sorting layers they affect. Keep the \`Sorting Layers\` lists tight.
- A handful of lights is fine on every platform; hundreds of shadow-casting lights are not. Profile on your weakest target.

## Where to go next

Combine lights with the sprites you set up in [Sprite Rendering](/tutorials/sprite-rendering), or give your scene motion with [Animation & the Animator](/tutorials/animation).
`},{id:`tilemap`,title:`Tilemaps & Rule Tiles`,icon:`fa-border-all`,category:`2D Graphics`,blurb:`Paint worlds with grids, animated tiles, auto-tiles and neighbour-aware rule tiles.`,md:`# Tilemaps & Rule Tiles

Tile-based worlds — platformers, dungeons, strategy maps — are built from a **Grid** that defines the cell layout and a **TilemapRenderer** that paints **tiles** into those cells. Comet's tile system goes well beyond static sprites: animated tiles, position-seeded random tiles, and neighbour-aware **rule tiles** and **auto-tiles** that pick the right sprite automatically.

![The Grid and Tilemap Renderer components in the Inspector.](/tutorials/tilemap-inspector.png)

## Grid + Tilemap Renderer

Two behaviours work together, both added from **Add Behaviour**:

- **Grid** — owns the cell geometry: **Cell Size** (world units per cell) and **Cell Type** (\`Rectangular\`, \`Isometric\`, \`Hexagonal Flat\`, \`Hexagonal Pointed\`). It converts between world positions and integer cell coordinates.
- **Tilemap Renderer** — a \`Renderer\` that stores which tile sits in each cell and draws them. It has the usual sorting-layer properties plus a global **Animation Frame Rate** for animated tiles and a **Tile Anchor**.

Cells are addressed with **\`Vector2i\`** integer coordinates. The renderer works on the Grid attached to the same entity.

## Tiles are assets

A tile is not just a sprite — it's a **tile asset** (a \`.cometObject\`) that decides, per cell, *which* sprite to show, what colour and what collider to generate. Comet ships a whole hierarchy of tile types, all of which you can create as assets and extend:

| Tile type | What it does |
|-----------|--------------|
| **Tile** | A single fixed sprite. |
| **Animated Tile** | Cycles through several sprites at a speed. |
| **Random Tile** | Picks a sprite per cell from a position-seeded hash (stable across reloads). |
| **Weighted Random Tile** | Like Random, but with per-sprite probabilities. |
| **Pipeline Tile** | Chooses a sprite from its 4 orthogonal neighbours — pipes, wires, walls. |
| **Auto Tile** | 2×2 or 3×3 bitmask autotiling — the classic ~47-sprite terrain system. |
| **Rule Tile** | The most flexible: a list of rules matching neighbour cells, with rotation/mirror transforms. |

Isometric and hexagonal variants of Rule Tile exist too (\`Isometric Rule Tile\`, \`Hexagonal Rule Tile\`).

## Painting from AngelScript

Grab the renderer and set tiles by cell. \`null\` erases:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Tilemaps;

class LevelBuilder : CometBehaviour
{
    TileBase groundTile;   // assign a tile asset in the Inspector

    void Start()
    {
        Grid grid = Grid::Get(entity);
        TilemapRenderer tilemap = TilemapRenderer::Get(entity);

        // Lay a 20x3 floor.
        array<Vector2i> cells;
        array<TileBase> tiles;
        for (int x = 0; x < 20; x++)
        {
            for (int y = 0; y < 3; y++)
            {
                cells.insertLast(Vector2i(x, y));
                tiles.insertLast(groundTile);
            }
        }
        tilemap.SetTiles(cells, tiles);

        // Query and erase.
        if (tilemap.HasTile(Vector2i(5, 2)))
        {
            tilemap.SetTile(Vector2i(5, 2), null);
        }

        // World <-> cell conversion.
        Vector2i cellUnderMouse = grid.WorldPositionToCellPosition(Vector2(3.5F, 1.2F));
        Vector2 cellCentre = grid.CellPositionToWorldPosition(cellUnderMouse);
    }
}
\`\`\`

Key \`TilemapRenderer\` calls: \`SetTile(cell, tile)\`, \`SetTiles(cells, tiles)\`, \`GetTile(cell)\`, \`HasTile(cell)\`, \`SetColor(cell, color)\`, \`RefreshTile(cell)\`, \`RefreshAllTiles()\`, \`ClearAllTiles()\`.

> [!TIP]
> \`SetTiles()\` (plural) applies a whole batch in one call and is much faster than looping \`SetTile()\` when you generate a level procedurally.

## Creating tiles

Tiles come from your sprite art. The fastest path — and the one that creates the tile assets *for* you:

1. **Import and slice your tileset.** Drop a spritesheet in, set its Texture Type to \`Sprite and UI\`, and slice it into individual sprites in the [Sprite Editor](/tutorials/sprite-rendering) (grid slicing is ideal for a tileset).
2. **Open the Tile Palette panel** (\`Window → Tile Palette\`) and **create a palette** — give it a name and a cell size matching your tiles.
3. **Drag the sliced spritesheet onto the palette.** The panel literally invites you to *"Drag Spritesheet, Sprite or a Tile here"* — drop it and Comet **auto-creates a simple \`Tile\` asset for every sprite** and lays them out in the palette. That's your tile set, created in one gesture.

![The Tile Palette panel with a sliced spritesheet turned into tiles.](/tutorials/tile-palette.png)

### Smarter tiles

For tiles with behaviour, create the tile asset explicitly from the Project panel's create menu, then drag it into the palette:

- **Animated Tile** — hand it a list of sprites and a speed.
- **Random / Weighted Random Tile** — give it several sprites; each cell picks one (stably, seeded by position).
- **Auto Tile** — supply the 16 (2×2) or ~47 (3×3) mask sprites and it picks the right edge/corner piece from its neighbours automatically.
- **Rule Tile** — the most powerful. Its inspector shows a **3×3 rule grid**: click a neighbour cell to require it be the **same tile** (green), a **different tile** (red), or **don't-care** (grey), and click the center to cycle a rotation/mirror transform so one rule covers several orientations. Add rules top to bottom — the **first rule that matches a cell's neighbours wins**.

## Painting a tilemap

With a palette ready and a tilemap entity in the scene (a **Grid** + **Tilemap Renderer**):

1. **Pick a tile** in the Tile Palette panel.
2. **Choose a tool** from the palette toolbar — **Brush** (single cells), **Box Brush** (drag a rectangle), **Fill** (flood-fill an area), **Picker** (eyedrop a tile already in the map) or **Rubber** (erase).
3. **Paint into the scene.** A grid overlay snaps to cells; drag to lay down tiles.

![Painting tiles into a tilemap in the scene view.](/tutorials/tilemap-painting.png)

Rule tiles and auto-tiles update themselves as you paint — lay a strip of wall and the corners and edges resolve automatically.

## Physics: the Tilemap Collider

Add a **Tilemap Collider** and the solid tiles automatically get collision. Each tile asset declares its **collider type** — \`Sprite\` (outline of the sprite), \`Grid\` (full cell) or \`None\` — so decorative tiles stay walk-through while walls block. Query it from code with \`HasColliderAt(x, y)\`.

## Writing a custom scripted tile

Because tiles are script classes, you can author your own by extending \`TileBase\` (or \`TileSingle\`) and overriding the info callbacks:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Tilemaps;

class GlowTile : TileSingle
{
    Sprite baseSprite;
    float glow = 0.5F;

    void OnGetTileInfo(const Vector3i &in position, TilemapRenderer tilemap, TileInfo tileInfo)
    {
        TileSingle::OnGetTileInfo(position, tilemap, tileInfo);
        tileInfo.sprite = baseSprite;
        tileInfo.color = Color(1.0F, 1.0F, 1.0F, 1.0F) * glow;
    }
}
\`\`\`

\`OnGetTileInfo\` fills a \`TileInfo\` (sprite, color, collider type, offset/rotation/scale) for each cell; \`RefreshTile\` lets neighbour-aware tiles react when an adjacent cell changes. This is exactly how the built-in Rule and Auto tiles are implemented.

> [!NOTE]
> Random, Weighted-Random and Auto tiles seed their choice from the **cell position**, not a live RNG — so a given cell always shows the same sprite across save/reload, which is what you want for a stable-looking world.

## Where to go next

Give your tiled level depth with [2D Lights & Shadows](/tutorials/lights), collide with it using [Physics](/tutorials/physics), or let enemies path across it with [Navigation](/tutorials/navigation).
`},{id:`particles`,title:`Particle Systems`,icon:`fa-fire`,category:`2D Graphics`,blurb:`Fire, smoke, sparks and magic with a modular, Unity-style particle system.`,md:`# Particle Systems

Fire, smoke, sparks, magic, rain, explosions — all of it comes from the **Particle System**, a modular emitter modelled after Unity's. You start with an emitter and switch on **modules** — emission, shape, colour-over-lifetime, velocity, size, texture animation — each shaping the particles a little more.

![The Particle System playing in the editor with the module inspector and preview controls.](/tutorials/particles-scene.png)

## The emitter and its modules

Add a **Particle System** from **Add Behaviour** and it starts emitting immediately in the editor, with a preview overlay (**Play / Pause / Stop**, playback speed and a scrubber) in the scene view.

The top of the inspector is the **System** block — the properties every particle is born with:

- **Duration** and **Loop** — the length of one emission cycle and whether it repeats.
- **Start Lifetime / Start Speed / Start Size / Start Rotation / Start Color** — initial values. Each is a **value selector**: a constant, a random range, or a curve/gradient over the cycle.
- **Gravity Scale**, **Max Particles**, **Simulation Space** (\`Local\` follows the emitter, \`World\` leaves particles behind), and **Play On Awake**.

Below that sit the toggleable **modules**, each with an enable checkbox:

| Module | Effect |
|--------|--------|
| **Emission** | Rate-per-second plus timed **Bursts**. |
| **Shape** | Where particles spawn: \`Circle\`, \`Rectangle\` or \`Edge\`. |
| **Velocity / Force / Limit Velocity over Lifetime** | Push, drag and steer particles as they age. |
| **Color / Size / Rotation over Lifetime** | Fade, grow and spin over each particle's life. |
| **Color / Size / Rotation by Speed** | Modulate by how fast a particle is moving. |
| **Texture Animation** | Flipbook the particle sprite from a sheet or sprite list. |
| **Renderer** | Draw mode (\`Chunk\` batches, \`Individual\` allows per-particle material) and sort order. |

## Value selectors and gradients

The recurring pattern is the **value selector** — wherever you see a property like Start Size or a lifetime curve, it can be a **constant**, a **random between two values**, or a **curve** (float) / **gradient** (colour) sampled over the particle's normalized age. This is what makes a flame fade from white to orange to transparent, or embers shrink as they rise.

## Controlling it from AngelScript

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::ParticleSystemModule;

class Explosion : CometBehaviour
{
    void Start()
    {
        ParticleSystem particles = ParticleSystem::Get(entity);
        particles.loop = false;
        particles.maxParticles = 500;

        // Configure emission with a one-shot burst of debris.
        ParticlePropertyEmission emission = particles.emission;
        emission.enabled = true;

        Burst burst;
        burst.time = 0.0F;
        burst.probability = 1.0F;
        burst.count.constant = 60;
        emission.AddBurst(burst);

        particles.Play();
    }

    void Update()
    {
        ParticleSystem particles = ParticleSystem::Get(entity);
        // Emit a puff of smoke on demand.
        if (Input::GetKeyDown(KeyCode::SPACE))
        {
            particles.Emit(20);
        }
    }
}
\`\`\`

\`Play()\`, \`Pause()\`, \`Stop()\`, \`Clear()\` and \`Emit(count)\` drive playback; \`Simulate(time, restart)\` fast-forwards the simulation (handy for pre-warming an effect so it looks established the instant it appears). Read-only \`isPlaying\`, \`isEmitting\`, \`particleCount\` and \`isAlive\` report state.

> [!TIP]
> \`simulationSpace = ParticleSystemSimulationSpace::WORLD\` is the difference between a torch flame that drags a trail as the torch moves (World) and one that stays glued to the torch (Local). Pick per effect.

## Building a fire effect

The classic recipe, all in the inspector:

1. **Shape** → small \`Circle\` at the base.
2. **Start Color** → bright yellow; **Color over Lifetime** → gradient yellow → orange → transparent.
3. **Start Size** → medium; **Size over Lifetime** → curve shrinking to zero.
4. **Velocity over Lifetime** → upward, with a little turbulence via the random-between mode.
5. **Emission** → a steady rate, no bursts.
6. **Renderer** → an additive material so overlapping particles glow.

## UI particles

Need particles *inside* a UI canvas — confetti on a victory screen, sparkles on a button? Use **UI Particle System** instead. It's the same module set but renders in the UI layer under a \`RectTransform\`, so it respects canvas sorting and masks. See the [UI tutorial](/tutorials/ui-system) for the canvas basics.

## Where to go next

Trigger a burst from an [animation event](/tutorials/animation), attach one to a [networked spawn](/tutorials/networking), or light it dramatically with [2D lights](/tutorials/lights).
`},{id:`video`,title:`Video Playback`,icon:`fa-film`,category:`2D Graphics`,blurb:`Play WebM video onto a render texture or camera plane, with audio routed through a mixer.`,md:`# Video Playback

Cutscenes, animated backgrounds, in-game screens — the **Video Player** decodes **WebM** video (VP8/VP9 with Opus/Vorbis audio) and renders it onto a render texture, a camera plane, or straight into your scene, with the audio routed through your mixer.

![The Video Player inspector with its source, render and audio options.](/tutorials/video-inspector.png)

## Importing a video

Drop a \`.webm\` file into your project's \`Assets\` folder and it imports as a **Video Clip** resource, exposing \`duration\`, \`frameRate\`, \`width\` and \`height\`.

> [!IMPORTANT]
> Comet plays **WebM only** (VP8/VP9 video, Opus/Vorbis audio) — not MP4/MOV/AVI. Re-encode other formats to WebM first (e.g. with \`ffmpeg -i input.mp4 output.webm\`). Decoding is software (libvpx), so keep large videos to a sensible resolution.

## The Video Player behaviour

Add a **Video Player** (from **Add Behaviour**) and configure:

| Field | Meaning |
|-------|---------|
| **Source** | \`Video Clip\` (a resource) or \`Url\` (a file path / URL string). |
| **Video Clip** | The clip to play, when Source is \`Video Clip\`. |
| **Play On Awake** | Start automatically. |
| **Playback Speed** | 0–10× speed. |
| **Loop** | Restart on end (gapless). |
| **Skip Frames On Drop** | Drop frames to stay in sync if decoding can't keep up. |
| **Aspect Ratio** | \`Fit Horizontally\` (default), \`Fit Inside\`, \`Stretch\`, ... |
| **Render Mode** | \`Render Texture\` (default), \`Camera Near Plane\` or \`Camera Far Plane\`. |
| **Target Texture** | The \`RenderTexture\` frames are written to (Render Texture mode). |
| **Audio Output Mode** | \`Direct\` (per-track volume/mute), \`Audio Source\` (route through a mixer) or \`None\`. |

### Where the picture goes

- **Render Texture** — frames are written into a \`RenderTexture\` asset. Display it anywhere a texture works: a \`TextureRectRenderer\`, a UI \`Image\`, or a material. This is the most flexible mode.
- **Camera Near / Far Plane** — the video draws directly on a \`Camera\`'s near or far plane with an adjustable **Alpha**, perfect for full-screen backgrounds or overlays.

### Where the sound goes

\`Direct\` gives you per-track volume and mute. \`Audio Source\` routes each audio track through an assigned **AudioSource**, so the video's sound obeys your [mixer groups](/tutorials/audio) — duck it under a \`Music\` bus, apply reverb, whatever.

## Controlling playback from AngelScript

This is the Sandbox project's video controller, verbatim — space to pause/resume, arrows to scrub:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Video;

class VideoController : CometBehaviour
{
    float stepToMove = 0.5F;
    private VideoPlayer videoPlayer;

    void Start()
    {
        videoPlayer = VideoPlayer::Get(entity);
    }

    void Update()
    {
        if (Input::GetKeyDown(KeyCode::SPACE))
        {
            if (videoPlayer.isPaused) { videoPlayer.Play(); }
            else { videoPlayer.Pause(); }
        }
        if (Input::GetKeyDown(KeyCode::LEFT))
        {
            videoPlayer.Seek(videoPlayer.currentTime - stepToMove);
        }
        if (Input::GetKeyDown(KeyCode::RIGHT))
        {
            videoPlayer.Seek(videoPlayer.currentTime + stepToMove);
        }
    }
}
\`\`\`

The API mirrors the inspector: \`Play()\`, \`Pause()\`, \`Stop()\`, \`Seek(seconds)\`, \`Step()\` (advance one frame), plus \`isPlaying\`, \`isPaused\`, \`currentTime\`, \`duration\`, \`frameRate\`. Audio tracks are toggled with \`SetAudioTrackEnabled(i, on)\` and \`SetAudioTrackDirectVolume(i, v)\`.

## A skippable cutscene

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Video;
using namespace CometEngine::SceneManagement;

class Cutscene : CometBehaviour
{
    private VideoPlayer player;

    void Start()
    {
        player = VideoPlayer::Get(entity);
        player.loop = false;
        player.Play();
    }

    void Update()
    {
        // Advance to gameplay when the clip ends or the player skips.
        bool finished = !player.isPlaying && !player.isPaused && player.currentTime >= player.duration - 0.05F;
        if (finished || Input::GetKeyDown(KeyCode::ESCAPE))
        {
            SceneManager::LoadScene("Level1");
        }
    }
}
\`\`\`

> [!NOTE]
> Web builds depend on the browser's WebM codec support (VP9 is the safest bet). There are no native sockets or threads on web, but video playback itself works — just profile large clips.

## Where to go next

Show your video on a [render texture in the UI](/tutorials/ui-system), route its audio through a [mixer group](/tutorials/audio), or play it as an intro before your [first scene loads](/tutorials/build-and-patches).
`},{id:`animation`,title:`Animation & the Animator`,icon:`fa-person-running`,category:`Animation`,blurb:`Animation clips, keyframes, events, the state machine editor, parameters and transitions.`,md:`# Animation & the Animator

Comet's animation stack has two levels. **Animation clips** keyframe properties over time; the **Animator** plays those clips through a visual state machine with parameters and transitions — idle to run, run to jump, jump to fall — exactly the workflow you know from big engines, tailored to 2D.

## Choosing your tool

| | **AnimatedSprite** | **Animator** |
|---|---|---|
| What it does | Cycles through a list of sprites at a fixed FPS | Plays Animation clips through a state machine |
| Can animate | Sprite frames only | Any keyframeable property: transform, sprite, colors, your script fields |
| Logic | Play / Pause / Stop | States, transitions, conditions, parameters, events, state scripts |
| Best for | Torches, coins, simple loops | Characters and anything gameplay-driven |

\`AnimatedSprite\` is covered at the end of the [Sprite Rendering tutorial](/tutorials/sprite-rendering). Everything below is about the full pipeline: **Animation → AnimatorController → Animator**.

## Creating an Animation clip

Right-click in the **Project** panel and choose **Create Resource → Animation**. Double-click the new asset to open the **Animation Timeline** panel:

![The Animation Timeline panel: transport controls, the frame ruler, samples and the Add Property track list.](/tutorials/animation-timeline.png)

The timeline works the way you'd expect:

1. **Add Property** — pick any animatable property from the behaviours on the target entity: \`Transform\` position/rotation/scale, \`SpriteRenderer\` color or flips, even public fields of your own scripts.
2. Move the **scrubber** to a frame.
3. Change the value — in the Inspector or by moving the entity in the scene — and **record a keyframe**. Keyframes show as diamonds on the track.
4. Values between keyframes are interpolated with editable curves.

Clip-level settings live on the Animation resource itself:

- **Samples** — timeline resolution in frames per second (default 60).
- **Loop** — whether the clip wraps around or plays once.
- \`length\` is derived from your last keyframe.

### Animation events

Keyframes change *what the sprite looks like*; **animation events** make things *happen* at exact moments in the clip. An event calls a method on one of the entity's scripts when playback crosses a specific frame — the reliable way to sync gameplay to animation: a footstep sound on the frame the foot lands, a hitbox spawned on the exact frame of a sword swing, a screen shake when a monster stomps.

In the Animation Timeline, each animated entity has an **event track** running along the top. To add an event:

1. Move the scrubber to the frame where it should fire.
2. Right-click the event track (or use its **Add Event** control) at that frame.
3. Pick the target **behaviour**, the **method** to call, and fill in any argument values the method takes.

A diamond marker appears on the event track at that frame. The method is just an ordinary function on one of your scripts — no special attribute needed:

\`\`\`angelscript
using namespace CometEngine;

class Player : CometBehaviour
{
    AudioSample footstepSound;   // assigned in the Inspector

    // Called by the animation event on the foot-plant frames.
    void OnFootstep()
    {
        AudioSource::PlaySingle(footstepSound, 0.6F);
    }

    // Events can pass arguments configured in the timeline.
    void SpawnHitbox(int damage)
    {
        Debug::Log("swing hitbox active for " + damage + " damage");
    }
}
\`\`\`

The \`PlayerRun\` clip in the screenshot above, for instance, has two \`OnFootstep\` events — one on each frame where a foot hits the ground — so the footstep audio stays perfectly in step with the run cycle no matter how the animation's speed is scaled.

> [!NOTE]
> Events fire when playback *crosses* their frame during normal play. When you \`Seek()\` to scrub the animator deterministically (for a network correction, say), pass \`fireEvents = false\` so you don't retrigger sounds and hitboxes while jumping through the timeline.

> [!WARNING]
> An event calls a method **by name** on the target behaviour. If you rename or remove that method in your script, the event silently stops firing — so keep event-target method names stable, or update the event when you refactor.

## Building the state machine

Right-click the **Project** panel → **Create Resource → Animator Controller**, then double-click it to open the **Animator** graph:

![The Animator window: the parameters panel on the left, the state-machine graph with its Entry, Any State and Exit nodes on the right.](/tutorials/animator-graph.png)

The workflow, end to end:

1. **Create states** — right-click the background → **Create State**. Assign each state an Animation clip and a name (\`Idle\`, \`Run\`, \`Jump\`...).
2. **Pick the entry state** — right-click a state → **Set as Entry**. This is where the machine starts.
3. **Connect them** — right-click a state → **Create Transition To**, then click the target state.
4. **Add parameters** — in the **Parameters** panel, click **+ Add Parameter** and choose a type:

   | Type | Use for |
   |------|---------|
   | \`Float\` | Continuous values — speed, aim angle. |
   | \`Int\` | Discrete values — weapon id, combo step. |
   | \`Bool\` | Persistent flags — grounded, crouching. |
   | \`Trigger\` | One-shot events — jump, hit. Consumed automatically when a transition uses it. |

5. **Add conditions to transitions** — right-click a transition → **Edit Conditions**. Combine parameter checks (\`speed\` greater than \`0.1\`, \`isGrounded\` is true...); *all* conditions must pass. Enable **Exit Time** on a transition to also require the current animation to finish first — ideal for attack chains that must not cut off mid-swing.

For big graphs, group states into **sub-state machines** (right-click → **Create State Machine**, double-click to enter). States inside are addressed with a slash path like \`"Combat/Attack1"\`.

> [!TIP]
> The controller's **Conditions Check Mode** decides *when* transitions are evaluated: only when a parameter changes or an animation ends (cheap, default) or every animation update (reactive, a bit costlier).

## Playing it on an entity

Select your entity, **Add Behaviour → Animator**, and drop the controller into the **Animator Controller** field. Useful inspector options:

- **Speed** — global playback multiplier for this entity.
- **Update Time Mode** — \`Scaled Time\` (respects \`Time\` scaling and pauses), \`Unscaled Time\` (UI, pause menus) or \`Physics Time\` (sync with FixedUpdate).
- **Keep State On Disable** — when re-enabled, resume where it left off instead of restarting from entry.

## Driving the Animator from AngelScript

Your gameplay code never plays clips directly — it feeds **parameters** and lets the state machine decide:

\`\`\`angelscript
using namespace CometEngine;

class PlayerAnimation : CometBehaviour
{
    private Animator animator;

    void Start()
    {
        animator = Animator::Get(entity);
    }

    void Update()
    {
        float moveX = 0.0F;
        if (Input::GetKeyPressed(KeyCode::A)) moveX -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::D)) moveX += 1.0F;

        animator.SetFloat("speed", Math::Abs(moveX));
        animator.SetBool("isMoving", moveX != 0.0F);

        if (Input::GetKeyDown(KeyCode::SPACE))
        {
            animator.SetTrigger("jump"); // consumed by the Idle->Jump transition
        }
    }
}
\`\`\`

You can also query and force states directly:

\`\`\`angelscript
// What is playing right now?
AnimatorStateInfo state = animator.GetCurrentState();
if (state !is null)
{
    Debug::Log(state.name + " at " + state.normalizedTime);
}

// Bypass transitions entirely (cutscenes, deaths):
animator.Play("Death", 0.0F);            // state name
animator.Play("Combat/Attack1", 0.0F);   // state inside a sub-machine

// Deterministically scrub to a point in the current state (e.g. after a
// network correction). fireEvents = false skips animation events on the way.
animator.Seek(0.5F, false);
\`\`\`

> [!TIP]
> \`SetFloat("speed", ...)\` hashes the parameter name every call. In hot loops, resolve the ID once and reuse it:
>
> \`\`\`angelscript
> private uint64 speedId;
> void Start() { speedId = animator.GetParameterID("speed"); }
> void Update() { animator.SetFloat(speedId, currentSpeed); }
> \`\`\`

## State machine behaviours

Sometimes logic belongs to a *state*, not to the entity — "play a sound while in \`Alert\`", "enable the hitbox during \`Attack\`". Right-click a state → **Add Script → AnimatorStateBehaviour** and Comet generates a script skeleton for you:

\`\`\`angelscript
using namespace CometEngine;

class AlertState : AnimatorStateBehaviour
{
    // Called when the animator enters this state.
    void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo)
    {
        Debug::Log(animator.entity.name + " entered " + stateInfo.name);
    }

    // Called every animation update while this state is active.
    void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo)
    {
    }

    // Called when the animator leaves this state.
    void OnStateExit(Animator animator, AnimatorStateInfo stateInfo)
    {
    }
}
\`\`\`

The instance lives as long as the controller is in use, and \`Awake()\` / \`OnDestroy()\` bracket its lifetime.

## Reusing a controller: Animator Overrides

An **Animator Controller Override** (\`Create Resource → Animator Controller Override\`) wraps an existing controller and swaps its clips while keeping every state, transition and parameter. Build the state machine once for "humanoid enemy", then create overrides for the goblin, the skeleton and the knight that only replace the animations:

\`\`\`angelscript
using namespace CometEngine;

class SkinSwapper : CometBehaviour
{
    void ApplySkin(AnimatorControllerOverride skin)
    {
        Animator::Get(entity).animatorController = skin;
    }
}
\`\`\`

From code you can inspect and edit overrides with \`GetOverride()\` / \`SetOverride(original, replacement)\`.

## Animator quick reference

| Task | Call |
|------|------|
| Set parameters | \`SetFloat / SetInt / SetBool (name or id, value)\` |
| Fire a trigger | \`SetTrigger("jump")\`, cancel with \`ResetTrigger("jump")\` |
| Read parameters | \`GetFloat / GetInt / GetBool / GetTrigger\` |
| Current state | \`GetCurrentState()\` → \`name\`, \`fullName\`, \`normalizedTime\` |
| Force a state | \`Play("StateName", normalizedTime)\` |
| Scrub deterministically | \`Seek(normalizedTime, fireEvents)\` |
| Playback speed | \`speed\` property |
| Reset parameters | \`SetDefaultParameterValues()\` |

## Where to go next

Hook animation parameters to real movement in the [Navigation tutorial](/tutorials/navigation), or trigger animations across the network in [Networking & Multiplayer](/tutorials/networking).
`},{id:`bezier`,title:`Bézier Curves & Paths`,icon:`fa-bezier-curve`,category:`Animation`,blurb:`Author smooth paths and move platforms, cameras and projectiles along them.`,md:`# Bézier Curves & Paths

Moving platforms that sweep along a smooth arc, a camera that glides through a level, a projectile that curves to its target — all of these follow a **Bézier curve**. Comet gives you a **Bézier Curve** behaviour to author the path and a **Bézier Curve Follower** to move any transform along it.

![The Bézier Curve and Bézier Curve Follower components in the Inspector.](/tutorials/bezier-inspector.png)

## The two components

Both are added from **Add Behaviour → Diverse**:

- **Bézier Curve** — stores the path as a cubic spline: a list of **control points**, each with an anchor and two tangent handles. Its inspector has a small toolbar to **Move Points**, **Move Control Points**, **Add Points** and **Remove Points** directly in the scene view, plus a **Bake Interval** (how finely the curve is sampled for fast lookups).
- **Bézier Curve Follower** — moves a transform along a target curve, optionally rotating to face the direction of travel.

## Authoring a curve in the editor

1. Add a **Bézier Curve** to an entity and select it.
2. Click **Add Points** in its inspector toolbar, then click in the scene to drop anchor points — the green spline appears between them.
3. Switch to **Move Control Points** and drag the tangent handles to bend each segment.
4. Tweak the **Bake Interval** down for a smoother, more accurate follow (at a small memory cost).

![A Bézier curve in the Scene view: blue anchor points, red tangent handles and the smooth spline drawn between them.](/tutorials/bezier-curve.png)

## Following a curve

Add a **Bézier Curve Follower**, set **Curve to Follow** to your curve, then advance it every frame. You drive the distance yourself, which keeps movement speed independent of the curve's length:

\`\`\`angelscript
using namespace CometEngine;

class Platform : CometBehaviour
{
    private BezierCurveFollower follower;
    private float distance = 0.0F;
    float speed = 2.0F;   // world units per second

    void Start()
    {
        follower = BezierCurveFollower::Get(entity);
        follower.loop = true;          // wrap around at the ends
        follower.applyRotation = false; // a platform stays level
    }

    void Update()
    {
        distance += speed * Time::GetDeltaTime();
        follower.MoveAt(distance, transform);
    }
}
\`\`\`

- **\`MoveAt(distance, transform)\`** places the transform at an absolute arc-length distance along the curve. With **\`loop = true\`** the distance wraps; with \`loop = false\` it clamps at the ends.
- **\`MoveAtNormalized(t, transform)\`** takes \`t\` from 0 to 1 instead — handy when you're driving progress from an animation or a timer rather than a speed.

## Facing the direction of travel

For a projectile or a character, tick **Apply Rotation** and the follower rotates the transform to point along the curve's tangent. **Look Ahead** sets how far along the curve it samples that tangent — smaller for fast, twitchy followers; larger for slow, smooth ones. **Rotation Offset** adds a fixed angle (if your sprite faces up instead of right), and **Position Offset** shifts it along/perpendicular to the path.

\`\`\`angelscript
using namespace CometEngine;

class HomingMissile : CometBehaviour
{
    private BezierCurveFollower follower;
    private float distance = 0.0F;
    float speed = 12.0F;

    void Start()
    {
        follower = BezierCurveFollower::Get(entity);
        follower.applyRotation = true;   // nose follows the curve
        follower.lookAhead = 0.03F;
        follower.loop = false;

        BezierCurve curve = BezierCurve::Get(entity);
        float length = curve.curve.length;
        Debug::Log("flight path is " + length + "m long");
    }

    void Update()
    {
        distance += speed * Time::GetDeltaTime();
        follower.MoveAt(distance, transform);
    }
}
\`\`\`

> [!TIP]
> The follower does **not** move on its own — you accumulate \`distance\` and call \`MoveAt\` each frame. That's deliberate: it lets you ease, reverse, pause or ping-pong the motion however you like, and drive several followers along the same shared curve at different speeds.

## Building a curve from code

You can author the path entirely in script — useful for procedural levels or runtime-generated trajectories:

\`\`\`angelscript
using namespace CometEngine;

class RuntimePath : CometBehaviour
{
    void Start()
    {
        Curve curve = BezierCurve::Get(entity).curve;
        curve.AddPoint(Vector2(0.0F, 0.0F), -1);   // -1 appends
        curve.AddPoint(Vector2(5.0F, 3.0F), -1);
        curve.AddPoint(Vector2(10.0F, 0.0F), -1);

        // Shape the segments with tangent handles.
        curve.SetControlPointOut(0, Vector2(2.0F, 0.0F));
        curve.SetControlPointIn(1, Vector2(3.0F, 2.0F));

        Debug::Log("baked length: " + curve.length);
    }
}
\`\`\`

\`AddPoint\`, \`SetControlPointIn/Out\`, \`RemovePoint\` and \`ClearPoints\` edit the point list; \`CalculatePointAt(distance, cubic)\` and \`GetClosestPoint(worldPoint)\` sample it. The bake cache rebuilds automatically after edits — do heavy building in \`Start\`, not every frame.

## Where to go next

Combine a curve-following camera with your [UI](/tutorials/ui-system), or trigger a projectile's launch from an [input action](/tutorials/input) or [animation event](/tutorials/animation).
`},{id:`physics`,title:`Physics: Bodies, Colliders & Joints`,icon:`fa-cubes-stacked`,category:`Physics`,blurb:`Rigid bodies, colliders, triggers, raycasts and joints on the Box2D backend.`,md:`# Physics: Bodies, Colliders & Joints

Gravity, collisions, bouncing, ragdolls, vehicles — Comet's 2D physics runs on **Box2D 3.x**. You give an entity a **Rigid Body** to make it move under physics, one or more **Colliders** to give it shape, and optionally **joints** to connect bodies or **effectors** to push them around.

![A rigid body with a box collider gizmo, and the Rigid Body inspector.](/tutorials/physics-scene.png)

## The three body types

Add a **Rigid Body** and pick its **Body Type**:

- **Dynamic** — fully simulated: gravity, forces, collisions. Your player, crates, debris.
- **Kinematic** — moves only when you set its velocity/position; unstoppable by forces. Moving platforms, scripted hazards.
- **Static** — never moves. Level geometry. (An entity with only a collider and no rigid body behaves as static.)

The Rigid Body inspector exposes **Mass**, **Gravity Scale**, **Linear/Angular Drag**, axis **constraints**, **Collision Detection** (\`Discrete\` or \`Continuous\` for fast objects) and interpolation.

> [!IMPORTANT]
> Physics units are **metres**, and simulation runs in **\`FixedUpdate\`**, not \`Update\`. Apply forces and read velocities in \`FixedUpdate\` so they're consistent with the fixed timestep. If your art is in pixels, divide sizes by your pixels-per-unit (e.g. 100 px = 1 m).

## Colliders

Add a collider from **Add Behaviour** — **Box**, **Circle**, **Capsule**, **Edge**, **Polygon**, **Tilemap** or **Packer** Collider. They render green outline gizmos in the scene. Each collider has:

- **Is Trigger** — a trigger detects overlaps but doesn't physically block.
- **Friction** and **Bounciness** (restitution), or a shared **Physic Material** asset carrying both.
- **Offset** and shape-specific fields (Box \`Size\`, Circle \`Radius\`, ...).

## Moving a body

\`\`\`angelscript
using namespace CometEngine;

class PlayerMovement : CometBehaviour
{
    private RigidBody body;
    float moveSpeed = 6.0F;
    float jumpImpulse = 8.0F;

    void Start()
    {
        body = RigidBody::Get(entity);
    }

    void FixedUpdate()
    {
        // Drive horizontal motion by setting the velocity directly — snappy,
        // predictable control that ignores mass. The vertical velocity is left
        // untouched so gravity and jumps still work.
        float dir = 0.0F;
        if (Input::GetKeyPressed(KeyCode::A)) dir -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::D)) dir += 1.0F;
        body.velocity = Vector2(dir * moveSpeed, body.velocity.y);

        // Jump with an instantaneous impulse.
        if (Input::GetKeyDown(KeyCode::SPACE))
        {
            body.ApplyLinearImpulse(Vector2(0.0F, jumpImpulse));
        }
    }
}
\`\`\`

> [!NOTE]
> **Setting \`velocity\` vs. applying forces.** Assigning \`body.velocity\` directly gives snappy, mass-independent control — ideal for a responsive player character or a kinematic platform. Forces are for physical, mass-aware motion: **\`ApplyForce\`** accumulates over the step (thrust, wind, gravity-like pushes) while **\`ApplyLinearImpulse\`** changes velocity instantly (jumps, hits, knockback). There are \`AtPoint\` variants that also impart spin, plus \`ApplyTorque\` / \`ApplyAngularImpulse\` for rotation. Pick velocity for arcade feel, forces for simulation feel.

## Collision and trigger callbacks

Define these methods on any \`CometBehaviour\` and the engine calls them:

\`\`\`angelscript
using namespace CometEngine;

class Hazard : CometBehaviour
{
    // Solid collisions: Enter / Stay / Exit.
    void OnCollisionEnter(Collision collision)
    {
        Debug::Log("hit " + collision.entity.name +
                   " with " + collision.contactPointsCount + " contacts");
    }

    // Trigger overlaps: Enter / Stay / Exit.
    void OnTriggerEnter(Collider other)
    {
        Debug::Log(other.entity.name + " entered the trigger");
    }

    void OnTriggerExit(Collider other)
    {
        Debug::Log(other.entity.name + " left the trigger");
    }
}
\`\`\`

\`OnCollisionEnter/Stay/Exit\` fire for solid contacts and hand you a \`Collision\` (the colliders, bodies, entity and contact points). \`OnTriggerEnter/Stay/Exit\` fire for trigger colliders and hand you the other \`Collider\`.

## Raycasts and queries

Ask the world what's along a ray or inside a box — the foundation of line-of-sight, ground checks and hitscan weapons:

\`\`\`angelscript
using namespace CometEngine;

class GroundCheck : CometBehaviour
{
    bool IsGrounded()
    {
        Vector2 origin = Vector2(transform.position.x, transform.position.y);
        RaycastHit hit = Physics::RaycastClosest(origin, Vector2(0.0F, -1.0F), 1.1F);
        return hit !is null;
    }

    void FireLaser()
    {
        Vector2 origin = Vector2(transform.position.x, transform.position.y);
        RaycastHit hit = Physics::RaycastClosest(origin, Vector2(1.0F, 0.0F), 50.0F);
        if (hit !is null)
        {
            Debug::Log("laser hit " + hit.collider.entity.name +
                       " at " + hit.distance + "m, normal " + hit.normal.ToString());
        }
    }
}
\`\`\`

\`Physics::RaycastClosest / RaycastAny / Raycast\` (all hits) return \`RaycastHit\`s with \`point\`, \`normal\`, \`distance\`, \`collider\` and \`rigidbody\`. \`Physics::QueryAABB(center, size, ...)\` returns every collider in a box. All take an optional layer mask.

## Collision layers

Configure which layers collide in **Project Settings → Physics** (a 32-layer matrix). From code, \`Physics::IgnoreLayerCollision(a, b, true)\` and \`Physics::DoTheseLayersCollide(a, b)\` manage it at runtime — e.g. make enemy projectiles pass through other enemies.

## Joints and effectors

**Joints** constrain two bodies: **Hinge** (rotating door, wheel axle, with an optional motor and angle limits), **Distance** / **Spring** (ropes, suspension), **Slider** (elevators), **Wheel** (vehicles), **Fixed**, **Friction**, **Relative** and **Target**. Add one, assign the **Connected Rigid Body**, and set its anchors. A joint fires \`OnJointBreak(force)\` if it exceeds its **Break Force**.

**Effectors** apply area forces to whatever overlaps them (the collider needs **Used By Effector**): **Area** (wind, water currents), **Point** (gravity wells, explosions), **Platform** (one-way platforms) and **Surface** (conveyor belts).

## Physic Material assets

Create a **Physic Material** (\`Create Resource → Physic Material\`) to reuse **Friction** and **Bounciness** across colliders — an "ice" material, a "rubber" material — and choose how paired materials combine (average, min, max, multiply).

## Where to go next

Drive physics from [input](/tutorials/input), react to hits with an [animation](/tutorials/animation) or [particle burst](/tutorials/particles), or build your collision world from a [tilemap](/tutorials/tilemap).
`},{id:`input`,title:`Reading Raw Input`,icon:`fa-keyboard`,category:`Input`,blurb:`Poll keyboard, mouse, controllers and touch directly, frame by frame.`,md:`# Reading Raw Input

The most direct way to know what the player is doing is to ask the hardware every frame: *is W held right now? did they just click? how far is the stick pushed?* This is **polling**, and it lives in the \`CometEngine::Input\` namespace. It's perfect for prototypes, game jams, fixed control schemes and touch handling.

> [!TIP]
> When you're ready for rebindable controls and first-class gamepad support, graduate to the [Input Actions system](/tutorials/input-actions) — the same input, but bound to named actions you configure in the editor. This tutorial is the raw layer underneath it.

## The three verbs: Down, Pressed, Up

For every button — keyboard, mouse or controller — there are three queries, and choosing the right one is most of the battle:

| Query | True when... | Use it for |
|-------|--------------|-----------|
| **\`GetKeyDown(key)\`** | the **first frame** of the press (an edge) | one-shot actions: jump, shoot, confirm, toggle |
| **\`GetKeyPressed(key)\`** | **every frame** the key is held (a level) | continuous actions: walking, charging, aiming |
| **\`GetKeyUp(key)\`** | the frame it is **released** (an edge) | release actions: release a charged shot |

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

class Player : CometBehaviour
{
    float speed = 5.0F;

    void Update()
    {
        // Continuous movement from held keys (level).
        Vector2 move(0, 0);
        if (Input::GetKeyPressed(KeyCode::W)) move.y += 1.0F;
        if (Input::GetKeyPressed(KeyCode::S)) move.y -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::A)) move.x -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::D)) move.x += 1.0F;

        // Fire once per press (edge).
        if (Input::GetKeyDown(KeyCode::SPACE))
        {
            Fire();
        }

        transform.Translate(move * speed * Time::GetDeltaTime(), Space::World);
    }

    void Fire() { }
}
\`\`\`

\`KeyCode\` covers the whole keyboard: letters (\`A\`–\`Z\`), digits, \`SPACE\`, \`RETURN\`, \`ESCAPE\`, the arrows (\`UP\`/\`DOWN\`/\`LEFT\`/\`RIGHT\`), function keys (\`F1\`–\`F12\`) and modifiers (\`SHIFT_LEFT\`, \`CONTROL_LEFT\`, ...).

## Mouse

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

Vector2 mousePos = Input::GetMousePosition();     // screen space, (0,0) top-left
Vector2 delta = Input::GetMouseMotion();          // movement since last frame
float wheel = Input::GetMouseScrollMotion();      // scroll delta

if (Input::GetMouseButtonDown(MouseCode::LEFT))   { /* click */ }
if (Input::GetMouseButtonPressed(MouseCode::RIGHT)) { /* hold to aim */ }
\`\`\`

\`MouseCode\` is \`LEFT\`, \`MIDDLE\`, \`RIGHT\`, \`BUTTON_4\`, \`BUTTON_5\`. Mouse position is in **screen space** — to convert it to world space, go through your camera.

## Controllers

Comet supports up to eight controllers. Pass a \`ControllerNumber\` to target a specific one, or \`CONTROLLER_ANY\` for the first connected:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

// Analog stick — a Vector2 in the range -1..+1 on each axis.
Vector2 leftStick = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1);
float rightTrigger = Input::GetControllerTriggerValue(ControllerTrigger::RIGHT, ControllerNumber::CONTROLLER_1);

// Buttons — same Down / Pressed / Up trio as the keyboard.
if (Input::GetControllerButtonDown(ControllerCode::A, ControllerNumber::CONTROLLER_1))
{
    Jump();
    Input::MakeControllerRumble(0.6F, 0.2F);   // strength 0..1, duration in seconds
}

// Discover what's plugged in at runtime.
array<ControllerNumber> pads = Input::GetControllersConnected();
\`\`\`

\`ControllerCode\` names the face buttons (\`A\`/\`B\`/\`X\`/\`Y\`), the D-pad (\`DPAD_UP\`...), shoulders, stick clicks and analog-stick directions as virtual buttons (\`LEFT_AXIS_UP\`...). \`MakeControllerRumble\` and \`PlayHapticPreset\` drive vibration. \`GetActiveInputDevice()\` tells you whether the player is currently on keyboard-and-mouse or a gamepad, so you can swap on-screen button prompts to match.

## Touch

Touch is multi-touch aware: each finger is a \`Touch\` with a **stable \`id\`** you can follow across frames, plus \`position\`, \`motion\` and a \`state\` (\`STARTED\` / \`MOVED\` / \`ENDED\`):

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

uint64 touchCount = Input::GetTouchCount();
for (uint64 i = 0; i < touchCount; i++)
{
    Touch touch = Input::GetTouchByIndex(i);
    if (touch.state == TouchState::ENDED) continue;

    // touch.id follows this finger; touch.position is screen space.
    Debug::Log("finger " + touch.id + " at " + touch.position.ToString());
}
\`\`\`

This is how the sample project's mobile controller builds a virtual joystick — it claims the first finger that lands on the left half of the screen (tracking it by \`id\`) and reads its offset from the touch-down point each frame. \`Input::IsPinching()\` and \`Input::GetPinchZoom()\` give you two-finger pinch for zoom.

## Reading a whole character controller

Putting the verbs together — keyboard *and* gamepad, movement *and* a one-shot fire, exactly as the sample project's \`Player\` script does it:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Input;

class Player : CometBehaviour
{
    float speed = 6.0F;

    void Update()
    {
        // Movement: keyboard OR left stick, whichever the player uses.
        Vector2 velocity = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1);
        if (Input::GetKeyPressed(KeyCode::W)) velocity.y += 1.0F;
        if (Input::GetKeyPressed(KeyCode::S)) velocity.y -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::A)) velocity.x -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::D)) velocity.x += 1.0F;

        // Fire: space OR the A button, once per press.
        if (Input::GetKeyDown(KeyCode::SPACE) ||
            Input::GetControllerButtonDown(ControllerCode::A, ControllerNumber::CONTROLLER_1))
        {
            Fire();
        }

        transform.Translate(velocity * speed * Time::GetDeltaTime(), Space::World);
    }

    void Fire() { }
}
\`\`\`

> [!WARNING]
> Notice this reads two hard-coded keys for every action, and there's no way for the player to rebind them or for a designer to tune deadzones. That's fine for a jam — but the moment you want remappable controls, "hold to charge", or clean multi-device support, it's time for [Input Actions](/tutorials/input-actions).

## Where to go next

Turn these reads into movement with [Physics](/tutorials/physics), or step up to rebindable, designer-friendly controls with [Input Actions](/tutorials/input-actions).
`},{id:`input-actions`,title:`Input Actions: The Input Module`,icon:`fa-gamepad`,category:`Input`,blurb:`Bind rebindable named actions, add deadzones and hold/tap, and debug them live.`,md:`# Input Actions: The Input Module

Reading \`KeyCode::SPACE\` directly works, but it hard-codes your controls: no rebinding, no clean gamepad support, no "hold to charge" without hand-rolled timers. Comet's **Input module** fixes all of that. You define named **actions** — "Jump", "Move", "Fire" — in the editor, bind them to any keys, buttons or sticks you like, and your code just asks the action for its value. Rebinding, deadzones, hold/tap detection and multi-device support all become configuration instead of code.

> [!TIP]
> This is the layer above [raw input polling](/tutorials/input). If you only need a couple of fixed keys, polling is simpler. For a shippable game with gamepad support and remappable controls, use actions.

## The model: groups, actions, bindings

Three concepts nest inside each other:

- An **Input Group** organizes related actions — a \`Gameplay\` group, a \`UI\` group, a \`Vehicle\` group. Groups can be enabled and disabled as a unit, so entering a menu can switch the whole control scheme in one line.
- An **Input Action** is a named intent with a **value type**: \`Button\` (pressed / not), \`Axis\` (a 1-D float, like a throttle) or \`Vector2\` (a 2-D direction, like movement).
- A **Binding** connects a physical control to an action. One action can have many bindings — that's how *Jump* answers to both the space bar and the gamepad's A button. **Composite** bindings combine several controls into one value (four keys → a \`Vector2\`, two keys → an axis).

## Configuring actions in the editor

Open **Project Settings → Input**. This is where the whole scheme is authored:

![The Input panel in Project Settings, with groups, actions and their bindings.](/tutorials/input-settings.png)

1. **Add a group** (e.g. \`Gameplay\`).
2. **Add actions** to it (e.g. \`Move\` as a \`Vector2\`, \`Jump\` as a \`Button\`) and pick each one's value type.
3. **Add bindings** to each action. For \`Move\`, a **2D Vector composite** turns W/A/S/D into a \`Vector2\`; add a second binding for the gamepad's left stick and the action seamlessly accepts either. For \`Jump\`, add the space bar and the A button.
4. Optionally attach **processors** and **interactions** (below).
5. Save — the scheme is stored with the project.

### Processors: shaping the value

A **processor** post-processes a binding's or action's raw value:

- **Deadzone** — ignore tiny stick drift below a threshold.
- **Invert X / Invert Y** — flip an axis (inverted-Y aiming).
- **Scale** — multiply the value (sensitivity).
- **Normalize / Clamp** — bound the range.
- **Response Curve** — ease the input non-linearly, so small stick movements are gentle and large ones ramp up.

### Interactions: shaping *when* it fires

An **interaction** decides what counts as "performed", so timing-based inputs are configuration, not code:

- **Press** — fires immediately (the default).
- **Hold** — fires after the control is held for a set time (hold to charge, hold to interact).
- **Tap** — fires on a quick press-and-release.
- **Slow Tap / Multi-Tap** — deliberate presses, or double/triple taps (double-tap to dash).

## Reading actions from AngelScript

Fetch a group by name, pull out its actions, and read them. The value-type getters mirror the raw polling verbs:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::InputSettings;

class PlayerController : CometBehaviour
{
    private InputAction moveAction;
    private InputAction jumpAction;

    void Start()
    {
        InputGroup group = InputSettings::GetGroupByName("Gameplay");
        if (group !is null)
        {
            moveAction = group.GetActionByName("Move");
            jumpAction = group.GetActionByName("Jump");
        }
    }

    void Update()
    {
        // One Vector2, whether it came from WASD or the left stick.
        if (moveAction !is null)
        {
            Vector2 move = moveAction.GetVector2();
            transform.Translate(move * 5.0F * Time::GetDeltaTime(), Space::World);
        }

        // wasPressedThisFrame is the action-system GetKeyDown.
        if (jumpAction !is null && jumpAction.wasPressedThisFrame)
        {
            Jump();
        }
    }

    void Jump() { }
}
\`\`\`

The state accessors:

| Accessor | Equivalent raw verb |
|----------|--------------------|
| \`isPressed\` | \`GetKeyPressed\` (held) |
| \`wasPressedThisFrame\` | \`GetKeyDown\` (press edge) |
| \`wasReleasedThisFrame\` | \`GetKeyUp\` (release edge) |
| \`GetBool()\` / \`GetFloat()\` / \`GetVector2()\` | typed value read |

\`phase\` (\`IDLE\` / \`STARTED\` / \`PERFORMED\`) exposes the interaction state machine when you need it.

## Callbacks instead of polling

For fire-and-forget events, subscribe to an action's signals rather than checking it every frame:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::InputSettings;

class WeaponController : CometBehaviour
{
    void Start()
    {
        InputGroup group = InputSettings::GetGroupByName("Gameplay");
        InputAction fire = group.GetActionByName("Fire");
        if (fire !is null)
        {
            fire.onStarted.Add(InputActionCallback(OnFireStarted));
            fire.onCancelled.Add(InputActionCallback(OnFireReleased));
        }
    }

    void OnFireStarted(InputAction action)   { Debug::Log("fire down"); }
    void OnFireReleased(InputAction action)  { Debug::Log("fire up"); }
}
\`\`\`

\`onStarted\`, \`onPerformed\` and \`onCancelled\` fire once per state transition — ideal for hold/charge weapons where you care about the *edges*, not every frame in between.

## The generated InputWrapper

Typing action names as strings is error-prone. The editor can generate a typed **InputWrapper** for your groups, so you can reach any action with autocompletion and no string lookups:

\`\`\`angelscript
// Generated from the editor's Input settings:
Vector2 move = InputWrapper::Gameplay.Move.GetVector2();
if (InputWrapper::Gameplay.Jump.wasPressedThisFrame) Jump();
\`\`\`

**Generating it:** at the top of the **Project Settings → Input** panel, next to **Input Wrapper**, click **Create**. Comet writes an \`InputWrapper\` script with a typed accessor for every group and action, which you can then use anywhere in your code.

> [!IMPORTANT]
> The wrapper is *generated code* — a snapshot of your scheme, not a live view of it. **Every time you add, remove or rename a group or action, regenerate it by clicking the refresh button** (the *Create* control becomes a refresh once the wrapper exists). Skip this and the wrapper drifts out of sync — a renamed action still exposes its old name, and a new one won't appear at all.

Under the hood the wrapper simply caches \`GetGroupByName\` / \`GetActionByName\` for you (exactly the pattern shown above), but you get compile-time names and IDE completion for free.

## Switching schemes with groups

Because groups enable and disable as a unit, swapping control contexts is trivial:

\`\`\`angelscript
using namespace CometEngine::InputSettings;

void OpenPauseMenu()
{
    InputSettings::GetGroupByName("Gameplay").enabled = false;
    InputSettings::GetGroupByName("UI").enabled = true;
}
\`\`\`

Now \`Gameplay\` actions go quiet while the pause menu is up, and the \`UI\` group's Navigate/Submit/Cancel take over — no flags threaded through your gameplay code.

## The Input Debugger

When a binding "doesn't fire" or a stick reads the wrong axis, open **Window → Input Debugger**. It lists every group and action with its **value type**, live **phase**, and current **value**, updating in real time — so you can watch an action light up as you press the key and confirm the binding is wired the way you think.

![The Input Debugger panel showing live action values in play mode.](/tutorials/input-debugger.png)

At the top it also shows the **active device** (Keyboard & Mouse or Gamepad) and the **number of connected controllers**. Live values appear once you enter **play mode** — in edit mode it prompts you to press Play.

> [!NOTE]
> The Input Debugger is the fastest way to diagnose input problems: if the action doesn't react here, the binding is wrong (fix it in Project Settings); if it *does* react here but not in your game, the bug is in your script.

## Where to go next

Drive a character with actions and [Physics](/tutorials/physics), or wire the \`UI\` group's Navigate/Submit into your [menus](/tutorials/ui-system).
`},{id:`ui-system`,title:`Building User Interfaces`,icon:`fa-window-maximize`,category:`UI`,blurb:`Canvas, RectTransform anchoring, buttons, text, layouts and input events.`,md:'# Building User Interfaces\n\nMenus, HUDs, dialogs, settings screens — Comet\'s UI system is a retained, anchor-based layout system in the spirit of Unity\'s uGUI: a **Canvas** at the root, **RectTransform** on every element, and a family of widgets (Button, Text, Image, InputField, Slider...) that raise events your scripts react to.\n\n![A Canvas with a button selected, showing the RectTransform anchors in the inspector.](/tutorials/ui-canvas.png)\n\n## The Canvas\n\nEvery piece of UI lives under a **Canvas** entity (right-click the Hierarchy → **UI → Canvas**). Its **Render Mode** decides where the UI exists:\n\n- **Screen Space** — the canvas is glued to the screen. Menus, HUDs, anything resolution-anchored.\n- **World Space** — the canvas lives in the world like any other entity. Health bars over enemies, computer screens inside the scene, damage numbers.\n\nCanvases can be **nested**; a nested canvas can `overrideSorting` to force itself above or below its surroundings.\n\n## RectTransform: anchors, pivot and size\n\nUI entities replace the plain Transform with a **RectTransform** — a rectangle whose position and size are expressed *relative to the parent rectangle* through **anchors**:\n\n- `anchorMin` / `anchorMax` — two normalized points (0–1) in the parent. When both are equal you get a fixed-size element pinned to that point; when they differ, the element **stretches** with the parent.\n- `pivot` — the point of the element (0–1) that `anchoredPosition` positions, and the center of rotation/scaling.\n- `anchoredPosition` + `size` — where the pivot sits relative to the anchors, and how big the rect is.\n- When stretched, you edit the margins instead: `leftDistance`, `rightDistance`, `topDistance`, `bottomDistance`.\n\nThe Inspector\'s anchor preset widget covers the common cases in one click — corners, edges, center, and full-stretch. Rules of thumb:\n\n> [!TIP]\n> Anchor each element to the screen region it belongs to: score to the top-left, minimap to the top-right, action bar stretched along the bottom. The layout then survives every aspect ratio without a single line of code.\n\nFrom script, the same properties are read/write:\n\n```angelscript\nusing namespace CometEngine;\n\nclass HealthBarFill : CometBehaviour\n{\n    private RectTransform rect;\n    private float fullWidth;\n\n    void Start()\n    {\n        rect = RectTransform::Get(entity);\n        fullWidth = rect.size.x;\n    }\n\n    void SetHealth(float normalized) // 0..1\n    {\n        rect.size = Vector2(fullWidth * normalized, rect.size.y);\n    }\n}\n```\n\n## The widget family\n\nAll widgets live in the `CometEngine::UI` namespace and are created from the Hierarchy\'s **UI** submenu. The visual ones derive from `Graphic` (which gives them `color`, `material` and a `mouseFilter`); the interactive ones derive from `Selectable` (which adds `interactable`, hover/press **transitions**, and keyboard/gamepad **navigation**):\n\n| Widget | Purpose | Key members |\n|--------|---------|-------------|\n| `Text` | Styled text, BBCode, auto-sizing | `text`, `font`, `fontSize`, `horizontalAlignment`, `bbcodeEnabled`, `bold`... |\n| `Image` | Sprite display, 9-slice, tiling | `sprite`, `renderMode` (Simple/Sliced/Tiled), `fillCenter` |\n| `Button` | Click target | `onClick`, `interactable` |\n| `InputField` | Text entry | `textValue`, `characterLimit`, `contentType`, `onValueChanged`, `onEndEdit` |\n| `Slider` | Draggable value | `value`, `minValue`, `maxValue`, `wholeNumbers`, `onValueChanged` |\n| `Toggle` | Checkbox | `isOn`, `group`, `onValueChanged` |\n| `ToggleGroup` | Radio-button behaviour for Toggles | `allowSwitchOff` |\n| `DropDown` | Option list | `value`, `AddOption()`, `SetOptions()`, `onValueChanged` |\n| `ScrollRect` | Scrollable content | `content`, `horizontal`, `vertical`, `movementType`, `inertia` |\n| `Scrollbar` | Standalone scroll handle | `value`, `size`, `direction` |\n\n## Reacting to input\n\nThere are two complementary mechanisms.\n\n### 1. Pointer interfaces — any entity, any shape\n\nImplement one or more pointer interfaces on a `CometBehaviour` and the UI input system calls you directly. This is the pattern used across Comet\'s own sample project:\n\n```angelscript\nusing namespace CometEngine;\nusing namespace CometEngine::UI;\n\nclass PlayButton : CometBehaviour, IPointerClickAction\n{\n    void OnPointerClick(PointerEvent pointerEvent)\n    {\n        Debug::Log("Play clicked!");\n        SceneManagement::SceneManager::LoadScene("Level1");\n    }\n}\n```\n\nThe full set: `IPointerClickAction`, `IPointerDownAction`, `IPointerUpAction`, `IPointerUpOutsideAction`, `IPointerEnterAction`, `IPointerExitAction`, `IBeginDragAction`, `IDragAction`, `IEndDragAction`, `ISelectAction`, `IDeselectAction`, `ISubmitAction`. Drag-and-drop, for instance, is three methods:\n\n```angelscript\nclass DraggableCard : CometBehaviour, IBeginDragAction, IDragAction, IEndDragAction\n{\n    void OnBeginDrag(PointerEvent event) { Debug::Log("BEGIN DRAG"); }\n    void OnDrag(PointerEvent event)      { Debug::Log(event.handler.entity.name); }\n    void OnEndDrag(PointerEvent event)   { Debug::Log("END DRAG"); }\n}\n```\n\n### 2. Widget events — values, not clicks\n\nValue widgets expose typed events (`CometEvent` / `CometEventArg<T>`). Hook persistent listeners in the Inspector (the button\'s **On Click** list), or subscribe at runtime:\n\n```angelscript\nusing namespace CometEngine;\nusing namespace CometEngine::UI;\n\nclass SettingsMenu : CometBehaviour\n{\n    private Slider volumeSlider;\n\n    void Start()\n    {\n        volumeSlider = Slider::Get(Entity::Find("VolumeSlider"));\n        volumeSlider.minValue = 0.0F;\n        volumeSlider.maxValue = 1.0F;\n    }\n\n    void Update()\n    {\n        // Polling the value each frame is the simplest reliable pattern.\n        AudioSystem::SetMasterVolume(volumeSlider.value);\n    }\n}\n```\n\n## Real patterns from the sample project\n\n**Reading an InputField** (the multiplayer menu reads the server IP this way):\n\n```angelscript\nstring ReadIp()\n{\n    Entity ipEntity = Entity::Find("IpInput");\n    if (ipEntity !is null)\n    {\n        InputField field = InputField::Get(ipEntity);\n        if (field !is null && field.textValue.length() > 0)\n        {\n            return field.textValue;\n        }\n    }\n    return "127.0.0.1";\n}\n```\n\n**Filling a DropDown with the available screen resolutions:**\n\n```angelscript\nusing namespace CometEngine;\nusing namespace CometEngine::UI;\n\nclass ResolutionPicker : CometBehaviour\n{\n    private DropDown dropDown;\n\n    void Start()\n    {\n        dropDown = DropDown::Get(entity);\n\n        array<Resolution> resolutions = Window::GetAvailableResolutions();\n        array<DropDownOption> options;\n        for (uint i = 0; i < resolutions.length(); i++)\n        {\n            DropDownOption option;\n            option.name = resolutions[i].ToString();\n            options.insertLast(option);\n        }\n        dropDown.SetOptions(options);\n    }\n}\n```\n\n**Updating a Text label at runtime:**\n\n```angelscript\nvoid IncreaseCount()\n{\n    Entity ent = Entity::Find("TextClickCounter");\n    if (ent !is null)\n    {\n        UI::Text text = UI::Text::Get(ent);\n        if (text !is null)\n        {\n            int count = parseInt(text.text);\n            ++count;\n            text.text = formatInt(count);\n        }\n    }\n}\n```\n\n## Rich text with BBCode\n\nSet `bbcodeEnabled` on a Text and you can mix styling inline — and even register **custom tags** that scripts animate:\n\n```angelscript\nusing namespace CometEngine;\nusing namespace CometEngine::UI;\n\nclass FancyTitle : CometBehaviour\n{\n    void Start()\n    {\n        Text text = Text::Get(entity);\n        text.bbcodeEnabled = true;\n        text.RegisterBBCodeHandler("rainbow", BBCodeHandlerDelegate(RainbowTag));\n        text.text = "Welcome to [rainbow]Comet Engine[/rainbow]!";\n    }\n\n    void RainbowTag(BBCodeHandlerData data)\n    {\n        // Called per character inside the tag, every frame.\n        float hue = data.elapsedTime * 2.0F + float(data.relativeIndex) * 0.35F;\n        data.color = Color(Math::Sin(hue) * 0.5F + 0.5F,\n                           Math::Sin(hue + 2.1F) * 0.5F + 0.5F,\n                           Math::Sin(hue + 4.2F) * 0.5F + 0.5F,\n                           1.0F);\n    }\n}\n```\n\nThe handler receives the tag\'s parameters (`GetFloat/GetString/GetInt`), the character index and mutable `color`, `offset` and `visible` fields — enough for wave, shake and typewriter effects.\n\n## Automatic layouts\n\nStop positioning list items by hand — add a layout behaviour to the parent:\n\n- **VerticalLayout / HorizontalLayout** — stack children with `spacing` and `padding`; `childWidthFitMode` / `childHeightFitMode` optionally stretch them (`FIT_PARENT`, `FIT_AVAILABLE`).\n- **GridLayout** — fixed `cellSize` + `spacing`, flowing by `constraint` (`FLEXIBLE`, `FIXED_COLUMNS`, `FIXED_ROWS`) from a `startCorner`.\n- **LayoutElementConstraints** — per-child overrides: `minSize`, `preferredSize`, `flex`, or `ignoreLayout` to opt out.\n\nCombine with **ScrollRect** for scrollable lists: put the layout on the `content` rect and the ScrollRect handles clamping, elasticity and inertia. Use a **Mask** to clip the content to the viewport, and a **CanvasGroup** to fade or disable a whole subtree at once (`alpha`, `interactable`).\n\n## Fonts\n\nComet accepts two kinds of font, and both plug into a Text\'s `font` field:\n\n- **Vector fonts** — import a `.ttf` or `.otf` and the engine rasterizes glyphs at any size, so text stays crisp at every scale. The default for UI.\n- **Bitmap fonts** — a pre-rendered glyph atlas (a texture plus its layout), ideal for pixel-art games where you want text to scale in hard pixels rather than smooth vectors, or to match a specific retro look.\n\nText styling is per-widget regardless of the font kind: `fontSize` (or `autoFontSize` with min/max bounds to fit the rect), alignment, `wrapping`, `overflowMode`, plus `bold`, `italic`, `underline` and `strikethrough`.\n\n## Where to go next\n\nWire your new menu to actual gameplay: start a match in [Networking & Multiplayer](/tutorials/networking), or make the settings screen control [Audio & Mixers](/tutorials/audio).\n'},{id:`audio`,title:`Audio & Mixers`,icon:`fa-volume-high`,category:`Audio`,blurb:`Play 2D and positional sound, route it through mixer groups and control it from code.`,md:`# Audio & Mixers

Sound sells the scene. Comet's audio stack — built on the battle-tested SoLoud engine — gives you positional 2D/3D sources, an Audio Mixer with hierarchical groups and snapshot layouts, DSP effects, and a scripting API that covers everything from "play a beep" to runtime device switching.

## The three core pieces

1. **AudioSample** — the imported sound resource (\`.wav\`, \`.ogg\`, \`.mp3\`).
2. **AudioSource** — a behaviour that plays samples from an entity.
3. **AudioListener** — the "ears". Add exactly one, usually on the camera. Without a listener in the scene, nothing is heard (the console warns you).

Add them from **Add Behaviour → Audio → Audio Source / Audio Listener**.

![An AudioSource inspector with a clip and mixer group assigned.](/tutorials/audiosource-inspector.png)

## The AudioSource inspector

| Field | Meaning |
|-------|---------|
| **Mode** | \`2D Audio\` (pan only) or \`3D Audio\` (distance attenuation + Doppler). |
| **Audio Sample** | The clip to play. |
| **Audio Mixer Group** | Where the sound routes — see Mixers below. |
| **Play On Enable** | Auto-play whenever the behaviour is enabled. |
| **Loop** | Restart when finished. |
| **Mute** | Silence without stopping. |
| **Volume** | Linear gain \`0.0 – 1.0\`. |
| **Pitch** | Playback speed \`0.01 – 2.0\`. |
| **Pan** | Stereo balance \`-1\` (left) to \`1\` (right) — 2D mode. |
| **Min / Max Distance** | 3D mode: full volume inside min, silent beyond max. |
| **Ignore Effects / Ignore Listener Effects** | Skip AudioEffect behaviours on this entity / on the listener. |

Import settings on the AudioSample itself: **Preload Data** (decode on load — snappy playback) and **Is Stream** (stream from disk — big music files without the memory cost).

## Playing sounds from AngelScript

The bread-and-butter controls mirror the inspector:

\`\`\`angelscript
using namespace CometEngine;

class DoorBell : CometBehaviour
{
    private AudioSource source;

    void Start()
    {
        source = AudioSource::Get(entity);
        source.volume = 0.8F;
    }

    void Update()
    {
        if (Input::GetKeyDown(KeyCode::E))
        {
            source.Play();     // also: Pause(), Resume(), Stop()
        }

        if (source.isFinished)
        {
            Debug::Log("ding done");
        }
    }
}
\`\`\`

\`isPlaying\`, \`isPaused\` and \`isFinished\` report state; \`timePosition\` reads/writes the playhead in milliseconds; \`PlayOnce(sample)\` fires a different clip through this source's settings without replacing its assigned sample.

### Fire-and-forget one-shots

For impacts, pickups and UI clicks you don't want to manage a source at all — use the static helpers:

\`\`\`angelscript
// Play a sample globally (2D):
AudioSource::PlaySingle(explosionSample, 0.9F);

// Play at a world position (3D attenuation from that point):
AudioSource::PlaySingleAtPosition(explosionSample, transform.position, 1.0F);

// Need to control it afterwards? Use the tracked variants:
AudioSource handle = AudioSource::PlaySingleTracked(alarmSample, 1.0F);
// ... later:
handle.Stop();
\`\`\`

Untracked one-shots clean themselves up when playback ends.

> [!NOTE]
> Assign samples to script fields through the Inspector by declaring them, e.g. \`AudioSample explosionSample;\` — or load them at runtime with \`RuntimeAssets::LoadResource("Audio/Explosion", ResourceType::AUDIO)\`.

## 2D vs 3D sound

Set **Mode** to \`3D Audio\` and the source attenuates linearly between **Min Distance** and **Max Distance** from the listener, pans by direction, and applies **Doppler** when either side moves. Three global knobs shape the whole mix:

\`\`\`angelscript
AudioSystem::SetRolloffScale(1.5F);     // stronger distance falloff everywhere
AudioSystem::SetDopplerFactor(1.0F);    // 0 = off, 1 = realistic, >1 exaggerated
AudioSystem::SetAudioSourceDefaultMinDistance3D(2.0F);   // defaults for new sources
AudioSystem::SetAudioSourceDefaultMaxDistance3D(40.0F);
\`\`\`

## The Audio Mixer

Routing every source straight to the speakers gets unmanageable fast. Create a mixer asset — **Create Resource → Audio Mixer** in the Project panel — and open it to edit its group tree:

![The Audio Mixer window with Master, Music and SFX groups.](/tutorials/audio-mixer.png)

- Every mixer starts with a **Master** group; add children like \`Music\`, \`SFX\`, \`UI\`, \`Voice\` from the context menu.
- Each group has **Volume**, **Pitch**, **Muted** and **Use Effects**.
- Volumes multiply down the tree: a sound in \`SFX\` plays at \`master.volume × sfx.volume × source.volume\`.
- Point each AudioSource's **Audio Mixer Group** field at the right group, and your options menu suddenly needs three sliders instead of three hundred.

### Controlling groups from script

Mixer groups are assets — reference them from a script with a serialized handle field, assign them in the Inspector, and change them live. This is the Sandbox project's audio controller, trimmed:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Audio;

class AudioOptions : CometBehaviour
{
    [Serialize] AudioMixerGroup master;
    [Serialize] AudioMixerGroup music;
    [Serialize] AudioMixerGroup effects;

    void Update()
    {
        if (Input::GetKeyDown(KeyCode::M))
        {
            master.muted = !master.muted;       // mute everything
        }
        if (Input::GetKeyDown(KeyCode::NUM_1))
        {
            music.volume = 0.25F;               // duck the music
        }
        if (Input::GetKeyDown(KeyCode::NUM_2))
        {
            effects.volume = 1.0F;
        }
    }
}
\`\`\`

> [!TIP]
> \`[Serialize]\` exposes a handle field in the Inspector so you can drag the mixer group (a sub-resource of the mixer asset) straight into it.

### Layouts: mixer snapshots

A mixer can store multiple **layouts** — complete snapshots of every group's settings. Author a \`Default\` layout and a \`Underwater\` layout (low-passed, muffled volumes), then switch at runtime:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Audio;

class WaterZone : CometBehaviour
{
    [Serialize] AudioMixer gameMixer;

    void EnterWater()
    {
        array<AudioMixerLayout> layouts = gameMixer.GetLayouts();
        for (uint i = 0; i < layouts.length(); i++)
        {
            if (!layouts[i].isDefault)
            {
                layouts[i].Activate();   // apply the snapshot
            }
        }
    }
}
\`\`\`

The layout marked **Is Default** is applied automatically when the scene loads.

## Audio effects

Four DSP effects ship as behaviours under **Add Behaviour → Audio/Effects**: **AudioEffectDistortion**, **AudioEffectEcho**, **AudioEffectFlange** and **AudioEffectReverb**.

- On a **source entity**, the effect processes that source's output.
- On the **listener entity**, it processes everything the listener hears — instant cave reverb.

Per-source opt-outs: \`ignoreEffects\` (skip effects on the source's own entity) and \`ignoreListenerEffects\` (skip the listener's).

## Global playback & devices

\`AudioSystem\` also handles app-wide concerns — pausing the whole mix for your pause menu, and output-device selection for a settings screen:

\`\`\`angelscript
AudioSystem::SetMasterVolume(0.5F);
AudioSystem::PauseAll();     // pause menu opened
AudioSystem::ResumeAll();    // and closed
AudioSystem::StopAll();

// Offer an output-device picker:
array<string> devices = AudioSystem::GetOutputDevices();
AudioSystem::SetCurrentOutputDevice(devices[0]);
\`\`\`

Hot-plugging is signalled through \`AudioSystem\` delegates (\`onOutputDeviceConnected\`, \`onOutputDeviceDisconnected\`) so your settings UI can refresh itself.

## Where to go next

Give your buttons click sounds in the [UI tutorial](/tutorials/ui-system), or trigger footsteps from animation events in [Animation & the Animator](/tutorials/animation).
`},{id:`navigation`,title:`Navigation: NavMesh, Agents & Obstacles`,icon:`fa-route`,category:`Navigation`,blurb:`Bake navigation meshes, move agents along paths and avoid dynamic obstacles.`,md:`# Navigation: NavMesh, Agents & Obstacles

Enemies that chase, NPCs that wander, units that flow around each other — 2D pathfinding in Comet is built on a baked **navigation mesh**, **A\\*** path queries with funnel smoothing, and optional **RVO collision avoidance** so crowds of agents don't clip through one another.

![A Navigation Region covering the scene, a Navigation Obstacle ringing the cloud, and the region's settings — including the Bake button — in the Inspector.](/tutorials/navigation-scene.png)

## The building blocks

Four behaviours, all under **Add Behaviour**:

| Behaviour | Role |
|-----------|------|
| **Navigation Region** | Defines *where walking is possible* and bakes the navmesh. |
| **Navigation Agent** | Asks for paths and follows them; optionally avoids other agents. |
| **Navigation Obstacle** | Carves holes in the navmesh and/or pushes agents away dynamically. |
| **Navigation Link** | Connects two points that aren't walkable-between — jumps, teleporters, bridges. |

## Setting up the walkable area

1. Create an entity and add a **Navigation Region**.
2. Set its **Size** — the rectangle to bake — or click **Edit Outline** and drag the green vertices to author any closed polygon.
3. Set **Agent Radius**: the mesh is inset by this amount so paths never hug walls tighter than your agents can fit.
4. Enable **Parse Geometry** if you want solid (non-trigger) colliders carved out automatically, and choose which physics layers with **Parse Collision Mask**.
5. Press **Bake Navigation Mesh**.

The baked, walkable polygons show as a colored overlay when scene gizmos are enabled. Multiple regions connect automatically where they touch (and across small gaps if **Use Edge Connections** is on). Regions also support pathfinding **costs** — raise **Travel Cost** above 1 to make agents prefer going around mud, or **Enter Cost** to penalize entering at all.

> [!NOTE]
> Baking happens on background threads at runtime too: call \`region.Bake()\` from script after you move platforms around or spawn structures, and agents re-path automatically when the new mesh is ready.

## Moving an agent

Add a **Navigation Agent** to your character. The core loop is: set \`targetPosition\`, then every physics step walk toward \`GetNextPathPosition()\`. This is the Sandbox project's agent, verbatim:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::Navigation;

class AgentTest : CometBehaviour
{
    Vector2 desiredPos;
    float velocity = 7.0F;
    NavigationAgent agent;

    // Called before first frame
    void Start()
    {
        agent = NavigationAgent::Get(entity);

        // While avoidance is enabled the simulation reports the collision-free
        // velocity through the onVelocityComputed signal, so the body is moved
        // from inside that callback.
        agent.onVelocityComputed.Add(CometDelegateVector2(OnVelocityComputed));

        // Where the agent should navigate to.
        agent.targetPosition = desiredPos;
    }

    // Called every physics update
    void FixedUpdate()
    {
        if (agent.IsNavigationFinished())
        {
            return;
        }

        Vector2 currentPosition = Vector2(transform.position.x, transform.position.y);
        Vector2 nextPathPosition = agent.GetNextPathPosition();
        Vector2 newVelocity = (nextPathPosition - currentPosition).Normalized() * velocity;

        if (agent.avoidanceEnabled)
        {
            // Submit the desired velocity; the safe velocity arrives through onVelocityComputed.
            agent.SetVelocity(newVelocity);
        }
        else
        {
            // No avoidance: move straight away with the desired velocity.
            OnVelocityComputed(newVelocity);
        }
    }

    // Receives the collision-free velocity from the avoidance simulation and moves the body with it.
    void OnVelocityComputed(Vector2 safeVelocity)
    {
        transform.Translate(safeVelocity * Time::GetDeltaTime(), Space::World);
    }
}
\`\`\`

Three things to notice:

- **Setting \`targetPosition\` triggers the path query.** Change it any time — chasing a moving player means updating it every few frames.
- **\`GetNextPathPosition()\` is called every step** and advances through the corridor as you approach each waypoint (within \`pathDesiredDistance\`).
- **The same movement code works with and without avoidance** by funnelling both cases through one callback.

### Knowing where you stand

\`\`\`angelscript
agent.IsNavigationFinished();   // path exhausted (arrived, or nothing reachable)
agent.IsTargetReached();        // within targetDesiredDistance of the target
agent.IsTargetReachable();      // can the path actually end at the target?
agent.DistanceToTarget();       // straight-line distance
agent.GetPathLength();          // full length of the current path
array<Vector2> path = agent.GetCurrentNavigationPath();  // all waypoints, world space
\`\`\`

And if you prefer events over polling, agents expose signals: \`onPathChanged\`, \`onWaypointReached\`, \`onLinkReached\`, \`onTargetReached\`, \`onNavigationFinished\` and the \`onVelocityComputed\` you already met.

## Tuning the path

The agent inspector groups the important knobs:

| Property | Effect |
|----------|--------|
| **Path Desired Distance** | How close to a waypoint before advancing to the next. |
| **Target Desired Distance** | How close to the target counts as "arrived". |
| **Path Max Distance** | If the agent drifts further than this from the corridor, a fresh path is queried. |
| **Path Postprocessing** | \`Corridor Funnel\` (taut, natural paths — default), \`Edge Centered\` (through edge midpoints — good for grid games), \`None\` (raw polygon centroids). |
| **Simplify Path** | Ramer-Douglas-Peucker reduction; **Simplify Epsilon** sets the tolerance. |
| **Navigation Layers** | Bitmask matched against regions/links — agents only traverse matching layers. |

Navigation layers let one navmesh serve different movement types: mark water regions with a \`Water\` layer and only amphibious agents will consider them.

## Local avoidance (RVO)

Pathfinding keeps agents out of *walls*; avoidance keeps them out of *each other*. Tick **Avoidance Enabled** and configure:

- **Avoidance Radius** — the agent's personal space.
- **Max Speed** — a hard clamp the simulation may return.
- **Neighbor Distance / Max Neighbors** — how far and how many other agents to consider.
- **Time Horizon Agents / Obstacles** — how many seconds ahead collisions are predicted. Small = late, sharp dodges; large = early, gentle arcs.
- **Avoidance Priority** — 0–1; lower-priority agents yield to higher-priority ones. Give the boss \`1.0\` and the minions scatter.
- **Avoidance Layers / Mask** — which avoidance layers this agent occupies / respects.

With avoidance on, **you must drive movement through the callback**: call \`agent.SetVelocity(desired)\` each step and apply only the \`safeVelocity\` you receive in \`onVelocityComputed\` — exactly like the sample above.

## Dynamic obstacles

Add a **Navigation Obstacle** to anything agents should not walk through — a crate the player can push, a car that parks across the sidewalk. Choose its shape (**Obstacle Type**: \`Circle\` radius, \`Box\` size + offset, or a custom \`Polygon\` via **Edit Shape** / \`SetVertices()\`), then pick how it acts:

- **Carve Navigation Mesh** — cuts a hole in every overlapping region's navmesh, so *paths route around it* from the start.
- **Avoidance Enabled** — feeds it to the RVO simulation, so *moving agents steer around it* even mid-path.

Use carving for static-ish blockers, avoidance for anything that moves, or both for heavy movable objects.

## Navigation links

A **Navigation Link** joins **Start Position** and **End Position** across unwalkable space — a gap to jump, a ladder, a teleporter pad. Set **Bidirectional** off for one-way drops, and tune **Enter Cost** / **Travel Cost** so the pathfinder weighs the shortcut fairly. When an agent reaches a link waypoint, the \`onLinkReached\` signal fires — that's your cue to play the jump animation and move the body across.

## Gotchas worth knowing

> [!WARNING]
> - **Bake before you expect paths.** No baked region = no navmesh = every query fails. Bake in the editor, or call \`Bake()\` after loading.
> - Custom outlines need **at least 3 vertices**; the editor falls back to the rectangle otherwise.
> - Only **solid, non-trigger colliders** are carved by Parse Geometry.
> - An unreachable target leaves the path empty: check \`IsTargetReachable()\` and design a fallback (wander, wait, growl menacingly).

## Where to go next

Make your navigating enemies look alive with [Animation & the Animator](/tutorials/animation), or sync their positions across the network in [Networking & Multiplayer](/tutorials/networking).
`},{id:`networking`,title:`Networking & Multiplayer`,icon:`fa-network-wired`,category:`Networking`,blurb:`Host and join games, call RPCs, replicate state and spawn entities across the network.`,md:`# Networking & Multiplayer

Comet ships a complete high-level multiplayer stack: swap-in transport peers (ENet, WebSocket, WebRTC), attribute-driven **RPCs**, automatic **state replication**, networked **spawning**, and a host-authoritative model that scales from a LAN co-op prototype to a 4-player arena. This tutorial walks the whole pipeline using the engine's own multiplayer sample as the guide.

![A networked entity: the Multiplayer Synchronizer in the Inspector, ready to replicate its transform to every peer.](/tutorials/multiplayer-game.png)

## The lay of the land

- One machine is the **host** (also called the server) — it owns the truth. Everyone else is a **client**.
- Every connected machine gets a **unique peer id**: the host is always \`1\`, clients get \`2\`, \`3\`, ...
- A **transport peer** object moves the bytes. You create one and hand it to the global \`Network::Multiplayer\` API; from then on RPCs, replication and spawning ride on it:

| Transport | Use when |
|-----------|----------|
| \`ENetMultiplayerPeer\` | Desktop builds — UDP with reliability channels. The default choice. |
| \`WebSocketMultiplayerPeer\` | Web builds, or mixed web+desktop games with a socket server. |
| \`WebRTCMultiplayerPeer\` | Peer-to-peer with a signaling server. |
| \`OfflineMultiplayerPeer\` | Single-player that reuses your multiplayer code paths untouched. |

> [!WARNING]
> Web builds cannot open native UDP/TCP sockets — on the web platform use **WebSocket** (or WebRTC); the ENet peer is desktop-only.

## Hosting and joining

This is the sample's main menu, condensed. One button hosts, the other joins the address typed into an InputField:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::UI;
using namespace CometEngine::SceneManagement;

class MenuButton : CometBehaviour, IPointerClickAction
{
    int port = 7777;
    string serverAddress = "127.0.0.1";
    string roomSceneName = "Room";

    // Keep the peer in a member handle: it must outlive this function!
    private CometEngine::Network::ENetMultiplayerPeer peer;

    void Host()
    {
        peer = CometEngine::Network::ENetMultiplayerPeer();
        if (peer.CreateServer(port, 8))                    // port, max peers
        {
            Network::Multiplayer::SetMultiplayerPeer(peer);
            Debug::Log("Hosting, my id = " + formatInt(Network::Multiplayer::GetUniqueId()));
            SceneManager::LoadScene(roomSceneName);
        }
        else
        {
            Debug::Log("Could not host on port " + formatInt(port));
        }
    }

    void Join()
    {
        peer = CometEngine::Network::ENetMultiplayerPeer();
        if (peer.CreateClient(ReadIp(), port))
        {
            Network::Multiplayer::SetMultiplayerPeer(peer);
            SceneManager::LoadScene(roomSceneName);
        }
    }

    void OnPointerClick(PointerEvent event)
    {
        if (entity.name == "HostButton") Host();
        else if (entity.name == "JoinButton") Join();
    }

    string ReadIp()
    {
        Entity ipEntity = Entity::Find("IpInput");
        if (ipEntity !is null)
        {
            InputField field = InputField::Get(ipEntity);
            if (field !is null && field.textValue.length() > 0)
            {
                return field.textValue;
            }
        }
        return serverAddress;
    }
}
\`\`\`

> [!IMPORTANT]
> Store the peer in a **class member**, like \`peer\` above. A peer declared as a local variable is destroyed when the function returns — and the connection dies with it.

### Reacting to peers coming and going

The host typically watches connections to manage lobby slots:

\`\`\`angelscript
void Start()
{
    if (!Network::Multiplayer::HasMultiplayerPeer())
    {
        return;
    }

    Network::Multiplayer::GetOnPeerConnected().Add(CometDelegateuint64(OnPeerConnected));
    Network::Multiplayer::GetOnPeerDisconnected().Add(CometDelegateuint64(OnPeerDisconnected));
}

void OnPeerConnected(uint64 peerId)
{
    if (!Network::Multiplayer::IsServer()) return;   // only the host manages slots
    Debug::Log("Peer joined: " + formatInt(peerId));
}

void OnPeerDisconnected(uint64 peerId)
{
    if (!Network::Multiplayer::IsServer()) return;
    Debug::Log("Peer left: " + formatInt(peerId));
}
\`\`\`

## RPCs: calling methods across the network

Decorate a method with \`[Rpc(...)]\` and it becomes remotely callable. The decorator takes up to four values:

\`\`\`angelscript
[Rpc(<mode>, <sync>, <transfer>, channel = 0)]
\`\`\`

| Slot | Values | Meaning |
|------|--------|---------|
| **mode** | \`"any_peer"\` / \`"authority"\` | Who may invoke it: anyone, or only the entity's authority. |
| **sync** | \`"call_local"\` / \`""\` | Whether the *caller* also runs it locally. |
| **transfer** | \`"reliable"\` / \`"unreliable"\` / \`"unreliable_ordered"\` | Delivery guarantee. |
| **channel** | \`0–15\` | Ordering group for reliable packets. |

Send with the two global helpers — broadcast, or to one peer:

\`\`\`angelscript
// Broadcast to everyone (including yourself thanks to call_local):
Network::Multiplayer::Rpc(this, "SyncScore", score, wave);

// Only to the host (peer 1):
Network::Multiplayer::RpcId(this, 1, "RequestColor", colorIndex);
\`\`\`

And receive on the other side:

\`\`\`angelscript
// Clients ask the host for something; the host validates and answers.
[Rpc("any_peer", "reliable")]
void RequestColor(int colorIndex)
{
    if (!Network::Multiplayer::IsServer()) return;

    // Which client called us?
    int clientId = Network::Multiplayer::GetRemoteSenderId();
    Debug::Log("Peer " + formatInt(clientId) + " wants color " + formatInt(colorIndex));
}

// The host pushes state to everyone; call_local means the host applies it too.
[Rpc("authority", "call_local", "reliable")]
void SyncScore(int score, int wave)
{
    UpdateHud(score, wave);
}
\`\`\`

Pick the transfer mode by what the data is worth: **unreliable** for high-frequency input and cosmetic state (drops don't matter, the next packet fixes it), **reliable** for anything that must not be missed — fire commands, score changes, match flow.

## Replicating state automatically

Writing RPCs for every variable gets old fast. Comet replicates **fields** for you with two decorators:

\`\`\`angelscript
class ShipController : CometBehaviour
{
    // Sent once, inside the spawn packet — seeds late joiners.
    [ReplicateOnSpawn] int ownerPeerId = 0;
    [ReplicateOnSpawn] int colorIndex = 0;

    // Sent as reliable deltas whenever the value changes.
    [Replicate("on_change")] int health = 10;
    [Replicate("on_change")] bool alive = true;

    // "always" mode would send every frame, unreliably - for values that
    // change constantly anyway.
}
\`\`\`

For transforms, don't replicate fields by hand — add a **MultiplayerSynchronizer** behaviour to the entity and configure it once:

\`\`\`angelscript
void Start()
{
    MultiplayerSynchronizer sync = MultiplayerSynchronizer::Get(entity);
    if (sync !is null)
    {
        sync.AddTransformPreset();   // replicate position/rotation/scale
        sync.interpolate = true;     // smooth over network ticks on clients
    }
}
\`\`\`

The synchronizer can also hide an entity from specific peers — \`SetVisibilityFor(peerId, false)\` — for fog of war or per-player secrets.

## Spawning entities across the network

When the host instantiates a networked entity, every client needs a copy. A **MultiplayerSpawner** behaviour handles it: it registers spawnable prefabs (its \`spawnLimit\` caps runaway counts) and mirrors spawn/despawn to everyone:

\`\`\`angelscript
// HOST only: spawn one ship per occupied lobby slot.
void StartMatch()
{
    for (int i = 0; i < 4; i++)
    {
        if (slotPeer[i] == 0) continue;

        Entity ship = shipSpawner.Spawn(0);   // spawnable index 0
        if (ship !is null)
        {
            ShipController sc = ShipController::Get(ship);
            sc.ownerPeerId = slotPeer[i];      // [ReplicateOnSpawn] fields...
            sc.colorIndex  = slotColor[i];     // ...travel inside the spawn packet
        }
    }

    Network::Multiplayer::Rpc(this, "BeginMatch");
}
\`\`\`

Because \`ownerPeerId\` and \`colorIndex\` are \`[ReplicateOnSpawn]\`, every client — even one that joins later — receives the ship already configured.

## Authority: who simulates what

Every entity has a **multiplayer authority** — the peer that simulates it. By default that's the host. Three calls on \`Behaviour\` manage it:

\`\`\`angelscript
IsMultiplayerAuthority();          // am I the one simulating this entity?
GetMultiplayerAuthority();         // whose is it? (peer id)
SetMultiplayerAuthority(peerId);   // hand it over
\`\`\`

The sample's ships stay **host-authoritative**, which yields the classic, cheat-resistant split — *owners send input, the host simulates, state replicates back*:

\`\`\`angelscript
void Update()
{
    // 1. The OWNING player reads input and ships it to the host.
    if (IsOwner() && alive)
    {
        float mx = 0.0F, my = 0.0F;
        if (Input::GetKeyPressed(KeyCode::W)) my += 1.0F;
        if (Input::GetKeyPressed(KeyCode::S)) my -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::A)) mx -= 1.0F;
        if (Input::GetKeyPressed(KeyCode::D)) mx += 1.0F;

        if (Network::Multiplayer::IsServer())
        {
            inX = mx; inY = my;                                   // host: apply directly
        }
        else
        {
            Network::Multiplayer::RpcId(this, 1, "RecvInput", mx, my);   // client: send
        }
    }

    // 2. The HOST simulates every ship from the latest input.
    if (IsMultiplayerAuthority() && alive)
    {
        transform.Translate(Vector3(inX, inY, 0) * speed * Time::GetDeltaTime(), Space::World);
        // position replicates to everyone via the MultiplayerSynchronizer
    }
}

bool IsOwner()
{
    return ownerPeerId == Network::Multiplayer::GetUniqueId();
}

[Rpc("any_peer", "unreliable")]      // input: high-rate, drop-tolerant
void RecvInput(float mx, float my)
{
    if (!IsMultiplayerAuthority()) return;
    inX = mx; inY = my;
}
\`\`\`

Note the guard inside every RPC — **never trust the network**: \`RecvInput\` ignores calls when this peer isn't the authority, and host-side handlers validate requests before applying them.

## Cheat sheet

| Task | Call |
|------|------|
| Install a transport | \`Network::Multiplayer::SetMultiplayerPeer(peer)\` |
| Who am I? | \`GetUniqueId()\` (host = 1), \`IsServer()\` |
| Broadcast an RPC | \`Rpc(this, "Method", args...)\` (up to 8 args) |
| RPC to one peer | \`RpcId(this, peerId, "Method", args...)\` |
| Who called this RPC? | \`GetRemoteSenderId()\` |
| Peer joined/left | \`GetOnPeerConnected() / GetOnPeerDisconnected()\` \`.Add(CometDelegateuint64(Handler))\` |
| Kick a peer | \`DisconnectPeer(peerId, force)\` |
| Sync fields | \`[Replicate("on_change")]\`, \`[Replicate("always")]\`, \`[ReplicateOnSpawn]\` |
| Sync transforms | \`MultiplayerSynchronizer\` + \`AddTransformPreset()\` |
| Networked spawn | \`MultiplayerSpawner.Spawn(index)\` on the host |
| Leave the session | \`Network::Multiplayer::ClearMultiplayerPeer()\` |

## Where to go next

Build the lobby screen with the [UI system](/tutorials/ui-system), then package a client for your friends in [Exporting Builds & Shipping Patches](/tutorials/build-and-patches).
`},{id:`node-graph`,title:`Visual Scripting with Node Graphs`,icon:`fa-diagram-project`,category:`Visual Scripting`,blurb:`Author gameplay logic as node graphs and write your own custom nodes in AngelScript.`,md:`# Visual Scripting with Node Graphs

Not every piece of logic wants to be code. Dialogue trees, quest steps, cutscene sequencing, simple AI — these read beautifully as a **node graph**: boxes wired together, execution flowing along the wires. Comet's node graph system runs graphs on entities via a **Graph Updater**, and — uniquely — lets you write your own nodes in AngelScript.

![A node graph in the editor: the Entry node flows through a Branch into a Set Score node and a Print, while data wires feed a Compare from Get Time and increment a Score variable through an Add node.](/tutorials/node-graph.png)

## How a graph runs

A graph starts at an implicit **Entry** node and flows along **flow wires** (white) from one **flow node** to the next. Before a node runs, its **data inputs** are pulled from upstream **pure nodes** (stateless little calculators — Add, Compare, Get Time) along **data wires** (coloured). **Variables** carry state, and a graph can expose **inputs** and **outputs** that your game code reads and writes.

There are two kinds of node:

- **Flow nodes** — sit on the execution path. They can take time, branch, or loop. A flow node returns an \`ExecutionResult\` naming which output to continue along.
- **Pure nodes** — compute output values from inputs on demand, with no side effects. They're evaluated (and memoized) whenever a flow node needs their result.

## Running a graph on an entity

Add a **Graph Updater** behaviour, assign it a graph, and it runs a private copy of that graph (the asset itself is never mutated). Your code feeds the graph its inputs and reads its outputs by variable name:

\`\`\`angelscript
using namespace CometEngine;

class QuestRunner : CometBehaviour
{
    void Start()
    {
        GraphUpdater updater = GraphUpdater::Get(entity);

        // Push inputs into the graph...
        updater.SetInputFloat("playerLevel", 7.0);
        updater.SetInputBool("hasKey", true);
        updater.Start();
    }

    void Update()
    {
        GraphUpdater updater = GraphUpdater::Get(entity);
        if (!updater.isRunning)
        {
            // ...and read what it produced.
            Debug::Log("reward: " + updater.GetOutputInt("goldReward"));
        }
    }
}
\`\`\`

\`SetInputBool/Int/Float/String/Vector2/Vector3\` push values in; \`GetOutputBool/Int/Float/...\` read them back; \`Start()\` / \`Stop()\` and \`isRunning\` control the run. When a graph finishes, its **End Update Action** can restart it, disable the behaviour, or destroy the entity.

## Writing your own nodes in AngelScript

This is the powerful part: a node is just an AngelScript class with attributes. **Pure nodes** override \`Evaluate\` and declare \`[Input]\`/\`[Output]\` fields:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::GraphNode;

[GraphNodeMenuItem("Math/Add")]
class AddNode : PureNode
{
    [Input] float a;
    [Input] float b;
    [Output] float result;

    void Evaluate(GraphNode graph)
    {
        result = a + b;
    }
}
\`\`\`

**Flow nodes** declare their output pins in the constructor with \`super({...})\` and return an \`ExecutionResult\` naming the pin to continue along. A branch:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::GraphNode;

[GraphNodeMenuItem("Flow/Branch")]
class BranchNode : FlowNode
{
    [Input] bool condition;

    BranchNode()
    {
        super({"True", "False"});   // two flow outputs
    }

    ExecutionResult OnExecute(GraphNode graph)
    {
        return ExecutionResult(condition ? "True" : "False");
    }
}
\`\`\`

A flow node can also **span multiple frames** — return an empty \`ExecutionResult()\` to stay on the node and be called again next frame. That's how a Delay node works:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEngine::GraphNode;

[GraphNodeMenuItem("Flow/Delay")]
[NodeColor(0.2, 0.2, 0.5)]
class DelayNode : FlowNode
{
    [Input] float delaySeconds = 1.0F;
    private float startTime = 0.0F;

    DelayNode()
    {
        super({"Next"});
    }

    void OnExecuteStart(GraphNode graph)
    {
        startTime = Time::GetGameTime();
    }

    ExecutionResult OnExecute(GraphNode graph)
    {
        if (Time::GetGameTime() - startTime >= delaySeconds)
        {
            return ExecutionResult("Next");   // move on
        }
        return ExecutionResult();             // wait, retry next frame
    }
}
\`\`\`

The attributes are the glue:

- **\`[GraphNodeMenuItem("Path/Name")]\`** — registers the node in the graph editor's right-click *Add Node* menu under that path. Required.
- **\`[Input]\` / \`[Output]\`** — mark fields as data pins. Supported types: \`bool\`, \`int\`, \`uint\`, \`int64\`, \`uint64\`, \`float\`, \`string\`, \`Vector2\`, \`Vector3\`, and object handles.
- **\`[NodeColor(r, g, b)]\`** — an optional header colour.

Pure nodes can even resolve inputs **lazily** — override \`ResolveInputsManually()\` to return \`true\` and call \`ResolveInput(graph, "pinName")\` only for the branch you actually take, so an expensive or side-effecting upstream node on the path *not* chosen never runs.

## Authoring a graph in the editor

1. Create a graph object in the Project panel, then double-click to open the **graph editor**.
2. Right-click the canvas to add nodes from your \`[GraphNodeMenuItem]\` menu.
3. Drag from a flow output to the next node's flow input (white wires); drag from an \`[Output]\` pin to an \`[Input]\` pin (coloured wires).
4. Add **variables**, **inputs** and **outputs** in the side panel — those inputs/outputs are the contract your \`GraphUpdater\` code talks to.
5. Drop a **Graph Updater** on an entity and assign the graph.

> [!NOTE]
> Data-flow cycles (a pure node feeding itself) are detected and reported; flow loops are allowed and intentional. The runtime always executes a **clone** of the asset, so a running graph never corrupts the source.

## Where to go next

Node graphs pair naturally with everything else — kick one off from an [input action](/tutorials/input), have it move a platform along a [Bézier path](/tutorials/bezier), or drive an [animator](/tutorials/animation) from its outputs.
`},{id:`extending-the-editor`,title:`Extending the Editor`,icon:`fa-puzzle-piece`,category:`Editor Tooling`,blurb:`Build custom editor windows, inspectors and menu-bar tools in AngelScript.`,md:`# Extending the Editor

The Comet editor is built on the same AngelScript you write your game in — which means you can extend it. Anything you wish the editor did — a bespoke tool in the menu bar, a specialized inspector with a "Bake" button, a whole dockable window for editing your game's data — you write in script. No C++, no recompiling the engine: save the file and the editor picks it up.

## Editor scripts live in an \`Editor/\` folder

Any folder named **\`Editor\`** (for example \`Assets/Editor/\`) is special. Scripts inside it are compiled **only for the editor** and stripped from every exported build — they're where your tooling goes so it never ships in the game. (Under the hood they're compiled with \`COMET_EDITOR\` defined; see [Exporting Builds](/tutorials/build-and-patches).)

There are two base classes, both in the \`CometEditor\` namespace:

- **\`EditorBehaviour\`** — hosts **menu-bar items** and **custom inspectors**.
- **\`EditorWindow\`** — a **dockable window** you draw yourself.

Every example below starts with:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEditor;
\`\`\`

## Adding items to the main menu bar

Put \`[MainMenuItem("Path/Name")]\` on a method of an \`EditorBehaviour\` and it appears in the top menu bar. The path builds the submenu structure; the last segment is the clickable item.

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEditor;

class ProjectTools : EditorBehaviour
{
    [MainMenuItem("Tools/Open Design Doc")]
    void OpenDesignDoc()
    {
        App::OpenURL("https://docs.google.com/document/d/your-doc-here");
    }

    [MainMenuItem("Tools/Rebuild Atlas")]
    void RebuildAtlas()
    {
        Debug::Log("Rebuilding atlas...");
        // ...run your tool: read assets, write files, call Shell::ExecuteCommand, etc.
    }
}
\`\`\`

\`Tools\` becomes a top-level menu (or nests under an existing one), with **Open Design Doc** and **Rebuild Atlas** beneath it. This is the fastest way to wire a one-shot tool — an importer, a validator, a "download latest localizations" button — into the editor UI.

## Custom inspectors

There are two levels of control over how a component looks in the **Inspector**.

### 1. Decorate the fields (the quick way)

Most of the time you don't need a full custom inspector — you just want a field labelled, clamped or hidden. Annotate the fields of your \`CometBehaviour\` directly:

\`\`\`angelscript
using namespace CometEngine;

class Enemy : CometBehaviour
{
    [Header("Stats")]
    [Range(1, 100)] int health = 50;
    [Tooltip("Seconds between attacks")] float attackCooldown = 1.5F;

    [Space]
    [Header("Visuals")]
    [PreviewTexture] Texture portrait;

    [HideInInspector] float internalTimer;   // still serialized, just not shown
    [ReadOnly] int spawnId;                   // shown, but greyed out
}
\`\`\`

The field attributes:

| Attribute | Effect |
| --- | --- |
| \`[Header("...")]\` | A bold section label above the following field. |
| \`[Tooltip("...")]\` | Hover help on the field. |
| \`[Range(min, max)]\` | Draw a slider; \`[Min(n)]\` / \`[Max(n)]\` clamp one end. |
| \`[Space]\` | A vertical gap. |
| \`[HideInInspector]\` | Keep the field serialized but hide it from the Inspector. |
| \`[ReadOnly]\` | Show the value greyed-out and non-editable. |
| \`[PreviewTexture]\` | Draw a thumbnail for a \`Texture\` / \`Sprite\` field. |
| \`[TreeNodeDefaultOpen]\` | Start a nested object expanded. |
| \`[AssetIcon]\` | Use the referenced asset's icon. |

### 2. Draw the whole inspector yourself

When you want buttons, coloured text, live previews or conditional layout, take the inspector over completely. Put \`[CustomInspector("TargetType")]\` on an \`EditorBehaviour\` and implement \`OnCustomInspector\`:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEditor;

[CustomInspector("Enemy")]
class EnemyInspector : EditorBehaviour
{
    void OnCustomInspector(Enemy target)
    {
        GUI::TextColored(Color::red, "Enemy - danger level " + target.health);

        GUI::ShowProperty("health");          // the default widget for one field
        GUI::ShowProperty("attackCooldown");

        if (GUI::Button("Kill"))
            target.health = 0;
        GUI::SameLine();
        if (GUI::Button("Full Heal"))
            target.health = 100;

        GUI::ShowTexture(target.portrait, Vector2(150, 100));
    }
}
\`\`\`

- \`[CustomInspector("Enemy")]\` binds this drawer to the \`Enemy\` component by class name. Engine resource types work too — the built-in rule-tile editors use \`[CustomInspector("CometEngine::Tilemaps::RuleTile")]\`.
- \`OnCustomInspector(Enemy target)\` runs every frame the component is selected. \`target\` is the **live instance** — read and write its fields directly and the scene updates.
- \`GUI::ShowProperty("name")\` draws the default widget for a single field; \`GUI::ShowAllProperties()\` draws them all at once — a handy starting point you then add buttons around.

## The \`GUI\` API

Everything you draw — in an inspector or a window — goes through the immediate-mode **\`GUI\`** namespace. You call a widget **every frame**, and its return value *is* the interaction: \`GUI::Button\` returns \`true\` on the frame it's clicked, input widgets return the edited value.

\`\`\`angelscript
GUI::Text("A plain label");
GUI::TextColored(Color::green, "A coloured one");

if (GUI::Button("Do it")) { /* clicked this frame */ }

// Input widgets take the current value and return the (possibly) edited one.
// Store that value in a member field so it survives to the next frame.
count   = GUI::InputInt("Count", count);
speed   = GUI::DragInt("Speed", speed, 0.1F);   // drag left/right to scrub
enabled = GUI::Checkbox("Enabled", enabled);

bool edited = false;
name = GUI::InputText("Name", name, edited, GUI::InputTextFlags::EnterToAccept);
if (edited) Debug::Log("Committed: " + name);

if (GUI::BeginCombo("Mode", mode, GUI::ComboFlags::HeightLargest))
{
    if (GUI::Selectable("Easy", mode == "Easy")) mode = "Easy";
    if (GUI::Selectable("Hard", mode == "Hard")) mode = "Hard";
    GUI::EndCombo();
}
\`\`\`

A few things you'll reach for constantly:

- **Layout** — \`GUI::SameLine()\` keeps the next widget on the current row; \`GUI::SetCursorPosX(x)\` places it by hand.
- **IDs in loops** — when you draw the same label inside a loop, wrap each iteration in \`GUI::PushIDNum(i)\` / \`GUI::PopID()\` so every widget keeps a unique identity (otherwise they fight over one).
- **Inspector helpers** — \`GUI::ShowProperty\`, \`GUI::ShowAllProperties\`, \`GUI::ShowTexture\`, \`GUI::ShowSprite\`, and asset pickers like \`GUI::ShowResourceProperty\`.
- **Filtering** — a \`GUI::TextFilter\` gives you a search box that filters a list with \`.Pass(text)\`.

> [!TIP]
> Bracket a change with \`GUI::SaveState()\` right **before** you mutate the target, and the edit joins the editor's undo history — Ctrl+Z restores the previous value.

## Custom editor windows

For bigger tools — a level validator, an asset browser, a spawn-table editor — subclass **\`EditorWindow\`**. Its \`OnGUI()\` runs every frame the window is open, drawn with the same \`GUI\` API:

\`\`\`angelscript
using namespace CometEngine;
using namespace CometEditor;

[MainMenuItemWindow("Tools/Spawn Editor", "Spawn Editor")]
class SpawnEditor : EditorWindow
{
    private array<string> entries = {"Goblin", "Slime", "Bat"};
    private string filter;

    void Awake()
    {
        saveChangesMessage = "Save changes to the spawn table?";
    }

    void OnGUI()
    {
        GUI::Text("Spawn table");
        filter = GUI::InputText("Filter", filter);
        GUI::TextFilter tf = GUI::TextFilter(filter);

        int toRemove = -1;
        for (uint i = 0; i < entries.length(); i++)
        {
            if (!tf.Pass(entries[i])) continue;

            GUI::PushIDNum(i);                 // unique id per row
            GUI::Text(entries[i]);
            GUI::SameLine();
            if (GUI::Button("Remove")) toRemove = int(i);
            GUI::PopID();
        }
        if (toRemove >= 0)                     // mutate after the loop, not during
        {
            entries.removeAt(toRemove);
            hasUnsavedChanges = true;
        }

        if (GUI::Button("Add Goblin"))
        {
            entries.insertLast("Goblin");
            hasUnsavedChanges = true;
        }
    }

    WindowConfig OnGetWindowConfig()
    {
        WindowConfig config;
        config.initialSize = Vector2i(360, 480);
        config.initialPositionType = WindowConfigPositionType::CENTERED;
        config.dockable = true;
        config.iconRaw = RawIcon::AddressBook;
        return config;
    }
}
\`\`\`

### Opening a window

Two ways, and you'll often use both:

- **\`[MainMenuItemWindow("Tools/Spawn Editor", "Spawn Editor")]\`** on the class adds a menu-bar item that opens it. The second argument is the window title.
- **\`EditorWindow::CreateOrShow("SpawnEditor", "Spawn Editor")\`** opens (or focuses, if it's already open) the window by class name — call it from a \`[MainMenuItem]\`, a button in a custom inspector, anywhere.

### Configuring the window

\`OnGetWindowConfig()\` is optional and sets the window up the first time it appears. Beyond the fields above, \`WindowConfig\` also carries \`initialPosition\` (with \`WindowConfigPositionType::CUSTOM\`), \`resizable\`, \`hasMenuBar\`, \`hasCloseButton\`, \`hasTitleBar\`, \`canCollapse\` and more. \`iconRaw\` takes a \`RawIcon::\` name for the tab icon.

### A menu bar inside your window

Set \`hasMenuBar\` and draw one at the top of \`OnGUI\` with the menu widgets:

\`\`\`angelscript
if (GUI::BeginMenuBar())
{
    if (GUI::BeginMenu("File"))
    {
        if (GUI::MenuItem("Save"))  Save();
        if (GUI::MenuItem("Close")) Close();
        GUI::EndMenu();
    }
    GUI::EndMenuBar();
}
\`\`\`

### Unsaved changes

Set \`hasUnsavedChanges = true\` whenever the user edits something. If they try to close the window with unsaved work, the editor shows a confirmation using your \`saveChangesMessage\`, then calls **\`OnSaveChanges()\`** or **\`OnDiscardChanges()\`** so you can react:

\`\`\`angelscript
void OnSaveChanges()    { WriteTableToDisk(); hasUnsavedChanges = false; }
void OnDiscardChanges() { ReloadTableFromDisk(); }
\`\`\`

Windows also expose \`Focus()\`, \`Show()\`, \`Hide()\`, \`Close()\`, and read-only state like \`isDocked\`, \`isFocused\`, \`isHovered\` and \`isVisible\` — handy when one tool drives another.

## Custom asset types on the Create menu

\`[AssetMenu("Display Name", "Path/In/Create/Menu")]\` on a \`CometObject\` script adds an entry to the Project panel's **Create** menu, so you (and your team) can make instances of your own data types right in the editor:

\`\`\`angelscript
using namespace CometEngine;

[AssetMenu("Dialogue Table", "Gameplay/Dialogue Table")]
class DialogueTable : CometObject
{
    array<string> speakers;
    array<string> lines;
}
\`\`\`

Now **Create → Gameplay → Dialogue Table** drops a new \`DialogueTable\` asset into the project, editable in the Inspector — and skinnable with a \`[CustomInspector("DialogueTable")]\` of its own.

## Where to go next

Editor tooling compounds. A \`[CustomInspector]\` with a **Bake** button, an \`EditorWindow\` that lists every broken reference in your scenes, a \`[MainMenuItem]\` that kicks off your [export pipeline](/tutorials/build-and-patches) — each one shaves minutes off every day. And because it all lives in an \`Editor/\` folder, none of it ships in the game: it exists purely to make *building* the game faster.
`},{id:`packages`,title:`Packages & the Package Manager`,icon:`fa-cubes`,category:`Packages`,blurb:`Install add-ons from the Marketplace, resolve versions and locks, and create, export and publish packages of your own.`,md:`# Packages & the Package Manager

A **package** is a versioned, self-contained folder of assets and scripts that can be shared between projects and between people: a dialogue system, a shader collection, a set of tilesets, a whole toolkit. Comet's **Package Manager** installs them from the Comet Marketplace, from git repositories, from folders on your disk or from \`.cometpkg\` archives — resolves their dependencies, keeps them updated, and helps you create, version and publish your own.

This tutorial covers the whole system: the Package Manager window, every way to install and remove packages, how dependency resolution and version locking work, how to create a package of your own, every file a package contains and every field of those files, and how to export and publish to the Marketplace.

![The Package Manager window: source navigation on the left, the package list in the middle, and the selected package's details on the right.](/tutorials/pm-window.png)

## What a package is

On disk, a package is simply a folder with a \`package.cometPackage\` manifest at its root. The manifest gives it an identity (a **slug** like \`platformer-toolkit\`), a semantic **version** like \`1.2.0\`, presentation metadata, and declarations for everything it ships: dependencies and importable samples.

There are two package types:

- **\`package\`** — the normal kind. It installs under \`Packages/<slug>/\` in your project and is treated as **read-only**: the editor won't let you accidentally modify a library you'd lose changes to on the next update.
- **\`assetPack\`** — a one-time content import (sprite packs, audio bundles). Its files land in \`Assets/<slug>/\` as ordinary **editable** assets, and the Package Manager doesn't manage them afterwards — there is nothing to update or resolve.

A package in your project has an **origin**, shown as a chip next to its version in the list:

| Chip | Origin | Meaning |
|------|--------|---------|
| \`Registry\` | Comet Marketplace | Downloaded from a registry, verified by hash, updatable. |
| \`Git\` | Git repository | Fetched from a git URL, locked to a commit. |
| \`Local\` | Local folder | Live-linked to a folder on your disk (see [From a local folder](#from-a-local-folder)). |
| \`Archive\` | \`.cometpkg\` file | Installed from an archive on disk. |
| \`Custom\` | Embedded | Lives in your project as editable source — this is *your* package (or one you chose to take ownership of). |

Everything except \`Custom\` is **installed** (read-only, reproducible from the lock file). \`Custom\` packages are **embedded**: the folder under \`Packages/\` *is* the source, you edit it directly, and it's how you develop packages of your own.

A second set of chips marks the **release channel** of a version: \`Exp\` (experimental — any \`0.x\` version, or a pre-release tag starting with \`exp\`), \`Pre\` (any other pre-release tag such as \`-pre.1\` or \`-rc.2\`), and \`Deprecated\` for versions their author has withdrawn. Plain releases get no chip.

## The Package Manager window

Open it from **Window ▸ Package Manager**. It has four areas:

**The toolbar.** The **+ Install** button opens a menu with every install source — *Install from disk…*, *Install from folder…*, *Install from git URL…*, *Install by name…* — plus *Create package…*, which opens the [Create Package wizard](#creating-a-package). Next to it: a refresh button, the name of the current view, a search field that filters the list, and a gear menu with *Package settings…*, *Resolve now*, a *Show pre-release versions* toggle and *Open manifest*.

**The navigation column.** *In Project* lists everything in your project. When updates are available an *Updates* entry appears with a count; when something is wrong an *Errors* entry appears. *Marketplace* browses the online registry.

**The package list.** Each row shows the display name, the installed (or latest) version, and its chips — origin, channel, a blue ↑ when an update is available, and an \`AssetPack\` marker in the Marketplace view.

**The details pane.** The selected package's header (name, slug, version, origin), its action buttons, and tabs:

- **Description** — the package's markdown description, followed by its category, tags, license, minimum engine version, download count (Marketplace) and links (Documentation / Changelog / Homepage / Repository).
- **Versions** — the registry version history (see [Choosing versions](#choosing-versions-updating-downgrading)).
- **Dependencies** — what this package *depends on* (click through to each dependency, with the range and the version it resolved to) and what it is *used by* in your project.
- **Samples** — the package's importable samples, if it ships any.
- **Images** — screenshots, for Marketplace packages that provide them.

A status bar at the bottom shows the last registry refresh and what the manager is currently doing.

## Installing packages

### From the Marketplace

Select **Marketplace** in the navigation, browse or search, select a package and press **Install**. The latest published release is downloaded into the machine-wide package cache, its integrity hash is verified, and it's installed read-only under \`Packages/<slug>/\`. Your project manifest records the dependency and the lock records exactly what was installed.

If the package needs a newer engine than you're running, the Install button is disabled and a tooltip tells you the required version.

### Choosing versions, updating, downgrading

The **Versions** tab lists a registry package's history, newest first, with each version's channel chips, publish date, download count and an expandable changelog. Each entry has a context-sensitive button: **Install** if you have none, **Update** for newer versions, **Downgrade** for older ones. The currently installed version is marked ✓ *Current*.

Two visibility rules keep unstable versions out of the way:

- **Pre-release** versions (\`Pre\`) are hidden unless you enable *Show pre-release versions* in the gear menu (the setting is saved per project).
- **Experimental** versions (\`Exp\`) are never offered from the Versions tab — you only see one if it's what you already have installed. To install one deliberately, use *Install by name…* with the exact version.

### From a \`.cometpkg\` on disk

**+ Install ▸ Install from disk…** installs a \`.cometpkg\` (or plain \`.zip\`) archive someone sent you or that you exported yourself. Installing an archive for a slug you already have **replaces** it — that's how you hand-update an archive-sourced package.

### From a local folder

**+ Install ▸ Install from folder…** points at any folder containing a \`package.cometPackage\` — typically a package you're developing in a separate repository and want to use in several projects at once.

The folder is **live-linked**: it's mirrored read-only into \`Packages/<slug>/\`, and a file watcher re-syncs the mirror whenever you edit the source folder. The dependency is recorded as a \`file:\` path (relative to the project root when possible), so teammates who have the folder in the same relative place get the same link.

> [!NOTE]
> If a live-linked folder contains an asset whose ID collides with one already in your project, the install fails with an error instead of silently remapping — fix the ID in the source folder, since remapping a mirror would be undone by the next sync. (Registry and archive installs *do* remap colliding IDs automatically and record the remap in the lock.)

### From a git repository

**+ Install ▸ Install from git URL…** fetches a package straight from a repository. The URL accepts two optional extras:

\`\`\`
https://github.com/acme/comet-packages.git?path=/dialogue-system#v1.2.0
\`\`\`

- \`?path=\` — the folder inside the repository that contains the package (for monorepos).
- \`#\` — a branch, tag or commit. Without it, the default branch is used.

The lock records the **resolved commit**, so a teammate cloning your project reinstalls the identical snapshot — served from the cache, even offline. Re-running the same install re-resolves the branch or tag, which is how you pull updates from a git dependency.

Git installs shell out to the \`git\` executable on your PATH; you can point the engine at a specific one in **Preferences ▸ Package Manager**.

### By name

**+ Install ▸ Install by name…** takes a slug and an optional exact version — the quickest route when you know precisely what you want (\`platformer-toolkit\`, \`2.0.0-pre.1\`), and the only route to an experimental version.

### The plan preview

Whenever an operation would touch **more than the package you asked for** — dependencies that need installing, other packages that need to move versions, orphans that would be removed — the manager doesn't just do it. A **plan preview** popup lists every action first (*"Will also install \`platformer-toolkit-core\` 2.1.0"*), and nothing happens until you confirm.

## Updating and removing

When a registry package has a newer visible version, an ↑ chip appears in the list, the *Updates* view collects everything updatable, and the details pane grows an **Update to \`x.y.z\`** button. Updates run through the same resolution and plan preview as installs.

**Remove** uninstalls a package: its files, its loaded resources, and its manifest and lock entries. Two safety nets apply:

- If other packages depend on it, Remove is **disabled** — the tooltip and the Dependencies tab list what still uses it. Remove the dependents first (or rely on orphan cleanup: a package that was only installed to satisfy a dependency is offered for removal in the plan once nothing needs it).
- Removing an **embedded** package gets a stronger confirmation: its folder is the *source*, not a cache copy, so deleting it cannot be undone by reinstalling. Export an archive first if you want a backup.

**Resolve now** (gear menu) re-runs the resolver over the whole project — useful after editing the manifest by hand or changing resolver settings. If everything is consistent it tells you so; otherwise you get a plan preview with the corrections.

## Embedding: making a package yours

**Embed** (shown for any installed, non-embedded package) converts it into an embedded one: the folder stays exactly where it is under \`Packages/<slug>/\`, the manifest dependency and lock entries are dropped, and the origin chip flips to \`Custom\`. From that moment the package is ordinary editable source in your project — the standard way to fork a package you need to modify.

The reverse trip is the **package development loop**: embed (or [create](#creating-a-package)) a package, edit it, bump its \`version\`, [export and publish it](#exporting-and-publishing), and other projects install the new release.

## Creating a package

**+ Install ▸ Create package…** opens the wizard:

![The Create Package wizard: display name, auto-derived slug, type, author, license, category, and the optional skeleton parts.](/tutorials/pm-create-wizard.png)

- **Display name** — the human-readable name (3–80 characters). The slug is derived from it as you type.
- **Slug** — the package's unique identifier, folder name and future registry name: lowercase alphanumeric words separated by single dashes (\`dialogue-system\`). Validated live; you can edit it by hand.
- **Type** — \`package\` or \`assetPack\`.
- **Author**, **License** (a set of common SPDX licenses, or "See LICENSE.md"), **Category**.
- **Include** — optional skeleton parts: a runtime script assembly, an editor-only assembly, a starter sample, and a documentation folder.

**Create** generates \`Packages/<slug>/\` with a complete, valid skeleton — manifest at version \`0.1.0\`, \`README.md\`, a [Keep a Changelog](https://keepachangelog.com)-style \`CHANGELOG.md\`, \`LICENSE.md\`, the assemblies you ticked and a namespaced example script — and the package appears immediately in the *In Project* list as an embedded \`Custom\` package, ready to edit.

## Anatomy of a package

A full-featured package looks like this:

\`\`\`
Packages/dialogue-system/
├── package.cometPackage        ← the manifest (identity, metadata, declarations)
├── README.md                   ← what the package is; shown on the Marketplace page
├── CHANGELOG.md                ← version history (Keep a Changelog format)
├── LICENSE.md                  ← license text
├── Runtime/
│   ├── DialogueSystem.cometAssembly      ← runtime script assembly
│   ├── DialogueSystemExample.as          ← scripts, inside a namespace
│   └── DialogueSystemExample.as.meta     ← asset metadata (IDs), like any asset
├── Editor/
│   └── DialogueSystemEditor.cometAssembly ← editor-only assembly (never ships in builds)
├── Samples/                    ← hidden from the asset database until imported
│   └── Basic/
│       └── ...
└── Documentation/              ← hidden reference docs
    └── index.md
\`\`\`

Every file, in detail:

**\`package.cometPackage\`** — the manifest; the only mandatory file. Full field reference [below](#packagecometpackage-every-field).

**\`README.md\`** — the long-form introduction. When you publish, the Marketplace reads it out of the archive and uses it as the store page body.

**\`CHANGELOG.md\`** — the version history in [Keep a Changelog](https://keepachangelog.com) format: one \`## [x.y.z]\` section per version. The exporter checks that a section exists for the version you're exporting, and the Marketplace extracts that section as the per-version changelog shown in the Versions tab.

**\`LICENSE.md\`** — the license text your \`license\` field points at.

**\`Runtime/\`, \`Editor/\` and \`.cometAssembly\` files** — an **assembly** groups the scripts in its folder into one compilation unit. The \`.cometAssembly\` file itself is a small JSON (\`{ "Shared": false, "Platforms": -1 }\`) whose platform mask (\`-1\` means every platform) you edit through its inspector — untick platforms the scripts shouldn't compile for. Assemblies under \`Editor/\` exist only in the editor and are stripped from every exported game.

**\`.meta\` files** — every asset in a package carries its \`.meta\` with a stable asset ID, exactly like assets in \`Assets/\`. Stable IDs are what let scenes reference package assets across installs and updates. If an incoming package's ID collides with something already in the project, the installer remaps the copy and records the remap in the lock.

**\`Samples/\`** — content users can *optionally* import (a demo scene, example prefabs). Samples are declared in the manifest and their folder is listed in \`hiddenFolders\`, so they don't clutter the asset database until imported. The **Samples** tab imports one into \`Assets/Samples/<package>/<version>/<sample>/\` as editable copies with fresh asset IDs — safe to re-import (an existing import is replaced).

**\`Documentation/\`** — reference docs, also hidden via \`hiddenFolders\`. The Description tab's *Documentation* button prefers the manifest's \`documentationUrl\` and falls back to this folder.

An \`assetPack\`-type package replaces \`Runtime/\` with a \`Content/\` folder — its assets are meant to be imported and edited, so it ships no assemblies.

### \`package.cometPackage\` — every field

The manifest is JSON (comments are tolerated when read). A complete example:

\`\`\`json
{
    "schemaVersion": 1,
    "slug": "dialogue-system",
    "displayName": "Dialogue System",
    "version": "1.2.0",
    "packageType": "package",
    "summary": "Branching dialogue trees with a node editor and localization hooks.",
    "description": "# Dialogue System\\n\\nEverything you need for branching conversations...",
    "author": {
        "name": "Comet Team",
        "email": "team@example.com",
        "url": "https://example.com"
    },
    "license": "MIT",
    "category": "Tools",
    "tags": ["dialogue", "narrative", "ui"],
    "homepageUrl": "https://example.com/dialogue",
    "repoUrl": "https://github.com/acme/dialogue-system",
    "documentationUrl": "https://example.com/dialogue/docs",
    "changelogUrl": "",
    "minEngineVersion": "2.8.2",
    "dependencies": {
        "ui-extensions": "^1.0.0"
    },
    "samples": [
        {
            "displayName": "Basic",
            "description": "A minimal conversation wired to a UI canvas.",
            "path": "Samples/Basic"
        }
    ],
    "hiddenFolders": ["Samples", "Documentation"],
    "hideInEditor": false
}
\`\`\`

| Field | Type | Meaning |
|-------|------|---------|
| \`schemaVersion\` | int | Manifest format version. Currently \`1\`. |
| \`slug\` | string | **Required.** Unique identifier, folder name and registry name: lowercase alphanumeric groups separated by single dashes, 1–100 characters. Must match the folder it lives in. |
| \`displayName\` | string | **Required.** UI name, 3–80 characters. |
| \`version\` | string | **Required.** Strict [semver 2.0.0](https://semver.org): \`major.minor.patch\`, optional \`-prerelease\` and \`+build\`. No partial versions, no leading zeros. Determines the release channel (see [version channels](#release-channels)). |
| \`packageType\` | string | \`"package"\` (default) or \`"assetPack"\`. |
| \`summary\` | string | **Required.** One-liner for registry cards, 10–160 characters. |
| \`description\` | string | Long markdown description; rendered in the Description tab and on the store page. |
| \`author\` | object | \`name\`, \`email\` (optional), \`url\` (optional). |
| \`license\` | string | SPDX identifier (\`MIT\`, \`Apache-2.0\`, …) or a pointer like \`"See LICENSE.md"\`. |
| \`category\` | string | Registry category (\`Tools\`, \`UI\`, \`Art\`, …). |
| \`tags\` | string[] | Search and browse tags. |
| \`homepageUrl\` | string | Project homepage (optional). |
| \`repoUrl\` | string | Source repository (optional). |
| \`documentationUrl\` | string | External docs; the editor falls back to the in-package \`Documentation/\` folder. |
| \`changelogUrl\` | string | External changelog; falls back to the in-package \`CHANGELOG.md\`. |
| \`minEngineVersion\` | string | Lowest engine version the package works with (semver, optional). Older engines refuse to install it, and a project containing it won't build on an older engine. |
| \`dependencies\` | object | Direct dependencies: \`{ "slug": "range" }\`. See [version ranges](#version-ranges). |
| \`samples\` | array | Importable samples: \`displayName\`, \`description\`, \`path\` (usually under \`Samples/\`). |
| \`hiddenFolders\` | string[] | Package-root folders excluded from the asset database (samples, documentation). |
| \`hideInEditor\` | bool | Hides the package's assets from object pickers — a helper for asset packs. |

All content paths are validated: relative, forward slashes, no \`..\` or absolute segments — a manifest can never point outside its package.

You rarely edit this JSON by hand: selecting a \`package.cometPackage\` in the **Project** panel shows the **manifest inspector**, a form with sections for information, description, dependencies and samples, with **Apply / Revert** buttons and validation as you type.

![The manifest inspector: the Information, Description, Dependencies and Samples sections of package.cometPackage as an editable form.](/tutorials/pm-manifest-inspector.png)

Packages live in their own **Packages** section of the Project panel, right below Assets:

![The Project panel browsing Packages ▸ platformer-toolkit: Documentation, Runtime and Samples folders next to the CHANGELOG, LICENSE, README and package manifest files.](/tutorials/pm-project-packages.png)

### Script namespaces

Scripts inside a package should live in a namespace named after it, and the wizard's example script shows the pattern:

\`\`\`angelscript
namespace DialogueSystem
{
    class DialogueRunner : CometBehaviour
    {
        void Update()
        {
        }
    }
}
\`\`\`

Namespaces are what keep two packages (and your project) from colliding when they both define an \`Enemy\` or a \`Utils\` class. Game code refers to package types as \`DialogueSystem::DialogueRunner\`, or shortens it with \`using namespace DialogueSystem;\`. The exporter warns about package scripts that declare types in the global namespace.

## The project manifest — \`Packages/manifest.cometManifest\`

Your *project's* side of the system is one file: \`Packages/manifest.cometManifest\`. It records what the project depends on, where to resolve it from, how the resolver should behave, and — in the lock — exactly what ended up installed. The Package Manager maintains it as you install and remove; the settings popup edits its knobs; you can also edit it by hand and hit *Resolve now*.

\`\`\`json
{
    "schemaVersion": 1,
    "dependencies": {
        "dialogue-system": "^1.2.0",
        "shared-tools": "file:../shared/shared-tools",
        "experimental-fx": "https://github.com/acme/fx.git?path=/fx#main"
    },
    "registries": [
        {
            "name": "Comet Marketplace",
            "url": "https://wahwdszfywobmyyuyihu.supabase.co",
            "scopes": ["*"]
        }
    ],
    "resolutionStrategy": "lowest",
    "enableLock": true,
    "showPreRelease": false,
    "pinned": [],
    "lock": {
        "dialogue-system": {
            "version": "1.2.0",
            "depth": 0,
            "source": "registry",
            "registryUrl": "https://wahwdszfywobmyyuyihu.supabase.co",
            "sha256": "9f2c8a…",
            "dependencies": { "ui-extensions": "^1.0.0" }
        },
        "ui-extensions": {
            "version": "1.0.3",
            "depth": 1,
            "source": "registry",
            "registryUrl": "https://wahwdszfywobmyyuyihu.supabase.co",
            "sha256": "41bd07…"
        }
    }
}
\`\`\`

| Field | Type | Meaning |
|-------|------|---------|
| \`schemaVersion\` | int | Manifest format version. Currently \`1\`. |
| \`dependencies\` | object | The project's **direct** dependencies: \`{ "slug": "spec" }\`. A spec is a version range (\`"^1.2.0"\`), a local path (\`"file:../shared/pkg"\`) or a git URL (\`"https://….git?path=…#ref"\`) — the form decides the source. |
| \`registries\` | array | Registries to resolve versioned dependencies against, in priority order. Each has a \`name\`, a base \`url\` and \`scopes\` — slug patterns it serves (\`"*"\` for everything; scope a company registry to \`"acme-*"\` to keep your internal packages off the public one). New projects are seeded with the official Comet Marketplace. |
| \`resolutionStrategy\` | string | How far the resolver escalates *indirect* dependency versions inside their allowed ranges: \`"lowest"\` (default), \`"highestPatch"\`, \`"highestMinor"\` or \`"highest"\`. |
| \`enableLock\` | bool | Whether the resolver records resolved versions and prefers them on the next resolve. On by default. |
| \`pinned\` | string[] | Slugs locked to exactly the version written in their dependency spec — the resolver will never move them. |
| \`showPreRelease\` | bool | Whether pre-release versions are offered in this project (the gear-menu toggle writes this). |
| \`lock\` | object | The resolved package set, maintained by the engine — one entry per installed package. |

Each **lock entry** records everything needed to reproduce the install:

| Field | Meaning |
|-------|---------|
| \`version\` | The resolved version. |
| \`depth\` | Dependency depth: \`0\` for direct project dependencies, \`1+\` for transitive ones. |
| \`source\` | Where it came from: \`"registry"\`, \`"git"\`, \`"local"\` or \`"archive"\`. |
| \`registryUrl\` | The registry it was downloaded from (registry source). |
| \`sha256\` | Integrity hash of the downloaded archive (registry/archive sources) — verified against the cache on reinstall. |
| \`commit\` | The resolved commit (git source) — a fresh clone reinstalls this exact snapshot. |
| \`url\` | The original URL or path it was fetched from (git/local/archive sources). |
| \`dependencies\` | That package's own dependencies at the resolved version, so the resolver works offline. |
| \`idRemaps\` | Asset-ID remaps applied at install time to fix collisions, replayed on reinstall. |

> [!TIP]
> Commit \`Packages/manifest.cometManifest\` to version control and **don't** commit installed package folders. A teammate opening the project gets the identical package set re-installed from the lock — same versions, same commits, same hashes, same ID remaps. (Embedded packages are your source code: those you *do* commit.)

A missing manifest is fine — defaults with the official registry are used. A *corrupt* one is an error the manager reports rather than silently overwriting.

## How versions resolve

### Version ranges

Dependency ranges use npm-style operators:

| Range | Accepts |
|-------|---------|
| \`1.2.3\` or \`=1.2.3\` | Exactly \`1.2.3\`. |
| \`^1.2.3\` | \`>=1.2.3\` and \`<2.0.0\` — up to the next **breaking** version. The leftmost non-zero part is the boundary, so \`^0.2.1\` means \`<0.3.0\`. |
| \`~1.2.3\` | \`>=1.2.3\` and \`<1.3.0\` — patch-level updates only. |
| \`>=1.2.3\` | Anything from \`1.2.3\` up. |

Caret, tilde and minimum accept partial versions (\`^1.2\`, \`~1\`, \`>=2\`). Pre-release versions only satisfy a range whose own base carries a pre-release tag on the same \`major.minor.patch\` (\`^1.3.0-pre.1\` accepts \`1.3.0-pre.2\`; plain \`^1.2.0\` never picks a pre-release) — the npm rule, so unstable versions are never chosen by accident.

### Release channels

The channel is derived from the version string itself:

- **Release** — a normal \`x.y.z\` with major ≥ 1.
- **Pre-release** (\`Pre\`) — any pre-release tag except experimental ones: \`1.3.0-pre.1\`, \`2.0.0-rc.2\`. Hidden unless *Show pre-release versions* is on.
- **Experimental** (\`Exp\`) — any \`0.x\` version, or a pre-release tag starting with \`exp\` (\`1.0.0-exp.3\`). Never offered in the Versions tab; installable only explicitly, by name.

### The resolver

Whenever the package set changes, the resolver computes one consistent set of versions satisfying **every** range — yours and every package's. It works conservatively: it starts from the locked (or lowest allowed) versions and escalates only as far as your \`resolutionStrategy\` permits and constraints require. With the default \`"lowest"\` strategy and the lock enabled, resolution is fully deterministic and never surprises you with an unrequested upgrade; set \`"highestPatch"\` or \`"highestMinor"\` if you'd rather pick up fixes automatically.

When ranges genuinely conflict (one package needs \`^1.0.0\`, another \`^2.0.0\` of the same dependency), the resolve fails with a clear error naming the packages and ranges involved — it appears in the **Errors** view with *Resolve now*, *Open manifest* and *Clear errors* actions next to the details. Fix it by updating the offending packages, widening a range you control, or pinning a version everyone accepts.

### The cache and working offline

Every downloaded archive and git checkout lands in a **machine-wide cache**, keyed by content hash — installing the same package into five projects downloads it once. Reinstalls from the lock are served from the cache even with no network, and when the registry is unreachable the Marketplace view falls back to the last cached catalog and marks itself offline. **Preferences ▸ Package Manager** shows the cache location and usage, lets you move it, and can clear it (it's safe to clear — anything needed is re-downloaded).

## Exporting and publishing

When your embedded package is ready to share, select it and choose **⋯ ▸ Export package…**. The manager validates it and shows a report:

![The Export Package dialog: the validation report, and the Close / Export… / Publish… actions.](/tutorials/pm-export.png)

The validation checks, in plain terms:

- The manifest parses, passes every semantic check, and its \`slug\` matches the folder name.
- \`CHANGELOG.md\` documents the version being exported.
- Every declared assembly, sample and hidden folder actually exists.
- Declared dependencies are resolvable on the registry (so consumers won't hit a dead end).
- Package scripts don't declare types in the global namespace (a warning).
- **Self-containment**: every asset reference must stay inside the package or point into another package. References into other packages become **auto-detected dependencies** — the exporter adds them to the staged manifest and tells you. References into your project's \`Assets/\` are a hard failure: the package would break in any other project. Move those assets into the package (or cut the reference) and validate again.
- The archive stays under the registry's **25 MB** cap.

Failures block the export; warnings don't. **Export…** writes a \`<slug>-<version>.cometpkg\` archive and shows its **sha256** (copy button included) — that archive is directly installable via *Install from disk…* and is what you upload to the Marketplace.

### Publishing on the Marketplace

**Publish…** takes you to [cometengine.org/account](https://www.cometengine.org/account). Sign in, click **Upload New Package**, and **drop the \`.cometpkg\`** on the upload zone. The site reads the manifest *from inside the archive* — there is no metadata form to fill twice: it validates the manifest, checks the slug is free (or yours), extracts your \`README.md\` for the store page and the right \`CHANGELOG.md\` section for the version, shows you a review of exactly what will be published, and publishes on confirm.

Publishing a **new version** of your package is the same flow — bump \`version\` in the manifest, export, drop the new archive. Versions are immutable once published; fix mistakes by publishing a newer version, or mark a bad version (or the whole package) **deprecated** with a message from your account's package management page, which shows the warning to would-be installers without breaking existing projects. Presentation extras — icon, screenshots, links — are edited on the package's page; download statistics appear on your dashboard.

> [!NOTE]
> The store page, search card and Versions tab all come from the archive you upload: \`summary\` is the card text, \`description\`/README the page body, \`category\` and \`tags\` drive search, and \`minEngineVersion\` gates installs. Well-filled manifests are what make a package findable.

### The build gate

A project **won't export a game build** while its packages are in a bad state — the manifest doesn't parse, a dependency or lock entry has no package on disk, or an installed package needs a newer engine. The build fails immediately with the same message the Errors view shows, instead of producing a broken game.

## Package settings & preferences

The gear menu's **Package settings…** opens the **Packages** page of Project Settings, which edits this project's \`manifest.cometManifest\` knobs:

![The Packages page in Project Settings: the registries list, resolution strategy, pre-release visibility, lock toggle, pinned packages and the lock reset action.](/tutorials/pm-settings.png)

- **Registries** — add, remove and reorder registries (with their scopes). Priority order decides who serves a slug both registries claim.
- **Resolution ▸ Strategy** — the resolver escalation policy described above.
- **Show pre-release versions** and **Enable lock** toggles.
- **Pinned packages** — the pin list.
- **Delete lock & re-resolve** — throws away the lock and resolves the whole project from scratch: the recovery hammer for a tangled state.

Machine-wide options live in **Preferences ▸ Package Manager**: the cache location (with open/clear actions and current usage) and the git executable used for git dependencies.

## Automating packages

Everything the window does is scriptable from [editor scripts](/tutorials/extending-the-editor) through the \`CometEditor::Packages\` namespace:

\`\`\`angelscript
using namespace CometEditor;

array<string> installed = Packages::List();
if (!Packages::IsInstalled("dialogue-system"))
    Packages::Install("dialogue-system");          // latest; or ("slug", "1.2.0")

Packages::InstallFromPath("C:/downloads/pkg.cometpkg");  // archive or folder
Packages::Remove("old-package");
Packages::Embed("dialogue-system");                // installed → embedded
Packages::Pack("my-package", "C:/out/my-package-0.1.0.cometpkg");
Packages::Resolve();                               // re-run the resolver
string infoJson = Packages::GetInfo("dialogue-system");
\`\`\`

\`GetInfo\` returns the package's state as JSON (version, origin, dependencies…), and \`Packages::GetOnPackagesChanged()\` returns a delegate you can subscribe to for reacting whenever the package set changes.

The same operations are exposed as editor **MCP tools** (\`package_list\`, \`package_install\`, \`package_remove\`, \`package_create_skeleton\`, \`package_export\`, and \`package_ui\` for driving the window itself), so AI assistants and external tooling can manage packages too.

## Troubleshooting

| Symptom | What it means / what to do |
|---------|---------------------------|
| *"The registry could not be reached"* | You're offline or the registry is down. The Marketplace serves the cached catalog; installs from the lock still work from the cache. Retry from the list. |
| Git install fails | Check the URL, the \`#ref\`, and that git is installed — or set the executable in **Preferences ▸ Package Manager**. Private repositories need your git credential helper configured. |
| Version conflict in the Errors view | Two ranges can't agree. Update the packages involved, widen a range you control, pin an acceptable version, or as a last resort *Delete lock & re-resolve*. |
| Install button disabled, "Needs engine x.y.z or newer" | The package's \`minEngineVersion\` is above your engine. Update the engine or install an older version from the Versions tab. |
| Remove is greyed out | Something depends on it — the tooltip and the Dependencies tab's *Used by* list say what. Remove the dependents first. |
| Local-folder install reports an ID collision | An asset in the source folder shares an ID with one in your project. Fix the ID at the source; live-linked mirrors are never remapped. |
| Export fails with *"not self-contained"* | The package references assets in \`Assets/\`. Move them into the package, or remove the reference. References into *other packages* are fine — they become dependencies automatically. |
| Build blocked by packages | The build gate found broken package state. Open **Window ▸ Package Manager ▸ Errors**, fix what it lists, build again. |
| A package's files look wrong after an update | Reinstall it: remove and install again, or *Delete lock & re-resolve*. Installed packages are reproducible from the lock; never edit them in place — embed instead. |

That's the whole system: install what others built, keep it resolved and locked, and when you build something reusable — wrap it in a manifest, export it, and put it on the Marketplace for everyone.
`},{id:`native-plugins`,title:`Native Plugins & the FFI`,icon:`fa-plug`,category:`Packages`,blurb:`Ship a C/C++ library with your game and call into it from AngelScript — import, inspector settings, loading and marshalling.`,md:'# Native Plugins & the FFI\n\nSometimes the code you need already exists as a C library — a platform SDK, a licensed middleware, a compiled algorithm. Comet\'s **native plugin** system lets you ship that `.dll` / `.so` / `.dylib` alongside your game and call straight into it from AngelScript, no engine recompile required. It\'s a foreign-function interface (FFI): you import the binary as an asset, tick the platforms it targets, and load it at runtime.\n\n> [!WARNING]\n> Native calls are unsafe by nature: you\'re calling straight into machine code through a prototype you declared by hand. A mismatched signature or a bad pointer can crash the whole process. Describe every function precisely, and treat a third-party binary with the same trust you\'d give any dependency.\n\n## Importing a plugin\n\nDrop the binary **anywhere in your project** and Comet imports it as a **Native Plugin** asset — every `.dll`, `.so` or `.dylib` under `Assets/` (or inside any installed [package](/tutorials/packages)) is picked up.\n\nOrganise the binaries however suits your project — keep them next to the script that wraps them, or gather them in a folder of their own. Per-architecture subfolders are still a handy convention, because the same logical plugin can then carry a build for every target and Comet reads the folder and file names to guess the import settings:\n\n```\nAssets/MyMath/\n├── MyMath.as              ← the AngelScript wrapper\n├── x86_64/\n│   ├── mymath.dll         ← Windows, x86_64\n│   └── libmymath.so       ← Linux / Android, x86_64\n└── arm64-v8a/\n    └── libmymath.so       ← Android, arm64-v8a\n```\n\nThe importer reads the folder and file name to guess the right settings — which you can always override in the Inspector (next section). It looks at the whole path, so these folders can sit anywhere:\n\n| The file… | …imports as |\n|-----------|-------------|\n| ends in `.dll` | **Windows** + **Editor** |\n| ends in `.so` | **Linux** + **Android** + **Editor** |\n| ends in `.dylib` | **Editor** only |\n| sits in a `Windows/`, `Linux/` or `Android/` folder | narrows to that platform |\n| sits in an `x86_64/`, `x86/`, `arm64-v8a/` or `armeabi-v7a/` folder | sets that **Architecture** |\n\n## The plugin Inspector\n\nSelect the imported plugin to see its import settings. This is where you tell Comet **which builds the binary belongs in** — only matching plugins are shipped.\n\n![The Native Plugin inspector: the Platforms checkboxes (Windows, Linux, Android, Editor) and the Architecture dropdown.](/tutorials/native-plugin-inspector.png)\n\n**Platforms** — four checkboxes: **Windows**, **Linux**, **Android** and **Editor**. Tick the platforms this exact file can run on. At build time, only the plugins whose platforms include the target are copied into the game; everything else is left out. **Editor** controls whether the library is loadable while you\'re in the editor and in play mode — handy to keep on so you can test without exporting.\n\n**Architecture** — a dropdown: **Any**, **x86_64**, **x86**, **arm64-v8a** or **armeabi-v7a**.\n\n- Pick the CPU architecture the binary was compiled for. It then ships only when the build targets that architecture, and the runtime loader looks for it in `Plugins/<architecture>/`.\n- Choose **Any** for an architecture-agnostic file (rare for native code) — it ships with every architecture.\n\n> [!TIP]\n> One "plugin" is usually *several* imported files — a Windows `.dll`, a Linux `.so`, an Android `.so` per ABI — each with its own Platforms/Architecture settings. `NativeLibrary::Load("mymath")` picks the right one for wherever the game is running.\n\n## Loading a plugin from AngelScript\n\nThe scripting API lives in the `CometEngine::Native` namespace. Load a library by **logical name** — no `lib` prefix, no extension — and Comet resolves it to the right file for wherever the game is running. In the editor it matches the name against every imported Native Plugin asset, wherever it lives in the project or a package, preferring the one built for the current architecture. In an exported build the matching binaries have been gathered into a `Plugins/` folder next to the game, so the loader searches `Plugins/<arch>/` and `Plugins/`, then falls back to the operating-system search path.\n\n```angelscript\nusing namespace CometEngine;\nusing namespace CometEngine::Native;\n\nclass PluginDemo : CometBehaviour\n{\n    void Start()\n    {\n        // Load never returns null — always check IsLoaded().\n        NativeLibrary@ lib = NativeLibrary::Load("mymath");\n        if (!lib.IsLoaded())\n        {\n            Debug::LogError("plugin failed: " + lib.GetError());\n            return;\n        }\n        Debug::Log("loaded from " + lib.GetPath());\n\n        // Resolve a function by its exported symbol + C prototype:\n        NativeFunction@ add = lib.GetFunction("my_add", "int(int,int)");\n        if (add.IsValid())\n        {\n            int sum = add.Call().Int(20).Int(22).InvokeInt();\n            Debug::Log("my_add(20, 22) = " + sum);   // 42\n        }\n    }\n}\n```\n\n### Describing a function: the signature\n\nA signature is a C prototype written as `returnType(argType, argType, …)` from these tokens:\n\n`void` · `bool` · `int` · `uint` · `int64` · `uint64` · `float` · `double` · `ptr` · `str`\n\n`ptr` passes a raw address as a `uint64` (a buffer, a resolved symbol, or `0` for null); `str` marshals an AngelScript `string` as a UTF-8 `const char*` valid for the duration of the call. So `"bool(ptr,str)"` is `bool fn(void*, const char*)`.\n\n### Making the call\n\n`GetFunction` gives you a `NativeFunction`. Start a call with `Call()`, push the arguments **in order** with the chainable `Int`/`UInt`/`Int64`/`UInt64`/`Bool`/`Float`/`Double`/`Ptr`/`Str` methods, then finish with the `Invoke*` that matches the return type:\n\n```angelscript\nlib.GetFunction("set_volume", "void(float)").Call().Float(0.8f).InvokeVoid();\n\nbool ok = lib.GetFunction("init", "bool()").Call().InvokeBool();\n\n// A function that returns \'const char*\' returns a pointer — read it back:\nuint64 ptr = lib.GetFunction("get_name", "ptr()").Call().InvokePtr();\nstring name = Native::ReadCString(ptr);\n```\n\nThe pushed argument count must match the signature or the call is rejected and returns a zero value.\n\n### Structs, out-parameters and raw memory\n\nFor functions that read or write a struct, allocate a **`NativeBuffer`** — a bounds-checked block of native memory — pass its address as a `ptr`, then read the fields back by byte offset:\n\n```angelscript\n// struct Vec2 { float x, y; };  void get_position(Vec2* out);\nNativeBuffer@ buf = NativeBuffer::Create(8);        // two floats\nlib.GetFunction("get_position", "void(ptr)").Call().Ptr(buf.GetAddress()).InvokeVoid();\n\nfloat x = buf.Float(0);\nfloat y = buf.Float(4);\n```\n\nThe `Native::` namespace also has free helpers to peek raw addresses returned by a call — `ReadInt32`, `ReadFloat`, `ReadCString`, `ReadBytes(addr, len)` and the `Write*` counterparts.\n\n### Is it even supported here?\n\nNative calls work on Windows, Linux and Android. They\'re **not** available in Web builds for now — a browser has no way to load a native binary — so always guard plugin code with `Native::IsSupported()` and provide a fallback:\n\n```angelscript\nif (!Native::IsSupported())\n    return;   // e.g. a Web build — no native plugins here\n\nDebug::Log("running on " + Native::GetOS() + " / " + Native::GetArchitecture());\n```\n\n## How plugins ship\n\nWhen you [export a build](/tutorials/build-and-patches), Comet gathers the plugins whose settings match the target — wherever they live in your project — and leaves everything else out:\n\n| Platform | Where the binary lands |\n|----------|------------------------|\n| **Windows / Linux** | a `Plugins/` folder next to the game executable |\n| **Android** | packed into the APK/AAB\'s `jniLibs/<abi>/`, so the system loader finds it by name |\n| **Web** | not supported for now — browsers can\'t load native binaries |\n\nThe runtime loader mirrors this: in a build it searches `Plugins/<arch>/`, `Plugins/`, then the executable\'s own folder; on Android it resolves the library straight out of the packed native libraries.\n\n> [!NOTE]\n> **Android naming.** Android loads native libraries by their `lib…​.so` name. Name the file `lib<something>.so` (e.g. `libmymath.so`) and load it with the logical name — `NativeLibrary::Load("mymath")` — and Comet adds the `lib` prefix and `.so` suffix for you.\n\n## Cleaning up\n\nA loaded library and its resolved functions stay alive as long as your script holds the handles. Call `lib.Unload()` to free the OS module early — every `NativeFunction` resolved from it becomes unusable afterward — or just let the handle go out of scope.\n\n## Where to go next\n\nNative plugins let you wrap an entire third-party library as a clean AngelScript API and hand it out as a reusable [package](/tutorials/packages) — drop the binaries anywhere in the package, next to the script that wraps them works nicely. When you\'re ready to distribute, the [Exporting Builds](/tutorials/build-and-patches) tutorial covers how the matching plugins are bundled for each platform.\n'},{id:`build-and-patches`,title:`Exporting Builds & Shipping Patches`,icon:`fa-box-open`,category:`Shipping`,blurb:`Export to Windows, Linux, Android and Web, then ship incremental patches to players.`,md:`# Exporting Builds & Shipping Patches

Your game runs great in the editor — time to put it in players' hands. Comet exports self-contained builds for **Windows, Linux, Android and Web**, packs your content into memory-mapped \`.ori\` archives, and — the killer feature — builds **incremental patches** that ship only what changed since the version your players already have.

## The Build Settings window

Open it from **Window → Build**:

![The Build Settings window: the scene list, the Development Build options, platform tabs, Content Packaging and Patch Base Packs.](/tutorials/build-panel.png)

From top to bottom:

- **Scenes added in Build** — every scene that ships. The checkbox enables/disables a scene, dragging reorders them, and the number on the right is the **build index**: index \`0\` is the scene your game boots into. **Add Open Scenes** grabs whatever you have open.
- **Development Build** — turns on the in-game debugging tools: the dev console, debug drawing, on-screen stats and a log file. Leave it **off** for store builds. The next section breaks these down.
- **Platform tabs** — Windows / Linux / Android / Web, each with its own settings such as the target **Architecture** (the active platform is marked). Selecting a different tab shows **Switch Platform**, which reimports the asset library for that target.
- **Player Settings** — product name, version, icon and friends.
- **Build** / **Build And Run** — the moment of truth.

## Development builds & the dev console

Tick **Development Build** and a whole debugging toolkit ships inside your game. Leave it **off** for anything you hand to players — release builds drop the tooling, the watermark and the overhead. Its sub-options:

- **Development Build (Dev Console available with \`º\`)** — the master switch. It enables the in-game **dev console**, opened at runtime with the **\`º\`** key (top-left of the keyboard, just below \`Esc\`).
- **Debug drawing** — lets \`Debug::DrawLine\` and friends render in the running game, so you can see raycasts, paths and hitboxes on the real build, not just in the editor.
- **HUD FPS stats** — an FPS + memory overlay you can toggle in-game with **Ctrl + F3**.
- **Extra HUD stats** — expands that overlay with frame time, draw calls and instance counts.
- **Write log file next to the executable** — dumps the run's log to a file beside the game, so you can debug a build on a machine that isn't yours.
- **Development watermark** — stamps a corner marker so a dev build is never mistaken for a release.

### The dev console

Press **\`º\`** in a development build and the console drops down over your game — a live command line into the running build:

![The Comet dev console open over a running game, listing the built-in commands after typing /help.](/tutorials/dev-console.png)

Type \`/help\` for the list. The built-ins cover what you reach for constantly while testing:

| Command | What it does |
| --- | --- |
| \`/help\` | List commands. |
| \`/quit\` | Stop play / quit the game. |
| \`/hide\` | Hide the console. |
| \`/clear\` | Clear the console. |
| \`/load <name\\|index>\` | Load a scene by name or build index. |
| \`/reload\` | Reload the current scene. |
| \`/restart\` | Reload the first build scene. |
| \`/scenes\` | List the build scenes. |
| \`/timescale <n>\` | Get / set the time scale (\`0.5\` = half speed, \`0\` = pause). |
| \`/stats\` | Toggle the stats HUD (FPS + memory). |
| \`/extra_stats\` | Toggle extra stats (frame time, draw calls, instances). |
| \`/watermark\` | Toggle the dev watermark. |
| \`/mem\` | Print memory usage. |
| \`/fullscreen\` | Toggle fullscreen. |
| \`/vsync <on\\|off>\` | Toggle vsync. |
| \`/res <w> <h>\` | Set the window size. |
| \`/screenshot [path]\` | Save a screenshot without the console in it. |
| \`/volume <n>\` | Set master volume (\`0..1\`). |
| \`/mute\` | Toggle audio mute. |

### Registering your own commands

The console is scriptable: register a command from AngelScript and it appears in \`/help\` right beside the built-ins. Hand \`DevConsole::RegisterCommand\` a name, a help string and a callback that receives the typed arguments:

\`\`\`angelscript
using namespace CometEngine;

class DebugCommands : CometBehaviour
{
    void Start()
    {
        DevConsole::RegisterCommand("print <str>", "prints the given str",
            CometDelegateStringArray(PrintCommand));
    }

    void PrintCommand(array<string>@ args)
    {
        if (args.length() == 0) return;
        print(args[0]);
    }
}
\`\`\`

Now typing \`/print hello\` echoes \`hello\` in the console. The first word of the name (\`print\`) becomes the \`/print\` you type; the rest (\`<str>\`) is just a usage hint shown by \`/help\`. The callback receives the space-separated arguments the player typed, and \`print(...)\` writes back into the console. \`DevConsole::Show()\`, \`Hide()\`, \`IsShown()\` and \`UnregisterCommand("print")\` round out the API.

### Debugging and profiling a dev build

A development build isn't only for print-debugging — the editor can **attach its script debugger and profiler to the running build** over a local socket. Turn it on in **Preferences → Build Debugger**:

![Preferences → Build Debugger: "Attach to development builds", with the script debugger and profiler ports.](/tutorials/build-debugger.png)

With **Attach to development builds** ticked, launch a development build and the editor connects to it automatically on the **script debugger port** (\`54711\`). From there the editor's built-in **text editor becomes a full AngelScript debugger for the live build**: click the gutter to set **breakpoints**, then **Step Over / Step In / Step Out / Continue** through your code while the game runs, inspecting the **call stack**, **local variables** and watched expressions in the debugger panels — the same experience as debugging play mode in the editor, except it's the real exported build being driven.

The **profiler port** (\`54713\`) is the other half: it streams timing data from the running build into the editor's profiler, so you can see where each frame actually goes — script functions, draw calls, systems — on real hardware instead of guessing. (You only need to change either port if something else on your machine already uses it.)

## What comes out the other side

Comet packs content into **\`.ori\`** archives — a deterministic, binary-indexed format the runtime **memory-maps** and streams from with zero copies. Every resource is content-hashed, which is what makes patching possible later. The **Content Packaging** dropdown picks the layout:

| Mode | Result |
|------|--------|
| \`Single .ori pack\` | The executable plus one \`.ori\` file next to it. The usual choice. |
| \`Embedded in executable\` | The \`.ori\` is appended to the executable — one single file to distribute. |
| \`Loose content folder\` | A \`content/\` folder with the raw blobs and manifests — convenient while iterating. |

> [!NOTE]
> **Content Packaging is a standalone (Windows/Linux) option.** Android and Web decide their own layout: an Android build packs content uncompressed inside the APK so the engine can memory-map it in place, and a Web build produces a static site with the content preloaded or streamed over HTTP (see the platform notes below). The \`Single .ori\` / \`Embedded\` / \`Loose\` choice only applies to the desktop executable + pack you ship yourself.

A typical Windows output folder:

\`\`\`text
MyGame/
├── MyGame.exe
├── MyGame.ori          ← all packed content
├── extra_ori/          ← drop DLC/mod packs here: auto-mounted at boot
└── data/               ← loose files from your Data Assets folder
\`\`\`

Anything you place in \`extra_ori/\` is mounted automatically at startup — a zero-code mod and DLC delivery mechanism.

## Shipping a patch

Here's the workflow that saves your players from re-downloading gigabytes.

A patch is built **against the packs your players already have**. In the platform tab you'll find **Patch Base Packs**:

1. Ship version 1.0 — a normal full build. Keep its \`MyGame.ori\` somewhere safe.
2. Keep developing: fix scenes, swap textures, add a level.
3. In the Build window, add the shipped \`MyGame.ori\` to **Patch Base Packs** (for later patches: list the base first, then each prior patch, in order).
4. Press **Build**. Comet compares every resource's content hash against the merged base packs and writes \`MyGame_patch.ori\` containing **only what changed** — plus tombstones for resources you deleted.

Once the player has the patch file, there are two ways it gets applied, and the difference matters:

- **Drop it in the \`extra_ori/\` folder** (next to the executable) and it is **mounted automatically at startup** — no code required. This is the zero-effort path for a launcher or auto-updater: download into \`extra_ori/\`, relaunch, done.
- **Put it anywhere else** and you must **mount it yourself from AngelScript** with \`OriLoader::Mount("path/to/patch.ori")\` (see below). This is what you want for an in-game "check for updates" button, DLC the player enables in a menu, or a mod loader.

Either way the runtime layers the patch over the base: newer packs shadow older ones, deletions apply, done. Patch metadata records which content version it targets and its sequence number, so out-of-order patches are refused instead of corrupting the game.

> [!NOTE]
> Patches are regular \`.ori\` packs. The same mechanism ships DLC: build a patch that only *adds* content and sell the file.

### Mounting packs at runtime

The \`OriLoader\` namespace lets scripts manage packs while the game runs — the foundation for in-game patchers, DLC stores and mod loaders:

\`\`\`angelscript
using namespace CometEngine;

class PatchManager : CometBehaviour
{
    void ApplyDownloadedPatch(const string &in path)
    {
        Debug::Log("Content version before: " + formatInt(OriLoader::GetContentVersion()));

        if (OriLoader::Mount(path))
        {
            Debug::Log("Patch mounted! Now at version " + formatInt(OriLoader::GetContentVersion()));
            // Resources loaded from now on come from the patch where it shadows the base.
        }
        else
        {
            Debug::Log("Mount failed - wrong engine version or corrupt pack.");
        }
    }

    void ListInstalledContent()
    {
        array<string> packs = OriLoader::GetMountedPacks();
        for (uint i = 0; i < packs.length(); i++)
        {
            Debug::Log("[" + formatInt(int(i)) + "] " + packs[i]);
        }
    }

    void RemoveMod(const string &in path)
    {
        if (OriLoader::IsMounted(path))
        {
            OriLoader::Unmount(path);   // resources revert to the packs below
        }
    }
}
\`\`\`

\`MountWithPriority(path, priority)\` controls shadowing order explicitly, and \`App::GetProductVersion()\` / \`App::GetEngineVersion()\` give you the strings for your own update checks.

## Platform notes

### Android

The Android tab wants your signing setup: **Keystore File**, **Keystore Password**, **Key Alias**, **Key Password**, plus **Min/Target SDK Level** and the target **Architectures** (arm64-v8a by default). Comet generates a Gradle project, builds and signs the APK, and — with a device connected over ADB — **Build And Run** installs and launches it directly on the phone. Game content is stored uncompressed inside the APK so the engine can memory-map it in place.

### Web

The Web tab configures the **Canvas Size** and responsiveness. The build produces a static site — \`index.html\`, the WASM binary, the JS runtime, a service worker and your content:

- Small games preload everything for a hitch-free start; bigger ones preload the boot set and stream the rest.
- The service worker caches content for instant reloads and offline play.
- Patches work over HTTP too: \`OriLoader::Mount("https://cdn.example.com/patch_v2.ori")\`.

Remember the platform's limits: no native sockets (use WebSockets — see [Networking](/tutorials/networking)) and no threads.

## Platform macros in AngelScript

Because the same scripts compile for every target, you often need code that only exists on one platform — desktop file dialogs, web-specific networking, editor-only tooling. Comet defines **preprocessor macros** — for the target platform, and for the build configuration — and you branch on them with \`#ifdef\` / \`#ifndef\` / \`#else\` / \`#endif\`:

| Macro | Defined when... |
|-------|-----------------|
| \`COMET_STANDALONE\` | compiling a Windows or Linux desktop build |
| \`COMET_ANDROID\` | compiling an Android build |
| \`COMET_WEB\` | compiling a Web (Emscripten/WASM) build |
| \`COMET_EDITOR\` | running **inside the editor** (play mode / edit mode), not an exported build |
| \`COMET_DEVELOPMENT\` | running in the editor **or** a **development build** — stripped from a shipping build |

\`COMET_EDITOR\` is the important one: it's defined while your scripts run in the editor and **absent in every exported build**. Wrap editor-only helpers, debug shortcuts and test hooks in it so they compile out of the shipped game:

\`\`\`angelscript
using namespace CometEngine;

class DebugTools : CometBehaviour
{
    void Update()
    {
#ifdef COMET_EDITOR
        // Cheat keys that only exist while developing in the editor.
        if (Input::GetKeyDown(KeyCode::F5)) GiveAllPowerups();
        if (Input::GetKeyDown(KeyCode::F6)) SkipLevel();
#endif
    }

    void OpenSettingsFolder()
    {
#ifdef COMET_STANDALONE
        // Desktop-only: browse to a folder on disk.
        OpenNativeFileBrowser();
#elif defined(COMET_WEB)
        // The browser sandbox has no filesystem — show an in-game panel instead.
        ShowInGameSettings();
#endif
    }
}
\`\`\`

The build system also lets you define your own **scripting constants** per platform in the Player Settings, which appear as additional \`#ifdef\` symbols — handy for feature flags (a \`DEMO\` build, a \`CONSOLE\` variant, and so on).

> [!TIP]
> \`COMET_EDITOR\` is true in **both** edit mode and play mode inside the editor. If you need "only in a real build", use \`#ifndef COMET_EDITOR\`. If you need "only on desktop", use \`#ifdef COMET_STANDALONE\`.

### Development-only code: \`COMET_DEVELOPMENT\`

\`COMET_EDITOR\` strips code from **every** exported build — perfect for editor tooling, but too aggressive when you want debug helpers that live in the **development builds** you hand to testers. That's what \`COMET_DEVELOPMENT\` is for: it's defined in the editor **and** in a development build (the **Development Build** box), and stripped only from a **shipping** build. So \`#ifdef COMET_DEVELOPMENT\` code behaves identically while you develop in the editor and in the dev build you send out — then vanishes from the release:

\`\`\`angelscript
using namespace CometEngine;

class DiagnosticsOverlay : CometBehaviour
{
    void Update()
    {
#ifdef COMET_DEVELOPMENT
        // Editor + development builds; compiled out of the shipping game.
        if (Input::GetKeyDown(KeyCode::F8)) ToggleDebugOverlay();
#endif
    }
}
\`\`\`

Need the same test at **runtime** rather than compile time — to flip a flag or log a line without wrapping it in an \`#ifdef\`? \`Debug::IsDevelopmentBuild()\` returns the identical truth: \`true\` in the editor and development builds, \`false\` in a shipping build.

\`\`\`angelscript
if (Debug::IsDevelopmentBuild())
{
    Debug::Log("Development build - verbose diagnostics enabled");
}
\`\`\`

Rule of thumb: **\`COMET_EDITOR\`** for editor-only tooling, **\`COMET_DEVELOPMENT\`** (or \`Debug::IsDevelopmentBuild()\`) for anything that should run while you develop *and* in test builds, but never in the game you ship.

## Automating builds (CI)

Everything the Build window does is available headless — perfect for nightly builds and release pipelines:

\`\`\`text
CometEngine.exe --export Windows --path "C:/projects/MyGame" --export-path "C:/builds/win64"
CometEngine.exe --export Web     --path "C:/projects/MyGame" --export-path "C:/builds/web"
\`\`\`

\`--export\` implies headless mode: the project loads, scripts compile, the seven-step build pipeline runs (compile scripts → setup → runtime resources → scenes → resource filtering → pre-build → pack), progress is printed per step, and the process exits \`0\` on success or \`1\` on failure — exactly what your CI wants.

> [!TIP]
> Configure **Patch Base Packs** in the project once, and your CI produces patch builds automatically: check the previous release's \`.ori\` packs into your release storage and point the project at them.

## Pre-flight checklist

- Every scene the game needs is in **Scenes added in Build**, with the right one at index \`0\`.
- **Development Build** is *off* for store releases.
- Player Settings: product name, version, icon set.
- Test the built game, not just the editor — packed-content loading and platform quirks only show up there.
- Shipped a build? **Archive its \`.ori\` packs.** They are the base every future patch is built against.

## Where to go next

Congratulations — you shipped! If players report a bug, you're one **Patch Base Packs** entry away from the fix. Now go back and make the game better: maybe some [2D lighting polish](/tutorials/lights)?
`}],Jn=[`2D Graphics`,`Animation`,`Physics`,`Input`,`UI`,`Audio`,`Navigation`,`Networking`,`Visual Scripting`,`Editor Tooling`,`Packages`,`Shipping`],Yn=``,Xn=new Set(`class.interface.enum.funcdef.namespace.using.import.from.typedef.mixin.void.bool.int.int8.int16.int32.int64.uint.uint8.uint16.uint32.uint64.float.double.string.array.dictionary.auto.ref.any.const.private.protected.shared.external.final.abstract.override.explicit.property.get.set.in.out.inout.if.else.for.while.do.switch.case.default.break.continue.return.null.true.false.this.super.cast.is.not.and.or.xor.try.catch`.split(`.`));function Zn(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Qn(e){let t=``,n=0,r=e.length,i=(e,n)=>{t+=e?`<span class="as-${e}">${Zn(n)}</span>`:Zn(n)};for(;n<r;){let t=e.slice(n),r=t.match(/^\/\/[^\n]*/);if(r){i(`comment`,r[0]),n+=r[0].length;continue}if(r=t.match(/^\/\*[\s\S]*?(\*\/|$)/),r){i(`comment`,r[0]),n+=r[0].length;continue}if(r=t.match(/^"(?:[^"\\\n]|\\.)*"/),r){i(`string`,r[0]),n+=r[0].length;continue}if(r=t.match(/^'(?:[^'\\\n]|\\.)*'/),r){i(`string`,r[0]),n+=r[0].length;continue}if(r=t.match(/^#[a-zA-Z]+[^\n]*/),r){i(`meta`,r[0]),n+=r[0].length;continue}if((n===0||e[n-1]===`
`)&&(r=t.match(/^\s*\[[A-Za-z][^\]\n]*\]/),r)){i(`meta`,r[0]),n+=r[0].length;continue}if(r=t.match(/^0[xX][0-9a-fA-F]+|^\d+\.\d+[fF]?|^\.\d+[fF]?|^\d+[fF]?/),r&&/^[\d.]|^0[xX]/.test(r[0])){let t=n>0?e[n-1]:``;if(!/[A-Za-z0-9_]/.test(t)){i(`number`,r[0]),n+=r[0].length;continue}}if(r=t.match(/^[A-Za-z_][A-Za-z0-9_]*/),r){let t=r[0],a=e.slice(n+t.length);Xn.has(t)?i(`keyword`,t):a.startsWith(`::`)?i(`type`,t):/^\s*\(/.test(a)?i(`func`,t):/^[A-Z]/.test(t)?i(`type`,t):i(null,t),n+=t.length;continue}i(null,e[n]),n+=1}return t}function $n(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`)}function er(){window.openLightbox||(window.openLightbox=e=>{let t=document.createElement(`div`);t.style.cssText=`
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.85); display: flex; justify-content: center;
      align-items: center; z-index: 9999; cursor: zoom-out;
      opacity: 0; transition: opacity 0.3s ease; backdrop-filter: blur(5px);
    `;let n=document.createElement(`img`);n.src=e,n.style.cssText=`
      max-width: 90%; max-height: 90%; border-radius: 12px;
      box-shadow: 0 0 50px rgba(0,0,0,0.5); transform: scale(0.9);
      transition: transform 0.3s ease; border: 1px solid rgba(255,255,255,0.1);
    `,t.appendChild(n),document.body.appendChild(t),setTimeout(()=>{t.style.opacity=`1`,n.style.transform=`scale(1)`},10),t.onclick=()=>{t.style.opacity=`0`,n.style.transform=`scale(0.9)`,setTimeout(()=>t.remove(),300)}})}var tr={NOTE:{icon:`fa-circle-info`,label:`Note`},TIP:{icon:`fa-lightbulb`,label:`Tip`},WARNING:{icon:`fa-triangle-exclamation`,label:`Warning`},IMPORTANT:{icon:`fa-circle-exclamation`,label:`Important`}};function nr(e){let t=U.parse(e,{gfm:!0,breaks:!1}),n=Kn.sanitize(t),r=document.createElement(`div`);r.className=`tut-md`,r.innerHTML=n;let i=new Set;return r.querySelectorAll(`h2, h3`).forEach(e=>{let t=$n(e.textContent);for(;i.has(t);)t+=`-x`;i.add(t),e.id=t}),r.querySelectorAll(`blockquote`).forEach(e=>{let t=e.querySelector(`p`);if(!t)return;let n=t.textContent.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*/);if(!n)return;let r=n[1],i=tr[r];t.innerHTML=t.innerHTML.replace(/^\s*\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*(<br\s*\/?>)?\s*/,``),t.textContent.trim()||t.remove();let a=document.createElement(`div`);for(a.className=`tut-callout tut-callout-${r.toLowerCase()}`,a.innerHTML=`<div class="tut-callout-title"><i class="fas ${i.icon}"></i>${i.label}</div>`;e.firstChild;)a.appendChild(e.firstChild);e.replaceWith(a)}),r.querySelectorAll(`img`).forEach(e=>{let t=document.createElement(`figure`);t.className=`tut-figure`;let n=e.getAttribute(`alt`)||``;e.loading=`lazy`;let r=e.parentElement;if(r.replaceChild(t,e),t.appendChild(e),n){let e=document.createElement(`figcaption`);e.textContent=n,t.appendChild(e)}r.tagName===`P`&&r.childNodes.length===1&&r.replaceWith(t)}),r.querySelectorAll(`pre > code`).forEach(e=>{let t=e.parentElement,n=(e.className||``).match(/language-(\w+)/),r=n?n[1]:``,i=e.textContent;(r===`angelscript`||r===`as`)&&(e.innerHTML=Qn(i));let a=document.createElement(`div`);a.className=`tut-codeblock`,t.replaceWith(a);let o=document.createElement(`div`);o.className=`tut-codeblock-header`,o.innerHTML=`
      <span class="tut-codeblock-lang">${r===`as`?`angelscript`:r||`text`}</span>
      <button class="tut-copy-btn" type="button" title="Copy to clipboard"><i class="far fa-copy"></i> Copy</button>
    `,a.appendChild(o),a.appendChild(t),o.querySelector(`.tut-copy-btn`).addEventListener(`click`,e=>{navigator.clipboard.writeText(i).then(()=>{let t=e.currentTarget;t.innerHTML=`<i class="fas fa-check"></i> Copied!`,setTimeout(()=>{t.innerHTML=`<i class="far fa-copy"></i> Copy`},1600)})})}),r.querySelectorAll(`table`).forEach(e=>{let t=document.createElement(`div`);t.className=`tut-table-wrap`,e.replaceWith(t),t.appendChild(e)}),r.querySelectorAll(`.tut-figure img`).forEach(e=>{e.style.cursor=`zoom-in`,e.addEventListener(`click`,()=>window.openLightbox(e.src))}),r}function rr(e){let t=new Map;Jn.forEach(e=>t.set(e,[])),qn.forEach(e=>t.get(e.category).push(e));let n=Yn.toLowerCase(),r=``;return t.forEach((t,i)=>{let a=n?t.filter(e=>e.title.toLowerCase().includes(n)||i.toLowerCase().includes(n)):t;a.length!==0&&(r+=`
      <div class="tut-nav-category">${i}</div>
      ${a.map(t=>`
        <a href="/tutorials/${t.id}" class="tut-nav-item ${t.id===e?`active`:``}">
          <i class="fas ${t.icon}"></i><span>${t.title}</span>
        </a>
      `).join(``)}
    `)}),r||`<div class="tut-nav-empty">No tutorials match your search.</div>`}function ir(e){e.innerHTML=`
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
        <div class="tut-grid">${qn.map(e=>`
    <a href="/tutorials/${e.id}" class="tut-card">
      <div class="tut-card-icon"><i class="fas ${e.icon}"></i></div>
      <div class="tut-card-body">
        <span class="tut-card-category">${e.category}</span>
        <h3>${e.title}</h3>
        <p>${e.blurb}</p>
      </div>
      <div class="tut-card-arrow"><i class="fas fa-arrow-right"></i></div>
    </a>
  `).join(``)}</div>
      </div>
    </section>
  `,window.scrollTo(0,0)}function ar(e,t){er();let n=qn.indexOf(t),r=n>0?qn[n-1]:null,i=n<qn.length-1?qn[n+1]:null;e.innerHTML=`
    <div class="docs-layout">
      <div class="docs-sidebar tut-sidebar" id="tut-sidebar">
        <button class="tut-nav-toggle" id="tut-nav-toggle" type="button" aria-expanded="false">
          <span><i class="fas fa-bars"></i> Browse tutorials</span>
          <i class="fas fa-chevron-down tut-nav-toggle-chevron"></i>
        </button>
        <div class="docs-sidebar-search">
          <input type="text" id="tut-search" class="search-box" placeholder="Filter tutorials..." style="margin-bottom: 0;" value="${Yn.replace(/"/g,`&quot;`)}">
        </div>
        <div class="docs-sidebar-tree" id="tut-nav">${rr(t.id)}</div>
      </div>
      <div class="docs-content tut-content" id="tut-scroll">
        <div class="tut-page">
          <div class="tut-breadcrumb">
            <a href="/tutorials">Tutorials</a>
            <i class="fas fa-chevron-right"></i>
            <span>${t.category}</span>
          </div>
          <div class="tut-article" id="tut-article"></div>
          <div class="tut-pager">
            ${r?`
              <a href="/tutorials/${r.id}" class="tut-pager-link tut-pager-prev">
                <span class="tut-pager-dir"><i class="fas fa-arrow-left"></i> Previous</span>
                <span class="tut-pager-title">${r.title}</span>
              </a>`:`<span></span>`}
            ${i?`
              <a href="/tutorials/${i.id}" class="tut-pager-link tut-pager-next">
                <span class="tut-pager-dir">Next <i class="fas fa-arrow-right"></i></span>
                <span class="tut-pager-title">${i.title}</span>
              </a>`:`<span></span>`}
          </div>
        </div>
      </div>
      <div class="tut-toc" id="tut-toc"></div>
    </div>
  `;let a=document.getElementById(`tut-article`);a.appendChild(nr(t.md));let o=a.querySelectorAll(`h2, h3`),s=document.getElementById(`tut-toc`);if(o.length>1){s.innerHTML=`
      <div class="tut-toc-title">On this page</div>
      ${Array.from(o).map(e=>`
        <a href="/" data-target="${e.id}" class="tut-toc-link tut-toc-${e.tagName.toLowerCase()}">${e.textContent}</a>
      `).join(``)}
    `;let e=document.getElementById(`tut-scroll`);s.querySelectorAll(`.tut-toc-link`).forEach(t=>{t.addEventListener(`click`,n=>{n.preventDefault();let r=document.getElementById(t.dataset.target);r&&e.scrollTo({top:r.offsetTop-24,behavior:`smooth`})})});let t=new Map;s.querySelectorAll(`.tut-toc-link`).forEach(e=>t.set(e.dataset.target,e));let n=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){s.querySelectorAll(`.tut-toc-link.active`).forEach(e=>e.classList.remove(`active`));let n=t.get(e.target.id);n&&n.classList.add(`active`)}})},{root:e,rootMargin:`0px 0px -75% 0px`});o.forEach(e=>n.observe(e))}document.getElementById(`tut-search`).addEventListener(`input`,e=>{Yn=e.target.value,document.getElementById(`tut-nav`).innerHTML=rr(t.id)});let c=document.getElementById(`tut-nav-toggle`),l=document.getElementById(`tut-sidebar`);c&&l&&c.addEventListener(`click`,()=>{let e=l.classList.toggle(`open`);c.setAttribute(`aria-expanded`,e?`true`:`false`)}),document.getElementById(`tut-scroll`).scrollTop=0}function or(e,t,n=null){Pu(e,t,n)}function sr(e,t){let n=decodeURIComponent(t.replace(`#tutorials`,``).substring(1));if(!n){or(`Tutorials — Comet Engine`,`Step-by-step guides to every major subsystem of the Comet Engine 2D game engine — rendering, lighting, tilemaps, physics, animation, UI, audio, networking and more.`),ir(e);return}let r=qn.find(e=>e.id===n);if(!r){ct(`/tutorials`);return}let i=r.image?window.location.origin+r.image:null;or(`${r.title} — Comet Engine`,r.blurb,i),ar(e,r)}function cr(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function lr(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var ur=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),dr=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},fr=class extends dr{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},pr=class extends dr{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},mr=class extends dr{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},hr;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(hr||={});var gr=class{constructor(e,{headers:t={},customFetch:n,region:r=hr.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=ur(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return lr(this,arguments,void 0,function*(e,t={}){let n,r;try{let{headers:i,method:a,body:o,signal:s,timeout:c}=t,l={},{region:u}=t;u||=this.region;let d=new URL(`${this.url}/${e}`);u&&u!==`any`&&(l[`x-region`]=u,d.searchParams.set(`forceFunctionRegion`,u));let f;o&&(i&&!Object.prototype.hasOwnProperty.call(i,`Content-Type`)||!i)?typeof Blob<`u`&&o instanceof Blob||o instanceof ArrayBuffer?(l[`Content-Type`]=`application/octet-stream`,f=o):typeof o==`string`?(l[`Content-Type`]=`text/plain`,f=o):typeof FormData<`u`&&o instanceof FormData?f=o:(l[`Content-Type`]=`application/json`,f=JSON.stringify(o)):f=o&&typeof o!=`string`&&!(typeof Blob<`u`&&o instanceof Blob)&&!(o instanceof ArrayBuffer)&&!(typeof FormData<`u`&&o instanceof FormData)?JSON.stringify(o):o;let p=s;c&&(r=new AbortController,n=setTimeout(()=>r.abort(),c),s?(p=r.signal,s.addEventListener(`abort`,()=>r.abort())):p=r.signal);let m=yield this.fetch(d.toString(),{method:a||`POST`,headers:Object.assign(Object.assign(Object.assign({},l),this.headers),i),body:f,signal:p}).catch(e=>{throw new fr(e)}),h=m.headers.get(`x-relay-error`);if(h&&h===`true`)throw new pr(m);if(!m.ok)throw new mr(m);let g=(m.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim(),_;return _=g===`application/json`?yield m.json():g===`application/octet-stream`||g===`application/pdf`?yield m.blob():g===`text/event-stream`?m:g===`multipart/form-data`?yield m.formData():yield m.text(),{data:_,error:null,response:m}}catch(e){return{data:null,error:e,response:e instanceof mr||e instanceof pr?e.context:void 0}}finally{n&&clearTimeout(n)}})}},_r=3,vr=e=>Math.min(1e3*2**e,3e4),yr=[520,503],br=[`GET`,`HEAD`,`OPTIONS`],xr=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Sr(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function Cr(e,t,n,r){return!(!r||n>=_r||!br.includes(e)||!yr.includes(t))}var wr=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):(!e||e===`application/json`)&&this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e=0;for(;;){let t={};n.headers.forEach((e,n)=>{t[n]=e}),e>0&&(t[`X-Retry-Count`]=String(e));let i;try{i=await r(n.url.toString(),{method:n.method,headers:t,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal})}catch(t){if(t?.name===`AbortError`||t?.code===`ABORT_ERR`||!br.includes(n.method))throw t;if(n.retryEnabled&&e<_r){let t=vr(e);e++,await Sr(t,n.signal);continue}throw t}if(Cr(n.method,i.status,e,n.retryEnabled)){let t=i.headers?.get(`Retry-After`)??null,r=t===null?vr(e):Math.max(0,parseInt(t,10)||0)*1e3;await i.text(),e++,await Sr(r,n.signal);continue}return await n.processResponse(i)}})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let i=await e.text();if(i!==``)if(t.headers.get(`Accept`)===`text/csv`)r=i;else if(t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`))r=i;else try{r=JSON.parse(i)}catch{if(n={message:i},r=null,t.shouldThrowOnError)throw new xr({message:i,details:``,hint:``,code:``})}}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`):r=r.length===1?r[0]:null)}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new xr(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},Tr=class extends wr{throwOnError(){return super.throwOnError()}select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},Er=RegExp(`[,()]`),Dr=class extends Tr{throwOnError(){return super.throwOnError()}eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&Er.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&Er.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},Or=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new Dr({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new Dr({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new Dr({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new Dr({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new Dr({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function kr(e){"@babel/helpers - typeof";return kr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},kr(e)}function Ar(e,t){if(kr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(kr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function jr(e){var t=Ar(e,`string`);return kr(t)==`symbol`?t:t+``}function Mr(e,t,n){return(t=jr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Pr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Nr(Object(n),!0).forEach(function(t){Mr(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Fr=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;i!==void 0&&i>0?this.fetch=(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,Pr(Pr({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,Pr(Pr({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:this.fetch=s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new Or(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new Dr({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},Ir=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node){let t=e.node,n=parseInt(t.replace(/^v/,``).split(`.`)[0]);return n>=22?globalThis.WebSocket===void 0?{type:`unsupported`,error:`Node.js ${n} detected but native WebSocket not found.`,workaround:`Provide a WebSocket implementation via the transport option.`}:{type:`native`,wsConstructor:globalThis.WebSocket}:{type:`unsupported`,error:`Node.js ${n} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{let e=this.detectEnvironment();return e.type===`native`||e.type===`ws`}catch{return!1}}},Lr=`realtime-js/2.108.1`,Rr=`1.0.0`,zr=`2.0.0`,Br=zr,Vr=1e4,Hr={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Ur={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},Wr={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},Gr=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=e.topic,i=e.ref??``,a=e.join_ref??``,o=e.payload.event,s=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},c=Object.keys(s).length===0?``:JSON.stringify(s);if(a.length>255)throw Error(`joinRef length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`ref length ${i.length} exceeds maximum of 255`);if(r.length>255)throw Error(`topic length ${r.length} exceeds maximum of 255`);if(o.length>255)throw Error(`userEvent length ${o.length} exceeds maximum of 255`);if(c.length>255)throw Error(`metadata length ${c.length} exceeds maximum of 255`);let l=this.USER_BROADCAST_PUSH_META_LENGTH+a.length+i.length+r.length+o.length+c.length,u=new ArrayBuffer(this.HEADER_LENGTH+l),d=new DataView(u),f=0;d.setUint8(f++,this.KINDS.userBroadcastPush),d.setUint8(f++,a.length),d.setUint8(f++,i.length),d.setUint8(f++,r.length),d.setUint8(f++,o.length),d.setUint8(f++,c.length),d.setUint8(f++,t),Array.from(a,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(i,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(r,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(o,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(c,e=>d.setUint8(f++,e.charCodeAt(0)));var p=new Uint8Array(u.byteLength+n.byteLength);return p.set(new Uint8Array(u),0),p.set(new Uint8Array(n),u.byteLength),p.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},K;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(K||={});var Kr=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=qr(i,e,t,r),n),{}):{}},qr=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?Jr(i,a):Yr(a)},Jr=(e,t)=>{if(e.charAt(0)===`_`)return $r(t,e.slice(1,e.length));switch(e){case K.bool:return Xr(t);case K.float4:case K.float8:case K.int2:case K.int4:case K.int8:case K.numeric:case K.oid:return Zr(t);case K.json:case K.jsonb:return Qr(t);case K.timestamp:return ei(t);case K.abstime:case K.date:case K.daterange:case K.int4range:case K.int8range:case K.money:case K.reltime:case K.text:case K.time:case K.timestamptz:case K.timetz:case K.tsrange:case K.tstzrange:return Yr(t);default:return Yr(t)}},Yr=e=>e,Xr=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},Zr=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Qr=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},$r=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>Jr(t,e))}return e},ei=e=>typeof e==`string`?e.replace(` `,`T`):e,ti=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},ni=e=>typeof e==`function`?e:function(){return e},ri=typeof self<`u`?self:null,ii=typeof window<`u`?window:null,ai=ri||ii||globalThis,oi=`2.0.0`,si=1e4,ci=1e3,li={connecting:0,open:1,closing:2,closed:3},ui={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},di={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},fi={longpoll:`longpoll`,websocket:`websocket`},pi={complete:4},mi=`base64url.bearer.phx.`,hi=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},gi=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},_i=class{constructor(e,t,n){this.state=ui.closed,this.topic=e,this.params=ni(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new hi(this,di.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new gi(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=ui.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=ui.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=ui.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=ui.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new hi(this,di.leave,ni({}),this.timeout).send(),this.state=ui.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(di.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=ui.closed,this.bindings=[]}onClose(e){this.on(di.close,e)}onError(e){return this.on(di.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>!(n.event===e&&(t===void 0||t===n.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new hi(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=ui.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(di.close,`leave`)},n=new hi(this,di.leave,ni({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=ui.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===ui.closed}isErrored(){return this.state===ui.errored}isJoined(){return this.state===ui.joined}isJoining(){return this.state===ui.joining}isLeaving(){return this.state===ui.leaving}},vi=class{static request(e,t,n,r,i,a,o){if(ai.XDomainRequest){let n=new ai.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}else if(ai.XMLHttpRequest){let s=new ai.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}else if(ai.fetch&&ai.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);else throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),ai.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===pi.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},yi=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},bi=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(mi)&&(this.authToken=atob(t[1].slice(mi.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=li.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+fi.websocket),`$1/`+fi.longpoll)}endpointURL(){return vi.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=li.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===li.open||this.readyState===li.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=li.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=yi(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e){this.awaitingBatchAck=!0,this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},e.join(`
`),()=>this.onerror(`timeout`),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,`internal server error`,!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=li.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=vi.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},xi=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.clone(e),a={},o={};return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Si={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=this.META_LENGTH+t.length+n.length+i.length+r.length,s=new ArrayBuffer(this.HEADER_LENGTH+o),c=new DataView(s),l=0;c.setUint8(l++,this.KINDS.push),c.setUint8(l++,t.length),c.setUint8(l++,n.length),c.setUint8(l++,i.length),c.setUint8(l++,r.length),Array.from(t,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(n,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(i,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(r,e=>c.setUint8(l++,e.charCodeAt(0)));var u=new Uint8Array(s.byteLength+a.byteLength);return u.set(new Uint8Array(s),0),u.set(new Uint8Array(a),s.byteLength),u.buffer},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:di.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},Ci=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||si,this.transport=t.transport||ai.WebSocket||bi,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=ai&&ai.sessionStorage}catch{}this.sessionStore=t.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=Si.encode.bind(Si),this.defaultDecoder=Si.decode.bind(Si),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===bi?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let r=null;ii&&ii.addEventListener&&(ii.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),r=this.connectClock)}),ii.addEventListener(`pageshow`,e=>{r===this.connectClock&&(r=null,this.connect())}),ii.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=ni(t.params||{}),this.endPoint=`${e}/${fi.websocket}`,this.vsn=t.vsn||oi,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new gi(()=>{if(this.pageHidden){this.log(`Not reconnecting as page is hidden!`),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken}getLongPollTransport(){return bi}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=vi.appendParams(vi.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=ni(e)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==bi?this.connectWithFallback(bi,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case bi:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${mi}${btoa(this.authToken).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a=this.transportName(e),o=t=>{this.log(`transport`,`falling back to ${a}...`,t),this.off([void 0,i]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o(`memorized`);this.fallbackTimer=setTimeout(o,t),i=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),o(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),ci,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){if(n===5||!e.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){if(n===5||e.readyState===li.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(di.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case li.connecting:return`connecting`;case li.open:return`open`;case li.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new _i(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},wi=class e{constructor(t,n){let r=Di(n);this.presence=new xi(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=Ei(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=Ti(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:Oi(t),newPresences:Ti(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:Oi(t),leftPresences:Ti(n)}}};function Ti(e){return e.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Ei(e){return JSON.parse(JSON.stringify(e))}function Di(e){return e?.events&&{events:e.events}}function Oi(e){return e?.metas?Ti(e):[]}var ki;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(ki||={});var Ai=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new wi(this.channel.channelAdapter,t)}};function ji(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var Mi=class{constructor(e,t,n){let r=Ni(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===Hr.joined}isJoined(){return this.state===Hr.joined}isJoining(){return this.state===Hr.joining}isClosed(){return this.state===Hr.closed}isLeaving(){return this.state===Hr.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function Ni(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var Pi;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(Pi||={});var Fi;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(Fi||={});var Ii;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(Ii||={});var Li=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new Mi(this.socket.socketAdapter,e,this.params),this.presence=new Ai(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=ti(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i}}=this.params,a=this.bindings.postgres_changes?.map(e=>e.filter)??[],o=!!this.bindings[Fi.PRESENCE]&&this.bindings[Fi.PRESENCE].length>0||this.params.config.presence?.enabled===!0,s={},c={broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:o}),postgres_changes:a,private:i};this.socket.accessTokenValue&&(s.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(Ii.CHANNEL_ERROR,ji(t))}),this._onClose(()=>e?.(Ii.CLOSED)),this.updateJoinPayload(Object.assign({config:c},s)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive(`ok`,async({postgres_changes:t})=>{if(this.socket._isManualToken()||this.socket.setAuth(),t===void 0){e?.(Ii.SUBSCRIBED);return}this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=Hr.errored;let n=Object.values(t).join(`, `)||`error`;e?.(Ii.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(Ii.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=Hr.errored,n?.(Ii.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=Hr.errored&&n&&n(Ii.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===Fi.PRESENCE||e===Fi.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r=t instanceof ArrayBuffer||ArrayBuffer.isView(t),i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":r?`application/octet-stream`:`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a=new URL(this.broadcastEndpointURL);a.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&a.searchParams.set(`private`,`true`);let o={method:`POST`,headers:i,body:r?t:JSON.stringify(t)},s=await this._fetchWithTimeout(a.toString(),o,n.timeout??this.timeout);if(s.status===202)return{success:!0};let c=s.statusText;try{let e=await s.json();c=e.error||e.message||c}catch{}return Promise.reject(Error(c))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){console.warn(`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`);let{event:n,payload:r}=e,i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a={method:`POST`,headers:i,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:r,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,a,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}else return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(e,t,n){let r=e.toLocaleLowerCase(),i={type:r,filter:t,callback:n,ref:this.channelAdapter.on(e,n)};return this.bindings[r]?this.bindings[r].push(i):this.bindings[r]=[i],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r))if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}else{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}else return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=Ur;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=Kr(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=Kr(e.columns,e.old_record)),t}},Ri=class{constructor(e,t){this.socket=new Ci(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Wr.connecting}isDisconnecting(){return this.socket.connectionState()==Wr.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},zi={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Bi=[1e3,2e3,5e3,1e4],Vi=1e4;function Hi(){let e=new Map;return{get length(){return e.size},clear(){e.clear()},getItem(t){return e.has(t)?e.get(t):null},key(t){return Array.from(e.keys())[t]??null},removeItem(t){e.delete(t)},setItem(t,n){e.set(t,String(n))}}}function Ui(){try{if(typeof globalThis<`u`&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Hi()}var Wi=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,Gi=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new Gr,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new Ri(e,n),this.httpEndpoint=ti(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw t.includes(`Node.js`)?Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}connectionState(){return this.socketAdapter.connectionState()||Wr.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new Li(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,n=!1;if(e)t=e,n=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),t=this.accessTokenValue}else t=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(e=>{let n={access_token:t,version:Lr};t&&e.updateJoinPayload(n),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(Ur.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t==`sent`&&this._setAuthSafely(),e&&e(t,n)}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([Wi],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??Vr,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??zi.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??zi.HEARTBEAT_INTERVAL),t.transport=e?.transport??Ir.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.sessionStorage=e?.sessionStorage??Ui(),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>Bi[e-1]||Vi);let n,r,i=e?.vsn??Br;switch(i){case Rr:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case zr:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},Ki=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function qi(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function Ji(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function Yi(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=qi(e.baseUrl,r,i),c=await Ji(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new Ki(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function Xi(e){return e.join(``)}var Zi=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:Xi(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Xi(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Xi(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Xi(e.namespace)}`}),!0}catch(e){if(e instanceof Ki&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof Ki&&e.status===409)return;throw e}}};function Qi(e){return e.join(``)}var $i=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Qi(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Qi(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Qi(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Qi(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Qi(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Qi(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof Ki&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof Ki&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},ea=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=Yi({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new Zi(this.client,t),this.tableOps=new $i(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function ta(e){"@babel/helpers - typeof";return ta=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},ta(e)}function na(e,t){if(ta(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(ta(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ra(e){var t=na(e,`string`);return ta(t)==`symbol`?t:t+``}function ia(e,t,n){return(t=ra(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?aa(Object(n),!0).forEach(function(t){ia(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):aa(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var oa=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function sa(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var ca=class extends oa{constructor(e,t,n,r=`storage`){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n}toJSON(){return q({},super.toJSON())}},la=class extends oa{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function ua(e,t,n){let r=q({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function da(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var fa=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),pa=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ma=e=>{if(Array.isArray(e))return e.map(e=>ma(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=ma(n)}),t},ha=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),ga=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},_a=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new ca(ga(e),i,n,r))}).catch(()=>{let e=i+``;t(new ca(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new la(ga(e),e,r))},va=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return q(q({},i),n);if(pa(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=ua(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),q(q({},i),n)};async function ya(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,va(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>_a(e,c,r,o))})}function ba(e=`storage`){return{get:async(t,n,r,i)=>ya(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>ya(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>ya(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>ya(t,`HEAD`,n,q(q({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>ya(t,`DELETE`,n,i,a,r,e)}}var{get:xa,post:Sa,put:Ca,head:wa,remove:Ta}=ba(`storage`),Ea=ba(`vectors`),Da=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=da(t),this.fetch=fa(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=ua(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(sa(e))return{data:null,error:e};throw e}}},Oa=Symbol.toStringTag,ka=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Oa]=`StreamDownloadBuilder`,this.promise=null}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(sa(t))return{data:null,error:t};throw t}}},Aa=Symbol.toStringTag,ja=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Aa]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new ka(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(sa(t))return{data:null,error:t};throw t}}},Ma={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},Na={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},Pa=class extends Da{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=q(q({},Na),r),s=q(q({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob?(a=new FormData,a.append(`cacheControl`,o.cacheControl),c&&a.append(`metadata`,i.encodeMetadata(c)),a.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(a=n,a.has(`cacheControl`)||a.append(`cacheControl`,o.cacheControl),c&&!a.has(`metadata`)&&a.append(`metadata`,i.encodeMetadata(c))):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=ua(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?Ca:Sa)(i.fetch,`${i.url}/object/${u}`,a,q({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=q(q({},Na),r),o=q(q({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob?(e=new FormData,e.append(`cacheControl`,t.cacheControl),c&&e.append(`metadata`,i.encodeMetadata(c)),e.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(e=n,e.has(`cacheControl`)||e.append(`cacheControl`,t.cacheControl),c&&!e.has(`metadata`)&&e.append(`metadata`,i.encodeMetadata(c))):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=ua(o,e,t);return{path:a,fullPath:(await Ca(i.fetch,s.toString(),e,q({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=q({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await Sa(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new oa(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await Sa(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>({path:(await Sa(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await Sa(r.fetch,`${r.url}/object/sign/${i}`,q({expiresIn:t},a?{transform:n.transform}:{}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await Sa(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>q(q({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce));let a=i.toString(),o=this._getFinalPath(e);return new ja(()=>xa(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e){var t=this;let n=t._getFinalPath(e);return t.handleOperation(async()=>ma(await xa(t.fetch,`${t.url}/object/info/${n}`,{headers:t.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await wa(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(sa(e)){let t=e instanceof ca?e.status:e instanceof la?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await Ta(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=q(q(q({},Ma),t),{},{prefix:e||``});return await Sa(r.fetch,`${r.url}/object/list/${r.bucketId}`,i,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=q({},e);return await Sa(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},Fa={"X-Client-Info":`storage-js/2.108.1`},Ia=class extends Da{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=q(q({},Fa),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await xa(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await xa(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await Sa(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await Ca(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await Sa(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Ta(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},La=class extends Da{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=q(q({},Fa),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await Sa(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await xa(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Ta(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!ha(e))throw new oa(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new ea({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},Ra=class extends Da{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=q(q({},Fa),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await Ea.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await Ea.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},za=class extends Da{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=q(q({},Fa),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},Ba=class extends Da{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=q(q({},Fa),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Ea.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},Va=class extends Ba{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new Ha(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},Ha=class extends Ra{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,q(q({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,q(q({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new Ua(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},Ua=class extends za{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,q(q({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,q(q({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,q(q({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,q(q({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,q(q({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},Wa=class extends Ia{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new Pa(this.url,this.headers,e,this.fetch)}get vectors(){return new Va(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new La(this.url+`/iceberg`,this.headers,this.fetch)}},Ga=`2.108.1`,Ka=30*1e3,qa=3*Ka,Ja=`http://localhost:9999`,Ya=`supabase.auth.token`,Xa={"X-Client-Info":`gotrue-js/${Ga}`},Za=`X-Supabase-Api-Version`,Qa={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},$a=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,eo=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function J(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var to=class extends eo{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function no(e){return J(e)&&e.name===`AuthApiError`}var ro=class extends eo{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},io=class extends eo{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},ao=class extends io{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function oo(e){return J(e)&&e.name===`AuthSessionMissingError`}var so=class extends io{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},co=class extends io{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},lo=class extends io{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function uo(e){return J(e)&&e.name===`AuthImplicitGrantRedirectError`}var fo=class extends io{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},po=class extends io{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},mo=class extends io{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function ho(e){return J(e)&&e.name===`AuthRetryableFetchError`}var go=class extends io{constructor(e=`Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`){super(e,`AuthRefreshDiscardedError`,409,void 0)}};function _o(e){return J(e)&&e.name===`AuthRefreshDiscardedError`}var vo=class extends io{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},yo=class extends io{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},bo=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),xo=` 	
\r=`.split(``),So=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<xo.length;t+=1)e[xo[t].charCodeAt(0)]=-2;for(let t=0;t<bo.length;t+=1)e[bo[t].charCodeAt(0)]=t;return e})();function Co(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(bo[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(bo[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function wo(e,t,n){let r=So[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function To(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{Oo(e,r,n)};for(let t=0;t<e.length;t+=1)wo(e.charCodeAt(t),i,a);return t.join(``)}function Eo(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function Do(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}Eo(r,t)}}function Oo(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function ko(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)wo(e.charCodeAt(t),n,r);return new Uint8Array(t)}function Ao(e){let t=[];return Do(e,e=>t.push(e)),new Uint8Array(t)}function jo(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>Co(e,n,r)),Co(null,n,r),t.join(``)}function Mo(e){return Math.round(Date.now()/1e3)+e}function No(){return Symbol(`auth-callback`)}var Po=()=>typeof window<`u`&&typeof document<`u`,Fo={tested:!1,writable:!1},Io=()=>{if(!Po())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(Fo.tested)return Fo.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Fo.tested=!0,Fo.writable=!0}catch{Fo.tested=!0,Fo.writable=!1}return Fo.writable};function Lo(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var Ro=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),zo=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,Bo=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},Vo=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},Ho=async(e,t)=>{await e.removeItem(t)},Uo=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};Uo.promiseConstructor=Promise;function Wo(e){let t=e.split(`.`);if(t.length!==3)throw new yo(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!$a.test(t[e]))throw new yo(`JWT not in base64url format`);return{header:JSON.parse(To(t[0])),payload:JSON.parse(To(t[1])),signature:ko(t[2]),raw:{header:t[0],payload:t[1]}}}async function Go(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function Ko(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function qo(e){return(`0`+e.toString(16)).substr(-2)}function Jo(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,qo).join(``)}async function Yo(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function Xo(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await Yo(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}async function Zo(e,t,n=!1){let r=Jo(),i=r;n&&(i+=`/recovery`),await Bo(e,`${t}-code-verifier`,i);let a=await Xo(r);return[a,r===a?`plain`:`s256`]}var Qo=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function $o(e){let t=e.headers.get(Za);if(!t||!t.match(Qo))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function es(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function ts(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var ns=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function rs(e){if(!ns.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function is(e){if(!e.passkey)throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function as(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function os(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function ss(e){return JSON.parse(JSON.stringify(e))}var cs=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},ls=[502,503,504,520,521,522,523,524,530];async function us(e){if(!zo(e))throw new mo(cs(e),0);if(ls.includes(e.status))throw new mo(cs(e),e.status);let t;try{t=await e.json()}catch(e){throw new ro(cs(e),e)}let n,r=$o(e);if(r&&r.getTime()>=Qa[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new vo(cs(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new vo(cs(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new ao;throw new to(cs(t),e.status||500,n)}var ds=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function Y(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[Za]=Qa[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await fs(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function fs(e,t,n,r,i,a){let o=ds(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw console.error(e),new mo(cs(e),0)}if(s.ok||await us(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await us(e)}}function ps(e){let t=null;ys(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=Mo(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function ms(e){let t=ps(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function hs(e){return{data:{user:e.user??e},error:null}}function gs(e){return{data:e,error:null}}function _s(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=cr(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function vs(e){return e}function ys(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var bs=[`global`,`local`,`others`],xs=class{constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=Ro(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=bs[0]){if(bs.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${bs.join(`, `)}`);try{return await Y(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(J(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await Y(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:hs})}catch(e){if(J(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=cr(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await Y(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:_s,redirectTo:t?.redirectTo})}catch(e){if(J(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await Y(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:hs})}catch(e){if(J(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await Y(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:vs});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(J(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){rs(e);try{return await Y(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:hs})}catch(e){if(J(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){rs(e);try{return await Y(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:hs})}catch(e){if(J(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){rs(e);try{return await Y(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:hs})}catch(e){if(J(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){rs(e.userId);try{let{data:t,error:n}=await Y(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(J(e))return{data:null,error:e};throw e}}async _deleteFactor(e){rs(e.userId),rs(e.id);try{return{data:await Y(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(J(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await Y(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:vs});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(J(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await Y(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(J(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await Y(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(J(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await Y(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(J(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await Y(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(J(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await Y(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(J(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await Y(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(J(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await Y(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(J(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await Y(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(J(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await Y(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(J(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await Y(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(J(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){is(this.experimental),rs(e.userId);try{return await Y(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(J(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){is(this.experimental),rs(e.userId),rs(e.passkeyId);try{return await Y(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(J(e))return{data:null,error:e};throw e}}};function Ss(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}globalThis&&Io()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);var Cs=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}};function ws(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,`__magic__`,{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function Ts(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function Es(e){return parseInt(e,16)}function Ds(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function Os(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=Ts(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var ks=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},As=class extends ks{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function js({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new ks({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new ks({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new ks({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new ks({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new ks({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new ks({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new ks({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new ks({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Rs(t))return new ks({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new ks({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new ks({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new ks({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new ks({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function Ms({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new ks({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new ks({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!Rs(t))return new ks({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new ks({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new ks({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new ks({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var Ns=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function Ps(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=cr(e,[`challenge`,`user`,`excludeCredentials`]),a=ko(t).buffer,o=Object.assign(Object.assign({},n),{id:ko(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:ko(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function Fs(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=cr(e,[`challenge`,`allowCredentials`]),i=ko(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:ko(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function Is(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:jo(new Uint8Array(e.response.attestationObject)),clientDataJSON:jo(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function Ls(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:jo(new Uint8Array(r.authenticatorData)),clientDataJSON:jo(new Uint8Array(r.clientDataJSON)),signature:jo(new Uint8Array(r.signature)),userHandle:r.userHandle?jo(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function Rs(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function zs(){return!!(Po()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function Bs(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new As(`Browser returned unexpected credential type`,t)}:{data:null,error:new As(`Empty credential response`,t)}}catch(t){return{data:null,error:js({error:t,options:e})}}}async function Vs(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new As(`Browser returned unexpected credential type`,t)}:{data:null,error:new As(`Empty credential response`,t)}}catch(t){return{data:null,error:Ms({error:t,options:e})}}}var Hs={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},Us={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function Ws(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0)if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];t(n)?r[e]=Ws(n,a):r[e]=Ws(a)}else r[e]=a}return r}function Gs(e,t){return Ws(Hs,e,t||{})}function Ks(e,t){return Ws(Us,e,t||{})}var qs=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??Ns.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await Bs({publicKey:Gs(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=Ks(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await Vs(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return J(e)?{data:null,error:e}:{data:null,error:new ro(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new eo(`rpId is required for WebAuthn authentication`)};try{if(!zs())return{data:null,error:new ro(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return J(e)?{data:null,error:e}:{data:null,error:new ro(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new eo(`rpId is required for WebAuthn registration`)};try{if(!zs())return{data:null,error:new ro(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status!==`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return J(e)?{data:null,error:e}:{data:null,error:new ro(`Unexpected error in register`,e)}}}};ws();var Js={url:Ja,storageKey:Ya,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Xa,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Ys={},Xs=class e{get jwks(){return Ys[this.storageKey]?.jwks??{keys:[]}}set jwks(e){Ys[this.storageKey]=Object.assign(Object.assign({},Ys[this.storageKey]),{jwks:e})}get jwks_cached_at(){return Ys[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){Ys[this.storageKey]=Object.assign(Object.assign({},Ys[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},Js),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&Po()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new xs({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Ro(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new qs(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:Io()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Ss(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=Ss(this.memoryStorage)),Po()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Ga}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise||=(async()=>this.lock==null?await this._initialize():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise}async _initialize(){try{let e={},t=`none`;if(Po()&&(e=Lo(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),Po()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),uo(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return J(e)?this._returnResult({error:e}):this._returnResult({error:new ro(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await Y(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:ps});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await Zo(this.storage,this.storageKey)),t=await Y(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:i?.emailRedirectTo,body:{email:n,password:r,data:i?.data??{},gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},xform:ps})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await Y(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:n,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:ps})}else throw new co(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r||!n)return await Ho(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:r});let i=n.session,a=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,i)),this._returnResult({data:{user:a,session:i},error:null})}catch(e){if(await Ho(this.storage,`${this.storageKey}-code-verifier`),J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:ms})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:ms})}else throw new co(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new so;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock==null?this._exchangeCodeForSession(e):this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!Po()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=Ts(l[0]),d=o?.signInWithEthereum?.chainId;d||=Es(await s.request({method:`eth_chainId`})),t=Os({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[Ds(t),u]})}try{let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:ps});if(i)throw i;if(!r||!r.session||!r.user){let e=new so;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!Po()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:jo(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:ps});if(i)throw i;if(!r||!r.session||!r.user){let e=new so;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e){let[t,n]=(await Vo(this.storage,`${this.storageKey}-code-verifier`)??``).split(`/`);try{if(!t&&this.flowType===`pkce`)throw new po;let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:t},xform:ps});if(await Ho(this.storage,`${this.storageKey}-code-verifier`),i)throw i;if(!r||!r.session||!r.user){let e=new so;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(n===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign(Object.assign({},r),{redirectType:n??null}),error:i})}catch(e){if(await Ho(this.storage,`${this.storageKey}-code-verifier`),J(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:ps});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new so;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){try{if(`email`in e){let{email:t,options:n}=e,r=null,i=null;this.flowType===`pkce`&&([r,i]=await Zo(this.storage,this.storageKey));let{error:a}=await Y(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},code_challenge:r,code_challenge_method:i},redirectTo:n?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new co(`You must provide either an email or phone number.`)}catch(e){if(await Ho(this.storage,`${this.storageKey}-code-verifier`),J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:ps});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){try{let t=null,n=null;this.flowType===`pkce`&&([t,n]=await Zo(this.storage,this.storageKey));let r=await Y(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:e.options?.redirectTo??void 0}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:t,code_challenge_method:n}),headers:this.headers,xform:gs});return r.data?.url&&Po()&&!e.options?.skipBrowserRedirect&&window.location.assign(r.data.url),this._returnResult(r)}catch(e){if(await Ho(this.storage,`${this.storageKey}-code-verifier`),J(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,this.lock==null?await this._reauthenticate():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new ao;let{error:r}=await Y(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{let t=`${this.url}/resend`;if(`email`in e){let{email:n,type:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await Zo(this.storage,this.storageKey));let{error:s}=await Y(this.fetch,`POST`,t,{headers:this.headers,body:{email:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:i?.emailRedirectTo});return s&&await Ho(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:s})}else if(`phone`in e){let{phone:n,type:r,options:i}=e,{data:a,error:o}=await Y(this.fetch,`POST`,t,{headers:this.headers,body:{phone:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new co(`You must provide either an email or phone number and a type`)}catch(e){if(await Ho(this.storage,`${this.storageKey}-code-verifier`),J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,this.lock==null?await this._useSession(async e=>e):await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lock!=null&&!this.lockAcquired&&this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await Vo(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<qa:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n){if(this.userStorage){let t=await Vo(this.userStorage,this.storageKey+`-user`);t?.user?e.user=t.user:e.user=as()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=os(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{session:null},error:i}):this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return t=this.lock==null?await this._getUser():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await Y(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:hs}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new ao}:await Y(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:hs})})}catch(e){if(J(e))return oo(e)&&(await this._removeSession(),await Ho(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,this.lock==null?await this._updateUser(e,t):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;if(!r.session)throw new ao;let a=r.session,o=null,s=null;this.flowType===`pkce`&&e.email!=null&&([o,s]=await Zo(this.storage,this.storageKey));let{data:c,error:l}=await Y(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:s}),jwt:a.access_token,xform:hs});if(l)throw l;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers(`USER_UPDATED`,a),this._returnResult({data:{user:a.user},error:null})})}catch(e){if(await Ho(this.storage,`${this.storageKey}-code-verifier`),J(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,this.lock==null?await this._setSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new ao;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=Wo(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(J(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,this.lock==null?await this._refreshSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new ao;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!Po())throw new lo(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new lo(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new fo(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new lo(`Not a valid implicit grant flow url.`);break;default:}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new fo(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code);if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new lo(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(J(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){let t=await Vo(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:`global`}){return await this.initializePromise,this.lock==null?await this._signOut(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let{data:n,error:r}=t;if(r&&!oo(r))return this._returnResult({error:r});let i=n.session?.access_token;if(i){let{error:t}=await this.admin.signOut(i,e);if(t&&!(no(t)&&(t.status===404||t.status===401||t.status===403)||oo(t)))return this._returnResult({error:t})}return e!==`others`&&(await this._removeSession(),await Ho(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){let t=No(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,this.lock==null?await this._emitInitialSession(t):await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),oo(t)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null;this.flowType===`pkce`&&([n,r]=await Zo(this.storage,this.storageKey,!0));try{return await Y(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(e){if(await Ho(this.storage,`${this.storageKey}-code-verifier`),J(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){try{let{data:t,error:n}=await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;let i=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return await Y(this.fetch,`GET`,i,{headers:this.headers,jwt:n.session?.access_token??void 0})});if(n)throw n;return Po()&&!e.options?.skipBrowserRedirect&&window.location.assign(t?.url),this._returnResult({data:{provider:e.provider,url:t?.url},error:null})}catch(t){if(J(t))return this._returnResult({data:{provider:e.provider,url:null},error:t});throw t}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await Y(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:ps});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new so}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await Ho(this.storage,`${this.storageKey}-code-verifier`),J(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await Y(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken()`;this._debug(t,`begin`);try{let n=Date.now();return await Ko(async n=>(n>0&&await Go(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await Y(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:ps})),(e,t)=>{let r=200*2**e;return t&&ho(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),J(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),Po()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await Vo(this.storage,this.storageKey);if(t&&this.userStorage){let e=await Vo(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await Bo(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??as()}else if(t&&!t.user&&!t.user){let e=await Vo(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await Ho(this.storage,this.storageKey+`-user`),await Bo(this.storage,this.storageKey,t)):t.user=as()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<qa;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${qa}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(_o(n)?this._debug(e,`refresh discarded by commit guard`,n):(this._debug(e,`refresh failed`,n),ho(n)||(this._debug(e,`refresh failed with a non-retryable error, removing the session`,n),await this._removeSession())))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new ao;if(this.refreshingDeferred)return this.refreshingDeferred.promise;let r=`#_callRefreshToken()`;this._debug(r,`begin`);try{this.refreshingDeferred=new Uo;let t=await Vo(this.storage,this.storageKey),{data:n,error:i}=await this._refreshAccessToken(e);if(i)throw i;if(!n.session)throw new ao;let a=await Vo(this.storage,this.storageKey);if(t!==null&&(a===null||a.refresh_token!==t.refresh_token)){this._debug(r,`commit guard: storage changed since refresh started, discarding rotated tokens`,{startedWith:`present`,nowHolds:a?`replaced`:`cleared`});let e={data:null,error:new go};return this.refreshingDeferred.resolve(e),e}let o=this._sessionRemovalEpoch;if(await this._saveSession(n.session),this._sessionRemovalEpoch!==o){this._debug(r,`commit guard (post-save): _removeSession ran during _saveSession, undoing write`),await Ho(this.storage,this.storageKey),this.userStorage&&await Ho(this.userStorage,this.storageKey+`-user`);let e={data:null,error:new go};return this.refreshingDeferred.resolve(e),e}await this._notifyAllSubscribers(`TOKEN_REFRESHED`,n.session);let s={data:n.session,error:null};return this.refreshingDeferred.resolve(s),s}catch(e){if(this._debug(r,`error`,e),J(e)){let n={data:null,error:e};return ho(e)||await this._removeSession(),(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(e),e}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0,await Ho(this.storage,`${this.storageKey}-code-verifier`);let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Bo(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=ss(e);await Bo(this.storage,this.storageKey,r)}else{let e=ss(t);await Bo(this.storage,this.storageKey,e)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug(`#_removeSession()`),this.suppressGetSessionWarning=!1,await Ho(this.storage,this.storageKey),await Ho(this.storage,this.storageKey+`-code-verifier`),await Ho(this.storage,this.storageKey+`-user`),this.userStorage&&await Ho(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Po()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),Ka);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)==null||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug(`#_autoRefreshTokenTick()`,`begin`),this.lock!=null){try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Ka);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Ka}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof Cs)this._debug(`auto refresh token tick lock not available`);else throw e}return}if(this.refreshingDeferred!==null){this._debug(`#_autoRefreshTokenTick()`,`refresh already in flight, skipping`);return}try{let e=Date.now();try{await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Ka);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Ka}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!Po()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;if(this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()});else{if(document.visibilityState!==`visible`){this._debug(t,`visibilityState is no longer visible, skipping recovery`);return}await this._recoverAndRefresh()}}else document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType===`pkce`){let[e,t]=await Zo(this.storage,this.storageKey),n=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(t)}`});r.push(n.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);r.push(e.toString())}return n?.skipBrowserRedirect&&r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${r.join(`&`)}`}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await Y(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await Y(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?Is(e.webauthn.credential_response):Ls(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await Y(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challenge(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await Y(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Ps(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Fs(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=Wo(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=Wo(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await Y(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new ao})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new ao});let a=await Y(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&Po()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new ao});let a=await Y(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&Po()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await Y(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new ao})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await Y(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new ao})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await Y(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=Wo(n);if(!t?.allowExpired)try{es(i.exp)}catch(e){throw new yo(e instanceof Error?e.message:`JWT validation failed`)}let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=ts(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,Ao(`${o}.${s}`)))throw new yo(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){is(this.experimental);try{if(!zs())return this._returnResult({data:null,error:new ro(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Vs({publicKey:Fs(t.options),signal:e?.options?.signal??Ns.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new ro(`WebAuthn ceremony failed`,null)});let a=Ls(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){is(this.experimental);try{if(!zs())return this._returnResult({data:null,error:new ro(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Bs({publicKey:Ps(t.options),signal:e?.options?.signal??Ns.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new ro(`WebAuthn ceremony failed`,null)});let a=Is(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){is(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new ao});let{data:r,error:i}=await Y(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){is(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new ao});let{data:i,error:a}=await Y(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){is(this.experimental);try{let{data:t,error:n}=await Y(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){is(this.experimental);try{let{data:t,error:n}=await Y(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:ps});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){is(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new ao});let{data:r,error:i}=await Y(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){is(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new ao});let{data:i,error:a}=await Y(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){is(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new ao});let{error:i}=await Y(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(J(e))return this._returnResult({data:null,error:e});throw e}}};Xs.nextInstanceID={};var Zs=Xs,Qs=`modulepreload`,$s=function(e){return`/`+e},ec={},tc=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=$s(t,n),t in ec)return;ec[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Qs,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},nc=`2.108.1`,rc=``,ic;typeof Deno<`u`?(rc=`deno`,ic=Deno.version?.deno):typeof document<`u`?rc=`web`:typeof navigator<`u`&&navigator.product===`ReactNative`?rc=`react-native`:(rc=`node`,ic=typeof process<`u`?process.version?.replace(/^v/,``):void 0);var ac=[`runtime=${rc}`];ic&&ac.push(`runtime-version=${ic}`);var oc={headers:{"X-Client-Info":`supabase-js/${nc}; ${ac.join(`; `)}`}},sc={schema:`public`},cc={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},lc={},uc={enabled:!1,respectSamplingDecision:!0};function dc(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var fc=null,pc=`@opentelemetry/api`;function mc(){return fc===null&&(fc=tc(()=>import(pc),[]).catch(()=>null)),fc}function hc(){return dc(this,void 0,void 0,function*(){try{let e=yield mc();if(!e||!e.propagation||!e.context)return null;let t={};e.propagation.inject(e.context.active(),t);let n=t.traceparent;return n?{traceparent:n,tracestate:t.tracestate,baggage:t.baggage}:null}catch{return null}})}function gc(e){if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==4)return null;let[n,r,i,a]=t;if(n.length!==2||r.length!==32||i.length!==16||a.length!==2)return null;let o=/^[0-9a-f]+$/i;return!o.test(n)||!o.test(r)||!o.test(i)||!o.test(a)||r===`00000000000000000000000000000000`||i===`0000000000000000`?null:{version:n,traceId:r,parentId:i,traceFlags:a,isSampled:(parseInt(a,16)&1)==1}}function _c(e,t){if(!e||!t||t.length===0)return!1;let n;if(e instanceof URL)n=e;else try{n=new URL(e)}catch{return!1}for(let e of t)try{if(typeof e==`string`){if(vc(n.hostname,e))return!0}else if(e instanceof RegExp){if(e.test(n.hostname))return!0}else if(typeof e==`function`&&e(n))return!0}catch{continue}return!1}function vc(e,t){if(t===e)return!0;if(t.startsWith(`*.`)){let n=t.slice(2);if(e.endsWith(n)&&(e===n||e.endsWith(`.`+n)))return!0}return!1}function yc(e){let t=[];try{let n=new URL(e);t.push(n.hostname)}catch{}return t.push(`*.supabase.co`,`*.supabase.in`),t.push(`localhost`,`127.0.0.1`,`[::1]`),t}function bc(e){"@babel/helpers - typeof";return bc=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},bc(e)}function xc(e,t){if(bc(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(bc(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Sc(e){var t=xc(e,`string`);return bc(t)==`symbol`?t:t+``}function Cc(e,t,n){return(t=Sc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?wc(Object(n),!0).forEach(function(t){Cc(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wc(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Tc=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),Ec=()=>Headers,Dc=(e,t,n,r,i)=>{let a=Tc(r),o=Ec(),s=i?.enabled===!0,c=i?.respectSamplingDecision!==!1,l=s?yc(t):null;return async(t,r)=>{let i=await n()??e,s=new o(r?.headers);if(s.has(`apikey`)||s.set(`apikey`,e),s.has(`Authorization`)||s.set(`Authorization`,`Bearer ${i}`),l){let e=await Oc(t,l,c);e&&(e.traceparent&&!s.has(`traceparent`)&&s.set(`traceparent`,e.traceparent),e.tracestate&&!s.has(`tracestate`)&&s.set(`tracestate`,e.tracestate),e.baggage&&!s.has(`baggage`)&&s.set(`baggage`,e.baggage))}return a(t,X(X({},r),{},{headers:s}))}};async function Oc(e,t,n){if(!_c(typeof e==`string`||e instanceof URL?e:e.url,t))return null;let r=await hc();if(!r||!r.traceparent)return null;if(n){let e=gc(r.traceparent);if(e&&!e.isSampled)return null}return r}function kc(e){return typeof e==`boolean`?{enabled:e}:e}function Ac(e){return e.endsWith(`/`)?e:e+`/`}function jc(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u=kc(e.tracePropagation),d=kc(t.tracePropagation),f={db:X(X({},o),n),auth:X(X({},s),r),realtime:X(X({},c),i),storage:{},global:X(X(X({},l),a),{},{headers:X(X({},l?.headers??{}),a?.headers??{})}),tracePropagation:{enabled:u?.enabled??d?.enabled??!1,respectSamplingDecision:u?.respectSamplingDecision??d?.respectSamplingDecision??!0},accessToken:async()=>``};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function Mc(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(Ac(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var Nc=class extends Zs{constructor(e){super(e)}},Pc=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=Mc(e);if(!t)throw Error(`supabaseKey is required.`);this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:sc,realtime:lc,auth:X(X({},cc),{},{storageKey:i}),global:oc,tracePropagation:uc},o=jc(n??{},a);this.settings=o,this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=Dc(t,e,this._getAccessToken.bind(this),o.global.fetch,o.tracePropagation),this.realtime=this._initRealtimeClient(X({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new Fr(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit}),this.storage=new Wa(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new gr(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Nc({url:this.authUrl.href,headers:X(X({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new Gi(this.realtimeUrl.href,X(X({},e),{},{params:X(X({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Fc=(e,t,n)=>new Pc(e,t,n);function Ic(){if(typeof window<`u`)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=18:!1}Ic()&&console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217`);var Lc=`https://wahwdszfywobmyyuyihu.supabase.co`,Rc=`sb_publishable_ukJVlh6J3LcDiG5774YU7g_KGjiuB9P`,zc=null;function Bc(){return!!Rc}function Vc(){return Bc()?(zc||=Fc(Lc,Rc),zc):null}function Hc(e,t,n=`#ffffff`,r=640,i=360){let a=`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${i}" viewBox="0 0 ${r} ${i}"><rect width="100%" height="100%" fill="${t}"/><text x="50%" y="50%" fill="${n}" font-family="Arial, sans-serif" font-size="${Math.round(i/9)}" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${e}</text></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}var Uc={display_name:`Demo Publisher`,avatar_url:Hc(`DP`,`#ff8c00`,`#fff`,96,96)},Wc=[{id:`mock-1`,owner_id:`demo-user`,slug:`comet-particles-pro`,name:`Comet Particles Pro`,summary:`Advanced particle system presets: fire, smoke, magic, rain and 40+ ready-to-use effects.`,description_md:`# Comet Particles Pro

A collection of **40+ production-ready particle effects** for Comet Engine.

## Features

- Fire, smoke, explosions and sparks
- Weather: rain, snow, fog
- Magic and sci-fi effects
- Fully tweakable from the editor

## Usage

Extract the zip into your project's \`RuntimeAssets\` folder and load any effect with \`LoadResource\`.

> This is **demo data** — connect Supabase to see real packages.`,category:`Tools`,tags:[`particles`,`vfx`,`effects`],license:`MIT`,homepage_url:`https://www.cometengine.org`,repo_url:`https://github.com/OriolCS2/CometEngine`,min_engine_version:`2.1`,icon_url:Hc(`PP`,`#e25822`,`#fff`,128,128),screenshots:[Hc(`Fire FX`,`#7a2410`),Hc(`Rain FX`,`#1e3a5f`),Hc(`Magic FX`,`#4a1e5f`)],status:`published`,latest_version:`2.1.0`,download_count:12473,created_at:`2026-01-12T10:00:00Z`,updated_at:`2026-05-28T16:30:00Z`,profiles:Uc},{id:`mock-2`,owner_id:`demo-user`,slug:`pixel-ui-kit`,name:`Pixel UI Kit`,summary:`Complete retro pixel-art UI pack: buttons, panels, health bars, icons and 9-slice frames.`,description_md:`# Pixel UI Kit

Everything you need to build a **retro game UI**: buttons, sliders, panels, inventory frames and 200+ icons.

- 16x16 and 32x32 variants
- 9-slice ready frames
- Light and dark themes`,category:`UI`,tags:[`ui`,`pixel-art`,`2d`],license:`CC0-1.0`,homepage_url:``,repo_url:``,min_engine_version:`2.0`,icon_url:Hc(`UI`,`#2a7a4b`,`#fff`,128,128),screenshots:[Hc(`UI Pack`,`#1d4d31`),Hc(`Icons`,`#28543c`)],status:`published`,latest_version:`1.3.2`,download_count:8231,created_at:`2026-02-02T09:00:00Z`,updated_at:`2026-04-15T11:00:00Z`,profiles:Uc},{id:`mock-3`,owner_id:`demo-user-2`,slug:`chiptune-audio-pack`,name:`Chiptune Audio Pack`,summary:`80 looping chiptune music tracks and 150 retro SFX, ready to drop into any Comet project.`,description_md:`# Chiptune Audio Pack

80 looping tracks + 150 SFX in OGG format.

## Contents

- Battle, exploration and menu themes
- Jump, coin, hit, explosion SFX
- All loops seamless`,category:`Audio`,tags:[`music`,`sfx`,`chiptune`],license:`CC0-1.0`,homepage_url:``,repo_url:``,min_engine_version:`2.0`,icon_url:Hc(`♪`,`#5f4ae2`,`#fff`,128,128),screenshots:[Hc(`Audio Pack`,`#2e2470`)],status:`published`,latest_version:`1.0.1`,download_count:4502,created_at:`2026-03-20T18:00:00Z`,updated_at:`2026-03-25T18:00:00Z`,profiles:{display_name:`Retro Sounds`,avatar_url:Hc(`RS`,`#5f4ae2`,`#fff`,96,96)}},{id:`mock-4`,owner_id:`demo-user`,slug:`platformer-template`,name:`Platformer Template`,summary:`Full platformer starter project: player controller, enemies, checkpoints, camera and levels.`,description_md:`# Platformer Template

A complete starter project to kickstart your platformer:

- Smooth player controller (coyote time, jump buffering)
- Patrolling and flying enemies
- Checkpoints and level transitions
- Camera follow with look-ahead`,category:`Templates`,tags:[`template`,`platformer`,`starter`],license:`MIT`,homepage_url:``,repo_url:``,min_engine_version:`2.1`,icon_url:Hc(`PT`,`#c2274b`,`#fff`,128,128),screenshots:[Hc(`Level 1`,`#5f1426`),Hc(`Editor view`,`#46101d`)],status:`published`,latest_version:`1.1.0`,download_count:6817,created_at:`2026-04-01T12:00:00Z`,updated_at:`2026-06-01T09:00:00Z`,profiles:Uc}],Gc={"mock-1":[{id:`mv-1-3`,package_id:`mock-1`,version:`2.1.0`,zip_path:`#`,zip_size:182e5,download_count:3120,created_at:`2026-05-28T16:30:00Z`,changelog_md:`## 2.1.0

- **New:** 8 sci-fi effects (lasers, warp, shields)
- Improved smoke performance by 30%
- Fixed flickering on the rain preset`},{id:`mv-1-2`,package_id:`mock-1`,version:`2.0.0`,zip_path:`#`,zip_size:161e5,download_count:6200,created_at:`2026-03-10T10:00:00Z`,changelog_md:`## 2.0.0

- Reworked all presets for Comet Engine 2.1
- **Breaking:** renamed effect files to kebab-case`},{id:`mv-1-1`,package_id:`mock-1`,version:`1.0.0`,zip_path:`#`,zip_size:94e5,download_count:3153,created_at:`2026-01-12T10:00:00Z`,changelog_md:`## 1.0.0

Initial release with 25 effects.`}],"mock-2":[{id:`mv-2-2`,package_id:`mock-2`,version:`1.3.2`,zip_path:`#`,zip_size:52e5,download_count:4100,created_at:`2026-04-15T11:00:00Z`,changelog_md:`## 1.3.2

- Fixed transparent pixels on dark theme panels
- Added 12 new inventory icons`},{id:`mv-2-1`,package_id:`mock-2`,version:`1.0.0`,zip_path:`#`,zip_size:41e5,download_count:4131,created_at:`2026-02-02T09:00:00Z`,changelog_md:`## 1.0.0

Initial release.`}],"mock-3":[{id:`mv-3-2`,package_id:`mock-3`,version:`1.0.1`,zip_path:`#`,zip_size:228e5,download_count:2300,created_at:`2026-03-25T18:00:00Z`,changelog_md:`## 1.0.1

- Fixed loop point on "Cave Theme"
- Normalized SFX volume`},{id:`mv-3-1`,package_id:`mock-3`,version:`1.0.0`,zip_path:`#`,zip_size:227e5,download_count:2202,created_at:`2026-03-20T18:00:00Z`,changelog_md:`## 1.0.0

Initial release.`}],"mock-4":[{id:`mv-4-2`,package_id:`mock-4`,version:`1.1.0`,zip_path:`#`,zip_size:125e5,download_count:3400,created_at:`2026-06-01T09:00:00Z`,changelog_md:`## 1.1.0

- Added flying enemy type
- Camera look-ahead is now configurable
- Fixed double-jump triggering on slopes`},{id:`mv-4-1`,package_id:`mock-4`,version:`1.0.0`,zip_path:`#`,zip_size:119e5,download_count:3417,created_at:`2026-04-01T12:00:00Z`,changelog_md:`## 1.0.0

Initial release.`}]};function Z(e){return e==null?``:String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Kc(e){if(!e)return``;try{return Kn.sanitize(U.parse(e.trim(),{gfm:!0,breaks:!0}))}catch(t){return console.error(`Markdown parsing error:`,t),Z(e).replace(/\n/g,`<br>`)}}function qc(e){return!e&&e!==0?`—`:e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}function Jc(e){return e||=0,e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function Yc(e){return e?new Date(e).toLocaleDateString():`—`}function Xc(e,t){let[n,r]=String(e).split(`-`),[i,a]=String(t).split(`-`),o=n.split(`.`).map(Number),s=i.split(`.`).map(Number);for(let e=0;e<3;e++)if((o[e]||0)!==(s[e]||0))return(o[e]||0)-(s[e]||0);return r&&!a?-1:!r&&a?1:r&&a?r<a?-1:+(r>a):0}function Q(e,t=`info`){let n=document.getElementById(`toast-container`);n||(n=document.createElement(`div`),n.id=`toast-container`,n.className=`toast-container`,document.body.appendChild(n));let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.innerHTML=`<i class="fas ${t===`error`?`fa-circle-exclamation`:t===`success`?`fa-circle-check`:`fa-circle-info`}"></i><span>${Z(e)}</span>`,n.appendChild(r),setTimeout(()=>{r.classList.add(`toast-out`),setTimeout(()=>r.remove(),400)},t===`error`?6e3:3500)}function Zc(e){let t=document.createElement(`div`);t.className=`mp-lightbox`,t.innerHTML=`<img src="${Z(e)}" alt="Screenshot">`,t.addEventListener(`click`,()=>t.remove()),document.addEventListener(`keydown`,function e(n){n.key===`Escape`&&(t.remove(),document.removeEventListener(`keydown`,e))}),document.body.appendChild(t)}var Qc=4*1024*1024,$c=[`Tools`,`Scripts`,`2D Art`,`UI`,`Audio`,`Shaders & Materials`,`Templates`,`Integration`,`Other`],el=`package-zips`,tl=`package-media`;function nl(){return Bc()}function rl(){let e=Vc();if(!e)throw Error(`The marketplace backend is not configured yet. See MARKETPLACE_SETUP.md.`);return e}async function il(){let e=Vc();if(!e)return null;let{data:t}=await e.auth.getSession();return t?.session?.user||null}function al(e){let t=Vc();if(!t)return e(null),()=>{};il().then(e);let{data:n}=t.auth.onAuthStateChange((t,n)=>{e(n?.user||null)});return()=>n.subscription.unsubscribe()}async function ol(){let{error:e}=await rl().auth.signInWithOAuth({provider:`google`,options:{redirectTo:window.location.origin+window.location.pathname}});if(e)throw e}async function sl(){await rl().auth.signOut()}var cl=null,ll=null;async function ul(){let e=Vc();if(!e)return null;let t=await il();if(!t)return cl=null,ll=null,null;if(cl&&ll===t.id)return cl;let{data:n}=await e.from(`profiles`).select(`*`).eq(`id`,t.id).maybeSingle();return cl=n,ll=t.id,n}async function dl(){return!!(await ul())?.is_admin}async function fl(e){let t=Vc();if(!t||!e)return;let n=e.user_metadata||{};await t.from(`profiles`).upsert({id:e.id,display_name:n.full_name||n.name||e.email||`Anonymous`,avatar_url:n.avatar_url||null},{onConflict:`id`,ignoreDuplicates:!0})}var pl=`*, profiles:owner_id (display_name, avatar_url)`;async function ml({search:e=``,category:t=``,sort:n=`newest`,ownerId:r=null,packageType:i=``,limit:a=0,offset:o=0}={}){let s=Vc();if(!s){let s=Wc.slice();if(r&&(s=s.filter(e=>e.owner_id===r)),t&&(s=s.filter(e=>e.category===t)),i&&(s=s.filter(e=>(e.package_type||`package`)===i)),e){let t=e.toLowerCase();s=s.filter(e=>e.name.toLowerCase().includes(t)||e.summary.toLowerCase().includes(t)||e.tags.some(e=>e.toLowerCase().includes(t)))}return s=vl(s,n),a>0?s.slice(o,o+a):s}let c=c=>{let l=s.from(`packages`).select(pl).eq(`status`,`published`);if(r&&(l=l.eq(`owner_id`,r)),t&&(l=l.eq(`category`,t)),i&&(l=l.eq(`package_type`,i)),e){let t=e.replace(/[%,()]/g,` `).trim();t&&(l=c?l.textSearch(`fts`,t,{type:`websearch`,config:`simple`}):l.or(`name.ilike.%${t}%,summary.ilike.%${t}%,slug.ilike.%${t}%`))}return l=n===`downloads`?l.order(`download_count`,{ascending:!1}):n===`updated`?l.order(`updated_at`,{ascending:!1}):n===`name`?l.order(`name`,{ascending:!0}):l.order(`created_at`,{ascending:!1}),a>0&&(l=l.range(o,o+a-1)),l};if(e){let{data:e,error:t}=await c(!0);if(!t)return e||[]}let{data:l,error:u}=await c(!1);if(u)throw u;return l||[]}async function hl(e=6){let t=Vc();if(!t)return[];let{data:n,error:r}=await t.from(`packages`).select(pl).eq(`status`,`published`).eq(`featured`,!0).order(`download_count`,{ascending:!1}).limit(e);return r?[]:n||[]}async function gl(e){let t=Vc();if(!t)return[];let{data:n,error:r}=await t.rpc(`packages_depending_on`,{dep_slug:e});return r?[]:n||[]}async function _l(e,t){let{error:n}=await rl().from(`profiles`).update({bio:t}).eq(`id`,e);if(n)throw n}function vl(e,t){let n=e.slice();return t===`downloads`?n.sort((e,t)=>t.download_count-e.download_count):t===`updated`?n.sort((e,t)=>new Date(t.updated_at)-new Date(e.updated_at)):t===`name`?n.sort((e,t)=>e.name.localeCompare(t.name)):n.sort((e,t)=>new Date(t.created_at)-new Date(e.created_at)),n}async function yl(){let{data:e,error:t}=await rl().from(`packages`).select(pl).order(`updated_at`,{ascending:!1});if(t)throw t;return e||[]}async function bl(e){let{data:t,error:n}=await rl().from(`packages`).select(pl).eq(`owner_id`,e).order(`updated_at`,{ascending:!1});if(n)throw n;return t||[]}async function xl(e){let t=Vc();if(!t)return Wc.find(t=>t.slug===e)||null;let{data:n,error:r}=await t.from(`packages`).select(pl).eq(`slug`,e).maybeSingle();if(r)throw r;return n}async function Sl(e){let t=Vc();if(!t)return Wc.find(t=>t.id===e)||null;let{data:n,error:r}=await t.from(`packages`).select(pl).eq(`id`,e).maybeSingle();if(r)throw r;return n}async function Cl(e){let t=Vc(),n;if(!t)n=(Gc[e]||[]).slice();else{let{data:r,error:i}=await t.from(`package_versions`).select(`*`).eq(`package_id`,e);if(i)throw i;n=r||[]}return n.sort((e,t)=>Xc(t.version,e.version)),n}async function wl(e){let t=Vc();if(!t){let t=Wc.find(t=>t.owner_id===e);return t?{id:e,...t.profiles}:null}let{data:n,error:r}=await t.from(`profiles`).select(`*`).eq(`id`,e).maybeSingle();if(r)throw r;return n}function Tl(e){let t=Vc();return!t||e===`#`?null:t.storage.from(el).getPublicUrl(e).data.publicUrl}async function El(e){let t=Vc();if(!t||e.length===0)return new Set;let{data:n,error:r}=await t.from(`packages`).select(`slug`).in(`slug`,e).eq(`status`,`published`);if(r)throw r;return new Set((n||[]).map(e=>e.slug))}async function Dl(e,t=30){let n=Vc();if(!n)return[];let r=new Date;r.setDate(r.getDate()-t);let{data:i,error:a}=await n.from(`package_downloads_daily`).select(`day, downloads`).eq(`package_id`,e).gte(`day`,r.toISOString().slice(0,10)).order(`day`,{ascending:!0});return a?[]:i||[]}async function Ol(e,t){let n=Vc();if(n)try{await n.rpc(`increment_download`,{p_package:e,p_version:t})}catch(e){console.warn(`Could not record download:`,e)}}function kl(e){if(!e)throw Error(`Please select a package file.`);if(!/\.(zip|cometpkg)$/i.test(e.name))throw Error(`The package file must be a .cometpkg (or .zip) archive.`);if(e.size>26214400)throw Error(`Maximum archive size is 25 MB.`)}function Al(e,t){if(!/\.(png|jpe?g|webp|gif)$/i.test(e.name))throw Error(`${t} must be a PNG, JPG, WebP or GIF image.`);if(e.size>4194304)throw Error(`${t} is too big (max ${Qc/1024/1024} MB per image).`)}async function jl(e,t,n){let r=rl(),{error:i}=await r.storage.from(e).upload(t,n,{upsert:!0,contentType:n.type||`application/octet-stream`,cacheControl:`3600`});if(i)throw Error(`Upload failed (${n.name}): ${i.message}`);return{path:t,publicUrl:r.storage.from(e).getPublicUrl(t).data.publicUrl}}function Ml(e){return e.replace(/[^A-Za-z0-9._-]+/g,`_`)}async function Nl(e,t){let n=rl();kl(t.zipFile);let r=crypto.randomUUID(),i=`${e.id}/${r}`,a=null;t.iconFile&&(Al(t.iconFile,`Icon`),a=(await jl(tl,`${i}/icon-${Ml(t.iconFile.name)}`,t.iconFile)).publicUrl);let o=[];for(let e=0;e<(t.screenshotFiles||[]).length;e++){let n=t.screenshotFiles[e];Al(n,`Screenshot ${e+1}`),o.push((await jl(tl,`${i}/shots/${e}-${Ml(n.name)}`,n)).publicUrl)}let s=`${i}/${t.version}/${t.slug}-${t.version}.zip`;await jl(el,s,t.zipFile);let{error:c}=await n.from(`packages`).insert({id:r,owner_id:e.id,slug:t.slug,name:t.name,summary:t.summary,description_md:t.descriptionMd,readme_md:t.readmeMd||null,category:t.category,tags:t.tags,license:t.license,homepage_url:t.homepageUrl||null,repo_url:t.repoUrl||null,min_engine_version:t.minEngineVersion||null,package_type:t.packageType||`package`,icon_url:a,screenshots:o,status:t.status||`published`,latest_version:t.version});if(c)throw c.code===`23505`?Error(`The URL id "${t.slug}" is already taken — pick another one.`):c;let{error:l}=await n.from(`package_versions`).insert({package_id:r,version:t.version,changelog_md:t.changelogMd,zip_path:s,zip_size:t.zipFile.size,dependencies:t.dependencies||{},min_engine_version:t.minEngineVersion||null,sha256:t.sha256||null,manifest:t.manifest||null,samples:t.samples||[]});if(l)throw await n.from(`packages`).delete().eq(`id`,r),l;return r}async function Pl(e,t,n,{iconFile:r=null,screenshotFiles:i=[],removeIcon:a=!1,newScreenshots:o=null}={}){let s=rl(),c=`${e.id}/${t.id}`,l={...n,updated_at:new Date().toISOString()};if(a?l.icon_url=null:r&&(Al(r,`Icon`),l.icon_url=(await jl(tl,`${c}/icon-${Ml(r.name)}`,r)).publicUrl),o!==null){let e=[];for(let t=0;t<o.length;t++){let n=o[t];typeof n==`string`?e.push(n):(Al(n,`Screenshot ${t+1}`),e.push((await jl(tl,`${c}/shots/${Date.now()}-${Ml(n.name)}`,n)).publicUrl))}l.screenshots=e}else if(i.length>0){let e=[];for(let t=0;t<i.length;t++)Al(i[t],`Screenshot ${t+1}`),e.push((await jl(tl,`${c}/shots/${t}-${Ml(i[t].name)}`,i[t])).publicUrl);l.screenshots=e}let{error:u}=await s.from(`packages`).update(l).eq(`id`,t.id);if(u)throw u}async function Fl(e,t,{version:n,changelogMd:r,zipFile:i,dependencies:a,minEngineVersion:o,sha256:s,manifest:c,samples:l,packageUpdates:u}){let d=rl();kl(i);let f=`${e.id}/${t.id}/${n}/${t.slug}-${n}.zip`;await jl(el,f,i);let{error:p}=await d.from(`package_versions`).insert({package_id:t.id,version:n,changelog_md:r,zip_path:f,zip_size:i.size,dependencies:a||{},min_engine_version:o||null,sha256:s||null,manifest:c||null,samples:l||[]});if(p)throw p.code===`23505`?Error(`Version ${n} already exists for this package.`):p;let{error:m}=await d.from(`packages`).update({latest_version:n,updated_at:new Date().toISOString(),...u||{}}).eq(`id`,t.id);if(m)throw m}async function Il(e,t,n){let{error:r}=await rl().from(`package_versions`).update({deprecated:t,deprecated_message:t&&n||null}).eq(`id`,e);if(r)throw r}async function Ll(e,t,n){let{error:r}=await rl().from(`packages`).update({deprecated:t,deprecated_message:t&&n||null,updated_at:new Date().toISOString()}).eq(`id`,e);if(r)throw r}async function Rl(e,t){let{error:n}=await rl().from(`packages`).update({featured:t}).eq(`id`,e);if(n)throw n}async function zl(e,t){let{error:n}=await rl().from(`packages`).update({status:t}).eq(`id`,e);if(n)throw n}async function Bl(e){let t=rl();for(let n of[el,tl])try{let r=await Vl(t,n,`${e.owner_id}/${e.id}`);r.length>0&&await t.storage.from(n).remove(r)}catch(e){console.warn(`Storage cleanup failed:`,e)}let{error:n}=await t.from(`packages`).delete().eq(`id`,e.id);if(n)throw n}async function Vl(e,t,n){let r=[],{data:i}=await e.storage.from(t).list(n,{limit:100});for(let a of i||[])a.id?r.push(`${n}/${a.name}`):r.push(...await Vl(e,t,`${n}/${a.name}`));return r}var Hl=/^[a-z0-9]+(-[a-z0-9]+)*$/,Ul=`package.cometPackage`;function Wl(e){let t=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z.-]+)?$/.exec(String(e||``));return t?{major:Number(t[1]),minor:Number(t[2]),patch:Number(t[3]),prerelease:t[4]?t[4].split(`.`):[]}:null}function Gl(e,t){let n=Wl(e),r=Wl(t);if(!n||!r)return String(e).localeCompare(String(t));for(let e of[`major`,`minor`,`patch`])if(n[e]!==r[e])return n[e]-r[e];if(n.prerelease.length===0&&r.prerelease.length===0)return 0;if(n.prerelease.length===0)return 1;if(r.prerelease.length===0)return-1;let i=Math.max(n.prerelease.length,r.prerelease.length);for(let e=0;e<i;e++){let t=n.prerelease[e],i=r.prerelease[e];if(t===void 0)return-1;if(i===void 0)return 1;let a=/^\d+$/.test(t),o=/^\d+$/.test(i);if(a&&o){if(Number(t)!==Number(i))return Number(t)-Number(i)}else if(a!==o)return a?-1:1;else if(t!==i)return t<i?-1:1}return 0}function Kl(e){let t=Wl(e);return t?t.major===0||t.prerelease.some(e=>e.toLowerCase().startsWith(`exp`))?`exp`:t.prerelease.length>0?`pre`:`release`:`release`}function ql(e){let t=String(e||``).trim();if(!t)return!1;let n=t.replace(/^(\^|~|>=|=)/,``),r=/^(\^|~|>=|=)?/.exec(t)[1]||``;return r===``||r===`=`?Wl(n)!==null:/^(0|[1-9]\d*)(\.(0|[1-9]\d*)(\.(0|[1-9]\d*))?)?(-[0-9A-Za-z.-]+)?$/.test(n)}function Jl(e){let t=``,n=!1;for(let r=0;r<e.length;r++){let i=e[r];if(n){t+=i,i===`\\`&&r+1<e.length?t+=e[++r]:i===`"`&&(n=!1);continue}if(i===`"`){n=!0,t+=i;continue}if(i===`/`&&e[r+1]===`/`){for(;r<e.length&&e[r]!==`
`;)r++;t+=`
`;continue}t+=i}return t}function Yl(e){return typeof e!=`string`||!e||e.includes(`\\`)||e.startsWith(`/`)||/^[A-Za-z]:/.test(e)?!1:e.split(`/`).every(e=>e!==``&&e!==`.`&&e!==`..`)}function Xl(e){let t=[],n=null;try{n=JSON.parse(Jl(String(e||``)))}catch(e){return{manifest:null,errors:[`The manifest is not valid JSON: ${e.message}`]}}if(!n||typeof n!=`object`||Array.isArray(n))return{manifest:null,errors:[`The manifest must be a JSON object.`]};let r=n.schemaVersion??1;(typeof r!=`number`||r>1)&&t.push(`Unsupported manifest schemaVersion (${r}); this registry understands schema 1.`);let i=String(n.slug||``);Hl.test(i)||t.push(`The "slug" must be lowercase words separated by single dashes (e.g. "acme-ui-kit").`);let a=String(n.displayName||``);(a.length<3||a.length>80)&&t.push(`The "displayName" must be 3-80 characters long.`),Wl(n.version)||t.push(`The "version" must be a strict semantic version (e.g. "1.2.3" or "1.3.0-pre.1").`);let o=n.packageType||`package`;o!==`package`&&o!==`assetPack`&&t.push(`The "packageType" must be "package" or "assetPack".`);let s=String(n.summary||``);(s.length<10||s.length>160)&&t.push(`The "summary" must be 10-160 characters long.`);let c=n.dependencies||{};if(typeof c!=`object`||Array.isArray(c))t.push(`The "dependencies" must be an object of {"slug": "range"}.`);else for(let[e,n]of Object.entries(c))Hl.test(e)||t.push(`The dependency slug "${e}" is invalid.`),ql(n)||t.push(`The dependency range "${n}" of "${e}" is invalid (use "1.2.3", "^1.2.0", "~1.2" or ">=1.0").`),e===i&&t.push(`A package cannot depend on itself.`);for(let e of n.samples||[])Yl(e?.path)||t.push(`The sample path "${e?.path}" must be a safe relative path.`),e?.displayName||t.push(`Every sample needs a "displayName".`);for(let e of n.hiddenFolders||[])Yl(e)||t.push(`The hidden folder "${e}" must be a safe relative path.`);return n.minEngineVersion&&!Wl(n.minEngineVersion)&&t.push(`The "minEngineVersion" must be a semantic version (e.g. "2.8.2").`),{manifest:n,errors:t}}function Zl(e,t){let n=String(e||``),r=[...n.matchAll(/^##\s+.*$/gm)];for(let e=0;e<r.length;e++)if(r[e][0].includes(`[${t}]`)||r[e][0].includes(` ${t} `)||r[e][0].trim().endsWith(` ${t}`)){let t=r[e].index+r[e][0].length,i=e+1<r.length?r[e+1].index:n.length;return n.slice(t,i).trim()}return``}function Ql(e){let t=Kl(e||``);return t===`pre`?`<span class="mp-badge mp-badge-accent">Pre-release</span>`:t===`exp`?`<span class="mp-badge mp-badge-dim">Experimental</span>`:``}async function $l(e,t){let n=(t||`#marketplace`).replace(/^#marketplace\/?/,``).split(`/`).filter(Boolean);n[0]===`publisher`&&n[1]?await uu(e,decodeURIComponent(n[1])):n[0]?await au(e,decodeURIComponent(n[0])):tu(e)}var eu=24,$={search:``,category:``,sort:`newest`,packageType:``,offset:0,rows:[],hasMore:!1};function tu(e){e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        ${iu()}
        <div class="mp-header">
          <h1>Marketplace</h1>
          <p>Free community add-ons for Comet Engine: tools, art, audio, templates and more. Install them straight from the editor's <strong>Package Manager</strong>.</p>
        </div>
        <div class="mp-toolbar">
          <input type="text" id="mp-search" class="search-box mp-search" placeholder="Search packages..."
                 value="${Z($.search)}">
          <div class="mp-type-toggle" id="mp-type">
            <button class="filter-btn ${$.packageType===``?`active`:``}" data-type="">All</button>
            <button class="filter-btn ${$.packageType===`package`?`active`:``}" data-type="package">Packages</button>
            <button class="filter-btn ${$.packageType===`assetPack`?`active`:``}" data-type="assetPack">Asset Packs</button>
          </div>
          <select id="mp-category" class="search-box mp-select">
            <option value="">All categories</option>
            ${$c.map(e=>`<option value="${Z(e)}" ${$.category===e?`selected`:``}>${Z(e)}</option>`).join(``)}
          </select>
          <select id="mp-sort" class="search-box mp-select">
            <option value="newest" ${$.sort===`newest`?`selected`:``}>Newest</option>
            <option value="updated" ${$.sort===`updated`?`selected`:``}>Recently updated</option>
            <option value="downloads" ${$.sort===`downloads`?`selected`:``}>Most downloaded</option>
            <option value="name" ${$.sort===`name`?`selected`:``}>Name (A-Z)</option>
          </select>
        </div>
        <div id="mp-featured"></div>
        <div id="mp-grid" class="mp-grid">
          <div class="loading">Loading packages...</div>
        </div>
        <div class="mp-load-more" id="mp-more" hidden>
          <button class="filter-btn" id="mp-more-btn"><i class="fas fa-angles-down"></i> Load more</button>
        </div>
      </div>
    </section>
  `;let t=e.querySelector(`#mp-search`),n=e.querySelector(`#mp-category`),r=e.querySelector(`#mp-sort`),i=e.querySelector(`#mp-grid`),a=e.querySelector(`#mp-featured`),o=e.querySelector(`#mp-more`),s=()=>{$.offset=0,$.rows=[],nu(i,o,a,!1)},c=null;t.addEventListener(`input`,()=>{$.search=t.value,clearTimeout(c),c=setTimeout(s,300)}),e.querySelectorAll(`#mp-type .filter-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`#mp-type .filter-btn`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),$.packageType=t.dataset.type,s()})}),n.addEventListener(`change`,()=>{$.category=n.value,s()}),r.addEventListener(`change`,()=>{$.sort=r.value,s()}),e.querySelector(`#mp-more-btn`).addEventListener(`click`,()=>{$.offset+=eu,nu(i,o,a,!0)}),nu(i,o,a,!1)}async function nu(e,t,n,r){try{let i=await ml({search:$.search,category:$.category,sort:$.sort,packageType:$.packageType,limit:eu,offset:$.offset});$.rows=r?[...$.rows,...i]:i,$.hasMore=i.length===eu,t.hidden=!$.hasMore;let a=!$.search&&!$.category&&!$.packageType;if(n&&!r&&(n.innerHTML=``,a)){let e=await hl();e.length>0&&(n.innerHTML=`
            <h2 class="mp-featured-title"><i class="fas fa-star"></i> Featured</h2>
            <div class="mp-grid mp-featured-grid">${e.map(ru).join(``)}</div>
            <h2 class="mp-featured-title">All packages</h2>
          `)}if($.rows.length===0){e.innerHTML=`
        <div class="mp-empty">
          <i class="fas fa-box-open"></i>
          <p>No packages found${$.search?` for "${Z($.search)}"`:``}.</p>
        </div>
      `;return}e.innerHTML=$.rows.map(ru).join(``)}catch(t){console.error(t),e.innerHTML=`<div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Error loading packages: ${Z(t.message)}</p></div>`}}function ru(e){let t=e.profiles?.display_name||`Unknown`;return`
    <a href="/marketplace/${encodeURIComponent(e.slug)}" class="mp-card">
      <div class="mp-card-top">
        ${e.icon_url?`<img class="mp-card-icon" src="${Z(e.icon_url)}" alt="" loading="lazy">`:`<div class="mp-card-icon mp-card-icon-fallback"><i class="fas fa-cube"></i></div>`}
        <div class="mp-card-title">
          <h3>${Z(e.name)} ${e.deprecated?`<span class="mp-badge mp-badge-warn">Deprecated</span>`:``}</h3>
          <span class="mp-card-author">by ${Z(t)}</span>
        </div>
      </div>
      <p class="mp-card-summary">${Z(e.summary)}</p>
      <div class="mp-card-footer">
        <span class="mp-badge">${Z(e.category)}</span>
        ${e.package_type===`assetPack`?`<span class="mp-badge mp-badge-green">Asset Pack</span>`:``}
        ${Ql(e.latest_version)}
        <span class="mp-card-meta">
          <span title="Downloads"><i class="fas fa-download"></i> ${Jc(e.download_count)}</span>
          <span title="Latest version"><i class="fas fa-tag"></i> ${Z(e.latest_version||`—`)}</span>
          ${e.min_engine_version?`<span title="Minimum engine version"><i class="fas fa-gear"></i> ${Z(e.min_engine_version)}+</span>`:``}
          <span title="Last updated"><i class="fas fa-clock"></i> ${Yc(e.updated_at)}</span>
        </span>
      </div>
    </a>
  `}function iu(){return nl()?``:`
    <div class="mp-demo-banner">
      <i class="fas fa-flask"></i>
      Showing <strong>demo data</strong> — the marketplace backend is not connected yet (see MARKETPLACE_SETUP.md).
    </div>
  `}async function au(e,t){e.innerHTML=`<section class="mp-section"><div class="container"><div class="loading">Loading package...</div></div></section>`;let n;try{n=await xl(t)}catch(t){return du(e,t.message)}if(!n)return du(e,`Package "${t}" was not found.`);let r=[];try{r=await Cl(n.id)}catch(e){console.error(e)}let i=r[0]||null,a=n.profiles?.display_name||`Unknown`,o=n.screenshots||[],s=o.length>0?o[0]:n.icon_url||null;Pu(`${n.name} — Comet Marketplace`,n.summary,s);let c=i?Object.entries(i.dependencies||{}):[],l=i?`${n.slug}@${Kl(i.version)===`release`?`^`:``}${i.version}`:n.slug;e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        ${iu()}
        <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
        <div id="mp-mod-bar"></div>

        ${n.deprecated?`
          <div class="mp-deprecated-banner">
            <i class="fas fa-triangle-exclamation"></i>
            <div>
              <strong>This package is deprecated.</strong>
              ${n.deprecated_message?`<div>${Z(n.deprecated_message)}</div>`:``}
              <div>Projects that already installed it keep working, but it is excluded from new installs.</div>
            </div>
          </div>
        `:``}

        <div class="mp-detail-header">
          ${n.icon_url?`<img class="mp-detail-icon" src="${Z(n.icon_url)}" alt="">`:`<div class="mp-detail-icon mp-card-icon-fallback"><i class="fas fa-cube"></i></div>`}
          <div class="mp-detail-title">
            <h1>${Z(n.name)}</h1>
            <p class="mp-detail-summary">${Z(n.summary)}</p>
            <div class="mp-detail-meta">
              <a class="mp-author-chip" href="/marketplace/publisher/${encodeURIComponent(n.owner_id)}">
                ${n.profiles?.avatar_url?`<img src="${Z(n.profiles.avatar_url)}" alt="" referrerpolicy="no-referrer">`:`<i class="fas fa-user"></i>`}
                ${Z(a)}
              </a>
              <span class="mp-badge">${Z(n.category)}</span>
              ${n.package_type===`assetPack`?`<span class="mp-badge mp-badge-green">Asset Pack</span>`:``}
              ${Ql(n.latest_version)}
              <span class="mp-meta-item"><i class="fas fa-download"></i> ${Jc(n.download_count)} downloads</span>
            </div>
          </div>
        </div>

        <div class="mp-detail-layout">
          <div class="mp-detail-main">
            ${o.length>0?`
              <div class="mp-gallery">
                <img id="mp-gallery-main" src="${Z(o[0])}" alt="Screenshot">
                ${o.length>1?`
                  <div class="mp-thumbs">
                    ${o.map((e,t)=>`<img src="${Z(e)}" data-index="${t}" class="${t===0?`active`:``}" alt="Thumbnail ${t+1}">`).join(``)}
                  </div>`:``}
              </div>`:``}

            <div class="mp-tabs">
              <button class="mp-tab-btn active" data-tab="overview">Description</button>
              <button class="mp-tab-btn" data-tab="versions">Versions <span class="mp-tab-count">${r.length}</span></button>
              <button class="mp-tab-btn" data-tab="deps">Dependencies ${c.length?`<span class="mp-tab-count">${c.length}</span>`:``}</button>
            </div>

            <div id="mp-tab-overview" class="mp-tab-panel">
              <div class="markdown-content mp-description">
                ${n.readme_md||n.description_md?Kc(n.readme_md||n.description_md):`<p style="color: var(--text-dim);">No description provided.</p>`}
              </div>
            </div>

            <div id="mp-tab-versions" class="mp-tab-panel" hidden>
              ${r.length===0?`<p style="color: var(--text-dim);">No versions published yet.</p>`:r.map((e,t)=>cu(e,t===0)).join(``)}
            </div>

            <div id="mp-tab-deps" class="mp-tab-panel" hidden>
              <h3 class="mp-deps-heading">Depends on</h3>
              ${c.length===0?`<p style="color: var(--text-dim);">The latest version has no dependencies.</p>`:`<table class="pub-deps-table"><thead><tr><th>Package</th><th>Range</th></tr></thead><tbody>
                    ${c.map(([e,t])=>`
                      <tr>
                        <td><a href="/marketplace/${encodeURIComponent(e)}">${Z(e)}</a></td>
                        <td><code>${Z(t)}</code></td>
                      </tr>`).join(``)}
                  </tbody></table>`}
              <h3 class="mp-deps-heading">Used by</h3>
              <div id="mp-used-by"><p style="color: var(--text-dim);">Loading...</p></div>
            </div>
          </div>

          <aside class="mp-detail-sidebar">
            <div class="mp-install-card">
              <div class="mp-install-title"><i class="fas fa-plug"></i> Install in Comet</div>
              <div class="mp-install-path">Package Manager → Marketplace → <strong>${Z(n.name)}</strong></div>
              <button class="filter-btn mp-copy-dep" id="mp-copy-dep" title="Copy the dependency string">
                <i class="fas fa-copy"></i> <code>${Z(l)}</code>
              </button>
            </div>

            <button class="download-btn mp-download-main" id="mp-download-latest" ${i?``:`disabled`}>
              <i class="fas fa-download"></i>
              <span>Download${i?` v${Z(i.version)}`:``}</span>
            </button>
            ${i?`<div class="mp-download-sub">${qc(i.zip_size)} · .cometpkg archive</div>`:``}

            <div class="mp-info-list">
              <div><span>Latest version</span><strong>${Z(n.latest_version||`—`)}</strong></div>
              <div><span>Last updated</span><strong>${Yc(n.updated_at)}</strong></div>
              <div><span>Published</span><strong>${Yc(n.created_at)}</strong></div>
              <div><span>License</span><strong>${Z(n.license||`—`)}</strong></div>
              <div><span>Engine version</span><strong>${n.min_engine_version?Z(n.min_engine_version)+`+`:`Any`}</strong></div>
              <div><span>Type</span><strong>${n.package_type===`assetPack`?`Asset Pack (imports into Assets/)`:`Package (read-only in Packages/)`}</strong></div>
            </div>

            ${n.homepage_url||n.repo_url?`
              <div class="mp-links">
                ${n.homepage_url?`<a href="${Z(n.homepage_url)}" target="_blank" rel="noopener noreferrer"><i class="fas fa-globe"></i> Website</a>`:``}
                ${n.repo_url?`<a href="${Z(n.repo_url)}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> Repository</a>`:``}
              </div>`:``}

            ${(n.tags||[]).length>0?`
              <div class="mp-tags">
                ${n.tags.map(e=>`<span class="mp-tag">${Z(e)}</span>`).join(``)}
              </div>`:``}

            <a class="mp-report" href="mailto:contrasnya@gmail.com?subject=${encodeURIComponent(`[Comet Marketplace] Report: ${n.slug}`)}">
              <i class="fas fa-flag"></i> Report this package
            </a>
          </aside>
        </div>
      </div>
    </section>
  `,lu(e,n,r,o),su(e,n),ou(e,n.slug)}async function ou(e,t){let n=e.querySelector(`#mp-used-by`);if(!n)return;let r=await gl(t);if(r.length===0){n.innerHTML=`<p style="color: var(--text-dim);">No published package depends on this one.</p>`;return}n.innerHTML=r.map(e=>`
    <a class="mp-used-by-row" href="/marketplace/${encodeURIComponent(e.slug)}">
      <i class="fas fa-cube"></i> ${Z(e.name)} <span class="mp-card-author">(${Z(e.slug)})</span>
    </a>
  `).join(``)}async function su(e,t){let n=e.querySelector(`#mp-mod-bar`);if(!n)return;let r=await il();if(!r)return;let i=r.id===t.owner_id,a=!i&&await dl();if(!i&&!a)return;let o=t.status===`published`;n.innerHTML=`
    <div class="mp-mod-bar ${a?`mp-mod-bar-admin`:``}">
      <span class="mp-mod-label">
        <i class="fas fa-${a?`shield-halved`:`wrench`}"></i>
        ${a?`Admin moderation`:`You own this package`}
        ${o?``:`<span class="mp-badge mp-badge-dim">Draft (hidden)</span>`}
      </span>
      <span class="mp-mod-actions">
        ${i?`
          <a class="filter-btn" href="/account/edit/${encodeURIComponent(t.id)}"><i class="fas fa-pen"></i> Edit</a>
          <a class="filter-btn" href="/account/version/${encodeURIComponent(t.id)}"><i class="fas fa-circle-up"></i> New version</a>
        `:``}
        ${a?`
          <button class="filter-btn" id="mp-mod-feature">
            ${t.featured?`<i class="fas fa-star"></i> Unfeature`:`<i class="far fa-star"></i> Feature`}
          </button>
        `:``}
        <button class="filter-btn" id="mp-mod-status">
          ${o?`<i class="fas fa-eye-slash"></i> Unpublish`:`<i class="fas fa-globe"></i> Publish`}
        </button>
        <button class="filter-btn mp-mod-delete" id="mp-mod-delete"><i class="fas fa-trash"></i> Delete</button>
      </span>
    </div>
  `;let s=n.querySelector(`#mp-mod-feature`);s&&s.addEventListener(`click`,async()=>{s.disabled=!0;try{await Rl(t.id,!t.featured),Q(t.featured?`"${t.name}" is no longer featured.`:`"${t.name}" is now featured on the store front.`,`success`),au(e,t.slug)}catch(e){s.disabled=!1,Q(`Could not change the featured flag: ${e.message}`,`error`)}}),n.querySelector(`#mp-mod-status`).addEventListener(`click`,async n=>{let r=n.currentTarget;r.disabled=!0;try{await zl(t.id,o?`draft`:`published`),Q(o?`"${t.name}" is now hidden from the marketplace.`:`"${t.name}" is now public.`,`success`),au(e,t.slug)}catch(e){r.disabled=!1,Q(`Could not change status: ${e.message}`,`error`)}}),n.querySelector(`#mp-mod-delete`).addEventListener(`click`,async e=>{let n=a?`

You are deleting it as ADMIN — it belongs to another user.`:``;if(!confirm(`Delete "${t.name}" permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.${n}`))return;let r=e.currentTarget;r.disabled=!0;try{await Bl(t),Q(`"${t.name}" was deleted.`,`success`),ct(`/marketplace`)}catch(e){r.disabled=!1,Q(`Delete failed: ${e.message}`,`error`)}})}function cu(e,t){return`
    <div class="mp-version-card ${e.deprecated?`mp-version-deprecated`:``}">
      <div class="mp-version-head">
        <div class="mp-version-title">
          <strong>${e.deprecated?`<s>v${Z(e.version)}</s>`:`v${Z(e.version)}`}</strong>
          ${t?`<span class="mp-badge mp-badge-accent">Latest</span>`:``}
          ${Ql(e.version)}
          ${e.deprecated?`<span class="mp-badge mp-badge-warn">Deprecated</span>`:``}
        </div>
        <div class="mp-version-meta">
          <span>${Yc(e.created_at)}</span>
          <span>${qc(e.zip_size)}</span>
          ${e.min_engine_version?`<span title="Minimum engine version"><i class="fas fa-gear"></i> ${Z(e.min_engine_version)}+</span>`:``}
          <span><i class="fas fa-download"></i> ${Jc(e.download_count)}</span>
          ${e.sha256?`<button class="filter-btn mp-copy-sha" data-sha="${Z(e.sha256)}" title="Copy the sha256 integrity hash"><i class="fas fa-fingerprint"></i> sha256</button>`:``}
          <button class="filter-btn mp-version-dl" data-version-id="${Z(e.id)}">
            <i class="fas fa-download"></i> Download
          </button>
        </div>
      </div>
      ${e.deprecated&&e.deprecated_message?`<div class="mp-version-deprecated-msg"><i class="fas fa-triangle-exclamation"></i> ${Z(e.deprecated_message)}</div>`:``}
      <div class="markdown-content mp-changelog">
        ${e.changelog_md?Kc(e.changelog_md):`<p style="color: var(--text-dim);">No changelog provided.</p>`}
      </div>
    </div>
  `}function lu(e,t,n,r){let i=e.querySelector(`#mp-gallery-main`);i&&(i.addEventListener(`click`,()=>Zc(i.src)),e.querySelectorAll(`.mp-thumbs img`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.mp-thumbs img`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),i.src=r[Number(t.dataset.index)]})}));let a=e.querySelectorAll(`.mp-tab-btn`);a.forEach(t=>{t.addEventListener(`click`,()=>{a.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),e.querySelector(`#mp-tab-overview`).hidden=t.dataset.tab!==`overview`,e.querySelector(`#mp-tab-versions`).hidden=t.dataset.tab!==`versions`,e.querySelector(`#mp-tab-deps`).hidden=t.dataset.tab!==`deps`})});let o=e.querySelector(`#mp-copy-dep`);o&&o.addEventListener(`click`,()=>{navigator.clipboard.writeText(o.querySelector(`code`).textContent),Q(`Dependency string copied.`,`success`)}),e.querySelectorAll(`.mp-copy-sha`).forEach(e=>{e.addEventListener(`click`,()=>{navigator.clipboard.writeText(e.dataset.sha),Q(`sha256 copied.`,`success`)})});let s=e=>{let n=Tl(e.zip_path);if(!n){Q(`Downloads are disabled in demo mode (backend not connected).`,`info`);return}Ol(t.id,e.id);let r=document.createElement(`a`);r.href=n,r.download=``,document.body.appendChild(r),r.click(),r.remove()},c=e.querySelector(`#mp-download-latest`);c&&n[0]&&c.addEventListener(`click`,()=>s(n[0])),e.querySelectorAll(`.mp-version-dl`).forEach(e=>{e.addEventListener(`click`,()=>{let t=n.find(t=>String(t.id)===e.dataset.versionId);t&&s(t)})})}async function uu(e,t){e.innerHTML=`<section class="mp-section"><div class="container"><div class="loading">Loading publisher...</div></div></section>`;try{let[n,r]=await Promise.all([wl(t),ml({ownerId:t,sort:`downloads`})]),i=n?.display_name||`Unknown publisher`;e.innerHTML=`
      <section class="mp-section">
        <div class="container">
          ${iu()}
          <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
          <div class="mp-publisher-header">
            ${n?.avatar_url?`<img src="${Z(n.avatar_url)}" alt="" referrerpolicy="no-referrer">`:`<div class="mp-card-icon-fallback mp-publisher-avatar-fallback"><i class="fas fa-user"></i></div>`}
            <div>
              <h1>${Z(i)}</h1>
              <p>${r.length} package${r.length===1?``:`s`} · ${Jc(r.reduce((e,t)=>e+(t.download_count||0),0))} total downloads</p>
              ${n?.bio?`<p class="mp-publisher-bio">${Z(n.bio)}</p>`:``}
            </div>
          </div>
          <div class="mp-grid">
            ${r.length>0?r.map(ru).join(``):`<div class="mp-empty"><p>This publisher has no public packages.</p></div>`}
          </div>
        </div>
      </section>
    `}catch(t){du(e,t.message)}}function du(e,t){e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
        <div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>${Z(t)}</p></div>
      </div>
    </section>
  `}var fu=c(o(((e,t)=>{(function(n){typeof e==`object`&&t!==void 0?t.exports=n():typeof define==`function`&&define.amd?define([],n):(typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:this).JSZip=n()})(function(){return function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var c=typeof l==`function`&&l;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var u=Error(`Cannot find module '`+o+`'`);throw u.code=`MODULE_NOT_FOUND`,u}var d=n[o]={exports:{}};t[o][0].call(d.exports,function(e){var n=t[o][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[o].exports}for(var a=typeof l==`function`&&l,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){var r=e(`./utils`),i=e(`./support`),a=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=`;n.encode=function(e){for(var t,n,i,o,s,c,l,u=[],d=0,f=e.length,p=f,m=r.getTypeOf(e)!==`string`;d<e.length;)p=f-d,i=m?(t=e[d++],n=d<f?e[d++]:0,d<f?e[d++]:0):(t=e.charCodeAt(d++),n=d<f?e.charCodeAt(d++):0,d<f?e.charCodeAt(d++):0),o=t>>2,s=(3&t)<<4|n>>4,c=1<p?(15&n)<<2|i>>6:64,l=2<p?63&i:64,u.push(a.charAt(o)+a.charAt(s)+a.charAt(c)+a.charAt(l));return u.join(``)},n.decode=function(e){var t,n,r,o,s,c,l=0,u=0,d=`data:`;if(e.substr(0,d.length)===d)throw Error(`Invalid base64 input, it looks like a data url.`);var f,p=3*(e=e.replace(/[^A-Za-z0-9+/=]/g,``)).length/4;if(e.charAt(e.length-1)===a.charAt(64)&&p--,e.charAt(e.length-2)===a.charAt(64)&&p--,p%1!=0)throw Error(`Invalid base64 input, bad content length.`);for(f=i.uint8array?new Uint8Array(0|p):Array(0|p);l<e.length;)t=a.indexOf(e.charAt(l++))<<2|(o=a.indexOf(e.charAt(l++)))>>4,n=(15&o)<<4|(s=a.indexOf(e.charAt(l++)))>>2,r=(3&s)<<6|(c=a.indexOf(e.charAt(l++))),f[u++]=t,s!==64&&(f[u++]=n),c!==64&&(f[u++]=r);return f}},{"./support":30,"./utils":32}],2:[function(e,t,n){var r=e(`./external`),i=e(`./stream/DataWorker`),a=e(`./stream/Crc32Probe`),o=e(`./stream/DataLengthProbe`);function s(e,t,n,r,i){this.compressedSize=e,this.uncompressedSize=t,this.crc32=n,this.compression=r,this.compressedContent=i}s.prototype={getContentWorker:function(){var e=new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o(`data_length`)),t=this;return e.on(`end`,function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw Error(`Bug : uncompressed data size mismatch`)}),e},getCompressedWorker:function(){return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo(`compressedSize`,this.compressedSize).withStreamInfo(`uncompressedSize`,this.uncompressedSize).withStreamInfo(`crc32`,this.crc32).withStreamInfo(`compression`,this.compression)}},s.createWorkerFrom=function(e,t,n){return e.pipe(new a).pipe(new o(`uncompressedSize`)).pipe(t.compressWorker(n)).pipe(new o(`compressedSize`)).withStreamInfo(`compression`,t)},t.exports=s},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,t,n){var r=e(`./stream/GenericWorker`);n.STORE={magic:`\0\0`,compressWorker:function(){return new r(`STORE compression`)},uncompressWorker:function(){return new r(`STORE decompression`)}},n.DEFLATE=e(`./flate`)},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,t,n){var r=e(`./utils`),i=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t){return e!==void 0&&e.length?r.getTypeOf(e)===`string`?function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t.charCodeAt(s))];return-1^e}(0|t,e,e.length,0):function(e,t,n,r){var a=i,o=r+n;e^=-1;for(var s=r;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}(0|t,e,e.length,0):0}},{"./utils":32}],5:[function(e,t,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,t,n){var r=null;r=typeof Promise<`u`?Promise:e(`lie`),t.exports={Promise:r}},{lie:37}],7:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Uint32Array<`u`,i=e(`pako`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=r?`uint8array`:`array`;function c(e,t){o.call(this,`FlateWorker/`+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}n.magic=`\b\0`,a.inherits(c,o),c.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(s,e.data),!1)},c.prototype.flush=function(){o.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},c.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this._pako=null},c.prototype._createPako=function(){this._pako=new i[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}},n.compressWorker=function(e){return new c(`Deflate`,e)},n.uncompressWorker=function(){return new c(`Inflate`,{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,t,n){function r(e,t){var n,r=``;for(n=0;n<t;n++)r+=String.fromCharCode(255&e),e>>>=8;return r}function i(e,t,n,i,o,u){var d,f,p=e.file,m=e.compression,h=u!==s.utf8encode,g=a.transformTo(`string`,u(p.name)),_=a.transformTo(`string`,s.utf8encode(p.name)),v=p.comment,y=a.transformTo(`string`,u(v)),b=a.transformTo(`string`,s.utf8encode(v)),x=_.length!==p.name.length,S=b.length!==v.length,C=``,w=``,T=``,E=p.dir,D=p.date,O={crc32:0,compressedSize:0,uncompressedSize:0};t&&!n||(O.crc32=e.crc32,O.compressedSize=e.compressedSize,O.uncompressedSize=e.uncompressedSize);var k=0;t&&(k|=8),h||!x&&!S||(k|=2048);var A=0,j=0;E&&(A|=16),o===`UNIX`?(j=798,A|=function(e,t){var n=e;return e||(n=t?16893:33204),(65535&n)<<16}(p.unixPermissions,E)):(j=20,A|=function(e){return 63&(e||0)}(p.dosPermissions)),d=D.getUTCHours(),d<<=6,d|=D.getUTCMinutes(),d<<=5,d|=D.getUTCSeconds()/2,f=D.getUTCFullYear()-1980,f<<=4,f|=D.getUTCMonth()+1,f<<=5,f|=D.getUTCDate(),x&&(w=r(1,1)+r(c(g),4)+_,C+=`up`+r(w.length,2)+w),S&&(T=r(1,1)+r(c(y),4)+b,C+=`uc`+r(T.length,2)+T);var M=``;return M+=`
\0`,M+=r(k,2),M+=m.magic,M+=r(d,2),M+=r(f,2),M+=r(O.crc32,4),M+=r(O.compressedSize,4),M+=r(O.uncompressedSize,4),M+=r(g.length,2),M+=r(C.length,2),{fileRecord:l.LOCAL_FILE_HEADER+M+g+C,dirRecord:l.CENTRAL_FILE_HEADER+r(j,2)+M+r(y.length,2)+`\0\0\0\0`+r(A,4)+r(i,4)+g+C+y}}var a=e(`../utils`),o=e(`../stream/GenericWorker`),s=e(`../utf8`),c=e(`../crc32`),l=e(`../signature`);function u(e,t,n,r){o.call(this,`ZipFileWorker`),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=n,this.encodeFileName=r,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(u,o),u.prototype.push=function(e){var t=e.meta.percent||0,n=this.entriesCount,r=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,o.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:n?(t+100*(n-r-1))/n:100}}))},u.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var n=i(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:n.fileRecord,meta:{percent:0}})}else this.accumulate=!0},u.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,n=i(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(n.dirRecord),t)this.push({data:function(e){return l.DATA_DESCRIPTOR+r(e.crc32,4)+r(e.compressedSize,4)+r(e.uncompressedSize,4)}(e),meta:{percent:100}});else for(this.push({data:n.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},u.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var n=this.bytesWritten-e,i=function(e,t,n,i,o){var s=a.transformTo(`string`,o(i));return l.CENTRAL_DIRECTORY_END+`\0\0\0\0`+r(e,2)+r(e,2)+r(t,4)+r(n,4)+r(s.length,2)+s}(this.dirRecords.length,n,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})},u.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},u.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on(`error`,function(e){t.error(e)}),this},u.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},u.prototype.error=function(e){var t=this._sources;if(!o.prototype.error.call(this,e))return!1;for(var n=0;n<t.length;n++)try{t[n].error(e)}catch{}return!0},u.prototype.lock=function(){o.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()},t.exports=u},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,t,n){var r=e(`../compressions`),i=e(`./ZipFileWorker`);n.generateWorker=function(e,t,n){var a=new i(t.streamFiles,n,t.platform,t.encodeFileName),o=0;try{e.forEach(function(e,n){o++;var i=function(e,t){var n=e||t,i=r[n];if(!i)throw Error(n+` is not a valid compression method !`);return i}(n.options.compression,t.compression),s=n.options.compressionOptions||t.compressionOptions||{},c=n.dir,l=n.date;n._compressWorker(i,s).withStreamInfo(`file`,{name:e,dir:c,date:l,comment:n.comment||``,unixPermissions:n.unixPermissions,dosPermissions:n.dosPermissions}).pipe(a)}),a.entriesCount=o}catch(e){a.error(e)}return a}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,t,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw Error(`The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.`);this.files=Object.create(null),this.comment=null,this.root=``,this.clone=function(){var e=new r;for(var t in this)typeof this[t]!=`function`&&(e[t]=this[t]);return e}}(r.prototype=e(`./object`)).loadAsync=e(`./load`),r.support=e(`./support`),r.defaults=e(`./defaults`),r.version=`3.10.1`,r.loadAsync=function(e,t){return new r().loadAsync(e,t)},r.external=e(`./external`),t.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,t,n){var r=e(`./utils`),i=e(`./external`),a=e(`./utf8`),o=e(`./zipEntries`),s=e(`./stream/Crc32Probe`),c=e(`./nodejsUtils`);function l(e){return new i.Promise(function(t,n){var r=e.decompressed.getContentWorker().pipe(new s);r.on(`error`,function(e){n(e)}).on(`end`,function(){r.streamInfo.crc32===e.decompressed.crc32?t():n(Error(`Corrupted zip : CRC32 mismatch`))}).resume()})}t.exports=function(e,t){var n=this;return t=r.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),c.isNode&&c.isStream(e)?i.Promise.reject(Error(`JSZip can't accept a stream when loading a zip file.`)):r.prepareContent(`the loaded zip file`,e,!0,t.optimizedBinaryString,t.base64).then(function(e){var n=new o(t);return n.load(e),n}).then(function(e){var n=[i.Promise.resolve(e)],r=e.files;if(t.checkCRC32)for(var a=0;a<r.length;a++)n.push(l(r[a]));return i.Promise.all(n)}).then(function(e){for(var i=e.shift(),a=i.files,o=0;o<a.length;o++){var s=a[o],c=s.fileNameStr,l=r.resolve(s.fileNameStr);n.file(l,s.decompressed,{binary:!0,optimizedBinaryString:!0,date:s.date,dir:s.dir,comment:s.fileCommentStr.length?s.fileCommentStr:null,unixPermissions:s.unixPermissions,dosPermissions:s.dosPermissions,createFolders:t.createFolders}),s.dir||(n.file(l).unsafeOriginalName=c)}return i.zipComment.length&&(n.comment=i.zipComment),n})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,t,n){var r=e(`../utils`),i=e(`../stream/GenericWorker`);function a(e,t){i.call(this,`Nodejs stream input adapter for `+e),this._upstreamEnded=!1,this._bindStream(t)}r.inherits(a,i),a.prototype._bindStream=function(e){var t=this;(this._stream=e).pause(),e.on(`data`,function(e){t.push({data:e,meta:{percent:0}})}).on(`error`,function(e){t.isPaused?this.generatedError=e:t.error(e)}).on(`end`,function(){t.isPaused?t._upstreamEnded=!0:t.end()})},a.prototype.pause=function(){return!!i.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},t.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,t,n){var r=e(`readable-stream`).Readable;function i(e,t,n){r.call(this,t),this._helper=e;var i=this;e.on(`data`,function(e,t){i.push(e)||i._helper.pause(),n&&n(t)}).on(`error`,function(e){i.emit(`error`,e)}).on(`end`,function(){i.push(null)})}e(`../utils`).inherits(i,r),i.prototype._read=function(){this._helper.resume()},t.exports=i},{"../utils":32,"readable-stream":16}],14:[function(e,t,n){t.exports={isNode:typeof Buffer<`u`,newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e==`number`)throw Error(`The "data" argument must not be a number`);return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on==`function`&&typeof e.pause==`function`&&typeof e.resume==`function`}}},{}],15:[function(e,t,n){function r(e,t,n){var r,i=a.getTypeOf(t),s=a.extend(n||{},c);s.date=s.date||new Date,s.compression!==null&&(s.compression=s.compression.toUpperCase()),typeof s.unixPermissions==`string`&&(s.unixPermissions=parseInt(s.unixPermissions,8)),s.unixPermissions&&16384&s.unixPermissions&&(s.dir=!0),s.dosPermissions&&16&s.dosPermissions&&(s.dir=!0),s.dir&&(e=h(e)),s.createFolders&&(r=m(e))&&g.call(this,r,!0);var d=i===`string`&&!1===s.binary&&!1===s.base64;n&&n.binary!==void 0||(s.binary=!d),(t instanceof l&&t.uncompressedSize===0||s.dir||!t||t.length===0)&&(s.base64=!1,s.binary=!0,t=``,s.compression=`STORE`,i=`string`);var _=null;_=t instanceof l||t instanceof o?t:f.isNode&&f.isStream(t)?new p(e,t):a.prepareContent(e,t,s.binary,s.optimizedBinaryString,s.base64);var v=new u(e,_,s);this.files[e]=v}var i=e(`./utf8`),a=e(`./utils`),o=e(`./stream/GenericWorker`),s=e(`./stream/StreamHelper`),c=e(`./defaults`),l=e(`./compressedObject`),u=e(`./zipObject`),d=e(`./generate`),f=e(`./nodejsUtils`),p=e(`./nodejs/NodejsStreamInputAdapter`),m=function(e){e.slice(-1)===`/`&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf(`/`);return 0<t?e.substring(0,t):``},h=function(e){return e.slice(-1)!==`/`&&(e+=`/`),e},g=function(e,t){return t=t===void 0?c.createFolders:t,e=h(e),this.files[e]||r.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function _(e){return Object.prototype.toString.call(e)===`[object RegExp]`}t.exports={load:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},forEach:function(e){var t,n,r;for(t in this.files)r=this.files[t],(n=t.slice(this.root.length,t.length))&&t.slice(0,this.root.length)===this.root&&e(n,r)},filter:function(e){var t=[];return this.forEach(function(n,r){e(n,r)&&t.push(r)}),t},file:function(e,t,n){if(arguments.length!==1)return e=this.root+e,r.call(this,e,t,n),this;if(_(e)){var i=e;return this.filter(function(e,t){return!t.dir&&i.test(e)})}var a=this.files[this.root+e];return a&&!a.dir?a:null},folder:function(e){if(!e)return this;if(_(e))return this.filter(function(t,n){return n.dir&&e.test(t)});var t=this.root+e,n=g.call(this,t),r=this.clone();return r.root=n.name,r},remove:function(e){e=this.root+e;var t=this.files[e];if(t||=(e.slice(-1)!==`/`&&(e+=`/`),this.files[e]),t&&!t.dir)delete this.files[e];else for(var n=this.filter(function(t,n){return n.name.slice(0,e.length)===e}),r=0;r<n.length;r++)delete this.files[n[r].name];return this},generate:function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},generateInternalStream:function(e){var t,n={};try{if((n=a.extend(e||{},{streamFiles:!1,compression:`STORE`,compressionOptions:null,type:``,platform:`DOS`,comment:null,mimeType:`application/zip`,encodeFileName:i.utf8encode})).type=n.type.toLowerCase(),n.compression=n.compression.toUpperCase(),n.type===`binarystring`&&(n.type=`string`),!n.type)throw Error(`No output type specified.`);a.checkSupport(n.type),n.platform!==`darwin`&&n.platform!==`freebsd`&&n.platform!==`linux`&&n.platform!==`sunos`||(n.platform=`UNIX`),n.platform===`win32`&&(n.platform=`DOS`);var r=n.comment||this.comment||``;t=d.generateWorker(this,n,r)}catch(e){(t=new o(`error`)).error(e)}return new s(t,n.type||`string`,n.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return(e||={}).type||(e.type=`nodebuffer`),this.generateInternalStream(e).toNodejsStream(t)}}},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,t,n){t.exports=e(`stream`)},{stream:void 0}],17:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=255&e[t]}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data[this.zero+e]},i.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.length-4;0<=a;--a)if(this.data[a]===t&&this.data[a+1]===n&&this.data[a+2]===r&&this.data[a+3]===i)return a-this.zero;return-1},i.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),n=e.charCodeAt(1),r=e.charCodeAt(2),i=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&n===a[1]&&r===a[2]&&i===a[3]},i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],18:[function(e,t,n){var r=e(`../utils`);function i(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}i.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw Error(`End of data reached (data length = `+this.length+`, asked index = `+e+`). Corrupted zip ?`)},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t,n=0;for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)n=(n<<8)+this.byteAt(t);return this.index+=e,n},readString:function(e){return r.transformTo(`string`,this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1))}},t.exports=i},{"../utils":32}],19:[function(e,t,n){var r=e(`./Uint8ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,t,n){var r=e(`./DataReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)},i.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero},i.prototype.readAndCheckSignature=function(e){return e===this.readData(4)},i.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./DataReader":18}],21:[function(e,t,n){var r=e(`./ArrayReader`);function i(e){r.call(this,e)}e(`../utils`).inherits(i,r),i.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array;var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t},t.exports=i},{"../utils":32,"./ArrayReader":17}],22:[function(e,t,n){var r=e(`../utils`),i=e(`../support`),a=e(`./ArrayReader`),o=e(`./StringReader`),s=e(`./NodeBufferReader`),c=e(`./Uint8ArrayReader`);t.exports=function(e){var t=r.getTypeOf(e);return r.checkSupport(t),t!==`string`||i.uint8array?t===`nodebuffer`?new s(e):i.uint8array?new c(r.transformTo(`uint8array`,e)):new a(r.transformTo(`array`,e)):new o(e)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,t,n){n.LOCAL_FILE_HEADER=`PK`,n.CENTRAL_FILE_HEADER=`PK`,n.CENTRAL_DIRECTORY_END=`PK`,n.ZIP64_CENTRAL_DIRECTORY_LOCATOR=`PK\x07`,n.ZIP64_CENTRAL_DIRECTORY_END=`PK`,n.DATA_DESCRIPTOR=`PK\x07\b`},{}],24:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../utils`);function a(e){r.call(this,`ConvertWorker to `+e),this.destType=e}i.inherits(a,r),a.prototype.processChunk=function(e){this.push({data:i.transformTo(this.destType,e.data),meta:e.meta})},t.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,t,n){var r=e(`./GenericWorker`),i=e(`../crc32`);function a(){r.call(this,`Crc32Probe`),this.withStreamInfo(`crc32`,0)}e(`../utils`).inherits(a,r),a.prototype.processChunk=function(e){this.streamInfo.crc32=i(e.data,this.streamInfo.crc32||0),this.push(e)},t.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataLengthProbe for `+e),this.propName=e,this.withStreamInfo(e,0)}r.inherits(a,i),a.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}i.prototype.processChunk.call(this,e)},t.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,t,n){var r=e(`../utils`),i=e(`./GenericWorker`);function a(e){i.call(this,`DataWorker`);var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type=``,this._tickScheduled=!1,e.then(function(e){t.dataIsReady=!0,t.data=e,t.max=e&&e.length||0,t.type=r.getTypeOf(e),t.isPaused||t._tickAndRepeat()},function(e){t.error(e)})}r.inherits(a,i),a.prototype.cleanUp=function(){i.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!i.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=null,t=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case`string`:e=this.data.substring(this.index,t);break;case`uint8array`:e=this.data.subarray(this.index,t);break;case`array`:case`nodebuffer`:e=this.data.slice(this.index,t)}return this.index=t,this.push({data:e,meta:{percent:this.max?this.index/this.max*100:0}})},t.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,t,n){function r(e){this.name=e||`default`,this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(e){this.emit(`data`,e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit(`end`),this.cleanUp(),this.isFinished=!0}catch(e){this.emit(`error`,e)}return!0},error:function(e){return!this.isFinished&&(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit(`error`,e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var n=0;n<this._listeners[e].length;n++)this._listeners[e][n].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on(`data`,function(e){t.processChunk(e)}),e.on(`end`,function(){t.end()}),e.on(`error`,function(e){t.error(e)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var e=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw Error(`The stream '`+this+`' has already been used.`);this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e=`Worker `+this.name;return this.previous?this.previous+` -> `+e:e}},t.exports=r},{}],29:[function(e,t,n){var r=e(`../utils`),i=e(`./ConvertWorker`),a=e(`./GenericWorker`),o=e(`../base64`),s=e(`../support`),c=e(`../external`),l=null;if(s.nodestream)try{l=e(`../nodejs/NodejsStreamOutputAdapter`)}catch{}function u(e,t){return new c.Promise(function(n,i){var a=[],s=e._internalType,c=e._outputType,l=e._mimeType;e.on(`data`,function(e,n){a.push(e),t&&t(n)}).on(`error`,function(e){a=[],i(e)}).on(`end`,function(){try{n(function(e,t,n){switch(e){case`blob`:return r.newBlob(r.transformTo(`arraybuffer`,t),n);case`base64`:return o.encode(t);default:return r.transformTo(e,t)}}(c,function(e,t){var n,r=0,i=null,a=0;for(n=0;n<t.length;n++)a+=t[n].length;switch(e){case`string`:return t.join(``);case`array`:return Array.prototype.concat.apply([],t);case`uint8array`:for(i=new Uint8Array(a),n=0;n<t.length;n++)i.set(t[n],r),r+=t[n].length;return i;case`nodebuffer`:return Buffer.concat(t);default:throw Error(`concat : unsupported type '`+e+`'`)}}(s,a),l))}catch(e){i(e)}a=[]}).resume()})}function d(e,t,n){var o=t;switch(t){case`blob`:case`arraybuffer`:o=`uint8array`;break;case`base64`:o=`string`}try{this._internalType=o,this._outputType=t,this._mimeType=n,r.checkSupport(o),this._worker=e.pipe(new i(o)),e.lock()}catch(e){this._worker=new a(`error`),this._worker.error(e)}}d.prototype={accumulate:function(e){return u(this,e)},on:function(e,t){var n=this;return e===`data`?this._worker.on(e,function(e){t.call(n,e.data,e.meta)}):this._worker.on(e,function(){r.delay(t,arguments,n)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(r.checkSupport(`nodestream`),this._outputType!==`nodebuffer`)throw Error(this._outputType+` is not supported by this method`);return new l(this,{objectMode:this._outputType!==`nodebuffer`},e)}},t.exports=d},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,t,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<`u`&&typeof Uint8Array<`u`,n.nodebuffer=typeof Buffer<`u`,n.uint8array=typeof Uint8Array<`u`,typeof ArrayBuffer>`u`)n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:`application/zip`}).size===0}catch{try{var i=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);i.append(r),n.blob=i.getBlob(`application/zip`).size===0}catch{n.blob=!1}}}try{n.nodestream=!!e(`readable-stream`).Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,t,n){for(var r=e(`./utils`),i=e(`./support`),a=e(`./nodejsUtils`),o=e(`./stream/GenericWorker`),s=Array(256),c=0;c<256;c++)s[c]=252<=c?6:248<=c?5:240<=c?4:224<=c?3:192<=c?2:1;s[254]=s[254]=1;function l(){o.call(this,`utf-8 decode`),this.leftOver=null}function u(){o.call(this,`utf-8 encode`)}n.utf8encode=function(e){return i.nodebuffer?a.newBufferFrom(e,`utf-8`):function(e){var t,n,r,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=i.uint8array?new Uint8Array(c):Array(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(r=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(r-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t}(e)},n.utf8decode=function(e){return i.nodebuffer?r.transformTo(`nodebuffer`,e).toString(`utf-8`):function(e){var t,n,i,a,o=e.length,c=Array(2*o);for(t=n=0;t<o;)if((i=e[t++])<128)c[n++]=i;else if(4<(a=s[i]))c[n++]=65533,t+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&t<o;)i=i<<6|63&e[t++],a--;1<a?c[n++]=65533:i<65536?c[n++]=i:(i-=65536,c[n++]=55296|i>>10&1023,c[n++]=56320|1023&i)}return c.length!==n&&(c.subarray?c=c.subarray(0,n):c.length=n),r.applyFromCharCode(c)}(e=r.transformTo(i.uint8array?`uint8array`:`array`,e))},r.inherits(l,o),l.prototype.processChunk=function(e){var t=r.transformTo(i.uint8array?`uint8array`:`array`,e.data);if(this.leftOver&&this.leftOver.length){if(i.uint8array){var a=t;(t=new Uint8Array(a.length+this.leftOver.length)).set(this.leftOver,0),t.set(a,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var o=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+s[e[n]]>t?n:t}(t),c=t;o!==t.length&&(i.uint8array?(c=t.subarray(0,o),this.leftOver=t.subarray(o,t.length)):(c=t.slice(0,o),this.leftOver=t.slice(o,t.length))),this.push({data:n.utf8decode(c),meta:e.meta})},l.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=l,r.inherits(u,o),u.prototype.processChunk=function(e){this.push({data:n.utf8encode(e.data),meta:e.meta})},n.Utf8EncodeWorker=u},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,t,n){var r=e(`./support`),i=e(`./base64`),a=e(`./nodejsUtils`),o=e(`./external`);function s(e){return e}function c(e,t){for(var n=0;n<e.length;++n)t[n]=255&e.charCodeAt(n);return t}e(`setimmediate`),n.newBlob=function(e,t){n.checkSupport(`blob`);try{return new Blob([e],{type:t})}catch{try{var r=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return r.append(e),r.getBlob(t)}catch{throw Error(`Bug : can't construct the Blob.`)}}};var l={stringifyByChunk:function(e,t,n){var r=[],i=0,a=e.length;if(a<=n)return String.fromCharCode.apply(null,e);for(;i<a;)t===`array`||t===`nodebuffer`?r.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+n,a)))):r.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+n,a)))),i+=n;return r.join(``)},stringifyByChar:function(e){for(var t=``,n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function u(e){var t=65536,r=n.getTypeOf(e),i=!0;if(r===`uint8array`?i=l.applyCanBeUsed.uint8array:r===`nodebuffer`&&(i=l.applyCanBeUsed.nodebuffer),i)for(;1<t;)try{return l.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return l.stringifyByChar(e)}function d(e,t){for(var n=0;n<e.length;n++)t[n]=e[n];return t}n.applyFromCharCode=u;var f={};f.string={string:s,array:function(e){return c(e,Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:function(e){return c(e,a.allocBuffer(e.length))}},f.array={string:u,array:s,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(e)}},f.arraybuffer={string:function(e){return u(new Uint8Array(e))},array:function(e){return d(new Uint8Array(e),Array(e.byteLength))},arraybuffer:s,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return a.newBufferFrom(new Uint8Array(e))}},f.uint8array={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:s,nodebuffer:function(e){return a.newBufferFrom(e)}},f.nodebuffer={string:u,array:function(e){return d(e,Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return d(e,new Uint8Array(e.length))},nodebuffer:s},n.transformTo=function(e,t){return t||=``,e?(n.checkSupport(e),f[n.getTypeOf(t)][e](t)):t},n.resolve=function(e){for(var t=e.split(`/`),n=[],r=0;r<t.length;r++){var i=t[r];i===`.`||i===``&&r!==0&&r!==t.length-1||(i===`..`?n.pop():n.push(i))}return n.join(`/`)},n.getTypeOf=function(e){return typeof e==`string`?`string`:Object.prototype.toString.call(e)===`[object Array]`?`array`:r.nodebuffer&&a.isBuffer(e)?`nodebuffer`:r.uint8array&&e instanceof Uint8Array?`uint8array`:r.arraybuffer&&e instanceof ArrayBuffer?`arraybuffer`:void 0},n.checkSupport=function(e){if(!r[e.toLowerCase()])throw Error(e+` is not supported by this platform`)},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(e){var t,n,r=``;for(n=0;n<(e||``).length;n++)r+=`\\x`+((t=e.charCodeAt(n))<16?`0`:``)+t.toString(16).toUpperCase();return r},n.delay=function(e,t,n){setImmediate(function(){e.apply(n||null,t||[])})},n.inherits=function(e,t){function n(){}n.prototype=t.prototype,e.prototype=new n},n.extend=function(){var e,t,n={};for(e=0;e<arguments.length;e++)for(t in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],t)&&n[t]===void 0&&(n[t]=arguments[e][t]);return n},n.prepareContent=function(e,t,a,s,l){return o.Promise.resolve(t).then(function(e){return r.blob&&(e instanceof Blob||[`[object File]`,`[object Blob]`].indexOf(Object.prototype.toString.call(e))!==-1)&&typeof FileReader<`u`?new o.Promise(function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){n(e.target.error)},r.readAsArrayBuffer(e)}):e}).then(function(t){var u=n.getTypeOf(t);return u?(u===`arraybuffer`?t=n.transformTo(`uint8array`,t):u===`string`&&(l?t=i.decode(t):a&&!0!==s&&(t=function(e){return c(e,r.uint8array?new Uint8Array(e.length):Array(e.length))}(t))),t):o.Promise.reject(Error(`Can't read the data of '`+e+`'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?`))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./signature`),o=e(`./zipEntry`),s=e(`./support`);function c(e){this.files=[],this.loadOptions=e}c.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw Error(`Corrupted zip or bug: unexpected signature (`+i.pretty(t)+`, expected `+i.pretty(e)+`)`)}},isSignature:function(e,t){var n=this.reader.index;this.reader.setIndex(e);var r=this.reader.readString(4)===t;return this.reader.setIndex(n),r},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=s.uint8array?`uint8array`:`array`,n=i.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(n)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e,t,n,r=this.zip64EndOfCentralSize-44;0<r;)e=this.reader.readInt(2),t=this.reader.readInt(4),n=this.reader.readData(t),this.zip64ExtensibleData[e]={id:e,length:t,value:n}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw Error(`Multi-volumes zip are not supported`)},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(e=new o({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw Error(`Corrupted zip or bug: expected `+this.centralDirRecords+` records in central dir, got `+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(e<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?Error(`Corrupted zip: can't find end of central directory`):Error(`Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html`);this.reader.setIndex(e);var t=e;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===i.MAX_VALUE_16BITS||this.diskWithCentralDirStart===i.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===i.MAX_VALUE_16BITS||this.centralDirRecords===i.MAX_VALUE_16BITS||this.centralDirSize===i.MAX_VALUE_32BITS||this.centralDirOffset===i.MAX_VALUE_32BITS){if(this.zip64=!0,(e=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw Error(`Corrupted zip: can't find the ZIP64 end of central directory locator`);if(this.reader.setIndex(e),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw Error(`Corrupted zip: can't find the ZIP64 end of central directory`);this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var n=this.centralDirOffset+this.centralDirSize;this.zip64&&(n+=20,n+=12+this.zip64EndOfCentralSize);var r=t-n;if(0<r)this.isSignature(t,a.CENTRAL_FILE_HEADER)||(this.reader.zero=r);else if(r<0)throw Error(`Corrupted zip: missing `+Math.abs(r)+` bytes.`)},prepareReader:function(e){this.reader=r(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=c},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,t,n){var r=e(`./reader/readerFor`),i=e(`./utils`),a=e(`./compressedObject`),o=e(`./crc32`),s=e(`./utf8`),c=e(`./compressions`),l=e(`./support`);function u(e,t){this.options=e,this.loadOptions=t}u.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(e){var t,n;if(e.skip(22),this.fileNameLength=e.readInt(2),n=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(n),this.compressedSize===-1||this.uncompressedSize===-1)throw Error(`Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)`);if((t=function(e){for(var t in c)if(Object.prototype.hasOwnProperty.call(c,t)&&c[t].magic===e)return c[t];return null}(this.compressionMethod))===null)throw Error(`Corrupted zip : compression `+i.pretty(this.compressionMethod)+` unknown (inner file : `+i.transformTo(`string`,this.fileName)+`)`);this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw Error(`Encrypted zip are not supported`);e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),e==0&&(this.dosPermissions=63&this.externalFileAttributes),e==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!==`/`||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=r(this.extraFields[1].value);this.uncompressedSize===i.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===i.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===i.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===i.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t,n,r,i=e.index+this.extraFieldsLength;for(this.extraFields||={};e.index+4<i;)t=e.readInt(2),n=e.readInt(2),r=e.readData(n),this.extraFields[t]={id:t,length:n,value:r};e.setIndex(i)},handleUTF8:function(){var e=l.uint8array?`uint8array`:`array`;if(this.useUTF8())this.fileNameStr=s.utf8decode(this.fileName),this.fileCommentStr=s.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var n=i.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(n)}var r=this.findExtraFieldUnicodeComment();if(r!==null)this.fileCommentStr=r;else{var a=i.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(a)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileName)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=r(e.value);return t.readInt(1)===1&&o(this.fileComment)===t.readInt(4)?s.utf8decode(t.readData(e.length-5)):null}return null}},t.exports=u},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,t,n){function r(e,t,n){this.name=e,this.dir=n.dir,this.date=n.date,this.comment=n.comment,this.unixPermissions=n.unixPermissions,this.dosPermissions=n.dosPermissions,this._data=t,this._dataBinary=n.binary,this.options={compression:n.compression,compressionOptions:n.compressionOptions}}var i=e(`./stream/StreamHelper`),a=e(`./stream/DataWorker`),o=e(`./utf8`),s=e(`./compressedObject`),c=e(`./stream/GenericWorker`);r.prototype={internalStream:function(e){var t=null,n=`string`;try{if(!e)throw Error(`No output type specified.`);var r=(n=e.toLowerCase())===`string`||n===`text`;n!==`binarystring`&&n!==`text`||(n=`string`),t=this._decompressWorker();var a=!this._dataBinary;a&&!r&&(t=t.pipe(new o.Utf8EncodeWorker)),!a&&r&&(t=t.pipe(new o.Utf8DecodeWorker))}catch(e){(t=new c(`error`)).error(e)}return new i(t,n,``)},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||`nodebuffer`).toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof s&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var n=this._decompressWorker();return this._dataBinary||(n=n.pipe(new o.Utf8EncodeWorker)),s.createWorkerFrom(n,e,t)},_decompressWorker:function(){return this._data instanceof s?this._data.getContentWorker():this._data instanceof c?this._data:new a(this._data)}};for(var l=[`asText`,`asBinary`,`asNodeBuffer`,`asUint8Array`,`asArrayBuffer`],u=function(){throw Error(`This method has been removed in JSZip 3.0, please check the upgrade guide.`)},d=0;d<l.length;d++)r.prototype[l[d]]=u;t.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,t,n){(function(e){var n,r,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,o=new i(u),s=e.document.createTextNode(``);o.observe(s,{characterData:!0}),n=function(){s.data=a=++a%2}}else if(e.setImmediate||e.MessageChannel===void 0)n=`document`in e&&`onreadystatechange`in e.document.createElement(`script`)?function(){var t=e.document.createElement(`script`);t.onreadystatechange=function(){u(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(u,0)};else{var c=new e.MessageChannel;c.port1.onmessage=u,n=function(){c.port2.postMessage(0)}}var l=[];function u(){var e,t;r=!0;for(var n=l.length;n;){for(t=l,l=[],e=-1;++e<n;)t[e]();n=l.length}r=!1}t.exports=function(e){l.push(e)!==1||r||n()}}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}],37:[function(e,t,n){var r=e(`immediate`);function i(){}var a={},o=[`REJECTED`],s=[`FULFILLED`],c=[`PENDING`];function l(e){if(typeof e!=`function`)throw TypeError(`resolver must be a function`);this.state=c,this.queue=[],this.outcome=void 0,e!==i&&p(this,e)}function u(e,t,n){this.promise=e,typeof t==`function`&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof n==`function`&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function d(e,t,n){r(function(){var r;try{r=t(n)}catch(t){return a.reject(e,t)}r===e?a.reject(e,TypeError(`Cannot resolve promise with itself`)):a.resolve(e,r)})}function f(e){var t=e&&e.then;if(e&&(typeof e==`object`||typeof e==`function`)&&typeof t==`function`)return function(){t.apply(e,arguments)}}function p(e,t){var n=!1;function r(t){n||(n=!0,a.reject(e,t))}function i(t){n||(n=!0,a.resolve(e,t))}var o=m(function(){t(i,r)});o.status===`error`&&r(o.value)}function m(e,t){var n={};try{n.value=e(t),n.status=`success`}catch(e){n.status=`error`,n.value=e}return n}(t.exports=l).prototype.finally=function(e){if(typeof e!=`function`)return this;var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},l.prototype.catch=function(e){return this.then(null,e)},l.prototype.then=function(e,t){if(typeof e!=`function`&&this.state===s||typeof t!=`function`&&this.state===o)return this;var n=new this.constructor(i);return this.state===c?this.queue.push(new u(n,e,t)):d(n,this.state===s?e:t,this.outcome),n},u.prototype.callFulfilled=function(e){a.resolve(this.promise,e)},u.prototype.otherCallFulfilled=function(e){d(this.promise,this.onFulfilled,e)},u.prototype.callRejected=function(e){a.reject(this.promise,e)},u.prototype.otherCallRejected=function(e){d(this.promise,this.onRejected,e)},a.resolve=function(e,t){var n=m(f,t);if(n.status===`error`)return a.reject(e,n.value);var r=n.value;if(r)p(e,r);else{e.state=s,e.outcome=t;for(var i=-1,o=e.queue.length;++i<o;)e.queue[i].callFulfilled(t)}return e},a.reject=function(e,t){e.state=o,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},l.resolve=function(e){return e instanceof this?e:a.resolve(new this(i),e)},l.reject=function(e){var t=new this(i);return a.reject(t,e)},l.all=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=Array(n),s=0,c=-1,l=new this(i);++c<n;)u(e[c],c);return l;function u(e,i){t.resolve(e).then(function(e){o[i]=e,++s!==n||r||(r=!0,a.resolve(l,o))},function(e){r||(r=!0,a.reject(l,e))})}},l.race=function(e){var t=this;if(Object.prototype.toString.call(e)!==`[object Array]`)return this.reject(TypeError(`must be an array`));var n=e.length,r=!1;if(!n)return this.resolve([]);for(var o=-1,s=new this(i);++o<n;)c=e[o],t.resolve(c).then(function(e){r||(r=!0,a.resolve(s,e))},function(e){r||(r=!0,a.reject(s,e))});var c;return s}},{immediate:36}],38:[function(e,t,n){var r={};(0,e(`./lib/utils/common`).assign)(r,e(`./lib/deflate`),e(`./lib/inflate`),e(`./lib/zlib/constants`)),t.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,t,n){var r=e(`./zlib/deflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/messages`),s=e(`./zlib/zstream`),c=Object.prototype.toString,l=0,u=-1,d=0,f=8;function p(e){if(!(this instanceof p))return new p(e);this.options=i.assign({level:u,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:d,to:``},e||{});var t=this.options;t.raw&&0<t.windowBits?t.windowBits=-t.windowBits:t.gzip&&0<t.windowBits&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(n!==l)throw Error(o[n]);if(t.header&&r.deflateSetHeader(this.strm,t.header),t.dictionary){var m;if(m=typeof t.dictionary==`string`?a.string2buf(t.dictionary):c.call(t.dictionary)===`[object ArrayBuffer]`?new Uint8Array(t.dictionary):t.dictionary,(n=r.deflateSetDictionary(this.strm,m))!==l)throw Error(o[n]);this._dict_set=!0}}function m(e,t){var n=new p(t);if(n.push(e,!0),n.err)throw n.msg||o[n.err];return n.result}p.prototype.push=function(e,t){var n,o,s=this.strm,u=this.options.chunkSize;if(this.ended)return!1;o=t===~~t?t:!0===t?4:0,typeof e==`string`?s.input=a.string2buf(e):c.call(e)===`[object ArrayBuffer]`?s.input=new Uint8Array(e):s.input=e,s.next_in=0,s.avail_in=s.input.length;do{if(s.avail_out===0&&(s.output=new i.Buf8(u),s.next_out=0,s.avail_out=u),(n=r.deflate(s,o))!==1&&n!==l)return this.onEnd(n),!(this.ended=!0);s.avail_out!==0&&(s.avail_in!==0||o!==4&&o!==2)||(this.options.to===`string`?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((0<s.avail_in||s.avail_out===0)&&n!==1);return o===4?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==2||(this.onEnd(l),!(s.avail_out=0))},p.prototype.onData=function(e){this.chunks.push(e)},p.prototype.onEnd=function(e){e===l&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Deflate=p,n.deflate=m,n.deflateRaw=function(e,t){return(t||={}).raw=!0,m(e,t)},n.gzip=function(e,t){return(t||={}).gzip=!0,m(e,t)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,t,n){var r=e(`./zlib/inflate`),i=e(`./utils/common`),a=e(`./utils/strings`),o=e(`./zlib/constants`),s=e(`./zlib/messages`),c=e(`./zlib/zstream`),l=e(`./zlib/gzheader`),u=Object.prototype.toString;function d(e){if(!(this instanceof d))return new d(e);this.options=i.assign({chunkSize:16384,windowBits:0,to:``},e||{});var t=this.options;t.raw&&0<=t.windowBits&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),!(0<=t.windowBits&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),15<t.windowBits&&t.windowBits<48&&!(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg=``,this.ended=!1,this.chunks=[],this.strm=new c,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,t.windowBits);if(n!==o.Z_OK)throw Error(s[n]);this.header=new l,r.inflateGetHeader(this.strm,this.header)}function f(e,t){var n=new d(t);if(n.push(e,!0),n.err)throw n.msg||s[n.err];return n.result}d.prototype.push=function(e,t){var n,s,c,l,d,f,p=this.strm,m=this.options.chunkSize,h=this.options.dictionary,g=!1;if(this.ended)return!1;s=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,typeof e==`string`?p.input=a.binstring2buf(e):u.call(e)===`[object ArrayBuffer]`?p.input=new Uint8Array(e):p.input=e,p.next_in=0,p.avail_in=p.input.length;do{if(p.avail_out===0&&(p.output=new i.Buf8(m),p.next_out=0,p.avail_out=m),(n=r.inflate(p,o.Z_NO_FLUSH))===o.Z_NEED_DICT&&h&&(f=typeof h==`string`?a.string2buf(h):u.call(h)===`[object ArrayBuffer]`?new Uint8Array(h):h,n=r.inflateSetDictionary(this.strm,f)),n===o.Z_BUF_ERROR&&!0===g&&(n=o.Z_OK,g=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),!(this.ended=!0);p.next_out&&(p.avail_out!==0&&n!==o.Z_STREAM_END&&(p.avail_in!==0||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||(this.options.to===`string`?(c=a.utf8border(p.output,p.next_out),l=p.next_out-c,d=a.buf2string(p.output,c),p.next_out=l,p.avail_out=m-l,l&&i.arraySet(p.output,p.output,c,l,0),this.onData(d)):this.onData(i.shrinkBuf(p.output,p.next_out)))),p.avail_in===0&&p.avail_out===0&&(g=!0)}while((0<p.avail_in||p.avail_out===0)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),!(p.avail_out=0))},d.prototype.onData=function(e){this.chunks.push(e)},d.prototype.onEnd=function(e){e===o.Z_OK&&(this.options.to===`string`?this.result=this.chunks.join(``):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},n.Inflate=d,n.inflate=f,n.inflateRaw=function(e,t){return(t||={}).raw=!0,f(e,t)},n.ungzip=f},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,t,n){var r=typeof Uint8Array<`u`&&typeof Uint16Array<`u`&&typeof Int32Array<`u`;n.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var n=t.shift();if(n){if(typeof n!=`object`)throw TypeError(n+`must be non-object`);for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},n.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var i={arraySet:function(e,t,n,r,i){if(t.subarray&&e.subarray)e.set(t.subarray(n,n+r),i);else for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){var t,n,r,i,a,o;for(t=r=0,n=e.length;t<n;t++)r+=e[t].length;for(o=new Uint8Array(r),t=i=0,n=e.length;t<n;t++)a=e[t],o.set(a,i),i+=a.length;return o}},a={arraySet:function(e,t,n,r,i){for(var a=0;a<r;a++)e[i+a]=t[n+a]},flattenChunks:function(e){return[].concat.apply([],e)}};n.setTyped=function(e){e?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,i)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,t,n){var r=e(`./common`),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=252<=s?6:248<=s?5:240<=s?4:224<=s?3:192<=s?2:1;function c(e,t){if(t<65537&&(e.subarray&&a||!e.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(e,t));for(var n=``,o=0;o<t;o++)n+=String.fromCharCode(e[o]);return n}o[254]=o[254]=1,n.string2buf=function(e){var t,n,i,a,o,s=e.length,c=0;for(a=0;a<s;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),c+=n<128?1:n<2048?2:n<65536?3:4;for(t=new r.Buf8(c),a=o=0;o<c;a++)(64512&(n=e.charCodeAt(a)))==55296&&a+1<s&&(64512&(i=e.charCodeAt(a+1)))==56320&&(n=65536+(n-55296<<10)+(i-56320),a++),n<128?t[o++]=n:(n<2048?t[o++]=192|n>>>6:(n<65536?t[o++]=224|n>>>12:(t[o++]=240|n>>>18,t[o++]=128|n>>>12&63),t[o++]=128|n>>>6&63),t[o++]=128|63&n);return t},n.buf2binstring=function(e){return c(e,e.length)},n.binstring2buf=function(e){for(var t=new r.Buf8(e.length),n=0,i=t.length;n<i;n++)t[n]=e.charCodeAt(n);return t},n.buf2string=function(e,t){var n,r,i,a,s=t||e.length,l=Array(2*s);for(n=r=0;n<s;)if((i=e[n++])<128)l[r++]=i;else if(4<(a=o[i]))l[r++]=65533,n+=a-1;else{for(i&=a===2?31:a===3?15:7;1<a&&n<s;)i=i<<6|63&e[n++],a--;1<a?l[r++]=65533:i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|1023&i)}return c(l,r)},n.utf8border=function(e,t){var n;for((t||=e.length)>e.length&&(t=e.length),n=t-1;0<=n&&(192&e[n])==128;)n--;return n<0||n===0?t:n+o[e[n]]>t?n:t}},{"./common":41}],43:[function(e,t,n){t.exports=function(e,t,n,r){for(var i=65535&e|0,a=e>>>16&65535|0,o=0;n!==0;){for(n-=o=2e3<n?2e3:n;a=a+(i=i+t[r++]|0)|0,--o;);i%=65521,a%=65521}return i|a<<16|0}},{}],44:[function(e,t,n){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,t,n){var r=function(){for(var e,t=[],n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=1&e?3988292384^e>>>1:e>>>1;t[n]=e}return t}();t.exports=function(e,t,n,i){var a=r,o=i+n;e^=-1;for(var s=i;s<o;s++)e=e>>>8^a[255&(e^t[s])];return-1^e}},{}],46:[function(e,t,n){var r,i=e(`../utils/common`),a=e(`./trees`),o=e(`./adler32`),s=e(`./crc32`),c=e(`./messages`),l=0,u=4,d=0,f=-2,p=-1,m=4,h=2,g=8,_=9,v=286,y=30,b=19,x=2*v+1,S=15,C=3,w=258,T=w+C+1,E=42,D=113,O=1,k=2,A=3,j=4;function M(e,t){return e.msg=c[t],t}function ee(e){return(e<<1)-(4<e?9:0)}function te(e){for(var t=e.length;0<=--t;)e[t]=0}function N(e){var t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(i.arraySet(e.output,t.pending_buf,t.pending_out,n,e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))}function P(e,t){a._tr_flush_block(e,0<=e.block_start?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,N(e.strm)}function F(e,t){e.pending_buf[e.pending++]=t}function I(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function L(e,t){var n,r,i=e.max_chain_length,a=e.strstart,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-T?e.strstart-(e.w_size-T):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+w,p=l[a+o-1],m=l[a+o];e.prev_length>=e.good_match&&(i>>=2),s>e.lookahead&&(s=e.lookahead);do if(l[(n=t)+o]===m&&l[n+o-1]===p&&l[n]===l[a]&&l[++n]===l[a+1]){a+=2,n++;do;while(l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&l[++a]===l[++n]&&a<f);if(r=w-(f-a),a=f-w,o<r){if(e.match_start=t,s<=(o=r))break;p=l[a+o-1],m=l[a+o]}}while((t=d[t&u])>c&&--i!=0);return o<=e.lookahead?o:e.lookahead}function R(e){var t,n,r,a,c,l,u,d,f,p,m=e.w_size;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=m+(m-T)){for(i.arraySet(e.window,e.window,m,m,0),e.match_start-=m,e.strstart-=m,e.block_start-=m,t=n=e.hash_size;r=e.head[--t],e.head[t]=m<=r?r-m:0,--n;);for(t=n=m;r=e.prev[--t],e.prev[t]=m<=r?r-m:0,--n;);a+=m}if(e.strm.avail_in===0)break;if(l=e.strm,u=e.window,d=e.strstart+e.lookahead,f=a,p=void 0,p=l.avail_in,f<p&&(p=f),n=p===0?0:(l.avail_in-=p,i.arraySet(u,l.input,l.next_in,p,d),l.state.wrap===1?l.adler=o(l.adler,u,p,d):l.state.wrap===2&&(l.adler=s(l.adler,u,p,d)),l.next_in+=p,l.total_in+=p,p),e.lookahead+=n,e.lookahead+e.insert>=C)for(c=e.strstart-e.insert,e.ins_h=e.window[c],e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[c+C-1])&e.hash_mask,e.prev[c&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=c,c++,e.insert--,!(e.lookahead+e.insert<C)););}while(e.lookahead<T&&e.strm.avail_in!==0)}function ne(e,t){for(var n,r;;){if(e.lookahead<T){if(R(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),n!==0&&e.strstart-n<=e.w_size-T&&(e.match_length=L(e,n)),e.match_length>=C)if(r=a._tr_tally(e,e.strstart-e.match_start,e.match_length-C),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=C){for(e.match_length--;e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart,--e.match_length!=0;);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(P(e,!1),e.strm.avail_out===0))return O}return e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(P(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(P(e,!1),e.strm.avail_out===0)?O:k}function re(e,t){for(var n,r,i;;){if(e.lookahead<T){if(R(e),e.lookahead<T&&t===l)return O;if(e.lookahead===0)break}if(n=0,e.lookahead>=C&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=C-1,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-T&&(e.match_length=L(e,n),e.match_length<=5&&(e.strategy===1||e.match_length===C&&4096<e.strstart-e.match_start)&&(e.match_length=C-1)),e.prev_length>=C&&e.match_length<=e.prev_length){for(i=e.strstart+e.lookahead-C,r=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-C),e.lookahead-=e.prev_length-1,e.prev_length-=2;++e.strstart<=i&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+C-1])&e.hash_mask,n=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),--e.prev_length!=0;);if(e.match_available=0,e.match_length=C-1,e.strstart++,r&&(P(e,!1),e.strm.avail_out===0))return O}else if(e.match_available){if((r=a._tr_tally(e,0,e.window[e.strstart-1]))&&P(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return O}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=a._tr_tally(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<C-1?e.strstart:C-1,t===u?(P(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(P(e,!1),e.strm.avail_out===0)?O:k}function ie(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}function ae(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=g,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*x),this.dyn_dtree=new i.Buf16(2*(2*y+1)),this.bl_tree=new i.Buf16(2*(2*b+1)),te(this.dyn_ltree),te(this.dyn_dtree),te(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(S+1),this.heap=new i.Buf16(2*v+1),te(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*v+1),te(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function oe(e){var t;return e&&e.state?(e.total_in=e.total_out=0,e.data_type=h,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?E:D,e.adler=t.wrap===2?0:1,t.last_flush=l,a._tr_init(t),d):M(e,f)}function z(e){var t=oe(e);return t===d&&function(e){e.window_size=2*e.w_size,te(e.head),e.max_lazy_match=r[e.level].max_lazy,e.good_match=r[e.level].good_length,e.nice_match=r[e.level].nice_length,e.max_chain_length=r[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=C-1,e.match_available=0,e.ins_h=0}(e.state),t}function se(e,t,n,r,a,o){if(!e)return f;var s=1;if(t===p&&(t=6),r<0?(s=0,r=-r):15<r&&(s=2,r-=16),a<1||_<a||n!==g||r<8||15<r||t<0||9<t||o<0||m<o)return M(e,f);r===8&&(r=9);var c=new ae;return(e.state=c).strm=e,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=a+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+C-1)/C),c.window=new i.Buf8(2*c.w_size),c.head=new i.Buf16(c.hash_size),c.prev=new i.Buf16(c.w_size),c.lit_bufsize=1<<a+6,c.pending_buf_size=4*c.lit_bufsize,c.pending_buf=new i.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=o,c.method=n,z(e)}r=[new ie(0,0,0,0,function(e,t){var n=65535;for(n>e.pending_buf_size-5&&(n=e.pending_buf_size-5);;){if(e.lookahead<=1){if(R(e),e.lookahead===0&&t===l)return O;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var r=e.block_start+n;if((e.strstart===0||e.strstart>=r)&&(e.lookahead=e.strstart-r,e.strstart=r,P(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-T&&(P(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(P(e,!0),e.strm.avail_out===0?A:j):(e.strstart>e.block_start&&(P(e,!1),e.strm.avail_out),O)}),new ie(4,4,8,4,ne),new ie(4,5,16,8,ne),new ie(4,6,32,32,ne),new ie(4,4,16,16,re),new ie(8,16,32,32,re),new ie(8,16,128,128,re),new ie(8,32,128,256,re),new ie(32,128,258,1024,re),new ie(32,258,258,4096,re)],n.deflateInit=function(e,t){return se(e,t,g,15,8,0)},n.deflateInit2=se,n.deflateReset=z,n.deflateResetKeep=oe,n.deflateSetHeader=function(e,t){return e&&e.state&&e.state.wrap===2?(e.state.gzhead=t,d):f},n.deflate=function(e,t){var n,i,o,c;if(!e||!e.state||5<t||t<0)return e?M(e,f):f;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===666&&t!==u)return M(e,e.avail_out===0?-5:f);if(i.strm=e,n=i.last_flush,i.last_flush=t,i.status===E)if(i.wrap===2)e.adler=0,F(i,31),F(i,139),F(i,8),i.gzhead?(F(i,+!!i.gzhead.text+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),F(i,255&i.gzhead.time),F(i,i.gzhead.time>>8&255),F(i,i.gzhead.time>>16&255),F(i,i.gzhead.time>>24&255),F(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),F(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(F(i,255&i.gzhead.extra.length),F(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=s(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=69):(F(i,0),F(i,0),F(i,0),F(i,0),F(i,0),F(i,i.level===9?2:2<=i.strategy||i.level<2?4:0),F(i,3),i.status=D);else{var p=g+(i.w_bits-8<<4)<<8;p|=(2<=i.strategy||i.level<2?0:i.level<6?1:i.level===6?2:3)<<6,i.strstart!==0&&(p|=32),p+=31-p%31,i.status=D,I(i,p),i.strstart!==0&&(I(i,e.adler>>>16),I(i,65535&e.adler)),e.adler=1}if(i.status===69)if(i.gzhead.extra){for(o=i.pending;i.gzindex<(65535&i.gzhead.extra.length)&&(i.pending!==i.pending_buf_size||(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),N(e),o=i.pending,i.pending!==i.pending_buf_size));)F(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++;i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=73)}else i.status=73;if(i.status===73)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),N(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,F(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.gzindex=0,i.status=91)}else i.status=91;if(i.status===91)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),N(e),o=i.pending,i.pending===i.pending_buf_size)){c=1;break}c=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,F(i,c)}while(c!==0);i.gzhead.hcrc&&i.pending>o&&(e.adler=s(e.adler,i.pending_buf,i.pending-o,o)),c===0&&(i.status=103)}else i.status=103;if(i.status===103&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&N(e),i.pending+2<=i.pending_buf_size&&(F(i,255&e.adler),F(i,e.adler>>8&255),e.adler=0,i.status=D)):i.status=D),i.pending!==0){if(N(e),e.avail_out===0)return i.last_flush=-1,d}else if(e.avail_in===0&&ee(t)<=ee(n)&&t!==u)return M(e,-5);if(i.status===666&&e.avail_in!==0)return M(e,-5);if(e.avail_in!==0||i.lookahead!==0||t!==l&&i.status!==666){var m=i.strategy===2?function(e,t){for(var n;;){if(e.lookahead===0&&(R(e),e.lookahead===0)){if(t===l)return O;break}if(e.match_length=0,n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(P(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(P(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(P(e,!1),e.strm.avail_out===0)?O:k}(i,t):i.strategy===3?function(e,t){for(var n,r,i,o,s=e.window;;){if(e.lookahead<=w){if(R(e),e.lookahead<=w&&t===l)return O;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=C&&0<e.strstart&&(r=s[i=e.strstart-1])===s[++i]&&r===s[++i]&&r===s[++i]){o=e.strstart+w;do;while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);e.match_length=w-(o-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=C?(n=a._tr_tally(e,1,e.match_length-C),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(P(e,!1),e.strm.avail_out===0))return O}return e.insert=0,t===u?(P(e,!0),e.strm.avail_out===0?A:j):e.last_lit&&(P(e,!1),e.strm.avail_out===0)?O:k}(i,t):r[i.level].func(i,t);if(m!==A&&m!==j||(i.status=666),m===O||m===A)return e.avail_out===0&&(i.last_flush=-1),d;if(m===k&&(t===1?a._tr_align(i):t!==5&&(a._tr_stored_block(i,0,0,!1),t===3&&(te(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),N(e),e.avail_out===0))return i.last_flush=-1,d}return t===u?i.wrap<=0?1:(i.wrap===2?(F(i,255&e.adler),F(i,e.adler>>8&255),F(i,e.adler>>16&255),F(i,e.adler>>24&255),F(i,255&e.total_in),F(i,e.total_in>>8&255),F(i,e.total_in>>16&255),F(i,e.total_in>>24&255)):(I(i,e.adler>>>16),I(i,65535&e.adler)),N(e),0<i.wrap&&(i.wrap=-i.wrap),i.pending===0?1:d):d},n.deflateEnd=function(e){var t;return e&&e.state?(t=e.state.status)!==E&&t!==69&&t!==73&&t!==91&&t!==103&&t!==D&&t!==666?M(e,f):(e.state=null,t===D?M(e,-3):d):f},n.deflateSetDictionary=function(e,t){var n,r,a,s,c,l,u,p,m=t.length;if(!e||!e.state||(s=(n=e.state).wrap)===2||s===1&&n.status!==E||n.lookahead)return f;for(s===1&&(e.adler=o(e.adler,t,m,0)),n.wrap=0,m>=n.w_size&&(s===0&&(te(n.head),n.strstart=0,n.block_start=0,n.insert=0),p=new i.Buf8(n.w_size),i.arraySet(p,t,m-n.w_size,n.w_size,0),t=p,m=n.w_size),c=e.avail_in,l=e.next_in,u=e.input,e.avail_in=m,e.next_in=0,e.input=t,R(n);n.lookahead>=C;){for(r=n.strstart,a=n.lookahead-(C-1);n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+C-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++,--a;);n.strstart=r,n.lookahead=C-1,R(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=C-1,n.match_available=0,e.next_in=l,e.input=u,e.avail_in=c,n.wrap=s,d},n.deflateInfo=`pako deflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,t,n){t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name=``,this.comment=``,this.hcrc=0,this.done=!1}},{}],48:[function(e,t,n){t.exports=function(e,t){var n=e.state,r=e.next_in,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e.input,E;i=r+(e.avail_in-5),a=e.next_out,E=e.output,o=a-(t-e.avail_out),s=a+(e.avail_out-257),c=n.dmax,l=n.wsize,u=n.whave,d=n.wnext,f=n.window,p=n.hold,m=n.bits,h=n.lencode,g=n.distcode,_=(1<<n.lenbits)-1,v=(1<<n.distbits)-1;e:do{m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=h[p&_];t:for(;;){if(p>>>=b=y>>>24,m-=b,(b=y>>>16&255)==0)E[a++]=65535&y;else{if(!(16&b)){if(!(64&b)){y=h[(65535&y)+(p&(1<<b)-1)];continue t}if(32&b){n.mode=12;break e}e.msg=`invalid literal/length code`,n.mode=30;break e}x=65535&y,(b&=15)&&(m<b&&(p+=T[r++]<<m,m+=8),x+=p&(1<<b)-1,p>>>=b,m-=b),m<15&&(p+=T[r++]<<m,m+=8,p+=T[r++]<<m,m+=8),y=g[p&v];r:for(;;){if(p>>>=b=y>>>24,m-=b,!(16&(b=y>>>16&255))){if(!(64&b)){y=g[(65535&y)+(p&(1<<b)-1)];continue r}e.msg=`invalid distance code`,n.mode=30;break e}if(S=65535&y,m<(b&=15)&&(p+=T[r++]<<m,(m+=8)<b&&(p+=T[r++]<<m,m+=8)),c<(S+=p&(1<<b)-1)){e.msg=`invalid distance too far back`,n.mode=30;break e}if(p>>>=b,m-=b,(b=a-o)<S){if(u<(b=S-b)&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break e}if(w=f,(C=0)===d){if(C+=l-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}}else if(d<b){if(C+=l+d-b,(b-=d)<x){for(x-=b;E[a++]=f[C++],--b;);if(C=0,d<x){for(x-=b=d;E[a++]=f[C++],--b;);C=a-S,w=E}}}else if(C+=d-b,b<x){for(x-=b;E[a++]=f[C++],--b;);C=a-S,w=E}for(;2<x;)E[a++]=w[C++],E[a++]=w[C++],E[a++]=w[C++],x-=3;x&&(E[a++]=w[C++],1<x&&(E[a++]=w[C++]))}else{for(C=a-S;E[a++]=E[C++],E[a++]=E[C++],E[a++]=E[C++],2<(x-=3););x&&(E[a++]=E[C++],1<x&&(E[a++]=E[C++]))}break}}break}}while(r<i&&a<s);r-=x=m>>3,p&=(1<<(m-=x<<3))-1,e.next_in=r,e.next_out=a,e.avail_in=r<i?i-r+5:5-(r-i),e.avail_out=a<s?s-a+257:257-(a-s),n.hold=p,n.bits=m}},{}],49:[function(e,t,n){var r=e(`../utils/common`),i=e(`./adler32`),a=e(`./crc32`),o=e(`./inffast`),s=e(`./inftrees`),c=1,l=2,u=0,d=-2,f=1,p=852,m=592;function h(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function g(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(e){var t;return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg=``,t.wrap&&(e.adler=1&t.wrap),t.mode=f,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new r.Buf32(p),t.distcode=t.distdyn=new r.Buf32(m),t.sane=1,t.back=-1,u):d}function v(e){var t;return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,_(e)):d}function y(e,t){var n,r;return e&&e.state?(r=e.state,t<0?(n=0,t=-t):(n=1+(t>>4),t<48&&(t&=15)),t&&(t<8||15<t)?d:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,v(e))):d}function b(e,t){var n,r;return e?(r=new g,(e.state=r).window=null,(n=y(e,t))!==u&&(e.state=null),n):d}var x,S,C=!0;function w(e){if(C){var t;for(x=new r.Buf32(512),S=new r.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(s(c,e.lens,0,288,x,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;s(l,e.lens,0,32,S,0,e.work,{bits:5}),C=!1}e.lencode=x,e.lenbits=9,e.distcode=S,e.distbits=5}function T(e,t,n,i){var a,o=e.state;return o.window===null&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,t,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(i<(a=o.wsize-o.wnext)&&(a=i),r.arraySet(o.window,t,n-i,a,o.wnext),(i-=a)?(r.arraySet(o.window,t,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}n.inflateReset=v,n.inflateReset2=y,n.inflateResetKeep=_,n.inflateInit=function(e){return b(e,15)},n.inflateInit2=b,n.inflate=function(e,t){var n,p,m,g,_,v,y,b,x,S,C,E,D,O,k,A,j,M,ee,te,N,P,F,I,L=0,R=new r.Buf8(4),ne=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return d;(n=e.state).mode===12&&(n.mode=13),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,S=v,C=y,P=u;e:for(;;)switch(n.mode){case f:if(n.wrap===0){n.mode=13;break}for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(2&n.wrap&&b===35615){R[n.check=0]=255&b,R[1]=b>>>8&255,n.check=a(n.check,R,2,0),x=b=0,n.mode=2;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&b)<<8)+(b>>8))%31){e.msg=`incorrect header check`,n.mode=30;break}if((15&b)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(x-=4,N=8+(15&(b>>>=4)),n.wbits===0)n.wbits=N;else if(N>n.wbits){e.msg=`invalid window size`,n.mode=30;break}n.dmax=1<<N,e.adler=n.check=1,n.mode=512&b?10:12,x=b=0;break;case 2:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.flags=b,(255&n.flags)!=8){e.msg=`unknown compression method`,n.mode=30;break}if(57344&n.flags){e.msg=`unknown header flags set`,n.mode=30;break}n.head&&(n.head.text=b>>8&1),512&n.flags&&(R[0]=255&b,R[1]=b>>>8&255,n.check=a(n.check,R,2,0)),x=b=0,n.mode=3;case 3:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.time=b),512&n.flags&&(R[0]=255&b,R[1]=b>>>8&255,R[2]=b>>>16&255,R[3]=b>>>24&255,n.check=a(n.check,R,4,0)),x=b=0,n.mode=4;case 4:for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.head&&(n.head.xflags=255&b,n.head.os=b>>8),512&n.flags&&(R[0]=255&b,R[1]=b>>>8&255,n.check=a(n.check,R,2,0)),x=b=0,n.mode=5;case 5:if(1024&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length=b,n.head&&(n.head.extra_len=b),512&n.flags&&(R[0]=255&b,R[1]=b>>>8&255,n.check=a(n.check,R,2,0)),x=b=0}else n.head&&(n.head.extra=null);n.mode=6;case 6:if(1024&n.flags&&(v<(E=n.length)&&(E=v),E&&(n.head&&(N=n.head.extra_len-n.length,n.head.extra||(n.head.extra=Array(n.head.extra_len)),r.arraySet(n.head.extra,p,g,E,N)),512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,n.length-=E),n.length))break e;n.length=0,n.mode=7;case 7:if(2048&n.flags){if(v===0)break e;for(E=0;N=p[g+ E++],n.head&&N&&n.length<65536&&(n.head.name+=String.fromCharCode(N)),N&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,N)break e}else n.head&&(n.head.name=null);n.length=0,n.mode=8;case 8:if(4096&n.flags){if(v===0)break e;for(E=0;N=p[g+ E++],n.head&&N&&n.length<65536&&(n.head.comment+=String.fromCharCode(N)),N&&E<v;);if(512&n.flags&&(n.check=a(n.check,p,E,g)),v-=E,g+=E,N)break e}else n.head&&(n.head.comment=null);n.mode=9;case 9:if(512&n.flags){for(;x<16;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(65535&n.check)){e.msg=`header crc mismatch`,n.mode=30;break}x=b=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=12;break;case 10:for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}e.adler=n.check=h(b),x=b=0,n.mode=11;case 11:if(n.havedict===0)return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,2;e.adler=n.check=1,n.mode=12;case 12:if(t===5||t===6)break e;case 13:if(n.last){b>>>=7&x,x-=7&x,n.mode=27;break}for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}switch(n.last=1&b,--x,3&(b>>>=1)){case 0:n.mode=14;break;case 1:if(w(n),n.mode=20,t!==6)break;b>>>=2,x-=2;break e;case 2:n.mode=17;break;case 3:e.msg=`invalid block type`,n.mode=30}b>>>=2,x-=2;break;case 14:for(b>>>=7&x,x-=7&x;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if((65535&b)!=(b>>>16^65535)){e.msg=`invalid stored block lengths`,n.mode=30;break}if(n.length=65535&b,x=b=0,n.mode=15,t===6)break e;case 15:n.mode=16;case 16:if(E=n.length){if(v<E&&(E=v),y<E&&(E=y),E===0)break e;r.arraySet(m,p,g,E,_),v-=E,g+=E,y-=E,_+=E,n.length-=E;break}n.mode=12;break;case 17:for(;x<14;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(n.nlen=257+(31&b),b>>>=5,x-=5,n.ndist=1+(31&b),b>>>=5,x-=5,n.ncode=4+(15&b),b>>>=4,x-=4,286<n.nlen||30<n.ndist){e.msg=`too many length or distance symbols`,n.mode=30;break}n.have=0,n.mode=18;case 18:for(;n.have<n.ncode;){for(;x<3;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.lens[ne[n.have++]]=7&b,b>>>=3,x-=3}for(;n.have<19;)n.lens[ne[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,F={bits:n.lenbits},P=s(0,n.lens,0,19,n.lencode,0,n.work,F),n.lenbits=F.bits,P){e.msg=`invalid code lengths set`,n.mode=30;break}n.have=0,n.mode=19;case 19:for(;n.have<n.nlen+n.ndist;){for(;A=(L=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&L,!((k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(j<16)b>>>=k,x-=k,n.lens[n.have++]=j;else{if(j===16){for(I=k+2;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b>>>=k,x-=k,n.have===0){e.msg=`invalid bit length repeat`,n.mode=30;break}N=n.lens[n.have-1],E=3+(3&b),b>>>=2,x-=2}else if(j===17){for(I=k+3;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,N=0,E=3+(7&(b>>>=k)),b>>>=3,x-=3}else{for(I=k+7;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}x-=k,N=0,E=11+(127&(b>>>=k)),b>>>=7,x-=7}if(n.have+E>n.nlen+n.ndist){e.msg=`invalid bit length repeat`,n.mode=30;break}for(;E--;)n.lens[n.have++]=N}}if(n.mode===30)break;if(n.lens[256]===0){e.msg=`invalid code -- missing end-of-block`,n.mode=30;break}if(n.lenbits=9,F={bits:n.lenbits},P=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,F),n.lenbits=F.bits,P){e.msg=`invalid literal/lengths set`,n.mode=30;break}if(n.distbits=6,n.distcode=n.distdyn,F={bits:n.distbits},P=s(l,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,F),n.distbits=F.bits,P){e.msg=`invalid distances set`,n.mode=30;break}if(n.mode=20,t===6)break e;case 20:n.mode=21;case 21:if(6<=v&&258<=y){e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,o(e,C),_=e.next_out,m=e.output,y=e.avail_out,g=e.next_in,p=e.input,v=e.avail_in,b=n.hold,x=n.bits,n.mode===12&&(n.back=-1);break}for(n.back=0;A=(L=n.lencode[b&(1<<n.lenbits)-1])>>>16&255,j=65535&L,!((k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(A&&!(240&A)){for(M=k,ee=A,te=j;A=(L=n.lencode[te+((b&(1<<M+ee)-1)>>M)])>>>16&255,j=65535&L,!(M+(k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,n.length=j,A===0){n.mode=26;break}if(32&A){n.back=-1,n.mode=12;break}if(64&A){e.msg=`invalid literal/length code`,n.mode=30;break}n.extra=15&A,n.mode=22;case 22:if(n.extra){for(I=n.extra;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.length+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=23;case 23:for(;A=(L=n.distcode[b&(1<<n.distbits)-1])>>>16&255,j=65535&L,!((k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(!(240&A)){for(M=k,ee=A,te=j;A=(L=n.distcode[te+((b&(1<<M+ee)-1)>>M)])>>>16&255,j=65535&L,!(M+(k=L>>>24)<=x);){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}b>>>=M,x-=M,n.back+=M}if(b>>>=k,x-=k,n.back+=k,64&A){e.msg=`invalid distance code`,n.mode=30;break}n.offset=j,n.extra=15&A,n.mode=24;case 24:if(n.extra){for(I=n.extra;x<I;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}n.offset+=b&(1<<n.extra)-1,b>>>=n.extra,x-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg=`invalid distance too far back`,n.mode=30;break}n.mode=25;case 25:if(y===0)break e;if(E=C-y,n.offset>E){if((E=n.offset-E)>n.whave&&n.sane){e.msg=`invalid distance too far back`,n.mode=30;break}D=E>n.wnext?(E-=n.wnext,n.wsize-E):n.wnext-E,E>n.length&&(E=n.length),O=n.window}else O=m,D=_-n.offset,E=n.length;for(y<E&&(E=y),y-=E,n.length-=E;m[_++]=O[D++],--E;);n.length===0&&(n.mode=21);break;case 26:if(y===0)break e;m[_++]=n.length,y--,n.mode=21;break;case 27:if(n.wrap){for(;x<32;){if(v===0)break e;v--,b|=p[g++]<<x,x+=8}if(C-=y,e.total_out+=C,n.total+=C,C&&(e.adler=n.check=n.flags?a(n.check,m,C,_-C):i(n.check,m,C,_-C)),C=y,(n.flags?b:h(b))!==n.check){e.msg=`incorrect data check`,n.mode=30;break}x=b=0}n.mode=28;case 28:if(n.wrap&&n.flags){for(;x<32;){if(v===0)break e;v--,b+=p[g++]<<x,x+=8}if(b!==(4294967295&n.total)){e.msg=`incorrect length check`,n.mode=30;break}x=b=0}n.mode=29;case 29:P=1;break e;case 30:P=-3;break e;case 31:return-4;case 32:default:return d}return e.next_out=_,e.avail_out=y,e.next_in=g,e.avail_in=v,n.hold=b,n.bits=x,(n.wsize||C!==e.avail_out&&n.mode<30&&(n.mode<27||t!==4))&&T(e,e.output,e.next_out,C-e.avail_out)?(n.mode=31,-4):(S-=e.avail_in,C-=e.avail_out,e.total_in+=S,e.total_out+=C,n.total+=C,n.wrap&&C&&(e.adler=n.check=n.flags?a(n.check,m,C,e.next_out-C):i(n.check,m,C,e.next_out-C)),e.data_type=n.bits+(n.last?64:0)+(n.mode===12?128:0)+(n.mode===20||n.mode===15?256:0),(S==0&&C===0||t===4)&&P===u&&(P=-5),P)},n.inflateEnd=function(e){if(!e||!e.state)return d;var t=e.state;return t.window&&=null,e.state=null,u},n.inflateGetHeader=function(e,t){var n;return e&&e.state&&2&(n=e.state).wrap?((n.head=t).done=!1,u):d},n.inflateSetDictionary=function(e,t){var n,r=t.length;return e&&e.state?(n=e.state).wrap!==0&&n.mode!==11?d:n.mode===11&&i(1,t,r,0)!==n.check?-3:T(e,t,r,r)?(n.mode=31,-4):(n.havedict=1,u):d},n.inflateInfo=`pako inflate (from Nodeca project)`},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,t,n){var r=e(`../utils/common`),i=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],o=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],s=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];t.exports=function(e,t,n,c,l,u,d,f){var p,m,h,g,_,v,y,b,x,S=f.bits,C=0,w=0,T=0,E=0,D=0,O=0,k=0,A=0,j=0,M=0,ee=null,te=0,N=new r.Buf16(16),P=new r.Buf16(16),F=null,I=0;for(C=0;C<=15;C++)N[C]=0;for(w=0;w<c;w++)N[t[n+w]]++;for(D=S,E=15;1<=E&&N[E]===0;E--);if(E<D&&(D=E),E===0)return l[u++]=20971520,l[u++]=20971520,f.bits=1,0;for(T=1;T<E&&N[T]===0;T++);for(D<T&&(D=T),C=A=1;C<=15;C++)if(A<<=1,(A-=N[C])<0)return-1;if(0<A&&(e===0||E!==1))return-1;for(P[1]=0,C=1;C<15;C++)P[C+1]=P[C]+N[C];for(w=0;w<c;w++)t[n+w]!==0&&(d[P[t[n+w]]++]=w);if(v=e===0?(ee=F=d,19):e===1?(ee=i,te-=257,F=a,I-=257,256):(ee=o,F=s,-1),C=T,_=u,k=w=M=0,h=-1,g=(j=1<<(O=D))-1,e===1&&852<j||e===2&&592<j)return 1;for(;;){for(y=C-k,x=d[w]<v?(b=0,d[w]):d[w]>v?(b=F[I+d[w]],ee[te+d[w]]):(b=96,0),p=1<<C-k,T=m=1<<O;l[_+(M>>k)+(m-=p)]=y<<24|b<<16|x|0,m!==0;);for(p=1<<C-1;M&p;)p>>=1;if(p===0?M=0:(M&=p-1,M+=p),w++,--N[C]==0){if(C===E)break;C=t[n+d[w]]}if(D<C&&(M&g)!==h){for(k===0&&(k=D),_+=T,A=1<<(O=C-k);O+k<E&&!((A-=N[O+k])<=0);)O++,A<<=1;if(j+=1<<O,e===1&&852<j||e===2&&592<j)return 1;l[h=M&g]=D<<24|O<<16|_-u|0}}return M!==0&&(l[_+M]=C-k<<24|4194304),f.bits=D,0}},{"../utils/common":41}],51:[function(e,t,n){t.exports={2:`need dictionary`,1:`stream end`,0:``,"-1":`file error`,"-2":`stream error`,"-3":`data error`,"-4":`insufficient memory`,"-5":`buffer error`,"-6":`incompatible version`}},{}],52:[function(e,t,n){var r=e(`../utils/common`),i=0,a=1;function o(e){for(var t=e.length;0<=--t;)e[t]=0}var s=0,c=29,l=256,u=l+1+c,d=30,f=19,p=2*u+1,m=15,h=16,g=7,_=256,v=16,y=17,b=18,x=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],S=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],C=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],w=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],T=Array(2*(u+2));o(T);var E=Array(2*d);o(E);var D=Array(512);o(D);var O=Array(256);o(O);var k=Array(c);o(k);var A,j,M,ee=Array(d);function te(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}function N(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function P(e){return e<256?D[e]:D[256+(e>>>7)]}function F(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function I(e,t,n){e.bi_valid>h-n?(e.bi_buf|=t<<e.bi_valid&65535,F(e,e.bi_buf),e.bi_buf=t>>h-e.bi_valid,e.bi_valid+=n-h):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)}function L(e,t,n){I(e,n[2*t],n[2*t+1])}function R(e,t){for(var n=0;n|=1&e,e>>>=1,n<<=1,0<--t;);return n>>>1}function ne(e,t,n){var r,i,a=Array(m+1),o=0;for(r=1;r<=m;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=t;i++){var s=e[2*i+1];s!==0&&(e[2*i]=R(a[s]++,s))}}function re(e){var t;for(t=0;t<u;t++)e.dyn_ltree[2*t]=0;for(t=0;t<d;t++)e.dyn_dtree[2*t]=0;for(t=0;t<f;t++)e.bl_tree[2*t]=0;e.dyn_ltree[2*_]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function ie(e){8<e.bi_valid?F(e,e.bi_buf):0<e.bi_valid&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function ae(e,t,n,r){var i=2*t,a=2*n;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]}function oe(e,t,n){for(var r=e.heap[n],i=n<<1;i<=e.heap_len&&(i<e.heap_len&&ae(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!ae(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r}function z(e,t,n){var r,i,a,o,s=0;if(e.last_lit!==0)for(;r=e.pending_buf[e.d_buf+2*s]<<8|e.pending_buf[e.d_buf+2*s+1],i=e.pending_buf[e.l_buf+s],s++,r===0?L(e,i,t):(L(e,(a=O[i])+l+1,t),(o=x[a])!==0&&I(e,i-=k[a],o),L(e,a=P(--r),n),(o=S[a])!==0&&I(e,r-=ee[a],o)),s<e.last_lit;);L(e,_,t)}function se(e,t){var n,r,i,a=t.dyn_tree,o=t.stat_desc.static_tree,s=t.stat_desc.has_stree,c=t.stat_desc.elems,l=-1;for(e.heap_len=0,e.heap_max=p,n=0;n<c;n++)a[2*n]===0?a[2*n+1]=0:(e.heap[++e.heap_len]=l=n,e.depth[n]=0);for(;e.heap_len<2;)a[2*(i=e.heap[++e.heap_len]=l<2?++l:0)]=1,e.depth[i]=0,e.opt_len--,s&&(e.static_len-=o[2*i+1]);for(t.max_code=l,n=e.heap_len>>1;1<=n;n--)oe(e,a,n);for(i=c;n=e.heap[1],e.heap[1]=e.heap[e.heap_len--],oe(e,a,1),r=e.heap[1],e.heap[--e.heap_max]=n,e.heap[--e.heap_max]=r,a[2*i]=a[2*n]+a[2*r],e.depth[i]=(e.depth[n]>=e.depth[r]?e.depth[n]:e.depth[r])+1,a[2*n+1]=a[2*r+1]=i,e.heap[1]=i++,oe(e,a,1),2<=e.heap_len;);e.heap[--e.heap_max]=e.heap[1],function(e,t){var n,r,i,a,o,s,c=t.dyn_tree,l=t.max_code,u=t.stat_desc.static_tree,d=t.stat_desc.has_stree,f=t.stat_desc.extra_bits,h=t.stat_desc.extra_base,g=t.stat_desc.max_length,_=0;for(a=0;a<=m;a++)e.bl_count[a]=0;for(c[2*e.heap[e.heap_max]+1]=0,n=e.heap_max+1;n<p;n++)g<(a=c[2*c[2*(r=e.heap[n])+1]+1]+1)&&(a=g,_++),c[2*r+1]=a,l<r||(e.bl_count[a]++,o=0,h<=r&&(o=f[r-h]),s=c[2*r],e.opt_len+=s*(a+o),d&&(e.static_len+=s*(u[2*r+1]+o)));if(_!==0){do{for(a=g-1;e.bl_count[a]===0;)a--;e.bl_count[a]--,e.bl_count[a+1]+=2,e.bl_count[g]--,_-=2}while(0<_);for(a=g;a!==0;a--)for(r=e.bl_count[a];r!==0;)l<(i=e.heap[--n])||(c[2*i+1]!==a&&(e.opt_len+=(a-c[2*i+1])*c[2*i],c[2*i+1]=a),r--)}}(e,t),ne(a,l,e.bl_count)}function B(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=t[2*(r+1)+1],++s<c&&i===o||(s<l?e.bl_tree[2*i]+=s:i===0?s<=10?e.bl_tree[2*y]++:e.bl_tree[2*b]++:(i!==a&&e.bl_tree[2*i]++,e.bl_tree[2*v]++),a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4))}function ce(e,t,n){var r,i,a=-1,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(i=o,o=t[2*(r+1)+1],!(++s<c&&i===o)){if(s<l)for(;L(e,i,e.bl_tree),--s!=0;);else i===0?s<=10?(L(e,y,e.bl_tree),I(e,s-3,3)):(L(e,b,e.bl_tree),I(e,s-11,7)):(i!==a&&(L(e,i,e.bl_tree),s--),L(e,v,e.bl_tree),I(e,s-3,2));a=i,l=(s=0)===o?(c=138,3):i===o?(c=6,3):(c=7,4)}}o(ee);var V=!1;function le(e,t,n,i){I(e,(s<<1)+ +!!i,3),function(e,t,n,i){ie(e),i&&(F(e,n),F(e,~n)),r.arraySet(e.pending_buf,e.window,t,n,e.pending),e.pending+=n}(e,t,n,!0)}n._tr_init=function(e){V||=(function(){var e,t,n,r,i,a=Array(m+1);for(r=n=0;r<c-1;r++)for(k[r]=n,e=0;e<1<<x[r];e++)O[n++]=r;for(O[n-1]=r,r=i=0;r<16;r++)for(ee[r]=i,e=0;e<1<<S[r];e++)D[i++]=r;for(i>>=7;r<d;r++)for(ee[r]=i<<7,e=0;e<1<<S[r]-7;e++)D[256+ i++]=r;for(t=0;t<=m;t++)a[t]=0;for(e=0;e<=143;)T[2*e+1]=8,e++,a[8]++;for(;e<=255;)T[2*e+1]=9,e++,a[9]++;for(;e<=279;)T[2*e+1]=7,e++,a[7]++;for(;e<=287;)T[2*e+1]=8,e++,a[8]++;for(ne(T,u+1,a),e=0;e<d;e++)E[2*e+1]=5,E[2*e]=R(e,5);A=new te(T,x,l+1,u,m),j=new te(E,S,0,d,m),M=new te([],C,0,f,g)}(),!0),e.l_desc=new N(e.dyn_ltree,A),e.d_desc=new N(e.dyn_dtree,j),e.bl_desc=new N(e.bl_tree,M),e.bi_buf=0,e.bi_valid=0,re(e)},n._tr_stored_block=le,n._tr_flush_block=function(e,t,n,r){var o,s,c=0;0<e.level?(e.strm.data_type===2&&(e.strm.data_type=function(e){var t,n=4093624447;for(t=0;t<=31;t++,n>>>=1)if(1&n&&e.dyn_ltree[2*t]!==0)return i;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return a;for(t=32;t<l;t++)if(e.dyn_ltree[2*t]!==0)return a;return i}(e)),se(e,e.l_desc),se(e,e.d_desc),c=function(e){var t;for(B(e,e.dyn_ltree,e.l_desc.max_code),B(e,e.dyn_dtree,e.d_desc.max_code),se(e,e.bl_desc),t=f-1;3<=t&&e.bl_tree[2*w[t]+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),o=e.opt_len+3+7>>>3,(s=e.static_len+3+7>>>3)<=o&&(o=s)):o=s=n+5,n+4<=o&&t!==-1?le(e,t,n,r):e.strategy===4||s===o?(I(e,2+ +!!r,3),z(e,T,E)):(I(e,4+ +!!r,3),function(e,t,n,r){var i;for(I(e,t-257,5),I(e,n-1,5),I(e,r-4,4),i=0;i<r;i++)I(e,e.bl_tree[2*w[i]+1],3);ce(e,e.dyn_ltree,t-1),ce(e,e.dyn_dtree,n-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),z(e,e.dyn_ltree,e.dyn_dtree)),re(e),r&&ie(e)},n._tr_tally=function(e,t,n){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&n,e.last_lit++,t===0?e.dyn_ltree[2*n]++:(e.matches++,t--,e.dyn_ltree[2*(O[n]+l+1)]++,e.dyn_dtree[2*P(t)]++),e.last_lit===e.lit_bufsize-1},n._tr_align=function(e){I(e,2,3),L(e,_,T),function(e){e.bi_valid===16?(F(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":41}],53:[function(e,t,n){t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg=``,this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,t,n){(function(e){(function(e,t){if(!e.setImmediate){var n,r,i,a,o=1,s={},c=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,n={}.toString.call(e.process)===`[object process]`?function(e){process.nextTick(function(){f(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage(``,`*`),e.onmessage=n,t}}()?(a=`setImmediate$`+Math.random()+`$`,e.addEventListener?e.addEventListener(`message`,p,!1):e.attachEvent(`onmessage`,p),function(t){e.postMessage(a+t,`*`)}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},function(e){i.port2.postMessage(e)}):l&&`onreadystatechange`in l.createElement(`script`)?(r=l.documentElement,function(e){var t=l.createElement(`script`);t.onreadystatechange=function(){f(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):function(e){setTimeout(f,0,e)},u.setImmediate=function(e){typeof e!=`function`&&(e=Function(``+e));for(var t=Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];return s[o]={callback:e,args:t},n(o),o++},u.clearImmediate=d}function d(e){delete s[e]}function f(e){if(c)setTimeout(f,0,e);else{var n=s[e];if(n){c=!0;try{(function(e){var n=e.callback,r=e.args;switch(r.length){case 0:n();break;case 1:n(r[0]);break;case 2:n(r[0],r[1]);break;case 3:n(r[0],r[1],r[2]);break;default:n.apply(t,r)}})(n)}finally{d(e),c=!1}}}}function p(t){t.source===e&&typeof t.data==`string`&&t.data.indexOf(a)===0&&f(+t.data.slice(a.length))}})(typeof self>`u`?e===void 0?this:e:self)}).call(this,typeof global<`u`?global:typeof self<`u`?self:typeof window<`u`?window:{})},{}]},{},[10])(10)})}))(),1);async function pu(e){let t=await e.arrayBuffer(),n=await crypto.subtle.digest(`SHA-256`,t);return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}async function mu(e){let t;try{t=await fu.default.loadAsync(e)}catch{throw Error(`The file is not a readable zip archive.`)}let n=Object.values(t.files).filter(e=>!e.dir);for(let e of n){let t=e.name.replace(/\\/g,`/`);if(t.startsWith(`/`)||t.includes(`../`)||/^[A-Za-z]:/.test(t))throw Error(`The archive contains an unsafe path: ${e.name}`)}let r=t.file(Ul);if(!r)throw Error(`The archive has no ${Ul} at its root — export the package from the Comet editor (Package Manager → Export package…).`);let{manifest:i,errors:a}=Xl(await r.async(`string`)),o=async e=>{let n=t.file(e);return n?n.async(`string`):``},s=await o(`README.md`),c=await o(`CHANGELOG.md`);return{manifest:i,manifestErrors:a,readme:s,changelog:c,versionChangelog:i?.version?Zl(c,i.version):``,sha256:await pu(e),fileCount:n.length}}async function hu(e,t){let n=(t||`#account`).replace(/^#account\/?/,``).split(`/`).filter(Boolean);if(!nl()){e.innerHTML=`
      <section class="mp-section">
        <div class="container mp-narrow">
          <div class="mp-auth-card">
            <i class="fas fa-plug-circle-xmark"></i>
            <h2>Backend not configured</h2>
            <p>The marketplace backend (Supabase) is not connected yet, so accounts and publishing are disabled.
               Follow the steps in <code>MARKETPLACE_SETUP.md</code> to enable it.</p>
            <a href="/marketplace" class="download-btn" style="font-size: 1rem;">Browse the demo Marketplace</a>
          </div>
        </div>
      </section>
    `;return}let r=await il();if(!r){_u(e);return}if(n[0]===`admin`)await wu(e,r,n[1]?decodeURIComponent(n[1]):null);else if(n[0]===`new`)await Cu(e,r,null);else if(n[0]===`edit`&&n[1]){let t=await gu(e,r,n[1]);t&&xu(e,r,t)}else if(n[0]===`version`&&n[1]){let t=await gu(e,r,n[1]);t&&await Cu(e,r,t)}else await vu(e,r)}async function gu(e,t,n){let r=await Sl(decodeURIComponent(n));return!r||r.owner_id!==t.id?(e.innerHTML=`
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Package not found, or you are not its owner.</p></div>
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
      </div></section>
    `,null):r}function _u(e){e.innerHTML=`
    <section class="mp-section">
      <div class="container mp-narrow">
        <div class="mp-auth-card">
          <i class="fas fa-cubes"></i>
          <h2>Publish on the Comet Marketplace</h2>
          <p>Sign in to upload your own add-ons, manage your packages and publish new versions. It's free.</p>
          <button class="download-btn" id="acc-google-btn" style="font-size: 1rem;">
            <i class="fab fa-google"></i> Sign in with Google
          </button>
        </div>
      </div>
    </section>
  `,e.querySelector(`#acc-google-btn`).addEventListener(`click`,async()=>{try{await ol()}catch(e){Q(`Sign-in failed: ${e.message}`,`error`)}}),window.addEventListener(`auth-changed`,function t(n){window.removeEventListener(`auth-changed`,t),n.detail.user&&st().startsWith(`#account`)&&hu(e,st())})}async function vu(e,t){let n=t.user_metadata||{},r=n.full_name||n.name||t.email||`Account`,i=await dl(),a=await ul();e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        <div class="acc-header">
          <div class="acc-identity">
            ${n.avatar_url?`<img src="${Z(n.avatar_url)}" alt="" referrerpolicy="no-referrer">`:`<i class="fas fa-user-circle"></i>`}
            <div>
              <h1>${Z(r)} ${i?`<span class="mp-badge mp-badge-accent" style="vertical-align: middle;"><i class="fas fa-shield-halved"></i> Admin</span>`:``}</h1>
              <p>${Z(t.email||``)}</p>
            </div>
          </div>
          <a href="/account/new" class="download-btn" style="font-size: 1rem;"><i class="fas fa-upload"></i> Upload New Package</a>
        </div>
        ${i?`
          <div class="adm-banner">
            <span><i class="fas fa-shield-halved"></i> You are an <strong>admin</strong> — you can moderate every package on the marketplace.</span>
            <a href="/account/admin" class="filter-btn"><i class="fas fa-list-check"></i> Manage all packages</a>
          </div>
        `:``}
        <div class="acc-bio-row">
          <input type="text" id="acc-bio" class="search-box" maxlength="200"
                 placeholder="Public publisher bio (shown on your publisher page)..."
                 value="${Z(a?.bio||``)}">
          <button class="filter-btn" id="acc-bio-save"><i class="fas fa-floppy-disk"></i> Save bio</button>
        </div>
        <h2 class="acc-section-title">My Packages</h2>
        <div id="acc-list"><div class="loading">Loading your packages...</div></div>
      </div>
    </section>
  `,e.querySelector(`#acc-bio-save`).addEventListener(`click`,async n=>{let r=n.currentTarget;r.disabled=!0;try{await _l(t.id,e.querySelector(`#acc-bio`).value.trim()||null),Q(`Bio saved.`,`success`)}catch(e){Q(`Could not save the bio: ${e.message}`,`error`)}r.disabled=!1});let o=e.querySelector(`#acc-list`);try{let n=await bl(t.id);if(n.length===0){o.innerHTML=`
        <div class="mp-empty">
          <i class="fas fa-box-open"></i>
          <p>You haven't published any packages yet.</p>
          <a href="/account/new" class="download-btn" style="font-size: 1rem; margin-top: 1rem;">Upload your first package</a>
        </div>
      `;return}o.innerHTML=n.map(e=>`
      <div class="acc-pkg-block" data-id="${Z(e.id)}">
        <div class="acc-pkg-row">
          <div class="acc-pkg-info">
            ${e.icon_url?`<img src="${Z(e.icon_url)}" alt="">`:`<div class="mp-card-icon-fallback acc-pkg-icon-fallback"><i class="fas fa-cube"></i></div>`}
            <div>
              <strong>${Z(e.name)}</strong>
              <div class="acc-pkg-meta">
                <span class="mp-badge ${e.status===`published`?`mp-badge-green`:`mp-badge-dim`}">${e.status===`published`?`Published`:`Draft (hidden)`}</span>
                ${e.deprecated?`<span class="mp-badge mp-badge-warn">Deprecated</span>`:``}
                <span><i class="fas fa-tag"></i> v${Z(e.latest_version||`—`)}</span>
                <span><i class="fas fa-download"></i> ${Jc(e.download_count)}</span>
                <span>Updated ${Yc(e.updated_at)}</span>
              </div>
            </div>
          </div>
          <div class="acc-pkg-actions">
            <a class="filter-btn" href="/marketplace/${encodeURIComponent(e.slug)}" title="View public page"><i class="fas fa-eye"></i></a>
            <a class="filter-btn" href="/account/version/${encodeURIComponent(e.id)}" title="Publish new version"><i class="fas fa-circle-up"></i> New version</a>
            <a class="filter-btn" href="/account/edit/${encodeURIComponent(e.id)}" title="Edit presentation"><i class="fas fa-pen"></i> Edit</a>
            <button class="filter-btn acc-expand" title="Versions and stats"><i class="fas fa-chart-line"></i> Manage</button>
            <button class="filter-btn acc-toggle-status" title="${e.status===`published`?`Hide from the marketplace`:`Make public`}">
              ${e.status===`published`?`<i class="fas fa-eye-slash"></i> Unpublish`:`<i class="fas fa-globe"></i> Publish`}
            </button>
            <button class="filter-btn acc-delete" title="Delete package"><i class="fas fa-trash"></i></button>
          </div>
        </div>
        <div class="acc-pkg-details" hidden></div>
      </div>
    `).join(``),o.querySelectorAll(`.acc-pkg-block`).forEach(r=>{let i=n.find(e=>String(e.id)===r.dataset.id);r.querySelector(`.acc-toggle-status`).addEventListener(`click`,async n=>{let r=n.currentTarget;r.disabled=!0;try{let n=i.status===`published`?`draft`:`published`;await zl(i.id,n),Q(n===`published`?`"${i.name}" is now public.`:`"${i.name}" is now hidden.`,`success`),vu(e,t)}catch(e){r.disabled=!1,Q(`Could not change status: ${e.message}`,`error`)}}),r.querySelector(`.acc-delete`).addEventListener(`click`,async n=>{if(!confirm(`Delete "${i.name}" permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.`))return;let r=n.currentTarget;r.disabled=!0;try{await Bl(i),Q(`"${i.name}" was deleted.`,`success`),vu(e,t)}catch(e){r.disabled=!1,Q(`Delete failed: ${e.message}`,`error`)}}),r.querySelector(`.acc-expand`).addEventListener(`click`,async()=>{let n=r.querySelector(`.acc-pkg-details`);if(!n.hidden){n.hidden=!0;return}n.hidden=!1,n.innerHTML=`<div class="loading">Loading versions and stats...</div>`,await bu(n,e,t,i)})})}catch(e){o.innerHTML=`<div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Error loading packages: ${Z(e.message)}</p></div>`}}function yu(e){if(!e||e.length===0)return`<p class="acc-spark-empty">No downloads in the last 30 days.</p>`;let t=e.map(e=>Number(e.downloads)||0),n=Math.max(...t,1),r=t.length>1?320/(t.length-1):320,i=t.map((e,t)=>`${(t*r).toFixed(1)},${(48-e/n*44-2).toFixed(1)}`).join(` `),a=t.reduce((e,t)=>e+t,0);return`
    <div class="acc-spark">
      <svg viewBox="0 0 320 48" preserveAspectRatio="none" aria-hidden="true">
        <polyline points="${i}" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>
      <span>${a} download${a===1?``:`s`} · last ${e.length} day${e.length===1?``:`s`}</span>
    </div>
  `}async function bu(e,t,n,r){let i=[],a=[];try{[i,a]=await Promise.all([Cl(r.id),Dl(r.id,30)])}catch(t){e.innerHTML=`<div class="form-error">${Z(t.message)}</div>`;return}e.innerHTML=`
    ${yu(a)}
    <div class="acc-pkg-deprecate">
      <button class="filter-btn" id="acc-pkg-deprecate-btn">
        ${r.deprecated?`<i class="fas fa-rotate-left"></i> Un-deprecate package`:`<i class="fas fa-ban"></i> Deprecate package`}
      </button>
      ${r.deprecated&&r.deprecated_message?`<span class="acc-deprecate-msg">${Z(r.deprecated_message)}</span>`:``}
    </div>
    <table class="pub-deps-table acc-versions-table">
      <thead><tr><th>Version</th><th>Published</th><th>Downloads</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${i.map(e=>`
          <tr data-version-id="${Z(e.id)}">
            <td>${e.deprecated?`<s>v${Z(e.version)}</s>`:`v${Z(e.version)}`}</td>
            <td>${Yc(e.created_at)}</td>
            <td>${Jc(e.download_count)}</td>
            <td>${e.deprecated?`<span class="mp-badge mp-badge-warn" title="${Z(e.deprecated_message||``)}">Deprecated</span>`:`<span class="mp-badge mp-badge-green">Active</span>`}</td>
            <td><button class="filter-btn acc-ver-deprecate">${e.deprecated?`Un-deprecate`:`Deprecate`}</button></td>
          </tr>
        `).join(``)}
      </tbody>
    </table>
  `,e.querySelector(`#acc-pkg-deprecate-btn`).addEventListener(`click`,async e=>{let i=e.currentTarget;i.disabled=!0;try{if(r.deprecated)await Ll(r.id,!1,null),Q(`"${r.name}" is no longer deprecated.`,`success`);else{let e=prompt(`Deprecate "${r.name}"?\n\nOptional message shown to users (e.g. "Superseded by acme-ui-kit-2"):`);if(e===null){i.disabled=!1;return}await Ll(r.id,!0,e.trim()||null),Q(`"${r.name}" is now deprecated.`,`success`)}vu(t,n)}catch(e){i.disabled=!1,Q(`Could not change the deprecation: ${e.message}`,`error`)}}),e.querySelectorAll(`.acc-ver-deprecate`).forEach(a=>{a.addEventListener(`click`,async a=>{let o=a.currentTarget.closest(`tr`),s=i.find(e=>String(e.id)===o.dataset.versionId);if(s){a.currentTarget.disabled=!0;try{if(s.deprecated)await Il(s.id,!1,null),Q(`v${s.version} is active again.`,`success`);else{let e=prompt(`Deprecate v${s.version}?\n\nOptional message shown to users:`);if(e===null){a.currentTarget.disabled=!1;return}await Il(s.id,!0,e.trim()||null),Q(`v${s.version} is now deprecated.`,`success`)}await bu(e,t,n,r)}catch(e){a.currentTarget.disabled=!1,Q(`Could not change the deprecation: ${e.message}`,`error`)}}})})}function xu(e,t,n){let r=[...n.screenshots||[]],i=!1,a=()=>{let o=e.querySelector(`#f-category`)?.value,s=e.querySelector(`#f-tags`)?.value;e.innerHTML=`
      <section class="mp-section">
        <div class="container mp-narrow">
          <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
          <h1 class="acc-form-title">Edit "${Z(n.name)}"</h1>
          <p class="acc-form-subtitle">
            Presentation and media management for your package.
          </p>

          <form id="pkg-form" class="mp-form" novalidate>
            <h3 class="form-section-title"><i class="fas fa-sliders"></i> Presentation</h3>
            <div class="form-row">
              <div class="form-field">
                <label for="f-category">Category <span class="req">*</span></label>
                <select id="f-category" required>
                  ${$c.map(e=>`<option value="${Z(e)}" ${(o?o===e:n.category===e)?`selected`:``}>${Z(e)}</option>`).join(``)}
                </select>
              </div>
              <div class="form-field">
                <label for="f-tags">Tags</label>
                <div class="form-help">Comma-separated, up to 8.</div>
                <input type="text" id="f-tags" placeholder="particles, vfx, 2d" value="${Z(s===void 0?(n.tags||[]).join(`, `):s)}">
              </div>
            </div>

            <div class="form-field">
              <label>Icon</label>
              <div class="form-help">Square image, PNG/JPG, max 4 MB.</div>
              ${n.icon_url&&!i?`
                <div class="edit-icon-preview">
                  <img src="${n.icon_url}" class="edit-icon-img" alt="Current icon">
                  <button type="button" class="filter-btn acc-delete" id="remove-icon-btn"><i class="fas fa-trash-can"></i> Remove current icon</button>
                </div>
              `:``}
              <input type="file" id="f-icon" accept="image/png,image/jpeg,image/webp,image/gif">
            </div>

            <div class="form-field">
              <label>Screenshots</label>
              <div class="form-help">Manage current screenshots (drag to reorder) or upload new ones. Max 6 total.</div>
              <div class="edit-media-preview" id="shot-preview-list">
                ${r.map((e,t)=>`
                  <div class="edit-media-item" draggable="true" data-idx="${t}">
                    <img src="${e}" alt="Screenshot">
                    <button type="button" class="edit-media-delete" title="Delete screenshot"><i class="fas fa-times"></i></button>
                  </div>
                `).join(``)}
              </div>
              <input type="file" id="f-shots" accept="image/png,image/jpeg,image/webp,image/gif" multiple>
            </div>

            <div class="form-error" id="form-error" hidden></div>

            <div class="form-actions">
              <button type="submit" class="download-btn" id="form-submit" style="font-size: 1.05rem;">
                <i class="fas fa-floppy-disk"></i> Save changes
              </button>
              <a href="/account" class="filter-btn" style="padding: 0.85rem 1.5rem;">Cancel</a>
            </div>
          </form>
        </div>
      </section>
    `;let c=e.querySelector(`#pkg-form`),l=e.querySelector(`#form-error`),u=e.querySelector(`#form-submit`),d=e.querySelector(`#remove-icon-btn`),f=e.querySelector(`#shot-preview-list`);d&&d.addEventListener(`click`,()=>{i=!0,a()}),f.querySelectorAll(`.edit-media-delete`).forEach(e=>{e.addEventListener(`click`,e=>{let t=parseInt(e.currentTarget.closest(`.edit-media-item`).dataset.idx);r.splice(t,1),a()})});let p=null;f.querySelectorAll(`.edit-media-item`).forEach(e=>{e.addEventListener(`dragstart`,()=>{p=e,setTimeout(()=>e.classList.add(`dragging`),0)}),e.addEventListener(`dragend`,()=>{e.classList.remove(`dragging`),p=null,r=Array.from(f.querySelectorAll(`.edit-media-item`)).map(e=>r[parseInt(e.dataset.idx)]),a()}),e.addEventListener(`dragover`,e=>{e.preventDefault();let t=e.currentTarget;if(t&&t!==p){let n=t.getBoundingClientRect(),r=n.left+n.width/2;e.clientX<r?f.insertBefore(p,t):f.insertBefore(p,t.nextSibling)}})}),c.addEventListener(`submit`,async a=>{a.preventDefault(),l.hidden=!0;try{let a=Array.from(e.querySelector(`#f-shots`).files||[]);if(r.length+a.length>6)throw Error(`Total screenshots cannot exceed 6. You current have ${r.length} and are trying to upload ${a.length}.`);let o=e.querySelector(`#f-tags`).value.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean).slice(0,8);Su(u,!0,`Saving...`);let s=[...r,...a];await Pl(t,n,{category:e.querySelector(`#f-category`).value,tags:o},{iconFile:e.querySelector(`#f-icon`).files[0]||null,removeIcon:i,newScreenshots:s}),Q(`Package updated.`,`success`),ct(`/account`)}catch(e){console.error(e),l.textContent=e.message,l.hidden=!1,Su(u,!1,`Save changes`)}})};a()}function Su(e,t,n){e.disabled=t,e.innerHTML=t?`<i class="fas fa-spinner fa-spin"></i> ${Z(n)}`:`<i class="fas fa-rocket"></i> ${Z(n)}`}async function Cu(e,t,n){let r=!!n,i=null;if(r)try{i=(await Cl(n.id))[0]||null}catch(e){console.error(e)}e.innerHTML=`
    <section class="mp-section">
      <div class="container mp-narrow">
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title">${r?`New version of "${Z(n.name)}"`:`Publish a New Package`}</h1>
        <p class="acc-form-subtitle">
          Drop the <strong>.cometpkg</strong> exported by the Comet editor (<em>Package Manager → Export package…</em>).
          Every metadata field — name, version, description, license, dependencies — is read from the
          <code>package.cometPackage</code> manifest inside the archive.
          ${r&&i?`Current latest version: <strong>v${Z(i.version)}</strong>.`:``}
        </p>

        <div class="pub-dropzone" id="pub-drop">
          <i class="fas fa-file-zipper"></i>
          <p>Upload a <strong>.cometpkg</strong> or <strong>.zip</strong> package, or drag and drop it here</p>
          <button type="button" class="download-btn" id="pub-upload-btn"><i class="fas fa-upload"></i> Upload package</button>
          <p class="pub-dropzone-hint">max 25 MB</p>
          <input type="file" id="pub-file" accept=".cometpkg,.zip,application/zip,application/x-zip-compressed" hidden>
        </div>
        <div class="form-error" id="pub-error" hidden></div>
        <div id="pub-review" hidden></div>
      </div>
    </section>
  `;let a=e.querySelector(`#pub-drop`),o=e.querySelector(`#pub-file`),s=e.querySelector(`#pub-error`),c=e.querySelector(`#pub-review`),l=e=>{s.textContent=e,s.hidden=!1,c.hidden=!0,c.innerHTML=``},u=async e=>{if(s.hidden=!0,c.hidden=!0,e){if(!/\.(cometpkg|zip)$/i.test(e.name))return l(`The package must be a .cometpkg (or .zip) archive.`);if(e.size>26214400)return l(`Maximum archive size is 25 MB (your file is ${qc(e.size)}).`);a.classList.add(`pub-dropzone-busy`);try{let a=await mu(e),o=[...a.manifestErrors],s=a.manifest;if(s&&!o.length)if(r)s.slug!==n.slug&&o.push(`The archive is the package "${s.slug}", but you are publishing a version of "${n.slug}".`),i&&Gl(s.version,i.version)<=0&&o.push(`The manifest version (${s.version}) must be higher than the current latest (v${i.version}).`);else{let e=await xl(s.slug);e&&o.push(`The slug "${s.slug}" is already taken on this registry${e.owner_id===t.id?` by one of your packages — publish a new version of it instead`:``}.`)}let c=[];if(s&&Object.keys(s.dependencies||{}).length>0){let e=Object.keys(s.dependencies),t=await El(e);c=e.filter(e=>!t.has(e))}d(e,a,o,c)}catch(e){console.error(e),l(e.message)}finally{a.classList.remove(`pub-dropzone-busy`)}}};a.addEventListener(`click`,()=>o.click()),o.addEventListener(`change`,()=>u(o.files[0])),a.addEventListener(`dragover`,e=>{e.preventDefault(),a.classList.add(`pub-dropzone-over`)}),a.addEventListener(`dragleave`,()=>a.classList.remove(`pub-dropzone-over`)),a.addEventListener(`drop`,e=>{e.preventDefault(),a.classList.remove(`pub-dropzone-over`),u(e.dataTransfer.files[0])});function d(e,i,a,o){let s=i.manifest,l=a.length>0,u=s?Kl(s.version):`release`,d=s?Object.entries(s.dependencies||{}):[];if(c.innerHTML=`
      ${l?`
        <div class="pub-problems">
          <h3><i class="fas fa-triangle-exclamation"></i> This archive cannot be published</h3>
          <ul>${a.map(e=>`<li>${Z(e)}</li>`).join(``)}</ul>
        </div>
      `:`
        <h3 class="form-section-title"><i class="fas fa-file-circle-check"></i> From the manifest (read-only)</h3>
        <div class="pub-info-card">
          <div class="pub-review-grid">
            <div class="pub-info-row"><span>Name</span><strong>${Z(s.displayName)}</strong></div>
            <div class="pub-info-row"><span>Slug</span><strong>${Z(s.slug)}</strong></div>
            <div class="pub-info-row"><span>Version</span><strong>${Z(s.version)} ${u===`release`?``:`<span class="mp-badge ${u===`pre`?`mp-badge-accent`:`mp-badge-dim`}">${u===`pre`?`Pre-release`:`Experimental`}</span>`}</strong></div>
            <div class="pub-info-row"><span>Type</span><strong>${Z(s.packageType||`package`)}</strong></div>
            <div class="pub-info-row"><span>License</span><strong>${Z(s.license||`—`)}</strong></div>
            <div class="pub-info-row"><span>Min engine</span><strong>${Z(s.minEngineVersion||`—`)}</strong></div>
            <div class="pub-info-row"><span>Author</span><strong>${Z(s.author?.name||`—`)}</strong></div>
            <div class="pub-info-row"><span>Archive</span><strong>${Z(e.name)} · ${qc(e.size)} · ${i.fileCount} files</strong></div>
          </div>
          <div class="pub-info-row pub-info-row-wide"><span>Summary</span><strong>${Z(s.summary)}</strong></div>
          <div class="pub-info-row pub-info-row-wide"><span>sha256</span><code class="pub-sha">${Z(i.sha256)}</code></div>
        </div>

        ${d.length>0?`
          <h3 class="form-section-title"><i class="fas fa-diagram-project"></i> Dependencies</h3>
          <table class="pub-deps-table">
            <thead><tr><th>Package</th><th>Range</th><th>On this registry</th></tr></thead>
            <tbody>
              ${d.map(([e,t])=>`
                <tr>
                  <td>${Z(e)}</td>
                  <td><code>${Z(t)}</code></td>
                  <td>${o.includes(e)?`<span class="mp-badge mp-badge-warn"><i class="fas fa-triangle-exclamation"></i> Missing</span>`:`<span class="mp-badge mp-badge-green"><i class="fas fa-check"></i> Found</span>`}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
          ${o.length>0?`
            <label class="pub-ack">
              <input type="checkbox" id="pub-ack-deps">
              Publish anyway — I know consumers cannot resolve ${o.length===1?`this dependency`:`these dependencies`} until ${o.length===1?`it is`:`they are`} published here.
            </label>
          `:``}
        `:``}

        ${i.versionChangelog?`
          <h3 class="form-section-title"><i class="fas fa-scroll"></i> Changelog for ${Z(s.version)} (from CHANGELOG.md)</h3>
          <div class="markdown-content pub-changelog">${Kc(i.versionChangelog)}</div>
        `:`
          <div class="form-help" style="margin: 0.75rem 0;"><i class="fas fa-circle-info"></i> The archive's CHANGELOG.md has no section for ${Z(s?.version||`this version`)}; the version will be published without a changelog.</div>
        `}

        <h3 class="form-section-title"><i class="fas fa-sliders"></i> Presentation</h3>
        <div class="form-row">
          <div class="form-field">
            <label for="pub-category">Category <span class="req">*</span></label>
            <select id="pub-category" required>
              ${$c.map(e=>`<option value="${Z(e)}" ${s.category&&s.category===e||!s.category&&e===`Other`||r&&n.category===e?`selected`:``}>${Z(e)}</option>`).join(``)}
            </select>
          </div>
          <div class="form-field">
            <label for="pub-tags">Extra tags</label>
            <div class="form-help">Added to the manifest tags (${Z((s.tags||[]).join(`, `)||`none`)}).</div>
            <input type="text" id="pub-tags" placeholder="particles, vfx" value="${Z(r?(n.tags||[]).join(`, `):``)}">
          </div>
        </div>
        ${r?``:`
          <div class="form-row">
            <div class="form-field">
              <label for="pub-icon">Icon (recommended)</label>
              <div class="form-help">Square image, PNG/JPG, max 4 MB.</div>
              <input type="file" id="pub-icon" accept="image/png,image/jpeg,image/webp,image/gif">
            </div>
            <div class="form-field">
              <label for="pub-shots">Screenshots</label>
              <div class="form-help">Up to 6 images, max 4 MB each.</div>
              <input type="file" id="pub-shots" accept="image/png,image/jpeg,image/webp,image/gif" multiple>
            </div>
          </div>
        `}

        <div class="form-error" id="pub-submit-error" hidden></div>
        <div class="form-actions">
          <button type="button" class="download-btn" id="pub-submit" style="font-size: 1.05rem;">
            <i class="fas fa-rocket"></i> ${r?`Publish v${Z(s.version)}`:`Publish package`}
          </button>
          <a href="/account" class="filter-btn" style="padding: 0.85rem 1.5rem;">Cancel</a>
        </div>
      `}
    `,c.hidden=!1,l)return;let f=c.querySelector(`#pub-submit`),p=c.querySelector(`#pub-submit-error`);f.addEventListener(`click`,async()=>{p.hidden=!0;try{if(o.length>0&&!c.querySelector(`#pub-ack-deps`)?.checked)throw Error(`Some dependencies are not on this registry yet — tick the checkbox to publish anyway.`);let a=c.querySelector(`#pub-tags`).value.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean),l=[...new Set([...(s.tags||[]).map(e=>String(e).toLowerCase()),...a])].slice(0,8),u=c.querySelector(`#pub-category`).value,d=i.versionChangelog||``;Su(f,!0,`Uploading...`),r?(await Fl(t,n,{version:s.version,changelogMd:d,zipFile:e,dependencies:s.dependencies||{},minEngineVersion:s.minEngineVersion||null,sha256:i.sha256,manifest:s,samples:s.samples||[],packageUpdates:{name:s.displayName,summary:s.summary,description_md:s.description||i.readme||s.summary,readme_md:i.readme||null,license:s.license||`See LICENSE.md`,min_engine_version:s.minEngineVersion||null,homepage_url:s.homepageUrl||null,repo_url:s.repoUrl||null,category:u,tags:l}}),Q(`v${s.version} published!`,`success`)):(await Nl(t,{name:s.displayName,slug:s.slug,summary:s.summary,descriptionMd:s.description||i.readme||s.summary,readmeMd:i.readme||null,category:u,tags:l,license:s.license||`See LICENSE.md`,homepageUrl:s.homepageUrl||null,repoUrl:s.repoUrl||null,minEngineVersion:s.minEngineVersion||null,packageType:s.packageType||`package`,status:`published`,iconFile:c.querySelector(`#pub-icon`)?.files[0]||null,screenshotFiles:Array.from(c.querySelector(`#pub-shots`)?.files||[]).slice(0,6),version:s.version,changelogMd:d,zipFile:e,dependencies:s.dependencies||{},sha256:i.sha256,manifest:s,samples:s.samples||[]}),Q(`Your package is live!`,`success`)),ct(`/account`)}catch(e){console.error(e),p.textContent=e.message,p.hidden=!1,Su(f,!1,r?`Publish v${s.version}`:`Publish package`)}})}}async function wu(e,t,n){if(!await dl()){e.innerHTML=`
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-empty"><i class="fas fa-lock"></i><p>This area is for administrators only.</p></div>
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
      </div></section>
    `;return}e.innerHTML=`<section class="mp-section"><div class="container"><div class="loading">Loading all packages...</div></div></section>`;let r;try{r=await yl()}catch(t){e.innerHTML=`<section class="mp-section"><div class="container"><div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>${Z(t.message)}</p></div></div></section>`;return}let i=new Map;for(let e of r)i.has(e.owner_id)||i.set(e.owner_id,{ownerId:e.owner_id,name:e.profiles?.display_name||`Unknown user`,avatar:e.profiles?.avatar_url||null,packages:[]}),i.get(e.owner_id).packages.push(e);n?Eu(e,t,i.get(n),n):Tu(e,i,r.length)}function Tu(e,t,n){let r=[...t.values()].sort((e,t)=>t.packages.length-e.packages.length);e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title"><i class="fas fa-shield-halved" style="color: var(--accent-color);"></i> Admin — All Packages</h1>
        <p class="acc-form-subtitle">${n} package${n===1?``:`s`} from ${r.length} publisher${r.length===1?``:`s`} (drafts included). Click a publisher to moderate their packages.</p>
        <input type="text" id="adm-filter" class="search-box" placeholder="Filter by publisher name...">
        <div id="adm-users"></div>
      </div>
    </section>
  `;let i=e.querySelector(`#adm-users`),a=e=>{let t=(e||``).toLowerCase();i.innerHTML=(t?r.filter(e=>e.name.toLowerCase().includes(t)):r).map(e=>{let t=e.packages.reduce((e,t)=>e+(t.download_count||0),0),n=e.packages.filter(e=>e.status!==`published`).length;return`
        <a class="acc-pkg-row adm-user-row" href="/account/admin/${encodeURIComponent(e.ownerId)}">
          <div class="acc-pkg-info">
            ${e.avatar?`<img src="${Z(e.avatar)}" alt="" referrerpolicy="no-referrer" style="border-radius: 50%;">`:`<div class="mp-card-icon-fallback acc-pkg-icon-fallback" style="border-radius: 50%;"><i class="fas fa-user"></i></div>`}
            <div>
              <strong>${Z(e.name)}</strong>
              <div class="acc-pkg-meta">
                <span><i class="fas fa-cube"></i> ${e.packages.length} package${e.packages.length===1?``:`s`}</span>
                ${n>0?`<span class="mp-badge mp-badge-dim">${n} draft${n===1?``:`s`}</span>`:``}
                <span><i class="fas fa-download"></i> ${Jc(t)}</span>
              </div>
            </div>
          </div>
          <span style="color: var(--text-dim);"><i class="fas fa-chevron-right"></i></span>
        </a>
      `}).join(``)||`<div class="mp-empty"><p>No publishers match that name.</p></div>`};a(``),e.querySelector(`#adm-filter`).addEventListener(`input`,e=>a(e.target.value))}function Eu(e,t,n,r){if(!n){e.innerHTML=`
      <section class="mp-section"><div class="container">
        <a href="/account/admin" class="mp-back"><i class="fas fa-arrow-left"></i> Back to all publishers</a>
        <div class="mp-empty"><p>This user has no packages (or was already cleaned up).</p></div>
      </div></section>
    `;return}e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        <a href="/account/admin" class="mp-back"><i class="fas fa-arrow-left"></i> Back to all publishers</a>
        <div class="acc-header" style="margin-bottom: 2rem;">
          <div class="acc-identity">
            ${n.avatar?`<img src="${Z(n.avatar)}" alt="" referrerpolicy="no-referrer">`:`<i class="fas fa-user-circle"></i>`}
            <div>
              <h1>${Z(n.name)}</h1>
              <p>${n.packages.length} package${n.packages.length===1?``:`s`} · admin moderation view</p>
            </div>
          </div>
        </div>
        <div id="adm-pkgs">
          ${n.packages.map(e=>`
            <div class="acc-pkg-row" data-id="${Z(e.id)}">
              <div class="acc-pkg-info">
                ${e.icon_url?`<img src="${Z(e.icon_url)}" alt="">`:`<div class="mp-card-icon-fallback acc-pkg-icon-fallback"><i class="fas fa-cube"></i></div>`}
                <div>
                  <strong>${Z(e.name)}</strong>
                  <div class="acc-pkg-meta">
                    <span class="mp-badge ${e.status===`published`?`mp-badge-green`:`mp-badge-dim`}">${e.status===`published`?`Published`:`Draft (hidden)`}</span>
                    <span><i class="fas fa-tag"></i> v${Z(e.latest_version||`—`)}</span>
                    <span><i class="fas fa-download"></i> ${Jc(e.download_count)}</span>
                    <span>Updated ${Yc(e.updated_at)}</span>
                  </div>
                </div>
              </div>
              <div class="acc-pkg-actions">
                <a class="filter-btn" href="/marketplace/${encodeURIComponent(e.slug)}" title="View public page"><i class="fas fa-eye"></i> View</a>
                <button class="filter-btn adm-toggle-status">
                  ${e.status===`published`?`<i class="fas fa-eye-slash"></i> Unpublish`:`<i class="fas fa-globe"></i> Publish`}
                </button>
                <button class="filter-btn acc-delete adm-delete"><i class="fas fa-trash"></i> Delete</button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>
  `,e.querySelectorAll(`#adm-pkgs .acc-pkg-row`).forEach(i=>{let a=n.packages.find(e=>String(e.id)===i.dataset.id);i.querySelector(`.adm-toggle-status`).addEventListener(`click`,async n=>{let i=n.currentTarget;i.disabled=!0;try{let n=a.status===`published`?`draft`:`published`;await zl(a.id,n),Q(n===`published`?`"${a.name}" is now public.`:`"${a.name}" is now hidden.`,`success`),wu(e,t,r)}catch(e){i.disabled=!1,Q(`Could not change status: ${e.message}`,`error`)}}),i.querySelector(`.adm-delete`).addEventListener(`click`,async i=>{if(!confirm(`Delete "${a.name}" by ${n.name} permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.`))return;let o=i.currentTarget;o.disabled=!0;try{await Bl(a),Q(`"${a.name}" was deleted.`,`success`),wu(e,t,r)}catch(e){o.disabled=!1,Q(`Delete failed: ${e.message}`,`error`)}})})}function Du(){let e=document.getElementById(`nav-auth`);e&&(al(t=>{t&&fl(t),Ou(e,t),window.dispatchEvent(new CustomEvent(`auth-changed`,{detail:{user:t}}))}),Ou(e,null))}function Ou(e,t){if(!t){e.innerHTML=`
      <button class="nav-signin-btn" id="nav-signin">
        <i class="fab fa-google"></i><span>Sign in</span>
      </button>
    `,e.querySelector(`#nav-signin`).addEventListener(`click`,async()=>{if(!nl()){Q(`Login is not available yet: the marketplace backend is not configured. See MARKETPLACE_SETUP.md.`,`error`);return}try{await ol()}catch(e){Q(`Sign-in failed: ${e.message}`,`error`)}});return}let n=t.user_metadata||{},r=n.full_name||n.name||t.email||`Account`,i=n.avatar_url?`<img src="${Z(n.avatar_url)}" alt="" referrerpolicy="no-referrer">`:`<i class="fas fa-user"></i>`;e.innerHTML=`
    <button class="nav-avatar" id="nav-avatar" title="${Z(r)}">${i}</button>
    <div class="nav-menu" id="nav-menu" hidden>
      <div class="nav-menu-name">${Z(r)}</div>
      <a href="/account"><i class="fas fa-cubes"></i> My Packages</a>
      <a href="/account/new"><i class="fas fa-upload"></i> Upload Package</a>
      <button id="nav-signout"><i class="fas fa-right-from-bracket"></i> Sign out</button>
    </div>
  `;let a=e.querySelector(`#nav-avatar`),o=e.querySelector(`#nav-menu`);dl().then(t=>{if(!t||o.querySelector(`.nav-menu-admin`))return;let n=document.createElement(`a`);n.href=`/account/admin`,n.className=`nav-menu-admin`,n.innerHTML=`<i class="fas fa-shield-halved"></i> Admin panel`,n.addEventListener(`click`,()=>{o.hidden=!0}),o.insertBefore(n,e.querySelector(`#nav-signout`))}),a.addEventListener(`click`,e=>{e.stopPropagation(),o.hidden=!o.hidden}),document.addEventListener(`click`,()=>{o.hidden=!0}),o.addEventListener(`click`,e=>e.stopPropagation()),o.querySelectorAll(`a`).forEach(e=>e.addEventListener(`click`,()=>{o.hidden=!0})),e.querySelector(`#nav-signout`).addEventListener(`click`,async()=>{try{await sl(),Q(`Signed out.`,`success`),st().startsWith(`#account`)&&ct(`/marketplace`)}catch(e){Q(`Sign-out failed: ${e.message}`,`error`)}})}var ku=document.getElementById(`app`),Au=document.querySelectorAll(`.nav-links a`),ju=`Comet Engine — Free 2D Game Engine (C++ & AngelScript)`,Mu=document.querySelector(`meta[name="description"]`)?.getAttribute(`content`)||``,Nu=document.querySelector(`meta[property="og:image"]`)?.getAttribute(`content`)||``;function Pu(e,t,n){document.title=e||ju;let r=document.querySelector(`meta[name="description"]`);r&&r.setAttribute(`content`,t||Mu);let i=document.querySelector(`meta[property="og:title"]`);i&&i.setAttribute(`content`,e||ju);let a=document.querySelector(`meta[property="og:description"]`);a&&a.setAttribute(`content`,t||Mu);let o=document.querySelector(`meta[property="og:image"]`);o&&o.setAttribute(`content`,n||Nu);let s=document.querySelector(`meta[name="twitter:title"]`);s&&s.setAttribute(`content`,e||ju);let c=document.querySelector(`meta[name="twitter:description"]`);c&&c.setAttribute(`content`,t||Mu);let l=document.querySelector(`meta[name="twitter:image"]`);l&&l.setAttribute(`content`,n||Nu)}function Fu(){let e=window.location.hash;if(e.includes(`access_token=`)||e.includes(`error_description=`)){Iu(e);return}let t=st(),n=window.location.pathname;if(document.body.classList.toggle(`docs-active`,t.startsWith(`#docs`)||t.startsWith(`#tutorials/`)),Au.forEach(e=>{let t=e.getAttribute(`href`)||``,r=t.startsWith(`/`)&&t!==`/`&&(n===t||n.startsWith(t.replace(/\/$/,``)+`/`));e.classList.toggle(`active`,!!r)}),t===`#home`)Pu(ju,Mu),d(ku);else if(t.startsWith(`#releases`)){let e=t.replace(`#releases`,``).substring(1);Pu(`Releases — Comet Engine`,`Download the latest Comet Engine releases and read the patch notes.`),tt(ku,e)}else t.startsWith(`#tutorials`)?sr(ku,t):t.startsWith(`#docs`)?(Pu(`Documentation — Comet Engine`,`API reference and documentation for the Comet Engine 2D game engine.`),gt(ku,t)):t.startsWith(`#marketplace`)?(Pu(`Marketplace — Comet Engine`,`Browse and download assets and packages for Comet Engine.`),$l(ku,t)):t.startsWith(`#account`)?(Pu(`Account — Comet Engine`,Mu),hu(ku,t)):(Pu(ju,Mu),d(ku))}function Iu(e){if(e.includes(`error_description=`)){ku.innerHTML=`
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-auth-card">
          <i class="fas fa-triangle-exclamation"></i>
          <h2>Sign-in failed</h2>
          <p>${(new URLSearchParams(e.substring(1)).get(`error_description`)||`Unknown error`).replace(/</g,`&lt;`)}</p>
          <a href="/" class="download-btn" style="font-size: 1rem;">Back to Home</a>
        </div>
      </div></section>
    `;return}ku.innerHTML=`
    <section class="mp-section"><div class="container mp-narrow">
      <div class="mp-auth-card"><i class="fas fa-spinner fa-spin"></i><h2>Signing you in...</h2></div>
    </div></section>
  `;let t=al(e=>{e&&(t(),ct(`/account`))})}document.addEventListener(`click`,e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target.closest?.(`a`);if(!t)return;let n=t.getAttribute(`href`);!n||!n.startsWith(`/`)||n.startsWith(`//`)||t.target===`_blank`||t.hasAttribute(`download`)||t.getAttribute(`rel`)===`external`||(e.preventDefault(),ct(n))}),window.addEventListener(`popstate`,Fu),window.addEventListener(`route-change`,Fu),window.addEventListener(`load`,Fu),Du();