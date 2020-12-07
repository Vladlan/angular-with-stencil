var __extends=this&&this.__extends||function(){var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n))e[n]=t[n]};return e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();var __awaiter=this&&this.__awaiter||function(e,t,n,r){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{s(r.next(e))}catch(t){i(t)}}function l(e){try{s(r["throw"](e))}catch(t){i(t)}}function s(e){e.done?n(e.value):a(e.value).then(o,l)}s((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function l(e){return function(t){return s([e,t])}}function s(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=t.call(e,n)}catch(l){o=[6,l];a=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),a=0,t=0;t<n;t++)for(var i=arguments[t],o=0,l=i.length;o<l;o++,a++)r[a]=i[o];return r};System.register([],(function(e,t){"use strict";return{execute:function(){var n=this;var r=e("N","my-ds");var a;var i;var o=false;var l=e("w",typeof window!=="undefined"?window:{});var s=e("C",l.CSS);var u=e("d",l.document||{head:{}});var f=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}});var $=function(){return(u.head.attachShadow+"").indexOf("[native")>-1}();var c=e("a",(function(e){return Promise.resolve(e)}));var v=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h="{visibility:hidden}.hydrated{visibility:inherit}";var d=function(e,t){if(t===void 0){t=""}{return function(){return}}};var m=function(e,t){{return function(){return}}};var p=new WeakMap;var g=function(e,t,n){var r=oe.get(e);if(v&&n){r=r||new CSSStyleSheet;r.replace(t)}else{r=t}oe.set(e,r)};var y=function(e,t,n,r){var a=w(t);var i=oe.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var o=p.get(e);var l=void 0;if(!o){p.set(e,o=new Set)}if(!o.has(a)){{if(f.$cssShim$){l=f.$cssShim$.createHostStyle(r,a,i,!!(t.$flags$&10));var s=l["s-sc"];if(s){a=s;o=null}}else{l=u.createElement("style");l.innerHTML=i}e.insertBefore(l,e.querySelector("link"))}if(o){o.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var b=function(e){var t=e.$cmpMeta$;var n=e.$hostElement$;var r=t.$flags$;var a=d("attachStyles",t.$tagName$);var i=y($&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$,n);if(r&10){n["s-sc"]=i;n.classList.add(i+"-h")}a()};var w=function(e,t){return"sc-"+e.$tagName$};var S=function(e){return e!=null};var _=function(e){e=typeof e;return e==="object"||e==="function"};var R=e("h",(function(e,t){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}var a=null;var i=false;var o=false;var l=[];var s=function(t){for(var n=0;n<t.length;n++){a=t[n];if(Array.isArray(a)){s(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!_(a)){a=String(a)}if(i&&o){l[l.length-1].$text$+=a}else{l.push(i?x(null,a):a)}o=i}}};s(n);var u=x(e,null);u.$attrs$=t;if(l.length>0){u.$children$=l}return u}));var x=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return n};var N={};var C=function(e){return e&&e.$tag$===N};var E=function(e,t,n,r){var i=t.$children$[n];var o=0;var l;var s;if(i.$text$!==null){l=i.$elm$=u.createTextNode(i.$text$)}else{l=i.$elm$=u.createElement(i.$tag$);if(S(a)&&l["s-si"]!==a){l.classList.add(l["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){s=E(e,i,o);if(s){l.appendChild(s)}}}}return l};var M=function(e,t,n,r,a,o){var l=e;var s;if(l.shadowRoot&&l.tagName===i){l=l.shadowRoot}for(;a<=o;++a){if(r[a]){s=E(null,n,a);if(s){r[a].$elm$=s;l.insertBefore(s,t)}}}};var j=function(e,t,n,r,a){for(;t<=n;++t){if(r=e[t]){a=r.$elm$;a.remove()}}};var k=function(e,t,n,r){var a=0;var i=0;var o=t.length-1;var l=t[0];var s=t[o];var u=r.length-1;var f=r[0];var $=r[u];var c;while(a<=o&&i<=u){if(l==null){l=t[++a]}else if(s==null){s=t[--o]}else if(f==null){f=r[++i]}else if($==null){$=r[--u]}else if(P(l,f)){O(l,f);l=t[++a];f=r[++i]}else if(P(s,$)){O(s,$);s=t[--o];$=r[--u]}else if(P(l,$)){O(l,$);e.insertBefore(l.$elm$,s.$elm$.nextSibling);l=t[++a];$=r[--u]}else if(P(s,f)){O(s,f);e.insertBefore(s.$elm$,l.$elm$);s=t[--o];f=r[++i]}else{{c=E(t&&t[i],n,i);f=r[++i]}if(c){{l.$elm$.parentNode.insertBefore(c,l.$elm$)}}}}if(a>o){M(e,r[u+1]==null?null:r[u+1].$elm$,n,r,i,u)}else if(i>u){j(t,a,o)}};var P=function(e,t){if(e.$tag$===t.$tag$){return true}return false};var O=function(e,t){var n=t.$elm$=e.$elm$;var r=e.$children$;var a=t.$children$;var i=t.$text$;if(i===null){if(r!==null&&a!==null){k(n,r,t,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}M(n,null,t,a,0,a.length-1)}else if(r!==null){j(r,0,r.length-1)}}else if(e.$text$!==i){n.data=i}};var A=function(e,t){var n=e.$hostElement$;var r=e.$vnode$||x(null,null);var o=C(t)?t:R(null,null,t);i=n.tagName;o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=r.$elm$=n.shadowRoot||n;{a=n["s-sc"]}O(r,o)};var L=function(e,t,n){var r=f.ce(t,n);e.dispatchEvent(r);return r};var B=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var T=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}B(e,e.$ancestorComponent$);var n=function(){return I(e,t)};return ve(n)};var I=function(e,t){var n=d("scheduleUpdate",e.$cmpMeta$.$tagName$);var r=e.$lazyInstance$;var a;n();return q(a,(function(){return U(e,r,t)}))};var U=function(e,t,r){return __awaiter(n,void 0,void 0,(function(){var n,a,i,o,l,s;return __generator(this,(function(u){n=e.$hostElement$;a=d("update",e.$cmpMeta$.$tagName$);i=n["s-rc"];if(r){b(e)}o=d("render",e.$cmpMeta$.$tagName$);{{{A(e,H(e,t))}}}if(f.$cssShim$){f.$cssShim$.updateHost(n)}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}o();a();{l=n["s-p"];s=function(){return z(e)};if(l.length===0){s()}else{Promise.all(l).then(s);e.$flags$|=4;l.length=0}}return[2]}))}))};var H=function(e,t){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(n){re(n)}return t};var z=function(e){var t=e.$cmpMeta$.$tagName$;var n=e.$hostElement$;var r=d("postUpdate",t);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{W(n)}r();{e.$onReadyResolve$(n);if(!a){V()}}}else{r()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){ce((function(){return T(e,false)}))}e.$flags$&=~(4|512)}};var V=function(e){{W(u.documentElement)}ce((function(){return L(l,"appload",{detail:{namespace:r}})}))};var q=function(e,t){return e&&e.then?e.then(t):t()};var W=function(e){return e.classList.add("hydrated")};var F=function(e,t){if(e!=null&&!_(e)){if(t&1){return String(e)}return e}return e};var G=function(e,t){return ee(e).$instanceValues$.get(t)};var D=function(e,t,n,r){var a=ee(e);var i=a.$instanceValues$.get(t);var o=a.$flags$;var l=a.$lazyInstance$;n=F(n,r.$members$[t][0]);if((!(o&8)||i===undefined)&&n!==i){a.$instanceValues$.set(t,n);if(l){if((o&(2|16))===2){T(a,false)}}}};var J=function(e,t,n){if(t.$members$){var r=Object.entries(t.$members$);var a=e.prototype;r.map((function(e){var r=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,r,{get:function(){return G(this,r)},set:function(e){D(this,r,e,t)},configurable:true,enumerable:true})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,t,n){var r=this;f.jmp((function(){var t=i.get(e);r[t]=n===null&&typeof r[t]==="boolean"?false:n}))};e.observedAttributes=r.filter((function(e){var t=e[0],n=e[1];return n[0]&15})).map((function(e){var t=e[0],n=e[1];var r=n[1]||t;i.set(r,t);return r}))}}return e};var K=function(e,r,a,i,o){return __awaiter(n,void 0,void 0,(function(){var e,n,i,l,s,u,f;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,5];r.$flags$|=32;o=ie(a);if(!o.then)return[3,2];e=m();return[4,o];case 1:o=$.sent();e();$.label=2;case 2:if(!o.isProxied){J(o,a,2);o.isProxied=true}n=d("createInstance",a.$tagName$);{r.$flags$|=8}try{new o(r)}catch(c){re(c)}{r.$flags$&=~8}n();if(!o.style)return[3,5];i=o.style;l=w(a);if(!!oe.has(l))return[3,5];s=d("registerStyles",a.$tagName$);if(!(a.$flags$&8))return[3,4];return[4,t.import("./p-6e8a551d.system.js").then((function(e){return e.scopeCss(i,l,false)}))];case 3:i=$.sent();$.label=4;case 4:g(l,i,!!(a.$flags$&1));s();$.label=5;case 5:u=r.$ancestorComponent$;f=function(){return T(r,true)};if(u&&u["s-rc"]){u["s-rc"].push(f)}else{f()}return[2]}}))}))};var Q=function(e){if((f.$flags$&1)===0){var t=ee(e);var n=t.$cmpMeta$;var r=d("connectedCallback",n.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){B(t,t.$ancestorComponent$=a);break}}}if(n.$members$){Object.entries(n.$members$).map((function(t){var n=t[0],r=t[1][0];if(r&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{K(e,t,n)}}r()}};var X=function(e){if((f.$flags$&1)===0){var t=ee(e);if(f.$cssShim$){f.$cssShim$.removeHost(e)}}};var Y=e("b",(function(e,t){if(t===void 0){t={}}var n=d();var r=[];var a=t.exclude||[];var i=l.customElements;var o=u.head;var s=o.querySelector("meta[charset]");var c=u.createElement("style");var v=[];var m;var p=true;Object.assign(f,t);f.$resourcesUrl$=new URL(t.resourcesUrl||"./",u.baseURI).href;e.map((function(e){return e[1].map((function(t){var n={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{n.$members$=t[2]}if(!$&&n.$flags$&1){n.$flags$|=8}var o=n.$tagName$;var l=function(e){__extends(t,e);function t(t){var r=e.call(this,t)||this;t=r;ne(t,n);if(n.$flags$&1){if($){{t.attachShadow({mode:"open"})}}else if(!("shadowRoot"in t)){t.shadowRoot=t}}return r}t.prototype.connectedCallback=function(){var e=this;if(m){clearTimeout(m);m=null}if(p){v.push(this)}else{f.jmp((function(){return Q(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;f.jmp((function(){return X(e)}))};t.prototype.componentOnReady=function(){return ee(this).$onReadyPromise$};return t}(HTMLElement);n.$lazyBundleId$=e[0];if(!a.includes(o)&&!i.get(o)){r.push(o);i.define(o,J(l,n,1))}}))}));{c.innerHTML=r+h;c.setAttribute("data-styles","");o.insertBefore(c,s?s.nextSibling:o.firstChild)}p=false;if(v.length){v.map((function(e){return e.connectedCallback()}))}else{{f.jmp((function(){return m=setTimeout(V,30)}))}}n()}));var Z=new WeakMap;var ee=function(e){return Z.get(e)};var te=e("r",(function(e,t){return Z.set(t.$lazyInstance$=e,t)}));var ne=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Z.set(e,n)};var re=function(e){return console.error(e)};var ae=new Map;var ie=function(e,n,r){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var o=ae.get(i);if(o){return o[a]}return t.import("./"+i+".entry.js"+"").then((function(e){{ae.set(i,e)}return e[a]}),re)};var oe=new Map;var le=[];var se=[];var ue=function(e,t){return function(n){e.push(n);if(!o){o=true;if(t&&f.$flags$&4){ce($e)}else{f.raf($e)}}}};var fe=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(n){re(n)}}e.length=0};var $e=function(){fe(le);{fe(se);if(o=le.length>0){f.raf($e)}}};var ce=function(e){return c().then(e)};var ve=ue(se,true)}}}));