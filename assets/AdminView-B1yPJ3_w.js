import{B as H,s as D,r as N,m as r,R as F,a as U,o as s,c as d,b as p,w as M,d as b,n as L,e as E,f,t as v,U as P,Z as C,g as k,h as I,i as K,j as Z,k as _,l as w,C as W,p as j,q,u as S,v as g,x as V,T as G,y as x,F as y,z as T,A as J,D as Q,E as X}from"./index-Bclff-fz.js";import{O as Y}from"./index-C4vsGNcM.js";var $=function(e){var t=e.dt;return`
.p-menu {
    background: `.concat(t("menu.background"),`;
    color: `).concat(t("menu.color"),`;
    border: 1px solid `).concat(t("menu.border.color"),`;
    border-radius: `).concat(t("menu.border.radius"),`;
    min-width: 12.5rem;
}

.p-menu-list {
    margin: 0;
    padding: `).concat(t("menu.list.padding"),`;
    outline: 0 none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("menu.list.gap"),`;
}

.p-menu-item-content {
    transition: background `).concat(t("menu.transition.duration"),", color ").concat(t("menu.transition.duration"),`;
    border-radius: `).concat(t("menu.item.border.radius"),`;
    color: `).concat(t("menu.item.color"),`;
}

.p-menu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(t("menu.item.padding"),`;
    gap: `).concat(t("menu.item.gap"),`;
    user-select: none;
    outline: 0 none;
}

.p-menu-item-label {
    line-height: 1;
}

.p-menu-item-icon {
    color: `).concat(t("menu.item.icon.color"),`;
}

.p-menu-item.p-focus .p-menu-item-content {
    color: `).concat(t("menu.item.focus.color"),`;
    background: `).concat(t("menu.item.focus.background"),`;
}

.p-menu-item.p-focus .p-menu-item-icon {
    color: `).concat(t("menu.item.icon.focus.color"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
    color: `).concat(t("menu.item.focus.color"),`;
    background: `).concat(t("menu.item.focus.background"),`;
}

.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
    color: `).concat(t("menu.item.icon.focus.color"),`;
}

.p-menu-overlay {
    box-shadow: `).concat(t("menu.shadow"),`;
}

.p-menu-submenu-label {
    background: `).concat(t("menu.submenu.label.background"),`;
    padding: `).concat(t("menu.submenu.label.padding"),`;
    color: `).concat(t("menu.submenu.label.color"),`;
    font-weight: `).concat(t("menu.submenu.label.font.weight"),`;
}

.p-menu-separator {
    border-block-start: 1px solid `).concat(t("menu.separator.border.color"),`;
}
`)},ee={root:function(e){var t=e.props;return["p-menu p-component",{"p-menu-overlay":t.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var t=e.instance;return["p-menu-item",{"p-focus":t.id===t.focusedOptionId,"p-disabled":t.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},ne=H.extend({name:"menu",theme:$,classes:ee}),te={name:"BaseMenu",extends:D,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:ne,provide:function(){return{$pcMenu:this,$parentInstance:this}}},R={name:"Menuitem",hostName:"Menu",extends:D,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,t){return e&&e.item?N(e.item[t]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var t=this.getItemProp(this.item,"command");t&&t({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:r({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:r({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:r({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},directives:{ripple:F}},ie=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],se=["href","target"];function oe(n,e,t,o,l,i){var h=U("ripple");return i.visible()?(s(),d("li",r({key:0,id:t.id,class:[n.cx("item"),t.item.class],role:"menuitem",style:t.item.style,"aria-label":i.label(),"aria-disabled":i.disabled()},i.getPTOptions("item"),{"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1}),[p("div",r({class:n.cx("itemContent"),onClick:e[0]||(e[0]=function(u){return i.onItemClick(u)}),onMousemove:e[1]||(e[1]=function(u){return i.onItemMouseMove(u)})},i.getPTOptions("itemContent")),[t.templates.item?t.templates.item?(s(),b(E(t.templates.item),{key:1,item:t.item,label:i.label(),props:i.getMenuItemProps(t.item)},null,8,["item","label","props"])):f("",!0):M((s(),d("a",r({key:0,href:t.item.url,class:n.cx("itemLink"),target:t.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[t.templates.itemicon?(s(),b(E(t.templates.itemicon),{key:0,item:t.item,class:L(n.cx("itemIcon"))},null,8,["item","class"])):t.item.icon?(s(),d("span",r({key:1,class:[n.cx("itemIcon"),t.item.icon]},i.getPTOptions("itemIcon")),null,16)):f("",!0),p("span",r({class:n.cx("itemLabel")},i.getPTOptions("itemLabel")),v(i.label()),17)],16,se)),[[h]])],16)],16,ie)):f("",!0)}R.render=oe;function z(n){return ue(n)||le(n)||re(n)||ae()}function ae(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(n,e){if(n){if(typeof n=="string")return A(n,e);var t={}.toString.call(n).slice(8,-1);return t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set"?Array.from(n):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(n,e):void 0}}function le(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ue(n){if(Array.isArray(n))return A(n)}function A(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,o=Array(e);t<e;t++)o[t]=n[t];return o}var B={name:"Menu",extends:te,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||P()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||P(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&C.clear(this.container),this.container=null},methods:{itemClick:function(e){var t=e.item;this.disabled(t)||(t.command&&t.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(k(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)k(this.target),this.hide(),e.preventDefault();else{var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(I(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var t=K(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),o=t&&K(t,'a[data-pc-section="itemlink"]');this.popup&&k(this.target),o?o.click():t&&t.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var t=I(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=z(t).findIndex(function(l){return l.id===e});return o>-1?o+1:0},findPrevOptionIndex:function(e){var t=I(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=z(t).findIndex(function(l){return l.id===e});return o>-1?o-1:0},changeFocusedOptionIndex:function(e){var t=I(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),o=e>=t.length?t.length-1:e<0?0:e;o>-1&&(this.focusedOptionIndex=t[o].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){Z(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&C.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&k(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&C.clear(e)},alignOverlay:function(){_(this.container,this.target);var e=w(this.target);e>w(this.container)&&(this.container.style.minWidth=w(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var o=e.container&&!e.container.contains(t.target),l=!(e.target&&(e.target===t.target||e.target.contains(t.target)));e.overlayVisible&&o&&l?e.hide():!e.popup&&o&&l&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new W(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!j()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){Y.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:R,Portal:q}},de=["id"],ce=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],me=["id"];function pe(n,e,t,o,l,i){var h=S("PVMenuitem"),u=S("Portal");return s(),b(u,{appendTo:n.appendTo,disabled:!n.popup},{default:g(function(){return[V(G,r({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:g(function(){return[!n.popup||l.overlayVisible?(s(),d("div",r({key:0,ref:i.containerRef,id:l.id,class:n.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)})},n.ptmi("root")),[n.$slots.start?(s(),d("div",r({key:0,class:n.cx("start")},n.ptm("start")),[x(n.$slots,"start")],16)):f("",!0),p("ul",r({ref:i.listRef,id:l.id+"_list",class:n.cx("list"),role:"menu",tabindex:n.tabindex,"aria-activedescendant":l.focused?i.focusedOptionId:void 0,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},n.ptm("list")),[(s(!0),d(y,null,T(n.model,function(a,c){return s(),d(y,{key:i.label(a)+c.toString()},[a.items&&i.visible(a)&&!a.separator?(s(),d(y,{key:0},[a.items?(s(),d("li",r({key:0,id:l.id+"_"+c,class:[n.cx("submenuLabel"),a.class],role:"none",ref_for:!0},n.ptm("submenuLabel")),[x(n.$slots,n.$slots.submenulabel?"submenulabel":"submenuheader",{item:a},function(){return[J(v(i.label(a)),1)]})],16,me)):f("",!0),(s(!0),d(y,null,T(a.items,function(m,O){return s(),d(y,{key:m.label+c+"_"+O},[i.visible(m)&&!m.separator?(s(),b(h,{key:0,id:l.id+"_"+c+"_"+O,item:m,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(m)&&m.separator?(s(),d("li",r({key:"separator"+c+O,class:[n.cx("separator"),a.class],style:m.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):f("",!0)],64)}),128))],64)):i.visible(a)&&a.separator?(s(),d("li",r({key:"separator"+c.toString(),class:[n.cx("separator"),a.class],style:a.style,role:"separator",ref_for:!0},n.ptm("separator")),null,16)):(s(),b(h,{key:i.label(a)+c.toString(),id:l.id+"_"+c,item:a,index:c,templates:n.$slots,focusedOptionId:i.focusedOptionId,unstyled:n.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:n.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ce),n.$slots.end?(s(),d("div",r({key:1,class:n.cx("end")},n.ptm("end")),[x(n.$slots,"end")],16)):f("",!0)],16,de)):f("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}B.render=pe;const fe=["href","onClick"],he=["href","target"],ve=Q({__name:"AdminView",setup(n){const e=X([{label:"admin.schedule.label",icon:"pi pi-fw pi-calendar",items:[{label:"admin.schedule.upload.label",icon:"pi pi-fw pi-upload",route:"/admin/schedule/upload"},{label:"schedule.teacher.label",icon:"pi pi-fw pi-calendar",route:"/admin/schedule/teacher"}]}]);return(t,o)=>{const l=S("router-link"),i=B,h=F;return s(),d("main",null,[V(i,{model:e.value},{submenulabel:g(({item:u})=>[p("span",{class:L(u.icon)},null,2),p("span",null,v(t.$t(u.label)),1)]),item:g(({item:u,props:a})=>[u.route?(s(),b(l,{key:0,to:u.route,custom:""},{default:g(({href:c,navigate:m})=>[M((s(),d("a",r({href:c},a.action,{onClick:m}),[p("span",{class:L(u.icon)},null,2),p("span",null,v(t.$t(u.label)),1)],16,fe)),[[h]])]),_:2},1032,["to"])):M((s(),d("a",r({key:1,href:u.url,target:u.target},a.action),[p("span",{class:L(u.icon)},null,2),p("span",null,v(t.$t(u.label)),1)],16,he)),[[h]])]),_:1},8,["model"])])}}});export{ve as default};
