import{s as l}from"./index-DJTXnWog.js";import{D as m,V as d,E as s,a0 as _,a3 as f,o as t,c as h,d as n,f as k,ay as g}from"./index-49wk4mmK.js";import{g as v}from"./schedule-BnklUYw0.js";import{_ as w,a as S}from"./WeekScheduleDataView.vue_vue_type_script_setup_true_lang-z63roiOc.js";import"./datetime-C6SBiSiX.js";import"./SpecialtyLink.vue_vue_type_script_setup_true_lang-YZA3U-sg.js";import"./GroupLink-DzAS92ua.js";import"./AnyLink-p20-Kenm.js";import"./index-IRyQn90_.js";import"./index-CNEhaxCU.js";import"./index-Cho9b22A.js";import"./index-9V1q2Vcv.js";import"./index-BH9xpBtv.js";import"./CombinedScheduleItem-CwZoX8tx.js";const y={class:"contained-wrapper"},U=m({__name:"ProfileView",setup(E){const i=d(),p=g(),o=s(!0),r=s(null),a=s(null);return _(async()=>{if(!i.isGroupSet()){p.push("/");return}const e=i.getGroup();if(!e){p.push("/");return}o.value=!0;const c=await f({uuid:e.uuid});r.value=c.data;const u=await v({group:e.uuid});a.value=u.data,o.value=!1}),(e,c)=>{const u=l;return t(),h("main",y,[r.value?(t(),n(w,{key:0,groupEntity:r.value},null,8,["groupEntity"])):(t(),n(u,{key:1,width:"100%",height:"50vh"})),!o.value&&a.value!=null?(t(),n(S,{key:2,weekSchedule:a.value},null,8,["weekSchedule"])):k("",!0)])}}});export{U as default};