(()=>{"use strict";var e,t,r,o,n,i={},a={};function u(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return i[e].call(r.exports,r,r.exports,u),r.loaded=!0,r.exports}u.m=i,u.c=a,e=[],u.O=(t,r,o,n)=>{if(!r){var i=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],n=e[f][2];for(var a=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(u.O).every((e=>u.O[e](r[l])))?r.splice(l--,1):(a=!1,n<i&&(i=n));if(a){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var f=e.length;f>0&&e[f-1][2]>n;f--)e[f]=e[f-1];e[f]=[r,o,n]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);u.r(n);var i={};t=t||[null,r({}),r([]),r(r)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>i[t]=()=>e[t]));return i.default=()=>e,u.d(n,i),n},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>"assets/js/"+({61:"1f391b9e",138:"1a4e3797",490:"e7ce6630",678:"fb621ddb",758:"2e82b1e0"}[e]||e)+"."+{61:"70f37a17",138:"540cc0d2",416:"378206e8",462:"11994293",490:"74b177d6",678:"be41fad9",758:"4a01c77f",780:"8a058272",913:"75a3498f"}[e]+".js",u.miniCssF=e=>{},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="typescript-style-guide-website:",u.l=(e,t,r,i)=>{if(o[e])o[e].push(t);else{var a,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var d=s[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){a=d;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",n+r),a.src=e),o[e]=[t];var c=(t,r)=>{a.onerror=a.onload=null,clearTimeout(p);var n=o[e];if(delete o[e],a.parentNode&&a.parentNode.removeChild(a),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),l&&document.head.appendChild(a)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="/typescript-style-guide/",u.gca=function(e){return e={"1f391b9e":"61","1a4e3797":"138",e7ce6630:"490",fb621ddb:"678","2e82b1e0":"758"}[e]||e,u.p+u.u(e)},(()=>{var e={354:0,869:0};u.f.j=(t,r)=>{var o=u.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var i=u.p+u.u(t),a=new Error;u.l(i,(r=>{if(u.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",a.name="ChunkLoadError",a.type=n,a.request=i,o[1](a)}}),"chunk-"+t,t)}},u.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,i=r[0],a=r[1],l=r[2],s=0;if(i.some((t=>0!==e[t]))){for(o in a)u.o(a,o)&&(u.m[o]=a[o]);if(l)var f=l(u)}for(t&&t(r);s<i.length;s++)n=i[s],u.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return u.O(f)},r=self.webpackChunktypescript_style_guide_website=self.webpackChunktypescript_style_guide_website||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();