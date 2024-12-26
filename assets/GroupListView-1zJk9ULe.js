import{s as S,a as C,b as D}from"./index-CSv1uCaf.js";import{s as L,a as P}from"./index-wEU3o806.js";import{B as F,o as m,c as b,r as j,m as q,s as E,d as h,a as y,w as d,b as o,u as N,e as c,f as $,g as U,h as _,t as z,F as A,i as H,j as M,k as O,l as T,_ as J}from"./index-CItw4miD.js";import{s as K}from"./index-C2oE9Ibb.js";import{G as Q}from"./GroupLink-C6vTCao7.js";import{_ as R}from"./SpecialtyLink.vue_vue_type_script_setup_true_lang-wStaYpwz.js";import{V as W}from"./Variant-Cxq8psV2.js";import{g as X}from"./specialty-B8xzeVdE.js";import"./index-DLCBiqOO.js";var Y=function(u){var n=u.dt;return`
.p-inputgroup,
.p-inputgroup .p-iconfield,
.p-inputgroup .p-floatlabel,
.p-inputgroup .p-iftalabel {
    display: flex;
    align-items: stretch;
    width: 100%;
}

.p-inputgroup .p-inputtext,
.p-inputgroup .p-inputwrapper {
    flex: 1 1 auto;
    width: 1%;
}

.p-inputgroupaddon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `.concat(n("inputgroup.addon.padding"),`;
    background: `).concat(n("inputgroup.addon.background"),`;
    color: `).concat(n("inputgroup.addon.color"),`;
    border-block-start: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    border-block-end: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
    min-width: `).concat(n("inputgroup.addon.min.width"),`;
}

.p-inputgroupaddon:first-child,
.p-inputgroupaddon + .p-inputgroupaddon {
    border-inline-start: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:last-child {
    border-inline-end: 1px solid `).concat(n("inputgroup.addon.border.color"),`;
}

.p-inputgroupaddon:has(.p-button) {
    padding: 0;
    overflow: hidden;
}

.p-inputgroupaddon .p-button {
    border-radius: 0;
}

.p-inputgroup > .p-component,
.p-inputgroup > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iconfield > .p-component,
.p-inputgroup > .p-floatlabel > .p-component,
.p-inputgroup > .p-floatlabel > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel > .p-component,
.p-inputgroup > .p-iftalabel > .p-inputwrapper > .p-component {
    border-radius: 0;
    margin: 0;
}

.p-inputgroupaddon:first-child,
.p-inputgroup > .p-component:first-child,
.p-inputgroup > .p-inputwrapper:first-child > .p-component,
.p-inputgroup > .p-iconfield:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-component,
.p-inputgroup > .p-floatlabel:first-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-component,
.p-inputgroup > .p-iftalabel:first-child > .p-inputwrapper > .p-component {
    border-start-start-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-end-start-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroupaddon:last-child,
.p-inputgroup > .p-component:last-child,
.p-inputgroup > .p-inputwrapper:last-child > .p-component,
.p-inputgroup > .p-iconfield:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-component,
.p-inputgroup > .p-floatlabel:last-child > .p-inputwrapper > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-component,
.p-inputgroup > .p-iftalabel:last-child > .p-inputwrapper > .p-component {
    border-start-end-radius: `).concat(n("inputgroup.addon.border.radius"),`;
    border-end-end-radius: `).concat(n("inputgroup.addon.border.radius"),`;
}

.p-inputgroup .p-component:focus,
.p-inputgroup .p-component.p-focus,
.p-inputgroup .p-inputwrapper-focus,
.p-inputgroup .p-component:focus ~ label,
.p-inputgroup .p-component.p-focus ~ label,
.p-inputgroup .p-inputwrapper-focus ~ label {
    z-index: 1;
}

.p-inputgroup > .p-button:not(.p-button-icon-only) {
    width: auto;
}

.p-inputgroup .p-iconfield + .p-iconfield .p-inputtext {
    border-inline-start: 0;
}
`)},Z={root:"p-inputgroup"},nn=F.extend({name:"inputgroup",theme:Y,classes:Z}),pn={name:"BaseInputGroup",extends:E,style:nn,provide:function(){return{$pcInputGroup:this,$parentInstance:this}}},V={name:"InputGroup",extends:pn,inheritAttrs:!1};function tn(t,u,n,a,g,r){return m(),b("div",q({class:t.cx("root")},t.ptmi("root")),[j(t.$slots,"default")],16)}V.render=tn;const on=h({__name:"GroupItem",props:{group:{type:Object,required:!0}},setup(t){return(u,n)=>{const a=L;return m(),y(a,null,{title:d(()=>[o(Q,{"group-i-d":t.group.uuid,"group-name":t.group.name},null,8,["group-i-d","group-name"])]),footer:d(()=>[o(R,{"specialty-i-d":t.group.specialty.uuid,"specialty-name":t.group.specialty.name,variant:N(W).H3},null,8,["specialty-i-d","specialty-name","variant"])]),_:1})}}}),en=h({__name:"SpecialtySelector",props:{modelValue:{type:String,required:!1}},emits:["update:modelValue"],setup(t,{emit:u}){const n=u,a=c(!1),g=p=>{n("update:modelValue",p)},r=c([]),l=c(""),v=async()=>{a.value=!0;let p=await X({name:l.value});r.value=p.data.results,a.value=!1};return $(v),(p,e)=>{const f=S;return m(),y(f,{value:t.modelValue,onInput:e[0]||(e[0]=s=>p.$emit("update:modelValue",s.target.value)),options:r.value,optionLabel:s=>s.name,onChange:g,placeholder:p.$t("specialty.filterBy.entity"),filter:"",onFilter:e[1]||(e[1]=s=>{l.value=s.value,v()}),loading:a.value,showClear:!0},null,8,["value","options","optionLabel","placeholder","loading"])}}}),an={class:"contained-wrapper"},rn={class:"filter-panel"},un=h({__name:"GroupListView",setup(t){const u=c(0),n=c(1),a=c(!1),g=c({count:0,next:null,previous:null,results:[]}),r=U({name:void 0,specialty:void 0}),l=async()=>{a.value=!0;try{let p=await M({page:n.value,...r});g.value=p.data,u.value=n.value*10-10}catch(p){if(n.value!=1)return n.value=1,console.debug("Error loading page, retrying with page 1"),l();throw p}a.value=!1};return $(async()=>{await l()}),(p,e)=>{const f=O,s=K,w=V,x=T,G=P,I=C,k=D;return m(),b("main",an,[o(f,{header:p.$t("groups.title")},{default:d(()=>[_("p",null,z(p.$t("groups.description")),1)]),_:1},8,["header"]),o(f,{header:p.$t("labels.filters"),toggleable:"",collapsed:!0},{default:d(()=>[_("div",rn,[o(w,null,{default:d(()=>[o(s,{placeholder:p.$t("groups.filterBy.name"),modelValue:r.name,"onUpdate:modelValue":e[0]||(e[0]=i=>r.name=i)},null,8,["placeholder","modelValue"])]),_:1}),o(w,null,{default:d(()=>[o(en,{"onUpdate:modelValue":e[1]||(e[1]=i=>{if(i.value===null){r.specialty=void 0;return}r.specialty=i.value.uuid})})]),_:1}),o(x,{label:p.$t("labels.applyFilters"),onClick:l,disabled:a.value},null,8,["label","disabled"])])]),_:1},8,["header"]),o(I,{"data-key":"uuid",value:g.value.results,rows:10},{list:d(i=>[(m(!0),b(A,null,H(i.items,B=>(m(),b("div",null,[o(on,{group:B},null,8,["group"]),o(G)]))),256))]),_:1},8,["value"]),o(k,{"total-records":g.value.count,rows:10,onPage:e[2]||(e[2]=i=>{n.value=i.page+1,l()}),first:u.value},null,8,["total-records","first"])])}}}),hn=J(un,[["__scopeId","data-v-34e8aea8"]]);export{hn as default};
