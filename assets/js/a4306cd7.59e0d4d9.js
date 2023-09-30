"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7802],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),s=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return l.createElement(p.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return t?l.createElement(k,o(o({ref:n},u),{},{components:t})):l.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=t[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=t(7462),a=(t(7294),t(3905));const r={slug:"tsdb-part2",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0b)",authors:["kkdev163"],tags:["\u65f6\u5e8f\u6570\u636e\u5e93\u3001clickhouse\u3001es"]},o=void 0,i={permalink:"/blog/tsdb-part2",source:"@site/blog/2023-04-28-tsdb-part2/index.md",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0b)",description:"\u4e00. \u524d\u8a00",date:"2023-04-28T00:00:00.000Z",formattedDate:"2023\u5e744\u670828\u65e5",tags:[{label:"\u65f6\u5e8f\u6570\u636e\u5e93\u3001clickhouse\u3001es",permalink:"/blog/tags/\u65f6\u5e8f\u6570\u636e\u5e93\u3001clickhouse\u3001es"}],readingTime:16.865,hasTruncateMarker:!1,authors:[{name:"kkdev163",title:"Web \u5168\u6808\u5f00\u53d1\u5de5\u7a0b\u5e08@NetEase",url:"https://kkdev163.github.io",imageURL:"https://github.com/kkdev163.png",key:"kkdev163"}],frontMatter:{slug:"tsdb-part2",title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0b)",authors:["kkdev163"],tags:["\u65f6\u5e8f\u6570\u636e\u5e93\u3001clickhouse\u3001es"]},nextItem:{title:"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0a)",permalink:"/blog/tsdb-part1"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4e00. \u524d\u8a00",id:"\u4e00-\u524d\u8a00",level:3},{value:"\u4e8c. ElasticSearch",id:"\u4e8c-elasticsearch",level:3},{value:"2.1 \u7b80\u4ecb",id:"21-\u7b80\u4ecb",level:4},{value:"2.2 \u5728 Corona \u4e2d\u7684\u5e94\u7528\u573a\u666f",id:"22-\u5728-corona-\u4e2d\u7684\u5e94\u7528\u573a\u666f",level:4},{value:"2.3 \u8868\u7ed3\u6784\u8bbe\u8ba1\u53ca\u67e5\u8be2\u793a\u4f8b",id:"23-\u8868\u7ed3\u6784\u8bbe\u8ba1\u53ca\u67e5\u8be2\u793a\u4f8b",level:4},{value:"2.4 \u6570\u636e\u8bfb\u5199\u67b6\u6784",id:"24-\u6570\u636e\u8bfb\u5199\u67b6\u6784",level:3},{value:"2.5 \u5b58\u5728\u7684\u75db\u70b9",id:"25-\u5b58\u5728\u7684\u75db\u70b9",level:3},{value:"\u4e09. ClickHouse",id:"\u4e09-clickhouse",level:3},{value:"3.1 ClickHouse \u7b80\u4ecb",id:"31-clickhouse-\u7b80\u4ecb",level:4},{value:"3.2 \u5728 Corona \u4e2d\u7684\u5e94\u7528\u573a\u666f",id:"32-\u5728-corona-\u4e2d\u7684\u5e94\u7528\u573a\u666f",level:4},{value:"3.3 \u8868\u7ed3\u6784\u8bbe\u8ba1\u53ca\u67e5\u8be2\u793a\u4f8b",id:"33-\u8868\u7ed3\u6784\u8bbe\u8ba1\u53ca\u67e5\u8be2\u793a\u4f8b",level:4},{value:"3.4 \u6570\u636e\u8bfb\u5199\u67b6\u6784 \u53ca \u914d\u5957\u5efa\u8bbe",id:"34-\u6570\u636e\u8bfb\u5199\u67b6\u6784-\u53ca-\u914d\u5957\u5efa\u8bbe",level:4},{value:"3.5 \u5b58\u5728\u7684\u75db\u70b9",id:"35-\u5b58\u5728\u7684\u75db\u70b9",level:4},{value:"3.6 \u66f4\u591a ClickHouse \u8d44\u6599",id:"36-\u66f4\u591a-clickhouse-\u8d44\u6599",level:4}],u={toc:s},c="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,l.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u4e00-\u524d\u8a00"},"\u4e00. \u524d\u8a00"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/blog/tsdb-part1"},"Corona \u6280\u672f\u4e13\u9898-\u65f6\u5e8f\u6570\u636e\u5206\u6790(\u4e0a)"),"\u4e2d\uff0c\u6211\u4eec\u4ecb\u7ecd\u4e86\u4ec0\u4e48\u662f\u65f6\u5e8f\u6570\u636e\u5206\u6790\u3001\u65f6\u5e8f\u6570\u636e\u5e93\u7684\u7279\u70b9 \u548c \u7ecf\u5178\u65f6\u5e8f\u6570\u636e\u5e93 InfluxDB\u3002\u672c\u7bc7\u6587\u7ae0\u5c06\u7ee7\u7eed\u56f4\u7ed5\u65f6\u5e8f\u6570\u636e\u5206\u6790\u4e13\u9898\uff0c\u4ecb\u7ecd ElasticSearch\u3001ClickHouse \u4e24\u6b3e\u6570\u636e\u5e93\u5728\u65f6\u5e8f\u5206\u6790\u4e0a\u7684\u5e94\u7528\u3002"),(0,a.kt)("h3",{id:"\u4e8c-elasticsearch"},"\u4e8c. ElasticSearch"),(0,a.kt)("h4",{id:"21-\u7b80\u4ecb"},"2.1 \u7b80\u4ecb"),(0,a.kt)("p",null,"Elasticsearch \u662f\u4e00\u6b3e\u57fa\u4e8e Apache Lucene \u7684\u5206\u5e03\u5f0f\u641c\u7d22\u548c\u5206\u6790\u5f15\u64ce\uff0c\u7528\u4e8e\u5168\u6587\u68c0\u7d22\u3001\u65e5\u5fd7\u5206\u6790\u3001\u6570\u636e\u53ef\u89c6\u5316\u7b49\u573a\u666f\u3002\u5b83\u652f\u6301\u5b9e\u65f6\u641c\u7d22\u3001\u6570\u636e\u805a\u5408\u3001\u81ea\u52a8\u5316\u5206\u7247\u548c\u590d\u5236\u7b49\u529f\u80fd\uff0c\u5e76\u63d0\u4f9b\u4e86 RESTful API \u548c\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001\u7cfb\u7edf\u3002Elasticsearch \u88ab\u5e7f\u6cdb\u5e94\u7528\u4e8e\u4f01\u4e1a\u7ea7\u641c\u7d22\u548c\u65e5\u5fd7\u5206\u6790\u7b49\u9886\u57df\u3002"),(0,a.kt)("h4",{id:"22-\u5728-corona-\u4e2d\u7684\u5e94\u7528\u573a\u666f"},"2.2 \u5728 Corona \u4e2d\u7684\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u5728\u8bbe\u8ba1 Corona \u5e73\u53f0\u65f6\uff0c\u6211\u4eec\u5f15\u5165 ES \u7684\u4e3b\u8981\u76ee\u7684\u662f\u7528\u4e8e \u5b58\u50a8\u5f02\u5e38\u76d1\u63a7\u7684\u539f\u59cb\u65e5\u5fd7\uff0c\u5e76\u501f\u52a9 ES \u7684\u5168\u6587\u68c0\u7d22\u80fd\u529b\uff0c\u63d0\u4f9b\u4e30\u5bcc\u3001\u7075\u6d3b\u7684\u65e5\u5fd7\u641c\u7d22\u529f\u80fd\u3002"),(0,a.kt)("p",null,"\u4e0b\u56fe\u4e3a Corona \u7684\u641c\u7d22\u9762\u677f\uff0c\u5728\u6b64\u5904\u6211\u4eec\u610f\u56fe\u641c\u7d22\u5305\u542b undefined \u4fe1\u606f\u7684\u9519\u8bef\u65e5\u5fd7\u3002"),(0,a.kt)("img",{src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27195122214/ecce/e54c/d851/cacd03354eaae9fa27a3777cb01a88f0.png",width:"400"}),"\u4e0b\u56fe\u4e3a Corona \u7684\u641c\u7d22\u7ed3\u679c\u5217\u8868\uff0c\u5c55\u793a\u4e86\u5305\u542b undefined \u9519\u8bef\u4fe1\u606f\u7684 Issue\u3002",(0,a.kt)("img",{src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27195252659/b9d4/8b16/d67f/430607bd6805c276d19df601b0d7ff43.png",width:"400"}),(0,a.kt)("p",null,"\u5173\u4e8e ES \u641c\u7d22\u7684\u6982\u5ff5\uff0c\u5728\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u4e0d\u4f5c\u66f4\u591a\u5c55\u5f00\uff0c\u611f\u5174\u8da3\u7684\u8bfb\u8005\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://kms.netease.com/article/52242"},"ES(ElasticSearch) \u641c\u7d22\u57fa\u672c\u6982\u5ff5\u7b80\u4ecb"),"\u3002"),(0,a.kt)("p",null,"\u9664\u4e86\u65e5\u5fd7\u7684\u641c\u7d22\u529f\u80fd\u5916\uff0cCorona \u4e5f\u5e0c\u671b\u4e3a\u7528\u6237\u5c55\u793a\u5f02\u5e38\u53d1\u751f\u7684\u65f6\u5e8f\u8d8b\u52bf\u56fe\u3002\u7531\u4e8e\u539f\u59cb\u65e5\u5fd7\u7684\u5b58\u50a8\u6211\u4eec\u5df2\u7ecf\u4f7f\u7528\u4e86 ES \u8fdb\u884c\u5b58\u50a8\uff0c\u5728\u8bbe\u8ba1\u65f6\u5e8f\u5206\u6790\u529f\u80fd\u5b9e\u73b0\u65f6\uff0c\u6211\u4eec\u5176\u5b9e\u662f\u6709\u4e24\u6761\u6280\u672f\u5b9e\u73b0\u8def\u7ebf\u53ef\u4f9b\u9009\u62e9:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06\u539f\u59cb\u65e5\u5fd7\u53e6\u5199\u5165\u4e00\u4efd\u81f3\u6d88\u606f\u961f\u5217 -> Flink \u805a\u5408 -> InfluxDB"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ES \u7684\u805a\u5408\u80fd\u529b\uff0c\u57fa\u4e8e\u539f\u59cb\u65e5\u5fd7\u76f4\u63a5\u505a\u65f6\u5e8f\u6570\u636e\u5206\u6790\u3002")),(0,a.kt)("p",null,"\u8003\u8651\u5230\u67b6\u6784\u7684\u7b80\u6d01\u3001\u51cf\u5c11\u4f9d\u8d56\u7b49\u56e0\u7d20\uff0c\u5e76\u53c2\u8003\u4e86 ES \u4e0e InfluxDB \u7684\u6027\u80fd\u5bf9\u6bd4\u6587\u7ae0\u540e\uff0c\u6211\u4eec\u6700\u7ec8\u9009\u62e9\u4e86\u65b9\u6848\u4e8c\u3002 \u4ee5\u4e0b\u662f\u4f7f\u7528 ES \u505a\u7684\u4e00\u4e9b\u65f6\u5e8f\u5206\u6790\u529f\u80fd\u6f14\u793a:"),(0,a.kt)("p",null,"\u4e0b\u56fe\u4e3a\u5e94\u7528\u6574\u4f53\u7684\u5f02\u5e38\u8d8b\u52bf\u56fe:\n",(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27195565010/e546/0e4f/6ef9/256ae76ed1037ae0be842c3e05a899bb.png",alt:null})),(0,a.kt)("p",null,"\u4e0b\u56fe\u4e3a\u5355\u6761 issue \u7684\u5f02\u5e38\u8d8b\u52bf\u56fe:\n",(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27195581099/6821/aa64/e406/c29529b8e3608cfeaeff0f6b137c900b.png",alt:null})),(0,a.kt)("h4",{id:"23-\u8868\u7ed3\u6784\u8bbe\u8ba1\u53ca\u67e5\u8be2\u793a\u4f8b"},"2.3 \u8868\u7ed3\u6784\u8bbe\u8ba1\u53ca\u67e5\u8be2\u793a\u4f8b"),(0,a.kt)("p",null,"ES \u5728\u5199\u5165\u6570\u636e\u524d\uff0c\u4e0d\u8981\u6c42\u5efa\u7acb\u8868\u7ed3\u6784\u3002ES \u4f1a\u6839\u636e\u5199\u5165\u7684\u6570\u636e\u81ea\u52a8\u63a8\u65ad\u6570\u636e\u7c7b\u578b\u8fdb\u884c\u5b58\u50a8\u3002\u4f46\u4e3a\u4e86\u907f\u514d\u7c7b\u578b\u7684\u9519\u8bef\u63a8\u65ad\u5bfc\u81f4\u540e\u7eed\u67e5\u8be2\u529f\u80fd\u4e0d\u7b26\u5408\u9884\u671f\uff0c\u5efa\u8bae\u662f\u5728\u5199\u5165\u6570\u636e\u524d\uff0c\u5bf9\u8868\u7ed3\u6784\u8fdb\u884c\u7ea6\u675f\u3002"),(0,a.kt)("p",null,"ES \u5bf9\u8868\u7ed3\u6784\u8fdb\u884c\u7ea6\u675f\u7684\u65b9\u5f0f\u662f\u521b\u5efa\u6a21\u677f\u3002\u6a21\u677f\u4e2d\u53ef\u5305\u542b \u7d22\u5f15\u5339\u914d\u89c4\u5219 (\u53ef\u7406\u89e3\u4e3a\u8868\u540d)\uff0c\u8868\u4e2d\u7684\u6570\u636e\u7ed3\u6784\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u6f14\u793a\u7684\u6a21\u677f\uff0c\u6a21\u677f\u4e2d\u7684\u7d22\u5f15\u5305\u542b\u4e86 5 \u4e2a\u5b57\u6bb5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"project_id: \u5e94\u7528 ID\uff0c\u7c7b\u578b\u4e3a long"),(0,a.kt)("li",{parentName:"ul"},"issue_id: \u805a\u5408\u9519\u8bef ID, \u7c7b\u578b\u4e3a long"),(0,a.kt)("li",{parentName:"ul"},"os: \u4e0a\u62a5\u64cd\u4f5c\u7cfb\u7edf\uff0c\u7c7b\u578b\u4e3a keyword"),(0,a.kt)("li",{parentName:"ul"},"ts: \u4e0a\u62a5\u65f6\u95f4\uff0c\u7c7b\u578b\u4e3a date"),(0,a.kt)("li",{parentName:"ul"},"error_obj: \u9519\u8bef\u8be6\u60c5\u5bf9\u8c61\uff0cJSON \u7c7b\u578b\uff0cJSON \u4e2d\u5305\u542b message \u5b57\u6bb5\uff0cmessage \u4e3a\u6587\u672c\u7c7b\u578b\uff0c\u652f\u6301\u5206\u8bcd\u68c0\u7d22\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'PUT _template/template_web_demo\n{\n   "indx_patterns": ["web_demo_*"],\n   "mappings": {\n      "_doc": {\n          "project_id": {\n              "type": "long"\n          },\n          "issue_id": {\n              "type": "long"\n          },\n          "os": {\n              "type": "keyword"\n          },\n          "ts": {\n              "type": "date"\n          },\n          "error_obj": {\n              "properties": {\n                 "message": {\n                     "type": "text",\n                     "fields": {\n                        "keyword": {\n                            "type": "keyword",\n                            "ignore_above": 256\n                        }\n                     }\n                 }\n              }\n          }\n      }\n   }\n}\n')),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u793a\u4f8b\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'[\n  {\n    id: 1,\n    project_id: 1,\n    issue_id: 1,\n    os: "iphone",\n    ts: "2023-04-27 15:00:00",\n    error_obj: {\n      message: "Cannot read properties of undefined (reading \'providerLog\')",\n    },\n  },\n  {\n    id: 2,\n    project_id: 1,\n    issue_id: 2,\n    os: "android",\n    ts: "2023-04-27 15:01:00",\n    error_obj: {\n      message: "e.forEach is not a function\')",\n    },\n  },\n];\n')),(0,a.kt)("p",null,"\u67e5\u8be2\u793a\u4f8b: \u67e5\u8be2\u9879\u76ee id \u4e3a 1 \u7684\u6240\u6709 issue \u7684\u6700\u8fd1 7 \u5929\u6bcf\u65e5\u4e0a\u62a5\u91cf\u8d70\u52bf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "query": {\n    "bool": {\n      "filter": {\n        "bool": {\n          "must": [\n            { // \u6307\u5b9a\u67e5\u8be2\u7684\u9879\u76eeid \u4e3a 1\n              "term": {\n                "project_id": 1\n              }\n            },\n            { // \u6307\u5b9a\u67e5\u8be2\u65f6\u95f4\u8303\u56f4 >= 2023-04-21 00:00:00\n              "range": {\n                "ts": {\n                  "gte": 1682006400000\n                }\n              }\n            },\n            { // \u6307\u5b9a\u67e5\u8be2\u65f6\u95f4\u8303\u56f4 <= 2023-04-27 23:59:59\n              "range": {\n                "ts": {\n                  "lte": 1682611199000\n                }\n              }\n            }\n          ]\n        }\n      }\n    }\n  },\n  "aggs": { // \u805a\u5408\uff0c\u6309 issue_id \u5b57\u6bb5\u505a\u805a\u5408\n    "issueId": {\n      "terms": {\n        "field": "issue_id"\n      },\n      "aggs": { // \u5b50\u805a\u5408\uff0c\u6309\u65f6\u95f41\u5929\u7c92\u5ea6\u505a\u805a\u5408\n        "series": {\n          "date_histogram": {\n            "field": "ts",\n            "interval": "1d",\n            "format": "yyyy-MM-dd HH:mm:ss",\n            "time_zone": "+08:00"\n          }\n        }\n      }\n    }\n  }\n  "size": 0, // \u53ea\u7edf\u8ba1\u805a\u5408\u7ed3\u679c\uff0c\u4e0d\u8fd4\u56de\u539f\u6587\u6863\n}\n')),(0,a.kt)("p",null,"\u5bf9\u4e8e\u9996\u6b21\u63a5\u89e6 ES \u7684\u540c\u5b66\u6765\u770b\uff0c\u8fd9\u4e2a\u67e5\u8be2\u6761\u4ef6\u770b\u4e0a\u53bb\u4f1a\u6bd4\u8f83\u5730\u590d\u6742\u3002\u4e0a\u9762\u7684\u67e5\u8be2\u5982\u679c\u7528 InfluxDB SQL \u7684\u8bdd\u5176\u5b9e\u5c31\u662f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT COUNT()\nFROM `web_demo`\nWHERE\n  project_id = 1 AND\n  time>=1682006400000 AND\n  time <=1682611199000\nGROUP BY issue_id, time(1d);\n")),(0,a.kt)("h3",{id:"24-\u6570\u636e\u8bfb\u5199\u67b6\u6784"},"2.4 \u6570\u636e\u8bfb\u5199\u67b6\u6784"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u8282\u6211\u4eec\u53ea\u4ecb\u7ecd ES \u5728 Corona \u65f6\u5e8f\u6570\u636e\u573a\u666f\u4e0b\u7684\u5e94\u7528\u5c42\u67b6\u6784")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1) \u57fa\u4e8e\u539f\u59cb\u65e5\u5fd7\u505a\u65f6\u5e8f\u5206\u6790")),(0,a.kt)("p",null,"Corona \u5e73\u53f0\u7684\u5f02\u5e38\u65e5\u5fd7\u539f\u59cb\u65e5\u5fd7\u7531\u5f02\u5e38\u65e5\u5fd7\u6e05\u6d17\u670d\u52a1\u505a\u9884\u5904\u7406\u540e\u6279\u91cf\u5199\u5165 ES\u3002\u53ef\u89c6\u5316\u7ba1\u7406\u540e\u53f0\u5728\u540e\u7eed\u53ef\u76f4\u63a5\u8bf7\u6c42 ES \u505a\u65f6\u5e8f\u6570\u636e\u5206\u6790\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27201538834/5897/e416/6bb2/5282867cd6389055ddaf92e95df0bab2.png",alt:null}),"\n",(0,a.kt)("strong",{parentName:"p"},"2) \u57fa\u4e8e\u805a\u5408\u6570\u636e\u505a\u65f6\u5e8f\u5206\u6790")),(0,a.kt)("p",null,"\u5728 Corona \u7684\u544a\u8b66\u573a\u666f\uff0c\u8003\u8651\u5230\u67e5\u8be2\u805a\u5408\u8868\u4f1a\u6bd4\u67e5\u8be2\u539f\u59cb\u8868\u6709\u66f4\u9ad8\u7684\u6027\u80fd\uff0c\u5e76\u4e14\u4e3a\u4e86\u65b9\u4fbf\u8ffd\u6eaf\u544a\u8b66\u7684\u5386\u53f2\u8d70\u52bf\uff0c\u6211\u4eec\u5728\u5e94\u7528\u5c42\u914d\u7f6e\u4e86\u5b9a\u65f6\u4efb\u52a1\u505a\u5206\u949f\u7ea7\u7684\u6570\u636e\u805a\u5408\uff0c\u544a\u8b66\u4efb\u52a1\u5728\u6267\u884c\u65f6\uff0c\u76f4\u63a5\u8bfb\u53d6\u5206\u949f\u7ea7\u805a\u5408\u8868\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27201542231/258d/21ab/a664/34ba5a29faff6ea0a4817507acaf6646.png",alt:null})),(0,a.kt)("h3",{id:"25-\u5b58\u5728\u7684\u75db\u70b9"},"2.5 \u5b58\u5728\u7684\u75db\u70b9"),(0,a.kt)("p",null,"Corona \u4f7f\u7528 ES \u505a\u65f6\u5e8f\u5206\u6790\u7684\u573a\u666f\u76f8\u5bf9\u6765\u8bf4\u8fd8\u6bd4\u8f83\u6709\u9650\u3002\u5bf9\u4e8e ES \u5728\u65f6\u5e8f\u5206\u6790\u4e0b\u7684\u6027\u80fd\uff0c\u662f\u5426\u5b58\u5728\u74f6\u9888\uff0c\u5c1a\u672a\u6709\u6df1\u5165\u7684\u63a2\u7d22\u3002\u6211\u4eec\u7684\u75db\u70b9\u4e3b\u8981\u662f\u96c6\u4e2d\u5728\u4f7f\u7528\u59ff\u52bf\u4e0a\u3002"),(0,a.kt)("p",null,"\u901a\u8fc7 2.3 \u8282 \u7684\u793a\u4f8b\uff0c\u8bfb\u8005\u4e0d\u96be\u53d1\u73b0\uff0c\u5728\u65f6\u5e8f\u5206\u6790\u573a\u666f\uff0cES \u67e5\u8be2\u7684\u8bf7\u6c42\u4f53\u7684\u4e66\u5199 \u548c \u7406\u89e3 \u76f8\u5bf9\u4e8e InfluxDB \u6765\u8bf4\uff0c\u5177\u6709\u4e00\u5b9a\u7684\u590d\u6742\u5ea6\u3002 \u5982\u679c\u6211\u4eec\u7684\u9879\u76ee\u9700\u8981\u7528\u5230 ES \u6765\u505a\u65f6\u5e8f\u5206\u6790\uff0c\u5efa\u8bae\u662f\u5728\u5e94\u7528\u5c42\u5c01\u88c5\u4e00\u4e9b Utils \u5de5\u5177\u7c7b\uff0c\u534f\u52a9\u505a\u8bf7\u6c42\u4f53\u751f\u6210 \u548c \u6570\u636e\u89e3\u6790\u3002NodeJS \u73af\u5883\u4e0b\u63a8\u8350\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/bodybuilder"},"bodybuilder")," \u505a\u4e0a\u5c42\u7684\u5c01\u88c5\u3002"),(0,a.kt)("h3",{id:"\u4e09-clickhouse"},"\u4e09. ClickHouse"),(0,a.kt)("h4",{id:"31-clickhouse-\u7b80\u4ecb"},"3.1 ClickHouse \u7b80\u4ecb"),(0,a.kt)("p",null,"ClickHouse \u662f OLAP(on-Line Analytic Processing) \u8054\u673a\u5206\u6790\u5904\u7406\u6570\u636e\u5e93\u3002\u5728\u6570\u636e\u5206\u6790\u65f6\uff0c\u53ef\u76f4\u63a5\u5bf9\u4ebf\u7ea7\u539f\u59cb\u65e5\u5fd7\u505a\u5728\u7ebf\u7684\u5b9e\u65f6\u805a\u5408\u8ba1\u7b97\uff0c\u5e76\u4e14\u80fd\u5728\u79d2\u7ea7\u7ed9\u51fa\u805a\u5408\u7ed3\u679c\u3002"),(0,a.kt)("h4",{id:"32-\u5728-corona-\u4e2d\u7684\u5e94\u7528\u573a\u666f"},"3.2 \u5728 Corona \u4e2d\u7684\u5e94\u7528\u573a\u666f"),(0,a.kt)("p",null,"Corona \u5728\u5f15\u5165 ClickHouse \u4e4b\u521d\uff0c\u662f\u4e3a\u4e86\u8865\u5145\u539f\u6709 \u6027\u80fd\u76d1\u63a7\u67b6\u6784 \u7684\u5206\u6790\u80fd\u529b(\u5982\u591a\u7ef4\u7684\u5206\u4f4d\u6570 P50\u3001P95 \u7edf\u8ba1\u80fd\u529b)\uff0c\u968f\u7740\u6211\u4eec\u5bf9 ClickHouse \u4f7f\u7528\u7ecf\u9a8c\u7684\u79ef\u7d2f \u548c \u7279\u6027\u539f\u7406\u7684\u8ba4\u8bc6\uff0c\u6211\u4eec\u53d1\u73b0\u5728 Corona \u7684\u6027\u80fd\u5206\u6790\u5e94\u7528\u573a\u666f\u4e0a\uff0cClickHouse \u80fd\u591f\u5b8c\u5168\u53d6\u4ee3 Flink \u3001InfluxDB \u7684\u4f5c\u7528\u3002\u5e76\u4e14\u6574\u4f53\u7684\u67b6\u6784\u66f4\u52a0\u7b80\u6d01\uff0c\u6570\u636e\u5206\u6790\u7684\u65b9\u5f0f\u4e5f\u66f4\u52a0\u7075\u6d3b\u3001\u8f7b\u4fbf\u3002"),(0,a.kt)("p",null,"\u76ee\u524d Corona \u4e0a\u7684\u5efa\u8bbe\u7684\u6027\u80fd\u76d1\u63a7\u6307\u6807\uff0c\u5df2\u5b8c\u5168\u7531 ClickHouse \u63d0\u4f9b\u5b58\u50a8\u4e0e\u6570\u636e\u5206\u6790\u7684\u80fd\u529b\u3002\u4e3b\u8981\u7684\u5206\u6790\u529f\u80fd\u6709:"),(0,a.kt)("p",null,"1). \u57fa\u4e8e\u4e0a\u62a5\u6570\u636e\u7ef4\u5ea6\u5b57\u6bb5\uff0c\u63d0\u4f9b\u591a\u7ef4\u7684\u7ec4\u5408\u7b5b\u9009\u80fd\u529b\n2). \u5728\u7ebf\u5b9e\u65f6\u805a\u5408\u8ba1\u7b97\uff0c\u7edf\u8ba1 \u5e73\u5747\u503c\u3001\u5206\u4f4d\u6570\u3001PV\u3001UV \u8d70\u52bf"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27203697679/8f89/97b2/e027/7a308942880eee04a2ab0c2cf155e706.png",alt:null}),"\n3). \u6309\u7167\u67d0\u4e2a\u7ef4\u5ea6\u805a\u5408\uff0c\u5bf9\u6bd4\u4e0d\u540c\u7ef4\u5ea6\u503c\u7684\u8d70\u52bf"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27203727019/b63c/a464/52d4/c878914b569e737d0f99c7b283d811f0.png",alt:null}),"\n4). \u67e5\u770b\u4e0d\u540c\u7ef4\u5ea6\u503c\u7684\u5360\u6bd4\n",(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27203746572/18c9/d7bb/79ff/9379c160676d61043f15a56bf2f4795f.png",alt:null}),"\n5). \u7edf\u8ba1\u6307\u6807\u503c\u7684\u8be6\u7ec6\u5206\u5e03\u60c5\u51b5\n",(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27203752779/7787/66d2/0044/82ac157d3e60894c677232dda1c5a091.png",alt:null})),(0,a.kt)("h4",{id:"33-\u8868\u7ed3\u6784\u8bbe\u8ba1\u53ca\u67e5\u8be2\u793a\u4f8b"},"3.3 \u8868\u7ed3\u6784\u8bbe\u8ba1\u53ca\u67e5\u8be2\u793a\u4f8b"),(0,a.kt)("p",null,"ClickHouse \u5728\u5199\u5165\u6570\u636e\u524d\uff0c\u9700\u8981\u4f7f\u7528\u5efa\u8868\u8bed\u53e5\u521b\u5efa\u8868\u7ed3\u6784\u3002\u4ee5 ReactNative \u542f\u52a8\u8017\u65f6\u76d1\u63a7\u4e3a\u4f8b, \u4ee5\u4e0b\u4e3a\u793a\u4f8b\u7684\u8868\u7ed3\u6784:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE TABLE rn_monitor_cold_boot_stage_local\n(\n    `appName` String, -- \u5e94\u7528\u540d\uff0c\u5982 \u4e91\u97f3\u4e50\n    `osName` String, -- \u64cd\u4f5c\u7cfb\u7edf\u540d\n    `appVersion` String, -- \u5e94\u7528\u7248\u672c\n    `rnModuleName` String, -- ReactNative \u6a21\u5757\u540d\n    `deviceTag` String, -- \u8bbe\u5907\u6027\u80fd\n    `uploadTime` DateTime, -- \u65e5\u5fd7\u5230\u8fbe\u670d\u52a1\u7aef\u65f6\u95f4\n    `uid` String, -- \u7528\u6237 uid\n    `stageName` String, -- \u9636\u6bb5\n    `stageCost` Float32, -- \u9636\u6bb5\u8017\u65f6\n)\nENGINE = MergeTree\nPARTITION BY (appName, osName, toYYYYMMDD(uploadTime))\nORDER BY (rnModuleName, uploadTime)\nTTL uploadTime + toIntervalDay(90)\nSETTINGS index_granularity = 8192, use_minimalistic_part_header_in_zookeeper = 1\n")),(0,a.kt)("p",null,"\u5728\u793a\u4f8b\u8868\u7ed3\u6784\u4e2d\uff0cuploadTime \u4e3a\u65f6\u95f4\u5217\uff0c stageCost \u4e3a\u6570\u503c\u5217\uff0c\u5176\u4ed6\u5b57\u6bb5\u90fd\u4e3a\u7ef4\u5ea6\u5217\u3002"),(0,a.kt)("p",null,"MergeTree \u662f ClickHouse \u4e2d\u6700\u91cd\u8981\u7684\u8868\u5f15\u64ce\uff0c\u8fd9\u79cd\u8868\u5f15\u64ce\u7684\u7279\u70b9\u662f\uff0c\u6570\u636e\u5728\u6279\u91cf\u5199\u5165\u65f6\uff0cClickHouse \u4f1a\u5c06\u6570\u636e\u5199\u5165\u65b0\u7684\u4e34\u65f6\u5206\u533a\u4e2d, ClickHouse \u4f1a\u5728\u540e\u53f0\u5bf9 \u4e34\u65f6\u5206\u533a \u4e0e \u5df2\u6709\u7684\u6570\u636e\u5206\u533a \u505a Merge\uff0c\u4ee5\u6b64\u6765\u63d0\u9ad8\u6570\u636e\u7684\u5199\u5165\u6027\u80fd\u3002"),(0,a.kt)("p",null,"PARTITION BY \u6570\u636e\u7684\u5206\u533a\u7b56\u7565\uff0c\u793a\u4f8b\u8868\u4ee5 appName, osName, \u4e0a\u62a5\u65f6\u95f4(\u5929) \u6240\u7ec4\u6210\u7684\u8054\u5408\u952e \u5efa\u7acb\u5206\u533a\u3002 ClickHouse \u4f1a\u4e3a\u6bcf\u4e2a\u5206\u533a\u5efa\u7acb\u4e00\u4e2a\u76ee\u5f55\uff0c\u5408\u7406\u7684\u5206\u533a\u7b56\u7565\uff0c\u53ef\u4ee5\u8ba9 ClickHouse \u5728\u540e\u7eed\u67e5\u627e\u6570\u636e\u65f6\uff0c\u76f4\u63a5\u9009\u4e2d\u5206\u533a\u76ee\u5f55\uff0c\u5927\u5927\u964d\u4f4e\u626b\u63cf\u7684\u6570\u636e\u884c\u6570\u3002"),(0,a.kt)("p",null,"ORDER BY \u6570\u636e\u7684\u6392\u5e8f\u952e\uff0cClickHouse \u9ed8\u8ba4\u4f1a\u4e3a\u6392\u5e8f\u952e\u5efa\u7acb\u7d22\u5f15\u3002"),(0,a.kt)("p",null,"TTL \u6570\u636e\u81ea\u52a8\u8fc7\u671f\u65f6\u95f4\uff0c90 \u5929\u3002"),(0,a.kt)("p",null,"index_granularity \u7d22\u5f15\u7c92\u5ea6\u4e3a 8192 \u884c(\u53ef\u7406\u89e3\u4e3a 8192 \u884c\u6570\u636e\uff0c\u5efa\u7acb\u4e00\u6761\u7d22\u5f15)\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b\u6570\u636e\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n   "appName": "music"\n   "osName": "android",\n   "appVersion": "8.9.0",\n   "rnModuleName": "rn-playlistrank",\n   "deviceTag": "\u9ad8\u7aef\u673a",\n   "uploadTime": "2023-04-27 12:00:00",\n   "uid": "9999999",\n   "stageName": "render",\n   "stageCost": 1000\n}\n')),(0,a.kt)("p",null,"\u67e5\u8be2\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},'SELECT\n    toStartOfDay(uploadTime) as "time",\n    avg(stageCost) AS "avg",\n    quantiles(0.5, 0.9)(stageCost) AS "quantiles",\n    count() AS "pv",\n    uniq(uid) AS "uv"\nFROM rn_monitor_cold_boot_stage_shard\nWHERE\n   uploadTime>=1682006400 AND\n   uploadTime<=1682611199 AND\n   stageName=\'render\' AND\n   rnModuleName=\'rn-playlistrank\'\nGROUP BY toStartOfDay(uploadTime)\nORDER BY toStartOfDay(uploadTime) ASC\n')),(0,a.kt)("p",null,"\u67e5\u8be2\u7ed3\u679c\u793a\u4f8b:\n",(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27206521249/9c51/5849/7d58/8e6680e9d7da26baad1b1941e7ad81af.png",alt:null})),(0,a.kt)("p",null,"\u4ee5\u4e0a\u7684\u67e5\u8be2\u793a\u4f8b\uff0c\u5305\u542b\u4e86 \u5e73\u5747\u503c\u3001\u5206\u4f4d\u503c\u3001PV\u3001UV \u7684\u7edf\u8ba1\uff0c\u662f Corona \u6027\u80fd\u76d1\u63a7\u5206\u6790\u6700\u57fa\u7840 SQL\u3002\u5176\u4ed6\u7684\u6027\u80fd\u5206\u6790\u90fd\u662f\u57fa\u4e8e\u8be5 SQL \u7684\u53d8\u79cd\u3002"),(0,a.kt)("h4",{id:"34-\u6570\u636e\u8bfb\u5199\u67b6\u6784-\u53ca-\u914d\u5957\u5efa\u8bbe"},"3.4 \u6570\u636e\u8bfb\u5199\u67b6\u6784 \u53ca \u914d\u5957\u5efa\u8bbe"),(0,a.kt)("p",null,"\u5f97\u76ca\u4e8e ClickHouse \u7684\u9ad8\u6027\u80fd (\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5f53\u4e0a\u8ff0\u7684\u793a\u4f8b SQL \u7684\u626b\u63cf\u6570\u636e\u91cf\u7ea7\u8fbe\u5230 6 \u4ebf\u884c\u65f6\uff0c\u4e5f\u4ec5\u9700 2 \u79d2\u5c31\u53ef\u4ee5\u5b8c\u6210\u6570\u636e\u5206\u6790\uff09\uff0c\n",(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27206860033/532e/16ce/5261/fe4aa4e5ecd9abd708917bd8ba3d0e11.png",alt:null}),"\n\u5728\u7edd\u5927\u591a\u6570\u7684\u573a\u666f\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ClickHouse \u76f4\u63a5\u5bf9\u539f\u59cb\u6570\u636e\u505a\u5b9e\u65f6\u805a\u5408\u5206\u6790\uff0c\u8fd9\u4e5f\u4f7f\u5f97\u6211\u4eec\u7684\u6027\u80fd\u5206\u6790\u67b6\u6784\u53d8\u5f97\u7b80\u6d01\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u5199\u5165"),"\n\u5728\u6570\u636e\u5199\u5165\u524d\uff0c\u6211\u4eec\u4f7f\u7528\u81ea\u5efa\u7684\u300c\u6027\u80fd\u65e5\u5fd7\u5904\u7406\u670d\u52a1\u300d\u8ba2\u9605\u4e0d\u540c\u7684 \u6027\u80fd\u65e5\u5fd7\uff0c\u6bcf\u4e2a\u6d88\u8d39\u8005\u8ba2\u9605\u4e00\u79cd\u65e5\u5fd7\u7c7b\u578b\uff0c\u5728\u9884\u5904\u7406\u540e\uff0c\u4f1a\u6839\u636e\u6bcf\u5f20\u8868\u7684\u5efa\u8868\u5206\u533a\u89c4\u5219\uff0c\u5728\u670d\u52a1\u7aef\u5bf9\u6570\u636e\u505a\u9884\u5206\u533a\uff0c\u6bcf\u4e2a\u5206\u533a\u7684\u6570\u636e\u5355\u72ec\u6279\u91cf\u5199\u5165 ClickHouse\u3002\u4ee5\u6b64\u8fbe\u5230 \u6279\u91cf\u5199\u5165 \u540c\u65f6\u53c8\u51cf\u5c11 ClickHouse \u5728\u540e\u53f0\u5bf9\u6570\u636e\u505a\u518d\u6b21\u5206\u533a\u7684\u5f00\u9500\uff0c\u63d0\u9ad8\u5199\u5165\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u6570\u636e\u6279\u91cf\u5199\u5165\u65f6\uff0c\u4f7f\u7528\u4e86\u81ea\u5efa\u7684\u96c6\u7fa4\u7248 ClickHouse NodeJsClient\uff0c\u505a\u6570\u636e Schema \u6821\u9a8c \u5e76 \u968f\u673a\u8bf7\u6c42\u96c6\u7fa4\u4e2d\u7684 Node \u8fbe\u5230\u6570\u636e\u5747\u5300\u5206\u7247\u7684\u76ee\u7684\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207198216/af50/824e/2c70/8b35903bd05edb81a90aaa0a8272382e.png",alt:null}),"\n",(0,a.kt)("strong",{parentName:"p"},"\u6570\u636e\u67e5\u8be2"),"\n\u7ec6\u5fc3\u7684\u8bfb\u8005\u53ef\u80fd\u53d1\u73b0\u4e86\uff0c\u6211\u4eec\u5728\u4e0a\u9762\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u6240\u5efa\u7684\u793a\u4f8b\u8868\uff0c\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"_local")," \u7ed3\u5c3e\uff0c\u800c\u6211\u4eec\u7684\u67e5\u8be2\u793a\u4f8b\u8868\u662f\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"_shard")," \u7ed3\u5c3e\u3002"),(0,a.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u6211\u4eec\u5728\u5efa\u8868\u65f6\uff0c\u4f1a\u540c\u65f6\u521b\u5efa local \u8868 \u4e0e shard \u8868\u3002\u5728\u6570\u636e\u5199\u5165\u65f6\uff0c\u6027\u80fd\u65e5\u5fd7\u5904\u7406\u670d\u52a1\u662f\u76f4\u8fde\u6bcf\u4e2a ClickHouse node \u5411 local \u8868\u5199\u5165\u6570\u636e\u3002\u53ef\u4ee5\u7406\u89e3\u4e3a\u6bcf\u4e2a node \u53ea\u4fdd\u5b58\u4e86 \u6574\u4e2a\u5b8c\u6574\u8868\u7684 1/4 \u884c\u7684\u6570\u636e\u3002\u5728\u67e5\u8be2\u65f6\uff0c\u67e5\u8be2\u4efb\u610f\u4e00\u4e2a\u8282\u70b9\u7684 shard \u8868\uff0cClickHouse \u4f1a\u5728\u540e\u53f0\u81ea\u52a8\u6c47\u603b 4 \u4e2a node \u7684\u5168\u90e8\u6570\u636e\u505a\u5206\u6790\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207917384/122c/e08b/999b/5008a4c20dcc5edabb16e182b21df83f.png",alt:null}),"\n\u6ce8: \u8be5\u56fe local \u8868\u4e2d\u7684\u884c\u53f7\u4ec5\u7528\u4e8e\u793a\u610f\u5206\u7247\u7684\u6570\u636e\u91cf\u7ea7\uff0c\u5e76\u975e\u5b9e\u9645\u7684\u5b58\u50a8\u6216\u7d22\u5f15\u884c\u53f7\u3002"),(0,a.kt)("p",null,"\u5728\u81ea\u5efa\u7684\u6027\u80fd\u65e5\u5fd7\u5904\u7406\u670d\u52a1 \u548c \u53ef\u89c6\u5316\u540e\u53f0 \u4e0a\uff0c\u6211\u4eec\u4e5f\u52a0\u5165\u4e86\u4e00\u4e9b\u76d1\u63a7\u6307\u6807\uff0c\u6765\u89c2\u6d4b ClickHouse \u96c6\u7fa4\u7684\u8bfb\u5199\u5065\u5eb7\u5ea6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5199\u5165\u4fa7\u76d1\u63a7:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u5206\u949f \u6279\u91cf\u5199\u5165\u7684\u8bf7\u6c42\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u5206\u949f \u6279\u91cf\u5199\u5165\u7684\u65e5\u5fd7\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u5206\u949f \u4e0d\u540c\u5206\u533a\u7684\u5199\u5165\u65e5\u5fd7\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u5206\u949f \u5ffd\u7565\u7684\u65e5\u5fd7\u6570(Schema \u6821\u9a8c\u4e0d\u901a\u8fc7)\n",(0,a.kt)("img",{parentName:"li",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207965120/4a7d/d9c6/43d7/396230093cd4f2e5a2f6f45fa0bf8363.png",alt:null})),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6d88\u8d39\u7684\u5ef6\u65f6"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6279\u91cf\u8f6c\u6362\u8017\u65f6"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u6279\u91cf\u8f6c\u6362\u6761\u6570\n",(0,a.kt)("img",{parentName:"li",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207977929/ca03/235f/f6ad/052ffea26bf69274158d7da4c08c531d.png",alt:null})),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5206\u533a\u8f6c\u6362\u5e76\u5199\u5165 ClickHouse \u8017\u65f6"),(0,a.kt)("li",{parentName:"ul"},"ClickHouse \u5199\u5165\u8bf7\u6c42\u8017\u65f6\n",(0,a.kt)("img",{parentName:"li",src:"https://p6.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27207991931/70c9/2b9c/ed2f/99cf455cbf0d5c155ca48bb1646d69d2.png",alt:null}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u67e5\u8be2\u4fa7\u76d1\u63a7"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u5206\u949f\u603b\u67e5\u8be2\u6b21\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u5206\u949f\u5e73\u5747\u67e5\u8be2\u8017\u65f6"),(0,a.kt)("li",{parentName:"ul"},"\u6162\u67e5\u8be2 SQL \u8be6\u60c5\n",(0,a.kt)("img",{parentName:"li",src:"https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/27208225232/e89a/eead/4021/d81fd0e8f671586b7576401debacd15c.png",alt:null}))),(0,a.kt)("h4",{id:"35-\u5b58\u5728\u7684\u75db\u70b9"},"3.5 \u5b58\u5728\u7684\u75db\u70b9"),(0,a.kt)("p",null,"ClickHouse \u5728 Corona \u7684\u6027\u80fd\u5206\u6790\u573a\u666f\u6ee1\u8db3\u4e86\u6211\u4eec\u7edd\u5927\u591a\u6570\u7684\u8bc9\u6c42\uff0c\u5982\u679c\u975e\u8981\u8ba9\u7b14\u8005\u60f3\u4e00\u4e2a\u75db\u70b9\u7684\u8bdd\uff0c\u90a3\u53ef\u80fd\u662f\u7f3a\u5c11\u50cf InfluxDB \u4e00\u6837\u7684 CQ ( Continue Query) \u80fd\u529b\u3002\u4ec0\u4e48\u60c5\u51b5\u4e0b\u9700\u8981 CQ \u5462\uff1f"),(0,a.kt)("p",null,"ClickHouse \u867d\u7136\u5177\u6709\u5f3a\u5927\u7684\u5b9e\u65f6\u5728\u7ebf\u5206\u6790\u80fd\u529b\uff0c\u4f46\u662f\u4ed6\u7684\u5904\u7406\u6027\u80fd\u4e5f\u662f\u6709\u8d44\u6e90\u5f00\u9500\u7684\u3002\u5728\u673a\u5668\u8d44\u6e90\u6709\u9650\u7684\u524d\u63d0\u4e0b\uff0c\u5982\u679c\u9700\u8981\u505a\u65f6\u95f4\u8de8\u5ea6\u5927\uff0c\u6570\u636e\u91cf\u7ea7\u8d85\u51e0\u767e\u4ebf\u7684\u5206\u6790\uff0c\u4e5f\u662f\u6709\u76f8\u5f53\u5927\u7684\u8d44\u6e90\u5f00\u9500\u548c\u7b49\u5f85\u65f6\u95f4\u7684\u3002"),(0,a.kt)("p",null,"\u4e3e\u4f8b\u6765\u8bf4\uff0c\u5728 Corona \u6bd4\u8f83\u5206\u6790 App \u7248\u672c\u6027\u80fd\u8d70\u52bf\u573a\u666f\u65f6\uff0c\u7531\u4e8e App \u53d1\u7248\u65f6\u95f4\u8de8\u5ea6\u5927\uff0c\u6bcf\u4e2a\u7248\u672c\u4ec5\u5b58\u5728\u4e00\u6bb5\u65f6\u95f4\u7684\u9ad8\u5cf0\u6d41\u91cf\u671f\uff0c\u5982\u679c\u9700\u8981\u5ba2\u89c2\u5730\u5bf9\u6bd4\u6bcf\u4e2a App \u7684\u6027\u80fd\uff0c\u9700\u8981\u8ba9\u6bcf\u4e2a\u7248\u672c\u7684\u6837\u672c\u91cf\u5c3d\u53ef\u80fd\u5927\uff0c\u6211\u4eec\u5982\u679c\u8fd8\u662f\u9009\u62e9\u5728\u7ebf\u5206\u6790\u7684\u8bdd\uff0c\u5c31\u9700\u8981\u628a \u65f6\u95f4\u8de8\u5ea6\u62c9\u5230\u597d\u51e0\u4e2a\u6708\u3002\u6b64\u65f6\u6570\u636e\u5206\u6790\u7684\u7b49\u5f85\u65f6\u95f4\u5c31\u4f1a\u7279\u522b\u957f\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u7b49\u5f85\u8017\u65f6\u957f\u7684\u95ee\u9898\uff0c\u6211\u4eec\u8fd8\u662f\u8f6c\u4e3a\u79bb\u7ebf\u5206\u6790\u7684\u601d\u8def\uff0c\u5728\u5e94\u7528\u5c42\uff0c\u6bcf\u65e5\u5bf9 Top3 \u65e5\u6d3b\u7684\u7248\u672c\u505a\u6027\u80fd\u5f52\u6863\u5feb\u7167\u3002\u5728\u5206\u6790 App \u7248\u672c\u8d70\u52bf\u65f6\uff0c\u4f7f\u7528\u5f52\u6863\u5feb\u7167\u6570\u636e\u505a\u5206\u6790\u3002"),(0,a.kt)("p",null,"\u5982\u679c ClickHouse \u539f\u751f\u5177\u5907 InfluxDB \u7684 Continue Query \u80fd\u529b\uff0c\u53ef\u80fd\u5b9e\u73b0\u8d77\u6765\u4f1a\u76f8\u5bf9\u5bb9\u6613\u4e9b\u3002"),(0,a.kt)("h4",{id:"36-\u66f4\u591a-clickhouse-\u8d44\u6599"},"3.6 \u66f4\u591a ClickHouse \u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kms.netease.com/article/48727#1max_concurrent_queries"},"ClickHouse \u4f7f\u7528\u5b9e\u8df5\u4e0e\u89c4\u8303")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/traditional/p/15218743.html"},"ClickHouse \u4e2d\u6700\u91cd\u8981\u7684\u8868\u5f15\u64ce\uff1aMergeTree \u7684\u6df1\u5ea6\u539f\u7406\u89e3\u6790")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.popo.netease.com/lingxi/3d876d69fb66428d9b23e09f67ac099b#edit"},"\u76d1\u63a7\u4f53\u7cfb\u5f15\u5165 ClickHouse \u8c03\u7814"))))}d.isMDXComponent=!0}}]);