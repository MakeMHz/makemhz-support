"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={},r="Installation Guide",o={unversionedId:"project-stellar/installation-guide/index",id:"project-stellar/installation-guide/index",title:"Installation Guide",description:"Installation guide for installing Project Stellar.",source:"@site/docs/02-project-stellar/01-installation-guide/index.md",sourceDirName:"02-project-stellar/01-installation-guide",slug:"/project-stellar/installation-guide/",permalink:"/project-stellar/installation-guide/",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/02-project-stellar/01-installation-guide/index.md",tags:[],version:"current",frontMatter:{},sidebar:"documentation",previous:{title:"Initial Setup",permalink:"/project-stellar/initial-setup/"},next:{title:"Installation Troubleshooting",permalink:"/project-stellar/installation-troubleshooting/"}},s={},p=[{value:"Preparation",id:"preparation",level:2},{value:"Kit Contents",id:"kit-contents",level:3},{value:"Resources",id:"resources",level:3},{value:"Step 1 - Initial Setup",id:"step-1---initial-setup",level:2},{value:"Step 2 - LPC Pin Header",id:"step-2---lpc-pin-header",level:2},{value:"Xbox Revisions 1.0 - 1.5",id:"xbox-revisions-10---15",level:3},{value:"Xbox Revision 1.6",id:"xbox-revision-16",level:3},{value:"Step 3 - Easy D0",id:"step-3---easy-d0",level:2},{value:"Step 4 - Mounting",id:"step-4---mounting",level:2},{value:"Done",id:"done",level:2}],u={toc:p},d="wrapper";function c(e){let{components:t,...l}=e;return(0,i.kt)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-guide"},"Installation Guide"),(0,i.kt)("p",null,"Installation guide for installing Project Stellar."),(0,i.kt)("h2",{id:"preparation"},"Preparation"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Before your adventure begins, it's imperative to ensure that you have a fully working and tested Xbox.")),(0,i.kt)("h3",{id:"kit-contents"},"Kit Contents"),(0,i.kt)("p",null,"Check your kit for missing or damaged pieces before moving forwards."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Project Stellar"),(0,i.kt)("li",{parentName:"ul"},"Easy D0"),(0,i.kt)("li",{parentName:"ul"},"Xbox 1.6 LPC Rebuild QSB"),(0,i.kt)("li",{parentName:"ul"},"Metal Stand-off with Screw"),(0,i.kt)("li",{parentName:"ul"},"2x8 Gold Plated Pinheader")),(0,i.kt)("h3",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xbox/identifying-xbox-revision"},"Identifying Xbox Revision")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/project-stellar/initial-setup"},"Initial Setup")),(0,i.kt)("h2",{id:"step-1---initial-setup"},"Step 1 - Initial Setup"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The initial setup process must be completed first and is provided as a seperate guide.\n",(0,i.kt)("a",{parentName:"p",href:"/project-stellar/initial-setup"},"Initial Setup"))),(0,i.kt)("h2",{id:"step-2---lpc-pin-header"},"Step 2 - LPC Pin Header"),(0,i.kt)("p",null,"Project Stellar currently requires that at minimum a 2x7 pin header be installed on the LPC of the Xbox. It's recommended to install the included high-quality gold-plated 2x8 pin header if possible as future features may require the additional pins.\n",(0,i.kt)("img",{alt:"LPC Pin Header",src:n(9759).Z,width:"1944",height:"1287"})),(0,i.kt)("h3",{id:"xbox-revisions-10---15"},"Xbox Revisions 1.0 - 1.5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Locate the LPC header on the motherboard."),(0,i.kt)("li",{parentName:"ul"},"Remove factory solder from the through holes."),(0,i.kt)("li",{parentName:"ul"},"Solder in the supplied pin header.")),(0,i.kt)("h3",{id:"xbox-revision-16"},"Xbox Revision 1.6"),(0,i.kt)("p",null,"Installation of the pin header on a 1.6 revision motherboard requires that we solder in the LPC rebuild QSB while holding the pin header in place. For this, we recommend using hot glue, Blu-Tack, or some other temporary adhesive."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Locate the LPC header on the motherboard."),(0,i.kt)("li",{parentName:"ul"},"Remove factory solder from the through holes."),(0,i.kt)("li",{parentName:"ul"},"Solder in the supplied LPC rebuild QSB while holding in place the pin header. Make sure to solder all of the points on the QSB to the motherboard.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"LPC Rebuild Install",src:n(484).Z,width:"1944",height:"1087"})),(0,i.kt)("h2",{id:"step-3---easy-d0"},"Step 3 - Easy D0"),(0,i.kt)("p",null,"For Xbox revisions 1.0 - 1.5 we must connect D0 to ground to force the system to always boot from the LPC port. On the 1.6 motherboard, this is handled automatically by Project Stellar."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Align the Easy D0 QSB and tape down according to the reference images provided below."),(0,i.kt)("li",{parentName:"ul"},"Solder the QSB into place.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Easy D0",src:n(1478).Z,width:"3560",height:"2508"}),"\n",(0,i.kt)("img",{alt:"Easy D0 Alignment",src:n(7783).Z,width:"4080",height:"1844"})),(0,i.kt)("h2",{id:"step-4---mounting"},"Step 4 - Mounting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Place the provided metal spacer over the PCB hole as shown."),(0,i.kt)("li",{parentName:"ul"},"Use the provided Phillips screw to mount Project Stellar. Do not over-tighten, the screw only needs to be lightly tightened.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Mounting Stellar",src:n(6943).Z,width:"1920",height:"910"})),(0,i.kt)("h2",{id:"done"},"Done"),(0,i.kt)("p",null,"If you have an HDMI kit, then you can use the links below to install those."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xbox-hdmi/installation/stellar-xboxhd-1-0"},"Stellar XboxHD+ Installation Guide 1.0 - 1.5")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/xbox-hdmi/installation/stellar-xboxhd-1-6"},"Stellar XboxHD+ Installation Guide 1.6")))}c.isMDXComponent=!0},1478:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/easy_d0-3ef092b62817b7f81c55279616eb6054.png"},7783:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/easy_d0_alignment-0bfa17958587f5bb0398afbf7348670b.png"},9759:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lpc_header-fa4314289f03c3044a6ddc6fceccfa2f.png"},484:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lpc_rebuild_install-d9d581e580bbe694866a70219f284538.png"},6943:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stellar_mount-eccfeaba36ced1301bd6a5ea3f8ea141.png"}}]);