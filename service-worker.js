if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const f=e=>r(e,o),u={module:{uri:o},exports:l,require:f};i[o]=Promise.all(s.map((e=>u[e]||f(e)))).then((e=>(n(...e),l)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"tom-f"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/404.html",revision:"6438e276baf38eb37546485b1641e1f8"},{url:"/css/app.a514a4f5.css",revision:null},{url:"/fonts/bebasneue-regular-webfont.1896d7c6.woff",revision:null},{url:"/fonts/bebasneue-regular-webfont.5aff0c6c.woff2",revision:null},{url:"/img/InitialsLogo.svg",revision:"374a4b60315618bfd7d3ee1aab216879"},{url:"/img/InitialsLogoAlternate.svg",revision:"16f0f609c289b2544d2c51abab893b20"},{url:"/img/InitialsLogoUpdated.svg",revision:"c70d77cf9ab70a7b002192a12d60c28d"},{url:"/img/down-green.png",revision:"f60d1111b5aa22229043410cb1718115"},{url:"/img/error.b048571b.svg",revision:null},{url:"/img/play-pause.083fcb50.svg",revision:null},{url:"/img/video-play.10e40cfa.svg",revision:null},{url:"/index.html",revision:"8cbfff2506447dadc79f9a8030040a79"},{url:"/js/app.f75d819c.js",revision:null},{url:"/js/chunk-vendors.0ccf1708.js",revision:null},{url:"/manifest.json",revision:"34a3320ce166f5540504880a64797618"},{url:"/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
