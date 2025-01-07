import{B as d,o as t,c as o,d as p,m as r,e as u,f as i,y,b as f,t as m,s as v,D as b,F as k,z as h,x as w,ab as $,S as l}from"./index-D4mTkDQv.js";var z=function(e){var n=e.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(n("tag.primary.background"),`;
    color: `).concat(n("tag.primary.color"),`;
    font-size: `).concat(n("tag.font.size"),`;
    font-weight: `).concat(n("tag.font.weight"),`;
    padding: `).concat(n("tag.padding"),`;
    border-radius: `).concat(n("tag.border.radius"),`;
    gap: `).concat(n("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(n("tag.icon.size"),`;
    width: `).concat(n("tag.icon.size"),`;
    height:`).concat(n("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(n("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(n("tag.success.background"),`;
    color: `).concat(n("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(n("tag.info.background"),`;
    color: `).concat(n("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(n("tag.warn.background"),`;
    color: `).concat(n("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(n("tag.danger.background"),`;
    color: `).concat(n("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(n("tag.secondary.background"),`;
    color: `).concat(n("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(n("tag.contrast.background"),`;
    color: `).concat(n("tag.contrast.color"),`;
}
`)},B={root:function(e){var n=e.props;return["p-tag p-component",{"p-tag-info":n.severity==="info","p-tag-success":n.severity==="success","p-tag-warn":n.severity==="warn","p-tag-danger":n.severity==="danger","p-tag-secondary":n.severity==="secondary","p-tag-contrast":n.severity==="contrast","p-tag-rounded":n.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},S=d.extend({name:"tag",theme:z,classes:B}),T={name:"BaseTag",extends:v,props:{value:null,severity:null,rounded:Boolean,icon:String},style:S,provide:function(){return{$pcTag:this,$parentInstance:this}}},g={name:"Tag",extends:T,inheritAttrs:!1};function C(a,e,n,s,c,D){return t(),o("span",r({class:a.cx("root")},a.ptmi("root")),[a.$slots.icon?(t(),p(u(a.$slots.icon),r({key:0,class:a.cx("icon")},a.ptm("icon")),null,16,["class"])):a.icon?(t(),o("span",r({key:1,class:[a.cx("icon"),a.icon]},a.ptm("icon")),null,16)):i("",!0),a.value!=null||a.$slots.default?y(a.$slots,"default",{key:2},function(){return[f("span",r({class:a.cx("label")},a.ptm("label")),m(a.value),17)]}):i("",!0)],16)}g.render=C;const _={class:"contained-wrapper-rows",style:{"max-width":"100%","overflow-y":"scroll"}},I={display:"inline"},P=b({__name:"InfoTagsList",props:{tags:{type:Array,required:!0}},setup(a){return(e,n)=>{const s=g;return t(),o("div",_,[(t(!0),o(k,null,h(a.tags,c=>(t(),o("div",I,[w(s,{style:$(`color: ${c.color};`),value:c.name,rounded:""},null,8,["style","value"])]))),256))])}}});async function V(a){return await(await l.getClient()).info_page_page_list(a,void 0,{paramsSerializer:{indexes:null}})}async function A(a){return await(await l.getClient()).info_page_page_retrieve(a)}export{P as _,V as g,A as r};
