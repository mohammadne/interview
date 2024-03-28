"use strict";(self.webpackChunkinterview=self.webpackChunkinterview||[]).push([[822],{4445:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=i(4848),l=i(8453);const r={},t="Database",a={id:"database",title:"Database",description:"- Sharding and Clustering",source:"@site/docs/database.md",sourceDirName:".",slug:"/database",permalink:"/interview/docs/database",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Automation",permalink:"/interview/docs/automation"},next:{title:"Docker",permalink:"/interview/docs/docker"}},d={},c=[{value:"SQL",id:"sql",level:2},{value:"Redis",id:"redis",level:2},{value:"ETCD",id:"etcd",level:2},{value:"Ceph",id:"ceph",level:2},{value:"Cassandra",id:"cassandra",level:2}];function o(n){const e={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"database",children:"Database"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Sharding and Clustering"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"sql",children:"SQL"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://www.databricks.com/glossary/acid-transactions",children:"ACID in transactions"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://fauna.com/blog/database-transaction",children:"Database Transaction"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://planetscale.com/blog/mysql-isolation-levels-and-how-they-work",children:"isolation level (I in ACID)"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"In master-slave architecture for sql databases how we ensure consistency if one of the slaves failed and the recent data can't be updated there?"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Asynchronous Replication with Monitoring"}),"\n",(0,s.jsx)(e.li,{children:"Quorum-Based Replication"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"SQL vs NoSQL"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"normalization vs denormalization"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"type of indexes -> hash-index, bplus-tree"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"transaction workflow in MongoDB"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"joins"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"PK vs FK"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"cardinality"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"denormalization"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Indexing"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"How select best database (CAP)"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"DB solutions for event store?"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Mysql vs MariaDB vs Postgresql?"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"redis",children:"Redis"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"redis sentinal vs cluster"}),"\n",(0,s.jsx)(e.li,{children:"distributed locking in redis"}),"\n",(0,s.jsx)(e.li,{children:"version 6 benefits"}),"\n",(0,s.jsx)(e.li,{children:"What is thread-io"}),"\n",(0,s.jsx)(e.li,{children:"pub/sub, other data structure"}),"\n",(0,s.jsx)(e.li,{children:"type of deployment or make it HA"}),"\n",(0,s.jsx)(e.li,{children:"how TTL is implemented? is it configurable?"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"etcd",children:"ETCD"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://raft.github.io/",children:"RAFT algorithm"})}),"\n",(0,s.jsx)(e.li,{children:"leader election"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"ceph",children:"Ceph"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"paxos algorithm"}),"\n",(0,s.jsx)(e.li,{children:"RBD"}),"\n",(0,s.jsx)(e.li,{children:"RADOSGW"}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"cassandra",children:"Cassandra"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"ring design"}),"\n",(0,s.jsx)(e.li,{children:"replication factor?"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>t,x:()=>a});var s=i(6540);const l={},r=s.createContext(l);function t(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);