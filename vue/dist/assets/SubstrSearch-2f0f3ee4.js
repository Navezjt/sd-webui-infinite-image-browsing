import{d as Y,$ as V,aw as Z,bQ as ee,bP as F,o as l,y as k,c as o,r as e,bT as te,m,n as r,x as w,v,C as f,s as U,p as A,t as ae,L as ne,N as E,ax as se,ar as ie,ai as le,U as oe,V as re,Q as de,R as ue,X as ce}from"./index-1537dba6.js";import{L as pe,R as me,f as ve,S as fe}from"./fullScreenContextMenu-bb0fc66b.js";/* empty css              */import{g as ge,F as ke}from"./FileItem-dbdcf20b.js";import{b as T,c as we,f as Ie,u as ye}from"./db-925e828e.js";import{c as xe,u as be}from"./hook-3618bdfa.js";import"./shortcut-ec395f0e.js";const Ce={key:0,class:"search-bar"},he={class:"hint"},_e={key:1,class:"preview-switch"},Se=Y({__name:"SubstrSearch",setup(Me){const c=V(""),I=xe(n=>Ie(c.value,n)),{queue:d,images:i,onContextMenuClickU:y,stackViewEl:R,previewIdx:u,previewing:x,onPreviewVisibleChange:N,previewImgMove:b,canPreview:C,itemSize:h,gridItems:P,showGenInfo:p,imageGenInfo:_,q:L,multiSelectedIdxs:q,onFileItemClick:G,scroller:S,showMenuIdx:g,onFileDragStart:K,onFileDragEnd:O,cellWidth:Q,onScroll:M}=be(I),a=V();Z(async()=>{a.value=await T(),a.value.img_count&&a.value.expired&&z()});const z=ee(()=>d.pushAction(async()=>(await ye(),a.value=await T(),a.value)).res),D=async()=>{await I.reset({refetch:!0}),await se(),M(),S.value.scrollToItem(0),i.value.length||ie.info(le("fuzzy-search-noResults"))};return F("returnToIIB",async()=>{const n=await d.pushAction(we).res;a.value.expired=n.expired}),F("searchIndexExpired",()=>a.value&&(a.value.expired=!0)),(n,t)=>{const H=oe,$=re,W=de,X=ue,j=fe;return l(),k("div",{class:"container",ref_key:"stackViewEl",ref:R},[a.value?(l(),k("div",Ce,[o(H,{value:c.value,"onUpdate:value":t[0]||(t[0]=s=>c.value=s),placeholder:n.$t("fuzzy-search-placeholder"),disabled:!e(d).isIdle,onKeydown:te(D,["enter"])},null,8,["value","placeholder","disabled","onKeydown"]),a.value.expired||!a.value.img_count?(l(),m($,{key:0,onClick:e(z),loading:!e(d).isIdle,type:"primary"},{default:r(()=>[w(v(a.value.img_count===0?n.$t("generateIndexHint"):n.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(l(),m($,{key:1,type:"primary",onClick:D,loading:!e(d).isIdle,disabled:!c.value},{default:r(()=>[w(v(n.$t("search")),1)]),_:1},8,["loading","disabled"]))])):f("",!0),o(j,{size:"large",spinning:!e(d).isIdle},{default:r(()=>[o(X,{visible:e(p),"onUpdate:visible":t[2]||(t[2]=s=>U(p)?p.value=s:null),width:"70vw","mask-closable":"",onOk:t[3]||(t[3]=s=>p.value=!1)},{cancelText:r(()=>[]),default:r(()=>[o(W,{active:"",loading:!e(L).isIdle},{default:r(()=>[A("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:t[1]||(t[1]=s=>e(ae)(e(_)))},[A("div",he,v(n.$t("doubleClickToCopy")),1),w(" "+v(e(_)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(i)?(l(),m(e(ge),{key:0,ref_key:"scroller",ref:S,class:"file-list",items:e(i),"item-size":e(h).first,"key-field":"fullpath","item-secondary-size":e(h).second,gridItems:e(P),onScroll:e(M)},{default:r(({item:s,index:B})=>[o(ke,{idx:B,file:s,"show-menu-idx":e(g),"onUpdate:showMenuIdx":t[4]||(t[4]=J=>U(g)?g.value=J:null),onFileItemClick:e(G),"full-screen-preview-image-url":e(i)[e(u)]?e(ne)(e(i)[e(u)]):"","cell-width":e(Q),selected:e(q).includes(B),onContextMenuClick:e(y),onDragstart:e(K),onDragend:e(O),onPreviewVisibleChange:e(N)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","cell-width","selected","onContextMenuClick","onDragstart","onDragend","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):f("",!0),e(x)?(l(),k("div",_e,[o(e(pe),{onClick:t[5]||(t[5]=s=>e(b)("prev")),class:E({disable:!e(C)("prev")})},null,8,["class"]),o(e(me),{onClick:t[6]||(t[6]=s=>e(b)("next")),class:E({disable:!e(C)("next")})},null,8,["class"])])):f("",!0)]),_:1},8,["spinning"]),e(x)&&e(i)&&e(i)[e(u)]?(l(),m(ve,{key:1,file:e(i)[e(u)],idx:e(u),onContextMenuClick:e(y)},null,8,["file","idx","onContextMenuClick"])):f("",!0)],512)}}});const Ae=ce(Se,[["__scopeId","data-v-d4ab92e4"]]);export{Ae as default};