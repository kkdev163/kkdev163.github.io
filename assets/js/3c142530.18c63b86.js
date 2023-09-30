"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6601],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,m=u["".concat(i,".").concat(y)]||u[y]||f[y]||o;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1311:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={slug:"sentry-sshfs",title:"Sentry\u5e73\u53f0-\u4e3aDocker Swarm\u96c6\u7fa4\u6dfb\u52a0SSHFS\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8",authors:["kkdev163"],tags:["sentry","sshfs"]},s=void 0,l={permalink:"/blog/sentry-sshfs",source:"@site/blog/2019-03-28-sentry-sshfs/index.md",title:"Sentry\u5e73\u53f0-\u4e3aDocker Swarm\u96c6\u7fa4\u6dfb\u52a0SSHFS\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8",description:"\u524d\u8a00",date:"2019-03-28T00:00:00.000Z",formattedDate:"2019\u5e743\u670828\u65e5",tags:[{label:"sentry",permalink:"/blog/tags/sentry"},{label:"sshfs",permalink:"/blog/tags/sshfs"}],readingTime:6.075,hasTruncateMarker:!0,authors:[{name:"kkdev163",title:"Web \u5168\u6808\u5f00\u53d1\u5de5\u7a0b\u5e08@NetEase",url:"https://kkdev163.github.io",imageURL:"https://avatars.githubusercontent.com/u/34838245?v=4",key:"kkdev163"}],frontMatter:{slug:"sentry-sshfs",title:"Sentry\u5e73\u53f0-\u4e3aDocker Swarm\u96c6\u7fa4\u6dfb\u52a0SSHFS\u5206\u5e03\u5f0f\u6587\u4ef6\u5b58\u50a8",authors:["kkdev163"],tags:["sentry","sshfs"]},prevItem:{title:"\u524d\u7aef\u6027\u80fd\u76d1\u63a7\u5e73\u53f0-\u5b58\u50a8\u4e0e\u8ba1\u7b97\u67b6\u6784\u5c55\u671b",permalink:"/blog/wapm-storage"}},i={authorsImageUrls:[void 0]},c=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:3}],p={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u672c\u6587\u9996\u5148\u4ecb\u7ecd\u4e86\u7f51\u6613\u4e91\u97f3\u4e50\u79c1\u6709\u5316\u90e8\u7f72\u7684 Sentry \u5e73\u53f0\u7cfb\u7edf\u67b6\u6784\u548c\u5f53\u524d\u4e1a\u52a1\u4e0a\u9047\u5230\u7684\u5206\u5e03\u5f0f\u5b58\u50a8\u95ee\u9898\uff0c\u6700\u540e\u7ed9\u51fa\u642d\u5efa SSHFS \u5b58\u50a8\u73af\u5883\u89e3\u51b3\u8be5\u95ee\u9898\u7684\u5b9e\u73b0\u6b65\u9aa4\u3002"))}f.isMDXComponent=!0}}]);