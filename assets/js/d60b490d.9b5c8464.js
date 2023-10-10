"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[219],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var i=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var r=i.createContext({}),o=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return i.createElement(r.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,r=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(a),u=s,g=c["".concat(r,".").concat(u)]||c[u]||h[u]||n;return a?i.createElement(g,l(l({ref:t},d),{},{components:a})):i.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,l=new Array(n);l[0]=u;var p={};for(var r in t)hasOwnProperty.call(t,r)&&(p[r]=t[r]);p.originalType=e,p[c]="string"==typeof e?e:s,l[1]=p;for(var o=2;o<n;o++)l[o]=a[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8915:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>p,toc:()=>o});var i=a(7462),s=(a(7294),a(3905));const n={},l="Upgrading to XboxHD+",p={unversionedId:"xbox-hdmi/upgrade/xboxhd/index",id:"xbox-hdmi/upgrade/xboxhd/index",title:"Upgrading to XboxHD+",description:"This guide is for upgrading existing XboxHDMI, firmware 1.x.x, installs to XboxHD+.",source:"@site/docs/xbox-hdmi/upgrade/01-xboxhd/index.md",sourceDirName:"xbox-hdmi/upgrade/01-xboxhd",slug:"/xbox-hdmi/upgrade/xboxhd/",permalink:"/xbox-hdmi/upgrade/xboxhd/",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/xbox-hdmi/upgrade/01-xboxhd/index.md",tags:[],version:"current",frontMatter:{},sidebar:"documentation",previous:{title:"Upgrading to Stellar XboxHD+",permalink:"/xbox-hdmi/upgrade/stellar/"}},r={},o=[{value:"Checklist",id:"checklist",level:3},{value:"Hard Drive Preparation",id:"hard-drive-preparation",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Patching BIOS with kpatcher support",id:"patching-bios-with-kpatcher-support",level:2},{value:"Step 1",id:"step-1-1",level:3},{value:"Step 2",id:"step-2-1",level:3},{value:"Step 3",id:"step-3-1",level:3},{value:"Step 4",id:"step-4-1",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Step 6 (Optional/Recommended)",id:"step-6-optionalrecommended",level:3},{value:"Firmware Update",id:"firmware-update",level:2},{value:"Step 1",id:"step-1-2",level:3},{value:"Step 2",id:"step-2-2",level:3},{value:"All Done",id:"all-done",level:2}],d={toc:o},c="wrapper";function h(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"upgrading-to-xboxhd"},"Upgrading to XboxHD+"),(0,s.kt)("p",null,"This guide is for upgrading existing XboxHDMI, firmware 1.x.x, installs to XboxHD+."),(0,s.kt)("h3",{id:"checklist"},"Checklist"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","OpenXenium installed.",(0,s.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Tested and verified that OpenXenium is accessible via network. (Both HTTP and FTP)"))),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","System is fully working.",(0,s.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","System has no stablity issues.")))),(0,s.kt)("h2",{id:"hard-drive-preparation"},"Hard Drive Preparation"),(0,s.kt)("h3",{id:"step-1"},"Step 1"),(0,s.kt)("p",null,"Boot console to XeniumOS via the eject button."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"XeniumOS Boot Screen",src:a(9722).Z,width:"640",height:"480"})),(0,s.kt)("h3",{id:"step-2"},"Step 2"),(0,s.kt)("p",null,"Download the latest XboxHD+ app release."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/MakeMHz/xbox-hd-plus-app2/releases/latest"},"Latest Release")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"FTP BIOS bin file",src:a(4790).Z,width:"1346",height:"878"})),(0,s.kt)("h3",{id:"step-3"},"Step 3"),(0,s.kt)("p",null,"Extract the files and FTP over contents to the C drive. Files must be placed on the C drive. (Inside of a folder called 'xboxhd' as shown)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"XeniumOS Boot Screen",src:a(4570).Z,width:"1261",height:"872"})),(0,s.kt)("h3",{id:"step-4"},"Step 4"),(0,s.kt)("p",null,"Leave Xbox on and continue to the next section."),(0,s.kt)("h2",{id:"patching-bios-with-kpatcher-support"},"Patching BIOS with kpatcher support"),(0,s.kt)("h3",{id:"step-1-1"},"Step 1"),(0,s.kt)("p",null,"Download the latest kpatch IPS file for your BIOS of choice."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/MakeMHz/xbox-hd-plus/blob/master/patches/README.md"},"BIOS Patches")),(0,s.kt)("h3",{id:"step-2-1"},"Step 2"),(0,s.kt)("p",null,"Apply patch to BIOS by following the link to the patching guide for the corresponding BIOS patch. (Due to legal reasons we can not distribute the BIOS files)"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Guides",src:a(5585).Z,width:"1556",height:"829"})),(0,s.kt)("h3",{id:"step-3-1"},"Step 3"),(0,s.kt)("p",null,"FTP the patched BIOS file over to Xbox. It's recommended to store the BIOS file inside of a folder on the C drive called 'BIOS' for future refrences."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"FTP BIOS bin file",src:a(2713).Z,width:"1433",height:"1052"})),(0,s.kt)("h3",{id:"step-4-1"},"Step 4"),(0,s.kt)("p",null,"Flash BIOS."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 1",src:a(178).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 2",src:a(2302).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 3",src:a(6273).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 4",src:a(3603).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 5",src:a(7703).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 6",src:a(6661).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 7",src:a(7522).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 8",src:a(7829).Z,width:"1280",height:"720"})),(0,s.kt)("h3",{id:"step-5"},"Step 5"),(0,s.kt)("p",null,"Set the newly flashed BIOS as the default BIOS."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 9",src:a(6551).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 10",src:a(2644).Z,width:"1280",height:"720"})),(0,s.kt)("h3",{id:"step-6-optionalrecommended"},"Step 6 (Optional/Recommended)"),(0,s.kt)("p",null,"Ensure that 'Instant Boot' is enabled. This automatically boot the default BIOS on power up."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 11",src:a(7913).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 12",src:a(4026).Z,width:"1280",height:"720"}),"\n",(0,s.kt)("img",{alt:"BIOS Flashing Step 13",src:a(1965).Z,width:"1280",height:"720"})),(0,s.kt)("h2",{id:"firmware-update"},"Firmware Update"),(0,s.kt)("p",null,"At this point you can reboot the Xbox. This will boot the patched BIOS."),(0,s.kt)("h3",{id:"step-1-2"},"Step 1"),(0,s.kt)("p",null,"Launch the XboxHD+ app."),(0,s.kt)("h3",{id:"step-2-2"},"Step 2"),(0,s.kt)("p",null,"Apply update. The update will wait 2 minutes before flashing the firmware update."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Do not turn off the Xbox once the front LEDs turn orange. Doing so can/will brick the XboxHDMI/XboxHD+.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 13",src:a(9990).Z,width:"1440",height:"960"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 13",src:a(1213).Z,width:"1440",height:"960"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"BIOS Flashing Step 13",src:a(7625).Z,width:"1440",height:"960"})),(0,s.kt)("h1",{id:"step-3-2"},"Step 3"),(0,s.kt)("p",null,"Repeat by launching the XboxHD+ app again. Depending on the starting firmware you may have to update multiple times."),(0,s.kt)("h2",{id:"all-done"},"All Done"),(0,s.kt)("p",null,"And that's it!"))}h.isMDXComponent=!0},9990:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/app_upgrade_1-43e9885df4455548146a10a9e073248d.png"},1213:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/app_upgrade_2-59dbe7da019aac1951a3992bbfe1babb.png"},7625:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/app_upgrade_3-2c501da0b470b4dc29c2048f6e3c5c5e.png"},178:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step1-bc9e0fe575961554abe3393314c435ea.png"},2644:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step10-3fe35b2182705bcdcf6dcca31c6a177e.png"},7913:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step11-86018d6d68bfe2f1c231c4a6c7b332ad.png"},4026:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step12-0554c8f916ce02474d6fdfa0eb473a80.png"},1965:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step13-ab98aca7856ff2116a3326f2b790bbef.png"},2302:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step2-9d8ceffa9df81bdcfe8b9671b2d87db6.png"},6273:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step3-d86349e5e9ceeed62d970c56eb572c95.png"},3603:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step4-4367c6e06460410ed3bcdfc3353a5bd8.png"},7703:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step5-826d59340a1031357eb3da3062bbe3a1.png"},6661:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step6-aa95b1531fa0da215bc3db2350f13a65.png"},7522:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step7-e9f616680d3436ca16960ee4dd11fd20.png"},7829:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step8-2e90bd7e87564f4620a4b0ef9da26c0c.png"},6551:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/flash_step9-4d76183a0d5c41a8ffb2490fa6d2ba00.png"},4570:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ftp_app-2d4d208be451fe9566e227ef23ae4e48.png"},2713:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ftp_bios-7ce4d0788791e06303ce9538ea743d4c.png"},4790:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/latest_release-43bb6dce6703f862b177df8b3d826f8e.png"},5585:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/patches_guide-0a80dadd50100964bb2565fe7d599e2a.png"},9722:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/xeniumos-ea63572ca0aa66bdf30adc0103eda55b.png"}}]);