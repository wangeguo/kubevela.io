(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[51173],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37648:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return s}});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i={title:"View Application Logs",description:"View an application log by KubeVela dashboard"},p={unversionedId:"how-to/dashboard/application/get-application-log",id:"version-v1.3/how-to/dashboard/application/get-application-log",isDocsHomePage:!1,title:"View Application Logs",description:"View an application log by KubeVela dashboard",source:"@site/versioned_docs/version-v1.3/how-to/dashboard/application/get-application-log.md",sourceDirName:"how-to/dashboard/application",slug:"/how-to/dashboard/application/get-application-log",permalink:"/docs/how-to/dashboard/application/get-application-log",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/how-to/dashboard/application/get-application-log.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"View Application Logs",description:"View an application log by KubeVela dashboard"},sidebar:"version-v1.3/docs",previous:{title:"Modify Replicas",permalink:"/docs/tutorials/scaler"},next:{title:"Expose Application for Public Access",permalink:"/docs/how-to/dashboard/application/get-application-endpoint"}},l=[{value:"Next Step",id:"next-step",children:[]}],c={toc:l};function s(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can view the logs of application in the environment tab."),(0,a.kt)("p",null,"Click the icon in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Action")," column, you'll see the running logs for pod."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pod log",src:n(28917).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pod log",src:n(68476).Z})),(0,a.kt)("p",null,"By default, the logs will refresh every 5s. If your logs didn't have timestamp, you can click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Show timestamps")," to see."),(0,a.kt)("h3",{id:"next-step"},"Next Step"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./get-application-endpoint"},"Expose Application for Public Access"))))}s.isMDXComponent=!0},68476:function(e,t,n){"use strict";t.Z=n.p+"assets/images/log-show-7f9e836762389cd4261a8cc04554208a.jpg"},28917:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pod-log-64980c21f6364bc7c584ab230b517c5e.jpg"}}]);