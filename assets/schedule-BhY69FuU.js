import{ar as t}from"./index-CNgNu5iX.js";async function n(e){return await(await t.getClient()).schedule_list({date__lte:e.dateTo,date__gte:e.dateFrom,for_date:e.forDate,page:e.page})}async function c(e){return await(await t.getClient()).photo_schedule_retrieve({uuid:e.id})}async function o(e){return await(await t.getClient()).group_schedule_retrieve({uuid:e.id})}export{c as a,o as b,n as g};
