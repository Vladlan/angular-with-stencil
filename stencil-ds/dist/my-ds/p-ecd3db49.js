let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.s,u=e=>"object"==(e=typeof e)||"function"===e,f=(e,t,...n)=>{let l=null,s=!1,o=!1,r=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!u(l))&&(l+=""),s&&o?r[r.length-1].o+=l:r.push(s?$(null,l):l),o=s)};c(n);const i=$(e,null);return i.i=t,r.length>0&&(i.u=r),i},$=(e,t)=>({t:0,$:e,o:t,m:null,u:null}),d={},m=(t,n,l)=>{let o,r,c=n.u[l],i=0;if(null!==c.o)o=c.m=s.createTextNode(c.o);else if(o=c.m=s.createElement(c.$),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),c.u)for(i=0;i<c.u.length;++i)r=m(t,c,i),r&&o.appendChild(r);return o},y=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=m(null,l,o),c&&(s[o].m=c,i.insertBefore(c,n)))},p=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},h=(e,t)=>e.$===t.$,w=(e,t)=>{const n=t.m=e.m,l=e.u,s=t.u,o=t.o;null===o?null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],a=t[c],u=l.length-1,f=l[0],$=l[u];for(;o<=c&&r<=u;)null==i?i=t[++o]:null==a?a=t[--c]:null==f?f=l[++r]:null==$?$=l[--u]:h(i,f)?(w(i,f),i=t[++o],f=l[++r]):h(a,$)?(w(a,$),a=t[--c],$=l[--u]):h(i,$)?(w(i,$),e.insertBefore(i.m,a.m.nextSibling),i=t[++o],$=l[--u]):h(a,f)?(w(a,f),e.insertBefore(a.m,i.m),a=t[--c],f=l[++r]):(s=m(t&&t[r],n,r),f=l[++r],s&&i.m.parentNode.insertBefore(s,i.m));o>c?y(e,null==l[u+1]?null:l[u+1].m,n,l,r,u):r>u&&p(t,o,c)})(n,l,t,s):null!==s?(null!==e.o&&(n.textContent=""),y(n,null,t,s,0,s.length-1)):null!==l&&p(l,0,l.length-1):e.o!==o&&(n.data=o)},b=(e,t)=>{t&&!e.p&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.p=t))},g=(e,t)=>{if(e.t|=16,!(4&e.t))return b(e,e.h),B(()=>S(e,t));e.t|=512},S=(e,t)=>{const n=e.g;return C(void 0,()=>M(e,n,t))},M=async(n,l,o)=>{const r=n.S,c=r["s-rc"];o&&(e=>{const t=e.M,n=e.S,l=t.t,o=((e,t)=>{let n=a(t),l=q.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n);((n,l)=>{const s=n.S,o=n.j||$(null,null),r=(e=>e&&e.$===d)(l)?l:f(null,null,l);t=s.tagName,r.$=null,r.t|=4,n.j=r,r.m=o.m=s.shadowRoot||s,e=s["s-sc"],w(o,r)})(n,j(n,l)),c&&(c.map(e=>e()),r["s-rc"]=void 0);{const e=r["s-p"],t=()=>v(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},j=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(e){R(e)}return t},v=e=>{const t=e.S,n=e.h;64&e.t||(e.t|=64,O(t),e.v(t),n||k()),e.p&&(e.p(),e.p=void 0),512&e.t&&z(()=>g(e,!1)),e.t&=-517},k=()=>{O(s.documentElement),z(()=>(e=>{const t=o.ce("appload",{detail:{namespace:"my-ds"}});return e.dispatchEvent(t),t})(l))},C=(e,t)=>e&&e.then?e.then(t):t(),O=e=>e.classList.add("hydrated"),P=(e,t,n)=>{if(t.k){const l=Object.entries(t.k),s=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>T(this).C.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=T(e),o=s.C.get(t),r=s.t,c=s.g;n=((e,t)=>null==e||u(e)?e:1&t?e+"":e)(n,l.k[t][0]),8&r&&void 0!==o||n===o||(s.C.set(t,n),c&&2==(18&r)&&g(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp(()=>{const n=t.get(e);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,n])=>{const l=n[1]||e;return t.set(l,e),l})}}return e},x=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let m,y=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map(e=>e[1].map(t=>{const l={t:t[0],s:t[1],k:t[2],O:t[3]};l.k=t[2];const s=l.s,u=class extends HTMLElement{constructor(e){super(e),L(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){m&&(clearTimeout(m),m=null),y?d.push(this):o.jmp(()=>(e=>{if(0==(1&o.t)){const t=T(e),n=t.M,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){b(t,t.h=n);break}}n.k&&Object.entries(n.k).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=W(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(P(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){R(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=a(n);if(!q.has(t)){const l=()=>{};((e,t,n)=>{let l=q.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,q.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.h,r=()=>g(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this))}disconnectedCallback(){o.jmp(()=>{})}componentOnReady(){return T(this).P}};l.T=e[0],r.includes(s)||i.get(s)||(n.push(s),i.define(s,P(u,l,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),y=!1,d.length?d.map(e=>e.connectedCallback()):o.jmp(()=>m=setTimeout(k,30))},E=new WeakMap,T=e=>E.get(e),A=(e,t)=>E.set(t.g=e,t),L=(e,t)=>{const n={t:0,S:e,M:t,C:new Map};return n.P=new Promise(e=>n.v=e),e["s-p"]=[],e["s-rc"]=[],E.set(e,n)},R=e=>console.error(e),U=new Map,W=e=>{const t=e.s.replace(/-/g,"_"),n=e.T,l=U.get(n);return l?l[t]:import(`./${n}.entry.js`).then(e=>(U.set(n,e),e[t]),R)},q=new Map,F=[],H=[],N=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?z(_):o.raf(_))},V=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){R(e)}e.length=0},_=()=>{V(F),V(H),(n=F.length>0)&&o.raf(_)},z=e=>r().then(e),B=N(H,!0);export{x as b,f as h,r as p,A as r}