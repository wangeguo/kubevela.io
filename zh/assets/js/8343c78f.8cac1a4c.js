(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[58280],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},53727:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"\u5728\u6301\u7eed\u4ea4\u4ed8\u4e2d\u96c6\u6210\u955c\u50cf\u4ed3\u5e93"},o={unversionedId:"tutorials/trigger",id:"version-v1.2/tutorials/trigger",isDocsHomePage:!1,title:"\u5728\u6301\u7eed\u4ea4\u4ed8\u4e2d\u96c6\u6210\u955c\u50cf\u4ed3\u5e93",description:"\u7b80\u4ecb",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/tutorials/trigger.md",sourceDirName:"tutorials",slug:"/tutorials/trigger",permalink:"/zh/docs/v1.2/tutorials/trigger",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/tutorials/trigger.md",version:"v1.2",lastUpdatedBy:"Tianxin Dong",lastUpdatedAt:1642423889,formattedLastUpdatedAt:"2022/1/17",frontMatter:{title:"\u5728\u6301\u7eed\u4ea4\u4ed8\u4e2d\u96c6\u6210\u955c\u50cf\u4ed3\u5e93"},sidebar:"version-v1.2/docs",previous:{title:"\u5bf9\u63a5 Jenkins",permalink:"/zh/docs/v1.2/tutorials/jenkins"},next:{title:"GitOps \u4ea4\u4ed8",permalink:"/zh/docs/v1.2/case-studies/gitops"}},c=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u521b\u5efa\u5e94\u7528",id:"\u521b\u5efa\u5e94\u7528",children:[]},{value:"\u4e3a\u5e94\u7528\u65b0\u5efa\u89e6\u53d1\u5668",id:"\u4e3a\u5e94\u7528\u65b0\u5efa\u89e6\u53d1\u5668",children:[]},{value:"\u914d\u7f6e Harbor \u89e6\u53d1\u5668",id:"\u914d\u7f6e-harbor-\u89e6\u53d1\u5668",children:[]},{value:"\u6d4b\u8bd5\u90e8\u7f72",id:"\u6d4b\u8bd5\u90e8\u7f72",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],s={toc:c};function p(e){var t=e.components,l=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"\u5728\u65e5\u5e38\u7814\u53d1\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5f53\u9879\u76ee\u4e2d\u7684\u955c\u50cf\u7248\u672c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u901a\u5e38\u6211\u4eec\u9700\u8981\u5c06\u6700\u65b0\u7248\u672c\u66f4\u65b0\u5230\u5404\u4e2a\u73af\u5883\u4e2d\u3002\u5728\u8fd9\u4e2a\u66f4\u65b0\u90e8\u7f72\u7684\u8fc7\u7a0b\u4e2d\uff0c\u624b\u52a8\u90e8\u7f72\u4e0d\u4ec5\u7e41\u7410\uff0c\u4e14\u5bb9\u6613\u51fa\u9519\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u5de5\u5177\u6765\u5b8c\u6210\u57fa\u4e8e\u955c\u50cf\u7248\u672c\u7684\u81ea\u52a8\u5316\u90e8\u7f72\u3002"),(0,i.kt)("p",null,"\u5728 KubeVela 1.2 \u7248\u672c\u4e2d\uff0c",(0,i.kt)("a",{parentName:"p",href:"../install#3-%E5%AE%89%E8%A3%85-velaux"},"VelaUX")," \u81ea\u5e26\u7684\u5e94\u7528\u89e6\u53d1\u5668\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5f88\u597d\u7684\u5165\u53e3\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u89e6\u53d1\u5668\uff0c\u6765\u5e2e\u52a9\u6211\u4eec\u5b8c\u6210\u8fd9\u4e9b\u81ea\u52a8\u90e8\u7f72\u7684\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 KubeVela \u89e6\u53d1\u5668\u6765\u5b8c\u6210\u57fa\u4e8e\u955c\u50cf\u7248\u672c\u7684\u81ea\u52a8\u5316\u90e8\u7f72\uff0c\u5728\u672c\u6587\u7684\u4f8b\u5b50\u5f53\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 GitLab \u4f5c\u4e3a\u4ee3\u7801\u4ed3\u5e93\uff0cHarbor \u4f5c\u4e3a\u955c\u50cf\u4ed3\u5e93\u6765\u5b8c\u6210\u6f14\u793a\u3002"),(0,i.kt)("h2",{id:"\u521b\u5efa\u5e94\u7528"},"\u521b\u5efa\u5e94\u7528"),(0,i.kt)("p",null,"\u8981\u4f7f\u7528\u89e6\u53d1\u5668\uff0c\u9996\u5148\u6211\u4eec\u9700\u8981\u5728 VelaUX \u4e0a\u65b0\u5efa\u4e00\u4e2a\u5e94\u7528\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u53ef\u4ee5\u65b0\u5efa\u4e00\u4e2a WebService \u7c7b\u578b\u7684\u5e94\u7528\uff0c\u5e76\u4f7f\u7528 LoadBalancer \u4e3a\u5176\u66b4\u9732 80 \u7aef\u53e3\u4ee5\u4fbf\u8bbf\u95ee\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(50960).Z})),(0,i.kt)("h2",{id:"\u4e3a\u5e94\u7528\u65b0\u5efa\u89e6\u53d1\u5668"},"\u4e3a\u5e94\u7528\u65b0\u5efa\u89e6\u53d1\u5668"),(0,i.kt)("p",null,"\u5728\u65b0\u5efa\u5b8c\u5e94\u7528\u540e\uff0c\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"New Trigger")," \u6765\u521b\u5efa\u65b0\u7684\u89e6\u53d1\u5668\uff0c\u8fd9\u91cc\u6211\u4eec\u9009\u62e9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Harbor")," \u683c\u5f0f\u7684\u89e6\u53d1\u5668\uff0c\u4f7f\u8be5\u89e6\u53d1\u5668\u652f\u6301\u6765\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"Harbor")," \u955c\u50cf\u4ed3\u5e93\u7684\u8bf7\u6c42\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(40113).Z})),(0,i.kt)("p",null,"\u67e5\u770b\u8fd9\u4e2a\u89e6\u53d1\u5668\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u53ef\u4ee5\u770b\u5230\u5177\u4f53\u7684 Webhook URL \u4ee5\u53ca\u624b\u52a8\u89e6\u53d1\u7684\u547d\u4ee4\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(8104).Z})),(0,i.kt)("h2",{id:"\u914d\u7f6e-harbor-\u89e6\u53d1\u5668"},"\u914d\u7f6e Harbor \u89e6\u53d1\u5668"),(0,i.kt)("p",null,"Harbor \u683c\u5f0f\u89e6\u53d1\u5668\u9700\u8981\u914d\u5408 Harbor \u955c\u50cf\u4ed3\u5e93\u4f7f\u7528\u3002\u5f53\u521b\u5efa\u5b8c Harbor \u7c7b\u578b\u7684\u89e6\u53d1\u5668\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u590d\u5236\u8be5\u89e6\u53d1\u5668\u7684 Webhook URL\uff0c\u5e76\u5728 Harbor \u955c\u50cf\u4ed3\u5e93\u4e2d\u8fdb\u884c\u914d\u7f6e\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(71435).Z})),(0,i.kt)("h2",{id:"\u6d4b\u8bd5\u90e8\u7f72"},"\u6d4b\u8bd5\u90e8\u7f72"),(0,i.kt)("p",null,"\u5b8c\u6210\u8fd9\u4e9b\u89e6\u53d1\u5668\u7684\u914d\u7f6e\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u8fdb\u884c\u4e00\u4e2a\u7b80\u5355\u7684\u6d4b\u8bd5\u6765\u67e5\u770b\u81ea\u52a8\u90e8\u7f72\u6548\u679c\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u6211\u4eec\u6765\u67e5\u770b\u4e00\u4e0b\u5f53\u524d\u5e94\u7528\u7684\u9875\u9762\uff0c\u901a\u8fc7\u5e94\u7528\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Service Endpoint"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u8df3\u8f6c\u5230\u5e94\u7528\u7684 LoadBalancer \u5730\u5740\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(56894).Z})),(0,i.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u524d\u7684 Demo \u5e94\u7528\u663e\u793a\u7248\u672c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"v1.0.0"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(5148).Z})),(0,i.kt)("p",null,"\u8fd9\u4e2a Demo \u5e94\u7528\u7684\u6e90\u7801\u653e\u5728\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/FogDong/KubeVela-GitOps-Demo-Code"},"GitLab")," \u4e0a\u3002\u4ed3\u5e93\u91cc\u9664\u4e86\u6e90\u7801\uff0c\u8fd8\u6709\u4e00\u4efd CI \u6587\u4ef6\uff0c\u91cc\u9762\u7684\u6b65\u9aa4\u4e5f\u5341\u5206\u7b80\u5355\uff0c\u6bcf\u6b21\u4ee3\u7801\u88ab\u66f4\u65b0\u65f6\uff0c\u90fd\u5c06\u81ea\u52a8\u6784\u5efa\u955c\u50cf\u63a8\u9001\u5230\u955c\u50cf\u4ed3\u5e93\u4e2d\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u5c06\u4ee3\u7801\u7684\u7248\u672c\u4fee\u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"data(){\n    return {\n      v: 'v2.0.0',\n    }\n  },\n")),(0,i.kt)("p",null,"\u4fee\u6539\u5b8c\u6210\u540e\uff0cGitLab CI \u5c06\u81ea\u52a8\u6784\u5efa\u5e76\u63a8\u9001\u6700\u65b0\u955c\u50cf\u3002"),(0,i.kt)("p",null,"\u5728 Harbor \u89e6\u53d1\u5668\u7684\u8bbf\u95ee\u8bb0\u5f55\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u5f53\u955c\u50cf\u4ed3\u5e93\u4e2d\u6709\u4e86\u6700\u65b0\u955c\u50cf\u65f6\uff0cHarbor \u4f1a\u5f80\u6211\u4eec\u914d\u7f6e\u7684 Webhook URL \u4e2d\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(7576).Z})),(0,i.kt)("p",null,"\u67e5\u770b VelaUX \u7684\u5e94\u7528\u90e8\u7f72\u7248\u672c\u5217\u8868\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u6700\u8fd1\u4e00\u6b21\u90e8\u7f72\u662f\u6765\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook")," \u7684\u90e8\u7f72\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(24288).Z})),(0,i.kt)("p",null,"\u91cd\u65b0\u67e5\u770b\u5e94\u7528\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u5e94\u7528\u7684\u7248\u672c\u5df2\u7ecf\u53d8\u66f4\u6210\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"v2.0.0"),"\uff0c\u540c\u65f6\u9875\u9762\u7684\u80cc\u666f\u4e5f\u968f\u7248\u672c\u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt",src:r(99065).Z})),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"KubeVela \u89e6\u53d1\u5668\u4e0e\u5236\u54c1\u4ed3\u5e93\u7684\u5bf9\u63a5\u662f\u5341\u5206\u987a\u6ed1\u4e14\u65e0\u7f1d\u7684\uff0c\u9664\u4e86 Harbor \u4e4b\u5916\uff0cKubeVela \u8fd8\u652f\u6301 ACR \u955c\u50cf\u4ed3\u5e93\u4ee5\u53ca\u81ea\u5b9a\u4e49\u89e6\u53d1\u7684\u683c\u5f0f\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u4f7f\u7528 KubeVela \u89e6\u53d1\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u5730\u6839\u636e\u955c\u50cf\u7248\u672c\u5b9e\u73b0\u81ea\u52a8\u90e8\u7f72\uff0c\u4ece\u800c\u5b8c\u6210\u5e94\u7528\u7248\u672c\u7684\u8fed\u4ee3\u3002"))}p.isMDXComponent=!0},5148:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-appv1-b03cc90ba647e4f95751b1859a0ab262.png"},99065:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-appv2-34fd8a1fe732693afab3dfec0726dbc8.png"},56894:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-endpoints-721d7b7338443866723aa5e9efad1d6a.png"},8104:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-info-7cb29a072f544e98ffb0a41e17e7c5fd.png"},50960:function(e,t,r){"use strict";t.Z=r.p+"assets/images/acr-trigger-newapp-37351acbac4f76cdc209e47184a16d9c.png"},7576:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-harborrecord-f644ee54d5904f4d0cca7c9b54811721.png"},40113:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-newtrigger-1294a428077c9ce0e981d2ab1e27f4ad.png"},24288:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-revisions-6c7e199a9e928cd3f0f4b30a4159613d.png"},71435:function(e,t,r){"use strict";t.Z=r.p+"assets/images/harbor-trigger-6bba927c7425b4524c0d9f2c7a228a50.png"}}]);