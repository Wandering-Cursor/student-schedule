import{B as s,o as r,c as o,m as t,y as d,f as a,b as l,s as c}from"./index-NqJEu3WN.js";var b=function(i){var e=i.dt;return`
.p-card {
    background: `.concat(e("card.background"),`;
    color: `).concat(e("card.color"),`;
    box-shadow: `).concat(e("card.shadow"),`;
    border-radius: `).concat(e("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(e("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(e("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(e("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(e("card.title.font.size"),`;
    font-weight: `).concat(e("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(e("card.subtitle.color"),`;
}
`)},f={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},g=s.extend({name:"card",theme:b,classes:f}),h={name:"BaseCard",extends:c,style:g,provide:function(){return{$pcCard:this,$parentInstance:this}}},y={name:"Card",extends:h,inheritAttrs:!1};function m(n,i,e,p,v,u){return r(),o("div",t({class:n.cx("root")},n.ptmi("root")),[n.$slots.header?(r(),o("div",t({key:0,class:n.cx("header")},n.ptm("header")),[d(n.$slots,"header")],16)):a("",!0),l("div",t({class:n.cx("body")},n.ptm("body")),[n.$slots.title||n.$slots.subtitle?(r(),o("div",t({key:0,class:n.cx("caption")},n.ptm("caption")),[n.$slots.title?(r(),o("div",t({key:0,class:n.cx("title")},n.ptm("title")),[d(n.$slots,"title")],16)):a("",!0),n.$slots.subtitle?(r(),o("div",t({key:1,class:n.cx("subtitle")},n.ptm("subtitle")),[d(n.$slots,"subtitle")],16)):a("",!0)],16)):a("",!0),l("div",t({class:n.cx("content")},n.ptm("content")),[d(n.$slots,"content")],16),n.$slots.footer?(r(),o("div",t({key:1,class:n.cx("footer")},n.ptm("footer")),[d(n.$slots,"footer")],16)):a("",!0)],16)],16)}y.render=m;var $=function(i){var e=i.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: `.concat(e("divider.horizontal.margin"),`;
    padding: `).concat(e("divider.horizontal.padding"),`;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid `).concat(e("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: `).concat(e("divider.horizontal.content.padding"),`;
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: `).concat(e("divider.vertical.margin"),`;
    padding: `).concat(e("divider.vertical.padding"),`;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid `).concat(e("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: `).concat(e("divider.vertical.content.padding"),`;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(e("divider.content.background"),`;
    color: `).concat(e("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`)},k={root:function(i){var e=i.props;return{justifyContent:e.layout==="horizontal"?e.align==="center"||e.align===null?"center":e.align==="left"?"flex-start":e.align==="right"?"flex-end":null:null,alignItems:e.layout==="vertical"?e.align==="center"||e.align===null?"center":e.align==="top"?"flex-start":e.align==="bottom"?"flex-end":null:null}}},z={root:function(i){var e=i.props;return["p-divider p-component","p-divider-"+e.layout,"p-divider-"+e.type,{"p-divider-left":e.layout==="horizontal"&&(!e.align||e.align==="left")},{"p-divider-center":e.layout==="horizontal"&&e.align==="center"},{"p-divider-right":e.layout==="horizontal"&&e.align==="right"},{"p-divider-top":e.layout==="vertical"&&e.align==="top"},{"p-divider-center":e.layout==="vertical"&&(!e.align||e.align==="center")},{"p-divider-bottom":e.layout==="vertical"&&e.align==="bottom"}]},content:"p-divider-content"},S=s.extend({name:"divider",theme:$,classes:z,inlineStyles:k}),w={name:"BaseDivider",extends:c,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:S,provide:function(){return{$pcDivider:this,$parentInstance:this}}},B={name:"Divider",extends:w,inheritAttrs:!1},C=["aria-orientation"];function D(n,i,e,p,v,u){return r(),o("div",t({class:n.cx("root"),style:n.sx("root"),role:"separator","aria-orientation":n.layout},n.ptmi("root")),[n.$slots.default?(r(),o("div",t({key:0,class:n.cx("content")},n.ptm("content")),[d(n.$slots,"default")],16)):a("",!0)],16,C)}B.render=D;export{B as a,y as s};
