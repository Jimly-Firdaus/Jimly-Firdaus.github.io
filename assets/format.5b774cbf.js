import{J as B,f as d,K as b,L,ag as C,ah as R,e as x,ai as E,a4 as Q,V as H,M as _,s as M,aj as T,l as w,ak as P,q as A,R as V,al as K,am as $,an as j,ao as U}from"./index.f20dbbf3.js";import{u as D,a as F}from"./use-dark.04c59b3f.js";var W=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=d(()=>parseInt(e.lines,10)),u=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),o=d(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>b("div",{style:o.value,class:u.value},L(t.default))}});const z=b("div",{class:"q-space"});var G=B({name:"QSpace",setup(){return()=>z}}),J=B({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>b("div",{class:n.value},L(t.default))}}),X=B({name:"QItem",props:{...D,...C,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:u}}=_(),o=F(e,u),{hasLink:y,linkAttrs:q,linkClass:i,linkTag:r,navigateOnClick:h}=R(),s=x(null),f=x(null),v=d(()=>e.clickable===!0||y.value===!0||e.tag==="label"),c=d(()=>e.disable!==!0&&v.value===!0),m=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(o.value===!0?" q-item--dark":"")+(y.value===!0&&e.active===null?i.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(c.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),g=d(()=>{if(e.insetLevel===void 0)return null;const l=u.lang.rtl===!0?"Right":"Left";return{["padding"+l]:16+e.insetLevel*56+"px"}});function k(l){c.value===!0&&(f.value!==null&&(l.qKeyEvent!==!0&&document.activeElement===s.value?f.value.focus():document.activeElement===f.value&&s.value.focus()),h(l))}function p(l){if(c.value===!0&&E(l,13)===!0){Q(l),l.qKeyEvent=!0;const S=new MouseEvent("click",l);S.qKeyEvent=!0,s.value.dispatchEvent(S)}n("keyup",l)}function a(){const l=H(t.default,[]);return c.value===!0&&l.unshift(b("div",{class:"q-focus-helper",tabindex:-1,ref:f})),l}return()=>{const l={ref:s,class:m.value,style:g.value,role:"listitem",onClick:k,onKeyup:p};return c.value===!0?(l.tabindex=e.tabindex||"0",Object.assign(l,q.value)):v.value===!0&&(l["aria-disabled"]="true"),b(r.value,l,a())}}});function Y(e,t,n){let u;function o(){u!==void 0&&(T.remove(u),u=void 0)}return M(()=>{e.value===!0&&o()}),{removeFromHistory:o,addToHistory(){u={condition:()=>n.value===!0,handler:t},T.add(u)}}}const Z={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ee=["beforeShow","show","beforeHide","hide"];function te({showing:e,canShow:t,hideOnRouteChange:n,handleShow:u,handleHide:o,processOnMount:y}){const q=_(),{props:i,emit:r,proxy:h}=q;let s;function f(a){e.value===!0?m(a):v(a)}function v(a){if(i.disable===!0||a!==void 0&&a.qAnchorHandled===!0||t!==void 0&&t(a)!==!0)return;const l=i["onUpdate:modelValue"]!==void 0;l===!0&&(r("update:modelValue",!0),s=a,V(()=>{s===a&&(s=void 0)})),(i.modelValue===null||l===!1)&&c(a)}function c(a){e.value!==!0&&(e.value=!0,r("beforeShow",a),u!==void 0?u(a):r("show",a))}function m(a){if(i.disable===!0)return;const l=i["onUpdate:modelValue"]!==void 0;l===!0&&(r("update:modelValue",!1),s=a,V(()=>{s===a&&(s=void 0)})),(i.modelValue===null||l===!1)&&g(a)}function g(a){e.value!==!1&&(e.value=!1,r("beforeHide",a),o!==void 0?o(a):r("hide",a))}function k(a){i.disable===!0&&a===!0?i["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):a===!0!==e.value&&(a===!0?c:g)(s)}w(()=>i.modelValue,k),n!==void 0&&P(q)===!0&&w(()=>h.$route.fullPath,()=>{n.value===!0&&e.value===!0&&m()}),y===!0&&A(()=>{k(i.modelValue)});const p={show:v,hide:m,toggle:f};return Object.assign(h,p),p}function ae(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,K(t))}}}function le(){let e=null;const t=_();function n(){e!==null&&(clearTimeout(e),e=null)}return $(n),M(n),{removeTimeout:n,registerTimeout(u,o){n(),j(t)===!1&&(e=setTimeout(u,o))}}}function ne(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),U.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const I=["B","KB","MB","GB","TB","PB"];function ue(e){let t=0;for(;parseInt(e,10)>=1024&&t<I.length-1;)e/=1024,++t;return`${e.toFixed(1)}${I[t]}`}function oe(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function ie(e,t,n){if(n<=t)return t;const u=n-t+1;let o=t+(e-t)%u;return o<t&&(o=u+o),o===0?0:o}export{J as Q,ee as a,le as b,ne as c,te as d,Y as e,oe as f,ae as g,W as h,X as i,G as j,ue as k,ie as n,Z as u};
