import{S as t}from"./index-49wk4mmK.js";import{g as n}from"./datetime-C6SBiSiX.js";async function o(e){return await(await t.getClient()).schedule_schedule_list({date__lte:n(e.dateTo),date__gte:n(e.dateFrom),for_date:n(e.forDate),page:e.page})}async function u(e){return await(await t.getClient()).schedule_photo_retrieve({uuid:e.id})}async function l(e){return await(await t.getClient()).schedule_group_retrieve({uuid:e.id})}async function r(e){return await(await t.getClient()).schedule_week_group_list(e)}export{o as a,u as b,l as c,r as g};