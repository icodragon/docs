"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9615],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return h}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),h=o,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||l;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),o=a(4334),l="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:a},t)}},5488:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(3117),o=a(7294),l=a(4334),r=a(2389),i=a(7392),c=a(7094),s=a(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:r,defaultValue:p,values:h,groupId:g,className:m}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=h??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,i.l)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,c.U)(),[T,N]=(0,o.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:E}=(0,s.o5)();if(null!=g){const e=y[g];null!=e&&e!==T&&f.some((t=>t.value===e))&&N(e)}const O=e=>{const t=e.currentTarget,a=_.indexOf(t),n=f[a].value;n!==T&&(E(t),N(n),null!=g&&w(g,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;a=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;a=_[t]??_[_.length-1];break}}null==(t=a)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},m)},f.map((e=>{let{value:t,label:a,attributes:r}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>_.push(e),onKeyDown:Z,onClick:O},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),a??t)}))),a?(0,o.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function h(e){const t=(0,r.Z)();return o.createElement(p,(0,n.Z)({key:String(t)},e))}},464:function(e,t){const a=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"1943735bdefc751ae98732760921d49a3534a70a","core-latest-tag":"v1.15.0-tm-v0.34.23","core-latest-sha":"77a1de71feadebaa89c5ecaef0309fd8b9f2f921","node-latest-tag":"v0.7.1","node-latest-sha":"c958fd3b3921ca993489d88530e59fe7f337bf4d"});t.Z=a},8842:function(e,t){const a=Object.freeze({"app-latest-tag":"v0.12.0","app-latest-sha":"67c90ede03d2543ce9b02726dfe17cf5aad1f20a","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.7.0","node-latest-sha":"7226f02794bdf11a91116d0d4cd88399f05149ad"});t.Z=a},8549:function(e,t){const a=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"});t.Z=a},1846:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return g}});var n=a(3117),o=(a(7294),a(3905)),l=a(8549),r=a(464),i=a(8842),c=a(5488),s=a(5162);const u={sidebar_label:"Docker images"},d="\ud83d\udc33 Docker setup",p={unversionedId:"nodes/docker-images",id:"nodes/docker-images",title:"\ud83d\udc33 Docker setup",description:"This page has instructions to run celestia-node using Docker. If you are",source:"@site/docs/nodes/docker-images.mdx",sourceDirName:"nodes",slug:"/nodes/docker-images",permalink:"/nodes/docker-images",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/docker-images.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Docker images"},sidebar:"nodes",previous:{title:"Installing celestia-node",permalink:"/nodes/celestia-node"},next:{title:"Installing celestia-app",permalink:"/nodes/celestia-app"}},h={},g=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Light node setup",id:"light-node-setup",level:2},{value:"Blockspacerace light node setup",id:"blockspacerace-light-node-setup",level:3},{value:"Mocha testnet setup",id:"mocha-testnet-setup",level:3},{value:"Arabica devnet setup",id:"arabica-devnet-setup",level:3},{value:"Bridge node setup",id:"bridge-node-setup",level:2},{value:"Blockspacerace bridge node setup",id:"blockspacerace-bridge-node-setup",level:3},{value:"Mocha bridge node setup",id:"mocha-bridge-node-setup",level:3},{value:"Arabica bridge node setup",id:"arabica-bridge-node-setup",level:3},{value:"Full node setup",id:"full-node-setup",level:2},{value:"Blockspacerace full node setup",id:"blockspacerace-full-node-setup",level:3},{value:"Mocha full node setup",id:"mocha-full-node-setup",level:3},{value:"Arabica full node setup",id:"arabica-full-node-setup",level:3}],m={toc:g};function k(e){let{components:t,...u}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-docker-setup"},"\ud83d\udc33 Docker setup"),(0,o.kt)("p",null,"This page has instructions to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," using Docker. If you are\nlooking for instructions to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," using a binary, please\nrefer to the ",(0,o.kt)("a",{parentName:"p",href:"/nodes/celestia-node"},"celestia-node")," page."),(0,o.kt)("p",null,"Using Docker is the easiest way to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," for most\nusers. Docker is a containerization platform that allows you to run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node"),"\nin an isolated environment."),(0,o.kt)("p",null,"This means that you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," on your machine without having\nto worry about installing and configuring all of the dependencies required\nto run the node."),(0,o.kt)("p",null,"The easiest way to install Docker is to use the Docker Desktop installer or\nUbuntu. You can find the instructions for your operating system\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install"},"here"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker"},"Docker")," and basic understanding of Docker")),(0,o.kt)(c.Z,{groupID:"node",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,o.kt)("h2",{id:"light-node-setup"},"Light node setup"),(0,o.kt)(c.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"blockspacerace",label:"blockspacerace",mdxType:"TabItem"},(0,o.kt)("h3",{id:"blockspacerace-light-node-setup"},"Blockspacerace light node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=blockspacerace ghcr.io/celestiaorg/celestia-node:",i.Z["node-latest-tag"]," celestia light start --core.ip IP_ADDRESS --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia light node running on the Blockspace Race testnet."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h3",{id:"mocha-testnet-setup"},"Mocha testnet setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:sha-",l.Z["node-latest-sha"].slice(0,7)," celestia light start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia light node running on the Mocha testnet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mocha_light_docker",src:a(3609).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h3",{id:"arabica-devnet-setup"},"Arabica devnet setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=light -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",r.Z["node-latest-tag"]," celestia light start --core.ip https://limani.celestia-devops.dev --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia light node running on the Arabica devnet."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arabica_light_docker",src:a(8316).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")))),(0,o.kt)(s.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,o.kt)("h2",{id:"bridge-node-setup"},"Bridge node setup"),(0,o.kt)(c.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"blockspacerace",label:"blockspacerace",mdxType:"TabItem"},(0,o.kt)("h3",{id:"blockspacerace-bridge-node-setup"},"Blockspacerace bridge node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=blockspacerace ghcr.io/celestiaorg/celestia-node:",i.Z["node-latest-tag"]," celestia bridge start --core.ip IP_ADDRESS --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia bridge node running on the Blockspace Race testnet."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h3",{id:"mocha-bridge-node-setup"},"Mocha bridge node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:sha-",l.Z["node-latest-sha"].slice(0,7)," celestia bridge start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia bridge node running on the Mocha network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mocha_bridge_docker",src:a(3234).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h3",{id:"arabica-bridge-node-setup"},"Arabica bridge node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=bridge -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",r.Z["node-latest-tag"]," celestia bridge start --core.ip https://limani.celestia-devops.dev --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia bridge node running on the Arabica network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arabica_bridge_docker",src:a(3415).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")))),(0,o.kt)(s.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,o.kt)("h2",{id:"full-node-setup"},"Full node setup"),(0,o.kt)(c.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"blockspacerace",label:"blockspacerace",mdxType:"TabItem"},(0,o.kt)("h3",{id:"blockspacerace-full-node-setup"},"Blockspacerace full node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=full -e P2P_NETWORK=blockspacerace ghcr.io/celestiaorg/celestia-node:",i.Z["node-latest-tag"]," celestia full start --core.ip IP_ADDRESS --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia full node running on the Blockspace Race testnet."),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("h3",{id:"mocha-full-node-setup"},"Mocha full node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=full -e P2P_NETWORK=mocha ghcr.io/celestiaorg/celestia-node:sha-",l.Z["node-latest-sha"].slice(0,7)," celestia full start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia full storage node running on the Mocha network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mocha_full_docker",src:a(8965).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page.")),(0,o.kt)(s.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("h3",{id:"arabica-full-node-setup"},"Arabica full node setup"),(0,o.kt)("p",null,"Run the image from the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",null,"docker run -e NODE_TYPE=full -e P2P_NETWORK=arabica ghcr.io/celestiaorg/celestia-node:",r.Z["node-latest-tag"]," celestia full start --core.ip https://limani.celestia-devops.dev --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network arabica")),(0,o.kt)("p",null,"Congratulations! You now have a Celestia full storage node running on the Arabica network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arabica_full_docker",src:a(1169).Z,width:"1984",height:"1218"})),(0,o.kt)("p",null,"If you would like to run the node with custom flags,\nyou can refer to the\n",(0,o.kt)("a",{parentName:"p",href:"../../developers/node-tutorial#connect-to-a-public-core-endpoint"},(0,o.kt)("inlineCode",{parentName:"a"},"celestia-node")," tutorial")," page."))))))}k.isMDXComponent=!0},3415:function(e,t,a){t.Z=a.p+"assets/images/arabica_bridge_docker-47ba2389bb4b625617e77167ff8b7bd0.gif"},1169:function(e,t,a){t.Z=a.p+"assets/images/arabica_full_docker-c748dec2dba3b7d115df73be54ab1a90.gif"},8316:function(e,t,a){t.Z=a.p+"assets/images/arabica_light_docker-7071bf5fb7ab8041c11c7160f651edfe.gif"},3234:function(e,t,a){t.Z=a.p+"assets/images/mocha_bridge_docker-7ec6c8a2acbfdbbf614a00271d3d54b6.gif"},8965:function(e,t,a){t.Z=a.p+"assets/images/mocha_full_docker-9d3884fe7f3e102362715e0100eb079e.gif"},3609:function(e,t,a){t.Z=a.p+"assets/images/mocha_light_docker-47b10985b0784499df40395e28023537.gif"}}]);