"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[647],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=i.createContext({}),p=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(a),f=s,m=h["".concat(r,".").concat(f)]||h[f]||d[f]||n;return a?i.createElement(m,l(l({ref:t},c),{},{components:a})):i.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=f;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[h]="string"==typeof e?e:s,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3051:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=a(7462),s=(a(7294),a(3905));const n={},l="XboxHDMI Software",o={unversionedId:"xbox-hdmi/software/xboxhdmi",id:"xbox-hdmi/software/xboxhdmi",title:"XboxHDMI Software",description:"This guide is for the installation of the XboxHDMI software and kernel patch.",source:"@site/docs/xbox-hdmi/software/01-xboxhdmi.md",sourceDirName:"xbox-hdmi/software",slug:"/xbox-hdmi/software/xboxhdmi",permalink:"/xbox-hdmi/software/xboxhdmi",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/xbox-hdmi/software/01-xboxhdmi.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"XboxHD+ Software",permalink:"/xbox-hdmi/software/xboxhd"},next:{title:"Upgrade",permalink:"/category/upgrade"}},r={},p=[{value:"Checklist",id:"checklist",level:2},{value:"Hard Drive Preparation",id:"hard-drive-preparation",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Patching BIOS",id:"patching-bios",level:2},{value:"Step 1",id:"step-1-1",level:3},{value:"Step 2",id:"step-2-1",level:3},{value:"Step 3",id:"step-3-1",level:3},{value:"Step 4",id:"step-4-1",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Step 6",id:"step-6",level:3},{value:"Verification",id:"verification",level:2},{value:"Step 1",id:"step-1-2",level:3},{value:"All Done",id:"all-done",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"xboxhdmi-software"},"XboxHDMI Software"),(0,s.kt)("p",null,"This guide is for the installation of the XboxHDMI software and kernel patch."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Say goodbye to the hassle of software patching! With ",(0,s.kt)("a",{parentName:"p",href:"https://makemhz.com/products/stellar"},"Project Stellar"),",\nenjoy a seamless installation experience where software patching becomes a thing of the past.")),(0,s.kt)("h2",{id:"checklist"},"Checklist"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","OpenXenium installed.",(0,s.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tested and verified that OpenXenium is accessible via network. (Both HTTP and FTP)"))),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","System is fully working.")),(0,s.kt)("h2",{id:"hard-drive-preparation"},"Hard Drive Preparation"),(0,s.kt)("h3",{id:"step-1"},"Step 1"),(0,s.kt)("p",null,"Boot console to XeniumOS via the eject button."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"XeniumOS Boot Screen",src:a(1265).Z,width:"1280",height:"960"})),(0,s.kt)("h3",{id:"step-2"},"Step 2"),(0,s.kt)("p",null,"Download the latest XboxHDMI app release."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/MakeMHz/xbox-hdmi-app/releases/latest"},"Latest Release")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"FTP BIOS bin file",src:a(7242).Z,width:"1546",height:"1013"})),(0,s.kt)("h3",{id:"step-3"},"Step 3"),(0,s.kt)("p",null,"Extract the files and FTP over the contents. (Location isn't important, but most people tend to place it inside E:\\apps)"),(0,s.kt)("h3",{id:"step-4"},"Step 4"),(0,s.kt)("p",null,"Leave Xbox on and continue to the next section."),(0,s.kt)("h2",{id:"patching-bios"},"Patching BIOS"),(0,s.kt)("h3",{id:"step-1-1"},"Step 1"),(0,s.kt)("p",null,"Download the latest 'Legacy - XboxHDMI' IPS file for your BIOS of choice."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/MakeMHz/xbox-hd-plus/blob/master/patches/README.md#xbox-kernel-patches-legacy---xboxhdmi"},"BIOS Patches")),(0,s.kt)("h3",{id:"step-2-1"},"Step 2"),(0,s.kt)("p",null,"Apply patch to BIOS by following the link to the patching guide for the corresponding BIOS patch. (Due to legal reasons we can not distribute the BIOS files)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Guides",src:a(8016).Z,width:"1546",height:"1013"})),(0,s.kt)("h3",{id:"step-3-1"},"Step 3"),(0,s.kt)("p",null,"FTP the patched BIOS file over to Xbox. It's recommended to store the BIOS file inside of a folder on the C drive called 'BIOS' for future refrences."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"FTP BIOS bin file",src:a(5222).Z,width:"1433",height:"1052"})),(0,s.kt)("h3",{id:"step-4-1"},"Step 4"),(0,s.kt)("p",null,"Flash BIOS."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 1",src:a(8472).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 2",src:a(2046).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 3",src:a(749).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 4",src:a(2427).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 5",src:a(1207).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 6",src:a(9007).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 7",src:a(8769).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 8",src:a(5441).Z,width:"1280",height:"720"})),(0,s.kt)("h3",{id:"step-5"},"Step 5"),(0,s.kt)("p",null,"Set the newly flashed BIOS as the default BIOS."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 9",src:a(2472).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 10",src:a(8155).Z,width:"1280",height:"720"})),(0,s.kt)("h3",{id:"step-6"},"Step 6"),(0,s.kt)("p",null,"Ensure that 'Instant Boot' is enabled. This automatically boot the default BIOS on power up."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 11",src:a(7149).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 12",src:a(6756).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 13",src:a(5775).Z,width:"1280",height:"720"})),(0,s.kt)("h2",{id:"verification"},"Verification"),(0,s.kt)("p",null,"At this point you can reboot the Xbox. This will boot the patched BIOS."),(0,s.kt)("h3",{id:"step-1-2"},"Step 1"),(0,s.kt)("p",null,"Launch the XboxHDMI app. If all went well you should now see the configuration app and text that says the kernel patch version.\n",(0,s.kt)("img",{alt:"Kernel patch installation verification",src:a(7068).Z,width:"1286",height:"719"})),(0,s.kt)("h2",{id:"all-done"},"All Done"),(0,s.kt)("p",null,"And that's it! Installation of the XboxHDMI kit can now continue."))}d.isMDXComponent=!0},7068:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/Patch-Verification-9a3ccb8cc3996cfbf35b801e603859e3.png"},8472:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step1-bc9e0fe575961554abe3393314c435ea.png"},8155:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step10-3fe35b2182705bcdcf6dcca31c6a177e.png"},7149:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step11-86018d6d68bfe2f1c231c4a6c7b332ad.png"},6756:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step12-0554c8f916ce02474d6fdfa0eb473a80.png"},5775:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step13-ab98aca7856ff2116a3326f2b790bbef.png"},2046:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step2-9d8ceffa9df81bdcfe8b9671b2d87db6.png"},749:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step3-d86349e5e9ceeed62d970c56eb572c95.png"},2427:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step4-4367c6e06460410ed3bcdfc3353a5bd8.png"},1207:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step5-826d59340a1031357eb3da3062bbe3a1.png"},9007:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step6-aa95b1531fa0da215bc3db2350f13a65.png"},8769:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step7-e9f616680d3436ca16960ee4dd11fd20.png"},5441:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step8-2e90bd7e87564f4620a4b0ef9da26c0c.png"},2472:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step9-4d76183a0d5c41a8ffb2490fa6d2ba00.png"},5222:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ftp_bios-7ce4d0788791e06303ce9538ea743d4c.png"},7242:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/latest_release_hdmi-638236e062e975a152b104ae08e90bf7.png"},8016:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/patches_guide_hdmi-536407e383cb3a2b23e22fa8e747d97e.png"},1265:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/xeniumos-ed48578f5629706b05f9c8370beda585.png"}}]);