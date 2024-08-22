/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=globalThis,B=O.ShadowRoot&&(O.ShadyCSS===void 0||O.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),F=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(B&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&F.set(e,t))}return t}toString(){return this.cssText}};const ot=o=>new rt(typeof o=="string"?o:o+"",void 0,V),dt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,r,n)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[n+1],o[0]);return new rt(e,o,V)},pt=(o,t)=>{if(B)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=O.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,o.appendChild(i)}},Y=B?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ot(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:ut,getOwnPropertyDescriptor:gt,getOwnPropertyNames:wt,getOwnPropertySymbols:bt,getPrototypeOf:mt}=Object,w=globalThis,K=w.trustedTypes,yt=K?K.emptyScript:"",L=w.reactiveElementPolyfillSupport,A=(o,t)=>o,M={toAttribute(o,t){switch(t){case Boolean:o=o?yt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},j=(o,t)=>!ft(o,t),X={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:j};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);class v extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=X){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&ut(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=gt(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return r==null?void 0:r.call(this)},set(s){const l=r==null?void 0:r.call(this);n.call(this,s),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??X}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;const t=mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){const e=this.properties,i=[...wt(e),...bt(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(Y(r))}else t!==void 0&&e.push(Y(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var n;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const s=(((n=i.converter)==null?void 0:n.toAttribute)!==void 0?i.converter:M).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(t,e){var n;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const s=i.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((n=s.converter)==null?void 0:n.fromAttribute)!==void 0?s.converter:M;this._$Em=r,this[r]=l.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??j)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,s]of r)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var n;return(n=r.hostUpdate)==null?void 0:n.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[A("elementProperties")]=new Map,v[A("finalized")]=new Map,L==null||L({ReactiveElement:v}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis,R=E.trustedTypes,Z=R?R.createPolicy("lit-html",{createHTML:o=>o}):void 0,st="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,nt="?"+g,vt=`<${nt}>`,y=document,S=()=>y.createComment(""),U=o=>o===null||typeof o!="object"&&typeof o!="function",W=Array.isArray,$t=o=>W(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",I=`[ 	
\f\r]`,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,J=/>/g,b=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,tt=/"/g,at=/^(?:script|style|textarea|title)$/i,xt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),z=xt(1),$=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),et=new WeakMap,m=y.createTreeWalker(y,129);function lt(o,t){if(!W(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const _t=(o,t)=>{const e=o.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",s=_;for(let l=0;l<e;l++){const a=o[l];let h,d,c=-1,f=0;for(;f<a.length&&(s.lastIndex=f,d=s.exec(a),d!==null);)f=s.lastIndex,s===_?d[1]==="!--"?s=G:d[1]!==void 0?s=J:d[2]!==void 0?(at.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=b):d[3]!==void 0&&(s=b):s===b?d[0]===">"?(s=r??_,c=-1):d[1]===void 0?c=-2:(c=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?b:d[3]==='"'?tt:Q):s===tt||s===Q?s=b:s===G||s===J?s=_:(s=b,r=void 0);const u=s===b&&o[l+1].startsWith("/>")?" ":"";n+=s===_?a+vt:c>=0?(i.push(h),a.slice(0,c)+st+a.slice(c)+g+u):a+g+(c===-2?l:u)}return[lt(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class P{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const l=t.length-1,a=this.parts,[h,d]=_t(t,e);if(this.el=P.createElement(h,i),m.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=m.nextNode())!==null&&a.length<l;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(st)){const f=d[s++],u=r.getAttribute(c).split(g),T=/([.?@])?(.*)/.exec(f);a.push({type:1,index:n,name:T[2],strings:u,ctor:T[1]==="."?Et:T[1]==="?"?kt:T[1]==="@"?St:N}),r.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:n}),r.removeAttribute(c));if(at.test(r.tagName)){const c=r.textContent.split(g),f=c.length-1;if(f>0){r.textContent=R?R.emptyScript:"";for(let u=0;u<f;u++)r.append(c[u],S()),m.nextNode(),a.push({type:2,index:++n});r.append(c[f],S())}}}else if(r.nodeType===8)if(r.data===nt)a.push({type:2,index:n});else{let c=-1;for(;(c=r.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:n}),c+=g.length-1}n++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function x(o,t,e=o,i){var s,l;if(t===$)return t;let r=i!==void 0?(s=e.o)==null?void 0:s[i]:e.l;const n=U(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==n&&((l=r==null?void 0:r._$AO)==null||l.call(r,!1),n===void 0?r=void 0:(r=new n(o),r._$AT(o,e,i)),i!==void 0?(e.o??(e.o=[]))[i]=r:e.l=r),r!==void 0&&(t=x(o,r._$AS(o,t.values),r,i)),t}class At{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??y).importNode(e,!0);m.currentNode=r;let n=m.nextNode(),s=0,l=0,a=i[0];for(;a!==void 0;){if(s===a.index){let h;a.type===2?h=new C(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new Ut(n,this,t)),this._$AV.push(h),a=i[++l]}s!==(a==null?void 0:a.index)&&(n=m.nextNode(),s++)}return m.currentNode=y,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class C{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this.v}constructor(t,e,i,r){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this.v=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),U(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==$&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):$t(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(y.createTextNode(t)),this._$AH=t}$(t){var n;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=P.createElement(lt(i.h,i.h[0]),this.options)),i);if(((n=this._$AH)==null?void 0:n._$AD)===r)this._$AH.p(e);else{const s=new At(r,this),l=s.u(this.options);s.p(e),this.T(l),this._$AH=s}}_$AC(t){let e=et.get(t.strings);return e===void 0&&et.set(t.strings,e=new P(t)),e}k(t){W(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new C(this.O(S()),this.O(S()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this.v=t,(e=this._$AP)==null||e.call(this,t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,r){const n=this.strings;let s=!1;if(n===void 0)t=x(this,t,e,0),s=!U(t)||t!==this._$AH&&t!==$,s&&(this._$AH=t);else{const l=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=x(this,l[i+a],e,a),h===$&&(h=this._$AH[a]),s||(s=!U(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}s&&!r&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class kt extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class St extends N{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??p)===$)return;const i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const q=E.litHtmlPolyfillSupport;q==null||q(P,C),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.2.0");const Pt=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const n=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new C(t.insertBefore(S(),n),n,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let k=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this.o)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.o)==null||t.setConnected(!1)}render(){return $}};var it;k._$litElement$=!0,k.finalized=!0,(it=globalThis.litElementHydrateSupport)==null||it.call(globalThis,{LitElement:k});const D=globalThis.litElementPolyfillSupport;D==null||D({LitElement:k});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:j},zt=(o=Tt,t,e)=>{const{kind:i,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,o),i==="accessor"){const{name:s}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(s,a,o)},init(l){return l!==void 0&&this.P(s,void 0,o),l}}}if(i==="setter"){const{name:s}=e;return function(l){const a=this[s];t.call(this,l),this.requestUpdate(s,a,o)}}throw Error("Unsupported decorator location: "+i)};function Ot(o){return(t,e)=>typeof e=="object"?zt(o,t,e):((i,r,n)=>{const s=r.hasOwnProperty(n);return r.constructor.createProperty(n,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(r,n):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=Symbol();class Rt{get taskComplete(){return this.t||(this.i===1?this.t=new Promise((t,e)=>{this.o=t,this.h=e}):this.i===3?this.t=Promise.reject(this.l):this.t=Promise.resolve(this.u)),this.t}constructor(t,e,i){var n;this.p=0,this.i=0,(this._=t).addController(this);const r=typeof e=="object"?e:{task:e,args:i};this.v=r.task,this.j=r.args,this.m=r.argsEqual??Ht,this.k=r.onComplete,this.A=r.onError,this.autoRun=r.autoRun??!0,"initialValue"in r&&(this.u=r.initialValue,this.i=2,this.O=(n=this.T)==null?void 0:n.call(this))}hostUpdate(){this.autoRun===!0&&this.S()}hostUpdated(){this.autoRun==="afterUpdate"&&this.S()}T(){if(this.j===void 0)return;const t=this.j();if(!Array.isArray(t))throw Error("The args function must return an array");return t}async S(){const t=this.T(),e=this.O;this.O=t,t===e||t===void 0||e!==void 0&&this.m(e,t)||await this.run(t)}async run(t){var s,l,a,h,d;let e,i;t??(t=this.T()),this.O=t,this.i===1?(s=this.q)==null||s.abort():(this.t=void 0,this.o=void 0,this.h=void 0),this.i=1,this.autoRun==="afterUpdate"?queueMicrotask(()=>this._.requestUpdate()):this._.requestUpdate();const r=++this.p;this.q=new AbortController;let n=!1;try{e=await this.v(t,{signal:this.q.signal})}catch(c){n=!0,i=c}if(this.p===r){if(e===Mt)this.i=0;else{if(n===!1){try{(l=this.k)==null||l.call(this,e)}catch{}this.i=2,(a=this.o)==null||a.call(this,e)}else{try{(h=this.A)==null||h.call(this,i)}catch{}this.i=3,(d=this.h)==null||d.call(this,i)}this.u=e,this.l=i}this._.requestUpdate()}}abort(t){var e;this.i===1&&((e=this.q)==null||e.abort(t))}get value(){return this.u}get error(){return this.l}get status(){return this.i}render(t){var e,i,r,n;switch(this.i){case 0:return(e=t.initial)==null?void 0:e.call(t);case 1:return(i=t.pending)==null?void 0:i.call(t);case 2:return(r=t.complete)==null?void 0:r.call(t,this.value);case 3:return(n=t.error)==null?void 0:n.call(t,this.error);default:throw Error("Unexpected status: "+this.i)}}}const Ht=(o,t)=>o===t||o.length===t.length&&o.every((e,i)=>!j(e,t[i]));var jt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nt(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ht={exports:{}};(function(o,t){(function(e,i){var r=r||{};typeof r=="function"&&r.amd?r([],i):o.exports=i()})(jt,function(){const e={year:31536e6,month:2628e6,day:864e5,hour:36e5,minute:6e4,second:1e3},i="en",r={numeric:"auto"};function n(s){s={locale:(s=s||{}).locale||i,options:{...r,...s.options}},this.rtf=new Intl.RelativeTimeFormat(s.locale,s.options)}return n.prototype={from(s,l){const a=s-(l||new Date);for(let h in e)if(Math.abs(a)>e[h]||h=="second")return this.rtf.format(Math.round(a/e[h]),h)}},n})})(ht);var Lt=ht.exports;const It=Nt(Lt),qt='*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.visible{visibility:visible}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-left-4{left:-1rem}.z-10{z-index:10}.-mx-2{margin-left:-.5rem;margin-right:-.5rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.hidden{display:none}.h-8{height:2rem}.w-1\\/6{width:16.666667%}.w-8{width:2rem}.w-full{width:100%}.max-w-full{max-width:100%}.flex-1{flex:1 1 0%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-zoom-in{cursor:zoom-in}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.gap-12{gap:3rem}.gap-4{gap:1rem}.rounded-full{border-radius:9999px}.bg-gray-400{--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity))}.px-2{padding-left:.5rem;padding-right:.5rem}.py-12{padding-top:3rem;padding-bottom:3rem}.pl-8{padding-left:2rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.font-medium{font-weight:500}.font-normal{font-weight:400}.leading-8{line-height:2rem}.text-slate-400{--tw-text-opacity: 1;color:rgb(148 163 184 / var(--tw-text-opacity))}.text-slate-500{--tw-text-opacity: 1;color:rgb(100 116 139 / var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity: 1;color:rgb(51 65 85 / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.ring-2{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-white{--tw-ring-opacity: 1;--tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity))}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.lightbox{opacity:0;visibility:hidden;position:fixed;left:0;right:0;top:0;bottom:0;z-index:-1;display:flex;align-items:center;justify-content:center;transition:all .15s ease-in}.lightbox.show{background-color:#000000d9;opacity:1;visibility:visible;z-index:1000}.lightbox img{max-width:90%}.lightbox .close-lightbox{cursor:pointer;position:absolute;top:30px;right:50px;width:20px;height:20px}.lightbox .close-lightbox:after,.lightbox .close-lightbox:before{content:"";width:3px;height:20px;background-color:#ddd;position:absolute;border-radius:5px;transform:rotate(45deg)}.lightbox .close-lightbox:before{transform:rotate(-45deg)}.lightbox .close-lightbox:hover:after,.lightbox .close-lightbox:hover:before{background-color:#fff}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:left-8:before{content:var(--tw-content);left:2rem}.before\\:top-0:before{content:var(--tw-content);top:0}.before\\:h-full:before{content:var(--tw-content);height:100%}.before\\:-translate-x-1\\/2:before{content:var(--tw-content);--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.before\\:border:before{content:var(--tw-content);border-width:1px}.before\\:border-dashed:before{content:var(--tw-content);border-style:dashed}.before\\:border-slate-200:before{content:var(--tw-content);--tw-border-opacity: 1;border-color:rgb(226 232 240 / var(--tw-border-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:bottom-6:after{content:var(--tw-content);bottom:1.5rem}.after\\:left-8:after{content:var(--tw-content);left:2rem}.after\\:top-6:after{content:var(--tw-content);top:1.5rem}.after\\:-translate-x-1\\/2:after{content:var(--tw-content);--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.after\\:border:after{content:var(--tw-content);border-width:1px}.after\\:border-slate-200:after{content:var(--tw-content);--tw-border-opacity: 1;border-color:rgb(226 232 240 / var(--tw-border-opacity))}@media (min-width: 768px){.md\\:flex-row{flex-direction:row}}@media (min-width: 1024px){.lg\\:items-center{align-items:center}}';var Dt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,ct=(o,t,e,i)=>{for(var r=i>1?void 0:i?Bt(t,e):t,n=o.length-1,s;n>=0;n--)(s=o[n])&&(r=(i?s(t,e,r):s(r))||r);return i&&r&&Dt(t,e,r),r};let H=class extends k{constructor(){super(...arguments),this.memoUrl="",this._fetchMemosTask=new Rt(this,{task:async([o],{signal:t})=>await fetch(`${o}/memos`,{signal:t}).then(e=>e.json()),args:()=>[this.memoUrl]}),this._openLightbox=o=>{const t=o.target.closest(".image-wrapper");if(t){const e=t.querySelector("img");e&&(this.$lightbox.innerHTML='<div class="close-lightbox"></div>'+e.outerHTML,this.$lightbox.classList.add("show"))}},this._closeLightbox=o=>{o.target.hasAttribute("src")||this.$lightbox.classList.remove("show")}}render(){const o=new It;return z`
<!-- Component: User feed -->
<ul aria-label="User feed" role="feed" class="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:border before:-translate-x-1/2 before:border-slate-200 before:border-dashed after:absolute after:top-6 after:left-8 after:bottom-6 after:border after:-translate-x-1/2 after:border-slate-200 ">
  ${this._fetchMemosTask.render({pending:()=>z`
      <li role="article" class="relative pl-8 ">
        <div class="flex flex-col flex-1 gap-4">
          <p class=" text-slate-500">Fetching data...</p>
        </div>
      </li>
    `,complete:t=>t.map(e=>z`
      <li role="article" class="relative pl-8 ">
        <div class="flex flex-col flex-1 gap-4">
          <a href="#" class="absolute z-10 inline-flex items-center justify-center w-8 h-8 text-white rounded-full -left-4 ring-2 ring-white">
            <img src="${this.memoUrl}/telegram/avatar/${e.from.id}" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
          </a>
          <h4 class="flex flex-col items-start text-lg font-medium leading-8 lg:items-center md:flex-row text-slate-700">
            <span class="flex-1">${e.from.username}</span>
            <span class="text-sm font-normal text-slate-400">${o.from(new Date(e.date*1e3))}</span>
          </h4>
          <p class=" text-slate-500">${e.text}</p>
          <div class="flex -mx-2" @click=${this._openLightbox}>
            ${e.photos.map(i=>z`
              <div class="w-1/6 px-2">
                <div class="bg-gray-400">
                  <div class="image-wrapper cursor-zoom-in">
                    <img alt="Error" class="object-fit w-full" src="${this.memoUrl}/telegram/file/${i.file_id}">
                  </div>
                </div>
              </div>
            `)}
          </div>
        </div>
      </li>
    `)})}
</ul>
<!-- End User feed -->
<div id="lightbox" class="lightbox" @click=${this._closeLightbox}></div>
    `}firstUpdated(){this.$lightbox=this.shadowRoot.getElementById("lightbox")}};H.styles=[dt`${ot(qt)}`];ct([Ot({type:String,attribute:"memo-url"})],H.prototype,"memoUrl",2);H=ct([Ct("memo-feeds")],H);
