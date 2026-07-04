(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/InEditorView-CMpdPe2Z.png`;async function t(t){t.innerHTML=`
    <section class="hero" style="position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('${e}') center center / cover no-repeat; opacity: 0.2; z-index: 0; pointer-events: none; filter: blur(1px);"></div>
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
  `,await n(document.getElementById(`latest-release-container`))}async function n(e){try{let t=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();if(!t||t.length===0){e.innerHTML=`<p>No releases found.</p>`;return}t.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let n=t.find(e=>!e.prerelease),i=t.find(e=>e.prerelease),a=n||i,o=a.prerelease;r(),e.innerHTML=`
      <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
        <a href="/releases/${a.tag_name}" class="download-btn">
          <i class="fas fa-download"></i>
          Download ${a.tag_name} ${o?`(RC)`:``}
        </a>
        <div class="os-info">Available Editor for Windows and Linux</div>
        ${n&&i&&new Date(i.published_at)>new Date(n.published_at)?`<p style="font-size: 0.9rem; color: var(--accent-color);">New Release Candidate available: <a href="/releases/${i.tag_name}" style="text-decoration: underline;">${i.tag_name}</a></p>`:``}
      </div>
    `}catch(t){console.error(`Error fetching releases:`,t),e.innerHTML=`<p>Error loading latest release.</p>`}}function r(){let e=window.navigator.platform.toLowerCase();return e.includes(`win`)?`Windows`:e.includes(`linux`)?`Linux`:`Desktop`}function i(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var a=i();function o(e){a=e}var s={exec:()=>null};function c(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(u.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var l=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),u={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,`i`),blockquoteBeginRegex:e=>RegExp(`^ {0,${Math.min(3,e-1)}}>`)},d=/^(?:[ \t]*(?:\n|$))+/,f=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,p=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,m=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,h=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,g=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ee=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,te=c(ee).replace(/bull/g,g).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),_=c(ee).replace(/bull/g,g).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ne=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,v=/^[^\n]+/,re=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,ie=c(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,re).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ae=c(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,g).getRegex(),oe=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,se=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ce=c(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,se).replace(`tag`,oe).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),le=c(ne).replace(`hr`,m).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,oe).getRegex(),ue={blockquote:c(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,le).getRegex(),code:f,def:ie,fences:p,heading:h,hr:m,html:ce,lheading:te,list:ae,newline:d,paragraph:le,table:s,text:v},de=c(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,m).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,oe).getRegex(),fe={...ue,lheading:_,table:de,paragraph:c(ne).replace(`hr`,m).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,de).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,oe).getRegex()},pe={...ue,html:c(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,se).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:s,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:c(ne).replace(`hr`,m).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,te).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},me=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,he=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ge=/^( {2,}|\\)\n(?!\s*$)/,y=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,_e=/[\p{P}\p{S}]/u,ve=/[\s\p{P}\p{S}]/u,ye=/[^\s\p{P}\p{S}]/u,be=c(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,ve).getRegex(),xe=/(?!~)[\p{P}\p{S}]/u,Se=/(?!~)[\s\p{P}\p{S}]/u,Ce=/(?:[^\s\p{P}\p{S}]|~)/u,we=c(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,l?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Te=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,b=c(Te,`u`).replace(/punct/g,_e).getRegex(),Ee=c(Te,`u`).replace(/punct/g,xe).getRegex(),x=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,De=c(x,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,_e).getRegex(),S=c(x,`gu`).replace(/notPunctSpace/g,Ce).replace(/punctSpace/g,Se).replace(/punct/g,xe).getRegex(),Oe=c(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,_e).getRegex(),ke=c(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,_e).getRegex(),Ae=c(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,ye).replace(/punctSpace/g,ve).replace(/punct/g,_e).getRegex(),je=c(/\\(punct)/,`gu`).replace(/punct/g,_e).getRegex(),Me=c(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ne=c(se).replace(`(?:-->|$)`,`-->`).getRegex(),Pe=c(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Ne).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fe=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Ie=c(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Fe).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Le=c(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Fe).replace(`ref`,re).getRegex(),Re=c(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,re).getRegex(),ze=c(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Le).replace(`nolink`,Re).getRegex(),Be=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ve={_backpedal:s,anyPunctuation:je,autolink:Me,blockSkip:we,br:ge,code:he,del:s,delLDelim:s,delRDelim:s,emStrongLDelim:b,emStrongRDelimAst:De,emStrongRDelimUnd:Oe,escape:me,link:Ie,nolink:Re,punctuation:be,reflink:Le,reflinkSearch:ze,tag:Pe,text:y,url:s},He={...Ve,link:c(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Fe).getRegex(),reflink:c(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Fe).getRegex()},Ue={...Ve,emStrongRDelimAst:S,emStrongLDelim:Ee,delLDelim:ke,delRDelim:Ae,url:c(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Be).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:c(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Be).getRegex()},We={...Ue,br:c(ge).replace(`{2,}`,`*`).getRegex(),text:c(Ue.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Ge={normal:ue,gfm:fe,pedantic:pe},Ke={normal:Ve,gfm:Ue,breaks:We,pedantic:He},qe={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Je=e=>qe[e];function C(e,t){if(t){if(u.escapeTest.test(e))return e.replace(u.escapeReplace,Je)}else if(u.escapeTestNoEncode.test(e))return e.replace(u.escapeReplaceNoEncode,Je);return e}function Ye(e){try{e=encodeURI(e).replace(u.percentDecode,`%`)}catch{return null}return e}function Xe(e,t){let n=e.replace(u.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(u.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(u.slashPipe,`|`);return n}function Ze(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Qe(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&u.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function $e(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function et(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function tt(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function nt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var rt=class{options;rules;lexer;constructor(e){this.options=e||a}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Qe(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=nt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Ze(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Ze(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Ze(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Ze(t[0],`
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
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=et(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items){if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),e.task){if(e.text=e.text.replace(this.rules.other.listReplaceTask,``),e.tokens[0]?.type===`text`||e.tokens[0]?.type===`paragraph`){e.tokens[0].raw=e.tokens[0].raw.replace(this.rules.other.listReplaceTask,``),e.tokens[0].text=e.tokens[0].text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}}let t=this.rules.other.listTaskCheckbox.exec(e.raw);if(t){let n={type:`checkbox`,raw:t[0]+` `,checked:t[0]!==`[ ]`};e.checked=n.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=n.raw+e.tokens[0].raw,e.tokens[0].text=n.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(n)):e.tokens.unshift({type:`paragraph`,raw:n.raw,text:n.raw,tokens:[n]}):e.tokens.unshift(n)}}if(!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Qe(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Ze(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Xe(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Ze(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Xe(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Ze(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Ze(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=$e(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),tt(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return tt(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=0,c=r[0][0]===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(c.lastIndex=0,t=t.slice(-1*e.length+n);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){o+=a;continue}else if((r[5]||r[6])&&n%3&&!((n+a)%3)){s+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o+s);let t=[...r[0]][0].length,c=e.slice(0,n+r.index+t+a);if(Math.min(n,a)%2){let e=c.slice(1,-1);return{type:`em`,raw:c,text:e,tokens:this.lexer.inlineTokens(e)}}let l=c.slice(2,-2);return{type:`strong`,raw:c,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},w=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||a,this.options.tokenizer=this.options.tokenizer||new rt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:u,block:Ge.normal,inline:Ke.normal};this.options.pedantic?(t.block=Ge.pedantic,t.inline=Ke.pedantic):this.options.gfm&&(t.block=Ge.gfm,this.options.breaks?t.inline=Ke.breaks:t.inline=Ke.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ge,inline:Ke}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(u.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(u.tabCharGlobal,`    `).replace(u.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e,r=null;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(n))!==null;)e.includes(r[0].slice(r[0].lastIndexOf(`[`)+1,-1))&&(n=n.slice(0,r.index)+`[`+`a`.repeat(r[0].length-2)+`]`+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(n))!==null;)n=n.slice(0,r.index)+`++`+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let i;for(;(r=this.tokenizer.rules.inline.blockSkip.exec(n))!==null;)i=r[2]?r[2].length:0,n=n.slice(0,r.index+i)+`[`+`a`.repeat(r[0].length-i-2)+`]`+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let a=!1,o=``,s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}a||(o=``),a=!1;let r;if(this.options.extensions?.inline?.some(n=>(r=n.call({lexer:this},e,t))?(e=e.substring(r.raw.length),t.push(r),!0):!1))continue;if(r=this.tokenizer.escape(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.tag(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.link(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(r.raw.length);let n=t.at(-1);r.type===`text`&&n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(r=this.tokenizer.emStrong(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.codespan(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.br(e)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.del(e,n,o)){e=e.substring(r.raw.length),t.push(r);continue}if(r=this.tokenizer.autolink(e)){e=e.substring(r.raw.length),t.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(e))){e=e.substring(r.raw.length),t.push(r);continue}let i=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(i=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(i)){e=e.substring(r.raw.length),r.raw.slice(-1)!==`_`&&(o=r.raw.slice(-1)),a=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=r.raw,n.text+=r.text):t.push(r);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},it=class{options;parser;constructor(e){this.options=e||a}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(u.notSpaceStart)?.[0],i=e.replace(u.endingNewline,``)+`
`;return r?`<pre><code class="language-`+C(r)+`">`+(n?i:C(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:C(i,!0))+`</code></pre>
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
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${C(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Ye(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+C(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ye(e);if(i===null)return C(n);e=i;let a=`<img src="${e}" alt="${C(n)}"`;return t&&(a+=` title="${C(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:C(e.text)}},at=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},T=class e{options;renderer;textRenderer;constructor(e){this.options=e||a,this.options.renderer=this.options.renderer||new it,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new at}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},ot=class{options;block;constructor(e){this.options=e||a}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?w.lex:w.lexInline}provideParser(e=this.block){return e?T.parse:T.parseInline}},st=new class{defaults=i();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=T;Renderer=it;TextRenderer=at;Lexer=w;Tokenizer=rt;Hooks=ot;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new it(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new rt(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new ot;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];ot.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&ot.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return w.lex(e,t??this.defaults)}parser(e,t){return T.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?w.lex:w.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?T.parse:T.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?w.lex:w.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?T.parse:T.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+C(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function E(e,t){return st.parse(e,t)}E.options=E.setOptions=function(e){return st.setOptions(e),E.defaults=st.defaults,o(E.defaults),E},E.getDefaults=i,E.defaults=a,E.use=function(...e){return st.use(...e),E.defaults=st.defaults,o(E.defaults),E},E.walkTokens=function(e,t){return st.walkTokens(e,t)},E.parseInline=st.parseInline,E.Parser=T,E.parser=T.parse,E.Renderer=it,E.TextRenderer=at,E.Lexer=w,E.lexer=w.lex,E.Tokenizer=rt,E.Hooks=ot,E.parse=E,E.options,E.setOptions,E.use,E.walkTokens,E.parseInline,T.parse,w.lex,E.setOptions({gfm:!0,breaks:!0});async function ct(e,t){if(t){dt(e,t);return}e.innerHTML=`
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
  `;let n=document.getElementById(`featured-releases`),r=document.getElementById(`older-releases-list`),i=document.querySelectorAll(`.filter-btn`);try{let e=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();e.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let t=e.find(e=>!e.prerelease),a=e.find(e=>e.prerelease&&(!t||new Date(e.published_at)>new Date(t.published_at)));n.innerHTML=``,t&&n.appendChild(ut(t,`Latest Stable Release`)),a&&n.appendChild(ut(a,`Latest Release Candidate`));let o=e=>{r.innerHTML=e.map(e=>`
        <a href="/releases/${e.tag_name}" class="older-release-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1.5rem 2rem; border-bottom: 1px solid var(--border-color); transition: var(--transition);">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-weight: 600; font-size: 1.1rem;">${e.name||e.tag_name}</span>
            <span class="tag ${e.prerelease?`tag-rc`:`tag-stable`}" style="font-size: 0.7rem;">${e.prerelease?`Pre-release`:`Stable`}</span>
          </div>
          <div style="color: var(--text-dim); font-size: 0.9rem;">${new Date(e.published_at).toLocaleDateString()}</div>
        </a>
      `).join(``)||`<div style="padding: 2rem; color: var(--text-dim);">No releases found.</div>`,r.querySelectorAll(`.older-release-item`).forEach(e=>{e.onmouseenter=()=>{e.style.backgroundColor=`rgba(255, 140, 0, 0.1)`},e.onmouseleave=()=>{e.style.backgroundColor=`transparent`}})};o(e),i.forEach(t=>{t.addEventListener(`click`,()=>{i.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`);let n=t.getAttribute(`data-filter`),r=e;n===`stable`&&(r=e.filter(e=>!e.prerelease)),n===`rc`&&(r=e.filter(e=>e.prerelease)),o(r)})})}catch(e){console.error(`Error fetching releases:`,e),n.innerHTML=`<p>Error loading releases.</p>`}}function D(e){if(!e)return`No release notes provided.`;try{return E.parse(e.trim())}catch(t){return console.error(`Markdown parsing error:`,t),e.replace(/\n/g,`<br>`)}}function lt(e){if(!e)return`No release notes provided.`;let t=e.trim();t=t.replace(/^#{1,6}[^\n]*(\n|\r\n)*/,``),t=t.trim();try{return E.parse(t)}catch{return t.replace(/\n/g,`<br>`)}}function ut(e,t){let n=document.createElement(`div`);n.className=`release-card`,n.style.display=`flex`,n.style.flexDirection=`column`;let r=lt(e.body);return n.innerHTML=`
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
  `,n}async function dt(e,t){e.innerHTML=`<div class="container" style="padding: 100px 2rem;"><div class="loading">Loading release ${t}...</div></div>`;try{let n=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases/tags/${t}`)).json(),r=n.assets||[],i=r.some(e=>e.name.toLowerCase().includes(`windows`)),a=r.some(e=>e.name.toLowerCase().includes(`linux`)),o=r.some(e=>e.name.toLowerCase().includes(`mac`)),s=r.some(e=>![`windows`,`linux`,`mac`].some(t=>e.name.toLowerCase().includes(t))),c=ft(),l=`windows`;c===`linux`&&a?l=`linux`:c===`mac`&&o?l=`mac`:i?l=`windows`:a?l=`linux`:o?l=`mac`:s&&(l=`other`),e.innerHTML=`
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
                ${D(n.body)}
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
      `).join(``)||`<div style="padding: 2rem; color: var(--text-dim); grid-column: 1/-1;">No downloads found for ${e}.</div>`};f(l),d.forEach(e=>{e.addEventListener(`click`,()=>{d.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),f(e.getAttribute(`data-platform`))})})}catch(t){e.innerHTML=`<div class="container" style="padding: 100px 2rem;"><h2>Error loading release details</h2><p>${t.message}</p></div>`}}function ft(){let e=window.navigator.platform.toLowerCase();return e.includes(`win`)?`windows`:e.includes(`linux`)?`linux`:e.includes(`mac`)?`mac`:`windows`}function pt(){let e=window.location.pathname.replace(/\/+$/,``);return e===``||e===`/index.html`||e===`/home`?`#home`:`#`+e.replace(/^\//,``)}function mt(e){if(typeof e!=`string`)return;e.startsWith(`#`)&&(e=`/`+e.slice(1)),e.startsWith(`/`)||(e=`/`+e);let t=window.location.pathname.replace(/\/+$/,``)||`/`;((e.replace(/\/+$/,``)||`/`)!==t||window.location.hash)&&window.history.pushState({},``,e),window.dispatchEvent(new Event(`route-change`)),window.scrollTo(0,0)}var O=null,ht=[],gt=new Set,k=``,_t=``,vt=[];async function yt(){if(vt.length>0)return vt;try{let e=await(await fetch(`https://api.github.com/repos/OriolCS2/CometEngine/releases`)).json();e.sort((e,t)=>new Date(t.published_at)-new Date(e.published_at));let t=e.map(e=>e.tag_name),n=await Promise.all(t.map(async e=>{try{return(await fetch(`./docs/${e}/CometEngine.xml`,{method:`HEAD`})).ok?e:null}catch{return null}}));return vt=t.filter(e=>n.includes(e)&&n[t.indexOf(e)]!==null),vt.length===0&&t.length>0&&(vt=[t[0]]),_t||=vt[0],vt}catch(e){return console.error(`Error fetching versions:`,e),vt=[`2.0-rc.11`],_t=`2.0-rc.11`,vt}}window.openLightbox=e=>{let t=document.createElement(`div`);t.style.cssText=`
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
  `,t.appendChild(n),document.body.appendChild(t),setTimeout(()=>{t.style.opacity=`1`,n.style.transform=`scale(1)`},10),t.onclick=()=>{t.style.opacity=`0`,n.style.transform=`scale(0.9)`,setTimeout(()=>t.remove(),300)}};async function bt(e,t){let n=!O;n&&(e.innerHTML=`<div class="loading">Discovering versions...</div>`,await yt(),e.innerHTML=`<div class="loading">Parsing documentation...</div>`,O=await Ct(),ht=At(O));let r=decodeURIComponent(t.replace(`#docs`,``).substring(1));if(r){let e=r.split(`::`),t=``;e.forEach(e=>{t=t?`${t}::${e}`:e,gt.add(t)})}if(n||!document.getElementById(`docs-tree`))e.innerHTML=`
      <div class="docs-layout">
        <div class="docs-sidebar">
          <div class="docs-sidebar-search">
            <div style="margin-bottom: 0.75rem;">
              <label style="font-size: 0.75rem; color: var(--text-dim); text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 0.25rem;">API Version</label>
              <select id="docs-version" class="search-box" style="margin-bottom: 0;">
                ${vt.map(e=>`<option value="${e}" ${e===_t?`selected`:``}>${e}</option>`).join(``)}
              </select>
            </div>
            <input type="text" id="docs-search" class="search-box" placeholder="Search API..." style="margin-bottom: 0;">
          </div>
          <div class="docs-sidebar-tree" id="docs-tree"></div>
        </div>
        <div class="docs-content" id="docs-detail">
          ${r?Tt(r):Mt()}
        </div>
      </div>
    `,A(document.getElementById(`docs-tree`),O),xt(),St(e);else{document.getElementById(`docs-detail`).innerHTML=r?Tt(r):Mt();let e=document.getElementById(`docs-tree`);k?A(e,jt(O,k),!0):A(e,O);let t=document.getElementById(`docs-search`);t&&(t.value=k)}}function xt(){let e=document.getElementById(`docs-search`);e&&e.addEventListener(`input`,e=>{k=e.target.value.toLowerCase();let t=document.getElementById(`docs-tree`);k.length>0?A(t,jt(O,k),!0):A(t,O)})}function St(e){let t=document.getElementById(`docs-version`);t&&t.addEventListener(`change`,async t=>{_t=t.target.value,e.innerHTML=`<div class="loading">Switching version...</div>`,O=await Ct(),ht=At(O),bt(e,pt())})}async function Ct(){let e=[`./docs/${_t}/CometEngine.xml`,`./docs/${_t}/CometEngineAdditionals.xml`,`./docs/${_t}/CometEngineGlobals.xml`],t={};for(let n of e)try{let e=await fetch(n);if(!e.ok)throw Error(`HTTP error! status: ${e.status}`);let r=await e.text();console.log(`Fetched ${n}: ${r.length} bytes.`),r=r.replace(/([a-z]+)="([^"]*)"/gi,(e,t,n)=>`${t}="${n.replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}"`).replace(/([a-z0-9_]+)\s*=\s*([)>])/gi,`$1="" $2`).replace(/<([a-z0-9:]+)\s+([^>]*?)(\/?)>/gi,(e,t,n,r)=>{let i=new Set,a=/([a-z0-9_]+)="([^"]*)"/gi,o=[],s;for(;(s=a.exec(n))!==null;){let e=s[1].toLowerCase();i.has(e)||(i.add(e),o.push(`${s[1]}="${s[2]}"`))}return`<${t}${o.length?` `+o.join(` `):``}${r?` /`:``}>`});let i=new DOMParser().parseFromString(r,`text/xml`),a=i.getElementsByTagName(`parsererror`);if(a.length>0){console.error(`Parser error in ${n}:`,a[0].textContent);continue}let o=Array.from(i.getElementsByTagName(`member`)),s=i.getElementsByTagName(`callbacks`);for(let e of s){let t=e.getAttribute(`name`),n=e.getElementsByTagName(`callback`);for(let e of n){let n=`M:${t}::${e.getAttribute(`name`)}`;e.setAttribute(`name`,n),e.setAttribute(`is-callback`,`true`),o.push(e)}}console.log(`Loading ${n}: ${o.length} members found.`);for(let e of o)try{let n=e.getAttribute(`name`);if(!n)continue;let r=n.trim().match(/^([A-Z]):(.+)$/);if(!r)continue;let i=r[1],a=r[2].trim(),o=a.match(/\(([^)]*)\)/),s=o&&o[1]?o[1].split(`,`).map(e=>e.trim()).filter(Boolean):[],c=a.split(`(`)[0].trim().split(`::`).map(e=>e.trim()),l=t,u=c.length>1?c[c.length-2]:null;for(let t=0;t<c.length;t++){let n=c[t],r=t===c.length-1;r&&i!==`T`?(l._members||=[],l._members.push(wt(e,i,a,n,s,u))):(l[n]||(l[n]={}),l=l[n],r&&(l._members||=[],l._members.push(wt(e,i,a,n,s,u))))}}catch(e){console.error(`Error parsing member in ${n}:`,e)}}catch(e){console.error(`Error loading/parsing ${n}:`,e)}return console.log(`Final apiData namespaces:`,Object.keys(t)),t.CometEditor&&t.CometEditor.GUI&&console.log(`Final GUI members:`,t.CometEditor.GUI._members?.length),t}function wt(e,t,n,r,i,a){let o=Array.from(e.getElementsByTagName(`param`)).map((e,t)=>({name:e.getAttribute(`name`),type:i[t]||null,desc:e.textContent.trim(),default:e.getAttribute(`default`)})),s=e.getAttribute(`return`),c=e.getAttribute(`type`),l=e.getAttribute(`constructor`)===`true`||t===`M`&&r===a,u=e.tagName.toLowerCase()===`callback`||e.getAttribute(`is-callback`)===`true`;return{type:t,fullName:n,name:r,sigTypes:i,summary:e.getElementsByTagName(`summary`)[0]?.textContent?.trim()||``,params:o,returnType:s||null,returnDesc:e.getElementsByTagName(`return`)[0]?.textContent?.trim()||e.getElementsByTagName(`returns`)[0]?.textContent?.trim()||``,fieldType:c||null,isConstructor:l,isCallback:u}}function A(e,t,n=!1){e.innerHTML=``;let r=decodeURIComponent(pt().replace(`#docs`,``).substring(1)),i=(e,t,a=``)=>{let o=document.createElement(`div`);o.className=`tree-item`;let s=a?`${a}::${e}`:e,c=Object.keys(t).filter(e=>e!==`_members`).length>0,l=n||gt.has(s);o.innerHTML=`
      <div class="tree-node ${r===s?`active`:``}" data-path="${s}">
        <span class="tree-toggle" style="width:20px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;">
          ${c?`<i class="fas ${l?`fa-chevron-down`:`fa-chevron-right`}" style="font-size:0.75rem;"></i>`:`<i class="fas fa-cube" style="font-size:0.7rem;color:var(--text-dim);"></i>`}
        </span>
        <span class="tree-label" style="cursor:pointer;">${e}</span>
      </div>
      <div class="tree-children" style="display:${l?`block`:`none`};">
      </div>
    `;let u=o.querySelector(`.tree-node`),d=o.querySelector(`.tree-toggle`),f=o.querySelector(`.tree-children`),p=d.querySelector(`i`);return d.addEventListener(`click`,e=>{if(!c)return;e.stopPropagation();let t=f.style.display===`block`;f.style.display=t?`none`:`block`,p&&(p.className=`fas ${t?`fa-chevron-right`:`fa-chevron-down`}`),t?gt.delete(s):gt.add(s)}),u.addEventListener(`click`,e=>{e.stopPropagation(),mt(`/docs/${s}`)}),Object.keys(t).filter(e=>e!==`_members`).sort().forEach(e=>{f.appendChild(i(e,t[e],s))}),o};Object.keys(t).sort().forEach(n=>{e.appendChild(i(n,t[n]))})}function Tt(e){let t=e.split(`::`),n=O;for(let e of t)n=n?.[e];if(!n)return`<h2>Element not found</h2>`;let r=n._members||[],i=r.find(e=>e.type===`T`),a=r.filter(e=>e.isConstructor),o=r.filter(e=>e.isCallback),s=r.filter(e=>e.type===`F`),c=r.filter(e=>e.type===`M`&&!e.isConstructor&&!e.isCallback),l=r.filter(e=>e.type===`P`),u=Object.keys(n).filter(e=>e!==`_members`).map(e=>({name:e,summary:n[e]._members?.find(e=>e.type===`T`)?.summary||``}));return`
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
          ${a.map(e=>Ot(e)).join(``)}
        </div>
      `:``}

      ${o.length>0?`
        <div class="api-section">
          <h3>Callbacks</h3>
          ${o.map(e=>Ot(e)).join(``)}
        </div>
      `:``}

      ${s.length>0?`
        <div class="api-section">
          <h3>Fields</h3>
          ${s.map(e=>Et(e)).join(``)}
        </div>
      `:``}

      ${c.length>0?`
        <div class="api-section">
          <h3>Methods</h3>
          ${c.map(e=>Ot(e)).join(``)}
        </div>
      `:``}

      ${l.length>0?`
        <div class="api-section">
          <h3>Properties</h3>
          ${l.map(e=>Dt(e)).join(``)}
        </div>
      `:``}
    </div>
  `}function Et(e){let t=e.fieldType||``;return`
    <div class="api-item">
      <div style="display:flex;align-items:baseline;gap:0.5rem;font-family:monospace;font-size:1rem;margin-bottom:0.5rem;">
        ${t?`<span style="color:#61afef;">${kt(t)}</span>`:``}
        <span style="font-weight:700;color:#fff;">${e.name}</span>
      </div>
      <p style="color:var(--text-dim);">${e.summary}</p>
    </div>
  `}function Dt(e){let t=e.fieldType||e.sigTypes?.[0]||``;return`
    <div class="api-item">
      <div style="display:flex;align-items:baseline;gap:0.5rem;font-family:monospace;font-size:1rem;margin-bottom:0.5rem;">
        ${t?`<span style="color:#61afef;">${kt(t)}</span>`:``}
        <span style="font-weight:700;color:#fff;">${e.name}</span>
      </div>
      <p style="color:var(--text-dim);">${e.summary}</p>
    </div>
  `}function Ot(e){let t=e.isConstructor?``:e.returnType||`void`,n=e.params.map(e=>`<span style="color:#61afef;">${e.type?kt(e.type):``}</span>${e.type?` `:``}<span style="color:#fff;">${e.name||``}</span>`).join(`<span style="color:var(--text-dim);">, </span>`);return`
    <div class="api-item">
      <div style="font-family:monospace;font-size:1rem;margin-bottom:0.75rem;display:flex;flex-wrap:wrap;align-items:baseline;gap:0.25rem;">
        ${t?`<span style="color:#61afef;">${kt(t)}</span>`:``}
        <span style="font-weight:700;color:#fff;margin-left:${t?`0.4rem`:`0`};">${e.name}</span>
        <span style="color:var(--text-dim);">(</span>${n}<span style="color:var(--text-dim);">)</span>
      </div>
      <p style="color:var(--text-dim);margin-bottom:${e.params.length>0||e.returnDesc?`1rem`:`0`};">${e.summary}</p>
      ${e.params.length>0?`
        <div style="margin-bottom: 1rem;">
          <div style="font-size:0.8rem;text-transform:uppercase;color:var(--accent-color);font-weight:600;margin-bottom:0.5rem;">Parameters</div>
          ${e.params.map(e=>`
            <div style="display:flex;gap:1rem;font-size:0.9rem;background:rgba(0,0,0,0.2);padding:0.5rem 1rem;border-radius:4px;margin-bottom:0.25rem;align-items:baseline;flex-wrap:wrap;">
              ${e.type?`<span style="color:#61afef;font-family:monospace;">${kt(e.type)}</span>`:``}
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
            ${e.returnType?`<span style="font-family:monospace;color:#61afef;">${kt(e.returnType)}</span> <span style="color:var(--text-dim);">— </span> `:``}
            <span>${e.returnDesc}</span>
          </div>
        </div>
      `:``}
    </div>
  `}function kt(e){if(!e)return``;let t=e.replace(/&lt;/g,`<`).replace(/&gt;/g,`>`),n=t.match(/^array<(.+)>$/);if(n){let e=n[1];return`<span style="color:#61afef;">array&lt;${kt(e)}&gt;</span>`}let r=t.replace(/[?*&]/g,``).trim(),i=ht.find(e=>e===r||e.endsWith(`::${r}`));return i?`<a href="/docs/${i}" style="color:#61afef;text-decoration:underline;">${t}</a>`:`<span style="color:#61afef;">${t}</span>`}function At(e,t=``){let n=[];return Object.keys(e).forEach(r=>{if(r===`_members`)return;let i=t?`${t}::${r}`:r;n.push(i),n=n.concat(At(e[r],i))}),n}function jt(e,t){let n={},r=(e,n)=>{let i=!1;if(e._members){let r=e._members.filter(e=>e.name.toLowerCase().includes(t)||e.summary.toLowerCase().includes(t));r.length>0&&(n._members=r,i=!0)}return Object.keys(e).forEach(a=>{if(a===`_members`)return;let o={},s=r(e[a],o),c=a.toLowerCase().includes(t);if((s||c)&&(n[a]=o,i=!0,c&&e[a]._members&&(!o._members||!o._members.find(e=>e.type===`T`)))){let t=e[a]._members.find(e=>e.type===`T`);t&&(o._members||=[],o._members.unshift(t))}}),i};return r(e,n),n}function Mt(){return`
    <div style="text-align:center;padding-top:5rem;padding-bottom:5rem;">
      <i class="fas fa-book" style="font-size:5rem;color:var(--accent-color);margin-bottom:2rem;"></i>
      <h1>Comet Engine API Documentation</h1>
      <p style="color:var(--text-dim);max-width:600px;margin:1rem auto 3rem;">
        Explore the classes, methods, and properties available in CometEngine.
      </p>
    </div>
  `}function Nt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Pt(e){if(Array.isArray(e))return e}function Ft(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t!==0)for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function It(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lt(e,t){return Pt(e)||Ft(e,t)||Rt(e,t)||It()}function Rt(e,t){if(e){if(typeof e==`string`)return Nt(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Nt(e,t):void 0}}var zt=Object.entries,Bt=Object.setPrototypeOf,Vt=Object.isFrozen,Ht=Object.getPrototypeOf,Ut=Object.getOwnPropertyDescriptor,j=Object.freeze,Wt=Object.seal,Gt=Object.create,Kt=typeof Reflect<`u`&&Reflect,qt=Kt.apply,Jt=Kt.construct;j||=function(e){return e},Wt||=function(e){return e},qt||=function(e,t){var n=[...arguments].slice(2);return e.apply(t,n)},Jt||=function(e){return new e(...[...arguments].slice(1))};var Yt=F(Array.prototype.forEach),Xt=F(Array.prototype.lastIndexOf),Zt=F(Array.prototype.pop),Qt=F(Array.prototype.push),$t=F(Array.prototype.splice),M=Array.isArray,en=F(String.prototype.toLowerCase),tn=F(String.prototype.toString),nn=F(String.prototype.match),rn=F(String.prototype.replace),an=F(String.prototype.indexOf),on=F(String.prototype.trim),sn=F(Number.prototype.toString),cn=F(Boolean.prototype.toString),ln=typeof BigInt>`u`?null:F(BigInt.prototype.toString),un=typeof Symbol>`u`?null:F(Symbol.prototype.toString),N=F(Object.prototype.hasOwnProperty),dn=F(Object.prototype.toString),P=F(RegExp.prototype.test),fn=pn(TypeError);function F(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);var n=[...arguments].slice(1);return qt(e,t,n)}}function pn(e){return function(){return Jt(e,[...arguments])}}function I(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:en;if(Bt&&Bt(e,null),!M(t))return e;let r=t.length;for(;r--;){let i=t[r];if(typeof i==`string`){let e=n(i);e!==i&&(Vt(t)||(t[r]=e),i=e)}e[i]=!0}return e}function mn(e){for(let t=0;t<e.length;t++)N(e,t)||(e[t]=null);return e}function L(e){let t=Gt(null);for(let r of zt(e)){var n=Lt(r,2);let i=n[0],a=n[1];N(e,i)&&(M(a)?t[i]=mn(a):a&&typeof a==`object`&&a.constructor===Object?t[i]=L(a):t[i]=a)}return t}function hn(e){switch(typeof e){case`string`:return e;case`number`:return sn(e);case`boolean`:return cn(e);case`bigint`:return ln?ln(e):`0`;case`symbol`:return un?un(e):`Symbol()`;case`undefined`:return dn(e);case`function`:case`object`:{if(e===null)return dn(e);let t=e,n=gn(t,`toString`);if(typeof n==`function`){let e=n(t);return typeof e==`string`?e:dn(e)}return dn(e)}default:return dn(e)}}function gn(e,t){for(;e!==null;){let n=Ut(e,t);if(n){if(n.get)return F(n.get);if(typeof n.value==`function`)return F(n.value)}e=Ht(e)}function n(){return null}return n}function _n(e){try{return P(e,``),!0}catch{return!1}}var vn=j(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),yn=j(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),bn=j([`feBlend`,`feColorMatrix`,`feComponentTransfer`,`feComposite`,`feConvolveMatrix`,`feDiffuseLighting`,`feDisplacementMap`,`feDistantLight`,`feDropShadow`,`feFlood`,`feFuncA`,`feFuncB`,`feFuncG`,`feFuncR`,`feGaussianBlur`,`feImage`,`feMerge`,`feMergeNode`,`feMorphology`,`feOffset`,`fePointLight`,`feSpecularLighting`,`feSpotLight`,`feTile`,`feTurbulence`]),xn=j([`animate`,`color-profile`,`cursor`,`discard`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`foreignobject`,`hatch`,`hatchpath`,`mesh`,`meshgradient`,`meshpatch`,`meshrow`,`missing-glyph`,`script`,`set`,`solidcolor`,`unknown`,`use`]),Sn=j(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),Cn=j([`maction`,`maligngroup`,`malignmark`,`mlongdiv`,`mscarries`,`mscarry`,`msgroup`,`mstack`,`msline`,`msrow`,`semantics`,`annotation`,`annotation-xml`,`mprescripts`,`none`]),wn=j([`#text`]),Tn=j(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),En=j(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-rendering.textlength.type.u1.u2.unicode.values.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),Dn=j(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),On=j([`xlink:href`,`xml:id`,`xlink:title`,`xml:space`,`xmlns:xlink`]),kn=Wt(/{{[\w\W]*|^[\w\W]*}}/g),An=Wt(/<%[\w\W]*|^[\w\W]*%>/g),jn=Wt(/\${[\w\W]*/g),Mn=Wt(/^data-[\-\w.\u00B7-\uFFFF]+$/),Nn=Wt(/^aria-[\-\w]+$/),Pn=Wt(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Fn=Wt(/^(?:\w+script|data):/i),In=Wt(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ln=Wt(/^html$/i),Rn=Wt(/^[a-z][.\w]*(-[.\w]+)+$/i),zn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Bn=function(){return typeof window>`u`?null:window},Vn=function(e,t){if(typeof e!=`object`||typeof e.createPolicy!=`function`)return null;let n=null,r=`data-tt-policy-suffix`;t&&t.hasAttribute(r)&&(n=t.getAttribute(r));let i=`dompurify`+(n?`#`+n:``);try{return e.createPolicy(i,{createHTML(e){return e},createScriptURL(e){return e}})}catch{return console.warn(`TrustedTypes policy `+i+` could not be created.`),null}},Hn=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Un(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bn(),t=e=>Un(e);if(t.version=`3.4.9`,t.removed=[],!e||!e.document||e.document.nodeType!==zn.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,i=r.currentScript;e.DocumentFragment;let a=e.HTMLTemplateElement,o=e.Node,s=e.Element,c=e.NodeFilter;e.NamedNodeMap===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let l=e.DOMParser,u=e.trustedTypes,d=s.prototype,f=gn(d,`cloneNode`),p=gn(d,`remove`),m=gn(d,`nextSibling`),h=gn(d,`childNodes`),g=gn(d,`parentNode`),ee=gn(d,`shadowRoot`),te=gn(d,`attributes`),_=o&&o.prototype?gn(o.prototype,`nodeType`):null,ne=o&&o.prototype?gn(o.prototype,`nodeName`):null;if(typeof a==`function`){let e=n.createElement(`template`);e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let v,re=``,ie,ae=!1,oe=0,se=function(){if(oe>0)throw fn(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`)},ce=function(e){se(),oe++;try{return v.createHTML(e)}finally{oe--}},le=function(e){se(),oe++;try{return v.createScriptURL(e)}finally{oe--}},ue=function(){return ae||=(ie=Vn(u,i),!0),ie},de=n,fe=de.implementation,pe=de.createNodeIterator,me=de.createDocumentFragment,he=de.getElementsByTagName,ge=r.importNode,y=Hn();t.isSupported=typeof zt==`function`&&typeof g==`function`&&fe&&fe.createHTMLDocument!==void 0;let _e=kn,ve=An,ye=jn,be=Mn,xe=Nn,Se=Fn,Ce=In,we=Rn,Te=Pn,b=null,Ee=I({},[...vn,...yn,...bn,...Sn,...wn]),x=null,De=I({},[...Tn,...En,...Dn,...On]),S=Object.seal(Gt(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Oe=null,ke=null,Ae=Object.seal(Gt(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),je=!0,Me=!0,Ne=!1,Pe=!0,Fe=!1,Ie=!0,Le=!1,Re=!1,ze=!1,Be=!1,Ve=!1,He=!1,Ue=!0,We=!1,Ge=`user-content-`,Ke=!0,qe=!1,Je={},C=null,Ye=I({},`annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),Xe=null,Ze=I({},[`audio`,`video`,`img`,`source`,`image`,`track`]),Qe=null,$e=I({},[`alt`,`class`,`for`,`id`,`label`,`name`,`pattern`,`placeholder`,`role`,`summary`,`title`,`value`,`style`,`xmlns`]),et=`http://www.w3.org/1998/Math/MathML`,tt=`http://www.w3.org/2000/svg`,nt=`http://www.w3.org/1999/xhtml`,rt=nt,w=!1,it=null,at=I({},[et,tt,nt],tn),T=I({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),ot=I({},[`annotation-xml`]),st=I({},[`title`,`style`,`font`,`a`,`script`]),E=null,ct=[`application/xhtml+xml`,`text/html`],D=null,lt=null,ut=n.createElement(`form`),dt=function(e){return e instanceof RegExp||e instanceof Function},ft=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(lt&&lt===e)return;(!e||typeof e!=`object`)&&(e={}),e=L(e),E=ct.indexOf(e.PARSER_MEDIA_TYPE)===-1?`text/html`:e.PARSER_MEDIA_TYPE,D=E===`application/xhtml+xml`?tn:en,b=N(e,`ALLOWED_TAGS`)&&M(e.ALLOWED_TAGS)?I({},e.ALLOWED_TAGS,D):Ee,x=N(e,`ALLOWED_ATTR`)&&M(e.ALLOWED_ATTR)?I({},e.ALLOWED_ATTR,D):De,it=N(e,`ALLOWED_NAMESPACES`)&&M(e.ALLOWED_NAMESPACES)?I({},e.ALLOWED_NAMESPACES,tn):at,Qe=N(e,`ADD_URI_SAFE_ATTR`)&&M(e.ADD_URI_SAFE_ATTR)?I(L($e),e.ADD_URI_SAFE_ATTR,D):$e,Xe=N(e,`ADD_DATA_URI_TAGS`)&&M(e.ADD_DATA_URI_TAGS)?I(L(Ze),e.ADD_DATA_URI_TAGS,D):Ze,C=N(e,`FORBID_CONTENTS`)&&M(e.FORBID_CONTENTS)?I({},e.FORBID_CONTENTS,D):Ye,Oe=N(e,`FORBID_TAGS`)&&M(e.FORBID_TAGS)?I({},e.FORBID_TAGS,D):L({}),ke=N(e,`FORBID_ATTR`)&&M(e.FORBID_ATTR)?I({},e.FORBID_ATTR,D):L({}),Je=N(e,`USE_PROFILES`)?e.USE_PROFILES&&typeof e.USE_PROFILES==`object`?L(e.USE_PROFILES):e.USE_PROFILES:!1,je=e.ALLOW_ARIA_ATTR!==!1,Me=e.ALLOW_DATA_ATTR!==!1,Ne=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Pe=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Fe=e.SAFE_FOR_TEMPLATES||!1,Ie=e.SAFE_FOR_XML!==!1,Le=e.WHOLE_DOCUMENT||!1,Be=e.RETURN_DOM||!1,Ve=e.RETURN_DOM_FRAGMENT||!1,He=e.RETURN_TRUSTED_TYPE||!1,ze=e.FORCE_BODY||!1,Ue=e.SANITIZE_DOM!==!1,We=e.SANITIZE_NAMED_PROPS||!1,Ke=e.KEEP_CONTENT!==!1,qe=e.IN_PLACE||!1,Te=_n(e.ALLOWED_URI_REGEXP)?e.ALLOWED_URI_REGEXP:Pn,rt=typeof e.NAMESPACE==`string`?e.NAMESPACE:nt,T=N(e,`MATHML_TEXT_INTEGRATION_POINTS`)&&e.MATHML_TEXT_INTEGRATION_POINTS&&typeof e.MATHML_TEXT_INTEGRATION_POINTS==`object`?L(e.MATHML_TEXT_INTEGRATION_POINTS):I({},[`mi`,`mo`,`mn`,`ms`,`mtext`]),ot=N(e,`HTML_INTEGRATION_POINTS`)&&e.HTML_INTEGRATION_POINTS&&typeof e.HTML_INTEGRATION_POINTS==`object`?L(e.HTML_INTEGRATION_POINTS):I({},[`annotation-xml`]);let t=N(e,`CUSTOM_ELEMENT_HANDLING`)&&e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING==`object`?L(e.CUSTOM_ELEMENT_HANDLING):Gt(null);if(S=Gt(null),N(t,`tagNameCheck`)&&dt(t.tagNameCheck)&&(S.tagNameCheck=t.tagNameCheck),N(t,`attributeNameCheck`)&&dt(t.attributeNameCheck)&&(S.attributeNameCheck=t.attributeNameCheck),N(t,`allowCustomizedBuiltInElements`)&&typeof t.allowCustomizedBuiltInElements==`boolean`&&(S.allowCustomizedBuiltInElements=t.allowCustomizedBuiltInElements),Fe&&(Me=!1),Ve&&(Be=!0),Je&&(b=I({},wn),x=Gt(null),Je.html===!0&&(I(b,vn),I(x,Tn)),Je.svg===!0&&(I(b,yn),I(x,En),I(x,On)),Je.svgFilters===!0&&(I(b,bn),I(x,En),I(x,On)),Je.mathMl===!0&&(I(b,Sn),I(x,Dn),I(x,On))),Ae.tagCheck=null,Ae.attributeCheck=null,N(e,`ADD_TAGS`)&&(typeof e.ADD_TAGS==`function`?Ae.tagCheck=e.ADD_TAGS:M(e.ADD_TAGS)&&(b===Ee&&(b=L(b)),I(b,e.ADD_TAGS,D))),N(e,`ADD_ATTR`)&&(typeof e.ADD_ATTR==`function`?Ae.attributeCheck=e.ADD_ATTR:M(e.ADD_ATTR)&&(x===De&&(x=L(x)),I(x,e.ADD_ATTR,D))),N(e,`ADD_URI_SAFE_ATTR`)&&M(e.ADD_URI_SAFE_ATTR)&&I(Qe,e.ADD_URI_SAFE_ATTR,D),N(e,`FORBID_CONTENTS`)&&M(e.FORBID_CONTENTS)&&(C===Ye&&(C=L(C)),I(C,e.FORBID_CONTENTS,D)),N(e,`ADD_FORBID_CONTENTS`)&&M(e.ADD_FORBID_CONTENTS)&&(C===Ye&&(C=L(C)),I(C,e.ADD_FORBID_CONTENTS,D)),Ke&&(b[`#text`]=!0),Le&&I(b,[`html`,`head`,`body`]),b.table&&(I(b,[`tbody`]),delete Oe.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!=`function`)throw fn(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!=`function`)throw fn(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);let t=v;v=e.TRUSTED_TYPES_POLICY;try{re=ce(``)}catch(e){throw v=t,e}}else e.TRUSTED_TYPES_POLICY===null?(v=void 0,re=``):(v===void 0&&(v=ue()),v&&typeof re==`string`&&(re=ce(``)));(y.uponSanitizeElement.length>0||y.uponSanitizeAttribute.length>0)&&b===Ee&&(b=L(b)),y.uponSanitizeAttribute.length>0&&x===De&&(x=L(x)),j&&j(e),lt=e},pt=I({},[...yn,...bn,...xn]),mt=I({},[...Sn,...Cn]),O=function(e){let t=g(e);(!t||!t.tagName)&&(t={namespaceURI:rt,tagName:`template`});let n=en(e.tagName),r=en(t.tagName);return it[e.namespaceURI]?e.namespaceURI===tt?t.namespaceURI===nt?n===`svg`:t.namespaceURI===et?n===`svg`&&(r===`annotation-xml`||T[r]):!!pt[n]:e.namespaceURI===et?t.namespaceURI===nt?n===`math`:t.namespaceURI===tt?n===`math`&&ot[r]:!!mt[n]:e.namespaceURI===nt?t.namespaceURI===tt&&!ot[r]||t.namespaceURI===et&&!T[r]?!1:!mt[n]&&(st[n]||!pt[n]):!!(E===`application/xhtml+xml`&&it[e.namespaceURI]):!1},ht=function(e){Qt(t.removed,{element:e});try{g(e).removeChild(e)}catch{if(p(e),!g(e))throw fn(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`)}},gt=function(e){let t=h?h(e):e.childNodes;if(t){let e=[];Yt(t,t=>{Qt(e,t)}),Yt(e,e=>{try{p(e)}catch{}})}let n=te?te(e):null;if(n)for(let t=n.length-1;t>=0;--t){let r=n[t],i=r&&r.name;if(typeof i==`string`)try{e.removeAttribute(i)}catch{}}},k=function(e,n){try{Qt(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch{Qt(t.removed,{attribute:null,from:n})}if(n.removeAttribute(e),e===`is`)if(Be||Ve)try{ht(n)}catch{}else try{n.setAttribute(e,``)}catch{}},_t=function(e){let t=te?te(e):e.attributes;if(t)for(let n=t.length-1;n>=0;--n){let r=t[n],i=r&&r.name;if(!(typeof i!=`string`||x[D(i)]))try{e.removeAttribute(i)}catch{}}},vt=function(e){let t=[e];for(;t.length>0;){let e=t.pop();(_?_(e):e.nodeType)===zn.element&&_t(e);let n=h?h(e):e.childNodes;if(n)for(let e=n.length-1;e>=0;--e)t.push(n[e])}},yt=function(e){let t=null,r=null;if(ze)e=`<remove></remove>`+e;else{let t=nn(e,/^[\r\n\t ]+/);r=t&&t[0]}E===`application/xhtml+xml`&&rt===nt&&(e=`<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>`+e+`</body></html>`);let i=v?ce(e):e;if(rt===nt)try{t=new l().parseFromString(i,E)}catch{}if(!t||!t.documentElement){t=fe.createDocument(rt,`template`,null);try{t.documentElement.innerHTML=w?re:i}catch{}}let a=t.body||t.documentElement;return e&&r&&a.insertBefore(n.createTextNode(r),a.childNodes[0]||null),rt===nt?he.call(t,Le?`html`:`body`)[0]:Le?t.documentElement:a},bt=function(e){return pe.call(e.ownerDocument||e,e,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},xt=function(e){e.normalize();let t=pe.call(e.ownerDocument||e,e,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),n=t.nextNode();for(;n;){let e=n.data;Yt([_e,ve,ye],t=>{e=rn(e,t,` `)}),n.data=e,n=t.nextNode()}let r=e.querySelectorAll?.call(e,`template`)??[];Yt(Array.from(r),e=>{Ct(e.content)&&xt(e.content)})},St=function(e){let t=ne?ne(e):null;return typeof t!=`string`||D(t)!==`form`?!1:typeof e.nodeName!=`string`||typeof e.textContent!=`string`||typeof e.removeChild!=`function`||e.attributes!==te(e)||typeof e.removeAttribute!=`function`||typeof e.setAttribute!=`function`||typeof e.namespaceURI!=`string`||typeof e.insertBefore!=`function`||typeof e.hasChildNodes!=`function`||e.nodeType!==_(e)||e.childNodes!==h(e)},Ct=function(e){if(!_||typeof e!=`object`||!e)return!1;try{return _(e)===zn.documentFragment}catch{return!1}},wt=function(e){if(!_||typeof e!=`object`||!e)return!1;try{return typeof _(e)==`number`}catch{return!1}};function A(e,n,r){Yt(e,e=>{e.call(t,n,r,lt)})}let Tt=function(e){let n=null;if(A(y.beforeSanitizeElements,e,null),St(e))return ht(e),!0;let r=D(ne?ne(e):e.nodeName);if(A(y.uponSanitizeElement,e,{tagName:r,allowedTags:b}),Ie&&e.hasChildNodes()&&!wt(e.firstElementChild)&&P(/<[/\w!]/g,e.innerHTML)&&P(/<[/\w!]/g,e.textContent)||Ie&&e.namespaceURI===nt&&r===`style`&&wt(e.firstElementChild)||e.nodeType===zn.progressingInstruction||Ie&&e.nodeType===zn.comment&&P(/<[/\w]/g,e.data))return ht(e),!0;if(Oe[r]||!(Ae.tagCheck instanceof Function&&Ae.tagCheck(r))&&!b[r]){if(!Oe[r]&&Ot(r)&&(S.tagNameCheck instanceof RegExp&&P(S.tagNameCheck,r)||S.tagNameCheck instanceof Function&&S.tagNameCheck(r)))return!1;if(Ke&&!C[r]){let t=g(e),n=h(e);if(n&&t){let r=n.length;for(let i=r-1;i>=0;--i){let r=qe?n[i]:f(n[i],!0);t.insertBefore(r,m(e))}}}return ht(e),!0}return(_?_(e):e.nodeType)===zn.element&&!O(e)||(r===`noscript`||r===`noembed`||r===`noframes`)&&P(/<\/no(script|embed|frames)/i,e.innerHTML)?(ht(e),!0):(Fe&&e.nodeType===zn.text&&(n=e.textContent,Yt([_e,ve,ye],e=>{n=rn(n,e,` `)}),e.textContent!==n&&(Qt(t.removed,{element:e.cloneNode()}),e.textContent=n)),A(y.afterSanitizeElements,e,null),!1)},Et=function(e,t,r){if(ke[t]||Ue&&(t===`id`||t===`name`)&&(r in n||r in ut))return!1;let i=x[t]||Ae.attributeCheck instanceof Function&&Ae.attributeCheck(t,e);if(!(Me&&!ke[t]&&P(be,t))&&!(je&&P(xe,t))){if(!i||ke[t]){if(!(Ot(e)&&(S.tagNameCheck instanceof RegExp&&P(S.tagNameCheck,e)||S.tagNameCheck instanceof Function&&S.tagNameCheck(e))&&(S.attributeNameCheck instanceof RegExp&&P(S.attributeNameCheck,t)||S.attributeNameCheck instanceof Function&&S.attributeNameCheck(t,e))||t===`is`&&S.allowCustomizedBuiltInElements&&(S.tagNameCheck instanceof RegExp&&P(S.tagNameCheck,r)||S.tagNameCheck instanceof Function&&S.tagNameCheck(r))))return!1}else if(!Qe[t]&&!P(Te,rn(r,Ce,``))&&!((t===`src`||t===`xlink:href`||t===`href`)&&e!==`script`&&an(r,`data:`)===0&&Xe[e])&&!(Ne&&!P(Se,rn(r,Ce,``)))&&r)return!1}return!0},Dt=I({},[`annotation-xml`,`color-profile`,`font-face`,`font-face-format`,`font-face-name`,`font-face-src`,`font-face-uri`,`missing-glyph`]),Ot=function(e){return!Dt[en(e)]&&P(we,e)},kt=function(e){A(y.beforeSanitizeAttributes,e,null);let n=e.attributes;if(!n||St(e))return;let r={attrName:``,attrValue:``,keepAttr:!0,allowedAttributes:x,forceKeepAttr:void 0},i=n.length;for(;i--;){let a=n[i],o=a.name,s=a.namespaceURI,c=a.value,l=D(o),d=c,f=o===`value`?d:on(d);if(r.attrName=l,r.attrValue=f,r.keepAttr=!0,r.forceKeepAttr=void 0,A(y.uponSanitizeAttribute,e,r),f=r.attrValue,We&&(l===`id`||l===`name`)&&an(f,Ge)!==0&&(k(o,e),f=Ge+f),Ie&&P(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,f)){k(o,e);continue}if(l===`attributename`&&nn(f,`href`)){k(o,e);continue}if(r.forceKeepAttr)continue;if(!r.keepAttr){k(o,e);continue}if(!Pe&&P(/\/>/i,f)){k(o,e);continue}Fe&&Yt([_e,ve,ye],e=>{f=rn(f,e,` `)});let p=D(e.nodeName);if(!Et(p,l,f)){k(o,e);continue}if(v&&typeof u==`object`&&typeof u.getAttributeType==`function`&&!s)switch(u.getAttributeType(p,l)){case`TrustedHTML`:f=ce(f);break;case`TrustedScriptURL`:f=le(f);break}if(f!==d)try{s?e.setAttributeNS(s,o,f):e.setAttribute(o,f),St(e)?ht(e):Zt(t.removed)}catch{k(o,e)}}A(y.afterSanitizeAttributes,e,null)},At=function(e){let t=null,n=bt(e);for(A(y.beforeSanitizeShadowDOM,e,null);t=n.nextNode();)if(A(y.uponSanitizeShadowNode,t,null),Tt(t),kt(t),Ct(t.content)&&At(t.content),(_?_(t):t.nodeType)===zn.element){let e=ee?ee(t):t.shadowRoot;Ct(e)&&(jt(e),At(e))}A(y.afterSanitizeShadowDOM,e,null)},jt=function(e){let t=[{node:e,shadow:null}];for(;t.length>0;){let e=t.pop();if(e.shadow){At(e.shadow);continue}let n=e.node,r=(_?_(n):n.nodeType)===zn.element,i=h?h(n):n.childNodes;if(i)for(let e=i.length-1;e>=0;--e)t.push({node:i[e],shadow:null});if(r){let e=ne?ne(n):null;if(typeof e==`string`&&D(e)===`template`){let e=n.content;Ct(e)&&t.push({node:e,shadow:null})}}if(r){let e=ee?ee(n):n.shadowRoot;Ct(e)&&t.push({node:null,shadow:e},{node:e,shadow:null})}}};return t.sanitize=function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=null,a=null,o=null,s=null;if(w=!e,w&&(e=`<!-->`),typeof e!=`string`&&!wt(e)&&(e=hn(e),typeof e!=`string`))throw fn(`dirty is not a string, aborting`);if(!t.isSupported)return e;Re||ft(n),t.removed=[];let c=qe&&typeof e!=`string`&&wt(e);if(c){let t=ne?ne(e):e.nodeName;if(typeof t==`string`){let e=D(t);if(!b[e]||Oe[e])throw fn(`root node is forbidden and cannot be sanitized in-place`)}if(St(e))throw fn(`root node is clobbered and cannot be sanitized in-place`);try{jt(e)}catch(t){throw gt(e),t}}else if(wt(e))i=yt(`<!---->`),a=i.ownerDocument.importNode(e,!0),a.nodeType===zn.element&&a.nodeName===`BODY`||a.nodeName===`HTML`?i=a:i.appendChild(a),jt(a);else{if(!Be&&!Fe&&!Le&&e.indexOf(`<`)===-1)return v&&He?ce(e):e;if(i=yt(e),!i)return Be?null:He?re:``}i&&ze&&ht(i.firstChild);let l=bt(c?e:i);try{for(;o=l.nextNode();)Tt(o),kt(o),Ct(o.content)&&At(o.content)}catch(t){throw c&&gt(e),t}if(c)return Yt(t.removed,e=>{e.element&&vt(e.element)}),Fe&&xt(e),e;if(Be){if(Fe&&xt(i),Ve)for(s=me.call(i.ownerDocument);i.firstChild;)s.appendChild(i.firstChild);else s=i;return(x.shadowroot||x.shadowrootmode)&&(s=ge.call(r,s,!0)),s}let u=Le?i.outerHTML:i.innerHTML;return Le&&b[`!doctype`]&&i.ownerDocument&&i.ownerDocument.doctype&&i.ownerDocument.doctype.name&&P(Ln,i.ownerDocument.doctype.name)&&(u=`<!DOCTYPE `+i.ownerDocument.doctype.name+`>
`+u),Fe&&Yt([_e,ve,ye],e=>{u=rn(u,e,` `)}),v&&He?ce(u):u},t.setConfig=function(){ft(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}),Re=!0},t.clearConfig=function(){lt=null,Re=!1,v=ie,re=``},t.isValidAttribute=function(e,t,n){return lt||ft({}),Et(D(e),D(t),n)},t.addHook=function(e,t){typeof t==`function`&&Qt(y[e],t)},t.removeHook=function(e,t){if(t!==void 0){let n=Xt(y[e],t);return n===-1?void 0:$t(y[e],n,1)[0]}return Zt(y[e])},t.removeHooks=function(e){y[e]=[]},t.removeAllHooks=function(){y=Hn()},t}var Wn=Un(),Gn=[{id:`sprite-rendering`,title:`Sprite Rendering & the Sprite Editor`,icon:`fa-image`,category:`2D Graphics`,blurb:`Textures, sprites, atlases, 9-slicing and everything the SpriteRenderer can do.`,md:`# Sprite Rendering & the Sprite Editor\r
\r
Sprites are the bread and butter of any 2D game. In this tutorial you will import a texture, slice it into sprites with the **Sprite Editor**, display it with a **SpriteRenderer**, and drive all of it from AngelScript — tinting, flipping, 9-slicing and swapping materials at runtime.\r
\r
![The Comet Engine editor: Scene view, Game view, Hierarchy, Inspector and the Project panel.](/tutorials/editor-overview.png)\r
\r
## Textures and sprites\r
\r
Comet makes a clear distinction between the two:\r
\r
- A **Texture** is the image file you import (\`.png\`, \`.jpg\`, ...). It owns GPU memory and sampling settings.\r
- A **Sprite** is a rectangular *region* of a texture, plus rendering metadata: a pivot, a pixels-per-unit value and optional 9-slice borders. One texture can contain a single sprite or a whole sprite sheet.\r
\r
When you drop an image into your project, select it in the **Project** panel and the Inspector shows its import settings:\r
\r
| Setting | What it does |\r
|---------|--------------|\r
| **Texture Type** | \`Sprite and UI\` for regular art, \`Normal Map\` for lighting relief maps. |\r
| **Filter Type** | \`No Filter\` (crisp pixel art), \`Bilinear\` or \`Trilinear\` (smooth scaling). |\r
| **Wrap Mode** | \`Repeat\`, \`Mirror Repeat\`, \`Clamp Edge\` or \`Clamp Border\` — how UVs outside 0–1 sample. |\r
| **Pixels Per Unit** | How many texture pixels equal one world unit. A 128 px sprite at 128 PPU is exactly 1 unit wide. |\r
| **Modify Pixels** | Keeps a CPU-side copy so scripts can call \`GetPixels()\` / \`SetPixelAt()\`. Costs memory — leave it off unless you need it. |\r
\r
> [!TIP]\r
> For pixel art, set **Filter Type** to \`No Filter\` and pick a Pixels Per Unit that matches your tile size (for example 16). Your art will stay razor sharp at any zoom level.\r
\r
## Slicing with the Sprite Editor\r
\r
With a texture selected, set its **Texture Type** to \`Sprite and UI\` and click **Open Sprite Editor** in the Inspector.\r
\r
![The Sprite Editor slicing a sprite sheet into a grid of sprites.](/tutorials/sprite-editor.png)\r
\r
The Sprite Editor has four tools, selectable from its toolbar:\r
\r
1. **Sprite Creation** — draw and edit the sprite rectangles themselves.\r
2. **Secondary Textures** — attach a normal map so 2D lights give your sprite relief.\r
3. **Physic Shape** — author the collision polygon colliders will use for this sprite.\r
4. **Shadow Caster** — author the occluder polygon used by 2D shadow casting.\r
\r
### Automatic and grid slicing\r
\r
For sprite sheets you rarely slice by hand. Open the slicing options and choose a **Slice Mode**:\r
\r
- **Automatic** — detects sprites from transparent gaps.\r
- **Grid Size** — cuts the sheet into cells of a fixed pixel size.\r
- **Columns & Rows** — cuts the sheet into an exact number of divisions.\r
\r
Set the **Pivot** for the generated sprites (usually \`Middle\`, or \`Bottom\` for characters standing on the ground), optionally add an **Offset** and **Padding** between cells, enable **Remove Empty Rects** to skip blank cells, and press **Apply Slice**.\r
\r
### Manual editing, pivots and borders\r
\r
Click anywhere on the texture to create a new sprite rect, then drag its corners to fit. For each sprite the Inspector shows:\r
\r
- **Rect** — position and size in pixels.\r
- **Pivot** — the sprite's origin: \`Middle\`, \`Bottom Left\`, \`Custom\`... Rotation and scaling happen around it.\r
- **Borders** — left/right/top/bottom margins in pixels, drawn as green lines. These define the 9-slice regions used by the \`Sliced\` and \`Tiled\` render modes below.\r
\r
## The SpriteRenderer component\r
\r
Add one with **Add Behaviour → Sprite Renderer** on any entity. Its Inspector properties:\r
\r
| Property | Meaning |\r
|----------|---------|\r
| **Sprite** | The sprite to draw. |\r
| **Render Mode** | \`Simple\`, \`Sliced\` (9-slice) or \`Tiled\`. |\r
| **Size** | Target size in world units — only used by \`Sliced\` and \`Tiled\`. |\r
| **Color** | Tint multiplied over the sprite (white = unchanged). |\r
| **Flip X / Flip Y** | Mirror the sprite on each axis. |\r
| **Sorting Layer** | Which named layer this renderer draws in. |\r
| **Order in Layer** | Draw order within that layer — higher renders on top. |\r
| **Sort Point** | Sort by the sprite's \`Center\` or its \`Pivot\`. |\r
| **Material** | Optional custom material/shader. |\r
\r
### How sorting works\r
\r
Comet renders **sorting layers** in the order they are defined in the project, and inside each layer sorts by **Order in Layer**. Two classic setups:\r
\r
- Backgrounds on a \`Background\` layer, gameplay on \`Default\`, UI overlays on a front layer.\r
- A top-down game where characters sort among trees: give everything the same layer and set **Sort Point** to \`Pivot\` with pivots at the feet.\r
\r
### 9-slicing: Sliced and Tiled modes\r
\r
If a sprite has **Borders** defined in the Sprite Editor, the \`Sliced\` render mode stretches only the center while corners keep their size — perfect for panels and buttons of any size. \`Tiled\` repeats the center instead of stretching it. In both cases the **Size** property controls the final world-space size:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class PanelSetup : CometBehaviour\r
{\r
    void Start()\r
    {\r
        SpriteRenderer renderer = SpriteRenderer::Get(entity);\r
        renderer.renderMode = SpriteRenderMode::SLICED;\r
        renderer.size = Vector2(10.0F, 4.0F); // world units, borders stay crisp\r
    }\r
}\r
\`\`\`\r
\r
## Controlling sprites from AngelScript\r
\r
Every behaviour can grab the renderer on its entity with the static \`Get\` accessor. The pattern below is used all over the engine's sample project:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class PlayerVisuals : CometBehaviour\r
{\r
    private SpriteRenderer spriteRenderer;\r
\r
    void Start()\r
    {\r
        spriteRenderer = SpriteRenderer::Get(entity);\r
    }\r
\r
    void Update()\r
    {\r
        // Face the direction we are moving.\r
        float moveX = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1).x;\r
        if (moveX != 0.0F)\r
        {\r
            spriteRenderer.flipX = moveX < 0.0F;\r
        }\r
\r
        // Flash red while hurt.\r
        if (Input::GetKeyDown(KeyCode::H))\r
        {\r
            spriteRenderer.color = Color(1.0F, 0.25F, 0.25F, 1.0F);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
> [!NOTE]\r
> \`SpriteRenderer::Get(entity)\` returns a reference to the behaviour attached to that entity — the same pattern works for every behaviour type (\`Camera::Get\`, \`Animator::Get\`, ...).\r
\r
## Materials: shared vs. instanced\r
\r
Renderers expose two material properties with very different behaviour:\r
\r
- \`sharedMaterial\` — the material *asset*. Editing it changes **every** renderer that uses it.\r
- \`material\` — a per-renderer **clone**, created the first time you access it. Perfect for effects on a single entity, but you own its lifetime: call \`Material::Remove()\` when the entity is destroyed.\r
\r
This dissolve effect from the Sandbox project animates a shader parameter on one sprite only:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class Disolve : CometBehaviour\r
{\r
    private Material spriteMaterial;\r
    private float value = 0.0F;\r
\r
    void Start()\r
    {\r
        // Accessing .material clones the shared material for this renderer only.\r
        spriteMaterial = SpriteRenderer::Get(entity).material;\r
    }\r
\r
    void Update()\r
    {\r
        spriteMaterial.SetFloat("value", value);\r
        value += Time::GetDeltaTime();\r
    }\r
\r
    void OnDestroy()\r
    {\r
        // Instanced materials are yours to clean up.\r
        Material::Remove(spriteMaterial);\r
    }\r
}\r
\`\`\`\r
\r
> [!WARNING]\r
> Forgetting \`Material::Remove()\` on an instanced material leaks it. If you only need to change the tint, prefer the \`color\` property — it does not clone anything.\r
\r
## Loading sprites at runtime\r
\r
Everything you assign in the Inspector can also be loaded from code through \`RuntimeAssets\`. Paths are relative to your project's \`Assets/\` folder, without extension:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class RuntimeSpriteSwap : CometBehaviour\r
{\r
    void Start()\r
    {\r
        // Load a sprite atlas and pick a sprite from it by name.\r
        SpriteAtlas atlas = cast<SpriteAtlas>(\r
            RuntimeAssets::LoadResource("Atlases/Characters", ResourceType::SPRITE_ATLAS));\r
\r
        if (atlas !is null)\r
        {\r
            SpriteRenderer::Get(entity).sprite = atlas.GetSprite("hero_idle_0");\r
        }\r
    }\r
}\r
\`\`\`\r
\r
For big assets prefer the asynchronous variant, \`RuntimeAssets::LoadResourceAsync()\`, which returns a \`ResourceAsyncOperation\` you can poll (\`isDone\`, \`progress\`, \`resource\`).\r
\r
## Quick frame animation: AnimatedSprite\r
\r
When all you need is a looping flipbook — a torch, a coin, an idle loop — the **AnimatedSprite** behaviour replaces the sprite every frame for you, no state machine required:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class TorchFlame : CometBehaviour\r
{\r
    void Start()\r
    {\r
        AnimatedSprite anim = AnimatedSprite::Get(entity);\r
        anim.speed = 12.0F;       // frames per second\r
        anim.loop = true;\r
        anim.randomStart = true;  // desync multiple torches\r
        anim.Play();\r
    }\r
}\r
\`\`\`\r
\r
The frame list is edited in the Inspector (or from code with \`AddSprite()\` / \`SetSprite()\`). For anything driven by game logic — walk/run/jump blending, transitions, events — use the full **Animator** instead: see the [Animation & the Animator](/tutorials/animation) tutorial.\r
\r
## The other 2D renderers\r
\r
| Behaviour | Use it for |\r
|-----------|-----------|\r
| \`TextureRectRenderer\` | Drawing a sub-rectangle of a texture directly (pixels or normalized UVs) without creating sprites. |\r
| \`LineRenderer\` | Polylines with a width curve and color gradient — lasers, ropes, debug paths. |\r
| \`RenderTextureRenderer\` | Displaying a \`RenderTexture\` that a camera renders into — minimaps, mirrors, picture-in-picture. |\r
\r
All of them inherit the same sorting-layer, color and material properties from \`Renderer\`, so everything you learned above applies.\r
\r
## Where to go next\r
\r
Your sprites are on screen — now light them up with [2D Lights & Shadows](/tutorials/lights), or bring them to life with the [Animator](/tutorials/animation).\r
`},{id:`lights`,title:`2D Lights & Shadows`,icon:`fa-lightbulb`,category:`2D Graphics`,blurb:`Light your scenes with global, point, sprite and custom-shaped lights, plus 2D shadows.`,md:`# 2D Lights & Shadows\r
\r
Lighting turns a flat scene into a moody one. Comet ships a full 2D lighting pipeline: five light types, four blend modes, soft and crisp shadows, and normal-map support — all layer-aware and fully scriptable.\r
\r
![A Point Light on the ship's engine: the radius gizmo in the Scene view, and every light property in the Inspector.](/tutorials/light-scene.png)\r
\r
## How 2D lighting works in Comet\r
\r
Lights in Comet accumulate into a per-**sorting-layer** light buffer. That single sentence has two important consequences:\r
\r
1. **Every light declares which sorting layers it affects.** By default the **All Sorting Layers** toggle is on and the light reaches everything; untick it to pick specific layers — a light whose list doesn't include the layer a sprite renders on will never touch that sprite, no matter how close it is.\r
2. **Lights compose with a blend mode**, per light:\r
\r
| Blend Mode | Effect |\r
|------------|--------|\r
| \`Additive\` | Brightens what is below — the default for almost everything. |\r
| \`Subtract\` | Darkens — great for pockets of darkness or negative lights. |\r
| \`Mix\` | Alpha-blends the light color over the layer. |\r
| \`Mask\` | Multiplies — use it to reveal or hide by light shape. |\r
\r
There is no separate "ambient light" setting: an ambient is simply a **GlobalLight** with a low intensity added to your layers.\r
\r
## The five light types\r
\r
![All five light types on a dark backdrop: a green spotlight cone, red and blue point lights, a yellow hexagonal parametric light, and a magenta freeform light.](/tutorials/light-types.png)\r
\r
All lights are behaviours added from **Add Behaviour → Lighting** (\`Global Light\`, \`Point Light\`, \`Freeform Light\`, \`Parametric Light\`, \`Sprite Light\`). They share a common base (color, intensity, blend mode, shadows, sorting layers) and each adds its own shape:\r
\r
### GlobalLight\r
\r
A directional, sun-like light that hits everything on its layers equally, regardless of position. Use it for ambient fill and daylight. Its only extra property is **Max Shadow Distance** — how far from the view shadows are still rendered (\`0\` = unlimited).\r
\r
### PointLight\r
\r
Light radiating from a point, with angular and radial falloff — your lamps, torches, spotlights, projectiles:\r
\r
- **Inner / Outer Radius** — full intensity inside the inner radius, fading to zero at the outer one.\r
- **Inner / Outer Angle** — narrow these from 360° to make a cone spotlight.\r
- **Falloff** — the shape of the fade curve (0–1).\r
- **Texture** — optional cookie texture to mask the light.\r
\r
### FreeformLight\r
\r
A light whose shape is a **custom polygon** you edit right in the scene view — click **Edit Shape** in its Inspector and drag the vertices. Ideal for light shafts through windows or oddly-shaped glowing areas. **Falloff Radius** controls how far the light fades past the polygon's edges.\r
\r
### ParametricLight\r
\r
Like Freeform, but the shape is a regular polygon: pick the number of **Sides** (3–39, higher ≈ circle) and a **Radius**. Cheaper than Freeform and perfect for simple geometric glows.\r
\r
### SpriteLight\r
\r
The light's shape *is a sprite*: its alpha channel masks the light. Stained-glass windows, glowing signs, projected logos. **Cookie Scale** and **Cookie Offset** adjust the sprite within the light.\r
\r
## Common light properties\r
\r
Every light exposes these in the Inspector:\r
\r
| Property | Meaning |\r
|----------|---------|\r
| **Color** | The light's color. |\r
| **Intensity** | Multiplier over the color — values above 1 overdrive, negative values darken. |\r
| **Sorting Layers** | The layers this light affects — **All Sorting Layers** by default, or a hand-picked list. |\r
| **Height** | Virtual Z height used by normal-mapped sprites to fake relief. No normal map → no visible effect. |\r
| **Blend Mode** | \`Additive\`, \`Subtract\`, \`Mix\` or \`Mask\`. |\r
| **Cast Shadows** | Enables shadow rendering for this light (see below). |\r
\r
## Shadows\r
\r
Two pieces cooperate to produce 2D shadows:\r
\r
1. **Lights** opt in with **Cast Shadows** and choose a **Shadow Mode**:\r
   - \`Soft\` — ray-marched, soft-edged penumbras. Prettier, more expensive. **Shadow Softness** controls the penumbra.\r
   - \`Crisp\` — sharp shadow-map shadows. Cheap and stylized.\r
\r
   Both modes share **Shadow Color** (the tint of shadowed areas) and **Shadow Strength** (0 = invisible, 1 = fully dark).\r
\r
2. **Occluders** are entities with a **Shadow Caster** behaviour (**Add Behaviour → Lighting → Shadow Caster**). Its **Shape Source** is either:\r
   - \`Sprite\` — reuses the occluder polygon authored in the [Sprite Editor's Shadow Caster tool](/tutorials/sprite-rendering), or\r
   - \`Custom\` — a polygon you edit in the scene, with a **Closed** toggle and a **Cull Mode** for one-sided shadows.\r
\r
   Shadow Casters also filter by **Sorting Layers**, so an occluder only blocks lights on matching layers.\r
\r
![A Point Light casting real-time shadows across a tilemap: the houses block the light and drop shadow wedges over the lit ground.](/tutorials/shadows.png)\r
\r
## Scripting lights\r
\r
Lights are regular behaviours: fetch them with the static \`Get\` accessor and drive any property. A flickering torch:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class TorchLight : CometBehaviour\r
{\r
    private PointLight torch;\r
    private float time = 0.0F;\r
\r
    void Start()\r
    {\r
        torch = PointLight::Get(entity);\r
        torch.color = Color(1.0F, 0.7F, 0.3F, 1.0F); // warm orange\r
        torch.outerRadius = 4.0F;\r
        torch.fallOff = 0.6F;\r
        torch.castShadows = true;\r
        torch.shadowMode = ShadowMode::SOFT;\r
        torch.shadowSoftness = 0.8F;\r
    }\r
\r
    void Update()\r
    {\r
        // Two overlapping sine waves make a cheap, organic flicker.\r
        time += Time::GetDeltaTime();\r
        torch.intensity = 1.5F + Math::Sin(time * 9.0F) * 0.15F + Math::Sin(time * 23.0F) * 0.08F;\r
    }\r
}\r
\`\`\`\r
\r
A day/night cycle driving a GlobalLight, including which layers it lights:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class DayNightCycle : CometBehaviour\r
{\r
    private GlobalLight sun;\r
    private float dayTime = 0.0F;      // 0..1 over a full day\r
    float dayLengthSeconds = 120.0F;\r
\r
    void Start()\r
    {\r
        sun = GlobalLight::Get(entity);\r
\r
        array<string> layers = {"Background", "Default", "Characters"};\r
        sun.SetSortingLayers(layers);\r
    }\r
\r
    void Update()\r
    {\r
        dayTime += Time::GetDeltaTime() / dayLengthSeconds;\r
        if (dayTime > 1.0F)\r
        {\r
            dayTime -= 1.0F;\r
        }\r
\r
        // Bright warm white at noon, dim blue at midnight.\r
        float daylight = (Math::Sin(dayTime * 6.2831853F) + 1.0F) * 0.5F;\r
        sun.intensity = 0.25F + daylight * 0.9F;\r
        sun.color = Color(0.55F + daylight * 0.45F,\r
                          0.6F + daylight * 0.4F,\r
                          0.8F + daylight * 0.1F,\r
                          1.0F);\r
    }\r
}\r
\`\`\`\r
\r
Every light type has the same accessors as any behaviour — \`PointLight::Get(entity)\`, \`PointLight::GetAll(entity)\`, \`PointLight::GetInParent(entity)\`, \`PointLight::GetInChildren(entity)\` — and the generic \`BaseLight::Get(entity)\` works when you don't care which kind it is.\r
\r
## Normal maps and the Height property\r
\r
If a sprite has a **normal map** assigned (via the Sprite Editor's **Secondary Textures** tool), lights shade it as if it had depth. The light's **Height** property is its virtual distance above the 2D plane: low values give dramatic, grazing relief; high values flatten the effect. Without a normal map, \`height\` changes nothing — don't be surprised when the slider seems dead on flat art.\r
\r
## Performance notes\r
\r
- **Crisp shadows are cheaper than Soft** — reserve soft shadows for hero lights.\r
- Shape cost grows with complexity: **Point < Parametric < Freeform**.\r
- Lights only pay for the sorting layers they affect. Keep the \`Sorting Layers\` lists tight.\r
- A handful of lights is fine on every platform; hundreds of shadow-casting lights are not. Profile on your weakest target.\r
\r
## Where to go next\r
\r
Combine lights with the sprites you set up in [Sprite Rendering](/tutorials/sprite-rendering), or give your scene motion with [Animation & the Animator](/tutorials/animation).\r
`},{id:`tilemap`,title:`Tilemaps & Rule Tiles`,icon:`fa-border-all`,category:`2D Graphics`,blurb:`Paint worlds with grids, animated tiles, auto-tiles and neighbour-aware rule tiles.`,md:`# Tilemaps & Rule Tiles\r
\r
Tile-based worlds — platformers, dungeons, strategy maps — are built from a **Grid** that defines the cell layout and a **TilemapRenderer** that paints **tiles** into those cells. Comet's tile system goes well beyond static sprites: animated tiles, position-seeded random tiles, and neighbour-aware **rule tiles** and **auto-tiles** that pick the right sprite automatically.\r
\r
![The Grid and Tilemap Renderer components in the Inspector.](/tutorials/tilemap-inspector.png)\r
\r
## Grid + Tilemap Renderer\r
\r
Two behaviours work together, both added from **Add Behaviour**:\r
\r
- **Grid** — owns the cell geometry: **Cell Size** (world units per cell) and **Cell Type** (\`Rectangular\`, \`Isometric\`, \`Hexagonal Flat\`, \`Hexagonal Pointed\`). It converts between world positions and integer cell coordinates.\r
- **Tilemap Renderer** — a \`Renderer\` that stores which tile sits in each cell and draws them. It has the usual sorting-layer properties plus a global **Animation Frame Rate** for animated tiles and a **Tile Anchor**.\r
\r
Cells are addressed with **\`Vector2i\`** integer coordinates. The renderer works on the Grid attached to the same entity.\r
\r
## Tiles are assets\r
\r
A tile is not just a sprite — it's a **tile asset** (a \`.cometObject\`) that decides, per cell, *which* sprite to show, what colour and what collider to generate. Comet ships a whole hierarchy of tile types, all of which you can create as assets and extend:\r
\r
| Tile type | What it does |\r
|-----------|--------------|\r
| **Tile** | A single fixed sprite. |\r
| **Animated Tile** | Cycles through several sprites at a speed. |\r
| **Random Tile** | Picks a sprite per cell from a position-seeded hash (stable across reloads). |\r
| **Weighted Random Tile** | Like Random, but with per-sprite probabilities. |\r
| **Pipeline Tile** | Chooses a sprite from its 4 orthogonal neighbours — pipes, wires, walls. |\r
| **Auto Tile** | 2×2 or 3×3 bitmask autotiling — the classic ~47-sprite terrain system. |\r
| **Rule Tile** | The most flexible: a list of rules matching neighbour cells, with rotation/mirror transforms. |\r
\r
Isometric and hexagonal variants of Rule Tile exist too (\`Isometric Rule Tile\`, \`Hexagonal Rule Tile\`).\r
\r
## Painting from AngelScript\r
\r
Grab the renderer and set tiles by cell. \`null\` erases:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Tilemaps;\r
\r
class LevelBuilder : CometBehaviour\r
{\r
    TileBase groundTile;   // assign a tile asset in the Inspector\r
\r
    void Start()\r
    {\r
        Grid grid = Grid::Get(entity);\r
        TilemapRenderer tilemap = TilemapRenderer::Get(entity);\r
\r
        // Lay a 20x3 floor.\r
        array<Vector2i> cells;\r
        array<TileBase> tiles;\r
        for (int x = 0; x < 20; x++)\r
        {\r
            for (int y = 0; y < 3; y++)\r
            {\r
                cells.insertLast(Vector2i(x, y));\r
                tiles.insertLast(groundTile);\r
            }\r
        }\r
        tilemap.SetTiles(cells, tiles);\r
\r
        // Query and erase.\r
        if (tilemap.HasTile(Vector2i(5, 2)))\r
        {\r
            tilemap.SetTile(Vector2i(5, 2), null);\r
        }\r
\r
        // World <-> cell conversion.\r
        Vector2i cellUnderMouse = grid.WorldPositionToCellPosition(Vector2(3.5F, 1.2F));\r
        Vector2 cellCentre = grid.CellPositionToWorldPosition(cellUnderMouse);\r
    }\r
}\r
\`\`\`\r
\r
Key \`TilemapRenderer\` calls: \`SetTile(cell, tile)\`, \`SetTiles(cells, tiles)\`, \`GetTile(cell)\`, \`HasTile(cell)\`, \`SetColor(cell, color)\`, \`RefreshTile(cell)\`, \`RefreshAllTiles()\`, \`ClearAllTiles()\`.\r
\r
> [!TIP]\r
> \`SetTiles()\` (plural) applies a whole batch in one call and is much faster than looping \`SetTile()\` when you generate a level procedurally.\r
\r
## Creating tiles\r
\r
Tiles come from your sprite art. The fastest path — and the one that creates the tile assets *for* you:\r
\r
1. **Import and slice your tileset.** Drop a spritesheet in, set its Texture Type to \`Sprite and UI\`, and slice it into individual sprites in the [Sprite Editor](/tutorials/sprite-rendering) (grid slicing is ideal for a tileset).\r
2. **Open the Tile Palette panel** (\`Window → Tile Palette\`) and **create a palette** — give it a name and a cell size matching your tiles.\r
3. **Drag the sliced spritesheet onto the palette.** The panel literally invites you to *"Drag Spritesheet, Sprite or a Tile here"* — drop it and Comet **auto-creates a simple \`Tile\` asset for every sprite** and lays them out in the palette. That's your tile set, created in one gesture.\r
\r
![The Tile Palette panel with a sliced spritesheet turned into tiles.](/tutorials/tile-palette.png)\r
\r
### Smarter tiles\r
\r
For tiles with behaviour, create the tile asset explicitly from the Project panel's create menu, then drag it into the palette:\r
\r
- **Animated Tile** — hand it a list of sprites and a speed.\r
- **Random / Weighted Random Tile** — give it several sprites; each cell picks one (stably, seeded by position).\r
- **Auto Tile** — supply the 16 (2×2) or ~47 (3×3) mask sprites and it picks the right edge/corner piece from its neighbours automatically.\r
- **Rule Tile** — the most powerful. Its inspector shows a **3×3 rule grid**: click a neighbour cell to require it be the **same tile** (green), a **different tile** (red), or **don't-care** (grey), and click the center to cycle a rotation/mirror transform so one rule covers several orientations. Add rules top to bottom — the **first rule that matches a cell's neighbours wins**.\r
\r
## Painting a tilemap\r
\r
With a palette ready and a tilemap entity in the scene (a **Grid** + **Tilemap Renderer**):\r
\r
1. **Pick a tile** in the Tile Palette panel.\r
2. **Choose a tool** from the palette toolbar — **Brush** (single cells), **Box Brush** (drag a rectangle), **Fill** (flood-fill an area), **Picker** (eyedrop a tile already in the map) or **Rubber** (erase).\r
3. **Paint into the scene.** A grid overlay snaps to cells; drag to lay down tiles.\r
\r
![Painting tiles into a tilemap in the scene view.](/tutorials/tilemap-painting.png)\r
\r
Rule tiles and auto-tiles update themselves as you paint — lay a strip of wall and the corners and edges resolve automatically.\r
\r
## Physics: the Tilemap Collider\r
\r
Add a **Tilemap Collider** and the solid tiles automatically get collision. Each tile asset declares its **collider type** — \`Sprite\` (outline of the sprite), \`Grid\` (full cell) or \`None\` — so decorative tiles stay walk-through while walls block. Query it from code with \`HasColliderAt(x, y)\`.\r
\r
## Writing a custom scripted tile\r
\r
Because tiles are script classes, you can author your own by extending \`TileBase\` (or \`TileSingle\`) and overriding the info callbacks:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Tilemaps;\r
\r
class GlowTile : TileSingle\r
{\r
    Sprite baseSprite;\r
    float glow = 0.5F;\r
\r
    void OnGetTileInfo(const Vector3i &in position, TilemapRenderer tilemap, TileInfo tileInfo)\r
    {\r
        TileSingle::OnGetTileInfo(position, tilemap, tileInfo);\r
        tileInfo.sprite = baseSprite;\r
        tileInfo.color = Color(1.0F, 1.0F, 1.0F, 1.0F) * glow;\r
    }\r
}\r
\`\`\`\r
\r
\`OnGetTileInfo\` fills a \`TileInfo\` (sprite, color, collider type, offset/rotation/scale) for each cell; \`RefreshTile\` lets neighbour-aware tiles react when an adjacent cell changes. This is exactly how the built-in Rule and Auto tiles are implemented.\r
\r
> [!NOTE]\r
> Random, Weighted-Random and Auto tiles seed their choice from the **cell position**, not a live RNG — so a given cell always shows the same sprite across save/reload, which is what you want for a stable-looking world.\r
\r
## Where to go next\r
\r
Give your tiled level depth with [2D Lights & Shadows](/tutorials/lights), collide with it using [Physics](/tutorials/physics), or let enemies path across it with [Navigation](/tutorials/navigation).\r
`},{id:`particles`,title:`Particle Systems`,icon:`fa-fire`,category:`2D Graphics`,blurb:`Fire, smoke, sparks and magic with a modular, Unity-style particle system.`,md:`# Particle Systems\r
\r
Fire, smoke, sparks, magic, rain, explosions — all of it comes from the **Particle System**, a modular emitter modelled after Unity's. You start with an emitter and switch on **modules** — emission, shape, colour-over-lifetime, velocity, size, texture animation — each shaping the particles a little more.\r
\r
![The Particle System playing in the editor with the module inspector and preview controls.](/tutorials/particles-scene.png)\r
\r
## The emitter and its modules\r
\r
Add a **Particle System** from **Add Behaviour** and it starts emitting immediately in the editor, with a preview overlay (**Play / Pause / Stop**, playback speed and a scrubber) in the scene view.\r
\r
The top of the inspector is the **System** block — the properties every particle is born with:\r
\r
- **Duration** and **Loop** — the length of one emission cycle and whether it repeats.\r
- **Start Lifetime / Start Speed / Start Size / Start Rotation / Start Color** — initial values. Each is a **value selector**: a constant, a random range, or a curve/gradient over the cycle.\r
- **Gravity Scale**, **Max Particles**, **Simulation Space** (\`Local\` follows the emitter, \`World\` leaves particles behind), and **Play On Awake**.\r
\r
Below that sit the toggleable **modules**, each with an enable checkbox:\r
\r
| Module | Effect |\r
|--------|--------|\r
| **Emission** | Rate-per-second plus timed **Bursts**. |\r
| **Shape** | Where particles spawn: \`Circle\`, \`Rectangle\` or \`Edge\`. |\r
| **Velocity / Force / Limit Velocity over Lifetime** | Push, drag and steer particles as they age. |\r
| **Color / Size / Rotation over Lifetime** | Fade, grow and spin over each particle's life. |\r
| **Color / Size / Rotation by Speed** | Modulate by how fast a particle is moving. |\r
| **Texture Animation** | Flipbook the particle sprite from a sheet or sprite list. |\r
| **Renderer** | Draw mode (\`Chunk\` batches, \`Individual\` allows per-particle material) and sort order. |\r
\r
## Value selectors and gradients\r
\r
The recurring pattern is the **value selector** — wherever you see a property like Start Size or a lifetime curve, it can be a **constant**, a **random between two values**, or a **curve** (float) / **gradient** (colour) sampled over the particle's normalized age. This is what makes a flame fade from white to orange to transparent, or embers shrink as they rise.\r
\r
## Controlling it from AngelScript\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::ParticleSystemModule;\r
\r
class Explosion : CometBehaviour\r
{\r
    void Start()\r
    {\r
        ParticleSystem particles = ParticleSystem::Get(entity);\r
        particles.loop = false;\r
        particles.maxParticles = 500;\r
\r
        // Configure emission with a one-shot burst of debris.\r
        ParticlePropertyEmission emission = particles.emission;\r
        emission.enabled = true;\r
\r
        Burst burst;\r
        burst.time = 0.0F;\r
        burst.probability = 1.0F;\r
        burst.count.constant = 60;\r
        emission.AddBurst(burst);\r
\r
        particles.Play();\r
    }\r
\r
    void Update()\r
    {\r
        ParticleSystem particles = ParticleSystem::Get(entity);\r
        // Emit a puff of smoke on demand.\r
        if (Input::GetKeyDown(KeyCode::SPACE))\r
        {\r
            particles.Emit(20);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\`Play()\`, \`Pause()\`, \`Stop()\`, \`Clear()\` and \`Emit(count)\` drive playback; \`Simulate(time, restart)\` fast-forwards the simulation (handy for pre-warming an effect so it looks established the instant it appears). Read-only \`isPlaying\`, \`isEmitting\`, \`particleCount\` and \`isAlive\` report state.\r
\r
> [!TIP]\r
> \`simulationSpace = ParticleSystemSimulationSpace::WORLD\` is the difference between a torch flame that drags a trail as the torch moves (World) and one that stays glued to the torch (Local). Pick per effect.\r
\r
## Building a fire effect\r
\r
The classic recipe, all in the inspector:\r
\r
1. **Shape** → small \`Circle\` at the base.\r
2. **Start Color** → bright yellow; **Color over Lifetime** → gradient yellow → orange → transparent.\r
3. **Start Size** → medium; **Size over Lifetime** → curve shrinking to zero.\r
4. **Velocity over Lifetime** → upward, with a little turbulence via the random-between mode.\r
5. **Emission** → a steady rate, no bursts.\r
6. **Renderer** → an additive material so overlapping particles glow.\r
\r
## UI particles\r
\r
Need particles *inside* a UI canvas — confetti on a victory screen, sparkles on a button? Use **UI Particle System** instead. It's the same module set but renders in the UI layer under a \`RectTransform\`, so it respects canvas sorting and masks. See the [UI tutorial](/tutorials/ui-system) for the canvas basics.\r
\r
## Where to go next\r
\r
Trigger a burst from an [animation event](/tutorials/animation), attach one to a [networked spawn](/tutorials/networking), or light it dramatically with [2D lights](/tutorials/lights).\r
`},{id:`video`,title:`Video Playback`,icon:`fa-film`,category:`2D Graphics`,blurb:`Play WebM video onto a render texture or camera plane, with audio routed through a mixer.`,md:`# Video Playback\r
\r
Cutscenes, animated backgrounds, in-game screens — the **Video Player** decodes **WebM** video (VP8/VP9 with Opus/Vorbis audio) and renders it onto a render texture, a camera plane, or straight into your scene, with the audio routed through your mixer.\r
\r
![The Video Player inspector with its source, render and audio options.](/tutorials/video-inspector.png)\r
\r
## Importing a video\r
\r
Drop a \`.webm\` file into your project's \`Assets\` folder and it imports as a **Video Clip** resource, exposing \`duration\`, \`frameRate\`, \`width\` and \`height\`.\r
\r
> [!IMPORTANT]\r
> Comet plays **WebM only** (VP8/VP9 video, Opus/Vorbis audio) — not MP4/MOV/AVI. Re-encode other formats to WebM first (e.g. with \`ffmpeg -i input.mp4 output.webm\`). Decoding is software (libvpx), so keep large videos to a sensible resolution.\r
\r
## The Video Player behaviour\r
\r
Add a **Video Player** (from **Add Behaviour**) and configure:\r
\r
| Field | Meaning |\r
|-------|---------|\r
| **Source** | \`Video Clip\` (a resource) or \`Url\` (a file path / URL string). |\r
| **Video Clip** | The clip to play, when Source is \`Video Clip\`. |\r
| **Play On Awake** | Start automatically. |\r
| **Playback Speed** | 0–10× speed. |\r
| **Loop** | Restart on end (gapless). |\r
| **Skip Frames On Drop** | Drop frames to stay in sync if decoding can't keep up. |\r
| **Aspect Ratio** | \`Fit Horizontally\` (default), \`Fit Inside\`, \`Stretch\`, ... |\r
| **Render Mode** | \`Render Texture\` (default), \`Camera Near Plane\` or \`Camera Far Plane\`. |\r
| **Target Texture** | The \`RenderTexture\` frames are written to (Render Texture mode). |\r
| **Audio Output Mode** | \`Direct\` (per-track volume/mute), \`Audio Source\` (route through a mixer) or \`None\`. |\r
\r
### Where the picture goes\r
\r
- **Render Texture** — frames are written into a \`RenderTexture\` asset. Display it anywhere a texture works: a \`TextureRectRenderer\`, a UI \`Image\`, or a material. This is the most flexible mode.\r
- **Camera Near / Far Plane** — the video draws directly on a \`Camera\`'s near or far plane with an adjustable **Alpha**, perfect for full-screen backgrounds or overlays.\r
\r
### Where the sound goes\r
\r
\`Direct\` gives you per-track volume and mute. \`Audio Source\` routes each audio track through an assigned **AudioSource**, so the video's sound obeys your [mixer groups](/tutorials/audio) — duck it under a \`Music\` bus, apply reverb, whatever.\r
\r
## Controlling playback from AngelScript\r
\r
This is the Sandbox project's video controller, verbatim — space to pause/resume, arrows to scrub:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Video;\r
\r
class VideoController : CometBehaviour\r
{\r
    float stepToMove = 0.5F;\r
    private VideoPlayer videoPlayer;\r
\r
    void Start()\r
    {\r
        videoPlayer = VideoPlayer::Get(entity);\r
    }\r
\r
    void Update()\r
    {\r
        if (Input::GetKeyDown(KeyCode::SPACE))\r
        {\r
            if (videoPlayer.isPaused) { videoPlayer.Play(); }\r
            else { videoPlayer.Pause(); }\r
        }\r
        if (Input::GetKeyDown(KeyCode::LEFT))\r
        {\r
            videoPlayer.Seek(videoPlayer.currentTime - stepToMove);\r
        }\r
        if (Input::GetKeyDown(KeyCode::RIGHT))\r
        {\r
            videoPlayer.Seek(videoPlayer.currentTime + stepToMove);\r
        }\r
    }\r
}\r
\`\`\`\r
\r
The API mirrors the inspector: \`Play()\`, \`Pause()\`, \`Stop()\`, \`Seek(seconds)\`, \`Step()\` (advance one frame), plus \`isPlaying\`, \`isPaused\`, \`currentTime\`, \`duration\`, \`frameRate\`. Audio tracks are toggled with \`SetAudioTrackEnabled(i, on)\` and \`SetAudioTrackDirectVolume(i, v)\`.\r
\r
## A skippable cutscene\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Video;\r
using namespace CometEngine::SceneManagement;\r
\r
class Cutscene : CometBehaviour\r
{\r
    private VideoPlayer player;\r
\r
    void Start()\r
    {\r
        player = VideoPlayer::Get(entity);\r
        player.loop = false;\r
        player.Play();\r
    }\r
\r
    void Update()\r
    {\r
        // Advance to gameplay when the clip ends or the player skips.\r
        bool finished = !player.isPlaying && !player.isPaused && player.currentTime >= player.duration - 0.05F;\r
        if (finished || Input::GetKeyDown(KeyCode::ESCAPE))\r
        {\r
            SceneManager::LoadScene("Level1");\r
        }\r
    }\r
}\r
\`\`\`\r
\r
> [!NOTE]\r
> Web builds depend on the browser's WebM codec support (VP9 is the safest bet). There are no native sockets or threads on web, but video playback itself works — just profile large clips.\r
\r
## Where to go next\r
\r
Show your video on a [render texture in the UI](/tutorials/ui-system), route its audio through a [mixer group](/tutorials/audio), or play it as an intro before your [first scene loads](/tutorials/build-and-patches).\r
`},{id:`animation`,title:`Animation & the Animator`,icon:`fa-person-running`,category:`Animation`,blurb:`Animation clips, keyframes, events, the state machine editor, parameters and transitions.`,md:`# Animation & the Animator\r
\r
Comet's animation stack has two levels. **Animation clips** keyframe properties over time; the **Animator** plays those clips through a visual state machine with parameters and transitions — idle to run, run to jump, jump to fall — exactly the workflow you know from big engines, tailored to 2D.\r
\r
## Choosing your tool\r
\r
| | **AnimatedSprite** | **Animator** |\r
|---|---|---|\r
| What it does | Cycles through a list of sprites at a fixed FPS | Plays Animation clips through a state machine |\r
| Can animate | Sprite frames only | Any keyframeable property: transform, sprite, colors, your script fields |\r
| Logic | Play / Pause / Stop | States, transitions, conditions, parameters, events, state scripts |\r
| Best for | Torches, coins, simple loops | Characters and anything gameplay-driven |\r
\r
\`AnimatedSprite\` is covered at the end of the [Sprite Rendering tutorial](/tutorials/sprite-rendering). Everything below is about the full pipeline: **Animation → AnimatorController → Animator**.\r
\r
## Creating an Animation clip\r
\r
Right-click in the **Project** panel and choose **Create Resource → Animation**. Double-click the new asset to open the **Animation Timeline** panel:\r
\r
![The Animation Timeline panel: transport controls, the frame ruler, samples and the Add Property track list.](/tutorials/animation-timeline.png)\r
\r
The timeline works the way you'd expect:\r
\r
1. **Add Property** — pick any animatable property from the behaviours on the target entity: \`Transform\` position/rotation/scale, \`SpriteRenderer\` color or flips, even public fields of your own scripts.\r
2. Move the **scrubber** to a frame.\r
3. Change the value — in the Inspector or by moving the entity in the scene — and **record a keyframe**. Keyframes show as diamonds on the track.\r
4. Values between keyframes are interpolated with editable curves.\r
\r
Clip-level settings live on the Animation resource itself:\r
\r
- **Samples** — timeline resolution in frames per second (default 60).\r
- **Loop** — whether the clip wraps around or plays once.\r
- \`length\` is derived from your last keyframe.\r
\r
### Animation events\r
\r
Keyframes change *what the sprite looks like*; **animation events** make things *happen* at exact moments in the clip. An event calls a method on one of the entity's scripts when playback crosses a specific frame — the reliable way to sync gameplay to animation: a footstep sound on the frame the foot lands, a hitbox spawned on the exact frame of a sword swing, a screen shake when a monster stomps.\r
\r
In the Animation Timeline, each animated entity has an **event track** running along the top. To add an event:\r
\r
1. Move the scrubber to the frame where it should fire.\r
2. Right-click the event track (or use its **Add Event** control) at that frame.\r
3. Pick the target **behaviour**, the **method** to call, and fill in any argument values the method takes.\r
\r
A diamond marker appears on the event track at that frame. The method is just an ordinary function on one of your scripts — no special attribute needed:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class Player : CometBehaviour\r
{\r
    AudioSample footstepSound;   // assigned in the Inspector\r
\r
    // Called by the animation event on the foot-plant frames.\r
    void OnFootstep()\r
    {\r
        AudioSource::PlaySingle(footstepSound, 0.6F);\r
    }\r
\r
    // Events can pass arguments configured in the timeline.\r
    void SpawnHitbox(int damage)\r
    {\r
        Debug::Log("swing hitbox active for " + damage + " damage");\r
    }\r
}\r
\`\`\`\r
\r
The \`PlayerRun\` clip in the screenshot above, for instance, has two \`OnFootstep\` events — one on each frame where a foot hits the ground — so the footstep audio stays perfectly in step with the run cycle no matter how the animation's speed is scaled.\r
\r
> [!NOTE]\r
> Events fire when playback *crosses* their frame during normal play. When you \`Seek()\` to scrub the animator deterministically (for a network correction, say), pass \`fireEvents = false\` so you don't retrigger sounds and hitboxes while jumping through the timeline.\r
\r
> [!WARNING]\r
> An event calls a method **by name** on the target behaviour. If you rename or remove that method in your script, the event silently stops firing — so keep event-target method names stable, or update the event when you refactor.\r
\r
## Building the state machine\r
\r
Right-click the **Project** panel → **Create Resource → Animator Controller**, then double-click it to open the **Animator** graph:\r
\r
![The Animator window: the parameters panel on the left, the state-machine graph with its Entry, Any State and Exit nodes on the right.](/tutorials/animator-graph.png)\r
\r
The workflow, end to end:\r
\r
1. **Create states** — right-click the background → **Create State**. Assign each state an Animation clip and a name (\`Idle\`, \`Run\`, \`Jump\`...).\r
2. **Pick the entry state** — right-click a state → **Set as Entry**. This is where the machine starts.\r
3. **Connect them** — right-click a state → **Create Transition To**, then click the target state.\r
4. **Add parameters** — in the **Parameters** panel, click **+ Add Parameter** and choose a type:\r
\r
   | Type | Use for |\r
   |------|---------|\r
   | \`Float\` | Continuous values — speed, aim angle. |\r
   | \`Int\` | Discrete values — weapon id, combo step. |\r
   | \`Bool\` | Persistent flags — grounded, crouching. |\r
   | \`Trigger\` | One-shot events — jump, hit. Consumed automatically when a transition uses it. |\r
\r
5. **Add conditions to transitions** — right-click a transition → **Edit Conditions**. Combine parameter checks (\`speed\` greater than \`0.1\`, \`isGrounded\` is true...); *all* conditions must pass. Enable **Exit Time** on a transition to also require the current animation to finish first — ideal for attack chains that must not cut off mid-swing.\r
\r
For big graphs, group states into **sub-state machines** (right-click → **Create State Machine**, double-click to enter). States inside are addressed with a slash path like \`"Combat/Attack1"\`.\r
\r
> [!TIP]\r
> The controller's **Conditions Check Mode** decides *when* transitions are evaluated: only when a parameter changes or an animation ends (cheap, default) or every animation update (reactive, a bit costlier).\r
\r
## Playing it on an entity\r
\r
Select your entity, **Add Behaviour → Animator**, and drop the controller into the **Animator Controller** field. Useful inspector options:\r
\r
- **Speed** — global playback multiplier for this entity.\r
- **Update Time Mode** — \`Scaled Time\` (respects \`Time\` scaling and pauses), \`Unscaled Time\` (UI, pause menus) or \`Physics Time\` (sync with FixedUpdate).\r
- **Keep State On Disable** — when re-enabled, resume where it left off instead of restarting from entry.\r
\r
## Driving the Animator from AngelScript\r
\r
Your gameplay code never plays clips directly — it feeds **parameters** and lets the state machine decide:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class PlayerAnimation : CometBehaviour\r
{\r
    private Animator animator;\r
\r
    void Start()\r
    {\r
        animator = Animator::Get(entity);\r
    }\r
\r
    void Update()\r
    {\r
        float moveX = 0.0F;\r
        if (Input::GetKeyPressed(KeyCode::A)) moveX -= 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::D)) moveX += 1.0F;\r
\r
        animator.SetFloat("speed", Math::Abs(moveX));\r
        animator.SetBool("isMoving", moveX != 0.0F);\r
\r
        if (Input::GetKeyDown(KeyCode::SPACE))\r
        {\r
            animator.SetTrigger("jump"); // consumed by the Idle->Jump transition\r
        }\r
    }\r
}\r
\`\`\`\r
\r
You can also query and force states directly:\r
\r
\`\`\`angelscript\r
// What is playing right now?\r
AnimatorStateInfo state = animator.GetCurrentState();\r
if (state !is null)\r
{\r
    Debug::Log(state.name + " at " + state.normalizedTime);\r
}\r
\r
// Bypass transitions entirely (cutscenes, deaths):\r
animator.Play("Death", 0.0F);            // state name\r
animator.Play("Combat/Attack1", 0.0F);   // state inside a sub-machine\r
\r
// Deterministically scrub to a point in the current state (e.g. after a\r
// network correction). fireEvents = false skips animation events on the way.\r
animator.Seek(0.5F, false);\r
\`\`\`\r
\r
> [!TIP]\r
> \`SetFloat("speed", ...)\` hashes the parameter name every call. In hot loops, resolve the ID once and reuse it:\r
>\r
> \`\`\`angelscript\r
> private uint64 speedId;\r
> void Start() { speedId = animator.GetParameterID("speed"); }\r
> void Update() { animator.SetFloat(speedId, currentSpeed); }\r
> \`\`\`\r
\r
## State machine behaviours\r
\r
Sometimes logic belongs to a *state*, not to the entity — "play a sound while in \`Alert\`", "enable the hitbox during \`Attack\`". Right-click a state → **Add Script → AnimatorStateBehaviour** and Comet generates a script skeleton for you:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class AlertState : AnimatorStateBehaviour\r
{\r
    // Called when the animator enters this state.\r
    void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo)\r
    {\r
        Debug::Log(animator.entity.name + " entered " + stateInfo.name);\r
    }\r
\r
    // Called every animation update while this state is active.\r
    void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo)\r
    {\r
    }\r
\r
    // Called when the animator leaves this state.\r
    void OnStateExit(Animator animator, AnimatorStateInfo stateInfo)\r
    {\r
    }\r
}\r
\`\`\`\r
\r
The instance lives as long as the controller is in use, and \`Awake()\` / \`OnDestroy()\` bracket its lifetime.\r
\r
## Reusing a controller: Animator Overrides\r
\r
An **Animator Controller Override** (\`Create Resource → Animator Controller Override\`) wraps an existing controller and swaps its clips while keeping every state, transition and parameter. Build the state machine once for "humanoid enemy", then create overrides for the goblin, the skeleton and the knight that only replace the animations:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class SkinSwapper : CometBehaviour\r
{\r
    void ApplySkin(AnimatorControllerOverride skin)\r
    {\r
        Animator::Get(entity).animatorController = skin;\r
    }\r
}\r
\`\`\`\r
\r
From code you can inspect and edit overrides with \`GetOverride()\` / \`SetOverride(original, replacement)\`.\r
\r
## Animator quick reference\r
\r
| Task | Call |\r
|------|------|\r
| Set parameters | \`SetFloat / SetInt / SetBool (name or id, value)\` |\r
| Fire a trigger | \`SetTrigger("jump")\`, cancel with \`ResetTrigger("jump")\` |\r
| Read parameters | \`GetFloat / GetInt / GetBool / GetTrigger\` |\r
| Current state | \`GetCurrentState()\` → \`name\`, \`fullName\`, \`normalizedTime\` |\r
| Force a state | \`Play("StateName", normalizedTime)\` |\r
| Scrub deterministically | \`Seek(normalizedTime, fireEvents)\` |\r
| Playback speed | \`speed\` property |\r
| Reset parameters | \`SetDefaultParameterValues()\` |\r
\r
## Where to go next\r
\r
Hook animation parameters to real movement in the [Navigation tutorial](/tutorials/navigation), or trigger animations across the network in [Networking & Multiplayer](/tutorials/networking).\r
`},{id:`bezier`,title:`Bézier Curves & Paths`,icon:`fa-bezier-curve`,category:`Animation`,blurb:`Author smooth paths and move platforms, cameras and projectiles along them.`,md:`# Bézier Curves & Paths\r
\r
Moving platforms that sweep along a smooth arc, a camera that glides through a level, a projectile that curves to its target — all of these follow a **Bézier curve**. Comet gives you a **Bézier Curve** behaviour to author the path and a **Bézier Curve Follower** to move any transform along it.\r
\r
![The Bézier Curve and Bézier Curve Follower components in the Inspector.](/tutorials/bezier-inspector.png)\r
\r
## The two components\r
\r
Both are added from **Add Behaviour → Diverse**:\r
\r
- **Bézier Curve** — stores the path as a cubic spline: a list of **control points**, each with an anchor and two tangent handles. Its inspector has a small toolbar to **Move Points**, **Move Control Points**, **Add Points** and **Remove Points** directly in the scene view, plus a **Bake Interval** (how finely the curve is sampled for fast lookups).\r
- **Bézier Curve Follower** — moves a transform along a target curve, optionally rotating to face the direction of travel.\r
\r
## Authoring a curve in the editor\r
\r
1. Add a **Bézier Curve** to an entity and select it.\r
2. Click **Add Points** in its inspector toolbar, then click in the scene to drop anchor points — the green spline appears between them.\r
3. Switch to **Move Control Points** and drag the tangent handles to bend each segment.\r
4. Tweak the **Bake Interval** down for a smoother, more accurate follow (at a small memory cost).\r
\r
![A Bézier curve in the Scene view: blue anchor points, red tangent handles and the smooth spline drawn between them.](/tutorials/bezier-curve.png)\r
\r
## Following a curve\r
\r
Add a **Bézier Curve Follower**, set **Curve to Follow** to your curve, then advance it every frame. You drive the distance yourself, which keeps movement speed independent of the curve's length:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class Platform : CometBehaviour\r
{\r
    private BezierCurveFollower follower;\r
    private float distance = 0.0F;\r
    float speed = 2.0F;   // world units per second\r
\r
    void Start()\r
    {\r
        follower = BezierCurveFollower::Get(entity);\r
        follower.loop = true;          // wrap around at the ends\r
        follower.applyRotation = false; // a platform stays level\r
    }\r
\r
    void Update()\r
    {\r
        distance += speed * Time::GetDeltaTime();\r
        follower.MoveAt(distance, transform);\r
    }\r
}\r
\`\`\`\r
\r
- **\`MoveAt(distance, transform)\`** places the transform at an absolute arc-length distance along the curve. With **\`loop = true\`** the distance wraps; with \`loop = false\` it clamps at the ends.\r
- **\`MoveAtNormalized(t, transform)\`** takes \`t\` from 0 to 1 instead — handy when you're driving progress from an animation or a timer rather than a speed.\r
\r
## Facing the direction of travel\r
\r
For a projectile or a character, tick **Apply Rotation** and the follower rotates the transform to point along the curve's tangent. **Look Ahead** sets how far along the curve it samples that tangent — smaller for fast, twitchy followers; larger for slow, smooth ones. **Rotation Offset** adds a fixed angle (if your sprite faces up instead of right), and **Position Offset** shifts it along/perpendicular to the path.\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class HomingMissile : CometBehaviour\r
{\r
    private BezierCurveFollower follower;\r
    private float distance = 0.0F;\r
    float speed = 12.0F;\r
\r
    void Start()\r
    {\r
        follower = BezierCurveFollower::Get(entity);\r
        follower.applyRotation = true;   // nose follows the curve\r
        follower.lookAhead = 0.03F;\r
        follower.loop = false;\r
\r
        BezierCurve curve = BezierCurve::Get(entity);\r
        float length = curve.curve.length;\r
        Debug::Log("flight path is " + length + "m long");\r
    }\r
\r
    void Update()\r
    {\r
        distance += speed * Time::GetDeltaTime();\r
        follower.MoveAt(distance, transform);\r
    }\r
}\r
\`\`\`\r
\r
> [!TIP]\r
> The follower does **not** move on its own — you accumulate \`distance\` and call \`MoveAt\` each frame. That's deliberate: it lets you ease, reverse, pause or ping-pong the motion however you like, and drive several followers along the same shared curve at different speeds.\r
\r
## Building a curve from code\r
\r
You can author the path entirely in script — useful for procedural levels or runtime-generated trajectories:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class RuntimePath : CometBehaviour\r
{\r
    void Start()\r
    {\r
        Curve curve = BezierCurve::Get(entity).curve;\r
        curve.AddPoint(Vector2(0.0F, 0.0F), -1);   // -1 appends\r
        curve.AddPoint(Vector2(5.0F, 3.0F), -1);\r
        curve.AddPoint(Vector2(10.0F, 0.0F), -1);\r
\r
        // Shape the segments with tangent handles.\r
        curve.SetControlPointOut(0, Vector2(2.0F, 0.0F));\r
        curve.SetControlPointIn(1, Vector2(3.0F, 2.0F));\r
\r
        Debug::Log("baked length: " + curve.length);\r
    }\r
}\r
\`\`\`\r
\r
\`AddPoint\`, \`SetControlPointIn/Out\`, \`RemovePoint\` and \`ClearPoints\` edit the point list; \`CalculatePointAt(distance, cubic)\` and \`GetClosestPoint(worldPoint)\` sample it. The bake cache rebuilds automatically after edits — do heavy building in \`Start\`, not every frame.\r
\r
## Where to go next\r
\r
Combine a curve-following camera with your [UI](/tutorials/ui-system), or trigger a projectile's launch from an [input action](/tutorials/input) or [animation event](/tutorials/animation).\r
`},{id:`physics`,title:`Physics: Bodies, Colliders & Joints`,icon:`fa-cubes-stacked`,category:`Physics`,blurb:`Rigid bodies, colliders, triggers, raycasts and joints on the Box2D backend.`,md:`# Physics: Bodies, Colliders & Joints\r
\r
Gravity, collisions, bouncing, ragdolls, vehicles — Comet's 2D physics runs on **Box2D 3.x**. You give an entity a **Rigid Body** to make it move under physics, one or more **Colliders** to give it shape, and optionally **joints** to connect bodies or **effectors** to push them around.\r
\r
![A rigid body with a box collider gizmo, and the Rigid Body inspector.](/tutorials/physics-scene.png)\r
\r
## The three body types\r
\r
Add a **Rigid Body** and pick its **Body Type**:\r
\r
- **Dynamic** — fully simulated: gravity, forces, collisions. Your player, crates, debris.\r
- **Kinematic** — moves only when you set its velocity/position; unstoppable by forces. Moving platforms, scripted hazards.\r
- **Static** — never moves. Level geometry. (An entity with only a collider and no rigid body behaves as static.)\r
\r
The Rigid Body inspector exposes **Mass**, **Gravity Scale**, **Linear/Angular Drag**, axis **constraints**, **Collision Detection** (\`Discrete\` or \`Continuous\` for fast objects) and interpolation.\r
\r
> [!IMPORTANT]\r
> Physics units are **metres**, and simulation runs in **\`FixedUpdate\`**, not \`Update\`. Apply forces and read velocities in \`FixedUpdate\` so they're consistent with the fixed timestep. If your art is in pixels, divide sizes by your pixels-per-unit (e.g. 100 px = 1 m).\r
\r
## Colliders\r
\r
Add a collider from **Add Behaviour** — **Box**, **Circle**, **Capsule**, **Edge**, **Polygon**, **Tilemap** or **Packer** Collider. They render green outline gizmos in the scene. Each collider has:\r
\r
- **Is Trigger** — a trigger detects overlaps but doesn't physically block.\r
- **Friction** and **Bounciness** (restitution), or a shared **Physic Material** asset carrying both.\r
- **Offset** and shape-specific fields (Box \`Size\`, Circle \`Radius\`, ...).\r
\r
## Moving a body\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class PlayerMovement : CometBehaviour\r
{\r
    private RigidBody body;\r
    float moveSpeed = 6.0F;\r
    float jumpImpulse = 8.0F;\r
\r
    void Start()\r
    {\r
        body = RigidBody::Get(entity);\r
    }\r
\r
    void FixedUpdate()\r
    {\r
        // Drive horizontal motion by setting the velocity directly — snappy,\r
        // predictable control that ignores mass. The vertical velocity is left\r
        // untouched so gravity and jumps still work.\r
        float dir = 0.0F;\r
        if (Input::GetKeyPressed(KeyCode::A)) dir -= 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::D)) dir += 1.0F;\r
        body.velocity = Vector2(dir * moveSpeed, body.velocity.y);\r
\r
        // Jump with an instantaneous impulse.\r
        if (Input::GetKeyDown(KeyCode::SPACE))\r
        {\r
            body.ApplyLinearImpulse(Vector2(0.0F, jumpImpulse));\r
        }\r
    }\r
}\r
\`\`\`\r
\r
> [!NOTE]\r
> **Setting \`velocity\` vs. applying forces.** Assigning \`body.velocity\` directly gives snappy, mass-independent control — ideal for a responsive player character or a kinematic platform. Forces are for physical, mass-aware motion: **\`ApplyForce\`** accumulates over the step (thrust, wind, gravity-like pushes) while **\`ApplyLinearImpulse\`** changes velocity instantly (jumps, hits, knockback). There are \`AtPoint\` variants that also impart spin, plus \`ApplyTorque\` / \`ApplyAngularImpulse\` for rotation. Pick velocity for arcade feel, forces for simulation feel.\r
\r
## Collision and trigger callbacks\r
\r
Define these methods on any \`CometBehaviour\` and the engine calls them:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class Hazard : CometBehaviour\r
{\r
    // Solid collisions: Enter / Stay / Exit.\r
    void OnCollisionEnter(Collision collision)\r
    {\r
        Debug::Log("hit " + collision.entity.name +\r
                   " with " + collision.contactPointsCount + " contacts");\r
    }\r
\r
    // Trigger overlaps: Enter / Stay / Exit.\r
    void OnTriggerEnter(Collider other)\r
    {\r
        Debug::Log(other.entity.name + " entered the trigger");\r
    }\r
\r
    void OnTriggerExit(Collider other)\r
    {\r
        Debug::Log(other.entity.name + " left the trigger");\r
    }\r
}\r
\`\`\`\r
\r
\`OnCollisionEnter/Stay/Exit\` fire for solid contacts and hand you a \`Collision\` (the colliders, bodies, entity and contact points). \`OnTriggerEnter/Stay/Exit\` fire for trigger colliders and hand you the other \`Collider\`.\r
\r
## Raycasts and queries\r
\r
Ask the world what's along a ray or inside a box — the foundation of line-of-sight, ground checks and hitscan weapons:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class GroundCheck : CometBehaviour\r
{\r
    bool IsGrounded()\r
    {\r
        Vector2 origin = Vector2(transform.position.x, transform.position.y);\r
        RaycastHit hit = Physics::RaycastClosest(origin, Vector2(0.0F, -1.0F), 1.1F);\r
        return hit !is null;\r
    }\r
\r
    void FireLaser()\r
    {\r
        Vector2 origin = Vector2(transform.position.x, transform.position.y);\r
        RaycastHit hit = Physics::RaycastClosest(origin, Vector2(1.0F, 0.0F), 50.0F);\r
        if (hit !is null)\r
        {\r
            Debug::Log("laser hit " + hit.collider.entity.name +\r
                       " at " + hit.distance + "m, normal " + hit.normal.ToString());\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\`Physics::RaycastClosest / RaycastAny / Raycast\` (all hits) return \`RaycastHit\`s with \`point\`, \`normal\`, \`distance\`, \`collider\` and \`rigidbody\`. \`Physics::QueryAABB(center, size, ...)\` returns every collider in a box. All take an optional layer mask.\r
\r
## Collision layers\r
\r
Configure which layers collide in **Project Settings → Physics** (a 32-layer matrix). From code, \`Physics::IgnoreLayerCollision(a, b, true)\` and \`Physics::DoTheseLayersCollide(a, b)\` manage it at runtime — e.g. make enemy projectiles pass through other enemies.\r
\r
## Joints and effectors\r
\r
**Joints** constrain two bodies: **Hinge** (rotating door, wheel axle, with an optional motor and angle limits), **Distance** / **Spring** (ropes, suspension), **Slider** (elevators), **Wheel** (vehicles), **Fixed**, **Friction**, **Relative** and **Target**. Add one, assign the **Connected Rigid Body**, and set its anchors. A joint fires \`OnJointBreak(force)\` if it exceeds its **Break Force**.\r
\r
**Effectors** apply area forces to whatever overlaps them (the collider needs **Used By Effector**): **Area** (wind, water currents), **Point** (gravity wells, explosions), **Platform** (one-way platforms) and **Surface** (conveyor belts).\r
\r
## Physic Material assets\r
\r
Create a **Physic Material** (\`Create Resource → Physic Material\`) to reuse **Friction** and **Bounciness** across colliders — an "ice" material, a "rubber" material — and choose how paired materials combine (average, min, max, multiply).\r
\r
## Where to go next\r
\r
Drive physics from [input](/tutorials/input), react to hits with an [animation](/tutorials/animation) or [particle burst](/tutorials/particles), or build your collision world from a [tilemap](/tutorials/tilemap).\r
`},{id:`input`,title:`Reading Raw Input`,icon:`fa-keyboard`,category:`Input`,blurb:`Poll keyboard, mouse, controllers and touch directly, frame by frame.`,md:`# Reading Raw Input\r
\r
The most direct way to know what the player is doing is to ask the hardware every frame: *is W held right now? did they just click? how far is the stick pushed?* This is **polling**, and it lives in the \`CometEngine::Input\` namespace. It's perfect for prototypes, game jams, fixed control schemes and touch handling.\r
\r
> [!TIP]\r
> When you're ready for rebindable controls and first-class gamepad support, graduate to the [Input Actions system](/tutorials/input-actions) — the same input, but bound to named actions you configure in the editor. This tutorial is the raw layer underneath it.\r
\r
## The three verbs: Down, Pressed, Up\r
\r
For every button — keyboard, mouse or controller — there are three queries, and choosing the right one is most of the battle:\r
\r
| Query | True when... | Use it for |\r
|-------|--------------|-----------|\r
| **\`GetKeyDown(key)\`** | the **first frame** of the press (an edge) | one-shot actions: jump, shoot, confirm, toggle |\r
| **\`GetKeyPressed(key)\`** | **every frame** the key is held (a level) | continuous actions: walking, charging, aiming |\r
| **\`GetKeyUp(key)\`** | the frame it is **released** (an edge) | release actions: release a charged shot |\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Input;\r
\r
class Player : CometBehaviour\r
{\r
    float speed = 5.0F;\r
\r
    void Update()\r
    {\r
        // Continuous movement from held keys (level).\r
        Vector2 move(0, 0);\r
        if (Input::GetKeyPressed(KeyCode::W)) move.y += 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::S)) move.y -= 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::A)) move.x -= 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::D)) move.x += 1.0F;\r
\r
        // Fire once per press (edge).\r
        if (Input::GetKeyDown(KeyCode::SPACE))\r
        {\r
            Fire();\r
        }\r
\r
        transform.Translate(move * speed * Time::GetDeltaTime(), Space::World);\r
    }\r
\r
    void Fire() { }\r
}\r
\`\`\`\r
\r
\`KeyCode\` covers the whole keyboard: letters (\`A\`–\`Z\`), digits, \`SPACE\`, \`RETURN\`, \`ESCAPE\`, the arrows (\`UP\`/\`DOWN\`/\`LEFT\`/\`RIGHT\`), function keys (\`F1\`–\`F12\`) and modifiers (\`SHIFT_LEFT\`, \`CONTROL_LEFT\`, ...).\r
\r
## Mouse\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Input;\r
\r
Vector2 mousePos = Input::GetMousePosition();     // screen space, (0,0) top-left\r
Vector2 delta = Input::GetMouseMotion();          // movement since last frame\r
float wheel = Input::GetMouseScrollMotion();      // scroll delta\r
\r
if (Input::GetMouseButtonDown(MouseCode::LEFT))   { /* click */ }\r
if (Input::GetMouseButtonPressed(MouseCode::RIGHT)) { /* hold to aim */ }\r
\`\`\`\r
\r
\`MouseCode\` is \`LEFT\`, \`MIDDLE\`, \`RIGHT\`, \`BUTTON_4\`, \`BUTTON_5\`. Mouse position is in **screen space** — to convert it to world space, go through your camera.\r
\r
## Controllers\r
\r
Comet supports up to eight controllers. Pass a \`ControllerNumber\` to target a specific one, or \`CONTROLLER_ANY\` for the first connected:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Input;\r
\r
// Analog stick — a Vector2 in the range -1..+1 on each axis.\r
Vector2 leftStick = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1);\r
float rightTrigger = Input::GetControllerTriggerValue(ControllerTrigger::RIGHT, ControllerNumber::CONTROLLER_1);\r
\r
// Buttons — same Down / Pressed / Up trio as the keyboard.\r
if (Input::GetControllerButtonDown(ControllerCode::A, ControllerNumber::CONTROLLER_1))\r
{\r
    Jump();\r
    Input::MakeControllerRumble(0.6F, 0.2F);   // strength 0..1, duration in seconds\r
}\r
\r
// Discover what's plugged in at runtime.\r
array<ControllerNumber> pads = Input::GetControllersConnected();\r
\`\`\`\r
\r
\`ControllerCode\` names the face buttons (\`A\`/\`B\`/\`X\`/\`Y\`), the D-pad (\`DPAD_UP\`...), shoulders, stick clicks and analog-stick directions as virtual buttons (\`LEFT_AXIS_UP\`...). \`MakeControllerRumble\` and \`PlayHapticPreset\` drive vibration. \`GetActiveInputDevice()\` tells you whether the player is currently on keyboard-and-mouse or a gamepad, so you can swap on-screen button prompts to match.\r
\r
## Touch\r
\r
Touch is multi-touch aware: each finger is a \`Touch\` with a **stable \`id\`** you can follow across frames, plus \`position\`, \`motion\` and a \`state\` (\`STARTED\` / \`MOVED\` / \`ENDED\`):\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Input;\r
\r
uint64 touchCount = Input::GetTouchCount();\r
for (uint64 i = 0; i < touchCount; i++)\r
{\r
    Touch touch = Input::GetTouchByIndex(i);\r
    if (touch.state == TouchState::ENDED) continue;\r
\r
    // touch.id follows this finger; touch.position is screen space.\r
    Debug::Log("finger " + touch.id + " at " + touch.position.ToString());\r
}\r
\`\`\`\r
\r
This is how the sample project's mobile controller builds a virtual joystick — it claims the first finger that lands on the left half of the screen (tracking it by \`id\`) and reads its offset from the touch-down point each frame. \`Input::IsPinching()\` and \`Input::GetPinchZoom()\` give you two-finger pinch for zoom.\r
\r
## Reading a whole character controller\r
\r
Putting the verbs together — keyboard *and* gamepad, movement *and* a one-shot fire, exactly as the sample project's \`Player\` script does it:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Input;\r
\r
class Player : CometBehaviour\r
{\r
    float speed = 6.0F;\r
\r
    void Update()\r
    {\r
        // Movement: keyboard OR left stick, whichever the player uses.\r
        Vector2 velocity = Input::GetControllerAxisValue(ControllerAxis::LEFT, ControllerNumber::CONTROLLER_1);\r
        if (Input::GetKeyPressed(KeyCode::W)) velocity.y += 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::S)) velocity.y -= 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::A)) velocity.x -= 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::D)) velocity.x += 1.0F;\r
\r
        // Fire: space OR the A button, once per press.\r
        if (Input::GetKeyDown(KeyCode::SPACE) ||\r
            Input::GetControllerButtonDown(ControllerCode::A, ControllerNumber::CONTROLLER_1))\r
        {\r
            Fire();\r
        }\r
\r
        transform.Translate(velocity * speed * Time::GetDeltaTime(), Space::World);\r
    }\r
\r
    void Fire() { }\r
}\r
\`\`\`\r
\r
> [!WARNING]\r
> Notice this reads two hard-coded keys for every action, and there's no way for the player to rebind them or for a designer to tune deadzones. That's fine for a jam — but the moment you want remappable controls, "hold to charge", or clean multi-device support, it's time for [Input Actions](/tutorials/input-actions).\r
\r
## Where to go next\r
\r
Turn these reads into movement with [Physics](/tutorials/physics), or step up to rebindable, designer-friendly controls with [Input Actions](/tutorials/input-actions).\r
`},{id:`input-actions`,title:`Input Actions: The Input Module`,icon:`fa-gamepad`,category:`Input`,blurb:`Bind rebindable named actions, add deadzones and hold/tap, and debug them live.`,md:`# Input Actions: The Input Module\r
\r
Reading \`KeyCode::SPACE\` directly works, but it hard-codes your controls: no rebinding, no clean gamepad support, no "hold to charge" without hand-rolled timers. Comet's **Input module** fixes all of that. You define named **actions** — "Jump", "Move", "Fire" — in the editor, bind them to any keys, buttons or sticks you like, and your code just asks the action for its value. Rebinding, deadzones, hold/tap detection and multi-device support all become configuration instead of code.\r
\r
> [!TIP]\r
> This is the layer above [raw input polling](/tutorials/input). If you only need a couple of fixed keys, polling is simpler. For a shippable game with gamepad support and remappable controls, use actions.\r
\r
## The model: groups, actions, bindings\r
\r
Three concepts nest inside each other:\r
\r
- An **Input Group** organizes related actions — a \`Gameplay\` group, a \`UI\` group, a \`Vehicle\` group. Groups can be enabled and disabled as a unit, so entering a menu can switch the whole control scheme in one line.\r
- An **Input Action** is a named intent with a **value type**: \`Button\` (pressed / not), \`Axis\` (a 1-D float, like a throttle) or \`Vector2\` (a 2-D direction, like movement).\r
- A **Binding** connects a physical control to an action. One action can have many bindings — that's how *Jump* answers to both the space bar and the gamepad's A button. **Composite** bindings combine several controls into one value (four keys → a \`Vector2\`, two keys → an axis).\r
\r
## Configuring actions in the editor\r
\r
Open **Project Settings → Input**. This is where the whole scheme is authored:\r
\r
![The Input panel in Project Settings, with groups, actions and their bindings.](/tutorials/input-settings.png)\r
\r
1. **Add a group** (e.g. \`Gameplay\`).\r
2. **Add actions** to it (e.g. \`Move\` as a \`Vector2\`, \`Jump\` as a \`Button\`) and pick each one's value type.\r
3. **Add bindings** to each action. For \`Move\`, a **2D Vector composite** turns W/A/S/D into a \`Vector2\`; add a second binding for the gamepad's left stick and the action seamlessly accepts either. For \`Jump\`, add the space bar and the A button.\r
4. Optionally attach **processors** and **interactions** (below).\r
5. Save — the scheme is stored with the project.\r
\r
### Processors: shaping the value\r
\r
A **processor** post-processes a binding's or action's raw value:\r
\r
- **Deadzone** — ignore tiny stick drift below a threshold.\r
- **Invert X / Invert Y** — flip an axis (inverted-Y aiming).\r
- **Scale** — multiply the value (sensitivity).\r
- **Normalize / Clamp** — bound the range.\r
- **Response Curve** — ease the input non-linearly, so small stick movements are gentle and large ones ramp up.\r
\r
### Interactions: shaping *when* it fires\r
\r
An **interaction** decides what counts as "performed", so timing-based inputs are configuration, not code:\r
\r
- **Press** — fires immediately (the default).\r
- **Hold** — fires after the control is held for a set time (hold to charge, hold to interact).\r
- **Tap** — fires on a quick press-and-release.\r
- **Slow Tap / Multi-Tap** — deliberate presses, or double/triple taps (double-tap to dash).\r
\r
## Reading actions from AngelScript\r
\r
Fetch a group by name, pull out its actions, and read them. The value-type getters mirror the raw polling verbs:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::InputSettings;\r
\r
class PlayerController : CometBehaviour\r
{\r
    private InputAction moveAction;\r
    private InputAction jumpAction;\r
\r
    void Start()\r
    {\r
        InputGroup group = InputSettings::GetGroupByName("Gameplay");\r
        if (group !is null)\r
        {\r
            moveAction = group.GetActionByName("Move");\r
            jumpAction = group.GetActionByName("Jump");\r
        }\r
    }\r
\r
    void Update()\r
    {\r
        // One Vector2, whether it came from WASD or the left stick.\r
        if (moveAction !is null)\r
        {\r
            Vector2 move = moveAction.GetVector2();\r
            transform.Translate(move * 5.0F * Time::GetDeltaTime(), Space::World);\r
        }\r
\r
        // wasPressedThisFrame is the action-system GetKeyDown.\r
        if (jumpAction !is null && jumpAction.wasPressedThisFrame)\r
        {\r
            Jump();\r
        }\r
    }\r
\r
    void Jump() { }\r
}\r
\`\`\`\r
\r
The state accessors:\r
\r
| Accessor | Equivalent raw verb |\r
|----------|--------------------|\r
| \`isPressed\` | \`GetKeyPressed\` (held) |\r
| \`wasPressedThisFrame\` | \`GetKeyDown\` (press edge) |\r
| \`wasReleasedThisFrame\` | \`GetKeyUp\` (release edge) |\r
| \`GetBool()\` / \`GetFloat()\` / \`GetVector2()\` | typed value read |\r
\r
\`phase\` (\`IDLE\` / \`STARTED\` / \`PERFORMED\`) exposes the interaction state machine when you need it.\r
\r
## Callbacks instead of polling\r
\r
For fire-and-forget events, subscribe to an action's signals rather than checking it every frame:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::InputSettings;\r
\r
class WeaponController : CometBehaviour\r
{\r
    void Start()\r
    {\r
        InputGroup group = InputSettings::GetGroupByName("Gameplay");\r
        InputAction fire = group.GetActionByName("Fire");\r
        if (fire !is null)\r
        {\r
            fire.onStarted.Add(InputActionCallback(OnFireStarted));\r
            fire.onCancelled.Add(InputActionCallback(OnFireReleased));\r
        }\r
    }\r
\r
    void OnFireStarted(InputAction action)   { Debug::Log("fire down"); }\r
    void OnFireReleased(InputAction action)  { Debug::Log("fire up"); }\r
}\r
\`\`\`\r
\r
\`onStarted\`, \`onPerformed\` and \`onCancelled\` fire once per state transition — ideal for hold/charge weapons where you care about the *edges*, not every frame in between.\r
\r
## The generated InputWrapper\r
\r
Typing action names as strings is error-prone. The editor can generate a typed **InputWrapper** for your groups, so you can reach any action with autocompletion and no string lookups:\r
\r
\`\`\`angelscript\r
// Generated from the editor's Input settings:\r
Vector2 move = InputWrapper::Gameplay.Move.GetVector2();\r
if (InputWrapper::Gameplay.Jump.wasPressedThisFrame) Jump();\r
\`\`\`\r
\r
**Generating it:** at the top of the **Project Settings → Input** panel, next to **Input Wrapper**, click **Create**. Comet writes an \`InputWrapper\` script with a typed accessor for every group and action, which you can then use anywhere in your code.\r
\r
> [!IMPORTANT]\r
> The wrapper is *generated code* — a snapshot of your scheme, not a live view of it. **Every time you add, remove or rename a group or action, regenerate it by clicking the refresh button** (the *Create* control becomes a refresh once the wrapper exists). Skip this and the wrapper drifts out of sync — a renamed action still exposes its old name, and a new one won't appear at all.\r
\r
Under the hood the wrapper simply caches \`GetGroupByName\` / \`GetActionByName\` for you (exactly the pattern shown above), but you get compile-time names and IDE completion for free.\r
\r
## Switching schemes with groups\r
\r
Because groups enable and disable as a unit, swapping control contexts is trivial:\r
\r
\`\`\`angelscript\r
using namespace CometEngine::InputSettings;\r
\r
void OpenPauseMenu()\r
{\r
    InputSettings::GetGroupByName("Gameplay").enabled = false;\r
    InputSettings::GetGroupByName("UI").enabled = true;\r
}\r
\`\`\`\r
\r
Now \`Gameplay\` actions go quiet while the pause menu is up, and the \`UI\` group's Navigate/Submit/Cancel take over — no flags threaded through your gameplay code.\r
\r
## The Input Debugger\r
\r
When a binding "doesn't fire" or a stick reads the wrong axis, open **Window → Input Debugger**. It lists every group and action with its **value type**, live **phase**, and current **value**, updating in real time — so you can watch an action light up as you press the key and confirm the binding is wired the way you think.\r
\r
![The Input Debugger panel showing live action values in play mode.](/tutorials/input-debugger.png)\r
\r
At the top it also shows the **active device** (Keyboard & Mouse or Gamepad) and the **number of connected controllers**. Live values appear once you enter **play mode** — in edit mode it prompts you to press Play.\r
\r
> [!NOTE]\r
> The Input Debugger is the fastest way to diagnose input problems: if the action doesn't react here, the binding is wrong (fix it in Project Settings); if it *does* react here but not in your game, the bug is in your script.\r
\r
## Where to go next\r
\r
Drive a character with actions and [Physics](/tutorials/physics), or wire the \`UI\` group's Navigate/Submit into your [menus](/tutorials/ui-system).\r
`},{id:`ui-system`,title:`Building User Interfaces`,icon:`fa-window-maximize`,category:`UI`,blurb:`Canvas, RectTransform anchoring, buttons, text, layouts and input events.`,md:'# Building User Interfaces\r\n\r\nMenus, HUDs, dialogs, settings screens — Comet\'s UI system is a retained, anchor-based layout system in the spirit of Unity\'s uGUI: a **Canvas** at the root, **RectTransform** on every element, and a family of widgets (Button, Text, Image, InputField, Slider...) that raise events your scripts react to.\r\n\r\n![A Canvas with a button selected, showing the RectTransform anchors in the inspector.](/tutorials/ui-canvas.png)\r\n\r\n## The Canvas\r\n\r\nEvery piece of UI lives under a **Canvas** entity (right-click the Hierarchy → **UI → Canvas**). Its **Render Mode** decides where the UI exists:\r\n\r\n- **Screen Space** — the canvas is glued to the screen. Menus, HUDs, anything resolution-anchored.\r\n- **World Space** — the canvas lives in the world like any other entity. Health bars over enemies, computer screens inside the scene, damage numbers.\r\n\r\nCanvases can be **nested**; a nested canvas can `overrideSorting` to force itself above or below its surroundings.\r\n\r\n## RectTransform: anchors, pivot and size\r\n\r\nUI entities replace the plain Transform with a **RectTransform** — a rectangle whose position and size are expressed *relative to the parent rectangle* through **anchors**:\r\n\r\n- `anchorMin` / `anchorMax` — two normalized points (0–1) in the parent. When both are equal you get a fixed-size element pinned to that point; when they differ, the element **stretches** with the parent.\r\n- `pivot` — the point of the element (0–1) that `anchoredPosition` positions, and the center of rotation/scaling.\r\n- `anchoredPosition` + `size` — where the pivot sits relative to the anchors, and how big the rect is.\r\n- When stretched, you edit the margins instead: `leftDistance`, `rightDistance`, `topDistance`, `bottomDistance`.\r\n\r\nThe Inspector\'s anchor preset widget covers the common cases in one click — corners, edges, center, and full-stretch. Rules of thumb:\r\n\r\n> [!TIP]\r\n> Anchor each element to the screen region it belongs to: score to the top-left, minimap to the top-right, action bar stretched along the bottom. The layout then survives every aspect ratio without a single line of code.\r\n\r\nFrom script, the same properties are read/write:\r\n\r\n```angelscript\r\nusing namespace CometEngine;\r\n\r\nclass HealthBarFill : CometBehaviour\r\n{\r\n    private RectTransform rect;\r\n    private float fullWidth;\r\n\r\n    void Start()\r\n    {\r\n        rect = RectTransform::Get(entity);\r\n        fullWidth = rect.size.x;\r\n    }\r\n\r\n    void SetHealth(float normalized) // 0..1\r\n    {\r\n        rect.size = Vector2(fullWidth * normalized, rect.size.y);\r\n    }\r\n}\r\n```\r\n\r\n## The widget family\r\n\r\nAll widgets live in the `CometEngine::UI` namespace and are created from the Hierarchy\'s **UI** submenu. The visual ones derive from `Graphic` (which gives them `color`, `material` and a `mouseFilter`); the interactive ones derive from `Selectable` (which adds `interactable`, hover/press **transitions**, and keyboard/gamepad **navigation**):\r\n\r\n| Widget | Purpose | Key members |\r\n|--------|---------|-------------|\r\n| `Text` | Styled text, BBCode, auto-sizing | `text`, `font`, `fontSize`, `horizontalAlignment`, `bbcodeEnabled`, `bold`... |\r\n| `Image` | Sprite display, 9-slice, tiling | `sprite`, `renderMode` (Simple/Sliced/Tiled), `fillCenter` |\r\n| `Button` | Click target | `onClick`, `interactable` |\r\n| `InputField` | Text entry | `textValue`, `characterLimit`, `contentType`, `onValueChanged`, `onEndEdit` |\r\n| `Slider` | Draggable value | `value`, `minValue`, `maxValue`, `wholeNumbers`, `onValueChanged` |\r\n| `Toggle` | Checkbox | `isOn`, `group`, `onValueChanged` |\r\n| `ToggleGroup` | Radio-button behaviour for Toggles | `allowSwitchOff` |\r\n| `DropDown` | Option list | `value`, `AddOption()`, `SetOptions()`, `onValueChanged` |\r\n| `ScrollRect` | Scrollable content | `content`, `horizontal`, `vertical`, `movementType`, `inertia` |\r\n| `Scrollbar` | Standalone scroll handle | `value`, `size`, `direction` |\r\n\r\n## Reacting to input\r\n\r\nThere are two complementary mechanisms.\r\n\r\n### 1. Pointer interfaces — any entity, any shape\r\n\r\nImplement one or more pointer interfaces on a `CometBehaviour` and the UI input system calls you directly. This is the pattern used across Comet\'s own sample project:\r\n\r\n```angelscript\r\nusing namespace CometEngine;\r\nusing namespace CometEngine::UI;\r\n\r\nclass PlayButton : CometBehaviour, IPointerClickAction\r\n{\r\n    void OnPointerClick(PointerEvent pointerEvent)\r\n    {\r\n        Debug::Log("Play clicked!");\r\n        SceneManagement::SceneManager::LoadScene("Level1");\r\n    }\r\n}\r\n```\r\n\r\nThe full set: `IPointerClickAction`, `IPointerDownAction`, `IPointerUpAction`, `IPointerUpOutsideAction`, `IPointerEnterAction`, `IPointerExitAction`, `IBeginDragAction`, `IDragAction`, `IEndDragAction`, `ISelectAction`, `IDeselectAction`, `ISubmitAction`. Drag-and-drop, for instance, is three methods:\r\n\r\n```angelscript\r\nclass DraggableCard : CometBehaviour, IBeginDragAction, IDragAction, IEndDragAction\r\n{\r\n    void OnBeginDrag(PointerEvent event) { Debug::Log("BEGIN DRAG"); }\r\n    void OnDrag(PointerEvent event)      { Debug::Log(event.handler.entity.name); }\r\n    void OnEndDrag(PointerEvent event)   { Debug::Log("END DRAG"); }\r\n}\r\n```\r\n\r\n### 2. Widget events — values, not clicks\r\n\r\nValue widgets expose typed events (`CometEvent` / `CometEventArg<T>`). Hook persistent listeners in the Inspector (the button\'s **On Click** list), or subscribe at runtime:\r\n\r\n```angelscript\r\nusing namespace CometEngine;\r\nusing namespace CometEngine::UI;\r\n\r\nclass SettingsMenu : CometBehaviour\r\n{\r\n    private Slider volumeSlider;\r\n\r\n    void Start()\r\n    {\r\n        volumeSlider = Slider::Get(Entity::Find("VolumeSlider"));\r\n        volumeSlider.minValue = 0.0F;\r\n        volumeSlider.maxValue = 1.0F;\r\n    }\r\n\r\n    void Update()\r\n    {\r\n        // Polling the value each frame is the simplest reliable pattern.\r\n        AudioSystem::SetMasterVolume(volumeSlider.value);\r\n    }\r\n}\r\n```\r\n\r\n## Real patterns from the sample project\r\n\r\n**Reading an InputField** (the multiplayer menu reads the server IP this way):\r\n\r\n```angelscript\r\nstring ReadIp()\r\n{\r\n    Entity ipEntity = Entity::Find("IpInput");\r\n    if (ipEntity !is null)\r\n    {\r\n        InputField field = InputField::Get(ipEntity);\r\n        if (field !is null && field.textValue.length() > 0)\r\n        {\r\n            return field.textValue;\r\n        }\r\n    }\r\n    return "127.0.0.1";\r\n}\r\n```\r\n\r\n**Filling a DropDown with the available screen resolutions:**\r\n\r\n```angelscript\r\nusing namespace CometEngine;\r\nusing namespace CometEngine::UI;\r\n\r\nclass ResolutionPicker : CometBehaviour\r\n{\r\n    private DropDown dropDown;\r\n\r\n    void Start()\r\n    {\r\n        dropDown = DropDown::Get(entity);\r\n\r\n        array<Resolution> resolutions = Window::GetAvailableResolutions();\r\n        array<DropDownOption> options;\r\n        for (uint i = 0; i < resolutions.length(); i++)\r\n        {\r\n            DropDownOption option;\r\n            option.name = resolutions[i].ToString();\r\n            options.insertLast(option);\r\n        }\r\n        dropDown.SetOptions(options);\r\n    }\r\n}\r\n```\r\n\r\n**Updating a Text label at runtime:**\r\n\r\n```angelscript\r\nvoid IncreaseCount()\r\n{\r\n    Entity ent = Entity::Find("TextClickCounter");\r\n    if (ent !is null)\r\n    {\r\n        UI::Text text = UI::Text::Get(ent);\r\n        if (text !is null)\r\n        {\r\n            int count = parseInt(text.text);\r\n            ++count;\r\n            text.text = formatInt(count);\r\n        }\r\n    }\r\n}\r\n```\r\n\r\n## Rich text with BBCode\r\n\r\nSet `bbcodeEnabled` on a Text and you can mix styling inline — and even register **custom tags** that scripts animate:\r\n\r\n```angelscript\r\nusing namespace CometEngine;\r\nusing namespace CometEngine::UI;\r\n\r\nclass FancyTitle : CometBehaviour\r\n{\r\n    void Start()\r\n    {\r\n        Text text = Text::Get(entity);\r\n        text.bbcodeEnabled = true;\r\n        text.RegisterBBCodeHandler("rainbow", BBCodeHandlerDelegate(RainbowTag));\r\n        text.text = "Welcome to [rainbow]Comet Engine[/rainbow]!";\r\n    }\r\n\r\n    void RainbowTag(BBCodeHandlerData data)\r\n    {\r\n        // Called per character inside the tag, every frame.\r\n        float hue = data.elapsedTime * 2.0F + float(data.relativeIndex) * 0.35F;\r\n        data.color = Color(Math::Sin(hue) * 0.5F + 0.5F,\r\n                           Math::Sin(hue + 2.1F) * 0.5F + 0.5F,\r\n                           Math::Sin(hue + 4.2F) * 0.5F + 0.5F,\r\n                           1.0F);\r\n    }\r\n}\r\n```\r\n\r\nThe handler receives the tag\'s parameters (`GetFloat/GetString/GetInt`), the character index and mutable `color`, `offset` and `visible` fields — enough for wave, shake and typewriter effects.\r\n\r\n## Automatic layouts\r\n\r\nStop positioning list items by hand — add a layout behaviour to the parent:\r\n\r\n- **VerticalLayout / HorizontalLayout** — stack children with `spacing` and `padding`; `childWidthFitMode` / `childHeightFitMode` optionally stretch them (`FIT_PARENT`, `FIT_AVAILABLE`).\r\n- **GridLayout** — fixed `cellSize` + `spacing`, flowing by `constraint` (`FLEXIBLE`, `FIXED_COLUMNS`, `FIXED_ROWS`) from a `startCorner`.\r\n- **LayoutElementConstraints** — per-child overrides: `minSize`, `preferredSize`, `flex`, or `ignoreLayout` to opt out.\r\n\r\nCombine with **ScrollRect** for scrollable lists: put the layout on the `content` rect and the ScrollRect handles clamping, elasticity and inertia. Use a **Mask** to clip the content to the viewport, and a **CanvasGroup** to fade or disable a whole subtree at once (`alpha`, `interactable`).\r\n\r\n## Fonts\r\n\r\nComet accepts two kinds of font, and both plug into a Text\'s `font` field:\r\n\r\n- **Vector fonts** — import a `.ttf` or `.otf` and the engine rasterizes glyphs at any size, so text stays crisp at every scale. The default for UI.\r\n- **Bitmap fonts** — a pre-rendered glyph atlas (a texture plus its layout), ideal for pixel-art games where you want text to scale in hard pixels rather than smooth vectors, or to match a specific retro look.\r\n\r\nText styling is per-widget regardless of the font kind: `fontSize` (or `autoFontSize` with min/max bounds to fit the rect), alignment, `wrapping`, `overflowMode`, plus `bold`, `italic`, `underline` and `strikethrough`.\r\n\r\n## Where to go next\r\n\r\nWire your new menu to actual gameplay: start a match in [Networking & Multiplayer](/tutorials/networking), or make the settings screen control [Audio & Mixers](/tutorials/audio).\r\n'},{id:`audio`,title:`Audio & Mixers`,icon:`fa-volume-high`,category:`Audio`,blurb:`Play 2D and positional sound, route it through mixer groups and control it from code.`,md:`# Audio & Mixers\r
\r
Sound sells the scene. Comet's audio stack — built on the battle-tested SoLoud engine — gives you positional 2D/3D sources, an Audio Mixer with hierarchical groups and snapshot layouts, DSP effects, and a scripting API that covers everything from "play a beep" to runtime device switching.\r
\r
## The three core pieces\r
\r
1. **AudioSample** — the imported sound resource (\`.wav\`, \`.ogg\`, \`.mp3\`).\r
2. **AudioSource** — a behaviour that plays samples from an entity.\r
3. **AudioListener** — the "ears". Add exactly one, usually on the camera. Without a listener in the scene, nothing is heard (the console warns you).\r
\r
Add them from **Add Behaviour → Audio → Audio Source / Audio Listener**.\r
\r
![An AudioSource inspector with a clip and mixer group assigned.](/tutorials/audiosource-inspector.png)\r
\r
## The AudioSource inspector\r
\r
| Field | Meaning |\r
|-------|---------|\r
| **Mode** | \`2D Audio\` (pan only) or \`3D Audio\` (distance attenuation + Doppler). |\r
| **Audio Sample** | The clip to play. |\r
| **Audio Mixer Group** | Where the sound routes — see Mixers below. |\r
| **Play On Enable** | Auto-play whenever the behaviour is enabled. |\r
| **Loop** | Restart when finished. |\r
| **Mute** | Silence without stopping. |\r
| **Volume** | Linear gain \`0.0 – 1.0\`. |\r
| **Pitch** | Playback speed \`0.01 – 2.0\`. |\r
| **Pan** | Stereo balance \`-1\` (left) to \`1\` (right) — 2D mode. |\r
| **Min / Max Distance** | 3D mode: full volume inside min, silent beyond max. |\r
| **Ignore Effects / Ignore Listener Effects** | Skip AudioEffect behaviours on this entity / on the listener. |\r
\r
Import settings on the AudioSample itself: **Preload Data** (decode on load — snappy playback) and **Is Stream** (stream from disk — big music files without the memory cost).\r
\r
## Playing sounds from AngelScript\r
\r
The bread-and-butter controls mirror the inspector:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class DoorBell : CometBehaviour\r
{\r
    private AudioSource source;\r
\r
    void Start()\r
    {\r
        source = AudioSource::Get(entity);\r
        source.volume = 0.8F;\r
    }\r
\r
    void Update()\r
    {\r
        if (Input::GetKeyDown(KeyCode::E))\r
        {\r
            source.Play();     // also: Pause(), Resume(), Stop()\r
        }\r
\r
        if (source.isFinished)\r
        {\r
            Debug::Log("ding done");\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\`isPlaying\`, \`isPaused\` and \`isFinished\` report state; \`timePosition\` reads/writes the playhead in milliseconds; \`PlayOnce(sample)\` fires a different clip through this source's settings without replacing its assigned sample.\r
\r
### Fire-and-forget one-shots\r
\r
For impacts, pickups and UI clicks you don't want to manage a source at all — use the static helpers:\r
\r
\`\`\`angelscript\r
// Play a sample globally (2D):\r
AudioSource::PlaySingle(explosionSample, 0.9F);\r
\r
// Play at a world position (3D attenuation from that point):\r
AudioSource::PlaySingleAtPosition(explosionSample, transform.position, 1.0F);\r
\r
// Need to control it afterwards? Use the tracked variants:\r
AudioSource handle = AudioSource::PlaySingleTracked(alarmSample, 1.0F);\r
// ... later:\r
handle.Stop();\r
\`\`\`\r
\r
Untracked one-shots clean themselves up when playback ends.\r
\r
> [!NOTE]\r
> Assign samples to script fields through the Inspector by declaring them, e.g. \`AudioSample explosionSample;\` — or load them at runtime with \`RuntimeAssets::LoadResource("Audio/Explosion", ResourceType::AUDIO)\`.\r
\r
## 2D vs 3D sound\r
\r
Set **Mode** to \`3D Audio\` and the source attenuates linearly between **Min Distance** and **Max Distance** from the listener, pans by direction, and applies **Doppler** when either side moves. Three global knobs shape the whole mix:\r
\r
\`\`\`angelscript\r
AudioSystem::SetRolloffScale(1.5F);     // stronger distance falloff everywhere\r
AudioSystem::SetDopplerFactor(1.0F);    // 0 = off, 1 = realistic, >1 exaggerated\r
AudioSystem::SetAudioSourceDefaultMinDistance3D(2.0F);   // defaults for new sources\r
AudioSystem::SetAudioSourceDefaultMaxDistance3D(40.0F);\r
\`\`\`\r
\r
## The Audio Mixer\r
\r
Routing every source straight to the speakers gets unmanageable fast. Create a mixer asset — **Create Resource → Audio Mixer** in the Project panel — and open it to edit its group tree:\r
\r
![The Audio Mixer window with Master, Music and SFX groups.](/tutorials/audio-mixer.png)\r
\r
- Every mixer starts with a **Master** group; add children like \`Music\`, \`SFX\`, \`UI\`, \`Voice\` from the context menu.\r
- Each group has **Volume**, **Pitch**, **Muted** and **Use Effects**.\r
- Volumes multiply down the tree: a sound in \`SFX\` plays at \`master.volume × sfx.volume × source.volume\`.\r
- Point each AudioSource's **Audio Mixer Group** field at the right group, and your options menu suddenly needs three sliders instead of three hundred.\r
\r
### Controlling groups from script\r
\r
Mixer groups are assets — reference them from a script with a serialized handle field, assign them in the Inspector, and change them live. This is the Sandbox project's audio controller, trimmed:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Audio;\r
\r
class AudioOptions : CometBehaviour\r
{\r
    [Serialize] AudioMixerGroup master;\r
    [Serialize] AudioMixerGroup music;\r
    [Serialize] AudioMixerGroup effects;\r
\r
    void Update()\r
    {\r
        if (Input::GetKeyDown(KeyCode::M))\r
        {\r
            master.muted = !master.muted;       // mute everything\r
        }\r
        if (Input::GetKeyDown(KeyCode::NUM_1))\r
        {\r
            music.volume = 0.25F;               // duck the music\r
        }\r
        if (Input::GetKeyDown(KeyCode::NUM_2))\r
        {\r
            effects.volume = 1.0F;\r
        }\r
    }\r
}\r
\`\`\`\r
\r
> [!TIP]\r
> \`[Serialize]\` exposes a handle field in the Inspector so you can drag the mixer group (a sub-resource of the mixer asset) straight into it.\r
\r
### Layouts: mixer snapshots\r
\r
A mixer can store multiple **layouts** — complete snapshots of every group's settings. Author a \`Default\` layout and a \`Underwater\` layout (low-passed, muffled volumes), then switch at runtime:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Audio;\r
\r
class WaterZone : CometBehaviour\r
{\r
    [Serialize] AudioMixer gameMixer;\r
\r
    void EnterWater()\r
    {\r
        array<AudioMixerLayout> layouts = gameMixer.GetLayouts();\r
        for (uint i = 0; i < layouts.length(); i++)\r
        {\r
            if (!layouts[i].isDefault)\r
            {\r
                layouts[i].Activate();   // apply the snapshot\r
            }\r
        }\r
    }\r
}\r
\`\`\`\r
\r
The layout marked **Is Default** is applied automatically when the scene loads.\r
\r
## Audio effects\r
\r
Four DSP effects ship as behaviours under **Add Behaviour → Audio/Effects**: **AudioEffectDistortion**, **AudioEffectEcho**, **AudioEffectFlange** and **AudioEffectReverb**.\r
\r
- On a **source entity**, the effect processes that source's output.\r
- On the **listener entity**, it processes everything the listener hears — instant cave reverb.\r
\r
Per-source opt-outs: \`ignoreEffects\` (skip effects on the source's own entity) and \`ignoreListenerEffects\` (skip the listener's).\r
\r
## Global playback & devices\r
\r
\`AudioSystem\` also handles app-wide concerns — pausing the whole mix for your pause menu, and output-device selection for a settings screen:\r
\r
\`\`\`angelscript\r
AudioSystem::SetMasterVolume(0.5F);\r
AudioSystem::PauseAll();     // pause menu opened\r
AudioSystem::ResumeAll();    // and closed\r
AudioSystem::StopAll();\r
\r
// Offer an output-device picker:\r
array<string> devices = AudioSystem::GetOutputDevices();\r
AudioSystem::SetCurrentOutputDevice(devices[0]);\r
\`\`\`\r
\r
Hot-plugging is signalled through \`AudioSystem\` delegates (\`onOutputDeviceConnected\`, \`onOutputDeviceDisconnected\`) so your settings UI can refresh itself.\r
\r
## Where to go next\r
\r
Give your buttons click sounds in the [UI tutorial](/tutorials/ui-system), or trigger footsteps from animation events in [Animation & the Animator](/tutorials/animation).\r
`},{id:`navigation`,title:`Navigation: NavMesh, Agents & Obstacles`,icon:`fa-route`,category:`Navigation`,blurb:`Bake navigation meshes, move agents along paths and avoid dynamic obstacles.`,md:`# Navigation: NavMesh, Agents & Obstacles\r
\r
Enemies that chase, NPCs that wander, units that flow around each other — 2D pathfinding in Comet is built on a baked **navigation mesh**, **A\\*** path queries with funnel smoothing, and optional **RVO collision avoidance** so crowds of agents don't clip through one another.\r
\r
![A Navigation Region covering the scene, a Navigation Obstacle ringing the cloud, and the region's settings — including the Bake button — in the Inspector.](/tutorials/navigation-scene.png)\r
\r
## The building blocks\r
\r
Four behaviours, all under **Add Behaviour**:\r
\r
| Behaviour | Role |\r
|-----------|------|\r
| **Navigation Region** | Defines *where walking is possible* and bakes the navmesh. |\r
| **Navigation Agent** | Asks for paths and follows them; optionally avoids other agents. |\r
| **Navigation Obstacle** | Carves holes in the navmesh and/or pushes agents away dynamically. |\r
| **Navigation Link** | Connects two points that aren't walkable-between — jumps, teleporters, bridges. |\r
\r
## Setting up the walkable area\r
\r
1. Create an entity and add a **Navigation Region**.\r
2. Set its **Size** — the rectangle to bake — or click **Edit Outline** and drag the green vertices to author any closed polygon.\r
3. Set **Agent Radius**: the mesh is inset by this amount so paths never hug walls tighter than your agents can fit.\r
4. Enable **Parse Geometry** if you want solid (non-trigger) colliders carved out automatically, and choose which physics layers with **Parse Collision Mask**.\r
5. Press **Bake Navigation Mesh**.\r
\r
The baked, walkable polygons show as a colored overlay when scene gizmos are enabled. Multiple regions connect automatically where they touch (and across small gaps if **Use Edge Connections** is on). Regions also support pathfinding **costs** — raise **Travel Cost** above 1 to make agents prefer going around mud, or **Enter Cost** to penalize entering at all.\r
\r
> [!NOTE]\r
> Baking happens on background threads at runtime too: call \`region.Bake()\` from script after you move platforms around or spawn structures, and agents re-path automatically when the new mesh is ready.\r
\r
## Moving an agent\r
\r
Add a **Navigation Agent** to your character. The core loop is: set \`targetPosition\`, then every physics step walk toward \`GetNextPathPosition()\`. This is the Sandbox project's agent, verbatim:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::Navigation;\r
\r
class AgentTest : CometBehaviour\r
{\r
    Vector2 desiredPos;\r
    float velocity = 7.0F;\r
    NavigationAgent agent;\r
\r
    // Called before first frame\r
    void Start()\r
    {\r
        agent = NavigationAgent::Get(entity);\r
\r
        // While avoidance is enabled the simulation reports the collision-free\r
        // velocity through the onVelocityComputed signal, so the body is moved\r
        // from inside that callback.\r
        agent.onVelocityComputed.Add(CometDelegateVector2(OnVelocityComputed));\r
\r
        // Where the agent should navigate to.\r
        agent.targetPosition = desiredPos;\r
    }\r
\r
    // Called every physics update\r
    void FixedUpdate()\r
    {\r
        if (agent.IsNavigationFinished())\r
        {\r
            return;\r
        }\r
\r
        Vector2 currentPosition = Vector2(transform.position.x, transform.position.y);\r
        Vector2 nextPathPosition = agent.GetNextPathPosition();\r
        Vector2 newVelocity = (nextPathPosition - currentPosition).Normalized() * velocity;\r
\r
        if (agent.avoidanceEnabled)\r
        {\r
            // Submit the desired velocity; the safe velocity arrives through onVelocityComputed.\r
            agent.SetVelocity(newVelocity);\r
        }\r
        else\r
        {\r
            // No avoidance: move straight away with the desired velocity.\r
            OnVelocityComputed(newVelocity);\r
        }\r
    }\r
\r
    // Receives the collision-free velocity from the avoidance simulation and moves the body with it.\r
    void OnVelocityComputed(Vector2 safeVelocity)\r
    {\r
        transform.Translate(safeVelocity * Time::GetDeltaTime(), Space::World);\r
    }\r
}\r
\`\`\`\r
\r
Three things to notice:\r
\r
- **Setting \`targetPosition\` triggers the path query.** Change it any time — chasing a moving player means updating it every few frames.\r
- **\`GetNextPathPosition()\` is called every step** and advances through the corridor as you approach each waypoint (within \`pathDesiredDistance\`).\r
- **The same movement code works with and without avoidance** by funnelling both cases through one callback.\r
\r
### Knowing where you stand\r
\r
\`\`\`angelscript\r
agent.IsNavigationFinished();   // path exhausted (arrived, or nothing reachable)\r
agent.IsTargetReached();        // within targetDesiredDistance of the target\r
agent.IsTargetReachable();      // can the path actually end at the target?\r
agent.DistanceToTarget();       // straight-line distance\r
agent.GetPathLength();          // full length of the current path\r
array<Vector2> path = agent.GetCurrentNavigationPath();  // all waypoints, world space\r
\`\`\`\r
\r
And if you prefer events over polling, agents expose signals: \`onPathChanged\`, \`onWaypointReached\`, \`onLinkReached\`, \`onTargetReached\`, \`onNavigationFinished\` and the \`onVelocityComputed\` you already met.\r
\r
## Tuning the path\r
\r
The agent inspector groups the important knobs:\r
\r
| Property | Effect |\r
|----------|--------|\r
| **Path Desired Distance** | How close to a waypoint before advancing to the next. |\r
| **Target Desired Distance** | How close to the target counts as "arrived". |\r
| **Path Max Distance** | If the agent drifts further than this from the corridor, a fresh path is queried. |\r
| **Path Postprocessing** | \`Corridor Funnel\` (taut, natural paths — default), \`Edge Centered\` (through edge midpoints — good for grid games), \`None\` (raw polygon centroids). |\r
| **Simplify Path** | Ramer-Douglas-Peucker reduction; **Simplify Epsilon** sets the tolerance. |\r
| **Navigation Layers** | Bitmask matched against regions/links — agents only traverse matching layers. |\r
\r
Navigation layers let one navmesh serve different movement types: mark water regions with a \`Water\` layer and only amphibious agents will consider them.\r
\r
## Local avoidance (RVO)\r
\r
Pathfinding keeps agents out of *walls*; avoidance keeps them out of *each other*. Tick **Avoidance Enabled** and configure:\r
\r
- **Avoidance Radius** — the agent's personal space.\r
- **Max Speed** — a hard clamp the simulation may return.\r
- **Neighbor Distance / Max Neighbors** — how far and how many other agents to consider.\r
- **Time Horizon Agents / Obstacles** — how many seconds ahead collisions are predicted. Small = late, sharp dodges; large = early, gentle arcs.\r
- **Avoidance Priority** — 0–1; lower-priority agents yield to higher-priority ones. Give the boss \`1.0\` and the minions scatter.\r
- **Avoidance Layers / Mask** — which avoidance layers this agent occupies / respects.\r
\r
With avoidance on, **you must drive movement through the callback**: call \`agent.SetVelocity(desired)\` each step and apply only the \`safeVelocity\` you receive in \`onVelocityComputed\` — exactly like the sample above.\r
\r
## Dynamic obstacles\r
\r
Add a **Navigation Obstacle** to anything agents should not walk through — a crate the player can push, a car that parks across the sidewalk. Choose its shape (**Obstacle Type**: \`Circle\` radius, \`Box\` size + offset, or a custom \`Polygon\` via **Edit Shape** / \`SetVertices()\`), then pick how it acts:\r
\r
- **Carve Navigation Mesh** — cuts a hole in every overlapping region's navmesh, so *paths route around it* from the start.\r
- **Avoidance Enabled** — feeds it to the RVO simulation, so *moving agents steer around it* even mid-path.\r
\r
Use carving for static-ish blockers, avoidance for anything that moves, or both for heavy movable objects.\r
\r
## Navigation links\r
\r
A **Navigation Link** joins **Start Position** and **End Position** across unwalkable space — a gap to jump, a ladder, a teleporter pad. Set **Bidirectional** off for one-way drops, and tune **Enter Cost** / **Travel Cost** so the pathfinder weighs the shortcut fairly. When an agent reaches a link waypoint, the \`onLinkReached\` signal fires — that's your cue to play the jump animation and move the body across.\r
\r
## Gotchas worth knowing\r
\r
> [!WARNING]\r
> - **Bake before you expect paths.** No baked region = no navmesh = every query fails. Bake in the editor, or call \`Bake()\` after loading.\r
> - Custom outlines need **at least 3 vertices**; the editor falls back to the rectangle otherwise.\r
> - Only **solid, non-trigger colliders** are carved by Parse Geometry.\r
> - An unreachable target leaves the path empty: check \`IsTargetReachable()\` and design a fallback (wander, wait, growl menacingly).\r
\r
## Where to go next\r
\r
Make your navigating enemies look alive with [Animation & the Animator](/tutorials/animation), or sync their positions across the network in [Networking & Multiplayer](/tutorials/networking).\r
`},{id:`networking`,title:`Networking & Multiplayer`,icon:`fa-network-wired`,category:`Networking`,blurb:`Host and join games, call RPCs, replicate state and spawn entities across the network.`,md:`# Networking & Multiplayer\r
\r
Comet ships a complete high-level multiplayer stack: swap-in transport peers (ENet, WebSocket, WebRTC), attribute-driven **RPCs**, automatic **state replication**, networked **spawning**, and a host-authoritative model that scales from a LAN co-op prototype to a 4-player arena. This tutorial walks the whole pipeline using the engine's own multiplayer sample as the guide.\r
\r
![A networked entity: the Multiplayer Synchronizer in the Inspector, ready to replicate its transform to every peer.](/tutorials/multiplayer-game.png)\r
\r
## The lay of the land\r
\r
- One machine is the **host** (also called the server) — it owns the truth. Everyone else is a **client**.\r
- Every connected machine gets a **unique peer id**: the host is always \`1\`, clients get \`2\`, \`3\`, ...\r
- A **transport peer** object moves the bytes. You create one and hand it to the global \`Network::Multiplayer\` API; from then on RPCs, replication and spawning ride on it:\r
\r
| Transport | Use when |\r
|-----------|----------|\r
| \`ENetMultiplayerPeer\` | Desktop builds — UDP with reliability channels. The default choice. |\r
| \`WebSocketMultiplayerPeer\` | Web builds, or mixed web+desktop games with a socket server. |\r
| \`WebRTCMultiplayerPeer\` | Peer-to-peer with a signaling server. |\r
| \`OfflineMultiplayerPeer\` | Single-player that reuses your multiplayer code paths untouched. |\r
\r
> [!WARNING]\r
> Web builds cannot open native UDP/TCP sockets — on the web platform use **WebSocket** (or WebRTC); the ENet peer is desktop-only.\r
\r
## Hosting and joining\r
\r
This is the sample's main menu, condensed. One button hosts, the other joins the address typed into an InputField:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::UI;\r
using namespace CometEngine::SceneManagement;\r
\r
class MenuButton : CometBehaviour, IPointerClickAction\r
{\r
    int port = 7777;\r
    string serverAddress = "127.0.0.1";\r
    string roomSceneName = "Room";\r
\r
    // Keep the peer in a member handle: it must outlive this function!\r
    private CometEngine::Network::ENetMultiplayerPeer peer;\r
\r
    void Host()\r
    {\r
        peer = CometEngine::Network::ENetMultiplayerPeer();\r
        if (peer.CreateServer(port, 8))                    // port, max peers\r
        {\r
            Network::Multiplayer::SetMultiplayerPeer(peer);\r
            Debug::Log("Hosting, my id = " + formatInt(Network::Multiplayer::GetUniqueId()));\r
            SceneManager::LoadScene(roomSceneName);\r
        }\r
        else\r
        {\r
            Debug::Log("Could not host on port " + formatInt(port));\r
        }\r
    }\r
\r
    void Join()\r
    {\r
        peer = CometEngine::Network::ENetMultiplayerPeer();\r
        if (peer.CreateClient(ReadIp(), port))\r
        {\r
            Network::Multiplayer::SetMultiplayerPeer(peer);\r
            SceneManager::LoadScene(roomSceneName);\r
        }\r
    }\r
\r
    void OnPointerClick(PointerEvent event)\r
    {\r
        if (entity.name == "HostButton") Host();\r
        else if (entity.name == "JoinButton") Join();\r
    }\r
\r
    string ReadIp()\r
    {\r
        Entity ipEntity = Entity::Find("IpInput");\r
        if (ipEntity !is null)\r
        {\r
            InputField field = InputField::Get(ipEntity);\r
            if (field !is null && field.textValue.length() > 0)\r
            {\r
                return field.textValue;\r
            }\r
        }\r
        return serverAddress;\r
    }\r
}\r
\`\`\`\r
\r
> [!IMPORTANT]\r
> Store the peer in a **class member**, like \`peer\` above. A peer declared as a local variable is destroyed when the function returns — and the connection dies with it.\r
\r
### Reacting to peers coming and going\r
\r
The host typically watches connections to manage lobby slots:\r
\r
\`\`\`angelscript\r
void Start()\r
{\r
    if (!Network::Multiplayer::HasMultiplayerPeer())\r
    {\r
        return;\r
    }\r
\r
    Network::Multiplayer::GetOnPeerConnected().Add(CometDelegateuint64(OnPeerConnected));\r
    Network::Multiplayer::GetOnPeerDisconnected().Add(CometDelegateuint64(OnPeerDisconnected));\r
}\r
\r
void OnPeerConnected(uint64 peerId)\r
{\r
    if (!Network::Multiplayer::IsServer()) return;   // only the host manages slots\r
    Debug::Log("Peer joined: " + formatInt(peerId));\r
}\r
\r
void OnPeerDisconnected(uint64 peerId)\r
{\r
    if (!Network::Multiplayer::IsServer()) return;\r
    Debug::Log("Peer left: " + formatInt(peerId));\r
}\r
\`\`\`\r
\r
## RPCs: calling methods across the network\r
\r
Decorate a method with \`[Rpc(...)]\` and it becomes remotely callable. The decorator takes up to four values:\r
\r
\`\`\`angelscript\r
[Rpc(<mode>, <sync>, <transfer>, channel = 0)]\r
\`\`\`\r
\r
| Slot | Values | Meaning |\r
|------|--------|---------|\r
| **mode** | \`"any_peer"\` / \`"authority"\` | Who may invoke it: anyone, or only the entity's authority. |\r
| **sync** | \`"call_local"\` / \`""\` | Whether the *caller* also runs it locally. |\r
| **transfer** | \`"reliable"\` / \`"unreliable"\` / \`"unreliable_ordered"\` | Delivery guarantee. |\r
| **channel** | \`0–15\` | Ordering group for reliable packets. |\r
\r
Send with the two global helpers — broadcast, or to one peer:\r
\r
\`\`\`angelscript\r
// Broadcast to everyone (including yourself thanks to call_local):\r
Network::Multiplayer::Rpc(this, "SyncScore", score, wave);\r
\r
// Only to the host (peer 1):\r
Network::Multiplayer::RpcId(this, 1, "RequestColor", colorIndex);\r
\`\`\`\r
\r
And receive on the other side:\r
\r
\`\`\`angelscript\r
// Clients ask the host for something; the host validates and answers.\r
[Rpc("any_peer", "reliable")]\r
void RequestColor(int colorIndex)\r
{\r
    if (!Network::Multiplayer::IsServer()) return;\r
\r
    // Which client called us?\r
    int clientId = Network::Multiplayer::GetRemoteSenderId();\r
    Debug::Log("Peer " + formatInt(clientId) + " wants color " + formatInt(colorIndex));\r
}\r
\r
// The host pushes state to everyone; call_local means the host applies it too.\r
[Rpc("authority", "call_local", "reliable")]\r
void SyncScore(int score, int wave)\r
{\r
    UpdateHud(score, wave);\r
}\r
\`\`\`\r
\r
Pick the transfer mode by what the data is worth: **unreliable** for high-frequency input and cosmetic state (drops don't matter, the next packet fixes it), **reliable** for anything that must not be missed — fire commands, score changes, match flow.\r
\r
## Replicating state automatically\r
\r
Writing RPCs for every variable gets old fast. Comet replicates **fields** for you with two decorators:\r
\r
\`\`\`angelscript\r
class ShipController : CometBehaviour\r
{\r
    // Sent once, inside the spawn packet — seeds late joiners.\r
    [ReplicateOnSpawn] int ownerPeerId = 0;\r
    [ReplicateOnSpawn] int colorIndex = 0;\r
\r
    // Sent as reliable deltas whenever the value changes.\r
    [Replicate("on_change")] int health = 10;\r
    [Replicate("on_change")] bool alive = true;\r
\r
    // "always" mode would send every frame, unreliably - for values that\r
    // change constantly anyway.\r
}\r
\`\`\`\r
\r
For transforms, don't replicate fields by hand — add a **MultiplayerSynchronizer** behaviour to the entity and configure it once:\r
\r
\`\`\`angelscript\r
void Start()\r
{\r
    MultiplayerSynchronizer sync = MultiplayerSynchronizer::Get(entity);\r
    if (sync !is null)\r
    {\r
        sync.AddTransformPreset();   // replicate position/rotation/scale\r
        sync.interpolate = true;     // smooth over network ticks on clients\r
    }\r
}\r
\`\`\`\r
\r
The synchronizer can also hide an entity from specific peers — \`SetVisibilityFor(peerId, false)\` — for fog of war or per-player secrets.\r
\r
## Spawning entities across the network\r
\r
When the host instantiates a networked entity, every client needs a copy. A **MultiplayerSpawner** behaviour handles it: it registers spawnable prefabs (its \`spawnLimit\` caps runaway counts) and mirrors spawn/despawn to everyone:\r
\r
\`\`\`angelscript\r
// HOST only: spawn one ship per occupied lobby slot.\r
void StartMatch()\r
{\r
    for (int i = 0; i < 4; i++)\r
    {\r
        if (slotPeer[i] == 0) continue;\r
\r
        Entity ship = shipSpawner.Spawn(0);   // spawnable index 0\r
        if (ship !is null)\r
        {\r
            ShipController sc = ShipController::Get(ship);\r
            sc.ownerPeerId = slotPeer[i];      // [ReplicateOnSpawn] fields...\r
            sc.colorIndex  = slotColor[i];     // ...travel inside the spawn packet\r
        }\r
    }\r
\r
    Network::Multiplayer::Rpc(this, "BeginMatch");\r
}\r
\`\`\`\r
\r
Because \`ownerPeerId\` and \`colorIndex\` are \`[ReplicateOnSpawn]\`, every client — even one that joins later — receives the ship already configured.\r
\r
## Authority: who simulates what\r
\r
Every entity has a **multiplayer authority** — the peer that simulates it. By default that's the host. Three calls on \`Behaviour\` manage it:\r
\r
\`\`\`angelscript\r
IsMultiplayerAuthority();          // am I the one simulating this entity?\r
GetMultiplayerAuthority();         // whose is it? (peer id)\r
SetMultiplayerAuthority(peerId);   // hand it over\r
\`\`\`\r
\r
The sample's ships stay **host-authoritative**, which yields the classic, cheat-resistant split — *owners send input, the host simulates, state replicates back*:\r
\r
\`\`\`angelscript\r
void Update()\r
{\r
    // 1. The OWNING player reads input and ships it to the host.\r
    if (IsOwner() && alive)\r
    {\r
        float mx = 0.0F, my = 0.0F;\r
        if (Input::GetKeyPressed(KeyCode::W)) my += 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::S)) my -= 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::A)) mx -= 1.0F;\r
        if (Input::GetKeyPressed(KeyCode::D)) mx += 1.0F;\r
\r
        if (Network::Multiplayer::IsServer())\r
        {\r
            inX = mx; inY = my;                                   // host: apply directly\r
        }\r
        else\r
        {\r
            Network::Multiplayer::RpcId(this, 1, "RecvInput", mx, my);   // client: send\r
        }\r
    }\r
\r
    // 2. The HOST simulates every ship from the latest input.\r
    if (IsMultiplayerAuthority() && alive)\r
    {\r
        transform.Translate(Vector3(inX, inY, 0) * speed * Time::GetDeltaTime(), Space::World);\r
        // position replicates to everyone via the MultiplayerSynchronizer\r
    }\r
}\r
\r
bool IsOwner()\r
{\r
    return ownerPeerId == Network::Multiplayer::GetUniqueId();\r
}\r
\r
[Rpc("any_peer", "unreliable")]      // input: high-rate, drop-tolerant\r
void RecvInput(float mx, float my)\r
{\r
    if (!IsMultiplayerAuthority()) return;\r
    inX = mx; inY = my;\r
}\r
\`\`\`\r
\r
Note the guard inside every RPC — **never trust the network**: \`RecvInput\` ignores calls when this peer isn't the authority, and host-side handlers validate requests before applying them.\r
\r
## Cheat sheet\r
\r
| Task | Call |\r
|------|------|\r
| Install a transport | \`Network::Multiplayer::SetMultiplayerPeer(peer)\` |\r
| Who am I? | \`GetUniqueId()\` (host = 1), \`IsServer()\` |\r
| Broadcast an RPC | \`Rpc(this, "Method", args...)\` (up to 8 args) |\r
| RPC to one peer | \`RpcId(this, peerId, "Method", args...)\` |\r
| Who called this RPC? | \`GetRemoteSenderId()\` |\r
| Peer joined/left | \`GetOnPeerConnected() / GetOnPeerDisconnected()\` \`.Add(CometDelegateuint64(Handler))\` |\r
| Kick a peer | \`DisconnectPeer(peerId, force)\` |\r
| Sync fields | \`[Replicate("on_change")]\`, \`[Replicate("always")]\`, \`[ReplicateOnSpawn]\` |\r
| Sync transforms | \`MultiplayerSynchronizer\` + \`AddTransformPreset()\` |\r
| Networked spawn | \`MultiplayerSpawner.Spawn(index)\` on the host |\r
| Leave the session | \`Network::Multiplayer::ClearMultiplayerPeer()\` |\r
\r
## Where to go next\r
\r
Build the lobby screen with the [UI system](/tutorials/ui-system), then package a client for your friends in [Exporting Builds & Shipping Patches](/tutorials/build-and-patches).\r
`},{id:`node-graph`,title:`Visual Scripting with Node Graphs`,icon:`fa-diagram-project`,category:`Visual Scripting`,blurb:`Author gameplay logic as node graphs and write your own custom nodes in AngelScript.`,md:`# Visual Scripting with Node Graphs\r
\r
Not every piece of logic wants to be code. Dialogue trees, quest steps, cutscene sequencing, simple AI — these read beautifully as a **node graph**: boxes wired together, execution flowing along the wires. Comet's node graph system runs graphs on entities via a **Graph Updater**, and — uniquely — lets you write your own nodes in AngelScript.\r
\r
![A node graph in the editor: the Entry node flows through a Branch into a Set Score node and a Print, while data wires feed a Compare from Get Time and increment a Score variable through an Add node.](/tutorials/node-graph.png)\r
\r
## How a graph runs\r
\r
A graph starts at an implicit **Entry** node and flows along **flow wires** (white) from one **flow node** to the next. Before a node runs, its **data inputs** are pulled from upstream **pure nodes** (stateless little calculators — Add, Compare, Get Time) along **data wires** (coloured). **Variables** carry state, and a graph can expose **inputs** and **outputs** that your game code reads and writes.\r
\r
There are two kinds of node:\r
\r
- **Flow nodes** — sit on the execution path. They can take time, branch, or loop. A flow node returns an \`ExecutionResult\` naming which output to continue along.\r
- **Pure nodes** — compute output values from inputs on demand, with no side effects. They're evaluated (and memoized) whenever a flow node needs their result.\r
\r
## Running a graph on an entity\r
\r
Add a **Graph Updater** behaviour, assign it a graph, and it runs a private copy of that graph (the asset itself is never mutated). Your code feeds the graph its inputs and reads its outputs by variable name:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class QuestRunner : CometBehaviour\r
{\r
    void Start()\r
    {\r
        GraphUpdater updater = GraphUpdater::Get(entity);\r
\r
        // Push inputs into the graph...\r
        updater.SetInputFloat("playerLevel", 7.0);\r
        updater.SetInputBool("hasKey", true);\r
        updater.Start();\r
    }\r
\r
    void Update()\r
    {\r
        GraphUpdater updater = GraphUpdater::Get(entity);\r
        if (!updater.isRunning)\r
        {\r
            // ...and read what it produced.\r
            Debug::Log("reward: " + updater.GetOutputInt("goldReward"));\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\`SetInputBool/Int/Float/String/Vector2/Vector3\` push values in; \`GetOutputBool/Int/Float/...\` read them back; \`Start()\` / \`Stop()\` and \`isRunning\` control the run. When a graph finishes, its **End Update Action** can restart it, disable the behaviour, or destroy the entity.\r
\r
## Writing your own nodes in AngelScript\r
\r
This is the powerful part: a node is just an AngelScript class with attributes. **Pure nodes** override \`Evaluate\` and declare \`[Input]\`/\`[Output]\` fields:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::GraphNode;\r
\r
[GraphNodeMenuItem("Math/Add")]\r
class AddNode : PureNode\r
{\r
    [Input] float a;\r
    [Input] float b;\r
    [Output] float result;\r
\r
    void Evaluate(GraphNode graph)\r
    {\r
        result = a + b;\r
    }\r
}\r
\`\`\`\r
\r
**Flow nodes** declare their output pins in the constructor with \`super({...})\` and return an \`ExecutionResult\` naming the pin to continue along. A branch:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::GraphNode;\r
\r
[GraphNodeMenuItem("Flow/Branch")]\r
class BranchNode : FlowNode\r
{\r
    [Input] bool condition;\r
\r
    BranchNode()\r
    {\r
        super({"True", "False"});   // two flow outputs\r
    }\r
\r
    ExecutionResult OnExecute(GraphNode graph)\r
    {\r
        return ExecutionResult(condition ? "True" : "False");\r
    }\r
}\r
\`\`\`\r
\r
A flow node can also **span multiple frames** — return an empty \`ExecutionResult()\` to stay on the node and be called again next frame. That's how a Delay node works:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
using namespace CometEngine::GraphNode;\r
\r
[GraphNodeMenuItem("Flow/Delay")]\r
[NodeColor(0.2, 0.2, 0.5)]\r
class DelayNode : FlowNode\r
{\r
    [Input] float delaySeconds = 1.0F;\r
    private float startTime = 0.0F;\r
\r
    DelayNode()\r
    {\r
        super({"Next"});\r
    }\r
\r
    void OnExecuteStart(GraphNode graph)\r
    {\r
        startTime = Time::GetGameTime();\r
    }\r
\r
    ExecutionResult OnExecute(GraphNode graph)\r
    {\r
        if (Time::GetGameTime() - startTime >= delaySeconds)\r
        {\r
            return ExecutionResult("Next");   // move on\r
        }\r
        return ExecutionResult();             // wait, retry next frame\r
    }\r
}\r
\`\`\`\r
\r
The attributes are the glue:\r
\r
- **\`[GraphNodeMenuItem("Path/Name")]\`** — registers the node in the graph editor's right-click *Add Node* menu under that path. Required.\r
- **\`[Input]\` / \`[Output]\`** — mark fields as data pins. Supported types: \`bool\`, \`int\`, \`uint\`, \`int64\`, \`uint64\`, \`float\`, \`string\`, \`Vector2\`, \`Vector3\`, and object handles.\r
- **\`[NodeColor(r, g, b)]\`** — an optional header colour.\r
\r
Pure nodes can even resolve inputs **lazily** — override \`ResolveInputsManually()\` to return \`true\` and call \`ResolveInput(graph, "pinName")\` only for the branch you actually take, so an expensive or side-effecting upstream node on the path *not* chosen never runs.\r
\r
## Authoring a graph in the editor\r
\r
1. Create a graph object in the Project panel, then double-click to open the **graph editor**.\r
2. Right-click the canvas to add nodes from your \`[GraphNodeMenuItem]\` menu.\r
3. Drag from a flow output to the next node's flow input (white wires); drag from an \`[Output]\` pin to an \`[Input]\` pin (coloured wires).\r
4. Add **variables**, **inputs** and **outputs** in the side panel — those inputs/outputs are the contract your \`GraphUpdater\` code talks to.\r
5. Drop a **Graph Updater** on an entity and assign the graph.\r
\r
> [!NOTE]\r
> Data-flow cycles (a pure node feeding itself) are detected and reported; flow loops are allowed and intentional. The runtime always executes a **clone** of the asset, so a running graph never corrupts the source.\r
\r
## Where to go next\r
\r
Node graphs pair naturally with everything else — kick one off from an [input action](/tutorials/input), have it move a platform along a [Bézier path](/tutorials/bezier), or drive an [animator](/tutorials/animation) from its outputs.\r
`},{id:`build-and-patches`,title:`Exporting Builds & Shipping Patches`,icon:`fa-box-open`,category:`Shipping`,blurb:`Export to Windows, Linux, Android and Web, then ship incremental patches to players.`,md:`# Exporting Builds & Shipping Patches\r
\r
Your game runs great in the editor — time to put it in players' hands. Comet exports self-contained builds for **Windows, Linux, Android and Web**, packs your content into memory-mapped \`.ori\` archives, and — the killer feature — builds **incremental patches** that ship only what changed since the version your players already have.\r
\r
## The Build Settings window\r
\r
Open it from **Window → Build**:\r
\r
![The Build Settings window: the scene list, the Development Build options, platform tabs, Content Packaging and Patch Base Packs.](/tutorials/build-panel.png)\r
\r
From top to bottom:\r
\r
- **Scenes added in Build** — every scene that ships. The checkbox enables/disables a scene, dragging reorders them, and the number on the right is the **build index**: index \`0\` is the scene your game boots into. **Add Open Scenes** grabs whatever you have open.\r
- **Development Build** — turns on the in-game debugging tools: the dev console, debug drawing, on-screen stats and a log file. Leave it **off** for store builds. The next section breaks these down.\r
- **Platform tabs** — Windows / Linux / Android / Web, each with its own settings such as the target **Architecture** (the active platform is marked). Selecting a different tab shows **Switch Platform**, which reimports the asset library for that target.\r
- **Player Settings** — product name, version, icon and friends.\r
- **Build** / **Build And Run** — the moment of truth.\r
\r
## Development builds & the dev console\r
\r
Tick **Development Build** and a whole debugging toolkit ships inside your game. Leave it **off** for anything you hand to players — release builds drop the tooling, the watermark and the overhead. Its sub-options:\r
\r
- **Development Build (Dev Console available with \`º\`)** — the master switch. It enables the in-game **dev console**, opened at runtime with the **\`º\`** key (top-left of the keyboard, just below \`Esc\`).\r
- **Debug drawing** — lets \`Debug::DrawLine\` and friends render in the running game, so you can see raycasts, paths and hitboxes on the real build, not just in the editor.\r
- **HUD FPS stats** — an FPS + memory overlay you can toggle in-game with **Ctrl + F3**.\r
- **Extra HUD stats** — expands that overlay with frame time, draw calls and instance counts.\r
- **Write log file next to the executable** — dumps the run's log to a file beside the game, so you can debug a build on a machine that isn't yours.\r
- **Development watermark** — stamps a corner marker so a dev build is never mistaken for a release.\r
\r
### The dev console\r
\r
Press **\`º\`** in a development build and the console drops down over your game — a live command line into the running build:\r
\r
![The Comet dev console open over a running game, listing the built-in commands after typing /help.](/tutorials/dev-console.png)\r
\r
Type \`/help\` for the list. The built-ins cover what you reach for constantly while testing:\r
\r
| Command | What it does |\r
| --- | --- |\r
| \`/help\` | List commands. |\r
| \`/quit\` | Stop play / quit the game. |\r
| \`/hide\` | Hide the console. |\r
| \`/clear\` | Clear the console. |\r
| \`/load <name\\|index>\` | Load a scene by name or build index. |\r
| \`/reload\` | Reload the current scene. |\r
| \`/restart\` | Reload the first build scene. |\r
| \`/scenes\` | List the build scenes. |\r
| \`/timescale <n>\` | Get / set the time scale (\`0.5\` = half speed, \`0\` = pause). |\r
| \`/stats\` | Toggle the stats HUD (FPS + memory). |\r
| \`/extra_stats\` | Toggle extra stats (frame time, draw calls, instances). |\r
| \`/watermark\` | Toggle the dev watermark. |\r
| \`/mem\` | Print memory usage. |\r
| \`/fullscreen\` | Toggle fullscreen. |\r
| \`/vsync <on\\|off>\` | Toggle vsync. |\r
| \`/res <w> <h>\` | Set the window size. |\r
| \`/screenshot [path]\` | Save a screenshot without the console in it. |\r
| \`/volume <n>\` | Set master volume (\`0..1\`). |\r
| \`/mute\` | Toggle audio mute. |\r
\r
### Registering your own commands\r
\r
The console is scriptable: register a command from AngelScript and it appears in \`/help\` right beside the built-ins. Hand \`DevConsole::RegisterCommand\` a name, a help string and a callback that receives the typed arguments:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class DebugCommands : CometBehaviour\r
{\r
    void Start()\r
    {\r
        DevConsole::RegisterCommand("print <str>", "prints the given str",\r
            CometDelegateStringArray(PrintCommand));\r
    }\r
\r
    void PrintCommand(array<string>@ args)\r
    {\r
        if (args.length() == 0) return;\r
        print(args[0]);\r
    }\r
}\r
\`\`\`\r
\r
Now typing \`/print hello\` echoes \`hello\` in the console. The first word of the name (\`print\`) becomes the \`/print\` you type; the rest (\`<str>\`) is just a usage hint shown by \`/help\`. The callback receives the space-separated arguments the player typed, and \`print(...)\` writes back into the console. \`DevConsole::Show()\`, \`Hide()\`, \`IsShown()\` and \`UnregisterCommand("print")\` round out the API.\r
\r
### Debugging and profiling a dev build\r
\r
A development build isn't only for print-debugging — the editor can **attach its script debugger and profiler to the running build** over a local socket. Turn it on in **Preferences → Build Debugger**:\r
\r
![Preferences → Build Debugger: "Attach to development builds", with the script debugger and profiler ports.](/tutorials/build-debugger.png)\r
\r
With **Attach to development builds** ticked, launch a development build and the editor connects to it automatically on the **script debugger port** (\`54711\`). From there the editor's built-in **text editor becomes a full AngelScript debugger for the live build**: click the gutter to set **breakpoints**, then **Step Over / Step In / Step Out / Continue** through your code while the game runs, inspecting the **call stack**, **local variables** and watched expressions in the debugger panels — the same experience as debugging play mode in the editor, except it's the real exported build being driven.\r
\r
The **profiler port** (\`54713\`) is the other half: it streams timing data from the running build into the editor's profiler, so you can see where each frame actually goes — script functions, draw calls, systems — on real hardware instead of guessing. (You only need to change either port if something else on your machine already uses it.)\r
\r
## What comes out the other side\r
\r
Comet packs content into **\`.ori\`** archives — a deterministic, binary-indexed format the runtime **memory-maps** and streams from with zero copies. Every resource is content-hashed, which is what makes patching possible later. The **Content Packaging** dropdown picks the layout:\r
\r
| Mode | Result |\r
|------|--------|\r
| \`Single .ori pack\` | The executable plus one \`.ori\` file next to it. The usual choice. |\r
| \`Embedded in executable\` | The \`.ori\` is appended to the executable — one single file to distribute. |\r
| \`Loose content folder\` | A \`content/\` folder with the raw blobs and manifests — convenient while iterating. |\r
\r
> [!NOTE]\r
> **Content Packaging is a standalone (Windows/Linux) option.** Android and Web decide their own layout: an Android build packs content uncompressed inside the APK so the engine can memory-map it in place, and a Web build produces a static site with the content preloaded or streamed over HTTP (see the platform notes below). The \`Single .ori\` / \`Embedded\` / \`Loose\` choice only applies to the desktop executable + pack you ship yourself.\r
\r
A typical Windows output folder:\r
\r
\`\`\`text\r
MyGame/\r
├── MyGame.exe\r
├── MyGame.ori          ← all packed content\r
├── extra_ori/          ← drop DLC/mod packs here: auto-mounted at boot\r
└── data/               ← loose files from your Data Assets folder\r
\`\`\`\r
\r
Anything you place in \`extra_ori/\` is mounted automatically at startup — a zero-code mod and DLC delivery mechanism.\r
\r
## Shipping a patch\r
\r
Here's the workflow that saves your players from re-downloading gigabytes.\r
\r
A patch is built **against the packs your players already have**. In the platform tab you'll find **Patch Base Packs**:\r
\r
1. Ship version 1.0 — a normal full build. Keep its \`MyGame.ori\` somewhere safe.\r
2. Keep developing: fix scenes, swap textures, add a level.\r
3. In the Build window, add the shipped \`MyGame.ori\` to **Patch Base Packs** (for later patches: list the base first, then each prior patch, in order).\r
4. Press **Build**. Comet compares every resource's content hash against the merged base packs and writes \`MyGame_patch.ori\` containing **only what changed** — plus tombstones for resources you deleted.\r
\r
Once the player has the patch file, there are two ways it gets applied, and the difference matters:\r
\r
- **Drop it in the \`extra_ori/\` folder** (next to the executable) and it is **mounted automatically at startup** — no code required. This is the zero-effort path for a launcher or auto-updater: download into \`extra_ori/\`, relaunch, done.\r
- **Put it anywhere else** and you must **mount it yourself from AngelScript** with \`OriLoader::Mount("path/to/patch.ori")\` (see below). This is what you want for an in-game "check for updates" button, DLC the player enables in a menu, or a mod loader.\r
\r
Either way the runtime layers the patch over the base: newer packs shadow older ones, deletions apply, done. Patch metadata records which content version it targets and its sequence number, so out-of-order patches are refused instead of corrupting the game.\r
\r
> [!NOTE]\r
> Patches are regular \`.ori\` packs. The same mechanism ships DLC: build a patch that only *adds* content and sell the file.\r
\r
### Mounting packs at runtime\r
\r
The \`OriLoader\` namespace lets scripts manage packs while the game runs — the foundation for in-game patchers, DLC stores and mod loaders:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class PatchManager : CometBehaviour\r
{\r
    void ApplyDownloadedPatch(const string &in path)\r
    {\r
        Debug::Log("Content version before: " + formatInt(OriLoader::GetContentVersion()));\r
\r
        if (OriLoader::Mount(path))\r
        {\r
            Debug::Log("Patch mounted! Now at version " + formatInt(OriLoader::GetContentVersion()));\r
            // Resources loaded from now on come from the patch where it shadows the base.\r
        }\r
        else\r
        {\r
            Debug::Log("Mount failed - wrong engine version or corrupt pack.");\r
        }\r
    }\r
\r
    void ListInstalledContent()\r
    {\r
        array<string> packs = OriLoader::GetMountedPacks();\r
        for (uint i = 0; i < packs.length(); i++)\r
        {\r
            Debug::Log("[" + formatInt(int(i)) + "] " + packs[i]);\r
        }\r
    }\r
\r
    void RemoveMod(const string &in path)\r
    {\r
        if (OriLoader::IsMounted(path))\r
        {\r
            OriLoader::Unmount(path);   // resources revert to the packs below\r
        }\r
    }\r
}\r
\`\`\`\r
\r
\`MountWithPriority(path, priority)\` controls shadowing order explicitly, and \`App::GetProductVersion()\` / \`App::GetEngineVersion()\` give you the strings for your own update checks.\r
\r
## Platform notes\r
\r
### Android\r
\r
The Android tab wants your signing setup: **Keystore File**, **Keystore Password**, **Key Alias**, **Key Password**, plus **Min/Target SDK Level** and the target **Architectures** (arm64-v8a by default). Comet generates a Gradle project, builds and signs the APK, and — with a device connected over ADB — **Build And Run** installs and launches it directly on the phone. Game content is stored uncompressed inside the APK so the engine can memory-map it in place.\r
\r
### Web\r
\r
The Web tab configures the **Canvas Size** and responsiveness. The build produces a static site — \`index.html\`, the WASM binary, the JS runtime, a service worker and your content:\r
\r
- Small games preload everything for a hitch-free start; bigger ones preload the boot set and stream the rest.\r
- The service worker caches content for instant reloads and offline play.\r
- Patches work over HTTP too: \`OriLoader::Mount("https://cdn.example.com/patch_v2.ori")\`.\r
\r
Remember the platform's limits: no native sockets (use WebSockets — see [Networking](/tutorials/networking)) and no threads.\r
\r
## Platform macros in AngelScript\r
\r
Because the same scripts compile for every target, you often need code that only exists on one platform — desktop file dialogs, web-specific networking, editor-only tooling. Comet defines a **preprocessor macro** for the platform each compile targets, and you branch on it with \`#ifdef\` / \`#ifndef\` / \`#else\` / \`#endif\`:\r
\r
| Macro | Defined when compiling for... |\r
|-------|-------------------------------|\r
| \`COMET_STANDALONE\` | a Windows or Linux desktop build |\r
| \`COMET_ANDROID\` | an Android build |\r
| \`COMET_WEB\` | a Web (Emscripten/WASM) build |\r
| \`COMET_EDITOR\` | running **inside the editor** (play mode / edit mode), not an exported build |\r
\r
\`COMET_EDITOR\` is the important one: it's defined while your scripts run in the editor and **absent in every exported build**. Wrap editor-only helpers, debug shortcuts and test hooks in it so they compile out of the shipped game:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class DebugTools : CometBehaviour\r
{\r
    void Update()\r
    {\r
#ifdef COMET_EDITOR\r
        // Cheat keys that only exist while developing in the editor.\r
        if (Input::GetKeyDown(KeyCode::F5)) GiveAllPowerups();\r
        if (Input::GetKeyDown(KeyCode::F6)) SkipLevel();\r
#endif\r
    }\r
\r
    void OpenSettingsFolder()\r
    {\r
#ifdef COMET_STANDALONE\r
        // Desktop-only: browse to a folder on disk.\r
        OpenNativeFileBrowser();\r
#elif defined(COMET_WEB)\r
        // The browser sandbox has no filesystem — show an in-game panel instead.\r
        ShowInGameSettings();\r
#endif\r
    }\r
}\r
\`\`\`\r
\r
The build system also lets you define your own **scripting constants** per platform in the Player Settings, which appear as additional \`#ifdef\` symbols — handy for feature flags (a \`DEMO\` build, a \`CONSOLE\` variant, and so on).\r
\r
> [!TIP]\r
> \`COMET_EDITOR\` is true in **both** edit mode and play mode inside the editor. If you need "only in a real build", use \`#ifndef COMET_EDITOR\`. If you need "only on desktop", use \`#ifdef COMET_STANDALONE\`.\r
\r
### Detecting a development build at runtime\r
\r
The \`#ifdef\` macros above are **compile-time** — resolved when the script is built, so they can't tell a *development* build from a *release* one (both are, say, \`COMET_STANDALONE\`). For that, check at **runtime** with \`Debug::IsDevelopmentBuild()\`: it returns \`true\` when the **Development Build** box was ticked and \`false\` in a release build. Use it to gate cheats, debug overlays or verbose logging without maintaining a separate build:\r
\r
\`\`\`angelscript\r
using namespace CometEngine;\r
\r
class Cheats : CometBehaviour\r
{\r
    void Update()\r
    {\r
        if (!Debug::IsDevelopmentBuild()) return;   // release build: stay out of the way\r
\r
        if (Input::GetKeyDown(KeyCode::F5)) GiveAllPowerups();\r
        if (Input::GetKeyDown(KeyCode::F6)) SkipLevel();\r
    }\r
}\r
\`\`\`\r
\r
It pairs naturally with the compile-time macros: wrap editor-only tooling in \`#ifdef COMET_EDITOR\`, and gate the debug helpers that *do* ship in dev builds behind \`Debug::IsDevelopmentBuild()\`.\r
\r
## Automating builds (CI)\r
\r
Everything the Build window does is available headless — perfect for nightly builds and release pipelines:\r
\r
\`\`\`text\r
CometEngine.exe --export Windows --path "C:/projects/MyGame" --export-path "C:/builds/win64"\r
CometEngine.exe --export Web     --path "C:/projects/MyGame" --export-path "C:/builds/web"\r
\`\`\`\r
\r
\`--export\` implies headless mode: the project loads, scripts compile, the seven-step build pipeline runs (compile scripts → setup → runtime resources → scenes → resource filtering → pre-build → pack), progress is printed per step, and the process exits \`0\` on success or \`1\` on failure — exactly what your CI wants.\r
\r
> [!TIP]\r
> Configure **Patch Base Packs** in the project once, and your CI produces patch builds automatically: check the previous release's \`.ori\` packs into your release storage and point the project at them.\r
\r
## Pre-flight checklist\r
\r
- Every scene the game needs is in **Scenes added in Build**, with the right one at index \`0\`.\r
- **Development Build** is *off* for store releases.\r
- Player Settings: product name, version, icon set.\r
- Test the built game, not just the editor — packed-content loading and platform quirks only show up there.\r
- Shipped a build? **Archive its \`.ori\` packs.** They are the base every future patch is built against.\r
\r
## Where to go next\r
\r
Congratulations — you shipped! If players report a bug, you're one **Patch Base Packs** entry away from the fix. Now go back and make the game better: maybe some [2D lighting polish](/tutorials/lights)?\r
`}],Kn=[`2D Graphics`,`Animation`,`Physics`,`Input`,`UI`,`Audio`,`Navigation`,`Networking`,`Visual Scripting`,`Shipping`],qn=``,Jn=new Set(`class.interface.enum.funcdef.namespace.using.import.from.typedef.mixin.void.bool.int.int8.int16.int32.int64.uint.uint8.uint16.uint32.uint64.float.double.string.array.dictionary.auto.ref.any.const.private.protected.shared.external.final.abstract.override.explicit.property.get.set.in.out.inout.if.else.for.while.do.switch.case.default.break.continue.return.null.true.false.this.super.cast.is.not.and.or.xor.try.catch`.split(`.`));function Yn(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Xn(e){let t=``,n=0,r=e.length,i=(e,n)=>{t+=e?`<span class="as-${e}">${Yn(n)}</span>`:Yn(n)};for(;n<r;){let t=e.slice(n),r=t.match(/^\/\/[^\n]*/);if(r){i(`comment`,r[0]),n+=r[0].length;continue}if(r=t.match(/^\/\*[\s\S]*?(\*\/|$)/),r){i(`comment`,r[0]),n+=r[0].length;continue}if(r=t.match(/^"(?:[^"\\\n]|\\.)*"/),r){i(`string`,r[0]),n+=r[0].length;continue}if(r=t.match(/^'(?:[^'\\\n]|\\.)*'/),r){i(`string`,r[0]),n+=r[0].length;continue}if(r=t.match(/^#[a-zA-Z]+[^\n]*/),r){i(`meta`,r[0]),n+=r[0].length;continue}if((n===0||e[n-1]===`
`)&&(r=t.match(/^\s*\[[A-Za-z][^\]\n]*\]/),r)){i(`meta`,r[0]),n+=r[0].length;continue}if(r=t.match(/^0[xX][0-9a-fA-F]+|^\d+\.\d+[fF]?|^\.\d+[fF]?|^\d+[fF]?/),r&&/^[\d.]|^0[xX]/.test(r[0])){let t=n>0?e[n-1]:``;if(!/[A-Za-z0-9_]/.test(t)){i(`number`,r[0]),n+=r[0].length;continue}}if(r=t.match(/^[A-Za-z_][A-Za-z0-9_]*/),r){let t=r[0],a=e.slice(n+t.length);Jn.has(t)?i(`keyword`,t):a.startsWith(`::`)?i(`type`,t):/^\s*\(/.test(a)?i(`func`,t):/^[A-Z]/.test(t)?i(`type`,t):i(null,t),n+=t.length;continue}i(null,e[n]),n+=1}return t}function Zn(e){return e.toLowerCase().trim().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`)}function Qn(){window.openLightbox||(window.openLightbox=e=>{let t=document.createElement(`div`);t.style.cssText=`
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.85); display: flex; justify-content: center;
      align-items: center; z-index: 9999; cursor: zoom-out;
      opacity: 0; transition: opacity 0.3s ease; backdrop-filter: blur(5px);
    `;let n=document.createElement(`img`);n.src=e,n.style.cssText=`
      max-width: 90%; max-height: 90%; border-radius: 12px;
      box-shadow: 0 0 50px rgba(0,0,0,0.5); transform: scale(0.9);
      transition: transform 0.3s ease; border: 1px solid rgba(255,255,255,0.1);
    `,t.appendChild(n),document.body.appendChild(t),setTimeout(()=>{t.style.opacity=`1`,n.style.transform=`scale(1)`},10),t.onclick=()=>{t.style.opacity=`0`,n.style.transform=`scale(0.9)`,setTimeout(()=>t.remove(),300)}})}var $n={NOTE:{icon:`fa-circle-info`,label:`Note`},TIP:{icon:`fa-lightbulb`,label:`Tip`},WARNING:{icon:`fa-triangle-exclamation`,label:`Warning`},IMPORTANT:{icon:`fa-circle-exclamation`,label:`Important`}};function er(e){let t=E.parse(e,{gfm:!0,breaks:!1}),n=Wn.sanitize(t),r=document.createElement(`div`);r.className=`tut-md`,r.innerHTML=n;let i=new Set;return r.querySelectorAll(`h2, h3`).forEach(e=>{let t=Zn(e.textContent);for(;i.has(t);)t+=`-x`;i.add(t),e.id=t}),r.querySelectorAll(`blockquote`).forEach(e=>{let t=e.querySelector(`p`);if(!t)return;let n=t.textContent.match(/^\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*/);if(!n)return;let r=n[1],i=$n[r];t.innerHTML=t.innerHTML.replace(/^\s*\[!(NOTE|TIP|WARNING|IMPORTANT)\]\s*(<br\s*\/?>)?\s*/,``),t.textContent.trim()||t.remove();let a=document.createElement(`div`);for(a.className=`tut-callout tut-callout-${r.toLowerCase()}`,a.innerHTML=`<div class="tut-callout-title"><i class="fas ${i.icon}"></i>${i.label}</div>`;e.firstChild;)a.appendChild(e.firstChild);e.replaceWith(a)}),r.querySelectorAll(`img`).forEach(e=>{let t=document.createElement(`figure`);t.className=`tut-figure`;let n=e.getAttribute(`alt`)||``;e.loading=`lazy`;let r=e.parentElement;if(r.replaceChild(t,e),t.appendChild(e),n){let e=document.createElement(`figcaption`);e.textContent=n,t.appendChild(e)}r.tagName===`P`&&r.childNodes.length===1&&r.replaceWith(t)}),r.querySelectorAll(`pre > code`).forEach(e=>{let t=e.parentElement,n=(e.className||``).match(/language-(\w+)/),r=n?n[1]:``,i=e.textContent;(r===`angelscript`||r===`as`)&&(e.innerHTML=Xn(i));let a=document.createElement(`div`);a.className=`tut-codeblock`,t.replaceWith(a);let o=document.createElement(`div`);o.className=`tut-codeblock-header`,o.innerHTML=`
      <span class="tut-codeblock-lang">${r===`as`?`angelscript`:r||`text`}</span>
      <button class="tut-copy-btn" type="button" title="Copy to clipboard"><i class="far fa-copy"></i> Copy</button>
    `,a.appendChild(o),a.appendChild(t),o.querySelector(`.tut-copy-btn`).addEventListener(`click`,e=>{navigator.clipboard.writeText(i).then(()=>{let t=e.currentTarget;t.innerHTML=`<i class="fas fa-check"></i> Copied!`,setTimeout(()=>{t.innerHTML=`<i class="far fa-copy"></i> Copy`},1600)})})}),r.querySelectorAll(`table`).forEach(e=>{let t=document.createElement(`div`);t.className=`tut-table-wrap`,e.replaceWith(t),t.appendChild(e)}),r.querySelectorAll(`.tut-figure img`).forEach(e=>{e.style.cursor=`zoom-in`,e.addEventListener(`click`,()=>window.openLightbox(e.src))}),r}function tr(e){let t=new Map;Kn.forEach(e=>t.set(e,[])),Gn.forEach(e=>t.get(e.category).push(e));let n=qn.toLowerCase(),r=``;return t.forEach((t,i)=>{let a=n?t.filter(e=>e.title.toLowerCase().includes(n)||i.toLowerCase().includes(n)):t;a.length!==0&&(r+=`
      <div class="tut-nav-category">${i}</div>
      ${a.map(t=>`
        <a href="/tutorials/${t.id}" class="tut-nav-item ${t.id===e?`active`:``}">
          <i class="fas ${t.icon}"></i><span>${t.title}</span>
        </a>
      `).join(``)}
    `)}),r||`<div class="tut-nav-empty">No tutorials match your search.</div>`}function nr(e){e.innerHTML=`
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
        <div class="tut-grid">${Gn.map(e=>`
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
  `,window.scrollTo(0,0)}function rr(e,t){Qn();let n=Gn.indexOf(t),r=n>0?Gn[n-1]:null,i=n<Gn.length-1?Gn[n+1]:null;e.innerHTML=`
    <div class="docs-layout">
      <div class="docs-sidebar tut-sidebar">
        <div class="docs-sidebar-search">
          <input type="text" id="tut-search" class="search-box" placeholder="Filter tutorials..." style="margin-bottom: 0;" value="${qn.replace(/"/g,`&quot;`)}">
        </div>
        <div class="docs-sidebar-tree" id="tut-nav">${tr(t.id)}</div>
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
  `;let a=document.getElementById(`tut-article`);a.appendChild(er(t.md));let o=a.querySelectorAll(`h2, h3`),s=document.getElementById(`tut-toc`);if(o.length>1){s.innerHTML=`
      <div class="tut-toc-title">On this page</div>
      ${Array.from(o).map(e=>`
        <a href="/" data-target="${e.id}" class="tut-toc-link tut-toc-${e.tagName.toLowerCase()}">${e.textContent}</a>
      `).join(``)}
    `;let e=document.getElementById(`tut-scroll`);s.querySelectorAll(`.tut-toc-link`).forEach(t=>{t.addEventListener(`click`,n=>{n.preventDefault();let r=document.getElementById(t.dataset.target);r&&e.scrollTo({top:r.offsetTop-24,behavior:`smooth`})})});let t=new Map;s.querySelectorAll(`.tut-toc-link`).forEach(e=>t.set(e.dataset.target,e));let n=new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){s.querySelectorAll(`.tut-toc-link.active`).forEach(e=>e.classList.remove(`active`));let n=t.get(e.target.id);n&&n.classList.add(`active`)}})},{root:e,rootMargin:`0px 0px -75% 0px`});o.forEach(e=>n.observe(e))}document.getElementById(`tut-search`).addEventListener(`input`,e=>{qn=e.target.value,document.getElementById(`tut-nav`).innerHTML=tr(t.id)}),document.getElementById(`tut-scroll`).scrollTop=0}function ir(e,t){document.title=e;let n=document.querySelector(`meta[name="description"]`);n&&t&&n.setAttribute(`content`,t)}function ar(e,t){let n=decodeURIComponent(t.replace(`#tutorials`,``).substring(1));if(!n){ir(`Tutorials — Comet Engine`,`Step-by-step guides to every major subsystem of the Comet Engine 2D game engine — rendering, lighting, tilemaps, physics, animation, UI, audio, networking and more.`),nr(e);return}let r=Gn.find(e=>e.id===n);if(!r){mt(`/tutorials`);return}ir(`${r.title} — Comet Engine`,r.blurb),rr(e,r)}function or(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function sr(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var cr=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),lr=class extends Error{constructor(e,t=`FunctionsError`,n){super(e),this.name=t,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}},ur=class extends lr{constructor(e){super(`Failed to send a request to the Edge Function`,`FunctionsFetchError`,e)}},dr=class extends lr{constructor(e){super(`Relay Error invoking the Edge Function`,`FunctionsRelayError`,e)}},fr=class extends lr{constructor(e){super(`Edge Function returned a non-2xx status code`,`FunctionsHttpError`,e)}},pr;(function(e){e.Any=`any`,e.ApNortheast1=`ap-northeast-1`,e.ApNortheast2=`ap-northeast-2`,e.ApSouth1=`ap-south-1`,e.ApSoutheast1=`ap-southeast-1`,e.ApSoutheast2=`ap-southeast-2`,e.CaCentral1=`ca-central-1`,e.EuCentral1=`eu-central-1`,e.EuWest1=`eu-west-1`,e.EuWest2=`eu-west-2`,e.EuWest3=`eu-west-3`,e.SaEast1=`sa-east-1`,e.UsEast1=`us-east-1`,e.UsWest1=`us-west-1`,e.UsWest2=`us-west-2`})(pr||={});var mr=class{constructor(e,{headers:t={},customFetch:n,region:r=pr.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=cr(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return sr(this,arguments,void 0,function*(e,t={}){let n,r;try{let{headers:i,method:a,body:o,signal:s,timeout:c}=t,l={},{region:u}=t;u||=this.region;let d=new URL(`${this.url}/${e}`);u&&u!==`any`&&(l[`x-region`]=u,d.searchParams.set(`forceFunctionRegion`,u));let f;o&&(i&&!Object.prototype.hasOwnProperty.call(i,`Content-Type`)||!i)?typeof Blob<`u`&&o instanceof Blob||o instanceof ArrayBuffer?(l[`Content-Type`]=`application/octet-stream`,f=o):typeof o==`string`?(l[`Content-Type`]=`text/plain`,f=o):typeof FormData<`u`&&o instanceof FormData?f=o:(l[`Content-Type`]=`application/json`,f=JSON.stringify(o)):f=o&&typeof o!=`string`&&!(typeof Blob<`u`&&o instanceof Blob)&&!(o instanceof ArrayBuffer)&&!(typeof FormData<`u`&&o instanceof FormData)?JSON.stringify(o):o;let p=s;c&&(r=new AbortController,n=setTimeout(()=>r.abort(),c),s?(p=r.signal,s.addEventListener(`abort`,()=>r.abort())):p=r.signal);let m=yield this.fetch(d.toString(),{method:a||`POST`,headers:Object.assign(Object.assign(Object.assign({},l),this.headers),i),body:f,signal:p}).catch(e=>{throw new ur(e)}),h=m.headers.get(`x-relay-error`);if(h&&h===`true`)throw new dr(m);if(!m.ok)throw new fr(m);let g=(m.headers.get(`Content-Type`)??`text/plain`).split(`;`)[0].trim(),ee;return ee=g===`application/json`?yield m.json():g===`application/octet-stream`||g===`application/pdf`?yield m.blob():g===`text/event-stream`?m:g===`multipart/form-data`?yield m.formData():yield m.text(),{data:ee,error:null,response:m}}catch(e){return{data:null,error:e,response:e instanceof fr||e instanceof dr?e.context:void 0}}finally{n&&clearTimeout(n)}})}},hr=3,gr=e=>Math.min(1e3*2**e,3e4),_r=[520,503],vr=[`GET`,`HEAD`,`OPTIONS`],yr=class extends Error{constructor(e){super(e.message),this.name=`PostgrestError`,this.details=e.details,this.hint=e.hint,this.code=e.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function br(e,t){return new Promise(n=>{if(t?.aborted){n();return}let r=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e);function i(){clearTimeout(r),n()}t?.addEventListener(`abort`,i)})}function xr(e,t,n,r){return!(!r||n>=hr||!vr.includes(e)||!_r.includes(t))}var Sr=class{constructor(e){this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=e.method,this.url=e.url,this.headers=new Headers(e.headers),this.schema=e.schema,this.body=e.body,this.shouldThrowOnError=e.shouldThrowOnError??!1,this.signal=e.signal,this.isMaybeSingle=e.isMaybeSingle??!1,this.shouldStripNulls=e.shouldStripNulls??!1,this.urlLengthLimit=e.urlLengthLimit??8e3,this.retryEnabled=e.retry??!0,e.fetch?this.fetch=e.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get(`Accept`)===`text/csv`)throw Error(`stripNulls() cannot be used with csv()`);return this.shouldStripNulls=!0,this}setHeader(e,t){return this.headers=new Headers(this.headers),this.headers.set(e,t),this}retry(e){return this.retryEnabled=e,this}then(e,t){var n=this;if(this.schema===void 0||([`GET`,`HEAD`].includes(this.method)?this.headers.set(`Accept-Profile`,this.schema):this.headers.set(`Content-Profile`,this.schema)),this.method!==`GET`&&this.method!==`HEAD`&&this.headers.set(`Content-Type`,`application/json`),this.shouldStripNulls){let e=this.headers.get(`Accept`);e===`application/vnd.pgrst.object+json`?this.headers.set(`Accept`,`application/vnd.pgrst.object+json;nulls=stripped`):(!e||e===`application/json`)&&this.headers.set(`Accept`,`application/vnd.pgrst.array+json;nulls=stripped`)}let r=this.fetch,i=(async()=>{let e=0;for(;;){let t={};n.headers.forEach((e,n)=>{t[n]=e}),e>0&&(t[`X-Retry-Count`]=String(e));let i;try{i=await r(n.url.toString(),{method:n.method,headers:t,body:JSON.stringify(n.body,(e,t)=>typeof t==`bigint`?t.toString():t),signal:n.signal})}catch(t){if(t?.name===`AbortError`||t?.code===`ABORT_ERR`||!vr.includes(n.method))throw t;if(n.retryEnabled&&e<hr){let t=gr(e);e++,await br(t,n.signal);continue}throw t}if(xr(n.method,i.status,e,n.retryEnabled)){let t=i.headers?.get(`Retry-After`)??null,r=t===null?gr(e):Math.max(0,parseInt(t,10)||0)*1e3;await i.text(),e++,await br(r,n.signal);continue}return await n.processResponse(i)}})();return this.shouldThrowOnError||(i=i.catch(e=>{let t=``,n=``,r=``,i=e?.cause;if(i){let n=i?.message??``,r=i?.code??``;t=`${e?.name??`FetchError`}: ${e?.message}`,t+=`\n\nCaused by: ${i?.name??`Error`}: ${n}`,r&&(t+=` (${r})`),i?.stack&&(t+=`\n${i.stack}`)}else t=e?.stack??``;let a=this.url.toString().length;return e?.name===`AbortError`||e?.code===`ABORT_ERR`?(r=``,n=`Request was aborted (timeout or manual cancellation)`,a>this.urlLengthLimit&&(n+=`. Note: Your request URL is ${a} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(i?.name===`HeadersOverflowError`||i?.code===`UND_ERR_HEADERS_OVERFLOW`)&&(r=``,n=`HTTP headers exceeded server limits (typically 16KB)`,a>this.urlLengthLimit&&(n+=`. Your request URL is ${a} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${e?.name??`FetchError`}: ${e?.message}`,details:t,hint:n,code:r},data:null,count:null,status:0,statusText:``}})),i.then(e,t)}async processResponse(e){var t=this;let n=null,r=null,i=null,a=e.status,o=e.statusText;if(e.ok){if(t.method!==`HEAD`){let i=await e.text();if(i!==``)if(t.headers.get(`Accept`)===`text/csv`)r=i;else if(t.headers.get(`Accept`)&&t.headers.get(`Accept`)?.includes(`application/vnd.pgrst.plan+text`))r=i;else try{r=JSON.parse(i)}catch{if(n={message:i},r=null,t.shouldThrowOnError)throw new yr({message:i,details:``,hint:``,code:``})}}let s=t.headers.get(`Prefer`)?.match(/count=(exact|planned|estimated)/),c=e.headers.get(`content-range`)?.split(`/`);s&&c&&c.length>1&&(i=parseInt(c[1])),t.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(n={code:`PGRST116`,details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:`JSON object requested, multiple (or no) rows returned`},r=null,i=null,a=406,o=`Not Acceptable`):r=r.length===1?r[0]:null)}else{let i=await e.text();try{n=JSON.parse(i),Array.isArray(n)&&e.status===404&&(r=[],n=null,a=200,o=`OK`)}catch{e.status===404&&i===``?(a=204,o=`No Content`):n={message:i}}if(n&&t.shouldThrowOnError)throw new yr(n)}return{success:n===null,error:n,data:r,count:i,status:a,statusText:o}}returns(){return this}overrideTypes(){return this}},Cr=class extends Sr{throwOnError(){return super.throwOnError()}select(e){let t=!1,n=(e??`*`).split(``).map(e=>/\s/.test(e)&&!t?``:(e===`"`&&(t=!t),e)).join(``);return this.url.searchParams.set(`select`,n),this.headers.append(`Prefer`,`return=representation`),this}order(e,{ascending:t=!0,nullsFirst:n,foreignTable:r,referencedTable:i=r}={}){let a=i?`${i}.order`:`order`,o=this.url.searchParams.get(a);return this.url.searchParams.set(a,`${o?`${o},`:``}${e}.${t?`asc`:`desc`}${n===void 0?``:n?`.nullsfirst`:`.nullslast`}`),this}limit(e,{foreignTable:t,referencedTable:n=t}={}){let r=n===void 0?`limit`:`${n}.limit`;return this.url.searchParams.set(r,`${e}`),this}range(e,t,{foreignTable:n,referencedTable:r=n}={}){let i=r===void 0?`offset`:`${r}.offset`,a=r===void 0?`limit`:`${r}.limit`;return this.url.searchParams.set(i,`${e}`),this.url.searchParams.set(a,`${t-e+1}`),this}abortSignal(e){return this.signal=e,this}single(){return this.headers.set(`Accept`,`application/vnd.pgrst.object+json`),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set(`Accept`,`text/csv`),this}geojson(){return this.headers.set(`Accept`,`application/geo+json`),this}explain({analyze:e=!1,verbose:t=!1,settings:n=!1,buffers:r=!1,wal:i=!1,format:a=`text`}={}){let o=[e?`analyze`:null,t?`verbose`:null,n?`settings`:null,r?`buffers`:null,i?`wal`:null].filter(Boolean).join(`|`),s=this.headers.get(`Accept`)??`application/json`;return this.headers.set(`Accept`,`application/vnd.pgrst.plan+${a}; for="${s}"; options=${o};`),this}rollback(){return this.headers.append(`Prefer`,`tx=rollback`),this}returns(){return this}maxAffected(e){return this.headers.append(`Prefer`,`handling=strict`),this.headers.append(`Prefer`,`max-affected=${e}`),this}},wr=RegExp(`[,()]`),Tr=class extends Cr{throwOnError(){return super.throwOnError()}eq(e,t){return this.url.searchParams.append(e,`eq.${t}`),this}neq(e,t){return this.url.searchParams.append(e,`neq.${t}`),this}gt(e,t){return this.url.searchParams.append(e,`gt.${t}`),this}gte(e,t){return this.url.searchParams.append(e,`gte.${t}`),this}lt(e,t){return this.url.searchParams.append(e,`lt.${t}`),this}lte(e,t){return this.url.searchParams.append(e,`lte.${t}`),this}like(e,t){return this.url.searchParams.append(e,`like.${t}`),this}likeAllOf(e,t){return this.url.searchParams.append(e,`like(all).{${t.join(`,`)}}`),this}likeAnyOf(e,t){return this.url.searchParams.append(e,`like(any).{${t.join(`,`)}}`),this}ilike(e,t){return this.url.searchParams.append(e,`ilike.${t}`),this}ilikeAllOf(e,t){return this.url.searchParams.append(e,`ilike(all).{${t.join(`,`)}}`),this}ilikeAnyOf(e,t){return this.url.searchParams.append(e,`ilike(any).{${t.join(`,`)}}`),this}regexMatch(e,t){return this.url.searchParams.append(e,`match.${t}`),this}regexIMatch(e,t){return this.url.searchParams.append(e,`imatch.${t}`),this}is(e,t){return this.url.searchParams.append(e,`is.${t}`),this}isDistinct(e,t){return this.url.searchParams.append(e,`isdistinct.${t}`),this}in(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&wr.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`in.(${n})`),this}notIn(e,t){let n=Array.from(new Set(t)).map(e=>typeof e==`string`&&wr.test(e)?`"${e}"`:`${e}`).join(`,`);return this.url.searchParams.append(e,`not.in.(${n})`),this}contains(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cs.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cs.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cs.${JSON.stringify(t)}`),this}containedBy(e,t){return typeof t==`string`?this.url.searchParams.append(e,`cd.${t}`):Array.isArray(t)?this.url.searchParams.append(e,`cd.{${t.join(`,`)}}`):this.url.searchParams.append(e,`cd.${JSON.stringify(t)}`),this}rangeGt(e,t){return this.url.searchParams.append(e,`sr.${t}`),this}rangeGte(e,t){return this.url.searchParams.append(e,`nxl.${t}`),this}rangeLt(e,t){return this.url.searchParams.append(e,`sl.${t}`),this}rangeLte(e,t){return this.url.searchParams.append(e,`nxr.${t}`),this}rangeAdjacent(e,t){return this.url.searchParams.append(e,`adj.${t}`),this}overlaps(e,t){return typeof t==`string`?this.url.searchParams.append(e,`ov.${t}`):this.url.searchParams.append(e,`ov.{${t.join(`,`)}}`),this}textSearch(e,t,{config:n,type:r}={}){let i=``;r===`plain`?i=`pl`:r===`phrase`?i=`ph`:r===`websearch`&&(i=`w`);let a=n===void 0?``:`(${n})`;return this.url.searchParams.append(e,`${i}fts${a}.${t}`),this}match(e){return Object.entries(e).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(e,t,n){return this.url.searchParams.append(e,`not.${t}.${n}`),this}or(e,{foreignTable:t,referencedTable:n=t}={}){let r=n?`${n}.or`:`or`;return this.url.searchParams.append(r,`(${e})`),this}filter(e,t,n){return this.url.searchParams.append(e,`${t}.${n}`),this}},Er=class{constructor(e,{headers:t={},schema:n,fetch:r,urlLengthLimit:i=8e3,retry:a}){this.url=e,this.headers=new Headers(t),this.schema=n,this.fetch=r,this.urlLengthLimit=i,this.retry=a}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(e,t){let{head:n=!1,count:r}=t??{},i=n?`HEAD`:`GET`,a=!1,o=(e??`*`).split(``).map(e=>/\s/.test(e)&&!a?``:(e===`"`&&(a=!a),e)).join(``),{url:s,headers:c}=this.cloneRequestState();return s.searchParams.set(`select`,o),r&&c.append(`Prefer`,`count=${r}`),new Tr({method:i,url:s,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(e,{count:t,defaultToNull:n=!0}={}){let{url:r,headers:i}=this.cloneRequestState();if(t&&i.append(`Prefer`,`count=${t}`),n||i.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);r.searchParams.set(`columns`,e.join(`,`))}}return new Tr({method:`POST`,url:r,headers:i,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(e,{onConflict:t,ignoreDuplicates:n=!1,count:r,defaultToNull:i=!0}={}){let{url:a,headers:o}=this.cloneRequestState();if(o.append(`Prefer`,`resolution=${n?`ignore`:`merge`}-duplicates`),t!==void 0&&a.searchParams.set(`on_conflict`,t),r&&o.append(`Prefer`,`count=${r}`),i||o.append(`Prefer`,`missing=default`),Array.isArray(e)){let t=e.reduce((e,t)=>e.concat(Object.keys(t)),[]);if(t.length>0){let e=[...new Set(t)].map(e=>`"${e}"`);a.searchParams.set(`columns`,e.join(`,`))}}return new Tr({method:`POST`,url:a,headers:o,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(e,{count:t}={}){let{url:n,headers:r}=this.cloneRequestState();return t&&r.append(`Prefer`,`count=${t}`),new Tr({method:`PATCH`,url:n,headers:r,schema:this.schema,body:e,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:e}={}){let{url:t,headers:n}=this.cloneRequestState();return e&&n.append(`Prefer`,`count=${e}`),new Tr({method:`DELETE`,url:t,headers:n,schema:this.schema,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Dr(e){"@babel/helpers - typeof";return Dr=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Dr(e)}function Or(e,t){if(Dr(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Dr(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function kr(e){var t=Or(e,`string`);return Dr(t)==`symbol`?t:t+``}function Ar(e,t,n){return(t=kr(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Mr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?jr(Object(n),!0).forEach(function(t){Ar(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jr(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Nr=class e{constructor(e,{headers:t={},schema:n,fetch:r,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=n,this.urlLengthLimit=a;let s=r??globalThis.fetch;i!==void 0&&i>0?this.fetch=(e,t)=>{let n=new AbortController,r=setTimeout(()=>n.abort(),i),a=t?.signal;if(a){if(a.aborted)return clearTimeout(r),s(e,t);let i=()=>{clearTimeout(r),n.abort()};return a.addEventListener(`abort`,i,{once:!0}),s(e,Mr(Mr({},t),{},{signal:n.signal})).finally(()=>{clearTimeout(r),a.removeEventListener(`abort`,i)})}return s(e,Mr(Mr({},t),{},{signal:n.signal})).finally(()=>clearTimeout(r))}:this.fetch=s,this.retry=o}from(e){if(!e||typeof e!=`string`||e.trim()===``)throw Error(`Invalid relation name: relation must be a non-empty string.`);return new Er(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(t){return new e(this.url,{headers:this.headers,schema:t,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:n=!1,get:r=!1,count:i}={}){let a,o=new URL(`${this.url}/rpc/${e}`),s,c=e=>typeof e==`object`&&!!e&&(!Array.isArray(e)||e.some(c)),l=n&&Object.values(t).some(c);l?(a=`POST`,s=t):n||r?(a=n?`HEAD`:`GET`,Object.entries(t).filter(([e,t])=>t!==void 0).map(([e,t])=>[e,Array.isArray(t)?`{${t.join(`,`)}}`:`${t}`]).forEach(([e,t])=>{o.searchParams.append(e,t)})):(a=`POST`,s=t);let u=new Headers(this.headers);return l?u.set(`Prefer`,i?`count=${i},return=minimal`:`return=minimal`):i&&u.set(`Prefer`,`count=${i}`),new Tr({method:a,url:o,headers:u,schema:this.schemaName,body:s,fetch:this.fetch??fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},Pr=class{constructor(){}static detectEnvironment(){if(typeof WebSocket<`u`)return{type:`native`,wsConstructor:WebSocket};let e=globalThis;if(typeof globalThis<`u`&&e.WebSocket!==void 0)return{type:`native`,wsConstructor:e.WebSocket};let t=typeof global<`u`?global:void 0;if(t&&t.WebSocket!==void 0)return{type:`native`,wsConstructor:t.WebSocket};if(typeof globalThis<`u`&&e.WebSocketPair!==void 0&&globalThis.WebSocket===void 0)return{type:`cloudflare`,error:`Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.`,workaround:`Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.`};if(typeof globalThis<`u`&&e.EdgeRuntime||typeof navigator<`u`&&navigator.userAgent?.includes(`Vercel-Edge`))return{type:`unsupported`,error:`Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.`,workaround:`Use serverless functions or a different deployment target for WebSocket functionality.`};let n=globalThis.process;if(n){let e=n.versions;if(e&&e.node){let t=e.node,n=parseInt(t.replace(/^v/,``).split(`.`)[0]);return n>=22?globalThis.WebSocket===void 0?{type:`unsupported`,error:`Node.js ${n} detected but native WebSocket not found.`,workaround:`Provide a WebSocket implementation via the transport option.`}:{type:`native`,wsConstructor:globalThis.WebSocket}:{type:`unsupported`,error:`Node.js ${n} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:`unsupported`,error:`Unknown JavaScript runtime without WebSocket support.`,workaround:`Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.`}}static getWebSocketConstructor(){let e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||`WebSocket not supported in this environment.`;throw e.workaround&&(t+=`\n\nSuggested solution: ${e.workaround}`),Error(t)}static isWebSocketSupported(){try{let e=this.detectEnvironment();return e.type===`native`||e.type===`ws`}catch{return!1}}},Fr=`realtime-js/2.108.1`,Ir=`1.0.0`,Lr=`2.0.0`,Rr=Lr,zr=1e4,Br={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},Vr={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`,access_token:`access_token`},Hr={connecting:`connecting`,open:`open`,closing:`closing`,closed:`closed`},Ur=class{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT=`broadcast`,this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event==`string`)return t(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){return this._isArrayBuffer(e.payload?.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){let t=e.payload?.payload??new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,t)}_encodeJsonUserBroadcastPush(e){let t=e.payload?.payload??{},n=new TextEncoder().encode(JSON.stringify(t)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,n)}_encodeUserBroadcastPush(e,t,n){let r=e.topic,i=e.ref??``,a=e.join_ref??``,o=e.payload.event,s=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},c=Object.keys(s).length===0?``:JSON.stringify(s);if(a.length>255)throw Error(`joinRef length ${a.length} exceeds maximum of 255`);if(i.length>255)throw Error(`ref length ${i.length} exceeds maximum of 255`);if(r.length>255)throw Error(`topic length ${r.length} exceeds maximum of 255`);if(o.length>255)throw Error(`userEvent length ${o.length} exceeds maximum of 255`);if(c.length>255)throw Error(`metadata length ${c.length} exceeds maximum of 255`);let l=this.USER_BROADCAST_PUSH_META_LENGTH+a.length+i.length+r.length+o.length+c.length,u=new ArrayBuffer(this.HEADER_LENGTH+l),d=new DataView(u),f=0;d.setUint8(f++,this.KINDS.userBroadcastPush),d.setUint8(f++,a.length),d.setUint8(f++,i.length),d.setUint8(f++,r.length),d.setUint8(f++,o.length),d.setUint8(f++,c.length),d.setUint8(f++,t),Array.from(a,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(i,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(r,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(o,e=>d.setUint8(f++,e.charCodeAt(0))),Array.from(c,e=>d.setUint8(f++,e.charCodeAt(0)));var p=new Uint8Array(u.byteLength+n.byteLength);return p.set(new Uint8Array(u),0),p.set(new Uint8Array(n),u.byteLength),p.buffer}decode(e,t){if(this._isArrayBuffer(e))return t(this._binaryDecode(e));if(typeof e==`string`){let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}return t({})}_binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+4,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=e.slice(s,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,p={type:this.BROADCAST_EVENT,event:l,payload:f};return a>0&&(p.meta=JSON.parse(u)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){return e instanceof ArrayBuffer||e?.constructor?.name===`ArrayBuffer`}_pick(e,t){return!e||typeof e!=`object`?{}:Object.fromEntries(Object.entries(e).filter(([e])=>t.includes(e)))}},R;(function(e){e.abstime=`abstime`,e.bool=`bool`,e.date=`date`,e.daterange=`daterange`,e.float4=`float4`,e.float8=`float8`,e.int2=`int2`,e.int4=`int4`,e.int4range=`int4range`,e.int8=`int8`,e.int8range=`int8range`,e.json=`json`,e.jsonb=`jsonb`,e.money=`money`,e.numeric=`numeric`,e.oid=`oid`,e.reltime=`reltime`,e.text=`text`,e.time=`time`,e.timestamp=`timestamp`,e.timestamptz=`timestamptz`,e.timetz=`timetz`,e.tsrange=`tsrange`,e.tstzrange=`tstzrange`})(R||={});var Wr=(e,t,n={})=>{let r=n.skipTypes??[];return t?Object.keys(t).reduce((n,i)=>(n[i]=Gr(i,e,t,r),n),{}):{}},Gr=(e,t,n,r)=>{let i=t.find(t=>t.name===e)?.type,a=n[e];return i&&!r.includes(i)?Kr(i,a):qr(a)},Kr=(e,t)=>{if(e.charAt(0)===`_`)return Zr(t,e.slice(1,e.length));switch(e){case R.bool:return Jr(t);case R.float4:case R.float8:case R.int2:case R.int4:case R.int8:case R.numeric:case R.oid:return Yr(t);case R.json:case R.jsonb:return Xr(t);case R.timestamp:return Qr(t);case R.abstime:case R.date:case R.daterange:case R.int4range:case R.int8range:case R.money:case R.reltime:case R.text:case R.time:case R.timestamptz:case R.timetz:case R.tsrange:case R.tstzrange:return qr(t);default:return qr(t)}},qr=e=>e,Jr=e=>{switch(e){case`t`:return!0;case`f`:return!1;default:return e}},Yr=e=>{if(typeof e==`string`){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},Xr=e=>{if(typeof e==`string`)try{return JSON.parse(e)}catch{return e}return e},Zr=(e,t)=>{if(typeof e!=`string`)return e;let n=e.length-1,r=e[n];if(e[0]===`{`&&r===`}`){let r,i=e.slice(1,n);try{r=JSON.parse(`[`+i+`]`)}catch{r=i?i.split(`,`):[]}return r.map(e=>Kr(t,e))}return e},Qr=e=>typeof e==`string`?e.replace(` `,`T`):e,$r=e=>{let t=new URL(e);return t.protocol=t.protocol.replace(/^ws/i,`http`),t.pathname=t.pathname.replace(/\/+$/,``).replace(/\/socket\/websocket$/i,``).replace(/\/socket$/i,``).replace(/\/websocket$/i,``),t.pathname===``||t.pathname===`/`?t.pathname=`/api/broadcast`:t.pathname+=`/api/broadcast`,t.href},ei=e=>typeof e==`function`?e:function(){return e},ti=typeof self<`u`?self:null,ni=typeof window<`u`?window:null,ri=ti||ni||globalThis,ii=`2.0.0`,ai=1e4,oi=1e3,si={connecting:0,open:1,closing:2,closed:3},z={closed:`closed`,errored:`errored`,joined:`joined`,joining:`joining`,leaving:`leaving`},ci={close:`phx_close`,error:`phx_error`,join:`phx_join`,reply:`phx_reply`,leave:`phx_leave`},li={longpoll:`longpoll`,websocket:`websocket`},ui={complete:4},di=`base64url.bearer.phx.`,fi=class{constructor(e,t,n,r){this.channel=e,this.event=t,this.payload=n||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived(`timeout`)||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:e,response:t,_ref:n}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger(`timeout`,{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},pi=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries+=1,this.callback()},this.timerCalc(this.tries+1))}},mi=class{constructor(e,t,n){this.state=z.closed,this.topic=e,this.params=ei(t||{}),this.socket=n,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new fi(this,ci.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new pi(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive(`ok`,()=>{this.state=z.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this.joinPush.receive(`error`,e=>{this.state=z.errored,this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log(`channel`,`close ${this.topic}`),this.state=z.closed,this.socket.remove(this)}),this.onError(e=>{this.socket.hasLogger()&&this.socket.log(`channel`,`error ${this.topic}`,e),this.isJoining()&&this.joinPush.reset(),this.state=z.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive(`timeout`,()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`timeout ${this.topic}`,this.joinPush.timeout),new fi(this,ci.leave,ei({}),this.timeout).send(),this.state=z.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(ci.reply,(e,t)=>{this.trigger(this.replyEventName(t),e)})}join(e=this.timeout){if(this.joinedOnce)throw Error(`tried to join multiple times. 'join' can only be called a single time per channel instance`);return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=z.closed,this.bindings=[]}onClose(e){this.on(ci.close,e)}onError(e){return this.on(ci.error,t=>e(t))}on(e,t){let n=this.bindingRef++;return this.bindings.push({event:e,ref:n,callback:t}),n}off(e,t){this.bindings=this.bindings.filter(n=>!(n.event===e&&(t===void 0||t===n.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,n=this.timeout){if(t||={},!this.joinedOnce)throw Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new fi(this,e,function(){return t},n);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=z.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log(`channel`,`leave ${this.topic}`),this.trigger(ci.close,`leave`)},n=new fi(this,ci.leave,ei({}),e);return n.receive(`ok`,()=>t()).receive(`timeout`,()=>t()),n.send(),this.canPush()||n.trigger(`ok`,{}),n}onMessage(e,t,n){return t}filterBindings(e,t,n){return!0}isMember(e,t,n,r){return this.topic===e?r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log(`channel`,`dropping outdated message`,{topic:e,event:t,payload:n,joinRef:r}),!1):!0:!1}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=z.joining,this.joinPush.resend(e))}trigger(e,t,n,r){let i=this.onMessage(e,t,n,r);if(t&&!i)throw Error(`channel onMessage callbacks must return the payload, modified or unmodified`);let a=this.bindings.filter(r=>r.event===e&&this.filterBindings(r,t,n));for(let e=0;e<a.length;e++)a[e].callback(i,n,r||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===z.closed}isErrored(){return this.state===z.errored}isJoined(){return this.state===z.joined}isJoining(){return this.state===z.joining}isLeaving(){return this.state===z.leaving}},hi=class{static request(e,t,n,r,i,a,o){if(ri.XDomainRequest){let n=new ri.XDomainRequest;return this.xdomainRequest(n,e,t,r,i,a,o)}else if(ri.XMLHttpRequest){let s=new ri.XMLHttpRequest;return this.xhrRequest(s,e,t,n,r,i,a,o)}else if(ri.fetch&&ri.AbortController)return this.fetchRequest(e,t,n,r,i,a,o);else throw Error(`No suitable XMLHttpRequest implementation found`)}static fetchRequest(e,t,n,r,i,a,o){let s={method:e,headers:n,body:r},c=null;return i&&(c=new AbortController,setTimeout(()=>c.abort(),i),s.signal=c.signal),ri.fetch(t,s).then(e=>e.text()).then(e=>this.parseJSON(e)).then(e=>o&&o(e)).catch(e=>{e.name===`AbortError`&&a?a():o&&o(null)}),c}static xdomainRequest(e,t,n,r,i,a,o){return e.timeout=i,e.open(t,n),e.onload=()=>{let t=this.parseJSON(e.responseText);o&&o(t)},a&&(e.ontimeout=a),e.onprogress=()=>{},e.send(r),e}static xhrRequest(e,t,n,r,i,a,o,s){e.open(t,n,!0),e.timeout=a;for(let[t,n]of Object.entries(r))e.setRequestHeader(t,n);return e.onerror=()=>s&&s(null),e.onreadystatechange=()=>{e.readyState===ui.complete&&s&&s(this.parseJSON(e.responseText))},o&&(e.ontimeout=o),e.send(i),e}static parseJSON(e){if(!e||e===``)return null;try{return JSON.parse(e)}catch{return console&&console.log(`failed to parse JSON response`,e),null}}static serialize(e,t){let n=[];for(var r in e){if(!Object.prototype.hasOwnProperty.call(e,r))continue;let i=t?`${t}[${r}]`:r,a=e[r];typeof a==`object`?n.push(this.serialize(a,i)):n.push(encodeURIComponent(i)+`=`+encodeURIComponent(a))}return n.join(`&`)}static appendParams(e,t){return Object.keys(t).length===0?e:`${e}${e.match(/\?/)?`&`:`?`}${this.serialize(t)}`}},gi=e=>{let t=``,n=new Uint8Array(e),r=n.byteLength;for(let e=0;e<r;e++)t+=String.fromCharCode(n[e]);return btoa(t)},_i=class{constructor(e,t){t&&t.length===2&&t[1].startsWith(di)&&(this.authToken=atob(t[1].slice(di.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=si.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(e){return e.replace(`ws://`,`http://`).replace(`wss://`,`https://`).replace(RegExp(`(.*)/`+li.websocket),`$1/`+li.longpoll)}endpointURL(){return hi.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,n){this.close(e,t,n),this.readyState=si.connecting}ontimeout(){this.onerror(`timeout`),this.closeAndRetry(1005,`timeout`,!1)}isActive(){return this.readyState===si.open||this.readyState===si.connecting}poll(){let e={Accept:`application/json`};this.authToken&&(e[`X-Phoenix-AuthToken`]=this.authToken),this.ajax(`GET`,e,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:n,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,`session_gone`,!1);return}this.token=n}else t=0;switch(t){case 200:r.forEach(e=>{setTimeout(()=>this.onmessage({data:e}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=si.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,`forbidden`,!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,`internal server error`,500);break;default:throw Error(`unhandled poll status ${t}`)}})}send(e){typeof e!=`string`&&(e=gi(e)),this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e){this.awaitingBatchAck=!0,this.ajax(`POST`,{"Content-Type":`application/x-ndjson`},e.join(`
`),()=>this.onerror(`timeout`),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,`internal server error`,!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(e,t,n){for(let e of this.reqs)e.abort();this.readyState=si.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:n});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<`u`?this.onclose(new CloseEvent(`close`,r)):this.onclose(r)}ajax(e,t,n,r,i){let a;a=hi.request(e,this.endpointURL(),t,n,this.timeout,()=>{this.reqs.delete(a),r()},e=>{this.reqs.delete(a),this.isActive()&&i(e)}),this.reqs.add(a)}},vi=class e{constructor(t,n={}){let r=n.events||{state:`presence_state`,diff:`presence_diff`};this.state={},this.pendingDiffs=[],this.channel=t,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.joinRef=this.channel.joinRef(),this.state=e.syncState(this.state,t,n,r),this.pendingDiffs.forEach(t=>{this.state=e.syncDiff(this.state,t,n,r)}),this.pendingDiffs=[],i()}),this.channel.on(r.diff,t=>{let{onJoin:n,onLeave:r,onSync:i}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(t):(this.state=e.syncDiff(this.state,t,n,r),i())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(t){return e.list(this.state,t)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,n,r){let i=this.clone(e),a={},o={};return this.map(i,(e,n)=>{t[e]||(o[e]=n)}),this.map(t,(e,t)=>{let n=i[e];if(n){let r=t.metas.map(e=>e.phx_ref),i=n.metas.map(e=>e.phx_ref),s=t.metas.filter(e=>i.indexOf(e.phx_ref)<0),c=n.metas.filter(e=>r.indexOf(e.phx_ref)<0);s.length>0&&(a[e]=t,a[e].metas=s),c.length>0&&(o[e]=this.clone(n),o[e].metas=c)}else a[e]=t}),this.syncDiff(i,{joins:a,leaves:o},n,r)}static syncDiff(e,t,n,r){let{joins:i,leaves:a}=this.clone(t);return n||=function(){},r||=function(){},this.map(i,(t,r)=>{let i=e[t];if(e[t]=this.clone(r),i){let n=e[t].metas.map(e=>e.phx_ref),r=i.metas.filter(e=>n.indexOf(e.phx_ref)<0);e[t].metas.unshift(...r)}n(t,i,r)}),this.map(a,(t,n)=>{let i=e[t];if(!i)return;let a=n.metas.map(e=>e.phx_ref);i.metas=i.metas.filter(e=>a.indexOf(e.phx_ref)<0),r(t,i,n),i.metas.length===0&&delete e[t]}),e}static list(e,t){return t||=function(e,t){return t},this.map(e,(e,n)=>t(e,n))}static map(e,t){return Object.getOwnPropertyNames(e).map(n=>t(n,e[n]))}static clone(e){return JSON.parse(JSON.stringify(e))}},yi={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(n))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[n,r,i,a,o]=JSON.parse(e);return t({join_ref:n,ref:r,topic:i,event:a,payload:o})}},binaryEncode(e){let{join_ref:t,ref:n,event:r,topic:i,payload:a}=e,o=this.META_LENGTH+t.length+n.length+i.length+r.length,s=new ArrayBuffer(this.HEADER_LENGTH+o),c=new DataView(s),l=0;c.setUint8(l++,this.KINDS.push),c.setUint8(l++,t.length),c.setUint8(l++,n.length),c.setUint8(l++,i.length),c.setUint8(l++,r.length),Array.from(t,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(n,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(i,e=>c.setUint8(l++,e.charCodeAt(0))),Array.from(r,e=>c.setUint8(l++,e.charCodeAt(0)));var u=new Uint8Array(s.byteLength+a.byteLength);return u.set(new Uint8Array(s),0),u.set(new Uint8Array(a),s.byteLength),u.buffer},binaryDecode(e){let t=new DataView(e),n=t.getUint8(0),r=new TextDecoder;switch(n){case this.KINDS.push:return this.decodePush(e,t,r);case this.KINDS.reply:return this.decodeReply(e,t,r);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,r)}},decodePush(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,s=n.decode(e.slice(o,o+r));o+=r;let c=n.decode(e.slice(o,o+i));o+=i;let l=n.decode(e.slice(o,o+a));return o+=a,{join_ref:s,ref:null,topic:c,event:l,payload:e.slice(o,e.byteLength)}},decodeReply(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4),s=this.HEADER_LENGTH+this.META_LENGTH,c=n.decode(e.slice(s,s+r));s+=r;let l=n.decode(e.slice(s,s+i));s+=i;let u=n.decode(e.slice(s,s+a));s+=a;let d=n.decode(e.slice(s,s+o));s+=o;let f={status:d,response:e.slice(s,e.byteLength)};return{join_ref:c,ref:l,topic:u,event:ci.reply,payload:f}},decodeBroadcast(e,t,n){let r=t.getUint8(1),i=t.getUint8(2),a=this.HEADER_LENGTH+2,o=n.decode(e.slice(a,a+r));a+=r;let s=n.decode(e.slice(a,a+i));return a+=i,{join_ref:null,ref:null,topic:o,event:s,payload:e.slice(a,e.byteLength)}}},bi=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=t.timeout||ai,this.transport=t.transport||ri.WebSocket||_i,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=t.longPollFallbackMs,this.fallbackTimer=null;let n=null;try{n=ri&&ri.sessionStorage}catch{}this.sessionStore=t.sessionStorage||n,this.establishedConnections=0,this.defaultEncoder=yi.encode.bind(yi),this.defaultDecoder=yi.decode.bind(yi),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=t.binaryType||`arraybuffer`,this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport===_i?(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder):(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder);let r=null;ni&&ni.addEventListener&&(ni.addEventListener(`pagehide`,e=>{this.conn&&(this.disconnect(),r=this.connectClock)}),ni.addEventListener(`pageshow`,e=>{r===this.connectClock&&(r=null,this.connect())}),ni.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=t.autoSendHeartbeat??!0,this.heartbeatCallback=t.heartbeatCallback??(()=>{}),this.rejoinAfterMs=e=>t.rejoinAfterMs?t.rejoinAfterMs(e):[1e3,2e3,5e3][e-1]||1e4,this.reconnectAfterMs=e=>t.reconnectAfterMs?t.reconnectAfterMs(e):[10,50,100,150,200,250,500,1e3,2e3][e-1]||5e3,this.logger=t.logger||null,!this.logger&&t.debug&&(this.logger=(e,t,n)=>{console.log(`${e}: ${t}`,n)}),this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=ei(t.params||{}),this.endPoint=`${e}/${li.websocket}`,this.vsn=t.vsn||ii,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new pi(()=>{if(this.pageHidden){this.log(`Not reconnecting as page is hidden!`),this.teardown();return}this.teardown(async()=>{t.beforeReconnect&&await t.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=t.authToken}getLongPollTransport(){return _i}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&=(this.conn.close(),null),this.transport=e}protocol(){return location.protocol.match(/^https/)?`wss`:`ws`}endPointURL(){let e=hi.appendParams(hi.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)===`/`?e.charAt(1)===`/`?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`:e}disconnect(e,t,n){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,e&&e()},t,n)}connect(e){e&&(console&&console.log(`passing params to connect is deprecated. Instead pass :params to the Socket constructor`),this.params=ei(e)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==_i?this.connectWithFallback(_i,this.longPollFallbackMs):this.transportConnect())}log(e,t,n){this.logger&&this.logger(e,t,n)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}onHeartbeat(e){this.heartbeatCallback=e}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),n=Date.now();this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:t});let r=this.onMessage(i=>{i.ref===t&&(this.off([r]),e(Date.now()-n))});return!0}transportName(e){switch(e){case _i:return`LongPoll`;default:return e.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let e;this.authToken&&(e=[`phoenix`,`${di}${btoa(this.authToken).replace(/=/g,``)}`]),this.conn=new this.transport(this.endPointURL(),e),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(e){return this.sessionStore&&this.sessionStore.getItem(e)}storeSession(e,t){this.sessionStore&&this.sessionStore.setItem(e,t)}connectWithFallback(e,t=2500){clearTimeout(this.fallbackTimer);let n=!1,r=!0,i,a=this.transportName(e),o=t=>{this.log(`transport`,`falling back to ${a}...`,t),this.off([void 0,i]),r=!1,this.replaceTransport(e),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o(`memorized`);this.fallbackTimer=setTimeout(o,t),i=this.onError(e=>{this.log(`transport`,`error`,e),r&&!n&&(clearTimeout(this.fallbackTimer),o(e))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(n=!0,!r){let t=this.transportName(e);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${t}`,`true`),this.log(`transport`,`established ${t} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,t),this.ping(e=>{this.log(`transport`,`connected to primary after`,e),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log(`transport`,`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks(`open`)}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log(`transport`,`heartbeat timeout. Attempting to re-establish connection`);try{this.heartbeatCallback(`timeout`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.triggerChanError(Error(`heartbeat timeout`)),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),oi,`heartbeat timeout`)}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,n){if(!this.conn)return e&&e();let r=this.conn;this.waitForBufferDone(r,()=>{t?r.close(t,n||``):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t,n=1){if(n===5||!e.bufferedAmount){t();return}setTimeout(()=>{this.waitForBufferDone(e,t,n+1)},150*n)}waitForSocketClosed(e,t,n=1){if(n===5||e.readyState===si.closed){t();return}setTimeout(()=>{this.waitForSocketClosed(e,t,n+1)},150*n)}onConnClose(e){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log(`transport`,`close`,e),this.triggerChanError(e),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks(`close`,e)}onConnError(e){this.hasLogger()&&this.log(`transport`,`error`,e);let t=this.transport,n=this.establishedConnections;this.triggerStateCallbacks(`error`,e,t,n),(t===this.transport||n>0)&&this.triggerChanError(e)}triggerChanError(e){this.channels.forEach(t=>{t.isErrored()||t.isLeaving()||t.isClosed()||t.trigger(ci.error,e)})}connectionState(){switch(this.conn&&this.conn.readyState){case si.connecting:return`connecting`;case si.open:return`open`;case si.closing:return`closing`;default:return`closed`}}isConnected(){return this.connectionState()===`open`}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t!==e)}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([t])=>e.indexOf(t)===-1)}channel(e,t={}){let n=new mi(e,t,this);return this.channels.push(n),n}push(e){if(this.hasLogger()){let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;this.log(`push`,`${t} ${n} (${a}, ${i})`,r)}this.isConnected()?this.encode(e,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(e,e=>this.conn.send(e)))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback(`disconnected`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:`phoenix`,event:`heartbeat`,payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback(`sent`)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:n,payload:r,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){let e=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status===`ok`?`ok`:`error`,e)}catch(e){this.log(`error`,`error in heartbeat callback`,e)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log(`receive`,`${r.status||``} ${t} ${n} ${i&&`(`+i+`)`||``}`.trim(),r);for(let e=0;e<this.channels.length;e++){let o=this.channels[e];o.isMember(t,n,r,a)&&o.trigger(n,r,i,a)}this.triggerStateCallbacks(`message`,e)})}triggerStateCallbacks(e,...t){try{this.stateChangeCallbacks[e].forEach(([n,r])=>{try{r(...t)}catch(t){this.log(`error`,`error in ${e} callback`,t)}})}catch(t){this.log(`error`,`error triggering ${e} callbacks`,t)}}leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t.isJoined()||t.isJoining()));t&&(this.hasLogger()&&this.log(`transport`,`leaving duplicate topic "${e}"`),t.leave())}},xi=class e{constructor(t,n){let r=wi(n);this.presence=new vi(t.getChannel(),r),this.presence.onJoin((n,r,i)=>{let a=e.onJoinPayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onLeave((n,r,i)=>{let a=e.onLeavePayload(n,r,i);t.getChannel().trigger(`presence`,a)}),this.presence.onSync(()=>{t.getChannel().trigger(`presence`,{event:`sync`})})}get state(){return e.transformState(this.presence.state)}static transformState(e){return e=Ci(e),Object.getOwnPropertyNames(e).reduce((t,n)=>{let r=e[n];return t[n]=Si(r),t},{})}static onJoinPayload(e,t,n){return{event:`join`,key:e,currentPresences:Ti(t),newPresences:Si(n)}}static onLeavePayload(e,t,n){return{event:`leave`,key:e,currentPresences:Ti(t),leftPresences:Si(n)}}};function Si(e){return e.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Ci(e){return JSON.parse(JSON.stringify(e))}function wi(e){return e?.events&&{events:e.events}}function Ti(e){return e?.metas?Si(e):[]}var Ei;(function(e){e.SYNC=`sync`,e.JOIN=`join`,e.LEAVE=`leave`})(Ei||={});var Di=class{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new xi(this.channel.channelAdapter,t)}};function Oi(e){if(e instanceof Error)return e;if(typeof e==`string`)return Error(e);if(e&&typeof e==`object`){let t=e;if(typeof t.code==`number`){let n=typeof t.reason==`string`&&t.reason?` (${t.reason})`:``;return Error(`socket closed: ${t.code}${n}`,{cause:e})}return Error(`channel error: transport failure`,{cause:e})}return Error(`channel error: connection lost`)}var ki=class{constructor(e,t,n){let r=Ai(n);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,n){let r;try{r=this.channel.push(e,t,n)}catch{throw Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>100){let e=this.channel.pushBuffer.shift();e.cancelTimeout(),this.socket.log(`channel`,`discarded push due to buffer overflow: ${e.event}`,e.payload())}return r}updateJoinPayload(e){let t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===Br.joined}isJoined(){return this.state===Br.joined}isJoining(){return this.state===Br.joining}isClosed(){return this.state===Br.closed}isLeaving(){return this.state===Br.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}};function Ai(e){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},e.config)}}var ji;(function(e){e.ALL=`*`,e.INSERT=`INSERT`,e.UPDATE=`UPDATE`,e.DELETE=`DELETE`})(ji||={});var Mi;(function(e){e.BROADCAST=`broadcast`,e.PRESENCE=`presence`,e.POSTGRES_CHANGES=`postgres_changes`,e.SYSTEM=`system`})(Mi||={});var Ni;(function(e){e.SUBSCRIBED=`SUBSCRIBED`,e.TIMED_OUT=`TIMED_OUT`,e.CLOSED=`CLOSED`,e.CHANNEL_ERROR=`CHANNEL_ERROR`})(Ni||={});var Pi=class e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},n){if(this.topic=e,this.params=t,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,``),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:``,enabled:!1},private:!1},t.config),this.channelAdapter=new ki(this.socket.socketAdapter,e,this.params),this.presence=new Di(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=$r(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&this.params.config?.broadcast?.replay)throw Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){let{config:{broadcast:n,presence:r,private:i}}=this.params,a=this.bindings.postgres_changes?.map(e=>e.filter)??[],o=!!this.bindings[Mi.PRESENCE]&&this.bindings[Mi.PRESENCE].length>0||this.params.config.presence?.enabled===!0,s={},c={broadcast:n,presence:Object.assign(Object.assign({},r),{enabled:o}),postgres_changes:a,private:i};this.socket.accessTokenValue&&(s.access_token=this.socket.accessTokenValue),this._onError(t=>{e?.(Ni.CHANNEL_ERROR,Oi(t))}),this._onClose(()=>e?.(Ni.CLOSED)),this.updateJoinPayload(Object.assign({config:c},s)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive(`ok`,async({postgres_changes:t})=>{if(this.socket._isManualToken()||this.socket.setAuth(),t===void 0){e?.(Ni.SUBSCRIBED);return}this._updatePostgresBindings(t,e)}).receive(`error`,t=>{this.state=Br.errored;let n=Object.values(t).join(`, `)||`error`;e?.(Ni.CHANNEL_ERROR,Error(n,{cause:t}))}).receive(`timeout`,()=>{e?.(Ni.TIMED_OUT)})}return this}_updatePostgresBindings(t,n){let r=this.bindings.postgres_changes,i=r?.length??0,a=[];for(let o=0;o<i;o++){let i=r[o],{filter:{event:s,schema:c,table:l,filter:u}}=i,d=t&&t[o];if(d&&d.event===s&&e.isFilterValueEqual(d.schema,c)&&e.isFilterValueEqual(d.table,l)&&e.isFilterValueEqual(d.filter,u))a.push(Object.assign(Object.assign({},i),{id:d.id}));else{this.unsubscribe(),this.state=Br.errored,n?.(Ni.CHANNEL_ERROR,Error(`mismatch between server and client bindings for postgres changes`));return}}this.bindings.postgres_changes=a,this.state!=Br.errored&&n&&n(Ni.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:`presence`,event:`track`,payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:`presence`,event:`untrack`},e)}on(e,t,n){let r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===Mi.PRESENCE||e===Mi.POSTGRES_CHANGES;if(r&&i)throw this.socket.log(`channel`,`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,n)}async httpSend(e,t,n={}){if(t==null)return Promise.reject(Error(`Payload is required for httpSend()`));let r=t instanceof ArrayBuffer||ArrayBuffer.isView(t),i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":r?`application/octet-stream`:`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a=new URL(this.broadcastEndpointURL);a.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&a.searchParams.set(`private`,`true`);let o={method:`POST`,headers:i,body:r?t:JSON.stringify(t)},s=await this._fetchWithTimeout(a.toString(),o,n.timeout??this.timeout);if(s.status===202)return{success:!0};let c=s.statusText;try{let e=await s.json();c=e.error||e.message||c}catch{}return Promise.reject(Error(c))}async send(e,t={}){if(!this.channelAdapter.canPush()&&e.type===`broadcast`){console.warn(`Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.`);let{event:n,payload:r}=e,i={apikey:this.socket.apiKey?this.socket.apiKey:``,"Content-Type":`application/json`};this.socket.accessTokenValue&&(i.Authorization=`Bearer ${this.socket.accessTokenValue}`);let a={method:`POST`,headers:i,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:r,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,a,t.timeout??this.timeout);return await e.body?.cancel(),e.ok?`ok`:`error`}catch(e){return e instanceof Error&&e.name===`AbortError`?`timed out`:`error`}}else return new Promise(n=>{let r=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type===`broadcast`&&!this.params?.config?.broadcast?.ack&&n(`ok`),r.receive(`ok`,()=>n(`ok`)),r.receive(`error`,()=>n(`error`)),r.receive(`timeout`,()=>n(`timed out`))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive(`ok`,()=>t(`ok`)).receive(`timeout`,()=>t(`timed out`)).receive(`error`,()=>t(`error`))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,n){let r=new AbortController,i=setTimeout(()=>r.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(i),a}_on(e,t,n){let r=e.toLocaleLowerCase(),i={type:r,filter:t,callback:n,ref:this.channelAdapter.on(e,n)};return this.bindings[r]?this.bindings[r].push(i):this.bindings[r]=[i],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,n)=>{let r=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(r,n))return!1;let i=this.bindings[r]?.find(t=>t.ref===e.ref);if(!i)return!0;if([`broadcast`,`presence`,`postgres_changes`].includes(r))if(`id`in i){let e=i.id,n=i.filter?.event;return e&&t.ids?.includes(e)&&(n===`*`||n?.toLocaleLowerCase()===t.data?.type.toLocaleLowerCase())}else{let e=(i?.filter?.event)?.toLocaleLowerCase();return e===`*`||e===(t?.event)?.toLocaleLowerCase()}else return i.type.toLocaleLowerCase()===r})}_notThisChannelEvent(e,t){let{close:n,error:r,leave:i,join:a}=Vr;return t&&[n,r,i,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,n)=>{if(typeof t==`object`&&`ids`in t){let e=t.data,{schema:n,table:r,commit_timestamp:i,type:a,errors:o}=e;return Object.assign(Object.assign({},{schema:n,table:r,commit_timestamp:i,eventType:a,new:{},old:{},errors:o}),this._getPayloadRecords(e))}return t})}copyBindings(e){if(this.joinedOnce)throw Error(`cannot copy bindings into joined channel`);for(let t in e.bindings)for(let n of e.bindings[t])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){let t={new:{},old:{}};return(e.type===`INSERT`||e.type===`UPDATE`)&&(t.new=Wr(e.columns,e.record)),(e.type===`UPDATE`||e.type===`DELETE`)&&(t.old=Wr(e.columns,e.old_record)),t}},Fi=class{constructor(e,t){this.socket=new bi(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,n,r=1e4){return new Promise(i=>{setTimeout(()=>i(`timeout`),r),this.socket.disconnect(()=>{e(),i(`ok`)},t,n)})}push(e){this.socket.push(e)}log(e,t,n){this.socket.log(e,t,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Hr.connecting}isDisconnecting(){return this.socket.connectionState()==Hr.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}},Ii={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},Li=[1e3,2e3,5e3,1e4],Ri=1e4;function zi(){let e=new Map;return{get length(){return e.size},clear(){e.clear()},getItem(t){return e.has(t)?e.get(t):null},key(t){return Array.from(e.keys())[t]??null},removeItem(t){e.delete(t)},setItem(t,n){e.set(t,String(n))}}}function Bi(){try{if(typeof globalThis<`u`&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return zi()}var Vi=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`,Hi=class{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){if(this.channels=[],this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint=``,this.headers={},this.params={},this.ref=0,this.serializer=new Ur,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),!t?.params?.apikey)throw Error(`API key is required to connect to Realtime`);this.apiKey=t.params.apikey;let n=this._initializeOptions(t);this.socketAdapter=new Fi(e,n),this.httpEndpoint=$r(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely(`connect`),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){let t=e.message;throw t.includes(`Node.js`)?Error(`${t}\n\nTo use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?`ok`:await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return t===`ok`&&e.teardown(),t}async removeAllChannels(){let e=this.channels.map(async e=>{let t=await e.unsubscribe();return e.teardown(),t}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,n){this.socketAdapter.log(e,t,n)}connectionState(){return this.socketAdapter.connectionState()||Hr.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){let n=`realtime:${e}`,r=this.getChannels().find(e=>e.topic===n);if(r)return r;{let n=new Pi(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log(`transport`,`no channels remaining, scheduling disconnect`),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log(`transport`,`disconnecting immediately - no channels`),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log(`transport`,`deferred disconnect fired - no channels, disconnecting`),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log(`transport`,`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log(`transport`,`pending disconnect cancelled - channel activity detected`),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,n=!1;if(e)t=e,n=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(e){this.log(`error`,`Error fetching access token from callback`,e),t=this.accessTokenValue}else t=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(e=>{let n={access_token:t,version:Fr};t&&e.updateJoinPayload(n),e.joinedOnce&&e.channelAdapter.isJoined()&&e.channelAdapter.push(Vr.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e=`general`){this._isManualToken()||this.setAuth().catch(t=>{this.log(`error`,`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(e=>{this.log(`error`,`error waiting for auth on connect`,e)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,n)=>{t==`sent`&&this._setAuthSafely(),e&&e(t,n)}}_startWorkerHeartbeat(){this.workerUrl?this.log(`worker`,`starting worker for from ${this.workerUrl}`):this.log(`worker`,`starting default worker`);let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log(`worker`,`worker error`,e.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=e=>{e.data.event===`keepAlive`&&this.sendHeartbeat()},this.workerRef.postMessage({event:`start`,interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&=(this.log(`worker`,`terminating worker`),this.workerRef.terminate(),void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([Vi],{type:`application/javascript`});t=URL.createObjectURL(e)}return t}_initializeOptions(e){this.worker=e?.worker??!1,this.accessToken=e?.accessToken??null;let t={};t.timeout=e?.timeout??zr,t.heartbeatIntervalMs=e?.heartbeatIntervalMs??Ii.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=e?.disconnectOnEmptyChannelsAfterMs??2*(e?.heartbeatIntervalMs??Ii.HEARTBEAT_INTERVAL),t.transport=e?.transport??Pr.getWebSocketConstructor(),t.params=e?.params,t.logger=e?.logger,t.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),t.sessionStorage=e?.sessionStorage??Bi(),t.reconnectAfterMs=e?.reconnectAfterMs??(e=>Li[e-1]||Ri);let n,r,i=e?.vsn??Rr;switch(i){case Ir:n=(e,t)=>t(JSON.stringify(e)),r=(e,t)=>t(JSON.parse(e));break;case Lr:n=this.serializer.encode.bind(this.serializer),r=this.serializer.decode.bind(this.serializer);break;default:throw Error(`Unsupported serializer version: ${t.vsn}`)}if(t.vsn=i,t.encode=e?.encode??n,t.decode=e?.decode??r,t.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,t.params=Object.assign(Object.assign({},t.params),{log_level:this.logLevel})),this.worker){if(typeof window<`u`&&!window.Worker)throw Error(`Web Worker is not supported`);this.workerUrl=e?.workerUrl,t.autoSendHeartbeat=!this.worker}return t}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}},Ui=class extends Error{constructor(e,t){super(e),this.name=`IcebergError`,this.status=t.status,this.icebergType=t.icebergType,this.icebergCode=t.icebergCode,this.details=t.details,this.isCommitStateUnknown=t.icebergType===`CommitStateUnknownException`||[500,502,504].includes(t.status)&&t.icebergType?.includes(`CommitState`)===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Wi(e,t,n){let r=new URL(t,e);if(n)for(let[e,t]of Object.entries(n))t!==void 0&&r.searchParams.set(e,t);return r.toString()}async function Gi(e){return!e||e.type===`none`?{}:e.type===`bearer`?{Authorization:`Bearer ${e.token}`}:e.type===`header`?{[e.name]:e.value}:e.type===`custom`?await e.getHeaders():{}}function Ki(e){let t=e.fetchImpl??globalThis.fetch;return{async request({method:n,path:r,query:i,body:a,headers:o}){let s=Wi(e.baseUrl,r,i),c=await Gi(e.auth),l=await t(s,{method:n,headers:{...a?{"Content-Type":`application/json`}:{},...c,...o},body:a?JSON.stringify(a):void 0}),u=await l.text(),d=(l.headers.get(`content-type`)||``).includes(`application/json`),f=d&&u?JSON.parse(u):u;if(!l.ok){let e=d?f:void 0,t=e?.error;throw new Ui(t?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:t?.type,icebergCode:t?.code,details:e})}return{status:l.status,headers:l.headers,data:f}}}}function qi(e){return e.join(``)}var Ji=class{constructor(e,t=``){this.client=e,this.prefix=t}async listNamespaces(e){let t=e?{parent:qi(e.namespace)}:void 0;return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces`,query:t})).data.namespaces.map(e=>({namespace:e}))}async createNamespace(e,t){let n={namespace:e.namespace,properties:t?.properties};return(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces`,body:n})).data}async dropNamespace(e){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${qi(e.namespace)}`})}async loadNamespaceMetadata(e){return{properties:(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${qi(e.namespace)}`})).data.properties}}async namespaceExists(e){try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${qi(e.namespace)}`}),!0}catch(e){if(e instanceof Ui&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(e,t){try{return await this.createNamespace(e,t)}catch(e){if(e instanceof Ui&&e.status===409)return;throw e}}};function Yi(e){return e.join(``)}var Xi=class{constructor(e,t=``,n){this.client=e,this.prefix=t,this.accessDelegation=n}async listTables(e){return(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Yi(e.namespace)}/tables`})).data.identifiers}async createTable(e,t){let n={};return this.accessDelegation&&(n[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Yi(e.namespace)}/tables`,body:t,headers:n})).data.metadata}async updateTable(e,t){let n=await this.client.request({method:`POST`,path:`${this.prefix}/namespaces/${Yi(e.namespace)}/tables/${e.name}`,body:t});return{"metadata-location":n.data[`metadata-location`],metadata:n.data.metadata}}async dropTable(e,t){await this.client.request({method:`DELETE`,path:`${this.prefix}/namespaces/${Yi(e.namespace)}/tables/${e.name}`,query:{purgeRequested:String(t?.purge??!1)}})}async loadTable(e){let t={};return this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation),(await this.client.request({method:`GET`,path:`${this.prefix}/namespaces/${Yi(e.namespace)}/tables/${e.name}`,headers:t})).data.metadata}async tableExists(e){let t={};this.accessDelegation&&(t[`X-Iceberg-Access-Delegation`]=this.accessDelegation);try{return await this.client.request({method:`HEAD`,path:`${this.prefix}/namespaces/${Yi(e.namespace)}/tables/${e.name}`,headers:t}),!0}catch(e){if(e instanceof Ui&&e.status===404)return!1;throw e}}async createTableIfNotExists(e,t){try{return await this.createTable(e,t)}catch(n){if(n instanceof Ui&&n.status===409)return await this.loadTable({namespace:e.namespace,name:t.name});throw n}}},Zi=class{constructor(e){let t=`v1`;e.catalogName&&(t+=`/${e.catalogName}`);let n=e.baseUrl.endsWith(`/`)?e.baseUrl:`${e.baseUrl}/`;this.client=Ki({baseUrl:n,auth:e.auth,fetchImpl:e.fetch}),this.accessDelegation=e.accessDelegation?.join(`,`),this.namespaceOps=new Ji(this.client,t),this.tableOps=new Xi(this.client,t,this.accessDelegation)}async listNamespaces(e){return this.namespaceOps.listNamespaces(e)}async createNamespace(e,t){return this.namespaceOps.createNamespace(e,t)}async dropNamespace(e){await this.namespaceOps.dropNamespace(e)}async loadNamespaceMetadata(e){return this.namespaceOps.loadNamespaceMetadata(e)}async listTables(e){return this.tableOps.listTables(e)}async createTable(e,t){return this.tableOps.createTable(e,t)}async updateTable(e,t){return this.tableOps.updateTable(e,t)}async dropTable(e,t){await this.tableOps.dropTable(e,t)}async loadTable(e){return this.tableOps.loadTable(e)}async namespaceExists(e){return this.namespaceOps.namespaceExists(e)}async tableExists(e){return this.tableOps.tableExists(e)}async createNamespaceIfNotExists(e,t){return this.namespaceOps.createNamespaceIfNotExists(e,t)}async createTableIfNotExists(e,t){return this.tableOps.createTableIfNotExists(e,t)}};function Qi(e){"@babel/helpers - typeof";return Qi=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Qi(e)}function $i(e,t){if(Qi(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Qi(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ea(e){var t=$i(e,`string`);return Qi(t)==`symbol`?t:t+``}function ta(e,t,n){return(t=ea(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function na(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?na(Object(n),!0).forEach(function(t){ta(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):na(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var ra=class extends Error{constructor(e,t=`storage`,n,r){super(e),this.__isStorageError=!0,this.namespace=t,this.name=t===`vectors`?`StorageVectorsError`:`StorageError`,this.status=n,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function ia(e){return typeof e==`object`&&!!e&&`__isStorageError`in e}var aa=class extends ra{constructor(e,t,n,r=`storage`){super(e,r,t,n),this.name=r===`vectors`?`StorageVectorsApiError`:`StorageApiError`,this.status=t,this.statusCode=n}toJSON(){return B({},super.toJSON())}},oa=class extends ra{constructor(e,t,n=`storage`){super(e,n),this.name=n===`vectors`?`StorageVectorsUnknownError`:`StorageUnknownError`,this.originalError=t}};function sa(e,t,n){let r=B({},e),i=t.toLowerCase();for(let e of Object.keys(r))e.toLowerCase()===i&&delete r[e];return r[i]=n,r}function ca(e){let t={};for(let[n,r]of Object.entries(e))t[n.toLowerCase()]=r;return t}var la=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),ua=e=>{if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},da=e=>{if(Array.isArray(e))return e.map(e=>da(e));if(typeof e==`function`||e!==Object(e))return e;let t={};return Object.entries(e).forEach(([e,n])=>{let r=e.replace(/([-_][a-z])/gi,e=>e.toUpperCase().replace(/[-_]/g,``));t[r]=da(n)}),t},fa=e=>!e||typeof e!=`string`||e.length===0||e.length>100||e.trim()!==e||e.includes(`/`)||e.includes(`\\`)?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(e),pa=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error;if(typeof t.error==`object`&&t.error!==null){let e=t.error;if(typeof e.message==`string`)return e.message}}return JSON.stringify(e)},ma=async(e,t,n,r)=>{if(typeof e==`object`&&e&&`json`in e&&typeof e.json==`function`){let n=e,i=parseInt(String(n.status),10);Number.isFinite(i)||(i=500),n.json().then(e=>{let n=e?.statusCode||e?.code||i+``;t(new aa(pa(e),i,n,r))}).catch(()=>{let e=i+``;t(new aa(n.statusText||`HTTP ${i} error`,i,e,r))})}else t(new oa(pa(e),e,r))},ha=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};if(e===`GET`||e===`HEAD`||!r)return B(B({},i),n);if(ua(r)){let e=t?.headers||{},n;for(let[t,r]of Object.entries(e))t.toLowerCase()===`content-type`&&(n=r);i.headers=sa(e,`Content-Type`,n??`application/json`),i.body=JSON.stringify(r)}else i.body=r;return t?.duplex&&(i.duplex=t.duplex),B(B({},i),n)};async function ga(e,t,n,r,i,a,o){return new Promise((s,c)=>{e(n,ha(t,r,i,a)).then(e=>{if(!e.ok)throw e;if(r?.noResolveJson)return e;if(o===`vectors`){let t=e.headers.get(`content-type`);if(e.headers.get(`content-length`)===`0`||e.status===204||!t||!t.includes(`application/json`))return{}}return e.json()}).then(e=>s(e)).catch(e=>ma(e,c,r,o))})}function _a(e=`storage`){return{get:async(t,n,r,i)=>ga(t,`GET`,n,r,i,void 0,e),post:async(t,n,r,i,a)=>ga(t,`POST`,n,i,a,r,e),put:async(t,n,r,i,a)=>ga(t,`PUT`,n,i,a,r,e),head:async(t,n,r,i)=>ga(t,`HEAD`,n,B(B({},r),{},{noResolveJson:!0}),i,void 0,e),remove:async(t,n,r,i,a)=>ga(t,`DELETE`,n,i,a,r,e)}}var{get:va,post:ya,put:ba,head:xa,remove:Sa}=_a(`storage`),V=_a(`vectors`),Ca=class{constructor(e,t={},n,r=`storage`){this.shouldThrowOnError=!1,this.url=e,this.headers=ca(t),this.fetch=la(n),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(e,t){return this.headers=sa(this.headers,e,t),this}async handleOperation(e){var t=this;try{return{data:await e(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(ia(e))return{data:null,error:e};throw e}}},wa=Symbol.toStringTag,Ta=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[wa]=`StreamDownloadBuilder`,this.promise=null}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:(await e.downloadFn()).body,error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(ia(t))return{data:null,error:t};throw t}}},Ea=Symbol.toStringTag,Da=class{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t,this[Ea]=`BlobDownloadBuilder`,this.promise=null}asStream(){return new Ta(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.getPromise().then(e,t)}catch(e){return this.getPromise().catch(e)}finally(e){return this.getPromise().finally(e)}getPromise(){return this.promise||=this.execute(),this.promise}async execute(){var e=this;try{return{data:await(await e.downloadFn()).blob(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(ia(t))return{data:null,error:t};throw t}}},Oa={limit:100,offset:0,sortBy:{column:`name`,order:`asc`}},ka={cacheControl:`3600`,contentType:`text/plain;charset=UTF-8`,upsert:!1},Aa=class extends Ca{constructor(e,t={},n,r){super(e,t,r,`storage`),this.bucketId=n}async uploadOrUpdate(e,t,n,r){var i=this;return i.handleOperation(async()=>{let a,o=B(B({},ka),r),s=B(B({},i.headers),e===`POST`&&{"x-upsert":String(o.upsert)}),c=o.metadata;if(typeof Blob<`u`&&n instanceof Blob?(a=new FormData,a.append(`cacheControl`,o.cacheControl),c&&a.append(`metadata`,i.encodeMetadata(c)),a.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(a=n,a.has(`cacheControl`)||a.append(`cacheControl`,o.cacheControl),c&&!a.has(`metadata`)&&a.append(`metadata`,i.encodeMetadata(c))):(a=n,s[`cache-control`]=`max-age=${o.cacheControl}`,s[`content-type`]=o.contentType,c&&(s[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&a instanceof ReadableStream||a&&typeof a==`object`&&`pipe`in a&&typeof a.pipe==`function`)&&!o.duplex&&(o.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))s=sa(s,e,t);let l=i._removeEmptyFolders(t),u=i._getFinalPath(l),d=await(e==`PUT`?ba:ya)(i.fetch,`${i.url}/object/${u}`,a,B({headers:s},o?.duplex?{duplex:o.duplex}:{}));return{path:l,id:d.Id,fullPath:d.Key}})}async upload(e,t,n){return this.uploadOrUpdate(`POST`,e,t,n)}async uploadToSignedUrl(e,t,n,r){var i=this;let a=i._removeEmptyFolders(e),o=i._getFinalPath(a),s=new URL(i.url+`/object/upload/sign/${o}`);return s.searchParams.set(`token`,t),i.handleOperation(async()=>{let e,t=B(B({},ka),r),o=B(B({},i.headers),{"x-upsert":String(t.upsert)}),c=t.metadata;if(typeof Blob<`u`&&n instanceof Blob?(e=new FormData,e.append(`cacheControl`,t.cacheControl),c&&e.append(`metadata`,i.encodeMetadata(c)),e.append(``,n)):typeof FormData<`u`&&n instanceof FormData?(e=n,e.has(`cacheControl`)||e.append(`cacheControl`,t.cacheControl),c&&!e.has(`metadata`)&&e.append(`metadata`,i.encodeMetadata(c))):(e=n,o[`cache-control`]=`max-age=${t.cacheControl}`,o[`content-type`]=t.contentType,c&&(o[`x-metadata`]=i.toBase64(i.encodeMetadata(c))),(typeof ReadableStream<`u`&&e instanceof ReadableStream||e&&typeof e==`object`&&`pipe`in e&&typeof e.pipe==`function`)&&!t.duplex&&(t.duplex=`half`)),r?.headers)for(let[e,t]of Object.entries(r.headers))o=sa(o,e,t);return{path:a,fullPath:(await ba(i.fetch,s.toString(),e,B({headers:o},t?.duplex?{duplex:t.duplex}:{}))).Key}})}async createSignedUploadUrl(e,t){var n=this;return n.handleOperation(async()=>{let r=n._getFinalPath(e),i=B({},n.headers);t?.upsert&&(i[`x-upsert`]=`true`);let a=await ya(n.fetch,`${n.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(n.url+a.url),s=o.searchParams.get(`token`);if(!s)throw new ra(`No token returned by API`);return{signedUrl:o.toString(),path:e,token:s}})}async update(e,t,n){return this.uploadOrUpdate(`PUT`,e,t,n)}async move(e,t,n){var r=this;return r.handleOperation(async()=>await ya(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers}))}async copy(e,t,n){var r=this;return r.handleOperation(async()=>({path:(await ya(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:e,destinationKey:t,destinationBucket:n?.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(e,t,n){var r=this;return r.handleOperation(async()=>{let i=r._getFinalPath(e),a=typeof n?.transform==`object`&&n.transform!==null&&Object.keys(n.transform).length>0,o=await ya(r.fetch,`${r.url}/object/sign/${i}`,B({expiresIn:t},a?{transform:n.transform}:{}),{headers:r.headers}),s=new URLSearchParams;n?.download&&s.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&s.set(`cacheNonce`,String(n.cacheNonce));let c=s.toString();return{signedUrl:encodeURI(`${r.url}${o.signedURL}${c?`&${c}`:``}`)}})}async createSignedUrls(e,t,n){var r=this;return r.handleOperation(async()=>{let i=await ya(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:t,paths:e},{headers:r.headers}),a=new URLSearchParams;n?.download&&a.set(`download`,n.download===!0?``:n.download),n?.cacheNonce!=null&&a.set(`cacheNonce`,String(n.cacheNonce));let o=a.toString();return i.map(e=>B(B({},e),{},{signedUrl:e.signedURL?encodeURI(`${r.url}${e.signedURL}${o?`&${o}`:``}`):null}))})}download(e,t,n){let r=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image/authenticated`:`object`,i=new URLSearchParams;t?.transform&&this.applyTransformOptsToQuery(i,t.transform),t?.cacheNonce!=null&&i.set(`cacheNonce`,String(t.cacheNonce));let a=i.toString(),o=this._getFinalPath(e);return new Da(()=>va(this.fetch,`${this.url}/${r}/${o}${a?`?${a}`:``}`,{headers:this.headers,noResolveJson:!0},n),this.shouldThrowOnError)}async info(e){var t=this;let n=t._getFinalPath(e);return t.handleOperation(async()=>da(await va(t.fetch,`${t.url}/object/info/${n}`,{headers:t.headers})))}async exists(e){var t=this;let n=t._getFinalPath(e);try{return await xa(t.fetch,`${t.url}/object/${n}`,{headers:t.headers}),{data:!0,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(ia(e)){let t=e instanceof aa?e.status:e instanceof oa?e.originalError?.status:void 0;if(t!==void 0&&[400,404].includes(t))return{data:!1,error:e}}throw e}}getPublicUrl(e,t){let n=this._getFinalPath(e),r=new URLSearchParams;t?.download&&r.set(`download`,t.download===!0?``:t.download),t?.transform&&this.applyTransformOptsToQuery(r,t.transform),t?.cacheNonce!=null&&r.set(`cacheNonce`,String(t.cacheNonce));let i=r.toString(),a=typeof t?.transform==`object`&&t.transform!==null&&Object.keys(t.transform).length>0?`render/image`:`object`;return{data:{publicUrl:encodeURI(`${this.url}/${a}/public/${n}`)+(i?`?${i}`:``)}}}async remove(e){var t=this;return t.handleOperation(async()=>await Sa(t.fetch,`${t.url}/object/${t.bucketId}`,{prefixes:e},{headers:t.headers}))}async list(e,t,n){var r=this;return r.handleOperation(async()=>{let i=B(B(B({},Oa),t),{},{prefix:e||``});return await ya(r.fetch,`${r.url}/object/list/${r.bucketId}`,i,{headers:r.headers},n)})}async listV2(e,t){var n=this;return n.handleOperation(async()=>{let r=B({},e);return await ya(n.fetch,`${n.url}/object/list-v2/${n.bucketId}`,r,{headers:n.headers},t)})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<`u`?Buffer.from(e).toString(`base64`):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,``)}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,``).replace(/\/+/g,`/`)}applyTransformOptsToQuery(e,t){return t.width&&e.set(`width`,t.width.toString()),t.height&&e.set(`height`,t.height.toString()),t.resize&&e.set(`resize`,t.resize),t.format&&e.set(`format`,t.format),t.quality&&e.set(`quality`,t.quality.toString()),e}},ja={"X-Client-Info":`storage-js/2.108.1`},Ma=class extends Ca{constructor(e,t={},n,r){let i=new URL(e);r?.useNewHostname&&/supabase\.(co|in|red)$/.test(i.hostname)&&!i.hostname.includes(`storage.supabase.`)&&(i.hostname=i.hostname.replace(`supabase.`,`storage.supabase.`));let a=i.href.replace(/\/$/,``),o=B(B({},ja),t);super(a,o,n,`storage`)}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=t.listBucketOptionsToQueryString(e);return await va(t.fetch,`${t.url}/bucket${n}`,{headers:t.headers})})}async getBucket(e){var t=this;return t.handleOperation(async()=>await va(t.fetch,`${t.url}/bucket/${e}`,{headers:t.headers}))}async createBucket(e,t={public:!1}){var n=this;return n.handleOperation(async()=>await ya(n.fetch,`${n.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async updateBucket(e,t){var n=this;return n.handleOperation(async()=>await ba(n.fetch,`${n.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:n.headers}))}async emptyBucket(e){var t=this;return t.handleOperation(async()=>await ya(t.fetch,`${t.url}/bucket/${e}/empty`,{},{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Sa(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}listBucketOptionsToQueryString(e){let t={};return e&&(`limit`in e&&(t.limit=String(e.limit)),`offset`in e&&(t.offset=String(e.offset)),e.search&&(t.search=e.search),e.sortColumn&&(t.sortColumn=e.sortColumn),e.sortOrder&&(t.sortOrder=e.sortOrder)),Object.keys(t).length>0?`?`+new URLSearchParams(t).toString():``}},Na=class extends Ca{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=B(B({},ja),t);super(r,i,n,`storage`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await ya(t.fetch,`${t.url}/bucket`,{name:e},{headers:t.headers}))}async listBuckets(e){var t=this;return t.handleOperation(async()=>{let n=new URLSearchParams;e?.limit!==void 0&&n.set(`limit`,e.limit.toString()),e?.offset!==void 0&&n.set(`offset`,e.offset.toString()),e?.sortColumn&&n.set(`sortColumn`,e.sortColumn),e?.sortOrder&&n.set(`sortOrder`,e.sortOrder),e?.search&&n.set(`search`,e.search);let r=n.toString(),i=r?`${t.url}/bucket?${r}`:`${t.url}/bucket`;return await va(t.fetch,i,{headers:t.headers})})}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await Sa(t.fetch,`${t.url}/bucket/${e}`,{},{headers:t.headers}))}from(e){var t=this;if(!fa(e))throw new ra(`Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.`);let n=new Zi({baseUrl:this.url,catalogName:e,auth:{type:`custom`,getHeaders:async()=>t.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(n,{get(e,t){let n=e[t];return typeof n==`function`?async(...t)=>{try{return{data:await n.apply(e,t),error:null}}catch(e){if(r)throw e;return{data:null,error:e}}}:n}})}},Pa=class extends Ca{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=B(B({},ja),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createIndex(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/CreateIndex`,e,{headers:t.headers})||{})}async getIndex(e,t){var n=this;return n.handleOperation(async()=>await V.post(n.fetch,`${n.url}/GetIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers}))}async listIndexes(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/ListIndexes`,e,{headers:t.headers}))}async deleteIndex(e,t){var n=this;return n.handleOperation(async()=>await V.post(n.fetch,`${n.url}/DeleteIndex`,{vectorBucketName:e,indexName:t},{headers:n.headers})||{})}},Fa=class extends Ca{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=B(B({},ja),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async putVectors(e){var t=this;if(e.vectors.length<1||e.vectors.length>500)throw Error(`Vector batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/PutVectors`,e,{headers:t.headers})||{})}async getVectors(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/GetVectors`,e,{headers:t.headers}))}async listVectors(e){var t=this;if(e.segmentCount!==void 0){if(e.segmentCount<1||e.segmentCount>16)throw Error(`segmentCount must be between 1 and 16`);if(e.segmentIndex!==void 0&&(e.segmentIndex<0||e.segmentIndex>=e.segmentCount))throw Error(`segmentIndex must be between 0 and ${e.segmentCount-1}`)}return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/ListVectors`,e,{headers:t.headers}))}async queryVectors(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/QueryVectors`,e,{headers:t.headers}))}async deleteVectors(e){var t=this;if(e.keys.length<1||e.keys.length>500)throw Error(`Keys batch size must be between 1 and 500 items`);return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/DeleteVectors`,e,{headers:t.headers})||{})}},Ia=class extends Ca{constructor(e,t={},n){let r=e.replace(/\/$/,``),i=B(B({},ja),{},{"Content-Type":`application/json`},t);super(r,i,n,`vectors`)}async createBucket(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/CreateVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}async getBucket(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/GetVectorBucket`,{vectorBucketName:e},{headers:t.headers}))}async listBuckets(e={}){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/ListVectorBuckets`,e,{headers:t.headers}))}async deleteBucket(e){var t=this;return t.handleOperation(async()=>await V.post(t.fetch,`${t.url}/DeleteVectorBucket`,{vectorBucketName:e},{headers:t.headers})||{})}},La=class extends Ia{constructor(e,t={}){super(e,t.headers||{},t.fetch)}from(e){return new Ra(this.url,this.headers,e,this.fetch)}async createBucket(e){var t=()=>super.createBucket,n=this;return t().call(n,e)}async getBucket(e){var t=()=>super.getBucket,n=this;return t().call(n,e)}async listBuckets(e={}){var t=()=>super.listBuckets,n=this;return t().call(n,e)}async deleteBucket(e){var t=()=>super.deleteBucket,n=this;return t().call(n,e)}},Ra=class extends Pa{constructor(e,t,n,r){super(e,t,r),this.vectorBucketName=n}async createIndex(e){var t=()=>super.createIndex,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName}))}async listIndexes(e={}){var t=()=>super.listIndexes,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName}))}async getIndex(e){var t=()=>super.getIndex,n=this;return t().call(n,n.vectorBucketName,e)}async deleteIndex(e){var t=()=>super.deleteIndex,n=this;return t().call(n,n.vectorBucketName,e)}index(e){return new za(this.url,this.headers,this.vectorBucketName,e,this.fetch)}},za=class extends Fa{constructor(e,t,n,r,i){super(e,t,i),this.vectorBucketName=n,this.indexName=r}async putVectors(e){var t=()=>super.putVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async getVectors(e){var t=()=>super.getVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async listVectors(e={}){var t=()=>super.listVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async queryVectors(e){var t=()=>super.queryVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}async deleteVectors(e){var t=()=>super.deleteVectors,n=this;return t().call(n,B(B({},e),{},{vectorBucketName:n.vectorBucketName,indexName:n.indexName}))}},Ba=class extends Ma{constructor(e,t={},n,r){super(e,t,n,r)}from(e){return new Aa(this.url,this.headers,e,this.fetch)}get vectors(){return new La(this.url+`/vector`,{headers:this.headers,fetch:this.fetch})}get analytics(){return new Na(this.url+`/iceberg`,this.headers,this.fetch)}},Va=`2.108.1`,Ha=30*1e3,Ua=3*Ha,Wa=`http://localhost:9999`,Ga=`supabase.auth.token`,Ka={"X-Client-Info":`gotrue-js/${Va}`},qa=`X-Supabase-Api-Version`,Ja={"2024-01-01":{timestamp:Date.parse(`2024-01-01T00:00:00.0Z`),name:`2024-01-01`}},Ya=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Xa=class extends Error{constructor(e,t,n){super(e),this.__isAuthError=!0,this.name=`AuthError`,this.status=t,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}};function H(e){return typeof e==`object`&&!!e&&`__isAuthError`in e}var Za=class extends Xa{constructor(e,t,n){super(e,t,n),this.name=`AuthApiError`,this.status=t,this.code=n}};function Qa(e){return H(e)&&e.name===`AuthApiError`}var $a=class extends Xa{constructor(e,t){super(e),this.name=`AuthUnknownError`,this.originalError=t}},eo=class extends Xa{constructor(e,t,n,r){super(e,n,r),this.name=t,this.status=n}},U=class extends eo{constructor(){super(`Auth session missing!`,`AuthSessionMissingError`,400,void 0)}};function to(e){return H(e)&&e.name===`AuthSessionMissingError`}var no=class extends eo{constructor(){super(`Auth session or user missing`,`AuthInvalidTokenResponseError`,500,void 0)}},ro=class extends eo{constructor(e){super(e,`AuthInvalidCredentialsError`,400,void 0)}},io=class extends eo{constructor(e,t=null){super(e,`AuthImplicitGrantRedirectError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}};function ao(e){return H(e)&&e.name===`AuthImplicitGrantRedirectError`}var oo=class extends eo{constructor(e,t=null){super(e,`AuthPKCEGrantCodeExchangeError`,500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}},so=class extends eo{constructor(){super(`PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.`,`AuthPKCECodeVerifierMissingError`,400,`pkce_code_verifier_not_found`)}},co=class extends eo{constructor(e,t){super(e,`AuthRetryableFetchError`,t,void 0)}};function lo(e){return H(e)&&e.name===`AuthRetryableFetchError`}var uo=class extends eo{constructor(e=`Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)`){super(e,`AuthRefreshDiscardedError`,409,void 0)}};function fo(e){return H(e)&&e.name===`AuthRefreshDiscardedError`}var po=class extends eo{constructor(e,t,n){super(e,`AuthWeakPasswordError`,t,`weak_password`),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}},mo=class extends eo{constructor(e){super(e,`AuthInvalidJwtError`,400,`invalid_jwt`)}},ho=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`.split(``),go=` 	
\r=`.split(``),_o=(()=>{let e=Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<go.length;t+=1)e[go[t].charCodeAt(0)]=-2;for(let t=0;t<ho.length;t+=1)e[ho[t].charCodeAt(0)]=t;return e})();function vo(e,t,n){if(e!==null)for(t.queue=t.queue<<8|e,t.queuedBits+=8;t.queuedBits>=6;)n(ho[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6;else if(t.queuedBits>0)for(t.queue<<=6-t.queuedBits,t.queuedBits=6;t.queuedBits>=6;)n(ho[t.queue>>t.queuedBits-6&63]),t.queuedBits-=6}function yo(e,t,n){let r=_o[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else if(r===-2)return;else throw Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}function bo(e){let t=[],n=e=>{t.push(String.fromCodePoint(e))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=e=>{Co(e,r,n)};for(let t=0;t<e.length;t+=1)yo(e.charCodeAt(t),i,a);return t.join(``)}function xo(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function So(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){let t=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|t)+65536,n+=1}xo(r,t)}}function Co(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let n=1;n<6;n+=1)if(!(e>>7-n&1)){t.utf8seq=n;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw Error(`Invalid UTF-8 sequence`);--t.utf8seq}else if(t.utf8seq>0){if(e<=127)throw Error(`Invalid UTF-8 sequence`);t.codepoint=t.codepoint<<6|e&63,--t.utf8seq,t.utf8seq===0&&n(t.codepoint)}}function wo(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};for(let t=0;t<e.length;t+=1)yo(e.charCodeAt(t),n,r);return new Uint8Array(t)}function To(e){let t=[];return So(e,e=>t.push(e)),new Uint8Array(t)}function Eo(e){let t=[],n={queue:0,queuedBits:0},r=e=>{t.push(e)};return e.forEach(e=>vo(e,n,r)),vo(null,n,r),t.join(``)}function Do(e){return Math.round(Date.now()/1e3)+e}function Oo(){return Symbol(`auth-callback`)}var W=()=>typeof window<`u`&&typeof document<`u`,ko={tested:!1,writable:!1},Ao=()=>{if(!W())return!1;try{if(typeof globalThis.localStorage!=`object`)return!1}catch{return!1}if(ko.tested)return ko.writable;let e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),ko.tested=!0,ko.writable=!0}catch{ko.tested=!0,ko.writable=!1}return ko.writable};function jo(e){let t={},n=new URL(e);if(n.hash&&n.hash[0]===`#`)try{new URLSearchParams(n.hash.substring(1)).forEach((e,n)=>{t[n]=e})}catch{}return n.searchParams.forEach((e,n)=>{t[n]=e}),t}var Mo=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),No=e=>typeof e==`object`&&!!e&&`status`in e&&`ok`in e&&`json`in e&&typeof e.json==`function`,Po=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},Fo=async(e,t)=>{let n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return null}},G=async(e,t)=>{await e.removeItem(t)},Io=class e{constructor(){this.promise=new e.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}};Io.promiseConstructor=Promise;function Lo(e){let t=e.split(`.`);if(t.length!==3)throw new mo(`Invalid JWT structure`);for(let e=0;e<t.length;e++)if(!Ya.test(t[e]))throw new mo(`JWT not in base64url format`);return{header:JSON.parse(bo(t[0])),payload:JSON.parse(bo(t[1])),signature:wo(t[2]),raw:{header:t[0],payload:t[1]}}}async function Ro(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function zo(e,t){return new Promise((n,r)=>{(async()=>{for(let i=0;i<1/0;i++)try{let r=await e(i);if(!t(i,null,r)){n(r);return}}catch(e){if(!t(i,e)){r(e);return}}})()})}function Bo(e){return(`0`+e.toString(16)).substr(-2)}function Vo(){let e=new Uint32Array(56);if(typeof crypto>`u`){let e=``;for(let t=0;t<56;t++)e+=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~`.charAt(Math.floor(Math.random()*66));return e}return crypto.getRandomValues(e),Array.from(e,Bo).join(``)}async function Ho(e){let t=new TextEncoder().encode(e),n=await crypto.subtle.digest(`SHA-256`,t),r=new Uint8Array(n);return Array.from(r).map(e=>String.fromCharCode(e)).join(``)}async function Uo(e){if(!(typeof crypto<`u`&&crypto.subtle!==void 0&&typeof TextEncoder<`u`))return console.warn(`WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.`),e;let t=await Ho(e);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/,``)}async function Wo(e,t,n=!1){let r=Vo(),i=r;n&&(i+=`/recovery`),await Po(e,`${t}-code-verifier`,i);let a=await Uo(r);return[a,r===a?`plain`:`s256`]}var Go=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Ko(e){let t=e.headers.get(qa);if(!t||!t.match(Go))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function qo(e){if(!e)throw Error(`Missing exp claim`);if(e<=Math.floor(Date.now()/1e3))throw Error(`JWT has expired`)}function Jo(e){switch(e){case`RS256`:return{name:`RSASSA-PKCS1-v1_5`,hash:{name:`SHA-256`}};case`ES256`:return{name:`ECDSA`,namedCurve:`P-256`,hash:{name:`SHA-256`}};default:throw Error(`Invalid alg claim`)}}var Yo=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Xo(e){if(!Yo.test(e))throw Error(`@supabase/auth-js: Expected parameter to be UUID but is not`)}function Zo(e){if(!e.passkey)throw Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Qo(){return new Proxy({},{get:(e,t)=>{if(t===`__isUserNotAvailableProxy`)return!0;if(typeof t==`symbol`){let e=t.toString();if(e===`Symbol(Symbol.toPrimitive)`||e===`Symbol(Symbol.toStringTag)`||e===`Symbol(util.inspect.custom)`)return}throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function $o(e,t){return new Proxy(e,{get:(e,n,r)=>{if(n===`__isInsecureUserWarningProxy`)return!0;if(typeof n==`symbol`){let t=n.toString();if(t===`Symbol(Symbol.toPrimitive)`||t===`Symbol(Symbol.toStringTag)`||t===`Symbol(util.inspect.custom)`||t===`Symbol(nodejs.util.inspect.custom)`)return Reflect.get(e,n,r)}return!t.value&&typeof n==`string`&&(console.warn(`Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.`),t.value=!0),Reflect.get(e,n,r)}})}function es(e){return JSON.parse(JSON.stringify(e))}var ts=e=>{if(typeof e==`object`&&e){let t=e;if(typeof t.msg==`string`)return t.msg;if(typeof t.message==`string`)return t.message;if(typeof t.error_description==`string`)return t.error_description;if(typeof t.error==`string`)return t.error}return JSON.stringify(e)},ns=[502,503,504,520,521,522,523,524,530];async function rs(e){if(!No(e))throw new co(ts(e),0);if(ns.includes(e.status))throw new co(ts(e),e.status);let t;try{t=await e.json()}catch(e){throw new $a(ts(e),e)}let n,r=Ko(e);if(r&&r.getTime()>=Ja[`2024-01-01`].timestamp&&typeof t==`object`&&t&&typeof t.code==`string`?n=t.code:typeof t==`object`&&t&&typeof t.error_code==`string`&&(n=t.error_code),!n){if(typeof t==`object`&&t&&typeof t.weak_password==`object`&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0))throw new po(ts(t),e.status,t.weak_password.reasons)}else if(n===`weak_password`)throw new po(ts(t),e.status,t.weak_password?.reasons||[]);else if(n===`session_not_found`)throw new U;throw new Za(ts(t),e.status||500,n)}var is=(e,t,n,r)=>{let i={method:e,headers:t?.headers||{}};return e===`GET`?i:(i.headers=Object.assign({"Content-Type":`application/json;charset=UTF-8`},t?.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function K(e,t,n,r){let i=Object.assign({},r?.headers);i[`X-Supabase-Api-Version`]||(i[qa]=Ja[`2024-01-01`].name),r?.jwt&&(i.Authorization=`Bearer ${r.jwt}`);let a=r?.query??{};r?.redirectTo&&(a.redirect_to=r.redirectTo);let o=await as(e,t,n+(Object.keys(a).length?`?`+new URLSearchParams(a).toString():``),{headers:i,noResolveJson:r?.noResolveJson},{},r?.body);return r?.xform?r?.xform(o):{data:Object.assign({},o),error:null}}async function as(e,t,n,r,i,a){let o=is(t,r,i,a),s;try{s=await e(n,Object.assign({},o))}catch(e){throw console.error(e),new co(ts(e),0)}if(s.ok||await rs(s),r?.noResolveJson)return s;try{return await s.json()}catch(e){await rs(e)}}function q(e){let t=null;ds(e)&&(t=Object.assign({},e),e.expires_at||(t.expires_at=Do(e.expires_in)));let n=e.user??(typeof e?.id==`string`?e:null);return{data:{session:t,user:n},error:null}}function os(e){let t=q(e);return!t.error&&e.weak_password&&typeof e.weak_password==`object`&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message==`string`&&e.weak_password.reasons.reduce((e,t)=>e&&typeof t==`string`,!0)&&(t.data.weak_password=e.weak_password),t}function ss(e){return{data:{user:e.user??e},error:null}}function cs(e){return{data:e,error:null}}function ls(e){let{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,o=or(e,[`action_link`,`email_otp`,`hashed_token`,`redirect_to`,`verification_type`]);return{data:{properties:{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},user:Object.assign({},o)},error:null}}function us(e){return e}function ds(e){return!!e.access_token&&!!e.refresh_token&&!!e.expires_in}var fs=[`global`,`local`,`others`],ps=class{constructor({url:e=``,headers:t={},fetch:n,experimental:r}){this.url=e,this.headers=t,this.fetch=Mo(n),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=fs[0]){if(fs.indexOf(t)<0)throw Error(`@supabase/auth-js: Parameter scope must be one of ${fs.join(`, `)}`);try{return await K(this.fetch,`POST`,`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async inviteUserByEmail(e,t={}){try{return await K(this.fetch,`POST`,`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:ss})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async generateLink(e){try{let{options:t}=e,n=or(e,[`options`]),r=Object.assign(Object.assign({},n),t);return`newEmail`in n&&(r.new_email=n?.newEmail,delete r.newEmail),await K(this.fetch,`POST`,`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:ls,redirectTo:t?.redirectTo})}catch(e){if(H(e))return{data:{properties:null,user:null},error:e};throw e}}async createUser(e){try{return await K(this.fetch,`POST`,`${this.url}/admin/users`,{body:e,headers:this.headers,xform:ss})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async listUsers(e){try{let t={nextPage:null,lastPage:0,total:0},n=await K(this.fetch,`GET`,`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:us});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(H(e))return{data:{users:[]},error:e};throw e}}async getUserById(e){Xo(e);try{return await K(this.fetch,`GET`,`${this.url}/admin/users/${e}`,{headers:this.headers,xform:ss})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async updateUserById(e,t){Xo(e);try{return await K(this.fetch,`PUT`,`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:ss})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async deleteUser(e,t=!1){Xo(e);try{return await K(this.fetch,`DELETE`,`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:ss})}catch(e){if(H(e))return{data:{user:null},error:e};throw e}}async _listFactors(e){Xo(e.userId);try{let{data:t,error:n}=await K(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:e=>({data:{factors:e},error:null})});return{data:t,error:n}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteFactor(e){Xo(e.userId),Xo(e.id);try{return{data:await K(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _listOAuthClients(e){try{let t={nextPage:null,lastPage:0,total:0},n=await K(this.fetch,`GET`,`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(e?.page)?.toString()??``,per_page:(e?.perPage)?.toString()??``},xform:us});if(n.error)throw n.error;let r=await n.json(),i=n.headers.get(`x-total-count`)??0,a=n.headers.get(`link`)?.split(`,`)??[];return a.length>0&&(a.forEach(e=>{let n=parseInt(e.split(`;`)[0].split(`=`)[1].substring(0,1)),r=JSON.parse(e.split(`;`)[1].split(`=`)[1]);t[`${r}Page`]=n}),t.total=parseInt(i)),{data:Object.assign(Object.assign({},r),t),error:null}}catch(e){if(H(e))return{data:{clients:[]},error:e};throw e}}async _createOAuthClient(e){try{return await K(this.fetch,`POST`,`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _getOAuthClient(e){try{return await K(this.fetch,`GET`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _updateOAuthClient(e,t){try{return await K(this.fetch,`PUT`,`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteOAuthClient(e){try{return await K(this.fetch,`DELETE`,`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _regenerateOAuthClientSecret(e){try{return await K(this.fetch,`POST`,`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _listCustomProviders(e){try{let t={};return e?.type&&(t.type=e.type),await K(this.fetch,`GET`,`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:e=>({data:{providers:e?.providers??[]},error:null})})}catch(e){if(H(e))return{data:{providers:[]},error:e};throw e}}async _createCustomProvider(e){try{return await K(this.fetch,`POST`,`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _getCustomProvider(e){try{return await K(this.fetch,`GET`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _updateCustomProvider(e,t){try{return await K(this.fetch,`PUT`,`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _deleteCustomProvider(e){try{return await K(this.fetch,`DELETE`,`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}async _adminListPasskeys(e){Zo(this.experimental),Xo(e.userId);try{return await K(this.fetch,`GET`,`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:e=>({data:e,error:null})})}catch(e){if(H(e))return{data:null,error:e};throw e}}async _adminDeletePasskey(e){Zo(this.experimental),Xo(e.userId),Xo(e.passkeyId);try{return await K(this.fetch,`DELETE`,`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(e){if(H(e))return{data:null,error:e};throw e}}};function ms(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}globalThis&&Ao()&&globalThis.localStorage&&globalThis.localStorage.getItem(`supabase.gotrue-js.locks.debug`);var hs=class extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}};function gs(){if(typeof globalThis!=`object`)try{Object.defineProperty(Object.prototype,`__magic__`,{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<`u`&&(self.globalThis=self)}}function _s(e){if(!/^0x[a-fA-F0-9]{40}$/.test(e))throw Error(`@supabase/auth-js: Address "${e}" is invalid.`);return e.toLowerCase()}function vs(e){return parseInt(e,16)}function ys(e){let t=new TextEncoder().encode(e);return`0x`+Array.from(t,e=>e.toString(16).padStart(2,`0`)).join(``)}function bs(e){let{chainId:t,domain:n,expirationTime:r,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:s,resources:c,scheme:l,uri:u,version:d}=e;if(!Number.isInteger(t))throw Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!n)throw Error(`@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.`);if(a&&a.length<8)throw Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!u)throw Error(`@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.`);if(d!==`1`)throw Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(e.statement?.includes(`
`))throw Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${e.statement}`);let f=_s(e.address),p=`${l?`${l}://${n}`:n} wants you to sign in with your Ethereum account:\n${f}\n\n${e.statement?`${e.statement}\n`:``}`,m=`URI: ${u}\nVersion: ${d}\nChain ID: ${t}${a?`\nNonce: ${a}`:``}\nIssued At: ${i.toISOString()}`;if(r&&(m+=`\nExpiration Time: ${r.toISOString()}`),o&&(m+=`\nNot Before: ${o.toISOString()}`),s&&(m+=`\nRequest ID: ${s}`),c){let e=`
Resources:`;for(let t of c){if(!t||typeof t!=`string`)throw Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${t}`);e+=`\n- ${t}`}m+=e}return`${p}\n${m}`}var J=class extends Error{constructor({message:e,code:t,cause:n,name:r}){super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=r??(n instanceof Error?n.name:void 0)??`Unknown Error`,this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}},xs=class extends J{constructor(e,t){super({code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:t,message:e}),this.name=`WebAuthnUnknownError`,this.originalError=t}};function Ss({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new J({message:`Registration ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`ConstraintError`){if(n.authenticatorSelection?.requireResidentKey===!0)return new J({message:`Discoverable credentials were required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT`,cause:e});if(t.mediation===`conditional`&&n.authenticatorSelection?.userVerification===`required`)return new J({message:`User verification was required during automatic registration but it could not be performed`,code:`ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE`,cause:e});if(n.authenticatorSelection?.userVerification===`required`)return new J({message:`User verification was required but no available authenticator supported it`,code:`ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT`,cause:e})}else if(e.name===`InvalidStateError`)return new J({message:`The authenticator was previously registered`,code:`ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED`,cause:e});else if(e.name===`NotAllowedError`)return new J({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`NotSupportedError`)return n.pubKeyCredParams.filter(e=>e.type===`public-key`).length===0?new J({message:`No entry in pubKeyCredParams was of type "public-key"`,code:`ERROR_MALFORMED_PUBKEYCREDPARAMS`,cause:e}):new J({message:`No available authenticator supported any of the specified pubKeyCredParams algorithms`,code:`ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!ks(t))return new J({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rp.id!==t)return new J({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`TypeError`){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new J({message:`User ID was not between 1 and 64 characters`,code:`ERROR_INVALID_USER_ID_LENGTH`,cause:e})}else if(e.name===`UnknownError`)return new J({message:`The authenticator was unable to process the specified options, or could not create a new credential`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new J({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}function Cs({error:e,options:t}){let{publicKey:n}=t;if(!n)throw Error(`options was missing required publicKey property`);if(e.name===`AbortError`){if(t.signal instanceof AbortSignal)return new J({message:`Authentication ceremony was sent an abort signal`,code:`ERROR_CEREMONY_ABORTED`,cause:e})}else if(e.name===`NotAllowedError`)return new J({message:e.message,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e});else if(e.name===`SecurityError`){let t=window.location.hostname;if(!ks(t))return new J({message:`${window.location.hostname} is an invalid domain`,code:`ERROR_INVALID_DOMAIN`,cause:e});if(n.rpId!==t)return new J({message:`The RP ID "${n.rpId}" is invalid for this domain`,code:`ERROR_INVALID_RP_ID`,cause:e})}else if(e.name===`UnknownError`)return new J({message:`The authenticator was unable to process the specified options, or could not create a new assertion signature`,code:`ERROR_AUTHENTICATOR_GENERAL_ERROR`,cause:e});return new J({message:`a Non-Webauthn related error has occurred`,code:`ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY`,cause:e})}var ws=new class{createNewAbortSignal(){if(this.controller){let e=Error(`Cancelling existing WebAuthn API call for new one`);e.name=`AbortError`,this.controller.abort(e)}let e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){let e=Error(`Manually cancelling existing WebAuthn API call`);e.name=`AbortError`,this.controller.abort(e),this.controller=void 0}}};function Ts(e){if(!e)throw Error(`Credential creation options are required`);if(typeof PublicKeyCredential<`u`&&`parseCreationOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON==`function`)return PublicKeyCredential.parseCreationOptionsFromJSON(e);let{challenge:t,user:n,excludeCredentials:r}=e,i=or(e,[`challenge`,`user`,`excludeCredentials`]),a=wo(t).buffer,o=Object.assign(Object.assign({},n),{id:wo(n.id).buffer}),s=Object.assign(Object.assign({},i),{challenge:a,user:o});if(r&&r.length>0){s.excludeCredentials=Array(r.length);for(let e=0;e<r.length;e++){let t=r[e];s.excludeCredentials[e]=Object.assign(Object.assign({},t),{id:wo(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return s}function Es(e){if(!e)throw Error(`Credential request options are required`);if(typeof PublicKeyCredential<`u`&&`parseRequestOptionsFromJSON`in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON==`function`)return PublicKeyCredential.parseRequestOptionsFromJSON(e);let{challenge:t,allowCredentials:n}=e,r=or(e,[`challenge`,`allowCredentials`]),i=wo(t).buffer,a=Object.assign(Object.assign({},r),{challenge:i});if(n&&n.length>0){a.allowCredentials=Array(n.length);for(let e=0;e<n.length;e++){let t=n[e];a.allowCredentials[e]=Object.assign(Object.assign({},t),{id:wo(t.id).buffer,type:t.type||`public-key`,transports:t.transports})}}return a}function Ds(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e;return{id:e.id,rawId:e.id,response:{attestationObject:Eo(new Uint8Array(e.response.attestationObject)),clientDataJSON:Eo(new Uint8Array(e.response.clientDataJSON))},type:`public-key`,clientExtensionResults:e.getClientExtensionResults(),authenticatorAttachment:t.authenticatorAttachment??void 0}}function Os(e){if(`toJSON`in e&&typeof e.toJSON==`function`)return e.toJSON();let t=e,n=e.getClientExtensionResults(),r=e.response;return{id:e.id,rawId:e.id,response:{authenticatorData:Eo(new Uint8Array(r.authenticatorData)),clientDataJSON:Eo(new Uint8Array(r.clientDataJSON)),signature:Eo(new Uint8Array(r.signature)),userHandle:r.userHandle?Eo(new Uint8Array(r.userHandle)):void 0},type:`public-key`,clientExtensionResults:n,authenticatorAttachment:t.authenticatorAttachment??void 0}}function ks(e){return e===`localhost`||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(e)}function As(){return!!(W()&&`PublicKeyCredential`in window&&window.PublicKeyCredential&&`credentials`in navigator&&typeof(navigator==null?void 0:navigator.credentials)?.create==`function`&&typeof(navigator==null?void 0:navigator.credentials)?.get==`function`)}async function js(e){try{let t=await navigator.credentials.create(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new xs(`Browser returned unexpected credential type`,t)}:{data:null,error:new xs(`Empty credential response`,t)}}catch(t){return{data:null,error:Ss({error:t,options:e})}}}async function Ms(e){try{let t=await navigator.credentials.get(e);return t?t instanceof PublicKeyCredential?{data:t,error:null}:{data:null,error:new xs(`Browser returned unexpected credential type`,t)}:{data:null,error:new xs(`Empty credential response`,t)}}catch(t){return{data:null,error:Cs({error:t,options:e})}}}var Ns={hints:[`security-key`],authenticatorSelection:{authenticatorAttachment:`cross-platform`,requireResidentKey:!1,userVerification:`preferred`,residentKey:`discouraged`},attestation:`direct`},Ps={userVerification:`preferred`,hints:[`security-key`],attestation:`direct`};function Fs(...e){let t=e=>typeof e==`object`&&!!e&&!Array.isArray(e),n=e=>e instanceof ArrayBuffer||ArrayBuffer.isView(e),r={};for(let i of e)if(i)for(let e in i){let a=i[e];if(a!==void 0)if(Array.isArray(a))r[e]=a;else if(n(a))r[e]=a;else if(t(a)){let n=r[e];t(n)?r[e]=Fs(n,a):r[e]=Fs(a)}else r[e]=a}return r}function Is(e,t){return Fs(Ns,e,t||{})}function Ls(e,t){return Fs(Ps,e,t||{})}var Rs=class{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:`webauthn`}))}async _challenge({factorId:e,webauthn:t,friendlyName:n,signal:r},i){try{let{data:a,error:o}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!a)return{data:null,error:o};let s=r??ws.createNewAbortSignal();if(a.webauthn.type===`create`){let{user:e}=a.webauthn.credential_options.publicKey;if(!e.name){let t=n;if(t)e.name=`${e.id}:${t}`;else{let t=(await this.client.getUser()).data.user,n=t?.user_metadata?.name||t?.email||t?.id||`User`;e.name=`${e.id}:${n}`}}e.displayName||=e.name}switch(a.webauthn.type){case`create`:{let{data:t,error:n}=await js({publicKey:Is(a.webauthn.credential_options.publicKey,i?.create),signal:s});return t?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:t}},error:null}:{data:null,error:n}}case`request`:{let t=Ls(a.webauthn.credential_options.publicKey,i?.request),{data:n,error:r}=await Ms(Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:t,signal:s}));return n?{data:{factorId:e,challengeId:a.id,webauthn:{type:a.webauthn.type,credential_response:n}},error:null}:{data:null,error:r}}}}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new $a(`Unexpected error in challenge`,e)}}}async _verify({challengeId:e,factorId:t,webauthn:n}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Xa(`rpId is required for WebAuthn authentication`)};try{if(!As())return{data:null,error:new $a(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:n},signal:r},{request:i});if(!a)return{data:null,error:o};let{webauthn:s}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:s.type,rpId:t,rpOrigins:n,credential_response:s.credential_response}})}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new $a(`Unexpected error in authenticate`,e)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<`u`?window.location.hostname:void 0,rpOrigins:n=typeof window<`u`?[window.location.origin]:void 0,signal:r}={}},i){if(!t)return{data:null,error:new Xa(`rpId is required for WebAuthn registration`)};try{if(!As())return{data:null,error:new $a(`Browser does not support WebAuthn`,null)};let{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(t=>t.data?.all.find(t=>t.factor_type===`webauthn`&&t.friendly_name===e&&t.status!==`unverified`)).then(e=>e?this.client.mfa.unenroll({factorId:e?.id}):void 0),{data:null,error:o};let{data:s,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:n},signal:r},{create:i});return s?this._verify({factorId:a.id,challengeId:s.challengeId,webauthn:{rpId:t,rpOrigins:n,type:s.webauthn.type,credential_response:s.webauthn.credential_response}}):{data:null,error:c}}catch(e){return H(e)?{data:null,error:e}:{data:null,error:new $a(`Unexpected error in register`,e)}}}};gs();var zs={url:Wa,storageKey:Ga,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Ka,flowType:`implicit`,debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Bs={},Vs=class e{get jwks(){return Bs[this.storageKey]?.jwks??{keys:[]}}set jwks(e){Bs[this.storageKey]=Object.assign(Object.assign({},Bs[this.storageKey]),{jwks:e})}get jwks_cached_at(){return Bs[this.storageKey]?.cachedAt??-(2**53-1)}set jwks_cached_at(e){Bs[this.storageKey]=Object.assign(Object.assign({},Bs[this.storageKey]),{cachedAt:e})}constructor(t){var n;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;let r=Object.assign(Object.assign({},zs),t);if(this.storageKey=r.storageKey,this.instanceID=e.nextInstanceID[this.storageKey]??0,e.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!r.debug,typeof r.debug==`function`&&(this.logger=r.debug),this.instanceID>0&&W()){let e=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(e),this.logDebugMessages&&console.trace(e)}if(this.persistSession=r.persistSession,this.autoRefreshToken=r.autoRefreshToken,this.experimental=r.experimental??{},this.admin=new ps({url:r.url,headers:r.headers,fetch:r.fetch,experimental:this.experimental}),this.url=r.url,this.headers=r.headers,this.fetch=Mo(r.fetch),this.detectSessionInUrl=r.detectSessionInUrl,this.flowType=r.flowType,this.hasCustomAuthorizationHeader=r.hasCustomAuthorizationHeader,this.throwOnError=r.throwOnError,this.lockAcquireTimeout=r.lockAcquireTimeout,r.lock!=null&&(this.lock=r.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=-(2**53-1)),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Rs(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(r.storage?this.storage=r.storage:Ao()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ms(this.memoryStorage)),r.userStorage&&(this.userStorage=r.userStorage)):(this.memoryStorage={},this.storage=ms(this.memoryStorage)),W()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(e){console.error(`Failed to create a new BroadcastChannel, multi-tab state changes will not be available`,e)}(n=this.broadcastChannel)==null||n.addEventListener(`message`,async e=>{this._debug(`received broadcast notification from other tab or client`,e);try{await this._notifyAllSubscribers(e.data.event,e.data.session,!1)}catch(e){this._debug(`#broadcastChannel`,`error`,e)}})}r.skipAutoInitialize||this.initialize().catch(e=>{this._debug(`#initialize()`,`error`,e)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Va}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise||=(async()=>this.lock==null?await this._initialize():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()))(),await this.initializePromise}async _initialize(){try{let e={},t=`none`;if(W()&&(e=jo(window.location.href),this._isImplicitGrantCallback(e)?t=`implicit`:await this._isPKCECallback(e)&&(t=`pkce`)),W()&&this.detectSessionInUrl&&t!==`none`){let{data:n,error:r}=await this._getSessionFromURL(e,t);if(r){if(this._debug(`#_initialize()`,`error detecting session from URL`,r),ao(r)){let e=r.details?.code;if(e===`identity_already_exists`||e===`identity_not_found`||e===`single_identity_not_deletable`)return{error:r}}return{error:r}}let{session:i,redirectType:a}=n;return this._debug(`#_initialize()`,`detected session in URL`,i,`redirect type`,a),await this._saveSession(i),setTimeout(async()=>{a===`recovery`?await this._notifyAllSubscribers(`PASSWORD_RECOVERY`,i):await this._notifyAllSubscribers(`SIGNED_IN`,i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(e){return H(e)?this._returnResult({error:e}):this._returnResult({error:new $a(`Unexpected error during initialization`,e)})}finally{await this._handleVisibilityChange(),this._debug(`#_initialize()`,`end`)}}async signInAnonymously(e){try{let{data:t,error:n}=await K(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{data:e?.options?.data??{},gotrue_meta_security:{captcha_token:e?.options?.captchaToken}},xform:q});if(n||!t)return this._returnResult({data:{user:null,session:null},error:n});let r=t.session,i=t.user;return t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,r)),this._returnResult({data:{user:i,session:r},error:null})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signUp(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await Wo(this.storage,this.storageKey)),t=await K(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,redirectTo:i?.emailRedirectTo,body:{email:n,password:r,data:i?.data??{},gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},xform:q})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await K(this.fetch,`POST`,`${this.url}/signup`,{headers:this.headers,body:{phone:n,password:r,data:i?.data??{},channel:i?.channel??`sms`,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:q})}else throw new ro(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r||!n)return await G(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:r});let i=n.session,a=n.user;return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,i)),this._returnResult({data:{user:a,session:i},error:null})}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithPassword(e){try{let t;if(`email`in e){let{email:n,password:r,options:i}=e;t=await K(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:os})}else if(`phone`in e){let{phone:n,password:r,options:i}=e;t=await K(this.fetch,`POST`,`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:r,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:os})}else throw new ro(`You must provide either an email or phone number and a password`);let{data:n,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!n||!n.session||!n.user){let e=new no;return this._returnResult({data:{user:null,session:null},error:e})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers(`SIGNED_IN`,n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:r})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOAuth(e){return await this._handleProviderSignIn(e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:e.options?.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock==null?this._exchangeCodeForSession(e):this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){let{chain:t}=e;switch(t){case`ethereum`:return await this.signInWithEthereum(e);case`solana`:return await this.signInWithSolana(e);default:throw Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!W()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`ethereum`in e&&typeof e.ethereum==`object`&&`request`in e.ethereum&&typeof e.ethereum.request==`function`)s=e.ethereum;else throw Error(`@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href),l=await s.request({method:`eth_requestAccounts`}).then(e=>e).catch(()=>{throw Error(`@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid`)});if(!l||l.length===0)throw Error(`@supabase/auth-js: No accounts available. Please ensure the wallet is connected.`);let u=_s(l[0]),d=o?.signInWithEthereum?.chainId;d||=vs(await s.request({method:`eth_chainId`})),t=bs({domain:c.host,address:u,statement:a,uri:c.href,version:`1`,chainId:d,nonce:o?.signInWithEthereum?.nonce,issuedAt:o?.signInWithEthereum?.issuedAt??new Date,expirationTime:o?.signInWithEthereum?.expirationTime,notBefore:o?.signInWithEthereum?.notBefore,requestId:o?.signInWithEthereum?.requestId,resources:o?.signInWithEthereum?.resources}),n=await s.request({method:`personal_sign`,params:[ys(t),u]})}try{let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`ethereum`,message:t,signature:n},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:q});if(i)throw i;if(!r||!r.session||!r.user){let e=new no;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSolana(e){let t,n;if(`message`in e)t=e.message,n=e.signature;else{let{chain:r,wallet:i,statement:a,options:o}=e,s;if(!W()){if(typeof i!=`object`||!o?.url)throw Error(`@supabase/auth-js: Both wallet and url must be specified in non-browser environments.`);s=i}else if(typeof i==`object`)s=i;else{let e=window;if(`solana`in e&&typeof e.solana==`object`&&(`signIn`in e.solana&&typeof e.solana.signIn==`function`||`signMessage`in e.solana&&typeof e.solana.signMessage==`function`))s=e.solana;else throw Error(`@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.`)}let c=new URL(o?.url??window.location.href);if(`signIn`in s&&s.signIn){let e=await s.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},o?.signInWithSolana),{version:`1`,domain:c.host,uri:c.href}),a?{statement:a}:null)),r;if(Array.isArray(e)&&e[0]&&typeof e[0]==`object`)r=e[0];else if(e&&typeof e==`object`&&`signedMessage`in e&&`signature`in e)r=e;else throw Error(`@supabase/auth-js: Wallet method signIn() returned unrecognized value`);if(`signedMessage`in r&&`signature`in r&&(typeof r.signedMessage==`string`||r.signedMessage instanceof Uint8Array)&&r.signature instanceof Uint8Array)t=typeof r.signedMessage==`string`?r.signedMessage:new TextDecoder().decode(r.signedMessage),n=r.signature;else throw Error(`@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields`)}else{if(!(`signMessage`in s)||typeof s.signMessage!=`function`||!(`publicKey`in s)||typeof s!=`object`||!s.publicKey||!(`toBase58`in s.publicKey)||typeof s.publicKey.toBase58!=`function`)throw Error(`@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API`);t=[`${c.host} wants you to sign in with your Solana account:`,s.publicKey.toBase58(),...a?[``,a,``]:[``],`Version: 1`,`URI: ${c.href}`,`Issued At: ${o?.signInWithSolana?.issuedAt??new Date().toISOString()}`,...o?.signInWithSolana?.notBefore?[`Not Before: ${o.signInWithSolana.notBefore}`]:[],...o?.signInWithSolana?.expirationTime?[`Expiration Time: ${o.signInWithSolana.expirationTime}`]:[],...o?.signInWithSolana?.chainId?[`Chain ID: ${o.signInWithSolana.chainId}`]:[],...o?.signInWithSolana?.nonce?[`Nonce: ${o.signInWithSolana.nonce}`]:[],...o?.signInWithSolana?.requestId?[`Request ID: ${o.signInWithSolana.requestId}`]:[],...o?.signInWithSolana?.resources?.length?[`Resources`,...o.signInWithSolana.resources.map(e=>`- ${e}`)]:[]].join(`
`);let e=await s.signMessage(new TextEncoder().encode(t),`utf8`);if(!e||!(e instanceof Uint8Array))throw Error(`@supabase/auth-js: Wallet signMessage() API returned an recognized value`);n=e}}try{let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:`solana`,message:t,signature:Eo(n)},e.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options?.captchaToken}}:null),xform:q});if(i)throw i;if(!r||!r.session||!r.user){let e=new no;return this._returnResult({data:{user:null,session:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign({},r),error:i})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _exchangeCodeForSession(e){let[t,n]=(await Fo(this.storage,`${this.storageKey}-code-verifier`)??``).split(`/`);try{if(!t&&this.flowType===`pkce`)throw new so;let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:t},xform:q});if(await G(this.storage,`${this.storageKey}-code-verifier`),i)throw i;if(!r||!r.session||!r.user){let e=new no;return this._returnResult({data:{user:null,session:null,redirectType:null},error:e})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers(n===`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,r.session)),this._returnResult({data:Object.assign(Object.assign({},r),{redirectType:n??null}),error:i})}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null,redirectType:null},error:e});throw e}}async signInWithIdToken(e){try{let{options:t,provider:n,token:r,access_token:i,nonce:a}=e,{data:o,error:s}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:r,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:q});if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!o||!o.session||!o.user){let e=new no;return this._returnResult({data:{user:null,session:null},error:e})}return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers(`SIGNED_IN`,o.session)),this._returnResult({data:o,error:s})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithOtp(e){try{if(`email`in e){let{email:t,options:n}=e,r=null,i=null;this.flowType===`pkce`&&([r,i]=await Wo(this.storage,this.storageKey));let{error:a}=await K(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{email:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},code_challenge:r,code_challenge_method:i},redirectTo:n?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:a})}if(`phone`in e){let{phone:t,options:n}=e,{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/otp`,{headers:this.headers,body:{phone:t,data:n?.data??{},create_user:n?.shouldCreateUser??!0,gotrue_meta_security:{captcha_token:n?.captchaToken},channel:n?.channel??`sms`}});return this._returnResult({data:{user:null,session:null,messageId:r?.message_id},error:i})}throw new ro(`You must provide either an email or phone number.`)}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async verifyOtp(e){try{let t,n;`options`in e&&(t=e.options?.redirectTo,n=e.options?.captchaToken);let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:t,xform:q});if(i)throw i;if(!r)throw Error(`An error occurred on token verification.`);let a=r.session,o=r.user;return a?.access_token&&(await this._saveSession(a),await this._notifyAllSubscribers(e.type==`recovery`?`PASSWORD_RECOVERY`:`SIGNED_IN`,a)),this._returnResult({data:{user:o,session:a},error:null})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async signInWithSSO(e){try{let t=null,n=null;this.flowType===`pkce`&&([t,n]=await Wo(this.storage,this.storageKey));let r=await K(this.fetch,`POST`,`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},`providerId`in e?{provider_id:e.providerId}:null),`domain`in e?{domain:e.domain}:null),{redirect_to:e.options?.redirectTo??void 0}),e?.options?.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:t,code_challenge_method:n}),headers:this.headers,xform:cs});return r.data?.url&&W()&&!e.options?.skipBrowserRedirect&&window.location.assign(r.data.url),this._returnResult(r)}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:null,error:e});throw e}}async reauthenticate(){return await this.initializePromise,this.lock==null?await this._reauthenticate():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)throw n;if(!t)throw new U;let{error:r}=await K(this.fetch,`GET`,`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{let t=`${this.url}/resend`;if(`email`in e){let{email:n,type:r,options:i}=e,a=null,o=null;this.flowType===`pkce`&&([a,o]=await Wo(this.storage,this.storageKey));let{error:s}=await K(this.fetch,`POST`,t,{headers:this.headers,body:{email:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:i?.emailRedirectTo});return s&&await G(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:s})}else if(`phone`in e){let{phone:n,type:r,options:i}=e,{data:a,error:o}=await K(this.fetch,`POST`,t,{headers:this.headers,body:{phone:n,type:r,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new ro(`You must provide either an email or phone number and a type`)}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async getSession(){return await this.initializePromise,this.lock==null?await this._useSession(async e=>e):await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e))}async _acquireLock(e,t){this._debug(`#_acquireLock`,`begin`,e);try{if(this.lockAcquired){let e=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),n=(async()=>(await e,await t()))();return this.pendingInLock.push((async()=>{try{await n}catch{}})()),n}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug(`#_acquireLock`,`lock acquired for storage key`,this.storageKey);try{this.lockAcquired=!0;let e=t();for(this.pendingInLock.push((async()=>{try{await e}catch{}})()),await e;this.pendingInLock.length;){let e=[...this.pendingInLock];await Promise.all(e),this.pendingInLock.splice(0,e.length)}return await e}finally{this._debug(`#_acquireLock`,`lock released for storage key`,this.storageKey),this.lockAcquired=!1}})}finally{this._debug(`#_acquireLock`,`end`)}}async _useSession(e){this._debug(`#_useSession`,`begin`);try{return await e(await this.__loadSession())}finally{this._debug(`#_useSession`,`end`)}}async __loadSession(){this._debug(`#__loadSession()`,`begin`),this.lock!=null&&!this.lockAcquired&&this._debug(`#__loadSession()`,`used outside of an acquired lock!`,Error().stack);try{let e=null,t=await Fo(this.storage,this.storageKey);if(this._debug(`#getSession()`,`session from storage`,t),t!==null&&(this._isValidSession(t)?e=t:(this._debug(`#getSession()`,`session from storage is not valid`),await this._removeSession())),!e)return{data:{session:null},error:null};let n=e.expires_at?e.expires_at*1e3-Date.now()<Ua:!1;if(this._debug(`#__loadSession()`,`session has${n?``:` not`} expired`,`expires_at`,e.expires_at),!n){if(this.userStorage){let t=await Fo(this.userStorage,this.storageKey+`-user`);t?.user?e.user=t.user:e.user=Qo()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){let t={value:this.suppressGetSessionWarning};e.user=$o(e.user,t),t.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}let{data:r,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{session:null},error:i}):this._returnResult({data:{session:r},error:null})}finally{this._debug(`#__loadSession()`,`end`)}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return t=this.lock==null?await this._getUser():await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await K(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:e,xform:ss}):await this._useSession(async e=>{let{data:t,error:n}=e;if(n)throw n;return!t.session?.access_token&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new U}:await K(this.fetch,`GET`,`${this.url}/user`,{headers:this.headers,jwt:t.session?.access_token??void 0,xform:ss})})}catch(e){if(H(e))return to(e)&&(await this._removeSession(),await G(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:e});throw e}}async updateUser(e,t={}){return await this.initializePromise,this.lock==null?await this._updateUser(e,t):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async n=>{let{data:r,error:i}=n;if(i)throw i;if(!r.session)throw new U;let a=r.session,o=null,s=null;this.flowType===`pkce`&&e.email!=null&&([o,s]=await Wo(this.storage,this.storageKey));let{data:c,error:l}=await K(this.fetch,`PUT`,`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:s}),jwt:a.access_token,xform:ss});if(l)throw l;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers(`USER_UPDATED`,a),this._returnResult({data:{user:a.user},error:null})})}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null},error:e});throw e}}async setSession(e){return await this.initializePromise,this.lock==null?await this._setSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new U;let t=Date.now()/1e3,n=t,r=!0,i=null,{payload:a}=Lo(e.access_token);if(a.exp&&(n=a.exp,r=n<=t),r){let{data:t,error:n}=await this._callRefreshToken(e.refresh_token);if(n)return this._returnResult({data:{user:null,session:null},error:n});if(!t)return{data:{user:null,session:null},error:null};i=t}else{let{data:r,error:a}=await this._getUser(e.access_token);if(a)return this._returnResult({data:{user:null,session:null},error:a});i={access_token:e.access_token,refresh_token:e.refresh_token,user:r.user,token_type:`bearer`,expires_in:n-t,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers(`SIGNED_IN`,i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(e){if(H(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}}async refreshSession(e){return await this.initializePromise,this.lock==null?await this._refreshSession(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{if(!e){let{data:n,error:r}=t;if(r)throw r;e=n.session??void 0}if(!e?.refresh_token)throw new U;let{data:n,error:r}=await this._callRefreshToken(e.refresh_token);return r?this._returnResult({data:{user:null,session:null},error:r}):n?this._returnResult({data:{user:n.user,session:n},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(e){if(H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async _getSessionFromURL(e,t){try{if(!W())throw new io(`No browser detected.`);if(e.error||e.error_description||e.error_code)throw new io(e.error_description||`Error in URL with unspecified error_description`,{error:e.error||`unspecified_error`,code:e.error_code||`unspecified_code`});switch(t){case`implicit`:if(this.flowType===`pkce`)throw new oo(`Not a valid PKCE flow url.`);break;case`pkce`:if(this.flowType===`implicit`)throw new io(`Not a valid implicit grant flow url.`);break;default:}if(t===`pkce`){if(this._debug(`#_initialize()`,`begin`,`is PKCE flow`,!0),!e.code)throw new oo(`No code detected.`);let{data:t,error:n}=await this._exchangeCodeForSession(e.code);if(n)throw n;let r=new URL(window.location.href);return r.searchParams.delete(`code`),window.history.replaceState(window.history.state,``,r.toString()),{data:{session:t.session,redirectType:t.redirectType??null},error:null}}let{provider_token:n,provider_refresh_token:r,access_token:i,refresh_token:a,expires_in:o,expires_at:s,token_type:c}=e;if(!i||!o||!a||!c)throw new io(`No session defined in URL`);let l=Math.round(Date.now()/1e3),u=parseInt(o),d=l+u;s&&(d=parseInt(s));let f=d-l;f*1e3<=3e4&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${u}s`);let p=d-u;l-p>=120?console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale`,p,d,l):l-p<0&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew`,p,d,l);let{data:m,error:h}=await this._getUser(i);if(h)throw h;let g={provider_token:n,provider_refresh_token:r,access_token:i,expires_in:u,expires_at:d,refresh_token:a,token_type:c,user:m.user};return window.location.hash=``,this._debug(`#_getSessionFromURL()`,`clearing window.location.hash`),this._returnResult({data:{session:g,redirectType:e.type},error:null})}catch(e){if(H(e))return this._returnResult({data:{session:null,redirectType:null},error:e});throw e}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl==`function`?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){let t=await Fo(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:`global`}){return await this.initializePromise,this.lock==null?await this._signOut(e):await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:`global`}){return await this._useSession(async t=>{let{data:n,error:r}=t;if(r&&!to(r))return this._returnResult({error:r});let i=n.session?.access_token;if(i){let{error:t}=await this.admin.signOut(i,e);if(t&&!(Qa(t)&&(t.status===404||t.status===401||t.status===403)||to(t)))return this._returnResult({error:t})}return e!==`others`&&(await this._removeSession(),await G(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){let t=Oo(),n={id:t,callback:e,unsubscribe:()=>{this._debug(`#unsubscribe()`,`state change callback with id removed`,t),this.stateChangeEmitters.delete(t)}};return this._debug(`#onAuthStateChange()`,`registered callback with id`,t),this.stateChangeEmitters.set(t,n),(async()=>{await this.initializePromise,this.lock==null?await this._emitInitialSession(t):await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)})})(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async t=>{try{let{data:{session:n},error:r}=t;if(r)throw r;await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,n),this._debug(`INITIAL_SESSION`,`callback id`,e,`session`,n)}catch(t){await this.stateChangeEmitters.get(e)?.callback(`INITIAL_SESSION`,null),this._debug(`INITIAL_SESSION`,`callback id`,e,`error`,t),to(t)?console.warn(t):console.error(t)}})}async resetPasswordForEmail(e,t={}){let n=null,r=null;this.flowType===`pkce`&&([n,r]=await Wo(this.storage,this.storageKey,!0));try{return await K(this.fetch,`POST`,`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:null,error:e});throw e}}async getUserIdentities(){try{let{data:e,error:t}=await this.getUser();if(t)throw t;return this._returnResult({data:{identities:e.user.identities??[]},error:null})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async linkIdentity(e){return`token`in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){try{let{data:t,error:n}=await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;let i=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:e.options?.redirectTo,scopes:e.options?.scopes,queryParams:e.options?.queryParams,skipBrowserRedirect:!0});return await K(this.fetch,`GET`,i,{headers:this.headers,jwt:n.session?.access_token??void 0})});if(n)throw n;return W()&&!e.options?.skipBrowserRedirect&&window.location.assign(t?.url),this._returnResult({data:{provider:e.provider,url:t?.url},error:null})}catch(t){if(H(t))return this._returnResult({data:{provider:e.provider,url:null},error:t});throw t}}async linkIdentityIdToken(e){return await this._useSession(async t=>{try{let{error:n,data:{session:r}}=t;if(n)throw n;let{options:i,provider:a,token:o,access_token:s,nonce:c}=e,{data:l,error:u}=await K(this.fetch,`POST`,`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:r?.access_token??void 0,body:{provider:a,id_token:o,access_token:s,nonce:c,link_identity:!0,gotrue_meta_security:{captcha_token:i?.captchaToken}},xform:q});return u?this._returnResult({data:{user:null,session:null},error:u}):!l||!l.session||!l.user?this._returnResult({data:{user:null,session:null},error:new no}):(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers(`USER_UPDATED`,l.session)),this._returnResult({data:l,error:u}))}catch(e){if(await G(this.storage,`${this.storageKey}-code-verifier`),H(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)throw r;return await K(this.fetch,`DELETE`,`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:n.session?.access_token??void 0})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _refreshAccessToken(e){let t=`#_refreshAccessToken()`;this._debug(t,`begin`);try{let n=Date.now();return await zo(async n=>(n>0&&await Ro(200*2**(n-1)),this._debug(t,`refreshing attempt`,n),await K(this.fetch,`POST`,`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:q})),(e,t)=>{let r=200*2**e;return t&&lo(t)&&Date.now()+r-n<3e4})}catch(e){if(this._debug(t,`error`,e),H(e))return this._returnResult({data:{session:null,user:null},error:e});throw e}finally{this._debug(t,`end`)}}_isValidSession(e){return typeof e==`object`&&!!e&&`access_token`in e&&`refresh_token`in e&&`expires_at`in e}async _handleProviderSignIn(e,t){let n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug(`#_handleProviderSignIn()`,`provider`,e,`options`,t,`url`,n),W()&&!t.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){let e=`#_recoverAndRefresh()`;this._debug(e,`begin`);try{let t=await Fo(this.storage,this.storageKey);if(t&&this.userStorage){let e=await Fo(this.userStorage,this.storageKey+`-user`);!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!e&&(e={user:t.user},await Po(this.userStorage,this.storageKey+`-user`,e)),t.user=e?.user??Qo()}else if(t&&!t.user&&!t.user){let e=await Fo(this.storage,this.storageKey+`-user`);e&&e?.user?(t.user=e.user,await G(this.storage,this.storageKey+`-user`),await Po(this.storage,this.storageKey,t)):t.user=Qo()}if(this._debug(e,`session from storage`,t),!this._isValidSession(t)){this._debug(e,`session is not valid`),t!==null&&await this._removeSession();return}let n=(t.expires_at??1/0)*1e3-Date.now()<Ua;if(this._debug(e,`session has${n?``:` not`} expired with margin of ${Ua}s`),n){if(this.autoRefreshToken&&t.refresh_token){let{error:n}=await this._callRefreshToken(t.refresh_token);n&&(fo(n)?this._debug(e,`refresh discarded by commit guard`,n):(this._debug(e,`refresh failed`,n),lo(n)||(this._debug(e,`refresh failed with a non-retryable error, removing the session`,n),await this._removeSession())))}}else if(t.user&&t.user.__isUserNotAvailableProxy===!0)try{let{data:n,error:r}=await this._getUser(t.access_token);!r&&n?.user?(t.user=n.user,await this._saveSession(t),await this._notifyAllSubscribers(`SIGNED_IN`,t)):this._debug(e,`could not get user data, skipping SIGNED_IN notification`)}catch(t){console.error(`Error getting user data:`,t),this._debug(e,`error getting user data, skipping SIGNED_IN notification`,t)}else await this._notifyAllSubscribers(`SIGNED_IN`,t)}catch(t){this._debug(e,`error`,t),console.error(t);return}finally{this._debug(e,`end`)}}async _callRefreshToken(e){var t,n;if(!e)throw new U;if(this.refreshingDeferred)return this.refreshingDeferred.promise;let r=`#_callRefreshToken()`;this._debug(r,`begin`);try{this.refreshingDeferred=new Io;let t=await Fo(this.storage,this.storageKey),{data:n,error:i}=await this._refreshAccessToken(e);if(i)throw i;if(!n.session)throw new U;let a=await Fo(this.storage,this.storageKey);if(t!==null&&(a===null||a.refresh_token!==t.refresh_token)){this._debug(r,`commit guard: storage changed since refresh started, discarding rotated tokens`,{startedWith:`present`,nowHolds:a?`replaced`:`cleared`});let e={data:null,error:new uo};return this.refreshingDeferred.resolve(e),e}let o=this._sessionRemovalEpoch;if(await this._saveSession(n.session),this._sessionRemovalEpoch!==o){this._debug(r,`commit guard (post-save): _removeSession ran during _saveSession, undoing write`),await G(this.storage,this.storageKey),this.userStorage&&await G(this.userStorage,this.storageKey+`-user`);let e={data:null,error:new uo};return this.refreshingDeferred.resolve(e),e}await this._notifyAllSubscribers(`TOKEN_REFRESHED`,n.session);let s={data:n.session,error:null};return this.refreshingDeferred.resolve(s),s}catch(e){if(this._debug(r,`error`,e),H(e)){let n={data:null,error:e};return lo(e)||await this._removeSession(),(t=this.refreshingDeferred)==null||t.resolve(n),n}throw(n=this.refreshingDeferred)==null||n.reject(e),e}finally{this.refreshingDeferred=null,this._debug(r,`end`)}}async _notifyAllSubscribers(e,t,n=!0){let r=`#_notifyAllSubscribers(${e})`;this._debug(r,`begin`,t,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:t});let r=[],i=Array.from(this.stateChangeEmitters.values()).map(async n=>{try{await n.callback(e,t)}catch(e){r.push(e)}});if(await Promise.all(i),r.length>0){for(let e=0;e<r.length;e+=1)console.error(r[e]);throw r[0]}}finally{this._debug(r,`end`)}}async _saveSession(e){this._debug(`#_saveSession()`,e),this.suppressGetSessionWarning=!0,await G(this.storage,`${this.storageKey}-code-verifier`);let t=Object.assign({},e),n=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&t.user&&await Po(this.userStorage,this.storageKey+`-user`,{user:t.user});let e=Object.assign({},t);delete e.user;let r=es(e);await Po(this.storage,this.storageKey,r)}else{let e=es(t);await Po(this.storage,this.storageKey,e)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug(`#_removeSession()`),this.suppressGetSessionWarning=!1,await G(this.storage,this.storageKey),await G(this.storage,this.storageKey+`-code-verifier`),await G(this.storage,this.storageKey+`-user`),this.userStorage&&await G(this.userStorage,this.storageKey+`-user`),await this._notifyAllSubscribers(`SIGNED_OUT`,null)}_removeVisibilityChangedCallback(){this._debug(`#_removeVisibilityChangedCallback()`);let e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&W()&&window!=null&&window.removeEventListener&&window.removeEventListener(`visibilitychange`,e)}catch(e){console.error(`removing visibilitychange callback failed`,e)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug(`#_startAutoRefresh()`);let e=setInterval(()=>this._autoRefreshTokenTick(),Ha);this.autoRefreshTicker=e,e&&typeof e==`object`&&typeof e.unref==`function`?e.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(e);let t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t==`object`&&typeof t.unref==`function`?t.unref():typeof Deno<`u`&&typeof Deno.unrefTimer==`function`&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug(`#_stopAutoRefresh()`);let e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);let t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)==null||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug(`#_autoRefreshTokenTick()`,`begin`),this.lock!=null){try{await this._acquireLock(0,async()=>{try{let e=Date.now();try{return await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Ha);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Ha}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}})}catch(e){if(e instanceof hs)this._debug(`auto refresh token tick lock not available`);else throw e}return}if(this.refreshingDeferred!==null){this._debug(`#_autoRefreshTokenTick()`,`refresh already in flight, skipping`);return}try{let e=Date.now();try{await this._useSession(async t=>{let{data:{session:n}}=t;if(!n||!n.refresh_token||!n.expires_at){this._debug(`#_autoRefreshTokenTick()`,`no session`);return}let r=Math.floor((n.expires_at*1e3-e)/Ha);this._debug(`#_autoRefreshTokenTick()`,`access token expires in ${r} ticks, a tick lasts ${Ha}ms, refresh threshold is 3 ticks`),r<=3&&await this._callRefreshToken(n.refresh_token)})}catch(e){console.error(`Auto refresh tick failed with error. This is likely a transient error.`,e)}}finally{this._debug(`#_autoRefreshTokenTick()`,`end`)}}async _handleVisibilityChange(){if(this._debug(`#_handleVisibilityChange()`),!W()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug(`#visibilityChangedCallback`,`error`,e)}},window==null||window.addEventListener(`visibilitychange`,this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error(`_handleVisibilityChange`,e)}}async _onVisibilityChanged(e){let t=`#_onVisibilityChanged(${e})`;if(this._debug(t,`visibilityState`,document.visibilityState),document.visibilityState===`visible`){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!==`visible`){this._debug(t,`acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting`);return}await this._recoverAndRefresh()});else{if(document.visibilityState!==`visible`){this._debug(t,`visibilityState is no longer visible, skipping recovery`);return}await this._recoverAndRefresh()}}else document.visibilityState===`hidden`&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,n){let r=[`provider=${encodeURIComponent(t)}`];if(n?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&r.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType===`pkce`){let[e,t]=await Wo(this.storage,this.storageKey),n=new URLSearchParams({code_challenge:`${encodeURIComponent(e)}`,code_challenge_method:`${encodeURIComponent(t)}`});r.push(n.toString())}if(n?.queryParams){let e=new URLSearchParams(n.queryParams);r.push(e.toString())}return n?.skipBrowserRedirect&&r.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${r.join(`&`)}`}async _unenroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;return r?this._returnResult({data:null,error:r}):await K(this.fetch,`DELETE`,`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:n?.session?.access_token})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _enroll(e){try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType===`phone`?{phone:e.phone}:e.factorType===`totp`?{issuer:e.issuer}:{}),{data:a,error:o}=await K(this.fetch,`POST`,`${this.url}/factors`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(e.factorType===`totp`&&a.type===`totp`&&a?.totp?.qr_code&&(a.totp.qr_code=`data:image/svg+xml;utf-8,${a.totp.qr_code}`),this._returnResult({data:a,error:null}))})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _verify(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=Object.assign({challenge_id:e.challengeId},`webauthn`in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type===`create`?Ds(e.webauthn.credential_response):Os(e.webauthn.credential_response)})}:{code:e.code}),{data:a,error:o}=await K(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/verify`,{body:i,headers:this.headers,jwt:n?.session?.access_token});return o?this._returnResult({data:null,error:o}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+a.expires_in},a)),await this._notifyAllSubscribers(`MFA_CHALLENGE_VERIFIED`,a),this._returnResult({data:a,error:o}))})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challenge(e){let t=async()=>{try{return await this._useSession(async t=>{let{data:n,error:r}=t;if(r)return this._returnResult({data:null,error:r});let i=await K(this.fetch,`POST`,`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:n?.session?.access_token});if(i.error)return i;let{data:a}=i;if(a.type!==`webauthn`)return{data:a,error:null};switch(a.webauthn.type){case`create`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Ts(a.webauthn.credential_options.publicKey)})})}),error:null};case`request`:return{data:Object.assign(Object.assign({},a),{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_options:Object.assign(Object.assign({},a.webauthn.credential_options),{publicKey:Es(a.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}};return this.lock==null?t():this._acquireLock(this.lockAcquireTimeout,t)}async _challengeAndVerify(e){let{data:t,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){let{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};let n={all:[],phone:[],totp:[],webauthn:[]};for(let t of e?.factors??[])n.all.push(t),t.status===`verified`&&n[t.factor_type].push(t);return{data:n,error:null}}async _getAuthenticatorAssuranceLevel(e){if(e)try{let{payload:t}=Lo(e),n=null;t.aal&&(n=t.aal);let r=n,{data:{user:i},error:a}=await this.getUser(e);if(a)return this._returnResult({data:null,error:a});((i?.factors)?.filter(e=>e.status===`verified`)??[]).length>0&&(r=`aal2`);let o=t.amr||[];return{data:{currentLevel:n,nextLevel:r,currentAuthenticationMethods:o},error:null}}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}let{data:{session:t},error:n}=await this.getSession();if(n)return this._returnResult({data:null,error:n});if(!t)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};let{payload:r}=Lo(t.access_token),i=null;r.aal&&(i=r.aal);let a=i;(t.user.factors?.filter(e=>e.status===`verified`)??[]).length>0&&(a=`aal2`);let o=r.amr||[];return{data:{currentLevel:i,nextLevel:a,currentAuthenticationMethods:o},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?await K(this.fetch,`GET`,`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _approveAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new U});let a=await K(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`approve`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&W()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _denyAuthorization(e,t){try{return await this._useSession(async n=>{let{data:{session:r},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!r)return this._returnResult({data:null,error:new U});let a=await K(this.fetch,`POST`,`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:`deny`},xform:e=>({data:e,error:null})});return a.data&&a.data.redirect_url&&W()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _listOAuthGrants(){try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;return n?this._returnResult({data:null,error:n}):t?await K(this.fetch,`GET`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;return r?this._returnResult({data:null,error:r}):n?(await K(this.fetch,`DELETE`,`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new U})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async fetchJwk(e,t={keys:[]}){let n=t.keys.find(t=>t.kid===e);if(n)return n;let r=Date.now();if(n=this.jwks.keys.find(t=>t.kid===e),n&&this.jwks_cached_at+6e5>r)return n;let{data:i,error:a}=await K(this.fetch,`GET`,`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=r,n=i.keys.find(t=>t.kid===e),!n)?null:n}async getClaims(e,t={}){try{let n=e;if(!n){let{data:e,error:t}=await this.getSession();if(t||!e.session)return this._returnResult({data:null,error:t});n=e.session.access_token}let{header:r,payload:i,signature:a,raw:{header:o,payload:s}}=Lo(n);if(!t?.allowExpired)try{qo(i.exp)}catch(e){throw new mo(e instanceof Error?e.message:`JWT validation failed`)}let c=!r.alg||r.alg.startsWith(`HS`)||!r.kid||!(`crypto`in globalThis&&`subtle`in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!c){let{error:e}=await this.getUser(n);if(e)throw e;return{data:{claims:i,header:r,signature:a},error:null}}let l=Jo(r.alg),u=await crypto.subtle.importKey(`jwk`,c,l,!0,[`verify`]);if(!await crypto.subtle.verify(l,u,a,To(`${o}.${s}`)))throw new mo(`Invalid JWT signature`);return{data:{claims:i,header:r,signature:a},error:null}}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async signInWithPasskey(e){Zo(this.experimental);try{if(!As())return this._returnResult({data:null,error:new $a(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyAuthentication({options:{captchaToken:e?.options?.captchaToken}});if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await Ms({publicKey:Es(t.options),signal:e?.options?.signal??ws.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new $a(`WebAuthn ceremony failed`,null)});let a=Os(r);return this._verifyPasskeyAuthentication({challengeId:t.challenge_id,credential:a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async registerPasskey(e){Zo(this.experimental);try{if(!As())return this._returnResult({data:null,error:new $a(`Browser does not support WebAuthn`,null)});let{data:t,error:n}=await this._startPasskeyRegistration();if(n||!t)return this._returnResult({data:null,error:n});let{data:r,error:i}=await js({publicKey:Ts(t.options),signal:e?.options?.signal??ws.createNewAbortSignal()});if(i||!r)return this._returnResult({data:null,error:i??new $a(`WebAuthn ceremony failed`,null)});let a=Ds(r);return this._verifyPasskeyRegistration({challengeId:t.challenge_id,credential:a})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyRegistration(){Zo(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new U});let{data:r,error:i}=await K(this.fetch,`POST`,`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){Zo(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new U});let{data:i,error:a}=await K(this.fetch,`POST`,`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _startPasskeyAuthentication(e){Zo(this.experimental);try{let{data:t,error:n}=await K(this.fetch,`POST`,`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:e?.options?.captchaToken}}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:t,error:null})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyAuthentication(e){Zo(this.experimental);try{let{data:t,error:n}=await K(this.fetch,`POST`,`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:q});return n?this._returnResult({data:null,error:n}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers(`SIGNED_IN`,t.session)),this._returnResult({data:t,error:null}))}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _listPasskeys(){Zo(this.experimental);try{return await this._useSession(async e=>{let{data:{session:t},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!t)return this._returnResult({data:null,error:new U});let{data:r,error:i}=await K(this.fetch,`GET`,`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:e=>({data:e,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:r,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){Zo(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new U});let{data:i,error:a}=await K(this.fetch,`PATCH`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}async _deletePasskey(e){Zo(this.experimental);try{return await this._useSession(async t=>{let{data:{session:n},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!n)return this._returnResult({data:null,error:new U});let{error:i}=await K(this.fetch,`DELETE`,`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(e){if(H(e))return this._returnResult({data:null,error:e});throw e}}};Vs.nextInstanceID={};var Hs=Vs,Us=`modulepreload`,Ws=function(e){return`/`+e},Gs={},Ks=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Ws(t,n),t in Gs)return;Gs[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Us,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},qs=`2.108.1`,Js=``,Ys;typeof Deno<`u`?(Js=`deno`,Ys=Deno.version?.deno):typeof document<`u`?Js=`web`:typeof navigator<`u`&&navigator.product===`ReactNative`?Js=`react-native`:(Js=`node`,Ys=typeof process<`u`?process.version?.replace(/^v/,``):void 0);var Xs=[`runtime=${Js}`];Ys&&Xs.push(`runtime-version=${Ys}`);var Zs={headers:{"X-Client-Info":`supabase-js/${qs}; ${Xs.join(`; `)}`}},Qs={schema:`public`},$s={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:`implicit`},ec={},tc={enabled:!1,respectSamplingDecision:!0};function nc(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var rc=null,ic=`@opentelemetry/api`;function ac(){return rc===null&&(rc=Ks(()=>import(ic),[]).catch(()=>null)),rc}function oc(){return nc(this,void 0,void 0,function*(){try{let e=yield ac();if(!e||!e.propagation||!e.context)return null;let t={};e.propagation.inject(e.context.active(),t);let n=t.traceparent;return n?{traceparent:n,tracestate:t.tracestate,baggage:t.baggage}:null}catch{return null}})}function sc(e){if(!e||typeof e!=`string`)return null;let t=e.split(`-`);if(t.length!==4)return null;let[n,r,i,a]=t;if(n.length!==2||r.length!==32||i.length!==16||a.length!==2)return null;let o=/^[0-9a-f]+$/i;return!o.test(n)||!o.test(r)||!o.test(i)||!o.test(a)||r===`00000000000000000000000000000000`||i===`0000000000000000`?null:{version:n,traceId:r,parentId:i,traceFlags:a,isSampled:(parseInt(a,16)&1)==1}}function cc(e,t){if(!e||!t||t.length===0)return!1;let n;if(e instanceof URL)n=e;else try{n=new URL(e)}catch{return!1}for(let e of t)try{if(typeof e==`string`){if(lc(n.hostname,e))return!0}else if(e instanceof RegExp){if(e.test(n.hostname))return!0}else if(typeof e==`function`&&e(n))return!0}catch{continue}return!1}function lc(e,t){if(t===e)return!0;if(t.startsWith(`*.`)){let n=t.slice(2);if(e.endsWith(n)&&(e===n||e.endsWith(`.`+n)))return!0}return!1}function uc(e){let t=[];try{let n=new URL(e);t.push(n.hostname)}catch{}return t.push(`*.supabase.co`,`*.supabase.in`),t.push(`localhost`,`127.0.0.1`,`[::1]`),t}function dc(e){"@babel/helpers - typeof";return dc=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},dc(e)}function fc(e,t){if(dc(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(dc(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function pc(e){var t=fc(e,`string`);return dc(t)==`symbol`?t:t+``}function mc(e,t,n){return(t=pc(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?hc(Object(n),!0).forEach(function(t){mc(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hc(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var gc=e=>e?(...t)=>e(...t):(...e)=>fetch(...e),_c=()=>Headers,vc=(e,t,n,r,i)=>{let a=gc(r),o=_c(),s=i?.enabled===!0,c=i?.respectSamplingDecision!==!1,l=s?uc(t):null;return async(t,r)=>{let i=await n()??e,s=new o(r?.headers);if(s.has(`apikey`)||s.set(`apikey`,e),s.has(`Authorization`)||s.set(`Authorization`,`Bearer ${i}`),l){let e=await yc(t,l,c);e&&(e.traceparent&&!s.has(`traceparent`)&&s.set(`traceparent`,e.traceparent),e.tracestate&&!s.has(`tracestate`)&&s.set(`tracestate`,e.tracestate),e.baggage&&!s.has(`baggage`)&&s.set(`baggage`,e.baggage))}return a(t,Y(Y({},r),{},{headers:s}))}};async function yc(e,t,n){if(!cc(typeof e==`string`||e instanceof URL?e:e.url,t))return null;let r=await oc();if(!r||!r.traceparent)return null;if(n){let e=sc(r.traceparent);if(e&&!e.isSampled)return null}return r}function bc(e){return typeof e==`boolean`?{enabled:e}:e}function xc(e){return e.endsWith(`/`)?e:e+`/`}function Sc(e,t){let{db:n,auth:r,realtime:i,global:a}=e,{db:o,auth:s,realtime:c,global:l}=t,u=bc(e.tracePropagation),d=bc(t.tracePropagation),f={db:Y(Y({},o),n),auth:Y(Y({},s),r),realtime:Y(Y({},c),i),storage:{},global:Y(Y(Y({},l),a),{},{headers:Y(Y({},l?.headers??{}),a?.headers??{})}),tracePropagation:{enabled:u?.enabled??d?.enabled??!1,respectSamplingDecision:u?.respectSamplingDecision??d?.respectSamplingDecision??!0},accessToken:async()=>``};return e.accessToken?f.accessToken=e.accessToken:delete f.accessToken,f}function Cc(e){let t=e?.trim();if(!t)throw Error(`supabaseUrl is required.`);if(!t.match(/^https?:\/\//i))throw Error(`Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.`);try{return new URL(xc(t))}catch{throw Error(`Invalid supabaseUrl: Provided URL is malformed.`)}}var wc=class extends Hs{constructor(e){super(e)}},Tc=class{constructor(e,t,n){this.supabaseUrl=e,this.supabaseKey=t;let r=Cc(e);if(!t)throw Error(`supabaseKey is required.`);this.realtimeUrl=new URL(`realtime/v1`,r),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace(`http`,`ws`),this.authUrl=new URL(`auth/v1`,r),this.storageUrl=new URL(`storage/v1`,r),this.functionsUrl=new URL(`functions/v1`,r);let i=`sb-${r.hostname.split(`.`)[0]}-auth-token`,a={db:Qs,realtime:ec,auth:Y(Y({},$s),{},{storageKey:i}),global:Zs,tracePropagation:tc},o=Sc(n??{},a);this.settings=o,this.storageKey=o.auth.storageKey??``,this.headers=o.global.headers??{},o.accessToken?(this.accessToken=o.accessToken,this.auth=new Proxy({},{get:(e,t)=>{throw Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(t)} is not possible`)}})):this.auth=this._initSupabaseAuthClient(o.auth??{},this.headers,o.global.fetch),this.fetch=vc(t,e,this._getAccessToken.bind(this),o.global.fetch,o.tracePropagation),this.realtime=this._initRealtimeClient(Y({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},o.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(e=>this.realtime.setAuth(e)).catch(e=>console.warn(`Failed to set initial Realtime auth token:`,e)),this.rest=new Nr(new URL(`rest/v1`,r).href,{headers:this.headers,schema:o.db.schema,fetch:this.fetch,timeout:o.db.timeout,urlLengthLimit:o.db.urlLengthLimit}),this.storage=new Ba(this.storageUrl.href,this.headers,this.fetch,n?.storage),o.accessToken||this._listenForAuthEvents()}get functions(){return new mr(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},n={head:!1,get:!1,count:void 0}){return this.rest.rpc(e,t,n)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var e=this;if(e.accessToken)return await e.accessToken();let{data:t}=await e.auth.getSession();return t.session?.access_token??e.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,storageKey:a,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:d,skipAutoInitialize:f},p,m){let h={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new wc({url:this.authUrl.href,headers:Y(Y({},h),p),storageKey:a,autoRefreshToken:e,persistSession:t,detectSessionInUrl:n,storage:r,userStorage:i,flowType:o,lock:s,debug:c,throwOnError:l,experimental:u,fetch:m,lockAcquireTimeout:d,skipAutoInitialize:f,hasCustomAuthorizationHeader:Object.keys(this.headers).some(e=>e.toLowerCase()===`authorization`)})}_initRealtimeClient(e){return new Hi(this.realtimeUrl.href,Y(Y({},e),{},{params:Y(Y({},{apikey:this.supabaseKey}),e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((e,t)=>{this._handleTokenChanged(e,`CLIENT`,t?.access_token)})}_handleTokenChanged(e,t,n){(e===`TOKEN_REFRESHED`||e===`SIGNED_IN`)&&this.changedAccessToken!==n?(this.changedAccessToken=n,this.realtime.setAuth(n)):e===`SIGNED_OUT`&&(this.realtime.setAuth(),t==`STORAGE`&&this.auth.signOut(),this.changedAccessToken=void 0)}},Ec=(e,t,n)=>new Tc(e,t,n);function Dc(){if(typeof window<`u`)return!1;let e=globalThis.process;if(!e)return!1;let t=e.version;if(t==null)return!1;let n=t.match(/^v(\d+)\./);return n?parseInt(n[1],10)<=18:!1}Dc()&&console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217`);var Oc=`https://wahwdszfywobmyyuyihu.supabase.co`,kc=`sb_publishable_ukJVlh6J3LcDiG5774YU7g_KGjiuB9P`,Ac=null;function jc(){return!!kc}function Mc(){return jc()?(Ac||=Ec(Oc,kc),Ac):null}function X(e,t,n=`#ffffff`,r=640,i=360){let a=`<svg xmlns="http://www.w3.org/2000/svg" width="${r}" height="${i}" viewBox="0 0 ${r} ${i}"><rect width="100%" height="100%" fill="${t}"/><text x="50%" y="50%" fill="${n}" font-family="Arial, sans-serif" font-size="${Math.round(i/9)}" font-weight="bold" text-anchor="middle" dominant-baseline="middle">${e}</text></svg>`;return`data:image/svg+xml;utf8,${encodeURIComponent(a)}`}var Nc={display_name:`Demo Publisher`,avatar_url:X(`DP`,`#ff8c00`,`#fff`,96,96)},Pc=[{id:`mock-1`,owner_id:`demo-user`,slug:`comet-particles-pro`,name:`Comet Particles Pro`,summary:`Advanced particle system presets: fire, smoke, magic, rain and 40+ ready-to-use effects.`,description_md:`# Comet Particles Pro

A collection of **40+ production-ready particle effects** for Comet Engine.

## Features

- Fire, smoke, explosions and sparks
- Weather: rain, snow, fog
- Magic and sci-fi effects
- Fully tweakable from the editor

## Usage

Extract the zip into your project's \`RuntimeAssets\` folder and load any effect with \`LoadResource\`.

> This is **demo data** — connect Supabase to see real packages.`,category:`Tools`,tags:[`particles`,`vfx`,`effects`],license:`MIT`,homepage_url:`https://www.cometengine.org`,repo_url:`https://github.com/OriolCS2/CometEngine`,min_engine_version:`2.1`,icon_url:X(`PP`,`#e25822`,`#fff`,128,128),screenshots:[X(`Fire FX`,`#7a2410`),X(`Rain FX`,`#1e3a5f`),X(`Magic FX`,`#4a1e5f`)],status:`published`,latest_version:`2.1.0`,download_count:12473,created_at:`2026-01-12T10:00:00Z`,updated_at:`2026-05-28T16:30:00Z`,profiles:Nc},{id:`mock-2`,owner_id:`demo-user`,slug:`pixel-ui-kit`,name:`Pixel UI Kit`,summary:`Complete retro pixel-art UI pack: buttons, panels, health bars, icons and 9-slice frames.`,description_md:`# Pixel UI Kit

Everything you need to build a **retro game UI**: buttons, sliders, panels, inventory frames and 200+ icons.

- 16x16 and 32x32 variants
- 9-slice ready frames
- Light and dark themes`,category:`UI`,tags:[`ui`,`pixel-art`,`2d`],license:`CC0-1.0`,homepage_url:``,repo_url:``,min_engine_version:`2.0`,icon_url:X(`UI`,`#2a7a4b`,`#fff`,128,128),screenshots:[X(`UI Pack`,`#1d4d31`),X(`Icons`,`#28543c`)],status:`published`,latest_version:`1.3.2`,download_count:8231,created_at:`2026-02-02T09:00:00Z`,updated_at:`2026-04-15T11:00:00Z`,profiles:Nc},{id:`mock-3`,owner_id:`demo-user-2`,slug:`chiptune-audio-pack`,name:`Chiptune Audio Pack`,summary:`80 looping chiptune music tracks and 150 retro SFX, ready to drop into any Comet project.`,description_md:`# Chiptune Audio Pack

80 looping tracks + 150 SFX in OGG format.

## Contents

- Battle, exploration and menu themes
- Jump, coin, hit, explosion SFX
- All loops seamless`,category:`Audio`,tags:[`music`,`sfx`,`chiptune`],license:`CC0-1.0`,homepage_url:``,repo_url:``,min_engine_version:`2.0`,icon_url:X(`♪`,`#5f4ae2`,`#fff`,128,128),screenshots:[X(`Audio Pack`,`#2e2470`)],status:`published`,latest_version:`1.0.1`,download_count:4502,created_at:`2026-03-20T18:00:00Z`,updated_at:`2026-03-25T18:00:00Z`,profiles:{display_name:`Retro Sounds`,avatar_url:X(`RS`,`#5f4ae2`,`#fff`,96,96)}},{id:`mock-4`,owner_id:`demo-user`,slug:`platformer-template`,name:`Platformer Template`,summary:`Full platformer starter project: player controller, enemies, checkpoints, camera and levels.`,description_md:`# Platformer Template

A complete starter project to kickstart your platformer:

- Smooth player controller (coyote time, jump buffering)
- Patrolling and flying enemies
- Checkpoints and level transitions
- Camera follow with look-ahead`,category:`Templates`,tags:[`template`,`platformer`,`starter`],license:`MIT`,homepage_url:``,repo_url:``,min_engine_version:`2.1`,icon_url:X(`PT`,`#c2274b`,`#fff`,128,128),screenshots:[X(`Level 1`,`#5f1426`),X(`Editor view`,`#46101d`)],status:`published`,latest_version:`1.1.0`,download_count:6817,created_at:`2026-04-01T12:00:00Z`,updated_at:`2026-06-01T09:00:00Z`,profiles:Nc}],Fc={"mock-1":[{id:`mv-1-3`,package_id:`mock-1`,version:`2.1.0`,zip_path:`#`,zip_size:182e5,download_count:3120,created_at:`2026-05-28T16:30:00Z`,changelog_md:`## 2.1.0

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

Initial release.`}]};function Z(e){return e==null?``:String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`)}function Ic(e){if(!e)return``;try{return Wn.sanitize(E.parse(e.trim(),{gfm:!0,breaks:!0}))}catch(t){return console.error(`Markdown parsing error:`,t),Z(e).replace(/\n/g,`<br>`)}}function Lc(e){return!e&&e!==0?`—`:e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/1024/1024).toFixed(1)} MB`}function Rc(e){return e||=0,e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(1)}k`:String(e)}function zc(e){return e?new Date(e).toLocaleDateString():`—`}function Bc(e){return/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?$/.test(e)}function Vc(e,t){let[n,r]=String(e).split(`-`),[i,a]=String(t).split(`-`),o=n.split(`.`).map(Number),s=i.split(`.`).map(Number);for(let e=0;e<3;e++)if((o[e]||0)!==(s[e]||0))return(o[e]||0)-(s[e]||0);return r&&!a?-1:!r&&a?1:r&&a?r<a?-1:+(r>a):0}function Hc(e){return String(e).toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``).substring(0,60)}function Q(e,t=`info`){let n=document.getElementById(`toast-container`);n||(n=document.createElement(`div`),n.id=`toast-container`,n.className=`toast-container`,document.body.appendChild(n));let r=document.createElement(`div`);r.className=`toast toast-${t}`,r.innerHTML=`<i class="fas ${t===`error`?`fa-circle-exclamation`:t===`success`?`fa-circle-check`:`fa-circle-info`}"></i><span>${Z(e)}</span>`,n.appendChild(r),setTimeout(()=>{r.classList.add(`toast-out`),setTimeout(()=>r.remove(),400)},t===`error`?6e3:3500)}function Uc(e){let t=document.createElement(`div`);t.className=`mp-lightbox`,t.innerHTML=`<img src="${Z(e)}" alt="Screenshot">`,t.addEventListener(`click`,()=>t.remove()),document.addEventListener(`keydown`,function e(n){n.key===`Escape`&&(t.remove(),document.removeEventListener(`keydown`,e))}),document.body.appendChild(t)}var Wc=4*1024*1024,Gc=[`Tools`,`Scripts`,`2D Art`,`UI`,`Audio`,`Shaders & Materials`,`Templates`,`Other`],Kc=[`MIT`,`Apache-2.0`,`GPL-3.0`,`BSD-3-Clause`,`CC0-1.0`,`CC-BY-4.0`,`Proprietary (free to use)`],qc=`package-zips`,Jc=`package-media`;function Yc(){return jc()}function Xc(){let e=Mc();if(!e)throw Error(`The marketplace backend is not configured yet. See MARKETPLACE_SETUP.md.`);return e}async function Zc(){let e=Mc();if(!e)return null;let{data:t}=await e.auth.getSession();return t?.session?.user||null}function Qc(e){let t=Mc();if(!t)return e(null),()=>{};Zc().then(e);let{data:n}=t.auth.onAuthStateChange((t,n)=>{e(n?.user||null)});return()=>n.subscription.unsubscribe()}async function $c(){let{error:e}=await Xc().auth.signInWithOAuth({provider:`google`,options:{redirectTo:window.location.origin+window.location.pathname}});if(e)throw e}async function el(){await Xc().auth.signOut()}var tl=null,nl=null;async function rl(){let e=Mc();if(!e)return null;let t=await Zc();if(!t)return tl=null,nl=null,null;if(tl&&nl===t.id)return tl;let{data:n}=await e.from(`profiles`).select(`*`).eq(`id`,t.id).maybeSingle();return tl=n,nl=t.id,n}async function il(){return!!(await rl())?.is_admin}async function al(e){let t=Mc();if(!t||!e)return;let n=e.user_metadata||{};await t.from(`profiles`).upsert({id:e.id,display_name:n.full_name||n.name||e.email||`Anonymous`,avatar_url:n.avatar_url||null},{onConflict:`id`,ignoreDuplicates:!0})}var ol=`*, profiles:owner_id (display_name, avatar_url)`;async function sl({search:e=``,category:t=``,sort:n=`newest`,ownerId:r=null}={}){let i=Mc();if(!i){let i=Pc.slice();if(r&&(i=i.filter(e=>e.owner_id===r)),t&&(i=i.filter(e=>e.category===t)),e){let t=e.toLowerCase();i=i.filter(e=>e.name.toLowerCase().includes(t)||e.summary.toLowerCase().includes(t)||e.tags.some(e=>e.toLowerCase().includes(t)))}return cl(i,n)}let a=i.from(`packages`).select(ol).eq(`status`,`published`);if(r&&(a=a.eq(`owner_id`,r)),t&&(a=a.eq(`category`,t)),e){let t=e.replace(/[%,()]/g,` `).trim();t&&(a=a.or(`name.ilike.%${t}%,summary.ilike.%${t}%`))}a=n===`downloads`?a.order(`download_count`,{ascending:!1}):n===`updated`?a.order(`updated_at`,{ascending:!1}):n===`name`?a.order(`name`,{ascending:!0}):a.order(`created_at`,{ascending:!1});let{data:o,error:s}=await a;if(s)throw s;return o||[]}function cl(e,t){let n=e.slice();return t===`downloads`?n.sort((e,t)=>t.download_count-e.download_count):t===`updated`?n.sort((e,t)=>new Date(t.updated_at)-new Date(e.updated_at)):t===`name`?n.sort((e,t)=>e.name.localeCompare(t.name)):n.sort((e,t)=>new Date(t.created_at)-new Date(e.created_at)),n}async function ll(){let{data:e,error:t}=await Xc().from(`packages`).select(ol).order(`updated_at`,{ascending:!1});if(t)throw t;return e||[]}async function ul(e){let{data:t,error:n}=await Xc().from(`packages`).select(ol).eq(`owner_id`,e).order(`updated_at`,{ascending:!1});if(n)throw n;return t||[]}async function dl(e){let t=Mc();if(!t)return Pc.find(t=>t.slug===e)||null;let{data:n,error:r}=await t.from(`packages`).select(ol).eq(`slug`,e).maybeSingle();if(r)throw r;return n}async function fl(e){let t=Mc();if(!t)return Pc.find(t=>t.id===e)||null;let{data:n,error:r}=await t.from(`packages`).select(ol).eq(`id`,e).maybeSingle();if(r)throw r;return n}async function pl(e){let t=Mc(),n;if(!t)n=(Fc[e]||[]).slice();else{let{data:r,error:i}=await t.from(`package_versions`).select(`*`).eq(`package_id`,e);if(i)throw i;n=r||[]}return n.sort((e,t)=>Vc(t.version,e.version)),n}async function ml(e){let t=Mc();if(!t){let t=Pc.find(t=>t.owner_id===e);return t?{id:e,...t.profiles}:null}let{data:n,error:r}=await t.from(`profiles`).select(`*`).eq(`id`,e).maybeSingle();if(r)throw r;return n}function hl(e){let t=Mc();return!t||e===`#`?null:t.storage.from(qc).getPublicUrl(e).data.publicUrl}async function gl(e,t){let n=Mc();if(n)try{await n.rpc(`increment_download`,{p_package:e,p_version:t})}catch(e){console.warn(`Could not record download:`,e)}}function _l(e){if(!e)throw Error(`Please select a ZIP file.`);if(!/\.zip$/i.test(e.name))throw Error(`The package file must be a .zip archive.`);if(e.size>26214400)throw Error(`Maximum ZIP size is 25 MB.`)}function vl(e,t){if(!/\.(png|jpe?g|webp|gif)$/i.test(e.name))throw Error(`${t} must be a PNG, JPG, WebP or GIF image.`);if(e.size>4194304)throw Error(`${t} is too big (max ${Wc/1024/1024} MB per image).`)}async function yl(e,t,n){let r=Xc(),{error:i}=await r.storage.from(e).upload(t,n,{upsert:!0,contentType:n.type||`application/octet-stream`,cacheControl:`3600`});if(i)throw Error(`Upload failed (${n.name}): ${i.message}`);return{path:t,publicUrl:r.storage.from(e).getPublicUrl(t).data.publicUrl}}function bl(e){return e.replace(/[^A-Za-z0-9._-]+/g,`_`)}async function xl(e,t){let n=Xc();_l(t.zipFile);let r=crypto.randomUUID(),i=`${e.id}/${r}`,a=null;t.iconFile&&(vl(t.iconFile,`Icon`),a=(await yl(Jc,`${i}/icon-${bl(t.iconFile.name)}`,t.iconFile)).publicUrl);let o=[];for(let e=0;e<(t.screenshotFiles||[]).length;e++){let n=t.screenshotFiles[e];vl(n,`Screenshot ${e+1}`),o.push((await yl(Jc,`${i}/shots/${e}-${bl(n.name)}`,n)).publicUrl)}let s=`${i}/${t.version}/${t.slug}-${t.version}.zip`;await yl(qc,s,t.zipFile);let{error:c}=await n.from(`packages`).insert({id:r,owner_id:e.id,slug:t.slug,name:t.name,summary:t.summary,description_md:t.descriptionMd,category:t.category,tags:t.tags,license:t.license,homepage_url:t.homepageUrl||null,repo_url:t.repoUrl||null,min_engine_version:t.minEngineVersion||null,icon_url:a,screenshots:o,status:t.status||`published`,latest_version:t.version});if(c)throw c.code===`23505`?Error(`The URL id "${t.slug}" is already taken — pick another one.`):c;let{error:l}=await n.from(`package_versions`).insert({package_id:r,version:t.version,changelog_md:t.changelogMd,zip_path:s,zip_size:t.zipFile.size});if(l)throw await n.from(`packages`).delete().eq(`id`,r),l;return r}async function Sl(e,t,n,{iconFile:r=null,screenshotFiles:i=[]}={}){let a=Xc(),o=`${e.id}/${t.id}`,s={...n,updated_at:new Date().toISOString()};if(r&&(vl(r,`Icon`),s.icon_url=(await yl(Jc,`${o}/icon-${bl(r.name)}`,r)).publicUrl),i.length>0){let e=[];for(let t=0;t<i.length;t++)vl(i[t],`Screenshot ${t+1}`),e.push((await yl(Jc,`${o}/shots/${t}-${bl(i[t].name)}`,i[t])).publicUrl);s.screenshots=e}let{error:c}=await a.from(`packages`).update(s).eq(`id`,t.id);if(c)throw c}async function Cl(e,t,{version:n,changelogMd:r,zipFile:i}){let a=Xc();_l(i);let o=`${e.id}/${t.id}/${n}/${t.slug}-${n}.zip`;await yl(qc,o,i);let{error:s}=await a.from(`package_versions`).insert({package_id:t.id,version:n,changelog_md:r,zip_path:o,zip_size:i.size});if(s)throw s.code===`23505`?Error(`Version ${n} already exists for this package.`):s;let{error:c}=await a.from(`packages`).update({latest_version:n,updated_at:new Date().toISOString()}).eq(`id`,t.id);if(c)throw c}async function wl(e,t){let{error:n}=await Xc().from(`packages`).update({status:t}).eq(`id`,e);if(n)throw n}async function Tl(e){let t=Xc();for(let n of[qc,Jc])try{let r=await El(t,n,`${e.owner_id}/${e.id}`);r.length>0&&await t.storage.from(n).remove(r)}catch(e){console.warn(`Storage cleanup failed:`,e)}let{error:n}=await t.from(`packages`).delete().eq(`id`,e.id);if(n)throw n}async function El(e,t,n){let r=[],{data:i}=await e.storage.from(t).list(n,{limit:100});for(let a of i||[])a.id?r.push(`${n}/${a.name}`):r.push(...await El(e,t,`${n}/${a.name}`));return r}async function Dl(e,t){let n=(t||`#marketplace`).replace(/^#marketplace\/?/,``).split(`/`).filter(Boolean);n[0]===`publisher`&&n[1]?await Il(e,decodeURIComponent(n[1])):n[0]?await Ml(e,decodeURIComponent(n[0])):Ol(e)}var $={search:``,category:``,sort:`newest`};function Ol(e){e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        ${jl()}
        <div class="mp-header">
          <h1>Marketplace</h1>
          <p>Free community add-ons for Comet Engine: tools, art, audio, templates and more.</p>
        </div>
        <div class="mp-toolbar">
          <input type="text" id="mp-search" class="search-box mp-search" placeholder="Search packages..."
                 value="${Z($.search)}">
          <select id="mp-category" class="search-box mp-select">
            <option value="">All categories</option>
            ${Gc.map(e=>`<option value="${Z(e)}" ${$.category===e?`selected`:``}>${Z(e)}</option>`).join(``)}
          </select>
          <select id="mp-sort" class="search-box mp-select">
            <option value="newest" ${$.sort===`newest`?`selected`:``}>Newest</option>
            <option value="updated" ${$.sort===`updated`?`selected`:``}>Recently updated</option>
            <option value="downloads" ${$.sort===`downloads`?`selected`:``}>Most downloaded</option>
            <option value="name" ${$.sort===`name`?`selected`:``}>Name (A-Z)</option>
          </select>
        </div>
        <div id="mp-grid" class="mp-grid">
          <div class="loading">Loading packages...</div>
        </div>
      </div>
    </section>
  `;let t=e.querySelector(`#mp-search`),n=e.querySelector(`#mp-category`),r=e.querySelector(`#mp-sort`),i=e.querySelector(`#mp-grid`),a=null;t.addEventListener(`input`,()=>{$.search=t.value,clearTimeout(a),a=setTimeout(()=>kl(i),300)}),n.addEventListener(`change`,()=>{$.category=n.value,kl(i)}),r.addEventListener(`change`,()=>{$.sort=r.value,kl(i)}),kl(i)}async function kl(e){try{let t=await sl($);if(t.length===0){e.innerHTML=`
        <div class="mp-empty">
          <i class="fas fa-box-open"></i>
          <p>No packages found${$.search?` for "${Z($.search)}"`:``}.</p>
        </div>
      `;return}e.innerHTML=t.map(Al).join(``)}catch(t){console.error(t),e.innerHTML=`<div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Error loading packages: ${Z(t.message)}</p></div>`}}function Al(e){let t=e.profiles?.display_name||`Unknown`;return`
    <a href="/marketplace/${encodeURIComponent(e.slug)}" class="mp-card">
      <div class="mp-card-top">
        ${e.icon_url?`<img class="mp-card-icon" src="${Z(e.icon_url)}" alt="" loading="lazy">`:`<div class="mp-card-icon mp-card-icon-fallback"><i class="fas fa-cube"></i></div>`}
        <div class="mp-card-title">
          <h3>${Z(e.name)}</h3>
          <span class="mp-card-author">by ${Z(t)}</span>
        </div>
      </div>
      <p class="mp-card-summary">${Z(e.summary)}</p>
      <div class="mp-card-footer">
        <span class="mp-badge">${Z(e.category)}</span>
        <span class="mp-card-meta">
          <span title="Downloads"><i class="fas fa-download"></i> ${Rc(e.download_count)}</span>
          <span title="Latest version"><i class="fas fa-tag"></i> ${Z(e.latest_version||`—`)}</span>
        </span>
      </div>
    </a>
  `}function jl(){return Yc()?``:`
    <div class="mp-demo-banner">
      <i class="fas fa-flask"></i>
      Showing <strong>demo data</strong> — the marketplace backend is not connected yet (see MARKETPLACE_SETUP.md).
    </div>
  `}async function Ml(e,t){e.innerHTML=`<section class="mp-section"><div class="container"><div class="loading">Loading package...</div></div></section>`;let n;try{n=await dl(t)}catch(t){return Ll(e,t.message)}if(!n)return Ll(e,`Package "${t}" was not found.`);let r=[];try{r=await pl(n.id)}catch(e){console.error(e)}let i=r[0]||null,a=n.profiles?.display_name||`Unknown`,o=n.screenshots||[];e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        ${jl()}
        <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
        <div id="mp-mod-bar"></div>

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
              <span class="mp-meta-item"><i class="fas fa-download"></i> ${Rc(n.download_count)} downloads</span>
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
              <button class="mp-tab-btn active" data-tab="overview">Overview</button>
              <button class="mp-tab-btn" data-tab="versions">Versions <span class="mp-tab-count">${r.length}</span></button>
            </div>

            <div id="mp-tab-overview" class="mp-tab-panel">
              <div class="markdown-content mp-description">
                ${n.description_md?Ic(n.description_md):`<p style="color: var(--text-dim);">No description provided.</p>`}
              </div>
            </div>

            <div id="mp-tab-versions" class="mp-tab-panel" hidden>
              ${r.length===0?`<p style="color: var(--text-dim);">No versions published yet.</p>`:r.map((e,t)=>Pl(e,t===0)).join(``)}
            </div>
          </div>

          <aside class="mp-detail-sidebar">
            <button class="download-btn mp-download-main" id="mp-download-latest" ${i?``:`disabled`}>
              <i class="fas fa-download"></i>
              <span>Download${i?` v${Z(i.version)}`:``}</span>
            </button>
            ${i?`<div class="mp-download-sub">${Lc(i.zip_size)} · ZIP archive</div>`:``}

            <div class="mp-info-list">
              <div><span>Latest version</span><strong>${Z(n.latest_version||`—`)}</strong></div>
              <div><span>Last updated</span><strong>${zc(n.updated_at)}</strong></div>
              <div><span>Published</span><strong>${zc(n.created_at)}</strong></div>
              <div><span>License</span><strong>${Z(n.license||`—`)}</strong></div>
              <div><span>Engine version</span><strong>${n.min_engine_version?Z(n.min_engine_version)+`+`:`Any`}</strong></div>
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
          </aside>
        </div>
      </div>
    </section>
  `,Fl(e,n,r,o),Nl(e,n)}async function Nl(e,t){let n=e.querySelector(`#mp-mod-bar`);if(!n)return;let r=await Zc();if(!r)return;let i=r.id===t.owner_id,a=!i&&await il();if(!i&&!a)return;let o=t.status===`published`;n.innerHTML=`
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
        <button class="filter-btn" id="mp-mod-status">
          ${o?`<i class="fas fa-eye-slash"></i> Unpublish`:`<i class="fas fa-globe"></i> Publish`}
        </button>
        <button class="filter-btn mp-mod-delete" id="mp-mod-delete"><i class="fas fa-trash"></i> Delete</button>
      </span>
    </div>
  `,n.querySelector(`#mp-mod-status`).addEventListener(`click`,async n=>{let r=n.currentTarget;r.disabled=!0;try{await wl(t.id,o?`draft`:`published`),Q(o?`"${t.name}" is now hidden from the marketplace.`:`"${t.name}" is now public.`,`success`),Ml(e,t.slug)}catch(e){r.disabled=!1,Q(`Could not change status: ${e.message}`,`error`)}}),n.querySelector(`#mp-mod-delete`).addEventListener(`click`,async e=>{let n=a?`

You are deleting it as ADMIN — it belongs to another user.`:``;if(!confirm(`Delete "${t.name}" permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.${n}`))return;let r=e.currentTarget;r.disabled=!0;try{await Tl(t),Q(`"${t.name}" was deleted.`,`success`),mt(`/marketplace`)}catch(e){r.disabled=!1,Q(`Delete failed: ${e.message}`,`error`)}})}function Pl(e,t){return`
    <div class="mp-version-card">
      <div class="mp-version-head">
        <div class="mp-version-title">
          <strong>v${Z(e.version)}</strong>
          ${t?`<span class="mp-badge mp-badge-accent">Latest</span>`:``}
        </div>
        <div class="mp-version-meta">
          <span>${zc(e.created_at)}</span>
          <span>${Lc(e.zip_size)}</span>
          <span><i class="fas fa-download"></i> ${Rc(e.download_count)}</span>
          <button class="filter-btn mp-version-dl" data-version-id="${Z(e.id)}">
            <i class="fas fa-download"></i> Download
          </button>
        </div>
      </div>
      <div class="markdown-content mp-changelog">
        ${e.changelog_md?Ic(e.changelog_md):`<p style="color: var(--text-dim);">No changelog provided.</p>`}
      </div>
    </div>
  `}function Fl(e,t,n,r){let i=e.querySelector(`#mp-gallery-main`);i&&(i.addEventListener(`click`,()=>Uc(i.src)),e.querySelectorAll(`.mp-thumbs img`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.mp-thumbs img`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),i.src=r[Number(t.dataset.index)]})}));let a=e.querySelectorAll(`.mp-tab-btn`);a.forEach(t=>{t.addEventListener(`click`,()=>{a.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`),e.querySelector(`#mp-tab-overview`).hidden=t.dataset.tab!==`overview`,e.querySelector(`#mp-tab-versions`).hidden=t.dataset.tab!==`versions`})});let o=e=>{let n=hl(e.zip_path);if(!n){Q(`Downloads are disabled in demo mode (backend not connected).`,`info`);return}gl(t.id,e.id);let r=document.createElement(`a`);r.href=n,r.download=``,document.body.appendChild(r),r.click(),r.remove()},s=e.querySelector(`#mp-download-latest`);s&&n[0]&&s.addEventListener(`click`,()=>o(n[0])),e.querySelectorAll(`.mp-version-dl`).forEach(e=>{e.addEventListener(`click`,()=>{let t=n.find(t=>String(t.id)===e.dataset.versionId);t&&o(t)})})}async function Il(e,t){e.innerHTML=`<section class="mp-section"><div class="container"><div class="loading">Loading publisher...</div></div></section>`;try{let[n,r]=await Promise.all([ml(t),sl({ownerId:t,sort:`downloads`})]),i=n?.display_name||`Unknown publisher`;e.innerHTML=`
      <section class="mp-section">
        <div class="container">
          ${jl()}
          <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
          <div class="mp-publisher-header">
            ${n?.avatar_url?`<img src="${Z(n.avatar_url)}" alt="" referrerpolicy="no-referrer">`:`<div class="mp-card-icon-fallback mp-publisher-avatar-fallback"><i class="fas fa-user"></i></div>`}
            <div>
              <h1>${Z(i)}</h1>
              <p>${r.length} package${r.length===1?``:`s`} · ${Rc(r.reduce((e,t)=>e+(t.download_count||0),0))} total downloads</p>
            </div>
          </div>
          <div class="mp-grid">
            ${r.length>0?r.map(Al).join(``):`<div class="mp-empty"><p>This publisher has no public packages.</p></div>`}
          </div>
        </div>
      </section>
    `}catch(t){Ll(e,t.message)}}function Ll(e,t){e.innerHTML=`
    <section class="mp-section">
      <div class="container">
        <a href="/marketplace" class="mp-back"><i class="fas fa-arrow-left"></i> Back to Marketplace</a>
        <div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>${Z(t)}</p></div>
      </div>
    </section>
  `}async function Rl(e,t){let n=(t||`#account`).replace(/^#account\/?/,``).split(`/`).filter(Boolean);if(!Yc()){e.innerHTML=`
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
    `;return}let r=await Zc();if(!r){Bl(e);return}if(n[0]===`admin`)await $l(e,r,n[1]?decodeURIComponent(n[1]):null);else if(n[0]===`new`)Kl(e,r,null);else if(n[0]===`edit`&&n[1]){let t=await zl(e,r,n[1]);t&&Kl(e,r,t)}else if(n[0]===`version`&&n[1]){let t=await zl(e,r,n[1]);t&&Zl(e,r,t)}else await Vl(e,r)}async function zl(e,t,n){let r=await fl(decodeURIComponent(n));return!r||r.owner_id!==t.id?(e.innerHTML=`
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Package not found, or you are not its owner.</p></div>
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
      </div></section>
    `,null):r}function Bl(e){e.innerHTML=`
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
  `,e.querySelector(`#acc-google-btn`).addEventListener(`click`,async()=>{try{await $c()}catch(e){Q(`Sign-in failed: ${e.message}`,`error`)}}),window.addEventListener(`auth-changed`,function t(n){window.removeEventListener(`auth-changed`,t),n.detail.user&&pt().startsWith(`#account`)&&Rl(e,pt())})}async function Vl(e,t){let n=t.user_metadata||{},r=n.full_name||n.name||t.email||`Account`,i=await il();e.innerHTML=`
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
        <h2 class="acc-section-title">My Packages</h2>
        <div id="acc-list"><div class="loading">Loading your packages...</div></div>
      </div>
    </section>
  `;let a=e.querySelector(`#acc-list`);try{let n=await ul(t.id);if(n.length===0){a.innerHTML=`
        <div class="mp-empty">
          <i class="fas fa-box-open"></i>
          <p>You haven't published any packages yet.</p>
          <a href="/account/new" class="download-btn" style="font-size: 1rem; margin-top: 1rem;">Upload your first package</a>
        </div>
      `;return}a.innerHTML=n.map(e=>`
      <div class="acc-pkg-row" data-id="${Z(e.id)}">
        <div class="acc-pkg-info">
          ${e.icon_url?`<img src="${Z(e.icon_url)}" alt="">`:`<div class="mp-card-icon-fallback acc-pkg-icon-fallback"><i class="fas fa-cube"></i></div>`}
          <div>
            <strong>${Z(e.name)}</strong>
            <div class="acc-pkg-meta">
              <span class="mp-badge ${e.status===`published`?`mp-badge-green`:`mp-badge-dim`}">${e.status===`published`?`Published`:`Draft (hidden)`}</span>
              <span><i class="fas fa-tag"></i> v${Z(e.latest_version||`—`)}</span>
              <span><i class="fas fa-download"></i> ${Rc(e.download_count)}</span>
              <span>Updated ${zc(e.updated_at)}</span>
            </div>
          </div>
        </div>
        <div class="acc-pkg-actions">
          <a class="filter-btn" href="/marketplace/${encodeURIComponent(e.slug)}" title="View public page"><i class="fas fa-eye"></i></a>
          <a class="filter-btn" href="/account/version/${encodeURIComponent(e.id)}" title="Publish new version"><i class="fas fa-circle-up"></i> New version</a>
          <a class="filter-btn" href="/account/edit/${encodeURIComponent(e.id)}" title="Edit metadata"><i class="fas fa-pen"></i> Edit</a>
          <button class="filter-btn acc-toggle-status" title="${e.status===`published`?`Hide from the marketplace`:`Make public`}">
            ${e.status===`published`?`<i class="fas fa-eye-slash"></i> Unpublish`:`<i class="fas fa-globe"></i> Publish`}
          </button>
          <button class="filter-btn acc-delete" title="Delete package"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `).join(``),a.querySelectorAll(`.acc-pkg-row`).forEach(r=>{let i=n.find(e=>String(e.id)===r.dataset.id);r.querySelector(`.acc-toggle-status`).addEventListener(`click`,async n=>{let r=n.currentTarget;r.disabled=!0;try{let n=i.status===`published`?`draft`:`published`;await wl(i.id,n),Q(n===`published`?`"${i.name}" is now public.`:`"${i.name}" is now hidden.`,`success`),Vl(e,t)}catch(e){r.disabled=!1,Q(`Could not change status: ${e.message}`,`error`)}}),r.querySelector(`.acc-delete`).addEventListener(`click`,async n=>{if(!confirm(`Delete "${i.name}" permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.`))return;let r=n.currentTarget;r.disabled=!0;try{await Tl(i),Q(`"${i.name}" was deleted.`,`success`),Vl(e,t)}catch(e){r.disabled=!1,Q(`Delete failed: ${e.message}`,`error`)}})})}catch(e){a.innerHTML=`<div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>Error loading packages: ${Z(e.message)}</p></div>`}}function Hl(e,t,n,r,i,a){return`
    <div class="form-field">
      <label for="${e}">${t}${i?` <span class="req">*</span>`:``}</label>
      ${a?`<div class="form-help">${a}</div>`:``}
      <div class="md-editor" data-md-editor="${e}">
        <div class="md-editor-tabs">
          <button type="button" class="md-tab active" data-mode="write">Write</button>
          <button type="button" class="md-tab" data-mode="preview">Preview</button>
          <span class="md-hint"><i class="fab fa-markdown"></i> Markdown supported</span>
        </div>
        <textarea id="${e}" rows="8" placeholder="${Z(r)}" ${i?`required`:``}>${Z(n||``)}</textarea>
        <div class="md-preview markdown-content" hidden></div>
      </div>
    </div>
  `}function Ul(e){e.querySelectorAll(`[data-md-editor]`).forEach(e=>{let t=e.querySelector(`textarea`),n=e.querySelector(`.md-preview`);e.querySelectorAll(`.md-tab`).forEach(r=>{r.addEventListener(`click`,()=>{e.querySelectorAll(`.md-tab`).forEach(e=>e.classList.remove(`active`)),r.classList.add(`active`);let i=r.dataset.mode===`preview`;t.hidden=i,n.hidden=!i,i&&(n.innerHTML=t.value.trim()?Ic(t.value):`<p style="color: var(--text-dim);">Nothing to preview.</p>`)})})})}function Wl(e,t){return`
    <div class="form-field">
      <label for="${e}">Package ZIP${t?` <span class="req">*</span>`:``}</label>
      <div class="form-help">The add-on archive users will download. Maximum size: <strong>25 MB</strong>.</div>
      <input type="file" id="${e}" accept=".zip,application/zip,application/x-zip-compressed" ${t?`required`:``}>
      <div class="form-error" id="${e}-error" hidden></div>
      <div class="form-file-info" id="${e}-info" hidden></div>
    </div>
  `}function Gl(e,t){let n=e.querySelector(`#${t}`),r=e.querySelector(`#${t}-error`),i=e.querySelector(`#${t}-info`);n.addEventListener(`change`,()=>{r.hidden=!0,i.hidden=!0;let e=n.files[0];if(e){if(!/\.zip$/i.test(e.name)){r.textContent=`The package file must be a .zip archive.`,r.hidden=!1,n.value=``;return}if(e.size>26214400){r.textContent=`Maximum ZIP size is 25 MB (your file is ${Lc(e.size)}).`,r.hidden=!1,n.value=``;return}i.innerHTML=`<i class="fas fa-file-zipper"></i> ${Z(e.name)} · ${Lc(e.size)}`,i.hidden=!1}})}function Kl(e,t,n){let r=!!n;e.innerHTML=`
    <section class="mp-section">
      <div class="container mp-narrow">
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title">${r?`Edit "${Z(n.name)}"`:`Publish a New Package`}</h1>
        ${r?``:`<p class="acc-form-subtitle">Fill in the details below. Fields marked with <span class="req">*</span> are required. Everything can be edited later except the URL id.</p>`}

        <form id="pkg-form" class="mp-form" novalidate>
          <h3 class="form-section-title"><i class="fas fa-circle-info"></i> Basic information</h3>

          <div class="form-row">
            <div class="form-field">
              <label for="f-name">Package name <span class="req">*</span></label>
              <input type="text" id="f-name" maxlength="80" required placeholder="e.g. Comet Particles Pro"
                     value="${Z(r?n.name:``)}">
            </div>
            <div class="form-field">
              <label for="f-slug">URL id (slug) <span class="req">*</span></label>
              <div class="form-help">${r?`The URL id cannot be changed after publishing.`:`Lowercase letters, numbers and dashes. Used in the package URL.`}</div>
              <input type="text" id="f-slug" maxlength="60" required pattern="[a-z0-9]+(-[a-z0-9]+)*"
                     placeholder="comet-particles-pro" value="${Z(r?n.slug:``)}" ${r?`disabled`:``}>
            </div>
          </div>

          <div class="form-field">
            <label for="f-summary">Short description <span class="req">*</span></label>
            <div class="form-help">One sentence shown on the package card (10–160 characters).</div>
            <input type="text" id="f-summary" maxlength="160" required
                   placeholder="A short, catchy summary of what your add-on does."
                   value="${Z(r?n.summary:``)}">
          </div>

          ${Hl(`f-description`,`Full description`,r?n.description_md:``,`# My Package

Describe what it does, what it includes and how to use it...`,!0,`The main description shown on the package page.`)}

          <div class="form-row">
            <div class="form-field">
              <label for="f-category">Category <span class="req">*</span></label>
              <select id="f-category" required>
                ${Gc.map(e=>`<option value="${Z(e)}" ${r&&n.category===e?`selected`:``}>${Z(e)}</option>`).join(``)}
              </select>
            </div>
            <div class="form-field">
              <label for="f-license">License <span class="req">*</span></label>
              <select id="f-license" required>
                ${Kc.map(e=>`<option value="${Z(e)}" ${r&&n.license===e?`selected`:``}>${Z(e)}</option>`).join(``)}
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label for="f-tags">Tags</label>
              <div class="form-help">Comma-separated, up to 8. E.g. "particles, vfx, 2d".</div>
              <input type="text" id="f-tags" placeholder="particles, vfx, 2d"
                     value="${Z(r?(n.tags||[]).join(`, `):``)}">
            </div>
            <div class="form-field">
              <label for="f-engine">Minimum engine version</label>
              <input type="text" id="f-engine" placeholder="e.g. 2.1" value="${Z(r&&n.min_engine_version||``)}">
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label for="f-homepage">Website URL</label>
              <input type="url" id="f-homepage" placeholder="https://..." value="${Z(r&&n.homepage_url||``)}">
            </div>
            <div class="form-field">
              <label for="f-repo">Repository URL</label>
              <input type="url" id="f-repo" placeholder="https://github.com/..." value="${Z(r&&n.repo_url||``)}">
            </div>
          </div>

          <h3 class="form-section-title"><i class="fas fa-image"></i> Media</h3>

          <div class="form-row">
            <div class="form-field">
              <label for="f-icon">Icon ${r?``:`(recommended)`}</label>
              <div class="form-help">Square image, PNG/JPG, max 4 MB.${r&&n.icon_url?` Leave empty to keep the current icon.`:``}</div>
              <input type="file" id="f-icon" accept="image/png,image/jpeg,image/webp,image/gif">
            </div>
            <div class="form-field">
              <label for="f-shots">Screenshots</label>
              <div class="form-help">Up to 6 images, max 4 MB each.${r&&(n.screenshots||[]).length?` Selecting new files replaces ALL current screenshots.`:``}</div>
              <input type="file" id="f-shots" accept="image/png,image/jpeg,image/webp,image/gif" multiple>
            </div>
          </div>

          ${r?``:`
            <h3 class="form-section-title"><i class="fas fa-tag"></i> First version</h3>
            <div class="form-row">
              <div class="form-field">
                <label for="f-version">Version <span class="req">*</span></label>
                <div class="form-help">Semantic version: MAJOR.MINOR.PATCH, e.g. 1.0.0.</div>
                <input type="text" id="f-version" required placeholder="1.0.0" value="1.0.0">
              </div>
            </div>
            ${Hl(`f-changelog`,`Changelog`,``,`## 1.0.0

- Initial release`,!0,`What's in this version. Shown in the version history.`)}
            ${Wl(`f-zip`,!0)}
          `}

          <div class="form-error" id="form-error" hidden></div>

          <div class="form-actions">
            <button type="submit" class="download-btn" id="form-submit" style="font-size: 1.05rem;">
              <i class="fas fa-${r?`floppy-disk`:`rocket`}"></i> ${r?`Save changes`:`Publish package`}
            </button>
            <a href="/account" class="filter-btn" style="padding: 0.85rem 1.5rem;">Cancel</a>
          </div>
        </form>
      </div>
    </section>
  `,Ul(e),r||Gl(e,`f-zip`);let i=e.querySelector(`#f-name`),a=e.querySelector(`#f-slug`);if(!r){let e=!1;a.addEventListener(`input`,()=>{e=!0}),i.addEventListener(`input`,()=>{e||(a.value=Hc(i.value))})}let o=e.querySelector(`#pkg-form`),s=e.querySelector(`#form-error`),c=e.querySelector(`#form-submit`);o.addEventListener(`submit`,async i=>{i.preventDefault(),s.hidden=!0;try{let i=ql(e);if(r)Xl(c,!0,`Saving...`),await Sl(t,n,Jl(i),{iconFile:e.querySelector(`#f-icon`).files[0]||null,screenshotFiles:Yl(e)}),Q(`Package updated.`,`success`),mt(`/account`);else{let n=e.querySelector(`#f-version`).value.trim();if(!Bc(n))throw Error(`Version must follow the MAJOR.MINOR.PATCH format, e.g. 1.0.0.`);let r=e.querySelector(`#f-changelog`).value.trim();if(!r)throw Error(`Please write a changelog for the first version.`);let o=e.querySelector(`#f-zip`).files[0];if(!o)throw Error(`Please select the package ZIP file.`);if(o.size>26214400)throw Error(`Maximum ZIP size is 25 MB (your file is ${Lc(o.size)}).`);Xl(c,!0,`Uploading...`),await xl(t,{...i,slug:a.value.trim(),status:`published`,iconFile:e.querySelector(`#f-icon`).files[0]||null,screenshotFiles:Yl(e),version:n,changelogMd:r,zipFile:o}),Q(`Your package is live!`,`success`),mt(`/account`)}}catch(e){console.error(e),s.textContent=e.message,s.hidden=!1,s.scrollIntoView({behavior:`smooth`,block:`center`}),Xl(c,!1,r?`Save changes`:`Publish package`)}})}function ql(e){let t=e.querySelector(`#f-name`).value.trim(),n=e.querySelector(`#f-summary`).value.trim(),r=e.querySelector(`#f-description`).value.trim(),i=e.querySelector(`#f-slug`);if(t.length<3)throw Error(`The package name must be at least 3 characters long.`);if(!i.disabled&&!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(i.value.trim()))throw Error(`The URL id may only contain lowercase letters, numbers and dashes (e.g. "my-cool-addon").`);if(n.length<10)throw Error(`The short description must be at least 10 characters long.`);if(!r)throw Error(`Please write a full description.`);let a=e.querySelector(`#f-tags`).value.split(`,`).map(e=>e.trim().toLowerCase()).filter(Boolean).slice(0,8);for(let t of[`f-homepage`,`f-repo`]){let n=e.querySelector(`#${t}`).value.trim();if(n&&!/^https?:\/\//i.test(n))throw Error(`Links must start with http:// or https://.`)}return{name:t,summary:n,descriptionMd:r,category:e.querySelector(`#f-category`).value,license:e.querySelector(`#f-license`).value,tags:a,minEngineVersion:e.querySelector(`#f-engine`).value.trim()||null,homepageUrl:e.querySelector(`#f-homepage`).value.trim()||null,repoUrl:e.querySelector(`#f-repo`).value.trim()||null}}function Jl(e){return{name:e.name,summary:e.summary,description_md:e.descriptionMd,category:e.category,license:e.license,tags:e.tags,min_engine_version:e.minEngineVersion,homepage_url:e.homepageUrl,repo_url:e.repoUrl}}function Yl(e){let t=Array.from(e.querySelector(`#f-shots`).files||[]);if(t.length>6)throw Error(`You can upload at most 6 screenshots.`);return t}function Xl(e,t,n){e.disabled=t,e.innerHTML=t?`<i class="fas fa-spinner fa-spin"></i> ${Z(n)}`:`<i class="fas fa-rocket"></i> ${Z(n)}`}async function Zl(e,t,n){e.innerHTML=`<section class="mp-section"><div class="container mp-narrow"><div class="loading">Loading...</div></div></section>`;let r=[];try{r=await pl(n.id)}catch(e){console.error(e)}let i=r[0]||null;e.innerHTML=`
    <section class="mp-section">
      <div class="container mp-narrow">
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
        <h1 class="acc-form-title">New version of "${Z(n.name)}"</h1>
        <p class="acc-form-subtitle">
          Current latest version: <strong>${i?`v${Z(i.version)}`:`none`}</strong>${i?` (published ${zc(i.created_at)})`:``}.
          Users will download the new version by default; older versions stay available in the history.
        </p>

        <form id="ver-form" class="mp-form" novalidate>
          <div class="form-row">
            <div class="form-field">
              <label for="v-version">New version <span class="req">*</span></label>
              <div class="form-help">Must be higher than ${i?`v${Z(i.version)}`:`previous versions`} (MAJOR.MINOR.PATCH).</div>
              <input type="text" id="v-version" required placeholder="${i?Ql(i.version):`1.0.0`}"
                     value="${i?Ql(i.version):`1.0.0`}">
            </div>
          </div>

          ${Hl(`v-changelog`,`Changelog`,``,`## What's new

- Added ...
- Fixed ...`,!0,`Tell users what changed in this version (Markdown).`)}

          ${Wl(`v-zip`,!0)}

          <div class="form-error" id="ver-error" hidden></div>

          <div class="form-actions">
            <button type="submit" class="download-btn" id="ver-submit" style="font-size: 1.05rem;">
              <i class="fas fa-circle-up"></i> Publish version
            </button>
            <a href="/account" class="filter-btn" style="padding: 0.85rem 1.5rem;">Cancel</a>
          </div>
        </form>
      </div>
    </section>
  `,Ul(e),Gl(e,`v-zip`);let a=e.querySelector(`#ver-form`),o=e.querySelector(`#ver-error`),s=e.querySelector(`#ver-submit`);a.addEventListener(`submit`,async r=>{r.preventDefault(),o.hidden=!0;try{let r=e.querySelector(`#v-version`).value.trim();if(!Bc(r))throw Error(`Version must follow the MAJOR.MINOR.PATCH format, e.g. 1.2.0.`);if(i&&Vc(r,i.version)<=0)throw Error(`The new version must be higher than the current latest (v${i.version}).`);let a=e.querySelector(`#v-changelog`).value.trim();if(!a)throw Error(`Please write a changelog so users know what changed.`);let o=e.querySelector(`#v-zip`).files[0];if(!o)throw Error(`Please select the new package ZIP file.`);if(o.size>26214400)throw Error(`Maximum ZIP size is 25 MB (your file is ${Lc(o.size)}).`);s.disabled=!0,s.innerHTML=`<i class="fas fa-spinner fa-spin"></i> Uploading...`,await Cl(t,n,{version:r,changelogMd:a,zipFile:o}),Q(`v${r} published!`,`success`),mt(`/account`)}catch(e){console.error(e),o.textContent=e.message,o.hidden=!1,s.disabled=!1,s.innerHTML=`<i class="fas fa-circle-up"></i> Publish version`}})}function Ql(e){let t=e.split(`-`)[0].split(`.`).map(Number);return`${t[0]}.${t[1]}.${(t[2]||0)+1}`}async function $l(e,t,n){if(!await il()){e.innerHTML=`
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-empty"><i class="fas fa-lock"></i><p>This area is for administrators only.</p></div>
        <a href="/account" class="mp-back"><i class="fas fa-arrow-left"></i> Back to My Packages</a>
      </div></section>
    `;return}e.innerHTML=`<section class="mp-section"><div class="container"><div class="loading">Loading all packages...</div></div></section>`;let r;try{r=await ll()}catch(t){e.innerHTML=`<section class="mp-section"><div class="container"><div class="mp-empty"><i class="fas fa-triangle-exclamation"></i><p>${Z(t.message)}</p></div></div></section>`;return}let i=new Map;for(let e of r)i.has(e.owner_id)||i.set(e.owner_id,{ownerId:e.owner_id,name:e.profiles?.display_name||`Unknown user`,avatar:e.profiles?.avatar_url||null,packages:[]}),i.get(e.owner_id).packages.push(e);n?tu(e,t,i.get(n),n):eu(e,i,r.length)}function eu(e,t,n){let r=[...t.values()].sort((e,t)=>t.packages.length-e.packages.length);e.innerHTML=`
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
                <span><i class="fas fa-download"></i> ${Rc(t)}</span>
              </div>
            </div>
          </div>
          <span style="color: var(--text-dim);"><i class="fas fa-chevron-right"></i></span>
        </a>
      `}).join(``)||`<div class="mp-empty"><p>No publishers match that name.</p></div>`};a(``),e.querySelector(`#adm-filter`).addEventListener(`input`,e=>a(e.target.value))}function tu(e,t,n,r){if(!n){e.innerHTML=`
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
                    <span><i class="fas fa-download"></i> ${Rc(e.download_count)}</span>
                    <span>Updated ${zc(e.updated_at)}</span>
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
  `,e.querySelectorAll(`#adm-pkgs .acc-pkg-row`).forEach(i=>{let a=n.packages.find(e=>String(e.id)===i.dataset.id);i.querySelector(`.adm-toggle-status`).addEventListener(`click`,async n=>{let i=n.currentTarget;i.disabled=!0;try{let n=a.status===`published`?`draft`:`published`;await wl(a.id,n),Q(n===`published`?`"${a.name}" is now public.`:`"${a.name}" is now hidden.`,`success`),$l(e,t,r)}catch(e){i.disabled=!1,Q(`Could not change status: ${e.message}`,`error`)}}),i.querySelector(`.adm-delete`).addEventListener(`click`,async i=>{if(!confirm(`Delete "${a.name}" by ${n.name} permanently?\n\nThis removes the package, ALL its versions and all its files. This cannot be undone.`))return;let o=i.currentTarget;o.disabled=!0;try{await Tl(a),Q(`"${a.name}" was deleted.`,`success`),$l(e,t,r)}catch(e){o.disabled=!1,Q(`Delete failed: ${e.message}`,`error`)}})})}function nu(){let e=document.getElementById(`nav-auth`);e&&(Qc(t=>{t&&al(t),ru(e,t),window.dispatchEvent(new CustomEvent(`auth-changed`,{detail:{user:t}}))}),ru(e,null))}function ru(e,t){if(!t){e.innerHTML=`
      <button class="nav-signin-btn" id="nav-signin">
        <i class="fab fa-google"></i><span>Sign in</span>
      </button>
    `,e.querySelector(`#nav-signin`).addEventListener(`click`,async()=>{if(!Yc()){Q(`Login is not available yet: the marketplace backend is not configured. See MARKETPLACE_SETUP.md.`,`error`);return}try{await $c()}catch(e){Q(`Sign-in failed: ${e.message}`,`error`)}});return}let n=t.user_metadata||{},r=n.full_name||n.name||t.email||`Account`,i=n.avatar_url?`<img src="${Z(n.avatar_url)}" alt="" referrerpolicy="no-referrer">`:`<i class="fas fa-user"></i>`;e.innerHTML=`
    <button class="nav-avatar" id="nav-avatar" title="${Z(r)}">${i}</button>
    <div class="nav-menu" id="nav-menu" hidden>
      <div class="nav-menu-name">${Z(r)}</div>
      <a href="/account"><i class="fas fa-cubes"></i> My Packages</a>
      <a href="/account/new"><i class="fas fa-upload"></i> Upload Package</a>
      <button id="nav-signout"><i class="fas fa-right-from-bracket"></i> Sign out</button>
    </div>
  `;let a=e.querySelector(`#nav-avatar`),o=e.querySelector(`#nav-menu`);il().then(t=>{if(!t||o.querySelector(`.nav-menu-admin`))return;let n=document.createElement(`a`);n.href=`#account/admin`,n.className=`nav-menu-admin`,n.innerHTML=`<i class="fas fa-shield-halved"></i> Admin panel`,n.addEventListener(`click`,()=>{o.hidden=!0}),o.insertBefore(n,e.querySelector(`#nav-signout`))}),a.addEventListener(`click`,e=>{e.stopPropagation(),o.hidden=!o.hidden}),document.addEventListener(`click`,()=>{o.hidden=!0}),o.addEventListener(`click`,e=>e.stopPropagation()),o.querySelectorAll(`a`).forEach(e=>e.addEventListener(`click`,()=>{o.hidden=!0})),e.querySelector(`#nav-signout`).addEventListener(`click`,async()=>{try{await el(),Q(`Signed out.`,`success`),pt().startsWith(`#account`)&&mt(`/marketplace`)}catch(e){Q(`Sign-out failed: ${e.message}`,`error`)}})}var iu=document.getElementById(`app`),au=document.querySelectorAll(`.nav-links a`),ou=`Comet Engine — Free 2D Game Engine (C++ & AngelScript)`,su=document.querySelector(`meta[name="description"]`)?.getAttribute(`content`)||``;function cu(e,t){document.title=e||ou;let n=document.querySelector(`meta[name="description"]`);n&&n.setAttribute(`content`,t||su)}function lu(){let e=window.location.hash;if(e.includes(`access_token=`)||e.includes(`error_description=`)){uu(e);return}let n=pt(),r=window.location.pathname;if(document.body.classList.toggle(`docs-active`,n.startsWith(`#docs`)||n.startsWith(`#tutorials/`)),au.forEach(e=>{let t=e.getAttribute(`href`)||``,n=t.startsWith(`/`)&&t!==`/`&&(r===t||r.startsWith(t.replace(/\/$/,``)+`/`));e.classList.toggle(`active`,!!n)}),n===`#home`)cu(ou,su),t(iu);else if(n.startsWith(`#releases`)){let e=n.replace(`#releases`,``).substring(1);cu(`Releases — Comet Engine`,`Download the latest Comet Engine releases and read the patch notes.`),ct(iu,e)}else n.startsWith(`#tutorials`)?ar(iu,n):n.startsWith(`#docs`)?(cu(`Documentation — Comet Engine`,`API reference and documentation for the Comet Engine 2D game engine.`),bt(iu,n)):n.startsWith(`#marketplace`)?(cu(`Marketplace — Comet Engine`,`Browse and download assets and packages for Comet Engine.`),Dl(iu,n)):n.startsWith(`#account`)?(cu(`Account — Comet Engine`,su),Rl(iu,n)):(cu(ou,su),t(iu))}function uu(e){if(e.includes(`error_description=`)){iu.innerHTML=`
      <section class="mp-section"><div class="container mp-narrow">
        <div class="mp-auth-card">
          <i class="fas fa-triangle-exclamation"></i>
          <h2>Sign-in failed</h2>
          <p>${(new URLSearchParams(e.substring(1)).get(`error_description`)||`Unknown error`).replace(/</g,`&lt;`)}</p>
          <a href="/" class="download-btn" style="font-size: 1rem;">Back to Home</a>
        </div>
      </div></section>
    `;return}iu.innerHTML=`
    <section class="mp-section"><div class="container mp-narrow">
      <div class="mp-auth-card"><i class="fas fa-spinner fa-spin"></i><h2>Signing you in...</h2></div>
    </div></section>
  `;let t=Qc(e=>{e&&(t(),mt(`/account`))})}document.addEventListener(`click`,e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target.closest?.(`a`);if(!t)return;let n=t.getAttribute(`href`);!n||!n.startsWith(`/`)||n.startsWith(`//`)||t.target===`_blank`||t.hasAttribute(`download`)||t.getAttribute(`rel`)===`external`||(e.preventDefault(),mt(n))}),window.addEventListener(`popstate`,lu),window.addEventListener(`route-change`,lu),window.addEventListener(`load`,lu),nu();