import{s as k,a as I,b as S}from"./index-DOWd_jCY.js";import{s as L,a as P}from"./index-5vIUcVV4.js";import{D as y,o as g,d as b,v as p,x as a,Y as F,E as c,a0 as h,a1 as E,c as _,b as V,t as q,F as H,z as N,a2 as U,$ as j,H as x}from"./index-D4mTkDQv.js";import{s as z}from"./index-CtQdOTww.js";import{s as M}from"./index-C7rt1Uxd.js";import{G as O}from"./GroupLink-aRF4CLIO.js";import{_ as T}from"./SpecialtyLink.vue_vue_type_script_setup_true_lang-Bb70rHuQ.js";import{V as Y}from"./Variant-Cxq8psV2.js";import{g as A}from"./specialty-DC0QFF6X.js";import"./index-Dp8pu7ri.js";import"./index-DSSuZ8ZU.js";import"./AnyLink-CwkD27St.js";const J=y({__name:"GroupItem",props:{group:{type:Object,required:!0}},setup(s){return(d,l)=>{const o=L;return g(),b(o,null,{title:p(()=>[a(O,{"group-i-d":s.group.uuid,"group-name":s.group.name},null,8,["group-i-d","group-name"])]),footer:p(()=>[a(T,{"specialty-i-d":s.group.specialty.uuid,"specialty-name":s.group.specialty.name,variant:F(Y).H3},null,8,["specialty-i-d","specialty-name","variant"])]),_:1})}}}),K=y({__name:"SpecialtySelector",props:{modelValue:{type:String,required:!1}},emits:["update:modelValue"],setup(s,{emit:d}){const l=d,o=c(!1),m=e=>{l("update:modelValue",e)},n=c([]),u=c(""),v=async()=>{o.value=!0;const e=await A({name:u.value});n.value=e.data.results,o.value=!1};return h(v),(e,t)=>{const f=k;return g(),b(f,{value:s.modelValue,onInput:t[0]||(t[0]=i=>e.$emit("update:modelValue",i.target.value)),options:n.value,optionLabel:i=>i.name,onChange:m,placeholder:e.$t("specialty.filterBy.entity"),filter:"",onFilter:t[1]||(t[1]=i=>{u.value=i.value,v()}),loading:o.value,showClear:!0},null,8,["value","options","optionLabel","placeholder","loading"])}}}),Q={class:"contained-wrapper"},R={class:"filter-panel"},ie=y({__name:"GroupListView",setup(s){const d=c(0),l=c(1),o=c(!1),m=c({count:0,next:null,previous:null,results:[]}),n=E({name:void 0,specialty:void 0}),u=async()=>{o.value=!0;try{const e=await U({page:l.value,...n});m.value=e.data,d.value=l.value*10-10}catch(e){if(l.value!=1)return l.value=1,console.debug("Error loading page, retrying with page 1"),u();throw e}o.value=!1};return h(async()=>{await u()}),(e,t)=>{const f=j,i=M,$=z,w=x,D=P,B=I,C=S;return g(),_("main",Q,[a(f,{header:e.$t("groups.title")},{default:p(()=>[V("p",null,q(e.$t("groups.description")),1)]),_:1},8,["header"]),a(f,{header:e.$t("labels.filters"),toggleable:"",collapsed:!0},{default:p(()=>[V("div",R,[a($,null,{default:p(()=>[a(i,{placeholder:e.$t("groups.filterBy.name"),modelValue:n.name,"onUpdate:modelValue":t[0]||(t[0]=r=>n.name=r)},null,8,["placeholder","modelValue"])]),_:1}),a($,null,{default:p(()=>[a(K,{"onUpdate:modelValue":t[1]||(t[1]=r=>{if(r.value===null){n.specialty=void 0;return}n.specialty=r.value.uuid})})]),_:1}),a(w,{label:e.$t("labels.applyFilters"),onClick:u,disabled:o.value},null,8,["label","disabled"])])]),_:1},8,["header"]),a(B,{"data-key":"uuid",value:m.value.results,rows:10},{list:p(r=>[(g(!0),_(H,null,N(r.items,G=>(g(),_("div",null,[a(J,{group:G},null,8,["group"]),a(D)]))),256))]),_:1},8,["value"]),a(C,{"total-records":m.value.count,rows:10,onPage:t[2]||(t[2]=r=>{l.value=r.page+1,u()}),first:d.value},null,8,["total-records","first"])])}}});export{ie as default};
