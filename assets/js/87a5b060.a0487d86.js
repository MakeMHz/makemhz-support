"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return r?i.createElement(m,a(a({ref:t},p),{},{components:r})):i.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(7462),o=(r(7294),r(3905));const n={},a="Tools",s={unversionedId:"project-stellar/user-guide/stellar-os/tools/index",id:"project-stellar/user-guide/stellar-os/tools/index",title:"Tools",description:"StellarOS Tools",source:"@site/docs/02-project-stellar/05-user-guide/01-stellar-os/02-tools/index.md",sourceDirName:"02-project-stellar/05-user-guide/01-stellar-os/02-tools",slug:"/project-stellar/user-guide/stellar-os/tools/",permalink:"/project-stellar/user-guide/stellar-os/tools/",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/02-project-stellar/05-user-guide/01-stellar-os/02-tools/index.md",tags:[],version:"current",frontMatter:{},sidebar:"documentation",previous:{title:"Enhancements",permalink:"/project-stellar/user-guide/stellar-os/settings/enhancements/"},next:{title:"Input Devices",permalink:"/project-stellar/user-guide/stellar-os/additional-drivers/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Hard Drive Tools",id:"hard-drive-tools",level:2},{value:"Format Hard Drive",id:"format-hard-drive",level:3},{value:"Clear Cache Partitions",id:"clear-cache-partitions",level:3},{value:"Insignia",id:"insignia",level:2},{value:"Insignia Setup Assistant",id:"insignia-setup-assistant",level:3},{value:"EEPROM",id:"eeprom",level:2},{value:"Backup EEPROM",id:"backup-eeprom",level:3},{value:"Restore EEPROM",id:"restore-eeprom",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools"},"Tools"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"StellarOS Tools",src:r(3147).Z,width:"1280",height:"720"})),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"StellarOS features a suite of user-friendly tools, as well as system information, all housed within the Tools page."),(0,o.kt)("h2",{id:"hard-drive-tools"},"Hard Drive Tools"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Hard Drive Tools")," section offers utilities to manage the internal hard drive of your Xbox."),(0,o.kt)("h3",{id:"format-hard-drive"},"Format Hard Drive"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Format Hard Drive")," tool provides users with two distinct options: ",(0,o.kt)("inlineCode",{parentName:"p"},"Wipe Entire Drive")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Format Extended Partitions"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Wipe Entire Drive")," function serves to completely erase and rebuild the hard drive from scratch. On the other hand, ",(0,o.kt)("inlineCode",{parentName:"p"},"Format Extended Partitions")," is designed specifically for formatting and configuring the non-retail extended partitions, which is particularly useful for hard drives that exceed 10GB in capacity."),(0,o.kt)("h3",{id:"clear-cache-partitions"},"Clear Cache Partitions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Clear Cache Partitions")," utility offers a straightforward method for cleaning out the cache partitions on the hard drive. Within the Xbox, these partitions serve as storage areas for software to temporarily store various resources. Utilizing this tool becomes especially useful when software inadvertently leaves behind corrupted data within the cache."),(0,o.kt)("h2",{id:"insignia"},"Insignia"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Insignia is a free replacement for Microsoft's servers for the original Xbox console, allowing online functionality to be restored for the first time since 2010.")),(0,o.kt)("h3",{id:"insignia-setup-assistant"},"Insignia Setup Assistant"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This Xbox homebrew tool automatically sets up and partially tests your Xbox's connection to Insignia's servers for XBL.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Insignia Setup Assistant",src:r(4124).Z,width:"853",height:"480"})),(0,o.kt)("h2",{id:"eeprom"},"EEPROM"),(0,o.kt)("p",null,"The Xbox incorporates an EEPROM chip to house a range of system configuration settings and multiple cryptographic keys. Some games utilize these keys for encryption and verification purposes, ensuring they operate on the original system they were created for."),(0,o.kt)("p",null,"Given their significance, many users find it crucial to maintain a backup of this information."),(0,o.kt)("h3",{id:"backup-eeprom"},"Backup EEPROM"),(0,o.kt)("p",null,"Create a backup of the EEPROM and store it to the hard drive."),(0,o.kt)("h3",{id:"restore-eeprom"},"Restore EEPROM"),(0,o.kt)("p",null,"Restore an EEPROM backup from the hard drive."))}d.isMDXComponent=!0},4124:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/insignia-192ab76c358853b075272ce9ca025b8a.png"},3147:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/stellar-tools-b0e12ac9f60c5ad58b62b75ec8bdb3c1.png"}}]);