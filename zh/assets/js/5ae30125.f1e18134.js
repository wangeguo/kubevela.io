(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[10026],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),s=i,m=f["".concat(c,".").concat(s)]||f[s]||d[s]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3076:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a={title:"\u6838\u5fc3\u6982\u5ff5"},l={unversionedId:"getting-started/core-concept",id:"getting-started/core-concept",isDocsHomePage:!1,title:"\u6838\u5fc3\u6982\u5ff5",description:"KubeVela \u56f4\u7ed5\u7740\u4e91\u539f\u751f\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u573a\u666f\u5c55\u5f00\uff0c\u80cc\u540e\u7684\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\u662f Open Application Model\uff0c\u7b80\u79f0 OAM \uff0c\u5176\u6838\u5fc3\u662f\u5c06\u5e94\u7528\u90e8\u7f72\u6240\u9700\u7684\u6240\u6709\u7ec4\u4ef6\u548c\u5404\u9879\u8fd0\u7ef4\u52a8\u4f5c\uff0c\u63cf\u8ff0\u4e3a\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u4e0e\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u201c\u90e8\u7f72\u8ba1\u5212\u201d\uff0c\u8fdb\u800c\u5b9e\u73b0\u5728\u6df7\u5408\u73af\u5883\u4e2d\u6807\u51c6\u5316\u548c\u9ad8\u6548\u7387\u7684\u5e94\u7528\u4ea4\u4ed8\u3002KubeVela \u5305\u62ec\u4ee5\u4e0b\u6838\u5fc3\u6982\u5ff5\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/core-concept.md",sourceDirName:"getting-started",slug:"/getting-started/core-concept",permalink:"/zh/docs/next/getting-started/core-concept",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/getting-started/core-concept.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649409805,formattedLastUpdatedAt:"2022/4/8",frontMatter:{title:"\u6838\u5fc3\u6982\u5ff5"},sidebar:"docs",previous:{title:"\u4e00\u952e\u521b\u5efa/\u9500\u6bc1\u73af\u5883",permalink:"/zh/docs/next/case-studies/initialize-env"},next:{title:"\u7cfb\u7edf\u67b6\u6784",permalink:"/zh/docs/next/getting-started/architecture"}},c=[{value:"\u5e94\u7528\uff08Application\uff09",id:"\u5e94\u7528\uff08application\uff09",children:[{value:"\u7ec4\u4ef6\uff08Component\uff09",id:"\u7ec4\u4ef6\uff08component\uff09",children:[]},{value:"\u8fd0\u7ef4\u7279\u5f81\uff08Trait\uff09",id:"\u8fd0\u7ef4\u7279\u5f81\uff08trait\uff09",children:[]},{value:"\u5de5\u4f5c\u6d41\uff08Workflow\uff09",id:"\u5de5\u4f5c\u6d41\uff08workflow\uff09",children:[]},{value:"\u5e94\u7528\u7b56\u7565\uff08Policy\uff09",id:"\u5e94\u7528\u7b56\u7565\uff08policy\uff09",children:[]}]},{value:"\u96c6\u7fa4\uff08Cluster\uff09",id:"\u96c6\u7fa4\uff08cluster\uff09",children:[]},{value:"\u63d2\u4ef6\uff08Addon\uff09",id:"\u63d2\u4ef6\uff08addon\uff09",children:[]},{value:"\u4e0b\u4e00\u6b65",id:"\u4e0b\u4e00\u6b65",children:[]}],p={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"KubeVela \u56f4\u7ed5\u7740\u4e91\u539f\u751f\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u573a\u666f\u5c55\u5f00\uff0c\u80cc\u540e\u7684\u5e94\u7528\u4ea4\u4ed8\u6a21\u578b\u662f ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/oam/oam-model"},"Open Application Model"),"\uff0c\u7b80\u79f0 OAM \uff0c\u5176\u6838\u5fc3\u662f\u5c06\u5e94\u7528\u90e8\u7f72\u6240\u9700\u7684\u6240\u6709\u7ec4\u4ef6\u548c\u5404\u9879\u8fd0\u7ef4\u52a8\u4f5c\uff0c\u63cf\u8ff0\u4e3a\u4e00\u4e2a\u7edf\u4e00\u7684\u3001\u4e0e\u57fa\u7840\u8bbe\u65bd\u65e0\u5173\u7684\u201c\u90e8\u7f72\u8ba1\u5212\u201d\uff0c\u8fdb\u800c\u5b9e\u73b0\u5728\u6df7\u5408\u73af\u5883\u4e2d\u6807\u51c6\u5316\u548c\u9ad8\u6548\u7387\u7684\u5e94\u7528\u4ea4\u4ed8\u3002KubeVela \u5305\u62ec\u4ee5\u4e0b\u6838\u5fc3\u6982\u5ff5\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt",src:n(5368).Z})),(0,o.kt)("h2",{id:"\u5e94\u7528\uff08application\uff09"},"\u5e94\u7528\uff08Application\uff09"),(0,o.kt)("p",null,"\u5e94\u7528\u662f\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5fae\u670d\u52a1\u4e1a\u52a1\u5355\u5143\u6240\u5305\u62ec\u7684\u5236\u54c1\uff08\u4e8c\u8fdb\u5236\u3001Docker \u955c\u50cf\u3001Helm Chart...\uff09\u6216\u4e91\u670d\u52a1\u7684\u4ea4\u4ed8\u548c\u7ba1\u7406\u9700\u6c42\uff0c\u5b83\u7531",(0,o.kt)("a",{parentName:"p",href:"#%E7%BB%84%E4%BB%B6%EF%BC%88component%EF%BC%89"},"\u7ec4\u4ef6"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E8%BF%90%E7%BB%B4%E7%89%B9%E5%BE%81%EF%BC%88Trait%EF%BC%89"},"\u8fd0\u7ef4\u7279\u5f81"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E5%B7%A5%E4%BD%9C%E6%B5%81%EF%BC%88workflow%EF%BC%89"},"\u5de5\u4f5c\u6d41"),"\u3001",(0,o.kt)("a",{parentName:"p",href:"#%E5%BA%94%E7%94%A8%E7%AD%96%E7%95%A5%EF%BC%88Policy%EF%BC%89"},"\u5e94\u7528\u7b56\u7565"),"\u56db\u90e8\u5206\u7ec4\u6210\u3002"),(0,o.kt)("h3",{id:"\u7ec4\u4ef6\uff08component\uff09"},"\u7ec4\u4ef6\uff08Component\uff09"),(0,o.kt)("p",null,"\u5b9a\u4e49\u4e00\u4e2a\u5236\u54c1\u6216\u4e91\u670d\u52a1\u7684\u4ea4\u4ed8\u548c\u7ba1\u7406\u5f62\u5f0f\uff0c\u4e00\u4e2a\u5e94\u7528\u4e2d\u53ef\u4ee5\u5305\u62ec\u591a\u4e2a\u7ec4\u4ef6\uff0c\u6700\u4f73\u7684\u5b9e\u8df5\u65b9\u6848\u662f\u4e00\u4e2a\u5e94\u7528\u4e2d\u5305\u62ec\u4e00\u4e2a\u4e3b\u7ec4\u4ef6\uff08\u6838\u5fc3\u4e1a\u52a1\uff09\u548c\u9644\u5c5e\u7ec4\u4ef6\uff08\u5f3a\u4f9d\u8d56\u6216\u72ec\u4eab\u7684\u4e2d\u95f4\u4ef6\uff0c\u8fd0\u7ef4\u7ec4\u4ef6\u7b49\uff09\u3002\u7ec4\u4ef6\u7684\u7c7b\u578b\u7531 ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition#%E7%BB%84%E4%BB%B6%E5%AE%9A%E4%B9%89%EF%BC%88componentdefinition%EF%BC%89"},"Component Definition")," \u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"\u8fd0\u7ef4\u7279\u5f81\uff08trait\uff09"},"\u8fd0\u7ef4\u7279\u5f81\uff08Trait\uff09"),(0,o.kt)("p",null,"\u8fd0\u7ef4\u7279\u5f81\u662f\u53ef\u4ee5\u968f\u65f6\u7ed1\u5b9a\u7ed9\u5f85\u90e8\u7f72\u7ec4\u4ef6\u7684\u3001\u6a21\u5757\u5316\u3001\u53ef\u62d4\u63d2\u7684\u8fd0\u7ef4\u80fd\u529b\uff0c\u6bd4\u5982\uff1a\u526f\u672c\u6570\u8c03\u6574\uff08\u624b\u52a8\u3001\u81ea\u52a8\uff09\u3001\u6570\u636e\u6301\u4e45\u5316\u3001 \u8bbe\u7f6e\u7f51\u5173\u7b56\u7565\u3001\u81ea\u52a8\u8bbe\u7f6e DNS \u89e3\u6790\u7b49\u3002\u7528\u6237\u53ef\u4ee5\u4ece\u793e\u533a\u83b7\u53d6\u6210\u719f\u7684\u80fd\u529b\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u5b9a\u4e49\u3002\u8fd0\u7ef4\u7279\u5f81\u7684\u7c7b\u578b\u7531 ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition#%E8%BF%90%E7%BB%B4%E7%89%B9%E5%BE%81%E5%AE%9A%E4%B9%89%EF%BC%88traitdefinition%EF%BC%89"},"Trait Definition")," \u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"\u5de5\u4f5c\u6d41\uff08workflow\uff09"},"\u5de5\u4f5c\u6d41\uff08Workflow\uff09"),(0,o.kt)("p",null,"\u5de5\u4f5c\u6d41\u7531\u591a\u4e2a\u6b65\u9aa4\u7ec4\u6210\uff0c\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u5e94\u7528\u5728\u67d0\u4e2a\u73af\u5883\u7684\u4ea4\u4ed8\u8fc7\u7a0b\u3002\u5178\u578b\u7684\u5de5\u4f5c\u6d41\u6b65\u9aa4\u5305\u62ec\u4eba\u5de5\u5ba1\u6838\u3001\u6570\u636e\u4f20\u9012\u3001\u591a\u96c6\u7fa4\u53d1\u5e03\u3001\u901a\u77e5\u7b49\u3002\u5de5\u4f5c\u6d41\u6b65\u9aa4\u7c7b\u578b\u7531 ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition#%E5%B7%A5%E4%BD%9C%E6%B5%81%E8%8A%82%E7%82%B9%E5%AE%9A%E4%B9%89%EF%BC%88workflowstepdefinition%EF%BC%89"},"Workflow Step Definition")," \u5b9a\u4e49\u3002"),(0,o.kt)("h3",{id:"\u5e94\u7528\u7b56\u7565\uff08policy\uff09"},"\u5e94\u7528\u7b56\u7565\uff08Policy\uff09"),(0,o.kt)("p",null,"\u5e94\u7528\u7b56\u7565\uff08Policy\uff09\u8d1f\u8d23\u5b9a\u4e49\u6307\u5b9a\u5e94\u7528\u4ea4\u4ed8\u8fc7\u7a0b\u4e2d\u7684\u7b56\u7565\uff0c\u6bd4\u5982\u8d28\u91cf\u4fdd\u8bc1\u7b56\u7565\u3001\u5b89\u5168\u7ec4\u7b56\u7565\u3001\u9632\u706b\u5899\u89c4\u5219\u3001SLO \u76ee\u6807\u3001\u653e\u7f6e\u7b56\u7565\u7b49\u3002\u5e94\u7528\u7b56\u7565\u7684\u7c7b\u578b\u7531 ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition#%E5%BA%94%E7%94%A8%E7%AD%96%E7%95%A5%E5%AE%9A%E4%B9%89%EF%BC%88policydefinition%EF%BC%89"},"Policy Definition")," \u5b9a\u4e49\u3002"),(0,o.kt)("h2",{id:"\u96c6\u7fa4\uff08cluster\uff09"},"\u96c6\u7fa4\uff08Cluster\uff09"),(0,o.kt)("p",null,"Kubernetes \u96c6\u7fa4\u63cf\u8ff0\uff0c\u5b83\u5305\u62ec\u4e86\u96c6\u7fa4\u901a\u4fe1\u5bc6\u94a5\u7b49\u4fe1\u606f\uff0cKubernetes \u96c6\u7fa4\u76ee\u524d\u662f KubeVela \u5e94\u7528\u4ea4\u4ed8\u7684\u4e3b\u8981\u9014\u5f84\u3002"),(0,o.kt)("h2",{id:"\u63d2\u4ef6\uff08addon\uff09"},"\u63d2\u4ef6\uff08Addon\uff09"),(0,o.kt)("p",null,"\u5e73\u53f0\u6269\u5c55\u63d2\u4ef6\u63cf\u8ff0\uff0cKubeVela \u9075\u4ece\u5fae\u5185\u6838\u3001\u9ad8\u5ea6\u53ef\u6269\u5c55\u7684\u8bbe\u8ba1\u6a21\u5f0f\u3002KubeVela \u5728\u5e94\u7528\u4ea4\u4ed8\u548c\u7ba1\u7406\u7684\u5b8c\u6574\u573a\u666f\u4e2d\u57fa\u4e8e OAM \u6a21\u578b\u7684\u6982\u5ff5\uff0c\u5c06\u5e94\u7528\u7ec4\u4ef6\u7c7b\u578b\u3001\u8fd0\u7ef4\u7279\u5f81\u3001\u5de5\u4f5c\u6d41\u6b65\u9aa4\u3001\u5e94\u7528\u7b56\u7565\u7b49\u529f\u80fd\u5747\u8bbe\u8ba1\u6210\u53ef\u63d2\u62d4\u53ef\u6269\u5c55\u7684\u6a21\u5f0f\u3002\u8fd9\u4e9b\u53ef\u6269\u5c55\u7684\u673a\u5236\u5b9a\u4e49\u4e0e\u7b2c\u4e09\u65b9\u89e3\u51b3\u65b9\u6848\u7ed3\u5408\u5f62\u6210\u63d2\u4ef6\uff08 Addon\uff09\u3002\u6bcf\u4e00\u4e2a\u63d2\u4ef6\u4e00\u822c\u4f1a\u5305\u62ec\u6a21\u5757\u5b9a\u4e49 ",(0,o.kt)("a",{parentName:"p",href:"../platform-engineers/oam/x-definition"},"X-Definition")," \uff0c\u4ee3\u8868\u5b83\u6269\u5c55\u7684\u80fd\u529b\u96c6\u5408\uff0c\u4ee5\u53ca\u7b2c\u4e09\u65b9\u89e3\u51b3\u65b9\u6848\u7684\u5b89\u88c5\u5305\uff0c\u5982 Kubernetes CRD \u53ca\u5176\u63a7\u5236\u5668\u7b49\u3002"),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u6b65"},"\u4e0b\u4e00\u6b65"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u67e5\u770b ",(0,o.kt)("a",{parentName:"li",href:"./architecture"},"\u67b6\u6784\u6587\u6863"),"\uff0c\u4e86\u89e3 KubeVela \u7684\u6574\u4f53\u67b6\u6784\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u67e5\u770b ",(0,o.kt)("a",{parentName:"li",href:"../end-user/quick-start-cli"},"\u5feb\u901f\u5f00\u59cb"),"\uff0c\u4e86\u89e3\u66f4\u591a\u4f7f\u7528\u573a\u666f\u548c\u6700\u4f73\u5b9e\u8df5\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u67e5\u770b ",(0,o.kt)("a",{parentName:"li",href:"../end-user/components/helm"},"\u64cd\u4f5c\u624b\u518c")," to check out more features.")))}u.isMDXComponent=!0},5368:function(e,t,n){"use strict";t.Z=n.p+"assets/images/oam-concept-0002d6418d319c91d9ccd3193c12356c.jpg"}}]);