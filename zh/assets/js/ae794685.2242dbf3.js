(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[89106],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),d=a,m=k["".concat(c,".").concat(d)]||k[d]||s[d]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39639:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c},default:function(){return u}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"},o={unversionedId:"quick-start",id:"version-v1.3/quick-start",isDocsHomePage:!1,title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528",description:"\u5728\u5b9e\u8df5\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u6309\u7167 \u5feb\u901f\u5b89\u88c5 \u6587\u6863\uff0c\u5728\u4f60\u7684\u63a7\u5236\u5e73\u9762\u96c6\u7fa4\u4e2d\u5b89\u88c5\u4e86 KubeVela Core \u548c VelaUX\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.3/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/zh/docs/quick-start",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/quick-start.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"},sidebar:"version-v1.3/docs",previous:{title:"\u5b89\u88c5\u63d2\u4ef6\u5305",permalink:"/zh/docs/how-to/cli/addon/addon"},next:{title:"\u4ea4\u4ed8\u5bb9\u5668\u955c\u50cf",permalink:"/zh/docs/tutorials/webservice"}},c=[{value:"\u767b\u9646\u5230 VelaUX",id:"\u767b\u9646\u5230-velaux",children:[]},{value:"\u9009\u62e9\u5e94\u7528\u7684\u90e8\u7f72\u7c7b\u578b/\u89c4\u5212\u5e94\u7528\u90e8\u7f72\u73af\u5883",id:"\u9009\u62e9\u5e94\u7528\u7684\u90e8\u7f72\u7c7b\u578b\u89c4\u5212\u5e94\u7528\u90e8\u7f72\u73af\u5883",children:[]},{value:"\u8bbe\u7f6e\u5e94\u7528\u7684\u90e8\u7f72\u53c2\u6570",id:"\u8bbe\u7f6e\u5e94\u7528\u7684\u90e8\u7f72\u53c2\u6570",children:[]},{value:"\u6267\u884c\u73af\u5883\u7684\u90e8\u7f72",id:"\u6267\u884c\u73af\u5883\u7684\u90e8\u7f72",children:[]},{value:"\u5e94\u7528\u5220\u9664",id:"\u5e94\u7528\u5220\u9664",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],p={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728\u5b9e\u8df5\u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u6309\u7167 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/install"},"\u5feb\u901f\u5b89\u88c5")," \u6587\u6863\uff0c\u5728\u4f60\u7684\u63a7\u5236\u5e73\u9762\u96c6\u7fa4\u4e2d\u5b89\u88c5\u4e86 KubeVela Core \u548c VelaUX\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4f60\u5e0c\u671b\u901a\u8fc7\u4f7f\u7528 KubeVela CLI \u6765\u8fdb\u884c\u5e94\u7528\u4ea4\u4ed8\uff0c\u8bf7\u67e5\u770b Vela CLI \u624b\u518c\u7684 ",(0,l.kt)("a",{parentName:"p",href:"./end-user/quick-start-cli"},"\u4ea4\u4ed8\u7b2c\u4e00\u4e2a\u5e94\u7528"),"\u3002")),(0,l.kt)("p",null,"\u6b22\u8fce\u6765\u5230 KubeVela\uff01\u5728\u672c\u5c0f\u8282\u4e2d\uff0c\u6211\u4eec\u4f1a\u5411\u4f60\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 VelaUX \u6765\u4ea4\u4ed8\u4e00\u4e2a\u7b80\u5355\u7684\u5e94\u7528\u3002"),(0,l.kt)("p",null,"\u4f60\u5c06\u4f1a\u64cd\u4f5c\u7684\u6b65\u9aa4\u6709\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u51c6\u5907\u4e00\u4e2a\u670d\u52a1\u955c\u50cf\uff0c\u672c\u4f8b\u4e2d\u6211\u4eec\u5c06\u4f7f\u7528\uff1a ",(0,l.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/crccheck/hello-world"},"crccheck/hello-world"),"\uff0c\u8bf7\u786e\u4fdd\u4f60\u7684\u73af\u5883\u53ef\u4ee5\u6b63\u5e38\u4e0b\u8f7d\u8be5\u955c\u50cf\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u57fa\u4e8e\u670d\u52a1\u955c\u50cf\u521b\u5efa\u7b2c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"li"},"webservice")," \u7c7b\u578b\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"Application"),"\uff0c\u8fd9\u662f\u65e0\u72b6\u6001\u670d\u52a1\u6700\u7b80\u5316\u7684\u4ea4\u4ed8\u65b9\u5f0f\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u67e5\u770b\u5e94\u7528\u5b9e\u4f8b\u8fd0\u884c\u72b6\u6001\uff1b")),(0,l.kt)("p",null,"\u4f60\u5c06\u5b66\u4e60\u5230\u5185\u5bb9\u7684\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u521d\u6b65\u63a5\u89e6 ",(0,l.kt)("a",{parentName:"p",href:"./getting-started/core-concept#%E5%BA%94%E7%94%A8%EF%BC%88application%EF%BC%89"},"\u5e94\u7528(Application)"),"\u3001",(0,l.kt)("a",{parentName:"p",href:"getting-started/core-concept#%E7%8E%AF%E5%A2%83%EF%BC%88Environment%EF%BC%89%EF%BC%89"},"\u73af\u5883(Environment)")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"getting-started/core-concept#%E4%BA%A4%E4%BB%98%E7%9B%AE%E6%A0%87%EF%BC%88target%EF%BC%89"},"\u4ea4\u4ed8\u76ee\u6807(Target)")," \u7b49\u6838\u5fc3\u6982\u5ff5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u901a\u8fc7\u64cd\u4f5c VelaUX \u5b8c\u6574\u4ea4\u4ed8\u4e00\u4e2a\u5e94\u7528\u3002"))),(0,l.kt)("h2",{id:"\u767b\u9646\u5230-velaux"},"\u767b\u9646\u5230 VelaUX"),(0,l.kt)("p",null,"\u6b63\u5e38\u5b89\u88c5 VelaUX \u540e\u4f60\u9700\u8981\u767b\u9646\u3002\u9ed8\u8ba4\u8d26\u53f7\u4e3aadmin\uff0c\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u83b7\u53d6\u5bc6\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'vela logs -n vela-system --name apiserver addon-velaux | grep "initialized admin username"\n')),(0,l.kt)("h2",{id:"\u9009\u62e9\u5e94\u7528\u7684\u90e8\u7f72\u7c7b\u578b\u89c4\u5212\u5e94\u7528\u90e8\u7f72\u73af\u5883"},"\u9009\u62e9\u5e94\u7528\u7684\u90e8\u7f72\u7c7b\u578b/\u89c4\u5212\u5e94\u7528\u90e8\u7f72\u73af\u5883"),(0,l.kt)("p",null,"\u4f60\u8fdb\u5165\u7684\u7b2c\u4e00\u4e2a\u9875\u9762\u5373\u5e94\u7528\u4ea4\u4ed8\u7ba1\u7406\u9875\u9762\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(45783).Z})),(0,l.kt)("p",null,"\u7136\u540e\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"New Application")," \u6309\u94ae\u5f00\u59cb\u521b\u5efa\u5e94\u7528\uff0c\u6309\u7167 UI \u63d0\u793a\u586b\u5199\u4ee5\u4e0b\u56db\u4e2a\u7ef4\u5ea6\u7684\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7684\u540d\u79f0\u7b49\u57fa\u7840\u4fe1\u606f\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5e94\u7528\u7684\u90e8\u7f72\u7c7b\u578b\uff0c\u672c\u4f8b\u4e2d\u6211\u4eec\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"li"},"webservice")," \u7c7b\u578b\uff0c\u90e8\u7f72\u65e0\u72b6\u6001\u670d\u52a1\uff0c\u8bf7\u6ce8\u610f\uff0c\u4f01\u4e1a\u5927\u591a\u6570\u4e1a\u52a1\u5e94\u7528\u90fd\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u8be5\u7c7b\u578b\u8fdb\u884c\u90e8\u7f72\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u89c4\u5212\u5e94\u7528\u4ea4\u4ed8\u7684\u73af\u5883\uff0c\u6211\u4eec\u9009\u62e9\u57fa\u4e8e\u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"li"},"Default")," \u4ea4\u4ed8\u76ee\u6807\u521b\u5efa\u7684\u9ed8\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"li"},"Default")," \u73af\u5883\uff1b")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(27439).Z})),(0,l.kt)("h2",{id:"\u8bbe\u7f6e\u5e94\u7528\u7684\u90e8\u7f72\u53c2\u6570"},"\u8bbe\u7f6e\u5e94\u7528\u7684\u90e8\u7f72\u53c2\u6570"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u770b\u5230\u5e94\u7528\u7684\u90e8\u7f72\u914d\u7f6e\u9875\u9762\uff0c\u6211\u4eec\u9700\u8981\u914d\u7f6e\u7684\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Image \u5730\u5740\uff0c\u586b\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"crccheck/hello-world"),"\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5176\u4ed6\u53c2\u6570\u8bbe\u7f6e\u5728\u5f53\u524d\u7528\u4f8b\u4e2d\u65e0\u9700\u8fdb\u884c\u8bbe\u7f6e\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(67337).Z})),(0,l.kt)("p",null,"\u786e\u8ba4\u521b\u5efa\u540e\u5373\u53ef\u8fdb\u5165\u5e94\u7528\u7ba1\u7406\u9875\u9762\uff0c\u8fd9\u65f6\u5e94\u7528\u8fd8\u6ca1\u6709\u5f00\u59cb\u8fdb\u884c\u90e8\u7f72\uff0cVelaUX \u9ed8\u8ba4\u751f\u6210\u4e86\u9ed8\u8ba4\u73af\u5883\u7684\u4ea4\u4ed8 ",(0,l.kt)("a",{parentName:"p",href:"./getting-started/core-concept#%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88workflow%EF%BC%89"},"\u5de5\u4f5c\u6d41")," \u548c\u8c03\u6574\u5e94\u7528\u526f\u672c\u6570\u91cf\u7684 ",(0,l.kt)("a",{parentName:"p",href:"./getting-started/core-concept#%E8%BF%90%E7%BB%B4%E7%89%B9%E5%BE%81%EF%BC%88trait%EF%BC%89"},"\u8fd0\u7ef4\u7279\u5f81"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(33984).Z})),(0,l.kt)("h2",{id:"\u6267\u884c\u73af\u5883\u7684\u90e8\u7f72"},"\u6267\u884c\u73af\u5883\u7684\u90e8\u7f72"),(0,l.kt)("p",null,"\u76f4\u63a5\u70b9\u51fb\u9875\u9762\u53f3\u4e0a\u65b9\u7684\u90e8\u7f72\u6309\u94ae\u3002\u5de5\u4f5c\u6d41\u6267\u884c\u5b8c\u6210\u540e\u5237\u65b0\u5e94\u7528\u5b9e\u4f8b\u5217\u8868\u5373\u53ef\u67e5\u770b\u5230\u5df2\u7ecf\u90e8\u7f72\u5b8c\u6210\u7684\u5b9e\u4f8b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(26802).Z})),(0,l.kt)("p",null,"\u5728\u90e8\u7f72\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u53ef\u4ee5\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Check the details")," \u6765\u67e5\u770b\u5e94\u7528\u7684\u76f8\u5173\u72b6\u6001\u4fe1\u606f\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(91525).Z})),(0,l.kt)("h2",{id:"\u5e94\u7528\u5220\u9664"},"\u5e94\u7528\u5220\u9664"),(0,l.kt)("p",null,"\u4f53\u9a8c\u5b8c\u6210\u540e\u5982\u4f55\u4f60\u9700\u8981\u5220\u9664\u90e8\u7f72\u7684\u5e94\u7528\uff0c\u4f60\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,l.kt)("p",null,"\uff081\uff09\u8fdb\u5165\u5e94\u7528\u7684\u73af\u5883\u9875\u9762\uff0c\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"Recycle"),"\uff0c\u5373\u53ef\u5b8c\u6210\u8be5\u73af\u5883\u7684\u90e8\u7f72\u8d44\u6e90\u56de\u6536\u3002"),(0,l.kt)("p",null,"\uff082\uff09\u56de\u5230\u5e94\u7528\u5217\u8868\u9875\u9762\uff0c\u70b9\u51fb\u5e94\u7528\u5361\u7247\u7684\u64cd\u4f5c\u6309\u94ae\uff0c\u9009\u62e9\u5220\u9664\u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u64cd\u4f5c\uff0c\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86\u7b2c\u4e00\u4e2a\u5e94\u7528\u7684\u4ea4\u4ed8\uff0c\u5b8c\u6210\u4e86\u8fdb\u9636\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9605\u8bfb\u5e76\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"./tutorials/k8s-object"},"\u5b9e\u8df5\u6559\u7a0b")," \u7ae0\u8282\u6587\u7ae0\uff0c\u89e3\u9501\u66f4\u591a KubeVela \u80fd\u529b\u3002")))}u.isMDXComponent=!0},33984:function(e,t,n){"use strict";t.Z=n.p+"assets/images/created-first-vela-app-72bb1e73ad0c14d69f0c81595d88aa44.jpg"},45783:function(e,t,n){"use strict";t.Z=n.p+"assets/images/dashboard-8e3a98a59e607bc27a364e9ed63011e5.png"},27439:function(e,t,n){"use strict";t.Z=n.p+"assets/images/new-first-vela-app-37f68b7b144aa275b46e5715242fbcfb.jpg"},67337:function(e,t,n){"use strict";t.Z=n.p+"assets/images/port-first-vela-app-ef1b1418ec4f098349a501ffd211b673.png"},91525:function(e,t,n){"use strict";t.Z=n.p+"assets/images/status-first-vela-app-810ae1e8197263369bf002fc584126e6.jpg"},26802:function(e,t,n){"use strict";t.Z=n.p+"assets/images/succeed-first-vela-app-4cb36d6a3f88c2efc8d7bd4f3f972156.jpg"}}]);