import{B as a,o,c as i,m as s,s as l}from"./index-BAmxNOGD.js";var d=function(t){var e=t.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(e("skeleton.background"),`;
    border-radius: `).concat(e("skeleton.border.radius"),`;
}

.p-skeleton::after {
    content: "";
    animation: p-skeleton-animation 1.2s infinite;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(e("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
}

[dir='rtl'] .p-skeleton::after {
    animation-name: p-skeleton-animation-rtl;
}

.p-skeleton-circle {
    border-radius: 50%;
}

.p-skeleton-animation-none::after {
    animation: none;
}

@keyframes p-skeleton-animation {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(100%);
    }
}

@keyframes p-skeleton-animation-rtl {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(-100%);
    }
}
`)},p={root:{position:"relative"}},c={root:function(t){var e=t.props;return["p-skeleton p-component",{"p-skeleton-circle":e.shape==="circle","p-skeleton-animation-none":e.animation==="none"}]}},m=a.extend({name:"skeleton",theme:d,classes:c,inlineStyles:p}),u={name:"BaseSkeleton",extends:l,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:m,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},h={name:"Skeleton",extends:u,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function f(n,t,e,k,g,r){return o(),i("div",s({class:n.cx("root"),style:[n.sx("root"),r.containerStyle],"aria-hidden":"true"},n.ptmi("root")),null,16)}h.render=f;export{h as s};
