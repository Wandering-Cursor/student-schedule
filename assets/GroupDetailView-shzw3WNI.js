import{s as c}from"./index-iRe7_XGU.js";import{D as p,E as l,a0 as u,a3 as m,o as e,c as _,d as s,v as o,b as d,t as f,x as y,Y as v,a4 as h,$ as k}from"./index-D4mTkDQv.js";import{_ as g}from"./SpecialtyLink.vue_vue_type_script_setup_true_lang-Bb70rHuQ.js";import{V}from"./Variant-Cxq8psV2.js";import"./AnyLink-CwkD27St.js";const N=p({__name:"GroupDetailView",setup(w){const n=h().params.id,a=l();return u(async()=>{const t=await m({uuid:n});a.value=t.data}),(t,B)=>{const r=k,i=c;return e(),_("main",null,[a.value?(e(),s(r,{key:0},{header:o(()=>[d("h1",null,f(a.value.name),1)]),default:o(()=>[y(g,{"specialty-i-d":a.value.specialty.uuid,"specialty-name":a.value.specialty.name,variant:v(V).P},null,8,["specialty-i-d","specialty-name","variant"])]),_:1})):(e(),s(i,{key:1,width:"100%",height:"50vh"}))])}}});export{N as default};