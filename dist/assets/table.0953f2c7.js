import{d as b,k as f,H as y,_ as C,r as d,o as l,c as k,b as z,w as h,x as i,G as p,f as S,t as _,I as v,J as w,K as n}from"./index.2364200c.js";const L=b({props:{data:{type:Array,default:()=>[]},select:{type:Array,default:()=>[]},showIndex:{type:Boolean,default:!1},showSelection:{type:Boolean,default:!1},showPage:{type:Boolean,default:!0},page:{type:Object,default:()=>({index:1,size:20,total:0})},pageLayout:{type:String,default:"total, sizes, prev, pager, next, jumper"},pageSizes:{type:Array,default:[10,20,50,100]}},setup(e,t){const r=f(null);let o=null;const g=a=>{o?e.page.index=1:(e.page.index=a,t.emit("getTableData"))},c=a=>{o="work",setTimeout(()=>{o=null},100),e.page.size=a,t.emit("getTableData",!0)},s=a=>{t.emit("selection-change",a)};return y(()=>{r.value.doLayout()}),{table:r,handleCurrentChange:g,handleSizeChange:c,handleSelectionChange:s}}}),T={class:"system-table-box"};function U(e,t,r,o,g,c){const s=d("el-table-column"),a=d("el-table"),m=d("el-pagination");return l(),k("div",T,[z(a,w(e.$attrs,{ref:"table",class:"system-table",border:"",height:"100%",data:e.data,onSelectionChange:e.handleSelectionChange}),{default:h(()=>[e.showSelection?(l(),i(s,{key:0,type:"selection",align:"center",width:"50"})):p("",!0),e.showIndex?(l(),i(s,{key:1,label:"\u5E8F\u53F7",width:"60",align:"center"},{default:h(u=>[S(_((e.page.index-1)*e.page.size+u.$index+1),1)]),_:1})):p("",!0),v(e.$slots,"default",{},void 0,!0)]),_:3},16,["data","onSelectionChange"]),e.showPage?(l(),i(m,{key:0,"current-page":e.page.index,"onUpdate:current-page":t[0]||(t[0]=u=>e.page.index=u),class:"system-page",background:"",layout:e.pageLayout,total:e.page.total,"page-size":e.page.size,"page-sizes":e.pageSizes,onCurrentChange:e.handleCurrentChange,onSizeChange:e.handleSizeChange},null,8,["current-page","layout","total","page-size","page-sizes","onCurrentChange","onSizeChange"])):p("",!0)])}var B=C(L,[["render",U],["__scopeId","data-v-2e065fc7"]]);function R(e){return n({url:"/table/list",method:"post",baseURL:"/mock",data:e})}function A(e){return n({url:"/table/category",method:"post",baseURL:"/mock",data:e})}function D(e){return n({url:"/table/tree",method:"post",baseURL:"/mock",data:e})}function I(e){return n({url:"/table/add",method:"post",baseURL:"/mock",data:e})}function N(e){return n({url:"/table/update",method:"post",baseURL:"/mock",data:e})}function P(e){return n({url:"/table/del",method:"post",baseURL:"/mock",data:e})}export{B as T,I as a,A as b,D as c,P as d,R as g,N as u};