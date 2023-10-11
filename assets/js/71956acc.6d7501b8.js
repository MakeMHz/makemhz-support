"use strict";(self.webpackChunkmakemhz_support=self.webpackChunkmakemhz_support||[]).push([[831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={description:"Project Stellar simplifies the process of transferring data to and from your Xbox console."},o="Hard Drive Partitions",l={unversionedId:"xbox/xbox-info/hdd-partitions/index",id:"xbox/xbox-info/hdd-partitions/index",title:"Hard Drive Partitions",description:"Project Stellar simplifies the process of transferring data to and from your Xbox console.",source:"@site/docs/xbox/xbox-info/00-hdd-partitions/index.md",sourceDirName:"xbox/xbox-info/00-hdd-partitions",slug:"/xbox/xbox-info/hdd-partitions/",permalink:"/xbox/xbox-info/hdd-partitions/",draft:!1,editUrl:"https://github.com/makemhz/makemhz-support/tree/main/docs/xbox/xbox-info/00-hdd-partitions/index.md",tags:[],version:"current",frontMatter:{description:"Project Stellar simplifies the process of transferring data to and from your Xbox console."},sidebar:"documentation",previous:{title:"Identifying Xbox Revision",permalink:"/xbox/identifying-xbox-revision/"},next:{title:"Initial Setup",permalink:"/project-stellar/initial-setup/"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Retail Partitions",id:"retail-partitions",level:2},{value:"Extended Partition(s)",id:"extended-partitions",level:2},{value:"Paths",id:"paths",level:3},{value:"Custom Dashboard",id:"custom-dashboard",level:4},{value:"Games",id:"games",level:4},{value:"Applications/Homebrew",id:"applicationshomebrew",level:4},{value:"Additional Resources",id:"additional-resources",level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hard-drive-partitions"},"Hard Drive Partitions"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"For those who have dabbled in formatting drives, setting up Windows, or experimenting with different operating systems, the concept of hard drive partitions might be familiar."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Window Partitions",src:a(1377).Z,width:"1280",height:"720"})),(0,i.kt)("p",null,"However, if you're new to the subject, this guide is here to assist."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Disk_partitioning"},"Wikipedia")," offers a concise description of disk partitioning:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Disk partitioning or disk slicing is the creation of one or more regions on secondary storage, so that each region can be managed separately. These regions are called partitions. It is typically the first step of preparing a newly installed disk, before any file system is created.")),(0,i.kt)("p",null,"Similarly to a PC, the Xbox's hard drive is divided into multiple partitions."),(0,i.kt)("h2",{id:"retail-partitions"},"Retail Partitions"),(0,i.kt)("p",null,"These partitions are essential to the Xbox and are present even in an unmodified, stock system."),(0,i.kt)("p",null,"The sizes of these partitions are fixed and cannot be altered. For drives larger than the standard size, extended partitions come into play, which will be discussed in the following section."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Partition"),(0,i.kt)("th",{parentName:"tr",align:null},"Drive Letter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Size"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Partition 2"),(0,i.kt)("td",{parentName:"tr",align:null},"C"),(0,i.kt)("td",{parentName:"tr",align:null},"System (Retail Dashboard)"),(0,i.kt)("td",{parentName:"tr",align:null},"500MB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Partition 1"),(0,i.kt)("td",{parentName:"tr",align:null},"E"),(0,i.kt)("td",{parentName:"tr",align:null},"Data (Saved Games and Title Updates)"),(0,i.kt)("td",{parentName:"tr",align:null},"4.77GB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Partition 3"),(0,i.kt)("td",{parentName:"tr",align:null},"X"),(0,i.kt)("td",{parentName:"tr",align:null},"Game Cache"),(0,i.kt)("td",{parentName:"tr",align:null},"750MB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Partition 4"),(0,i.kt)("td",{parentName:"tr",align:null},"Y"),(0,i.kt)("td",{parentName:"tr",align:null},"Game Cache"),(0,i.kt)("td",{parentName:"tr",align:null},"750MB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Partition 5"),(0,i.kt)("td",{parentName:"tr",align:null},"Z"),(0,i.kt)("td",{parentName:"tr",align:null},"Game Cache"),(0,i.kt)("td",{parentName:"tr",align:null},"750MB")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In the realm of modding, it's widely regarded as best practice to retain the original content of files and avoid storing unrelated files in these partitions. While it's permissible to do so, it's preferable to maintain a clean setup.")),(0,i.kt)("h2",{id:"extended-partitions"},"Extended Partition(s)"),(0,i.kt)("p",null,"On systems that have been modified to include larger storage areas, extended partitions are employed. Within the scope of Project Stellar, we utilize just one extended partition, designated as Drive F, which serves as the storage space for games, homebrew, applications, and custom dashboards."),(0,i.kt)("h3",{id:"paths"},"Paths"),(0,i.kt)("p",null,"In general, files can be organized in any folder structure that seems logical. However, this guide will focus on naming conventions that are widely recognized and compatible with both Project Stellar and other homebrew applications."),(0,i.kt)("h4",{id:"custom-dashboard"},"Custom Dashboard"),(0,i.kt)("p",null,"Project Stellar will attempt to boot a custom dashbaord located at ",(0,i.kt)("inlineCode",{parentName:"p"},"F:\\Dashboard\\default.xbe")," on boot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"F:\\\n  Dashboard\\\n    default.xbe\n    <Additional dashboard files>...\n  ...\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Most custom dashboards include several files besides ",(0,i.kt)("inlineCode",{parentName:"p"},"default.xbe"),". All these files must be moved to the ",(0,i.kt)("inlineCode",{parentName:"p"},"F:\\Dashboard")," directory, ensuring they are in the same location as ",(0,i.kt)("inlineCode",{parentName:"p"},"F:\\Dashboard\\default.xbe"),".")),(0,i.kt)("h4",{id:"games"},"Games"),(0,i.kt)("p",null,"Game backups are typically stored in a folder on the ",(0,i.kt)("inlineCode",{parentName:"p"},"F Parition")," matching the ",(0,i.kt)("inlineCode",{parentName:"p"},"F:\\Game\\<Game Name>")," schema."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"F:\\\n  Games\\\n    Halo\\\n      default.xbe\n      <Additional game files>...\n    Halo 2\\\n      game.iso\n      attache.xbe\n  ...\n")),(0,i.kt)("h4",{id:"applicationshomebrew"},"Applications/Homebrew"),(0,i.kt)("p",null,"Applications and homebrew are typically stored in a folder on the ",(0,i.kt)("inlineCode",{parentName:"p"},"F Parition")," matching the ",(0,i.kt)("inlineCode",{parentName:"p"},"F:\\Apps\\<Application/Homebrew Name>")," schema."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"F:\\\n  Apps\\\n    AppName\\\n      default.xbe\n      <Additional files>...\n  ...\n")),(0,i.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://xboxdevwiki.net/Hard_Drive"},"Xbox Dev Wiki - Hard Drive"))))}c.isMDXComponent=!0},1377:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stellar-tools-b0e12ac9f60c5ad58b62b75ec8bdb3c1.png"}}]);