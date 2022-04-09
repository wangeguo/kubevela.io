(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[66931],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(t),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return t?r.createElement(d,a(a({ref:n},c),{},{components:t})):r.createElement(d,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},10934:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=t(22122),i=t(19756),o=(t(67294),t(3905)),a={title:"Version Control for Definition"},l={unversionedId:"platform-engineers/x-def-version",id:"version-v1.3/platform-engineers/x-def-version",isDocsHomePage:!1,title:"Version Control for Definition",description:"When the capabilities(Component or Trait) changes, KubeVela will generate a definition revision automatically.",source:"@site/versioned_docs/version-v1.3/platform-engineers/x-def-version.md",sourceDirName:"platform-engineers",slug:"/platform-engineers/x-def-version",permalink:"/docs/platform-engineers/x-def-version",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/platform-engineers/x-def-version.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Version Control for Definition"},sidebar:"version-v1.3/docs",previous:{title:"Dry Run for Debugging",permalink:"/docs/platform-engineers/debug/dry-run"},next:{title:"CLI Commands",permalink:"/docs/cli/vela"}},p=[{value:"Specify Component/Trait Capability Revision in Application",id:"specify-componenttrait-capability-revision-in-application",children:[]}],s={toc:p};function c(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When the capabilities(Component or Trait) changes, KubeVela will generate a definition revision automatically."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check ComponentDefinition Revision")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$  kubectl get definitionrevision -l="componentdefinition.oam.dev/name=webservice" -n vela-system\nNAME            REVISION   HASH               TYPE\nwebservice-v1   1          3f6886d9832021ba   Component\nwebservice-v2   2          b3b9978e7164d973   Component\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check TraitDefinition Revision")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get definitionrevision -l="trait.oam.dev/name=rollout" -n vela-system\nNAME         REVISION   HASH               TYPE\nrollout-v1   1          e441f026c1884b14   Trait\n')),(0,o.kt)("p",null,"The best way to control version is using a new name for every definition version."),(0,o.kt)("h2",{id:"specify-componenttrait-capability-revision-in-application"},"Specify Component/Trait Capability Revision in Application"),(0,o.kt)("p",null,"Users can specify the revision with ",(0,o.kt)("inlineCode",{parentName:"p"},"@version")," approach, for example, if a user want to stick to using the ",(0,o.kt)("inlineCode",{parentName:"p"},"v1")," revision of ",(0,o.kt)("inlineCode",{parentName:"p"},"webservice")," component."),(0,o.kt)("p",null,"System admin can also write a webhook to inject the version automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: myapp\nspec:\n  components:\n  - name: express-server\n    type: webservice@v1\n    properties:\n      image: stefanprodan/podinfo:4.0.3\n")),(0,o.kt)("p",null,"In this way, if system admin changes the ComponentDefinition, it won't affect your application. "),(0,o.kt)("p",null,"If no revision specified, KubeVela will always use the latest revision when you upgrade your application."))}c.isMDXComponent=!0}}]);