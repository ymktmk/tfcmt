"use strict";(self.webpackChunktfcmt=self.webpackChunktfcmt||[]).push([[377],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>f});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(c,".").concat(h)]||u[h]||s[h]||r;return n?a.createElement(f,i(i({ref:e},m),{},{components:n})):a.createElement(f,i({ref:e},m))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=h;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p[u]="string"==typeof t?t:o,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1443:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:600},i="Patch tfcmt plan comment",p={unversionedId:"plan-patch",id:"plan-patch",title:"Patch tfcmt plan comment",description:"tfcmt >= v3.2.0 | #199 #245 #248 #249",source:"@site/docs/plan-patch.md",sourceDirName:".",slug:"/plan-patch",permalink:"/tfcmt/plan-patch",draft:!1,editUrl:"https://github.com/suzuki-shunsuke/tfcmt-docs/edit/main/docs/plan-patch.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600},sidebar:"tutorialSidebar",previous:{title:"Compared with tfnotify v0.7.0",permalink:"/tfcmt/compared-with-tfnotify"},next:{title:"Command Usage",permalink:"/tfcmt/usage"}},c={},l=[{value:"Motivation",id:"motivation",level:3},{value:"Trouble shooting",id:"trouble-shooting",level:3},{value:"\u26a0\ufe0f Note to use  tfcmt plan&#39;s patch option with github-comment hide",id:"\ufe0f-note-to-use--tfcmt-plans-patch-option-with-github-comment-hide",level:3}],m={toc:l},u="wrapper";function s(t){let{components:e,...n}=t;return(0,o.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patch-tfcmt-plan-comment"},"Patch ",(0,o.kt)("inlineCode",{parentName:"h1"},"tfcmt plan")," comment"),(0,o.kt)("p",null,"tfcmt >= ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/releases/tag/v3.2.0"},"v3.2.0")," | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/199"},"#199")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/245"},"#245")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/248"},"#248")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/tfcmt/issues/249"},"#249")),(0,o.kt)("p",null,"Instead of creating a new comment, you can update existing comment. This is useful to keep the pull request comments clean."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/164969354-02bdd49a-547e-4951-9262-033ec5b4db11.png",alt:"image"})),(0,o.kt)("p",null,"--"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/13323303/164969385-355e801e-3d58-4b75-9657-0bcc10da8d12.png",alt:"image"})),(0,o.kt)("p",null,"The option ",(0,o.kt)("inlineCode",{parentName:"p"},"-patch")," has been added to ",(0,o.kt)("inlineCode",{parentName:"p"},"tfcmt plan")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"tfcmt plan -patch -- terraform plan -no-color\n")),(0,o.kt)("p",null,"And the configuration option ",(0,o.kt)("inlineCode",{parentName:"p"},"plan_patch")," has been added."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"plan_patch: true\n")),(0,o.kt)("p",null,"The command line option ",(0,o.kt)("inlineCode",{parentName:"p"},"-patch")," takes precedence over configuration file option ",(0,o.kt)("inlineCode",{parentName:"p"},"plan_patch"),"."),(0,o.kt)("p",null,"If you want to disable patching although ",(0,o.kt)("inlineCode",{parentName:"p"},"plan_patch")," is true, please set ",(0,o.kt)("inlineCode",{parentName:"p"},"-patch=false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt plan -patch=false -- terraform plan -no-color\n")),(0,o.kt)("h3",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"By patching the comment instead of creating a new comment, you can keep the pull request comments clean."),(0,o.kt)("h3",{id:"trouble-shooting"},"Trouble shooting"),(0,o.kt)("p",null,"If the comment isn't patched expectedly, please set ",(0,o.kt)("inlineCode",{parentName:"p"},"-log-level=debug"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ tfcmt -log-level=debug plan -patch -- terraform plan -no-color\n")),(0,o.kt)("h3",{id:"\ufe0f-note-to-use--tfcmt-plans-patch-option-with-github-comment-hide"},"\u26a0\ufe0f Note to use  tfcmt plan's patch option with github-comment hide"),(0,o.kt)("p",null,"If you hide comments by ",(0,o.kt)("a",{parentName:"p",href:"https://suzuki-shunsuke.github.io/github-comment/hide"},"github-comment hide")," and enable tfcmt plan's patch option,\nyou should be careful not to hide tfcmt plan's comments."),(0,o.kt)("p",null,"There are some ways to fix the problem."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop using ",(0,o.kt)("inlineCode",{parentName:"li"},"github-comment hide")),(0,o.kt)("li",{parentName:"ol"},"Fix github-comment hide's condition and exclude tfcmt's comments from the target ofgithub-comment hide"),(0,o.kt)("li",{parentName:"ol"},"Run github-comment hide after tfcmt")))}s.isMDXComponent=!0}}]);