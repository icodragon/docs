"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3299],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,r[1]=u;for(var i=2;i<l;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o=n(4334),l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(3117),o=n(7294),l=n(4334),r=n(2389),u=n(7392),s=n(7094),i=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:f,groupId:m,className:h}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=f??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,u.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,o.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:S}=(0,i.o5)();if(null!=m){const e=v[m];null!=e&&e!==N&&k.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==N&&(S(t),T(a),null!=m&&w(m,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},k.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:x,onClick:C},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function f(e){const t=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},1309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return i},toc:function(){return d}});var a=n(3117),o=(n(7294),n(3905)),l=n(5488),r=n(5162);const u={sidebar_label:"Full Storage Node"},s="Setting up a Celestia Full Storage Node",i={unversionedId:"nodes/full-storage-node",id:"nodes/full-storage-node",title:"Setting up a Celestia Full Storage Node",description:"This tutorial will guide you through setting up a Celestia Full Storage",source:"@site/docs/nodes/full-storage-node.mdx",sourceDirName:"nodes",slug:"/nodes/full-storage-node",permalink:"/nodes/full-storage-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/full-storage-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Full Storage Node"},sidebar:"nodes",previous:{title:"Bridge Node",permalink:"/nodes/bridge-node"},next:{title:"Consensus",permalink:"/category/consensus"}},c={},d=[{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your full storage node",id:"setting-up-your-full-storage-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Install Celestia node",id:"install-celestia-node",level:2},{value:"Run the full storage node",id:"run-the-full-storage-node",level:3},{value:"Initialize the full storage node",id:"initialize-the-full-storage-node",level:4},{value:"Start the full storage node",id:"start-the-full-storage-node",level:4},{value:"Optional: run the full storage node with a custom key",id:"optional-run-the-full-storage-node-with-a-custom-key",level:3},{value:"Optional: start the full storage node with SystemD",id:"optional-start-the-full-storage-node-with-systemd",level:3}],p={toc:d};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-celestia-full-storage-node"},"Setting up a Celestia Full Storage Node"),(0,o.kt)("p",null,"This tutorial will guide you through setting up a Celestia Full Storage\nNode, which is a Celestia node that doesn't connect to Celestia App\n(hence not a full node) but stores all the data."),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"The following hardware minimum requirements are recommended for running\nthe full storage node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,o.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,o.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,o.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,o.kt)("h2",{id:"setting-up-your-full-storage-node"},"Setting up your full storage node"),(0,o.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,o.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,o.kt)("p",null,"You can follow the tutorial for setting up your dependencies ",(0,o.kt)("a",{parentName:"p",href:"/nodes/environment"},"here")),(0,o.kt)("h2",{id:"install-celestia-node"},"Install Celestia node"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Make sure that you have at least 250+ Gb of free space for\nCelestia Full Storage Node")),(0,o.kt)("p",null,"You can follow the tutorial for installing Celestia Node ",(0,o.kt)("a",{parentName:"p",href:"/nodes/celestia-node"},"here")),(0,o.kt)("h3",{id:"run-the-full-storage-node"},"Run the full storage node"),(0,o.kt)("h4",{id:"initialize-the-full-storage-node"},"Initialize the full storage node"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full init\n")),(0,o.kt)("h4",{id:"start-the-full-storage-node"},"Start the full storage node"),(0,o.kt)("p",null,"Start the Full Storage Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: In order for access to the ability to get/submit state-related\ninformation, such as the ability to submit PayForData transactions,\nor query for the node's account balance, a gRPC endpoint of a validator\n(core) node must be passed as directed below.")),(0,o.kt)("p",null,"A note on ports:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The ",(0,o.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," defaults to 9090, so if you do not specify\nit in the command line, it will default to that port. You can use the flag\nto specify another port if you prefer.")),(0,o.kt)(l.Z,{groupId:"networks",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --core.grpc.port <port>\n"))),(0,o.kt)(r.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.remote <ip-address>:<port>\n")))),(0,o.kt)("p",null,"If you would like to find example RPC endpoints, check out the list of\nresources ",(0,o.kt)("a",{parentName:"p",href:"./mocha-testnet"},"here"),"."),(0,o.kt)("p",null,"You can create your key for your node by following the ",(0,o.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,o.kt)("a",{parentName:"p",href:"/developers/celestia-node-key"},"here")),(0,o.kt)("p",null,"Once you start the Full Node, a wallet key will be generated for you.\nYou will need to fund that address with testnet tokens to pay for\nPayForData transactions.\nYou can find the address by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type full --keyring-backend test\n")),(0,o.kt)("p",null,"You have two networks to get testnet tokens from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./arabica-devnet"},"Arabica")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./mocha-testnet"},"Mocha"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a full-storage node for your sovereign\nrollup, it is highly recommended to request Arabica devnet tokens\nas Arabica has the latest changes that can be used to\ntest for developing your sovereign rollup. You can still use\nMocha Testnet as well, it is just mostly used for Validator operations.")),(0,o.kt)("h3",{id:"optional-run-the-full-storage-node-with-a-custom-key"},"Optional: run the full storage node with a custom key"),(0,o.kt)("p",null,"In order to run a full storage node using a custom key:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia full storage node directory\nat the correct path (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.celestia-full/keys/keyring-test"),")"),(0,o.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,o.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,o.kt)(l.Z,{groupId:"networks",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"arabica",label:"Arabica",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --core.grpc.port <port> --keyring.accname <name-of-custom-key>\n"))),(0,o.kt)(r.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.remote <ip-address>:<port> --keyring.accname <name-of-custom-key>\n")))),(0,o.kt)("h3",{id:"optional-start-the-full-storage-node-with-systemd"},"Optional: start the full storage node with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up the full storage node as a background\nprocess with SystemD ",(0,o.kt)("a",{parentName:"p",href:"./systemd"},"here"),"."),(0,o.kt)("p",null,"With that, you are now running a Celestia Full Storage Node."))}f.isMDXComponent=!0}}]);