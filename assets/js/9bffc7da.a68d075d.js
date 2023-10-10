"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[133],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),s=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return o.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return t?o.createElement(f,l(l({ref:r},p),{},{components:t})):o.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<a;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},125:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(7462),n=(t(7294),t(3905));const a={sidebar_position:3},l="Firmware Recovery",i={unversionedId:"project-stellar/firmware-recovery/index",id:"project-stellar/firmware-recovery/index",title:"Firmware Recovery",description:"Firmware recovery guide for Project Stellar over USB.",source:"@site/docs/project-stellar/firmware-recovery/index.md",sourceDirName:"project-stellar/firmware-recovery",slug:"/project-stellar/firmware-recovery/",permalink:"/project-stellar/firmware-recovery/",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/project-stellar/firmware-recovery/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"documentation",previous:{title:"Installation Troubleshooting",permalink:"/project-stellar/installation-troubleshooting/"},next:{title:"Knowledge Base",permalink:"/project-stellar/knowledge-base/"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Download",id:"download",level:2},{value:"Restore",id:"restore",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Missing RPI-RP2",id:"missing-rpi-rp2",level:3}],p={toc:s},u="wrapper";function d(e){let{components:r,...a}=e;return(0,n.kt)(u,(0,o.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"firmware-recovery"},"Firmware Recovery"),(0,n.kt)("p",null,"Firmware recovery guide for Project Stellar over USB."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Disconnect power from the Xbox and discharge by pressing the power button."),(0,n.kt)("li",{parentName:"ul"},"Disconnect Project Stellar from the system."),(0,n.kt)("li",{parentName:"ul"},"While holding the button on the side of the Stellar board connect it to a computer via USB. Once connected, release the button."),(0,n.kt)("li",{parentName:"ul"},'A mass storage device will appear "RPI-RP2".'),(0,n.kt)("li",{parentName:"ul"},"Drag and drop the 'stellar_recovery.uf2' to the RPI-RP2 drive."),(0,n.kt)("li",{parentName:"ul"},"Wait for file to transfer.")),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("p",null,"The latest recovery firmware can be found at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MakeMHz/project-stellar/releases/latest"},"https://github.com/MakeMHz/project-stellar/releases/latest"),"."),(0,n.kt)("p",null,"Click and download the ",(0,n.kt)("inlineCode",{parentName:"p"},"stellar_recovery.uf2")," file."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firmware Recovery",src:t(2179).Z,width:"1657",height:"1202"})),(0,n.kt)("h2",{id:"restore"},"Restore"),(0,n.kt)("p",null,"Drag and drop the 'stellar_recovery.uf2' to the RPI-RP2 drive. Wait for the file transfer to complete. This process can take up to 10 minutes, so be patient."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firmware Recovery",src:t(9346).Z,width:"1920",height:"1200"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firmware Recovery",src:t(9231).Z,width:"1920",height:"1200"})),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h3",{id:"missing-rpi-rp2"},"Missing RPI-RP2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Make sure the recovery button is pressed before connecting Project Stellar to your computer and released afterwards."),(0,n.kt)("li",{parentName:"ul"},"Try a different port, cable, or computer.")))}d.isMDXComponent=!0},9346:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/copy_1-5dd64d5f5f5898a2ef598debe68a9216.png"},9231:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/copy_2-28f1c4a3d5cb71b7b187506059562a42.png"},2179:(e,r,t)=>{t.d(r,{Z:()=>o});const o=t.p+"assets/images/download-22a17b281ad7d6ec5e1ea3fac1df874c.png"}}]);