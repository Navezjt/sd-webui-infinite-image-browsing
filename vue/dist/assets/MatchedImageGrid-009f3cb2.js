import{d as q,l as Q,bJ as J,az as W,o as r,y as _,c as s,n as a,r as e,s as h,p as y,t as X,v as b,x as j,m as M,L as H,C as u,N as S,Q as K,R as Y,X as Z}from"./index-7af0768f.js";import{L as ee,R as te,f as ie,S as le}from"./fullScreenContextMenu-fc7f1e89.js";import{g as se,F as ne}from"./FileItem-48c80f0a.js";import{u as ae}from"./hook-ded05678.js";import"./shortcut-a76ce587.js";const oe={class:"hint"},re={key:1,class:"preview-switch"},de=q({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(T){const m=T,{queue:p,images:i,onContextMenuClickU:g,stackViewEl:V,previewIdx:n,previewing:v,onPreviewVisibleChange:z,previewImgMove:f,canPreview:w,itemSize:I,gridItems:D,showGenInfo:o,imageGenInfo:k,q:F,multiSelectedIdxs:$,onFileItemClick:B,scroller:x,showMenuIdx:d,onFileDragStart:G,onFileDragEnd:N,cellWidth:R,onScroll:A,updateImageTag:E}=ae();return Q(()=>m.selectedTagIds,async()=>{const{res:c}=p.pushAction(()=>J(m.selectedTagIds));i.value=await c,await W(),E(),x.value.scrollToItem(0)},{immediate:!0}),(c,t)=>{const P=K,U=Y,L=le;return r(),_("div",{class:"container",ref_key:"stackViewEl",ref:V},[s(L,{size:"large",spinning:!e(p).isIdle},{default:a(()=>[s(U,{visible:e(o),"onUpdate:visible":t[1]||(t[1]=l=>h(o)?o.value=l:null),width:"70vw","mask-closable":"",onOk:t[2]||(t[2]=l=>o.value=!1)},{cancelText:a(()=>[]),default:a(()=>[s(P,{active:"",loading:!e(F).isIdle},{default:a(()=>[y("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:t[0]||(t[0]=l=>e(X)(e(k)))},[y("div",oe,b(c.$t("doubleClickToCopy")),1),j(" "+b(e(k)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(i)?(r(),M(e(se),{key:0,ref_key:"scroller",ref:x,class:"file-list",items:e(i),"item-size":e(I).first,"key-field":"fullpath","item-secondary-size":e(I).second,gridItems:e(D),onScroll:e(A)},{default:a(({item:l,index:C})=>[s(ne,{idx:C,file:l,"cell-width":e(R),"show-menu-idx":e(d),"onUpdate:showMenuIdx":t[3]||(t[3]=O=>h(d)?d.value=O:null),onDragstart:e(G),onDragend:e(N),onFileItemClick:e(B),"full-screen-preview-image-url":e(i)[e(n)]?e(H)(e(i)[e(n)]):"",selected:e($).includes(C),onContextMenuClick:e(g),onPreviewVisibleChange:e(z)},null,8,["idx","file","cell-width","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):u("",!0),e(v)?(r(),_("div",re,[s(e(ee),{onClick:t[4]||(t[4]=l=>e(f)("prev")),class:S({disable:!e(w)("prev")})},null,8,["class"]),s(e(te),{onClick:t[5]||(t[5]=l=>e(f)("next")),class:S({disable:!e(w)("next")})},null,8,["class"])])):u("",!0)]),_:1},8,["spinning"]),e(v)&&e(i)&&e(i)[e(n)]?(r(),M(ie,{key:0,file:e(i)[e(n)],idx:e(n),onContextMenuClick:e(g)},null,8,["file","idx","onContextMenuClick"])):u("",!0)],512)}}});const ve=Z(de,[["__scopeId","data-v-d698e678"]]);export{ve as default};
