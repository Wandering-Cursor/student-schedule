import{s as bt}from"./index-iRe7_XGU.js";import{B as tt,ac as vt,g as B,ad as x,ae as gt,af as M,ag as yt,ah as It,s as L,h as v,a7 as et,i as F,R as z,a as N,o as s,c as h,b as g,w,m as c,d as m,e as b,f as p,F as nt,z as it,L as U,K as at,a9 as wt,aa as St,ai as xt,U as j,J as Pt,u as E,x as k,aj as G,Z as D,ak as kt,q as $t,v as $,T as Ot,D as ot,E as rt,a0 as _t,t as lt,$ as st,_ as ct,A as At,Y as Ct,a4 as Bt}from"./index-D4mTkDQv.js";import{s as ut,a as dt,b as Tt}from"./index-BzTMKdjU.js";import{s as Ft}from"./index-Dp8pu7ri.js";import{a as Et}from"./schedule-BThnsp-8.js";import"./datetime-CUQ1yG2p.js";var Lt=tt.extend({name:"focustrap-directive"}),Nt=vt.extend({style:Lt});function O(e){"@babel/helpers - typeof";return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(n),!0).forEach(function(i){Vt(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function Vt(e,t,n){return(t=jt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jt(e){var t=Dt(e,"string");return O(t)=="symbol"?t:t+""}function Dt(e,t){if(O(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(O(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Kt=Nt.extend("focustrap",{mounted:function(t,n){var i=n.value||{},o=i.disabled;o||(this.createHiddenFocusableElements(t,n),this.bind(t,n),this.autoElementFocus(t,n)),t.setAttribute("data-pd-focustrap",!0),this.$el=t},updated:function(t,n){var i=n.value||{},o=i.disabled;o&&this.unbind(t)},unmounted:function(t){this.unbind(t)},methods:{getComputedSelector:function(t){return':not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])'.concat(t??"")},bind:function(t,n){var i=this,o=n.value||{},a=o.onFocusIn,u=o.onFocusOut;t.$_pfocustrap_mutationobserver=new MutationObserver(function(l){l.forEach(function(r){if(r.type==="childList"&&!t.contains(document.activeElement)){var d=function(y){var I=M(y)?M(y,i.getComputedSelector(t.$_pfocustrap_focusableselector))?y:x(t,i.getComputedSelector(t.$_pfocustrap_focusableselector)):x(y);return yt(I)?I:y.nextSibling&&d(y.nextSibling)};B(d(r.nextSibling))}})}),t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_mutationobserver.observe(t,{childList:!0}),t.$_pfocustrap_focusinlistener=function(l){return a&&a(l)},t.$_pfocustrap_focusoutlistener=function(l){return u&&u(l)},t.addEventListener("focusin",t.$_pfocustrap_focusinlistener),t.addEventListener("focusout",t.$_pfocustrap_focusoutlistener)},unbind:function(t){t.$_pfocustrap_mutationobserver&&t.$_pfocustrap_mutationobserver.disconnect(),t.$_pfocustrap_focusinlistener&&t.removeEventListener("focusin",t.$_pfocustrap_focusinlistener)&&(t.$_pfocustrap_focusinlistener=null),t.$_pfocustrap_focusoutlistener&&t.removeEventListener("focusout",t.$_pfocustrap_focusoutlistener)&&(t.$_pfocustrap_focusoutlistener=null)},autoFocus:function(t){this.autoElementFocus(this.$el,{value:q(q({},t),{},{autoFocus:!0})})},autoElementFocus:function(t,n){var i=n.value||{},o=i.autoFocusSelector,a=o===void 0?"":o,u=i.firstFocusableSelector,l=u===void 0?"":u,r=i.autoFocus,d=r===void 0?!1:r,f=x(t,"[autofocus]".concat(this.getComputedSelector(a)));d&&!f&&(f=x(t,this.getComputedSelector(l))),B(f)},onFirstHiddenElementFocus:function(t){var n,i=t.currentTarget,o=t.relatedTarget,a=o===i.$_pfocustrap_lasthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(o))?x(i.parentElement,this.getComputedSelector(i.$_pfocustrap_focusableselector)):i.$_pfocustrap_lasthiddenfocusableelement;B(a)},onLastHiddenElementFocus:function(t){var n,i=t.currentTarget,o=t.relatedTarget,a=o===i.$_pfocustrap_firsthiddenfocusableelement||!((n=this.$el)!==null&&n!==void 0&&n.contains(o))?gt(i.parentElement,this.getComputedSelector(i.$_pfocustrap_focusableselector)):i.$_pfocustrap_firsthiddenfocusableelement;B(a)},createHiddenFocusableElements:function(t,n){var i=this,o=n.value||{},a=o.tabIndex,u=a===void 0?0:a,l=o.firstFocusableSelector,r=l===void 0?"":l,d=o.lastFocusableSelector,f=d===void 0?"":d,y=function(V){return It("span",{class:"p-hidden-accessible p-hidden-focusable",tabIndex:u,role:"presentation","aria-hidden":!0,"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0,onFocus:V==null?void 0:V.bind(i)})},I=y(this.onFirstHiddenElementFocus),S=y(this.onLastHiddenElementFocus);I.$_pfocustrap_lasthiddenfocusableelement=S,I.$_pfocustrap_focusableselector=r,I.setAttribute("data-pc-section","firstfocusableelement"),S.$_pfocustrap_firsthiddenfocusableelement=I,S.$_pfocustrap_focusableselector=f,S.setAttribute("data-pc-section","lastfocusableelement"),t.prepend(I),t.append(S)}}}),Ht=function(t){var n=t.dt;return`
.p-galleria {
    overflow: hidden;
    border-style: solid;
    border-width: `.concat(n("galleria.border.width"),`;
    border-color: `).concat(n("galleria.border.color"),`;
    border-radius: `).concat(n("galleria.border.radius"),`;
}

.p-galleria-content {
    display: flex;
    flex-direction: column;
}

.p-galleria-items-container {
    display: flex;
    flex-direction: column;
    position: relative;
}

.p-galleria-items {
    position: relative;
    display: flex;
    height: 100%;
}

.p-galleria-nav-button {
    position: absolute !important;
    top: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: `).concat(n("galleria.nav.button.background"),`;
    color: `).concat(n("galleria.nav.button.color"),`;
    width: `).concat(n("galleria.nav.button.size"),`;
    height: `).concat(n("galleria.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    margin: calc(-1 * calc(`).concat(n("galleria.nav.button.size"),") / 2) ").concat(n("galleria.nav.button.gutter")," 0 ").concat(n("galleria.nav.button.gutter"),`;
    padding: 0;
    user-select: none;
    border: 0 none;
    cursor: pointer;
    outline-color: transparent;
}

.p-galleria-nav-button:not(.p-disabled):hover {
    background: `).concat(n("galleria.nav.button.hover.background"),`;
    color: `).concat(n("galleria.nav.button.hover.color"),`;
}

.p-galleria-nav-button:not(.p-disabled):focus-visible {
    box-shadow: `).concat(n("galleria.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.nav.button.focus.ring.width")," ").concat(n("galleria.nav.button.focus.ring.style")," ").concat(n("galleria.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.nav.button.focus.ring.offset"),`;
}

.p-galleria-next-icon,
.p-galleria-prev-icon {
    font-size: `).concat(n("galleria.nav.icon.size"),`;
    width: `).concat(n("galleria.nav.icon.size"),`;
    height: `).concat(n("galleria.nav.icon.size"),`;
}

.p-galleria-prev-button {
    border-radius: `).concat(n("galleria.nav.button.prev.border.radius"),`;
    left: 0;
}

.p-galleria-next-button {
    border-radius: `).concat(n("galleria.nav.button.next.border.radius"),`;
    right: 0;
}

.p-galleria-prev-button:dir(rtl) {
    left: auto;
    right: 0;
    transform: rotate(180deg);
}

.p-galleria-next-button:dir(rtl) {
    right: auto;
    left: 0;
    transform: rotate(180deg);
}

.p-galleria-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.p-galleria-hover-navigators .p-galleria-nav-button {
    pointer-events: none;
    opacity: 0;
    transition: opacity `).concat(n("galleria.transition.duration"),` ease-in-out;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {
    pointer-events: all;
    opacity: 1;
}

.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {
    pointer-events: none;
}

.p-galleria-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: `).concat(n("galleria.caption.background"),`;
    color: `).concat(n("galleria.caption.color"),`;
    padding: `).concat(n("galleria.caption.padding"),`;
}

.p-galleria-thumbnails {
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex-shrink: 0;
}

.p-galleria-thumbnail-nav-button {
    align-self: center;
    flex: 0 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    margin: 0 `).concat(n("galleria.thumbnail.nav.button.gutter"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    background: transparent;
    color: `).concat(n("galleria.thumbnail.nav.button.color"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.size"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.thumbnail.nav.button.border.radius"),`;
}

.p-galleria-thumbnail-nav-button:hover {
    background: `).concat(n("galleria.thumbnail.nav.button.hover.background"),`;
    color: `).concat(n("galleria.thumbnail.nav.button.hover.color"),`;
}

.p-galleria-thumbnail-nav-button:focus-visible {
    box-shadow: `).concat(n("galleria.thumbnail.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.thumbnail.nav.button.focus.ring.width")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.style")," ").concat(n("galleria.thumbnail.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.thumbnail.nav.button.focus.ring.offset"),`;
}

.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,
.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {
    font-size: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    width: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
    height: `).concat(n("galleria.thumbnail.nav.button.icon.size"),`;
}

.p-galleria-thumbnails-content {
    display: flex;
    flex-direction: row;
    background: `).concat(n("galleria.thumbnails.content.background"),`;
    padding: `).concat(n("galleria.thumbnails.content.padding"),`;
}

.p-galleria-thumbnails-viewport {
    overflow: hidden;
    width: 100%;
}

.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),
.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {
    transform: rotate(180deg);
}

.p-galleria-thumbnail-items {
    display: flex;
}

.p-galleria-thumbnail-item {
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
}

.p-galleria-thumbnail {
    outline-color: transparent;
}

.p-galleria-thumbnail-item:hover {
    opacity: 1;
    transition: opacity 0.3s;
}

.p-galleria-thumbnail-item-current {
    opacity: 1;
}

.p-galleria-thumbnails-left .p-galleria-content,
.p-galleria-thumbnails-right .p-galleria-content {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-right .p-galleria-items-container {
    flex-direction: row;
}

.p-galleria-thumbnails-left .p-galleria-items-container,
.p-galleria-thumbnails-top .p-galleria-items-container {
    order: 2;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails,
.p-galleria-thumbnails-top .p-galleria-thumbnails {
    order: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnails-content,
.p-galleria-thumbnails-right .p-galleria-thumbnails-content {
    flex-direction: column;
    flex-grow: 1;
}

.p-galleria-thumbnails-left .p-galleria-thumbnail-items,
.p-galleria-thumbnails-right .p-galleria-thumbnail-items {
    flex-direction: column;
    height: 100%;
}

.p-galleria-indicator-list {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: `).concat(n("galleria.indicator.list.padding"),`;
    gap: `).concat(n("galleria.indicator.list.gap"),`;
    margin: 0;
    list-style: none;
}

.p-galleria-indicator-button {
    display: inline-flex;
    align-items: center;
    background: `).concat(n("galleria.indicator.button.background"),`;
    width: `).concat(n("galleria.indicator.button.width"),`;
    height: `).concat(n("galleria.indicator.button.height"),`;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),", box-shadow ").concat(n("galleria.transition.duration"),`;
    outline-color: transparent;
    border-radius: `).concat(n("galleria.indicator.button.border.radius"),`;
    margin: 0;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
}

.p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.indicator.button.hover.background"),`;
}

.p-galleria-indicator-button:focus-visible {
    box-shadow: `).concat(n("galleria.indicator.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.indicator.button.focus.ring.width")," ").concat(n("galleria.indicator.button.focus.ring.style")," ").concat(n("galleria.indicator.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.indicator.button.focus.ring.offset"),`;
}

.p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.indicator.button.active.background"),`;
}

.p-galleria-indicators-left .p-galleria-items-container,
.p-galleria-indicators-right .p-galleria-items-container {
    flex-direction: row;
    align-items: center;
}

.p-galleria-indicators-left .p-galleria-items,
.p-galleria-indicators-top .p-galleria-items {
    order: 2;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-top .p-galleria-indicator-list {
    order: 1;
}

.p-galleria-indicators-left .p-galleria-indicator-list,
.p-galleria-indicators-right .p-galleria-indicator-list {
    flex-direction: column;
}

.p-galleria-inset-indicators .p-galleria-indicator-list {
    position: absolute;
    display: flex;
    z-index: 1;
    background: `).concat(n("galleria.inset.indicator.list.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-button:hover {
    background: `).concat(n("galleria.inset.indicator.button.hover.background"),`;
}

.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {
    background: `).concat(n("galleria.inset.indicator.button.active.background"),`;
}

.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {
    top: 0;
    left: 0;
    width: 100%;
    align-items: flex-start;
}

.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {
    right: 0;
    top: 0;
    height: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {
    bottom: 0;
    left: 0;
    width: 100%;
    align-items: flex-end;
}

.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {
    left: 0;
    top: 0;
    height: 100%;
    align-items: flex-start;
}

.p-galleria-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-galleria-close-button {
    position: absolute !important;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: `).concat(n("galleria.close.button.gutter"),`;
    background: `).concat(n("galleria.close.button.background"),`;
    color: `).concat(n("galleria.close.button.color"),`;
    width: `).concat(n("galleria.close.button.size"),`;
    height: `).concat(n("galleria.close.button.size"),`;
    padding: 0;
    border: none;
    user-select: none;
    cursor: pointer;
    border-radius: `).concat(n("galleria.close.button.border.radius"),`;
    outline-color: transparent;
    transition: background `).concat(n("galleria.transition.duration"),", color ").concat(n("galleria.transition.duration"),", outline-color ").concat(n("galleria.transition.duration"),`;
}

.p-galleria-close-icon {
    font-size: `).concat(n("galleria.close.button.icon.size"),`;
    width: `).concat(n("galleria.close.button.icon.size"),`;
    height: `).concat(n("galleria.close.button.icon.size"),`;
}

.p-galleria-close-button:hover {
    background: `).concat(n("galleria.close.button.hover.background"),`;
    color: `).concat(n("galleria.close.button.hover.color"),`;
}

.p-galleria-close-button:focus-visible {
    box-shadow: `).concat(n("galleria.close.button.focus.ring.shadow"),`;
    outline: `).concat(n("galleria.close.button.focus.ring.width")," ").concat(n("galleria.close.button.focus.ring.style")," ").concat(n("galleria.close.button.focus.ring.color"),`;
    outline-offset: `).concat(n("galleria.close.button.focus.ring.offset"),`;
}

.p-galleria-mask .p-galleria-nav-button {
    position: fixed;
    top: 50%;
}

.p-galleria-enter-active {
    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);
}

.p-galleria-leave-active {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}

.p-galleria-enter-from,
.p-galleria-leave-to {
    opacity: 0;
    transform: scale(0.7);
}

.p-galleria-enter-active .p-galleria-nav-button {
    opacity: 0;
}

.p-items-hidden .p-galleria-thumbnail-item {
    visibility: hidden;
}

.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {
    visibility: visible;
}
`)},Rt={mask:"p-galleria-mask p-overlay-mask p-overlay-mask-enter",root:function(t){var n=t.instance,i=n.$attrs.showThumbnails&&n.getPositionClass("p-galleria-thumbnails",n.$attrs.thumbnailsPosition),o=n.$attrs.showIndicators&&n.getPositionClass("p-galleria-indicators",n.$attrs.indicatorsPosition);return["p-galleria p-component",{"p-galleria-fullscreen":n.$attrs.fullScreen,"p-galleria-inset-indicators":n.$attrs.showIndicatorsOnItem,"p-galleria-hover-navigators":n.$attrs.showItemNavigatorsOnHover&&!n.$attrs.fullScreen},i,o]},closeButton:"p-galleria-close-button",closeIcon:"p-galleria-close-icon",header:"p-galleria-header",content:"p-galleria-content",footer:"p-galleria-footer",itemsContainer:"p-galleria-items-container",items:"p-galleria-items",prevButton:function(t){var n=t.instance;return["p-galleria-prev-button p-galleria-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},prevIcon:"p-galleria-prev-icon",item:"p-galleria-item",nextButton:function(t){var n=t.instance;return["p-galleria-next-button p-galleria-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},nextIcon:"p-galleria-next-icon",caption:"p-galleria-caption",indicatorList:"p-galleria-indicator-list",indicator:function(t){var n=t.instance,i=t.index;return["p-galleria-indicator",{"p-galleria-indicator-active":n.isIndicatorItemActive(i)}]},indicatorButton:"p-galleria-indicator-button",thumbnails:"p-galleria-thumbnails",thumbnailContent:"p-galleria-thumbnails-content",thumbnailPrevButton:function(t){var n=t.instance;return["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavBackwardDisabled()}]},thumbnailPrevIcon:"p-galleria-thumbnail-prev-icon",thumbnailsViewport:"p-galleria-thumbnails-viewport",thumbnailItems:"p-galleria-thumbnail-items",thumbnailItem:function(t){var n=t.instance,i=t.index,o=t.activeIndex;return["p-galleria-thumbnail-item",{"p-galleria-thumbnail-item-current":o===i,"p-galleria-thumbnail-item-active":n.isItemActive(i),"p-galleria-thumbnail-item-start":n.firstItemAciveIndex()===i,"p-galleria-thumbnail-item-end":n.lastItemActiveIndex()===i}]},thumbnail:"p-galleria-thumbnail",thumbnailNextButton:function(t){var n=t.instance;return["p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button",{"p-disabled":n.isNavForwardDisabled()}]},thumbnailNextIcon:"p-galleria-thumbnail-next-icon"},zt=tt.extend({name:"galleria",theme:Ht,classes:Rt}),Mt={name:"BaseGalleria",extends:L,props:{id:{type:String,default:null},value:{type:Array,default:null},activeIndex:{type:Number,default:0},fullScreen:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},numVisible:{type:Number,default:3},responsiveOptions:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!1},showThumbnailNavigators:{type:Boolean,default:!0},showItemNavigatorsOnHover:{type:Boolean,default:!1},changeItemOnIndicatorHover:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},autoPlay:{type:Boolean,default:!1},transitionInterval:{type:Number,default:4e3},showThumbnails:{type:Boolean,default:!0},thumbnailsPosition:{type:String,default:"bottom"},verticalThumbnailViewPortHeight:{type:String,default:"300px"},showIndicators:{type:Boolean,default:!1},showIndicatorsOnItem:{type:Boolean,default:!1},indicatorsPosition:{type:String,default:"bottom"},baseZIndex:{type:Number,default:0},maskClass:{type:String,default:null},containerStyle:{type:null,default:null},containerClass:{type:null,default:null},containerProps:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null},ariaLabel:{type:String,default:null},ariaRoledescription:{type:String,default:null}},style:zt,provide:function(){return{$pcGalleria:this,$parentInstance:this}}};function P(e){return qt(e)||Zt(e)||Gt(e)||Ut()}function Ut(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gt(e,t){if(e){if(typeof e=="string")return H(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}function Zt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qt(e){if(Array.isArray(e))return H(e)}function H(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var ht={name:"GalleriaItem",hostName:"Galleria",extends:L,emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null},id:{type:String,default:null}},mounted:function(){this.autoPlay&&this.$emit("start-slideshow")},methods:{getIndicatorPTOptions:function(t){return{context:{highlighted:this.activeIndex===t}}},next:function(){var t=this.activeIndex+1,n=this.circular&&this.value.length-1===this.activeIndex?0:t;this.$emit("update:activeIndex",n)},prev:function(){var t=this.activeIndex!==0?this.activeIndex-1:0,n=this.circular&&this.activeIndex===0?this.value.length-1:t;this.$emit("update:activeIndex",n)},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward:function(t){this.stopSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()},onIndicatorClick:function(t){this.stopSlideShow(),this.$emit("update:activeIndex",t)},onIndicatorMouseEnter:function(t){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",t))},onIndicatorKeyDown:function(t,n){switch(t.code){case"Enter":case"NumpadEnter":case"Space":this.stopSlideShow(),this.$emit("update:activeIndex",n),t.preventDefault();break;case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"Tab":this.onTabKey();break;case"ArrowDown":case"ArrowUp":case"PageUp":case"PageDown":t.preventDefault();break}},onRightKey:function(){var t=P(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=P(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=P(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=t.findIndex(function(a){return et(a,"data-p-active")===!0}),i=F(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]'),o=t.findIndex(function(a){return a===i.parentElement});t[o].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=P(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=F(this.$refs.indicatorContent,'[data-pc-section="indicator"] > [tabindex="0"]');return t.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(t,n){var i=P(v(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));i[t].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},isIndicatorItemActive:function(t){return this.activeIndex===t},isNavBackwardDisabled:function(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled:function(){return!this.circular&&this.activeIndex===this.value.length-1},ariaSlideNumber:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,t):void 0},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{activeItem:function(){return this.value[this.activeIndex]},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0}},components:{ChevronLeftIcon:ut,ChevronRightIcon:dt},directives:{ripple:z}},Wt=["disabled"],Yt=["id","aria-label","aria-roledescription"],Xt=["disabled"],Jt=["aria-label","aria-selected","aria-controls","onClick","onMouseenter","onKeydown","data-p-active"],Qt=["tabindex"];function te(e,t,n,i,o,a){var u=N("ripple");return s(),h("div",c({class:e.cx("itemsContainer")},e.ptm("itemsContainer")),[g("div",c({class:e.cx("items")},e.ptm("items")),[n.showItemNavigators?w((s(),h("button",c({key:0,type:"button",class:e.cx("prevButton"),onClick:t[0]||(t[0]=function(l){return a.navBackward(l)}),disabled:a.isNavBackwardDisabled()},e.ptm("prevButton"),{"data-pc-group-section":"itemnavigator"}),[(s(),m(b(n.templates.previousitemicon||"ChevronLeftIcon"),c({class:e.cx("prevIcon")},e.ptm("prevIcon")),null,16,["class"]))],16,Wt)),[[u]]):p("",!0),g("div",c({id:n.id+"_item_"+n.activeIndex,class:e.cx("item"),role:"group","aria-label":a.ariaSlideNumber(n.activeIndex+1),"aria-roledescription":a.ariaSlideLabel},e.ptm("item")),[n.templates.item?(s(),m(b(n.templates.item),{key:0,item:a.activeItem},null,8,["item"])):p("",!0)],16,Yt),n.showItemNavigators?w((s(),h("button",c({key:1,type:"button",class:e.cx("nextButton"),onClick:t[1]||(t[1]=function(l){return a.navForward(l)}),disabled:a.isNavForwardDisabled()},e.ptm("nextButton"),{"data-pc-group-section":"itemnavigator"}),[(s(),m(b(n.templates.nextitemicon||"ChevronRightIcon"),c({class:e.cx("nextIcon")},e.ptm("nextIcon")),null,16,["class"]))],16,Xt)),[[u]]):p("",!0),n.templates.caption?(s(),h("div",c({key:2,class:e.cx("caption")},e.ptm("caption")),[n.templates.caption?(s(),m(b(n.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):p("",!0)],16)):p("",!0)],16),n.showIndicators?(s(),h("ul",c({key:0,ref:"indicatorContent",class:e.cx("indicatorList")},e.ptm("indicatorList")),[(s(!0),h(nt,null,it(n.value,function(l,r){return s(),h("li",c({key:"p-galleria-indicator-".concat(r),class:e.cx("indicator",{index:r}),"aria-label":a.ariaPageLabel(r+1),"aria-selected":n.activeIndex===r,"aria-controls":n.id+"_item_"+r,onClick:function(f){return a.onIndicatorClick(r)},onMouseenter:function(f){return a.onIndicatorMouseEnter(r)},onKeydown:function(f){return a.onIndicatorKeyDown(f,r)},ref_for:!0},e.ptm("indicator",a.getIndicatorPTOptions(r)),{"data-p-active":a.isIndicatorItemActive(r)}),[n.templates.indicator?p("",!0):(s(),h("button",c({key:0,type:"button",tabindex:n.activeIndex===r?"0":"-1",class:e.cx("indicatorButton"),ref_for:!0},e.ptm("indicatorButton",a.getIndicatorPTOptions(r))),null,16,Qt)),n.templates.indicator?(s(),m(b(n.templates.indicator),{key:1,index:r,activeIndex:n.activeIndex,tabindex:n.activeIndex===r?"0":"-1"},null,8,["index","activeIndex","tabindex"])):p("",!0)],16,Jt)}),128))],16)):p("",!0)],16)}ht.render=te;function K(e){return ae(e)||ie(e)||ne(e)||ee()}function ee(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(e,t){if(e){if(typeof e=="string")return R(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}function ie(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ae(e){if(Array.isArray(e))return R(e)}function R(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}var pt={name:"GalleriaThumbnails",hostName:"Galleria",extends:L,emits:["stop-slideshow","update:activeIndex"],props:{containerId:{type:String,default:null},value:{type:Array,default:null},numVisible:{type:Number,default:3},activeIndex:{type:Number,default:0},isVertical:{type:Boolean,default:!1},slideShowActive:{type:Boolean,default:!1},circular:{type:Boolean,default:!1},responsiveOptions:{type:Array,default:null},contentHeight:{type:String,default:"300px"},showThumbnailNavigators:{type:Boolean,default:!0},templates:{type:null,default:null},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},startPos:null,thumbnailsStyle:null,sortedResponsiveOptions:null,data:function(){return{d_numVisible:this.numVisible,d_oldNumVisible:this.numVisible,d_activeIndex:this.activeIndex,d_oldActiveItemIndex:this.activeIndex,totalShiftedItems:0,page:0}},watch:{numVisible:function(t,n){this.d_numVisible=t,this.d_oldNumVisible=n},activeIndex:function(t,n){this.d_activeIndex=t,this.d_oldActiveItemIndex=n}},mounted:function(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated:function(){var t=this.totalShiftedItems;(this.d_oldNumVisible!==this.d_numVisible||this.d_oldActiveItemIndex!==this.d_activeIndex)&&(this.d_activeIndex<=this.getMedianItemIndex()?t=0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this.d_activeIndex?t=this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this.d_activeIndex&&this.d_numVisible%2===0?t=this.d_activeIndex*-1+this.getMedianItemIndex()+1:t=this.d_activeIndex*-1+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(t*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(t*(100/this.d_numVisible),"%, 0, 0)"),this.d_oldActiveItemIndex!==this.d_activeIndex&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&U(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.d_oldActiveItemIndex=this.d_activeIndex,this.d_oldNumVisible=this.d_numVisible)},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)},methods:{step:function(t){var n=this.totalShiftedItems+t;t<0&&-1*n+this.d_numVisible>this.value.length-1?n=this.d_numVisible-this.value.length:t>0&&n>0&&(n=0),this.circular&&(t<0&&this.value.length-1===this.d_activeIndex?n=0:t>0&&this.d_activeIndex===0&&(n=this.d_numVisible-this.value.length)),this.$refs.itemsContainer&&(document.body.setAttribute("data-p-items-hidden","false"),!this.isUnstyled&&U(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical?"translate3d(0, ".concat(n*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(n*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=n},stopSlideShow:function(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},getMedianItemIndex:function(){var t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1},navBackward:function(t){this.stopSlideShow();var n=this.d_activeIndex!==0?this.d_activeIndex-1:0,i=n+this.totalShiftedItems;this.d_numVisible-i-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!==0||this.circular)&&this.step(1);var o=this.circular&&this.d_activeIndex===0?this.value.length-1:n;this.$emit("update:activeIndex",o),t.cancelable&&t.preventDefault()},navForward:function(t){this.stopSlideShow();var n=this.d_activeIndex===this.value.length-1?this.value.length-1:this.d_activeIndex+1;n+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1);var i=this.circular&&this.value.length-1===this.d_activeIndex?0:n;this.$emit("update:activeIndex",i),t.cancelable&&t.preventDefault()},onItemClick:function(t){this.stopSlideShow();var n=t;if(n!==this.d_activeIndex){var i=n+this.totalShiftedItems,o=0;n<this.d_activeIndex?(o=this.d_numVisible-i-1-this.getMedianItemIndex(),o>0&&-1*this.totalShiftedItems!==0&&this.step(o)):(o=this.getMedianItemIndex()-i,o<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(o)),this.$emit("update:activeIndex",n)}},onThumbnailKeydown:function(t,n){switch((t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.onItemClick(n),t.preventDefault()),t.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),t.preventDefault();break;case"End":this.onEndKey(),t.preventDefault();break;case"ArrowUp":case"ArrowDown":t.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var t=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===t.length?t.length-1:n+1)},onLeftKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,t-1<=0?0:t-1)},onHomeKey:function(){var t=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(t,0)},onEndKey:function(){var t=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]'),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,t.length-1)},onTabKey:function(){var t=K(v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=t.findIndex(function(a){return et(a,"data-p-active")===!0}),i=F(this.$refs.itemsContainer,'[tabindex="0"]'),o=t.findIndex(function(a){return a===i.parentElement});t[o].children[0].tabIndex="-1",t[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var t=K(v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]')),n=F(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"] > [tabindex="0"]');return t.findIndex(function(i){return i===n.parentElement})},changedFocusedIndicator:function(t,n){var i=v(this.$refs.itemsContainer,'[data-pc-section="thumbnailitem"]');i[t].children[0].tabIndex="-1",i[n].children[0].tabIndex="0",i[n].children[0].focus()},onTransitionEnd:function(t){this.$refs.itemsContainer&&t.propertyName==="transform"&&(document.body.setAttribute("data-p-items-hidden","true"),!this.isUnstyled&&at(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="")},onTouchStart:function(t){var n=t.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(t){t.cancelable&&t.preventDefault()},onTouchEnd:function(t){var n=t.changedTouches[0];this.isVertical?this.changePageOnTouch(t,n.pageY-this.startPos.y):this.changePageOnTouch(t,n.pageX-this.startPos.x)},changePageOnTouch:function(t,n){n<0?this.navForward(t):this.navBackward(t)},getTotalPageNumber:function(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0},createStyle:function(){if(!this.thumbnailsStyle){var t;this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",wt(this.thumbnailsStyle,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.body.appendChild(this.thumbnailsStyle)}var n=`
                #`.concat(this.containerId,` [data-pc-section="thumbnailitem"] {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){this.sortedResponsiveOptions=K(this.responsiveOptions);var i=St();this.sortedResponsiveOptions.sort(function(u,l){var r=u.breakpoint,d=l.breakpoint;return xt(r,d,-1,i)});for(var o=0;o<this.sortedResponsiveOptions.length;o++){var a=this.sortedResponsiveOptions[o];n+=`
                        @media screen and (max-width: `.concat(a.breakpoint,`) {
                            #`).concat(this.containerId,` .p-galleria-thumbnail-item {
                                flex: 1 0 `).concat(100/a.numVisible,`%
                            }
                        }
                    `)}}this.thumbnailsStyle.innerHTML=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.sortedResponsiveOptions){for(var t=window.innerWidth,n={numVisible:this.numVisible},i=0;i<this.sortedResponsiveOptions.length;i++){var o=this.sortedResponsiveOptions[i];parseInt(o.breakpoint,10)>=t&&(n=o)}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},bindDocumentListeners:function(){var t=this;this.documentResizeListener||(this.documentResizeListener=function(){t.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},isNavBackwardDisabled:function(){return!this.circular&&this.d_activeIndex===0||this.value.length<=this.d_numVisible},isNavForwardDisabled:function(){return!this.circular&&this.d_activeIndex===this.value.length-1||this.value.length<=this.d_numVisible},firstItemAciveIndex:function(){return this.totalShiftedItems*-1},lastItemActiveIndex:function(){return this.firstItemAciveIndex()+this.d_numVisible-1},isItemActive:function(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t},ariaPageLabel:function(t){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,t):void 0}},computed:{ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0}},components:{ChevronLeftIcon:ut,ChevronRightIcon:dt,ChevronUpIcon:Tt,ChevronDownIcon:Ft},directives:{ripple:z}};function _(e){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(e)}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?W(Object(n),!0).forEach(function(i){oe(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function oe(e,t,n){return(t=re(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){var t=le(e,"string");return _(t)=="symbol"?t:t+""}function le(e,t){if(_(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(_(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var se=["disabled","aria-label"],ce=["data-p-active","aria-selected","aria-controls","onKeydown","data-p-galleria-thumbnail-item-current","data-p-galleria-thumbnail-item-active","data-p-galleria-thumbnail-item-start","data-p-galleria-thumbnail-item-end"],ue=["tabindex","aria-label","aria-current","onClick"],de=["disabled","aria-label"];function he(e,t,n,i,o,a){var u=N("ripple");return s(),h("div",c({class:e.cx("thumbnails")},e.ptm("thumbnails")),[g("div",c({class:e.cx("thumbnailContent")},e.ptm("thumbnailContent")),[n.showThumbnailNavigators?w((s(),h("button",c({key:0,class:e.cx("thumbnailPrevButton"),disabled:a.isNavBackwardDisabled(),type:"button","aria-label":a.ariaPrevButtonLabel,onClick:t[0]||(t[0]=function(l){return a.navBackward(l)})},T(T({},n.prevButtonProps),e.ptm("thumbnailPrevButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(s(),m(b(n.templates.previousthumbnailicon||(n.isVertical?"ChevronUpIcon":"ChevronLeftIcon")),c({class:e.cx("thumbnailPrevIcon")},e.ptm("thumbnailPrevIcon")),null,16,["class"]))],16,se)),[[u]]):p("",!0),g("div",c({class:e.cx("thumbnailsViewport"),style:{height:n.isVertical?n.contentHeight:""}},e.ptm("thumbnailsViewport")),[g("div",c({ref:"itemsContainer",class:e.cx("thumbnailItems"),role:"tablist",onTransitionend:t[1]||(t[1]=function(l){return a.onTransitionEnd(l)}),onTouchstart:t[2]||(t[2]=function(l){return a.onTouchStart(l)}),onTouchmove:t[3]||(t[3]=function(l){return a.onTouchMove(l)}),onTouchend:t[4]||(t[4]=function(l){return a.onTouchEnd(l)})},e.ptm("thumbnailItems")),[(s(!0),h(nt,null,it(n.value,function(l,r){return s(),h("div",c({key:"p-galleria-thumbnail-item-".concat(r),class:e.cx("thumbnailItem",{index:r,activeIndex:n.activeIndex}),role:"tab","data-p-active":n.activeIndex===r,"aria-selected":n.activeIndex===r,"aria-controls":n.containerId+"_item_"+r,onKeydown:function(f){return a.onThumbnailKeydown(f,r)},ref_for:!0},e.ptm("thumbnailItem"),{"data-p-galleria-thumbnail-item-current":n.activeIndex===r,"data-p-galleria-thumbnail-item-active":a.isItemActive(r),"data-p-galleria-thumbnail-item-start":a.firstItemAciveIndex()===r,"data-p-galleria-thumbnail-item-end":a.lastItemActiveIndex()===r}),[g("div",c({class:e.cx("thumbnail"),tabindex:n.activeIndex===r?"0":"-1","aria-label":a.ariaPageLabel(r+1),"aria-current":n.activeIndex===r?"page":void 0,onClick:function(f){return a.onItemClick(r)},ref_for:!0},e.ptm("thumbnail")),[n.templates.thumbnail?(s(),m(b(n.templates.thumbnail),{key:0,item:l},null,8,["item"])):p("",!0)],16,ue)],16,ce)}),128))],16)],16),n.showThumbnailNavigators?w((s(),h("button",c({key:1,class:e.cx("thumbnailNextButton"),disabled:a.isNavForwardDisabled(),type:"button","aria-label":a.ariaNextButtonLabel,onClick:t[5]||(t[5]=function(l){return a.navForward(l)})},T(T({},n.nextButtonProps),e.ptm("thumbnailNextButton")),{"data-pc-group-section":"thumbnailnavigator"}),[(s(),m(b(n.templates.nextthumbnailicon||(n.isVertical?"ChevronDownIcon":"ChevronRightIcon")),c({class:e.cx("thumbnailNextIcon")},e.ptm("thumbnailNextIcon")),null,16,["class"]))],16,de)),[[u]]):p("",!0)],16)],16)}pt.render=he;function A(e){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(e)}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(i){pe(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function pe(e,t,n){return(t=me(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function me(e){var t=fe(e,"string");return A(t)=="symbol"?t:t+""}function fe(e,t){if(A(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(A(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var mt={name:"GalleriaContent",hostName:"Galleria",extends:L,inheritAttrs:!1,interval:null,emits:["activeitem-change","mask-hide"],data:function(){return{id:this.$attrs.id||j(),activeIndex:this.$attrs.activeIndex,numVisible:this.$attrs.numVisible,slideShowActive:!1}},watch:{"$attrs.id":function(t){this.id=t||j()},"$attrs.value":function(t){t&&t.length<this.numVisible&&(this.numVisible=t.length)},"$attrs.activeIndex":function(t){this.activeIndex=t},"$attrs.numVisible":function(t){this.numVisible=t},"$attrs.autoPlay":function(t){t?this.startSlideShow():this.stopSlideShow()}},mounted:function(){this.id=this.id||j()},updated:function(){this.$emit("activeitem-change",this.activeIndex)},beforeUnmount:function(){this.slideShowActive&&this.stopSlideShow()},methods:{getPTOptions:function(t){return this.ptm(t,{props:X(X({},this.$attrs),{},{pt:this.pt,unstyled:this.unstyled})})},isAutoPlayActive:function(){return this.slideShowActive},startSlideShow:function(){var t=this;this.interval=setInterval(function(){var n=t.$attrs.circular&&t.$attrs.value.length-1===t.activeIndex?0:t.activeIndex+1;t.activeIndex=n},this.$attrs.transitionInterval),this.slideShowActive=!0},stopSlideShow:function(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1},getPositionClass:function(t,n){var i=["top","left","bottom","right"],o=i.find(function(a){return a===n});return o?"".concat(t,"-").concat(o):""},isVertical:function(){return this.$attrs.thumbnailsPosition==="left"||this.$attrs.thumbnailsPosition==="right"}},computed:{closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{GalleriaItem:ht,GalleriaThumbnails:pt,TimesIcon:Pt},directives:{ripple:z}};function C(e){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(e)}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(i){be(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function be(e,t,n){return(t=ve(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e){var t=ge(e,"string");return C(t)=="symbol"?t:t+""}function ge(e,t){if(C(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(C(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ye=["id","aria-label","aria-roledescription"],Ie=["aria-label"],we=["aria-live"];function Se(e,t,n,i,o,a){var u=E("GalleriaItem"),l=E("GalleriaThumbnails"),r=N("ripple");return e.$attrs.value&&e.$attrs.value.length>0?(s(),h("div",c({key:0,id:o.id,role:"region",class:[e.cx("root"),e.$attrs.containerClass],style:e.$attrs.containerStyle,"aria-label":e.$attrs.ariaLabel,"aria-roledescription":e.$attrs.ariaRoledescription},Q(Q({},e.$attrs.containerProps),a.getPTOptions("root"))),[e.$attrs.fullScreen?w((s(),h("button",c({key:0,autofocus:"",type:"button",class:e.cx("closeButton"),"aria-label":a.closeAriaLabel,onClick:t[0]||(t[0]=function(d){return e.$emit("mask-hide")})},a.getPTOptions("closeButton")),[(s(),m(b(e.$attrs.templates.closeicon||"TimesIcon"),c({class:e.cx("closeIcon")},a.getPTOptions("closeIcon")),null,16,["class"]))],16,Ie)),[[r]]):p("",!0),e.$attrs.templates&&e.$attrs.templates.header?(s(),h("div",c({key:1,class:e.cx("header")},a.getPTOptions("header")),[(s(),m(b(e.$attrs.templates.header)))],16)):p("",!0),g("div",c({class:e.cx("content"),"aria-live":e.$attrs.autoPlay?"polite":"off"},a.getPTOptions("content")),[k(u,{id:o.id,activeIndex:o.activeIndex,"onUpdate:activeIndex":t[1]||(t[1]=function(d){return o.activeIndex=d}),slideShowActive:o.slideShowActive,"onUpdate:slideShowActive":t[2]||(t[2]=function(d){return o.slideShowActive=d}),value:e.$attrs.value,circular:e.$attrs.circular,templates:e.$attrs.templates,showIndicators:e.$attrs.showIndicators,changeItemOnIndicatorHover:e.$attrs.changeItemOnIndicatorHover,showItemNavigators:e.$attrs.showItemNavigators,autoPlay:e.$attrs.autoPlay,onStartSlideshow:a.startSlideShow,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["id","activeIndex","slideShowActive","value","circular","templates","showIndicators","changeItemOnIndicatorHover","showItemNavigators","autoPlay","onStartSlideshow","onStopSlideshow","pt","unstyled"]),e.$attrs.showThumbnails?(s(),m(l,{key:0,activeIndex:o.activeIndex,"onUpdate:activeIndex":t[3]||(t[3]=function(d){return o.activeIndex=d}),slideShowActive:o.slideShowActive,"onUpdate:slideShowActive":t[4]||(t[4]=function(d){return o.slideShowActive=d}),containerId:o.id,value:e.$attrs.value,templates:e.$attrs.templates,numVisible:o.numVisible,responsiveOptions:e.$attrs.responsiveOptions,circular:e.$attrs.circular,isVertical:a.isVertical(),contentHeight:e.$attrs.verticalThumbnailViewPortHeight,showThumbnailNavigators:e.$attrs.showThumbnailNavigators,prevButtonProps:e.$attrs.prevButtonProps,nextButtonProps:e.$attrs.nextButtonProps,onStopSlideshow:a.stopSlideShow,pt:e.pt,unstyled:e.unstyled},null,8,["activeIndex","slideShowActive","containerId","value","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","prevButtonProps","nextButtonProps","onStopSlideshow","pt","unstyled"])):p("",!0)],16,we),e.$attrs.templates&&e.$attrs.templates.footer?(s(),h("div",c({key:2,class:e.cx("footer")},a.getPTOptions("footer")),[(s(),m(b(e.$attrs.templates.footer)))],16)):p("",!0)],16,ye)):p("",!0)}mt.render=Se;var ft={name:"Galleria",extends:Mt,inheritAttrs:!1,emits:["update:activeIndex","update:visible"],container:null,mask:null,data:function(){return{containerVisible:this.visible}},updated:function(){this.fullScreen&&this.visible&&(this.containerVisible=this.visible)},beforeUnmount:function(){this.fullScreen&&G(),this.mask=null,this.container&&(D.clear(this.container),this.container=null)},methods:{onBeforeEnter:function(t){D.set("modal",t,this.baseZIndex||this.$primevue.config.zIndex.modal)},onEnter:function(t){this.mask.style.zIndex=String(parseInt(t.style.zIndex,10)-1),kt(),this.focus()},onBeforeLeave:function(){!this.isUnstyled&&at(this.mask,"p-overlay-mask-leave")},onAfterLeave:function(t){D.clear(t),this.containerVisible=!1,G()},onActiveItemChange:function(t){this.activeIndex!==t&&this.$emit("update:activeIndex",t)},maskHide:function(){this.$emit("update:visible",!1)},containerRef:function(t){this.container=t},maskRef:function(t){this.mask=t},focus:function(){var t=this.container.$el.querySelector("[autofocus]");t&&t.focus()}},components:{GalleriaContent:mt,Portal:$t},directives:{focustrap:Kt}},xe=["aria-modal"];function Pe(e,t,n,i,o,a){var u=E("GalleriaContent"),l=E("Portal"),r=N("focustrap");return e.fullScreen?(s(),m(l,{key:0},{default:$(function(){return[o.containerVisible?(s(),h("div",c({key:0,ref:a.maskRef,class:[e.cx("mask"),e.maskClass],role:"dialog","aria-modal":e.fullScreen?"true":void 0},e.ptm("mask")),[k(Ot,c({name:"p-galleria",onBeforeEnter:a.onBeforeEnter,onEnter:a.onEnter,onBeforeLeave:a.onBeforeLeave,onAfterLeave:a.onAfterLeave,appear:""},e.ptm("transition")),{default:$(function(){return[e.visible?w((s(),m(u,c({key:0,ref:a.containerRef,onMaskHide:a.maskHide,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["onMaskHide","templates","onActiveitemChange","pt","unstyled"])),[[r]]):p("",!0)]}),_:1},16,["onBeforeEnter","onEnter","onBeforeLeave","onAfterLeave"])],16,xe)):p("",!0)]}),_:1})):(s(),m(u,c({key:1,templates:e.$slots,onActiveitemChange:a.onActiveItemChange,pt:e.pt,unstyled:e.unstyled},e.$props),null,16,["templates","onActiveitemChange","pt","unstyled"]))}ft.render=Pe;const ke={key:0},$e=["href"],Oe=["src"],_e={key:1},Ae=ot({__name:"PhotoSchedule",props:{photoScheduleID:{},onLoading:{type:Function},onLoaded:{type:Function}},setup(e){const t=rt();async function n(){if(i.onLoading(),i.photoScheduleID){const o=await Et({id:i.photoScheduleID});t.value=o.data,i.onLoaded()}}const i=e;return _t(()=>{n()}),(o,a)=>{const u=ft,l=st;return t.value?(s(),m(l,{key:0,header:t.value.name||o.$t("labels.noName"),pt:{contentContainer:{class:"photos-content"}}},{default:$(()=>[t.value.photos?(s(),h("div",ke,[k(u,{value:t.value.photos,numVisible:3,showThumbnails:!1,showIndicators:!0,showItemNavigators:!0},{item:$(r=>[g("a",{href:r.item.file,target:"_blank"},[g("img",{src:r.item.file,class:"image"},null,8,Oe)],8,$e)]),_:1},8,["value"])])):(s(),h("div",_e,[g("p",null,lt(o.$t("schedule.photo.noPhotos")),1)]))]),_:1},8,["header"])):p("",!0)}}}),Ce=ct(Ae,[["__scopeId","data-v-0fa33ccb"]]),Be={class:"contained-wrapper"},Te=ot({__name:"PhotoScheduleView",setup(e){const t=rt(!0),n=Bt(),i=()=>{t.value=!0},o=()=>{t.value=!1};return(a,u)=>{const l=st,r=bt;return s(),h("main",Be,[k(l,{header:a.$t("schedule.photo.title")},{default:$(()=>[At(lt(a.$t("schedule.photo.description")),1)]),_:1},8,["header"]),t.value?(s(),m(r,{key:0,width:"100%",height:"50vh"})):p("",!0),k(Ce,{photoScheduleID:Ct(n).params.id,onLoading:i,onLoaded:o},null,8,["photoScheduleID"])])}}}),Ke=ct(Te,[["__scopeId","data-v-9751f9b7"]]);export{Ke as default};