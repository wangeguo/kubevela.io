(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[56830],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},49694:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i={title:"Deploy Container as Web Service"},s={unversionedId:"end-user/components/cue/webservice",id:"end-user/components/cue/webservice",isDocsHomePage:!1,title:"Deploy Container as Web Service",description:"Service-oriented components are components that support external access to services with the container as the core, and their functions cover the needs of most of he microservice scenarios.",source:"@site/docs/end-user/components/cue/webservice.md",sourceDirName:"end-user/components/cue",slug:"/end-user/components/cue/webservice",permalink:"/docs/next/end-user/components/cue/webservice",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cue/webservice.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1649409805,formattedLastUpdatedAt:"4/8/2022",frontMatter:{title:"Deploy Container as Web Service"},sidebar:"docs",previous:{title:"Deploy Helm Charts",permalink:"/docs/next/end-user/components/helm"},next:{title:"Deploy Container based Task and Cron Task",permalink:"/docs/next/end-user/components/cue/task"}},c=[],l={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Service-oriented components are components that support external access to services with the container as the core, and their functions cover the needs of most of he microservice scenarios."),(0,o.kt)("p",null,"Please copy shell below and apply to the cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | vela up -f -\n# YAML begins\napiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: website\nspec:\n  components:\n    - name: frontend\n      type: webservice\n      properties:\n        image: oamdev/testapp:v1\n        cmd: ["node", "server.js"]\n        ports:\n          - port: 8080\n        cpu: "0.1"\n        env:\n          - name: FOO\n            value: bar\n# YAML ends\nEOF\n')),(0,o.kt)("p",null,"You can also save the YAML file as website.yaml and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"vela up -f website.yaml")," command to deploy."),(0,o.kt)("p",null,"Next, check the deployment status of the application through ",(0,o.kt)("inlineCode",{parentName:"p"},"vela status <application name>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela status website\nAbout:\n\n  Name:         website\n  Namespace:    default\n  Created at:   2022-01-11 21:04:59 +0800 CST\n  Status:       running\n\nWorkflow:\n\n  mode: DAG\n  finished: true\n  Suspend: false\n  Terminated: false\n  Steps\n  - id:2y4rv8479h\n    name:frontend\n    type:apply-component\n    phase:succeeded\n    message:\n\nServices:\n\n  - Name: frontend  Env:\n    Type: webservice\n    healthy Ready:1/1\n")),(0,o.kt)("p",null,"When we see that the ",(0,o.kt)("inlineCode",{parentName:"p"},"finished")," field in Workflow is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and the Status is ",(0,o.kt)("inlineCode",{parentName:"p"},"running"),", it means that the entire application is delivered successfully."),(0,o.kt)("p",null,"If status shows as rendering or healthy as false, it means that the application has either failed to deploy or is still being deployed. Please proceed according to the information returned in ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl get application <application name> -o yaml"),"."),(0,o.kt)("p",null,"You can also view application list by using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ vela ls\nAPP     COMPONENT   TYPE        TRAITS  PHASE   HEALTHY STATUS  CREATED-TIME                 \nwebsite frontend    webservice          running healthy         2021-08-28 18:26:47 +0800 CST\n")),(0,o.kt)("p",null,"We also see that the PHASE of the app is running and the STATUS is healthy."))}p.isMDXComponent=!0}}]);