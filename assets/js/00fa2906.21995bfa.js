"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[489],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||l;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={},i="Upgrading to Stellar XboxHD+",o={unversionedId:"xbox-hdmi/upgrade/stellar/index",id:"xbox-hdmi/upgrade/stellar/index",title:"Upgrading to Stellar XboxHD+",description:"This guide is for upgrading existing XboxHDMI and XboxHD+ installs to work with Project Stellar.",source:"@site/docs/xbox-hdmi/upgrade/00-stellar/index.md",sourceDirName:"xbox-hdmi/upgrade/00-stellar",slug:"/xbox-hdmi/upgrade/stellar/",permalink:"/xbox-hdmi/upgrade/stellar/",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/xbox-hdmi/upgrade/00-stellar/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upgrade",permalink:"/category/upgrade"},next:{title:"Upgrading to XboxHD+",permalink:"/xbox-hdmi/upgrade/xboxhd/"}},s={},p=[{value:"Checklist",id:"checklist",level:3},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Closing Notes",id:"closing-notes",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...l}=e;return(0,a.kt)(c,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upgrading-to-stellar-xboxhd"},"Upgrading to Stellar XboxHD+"),(0,a.kt)("p",null,"This guide is for upgrading existing XboxHDMI and XboxHD+ installs to work with Project Stellar."),(0,a.kt)("h3",{id:"checklist"},"Checklist"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Latest XboxHD+ Firmware"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","System is fully working.",(0,a.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","System has no stablity issues.")))),(0,a.kt)("h3",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Update the XboxHDMI/XboxHD+ to firmware version 2.2.0 or higher."),(0,a.kt)("h3",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"Disconnect the HDMI board from the system. Remove and clean the solder from the SDA, SCL, and GND pads."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remove the SDA and SCL wires from the Xbox motherboard. These are no longer needed")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Clean Board",src:r(6831).Z,width:"2040",height:"1536"})),(0,a.kt)("h3",{id:"step-3"},"Step 3"),(0,a.kt)("p",null,"Using the provided binder clip, align the PCB over the pads. Pay close attention and line up the pads and through holes so they sit both parallel and centered."),(0,a.kt)("p",null,"This step is tricky and will take a couple of minutes to line up perfectly. Taking the time to get right on the first try is well worth it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Clean Board",src:r(8233).Z,width:"3306",height:"2538"})),(0,a.kt)("h3",{id:"step-4"},"Step 4"),(0,a.kt)("p",null,"Solder the SCL connection first. Once that pad is soldered, remove the binder clip and check the aligment. If the alignment is off then desolder the SCL connection and re-align the board."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Solder",src:r(57).Z,width:"2607",height:"1136"})),(0,a.kt)("h3",{id:"step-5"},"Step 5"),(0,a.kt)("p",null,"Clean up the board and check for shorts between SDA, SCL, and GND. Re-install the XboxHD+."),(0,a.kt)("p",null,"Connect the Stellar link cable from the Project Stellar to the XboxHD+. It is recommended to connect the cable to Stellar while it's not on the pin header to avoid unnecessary stress on pin header."),(0,a.kt)("p",null,"Project Stellar can now be installed. Project Stellar has it's own installation guide ",(0,a.kt)("a",{parentName:"p",href:"/project-stellar/installation-guide"},"here"),"."),(0,a.kt)("h2",{id:"closing-notes"},"Closing Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The XboxHD+ app is no longer used once Project Stellar is installed and settings can be adjusted from StellarOS."),(0,a.kt)("li",{parentName:"ul"},"The installation can be reversed.")))}u.isMDXComponent=!0},6831:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clean_board-61dbe6ec905bd2df406ab3d551baa0b4.jpg"},8233:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/qsb_alignment-de83bafa7eb44be998ee0fb7fe3d8a50.jpg"},57:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/solder-f2eaa9fd1e0ee24be6ebe523acaa9ae6.jpg"}}]);