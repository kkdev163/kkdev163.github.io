"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9619],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var l=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=l.createContext({}),i=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},m=function(t){var e=i(t.components);return l.createElement(o.Provider,{value:e},t.children)},k="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),k=i(n),d=a,c=k["".concat(o,".").concat(d)]||k[d]||s[d]||r;return n?l.createElement(c,p(p({ref:e},m),{},{components:n})):l.createElement(c,p({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,p=new Array(r);p[0]=d;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[k]="string"==typeof t?t:a,p[1]=u;for(var i=2;i<r;i++)p[i]=n[i];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5164:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>u,toc:()=>i});var l=n(7462),a=(n(7294),n(3905));const r={slug:"tsdb-part1",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0a)",authors:["kkdev163"],tags:["\u65f6\u5e8f\u6570\u636e\u5e93\u3001influxdb"]},p=void 0,u={permalink:"/blog/tsdb-part1",source:"@site/blog/2023-03-16-tsdb-part1/index.md",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0a)",description:"\u4e00. \u524d\u8a00",date:"2023-03-16T00:00:00.000Z",formattedDate:"2023\u5e743\u670816\u65e5",tags:[{label:"\u65f6\u5e8f\u6570\u636e\u5e93\u3001influxdb",permalink:"/blog/tags/\u65f6\u5e8f\u6570\u636e\u5e93\u3001influxdb"}],readingTime:15.27,hasTruncateMarker:!1,authors:[{name:"kkdev163",title:"Web \u5168\u6808\u5f00\u53d1\u5de5\u7a0b\u5e08@NetEase",url:"https://kkdev163.github.io",imageURL:"https://avatars.githubusercontent.com/u/34838245?v=4",key:"kkdev163"}],frontMatter:{slug:"tsdb-part1",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0a)",authors:["kkdev163"],tags:["\u65f6\u5e8f\u6570\u636e\u5e93\u3001influxdb"]},prevItem:{title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0b)",permalink:"/blog/tsdb-part2"},nextItem:{title:"ES(ElasticSearch) \u641c\u7d22\u57fa\u672c\u6982\u5ff5\u7b80\u4ecb",permalink:"/blog/elasticsearch-basic"}},o={authorsImageUrls:[void 0]},i=[{value:"\u4e00. \u524d\u8a00",id:"\u4e00-\u524d\u8a00",level:2},{value:"\u4e8c. \u65f6\u5e8f\u6570\u636e\u5e93\u7b80\u4ecb",id:"\u4e8c-\u65f6\u5e8f\u6570\u636e\u5e93\u7b80\u4ecb",level:2},{value:"2.1 \u65f6\u5e8f\u6570\u636e\u5206\u6790",id:"21-\u65f6\u5e8f\u6570\u636e\u5206\u6790",level:3},{value:"2.2 \u65f6\u5e8f\u6570\u636e\u5e93\u7279\u70b9",id:"22-\u65f6\u5e8f\u6570\u636e\u5e93\u7279\u70b9",level:3},{value:"\u4e09. InfluxDB",id:"\u4e09-influxdb",level:2},{value:"3.1 \u7b80\u4ecb",id:"31-\u7b80\u4ecb",level:3},{value:"3.2 \u5728 Corona \u4e2d\u7684\u5e94\u7528\u573a\u666f",id:"32-\u5728-corona-\u4e2d\u7684\u5e94\u7528\u573a\u666f",level:3},{value:"3.3 \u96c6\u7fa4\u90e8\u7f72",id:"33-\u96c6\u7fa4\u90e8\u7f72",level:3},{value:"\u56db.\u5c0f\u7ed3",id:"\u56db\u5c0f\u7ed3",level:2}],m={toc:i},k="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,l.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00-\u524d\u8a00"},"\u4e00. \u524d\u8a00"),(0,a.kt)("p",null,"\u5728 Corona \u5e73\u53f0\u7684\u6280\u672f\u4f53\u7cfb\u5efa\u8bbe\u4e2d\uff0c\u65f6\u5e8f\u6570\u636e\u5e93\u627f\u62c5\u4e86\u65f6\u5e8f\u6570\u636e\u7684\u300c\u5b58\u50a8\u300d\u548c\u300c\u5206\u6790\u300d \u7684\u5173\u952e\u4f5c\u7528\u3002\u672c\u7cfb\u5217\u6587\u7ae0\u5c06\u5206\u4e3a\u4e0a\u3001\u4e0b \u4e24\u7bc7 \u4ecb\u7ecd\u4e09\u6b3e\u6570\u636e\u5e93\u5728 Corona \u65f6\u5e8f\u5206\u6790\u573a\u666f\u4e0b\u7684\u5e94\u7528\u3002 \u4e0a\u7bc7\u4ecb\u7ecd InfluxDB \uff0c\u4e0b\u7bc7\u4ecb\u7ecd ElasticSearch\u3001ClickHouse \u3002 \u901a\u8fc7\u672c\u7cfb\u5217\u6587\u7ae0\u7684\u9605\u8bfb\uff0c\u60a8\u5c06\u638c\u63e1\u65f6\u5e8f\u6570\u636e\u5e93\u7684\u57fa\u672c\u6982\u5ff5\u3001\u7279\u70b9\uff0c\u4ece\u800c\u5e2e\u52a9\u60a8\u66f4\u597d\u5730\u7406\u89e3 Corona \u7684\u8bbe\u8ba1\u4e0e\u4f7f\u7528\u3002"),(0,a.kt)("h2",{id:"\u4e8c-\u65f6\u5e8f\u6570\u636e\u5e93\u7b80\u4ecb"},"\u4e8c. \u65f6\u5e8f\u6570\u636e\u5e93\u7b80\u4ecb"),(0,a.kt)("h3",{id:"21-\u65f6\u5e8f\u6570\u636e\u5206\u6790"},"2.1 \u65f6\u5e8f\u6570\u636e\u5206\u6790"),(0,a.kt)("p",null,"\u65f6\u5e8f\u6570\u636e\u662f\u6309\u65f6\u95f4\u987a\u5e8f\u6392\u5e8f\u7684\u4e00\u7ec4\u6570\u5b57\u5e8f\u5217\uff0c\u5b83\u53ef\u4ee5\u53cd\u5e94\u67d0\u4e00\u73b0\u8c61\u7684\u53d8\u5316\u89c4\u5f8b\u3002\u5728\u6211\u4eec\u7684\u65e5\u5e38\u751f\u6d3b\u4e2d\u65f6\u5e8f\u6570\u636e\u968f\u5904\u53ef\u89c1\uff0c\u5982\u300c\u5929\u6c14\u9884\u62a5\u65f6\u5e8f\u8d70\u52bf\u56fe\u300d\u5b83\u53cd\u6620\u4e86\u6e29\u5ea6\u968f\u65f6\u95f4\u53d8\u5316\u7684\u89c4\u5f8b; \u5982\u300c\u6cb9\u4ef7\u65f6\u5e8f\u8d70\u52bf\u56fe\u300d \u5b83\u53cd\u5e94\u4e86\u6cb9\u4ef7\u968f\u65f6\u95f4\u53d8\u5316\u7684\u89c4\u5f8b:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25814972757/24f6/3597/6072/776369703f0b6cee8911e1e70b59f14c.png",alt:null})),(0,a.kt)("p",null,"\u5728\u5e94\u7528\u76d1\u63a7\u9886\u57df\uff0c\u65f6\u5e8f\u8d70\u52bf\u56fe \u80fd\u591f\u53cd\u5e94\u300c\u5e94\u7528\u5065\u5eb7\u5ea6\u300d\u968f\u65f6\u95f4\u53d8\u5316\u7684\u8d8b\u52bf\uff0c\u662f\u7528\u6237\u6700\u4e3a\u5173\u6ce8\u7684\u51e0\u7c7b\u56fe\u8868\u4e4b\u4e00:\n",(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25815108848/035d/b85c/4202/b119c485590f3ba77ce617b1c764934e.png",alt:null})),(0,a.kt)("p",null,"\u9664\u4e86\u5206\u949f\u7ea7\u7c92\u5ea6\u7684\u6570\u636e\uff0c\u6709\u65f6\u4e5f\u9700\u8981\u6309 \u300c\u5c0f\u65f6\u7ea7\u300d\u3001\u300c\u5929\u7ea7\u300d \u7c92\u5ea6\u67e5\u770b\u8d70\u52bf\u6570\u636e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25815134080/fb90/76ff/2430/35b3938287844f0789251a69bebef9b5.png",alt:null})),(0,a.kt)("p",null,"\u9664\u4e86\u6574\u4f53\u7ef4\u5ea6\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u6309\u67d0\u4e2a\u7279\u5f81\u7ef4\u5ea6\u5bf9\u8d70\u52bf\u6570\u636e\u505a\u5206\u7c7b(\u4e0b\u8868\u5bf9\u6bd4\u4e86\u4e0d\u540c\u6863\u6b21\u673a\u578b\u7684\u52a0\u8f7d\u65f6\u95f4\u8d70\u52bf):\n",(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25815159791/87d8/db18/29f8/f11d5e43457ebfbbf0ce1505be9ac969.png",alt:null})),(0,a.kt)("p",null,"\u5bf9\u65f6\u5e8f\u6570\u636e\u505a\u4e0a\u8ff0\u5206\u6790\u7684\u8fc7\u7a0b\u6211\u4eec\u53ef\u4ee5\u79f0\u5176\u4e3a\u65f6\u5e8f\u6570\u636e\u5206\u6790\u3002\u4fbf\u4e8e\u5b58\u50a8\u65f6\u5e8f\u6570\u636e\u3001\u63d0\u4f9b\u65f6\u5e8f\u6570\u636e\u5206\u6790\u80fd\u529b\u7684\u6570\u636e\u5e93\u6211\u4eec\u79f0\u5176\u4e3a\u65f6\u5e8f\u6570\u636e\u5e93\u3002"),(0,a.kt)("h3",{id:"22-\u65f6\u5e8f\u6570\u636e\u5e93\u7279\u70b9"},"2.2 \u65f6\u5e8f\u6570\u636e\u5e93\u7279\u70b9"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65f6\u95f4\u5217")),(0,a.kt)("p",null,"\u65f6\u5e8f\u6570\u636e\u5e93\u7684\u4e3b\u8981\u67e5\u8be2\u548c\u5206\u6790\u80fd\u529b\u4e0e\u300c\u65f6\u95f4\u300d\u5b57\u6bb5\u6709\u8f83\u5927\u5173\u8054\uff0c\u6240\u4ee5\u5728\u8bbe\u8ba1\u65f6\u5e8f\u6570\u636e\u5e93\u7684\u8868\u7ed3\u6784\u65f6 \u901a\u5e38\u4f1a\u5c06 \u300c\u65f6\u95f4\u300d\u5b57\u6bb5\u4f5c\u4e3a\u300c\u7d22\u5f15\u300d\u5b57\u6bb5\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u8bbe\u8ba1\u65b9\u4fbf\u5e94\u7528\u5feb\u901f\u7b5b\u9009\u51fa\u76ee\u6807\u8303\u56f4\u7684\u65f6\u5e8f\u6570\u636e\uff0c\u5e76\u4e14\u65f6\u5e8f\u6570\u636e\u5e93\u4e5f\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217 \u300c\u65f6\u95f4\u300d\u76f8\u5173\u7684\u5de5\u5177\u51fd\u6570\uff0c\u65b9\u4fbf\u6211\u4eec\u5728\u65f6\u5e8f\u6570\u636e\u4e0a\u6309\u4e0d\u540c\u7684\u65f6\u95f4\u7c92\u5ea6(\u5982 \u5206\u949f\u3001\u5c0f\u65f6\u3001\u5929 )\u505a\u805a\u5408\u5206\u6790\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7ef4\u5ea6\u5217")),(0,a.kt)("p",null,"\u5728\u50a8\u5b58\u65f6\u5e8f\u6570\u636e\u65f6\uff0c\u901a\u5e38\u4f1a\u9644\u5e26\u4e0a\u8fd9\u6761\u6570\u636e\u7684\u7ef4\u5ea6\u4fe1\u606f\uff0c\u7ef4\u5ea6\u4fe1\u606f\u53ef\u4ee5\u5728\u540e\u7eed\u5206\u6790\u65f6\u4f5c\u4e3a \u8fc7\u6ee4 \u6216 \u805a\u5408\u7684\u6761\u4ef6\u3002\u5982 \u5929\u6c14\u65f6\u5e8f\u6570\u636e\u4e2d\uff0c\u4f1a\u6709 \u300c\u57ce\u5e02\u300d\u7ef4\u5ea6\uff0c\u7ef4\u5ea6\u503c\u4e3a \u5317\u4eac\u3001\u4e0a\u6d77\u3001\u676d\u5dde \u7b49\u3002 \u6cb9\u4ef7\u65f6\u5e8f\u6570\u636e\u4e2d\uff0c\u4f1a\u6709\u300c\u6c7d\u6cb9\u6807\u53f7\u300d\u7ef4\u5ea6\uff0c\u7ef4\u5ea6\u503c\u4e3a 92\u300195\u300198 \u7b49\u3002"),(0,a.kt)("p",null,"\u5728\u8868\u7ed3\u6784\u8bbe\u8ba1\u65f6\u901a\u5e38\u9ad8\u9891\u7684\u67e5\u8be2 \u548c \u805a\u5408 \u7ef4\u5ea6\u4e5f\u662f\u5efa\u8bae\u4f5c\u4e3a\u300c\u7d22\u5f15\u300d\u5b57\u6bb5\u5b58\u50a8\u3002"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u6570\u503c\u5217")),(0,a.kt)("p",null,"\u65f6\u5e8f\u6570\u636e\u7684\u6570\u503c\uff0c\u5982\u5929\u6c14\u65f6\u5e8f\u6570\u636e\u4e2d\u7684 \u300c\u6e29\u5ea6\u503c\u300d\u3001\u6cb9\u4ef7\u65f6\u5e8f\u6570\u636e\u4e2d\u7684\u300c\u4ef7\u683c\u300d\uff0c\u4f1a\u4f5c\u4e3a\u6570\u503c\u5217\u8fdb\u884c\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u65f6\u5e8f\u6570\u636e\u5e93\u4f1a\u63d0\u4f9b\u4e00\u7cfb\u5217\u7684\u5de5\u5177\u51fd\u6570\u5bf9\u6570\u503c\u5217\u505a\u5206\u6790\u8ba1\u7b97\u3002\u5e38\u89c1\u7684\u5206\u6790\u51fd\u6570\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"avg \u6c42\u5e73\u5747\u503c"),(0,a.kt)("li",{parentName:"ul"},"max \u6c42\u6700\u5927\u503c"),(0,a.kt)("li",{parentName:"ul"},"min \u6c42\u6700\u5c0f\u503c")),(0,a.kt)("p",null,"\u7ec4\u5408\u4ee5\u4e0a\u7684\u529f\u80fd\u7279\u70b9\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd0\u7528\u65f6\u5e8f\u6570\u636e\u5e93\u5c31\u505a\u4e00\u4e9b\u5e38\u89c1\u7684\u65f6\u5e8f\u5206\u6790\uff0c\u5982:"),(0,a.kt)("p",null,"\u67e5\u8be2 2023 \u5e74 2 \u6708\u4efd\u676d\u5dde\u6bcf\u5929\u7684\u5e73\u5747\u6e29\u5ea6\u503c\u8d70\u52bf SQL\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT toStartOfDay(time), avg(degree)\nFROM table_temperature\nWHERE\n    time>='2023-02-01' AND\n    time<'2023-03-01' AND\n    city='\u676d\u5dde'\nGROUP BY toStartOfDay(time)\n")),(0,a.kt)("p",null,"\u67e5\u8be2 \u6700\u8fd1 10 \u5e74\u5404\u54c1\u7c7b\u6c7d\u6cb9\u6bcf\u5e74\u7684\u5e73\u5747\u4ef7\u683c\u8d70\u52bf SQL:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT toYear(time), model, avg(price)\nFROM table_gas\nWHERE\n    time>='2013-01-01' AND\n    time<'2023-01-01'\nGROUP BY toYear(time), model\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u6570\u636e\u8fc7\u671f\u65f6\u95f4 TTL")),(0,a.kt)("p",null,"\u65f6\u5e8f\u6570\u636e\u7684\u53e6\u4e00\u4e2a\u7279\u70b9\u662f\u5173\u6ce8\u8fd1\u671f\u7684\u6570\u636e\uff0c\u8ddd\u79bb\u5f53\u524d\u6bd4\u8f83\u4e45\u8fdc\u7684\u6570\u636e\u76f8\u5bf9\u6765\u8bf4\u6ca1\u90a3\u4e48\u91cd\u8981\uff0c\u6709\u65f6\u51fa\u4e8e\u5b58\u50a8\u5bb9\u91cf\u7684\u8003\u8651\uff0c\u6211\u4eec\u751a\u81f3\u4f1a\u5e0c\u671b\u81ea\u52a8\u5220\u9664\u8001\u65e7\u7684\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u65f6\u5e8f\u6570\u636e\u5e93\u4e00\u822c\u4f1a\u63d0\u4f9b TTL (Time To Live) \u529f\u80fd\uff0c\u5728\u8bbe\u8ba1\u6570\u636e\u5e93\u8868\u7ed3\u6784\u65f6\uff0c\u4e00\u822c\u4f1a\u6839\u636e\u6570\u636e\u8868\u7684\u805a\u5408\u7c92\u5ea6\u8bbe\u7f6e\u76f8\u5e94\u7684\u8fc7\u671f\u65f6\u95f4\u3002\u5982 \u539f\u59cb\u6570\u636e \u6216 \u5206\u949f\u7ea7\u7684\u6570\u636e \u4fdd\u7559 30 \u5929\uff0c \u5c0f\u65f6 \u6216 \u5929\u7ea7\u7684 \u805a\u5408\u6570\u636e \u4fdd\u7559 1 \u5e74\u3002"),(0,a.kt)("h2",{id:"\u4e09-influxdb"},"\u4e09. InfluxDB"),(0,a.kt)("p",null,"\u4ecb\u7ecd\u5b8c\u4e86\u65f6\u5e8f\u6570\u636e\u5206\u6790\u4e0e\u65f6\u5e8f\u6570\u636e\u5e93\u7684\u7279\u70b9\uff0c\u6211\u4eec\u9996\u5148\u6765\u770b InfluxDB \u5728 Corona \u4e2d\u7684\u5e94\u7528\u3002"),(0,a.kt)("h3",{id:"31-\u7b80\u4ecb"},"3.1 \u7b80\u4ecb"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.6/get-started/"},"InfluxDB")," \u662f\u4e00\u6b3e\u7ecf\u5178\u7684\u5f00\u6e90\u65f6\u5e8f\u6570\u636e\u5e93\u3002\u5728 InfluxDB \u4e2d\u6709\u51e0\u4e2a\u5e38\u7528\u7684\u6982\u5ff5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"measurement")),(0,a.kt)("p",null,"measurement \u662f InfluxDB \u4e2d\u7684\u6570\u636e\u8868\u3002\u4e00\u5f20 measurment \u4e2d\u53ef\u5305\u542b \u4e00\u4e2a\u65f6\u95f4\u5217(time column)\u3001\u591a\u4e2a\u7ef4\u5ea6\u5217(tag column)\u3001\u591a\u4e2a\u6570\u503c\u5217(field column)\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u65e0\u9700\u624b\u52a8\u4f7f\u7528 CREATE \u8bed\u53e5\u521b\u5efa measurment\uff0cInfluxDB \u4f1a\u5728\u5199\u5165\u7684\u6570\u636e\u65f6\u52a8\u6001\u521b\u5efa measurement\u3001\u52a8\u6001\u65b0\u589e\u7ef4\u5ea6\u5217\u4e0e\u6570\u636e\u5217\u3002"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"tag")),(0,a.kt)("p",null,"tag column \u662f InfluxDB \u4e2d\u7684\u7ef4\u5ea6\u5217\uff0cInfluxDB \u4f1a\u4e3a\u6240\u6709\u7684\u7ef4\u5ea6\u5217\u5efa\u7acb\u7d22\u5f15\u3002\u5728\u8bbe\u8ba1\u8868\u7ed3\u6784\u65f6\uff0c\u6211\u4eec\u9700\u8981\u5c06\u7ecf\u5e38\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\u3001\u805a\u5408\u6761\u4ef6\u7684\u5b57\u6bb5\u4f5c\u4e3a tag \u5217\u8fdb\u884c\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u5728\u8bbe\u8ba1 tag \u5217\u65f6\uff0c\u9700\u8981\u7279\u522b\u7559\u610f\u7684\u662f tag \u5217\u7684\u6f5c\u5728\u503c\u662f\u8981\u53ef\u6536\u655b\u7684\uff0c\u4e0d\u80fd\u662f\u65e0\u9650\u589e\u957f\u7684\u3002"),(0,a.kt)("p",null,"\u4e3e\u51e0\u4e2a\u5bf9\u6bd4\u7684\u4f8b\u5b50:\nGood Case| Bad Case\n---|---\n\u76d1\u63a7\u9875\u9762\u7684\u57df\u540d(location.host) | \u76d1\u63a7\u9875\u9762\u7684 URL (location.href)\n\u8bbe\u5907\u64cd\u4f5c\u7cfb\u7edf | \u8bbe\u5907 UUID\n\u6b4c\u66f2\u6587\u4ef6\u7c7b\u578b | \u6b4c\u66f2 ID"),(0,a.kt)("p",null,"\u539f\u56e0\u662f InfluxDB \u4e3a\u4e86 \u67e5\u8be2/\u5199\u5165 \u6027\u80fd\uff0c\u4f1a\u4e3a\u6240\u6709\u7684 tag \u5217\u5efa\u7acb\u7d22\u5f15\uff0c\u800c\u7d22\u5f15\u7684\u89c4\u6a21\u76f4\u63a5\u5f71\u54cd\u5185\u5b58\u7684\u5360\u7528\u5f00\u9500\u3002\u82e5 tag \u5217\u8bbe\u8ba1\u4e0d\u5408\u7406\uff0c\u6781\u6613\u9020\u6210 InfluxDB \u7684\u5185\u5b58\u6301\u7eed\u589e\u957f\u751a\u81f3\u51fa\u73b0 OOM \u7684\u60c5\u51b5\u3002"),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"field")),(0,a.kt)("p",null,"field column \u662f InfluxDB \u4e2d\u7684\u6570\u503c\u5217\uff0c\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u662f \u6570\u5b57\u3001\u5b57\u7b26\u4e32\u578b\u3002\u5728\u8bbe\u8ba1\u8868\u7ed3\u6784\u65f6\uff0c\u6211\u4eec\u9700\u8981\u5c06\u672a\u6765\u7528\u4e8e \u6570\u503c\u7edf\u8ba1\u5206\u6790 \u7684\u5b57\u6bb5\u4f5c\u4e3a field \u5217\u5b58\u50a8\u3002\u4e00\u4e9b\u4e0d\u5e38\u4f5c\u4e3a\u67e5\u8be2\u6761\u4ef6\u3001\u65e0\u6cd5\u6536\u655b\u7684\u989d\u5916\u4fe1\u606f\u4e5f\u53ef\u4ee5\u653e\u5230 field \u5217\u8fdb\u884c\u5b58\u50a8\u3002"),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"retention policy")),(0,a.kt)("p",null,"RR(retention policy) \u6570\u636e\u4fdd\u7559\u7b56\u7565\uff0c\u662f InfluxDB \u7684 TTL \u5b9e\u73b0\u673a\u5236\u3002RP \u53ef\u4ee5\u5728\u521b\u5efa\u6570\u636e\u5e93\u540e\u968f\u65f6\u65b0\u589e\u3001\u53d8\u66f4\u3002\u6211\u4eec\u53ef\u4ee5\u4e3a\u4e00\u4e2a\u6570\u636e\u5e93\u521b\u5efa\u591a\u4e2a RP\u3002\u5982:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create retention policy one_week on apm_log duration 7d default;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"create retention policy one_year on apm_log duration 365d;"))),(0,a.kt)("p",null,"\u5728\u6570\u636e\u5199\u5165\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u6570\u636e\u7684\u91cd\u8981\u5ea6\u3001\u65f6\u6548\u6027 \u663e\u793a\u5730\u6307\u5b9a\u4f7f\u7528\u54ea\u4e2a RP\uff0c\u6570\u636e\u5728\u8d85\u8fc7\u4fdd\u7559\u65f6\u95f4\u540e\uff0c\u5c31\u4f1a\u81ea\u52a8\u5220\u9664\u3002"),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"continue query")),(0,a.kt)("p",null,"CQ(continue query) \u6301\u7eed\u67e5\u8be2\uff0c\u53ef\u7528\u4e8e \u6570\u636e\u5f52\u6863\u3001\u964d\u91c7\u6837\u3002\u4e3e\u4f8b\u6765\u8bf4\u5f53\u6211\u4eec\u91c7\u96c6\u7684\u539f\u59cb\u6570\u636e\u662f\u5206\u7ea7\u7684\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 CQ \u529f\u80fd\uff0c\u5c06\u539f\u59cb\u8868\u7684\u6570\u636e\u805a\u5408\u5199\u5165\u5c0f\u65f6\u7ea7\u8868\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},'CREATE CONTINUE QUERY "cq_event" ON "apm_log"\nBEGIN\n  SELECT SUM("pv") as pv\n  INTO "one_year"."cq_hour_event"\n  FROM "one_week"."cq_minute_event"\n  GROUP BY time(1h), *\nEND\n')),(0,a.kt)("p",null,"\u521b\u5efa\u5b8c CQ \u4efb\u52a1\u540e\uff0cInfluxDB \u5c31\u4f1a\u6bcf\u5c0f\u65f6\u6267\u884c\u4e00\u6b21\u805a\u5408\u4efb\u52a1\u3002\u8fd9\u6837\u540e\u7eed\u5728\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece\u805a\u5408\u67e5\u8be2\uff0c\u52a0\u5feb\u67e5\u8be2\u901f\u5ea6\u3002"),(0,a.kt)("h3",{id:"32-\u5728-corona-\u4e2d\u7684\u5e94\u7528\u573a\u666f"},"3.2 \u5728 Corona \u4e2d\u7684\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"InfluxDB \u5728 Corona \u5e73\u53f0\u4e2d\u4e3b\u8981\u6709\u4ee5\u4e0b\u51e0\u4e2a\u5e94\u7528\u573a\u666f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5b58\u50a8 C \u7aef\u7528\u6237\u4e0a\u62a5\u7684 \u8bbf\u95ee\u91cf\u3001\u6027\u80fd \u7b49\u300c\u9884\u805a\u5408\u7ed3\u679c\u300d\u6570\u636e"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u5e73\u53f0\u81ea\u8eab\u8fd0\u884c\u5065\u5eb7\u5ea6\u7684 \u300c\u539f\u59cb\u300d\u6570\u636e")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u300c\u9884\u805a\u5408\u7ed3\u679c\u300d\u6570\u636e")),(0,a.kt)("p",null,"\u5728\u5e73\u53f0\u4e0a\u7ebf\u521d\u671f\uff0c\u6211\u4eec\u66fe\u4f7f\u7528 InfluxDB \u76f4\u63a5\u5b58\u50a8\u7528\u6237\u7aef\u4e0a\u62a5\u7684\u539f\u59cb\u65e5\u5fd7\uff0c\u5e76\u4f7f\u7528 CQ \u529f\u80fd\u805a\u5408\u51fa \u5206\u949f\u7ea7\u3001\u5c0f\u65f6\u7ea7 \u7c92\u5ea6\u7684\u805a\u5408\u8868\u3002 \u4f46\u968f\u7740\u63a5\u5165\u5e94\u7528\u6570\u7684\u589e\u591a\u3001\u4e0a\u62a5\u65e5\u5fd7\u91cf \u7684\u6301\u7eed\u589e\u957f\uff0cCQ \u529f\u80fd\u67e5\u8be2\u7684\u5185\u5b58\u5f00\u9500\u51fa\u73b0\u4e86\u6210\u500d\u7684\u589e\u957f\uff0c\u5bfc\u81f4 InfluxDB \u7684\u67e5\u8be2\u6027\u80fd\u9aa4\u964d\u3002"),(0,a.kt)("p",null,"\u968f\u540e\u6211\u4eec\u5728\u67b6\u6784\u4e2d\u5f15\u5165\u4e86 \u6d41\u8ba1\u7b97\u5f15\u64ce Flink , C \u7aef\u4e0a\u62a5\u6570\u636e\u7ecf\u8fc7 \u5916\u90e8\u8ba1\u7b97\u5f15\u64ce \u9884\u805a\u5408\u540e\uff0c\u518d\u5b58\u5165 InfluxDB\u3002 \u7ecf\u8fc7\u8fd9\u6837\u7684\u8c03\u6574\u540e\uff0cInfluxDB \u53ea\u5b58\u50a8 C \u7aef\u7528\u6237 \u6bcf\u5206\u949f\u3001\u6bcf\u5c0f\u65f6\u7684 \u805a\u5408\u7ed3\u679c\uff0c\u6bcf\u5206\u949f\u5b58\u50a8\u91cf\u53ea\u4e0e series \u91cf\u7ea7(group by \u7ef4\u5ea6\u7ec4\u5408\u7ed3\u679c\u91cf\u7ea7) \u6302\u94a9\uff0c\u4e0d\u518d\u4e0e\u7528\u6237\u91cf\u76f4\u63a5\u5173\u8054\u3002 InfluxDB \u81ea\u8eab\u7684\u67e5\u8be2\u6027\u80fd\u4e5f\u5f97\u5230\u4fdd\u969c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25813626113/3a14/a156/48e9/8d00d4f9ff0fcc7a33191dd04ae751c9.png",alt:null})),(0,a.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 Flink \u4e2d\u914d\u7f6e\u5206\u949f\u7ea7 PV \u805a\u5408\u4efb\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT\n   TUMBLE_START(PROCTIME(), INTERVAL '1' MINUTE) as wTime,\n   count(os) as pv,\n   os as osName,\n   moduleName as moduleName\nFROM performance_log\nWHERE\n    props['mspm'] = 'ReactNativeApplication'\nGROUP BY\n    TUMBLE(PROCTIME(), INTERVAL '1' MINUTE),\n    os,\n    props['moduleName']\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5c06 Flink \u7684\u805a\u5408\u7ed3\u679c\uff0c\u5199\u5165 InfluxDB \u8868\u4e2d\uff0c\u8868\u7ed3\u6784\u793a\u4f8b\u5982\u4e0b (moduleName\u3001osName \u4e3a tag \u5217, pv \u4e3a field \u5217):"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"time"),(0,a.kt)("th",{parentName:"tr",align:null},"moduleName"),(0,a.kt)("th",{parentName:"tr",align:null},"osName"),(0,a.kt)("th",{parentName:"tr",align:null},"pv"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2023-01-01 12:00:00"),(0,a.kt)("td",{parentName:"tr",align:null},"rn-app-1"),(0,a.kt)("td",{parentName:"tr",align:null},"android"),(0,a.kt)("td",{parentName:"tr",align:null},"10000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2023-01-01 12:00:00"),(0,a.kt)("td",{parentName:"tr",align:null},"rn-app-1"),(0,a.kt)("td",{parentName:"tr",align:null},"iphone"),(0,a.kt)("td",{parentName:"tr",align:null},"8000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2023-01-01 12:00:00"),(0,a.kt)("td",{parentName:"tr",align:null},"rn-app-2"),(0,a.kt)("td",{parentName:"tr",align:null},"android"),(0,a.kt)("td",{parentName:"tr",align:null},"5000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2023-01-01 12:00:00"),(0,a.kt)("td",{parentName:"tr",align:null},"rn-app-2"),(0,a.kt)("td",{parentName:"tr",align:null},"iphone"),(0,a.kt)("td",{parentName:"tr",align:null},"4000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2023-01-01 12:01:00"),(0,a.kt)("td",{parentName:"tr",align:null},"rn-app-1"),(0,a.kt)("td",{parentName:"tr",align:null},"android"),(0,a.kt)("td",{parentName:"tr",align:null},"10000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2023-01-01 12:01:00"),(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null},"...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null},"..."),(0,a.kt)("td",{parentName:"tr",align:null},"...")))),(0,a.kt)("p",null,"\u8fd9\u6837\u5728\u67e5\u8be2 \u6bcf\u5c0f\u65f6\u3001\u6bcf\u5929 PV \u8d70\u52bf\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u57fa\u4e8e \u5206\u949f\u7ea7\u8868 \u7684\u6570\u636e\u505a\u5206\u6790\uff0c\u76f8\u8f83\u4e8e\u67e5\u8be2 \u6bcf\u4e2a\u7528\u6237\u4e0a\u62a5\u7684\u539f\u59cb\u65e5\u5fd7\uff0c\u67e5\u8be2\u6570\u636e\u91cf\u7ea7\u5927\u5e45\u964d\u4f4e\u3001\u6027\u80fd\u5927\u5e45\u63d0\u5347\u3002 (\u806a\u660e\u7684\u8bfb\u8005\u4e00\u5b9a\u60f3\u5230\u4e86\uff0c\u8fd9\u91cc\u7684 Flink \u4e0e \u4e4b\u524d\u4ecb\u7ecd\u7684 InfluxDB CQ \u7684\u4f5c\u7528\u5176\u5b9e\u662f\u4e00\u81f4\u7684)"),(0,a.kt)("p",null,"\u540e\u7eed\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\u67e5\u8be2 InfluxDB:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n   moduleName,\n   osName,\n   sum(pv) AS pv\nFROM rn_minute_pv\nWHERE\n   moduleName='rn-app-1' AND\n   osName='android' AND\n   time>='2023-01-01' AND\n   time<='2023-01-02'\nGROUP BY time(1h)\n")),(0,a.kt)("p",null,"\u67e5\u8be2\u7ed3\u679c:\ntime|moduleName|osName|pv\n----|----|----|----\n2023-01-01 12:00:00| rn-app-1 | android | 600000 |\n2023-01-01 13:00:00| rn-app-1 | android | 600000 |\n2023-01-01 14:00:00 | rn-app-1 | android | 600000 |\n...|...|...|..."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u5b58\u50a8 \u300c\u539f\u59cb\u300d\u6570\u636e")),(0,a.kt)("p",null,"Corona \u4f7f\u7528 InfluxDB \u7684\u53e6\u4e00\u4e2a\u573a\u666f\u662f\u5b58\u50a8 \u5e73\u53f0\u81ea\u8eab\u8fd0\u884c\u5065\u5eb7\u5ea6\u7684 \u300c\u539f\u59cb\u300d\u6570\u636e\uff0c\u63d0\u5347\u5e73\u53f0\u81ea\u8eab\u8fd0\u884c\u7684\u53ef\u89c2\u6d4b\u3002 \u76f8\u8f83\u4e8e C \u7aef\u573a\u666f \u7684\u6d77\u91cf\u6570\u636e\uff0c\u673a\u5668\u3001\u96c6\u7fa4\u7684\u5065\u5eb7\u5ea6\u6570\u636e\u91cf\u7ea7\u8f83\u4e3a\u53ef\u63a7\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 InfluxDB \u8fdb\u884c\u5b58\u50a8\u3001 CQ \u8ba1\u7b97\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25813618765/8a94/0cef/531a/149c1e8d843c1c290ffec87a95f98538.png",alt:null})),(0,a.kt)("p",null,"\u4f8b\u5982\u5f53\u6211\u4eec\u9700\u8981\u89c2\u6d4b \u81ea\u5efa\u7684\u300c\u6570\u636e\u6d88\u8d39\u670d\u52a1\u300d\u7684\u5065\u5eb7\u5ea6\u65f6\uff0c\u6211\u4eec\u4f7f\u7528 InfluxDB \u91c7\u96c6\u6bcf\u4e2a\u8fdb\u7a0b \u6bcf\u6b21\u6279\u91cf\u5904\u7406\u7684 \u4e8b\u4ef6\u6570\uff0c\u540c\u65f6\u5305\u542b \u673a\u5668\u3001\u8fdb\u7a0b\u3001\u4e8b\u4ef6\u4e0a\u62a5\u5e73\u53f0 \u7b49\u7ef4\u5ea6\u5217\u3002 \u8868\u7ed3\u6784\u793a\u4f8b\u5982\u4e0b:\ntime| hostname| pid | platform | events\n---|---|---|---|---\n2023-01-01 12:00:03| music-corona-worker-1 | 130616 | web | 10\n2023-01-01 12:00:04| music-corona-worker-1 | 128204 | android | 50\n2023-01-01 12:00:04| music-corona-worker-2 | 33096 | ios | 30\n...|...|...|...|..."),(0,a.kt)("p",null,"\u6709\u4e86\u539f\u59cb\u6570\u636e\u8868\uff0c\u6211\u4eec\u53ef\u4ee5\u6309 hostname \u7ef4\u5ea6\u3001platform \u7ef4\u5ea6 \u89c2\u6d4b\u96c6\u7fa4\u7684\u6570\u636e\u6d88\u8d39\u5065\u5eb7\u5ea6\u3002\u53ef\u89c6\u5316\u65b9\u6848\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/"},"Grafna")," :"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25811684057/f86e/5476/6ad1/44105d090fb5944ae4d17cfe14e1acbb.png",alt:null})),(0,a.kt)("h3",{id:"33-\u96c6\u7fa4\u90e8\u7f72"},"3.3 \u96c6\u7fa4\u90e8\u7f72"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.6/get-started/"},"InfluxDB")," \u76ee\u524d\u5728\u793e\u533a\u53ea\u5f00\u6e90\u4e86\u5355\u673a\u7248\uff0c\u5982\u679c\u6211\u4eec\u6709 \u9ad8\u53ef\u7528\u3001\u8282\u70b9\u6269\u5c55 \u7b49\u9700\u6c42 \u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u5b98\u65b9\u4ed8\u8d39\u670d\u52a1\u3002 \u9664\u6b64\u4e4b\u5916 \u56fd\u5185\u5382\u5546 \u4e5f\u6709\u4e00\u4e9b\u9ad8\u53ef\u7528\u5b9e\u8df5\uff0c\u4e3b\u8981\u7684\u4e24\u4e2a\u6280\u672f\u8def\u7ebf\u4ee3\u8868\u6709"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u997f\u4e86\u4e48 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/shell909090/influx-proxy"},"influx-proxy")),(0,a.kt)("li",{parentName:"ul"},"\u7f51\u6613 ",(0,a.kt)("a",{parentName:"li",href:"https://kms.netease.com/article/5933"},"NTSDB")," (\u5185\u7f51\u53ef\u89c1)")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"influx-proxy")),(0,a.kt)("p",null,"influx-proxy \u662f\u4e00\u4e2a HTTP \u4ee3\u7406\u670d\u52a1\uff0c\u5bf9 InfluxDB \u5ba2\u6237\u7aef\u900f\u660e\u3002 influx-proxy \u4e3b\u8981\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u529f\u80fd:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee5 measurement \u7c92\u5ea6\u505a\u6570\u636e\u5206\u7247\u3001\u6a2a\u5411\u6269\u5c55\u8282\u70b9"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5b9e\u73b0\u6570\u636e\u7684\u53cc\u5199\u5907\u4efd"),(0,a.kt)("li",{parentName:"ul"},"\u5199\u5931\u8d25\u65f6\uff0c\u7f13\u5b58\u91cd\u8bd5\u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u5371\u67e5\u8be2\u8bed\u53e5\u8fc7\u6ee4\u80fd\u529b")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25816109124/5d67/951f/d9b8/3d14ac8f57d5d4554b30697384d194fd.png",alt:null}),"\n\u67b6\u6784\u56fe\u53d6\u81ea",(0,a.kt)("a",{parentName:"p",href:"https://github.com/shell909090/influx-proxy"},"influx-proxy")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"NTSDB")),(0,a.kt)("p",null,"NTSDB \u662f\u7f51\u6613\u81ea\u7814\u7684\u4e00\u6b3e\u9ad8\u6027\u80fd\u5206\u5e03\u5f0f\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u6838\u5fc3\u529f\u80fd\u662f\u4e3a\u65f6\u5e8f\u6570\u636e\u4e1a\u52a1\u63d0\u4f9b\u4e09\u9ad8\u670d\u52a1\uff1a\u8bfb\u5199\u670d\u52a1\u9ad8\u53ef\u7528\u3001\u6570\u636e\u9ad8\u53ef\u9760\u4ee5\u53ca\u8bfb\u5199\u9ad8\u6027\u80fd\u3002\u9664\u6b64\u4e4b\u5916\uff0cNTSDB \u8fd8\u62e5\u6709\u975e\u5e38\u4fbf\u6377\u7684\u6269\u5bb9\u7f29\u5bb9\u80fd\u529b\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e NTSDB \u5c1a\u672a\u5bf9\u96c6\u56e2\u5916\u90e8\u5f00\u653e\uff0c\u672c\u6587\u5c31\u4e0d\u8fc7\u591a\u5c55\u5f00\uff0c\u5185\u7f51\u7528\u6237\u53ef\u4ee5\u53c2\u8003\u8fd9\u7bc7",(0,a.kt)("a",{parentName:"p",href:"https://kms.netease.com/article/5933"},"\u4ecb\u7ecd\u6587\u7ae0"),", \u5916\u7f51\u7528\u6237\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"http://hbasefly.com/category/%e6%97%b6%e5%ba%8f%e6%95%b0%e6%8d%ae%e5%ba%93/"},"NTSDB \u4f5c\u8005\u535a\u5ba2")," \u5b66\u4e60\u66f4\u591a\u65f6\u5e8f\u6570\u636e\u5e93\u5e95\u5c42\u5b9e\u73b0\u539f\u7406\u3002"),(0,a.kt)("h2",{id:"\u56db\u5c0f\u7ed3"},"\u56db.\u5c0f\u7ed3"),(0,a.kt)("p",null,"InfluxDB \u4f5c\u4e3a\u4e00\u6b3e\u7ecf\u5178\u7684\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u80fd\u591f\u6ee1\u8db3\u65f6\u5e8f\u5206\u6790\u573a\u666f\u4e0b\u7684\u5927\u90e8\u5206\u8bc9\u6c42\uff0c\u5e76\u4e14\u4f7f\u7528\u65f6\u4e5f\u8db3\u591f\u8f7b\u4fbf \u548c \u7075\u6d3b\u3002\u4f46\u5728\u4e1a\u52a1\u7684\u5b9e\u8df5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u4e5f\u8e29\u4e86\u4e00\u4e9b\u5751\uff0c\u5176\u4e2d\u6700\u75db\u7684\u8fd8\u662f \u5185\u5b58\u7684\u6301\u7eed\u589e\u957f \u5bfc\u81f4 OOM \u7684\u95ee\u9898\u3002 \u5728\u96c6\u7fa4\u8d44\u6e90\u6709\u9650\u7684\u524d\u63d0\u4e0b\uff0c\u6211\u4eec\u4e5f\u9010\u6e10\u6478\u7d22\u5230\u4e86 InfluxDB \u7684\u4f7f\u7528\u8fb9\u754c \u548c \u9a7e\u9a6d\u5b83\u7684\u6b63\u786e\u59ff\u52bf\u3002"),(0,a.kt)("p",null,"\u4e0b\u7bc7\u6587\u7ae0\u6211\u4eec\u5c06\u7ee7\u7eed\u4ecb\u7ecd\u65f6\u5e8f\u6570\u636e\u5206\u6790\u4e13\u9898\uff0c\u5e76\u4e3a\u4f60\u5e26\u6765 ElasticSearch\u3001ClickHouse \u4e24\u6b3e\u6570\u636e\u5e93\u5728\u65f6\u5e8f\u5206\u6790\u573a\u666f\u4e0b\u7684\u5e94\u7528\u4ecb\u7ecd\uff0c\u4ed6\u4eec\u5728\u4f7f\u7528\u59ff\u52bf\u3001 \u6570\u636e\u5206\u6790\u80fd\u529b\u4e0a \u4e0e InfluxDB \u53c8\u4f1a\u6709\u54ea\u4e9b\u5dee\u5f02\u5462\uff1f"))}s.isMDXComponent=!0}}]);