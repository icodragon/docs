"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6056],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),p=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,i(i({ref:e},c),{},{components:n})):o.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},803:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"Full stack modular blockchain development guide"},i="Full stack modular blockchain development guide",l={unversionedId:"developers/full-stack-modular-development-guide",id:"developers/full-stack-modular-development-guide",title:"Full stack modular blockchain development guide",description:"This guide will introduce you to",source:"@site/docs/developers/full-stack-modular-development-guide.md",sourceDirName:"developers",slug:"/developers/full-stack-modular-development-guide",permalink:"/pr-preview/pr-445/fr/developers/full-stack-modular-development-guide",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/full-stack-modular-development-guide.md",tags:[],version:"current",frontMatter:{sidebar_label:"Full stack modular blockchain development guide"},sidebar:"developers",previous:{title:"Rollkit",permalink:"/pr-preview/pr-445/fr/developers/rollkit"},next:{title:"Fuelmint documentation",permalink:"/pr-preview/pr-445/fr/developers/fuelmint"}},s={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Project setup",id:"project-setup",level:3},{value:"Updating the contract and tests",id:"updating-the-contract-and-tests",level:4},{value:"Running the test",id:"running-the-test",level:4},{value:"Updating the deployment script",id:"updating-the-deployment-script",level:4},{value:"Deploying locally",id:"deploying-locally",level:4},{value:"Deploying to the Ethermint Sovereign Rollup",id:"deploying-to-the-ethermint-sovereign-rollup",level:3},{value:"Building the frontend",id:"building-the-frontend",level:3},{value:"Configuring environment variables",id:"configuring-environment-variables",level:4},{value:"Configuring the entrypoint",id:"configuring-the-entrypoint",level:3},{value:"Creating and reading posts",id:"creating-and-reading-posts",level:3},{value:"Adding Ethermint Chain to MetaMask",id:"adding-ethermint-chain-to-metamask",level:3},{value:"Testing it out on Ethermint",id:"testing-it-out-on-ethermint",level:3},{value:"Now give it a spin \ud83c\udf00",id:"now-give-it-a-spin-",level:3}],c={toc:p},d="wrapper";function u(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"full-stack-modular-blockchain-development-guide"},"Full stack modular blockchain development guide"),(0,a.kt)("p",null,"This guide will introduce you to\n",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-445/fr/concepts/how-celestia-works/introduction"},"modular blockchains")," like\nCelestia, explain their benefits, and show you how to build a full stack\nmodular dapp with React, Vite, RainbowKit, Celestia, and Foundry."),(0,a.kt)("p",null,"Current blockchain architectures are not scalable and face challenges\naround accessibility. In order for blockchains and web3 to reach mass\nadoption, these challenges must be addressed."),(0,a.kt)("p",null,"Blockchains have evolved over time from application-specific networks like\nBitcoin to shared smart contract platforms like Ethereum. This guide will\ncover how to build dapps on these newer, shared platforms."),(0,a.kt)("p",null,"If you're interested in learning more about modular blockchains, or are new\nto the Celestia ecosystem, we recommend you read the\n",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-445/fr/developers/build-modular"},"Build Modular")," page first."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"Now that you\u2019ve had an overview of what Celestia is, let\u2019s start building!"),(0,a.kt)("p",null,"The execution environment that we\u2019ll be leveraging today is Ethermint, an\nEVM-compatible testnet that you will run locally for this tutorial."),(0,a.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},"Node.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry"},"Foundry")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://infura.io"},"Infura account")," (for uploading files to IPFS)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-445/fr/developers/node-tutorial"},"A Celestia Light Node running")," (to post PFBs from your\nrollup)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rollkit.dev/docs/tutorials/ethermint"},"Ethermint Tutorial")," (for\nrunning your own Ethermint rollup & deploying your smart contract)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://metamask.io"},"MetaMask wallet")," (for connecting to your frontend)")),(0,a.kt)("h3",{id:"project-setup"},"Project setup"),(0,a.kt)("p",null,"To get started, create a new Foundry project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge init celestia-dapp\ncd celestia-dapp\n")),(0,a.kt)("p",null,"Foundry has created an example smart contract located at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/Contract.sol"),"."),(0,a.kt)("h4",{id:"updating-the-contract-and-tests"},"Updating the contract and tests"),(0,a.kt)("p",null,"Let's update the contracts to include a basic blog example. Create a new file\nin the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"Contract.sol")," with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="src/Contract.sol"',title:'"src/Contract.sol"'},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Blog {\n    string public name;\n    address public owner;\n\n    uint private _postId;\n\n    struct Post {\n      uint id;\n      string title;\n      string content;\n      bool published;\n    }\n    /* mappings can be seen as hash tables */\n    /* here we create lookups for posts by id and posts by ipfs hash */\n    mapping(uint => Post) private idToPost;\n    mapping(string => Post) private hashToPost;\n\n    /* events facilitate communication between smart contractsand their user interfaces  */\n    /* i.e. we can create listeners for events in the client and also use them in The Graph  */\n    event PostCreated(uint id, string title, string hash);\n    event PostUpdated(uint id, string title, string hash, bool published);\n\n    /* when the blog is deployed, give it a name */\n    /* also set the creator as the owner of the contract */\n    constructor(string memory _name) {\n        name = _name;\n        owner = msg.sender;\n    }\n\n    /* updates the blog name */\n    function updateName(string memory _name) public {\n        name = _name;\n    }\n\n    /* transfers ownership of the contract to another address */\n    function transferOwnership(address newOwner) public onlyOwner {\n        owner = newOwner;\n    }\n\n    /* fetches an individual post by the content hash */\n    function fetchPost(string memory hash) public view returns(Post memory){\n      return hashToPost[hash];\n    }\n\n    /* creates a new post */\n    function createPost(string memory title, string memory hash) public onlyOwner {\n        _postId = _postId + 1;\n        Post storage post = idToPost[_postId];\n        post.id = _postId;\n        post.title = title;\n        post.published = true;\n        post.content = hash;\n        hashToPost[hash] = post;\n        emit PostCreated(_postId, title, hash);\n    }\n\n    /* updates an existing post */\n    function updatePost(uint postId, string memory title, string memory hash, bool published) public onlyOwner {\n        Post storage post =  idToPost[postId];\n        post.title = title;\n        post.published = published;\n        post.content = hash;\n        idToPost[postId] = post;\n        hashToPost[hash] = post;\n        emit PostUpdated(post.id, title, hash, published);\n    }\n\n    /* fetches all posts */\n    function fetchPosts() public view returns (Post[] memory) {\n        uint itemCount = _postId;\n\n        Post[] memory posts = new Post[](itemCount);\n        for (uint i = 0; i < itemCount; i++) {\n            uint currentId = i + 1;\n            Post storage currentItem = idToPost[currentId];\n            posts[i] = currentItem;\n        }\n        return posts;\n    }\n\n    /* this modifier means only the contract owner can */\n    /* invoke the function */\n    modifier onlyOwner() {\n      require(msg.sender == owner);\n    _;\n  }\n}\n")),(0,a.kt)("p",null,"Next, let's create a test for this contract."),(0,a.kt)("p",null,"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"test/Contract.t.sol")," and update the code with the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="test/Contract.t.sol"',title:'"test/Contract.t.sol"'},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nimport "forge-std/Test.sol";\nimport "src/Contract.sol";\n\ncontract ContractTest is Test {\n    Blog blog;\n\n    function setUp() public {\n        blog = new Blog("Celestia Blog");\n    }\n\n    function testCreatePost() public {\n        blog.createPost("My first post", "12345");\n        Blog.Post[] memory posts = blog.fetchPosts();\n        assertEq(posts.length, 1);\n    }\n\n    function testUpdatePost() public {\n        blog.createPost("My first post", "12345");\n        blog.updatePost(1, "My second post", "12345", true);\n        Blog.Post memory updatedPost = blog.fetchPost("12345");\n        assertEq(updatedPost.title, "My second post");\n    }\n\n    function testFetchPosts() public {\n        Blog.Post[] memory posts = blog.fetchPosts();\n        assertEq(posts.length, 0);\n        blog.createPost("My first post", "12345");\n        posts = blog.fetchPosts();\n        assertEq(posts.length, 1);\n    }\n\n    function testOnlyOwner() public {\n        blog.createPost("My first post", "12345");\n        address bob = address(0x1);\n        vm.startPrank(bob);\n        vm.expectRevert();\n        blog.updatePost(1, "My second post", "12345", true);\n    }\n}\n')),(0,a.kt)("p",null,"Foundry uses ",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/ds-test.html"},"Dappsys Test"),"\nto provide basic logging and assertion functionality. It's included in the Forge\nStandard Library."),(0,a.kt)("p",null,"Here, we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"assertEq")," to assert equality. You can view all of the\nassertion functions available ",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/ds-test.html?highlight=log_int#asserting"},"here"),"."),(0,a.kt)("h4",{id:"running-the-test"},"Running the test"),(0,a.kt)("p",null,"We can now run our tests to make sure our contract is working properly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge test -vv\n")),(0,a.kt)("h4",{id:"updating-the-deployment-script"},"Updating the deployment script"),(0,a.kt)("p",null,"Now that we've tested the contract, let's try deploying it locally using\n",(0,a.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/tutorials/solidity-scripting.html"},"Solidity Scripting"),"."),(0,a.kt)("p",null,"To do so, update the deloyment script at ",(0,a.kt)("inlineCode",{parentName:"p"},"script/Contracts.s.sol")," with the\nfollowing code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity",metastring:'title="script/Contracts.s.sol"',title:'"script/Contracts.s.sol"'},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nimport "forge-std/Script.sol";\n\nimport {Blog} from "src/Contract.sol";\n\ncontract ContractScript is Script {\n    function setUp() public {}\n\n    function run() public {\n        vm.startBroadcast();\n        new Blog("Celestia Blog");\n        vm.stopBroadcast();\n    }\n}\n')),(0,a.kt)("p",null,"Now we can use this script to deploy our smart contract to either a live or test\nnetwork."),(0,a.kt)("h4",{id:"deploying-locally"},"Deploying locally"),(0,a.kt)("p",null,"Next start Anvil, the local testnet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"anvil --port 9545\n")),(0,a.kt)("admonition",{title:"caution",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"We need to use port 9545, because Ethermint will use 8545.")),(0,a.kt)("p",null,"Once started, Anvil will give you a local RPC endpoint as well as a handful of\nPrivate Keys and Accounts that you can use."),(0,a.kt)("p",null,"We can now use the local RPC along with one of the private keys to deploy locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge script script/Contract.s.sol:ContractScript --fork-url \\\nhttp://localhost:9545 --private-key $PRIVATE_KEY --broadcast\n")),(0,a.kt)("p",null,"Once the contract has been deployed locally, Anvil will log out the contract address."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Take a note of this local contract address as we\u2019ll be using it later in the\nfrontend application.")),(0,a.kt)("p",null,"Next, set the contract address as an environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<contract-address>\n")),(0,a.kt)("p",null,"We can then test sending transactions to it with ",(0,a.kt)("inlineCode",{parentName:"p"},"cast send"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS \\\n"createPost(string,string)" "my first post" "12345" \\\n--private-key $PRIVATE_KEY\n')),(0,a.kt)("p",null,"We can then perform read operations with ",(0,a.kt)("inlineCode",{parentName:"p"},"cast call"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "fetchPosts()"\n')),(0,a.kt)("p",null,"Once the contract is deployed successfully, ",(0,a.kt)("strong",{parentName:"p"},"take a note of the contract\naddress as we\u2019ll also be needing it in just a moment when we test the live contract"),"."),(0,a.kt)("h3",{id:"deploying-to-the-ethermint-sovereign-rollup"},"Deploying to the Ethermint Sovereign Rollup"),(0,a.kt)("p",null,"First, we will need to follow the setup from the ",(0,a.kt)("a",{parentName:"p",href:"https://rollkit.dev/docs/tutorials/ethermint"},"Ethermint tutorial"),"."),(0,a.kt)("admonition",{title:"Pre-requisites",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"It is required that you complete dependency setup,\nRollKit installation, and\nInstantiating and Ethermint rollup from the\n",(0,a.kt)("a",{parentName:"p",href:"https://rollkit.dev/docs/tutorials/ethermint"},"Ethermint tutorial"),"\nto complete the remainder of the tutorial.")),(0,a.kt)("p",null,"Now that we've deployed and tested locally, we can deploy to our\nEthermint chain."),(0,a.kt)("p",null,"First, we will need to export the private key generated by\nthe ethermint ",(0,a.kt)("inlineCode",{parentName:"p"},"init.sh")," script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE_KEY=$(ethermintd keys unsafe-export-eth-key mykey --keyring-backend test)\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: Here, the key name from ",(0,a.kt)("inlineCode",{parentName:"p"},"init.sh")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"mykey")," but you can modify\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"init.sh")," to change the name of your key.")),(0,a.kt)("p",null,"Now, we can start deploying the smart contract to our Ethermint chain."),(0,a.kt)("p",null,"To do so, run the following script in the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-dapp")," directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"forge script script/Contract.s.sol:ContractScript \\\n--rpc-url http://localhost:8545 --private-key $PRIVATE_KEY --broadcast\n")),(0,a.kt)("p",null,"Set the contract address in the output as the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTRACT_ADDRESS")," variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<new-contract-address>\n")),(0,a.kt)("p",null,"Once the contract has been deployed to the Ethermint rollup, we can\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"cast send")," to test sending transactions to it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS \\\n"createPost(string,string)" "my first post" "12345" \\\n--rpc-url http://localhost:8545 --private-key $PRIVATE_KEY\n')),(0,a.kt)("p",null,"We can then perform read operations with ",(0,a.kt)("inlineCode",{parentName:"p"},"cast call"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "fetchPosts()" --rpc-url http://localhost:8545\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: you will want to redeploy the contract for your frontend, because\nthe post is not uploaded to IPFS in the CLI.")),(0,a.kt)("h3",{id:"building-the-frontend"},"Building the frontend"),(0,a.kt)("p",null,"For the frontend project, we\u2019ll be using the following libraries and frameworks:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org"},"React")," - JavaScript library for building user interfaces"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev"},"Vite")," - Project generator / rapid development tool for\nmodern web projects"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.rainbowkit.com"},"Rainbowkit")," - Easy and beautifl library to connect\na wallets"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/wagmi-dev/wagmi"},"WAGMI")," - 20+ hooks for working with\nwallets, ENS, contracts, transactions, signing, etc"),(0,a.kt)("p",null,"In the root of the Foundry project, create a new React.js application using ",(0,a.kt)("a",{parentName:"p",href:"https://vitejs.dev"},"Vite"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"yarn create vite\n\n? Project name: \u203a frontend\n? Select a framework \u203a React\n? Select a variant > JavaScript\n")),(0,a.kt)("p",null,"Next, copy the ABI that was created by Foundry into the ",(0,a.kt)("inlineCode",{parentName:"p"},"frontend")," directory so\nthat we can have it later (or manually copy it into a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"Blog.json")," in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"frontend")," directory):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp out/Contract.sol/Blog.json frontend/\n")),(0,a.kt)("p",null,"Now, change into the ",(0,a.kt)("inlineCode",{parentName:"p"},"frontend")," directory and install the ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd frontend\nyarn\n")),(0,a.kt)("h4",{id:"configuring-environment-variables"},"Configuring environment variables"),(0,a.kt)("p",null,"Next we need to configure the environment variables for the Infura project ID\nand secret."),(0,a.kt)("p",null,"First, create an Infura account and new project for IPFS."),(0,a.kt)("p",null,"Create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"frontend/")," directory and add the following\nconfiguration with your own credentials:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-env",metastring:'title="frontend/.env.local"',title:'"frontend/.env.local"'},"VITE_INFURA_ID=your-project-api-key\nVITE_INFURA_SECRET=your-project-api-key-secret\n")),(0,a.kt)("p",null,"Now that the project is created, let\u2019s install the additional dependencies using\neither ",(0,a.kt)("strong",{parentName:"p"},"NPM"),", ",(0,a.kt)("strong",{parentName:"p"},"Yarn"),", or ",(0,a.kt)("strong",{parentName:"p"},"PNPM"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"npm install @rainbow-me/rainbowkit@0.8.0 wagmi@0.8.10 ethers ipfs-http-client react-markdown\n")),(0,a.kt)("h3",{id:"configuring-the-entrypoint"},"Configuring the entrypoint"),(0,a.kt)("p",null,"Next we\u2019ll update the entrypoint at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main.jsx"),"."),(0,a.kt)("p",null,"The main things we\u2019re doing here have to do with the configuration of Rainbowkit\nso that we can have a nice way for the user to connect their wallet."),(0,a.kt)("p",null,"Rainbowkit also allows a customizable array of network providers, so we\u2019re\ncreating a new network configuration for ",(0,a.kt)("inlineCode",{parentName:"p"},"Ethermint"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="frontend/src/main.jsx"',title:'"frontend/src/main.jsx"'},"import \"./polyfills\";\nimport ReactDOM from 'react-dom/client'\nimport App from './App'\nimport './index.css'\nimport '@rainbow-me/rainbowkit/styles.css';\nimport { RainbowKitProvider } from '@rainbow-me/rainbowkit';\nimport {\n  chain,\n  configureChains,\n  createClient,\n  WagmiConfig,\n} from 'wagmi';\nimport { publicProvider } from 'wagmi/providers/public';\nimport { injectedWallet, metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';\nimport { connectorsForWallets } from '@rainbow-me/rainbowkit';\n\n/* create configuration for Ethermint testnet */\nconst ethermint = {\n  id: 9000,\n  name: 'Ethermint',\n  network: 'ethermint',\n  nativeCurrency: {\n    decimals: 18,\n    name: 'Ethermint',\n    symbol: 'CTE',\n  },\n  rpcUrls: {\n    default: {\n      http: ['http://localhost:8545/'],\n    },\n  },\n  testnet: true,\n};\n\n// remove chain.localhost or ethermint depending on which you want to connect to\nconst { chains, provider } = configureChains( \n  [chain.localhost, ethermint],\n  [publicProvider()]\n);\n\nconst connectors = connectorsForWallets([\n  {\n    groupName: 'Recommended',\n    wallets: [\n      metaMaskWallet({ chains }),\n      injectedWallet({ chains }),\n    ],\n  },\n]);\n\nconst wagmiClient = createClient({\n  autoConnect: true,\n  connectors,\n  provider\n})\n\nconst containerStyle = {\n  width: '900px',\n  margin: '0 auto'\n}\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <WagmiConfig client={wagmiClient}>\n    <RainbowKitProvider chains={chains}>\n      <div style={containerStyle}>\n        <App />\n      </div>\n    </RainbowKitProvider>\n  </WagmiConfig>\n)\n")),(0,a.kt)("h3",{id:"creating-and-reading-posts"},"Creating and reading posts"),(0,a.kt)("p",null,"Now that the the base configuration is set up we\u2019ll create a view that allows\nusers to create and view posts."),(0,a.kt)("p",null,"We\u2019ll be using IPFS to upload the content of the post, then anchoring the hash\nof the post on chain. When we retrieve the post, we can then read the value from\nIPFS to view the post."),(0,a.kt)("p",null,"Update App.jsx with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="frontend/src/App.jsx"',title:'"frontend/src/App.jsx"'},"import { useState, useEffect } from 'react'\nimport { ConnectButton } from '@rainbow-me/rainbowkit';\nimport { ethers } from 'ethers'\nimport { create } from 'ipfs-http-client'\nimport { Buffer } from 'buffer'\nimport Blog from '../Blog.json'\nimport { useAccount } from \"wagmi\";\n\n/* configure authorization for Infura and IPFS */\nconst auth =\n    'Basic ' + Buffer.from(import.meta.env.VITE_INFURA_ID + ':' + import.meta.env.VITE_INFURA_SECRET).toString('base64');\n    \n/* create an IPFS client */\nconst client = create({\n  host: 'ipfs.infura.io',\n  port: 5001,\n  protocol: 'https',\n  headers: {\n      authorization: auth,\n  },\n});\n\nconst contractAddress = \"your-ethermint-contract-address\"\n\nfunction App() {\n  useEffect(() => {\n    fetchPosts()\n  }, [])\n  const [viewState, setViewState] = useState('view-posts')\n  const [posts, setPosts] = useState([])\n  const [title, setTitle] = useState('')\n  const [content, setContent] = useState('')\n  const { address } = useAccount();\n\n  /* when the component loads, useEffect will call this function */\n  async function fetchPosts() {\n    const provider = new ethers.providers.Web3Provider(window.ethereum)\n    const contract = new ethers.Contract(contractAddress, Blog.abi, provider)\n    let data = await contract.fetchPosts()\n    /* once the data is returned from the network we map over it and */\n    /* transform the data into a more readable format  */\n    data = data.map(d => ({\n      content: d['content'],\n      title: d['title'],\n      published: d['published'],\n      id: d['id'].toString(),\n    }))\n\n    /* we then fetch the post content from IPFS and add it to the post objects */\n    data = await Promise.all(data.map(async d => {\n      const endpoint = `https://infura-ipfs.io/ipfs/${d.content}`\n      const options = {\n        mode: 'no-cors',\n      }\n      const response = await fetch(endpoint, options)\n      const value = await response.text()\n      d.postContent = value\n      return d\n    }))\n\n    setPosts(data)\n  }\n\n  async function createPost() {\n    const added = await client.add(content)\n    const provider = new ethers.providers.Web3Provider(window.ethereum)\n    const signer = provider.getSigner()\n\n    const contract = new ethers.Contract(contractAddress, Blog.abi, signer)\n    const tx = await contract.createPost(title, added.path)\n    await tx.wait()\n    setViewState('view-posts')\n  }\n\n  function toggleView(value) {\n    setViewState(value)\n    if (value === 'view-posts') {\n      fetchPosts()\n    }\n  }\n  \n  return (\n    <div style={outerContainerStyle}>\n      <div style={innerContainerStyle}>\n      <h1>Modular Rollup Blog</h1>\n      <p>This allows users to securely create and share blog posts on the blockchain without the need for a centralized server or authority.</p>\n      {!address ? (<div>\n        <h3>Getting Started</h3>\n      <p>First, you will need to connect your Ethereum wallet to Ethermint to display the posts from the smart contract and make posts.</p>\n      </div> ) : null}\n      <br />\n      <h3 style={{ justifyContent: 'right', textAlign: 'right'}}>Connect your Ethereum wallet to begin \u2728</h3>\n      <div style={buttonContainerStyle}>\n      <ConnectButton />\n      </div>\n      {address ? (\n      <div style={buttonContainerStyle}>\n        <button onClick={() => toggleView('view-posts')} style={buttonStyle}>View Posts</button>\n        <button  onClick={() => toggleView('create-post')} style={buttonStyle}>Create Post</button>\n      </div>\n      ) : null}\n      {\n        viewState === 'view-posts' && address && (\n          <div>\n            <div style={postContainerStyle}>\n            <h1>Posts</h1>\n            {\n              posts.map((post, index) => (\n                <div key={index}>\n                  <h2>{post.title}</h2>\n                  <button style={{ fontSize: '16px' }} onClick={() => window.open(`https://infura-ipfs.io/ipfs/${post.content}`)}>Read on IPFS</button>\n                  {/* <ReactMarkdown>\n                    {post.postContent}\n                  </ReactMarkdown> */}\n                  <p style={mbidStyle}>GMID: {post.id}</p>\n                </div>\n              ))\n            }\n          </div>\n          </div>\n        )\n      }\n      {\n        viewState === 'create-post' && (\n          <div style={formContainerStyle}>\n              <h2>Create Post</h2>\n              <input\n                placeholder='Title'\n                onChange={e => setTitle(e.target.value)}\n                style={inputStyle}\n              />\n              <textarea\n                placeholder='Content'\n                onChange={e => setContent(e.target.value)}\n                style={inputStyle}\n              />\n              <button onClick={createPost}>Create Post</button>\n          </div>\n        )\n      }\n      </div>\n    </div>\n  )\n}\n\nconst outerContainerStyle = {\n  width: '90vw',\n  height: '100vh',\n  padding: '50px 0px',\n}\n\nconst innerContainerStyle = {\n  width: '100%',\n  maxWidth: '800px',\n  margin: '0 auto',\n}\n\nconst formContainerStyle = {\n  display: 'flex',\n  flexDirection: 'column',\n  alignItems: 'center'\n}\n\nconst inputStyle = {\n  width: '400px',\n  marginBottom: '10px',\n  padding: '10px',\n  height: '40px',\n}\n\nconst postContainerStyle = {\n  margin: '0 auto',\n  padding: '1em',\n  width: '90%',\n  maxWidth: '800px',\n  display: 'flex',\n  flexDirection: 'column',\n  alignItems: 'start',\n  justifyContent: 'center',\n}\n\nconst mbidStyle = {\n  fontSize: '10px',\n  textAlign: 'start',\n}\n\nconst buttonStyle = {\n  marginTop: 15,\n  marginRight: 5,\n  border: '1px solid rgba(255, 255, 255, .2)'\n}\n\nconst buttonContainerStyle = {\n  marginTop: 15,\n  marginRight: 5,\n  display: 'flex',\n  justifyContent: 'right',\n}\n\nexport default App\n")),(0,a.kt)("h3",{id:"adding-ethermint-chain-to-metamask"},"Adding Ethermint Chain to MetaMask"),(0,a.kt)("p",null,"Before we can test out our dapp, we'll need to configure\nthe chains on MetaMask if we're deploying our rollup any"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Open your MetaMask wallet and click "Ethereum Mainnet" to open the dropdown.'),(0,a.kt)("li",{parentName:"ol"},'Select "Add network"'),(0,a.kt)("li",{parentName:"ol"},'Then "Add network manually"'),(0,a.kt)("li",{parentName:"ol"},"Enter the following details:")),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"Network Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"Ethermint")),(0,a.kt)("li",{parentName:"ul"},"New RPC URL: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8545")," ",(0,a.kt)("strong",{parentName:"li"},"or")," ",(0,a.kt)("inlineCode",{parentName:"li"},"https://your.custom.ip.address:port")),(0,a.kt)("li",{parentName:"ul"},"Chain ID: ",(0,a.kt)("inlineCode",{parentName:"li"},"9000")),(0,a.kt)("li",{parentName:"ul"},"Currency symbol: ",(0,a.kt)("inlineCode",{parentName:"li"},"CTE")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"add-metamask.gif",src:n(2449).Z,width:"3208",height:"1866"})),(0,a.kt)("h3",{id:"testing-it-out-on-ethermint"},"Testing it out on Ethermint"),(0,a.kt)("p",null,"Now we\u2019re ready to run the app."),(0,a.kt)("p",null,"Right now, the app is configured to be using ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8545")," using the\nEthermint rollup we're running with Rollkit."),(0,a.kt)("p",null,"First, you'll need to install ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io"},"MetaMask"),"."),(0,a.kt)("p",null,"To use the test account, you will need to import the private key from Ethermint\nto MetaMask. First, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE_KEY=$(ethermintd keys unsafe-export-eth-key mykey --keyring-backend test)\n&& echo $PRIVATE_KEY | pbcopy\n")),(0,a.kt)("p",null,"Now, ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-account#h_01G01W07NV7Q94M7P1EBD5BYM4"},"import the private key to MetaMask"),"\nand switch to that account."),(0,a.kt)("p",null,"Next, let\u2019s run it on your Ethermint rollup."),(0,a.kt)("p",null,"To do so, first update the ",(0,a.kt)("inlineCode",{parentName:"p"},"contractAddress")," variable with the contract address\ndeployed to Ethermint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'/* src/App.jsx */\nconst contractAddress = "your-ethermint-contract-address"\n')),(0,a.kt)("p",null,"Next, run the React application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,a.kt)("p",null,"When you run the app, you should now be connected to and using the Ethermint rollup."),(0,a.kt)("p",null,"If you imported the address that started the chain, you'll see quite a large\nbalance."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connect-to-ethermint.gif",src:n(4302).Z,width:"2944",height:"1838"})),(0,a.kt)("h3",{id:"now-give-it-a-spin-"},"Now give it a spin \ud83c\udf00"),(0,a.kt)("p",null,"Now that you have your dapp running, go ahead and test out a new post\non your Ethermint sovereign rollup. If you enjoyed this tutorial, be\nsure to share your example in our\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/je7UVpDuDu"},"Discord"),"!"))}u.isMDXComponent=!0},2449:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/add-metamask-4422ec98f02b36d3faea64cb152be92c.gif"},4302:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/connect-to-ethermint-33bb6cffe538f7d095411aff6845171d.gif"}}]);