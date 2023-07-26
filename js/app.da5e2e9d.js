(function(){"use strict";var e={8982:function(e,t,r){var n=r(9242),o=r(3396),i=r(7139),a=r(4870);const l=(0,a.iH)(""),s={class:"flex flex-col w-screen h-screen bg-white"},c={class:"flex flex-col justify-center items-center font-semibold text-gray-500 mb-4"},u={class:"flex justify-center items-center"},f=(0,o._)("span",{class:"ml-1"},"Github",-1),p=[f],d={class:"my-2 text-sm text-gray-500 font-semibold"};var m=(0,o.aZ)({__name:"App",setup(e){const t="https://github.com/Haojen/Helper-for-Twitter";return(e,r)=>{const f=(0,o.up)("router-view"),m=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Wm)(n.uT,{name:"fade"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"flex-1"})])),_:1}),(0,o._)("footer",c,[(0,o._)("div",u,[(0,o.Wm)(m,{to:"/",class:(0,i.C_)(["mx-2 border-b-4 border-transparent","home"===(0,a.SU)(l)&&"border-gray-400"])},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1},8,["class"]),(0,o.Wm)(m,{to:"help",class:(0,i.C_)(["mx-2 border-b-4 border-transparent","help"===(0,a.SU)(l)&&"border-gray-400"])},{default:(0,o.w5)((()=>[(0,o.Uk)("Help")])),_:1},8,["class"]),(0,o.Wm)(m,{to:"privacy",class:(0,i.C_)(["mx-2 border-b-4 border-transparent","privacy"===(0,a.SU)(l)&&"border-gray-400"])},{default:(0,o.w5)((()=>[(0,o.Uk)("Privacy")])),_:1},8,["class"]),(0,o._)("a",{href:t,class:"mx-2 flex justify-center items-center border-b-4 border-transparent"},p)]),(0,o._)("div",d,[(0,o._)("span",null,"Copyright © "+(0,i.zw)((new Date).getFullYear())+" HAOZHEN MA",1)])])])}}});const h=m;var b=h,v=r(2483),g=r.p+"img/Helper-for-Twitter-en-white.30f8c51b.png",y=r.p+"img/chrome-webstore.fb631838.svg",_=r.p+"img/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.a2e763b8.svg";const w={class:"w-full h-full"},x=(0,o._)("h2",{class:"text-2xl text-center font-semibold md:w-5/12 mx-2"},[(0,o._)("img",{src:g,alt:""})],-1),k=(0,o._)("img",{class:"rounded-lg border",style:{height:"54px"},src:y,alt:""},null,-1),j=[k],C=(0,o._)("img",{style:{height:"52px"},src:_,alt:""},null,-1),O=[C];var S=(0,o.aZ)({__name:"Home",setup(e){const t="itms-apps://itunes.apple.com/app/id6444109404",r="https://chrome.google.com/webstore/detail/planet-tab/jcedhcihkblmpjhkbjobchnonaackgjl";return(e,n)=>((0,o.wg)(),(0,o.iD)("main",w,[(0,o._)("article",{class:"relative z-10 w-full h-full flex flex-col justify-center items-center"},[x,(0,o._)("section",{class:"mt-12 mx-2 flex justify-center items-center flex-wrap"},[(0,o._)("a",{class:"mx-4 my-4",href:r},j),(0,o._)("a",{class:"mx-2",href:t},O)])])]))}});const T=S;var A=T;const E=[{path:"/",name:"home",component:A},{path:"/help",name:"help",component:()=>r.e(313).then(r.bind(r,3313))},{path:"/privacy",name:"privacy",component:()=>r.e(637).then(r.bind(r,6637))}],H=(0,v.p7)({history:(0,v.r5)("/Helper-for-Twitter-Website/"),routes:E});H.beforeEach(((e,t)=>{l.value=e.name}));var U=H;(0,n.ri)(b).use(U).mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],i=e[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+"."+{313:"b5fe85ed",637:"f2aa9e9e"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+e+".3406b374.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="helper-for-twitter:";r.l=function(n,o,i,a){if(e[n])e[n].push(o);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var f=c[u];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){l=f;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.setAttribute("data-webpack",t+i),l.src=n),e[n]=[o];var p=function(t,r){l.onerror=l.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/Helper-for-Twitter-Website/"}(),function(){var e=function(e,t,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],i=o.getAttribute("data-href");if(i===e||i===t)return o}},n=function(n){return new Promise((function(o,i){var a=r.miniCssF(n),l=r.p+a;if(t(a,l))return o();e(n,l,o,i)}))},o={143:0};r.f.miniCss=function(e,t){var r={313:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=i);var a=r.p+r.u(t),l=new Error,s=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}};r.l(a,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],l=n[1],s=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var u=s(r)}for(t&&t(n);c<a.length;c++)i=a[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self["webpackChunkhelper_for_twitter"]=self["webpackChunkhelper_for_twitter"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(8982)}));n=r.O(n)})();
//# sourceMappingURL=app.da5e2e9d.js.map