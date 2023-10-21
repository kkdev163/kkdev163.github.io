"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,b=u["".concat(i,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={slug:"tsdb-part2",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0b)",authors:["kkdev163"],tags:["\u65f6\u5e8f\u6570\u636e\u5e93\u3001clickhouse\u3001es"]},c=void 0,l={permalink:"/blog/tsdb-part2",source:"@site/blog/2023-04-28-tsdb-part2/index.md",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0b)",description:"\u4e00. \u524d\u8a00",date:"2023-04-28T00:00:00.000Z",formattedDate:"2023\u5e744\u670828\u65e5",tags:[{label:"\u65f6\u5e8f\u6570\u636e\u5e93\u3001clickhouse\u3001es",permalink:"/blog/tags/\u65f6\u5e8f\u6570\u636e\u5e93\u3001clickhouse\u3001es"}],readingTime:16.875,hasTruncateMarker:!0,authors:[{name:"kkdev163",title:"Web \u5168\u6808\u5f00\u53d1\u5de5\u7a0b\u5e08@NetEase",url:"https://kkdev163.github.io",imageURL:"https://avatars.githubusercontent.com/u/34838245?v=4",key:"kkdev163"}],frontMatter:{slug:"tsdb-part2",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0b)",authors:["kkdev163"],tags:["\u65f6\u5e8f\u6570\u636e\u5e93\u3001clickhouse\u3001es"]},nextItem:{title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0a)",permalink:"/blog/tsdb-part1"}},i={authorsImageUrls:[void 0]},s=[{value:"\u4e00. \u524d\u8a00",id:"\u4e00-\u524d\u8a00",level:3}],p={toc:s},u="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4e00-\u524d\u8a00"},"\u4e00. \u524d\u8a00"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/blog/tsdb-part1"},"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0a)"),"\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5206\u6790\u3001\u65f6\u5e8f\u6570\u636e\u5e93\u7684\u7279\u70b9 \u548c \u7ecf\u5178\u65f6\u5e8f\u6570\u636e\u5e93 InfluxDB\u3002\u672c\u7bc7\u6587\u7ae0\u5c06\u7ee7\u7eed\u56f4\u7ed5\u65f6\u5e8f\u6570\u636e\u5206\u6790\u4e13\u9898\uff0c\u4ecb\u7ecd ElasticSearch\u3001ClickHouse \u4e24\u6b3e\u6570\u636e\u5e93\u5728\u65f6\u5e8f\u5206\u6790\u4e0a\u7684\u5e94\u7528\u3002"))}f.isMDXComponent=!0}}]);