"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[7238],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return a?n.createElement(m,l(l({ref:t},d),{},{components:a})):n.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),o=a(7294),r=a(6010),l=a(2466),i=a(6550),s=a(1980),p=a(7392),d=a(12);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function c(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[s,p]=m({queryString:a,groupId:n}),[u,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=s??u;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),b(e)}),[p,b,r]),tabValues:r}}var f=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==i&&(u(t),s(n))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:c},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function x(e){const t=b(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(k,(0,n.Z)({},e,t)),o.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(x,(0,n.Z)({key:String(t)},e))}},6567:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),l=a(5162);const i={},s="Stellar XboxHD+ (Xbox 1.0 - 1.5)",p={unversionedId:"xbox-hdmi/installation/stellar-xboxhd-1-0",id:"xbox-hdmi/installation/stellar-xboxhd-1-0",title:"Stellar XboxHD+ (Xbox 1.0 - 1.5)",description:"Installation guide for the Stellar XboxHD+ on Xbox revision 1.0 - 1.5.",source:"@site/docs/03-xbox-hdmi/00-installation/00-stellar-xboxhd-1-0.md",sourceDirName:"03-xbox-hdmi/00-installation",slug:"/xbox-hdmi/installation/stellar-xboxhd-1-0",permalink:"/xbox-hdmi/installation/stellar-xboxhd-1-0",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/03-xbox-hdmi/00-installation/00-stellar-xboxhd-1-0.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{},sidebar:"documentation",previous:{title:"Legacy Dashboards",permalink:"/project-stellar/user-guide/netiso/dashboard/legacy/"},next:{title:"Stellar XboxHD+ (Xbox 1.6)",permalink:"/xbox-hdmi/installation/stellar-xboxhd-1-6"}},d={},u=[{value:"Brief Overview",id:"brief-overview",level:3},{value:"Kit Contents",id:"kit-contents",level:3},{value:"Preparation",id:"preparation",level:3},{value:"Step 1 - Project Stellar Installation",id:"step-1---project-stellar-installation",level:3},{value:"Step 2 - QSB Installation",id:"step-2---qsb-installation",level:3},{value:"Step 3 - Wire Prep",id:"step-3---wire-prep",level:3},{value:"Step 4 - Motherboard Prep",id:"step-4---motherboard-prep",level:3},{value:"Step 5 - Jumper Wires",id:"step-5---jumper-wires",level:3},{value:"Step 6 - Flex Installation",id:"step-6---flex-installation",level:3},{value:"Best Practices",id:"best-practices",level:4},{value:"Flex Revisions",id:"flex-revisions",level:4},{value:"Step 7 - Aux Wires",id:"step-7---aux-wires",level:3},{value:"AV Port/Encoder Connections",id:"av-portencoder-connections",level:4},{value:"Step 8 - Wrapping Up",id:"step-8---wrapping-up",level:3},{value:"3D Printed HDMI Panel",id:"3d-printed-hdmi-panel",level:4},{value:"Re-install the Xbox Motherboard",id:"re-install-the-xbox-motherboard",level:3},{value:"3D Printed Spacer",id:"3d-printed-spacer",level:4},{value:"Install the XboxHD+ Board",id:"install-the-xboxhd-board",level:3}],c={toc:u},h="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(h,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stellar-xboxhd-xbox-10---15"},"Stellar XboxHD+ (Xbox 1.0 - 1.5)"),(0,o.kt)("p",null,"Installation guide for the Stellar XboxHD+ on Xbox revision 1.0 - 1.5."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This guide is for the installation of a Stellar XboxHD+ kit.")),(0,o.kt)("h3",{id:"brief-overview"},"Brief Overview"),(0,o.kt)("p",null,"For a brief overview, check out the YouTube video below."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bit.ly/339G98T"},(0,o.kt)("img",{alt:"XboxHD+ YouTube Video",src:a(4505).Z,width:"1275",height:"728"}))),(0,o.kt)("h3",{id:"kit-contents"},"Kit Contents"),(0,o.kt)("p",null,"Check your kit for missing or damaged pieces before moving forwards."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"XboxHD+ Main Board"),(0,o.kt)("li",{parentName:"ul"},"XboxHD+ 1.0 - 1.5 Flex PCB"),(0,o.kt)("li",{parentName:"ul"},"XboxHD+ QSB for 1.0 - 1.5 consoles."),(0,o.kt)("li",{parentName:"ul"},"26AWG Stranded Red Wire for the 5V connection."),(0,o.kt)("li",{parentName:"ul"},"26AWG Stranded Orange Wire for the SPDIF connection."),(0,o.kt)("li",{parentName:"ul"},"26AWG Stranded Black Wire for the GND connection."),(0,o.kt)("li",{parentName:"ul"},"3D printed board spacer"),(0,o.kt)("li",{parentName:"ul"},"3D printed HDMI port cover"),(0,o.kt)("li",{parentName:"ul"},"2 mounting screws")),(0,o.kt)("h3",{id:"preparation"},"Preparation"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to carefully read the entire document in full before you start! Familiarize yourself with all the steps and how they are to be carried out. Do not skip any steps, and use the provided pictures to compare your results.")),(0,o.kt)("p",null,"Before your adventure begins, it's imperative to ensure that you have a fully working, tested, and modified Xbox."),(0,o.kt)("p",null,"Please thoroughly test your system before attempting to install the XboxHD+ kit.\nThis guide also assumes that you watched the installation video linked above."),(0,o.kt)("p",null,"This guide is for Xbox motherboard revisions 1.0 - 1.5 with a Conexant or Focus encoder."),(0,o.kt)("h3",{id:"step-1---project-stellar-installation"},"Step 1 - Project Stellar Installation"),(0,o.kt)("p",null,"The first step is installing and updating Project Stellar. Project Stellar has it's own guide ",(0,o.kt)("a",{parentName:"p",href:"/project-stellar/installation-guide"},"here"),"."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you're at least on firmware version v1.0.1 before continuing.")),(0,o.kt)("h3",{id:"step-2---qsb-installation"},"Step 2 - QSB Installation"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"All Xbox revisions (1.0 - 1.5) require the installation of a QSB board. Follow the ",(0,o.kt)("a",{parentName:"p",href:"/xbox-hdmi/installation/qsb-hd"},"XboxHD+ QSB Installation Guide")," first before continuing.")),(0,o.kt)("h3",{id:"step-3---wire-prep"},"Step 3 - Wire Prep"),(0,o.kt)("p",null,"It's imperative to cut each wire as close as possible to our recommendations, but not shorter. If additional wire is needed, then make sure to use wire of similar quality and gauge."),(0,o.kt)("p",null,"After cutting each wire, strip each side. It's recommended for the cleanest install to strip about 2mm from one side (for the connections to the Xbox motherboard) and about 3mm on the other side (for connections to the XboxHD+ board). Make sure to twist the stranded wires and pre-tin each one."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cut List and Lengths (end to end, before stripping)")),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Black Wire"),(0,o.kt)("td",null,"3cm"),(0,o.kt)("td",null,"GND Connection")),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Red Wire"),(0,o.kt)("td",null,"4.5cm"),(0,o.kt)("td",null,"5V Connection")),(0,o.kt)("tr",null,(0,o.kt)("th",null,"Orange Wire"),(0,o.kt)("td",null,"4.5cm"),(0,o.kt)("td",null,"SPDIF Connection"))),(0,o.kt)("h3",{id:"step-4---motherboard-prep"},"Step 4 - Motherboard Prep"),(0,o.kt)("p",null,"The first step is to remove the motherboard from the Xbox. There are plenty of guides on the internet on how to do so and won't be repeated here as it's pretty straight-forward."),(0,o.kt)("p",null,"It's recommended that you remove the GPU heatsink since there's very little room between it and where the flex cable will be installed. We've found that the best approach is to apply very low heat to the heatsink, around 100\xb0C / 212\xb0F, while applying very light force twisting to the heatsink."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It's very important not to force the heatsink off by attempting to pull it straight up as this could damage the GPU."),(0,o.kt)("p",{parentName:"admonition"},"There's been at least one person who's managed to do this in the past, unrelated to the project, and even though it's very unlikely, it's noted here to let others know to be careful!")),(0,o.kt)("p",null,"The thermal compound on the GPU can be cleaned off with a basic solvent such as Arctic Silver Arcticlean Thermal Cooling Material Remover or with WD-40. When re-applying the heatsink, make sure to add ",(0,o.kt)("strong",{parentName:"p"},"ample")," PC thermal paste. ",(0,o.kt)("em",{parentName:"p"},"(in this case, more is better as a bit too much should not effect thermals and is ultimately safer as the GPU does not have an embedded thermal sensor for overheating protection).")),(0,o.kt)("p",null,"After this, you can remove the AV port. Please refer to the installation video for more information on the different ways to accomplish this."),(0,o.kt)("p",null,"And finally, make sure to clean the area where the flex will be installed with IPA."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of XboxHD+ YouTube Video",src:a(6568).Z,width:"954",height:"715"})),(0,o.kt)("p",{align:"center"},(0,o.kt)("i",null,(0,o.kt)("b",null,"Note that removing the CPU heatsink is not required."))),(0,o.kt)("h3",{id:"step-5---jumper-wires"},"Step 5 - Jumper Wires"),(0,o.kt)("p",null,"This step gets its own section as it's very easy to forget, and can be a pain if forgotten since the pins are located on the bottom of the board."),(0,o.kt)("p",null,"We need to make two connections on the bottom of where the AV port used to be, so that the Xbox thinks that an HD AV cable is plugged in. Use a scrap piece of wire to make these connections."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of AVIP Connections",src:a(8147).Z,width:"688",height:"377"}),"\n",(0,o.kt)("img",{alt:"Image of AVIP Connections",src:a(6566).Z,width:"838",height:"741"})),(0,o.kt)("h3",{id:"step-6---flex-installation"},"Step 6 - Flex Installation"),(0,o.kt)("p",null,"This section will be mostly screenshots of the Xbox video encoder and where the flex connects. Pay close attention to the alignment of the flex cable and ",(0,o.kt)("strong",{parentName:"p"},"take your time while installing!")),(0,o.kt)("p",null,"After the flex is installed, the Xbox should still be bootable."),(0,o.kt)("h4",{id:"best-practices"},"Best Practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pre-tin both sides of the flex by applying ample flux and running solder across each pad before soldering to the Xbox motherboard."),(0,o.kt)("li",{parentName:"ul"},"Pre-shape the flex. Gently shape the flex so it's close to the final shape before soldering. The flex must lay flat and properly aligned when installed."),(0,o.kt)("li",{parentName:"ul"},"Take your time!")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Proper flex positioning and soldering is crucial to allow for good contact. Make sure your flex lies flat on the board, do not solder it on top of the encoder chip pins! Inspect all solder joints before continuing, make sure they are well-formed and do not touch each other.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"There are multiple revisions of the XboxHD+ flex revision. Please pay close attention to the reference images below.")),(0,o.kt)("h4",{id:"flex-revisions"},"Flex Revisions"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"flex_rev_1",label:"Flex Rev 4",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Completed Install")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Installed",src:a(7589).Z,width:"1071",height:"920"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Overview View")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(1145).Z,width:"1071",height:"1164"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Right Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(7303).Z,width:"1071",height:"1164"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Left Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(1449).Z,width:"1071",height:"1164"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bottom Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(4056).Z,width:"1071",height:"1164"}))),(0,o.kt)(l.Z,{value:"flex_rev_5",label:"Flex Rev 5",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Completed Install")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Installed",src:a(7589).Z,width:"1071",height:"920"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Overview View")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(5705).Z,width:"1071",height:"1046"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Right Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(8416).Z,width:"1071",height:"1164"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Left Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(2269).Z,width:"1071",height:"1164"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bottom Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(1785).Z,width:"1071",height:"1164"}))),(0,o.kt)(l.Z,{value:"flex_rev_6",label:"Flex Rev 6",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Completed Install")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Installed",src:a(5797).Z,width:"1071",height:"920"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Overview View")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(4966).Z,width:"1071",height:"1164"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Right Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(7638).Z,width:"1071",height:"1164"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Left Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(3236).Z,width:"1071",height:"1164"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bottom Connections")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Flex Board Layout",src:a(6843).Z,width:"1071",height:"1164"})))),(0,o.kt)("h3",{id:"step-7---aux-wires"},"Step 7 - Aux Wires"),(0,o.kt)("p",null,"Start with connecting each of the pre-cut wires. The wires for 5V and SPDIF should lay flat across the motherboard running towards the right."),(0,o.kt)("h4",{id:"av-portencoder-connections"},"AV Port/Encoder Connections"),(0,o.kt)("p",null,"Connect each of the pre-cut wires according to the wire cut chart above. The wires for 5V and SPDIF should lay flat across the motherboard running to the right. The wire for GND should run downwards."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of Wire connections",src:a(5350).Z,width:"1111",height:"739"})),(0,o.kt)("h3",{id:"step-8---wrapping-up"},"Step 8 - Wrapping Up"),(0,o.kt)("h4",{id:"3d-printed-hdmi-panel"},"3D Printed HDMI Panel"),(0,o.kt)("p",null,"Insert the 3D printed HDMI part in the Xbox case as pictured below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of 3D printed HDMI Panel",src:a(2212).Z,width:"1020",height:"768"})),(0,o.kt)("h3",{id:"re-install-the-xbox-motherboard"},"Re-install the Xbox Motherboard"),(0,o.kt)("p",null,"Place the Xbox motherboard back into the case. Make sure to screw the motherboard back in. There's one screw located under where the XboxHD+ will be installed."),(0,o.kt)("h4",{id:"3d-printed-spacer"},"3D Printed Spacer"),(0,o.kt)("p",null,"Place the provided spacer as shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of 3D printed Spacer",src:a(9314).Z,width:"1020",height:"652"})),(0,o.kt)("h3",{id:"install-the-xboxhd-board"},"Install the XboxHD+ Board"),(0,o.kt)("p",null,"Begin by adding solder to all of the connection pads (GND, SPDIF, 5V). This is important as there's little room once everything is installed."),(0,o.kt)("p",null,"Place the XboxHD+ board in the system and screw it down with the two provided screws."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Make sure to use the two provided torx screws. A longer philips head screw is provided for Project Stellar, but will cause case damage if installed for the HD+.")),(0,o.kt)("p",null,"Connect each wire to its corresponding pads on the XboxHD+ board."),(0,o.kt)("p",null,"Carefully connect the flex cable to the FPC connector. Be very careful. it may take a couple of tries as sometimes the flex will want to go in at an angle. if this happens, then pull it out and gently push it back in."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Do not force the flex cable into the FPC connector. Make sure the flex is not inserted at an angle!")),(0,o.kt)("p",null,"Connect the Stellar link cable from the Project Stellar to the XboxHD+. It is recommended to connect the cable to Stellar while it's not on the pin header to avoid unnecessary stress on pin header."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Image of XboxHD+ Installed",src:a(9066).Z,width:"1612",height:"1210"})))}m.isMDXComponent=!0},6568:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step1-5d609867d32d895530083e67696648eb.png"},8147:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step2-AVIP-Connections-0f65a13c77ad9c2565ef3edaa6a2aa37.png"},6566:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step2-Pinout-bd9964a07b65dbae16084f023c55a766.png"},4056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Bottom_rev_4-f91b6174bf11498b1cb6ef37c161dfec.png"},1785:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Bottom_rev_5-7c66e905615f17083fc68d0a2e81c2e6.png"},6843:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Bottom_rev_6-5d4b21d5773f42373b7eca145793579f.png"},7589:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Flex-Installed_rev_4-8d6a3030cab86be0f4f776b7d22831ac.png"},5797:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Flex-Installed_rev_6-ee1087ed132eb076b8bd22305e240ec5.png"},1145:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Flex-Overview_rev_4-eefb443cf512818e9ee745b2fbe4d301.png"},5705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Flex-Overview_rev_5-bf545da5a9c36b511fe58f9b4dba8818.png"},4966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Flex-Overview_rev_6-fb8e1384d198aed2bd0d6231b57ff4ba.png"},1449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Left_rev_4-54ad457be4011773a76955928830c5dd.png"},2269:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Left_rev_5-3a69e7f15bf9ac0ecd910fb847c3ea83.png"},3236:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Left_rev_6-4225a7b8505a696f34b6512983926706.png"},7303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Right_rev_4-1dfbc425b12b0e12f149c55171f2b962.png"},8416:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Right_rev_5-932c5f5a0fa92c9fbceac0f0cbdd965b.png"},7638:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step3-Right_rev_6-a39a8ab2b36ea2c155944c0e2b64f379.png"},5350:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step4-Wire-Connections_HD_v2-234bc825b083951ad35b80ccfd59d2c4.png"},2212:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step5-3DHDMI_v2-9eb408c8963412a8e838ce84388ce194.png"},9066:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step5-Finished_HD_v2-31538171865b42356df959a02809846d.jpg"},9314:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Step5-Spacer_v2-f3fa9c48ddc2480384867bf9cf3a184d.jpg"},4505:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/YouTube-ad41a41e7b75e175ad2bdda5443f37a9.png"}}]);