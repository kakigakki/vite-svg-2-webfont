"use strict";var k=Object.create;var m=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var B=Object.getOwnPropertyNames;var Y=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var V=(e,t)=>{for(var n in t)m(e,n,{get:t[n],enumerable:!0})},O=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of B(t))!j.call(e,a)&&a!==n&&m(e,a,{get:()=>t[a],enumerable:!(r=z(t,a))||r.enumerable});return e};var P=(e,t,n)=>(n=e!=null?k(Y(e)):{},O(t||!e||!e.__esModule?m(n,"default",{value:e,enumerable:!0}):n,e)),q=e=>O(m({},"__esModule",{value:!0}),e);var se={};V(se,{default:()=>ne,templates:()=>re,viteSvgToWebfont:()=>L});module.exports=q(se);var D=require("util"),w=P(require("@vusion/webfonts-generator"),1);var G=require("fs"),p=require("path"),f=require("fs/promises"),E,W={eot:"application/vnd.ms-fontobject",svg:"image/svg+xml",ttf:"application/x-font-ttf",woff:"application/font-woff",woff2:"font/woff2"};async function K(e,t){let n=(0,p.resolve)(e,t);try{return await(0,f.access)(n,G.constants.R_OK),!0}catch{return!1}}async function J(e,{eventType:t,filename:n},r,a=K){t!=="rename"||!n.endsWith(".svg")||!await a(e,n)||r({eventType:t,filename:n})}async function $(e,t,n){try{E=(0,f.watch)(e,{signal:t});for await(let r of E)J(e,r,n)}catch(r){if(r.name==="AbortError")return;throw r}}var I="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";function M(e=8){let t="";for(let n=0;n<e;n++){let r=Math.floor(Math.random()*I.length);t+=I[r]}return t}function N(e){var n;return!!((n=/(?:\.([^.]+))?$/.exec(e||""))!=null&&n[1])}async function x(e,t){let n={mode:511,recursive:!0};await(0,f.mkdir)((0,p.dirname)(t),n),await(0,f.writeFile)(t,e)}var _=P(require("glob"),1),l=require("path");var g=class extends Error{},h=class extends Error{constructor(t){super(`WriteFiles option received invalid types: ${t.join(", ")}`)}};var{sync:Q}=_.default,R=["html","css","fonts"];function X({types:e}){return Array.isArray(e)?e:e?[e]:["eot","woff","woff2","ttf","svg"]}function b({files:e,context:t}){e||=["*.svg"];let n=e.flatMap(r=>Q(r,{cwd:t})).map(r=>`${t}/${r}`);if(!n.length)throw new g("The specified file globs did not resolve any files in the context.");return n}function S(e,t,n,r){return t?N(t)?(0,l.resolve)(e,t):(0,l.resolve)(e,t,`${n.toLowerCase()}.${r}`):(0,l.resolve)(e,`${n.toLowerCase()}.${r}`)}function Z({generateFiles:e}){if(!e||typeof e=="boolean")return e?R:[];Array.isArray(e)||(e=[e]);let t=e.filter(n=>!R.includes(n));if(t.length)throw new h(t);return e}function ee(e){let t=new Set(Z(e));return{fonts:t.has("fonts"),html:t.has("html"),css:t.has("css")}}function C(e){let t=X(e),n=b(e),r=ee(e);return e.dest||=(0,l.resolve)(e.context,"..","artifacts"),e.fontName||="iconfont",{files:n,types:t,order:t,fontName:e.fontName,fontHeight:e.fontHeight||1e3,codepoints:e.codepoints||{},templateOptions:{baseSelector:e.baseSelector||".icon",classPrefix:e.classPrefix??"icon-"},html:r.html,css:r.css,ligature:e.ligature??!0,formatOptions:e.formatOptions||{},dest:e.dest.endsWith("/")?e.dest:`${e.dest}/`,writeFiles:r.fonts,cssDest:S(e.dest,e.cssDest,e.fontName,"css"),htmlDest:S(e.dest,e.htmlDest,e.fontName,"html"),...e.cssTemplate&&{cssTemplate:(0,l.resolve)(e.dest,e.cssTemplate)},...e.cssFontsUrl&&{cssFontsUrl:(0,l.resolve)(e.dest,e.cssFontsUrl)},...e.htmlTemplate&&{htmlTemplate:(0,l.resolve)(e.dest,e.htmlTemplate)},...typeof e.fixedWidth<"u"&&{fixedWidth:e.fixedWidth},...typeof e.centerHorizontally<"u"&&{centerHorizontally:e.centerHorizontally},...typeof e.normalize<"u"&&{normalize:e.normalize},...typeof e.round<"u"&&{round:e.round},...typeof e.descent<"u"&&{descent:e.descent}}}var A=new AbortController,te=(0,D.promisify)(w.default),H="virtual:vite-svg-2-webfont.css",u=`\0${H}`;function L(e){let t=C(e),n,r,a,y,o,F=async i=>{i&&(t.files=b(e)),n&&(t.writeFiles=!1),o=await te(t);let c=!t.writeFiles&&(t.css||t.html);if(!n&&c){let s=[];t.css&&s.push(x(o.generateCss(),t.cssDest)),t.html&&s.push(x(o.generateHtml(),t.htmlDest)),await Promise.all(s)}if(i){let s=a==null?void 0:a.getModuleById(u);s&&y&&y(s)}};return{name:"vite-svg-2-webfont",enforce:"pre",configResolved(i){n=i.command==="build"},resolveId(i){if(i===H)return u},transform(i,c){var s;if(c===u)return((s=o==null?void 0:o.generateCss)==null?void 0:s.call(o,r))||""},load(i){if(i===u)return u},async buildStart(){if(n||$(e.context,A.signal,()=>F(!0)),await F(),n){let i=t.cssFontsUrl||"assets",c=t.types.map(s=>[s,`/${this.getFileName(this.emitFile({type:"asset",fileName:`assets/${t.fontName}-${M()}.${s}`,source:o==null?void 0:o[s]})).replace("assets",i)}`]);r=Object.fromEntries(c)}},configureServer({middlewares:i,reloadModule:c,moduleGraph:s}){for(let T of t.types){let U=`${t.fontName}.${T}`;i.use(`/${U}`,(oe,d)=>{if(a=s,y=c,!o)return d.statusCode=404,d.end();let v=o[T];return d.setHeader("content-type",W[T]),d.setHeader("content-length",v.length),d.statusCode=200,d.end(v)})}},buildEnd(){A.abort()}}}var ne=L,re=w.default.templates;0&&(module.exports={templates,viteSvgToWebfont});
