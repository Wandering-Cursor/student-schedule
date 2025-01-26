import{B as $,U as R,R as q,G as X,H as se,a as re,o as r,c as p,b as g,y,m as a,t as F,f as B,w as W,n as C,d as v,e as k,x as u,v as m,I as de,T as ue,s as T,J as ce,A as U,K as N,L as pe,M as J,u as w,z as O,F as V,N as fe,O as H,P as Z,Q as he,S as ge,V as me,W as be,D as Q,E as S,X as ve,Y as ye,_ as Be,$ as Fe}from"./index-BzLreDEQ.js";import{s as Ce}from"./index-CP5m3weX.js";import{s as we,a as Se}from"./index-DClr5Hsg.js";import{g as ke}from"./datetime-DUZGPrj3.js";import{s as Ie}from"./index-CBdEFpNL.js";import"./index-Db9obl1G.js";import"./index-ByAQYbwd.js";import"./index-2FPRtT8S.js";var Le=function(n){var t=n.dt;return`
.p-fieldset {
    background: `.concat(t("fieldset.background"),`;
    border: 1px solid `).concat(t("fieldset.border.color"),`;
    border-radius: `).concat(t("fieldset.border.radius"),`;
    color: `).concat(t("fieldset.color"),`;
    padding: `).concat(t("fieldset.padding"),`;
    margin: 0;
}

.p-fieldset-legend {
    background: `).concat(t("fieldset.legend.background"),`;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    border-width: `).concat(t("fieldset.legend.border.width"),`;
    border-style: solid;
    border-color: `).concat(t("fieldset.legend.border.color"),`;
    padding: `).concat(t("fieldset.legend.padding"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend {
    padding: 0;
}

.p-fieldset-toggle-button {
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    display: flex;
    gap: `).concat(t("fieldset.legend.gap"),`;
    align-items: center;
    justify-content: center;
    padding: `).concat(t("fieldset.legend.padding"),`;
    background: transparent;
    border: 0 none;
    border-radius: `).concat(t("fieldset.legend.border.radius"),`;
    transition: background `).concat(t("fieldset.transition.duration"),", color ").concat(t("fieldset.transition.duration"),", outline-color ").concat(t("fieldset.transition.duration"),", box-shadow ").concat(t("fieldset.transition.duration"),`;
    outline-color: transparent;
}

.p-fieldset-legend-label {
    font-weight: `).concat(t("fieldset.legend.font.weight"),`;
}

.p-fieldset-toggle-button:focus-visible {
    box-shadow: `).concat(t("fieldset.legend.focus.ring.shadow"),`;
    outline: `).concat(t("fieldset.legend.focus.ring.width")," ").concat(t("fieldset.legend.focus.ring.style")," ").concat(t("fieldset.legend.focus.ring.color"),`;
    outline-offset: `).concat(t("fieldset.legend.focus.ring.offset"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover {
    color: `).concat(t("fieldset.legend.hover.color"),`;
    background: `).concat(t("fieldset.legend.hover.background"),`;
}

.p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.color"),`;
    transition: color `).concat(t("fieldset.transition.duration"),`;
}

.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
    color: `).concat(t("fieldset.toggle.icon.hover.color"),`;
}

.p-fieldset .p-fieldset-content {
    padding: `).concat(t("fieldset.content.padding"),`;
}
`)},De={root:function(n){var t=n.props;return["p-fieldset p-component",{"p-fieldset-toggleable":t.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},Pe=$.extend({name:"fieldset",theme:Le,classes:De}),Ee={name:"BaseFieldset",extends:T,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:Pe,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},_={name:"Fieldset",extends:Ee,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(n){this.id=n||R()},collapsed:function(n){this.d_collapsed=n}},mounted:function(){this.id=this.id||R()},methods:{toggle:function(n){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:n,value:this.d_collapsed})},onKeyDown:function(n){(n.code==="Enter"||n.code==="NumpadEnter"||n.code==="Space")&&(this.toggle(n),n.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend}},directives:{ripple:q},components:{PlusIcon:X,MinusIcon:se}};function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},L(e)}function G(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,o)}return t}function Y(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?G(Object(t),!0).forEach(function(o){Ue(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function Ue(e,n,t){return(n=Te(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Te(e){var n=Me(e,"string");return L(n)=="symbol"?n:n+""}function Me(e,n){if(L(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var o=t.call(e,n||"default");if(L(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var ze=["id"],Ae=["id","aria-controls","aria-expanded","aria-label"],Oe=["id","aria-labelledby"];function Ve(e,n,t,o,i,l){var s=re("ripple");return r(),p("fieldset",a({class:e.cx("root")},e.ptmi("root")),[g("legend",a({class:e.cx("legend")},e.ptm("legend")),[y(e.$slots,"legend",{toggleCallback:l.toggle},function(){return[e.toggleable?B("",!0):(r(),p("span",a({key:0,id:i.id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),F(e.legend),17,ze)),e.toggleable?W((r(),p("button",a({key:1,id:i.id+"_header",type:"button","aria-controls":i.id+"_content","aria-expanded":!i.d_collapsed,"aria-label":l.buttonAriaLabel,class:e.cx("toggleButton"),onClick:n[0]||(n[0]=function(){return l.toggle&&l.toggle.apply(l,arguments)}),onKeydown:n[1]||(n[1]=function(){return l.onKeyDown&&l.onKeyDown.apply(l,arguments)})},Y(Y({},e.toggleButtonProps),e.ptm("toggleButton"))),[y(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:i.d_collapsed,class:C(e.cx("toggleIcon"))},function(){return[(r(),v(k(i.d_collapsed?"PlusIcon":"MinusIcon"),a({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),g("span",a({class:e.cx("legendLabel")},e.ptm("legendLabel")),F(e.legend),17)],16,Ae)),[[s]]):B("",!0)]})],16),u(ue,a({name:"p-toggleable-content"},e.ptm("transition")),{default:m(function(){return[W(g("div",a({id:i.id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":i.id+"_header"},e.ptm("contentContainer")),[g("div",a({class:e.cx("content")},e.ptm("content")),[y(e.$slots,"default")],16)],16,Oe),[[de,!i.d_collapsed]])]}),_:3},16)],16)}_.render=Ve;var x={name:"UploadIcon",extends:ce};function je(e,n,t,o,i,l){return r(),p("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),n[0]||(n[0]=[g("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z",fill:"currentColor"},null,-1)]),16)}x.render=je;var $e=function(n){var t=n.dt;return`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: `.concat(t("progressbar.height"),`;
    background: `).concat(t("progressbar.background"),`;
    border-radius: `).concat(t("progressbar.border.radius"),`;
}

.p-progressbar-value {
    margin: 0;
    background: `).concat(t("progressbar.value.background"),`;
}

.p-progressbar-label {
    color: `).concat(t("progressbar.label.color"),`;
    font-size: `).concat(t("progressbar.label.font.size"),`;
    font-weight: `).concat(t("progressbar.label.font.weight"),`;
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    inset-block-start: 0;
    inset-inline-start: 0;
    inset-block-end: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}

@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`)},Ne={root:function(n){var t=n.instance;return["p-progressbar p-component",{"p-progressbar-determinate":t.determinate,"p-progressbar-indeterminate":t.indeterminate}]},value:"p-progressbar-value",label:"p-progressbar-label"},Ke=$.extend({name:"progressbar",theme:$e,classes:Ne}),Re={name:"BaseProgressBar",extends:T,props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},style:Ke,provide:function(){return{$pcProgressBar:this,$parentInstance:this}}},ee={name:"ProgressBar",extends:Re,inheritAttrs:!1,computed:{progressStyle:function(){return{width:this.value+"%",display:"flex"}},indeterminate:function(){return this.mode==="indeterminate"},determinate:function(){return this.mode==="determinate"}}},We=["aria-valuenow"];function He(e,n,t,o,i,l){return r(),p("div",a({role:"progressbar",class:e.cx("root"),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},e.ptmi("root")),[l.determinate?(r(),p("div",a({key:0,class:e.cx("value"),style:l.progressStyle},e.ptm("value")),[e.value!=null&&e.value!==0&&e.showValue?(r(),p("div",a({key:0,class:e.cx("label")},e.ptm("label")),[y(e.$slots,"default",{},function(){return[U(F(e.value+"%"),1)]})],16)):B("",!0)],16)):l.indeterminate?(r(),p("div",a({key:1,class:e.cx("value")},e.ptm("value")),null,16)):B("",!0)],16,We)}ee.render=He;var Ze=function(n){var t=n.dt;return`
.p-fileupload input[type="file"] {
    display: none;
}

.p-fileupload-advanced {
    border: 1px solid `.concat(t("fileupload.border.color"),`;
    border-radius: `).concat(t("fileupload.border.radius"),`;
    background: `).concat(t("fileupload.background"),`;
    color: `).concat(t("fileupload.color"),`;
}

.p-fileupload-header {
    display: flex;
    align-items: center;
    padding: `).concat(t("fileupload.header.padding"),`;
    background: `).concat(t("fileupload.header.background"),`;
    color: `).concat(t("fileupload.header.color"),`;
    border-style: solid;
    border-width: `).concat(t("fileupload.header.border.width"),`;
    border-color: `).concat(t("fileupload.header.border.color"),`;
    border-radius: `).concat(t("fileupload.header.border.radius"),`;
    gap: `).concat(t("fileupload.header.gap"),`;
}

.p-fileupload-content {
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    gap: `).concat(t("fileupload.content.gap"),`;
    transition: border-color `).concat(t("fileupload.transition.duration"),`;
    padding: `).concat(t("fileupload.content.padding"),`;
}

.p-fileupload-content .p-progressbar {
    width: 100%;
    height: `).concat(t("fileupload.progressbar.height"),`;
}

.p-fileupload-file-list {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("fileupload.filelist.gap"),`;
}

.p-fileupload-file {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: `).concat(t("fileupload.file.padding"),`;
    border-block-end: 1px solid `).concat(t("fileupload.file.border.color"),`;
    gap: `).concat(t("fileupload.file.gap"),`;
}

.p-fileupload-file:last-child {
    border-block-end: 0;
}

.p-fileupload-file-info {
    display: flex;
    flex-direction: column;
    gap: `).concat(t("fileupload.file.info.gap"),`;
}

.p-fileupload-file-thumbnail {
    flex-shrink: 0;
}

.p-fileupload-file-actions {
    margin-inline-start: auto;
}

.p-fileupload-highlight {
    border: 1px dashed `).concat(t("fileupload.content.highlight.border.color"),`;
}

.p-fileupload-basic {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: `).concat(t("fileupload.basic.gap"),`;
}
`)},Ge={root:function(n){var t=n.props;return["p-fileupload p-fileupload-".concat(t.mode," p-component")]},header:"p-fileupload-header",pcChooseButton:"p-fileupload-choose-button",pcUploadButton:"p-fileupload-upload-button",pcCancelButton:"p-fileupload-cancel-button",content:"p-fileupload-content",fileList:"p-fileupload-file-list",file:"p-fileupload-file",fileThumbnail:"p-fileupload-file-thumbnail",fileInfo:"p-fileupload-file-info",fileName:"p-fileupload-file-name",fileSize:"p-fileupload-file-size",pcFileBadge:"p-fileupload-file-badge",fileActions:"p-fileupload-file-actions",pcFileRemoveButton:"p-fileupload-file-remove-button"},Ye=$.extend({name:"fileupload",theme:Ze,classes:Ge}),qe={name:"BaseFileUpload",extends:T,props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},chooseIcon:{type:String,default:void 0},uploadIcon:{type:String,default:void 0},cancelIcon:{type:String,default:void 0},style:null,class:null,chooseButtonProps:{type:null,default:null},uploadButtonProps:{type:Object,default:function(){return{severity:"secondary"}}},cancelButtonProps:{type:Object,default:function(){return{severity:"secondary"}}}},style:Ye,provide:function(){return{$pcFileUpload:this,$parentInstance:this}}},ne={name:"FileContent",hostName:"FileUpload",extends:T,emits:["remove"],props:{files:{type:Array,default:function(){return[]}},badgeSeverity:{type:String,default:"warn"},badgeValue:{type:String,default:null},previewWidth:{type:Number,default:50},templates:{type:null,default:null}},methods:{formatSize:function(n){var t,o=1024,i=3,l=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(l[0]);var s=Math.floor(Math.log(n)/Math.log(o)),d=parseFloat((n/Math.pow(o,s)).toFixed(i));return"".concat(d," ").concat(l[s])}},components:{Button:N,Badge:pe,TimesIcon:J}},Xe=["alt","src","width"];function Je(e,n,t,o,i,l){var s=w("Badge"),d=w("TimesIcon"),b=w("Button");return r(!0),p(V,null,O(t.files,function(c,f){return r(),p("div",a({key:c.name+c.type+c.size,class:e.cx("file"),ref_for:!0},e.ptm("file")),[g("img",a({role:"presentation",class:e.cx("fileThumbnail"),alt:c.name,src:c.objectURL,width:t.previewWidth,ref_for:!0},e.ptm("fileThumbnail")),null,16,Xe),g("div",a({class:e.cx("fileInfo"),ref_for:!0},e.ptm("fileInfo")),[g("div",a({class:e.cx("fileName"),ref_for:!0},e.ptm("fileName")),F(c.name),17),g("span",a({class:e.cx("fileSize"),ref_for:!0},e.ptm("fileSize")),F(l.formatSize(c.size)),17)],16),u(s,{value:t.badgeValue,class:C(e.cx("pcFileBadge")),severity:t.badgeSeverity,unstyled:e.unstyled,pt:e.ptm("pcFileBadge")},null,8,["value","class","severity","unstyled","pt"]),g("div",a({class:e.cx("fileActions"),ref_for:!0},e.ptm("fileActions")),[u(b,{onClick:function(K){return e.$emit("remove",f)},text:"",rounded:"",severity:"danger",class:C(e.cx("pcFileRemoveButton")),unstyled:e.unstyled,pt:e.ptm("pcFileRemoveButton")},{icon:m(function(I){return[t.templates.fileremoveicon?(r(),v(k(t.templates.fileremoveicon),{key:0,class:C(I.class),file:c,index:f},null,8,["class","file","index"])):(r(),v(d,a({key:1,class:I.class,"aria-hidden":"true",ref_for:!0},e.ptm("pcFileRemoveButton").icon),null,16,["class"]))]}),_:2},1032,["onClick","class","unstyled","pt"])],16)],16)}),128)}ne.render=Je;function A(e){return xe(e)||_e(e)||te(e)||Qe()}function Qe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _e(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xe(e){if(Array.isArray(e))return j(e)}function E(e,n){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=te(e))||n){t&&(e=t);var o=0,i=function(){};return{s:i,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,s=!0,d=!1;return{s:function(){t=t.call(e)},n:function(){var c=t.next();return s=c.done,c},e:function(c){d=!0,l=c},f:function(){try{s||t.return==null||t.return()}finally{if(d)throw l}}}}function te(e,n){if(e){if(typeof e=="string")return j(e,n);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(e,n):void 0}}function j(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,o=Array(n);t<n;t++)o[t]=e[t];return o}var le={name:"FileUpload",extends:qe,inheritAttrs:!1,emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove","remove-uploaded-file"],duplicateIEEvent:!1,data:function(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null,uploadedFiles:[]}},methods:{upload:function(){this.hasFiles&&this.uploader()},onBasicUploaderClick:function(n){n.button===0&&this.$refs.fileInput.click()},onFileSelect:function(n){if(n.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.isBasic&&this.hasFiles&&(this.files=[]),this.messages=[],this.files=this.files||[];var t=n.dataTransfer?n.dataTransfer.files:n.target.files,o=E(t),i;try{for(o.s();!(i=o.n()).done;){var l=i.value;!this.isFileSelected(l)&&!this.isFileLimitExceeded()&&this.validate(l)&&(this.isImage(l)&&(l.objectURL=window.URL.createObjectURL(l)),this.files.push(l))}}catch(s){o.e(s)}finally{o.f()}this.$emit("select",{originalEvent:n,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.uploader(),n.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose:function(){this.$refs.fileInput.click()},uploader:function(){var n=this;if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{var t=new XMLHttpRequest,o=new FormData;this.$emit("before-upload",{xhr:t,formData:o});var i=E(this.files),l;try{for(i.s();!(l=i.n()).done;){var s=l.value;o.append(this.name,s,s.name)}}catch(d){i.e(d)}finally{i.f()}t.upload.addEventListener("progress",function(d){d.lengthComputable&&(n.progress=Math.round(d.loaded*100/d.total)),n.$emit("progress",{originalEvent:d,progress:n.progress})}),t.onreadystatechange=function(){if(t.readyState===4){var d;n.progress=0,t.status>=200&&t.status<300?(n.fileLimit&&(n.uploadedFileCount+=n.files.length),n.$emit("upload",{xhr:t,files:n.files})):n.$emit("error",{xhr:t,files:n.files}),(d=n.uploadedFiles).push.apply(d,A(n.files)),n.clear()}},t.open("POST",this.url,!0),this.$emit("before-send",{xhr:t,formData:o}),t.withCredentials=this.withCredentials,t.send(o)}},clear:function(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus:function(){this.focused=!0},onBlur:function(){this.focused=!1},isFileSelected:function(n){if(this.files&&this.files.length){var t=E(this.files),o;try{for(t.s();!(o=t.n()).done;){var i=o.value;if(i.name+i.type+i.size===n.name+n.type+n.size)return!0}}catch(l){t.e(l)}finally{t.f()}}return!1},isIE11:function(){return!!window.MSInputMethodContext&&!!document.documentMode},validate:function(n){return this.accept&&!this.isFileTypeValid(n)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",n.name).replace("{1}",this.accept)),!1):this.maxFileSize&&n.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",n.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid:function(n){var t=this.accept.split(",").map(function(d){return d.trim()}),o=E(t),i;try{for(o.s();!(i=o.n()).done;){var l=i.value,s=this.isWildcard(l)?this.getTypeClass(n.type)===this.getTypeClass(l):n.type==l||this.getFileExtension(n).toLowerCase()===l.toLowerCase();if(s)return!0}}catch(d){o.e(d)}finally{o.f()}return!1},getTypeClass:function(n){return n.substring(0,n.indexOf("/"))},isWildcard:function(n){return n.indexOf("*")!==-1},getFileExtension:function(n){return"."+n.name.split(".").pop()},isImage:function(n){return/^image\//.test(n.type)},onDragEnter:function(n){this.disabled||(n.stopPropagation(),n.preventDefault())},onDragOver:function(n){this.disabled||(!this.isUnstyled&&fe(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!0),n.stopPropagation(),n.preventDefault())},onDragLeave:function(){this.disabled||(!this.isUnstyled&&H(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1))},onDrop:function(n){if(!this.disabled){!this.isUnstyled&&H(this.$refs.content,"p-fileupload-highlight"),this.$refs.content.setAttribute("data-p-highlight",!1),n.stopPropagation(),n.preventDefault();var t=n.dataTransfer?n.dataTransfer.files:n.target.files,o=this.multiple||t&&t.length===1;o&&this.onFileSelect(n)}},remove:function(n){this.clearInputElement();var t=this.files.splice(n,1)[0];this.files=A(this.files),this.$emit("remove",{file:t,files:this.files})},removeUploadedFile:function(n){var t=this.uploadedFiles.splice(n,1)[0];this.uploadedFiles=A(this.uploadedFiles),this.$emit("remove-uploaded-file",{file:t,files:this.uploadedFiles})},clearInputElement:function(){this.$refs.fileInput.value=""},clearIEInput:function(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize:function(n){var t,o=1024,i=3,l=((t=this.$primevue.config.locale)===null||t===void 0?void 0:t.fileSizeTypes)||["B","KB","MB","GB","TB","PB","EB","ZB","YB"];if(n===0)return"0 ".concat(l[0]);var s=Math.floor(Math.log(n)/Math.log(o)),d=parseFloat((n/Math.pow(o,s)).toFixed(i));return"".concat(d," ").concat(l[s])},isFileLimitExceeded:function(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit:function(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose:function(){this.messages=null}},computed:{isAdvanced:function(){return this.mode==="advanced"},isBasic:function(){return this.mode==="basic"},chooseButtonClass:function(){return[this.cx("pcChooseButton"),this.class]},basicFileChosenLabel:function(){var n;if(this.auto)return this.chooseButtonLabel;if(this.hasFiles){var t;return this.files&&this.files.length===1?this.files[0].name:(t=this.$primevue.config.locale)===null||t===void 0||(t=t.fileChosenMessage)===null||t===void 0?void 0:t.replace("{0}",this.files.length)}return((n=this.$primevue.config.locale)===null||n===void 0?void 0:n.noFileChosenMessage)||""},hasFiles:function(){return this.files&&this.files.length>0},hasUploadedFiles:function(){return this.uploadedFiles&&this.uploadedFiles.length>0},chooseDisabled:function(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled:function(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled:function(){return this.disabled||!this.hasFiles},chooseButtonLabel:function(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel:function(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel:function(){return this.cancelLabel||this.$primevue.config.locale.cancel},completedLabel:function(){return this.$primevue.config.locale.completed},pendingLabel:function(){return this.$primevue.config.locale.pending}},components:{Button:N,ProgressBar:ee,Message:Ce,FileContent:ne,PlusIcon:X,UploadIcon:x,TimesIcon:J},directives:{ripple:q}},en=["multiple","accept","disabled"],nn=["files"],tn=["accept","disabled","multiple"];function ln(e,n,t,o,i,l){var s=w("Button"),d=w("ProgressBar"),b=w("Message"),c=w("FileContent");return l.isAdvanced?(r(),p("div",a({key:0,class:e.cx("root")},e.ptmi("root")),[g("input",a({ref:"fileInput",type:"file",onChange:n[0]||(n[0]=function(){return l.onFileSelect&&l.onFileSelect.apply(l,arguments)}),multiple:e.multiple,accept:e.accept,disabled:l.chooseDisabled},e.ptm("input")),null,16,en),g("div",a({class:e.cx("header")},e.ptm("header")),[y(e.$slots,"header",{files:i.files,uploadedFiles:i.uploadedFiles,chooseCallback:l.choose,uploadCallback:l.uploader,clearCallback:l.clear},function(){return[u(s,a({label:l.chooseButtonLabel,class:l.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onClick:l.choose,onKeydown:Z(l.choose,["enter"]),onFocus:l.onFocus,onBlur:l.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:m(function(f){return[y(e.$slots,"chooseicon",{},function(){return[(r(),v(k(e.chooseIcon?"span":"PlusIcon"),a({class:[f.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onClick","onKeydown","onFocus","onBlur","pt"]),e.showUploadButton?(r(),v(s,a({key:0,class:e.cx("pcUploadButton"),label:l.uploadButtonLabel,onClick:l.uploader,disabled:l.uploadDisabled,unstyled:e.unstyled},e.uploadButtonProps,{pt:e.ptm("pcUploadButton")}),{icon:m(function(f){return[y(e.$slots,"uploadicon",{},function(){return[(r(),v(k(e.uploadIcon?"span":"UploadIcon"),a({class:[f.class,e.uploadIcon],"aria-hidden":"true"},e.ptm("pcUploadButton").icon,{"data-pc-section":"uploadbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):B("",!0),e.showCancelButton?(r(),v(s,a({key:1,class:e.cx("pcCancelButton"),label:l.cancelButtonLabel,onClick:l.clear,disabled:l.cancelDisabled,unstyled:e.unstyled},e.cancelButtonProps,{pt:e.ptm("pcCancelButton")}),{icon:m(function(f){return[y(e.$slots,"cancelicon",{},function(){return[(r(),v(k(e.cancelIcon?"span":"TimesIcon"),a({class:[f.class,e.cancelIcon],"aria-hidden":"true"},e.ptm("pcCancelButton").icon,{"data-pc-section":"cancelbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","label","onClick","disabled","unstyled","pt"])):B("",!0)]})],16),g("div",a({ref:"content",class:e.cx("content"),onDragenter:n[1]||(n[1]=function(){return l.onDragEnter&&l.onDragEnter.apply(l,arguments)}),onDragover:n[2]||(n[2]=function(){return l.onDragOver&&l.onDragOver.apply(l,arguments)}),onDragleave:n[3]||(n[3]=function(){return l.onDragLeave&&l.onDragLeave.apply(l,arguments)}),onDrop:n[4]||(n[4]=function(){return l.onDrop&&l.onDrop.apply(l,arguments)})},e.ptm("content"),{"data-p-highlight":!1}),[y(e.$slots,"content",{files:i.files,uploadedFiles:i.uploadedFiles,removeUploadedFileCallback:l.removeUploadedFile,removeFileCallback:l.remove,progress:i.progress,messages:i.messages},function(){return[l.hasFiles?(r(),v(d,{key:0,value:i.progress,showValue:!1,unstyled:e.unstyled,pt:e.ptm("pcProgressbar")},null,8,["value","unstyled","pt"])):B("",!0),(r(!0),p(V,null,O(i.messages,function(f){return r(),v(b,{key:f,severity:"error",onClose:l.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:m(function(){return[U(F(f),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),l.hasFiles?(r(),p("div",{key:1,class:C(e.cx("fileList"))},[u(c,{files:i.files,onRemove:l.remove,badgeValue:l.pendingLabel,previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):B("",!0),l.hasUploadedFiles?(r(),p("div",{key:2,class:C(e.cx("fileList"))},[u(c,{files:i.uploadedFiles,onRemove:l.removeUploadedFile,badgeValue:l.completedLabel,badgeSeverity:"success",previewWidth:e.previewWidth,templates:e.$slots,unstyled:e.unstyled,pt:e.pt},null,8,["files","onRemove","badgeValue","previewWidth","templates","unstyled","pt"])],2)):B("",!0)]}),e.$slots.empty&&!l.hasFiles&&!l.hasUploadedFiles?(r(),p("div",he(a({key:0},e.ptm("empty"))),[y(e.$slots,"empty")],16)):B("",!0)],16)],16)):l.isBasic?(r(),p("div",a({key:1,class:e.cx("root")},e.ptmi("root")),[(r(!0),p(V,null,O(i.messages,function(f){return r(),v(b,{key:f,severity:"error",onClose:l.onMessageClose,unstyled:e.unstyled,pt:e.ptm("pcMessage")},{default:m(function(){return[U(F(f),1)]}),_:2},1032,["onClose","unstyled","pt"])}),128)),u(s,a({label:l.chooseButtonLabel,class:l.chooseButtonClass,style:e.style,disabled:e.disabled,unstyled:e.unstyled,onMouseup:l.onBasicUploaderClick,onKeydown:Z(l.choose,["enter"]),onFocus:l.onFocus,onBlur:l.onBlur},e.chooseButtonProps,{pt:e.ptm("pcChooseButton")}),{icon:m(function(f){return[y(e.$slots,"chooseicon",{},function(){return[(r(),v(k(e.chooseIcon?"span":"PlusIcon"),a({class:[f.class,e.chooseIcon],"aria-hidden":"true"},e.ptm("pcChooseButton").icon),null,16,["class"]))]})]}),_:3},16,["label","class","style","disabled","unstyled","onMouseup","onKeydown","onFocus","onBlur","pt"]),e.auto?B("",!0):y(e.$slots,"filelabel",{key:0,class:C(e.cx("filelabel"))},function(){return[g("span",{class:C(e.cx("filelabel")),files:i.files},F(l.basicFileChosenLabel),11,nn)]}),g("input",a({ref:"fileInput",type:"file",accept:e.accept,disabled:e.disabled,multiple:e.multiple,onChange:n[5]||(n[5]=function(){return l.onFileSelect&&l.onFileSelect.apply(l,arguments)}),onFocus:n[6]||(n[6]=function(){return l.onFocus&&l.onFocus.apply(l,arguments)}),onBlur:n[7]||(n[7]=function(){return l.onBlur&&l.onBlur.apply(l,arguments)})},e.ptm("input")),null,16,tn)],16)):B("",!0)}le.render=ln;async function on(e){const n=await ge.getClient(),t=me().getToken();if(!t)throw new Error("Token not set");let o=be(t);const i=new FormData;return i.append("for_date",ke(e.forDate)),i.append("name",e.name),e.photos.forEach((l,s)=>{i.append(`photos[${s}]`,l)}),e.teacherSchedulePhotos.forEach((l,s)=>{i.append(`teacher_schedule_photos[${s}]`,l)}),e.file&&i.append("file",e.file),await n.admin_schedule_create(null,i,o)}const an={class:"contained-wrapper"},sn={for:"photoScheduleName"},rn=Q({__name:"UploadScheduleForm",setup(e){const n=S(!0),t=ve(),i=S((()=>{const h=new Date;return h.setDate(h.getDate()+1),h})()),l=S(""),s=S([]),d=S([]),b=S(null),c=h=>{s.value=h.files},f=h=>{d.value=h.files},I=h=>{b.value=h.files[0]},K=async()=>{n.value=!1;try{await on({forDate:i.value,photos:s.value,teacherSchedulePhotos:d.value,file:b.value,name:l.value})}catch(h){t.add({severity:"error",summary:"Error",detail:h.message,life:5e3}),n.value=!0;return}t.add({severity:"success",summary:"Success",detail:"admin.schedule.upload.success",life:3e3}),n.value=!0};return(h,D)=>{const ie=we,P=_,oe=Se,M=le,ae=N;return r(),p("main",an,[u(P,{legend:h.$t("admin.schedule.upload.date")},{default:m(()=>[u(ie,{modelValue:i.value,"onUpdate:modelValue":D[0]||(D[0]=z=>i.value=z)},null,8,["modelValue"])]),_:1},8,["legend"]),u(P,{legend:h.$t("admin.schedule.upload.photos"),pt:{content:{class:"contained-wrapper"}}},{default:m(()=>[u(oe,{variant:"on",class:"flex"},{default:m(()=>[u(ye(Ie),{modelValue:l.value,"onUpdate:modelValue":D[1]||(D[1]=z=>l.value=z),id:"photoScheduleName"},null,8,["modelValue"]),g("label",sn,F(h.$t("admin.schedule.upload.name")),1)]),_:1}),u(M,{onSelect:c,multiple:!0,customUpload:"",accept:"image/*",maxFileSize:1e6,"show-upload-button":!1})]),_:1},8,["legend"]),u(P,{legend:h.$t("admin.schedule.upload.teacherSchedulePhotos")},{default:m(()=>[u(M,{onSelect:f,multiple:!0,customUpload:"",accept:"image/*",maxFileSize:1e6,"show-upload-button":!1})]),_:1},8,["legend"]),u(P,{legend:h.$t("admin.schedule.upload.file")},{default:m(()=>[u(M,{onSelect:I,customUpload:"",accept:".csv",maxFileSize:1e6,"show-upload-button":!1})]),_:1},8,["legend"]),u(ae,{label:h.$t("labels.submit"),onClick:K,disabled:!n.value},null,8,["label","disabled"])])}}}),dn=Be(rn,[["__scopeId","data-v-cff9fbbd"]]),un={class:"contained-wrapper"},yn=Q({__name:"UploadScheduleView",setup(e){return(n,t)=>{const o=Fe;return r(),p("main",null,[g("div",un,[u(o,{header:n.$t("admin.schedule.upload.title")},{default:m(()=>[U(F(n.$t("admin.schedule.upload.description")),1)]),_:1},8,["header"]),u(o,null,{default:m(()=>[u(dn)]),_:1})])])}}});export{yn as default};
