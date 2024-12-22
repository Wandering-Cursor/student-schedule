import{B as i,o,c as s,m as l,b as d,ap as a}from"./index-B9PWfF1A.js";var c=function(n){var t=n.dt;return`
.p-skeleton {
    overflow: hidden;
    background: `.concat(t("skeleton.background"),`;
    border-radius: `).concat(t("skeleton.border.radius"),`;
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
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), `).concat(t("skeleton.animation.background"),`, rgba(255, 255, 255, 0));
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
`)},u={root:{position:"relative"}},p={root:function(n){var t=n.props;return["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]}},h=i.extend({name:"skeleton",theme:c,classes:p,inlineStyles:u}),m={name:"BaseSkeleton",extends:d,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:h,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}},f={name:"Skeleton",extends:m,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function g(e,n,t,k,y,r){return o(),s("div",l({class:e.cx("root"),style:[e.sx("root"),r.containerStyle],"aria-hidden":"true"},e.ptmi("root")),null,16)}f.render=g;async function b(e){return await(await a.getClient()).schedule_list({date__lte:e.dateTo,date__gte:e.dateFrom,for_date:e.forDate,page:e.page})}async function v(e){return await(await a.getClient()).photo_schedule_retrieve({uuid:e.id})}async function w(e){return await(await a.getClient()).group_schedule_retrieve({uuid:e.id})}export{v as a,w as b,b as g,f as s};
