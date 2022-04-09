(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[81148],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,v=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(v,s(s({ref:t},c),{},{components:n})):r.createElement(v,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54011:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s={title:"Gateway for Public Access"},i={unversionedId:"end-user/traits/ingress",id:"version-v1.3/end-user/traits/ingress",isDocsHomePage:!1,title:"Gateway for Public Access",description:"The gateway trait exposes a component to public Internet via a valid domain.",source:"@site/versioned_docs/version-v1.3/end-user/traits/ingress.md",sourceDirName:"end-user/traits",slug:"/end-user/traits/ingress",permalink:"/docs/end-user/traits/ingress",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/traits/ingress.md",version:"v1.3",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649421307,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Gateway for Public Access"},sidebar:"version-v1.3/docs",previous:{title:"Provision an RDS instance with more than one database",permalink:"/docs/end-user/components/cloud-services/provision-an-RDS-instance-with-more-than-one-database"},next:{title:"Rollout",permalink:"/docs/end-user/traits/rollout"}},l=[{value:"How to use",id:"how-to-use",children:[]}],p={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gateway")," trait exposes a component to public Internet via a valid domain."),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("p",null,"Attach a ",(0,o.kt)("inlineCode",{parentName:"p"},"gateway")," trait to the component you want to expose and deploy."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# vela-app.yaml\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: first-vela-app\nspec:\n  components:\n    - name: express-server\n      type: webservice\n      properties:\n        image: crccheck/hello-world\n        port: 8000\n      traits:\n        - type: gateway\n          properties:\n            domain: testsvc.example.com\n            http:\n              "/": 8000\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela up -f https://raw.githubusercontent.com/oam-dev/kubevela/master/docs/examples/vela-app.yaml\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"application.core.oam.dev/first-vela-app created\n")),(0,o.kt)("p",null,"Check the status until we see ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"running"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vela status first-vela-app\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"About:\n\n  Name:         first-vela-app\n  Namespace:    default\n  Created at:   2022-01-11 22:04:29 +0800 CST\n  Status:       running\n\nWorkflow:\n\n  mode: DAG\n  finished: true\n  Suspend: false\n  Terminated: false\n  Steps\n  - id:gfgwqp6pqh\n    name:express-server\n    type:apply-component\n    phase:succeeded\n    message:\n\nServices:\n\n  - Name: express-server  Env:\n    Type: webservice\n    healthy Ready:1/1\n    Traits:\n      - \u2705 gateway: Visiting URL: testsvc.example.com, IP: 1.5.1.1\n")),(0,o.kt)("p",null,"You can also get the endpoint by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"vela status first-vela-app --endpoint\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"|--------------------------------|----------------------------+\n|    REF(KIND/NAMESPACE/NAME)    |          ENDPOINT          |\n|--------------------------------|----------------------------+\n| Ingress/default/express-server | http://testsvc.example.com |\n|--------------------------------|----------------------------+\n")),(0,o.kt)("p",null,"Then you will be able to visit this application via its domain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -H "Host:testsvc.example.com" http://<your ip address>/\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'<xmp>\nHello World\n\n\n                                       ##         .\n                                 ## ## ##        ==\n                              ## ## ## ## ##    ===\n                           /""""""""""""""""\\___/ ===\n                      ~~~ {~~ ~~~~ ~~~ ~~~~ ~~ ~ /  ===- ~~~\n                           \\______ o          _,/\n                            \\      \\       _,\'\n                             `\'--.._\\..--\'\'\n</xmp>\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f This section requires your runtime cluster has a working ingress controller.")))}c.isMDXComponent=!0}}]);