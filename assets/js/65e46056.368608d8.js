"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[8269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,m=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(7462),a=(n(7294),n(3905));const i={},r="XboxHDMI (Xbox 1.0 - 1.5)",l={unversionedId:"xbox-hdmi/installation/xboxhdmi-1-0",id:"xbox-hdmi/installation/xboxhdmi-1-0",title:"XboxHDMI (Xbox 1.0 - 1.5)",description:"Installation guide for the XboxHDMI on Xbox revision 1.0 - 1.5.",source:"@site/docs/03-xbox-hdmi/00-installation/06-xboxhdmi-1-0.md",sourceDirName:"03-xbox-hdmi/00-installation",slug:"/xbox-hdmi/installation/xboxhdmi-1-0",permalink:"/xbox-hdmi/installation/xboxhdmi-1-0",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/03-xbox-hdmi/00-installation/06-xboxhdmi-1-0.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"documentation",previous:{title:"XboxHD+ QSB (Xbox 1.0 - 1.5)",permalink:"/xbox-hdmi/installation/qsb-hd"},next:{title:"XboxHDMI (Xbox 1.6)",permalink:"/xbox-hdmi/installation/xboxhdmi-1-6"}},s={},d=[{value:"Brief Overview",id:"brief-overview",level:3},{value:"Kit Contents",id:"kit-contents",level:3},{value:"Preparation",id:"preparation",level:3},{value:"Step 1 - Software Installation",id:"step-1---software-installation",level:3},{value:"Step 2 - QSB Installation",id:"step-2---qsb-installation",level:3},{value:"Step 3 - Wire Prep",id:"step-3---wire-prep",level:3},{value:"Step 4 - Motherboard Prep",id:"step-4---motherboard-prep",level:3},{value:"Step 5 - Jumper Wires",id:"step-5---jumper-wires",level:3},{value:"Step 6 - Flex Installation",id:"step-6---flex-installation",level:3},{value:"Best Practices",id:"best-practices",level:4},{value:"Important",id:"important",level:4},{value:"Warning!",id:"warning",level:4},{value:"Step 7 - Aux Wires",id:"step-7---aux-wires",level:3},{value:"Ferrite Bead Removal",id:"ferrite-bead-removal",level:4},{value:"AV Port/Encoder Connections",id:"av-portencoder-connections",level:4},{value:"SMBus Connections (SDA and SCL) - SKIP FOR XboxHD+ Legacy Installations",id:"smbus-connections-sda-and-scl---skip-for-xboxhd-legacy-installations",level:4},{value:"Step 8 - Wrapping Up",id:"step-8---wrapping-up",level:3},{value:"3D Printed HDMI Panel",id:"3d-printed-hdmi-panel",level:4},{value:"3D Printed Spacer",id:"3d-printed-spacer",level:4},{value:"Re-install the Xbox Motherboard",id:"re-install-the-xbox-motherboard",level:3},{value:"Install the XboxHDMI Board",id:"install-the-xboxhdmi-board",level:3}],p={toc:d},h="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(h,(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xboxhdmi-xbox-10---15"},"XboxHDMI (Xbox 1.0 - 1.5)"),(0,a.kt)("p",null,"Installation guide for the XboxHDMI on Xbox revision 1.0 - 1.5."),(0,a.kt)("h3",{id:"brief-overview"},"Brief Overview"),(0,a.kt)("p",null,"For a brief overview, check out the YouTube video below."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://bit.ly/339G98T"},(0,a.kt)("img",{alt:"XboxHD+ YouTube Video",src:n(4505).Z,width:"1275",height:"728"}))),(0,a.kt)("h3",{id:"kit-contents"},"Kit Contents"),(0,a.kt)("p",null,"Check your kit for missing or damaged pieces before moving forwards."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XboxHDMI Main Board"),(0,a.kt)("li",{parentName:"ul"},"XboxHDMI Flex PCB"),(0,a.kt)("li",{parentName:"ul"},"26AWG Stranded Red Wire for the 5V and 1.8V connections."),(0,a.kt)("li",{parentName:"ul"},"26AWG Stranded Orange Wire for the SPDIF connection."),(0,a.kt)("li",{parentName:"ul"},"26AWG Stranded Black Wire for the ground connections."),(0,a.kt)("li",{parentName:"ul"},"22AWG paired Wire for the SMBus connection."),(0,a.kt)("li",{parentName:"ul"},"3D printed board spacer"),(0,a.kt)("li",{parentName:"ul"},"3D printed HDMI port cover"),(0,a.kt)("li",{parentName:"ul"},"2 replacement screws")),(0,a.kt)("h3",{id:"preparation"},"Preparation"),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Make sure to carefully read the entire document in full before you start! Familiarize yourself with all the steps and how they are to be carried out. Do not skip any steps, and use the provided pictures to compare your results.")),(0,a.kt)("p",null,"Before your adventure begins, it's imperative to ensure that you have a fully working, tested, and modified Xbox."),(0,a.kt)("p",null,"Please thoroughly test your system before attempting to install the XboxHDMI kit.\nThis guide also assumes that you watched the installation video linked above."),(0,a.kt)("p",null,"This guide is for Xbox motherboard revisions 1.0 - 1.5 with a Conexant or Focus encoder."),(0,a.kt)("h3",{id:"step-1---software-installation"},"Step 1 - Software Installation"),(0,a.kt)("p",null,"Part of the XboxHDMI is the software side and it has its own guide ",(0,a.kt)("a",{parentName:"p",href:"/xbox-hdmi/software/xboxhdmi"},"here"),". Make sure to follow the guide and verify the installation of the software and kernel patch before continuing."),(0,a.kt)("h3",{id:"step-2---qsb-installation"},"Step 2 - QSB Installation"),(0,a.kt)("p",null,"Xbox revisions 1.0 and 1.1 (Single row power supply connector and Conexant encoder) requires the installation of a QSB board. Follow the ",(0,a.kt)("a",{parentName:"p",href:"/xbox-hdmi/installation/qsb"},"Installation Manual QSB")," first before continuing. (If you received a kit without the QSB and need one then contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:support@makemhz.com"},"support@makemhz.com")," or purchase one from ",(0,a.kt)("a",{parentName:"p",href:"https://makemhz.com"},"MakeMHz.com"),")"),(0,a.kt)("h3",{id:"step-3---wire-prep"},"Step 3 - Wire Prep"),(0,a.kt)("p",null,"It's imperative to cut each wire as close as possible to our recommendations, but not shorter. if additional wire is needed then make sure to use wire of similar quality and gauge."),(0,a.kt)("p",null,"After cutting each wire, strip each side of the wires. It's recommended for the cleanest install to strip about 2mm from one side (for the connections to the Xbox motherboard) and about 3mm on the other side (for connections to the XboxHDMI board). Make sure to twist the stranded wires and pre-tin each one."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cut List and Lengths (end to end, before stripping)")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Black Wire"),(0,a.kt)("td",null,"25mm"),(0,a.kt)("td",null,"GND 2 Connections Near the SDA/SCL pads")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Black Wire"),(0,a.kt)("td",null,"28mm"),(0,a.kt)("td",null,"GND 1 Connection Near the SPDIF pad")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Red Wire"),(0,a.kt)("td",null,"35mm"),(0,a.kt)("td",null,"1.8V Connection")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Red Wire"),(0,a.kt)("td",null,"48mm"),(0,a.kt)("td",null,"5V Connection")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Orange Wire"),(0,a.kt)("td",null,"45mm"),(0,a.kt)("td",null,"SPDIF Connection")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Paired Wire"),(0,a.kt)("td",null,"90mm"),(0,a.kt)("td",null,"SMBus Connection"))),(0,a.kt)("h3",{id:"step-4---motherboard-prep"},"Step 4 - Motherboard Prep"),(0,a.kt)("p",null,"The first step is to remove the motherboard from the Xbox. There are plenty of guides on the internet on how to do so and won't be repeated here as it's pretty straight-forward."),(0,a.kt)("p",null,"It's recommended that you remove the GPU heatsink since there's very little room between it and where the flex cable will be installed. We've found that the best approach is to apply very low heat to the heatsink, around 100\xb0C / 212\xb0F, while applying very light force twisting to the heatsink."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"It's very important not to force the heatsink off by attempting to pull it straight up as this could damage the GPU.")," ",(0,a.kt)("em",{parentName:"p"},"(There's at least one person who's managed to do this in the past, unrelated to the project, and even though it's very unlikely, it's noted here to let others know to be careful!)")),(0,a.kt)("p",null,"The thermal compound on the GPU can be cleaned off with a basic solvent such as Arctic Silver Arcticlean Thermal Cooling Material Remover or with WD-40. When re-applying the heatsink, make sure to add ",(0,a.kt)("strong",{parentName:"p"},"ample")," PC thermal paste. ",(0,a.kt)("em",{parentName:"p"},"(in this case, more is better as a bit too much should not effect thermals and is ultimately safer as the GPU does not have an embedded thermal sensor for overheating protection).")),(0,a.kt)("p",null,"After this, you can remove the AV port. Please refer to the installation video for more information on the different ways to accomplish this."),(0,a.kt)("p",null,"And finally, make sure to clean the area where the flex will be installed with IPA."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of XboxHDMI YouTube Video",src:n(6568).Z,width:"954",height:"715"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("i",null,(0,a.kt)("b",null,"Note that removing the CPU heatsink is not required."))),(0,a.kt)("h3",{id:"step-5---jumper-wires"},"Step 5 - Jumper Wires"),(0,a.kt)("p",null,"This step gets its own section as it's very easy to forget, and can be a pain if forgotten since the pins are located on the bottom of the board."),(0,a.kt)("p",null,"We need to make two connections on the bottom of where the AV port used to be, so that the Xbox thinks that an HD AV cable is plugged in. Use a scrap piece of wire to make these connections."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of AVIP Connections",src:n(8147).Z,width:"688",height:"377"}),"\n",(0,a.kt)("img",{alt:"Image of AVIP Connections",src:n(6566).Z,width:"838",height:"741"})),(0,a.kt)("h3",{id:"step-6---flex-installation"},"Step 6 - Flex Installation"),(0,a.kt)("p",null,"This section will be mostly screenshots of the Xbox video encoder and where the flex connects. Pay close attention to the alignment of the flex cable and ",(0,a.kt)("strong",{parentName:"p"},"take your time while installing!")),(0,a.kt)("p",null,"After the flex is installed, the Xbox should still be bootable."),(0,a.kt)("h4",{id:"best-practices"},"Best Practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pre-tin both sides of the flex by applying ample flux and running solder across each pad before soldering to the Xbox motherboard."),(0,a.kt)("li",{parentName:"ul"},"Pre-shape the flex. Gently shape the flex so it's close to the final shape before soldering. The flex must lay flat and properly aligned when installed."),(0,a.kt)("li",{parentName:"ul"},"Take your time!")),(0,a.kt)("h4",{id:"important"},"Important"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Proper flex positioning and soldering is crucial to allow for good contact. Make sure your flex lies flat on the board, do not solder it on top of the encoder chip pins! Inspect all solder joints before continuing, make sure they are well-formed and do not touch each other.")),(0,a.kt)("h4",{id:"warning"},"Warning!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"There are multiple revisions of the XboxHD+ flex revision. Please pay close attention to the reference images below.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Completed Install")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Flex Installed",src:n(1194).Z,width:"1071",height:"900"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Overview View")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Flex Board Layout",src:n(2206).Z,width:"846",height:"950"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Right Connections")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Flex Board Layout",src:n(8775).Z,width:"1120",height:"943"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Left Connections")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Flex Board Layout",src:n(8067).Z,width:"316",height:"855"})),(0,a.kt)("p",null,"Flex rev 1-5 are the same on the left side."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bottom Connections")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Flex Board Layout",src:n(3167).Z,width:"543",height:"863"})),(0,a.kt)("p",null,"Flex rev 1-5 are the same on the bottom side."),(0,a.kt)("h3",{id:"step-7---aux-wires"},"Step 7 - Aux Wires"),(0,a.kt)("p",null,"Start with connecting each of the pre-cut wires. The wires for 5V and SPDIF should lay flat across the motherboard running towards the right."),(0,a.kt)("h4",{id:"ferrite-bead-removal"},"Ferrite Bead Removal"),(0,a.kt)("p",null,"Next to the Video encoder is a ferrite bead, labeled FB3B1, that needs to be removed. this can be easily done by heating it up with a soldering iron and a bit of solder."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Ferrite Bead Removed",src:n(9610).Z,width:"1220",height:"865"})),(0,a.kt)("h4",{id:"av-portencoder-connections"},"AV Port/Encoder Connections"),(0,a.kt)("p",null,"Connect each of the pre-cut wires according to the wire cut chart above. the wires for 5V and SPDIF should lay flat across the motherboard running to the right."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of Wire connections",src:n(5514).Z,width:"1073",height:"780"})),(0,a.kt)("h4",{id:"smbus-connections-sda-and-scl---skip-for-xboxhd-legacy-installations"},"SMBus Connections (SDA and SCL) - SKIP FOR XboxHD+ Legacy Installations"),(0,a.kt)("p",null,"Using the paired wire connect one wire to each side of the PIC16."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of SMBus Connections",src:n(8788).Z,width:"1069",height:"749"})),(0,a.kt)("h3",{id:"step-8---wrapping-up"},"Step 8 - Wrapping Up"),(0,a.kt)("h4",{id:"3d-printed-hdmi-panel"},"3D Printed HDMI Panel"),(0,a.kt)("p",null,"Insert the 3D printed HDMI part in between the metal shielding and the Xbox case."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of 3D printed HDMI Panel",src:n(1988).Z,width:"1074",height:"515"})),(0,a.kt)("h4",{id:"3d-printed-spacer"},"3D Printed Spacer"),(0,a.kt)("p",null,"Place the spacer as shown below in black."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of 3D printed Spacer",src:n(6950).Z,width:"1071",height:"467"})),(0,a.kt)("h3",{id:"re-install-the-xbox-motherboard"},"Re-install the Xbox Motherboard"),(0,a.kt)("p",null,"Place the Xbox motherboard back into the case. Make sure to screw the motherboard back in. There's one screw located under where the XboxHDMI will be installed."),(0,a.kt)("h3",{id:"install-the-xboxhdmi-board"},"Install the XboxHDMI Board"),(0,a.kt)("p",null,"Begin by adding solder to all of the connection pads (GND, SDA, SCL, SPDIF, 1V8, 5V). This is important as there's little room once everything is installed."),(0,a.kt)("p",null,"Place the XboxHDMI board in the system and screw it down with the two provided screws."),(0,a.kt)("p",null,"Connect each wire to its corresponding pads on the XboxHDMI board."),(0,a.kt)("p",null,"Carefully connect the flex cable to the FPC connector. Be very careful. it may take a couple of tries as sometimes the flex will want to go in at an angle. if this happens, then pull it out and gently push it back in."),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Do not force the flex cable into the FPC connector. Make sure the flex is not inserted at an angle!")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image of XboxHDMI Installed",src:n(9517).Z,width:"1072",height:"805"})),(0,a.kt)("p",{align:"center"},(0,a.kt)("i",null,(0,a.kt)("b",null,"This is a photo of a test system. Ignore the missing parts of the case..."))))}c.isMDXComponent=!0},6568:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step1-5d609867d32d895530083e67696648eb.png"},8147:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step2-AVIP-Connections-0f65a13c77ad9c2565ef3edaa6a2aa37.png"},6566:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step2-Pinout-bd9964a07b65dbae16084f023c55a766.png"},3167:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step3-Bottom-9b5e309c20cdbd146ebda41c70e51138.png"},1194:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step3-Flex-Installed-229a5b20eb9d8c6d65702453a095d67e.png"},2206:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step3-Flex-Overview-dcd6aa37eeeef54bbab5014c5fae4cc4.png"},8067:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step3-Left-c77eb798101b9050e906ac1ca9d9487e.png"},8775:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step3-Right-0d939fe50c1873587741a561be0a85d0.png"},9610:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step4-FB-Removed-4aa66259b25bab14e639ef7ee985a07b.png"},8788:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step4-PIC16-dbbdac0292a9244e803a3f3a77132b0d.png"},5514:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step4-Wire-Connections-6110d397046897fc9be77c14b9554553.png"},1988:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step5-3DHDMI-89e2f42949d5f8d113c53b97edcf5e69.png"},9517:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step5-Finished-0ee2f98709599e791f3578a95799ac1f.png"},6950:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Step5-Spacer-030c3160f8e0bd0a30731707ca956abe.png"},4505:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/YouTube-ad41a41e7b75e175ad2bdda5443f37a9.png"}}]);