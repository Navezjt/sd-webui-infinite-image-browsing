import{u as w,b,F as y,g as k}from"./FileItem-48c80f0a.js";import{d as h,k as x,c1 as D,$ as F,b2 as I,b6 as C,o as E,y as V,c as r,n as z,r as e,L as S,cb as B,X as R}from"./index-7af0768f.js";import"./shortcut-a76ce587.js";const $=h({__name:"gridView",props:{tabIdx:{},paneIdx:{},id:{},removable:{type:Boolean},allowDragAndDrop:{type:Boolean},files:{},paneKey:{}},setup(p){const o=p,d=x(),{stackViewEl:m}=w().toRefs(),{itemSize:i,gridItems:u,cellWidth:g}=b(),f=D(),a=F(o.files??[]),_=async s=>{const l=B(s);o.allowDragAndDrop&&l&&a.value.push(...l.nodes)},v=s=>{a.value.splice(s,1)};return I(()=>{d.pageFuncExportMap.set(o.paneKey,{getFiles:()=>C(a.value),setFiles:s=>a.value=s})}),(s,l)=>(E(),V("div",{class:"container",ref_key:"stackViewEl",ref:m,onDrop:_},[r(e(k),{ref:"scroller",class:"file-list",items:a.value.slice(),"item-size":e(i).first,"key-field":"fullpath","item-secondary-size":e(i).second,gridItems:e(u)},{default:z(({item:t,index:c})=>{var n;return[r(y,{idx:c,file:t,"cell-width":e(g),"enable-close-icon":o.removable,onCloseIconClick:A=>v(c),"full-screen-preview-image-url":e(S)(t),tags:(n=t==null?void 0:t.tags)==null?void 0:n.map(e(f).tagConvert),"enable-right-click-menu":!1},null,8,["idx","file","cell-width","enable-close-icon","onCloseIconClick","full-screen-preview-image-url","tags"])]}),_:1},8,["items","item-size","item-secondary-size","gridItems"])],544))}});const H=R($,[["__scopeId","data-v-d27b411c"]]);export{H as default};
