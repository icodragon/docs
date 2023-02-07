"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5646],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=r,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var o=n(3117),r=(n(7294),n(3905));const a={sidebar_label:"Mocha Testnet"},i="Mocha Testnet",s={unversionedId:"nodes/mocha-testnet",id:"nodes/mocha-testnet",title:"Mocha Testnet",description:"mocha-testnet",source:"@site/docs/nodes/mocha-testnet.md",sourceDirName:"nodes",slug:"/nodes/mocha-testnet",permalink:"/pr-preview/pr-452/nodes/mocha-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/mocha-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Mocha Testnet"},sidebar:"nodes",previous:{title:"Arabica Devnet",permalink:"/pr-preview/pr-452/nodes/arabica-devnet"},next:{title:"Quick Start",permalink:"/pr-preview/pr-452/nodes/quick-start"}},l={},p=[{value:"RPC endpoints",id:"rpc-endpoints",level:2},{value:"API endpoints",id:"api-endpoints",level:2},{value:"gRPC endpoints",id:"grpc-endpoints",level:2},{value:"Mocha Testnet faucet",id:"mocha-testnet-faucet",level:2},{value:"Explorers",id:"explorers",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mocha-testnet"},"Mocha Testnet"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"mocha-testnet",src:n(1514).Z,width:"3000",height:"1500"})),(0,r.kt)("p",null,"This guide contains the relevant sections for how to connect to Mocha,\ndepending on the type of node you are running. Mocha Testnet is designed\nto help validators test out their infrastructure and node software.\nDevelopers are encouraged to deploy their\nsovereign rollups on Mocha, but we also recommend ",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-452/nodes/arabica-devnet"},"Arabica Devnet"),"\nfor that as it is designed for development purposes."),(0,r.kt)("p",null,"Mocha is a milestone in Celestia, allowing everyone to test out\ncore functionalities on the network. Read the anouncement ",(0,r.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-testnet-introduces-alpha-data-availability-api"},"here"),".\nYour best approach to participating is to first determine which node\nyou would like to run. Each node guides will link to the relevant network\nin order to show you how to connect to them."),(0,r.kt)("p",null,"You have a list of options on the type of nodes you can run in order to\nparticipate in Mocha:"),(0,r.kt)("p",null,"Consensus:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-452/nodes/validator-node"},"Validator Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-452/nodes/consensus-full-node"},"Consensus Full Node"))),(0,r.kt)("p",null,"Data Availability:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-452/nodes/bridge-node"},"Bridge Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-452/nodes/full-storage-node"},"Full Storage Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/pr-preview/pr-452/nodes/light-node"},"Light Node"))),(0,r.kt)("p",null,"Select the type of node you would like to run and follow the instructions\non each respective page. Whenever you are asked to select the type of network\nyou want to connect to in those guides, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Mocha")," in order to refer\nto the correct instructions on this page on how to connect to Mocha."),(0,r.kt)("h2",{id:"rpc-endpoints"},"RPC endpoints"),(0,r.kt)("p",null,"The RPC endpoint is to allow users to interact with Celestia's nodes by\nquerying the node's state and broadcasting transactions on the\nCelestia network. The default port is 26657."),(0,r.kt)("p",null,"Below is a list of RPC endpoints you can use to connect to Mocha Testnet:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rpc-mocha.pops.one"},"https://rpc-mocha.pops.one")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rpc.mocha.celestia.counterpoint.software"},"https://rpc.mocha.celestia.counterpoint.software"))),(0,r.kt)("h2",{id:"api-endpoints"},"API endpoints"),(0,r.kt)("p",null,"The API endpoint is to allow users to interact with the REST API in Cosmos\nSDK which is implemented using gRPC-gateway, which exposes gRPC endpoints\nas REST endpoints. This allows for communication with the node using REST\ncalls, which can be useful if the client does not support gRPC or HTTP2.\nThe default port is 1317."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api-mocha.pops.one"},"https://api-mocha.pops.one")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.mocha.celestia.counterpoint.software"},"https://api.mocha.celestia.counterpoint.software"))),(0,r.kt)("h2",{id:"grpc-endpoints"},"gRPC endpoints"),(0,r.kt)("p",null,"The gRPC endpoint is to allow users to interact with a Celestia node using\ngRPC, a modern open-source and high-performance RPC framework. The default\nport is 9090. In the Cosmos SDK, gRPC is used to define state queries and\nbroadcast transactions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc-mocha.pops.one"},"https://grpc-mocha.pops.one")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://grpc.mocha.celestia.counterpoint.software"},"https://grpc.mocha.celestia.counterpoint.software"))),(0,r.kt)("h2",{id:"mocha-testnet-faucet"},"Mocha Testnet faucet"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER\nDISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS\nDO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC\nDISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.")),(0,r.kt)("p",null,"You can request from Mocha Testnet Faucet on the #mocha-faucet channel on\nCelestia's Discord server with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$request <CELESTIA-ADDRESS>\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"<CELESTIA-ADDRESS>")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia1******")," generated address."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Faucet has a limit of 10 tokens per week per address/Discord ID")),(0,r.kt)("h2",{id:"explorers"},"Explorers"),(0,r.kt)("p",null,"There are several explorers you can use for Mocha:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://testnet.mintscan.io/celestia-testnet"},"https://testnet.mintscan.io/celestia-testnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestia.explorers.guru"},"https://celestia.explorers.guru/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://celestiascan.vercel.app"},"https://celestiascan.vercel.app/"))))}u.isMDXComponent=!0},1514:function(e,t,n){t.Z=n.p+"assets/images/mocha-57e8627f3a1ad8d70c559a19553f439d.jpg"}}]);