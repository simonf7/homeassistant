const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),i=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=i.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(n,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1],e[0]);return new r(i,e,n)},o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:s,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,m=globalThis,p=m.trustedTypes,f=p?p.emptyScript:"",g=m.reactiveElementPolyfillSupport,v=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},y=(e,t)=>!s(e,t),w={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const a=i?.call(this);r?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...c(e),...u(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((n,i)=>{if(t)n.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of i){const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)}})(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(void 0!==i&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:_).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,i=n._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=n.getPropertyOptions(i),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=i;const a=r.fromAttribute(t,e.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(void 0!==e){const a=this.constructor;if(!1===i&&(r=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??y)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,n,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[v("elementProperties")]=new Map,b[v("finalized")]=new Map,g?.({ReactiveElement:b}),(m.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,k=e=>e,$=x.trustedTypes,S=$?$.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+M,C=`<${D}>`,A=document,E=()=>A.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,F="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,N=/>/g,I=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),z=/'/g,j=/"/g,H=/^(?:script|style|textarea|title)$/i,W=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),B=W(1),q=W(2),U=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,K=A.createTreeWalker(A,129);function Y(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}class J{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,a=0;const o=e.length-1,s=this.parts,[l,d]=((e,t)=>{const n=e.length-1,i=[];let r,a=2===t?"<svg>":3===t?"<math>":"",o=R;for(let t=0;t<n;t++){const n=e[t];let s,l,d=-1,c=0;for(;c<n.length&&(o.lastIndex=c,l=o.exec(n),null!==l);)c=o.lastIndex,o===R?"!--"===l[1]?o=O:void 0!==l[1]?o=N:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=I):void 0!==l[3]&&(o=I):o===I?">"===l[0]?(o=r??R,d=-1):void 0===l[1]?d=-2:(d=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?I:'"'===l[3]?j:z):o===j||o===z?o=I:o===O||o===N?o=R:(o=I,r=void 0);const u=o===I&&e[t+1].startsWith("/>")?" ":"";a+=o===R?n+C:d>=0?(i.push(s),n.slice(0,d)+T+n.slice(d)+M+u):n+M+(-2===d?t:u)}return[Y(e,a+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]})(e,t);if(this.el=J.createElement(l,n),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=K.nextNode())&&s.length<o;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(T)){const t=d[a++],n=i.getAttribute(e).split(M),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:o[2],strings:n,ctor:"."===o[1]?te:"?"===o[1]?ne:"@"===o[1]?ie:ee}),i.removeAttribute(e)}else e.startsWith(M)&&(s.push({type:6,index:r}),i.removeAttribute(e));if(H.test(i.tagName)){const e=i.textContent.split(M),t=e.length-1;if(t>0){i.textContent=$?$.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],E()),K.nextNode(),s.push({type:2,index:++r});i.append(e[t],E())}}}else if(8===i.nodeType)if(i.data===D)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(M,e+1));)s.push({type:7,index:r}),e+=M.length-1}r++}}static createElement(e,t){const n=A.createElement("template");return n.innerHTML=e,n}}function X(e,t,n=e,i){if(t===U)return t;let r=void 0!==i?n._$Co?.[i]:n._$Cl;const a=P(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,n,i)),void 0!==i?(n._$Co??=[])[i]=r:n._$Cl=r),void 0!==r&&(t=X(e,r._$AS(e,t.values),r,i)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??A).importNode(t,!0);K.currentNode=i;let r=K.nextNode(),a=0,o=0,s=n[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new Q(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new re(r,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(r=K.nextNode(),a++)}return K.currentNode=A,i}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),P(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==V&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,i="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=J.createElement(Y(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new Z(i,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=G.get(e.strings);return void 0===t&&G.set(e.strings,t=new J(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new Q(this.O(E()),this.O(E()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=V}_$AI(e,t=this,n,i){const r=this.strings;let a=!1;if(void 0===r)e=X(this,e,t,0),a=!P(e)||e!==this._$AH&&e!==U,a&&(this._$AH=e);else{const i=e;let o,s;for(e=r[0],o=0;o<r.length-1;o++)s=X(this,i[n+o],t,o),s===U&&(s=this._$AH[o]),a||=!P(s)||s!==this._$AH[o],s===V?e=V:e!==V&&(e+=(s??"")+r[o+1]),this._$AH[o]=s}a&&!i&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class ne extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class ie extends ee{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??V)===U)return;const n=this._$AH,i=e===V&&n!==V||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==V&&(n===V||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ae={I:Q},oe=x.litHtmlPolyfillSupport;oe?.(J,Q),(x.litHtmlVersions??=[]).push("3.3.3");const se=(e,t,n)=>{const i=n?.renderBefore??t;let r=i._$litPart$;if(void 0===r){const e=n?.renderBefore??null;i._$litPart$=r=new Q(t.insertBefore(E(),e),e,void 0,n??{})}return r._$AI(e),r},le=globalThis;let de=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}};de._$litElement$=!0,de.finalized=!0,le.litElementHydrateSupport?.({LitElement:de});const ce=le.litElementPolyfillSupport;ce?.({LitElement:de}),(le.litElementVersions??=[]).push("4.2.2");const ue={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},he=(e=ue,t,n)=>{const{kind:i,metadata:r}=n;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),"accessor"===i){const{name:i}=n;return{set(n){const r=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,r,e,!0,n)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=n;return function(n){const r=this[i];t.call(this,n),this.requestUpdate(i,r,e,!0,n)}}throw Error("Unsupported decorator location: "+i)};function me(e){return(t,n)=>"object"==typeof n?he(e,t,n):((e,t,n)=>{const i=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),i?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function pe(e){return me({...e,state:!0,attribute:!1})}const fe="6.0.0",ge=new Set(["type","index","view_index","view_layout","layout_options","grid_options","visibility","disabled"]),ve="cache_data_",_e="📅 Calendar Card Pro",ye="add-event",we="reset",be="back",xe=["expand","refresh",ye,we,be],ke="details",$e="merge_locations",Se=1e3,Te=3e4,Me=864e5,De={POINTER_MOVE_TOLERANCE:8,ADD_SLOT_MINUTES:15,SWIPE_MIN_DISTANCE:48,SWIPE_MIN_SLOPE_RATIO:1.5,SWIPE_EDGE_GUARD:20,SWIPE_NUDGE_MAX:40,SWIPE_ARRIVAL_OFFSET:32,TOOLBAR_SWITCHER_LABEL_MIN_WIDTH:317,TOOLBAR_SWITCHER_WORD_WIDTH:{list:23,column:56,grid:26,month:41},TOOLBAR_SWITCHER_SEGMENT_PADDING:14,TOOLBAR_COMMAND_WIDTH:36,TOOLBAR_COMMAND_GAP:8,TOOLBAR_SWITCHER_SEGMENT_WIDTH:34,TOOLBAR_SWITCHER_TRACK_PADDING:3,TOOLBAR_ROW_INSET:{list:34,column:34,grid:34,month:34},MONTH_WEEK_GUTTER:22,MONTH_NARROW_HYSTERESIS:4,GRID_MIN_HOUR_HEIGHT:"24px",MONTH_NARROW_MARKS:36,MONTH_SECTIONS_ROWS:{plain:10,toolbar:12},MONTH_CARD_HEIGHT:{plain:"632px",toolbar:"760px"},LEGEND_UNFOLD_MARGIN:2,SEPARATOR_SPACING:{WEEK:1,MONTH:1.5},HOLD_INDICATOR_OPACITY:.2,HOLD_INDICATOR:{TOUCH_SIZE:100,POINTER_SIZE:50}},Ce=["Germany","Deutschland","United States","USA","United States of America","United Kingdom","Great Britain","France","Italy","Italia","Spain","España","Netherlands","Nederland","Austria","Österreich","Switzerland","Schweiz"],Ae=["list","column","grid","month"];let Ee;function Pe(){return void 0===Ee&&(Ee="undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("color","color-mix(in srgb, red, blue)")),Ee}const Le=new Map([["color-mix(in srgb, var(--divider-color) 75%, transparent)","rgba(128, 128, 128, 0.18)"],["color-mix(in srgb, var(--divider-color) 50%, transparent)","rgba(128, 128, 128, 0.12)"],["color-mix(in srgb, var(--primary-text-color) 18%, transparent)","rgba(128, 128, 128, 0.36)"],["color-mix(in srgb, var(--primary-text-color) 4%, transparent)","rgba(128, 128, 128, 0.08)"],["color-mix(in srgb, var(--primary-color, #03a9f4) 31%, transparent)","rgba(128, 128, 128, 0.31)"],["color-mix(in srgb, var(--primary-text-color) 60%, transparent)","var(--secondary-text-color)"]]);function Fe(e){const t=Le.get(e);return void 0===t||Pe()?e:t}function Re(e){const t=e.trim().toLowerCase();return""!==t&&"transparent"!==t&&"none"!==t}function Oe(e,t){const n=[];let i=0,r=0;for(let a=0;a<e.length;a++){const o=e[a];"("===o?i++:")"===o?i--:o===t&&0===i&&(n.push(e.slice(r,a).trim()),r=a+1)}return n.push(e.slice(r).trim()),n}function Ne(e){const t=/^(-?\d*\.?\d+)(%?)$/.exec(e.trim());if(!t)return;const n=Number(t[1])/(t[2]?100:1);return Math.min(1,Math.max(0,n))}const Ie=new Set(["rgb","rgba","hsl","hsla","hwb","lab","lch","oklab","oklch","color"]),ze=new Set(["currentcolor","inherit","initial","unset","revert","revert-layer","none"]),je=String.raw`[+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?%`,He=new RegExp(String.raw`^([\s\S]*?)\s+(${je})$`),We=new RegExp(String.raw`^(${je})\s+([\s\S]+)$`);function Be(e){const t=He.exec(e),n=t?null:We.exec(e),i=t?t[1].trim():n?n[2].trim():e,r=t?t[2]:n?n[1]:void 0;return{color:i,share:void 0===r?void 0:Number(r.slice(0,-1))}}function qe(e){const t=/^([a-z-]+)\(/.exec(e);if(!t)return;let n=0;for(let i=t[0].length-1;i<e.length;i++)if("("===e[i])n++;else if(")"===e[i]&&0===--n)return i===e.length-1?{name:t[1],body:e.slice(t[0].length,i)}:void 0}function Ue(e){if("transparent"===e)return 0;const t=qe(e),n="var"===t?.name?/^\s*--[^,\s)]+\s*(?:,([\s\S]*))?$/.exec(t.body):null;return n?void 0===n[1]||1===Ue(n[1].trim())?1:void 0:Ve(e)}function Ve(e){if("string"!=typeof e)return;const t=e.trim().toLowerCase();if("transparent"===t)return 0;const n=/^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(t);if(n){const e=n[1];if(3===e.length||6===e.length)return 1;const t=4===e.length?e[3]+e[3]:e.slice(6);return parseInt(t,16)/255}const i=qe(t);if(!i)return/^[a-z]+$/.test(t)&&!ze.has(t)?1:void 0;const{name:r,body:a}=i;if("color-mix"===r)return function(e){const t=Oe(e,","),n=(/^in\s/.test(t[0])?t.slice(1):t).map(Be);if(2!==n.length)return;const[i,r]=n;if([i.share,r.share].some(e=>void 0!==e&&(e<0||e>100)))return;const a=i.share??(void 0===r.share?50:100-r.share),o=r.share??100-a,s=a+o;if(s<=0)return;const l=Ue(i.color),d=Ue(r.color);return void 0!==l&&void 0!==d?(a*l+o*d)/s*(Math.min(s,100)/100):void 0}(a);if(!Ie.has(r))return;const o=Oe(a,"/");if(2===o.length)return Ne(o[1]);if(/^from\s/.test(a.trim()))return;const s=Oe(a,",");return("rgba"===r||"rgb"===r||"hsla"===r||"hsl"===r)&&s.length>1?4===s.length||2===s.length&&s[0].startsWith("var(")?Ne(s[s.length-1]):3===s.length?1:void 0:a.includes("var(")?void 0:1}function Ge(e){return"home-assistant"===e}const Ke=/^person\.[a-z0-9_]+$/;function Ye(e){return"string"==typeof e&&Ke.test(e)}let Je=!1;function Xe(){const e=globalThis,t=e.calendarCardProLogLevel;return"number"==typeof t&&Number.isInteger(t)&&t>=0&&t<=3?t:!0===e.calendarCardProDebug?3:0}const Ze={title:["background: #424242","color: white","display: inline-block","line-height: 20px","text-align: center","border-radius: 20px 0 0 20px","font-size: 12px","font-weight: bold","padding: 4px 8px 4px 12px","margin: 5px 0"].join(";"),version:["background: #4fc3f7","color: white","display: inline-block","line-height: 20px","text-align: center","border-radius: 0 20px 20px 0","font-size: 12px","font-weight: bold","padding: 4px 12px 4px 8px","margin: 5px 0"].join(";"),prefix:["color: #4fc3f7","font-weight: bold"].join(";"),error:["color: #f44336","font-weight: bold"].join(";"),warn:["color: #ff9800","font-weight: bold"].join(";")};function Qe(e,t,...n){if(Xe()<0)return;const i=function(e){if(null!=e){if("string"==typeof e)return e;if("object"==typeof e)try{return{...e}}catch{try{return{value:JSON.stringify(e)}}catch{return{value:String(e)}}}return String(e)}}(t);if(e instanceof Error){const t=e.message||"Unknown error",r="string"==typeof i?` during ${i}`:"",[a,o]=at(`Error${r}: ${t}`,Ze.error);console.error(a,o),e.stack&&console.error(e.stack),i&&"object"==typeof i&&console.error("Context:",{...i,timestamp:(new Date).toISOString()}),n.length>0&&console.error("Additional data:",...n)}else if("string"==typeof e){const t="string"==typeof i?` during ${i}`:"",[r,a]=at(`${e}${t}`,Ze.error);i&&"object"==typeof i?console.error(r,a,{context:{...i,timestamp:(new Date).toISOString()},...n.length>0?{additionalData:n}:{}}):n.length>0?console.error(r,a,...n):console.error(r,a)}else{const t="string"==typeof i?` during ${i}`:"",[r,a]=at(`Unknown error${t}:`,Ze.error);console.error(r,a,e),i&&"object"==typeof i&&console.error("Context:",{...i,timestamp:(new Date).toISOString()}),n.length>0&&console.error("Additional data:",...n)}}function et(e,...t){rt(1,e,Ze.warn,console.warn,...t)}function tt(e,...t){const[n,i]=at(e,Ze.warn);t.length>0?console.warn(n,i,...t):console.warn(n,i)}function nt(e,...t){rt(2,e,Ze.prefix,console.log,...t)}function it(e,...t){rt(3,e,Ze.prefix,console.log,...t)}function rt(e,t,n,i,...r){if(Xe()<e)return;const[a,o]=at(t,n);r.length>0?i(a,o,...r):i(a,o)}function at(e,t){return[`%c[${_e}] ${e}`,t]}const ot={sunday:0,sun:0,monday:1,mon:1,tuesday:2,tue:2,wednesday:3,wed:3,thursday:4,thu:4,friday:5,fri:5,saturday:6,sat:6},st="start_of_week",lt=st;function dt(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function ct(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function ut(e,t){const n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.round((i-n)/864e5)}function ht(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function mt(e,t){const n=(t-e.getDay()+7)%7;return ct(e,n)}function pt(e,t){const n=(e.getDay()-t+7)%7;return ct(e,-n)}function ft(e){const t=[];let n="";for(const i of e)"+"===i||"-"===i?(t.push(n),n=i):n+=i;return t.push(n),t}function gt(e){const t=String(e).replace(/\s+/g,"").toLowerCase();return""!==t&&ft(t)[0]===st}function vt(e,t,n,i=new Date){let r;const a=()=>new Date(i.getFullYear(),i.getMonth(),i.getDate()),o=null==t?"":String(t);if(""!==o.trim())try{const e=o.trim(),t=function(e,t,n){const i=String(e).replace(/\s+/g,"").toLowerCase();if(""===i)return{kind:"nomatch"};const r=ft(i),a=r[0],o=r.slice(1);let s;if("today"===a)s=dt(n);else if(a===st)s=function(e,t){return pt(e,(t%7+7)%7)}(n,t);else if(a in ot)s=mt(dt(n),ot[a]);else{if(""!==a)return{kind:"nomatch"};s=dt(n)}if(o.length>8)return{kind:"error",message:"too many operators (maximum 8)"};for(const e of o){const t="-"===e[0]?-1:1,n=e.slice(1);if(""===n)return{kind:"error",message:`dangling "${e[0]}" with no value`};if(n in ot){const e=ot[n];s=t>0?mt(s,e):pt(s,e);continue}const i=n.match(/^(\d+)w$/);if(i){s=ct(s,t*parseInt(i[1],10)*7);continue}const r=n.match(/^(\d+)$/);if(!r)return{kind:"error",message:`unrecognized operand "${n}"`};s=ct(s,t*parseInt(r[1],10))}return{kind:"ok",date:s}}(e,n,i);if("ok"===t.kind)r=t.date,isNaN(r.getTime())?(et(`start_date "${e}" resolved outside the supported date range. Falling back to today.`),r=a()):nt(`Resolved start_date "${e}" to ${ht(r)}`);else if("error"===t.kind)et(`Invalid start_date "${e}": ${t.message}. Falling back to today.`),r=a();else if(e.includes("T"))r=new Date(e),isNaN(r.getTime())&&(et(`Invalid ISO date: ${e}, falling back to today`),r=a());else{const[t,n,i]=e.split("-").map(Number);t&&n&&i&&n>=1&&n<=12&&i>=1&&i<=31?(r=new Date(t,n-1,i),r.getFullYear()===t&&r.getMonth()===n-1&&r.getDate()===i||(et(`Impossible date: ${e}, falling back to today`),r=a())):(et(`Malformed date: ${e}, falling back to today`),r=a())}}catch(e){et(`Error parsing date: ${o}, falling back to today`,e),r=a()}else r=a();r.setHours(0,0,0,0);const s=new Date(r),l=parseInt(e.toString())||3;return s.setDate(r.getDate()+l),{start:r,end:s}}function _t(e,t=new Date){const n=new Date(t.getFullYear(),t.getMonth(),t.getDate()+7,12);return vt(1,e,1,t).start.getTime()!==vt(1,e,1,n).start.getTime()}const yt="en",wt=new Set(["bg","ca","cs","da","de","el","en","en-gb","es","et","fi","fr","he","hr","hu","is","it","ja","ko","lt","lv","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sr-latn","sv","th","tr","uk","vi","zh-cn","zh-tw"]),bt=new Set(["he"]),xt=new Map,kt={zh:"zh-cn","zh-hans":"zh-cn","zh-sg":"zh-cn","zh-hant":"zh-tw","zh-hk":"zh-tw","zh-mo":"zh-tw"};function $t(e,t){const n=e.trim().toLowerCase().split(/[-_]/),i=t?1:n.length;for(let e=n.length;e>=i;e-=1){const t=n.slice(0,e).join("-");if(wt.has(t))return t;if(Object.prototype.hasOwnProperty.call(kt,t))return kt[t]}}function St(e,t){const n=`${e||""}:${t?.language||""}`,i=xt.get(n);if(void 0!==i)return i;const r=(e?$t(e,!1):void 0)??(t?.language?$t(t.language,!0):void 0)??yt;return xt.set(n,r),r}const Tt={nn:"nb"};function Mt(e){const[t,...n]=e.split("-"),i=Tt[t.toLowerCase()];return i?[e,[i,...n].join("-")]:[e]}function Dt(e){const t=Mt(e);return t.some(e=>e.toLowerCase()===yt)?t:[...t,yt]}function Ct(e,t){try{return e.supportedLocalesOf(Mt(t)).length>0}catch{return!1}}const At=[];let Et=0;function Pt(){const e=new Map;return At.push(e),e}function Lt(){Et+=1;for(const e of At)e.clear()}function Ft(e){return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),12))}function Rt(e){return Object.entries(e).map(([e,t])=>`${e}:${t};`).join("")}const Ot=new Map;function Nt(e,t){if(e.startsWith("var("))return function(e,t){return Pe()?`color-mix(in srgb, ${e} ${t}%, transparent)`:function(e){return`rgba(128, 128, 128, ${e/100})`}(t)}(e,t);const n=`${e}|${t}`,i=Ot.get(n);if(void 0!==i)return i;const r=function(e,t){if("transparent"===e)return e;const n=document.createElement("div");n.style.display="none",n.style.color=e,document.body.appendChild(n);const i=getComputedStyle(n).color;if(document.body.removeChild(n),!i)return e;const r=i.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(r){const[,e,n,i]=r;return`rgba(${e}, ${n}, ${i}, ${t/100})`}const a=i.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*[\d.]+\)$/);if(a){const[,e,n,i]=a;return`rgba(${e}, ${n}, ${i}, ${t/100})`}return e}(e,t);return Ot.set(n,r),r}function It(e){return/^[a-z][a-z0-9]*:[a-z0-9]/i.test(e)&&!e.startsWith("http")}function zt(e){if(void 0===e||!1===e)return"none";if(!0===e)return"dot";if("string"==typeof e){const t=e.toLowerCase();return"dot"===t||"pulse"===t||"glow"===t||"tile"===t?t:""===e.trim()?"dot":It(e)?"mdi":e.startsWith("/")||/^https?:\/\//i.test(e)||/\.(apng|avif|bmp|gif|ico|jpe?g|png|svg|webp)(?:[?#]|$)/i.test(e)?"image":"emoji"}return"none"}function jt(e){return"none"===e||"icon"===e||"image"===e||"text"===e}function Ht(e,t){return jt(t)?t:function(e){return"string"!=typeof e||""===e?"none":Ge(e)?"icon":Ye(e)?"image":It(e)?"icon":e.startsWith("/")||/^https?:\/\//i.test(e)||/\.(apng|avif|bmp|gif|ico|jpe?g|png|svg|webp)(?:[?#]|$)/i.test(e)?"image":"text"}(e)}function Wt(e,t){return gt(e)&&void 0!==t?`_fdw${t}`:""}function Bt(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t&=t;return Math.abs(t).toString(36)}const qt=new Date(2e3,0,1,13,0,0);function Ut(e){try{return!new Intl.DateTimeFormat(Dt(e),{hour:"numeric"}).formatToParts(qt).some(e=>"dayPeriod"===e.type)}catch{return}}function Vt(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function Gt(e,t){return Object.prototype.hasOwnProperty.call(e,t)}const Kt=["below","title"];function Yt(e){if("string"==typeof e){const t=e.toLowerCase().trim();if(Kt.includes(t))return t}return"below"}function Jt(e){if(e.scroll_long_titles)return"line";const t=Number(e.title_max_lines)||0;return 1===t?"line":t>1?"cap":"wrap"}function Xt(e,t){return Boolean(e.scroll_long_titles)||"grid"!==t&&"title"===Yt(e.time_position)&&"line"===Jt(e)}function Zt(e,t){return"grid"!==t&&"title"===Yt(e.time_position)&&"cap"===Jt(e)}function Qt(e,t){return"grid"!==t&&Number(e.title_max_lines)>0&&!Xt(e,t)}const en=["title","time"],tn=["subtle","outline","tinted","filled"],nn=["accent","text"],rn="accent",an=new Set(["user","state","numeric_state","screen","time","view_columns","location"]),on=new Set(["screen","user","view_columns","location","time"]),sn=new Set(["and","or","not"]),ln=["sun","mon","tue","wed","thu","fri","sat"],dn=/^\w+\.\w+$/,cn=864e5;function un(e){if(null!=e)return Array.isArray(e)?e.length>0?e:void 0:[e]}const hn=new WeakMap;function mn(e,t){return void 0===e||!0===function(e,t){const n=t.core;if(n){const i=ii(e,t.entityId??"");if(i.questions.some(({key:e})=>"error"===n(e)))return;const r=i.evaluate(e=>wn(e,t),e=>{const t=n(e);return"error"===t?void 0:t});if(void 0!==r)return!0===r}return pn(e.filter(e=>!_n(e)).map(e=>wn(e,t)))}(e,t)}function pn(e){let t=!1;for(const n of e){if(!1===n)return!1;void 0===n&&(t=!0)}return!t||void 0}function fn(e){let t=!1;for(const n of e){if(!0===n)return!0;void 0===n&&(t=!0)}return!!t&&void 0}function gn(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function vn(e){return void 0!==e.for||void 0!==e.value_template}function _n(e){return gn(e)&&!1===e.enabled}function yn(e){if(null!=e)return Array.isArray(e)?e:[e]}function wn(e,t){if(!gn(e))return;if("enabled"in e&&"boolean"!=typeof e.enabled)return;if(!("condition"in e))return vn(e)?void 0:kn(e,t);const n=e.condition;if("string"==typeof n){if(sn.has(n)){if(void 0===e.conditions)return!0;const i=(yn(e.conditions)??[]).filter(e=>!_n(e)).map(e=>wn(e,t));if("or"===n)return fn(i);const r=pn(i);return"not"===n?void 0===r?void 0:!r:r}if(an.has(n)&&!vn(e))switch(n){case"user":return function(e,t){const n=yn(e.users),i=t.hass?.user?.id;return void 0!==n&&"string"==typeof i&&n.includes(i)}(e,t);case"screen":return"string"==typeof e.media_query&&""!==e.media_query&&t.matches(e.media_query);case"time":return function(e,t){const n=Mn(t.hass),i=t.now,r=An(n,i),a=yn(e.weekdays);if(a&&a.length>0&&!a.includes(ln[r.weekday]))return!1;const o=Fn(e.after),s=Fn(e.before);if(!o&&!s)return!0;const l=o?Ln(e.after):null,d=s?Ln(e.before):null;if(o&&null===l||s&&null===d)return!1;const c=e=>Pn(n,r.year,r.month,r.day,e),u=null===l?void 0:c(l),h=null===d?void 0:c(d);return void 0!==u&&void 0!==h?h<u?i>=u||i<=h:i>=u&&i<=h:void 0!==u?i>=u:i<=h}(e,t);case"numeric_state":return function(e,t){if("entity_id"in e)return function(e,t){const n=Tn(e.above,t),i=Tn(e.below,t);return null===n||null===i||void 0===n&&void 0===i?void 0:Sn(e,t,e=>{const t=Number(e.state);if(""!==e.state&&!Number.isNaN(t))return(void 0===n||n<t)&&(void 0===i||t<i)})}(e,t);const n="string"==typeof e.entity&&""!==e.entity?e.entity:t.entityId,i=bn(t,n);if(!i)return!Gn(e)&&void 0;const r=e.attribute,a="string"==typeof r&&""!==r?i.attributes?.[r]:i.state,o=Number(a);if(Number.isNaN(o))return!1;const s=e=>Number("string"==typeof e?xn(t,e)??e:e),l=s(e.above),d=s(e.below);return(void 0===e.above||null===e.above||Number.isNaN(l)||l<o)&&(void 0===e.below||null===e.below||Number.isNaN(d)||d>o)}(e,t);case"view_columns":return!0;case"location":return function(e,t){const n=t.hass,i=Nn(n);if(!i)return!1;const r=e.locations;if(null!=r){if(!Array.isArray(r)&&"string"!=typeof r)return!1;if(r.includes(i.state))return!0}if(!0===e.away&&"not_home"===i.state)return!0;if(!jn(e.target))return!1;const a=function(e,t){const n=Bn.get(t);let i=n?.zones;if(!n||n.entities!==e?.entities||n.devices!==e?.devices||n.areas!==e?.areas){const n=Object.values(e?.entities??{}),r=e?.devices??{},a=Object.values(e?.areas??{}),o=gn(t.exclude)?Wn(t.exclude,n,r,a):new Set;i=[...Wn(t,n,r,a)].filter(e=>"zone"===On(e)&&!o.has(e)),Bn.set(t,{entities:e?.entities,devices:e?.devices,areas:e?.areas,zones:i})}return(i??[]).filter(t=>void 0!==e?.states?.[t])}(n,e.target),o=i.attributes?.in_zones;if(!Array.isArray(o)||0===o.length)return"not_home"!==i.state&&a.some(e=>In(n,e)===i.state);if("active_zone"===e.match_mode){const e=o.find(e=>In(n,e)===i.state);return void 0!==e&&a.includes(e)}return o.some(e=>a.includes(e))}(e,t);default:return kn(e,t)}}}function bn(e,t){if("string"==typeof t&&""!==t)return e.hass?.states?.[t]}function xn(e,t){if("string"==typeof t&&dn.test(t))return bn(e,t)?.state}function kn(e,t){if("entity_id"in e)return function(e,t){const n=yn(e.state);if(!n||0===n.length)return;if(n.some(e=>"string"==typeof e&&$n(e)))return;const i=n.map(e=>String(e));return Sn(e,t,e=>i.includes(e.state))}(e,t);const n="string"==typeof e.entity&&""!==e.entity?e.entity:t.entityId,i=bn(t,n);if(!i&&!Gn(e))return;let r;if(i)if("string"==typeof e.attribute&&""!==e.attribute){const t=i.attributes?.[e.attribute];r=null==t?"unknown":String(t)}else r=i.state;else r="unknown";const a=e.state??e.state_not;if(null==a)return!1;const o=(yn(a)??[]).flatMap(e=>{const n=xn(t,e);return void 0===n?[e]:[e,n]}).includes(r);return void 0!==e.state&&null!==e.state?o:!o}function $n(e){return Number.isNaN(Number(e))&&dn.test(e)}function Sn(e,t,n){if(void 0!==e.attribute)return;const i=e.match??"all";if("all"!==i&&"any"!==i)return;const r=function(e){const t=yn(e.entity_id);if(t&&0!==t.length&&t.every(e=>"string"==typeof e&&""!==e))return t}(e);if(!r)return;const a=r.map(e=>{const i=bn(t,e);return i?n(i):void 0});return"any"===i?fn(a):pn(a)}function Tn(e,t){if(null==e)return;if("number"==typeof e)return Number.isFinite(e)?e:null;if("string"!=typeof e)return null;const n=Number(e);if(""!==e.trim()&&!Number.isNaN(n))return n;if(!dn.test(e))return null;const i=bn(t,e)?.state,r=Number(i);return void 0===i||""===i||Number.isNaN(r)?null:r}function Mn(e){const t=Intl.DateTimeFormat().resolvedOptions().timeZone;return"server"===e?.locale?.time_zone&&e.config?.time_zone&&Cn(e.config.time_zone)?e.config.time_zone:t}const Dn=new Map;function Cn(e){let t=Dn.get(e);if(void 0===t){try{t=new Intl.DateTimeFormat("en-US",{timeZone:e,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",weekday:"short"})}catch{t=null}Dn.set(e,t)}return t}function An(e,t){const n=Cn(e)??Cn("UTC"),i={};for(const{type:e,value:r}of n.formatToParts(t))i[e]=r;const r=Number(i.year),a=Number(i.month)-1,o=Number(i.day);return{year:r,month:a,day:o,weekday:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(i.weekday),asUtc:Date.UTC(r,a,o,Number(i.hour),Number(i.minute),Number(i.second))}}function En(e,t){const n=t-(t%1e3+1e3)%1e3;return An(e,n).asUtc-n}function Pn(e,t,n,i,r){const a=Date.UTC(t,n,i)+r,o=En(e,a-cn),s=En(e,a+cn),l=[a-o,a-s].filter(t=>t+En(e,t)===a);return l.length>0?Math.min(...l):a-o}function Ln(e){if("string"!=typeof e)return null;const t=e.split(":");if(t.length<2||t.length>3||!t.every(e=>/^\d+$/.test(e)))return null;const[n,i,r=0]=t.map(Number);return n>23||i>59||r>59?null:1e3*(60*(60*n+i)+r)}function Fn(e){return null!=e&&""!==e}const Rn=new Map;function On(e){const t=e.indexOf(".");return t<0?"":e.slice(0,t)}function Nn(e){const t=e?.user?.id;if(!t)return;const n=Rn.get(t);if(n){const i=e?.states?.[n];if(i?.attributes?.user_id===t)return i}for(const n of function(e){return Object.keys(e?.entities??{}).filter(e=>"person"===On(e))}(e)){const i=e?.states?.[n];if(i?.attributes?.user_id===t)return Rn.set(t,n),i}}function In(e,t){const n=e?.states?.[t];if(n&&!n.attributes?.passive)return"zone.home"===t?"home":n.attributes?.friendly_name}const zn=["entity_id","device_id","area_id","floor_id","label_id"];function jn(e,t=!0){return gn(e)&&Object.entries(e).every(([e,n])=>"exclude"===e?t&&jn(n,!1):zn.includes(e)&&function(e){return"string"==typeof e||Array.isArray(e)&&e.every(e=>"string"==typeof e)}(n))}function Hn(e){return yn(e)??[]}function Wn(e,t,n,i){const r=new Set(Hn(e.entity_id)),a=new Set(Hn(e.device_id)),o=new Set(Hn(e.area_id)),s=new Set(a),l=e=>"zone"===On(e.entity_id),d=e=>t.some(t=>t.device_id===e&&l(t)),c=e=>Object.values(n).filter(t=>t.area_id?t.area_id===e:!!t.parent_device_id&&n[t.parent_device_id]?.area_id===e),u=e=>c(e).some(e=>d(e.id))||t.some(t=>t.area_id===e&&l(t));for(const s of Hn(e.label_id)){for(const e of i)e.labels?.includes(s)&&u(e.area_id)&&o.add(e.area_id);for(const e of Object.values(n))e.labels?.includes(s)&&d(e.id)&&a.add(e.id);for(const e of t)e.labels?.includes(s)&&l(e)&&r.add(e.entity_id)}for(const t of Hn(e.floor_id))for(const e of i)e.floor_id===t&&u(e.area_id)&&o.add(e.area_id);const h=new Set(a);for(const e of o){for(const t of c(e))d(t.id)&&a.add(t.id);for(const n of t)n.area_id===e&&l(n)&&r.add(n.entity_id)}for(const e of Object.values(n))e.parent_device_id&&s.has(e.parent_device_id)&&(a.add(e.id),h.add(e.id));for(const e of a)for(const n of t)n.device_id===e&&l(n)&&(!h.has(e)&&n.area_id||r.add(n.entity_id));return r}const Bn=new WeakMap;function qn(e){const t=Object.keys(e?.entities??{}).filter(e=>{const t=On(e);return"person"===t||"zone"===t});t.push("zone.home");const n=e?.user?.id,i=n?Rn.get(n):void 0;i&&t.push(i);const r=Nn(e)?.attributes?.in_zones;if(Array.isArray(r))for(const e of r)"string"==typeof e&&t.push(e);return t}function Un(e){return"string"==typeof e.condition&&sn.has(e.condition)}function Vn(e){return"string"==typeof e&&$n(e)}function Gn(e){return"numeric_state"===e.condition?[e.above,e.below].some(Vn):void 0!==e.attribute||[...yn(e.state)??[],...yn(e.state_not)??[]].some(Vn)}function Kn(e){if(!gn(e))return!1;if(Un(e))return(yn(e.conditions)??[]).every(e=>Kn(e));if(!("condition"in e))return!Gn(e)&&("entity_id"in e||!vn(e));const t=e.condition;return"string"==typeof t&&!on.has(t)&&("state"!==t&&"numeric_state"!==t||"entity_id"in e||!vn(e)&&!Gn(e))}function Yn(e){const t={};for(const n of["alias","note","enabled"])n in e&&(t[n]=e[n]);return t}function Jn(e,t){if("conditions"in e&&e.conditions)return{...e,conditions:(yn(e.conditions)??[]).map(e=>gn(e)?Jn(e,t):e)};const n=e.condition??"state";return"state"!==n&&"numeric_state"!==n||"entity_id"in e?e:{...e,entity:e.entity||t}}const Xn=Symbol("unmet");function Zn(e,t){if(null==e)return;const n="number"==typeof e?e:Number(e);return Number.isNaN(n)?"string"==typeof e&&dn.test(e)?e:void 0:Number.isFinite(n)?n:"above"===t==n>0?Xn:void 0}function Qn(e){if(!("condition"in e))return ei({condition:"state",...e});if(Un(e)){const t=Yn(e);if(void 0===e.conditions)return{...t,condition:"and",conditions:[]};const n=(yn(e.conditions)??[]).map(e=>Qn(e));return"not"===e.condition?{...t,condition:"not",conditions:[{condition:"and",conditions:n}]}:{...t,condition:e.condition,conditions:n}}return"state"===e.condition?ei(e):"numeric_state"===e.condition?function(e){if("entity_id"in e)return e;const t=Yn(e);if(!e.entity)return{...t,condition:"not",conditions:[{condition:"and",conditions:[]}]};const n=Zn(e.above,"above"),i=Zn(e.below,"below");if(n===Xn||i===Xn)return{...t,condition:"not",conditions:[{condition:"and",conditions:[]}]};const r=JSON.stringify(e.entity);return void 0===n&&void 0===i?{...t,condition:"template",value_template:void 0===e.attribute?`{{ is_number(states(${r})) }}`:`{{ is_number(state_attr(${r}, ${JSON.stringify(e.attribute)})) }}`}:{...t,condition:"numeric_state",entity_id:e.entity,...void 0!==e.attribute?{attribute:e.attribute}:{},...void 0!==n?{above:n}:{},...void 0!==i?{below:i}:{}}}(e):e}function ei(e){if("entity_id"in e)return e;const t=Yn(e);if(!e.entity||void 0===e.state&&void 0===e.state_not)return{...t,condition:"not",conditions:[{condition:"and",conditions:[]}]};const n={condition:"state",entity_id:e.entity,...void 0!==e.attribute?{attribute:e.attribute}:{}};return void 0!==e.state?{...t,...n,state:e.state}:{...t,condition:"not",conditions:[{...n,state:e.state_not}]}}function ti(e){return(t,n)=>{let i=!1;for(const r of e){const e=r(t,n);if(!1===e)return!1;void 0===e&&(i=!0)}return!i||void 0}}const ni=new WeakMap;function ii(e,t){let n=ni.get(e);n||(n=new Map,ni.set(e,n));const i=n.get(t);if(i)return i;const r=new Map,a=e=>{const t=function(e){const t=[],n=JSON.stringify(e,(e,n)=>("number"!=typeof n||Number.isFinite(n)||t.push(String(n)),n));return t.length>0?`${n}|${t.join(",")}`:n}(e);return r.has(t)||r.set(t,{key:t,condition:e}),(e,n)=>n(t)},o=(e,t)=>{const n=[],i=[];for(const t of e)_n(t)||(Kn(t)?n.push(t):i.push(t));const r=[];1===n.length&&r.push(a(Qn(n[0]))),n.length>1&&r.push(a({condition:t,conditions:n.map(Qn)}));for(const e of i)r.push(s(e));return r},s=e=>{if(!gn(e))return()=>{};if("enabled"in e&&"boolean"!=typeof e.enabled)return()=>{};if(Un(e)){const i=yn(e.conditions)??[];return"or"===e.condition?(n=o(i,"or"),(e,t)=>{let i=!1;for(const r of n){const n=r(e,t);if(!0===n)return!0;void 0===n&&(i=!0)}return!!i&&void 0}):"not"===e.condition?(t=ti(o(i,"and")),(e,n)=>{const i=t(e,n);return void 0===i?void 0:!i}):ti(o(i,"and"))}var t,n;return t=>t(e)},l=ti(o(e.map(e=>gn(e)?Jn(e,t):e),"and")),d={questions:[...r.values()],evaluate:l};return n.set(t,d),d}function ri(e,t){return ii(e,t).questions}function ai(e,t){for(const n of e){if(!gn(n))continue;t(n);const e=yn(n.conditions);e&&"string"==typeof n.condition&&sn.has(n.condition)&&ai(e,t)}}function oi(e){const t=new Set;return ai(e,e=>{"screen"===e.condition&&"string"==typeof e.media_query&&""!==e.media_query&&t.add(e.media_query)}),[...t]}function si(e,t,n){const i=[];if(ai(e,e=>{"time"===e.condition&&i.push(e)}),0===i.length)return null;const r=Mn(t),a=An(r,n),o=new Date(Date.UTC(a.year,a.month,a.day+1)),s=(e,t)=>Pn(r,e.year,e.month,e.day,t),l={year:o.getUTCFullYear(),month:o.getUTCMonth(),day:o.getUTCDate()},d=(e,t)=>{const i=s(a,e)+t;return i>n?i:s(l,e)+t},c=[s(l,0)];for(const e of i){const t=Fn(e.after)?Ln(e.after):null,n=Fn(e.before)?Ln(e.before):null;null!==t&&c.push(d(t,0)),null!==n&&c.push(d(n,1))}return Math.min(...c)}function li(e){const t=new Set;for(const n of e){if(!gn(n)){t.add("malformed");continue}const e="condition"in n?n.condition:"state";if("string"!=typeof e)t.add("malformed");else if(sn.has(e)){const e=yn(n.conditions);e&&li(e).forEach(e=>t.add(e))}else{if(Kn(n))continue;void 0!==n.for?t.add(`${e} with for`):void 0!==n.value_template&&t.add(`${e} with value_template`)}}return[...t]}const di={hidden:new Set,calendars:new Set};function ci(e,t){return`${e}\0${function(e){let t=hn.get(e);return void 0===t&&(t=JSON.stringify(e)??"",hn.set(e,t)),t}(t)}`}function ui(e,t){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}function hi(e,t){if(0===t.hidden.size)return!1;const n=e._matchedConfig?.visibility;return void 0!==n&&t.hidden.has(ci(e._entityId??"",n))}const mi={config_version:void 0,entities:[],view:"list",start_date:void 0,days_to_show:3,compact_days_to_show:void 0,compact_events_to_show:void 0,compact_events_complete_days:!1,event_order:"earliest_first",skip_first_events:void 0,show_empty_days:!1,show_empty_today:!1,hide_when_empty:!1,empty_day_text:void 0,filter_duplicates:!1,duplicate_accent_color:void 0,split_multiday_events:!1,multiday_banners:!0,event_type:"all",language:void 0,title:void 0,title_font_size:void 0,title_color:void 0,background_color:"var(--ha-card-background)",accent_color:"var(--primary-color, #03a9f4)",vertical_line_width:"2px",day_spacing:"10px",event_gap:"0px",event_spacing:"4px",additional_card_spacing:"0px",height:"auto",max_height:"none",card_height:"auto",card_max_height:"none",first_day_of_week:"system",show_week_numbers:null,show_current_week_number:!0,week_number_font_size:"12px",week_number_color:void 0,week_number_background_color:void 0,day_separator_width:"0px",day_separator_color:"var(--secondary-text-color)",week_separator_width:"0px",week_separator_color:void 0,month_separator_width:"0px",month_separator_color:"var(--primary-text-color)",month_separator_label:!1,month_separator_label_color:void 0,month_separator_label_font_size:"12px",today_indicator:"tile",today_indicator_position:"15% 50%",today_indicator_color:"var(--primary-color, #03a9f4)",today_indicator_size:"6px",date_vertical_alignment:"middle",weekday_font_size:"14px",weekday_color:"var(--primary-text-color)",day_font_size:"26px",day_color:"var(--primary-text-color)",show_month:!0,month_font_size:"12px",month_color:"var(--primary-text-color)",weekend_weekday_color:void 0,weekend_day_color:void 0,weekend_month_color:void 0,today_weekday_color:void 0,today_day_color:void 0,today_month_color:void 0,today_date_scale:1,today_date_font_weight:"default",past_date_scale:1,past_date_font_weight:"default",past_date_opacity:100,event_background_opacity:0,past_event_opacity:60,show_past_events:!1,show_countdown:!1,show_countdown_allday:!0,countdown_exact_days:!1,countdown_max_days:void 0,show_progress_bar:!1,show_now_indicator:!0,now_color:"#34d399",progress_bar_color:"var(--secondary-text-color)",progress_bar_height:"0.75em",progress_bar_width:void 0,event_icon_vertical_alignment:"top",event_font_size:"14px",event_color:"var(--primary-text-color)",empty_day_color:"var(--primary-text-color)",show_time:!0,time_position:"below",show_single_allday_time:!0,show_multiday_allday_time:!0,allday_badge:"off",allday_badge_style:"subtle",allday_badge_color:"accent",time_24h:"system",time_two_digit_hours:!1,show_end_time:!0,show_duration:!1,time_font_size:"12px",time_color:"var(--secondary-text-color)",time_icon_size:"14px",time_max_lines:0,show_location:!0,show_location_allday:!0,remove_location_country:!1,location_font_size:"12px",location_color:"var(--secondary-text-color)",location_icon_size:"14px",location_max_lines:0,show_description:!1,show_description_allday:!0,title_max_lines:0,scroll_long_titles:!1,description_max_lines:0,description_font_size:"12px",description_color:"var(--secondary-text-color)",description_icon_size:"14px",weather_entity:void 0,weather:{entity:void 0,position:"date",date:{show_conditions:!0,show_high_temp:!0,show_low_temp:!1,show_uv_index:!1,uv_index_threshold:0,icon_size:"14px",font_size:"12px"},event:{show_conditions:!0,show_temp:!0,show_uv_index:!1,uv_index_threshold:0,daily_forecast_fallback:!0,max_lines:0,icon_size:"14px",font_size:"12px"}},tap_action:{action:"none"},hold_action:{action:"none"},day_tap_action:{action:"none"},event_tap_action:{action:ke},event_hold_action:{action:"none"},open_links:!1,allow_event_edit:!0,allow_event_delete:!0,toolbar:{show:!1,navigation:!0,add_event:!0,view_switcher:!0,view_switcher_layouts:["list","column","grid","month"],reset:!1,refresh:!0,search:!0,legend:"menu",size:"normal",buttons:[]},refresh_interval:30,refresh_on_navigate:!0,list:void 0,column:void 0,time_grid:void 0,month:void 0};function pi(e,t=0){const n="string"==typeof e&&""!==e.trim()?Number(e):e;if("number"==typeof n&&Number.isFinite(n)&&!(n<t))return n}function fi(e){const t=pi(e);return void 0!==t&&t<=100?t:void 0}const gi={light:"var(--ha-font-weight-light, 300)",regular:"var(--ha-font-weight-normal, 400)",normal:"var(--ha-font-weight-normal, 400)",medium:"var(--ha-font-weight-medium, 500)",bold:"var(--ha-font-weight-bold, 700)"};function vi(e){const t="string"==typeof e?e.trim().toLowerCase():e;if("default"===t)return"";if("string"==typeof t&&Object.prototype.hasOwnProperty.call(gi,t))return gi[t];const n=pi(t,1);return void 0!==n&&n<=1e3?String(n):void 0}function _i(e,t="past_event_opacity"){null==e||"string"==typeof e&&""===e.trim()||void 0!==fi(e)||et(`Ignoring "${t}": expected a finite percentage from 0 to 100.`)}const yi=["week_number_color","week_number_background_color","week_separator_color"];function wi(e){return"string"==typeof e&&""!==e.trim()?e:void 0}function bi(e,t){null!=e&&"string"!=typeof e&&et(`Invalid ${t} ${JSON.stringify(e)}: expected a CSS color as text, such as "#e67c7350"; in YAML, quote a hex color. Ignoring it.`)}const xi={max_events_to_show:"compact_events_to_show",vertical_line_color:"accent_color",horizontal_line_width:"day_separator_width",horizontal_line_color:"day_separator_color",row_spacing:"day_spacing"},ki={max_events_to_show:"compact_events_to_show"},$i=new Set(["event_tap_action","event_hold_action"]);function Si(e,t){const n={...e};for(const[i,r]of Object.entries(t)){const t=e[i];n[i]=!$i.has(i)&&Vt(r)&&Vt(t)?Si(t,r):r}return n}const Ti=[!1,"menu","chips"],Mi=["normal","large"];function Di(e){const t=mi.toolbar,n=Vt(e.toolbar)?e.toolbar:{},i=e=>"boolean"==typeof n[e]?n[e]:t[e],r=function(e,t){const n=Array.isArray(e)?e:t;return Ae.filter(e=>n.includes(e))}(n.view_switcher_layouts,t.view_switcher_layouts),a=Ti.includes(n.legend)?n.legend:t.legend,o=Mi.includes(n.size)?n.size:t.size;return{show:i("show"),navigation:i("navigation"),addEvent:i("add_event"),viewSwitcher:i("view_switcher"),switcherViews:r,reset:i("reset"),refresh:i("refresh"),search:i("search"),legend:a,size:o,buttons:Array.isArray(n.buttons)?n.buttons.filter(Ei):[]}}function Ci(e){const t=Di(e);if(!t.show||!t.viewSwitcher)return[];const n=Ae.filter(n=>n===e.view||t.switcherViews.includes(n));return n.length>=2?n:[]}function Ai(e){const t=Di(e);return!!t.show&&(t.navigation||t.addEvent||t.reset||t.refresh||!1!==t.legend||t.buttons.length>0||Ci(e).length>0)}function Ei(e){if(!Vt(e))return!1;const{icon:t,name:n,entity:i,tap_action:r}=e,a=e=>null==e;return"string"==typeof t&&""!==t.trim()&&(a(n)||"string"==typeof n)&&(a(i)||"string"==typeof i)&&(a(r)||Vt(r))}function Pi(e){return e.days_to_show=pi(e.days_to_show,1)??mi.days_to_show,e.refresh_interval=pi(e.refresh_interval,1)??mi.refresh_interval,e.event_background_opacity=pi(e.event_background_opacity,0)??mi.event_background_opacity,_i(e.past_event_opacity),e.past_event_opacity=fi(e.past_event_opacity)??mi.past_event_opacity,e.today_date_scale=pi(e.today_date_scale,Number.MIN_VALUE)??1,e.past_date_scale=pi(e.past_date_scale,Number.MIN_VALUE)??1,e.past_date_opacity=fi(e.past_date_opacity)??100,void 0===vi(e.today_date_font_weight)&&(e.today_date_font_weight="default"),void 0===vi(e.past_date_font_weight)&&(e.past_date_font_weight="default"),e.compact_days_to_show=pi(e.compact_days_to_show,1),e.compact_events_to_show=pi(e.compact_events_to_show,0),e.countdown_max_days=pi(e.countdown_max_days,0),e.skip_first_events=pi(e.skip_first_events,0),e}function Li(e,t){return Ri(Fi(mi,e),t,e)}function Fi(e,t){let n=e;for(const e of t.split("."))n=pr(n)?n[e]:void 0;return n}function Ri(e,t,n){const i=function(e,t){return function(e){return"string"==typeof e&&/^-?\d+(?:\.\d+)?px$/.test(e)}(e)||void 0!==t&&cr.has(t)}(e,n);if(null==t)return i?e:t;const r=void 0===n?void 0:Wi(n);if(void 0!==r)return r(t)??e;const a=ur(t);return void 0===a?t:i?`${a}px`:t}const Oi=new Set(["today_indicator_size","time_icon_size","location_icon_size","description_icon_size","weather.date.icon_size","weather.event.icon_size"]),Ni=new Set(["title_font_size","week_number_font_size","month_separator_label_font_size","weekday_font_size","day_font_size","month_font_size","event_font_size","time_font_size","location_font_size","description_font_size","weather.date.font_size","weather.event.font_size","cell_event_font_size","cell_time_font_size"]),Ii=new Set(["vertical_line_width"]),zi=new Set(["card_height","card_max_height","narrow_card_height","narrow_card_max_height"]),ji={thin:"1px",medium:"3px",thick:"5px",none:"0px"},Hi=[...Oi,...Ni,...Ii,...zi];function Wi(e){return Oi.has(e)?Qi:Ii.has(e)?tr:zi.has(e)?e.endsWith("_max_height")?ar:rr:Ni.has(e)?er:void 0}const Bi="(?:px|cm|mm|q|in|pt|pc|r?em|r?ex|r?cap|r?ch|r?ic|r?lh|[sld]?v(?:w|h|i|b|min|max)|cq(?:w|h|i|b|min|max))",qi=new RegExp(`^\\+?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?${Bi}$`,"i"),Ui=new RegExp(`(\\d)\\s+(${Bi})(?![a-z])`,"gi"),Vi=new RegExp(`(\\d)\\s+(${Bi}|%)(?![a-z])`,"gi"),Gi=/^\+?(?:\d*\.)?\d+(?:e[+-]?\d+)?%$/i,Ki=/^(?:xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large|larger|smaller|math|inherit|initial|unset|revert|revert-layer)$/i,Yi=/^[a-z][a-z-]*\([\s\S]*\)$/i,Ji=/[\s;]+$/,Xi=/!\s*important$/i;function Zi(e,t){return"undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports(e,t)}function Qi(e){return or(e,sr)}function er(e){return or(e,lr)}function tr(e){return("string"==typeof e?ji[e.trim().toLowerCase()]:void 0)??Qi(e)}function nr(e){return Qi(e)?.replace(/ !important$/,"")}function ir(e,t){return"string"==typeof e&&e.replace(Ji,"").trim().toLowerCase()===t}function rr(e){return ir(e,"auto")?"auto":nr(e)}function ar(e){return ir(e,"none")?"none":nr(e)}function or(e,t){if("string"!=typeof e)return t(e);const n=e.replace(Ji,"").trim();if(!Xi.test(n))return t(n);const i=t(n.replace(Xi,"").replace(Ji,"").trim());return void 0===i?void 0:`${i} !important`}function sr(e){const t=ur(e),n=void 0!==t?`${t}px`:"string"==typeof e?e.replace(Ui,"$1$2"):"";return qi.test(n)||Yi.test(n)&&!n.includes("%")&&Zi("border-top-width",n)?n:void 0}function lr(e){const t=ur(e),n=void 0!==t?`${t}px`:"string"==typeof e?e.replace(Vi,"$1$2"):"";return qi.test(n)||Gi.test(n)||Ki.test(n)||Yi.test(n)&&Zi("font-size",n)?n:void 0}function dr(e,t,n=e,i=Fi(mi,e)){if(!function(e,t){const n=Wi(e);return void 0!==n&&null!=t&&!("string"==typeof t&&""===t.trim())&&void 0===n(t)}(e,t))return;const r=Ni.has(e)?'a CSS font size such as "14px", "1.2em", "120%" or "large"':Ii.has(e)?'a non-negative CSS length such as "2px" or "0.2em", or "thin", "medium" or "thick"':zi.has(e)?e.endsWith("_max_height")?'"none" or a non-negative CSS length such as "40rem", "600px" or "90dvh", not a percentage or another keyword':'"auto" or a non-negative CSS length such as "44rem", "600px" or "100dvh", not a percentage or another keyword':'a non-negative CSS length such as "6px" or "0.5em"',a=void 0===i?"Ignoring it.":`Falling back to "${String(i)}".`;et(`Invalid ${n} ${JSON.stringify(t)}: expected ${r}. ${a}`)}const cr=new Set(["title_font_size","progress_bar_width","progress_bar_height","height","max_height","axis_width"]);function ur(e){if("number"==typeof e)return Number.isFinite(e)?`${e}`:void 0;if("string"!=typeof e)return;const t=e.trim();return/^-?\d+(?:\.\d+)?$/.test(t)?t:void 0}function hr(e){return mr(e,mi),e}function mr(e,t,n){let i=!1;for(const r of Object.keys(e)){const a=e[r],o=t[r],s=void 0===n?r:`${n}.${r}`;if(pr(a)&&pr(o)){const t={...a};mr(t,o,s)&&(e[r]=t,i=!0);continue}const l=Ri(o,a,s);l!==a&&(e[r]=l,i=!0)}return i}function pr(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function fr(e){return Array.isArray(e)?e.map(e=>"string"==typeof e?{entity:e,color:void 0,accent_color:void 0,label_icon_color:void 0}:e&&"object"==typeof e&&e.entity?{entity:e.entity,name:"string"==typeof e.name&&""!==e.name.trim()?e.name.trim():void 0,show_in_legend:"boolean"==typeof e.show_in_legend?e.show_in_legend:void 0,label:e.label,label_type:jt(e.label_type)?e.label_type:void 0,color:e.color||void 0,accent_color:e.accent_color||void 0,label_icon_color:e.label_icon_color||void 0,text_scale:pi(e.text_scale,Number.MIN_VALUE),show_time:e.show_time,show_location:e.show_location,location_icon:e.location_icon||void 0,show_description:e.show_description,show_weather:"boolean"==typeof e.show_weather?e.show_weather:void 0,compact_events_to_show:pi(e.compact_events_to_show,0),blocklist:e.blocklist,allowlist:e.allowlist,filter_field:e.filter_field,replace_field:e.replace_field,replace_pattern:e.replace_pattern,replace_with:e.replace_with,split_multiday_events:e.split_multiday_events,multiday_banners:e.multiday_banners,event_type:e.event_type,days_of_week:e.days_of_week,allday_expires_at:e.allday_expires_at,starts_after:e.starts_after,starts_before:e.starts_before,visibility:un(e.visibility),private:!0===e.private||void 0}:null).filter(Boolean):[]}function gr(e){return JSON.stringify((e||[]).map(e=>{const t="string"==typeof e?{entity:e}:e;return Object.keys(t).sort().map(e=>[e,t[e]])}))}const vr=["event_type"],_r={columns:"full",rows:"auto"};function yr(e){return{toolbar:{show:!0},day_tap_action:{action:ye},...void 0===e?{}:{weather_entity:e,list:{weather:{position:"date"}},column:{weather:{position:"date"}},time_grid:{weather:{position:"date"}}}}}function wr(e){return{type:"custom:calendar-card-pro",config_version:6,entities:[...e],days_to_show:3}}function br(e){const t=function(e){if(!e||"object"!=typeof e)return null;if("states"in e&&"object"==typeof e.states){const t=Object.keys(e.states).find(e=>e.startsWith("calendar."));if(t)return t}return Object.keys(e).find(e=>e.startsWith("calendar."))||null}(e);return{...wr(t?[t]:[]),_description:t?void 0:"A calendar card that displays events from multiple calendars with individual styling. Add a calendar integration to Home Assistant to use this card."}}function xr(e){return Math.min(6e4*2**Math.min(Math.max(e,1)-1,20),18e5)}function kr(e){return"home-assistant"===e}const $r="accent";function Sr(e){return e===$r}const Tr=new Set(["primary","accent","red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","light-grey","grey","dark-grey","blue-grey","black","white","primary-text","secondary-text","disabled"]);function Mr(e){return Tr.has(e)?`var(--${e}-color)`:e}let Dr,Cr,Ar,Er=new Map,Pr=!1,Lr=0,Fr=!1,Rr=0,Or=0;const Nr=new WeakSet;let Ir,zr,jr=!1,Hr=0;const Wr=new Set;function Br(){return Er}function qr(e){if(Dr)return void(jr=!0);const t=function(e){const t=function(e,t){if("function"==typeof e.callWS)return e.callWS(t);const n=e.connection;return n&&"function"==typeof n.sendMessagePromise?n.sendMessagePromise(t):void 0}(e,{type:"config/entity_registry/list"});if(!t)return void(Fr||(Fr=!0,it("This instance exposes no WebSocket command API, so Home Assistant calendar colors are unavailable; configured colors are used instead")));const n=Rr;return t.then(e=>n===Rr&&(Er=function(e){const t=new Map;for(const n of e??[]){const e=n?.entity_id;if("string"!=typeof e||!e.startsWith("calendar."))continue;const i=n.options?.calendar?.color;"string"==typeof i&&""!==i&&t.set(e,Mr(i))}return t}(e),Pr=!0,Or=0,Ur(),it(`Loaded ${Er.size} calendar colors from the entity registry`),!0)).catch(e=>(it("Could not read calendar colors from the entity registry",e),!1))}(e);if(!t)return;const n=Rr;Dr=t.then(t=>{if(n===Rr){if(Dr=void 0,t&&function(){for(const e of Wr)e()}(),jr)return jr=!1,void qr(Ir??e);t||(Pr=!1,function(e){Pr||Ar||0===Wr.size||(Or+=1,Ar={timer:setTimeout(()=>Vr(!1),xr(Or)),hass:e})}(e))}})}function Ur(){Ar&&(clearTimeout(Ar.timer),Ar=void 0)}function Vr(e){const t=Ar?.hass;Ur(),e&&(Or=0),t&&!Pr&&!Dr&&Wr.size>0&&qr(t)}function Gr(e){const t=e.connection;if(Cr||void 0!==zr||!t||"function"!=typeof t.subscribeEvents)return;Cr=()=>{};const n=++Lr;t.subscribeEvents(()=>{n===Lr&&qr(Ir??e)},"entity_registry_updated").then(e=>{n===Lr?(Cr=e,Hr=0):e()}).catch(()=>{n===Lr&&(Cr=void 0,Hr+=1,zr=setTimeout(()=>{zr=void 0,Ir&&Wr.size>0&&Gr(Ir)},xr(Hr)))})}function Kr(e){Wr.delete(e),0===Wr.size&&(Lr++,Rr++,Cr&&(Cr(),Cr=void 0),Pr=!1,Dr=void 0,jr=!1,Or=0,Ur(),Ir=void 0,Hr=0,void 0!==zr&&(clearTimeout(zr),zr=void 0))}function Yr(e){return e?.position||"date"}function Jr(e){const t=e?.weather;return null!==t&&"object"==typeof t&&!Array.isArray(t)&&!Xr.has(t)&&!!t.entity}const Xr=new WeakSet;function Zr(e){if(Jr(e))return e.weather.entity;const t=e?.weather_entity;return"string"==typeof t&&""!==t.trim()?t:void 0}const Qr=["days_to_show","show_empty_days","show_empty_today","empty_day_text","empty_day_color","split_multiday_events","show_past_events","filter_duplicates","duplicate_accent_color","vertical_line_width","event_spacing","event_gap","day_spacing","additional_card_spacing","height","max_height","card_height","card_max_height","today_indicator","today_indicator_size","today_indicator_color","weekday_font_size","day_font_size","show_month","month_font_size","today_date_scale","today_date_font_weight","past_date_scale","past_date_font_weight","past_date_opacity","event_background_opacity","past_event_opacity","event_color","event_font_size","show_countdown","show_countdown_allday","countdown_exact_days","countdown_max_days","show_progress_bar","show_now_indicator","now_color","progress_bar_color","progress_bar_height","progress_bar_width","event_icon_vertical_alignment","show_time","time_position","show_single_allday_time","show_multiday_allday_time","allday_badge","allday_badge_style","allday_badge_color","time_two_digit_hours","show_end_time","show_duration","time_color","time_font_size","time_icon_size","time_max_lines","show_location","show_location_allday","remove_location_country","location_color","location_font_size","location_icon_size","location_max_lines","show_description","show_description_allday","title_max_lines","scroll_long_titles","description_max_lines","description_color","description_font_size","description_icon_size","show_week_numbers","show_current_week_number","week_number_font_size","week_number_color","week_number_background_color","day_separator_width","day_separator_color","week_separator_width","week_separator_color","month_separator_width","month_separator_color"],ea=[...Qr,"multiday_banners"],ta=[...Qr,"compact_days_to_show","compact_events_to_show","compact_events_complete_days","event_order","skip_first_events","date_vertical_alignment","today_indicator_position","month_separator_label","month_separator_label_color","month_separator_label_font_size"],na=[...function(e){const t=new Set(["height","max_height","days_to_show","show_empty_days","show_empty_today","empty_day_text","empty_day_color","split_multiday_events","show_multiday_allday_time","day_spacing","day_separator_width","day_separator_color","week_separator_width","week_separator_color","month_separator_width","month_separator_color","week_number_background_color","today_date_scale","past_date_scale","today_indicator_size","time_position","time_icon_size","show_description","show_description_allday","description_font_size","description_color","description_icon_size","description_max_lines","show_countdown","show_countdown_allday","countdown_max_days","countdown_exact_days","show_progress_bar","progress_bar_color","progress_bar_height","progress_bar_width","allday_badge","allday_badge_style","allday_badge_color","title_max_lines","time_max_lines","location_max_lines","event_icon_vertical_alignment"]);return e.filter(e=>!t.has(e))}(Qr),"multiday_banners"],ia=new Set(["column","grid"]),ra={date_vertical_alignment:new Set(["list"]),today_indicator_position:new Set(["list"]),compact_events_to_show:new Set(["list"]),compact_days_to_show:new Set(["list"]),compact_events_complete_days:new Set(["list"]),event_order:new Set(["list"]),skip_first_events:new Set(["list"]),month_separator_label:new Set(["list"]),month_separator_label_color:new Set(["list"]),month_separator_label_font_size:new Set(["list"]),height:new Set(["list","column","grid"]),max_height:new Set(["list","column","grid"]),days_to_show:new Set(["list","column","grid"]),show_empty_days:new Set(["list","column","grid"]),show_empty_today:new Set(["list","column","grid"]),day_spacing:new Set(["list","column","grid"]),day_separator_width:new Set(["list","column","grid"]),day_separator_color:new Set(["list","column","grid"]),week_separator_width:new Set(["list","column","grid"]),week_separator_color:new Set(["list","column","grid"]),month_separator_width:new Set(["list","column","grid"]),month_separator_color:new Set(["list","column","grid"]),week_number_background_color:new Set(["list","column","grid"]),today_date_scale:new Set(["list","column","grid"]),past_date_scale:new Set(["list","column","grid"]),today_indicator_size:new Set(["list","column","grid"]),today_weekday_color:new Set(["list","column","grid"]),split_multiday_events:new Set(["list","column"]),multiday_banners:new Set(["grid","month"]),empty_day_text:new Set(["list","column"]),empty_day_color:new Set(["list","column"]),show_now_indicator:new Set(["list","column","month"]),show_single_allday_time:new Set(["list","column","month"]),show_multiday_allday_time:new Set(["list","column"]),show_location_allday:new Set(["list","column","month"]),show_description_allday:new Set(["list","column"]),show_countdown_allday:new Set(["list","column"]),allday_badge:new Set(["list","column"]),allday_badge_style:new Set(["list","column"]),allday_badge_color:new Set(["list","column"]),show_description:new Set(["list","column","grid"]),description_font_size:new Set(["list","column","grid"]),description_color:new Set(["list","column","grid"]),description_icon_size:new Set(["list","column","grid"]),description_max_lines:new Set(["list","column","grid"]),show_countdown:new Set(["list","column","grid"]),countdown_max_days:new Set(["list","column","grid"]),countdown_exact_days:new Set(["list","column","grid"]),show_progress_bar:new Set(["list","column","grid"]),progress_bar_color:new Set(["list","column","grid"]),progress_bar_height:new Set(["list","column","grid"]),progress_bar_width:new Set(["list","column","grid"]),title_max_lines:new Set(["list","column","grid"]),location_max_lines:new Set(["list","column","grid"]),event_icon_vertical_alignment:new Set(["list","column","grid"]),time_icon_size:new Set(["list","column","grid"]),time_position:new Set(["list","column"]),event_spacing:new Set(["list","column","month"]),event_gap:new Set(["list","column","month"]),time_max_lines:new Set(["list","column"]),open_links:new Set(["list","column","month"])};function aa(e,t){const n=Object.prototype.hasOwnProperty.call(ra,e)?ra[e]:void 0;return void 0===n||n.has(t)}function oa(e,t){return"latest_first"===e.event_order&&aa("event_order",t)}const sa=new Set(["entities","start_date","first_day_of_week","weather","weather_entity","refresh_interval","refresh_on_navigate"]),la={day_header_gap:"8px",day_header_separator_width:"0px",day_header_separator_color:"color-mix(in srgb, var(--primary-text-color) 18%, transparent)",min_day_width:140,min_days_fallback:"list"},da={day_header_gap:"8px",day_header_separator_width:"1px",day_header_separator_color:"color-mix(in srgb, var(--primary-text-color) 18%, transparent)",min_day_width:100,min_days_to_show:1,min_days_fallback:"list",start_time:"07:00",end_time:"22:00",slot_minutes:60,weekend_background_color:"color-mix(in srgb, var(--primary-text-color) 4%, transparent)",today_background_color:"transparent",hour_height:"48px",show_now_line:!0,max_simultaneous_events:3,overlap_layout:"cascade",allday_band_max_rows:3,axis_width:"max-content",show_axis_labels:!0,axis_label_minutes:60,hour_line_width:"1px",hour_line_color:"color-mix(in srgb, var(--divider-color) 75%, transparent)",allday_band_line_width:"2px",allday_band_line_color:"color-mix(in srgb, var(--divider-color) 75%, transparent)"};function ca(e,t){const n=ja(e,"column");return n&&Na(n,t)?function(e,t){const n=la[e];if("number"==typeof n){const e="number"==typeof t?t:Number.parseFloat(String(t));return Number.isFinite(e)&&e>0?e:n}return"min_days_fallback"===e?"cramp"===t||"list"===t?t:n:String(Ri(n,t,e))}(t,n[t]):la[t]}const ua=/^(\d+(?:\.\d+)?)px$/i;function ha(e){const t=da.axis_width,n=String(Ri(t,e,"axis_width"));return"max-content"===n||ua.test(n)?{value:n,usedFallback:!1}:{value:t,usedFallback:!0}}function ma(e,t){const n=ja(e,"grid");return n&&Na(n,t)?function(e,t){const n=da[e];if("min_days_fallback"===e)return"cramp"===t||"list"===t?t:n;if("overlap_layout"===e)return"cascade"===t||"columns"===t?t:n;if("boolean"==typeof n)return"boolean"==typeof t?t:n;if("number"==typeof n){const i="number"==typeof t?t:Number.parseFloat(String(t));return"slot_minutes"===e?[15,20,30,60].includes(i)?i:n:"axis_label_minutes"===e?[30,60,120,180].includes(i)?i:n:"allday_band_max_rows"===e||"max_simultaneous_events"===e?Number.isFinite(i)&&i>0?Math.max(1,Math.floor(i)):n:Number.isFinite(i)&&i>0?i:n}return"start_time"===e||"end_time"===e?"string"==typeof t||"number"==typeof t?String(t):"":"weekend_background_color"===e||"today_background_color"===e?"string"==typeof t?t:n:"axis_width"===e?ha(t).value:String(Ri(n,t,e))}(t,n[t]):da[t]}const pa={min_day_width:80,weekend_background_color:da.weekend_background_color,today_background_color:da.today_background_color,cell_event_font_size:"12px",cell_time_font_size:"10px"};function fa(e,t){const n=ja(e,"month");return n&&Na(n,t)?function(e,t){const n=pa[e];if("number"==typeof n){const e="number"==typeof t?t:Number.parseFloat(String(t));return Number.isFinite(e)&&e>0?e:n}return"cell_event_font_size"===e||"cell_time_font_size"===e?er(t)??n:"weekend_background_color"===e||"today_background_color"===e?"string"==typeof t?t:n:String(Ri(n,t,e))}(t,n[t]):pa[t]}function ga(e,t,n="wide"){const i={height:rr(Ba(e,"card_height",t))??"auto",max:ar(Ba(e,"card_max_height",t))??"none"};if("month"!==t||"wide"===n)return i;const r=ja(e,"month"),a=(e,t)=>r&&Na(r,e)?t(r[e]):void 0;return{height:a("narrow_card_height",rr)??i.height,max:a("narrow_card_max_height",ar)??i.max}}function va(e){return["wide","narrow"].some(t=>{const{height:n,max:i}=ga(e,"month",t);return"auto"!==n||"none"!==i})}function _a(e){const t=/^([-+]?(?:\d*\.)?\d+)[a-z%]*$/i.exec(e.trim());return null!==t&&0===Number.parseFloat(t[1])}function ya(e){const t=e.event_gap;return"string"==typeof t&&!t.trim().startsWith("-")&&!_a(t)}function wa(e,t){const n=e.trim(),i=/^([-+]?(?:\d*\.)?\d+)([a-z%]*)$/i.exec(n);if(i){const e=i[2]||"px";return`${Number.parseFloat(i[1])*t}${e}`}return`calc(${t} * (${n}))`}const ba=new Map([["xx-small",9.6],["x-small",12],["small",128/9],["medium",16],["large",19.2],["x-large",24],["xx-large",32],["xxx-large",48]]),xa=/((?:\d*\.)?\d+(?:e[+-]?\d+)?)%/gi,ka=new Map([["larger",1.2],["smaller",1/1.2],["math",1],["inherit",1],["unset",1],["revert",1],["revert-layer",1]]),$a=new RegExp(`(^|[^\\w-])(${[...ba.keys(),...ka.keys(),"initial"].join("|")})(?![\\w-])`,"gi");function Sa(e,t){const n=e.trim().replace(/\s*!\s*important$/i,"").trim(),i=Ta(n,t);if(void 0!==i)return i;const r=/^\+?((?:\d*\.)?\d+(?:e[+-]?\d+)?)%$/i.exec(n);return r?Number.parseFloat(r[1])*t/100+"em":wa(n.replace(xa,(e,t)=>Number.parseFloat(t)/100+"em").replace($a,(e,t,n)=>`${t}${Ta(n,1)??n}`),t)}function Ta(e,t){const n=e.toLowerCase(),i=ba.get("initial"===n?"medium":n);if(void 0!==i)return i*t+"px";const r=ka.get(n);return void 0===r?void 0:t*r+"em"}const Ma=/\s*!\s*important\s*$/i,Da=new Map([["xx-small",9],["x-small",10],["small",13],["medium",16],["initial",16],["large",18],["x-large",24],["xx-large",32],["xxx-large",48]]),Ca=new RegExp(`(^|[^\\w-])(${[...Da.keys()].join("|")})(?![\\w-])`,"gi"),Aa=new Set(["inherit","initial","unset","revert","revert-layer"]),Ea=new Set(["em","ex","ch","cap","ic","lh"]),Pa=new Set(["px","cm","mm","q","in","pt","pc","rem","rex","rch","rcap","ric","rlh",...["vw","vh","vi","vb","vmin","vmax"].flatMap(e=>[e,`s${e}`,`l${e}`,`d${e}`]),"cqw","cqh","cqi","cqb","cqmin","cqmax"]),La=/(^|[^\w.-])([-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)([a-z]+)(?![\w-])/gi;function Fa(e,t){const n=e.trim().replace(Ma,"").trim();return Ma.test(e)?`${t(n)} !important`:t(n)}function Ra(e,t,n="1em"){return Fa(e,e=>{const i=e.toLowerCase();if(Aa.has(i))return Ra(n,t);const r=Da.get(i);return void 0!==r?r*t+"px":Sa(e.replace(Ca,(e,t,n)=>`${t}${Da.get(n.toLowerCase())}px`),t)})}function Oa(e,t,n=!0){return Fa(e,e=>/var\(/i.test(e)?`calc(${t} * (${e}))`:e.replace(La,(e,i,r,a)=>{const o=a.toLowerCase();return Pa.has(o)||!n&&Ea.has(o)?`${i}${Number.parseFloat(r)*t}${a}`:e}))}function Na(e,t){return Object.prototype.hasOwnProperty.call(e,t)&&!function(e,t){return void 0===t||("past_event_opacity"===e||"past_date_opacity"===e?void 0===fi(t):"today_date_scale"===e||"past_date_scale"===e?void 0===pi(t,Number.MIN_VALUE):"today_date_font_weight"===e||"past_date_font_weight"===e?void 0===vi(t):"countdown_max_days"===e&&void 0===pi(t,0))}(t,e[t])}const Ia={day_separator_width:"1px",day_separator_color:"color-mix(in srgb, var(--divider-color) 75%, transparent)",day_spacing:"1px",description_color:$r,event_background_opacity:20,event_color:$r,event_font_size:"12px",location_color:$r,progress_bar_color:$r,time_color:$r,progress_bar_width:"100%",show_empty_days:!0,show_location:!1,show_past_events:!0},za={list:{blockKey:"list",overrideKeys:ta,onlyKeys:[],onlyDefaults:{},defaultOverrides:{}},column:{blockKey:"column",overrideKeys:Qr,onlyKeys:["day_header_gap","day_header_separator_width","day_header_separator_color","min_day_width","min_days_to_show","min_days_fallback"],onlyDefaults:la,defaultOverrides:{show_empty_days:!0,split_multiday_events:!0}},grid:{blockKey:"time_grid",overrideKeys:ea,onlyKeys:["day_header_gap","day_header_separator_width","day_header_separator_color","min_day_width","min_days_to_show","min_days_fallback","start_time","end_time","slot_minutes","weekend_background_color","today_background_color","hour_height","show_now_line","max_simultaneous_events","overlap_layout","allday_band_max_rows","axis_width","show_axis_labels","axis_label_minutes","hour_line_width","hour_line_color","allday_band_line_width","allday_band_line_color"],onlyDefaults:da,defaultOverrides:Ia},month:{blockKey:"month",overrideKeys:na,onlyKeys:["narrow_card_height","narrow_card_max_height","min_day_width","weekend_background_color","today_background_color","cell_event_font_size","cell_time_font_size"],onlyDefaults:pa,defaultOverrides:{day_font_size:"16px",weekday_font_size:"16px",week_number_font_size:"13.5px",month_font_size:"16px",vertical_line_width:"3px",event_gap:"6px",show_past_events:!0},pinned:{show_description:!1,show_description_allday:!0,description_font_size:"12px",description_color:"var(--secondary-text-color)",description_icon_size:"14px",description_max_lines:0,show_countdown:!1,show_countdown_allday:!0,countdown_max_days:void 0,countdown_exact_days:!1,show_progress_bar:!1,progress_bar_color:"var(--secondary-text-color)",progress_bar_height:"0.75em",progress_bar_width:void 0,allday_badge:"off",allday_badge_style:"subtle",allday_badge_color:"accent",title_max_lines:0,time_max_lines:0,location_max_lines:0,event_icon_vertical_alignment:"top"}}};function ja(e,t){const n=za[t];if(!n)return;const i=e[n.blockKey];return i&&"object"==typeof i?i:void 0}function Ha(e){return"list"===e}function Wa(e){switch(e){case"column":return"column-view";case"grid":return"grid-view";case"month":return"month-view";case"list":return""}}function Ba(e,t,n){if("weather"===t)return Ga(e,n);const i=za[n];if(!i)return e[t];if(i.pinned&&Object.prototype.hasOwnProperty.call(i.pinned,t))return i.pinned[t];const r=ja(e,n);return r&&Na(r,t)?Pi({...e,[t]:Li(t,r[t])})[t]:i.defaultOverrides[t]??e[t]}function qa(e,t){const n=za[t];if(!n)return e;const i=ja(e,t),r={...n.defaultOverrides};if(i)for(const e of n.overrideKeys){const t=e;Na(i,t)&&(r[e]=Li(e,i[t]))}const a=Ga(e,t);return a!==e.weather&&(r.weather=a),n.pinned&&Object.assign(r,n.pinned),0===Object.keys(r).length?e:Pi({...e,...r})}Object.fromEntries(Object.entries(za).map(([e,t])=>[e,t.blockKey])),new Set(Object.values(za).flatMap(e=>e.onlyKeys));const Ua={date:mi.weather?.date,event:mi.weather?.event,position:"none"},Va=new WeakMap;function Ga(e,t){if(Jr(e))return e.weather;const n=Zr(e);if(void 0===n)return e.weather;const i=ja(e,t)?.weather;return Ya(e,t,[e.weather,i,n],()=>{return e=function(e,t,n){const i=Vt(e)?{...e}:{};delete i.entity;const r=Si(Ua,i),a=r.position,o="string"==typeof a&&""!==a?r.position:"none",s="month"===t?function(e){return"event"===e||"both"===e?"event":"none"}(o):o;return hr({weather:{...r,position:s,entity:n}}).weather}(i,t,n),Xr.add(e),e;var e})}function Ka(e,t){const n=Ga(e,t);return"month"===t&&Jr(e)?Ya(e,"month-drawn",[n],()=>({...n,position:"none"})):n}function Ya(e,t,n,i){const r=Va.get(e)?.get(t);if(r&&r.inputs.every((e,t)=>e===n[t]))return r.weather;const a=i(),o=Va.get(e)??new Map;return o.set(t,{inputs:n,weather:a}),Va.set(e,o),a}function Ja(e,t=!1){const n=t?Ae:_o(e),i=new Set(n.flatMap(t=>function(e){if(!e||!e.entity)return[];const t=Yr(e);return"none"===t?[]:"date"===t?["daily"]:["daily","hourly"]}(Ka(e,t))));return["daily","hourly"].filter(e=>i.has(e))}function Xa(e){for(const t of function(e){if(!e||"object"!=typeof e)return[];const t=[],n=new Set;for(const i of Object.values(za))for(const r of i.onlyKeys)!n.has(r)&&Object.prototype.hasOwnProperty.call(e,r)&&(n.add(r),t.push({kind:"view-only",key:r,from:null,to:eo(r)}));for(const n of Object.keys(e))no().has(n)&&!ge.has(n)&&t.push({kind:"calendar",key:n,from:null,to:[]});for(const n of Object.values(za))t.push(...ro(e,n));return t}(e))"calendar"===t.kind&&null===t.from&&ao(t);for(const t of Object.keys(za))Qa(e,t);!function(e){const t=e;if(Jr(e))void 0!==t.weather_entity&&et('Ignoring "weather_entity": the top-level "weather:" names an entity, so it is the weather as written before v6 and decides every layout\'s. Remove its entity to use "weather_entity" and each layout\'s own "weather:".');else{void 0!==Zr(e)&&Vt(e.weather)&&!Za(e.weather,mi.weather)&&et('Ignoring the top-level "weather:" options: without an entity of its own it no longer sets the weather. Set it in each layout\'s "weather:" instead.');for(const t of Object.values(za)){const n=e[t.blockKey];if(!Vt(n))continue;const i=n.weather,r=`${t.blockKey}.weather`;if(null!=i)if(Vt(i)){Gt(i,"entity")&&et(`Ignoring "${r}.entity": every layout draws from one weather entity. Set it as "weather_entity" at the top level.`);for(const e of Hi){if(!e.startsWith("weather."))continue;const n=e.slice(8).split(".").reduce((e,t)=>Vt(e)?e[t]:void 0,i);void 0!==n&&dr(e,n,`${t.blockKey}.${e}`)}}else et(`Ignoring "${r}": expected an object of weather options.`)}}}(e)}function Za(e,t){if(e===t)return!0;if(!Vt(e)||!Vt(t))return!1;const n=e,i=t;return[...new Set([...Object.keys(n),...Object.keys(i)])].every(e=>Za(n[e],i[e]))}function Qa(e,t){const n=za[t];if(!n)return;!function(e,t){for(const n of t.onlyKeys)Object.prototype.hasOwnProperty.call(e,n)&&ao({kind:"view-only",key:n,from:null,to:[t.blockKey]})}(e,n);const i=ja(e,t);if(!i)return;const r=new Set([...n.overrideKeys,...n.onlyKeys]);_i(i.past_event_opacity,`${n.blockKey}.past_event_opacity`);for(const e of Hi)r.has(e)&&dr(e,i[e],`${n.blockKey}.${e}`,n.onlyKeys.includes(e)?n.onlyDefaults[e]:void 0);for(const e of yi)r.has(e)&&bi(i[e],`${n.blockKey}.${e}`);for(const t of ro(e,n))ao(t)}function eo(e){return Object.values(za).filter(t=>t.overrideKeys.includes(e)||t.onlyKeys.includes(e)).map(e=>e.blockKey)}let to;function no(){if(void 0===to){const e=fr([{entity:"calendar.probe"}])[0]??{};to=new Set(Object.keys(e).filter(e=>"entity"!==e&&!Object.prototype.hasOwnProperty.call(mi,e)))}return to}function io(e){return Object.keys(za).find(t=>za[t]?.blockKey===e)}function ro(e,t){const n=e[t.blockKey];if(!n||"object"!=typeof n||Array.isArray(n))return[];const i=new Set([...t.overrideKeys,...t.onlyKeys]),r=t.blockKey,a=[];for(const t of Object.keys(n)){if(i.has(t))continue;if("weather"===t&&!Jr(e))continue;const n=eo(t);if(sa.has(t))a.push({kind:"fetch-time",key:t,from:r,to:[null]});else if(n.length>0)a.push({kind:"wrong-view",key:t,from:r,to:n});else if(Object.prototype.hasOwnProperty.call(mi,t)){const e=Object.prototype.hasOwnProperty.call(ra,t)?ra[t]:void 0;a.push(e&&!e.has(io(r))?{kind:"no-effect",key:t,from:r,to:[]}:{kind:"card-wide",key:t,from:r,to:[null]})}else no().has(t)?a.push({kind:"calendar",key:t,from:r,to:[]}):a.push({kind:"unknown",key:t,from:r,to:[]})}return a}function ao(e){const{key:t,from:n}=e,i=`${n}.${t}`;switch(e.kind){case"fetch-time":return"weather"===t?void et(`Ignoring "${i}": the top-level "weather:" names an entity, so it is the weather as written before v6 and decides every layout's. To set weather per layout, move its entity to "weather_entity" and its other options into each layout's "weather:".`):void et(`Ignoring "${i}": it determines which events are loaded from Home Assistant, so it cannot differ between views — switching views would have to refetch. Set "${t}" at the top level instead.`);case"card-wide":return void et(`Ignoring "${i}": "${t}" is a valid top-level option but cannot be overridden per view. Set it at the top level instead.`);case"no-effect":return void et(`Ignoring "${i}": it has no effect in ${io(n)} view, here or at the top level.`);case"wrong-view":return void et(`Ignoring "${i}": it belongs in ${e.to.map(e=>`"${e}:"`).join(" or ")}, not in "${n}:".`);case"view-only":for(const n of e.to)et(`Ignoring top-level "${t}": it is a ${n}-view-only option and has no effect outside the "${n}:" block. Move it to "${n}: { ${t}: ... }".`);return;case"calendar":return void et(`Ignoring "${null===n?t:i}": it is an option of one calendar. Set it on that calendar under "entities:".`);case"unknown":et(`Ignoring "${i}": not a recognized option.`)}}function oo(e){return e.trim().startsWith("-")?mi.day_spacing:e}function so(e,t){const n=ua.exec(e.trim());return n?Number.parseFloat(n[1]):t}function lo(e,t){return so(oo(e),t)}const co=lo(mi.day_spacing,10),uo=so(mi.time_font_size,12);function ho(e,t){return lo(String(Ba(e,"day_spacing",t)),co)}function mo(e,t){return Math.max(1,Math.floor(Ba(e,"days_to_show",t)))}function po(e){return za[e]?.onlyDefaults??la}function fo(e,t){const n=ja(e,t),i=po(t).min_day_width,r="number"==typeof i?i:la.min_day_width,a=n&&Object.prototype.hasOwnProperty.call(n,"min_day_width")?n.min_day_width:r,o="number"==typeof a?a:Number.parseFloat(String(a));return Number.isFinite(o)&&o>0?o:r}function go(e,t="column"){const n=mo(e,t),i=ja(e,t),r=po(t).min_days_to_show,a="number"==typeof r&&Number.isFinite(r)?Math.floor(r):"column"===t&&"cramp"!==vo(e,t)&&function(e){const t=Di(e);return t.show&&t.navigation}(e)?2:n;if(!i||!Object.prototype.hasOwnProperty.call(i,"min_days_to_show"))return Math.min(n,Math.max(1,a));const o=i.min_days_to_show,s="number"==typeof o?o:Number.parseFloat(String(o));return Number.isFinite(s)?Math.min(n,Math.max(1,Math.floor(s))):Math.min(n,Math.max(1,a))}function vo(e,t="column"){const n=ja(e,t),i=po(t).min_days_fallback;return"cramp"===(n&&Object.prototype.hasOwnProperty.call(n,"min_days_fallback")?n.min_days_fallback:i)?"cramp":"list"}function _o(e){const t=Ci(e),n=t.length>0?t:[e.view];return n.some(t=>ia.has(t)&&"list"===vo(e,t))&&!n.includes("list")?[...n,"list"]:n}const yo=42;function wo(e,t){const n=(Math.trunc(t)%7+7)%7;return ct(e,-(e.getDay()-n+7)%7)}function bo(e,t){return wo(new Date(e.getFullYear(),e.getMonth(),1),t)}function xo(e){const t=null==e?"":String(e);return""===t.trim()||void 0!==function(e){const t=e.replace(/\s+/g,"").toLowerCase();return"today+1"===t||"+1"===t?"tomorrow":t===lt?"start_of_week":void 0}(t)}function ko(e,t,n){return t?new Date(n.getFullYear(),n.getMonth(),n.getDate()):e}function $o(e){return _o(e).includes("month")}function So(e,t,n,i=new Date){const r=function(e){const t=_o(e).filter(e=>"month"!==e);return 0===t.length?e.days_to_show:Math.max(...t.map(t=>Ba(e,"days_to_show",t)))}(e),a=_o(e);if(!a.includes("month"))return Number.isFinite(r)&&r!==e.days_to_show?{...e,days_to_show:r}:e;const o=vt(r,e.start_date,t,i),s=bo(n?ko(o.start,xo(e.start_date),i):o.start,t),l=a.some(e=>"month"!==e),d=ct(s,yo),c=l&&ut(o.start,s)>0?o.start:s,u=l&&ut(d,o.end)>0?o.end:d,h={...e,start_date:ht(c),days_to_show:ut(c,u)};return n&&To.set(h,{startDate:e.start_date,days:l?r:yo,variant:`_month${l?"":"only"}${t}`}),h}const To=new WeakMap;function Mo(e){return To.get(e)??{startDate:e.start_date,days:e.days_to_show,variant:""}}function Do(e,t,n){const i=ho(e,n),r=fo(e,n)+i,a=function(e,t,n){if("grid"!==t)return 0;const i=String(ma(e,"axis_width")).trim(),r=ua.exec(i),a=null!==r?Number.parseFloat(r[1]):"max-content"!==i||ma(e,"show_axis_labels")?function(e,t){const n=Number(ma(e,"axis_label_minutes"))%60==0?48:72;return so(String(Ba(e,"time_font_size",t)),uo)/uo*(n-12)+12}(e,t):0;return a+n}(e,n,i);if(r<=0)return 0;const o=Math.floor((t-32+i-a)/r+1e-9);return Math.max(0,Math.min(mo(e,n),o))}function Co(e,t,n,i){const r=mo(t,e);if(!ia.has(e))return{view:e,columns:0};if(null===n||n<=0)return{view:e,columns:r};const a=Math.min(go(t,e),r),o=Ao(e,t,n,i);return o>=a?{view:e,columns:Math.min(o,r)}:"cramp"===vo(t,e)?{view:e,columns:a}:{view:"list",columns:0}}function Ao(e,t,n,i){const r=i&&i.view===e?i.columns:0,a=function(e,t="column"){const n=fo(e,t)+ho(e,t);return Math.max(0,Math.min(16,(n-1)/2))}(t,e),o=Do(t,n,e);return o>r?Do(t,n-a,e):o<r?Do(t,n+a,e):o}function Eo(e,t,n){const i=Co(e,t,n,null);return i.view===e?i:Co(e,t,n,{view:e,columns:mo(t,e)})}function Po(e){if(!e||!e.length)return;const t=e[0];return"string"==typeof t?t:t.entity}function Lo(e,t,n){const i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={config:t,action:n},e.dispatchEvent(i)}function Fo(e,t){switch(e.action){case"expand":t.expand?.();break;case"refresh":t.refresh?.();break;case ye:t.addEvent?.();break;case we:t.reset?.();break;case be:t.back?.(e);break;default:return!1}return it(`Executed ${e.action} action`),!0}function Ro(e,t,n,i={},r=t.entities){const a="hold"===n?t.hold_action:t.tap_action;a&&"none"!==a.action&&(Fo(a,i)||(Lo(e,{entity:Po(r),tap_action:t.tap_action,hold_action:t.hold_action},n),it(`Delegated ${n} action (${a.action}) to HA native handler`)))}function Oo(e,t,n){return 0!==(Number(e?.states?.[t]?.attributes?.supported_features??0)&n)}async function No(e,t){if("function"!=typeof e.callWS)throw new Error("Home Assistant offers no WebSocket connection to write with");await e.callWS(t)}function Io(e,t,n){return No(e,{type:"calendar/event/create",entity_id:t,event:n})}function zo(e,t,n){return No(e,{type:"calendar/event/update",entity_id:t.entityId,uid:t.uid,...t.recurrenceId?{recurrence_id:t.recurrenceId,recurrence_range:t.range??""}:{},event:n})}function jo(e,t){return No(e,{type:"calendar/event/delete",entity_id:t.entityId,uid:t.uid,...t.recurrenceId?{recurrence_id:t.recurrenceId,recurrence_range:t.range??""}:{}})}function Ho(e){if("string"==typeof e)return e||void 0;const t=e?.message;return"string"==typeof t&&t?t:void 0}const Wo="ui.components.calendar.event.add",Bo="Add event";function qo(e){const t=e?.localize?.(Wo);return t&&t!==Wo?t:void 0}function Uo(e,t,n=new Date){const i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+t);return n>=e&&n<i?new Date(n):new Date(e)}function Vo(e,t){return e.find(e=>!t.has(e))??e[0]}function Go(e){const t=e.split("/").find(e=>""!==e);return void 0===t?"/":`/${t}`}const Ko="calendar-card-pro-calendars-changed";function Yo(e,t,n){return"ids"in e?e.ids.some(e=>t.includes(e)):t.some(t=>Oo(n,t,e.feature))}function Jo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Xo,Zo={exports:{}};function Qo(){return Xo||(Xo=1,Zo.exports=function(){var e=6e4,t=36e5,n="millisecond",i="second",r="minute",a="hour",o="day",s="week",l="month",d="quarter",c="year",u="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},g=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},v={s:g,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+g(i,2,"0")+":"+g(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,l),a=n-r<0,o=t.clone().add(i+(a?-1:1),l);return+(-(i+(n-r)/(a?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:c,w:s,d:o,D:u,h:a,m:r,s:i,ms:n,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=f;var w="$isDayjsObject",b=function(e){return e instanceof S||!(!e||!e[w])},x=function e(t,n,i){var r;if(!t)return _;if("string"==typeof t){var a=t.toLowerCase();y[a]&&(r=a),n&&(y[a]=n,r=a);var o=t.split("-");if(!r&&o.length>1)return e(o[0])}else{var s=t.name;y[s]=t,r=s}return!i&&r&&(_=r),r||!i&&_},k=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},$=v;$.l=x,$.i=b,$.w=function(e,t){return k(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function f(e){this.$L=x(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var g=f.prototype;return g.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(m);if(i){var r=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.init()},g.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},g.$utils=function(){return $},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(e,t){var n=k(e);return this.startOf(t)<=n&&n<=this.endOf(t)},g.isAfter=function(e,t){return k(e)<this.startOf(t)},g.isBefore=function(e,t){return this.endOf(t)<k(e)},g.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(e,t){var n=this,d=!!$.u(t)||t,h=$.p(e),m=function(e,t){var i=$.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return d?i:i.endOf(o)},p=function(e,t){return $.w(n.toDate()[e].apply(n.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,g=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(h){case c:return d?m(1,0):m(31,11);case l:return d?m(1,g):m(0,g+1);case s:var y=this.$locale().weekStart||0,w=(f<y?f+7:f)-y;return m(d?v-w:v+(6-w),g);case o:case u:return p(_+"Hours",0);case a:return p(_+"Minutes",1);case r:return p(_+"Seconds",2);case i:return p(_+"Milliseconds",3);default:return this.clone()}},g.endOf=function(e){return this.startOf(e,!1)},g.$set=function(e,t){var s,d=$.p(e),h="set"+(this.$u?"UTC":""),m=(s={},s[o]=h+"Date",s[u]=h+"Date",s[l]=h+"Month",s[c]=h+"FullYear",s[a]=h+"Hours",s[r]=h+"Minutes",s[i]=h+"Seconds",s[n]=h+"Milliseconds",s)[d],p=d===o?this.$D+(t-this.$W):t;if(d===l||d===c){var f=this.clone().set(u,1);f.$d[m](p),f.init(),this.$d=f.set(u,Math.min(this.$D,f.daysInMonth())).$d}else m&&this.$d[m](p);return this.init(),this},g.set=function(e,t){return this.clone().$set(e,t)},g.get=function(e){return this[$.p(e)]()},g.add=function(n,d){var u,h=this;n=Number(n);var m=$.p(d),p=function(e){var t=k(h);return $.w(t.date(t.date()+Math.round(e*n)),h)};if(m===l)return this.set(l,this.$M+n);if(m===c)return this.set(c,this.$y+n);if(m===o)return p(1);if(m===s)return p(7);var f=(u={},u[r]=e,u[a]=t,u[i]=1e3,u)[m]||1,g=this.$d.getTime()+n*f;return $.w(g,this)},g.subtract=function(e,t){return this.add(-1*e,t)},g.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=$.z(this),a=this.$H,o=this.$m,s=this.$M,l=n.weekdays,d=n.months,c=n.meridiem,u=function(e,n,r,a){return e&&(e[n]||e(t,i))||r[n].slice(0,a)},m=function(e){return $.s(a%12||12,e,"0")},f=c||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(p,function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return $.s(t.$y,4,"0");case"M":return s+1;case"MM":return $.s(s+1,2,"0");case"MMM":return u(n.monthsShort,s,d,3);case"MMMM":return u(d,s);case"D":return t.$D;case"DD":return $.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,l,2);case"ddd":return u(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(a);case"HH":return $.s(a,2,"0");case"h":return m(1);case"hh":return m(2);case"a":return f(a,o,!0);case"A":return f(a,o,!1);case"m":return String(o);case"mm":return $.s(o,2,"0");case"s":return String(t.$s);case"ss":return $.s(t.$s,2,"0");case"SSS":return $.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")})},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(n,u,h){var m,p=this,f=$.p(u),g=k(n),v=(g.utcOffset()-this.utcOffset())*e,_=this-g,y=function(){return $.m(p,g)};switch(f){case c:m=y()/12;break;case l:m=y();break;case d:m=y()/3;break;case s:m=(_-v)/6048e5;break;case o:m=(_-v)/864e5;break;case a:m=_/t;break;case r:m=_/e;break;case i:m=_/1e3;break;default:m=_}return h?m:$.a(m)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return y[this.$L]},g.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=x(e,t,!0);return i&&(n.$L=i),n},g.clone=function(){return $.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},f}(),T=S.prototype;return k.prototype=T,[["$ms",n],["$s",i],["$m",r],["$H",a],["$W",o],["$M",l],["$y",c],["$D",u]].forEach(function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),k.extend=function(e,t){return e.$i||(e(t,S,k),e.$i=!0),k},k.locale=x,k.isDayjs=b,k.unix=function(e){return k(1e3*e)},k.en=y[_],k.Ls=y,k.p={},k}()),Zo.exports}var es,ts,ns=Jo(Qo()),is={exports:{}},rs=(es||(es=1,is.exports=function(e,t,n){e=e||{};var i=t.prototype,r={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(e,t,n,r){return i.fromToBase(e,t,n,r)}n.en.relativeTime=r,i.fromToBase=function(t,i,a,o,s){for(var l,d,c,u=a.$locale().relativeTime||r,h=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],m=h.length,p=0;p<m;p+=1){var f=h[p];f.d&&(l=o?n(t).diff(a,f.d,!0):a.diff(t,f.d,!0));var g=(e.rounding||Math.round)(Math.abs(l));if(c=l>0,g<=f.r||!f.r){g<=1&&p>0&&(f=h[p-1]);var v=u[f.l];s&&(g=s(""+g)),d="string"==typeof v?v.replace("%d",g):v(g,i,f.l,c);break}}if(i)return d;var _=c?u.future:u.past;return"function"==typeof _?_(d):_.replace("%s",d)},i.to=function(e,t){return a(e,t,this,!0)},i.from=function(e,t){return a(e,t,this)};var o=function(e){return e.$u?n.utc():n()};i.toNow=function(e){return this.to(o(this),e)},i.fromNow=function(e){return this.from(o(this),e)}}),is.exports),as=Jo(rs);ts||(ts=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"bg",relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"}};e.default.locale(t,null,!0)}());var os;os||(os=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"ca",relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"}};e.default.locale(t,null,!0)}());var ss;ss||(ss=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo());function t(e){return e>1&&e<5&&1!=~~(e/10)}function n(e,n,i,r){var a=e+" ";switch(i){case"s":return n||r?"pár sekund":"pár sekundami";case"m":return n?"minuta":r?"minutu":"minutou";case"mm":return n||r?a+(t(e)?"minuty":"minut"):a+"minutami";case"h":return n?"hodina":r?"hodinu":"hodinou";case"hh":return n||r?a+(t(e)?"hodiny":"hodin"):a+"hodinami";case"d":return n||r?"den":"dnem";case"dd":return n||r?a+(t(e)?"dny":"dní"):a+"dny";case"M":return n||r?"měsíc":"měsícem";case"MM":return n||r?a+(t(e)?"měsíce":"měsíců"):a+"měsíci";case"y":return n||r?"rok":"rokem";case"yy":return n||r?a+(t(e)?"roky":"let"):a+"lety"}}var i={name:"cs",relativeTime:{future:"za %s",past:"před %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};e.default.locale(i,null,!0)}());var ls;ls||(ls=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"da",relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"}};e.default.locale(t,null,!0)}());var ds;ds||(ds=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={s:"ein paar Sekunden",m:["eine Minute","einer Minute"],mm:"%d Minuten",h:["eine Stunde","einer Stunde"],hh:"%d Stunden",d:["ein Tag","einem Tag"],dd:["%d Tage","%d Tagen"],M:["ein Monat","einem Monat"],MM:["%d Monate","%d Monaten"],y:["ein Jahr","einem Jahr"],yy:["%d Jahre","%d Jahren"]};function n(e,n,i){var r=t[i];return Array.isArray(r)&&(r=r[n?0:1]),r.replace("%d",e)}var i={name:"de",relativeTime:{future:"in %s",past:"vor %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};e.default.locale(i,null,!0)}());var cs;cs||(cs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"el",relativeTime:{future:"σε %s",past:"πριν %s",s:"μερικά δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένα μήνα",MM:"%d μήνες",y:"ένα χρόνο",yy:"%d χρόνια"}};e.default.locale(t,null,!0)}());var us;us||(us=1,"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),"January_February_March_April_May_June_July_August_September_October_November_December".split("_"));var hs;hs||(hs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"es",relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"}};e.default.locale(t,null,!0)}());var ms;ms||(ms=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo());function t(e,t,n,i){var r={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:["%d minuti","%d minutit"],h:["ühe tunni","tund aega","üks tund"],hh:["%d tunni","%d tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:["%d kuu","%d kuud"],y:["ühe aasta","aasta","üks aasta"],yy:["%d aasta","%d aastat"]};return t?(r[n][2]?r[n][2]:r[n][1]).replace("%d",e):(i?r[n][0]:r[n][1]).replace("%d",e)}var n={name:"et",relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t}};e.default.locale(n,null,!0)}());var ps;ps||(ps=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo());function t(e,t,n,i){var r={s:"muutama sekunti",m:"minuutti",mm:"%d minuuttia",h:"tunti",hh:"%d tuntia",d:"päivä",dd:"%d päivää",M:"kuukausi",MM:"%d kuukautta",y:"vuosi",yy:"%d vuotta",numbers:"nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_")},a={s:"muutaman sekunnin",m:"minuutin",mm:"%d minuutin",h:"tunnin",hh:"%d tunnin",d:"päivän",dd:"%d päivän",M:"kuukauden",MM:"%d kuukauden",y:"vuoden",yy:"%d vuoden",numbers:"nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_")},o=i&&!t?a:r,s=o[n];return e<10?s.replace("%d",o.numbers[e]):s.replace("%d",e)}var n={name:"fi",relativeTime:{future:"%s päästä",past:"%s sitten",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t}};e.default.locale(n,null,!0)}());var fs;fs||(fs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"fr",relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"}};e.default.locale(t,null,!0)}());var gs;gs||(gs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:"%d שעות",hh2:"שעתיים",d:"יום",dd:"%d ימים",dd2:"יומיים",M:"חודש",MM:"%d חודשים",MM2:"חודשיים",y:"שנה",yy:"%d שנים",yy2:"שנתיים"};function n(e,n,i){return(t[i+(2===e?"2":"")]||t[i]).replace("%d",e)}var i={name:"he",relativeTime:{future:"בעוד %s",past:"לפני %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};e.default.locale(i,null,!0)}());var vs;vs||(vs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"hr",relativeTime:{future:"za %s",past:"prije %s",s:"sekunda",m:"minuta",mm:"%d minuta",h:"sat",hh:"%d sati",d:"dan",dd:"%d dana",M:"mjesec",MM:"%d mjeseci",y:"godina",yy:"%d godine"}};e.default.locale(t,null,!0)}());var _s;_s||(_s=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"hu",relativeTime:{future:"%s múlva",past:"%s",s:function(e,t,n,i){return"néhány másodperc"+(i||t?"":"e")},m:function(e,t,n,i){return"egy perc"+(i||t?"":"e")},mm:function(e,t,n,i){return e+" perc"+(i||t?"":"e")},h:function(e,t,n,i){return"egy "+(i||t?"óra":"órája")},hh:function(e,t,n,i){return e+" "+(i||t?"óra":"órája")},d:function(e,t,n,i){return"egy "+(i||t?"nap":"napja")},dd:function(e,t,n,i){return e+" "+(i||t?"nap":"napja")},M:function(e,t,n,i){return"egy "+(i||t?"hónap":"hónapja")},MM:function(e,t,n,i){return e+" "+(i||t?"hónap":"hónapja")},y:function(e,t,n,i){return"egy "+(i||t?"év":"éve")},yy:function(e,t,n,i){return e+" "+(i||t?"év":"éve")}}};e.default.locale(t,null,!0)}());var ys;ys||(ys=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={s:["nokkrar sekúndur","nokkrar sekúndur","nokkrum sekúndum"],m:["mínúta","mínútu","mínútu"],mm:["mínútur","mínútur","mínútum"],h:["klukkustund","klukkustund","klukkustund"],hh:["klukkustundir","klukkustundir","klukkustundum"],d:["dagur","dag","degi"],dd:["dagar","daga","dögum"],M:["mánuður","mánuð","mánuði"],MM:["mánuðir","mánuði","mánuðum"],y:["ár","ár","ári"],yy:["ár","ár","árum"]};function n(e,n,i,r){var a=function(e,n,i,r){var a=r?0:i?1:2,o=2===e.length&&n%10==1?e[0]:e,s=t[o][a];return 1===e.length?s:"%d "+s}(i,e,r,n);return a.replace("%d",e)}var i={name:"is",relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};e.default.locale(i,null,!0)}());var ws;ws||(ws=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"it",relativeTime:{future:"tra %s",past:"%s fa",s:"qualche secondo",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"}};e.default.locale(t,null,!0)}());var bs;bs||(bs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"ja",relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}};e.default.locale(t,null,!0)}());var xs;xs||(xs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"ko",relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"}};e.default.locale(t,null,!0)}());var ks;ks||(ks=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"lt",relativeTime:{future:"už %s",past:"prieš %s",s:"kelias sekundes",m:"minutę",mm:"%d minutes",h:"valandą",hh:"%d valandas",d:"dieną",dd:"%d dienas",M:"mėnesį",MM:"%d mėnesius",y:"metus",yy:"%d metus"}};e.default.locale(t,null,!0)}());var $s;$s||($s=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"lv",relativeTime:{future:"pēc %s",past:"pirms %s",s:"dažām sekundēm",m:"minūtes",mm:"%d minūtēm",h:"stundas",hh:"%d stundām",d:"dienas",dd:"%d dienām",M:"mēneša",MM:"%d mēnešiem",y:"gada",yy:"%d gadiem"}};e.default.locale(t,null,!0)}());var Ss;Ss||(Ss=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"nb",relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"}};e.default.locale(t,null,!0)}());var Ts;Ts||(Ts=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"nl",relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"een minuut",mm:"%d minuten",h:"een uur",hh:"%d uur",d:"een dag",dd:"%d dagen",M:"een maand",MM:"%d maanden",y:"een jaar",yy:"%d jaar"}};e.default.locale(t,null,!0)}());var Ms;Ms||(Ms=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"nn",relativeTime:{future:"om %s",past:"for %s sidan",s:"nokre sekund",m:"eitt minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månadar",y:"eitt år",yy:"%d år"}};e.default.locale(t,null,!0)}());var Ds;Ds||(Ds=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo());function t(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function n(e,n,i){var r=e+" ";switch(i){case"m":return n?"minuta":"minutę";case"mm":return r+(t(e)?"minuty":"minut");case"h":return n?"godzina":"godzinę";case"hh":return r+(t(e)?"godziny":"godzin");case"MM":return r+(t(e)?"miesiące":"miesięcy");case"yy":return r+(t(e)?"lata":"lat")}}var i={name:"pl",relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:n,mm:n,h:n,hh:n,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:n,y:"rok",yy:n}};e.default.locale(i,null,!0)}());var Cs;Cs||(Cs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"pt",relativeTime:{future:"em %s",past:"há %s",s:"alguns segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"}};e.default.locale(t,null,!0)}());var As;As||(As=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"ro",relativeTime:{future:"peste %s",past:"acum %s",s:"câteva secunde",m:"un minut",mm:"%d minute",h:"o oră",hh:"%d ore",d:"o zi",dd:"%d zile",M:"o lună",MM:"%d luni",y:"un an",yy:"%d ani"}};e.default.locale(t,null,!0)}());var Es;Es||(Es=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo());function t(e,t,n){var i,r;return"m"===n?t?"минута":"минуту":e+" "+(i=+e,r={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[n].split("_"),i%10==1&&i%100!=11?r[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?r[1]:r[2])}var n={name:"ru",relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:t,mm:t,h:"час",hh:t,d:"день",dd:t,M:"месяц",MM:t,y:"год",yy:t}};e.default.locale(n,null,!0)}());var Ps;Ps||(Ps=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo());function t(e){return e>1&&e<5&&1!=~~(e/10)}function n(e,n,i,r){var a=e+" ";switch(i){case"s":return n||r?"pár sekúnd":"pár sekundami";case"m":return n?"minúta":r?"minútu":"minútou";case"mm":return n||r?a+(t(e)?"minúty":"minút"):a+"minútami";case"h":return n?"hodina":r?"hodinu":"hodinou";case"hh":return n||r?a+(t(e)?"hodiny":"hodín"):a+"hodinami";case"d":return n||r?"deň":"dňom";case"dd":return n||r?a+(t(e)?"dni":"dní"):a+"dňami";case"M":return n||r?"mesiac":"mesiacom";case"MM":return n||r?a+(t(e)?"mesiace":"mesiacov"):a+"mesiacmi";case"y":return n||r?"rok":"rokom";case"yy":return n||r?a+(t(e)?"roky":"rokov"):a+"rokmi"}}var i={name:"sk",relativeTime:{future:"za %s",past:"pred %s",s:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n}};e.default.locale(i,null,!0)}());var Ls;Ls||(Ls=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo());function t(e){return e%100==2}function n(e){return e%100==3||e%100==4}function i(e,i,r,a){var o=e+" ";switch(r){case"s":return i||a?"nekaj sekund":"nekaj sekundami";case"m":return i?"ena minuta":"eno minuto";case"mm":return t(e)?o+(i||a?"minuti":"minutama"):n(e)?o+(i||a?"minute":"minutami"):o+(i||a?"minut":"minutami");case"h":return i?"ena ura":"eno uro";case"hh":return t(e)?o+(i||a?"uri":"urama"):n(e)?o+(i||a?"ure":"urami"):o+(i||a?"ur":"urami");case"d":return i||a?"en dan":"enim dnem";case"dd":return t(e)?o+(i||a?"dneva":"dnevoma"):o+(i||a?"dni":"dnevi");case"M":return i||a?"en mesec":"enim mesecem";case"MM":return t(e)?o+(i||a?"meseca":"mesecema"):n(e)?o+(i||a?"mesece":"meseci"):o+(i||a?"mesecev":"meseci");case"y":return i||a?"eno leto":"enim letom";case"yy":return t(e)?o+(i||a?"leti":"letoma"):n(e)?o+(i||a?"leta":"leti"):o+(i||a?"let":"leti")}}var r={name:"sl",relativeTime:{future:"čez %s",past:"pred %s",s:i,m:i,mm:i,h:i,hh:i,d:i,dd:i,M:i,MM:i,y:i,yy:i}};e.default.locale(r,null,!0)}());var Fs;Fs||(Fs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function(e,t){return e%10>=1&&e%10<=4&&(e%100<10||e%100>=20)?e%10==1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(e,n,i,r){var a=t.words[i];if(1===i.length)return"y"===i&&n?"jedna godina":r||n?a[0]:a[1];var o=t.correctGrammarCase(e,a);return"yy"===i&&n&&"%d godinu"===o?e+" godina":o.replace("%d",e)}},n={name:"sr",relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:t.relativeTimeFormatter,mm:t.relativeTimeFormatter,h:t.relativeTimeFormatter,hh:t.relativeTimeFormatter,d:t.relativeTimeFormatter,dd:t.relativeTimeFormatter,M:t.relativeTimeFormatter,MM:t.relativeTimeFormatter,y:t.relativeTimeFormatter,yy:t.relativeTimeFormatter}};e.default.locale(n,null,!0)}());var Rs;Rs||(Rs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={words:{m:["један минут","једног минута"],mm:["%d минут","%d минута","%d минута"],h:["један сат","једног сата"],hh:["%d сат","%d сата","%d сати"],d:["један дан","једног дана"],dd:["%d дан","%d дана","%d дана"],M:["један месец","једног месеца"],MM:["%d месец","%d месеца","%d месеци"],y:["једну годину","једне године"],yy:["%d годину","%d године","%d година"]},correctGrammarCase:function(e,t){return e%10>=1&&e%10<=4&&(e%100<10||e%100>=20)?e%10==1?t[0]:t[1]:t[2]},relativeTimeFormatter:function(e,n,i,r){var a=t.words[i];if(1===i.length)return"y"===i&&n?"једна година":r||n?a[0]:a[1];var o=t.correctGrammarCase(e,a);return"yy"===i&&n&&"%d годину"===o?e+" година":o.replace("%d",e)}},n={name:"sr-cyrl",relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:t.relativeTimeFormatter,mm:t.relativeTimeFormatter,h:t.relativeTimeFormatter,hh:t.relativeTimeFormatter,d:t.relativeTimeFormatter,dd:t.relativeTimeFormatter,M:t.relativeTimeFormatter,MM:t.relativeTimeFormatter,y:t.relativeTimeFormatter,yy:t.relativeTimeFormatter}};e.default.locale(n,null,!0)}());var Os;Os||(Os=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"sv",relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"}};e.default.locale(t,null,!0)}());var Ns;Ns||(Ns=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"th",relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}};e.default.locale(t,null,!0)}());var Is;Is||(Is=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"tr",relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"}};e.default.locale(t,null,!0)}());var zs;zs||(zs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo());function t(e,t,n){var i,r;return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":e+" "+(i=+e,r={ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"}[n].split("_"),i%10==1&&i%100!=11?r[0]:i%10>=2&&i%10<=4&&(i%100<10||i%100>=20)?r[1]:r[2])}var n={name:"uk",relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:t,mm:t,h:t,hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t}};e.default.locale(n,null,!0)}());var js;js||(js=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"vi",relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"}};e.default.locale(t,null,!0)}());var Hs;Hs||(Hs=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"zh-cn",relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"}};e.default.locale(t,null,!0)}());var Ws;Ws||(Ws=1,function(){var e=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(Qo()),t={name:"zh-tw",relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}};e.default.locale(t,null,!0)}()),ns.extend(as);const Bs=Pt();function qs(e,t,n,i=("day"===t&&1===e?"auto":"always")){const r=Ys(n),a=`${r}:${i}`;let o=Bs.get(a);return o||(o=new Intl.RelativeTimeFormat(Dt(r),{numeric:i}),Bs.set(a,o)),o.format(e,t)}const Us=Pt();function Vs(e){const t=Ys(e);let n=Us.get(t);if(void 0===n){const e=new Intl.RelativeTimeFormat(Dt(t),{numeric:"auto"}),i=e.format(0,"second");n=i.charAt(0).toLocaleUpperCase(e.resolvedOptions().locale)+i.slice(1),Us.set(t,n)}return n}function Gs(e,t,n){const i=Ys(t),r=Ks[i]??i,a=ns(e).locale(r);return n?a.from(ns(n)):a.fromNow()}const Ks={sr:"sr-cyrl","sr-latn":"sr"};function Ys(e){const t=e.toLowerCase();if("zh-cn"===t||"zh-tw"===t||"sr-latn"===t)return t;const n=t.split("-")[0];return["bg","ca","cs","da","de","el","en","es","et","fi","fr","he","hr","hu","is","it","ja","ko","lt","lv","nb","nl","nn","pl","pt","ro","ru","sk","sl","sr","sr-latn","sv","th","tr","uk","vi","zh-cn","zh-tw"].includes(n)?n:yt}const Js={bg:{daysOfWeek:["нед.","пон.","вт.","ср.","четв.","пет.","съб."],fullDaysOfWeek:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"],months:["ян.","фев.","мар","апр.","май","юни","юли","авг.","септ.","окт.","ноем.","дек."],allDay:"цял ден",multiDay:"до",untilTime:"до {time}",at:"в",separator:", ",viewList:"Списък",viewColumns:"Колони",viewGrid:"Решетка",viewMonth:"Месец",layout:"Оформление",layoutCurrent:"Оформление: {view}",moreEvents:"Още +{count}",eventCount:"{count} събития",eventCountOne:"{count} събитие",endsToday:"приключва днес",endsTomorrow:"приключва утре",dayOfEvent:"Ден {day} от {days}",durationTotal:"общо {duration}",noEvents:"Няма събития",loading:"Зареждане на календара със събития...",error:"Грешка: календарът не е намерен или не е конфигуриран правилно",loadFailed:"Неуспешно зареждане:",newEvent:"Ново събитие",movedTo:"Преместено за {time}",undo:"Отмяна",showAll:"Показване на всички",hideAll:"Скриване на всички",private:"Частно"},cs:{daysOfWeek:["Ne","Po","Út","St","Čt","Pá","So"],fullDaysOfWeek:["neděle","pondělí","úterý","středy","čtvrtka","pátku","soboty"],months:["Led","Úno","Bře","Dub","Kvě","Čvn","Čvc","Srp","Zář","Říj","Lis","Pro"],allDay:"celý den",multiDay:"do",untilTime:"do {time}",at:"v",separator:", ",viewList:"Seznam",viewColumns:"Sloupce",viewGrid:"Mřížka",viewMonth:"Měsíc",layout:"Rozložení",layoutCurrent:"Rozložení: {view}",moreEvents:"+{count} navíc",eventCount:"Události: {count}",eventCountOne:"{count} událost",endsToday:"končí dnes",endsTomorrow:"končí zítra",dayOfEvent:"Den {day} z {days}",durationTotal:"celkem {duration}",noEvents:"Žádné události",loading:"Načítání událostí z kalendáře...",error:"Chyba: Entita kalendáře nebyla nalezena nebo je nesprávně nakonfigurována",loadFailed:"Nepodařilo se načíst:",newEvent:"Nová událost",movedTo:"Přesunuto na {time}",undo:"Zpět",showAll:"Zobrazit všechny",hideAll:"Skrýt všechny",private:"Soukromé"},ca:{daysOfWeek:["Dg","Dl","Dm","Dc","Dj","Dv","Ds"],fullDaysOfWeek:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"],months:["Gen","Febr","Març","Abr","Maig","Juny","Jul","Ag","Set","Oct","Nov","Des"],allDay:"tot el dia",multiDay:"fins",untilTime:"fins a les {time}",at:"a les",separator:", ",viewList:"Llista",viewColumns:"Columnes",viewGrid:"Quadrícula",viewMonth:"Mes",layout:"Disposició",layoutCurrent:"Disposició: {view}",moreEvents:"+{count} més",eventCount:"{count} esdeveniments",eventCountOne:"{count} esdeveniment",endsToday:"acaba avui",endsTomorrow:"acaba demà",dayOfEvent:"Dia {day} de {days}",durationTotal:"{duration} en total",noEvents:"Cap esdeveniment",loading:"Carregant esdeveniments...",error:"Error: No s'ha trobat l'entitat del calendari o aquesta està mal configurada",loadFailed:"No s'ha pogut carregar:",newEvent:"Esdeveniment nou",movedTo:"Nova hora: {time}",undo:"Desfés",showAll:"Mostra-ho tot",hideAll:"Amaga-ho tot",private:"Privat"},da:{daysOfWeek:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],fullDaysOfWeek:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],months:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],allDay:"hele dagen",multiDay:"indtil",untilTime:"indtil {time}",at:"kl.",separator:", ",viewList:"Liste",viewColumns:"Kolonner",viewGrid:"Gitter",viewMonth:"Måned",layout:"Layout",layoutCurrent:"Layout: {view}",moreEvents:"+{count} mere",eventCount:"{count} begivenheder",eventCountOne:"{count} begivenhed",endsToday:"slutter i dag",endsTomorrow:"slutter i morgen",dayOfEvent:"Dag {day} af {days}",durationTotal:"{duration} i alt",noEvents:"Ingen begivenheder",loading:"Indlæser kalenderbegivenheder...",error:"Fejl: Kalenderenheden blev ikke fundet eller er ikke konfigureret korrekt",loadFailed:"Kunne ikke indlæses:",newEvent:"Ny begivenhed",movedTo:"Flyttet til {time}",undo:"Fortryd",showAll:"Vis alle",hideAll:"Skjul alle",private:"Privat"},de:{daysOfWeek:["So","Mo","Di","Mi","Do","Fr","Sa"],fullDaysOfWeek:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],months:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],allDay:"ganztägig",multiDay:"bis",untilTime:"bis {time}",at:"um",separator:", ",viewList:"Liste",viewColumns:"Spalten",viewGrid:"Zeitraster",viewMonth:"Monat",layout:"Layout",layoutCurrent:"Layout: {view}",moreEvents:"+{count} mehr",eventCount:"{count} Termine",eventCountOne:"{count} Termin",endsToday:"endet heute",endsTomorrow:"endet morgen",dayOfEvent:"Tag {day} von {days}",durationTotal:"{duration} insgesamt",noEvents:"Keine Termine",loading:"Kalendereinträge werden geladen...",error:"Fehler: Kalender-Entität nicht gefunden oder falsch konfiguriert",loadFailed:"Laden fehlgeschlagen:",newEvent:"Neuer Termin",movedTo:"Verschoben auf {time}",undo:"Rückgängig",showAll:"Alle anzeigen",hideAll:"Alle ausblenden",private:"Privat"},el:{daysOfWeek:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],fullDaysOfWeek:["την Κυριακή","τη Δευτέρα","την Τρίτη","την Τετάρτη","την Πέμπτη","την Παρασκευή","το Σάββατο"],months:["Ιαν","Φεβ","Μαρ","Απρ","Μαϊ","Ιουν","Ιουλ","Αυγ","Σεπ","Οκτ","Νοε","Δεκ"],allDay:"Ολοήμερο",multiDay:"έως",untilTime:"έως {time}",at:"στις",separator:", ",viewList:"Λίστα",viewColumns:"Στήλες",viewGrid:"Πλέγμα",viewMonth:"Μήνας",layout:"Διάταξη",layoutCurrent:"Διάταξη: {view}",moreEvents:"+{count} ακόμη",eventCount:"{count} γεγονότα",eventCountOne:"{count} γεγονός",endsToday:"λήγει σήμερα",endsTomorrow:"λήγει αύριο",dayOfEvent:"Ημέρα {day} από {days}",durationTotal:"{duration} συνολικά",noEvents:"Δεν υπάρχουν γεγονότα",loading:"Φόρτωση ημερολογίου...",error:"Σφάλμα: Η οντότητα ημερολογίου δεν βρέθηκε ή δεν έχει ρυθμιστεί σωστά",loadFailed:"Αποτυχία φόρτωσης:",newEvent:"Νέο γεγονός",movedTo:"Μετακινήθηκε: {time}",undo:"Αναίρεση",showAll:"Εμφάνιση όλων",hideAll:"Απόκρυψη όλων",private:"Ιδιωτικό"},en:{daysOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],fullDaysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],allDay:"all day",multiDay:"until",untilTime:"until {time}",at:"at",separator:", ",viewList:"List",viewColumns:"Columns",viewGrid:"Grid",viewMonth:"Month",layout:"Layout",layoutCurrent:"Layout: {view}",moreEvents:"+{count} more",eventCount:"{count} events",eventCountOne:"{count} event",endsToday:"ends today",endsTomorrow:"ends tomorrow",dayOfEvent:"Day {day} of {days}",durationTotal:"{duration} total",noEvents:"No events",loading:"Loading calendar events...",error:"Error: Calendar entity not found or improperly configured",loadFailed:"Couldn't load:",newEvent:"New event",movedTo:"Moved to {time}",undo:"Undo",showAll:"Show all",hideAll:"Hide all",private:"Private"},"en-gb":{daysOfWeek:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],fullDaysOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],allDay:"all day",multiDay:"until",untilTime:"until {time}",at:"at",separator:", ",viewList:"List",viewColumns:"Columns",viewGrid:"Grid",viewMonth:"Month",layout:"Layout",layoutCurrent:"Layout: {view}",moreEvents:"+{count} more",eventCount:"{count} events",eventCountOne:"{count} event",endsToday:"ends today",endsTomorrow:"ends tomorrow",dayOfEvent:"Day {day} of {days}",durationTotal:"{duration} total",noEvents:"No events",loading:"Loading calendar events...",error:"Error: Calendar entity not found or improperly configured",loadFailed:"Couldn't load:",newEvent:"New event",movedTo:"Moved to {time}",undo:"Undo",showAll:"Show all",hideAll:"Hide all",private:"Private"},es:{daysOfWeek:["Dom","Lun","Mar","Mié","Jue","Vie","Sáb"],fullDaysOfWeek:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],months:["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],allDay:"todo el día",multiDay:"hasta el",untilTime:"hasta las {time}",at:"a las",separator:", ",viewList:"Lista",viewColumns:"Columnas",viewGrid:"Rejilla",viewMonth:"Mes",layout:"Diseño",layoutCurrent:"Diseño: {view}",moreEvents:"+{count} más",eventCount:"{count} eventos",eventCountOne:"{count} evento",endsToday:"termina hoy",endsTomorrow:"termina mañana",dayOfEvent:"Día {day} de {days}",durationTotal:"{duration} en total",noEvents:"No hay eventos",loading:"Cargando eventos del calendario...",error:"Error: La entidad del calendario no se encontró o está mal configurada",loadFailed:"No se pudo cargar:",newEvent:"Nuevo evento",movedTo:"Nueva hora: {time}",undo:"Deshacer",showAll:"Mostrar todos",hideAll:"Ocultar todos",private:"Privado"},et:{daysOfWeek:["P","E","T","K","N","R","L"],fullDaysOfWeek:["pühapäevani","esmaspäevani","teisipäevani","kolmapäevani","neljapäevani","reedeni","laupäevani"],months:["Jaan","Veebr","Märts","Apr","Mai","Juuni","Juuli","Aug","Sept","Okt","Nov","Dets"],allDay:"kogu päev",multiDay:"kuni",untilTime:"kuni {time}",at:"kell",separator:", ",viewList:"Loetelu",viewColumns:"Veerud",viewGrid:"Ajaraster",viewMonth:"Kuu",layout:"Paigutus",layoutCurrent:"Paigutus: {view}",moreEvents:"Veel +{count}",eventCount:"{count} sündmust",eventCountOne:"{count} sündmus",endsToday:"lõpeb täna",endsTomorrow:"lõpeb homme",dayOfEvent:"Päev {day}/{days}",durationTotal:"kokku {duration}",noEvents:"Sündmusi pole",loading:"Kalendrisündmuste laadimine...",error:"Viga: kalendri entiteeti ei leitud või see on valesti seadistatud",loadFailed:"Laadimine ebaõnnestus:",newEvent:"Uus sündmus",movedTo:"Teisaldatud: {time}",undo:"Võta tagasi",showAll:"Näita kõiki",hideAll:"Peida kõik",private:"Privaatne"},fi:{daysOfWeek:["Su","Ma","Ti","Ke","To","Pe","La"],fullDaysOfWeek:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"],months:["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"],allDay:"koko päivä",multiDay:"päättyy",untilTime:"päättyy {time}",at:"klo",separator:", ",viewList:"Lista",viewColumns:"Sarakkeet",viewGrid:"Ruudukko",viewMonth:"Kuukausi",layout:"Asettelu",layoutCurrent:"Asettelu: {view}",moreEvents:"+{count} lisää",eventCount:"{count} tapahtumaa",eventCountOne:"{count} tapahtuma",endsToday:"päättyy tänään",endsTomorrow:"päättyy huomenna",dayOfEvent:"Päivä {day}/{days}",durationTotal:"yhteensä {duration}",noEvents:"Ei tapahtumia",loading:"Ladataan kalenteritapahtumia...",error:"Virhe: Kalenteriyksikköä ei löydy tai se on väärin määritetty",loadFailed:"Lataus epäonnistui:",newEvent:"Uusi tapahtuma",movedTo:"Siirretty: {time}",undo:"Kumoa",showAll:"Näytä kaikki",hideAll:"Piilota kaikki",private:"Yksityinen"},fr:{daysOfWeek:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],fullDaysOfWeek:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],months:["Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov","Déc"],allDay:"toute la journée",multiDay:"jusqu'au",untilTime:"jusqu'à {time}",at:"à",separator:", ",viewList:"Liste",viewColumns:"Colonnes",viewGrid:"Grille",viewMonth:"Mois",layout:"Disposition",layoutCurrent:"Disposition : {view}",moreEvents:"+{count} de plus",eventCount:"{count} événements",eventCountOne:"{count} événement",endsToday:"finit aujourd'hui",endsTomorrow:"finit demain",dayOfEvent:"Jour {day} sur {days}",durationTotal:"{duration} au total",noEvents:"Aucun événement",loading:"Chargement des événements...",error:"Erreur: Entité de calendrier introuvable ou mal configurée",loadFailed:"Échec du chargement:",newEvent:"Nouvel événement",movedTo:"Déplacé : {time}",undo:"Annuler",showAll:"Tout afficher",hideAll:"Tout masquer",private:"Privé"},he:{daysOfWeek:["א'","ב'","ג'","ד'","ה'","ו'","ש'"],fullDaysOfWeek:["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"],months:["ינו","פבר","מרץ","אפר","מאי","יונ","יול","אוג","ספט","אוק","נוב","דצמ"],allDay:"כל-היום",multiDay:"עד",untilTime:"עד {time}",endsToday:"מסתיים היום",endsTomorrow:"מסתיים מחר",dayOfEvent:"יום {day} מתוך {days}",durationTotal:"{duration} בסך הכול",at:"בשעה",separator:", ",viewList:"רשימה",viewColumns:"עמודות",viewGrid:"רשת",viewMonth:"חודש",layout:"פריסה",layoutCurrent:"פריסה: {view}",moreEvents:"עוד +{count}",eventCount:"{count} אירועים",eventCountOne:"{count} אירוע",noEvents:"אין אירועים",loading:"טוען אירועי לוח שנה...",error:"שגיאה: ישות לוח השנה לא נמצאה או לא מוגדרת כראוי",loadFailed:"הטעינה נכשלה:",newEvent:"אירוע חדש",movedTo:"הועבר ל־{time}",undo:"ביטול",showAll:"הצגת הכל",hideAll:"הסתרת הכל",private:"פרטי"},hr:{daysOfWeek:["Ned","Pon","Uto","Sri","Čet","Pet","Sub"],fullDaysOfWeek:["nedjelje","ponedjeljka","utorka","srijede","četvrtka","petka","subote"],months:["Sij","Velj","Ožu","Tra","Svi","Lip","Srp","Kol","Ruj","Lis","Stu","Pro"],allDay:"cijeli dan",multiDay:"do",untilTime:"do {time}",at:"u",separator:", ",viewList:"Popis",viewColumns:"Stupci",viewGrid:"Mreža",viewMonth:"Mjesec",layout:"Raspored",layoutCurrent:"Raspored: {view}",moreEvents:"+{count} više",eventCount:"{count} događaja",eventCountOne:"{count} događaj",endsToday:"završava danas",endsTomorrow:"završava sutra",dayOfEvent:"Dan {day} od {days}",durationTotal:"ukupno {duration}",noEvents:"Nema događaja",loading:"Učitavanje događaja...",error:"Greška: Kalendar entitet nije pronađen ili je neispravno postavljen",loadFailed:"Učitavanje nije uspjelo:",newEvent:"Novi događaj",movedTo:"Premješteno na {time}",undo:"Poništi",showAll:"Pokaži sve",hideAll:"Sakrij sve",private:"Privatno"},hu:{daysOfWeek:["Vas","Hét","Kedd","Sze","Csüt","Pén","Szo"],fullDaysOfWeek:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"],months:["Jan","Feb","Már","Ápr","Máj","Jún","Júl","Aug","Szep","Okt","Nov","Dec"],allDay:"egész napos",multiDay:"eddig:",untilTime:"eddig: {time}",endsToday:"ma {at} ér véget",endsTomorrow:"holnap {at} ér véget",dayOfEvent:"{day}/{days}. nap",durationTotal:"összesen {duration}",at:"{time}-kor",separator:", ",viewList:"Lista",viewColumns:"Oszlopok",viewGrid:"Rács",viewMonth:"Hónap",layout:"Elrendezés",layoutCurrent:"Elrendezés: {view}",moreEvents:"+{count} további",eventCount:"{count} esemény",eventCountOne:"{count} esemény",noEvents:"Nincs esemény",loading:"Naptárbejegyzések betöltése...",error:"Hiba: Naptár entitás nem található vagy nem megfelelően konfigutált",loadFailed:"Nem sikerült betölteni:",newEvent:"Új esemény",movedTo:"Áthelyezve: {time}",undo:"Visszavonás",showAll:"Összes megjelenítése",hideAll:"Összes elrejtése",private:"Privát"},is:{daysOfWeek:["Sun","Mán","Þri","Mið","Fim","Fös","Lau"],fullDaysOfWeek:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"],months:["Jan","Feb","Mar","Apr","Maí","Jún","Júl","Ágú","Sep","Okt","Nóv","Des"],allDay:"Allur dagurinn",multiDay:"þar til",untilTime:"þar til {time}",at:"kl",separator:", ",viewList:"Listi",viewColumns:"Dálkar",viewGrid:"Tímatafla",viewMonth:"Mánuður",layout:"Útlit",layoutCurrent:"Útlit: {view}",moreEvents:"+{count} í viðbót",eventCount:"{count} viðburðir",eventCountOne:"{count} viðburður",endsToday:"lýkur í dag",endsTomorrow:"lýkur á morgun",dayOfEvent:"Dagur {day} af {days}",durationTotal:"{duration} alls",noEvents:"Engir viðburðir",loading:"Hleður inn dagatal...",error:"Villa: Dagatalseining finnst ekki eða er vanstillt",loadFailed:"Tókst ekki að hlaða inn:",newEvent:"Nýr viðburður",movedTo:"Fært á {time}",undo:"Afturkalla",showAll:"Sýna öll",hideAll:"Fela öll",private:"Einka"},it:{daysOfWeek:["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],fullDaysOfWeek:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],months:["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],allDay:"tutto il giorno",multiDay:"fino a",untilTime:"fino a {time}",at:"alle",separator:", ",viewList:"Lista",viewColumns:"Colonne",viewGrid:"Griglia oraria",viewMonth:"Mese",layout:"Layout",layoutCurrent:"Layout: {view}",moreEvents:"+{count} in più",eventCount:"{count} eventi",eventCountOne:"{count} evento",endsToday:"termina oggi",endsTomorrow:"termina domani",dayOfEvent:"Giorno {day} di {days}",durationTotal:"{duration} in totale",noEvents:"Nessun evento",loading:"Caricamento eventi del calendario...",error:"Errore: entità calendario non trovata o configurata in modo errato",loadFailed:"Impossibile caricare:",newEvent:"Nuovo evento",movedTo:"Nuovo orario: {time}",undo:"Annulla",showAll:"Mostra tutti",hideAll:"Nascondi tutti",private:"Privato"},ja:{daysOfWeek:["日","月","火","水","木","金","土"],fullDaysOfWeek:["（日）","（月）","（火）","（水）","（木）","（金）","（土）"],months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],allDay:"終日",multiDay:"～",untilTime:"～ {time}",at:"{time}",separator:"、",viewList:"リスト",viewColumns:"列",viewGrid:"グリッド",viewMonth:"月",layout:"レイアウト",layoutCurrent:"レイアウト：{view}",moreEvents:"他{count}件",eventCount:"{count}件の予定",eventCountOne:"{count}件の予定",endsToday:"今日 {at} 終了",endsTomorrow:"明日 {at} 終了",dayOfEvent:"{day}日目（全{days}日）",durationTotal:"合計{duration}",noEvents:"予定なし",loading:"カレンダーの予定を読み込み中...",error:"エラー: カレンダーエンティティが見つからないか、設定が正しくありません",loadFailed:"読み込めませんでした:",newEvent:"新しい予定",movedTo:"{time} に移動しました",undo:"元に戻す",showAll:"すべて表示",hideAll:"すべて非表示",private:"非公開"},ko:{daysOfWeek:["일","월","화","수","목","금","토"],fullDaysOfWeek:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],allDay:"종일",multiDay:"~",untilTime:"~ {time}",at:"{time}",separator:", ",viewList:"목록",viewColumns:"열",viewGrid:"그리드",viewMonth:"월",layout:"레이아웃",layoutCurrent:"레이아웃: {view}",moreEvents:"+{count}개 더",eventCount:"일정 {count}개",eventCountOne:"일정 {count}개",endsToday:"오늘 {at}에 종료",endsTomorrow:"내일 {at}에 종료",dayOfEvent:"{days}일 중 {day}일째",durationTotal:"총 {duration}",noEvents:"일정 없음",loading:"캘린더 일정을 불러오는 중...",error:"오류: 캘린더 엔티티를 찾을 수 없거나 잘못 설정되었습니다",loadFailed:"불러오지 못함:",newEvent:"새 일정",movedTo:"이동됨: {time}",undo:"실행 취소",showAll:"모두 표시",hideAll:"모두 숨기기",private:"비공개"},lt:{daysOfWeek:["Sek","Pir","Ant","Tre","Ket","Pen","Šeš"],fullDaysOfWeek:["sekmadienio","pirmadienio","antradienio","trečiadienio","ketvirtadienio","penktadienio","šeštadienio"],months:["Sau","Vas","Kov","Bal","Geg","Bir","Lie","Rgp","Rgs","Spa","Lap","Grd"],allDay:"visą dieną",multiDay:"iki",untilTime:"iki {time}",at:"{time}",separator:", ",viewList:"Sąrašas",viewColumns:"Stulpeliai",viewGrid:"Laiko tinklelis",viewMonth:"Mėnuo",layout:"Išdėstymas",layoutCurrent:"Išdėstymas: {view}",moreEvents:"Dar +{count}",eventCount:"Įvykių: {count}",eventCountOne:"{count} įvykis",endsToday:"baigiasi šiandien",endsTomorrow:"baigiasi rytoj",dayOfEvent:"Diena {day} iš {days}",durationTotal:"iš viso {duration}",noEvents:"Nėra įvykių",loading:"Įkeliami kalendoriaus įvykiai...",error:"Klaida: Kalendoriaus objektas nerastas arba neteisingai sukonfigūruotas",loadFailed:"Nepavyko įkelti:",newEvent:"Naujas įvykis",movedTo:"Perkelta į {time}",undo:"Anuliuoti",showAll:"Rodyti visus",hideAll:"Slėpti visus",private:"Privatus"},lv:{daysOfWeek:["Sv","Pr","Ot","Tr","Ce","Pk","Se"],fullDaysOfWeek:["svētdienai","pirmdienai","otrdienai","trešdienai","ceturtdienai","piektdienai","sestdienai"],months:["Jan","Feb","Mar","Apr","Mai","Jūn","Jūl","Aug","Sep","Okt","Nov","Dec"],allDay:"visu dienu",multiDay:"līdz",untilTime:"līdz {time}",at:"plkst.",separator:", ",viewList:"Saraksts",viewColumns:"Kolonnas",viewGrid:"Laika režģis",viewMonth:"Mēnesis",layout:"Izkārtojums",layoutCurrent:"Izkārtojums: {view}",moreEvents:"Vēl +{count}",eventCount:"Notikumu skaits: {count}",eventCountOne:"{count} notikums",endsToday:"beidzas šodien",endsTomorrow:"beidzas rīt",dayOfEvent:"Diena {day} no {days}",durationTotal:"kopā {duration}",noEvents:"Nav notikumu",loading:"Ielādē kalendāra notikumus...",error:"Kļūda: Kalendāra entitīja nav atrasta vai nav pareizi konfigurēta",loadFailed:"Neizdevās ielādēt:",newEvent:"Jauns notikums",movedTo:"Pārvietots uz {time}",undo:"Atsaukt",showAll:"Rādīt visus",hideAll:"Paslēpt visus",private:"Privāts"},nb:{daysOfWeek:["Søn","Man","Tir","Ons","Tor","Fre","Lør"],fullDaysOfWeek:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"],months:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],allDay:"hele dagen",multiDay:"til",untilTime:"til {time}",at:"kl.",separator:", ",viewList:"Liste",viewColumns:"Kolonner",viewGrid:"Tidsrutenett",viewMonth:"Måned",layout:"Layout",layoutCurrent:"Layout: {view}",moreEvents:"+{count} til",eventCount:"{count} hendelser",eventCountOne:"{count} hendelse",endsToday:"slutter i dag",endsTomorrow:"slutter i morgen",dayOfEvent:"Dag {day} av {days}",durationTotal:"{duration} totalt",noEvents:"Ingen hendelser",loading:"Laster kalenderhendelser...",error:"Feil: Kalenderenheten ble ikke funnet eller er ikke konfigurert riktig",loadFailed:"Kunne ikke lastes:",newEvent:"Ny hendelse",movedTo:"Flyttet til {time}",undo:"Angre",showAll:"Vis alle",hideAll:"Skjul alle",private:"Privat"},nl:{daysOfWeek:["Zo","Ma","Di","Wo","Do","Vr","Za"],fullDaysOfWeek:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"],months:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],allDay:"hele dag",multiDay:"tot",untilTime:"tot {time}",at:"om",separator:", ",viewList:"Lijst",viewColumns:"Kolommen",viewGrid:"Rooster",viewMonth:"Maand",layout:"Indeling",layoutCurrent:"Indeling: {view}",moreEvents:"+{count} meer",eventCount:"{count} afspraken",eventCountOne:"{count} afspraak",endsToday:"eindigt vandaag",endsTomorrow:"eindigt morgen",dayOfEvent:"Dag {day} van {days}",durationTotal:"{duration} in totaal",noEvents:"Geen afspraken",loading:"Kalender afspraken laden...",error:"Fout: Kalender niet gevonden of verkeerd geconfigureerd",loadFailed:"Laden mislukt:",newEvent:"Nieuwe afspraak",movedTo:"Verplaatst naar {time}",undo:"Ongedaan maken",showAll:"Alles weergeven",hideAll:"Alles verbergen",private:"Privé"},nn:{daysOfWeek:["Søn","Mån","Tys","Ons","Tor","Fre","Lau"],fullDaysOfWeek:["søndag","måndag","tysdag","onsdag","torsdag","fredag","laurdag"],months:["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"],allDay:"heile dagen",multiDay:"til",untilTime:"til {time}",at:"kl.",separator:", ",viewList:"Liste",viewColumns:"Kolonnar",viewGrid:"Rutenett",viewMonth:"Månad",layout:"Layout",layoutCurrent:"Layout: {view}",moreEvents:"+{count} til",eventCount:"{count} hendingar",eventCountOne:"{count} hending",endsToday:"sluttar i dag",endsTomorrow:"sluttar i morgon",dayOfEvent:"Dag {day} av {days}",durationTotal:"{duration} totalt",noEvents:"Ingen hendingar",loading:"Lastar kalenderhendingar...",error:"Feil: Kalendereininga vart ikkje funnen eller er ikkje konfigurert riktig",loadFailed:"Kunne ikkje lastast:",newEvent:"Ny hending",movedTo:"Flytta til {time}",undo:"Angre",showAll:"Vis alle",hideAll:"Skjul alle",private:"Privat"},pl:{daysOfWeek:["Nd","Pn","Wt","Śr","Cz","Pt","Sb"],fullDaysOfWeek:["niedzieli","poniedziałku","wtorku","środy","czwartku","piątku","soboty"],months:["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],allDay:"cały dzień",multiDay:"do",untilTime:"do {time}",at:"o",separator:", ",viewList:"Lista",viewColumns:"Kolumny",viewGrid:"Siatka czasu",viewMonth:"Miesiąc",layout:"Układ",layoutCurrent:"Układ: {view}",moreEvents:"+{count} więcej",eventCount:"Wydarzenia: {count}",eventCountOne:"{count} wydarzenie",endsToday:"kończy się dziś",endsTomorrow:"kończy się jutro",dayOfEvent:"Dzień {day} z {days}",durationTotal:"łącznie {duration}",noEvents:"Brak wydarzeń",loading:"Ładowanie wydarzeń z kalendarza...",error:"Błąd: encja kalendarza nie została znaleziona lub jest niepoprawnie skonfigurowana",loadFailed:"Nie udało się wczytać:",newEvent:"Nowe wydarzenie",movedTo:"Przeniesiono na {time}",undo:"Cofnij",showAll:"Pokaż wszystkie",hideAll:"Ukryj wszystkie",private:"Prywatne"},pt:{daysOfWeek:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],fullDaysOfWeek:["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],months:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],allDay:"o dia todo",multiDay:"até",untilTime:"até {time}",at:"às",separator:", ",viewList:"Lista",viewColumns:"Colunas",viewGrid:"Grade",viewMonth:"Mês",layout:"Disposição",layoutCurrent:"Disposição: {view}",moreEvents:"+{count} a mais",eventCount:"{count} eventos",eventCountOne:"{count} evento",endsToday:"termina hoje",endsTomorrow:"termina amanhã",dayOfEvent:"Dia {day} de {days}",durationTotal:"{duration} no total",noEvents:"Nenhum evento",loading:"Carregando eventos do calendário...",error:"Erro: A entidade do calendário não foi encontrada ou está configurada incorretamente",loadFailed:"Não foi possível carregar:",newEvent:"Novo evento",movedTo:"Novo horário: {time}",undo:"Desfazer",showAll:"Mostrar todos",hideAll:"Ocultar todos",private:"Privado"},ro:{daysOfWeek:["Du","Lu","Ma","Mi","Jo","Vi","Sâ"],fullDaysOfWeek:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"],months:["Ian","Feb","Mart","Apr","Mai","Iun","Iul","Aug","Sept","Oct","Nov","Dec"],allDay:"toată ziua",multiDay:"până",untilTime:"până la {time}",at:"la",separator:", ",viewList:"Listă",viewColumns:"Coloane",viewGrid:"Grilă",viewMonth:"Lună",layout:"Aspect",layoutCurrent:"Aspect: {view}",moreEvents:"+{count} în plus",eventCount:"Evenimente: {count}",eventCountOne:"{count} eveniment",endsToday:"se încheie astăzi",endsTomorrow:"se încheie mâine",dayOfEvent:"Ziua {day} din {days}",durationTotal:"{duration} în total",noEvents:"Nu sunt evenimente",loading:"Încărcare evenimente de calendar...",error:"Eroare: Entitatea de calendar nu a fost găsită sau este configurată incorect",loadFailed:"Nu s-a putut încărca:",newEvent:"Eveniment nou",movedTo:"Mutat la {time}",undo:"Anulează",showAll:"Arată toate",hideAll:"Ascunde toate",private:"Privat"},ru:{daysOfWeek:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],fullDaysOfWeek:["воскресенья","понедельника","вторника","среды","четверга","пятницы","субботы"],months:["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"],allDay:"весь день",multiDay:"до",untilTime:"до {time}",at:"в",separator:", ",viewList:"Список",viewColumns:"Столбцы",viewGrid:"Сетка",viewMonth:"Месяц",layout:"Макет",layoutCurrent:"Макет: {view}",moreEvents:"Ещё +{count}",eventCount:"Событий: {count}",eventCountOne:"{count} событие",endsToday:"заканчивается сегодня",endsTomorrow:"заканчивается завтра",dayOfEvent:"День {day} из {days}",durationTotal:"всего {duration}",noEvents:"Нет событий",loading:"Загрузка событий календаря...",error:"Ошибка: Объект календарь, не найден или неправильно настроен",loadFailed:"Не удалось загрузить:",newEvent:"Новое событие",movedTo:"Перенесено на {time}",undo:"Отменить",showAll:"Показать все",hideAll:"Скрыть все",private:"Личное"},sl:{daysOfWeek:["ned","pon","tor","sre","čet","pet","sob"],fullDaysOfWeek:["nedelje","ponedeljka","torka","srede","četrtka","petka","sobote"],months:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],allDay:"cel dan",multiDay:"do",untilTime:"do {time}",at:"ob",separator:", ",viewList:"Seznam",viewColumns:"Stolpci",viewGrid:"Mreža",viewMonth:"Mesec",layout:"Postavitev",layoutCurrent:"Postavitev: {view}",moreEvents:"+{count} več",eventCount:"Dogodki: {count}",eventCountOne:"{count} dogodek",endsToday:"konča se danes",endsTomorrow:"konča se jutri",dayOfEvent:"Dan {day} od {days}",durationTotal:"skupaj {duration}",noEvents:"Ni dogodkov",loading:"Nalagam dogodke...",error:"Napaka: Entiteta ni bila najdena ali pa je nepravilno konfigurirana.",loadFailed:"Nalaganje ni uspelo:",newEvent:"Nov dogodek",movedTo:"Premaknjeno na {time}",undo:"Razveljavi",showAll:"Prikaži vse",hideAll:"Skrij vse",private:"Zasebno"},sk:{daysOfWeek:["Ne","Po","Ut","St","Št","Pi","So"],fullDaysOfWeek:["nedele","pondelka","utorka","stredy","štvrtka","piatku","soboty"],months:["Jan","Feb","Mar","Apr","Máj","Jún","Júl","Aug","Sep","Okt","Nov","Dec"],allDay:"celý deň",multiDay:"do",untilTime:"do {time}",at:"o",separator:", ",viewList:"Zoznam",viewColumns:"Stĺpce",viewGrid:"Časová mriežka",viewMonth:"Mesiac",layout:"Rozloženie",layoutCurrent:"Rozloženie: {view}",moreEvents:"+{count} navyše",eventCount:"Udalosti: {count}",eventCountOne:"{count} udalosť",endsToday:"končí dnes",endsTomorrow:"končí zajtra",dayOfEvent:"Deň {day} z {days}",durationTotal:"spolu {duration}",noEvents:"Žiadne udalosti",loading:"Načítavam udalosti z kalendára...",error:"Chyba: Entita kalendára nebola nájdená alebo je nesprávne nakonfigurovaná",loadFailed:"Nepodarilo sa načítať:",newEvent:"Nová udalosť",movedTo:"Presunuté na {time}",undo:"Späť",showAll:"Zobraziť všetky",hideAll:"Skryť všetky",private:"Súkromné"},sr:{daysOfWeek:["Нед","Пон","Уто","Сре","Чет","Пет","Суб"],fullDaysOfWeek:["недеље","понедељка","уторка","среде","четвртка","петка","суботе"],months:["јан","феб","мар","апр","мај","јун","јул","авг","сеп","окт","нов","дец"],allDay:"цео дан",multiDay:"до",untilTime:"до {time}",at:"у",separator:", ",viewList:"Листа",viewColumns:"Колоне",viewGrid:"Мрежа",viewMonth:"Месец",layout:"Распоред",layoutCurrent:"Распоред: {view}",moreEvents:"Још +{count}",eventCount:"{count} догађаја",eventCountOne:"{count} догађај",endsToday:"завршава се данас",endsTomorrow:"завршава се сутра",dayOfEvent:"Дан {day} од {days}",durationTotal:"укупно {duration}",noEvents:"Нема догађаја",loading:"Учитавање догађаја из календара...",error:"Грешка: Ентитет календара није пронађен или је неисправно конфигурисан",loadFailed:"Неуспешно учитавање:",newEvent:"Нови догађај",movedTo:"Премештено на {time}",undo:"Опозови",showAll:"Прикажи све",hideAll:"Сакриј све",private:"Приватно"},"sr-latn":{daysOfWeek:["Ned","Pon","Uto","Sre","Čet","Pet","Sub"],fullDaysOfWeek:["nedelje","ponedeljka","utorka","srede","četvrtka","petka","subote"],months:["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],allDay:"ceo dan",multiDay:"do",untilTime:"do {time}",at:"u",separator:", ",viewList:"Lista",viewColumns:"Kolone",viewGrid:"Mreža",viewMonth:"Mesec",layout:"Raspored",layoutCurrent:"Raspored: {view}",moreEvents:"Još +{count}",eventCount:"{count} događaja",eventCountOne:"{count} događaj",endsToday:"završava se danas",endsTomorrow:"završava se sutra",dayOfEvent:"Dan {day} od {days}",durationTotal:"ukupno {duration}",noEvents:"Nema događaja",loading:"Učitavanje događaja iz kalendara...",error:"Greška: Entitet kalendara nije pronađen ili je neispravno konfigurisan",loadFailed:"Neuspešno učitavanje:",newEvent:"Novi događaj",movedTo:"Premešteno na {time}",undo:"Opozovi",showAll:"Prikaži sve",hideAll:"Sakrij sve",private:"Privatno"},sv:{daysOfWeek:["Sön","Mån","Tis","Ons","Tors","Fre","Lör"],fullDaysOfWeek:["söndag","måndag","tisdag","onsdag","torsdag","fredag","lördag"],months:["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"],allDay:"heldag",multiDay:"till",untilTime:"till {time}",at:"vid",separator:", ",viewList:"Lista",viewColumns:"Kolumner",viewGrid:"Tidsrutnät",viewMonth:"Månad",layout:"Layout",layoutCurrent:"Layout: {view}",moreEvents:"+{count} till",eventCount:"{count} händelser",eventCountOne:"{count} händelse",endsToday:"slutar idag",endsTomorrow:"slutar imorgon",dayOfEvent:"Dag {day} av {days}",durationTotal:"{duration} totalt",noEvents:"Inga händelser",loading:"Laddar kalenderhändelser...",error:"Fel: Kalenderentiteten hittades inte eller är felaktigt konfigurerad.",loadFailed:"Kunde inte läsas in:",newEvent:"Ny händelse",movedTo:"Flyttad till {time}",undo:"Ångra",showAll:"Visa alla",hideAll:"Göm alla",private:"Privat"},uk:{daysOfWeek:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],fullDaysOfWeek:["неділі","понеділка","вівторка","середи","четверга","п'ятниці","суботи"],months:["січ","лют","бер","кві","тра","чер","лип","сер","вер","жов","лис","гру"],allDay:"весь день",multiDay:"до",untilTime:"до {time}",at:"о",separator:", ",viewList:"Список",viewColumns:"Стовпці",viewGrid:"Сітка",viewMonth:"Місяць",layout:"Макет",layoutCurrent:"Макет: {view}",moreEvents:"Ще +{count}",eventCount:"Подій: {count}",eventCountOne:"{count} подія",endsToday:"закінчується сьогодні",endsTomorrow:"закінчується завтра",dayOfEvent:"День {day} з {days}",durationTotal:"загалом {duration}",noEvents:"Немає подій",loading:"Завантаження подій календаря...",error:"Помилка: Cутність календаря не знайдено або налаштовано неправильно",loadFailed:"Не вдалося завантажити:",newEvent:"Нова подія",movedTo:"Перенесено на {time}",undo:"Скасувати",showAll:"Показати всі",hideAll:"Сховати всі",private:"Приватне"},vi:{daysOfWeek:["CN","T.2","T.3","T.4","T.5","T.6","T.7"],fullDaysOfWeek:["chủ nhật","thứ hai","thứ ba","thứ tư","thứ năm","thứ sáu","thứ bảy"],months:["Th1","Th2","Th3","Th4","Th5","Th6","Th7","Th8","Th9","Th10","Th11","Th12"],allDay:"cả ngày",multiDay:"đến",untilTime:"đến {time}",at:"lúc",separator:", ",viewList:"Danh sách",viewColumns:"Cột",viewGrid:"Lưới",viewMonth:"Tháng",layout:"Bố cục",layoutCurrent:"Bố cục: {view}",moreEvents:"+{count} nữa",eventCount:"{count} sự kiện",eventCountOne:"{count} sự kiện",endsToday:"kết thúc hôm nay",endsTomorrow:"kết thúc ngày mai",dayOfEvent:"Ngày thứ {day}/{days}",durationTotal:"tổng cộng {duration}",noEvents:"Không có sự kiện",loading:"Đang tải sự kiện...",error:"Lỗi: Không tìm thấy lịch hoặc cấu hình không đúng",loadFailed:"Không tải được:",newEvent:"Sự kiện mới",movedTo:"Đã chuyển sang {time}",undo:"Hoàn tác",showAll:"Hiện tất cả",hideAll:"Ẩn tất cả",private:"Riêng tư"},th:{daysOfWeek:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],fullDaysOfWeek:["วันอาทิตย์","วันจันทร์","วันอังคาร","วันพุธ","วันพฤหัสบดี","วันศุกร์","วันเสาร์"],months:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],allDay:"ตลอดวัน",multiDay:"ถึง",untilTime:"ถึง {time}",at:"เวลา",separator:" ",viewList:"รายการ",viewColumns:"คอลัมน์",viewGrid:"ตาราง",viewMonth:"เดือน",layout:"เค้าโครง",layoutCurrent:"เค้าโครง: {view}",moreEvents:"อีก {count} รายการ",eventCount:"{count} เหตุการณ์",eventCountOne:"{count} เหตุการณ์",endsToday:"สิ้นสุดวันนี้",endsTomorrow:"สิ้นสุดพรุ่งนี้",dayOfEvent:"วันที่ {day} จาก {days}",durationTotal:"รวม {duration}",noEvents:"ไม่มีเหตุการณ์",loading:"กำลังโหลดเหตุการณ์ปฏิทิน...",error:"ข้อผิดพลาด: ไม่พบเอนทิตีปฏิทินหรือมีการตั้งค่าที่ไม่ถูกต้อง",loadFailed:"โหลดไม่สำเร็จ:",newEvent:"เหตุการณ์ใหม่",movedTo:"ย้ายไปที่ {time}",undo:"เลิกทำ",showAll:"แสดงทั้งหมด",hideAll:"ซ่อนทั้งหมด",private:"ส่วนตัว"},tr:{daysOfWeek:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],fullDaysOfWeek:["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"],months:["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],allDay:"tüm gün",multiDay:"bitiş:",untilTime:"bitiş: {time}",at:"saat",separator:", ",viewList:"Liste",viewColumns:"Sütunlar",viewGrid:"Izgara",viewMonth:"Ay",layout:"Düzen",layoutCurrent:"Düzen: {view}",moreEvents:"+{count} daha",eventCount:"{count} etkinlik",eventCountOne:"{count} etkinlik",endsToday:"bitiş: bugün",endsTomorrow:"bitiş: yarın",dayOfEvent:"{days} günün {day}. günü",durationTotal:"toplam {duration}",noEvents:"Etkinlik yok",loading:"Takvim etkinlikleri yükleniyor...",error:"Hata: Takvim içeriği bulunamadı veya yanlış yapılandırılmış",loadFailed:"Yüklenemedi:",newEvent:"Yeni etkinlik",movedTo:"Yeni saat: {time}",undo:"Geri al",showAll:"Tümünü göster",hideAll:"Tümünü gizle",private:"Özel"},"zh-cn":{daysOfWeek:["日","一","二","三","四","五","六"],fullDaysOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],allDay:"整天",multiDay:"直到",untilTime:"直到 {time}",at:"{time}",separator:"，",viewList:"列表",viewColumns:"列",viewGrid:"网格",viewMonth:"月",layout:"布局",layoutCurrent:"布局：{view}",moreEvents:"还有 {count} 项",eventCount:"{count} 项活动",eventCountOne:"{count} 项活动",endsToday:"今天 {at} 结束",endsTomorrow:"明天 {at} 结束",dayOfEvent:"第{day}天，共{days}天",durationTotal:"共{duration}",noEvents:"没有活动",loading:"正在加载日历事件...",error:"错误：找不到日历实体或配置不正确",loadFailed:"无法加载：",newEvent:"新活动",movedTo:"已移至 {time}",undo:"撤销",showAll:"全部显示",hideAll:"全部隐藏",private:"私人"},"zh-tw":{daysOfWeek:["日","一","二","三","四","五","六"],fullDaysOfWeek:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],allDay:"整天",multiDay:"直到",untilTime:"直到 {time}",at:"{time}",separator:"，",viewList:"列表",viewColumns:"欄",viewGrid:"網格",viewMonth:"月",layout:"版面配置",layoutCurrent:"版面配置：{view}",moreEvents:"還有 {count} 項",eventCount:"{count} 項活動",eventCountOne:"{count} 項活動",endsToday:"今天 {at} 結束",endsTomorrow:"明天 {at} 結束",dayOfEvent:"第{day}天，共{days}天",durationTotal:"共{duration}",noEvents:"沒有活動",loading:"正在加載日曆事件...",error:"錯誤：找不到日曆實體或配置不正確",loadFailed:"無法載入：",newEvent:"新活動",movedTo:"已移至 {time}",undo:"復原",showAll:"顯示全部",hideAll:"隱藏全部",private:"私人"}};function Xs(e){const t=e?.toLowerCase()||yt;return Js[t]||Js[yt]}const Zs=" ";function Qs({end:e,duration:t,allDayLabel:n}){return t&&void 0===n?`${e??""}${Zs}${t}`:e}function el({duration:e,allDayLabel:t}){return e&&void 0===t?`${Zs}${e}`:void 0}function tl(e,t,n,i){return nl(il(e,t,n,i),n)}function nl({allDayLabel:e,text:t,duration:n},i){const r=n?`${Zs}${n}`:"";if(void 0===e)return pl(`${t}${r}`);const{separator:a}=Xs(i);return pl(`${t?`${e}${a}${t}`:e}${r}`)}function il(e,t,n,i){const r=function(e,t,n,i){const r=!e.start.dateTime;let a,o;r?(a=fl(e.start.date||""),o=fl(e.end.date||"")):(a=new Date(e.start.dateTime||""),o=new Date(e.end.dateTime||""));const s=Xs(n);if(r){const e=new Date(o);return e.setDate(e.getDate()-1),a.toDateString()!==e.toDateString()?{allDayLabel:s.allDay,text:Ul(e,n,s)}:{allDayLabel:s.allDay,text:""}}const l=Pl(t,i),d=al(e);if("first"===d?.row)return t.show_end_time?{text:ql(a,d.end,n,s,l,t.time_two_digit_hours,!0)}:{text:Dl(a,l,t.time_two_digit_hours,n)};if("last"===d?.row){const e=Dl(o,l,t.time_two_digit_hours,n);return{text:s.untilTime.replace("{time}",()=>e)}}return a.toDateString()!==o.toDateString()?{text:ql(a,o,n,s,l,t.time_two_digit_hours)}:{...jl(a,o,t.show_end_time,l,t.time_two_digit_hours,n)}}(e,t,n,i),a=t.show_duration?rl(e,n):null;return a?{...r,duration:a}:r}function rl(e,t,n){const i=function(e){if(e._gridSource)return{...e._gridSource,part:!0===e._isMultiDaySegment&&!e._gridSegmentStartsEvent};if(e._isMultiDaySegment&&e._sourceStart&&e._sourceEnd){const t="first"!==al(e)?.row;return{start:e._sourceStart,end:e._sourceEnd,part:t}}return{start:e.start,end:e.end,part:!1}}(e),r=function(e,t){if(e.date&&t.date){const n=xl(fl(e.date),fl(t.date));return n>=1?{days:n,hours:0,minutes:0}:null}if(!e.dateTime||!t.dateTime)return null;const n=new Date(e.dateTime),i=new Date(t.dateTime);if(!(i.getTime()>n.getTime())||zl(n,i))return null;if($l(n,i)){let e=xl(n,i),t=Sl(i)-Sl(n);t<0&&(e-=1,t+=864e5);let r=Math.round(t/6e4);return r>=1440&&(e+=1,r-=1440),{days:e,hours:Math.floor(r/60),minutes:r%60}}const r=Math.max(1,Math.round((i.getTime()-n.getTime())/6e4));return{days:0,hours:Math.floor(r/60),minutes:r%60}}(i.start,i.end),a=r?function(e,t){let n=ol.get(t);void 0===n&&(n=function(e){const t=Intl.ListFormat;try{const n=(t,n)=>new Intl.NumberFormat(Dt(e),{style:"unit",unit:t,unitDisplay:n}),i={days:n("day","long"),hours:n("hour","short"),minutes:n("minute","short")},r=t?new t(Dt(e),{type:"unit",style:"short"}):null;return e=>{const t=["days","hours","minutes"].filter(t=>e[t]>0).map(t=>i[t].format(e[t]));return r?r.format(t):t.join(", ")}}catch{return null}}(t),ol.set(t,n));try{return n?n(e):null}catch{return null}}(r,t):null;return a?`⁨(${n??i.part?Xs(t).durationTotal.replace("{duration}",()=>a):a})⁩`:null}function al(e){if(!e._splitFromTimedEvent||!e.start.dateTime||!e.end.dateTime)return null;const t=e._sourceStart?.dateTime,n=e._sourceEnd?.dateTime;if(!t||!n)return null;const i=new Date(e.start.dateTime).getTime()===new Date(t).getTime(),r=new Date(n);return i===(new Date(e.end.dateTime).getTime()===r.getTime())?null:{row:i?"first":"last",end:r}}const ol=Pt();function sl(e,t){if(e.end?.dateTime){const n=new Date(e.end.dateTime),i=e.start?.dateTime?new Date(e.start.dateTime):n,r=n.getTime()>i.getTime()?new Date(n.getTime()-1):n;return t.getTime()>n.getTime()?{end:n,days:xl(r,t)}:null}if(e.end?.date){const n=fl(e.end.date);n.setDate(n.getDate()-1);const i=xl(n,t);return i>=1?{end:fl(e.end.date),days:i}:null}return null}function ll(e,t=new Date){return!!e.start?.dateTime&&0===sl(e,t)?.days}const dl=new Map;function cl(e,t=!0){if(!e)return"";if(!1===t)return e;const n=e.trim();if("string"==typeof t&&"true"!==t){const e=function(e){if(dl.has(e))return dl.get(e)??null;let t=null;try{t=new RegExp(`(${e})\\s*$`,"i")}catch{et(`Ignoring "remove_location_country": ${JSON.stringify(e)} is not a valid regular expression. Locations are shown unchanged.`)}return dl.set(e,t),t}(t);return null===e?n:n.replace(e,"").replace(/,?\s*$/,"")}for(const e of Ce)if(n.endsWith(e))return n.slice(0,n.length-e.length).replace(/,?\s*$/,"");return n}const ul=/microsoft\s+teams|teams\.microsoft\.(?:com|us)|teams\.live\.com/i;const hl=/^[a-zA-Z/!?]$/;function ml(e){if(!e)return"";const t=document.createElement("textarea");return t.innerHTML=function(e){const t=e.lastIndexOf(">"),n=e.lastIndexOf("--\x3e"),i=(t,n,i)=>n<i?-1:e.indexOf(t,i),r=r=>{if(e.startsWith("\x3c!--",r)){if(">"===e.charAt(r+4))return r+5;if(e.startsWith("->",r+4))return r+6;const t=i("--\x3e",n,r+4);if(-1!==t)return t+3}if(hl.test(e.charAt(r+1))){const e=i(">",t,r+2);if(-1!==e)return e+1}return-1};let a="",o=0;for(let t=e.indexOf("<");-1!==t;){const n=r(t);-1===n?t=e.indexOf("<",t+1):(a+=e.slice(o,t),o=n,t=e.indexOf("<",n))}return a+e.slice(o)}(e),t.value.trim()}function pl(e){return e&&0!==e.length?e.charAt(0).toUpperCase()+e.slice(1):e}function fl(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function gl(e){return ht(e)}const vl={AF:[4,5],BH:[5,6],DZ:[5,6],EG:[5,6],IL:[5,6],IN:[0],IQ:[5,6],IR:[5],JO:[5,6],KW:[5,6],LY:[5,6],OM:[5,6],QA:[5,6],SA:[5,6],SD:[5,6],SY:[5,6],UG:[0],YE:[5,6]},_l={ar:[5,6],fa:[5],he:[5,6],hi:[0],ml:[0],ta:[0],te:[0]},yl=[0,6];function wl(e){const t=e?.config?.country;if(t)return vl[t.toUpperCase()]??yl;const n=e?.locale?.language;if(!n)return yl;const i=n.toLowerCase();return _l[i]??_l[i.split("-")[0]]??yl}function bl(e,t){return wl(t).includes(e.getDay())}function xl(e,t){const n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.round((i-n)/864e5)}function kl(e,t){let n,i;if(e?.date&&t?.date)n=fl(e.date),i=fl(t.date),i.setDate(i.getDate()-1);else{if(!e?.dateTime||!t?.dateTime)return null;{n=new Date(e.dateTime);const r=new Date(t.dateTime);if(!$l(n,r))return null;i=new Date(r.getTime()-1)}}const r=xl(n,i)+1;return r>=2?{first:n,days:r}:null}function $l(e,t){const n=xl(e,t);return n>=2||1===n&&Sl(t)>=Sl(e)}function Sl(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate());return e.getTime()===t.getTime()?0:function(e){return 1e3*(60*(60*e.getHours()+e.getMinutes())+e.getSeconds())+e.getMilliseconds()}(e)}const Tl=new Set(["ja","ko","zh-cn","zh-tw"]),Ml=Pt();function Dl(e,t=!0,n=!1,i){let r=e.getHours();const a=e.getMinutes();if(!t){const e=r>=12;return r=r%12||12,function(e,t,n){const i=function(e){const t=e?.toLowerCase();if(!t||!Tl.has(t))return null;const n=Ml.get(t);if(void 0!==n)return n;const i=new Intl.DateTimeFormat(Dt(t),{hour:"numeric",minute:"2-digit",hour12:!0}),r=e=>i.formatToParts(new Date(2e3,0,1,e,5)),a=e=>e.find(e=>"dayPeriod"===e.type)?.value,o=r(9),s=a(o),l=a(r(21)),d=o.findIndex(e=>"dayPeriod"===e.type),c=o.findIndex(e=>"hour"===e.type);let u=null;return s&&l&&-1!==d&&-1!==c&&(u={am:s,pm:l,before:d<c,gap:o.slice(Math.min(d,c)+1,Math.max(d,c)).some(e=>/\s/.test(e.value))?" ":""}),Ml.set(t,u),u}(n);if(!i)return`${e} ${t?"PM":"AM"}`;const r=t?i.pm:i.am;return i.before?`${r}${i.gap}${e}`:`${e}${i.gap}${r}`}(`${n?Ll(r):r}:${Ll(a)}`,e,i)}return`${n?Ll(r):r}:${Ll(a)}`}const Cl=/(?:午前|午後|上午|下午|오전|오후) ?\d{1,2}:\d{2}|\d{1,2}(?::\d{2})? [AP]M/g,Al=/[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/u;function El(e,t=""){return e.replace(Cl,(n,i)=>{const r=n.replace(" "," "),a=function(e){const t=[...e.replace(Cl,"")];for(let e=t.length-1;e>=0;e--){if(Al.test(t[e]))return"rtl";if(/\p{L}/u.test(t[e]))return"ltr"}return null}(t+e.slice(0,i));return"ltr"===a?r:`⁨${r}⁩${"rtl"===a?"‏":""}`})}function Pl(e,t){return!0===e.time_24h||!1!==e.time_24h&&function(e,t=!0){if(!e)return t;const n=()=>e.language?Ut(e.language)??t:t;if("24"===e.time_format)return!0;if("12"===e.time_format)return!1;if("language"===e.time_format&&e.language)return n();if("system"===e.time_format){const e="undefined"==typeof navigator?void 0:navigator.language;return(e?Ut(e):void 0)??n()}return t}(t?.locale,!1)}function Ll(e){return e.toString().padStart(2,"0")}function Fl(e){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()));t.setUTCDate(t.getUTCDate()+4-(t.getUTCDay()||7));const n=Date.UTC(t.getUTCFullYear(),0,1);return Math.ceil(((t.getTime()-n)/864e5+1)/7)}const Rl=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"],Ol={af:0,ar:6,bn:0,en:0,"en-gb":1,fa:6,he:0,hi:0,id:0,is:0,ja:0,ko:0,ml:0,pt:0,"pt-br":0,ta:0,te:0,th:0,ur:0,"zh-hans":1,"zh-hant":0};function Nl(e,t){if("sunday"===e)return 0;if("monday"===e)return 1;const n=Rl.indexOf(t?.first_weekday??"");return-1!==n?n:t?.language?function(e){const t=e.toLowerCase();return Ol[t]??Ol[t.split("-")[0]]??1}(t.language):1}function Il(e){return e||"iso"}function zl(e,t){return Math.floor(e.getTime()/6e4)===Math.floor(t.getTime()/6e4)}function jl(e,t,n,i=!0,r=!1,a){const o=Dl(e,i,r,a);if(!n||zl(e,t))return{text:o};const s=` - ${Dl(t,i,r,a)}`;return{text:`${o}${s}`,end:s}}function Hl(e,t){return e.at.includes("{time}")?e.at.replace("{time}",()=>t):`${e.at} ${t}`}function Wl(e,t,n){const i=Hl(t,n);return e.includes("{at}")?e.replace("{at}",()=>i):`${e} ${i}`}function Bl(e){const t=/\S*\{at\}\S*/.exec(e);if(!t)return e;const n=e.slice(0,t.index).trim(),i=e.slice(t.index+t[0].length).trim();return`${n}${/\p{Script=Han}$/u.test(n)&&/^\p{Script=Han}/u.test(i)?"":" "}${i}`.trim()}function ql(e,t,n,i,r=!0,a=!1,o=!1){const s=new Date,l=new Date(s.getFullYear(),s.getMonth(),s.getDate()),d=new Date(l);d.setDate(d.getDate()+1);const c=e=>Dl(e,r,a,n);let u;if(t.toDateString()===l.toDateString())u=Wl(i.endsToday,i,c(t));else if(t.toDateString()===d.toDateString())u=Wl(i.endsTomorrow,i,c(t));else{const e=Hl(i,c(t));u=`${Gl(t,n,i)} ${e}`}if(o||l.getTime()<=e.getTime()){const n=c(e);return t.toDateString()===l.toDateString()||t.toDateString()===d.toDateString()?`${n}${i.separator}${u}`:`${n}${i.endsToday.startsWith(`${i.multiDay} `)?i.separator:" "}${i.multiDay} ${u}`}return t.toDateString()===l.toDateString()||t.toDateString()===d.toDateString()?u:`${i.multiDay} ${u}`}function Ul(e,t,n){const i=new Date,r=new Date(i.getFullYear(),i.getMonth(),i.getDate()),a=new Date(r);return a.setDate(a.getDate()+1),e.toDateString()===r.toDateString()?Bl(n.endsToday):e.toDateString()===a.toDateString()?Bl(n.endsTomorrow):`${n.multiDay} ${Gl(e,t,n)}`}const Vl=Pt();function Gl(e,t,n){const i=n.fullDaysOfWeek[e.getDay()],r=t?.toLowerCase()||yt,a=function(e){let t=Vl.get(e);if(void 0!==t)return t;t=null;try{if(Ct(Intl.DateTimeFormat,e)){const n={weekday:"long",day:"numeric",timeZone:"UTC"},i=new Intl.DateTimeFormat(Dt(e),{...n,month:"short"}),r=i.formatToParts(Date.UTC(2e3,9,23,12)).find(e=>"month"===e.type);t=/^\d+$/.test(r?.value??"")?new Intl.DateTimeFormat(Dt(e),{...n,month:"long"}):i}}catch{t=null}return Vl.set(e,t),t}(Js[r]?r:yt);if(a){const t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),12));return a.formatToParts(t).map(e=>"weekday"===e.type?i:e.value).join("")}const o=e.getDate(),s=n.months[e.getMonth()];switch(function(e){const t=e?.toLowerCase()||"";return"de"===t||"hr"===t||"sr"===t||"sr-latn"===t?"day-dot-month":"en"===t||"hu"===t?"month-day":"day-month"}(t)){case"day-dot-month":return`${i}, ${o}. ${s}`;case"month-day":return`${i}, ${s} ${o}`;default:return`${i}, ${o} ${s}`}}const Kl=new Map;function Yl(e){return void 0===e||""===e?void 0:e}function Jl(e,t,n){const i=Yl(t),r=Yl(n);return void 0===i&&void 0===r?null:{field:"location"===e||"description"===e?e:"title",pattern:i,replacement:r}}function Xl(e,t,n){if(null===t||t.field!==n||""===e)return{text:e,replacedWholeField:!1};if(void 0===t.pattern)return{text:t.replacement??"",replacedWholeField:!0};const i=function(e){if(Kl.has(e))return Kl.get(e)??null;let t=null;try{t=new RegExp(e,"gi")}catch{et(`Ignoring "replace_pattern": ${JSON.stringify(e)} is not a valid regular expression. Event text is shown unchanged.`)}return Kl.set(e,t),t}(t.pattern);return null===i?{text:e,replacedWholeField:!1}:{text:e.replace(i,t.replacement??""),replacedWholeField:!1}}function Zl(e){return!0===e._matchedConfig?.private}function Ql(e,t,n){const i=Jl(t?.replace_field,t?.replace_pattern,t?.replace_with),r=i&&void 0===i.pattern?i:null,a=function(e){return Xs(e).private}(n),o=(e,t,n)=>r?.field!==e||!n&&""===t?n||""!==t.trim()?{text:a,locked:!0}:{text:"",locked:!1}:{text:r.replacement??"",locked:!1},s=o("title",e.summary??"",!0),l=o("location",e.location??"",!1),d=o("description",ml(e.description??""),!1);return{title:s.text,location:l.text,description:d.text,locked:{title:s.locked,location:l.locked,description:d.locked}}}function ed(e){const t=e?.action;return"string"!=typeof t||""===t||"none"===t?"none":t===ke?"details":xe.includes(t)?"none":"forward"}const td=new Set(["title","location","description"]),nd=new Set(["url_path","navigation_path"]),id=new Set(["data","service_data"]),rd=new Set(["http","https"]),ad=new RegExp(`\\{(${["title","start","end","all_day","location","description","calendar"].join("|")})\\}`,"g");class od extends Error{}function sd(e,t,n,i){if("string"==typeof e){const{text:r,filled:a}=function(e,t,n){const i=void 0!==n.key&&nd.has(n.key),r=i?function(e){const t=["?","#"].map(t=>e.indexOf(t)).filter(e=>e>=0);return t.length?Math.min(...t):1/0}(e):n.payload?0:1/0;let a=!1;return{text:e.replace(ad,(e,n,o)=>{if(td.has(n)&&o<r)throw new od;a=!0;const s=t[n];return i?encodeURIComponent(s):s}),filled:a}}(e,t,n);return a&&void 0!==n.key&&i.add(n.key),r}if(Array.isArray(e))return e.map(e=>sd(e,t,n,i));if(e&&"object"==typeof e){const r="confirmation"===n.key&&!n.payload;return Object.fromEntries(Object.entries(e).map(([e,a])=>[e,sd(a,t,{key:e,payload:n.payload||id.has(e)||r&&"text"===e},i)]))}return e}function ld(e){const t=e._source??e;return t.end?.dateTime??t.end?.date??void 0}function dd(e){if(e._isEmptyDay)return;const t=e._source??e,n=t.start.dateTime??t.start.date;return n?{summary:t.summary??"",dtstart:n,dtend:ld(e)??n,description:t.description??void 0,location:t.location??void 0,uid:t.uid??void 0,recurrence_id:t.recurrence_id??void 0,rrule:t.rrule??void 0,status:"string"==typeof t.status?t.status:void 0}:void 0}function cd(e,t){const n=e._mergedLocations;if(!n?.length)return;const i=new Set;let r=!1;for(const e of n){let n;if(!0===e.config?.private){const i=Ql({location:e.location},e.config,t);n=i.location,r||=i.locked.location}else{const t=Jl(e.config?.replace_field,e.config?.replace_pattern,e.config?.replace_with);n=Xl(e.location,t,"location").text}n.trim()&&i.add(n.trim())}return{text:[...i].join(" · "),locked:r,places:i.size}}function ud(e,t){return(cd(e,t)?.places??0)>1}function hd(e,t){const n=e._source??e,i=e._matchedConfig,r=cd(e,t);if(Zl(e)){const{title:e,location:a,description:o}=Ql(n,i,t);return{title:e,location:r?.text??a,description:o}}const a=Jl(i?.replace_field,i?.replace_pattern,i?.replace_with),o=(e,t)=>Xl(e,a,t).text,s=n.description??"";return{title:o(n.summary??"","title"),location:r?.text??o(n.location??"","location"),description:"description"===a?.field?o(ml(s),"description"):s}}function md(e){e.style.opacity="0",e.style.transition="opacity 300ms ease-out",setTimeout(()=>{e.parentNode&&(e.parentNode.removeChild(e),it("Removed hold indicator"))},300)}function pd(e){const t=e.getBoundingClientRect(),n={left:t.left,top:t.top,right:t.right,bottom:t.bottom},i=e.closest(".event");return!i||function(e){const t=e.trim().toLowerCase();if(!t||"transparent"===t)return!1;const n=/\/\s*([\d.]+%?)\s*\)$/.exec(t)??/^rgba\([^,]+,[^,]+,[^,]+,\s*([\d.]+%?)\s*\)$/.exec(t);if(!n)return!0;const i=Number.parseFloat(n[1]);return Number.isNaN(i)||i>0}(getComputedStyle(i).backgroundColor)||"rtl"===getComputedStyle(i).direction?n:gd(e,n)}function fd(e){const t=e.getBoundingClientRect(),n={left:t.left,top:t.top,right:t.right,bottom:t.bottom};return"rtl"===getComputedStyle(e).direction?n:gd(e,n)}function gd(e,t){const n=[],i=document.createRange();if("function"!=typeof i.getClientRects)return t;const r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let e=r.nextNode();e;e=r.nextNode())if(e.nodeValue?.trim()){i.selectNodeContents(e);for(const e of Array.from(i.getClientRects()))n.push(e)}const a=function(e){const t=e.filter(e=>e.right>e.left).sort((e,t)=>e.left-t.left);if(!t.length)return;let n=t[0].right;for(const e of t.slice(1)){if(e.left>n+48)break;n=Math.max(n,e.right)}return n}(n);return void 0===a?t:{...t,right:Math.min(t.right,a)}}function vd(e){const t=new Date(e);return t.setHours(0,0,0,0),t.getTime()}function _d(e,t){const n=new Date(vd(e));return n.setHours(0,t,0,0),n}function yd(e,t,n){const i=De.ADD_SLOT_MINUTES,r=_d(e.timestamp,e.minute);if(!n)return{allDay:!1,start:r,end:new Date(r.getTime()+36e5)};const a=_d(t.timestamp,t.minute),o=a<r?{start:a,end:_d(e.timestamp,e.minute+i)}:{start:r,end:_d(t.timestamp,t.minute+i)},s=o.end>o.start?o.end:new Date(o.start.getTime()+60*i*1e3);return{allDay:!1,start:o.start,end:s}}function wd(e,t){const[n,i]=[vd(e),vd(t)].sort((e,t)=>e-t);return{allDay:!0,start:new Date(n),end:new Date(i)}}function bd(e,t){return e.allDay===t.allDay&&e.start.getTime()===t.start.getTime()&&e.end.getTime()===t.end.getTime()}const xd=/^(\d{4})-(\d{2})-(\d{2})$/,kd=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;function $d(e){const t=xd.exec(e);if(!t)return;const n=new Date(Number(t[1]),Number(t[2])-1,Number(t[3]));return Number.isNaN(n.getTime())?void 0:n}function Sd(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function Td(e,t){const n=xd.test(e);if(n){const i=$d(e),r=$d(t);if(!i)return;const a=r?Sd(r,-1):i;return{allDay:n,start:i,end:a<i?i:a}}if(!kd.test(e))return;const i=new Date(e),r=new Date(t);return Number.isNaN(i.getTime())?void 0:{allDay:n,start:i,end:Number.isNaN(r.getTime())?new Date(i):r}}function Md(e){const t=e=>String(e).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function Dd(e){const t=e=>String(e).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}`}function Cd(e){if(e.allDay)return{dtstart:Md(e.start),dtend:Md(Sd(e.end,1))};const t=e=>`${e.toISOString().slice(0,19)}Z`;return{dtstart:t(e.start),dtend:t(e.end)}}function Ad(e,t){return Math.round((Date.UTC(t.getFullYear(),t.getMonth(),t.getDate())-Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))/864e5)}function Ed(e,t){const n=$d(t);if(n)return new Date(n.getFullYear(),n.getMonth(),n.getDate(),e.getHours(),e.getMinutes())}function Pd(e,t){const n=/^(\d{1,2}):(\d{2})/.exec(t);if(!n)return;const i=Number(n[1]),r=Number(n[2]);return i>23||r>59?void 0:new Date(e.getFullYear(),e.getMonth(),e.getDate(),i,r)}function Ld(e,t){return e.allDay?{allDay:!0,start:t,end:Sd(t,Ad(e.start,e.end))}:{allDay:!1,start:t,end:new Date(t.getTime()+(e.end.getTime()-e.start.getTime()))}}function Fd(e,t,n){if(t===e.allDay)return e;if(t){const t=new Date(e.start.getFullYear(),e.start.getMonth(),e.start.getDate()),n=0===e.end.getHours()&&0===e.end.getMinutes()&&e.end>e.start?new Date(e.end.getTime()-1):e.end,i=new Date(n.getFullYear(),n.getMonth(),n.getDate());return{allDay:!0,start:t,end:i<t?t:i}}const i=new Date(e.start.getFullYear(),e.start.getMonth(),e.start.getDate(),n);return Md(e.end)>Md(e.start)?{allDay:!1,start:i,end:new Date(e.end.getFullYear(),e.end.getMonth(),e.end.getDate(),n+1)}:{allDay:!1,start:i,end:new Date(i.getTime()+36e5)}}function Rd(e,t,n,i){const r=i-n;return e.height>0&&r>0?n+Math.min(1,Math.max(0,(t-e.top)/e.height))*r:n}function Od(e,t){return{summary:e.summary,...Cd(t),...void 0!==e.description&&{description:e.description},...void 0!==e.location&&{location:e.location}}}function Nd(e,t,n){return!(!n||t!==e.entityId||n.uid!==e.uid)&&(n.recurrence_id??void 0)===e.recurrenceId&&Td(n.dtstart,n.dtend)?.start.getTime()===e.start}const Id=/(?:^|\s)year[:=](\d{4})(?!\w)/i,zd=new RegExp(Id.source,"gi");function jd(e){return e.replace(zd,"").replace(/[^\S\n]{2,}/g," ").replace(/[^\S\n]+\n/g,"\n").replace(/\n{3,}/g,"\n\n").trim()}function Hd(e,t){return e.trim().length>0?`${e} (${t})`:`(${t})`}const Wd="07:00",Bd="22:00",qd=/^(\d{2}):(\d{2})$/;function Ud(e){if("string"!=typeof e)return null;const t=qd.exec(e);if(!t)return null;const n=Number(t[1]),i=Number(t[2]);return i>59?null:24===n?0===i?1440:null:n<24?60*n+i:null}function Vd(e,t){const n=Ud(e),i=Ud(t);return null===n||null===i||n>=i?{startMin:Ud(Wd),endMin:Ud(Bd),usedFallback:!0}:{startMin:n,endMin:i,usedFallback:!1}}function Gd(e){return Number.isFinite(e)&&e>0?e:60}function Kd(e,t){return e%60==0||t<60&&t>0&&e%t===0}function Yd(e){return 60*e.getHours()+e.getMinutes()+e.getSeconds()/60+e.getMilliseconds()/6e4}function Jd(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function Xd(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Zd(e,t,n){return!(!Number.isFinite(e)||!Number.isFinite(t)||t<e)&&(t===e?e>=n.startMin&&e<n.endMin:t>n.startMin&&e<n.endMin)}function Qd(e,t,n){if(!Zd(e,t,n))return null;const i=n.endMin-n.startMin,r=Math.max(e,n.startMin),a=Math.min(t,n.endMin);return{topPct:(r-n.startMin)/i*100,heightPct:(a-r)/i*100,clippedTop:e<n.startMin,clippedBottom:t>n.endMin}}function ec(e,t,n){const i=e=>Kd(Math.floor(e),n)||Kd(Math.ceil(e),n),r=(e,t)=>e!==t&&e.endMin>e.startMin&&e.endMin===t.startMin&&e.x0Pct<t.x1Pct&&t.x0Pct<e.x1Pct;return e.map(n=>({ruledStart:n.startMin<=t.startMin||i(n.startMin),ruledEnd:i(n.endMin),touchedAbove:e.some(e=>r(e,n)),touchedBelow:e.some(e=>r(n,e))}))}function tc(e,t){const n=Yd(e);return n<t.startMin||n>=t.endMin?null:(n-t.startMin)/(t.endMin-t.startMin)*100}const nc={at:-1/0,held:!1};function ic(e){return{at:e.endMin,held:e.endMin===e.startMin}}function rc(e,t){return e.held?e.at<t:e.at<=t}function ac(e,t){return e.at!==t.at?e.at>t.at?e:t:{at:e.at,held:e.held||t.held}}function oc(e,t){const n=[];let i=nc;for(const r of e){const e=t(r);rc(i,e.startMin)&&(n.push([]),i=nc),n[n.length-1].push(r),i=ac(i,ic(e))}return n}function sc(e,t,n,i,r){const a=n>i?t-function(e,t,n){const i=Math.min(.25*e,e/(t+1));return n>0?Math.min(n,i):i}(t-e,i,r):t;return{start:e,end:t,share:(a-e)/Math.min(n,i),overflowStart:a}}function lc(e,t){const n=[];return e.map(e=>{let i=n.findIndex(t=>rc(t,e.startMin));return i<0&&(i=n.length),i<t&&(n[i]=ic(e)),{event:e,laneIndex:i}})}const dc=1e-6;function cc(e,t){const n=e?.depth??0,i=t?.depth??0;return n!==i?n>i:(e?.order??-1)>(t?.order??-1)}function uc(e,t){for(let n=t.host;n;n=n.host)if(n===e)return!0;return!1}function hc(e,t){return!rc(e.release,t.event.startMin)}function mc(e,t,n,i,r){const a=[],o=new Map;for(const s of e){const e=Math.max(s.startMin,t.startMin);let l=null;for(const t of a){if(rc(t.release,s.startMin))continue;const i=!t.hidden&&!r.has(t.order)&&t.depth<n.maxDepth&&e-t.top>=(n.hostThresholdMin?.(t.event)??n.thresholdMin)?t:t.host;cc(i,l)&&(l=i)}let d=o.get(l);d&&!rc(d.release,s.startMin)||(d={release:nc,laneReleases:[],needed:0,members:[],region:null},o.set(l,d));let c=d.laneReleases.findIndex(e=>rc(e,s.startMin));c<0&&(c=d.laneReleases.length),c<i&&(d.laneReleases[c]=ic(s)),d.release=ac(d.release,ic(s)),d.needed=Math.max(d.needed,c+1);const u={event:s,order:a.length,top:e,bottom:Math.max(e,Math.min(s.endMin,t.endMin)),release:ic(s),host:l,depth:(l?.depth??0)+1,children:[],cluster:d,laneIndex:Math.min(c,i),hidden:c>=i,x0:0,x1:100,contentX1:100,contentEnd:e,raised:!1};l?.children.push(u),d.members.push(u),a.push(u)}for(const e of a){const t=e.cluster;if(!t.region){const r=e.host?e.host.x0+n.indentPct:0;let o=e.host?e.host.x1:100;for(const n of a){if(n.order>=e.order)break;t.members.some(e=>hc(n,e))&&!uc(n,e)&&n.x0>r+dc&&(o=Math.min(o,n.x0))}t.region=sc(r,o,t.needed,i,n.stripPct??1/0)}const{start:r,end:o,share:s,overflowStart:l}=t.region;e.x0=e.hidden?l:r+e.laneIndex*s,e.x1=e.hidden||t.needed<=i?o:l;for(const t of a){if(t.order>=e.order)break;hc(t,e)&&(uc(t,e)?e.raised=!0:(t.x0>e.x0+dc&&(e.x1=Math.min(e.x1,t.x0)),t.x0<e.x1-dc&&e.x0<t.x1-dc&&(e.raised=!0)))}}const s=pc(a);for(const e of a){e.contentEnd=e.children.reduce((e,t)=>Math.min(e,t.top),e.bottom),e.contentX1=e.x1;const n=[...a.filter(t=>t.order>e.order&&!t.hidden&&!uc(e,t)).map(e=>({x0:e.x0,top:e.top,bottom:e.bottom})),...s.map(e=>({x0:e.x0Pct,top:Math.max(e.startMin,t.startMin),bottom:Math.min(e.endMin,t.endMin)}))],i=e.contentEnd>e.top?e.contentEnd:e.top+dc;for(const t of n){const n=t.bottom>t.top?t.bottom:t.top+dc;t.top<i&&n>e.top&&t.x0>e.x0+dc&&(e.contentX1=Math.min(e.contentX1,t.x0))}}return a}function pc(e){const t=new Map;for(const n of e)n.hidden&&t.set(n.cluster,[...t.get(n.cluster)??[],n]);return Array.from(t.values()).flatMap(e=>oc(e,e=>e.event).map(e=>({startMin:Math.min(...e.map(e=>e.event.startMin)),endMin:Math.max(...e.map(e=>e.event.endMin)),x0Pct:e[0].x0,x1Pct:Math.min(...e.map(e=>e.x1)),hidden:e.map(e=>e.event)})))}function fc(e){return{placed:e.filter(e=>!e.hidden).map(e=>({...e.event,x0Pct:e.x0,x1Pct:e.x1,contentX1Pct:e.contentX1,contentEndMin:e.contentEnd,depth:e.depth,raised:e.raised})),overflows:pc(e)}}function gc(e,t,n){const i={start:e.start,end:e.end};if(e.start.dateTime)return function(e,t,n){if(!e.start.dateTime||!e.end.dateTime)return[e];const i=new Date(e.start.dateTime),r=new Date(e.end.dateTime);if(Number.isNaN(i.getTime())||Number.isNaN(r.getTime())||r<i)return[];if(r.getTime()===i.getTime())return i>=t&&i<n?[{...e,start:{dateTime:i.toISOString()},end:{dateTime:r.toISOString()},_isMultiDaySegment:!1,_gridSegmentStartsEvent:!0}]:[];const a=r>n?n:r,o=[];for(let s=Jd(i<t?t:i);s<a&&s<n;s=Xd(s,1)){const t=Xd(s,1),n=i>s?i:s,a=r<t?r:t;a<=n||o.push({...e,start:{dateTime:n.toISOString()},end:{dateTime:a.toISOString()},_isMultiDaySegment:o.length>0||n>i||a<r,_gridSegmentStartsEvent:n.getTime()===i.getTime()})}return o}(e,t,n).filter(e=>void 0!==e.end.dateTime).map(e=>({...e,_gridSource:i}));if(!e.start.date||!e.end.date)return[];const r=fl(e.start.date),a=fl(e.end.date);if(gl(r)!==e.start.date||gl(a)!==e.end.date||a<=r)return[];const o=[];for(let s=r<t?Jd(t):r;s<a&&s<n;s=Xd(s,1))o.push({...e,start:{date:gl(s)},end:{date:gl(Xd(s,1))},_gridSource:i});return o}function vc(e){if(!e.start.dateTime||!e.end.dateTime)return null;const t=new Date(e.start.dateTime),n=new Date(e.end.dateTime);if(Number.isNaN(t.getTime())||Number.isNaN(n.getTime())||n<t)return null;const i=!1===e._gridSegmentStartsEvent&&t.getTime()===Jd(t).getTime()?0:Yd(t),r=Yd(n);let a=xl(t,n)>0?1440:r;return Math.floor(a)<=Math.floor(i)&&n.getTimezoneOffset()>t.getTimezoneOffset()&&(a=i+(n.getTime()-t.getTime())/6e4),{startMin:i,endMin:a}}function _c(e,t){if(t.length<1)return null;let n,i;if(e.start.date)n=fl(e.start.date),i=e.end.date?Xd(fl(e.end.date),-1):n;else{if(!e.start.dateTime||!e.end.dateTime)return null;{const t=new Date(e.start.dateTime),r=new Date(e.end.dateTime);n=Jd(t),i=Jd(r>t?new Date(r.getTime()-1):t)}}if(Number.isNaN(n.getTime())||Number.isNaN(i.getTime())||i<n)return null;const r=t.map(e=>Jd(e)),a=r.map((e,t)=>({day:e,index:t})).filter(({day:e})=>e>=n&&e<=i).map(({index:e})=>e);if(0===a.length)return null;const o=a[0],s=a[a.length-1];return{columnIndex:o,span:s-o+1,continuesBefore:n<r[o],continuesAfter:i>r[s]}}function yc(e,t){const n=[],i=new Map;e.forEach((e,t)=>{for(const n of e){const e=n._gridSource??n;let r=i.get(e);r||(r=new Map,i.set(e,r));const a=JSON.stringify(n._mergedFrom?.map(e=>e.entityId)??[]),o=r.get(a);o?o.columns.push(t):r.set(a,{event:{...n,...e},columns:[t]})}});const r=[...i.values()].flatMap(e=>[...e.values()]);for(const{event:e,columns:i}of r){const r=[];for(const e of i){const t=r[r.length-1];t&&t.last+1===e?t.last=e:r.push({first:e,last:e})}for(const{first:i,last:a}of r){const r=_c(e,t.slice(i,a+1));r&&n.push({event:e,placement:{...r,columnIndex:r.columnIndex+i}})}}return n}function wc(e,t=1/0){const n=[],i=(e,t,i)=>(n[e]??[]).every(([e,n])=>i<=e||t>=n);return e.map(({start:e,end:r,rows:a=1})=>{let o=0;for(;Array.from({length:a},(e,t)=>o+t).some(t=>!i(t,e,r));)o++;if(o+a>t)return-1;for(let t=o;t<o+a;t++){for(;n.length<=t;)n.push([]);n[t].push([e,r])}return o})}const bc=new WeakMap;let xc=0;function kc(){return xc}const $c=new Map;function Sc(e){let t=0;for(const n of e)t+=$c.get(n)??0;return t}function Tc(e){const t=e?.connection;return t&&"function"==typeof t.subscribeMessage?t:null}function Mc(e){let t=bc.get(e);if(t)return t;const n={connection:e,support:"unknown",unsupportedAt:0,probe:null,subscriptions:new Map,listeners:new Set};return t=n,bc.set(e,n),e.addEventListener?.("ready",()=>{"no"===n.support&&(n.support="unknown"),Cc(n,"*");for(const e of[...n.subscriptions.values()])"refused"!==e.state?(e.reconnecting=!0,clearTimeout(e.silenceTimer),e.silenceTimer=setTimeout(()=>{et(`No live update for ${e.entityId} since reconnecting`),Ec(n,e),Cc(n,e.entityId)},3e4)):(Ec(n,e),Cc(n,e.entityId))}),n}function Dc(e,t){return`${e}|${t.start.toISOString()}|${t.end.toISOString()}`}function Cc(e,t){for(const n of[...e.listeners])n(t)}function Ac(e){const t=[...e.waiters];e.waiters.clear();for(const e of t)e()}function Ec(e,t){t.closed||(t.closed=!0,clearTimeout(t.closeTimer),clearTimeout(t.silenceTimer),clearTimeout(t.stateTimer),e.subscriptions.get(t.key)===t&&e.subscriptions.delete(t.key),!1===e.connection.connected||t.reconnecting||t.unsubscribe.then(e=>e?.()),Ac(t))}function Pc(e,t){t.closed||(t.state="refused",Ac(t),Cc(e,t.entityId))}function Lc(e,t,n){const i=Tc(e);if(!i)return null;const r=Mc(i);if("no"===r.support&&Date.now()-r.unsupportedAt>=18e5&&(r.support="unknown"),"no"===r.support)return null;const a=Dc(t,n);let o=r.subscriptions.get(a);if(!o){if(!1===i.connected)return null;o={key:a,entityId:t,state:"pending",events:[],fingerprint:"",version:0,raw:void 0,refs:0,closed:!1,pushedAt:0,seenState:void 0,seenAt:0,stateTimer:void 0,reconnecting:!1,closeTimer:void 0,silenceTimer:void 0,waiters:new Set,unsubscribe:Promise.resolve(null)},r.subscriptions.set(a,o),function(e,t,n,i,r){let a;const o=()=>{if(n.closed)return Promise.resolve(null);if("no"===e.support||!1===t.connected)return Pc(e,n),a?.(),Promise.resolve(null);const o=setTimeout(()=>{"pending"===n.state&&(et(`No answer to the live subscription for ${n.entityId}`),Pc(e,n)),a?.()},5e3);return t.subscribeMessage(t=>function(e,t,n,i){if(t.closed)return void setTimeout(()=>{t.unsubscribe.then(e=>e?.())},0);clearTimeout(t.silenceTimer),t.silenceTimer=void 0,t.reconnecting=!1,clearTimeout(t.stateTimer),t.stateTimer=void 0,t.pushedAt=Date.now();const r=n?.events,a="live"===t.state;let o=!1;if(Array.isArray(r)){const e=JSON.stringify(r);if("live"!==t.state||e!==t.raw){const n=r.flatMap(e=>function(e,t){if(!e||"object"!=typeof e)return null;const{start:n,end:i,all_day:r,...a}=e;if("string"!=typeof n||"string"!=typeof i)return null;const o=!0===r||void 0===r&&Ic.test(n),s=e=>o?{date:e}:{dateTime:zc(e,t)};return{...a,start:s(n),end:s(i)}}(e,i)??[]),a=jc(n);o="live"!==t.state||a!==t.fingerprint,o&&(t.version=++xc),t.state="live",t.raw=e,t.events=n,t.fingerprint=a}}else o="failed"!==t.state,t.state="failed",t.raw=void 0;o&&a&&$c.set(t.entityId,($c.get(t.entityId)??0)+1),Ac(t),o&&Cc(e,t.entityId)}(e,n,t,r),{type:"calendar/event/subscribe",entity_id:n.entityId,start:i.start.toISOString(),end:i.end.toISOString()}).then(t=>(e.support="yes",()=>{Promise.resolve().then(t).catch(()=>{})}),t=>{const i="string"==typeof t?.code?t.code:void 0;return"unknown_command"===i?(e.support="no",e.unsupportedAt=Date.now(),nt("Home Assistant cannot push calendar changes; polling instead")):i&&(e.support="yes",et(`Live updates refused for ${n.entityId}: ${i}`)),Pc(e,n),null}).finally(()=>{clearTimeout(o),a?.()})};if("unknown"!==e.support)n.unsubscribe=o();else if(e.probe)n.unsubscribe=e.probe.then(o);else{const t=new Promise(n=>{a=()=>{e.probe===t&&(e.probe=null),n()}});e.probe=t,n.unsubscribe=o()}}(r,i,o,n,e.config?.time_zone)}const s=o;s.refs+=1,clearTimeout(s.closeTimer),s.closeTimer=void 0;let l=!1;return{subscription:s,release:e=>{l||(l=!0,s.refs-=1,s.refs>0||s.closed||(e<=0?Ec(r,s):s.closeTimer=setTimeout(()=>Ec(r,s),e)))}}}function Fc(e,t,n){return Lc(e,t,n)?.release??null}function Rc(e,t,n){const i=Tc(e),r=i?bc.get(i)?.subscriptions.get(Dc(t,n)):void 0;if(r)return{state:r.state,fingerprint:r.fingerprint,version:r.version,reconnecting:r.reconnecting}}const Oc=new Map,Nc=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/,Ic=/^\d{4}-\d{2}-\d{2}$/;function zc(e,t){if(!t||!Nc.test(e))return e;const n=Date.parse(e);if(Number.isNaN(n))return e;let i=Oc.get(t);try{i||(i=new Intl.DateTimeFormat("en-US",{timeZone:t,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),Oc.set(t,i))}catch{return e}const r={};for(const{type:e,value:t}of i.formatToParts(n))r[e]=t;const a=Date.UTC(Number(r.year),Number(r.month)-1,Number(r.day),Number(r.hour),Number(r.minute),Number(r.second)),o=Math.round((a-n)/6e4);if(!Number.isFinite(o))return e;const s=o<0?"-":"+",l=e=>String(e).padStart(2,"0"),d=l(Math.floor(Math.abs(o)/60)),c=l(Math.abs(o)%60);return`${r.year}-${r.month}-${r.day}T${r.hour}:${r.minute}:${r.second}${s}${d}:${c}`}function jc(e){const t=e=>e?.date?`d${e.date}`:e?.dateTime?`t${Date.parse(e.dateTime)}`:"";return e.map(e=>{const n=e,i=Object.keys(n).filter(e=>"start"!==e&&"end"!==e&&!e.startsWith("_")).sort().flatMap(e=>{const t=n[e];return null==t||""===t?[]:[e,"string"==typeof t?t:JSON.stringify(t)]});return JSON.stringify([t(e.start),t(e.end),i])}).sort().join("\n")}const Hc=86400,Wc=/^(\d{1,2}):([0-5]\d)(?::([0-5]\d))?$/;function Bc(e,t){if(null==e)return"unset";if("string"!=typeof e)return"invalid";const n=e.trim();if(""===n)return"unset";const i=Wc.exec(n);if(!i)return"invalid";const r=Number(i[1]),a=Number(i[2]),o=i[3]?Number(i[3]):0;return r<=23?{seconds:3600*r+60*a+o}:t&&24===r&&0===a&&0===o?{seconds:Hc}:"invalid"}const qc=new Map,Uc=new Map;function Vc(e,t){if("persistent"===e){const e=Uu(t),n=function(e){const t=Uc.get(e);return t?(Uc.delete(e),Date.now()-t.entry.timestamp>=864e5?null:(Uc.set(e,t),t.writeGeneration===Kc()||t.entry.expired?t.entry:{...t.entry,expired:!0})):null}(t);return n&&(!e||n.timestamp>e.timestamp)?n:e}const n=qc.get(t);if(!n)return null;return n.writeGeneration!==Kc()||Date.now()-n.entry.timestamp>=864e5?(qc.delete(t),null):(qc.delete(t),qc.set(t,n),n.entry)}const Gc=Symbol.for("calendar-card-pro.write-generation");function Kc(){return globalThis[Gc]??0}const Yc=new Map,Jc=new Map;let Xc=0;function Zc(e,t,n,i="persistent"){const r=Nl(t.first_day_of_week,e.locale),a=Mo(t),o=function(e,t,n,i,r,a=""){const o=t.map(e=>"string"==typeof e?e:e.entity).sort().join("_");let s="";if(i)try{s=i.includes("T")?i.split("T")[0]:i}catch{s=i}const l=s?`_${s}`:"",d=Wt(s,r);return`${ve}${e}_${o}_${n}${l}${d}${a}${fe}`}(n,t.entities,a.days,a.startDate,r,a.variant),s=vt(t.days_to_show,t.start_date,r);return{cacheKey:o,firstDayOfWeek:r,window:s,signature:`${i}|${o}|${s.start.toISOString()}|${s.end.toISOString()}`,store:i}}function Qc(e,t,n,i="persistent"){const r=Zc(e,t,n,i),a=Vc(i,r.cacheKey);if(!a)return null;const o=Date.now();return{...tu(a,lu(a,o),t,r.firstDayOfWeek),due:su(a,t,r.window,o),inFlight:Yc.has(r.signature)}}async function eu(e,t,n,i="cache",r=0,a,o="persistent",s){const l=Zc(e,t,n,o);if("cache"===i){const e=Vc(o,l.cacheKey),n=Date.now();if(e&&!su(e,t,l.window,n))return nt(`Using ${e.events.length} events from cache`),tu(e,lu(e,n),t,l.firstDayOfWeek)}let d=Yc.get(l.signature);d&&!function(e,t,n){return!e.expired&&(("page"!==e.store||e.writeGeneration===Kc())&&("reload"===t?void 0!==n&&e.writeGeneration>=n:"live"!==t||e.liveChanges>=kc()))}(d,i,a)&&(d=void 0),d?nt("Joining an in-flight request for the same calendars and window"):d=function(e,t,n,i,r){const a=++Xc;Jc.set(`${n.store}|${n.cacheKey}`,a);const o={writeGeneration:Kc(),store:n.store,calendars:ru(t.entities),expired:!1,settled:new Map,watchers:new Set,load:r,liveChanges:kc()};return o.promise=async function(e,t,n,i,r,a){nt("Fetching events from API");const o=ru(t.entities),s="live"===a.load?function(e,t,n,i,r){const a=new Set,o=Vc(n.store,n.cacheKey);if(!o||o.expired)return a;for(const s of i){const i=Rc(e,s,n.window);if("live"===i?.state&&!i.reconnecting)continue;if(o.failedEntities?.includes(s)){"number"==typeof o.retryAt&&r<o.retryAt&&a.add(s);continue}const l=au(o,s);void 0!==l&&r-l<Vu(t)&&a.add(s)}return a}(e,t,n,o,Date.now()):new Set,l=t.entities.map(e=>"string"==typeof e?{entity:e,color:"var(--primary-text-color)"}:e).filter(e=>!s.has(e.entity)),{events:d,failedEntities:c}=await Bu(e,l,n.window,(e,t)=>{a.settled.set(e,t);for(const e of[...a.watchers])e()},"reload"!==a.load),u=Date.now(),h=Vc(n.store,n.cacheKey),m=new Set(c),p=new Set([...s].filter(e=>h?.failedEntities?.includes(e))),f=864e5,g={},v=[...d];for(const e of o){if(s.has(e)){const t=h?au(h,e):void 0;if(void 0===t||u-t>=f)continue;g[e]=t,v.push(...h.events.filter(t=>t._entityId===e));continue}if(!m.has(e)){g[e]=u;continue}const t=h?au(h,e):void 0;void 0===t||u-t>=f||(g[e]=t,v.push(...h.events.filter(t=>t._entityId===e)))}const _={events:v,timestamp:u,window:{start:n.window.start.toISOString(),end:n.window.end.toISOString()},lastSuccess:g};if(0===m.size&&p.size>0)_.failedEntities=o.filter(e=>p.has(e)),_.failureCount=h?.failureCount??1,_.retryAt=h?.retryAt;else if(m.size>0){for(const e of p)m.add(e);const e=(h?h.failedEntities?.length?h.failureCount??1:0:r)+1;_.failedEntities=o.filter(e=>m.has(e)),_.failureCount=e,_.retryAt=u+function(e,t){const n=Math.min(Math.max(e-1,0),20);return Math.min(6e4*2**n,Vu(t))}(e,t);const n=v.length-d.length;et(`${m.size} of ${o.length} calendar(s) failed to load (attempt ${e}); keeping ${n} previously loaded event(s), retrying in ${Math.round((_.retryAt-u)/1e3)}s`)}else 0===v.length&&(_.ttlMs=15e3,nt("No events returned; caching empty result briefly (15s)"));return a.expired&&(_.expired=!0),Jc.get(`${n.store}|${n.cacheKey}`)===i?function(e,t,n,i){if("persistent"!==e)for(qc.delete(t),qc.set(t,{entry:n,writeGeneration:i});qc.size>16;)qc.delete(qc.keys().next().value);else!function(e,t){try{nt(`Caching ${t.events.length} events`);const n=JSON.stringify(t);return localStorage.setItem(e,n),localStorage.getItem(e)===n&&null!==Uu(e)}catch(e){return Qe("Failed to cache calendar events:",e),!1}}(t,n)?function(e,t,n){for(Uc.delete(e),Uc.set(e,{entry:t,writeGeneration:n});Uc.size>16;)Uc.delete(Uc.keys().next().value)}(t,n,i):Uc.delete(t)}(n.store,n.cacheKey,_,a.writeGeneration):nt("A newer request for the same calendars has started; not caching this response"),_}(e,t,n,a,i,o).finally(()=>{Yc.get(n.signature)===o&&Yc.delete(n.signature)}),Yc.set(n.signature,o),o}(e,t,l,r,i);const c=d,u=s?()=>{const e=[...c.settled.values()].flatMap(e=>e??[]);if(0===e.length)return;const n=Date.now();s({raw:e,events:du(e,t,l.firstDayOfWeek),failedEntities:[],lastSuccess:Object.fromEntries([...c.settled].flatMap(([e,t])=>t?[[e,n]]:[])),fetchedAt:n,loadedAt:n,nextAttemptAt:n+Vu(t)})}:void 0;u&&(c.watchers.add(u),c.settled.size>0&&u());try{const e=await c.promise;return tu(e,e.events,t,l.firstDayOfWeek)}finally{u&&c.watchers.delete(u)}}function tu(e,t,n,i){return{raw:t,events:du(t,n,i),failedEntities:[...e.failedEntities??[]],lastSuccess:Object.fromEntries(ru(n.entities).flatMap(t=>{const n=au(e,t);return void 0===n?[]:[[t,n]]})),fetchedAt:e.timestamp,loadedAt:nu(e,t),nextAttemptAt:ou(e,n)}}function nu(e,t){let n=e.timestamp;for(const i of new Set(t.map(e=>e._entityId))){if(!i)continue;const t=au(e,i);void 0!==t&&t<n&&(n=t)}return n}function iu(e,t){return{window:Zc(e,t,"").window,entityIds:ru(t.entities)}}function ru(e){return[...new Set(e.map(e=>"string"==typeof e?e:e.entity))]}function au(e,t){const n=e.lastSuccess?.[t];return"number"==typeof n?n:e.lastSuccess||e.failedEntities?.includes(t)?void 0:e.timestamp}function ou(e,t){const n=e.timestamp+Vu(t);return e.failedEntities?.length?"number"==typeof e.retryAt?Math.min(e.retryAt,n):e.timestamp:n}function su(e,t,n,i){if(n&&e.window&&(e.window.start!==n.start.toISOString()||e.window.end!==n.end.toISOString()))return!0;if(e.expired)return!0;if(e.failedEntities?.length)return i>=ou(e,t);const r="number"==typeof e.ttlMs&&e.ttlMs>0?e.ttlMs:Vu(t);return i-e.timestamp>=r}function lu(e,t){return e.events.filter(n=>{if(!n._entityId)return!0;const i=au(e,n._entityId)??e.timestamp;return t-i<864e5})}function du(e,t,n){const i=xu(e,t),r=Gu(t,n),a=new Date(r);return a.setDate(a.getDate()+t.days_to_show),i.filter(e=>{if(!e.start)return!1;let t;if(e.start.dateTime)t=new Date(e.start.dateTime);else{if(!e.start.date)return!1;t=fl(e.start.date)}return t<a})}function cu(e){return{start:e.start,end:Vt(e.end)?e.end:void 0,summary:e.summary,location:e.location,description:e.description,uid:e.uid,recurrence_id:e.recurrence_id,rrule:e.rrule,status:e.status}}function uu(e){let t=0;const n=e.flatMap(e=>{if(!e||!Vt(e.start))return[];if(null!=e.end&&!Vt(e.end))return[];const n=Vt(e.end)?e.end:void 0;if([e.start.date,e.start.dateTime,n?.date,n?.dateTime,e.summary,e.location,e.description].some(e=>null!=e&&"string"!=typeof e))return[];if(e.start.dateTime){const i=Date.parse(e.start.dateTime);if(e.start.date||n?.date||!Number.isFinite(i))return[];if(n?.dateTime){const t=Date.parse(n.dateTime);if(!Number.isFinite(t))return[];if(t>=i)return[e]}return t++,[{...e,end:{dateTime:e.start.dateTime},_source:e._source??cu(e)}]}return!n||n.dateTime?[]:[e.start.date,n.date].every(e=>"string"==typeof e&&gl(fl(e))===e)&&n.date>e.start.date?[e]:[]}),i=e.length-n.length;return i>0&&et(`Ignoring ${i} malformed calendar event(s): expected matching, parseable start/end values and string text fields`),t>0&&et(`Showing ${t} timed event(s) whose end is missing or before their start at their start time`),n}function hu(e,t){const n=e.config?t.entities.indexOf(e.config):-1;if(-1!==n)return n;const i=e.config&&JSON.stringify(e.config),r=i?t.entities.findIndex(e=>"object"==typeof e&&JSON.stringify(e)===i):-1;return-1!==r?r:bu(e.entityId,t)}function mu(e,t,n){return e>=n?e:t.toDateString()===n.toDateString()||t>n?n:e}const pu=new Set;function fu(e){if("string"!=typeof e)return null;const t=Wc.exec(e.trim());if(!t)return null;const n=Number(t[1]);return n>23?null:{hours:n,minutes:Number(t[2]),seconds:t[3]?Number(t[3]):0}}function gu(e,t){const n=fu(t);if(!n){!function(e){if("number"==typeof e){const t=`number:${e}`;if(pu.has(t))return;return pu.add(t),void et(`allday_expires_at is the number ${e}, not a time. Write the time in quotes, as allday_expires_at: '${function(e){const t=e=>String(e).padStart(2,"0");return Number.isInteger(e)?e>=60&&e<1440?`${Math.floor(e/60)}:${t(e%60)}`:e>=3600&&e<86400?`${Math.floor(e/3600)}:${t(Math.floor(e/60)%60)}:${t(e%60)}`:null:null}(e)??"10:00"}'. All-day events last until midnight.`)}if("string"!=typeof e||""===e.trim())return;const t=e.trim();pu.has(t)||(pu.add(t),et(`Invalid allday_expires_at value "${t}" — expected a time such as 10:00`))}(t);const n=new Date(e);return n.setDate(n.getDate()+1),n.setHours(0,0,0,0),n}const i=new Date(e);return i.setHours(n.hours,n.minutes,n.seconds,0),i}function vu(e,t,n){const i=new Set;for(const r of t){const t={...e,_entityId:r.entityId,_matchedConfig:r.config};if(!(Iu(r.entityId,"show_location",n,t)??n.show_location))continue;const a=Jl(Iu(r.entityId,"replace_field",n,t),Iu(r.entityId,"replace_pattern",n,t),Iu(r.entityId,"replace_with",n,t)),o=Xl(cl(r.location,n.remove_location_country),a,"location").text.trim();o&&i.add(o)}return[...i].join(" · ")}function _u(e,t){return void 0!==e.start.dateTime&&!0===(Iu(e._entityId,"multiday_banners",t,e)??t.multiday_banners)&&null!==kl(e.start,e.end)}function yu(e,t){const n=e=>_u(e,t);if(!t.filter_duplicates)return new Set(e.filter(n));const i=Eu(t.filter_duplicates),r=new Map,a=new Map;for(const n of e){const e=Pu(n,i);r.set(n,e);const o=a.get(e);(!o||bu(n._entityId,t)<bu(o._entityId,t))&&a.set(e,n)}return new Set(e.filter(e=>n(a.get(r.get(e)))))}function wu(e,t,n,i,r="list",a){const o=qa(t,r),s=uu(e),l=o.show_empty_days,d=n&&Ha(r),c=!d&&Ha(r),u=oa(o,r),h=(e,t)=>u?t.timestamp-e.timestamp:e.timestamp-t.timestamp,m="never"===function(e){switch(e){case"grid":case"month":return"never";case"column":case"list":return"inherit"}}(r),p=Boolean(o.show_progress_bar)&&!m,f=Gu(o,Nl(o.first_day_of_week,a?.locale)),g=new Date(f),v=new Date(g);v.setHours(23,59,59,999);const _=new Date(g);_.setDate(_.getDate()+o.days_to_show);const y=new Map,w=new Map,b=Eu(o.filter_duplicates),x=m?yu(s,o):void 0,k=s.flatMap(e=>{const t=m?gc(e,g,_):function(e,t){const n=[];for(const i of e){if(!$u(i,t)){n.push(i);continue}if(!ku(i)){n.push(i);continue}const e=Tu(i);n.push(...e)}return n}([e],o),n=x?.has(e)?t.map(e=>({...e,_gridBanner:!0})):t;if(o.filter_duplicates){const t=Pu(e,b);n.forEach(e=>y.set(e,t))}return n}),$=new Date,S=k.filter(e=>{if(!e?.start||!e?.end)return!1;const t=!e.start.dateTime;let n,i;if(t){if(n=e.start.date?fl(e.start.date):null,i=e.end.date?fl(e.end.date):null,i){const e=new Date(i);e.setDate(e.getDate()-1),i=e}}else n=e.start.dateTime?new Date(e.start.dateTime):null,i=e.end.dateTime?new Date(e.end.dateTime):null;if(!n||!i)return!1;if(n>=_)return!1;if(!(n>=g&&n<=v||n>v||(t?i>=g:i>g)))return!1;const r=e._pastAsWhole?e._sourceEnd:void 0;if(!o.show_past_events&&r?.dateTime){if(new Date(r.dateTime)<$)return!1}else if(!o.show_past_events){const n=e._gridBanner&&e._gridSource?.end.dateTime?new Date(e._gridSource.end.dateTime):i;if(!t&&n<$)return!1;const a=e._splitFromTimedEvent?void 0:Iu(e._entityId,"allday_expires_at",o,e),s=e._gridSource?.end.date??r?.date,l=s?Xd(fl(s),-1):i;if(t&&$>=gu(l,a))return!1}const s=function(e){const t=e?.days_of_week;return"weekdays"===t||"weekends"===t?t:void 0}(e._matchedConfig);return!(s&&!function(e,t,n){return bl(e,n)===("weekends"===t)}(mu(n,i,g),s,a)||(o.filter_duplicates&&w.set(e,gl(mu(n,i,g))),0))}),T=new Map;if(o.filter_duplicates&&!m)for(const e of S){const t=y.get(e),n=T.get(t);(!n||bu(e._entityId,o)<bu(n._entityId,o))&&T.set(t,e)}const M=function(e,t,n,i=Pu){if(!n||e.length<2)return e;const r=new Set,a=new Set,o=new Map,s=t.filter_duplicates===$e,l=new Map,d=new Map;for(const n of t.entities){const t="string"==typeof n?n:n.entity;for(const n of e){if(n._entityId!==t)continue;const e=i(n),c=`${e}\n${t}`;d.set(c,Math.min(d.get(c)??1/0,n._arrival??1/0));const u=o.get(e);u?u.some(e=>e.entityId===t)||u.push({entityId:t,config:n._matchedConfig}):o.set(e,[{entityId:t,config:n._matchedConfig}]);const h=n.location??"",m=h.trim();if(s&&m){const i={entityId:t,config:n._matchedConfig,location:h},r=l.get(e);r?r.some(e=>e.entityId===t&&e.location.trim()===m)||r.push(i):l.set(e,[i])}r.has(e)||(r.add(e),a.add(n))}}for(const e of l.values()){if(e.length<2)continue;const n=new Map(e.map(e=>[e,hu(e,t)]));e.sort((e,t)=>n.get(e)-n.get(t))}const c=[];for(const t of e){const e=i(t);if(!a.has(t)&&r.has(e))continue;const n=o.get(e),s=n&&n.length>1?{_mergedFrom:n}:void 0,u=l.get(e),h=void 0!==u&&(u.length>1||u[0].location.trim()!==(t.location??"").trim())?{_mergedLocations:u}:void 0,m=d.get(`${e}\n${t._entityId}`)??1/0,p=m<(t._arrival??1/0)?{_arrival:m}:void 0;c.push(s||h||p?{...t,...s,...h,...p}:t)}return c}(S,o,Boolean(o.filter_duplicates),e=>{const t=y.get(e),n=T.get(t),i=void 0!==n&&!n._isMultiDaySegment;return JSON.stringify([t,i?null:w.get(e)])}),D={};M.length>0&&M.forEach(e=>{let t,n;if(e.start.dateTime)t=e.start.dateTime?new Date(e.start.dateTime):null,n=e.end.dateTime?new Date(e.end.dateTime):null;else if(t=e.start.date?fl(e.start.date):null,n=e.end.date?fl(e.end.date):null,n){const e=new Date(n);e.setDate(e.getDate()-1),n=e}if(!t||!n)return;const a=mu(t,n,g),s=gl(a),l=Xs(i);D[s]||(D[s]={weekday:l.daysOfWeek[a.getDay()],day:a.getDate(),month:l.months[a.getMonth()],timestamp:a.getTime(),events:[]});const d=function(e){const t=za[e]?.pinned;return!!t&&Object.prototype.hasOwnProperty.call(t,"show_description")}(r)?o.show_description:Iu(e._entityId,"show_description",o,e)??o.show_description,c=e.description||"",u=function(e){return e.length>0&&/year/i.test(e)}(c),h=d||u?ml(c):"",m=u?function(e){const t=Id.exec(e);return t?Number(t[1]):null}(h):null,f=e._gridSource?.start??e._sourceStart,v=f?.dateTime?new Date(f.dateTime):f?.date?fl(f.date):t,_=null===m?null:function(e,t){const n=e-t;return n>=1?n:null}(v.getFullYear(),m),y=e.summary||"",w=Jl(Iu(e._entityId,"replace_field",o,e),Iu(e._entityId,"replace_pattern",o,e),Iu(e._entityId,"replace_with",o,e)),b=Xl(y,w,"title"),x=b.replacedWholeField||""!==y.trim()&&""===b.text.trim(),k=Zl(e)?Ql(e,e._matchedConfig,i):null,$=Iu(e._entityId,"show_location",o,e)??o.show_location;D[s].events.push({summary:k?k.title:null===_||x?b.text:Hd(b.text,_),location:k?"":e._mergedLocations?vu(e,e._mergedLocations,o):$?Xl(cl(e.location||"",o.remove_location_country),w,"location").text:"",description:!d||k?"":Xl(null===m?h:jd(h),w,"description").text,start:e.start,end:e.end,_entityId:e._entityId,_entityLabel:Fu(e._entityId,o,e),_matchedConfig:e._matchedConfig,_mergedFrom:e._mergedFrom,_mergedLocations:e._mergedLocations,_source:e._source,_isEmptyDay:e._isEmptyDay,_isCustomEmptyText:e._isCustomEmptyText,_isMultiDaySegment:e._isMultiDaySegment,_sourceStart:e._sourceStart,_sourceEnd:e._sourceEnd,_splitFromTimedEvent:e._splitFromTimedEvent,_arrival:e._arrival,_dayOfEvent:p?Wu(e,a)??void 0:void 0,_gridSegmentStartsEvent:e._gridSegmentStartsEvent,_gridSource:e._gridSource,_gridBanner:e._gridBanner,_privateTitle:k?.locked.title||void 0})});const C=Nl(o.first_day_of_week,a?.locale);Object.values(D).forEach(e=>{const t=new Date(e.timestamp);e.weekNumber=Ku(t,o,C),e.monthNumber=t.getMonth()});const A=o.entities.map(e=>"string"==typeof e?e:e.entity),E=new Set(A.filter((e,t)=>A.indexOf(e)!==t));Object.values(D).forEach(e=>{E.forEach(t=>{const n=e.events.flatMap((e,n)=>e._entityId===t?[n]:[]),i=n.map(t=>e.events[t]).sort((e,t)=>(e._arrival??0)-(t._arrival??0));n.forEach((t,n)=>e.events[t]=i[n])}),e.events.sort((e,t)=>{const n=!e.start.dateTime,i=!t.start.dateTime;if(n&&!i)return-1;if(!n&&i)return 1;let r,a;if(r=n&&e.start.date?fl(e.start.date).getTime():e.start.dateTime?new Date(e.start.dateTime).getTime():0,a=i&&t.start.date?fl(t.start.date).getTime():t.start.dateTime?new Date(t.start.dateTime).getTime():0,n&&i&&r===a){const n=bu(e._entityId,o),i=bu(t._entityId,o);return n!==i?n-i:(e.summary||"").localeCompare(t.summary||"",void 0,{sensitivity:"base"})}return r-a}),u&&e.events.reverse()});const P=c?Math.min(o.compact_days_to_show||o.days_to_show,o.days_to_show):o.days_to_show;let L,F=Object.values(D).sort(h);if(c){const e=new Map;for(const t of F){const n=[];for(const i of t.events){if(i._isEmptyDay){n.push(i);continue}const t=i._entityId,r=i._matchedConfig;let a=-1;r?a=o.entities.findIndex(e=>"object"==typeof e&&e===r):t&&(a=o.entities.findIndex(e=>"string"==typeof e&&e===t));const s=-1!==a?`${t}__${a}`:t||"",l=r?.compact_events_to_show;if("number"!=typeof l||!Number.isFinite(l)){n.push(i);continue}const d=e.get(s)||0;d<l&&(n.push(i),e.set(s,d+1))}t.events=n}}const R=aa("skip_first_events",r)?Math.floor(o.skip_first_events??0):0;if(R>0){let e,t=R;if(F=F.filter(n=>0===t||(n.events.length>t?(n.events=n.events.slice(t),t=0,e=n,!0):(t-=n.events.length,n.events.length>0&&(e=n),n.events=[],!1))),e){const t=new Date(e.timestamp),n=e.events.length>0?0:u?-1:1;L=new Date(t.getFullYear(),t.getMonth(),t.getDate()+n)}}if(F=F.slice(0,P||3),d||l||(F=F.filter(e=>e.events.length>0&&!(1===e.events.length&&e.events[0]._isEmptyDay))),c){const e=o.compact_events_to_show;if("number"==typeof e&&Number.isFinite(e)){let t=[],n=0;if(o.compact_events_complete_days){const i=new Set;for(const t of F)if((1!==t.events.length||!t.events[0]._isEmptyDay)&&n<e&&t.events.length>0){const r=Math.min(t.events.length,e-n);r>0&&(i.add(gl(new Date(t.timestamp))),n+=r)}t=F.filter(e=>{const t=gl(new Date(e.timestamp));return i.has(t)})}else{t=[];for(const i of F){if(n>=e&&(1!==i.events.length||!i.events[0]._isEmptyDay))break;if(1===i.events.length&&i.events[0]._isEmptyDay){t.push(i);continue}const r=e-n;if(r>0&&i.events.length>0){const e={...i,events:i.events.slice(0,r)};t.push(e),n+=e.events.length}}}F=t}}let O;if(o.show_empty_today&&!l){const e=new Date($.getFullYear(),$.getMonth(),$.getDate()),t=xl(g,e),n=Boolean(D[gl(e)]),i=void 0!==L&&(u?e>L:e<L);t>=0&&t<o.days_to_show&&!n&&!i&&(O=e)}const N=F.length;if(l||0===F.length||O){const e=Xs(i),t=o.empty_day_text,n=Boolean(t),r=t||e.noEvents,a=(e,t=0)=>new Date(e.getFullYear(),e.getMonth(),e.getDate()+t),s=a(f),m=a(f,o.days_to_show-1),p=L?new Date(Math.min(Math.max(L.getTime(),s.getTime()),m.getTime())):u?m:s;let g;if(d)g=P;else if(0===F.length)g=l?P:1;else if(c&&o.compact_events_to_show){const e=F.map(e=>e.timestamp),t=new Date(u?Math.min(...e):Math.max(...e));g=Math.abs(xl(p,t))+1}else g=P;const v=a(p,(u?-1:1)*(g-1));let _=u?v:p,y=u?p:v;_<s&&(_=s),y>m&&(y=m),O&&(_=new Date(O),y=new Date(O));const w=new Set(F.map(e=>gl(new Date(e.timestamp)))),b=[...F],x=xl(_,y);for(let t=0;t<=x;t++){const i=new Date(_);i.setDate(_.getDate()+t);const a=gl(i);if(!w.has(a)){const t=Ku(i,o,C),s={weekday:e.daysOfWeek[i.getDay()],day:i.getDate(),month:e.months[i.getMonth()],timestamp:i.getTime(),events:[{summary:r,start:{date:a},end:{date:a},_entityId:"_empty_day_",_isEmptyDay:!0,_isCustomEmptyText:n,location:""}],weekNumber:t,monthNumber:i.getMonth()};b.push(s)}}b.sort(h),F=b}const I=O&&F.length>N?1:0;return F.slice(0,P+I)}function bu(e,t){if(!e)return Number.MAX_SAFE_INTEGER;const n=t.entities.findIndex(t=>"string"==typeof t?t===e:t.entity===e);return-1!==n?n:Number.MAX_SAFE_INTEGER}function xu(e,t){const n=[],i=uu(e),r=new Map(i.map((e,t)=>[e,t]));return t.entities.forEach(e=>{const a="string"==typeof e?e:e.entity,o=i.filter(e=>e._entityId===a);if(0===o.length)return;const s=function(e,t,n){if("string"==typeof t)return Du(e,Mu(void 0,n));let i=Du(e,Mu(t,n));const r=function(e){const t=function(e,t){const n=Bc(e,!1),i=Bc(t,!0),r=[];if("invalid"===n&&r.push({kind:"invalid",key:"starts_after",value:e}),"invalid"===i&&r.push({kind:"invalid",key:"starts_before",value:t}),r.length>0)return{problems:r};const a="object"==typeof n?n.seconds:0,o="object"==typeof i&&0!==i.seconds?i.seconds:Hc;return 0===a&&o===Hc?{problems:r}:a===o?{problems:[{kind:"equal",value:String(e).trim()}]}:{window:{from:a,until:o},problems:r}}(e.starts_after,e.starts_before);for(const n of t.problems){const t="equal"===n.kind?n.value:"string"==typeof n.value?`"${n.value}"`:String(n.value),i=`${e.entity}|${n.kind}|${"invalid"===n.kind?n.key:""}|${t}`;Au.has(i)||(Au.add(i),"equal"===n.kind?et(`${e.entity}: starts_after and starts_before are both ${t}, which leaves no hours out. Set two different times to narrow the calendar.`):"number"==typeof n.value?et(`${e.entity}: ${n.key} is the number ${t}, not a time. Write the time in quotes, as ${n.key}: '16:00'. The calendar's hours are not narrowed.`):et(`${e.entity}: invalid ${n.key} value ${t}, expected a time such as 16:00${"starts_before"===n.key?" or 24:00":""}. The calendar's hours are not narrowed.`))}return t.window}(t);r&&(i=i.filter(e=>!e.start.dateTime||function(e,t){const n=3600*e.getHours()+60*e.getMinutes()+e.getSeconds();return t.from<t.until?n>=t.from&&n<t.until:n>=t.from||n<t.until}(new Date(e.start.dateTime),r)));const a=t.filter_field;if(t.allowlist)try{const e=new RegExp(t.allowlist,"i");i=i.filter(t=>{const n=Cu(t,a);return Boolean(n&&e.test(n))})}catch(e){et(`Invalid allowlist pattern: ${t.allowlist}`,e)}if(t.blocklist)try{const e=new RegExp(t.blocklist,"i");i=i.filter(t=>{const n=Cu(t,a);return!(n&&e.test(n))})}catch(e){et(`Invalid blocklist pattern: ${t.blocklist}`,e)}return i}(o,e,t),l=s.map(n=>{const i={...n,_source:n._source??cu(n),_matchedConfig:"object"==typeof e?e:void 0,_arrival:r.get(n)};return i._entityLabel=Fu(a,t,i),i});n.push(...l)}),it(`Processed ${n.length} events after filtering`),n}function ku(e){if(!e.start||!e.end)return!1;if(e.start.date&&e.end.date){const t=fl(e.start.date),n=fl(e.end.date);return n.setDate(n.getDate()-1),t.toDateString()!==n.toDateString()}if(e.start.dateTime&&e.end.dateTime){const t=new Date(e.start.dateTime),n=new Date(e.end.dateTime);return t.toDateString()!==n.toDateString()}return!1}function $u(e,t){return e._entityId&&e._matchedConfig&&void 0!==e._matchedConfig.split_multiday_events?e._matchedConfig.split_multiday_events:t.split_multiday_events}function Su(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}function Tu(e){const t=[],n=e._sourceStart??e.start,i=e._sourceEnd??e.end;if(e.start.date&&e.end.date){const r=fl(e.start.date),a=fl(e.end.date);a.setDate(a.getDate()-1);const o=Su(a);for(let a=new Date(r);Su(a)<=o;a.setDate(a.getDate()+1)){const r=Su(a),o=new Date(a);o.setDate(o.getDate()+1);const s=Su(o),l={...e,start:{date:r},end:{date:s},_isMultiDaySegment:!0,_sourceStart:n,_sourceEnd:i};t.push(l)}}else if(e.start.dateTime&&e.end.dateTime){const r=new Date(e.start.dateTime),a=new Date(e.end.dateTime),o=new Date(r);if(o.setHours(23,59,59,999),new Date(o.getTime()+1)<a){const s={...e,start:{dateTime:r.toISOString()},end:{dateTime:o.toISOString()},_isMultiDaySegment:!0,_sourceStart:n,_sourceEnd:i,_splitFromTimedEvent:!0};t.push(s);const l=new Date(r);l.setDate(l.getDate()+1),l.setHours(0,0,0,0);const d=new Date(a);d.setHours(0,0,0,0);for(let r=new Date(l);r<d;r.setDate(r.getDate()+1)){const a=Su(r),o=new Date(r);o.setDate(o.getDate()+1);const s=Su(o),l={...e,start:{date:a},end:{date:s},_isMultiDaySegment:!0,_sourceStart:n,_sourceEnd:i,_splitFromTimedEvent:!0};t.push(l)}if(a>d){const r={...e,start:{dateTime:d.toISOString()},end:{dateTime:a.toISOString()},_isMultiDaySegment:!0,_sourceStart:n,_sourceEnd:i,_splitFromTimedEvent:!0};t.push(r)}}else t.push({...e})}return t}function Mu(e,t){const n=e?.event_type??t.event_type;return"timed"===n||"all_day"===n?n:"all"}function Du(e,t){if("all"===t)return[...e];const n="all_day"===t;return e.filter(e=>!e.start.dateTime===n)}function Cu(e,t){return"location"===t?e.location:"description"===t?e.description:e.summary}const Au=new Set;function Eu(e){return"ignore_location"===e||e===$e}function Pu(e,t=!1){const n=e.summary||"",i=t?"":e.location||"";let r="";return r=e.start.dateTime?`${new Date(e.start.dateTime).getTime()}|${e.end.dateTime?new Date(e.end.dateTime).getTime():0}`:`${e.start.date||""}|${e.end.date||""}`,JSON.stringify([n,r,i,Zl(e)])}function Lu(e,t,n,i,r){if(!e)return"var(--calendar-card-line-color-vertical)";let a;a=i&&i._matchedConfig?i._matchedConfig:t.entities.find(t=>"string"==typeof t&&t===e||"object"==typeof t&&t.entity===e);const o=function(e,t,n,i){const r=i?.get(e),a="string"==typeof n?void 0:n?.accent_color;if(kr(a)){if(r)return r}else if(a)return a;return kr(t.accent_color)?r??mi.accent_color:t.accent_color||mi.accent_color}(e,t,a,r);return void 0===n||0===n||isNaN(n)?o:Nt(o,n)}function Fu(e,t,n){if(!e)return;if(n&&n._matchedConfig)return n._matchedConfig.label;const i=t.entities.find(t=>"string"==typeof t&&t===e||"object"==typeof t&&t.entity===e);return i&&"string"!=typeof i?i.label:void 0}function Ru(e,t,n,i){const r=Fu(e,t,n),a=Ge(r),o=Ye(r);if(!a&&!o)return r;const s=Iu(e,"label_type",t,n);return jt(s)&&s!==(a?"icon":"image")?r:o?function(e,t){if(!e)return;const n=t?.states?.[e]?.attributes?.entity_picture;return"string"==typeof n&&""!==n?n:void 0}(r,i):function(e,t){if(!e)return;const n=t?.states?.[e]?.attributes?.icon;return"string"==typeof n&&""!==n?n:void 0}(e,i)}function Ou(e,t,n,i){const r=Fu(e,t,n);if(!r||!Ye(r))return"";const a=i?.states?.[r]?.attributes?.friendly_name;return"string"==typeof a?a.trim():""}function Nu(e,t,n){const i=e._mergedFrom;if(!i||i.length<2)return;const r=[],a=new Set;for(const o of i){const i={...e,_entityId:o.entityId,_matchedConfig:o.config},s=Ru(o.entityId,t,i,n);s&&(a.has(s)||(a.add(s),r.push({value:s,iconColor:Iu(o.entityId,"label_icon_color",t,i),type:Iu(o.entityId,"label_type",t,i),alt:Ou(o.entityId,t,i,n)})))}return r.length>1?r:void 0}function Iu(e,t,n,i){if(!e)return;if(i&&i._matchedConfig)return i._matchedConfig[t];const r=n.entities.find(t=>"string"==typeof t&&t===e||"object"==typeof t&&t.entity===e);return r&&"string"!=typeof r?r[t]:void 0}function zu(e){if(!e||e._isEmptyDay)return!1;const t=new Date;if(!e.start.dateTime)return!1;const n=e.start.dateTime?new Date(e.start.dateTime):null,i=e.end.dateTime?new Date(e.end.dateTime):null;return!(!n||!i)&&t>=n&&t<i}function ju(e){const t=function(e){return e._isEmptyDay?null:e.start.dateTime&&e.end.dateTime?[new Date(e.start.dateTime),new Date(e.end.dateTime)]:e._splitFromTimedEvent&&e.start.date&&e.end.date?[fl(e.start.date),fl(e.end.date)]:null}(e);if(!t)return null;const n=new Date;if(!(n>=t[0]&&n<t[1]))return null;const i=function(e){const t=e._gridSource??(e._splitFromTimedEvent?{start:e._sourceStart,end:e._sourceEnd}:null),n=t?.start?.dateTime,i=t?.end?.dateTime;return n&&i?[new Date(n),new Date(i)]:null}(e),[r,a]=i&&i[1].getTime()>i[0].getTime()?i:t,o=a.getTime()-r.getTime(),s=n.getTime()-r.getTime();return Math.min(100,Math.max(0,Math.floor(s/o*100)))}function Hu(e){return null!==kl(e._sourceStart??e.start,e._sourceEnd??e.end)}function Wu(e,t){const n=kl(e._sourceStart??e.start,e._sourceEnd??e.end);if(!n)return null;const i=xl(n.first,t)+1;return{day:i>=1&&i<=n.days?i:null,days:n.days}}async function Bu(e,t,n,i,r=!1){const a=ru(t),o=`start=${n.start.toISOString()}&end=${n.end.toISOString()}`,s=r?function(e,t,n){const i=Tc(e);if(!i)return null;const r=Mc(i);for(const e of t){const t=r.subscriptions.get(Dc(e,n));"refused"===t?.state&&Ec(r,t)}const a=t.flatMap(t=>Fc(e,t,n)??[]);return 0===a.length?null:e=>{for(const t of a)t(e)}}(e,a,n):null,l=await Promise.all(a.map(async t=>{const i=`calendars/${t}?${o}`,r=Date.now()+Te;try{const a=s?await async function(e,t,n){const i=Lc(e,t,n);if(!i)return;const{subscription:r,release:a}=i;try{return("pending"===r.state||r.reconnecting)&&await new Promise(e=>{const t=setTimeout(n,25e3);function n(){clearTimeout(t),r.waiters.delete(n),e()}r.waiters.add(n)}),"live"!==r.state||r.closed||r.reconnecting?void 0:r.events}finally{a(5e3)}}(e,t,n):void 0;nt(a?`Using live events for ${t}`:`Fetching calendar events with path: ${i}`);const o=a??await function(e,t,n){let i;const r=new Promise((e,r)=>{i=setTimeout(()=>r(new Error(n)),t)});return Promise.race([e,r]).finally(()=>clearTimeout(i))}(e.callApi("GET",i),Math.max(5e3,r-Date.now()),`${t} did not answer within 30s`);return o&&Array.isArray(o)?{entityId:t,events:o.map(e=>({...e,_entityId:t}))}:(et(`Invalid response for ${t}`),{entityId:t,events:null})}catch(e){return Qe(`Failed to fetch events for ${t}:`,e),{entityId:t,events:null}}}).map(e=>e.then(e=>(i?.(e.entityId,e.events),e)))).finally(()=>s?.(5e3)),d=[],c=[];for(const e of l)e.events?d.push(...e.events):c.push(e.entityId);return{events:d,failedEntities:c}}function qu(e){return[...new Set([...Object.keys(e.lastSuccess??{}),...e.failedEntities??[],...e.events.flatMap(e=>e._entityId?[e._entityId]:[])])]}function Uu(e){try{const t=localStorage.getItem(e);if(!t)return null;const n=JSON.parse(t);if(!function(e){if("object"!=typeof e||null===e||Array.isArray(e))return!1;const t=e;return!("number"!=typeof t.timestamp||!Number.isFinite(t.timestamp))&&!!Array.isArray(t.events)&&t.events.every(e=>"object"==typeof e&&null!==e&&!Array.isArray(e))}(n))return localStorage.removeItem(e),et(`Malformed cache entry removed for ${e}`),null;const i=864e5;return Date.now()-n.timestamp>=i?(localStorage.removeItem(e),nt(`Cache older than 24h removed for ${e}`),null):n}catch(t){et("Cache error:",t);try{localStorage.removeItem(e)}catch{}return null}}function Vu(e){return 60*(e?.refresh_interval||30)*1e3}function Gu(e,t){if(e.start_date&&""!==String(e.start_date).trim())return vt(e.days_to_show,e.start_date,t).start;const n=new Date;return new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Ku(e,t,n){if("iso"===Il(t.show_week_numbers)){const t=(e.getDay()-n+7)%7;return Fl(new Date(e.getFullYear(),e.getMonth(),e.getDate()-t+3,12))}return function(e,t,n){const i=Il(t);return"iso"===i?Fl(e):"simple"===i?function(e,t=0){const n=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),i=Date.UTC(e.getFullYear(),0,1),r=Math.round((n-i)/864e5),a=(new Date(i).getUTCDay()-t+7)%7;return Math.ceil((r+a+1)/7)}(e,n):null}(e,t.show_week_numbers,n)}function Yu(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function Ju(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function Xu(e){return gl(e)}function Zu(e){return fl(e)}function Qu(e,t){const n=Math.max(1,Math.floor(e)||1);return t>0&&t<n?t:n}function eh(e,t=!1){return t?Ju(e.start,e.days-1):Yu(e.start)}function th(e,t){const n=xl(e.start,Yu(t));return n>=0&&n<e.days}function nh(e){const t=Math.max(1,Math.floor(e.days)),n=new Map;for(let i=0;i<t;i++){const t=Ju(e.start,i),r=12*t.getFullYear()+t.getMonth();n.set(r,(n.get(r)??0)+1)}const i=Math.max(...n.values()),r=Ju(e.start,Math.floor(t/2)),a=12*r.getFullYear()+r.getMonth(),o=n.get(a)===i?a:[...n].find(([,e])=>e===i)[0];return new Date(Math.floor(o/12),o%12,1)}const ih=Pt();function rh(e,t,n){const i=`${e}|${t?"y":""}|${n?"w":""}`;let r=ih.get(i);return r||(r=new Intl.DateTimeFormat(Dt(e),{...n?{weekday:"short"}:{},month:"short",day:"numeric",...t?{year:"numeric"}:{},timeZone:"UTC"}),ih.set(i,r)),r}function ah(e,t,n){const i=Yu(e.start),r=Ju(i,Math.max(1,e.days)-1),a=n.getFullYear();if(e.days<=1)return rh(t,i.getFullYear()!==a,!0).format(Ft(i));if(i.getFullYear()===r.getFullYear()){const e=rh(t,i.getFullYear()!==a,!1),n=sh(rh(t,!1,!1));return"function"==typeof e.formatRange?e.formatRange(Ft(i),Ft(r)):`${e.format(Ft(i))}${n}${e.format(Ft(r))}`}const o=r.getFullYear()!==function(e){const t=e.getFullYear();return e.getTime()-new Date(t,0,1).getTime()<=new Date(t+1,0,1).getTime()-e.getTime()?t:t+1}(n),s=rh(t,!1,!1),l=rh(t,o,!1);return`${s.format(Ft(i))}${sh(s)}${l.format(Ft(r))}`}const oh=new WeakMap;function sh(e){let t=oh.get(e);if(void 0===t){const n="function"==typeof e.formatRangeToParts?e.formatRangeToParts(new Date(Date.UTC(2e3,0,31,12)),new Date(Date.UTC(2e3,1,1,12))):[],i=n.map(e=>e.source).lastIndexOf("startRange"),r=n.findIndex(e=>"endRange"===e.source),a=n.map(e=>e.source).lastIndexOf("endRange"),o=(e,t)=>n.slice(e,t).map(e=>e.value).join(""),s=i>=0&&r>i?o(i+1,r):"",l=a>=0?o(a+1,n.length):"";t=(l&&s.startsWith(l)?s.slice(l.length):s)||" – ",oh.set(e,t)}return t}function lh(e,t){return dh(`${e}|month|${t}`,e,{month:t,year:"numeric"})}function dh(e,t,n){let i=ih.get(e);return i||(i=new Intl.DateTimeFormat(Dt(t),{...n,timeZone:"UTC"}),ih.set(e,i)),i}const ch=/^\p{L}+/u;function uh(e,t,n="long"){const i=lh(t,n),r=Ft(e);let a=i.formatToParts(r),o=i.format(r);const s=a.findIndex(e=>"month"===e.type),l=a[s]?.value??"",d=s<0?l:function(e,t,n){if(!/\p{L}/u.test(e))return e;const i=e=>dh(`${n}|${JSON.stringify(e)}`,n,e).formatToParts(t).find(e=>"month"===e.type)?.value??"";for(const t of["long","short"]){if(e!==i({day:"numeric",month:t}))continue;const n=i({month:t});return n&&("long"===t||n!==e&&e.endsWith(n))?n:e}return e}(l,r,t),c=a.slice(0,Math.max(s,0)).reduce((e,t)=>e+t.value.length,0);if(d!==l&&o.slice(c,c+l.length)===l&&(o=o.slice(0,c)+d+o.slice(c+l.length),a=a.map((e,t)=>t===s?{...e,value:d}:e)),"month"===a[0]?.type){const e=i.resolvedOptions().locale;o=o.charAt(0).toLocaleUpperCase(e)+o.slice(1)}if(a.reduce((e,t)=>e+t.value.length,0)!==o.length)return[{text:o,month:!1}];const u=[],h=(e,t)=>{if(!e)return;const n=u[u.length-1];n&&n.month===t?n.text+=e:u.push({text:e,month:t})};let m=0;return a.forEach((e,t)=>{let n=o.slice(m,m+e.value.length);m+=e.value.length;const i=a[t-1];if("literal"===e.type&&"month"===i?.type&&/^\d+$/.test(i.value)){const e=ch.exec(n)?.[0]??"";h(e,!0),n=n.slice(e.length)}h(n,"month"===e.type)}),u}function hh(e,t,n="long"){return uh(e,t,n).map(e=>e.text).join("")}function mh(e,t,n){const i=lh(t,n).formatToParts(Ft(e)).find(e=>"month"===e.type);return void 0!==i&&/\p{L}/u.test(i.value)}const ph=Pt();function fh(e,t="long"){const n=`${e}|${t}`;let i=ph.get(n);return i||(i=Array.from({length:12},(n,i)=>uh(new Date(2e3,i,1),e,t)),ph.set(n,i)),i}function gh(e,t){return rh(t,!1,!0).format(Ft(e))}const vh=Pt();function _h(e){let t=vh.get(e);if(void 0===t){const n=new Intl.RelativeTimeFormat(Dt(e),{numeric:"auto"}),i=n.format(0,"day");t=i.charAt(0).toLocaleUpperCase(n.resolvedOptions().locale)+i.slice(1),vh.set(e,t)}return t}function yh(e,t,n,i=!1){return th(e,n)?_h(t):ah({start:eh(e,i),days:1},t,n)}function wh(e,t,n){const i=nh(e);return i.getFullYear()===n.getFullYear()&&i.getMonth()===n.getMonth()?_h(t):hh(i,t)}const bh=/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/g;function xh(e,t){const n=e.getFullYear()+t,i=e.getMonth(),r=new Date(n,i+1,0).getDate();return new Date(n,i,Math.min(e.getDate(),r))}function kh(e){const t=Yu(e),n=xh(t,-1),i=Ju(xh(t,1),1);return{start:n,end:i,days:xl(n,i),key:gl(n)}}function $h(e){if(e?.dateTime){const t=new Date(e.dateTime);return isNaN(t.getTime())?null:t}return e?.date?fl(e.date):null}function Sh(e){return JSON.stringify([e._mergedFrom?.map(e=>e.entityId)??[],e.location??""])}const Th=new Map;function Mh(e,t){return Dh(e.toLocaleLowerCase(t),t).normalize("NFD").replace(bh,"").replace(/ς/g,"σ")}function Dh(e,t){return void 0!==t&&/^tr\b/i.test(t)?e.replace(/ı/g,"i"):e}function Ch(e,t){const n=function(e){if(!Th.has(e)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{t=void 0}Th.set(e,t)}return Th.get(e)}(t);if(/^[\t\n\r\x20-\x7e]*$/.test(e))return{text:Dh(e.toLocaleLowerCase(n),n)};let i="";const r=[],a=[];for(let t=0;t<e.length;){const o=(e.codePointAt(t)??0)>65535?2:1,s=Mh(e.slice(t,t+o),n);for(let e=0;e<s.length;e+=1)r.push(t),a.push(t+o);for(let e=a.length-1;""===s&&e>=0&&a[e]===t;e-=1)a[e]=t+o;i+=s,t+=o}return{text:i,map:{from:r,to:a}}}function Ah(e,t){if(!t)return;const n=e.text.indexOf(t);if(n<0)return;const i=n+t.length-1;return e.map?[e.map.from[n],e.map.to[i]]:[n,i+1]}function Eh(e){if(e?.dateTime){const t=Date.parse(e.dateTime);return isNaN(t)?e.dateTime:new Date(t).toISOString()}return e?.date??""}function Ph(e){return Eh(e._source?.start??e._gridSource?.start??e._sourceStart??e.start)}function Lh(e){const t=e._source;if(!Zl(e))return t?.summary??e.summary??"";const n=t?.end??e._gridSource?.end??e._sourceEnd??e.end;return`private:${function(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return(t>>>0).toString(36)}(JSON.stringify([t?.summary??"",Eh(n)]))}`}function Fh(e){const t=e._source;return{entityId:e._entityId??"",uid:t?.uid||void 0,recurrenceId:t?.recurrence_id||void 0,start:Ph(e),summary:Lh(e)}}function Rh(e,t){if(e._isEmptyDay||e._entityId!==t.entityId)return!1;if(Ph(e)!==t.start)return!1;const n=e._source;return t.uid?n?.uid===t.uid&&(n?.recurrence_id||void 0)===t.recurrenceId:!n?.uid&&Lh(e)===t.summary}function Oh(e,t){return e.some(e=>Rh(e,t))?{rows:e.map(e=>Rh(e,t)?{...e,_searchRing:!0}:e),found:!0}:{rows:e,found:!1}}function Nh(e){return[...new Set(e.map(e=>"string"==typeof e?e:e.entity))]}class Ih{constructor(e,t){this._host=e,this._events=t,this._load=null,this._panel=null}get isOpen(){return null!==this._panel}prepare(e=Date.now()){const t=this._host(),n=t.hass;if(!n)return;const i=this._load;i&&this._current(i,t,e)?i.failed.size>0&&0===i.pending.size&&this._fetch(i,[...i.failed],n,t.config):this._start(t,n,e)}wordsChanged(){this._panel?.changed()}visibilityChanged(){this._panel?.changed()}calendarsChanged(e=Date.now()){const t=this._load;if(!this._panel||!t)return;const n=this._host();n.hass&&!this._current(t,n,e)&&(it("Search: a calendar changed while the panel is open; loading the year again"),this._start(n,n.hass,e),this._panel.changed())}_current(e,t,n){const i=Nh(t.config.entities);return e.window.key===kh(new Date(n)).key&&e.ids===i.join("\0")&&e.writeGeneration===Kc()&&e.liveChanges===Sc(i)&&n-e.startedAt<Vu(t.config)}_start(e,t,n){const i=Nh(e.config.entities),r={window:kh(new Date(n)),ids:i.join("\0"),startedAt:n,writeGeneration:Kc(),liveChanges:Sc(i),answered:new Map,failed:new Set,pending:new Set,version:0};this._load=r,this._rows=void 0,this._fetch(r,i,t,e.config)}_fetch(e,t,n,i){for(const n of t)e.pending.add(n),e.failed.delete(n);const r=i.entities.map(e=>"string"==typeof e?{entity:e}:e).filter(e=>t.includes(e.entity));it(`Search: loading ${t.length} calendar(s) from ${e.window.key} for ${e.window.days} days`),Bu(n,r,e.window,(t,n)=>{this._load===e&&(e.pending.delete(t),n?e.answered.set(t,n):e.failed.add(t),e.version+=1,this._panel?.changed())})}close(){this._panel?.close()}get loading(){return(this._load?.pending.size??0)>0}get failed(){const e=this._host();return[...this._load?.failed??[]].filter(t=>!e.visibility.calendars.has(t)).map(t=>e.failedNameOf(t))}find(e){const t=this._host(),n=Date.now();return function(e,t,n,i,r=200){const a=Ch(t.trim(),n).text;if(!a)return{term:t,total:0,groups:[]};const o=[],s=[];for(const t of e){const e=Ah(t.folded.title,a),n=Ah(t.folded.location,a);(e||n||t.folded.unmarked.includes(a))&&(t.end>i?o:s).push({row:t,title:e,location:n})}o.sort((e,t)=>e.row.start-t.row.start||e.row.end-t.row.end),s.sort((e,t)=>t.row.start-e.row.start||t.row.end-e.row.end);const l=[];return[...o,...s].slice(0,Math.max(0,r)).forEach((e,t)=>{const n=t>=o.length,i=l[l.length-1];i&&i.key===e.row.monthKey&&i.past===n?i.hits.push(e):l.push({key:e.row.monthKey,past:n,label:e.row.month,hits:[e]})}),{term:t,total:o.length+s.length,groups:l}}(this._rowsFor(t,n),e,t.language,n)}attach(e){return this._panel=e,()=>{this._panel===e&&(this._panel=null),this._events.gone()}}pick(e){const t=this._rows?.rows.find(t=>t.id===e);t&&this._events.picked(t)}_rowsFor(e,t){const n=this._load,i=gl(new Date(t)),r=[e.held,n,n?.version,e.config,e.viewConfig,e.view,e.language,e.hidden,e.visibility,e.today,e.hass?.locale,i,Et],a=this._rows;if(a&&a.key.every((e,t)=>e===r[t]))return a.rows;const o=n?[...n.answered.values()].flat():[],s=[...e.held.filter(e=>{return t=e._entityId,!(null!==n&&(n.answered.has(t??"")||n.failed.has(t??"")));var t}),...o.length>0?xu(o,e.config):[]].filter(t=>!e.hidden.has(t._entityId??"")&&!hi(t,e.visibility));let l=[];if(s.length>0){const r=n?.window??kh(new Date(t)),a=function(e,t,n){const i={start_date:t.key,days_to_show:t.days,show_past_events:!0,show_empty_days:!1,show_empty_today:!1,event_order:"earliest_first",skip_first_events:0},r={...e,...i},a=za[n]?.blockKey;if(a){const t=e[a];r[a]={...t&&"object"==typeof t?t:{},...i}}return r}(e.viewConfig,r,e.view),o=function(e,t,n){if("grid"!==n)return e;const i=Vd(ma(t,"start_time"),ma(t,"end_time"));return e.map(e=>({...e,events:e.events.filter(e=>{if(!e.start.dateTime||e._gridBanner)return!0;const t=vc(e);return null!==t&&Zd(t.startMin,t.endMin,i)})}))}(wu(s,a,!0,e.language,e.view,e.hass),a,e.view),d=this._describer(e,i);l=function(e){const t=new Map;for(const n of e){const e=t.get(n.id)??0;t.set(n.id,e+1),e>0&&(n.id=`${n.id}#${e}`)}return e}(function(e){const t=new WeakMap,n=new Set,i=[];for(const r of e)for(const e of r.events){if(e._isEmptyDay)continue;const a=e._gridSource?.start??e._sourceStart??e.start,o=e._gridSource?.end??e._sourceEnd??e.end,s=$h(a),l=$h(o);if(s&&l){if(e._isMultiDaySegment||e._gridSource){const d=e._source??e._gridSource;if(d){const n=t.get(d)??new Map;t.set(d,n);const c=n.get(e._matchedConfig),u=Sh(e);if(c?.has(u))continue;if(c){c.add(u),i.push({event:e,from:new Date(r.timestamp),startPoint:a,endPoint:o,start:s,end:l});continue}n.set(e._matchedConfig,new Set([u]))}else{const t=JSON.stringify([e._entityId,s.getTime(),l.getTime(),e.summary,e.location,e.description,e._mergedFrom?.map(e=>e.entityId)??[]]);if(n.has(t))continue;n.add(t)}}i.push({event:e,startPoint:a,endPoint:o,start:s,end:l})}}return i}(o).map(d))}return this._rows={key:r,rows:l},l}_describer(e,t){const n=e.language,i=new Map,r=new Map,a=new Map,o=(e,t,n)=>(e.has(t)||e.set(t,n()),e.get(t));return({event:s,from:l,startPoint:d,endPoint:c,start:u,end:h})=>{const m=s._entityId??"",p=gl(u),f=l?gl(l):p,g=s.summary??"",v=s.location??"",_=s._mergedFrom&&s._mergedFrom.length>1?s._mergedFrom:null,y=Zl(s)?null:hd(s,n);return{id:JSON.stringify([m,u.getTime(),h.getTime(),g,s._source?.uid??null,s._source?.recurrence_id??null,Sh(s)]),entityId:m,title:g,location:v,...s._privateTitle&&{privateTitle:!0},folded:{title:Ch(g,n),location:Ch(v,n),unmarked:y?Ch(`${y.location}\n${ml(y.description)}`,n).text:""},start:u.getTime(),end:h.getTime(),day:f,monthKey:p.slice(0,7),month:o(a,p.slice(0,7),()=>hh(u,n)),dayText:p===t?e.today??_h(n):gh(u,n),timeText:tl({...s,start:d,end:c},e.viewConfig,n,e.hass),color:_?e.colorOf(s):o(i,s._matchedConfig??m,()=>e.colorOf(s)),calendar:_?_.map(t=>o(r,t.entityId,()=>e.nameOf(t.entityId))).join(", "):o(r,m,()=>e.nameOf(m)),target:Fh(s)}}}}function zh(e,t,n){if(n&&!e._isEmptyDay)return{event:e,color:t}}function jh(e){const t=new Date(e),n=e=>String(e).padStart(2,"0");return`calendar-card-day-${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())}`}function Hh(e){return e?.calendarCardEventTap}function Wh(e,t){for(const n of e){if(n===t)return;const e=Hh(n);if(e)return{element:n,target:e}}}const Bh="event-link",qh=Object.freeze({kind:"covered"}),Uh=Object.freeze({kind:"columns",among:"children"}),Vh=Object.freeze({kind:"columns",among:"head",allDay:!0});function Gh(e){return{kind:"day",timestamp:e}}function Kh(e){return e?.calendarCardDaySlot}function Yh(e,t,n,i){const r=De.ADD_SLOT_MINUTES,a=i-n,o=e.height>0&&a>0?Math.min(i-1,n+Math.min(1,Math.max(0,(t-e.top)/e.height))*a):n;return Math.min(1440-r,Math.max(0,Math.floor(o/r)*r))}function Jh(e,t,n){let i;for(const r of e){const e=Kh(r);if(!e||"day"!==e.kind&&"time"!==e.kind)continue;const a=r.getBoundingClientRect();if(!(t.x<a.left||t.x>=a.right||n&&t.y<a.top)){if("day"===e.kind)return{element:r,timestamp:e.timestamp};i??={element:r,timestamp:e.timestamp}}}return i}function Xh(e,t,n,i=!1){for(const r of e){if(r===t)return;const e=Kh(r);if(!i&&("covered"===e?.kind||Hh(r)))return;if(!e||"covered"===e.kind)continue;const a=r;if("day"===e.kind)return{element:a,timestamp:e.timestamp};if("time"===e.kind){const t=a.getBoundingClientRect();return{element:a,timestamp:e.timestamp,minute:Yh(t,n.y,e.startMin,e.endMin),band:{startMin:e.startMin,endMin:e.endMin}}}const o="children"===e.among?a:a.parentElement?.parentElement?.querySelector(":scope > .grid-head");if(!o)return;const s=Jh(o.children,n,"children"===e.among);return s&&e.allDay?{...s,allDay:!0}:s}}function Zh(e,t,n){const i=n.endMin-n.startMin;if(!(i>0))return{topPct:0,heightPct:0};const r=Math.min(n.endMin,Math.max(n.startMin,e)),a=Math.min(n.endMin,Math.max(n.startMin,t));return{topPct:(r-n.startMin)/i*100,heightPct:Math.max(0,a-r)/i*100}}function Qh(e,t){let n;for(const i of e){const e=Kh(i);if(!e||"day"!==e.kind&&"time"!==e.kind)continue;const r=i.getBoundingClientRect(),a=t<r.left?r.left-t:t>=r.right?t-r.right+1:0;(!n||a<n.distance)&&(n={element:i,distance:a,slot:e})}if(!n)return;const{element:i,slot:r}=n;return"time"===r.kind?{element:i,timestamp:r.timestamp,band:{startMin:r.startMin,endMin:r.endMin}}:"day"===r.kind?{element:i,timestamp:r.timestamp}:void 0}function em(e){return e?.calendarCardDayAdd}function tm(e){return e?.calendarCardMonthCell}const nm=e=>(...t)=>({_$litDirective$:e,values:t});let im=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};const rm=nm(class extends im{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const i=!!t[e];i===this.st.has(e)||this.nt?.has(e)||(i?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return U}}),am="important",om=" !"+am,sm=nm(class extends im{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{const i=e[n];return null==i?t:t+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(e,[t]){const{style:n}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?n.removeProperty(e):n[e]=null);for(const e in t){const i=t[e];if(null!=i){this.ft.add(e);const t="string"==typeof i&&i.endsWith(om);e.includes("-")||t?n.setProperty(e,t?i.slice(0,-11):i,t?am:""):n[e]=i}}return U}}),{I:lm}=ae,dm=e=>e,cm=()=>document.createComment(""),um=(e,t,n)=>{const i=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=i.insertBefore(cm(),r),a=i.insertBefore(cm(),r);n=new lm(t,a,e,e.options)}else{const t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==r||o){let e=n._$AA;for(;e!==t;){const t=dm(e).nextSibling;dm(i).insertBefore(e,r),e=t}}}return n},hm=(e,t,n=e)=>(e._$AI(t,n),e),mm={},pm=(e,t=mm)=>e._$AH=t,fm=e=>{e._$AR(),e._$AA.remove()},gm=(e,t,n)=>{const i=new Map;for(let r=t;r<=n;r++)i.set(e[r],r);return i},vm=nm(class extends im{constructor(e){if(super(e),2!==e.type)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let i;void 0===n?n=t:void 0!==t&&(i=t);const r=[],a=[];let o=0;for(const t of e)r[o]=i?i(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:r}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,i]){const r=(e=>e._$AH)(e),{values:a,keys:o}=this.dt(t,n,i);if(!Array.isArray(r))return this.ut=o,a;const s=this.ut??=[],l=[];let d,c,u=0,h=r.length-1,m=0,p=a.length-1;for(;u<=h&&m<=p;)if(null===r[u])u++;else if(null===r[h])h--;else if(s[u]===o[m])l[m]=hm(r[u],a[m]),u++,m++;else if(s[h]===o[p])l[p]=hm(r[h],a[p]),h--,p--;else if(s[u]===o[p])l[p]=hm(r[u],a[p]),um(e,l[p+1],r[u]),u++,p--;else if(s[h]===o[m])l[m]=hm(r[h],a[m]),um(e,r[u],r[h]),h--,m++;else if(void 0===d&&(d=gm(o,m,p),c=gm(s,u,h)),d.has(s[u]))if(d.has(s[h])){const t=c.get(o[m]),n=void 0!==t?r[t]:null;if(null===n){const t=um(e,r[u]);hm(t,a[m]),l[m]=t}else l[m]=hm(n,a[m]),um(e,r[u],n),r[t]=null;m++}else fm(r[h]),h--;else fm(r[u]),u++;for(;m<=p;){const t=um(e,l[p+1]);hm(t,a[m]),l[m++]=t}for(;u<=h;){const e=r[u++];null!==e&&fm(e)}return this.ut=o,pm(e,l),U}});var _m="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",ym="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",wm="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z",bm="M7,10L12,15L17,10H7Z",xm="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",km="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z";function $m(e){return B`<ha-icon
    icon="mdi:lock"
    class="label-icon private-lock"
    style=${e?`color: ${e};`:V}
    aria-hidden="true"
  ></ha-icon>`}function Sm(){return B`<svg class="private-lock" viewBox="0 0 24 24" aria-hidden="true"><path d=${"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"}></path></svg>`}const Tm=/<a\b([^<>]*)>((?:(?!<a\b)[\s\S])*?)<\/a\s*>/gi,Mm=/\bhref\s*=\s*(?:"([^"<>]*)"|'([^'<>]*)'|([^\s<>]+))/i,Dm=/^https?:\/\/[^\s<>"']+$/i,Cm=/\bhttps?:\/\/[^\s<>"']+/gi,Am=/[.,;:!?'"]/,Em=/<br\s*\/?>|<\/(?:p|div|li|h[1-6]|tr)\s*>/gi,Pm=[57344,63743];function Lm(e,t){return e.split(t).length-1}function Fm(e){const t=Lm(e,"(");let n=Lm(e,")"),i=e.length;for(;;){const r=e.charAt(i-1);if(Am.test(r))i--;else{if(!(")"===r&&n>t))return e.slice(0,i);n--,i--}}}function Rm(e){const t=[];let n=0;for(const i of e.matchAll(Cm)){const r=Fm(i[0]),a=i.index??0;a>n&&t.push({text:e.slice(n,a)}),t.push({text:r,href:r}),n=a+r.length}return n<e.length&&t.push({text:e.slice(n)}),t}function Om(e,t="",n=""){const i=[];return{marked:e.replace(Tm,(e,r,a)=>{const o=Mm.exec(r);return o?(i.push({href:o[1]??o[2]??o[3]??"",words:a}),`${t}${i.length-1}${n}`):e}),anchors:i}}function Nm(e){const t=function(e){const t=e.includes("&#")?e+ml(e):e,n=new Set;for(let e=0;e<t.length;e++){const i=t.charCodeAt(e);i>=Pm[0]&&i<=Pm[1]&&n.add(i)}const i=[];for(let e=Pm[0];e<=Pm[1]&&i.length<2;e++)n.has(e)||i.push(String.fromCharCode(e));return 2===i.length?[i[0],i[1]]:void 0}(e);if(!t)return{marked:e,anchors:[],mark:/(?!)/};const[n,i]=t;return{...Om(e,n,i),mark:new RegExp(`${n}(\\d+)${i}`)}}function Im(e,t){if(Dm.test(t.trim()))return Rm(t);const n=function(e){const t=e.trim();return/^https?:\/\//i.test(t)?t:void 0}(ml(e));return[n&&t?{text:t,href:n}:{text:t}]}function zm(e){return e.some(e=>"href"in e)}function jm(e,t){if(!e)return[];if(t&&/<a\b/i.test(t)){const{marked:n,anchors:i,mark:r}=Nm(t),a=[];ml(n).split(r).forEach((e,t)=>{if(t%2==0)return void a.push(...Rm(e));const n=i[Number(e)];n&&a.push(...Im(n.href,ml(n.words)))});const o=a.filter(e=>""!==e.text);if(o.map(e=>e.text).join("")===e)return o}return Rm(e)}function Hm(e,t){const n=jm(e.location,t?.location),i=jm(e.description,t?.description);return{location:zm(n)?n:void 0,description:zm(i)?i:void 0}}function Wm(e,t){const n=function(e){const t=e?.translationMetadata?.translations,n=e?.language??e?.locale?.language;if(t&&n)return t[n]?.isRTL?"rtl":"ltr"}(t),i=function(e){return bt.has(e)?"rtl":"ltr"}(e);return void 0===n||n===i?"":"rtl"===i?"‏":"‎"}function Bm(e,t){return t&&e?`${t}${e}${t}`:e}const qm=/([^\S\u00A0\u2007\u202F]+)/u,Um=/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Bopomofo}\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u,Vm=/[\p{Script=Hebrew}\p{Script=Arabic}\p{Script=Syriac}\p{Script=Thaana}\p{Script=Nko}\p{Script=Samaritan}\p{Script=Mandaic}\p{Script=Adlam}]/u,Gm=/\p{L}/u,Km=/[\p{Script=Thai}\p{Script=Lao}\p{Script=Khmer}\p{Script=Myanmar}]/u,Ym=Intl.Segmenter,Jm=Ym?new Ym(void 0,{granularity:"word"}):null,Xm=/[\s\S]*?[\p{L}\p{N}][-\u2010\u2013\u2014](?=[\p{L}\p{N}])|[\s\S]+/gu;function Zm(e){const t=e.match(/[\p{L}\u200E\u200F\u061C]/u)?.[0];if(t)return"‎"===t?"ltr":"‏"===t||"؜"===t||Vm.test(t)?"rtl":"ltr"}const Qm={"sr-latn":"sr-Latn","zh-cn":"zh-Hans","zh-tw":"zh-Hant"},ep=["clear-night","cloudy","exceptional","fog","hail","lightning","lightning-rainy","partlycloudy","pouring","rainy","snowy","snowy-rainy","sunny","windy","windy-variant"];function tp(e,t){if(!e)return;const n=function(e){const t=e.toLowerCase(),n=Qm[t];if(n)return n;const[i,r]=t.split("-");return r?`${i}-${r.toUpperCase()}`:i}(St(t,e.locale)),i=e.locale?.language;return i&&i.toLowerCase()===n.toLowerCase()?void 0:n}const np=new Map,ip=new Map,rp=new Map,ap=new Set;const op=new Set;function sp(e,t){ap.has(e)||(ap.add(e),it(`Could not load weather conditions in ${e} (${t}); conditions will follow Home Assistant's language instead`))}const lp={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant",exceptional:"mdi:weather-cloudy-alert"},dp={sunny:"mdi:weather-night",partlycloudy:"mdi:weather-night-partly-cloudy","lightning-rainy":"mdi:weather-lightning"},cp=new Set,up={hourly:72e5,daily:1728e5};function hp(e,t){let n=null;for(const i of t){const t=e[i];if(void 0===t)continue;const r=t+up[i];(null===n||r<n)&&(n=r)}return n}const mp=3e4,pp=new WeakMap;async function fp(e,t,n,i){const r=Zr(t),a=e?.connection;if(!a||!r)return;const o={type:"weather/subscribe_forecast",forecast_type:n,entity_id:r};let s,l=!1,d=0,c=!0,u=mp;const h=e=>{e.released||(e.released=!0,void 0===e.answered?e.unsubscribe.then(e=>e?.(),()=>{}):e.answered?.())},m=()=>{const e={unsubscribe:Promise.resolve(null),epoch:d,stale:!1,released:!1};return e.unsubscribe=a.subscribeMessage(t=>{e.stale?setTimeout(()=>h(e),0):(c=!0,u=mp,clearTimeout(s),s=void 0,t&&Array.isArray(t.forecast)&&i(function(e,t){const n={};return e&&Array.isArray(e)?(e.forEach(e=>{if(!e.datetime)return;let i,r,a,o=!1;"hourly"===t?(a=new Date(e.datetime),r=a.getHours(),o=function(e,t){return"boolean"==typeof e?!e:t>=18||t<6}(e.is_daytime,r),i=`${gl(a)}_${r}`):(a=new Date(e.datetime),i=gl(a));const s=function(e,t){return t&&dp[e]?dp[e]:lp[e]||"mdi:weather-cloudy-alert"}(e.condition,o);n[i]={icon:s,condition:e.condition,temperature:Math.round(e.temperature),templow:void 0!==e.templow?Math.round(e.templow):void 0,datetime:e.datetime,hour:r,uv_index:void 0!==e.uv_index?Math.round(e.uv_index):void 0}}),n):n}(t.forecast,n)))},o).then(t=>e.answered=t??null),e};let p;try{p=m(),await p.unsubscribe}catch(e){return void Qe("Failed to subscribe to weather forecast",{entity:r,forecast_type:n,error:e})}const f=e=>{e.stale=!0,!1===a.connected||e.epoch!==d&&!c||h(e)},g=()=>{clearTimeout(s),s=setTimeout(()=>{if(s=void 0,!1===a.connected)return;et(`No weather forecast for ${r} since reconnecting; subscribing again`),f(p);const e=m();p=e,e.unsubscribe.catch(t=>{e.stale=!0,it("Could not subscribe to the weather forecast again",t)}),u=Math.min(2*u,18e5),g()},u)},v=function(e,t){let n=pp.get(e);if(!n){const t=new Set;n=t,pp.set(e,t),e.addEventListener?.("ready",()=>{for(const e of[...t])e()})}const i=n;return i.add(t),()=>{i.delete(t)}}(a,()=>{d+=1,c=!1,u=mp,g()});return()=>{l||(l=!0,clearTimeout(s),v(),f(p))}}function gp(e,t,n){const i=Yr(t.weather);if("date"!==i&&"both"!==i||!t.weather?.entity||!n?.daily)return V;const r=function(e,t){if(t)return t[gl(e)]}(e,n.daily);if(!r)return V;const a=t.weather?.date||{},o=!1!==a.show_conditions,s=!1!==a.show_high_temp,l=!0===a.show_uv_index&&void 0!==r.uv_index&&r.uv_index>=(a.uv_index_threshold??0),d=!0===a.show_low_temp&&!l&&void 0!==r.templow;return B`
    <div class="weather">${o?B`<ha-icon .icon=${r.icon}></ha-icon>`:V}${s?B`<span class="weather-temp-high">${r.temperature}°</span>`:V}${d?B`<span class="weather-temp-low">/${r.templow}°</span>`:V}${l?B`<span class="weather-uv-index">UV${r.uv_index}</span>`:V}</div>
  `}function vp(e){const t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate()),i=new Date(e),r=i.toDateString(),a=new Date(n);return a.setDate(a.getDate()+1),{isToday:r===n.toDateString(),isTomorrow:r===a.toDateString(),isPast:new Date(i.getFullYear(),i.getMonth(),i.getDate())<n}}function _p(e,t,n){const i=t?e.today_date_scale:n?e.past_date_scale:1;return"number"==typeof i&&i>0?i:1}function yp(e,t){return Ra(e.replace(/^\s*initial(?=\s*(?:!\s*important\s*)?$)/i,"medium"),t)}function wp(e){return Math.max(1,_p(e,!0,!1),_p(e,!1,!0))}function bp(e,t,n,i,r=V,a,o,s,l){const d=jp(t,i,"inline"),c=d!==V,u=a?B`<div
        class="column-header-separator"
        style=${sm({borderTopWidth:a.width,"--calendar-card-column-header-separator-width":a.width,borderTopColor:Fe(a.color),borderTopStyle:"solid"})}
      ></div>`:V;return B`
    <div
      class=${l?"column-day-header day-add-button":"column-day-header"}
      id=${l?V:s??V}
      role=${l?"button":V}
      tabindex=${l?"0":V}
      aria-label=${l?l.label:V}
      aria-describedby=${l&&s?s:V}
      .calendarCardDayAdd=${l?.timestamp}
    >
      <div
        class=${rm({"column-date-content":!0,"with-today-indicator":c,"with-today-tile":Sp(t)})}
        id=${l&&s?s:V}
      >
        ${d}
        ${Dp(e,t,n,i,r,o)}
      </div>
    </div>
    ${u}
  `}function xp(e,t,n){return B`
    <div
      class="column-week-number"
      style=${sm({gridColumn:String(n),gridRow:"1",...t?{}:{visibility:"hidden"}})}
    >
      <div class="week-number">${e??""}</div>
    </div>
  `}function kp(e){return wi(e.week_separator_color)??"var(--calendar-card-week-number-bg-color, var(--calendar-card-today-indicator-wash, rgba(128, 128, 128, 0.31)))"}function $p(e){return void 0===wi(e.week_separator_color)?"var(--calendar-card-week-number-color, var(--calendar-card-week-number-fill-ink, var(--calendar-card-week-number-ink-floor, var(--calendar-card-today-indicator-ink, var(--primary-text-color)))))":void 0}function Sp(e){return Boolean(e.today_indicator)&&"tile"===zt(e.today_indicator)}function Tp(e,t,n,i){let r=e.weekday_color,a=e.day_color,o=e.month_color;return t&&(r=e.weekend_weekday_color||r,a=e.weekend_day_color||a,o=e.weekend_month_color||o),n&&(r=e.today_weekday_color||r,a=e.today_day_color||t&&e.weekend_day_color||(i?"var(--calendar-card-today-indicator-ink)":a),o=e.today_month_color||o),{weekday:r,day:a,month:o}}function Mp(e,t,n){return{weight:vi(t?e.today_date_font_weight:n?e.past_date_font_weight:"default")||void 0,opacity:n&&e.past_date_opacity>=0&&e.past_date_opacity<100?String(e.past_date_opacity/100):void 0}}function Dp(e,t,n,i,r=V,a){const o=bl(e,a),{isPast:s}=vp(e.getTime()),l=_p(t,i,s),d=e=>1===l?e:yp(e,l),{weight:c,opacity:u}=Mp(t,i,s),h=i&&Sp(t),{weekday:m,day:p,month:f}=Tp(t,o,i,h),g=Xs(n),v=Wm(n,a),_=Bm(g.daysOfWeek[e.getDay()],v),y=e.getDate(),w=Bm(g.months[e.getMonth()],v);return B`
    <div
      class="weekday"
      style=${sm({"font-size":d(t.weekday_font_size),color:m,"font-weight":c,opacity:u})}
    >
      ${_}
    </div>
    <div
      class=${h?"day today-tile":"day"}
      style=${sm({"font-size":d(t.day_font_size),color:p,"font-weight":c,opacity:u})}
    >
      ${y}
    </div>
    ${t.show_month?B`
          <div
            class="month"
            style=${sm({"font-size":d(t.month_font_size),color:f,"font-weight":c,opacity:u})}
          >
            ${w}
          </div>
        `:V}
    ${r}
  `}const Cp=/[\u2000-\u3300]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDC00-\uDFFF]/,Ap=/[\s\p{L}]/u;function Ep(e,t,n,i=""){if(!e)return V;const r=Ht(e,n);if("none"===r)return V;if("icon"===r)return B`<ha-icon icon="${e}" class="label-icon" style=${t?`color: ${t};`:V}></ha-icon>`;if("image"===r)return B`<img src="${e}" class="label-image" alt=${i} />`;const a=function(e){return Cp.test(e)&&!Ap.test(e)}(e)?" label-emoji":"";return B`<span class="calendar-label${a}">${e}</span>`}function Pp(e,t,n,i,r,a,o=!1,s="",l){const d=!!e._isEmptyDay,c=d&&!e._isCustomEmptyText,u=e._matchedConfig?.color||t.event_color,h=d?"var(--calendar-card-empty-day-color)":Sr(u)?void 0:u,m=e._matchedConfig?.label_icon_color,p=e._matchedConfig?.label_type,f=c?`✓ ${e.summary}`:e.summary,g=void 0!==l?Jt(t):void 0,v=Boolean(t.scroll_long_titles)||"line"===g,_=Boolean(t.scroll_long_titles),y=o&&!v?B`<span class="title-words"
          >${function(e){const t=e.split(qm),n=t.findIndex((e,t)=>t%2==0&&Gm.test(e));if(Vm.test(e)){const e=-1===n?t.length:n+1,i=t.slice(e),r=i.slice(1).join("");return[...t.slice(0,e).flatMap((e,t)=>""===e?[]:t%2==1?[{kind:"space",text:e}]:(e.match(Xm)??[e]).map(e=>({kind:"word",text:e}))),...i.length&&i[0]?[{kind:"space",text:i[0]}]:[],...r?[{kind:"text",text:r}]:[]]}return t.flatMap((e,t)=>""===e?[]:t%2==1?[{kind:"space",text:e}]:Um.test(e)?t===n?function(e){let t="";for(const{segment:n}of Jm?Jm.segment(e):[]){if(t+=n,!Gm.test(n))continue;if(!Km.test(n))break;const i=e.slice(t.length);return i?[{kind:"word",text:t},{kind:"text",text:i}]:[{kind:"word",text:t}]}return[{kind:"text",text:e}]}(e):[{kind:"text",text:e}]:(e.match(Xm)??[e]).map(e=>({kind:"word",text:e})))}(f??"").map(e=>"word"===e.kind?B`<span class="title-word">${e.text}</span>`:"text"===e.kind?B`<span class="title-run">${e.text}</span>`:e.text)}</span
        >`:f,w=r?`allday-title-pill allday-pill-${r.mode}`+(r.inheritsText?" allday-source-text":""):"",b=r?`--calendar-card-event-accent: ${r.accent};`+(r.inheritsText?` --badge-source: ${h};`:""):"",x=r?B`<span
        class=${w}
        style=${b}
        >${y}</span
      >`:y,k=a?a.map(e=>Ep(e.value,e.iconColor,e.type,e.alt)):n?Ep(n,m,p,s):V,$=Array.isArray(k)?k.some(e=>e!==V):k!==V,S=e._privateTitle?$m(h??"var(--calendar-card-color-event)"):V,T=$||S!==V,M=_?B`<span class="event-title-scroll">${x}</span>`:x,D=`event-title ${d?"empty-day-title":""}${v?" title-scrollable":""}`,C=void 0===h?V:`color: ${h}`,A=v?d?V:Zm(e.summary??"")??V:o?"auto":V,E=!o&&!v&&!d&&t.title_max_lines>0?Zm(e.summary??"")??V:V,P=T?B`${S===V?k:[k,S]}<span class=${D} style=${C} dir=${A}>${M}</span>`:B`<span
          class=${D}
          style=${C}
          dir=${A}
        >
          ${M}
        </span>`;return l&&v?B`
      <div class="summary-row">
        <div class="summary summary-scroll">${P}</div>
        <div class="title-aside">
          ${Fp(e,t,i)}${l}
        </div>
      </div>
    `:l?B`
      <div class="summary-row title-wrap${"cap"===g?" title-capped":""}">
        <div class="summary" dir=${E}>${P}<span class="title-room"></span></div>
        <div class="title-aside">
          <span class="title-strut" aria-hidden="true">\u2060</span>${Fp(e,t,i)}${l}
        </div>
      </div>
    `:B`
    <div class="summary-row">
      <div class="summary${v?" summary-scroll":""}" dir=${E}>
        ${P}
      </div>
      ${Fp(e,t,i)}
    </div>
  `}function Lp(e,t){return function(e){const t=Yr(e);return!(!e?.entity||"event"!==t&&"both"!==t)}(e.weather)&&!1!==Iu(t._entityId,"show_weather",e,t)}function Fp(e,t,n,i="title",r){const a=Rp(e,t,n,i,r);if(!a)return B``;const{forecast:o,showIcon:s,showTemp:l,showUvIndex:d,conditionText:c}=a;return B`
    <div class="event-weather">${s?B`<ha-icon .icon=${o.icon}></ha-icon>`:V}<span class="event-weather-text">${l?B`<span>${o.temperature}°</span>`:V}${d?B`<span class="weather-uv-index">UV${o.uv_index}</span>`:V}${c?B`<span class="weather-condition">${c}</span>`:V}</span></div>
  `}function Rp(e,t,n,i="title",r){if(!Lp(t,e)||!n?.hourly)return null;if(e.end?.dateTime){const t=new Date;if(new Date(e.end.dateTime)<t)return null}const a=t.weather?.event||{},o=function(e,t,n,i=!1){if(e.start.date&&!e.start.dateTime&&n)return n[gl(fl(e.start.date))];if(!e.start.dateTime)return;const r=new Date(e.start.dateTime),a=gl(r),o=r.getHours();if(t){const e=t[`${a}_${o}`];if(e)return e;let n=-1,i=24;if(Object.keys(t).forEach(e=>{if(e.startsWith(a)){const t=e.split("_")[1],r=parseInt(t);if(!isNaN(r)){const e=Math.abs(r-o);e<i&&(i=e,n=r)}}}),n>=0)return t[`${a}_${n}`]}return i&&n?n[a]:void 0}(e,n.hourly,n.daily,!1!==a.daily_forecast_fallback);if(!o)return null;const s=!1!==a.show_conditions,l=!1!==a.show_temp,d=!0===a.show_uv_index&&void 0!==o.uv_index&&o.uv_index>=(a.uv_index_threshold??0),c="row"===i,u=c||s,h=c&&s?function(e,t,n,i){if(!e||!t||!n)return;const r=tp(e,i);if(r){const e=function(e,t){const n=np.get(e);if(!n)return;const i=n[t];return i||function(e,t){const n=`${e}:${t}`;op.has(n)||(op.add(n),it(`Home Assistant has no "${t}" for ${e}; that condition will follow the instance's language instead`))}(e,t),i}(r,n);if(e)return e}const a=e.states?.[t];if(!a||"function"!=typeof e.formatEntityState)return;const o=e.formatEntityState(a,n);return o?(o!==n||cp.has(n)||(cp.add(n),it(`Weather condition "${n}" came back untranslated from ${t}; Home Assistant returned the raw token, so the row will show it as-is`)),o):void 0}(r,t.weather?.entity,o.condition,t.language):void 0;return{forecast:o,showIcon:u,showTemp:l,showUvIndex:d,conditionText:h}}function Op(e){return e.map(e=>"href"in e?B`<a class="event-link" href=${e.href} target="_blank" rel="noopener noreferrer"
          >${e.text}</a
        >`:e.text)}function Np(e,t,n,i={}){const{weatherForecasts:r,weatherPlacement:a="title",progressPlacement:o="inline",countdownPlacement:s="trailing",hass:l,splitTimeEnd:d=!1,titleWords:c=!1,links:u=!1,timePosition:h="below"}=i,m="title"===h,p=m?"row":o,f=m?"text":s,{eventTime:g,eventTimeEnd:v,eventTimeDuration:_,allDayBadge:y,titlePill:w,eventLocation:b,locationIcon:x,eventDescription:k,shouldShowTime:$,countdownStr:S,dayCounter:T=null,countUp:M=!1,progressPercentage:D,entityLabel:C,entityLabelAlt:A,mergedLabels:E,nowLabel:P,languageMark:L=""}=n,F=e=>Bm(e,L),R=S??T,O=null===S&&null!==T?"time-countdown day-counter":M?"time-countdown count-up":"time-countdown",N=u?Hm({location:b,description:k},e._source):void 0,I=N?.location?Op(N.location):b,z=N?.description?Op(N.description):k,j=null!==D&&t.show_progress_bar,H=j&&"inline"===p,W=j&&"row"===p?B`
          <div class="progress-bar progress-bar-row">
            <div class="progress-bar-filled" style="width: ${D}%"></div>
          </div>
        `:V,q="title"===a?r:void 0,U="row"===a&&Lp(t,e)?Fp(e,t,r,"row",l):V,G="text"===f&&null!==R,K=null===R?null:F(R),Y=G?null:K,J=d&&v&&g.endsWith(v)&&g!==v?v:null,X=J?g.slice(0,-J.length):g,Z=J&&_&&J.endsWith(_)&&J!==_?_:null,Q=Z&&J?J.slice(0,-Z.length):null,ee=g?Z&&null!==Q?B`<span>${F(El(X))}<span class="time-end"><span class="time-end-reading">${F(El(Q,X))}</span><span class="time-duration">${F(Z)}</span></span></span>`:J?B`<span>${F(El(X))}<span class="time-end">${F(El(J,X))}</span></span>`:B`<span>${F(El(g))}</span>`:V,te=y?B`<span
        class=${"allday-badge allday-pill-"+y.mode+(y.inheritsText?" allday-source-text":"")}
        lang=${y.lang}
        style=${`--calendar-card-event-accent: ${y.accent};`+(y.inheritsText?" --badge-source: var(--calendar-card-color-time);":"")}
        >${y.label}</span
      >`:V,ne=m&&null!==K?B`<span class="time-countdown-words">${K}</span>`:K,ie=G?B`<span class="time-text">${ee}<span class=${O}>${ne}</span></span>`:ee,re=P?B`<span class="now-time"><span class="now-indicator">${P}</span>${ie}</span>`:ie;return m&&($||R)?function(e){const{shouldShowTime:t,allDayBadgeEl:n,timeContent:i,countdownStr:r,countdownClass:a}=e,o=t?B`<div class="time"><div class="time-actual">${n}${i}</div></div>`:B`<div class="time"><div class=${a}>${r}</div></div>`;return B`
    <div class="event-content time-beside-title">
      ${e.title(o)}
      <div class="time-location">
        ${e.progressRow} ${e.weatherRow}
        ${e.eventLocation?B`<div class="location">
                <ha-icon icon="${e.locationIcon}"></ha-icon>
                <span>${e.locationText}</span>
              </div>`:V}
        ${e.eventDescription?B`<div class="description">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                <span>${e.descriptionText}</span>
              </div>`:V}
      </div>
    </div>
  `}({title:n=>Pp(e,t,C,q,w,E,c,A,n),shouldShowTime:$,allDayBadgeEl:te,timeContent:re,countdownStr:K,countdownClass:O,progressRow:W,weatherRow:U,eventLocation:b,locationIcon:x,locationText:I,eventDescription:k,descriptionText:z}):B`
    <div class="event-content">
      ${Pp(e,t,C,q,w,E,c,A)}
      <div class="time-location">
        ${W}
        ${$?B`
              <div class="time">
                <div class="time-actual">
                  <ha-icon icon=${P?"mdi:clock":"mdi:clock-outline"}></ha-icon>
                  ${te}${re}
                </div>
                ${Y?B`<div class=${O}>${Y}</div>`:H?B`
                        <div class="progress-bar">
                          <div
                            class="progress-bar-filled"
                            style="width: ${D}%"
                          ></div>
                        </div>
                      `:V}
              </div>
            `:R?B`
                <div class="time">
                  <div class="time-actual"></div>
                  <div class=${O}>${K}</div>
                </div>
              `:H?B`
                  <div class="time">
                    <div class="time-actual"></div>
                    <div class="progress-bar">
                      <div class="progress-bar-filled" style="width: ${D}%"></div>
                    </div>
                  </div>
                `:V}
        ${U}
        ${b?B`
              <div class="location">
                <ha-icon icon="${x}"></ha-icon>
                <span>${I}</span>
              </div>
            `:""}
        ${k?B`
              <div class="description">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                <span>${z}</span>
              </div>
            `:""}
      </div>
    </div>
  `}function Ip(){return B`<tr class="event-gap-row" aria-hidden="true">
    <td class="event-gap-cell"></td>
  </tr>`}function zp(){return B`<span class="event-accent-bar"></span>`}function jp(e,t,n="absolute"){if(!e.today_indicator||!t)return V;const i=e.today_indicator,r=zt(i);if("none"===r||"tile"===r)return V;const a="inline"===n?{}:function(e){const t={position:"absolute",transform:"translate(var(--calendar-card-today-indicator-shift, -50%), -50%)"},n=e.trim().split(/\s+/);return n.length>=1&&(t["inset-inline-start"]=n[0]),n.length>=2?t.top=n[1]:t.top="50%",t}(e.today_indicator_position);return B`
    <div class="today-indicator-container${"inline"===n?" inline":""}">
      ${function(e,t,n){let i="";switch(e){case"dot":case"pulse":case"glow":i="mdi:circle";break;case"mdi":i="string"==typeof t?t:"mdi:circle";break;case"image":return"string"==typeof t?B` <img
          src="${t}"
          class="today-indicator image"
          style=${sm(n)}
          alt="Today"
        />`:V;case"emoji":return"string"==typeof t?B` <span class="today-indicator emoji" style=${sm(n)}>
          ${t}
        </span>`:V;default:return V}return i?B` <ha-icon
      icon="${i}"
      class="today-indicator ${e}"
      style=${sm(n)}
    >
    </ha-icon>`:V}(r,i,a)}
    </div>
  `}const Hp=[["event_color","--calendar-card-color-event","ink"],["time_color","--calendar-card-color-time","ink"],["location_color","--calendar-card-color-location","ink"],["description_color","--calendar-card-color-description","ink"],["progress_bar_color","--calendar-card-progress-bar-color","raw"]];Hp.map(([e])=>e);const Wp="--calendar-card-accent-ink",Bp=Hp.find(([e])=>"event_color"===e)[1];function qp(e,t,n=!1){const i={};if(n||!t)return i;for(const[n,r,a]of Hp)Sr(e[n])&&(i[r]="ink"===a?`var(${Wp})`:t);const r=e.weather?.event?.color;return(Sr(r)||!r&&i[Bp])&&(i["--calendar-card-weather-event-color"]=`var(${Wp})`),Object.values(i).some(e=>e.includes(Wp))&&(i["--calendar-card-accent-ink-source"]=t),i}function Up(e,t){return e>0?String(Math.min(e,t)):"none"}function Vp(e){return e.accent_color&&!kr(e.accent_color)?e.accent_color:String(mi.accent_color)}const Gp=/(?:^|[^\w-])(?:var|attr)\(/i;function Kp(e){return Gp.test(e)?"0.125em":Sa(e,.125)}function Yp(e){if(1===_p(e,!0,!1)&&1===_p(e,!1,!0))return{};const t=wp(e),n=e=>yp(e,t).replace(/\s*!\s*important\s*$/i,""),i=n(e.day_font_size);return{"--calendar-card-date-strut":'"\\200b"',"--calendar-card-date-weekday-row":n(e.weekday_font_size),"--calendar-card-date-weekday-align":"end","--calendar-card-date-day-strut-size":i,"--calendar-card-date-text-strut-size":e.show_month?`max(${i}, ${n(e.month_font_size)})`:i}}function Jp(e){const t={"--calendar-card-background-color":e.background_color,"--calendar-card-font-size-weekday":e.weekday_font_size,"--calendar-card-font-size-day":e.day_font_size,"--calendar-card-font-size-month":e.month_font_size,"--calendar-card-font-size-event":e.event_font_size,"--calendar-card-font-size-time":e.time_font_size,"--calendar-card-font-size-location":e.location_font_size,"--calendar-card-font-size-description":e.description_font_size,"--calendar-card-color-weekday":e.weekday_color,"--calendar-card-color-day":e.day_color,"--calendar-card-color-month":e.month_color,"--calendar-card-color-event":e.event_color,"--calendar-card-color-time":e.time_color,"--calendar-card-color-location":e.location_color,"--calendar-card-color-description":e.description_color,"--calendar-card-line-color-vertical":Vp(e),"--calendar-card-line-width-vertical":e.vertical_line_width,"--calendar-card-day-spacing":e.day_spacing,"--calendar-card-event-spacing":e.event_spacing,"--calendar-card-past-event-opacity":String(e.past_event_opacity/100),"--calendar-card-spacing-additional":e.additional_card_spacing,"--calendar-card-height":e.height||"auto","--calendar-card-max-height":e.max_height,"--calendar-card-progress-bar-color":e.progress_bar_color,"--calendar-card-now-color":e.now_color,"--calendar-card-progress-bar-height":e.progress_bar_height,"--calendar-card-icon-size-time":e.time_icon_size||"14px","--calendar-card-icon-size-location":e.location_icon_size||"14px","--calendar-card-icon-size-description":e.description_icon_size||"14px","--calendar-card-description-max-lines":e.description_max_lines>0?String(e.description_max_lines):"none","--calendar-card-title-max-lines":e.title_max_lines>0?String(e.title_max_lines):"none","--calendar-card-grid-title-lines-compact":Up(e.title_max_lines,1),"--calendar-card-grid-title-lines-medium":Up(e.title_max_lines,2),"--calendar-card-grid-title-lines-expanded":Up(e.title_max_lines,3),"--calendar-card-time-max-lines":e.time_max_lines>0?String(e.time_max_lines):"none","--calendar-card-location-max-lines":e.location_max_lines>0?String(e.location_max_lines):"none","--calendar-card-title-display":e.title_max_lines>0?"-webkit-box":"inline","--calendar-card-time-display":e.time_max_lines>0?"-webkit-box":"inline","--calendar-card-title-overflow":e.title_max_lines>0?"hidden":"visible","--calendar-card-time-overflow":e.time_max_lines>0?"hidden":"visible","--calendar-card-location-overflow":e.location_max_lines>0?"hidden":"visible","--calendar-card-description-overflow":e.description_max_lines>0?"hidden":"visible","--calendar-card-title-ink-room":e.title_max_lines>0?"0.375em":"0px","--calendar-card-time-ink-room":e.time_max_lines>0?"0.375em":"0px","--calendar-card-title-inline-room":e.title_max_lines>0?"var(--calendar-card-inline-room)":"0px","--calendar-card-time-inline-room":e.time_max_lines>0?"var(--calendar-card-inline-room)":"0px","--calendar-card-event-inline-room":Kp(e.event_font_size),"--calendar-card-grid-text-inline-room":`max(${[e.event_font_size,e.time_font_size,e.location_font_size,e.description_font_size].map(Kp).join(", ")})`,"--calendar-card-summary-end-margin":e.title_max_lines>0?"0.2em":"0px","--calendar-card-title-end-margin":e.title_max_lines>0?"2px":"0px","--calendar-card-date-column-width":Sa(e.day_font_size,1.75*wp(e)),...Yp(e),"--calendar-card-date-column-vertical-alignment":e.date_vertical_alignment,"--calendar-card-event-icon-vertical-alignment":"top"===e.event_icon_vertical_alignment?"flex-start":"bottom"===e.event_icon_vertical_alignment?"flex-end":"center","--calendar-card-event-border-radius":"calc(var(--ha-card-border-radius, 10px) / 2)","--ha-ripple-hover-opacity":"0.04","--ha-ripple-hover-color":Vp(e),"--ha-ripple-pressed-opacity":"0.12","--ha-ripple-pressed-color":Vp(e),"--calendar-card-today-indicator-color":e.today_indicator_color,"--calendar-card-today-indicator-size":e.today_indicator_size,"--calendar-card-week-number-font-size":e.week_number_font_size,"--calendar-card-month-separator-label-font-size":e.month_separator_label_font_size,"--calendar-card-empty-day-color":e.empty_day_color===mi.empty_day_color?"color-mix(in srgb, var(--primary-text-color) 60%, transparent)":e.empty_day_color,"--calendar-card-weather-date-icon-size":e.weather?.date?.icon_size||"14px","--calendar-card-weather-date-font-size":e.weather?.date?.font_size||"12px","--calendar-card-weather-date-color":e.weather?.date?.color||"var(--primary-text-color)","--calendar-card-weather-event-icon-size":e.weather?.event?.icon_size||"14px","--calendar-card-weather-event-font-size":e.weather?.event?.font_size||"12px","--calendar-card-weather-event-max-lines":(e.weather?.event?.max_lines??0)>0?String(e.weather?.event?.max_lines):"none","--calendar-card-weather-event-condition-display":(e.weather?.event?.max_lines??0)>0?"-webkit-inline-box":"inline","--calendar-card-weather-condition-inline-room":(e.weather?.event?.max_lines??0)>0?"var(--calendar-card-inline-room)":"0px"};for(const[n,i]of Hp)Sr(e[n])&&(t[i]=String(mi[n]));e.progress_bar_width&&(t["--calendar-card-progress-bar-width"]=e.progress_bar_width),e.title_font_size&&(t["--calendar-card-font-size-title"]=e.title_font_size);const n=wi(e.week_number_color),i=wi(e.week_number_background_color);n&&(t["--calendar-card-week-number-color"]=n),i&&(t["--calendar-card-week-number-bg-color"]=i,n||(t["--calendar-card-week-number-ink-floor"]="var(--primary-text-color)",function(e){const t=Ve(e);return void 0!==t&&t>0&&t<=.34}(i)&&(t["--calendar-card-week-number-fill-source"]=i))),e.title_color&&(t["--calendar-card-color-title"]=e.title_color),ya(e)&&(t["--calendar-card-event-gap"]=e.event_gap),e.event_background_opacity>0&&(t["--calendar-card-event-accent-side-radius"]="var(--calendar-card-event-border-radius)",t["--calendar-card-event-accent-bar-inset"]="4px",Pe()&&(t["--calendar-card-event-wash-hover"]="color-mix(in srgb, currentColor 6%, transparent)",t["--calendar-card-event-wash-pressed"]="color-mix(in srgb, currentColor 10%, transparent)")),e.weather?.event?.color&&!Sr(e.weather.event.color)&&(t["--calendar-card-weather-event-color"]=e.weather.event.color);for(const[e,n]of Object.entries(t))t[e]=Fe(n);return t}const Xp=a`
  repeating-linear-gradient(
    to bottom,
    var(--calendar-card-grid-slot-color) var(--calendar-card-grid-slot-offset)
      calc(var(--calendar-card-grid-slot-offset) + var(--calendar-card-grid-rule-width)),
    transparent
      calc(var(--calendar-card-grid-slot-offset) + var(--calendar-card-grid-rule-width))
      calc(var(--calendar-card-grid-slot-offset) + var(--calendar-card-grid-slot-pct))
  ),
  repeating-linear-gradient(
    to bottom,
    var(--calendar-card-grid-rule-color) var(--calendar-card-grid-hour-offset)
      calc(var(--calendar-card-grid-hour-offset) + var(--calendar-card-grid-rule-width)),
    transparent
      calc(var(--calendar-card-grid-hour-offset) + var(--calendar-card-grid-rule-width))
      calc(var(--calendar-card-grid-hour-offset) + var(--calendar-card-grid-hour-pct))
  )
`,Zp=a`
  :host {
    display: block;
    height: 100%;
    --calendar-card-inline-room: 1px;
  }
  @supports (width: round(1px, 1px)) and (contain-intrinsic-size: 1px) {
    :host {
      --calendar-card-inline-room: round(up, 0.125em, 1px);
    }
  }
  ha-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    padding: calc(var(--calendar-card-spacing-additional) + 16px) 16px
      calc(var(--calendar-card-spacing-additional) + 16px) 8px;
    background: var(--calendar-card-background-color, var(--card-background-color));
    cursor: default;
    transition-property: background-color, border-color, box-shadow, color;
    --calendar-card-event-row-room: 1px;
    --calendar-card-grid-block-room: 1px;
  }
  @supports (width: round(1px, 1px)) and (contain-intrinsic-size: 1px) {
    ha-card,
    .event-text-scaled {
      --calendar-card-event-row-room: round(
        up,
        var(--calendar-card-event-inline-room, 0.125em),
        1px
      );
      --calendar-card-grid-block-room: round(
        up,
        var(--calendar-card-grid-text-inline-room, 0.125em),
        1px
      );
    }
  }
  ha-card:dir(rtl) {
    padding: calc(var(--calendar-card-spacing-additional) + 16px) 8px
      calc(var(--calendar-card-spacing-additional) + 16px) 16px;
  }
  ha-card.card-interactive {
    cursor: pointer;
  }
  ha-card.swipe-paging,
  ha-card.swipe-paging .content-container,
  ha-card.swipe-paging .content-container * {
    touch-action: pan-y;
    touch-action: pan-y pinch-zoom;
  }
  ha-card:focus {
    outline: none;
  }
  ha-card:focus-visible,
  ha-card:has(> .card-tap-control:focus-visible) {
    outline: 2px solid var(--calendar-card-line-color-vertical);
  }
  .card-tap-control {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    opacity: 0;
    pointer-events: none;
  }
  .header-container,
  .content-container {
    width: 100%;
  }
  .content-container {
    flex: var(--calendar-card-content-flex, 0 1 auto);
    max-height: var(--calendar-card-max-height, none);
    height: var(--calendar-card-height, auto);
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 1px;
    hyphens: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .content-container:hover {
    scrollbar-width: thin;
    scrollbar-color: var(--secondary-text-color) transparent;
    -ms-overflow-style: auto;
  }
  .grid-head[data-pinned='alone'],
  .grid-allday-row[data-pinned],
  .column-grid[data-pinned] > .day-column > .column-day-header::before,
  .month-container:not(.month-narrow) > .month-weekdays[data-pinned] {
    background-color: var(--calendar-card-background-color, var(--card-background-color));
  }
  @supports (animation-timeline: scroll()) {
    .grid-head[data-pinned='alone'],
    .grid-allday-row[data-pinned],
    .column-grid[data-pinned] > .day-column > .column-day-header::before,
    .month-container:not(.month-narrow) > .month-weekdays[data-pinned] {
      background-color: transparent;
      animation: calendar-card-pinned-ground linear both;
      animation-timeline: scroll(nearest block);
      animation-range: 0px 1px;
    }
  }
  @keyframes calendar-card-pinned-ground {
    to {
      background-color: var(--calendar-card-background-color, var(--card-background-color));
    }
  }
  .card-header-placeholder {
    height: 0;
  }
  .card-header {
    float: left;
    float: inline-start;
    margin: 0 0 16px;
    margin-inline-start: 8px;
    padding: 0;
    color: var(--calendar-card-color-title, var(--primary-text-color));
    font-size: var(--calendar-card-font-size-title, var(--ha-card-header-font-size, 24px));
    font-weight: var(--ha-font-weight-normal, 400);
    letter-spacing: -0.012em;
    line-height: 1.33;
  }
  .toolbar-identity > .card-header {
    float: none;
    contain: inline-size;
    min-height: 1.2em;
    margin: 0;
    color: var(--secondary-text-color);
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--ha-font-weight-medium, 500);
    letter-spacing: normal;
    line-height: 1.2;
  }
  .card-toolbar {
    box-sizing: border-box;
    min-width: 0;
    padding-inline-start: 8px;
  }
  .card-toolbar.toolbar-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }
  .toolbar-start,
  .toolbar-end {
    display: flex;
    flex: 1 1 0;
    align-items: center;
    gap: 8px;
    min-width: max-content;
  }
  .toolbar-end {
    justify-content: flex-end;
  }
  .card-toolbar.toolbar-heading {
    display: flex;
    align-items: flex-end;
    gap: 8px;
    margin-bottom: 12px;
  }
  .toolbar-identity {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    min-width: 0;
  }
  .toolbar-heading.chips-shown > .toolbar-identity {
    flex: 1 1 0;
    min-width: max-content;
  }
  .toolbar-heading > .toolbar-heading-end {
    margin-block-end: calc(var(--calendar-card-heading-middle, 15px) - 12px);
  }
  .toolbar-heading-end {
    display: flex;
    flex: none;
    align-items: center;
    justify-content: flex-end;
    margin-inline-start: auto;
  }
  .toolbar-heading.chips-shown > .toolbar-heading-end {
    flex: 1 1 0;
    min-width: max-content;
  }
  .toolbar-month {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, max-content);
    align-items: center;
    align-self: stretch;
    min-width: 0;
    color: var(--calendar-card-color-title, var(--primary-text-color));
    font-size: var(--calendar-card-font-size-title, var(--ha-card-header-font-size, 24px));
    font-weight: var(--ha-font-weight-normal, 400);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.012em;
    line-height: 1.2;
  }
  .toolbar-month.with-picker {
    margin-inline-start: -8px;
  }
  .toolbar-month-reserve,
  .toolbar-month-probe {
    display: grid;
    white-space: nowrap;
  }
  .toolbar-month-reserve > span,
  .toolbar-month-probe > span {
    grid-area: 1 / 1;
  }
  .toolbar-month.with-picker .toolbar-month-reserve,
  .toolbar-month.with-picker .toolbar-month-probe {
    padding-inline: 8px 28px;
  }
  .toolbar-month-reserve {
    grid-area: 1 / 1;
    overflow: hidden;
    visibility: hidden;
  }
  .toolbar-month-measure {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    visibility: hidden;
    pointer-events: none;
  }
  .toolbar-month-probe {
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
  }
  .toolbar-month-slot {
    position: relative;
    display: flex;
    grid-area: 1 / 1;
    justify-self: start;
    min-width: 0;
    max-width: 100%;
  }
  .toolbar-month-button {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    min-width: 0;
    max-width: 100%;
    margin: 0;
    padding-block: 0;
    padding-inline: 8px 4px;
    border: none;
    border-radius: 999px;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .toolbar-month-label {
    display: flex;
    align-items: center;
    min-width: 0;
    white-space: nowrap;
  }
  .toolbar-month-text {
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .toolbar-month-text {
      overflow-x: clip;
      overflow-y: visible;
      min-width: 0;
    }
  }
  .toolbar-month-name {
    font-weight: var(--ha-font-weight-bold, 700);
  }
  .toolbar-month-icon {
    flex: none;
    width: 24px;
    height: 24px;
    fill: currentColor;
    color: var(--secondary-text-color);
  }
  .toolbar-month-cap {
    display: inline-block;
    width: 0;
    height: 0.7em;
    height: 1cap;
    vertical-align: baseline;
  }
  .toolbar-range-text {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }
  .date-navigation {
    display: inline-flex;
    flex: none;
    align-items: center;
    gap: 4px;
    height: 24px;
  }
  .date-navigation-segment {
    width: 24px;
    height: 24px;
    padding: 0;
    border-radius: 12px;
    background: var(--calendar-card-toolbar-fill);
  }
  .date-navigation-segment .toolbar-button-icon {
    width: 15px;
    height: 15px;
  }
  .date-navigation-segment .date-navigation-direction {
    width: 21px;
    height: 21px;
  }
  .date-navigation-direction:dir(rtl) {
    transform: scaleX(-1);
  }
  .toolbar-date-input {
    position: absolute;
    inset: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    opacity: 0;
    pointer-events: none;
  }
  .content-container.page-pending {
    opacity: 0.5;
    transition: opacity 120ms ease 150ms;
  }
  .card-toolbar {
    --calendar-card-toolbar-fill: color-mix(in srgb, var(--primary-text-color) 8%, transparent);
    --calendar-card-toolbar-fill-hover: color-mix(
      in srgb,
      var(--ha-ripple-hover-color) 12%,
      var(--calendar-card-toolbar-fill)
    );
    --calendar-card-toolbar-fill-pressed: color-mix(
      in srgb,
      var(--ha-ripple-pressed-color) 20%,
      var(--calendar-card-toolbar-fill)
    );
    --calendar-card-toolbar-selected: var(
      --calendar-card-background-color,
      var(--card-background-color)
    );
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .card-toolbar {
      --calendar-card-toolbar-fill: rgba(128, 128, 128, 0.15);
      --calendar-card-toolbar-fill-hover: rgba(128, 128, 128, 0.24);
      --calendar-card-toolbar-fill-pressed: rgba(128, 128, 128, 0.32);
    }
  }
  @supports (color: light-dark(#000, #fff)) {
    .card-toolbar {
      --calendar-card-toolbar-selected: light-dark(
        var(--calendar-card-background-color, var(--card-background-color)),
        color-mix(
          in srgb,
          var(--primary-text-color) 22%,
          var(--calendar-card-background-color, var(--card-background-color))
        )
      );
    }
  }
  .toolbar-button,
  .view-switcher-segment,
  .date-navigation-segment {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    box-sizing: border-box;
    margin: 0;
    border: none;
    color: var(--primary-text-color);
    font-family: inherit;
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--ha-font-weight-medium, 500);
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .toolbar-button {
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 18px;
    background: var(--calendar-card-toolbar-fill);
  }
  .toolbar-button-icon {
    flex: none;
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  .custom-button-icon,
  .custom-menu-icon {
    --mdc-icon-size: 1em;
    --icon-primary-color: currentColor;
    flex: none;
    margin: 0;
    font-size: 20px;
  }
  .view-switcher {
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height: 36px;
    padding: 3px;
    border-radius: 18px;
    background: var(--calendar-card-toolbar-fill);
  }
  .view-switcher-segment {
    height: 30px;
    padding: 0 14px;
    border-radius: 15px;
    background: transparent;
    color: var(--secondary-text-color);
  }
  .view-switcher-segment.icon-only {
    width: 34px;
    padding: 0;
  }
  .view-switcher-segment.selected {
    background: var(--calendar-card-toolbar-selected);
    background-color: var(
      --calendar-card-toolbar-selected-surface,
      var(--calendar-card-toolbar-selected)
    );
    color: var(--primary-text-color);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  }
  .view-switcher-probe {
    display: none;
    --calendar-card-surface-value: var(--calendar-card-toolbar-selected);
    background: var(--calendar-card-toolbar-selected);
  }
  .view-switcher-probe.view-switcher-page {
    background: none;
    background-color: var(--primary-background-color);
  }
  .view-switcher-icon {
    flex: none;
    width: 24px;
    height: 16px;
  }
  .view-switcher-collapsed {
    display: inline-flex;
  }
  .toolbar-button.view-switcher-pill {
    width: 60px;
    gap: 2px;
    padding-block: 0;
    padding-inline: 10px 4px;
  }
  .view-switcher-caret {
    flex: none;
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
  .layout-menu-row .view-switcher-icon {
    color: var(--secondary-text-color);
  }
  .layout-menu-row.selected {
    background: var(--calendar-card-toolbar-fill);
  }
  .layout-menu-row.selected .view-switcher-icon {
    color: var(--primary-text-color);
  }
  .layout-menu-label {
    flex: 1 1 auto;
  }
  .layout-menu-check {
    flex: none;
    width: 20px;
    height: 20px;
    fill: var(--primary-color);
  }
  .toolbar-button::before,
  .view-switcher-segment::before,
  .date-navigation-segment::before,
  .legend-chip::before {
    content: '';
    position: absolute;
    inset: -4px;
  }
  .view-switcher-segment::before {
    inset-block: -7px;
    inset-inline: 0;
  }
  .view-switcher-segment:first-child::before {
    inset-inline-start: -7px;
  }
  .view-switcher-segment:last-child::before {
    inset-inline-end: -7px;
  }
  .legend-chip::before,
  .date-navigation-segment::before {
    inset-block: -10px;
    inset-inline: -2px;
  }
  .date-navigation-segment:first-child::before {
    inset-inline-start: -6px;
  }
  .date-navigation-segment:last-child::before {
    inset-inline-end: -6px;
  }
  .toolbar-month-button::before {
    content: '';
    position: absolute;
    inset-block: -2px -10px;
    inset-inline: 0;
  }
  .toolbar-heading.large-controls > .toolbar-heading-end {
    margin-block-end: calc(var(--calendar-card-heading-middle, 15px) - 16px);
  }
  .large-controls .date-navigation {
    gap: 8px;
    height: 32px;
  }
  .large-controls .date-navigation-segment {
    width: 32px;
    height: 32px;
    border-radius: 16px;
  }
  .large-controls .date-navigation-segment .toolbar-button-icon,
  .large-controls .date-navigation-segment .date-navigation-direction {
    width: 20px;
    height: 20px;
  }
  .large-controls .toolbar-legend {
    margin: -6px -4px;
    margin-block-end: calc(var(--calendar-card-heading-middle, 15px) - 22px);
    padding: 6px 4px;
  }
  .large-controls .legend-chips {
    gap: 8px;
  }
  .large-controls .legend-chip {
    height: 32px;
    padding: 0 14px;
    border-radius: 16px;
  }
  .large-controls .legend-chip::before,
  .large-controls .date-navigation-segment::before,
  .large-controls .date-navigation-segment:first-child::before,
  .large-controls .date-navigation-segment:last-child::before {
    inset-block: -6px;
    inset-inline: -4px;
  }
  .refresh-button.busy .toolbar-button-icon {
    animation: ccp-spin 1s linear infinite;
  }
  .refresh-button.busy.unasked .toolbar-button-icon {
    animation-delay: 150ms;
  }
  .toolbar-button.refresh-button.refresh-done,
  .toolbar-button.reset-button.reset-done,
  .date-navigation .date-navigation-segment.home-done {
    background: color-mix(
      in srgb,
      var(--success-color, #4caf50) 20%,
      var(--calendar-card-toolbar-fill)
    );
  }
  .toolbar-button.refresh-button.refresh-failed {
    background: color-mix(
      in srgb,
      var(--error-color, #db4437) 20%,
      var(--calendar-card-toolbar-fill)
    );
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .toolbar-button.refresh-button.refresh-done,
    .toolbar-button.reset-button.reset-done,
    .date-navigation .date-navigation-segment.home-done,
    .toolbar-button.refresh-button.refresh-failed {
      background: var(--calendar-card-toolbar-fill);
    }
  }
  .refresh-done .toolbar-button-icon,
  .reset-done .toolbar-button-icon,
  .home-done .toolbar-button-icon,
  .refresh-done .loading-indicator-icon {
    fill: var(--success-color, #4caf50);
  }
  .refresh-failed .toolbar-button-icon,
  .refresh-failed .loading-indicator-icon {
    fill: var(--error-color, #db4437);
  }
  .toolbar-button.reset-button.unavailable:not(.reset-done) {
    background: var(--calendar-card-toolbar-fill);
    opacity: 0.38;
    cursor: default;
  }
  .toolbar-button.reset-button.unavailable:not(.alone):not(:focus-visible) {
    visibility: hidden;
    opacity: 0;
    transition:
      opacity 200ms ease,
      visibility 0s linear 200ms;
  }
  @media (prefers-reduced-motion: reduce) {
    .toolbar-button.reset-button.unavailable:not(.alone):not(:focus-visible) {
      transition: none;
    }
  }
  .legend-button {
    position: relative;
  }
  .legend-button.filtered::after {
    content: '';
    position: absolute;
    top: 5px;
    inset-inline-end: 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-color);
    box-shadow: 0 0 0 2px var(--calendar-card-background-color, var(--card-background-color));
  }
  .toolbar-legend {
    flex: 0 1 auto;
    box-sizing: border-box;
    min-width: 0;
    overflow: hidden;
    margin: -10px -4px;
    margin-block-end: calc(var(--calendar-card-heading-middle, 15px) - 22px);
    padding: 10px 4px;
    cursor: default;
  }
  .legend-chips {
    display: flex;
    gap: 5px;
    width: max-content;
  }
  .legend-chip {
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    height: 24px;
    margin: 0;
    padding: 0 12px;
    border: none;
    border-radius: 12px;
    background: color-mix(in srgb, var(--calendar-card-legend-color) 24%, transparent);
    color: var(--primary-text-color);
    font-family: inherit;
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--ha-font-weight-medium, 500);
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .legend-chip.hidden-calendar {
    background: var(--calendar-card-toolbar-fill);
    color: var(--secondary-text-color);
  }
  .legend-chip-label {
    min-width: 0;
    max-width: 14em;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-block: 0.5em;
    margin-block: -0.5em;
  }
  .toolbar-month-text,
  .legend-chip-label,
  .column-date-content .weather,
  .month-day-list-fit {
    padding-inline: var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room));
  }
  .legend-menu,
  .custom-menu,
  .layout-menu {
    position: fixed;
    inset: auto;
    box-sizing: border-box;
    min-width: 200px;
    max-width: calc(100vw - 16px);
    margin: 0;
    padding: 6px;
    overflow: auto;
    border: none;
    border-radius: var(--ha-card-border-radius, 12px);
    background: var(--ha-card-background, var(--card-background-color, #fff));
    background-color: var(
      --calendar-card-legend-menu-surface,
      var(--ha-card-background, var(--card-background-color, #fff))
    );
    color: var(--primary-text-color);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.24);
    font-family: inherit;
    font-size: var(--ha-font-size-m, 14px);
    font-weight: var(--ha-font-weight-normal, 400);
    line-height: 1.4;
  }
  .legend-menu::backdrop,
  .custom-menu::backdrop,
  .layout-menu::backdrop {
    background: transparent;
  }
  .legend-menu-surface,
  .custom-menu-surface,
  .layout-menu-surface {
    display: none;
    --calendar-card-surface-value: var(--ha-card-background, var(--card-background-color, #fff));
    background: var(--ha-card-background, var(--card-background-color, #fff));
  }
  .legend-menu-page,
  .custom-menu-page,
  .layout-menu-page {
    display: none;
    background-color: var(--primary-background-color);
  }
  .legend-menu-list,
  .custom-menu-list,
  .layout-menu-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .legend-menu-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
    margin-block-end: 6px;
  }
  .legend-menu-action {
    box-sizing: border-box;
    min-width: 0;
    min-height: 36px;
    margin: 0;
    padding-block: 4px;
    padding-inline: 12px;
    border: none;
    border-radius: 18px;
    background: var(--calendar-card-toolbar-fill);
    color: var(--primary-text-color);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--ha-font-weight-medium, 500);
    line-height: 1.2;
    text-align: center;
    overflow-wrap: anywhere;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .legend-menu-action.unavailable {
    opacity: 0.38;
    cursor: default;
  }
  .legend-menu-row {
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    min-height: 40px;
    padding-block: 4px;
    padding-inline: 10px 12px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--calendar-card-legend-color) 24%, transparent);
    font-weight: var(--ha-font-weight-medium, 500);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .legend-menu-row.hidden-calendar {
    background: var(--calendar-card-toolbar-fill);
    color: var(--secondary-text-color);
  }
  .legend-menu-check {
    flex: none;
    width: 18px;
    height: 18px;
    margin: 0;
    accent-color: var(--calendar-card-legend-color);
    cursor: pointer;
  }
  .legend-menu-label,
  .custom-menu-label,
  .layout-menu-label {
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .custom-menu-row,
  .layout-menu-row {
    display: flex;
    align-items: center;
    gap: 10px;
    box-sizing: border-box;
    width: 100%;
    min-height: 40px;
    margin: 0;
    padding-block: 4px;
    padding-inline: 10px 12px;
    border: none;
    border-radius: 10px;
    background: transparent;
    color: var(--primary-text-color);
    font-family: inherit;
    font-size: inherit;
    font-weight: var(--ha-font-weight-medium, 500);
    line-height: inherit;
    text-align: start;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  @media (hover: hover) {
    .toolbar-button:hover,
    .view-switcher-segment:not(.selected):hover,
    .date-navigation-segment:hover,
    .custom-menu-row:hover,
    .layout-menu-row:not(.selected):hover,
    .legend-menu-action:not(.unavailable):hover,
    .toolbar-month-button:hover {
      background: var(--calendar-card-toolbar-fill-hover);
    }
  }
  .toolbar-button:active,
  .view-switcher-segment:not(.selected):active,
  .date-navigation-segment:active,
  .custom-menu-row:active,
  .layout-menu-row:not(.selected):active,
  .legend-menu-action:not(.unavailable):active,
  .toolbar-month-button:active {
    background: var(--calendar-card-toolbar-fill-pressed);
  }
  @media (hover: hover) {
    .legend-chip:hover,
    .legend-menu-row:hover {
      background: color-mix(in srgb, var(--calendar-card-legend-color) 34%, transparent);
    }
    .legend-chip.hidden-calendar:hover,
    .legend-menu-row.hidden-calendar:hover {
      background: var(--calendar-card-toolbar-fill-hover);
    }
  }
  .legend-chip:active,
  .legend-menu-row:active {
    background: color-mix(in srgb, var(--calendar-card-legend-color) 44%, transparent);
  }
  .legend-chip.hidden-calendar:active,
  .legend-menu-row.hidden-calendar:active {
    background: var(--calendar-card-toolbar-fill-pressed);
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .legend-chip,
    .legend-menu-row {
      background: rgba(128, 128, 128, 0.24);
      box-shadow: inset 0 0 0 2px var(--calendar-card-legend-color);
    }
    .legend-chip.hidden-calendar,
    .legend-menu-row.hidden-calendar {
      box-shadow: none;
    }
    @media (hover: hover) {
      .legend-chip:hover,
      .legend-menu-row:hover {
        background: rgba(128, 128, 128, 0.34);
      }
    }
    .legend-chip:active,
    .legend-menu-row:active {
      background: rgba(128, 128, 128, 0.44);
    }
  }
  ha-card:has(.toolbar-button:hover) > ha-ripple,
  ha-card:has(.toolbar-month-button:hover) > ha-ripple,
  ha-card:has(.view-switcher:hover) > ha-ripple,
  ha-card:has(.date-navigation:hover) > ha-ripple,
  ha-card:has(.toolbar-legend:hover) > ha-ripple,
  ha-card:has(.legend-menu:hover) > ha-ripple,
  ha-card:has(.custom-menu:hover) > ha-ripple,
  ha-card:has(.layout-menu:hover) > ha-ripple {
    --ha-ripple-hover-opacity: 0;
  }
  .toolbar-button:focus,
  .view-switcher-segment:focus,
  .date-navigation-segment:focus,
  .toolbar-month-button:focus,
  .legend-chip:focus,
  .legend-menu:focus,
  .legend-menu-action:focus,
  .custom-menu:focus,
  .custom-menu-row:focus,
  .layout-menu:focus,
  .layout-menu-row:focus {
    outline: none;
  }
  .toolbar-button:focus-visible,
  .view-switcher-segment:focus-visible,
  .date-navigation-segment:focus-visible,
  .toolbar-month-button:focus-visible,
  .legend-chip:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  .legend-menu-row:has(.legend-menu-check:focus-visible),
  .legend-menu-action:focus-visible,
  .custom-menu-row:focus-visible,
  .layout-menu-row:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
  }
  .week-row-table {
    width: 100%;
    table-layout: fixed;
    padding-inline-start: 8px;
    border-spacing: 0;
    border: none !important;
  }
  .week-number-cell,
  .separator-cell {
    height: 100%;
  }
  .week-number-cell {
    width: var(--calendar-card-date-column-width);
    position: relative;
    text-align: center;
    vertical-align: middle;
    padding-inline-end: 12px;
  }
  .week-number {
    width: 2.5em;
    height: 1.5em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--calendar-card-week-number-font-size);
    font-weight: 500;
    color: var(
      --calendar-card-week-number-color,
      var(
        --calendar-card-week-number-fill-ink,
        var(
          --calendar-card-week-number-ink-floor,
          var(--calendar-card-today-indicator-ink, var(--primary-text-color))
        )
      )
    );
    background-color: var(
      --calendar-card-week-number-bg-color,
      var(--calendar-card-today-indicator-wash, rgba(128, 128, 128, 0.31))
    );
    border-radius: 999px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  @supports (-webkit-touch-callout: none) {
    .week-number {
      padding-top: 0.1em;
    }
  }
  .separator-cell {
    vertical-align: middle;
  }
  .separator-line {
    width: 100%;
    height: var(--separator-border-width, 0);
    background-color: var(--separator-border-color, transparent);
    display: var(--separator-display, none);
  }
  .separator {
    width: 100%;
    margin-inline-start: 8px;
  }
  .week-separator {
    width: 100%;
    margin-inline-start: 8px;
    border-top-style: solid;
  }
  .month-separator {
    width: 100%;
    margin-inline-start: 8px;
    border-top-style: solid;
  }
  .month-separator-labeled {
    display: flex;
    align-items: center;
    column-gap: 8px;
  }
  .month-separator.month-separator-labeled {
    border-top-style: none;
  }
  .month-separator-label {
    flex: 0 1 auto;
    min-width: 0;
    font-size: var(--calendar-card-month-separator-label-font-size);
    font-weight: 500;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }
  .month-separator-line {
    flex: 1 0 1.5em;
    border-top: var(--separator-border-width) solid var(--separator-border-color);
  }
  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
    border-collapse: separate;
    margin-bottom: var(--calendar-card-day-spacing);
  }
  .day-table {
    border: none !important;
  }
  .event-gap-cell {
    height: var(--calendar-card-event-gap);
    padding: 0;
  }
  table:last-of-type {
    margin-bottom: 0;
    border-bottom: 0;
  }
  .date-column {
    width: var(--calendar-card-date-column-width);
    min-width: var(--calendar-card-date-column-width);
    max-width: var(--calendar-card-date-column-width);
    vertical-align: var(--calendar-card-date-column-vertical-alignment);
    text-align: center;
    position: relative;
    padding-inline-start: 8px;
    padding-inline-end: 12px;
  }
  .today-indicator-container:not(.inline) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    --calendar-card-today-indicator-shift: -50%;
  }
  .weekday {
    font-size: var(--calendar-card-font-size-weekday);
    line-height: 1;
    color: var(--calendar-card-color-weekday);
  }
  .day {
    font-size: var(--calendar-card-font-size-day);
    line-height: 1;
    font-weight: 500;
    color: var(--calendar-card-color-day);
  }
  .month {
    font-size: var(--calendar-card-font-size-month);
    line-height: 1;
    text-transform: uppercase;
    color: var(--calendar-card-color-month);
  }
  .day.today-tile {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 1.45em;
    height: 1.2em;
    margin: 0.15em auto;
    border-radius: 0.27em;
    font-variant-numeric: proportional-nums;
    background: var(
      --calendar-card-today-indicator-wash,
      var(--calendar-card-today-indicator-color)
    );
    --calendar-card-today-indicator-ink: var(--text-primary-color, #fff);
  }
  @supports (corner-shape: squircle) {
    .day.today-tile {
      border-radius: 0.456em;
      corner-shape: squircle;
    }
  }
  @supports (text-box: trim-both cap alphabetic) {
    .day.today-tile {
      display: block;
      text-align: center;
      align-content: center;
      text-box: trim-both cap alphabetic;
    }
  }
  @supports (color: color-mix(in oklab, red, blue)) {
    ha-card,
    .day.today-tile {
      --calendar-card-today-indicator-wash: color-mix(
        in oklab,
        var(--calendar-card-today-indicator-color) 25%,
        var(--calendar-card-background-color, var(--card-background-color))
      );
      --calendar-card-today-indicator-ink: color-mix(
        in oklab,
        var(--calendar-card-today-indicator-color) 45%,
        var(--primary-text-color)
      );
    }
  }
  @supports (color: oklch(from red l c h)) and (content-visibility: auto) and
    (width: round(1px, 1px)) {
    ha-card,
    .day.today-tile {
      --calendar-card-today-indicator-wash: oklab(
        from
          color-mix(
            in oklab,
            var(--calendar-card-today-indicator-color) 25%,
            var(--calendar-card-background-color, var(--card-background-color))
          )
          l calc(a * 1.8) calc(b * 1.8)
      );
      --calendar-card-today-indicator-ink: oklab(
        from
          color-mix(
            in oklab,
            oklab(from var(--calendar-card-today-indicator-color) l a b / 1) 45%,
            var(--primary-text-color)
          )
          l calc(a * 2.2) calc(b * 2.2) / 1
      );
    }
    ha-card {
      --calendar-card-week-number-fill-ink: oklab(
        from
          color-mix(
            in oklab,
            oklab(from var(--calendar-card-week-number-fill-source) l a b / 1) 45%,
            var(--primary-text-color)
          )
          l calc(a * 2.2) calc(b * 2.2) / 1
      );
    }
  }
  .today-indicator-container {
    color: var(--calendar-card-today-indicator-color);
    pointer-events: none;
    z-index: 1;
  }
  .today-indicator-container.inline {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  ha-icon.today-indicator {
    --mdc-icon-size: var(--calendar-card-today-indicator-size);
  }
  .today-indicator-container:not(.inline):dir(rtl) {
    --calendar-card-today-indicator-shift: 50%;
  }
  img.today-indicator.image {
    width: var(--calendar-card-today-indicator-size);
    height: auto;
    max-height: var(--calendar-card-today-indicator-size);
    object-fit: contain;
  }
  span.today-indicator.emoji {
    font-size: var(--calendar-card-today-indicator-size);
    line-height: 1;
  }
  ha-icon.today-indicator.pulse {
    animation: pulse-animation 2s infinite ease-in-out;
  }
  .today-indicator-container:not(.inline) ha-icon.today-indicator.pulse {
    animation-name: pulse-animation-placed;
  }
  @media (prefers-reduced-motion: reduce) {
    ha-icon.today-indicator.pulse,
    .today-indicator-container:not(.inline) ha-icon.today-indicator.pulse {
      animation: none;
    }
  }
  ha-icon.today-indicator.glow {
    filter: drop-shadow(
      0 0 calc(var(--calendar-card-today-indicator-size) * 0.5)
        var(--calendar-card-today-indicator-color)
    );
  }
  @keyframes pulse-animation {
    0% {
      transform: scale(0.95);
      opacity: 0.7;
    }
    50% {
      transform: scale(1.1);
      opacity: 1;
    }
    100% {
      transform: scale(0.95);
      opacity: 0.7;
    }
  }
  @keyframes pulse-animation-placed {
    0% {
      transform: translate(var(--calendar-card-today-indicator-shift, -50%), -50%) scale(0.95);
      opacity: 0.7;
    }
    50% {
      transform: translate(var(--calendar-card-today-indicator-shift, -50%), -50%) scale(1.1);
      opacity: 1;
    }
    100% {
      transform: translate(var(--calendar-card-today-indicator-shift, -50%), -50%) scale(0.95);
      opacity: 0.7;
    }
  }
  .date-column .weather,
  .column-date-content .weather {
    font-size: var(--calendar-card-weather-date-font-size, 12px);
    color: var(--calendar-card-weather-date-color, var(--primary-text-color));
  }
  .date-column .weather {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .weather ha-icon {
    margin-inline-end: 1px;
  }
  .date-column .weather ha-icon,
  .column-date-content .weather ha-icon {
    --mdc-icon-size: var(--calendar-card-weather-date-icon-size, 14px);
  }
  .weather-temp-high,
  .weather-temp-low {
    line-height: 1;
    vertical-align: middle;
  }
  .weather-temp-high {
    font-weight: 500;
  }
  .weather-temp-low {
    opacity: 0.8;
  }
  .weather .weather-uv-index {
    line-height: 1;
    vertical-align: middle;
    font-weight: 500;
    margin-inline-start: 2px;
  }
  .column-date-content .weather .weather-temp-high + .weather-uv-index {
    margin-inline-start: 0;
    margin-left: 2px;
  }
  .event-weather .weather-uv-index {
    font-weight: 500;
    margin-inline-start: 2px;
  }
  .summary-row .event-weather-text > span + .weather-uv-index {
    margin-inline-start: 0;
    margin-left: 2px;
  }
  .event {
    padding: var(--calendar-card-event-spacing) 0;
    padding-inline-start: calc(12px + var(--calendar-card-line-width-vertical));
    border-radius: 0;
  }
  td.event,
  .column-events > .event {
    position: relative;
  }
  .event {
    --calendar-card-accent-ink: color-mix(
      in srgb,
      var(--calendar-card-accent-ink-source) 30%,
      var(--primary-text-color)
    );
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .event {
      --calendar-card-accent-ink: var(--primary-text-color);
    }
  }
  @supports (color: color-mix(in oklab, red, blue)) {
    .event {
      --calendar-card-accent-ink: color-mix(
        in oklab,
        var(--calendar-card-accent-ink-source) 45%,
        var(--primary-text-color)
      );
    }
  }
  @supports (color: oklch(from red l c h)) and (content-visibility: auto) and
    (width: round(1px, 1px)) {
    .event {
      --calendar-card-accent-ink: oklab(
        from
          color-mix(in oklab, var(--calendar-card-accent-ink-source) 45%, var(--primary-text-color))
          l calc(a * 2.2) calc(b * 2.2)
      );
    }
  }
  .event-now {
    --calendar-card-now-ink: color-mix(
      in srgb,
      var(--calendar-card-now-color, #34d399) 30%,
      var(--primary-text-color)
    );
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .event-now {
      --calendar-card-now-ink: var(--primary-text-color);
    }
  }
  @supports (color: color-mix(in oklab, red, blue)) {
    .event-now {
      --calendar-card-now-ink: color-mix(
        in oklab,
        var(--calendar-card-now-color, #34d399) 45%,
        var(--primary-text-color)
      );
    }
  }
  @supports (color: oklch(from red l c h)) and (content-visibility: auto) and
    (width: round(1px, 1px)) {
    .event-now {
      --calendar-card-now-ink: oklab(
        from
          color-mix(
            in oklab,
            var(--calendar-card-now-color, #34d399) 45%,
            var(--primary-text-color)
          )
          l calc(a * 2.2) calc(b * 2.2)
      );
    }
  }
  .event-now .time-actual {
    color: var(--calendar-card-now-ink);
  }
  .time .now-time > span:not(.now-indicator) {
    display: inline;
  }
  .time .now-time > span {
    vertical-align: baseline;
  }
  .time .now-indicator {
    --calendar-card-now-gap: 0.35em;
    display: inline-flex;
    align-items: baseline;
    gap: var(--calendar-card-now-gap);
    margin-inline-end: calc(var(--calendar-card-now-gap) - 0.0675em);
    font-weight: 600;
    overflow-wrap: anywhere;
  }
  .time .now-indicator::after {
    content: '';
    flex: none;
    align-self: center;
    width: 0.2em;
    height: 0.2em;
    border-radius: 50%;
    background: currentColor;
  }
  .event-first {
    border-start-start-radius: var(--calendar-card-event-accent-side-radius, 0px);
    border-start-end-radius: var(--calendar-card-event-border-radius);
  }
  .event-last {
    border-end-start-radius: var(--calendar-card-event-accent-side-radius, 0px);
    border-end-end-radius: var(--calendar-card-event-border-radius);
  }
  .with-event-gap .event {
    border-start-start-radius: var(--calendar-card-event-accent-side-radius, 0px);
    border-start-end-radius: var(--calendar-card-event-border-radius);
    border-end-end-radius: var(--calendar-card-event-border-radius);
    border-end-start-radius: var(--calendar-card-event-accent-side-radius, 0px);
  }
  .event-accent-bar {
    --calendar-card-event-accent-bar-corner-inset: max(
      var(--calendar-card-event-accent-bar-inset, 2px),
      calc(var(--calendar-card-event-accent-side-radius, 0px) - 4px)
    );
    position: absolute;
    inset-inline-start: var(--calendar-card-event-accent-bar-inset, 0px);
    inset-block-start: var(--calendar-card-event-accent-bar-inset, 0px);
    inset-block-end: var(--calendar-card-event-accent-bar-inset, -1px);
    width: 0;
    border-inline-start: var(--calendar-card-line-width-vertical) solid
      var(--calendar-card-event-accent-bar-color);
    border-radius: calc(var(--calendar-card-event-accent-bar-inset, 0px) * 999);
    pointer-events: none;
  }
  .event-first > .event-accent-bar {
    inset-block-start: var(--calendar-card-event-accent-bar-corner-inset);
    border-start-start-radius: 999px;
    border-start-end-radius: 999px;
  }
  .event-last > .event-accent-bar {
    inset-block-end: var(--calendar-card-event-accent-bar-corner-inset);
    border-end-start-radius: 999px;
    border-end-end-radius: 999px;
  }
  .with-event-gap .event > .event-accent-bar {
    inset-block: var(--calendar-card-event-accent-bar-corner-inset);
    border-radius: 999px;
  }
  .past-event .event-content {
    opacity: var(--calendar-card-past-event-opacity, 0.6);
  }
  .grid-banner.past-event .grid-banner-title,
  .grid-banner.past-event .grid-banner-time {
    opacity: var(--calendar-card-past-event-opacity, 0.6);
  }
  .event-content {
    display: flex;
    flex-direction: column;
  }
  td.event .event-content:has(> .time-location > *),
  .column-events > .event > .event-content:has(> .time-location > *) {
    --calendar-card-event-ink-shift: 0.13em;
  }
  td.event .event-content:has(> .time-location > *) > .summary-row > .summary,
  .column-events > .event > .event-content:has(> .time-location > *) > .summary-row > .summary {
    padding-top: calc(
      0.2em - var(--calendar-card-event-ink-shift) + var(--calendar-card-summary-ink-room, 0px)
    );
    margin-top: calc(-1 * var(--calendar-card-summary-ink-room, 0px));
  }
  td.event .event-content:has(> .time-location > *)::after,
  .column-events > .event > .event-content:has(> .time-location > *)::after {
    content: '';
    flex: none;
    height: var(--calendar-card-event-ink-shift);
    font-size: var(--calendar-card-font-size-event);
  }
  .summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .summary {
    flex: 1;
    overflow: hidden;
    overflow-wrap: break-word;
    font-size: var(--calendar-card-font-size-event);
    line-height: 1.2;
    padding-block: calc(0.2em + var(--calendar-card-summary-ink-room, 0px)) 0.2em;
    margin-top: calc(-1 * var(--calendar-card-summary-ink-room, 0px));
    --calendar-card-summary-inline-room: var(--calendar-card-inline-room);
    padding-inline: var(--calendar-card-summary-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-summary-inline-room));
    -webkit-line-clamp: var(--calendar-card-title-max-lines);
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .summary {
      overflow-x: clip;
      overflow-y: visible;
      min-width: 0;
    }
  }
  .summary:not(:only-child) {
    margin-inline-end: calc(12px - var(--calendar-card-summary-inline-room));
  }
  .summary-row:dir(rtl) > .summary[dir='ltr'],
  .summary-row:dir(ltr) > .summary[dir='rtl'] {
    flex: 0 1 auto;
  }
  .summary-row:dir(rtl) > .summary[dir='ltr']:not(:only-child),
  .summary-row:dir(ltr) > .summary[dir='rtl']:not(:only-child) {
    margin-inline-end: calc(-1 * var(--calendar-card-summary-inline-room));
    margin-inline-start: calc(12px - var(--calendar-card-summary-inline-room));
  }
  .event-title {
    font-weight: 500;
    line-height: 1.2;
    color: var(--calendar-card-color-event);
    padding-bottom: 2px;
    text-indent: 0;
    display: var(--calendar-card-title-display);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--calendar-card-title-max-lines);
    overflow: hidden;
    padding-top: var(--calendar-card-title-ink-room, 0px);
    margin-top: calc(-1 * var(--calendar-card-title-ink-room, 0px));
    padding-inline: var(--calendar-card-title-inline-room, 0px);
    margin-inline: calc(-1 * var(--calendar-card-title-inline-room, 0px));
  }
  .summary:not(.summary-scroll):has(> .event-title:not(:only-child)) {
    display: var(--calendar-card-title-display);
    -webkit-box-orient: vertical;
    --calendar-card-summary-ink-room: min(var(--calendar-card-title-ink-room), 0.25em);
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .summary:not(.summary-scroll):has(> .event-title:not(:only-child)) {
      overflow-y: var(--calendar-card-title-overflow);
    }
  }
  .summary:not(.summary-scroll):has(> .event-title:not(:only-child)) > .event-title {
    display: inline;
    --calendar-card-title-ink-room: 0px;
    --calendar-card-title-inline-room: 0px;
  }
  td.event
    .event-content
    > .summary-row:not(.title-wrap)
    > .summary:not(.summary-scroll):has(> .event-title:not(:only-child)),
  .column-events
    > .event
    > .event-content
    > .summary-row:not(.title-wrap)
    > .summary:not(.summary-scroll):has(> .event-title:not(:only-child)) {
    padding-bottom: calc(0.2em - var(--calendar-card-summary-end-margin, 0px));
    margin-bottom: var(--calendar-card-summary-end-margin, 0px);
  }
  td.event
    .event-content
    > .summary-row:not(.title-wrap)
    > .summary:not(.summary-scroll)
    > .event-title:only-child,
  .column-events
    > .event
    > .event-content
    > .summary-row:not(.title-wrap)
    > .summary:not(.summary-scroll)
    > .event-title:only-child {
    padding-bottom: calc(2px - var(--calendar-card-title-end-margin, 0px));
    margin-bottom: var(--calendar-card-title-end-margin, 0px);
  }
  .summary[data-title-unhyphenated] > .event-title {
    hyphens: none;
  }
  .summary:has(> .label-icon) > .event-title,
  .summary:has(> .label-image) > .event-title,
  .summary:has(> .label-icon) > .calendar-label,
  .summary:has(> .label-image) > .calendar-label {
    vertical-align: middle;
  }
  .summary:has(> .label-icon),
  .summary:has(> .label-image) {
    text-indent: calc(-1 * (1em + 4px));
    padding-inline-start: calc(1em + 4px + var(--calendar-card-summary-inline-room));
  }
  .summary:has(> .label-emoji) {
    text-indent: calc(-1 * (1.25em + 4px));
    padding-inline-start: calc(1.25em + 4px + var(--calendar-card-summary-inline-room));
  }
  .summary-scroll {
    display: flex;
    align-items: center;
    min-width: 0;
  }
  .summary-scroll[data-scroll-labels] > :not(.event-title) {
    flex-shrink: 0;
    white-space: nowrap;
  }
  .summary.summary-scroll:has(> .label-icon),
  .summary.summary-scroll:has(> .label-image),
  .summary.summary-scroll:has(> .label-emoji) {
    text-indent: 0;
    padding-inline-start: var(--calendar-card-summary-inline-room);
  }
  .summary-scroll > .event-title.title-scrollable {
    flex: 1 1 auto;
    min-width: 0;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    --calendar-card-title-ink-room: 0px;
    --calendar-card-title-inline-room: var(--calendar-card-inline-room);
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .summary-scroll > .event-title.title-scrollable {
      overflow-x: clip;
      overflow-y: visible;
    }
  }
  .summary-scroll:dir(rtl) > .event-title.title-scrollable[dir='ltr'],
  .summary-scroll:dir(ltr) > .event-title.title-scrollable[dir='rtl'] {
    flex: 0 1 auto;
  }
  @supports not selector(:dir(ltr)) {
    .summary-scroll > .event-title.title-scrollable[dir] {
      direction: inherit;
    }
  }
  .summary-scroll:has(> :not(.event-title)) > .event-title {
    padding-bottom: 0;
  }
  .event-title.title-scrollable .event-title-scroll {
    display: inline;
  }
  @media (prefers-reduced-motion: no-preference) {
    .event-title.title-scrollable.title-overflowing {
      text-overflow: clip;
    }
    .event-title.title-scrollable.title-overflowing .event-title-scroll {
      display: inline-block;
      animation: calendar-card-title-scroll var(--calendar-card-title-scroll-duration, 8s) linear
        infinite;
      will-change: transform;
    }
    .event-title.title-scrollable[data-title-motion='pending'] {
      text-overflow: ellipsis;
    }
    .event-title.title-scrollable[data-title-motion='pending'] .event-title-scroll {
      display: inline;
      animation: none;
      transform: none;
      will-change: auto;
    }
    .event-title.title-scrollable.title-overflowing[data-title-motion='a'] .event-title-scroll,
    .event-title.title-scrollable.title-overflowing[data-title-motion='b'] .event-title-scroll {
      animation-duration: var(--calendar-card-title-cohort-period);
      animation-timing-function: var(--calendar-card-title-cohort-curve);
    }
    .event-title.title-scrollable.title-overflowing[data-title-motion='a'] .event-title-scroll {
      animation-name: calendar-card-title-cohort-a;
    }
    .event-title.title-scrollable.title-overflowing[data-title-motion='b'] .event-title-scroll {
      animation-name: calendar-card-title-cohort-b;
    }
  }
  @keyframes calendar-card-title-scroll {
    0%,
    15% {
      transform: translateX(0);
    }
    85%,
    100% {
      transform: translateX(
        calc(
          var(--calendar-card-title-scroll-direction, -1) *
            var(--calendar-card-title-scroll-distance, 0px)
        )
      );
    }
  }
  @keyframes calendar-card-title-cohort-a {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(
        calc(
          var(--calendar-card-title-scroll-direction, -1) *
            var(--calendar-card-title-scroll-distance, 0px)
        )
      );
    }
  }
  @keyframes calendar-card-title-cohort-b {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(
        calc(
          var(--calendar-card-title-scroll-direction, -1) *
            var(--calendar-card-title-scroll-distance, 0px)
        )
      );
    }
  }
  :host(.calendar-card-title-scroll-paused)
    .event-title.title-scrollable.title-overflowing
    .event-title-scroll {
    animation-play-state: paused;
  }
  .calendar-label {
    display: inline;
    margin-inline-end: 4px;
  }
  .calendar-label {
    unicode-bidi: plaintext;
  }
  .calendar-label::after {
    content: '\\200B';
  }
  .label-icon {
    --mdc-icon-size: 1em;
    vertical-align: middle;
    margin-inline-end: 4px;
  }
  .label-image {
    height: 1em;
    width: auto;
    vertical-align: middle;
    margin-inline-end: 4px;
  }
  .event-weather {
    display: flex;
    align-items: center;
    font-weight: 500;
    margin-inline-start: 8px;
    margin-inline-end: 12px;
  }
  .weather-stale .weather,
  .weather-stale .event-weather {
    opacity: 0.5;
  }
  .event-weather ha-icon {
    margin-inline-end: 2px;
    --mdc-icon-size: var(--calendar-card-weather-event-icon-size, 14px);
    color: var(--calendar-card-weather-event-color, var(--secondary-text-color));
  }
  .event-text-scaled :where(.summary-row, .title-aside) > .event-weather ha-icon {
    --mdc-icon-size: var(
      --calendar-card-weather-event-title-icon-size,
      var(--calendar-card-weather-event-icon-size, 14px)
    );
  }
  .event-weather .event-weather-text {
    color: var(--calendar-card-weather-event-color, var(--secondary-text-color));
  }
  :where(.summary-row) > .event-weather > .event-weather-text {
    font-size: var(--calendar-card-weather-event-font-size, 12px);
  }
  .time-location {
    display: flex;
    flex-direction: column;
    margin-top: 0;
  }
  .time,
  .location,
  .description {
    display: flex;
    align-items: var(--calendar-card-event-icon-vertical-alignment);
    line-height: 1.2;
    margin-top: 2px;
    margin-inline-end: 12px;
  }
  td.event .time-location > :first-child,
  .column-events > .event .time-location > :first-child,
  .grid-event .time-location > :first-child {
    margin-top: 0;
  }
  .time span,
  .location span,
  .description span {
    display: inline-block;
    vertical-align: middle;
    overflow-wrap: break-word;
  }
  .time {
    font-size: var(--calendar-card-font-size-time);
    color: var(--calendar-card-color-time);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    row-gap: 2px;
    column-gap: 8px;
  }
  .time-actual {
    display: flex;
    align-items: var(--calendar-card-event-icon-vertical-alignment);
  }
  .time .time-actual:has(.allday-badge) {
    align-items: center;
    min-width: 0;
  }
  .time .time-actual .time-text {
    min-width: 0;
    flex: 1 1 auto;
  }
  .time .time-actual .time-text > span {
    display: var(--calendar-card-time-display);
    vertical-align: baseline;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--calendar-card-time-max-lines);
    overflow: hidden;
    padding-top: var(--calendar-card-time-ink-room, 0px);
    margin-top: calc(-1 * var(--calendar-card-time-ink-room, 0px));
    padding-inline: var(--calendar-card-time-inline-room, 0px);
    margin-inline: calc(-1 * var(--calendar-card-time-inline-room, 0px));
  }
  .time .time-actual .time-text > .time-countdown {
    display: inline;
    -webkit-line-clamp: none;
    overflow: visible;
    padding-top: 0;
    margin-top: 0;
    padding-inline: 0;
    margin-inline-start: 4px;
    margin-inline-end: 0;
    white-space: normal;
    unicode-bidi: isolate;
  }
  .time .time-actual .time-text > .time-countdown::before {
    content: '\\2060·\\200B';
    margin-inline-end: 4px;
    unicode-bidi: isolate;
  }
  .time .time-actual .allday-badge + .time-text > .time-countdown:first-child {
    margin-inline-start: 0;
  }
  .time-countdown {
    text-align: right;
    color: var(--calendar-card-color-time);
    margin-inline-start: auto;
    margin-inline-end: 12px;
    white-space: nowrap;
    hyphens: manual;
  }
  td.event .time-location > .time > .time-countdown {
    flex-shrink: 0;
    max-width: 100%;
    white-space: normal;
    overflow-wrap: break-word;
    text-align: end;
  }
  .location {
    font-size: var(--calendar-card-font-size-location);
    color: var(--calendar-card-color-location);
  }
  .description {
    font-size: var(--calendar-card-font-size-description);
    color: var(--calendar-card-color-description);
  }
  .time-beside-title > .summary-row {
    align-items: baseline;
  }
  .time-beside-title > .summary-row > .summary-scroll > .event-title {
    align-self: baseline;
  }
  .time-beside-title > .summary-row > .title-aside {
    display: flex;
    align-items: baseline;
    flex: none;
    max-width: calc(60% - 12px);
    min-width: min-content;
  }
  :where(.title-aside) > .event-weather > .event-weather-text {
    font-size: var(--calendar-card-weather-event-font-size, 12px);
    align-self: baseline;
  }
  .time-beside-title .summary-row .title-aside > .event-weather {
    margin-inline-end: 0;
  }
  .time-beside-title .summary-row .title-aside > .event-weather + .time::before {
    content: '·';
    margin-inline: 4px;
  }
  .time-beside-title .summary-row .title-aside > .time {
    width: auto;
    margin-top: 0;
    padding-inline-start: 0;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: baseline;
    column-gap: 0;
    text-align: end;
  }
  .time-beside-title .summary-row .title-aside > .time > .time-actual {
    margin-inline-start: 0;
    justify-content: flex-end;
  }
  .time-beside-title .summary-row .title-aside > .time .now-indicator {
    overflow-wrap: normal;
  }
  .time-beside-title
    .summary-row
    .title-aside
    .time-text
    > .time-countdown
    > .time-countdown-words {
    display: inline-block;
    vertical-align: baseline;
  }
  .time-beside-title .summary-row .title-aside > .time > .time-countdown {
    margin-inline: 0;
    text-align: end;
    white-space: normal;
  }
  .time-beside-title .summary-row .title-aside > .time > .time-countdown::before {
    content: none;
  }
  .time-beside-title > .summary-row.title-wrap {
    display: block;
    position: relative;
    width: auto;
    margin-inline-end: 12px;
    --calendar-card-title-room-gap: 12px;
  }
  .time-beside-title > .summary-row.title-wrap > .summary:not(.summary-scroll) {
    display: flow-root;
    margin-inline: calc(-1 * var(--calendar-card-summary-inline-room));
    --calendar-card-summary-ink-room: 0px;
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .time-beside-title > .summary-row.title-wrap > .summary:not(.summary-scroll) {
      overflow-y: visible;
    }
  }
  .time-beside-title > .summary-row.title-wrap > .summary > .event-title {
    display: inline;
    --calendar-card-title-ink-room: 0px;
    --calendar-card-title-inline-room: 0px;
  }
  .time-beside-title > .summary-row.title-wrap > .summary > .title-room {
    display: none;
  }
  .time-beside-title > .summary-row.title-wrap[data-title-fit] > .summary > .title-room {
    display: block;
    width: var(--calendar-card-title-room-width);
    height: var(--calendar-card-title-room-height);
  }
  .time-beside-title > .summary-row.title-wrap[data-title-fit='ltr'] > .summary > .title-room {
    float: right;
    margin-left: var(--calendar-card-title-room-gap);
  }
  .time-beside-title > .summary-row.title-wrap[data-title-fit='rtl'] > .summary > .title-room {
    float: left;
    margin-right: var(--calendar-card-title-room-gap);
  }
  .time-beside-title > .summary-row.title-wrap > .title-aside {
    display: flex;
    align-items: baseline;
    width: max-content;
    max-width: calc(
      100% - 2 * var(--calendar-card-title-row-room, 0px) - var(--calendar-card-title-room-gap)
    );
    margin-inline-start: auto;
    line-height: 1.2;
  }
  .time-beside-title > .summary-row.title-wrap > .title-aside > .title-strut {
    font-size: var(--calendar-card-font-size-event);
  }
  .time-beside-title > .summary-row.title-wrap > .title-aside > .time {
    margin-inline-end: 0;
  }
  .time-beside-title .summary-row .title-aside > .time > .time-actual > .allday-badge:last-child {
    margin-inline-end: 0;
  }
  .time-beside-title > .summary-row.title-wrap[data-title-fit] > .title-aside {
    position: absolute;
    top: calc(100% - var(--calendar-card-title-pad) - var(--calendar-card-title-room-height));
  }
  .time-beside-title > .summary-row.title-wrap[data-title-fit='ltr'] > .title-aside {
    right: var(--calendar-card-title-row-room, 0px);
  }
  .time-beside-title > .summary-row.title-wrap[data-title-fit='rtl'] > .title-aside {
    left: var(--calendar-card-title-row-room, 0px);
  }
  .time-beside-title > .summary-row.title-wrap[data-title-cut=''] {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--calendar-card-title-max-lines);
    overflow: hidden;
    margin-bottom: var(--calendar-card-title-pad);
    padding-top: 0.375em;
    margin-top: -0.375em;
    padding-inline: var(--calendar-card-event-row-room);
    margin-inline: calc(-1 * var(--calendar-card-event-row-room))
      calc(12px - var(--calendar-card-event-row-room));
    --calendar-card-title-row-room: var(--calendar-card-event-row-room);
  }
  .time-beside-title > .summary-row.title-wrap[data-title-cut=''] > .summary:not(.summary-scroll) {
    display: block;
    overflow: visible;
    padding-bottom: 0;
    --calendar-card-summary-inline-room: 0px;
  }
  .time-beside-title > .summary-row.title-wrap[data-title-cut=''] > .summary::before {
    content: '';
    width: calc(var(--calendar-card-title-room-width) + var(--calendar-card-title-room-gap));
    height: var(--calendar-card-title-cut-end);
    shape-outside: inset(var(--calendar-card-title-cut-start) 0 0 0);
  }
  .time-beside-title
    > .summary-row.title-wrap[data-title-fit='ltr'][data-title-cut='']
    > .summary::before {
    float: right;
  }
  .time-beside-title
    > .summary-row.title-wrap[data-title-fit='rtl'][data-title-cut='']
    > .summary::before {
    float: left;
  }
  .time-beside-title > .summary-row.title-wrap[data-title-cut] > .summary > .title-room {
    display: none;
  }
  .time-beside-title > .summary-row.title-wrap[data-title-cut=''] > .title-aside {
    top: calc(100% - var(--calendar-card-title-room-height));
  }
  .time-beside-title > .summary-row.title-wrap[data-title-cut='below'] {
    padding-bottom: var(--calendar-card-title-cut-below);
  }
  .time-beside-title
    > .summary-row.title-wrap[data-title-cut='below']
    > .summary:not(.summary-scroll) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--calendar-card-title-max-lines);
    padding-bottom: 0;
    overflow-y: hidden;
    --calendar-card-summary-ink-room: 0.25em;
  }
  .event-link {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: from-font;
    text-underline-offset: 0.15em;
  }
  .event-link:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 0;
    border-radius: 2px;
  }
  .location span:has(> .event-link:focus-visible),
  .description span:has(> .event-link:focus-visible) {
    -webkit-line-clamp: none;
  }
  ha-card:has(.event-link:hover, .event-link:active, .event-link:focus-visible) > ha-ripple {
    --ha-ripple-hover-opacity: 0;
    --ha-ripple-pressed-opacity: 0;
  }
  .allday-badge,
  .allday-title-pill {
    --badge-ink: color-mix(
      in srgb,
      var(--calendar-card-event-accent) 30%,
      var(--primary-text-color)
    );
    --badge-wash: color-mix(
      in srgb,
      var(--calendar-card-event-accent) 10%,
      var(--calendar-card-background-color, var(--card-background-color))
    );
    --badge-solid: var(--calendar-card-event-accent);
    display: inline-block;
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-radius: 999px;
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .allday-badge,
    .allday-title-pill {
      --badge-ink: var(--primary-text-color);
      --badge-wash: rgba(128, 128, 128, 0.1);
    }
  }
  .allday-pill-tinted {
    color: var(--badge-ink);
    background-color: var(--badge-wash);
    box-shadow: inset 0 0 0 1px var(--badge-solid);
  }
  .allday-badge {
    font-size: 0.85em;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.05;
    padding-block: 0.193em 0.127em;
    padding-inline: 0.5em;
    margin-inline-end: 5px;
  }
  .allday-title-pill {
    font-size: 0.95em;
    line-height: 1.16;
    padding-block: 0.21em;
    padding-inline: 0.55em;
    font-weight: 400;
    vertical-align: middle;
    margin-block: -0.17em;
  }
  @supports (text-box-trim: trim-both) and (text-box-edge: cap alphabetic) {
    .allday-badge {
      text-box-trim: trim-both;
      text-box-edge: cap alphabetic;
      padding-block: 0.3295em;
    }
  }
  .allday-pill-subtle {
    color: var(--badge-ink);
    background-color: var(--badge-wash);
    box-shadow: none;
  }
  .allday-pill-outline {
    color: var(--badge-solid);
    background-color: transparent;
    box-shadow: inset 0 0 0 1px currentColor;
  }
  .allday-pill-filled {
    color: var(--calendar-card-background-color, var(--card-background-color));
    background-color: color-mix(
      in srgb,
      var(--badge-solid) 85%,
      var(--calendar-card-background-color, var(--card-background-color))
    );
    box-shadow: none;
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .allday-pill-filled {
      background-color: var(--badge-solid);
    }
  }
  @supports (color: color-mix(in oklab, red, blue)) {
    .allday-badge,
    .allday-title-pill {
      --badge-ink: color-mix(
        in oklab,
        var(--calendar-card-event-accent) 45%,
        var(--primary-text-color)
      );
      --badge-wash: color-mix(
        in oklab,
        var(--calendar-card-event-accent) 14%,
        var(--calendar-card-background-color, var(--card-background-color))
      );
    }
  }
  @supports (color: oklch(from red l c h)) and (content-visibility: auto) and
    (width: round(1px, 1px)) {
    .allday-badge,
    .allday-title-pill {
      --badge-ink: oklab(
        from color-mix(in oklab, var(--calendar-card-event-accent) 45%, var(--primary-text-color)) l
          calc(a * 2.2) calc(b * 2.2)
      );
      --badge-wash: oklab(
        from
          color-mix(
            in oklab,
            var(--calendar-card-event-accent) 14%,
            var(--calendar-card-background-color, var(--card-background-color))
          )
          l calc(a * 1.8) calc(b * 1.8)
      );
    }
  }
  @supports (color: oklch(from red l c h)) and (content-visibility: auto) and
    (width: round(1px, 1px)) {
    .allday-pill-filled {
      color: oklch(from var(--badge-solid) clamp(0, calc((l - 0.55) * -1000), 1) 0 h);
      background-color: var(--badge-solid);
    }
  }
  .allday-badge.allday-source-text,
  .allday-title-pill.allday-source-text {
    --badge-ink: var(--badge-source);
    --badge-wash: color-mix(in srgb, var(--badge-source) 14%, transparent);
    --badge-solid: var(--badge-source);
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .allday-badge.allday-source-text,
    .allday-title-pill.allday-source-text {
      --badge-wash: rgba(128, 128, 128, 0.26);
    }
  }
  .time-location .event-weather {
    display: flex;
    flex-wrap: nowrap;
    row-gap: 2px;
    align-items: var(--calendar-card-event-icon-vertical-alignment);
    font-size: var(--calendar-card-weather-event-font-size, 12px);
    line-height: 1.2;
    font-weight: normal;
    margin-top: 2px;
    margin-inline-start: 0;
    margin-inline-end: 12px;
    padding-inline-start: calc(var(--calendar-card-weather-event-icon-size, 14px) + 4px);
  }
  .time-location .event-weather ha-icon {
    margin-inline-end: 4px;
    margin-inline-start: calc(-1 * (var(--calendar-card-weather-event-icon-size, 14px) + 4px));
    color: var(--calendar-card-weather-event-color, var(--secondary-text-color));
  }
  .time-location .event-weather .event-weather-text {
    min-width: 0;
    flex: 1 1 auto;
    color: var(--calendar-card-weather-event-color, var(--secondary-text-color));
    overflow-wrap: break-word;
  }
  .time-location .event-weather .weather-condition {
    display: var(--calendar-card-weather-event-condition-display);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--calendar-card-weather-event-max-lines);
    overflow: hidden;
    hyphens: manual;
    vertical-align: top;
    padding-inline: var(--calendar-card-weather-condition-inline-room, 0px);
    margin-inline: calc(-1 * var(--calendar-card-weather-condition-inline-room, 0px));
  }
  .time-location .event-weather .event-weather-text > span + span::before {
    content: '\\2060·\\200B';
    margin-inline-start: 4px;
    margin-inline-end: 4px;
  }
  .time-location .event-weather:dir(rtl) .event-weather-text > span + span::before {
    unicode-bidi: isolate;
  }
  .event-weather:dir(rtl) .event-weather-text > span {
    unicode-bidi: isolate;
  }
  .time-location .event-weather .weather-uv-index {
    margin-inline-start: 0;
    font-weight: normal;
  }
  .description span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--calendar-card-description-max-lines);
    overflow: hidden;
  }
  .time .time-actual > span:not(.time-text):not(.allday-badge):not(.now-time) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--calendar-card-time-max-lines);
    overflow: hidden;
  }
  .location span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: var(--calendar-card-location-max-lines);
    overflow: hidden;
  }
  .time .time-actual > span:not(.time-text):not(.allday-badge):not(.now-time),
  .location span,
  .description span {
    padding-top: 0.375em;
    margin-top: -0.375em;
    padding-inline: var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room));
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .time .time-actual > span:not(.time-text):not(.allday-badge):not(.now-time) {
      overflow-x: clip;
      overflow-y: var(--calendar-card-time-overflow);
      min-width: 0;
    }
    .location span {
      overflow-x: clip;
      overflow-y: var(--calendar-card-location-overflow);
      min-width: 0;
    }
    .description span {
      overflow-x: clip;
      overflow-y: var(--calendar-card-description-overflow);
      min-width: 0;
    }
  }
  .progress-bar {
    width: var(--calendar-card-progress-bar-width, 60px);
    height: var(--calendar-card-progress-bar-height);
    background-color: color-mix(in srgb, var(--calendar-card-progress-bar-color) 20%, transparent);
    border-radius: 999px;
    overflow: hidden;
    margin-inline-start: auto;
    margin-inline-end: 12px;
  }
  .progress-bar-row {
    width: var(--calendar-card-progress-bar-width, 80%);
    margin-inline-start: 0;
    margin-top: 2px;
    font-size: var(--calendar-card-font-size-time);
  }
  .progress-bar-filled {
    height: 100%;
    background-color: var(--calendar-card-progress-bar-color);
    border-start-start-radius: 999px;
    border-end-start-radius: 999px;
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .progress-bar {
      background-color: rgba(128, 128, 128, 0.2);
    }
  }
  ha-icon {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    position: relative;
    vertical-align: top;
    top: 0;
    margin-inline-end: 4px;
  }
  .time ha-icon {
    --mdc-icon-size: var(--calendar-card-icon-size-time, 14px);
  }
  .location ha-icon {
    --mdc-icon-size: var(--calendar-card-icon-size-location, 14px);
  }
  .description ha-icon {
    --mdc-icon-size: var(--calendar-card-icon-size-description, 14px);
  }
  .loading,
  .error {
    text-align: center;
    padding: 16px;
  }
  .error {
    color: var(--error-color);
  }
  .fetch-error {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin: 8px 0 0;
    margin-inline-start: 8px;
    color: var(--error-color);
    font-size: 12px;
    line-height: 16px;
  }
  .calendar-card-pro.column-view .fetch-error,
  .calendar-card-pro.grid-view .fetch-error {
    margin-inline-start: 0;
  }
  .fetch-error-icon {
    flex: none;
    --mdc-icon-size: 1.25em;
  }
  .fetch-error-text {
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .event-interactive {
    cursor: pointer;
  }
  @media (hover: hover) {
    .event-interactive:hover {
      box-shadow: inset 0 0 0 100vmax
        color-mix(in srgb, var(--ha-ripple-hover-color) 8%, transparent);
    }
  }
  .event-interactive:active {
    box-shadow: inset 0 0 0 100vmax
      color-mix(in srgb, var(--ha-ripple-pressed-color) 16%, transparent);
  }
  @supports (content-visibility: auto) {
    @media (hover: hover) {
      .event-interactive:hover {
        box-shadow: inset 0 0 0 100vmax
          var(
            --calendar-card-event-wash-hover,
            color-mix(in srgb, var(--ha-ripple-hover-color) 8%, transparent)
          );
      }
    }
    .event-interactive:active {
      box-shadow: inset 0 0 0 100vmax
        var(
          --calendar-card-event-wash-pressed,
          color-mix(in srgb, var(--ha-ripple-pressed-color) 16%, transparent)
        );
    }
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    @media (hover: hover) {
      .event-interactive:hover {
        box-shadow: inset 0 0 0 100vmax rgba(128, 128, 128, 0.08);
      }
    }
    .event-interactive:active {
      box-shadow: inset 0 0 0 100vmax rgba(128, 128, 128, 0.16);
    }
  }
  .event-interactive:focus {
    outline: none;
  }
  .event-interactive:focus-visible {
    outline: 2px solid var(--calendar-card-line-color-vertical);
    outline-offset: -2px;
  }
  .column-events > .event-interactive:focus-visible {
    outline: none;
  }
  .column-events > .event-interactive:focus-visible::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    outline: 2px solid var(--calendar-card-line-color-vertical);
    outline-offset: -2px;
    pointer-events: none;
  }
  td.event.search-ring::after,
  .column-events > .event.search-ring::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
  }
  td.event.search-ring::after,
  .column-events > .event.search-ring::after,
  .grid-event.search-ring,
  .grid-banner.search-ring {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
    animation: ccp-search-ring 2s ease-out forwards;
  }
  .column-events > .event.search-ring:focus-visible::after,
  .grid-event.search-ring:focus-visible,
  .grid-banner.search-ring:focus-visible {
    animation-name: ccp-search-ring-to-focus;
  }
  @keyframes ccp-search-ring {
    75% {
      outline-color: var(--primary-color);
    }
    100% {
      outline-color: transparent;
    }
  }
  @keyframes ccp-search-ring-to-focus {
    75% {
      outline-color: var(--primary-color);
    }
    100% {
      outline-color: var(--calendar-card-line-color-vertical);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    td.event.search-ring::after,
    .column-events > .event.search-ring::after,
    .column-events > .event.search-ring:focus-visible::after,
    .grid-event.search-ring,
    .grid-event.search-ring:focus-visible,
    .grid-banner.search-ring,
    .grid-banner.search-ring:focus-visible {
      animation: none;
    }
  }
  ha-card:has(.event-interactive:hover, .event-interactive:active, .event-interactive:focus-visible)
    > ha-ripple {
    --ha-ripple-hover-opacity: 0;
    --ha-ripple-pressed-opacity: 0;
  }
  ha-card[data-own-press] > ha-ripple {
    --ha-ripple-pressed-opacity: 0;
  }
  .event-tappable {
    position: relative;
    isolation: isolate;
  }
  .event-button,
  .event-button::before,
  .event-button::after {
    border-radius: inherit;
  }
  .event-button::before,
  .event-button::after {
    content: '';
    position: absolute;
    inset: 0;
  }
  .event-button::before {
    z-index: -1;
  }
  .event-button::after {
    pointer-events: none;
  }
  @media (hover: hover) {
    .event-button.event-interactive:hover {
      box-shadow: none;
    }
    .event-button:hover::before {
      background-color: var(
        --calendar-card-event-wash-hover,
        color-mix(in srgb, var(--ha-ripple-hover-color) 8%, transparent)
      );
    }
  }
  .event-button.event-interactive:active {
    box-shadow: none;
  }
  .event-button:active::before {
    background-color: var(
      --calendar-card-event-wash-pressed,
      color-mix(in srgb, var(--ha-ripple-pressed-color) 16%, transparent)
    );
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    @media (hover: hover) {
      .event-button:hover::before {
        background-color: rgba(128, 128, 128, 0.08);
      }
    }
    .event-button:active::before {
      background-color: rgba(128, 128, 128, 0.16);
    }
  }
  .event-button.event-interactive:focus-visible {
    outline: none;
  }
  .event-button:focus-visible::after {
    outline: 2px solid var(--calendar-card-line-color-vertical);
    outline-offset: -2px;
  }
  .date-column:has(> .day-add-button),
  .day-add-button {
    cursor: pointer;
  }
  @media (hover: hover) {
    .date-column:has(> .day-add-button):hover,
    .column-day-header.day-add-button:hover {
      --calendar-card-day-add-wash: color-mix(
        in srgb,
        var(--ha-ripple-hover-color) 8%,
        transparent
      );
      background-color: var(--calendar-card-day-add-wash);
    }
  }
  .day-table[data-add-pressed] td.date-column,
  .day-column[data-add-pressed] > .column-day-header,
  .grid-day-header[data-add-pressed] > .column-day-header {
    --calendar-card-day-add-wash: color-mix(
      in srgb,
      var(--ha-ripple-pressed-color) 16%,
      transparent
    );
    background-color: var(--calendar-card-day-add-wash);
  }
  .grid-day-body[data-add-pressed]::before {
    content: '';
    position: absolute;
    inset-inline: 0;
    top: var(--calendar-card-add-hour-top, 0);
    height: var(--calendar-card-add-hour-height, 0);
    background-color: color-mix(in srgb, var(--ha-ripple-pressed-color) 16%, transparent);
    pointer-events: none;
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    @media (hover: hover) {
      .date-column:has(> .day-add-button):hover {
        --calendar-card-day-add-wash: rgba(128, 128, 128, 0.08);
        background-color: rgba(128, 128, 128, 0.08);
      }
      .column-day-header.day-add-button:hover {
        --calendar-card-day-add-wash: rgba(128, 128, 128, 0.08);
        background-color: rgba(128, 128, 128, 0.08);
      }
    }
    .day-table[data-add-pressed] td.date-column,
    .day-column[data-add-pressed] > .column-day-header,
    .grid-day-header[data-add-pressed] > .column-day-header {
      --calendar-card-day-add-wash: rgba(128, 128, 128, 0.16);
    }
    .day-table[data-add-pressed] td.date-column,
    .day-column[data-add-pressed] > .column-day-header,
    .grid-day-header[data-add-pressed] > .column-day-header,
    .grid-day-body[data-add-pressed]::before {
      background-color: rgba(128, 128, 128, 0.16);
    }
  }
  .grid-new-event {
    display: contents;
  }
  .grid-new-event > * {
    pointer-events: none;
  }
  .grid-event[data-move-origin] {
    opacity: 0.35;
  }
  .grid-event[data-move-origin='dropped'],
  .grid-event-backdrop:has(+ .grid-event[data-move-origin='dropped']) {
    visibility: hidden;
  }
  ha-card:has(.day-add-button) .grid-day-body,
  ha-card:has(.day-add-button) .grid-allday-band {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
  }
  .day-add-button:focus {
    outline: none;
  }
  .day-add-button:focus-visible {
    outline: 2px solid var(--calendar-card-line-color-vertical);
    outline-offset: -2px;
  }
  ha-card:has(
      [data-add-pressed],
      [data-add-draft],
      .day-add-button:hover,
      .day-add-button:focus-visible
    )
    > ha-ripple {
    --ha-ripple-hover-opacity: 0;
    --ha-ripple-pressed-opacity: 0;
  }
  .loading-indicator {
    position: absolute;
    top: calc(3.5px + max(0px, (var(--ha-card-border-radius, 12px) - 12px) * 0.15));
    inset-inline-end: calc(3.5px + max(0px, (var(--ha-card-border-radius, 12px) - 12px) * 0.15));
    width: 16px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    z-index: 5;
    pointer-events: none;
  }
  .loading-indicator .spinner {
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border: 2px solid color-mix(in srgb, var(--primary-text-color) 25%, transparent);
    border-top-color: var(--primary-text-color);
    border-radius: 50%;
    animation: ccp-spin 0.8s linear infinite;
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .loading-indicator .spinner {
      border: 2px solid rgba(128, 128, 128, 0.45);
      border-top-color: var(--primary-text-color);
    }
  }
  .loading-indicator-icon {
    width: 16px;
    height: 16px;
  }
  .loading-indicator.unasked {
    animation: ccp-appear 0s linear 150ms both;
  }
  @keyframes ccp-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes ccp-spin {
    to {
      transform: rotate(360deg);
    }
  }
  .calendar-card-pro.column-view {
    padding-inline: 16px;
  }
  .calendar-card-pro.column-view .content-container {
    margin-inline-end: -16px;
    padding-inline-end: 16px;
  }
  .calendar-card-pro.column-view .card-header {
    margin-inline-start: 0;
  }
  .calendar-card-pro.column-view .card-toolbar {
    padding-inline-start: 0;
  }
  .column-grid {
    display: grid;
    grid-template-rows: auto auto;
    align-items: start;
    width: 100%;
  }
  .day-column {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .column-day-header {
    position: relative;
    padding-bottom: var(--calendar-card-column-header-gap, 8px);
  }
  .column-date-content {
    display: grid;
    grid-template-columns: auto auto 1fr;
    grid-template-areas:
      'weekday weekday .'
      'day month weather';
    align-items: baseline;
    column-gap: 6px;
    row-gap: 2px;
    position: relative;
    z-index: 2;
    min-width: 0;
    grid-template-rows: minmax(var(--calendar-card-date-weekday-row, auto), auto) auto;
  }
  .column-date-content::before,
  .column-date-content::after {
    content: var(--calendar-card-date-strut, none);
    grid-area: day;
    justify-self: start;
    width: 0;
    visibility: hidden;
    line-height: 1;
    pointer-events: none;
  }
  .column-date-content::before {
    font-size: var(--calendar-card-date-text-strut-size);
  }
  .column-date-content::after {
    content: none;
  }
  .column-date-content.with-today-tile::before {
    display: flex;
    align-items: center;
    min-height: 1.2em;
  }
  .column-date-content.with-today-tile::after {
    content: var(--calendar-card-date-strut, none);
    font-size: var(--calendar-card-date-day-strut-size);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 1.2em;
    margin: 0;
  }
  @supports (text-box: trim-both cap alphabetic) {
    .column-date-content.with-today-tile::after {
      display: block;
      align-content: center;
      text-box: trim-both cap alphabetic;
    }
  }
  .column-date-content .weekday {
    grid-area: weekday;
    align-self: var(--calendar-card-date-weekday-align, auto);
  }
  .column-date-content .day {
    grid-area: day;
  }
  .column-date-content.with-today-tile .day:not(.today-tile) {
    display: flex;
    align-items: center;
    min-height: 1.2em;
  }
  .column-date-content .day.today-tile {
    margin: 0;
  }
  .column-date-content .month {
    grid-area: month;
  }
  .column-date-content .today-indicator-container.inline {
    grid-area: weekday;
    justify-self: start;
    align-self: center;
    z-index: 3;
  }
  .column-date-content.with-today-indicator .weekday {
    padding-inline-start: calc(var(--calendar-card-today-indicator-size, 6px) + 4px);
  }
  .column-date-content .weather {
    grid-area: weather;
    justify-self: start;
    align-self: baseline;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .column-header-separator {
    --rule-gap: var(--calendar-card-column-header-gap, 8px);
    --rule-width: var(--calendar-card-column-header-separator-width, 0px);
    margin-top: calc(var(--rule-gap) / -2 - var(--rule-width) / 2);
    margin-bottom: calc(var(--rule-gap) / 2 - var(--rule-width) / 2);
  }
  .column-grid > .column-week-number {
    justify-self: start;
    margin-bottom: 2px;
  }
  .column-grid[data-pinned] > .day-column {
    align-self: stretch;
  }
  .column-grid[data-pinned] > .day-column > .column-day-header {
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: transparent;
  }
  .column-grid[data-pinned] > .day-column > .column-day-header::before,
  .column-grid[data-pinned] > .day-column > .column-day-header::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }
  .column-grid[data-pinned] > .day-column > .column-day-header::after {
    background-color: var(--calendar-card-day-add-wash, transparent);
  }
  .column-grid[data-pinned] .column-events * {
    scroll-margin-top: var(--calendar-card-pinned-head-height, 0px);
  }
  .column-events {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .column-events.with-event-gap {
    row-gap: var(--calendar-card-event-gap);
  }
  .column-events .time-countdown,
  .column-events .progress-bar {
    margin-inline-end: 0;
  }
  .column-events .time {
    justify-content: flex-start;
    box-sizing: border-box;
    column-gap: 4px;
    padding-inline-start: calc(var(--calendar-card-icon-size-time, 14px) + 4px);
  }
  .column-events .time-actual {
    margin-inline-start: calc(-1 * (var(--calendar-card-icon-size-time, 14px) + 4px));
  }
  .column-events .time-countdown {
    margin-inline-start: 0;
    text-align: start;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .column-events .time-countdown::before {
    content: '·';
    margin-inline-end: 4px;
    overflow-wrap: normal;
  }
  .column-events .time-actual:has(> .allday-badge + .time-text),
  .time-beside-title .time-actual:has(> .allday-badge + .time-text) {
    flex-wrap: wrap;
    margin-inline-start: 0;
  }
  .column-events .time-actual:has(> .allday-badge + .time-text) > ha-icon {
    margin-inline-start: calc(-1 * (var(--calendar-card-icon-size-time, 14px) + 4px));
  }
  .column-events .time-actual:has(> .allday-badge + .time-text) > .allday-badge,
  .time-beside-title .time-actual:has(> .allday-badge + .time-text) > .allday-badge {
    max-width: calc(100% - 5px);
  }
  .column-events
    .time-actual:has(> .allday-badge + .time-text > .time-countdown:first-child)
    > .allday-badge,
  .time-beside-title
    .time-actual:has(> .allday-badge + .time-text > .time-countdown:first-child)
    > .allday-badge {
    max-width: calc(100% - 9px - 0.5em);
  }
  .column-events .time-actual .allday-badge + .time-text:has(> .time-countdown:first-child),
  .column-events .time-actual .allday-badge + .time-text > .time-countdown:first-child,
  .time-beside-title .time-actual .allday-badge + .time-text:has(> .time-countdown:first-child),
  .time-beside-title .time-actual .allday-badge + .time-text > .time-countdown:first-child {
    display: contents;
  }
  .column-separator {
    align-self: stretch;
    justify-self: start;
    pointer-events: none;
  }
  .calendar-card-pro.grid-view {
    --calendar-card-grid-inset: 16px;
    padding-inline: var(--calendar-card-grid-inset);
  }
  .calendar-card-pro.grid-view .card-header {
    margin-inline-start: 0;
  }
  .calendar-card-pro.grid-view .card-toolbar {
    padding-inline-start: 0;
  }
  .grid-container {
    display: grid;
    grid-template-rows:
      auto auto auto
      var(--calendar-card-grid-body-height, 720px);
    width: 100%;
    margin-inline: calc(-1 * var(--calendar-card-grid-inset));
    padding-inline: var(--calendar-card-grid-inset);
    --calendar-card-grid-event-gap: 1px;
  }
  .grid-axis {
    position: relative;
    box-sizing: border-box;
    padding-inline: ${4}px ${8}px;
    overflow: hidden;
  }
  .grid-axis-sizer {
    visibility: hidden;
    pointer-events: none;
    height: 0;
    overflow: hidden;
  }
  .grid-axis-sizer span {
    display: block;
    font-size: var(--calendar-card-font-size-time);
    line-height: 1;
    white-space: nowrap;
  }
  .grid-axis-label {
    position: absolute;
    top: clamp(0px, calc(var(--calendar-card-grid-axis-label-top) - 0.5em), calc(100% - 1em));
    inset-inline-end: 8px;
    font-size: var(--calendar-card-font-size-time);
    line-height: 1;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }
  .grid-rules {
    background-image: ${Xp};
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0 var(--calendar-card-grid-rule-width),
      #000 var(--calendar-card-grid-rule-width)
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0 var(--calendar-card-grid-rule-width),
      #000 var(--calendar-card-grid-rule-width)
    );
    pointer-events: none;
  }
  .grid-separator {
    background-color: var(--calendar-card-grid-rule-paint);
    pointer-events: none;
    z-index: 1;
  }
  .grid-boundary {
    background-color: var(--calendar-card-grid-rule-paint);
    pointer-events: none;
    z-index: 3;
  }
  .grid-boundary-body-end {
    height: var(--calendar-card-grid-rule-width);
  }
  .grid-head,
  .grid-allday-row {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: subgrid;
    grid-template-rows: subgrid;
  }
  .grid-head {
    grid-row: 1 / span 2;
  }
  .grid-allday-row {
    grid-row: 1 / span 3;
    pointer-events: none;
  }
  .grid-allday-row > .grid-allday-band {
    pointer-events: auto;
  }
  .grid-head[data-pinned],
  .grid-allday-row[data-pinned] {
    position: sticky;
    top: 0;
  }
  .grid-allday-row[data-pinned] {
    z-index: 4;
  }
  .grid-head[data-pinned] {
    z-index: 5;
  }
  .grid-head[data-pinned] ~ .grid-day-body *,
  .grid-head[data-pinned='alone'] ~ .grid-allday-row * {
    scroll-margin-top: var(--calendar-card-pinned-head-height, 0px);
  }
  .grid-day-header {
    min-width: 0;
  }
  .grid-head > .column-week-number {
    justify-self: start;
    margin-bottom: 2px;
  }
  .grid-allday-band {
    display: grid;
    row-gap: 2px;
    padding-block-start: calc(var(--calendar-card-grid-band-top-width, 0px) + 2px);
    padding-block-end: calc(var(--calendar-card-grid-band-bottom-width, 0px) + 2px);
    z-index: 2;
    align-content: start;
  }
  .grid-banner {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    min-width: 0;
    padding: 1px 6px;
    border-radius: 999px;
  }
  .grid-banner.continues-before {
    border-start-start-radius: 4px;
    border-end-start-radius: 4px;
  }
  .grid-banner.continues-after {
    border-start-end-radius: 4px;
    border-end-end-radius: 4px;
  }
  .grid-banner-title {
    font-size: var(--calendar-card-font-size-event);
    font-weight: 500;
    line-height: 1.2;
    color: var(--calendar-card-color-event);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-inline: var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room));
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .grid-banner-title {
      overflow-x: clip;
      overflow-y: visible;
      min-width: 0;
    }
  }
  .grid-banner.continues-before .grid-banner-title::before {
    content: var(--calendar-card-banner-carry-before, '\\25C2\\00A0');
  }
  .grid-banner.continues-after .grid-banner-title::after {
    content: var(--calendar-card-banner-carry-after, '\\00A0\\25B8');
  }
  .grid-banner:dir(rtl) {
    --calendar-card-banner-carry-before: '\\25B8\\00A0';
    --calendar-card-banner-carry-after: '\\00A0\\25C2';
  }
  .grid-banner-timed {
    position: relative;
    container: calendar-card-grid-banner / inline-size;
    font-size: var(--calendar-card-font-size-event);
  }
  .grid-banner-timed .grid-banner-title {
    font-size: inherit;
  }
  .grid-banner-content {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    gap: 0.5em;
    min-width: 0;
  }
  .grid-banner-time {
    flex: none;
    font-size: inherit;
    line-height: 1.2;
    color: var(--calendar-card-color-event);
    white-space: nowrap;
  }
  .grid-banner-time-end {
    margin-inline-start: auto;
  }
  @container calendar-card-grid-banner (width < 12em) {
    .grid-banner-two-times .grid-banner-time-end {
      display: none;
    }
  }
  @container calendar-card-grid-banner (width < 8em) {
    .grid-banner-time {
      display: none;
    }
  }
  @container calendar-card-grid-banner (width < 16em) {
    .grid-banner-long-times.grid-banner-two-times .grid-banner-time-end {
      display: none;
    }
  }
  @container calendar-card-grid-banner (width < 11em) {
    .grid-banner-long-times .grid-banner-time {
      display: none;
    }
  }
  .grid-banner-lasts {
    container: calendar-card-grid-banner / inline-size;
    font-size: var(--calendar-card-font-size-event);
  }
  .grid-banner-lasts .grid-banner-title {
    font-size: inherit;
  }
  .grid-banner-duration {
    flex: none;
    margin-inline-start: 0.35em;
    font-size: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: var(--calendar-card-color-event);
    white-space: nowrap;
  }
  .grid-banner-timed .grid-banner-duration {
    margin-inline-start: 0;
  }
  .grid-banner-lasts.continues-after .grid-banner-title::after {
    content: none;
  }
  .grid-banner-lasts.continues-after .grid-banner-duration::after {
    content: var(--calendar-card-banner-carry-after, '\\00A0\\25B8');
  }
  @container calendar-card-grid-banner (width < 10em) {
    .grid-banner-duration {
      display: none;
    }
    .grid-banner-lasts.continues-after .grid-banner-title::after {
      content: var(--calendar-card-banner-carry-after, '\\00A0\\25B8');
    }
  }
  @container calendar-card-grid-banner (width < 20em) {
    .grid-banner-timed .grid-banner-duration {
      display: none;
    }
    .grid-banner-timed.grid-banner-lasts.continues-after .grid-banner-title::after {
      content: var(--calendar-card-banner-carry-after, '\\00A0\\25B8');
    }
  }
  @container calendar-card-grid-banner (width < 24em) {
    .grid-banner-long-times .grid-banner-duration {
      display: none;
    }
    .grid-banner-lasts.continues-after .grid-banner-long-times .grid-banner-title::after {
      content: var(--calendar-card-banner-carry-after, '\\00A0\\25B8');
    }
  }
  .grid-day-body {
    position: relative;
    min-width: 0;
  }
  .grid-day-plane {
    position: absolute;
    inset: 0;
    container-type: size;
  }
  .grid-weekend {
    background-color: var(--calendar-card-grid-weekend, transparent);
    pointer-events: none;
  }
  .grid-today {
    background-color: var(--calendar-card-grid-today, transparent);
    pointer-events: none;
  }
  .grid-event,
  .grid-event-backdrop {
    position: absolute;
    box-sizing: border-box;
    overflow: hidden;
    --calendar-card-grid-block-floor: 14px;
    --calendar-card-grid-block-min-height: min(var(--calendar-card-grid-block-floor), 100%);
    min-height: var(--calendar-card-grid-block-min-height);
    max-height: 100%;
    padding: 2px 4px;
    --calendar-card-grid-text-start: calc(6px + var(--calendar-card-line-width-vertical));
    padding-inline-start: var(--calendar-card-grid-text-start);
    border-radius: 4px;
    line-height: 1.25;
    container: calendar-card-grid-event / size;
    --calendar-card-grid-block-gap-above: calc(
      var(--calendar-card-grid-event-gap) + var(--calendar-card-grid-rule-width)
    );
    --calendar-card-grid-block-gap-below: var(--calendar-card-grid-event-gap);
    top: clamp(
      0px,
      calc(var(--calendar-card-grid-block-top) + var(--calendar-card-grid-block-gap-above)),
      calc(100% - var(--calendar-card-grid-block-min-height))
    );
    height: calc(
      var(--calendar-card-grid-block-height) - var(--calendar-card-grid-block-gap-above) - var(
          --calendar-card-grid-block-gap-below
        )
    );
  }
  .grid-event-accessible {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .grid-event-disclosure,
  .grid-event-disclosure .event-content {
    display: flex;
    flex-direction: column;
    min-height: 0;
    height: 100%;
  }
  .grid-event-disclosure .summary-row {
    --calendar-card-grid-title-eligible: 0;
    display: none;
    flex: 0 0 auto;
    min-height: 0;
    overflow: hidden;
    padding-inline: var(--calendar-card-event-row-room);
    margin-inline: calc(-1 * var(--calendar-card-event-row-room));
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .grid-event-disclosure .summary-row {
      overflow-x: clip;
      overflow-y: visible;
    }
  }
  .grid-event-disclosure .summary {
    min-height: 0;
    padding-block: var(--calendar-card-summary-ink-room, 0px) 0;
    margin-top: calc(-1 * var(--calendar-card-summary-ink-room, 0px));
    padding-inline-start: var(--calendar-card-summary-inline-room);
    text-indent: 0;
  }
  .grid-event-disclosure .summary,
  .grid-event-disclosure .event-title {
    -webkit-line-clamp: var(--calendar-card-grid-title-lines-compact);
  }
  .grid-event-disclosure .event-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    --calendar-card-title-inline-room: var(--calendar-card-inline-room);
    overflow-wrap: break-word;
    word-break: normal;
    hyphens: manual;
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .grid-event-disclosure .event-title {
      overflow-x: clip;
      overflow-y: var(--calendar-card-title-overflow);
    }
  }
  .grid-event-disclosure .title-word {
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: top;
    padding-inline: var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room));
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .grid-event-disclosure .title-word {
      overflow-x: clip;
      overflow-y: visible;
    }
  }
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure
    .summary:not(.summary-scroll):has(> .label-icon, > .label-image):has(> .event-title .title-word)
    > .event-title {
    vertical-align: baseline;
  }
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure
    .summary:not(.summary-scroll):has(> .label-icon, > .label-image)
    .title-word {
    vertical-align: middle;
  }
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure
    .title-words
    > .title-word:first-child {
    max-width: calc(100% - var(--calendar-card-grid-title-label-run, 0px));
  }
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure
    .title-words
    > .title-word[data-grid-title-cut] {
    max-width: var(--calendar-card-grid-title-cut-room);
  }
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure
    .title-words
    > .title-word[data-grid-title-cut]::after {
    content: '\\2026';
  }
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure
    .title-words
    > .title-word[data-grid-title-cut]
    ~ * {
    display: none;
  }
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure
    .summary[data-grid-title-lines],
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure
    .summary[data-grid-title-lines]
    > .event-title {
    -webkit-line-clamp: var(--calendar-card-grid-title-fit-lines);
    padding-bottom: 0;
    overflow-y: hidden;
    --calendar-card-summary-ink-room: 0.375em;
    --calendar-card-title-ink-room: 0.375em;
  }
  .grid-event-disclosure .summary:not(.summary-scroll):has(> .event-title:not(:only-child)) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    --calendar-card-summary-ink-room: var(--calendar-card-title-ink-room);
  }
  .grid-event:not(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank'],
      [data-grid-title-gap='yielded']
    )
    .grid-event-disclosure
    .summary:not(.summary-scroll):not([data-grid-title-lines]):has(
      > .event-title:not(:only-child)
    ) {
    padding-bottom: 2px;
  }
  .grid-event-disclosure
    .summary:not(.summary-scroll):has(> .event-title:not(:only-child))
    > .event-title {
    display: inline;
    --calendar-card-title-ink-room: 0px;
    --calendar-card-title-inline-room: 0px;
  }
  .grid-event-disclosure .summary:dir(ltr) > .event-title {
    text-align: left;
  }
  .grid-event-disclosure .summary:dir(rtl) > .event-title {
    text-align: right;
  }
  .grid-event-disclosure .label-icon,
  .grid-event-disclosure .label-image {
    unicode-bidi: isolate;
  }
  .grid-event-disclosure .time-location,
  .grid-event-disclosure .time,
  .grid-event-disclosure .location,
  .grid-event-disclosure .description,
  .grid-event-disclosure .event-weather {
    flex: 0 0 auto;
  }
  .grid-event-disclosure .location,
  .grid-event-disclosure .description,
  .grid-event-disclosure .event-weather {
    margin-inline-end: 0;
  }
  .grid-event-disclosure .time,
  .grid-event-disclosure .time-actual,
  .grid-event-disclosure .time-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .grid-event-disclosure .time {
    padding-inline: var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room))
      calc(12px - var(--calendar-card-inline-room));
  }
  .grid-event-disclosure .time-actual {
    padding-inline: var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room));
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .grid-event-disclosure .time,
    .grid-event-disclosure .time-actual {
      overflow-x: clip;
      overflow-y: visible;
    }
  }
  .grid-event-disclosure .time {
    flex-wrap: nowrap;
  }
  .grid-event-disclosure .time .time-actual .time-text {
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
  }
  .grid-event-disclosure .time .time-actual > span:not(.time-text):not(.allday-badge) {
    display: block;
    text-overflow: ellipsis;
    padding-top: 0;
    margin-top: 0;
  }
  .grid-event-disclosure {
    --calendar-card-time-display: inline;
    --calendar-card-time-max-lines: none;
    --calendar-card-time-overflow: visible;
    --calendar-card-time-ink-room: 0px;
    --calendar-card-time-inline-room: 0px;
  }
  .grid-event.clipped-top,
  .grid-event-backdrop.clipped-top {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }
  .grid-event.clipped-bottom,
  .grid-event-backdrop.clipped-bottom {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }
  .grid-event.clipped-top::before,
  .grid-event.clipped-bottom::after {
    content: '';
    position: absolute;
    inset-inline: var(--calendar-card-grid-text-start) 4px;
    border-block-start: 1px dashed currentColor;
    opacity: 0.45;
    pointer-events: none;
  }
  .grid-event.clipped-top::before {
    top: 0;
  }
  .grid-event.clipped-bottom::after {
    bottom: 0;
  }
  .grid-event > .event-accent-bar {
    inset-inline-start: 3px;
    inset-block: 3px;
    border-radius: 999px;
  }
  .grid-event.clipped-top > .event-accent-bar {
    inset-block-start: 0;
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }
  .grid-event.clipped-bottom > .event-accent-bar {
    inset-block-end: 0;
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }
  .grid-event.clipped-top.event-interactive:focus-visible > .event-accent-bar {
    inset-block-start: 2px;
  }
  .grid-event.clipped-bottom.event-interactive:focus-visible > .event-accent-bar {
    inset-block-end: 2px;
  }
  .grid-event-disclosure .time,
  .grid-event-disclosure .location,
  .grid-event-disclosure .description,
  .grid-event-disclosure .event-weather,
  .grid-event-disclosure .progress-bar-row {
    display: none;
  }
  .grid-event-disclosure .grid-event-detail-clipped {
    display: none !important;
  }
  @container calendar-card-grid-event (min-height: 19px) {
    .grid-event-disclosure .summary-row {
      --calendar-card-grid-title-eligible: 1;
      display: flex;
    }
  }
  @container calendar-card-grid-event (min-height: 36px) {
    .grid-event-disclosure .summary,
    .grid-event-disclosure .event-title {
      -webkit-line-clamp: var(--calendar-card-grid-title-lines-medium);
    }
  }
  @container calendar-card-grid-event (min-height: 19px) {
    .grid-event-disclosure:where(.grid-time-fits) .time {
      display: block;
    }
  }
  @container calendar-card-grid-event (min-height: 40px) {
    .grid-event-disclosure:where(.grid-time-fits) .summary,
    .grid-event-disclosure:where(.grid-time-fits) .event-title {
      -webkit-line-clamp: var(--calendar-card-grid-title-lines-compact);
    }
  }
  .time .time-actual .time-end {
    display: inline;
    vertical-align: baseline;
  }
  .time .time-actual .time-end > .time-end-reading,
  .time .time-actual .time-end > .time-duration {
    display: inline;
    vertical-align: baseline;
  }
  .grid-event-disclosure.grid-time-no-icon .time .time-actual > ha-icon {
    display: none;
  }
  .grid-event-disclosure.grid-time-no-end .time .time-actual .time-end {
    display: none;
  }
  .grid-event-disclosure.grid-time-no-end-reading .time .time-actual .time-end-reading {
    display: none;
  }
  .grid-event-disclosure.grid-time-no-countdown .time .time-actual .time-text > .time-countdown {
    display: none;
  }
  .grid-event-disclosure.grid-time-no-countdown .time .time-actual .time-text {
    white-space: nowrap;
  }
  .grid-event-disclosure.grid-time-wrap .time .time-actual .time-end {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-inline: var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room));
  }
  .grid-event-disclosure.grid-time-wrap .time .time-actual .time-text .time-end {
    display: inline;
    overflow: visible;
    text-overflow: clip;
    padding-inline: 0;
    margin-inline: 0;
  }
  .grid-event-disclosure.grid-time-wrap .time .time-actual .time-text .time-end::before {
    content: '\\A';
    white-space: pre;
  }
  .grid-event-disclosure .time .time-actual .time-text > .time-countdown {
    overflow-wrap: break-word;
    hyphens: manual;
  }
  .grid-event-disclosure .time-location > .progress-bar-row:first-child + * {
    margin-top: 0;
  }
  @container calendar-card-grid-event (min-height: 48px) {
    .grid-event-disclosure .progress-bar-row {
      display: block;
    }
    .grid-event-disclosure .time-location > .progress-bar-row:first-child + * {
      margin-top: 2px;
    }
  }
  @container calendar-card-grid-event (min-height: 72px) {
    .grid-event-disclosure .summary,
    .grid-event-disclosure .event-title {
      -webkit-line-clamp: var(--calendar-card-grid-title-lines-medium);
    }
    .grid-event-disclosure .location,
    .grid-event-disclosure .description,
    .grid-event-disclosure .event-weather {
      display: flex;
    }
  }
  @container calendar-card-grid-event (min-height: 96px) {
    .grid-event-disclosure .summary,
    .grid-event-disclosure .event-title {
      -webkit-line-clamp: var(--calendar-card-grid-title-lines-expanded);
    }
  }
  .grid-event:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure {
    position: absolute;
    inset-block: 1px;
    inset-inline: var(--calendar-card-grid-text-start) 4px;
    height: auto;
    justify-content: center;
  }
  .grid-event.clipped-top:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure {
    inset-block-start: 2px;
  }
  .grid-event.clipped-bottom:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure {
    inset-block-end: 2px;
  }
  .grid-event:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .event-content {
    height: auto;
  }
  .grid-event[data-grid-title-fit] .summary-row {
    transform: translateY(var(--calendar-card-grid-title-shift, 0px));
  }
  .grid-event:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .summary-row {
    display: flex;
    overflow: visible;
  }
  .grid-event:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .summary {
    display: flex !important;
    align-items: center;
    min-width: 0;
    padding: 0;
    margin: 0;
    text-indent: 0;
    overflow: visible;
    white-space: nowrap;
    -webkit-line-clamp: unset;
    zoom: var(--calendar-card-grid-title-scale, 1);
  }
  .grid-event:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .summary
    > :not(.event-title) {
    flex: 0 0 auto;
    white-space: nowrap;
  }
  .grid-event:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .summary
    > .event-title {
    display: block !important;
    flex: 1 1 auto;
    min-width: 0;
    padding: 0 var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room));
    text-overflow: ellipsis;
    -webkit-line-clamp: unset;
    --calendar-card-title-ink-room: 0px;
  }
  @supports (overflow: clip) and (contain-intrinsic-size: 1px) {
    .grid-event:is(
        [data-grid-title-fit='measuring'],
        [data-grid-title-fit='compact'],
        [data-grid-title-fit='blank']
      )
      .summary
      > .event-title {
      overflow-x: clip;
      overflow-y: visible;
    }
  }
  .grid-event:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .title-word {
    display: inline;
    max-width: none;
    overflow: visible;
    vertical-align: baseline;
    padding-inline: 0;
    margin-inline: 0;
  }
  @media (prefers-reduced-motion: no-preference) {
    .grid-event[data-grid-title-fit='compact']
      .summary
      > .event-title.title-scrollable.title-overflowing:not([data-title-motion='pending']) {
      text-overflow: clip;
    }
  }
  .grid-event:is([data-grid-title-fit='measuring'], [data-grid-title-fit='blank'])
    .event-title-scroll {
    display: inline !important;
    animation: none !important;
    transform: none !important;
    will-change: auto;
  }
  .grid-event:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .time-location {
    display: none;
  }
  .grid-event:is([data-grid-title-fit='measuring'], [data-grid-title-fit='blank']) .summary-row {
    visibility: hidden;
  }
  .grid-event-raised {
    isolation: isolate;
  }
  .grid-event-backdrop {
    --calendar-card-grid-backdrop-base: var(
      --calendar-card-background-color,
      var(--card-background-color)
    );
    --calendar-card-grid-backdrop-rules-y: calc(
      -1 *
        clamp(
          0px,
          calc(var(--calendar-card-grid-raised-top) + var(--calendar-card-grid-block-gap-above)),
          calc(100cqh - min(var(--calendar-card-grid-block-floor), 100cqh))
        )
    );
    container: none;
    padding: 0;
    background-color: var(--calendar-card-grid-backdrop-base);
    pointer-events: none;
  }
  .grid-event-backdrop-ground,
  .grid-event-backdrop-rules {
    position: absolute;
    inset: 0;
  }
  .grid-event-backdrop-ground {
    -webkit-mask-image: linear-gradient(
      var(--calendar-card-grid-backdrop-base),
      var(--calendar-card-grid-backdrop-base)
    );
    mask-image: linear-gradient(
      var(--calendar-card-grid-backdrop-base),
      var(--calendar-card-grid-backdrop-base)
    );
  }
  .grid-day-body.weekend .grid-event-backdrop-ground {
    background-color: var(--calendar-card-grid-weekend, transparent);
  }
  .grid-day-body.today .grid-event-backdrop-ground {
    background-color: var(--calendar-card-grid-today, transparent);
  }
  .grid-day-body.today.weekend .grid-event-backdrop-ground {
    background-color: var(
      --calendar-card-grid-today,
      var(--calendar-card-grid-weekend, transparent)
    );
  }
  .grid-event-backdrop-rules {
    background-image: ${Xp};
    background-size: 100% 100cqh;
    background-position: 0 var(--calendar-card-grid-backdrop-rules-y);
    background-repeat: no-repeat;
    -webkit-mask-image: linear-gradient(
      to bottom,
      transparent 0 var(--calendar-card-grid-rule-width),
      #000 var(--calendar-card-grid-rule-width)
    );
    mask-image: linear-gradient(
      to bottom,
      transparent 0 var(--calendar-card-grid-rule-width),
      #000 var(--calendar-card-grid-rule-width)
    );
    -webkit-mask-size: 100% 100cqh;
    mask-size: 100% 100cqh;
    -webkit-mask-position: 0 var(--calendar-card-grid-backdrop-rules-y);
    mask-position: 0 var(--calendar-card-grid-backdrop-rules-y);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }
  .grid-event-raised > .grid-event-accessible::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    box-sizing: border-box;
    border: 1px solid
      color-mix(in srgb, var(--calendar-card-event-accent-bar-color, transparent) 20%, transparent);
    border-radius: 4px;
    pointer-events: none;
  }
  .grid-event-raised.clipped-top > .grid-event-accessible::before {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }
  .grid-event-raised.clipped-bottom > .grid-event-accessible::before {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .grid-event-raised > .grid-event-accessible::before {
      border: 1px solid rgba(128, 128, 128, 0.2);
    }
  }
  .grid-event.grid-event-content-limited {
    container: none;
  }
  .grid-event.grid-event-content-limited .grid-event-disclosure {
    --calendar-card-grid-text-gaps: calc(
      var(--calendar-card-grid-block-gap-above) + var(--calendar-card-grid-block-gap-below)
    );
    --calendar-card-grid-text-gutters: calc(2 * var(--calendar-card-grid-event-gap));
    --calendar-card-grid-text-chrome: calc(
      var(--calendar-card-grid-text-start) + 4px + var(--calendar-card-grid-text-gutters)
    );
    container: calendar-card-grid-event / size;
    height: calc(
      var(--calendar-card-grid-text-block-ratio, 1) *
        (100% + 4px + var(--calendar-card-grid-text-gaps)) -
        (4px + var(--calendar-card-grid-text-gaps))
    );
    width: calc(
      var(--calendar-card-grid-text-inline-ratio, 1) *
        (100% + var(--calendar-card-grid-text-chrome)) - var(--calendar-card-grid-text-chrome)
    );
    overflow: hidden;
    padding-inline-start: var(--calendar-card-grid-block-room);
    margin-inline-start: calc(-1 * var(--calendar-card-grid-block-room));
  }
  .grid-event.grid-event-content-limited:is(
      [data-grid-title-fit='measuring'],
      [data-grid-title-fit='compact'],
      [data-grid-title-fit='blank']
    )
    .grid-event-disclosure {
    inset-block-end: auto;
    inset-inline-end: auto;
    height: calc(
      var(--calendar-card-grid-text-block-ratio, 1) * (100% + var(--calendar-card-grid-text-gaps)) -
        (2px + var(--calendar-card-grid-text-gaps))
    );
    width: calc(
      var(--calendar-card-grid-text-inline-ratio, 1) *
        (100% + var(--calendar-card-grid-text-gutters)) - var(--calendar-card-grid-text-chrome)
    );
  }
  .grid-event-overflow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 0;
    overflow: visible;
    border: 1px dashed var(--secondary-text-color);
    background: transparent;
    color: var(--secondary-text-color);
  }
  .grid-event-overflow-label {
    font-size: var(--calendar-card-font-size-time);
    white-space: nowrap;
  }
  .grid-now-line {
    position: absolute;
    inset-inline: 0;
    height: 2px;
    background: var(--calendar-card-now-color, #34d399);
    pointer-events: none;
  }
  @supports (background-position: 0 calc(1cqh - clamp(0px, 1cqh, 100cqh))) {
    .grid-day-plane-now .grid-event-now {
      background-image: linear-gradient(
        var(--calendar-card-now-color, #34d399),
        var(--calendar-card-now-color, #34d399)
      );
      background-repeat: no-repeat;
      background-size: 100% 2px;
      background-position: 0
        calc(
          var(--calendar-card-grid-now-y) - clamp(
              0px,
              calc(
                var(--calendar-card-grid-block-top-cqh) + var(--calendar-card-grid-block-gap-above)
              ),
              calc(100cqh - min(var(--calendar-card-grid-block-floor), 100cqh))
            )
        );
    }
  }
  .grid-now-dot {
    position: absolute;
    inset-inline-start: -3px;
    width: 8px;
    height: 8px;
    margin-top: -3px;
    border-radius: 50%;
    background: var(--calendar-card-now-color, #34d399);
    pointer-events: none;
    z-index: 2;
  }
  .calendar-card-pro.month-view {
    padding-inline: 16px;
  }
  .calendar-card-pro.month-view .card-header {
    margin-inline-start: 0;
  }
  .calendar-card-pro.month-view .card-toolbar {
    padding-inline-start: 0;
  }
  .calendar-card-pro.month-view .fetch-error {
    margin-inline-start: 0;
  }
  .calendar-card-pro.month-view .content-container {
    display: flex;
    flex: var(--calendar-card-month-content-flex, 1 1 0);
    flex-direction: column;
    min-height: 0;
    height: auto;
    max-height: none;
  }
  .month-container {
    display: grid;
    flex: 1 1 0;
    min-height: var(--calendar-card-month-min, calc(6 * (2.4em + 11px) + 1.2em + 7px));
    grid-template-rows: auto repeat(
        6,
        minmax(var(--calendar-card-month-week-min, calc(2.4em + 11px)), 1fr)
      );
    position: relative;
    box-sizing: border-box;
    --calendar-card-month-rule: color-mix(
      in srgb,
      var(--divider-color, rgba(127, 127, 127, 0.25)) 75%,
      transparent
    );
    --calendar-card-month-header-rule: color-mix(
      in srgb,
      var(--primary-text-color) 18%,
      transparent
    );
    --calendar-card-month-text-start: calc(5px + var(--calendar-card-line-width-vertical));
  }
  .month-probe {
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    visibility: hidden;
    pointer-events: none;
  }
  .month-probe[data-probe='date'] {
    display: flex;
    align-items: center;
    padding-block: 5px 3px;
  }
  .month-probe[data-probe='date']::before {
    content: '';
    height: 1.2em;
    font-size: var(--calendar-card-font-size-day);
  }
  .month-probe[data-probe='date']::after {
    content: '';
    height: 1em;
    font-size: var(--calendar-card-font-size-month);
  }
  .month-probe[data-probe='date'][data-month='none']::after {
    content: none;
  }
  .month-probe[data-probe='title'] {
    height: calc(1.2em + 2px);
    font-size: var(--calendar-card-font-size-event);
  }
  .month-probe[data-probe='time'] {
    height: calc(1.2em + 2px);
    font-size: var(--calendar-card-font-size-time);
  }
  .month-probe[data-probe='scaled-title'] {
    height: calc(1.2em + 2px);
    font-size: var(--calendar-card-font-size-event);
  }
  .month-probe[data-probe='scaled-time'] {
    height: calc(1.2em + 2px);
    font-size: var(--calendar-card-font-size-time);
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .month-container {
      --calendar-card-month-rule: var(--divider-color, rgba(127, 127, 127, 0.25));
      --calendar-card-month-header-rule: var(--divider-color, rgba(127, 127, 127, 0.25));
    }
  }
  .month-weekdays {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    padding-block-end: 7px;
  }
  .month-weekday {
    min-width: 0;
    padding-inline: 9.5px;
    overflow: hidden;
    font-size: var(--calendar-card-font-size-weekday);
    line-height: 1.2;
    color: var(--calendar-card-color-weekday);
    text-align: end;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .month-week {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    min-height: 0;
    overflow: hidden;
    border-block-start: 1px solid var(--calendar-card-month-rule);
  }
  .month-weekdays + .month-week {
    border-block-start-color: var(--calendar-card-month-header-rule);
  }
  .month-container:not(.month-narrow) > .month-weekdays[data-pinned] {
    position: sticky;
    top: 0;
    z-index: 3;
  }
  @supports (animation-timeline: scroll()) {
    .month-container:not(.month-narrow) > .month-weekdays[data-pinned] {
      animation:
        calendar-card-pinned-ground linear both,
        calendar-card-month-weekdays-rule linear both;
      animation-timeline: scroll(nearest block);
      animation-range: 0px 1px;
    }
  }
  @supports not (animation-timeline: scroll()) {
    .month-container:not(.month-narrow) > .month-weekdays[data-pinned] {
      box-shadow: 0 1px 0 var(--calendar-card-month-header-rule);
    }
    .month-container:not(.month-narrow) > .month-weekdays[data-pinned] + .month-week {
      border-block-start-color: transparent;
    }
  }
  @keyframes calendar-card-month-weekdays-rule {
    from {
      box-shadow: 0 1px 0 transparent;
    }
    to {
      box-shadow: 0 1px 0 var(--calendar-card-month-header-rule);
    }
  }
  .month-weekdays[data-pinned] ~ .month-week,
  .month-weekdays[data-pinned] ~ .month-week * {
    scroll-margin-top: var(--calendar-card-pinned-head-height, 0px);
  }
  .month-day {
    grid-row: 1 / -1;
    min-width: 0;
    border-inline-start: 1px solid var(--calendar-card-month-rule);
  }
  .month-day:focus {
    outline: none;
  }
  .month-day:focus-visible {
    outline: 2px solid var(--calendar-card-line-color-vertical);
    outline-offset: -2px;
  }
  .month-day.weekend {
    background-color: var(--calendar-card-month-weekend, transparent);
  }
  .month-day.today {
    background-color: var(--calendar-card-month-today, transparent);
  }
  .month-day.today.weekend {
    background-color: var(
      --calendar-card-month-today,
      var(--calendar-card-month-weekend, transparent)
    );
  }
  .month-day:first-child {
    border-inline-start: none;
  }
  .month-date {
    display: flex;
    grid-row: 1;
    align-items: center;
    justify-content: flex-end;
    min-width: 0;
    padding: 5px 11.5px 3px;
    line-height: 1;
    white-space: nowrap;
    pointer-events: none;
  }
  .month-date::before {
    content: '';
    height: 1.2em;
    font-size: var(--calendar-card-font-size-day);
  }
  .month-date > .day {
    font-size: var(--calendar-card-font-size-day);
    font-weight: 400;
  }
  .month-date-month {
    font-size: var(--calendar-card-font-size-month);
    white-space: pre;
  }
  .month-date > .day.today-tile {
    margin: 0;
    font-weight: 500;
  }
  .month-container:not(.month-narrow) .month-date > .day.today-tile {
    background: var(--calendar-card-today-indicator-color);
    font-weight: 600;
    border-radius: 0.41em;
    --calendar-card-today-indicator-ink: var(--text-primary-color, #fff);
  }
  @supports (corner-shape: squircle) {
    .month-container:not(.month-narrow) .month-date > .day.today-tile {
      border-radius: 0.6em;
    }
  }
  .month-day.other-month + .month-date {
    opacity: 0.45;
  }
  .month-week-number {
    grid-column: 1;
    grid-row: 1;
    align-self: start;
    justify-self: start;
    padding: 5px 8.5px 0;
    font-size: var(--calendar-card-week-number-font-size);
    line-height: 1.2;
    color: var(--calendar-card-week-number-color);
    opacity: 0.55;
    pointer-events: none;
  }
  .month-bar {
    margin: 0.75px 3px;
    padding-block: 0.25px;
  }
  .month-bar.continues-before {
    margin-inline-start: 0;
  }
  .month-bar.continues-after {
    margin-inline-end: 0;
  }
  .month-bar.grid-banner-timed,
  .month-bar.grid-banner-lasts {
    font-size: inherit;
  }
  .month-bar.grid-banner-timed .grid-banner-title,
  .month-bar.grid-banner-lasts .grid-banner-title {
    font-size: var(--calendar-card-font-size-event);
  }
  .month-bar .grid-banner-time,
  .month-bar .grid-banner-duration {
    font-size: var(--calendar-card-font-size-time);
    color: var(--calendar-card-color-time);
  }
  .month-line {
    position: relative;
    display: flex;
    align-items: center;
    min-width: 0;
    margin: 0.75px 3px;
    padding-block: 0.25px;
    padding-inline: var(--calendar-card-month-text-start) 5px;
    border-radius: 4px;
    overflow: hidden;
    line-height: 1.2;
    white-space: nowrap;
    container: calendar-card-month-line / inline-size;
  }
  .month-line > .event-accent-bar {
    inset-block: 1.25px 1.5px;
    inset-inline-start: 0.5px;
    border-radius: 999px;
  }
  .month-line-label {
    display: inline-flex;
    flex: none;
    align-items: center;
    font-size: var(--calendar-card-font-size-event);
  }
  .month-line-label > * {
    margin-inline-end: 4px;
  }
  .month-line-title {
    flex: 1 1 auto;
    min-width: 0;
    overflow: hidden;
    font-size: var(--calendar-card-font-size-event);
    color: var(--calendar-card-color-event);
    text-overflow: ellipsis;
    padding-inline: var(--calendar-card-inline-room);
    margin-inline: calc(-1 * var(--calendar-card-inline-room));
  }
  .month-line-time {
    flex: none;
    margin-inline-start: 4px;
    font-size: var(--calendar-card-font-size-time);
    color: var(--calendar-card-color-time);
    font-variant-numeric: tabular-nums;
  }
  .month-line.event-now .month-line-time {
    color: var(--calendar-card-now-ink);
  }
  @container calendar-card-month-line (width < 7em) {
    .month-line-time {
      display: none;
    }
  }
  .month-line.past-event > :not(.event-accent-bar) {
    opacity: var(--calendar-card-past-event-opacity, 0.6);
  }
  .month-more {
    align-self: center;
    justify-self: start;
    min-width: 0;
    max-width: 100%;
    margin: 0 3px;
    padding-block: 1px;
    padding-inline: var(--calendar-card-month-text-start) 3px;
    overflow: hidden;
    border: none;
    border-radius: 4px;
    background: none;
    font: inherit;
    font-size: var(--calendar-card-font-size-event);
    line-height: 1.2;
    color: var(--secondary-text-color);
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  @media (hover: hover) {
    .month-more:hover {
      background-color: color-mix(in srgb, var(--ha-ripple-hover-color) 8%, transparent);
    }
  }
  .month-more:focus {
    outline: none;
  }
  .month-more:focus-visible {
    outline: 2px solid var(--calendar-card-line-color-vertical);
    outline-offset: -2px;
  }
  .month-line.search-ring {
    outline: 2px solid var(--primary-color);
    outline-offset: -2px;
    animation: ccp-search-ring 2s ease-out forwards;
  }
  .month-line.search-ring:focus-visible {
    animation-name: ccp-search-ring-to-focus;
  }
  @media (prefers-reduced-motion: reduce) {
    .month-line.search-ring,
    .month-line.search-ring:focus-visible {
      animation: none;
    }
  }
  .month-day[data-add-pressed] {
    background-image: linear-gradient(
      color-mix(in srgb, var(--ha-ripple-pressed-color) 16%, transparent),
      color-mix(in srgb, var(--ha-ripple-pressed-color) 16%, transparent)
    );
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .month-day[data-add-pressed] {
      background-image: linear-gradient(rgba(128, 128, 128, 0.16), rgba(128, 128, 128, 0.16));
    }
    @media (hover: hover) {
      .month-more:hover {
        background-color: rgba(128, 128, 128, 0.08);
      }
    }
  }
  .month-container.month-narrow {
    flex: none;
    min-height: 0;
    grid-template-rows: auto repeat(6, auto);
    --calendar-card-month-week-gutter: 22px;
    border-block-end: 1px solid var(--calendar-card-month-rule);
  }
  .month-narrow.with-week-numbers > .month-weekdays,
  .month-narrow.with-week-numbers > .month-week {
    grid-template-columns: var(--calendar-card-month-week-gutter) repeat(7, minmax(0, 1fr));
  }
  .month-narrow > .month-weekdays {
    padding-block-end: 4px;
  }
  .month-narrow .month-weekday {
    padding-inline: 0;
    text-align: center;
  }
  .month-narrow .month-weekday.weekend {
    color: var(--secondary-text-color);
  }
  .month-narrow > .month-week {
    overflow: visible;
  }
  .month-narrow .month-day {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    grid-row: auto;
    padding-block: 6px;
    border-inline-start: none;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .month-narrow .month-date {
    padding: 0;
    justify-content: center;
  }
  .month-narrow .month-date::before {
    content: none;
  }
  .month-narrow .month-date > .day {
    box-sizing: border-box;
    width: 1.75em;
    height: 1.75em;
    margin: 0;
    border-radius: 0.6em;
  }
  .month-narrow .month-date > .day:not(.today-tile) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .month-narrow .month-day.month-selected .month-date > .day:not(.today-tile) {
    background: var(--primary-text-color);
    color: var(--calendar-card-background-color, var(--card-background-color));
    font-weight: 600;
  }
  .month-narrow .month-day.month-selected .month-date > .day.today-tile {
    background: var(--calendar-card-today-indicator-color);
    font-weight: 600;
    --calendar-card-today-indicator-ink: var(--text-primary-color, #fff);
  }
  @supports (color: oklch(from red l c h)) and (content-visibility: auto) and
    (width: round(1px, 1px)) {
    .month-container:not(.month-narrow) .month-date > .day.today-tile,
    .month-narrow .month-day.month-selected .month-date > .day.today-tile {
      background: oklab(
        from var(--calendar-card-today-indicator-color) calc(l * 0.54 / max(l, 0.54))
          calc(a * 0.54 / max(l, 0.54)) calc(b * 0.54 / max(l, 0.54)) / alpha
      );
      --calendar-card-today-indicator-ink: #fff;
    }
  }
  .month-narrow .month-day.other-month > * {
    opacity: 0.45;
  }
  .month-narrow-marks {
    display: flex;
    height: 6px;
    max-width: min(36px, calc(100% - 4px));
    border-radius: 999px;
    overflow: hidden;
  }
  .month-narrow-mark {
    flex: 0 1 auto;
    width: 6px;
    min-width: 0;
  }
  .month-narrow .month-week-number {
    grid-column: auto;
    grid-row: auto;
    align-self: center;
    justify-self: center;
    padding: 0;
  }
  .month-narrow .month-week-number.current {
    opacity: 1;
    font-weight: 600;
  }
  .month-day-list {
    box-sizing: border-box;
    display: flex;
    flex: var(--calendar-card-month-list-flex, 1 1 0);
    flex-direction: column;
    min-height: var(--calendar-card-month-list-min, calc(2.4em + 33px));
    padding-block: 12px 0;
  }
  .month-day-list-header {
    flex: none;
    padding-block: 2px 8px;
    border-radius: 6px;
  }
  .month-day-list-date {
    font-size: var(--calendar-card-font-size-weekday);
    font-weight: 600;
    line-height: 1.2;
    color: var(--calendar-card-color-weekday);
  }
  .month-day-list-name {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
  }
  .month-day-list-fit {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    row-gap: 0.75em;
    height: 1.2em;
    padding-block: 0.375em;
    margin-block: -0.375em;
    overflow: hidden;
  }
  .month-day-list-date > .month-day-list-fit {
    display: inline-flex;
    width: 100%;
  }
  .month-day-list-rest {
    flex: 1 0 0;
    min-width: 0;
    min-height: 1.2em;
  }
  .month-day-list-form {
    flex: 1000000 0 auto;
    align-self: baseline;
    white-space: nowrap;
  }
  .month-day-table {
    margin: 0;
  }
  .month-day-list-empty {
    padding-block: 4px 8px;
    font-size: var(--calendar-card-font-size-event);
    line-height: 1.2;
    color: var(--secondary-text-color);
  }
  .month-day-list-rows {
    flex: var(--calendar-card-month-list-flex, 1 1 0);
    min-height: 0;
    clip-path: inset(-1em -1em 0 -1em);
  }
  .month-day-list-more {
    display: block;
    box-sizing: border-box;
    width: 100%;
    margin: 0;
    padding-block: 7px 4px;
    padding-inline: calc(12px + var(--calendar-card-line-width-vertical)) 12px;
    border: none;
    border-radius: 6px;
    background: none;
    font: inherit;
    font-size: var(--calendar-card-font-size-time);
    font-weight: 500;
    line-height: 1.2;
    color: var(--secondary-text-color);
    text-align: start;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  .month-day-table + .month-day-list-more {
    margin-top: var(--calendar-card-event-gap, 0px);
  }
  @media (hover: hover) {
    .month-day-list-more:hover {
      background-color: color-mix(in srgb, var(--ha-ripple-hover-color) 8%, transparent);
    }
  }
  .month-day-list-more:focus {
    outline: none;
  }
  .month-day-list-more:focus-visible {
    outline: 2px solid var(--calendar-card-line-color-vertical);
    outline-offset: -2px;
  }
  .month-day-list-probe {
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
  @media (hover: hover) {
    .month-day-list-header.day-add-button:hover {
      background-color: color-mix(in srgb, var(--ha-ripple-hover-color) 8%, transparent);
    }
  }
  .month-day-list[data-add-pressed] > .month-day-list-header {
    background-color: color-mix(in srgb, var(--ha-ripple-pressed-color) 16%, transparent);
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    @media (hover: hover) {
      .month-day-list-header.day-add-button:hover,
      .month-day-list-more:hover {
        background-color: rgba(128, 128, 128, 0.08);
      }
    }
    .month-day-list[data-add-pressed] > .month-day-list-header {
      background-color: rgba(128, 128, 128, 0.16);
    }
  }
`,Qp=[{option:"event_font_size",property:"--calendar-card-font-size-event",kind:"text"},{option:"time_font_size",property:"--calendar-card-font-size-time",kind:"text"},{option:"location_font_size",property:"--calendar-card-font-size-location",kind:"text"},{option:"description_font_size",property:"--calendar-card-font-size-description",kind:"text"},{option:"time_icon_size",property:"--calendar-card-icon-size-time",kind:"icon"},{option:"location_icon_size",property:"--calendar-card-icon-size-location",kind:"icon"},{option:"description_icon_size",property:"--calendar-card-icon-size-description",kind:"icon"},{option:"weather.event.font_size",property:"--calendar-card-weather-event-font-size",kind:"text",unsetAs:"12px"},{option:"weather.event.icon_size",property:"--calendar-card-weather-event-icon-size",kind:"icon"}];function ef(e,t){if(e._isEmptyDay)return 1;const n=Iu(e._entityId,"text_scale",t,e);return"number"==typeof n&&Number.isFinite(n)&&n>0?n:1}function tf(e){const t=new Set([1]);for(const n of e.entities??[]){if("object"!=typeof n||null===n)continue;const e=n.text_scale;"number"==typeof e&&Number.isFinite(e)&&e>0&&t.add(e)}return[...t]}const nf="event-text-scaled",rf=new WeakMap,af=Object.freeze({});function of(e,t){if(1===t||!Number.isFinite(t)||t<=0)return af;let n=rf.get(e);n||(n=new Map,rf.set(e,n));const i=n.get(t);if(i)return i;const r=Jp(e),a=Jp(function(e,t,n){const i={...e},r={...e.weather?.event??{}};for(const{option:e,property:a,kind:o,unsetAs:s}of Qp){const l=t[a];if("string"!=typeof l)continue;const d="text"===o?Ra(l,n,s):Oa(l,n),c=/^weather\.event\.(.+)$/.exec(e);c?r[c[1]]=d:i[e]=d}return i.weather={...e.weather??{},event:r},i}(e,r,t)),o={};for(const[e,t]of Object.entries(a))r[e]!==t&&(o[e]=t);const s=r["--calendar-card-weather-event-icon-size"];if("string"==typeof s){const e=Oa(s,t,!1);e!==(o["--calendar-card-weather-event-icon-size"]??s)&&(o["--calendar-card-weather-event-title-icon-size"]=e)}return n.set(t,o),o}function sf(e){const t=Boolean(e._isEmptyDay),n=new Date,i=new Date(n.getFullYear(),n.getMonth(),n.getDate());let r=!1;if(t)r=!!e.start.date&&fl(e.start.date)<i;else if(e.start.dateTime){const t=e.end.dateTime?new Date(e.end.dateTime):null;r=null!==t&&n>t}else{let t=e.end.date?fl(e.end.date):null;if(t){const e=new Date(t);e.setDate(e.getDate()-1),t=e}r=null!==t&&i>t}return r}function lf(e,t,n,i=sf(e)){const r=!e.start.dateTime;if(!t.show_countdown||r&&!t.show_countdown_allday||e._isEmptyDay)return null;if(t.show_progress_bar&&e._dayOfEvent&&function(e,t){const n=e._sourceStart??e.start,i=n?.dateTime?new Date(n.dateTime):n?.date?fl(n.date):null;return null!==i&&i<=t}(e,new Date))return null;const a={exactDays:Boolean(t.countdown_exact_days),maxDays:t.countdown_max_days};return i?function(e,t="en",n={}){if(e._isEmptyDay)return null;const i=new Date,r=sl(e,i);if(!r)return null;const{days:a}=r;if(void 0!==n.maxDays&&a>n.maxDays)return null;if(a>=1&&n.exactDays)return qs(-a,"day",t,"always");if(1===a)return qs(-1,"day",t,"auto");if(a>1){const e=new Date(i.getFullYear(),i.getMonth(),i.getDate());return Gs(new Date(i.getFullYear(),i.getMonth(),i.getDate()-a),t,e)}const o=Math.round((i.getTime()-r.end.getTime())/36e5);return o>=2?qs(-o,"hour",t):Gs(r.end,t,i)}(e,n,a):function(e,t="en",n={}){if(e._isEmptyDay||!e.start)return null;const i=new Date,r=e.start.dateTime?new Date(e.start.dateTime):e.start.date?fl(e.start.date):null;if(!r||r<=i)return null;const a=xl(i,r);if(void 0!==n.maxDays&&a>n.maxDays)return null;if(a>=1&&n.exactDays)return qs(a,"day",t,"always");if(1===a)return qs(1,"day",t);if(a>1){const e=new Date(i.getFullYear(),i.getMonth(),i.getDate());return Gs(new Date(r.getFullYear(),r.getMonth(),r.getDate()),t,e)}const o=Math.round((r.getTime()-i.getTime())/36e5);return o>=2?qs(o,"hour",t):Gs(r,t,i)}(e,n,a)}function df(e,t,n){const i=new Set;if("once_per_day"!==t.show_countdown)return i;const r=new Date;let a=null;return e.forEach((e,o)=>{const s=lf(e,t,n);if(null===s)return;const l=void 0!==e.start.dateTime&&0===xl(r,new Date(e.start.dateTime))||ll(e,r);s!==a||l||i.add(o),a=s}),i}function cf(e){return{...e,contentParts:{...e.contentParts,countdownStr:null,countUp:!1}}}function uf(e,t,n,i){const r=Boolean(e._isEmptyDay),a=sf(e),o=Br(),s=e._mergedFrom&&e._mergedFrom.length>1?t.duplicate_accent_color:void 0,l=s||Lu(e._entityId,t,void 0,e,o),d=t.event_background_opacity>0?t.event_background_opacity:0,c=d>0?s?Nt(s,d):Lu(e._entityId,t,d,e,o):"",u=Iu(e._entityId,"show_time",t,e)??t.show_time,h=!e.start.dateTime,m=function(e){if(e.start.dateTime)return!1;const t=fl(e.start.date||""),n=fl(e.end.date||"");return n.setDate(n.getDate()-1),t.toDateString()!==n.toDateString()}(e),p=u&&!(h&&!m&&!t.show_single_allday_time)&&!(m&&!t.show_multiday_allday_time)&&!r,f=lf(e,t,n,a),g=t.show_progress_bar&&!r?e._dayOfEvent:void 0,v=null!=g?.day?function(e,t,n){return Xs(n).dayOfEvent.replace("{day}",()=>String(e)).replace("{days}",()=>String(t))}(g.day,g.days,n):null,_=zu(e),y=t.show_progress_bar&&!g?ju(e):null,w=_&&t.show_now_indicator&&!r&&!Hu(e)?Vs(n):null,b=il(e,t,n,i),x=function(e){if("string"==typeof e){const t=e.toLowerCase().trim();return en.includes(t)?t:null}return null}(t.allday_badge),k=function(e){if("string"==typeof e){const t=e.toLowerCase().trim();if(tn.includes(t))return t}return"subtle"}(t.allday_badge_style),$=void 0!==b.allDayLabel,S=function(e){if("string"!=typeof e)return{source:rn};const t=e.trim();if(""===t)return{source:rn};const n=t.toLowerCase();return nn.includes(n)?{source:n}:{source:"custom",color:t}}(t.allday_badge_color),T="custom"===S.source?S.color:l,M="text"===S.source,D="time"===x&&$?{label:b.allDayLabel,lang:n,accent:T,mode:k,inheritsText:M}:void 0,C="title"===x&&$&&!r?{accent:T,mode:k,inheritsText:M}:void 0,A=D?function({text:e,duration:t}){return t?e?`${e}${Zs}${t}`:t:e}(b):nl(b,n),{location:E,description:P}=hf(e,t),L=(O=E,Iu(e._entityId,"location_icon",t,e)||(function(e){return Boolean(e)&&ul.test(e)}(O)?"mdi:microsoft-teams":"mdi:map-marker-outline")),F=ef(e,t),R={eventTime:A,eventTimeEnd:Qs(b),eventTimeDuration:el(b),allDayBadge:D,titlePill:C,eventLocation:E,locationIcon:L,eventDescription:P,entityLabel:Ru(e._entityId,t,e,i),entityLabelAlt:Ou(e._entityId,t,e,i),mergedLabels:Nu(e,t,i),shouldShowTime:p,countdownStr:f,dayCounter:v,countUp:null!==f&&a,progressPercentage:y,nowLabel:w,languageMark:Wm(n,i)};var O;return{isEmptyDay:r,isPastEvent:a,isNow:null!==w,entityAccentColor:l,entityAccentBackgroundColor:c,accentTextProperties:qp(t,l,r),textScaleProperties:of(t,F),textScaled:1!==F,showsTime:u,contentParts:R}}function hf(e,t){const n=!e.start.dateTime&&!e._splitFromTimedEvent;return{location:n&&!t.show_location_allday?"":e.location||"",description:n&&!t.show_description_allday?"":e.description||""}}function mf(e){return!0===e.open_links&&"none"===ed(e.event_tap_action)&&"none"===ed(e.event_hold_action)}function pf(e,t){if(Array.isArray(e))for(const n of e){if(null===n||"object"!=typeof n)continue;const{entity:e,name:i}=n;if(e===t&&"string"==typeof i&&""!==i.trim())return i.trim()}}function ff(e,t,n){return pf(t?.entities,e)??function(e,t){const n=t?.states?.[e]?.attributes?.friendly_name;return"string"==typeof n&&""!==n.trim()?n:void 0}(e,n)??e}function gf(e,t,n){const i=pf(t?.entities,e);return void 0!==i&&void 0===n?.states?.[e]?`${i} (${e})`:ff(e,t,n)}function vf(e,t,n,i){return(t.mergedLabels??(t.entityLabel?[{value:t.entityLabel,type:e._matchedConfig?.label_type}]:[])).flatMap(({value:r,type:a})=>{const o=Ht(r,a);if("none"===o)return[];if("text"===o)return[r];const s=t.mergedLabels?e._mergedFrom?.find(({entityId:t,config:a})=>Ru(t,n,{...e,_matchedConfig:a},i)===r):void 0,l=s?.entityId??e._entityId,d=s?{...e,_matchedConfig:s.config}:e,c=Fu(l,n,d);if(void 0!==c&&Ye(c)){const e=i?.states[c]?.attributes.friendly_name;return["string"==typeof e&&e.trim()?e:c]}return l?[ff(l,n,i)]:[]})}function _f(e,t,n){const i=n??30;if(!e||!Number.isFinite(t)||t<=0||!Number.isFinite(e.bodyHeightPx)||e.bodyHeightPx<=0||!Number.isFinite(e.fontPx)||e.fontPx<=0||!Number.isFinite(e.chromePx))return i;const r=e.bodyHeightPx/t,a=(Math.max(24,2*e.fontPx)+Math.max(0,e.chromePx-7))/r,o=e=>Math.min(t+1,Math.max(30,5*Math.ceil((e-.05)/5))),s=o(a);if(void 0===n||s>=n)return s;const l=o(a+2);return l<n?l:n}function yf(e,t){return"number"==typeof e?e:e.get(t)??e.get(1)??30}const wf="grid-scale-probe";function bf(e){const t=[],n=[];for(const i of e.events){if(i._isEmptyDay)continue;if(!i.start.dateTime||i._gridBanner){t.push(i);continue}const e=vc(i);e&&n.push({...i,...e})}return{allDay:t,timed:n}}function xf(e,t){return e.isNewMonth&&!_a(t.month_separator_width)?{kind:"month",width:t.month_separator_width,color:t.month_separator_color}:e.isNewWeek&&!_a(t.week_separator_width)?{kind:"week",width:t.week_separator_width,color:kp(t),ink:$p(t)}:_a(t.day_separator_width)?null:{kind:"day",width:t.day_separator_width,color:t.day_separator_color}}function kf(e,t,n,i,r=!1){return B`
    <div
      class="grid-boundary grid-boundary-${e}"
      aria-hidden="true"
      style=${sm({gridColumn:"2 / -1",gridRow:"3",alignSelf:i,height:t,...r?{"margin-block-end":`calc(-1 * ${t})`}:{},"--calendar-card-grid-rule-paint":Fe(n)})}
    ></div>
  `}function $f(e,t,n,i){const r=[];return e.forEach((i,a)=>{const o=new Date(i.timestamp);if(!bl(o,t))return;if(a===n)return;const s=r[r.length-1];void 0!==s&&s.start+s.span===a&&1===xl(new Date(e[a-1].timestamp),o)?s.span+=1:r.push({start:a,span:1})}),r.map(({start:e,span:t})=>B`
      <div
        class="grid-weekend"
        aria-hidden="true"
        style=${sm({gridColumn:`${e+2} / span ${t}`,gridRow:i})}
      ></div>
    `)}function Sf(e,t){return B`
    <div
      class="grid-today"
      aria-hidden="true"
      style=${sm({gridColumn:`${e+2} / span 1`,gridRow:t})}
    ></div>
  `}function Tf(e,t,n,i,r){const a=Re(n),o=Re(i);if(!a&&!o)return V;const s=o?e.findIndex(e=>vp(e.timestamp).isToday):-1;return[...a?$f(e,t,s,r):[],...-1===s?[]:[Sf(s,r)]]}function Mf(e,t,n){const i=Math.floor(e/60)%24,r=String(e%60).padStart(2,"0");if(t)return n?`${i}:${r}`:String(i);const a=i<12?"AM":"PM",o=i%12==0?12:i%12;return n?`${o}:${r} ${a}`:`${o} ${a}`}function Df(e,t,n){const i=e.endMin-e.startMin,r=t/i*100,a=60/i*100,o=(t-e.startMin%t)%t/i*100,s=(60-e.startMin%60)%60/i*100,l=Fe(n);return{"--calendar-card-grid-rule-color":l,"--calendar-card-grid-slot-color":t<60?l:"transparent","--calendar-card-grid-slot-pct":`${r}%`,"--calendar-card-grid-hour-pct":`${a}%`,"--calendar-card-grid-slot-offset":`${o}%`,"--calendar-card-grid-hour-offset":`${s}%`}}function Cf(e,t){return{"--calendar-card-grid-block-top":`${e.topPct}%`,"--calendar-card-grid-block-height":`${e.heightPct}%`,...Af(e,t),...e.clippedBottom||t.touchedBelow||!t.ruledEnd?{"--calendar-card-grid-block-gap-below":"0px"}:{}}}function Af(e,t){const n="--calendar-card-grid-block-gap-above";return e.clippedTop?{[n]:"0px"}:t.ruledStart?t.touchedAbove?{[n]:"max(var(--calendar-card-grid-rule-width), var(--calendar-card-grid-event-gap))"}:{}:{[n]:"var(--calendar-card-grid-event-gap)"}}function Ef(e,t){return{style:{insetInlineStart:`calc(${e}% + var(--calendar-card-grid-event-gap))`,width:`calc(${t-e}% - var(--calendar-card-grid-event-gap) * 2)`},raised:!1,contentLimited:!1}}function Pf(e,t){const n=e.x1Pct-e.x0Pct,i=Math.max(e.startMin,t.startMin),r=Math.min(e.endMin,t.endMin)-i,a=r>0?(e.contentEndMin-i)/r:1,o=n>0?(e.contentX1Pct-e.x0Pct)/n:1,s=a<.999999,l=o<.999999;return{style:{...Ef(e.x0Pct,e.x1Pct).style,...s?{"--calendar-card-grid-text-block-ratio":String(a)}:{},...l?{"--calendar-card-grid-text-inline-ratio":String(o)}:{}},raised:e.raised,contentLimited:s||l}}function Lf(e,t,n,i,r,a,o,s,l=!1,d,c=null){const u=uf(e,r,a,s),h=zh(e,u.entityAccentColor,l),m=function(e,t,n,i,r){const a=t.nowLabel?{...t,nowLabel:null}:t,o={...a,eventTime:"",eventTimeEnd:void 0,eventTimeDuration:void 0,shouldShowTime:!1,countdownStr:null,countUp:!1};if(e._isMultiDaySegment&&!e._gridSegmentStartsEvent){const r=n.show_duration&&t.shouldShowTime?rl(e,i):null;return r?{...o,eventTime:r,shouldShowTime:!0}:o}const s=e._gridSource??(e._isMultiDaySegment?void 0:e),l=s?.start.dateTime?new Date(s.start.dateTime):void 0,d=s?.end.dateTime?new Date(s.end.dateTime):void 0;if(!(void 0!==s&&void 0!==l&&void 0!==d&&d.getTime()>l.getTime()&&xl(l,d)>0)){if(!e._isMultiDaySegment)return a;const t=e.start.dateTime?new Date(e.start.dateTime):void 0;if(!t||Number.isNaN(t.getTime()))return o;const s=Pl(n,r);return{...a,eventTime:Dl(t,s,n.time_two_digit_hours,i),eventTimeEnd:void 0}}const c={...e,start:s.start,end:s.end},u=sf(c),h=lf(c,n,i,u),m={...a,countdownStr:h,countUp:null!==h&&u},p=Pl(n,r),f=Dl(l,p,n.time_two_digit_hours,i),g=n.show_duration?rl({...e,start:s.start,end:s.end},i):null,v=g?` ${g}`:"";if(!n.show_end_time)return{...m,eventTime:`${f}${v}`,eventTimeEnd:v||void 0,eventTimeDuration:v||void 0};const _=e=>0===e.getHours()&&0===e.getMinutes(),y=xl(l,d),w=1===y&&d.getTime()===Jd(d).getTime()&&_(d)&&!_(l)?"":` ⁦(+${y})⁩`,b=` - ${Dl(d,p,n.time_two_digit_hours,i)}${w}${v}`;return{...m,eventTime:`${f}${b}`,eventTimeEnd:b,eventTimeDuration:v||void 0}}(e,u.contentParts,r,a,s),p=u.entityAccentBackgroundColor,f=null!==c&&e.startMin<=c&&c<e.endMin,g=i.raised?B`<div
        class=${rm({"grid-event-backdrop":!0,"clipped-top":t.clippedTop,"clipped-bottom":t.clippedBottom})}
        aria-hidden="true"
        style=${sm({...Cf(t,n),...i.style,"--calendar-card-grid-raised-top":`${t.topPct}cqh`})}
        .calendarCardDaySlot=${qh}
      >
        <div class="grid-event-backdrop-ground">
          <div class="grid-event-backdrop-rules"></div>
        </div>
      </div>`:V;return B`
    ${g}
    <div
      class=${rm({event:!0,"grid-event":!0,"past-event":u.isPastEvent,"clipped-top":t.clippedTop,"clipped-bottom":t.clippedBottom,"grid-event-raised":i.raised,"grid-event-content-limited":i.contentLimited,"grid-event-now":f,"event-interactive":void 0!==h,"search-ring":!0===e._searchRing,[nf]:u.textScaled})}
      style=${sm({...Cf(t,n),...i.style,...f?{"--calendar-card-grid-block-top-cqh":`${t.topPct}cqh`}:{},"--calendar-card-event-accent-bar-color":u.entityAccentColor,backgroundColor:p,...u.accentTextProperties,...u.textScaleProperties})}
      role=${h?"button":V}
      tabindex=${h?"0":V}
      aria-describedby=${h&&d?d:V}
      .calendarCardEventTap=${h}
      .calendarCardDaySlot=${qh}
    >
      ${zp()}
      <div
        class="grid-event-accessible"
        role="group"
        lang=${a}
        aria-label=${function(e,t,n,i,r,a){const o=e._gridSource?{...e,start:e._gridSource.start,end:e._gridSource.end}:e,s=o.start.dateTime!==e.start.dateTime||o.end.dateTime!==e.end.dateTime?uf(o,n,i,a).contentParts:t,l=Rp(e,n,r,"row",a),d=ma(n,"show_now_line")&&zu(e)?Vs(i):"";return[...vf(e,t,n,a),e.summary,d,s.shouldShowTime?s.eventTime:"",s.countdownStr,t.eventLocation,t.eventDescription,l?.showTemp?`${l.forecast.temperature}°`:"",l?.showUvIndex?`UV${l.forecast.uv_index}`:"",l?.conditionText,null!==t.progressPercentage&&n.show_progress_bar?`${Math.round(t.progressPercentage)}%`:""].filter(e=>"string"==typeof e&&e.trim().length>0).map(e=>`⁨${e.trim()}⁩`).join(", ")}(e,u.contentParts,r,a,o,s)}
      ></div>
      <div class="grid-event-disclosure" aria-hidden="true">
        ${Np(e,r,m,{weatherForecasts:o,weatherPlacement:"row",progressPlacement:"row",countdownPlacement:"text",hass:s,splitTimeEnd:!0,titleWords:!0})}
      </div>
    </div>
  `}function Ff(e,t,n,i,r,a,o=!1,s,l={firstColumn:2}){const d=uf(e,i,r,a),c=zh(e,d.entityAccentColor,o),u=void 0!==e.start.dateTime,h=u?function(e,t,n,i,r,a){const o={start:null,end:null,long:!1};if(!n.shouldShowTime||!e.start.dateTime||!e.end.dateTime)return o;const s=new Date(e.start.dateTime),l=new Date(e.end.dateTime);if(Number.isNaN(s.getTime())||Number.isNaN(l.getTime()))return o;const d=Pl(i,a),c=e=>e.getTime()===Jd(e).getTime()?null:El(Dl(e,d,i.time_two_digit_hours,r));return{start:t.continuesBefore?null:c(s),end:t.continuesAfter||!i.show_end_time?null:c(l),long:!d}}(e,t,d.contentParts,i,r,a):null,m=i.show_duration&&d.showsTime?rl(e,r,function(e,t){if(t.continuesBefore||t.continuesAfter)return!0;const n=e._gridSource??e,i=n.start.date&&n.end.date?xl(fl(n.start.date),fl(n.end.date)):kl(n.start,n.end)?.days??1;return t.span<i}(e,t)):null,p=m?B`<span class="grid-banner-duration">${m}</span>`:V;return B`
    <div
      class=${rm({event:!0,"grid-banner":!0,"grid-banner-timed":u,"grid-banner-lasts":null!==m,"past-event":d.isPastEvent,"continues-before":t.continuesBefore,"continues-after":t.continuesAfter,"event-interactive":void 0!==c,"search-ring":!0===e._searchRing,[nf]:d.textScaled,...l.className?{[l.className]:!0}:{}})}
      style=${sm({gridColumn:`${t.columnIndex+l.firstColumn} / span ${t.span}`,...void 0===n?{}:l.rows&&l.rows>1?{gridRow:`${n} / span ${l.rows}`,alignSelf:"start"}:{gridRow:String(n)},backgroundColor:d.entityAccentBackgroundColor,...d.accentTextProperties,...d.textScaleProperties})}
      id=${l.id??V}
      role=${c?"button":V}
      tabindex=${c?l.tabIndex??"0":V}
      aria-describedby=${c&&s?s:V}
      .calendarCardEventTap=${c}
      .calendarCardDaySlot=${qh}
    >
      ${h?function(e,t,n,i,r,a,o=V){return B`<div
      class="grid-event-accessible"
      role="group"
      lang=${r}
      aria-label=${function(e,t,n,i){return[...vf(e,t,n,i),e.summary,t.shouldShowTime?t.eventTime:""].filter(e=>"string"==typeof e&&e.trim().length>0).map(e=>`⁨${e.trim()}⁩`).join(", ")}(e,n,i,a)}
    ></div>
    <div
      class=${rm({"grid-banner-content":!0,"grid-banner-two-times":null!==t.start&&null!==t.end,"grid-banner-long-times":t.long})}
      aria-hidden="true"
    >
      ${null===t.start?V:B`<span class="grid-banner-time">${t.start}</span>`}
      <span class="grid-banner-title">${Rf(e)}</span>${o}
      ${null===t.end?V:B`<span class="grid-banner-time grid-banner-time-end">${t.end}</span>`}
    </div>`}(e,h,d.contentParts,i,r,a,p):m?B`<span class="grid-banner-title">${Rf(e)}</span>${p}`:B`<span class="grid-banner-title">${Rf(e)}</span>`}
    </div>
  `}function Rf(e){return e._privateTitle?B`${$m()}${e.summary??""}`:e.summary??""}const Of="grid-new-event";function Nf(e,t,n,i,r,a,o,s){const l=Qd(e.startMin,e.endMin,t);if(!l)return V;const[d]=ec([{...e,x0Pct:0,x1Pct:100}],t,ma(r,"slot_minutes"));return Lf(e,l,d,{...Ef(0,100),raised:n},r,a,o,s,!1,void 0,i)}function If(e,t,n,i,r){return Ff(e,t,void 0,n,i,r)}function zf(e,t){const n=yc(e.map(e=>bf(e).allDay),e.map(e=>Jd(new Date(e.timestamp))));n.sort((e,t)=>t.placement.span-e.placement.span||e.placement.columnIndex-t.placement.columnIndex);const i=wc(n.map(({placement:e})=>({start:e.columnIndex,end:e.columnIndex+e.span})),t);return n.flatMap((e,t)=>i[t]<0?[]:[{...e,row:i[t]+1}])}function jf(e,t,n,i,r,a=new Date,o=30,s=1/0,l=!1,d,c=!1,u=!1){if(0===e.length)return B`<div class="grid-container"></div>`;const h=Vd(ma(t,"start_time"),ma(t,"end_time")),m=ma(t,"slot_minutes"),p=ma(t,"hour_height"),f=ma(t,"axis_width"),g=ma(t,"max_simultaneous_events"),v=ma(t,"show_now_line"),_=ma(t,"show_axis_labels"),y=ma(t,"allday_band_max_rows"),w=ma(t,"day_header_gap"),b=ma(t,"weekend_background_color"),x=ma(t,"today_background_color"),k=ma(t,"hour_line_width"),$=ma(t,"hour_line_color"),S=(h.endMin-h.startMin)/60,T=oo(t.day_spacing),M=(D=e).map((e,t)=>{const n=t>0?D[t-1]:void 0;return{isNewWeek:!n||e.weekNumber!==n.weekNumber,isNewMonth:Boolean(n&&e.monthNumber!==n.monthNumber)}});var D;const C=e.map(e=>l||d?jh(e.timestamp):void 0),A=zf(e,y),E=A.reduce((e,t)=>Math.max(e,t.row),0),P=Math.max(E,c?1:0),L=P>0,F=L?"4":"3 / span 2",R=M.map((e,n)=>({separator:xf(e,t),index:n})).filter(e=>null!==e.separator&&e.index>0),O=e=>R.map(({separator:t,index:n})=>function(e,t,n,i){return B`
    <div
      class="grid-separator grid-separator-${e.kind}"
      style=${sm({gridColumn:String(t+2),gridRow:i,width:e.width,"--calendar-card-grid-rule-paint":Fe(e.color),color:e.ink,marginInlineStart:`calc(-0.5 * (${n} + ${e.width}))`})}
    ></div>
  `}(t,n,T,e)),N=ma(t,"day_header_separator_width"),I=ma(t,"day_header_separator_color"),z=ma(t,"allday_band_line_width"),j=ma(t,"allday_band_line_color"),H=[...L&&!_a(N)?[kf("band-top",N,I,"start")]:[],..._a(z)?[]:[kf("band-bottom",z,j,L?"end":"start",!L)]],W=u||null!=t.height&&""!==t.height&&"auto"!==t.height,q=`calc(${S} * min(${De.GRID_MIN_HOUR_HEIGHT}, ${p}))`,U="cramp"===vo(t,"grid");return B`
    <div
      class="grid-container"
      tabindex=${U?"0":V}
      style=${sm({gridTemplateColumns:`${f} repeat(${e.length}, minmax(${U?"2rem":"0"}, 1fr))`,...U?{overflowX:"auto"}:{},columnGap:T,"--calendar-card-grid-body-height":W?`minmax(${q}, 1fr)`:`calc(${p} * ${S})`,...W?{minHeight:"100%"}:{},"--calendar-card-column-header-gap":w,"--calendar-card-grid-band-top-width":N,"--calendar-card-grid-band-bottom-width":z,"--calendar-card-grid-rule-width":k,...Df(h,m,$),...Re(b)?{"--calendar-card-grid-weekend":Fe(b)}:{},...Re(x)?{"--calendar-card-grid-today":Fe(x)}:{}})}
    >
      ${Tf(e,r,b,x,F)}
      <div class="grid-head">
        ${function(e,t){const n=e.map((n,i)=>{const r=i>0?e[i-1]:void 0;return!(r&&n.weekNumber===r.weekNumber||0===i&&!t.show_current_week_number)});return null!==t.show_week_numbers&&n.some(Boolean)?e.map((e,t)=>xp(e.weekNumber,n[t],t+2)):e.map(()=>V)}(e,t)}
        ${e.map((e,a)=>function(e,t,n,i,r,a,o,s){const l=new Date(e.timestamp),{isToday:d,isTomorrow:c,isPast:u}=vp(e.timestamp),h=gp(l,t,r);return B`
    <div
      class=${rm({"grid-day-header":!0,today:d,tomorrow:c,"future-day":!d,"past-day":u,weekend:bl(l,a)})}
      style=${sm({gridColumn:String(i+2),gridRow:"2"})}
      .calendarCardDaySlot=${Gh(e.timestamp)}
    >
      ${bp(l,t,n,d,h,null,a,o,s&&{label:s.label,timestamp:e.timestamp})}
    </div>
  `}(e,t,n,a,i,r,C[a],d))}
      </div>
      <div class="grid-allday-row">
        ${L?Tf(e,r,b,x,"3"):V}
        ${L?B`
                <div
                  class="grid-allday-band"
                  style=${sm({gridColumn:`1 / span ${e.length+1}`,gridRow:"3",gridTemplateColumns:"subgrid",gridTemplateRows:`repeat(${P}, auto)`})}
                  .calendarCardDaySlot=${Vh}
                >
                  ${A.map(e=>Ff(e.event,e.placement,e.row,t,n,r,l,C[e.placement.columnIndex]))}
                </div>
              `:V}
        ${L?O("3"):V} ${H}
      </div>
      ${_?function(e,t,n){const i=e.endMin-e.startMin,r=Pl(t,n),a=Gd(Number(ma(t,"axis_label_minutes"))),o=a%60!=0,s=function(e,t){const n=Gd(t),i=[];for(let t=Math.ceil(e.startMin/n)*n;t<=e.endMin;t+=n)i.push(t);return i}(e,a).map(t=>({text:El(Mf(t,r,o)),topPct:(t-e.startMin)/i*100}));return B`
    <div class="grid-axis" style=${sm({gridColumn:"1",gridRow:"4"})}>
      <div class="grid-axis-sizer" aria-hidden="true">
        ${s.map(({text:e})=>B`<span>${e}</span>`)}
      </div>
      ${s.map(({text:e,topPct:t})=>B`<div
            class="grid-axis-label"
            style=${sm({"--calendar-card-grid-axis-label-top":`${t}%`})}
          >
            ${e}
          </div>`)}
    </div>
  `}(h,t,r):V} ${K=e.length,B`
    <div
      class="grid-rules"
      aria-hidden="true"
      style=${sm({gridColumn:`2 / span ${K}`,gridRow:"4"})}
    ></div>
  `}
      ${function(e,t){return Kd(e.endMin,t)}(h,m)?(G=$,B`
    <div
      class="grid-boundary grid-boundary-body-end"
      aria-hidden="true"
      style=${sm({gridColumn:"2 / -1",gridRow:"4",alignSelf:"end","--calendar-card-grid-rule-paint":Fe(G)})}
    ></div>
  `):V}
      ${e.map((e,d)=>function(e,t,n,i,r,a,o,s,l,d,c,u,h=!1,m){const p=new Date(e.timestamp),{isToday:f,isPast:g}=vp(e.timestamp),{timed:v}=bf(e),_=v.filter(e=>Zd(e.startMin,e.endMin,t)),y="cascade"===ma(n,"overlap_layout"),w=[],b=[];if(y){const e=function(e,t,n){const i=Number.isFinite(n.maxLanes)?Math.max(1,Math.floor(n.maxLanes)):1,r=100/(i+1),a=[...e].sort((e,t)=>e.startMin-t.startMin||t.endMin-e.endMin),o=new Set;for(;;){const e=mc(a,t,n,i,o),s=e.filter(e=>!e.hidden&&null!==e.host&&(e.x1-e.x0<r-dc||e.contentX1-e.x0<r-dc)).map(e=>e.host.order).filter(e=>!o.has(e));if(0===s.length)return fc(e);s.forEach(e=>o.add(e))}}(_,t,{thresholdMin:yf(o,1),hostThresholdMin:e=>yf(o,ef(e,n)),indentPct:6,maxDepth:3,maxLanes:a,stripPct:s});for(const n of e.placed)w.push({event:n,horizontal:Pf(n,t),span:n});for(const t of e.overflows)b.push({overflow:t,horizontal:Ef(t.x0Pct,t.x1Pct),span:t})}else{const{placed:e,overflows:t}=function(e,t,n=1/0){const i=Number.isFinite(t)?Math.max(1,Math.floor(t)):1,r=[...e].sort((e,t)=>e.startMin-t.startMin||t.endMin-e.endMin),a=[];let o=[],s=nc;for(const e of r)o.length>0&&rc(s,e.startMin)&&(a.push(o),o=[],s=nc),o.push(e),s=ac(s,ic(e));o.length>0&&a.push(o);const l=[],d=[];for(const e of a){const t=lc(e,i),r=t.reduce((e,t)=>Math.max(e,t.laneIndex+1),0),{share:a,overflowStart:o}=sc(0,100,r,i,n),s=e=>({laneIndex:e,x0Pct:e*a,x1Pct:(e+1)*a});if(r<=i){for(const e of t)l.push({...e.event,...s(e.laneIndex),laneCount:r});continue}const c=t.filter(e=>e.laneIndex<i),u=t.filter(e=>e.laneIndex>=i).map(e=>e.event),h=i+1;for(const e of c)l.push({...e.event,...s(e.laneIndex),laneCount:h});for(const e of oc(u,e=>e))d.push({startMin:Math.min(...e.map(e=>e.startMin)),endMin:Math.max(...e.map(e=>e.endMin)),laneIndex:i,laneCount:h,x0Pct:o,x1Pct:100,hidden:e})}return{placed:l,overflows:d}}(_,a,s);for(const t of e)w.push({event:t,horizontal:Ef(t.x0Pct,t.x1Pct),span:t});for(const e of t)b.push({overflow:e,horizontal:Ef(e.x0Pct,e.x1Pct),span:e})}const x=ec([...w,...b].map(({span:e})=>e),t,ma(n,"slot_minutes")),k=new Date(d);k.setSeconds(0,0);const $=l&&f?tc(k,t):null,S=null===$?null:Yd(k),T=sm({top:`${$}%`});return B`
    <div
      class=${rm({"grid-day-body":!0,today:f,"past-day":g,weekend:bl(p,u)})}
      style=${sm({gridColumn:String(r+2),gridRow:"4"})}
      .calendarCardDaySlot=${M=e.timestamp,D=t.startMin,C=t.endMin,{kind:"time",timestamp:M,startMin:D,endMin:C}}
    >
      ${null===$?V:B`<div class="grid-now-line" aria-hidden="true" style=${T}></div>`}
      <div
        class=${rm({"grid-day-plane":!0,"grid-day-plane-now":null!==$})}
        style=${sm(null===$?{}:{"--calendar-card-grid-now-y":`${$}cqh`})}
      >
        ${vm(w,({event:e},t)=>`${e._entityId}-${e.summary}-${t}`,({event:e,horizontal:r},a)=>{const o=Qd(e.startMin,e.endMin,t);return o?Lf(e,o,x[a],r,n,i,c,u,h,m,S):V})}
        ${b.map(({overflow:e,horizontal:n},r)=>{const a=Qd(e.startMin,e.endMin,t);return a?function(e,t,n,i,r){const a=Bm(`+${e.hidden.length}`,r);return B`
    <div
      class="event grid-event grid-event-overflow"
      title=${e.hidden.map(e=>e.summary??"").join("\n")}
      style=${sm({...Cf(t,n),...i.style})}
      .calendarCardDaySlot=${qh}
    >
      <div class="grid-event-overflow-label">${a}</div>
    </div>
  `}(e,a,x[w.length+r],n,Wm(i,u)):V})}
      </div>
      ${null===$?V:B`<div class="grid-now-dot" aria-hidden="true" style=${T}></div>`}
    </div>
  `;var M,D,C}(e,h,t,n,d,g,o,s,v,a,i,r,l,C[d]))}
      ${O(F)}
    </div>
  `;var G,K}const Hf="#010203",Wf=/\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\([^()]*\)|#[0-9a-f]{3,8}\b|\btransparent\b/gi,Bf=/\b(?:url|image|image-set|cross-fade|element|paint|color-mix)\(|\bcurrentcolor\b/i;function qf(e,t){if(e.fillStyle=Hf,e.fillStyle=t,e.fillStyle===Hf)return;e.clearRect(0,0,1,1),e.fillRect(0,0,1,1);const[n,i,r,a]=e.getImageData(0,0,1,1).data;return[n,i,r,a]}function Uf(e,t,n){const i=getComputedStyle(e),r=i.backgroundColor,a=i.backgroundImage,o=function(e,t){const n=e.createElement("canvas");n.width=1,n.height=1;const i=n.getContext("2d",{willReadFrequently:!0});if(!i)return;const r=qf(i,t.background);if(!r)return;const a=""===(o=t.image)||"none"===o?[]:Bf.test(o)?void 0:o.match(Wf)??void 0;var o;return a?.length&&a.every(e=>255===qf(i,e)?.[3])?void 0:function(e,t,n){if(255===e[3])return;let i=void 0!==n&&.2126*n[0]+.7152*n[1]+.0722*n[2]>127.5?[0,0,0]:[255,255,255];for(const n of[t,e]){if(!n)continue;const e=n[3]/255;i=i.map((t,i)=>n[i]*e+t*(1-e))}const[r,a,o]=i.map(Math.round);return`rgb(${r}, ${a}, ${o})`}(r,qf(i,t.page()),qf(i,t.ink))}(e.ownerDocument,{background:r,image:a,ink:getComputedStyle(n).color,page:()=>getComputedStyle(t).backgroundColor});return void 0!==o?o:""!==a&&"none"!==a||function(e){const t=e.trim();return""!==t&&"undefined"!=typeof CSS&&"function"==typeof CSS.supports&&!CSS.supports("background-color",t)}(i.getPropertyValue("--calendar-card-surface-value"))?r:void 0}function Vf(e,t,n){void 0===n?e.style.removeProperty(t):e.style.getPropertyValue(t)!==n&&e.style.setProperty(t,n)}const Gf=new Map;function Kf(e,t){const n=e.scrollTop;e.style.maxHeight="";const i=e.getBoundingClientRect(),r=e.ownerDocument.defaultView,a="rtl"===getComputedStyle(t).direction,o=t.getBoundingClientRect(),s=function(e,t,n,i){const r=i?e.right-t.width:e.left,a=Math.max(8,n.width-8-t.width),o=Math.min(Math.max(r,8),a),s=n.height-e.bottom-4-8,l=e.top-4-8;if(t.height<=s)return{left:o,top:e.bottom+4,maxHeight:void 0};if(t.height<=l)return{left:o,top:e.top-4-t.height,maxHeight:void 0};if(s>=l)return{left:o,top:e.bottom+4,maxHeight:Math.max(0,s)};const d=Math.max(0,l);return{left:o,top:e.top-4-d,maxHeight:d}}(o,{width:i.width,height:i.height},{width:r?.innerWidth??i.width,height:r?.innerHeight??i.height},a);return e.style.left=`${s.left}px`,e.style.top=`${s.top}px`,void 0!==s.maxHeight&&(e.style.maxHeight=`${s.maxHeight}px`),e.scrollTop=n,{top:o.top,left:o.left}}function Yf(e,t){const n=e.querySelector(`:scope > .${t.surface}`),i=e.querySelector(`:scope > .${t.page}`),r=n&&i?Uf(n,i,e):void 0;Vf(e,"--calendar-card-legend-menu-surface",n&&i?r??getComputedStyle(n).backgroundColor:void 0)}function Jf(e,t){const n=Gf.get(e);n&&(n.reason??=t,e.open?e.close():Xf(e))}function Xf(e){const t=Gf.get(e);if(!t)return;Gf.delete(e),t.stop(),t.opener.setAttribute("aria-expanded","false");const n=t.reason??"escape";("escape"===n||!t.pressed&&("backdrop"===n||"button"===n))&&t.opener.isConnected&&t.opener.focus({preventScroll:!0})}function Zf(e,t,n,i){Gf.has(t)?Jf(t,"button"):n||function(e,t,n,i){if(e.open||Gf.has(e)||!e.isConnected)return;try{e.showModal()}catch{return}const r=Kf(e,t);Yf(e,i),n&&e.focus({preventScroll:!0}),t.setAttribute("aria-expanded","true");const a=e.ownerDocument.defaultView??window,o=n=>{if(n.composedPath().includes(e))return;const i=Gf.get(e);i&&!function(e,t){const n=e.getBoundingClientRect();return Math.abs(n.top-t.top)>=.5||Math.abs(n.left-t.left)>=.5}(t,i.placedAt)||Jf(e,"scroll")},s=()=>Jf(e,"resize"),l=()=>Xf(e);a.addEventListener("scroll",o,{capture:!0,passive:!0}),a.addEventListener("resize",s),e.addEventListener("close",l),Gf.set(e,{opener:t,pressed:n,parts:i,reason:void 0,placedAt:r,stop:()=>{a.removeEventListener("scroll",o,{capture:!0}),a.removeEventListener("resize",s),e.removeEventListener("close",l)}})}(t,e.currentTarget,e.detail>0,i)}function Qf(e){e.stopPropagation();const t=e.currentTarget;if(e.target!==t)return;const n=t.getBoundingClientRect();e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom||Jf(t,"backdrop")}function eg(e,t){for(const[n,i]of[...Gf])void 0!==t&&i.parts.kind!==t||n.isConnected&&!e.contains(n)||Jf(n,"gone")}function tg(e,t){return[...Gf].some(([n,i])=>(void 0===t||i.parts.kind===t)&&e.contains(n))}const ng="Calendars",ig="calendar-card-pro-legend-changed",rg={kind:"legend",surface:"legend-menu-surface",page:"legend-menu-page"};function ag(e){e.stopPropagation()}function og(e){return sm({"--calendar-card-legend-color":e.color})}function sg(e,t,n,i){return B`<button
    type="button"
    class=${n?"legend-menu-action unavailable":"legend-menu-action"}
    data-action=${t?"show-all":"hide-all"}
    aria-disabled=${n?"true":V}
    ?autofocus=${i}
    @click=${()=>{e.inert||n||e.onSetAll(t)}}
  >
    ${t?e.showAllLabel:e.hideAllLabel}
  </button>`}function lg(e){const t=[];for(const n of e){const e="string"==typeof n?n:n?.entity;"string"!=typeof e||""===e||t.includes(e)||t.push(e)}return t.filter(t=>!1!==function(e,t){if(Array.isArray(e))for(const n of e){if(null===n||"object"!=typeof n)continue;const{entity:e,show_in_legend:i}=n;if(e===t&&"boolean"==typeof i)return i}}(e,t))}const dg={list:[["2","3","10","7","2"],["15","3","31","7","2",".4"],["2","12.5","10","7","2"],["15","12.5","31","7","2",".4"],["2","22","10","7","2"],["15","22","31","7","2",".4"]],column:[["2","3","13","5","2"],["17.5","3","13","5","2"],["33","3","13","5","2"],["2","10.5","13","18.5","2",".4"],["17.5","10.5","13","18.5","2",".4"],["33","10.5","13","18.5","2",".4"]],grid:[["9","3","11","4","1.5"],["22","3","11","4","1.5"],["35","3","11","4","1.5"],["9","9","24","3","1.5",".55"],["2","15.5","5","1.5",".75",".5"],["2","21","5","1.5",".75",".5"],["2","26.5","5","1.5",".75",".5"],["9","14.5","11","6","1.5",".4"],["9","23","11","5","1.5",".4"],["22","14.5","11","13.5","1.5",".4"],["35","19","11","7","1.5",".4"]],month:[["2","3","44","4","1.5"],["2","9.5","5","4","1",".4"],["8.5","9.5","5","4","1",".4"],["15","9.5","5","4","1",".4"],["21.5","9.5","5","4","1",".4"],["28","9.5","5","4","1",".4"],["34.5","9.5","5","4","1",".4"],["41","9.5","5","4","1",".4"],["2","15","5","4","1",".4"],["8.5","15","18","4","1",".55"],["28","15","5","4","1",".4"],["34.5","15","5","4","1",".4"],["41","15","5","4","1",".4"],["2","20.5","5","4","1",".4"],["8.5","20.5","5","4","1",".4"],["15","20.5","5","4","1",".4"],["21.5","20.5","5","4","1"],["28","20.5","5","4","1",".4"],["34.5","20.5","5","4","1",".4"],["41","20.5","5","4","1",".4"],["2","26","5","4","1",".4"],["8.5","26","5","4","1",".4"],["15","26","5","4","1",".4"],["21.5","26","5","4","1",".4"],["28","26","5","4","1",".4"],["34.5","26","5","4","1",".4"],["41","26","5","4","1",".4"]]},cg="Refresh",ug="Reset",hg={kind:"overflow",surface:"custom-menu-surface",page:"custom-menu-page"},mg={kind:"layout",surface:"layout-menu-surface",page:"layout-menu-page"},pg={list:"viewList",column:"viewColumns",grid:"viewGrid",month:"viewMonth"};function fg(e){e.stopPropagation()}const gg=new WeakMap,vg=new WeakSet;function _g(e){try{return e.matches(":open")}catch{return}}function yg(e){const t=e.pointerType||"mouse";return e.detail>0?{x:e.clientX,y:e.clientY,pointerType:t}:void 0}function wg(e){return[...Eg(e)?[{kind:"filter"}]:[],...e.addEvent?[{kind:"add"}]:[],...(e.customButtons??[]).map((e,t)=>({kind:"button",index:t}))]}function bg(e,t){switch(t.kind){case"filter":{const t=Eg(e);return t?function(e){const t=e.name??ng,n=e.calendars.some(e=>!e.shown),i=e.calendars.every(e=>!e.shown),r=sg(e,!0,!n,n),a=sg(e,!1,i,!n);return B`<button
      type="button"
      class=${n?"toolbar-button legend-button filtered":"toolbar-button legend-button"}
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-label=${t}
      title=${e.name??V}
      @pointerdown=${ag}
      @click=${t=>{t.stopPropagation();const n=(i=t.currentTarget,i.parentElement?.querySelector("dialog.legend-menu")??null);var i;n&&Zf(t,n,e.inert,rg)}}
    >
      <svg class="toolbar-button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d=${"M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V11H19V8H5V19H15V21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1M17 21L18.8 22.77C19.3 23.27 20 22.87 20 22.28V18L22.8 14.6C23.3 13.9 22.8 13 22 13H15C14.2 13 13.7 14 14.2 14.6L17 18V21"}></path>
      </svg>
    </button>
    <dialog
      class="legend-menu"
      tabindex="-1"
      aria-label=${t}
      @pointerdown=${ag}
      @click=${Qf}
    >
      <div class="legend-menu-actions">${r}${a}</div>
      <div class="legend-menu-list" role="group" aria-label=${t}>
        ${e.calendars.map(t=>B`<label
              class=${t.shown?"legend-menu-row":"legend-menu-row hidden-calendar"}
              style=${og(t)}
              data-calendar=${t.id}
            >
              <input
                type="checkbox"
                class="legend-menu-check"
                .checked=${t.shown}
                @change=${n=>{const i=n.currentTarget;e.inert?i.checked=t.shown:e.onToggle(t.id)}}
              />
              <span class="legend-menu-label">${t.name}</span>
            </label>`)}
      </div>
      <span class="legend-menu-surface" aria-hidden="true"></span>
      <span class="legend-menu-page" aria-hidden="true"></span>
    </dialog>`}(t):V}case"add":return e.addEvent?(n=e.addEvent,B`<button
    type="button"
    class="toolbar-button add-event-button"
    aria-label=${n.label??Bo}
    title=${n.label??V}
    @pointerdown=${fg}
    @click=${e=>{e.stopPropagation(),n.onActivate(e.currentTarget,yg(e))}}
  >
    <svg class="toolbar-button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d=${xm}></path>
    </svg>
  </button>`):V;case"button":{const n=e.customButtons?.[t.index];return n?function(e){return B`<button
    type="button"
    class="toolbar-button custom-button"
    aria-label=${e.label}
    title=${e.tooltip??V}
    @pointerdown=${fg}
    @click=${t=>{t.stopPropagation(),e.onActivate(t.currentTarget,yg(t))}}
  >
    <ha-icon class="custom-button-icon" icon=${e.icon} aria-hidden="true"></ha-icon>
  </button>`}(n):V}}var n}function xg(e,t){const n=t.menuName??"Menu";return B`<button
      type="button"
      class="toolbar-button custom-menu-button"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-label=${n}
      title=${t.menuName??V}
      @pointerdown=${fg}
      @click=${e=>{e.stopPropagation();const n=(i=e.currentTarget,i.parentElement?.querySelector("dialog.custom-menu")??null);var i;n&&Zf(e,n,t.inert,hg)}}
    >
      <svg class="toolbar-button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d=${"M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"}></path>
      </svg>
    </button>
    <dialog
      class="custom-menu"
      tabindex="-1"
      aria-label=${n}
      @pointerdown=${fg}
      @click=${Qf}
    >
      <div class="custom-menu-list" role="group" aria-label=${n}>
        ${t.plan.overflow.map(t=>{const n=function(e,t){if("add"===t.kind&&e.addEvent)return{icon:B`<svg
        class="toolbar-button-icon custom-menu-icon"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d=${xm}></path>
      </svg>`,label:e.addEvent.label??Bo,onActivate:e.addEvent.onActivate};const n="button"===t.kind?e.customButtons?.[t.index]:void 0;return n?{icon:B`<ha-icon class="custom-menu-icon" icon=${n.icon} aria-hidden="true"></ha-icon>`,label:n.label,onActivate:n.onActivate}:void 0}(e,t);return n?B`<button type="button" class="custom-menu-row" @click=${i=n.onActivate,e=>{e.stopPropagation();const t=e.currentTarget.closest("dialog"),n=t?.previousElementSibling;t&&n instanceof HTMLElement&&(Jf(t,"picked"),i(n,yg(e)))}}>
                ${n.icon}
                <span class="custom-menu-label">${n.label}</span>
              </button>`:V;var i})}
      </div>
      <span class="custom-menu-surface" aria-hidden="true"></span>
      <span class="custom-menu-page" aria-hidden="true"></span>
    </dialog>`}const kg={idle:"",turning:"busy",done:"refresh-done",failed:"refresh-failed"},$g={idle:km,turning:km,done:_m,failed:"M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"};function Sg(e){return B`<svg
    class="view-switcher-icon"
    viewBox=${"0 0 48 32"}
    aria-hidden="true"
    focusable="false"
  >
    <g fill="currentColor">
      ${dg[e].map(([e,t,n,i,r,a])=>q`<rect x=${e} y=${t} width=${n} height=${i} rx=${r} opacity=${a??V}></rect>`)}
    </g>
  </svg>`}function Tg(e,t){return e.collapsed?function(e){return B`<div class="view-switcher-collapsed">
    <button
      type="button"
      class="toolbar-button view-switcher-pill"
      data-view=${e.selected}
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-label=${e.currentName}
      title=${e.currentName}
      @pointerdown=${fg}
      @click=${t=>{t.stopPropagation();const n=t.currentTarget.nextElementSibling;n instanceof HTMLDialogElement&&Zf(t,n,e.inert,mg)}}
    >
      ${Sg(e.selected)}
      <svg class="view-switcher-caret" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d=${bm}></path>
      </svg>
    </button>
    <dialog
      class="layout-menu"
      tabindex="-1"
      aria-label=${e.name}
      @pointerdown=${fg}
      @click=${Qf}
      @keydown=${Mg}
    >
      <div class="layout-menu-list" role="group" aria-label=${e.name}>
        ${e.views.map(t=>{const n=t.view===e.selected;return B`<button
            type="button"
            class=${n?"layout-menu-row selected":"layout-menu-row"}
            data-view=${t.view}
            aria-pressed=${n?"true":"false"}
            ?autofocus=${n}
            @click=${i=t.view,t=>{t.stopPropagation();const n=t.currentTarget.closest("dialog"),r=n?.previousElementSibling;n&&(Jf(n,"picked"),0===t.detail&&r instanceof HTMLElement&&r.focus({preventScroll:!0}),e.onSelect(i))}}
          >
            ${Sg(t.view)}
            <span class="layout-menu-label">${t.label}</span>
            ${n?B`<svg
                    class="layout-menu-check"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d=${_m}></path>
                  </svg>`:V}
          </button>`;var i})}
      </div>
      <span class="layout-menu-surface" aria-hidden="true"></span>
      <span class="layout-menu-page" aria-hidden="true"></span>
    </dialog>
  </div>`}(e):B`<div
    class="view-switcher"
    role="group"
    aria-label=${e.name}
    @pointerdown=${fg}
    @click=${fg}
  >
    ${e.views.map(n=>{const i=n.view===e.selected,r=["view-switcher-segment",i?"selected":"",t?"":"icon-only"].filter(e=>""!==e).join(" ");return B`<button
        type="button"
        class=${r}
        data-view=${n.view}
        aria-pressed=${i?"true":"false"}
        aria-label=${t?V:n.label}
        title=${t?V:n.label}
        @pointerdown=${fg}
        @click=${t=>{t.stopPropagation(),e.onSelect(n.view)}}
      >
        ${t?B`<span class="toolbar-button-label">${n.label}</span>`:Sg(n.view)}${i?Dg:V}
      </button>`})}
  </div>`}function Mg(e){const t=[...e.currentTarget.querySelectorAll(".layout-menu-row")];if(0===t.length)return;const n=t.indexOf(e.target);let i;switch(e.key){case"ArrowDown":i=n<0?0:(n+1)%t.length;break;case"ArrowUp":i=n<0?t.length-1:(n-1+t.length)%t.length;break;case"Home":i=0;break;case"End":i=t.length-1;break;default:return}e.preventDefault(),t[i].focus()}const Dg=B`<span class="view-switcher-probe" aria-hidden="true"></span
  ><span class="view-switcher-probe view-switcher-page" aria-hidden="true"></span>`;function Cg(e){return e.map(e=>e.month?B`<span class="toolbar-month-name">${e.text}</span>`:e.text)}function Ag(e){return e.map(e=>B`<span>${Cg(e)}</span>`)}function Eg(e){return e.legend?.folded?e.legend:void 0}function Pg(e,t){const n=function(e){return void 0!==e.legend&&!e.legend.folded}(e)?e.legend:void 0,i=e.heading,r=["card-toolbar","toolbar-heading",n?"chips-shown":"",i?.short?"short-month":"",e.large?"large-controls":""].filter(e=>""!==e).join(" ");return B`<div class=${r}>
    <div class="toolbar-identity">
      ${t}${i?function(e,t){const n=Bm(e.range,e.languageMark??""),i=B`<span class="toolbar-month-reserve" aria-hidden="true"
    >${Ag(e.reserve)}</span
  >`,r=B`<span class="toolbar-month-measure" aria-hidden="true"
    ><span class="toolbar-month-probe">${Ag(e.full)}</span></span
  >`,a=B`<span id="toolbar-range-text" class="toolbar-range-text" aria-live="polite"
    >${n}</span
  >`;if(!t)return B`<div class="toolbar-month">
      ${i}
      <span class="toolbar-month-slot">
        <span class="toolbar-month-label" title=${n}
          ><bdi class="toolbar-month-text"
            ><span class="toolbar-month-cap"></span>${Cg(e.text)}</bdi
          ></span
        >
      </span>
      ${r}${a}
    </div>`;const o=e=>e?.parentElement?.querySelector("input.toolbar-date-input")??null;return B`<div class="toolbar-month with-picker">
    ${i}
    <span class="toolbar-month-slot">
      <button
        type="button"
        class="toolbar-month-button"
        title=${n}
        aria-describedby="toolbar-range-text"
        @pointerdown=${e=>{fg(e);const t=o(e.currentTarget);if(!t)return;vg.delete(t);const n=gg.get(t);n&&(n(),vg.add(t),t.blur())}}
        @click=${e=>{e.stopPropagation();const n=e.currentTarget,i=o(n);if(!i)return;if(vg.delete(i)&&e.detail>0)return;if(t.inert)return;const r=n.getRootNode().activeElement===n?n:null;i.value=t.pickerValue,i.focus({preventScroll:!0});try{i.showPicker(),function(e,t){gg.get(e)?.();const n=[],i=()=>{gg.delete(e);for(const[t,i]of n)e.removeEventListener(t,i);e.setAttribute("aria-hidden","true")},r=()=>{gg.has(e)&&(i(),function(e){return e.getRootNode().activeElement===e}(e)&&(t?.isConnected?t.focus({preventScroll:!0}):e.blur()))},a=(t,i)=>{e.addEventListener(t,i),n.push([t,i])};if(a("blur",i),a("change",r),a("keydown",e=>{"Escape"===e.key&&r()}),gg.set(e,i),e.removeAttribute("aria-hidden"),!0!==_g(e))return;const o=()=>{gg.has(e)&&(e.isConnected&&!0===_g(e)?requestAnimationFrame(o):r())};requestAnimationFrame(o)}(i,r)}catch{i.click()}}}
      >
        <span class="toolbar-month-label"
          ><bdi class="toolbar-month-text"
            ><span class="toolbar-month-cap"></span>${Cg(e.text)}</bdi
          ><svg class="toolbar-month-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d=${bm}></path></svg
        ></span>
      </button>
      <input
        type="date"
        class="toolbar-date-input"
        tabindex="-1"
        aria-hidden="true"
        aria-labelledby="toolbar-range-text"
        .value=${t.pickerValue}
        @click=${fg}
        @change=${e=>{const n=e.target.value;n&&t.onPick(n)}}
      />
    </span>
    ${r}${a}
  </div>`}(i,e.navigation):V}
    </div>
    ${n?function(e){const t=e.name??ng;return B`<div
    class="toolbar-legend"
    role="group"
    aria-label=${t}
    @pointerdown=${ag}
    @click=${ag}
  >
    <div class="legend-chips">
      ${e.calendars.map(t=>B`<button
            type="button"
            class=${t.shown?"legend-chip":"legend-chip hidden-calendar"}
            style=${og(t)}
            data-calendar=${t.id}
            aria-pressed=${t.shown?"true":"false"}
            @click=${()=>{e.inert||e.onToggle(t.id)}}
          >
            <span class="legend-chip-label">${t.name}</span>
          </button>`)}
    </div>
  </div>`}(n):V}
    <div class="toolbar-heading-end">
      ${e.navigation?function(e){const t=Bm(e.homeName,e.languageMark??""),n=(e,t,n,i,r,a=!1)=>B`<button
      type="button"
      class=${a?"date-navigation-segment home-done":"date-navigation-segment"}
      aria-label=${e??t}
      title=${e??V}
      @pointerdown=${fg}
      @click=${(e=>t=>{t.stopPropagation(),e()})(i)}
    >
      <svg
        class=${r?"toolbar-button-icon date-navigation-direction":"toolbar-button-icon"}
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path d=${n}></path>
      </svg>
    </button>`;return B`<div
    class="date-navigation"
    role="group"
    aria-labelledby="toolbar-range-text"
    @pointerdown=${fg}
    @click=${fg}
  >
    ${n(e.previousName,"Previous","M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",e.onPrevious,!0)}
    ${e.homeConfirming?n(t,t,"M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z",e.onHome,!1,!0):n(t,t,"M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22",e.onHome,!1)}
    ${n(e.nextName,"Next","M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",e.onNext,!0)}
  </div>`}(e.navigation):V}
    </div>
  </div>`}function Lg(e){return Boolean(e.addEvent||e.customButtons?.length||e.viewSwitcher||e.navigation||e.reset||e.refresh||e.search||e.legend)}const Fg=[new WeakMap,new WeakMap];function Rg(e,t=!1){const n=Fg[t?1:0],i=n.get(e);if(i)return i;const r=t?{...e,time_position:"title",title_max_lines:e.scroll_long_titles?e.title_max_lines:1,time_max_lines:1,location_max_lines:1,description_max_lines:1,weather:{...e.weather,event:{...e.weather?.event,max_lines:1}}}:{...e,time_position:"title"};return n.set(e,r),n.set(r,r),r}function Og(e,t,n,i,r,a){if(i<=0)return[];const o=yu(e,t),s=wu(e.map(e=>function(e,t){const n=t?{...e,_pastAsWhole:!0}:e,i=e._matchedConfig;if(!i||!1!==i.split_multiday_events&&!0!==i.show_description)return n;const{show_description:r,...a}=i;return{...n,_matchedConfig:{...a,split_multiday_events:!0,...!1===r?{show_description:!1}:{}}}}(e,!e.start.dateTime||o.has(e))),function(e,t,n){return{...e,start_date:gl(t),days_to_show:n,compact_days_to_show:void 0,compact_events_to_show:void 0,compact_events_complete_days:!1,event_order:"earliest_first",skip_first_events:void 0,show_empty_days:!1,show_empty_today:!1,split_multiday_events:!0,list:void 0}}(t,n,i),!0,r,"list",a),l=new Map(s.map(e=>[gl(new Date(e.timestamp)),e.events.filter(e=>!e._isEmptyDay)]));return Array.from({length:i},(e,t)=>l.get(gl(Ju(n,t)))??[])}const Ng="today";function Ig(e,t=new Date){const n=nh({start:e,days:yo}),i=Yu(t);return i.getFullYear()===n.getFullYear()&&i.getMonth()===n.getMonth()?i:n}function zg(e,t,n,i=new Date){if(!e||e.page!==t)return null;const r=e.day===Ng?Yu(i):Zu(e.day),a=xl(n,r);return a>=0&&a<yo?r:null}function jg(e,t,n=new Date){const i=gl(e);return{page:t,day:i===gl(n)?Ng:i}}function Hg(e){return!e.start.dateTime||!0===e._gridBanner}function Wg(e){return e.dateTime?Date.parse(e.dateTime):e.date?fl(e.date).getTime():Number.NaN}function Bg(e,t){return e.placement.columnIndex-t.placement.columnIndex||t.placement.span-e.placement.span||(Wg(e.event.start)||0)-(Wg(t.event.start)||0)||((e.event.summary??"")<(t.event.summary??"")?-1:(e.event.summary??"")>(t.event.summary??"")?1:0)}function qg(e,t,n,i=()=>1){const r=[...yc(e.map(e=>e.filter(e=>!e._isEmptyDay&&Hg(e))),t).sort(Bg).map(({event:e,placement:t})=>({kind:"bar",event:e,placement:t})),...e.flatMap((e,t)=>function(e,t){return e.filter(e=>!e._isEmptyDay&&!Hg(e)).map((e,t)=>({event:e,order:t,start:Wg(e.start)})).sort((e,t)=>(e.start||0)-(t.start||0)||e.order-t.order).map(({event:e})=>{const n=e._gridSource?Wg(e._gridSource.end):Number.NaN;return{kind:"line",event:e,placement:{columnIndex:t,span:1,continuesBefore:!1===e._gridSegmentStartsEvent,continuesAfter:Wg(e.end)<n}}})}(e,t))],a=r.map(({event:e})=>Math.max(1,Math.floor(i(e)))),o=wc(r.map(({placement:e},t)=>({start:e.columnIndex,end:e.columnIndex+e.span,rows:a[t]}))),s=e.length,l=(e,t)=>t>=e.placement.columnIndex&&t<e.placement.columnIndex+e.placement.span;let d=Array.from({length:s},()=>!1),c=[];for(;;){c=r.map((e,t)=>{for(let i=0;i<s;i++){if(!l(e,i))continue;const r=d[i]?n-1:n;if(o[t]+a[t]>r)return!1}return!0});const e=d.map((e,t)=>r.some((e,n)=>!c[n]&&l(e,t)));if(e.every((e,t)=>e===d[t]))break;d=e}return{placements:r.map((e,t)=>({item:e,line:o[t],lines:a[t],visible:c[t]})),days:Array.from({length:s},(e,t)=>{const i=r.filter((e,n)=>!c[n]&&l(e,t));return{hidden:i,more:i.length>0&&n>=1}})}}const Ug="month-day-list-probe";function Vg(e,t){const n=getComputedStyle(e),i=e=>Number.parseFloat(e)||0,r=Number.parseFloat(n.height),a="border-box"===n.boxSizing?r:r+i(n.paddingTop)+i(n.paddingBottom)+i(n.borderTopWidth)+i(n.borderBottomWidth);return Number.isFinite(a)&&a>0&&t.height>0?t.height/a:1}const Gg="month-probe";function Kg(e,t){return n=>{const i=ef(n,e);return i<=1?1:t?.get(i)??Math.ceil(i-.01)}}const Yg=Ug,Jg="--calendar-card-month-list-min";function Xg(e,t,n,i){const r=new Map(e.map(e=>[gl(new Date(e.timestamp)),e]));return Array.from({length:6},(e,a)=>{const o=Array.from({length:7},(e,n)=>Ju(t,7*a+n)),s=o.map(e=>r.get(gl(e)));return{starts:o,days:s,layout:qg(s.map(e=>e?.events??[]),o,n,i)}})}const Zg=Pt(),Qg=Pt(),ev=Pt(),tv=Pt(),nv=Pt(),iv=Pt();function rv(e,t){let n=Qg.get(t);return n||(n=new Intl.DateTimeFormat(Dt(t),{weekday:"long",month:"long",day:"numeric",timeZone:"UTC"}),Qg.set(t,n)),n.format(Ft(e))}function av(e,t,n){return`${sv(e,n)}${Xs(n).separator}${function(e,t){const n=Xs(t);if(0===e)return n.noEvents;let i=nv.get(t);if(void 0===i){try{i=Ct(Intl.PluralRules,t)?new Intl.PluralRules(Dt(t)):null}catch{i=null}nv.set(t,i)}return((i?"one"===i.select(e):1===e)?n.eventCountOne:n.eventCount).replace("{count}",()=>String(e))}(t,n)}`}function ov(e,t){return`month-item-${gl(e)}-${t}`}function sv(e,t){let n=ev.get(t);return n||(n=new Intl.DateTimeFormat(Dt(t),{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}),ev.set(t,n)),n.format(Ft(e))}const lv=[{weekday:"short",year:"numeric",month:"long",day:"numeric"},{weekday:"short",year:"numeric",month:"short",day:"numeric"},{weekday:"short",month:"short",day:"numeric"},{month:"short",day:"numeric"},{day:"numeric"}];function dv(e,t,n,i,r,a,o,s=!1,l="",d){const c=Math.max(0,a),u=e.starts.map(e=>s?jh(e.getTime()):void 0),h=function(e){const t=(e,t)=>e===t?$r:e;return{...e,event_background_opacity:e.event_background_opacity>0?e.event_background_opacity:Ia.event_background_opacity??e.event_background_opacity,event_color:t(e.event_color,mi.event_color)??e.event_color,time_color:t(e.time_color,mi.time_color)??e.time_color}}(i),m=cv(e.starts[0],t,i),p=e.layout.placements.filter(e=>e.visible),f=e.starts.map((t,n)=>[...p.filter(({item:e})=>e.placement.columnIndex===n).map(({line:e})=>ov(t,e)),...e.layout.days[n].more?[ov(t,"more")]:[]]);return B`
    <div
      class="month-week"
      role="row"
      style=${sm({gridTemplateRows:`auto${c>0?` repeat(${c}, auto)`:""} minmax(0, 1fr)`})}
    >
      ${e.starts.map((t,a)=>function(e,t,n,i,r,a,o,s){const{isToday:l,isTomorrow:d,isPast:c}=vp(e.getTime()),u=bl(e,o),h=l&&Sp(i),m=Tp(i,u,l,h),{weight:p,opacity:f}=Mp(i,l,c),g=e.getMonth()!==n.getMonth()||e.getFullYear()!==n.getFullYear(),v=Xs(r),_=Wm(r,o),y=String(t+1),w=e=>sm({color:e,"font-weight":p,opacity:f}),b=B`<span class=${h?"day today-tile":"day"} style=${w(m.day)}
    >${e.getDate()}</span
  >`,x=1===e.getDate()&&i.show_month?function(e,t,n){let i=Zg.get(t);if(void 0===i){try{i=Ct(Intl.DateTimeFormat,t)?new Intl.DateTimeFormat(Dt(t),{day:"numeric",month:"short",timeZone:"UTC"}):null}catch{i=null}Zg.set(t,i)}if(!i)return[{day:!0,text:String(e.getDate())},{day:!1,text:` ${n.months[e.getMonth()]}`}];const r=[];for(const t of i.formatToParts(Ft(e))){const e="day"===t.type,n=r[r.length-1];e||!n||n.day?r.push({day:e,text:t.value}):n.text+=t.value}return r.filter(e=>""!==e.text)}(e,r,v).map(e=>e.day?b:B`<span class="month-date-month" style=${w(m.month)}
                >${Bm(e.text,_)}</span
              >`):[b];return B`
    <div
      class=${rm({"month-day":!0,today:l,tomorrow:d,"past-day":c,"other-month":g,weekend:u})}
      style=${sm({gridColumn:y})}
      role="gridcell"
      tabindex=${a.focused?"0":"-1"}
      aria-label=${av(e,a.count,r)}
      aria-haspopup="dialog"
      aria-owns=${a.owns.length>0?a.owns.join(" "):V}
      aria-current=${l?"date":V}
      .calendarCardDaySlot=${Gh(e.getTime())}
      .calendarCardMonthCell=${e.getTime()}
    ></div>
    <div
      class="month-date"
      id=${s??V}
      style=${sm({gridColumn:y})}
      aria-hidden="true"
    >
      ${x}
    </div>
  `}(t,a,n,i,r,{count:(e.days[a]?.events??[]).filter(e=>!e._isEmptyDay).length,focused:gl(t)===l,owns:f[a]},o,u[a]))}
      ${null===m?V:B`<div class="month-week-number" aria-hidden="true">${m}</div>`}
      ${p.map(({item:t,line:n,lines:a})=>{const l=ov(e.starts[t.placement.columnIndex],n);return"bar"===t.kind?Ff(t.event,t.placement,n+2,h,r,o,s,u[t.placement.columnIndex],{firstColumn:1,className:"month-bar",id:l,tabIndex:"-1",rows:a}):function(e,t,n,i,r,a,o,s=!1,l){const{event:d,placement:c}=e,u=uf(d,i,r,o),h=zh(d,u.entityAccentColor,s),m=u.contentParts,p=m.shouldShowTime?function(e,t,n,i){const{event:r,placement:a}=e;if(!r.start.dateTime||!r.end.dateTime)return null;const o=Pl(t,i),s=e=>El(Dl(e,o,t.time_two_digit_hours,n));if(!a.continuesBefore)return s(new Date(r.start.dateTime));const l=new Date(r.end.dateTime);return l.getTime()===Jd(l).getTime()?null:Xs(n).untilTime.replace("{time}",()=>s(l))}(e,i,r,o):null,f=m.mergedLabels?.map(e=>Ep(e.value,e.iconColor,e.type,e.alt)).filter(e=>e!==V),g=f?f.length>0?f:V:Ep(m.entityLabel,d._matchedConfig?.label_icon_color,d._matchedConfig?.label_type,m.entityLabelAlt),v=d._matchedConfig?.color,_=v&&!Sr(v)?{color:v}:void 0,y=d._privateTitle?$m(_?.color??"var(--calendar-card-color-event)"):V,w=y===V?g:g===V?y:[g,y];return B`
    <div
      class=${rm({event:!0,"month-line":!0,"past-event":u.isPastEvent,"event-now":u.isNow,"event-interactive":void 0!==h,"search-ring":!0===d._searchRing,[nf]:u.textScaled})}
      style=${sm({gridColumn:String(c.columnIndex+1),...n>1?{gridRow:`${t+2} / span ${n}`,alignSelf:"start"}:{gridRow:String(t+2)},"--calendar-card-event-accent-bar-color":u.entityAccentColor,...u.entityAccentBackgroundColor?{backgroundColor:u.entityAccentBackgroundColor}:{},...u.accentTextProperties,...u.textScaleProperties})}
      id=${a}
      role=${h?"button":V}
      tabindex=${h?"-1":V}
      aria-describedby=${h&&l?l:V}
      .calendarCardEventTap=${h}
      .calendarCardDaySlot=${qh}
    >
      ${zp()}
      ${w===V?V:B`<span class="month-line-label">${w}</span>`}
      <span class="month-line-title" style=${_?sm(_):V}
        >${d.summary??""}</span
      >
      ${null===p?V:B`<span class="month-line-time">${p}</span>`}
    </div>
  `}(t,n,a,i,r,l,o,s,u[t.placement.columnIndex])})}
      ${e.layout.days.map((t,n)=>t.more?function(e,t,n,i,r,a,o){const s=Bm(Xs(r).moreEvents.replace("{count}",()=>String(n)),Wm(r,a));return B`<button
    class="month-more"
    type="button"
    id=${ov(t,"more")}
    tabindex="-1"
    style=${sm({gridColumn:String(e+1),gridRow:String(i+1)})}
    aria-label=${`${s}, ${rv(t,r)}`}
    @pointerdown=${fg}
    @click=${e=>{fg(e),o?.(t,e.currentTarget)}}
    .calendarCardDaySlot=${qh}
  >
    ${s}
  </button>`}(n,e.starts[n],t.hidden.length,c,r,o,d):V)}
    </div>
  `}function cv(e,t,n){return null!==n.show_week_numbers&&(t>0||n.show_current_week_number)?Ku(e,n,e.getDay()):null}function uv(e,t,n,i,r=!1){const a=Xs(n),o=Wm(n,i);return B`<div class="month-weekdays" role="row">
    ${r?B`<div class="month-weekday-gutter" aria-hidden="true"></div>`:V}
    ${e.map(e=>B`<div
          class=${rm({"month-weekday":!0,weekend:bl(e,i)})}
          style=${function(e,t,n){const i=bl(e,n)?t.weekend_weekday_color:void 0;return i?sm({color:i}):V}(e,t,i)}
          role="columnheader"
          aria-label=${function(e,t){let n=iv.get(t);if(void 0===n){try{n=Ct(Intl.DateTimeFormat,t)?new Intl.DateTimeFormat(Dt(t),{weekday:"long",timeZone:"UTC"}):null}catch{n=null}iv.set(t,n)}return n?n.format(Ft(e)):Xs(t).daysOfWeek[e.getDay()]}(e,n)}
        >
          ${Bm(a.daysOfWeek[e.getDay()],o)}
        </div>`)}
  </div>`}const hv=new WeakMap;function mv(e){const t=hv.get(e);if(t)return t;const n={...e,event_font_size:fa(e,"cell_event_font_size"),time_font_size:fa(e,"cell_time_font_size")};return hv.set(e,n),n}const pv=new WeakMap;function fv(e){const t=pv.get(e);if(t)return t;const n=Jp(e),i=Jp(mv(e)),r=Object.fromEntries(Object.entries(i).filter(([e,t])=>n[e]!==t));return pv.set(e,r),r}function gv(e){const t=fa(e,"weekend_background_color"),n=fa(e,"today_background_color");return{...Re(t)?{"--calendar-card-month-weekend":Fe(t)}:{},...Re(n)?{"--calendar-card-month-today":Fe(n)}:{}}}function vv(e,t,n,i,r=4,a,o=!1,s={}){const l=nh({start:t,days:yo}),d=gl(s.focusDay??l);if(s.narrow)return function(e,t,n,i,r,a,o=!1){const s=nh({start:e,days:yo}),l=null!==t.show_week_numbers,d=gl(i.selected),c=Yu(new Date),u=Array.from({length:6},(t,n)=>Array.from({length:7},(t,i)=>Ju(e,7*n+i))),h=xl(e,i.selected),m=i.dayLists[h]??[];return B`
    <div
      class=${rm({"month-container":!0,"month-narrow":!0,"with-week-numbers":l})}
      role="grid"
      lang=${n}
      aria-label=${hh(s,n)}
      style=${sm(gv(t))}
    >
      ${uv(u[0],t,n,a,l)}
      ${u.map((e,o)=>{const u=l?cv(e[0],o,t):null,h=e[0]<=c&&c<Ju(e[0],7);return B`<div class="month-week" role="row">
          ${l?B`<div
                  class=${rm({"month-week-number":!0,current:h})}
                  aria-hidden="true"
                >
                  ${u??""}
                </div>`:V}
          ${e.map((e,l)=>function(e,t,n,i,r,a,o,s){const{isToday:l,isTomorrow:d,isPast:c}=vp(e.getTime()),u=bl(e,s),h=l&&Sp(a),m=Tp(a,u,l,h),{weight:p,opacity:f}=Mp(a,l,c),g=e.getMonth()!==t.getMonth()||e.getFullYear()!==t.getFullYear(),v=h?m.day:n?void 0:l&&a.today_day_color||(u?a.weekend_day_color||"var(--secondary-text-color)":m.day);return B`<div
    class=${rm({"month-day":!0,today:l,tomorrow:d,"past-day":c,"other-month":g,weekend:u,"month-selected":n})}
    role="gridcell"
    tabindex=${i?"0":"-1"}
    aria-label=${av(e,r.length,o)}
    aria-selected=${n?"true":"false"}
    aria-current=${l?"date":V}
    .calendarCardMonthPick=${e.getTime()}
    .calendarCardMonthCell=${e.getTime()}
  >
    <span class="month-date"
      ><span
        class=${h?"day today-tile":"day"}
        style=${sm({color:v,"font-weight":p,opacity:f})}
        >${e.getDate()}</span
      ></span
    >
    ${function(e,t){const n=e.slice(0,De.MONTH_NARROW_MARKS);return B`<span class="month-narrow-marks" aria-hidden="true"
    >${n.map(e=>B`<span
          class="month-narrow-mark"
          style=${sm({backgroundColor:_v(e,t)})}
        ></span>`)}</span
  >`}(r,a)}
  </div>`}(e,s,gl(e)===d,gl(e)===r,i.dayLists[7*o+l]??[],t,n,a))}
        </div>`})}
    </div>
    ${function(e,t,n,i,r,a=!1,o,s,l,d){const c=e.getTime(),u=a||s?jh(c):void 0,h=Wm(i,r),m=function(e,t){let n=tv.get(t);n||(n=lv.map(e=>new Intl.DateTimeFormat(Dt(t),{...e,timeZone:"UTC"})),tv.set(t,n));const i=[sv(e,t)];for(const t of n){const n=t.format(Ft(e));n!==i[i.length-1]&&i.push(n)}return i}(e,i),p=B`<span class="month-day-list-date" id=${u??V} lang=${i}
    ><span class="month-day-list-name">${Bm(m[0],h)}</span
    ><span class="month-day-list-fit" aria-hidden="true"
      >${kv(m,h)}</span
    ></span
  >`,f=Math.min(Math.max(l??0,0),t.length),g=t.length>0?B`${f>0?yv(t.slice(0,f),n,i,r,a,o,u,!0):V}${f<t.length?function(e,t,n,i,r){const a=xv(t,n,i);return B`<button
    class="month-day-list-more"
    type="button"
    aria-label=${`${a}, ${rv(e,n)}`}
    @pointerdown=${fg}
    @click=${t=>{fg(t),r?.(e,t.currentTarget)}}
    .calendarCardDaySlot=${qh}
  >
    ${a}
  </button>`}(e,t.length-f,i,r,d):V}`:B`<div class="month-day-list-empty">
          ${Bm(Xs(i).noEvents,h)}
        </div>`;return B`<div
    class="month-day-list"
    style=${sm(bv(n))}
    .calendarCardDaySlot=${Gh(c)}
  >
    ${s?B`<div
            class="month-day-list-header day-add-button"
            role="button"
            tabindex="0"
            aria-label=${s.label}
            aria-describedby=${u??V}
            .calendarCardDayAdd=${c}
          >
            ${p}
          </div>`:B`<div class="month-day-list-header">${p}</div>`}
    <div class="month-day-list-rows" lang=${i}>${g}</div>
  </div>`}(i.selected,m,t,n,a,o,i.weatherForecasts,i.dayAdd,i.shown,i.more)}
    ${m.length>0?function(e,t,n,i,r){const a=yv(e.map(e=>e._searchRing?{...e,_searchRing:void 0}:e),t,n,i,!1,r,void 0,!0);return B`<div
    class=${Yg}
    style=${sm(bv(t))}
    aria-hidden="true"
    inert
  >
    ${a}<button class="month-day-list-more" type="button">
      ${xv(e.length,n,i)}
    </button>
  </div>`}(m,t,n,a,i.weatherForecasts):V}
  `}(t,n,i,s.narrow,d,a,o);const c=Xg(e,t,r,Kg(n,s.scaleLines)),u=mv(n);return B`
    <div
      class="month-container"
      role="grid"
      lang=${i}
      aria-label=${hh(l,i)}
      style=${sm({...gv(n),...fv(n)})}
    >
      ${uv(c[0].starts,n,i,a)}
      ${c.map((e,t)=>dv(e,t,l,u,i,r,a,o,d,s.more))}
      <div
        class=${Gg}
        data-probe="date"
        data-month=${n.show_month?V:"none"}
        aria-hidden="true"
      ></div>
      <div class=${Gg} data-probe="title" aria-hidden="true"></div>
      <div class=${Gg} data-probe="time" aria-hidden="true"></div>
      ${tf(n).filter(e=>e>1).map(e=>{const t=sm(of(u,e));return B`<div
              class=${Gg}
              data-probe="scaled-title"
              data-scale=${e}
              style=${t}
              aria-hidden="true"
            ></div>
            <div
              class=${Gg}
              data-probe="scaled-time"
              data-scale=${e}
              style=${t}
              aria-hidden="true"
            ></div>`})}
    </div>
  `}function _v(e,t){return(e._mergedFrom&&e._mergedFrom.length>1?t.duplicate_accent_color:void 0)||Lu(e._entityId,t,void 0,e,Br())}function yv(e,t,n,i,r=!1,a,o,s=!1){if(0===e.length)return V;const l=Rg(t,s),d=df([...e],l,n),c=ya(l);return B`<table class=${c?"month-day-table with-event-gap":"month-day-table"}>
    ${e.map((t,s)=>{const u=function(e,t,n,i,r,a,o,s,l,d){const c=uf(e,i,r,o),u=d?cf(c):c,h=zh(e,u.entityAccentColor,s),m=0===t,p=t===n-1,f=Np(e,i,u.contentParts,{weatherForecasts:a,links:mf(i),timePosition:Yt(i.time_position)});return B`<tr>
    <td
      class=${rm({event:!0,"event-first":m,"event-middle":!m&&!p,"event-last":p,"past-event":u.isPastEvent,"event-tappable":void 0!==h,"event-now":u.isNow,"search-ring":!0===e._searchRing,[nf]:u.textScaled})}
      .calendarCardDaySlot=${qh}
      style=${sm({"--calendar-card-event-accent-bar-color":u.entityAccentColor,...u.entityAccentBackgroundColor?{backgroundColor:u.entityAccentBackgroundColor}:{},...u.accentTextProperties,...u.textScaleProperties})}
    >
      ${zp()}
      ${h?B`<div
              class="event-button event-interactive"
              role="button"
              tabindex="0"
              aria-describedby=${l??V}
              .calendarCardEventTap=${h}
            >
              ${f}
            </div>`:f}
    </td>
  </tr>`}(t,s,e.length,l,n,a,i,r,o,d.has(s));return c&&s>0?B`${Ip()}${u}`:u})}
  </table>`}const wv=new WeakMap;function bv(e){const t=wv.get(e);if(t)return t;const n=Jp(e),i=Jp(Rg(e,!0)),r=Object.fromEntries(Object.entries(i).filter(([e,t])=>n[e]!==t));return wv.set(e,r),r}function xv(e,t,n){return Bm(Xs(t).moreEvents.replace("{count}",()=>String(e)),Wm(t,n))}function kv(e,t){const[n,...i]=e;return B`<span class="month-day-list-rest"
      >${i.length>0?B`<span class="month-day-list-fit">${kv(i,t)}</span>`:V}</span
    ><span class="month-day-list-form">${Bm(n,t)}</span>`}function $v(e){const{height:t,max:n}=ga(e,"month","narrow");return"auto"===t&&"none"!==n}const Sv={week:"--calendar-card-month-week-min",month:"--calendar-card-month-min"},Tv={"--calendar-card-content-flex":"1 1 0","--calendar-card-height":"auto"};function Mv(e,t,n,i){if(i)return"month"===t?{}:{...Tv};if("month"===t)return function(e,t){const{height:n,max:i}=ga(e,"month",t);return"narrow"===t&&$v(e)?{height:"auto","max-height":i,"--calendar-card-month-content-flex":"0 1 auto","--calendar-card-month-list-flex":"none"}:{height:"auto"===n?De.MONTH_CARD_HEIGHT[Ai(e)?"toolbar":"plain"]:n,"max-height":i}}(e,n);const{height:r,max:a}=ga(e,t);return{..."auto"===r?{}:{height:r,...Tv},..."none"===a?{}:{"max-height":a}}}var Dv=Object.defineProperty,Cv=(e,t,n,i)=>{for(var r,a=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(a=r(t,n,a)||a);return a&&Dv(t,n,a),a};const Av=12,Ev=24,Pv=10,Lv="cubic-bezier(0.37, 0, 0.63, 1)";function Fv(e,t,n,i,r){const a=e.arrow,o="bottom"===a?.side?e.top+t-n:e.top,s=Math.max(i.top+Av,Math.min(o,i.bottom-Av-n));if(!a||"top"===a.side||"bottom"===a.side||void 0===r)return{left:e.left,top:s,arrow:a};const l=Math.min(Math.max(Ev,r-s),n-Ev);return{left:e.left,top:s,arrow:{side:a.side,at:l}}}function Rv(e,t){return e?.left===t?.left&&e?.top===t?.top&&e?.arrow?.side===t?.arrow?.side&&e?.arrow?.at===t?.arrow?.at}function Ov(e){return function(e,t){if(!t)return{top:0,bottom:e};const n=t.offsetTop<1?0:Math.min(t.offsetTop,e),i=t.offsetTop+t.height;return{top:n,bottom:e-i<1?e:Math.max(n,i)}}(window.innerHeight,e?window.visualViewport:void 0)}function Nv(e){return"left"===e.side||"right"===e.side?`${e.side} ${e.at}px`:`${e.at}px ${e.side}`}function Iv(e,t,n,i="right"){const r=(e.left+e.right)/2,a="right"===i?r-32:r+32-t,o=Math.min(Math.max(Av,a),Math.max(Av,n-t-Av));return{left:o,at:Math.min(Math.max(Ev,r-o),t-Ev)}}function zv(e,t,n,i){if(!e)return{left:Math.max(Av,(n.width-i)/2),top:Math.max(Av,(n.height-t)/2)};const r=e.rect??{left:e.x,right:e.x,top:e.y,bottom:e.y};return e.below?function(e,t,n,i){const{width:r,height:a}=n,{left:o,at:s}=Iv(e,i,r),l=e.bottom+Pv,d=e.top-Pv-t;return l+t>a-Av&&d>=Av?{left:o,top:d,arrow:{side:"bottom",at:s}}:{left:o,top:Math.max(Av,Math.min(l,a-t-Av)),arrow:{side:"top",at:s}}}(r,t,n,i):function(e,t,n,i){const{width:r,height:a}=n,o=(e.top+e.bottom)/2;let s="left",l=e.right+10;l+i>r-Av&&(s="right",l=e.left-10-i),l<Av&&(s=void 0,l=Math.max(Av,(r-i)/2));const d=Math.min(Math.max(Av,o-t/2),a-t-Av),c=Math.min(Math.max(Ev,o-d),t-Ev);return{left:l,top:d,arrow:s?{side:s,at:c}:void 0}}(r,t,n,i)}function jv(e,t,n=0){return e?n>0?`bottom:${n}px;`:"":t?`left:${t.left}px;top:${t.top}px;`:"visibility:hidden;"}function Hv(e){return e?B`<span class="grabber" aria-hidden="true"></span>`:V}function Wv(e){return e?B`<span
        class="arrow ${e.side}"
        style="${"left"===e.side||"right"===e.side?"top":"left"}:${e.at}px"
        ><span class="beak"
          ><span class="glass"></span
          ><svg viewBox="0 0 15 7" aria-hidden="true">
            <path d=${"M0 6.75C3.15 6.75 3.75 0.25 7.5 0.25C11.25 0.25 11.85 6.75 15 6.75"}></path></svg></span
      ></span>`:V}const Bv=a`
  :host {
    font-family:
      -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  dialog {
    inset: auto;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    overflow: visible;
    max-width: none;
    max-height: none;
    position: fixed;
    color: var(--text);
  }
  dialog::backdrop {
    background: transparent;
  }
  dialog.sheet {
    inset: auto 0 0 0;
    width: 100%;
  }
  dialog.popover[open][data-placed] > .panel {
    animation:
      pop-grow 230ms cubic-bezier(0.33, 1, 0.68, 1),
      pop-fade 180ms cubic-bezier(0, 0, 0.58, 1);
  }
  dialog.popover[open][data-placed] > .arrow {
    animation:
      pop-grow 230ms cubic-bezier(0.33, 1, 0.68, 1),
      pop-fade 180ms cubic-bezier(0, 0, 0.58, 1);
  }
  dialog.sheet[open][data-placed] > .panel {
    animation: sheet-in 220ms cubic-bezier(0.2, 0.9, 0.3, 1);
  }
  @keyframes pop-grow {
    from {
      transform: scale(0.1);
    }
  }
  @keyframes pop-fade {
    from {
      opacity: 0;
    }
  }
  @keyframes sheet-in {
    from {
      transform: translateY(24px);
      opacity: 0;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    dialog.popover[open][data-placed] > .panel,
    dialog.popover[open][data-placed] > .arrow,
    dialog.sheet[open][data-placed] > .panel {
      animation: none;
    }
  }
  dialog.sheet::backdrop {
    background: rgba(0, 0, 0, 0.25);
  }
  .light {
    --pop-bg: rgba(246, 246, 246, 0.82);
    --pop-edge: rgba(0, 0, 0, 0.12);
    --pop-outline: rgba(0, 0, 0, 0.22);
    --cell: rgba(0, 0, 0, 0.045);
    --cell-hover: rgba(0, 0, 0, 0.07);
    --text: rgba(0, 0, 0, 0.86);
    --dim: rgba(0, 0, 0, 0.36);
    --button: rgba(0, 0, 0, 0.07);
    --accent: #007aff;
    --danger: #ff3b30;
    color-scheme: light;
  }
  .dark {
    --pop-bg: rgba(44, 44, 46, 0.78);
    --pop-edge: rgba(255, 255, 255, 0.14);
    --pop-outline: rgba(255, 255, 255, 0.2);
    --cell: rgba(255, 255, 255, 0.075);
    --cell-hover: rgba(255, 255, 255, 0.11);
    --text: rgba(255, 255, 255, 0.92);
    --dim: rgba(255, 255, 255, 0.42);
    --button: rgba(255, 255, 255, 0.13);
    --accent: #0a84ff;
    --danger: #ff453a;
    color-scheme: dark;
  }
  .panel {
    position: relative;
    box-sizing: border-box;
    width: 340px;
    max-height: calc(100vh - 24px);
    overflow-y: auto;
    --panel-end: 12px;
    padding: 14px 14px var(--panel-end);
    display: flex;
    flex-direction: column;
    gap: 9px;
    background: var(--pop-bg);
    -webkit-backdrop-filter: blur(28px) saturate(170%);
    backdrop-filter: blur(28px) saturate(170%);
    border-radius: 16px;
    box-shadow:
      inset 0 0 0 0.5px var(--pop-outline),
      0 18px 50px rgba(0, 0, 0, 0.35);
    font-size: 15px;
    line-height: 1.35;
  }
  .sheet .panel {
    width: 100%;
    max-height: 85vh;
    border-radius: 18px 18px 0 0;
    --panel-end: calc(16px + env(safe-area-inset-bottom));
  }
  .sheet.lifted .panel {
    --panel-end: 16px;
  }
  .grabber {
    align-self: center;
    width: 36px;
    height: 5px;
    border-radius: 3px;
    background: var(--dim);
  }
  .arrow {
    position: absolute;
    width: 0;
    height: 0;
    transform-origin: 0 0;
  }
  .arrow.top {
    top: 0;
  }
  .arrow.bottom {
    top: 100%;
  }
  .arrow.left {
    left: 0;
  }
  .arrow.right {
    left: 100%;
  }
  .beak {
    position: absolute;
    left: 0;
    top: 0;
    transform-origin: 0 0;
  }
  .arrow.right .beak {
    transform: rotate(90deg);
  }
  .arrow.bottom .beak {
    transform: rotate(180deg);
  }
  .arrow.left .beak {
    transform: rotate(-90deg);
  }
  .beak > * {
    position: absolute;
    left: -7.5px;
    top: -6.5px;
    width: 15px;
    height: 7px;
  }
  .glass {
    background: var(--pop-bg);
    -webkit-backdrop-filter: blur(28px) saturate(170%);
    backdrop-filter: blur(28px) saturate(170%);
    clip-path: path('M0 6.75C3.15 6.75 3.75 0.25 7.5 0.25C11.25 0.25 11.85 6.75 15 6.75L15 7L0 7Z');
  }
  .beak svg {
    overflow: visible;
  }
  .beak path {
    fill: none;
    stroke: var(--pop-outline);
    stroke-width: 0.5;
  }
  .reveal:not(:focus-visible),
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }
  .spinner {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid var(--button);
    border-top-color: var(--accent);
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .spinner {
      animation: none;
    }
  }
`,qv=a`
  .group {
    display: grid;
    grid-template-columns: 5px minmax(0, 1fr);
    gap: 0 10px;
  }
  .bar {
    border-radius: 3px;
    background: var(--event-color);
  }
  .stack {
    display: flex;
    flex-direction: column;
    gap: 9px;
    min-width: 0;
  }
  .cell {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    padding: 10px 14px;
    border: 0;
    border-radius: 11px;
    background: var(--cell);
    color: var(--text);
    font: inherit;
    text-align: start;
    overflow-wrap: anywhere;
  }
  input.cell,
  textarea.cell,
  button.cell,
  .cell[tabindex] {
    cursor: text;
  }
  button.cell {
    cursor: pointer;
  }
  .cell:hover {
    background: var(--cell-hover);
  }
  .cell:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible,
  button:focus-visible,
  a:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent) 55%, transparent);
    outline-offset: 0;
  }
  @supports not (color: color-mix(in srgb, red, blue)) {
    .cell:focus-visible,
    input:focus-visible,
    select:focus-visible,
    textarea:focus-visible,
    button:focus-visible,
    a:focus-visible {
      outline: 2px solid var(--accent);
    }
  }
  input.cell,
  textarea.cell {
    outline-offset: -1px;
  }
`;function Uv(e,t,n){const i=getComputedStyle(e),r=e=>"auto"===e||"scroll"===e;if(0!==n&&r(i.overflowY)){const t=e.scrollHeight-e.clientHeight;if(t>0&&(n<0?e.scrollTop>0:e.scrollTop<t-1))return!0}if(0!==t&&r(i.overflowX)){const n=e.scrollWidth-e.clientWidth,[r,a]="rtl"===i.direction?[-n,0]:[0,n];if(n>0&&(t<0?e.scrollLeft>r+1:e.scrollLeft<a-1))return!0}return!1}const Vv={" ":1,PageDown:1,End:1,ArrowDown:1,PageUp:-1,Home:-1,ArrowUp:-1},Gv=new Set(["text","search","email","url","tel","password"]),Kv=new Set(["checkbox","radio","button","submit","reset","color","file"]),Yv=/^(?:button|checkbox|switch|radio|tab|option|menuitem(?:checkbox|radio)?)$/;function Jv(){let e=document.activeElement;for(;e?.shadowRoot?.activeElement;)e=e.shadowRoot.activeElement;return e}class Xv extends de{constructor(){super(),this._sheet=!1,this._lift=0,this._scrolls=!1,this._closing=!1,this._wantOpen=!1,this._scrollGuarded=!1,this._openedAt=0,this._backdropDown=!1,this._openedFrom=null,this._pressedLast=!1,this._watchingRoom=!1,this._onWheel=e=>{e.ctrlKey||this._scrollsPanel(e,e.deltaX,e.deltaY)||e.preventDefault()},this._onTouchStart=e=>{const t=e.touches[0];this._touchAt=1===e.touches.length&&t?{x:t.clientX,y:t.clientY}:void 0},this._onTouchMove=e=>{const t=e.touches[0],n=this._touchAt;if(1!==e.touches.length||!t||!n)return;this._touchAt={x:t.clientX,y:t.clientY};const i=n.x-t.clientX,r=n.y-t.clientY;e.cancelable&&!this._scrollsPanel(e,i,r)&&e.preventDefault()},this._onPagingKey=e=>{if(e.defaultPrevented||e.isComposing||e.ctrlKey||e.metaKey||e.altKey)return;const t=Vv[e.key];if(!t)return;const n=" "===e.key&&e.shiftKey?-t:t;(function(e,t){if(!(e instanceof HTMLElement))return!1;if(e.isContentEditable)return!0;if(e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)return!0;if(e instanceof HTMLInputElement){const n=e.type.toLowerCase();if(Gv.has(n)){if("PageDown"===t||"PageUp"===t)return!1;if("Home"!==t&&"End"!==t)return!0;const n="Home"===t?0:e.value.length;return!(e.selectionStart===n&&e.selectionEnd===n)}return!Kv.has(n)||" "===t}return" "===t&&(e instanceof HTMLButtonElement||"summary"===e.localName||Yv.test(e.getAttribute("role")??""))})(e.composedPath()[0],e.key)||this._scrollsPanel(e,0,n)||e.preventDefault()},this._onRoomChange=()=>this._keepInView(),this._onFocusMove=()=>{clearTimeout(this._focusSettling),this._focusSettling=setTimeout(this._onRoomChange,0)},this._keepKeys=e=>{1!==e.key.length||e.ctrlKey||e.altKey||e.metaKey||e.stopPropagation()},this.addEventListener("pointerdown",()=>this._pressedLast=!0,!0),this.addEventListener("keydown",()=>this._pressedLast=!1,!0)}updated(e){super.updated(e);const t=this._dialog;if(this._wantOpen&&t?.open)return this._wantOpen=!1,this._openedAt=Date.now(),this._backdropDown=!1,this._position(),void this.updateComplete.then(()=>this._focusStart());if(this._wantOpen&&t&&this.isConnected&&!t.open){this._wantOpen=!1,this._openedAt=Date.now(),this._openedFrom=Jv(),this._pressedLast=!1;try{t.showModal()}catch(e){et(`${this._logName}: could not open`,e)}this._guardScroll(t.open),this._position(),this.updateComplete.then(()=>this._focusStart())}}disconnectedCallback(){super.disconnectedCallback(),this._guardScroll(!1),this._watchRoom(!1)}_focusStart(){const e=this._dialog;e?.open&&e.querySelector("[autofocus]")?.focus({preventScroll:!0})}_guardScroll(e){e!==this._scrollGuarded&&(this._scrollGuarded=e,e?(window.addEventListener("wheel",this._onWheel,{capture:!0,passive:!1}),window.addEventListener("touchstart",this._onTouchStart,{capture:!0,passive:!0}),window.addEventListener("touchmove",this._onTouchMove,{capture:!0,passive:!1}),window.addEventListener("keydown",this._onPagingKey,{capture:!0})):(window.removeEventListener("wheel",this._onWheel,{capture:!0}),window.removeEventListener("touchstart",this._onTouchStart,{capture:!0}),window.removeEventListener("touchmove",this._onTouchMove,{capture:!0}),window.removeEventListener("keydown",this._onPagingKey,{capture:!0}),this._touchAt=void 0))}_scrollsPanel(e,t,n){const i=this._dialog,r=e.composedPath();return!!i&&r.includes(i)&&function(e,t,n,i){for(const r of e){if(r===t)return!1;if(r instanceof Element&&Uv(r,n,i))return!0}return!1}(r,i,t,n)}get _dialog(){return this.renderRoot?.querySelector("dialog")??null}get _panel(){return this.renderRoot?.querySelector(".panel")??null}_position(){const e=window.innerWidth,t=Ov(this._typing);if(this._sheet=e<600,this._watchRoom(!0),this._sheet)return this._place=void 0,this._opened=void 0,this._placedWidth=void 0,void this._keepInView();this._placedWidth=e,this._lift=0,this._placeBeside(t,e),this._measureScroll()}_placeBeside(e,t){const n=e.bottom-e.top-24,i=Math.min(this._panel?.offsetHeight??420,n),r=this._anchor,a=zv(r,i,{width:t,height:e.bottom},this._panelWidth),o=r&&!r.below?function(e){return e.rect?(e.rect.top+e.rect.bottom)/2:e.y}(r):void 0;this._opened={place:a,height:i,target:o},this._maxHeight=n,this._place=Fv(a,i,i,e,o)}_keepInView(){if(!this.isConnected||!this._dialog?.open||this._closing)return;const e=window.innerWidth,t=this._placedWidth;if(e<600!==this._sheet||void 0!==t&&t!==e)return void this._placeAfresh();const n=window.innerHeight,i=Ov(this._typing);if(this._sheet){const e=i.top>0||i.bottom<n;return this._lift=n-i.bottom,this._maxHeight=e?Math.min(.85*n,i.bottom-i.top-Av):void 0,void this._measureScroll()}void 0!==t&&this._panel&&(this._keepBeside(i),this._measureScroll())}_keepBeside(e){const t=this._opened,n=this._panel;if(!t||!n)return;const i=e.bottom-e.top-24;this._maxHeight=i;const r=Fv(t.place,t.height,Math.min(n.offsetHeight,i),e,t.target);Rv(r,this._place)||(this._place=r)}_measureScroll(){const e=this._panel;this._scrolls=!!e&&e.scrollHeight>e.clientHeight+1}_placeAfresh(){this._sheet=window.innerWidth<600,this._opened=void 0,this._placedWidth=void 0,this._lift=0,this._maxHeight=void 0,this.updateComplete.then(()=>{this.isConnected&&this._dialog?.open&&!this._closing&&this._position()})}get _typing(){const e=this.renderRoot?.activeElement;return!!e?.matches?.('textarea, input:not([type="checkbox"]):not([type="radio"]):not([type="date"]):not([type="time"]):not([type="datetime-local"])')}_watchRoom(e){if(!e){if(this._sizeWatch?.disconnect(),!this._watchingRoom)return;return this._watchingRoom=!1,this._watchedViewport?.removeEventListener("resize",this._onRoomChange),this._watchedViewport?.removeEventListener("scroll",this._onRoomChange),this._watchedViewport=void 0,window.removeEventListener("resize",this._onRoomChange),this.renderRoot?.removeEventListener("focusin",this._onFocusMove),this.renderRoot?.removeEventListener("focusout",this._onFocusMove),void clearTimeout(this._focusSettling)}if("undefined"!=typeof ResizeObserver){this._sizeWatch??=new ResizeObserver(this._onRoomChange),this._sizeWatch.disconnect();const e=this._panel;e&&this._sizeWatch.observe(e)}this._watchingRoom||(this._watchingRoom=!0,this._watchedViewport=window.visualViewport,this._watchedViewport?.addEventListener("resize",this._onRoomChange),this._watchedViewport?.addEventListener("scroll",this._onRoomChange),window.addEventListener("resize",this._onRoomChange),this.renderRoot?.addEventListener("focusin",this._onFocusMove),this.renderRoot?.addEventListener("focusout",this._onFocusMove))}get _roomStyle(){return void 0===this._maxHeight?"":`max-height:${this._maxHeight}px;`}_finish(){this._wantOpen=!1;const e=this._leave(),t=!e.length&&!0===this._dialog?.open;return e.length?(this._closing=!0,this._leaving=e,Promise.race([Promise.all(e.map(e=>e.finished)),new Promise(e=>setTimeout(e,380))]).catch(()=>{}).then(()=>{this._leaving===e&&this._closeNow()})):this._closeNow(),this._fireClosed(),t&&this._returnFocus(),!0}_closeNow(){const e=this._dialog;e?.open&&(e.close(),this._pressedLast&&this._returnFocus()),this._guardScroll(!1),this._watchRoom(!1),this._opened=void 0,this._placedWidth=void 0,this._lift=0,this._maxHeight=void 0,this._scrolls=!1,this._leaving?.forEach(e=>e.cancel()),this._leaving=void 0,this._closing=!1,this._clear()}_returnFocus(){const e=this._openedFrom;if(!(e instanceof HTMLElement&&e!==document.body&&e.isConnected))return;const t=Jv(),n=!t||t===document.body||!!this.shadowRoot?.contains(t);(t===e||n)&&(this._pressedLast?(t===e&&e.blur(),e.focus({preventScroll:!0,focusVisible:!1})):n&&e.focus({preventScroll:!0}))}_leave(){const e=this._dialog,t=e?.querySelector(".panel");if(!e?.open||!t||"function"!=typeof t.animate)return[];if(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)return[];const n=e=>({duration:180,easing:e,fill:"forwards"});if(this._sheet)return[t.animate([{transform:"none",opacity:1},{transform:"translateY(24px)",opacity:0}],n("ease-in"))];const i=[t.animate([{transform:"scale(1)"},{transform:"scale(0.15)"}],n(Lv)),t.animate([{opacity:1},{opacity:0}],n("ease"))],r=e.querySelector(".arrow");return r&&i.push(r.animate([{transform:"scale(1)"},{transform:"scale(0.15)"}],n(Lv)),r.animate([{opacity:1},{opacity:0}],n("ease"))),i}_fireClosed(){const e=this._onClosed;this._onClosed=void 0,e?.(),this.dispatchEvent(new CustomEvent("dialog-closed",{bubbles:!0,composed:!0,detail:{dialog:this.localName}}))}_isBackdropPress(e){return!(e.target!==this._dialog||!this._backdropDown)&&(this._backdropDown=!1,Date.now()-this._openedAt>=300)}}function Zv(e){return Number.parseFloat(e)||0}function Qv(e){return(e.ownerDocument.defaultView??window).getComputedStyle(e)}function e_(e,t=e.getBoundingClientRect()){const n=Qv(e),i=Zv(n.borderLeftWidth)+Zv(n.paddingLeft),r=Zv(n.borderRightWidth)+Zv(n.paddingRight);if(0===i&&0===r)return t;const a=Number.parseFloat(n.width),o=Number.isFinite(a)?"border-box"===n.boxSizing?a:a+i+r:0,s=o>0&&t.width>0?t.width/o:1;return new DOMRect(t.left+i*s,t.top,Math.max(0,t.width-(i+r)*s),t.height)}function t_(e){const t=Qv(e);return e.clientWidth-Zv(t.paddingLeft)-Zv(t.paddingRight)}Cv([me({attribute:!1})],Xv.prototype,"hass"),Cv([pe()],Xv.prototype,"_sheet"),Cv([pe()],Xv.prototype,"_place"),Cv([pe()],Xv.prototype,"_lift"),Cv([pe()],Xv.prototype,"_maxHeight"),Cv([pe()],Xv.prototype,"_scrolls"),Cv([pe()],Xv.prototype,"_closing");const n_=1/64,i_=10,r_="--calendar-card-grid-title-label-run",a_="--calendar-card-grid-title-cut-room",o_="--calendar-card-grid-title-fit-lines",s_="data-grid-title-cut",l_="data-grid-title-lines",d_=Intl.Segmenter,c_=d_?new d_(void 0,{granularity:"grapheme"}):null,u_=new WeakMap;function h_(e,t,n){if(![e,t,n].every(Number.isFinite)||e<=0||t<=0||n<=0)return null;if(t<=n)return e;const i=Math.min(e,i_),r=e*n/t;return r<i?null:Math.max(i,e-Math.ceil(e-r))}function m_(e,t,n){const i=Math.ceil(e-t-1e-7);return n?e-Math.max(0,i-1):Math.max(Math.min(e,i_),e-i-1)}function p_(e){const t=e.trim();if(!/[\p{L}\p{N}\p{S}]/u.test(t))return"";if(!c_)return t;for(const{segment:e,index:n}of c_.segment(t))if(/[\p{L}\p{N}\p{S}]/u.test(e))return t.slice(0,n+e.length);return""}function f_(e,t,n,i){return[e,t,n,i].every(Number.isFinite)&&e>0&&n>0&&(t<=e||n+i<=e)}function g_(e){delete e.block.dataset.gridTitleFit,e.summary.style.removeProperty("--calendar-card-grid-title-scale"),e.summary.style.removeProperty(r_),e.summary.style.removeProperty(o_),e.summary.removeAttribute(l_),e.row.style.removeProperty("--calendar-card-grid-title-shift");for(const t of Array.from(e.summary.querySelectorAll(`[${s_}]`)))t.removeAttribute(s_),t.style.removeProperty(a_)}function v_(e){const t=e.querySelector(".grid-event-disclosure"),n=t?.querySelector(".summary"),i=t?.querySelector(".summary-row"),r=n?.querySelector(".event-title");return t&&n&&i&&r?{block:e,disclosure:t,summary:n,row:i,title:r,previousMode:e.dataset.gridTitleFit}:null}function __(e){let t=u_.get(e);return t||(t=e.createRange(),u_.set(e,t)),t}function y_(e,t){e.setStart(t,0),e.collapse(!0)}function w_(e){for(let t=e.parentElement;t;t=t.parentElement){const e=getComputedStyle(t).display;if("inline"!==e&&"contents"!==e)return t}return null}function b_(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=-Math.min(0,C_(n.marginTop));if(0===i)return t;const r=C_(n.height),a=r>0?r+("border-box"===n.boxSizing?0:C_(n.paddingTop)+C_(n.paddingBottom)+C_(n.borderTopWidth)+C_(n.borderBottomWidth)):0,o=a>0?t.height/a:1;return new DOMRect(t.left,t.top+i*o,t.width,t.height-i*o)}function x_(e,t){if(!t)return e;const n=(e.top+e.bottom)/2;if(n<t.top||n>t.bottom)return e;const i=Math.max(e.top,t.top),r=Math.min(e.bottom,t.bottom);return i===e.top&&r===e.bottom?e:new DOMRect(e.left,i,e.width,r-i)}function k_(e){const t=e.ownerDocument,n=t.createTreeWalker(e,NodeFilter.SHOW_TEXT),i=[],r=__(t);try{for(let e=n.nextNode();e;e=n.nextNode()){const t=e.textContent??"",n=t.search(/\S/u);if(n<0)continue;r.setStart(e,n),r.setEnd(e,t.trimEnd().length);const a=w_(e);i.push({node:e,start:n,text:t.slice(n).trimEnd(),rects:Array.from(r.getClientRects(),e=>x_(e,a?b_(a):void 0))})}return i}finally{y_(r,t)}}function $_(e){const t=e[0],n=function(e){if(!c_){const t=e.length-1;return e.some(e=>""!==p_(e))?{run:t,length:e[t].length}:null}for(const[t,n]of e.entries()){const e=p_(n);if(e)return{run:t,length:e.length}}return null}(e.map(e=>e.text)),i=t?.node.ownerDocument;if(!t||!n||!i)return 0;const r=e[n.run],a=__(i);try{return a.setStart(t.node,t.start),a.setEnd(r.node,r.start+n.length),a.getBoundingClientRect().width}finally{y_(a,i)}}function S_(e){const t=e[0],n=e[e.length-1],i=t?.node.ownerDocument;if(e.length<=1||!i)return e.flatMap(e=>e.rects).reduce((e,t)=>e+t.width,0);const r=__(i);try{return r.setStart(t.node,t.start),r.setEnd(n.node,n.start+n.text.length),r.getBoundingClientRect().width}finally{y_(r,i)}}function T_(e){return Array.from(e.summary.children).flatMap(t=>t===e.title?[]:t.matches(".calendar-label")?k_(t).flatMap(e=>e.rects):Array.from(t.getClientRects()))}function M_(e){return{top:Math.min(...e.map(e=>e.top)),bottom:Math.max(...e.map(e=>e.bottom))}}function D_(e,t){return e.top>=t.top-n_&&e.bottom<=t.bottom+n_}function C_(e){return Number.parseFloat(e)||0}function A_(e){return"1"===getComputedStyle(e.row).getPropertyValue("--calendar-card-grid-title-eligible").trim()}function E_(e){return Array.from(e.querySelectorAll("img")).every(e=>e.complete&&e.naturalWidth>0)}function P_(e){const t=Array.from(e).flatMap(e=>{const t=e.parentElement,n=e.closest(".grid-event")?.dataset.gridTitleFit;if(!t?.matches(".summary-scroll")||"compact"===n||"blank"===n||"measuring"===n)return[];const i=Array.from(t.children).filter(t=>t!==e);return i.some(e=>e.matches(".calendar-label:not(.label-emoji)"))?[{title:e,summary:t,labels:i,reserved:t.hasAttribute("data-scroll-labels")}]:(t.removeAttribute("data-scroll-labels"),[])});if(!t.length)return;const n=t[0].title.ownerDocument.createElement("canvas").getContext("2d"),i=new Set;let r=!1;for(const{summary:e}of t)e.setAttribute("data-scroll-labels","");try{for(const{title:e,summary:r,labels:a}of t){const t=getComputedStyle(r),o=C_(t.width)+("border-box"===t.boxSizing?0:C_(t.paddingLeft)+C_(t.paddingRight)+C_(t.borderLeftWidth)+C_(t.borderRightWidth)),s=r.getBoundingClientRect(),l=o>0?s.width/o:0,d=s.left+(C_(t.borderLeftWidth)+C_(t.paddingLeft))*l,c=s.right-(C_(t.borderRightWidth)+C_(t.paddingRight))*l,u=e.getBoundingClientRect(),h=getComputedStyle(e),m=k_(e),p=m[0],f=getComputedStyle(p?.node.parentElement??e);n&&(n.font=f.font||`${f.fontSize} ${f.fontFamily}`);const g=n?(n.measureText("…").width+C_(f.letterSpacing))*l:1/0,v=(C_(h.paddingLeft)+C_(h.paddingRight)+C_(h.borderLeftWidth)+C_(h.borderRightWidth))*l,_=a.every(e=>{const t=e.getBoundingClientRect();return t.width>0&&t.left>=d-n_&&t.right<=c+n_});l>0&&_&&E_(r)&&f_(u.width-v,S_(m),$_(m),g)&&i.add(r)}r=!0}finally{for(const e of t)e.summary.toggleAttribute("data-scroll-labels",r?i.has(e.summary):e.reserved)}}function L_(e){const t=C_(getComputedStyle(e).height);return t>0?e.getBoundingClientRect().height/t:1}function F_(e){const t=getComputedStyle(e.block),n=e.block.getBoundingClientRect(),i=L_(e.block),r={top:n.top+(C_(t.borderTopWidth)+C_(t.paddingTop))*i,bottom:n.bottom-(C_(t.borderBottomWidth)+C_(t.paddingBottom))*i};if(e.block.classList.contains("grid-event-content-limited")){const t=e.disclosure.getBoundingClientRect();return{top:Math.max(r.top,t.top),bottom:Math.min(r.bottom,t.bottom)}}return r}function R_(e){const t=F_(e),n=e.row.getBoundingClientRect(),i=e.summary.getBoundingClientRect();return{summary:i,visible:{top:Math.max(t.top,n.top,i.top),bottom:Math.min(t.bottom,n.bottom,i.bottom)}}}function O_(e){if(!A_(e)||!E_(e.summary))return!1;const t=k_(e.title),n=t[0]?.rects[0];if(!n||n.height<=0)return!1;const{visible:i,summary:r}=R_(e),a=e_(e.summary,r),o=T_(e);return D_(n,i)&&o.every(e=>D_(e,i)&&e.left>=a.left-n_&&e.right<=a.right+n_)}function N_(e){const t=getComputedStyle(e);return"border-box"===t.boxSizing?C_(t.width)-C_(t.paddingLeft)-C_(t.paddingRight)-C_(t.borderLeftWidth)-C_(t.borderRightWidth):C_(t.width)}function I_(e,t){if(!e)return 1/0;const n=getComputedStyle(t);return e.font=n.font||`${n.fontSize} ${n.fontFamily}`,e.measureText("…").width+C_(n.letterSpacing)}function z_(e){return(e.top+e.bottom)/2}function j_(e){return"word"===e.kind?e.node.matches(".title-words > .title-word"):!!e.node.parentElement?.matches(".title-words > .title-run")}function H_(e){const t=F_(e),n=e.row.getBoundingClientRect(),i=k_(e.summary).flatMap(e=>e.rects),r=M_([n,...i.filter(e=>D_(e,n)),...T_(e)]);if(!D_(r,t))return null;const a=(t.top+t.bottom-r.top-r.bottom)/2,o=Math.max(0,...i.map(e=>e.height));return Math.abs(a)>o+n_?null:a/L_(e.block)}function W_(e,t){const n=L_(e.block),i=k_(e.title),r=getComputedStyle(i[0]?.node.parentElement??e.title),a=e_(e.title),o=e.row.getBoundingClientRect(),s=e.summary.getBoundingClientRect(),l=e.disclosure.getBoundingClientRect(),d=i.flatMap(e=>e.rects),c=T_(e),u=M_([o,...d,...c]),h=C_(getComputedStyle(e.summary).zoom)||1;t&&(t.font=r.font||`${r.fontSize} ${r.fontFamily}`);const m=t?(t.measureText("…").width+C_(r.letterSpacing))*n*h:1/0,p=S_(i),f=$_(i),g=c.every(e=>e.left>=s.left-n_&&e.right<=s.right+n_&&e.width>0);return{target:e,font:C_(r.fontSize),textFonts:[C_(r.fontSize),...Array.from(e.summary.querySelectorAll(".calendar-label")).flatMap(e=>k_(e).map(t=>C_(getComputedStyle(t.node.parentElement??e).fontSize)))],height:(u.bottom-u.top)/n,available:l.height/n,shift:(l.top+l.bottom-u.top-u.bottom)/(2*n),textFits:d.every(e=>D_(e,a)),readable:g&&E_(e.summary)&&f_(a.width,p,f,m)}}function B_(e){return e.textFits&&e.height<=e.available+n_}const q_="data-title-fit",U_="data-title-cut",V_={width:"--calendar-card-title-room-width",height:"--calendar-card-title-room-height",pad:"--calendar-card-title-pad",start:"--calendar-card-title-cut-start",end:"--calendar-card-title-cut-end",below:"--calendar-card-title-cut-below"},G_="--calendar-card-title-room-gap",K_=[V_.start,V_.end,V_.below];function Y_(e){e.removeAttribute(U_);for(const t of K_)e.style.removeProperty(t)}function J_(e){Y_(e),e.removeAttribute(q_);for(const t of Object.values(V_))e.style.removeProperty(t)}function X_(e){return parseFloat(e)||0}function Z_(e,t){const n=Array.from(e);n.forEach(Y_);const i=t>=2,r=[],a=n.flatMap(e=>{const t=function(e){const t=e.querySelector(":scope > .summary"),n=e.querySelector(":scope > .title-aside");if(!t||!n||!t.offsetWidth)return null;const i=t.getBoundingClientRect().width;return{row:e,summary:t,aside:n,direction:"rtl"===getComputedStyle(e).direction?"rtl":"ltr",scale:Math.abs(i-t.offsetWidth)<1?1:i/t.offsetWidth||1}}(e);if(!t)return r.push(e),[];const{summary:n,aside:i,scale:a}=t,o=getComputedStyle(n),s=i.getBoundingClientRect(),l=parseFloat(getComputedStyle(e).getPropertyValue(G_)),d=n.clientWidth-X_(o.getPropertyValue("padding-inline-start"))-X_(o.getPropertyValue("padding-inline-end")),c=i.querySelector(":scope > .title-strut")?.getBoundingClientRect(),u=!!c&&(c.top-s.top)/a>.5;return[{...t,lineHeight:X_(o.lineHeight),pad:X_(o.paddingBottom),width:u?d:s.width/a,height:s.height/a,avail:d,gap:Number.isFinite(l)?l:12}]});r.forEach(J_);for(const{row:e,direction:t,width:n,height:i,pad:r}of a)e.setAttribute(q_,t),e.style.setProperty(V_.width,`${n}px`),e.style.setProperty(V_.height,`${i}px`),e.style.setProperty(V_.pad,`${r}px`);if(!i)return;const o=a.flatMap(e=>{if(!(e.lineHeight>0))return[];const n=function(e,t){const{summary:n,scale:i,lineHeight:r,pad:a,width:o,height:s,avail:l,gap:d}=e,c=getComputedStyle(n),u=n.getBoundingClientRect(),h=u.top/i+X_(c.paddingTop),m=u.bottom/i-a-h,p=(t+.5)*r;if(m<=p)return null;const f=n.querySelector(":scope > .title-room")?.getBoundingClientRect();if(!f)return null;const g=Array.from(n.querySelector(".event-title")?.getClientRects()??[]).filter(e=>e.width>0),v=g[g.length-1],_=v&&f.top>=(v.top+v.bottom)/2?f.top/i-h:m;return s>(t-.5)*r||l-o-d<2*r?_>p?"below":null:""}(e,t);return null===n?[]:[{...e,cut:n}]});for(const{row:e,cut:t,height:n,pad:i}of o)e.setAttribute(U_,t),"below"===t&&e.style.setProperty(V_.below,`${n+i}px`);const s=o.filter(({cut:e})=>""===e).map(({row:e,summary:t,scale:n,lineHeight:i})=>{const r=t.getBoundingClientRect().top/n+X_(getComputedStyle(t).paddingTop),a=e.getBoundingClientRect().bottom/n-r;return{row:e,start:a-i/2,end:a}});for(const{row:e,start:t,end:n}of s)e.style.setProperty(V_.start,`${t}px`),e.style.setProperty(V_.end,`${n}px`)}const Q_="data-title-unhyphenated",ey=/[\p{L}\p{M}\u00AD]/u;function ty(e){const t=Array.from(e);if(t.forEach(e=>e.removeAttribute(Q_)),!t.length)return;const n=document.createElement("canvas").getContext("2d");t.filter(e=>function(e,t){const n=e.querySelector(".event-title");if(!n)return!1;const i=function(e,t){for(const n of[t,e,e.parentElement]){if(!(n instanceof HTMLElement))continue;const e=getComputedStyle(n);if(/^\d+$/.test(e.webkitLineClamp)&&"visible"!==e.overflowY&&n.scrollHeight>n.clientHeight+1)return n}return null}(e,n);if(!i)return!1;const r=getComputedStyle(i),a=i.getBoundingClientRect(),o=i.offsetWidth>0&&Math.abs(a.width-i.offsetWidth)>=1?a.width/i.offsetWidth:1,s=a.bottom-X_(r.paddingBottom)*o,l=[],d=n.ownerDocument,c=d.createTreeWalker(n,NodeFilter.SHOW_TEXT),u=d.createRange();for(let e=c.nextNode();e;e=c.nextNode())for(let t=0;t<e.length;t+=1)u.setStart(e,t),u.setEnd(e,t+1),l.push({text:e.data[t],rect:u.getBoundingClientRect()});u.setStart(d,0),u.collapse(!0);const h=i===e.parentElement?e:i,m=getComputedStyle(h),p=(X_(m.lineHeight)||X_(r.lineHeight))*o,f=l.findIndex(({rect:e})=>e.height>0&&e.bottom>s+p/4);if(f<=0)return!1;const g=l[f-1].text,v=l[f].text;if(!ey.test(g)||!ey.test(v))return!1;const _=l.slice(0,f).filter(({rect:e})=>{const t=(e.top+e.bottom)/2;return e.height>0&&t>s-p&&t<=s});if(!_.length||!t)return!0;const y=getComputedStyle(n);t.font=y.font||`${y.fontWeight} ${y.fontSize} ${y.fontFamily}`;const w=t.measureText(`${_.map(({text:e})=>e).join("")}‐…`).width*o,b=h.getBoundingClientRect(),x=i===e.parentElement?(X_(i.style.getPropertyValue(V_.width))+(X_(getComputedStyle(i).getPropertyValue(G_))||0))*o:0,k=.2*o;return"rtl"===m.direction?_[0].rect.right-w>=b.left+X_(m.paddingLeft)*o+x-k:_[0].rect.left+w<=b.right-X_(m.paddingRight)*o-x+k}(e,n)).forEach(e=>e.setAttribute(Q_,""))}var ny=Object.defineProperty,iy=(e,t,n,i)=>{for(var r,a=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(a=r(t,n,a)||a);return a&&ny(t,n,a),a};const ry="calendar-card-pro-day",ay=["ui.common.close","Close"];class oy extends Xv{constructor(){super(...arguments),this._version=0,this._titleFitFrame=null,this._logName="Day panel",this._panelWidth=360,this._onAdd=e=>{!this._closing&&this._params&&(this._adding=this._whereOpened(e.currentTarget),this._close())},this._onRowClick=e=>{const t=this._rowAt(e);t&&(e.preventDefault(),this._pick(t))},this._onRowPointerDown=e=>{if(this._endPress(),!1===e.isPrimary||"number"==typeof e.button&&0!==e.button)return;if(this._closing||!this._params?.source.holds?.())return;const t=this._rowAt(e);if(!t)return;const n={pointerId:e.pointerId,x:e.clientX,y:e.clientY,hit:t,held:!1,timer:window.setTimeout(()=>{n.held=!0},500)};this._press=n},this._onRowPointerMove=e=>{const t=this._press;t&&!t.held&&e.pointerId===t.pointerId&&Math.hypot(e.clientX-t.x,e.clientY-t.y)>De.POINTER_MOVE_TOLERANCE&&this._endPress()},this._onRowPointerUp=e=>{const t=this._press;t&&e.pointerId===t.pointerId&&(this._endPress(),t.held&&this._pick(t.hit,"hold"))},this._onRowPointerCancel=e=>{e.pointerId===this._press?.pointerId&&this._endPress()},this._onRowKey=e=>{if("Enter"!==e.key&&" "!==e.key)return;if(e.repeat||e.isComposing)return;const t=this._rowAt(e);t&&e.composedPath()[0]===t.element&&(e.preventDefault(),this._pick(t))},this._onCancel=e=>{e.preventDefault(),this._close()},this._onPointerDown=e=>{this._backdropDown=e.target===this._dialog},this._onClick=e=>{this._isBackdropPress(e)&&this._close()}}get _anchor(){return this._params?.anchor}_clear(){this._stopTitleFits();const e=this._detach,t=this._params?.source,n=this._picked,i=this._adding;this._detach=void 0,this._params=void 0,this._picked=void 0,this._adding=void 0,e?.(),t&&n&&setTimeout(()=>t.activate(n.target,n.origin,n.gesture)),t&&i&&setTimeout(()=>t.add?.(i))}showDialog(e){this._closing&&(this._picked=void 0,this._adding=void 0,this._closeNow()),this._detach?.(),this._params=e,this._onClosed=e.closed,this._picked=void 0,this._adding=void 0,this._place=void 0,this._maxHeight=void 0,this._detach=e.source.attach({changed:()=>{this._version+=1},close:()=>this._close()}),this._wantOpen=!0,this.requestUpdate()}closeDialog(){return this._close(),!0}_close(){!this._closing&&this._params&&this._finish()}_focusStart(){const e=this._params?.focusRinged?this.renderRoot.querySelector('.day-panel-rows .search-ring [role="button"][tabindex]'):null;e&&this._dialog?.open?(e.focus({preventScroll:!0}),e.scrollIntoView?.({block:"nearest",inline:"nearest"})):super._focusStart()}updated(e){super.updated(e),this._syncTitleFits()}_placeBeside(e,t){this._fitTitles(),super._placeBeside(e,t)}disconnectedCallback(){super.disconnectedCallback(),this._stopTitleFits(),this._endPress()}_syncTitleFits(){this._stopTitleFits();const e=this._params?.source,t=this.renderRoot?.querySelector(".day-panel-rows");if(!e||!t||!this.isConnected)return;const n=e.titleFit(),i=Array.from(t.querySelectorAll(".summary-row.title-wrap")),r=n.oneLine?Array.from(t.querySelectorAll(".event-title.title-scrollable")):[];if(!i.length&&!n.capped&&!r.length)return;if(this._fitTitles(),"undefined"!=typeof ResizeObserver){const e=new ResizeObserver(()=>this._scheduleTitleFits());this._titleWatch=e,e.observe(t),i.forEach(t=>t.querySelectorAll(":scope > .summary, :scope > .title-aside").forEach(t=>e.observe(t)))}const a=document.fonts;if(a){let e=!0;const t=()=>{e&&this._scheduleTitleFits()};a.ready.then(t),a.addEventListener?.("loadingdone",t),this._titleFontsCleanup=()=>{e=!1,a.removeEventListener?.("loadingdone",t)}}}_fitTitles(){const e=this._params?.source,t=this.renderRoot?.querySelector(".day-panel-rows");if(!e||!t)return;const n=e.titleFit();t.querySelectorAll(`[${Q_}]`).forEach(e=>e.removeAttribute(Q_)),Z_(t.querySelectorAll(".summary-row.title-wrap"),n.cutLines),n.capped&&ty(t.querySelectorAll(".summary:not(.summary-scroll)")),n.oneLine&&P_(t.querySelectorAll(".event-title.title-scrollable"))}_scheduleTitleFits(){null!==this._titleFitFrame&&cancelAnimationFrame(this._titleFitFrame),this._titleFitFrame=requestAnimationFrame(()=>{this._titleFitFrame=null,this.isConnected&&this._fitTitles()})}_stopTitleFits(){this._titleWatch?.disconnect(),this._titleWatch=void 0,this._titleFontsCleanup?.(),this._titleFontsCleanup=void 0,null!==this._titleFitFrame&&(cancelAnimationFrame(this._titleFitFrame),this._titleFitFrame=null)}_rowAt(e){const t=e.composedPath(),n=t.findIndex(e=>e instanceof Element&&e.classList.contains(Bh)),i=Wh(t,e.currentTarget);if(i)return n>=0&&n<t.indexOf(i.element)?void 0:i}_pick(e,t="tap"){!this._closing&&this._params&&(this._picked={target:e.target,origin:this._whereOpened(e.element),gesture:t},this._close())}_whereOpened(e){const t=this._params?.anchor;return t?{x:t.x,y:t.y,rect:t.rect,below:t.below}:{x:(n=e.getBoundingClientRect()).left+n.width/2,y:n.top+n.height/2,rect:{left:n.left,top:n.top,right:n.right,bottom:n.bottom}};var n}_endPress(){this._press&&clearTimeout(this._press.timer),this._press=void 0}_named(e,t){const n=this.hass?.localize?.(e);return n&&n!==e?n:t}render(){const e=this._params;if(!e)return B`<dialog></dialog>`;this._version;const t=this._place,n=[this._roomStyle,t?.arrow?`transform-origin:${Nv(t.arrow)}`:""].filter(e=>""!==e).join(";"),i=this._named(...ay),r=e.source.addLabel?.(),a=e.source.language?.()??e.language,o=B`<span id="day-panel-day" lang=${a}
      >${e.source.title?.()??e.title}</span
    >`;return B`
      <dialog
        class="${e.dark?"dark":"light"} ${this._sheet?"sheet":"popover"}${this._lift>0?" lifted":""}"
        ?data-placed=${this._sheet||!!t}
        style=${jv(this._sheet,t,this._lift)}
        aria-labelledby="day-panel-day"
        @cancel=${this._onCancel}
        @pointerdown=${this._onPointerDown}
        @click=${this._onClick}
        @keydown=${this._keepKeys}
      >
        <div class="panel day-panel" style=${n} ?inert=${this._closing}>
          ${Hv(this._sheet)}
          <div class="day-panel-head">
            <h2
              class="day-panel-title"
              id="day-panel-title"
              style=${sm({color:e.source.titleColor?.()})}
            >
              ${r?B`<button
                      type="button"
                      class="day-panel-add"
                      aria-label=${r}
                      aria-describedby="day-panel-day"
                      @click=${this._onAdd}
                    >
                      ${o}
                    </button>`:o}
            </h2>
            <button
              type="button"
              class="day-panel-close"
              autofocus
              aria-label=${i}
              title=${i}
              @click=${()=>this._close()}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d=${ym}></path>
              </svg>
            </button>
          </div>
          <div
            class="day-panel-rows"
            lang=${a}
            style=${sm(e.source.styles())}
            @click=${this._onRowClick}
            @keydown=${this._onRowKey}
            @pointerdown=${this._onRowPointerDown}
            @pointermove=${this._onRowPointerMove}
            @pointerup=${this._onRowPointerUp}
            @pointercancel=${this._onRowPointerCancel}
          >
            ${e.source.rows()}
          </div>
        </div>
        ${Wv(t?.arrow)}
      </dialog>
    `}}oy.styles=[Bv,qv,Zp,a`
      :host {
        display: inline;
        height: auto;
      }
      .panel.day-panel {
        width: 360px;
        gap: 10px;
        overflow: hidden;
      }
      .sheet .panel.day-panel {
        width: 100%;
      }
      .day-panel-head {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .day-panel-title {
        flex: 1;
        min-width: 0;
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        line-height: 1.3;
        color: var(--text);
      }
      .day-panel-add {
        display: block;
        width: 100%;
        margin: -4px -6px;
        padding: 4px 6px;
        border: 0;
        border-radius: 6px;
        background: none;
        font: inherit;
        color: inherit;
        text-align: start;
        cursor: pointer;
        box-sizing: content-box;
      }
      @media (hover: hover) {
        .day-panel-add:hover {
          background-color: var(--button);
        }
      }
      .day-panel-add:active {
        background-color: var(--button);
      }
      .day-panel-close {
        flex: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: var(--button);
        color: var(--text);
        cursor: pointer;
      }
      .day-panel-close svg {
        width: 16px;
        height: 16px;
        fill: currentColor;
      }
      .day-panel-rows {
        flex: 0 1 auto;
        min-height: 0;
        overflow-y: auto;
        overscroll-behavior: contain;
        font-family: var(--ha-font-family-body, var(--paper-font-body1_-_font-family, inherit));
        color: var(--primary-text-color);
      }
      .day-panel-rows .month-day-table {
        margin: 0;
      }
    `],iy([pe()],oy.prototype,"_params"),iy([pe()],oy.prototype,"_version"),customElements.get(ry)||customElements.define(ry,oy);const sy="calendar-card-pro-places";function ly(e){return e.trim().toLowerCase().replace(/\s+/g," ")}function dy(e,t){if(!e.radius)return 15;const n=Math.max(-85,Math.min(85,e.latitude)),i=2*e.radius/t,r=Math.floor(Math.log2(156543.034*Math.cos(n*Math.PI/180)/i));return Math.max(5,Math.min(15,r))}function cy(e){return ly(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"")}const uy=new Set(["PPL","PPLA","PPLA2","PPLA3","PPLA4","PPLA5","PPLC","PPLG"]);function hy(e,t,n,i){const[r,a]=e.split(","),o=cy(r),s=n?.toUpperCase(),l="number"==typeof i?.latitude&&"number"==typeof i.longitude?{latitude:i.latitude,longitude:i.longitude}:void 0,d=e=>!!l&&function(e,t){const n=(e.latitude+t.latitude)/2*Math.PI/180,i=(t.longitude-e.longitude)*Math.cos(n)*111.32,r=110.57*(t.latitude-e.latitude);return Math.hypot(i,r)}(l,{latitude:e.latitude,longitude:e.longitude})<=100,c=t.filter(e=>{if("string"!=typeof e.name||cy(e.name)!==o)return!1;if("string"!=typeof e.feature_code||!uy.has(e.feature_code))return!1;if("number"!=typeof e.latitude||"number"!=typeof e.longitude)return!1;const t=Number(e.population)||0;return void 0!==a||s&&e.country_code===s||d(e)?t>=5e3:t>=1e6||"PPLC"===e.feature_code&&t>=1e5}),u=c.find(d)??c[0];if(!u)return;const h=Number(u.population)||0;return{latitude:u.latitude,longitude:u.longitude,zoom:h>=1e6?11:h>=1e5?12:13,source:"open-meteo"}}function my(){try{const e=globalThis.localStorage?.getItem(sy),t=e?JSON.parse(e):{};return t&&"object"==typeof t?t:{}}catch{return{}}}function py(e,t){try{const n=my();n[e]=t;const i=Object.keys(n);i.length>300&&i.sort((e,t)=>n[e].at-n[t].at).slice(0,i.length-300).forEach(e=>delete n[e]),globalThis.localStorage?.setItem(sy,JSON.stringify(n))}catch{}}const fy=new Map;async function gy(e,t,n){const i=function(e,t){const n=ly(e);if(n&&t?.states)for(const[e,i]of Object.entries(t.states)){if(!e.startsWith("zone."))continue;if(![String(i.attributes?.friendly_name??""),e.slice(5).replace(/_/g," ")].some(e=>e&&ly(e)===n))continue;const t=Number(i.attributes?.latitude),r=Number(i.attributes?.longitude);if(!Number.isFinite(t)||!Number.isFinite(r))continue;const a=Number(i.attributes?.radius);return a>0&&Number.isFinite(a)?{latitude:t,longitude:r,radius:a}:{latitude:t,longitude:r}}}(e,t);return i?{latitude:i.latitude,longitude:i.longitude,zoom:dy(i,n),source:"zone"}:async function(e,t,n=Date.now(),i=globalThis.fetch?.bind(globalThis)){const r=function(e){const t=e.trim().replace(/\s+/g," ");if(t.length<2||t.length>60)return;if(/[\d@/:]/.test(t))return;const n=t.split(",").map(e=>e.trim());return n.length>2||n.some(e=>!e)||n[0].split(" ").length>4?void 0:t}(e);if(!r||!i)return;const a=cy(r),o=my()[a];if(o&&1===o.rule&&n-o.at<o.for)return o.place;const s=fy.get(a);if(s)return s;const l=(async()=>{try{let e;for(const n of function(e){const t=(e?.locale?.language??"en").slice(0,2).toLowerCase();let n;try{const t=e?.config?.country;n=t?new Intl.Locale(`und-${t}`).maximize().language:void 0}catch{n=void 0}return[...new Set([t,n,"en"].filter(e=>!!e))]}(t)){const a=`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(r)}&count=10&language=${encodeURIComponent(n)}&format=json`,o=await i(a);if(!o.ok)throw new Error(`Open-Meteo answered ${o.status}`);const s=await o.json(),l=Array.isArray(s?.results)?s.results:[];if(e=hy(r,l,t?.config?.country,t?.config),e)break}return py(a,{at:n,place:e,for:e?2592e6:6048e5,rule:1}),e}catch{return void py(a,{at:n,for:36e5,rule:1})}finally{fy.delete(a)}})();return fy.set(a,l),l}(e,t)}let vy;function _y(e){return`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e.trim())}`}const yy=["MO","TU","WE","TH","FR","SA","SU"],wy={daily:30,weekly:13,monthly:12,yearly:5},by=new Map([["DAILY","daily"],["WEEKLY","weekly"],["MONTHLY","monthly"],["YEARLY","yearly"]]),xy=["FREQ","INTERVAL","COUNT","UNTIL","BYDAY","BYMONTHDAY","WKST"],ky=[1,2,3,4,-1],$y=new Map([[1,"st"],[21,"st"],[31,"st"],[2,"nd"],[22,"nd"],[3,"rd"],[23,"rd"]]),Sy=/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z?))?$/,Ty=/^(\d{4})-(\d{2})-(\d{2})$/,My=/^([+-]?)(\d{1,2})(MO|TU|WE|TH|FR|SA|SU)$/,Dy=/^([+-]?)(\d{1,2})$/,Cy=/^\d+$/;function Ay(e,t,n){const i=new Date(0);return i.setUTCFullYear(e,t,n),i}function Ey(e,t){return Ay(e,t+1,0).getUTCDate()}function Py(e,t,n){const i=(e,t)=>String(e).padStart(t,"0");return`${i(e,4)}-${i(t,2)}-${i(n,2)}`}function Ly(e,t,n){return t>=1&&t<=12&&n>=1&&n<=Ey(e,t-1)}function Fy(e){return yy[(e.getDay()+6)%7]}function Ry(e){if(null==e||""===e.trim())return{kind:"none"};const t=function(e){const t=function(e){const t=new Map;for(const n of e.trim().replace(/^RRULE:/i,"").split(";")){if(""===n.trim())continue;const e=n.indexOf("=");if(e<0)return;const i=n.slice(0,e).trim().toUpperCase(),r=n.slice(e+1).trim().toUpperCase();if(!r||t.has(i)||!xy.includes(i))return;t.set(i,r)}return t}(e),n=t&&by.get(t.get("FREQ")??"");if(!t||!n)return;const i=t.get("INTERVAL"),r=void 0===i?1:Oy(i),a=function(e){const t=e.get("COUNT"),n=e.get("UNTIL");if(void 0===t||void 0===n){if(void 0!==t){const e=Oy(t);return void 0===e?void 0:{kind:"after",count:e}}if(void 0!==n){const e=function(e){const t=Sy.exec(e);if(!t)return;const[n,i,r]=[Number(t[1]),Number(t[2]),Number(t[3])];if(!Ly(n,i,r))return;if(void 0===t[4])return Py(n,i,r);const[a,o,s]=[Number(t[4]),Number(t[5]),Number(t[6])];if(a>23||o>59||s>60)return;if(!t[7])return Py(n,i,r);const l=Ay(n,i-1,r);return l.setUTCHours(a,o,s),Py(l.getFullYear(),l.getMonth()+1,l.getDate())}(n);return void 0===e?void 0:{kind:"on",until:e}}return{kind:"never"}}}(t);if(void 0===r||!a)return;const o=t.get("BYDAY"),s=t.get("BYMONTHDAY");let l,d=[];if("weekly"===n){if(void 0!==s)return;if(void 0!==o){const e=function(e){const t=e.split(",").map(e=>e.trim());return t.every(Ny)&&new Set(t).size===t.length?t:void 0}(o);if(!e)return;d=e}}else if("monthly"===n){if(void 0!==o&&void 0!==s)return;const e=o??s;if(void 0!==e&&(l=void 0!==o?function(e){const t=My.exec(e);if(!t)return;const n=("-"===t[1]?-1:1)*Number(t[2]);return ky.includes(n)?{kind:"weekday",nth:n,weekday:t[3]}:void 0}(e):function(e){const t=Dy.exec(e);if(!t)return;const n=("-"===t[1]?-1:1)*Number(t[2]);return-1===n?{kind:"last-day"}:n>=1&&n<=31?{kind:"day",day:n}:void 0}(e),!l))return}else if(void 0!==o||void 0!==s)return;const c=t.get("WKST");if(void 0!==c){if(!Ny(c))return;if("weekly"===n&&r>1&&d.length>0&&"MO"!==c)return}const u={freq:n,interval:r,weekdays:d,end:a};return l&&(u.monthly=l),u}(e);return t?{kind:"rule",rule:t}:{kind:"custom",raw:e}}function Oy(e){const t=Number(e);return Cy.test(e)&&Number.isSafeInteger(t)&&t>=1?t:void 0}function Ny(e){return yy.includes(e)}function Iy(e,t){const n={freq:e,interval:1,weekdays:"weekly"===e?[Fy(t)]:[],end:{kind:"never"}};return"monthly"===e&&(n.monthly={kind:"day",day:t.getDate()}),n}function zy(e,t,n=new Date){const i=wy[t];if("never"===e)return{kind:e};if("after"===e)return{kind:e,count:i};const[r,a,o]=[n.getFullYear(),n.getMonth(),n.getDate()];if("daily"===t||"weekly"===t){const n=Ay(r,a,o+i*("weekly"===t?7:1));return{kind:e,until:Py(n.getUTCFullYear(),n.getUTCMonth()+1,n.getUTCDate())}}const s=12*r+a+i*("yearly"===t?12:1),l=Math.floor(s/12),d=s-12*l;return{kind:e,until:Py(l,d+1,Math.min(o,Ey(l,d)))}}function jy(e){const t=e.getDate(),n=Fy(e),i=Ey(e.getFullYear(),e.getMonth()),r=t+7>i,a=[{kind:"day",day:t}];return(!r||t<=28)&&a.push({kind:"weekday",nth:Math.floor((t-1)/7)+1,weekday:n}),r&&a.push({kind:"weekday",nth:-1,weekday:n}),t===i&&a.push({kind:"last-day"}),a}function Hy(e,t){const{allDay:n,start:i}=t;if(Number.isNaN(i.getTime()))throw new RangeError("Invalid start date");if(!Number.isInteger(e.interval)||e.interval<1)throw new RangeError(`Invalid interval: ${e.interval}`);const r=[`FREQ=${e.freq.toUpperCase()}`];if(e.interval>1&&r.push(`INTERVAL=${e.interval}`),"after"===e.end.kind){if(!Number.isInteger(e.end.count)||e.end.count<1)throw new RangeError(`Invalid count: ${e.end.count}`);r.push(`COUNT=${e.end.count}`)}if("weekly"===e.freq){const t=e.weekdays.filter((t,n)=>e.weekdays.indexOf(t)===n);if(!t.every(Ny))throw new RangeError(`Invalid weekdays: ${String(t)}`);t.length>0&&r.push(`BYDAY=${t.join(",")}`)}if("monthly"===e.freq&&e.monthly){const t=function(e,t){switch(e.kind){case"day":if(!Number.isInteger(e.day)||e.day<1||e.day>31)throw new RangeError(`Invalid day of the month: ${e.day}`);return e.day===t.getDate()?void 0:`BYMONTHDAY=${e.day}`;case"weekday":if(!ky.includes(e.nth)||!Ny(e.weekday))throw new RangeError(`Invalid monthly weekday: ${e.nth}${e.weekday}`);return`BYDAY=${e.nth>0?"+":""}${e.nth}${e.weekday}`;case"last-day":return"BYMONTHDAY=-1"}}(e.monthly,i);t&&r.push(t)}return"on"===e.end.kind&&r.push(`UNTIL=${function(e,t,n){const i=function(e){const t=Ty.exec(e);if(!t)return;const[n,i,r]=[Number(t[1]),Number(t[2]),Number(t[3])];return Ly(n,i,r)?[n,i,r]:void 0}(e);if(!i)throw new RangeError(`Invalid end date: ${e}`);if(t)return e.replace(/-/g,"");const r=new Date(n.getTime());return r.setFullYear(i[0],i[1]-1,i[2]),`${r.toISOString().slice(0,19).replace(/[-:]/g,"")}Z`}(e.end.until,n,i)}`),r.join(";")}const Wy=["SU","MO","TU","WE","TH","FR","SA"];function By(e,t){return JSON.stringify(e)===JSON.stringify(t)}function qy(e,t,n){if("rule"!==e.kind)return e;const i=e.rule;if("weekly"===i.freq){const r=Wy[t.getDay()],a=Wy[n.getDay()];return 1===i.weekdays.length&&i.weekdays[0]===r&&r!==a?{kind:"rule",rule:{...i,weekdays:[a]}}:e}if("monthly"===i.freq&&i.monthly){const r=jy(t).find(e=>By(e,i.monthly));if(!r)return e;const a=jy(n),o=a.find(e=>function(e,t){return e.kind===t.kind&&("weekday"!==e.kind||"weekday"!==t.kind||Math.sign(e.nth)===Math.sign(t.nth))}(e,r))??a[0];return By(o,i.monthly)?e:{kind:"rule",rule:{...i,monthly:o}}}return e}function Uy(e){return Boolean(e)&&!/(?:^|;)COUNT=/i.test(e??"")}function Vy(e){return Gy(e)??""}function Gy(e){return"custom"===e.repeat.kind?e.repeat.raw:"rule"===e.repeat.kind?Hy(e.repeat.rule,{allDay:e.times.allDay,start:e.times.start}):void 0}function Ky(e,t,n){const i=Cd(e.times),r=t&&Vy(e)===Vy(t)?t.storedRule:Gy(e);return{summary:e.summary.trim(),dtstart:i.dtstart,dtend:i.dtend,description:e.description,location:e.location,...r&&""!==n?{rrule:r}:{}}}var Yy=Object.defineProperty,Jy=(e,t,n,i)=>{for(var r,a=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(a=r(t,n,a)||a);return a&&Yy(t,n,a),a};const Xy="calendar-card-pro-event-popover",Zy={summary:["ui.components.calendar.event.summary","Summary"],location:["ui.components.calendar.event.location","Location"],description:["ui.components.calendar.event.description","Description"],allDay:["ui.components.calendar.event.all_day","All day"],start:["ui.components.calendar.event.start","Start"],end:["ui.components.calendar.event.end","End"],calendar:["ui.components.calendar.label","Calendar"],tentative:["ui.components.calendar.event.tentative","Tentative"],repeat:["ui.components.calendar.event.repeat.label","Repeat"],interval:["ui.components.calendar.event.repeat.interval.label","Repeat interval"],monthly:["ui.components.calendar.event.repeat.monthly.label","Repeat monthly"],endLabel:["ui.components.calendar.event.repeat.end.label","End"],never:["ui.components.calendar.event.repeat.end.never","Never"],after:["ui.components.calendar.event.repeat.end.after","After"],on:["ui.components.calendar.event.repeat.end.on","On"],occurrences:["ui.components.calendar.event.repeat.end_after.ocurrences","occurrences"],thisEvent:["ui.components.calendar.event.recurrence_range.this_event","Only this event"],future:["ui.components.calendar.event.recurrence_range.this_and_future","This and all future events"],deletePrompt:["ui.components.calendar.event.confirm_delete.prompt","Do you want to delete this event?"],deleteRecurring:["ui.components.calendar.event.confirm_delete.recurring_prompt","Which events do you want to delete?"],updateRecurring:["ui.components.calendar.event.confirm_update.recurring_prompt","Which events do you want to update?"],missing:["ui.components.calendar.event.not_all_required_fields","Not all required fields are filled in"],duration:["ui.components.calendar.event.invalid_duration","The duration of the event is not valid. Please check start and end date."],delete:["ui.common.delete","Delete"],save:["ui.common.save","Save"],add:["ui.common.add","Add"],edit:["ui.common.edit","Edit"],cancel:["ui.common.cancel","Cancel"],close:["ui.common.close","Close"]},Qy="Unknown error",ew=["none","daily","weekly","monthly","yearly"],tw=["MO","TU","WE","TH","FR","SA","SU"];class nw extends Xv{constructor(){super(...arguments),this._phase="edit",this._ghostPossible=!1,this._touched=!1,this._openId=0,this._logName="Event popover",this._panelWidth=340,this._onCancel=e=>{e.preventDefault(),"update"!==this._phase&&"delete"!==this._phase?this._requestClose("discard"):this._backOut()},this._onPointerDown=e=>{this._backdropDown=e.target===this._dialog,this._ghostPossible=!1},this._ghostGuard={handleEvent:e=>{this._ghostPossible&&(Date.now()-this._openedAt>700?this._ghostPossible=!1:(e.preventDefault(),e.stopPropagation(),"click"===e.type&&(this._ghostPossible=!1)))},capture:!0},this._ghostFocus={handleEvent:e=>{if(!this._ghostPossible||Date.now()-this._openedAt>700)return;const t=e.target;t&&"popover-title"!==t.id&&t.matches("input, textarea, select")&&(t.blur(),this._focusStart())},capture:!0},this._onClick={handleEvent:e=>{this._ghostGuard.handleEvent(e),e.defaultPrevented||this._isBackdropPress(e)&&this._requestClose("discard")},capture:!0}}get _anchor(){return this._params?.anchor}_clear(){this._params=void 0,this._draft=void 0,this._original=void 0,this._timedBefore=void 0}showDialog(e){this._closing&&this._closeNow();const t=function(e,t=new Date){if("new"===e.mode){const n=e.times?.start??new Date(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours()),i=e.times??{allDay:!1,start:n,end:new Date(n.getTime()+36e5)};return{calendarId:e.calendarId,summary:"",location:"",description:"",times:i,repeat:{kind:"none"}}}const n=e.entry;if(!n)return;const i=Td(n.dtstart,n.dtend);return i?{calendarId:e.calendarId,summary:n.summary??"",location:n.location??"",description:n.description??"",times:i,repeat:Ry(n.rrule),storedRule:n.rrule||void 0}:void 0}(e);if(!t)return et("Event popover: the event has no readable start"),void this._fireClosed();this._params=e,this._original={...t,times:{...t.times}},this._draft="event"===e.mode&&e.moved?function(e,t){return{...e,times:t,repeat:qy(e.repeat,e.times.start,t.start)}}(t,e.moved):t,this._timedBefore=void 0,this._onClosed=e.closed,this._editing=void 0;const n=e.anchor?.pointerType;this._touched="touch"===n||"pen"===n,this._ghostPossible=this._touched,this._phase=this._recurring&&this._dropped?"update":"edit",this._error=void 0,this._map=void 0,this._place=void 0,this._openId++,this._wantOpen=!0,this.requestUpdate(),this._loadMap()}closeDialog(){return"update"===this._phase||"delete"===this._phase?this._backOut():this._requestClose("discard")}updated(e){super.updated(e);const t=e;if(t.has("_phase")){const e=t.get("_phase");"update"===this._phase||"delete"===this._phase?this.renderRoot.querySelector(".ask button")?.focus():"edit"!==this._phase||"update"!==e&&"delete"!==e||this._focusStart()}}get _titleFirst(){return"new"===this._params?.mode&&!this._touched}get _editable(){return"new"===this._params?.mode||Boolean(this._params?.canEdit)}get _dirty(){return Boolean(this._draft&&this._original&&(e=this._draft,t=this._original,e.calendarId!==t.calendarId||e.summary!==t.summary||e.location!==t.location||e.description!==t.description||e.times.allDay!==t.times.allDay||e.times.start.getTime()!==t.times.start.getTime()||e.times.end.getTime()!==t.times.end.getTime()||Vy(e)!==Vy(t)));var e,t}get _recurring(){return Boolean(this._params?.entry?.recurrence_id)}get _dropped(){return"event"===this._params?.mode&&void 0!==this._params.moved}_backOut(){return"update"===this._phase&&this._dropped?this._requestClose("discard"):(this._phase="edit",!1)}get _busy(){return"saving"===this._phase}_requestClose(e,t){if(this._closing)return!0;if(this._busy)return!1;const n=this._params,i=this._draft;if(!n||!i)return this._finish();if("discard"===e||!this._editable||!this._dirty)return this._finish();const r=function(e){return e.summary.trim()&&e.calendarId?(t=e.times,Number.isNaN(t.start.getTime())||Number.isNaN(t.end.getTime())||!(t.allDay?t.end>=t.start:t.end>t.start)?"duration":void 0):"missing";var t}(i);return r?(this._error=this._t("missing"===r?"missing":"duration"),!1):"event"===n.mode&&this._recurring&&void 0===t?(this._phase="update",this._editing=void 0,!1):(this._save(t),!1)}async _save(e){const t=this._params,n=this._draft,i=this._original,r=this.hass;if(!t||!n||!r)return;const a=this._openId;if(this._phase="saving",this._editing=void 0,this._error=void 0,"event"!==t.mode||n.calendarId===t.calendarId){try{if("new"===t.mode)await Io(r,n.calendarId,Ky(n,void 0));else{const a=t.entry;if(!a?.uid)throw new Error("The event has no identifier to save it by");await zo(r,{entityId:t.calendarId,uid:a.uid,recurrenceId:a.recurrence_id,range:e},Ky(n,i,a.recurrence_id?e:void 0))}}catch(e){if(et("Event popover: saving failed",e),a!==this._openId)return;return this._phase="edit",void(this._error=Ho(e)??Qy)}t.updated(n.calendarId),a===this._openId&&this._finish()}else await this._move(r,t,n,i,e,a)}async _move(e,t,n,i,r,a){const o=t.entry,s=t.calendarId;let l=!1;try{if(!o?.uid)throw new Error("The event has no identifier to move it by");const t=o.recurrence_id?r??"":void 0,a=Ky(n,i,t);if("THISANDFUTURE"===t&&!Uy(a.rrule))throw new Error("This series cannot be moved from here on");await Io(e,n.calendarId,a),l=!0,await jo(e,{entityId:s,uid:o.uid,recurrenceId:o.recurrence_id,range:t})}catch(e){if(et("Event popover: moving failed",e),l&&t.updated(n.calendarId),a!==this._openId)return;return this._phase="edit",this._error=Ho(e)??Qy,void(l&&this._settle(n))}t.updated(n.calendarId,s),a===this._openId&&this._finish()}get _seriesMovable(){const e=this._draft;return!!e&&Uy(Ky(e,this._original,"THISANDFUTURE").rrule)}_settle(e){const t=this._params;t&&(this._params={...t,display:void 0,canEdit:!1,canDelete:!1},this._original={...e,times:{...e.times}})}async _delete(e){const t=this._params,n=t?.entry,i=this.hass;if(this._busy||!t||!n?.uid||!i)return;const r=this._openId;this._phase="saving",this._error=void 0;try{await jo(i,{entityId:t.calendarId,uid:n.uid,recurrenceId:n.recurrence_id,range:n.recurrence_id?e:void 0})}catch(e){if(et("Event popover: deleting failed",e),r!==this._openId)return;return this._phase="delete",void(this._error=Ho(e)??Qy)}t.updated(t.calendarId),r===this._openId&&this._finish()}_update(e){this._draft&&!this._busy&&(this._draft={...this._draft,...e},this._error=void 0,this._params?.changed?.(this._draft))}_setTimes(e){const t=this._draft;t&&this._update({times:e,repeat:qy(t.repeat,t.times.start,e.start)})}_setStartDate(e){const t=this._draft,n=t&&Ed(t.times.start,e);t&&n&&this._setTimes(Ld(t.times,n))}_setStartTime(e){const t=this._draft,n=t&&Pd(t.times.start,e);t&&n&&this._setTimes(Ld(t.times,n))}_setEndDate(e){const t=this._draft,n=t&&Ed(t.times.end,e);t&&n&&this._setTimes({...t.times,end:n})}_setEndTime(e){const t=this._draft,n=t&&Pd(t.times.end,e);t&&n&&this._setTimes({...t.times,end:n})}_setAllDay(e){const t=this._draft;if(!t)return;e&&!t.times.allDay&&(this._timedBefore=t.times);const n=this._timedBefore;this._setTimes(!e&&t.times.allDay&&n?function(e,t){const n=Fd(t,!0,0),i=Ad(n.start,e.start),r=Ad(n.end,e.end)-i,a=Sd(t.start,i),o=Sd(t.end,i+r);return{allDay:!1,start:a,end:o>a?o:new Date(a.getTime()+t.end.getTime()-t.start.getTime())}}(t.times,n):Fd(t.times,e,(new Date).getHours()))}_setFrequency(e){const t=this._draft;t&&this._update({repeat:"none"===e?{kind:"none"}:{kind:"rule",rule:Iy(e,t.times.start)}})}_setRule(e){const t=this._draft?.repeat;"rule"===t?.kind&&this._update({repeat:{kind:"rule",rule:{...t.rule,...e}}})}_toggleWeekday(e){const t=this._draft?.repeat;if("rule"!==t?.kind)return;const n=t.rule.weekdays.includes(e)?t.rule.weekdays.filter(t=>t!==e):tw.filter(n=>n===e||t.rule.weekdays.includes(n));n.length&&this._setRule({weekdays:n})}_setEnd(e){const t=this._draft?.repeat;"rule"===t?.kind&&this._setRule({end:zy(e,t.rule.freq)})}async _loadMap(){const e=this._params,t=(e?.display?.location??e?.entry?.location??"").trim();if(!e||"event"!==e.mode||!t||e.private)return;if(e.severalPlaces)return;const n=await gy(t,this.hass,312);if(!n||this._params!==e)return;const i=await async function(e,t=Date.now()){if(!e||"function"!=typeof e.callWS)return;const n=e.connection??e;if(vy&&vy.hass===n&&t-vy.at<12e5)return vy.token;try{const i=await e.callWS({type:"map_tiles/access_token"});if("string"!=typeof i?.token||!i.token)return;return vy={hass:n,token:i.token,at:t},i.token}catch{return}}(this.hass);if(!i||this._params!==e)return;const r=(window.devicePixelRatio??1)>=1.5?2:1,{tiles:a,tileSize:o}=function(e,t,n,i=1,r=15){const a=r+(2===i?1:0),o=256/i,s=function(e,t){const n=2**t,i=Math.max(-85.0511,Math.min(85.0511,e.latitude))*Math.PI/180;return{x:(e.longitude+180)/360*n,y:(1-Math.log(Math.tan(i)+1/Math.cos(i))/Math.PI)/2*n}}(e,a),l=s.x*o-t.width/2,d=s.y*o-t.height/2,c=2**a,u=[];for(let e=Math.floor(l/o);e<=Math.floor((l+t.width)/o);e++)for(let i=Math.floor(d/o);i<=Math.floor((d+t.height)/o);i++){if(i<0||i>=c)continue;const t=(e%c+c)%c;u.push({url:`/api/map_tiles/raster/${a}/${t}/${i}.png?token=${encodeURIComponent(n)}`,left:e*o-l,top:i*o-d})}return{tiles:u,tileSize:o}}(n,{width:312,height:120},i,r,n.zoom);this._map={tiles:a,tileSize:o,href:_y(t),label:t,source:n.source}}_t(e){const[t,n]=Zy[e],i=this.hass?.localize?.(t);return i&&i!==t?i:n}_haKey(e,t){const n=this.hass?.localize?.(e);return n&&n!==e?n:t}_ruleText(e){if(e)return function(e,t,n){const i=Ry(e);if("rule"===i.kind)try{return function(e,t,n){const i=[],r=e=>{const n="ui.components.calendar.event.rrule."+e,i=t(n);return i&&i!==n?i:""},a=e=>{const t=r(e);return t||i.push(e),t},o=e=>e%100!=1,s=e=>-1===e?a("last"):`${e}${r($y.get(e)??"th")}`,l=new Intl.DateTimeFormat(Dt(n),{weekday:"long",timeZone:"UTC"}),d=e=>l.format(Date.UTC(2024,0,1+yy.indexOf(e),12)),c=[a("every")],{interval:u}=e,h=1!==u?[String(u)]:[];switch(e.freq){case"daily":c.push(...h,a(o(u)?"days":"day"));break;case"weekly":{const t=yy.filter(t=>e.weekdays.includes(t)),n=5===t.length&&!t.includes("SA")&&!t.includes("SU");1!==u&&c.push(...h,a(o(u)?"weeks":"week")),n?c.push(...1===u?[a("weekday")]:[a("on"),a("weekdays")]):7===t.length?c.push(a(o(u)?"days":"day")):(1===u&&c.push(a("week")),t.length>0&&c.push(a("on"),t.map(d).join(", ")));break}case"monthly":{c.push(...h,a(o(u)?"months":"month"));const{monthly:t}=e;t&&c.push(a("on the"),"day"===t.kind?s(t.day):"last-day"===t.kind?s(-1):`${s(t.nth)} ${d(t.weekday)}`);break}case"yearly":c.push(...h,a(o(u)?"years":"year"))}if("on"===e.end.kind){const[t,i,r]=e.end.until.split("-").map(Number),o=new Intl.DateTimeFormat(Dt(n),{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(Ay(t,i-1,r).setUTCHours(12));c.push(a("until"),o)}else if("after"===e.end.kind){const{count:t}=e.end;c.push(a("for"),String(t),a(o(t)?"times":"time"))}if(i.length>0)return;const m=c.join(" ");return m.charAt(0).toUpperCase()+m.slice(1)}(i.rule,t,n)}catch(e){if(e instanceof RangeError)return;throw e}}(e,e=>this.hass?.localize?.(e)??"",this._params?.language??"en")??e}render(){const e=this._params,t=this._draft;if(!e||!t)return B`<dialog></dialog>`;const n=this._calendar(t.calendarId)?.color??e.color??"var(--primary-color)",i=this._place,r=this._displayed("title");return B`
      <dialog
        class="${e.dark?"dark":"light"} ${this._sheet?"sheet":"popover"}${this._lift>0?" lifted":""}"
        ?data-placed=${this._sheet||!!i}
        style=${jv(this._sheet,i,this._lift)}
        aria-labelledby="popover-title"
        @cancel=${this._onCancel}
        @pointerdown=${this._onPointerDown}
        @click=${this._onClick}
        @mousedown=${this._ghostGuard}
        @mouseup=${this._ghostGuard}
        @focusin=${this._ghostFocus}
        @keydown=${this._keepKeys}
      >
        <div
          class=${this._scrolls?"panel scrolls":"panel"}
          style="--event-color:${n};${this._roomStyle}${i?.arrow?`transform-origin:${Nv(i.arrow)}`:""}"
          ?inert=${this._busy||this._closing}
        >
          ${Hv(this._sheet)}
          <h2
            id="popover-title"
            class="visually-hidden"
            tabindex="-1"
            ?autofocus=${!this._titleFirst}
          >
            ${r||this._t("summary")}
          </h2>
          <button class="btn reveal" @click=${()=>this._requestClose("discard")}>
            ${this._t("close")}
          </button>
          <div class="group">
            <span class="bar"></span>
            <div class="stack">${this._renderTitle()} ${this._renderTime()}</div>
          </div>
          ${this._renderLocation()} ${this._renderCalendar()} ${this._renderDescription()}
          ${this._renderMap()} ${this._renderError()} ${this._renderQuestion()}
          ${this._renderFoot()}
        </div>
        ${Wv(i?.arrow)}
      </dialog>
    `}_displayed(e){const t=this._draft,n=this._original;if(!t)return"";const i="title"===e?"summary":e,r=n&&t[i]!==n[i],a=this._params?.display;return!a||r||this._editing===e?t[i]:a[e]??t[i]}_calendar(e){return this._params?.calendars.find(t=>t.id===e)}_lock(e){return this._params?.private?.[e]?Sm():V}_renderTitle(){const e=this._displayed("title");return this._editable?B`<input
      class="cell title"
      ?autofocus=${this._titleFirst}
      .value=${e}
      placeholder=${this._t("summary")}
      aria-label=${this._t("summary")}
      @focus=${()=>this._editing="title"}
      @blur=${()=>"title"===this._editing&&(this._editing=void 0)}
      @input=${e=>this._update({summary:e.target.value})}
      @keydown=${e=>{"Enter"!==e.key||e.isComposing||(e.preventDefault(),this._requestClose("save"))}}
    />`:B`<div class="cell title">${this._lock("title")}${e}</div>
        ${"tentative"===this._params?.entry?.status?B`<span class="badge">${this._t("tentative")}</span>`:V}`}_renderTime(){const e=this._params,t=this._draft,n=function(e,t,n){const i=new Intl.DateTimeFormat(Dt(t),{month:"short",day:"numeric",year:"numeric"}),r=new Intl.DateTimeFormat(Dt(t),{hour:"numeric",minute:"2-digit",hour12:!n}),a=Md(e.start)===Md(e.end);if(e.allDay)return a?i.format(e.start):`${i.format(e.start)} – ${i.format(e.end)}`;const o=0===e.end.getHours()&&0===e.end.getMinutes()?Sd(e.end,-1):e.end;return Md(e.start)===Md(o)?`${i.format(e.start)}  ${r.format(e.start)} – ${r.format(e.end)}`:`${i.format(e.start)} ${r.format(e.start)} – ${i.format(e.end)} ${r.format(e.end)}`}(t.times,e.language,e.hour24),i=Gy(t),r="custom"===t.repeat.kind?this._ruleText(t.repeat.raw):this._ruleText(i);if("time"!==this._editing){const e=B`<div class="when">${n}</div>
        ${t.times.allDay?B`<div class="sub">${this._t("allDay")}</div>`:V}
        ${r?B`<div class="sub">${r}</div>`:this._editable?B`<div class="sub dim">${this._t("repeat")}</div>`:V}`;return this._editable?B`<button
            class="cell time"
            aria-expanded="false"
            @click=${()=>this._editing="time"}
          >
            ${e}
          </button>`:B`<div class="cell time">${e}</div>`}const a=t.times;return B`<div class="cell time open" role="group" aria-label=${n}>
      <label class="row">
        <span class="key">${this._t("allDay")}</span>
        <input
          type="checkbox"
          role="switch"
          class="switch"
          .checked=${a.allDay}
          @change=${e=>this._setAllDay(e.target.checked)}
        />
      </label>
      <div class="row">
        <span class="key">${this._t("start")}</span>
        <span class="fields">
          <input
            type="date"
            aria-label=${this._t("start")}
            .value=${Md(a.start)}
            @change=${e=>this._setStartDate(e.target.value)}
          />
          ${a.allDay?V:B`<input
                  type="time"
                  aria-label=${this._t("start")}
                  .value=${Dd(a.start)}
                  @change=${e=>this._setStartTime(e.target.value)}
                />`}
        </span>
      </div>
      <div class="row">
        <span class="key">${this._t("end")}</span>
        <span class="fields">
          <input
            type="date"
            aria-label=${this._t("end")}
            .value=${Md(a.end)}
            @change=${e=>this._setEndDate(e.target.value)}
          />
          ${a.allDay?V:B`<input
                  type="time"
                  aria-label=${this._t("end")}
                  .value=${Dd(a.end)}
                  @change=${e=>this._setEndTime(e.target.value)}
                />`}
        </span>
      </div>
      <div class="divider"></div>
      ${this._renderRepeat()}
      <button class="done" @click=${()=>this._editing=void 0}>${n}</button>
    </div>`}_renderRepeat(){const e=this._draft,t=e.repeat,n="rule"===t.kind?t.rule.freq:"none"===t.kind?"none":"",i=e=>this._haKey(`ui.components.calendar.event.repeat.freq.${e}`,e),r=B`<label class="row">
      <span class="key">${this._t("repeat")}</span>
      <select
        aria-label=${this._t("repeat")}
        @change=${e=>this._setFrequency(e.target.value)}
      >
        ${"custom"===t.kind?B`<option value="" selected>${this._ruleText(t.raw)}</option>`:V}
        ${ew.map(e=>B`<option value=${e} ?selected=${e===n}>${i(e)}</option>`)}
      </select>
    </label>`;if("rule"!==t.kind)return r;const a=t.rule,o="yearly"===a.freq?void 0:this._haKey(`ui.components.calendar.event.repeat.interval.${a.freq}`,a.freq),s="monthly"===a.freq?jy(e.times.start):[],l=t=>this._ruleText(Hy({freq:"monthly",interval:a.interval,weekdays:[],monthly:t,end:{kind:"never"}},{allDay:e.times.allDay,start:e.times.start}));return B`${r}
      ${o?B`<label class="row">
              <span class="key">${this._t("interval")}</span>
              <span class="fields">
                <input
                  type="number"
                  min="1"
                  class="short"
                  aria-label=${this._t("interval")}
                  .value=${String(a.interval)}
                  @change=${e=>{const t=Math.max(1,Math.round(Number(e.target.value)||1));this._setRule({interval:t})}}
                />
                ${o}
              </span>
            </label>`:V}
      ${"weekly"===a.freq?B`<div class="days" role="group" aria-label=${this._t("repeat")}>
              ${tw.map(e=>B`<button
                    class="day ${a.weekdays.includes(e)?"on":""}"
                    aria-pressed=${a.weekdays.includes(e)?"true":"false"}
                    @click=${()=>this._toggleWeekday(e)}
                  >
                    ${this._haKey(`ui.components.calendar.event.repeat.weekly.weekday.${e.toLowerCase()}`,e)}
                  </button>`)}
            </div>`:V}
      ${s.length?B`<label class="row">
              <span class="key">${this._t("monthly")}</span>
              <select
                aria-label=${this._t("monthly")}
                @change=${e=>this._setRule({monthly:s[Number(e.target.value)]})}
              >
                ${s.map((e,t)=>B`<option value=${t} ?selected=${((e,t)=>JSON.stringify(e)===JSON.stringify(t))(e,a.monthly)}>
                      ${l(e)}
                    </option>`)}
              </select>
            </label>`:V}
      <label class="row">
        <span class="key">${this._t("endLabel")}</span>
        <span class="fields">
          <select
            aria-label=${this._t("endLabel")}
            @change=${e=>this._setEnd(e.target.value)}
          >
            <option value="never" ?selected=${"never"===a.end.kind}>
              ${this._t("never")}
            </option>
            <option value="after" ?selected=${"after"===a.end.kind}>
              ${this._t("after")}
            </option>
            <option value="on" ?selected=${"on"===a.end.kind}>${this._t("on")}</option>
          </select>
          ${"after"===a.end.kind?B`<input
                    type="number"
                    min="1"
                    class="short"
                    aria-label=${this._t("occurrences")}
                    .value=${String(a.end.count)}
                    @change=${e=>this._setRule({end:{kind:"after",count:Math.max(1,Math.round(Number(e.target.value)||1))}})}
                  />
                  ${this._t("occurrences")}`:"on"===a.end.kind?B`<input
                    type="date"
                    aria-label=${this._t("on")}
                    .value=${a.end.until}
                    @change=${e=>{const t=e.target.value;$d(t)&&this._setRule({end:{kind:"on",until:t}})}}
                  />`:V}
        </span>
      </label>`}_renderLocation(){const e=this._displayed("location"),t=!e||this._map||this._params?.private||this._params?.severalPlaces?V:B`<a
            class="pin"
            href=${_y(e)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label=${`${this._t("location")}: ${e}`}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d=${"M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"}></path></svg>
          </a>`;return this._editable?B`<div class="cell with-pin">
      <input
        class="plain"
        .value=${e}
        placeholder=${this._t("location")}
        aria-label=${this._t("location")}
        @focus=${()=>this._editing="location"}
        @blur=${()=>"location"===this._editing&&(this._editing=void 0)}
        @input=${e=>this._update({location:e.target.value})}
      />
      ${t}
    </div>`:e?B`<div class="cell with-pin">
            <span class="text">${this._lock("location")}${this._linked(e)}</span>${t}
          </div>`:V}_renderCalendar(){const e=this._params,t=this._draft,n=this._calendar(t.calendarId),i=e=>B`<span class="dot" style="background:${e}"></span>`;return e.merged&&e.merged.length>1?B`<div class="cell calendar merged">
        ${e.merged.map(e=>B`<span class="one">${i(e.color)}<span>${e.name}</span></span>`)}
      </div>`:!this._editable||e.calendars.length<2?B`<div class="cell calendar">
        ${i(n?.color??e.color??"var(--primary-color)")}
        <span>${n?.name??t.calendarId}</span>
      </div>`:B`<label class="cell calendar popup">
      ${i(n?.color??"var(--primary-color)")}
      <select
        aria-label=${this._t("calendar")}
        @change=${e=>this._update({calendarId:e.target.value})}
      >
        ${e.calendars.map(e=>B`<option value=${e.id} ?selected=${e.id===t.calendarId}>
              ${e.name}
            </option>`)}
      </select>
    </label>`}_renderDescription(){const e=this._displayed("description");if(!this._editable||"description"!==this._editing){if(!e&&!this._editable)return V;const t=function(e){if(!e)return[];const{marked:t,anchors:n,mark:i}=Nm(e),r=ml(t.replace(Em,"\n")).replace(/\n{3,}/g,"\n\n"),a=[];return r.split(i).forEach((e,t)=>{if(t%2==0)return void a.push(...Rm(e));const i=n[Number(e)];if(!i)return;const r=ml(i.words)||ml(i.href);a.push(...Im(i.href,r))}),a.filter(e=>""!==e.text)}(e),n=e=>{e.target?.closest?.("a")||(this._editing="description",this.updateComplete.then(()=>this.renderRoot.querySelector("textarea")?.focus()))};return this._editable?B`<div class="cell notes ${e?"":"dim"}" @click=${n}>
            <button
              class="btn reveal"
              aria-label=${`${this._t("edit")}: ${this._t("description")}`}
            >
              ${this._t("edit")}
            </button>
            <span class="lines">${e?this._pieces(t):this._t("description")}</span>
          </div>`:B`<div class="cell notes">
            <span class="lines">${this._lock("description")}${this._pieces(t)}</span>
          </div>`}return B`<textarea
      class="cell notes"
      rows="3"
      aria-label=${this._t("description")}
      .value=${e}
      placeholder=${this._t("description")}
      @blur=${()=>"description"===this._editing&&(this._editing=void 0)}
      @input=${e=>this._update({description:e.target.value})}
    ></textarea>`}_linked(e){return this._pieces(Rm(e))}_pieces(e){return B`${e.map(e=>"href"in e?B`<a href=${e.href} target="_blank" rel="noopener noreferrer">${e.text}</a>`:e.text)}`}_renderMap(){const e=this._map;if(!e||"location"===this._editing)return V;const t=(e,t)=>B`<a href=${e} target="_blank" rel="noopener noreferrer">${t}</a>`;return B`<div class="map">
      <a
        class="map-link"
        href=${e.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label=${`${this._t("location")}: ${e.label}`}
      >
        ${e.tiles.map(t=>B`<img
              alt=""
              src=${t.url}
              draggable="false"
              style="left:${t.left}px;top:${t.top}px;width:${e.tileSize}px;height:${e.tileSize}px"
            />`)}
        <span class="marker" aria-hidden="true"></span>
      </a>
      <span class="attribution"
        >©
        ${t("https://www.openstreetmap.org/copyright","OpenStreetMap")}${"open-meteo"===e.source?B` · ${t("https://open-meteo.com/","Open-Meteo")}`:V}</span
      >
    </div>`}_renderError(){return this._error?B`<div class="error" role="alert">${this._error}</div>`:V}_renderQuestion(){if("update"===this._phase){const e=!(this._draft?.calendarId!==this._params?.calendarId)||this._seriesMovable;return B`<div class="ask" role="group" aria-label=${this._t("updateRecurring")}>
        <b>${this._t("updateRecurring")}</b>
        ${e?B`<button
                class="btn primary"
                @click=${()=>{this._requestClose("save","THISANDFUTURE")}}
              >
                ${this._t("future")}
              </button>`:V}
        <button class="btn" @click=${()=>{this._requestClose("save","")}}>
          ${this._t("thisEvent")}
        </button>
        <button class="btn" @click=${()=>this._backOut()}>${this._t("cancel")}</button>
      </div>`}return"delete"!==this._phase?V:this._recurring?B`<div class="ask" role="group" aria-label=${this._t("deleteRecurring")}>
      <b>${this._t("deleteRecurring")}</b>
      <button class="btn danger" @click=${()=>{this._delete("")}}>
        ${this._t("thisEvent")}
      </button>
      <button class="btn danger" @click=${()=>{this._delete("THISANDFUTURE")}}>
        ${this._t("future")}
      </button>
      <button class="btn" @click=${()=>this._phase="edit"}>${this._t("cancel")}</button>
    </div>`:B`<div class="ask" role="group" aria-label=${this._t("deletePrompt")}>
        <b>${this._t("deletePrompt")}</b>
        <button class="btn danger" @click=${()=>{this._delete("")}}>
          ${this._t("delete")}
        </button>
        <button class="btn" @click=${()=>this._phase="edit"}>${this._t("cancel")}</button>
      </div>`}_renderFoot(){const e=this._params;if("saving"===this._phase)return B`<div class="foot"><span class="spinner" role="progressbar"></span></div>`;if("edit"!==this._phase)return V;const t="event"===e.mode&&e.canDelete,n=this._editable&&this._dirty;return t||n?B`<div class="foot">
      ${t?B`<button class="btn" @click=${()=>this._phase="delete"}>
              ${this._t("delete")}
            </button>`:V}
      ${n?B`<button class="btn end" @click=${()=>this._requestClose("discard")}>
                ${this._t("cancel")}
              </button>
              <button class="btn primary" @click=${()=>this._requestClose("save")}>
                ${this._t("new"===e.mode?"add":"save")}
              </button>`:V}
    </div>`:V}}function iw(e,t){return e.isNewMonth&&!_a(t.month_separator_width)?{kind:"month",width:t.month_separator_width,color:t.month_separator_color}:e.isNewWeek&&!_a(t.week_separator_width)?{kind:"week",width:t.week_separator_width,color:kp(t),ink:$p(t)}:_a(t.day_separator_width)?null:{kind:"day",width:t.day_separator_width,color:t.day_separator_color}}function rw(e,t,n,i,r,a=!1,o){const s=ca(t,"day_header_gap"),l=oo(t.day_spacing),d=function(e){return e.map((t,n)=>{const i=n>0?e[n-1]:void 0;return{isNewWeek:!i||t.weekNumber!==i.weekNumber,isNewMonth:Boolean(i&&t.monthNumber!==i.monthNumber)}})}(e),c=function(e,t,n){const i=t.map((e,t)=>e.isNewWeek&&!(0===t&&!n.show_current_week_number));return null!==n.show_week_numbers&&i.some(Boolean)?e.map((e,t)=>function(e,t,n){return xp(e,t,n+1)}(e.weekNumber,i[t],t)):e.map(()=>V)}(e,d,t),u=d.map((e,n)=>({separator:iw(e,t),index:n})).filter(({separator:e,index:t})=>null!==e&&t>0).map(({separator:e,index:t})=>function(e,t,n){return B`
    <div
      class="column-separator column-separator-${e.kind}"
      style=${sm({gridColumn:String(t+1),gridRow:"day"===e.kind?"2":"1 / -1",width:e.width,backgroundColor:Fe(e.color),color:e.ink,marginInlineStart:`calc(-0.5 * (${n} + ${e.width}))`})}
    ></div>
  `}(e,t,l));return B`
    <div
      class="column-grid"
      style=${sm({gridTemplateColumns:`repeat(${e.length}, minmax(0, 1fr))`,columnGap:l,"--calendar-card-column-header-gap":s})}
      .calendarCardDaySlot=${Uh}
    >
      ${c}
      ${e.map((e,s)=>function(e,t,n,i,r,a,o=!1,s){const l=new Date(e.timestamp),{isToday:d,isTomorrow:c,isPast:u}=vp(e.timestamp),h=bl(l,a),m=gp(l,t,r),p=o||s?jh(e.timestamp):void 0,f=ca(t,"day_header_separator_width"),g=ca(t,"day_header_separator_color"),v=_a(f)?null:{width:f,color:g},_=df(e.events,t,n);return B`
    <div
      class=${rm({"day-column":!0,today:d,tomorrow:c,"future-day":!d,"past-day":u,weekend:h})}
      style=${sm({gridColumn:String(i+1),gridRow:"2"})}
      .calendarCardDaySlot=${Gh(e.timestamp)}
    >
      ${bp(l,t,n,d,m,v,a,p,s&&{label:s.label,timestamp:e.timestamp})}
      <div
        class=${ya(t)?"column-events with-event-gap":"column-events"}
      >
        ${vm(e.events,(e,t)=>`${e._entityId}-${e.summary}-${t}`,(i,s)=>function(e,t,n,i,r,a,o,s=!1,l,d=!1){const c=uf(e,i,r,o),u=d?cf(c):c,h=zh(e,u.entityAccentColor,s),m=0===n,p=n===t.events.length-1,f={event:!0,"event-first":m,"event-middle":!m&&!p,"event-last":p,"past-event":u.isPastEvent,"event-interactive":void 0!==h,"event-now":u.isNow,"search-ring":!0===e._searchRing,[nf]:u.textScaled};return B`
    <div
      class=${rm(f)}
      style="--calendar-card-event-accent-bar-color: ${u.entityAccentColor}; background-color: ${u.entityAccentBackgroundColor};${Rt({...u.accentTextProperties,...u.textScaleProperties})}"
      role=${h?"button":V}
      tabindex=${h?"0":V}
      aria-describedby=${h&&l?l:V}
      .calendarCardEventTap=${h}
      .calendarCardDaySlot=${e._isEmptyDay?void 0:qh}
    >
      ${zp()}
      ${Np(e,i,u.contentParts,{weatherForecasts:a,weatherPlacement:"row",progressPlacement:"row",countdownPlacement:"text",hass:o,links:mf(i),timePosition:Yt(i.time_position)})}
    </div>
  `}(i,e,s,t,n,r,a,o,p,_.has(s)))}
      </div>
    </div>
  `}(e,t,n,s,i,r,a,o))}
      ${u}
    </div>
  `}function aw(e,t,n){return"grid"===e?function(e,t){if(0===e.length)return!1;if(zf(e,ma(t,"allday_band_max_rows")).length>0)return!0;const n=Vd(ma(t,"start_time"),ma(t,"end_time"));return e.some(e=>bf(e).timed.some(e=>Zd(e.startMin,e.endMin,n)))}(t,n):t.some(e=>e.events.some(e=>!e._isEmptyDay))}function ow(e,t,n,i,r=!1,a=!1,o="list",s=!1,l=!1,d=V,c={},u=!1,h=!1,m="idle",p=!1,f,g=!1){const v=s||l,_=s&&!u,y=s&&u&&f?B`<button
          class="card-tap-control"
          type="button"
          aria-label=${f.label}
          aria-expanded=${void 0===f.expanded?V:String(f.expanded)}
          @click=${e=>{e.stopPropagation(),f.activate(e.currentTarget)}}
        ></button>`:V,w=v?B`<ha-ripple></ha-ripple>`:V,b=y===V?w:B`${y}${w}`,x=Boolean(t||a)?B`<h1 class="card-header">${t}</h1>`:B`<div class="card-header-placeholder"></div>`,k=function(e,t){if(!Lg(e))return;const n=!0===e.labeled;return B`${function(e,t){if(!function(e){return Boolean(wg(e).length>0||e.viewSwitcher||e.reset||e.refresh||e.search)}(e))return V;const n=0===wg(e).length&&!e.viewSwitcher&&!e.refresh&&!e.search;return B`<div class="card-toolbar toolbar-actions">
    <div class="toolbar-start">${function(e){const t=e.startFold;return t&&0!==t.plan.overflow.length?[...t.plan.visible.map(t=>bg(e,t)),xg(e,t)]:wg(e).map(t=>bg(e,t))}(e)}</div>
    ${e.viewSwitcher?Tg(e.viewSwitcher,t):V}
    <div class="toolbar-end">
      ${e.reset?function(e,t){const n=e.active?void 0:e.confirmation,i=["toolbar-button","reset-button",t?"alone":"",n?"reset-done":"",e.active||"showing"===n?"":"unavailable"].filter(e=>""!==e).join(" ");return B`<button
    type="button"
    class=${i}
    aria-disabled=${e.active?V:"true"}
    aria-label=${e.label??ug}
    title=${e.label??V}
    @pointerdown=${fg}
    @click=${t=>{t.stopPropagation(),e.active&&e.onActivate()}}
  >
    <svg class="toolbar-button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d=${n?_m:"M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z"}></path>
    </svg>
  </button>`}(e.reset,n):V}
      ${e.refresh?function(e){const t=["toolbar-button","refresh-button",kg[e.phase],e.unasked?"unasked":""].filter(e=>""!==e).join(" ");return B`<button
    type="button"
    class=${t}
    aria-label=${e.label??cg}
    title=${e.label??V}
    @pointerdown=${fg}
    @click=${t=>{t.stopPropagation(),e.onActivate()}}
  >
    <svg class="toolbar-button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d=${$g[e.phase]}></path>
    </svg>
  </button>`}(e.refresh):V}
      ${e.search?(i=e.search,B`<button
    type="button"
    class="toolbar-button search-button"
    aria-haspopup="dialog"
    aria-label=${i.label??"Search"}
    title=${i.label??V}
    @pointerdown=${fg}
    @click=${e=>{e.stopPropagation(),i.onActivate(e.currentTarget,yg(e))}}
  >
    <svg class="toolbar-button-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d=${wm}></path>
    </svg>
  </button>`):V}
    </div>
  </div>`;var i}(e,n)}${Pg(e,t)}`}(c,x),$=k?"header-container has-toolbar":"header-container",S=h?"content-container page-pending":"content-container",T=["calendar-card-pro",Wa(o),v?"card-interactive":"",p?"swipe-paging":"",g?"weather-stale":""].filter(e=>""!==e).join(" ");return B`
    <ha-card
      class=${T}
      style=${sm(e)}
      tabindex=${s&&y===V?"0":V}
      role=${_?"button":V}
      aria-busy=${r?"true":"false"}
      @keydown=${i.keyDown}
      @keyup=${i.keyUp}
      @click=${i.click}
      @pointerdown=${i.pointerDown}
      @pointermove=${i.pointerMove}
      @pointerup=${i.pointerUp}
      @pointercancel=${i.pointerCancel}
      @pointerleave=${i.pointerLeave}
      @lostpointercapture=${i.lostPointerCapture}
      @touchmove=${i.touchMove??V}
      @touchend=${i.touchEnd??V}
      @selectstart=${i.nativeDrag??V}
      @dragstart=${i.nativeDrag??V}
    >
      ${b}
      ${c.refresh?V:"done"===m||"failed"===m?(M=m,B`<div
    class=${`loading-indicator ${kg[M]}`}
    aria-hidden="true"
  >
    <svg class="loading-indicator-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d=${$g[M]}></path>
    </svg>
  </div>`):r||"turning"===m?B`
                  <div
                    class=${"turning"===m?"loading-indicator":"loading-indicator unasked"}
                    role="status"
                    aria-live="polite"
                    title="Loading"
                  >
                    <div class="spinner" aria-hidden="true"></div>
                  </div>
                `:V}

      <!-- Title is always rendered with the same structure, even if empty.
           A templated title holds the h1 open from first paint, so the header
           does not gain 16px of margin the moment its value arrives. That is a
           claim about the *pending* window only: once a value is in hand the
           header behaves exactly as it would for a static title of the same
           text, so a template resolving to an empty string collapses back to
           the zero-height placeholder rather than leaving an empty heading
           taking up space forever. -->
      <div class=${$}>
        ${k??x}
      </div>

      <!-- Content container is always present -->
      <div class=${S}>${n}</div>
      ${d}
    </ha-card>
  `;var M}function sw(e,t,n){const i=Xs(t),r=Wm(t,n);return"loading"===e?B`
      <div class="calendar-card">
        <div class="loading">${Bm(i.loading,r)}</div>
      </div>
    `:B`
    <div class="calendar-card">
      <div class="error">${Bm(i.error,r)}</div>
    </div>
  `}function lw(e,t,n,i="day"){if("day"===i)return{borderTopWidth:e,borderTopColor:Fe(t),borderTopStyle:"solid",marginTop:"0px",marginBottom:n.day_spacing};let r=De.SEPARATOR_SPACING.WEEK;"month"===i&&(r=De.SEPARATOR_SPACING.MONTH);const a=wa(n.day_spacing,r);return{borderTopWidth:e,borderTopColor:Fe(t),borderTopStyle:"solid",marginTop:a,marginBottom:a}}function dw(e,t,n,i,r=!1,a="day",o){if(_a(e)||r)return V;const s=lw(e,t,i,a);return o&&(s.color=o),B`<div class="${n}" style=${sm(s)}></div>`}function cw(e,t,n=!1){if(void 0===t||_a(e.month_separator_width))return dw(e.month_separator_width,e.month_separator_color,"month-separator",e,!1,"month");const{marginTop:i,marginBottom:r}=lw(e.month_separator_width,e.month_separator_color,e,"month");return B`<div
    class="month-separator month-separator-labeled"
    style=${sm({marginTop:n?"0px":i,marginBottom:r,"--separator-border-width":e.month_separator_width,"--separator-border-color":Fe(e.month_separator_color)})}
  >
    ${t}
  </div>`}function uw(e,t=!1){return dw(e.week_separator_width,kp(e),"week-separator",e,t,"week",$p(e))}function hw(e,t,n,i,r,a=!1,o,s){return B`
    ${e.map((l,d)=>{const c=d>0?e[d-1]:void 0,u=l.weekNumber??null;let h=!1;h=!c||l.weekNumber!==c.weekNumber;const m=c&&l.monthNumber!==c.monthNumber,p=0===d,f={isNewWeek:h,isNewMonth:Boolean(m)};let g=V;const v=(m||p&&!function(e,t){if(!e)return!1;const n=new Date(t);return n.getFullYear()===e.getFullYear()&&n.getMonth()===e.getMonth()}(s,l.timestamp))&&!0===t.month_separator_label&&!_a(t.month_separator_width)?function(e,t,n,i){const r=Bm(function(e,t){return hh(e,t,mh(e,t,"short")||!mh(e,t,"long")?"short":"long")}(e,n),Wm(n,i)),a=sm({color:Fe(t.month_separator_label_color||t.month_separator_color)});return B`<span class="month-separator-label" lang=${n} style=${a}>${r}</span>
    <div class="month-separator-line"></div>`}(new Date(l.timestamp),t,n,r):void 0;return!m||_a(t.month_separator_width)||h&&null!==t.show_week_numbers?h&&(g=p&&null!==t.show_week_numbers&&!t.show_current_week_number?v?cw(t,v,!0):uw(t,p):null!==t.show_week_numbers?function(e,t,n,i=!1,r){if(null===e)return V;const a=t?De.SEPARATOR_SPACING.MONTH:De.SEPARATOR_SPACING.WEEK,o={marginTop:i?"0px":wa(n.day_spacing,a/2-1),marginBottom:wa(n.day_spacing,a/2)},s={};let l=!1;if(i&&void 0===r)s["--separator-display"]="none";else if(!t&&!i||_a(n.month_separator_width))if(_a(n.week_separator_width))s["--separator-display"]="none";else{s["--separator-border-width"]=n.week_separator_width,s["--separator-border-color"]=Fe(kp(n));const e=$p(n);e&&(s.color=e),s["--separator-display"]="block"}else s["--separator-border-width"]=n.month_separator_width,s["--separator-border-color"]=Fe(n.month_separator_color),s["--separator-display"]="block",l=void 0!==r;const d=l?B`<div class="month-separator-labeled">${r}</div>`:B`<div class="separator-line"></div>`;return B`
    <table class="week-row-table" style=${sm(o)}>
      <tr>
        <td class="week-number-cell">
          <div class="week-number">${e}</div>
        </td>
        <td class="separator-cell" style=${sm(s)}>
          ${d}
        </td>
      </tr>
    </table>
  `}(u,Boolean(m),t,p,v):p&&v?cw(t,v,!0):uw(t,p)):g=cw(t,v),B`
        ${g}
        ${function(e,t,n,i,r,a,o,s=!1,l){const{isToday:d,isTomorrow:c,isPast:u}=vp(e.timestamp),h=bl(new Date(e.timestamp),o);let m=V;const p=r?.isNewMonth||!1,f=r?.isNewWeek||!1,g=p&&!_a(t.month_separator_width),v=f&&(null!==t.show_week_numbers||!_a(t.week_separator_width)),_=s||l?jh(e.timestamp):void 0,y=ya(t),w=df(e.events,t,n),b=t.day_separator_width,x=t.day_separator_color;if(i&&!_a(b)&&!g&&!v){const e=lw(b,x,t,"day");m=B`<div class="separator" style=${sm(e)}></div>`}return B`
    ${m}
    <table
      class=${rm({"day-table":!0,today:d,tomorrow:c,"future-day":!d,"past-day":u,weekend:h,"with-event-gap":y})}
      .calendarCardDaySlot=${Gh(e.timestamp)}
    >
      ${vm(e.events,(e,t)=>`${e._entityId}-${e.summary}-${t}`,(i,r)=>{const c=function(e,t,n,i,r,a,o,s,l=!1,d,c,u=!1){const h=uf(e,i,r,s),m=u?cf(h):h,p=zh(e,m.entityAccentColor,l),f=new Date(t.timestamp),g=bl(f,s),v=0===n,_=n===t.events.length-1,y=!v&&!_,w=ya(i)?2*t.events.length-1:t.events.length,b={event:!0,"event-first":v,"event-middle":y,"event-last":_,"past-event":m.isPastEvent,"event-tappable":void 0!==p,"event-now":m.isNow,"search-ring":!0===e._searchRing,[nf]:m.textScaled};return B`
    <tr>
      ${0===n?B`
            <td
              class="date-column ${g?"weekend":""}"
              rowspan="${w}"
              style="position: relative;"
              id=${c?V:d??V}
            >
              ${function(e,t,n,i){return n?B`<div
    class="day-add-button"
    role="button"
    tabindex="0"
    aria-label=${n.label}
    aria-describedby=${i??V}
    .calendarCardDayAdd=${t}
  >
    <div class="day-add-date" id=${i??V}>${e}</div>
  </div>`:e}(function(e,t,n,i,r,a){return Dp(e,t,n,i,gp(e,t,r),a)}(f,i,r,a,o,s),t.timestamp,c,d)}
              ${jp(i,a)}
            </td>
          `:""}
      <td
        class=${rm(b)}
        .calendarCardDaySlot=${e._isEmptyDay?void 0:qh}
        style="--calendar-card-event-accent-bar-color: ${m.entityAccentColor}; background-color: ${m.entityAccentBackgroundColor};${Rt({...m.accentTextProperties,...m.textScaleProperties})}"
      >
        ${zp()}
        ${function(e,t,n){return t?B`<div
    class="event-button event-interactive"
    role="button"
    tabindex="0"
    aria-describedby=${n??V}
    .calendarCardEventTap=${t}
  >
    ${e}
  </div>`:e}(Np(e,i,m.contentParts,{weatherForecasts:o,links:mf(i),timePosition:Yt(i.time_position)}),p,d)}
      </td>
    </tr>
  `}(i,e,r,t,n,d,a,o,s,_,l,w.has(r));return y&&r>0?B`${Ip()}${c}`:c})}
    </table>
  `}(l,t,n,c,f,i,r,a,o)}
      `})}
  `}nw.styles=a`
    ${Bv}
    ${qv}
    .panel > * {
      flex-shrink: 0;
    }
    .title {
      font-size: 21px;
      font-weight: 500;
      padding: 12px 14px;
    }
    .title::placeholder,
    input::placeholder,
    textarea::placeholder,
    .dim {
      color: var(--dim);
    }
    .badge {
      align-self: flex-start;
      padding: 1px 10px;
      border-radius: 10px;
      border: 1px solid var(--pop-edge);
      font-size: 12px;
      color: var(--dim);
    }
    .when {
      font-weight: 600;
      font-size: 16px;
      white-space: pre-wrap;
    }
    .sub {
      margin-top: 5px;
    }
    .open {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .row {
      display: grid;
      grid-template-columns: 76px minmax(0, 1fr);
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }
    .key {
      color: var(--dim);
      text-align: end;
    }
    .fields {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px;
    }
    .open input:not(.switch),
    .open select,
    .calendar select {
      height: 28px;
      padding: 0 8px;
      border: 0;
      border-radius: 6px;
      background: var(--button);
      color: var(--text);
      font: inherit;
      font-size: 14px;
      font-variant-numeric: tabular-nums;
      min-width: 0;
    }
    option {
      background-color: Canvas;
      color: CanvasText;
    }
    .short {
      width: 56px;
    }
    .switch {
      justify-self: start;
      appearance: none;
      width: 34px;
      height: 20px;
      margin: 0;
      border-radius: 10px;
      background: var(--button);
      position: relative;
      cursor: pointer;
    }
    .switch::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      transition: left 0.15s;
    }
    .switch:checked {
      background: #34c759;
    }
    .switch:checked::after {
      left: 16px;
    }
    .divider {
      height: 1px;
      background: var(--pop-edge);
    }
    .days {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      padding-inline-start: 84px;
    }
    .day {
      min-width: 32px;
      height: 26px;
      padding: 0 6px;
      border: 0;
      border-radius: 13px;
      background: var(--button);
      color: var(--text);
      font: inherit;
      font-size: 12px;
      cursor: pointer;
    }
    .day.on {
      background: var(--accent);
      color: #fff;
    }
    .done {
      align-self: flex-end;
      border: 0;
      background: transparent;
      color: var(--accent);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    .with-pin {
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .with-pin .text,
    .plain {
      flex: 1;
      min-width: 0;
    }
    .plain {
      padding: 0;
      border: 0;
      background: transparent;
      color: inherit;
      font: inherit;
    }
    .pin {
      flex: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 26px;
      border-radius: 7px;
      background: var(--button);
      color: var(--text);
    }
    .pin svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    .private-lock {
      width: 1em;
      height: 1em;
      margin-inline-end: 0.3em;
      vertical-align: -0.125em;
      fill: currentColor;
    }
    .calendar {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .calendar select {
      flex: 1;
      background: transparent;
      padding: 0;
    }
    .calendar.merged {
      flex-wrap: wrap;
      gap: 6px 16px;
    }
    .calendar .one {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .dot {
      flex: none;
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    .notes {
      min-height: 2.6em;
      resize: vertical;
    }
    .lines {
      white-space: pre-line;
    }
    a {
      color: var(--accent);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .map {
      position: relative;
      display: block;
      height: 120px;
      border-radius: 11px;
      overflow: hidden;
      background: var(--cell);
    }
    .map img {
      position: absolute;
      max-width: none;
      user-select: none;
    }
    .dark .map img {
      filter: invert(1) hue-rotate(180deg) brightness(0.9) contrast(0.9) saturate(0.6);
    }
    .marker {
      position: absolute;
      left: calc(50% - 12px);
      top: calc(50% - 28px);
      width: 24px;
      height: 24px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      background: #ff453a;
      border: 2px solid #fff;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }
    .map-link {
      position: absolute;
      inset: 0;
      display: block;
    }
    .attribution {
      position: absolute;
      right: 6px;
      bottom: 4px;
      padding: 0 4px;
      border-radius: 3px;
      font-size: 9px;
      color: #333;
      background: rgba(255, 255, 255, 0.7);
    }
    .attribution a {
      color: inherit;
    }
    .error {
      padding: 8px 12px;
      border-radius: 9px;
      font-size: 13px;
      color: var(--danger);
      background: color-mix(in srgb, var(--danger) 12%, transparent);
    }
    @supports not (color: color-mix(in srgb, red, blue)) {
      .error {
        background: var(--cell);
      }
    }
    .ask {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 8px 4px 2px;
      text-align: center;
    }
    .ask b {
      margin-bottom: 4px;
      font-size: 15px;
    }
    .foot {
      position: sticky;
      bottom: calc(-1 * var(--panel-end));
      display: flex;
      align-items: center;
      gap: 8px;
      margin: -3px -14px calc(-1 * var(--panel-end));
      padding: 6px 14px var(--panel-end);
    }
    .scrolls .foot {
      background: var(--pop-bg);
      -webkit-backdrop-filter: blur(28px) saturate(170%);
      backdrop-filter: blur(28px) saturate(170%);
      box-shadow: inset 0 0.5px 0 var(--pop-edge);
    }
    .foot .end {
      margin-inline-start: auto;
    }
    .btn {
      height: 28px;
      padding: 0 14px;
      border: 0;
      border-radius: 7px;
      background: var(--button);
      color: var(--text);
      font: inherit;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }
    .ask .btn {
      width: 100%;
      height: 30px;
    }
    .btn.primary {
      background: var(--accent);
      color: #fff;
    }
    .btn.danger {
      color: var(--danger);
    }
    @media (prefers-reduced-motion: reduce) {
      .switch::after {
        transition: none;
      }
    }
  `,Jy([pe()],nw.prototype,"_params"),Jy([pe()],nw.prototype,"_draft"),Jy([pe()],nw.prototype,"_editing"),Jy([pe()],nw.prototype,"_phase"),Jy([pe()],nw.prototype,"_error"),Jy([pe()],nw.prototype,"_map"),customElements.get(Xy)||customElements.define(Xy,nw);var mw=Object.defineProperty,pw=(e,t,n,i)=>{for(var r,a=void 0,o=e.length-1;o>=0;o--)(r=e[o])&&(a=r(t,n,a)||a);return a&&mw(t,n,a),a};const fw="calendar-card-pro-search";function gw(e){return Math.min(240,Math.max(0,e))}const vw={search:["ui.common.search","Search"],close:["ui.common.close","Close"],noMatch:["ui.components.combo-box.no_match","No matching items found"],noResults:["ui.components.combo-box.no_results","No results for {term}"],count:["ui.components.combo-box.result_count","{count} results for {term}"],failed:["ui.components.calendar.event_retrieval_error","Could not retrieve events for calendars"]};class _w extends Xv{constructor(){super(...arguments),this._term="",this._status="",this._version=0,this._logName="Search",this._panelWidth=440,this._onCancel=e=>{e.preventDefault(),this._close()},this._onPointerDown=e=>{this._backdropDown=e.target===this._dialog},this._onClick=e=>{this._isBackdropPress(e)&&this._close()}}get _anchor(){return this._params?.anchor}_clear(){clearTimeout(this._announceTimer),this._announceTimer=void 0;const e=this._detach;this._detach=void 0,this._params=void 0,this._found=void 0,this._term="",this._active=void 0,this._status="",this._hang=void 0,this._foot=void 0,e?.()}showDialog(e){this._closing&&this._closeNow(),this._detach?.(),this._params=e,this._onClosed=e.closed,this._found=void 0,this._term="",this._active=void 0,this._status="",this._place=void 0,this._hang=void 0,this._foot=void 0,this._maxHeight=void 0,this._detach=e.source.attach({changed:()=>this._changed(),close:()=>this._close()}),this._wantOpen=!0,this.requestUpdate()}closeDialog(){return this._close(),!0}_close(){!this._closing&&this._params&&this._finish()}_placeBeside(e,t){this._hang=function(e,t,n,i){if(!e){const{left:e}=zv(void 0,240,{width:n,height:i.bottom},440),t=i.bottom-i.top-24;return{opened:{left:e,top:i.top+Av},keeps:gw(t)}}const r=e.rect??{left:e.x,right:e.x,top:e.y,bottom:e.y},{left:a,at:o}=Iv(r,440,n,t),s=i.bottom-r.bottom-Pv-Av,l=r.top-Pv-Av-i.top;if(s<240&&l>s){const e=gw(l);return{opened:{left:a,top:r.top-Pv-e,arrow:{side:"bottom",at:o}},keeps:e}}return{opened:{left:a,top:r.bottom+Pv,arrow:{side:"top",at:o}},keeps:gw(s)}}(this._params?.anchor,this._params?.hang,t,e),this._keepBeside(e)}_keepBeside(e){const t=this._hang;if(!t)return;const{place:n,maxHeight:i,bottom:r}=function(e,t,n){const{opened:i,keeps:r}=e,{left:a,top:o,arrow:s}=Fv(i,r,r,t);if("bottom"===s?.side){const e=Math.min(o+r,t.bottom-Av);return{place:{left:a,top:e,arrow:s},maxHeight:Math.max(0,e-t.top-Av),bottom:n-e}}return{place:{left:a,top:o,arrow:s},maxHeight:Math.max(0,t.bottom-Av-o)}}(t,e,window.innerHeight);Rv(n,this._place)||(this._place=n),this._maxHeight=i,this._foot=r}_changed(){this._version+=1,this._term.trim()&&this._scheduleAnnounce()}get _results(){const e=this._params?.source;if(!e)return;const t=this._found;if(t&&t.term===this._term&&t.version===this._version)return t.results;const n=e.find(this._term);return this._found={term:this._term,version:this._version,results:n},n}_drawnRows(){return(this._results?.groups??[]).flatMap(e=>e.hits.map(e=>e.row))}_onInput(e){this._term=e.target.value,this._active=void 0,this._scheduleAnnounce()}_onKeyDown(e){if(e.isComposing)return;const t=this._drawnRows(),n=t.findIndex(e=>e.id===this._active);switch(e.key){case"ArrowDown":case"ArrowUp":{if(e.preventDefault(),0===t.length)return;const i="ArrowDown"===e.key?1:-1,r=n<0?i>0?0:t.length-1:(n+i+t.length)%t.length;return this._active=t[r].id,void this.updateComplete.then(()=>this.renderRoot.querySelector('[role="option"][aria-selected="true"]')?.scrollIntoView?.({block:"nearest"}))}case"Enter":return void(n>=0&&(e.preventDefault(),this._pick(t[n].id)));case"Escape":return e.preventDefault(),void this._close()}}_pick(e){const t=this._params?.source;t&&!this._closing&&(this._close(),t.pick(e))}_scheduleAnnounce(){clearTimeout(this._announceTimer),this._announceTimer=setTimeout(()=>{this._announceTimer=void 0,this._status=this._statusText()},500)}_statusText(){const e=this._term.trim();if(!e)return"";const t=`‘${e}’`,n=this._results?.total??0;return 0===n?this._localized(vw.noResults[0],{term:t})??this._localized(vw.noMatch[0])??vw.noResults[1].replace("{term}",t):this._localized(vw.count[0],{count:n,term:t})??`${n} ${1===n?"result":"results"} for ${t}`}_localized(e,t){const n=t?this.hass?.localize?.(e,t):this.hass?.localize?.(e);return n&&n!==e?n:void 0}_named(e){return this._localized(vw[e][0])??vw[e][1]}render(){const e=this._params;if(!e)return B`<dialog></dialog>`;const t=this._place,n=this._foot,i=t&&void 0!==n?`left:${t.left}px;top:auto;bottom:${n}px;`:jv(this._sheet,t,this._lift),r=[`--past-opacity:${e.pastOpacity}`,void 0!==this._maxHeight?`max-height:${this._maxHeight}px`:"",t?.arrow?`transform-origin:${Nv(t.arrow)}`:""].filter(e=>""!==e).join(";"),a=this._results,o=this._localized(vw.search[0]),s=this._drawnRows(),l=s.findIndex(e=>e.id===this._active),d=this._term.trim();return B`
      <dialog
        class="${e.dark?"dark":"light"} ${this._sheet?"sheet":"popover"}${this._lift>0?" lifted":""}"
        ?data-placed=${this._sheet||!!t}
        style=${i}
        aria-label=${this._named("search")}
        @cancel=${this._onCancel}
        @pointerdown=${this._onPointerDown}
        @click=${this._onClick}
        @keydown=${this._keepKeys}
      >
        <div class="panel search" style=${r} ?inert=${this._closing}>
          ${Hv(this._sheet)}
          <div class="cell field">
            <span class="field-mark" aria-hidden="true">
              ${e.source.loading?B`<span class="field-wait">
                      ${this._renderMagnifier()}
                      <span class="field-ring"><span class="spinner"></span></span>
                    </span>`:this._renderMagnifier()}
            </span>
            <input
              type="search"
              class="field-input"
              role="combobox"
              autofocus
              autocomplete="off"
              autocapitalize="off"
              spellcheck="false"
              enterkeyhint="search"
              aria-autocomplete="list"
              aria-controls="search-results"
              aria-expanded=${s.length>0?"true":"false"}
              aria-activedescendant=${l>=0?`search-option-${l}`:V}
              aria-label=${this._named("search")}
              placeholder=${o??V}
              .value=${this._term}
              @input=${this._onInput}
              @keydown=${this._onKeyDown}
            />
            <button
              type="button"
              class="field-close"
              aria-label=${this._named("close")}
              title=${this._localized(vw.close[0])??V}
              @click=${()=>this._close()}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d=${ym}></path>
              </svg>
            </button>
          </div>
          <div class="visually-hidden" role="status">${this._status}</div>
          ${this._renderResults(a,s,l)}
          ${d&&0===a?.total&&!e.source.loading?this._renderNote(this._localized(vw.noMatch[0])):V}
          ${this._renderFailed(e.source.failed)}
        </div>
        ${Wv(t?.arrow)}
      </dialog>
    `}_renderMagnifier(){return B`<svg class="field-icon" viewBox="0 0 24 24" focusable="false">
      <path d=${wm}></path>
    </svg>`}_renderResults(e,t,n){const i=e?.groups??[],r=i.findIndex(e=>e.past);let a=0;return B`<div
      class=${t.length>0?"results":"results empty"}
      id="search-results"
      role="listbox"
      lang=${this._params?.language??V}
      aria-label=${this._named("search")}
    >
      ${i.map((e,t)=>{const i=["month",e.past?"past":"",t===r&&r>0?"past-start":""].filter(e=>""!==e).join(" "),o=a;return a+=e.hits.length,B`<div class=${i} role="group" aria-labelledby="search-month-${t}">
          <div class="month-name" id="search-month-${t}" role="presentation">${e.label}</div>
          ${e.hits.map((e,t)=>this._renderHit(e,o+t,o+t===n))}
        </div>`})}
    </div>`}_renderHit(e,t,n){const i=e.row,r=[i.title,i.dayText,i.timeText,i.calendar].filter(e=>""!==e.trim()).join(", ");return B`<div
      class="cell group result"
      id="search-option-${t}"
      role="option"
      aria-selected=${n?"true":"false"}
      aria-label=${r}
      style="--event-color:${i.color}"
      @click=${()=>this._pick(i.id)}
    >
      <span class="bar"></span>
      <span class="lines">
        <span class="result-title"
          >${i.privateTitle?B`${Sm()}${yw(i.title,e.title)}`:yw(i.title,e.title)}</span
        >
        <span class="result-detail"
          >${i.dayText} ·
          ${i.timeText}${i.location?B` · ${yw(i.location,e.location)}`:V}</span
        >
      </span>
    </div>`}_renderNote(e,t=!1){return e?B`<div class=${t?"note error":"note"}>${e}</div>`:V}_renderFailed(e){if(0===e.length)return V;const t=this._localized(vw.failed[0]);return t?this._renderNote(`${t}: ${e.join(", ")}`,!0):V}}function yw(e,t){if(!t)return e;const[n,i]=t;return B`${e.slice(0,n)}<mark>${e.slice(n,i)}</mark>${e.slice(i)}`}_w.styles=a`
    ${Bv}
    ${qv}
    .light {
      --mark: rgba(255, 204, 0, 0.45);
    }
    .dark {
      --mark: rgba(255, 214, 10, 0.34);
    }
    .panel.search {
      width: 440px;
      overflow: hidden;
      gap: 8px;
    }
    .sheet .panel.search {
      width: 100%;
      height: 85vh;
    }
    .field {
      flex: none;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 6px 6px 12px;
    }
    .field:focus-within {
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 55%, transparent);
    }
    @supports not (color: color-mix(in srgb, red, blue)) {
      .field:focus-within {
        box-shadow: 0 0 0 2px var(--accent);
      }
    }
    .field-mark,
    .field-wait {
      flex: none;
      display: grid;
      place-items: center;
      width: 20px;
      height: 20px;
    }
    .field-wait > * {
      grid-area: 1 / 1;
    }
    .field-icon {
      width: 20px;
      height: 20px;
      fill: var(--dim);
    }
    .field-wait > .field-icon {
      animation: field-wait-hide 0s linear 1s both;
    }
    .field-ring {
      display: flex;
      animation: field-wait-show 0s linear 1s both;
    }
    .field-ring .spinner {
      box-sizing: border-box;
      width: 16px;
      height: 16px;
    }
    @keyframes field-wait-hide {
      to {
        opacity: 0;
      }
    }
    @keyframes field-wait-show {
      from {
        opacity: 0;
      }
    }
    .field-input {
      flex: 1;
      min-width: 0;
      height: 32px;
      padding: 0;
      border: 0;
      background: transparent;
      color: var(--text);
      font: inherit;
      font-size: 16px;
      appearance: none;
    }
    .field-input:focus-visible {
      outline: none;
    }
    .field-input::-webkit-search-cancel-button,
    .field-input::-webkit-search-decoration {
      appearance: none;
    }
    .field-input::placeholder {
      color: var(--dim);
    }
    .field-close {
      flex: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: var(--button);
      color: var(--text);
      cursor: pointer;
    }
    .field-close svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
    .results {
      flex: 0 1 auto;
      min-height: 0;
      overflow-y: auto;
      overscroll-behavior: contain;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .results.empty {
      display: none;
    }
    .month {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .month.past-start {
      margin-top: 4px;
      padding-top: 10px;
      border-top: 1px solid var(--pop-edge);
    }
    .month-name {
      padding: 2px 4px 0;
      font-size: 12px;
      font-weight: 600;
      color: var(--dim);
    }
    .result {
      padding: 8px 12px 8px 10px;
      cursor: pointer;
    }
    .result[aria-selected='true'] {
      background: color-mix(in srgb, var(--accent) 18%, var(--cell));
    }
    @supports not (color: color-mix(in srgb, red, blue)) {
      .result[aria-selected='true'] {
        background: var(--cell);
        box-shadow: inset 0 0 0 2px var(--accent);
      }
    }
    .past .result > * {
      opacity: var(--past-opacity, 0.6);
    }
    .lines {
      display: flex;
      flex-direction: column;
      min-width: 0;
      gap: 2px;
    }
    .result-title,
    .result-detail {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .result-title {
      font-weight: 500;
    }
    .private-lock {
      width: 1em;
      height: 1em;
      margin-inline-end: 4px;
      vertical-align: -0.125em;
      fill: currentColor;
    }
    .result-detail {
      font-size: 13px;
      color: var(--dim);
    }
    mark {
      border-radius: 3px;
      background: var(--mark);
      color: inherit;
    }
    .note {
      padding: 2px 4px;
      font-size: 13px;
      color: var(--dim);
    }
    .note.error {
      color: var(--danger);
    }
  `,pw([pe()],_w.prototype,"_params"),pw([pe()],_w.prototype,"_term"),pw([pe()],_w.prototype,"_active"),pw([pe()],_w.prototype,"_status"),pw([pe()],_w.prototype,"_foot"),pw([pe()],_w.prototype,"_version"),customElements.get(fw)||customElements.define(fw,_w);const ww={"en-gb":"en-GB","sr-latn":"sr-Latn","zh-cn":"zh-Hans","zh-tw":"zh-Hant"},bw=new Map;function xw(e){const t=Intl[e];return"function"==typeof t?.__addLocaleData?t:void 0}function kw(e,t){try{const[n]=Intl.getCanonicalLocales(t);return new e([n]).resolvedOptions().locale.toLowerCase()===n.toLowerCase()}catch{return!1}}async function $w(e,t,n){let i=!1;for(const r of Dt(n)){if(kw(t,r))return"held";const n=ww[r.toLowerCase()]??r;try{const i=await fetch(`/static/locale-data/intl-${e.toLowerCase()}/${n}.json`);if(i.ok)return t.__addLocaleData(await i.json()),Lt(),"added"}catch{i=!0}}return i?"unreachable":"absent"}const Sw=new WeakMap;function Tw(e){let t=Sw.get(e);if(t)return t;const n={epoch:0,support:"unknown",warned:!1,listeners:new Set};return Sw.set(e,n),e.addEventListener?.("ready",()=>{n.epoch+=1,"no"===n.support&&(n.support="unknown");for(const e of[...n.listeners])e()}),t=n,t}function Mw(e){const t=e?.connection;return t&&"function"==typeof t.subscribeMessage?t:null}const Dw=new Set(["unknown_command","unauthorized"]);class Cw{constructor(e){this.changed=e,this.connection=null,this.questions=new Map,this.onReady=()=>this._retryRefused()}answer(e,t){if(Mw(t)===this.connection)return this.questions.get(e)?.answer}sync(e,t){const n=t.size>0?Mw(e):this.connection;if(n!==this.connection&&(this.stop(),this.connection=n,n&&Tw(n).listeners.add(this.onReady)),n){for(const e of[...this.questions.values()])t.has(e.key)||this._close(e);for(const[e,i]of t)this.questions.has(e)||this._ask(n,e,i)}}stop(){for(const e of[...this.questions.values()])this._close(e);this.connection&&Tw(this.connection).listeners.delete(this.onReady),this.connection=null}_ask(e,t,n){const i=Tw(e),r={key:t,answer:void 0,refused:!1,closed:!1,pushedIn:-1,unsubscribe:Promise.resolve(null)};this.questions.set(t,r),"no"!==i.support&&!1!==e.connected?r.unsubscribe=e.subscribeMessage(e=>this._receive(r,i,e),{type:"subscribe_condition",condition:n}).then(e=>(i.support="yes",()=>{Promise.resolve().then(e).catch(()=>{})}),e=>{const t="string"==typeof e?.code?e.code:void 0;return void 0!==t&&Dw.has(t)?(i.support="no",r.refused=!0,i.warned||(i.warned=!0,et(`Visibility: Home Assistant does not judge conditions for this card (${t}). Calendars whose conditions only it can judge (template, sun, zone, device, a state held for a while) stay hidden; that needs Home Assistant 2026.10.`)),null):(i.support="yes",et(`Visibility: Home Assistant cannot judge ${JSON.stringify(n)}: ${String(e?.message??t??"no reason given")}. Its calendar stays hidden.`),r.closed||(r.answer="error",this.changed()),null)}):r.refused=!0}_receive(e,t,n){if(e.pushedIn=t.epoch,e.closed)return void e.unsubscribe.then(e=>e?.());let i;"boolean"==typeof n?.result||null===n?.result?i=n.result:void 0!==n?.error&&(i="error","error"!==e.answer)&&et(`Visibility: Home Assistant cannot judge a condition, so its calendar stays hidden: ${String(n.error).replace(/\s+/g," ").trim()}`),void 0!==i&&i!==e.answer&&(e.answer=i,this.changed())}_close(e){if(e.closed)return;e.closed=!0,this.questions.delete(e.key);const t=this.connection;!e.refused&&t&&!1!==t.connected&&e.pushedIn===Tw(t).epoch&&e.unsubscribe.then(e=>e?.())}_retryRefused(){let e=!1;for(const t of[...this.questions.values()])t.refused&&(this.questions.delete(t.key),e=!0);e&&this.changed()}}const Aw=1/64,Ew={time:!1,icon:!1,end:!1,wrap:!1},Pw={time:!0,icon:!1,end:!1,wrap:!1},Lw=["grid-time-fits","grid-time-no-icon","grid-time-no-end","grid-time-no-end-reading","grid-time-wrap","grid-time-no-countdown"];function Fw(e){const t=e.querySelector(".grid-event-disclosure"),n=t?.querySelector(".time");return t&&n?{disclosure:t,time:n,icon:n.querySelector(".time-actual > ha-icon"),end:n.querySelector(".time-end"),duration:n.querySelector(".time-end > .time-duration"),countdown:n.querySelector(".time-text > .time-countdown")}:null}function Rw(e){if(!e.countdown)return 0;const t=e.countdown.ownerDocument.createRange();return t.selectNodeContents(e.countdown),t.getBoundingClientRect().width}function Ow(e){e.disclosure.classList.remove(...Lw),e.time.style.display="block"}function Nw(e){return t_(e.time)}function Iw(e){e.time.style.width="max-content"}function zw(e){e.disclosure.classList.add("grid-time-no-icon","grid-time-wrap")}function jw(e){if(!e.end)return 0;const t=Rw(e);return t<=0?e_(e.time).width:function(e,t,n=0){return Math.max(n,e-t)}(function(e){const t=e_(e.time),n=e.countdown?.getClientRects(),i=n?.[n.length-1];if(!i)return t.width;return"rtl"===e.time.ownerDocument.defaultView?.getComputedStyle(e.time).direction?t.right-i.left:i.right-t.left}(e),t,function(e){const t=e.end?.parentElement;if(!t||!e.end)return 0;const n=t.ownerDocument.createRange();n.setStartBefore(t.firstChild??e.end),n.setEndBefore(e.end);const i=n.getBoundingClientRect();if(i.width<=0)return 0;const r=e_(e.time);return"rtl"===e.time.ownerDocument.defaultView?.getComputedStyle(e.time).direction?r.right-i.left:i.right-r.left}(e))}function Hw(e){e.disclosure.classList.remove("grid-time-no-icon","grid-time-wrap")}function Ww(e,t){e.time.style.removeProperty("display"),e.time.style.removeProperty("width"),t.time&&(e.disclosure.classList.add("grid-time-fits"),t.icon||e.disclosure.classList.add("grid-time-no-icon"),t.end||e.disclosure.classList.add(t.duration?"grid-time-no-end-reading":"grid-time-no-end"),t.wrap&&e.disclosure.classList.add("grid-time-wrap"),!1===t.countdown&&e.disclosure.classList.add("grid-time-no-countdown"))}function Bw(e){const t=e.ownerDocument.defaultView?.getComputedStyle(e),n=t?(Number.parseFloat(t.marginLeft)||0)+(Number.parseFloat(t.marginRight)||0):0;return e.getBoundingClientRect().width+n}function qw(e){const t=Uw(e);if(!Vw(e))return t;const{available:n,words:i=0}=e;return t.time&&i<=n+Aw?t:Kw(e,t,!1)}function Uw(e){const{available:t,full:n,icon:i,end:r,wrapped:a,words:o=0,duration:s=0}=e;if(![t,n,i,r,a,o,s].every(Number.isFinite))return Ew;if(t<=0||n<=0)return Ew;const l=t+Aw,d=n-o-i;if(d+i<=l)return{time:!0,icon:!0,end:!0,wrap:!1};if(d<=l)return{time:!0,icon:!1,end:!0,wrap:!1};const c=d-r;return r>0&&a>0&&Math.max(a,c)<=l?{time:!0,icon:!1,end:!0,wrap:!0}:s>0&&s<r&&c+s<=l?{time:!0,icon:!1,end:!1,wrap:!1,duration:!0}:c<=l?Pw:Ew}function Vw(e){return(e.words??0)>0||(e.separator??0)>0}function Gw(e){const{full:t,icon:n,end:i,wrapped:r,words:a=0,separator:o=0}=e,s=t-a-o;return{...e,full:s,words:0,separator:0,wrapped:r>0?Math.max(s-n-i,r-o):0}}function Kw(e,t,n){const i=Gw(e),r=Uw(n?{...i,wrapped:0}:i);return r.time?{...r,icon:r.icon&&t.icon,countdown:!1}:Ew}function Yw(e,t){e.disclosure.classList.remove(...Lw),Ww(e,t)}const Jw=/^[a-z0-9_]+\.[a-z0-9_]+$/,Xw=new WeakMap,Zw=new WeakMap;const Qw=2/3,eb="--calendar-card-pinned-head-height";function tb(e){return{columns:"full",rows:"month"!==e.view||va(e)?"auto":De.MONTH_SECTIONS_ROWS[Ai(e)?"toolbar":"plain"]}}function nb(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}let ib=!0;function rb(e){return"string"==typeof e&&(e.includes("{{")||e.includes("{%"))}class ab{constructor(e){this.callbacks=e,this._hasConnected=!1,this._version=0}update(e,t){const n=rb(t)?t:void 0,i=e?.connection,r=!this._hasConnected&&Boolean(i);i&&(this._hasConnected=!0),n===this._template&&i===this._connection||(this._template=n,this._connection=i,this._version++,this._clearPending(),this._teardown(),n&&e&&(r?this._subscribe(e,n,this._version):this._debounceId=setTimeout(()=>{this._debounceId=void 0,this._subscribe(e,n,this._version)},300)))}destroy(){this._version++,this._template=void 0,this._connection=void 0,this._hasConnected=!1,this._clearPending(),this._teardown()}async _subscribe(e,t,n){const i=await async function(e,t,n){const i=e?.connection;if(!i||!t)return;const r=e=>{if(e&&"error"in e)return"WARNING"===e.level?void it("Template warning",{template:t,error:e.error}):(Qe("Template render error",{template:t,error:e.error}),void n.onError(e.error));var i;e&&"result"in e&&n.onResult(null==(i=e.result)?"":"string"==typeof i?i:String(i))},a=e=>i.subscribeMessage(r,{type:"render_template",template:t,...e?{report_errors:!0}:{}});try{return await a(ib)}catch(e){if(ib&&function(e){return"invalid_format"===e?.code}(e)){ib=!1,et("Home Assistant rejected the render_template `report_errors` option; falling back to basic template rendering (requires 2023.9+ for error reporting)");try{return await a(!1)}catch(e){return void Qe("Failed to subscribe to template",{template:t,error:e})}}const i=e?.message;return Qe("Failed to subscribe to template",{template:t,error:e}),void n.onError(i??String(e))}}(e,t,{onResult:e=>{n===this._version&&this.callbacks.onResult(e)},onError:e=>{n===this._version&&this.callbacks.onError(e)}});i&&(n===this._version?this._unsubscribe=i:i())}_clearPending(){this._debounceId&&(clearTimeout(this._debounceId),this._debounceId=void 0)}_teardown(){if(this._unsubscribe){try{this._unsubscribe()}catch(e){et("Failed to unsubscribe from template",e)}this._unsubscribe=void 0}}}function ob(e){if(!Number.isFinite(e)||e<0)throw new RangeError("Title overflow must be a finite, nonnegative distance.");const t=Math.max(2.8,e/45),n=Math.min(.6,Math.max(.2,e/360));return{start:.6,forward:t,end:.6,back:n,total:.6+t+.6+n}}function sb(e,t){const{start:n,forward:i,end:r,total:a}=ob(e);if(!Number.isFinite(t)||t<a)throw new RangeError("The title cohort period must contain every complete title trip.");const o=e=>`${(e/t*100).toFixed(10)}%`;return`linear(0 0%, 0 ${o(n)}, 1 ${o(n+i)}, 1 ${o(n+i+r)}, 0 ${o(a)}, 0 100%)`}function lb(e,t){return e.distance===t.distance&&e.direction===t.direction&&e.signature===t.signature}function db(e){let t=0;for(const n of e.values())t=Math.max(t,ob(n.distance).total);return t}class cb{constructor(){this._members=new Map,this._desired=new Map,this._period=0,this._pending=!1}get members(){return this._members}get period(){return this._period}get pending(){return this._pending}get empty(){return 0===this._desired.size}update(e){this._desired=new Map(e);const t=[];for(const[n,i]of this._members){const r=e.get(n);r&&lb(i,r)||(this._members.delete(n),t.push(n))}return this._pending=this._members.size!==e.size||db(e)!==this._period,t}retire(e){this._members.delete(e)}commit(){this._members=new Map(this._desired),this._period=db(this._members),this._pending=!1}clear(){this._members.clear(),this._desired.clear(),this._period=0,this._pending=!1}}const ub="data-title-motion",hb="--calendar-card-title-cohort-period",mb="--calendar-card-title-cohort-curve",pb="calendar-card-title-scroll-paused",fb=["calendar-card-title-cohort-a","calendar-card-title-cohort-b"];class gb{constructor(e,t){this.host=e,this.remeasure=t,this.targets=new Map,this.active=new Map,this.cohort=new cb,this.motion=matchMedia("(prefers-reduced-motion: reduce)"),this.hostVisible=!1,this.hostHasBox=!0,this.frame=null,this.generation=0,this.nameIndex=0,this.disposed=!1,this.fallback=!1,this.motionChanged=()=>{this.fallback||this.reset(),this.refresh(),this.motion.matches||this.remeasure()},this.visibilityChanged=()=>{this.refresh()},this.intersections=new IntersectionObserver(t=>{const n=t.find(t=>t.target===e);n&&(this.hostHasBox=n.boundingClientRect.width>0&&n.boundingClientRect.height>0,this.hostVisible=this.visible(n));for(const e of t){const t=this.targets.get(e.target);t&&(t.visible=this.visible(e))}this.refresh()}),this.intersections.observe(e),this.motion.addEventListener("change",this.motionChanged),e.ownerDocument.addEventListener("visibilitychange",this.visibilityChanged)}get enhanced(){return!this.fallback}visible(e){return e.isIntersecting&&e.intersectionRect.width>0&&e.intersectionRect.height>0}get paused(){if(!this.hostVisible||this.host.ownerDocument.hidden)return!0;for(const e of this.targets.values())if(e.visible)return!1;return!0}sync(e){const t=new Set(e);for(const e of this.targets.keys())t.has(e)||(this.intersections.unobserve(e),this.targets.delete(e),this.clearTitle(e));for(const e of t)this.targets.has(e)||(this.targets.set(e,{visible:!1}),this.fallback||e.setAttribute(ub,"pending"),this.intersections.observe(e));this.refresh()}measure(e){for(const t of e){const e=this.targets.get(t.title);e&&(e.measurement=t)}this.refresh()}refresh(){if(this.disposed)return;if(this.host.classList.toggle(pb,this.paused),this.fallback)return;if(this.motion.matches||!this.hostHasBox)return void this.reset();if(this.paused)return void this.cancelFrame();const e=new Map;for(const[t,{visible:n,measurement:i}]of this.targets){const r=t.closest(".grid-event")?.dataset.gridTitleFit;n&&i&&t.isConnected&&t.contains(i.content)&&t.classList.contains("title-scrollable")&&!t.classList.contains("empty-day-title")&&i.distance>1&&"blank"!==r&&"measuring"!==r&&e.set(i.content,i)}const t=[...this.active].filter(([,{animation:e}])=>"idle"===e.playState).map(([e])=>e);for(const e of t)this.cohort.retire(e),this.withdraw(e);for(const t of this.cohort.update(e))this.withdraw(t);this.bindLeader(),this.cohort.empty?this.reset():0===this.cohort.members.size&&this.scheduleCommit()}withdraw(e){const t=this.active.get(e);t&&this.targets.has(t.title)&&t.title.setAttribute(ub,"pending"),this.clearTiming(e),this.active.delete(e)}bindLeader(){const e=this.cohort.members.keys().next().value;if(e===this.leader)return;if(this.stopLeader?.(),this.stopLeader=void 0,this.leader=e,!e)return;const t=this.generation,n=fb[this.nameIndex],i=i=>{t===this.generation&&i.target===e&&i.animationName===n&&this.cohort.pending&&!this.paused&&this.scheduleCommit()};e.addEventListener("animationiteration",i),this.stopLeader=()=>e.removeEventListener("animationiteration",i)}scheduleCommit(){null===this.frame&&(this.frame=requestAnimationFrame(()=>{if(this.frame=null,!(this.disposed||this.fallback||this.paused||this.motion.matches)&&(this.refresh(),this.cancelFrame(),this.cohort.pending&&!this.cohort.empty)){if(this.leader){const e=this.active.get(this.leader)?.animation.effect?.getComputedTiming();if("number"!=typeof e?.progress||!Number.isFinite(e.progress)||"number"!=typeof e.duration||!Number.isFinite(e.duration)||e.duration<=0)return void this.useFallback("Native title animation phase is unavailable.");if(e.progress*e.duration>600)return}this.commit()}}))}commit(){this.stopLeader?.(),this.stopLeader=void 0,this.leader=void 0,this.generation+=1,this.nameIndex=1-this.nameIndex,this.cohort.commit();const e=this.cohort.period,t=new Map;for(const[e,n]of this.targets)n.measurement&&t.set(n.measurement.content,e);for(const[n,i]of this.cohort.members){const r=t.get(n);n.style.setProperty(hb,`${e}s`),n.style.setProperty(mb,sb(i.distance,e)),r.setAttribute(ub,0===this.nameIndex?"a":"b")}const n=[...this.cohort.members.keys()].map(e=>({content:e,animation:e.getAnimations().find(e=>e instanceof CSSAnimation&&e.animationName===fb[this.nameIndex])})),i=this.host.ownerDocument.timeline.currentTime;if("number"!=typeof i||n.some(({animation:e})=>!e))this.useFallback("Native title animation effects or document clock are unavailable.");else{try{for(const{animation:e}of n)e.startTime=i}catch(e){return void this.useFallback("Native title animation clocks could not be aligned.",e)}this.active.clear();for(const{content:e,animation:i}of n)this.active.set(e,{title:t.get(e),animation:i});this.bindLeader(),it("Title motion cohort committed; native startTime aligned once per member",{generation:this.generation,members:n.length,periodSeconds:e,startTime:i})}}useFallback(e,t){et(`${e} Keeping independent legacy title scrolling.`,t),this.reset(),this.fallback=!0;for(const e of this.targets.keys())this.clearTitle(e)}cancelFrame(){null!==this.frame&&cancelAnimationFrame(this.frame),this.frame=null}reset(){this.cancelFrame(),this.stopLeader?.(),this.stopLeader=void 0,this.leader=void 0,this.generation+=1;for(const e of this.active.keys())this.clearTiming(e);this.active.clear(),this.cohort.clear();for(const e of this.targets.keys())e.setAttribute(ub,"pending"),this.clearTiming(e.querySelector(".event-title-scroll"))}clearTiming(e){e?.style.removeProperty(hb),e?.style.removeProperty(mb)}clearTitle(e){e.removeAttribute(ub),this.clearTiming(e.querySelector(".event-title-scroll"))}dispose(){this.disposed=!0,this.reset(),this.intersections.disconnect(),this.motion.removeEventListener("change",this.motionChanged),this.host.ownerDocument.removeEventListener("visibilitychange",this.visibilityChanged);for(const e of this.targets.keys())this.clearTitle(e);this.targets.clear(),this.host.classList.remove(pb)}}function vb(e){const{TOOLBAR_COMMAND_WIDTH:t,TOOLBAR_COMMAND_GAP:n}=De;return e<=0?0:e*t+(e-1)*n}function _b(e){const{TOOLBAR_SWITCHER_LABEL_MIN_WIDTH:t,TOOLBAR_SWITCHER_WORD_WIDTH:n,TOOLBAR_SWITCHER_SEGMENT_PADDING:i}=De;return Ae.filter(t=>!e.includes(t)).reduce((e,t)=>e-2*i-n[t],t)}function yb(e,t){const n=De.TOOLBAR_COMMAND_GAP,i=e.views>0?function(e){const{TOOLBAR_SWITCHER_SEGMENT_WIDTH:t,TOOLBAR_SWITCHER_TRACK_PADDING:n}=De;return e<=0?0:e*t+2*n}(e.views)+n:0;return e.insetPx+vb(t)+n+i+vb(e.end.length)}function wb(e,t,n=0){const{start:i}=e,r=i.length-1;if(r<2)return{visible:i,overflow:[]};const a=n=>yb(e,n)<=t;let o=0;if(!a(i.length))for(o=2;o<r&&!a(i.length-o+1);)o+=1;return o=Math.max(o,n),1===o&&(o=2),o=Math.min(o,r),{visible:i.slice(0,i.length-o),overflow:i.slice(i.length-o)}}const bb="calendar_card_pro_view_choice";function xb(e){return Array.isArray(e)?`[${e.map(e=>void 0===e?"null":xb(e)).join(",")}]`:Vt(e)?`{${Object.keys(e).filter(t=>void 0!==e[t]).sort().map(t=>`${JSON.stringify(t)}:${xb(e[t])}`).join(",")}}`:JSON.stringify(e)??"null"}function kb(e){const t=xb(e);return`${Bt(t)}${t.length.toString(36)}`}function $b(){try{return"undefined"==typeof localStorage?null:localStorage}catch{return null}}function Sb(e){return Ae.some(t=>t===e)}function Tb(e){if(!Array.isArray(e))return;const t=[...new Set(e.filter(e=>"string"==typeof e&&""!==e))];return t.length>0?t:void 0}function Mb(e){if(e)try{return e.getItem(bb)}catch{return}}function Db(e){if(null==e)return{};let t;try{t=JSON.parse(e)}catch{return{}}if(!Vt(t)||1!==t.version)return{};if(!Vt(t.choices))return{};const n={};for(const[e,i]of Object.entries(t.choices)){if(!Vt(i)||"number"!=typeof i.at)continue;const t=Sb(i.view)?i.view:void 0,r=Tb(i.hidden);void 0===t&&void 0===r||(n[e]={...void 0!==t?{view:t}:{},...void 0!==r?{hidden:r}:{},at:i.at})}return n}function Cb(e){return Db(Mb(e))}function Ab(e,t){if(!e)return!1;const n=Object.entries(t).sort(([,e],[,t])=>t.at-e.at).slice(0,50);try{if(0===n.length)return e.removeItem(bb),!0;const t={version:1,choices:Object.fromEntries(n)};return e.setItem(bb,JSON.stringify(t)),!0}catch{return!1}}function Eb(e,t,n,i){const r=Cb(n),a=r[e],o={...a,...t,at:i};if(void 0===o.view&&delete o.view,void 0!==o.hidden&&0!==o.hidden.length||delete o.hidden,void 0===o.view&&void 0===o.hidden){if(!a)return null!==n;delete r[e]}else r[e]=o;return Ab(n,r)}function Pb(e,t=$b()){const n=Mb(t);if(void 0!==n)return Db(n)[e]?.hidden??[]}var Lb=Object.defineProperty,Fb=Object.getOwnPropertyDescriptor,Rb=(e,t,n,i)=>{for(var r,a=i>1?void 0:i?Fb(t,n):t,o=e.length-1;o>=0;o--)(r=e[o])&&(a=(i?r(t,n,a):r(a))||a);return i&&a&&Lb(t,n,a),a};function Ob(e,t){const n=e,i=n?.CalendarCardProEditor;if("function"!=typeof i)throw new Error("Calendar Card Pro: the editor file was found but is not the card’s editor. This usually means another file of the same name is installed alongside it — put the card’s files in a folder of their own, or reinstall through HACS, which does that for you. The card itself is unaffected.");const r=n?.EDITOR_VERSION;r!==fe&&et(`Editor file is v${r??"unknown"} but the card is v${fe}. Both files come from the same release, so one of them is stale — hard-refresh the browser, and if that does not help, reinstall so the card and editor files are replaced together.`),customElements.get(t)||customElements.define(t,i)}function Nb(e,t){for(let n=t;n;){e.observe(n,{attributes:!0,attributeOldValue:!0,attributeFilter:["style","class","dir","lang"]});const t=n.getRootNode();n=n.parentElement??(t instanceof ShadowRoot?t.host:null)}}function Ib(e,t){if(e.target!==t||"class"!==e.attributeName)return!1;const n=e=>e.split(/\s+/).filter(e=>e&&"calendar-card-title-scroll-paused"!==e).sort().join(" ");return n(e.oldValue??"")===n(t.className)}function zb(e){e.classList.remove("title-overflowing"),e.style.removeProperty("--calendar-card-title-scroll-distance"),e.style.removeProperty("--calendar-card-title-scroll-direction"),e.style.removeProperty("--calendar-card-title-scroll-duration")}function jb(e){if("childList"!==e.type)return!1;const t=e.target instanceof Element?e.target:e.target.parentElement;return!t?.closest(`.${Of}`)&&[...Array.from(e.addedNodes),...Array.from(e.removedNodes)].some(e=>e instanceof Element&&!e.classList.contains(wf)&&!e.classList.contains(Of))}function Hb(e){if(!(e instanceof Element))return;const t=e.getBoundingClientRect();return{x:t.left+t.width/2,y:t.top+t.height/2,rect:pd(e)}}function Wb(){return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches??!1}function Bb(e){try{return window.matchMedia?.(e)?.matches??!1}catch{return!1}}function qb(e){e.style.removeProperty("transform"),e.getAttribute("style")||e.removeAttribute("style")}function Ub(e){return e.scrollHeight>e.clientHeight+1}function Vb(e){if(e.lineHeight.endsWith("px")){const t=Number.parseFloat(e.lineHeight);if(Number.isFinite(t)&&t>0)return t}const t=Number.parseFloat(e.fontSize);return Number.isFinite(t)&&t>0?1.2*t:0}function Gb(e,t,n){if(n<=0)return 0;const i=e-1;return Math.max(1,Math.round(t/n))-Math.max(0,Math.ceil(i/n))}const Kb=[{selector:".description",lineProperty:"--calendar-card-description-max-lines"},{selector:".location",lineProperty:"--calendar-card-location-max-lines"},{selector:".event-weather",lineProperty:null},{selector:".progress-bar-row",lineProperty:null},{selector:".time",lineProperty:null}],Yb='[role="button"][tabindex]',Jb=new Set,Xb={instanceId:"",events:[],raw:[],loadedAt:{},fetchedAt:0};function Zb(e,t){const n=void 0===t?void 0:e.loadedAt[t];return"number"==typeof n?n:e.fetchedAt}const Qb=new Set;function ex(e){return e.reduce((e,t)=>e+t.events.filter(e=>!e._isEmptyDay).length,0)}let tx=class extends de{constructor(){super(),this.config={...mi},this.events=[],this.isInitialLoad=!0,this.isLoading=!1,this.isExpanded=!1,this.weatherForecasts={daily:{},hourly:{}},this.preview=!1,this.editMode=!1,this.connectedWhileHidden=!0,this._eventsInstanceId="",this._liveReleases=[],this._liveCalendars=new Set,this._liveUnlisten=null,this._liveConnection=null,this._liveSyncTimer=null,this._liveDriftLoaded="",this._drawnRaw=[],this._drawnLoadedAt={},this._completeDrawing=Xb,this._eventRequestGeneration=0,this._partialCommit=null,this._partialTimer=null,this._language="",this._intlLanguage="",this._lastUpdateTime=0,this._eventsFetchedAt=0,this._appearLoadPending=!1,this._failureCountHint=0,this._failureCountQuery="",this._weatherUnsubscribers=[],this._weatherSetupVersion=0,this._weatherSetupPending=!1,this._weatherCurrentAt={},this._weatherPlanned={entity:void 0,types:[]},this._failedEntities=[],this._activePointerId=null,this._pointerStart=null,this._pointerMoved=!1,this._holdTriggered=!1,this._holdTimer=null,this._holdIndicator=null,this._pointerCaptureTarget=null,this._capturedPointerId=null,this._releasingPointerCapture=!1,this._pointerTapTarget=null,this._pointerSwipeable=!1,this._swipeNudge=null,this._swipeMotion=null,this._swipeArrival=null,this._derivedClick=null,this._spaceArmedOn=null,this._pointerDayHit=null,this._pointerAddContext=null,this._pointerDayAdd=null,this._pointerMonthPick=null,this._pointerHandedTo=null,this._pointerOnLink=!1,this._pointerDraftFrom=null,this._draft=null,this._move=null,this._newShown=null,this._newHosts=new Map,this._newObserved=new Set,this._swallowTouchEndUntil=0,this._liftingTouch=!1,this._washedDay=null,this._bandOpenForNew=!1,this._handleLegendChanged=e=>{const t=e.detail;t&&t.source!==this&&this._wantsLegend&&t.fingerprint===this._configFingerprint&&(this._adoptHiddenCalendars(t.hidden),this._hiddenMatchesStorage=t.stored)},this._handleStorageChanged=e=>{const t=e;if(!this._wantsLegend||null===this._configFingerprint)return;const n=$b();if(null===n||t.storageArea!==n)return;const i=function(e,t){if(null===e.key)return[];if(e.key!==bb)return;const n=Db(e.oldValue)[t]?.hidden??[],i=Db(e.newValue)[t]?.hidden??[];return n.length===i.length&&n.every(e=>i.includes(e))?void 0:i}(t,this._configFingerprint);void 0!==i&&(this._adoptHiddenCalendars(i),this._hiddenMatchesStorage=!0)},this._handleCalendarsChanged=e=>{const t=e.detail;t&&t.source!==this&&function(e,t,n){return Yo(e.changed,t,n)}(t,this.config.entities.map(e=>"string"==typeof e?e:e.entity),this.safeHass)&&(this._markHomeStaleIfAway(),this.refreshEvents(t.writeGeneration),this._search?.calendarsChanged())},this._openEventDetails=(e,t,n)=>{if(this._isBeingEdited)return void it("Not opening the event popover while the card is being edited");const i=this._detailsParams(e,t,n);i&&this._openPopover(i)},this._measuredWidthPx=null,this._toolbarWidthPx=null,this._toolbarLabelsOverflowed=null,this._monthFit=null,this._configFingerprint=null,this._viewChoice=null,this._hiddenCalendars=Jb,this._hiddenMatchesStorage=!1,this._refreshPhase="idle",this._refreshTicket=0,this._resetConfirmation=null,this._homeConfirming=!1,this._refreshAwaitsLoad=null,this._shownEventsCache=null,this._visibility=di,this._visibilityChanged=!1,this._visibilityQueries=new Map,this._visibilityTimerId=null,this._visibilityTimerAt=null,this._coreConditions=new Cw(()=>{it("Visibility: Home Assistant answered a condition"),this.requestUpdate()}),this._legendFold=null,this._legendWidthPx=null,this._legendUnfoldedAtPx=null,this._legendFitRaf=null,this._toolbarRow=null,this._startFoldGuard=null,this._focusBeforeFold=null,this._switcherFocusBefore=null,this._tapFocusBefore=null,this._toolbarFontGeneration=0,this._toolbarFontsCleanup=null,this._toolbarLabelMinWidthPx=null,this._search=null,this._searchRing=null,this._searchRingDrawn=!1,this._searchRingBehindMore=null,this._searchRingPending=!1,this._searchPanelGone=!0,this._pageRequested=null,this._pageShown=null,this._carriedDay=null,this._loadedWindowShown=null,this._loadConfigs=null,this._pageConfigs=null,this._homeStale=!1,this._homeWindowCache=null,this._effectiveView="list",this._columnCount=0,this._cascadeThresholds=new Map([[1,30]]),this._overflowStripPct=1/0,this._monthCapacity=4,this._monthScaleLines=new Map,this._monthNarrow=!1,this._monthWidthPx=null,this._monthSelection=null,this._monthListFit=null,this._monthListDrawn=null,this._monthListWatch=null,this._monthListWatched=[],this._monthListViewportWatched=!1,this._onMonthListViewport=()=>this._syncMonthListFit(),this._monthListParts={more:null,empty:null},this._monthListFocus=null,this._monthProbeWatch=null,this._monthProbes=[],this._dayPanelNarrow=!1,this._dayPanel=null,this._monthFocusDay=null,this._monthFocusPending=!1,this._monthFormFocus=!1,this._gridScaleRaf=null,this._resizeObserver=null,this._headPinObserver=null,this._headPinWatched=null,this._gridDisclosureObserver=null,this._gridDisclosureRaf=null,this._gridDisclosureReleaseRaf=null,this._gridDisclosureTargets=new Map,this._gridDisclosureDirty=new Set,this._gridDisclosureMutations=null,this._gridDisclosureAssetsCleanup=null,this._gridDisclosureObservedSizes=new WeakMap,this._gridDisclosureSuppressRo=!1,this._gridDisclosureSuppressGeneration=0,this._gridDisclosureFontsCleanup=null,this._nowLineTimerId=null,this._nowLineDayKey=null,this._bareUpdateRequests=0,this._bareUpdateRequestsSeen=0,this._clockRepainting=!1,this._bareUpdatePending=!1,this._clockTimerId=null,this._clockTimerAt=null,this._midnightTimerId=null,this._midnightArmedDay=null,this._followsTodayCache=null,this._nowBoundaryTimerId=null,this._nowBoundaryAt=null,this._nowBoundaryEvents=null,this._nowBoundaryConfig=null,this._widthSettleTimerId=null,this._titleScrollObserver=null,this._titleScrollIntersectionObserver=null,this._titleScrollMutations=null,this._titleScrollRaf=null,this._titleScrollFontsCleanup=null,this._titleMotion=null,this._titleFitObserver=null,this._titleFitMutations=null,this._titleFitRaf=null,this._titleFitFontsCleanup=null,this._handleVisibilityChange=()=>{this._syncNowLineTimer(),this._syncNowBoundaryTimer(),this._syncClockTimer(),"visible"===document.visibilityState&&((this._wantsNowLine||this._wantsNowBoundary)&&this.requestUpdate(),this._resyncHiddenCalendars(),Date.now()-this._lastUpdateTime>3e5&&(it("Visibility changed to visible, updating events"),this.updateEvents("cache")))},this._onEntityColorsChanged=()=>{this.requestUpdate()},this._onLiveChange=e=>{this._search?.calendarsChanged(),("*"===e||this._liveCalendars.has(e))&&null===this._liveSyncTimer&&(this._liveSyncTimer=window.setTimeout(()=>{this._liveSyncTimer=null,this._syncLive()},0))},this._draftSecondContact=e=>{this._drawingPress&&e.pointerId!==this._activePointerId&&this._endGesture()},this._swallowTouchEnd=e=>{Date.now()>this._swallowTouchEndUntil||(this._swallowTouchEndUntil=0,e.cancelable&&e.preventDefault())},this._draftKeyDown=e=>{"Escape"===e.key&&this._drawingPress&&(e.preventDefault(),e.stopPropagation(),this._endGesture())},this._draftTouchMove={handleEvent:e=>{this._drawingPress&&e.cancelable&&e.preventDefault()},passive:!1},this._refuseNativeDrag=e=>{this._move&&e.cancelable&&e.preventDefault()},function(e){Je||(console.groupCollapsed(`%c${_e}%cv${e} `,Ze.title,Ze.version),console.log("%c Description: %c A calendar card that supports multiple calendars with individual styling. ","font-weight: bold","font-weight: normal"),console.log("%c GitHub: %c https://github.com/alexpfau/calendar-card-pro ","font-weight: bold","font-weight: normal"),console.groupEnd(),Je=!0)}(fe)}static async getConfigElement(){if(!customElements.get("calendar-card-pro-editor"))try{Ob(await(import(function(e){const t=new URL("./editor.js",e);return t.search=new URL(e).search,t.href}(import.meta.url))),"calendar-card-pro-editor")}catch(e){const t=e instanceof Error?e.message:String(e);throw Qe(e,"loading the editor file"),new Error(`Calendar Card Pro: the editor could not be loaded because one of the card’s files is missing. Reinstalling the card in HACS restores it. The card itself is unaffected. (${t})`)}return document.createElement("calendar-card-pro-editor")}getGridOptions(){return tb(this.config)}get _instanceId(){return this._instanceIdForPage(null)}_cardActionRuns(e){const t="hold"===e?this.config.hold_action:this.config.tap_action;return!(!t||"none"===t.action)&&(t.action===ye?this._canAddEvents:t.action===we?this._canReset:"expand"===t.action?this.hasCompactModeLimits():t.action!==be||!this._isBeingEdited)}get _hasTapAction(){return this._cardActionRuns("tap")}get _hasHoldAction(){return this._cardActionRuns("hold")}get _writableCalendars(){const e=this._visibility.calendars.size?[...this._failedEntities,...this._visibility.calendars]:this._failedEntities;return function(e,t,n=[]){if(!e?.states)return[];const i=[];for(const r of t){const t="string"==typeof r?r:r?.entity;!t||i.includes(t)||n.includes(t)||Oo(e,t,1)&&i.push(t)}return i}(this.safeHass,this.config.entities,e)}get _canAddEvents(){return!this._isBeingEdited&&this._writableCalendars.length>0}get _dayTapsActive(){const e=this.config.day_tap_action;return e?.action===ye&&this._canAddEvents}get _dayAddButtons(){if(this._dayTapsActive)return{label:qo(this.safeHass)??Bo}}_refreshAfterWrite(e,t){this._markHomeStaleIfAway();const n=this.safeHass;!function(e){for(const t of Yc.values())"persistent"===t.store&&e(t.calendars)&&(t.expired=!0);const t=[];try{for(let e=0;e<localStorage.length;e+=1){const n=localStorage.key(e);n?.startsWith(ve)&&n.endsWith(fe)&&t.push(n)}}catch(e){return void et("Could not list cached events:",e)}for(const n of t){const t=Uu(n);if(t&&!t.expired&&e(qu(t)))try{localStorage.setItem(n,JSON.stringify({...t,expired:!0}))}catch(e){et("Could not expire cached events, removing them:",e);try{localStorage.removeItem(n)}catch{}}}}(t=>Yo(e,t,n));const i=function(){const e=Kc()+1;return globalThis[Gc]=e,e}();this.refreshEvents(i).then(()=>t?.()),this._search?.calendarsChanged(),function(e,t,n){window.dispatchEvent(new CustomEvent(Ko,{detail:{changed:t,writeGeneration:n,source:e}}))}(this,e,i)}_resyncHiddenCalendars(){if(!this._wantsLegend||null===this._configFingerprint||!this._hiddenMatchesStorage)return;const e=Pb(this._configFingerprint);if(void 0===e)return;const t=new Set(lg(this.config.entities)),n=e.filter(e=>t.has(e)),i=this._hiddenCalendars;n.length===i.size&&n.every(e=>i.has(e))||this._adoptHiddenCalendars(n)}_adoptHiddenCalendars(e){const t=new Set(lg(this.config.entities)),n=e.filter(e=>t.has(e));this._hiddenCalendars=n.length>0?new Set(n):Jb,this.requestUpdate()}_markHomeStaleIfAway(){null===this._pageRequested&&null===this._pageShown||(this._homeStale=!0)}_detailsParams(e,t,n){const i=e._entityId,r=dd(e);if(!i||!r)return;const a=this.effectiveLanguage,o=hd(e,a),s=function(e,t){if(!Zl(e))return;const{locked:n}=Ql(e._source??e,e._matchedConfig,t),i=cd(e,t);return i?{...n,location:i.locked}:n}(e,a),l=s?function(e,t){return{...e,summary:t.title,location:t.location||void 0,description:t.description||void 0,status:void 0}}(r,o):r,d=this._popoverCalendar(i,t),c=this._eventPermissions(e,l),u=c.canEdit&&c.canDelete?this._writableCalendars.filter(e=>e!==i):[],h=e._mergedFrom&&e._mergedFrom.length>1?e._mergedFrom.map(({entityId:t,config:n})=>this._popoverCalendar(t,Lu(t,this.config,void 0,{...e,_matchedConfig:n},Br()))):void 0;return{mode:"event",calendarId:i,entry:l,display:o,...s&&{private:{...s}},color:d.color,calendars:[d,...u.map(e=>this._popoverCalendar(e))],...h&&{merged:h},...ud(e,a)&&{severalPlaces:!0},...c,anchor:n,updated:(...e)=>this._refreshAfterWrite({ids:e.length?e:[i]})}}_eventPermissions(e,t){return function(e,t,n,i){const r=t._entityId,a=(t._mergedFrom?.length??0)>1;return!r||!n.uid||a||Zl(t)||i.failedEntities.includes(r)?{canEdit:!1,canDelete:!1}:{canEdit:i.allowEdit&&Oo(e,r,4)&&void 0!==ld(t),canDelete:i.allowDelete&&Oo(e,r,2)}}(this.safeHass,e,t,{allowEdit:!1!==this.config.allow_event_edit,allowDelete:!1!==this.config.allow_event_delete,failedEntities:this._failedEntities})}_openPopover(e){const t=this.safeHass,n={...e,language:t?.locale?.language??this._language??"en",hour24:Pl(this.config,t),dark:this._panelsDark()};this._liftingTouch&&(this._swallowTouchEndUntil=Date.now()+Se);const i=new Event("show-dialog",{bubbles:!0,composed:!0});i.detail={dialogTag:Xy,dialogImport:()=>customElements.whenDefined(Xy),dialogParams:n},this.dispatchEvent(i),it(`Opened the event popover for ${e.calendarId}`)}_popoverCalendar(e,t){const n=t??Lu(e,this.config,void 0,void 0,Br());return{id:e,name:ff(e,this.config,this.safeHass),color:this._resolvedColor(n)}}_resolvedColor(e){const t=getComputedStyle(this);let n=e;for(let e=0;e<3&&/var\(--calendar-card-/.test(n);e++)n=n.replace(/var\((--calendar-card-[\w-]+)(?:,\s*([^()]*))?\)/g,(e,n,i)=>t.getPropertyValue(n).trim()||i?.trim()||"var(--primary-color)");return n}get _eventTapRuns(){return"none"!==ed(this.config.event_tap_action)}get _eventHoldRuns(){return"none"!==ed(this.config.event_hold_action)}get _isBeingEdited(){return this.preview||this.editMode}get _eventsActivatable(){return(this._eventTapRuns||this._eventHoldRuns)&&!this._isBeingEdited}_runEventAction({event:e,color:t},n,i){const r="hold"===n?this.config.event_hold_action:this.config.event_tap_action,a=ed(r);if("details"===a)return it(`Executing event ${n} action: details`),void this._openEventDetails(e,t,i);if("forward"!==a||!r||this._isBeingEdited)return;const o=function(e,t){const n=new Set,i={action:e.action};try{for(const[r,a]of Object.entries(e))"action"!==r&&(i[r]=sd(a,t,{key:r,payload:id.has(r)},n))}catch(e){if(e instanceof od)return;throw e}if("url"===i.action&&n.has("url_path")){const e=(r=String(i.url_path??""),/^\s*([a-z][a-z0-9+.-]*):/i.exec(r)?.[1]?.toLowerCase());if(void 0!==e&&!rd.has(e))return}var r;return i}(r,function(e,t){const n=e._source??e,i=n.start?.dateTime??n.start?.date??"",r=n.end?.dateTime??n.end?.date??"",a=!n.start?.dateTime&&Boolean(n.start?.date),o=e._matchedConfig,s=Jl(o?.replace_field,o?.replace_pattern,o?.replace_with),l=(e,t)=>Xl(e??"",s,t).text,d=Zl(e)?Ql(n,o,t):void 0;return{title:d?d.title:l(n.summary,"title"),start:i,end:r,all_day:a?"true":"false",location:d?d.location:l(n.location,"location"),description:d?d.description:l(n.description?ml(n.description):"","description"),calendar:e._entityId??""}}(e,this.effectiveLanguage));o?(Lo(this,{entity:e._entityId,[`${n}_action`]:o},n),it(`Delegated event ${n} action (${o.action}) to HA native handler`)):et(`Not running event ${n} action: it puts an event's text outside its data or URL query, or its URL would not open over http or https`)}_runEventHold(e,t){this._eventHoldRuns?this._runEventAction(e,"hold",t):this._hasHoldAction&&(it("Executing hold action"),Ro(this,this.config,"hold",this._cardActions(null,t),this._shownEntries))}_eventTapAt(e,t=this._pathOf(e)){if(this._eventsActivatable&&t)return Wh(t,e.currentTarget)}_pathOf(e){return"function"==typeof e.composedPath?e.composedPath():void 0}_pressPath(e){const t=this._pathOf(e);if(!t||"touch"!==e.pointerType||"grid"!==this.effectiveView)return t&&{path:t,lifts:!0};const n=Wh(t,e.currentTarget);if(!n)return{path:t,lifts:!0};const i={x:e.clientX,y:e.clientY},r=function(e,t){const n=e.elementFromPoint;if("function"==typeof n)return n.call(e,t.x,t.y)}(this.renderRoot,i);if(void 0===r||r&&n.element.contains(r))return{path:t,lifts:!0};const a=r?function(e){const t=[];for(let n=e;n;)t.push(n),n=n instanceof ShadowRoot?n.host:n.parentNode;return t}(r):[],o=this._dayTapsActive&&(Wh(a,e.currentTarget)??Xh(a,e.currentTarget,i));return it("A touch reached an event it is not on; "+(o?"reading it from under the finger":"it lifts nothing")),o?{path:a,lifts:!0,handedTo:n.element}:{path:t,lifts:!1}}_cardActions(e,t){return{expand:()=>this.toggleExpanded(),refresh:()=>this._requestRefresh(),addEvent:()=>this._addEventAt(e??void 0,t),reset:()=>this._resetFromAction(),back:e=>this._goBack(e)}}_goBack(e){if(this._isBeingEdited)return void it("Not going back while the card is being edited");const t=function(e,t,n){if(function(e){return"object"==typeof e&&null!==e&&void 0!==e.from}(e))return{kind:"history"};const i="string"==typeof n?n.trim():"";return{kind:"replace",path:""!==i?i:Go(t)}}(window.history.state,window.location.pathname,e.navigation_path);if("history"===t.kind)return it("Going back to the page before this one"),void window.history.back();it(`No page of Home Assistant's behind this one; going to ${t.path}`),Lo(this,{tap_action:{action:"navigate",navigation_path:t.path,navigation_replace:!0}},"tap")}get safeHass(){return this.hass||null}get effectiveLanguage(){return!this._language&&this.hass&&(this._language=St(this.config.language,this.hass.locale)),this._language||"en"}get groupedEvents(){return wu(this._shownEvents,this.effectiveConfig,this.isExpanded,this.effectiveLanguage,this.effectiveView,this.hass)}get _activeHiddenCalendars(){return this._wantsLegend&&!this._isBeingEdited?this._hiddenCalendars:Jb}get _shownEvents(){const e=this._activeHiddenCalendars,t=this._visibility;if(0===e.size&&0===t.hidden.size)return this.events;const n=this._shownEventsCache;if(n&&n.events===this.events&&n.hidden===e&&n.visibility===t)return n.shown;const i=this.events.filter(t=>this._eventShown(t,e));return this._shownEventsCache={events:this.events,hidden:e,visibility:t,shown:i},i}_eventShown(e,t=this._activeHiddenCalendars){return!t.has(e._entityId??"")&&!hi(e,this._visibility)}_refreshVisibility(){const e=this._isBeingEdited?di:function(e,t){const n=new Set,i=new Set,r=new Set;for(const a of e){if("string"==typeof a){i.add(a);continue}const e=a.visibility;e&&!mn(e,{...t,entityId:a.entity})?(n.add(ci(a.entity,e)),r.add(a.entity)):i.add(a.entity)}for(const e of i)r.delete(e);return 0===n.size?di:{hidden:n,calendars:r}}(this.config.entities??[],{hass:this.hass,now:Date.now(),matches:Bb,core:e=>this._coreConditions.answer(e,this.hass)});this._visibilityChanged=!function(e,t){return e===t||ui(e.hidden,t.hidden)&&ui(e.calendars,t.calendars)}(e,this._visibility),this._visibilityChanged&&(this._visibility=e,it(`Visibility: ${e.hidden.size} entr${1===e.hidden.size?"y":"ies"} hidden`))}get _shownEntries(){const e=this._visibility.calendars;return 0===e.size?this.config.entities:this.config.entities.filter(t=>!e.has("string"==typeof t?t:t.entity))}get _shownFailures(){const e=this._visibility.calendars;return 0===e.size?this._failedEntities:this._failedEntities.filter(t=>!e.has(t))}get _holdsShownEvent(){const e=this._visibility;return 0===e.hidden.size?this.events.length>0:this.events.some(t=>!hi(t,e))}get _legendHidesAShownCalendar(){const e=this._activeHiddenCalendars;if(0===e.size)return!1;const t=this._visibility.calendars;return 0===t.size||[...e].some(e=>!t.has(e))}_legendCalendarIds(){const e=lg(this.config.entities),t=this._visibility.calendars;return 0===t.size?e:e.filter(e=>!t.has(e))}get requestedView(){return this._viewChoice??this.config.view}get effectiveView(){return this._isBeingEdited?this.config.view:this._effectiveView}get _shownColumnCount(){return this._isBeingEdited&&this.requestedView!==this.config.view?Co(this.config.view,this.config,this._measuredWidthPx,null).columns:this._columnCount}get _rowsConfig(){return"month"===this.effectiveView?Rg(this.effectiveConfig,this._drawsNarrowMonth):this.effectiveConfig}get effectiveConfig(){const e=this.effectiveView,t=this._pageShown,n=this._configForPage(t),i=this._loadedWindowShown,r=new Date,a="month"===e||i?.spansMonth?this._dayKey(r):"",o=this._effectiveConfigCache;if(o&&o.config===n&&o.view===e&&o.loaded===i&&o.dayKey===a)return o.resolved;let s=this._drawnConfig(t,e,r);const l=s.days_to_show,d=null===i?null:this._loadedRoom(i,t,e,r);return null!==d&&l>d&&(s={...s,days_to_show:d}),this._effectiveConfigCache={config:n,view:e,loaded:i,dayKey:a,resolved:s,configuredDays:l},s}_drawnConfig(e,t,n=new Date){const i=this._configForPage(e),r=qa(i,t);return"month"!==t?r:{...r,start_date:Xu(this._monthRowsStart(e,n)),days_to_show:yo,weather:Ka(i,"month")}}_monthRowsStart(e,t=new Date){return bo(null===e?this._monthHomeDay(t):Zu(e),this._firstDayOfWeek)}_monthHomeDay(e){return ko(this._homeWindowStart(e),xo(this.config.start_date),e)}get _firstDayOfWeek(){return Nl(this.config.first_day_of_week,this.hass?.locale)}_dayKey(e){return`${gl(e)}|${this._firstDayOfWeek}`}_loadedRoom(e,t,n,i){if(!e.spansMonth||void 0===e.startDate)return e.days;const r="month"===n?this._monthRowsStart(t,i):null===t?this._homeWindowStart(i):Zu(t),a=xl(Zu(e.startDate),r);return Math.max(1,e.days-a)}_configForPage(e){if(null===e)return this.config;this._pageConfigs?.config!==this.config&&(this._pageConfigs={config:this.config,pages:new Map});const t=this._pageConfigs.pages.get(e);if(t)return t;const n={...this.config,start_date:e,show_past_events:!0};for(const e of Ae){const t=za[e]?.blockKey,i=t?this.config[t]:void 0;t&&Vt(i)&&"show_past_events"in i&&(n[t]={...i,show_past_events:!0})}return this._pageConfigs.pages.set(e,n),n}_instanceIdForPage(e){const t=Mo(this._loadConfigForPage(e));return function(e,t,n,i,r=""){const a=e.map(e=>"string"==typeof e?e:e.entity).sort().join("_");let o="";if(n)try{o=n.includes("T")?n.split("T")[0]:n}catch{o=n}return Bt(`calendar_${a}_${t}${o?`_${o}`:""}${Wt(o,i)}${r}`)}(this.config.entities,t.days,t.startDate,this._firstDayOfWeek,t.variant)}_loadConfigForPage(e){const t=new Date,n=this._dayKey(t);this._loadConfigs?.config===this.config&&this._loadConfigs.key===n||(this._loadConfigs={config:this.config,key:n,pages:new Map});const i=this._loadConfigs.pages.get(e??"");if(i)return i;const r=So(this._configForPage(e),this._firstDayOfWeek,null===e,t);return this._loadConfigs.pages.set(e??"",r),r}get _viewDays(){return this.effectiveConfig,this._effectiveConfigCache.configuredDays}get _wantsNavigation(){const e=Di(this.config);return e.show&&e.navigation}get _swipeAvailable(){return this._wantsNavigation&&!this._isBeingEdited&&!("grid"===this.effectiveView&&function(e,t,n,i){if(!ia.has(e)||i.view!==e)return!1;if(null===n||n<=0)return!1;if("cramp"!==vo(t,e))return!1;const r=Math.min(go(t,e),mo(t,e));return Ao(e,t,n,i)<r}("grid",this.config,this._measuredWidthPx,{view:this._effectiveView,columns:this._columnCount}))}get _shedColumns(){return"list"===this.effectiveView?0:this._shownColumnCount}_homeWindowStart(e){const t=this._firstDayOfWeek,n=[gl(e),this.config.start_date??"",this.config.days_to_show,t].join("|");if(this._homeWindowCache?.key!==n){const{start:e}=vt(this.config.days_to_show,this.config.start_date,t);this._homeWindowCache={key:n,start:e}}return this._homeWindowCache.start}_homeRange(e=new Date){return"month"===this.effectiveView?{start:this._monthRowsStart(null,e),days:yo}:function(e,t,n,i){const r=Yu(e),a=Math.max(1,Math.floor(t)||1),o=Qu(a,n);if(o===a)return{start:r,days:o};const s=xl(r,Yu(i));return{start:Ju(r,Math.min(Math.max(s,0),a-o)),days:o}}(this._homeWindowStart(e),this._viewDays,this._shedColumns,e)}get _listsLatestFirst(){return oa(this.effectiveConfig,this.effectiveView)}_pageRange(e,t=new Date){return null===e?this._homeRange(t):"month"===this.effectiveView?{start:this._monthRowsStart(e,t),days:yo}:{start:Zu(e),days:Qu(this._viewDays,this._shedColumns)}}get effectiveTitle(){return rb(this.config.title)?this.renderedTitle??"":this.config.title}get isTitlePending(){return rb(this.config.title)&&void 0===this.renderedTitle}get visibleEventCount(){const e=this.effectiveLanguage,t=this.effectiveView,n=Nl(this.config.first_day_of_week,this.hass?.locale),i=wl(this.hass).join(","),r=Date.now(),a=this._visibleCountCache,o=this._shownEvents;if(a&&a.events===o&&a.config===this.config&&a.view===t&&a.language===e&&a.firstWeekday===n&&a.weekendDaysKey===i&&a.evaluatedAt===r)return a.count;const s=o.length?ex(wu(o,this.effectiveConfig,!0,e,t,this.hass)):0;return this._visibleCountCache={events:o,config:this.config,view:t,language:e,firstWeekday:n,weekendDaysKey:i,evaluatedAt:r,count:s},s}_homeHasEvents(){const e=this.effectiveView;return!!this._viewHasEvents(e,!0)||null!==this._viewChoice&&this.config.view!==e&&this._viewHasEvents(this.config.view,!1)}_viewHasEvents(e,t){if(t&&"month"!==e)return this.visibleEventCount>0;const n=this._shownEvents;return 0!==n.length&&ex(wu(n,"month"===e?this._monthCountConfig():this.config,!0,this.effectiveLanguage,e,this.hass))>0}_monthCountConfig(){const e=new Date,t=this._monthHomeDay(e),n=Ju(this._monthRowsStart(null,e),yo);return{...qa(this.config,"month"),start_date:gl(t),days_to_show:xl(t,n)}}static get styles(){return Zp}connectedCallback(){super.connectedCallback(),it("Component connected"),this.startRefreshTimer(),this._appearLoadPending=!0,this.updateEvents("navigate"),this._scheduleWeatherSetup(),this._updateTitleSubscription(),document.addEventListener("visibilitychange",this._handleVisibilityChange),window.addEventListener(Ko,this._handleCalendarsChanged),window.addEventListener(ig,this._handleLegendChanged),window.addEventListener("storage",this._handleStorageChanged),this._resyncHiddenCalendars(),this.config?.entities?.some(e=>"string"!=typeof e&&e.visibility)&&this.requestUpdate(),this._syncEntityColors(),this._startWidthObserver(),this._syncTitleScroll(),this._syncTitleFits(),this._syncGridDisclosureSafety(),this._syncHeadPin()}disconnectedCallback(){super.disconnectedCallback(),this._stopWidthObserver(),this._stopGridDisclosureObserver(),this._stopHeadPinObserver(),this._stopTitleScrollObserver(),this._stopTitleFits(),this._stopMonthList(),this._stopMonthProbes(),eg(this.renderRoot),this._search?.close(),this._dayPanel?.close(),this._settleSearchRing(),this._toolbarFontsCleanup?.(),this._toolbarFontsCleanup=null,this._settleResetConfirmation(),this._settleHomeConfirmation(),null!==this._legendFitRaf&&(cancelAnimationFrame(this._legendFitRaf),this._legendFitRaf=null),this._weatherSetupVersion++,this._weatherSetupPending=!1,this._cleanupWeatherSubscriptions(),this._titleSubscription?.destroy(),this._titleSubscription=void 0,this._eventRequestGeneration++,this.isLoading=!1,this._settleRefreshPhase(),this._refreshTimerId&&(clearTimeout(this._refreshTimerId),this._refreshTimerId=void 0),this._initialLoadRetryId&&(clearTimeout(this._initialLoadRetryId),this._initialLoadRetryId=void 0),this._endGesture(),this._derivedClick=null,this._spaceArmedOn=null,this._swipeArrival=null,this._swipeMotion?.cancel(),this._swipeMotion=null,this._stopNowLineTimer(),this._stopMidnightTimer(),this._stopNowBoundaryTimer(),this._stopClockTimer(),this._stopVisibilityWatch(),this._cancelPartialCommit(),this._releaseLive(),document.removeEventListener("visibilitychange",this._handleVisibilityChange),window.removeEventListener(Ko,this._handleCalendarsChanged),window.removeEventListener(ig,this._handleLegendChanged),window.removeEventListener("storage",this._handleStorageChanged),Kr(this._onEntityColorsChanged),it("Component disconnected")}_startWidthObserver(){this._resizeObserver||"undefined"==typeof ResizeObserver||(this._resizeObserver=new ResizeObserver(e=>{const t=e[0]?.contentRect?.width;"number"==typeof t&&t>0&&(null!==this._toolbarWidthPx&&Math.abs(t-this._toolbarWidthPx)>.5&&(eg(this.renderRoot),this._search?.close(),this._dayPanel?.close()),this._syncToolbarLabels(t),this._syncMonthForm(t)&&"month"===this.effectiveView&&this.requestUpdate(),this._scheduleLegendFit(),this._scheduleWidthMeasurement(t)),this._scheduleGridScaleSync(),this._monthListGrows&&this._syncMonthListFit()}),this._resizeObserver.observe(this))}_syncToolbarLabels(e){const t=this._switcherViews,n=[_b(t.length>0?t:Ae),this._toolbarLabelMinWidthPx,this._monthFit?.fullFromPx].filter(e=>"number"==typeof e),i=e=>null===e?"":n.map(t=>e>=t?1:0).join(""),r=i(e)!==i(this._toolbarWidthPx),a=this._rowPlanKey(e)!==this._rowPlanKey(this._toolbarWidthPx),o=this._toolbarLabelsOverflowed,s=null!==o&&e>o.widthPx&&(this._toolbarWidthPx??0)<=o.widthPx;e!==this._toolbarWidthPx&&(this._startFoldGuard=null),this._toolbarWidthPx=e,(r||a||s)&&Di(this.config).show&&this.requestUpdate()}_scheduleWidthMeasurement(e){null!==this._widthSettleTimerId&&clearTimeout(this._widthSettleTimerId),this._widthSettleTimerId=window.setTimeout(()=>{this._widthSettleTimerId=null,this._handleWidthMeasured(e)},100)}get _wantsNowLine(){return"grid"===this.effectiveView&&ma(this.config,"show_now_line")}_syncNowLineTimer(){if(!this.isConnected||!this._wantsNowLine||"hidden"===document.visibilityState)return void this._stopNowLineTimer();if(null!==this._nowLineTimerId)return;this._nowLineTimerId=window.setInterval(()=>{this._tickNowLine()},6e4);const e=gl(new Date);if(null!==this._nowLineDayKey&&e!==this._nowLineDayKey)return this._nowLineDayKey=e,it("Local day rolled over while the now-line timer was stopped, refreshing events"),void this.updateEvents("cache");this._nowLineDayKey=e}_stopNowLineTimer(){null!==this._nowLineTimerId&&(clearInterval(this._nowLineTimerId),this._nowLineTimerId=null)}get _windowFollowsToday(){const e=this.config.start_date;return null!==this._followsTodayCache&&this._followsTodayCache.startDate===e||(this._followsTodayCache={startDate:e,follows:_t(e)}),this._followsTodayCache.follows}get _wantsMidnightTimer(){return("grid"===this.effectiveView||"column"===this.effectiveView)&&this._shownColumnCount>0&&this._shownColumnCount<this.effectiveConfig.days_to_show||this._windowFollowsToday}_syncMidnightTimer(){if(!this.isConnected||!this._wantsMidnightTimer)return void this._stopMidnightTimer();const e=new Date,t=gl(e),n=null!==this._midnightTimerId&&null!==this._midnightArmedDay&&this._midnightArmedDay!==t;this._stopMidnightTimer(),this._midnightArmedDay=t,n&&this._onMidnight();const i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,0,0,1);this._midnightTimerId=window.setTimeout(()=>{this._midnightTimerId=null,this._midnightArmedDay=null,this._onMidnight()},i.getTime()-e.getTime())}_onMidnight(){this.requestUpdate(),this._claimRollover()&&this.updateEvents("cache")}_claimRollover(){if(!this._wantsNowLine)return!0;const e=gl(new Date);return this._nowLineDayKey!==e&&(this._nowLineDayKey=e,!0)}_stopMidnightTimer(){null!==this._midnightTimerId&&(clearTimeout(this._midnightTimerId),this._midnightTimerId=null)}get _wantsNowBoundary(){return"list"===this.effectiveView||"column"===this.effectiveView||"month"===this.effectiveView||"grid"===this.effectiveView&&!this._wantsNowLine}_syncNowBoundaryTimer(){const e=this.isConnected&&this._wantsNowBoundary&&"hidden"!==document.visibilityState,t=this._shownEvents,n=this.effectiveConfig,i=e&&null!==this._nowBoundaryTimerId&&this._nowBoundaryEvents===t&&this._nowBoundaryConfig===n&&null!==this._nowBoundaryAt&&this._nowBoundaryAt>Date.now()?this._nowBoundaryAt:e?function(e,t,n){let i=null;const r=new Date(t),a=new Date(r.getFullYear(),r.getMonth(),r.getDate()+1).getTime(),o=e=>{e>t&&(null===i||e<i)&&(i=e)};for(const t of e){if(t._isEmptyDay)continue;if(n&&!n.show_past_events&&t.start?.date&&t.end?.date){const e=Iu(t._entityId,"allday_expires_at",n,t);if(fu(e)){const n=fl(t.end.date);n.setDate(n.getDate()-1);const i=fl(t.start.date),a=new Date(r.getFullYear(),r.getMonth(),r.getDate());i<a&&i.setTime(a.getTime());for(let t=0;t<2&&i<=n;t++,i.setDate(i.getDate()+1))o(gu(i,e).getTime())}continue}if(!t.start?.dateTime||!t.end?.dateTime)continue;const e=new Date(t.start.dateTime).getTime(),i=new Date(t.end.dateTime).getTime();(e<a&&i>a?[e,i,a]:[e,i]).forEach(o)}return i}(t,Date.now(),n):null;if(null===i)return void this._stopNowBoundaryTimer();this._stopNowBoundaryTimer(),this._nowBoundaryAt=i,this._nowBoundaryEvents=t,this._nowBoundaryConfig=n;const r=Math.min(i-Date.now()+1e3,Me);this._nowBoundaryTimerId=window.setTimeout(()=>{this._nowBoundaryTimerId=null,this._nowBoundaryAt=null,this.requestUpdate()},r)}_stopNowBoundaryTimer(){null!==this._nowBoundaryTimerId&&(clearTimeout(this._nowBoundaryTimerId),this._nowBoundaryTimerId=null),this._nowBoundaryAt=null,this._nowBoundaryEvents=null,this._nowBoundaryConfig=null}_tickNowLine(){const e=gl(new Date);if(null!==this._nowLineDayKey&&e!==this._nowLineDayKey)return this._nowLineDayKey=e,it("Local day rolled over, refreshing events"),void this.updateEvents("cache");this._nowLineDayKey=e,this._clockRepainting=!0;try{this.requestUpdate()}finally{this._clockRepainting=!1}}_nextClockRepaint(e){if(this._wantsNowLine)return null;const t=this._nextClockTextRepaint(e),n=hp(this._weatherCurrentAt,this._weatherPlanned.types);return null!==n&&n>=e&&n+1e3<t?n+1e3:t}_nextClockTextRepaint(e){const t=new Date(e),n=new Date(t.getFullYear(),t.getMonth(),t.getDate()+1,0,0,1).getTime();return this._drawsMovingClockText(e,n)?Math.min(e+6e4,n):n}_drawsMovingClockText(e,t){const n=this.effectiveConfig,i=n.show_countdown,r=n.show_progress_bar;if(!i&&!r)return!1;const a="grid"!==this.effectiveView,o=n.show_past_events;return this._clockTextEvents().some(n=>{if(n._isEmptyDay)return!1;if(r&&(!a||!Hu(n))&&null!==ju(n))return!0;if(!i||!n.start?.dateTime)return!1;const s=new Date(n.start.dateTime).getTime();return s>e&&s<t||o&&ll(n,new Date(e))})}_clockTextEvents(){return this.isExpanded||!this.hasCompactModeLimits()?this._shownEvents:this.groupedEvents.flatMap(e=>e.events)}_syncClockTimer(){const e=this.isConnected&&"hidden"!==document.visibilityState?this._nextClockRepaint(Date.now()):null;null!==e?(this._stopClockTimer(),this._clockTimerAt=e,this._clockTimerId=window.setTimeout(()=>this._tickClock(),Math.max(0,e-Date.now()))):this._stopClockTimer()}_stopClockTimer(){null!==this._clockTimerId&&(clearTimeout(this._clockTimerId),this._clockTimerId=null),this._clockTimerAt=null}_syncVisibilityWatch(){const e=this.isConnected&&!this._isBeingEdited?this.config?.entities??[]:[];this._coreConditions.sync(this.hass,function(e){const t=new Map;for(const n of e)if("string"!=typeof n&&n.visibility)for(const{key:e,condition:i}of ri(n.visibility,n.entity))t.set(e,i);return t}(e));const t=new Set(function(e){const t=new Set;for(const n of e)if("string"!=typeof n&&n.visibility)for(const e of oi(n.visibility))t.add(e);return[...t]}(e));for(const[e,n]of this._visibilityQueries)t.has(e)||(n(),this._visibilityQueries.delete(e));for(const e of t)this._visibilityQueries.has(e)||this._visibilityQueries.set(e,this._listenToMediaQuery(e));const n=function(e,t,n){let i=null;for(const r of e){if("string"==typeof r||!r.visibility)continue;const e=si(r.visibility,t,n);null!==e&&(null===i||e<i)&&(i=e)}return i}(e,this.hass,Date.now());if(null===n)return void this._stopVisibilityTimer();if(null!==this._visibilityTimerId&&this._visibilityTimerAt===n)return;this._stopVisibilityTimer(),this._visibilityTimerAt=n;const i=Math.min(n-Date.now()+1e3,Me);this._visibilityTimerId=window.setTimeout(()=>{this._visibilityTimerId=null,this._visibilityTimerAt=null,it("Visibility: a time condition may have turned"),this.requestUpdate()},Math.max(0,i))}_listenToMediaQuery(e){let t;try{t=window.matchMedia?.(e)}catch{t=void 0}if(!t?.addEventListener)return()=>{};const n=()=>{it(`Visibility: ${e} now ${t?.matches?"matches":"does not match"}`),this.requestUpdate()};return t.addEventListener("change",n),()=>t?.removeEventListener("change",n)}_stopVisibilityTimer(){null!==this._visibilityTimerId&&(clearTimeout(this._visibilityTimerId),this._visibilityTimerId=null),this._visibilityTimerAt=null}_stopVisibilityWatch(){for(const e of this._visibilityQueries.values())e();this._visibilityQueries.clear(),this._stopVisibilityTimer(),this._coreConditions.stop()}_tickClock(){it(`Clock repaint due ${new Date(this._clockTimerAt??Date.now()).toISOString()}`),this._clockTimerId=null,this._clockTimerAt=null,this._clockRepainting=!0;try{this.requestUpdate()}finally{this._clockRepainting=!1}}requestUpdate(...e){void 0===e[0]&&(this._bareUpdatePending=!0,this._clockRepainting||(this._bareUpdateRequests=(this._bareUpdateRequests??0)+1)),super.requestUpdate(...e)}shouldUpdate(e){const t=this._bareUpdatePending;return this._bareUpdatePending=!1,e.has("hass")&&this.hass&&function(e){const t=Tc(e),n=t?bc.get(t):void 0;if(!n)return;const i=Date.now();for(const t of n.subscriptions.values()){if("live"!==t.state&&"failed"!==t.state)continue;const r=e.states?.[t.entityId],a=t.seenState,o=t.seenAt;t.seenState=r,t.seenAt=i,void 0===a||r===a||t.stateTimer||r&&("unavailable"!==r.state||!0!==r.attributes?.restored)&&t.pushedAt>=o-2e3||(t.stateTimer=setTimeout(()=>{t.stateTimer=void 0,et(`No live update for ${t.entityId} after its state changed`),Ec(n,t),Cc(n,t.entityId)},3e4))}}(this.hass),!(!t&&1===e.size&&e.has("hass"))||function(e,t,n){if(!e||!t)return e!==t;const i=e,r=t;for(const e of Object.keys(r))if("states"!==e&&r[e]!==i[e])return!0;for(const e of Object.keys(i))if(!(e in r))return!0;if(e.states===t.states)return!1;for(const i of n)if(e.states?.[i]!==t.states?.[i])return!0;return!1}(e.get("hass"),this.hass,function(e,t){const n=function(e){const t=Xw.get(e);if(t)return t;const n=new Set,i=new Set,r=e=>{if("string"!=typeof e){if(null!==e&&"object"==typeof e&&!i.has(e)){i.add(e);for(const t of Array.isArray(e)?e:Object.values(e))r(t)}}else Jw.test(e)&&n.add(e)};return r(e),Xw.set(e,n),n}(e);let i=Zw.get(e);return void 0===i&&(i=function(e){let t=!1;for(const n of e)if("string"!=typeof n&&n.visibility&&(ai(n.visibility,e=>{"location"===e.condition&&(t=!0)}),t))return!0;return!1}(e.entities??[]),Zw.set(e,i)),i?new Set([...n,...qn(t)]):n}(this.config,this.hass))}_stopWidthObserver(){this._resizeObserver?.disconnect(),this._resizeObserver=null,null!==this._widthSettleTimerId&&(clearTimeout(this._widthSettleTimerId),this._widthSettleTimerId=null),null!==this._gridScaleRaf&&(cancelAnimationFrame(this._gridScaleRaf),this._gridScaleRaf=null)}_headPinParts(){if(!this.isConnected)return null;const e=this.renderRoot;let t=null;switch(this.effectiveView){case"grid":{const n=e.querySelector(".grid-head"),i=n?.parentElement?.querySelector(":scope > .grid-allday-row");n&&i&&"auto"!==n.parentElement.style.overflowX&&(t={kind:"grid",head:n,band:i,grid:n.parentElement});break}case"column":{const n=e.querySelector(".column-grid");n&&(t={kind:"column",head:n,grid:n});break}case"month":{const n=e.querySelector(".month-container:not(.month-narrow) > .month-weekdays");n&&(t={kind:"month",head:n,grid:n.parentElement});break}}const n=t?.grid.closest(".content-container");return t&&n?{...t,area:n}:null}_syncHeadPin(){const e="undefined"==typeof ResizeObserver?null:this._headPinParts();if(!e)return void this._stopHeadPinObserver();const t=this._headPinWatched;if(t?.kind!==e.kind||t.head!==e.head||t.band!==e.band||t.grid!==e.grid||t.area!==e.area){this._stopHeadPinObserver(),this._headPinWatched=e,this._headPinObserver=new ResizeObserver(()=>{const e=this._headPinWatched;e&&this._applyHeadPin(e)});for(const t of new Set([e.head,e.band,e.grid,e.area]))t&&this._headPinObserver.observe(t)}}_applyHeadPin(e){const{area:t}=e,n=e=>e.getBoundingClientRect().height;let i,r=0;if("grid"===e.kind){i=n(e.head);const t=n(e.band);e.band.querySelector(":scope > .grid-allday-band")?r=t-i:i=t}else if("column"===e.kind){const t=e.grid.querySelectorAll(":scope > .day-column > .column-day-header");i=Math.max(0,...Array.from(t,n))}else i=n(e.head);const a=function(e,t,n,i){if(e<=0||n<=0||i<=n)return"none";const r=n*Qw;return e+t<=r?"all":t>0&&e<=r?"head":"none"}(i,r,t.clientHeight,t.scrollHeight);if("grid"===e.kind?("none"===a?e.head.removeAttribute("data-pinned"):e.head.setAttribute("data-pinned","head"===a?"alone":""),e.band.toggleAttribute("data-pinned","all"===a)):e.head.toggleAttribute("data-pinned","none"!==a),"none"===a)t.style.removeProperty(eb);else{const e="all"===a?i+r:i;t.style.setProperty(eb,`${e}px`)}}_stopHeadPinObserver(){this._headPinObserver?.disconnect(),this._headPinObserver=null,this._headPinWatched?.area.style.removeProperty(eb),this._headPinWatched=null}_scheduleGridScaleSync(){null===this._gridScaleRaf&&"undefined"!=typeof requestAnimationFrame&&(this._gridScaleRaf=requestAnimationFrame(()=>{this._gridScaleRaf=null,this._syncCascadeThreshold(),this._syncOverflowStrip(),this._syncMonthCapacity()}))}_syncCascadeThreshold(){if(!this.isConnected||"grid"!==this.effectiveView||"cascade"!==ma(this.effectiveConfig,"overlap_layout"))return;const e=Vd(ma(this.effectiveConfig,"start_time"),ma(this.effectiveConfig,"end_time")),t=this._cascadeThresholds,n=(i=function(e){const t=e.querySelector(".grid-day-body"),n=e.querySelector(".grid-event:not(.grid-event-overflow)");if(!t||!n||t.clientHeight<=0)return null;const i=document.createElement("div");i.className=wf,i.setAttribute("aria-hidden","true"),i.style.cssText="position:absolute;visibility:hidden;pointer-events:none;inset-inline-start:0;top:0;width:0;font-size:var(--calendar-card-font-size-event);height:calc(2 * var(--calendar-card-grid-event-gap, 1px) + var(--calendar-card-grid-rule-width, 1px));",t.appendChild(i);try{const e=Number.parseFloat(getComputedStyle(i).fontSize),r=Number.parseFloat(getComputedStyle(i).height)||0,a=getComputedStyle(n),o=(Number.parseFloat(a.paddingTop)||0)+(Number.parseFloat(a.paddingBottom)||0);return{bodyHeightPx:t.clientHeight,fontPx:e,chromePx:r+o}}finally{i.remove()}}(this.renderRoot),r=e.endMin-e.startMin,a=tf(this.effectiveConfig),o=t,new Map(a.map(e=>[e,_f(i&&{...i,fontPx:i.fontPx*e},r,o.get(e))])));var i,r,a,o;const s=[...n].filter(([e,n])=>n!==yf(t,e));this._cascadeThresholds=n,s.length>0&&(it(`Cascade threshold ${s.map(([e,n])=>`${1===e?"":`at ${e}x `}${yf(t,e)} -> ${n}`).join(", ")} minutes`),this.requestUpdate())}_syncOverflowStrip(){if(!this.isConnected||"grid"!==this.effectiveView)return;const e=function(e,t){if(!(e&&e.dayWidthPx>0&&e.labelFontPx>0))return t;const n=28*Math.max(1,e.labelFontPx/12);return Number.isFinite(t)&&Math.abs(t/100*e.dayWidthPx-n)<1?t:n/e.dayWidthPx*100}(function(e){const t=e.querySelector(".grid-event-overflow-label"),n=t?.closest(".grid-day-body");return!t||!n||n.clientWidth<=0?null:{dayWidthPx:n.clientWidth,labelFontPx:Number.parseFloat(getComputedStyle(t).fontSize)}}(this.renderRoot),this._overflowStripPct);e!==this._overflowStripPct&&(it(`Overflow strip ${this._overflowStripPct} -> ${e}% of a day column`),this._overflowStripPct=e,this.requestUpdate())}_syncMonthCapacity(){if(!this.isConnected||"month"!==this.effectiveView)return;this._writeMonthFloors();const e=function(e){const t=t=>e.querySelector(`.${Gg}[data-probe="${t}"]`)?.getBoundingClientRect().height,n=t("title"),i=t("time");if(void 0===n||void 0===i)return null;const r=Math.max(n,i);if(!(r>0))return null;const a=new Map;for(const t of e.querySelectorAll(`.${Gg}[data-probe^="scaled-"]`)){const e=Number(t.dataset.scale);e>1&&a.set(e,[...a.get(e)??[],t.getBoundingClientRect().height])}return new Map([...a].map(([e,t])=>[e,Math.max(1,Math.ceil(Math.max(...t)/r-.01))]))}(this.renderRoot),t=null!==e&&(e.size!==this._monthScaleLines.size||[...e].some(([e,t])=>this._monthScaleLines.get(e)!==t));t&&(it(`Month lines by text scale: ${JSON.stringify([...e])}`),this._monthScaleLines=e);const n=function(e){const t=e.querySelector(".month-week"),n=t?.querySelector(".month-day"),i=t=>e.querySelector(`.${Gg}[data-probe="${t}"]`)?.getBoundingClientRect().height,r=i("date"),a=i("title"),o=i("time");if(!t||!n||void 0===r||void 0===a||void 0===o)return null;const s=Math.max(a,o),l=t.getBoundingClientRect().bottom-n.getBoundingClientRect().top;return s>0&&l>0?Math.max(0,Math.floor((l-r)/s+.01)):null}(this.renderRoot),i=null!==n&&n!==this._monthCapacity;i&&(it(`Month line capacity ${this._monthCapacity} -> ${n}`),this._monthCapacity=n),(t||i)&&this.requestUpdate()}_writeMonthFloors(){const e=this.renderRoot.querySelector(".month-container:not(.month-narrow)"),t=e?function(e){const t=e.querySelectorAll(":scope > .month-week"),n=t[0]?.querySelector(".month-day"),i=t=>e.querySelector(`:scope > .${Gg}[data-probe="${t}"]`)?.getBoundingClientRect().height,r=i("date"),a=i("title"),o=i("time");if(!n||void 0===r||void 0===a||void 0===o)return null;const s=e.getBoundingClientRect(),l=Math.max(a,o);if(!(s.width>0&&r>0&&l>0))return null;const d=Vg(e,s),c=t[0].getBoundingClientRect(),u=Math.max(0,n.getBoundingClientRect().top-c.top),h=Math.max(0,c.top-s.top),m=Math.max(0,e.offsetHeight-e.clientHeight),p=e=>Math.ceil(e-.01),f=p((r+l+u)/d);return{week:f,month:p(h/d+6*f+m)}}(e):null;if(e&&t)for(const n of["week","month"]){const i=`${t[n]}px`,r=Sv[n];e.style.getPropertyValue(r)!==i&&e.style.setProperty(r,i)}}_watchMonthProbes(){const e=this.isConnected&&"month"===this.effectiveView?[...this.renderRoot.querySelectorAll(`.month-container > .${Gg}`)]:[];if((e.length!==this._monthProbes.length||!e.every((e,t)=>e===this._monthProbes[t]))&&(this._stopMonthProbes(),this._monthProbes=e,0!==e.length&&"undefined"!=typeof ResizeObserver)){this._monthProbeWatch=new ResizeObserver(()=>this._syncMonthCapacity());for(const t of e)this._monthProbeWatch.observe(t)}}_stopMonthProbes(){this._monthProbeWatch?.disconnect(),this._monthProbeWatch=null,this._monthProbes=[]}_syncMonthListFit(){const e=this.isConnected?this._monthListDrawn:null;if(this._watchMonthList(),!e)return;if(this._writeMonthListMin(),0===e.count)return;const t=function(e,t){const n=e.querySelector(".month-day-list > .month-day-list-rows"),i=e.querySelector(`.${Ug}`),r=i?.querySelector(":scope > .month-day-table"),a=i?.querySelector(":scope > .month-day-list-more");if(!n||!r||!a)return null;const o=r.getBoundingClientRect(),s=a.getBoundingClientRect(),l=n.getBoundingClientRect();if(!(o.height>0&&s.height>0&&l.width>0))return null;const d=[...r.querySelectorAll("td.event")];if(0===d.length)return null;const c=Math.max(0,o.bottom-d[d.length-1].getBoundingClientRect().bottom),u={rows:[0,...d.map(e=>e.getBoundingClientRect().bottom-o.top+c)],more:s.height,gap:s.top-o.bottom};if(!t)return{...u,room:l.height};const h=e.querySelector("ha-card");if(!h)return null;const m=Number.parseFloat(getComputedStyle(h).maxHeight);if(!Number.isFinite(m))return{...u,room:1/0};const p=h.getBoundingClientRect(),f=Vg(h,p),g=e.querySelector(".content-container"),v=p.height-l.height+(g?function(e,t){const n=[...e.children];if(0===n.length)return 0;const i=getComputedStyle(e),r=((Number.parseFloat(i.paddingTop)||0)+(Number.parseFloat(i.paddingBottom)||0))*t,a=Math.min(...n.map(e=>e.getBoundingClientRect().top)),o=Math.max(...n.map(e=>e.getBoundingClientRect().bottom));return Math.max(0,o-a+r-e.getBoundingClientRect().height)}(g,f):0);return{...u,room:m*f-v}}(this.renderRoot,this._monthListGrows);if(!t)return;const n=function(e){const{rows:t,more:n,gap:i,room:r}=e,a=t.length-1;if(a<=0)return 0;const o=r+.01;if(t[a]<=o)return a;for(let e=a-1;e>0;e-=1)if(t[e]+i+n<=o)return e;return 0}(t),i=this._searchRing,r=null!==i&&this._searchRingPending&&!i.listFitted;i&&r&&(i.listFitted=!0);const a=this._monthListFit;a?.day!==e.day||a.shown!==n?(it(`Month list ${e.day}: ${n} of ${e.count} events fit`),this._monthListFit={day:e.day,shown:n},this.requestUpdate()):r&&this.requestUpdate()}get _monthListGrows(){return this._drawsNarrowMonth&&!this._holdsSectionsSlot&&$v(this.config)}_writeMonthListMin(){const e=this.renderRoot.querySelector(".month-day-list"),t=e?function(e,t){const n=e.querySelector(".month-day-list"),i=n?.querySelector(":scope > .month-day-list-rows");if(!n||!i)return null;const r=n.getBoundingClientRect();if(!(r.width>0&&r.height>0))return null;const a=Vg(n,r),o=e=>{const t=e?.getBoundingClientRect().height??0;return t>0?t/a:null};if(t.more=o(e.querySelector(`.${Ug} > .month-day-list-more`))??t.more,t.empty=o(i.querySelector(":scope > .month-day-list-empty"))??t.empty,null===t.more&&null===t.empty)return null;const s=getComputedStyle(n),l=(i.getBoundingClientRect().top-r.top)/a,d=(Number.parseFloat(s.paddingBottom)||0)+(Number.parseFloat(s.borderBottomWidth)||0);return Math.ceil(l+d+Math.max(t.more??0,t.empty??0)-.01)}(this.renderRoot,this._monthListParts):null;if(!e||null===t)return;const n=`${t}px`;e.style.getPropertyValue(Jg)!==n&&e.style.setProperty(Jg,n)}_watchMonthList(){const e=[];if(this.isConnected&&this._monthListDrawn){const t=this.renderRoot.querySelector(`.${Yg} > .month-day-table`),n=this._monthListGrows?null:this.renderRoot.querySelector(".month-day-list > .month-day-list-rows");t&&e.push(t),n&&e.push(n)}const t=e.length>0&&this._monthListGrows;if((e.length!==this._monthListWatched.length||!e.every((e,t)=>e===this._monthListWatched[t])||t!==this._monthListViewportWatched)&&(this._stopMonthList(),this._monthListWatched=e,0!==e.length&&"undefined"!=typeof ResizeObserver)){this._monthListWatch=new ResizeObserver(()=>this._syncMonthListFit());for(const t of e)this._monthListWatch.observe(t);t&&(window.addEventListener("resize",this._onMonthListViewport),this._monthListViewportWatched=!0)}}_stopMonthList(){this._monthListWatch?.disconnect(),this._monthListWatch=null,this._monthListWatched=[],this._monthListViewportWatched&&(window.removeEventListener("resize",this._onMonthListViewport),this._monthListViewportWatched=!1)}_focusedMonthListPart(){const e=this._focusedInCard();return e instanceof HTMLElement&&e.closest(".month-day-list > .month-day-list-rows")?e:null}_keepMonthListFocus(){const e=this._monthListFocus;if(this._monthListFocus=null,!e||e.isConnected||this.shadowRoot?.activeElement)return;const t=this.renderRoot.querySelector(".month-day-list > .month-day-list-rows > .month-day-list-more")??(this._drawsNarrowMonth?this._monthCellFor(this._monthSelectedDay()):null);t?.focus({preventScroll:!0})}_syncMonthForm(e=this._monthWidthPx){if(this._monthWidthPx=e,null===e)return!1;const t=function(e,t,n){return e<t+(n?De.MONTH_NARROW_HYSTERESIS:0)}(function(e,t){const n=t?De.MONTH_WEEK_GUTTER:0;return(e-De.TOOLBAR_ROW_INSET.month-n)/7}(e,null!==Ba(this.config,"show_week_numbers","month")),fa(this.config,"min_day_width"),this._monthNarrow);return t!==this._monthNarrow&&(it(`Month ${t?"narrow":"wide"} at ${Math.round(e)}px`),this._holdMonthFocus(),this._monthNarrow=t,!0)}_holdMonthFocus(){if("month"!==this.effectiveView)return;const e=this._focusedInCard();if(!(e instanceof HTMLElement))return;let t=null;const n=tm(e);if(void 0!==n)t=new Date(n);else if(e.closest(".month-day-list"))t=this._monthSelectedDay();else if(e.closest(".month-container")){const n=(i=e.id,/^month-item-(\d{4}-\d{2}-\d{2})-/.exec(i)?.[1]??null);t=null===n?null:Zu(n)}var i;null!==t&&(this._monthFocusDay=gl(t),this._monthFormFocus=!0)}_keepMonthFormFocus(){this._monthFormFocus&&(this._monthFormFocus=!1,"month"===this.effectiveView&&null!==this._monthFocusDay&&(this._focusedInCard()||this._monthCellFor(Zu(this._monthFocusDay))?.focus({preventScroll:!0})))}get _drawsNarrowMonth(){return"month"===this.effectiveView&&this._monthNarrow}_monthSelectedDay(e=new Date){return function(e,t,n,i=new Date,r=Ig(n,i)){return zg(e,t,n,i)??r}(this._monthSelection,this._pageShown,this._monthRowsStart(this._pageShown,e),e,this._monthOwnDay(this._pageShown,e))}_monthOwnDay(e,t){return null===e?this._monthHomeDay(t):Ig(this._monthRowsStart(e,t),t)}get _monthSelectionAway(){if(!this._drawsNarrowMonth||null===this._monthSelection)return!1;const e=new Date,t=this._monthOwnDay(this._pageShown,e);return this._monthSelectedDay(e).getTime()!==t.getTime()}_selectMonthDay(e){this._isBeingEdited||(this._monthSelection=jg(new Date(e),this._pageShown),this._monthFocusDay=gl(new Date(e)),it(`Month: selected ${this._monthSelection.day}`),this.requestUpdate())}_monthNarrowView(e,t){if(!this._drawsNarrowMonth)return;const n=this._monthSelectedDay(),i=Og(this._shownEvents,this.effectiveConfig,e,yo,this.effectiveLanguage,this.hass),r=xl(e,n),a=gl(n),o=(i[r]??[]).length,s=t?Oh(i[r]??[],t):null,l=s?.found??!1,d=this._monthListFit?.day===a?this._monthListFit.shown:void 0,c=!1===this._searchRing?.listFitted,u=(void 0===d||c)&&o>0,h=s?s.rows.findIndex(e=>!0===e._searchRing):-1;return{narrow:{selected:n,dayLists:s?i.map((e,t)=>t===r?s.rows:e):i,weatherForecasts:this.weatherForecasts,dayAdd:this._dayAddButtons,shown:d,more:(e,t)=>this._openDayPanel(e,t,!1,!0)},ringed:l&&!u&&h<Math.min(d??0,o),behindMore:l&&!u&&h>=Math.min(d??0,o),ringPending:l&&u,list:{day:a,count:o}}}_monthTabStop(e,t=new Date){const n={start:e,days:yo};if(null!==this._monthFocusDay){const e=Zu(this._monthFocusDay);if(th(n,e))return e}if(this._drawsNarrowMonth)return this._monthSelectedDay(t);const i=Yu(t);return th(n,i)?i:nh(n)}_monthCellFor(e){const t=Yu(e).getTime(),n=this.renderRoot.querySelectorAll(".month-container .month-day");return Array.from(n).find(e=>tm(e)===t)??null}_moveMonthFocus(e,t=!1){const n=th(this._pageRange(this._pageRequested),e);if(t||!n)if(this._wantsNavigation&&!this._isBeingEdited)this._goToPage(new Date(e.getFullYear(),e.getMonth(),1));else if(!n)return;this._monthFocusDay=gl(e),this._monthFocusPending=!0,this.requestUpdate()}_syncMonthFocus(){if(!this._monthFocusPending)return;if("month"!==this.effectiveView||null===this._monthFocusDay)return void(this._monthFocusPending=!1);if(this._pageRequested!==this._pageShown||this.isInitialLoad)return;const e=this._monthCellFor(Zu(this._monthFocusDay));if(!e)return;this._monthFocusPending=!1;const t=this._focusedInCard();(t===e||t instanceof Element&&t.closest(".month-container"))&&e.focus()}_handleMonthKeyDown(e){if("month"!==this.effectiveView||e.defaultPrevented)return!1;const t=tm(e.target);if(void 0===t)return!1;if(e.altKey||e.ctrlKey||e.metaKey||e.isComposing)return!1;const n=new Date(t),i=wo(n,this._firstDayOfWeek),r=this._cardRightToLeft?-1:1,a=e=>{const t=nh(this._pageRange(this._pageRequested)),i=t.getFullYear(),r=t.getMonth()+e,a=new Date(i,r+1,0).getDate();return new Date(i,r,Math.min(n.getDate(),a))},o={ArrowLeft:()=>Ju(n,-r),ArrowRight:()=>Ju(n,r),ArrowUp:()=>Ju(n,-7),ArrowDown:()=>Ju(n,7),Home:()=>i,End:()=>Ju(i,6),PageUp:()=>a(-1),PageDown:()=>a(1)},s=Object.prototype.hasOwnProperty.call(o,e.key)?o[e.key]():null;return(null!==s||"Enter"===e.key||" "===e.key)&&(e.preventDefault(),e.stopPropagation(),null!==s?this._moveMonthFocus(s,"PageUp"===e.key||"PageDown"===e.key):e.repeat||(" "===e.key?this._spaceArmedOn=e.target:this._activateMonthCell(t,e.target)),!0)}_activateMonthCell(e,t){this._drawsNarrowMonth?this._selectMonthDay(e):this._openDayPanel(new Date(e),t)}get _cardRightToLeft(){const e=this.renderRoot?.querySelector("ha-card");return e instanceof Element&&"rtl"===getComputedStyle(e).direction}_openDayPanel(e,t,n=!1,i=!1){if(this._isBeingEdited)return void it("Not opening a day panel while the card is being edited");this._dayPanel?.close(),this._dayPanelNarrow=this._drawsNarrowMonth,i?t.focus({preventScroll:!0}):(this._monthFocusDay=gl(e),(this._monthCellFor(e)??t).focus({preventScroll:!0})),this.requestUpdate();const r=this.effectiveLanguage,a=Hb(t),o=a&&i?{...a,rect:fd(t)}:a,s={source:{rows:()=>{const t=this._searchRing,n=function(e,t,n,i,r){return Og(e,t,Yu(n),1,i,r)[0]}(this._shownEvents,this.effectiveConfig,e,this.effectiveLanguage,this.hass);return yv(t&&t.page===this._pageShown?Oh(n,t.target).rows:n,this.effectiveConfig,this.effectiveLanguage,this.safeHass,this._eventsActivatable,this.weatherForecasts)},titleFit:()=>{const e=Rg(this.effectiveConfig);return{cutLines:Zt(e,"month")&&Number(e.title_max_lines)||0,capped:Qt(e,"month"),oneLine:Xt(e,"month")}},styles:()=>this._customProperties(),title:()=>sv(e,this.effectiveLanguage),language:()=>this.effectiveLanguage,titleColor:()=>{const e=this.effectiveConfig.weekday_color;return e===mi.weekday_color?void 0:e},attach:e=>(this._dayPanel=e,()=>{this._dayPanel===e&&(this._dayPanel=null)}),activate:(e,t,n)=>"hold"===n?this._runEventHold(e,t):this._activate({event:e},t),holds:()=>this._eventHoldRuns||this._hasHoldAction,addLabel:()=>this._dayAddButtons?.label,add:t=>this._activate({day:e.getTime()},t)},title:sv(e,r),anchor:o&&{...o,rect:o.rect??t.getBoundingClientRect()},dark:this._panelsDark(),language:r,focusRinged:n},l=new Event("show-dialog",{bubbles:!0,composed:!0});l.detail={dialogTag:ry,dialogImport:()=>customElements.whenDefined(ry),dialogParams:s},this.dispatchEvent(l),it(`Opened the day panel for ${gl(e)}`)}_stopGridDisclosureObserver(){this._gridDisclosureObserver?.disconnect(),this._gridDisclosureObserver=null,this._gridDisclosureFontsCleanup?.(),this._gridDisclosureFontsCleanup=null,this._gridDisclosureMutations?.disconnect(),this._gridDisclosureMutations=null,this._gridDisclosureAssetsCleanup?.(),this._gridDisclosureAssetsCleanup=null,this._gridDisclosureTargets.clear(),this._gridDisclosureDirty.clear(),null!==this._gridDisclosureRaf&&(cancelAnimationFrame(this._gridDisclosureRaf),this._gridDisclosureRaf=null),null!==this._gridDisclosureReleaseRaf&&(cancelAnimationFrame(this._gridDisclosureReleaseRaf),this._gridDisclosureReleaseRaf=null),this._gridDisclosureSuppressGeneration+=1,this._gridDisclosureSuppressRo=!1}_applyGridDisclosureSafety(e){this._gridDisclosureSuppressGeneration+=1;const t=this._gridDisclosureSuppressGeneration;this._gridDisclosureSuppressRo=!0;const n=Array.from(e??this.renderRoot.querySelectorAll(".grid-event:not(.grid-event-overflow)")),i=n.map(v_).filter(e=>null!==e);i.forEach(g_);for(const e of n)delete e.dataset.gridTitleGap;P_(i.map(e=>e.title));try{const e=n.flatMap(e=>{const t=e.querySelector(".grid-event-disclosure .event-content");if(!t)return[];const n=Kb.map(e=>({lineProperty:e.lineProperty,element:t.querySelector(e.selector)})).filter(e=>null!==e.element);for(const e of n)e.element.classList.remove("grid-event-detail-clipped"),e.lineProperty&&e.element.style.removeProperty(e.lineProperty);return[{block:e,content:t,detailRows:n,withdrawn:[]}]}),t=this._applyGridTimeFit(n);(function(e){const t=e.flatMap(e=>{const t=Array.from(e.summary.children).filter(t=>t!==e.title),n=function(e){const t=e.querySelector(".title-words");for(const e of Array.from(t?.childNodes??[])){if(e.nodeType===Node.ELEMENT_NODE)return e===t?.firstElementChild&&e.matches(".title-word")?e:null;if(e.nodeType===Node.TEXT_NODE&&e.textContent?.trim())return null}return null}(e.title);return t.length&&n&&!e.summary.matches(".summary-scroll")?[{target:e,labels:t,word:n}]:[]});if(!t.length)return;const n=document.createElement("canvas").getContext("2d"),i=t.flatMap(({target:e,labels:t,word:i})=>{if(!A_(e)||!E_(e.summary))return[];const r=L_(e.block);let a=0;for(const e of t){const t=e.getClientRects();if(1!==t.length||t[0].width<=0)return[];const n=getComputedStyle(e);a+=t[0].width/r+C_(n.marginLeft)+C_(n.marginRight)}const o=$_(k_(i))/r,s=N_(e.summary)-a;return o>0&&o+I_(n,i)<=s+n_?[{target:e,run:a}]:[]});for(const{target:e,run:t}of i)e.summary.style.setProperty(r_,`${t}px`)})(i),function(e){if(!e.length)return;const t=document.createElement("canvas").getContext("2d"),n=e.flatMap(e=>{const n=function(e,t){if(e.summary.matches(".summary-scroll")||!A_(e)||!E_(e.summary))return null;const n=function(e){const t=Array.from(e.summary.children).flatMap(t=>t===e.title?[]:[{kind:"label",node:t,rects:t.matches(".calendar-label")?k_(t).flatMap(e=>e.rects):Array.from(t.getClientRects())}]);for(const n of k_(e.title)){const i=n.node.parentElement?.closest(".title-word");i&&e.title.contains(i)?t[t.length-1]?.node!==i&&t.push({kind:"word",node:i,rects:[e_(i)]}):t.push({kind:"text",node:n.node,rects:n.rects})}return t}(e),i=function(e){const t=[];for(const n of e.filter(e=>e.height>0).sort((e,t)=>e.top-t.top)){const e=t[t.length-1];e&&z_(n)<=e.bottom+n_?(e.top=Math.min(e.top,n.top),e.bottom=Math.max(e.bottom,n.bottom)):t.push({top:n.top,bottom:n.bottom})}return t}(n.flatMap(e=>e.rects)),{visible:r}=R_(e);let a=0;for(;a<i.length&&D_(i[a],r);)a+=1;if(0===a||a===i.length)return null;const o=i[a-1],s=e=>z_(e)>=o.top-n_&&z_(e)<=o.bottom+n_,l=n.filter(e=>"label"!==e.kind);let d=l.length-1;for(;d>=0&&!l[d].rects.some(s);)d-=1;if(d<0)return null;const c={target:e,lines:a,word:null,room:0},u=L_(e.block),h=n.flatMap(e=>e.rects.filter(s)),m=N_(e.summary)*u-(Math.max(...h.map(e=>e.right))-Math.min(...h.map(e=>e.left))),p=e=>e.rects.filter(s).reduce((e,t)=>e+t.width,0),f=(e,t)=>{const n=e?.rects.filter(s)??[],i=t.rects.filter(s);return n.length&&i.length?function(e,t){return Math.max(0,t.left-e.right,e.left-t.right)}(n[n.length-1],i[0]):0};if("text"===l[d].kind){let n=m,i=d;for(;i>=0&&"text"===l[i].kind&&l[i].rects.some(s);i--)n+=p(l[i])+f(l[i-1],l[i]);const r=I_(t,l[d].node.parentElement??e.title);if(i<0||!l[i].rects.some(s)||n>=(r+1)*u)return c}let g=m;for(let n=d;n>=0&&l[n].rects.some(s);n-=1){const i=l[n];if(g+=p(i),"text"===i.kind){const r=I_(t,i.node.parentElement??e.title);if(g+f(l[n-1],i)>=(r+1)*u)return c}if("word"===i.kind&&l.slice(n+1).every(j_)){const n=i.node,r=$_(k_(n));if(r>0&&r+I_(t,n)*u<=g+n_)return{target:e,lines:a,word:n,room:g/u-n_}}g+=f(l[n-1],i)}return c}(e,t);return n?[n]:[]});for(const{target:e,lines:t,word:i,room:r}of n)i?(i.setAttribute(s_,""),i.style.setProperty(a_,`${r}px`)):(e.summary.setAttribute(l_,""),e.summary.style.setProperty(o_,String(t)))}(i);const r=e.filter(({content:e})=>Ub(e));for(const{block:e}of r)e.dataset.gridTitleGap="yielded";const a=e.flatMap(e=>{const n=t.get(e.block);return n&&Ub(e.content)?[n]:[]});for(const{target:e,fallback:t}of a)Yw(e,t);for(const{selector:t}of Kb){const n=e.flatMap(e=>{if(!Ub(e.content))return[];const n=e.detailRows.find(({element:e})=>e.matches(t));return n&&0!==n.element.getClientRects().length?[{transaction:e,row:n,lines:n.lineProperty?this._gridDetailLineCount(e.content,n.element):0}]:[]});for(const{row:e,lines:t}of n)e.lineProperty&&t>0&&e.element.style.setProperty(e.lineProperty,String(t));const i=n.filter(({transaction:e,lines:t})=>t<1||Ub(e.content));for(const{transaction:e,row:t}of i)t.lineProperty&&t.element.style.removeProperty(t.lineProperty),t.element.classList.add("grid-event-detail-clipped"),e.withdrawn.push(t.element)}const o=e.filter(({content:e})=>Ub(e));for(const{withdrawn:e}of o)e.forEach(e=>e.classList.remove("grid-event-detail-clipped"));const s=e.filter(({block:e})=>e.dataset.gridTitleGap),l=s.map(({content:e})=>!Ub(e));for(const{block:e}of s)delete e.dataset.gridTitleGap;const d=s.map(({content:e},t)=>l[t]&&Ub(e));s.forEach(({block:e},t)=>{d[t]&&(e.dataset.gridTitleGap="yielded")});const c=[],u=[];for(const e of i){if(!O_(e)){c.push(e);continue}const t=Kb.flatMap(({selector:t})=>Array.from(e.disclosure.querySelectorAll(t)));t.length&&t.every(e=>0===e.getClientRects().length)&&u.push(e)}!function(e){const t=e.map(e=>({target:e,shift:H_(e)}));for(const{target:e,shift:n}of t)null!==n&&(e.row.style.setProperty("--calendar-card-grid-title-shift",`${n}px`),e.block.dataset.gridTitleFit="centered")}(u),function(e){if(!e.length)return;const t=document.createElement("canvas").getContext("2d");for(const t of e)t.block.dataset.gridTitleFit="measuring";try{const n=e.map(e=>W_(e,t)).map(e=>{const t=function(e,t){if(![e,...t].every(e=>Number.isFinite(e)&&e>0)||!t.length)return null;const n=e*Math.max(...t.map(e=>Math.min(e,i_)/e));return n<=Math.min(e,i_)+1e-7?Math.min(e,i_):e-Math.floor(e-n+1e-7)}(e.font,e.textFonts);return{...e,minimum:t,candidate:Math.max(t??e.font,h_(e.font,e.height,e.available)??Math.min(e.font,i_))}});for(const{target:e,candidate:t,font:i}of n)e.summary.style.setProperty("--calendar-card-grid-title-scale",String(i>0?t/i:1));const i=n.map(e=>({...e,result:W_(e.target,t)})).map(e=>({...e,neighbor:Math.max(e.minimum??e.font,m_(e.font,e.candidate,B_(e.result)))}));for(const{target:e,neighbor:t,font:n}of i)e.summary.style.setProperty("--calendar-card-grid-title-scale",String(n>0?t/n:1));const r=i.map(e=>({...e,neighborResult:W_(e.target,t)}));for(const{target:e,candidate:t,font:n,minimum:i,result:a,neighbor:o,neighborResult:s}of r){const r=B_(s)&&(o>t||!B_(a)),l=r?s:a;e.summary.style.setProperty("--calendar-card-grid-title-scale",String(n>0?(r?o:t)/n:1));const d=null!==i&&B_(l)&&l.readable;e.row.style.setProperty("--calendar-card-grid-title-shift",`${l.shift}px`),e.block.dataset.gridTitleFit=d?"compact":"blank"}}finally{for(const t of e)"measuring"===t.block.dataset.gridTitleFit&&(t.block.dataset.gridTitleFit="blank")}}(c);const h=i.flatMap(e=>{const t=e.block.dataset.gridTitleFit,n="compact"===t||"compact"===e.previousMode||"blank"===e.previousMode;return"blank"!==t&&n&&e.title.classList.contains("title-scrollable")?[e.title]:[]});h.length&&this._measureTitleScroll(h),this._titleMotion?.refresh()}finally{null!==this._gridDisclosureReleaseRaf&&cancelAnimationFrame(this._gridDisclosureReleaseRaf),this._gridDisclosureReleaseRaf=requestAnimationFrame(()=>{this._gridDisclosureReleaseRaf=requestAnimationFrame(()=>{this._gridDisclosureReleaseRaf=null,t===this._gridDisclosureSuppressGeneration&&(this._gridDisclosureSuppressRo=!1)})})}}_applyGridTimeFit(e){const t=e.map(e=>({block:e,target:Fw(e)})).filter(e=>null!==e.target),n=new Map;if(0===t.length)return n;const i=t.map(({target:e})=>e);i.forEach(Ow);const r=i.map(Nw);i.forEach(Iw);const a=i.map((e,t)=>function(e,t,n=0){const i=Rw(e);return{available:t,full:e_(e.time).width,icon:e.icon?Bw(e.icon):0,end:e.end?Bw(e.end):0,duration:e.duration?Bw(e.duration):0,wrapped:n,words:i,separator:e.countdown?Bw(e.countdown)-i:0}}(e,r[t]));i.forEach(zw);const o=i.map(jw);i.forEach(Hw);const s=a.map((e,t)=>({...e,wrapped:o[t]})),l=s.map(qw);return t.forEach(({block:e,target:t},i)=>{Ww(t,l[i]);const r=function(e,t){if(!1===t.countdown){if(!t.wrap)return null;const n=Uw({...Gw(e),wrapped:0});return{...n.time?n:Pw,icon:!1,countdown:!1}}if(!t.time)return null;const n=Uw({...e,wrapped:0,words:0});return t.wrap?n.time?n:Vw(e)?Kw(e,t,!0):Pw:n.time===t.time&&n.icon===t.icon&&n.end===t.end&&n.wrap===t.wrap&&n.duration===t.duration?null:n.time?n:Kw(e,t,!0)}(s[i],l[i]);r&&n.set(e,{target:t,fallback:r})}),n}_gridDetailLineCount(e,t){const n=t.querySelector("span")??t,i=Vb(getComputedStyle(n)),r=Gb(e.scrollHeight-e.clientHeight,n.getBoundingClientRect().height,i);return Math.max(0,r)}_scheduleGridDisclosureSafety(e=!0){e&&this._gridDisclosureTargets.forEach(e=>this._gridDisclosureDirty.add(e)),null===this._gridDisclosureRaf&&(this._gridDisclosureRaf=requestAnimationFrame(()=>{if(this._gridDisclosureRaf=null,!this.isConnected||"grid"!==this.effectiveView)return;const e=Array.from(this._gridDisclosureDirty).filter(e=>e.isConnected);this._gridDisclosureDirty.clear(),e.length&&this._applyGridDisclosureSafety(e)}))}_syncGridDisclosureSafety(e=!0){if(!this.isConnected||"grid"!==this.effectiveView||"undefined"==typeof ResizeObserver)return void this._stopGridDisclosureObserver();if(!e&&this._gridDisclosureObserver)return;const t=this.renderRoot.querySelectorAll(".grid-event:not(.grid-event-overflow)");t.length?(this._gridDisclosureObserver||(this._gridDisclosureObserver=new ResizeObserver(e=>{let t=!1;for(const n of e){const e=this._gridDisclosureObservedSizes.get(n.target),i={width:n.contentRect.width,height:n.contentRect.height};if(this._gridDisclosureObservedSizes.set(n.target,i),void 0===e||e.width!==i.width||e.height!==i.height){const e=this._gridDisclosureTargets.get(n.target);e&&this._gridDisclosureDirty.add(e),t=!0}}this._gridDisclosureSuppressRo&&!t||t&&this._scheduleGridDisclosureSafety(!1)}),this._watchGridDisclosureFonts()),this._observeGridDisclosureTargets(t),this._scheduleGridDisclosureSafety()):this._stopGridDisclosureObserver()}_observeGridDisclosureTargets(e){const t=new Set(e);for(const[e,n]of this._gridDisclosureTargets)t.has(n)&&n.contains(e)||(this._gridDisclosureObserver?.unobserve(e),this._gridDisclosureTargets.delete(e));t.forEach(e=>{for(const t of[e,...e.querySelectorAll(".summary, .event-title")])this._gridDisclosureTargets.has(t)||(this._gridDisclosureTargets.set(t,e),this._gridDisclosureObserver?.observe(t))})}_reconcileGridStructure(){this.isConnected&&"grid"===this.effectiveView&&this._gridDisclosureObserver&&(this._observeGridDisclosureTargets(this.renderRoot.querySelectorAll(".grid-event:not(.grid-event-overflow)")),this._scheduleGridDisclosureSafety(!0),this._scheduleGridScaleSync())}_watchGridDisclosureFonts(){const e=e=>{if(!(e.target instanceof HTMLImageElement&&e.target.matches(".label-image")))return;const t=e.target.closest(".grid-event");t&&(this._gridDisclosureDirty.add(t),this._scheduleGridDisclosureSafety(!1))};this.renderRoot.addEventListener("load",e,!0),this.renderRoot.addEventListener("error",e,!0),this._gridDisclosureAssetsCleanup=()=>{this.renderRoot.removeEventListener("load",e,!0),this.renderRoot.removeEventListener("error",e,!0)};const t=document.fonts;if(t){let e=!0;const n=()=>{e&&this._scheduleGridDisclosureSafety()};t.ready.then(n),"function"==typeof t.addEventListener&&t.addEventListener("loadingdone",n),this._gridDisclosureFontsCleanup=()=>{e=!1,"function"==typeof t.removeEventListener&&t.removeEventListener("loadingdone",n)}}"undefined"!=typeof MutationObserver&&(this._gridDisclosureMutations=new MutationObserver(e=>{let t=!1,n=!1;for(const i of e)if("attributes"===i.type){if(Ib(i,this))continue;t=!0}else{const e=i.target instanceof Element?i.target:i.target.parentElement,r=e?.closest(".grid-event:not(.grid-event-overflow)");r?this._gridDisclosureDirty.add(r):e?.closest("style")?t=!0:jb(i)&&(n=!0)}n&&this._reconcileGridStructure(),(t||this._gridDisclosureDirty.size)&&this._scheduleGridDisclosureSafety(t)}),this._gridDisclosureMutations.observe(this.renderRoot,{childList:!0,characterData:!0,subtree:!0}),Nb(this._gridDisclosureMutations,this))}_homeWeekMoved(e){const t=e.get("hass"),n=this.config?.start_date;if(!t||!this.hass||null!==this._pageRequested)return!1;if(!($o(this.config)||"string"==typeof n&&gt(n)))return!1;const i=this.config.first_day_of_week;return Nl(i,t.locale)!==Nl(i,this.hass.locale)}_gridDisclosureChanged(e){if(this._visibilityChanged)return!0;if(0===e.size)return this._bareUpdateRequests!==this._bareUpdateRequestsSeen;if(1!==e.size||!e.has("hass"))return!0;const t=e.get("hass");return!t||!this.hass||t.locale?.language!==this.hass.locale?.language||t.locale?.time_format!==this.hass.locale?.time_format||t.locale?.first_weekday!==this.hass.locale?.first_weekday||this.config.entities.some(e=>{const n="string"==typeof e?e:e.entity,i="string"==typeof e?void 0:e.label;return t.states[n]!==this.hass?.states[n]||i?.startsWith("person.")&&t.states[i]!==this.hass?.states[i]})}_handleWidthMeasured(e){const t=null===this._measuredWidthPx&&null!==this._viewChoice?Eo(this.requestedView,this.config,e):(n=this.requestedView,i=this.config,r=this._measuredWidthPx,a=e,o={view:this._effectiveView,columns:this._columnCount},Co(n,i,a,null===r?null:o));var n,i,r,a,o;const s=this._shownColumnCount,l=this._swipeAvailable;this._measuredWidthPx=e,t.view!==this._effectiveView||t.columns!==this._columnCount?(it(`Layout changed from ${this._effectiveView}/${this._columnCount} to ${t.view}/${t.columns} at ${Math.round(e)}px`),this._effectiveView=t.view,this._columnCount=t.columns,null!==this._carriedDay&&null===this._pageRequested&&this._openOnDate(Zu(this._carriedDay)),this.requestUpdate()):this._shownColumnCount===s&&this._swipeAvailable===l||this.requestUpdate()}willUpdate(e){this._refreshVisibility(),tg(this.renderRoot,"legend")&&!this._legendMenuMayStayOpen()&&eg(this.renderRoot,"legend"),tg(this.renderRoot,"overflow")&&!this._startMenuMayStayOpen()&&eg(this.renderRoot,"overflow"),tg(this.renderRoot,"layout")&&!this._layoutMenuMayStayOpen()&&eg(this.renderRoot,"layout"),this._search?.isOpen&&(this._isBeingEdited||this.hidden||!this._searchButton())&&this._search.close(),this._syncMonthForm(),this._dayPanel&&(this._isBeingEdited||this.hidden||"month"!==this.effectiveView||this._monthNarrow!==this._dayPanelNarrow)&&this._dayPanel.close(),this._focusBeforeFold=this._focusedStartControl(),this._switcherFocusBefore=this._focusedSwitcherForm(),this._tapFocusBefore=this._focusedTapTarget(),this._monthListFocus=this._focusedMonthListPart(),(e.has("hass")||e.has("config")&&e.get("config")?.language!==this.config.language)&&(this._language=St(this.config.language,this.hass?.locale)),(e.has("hass")||e.has("config"))&&this._loadIntlLocaleData()}_loadIntlLocaleData(){const e=this._language,t=Ae.some(e=>qa(this.config,e).show_duration),n=t?`${e}:durations`:e;if(n===this._intlLanguage)return;this._intlLanguage=n;const i=["DateTimeFormat","RelativeTimeFormat"];t&&i.push("NumberFormat","ListFormat"),function(e,t,n){const i=[];for(const r of t){const t=xw(r);if(!t||kw(t,e))continue;const a=`${r}:${e.toLowerCase()}`;let o=bw.get(a);o||(o=$w(r,t,e),bw.set(a,o),o.then(e=>{"unreachable"===e&&bw.delete(a)})),i.push(o.then(e=>"added"===e&&(n?.(),!0)))}0!==i.length&&Promise.all(i).then(e=>e.includes(!0))}(e,i,()=>{this.requestUpdate(),this._search?.wordsChanged()})}updated(e){this._syncNewShown(),this._keepTapFocus(),this._visibilityChanged&&this._search?.visibilityChanged(),(e.has("editMode")||e.has("preview"))&&this._isBeingEdited&&null!==this._pageRequested&&(this._requestPage(null),this._loadPage()),(e.has("editMode")||e.has("preview"))&&this._isBeingEdited&&(this._carriedDay=null,null===this._monthSelection&&null===this._monthFocusDay||(this._monthSelection=null,this._monthFocusDay=null,this.requestUpdate())),this._syncNowLineTimer(),this._syncMidnightTimer(),this._syncReplacedRefresh(),this._syncNowBoundaryTimer(),this._syncClockTimer(),this._syncVisibilityWatch(),this._syncSwipeArrival();const t=this._gridDisclosureChanged(e);this._bareUpdateRequestsSeen=this._bareUpdateRequests,this._syncGridDisclosureSafety(t),this._syncHeadPin(),t&&(this._syncCascadeThreshold(),this._syncOverflowStrip()),this._syncMonthCapacity(),this._watchMonthProbes(),this._keepMonthListFocus(),this._keepMonthFormFocus(),this._syncMonthListFit(),this._dayPanel?.changed();const n=e.has("hass")&&this.hass&&!e.get("hass");n&&this._appearLoadPending?this.updateEvents("navigate"):!this._appearLoadPending&&this._homeWeekMoved(e)&&this.updateEvents("cache");const i=e.has("config")||e.has("preview")?this._weatherPlan():this._weatherPlanned,r=i.entity!==this._weatherPlanned.entity,a=r||i.types.join()!==this._weatherPlanned.types.join();this._weatherPlanned=i,r&&(this.weatherForecasts={daily:{},hourly:{}},this._weatherCurrentAt={},this._weatherSetupVersion++,this._cleanupWeatherSubscriptions()),(n||a)&&this._scheduleWeatherSetup(),i.types.length>0&&function(e,t,n){const i=tp(e,t);if(!e||!i)return;if(np.has(i))return;const r=ip.get(i);if(r)return void r.push(n);const a=rp.get(i);if(a&&Date.now()<a.retryAt)return;const o=function(e,t){if("function"==typeof e.callWS)return e.callWS(t);const n=e.connection;return n&&"function"==typeof n.sendMessagePromise?n.sendMessagePromise(t):void 0}(e,{type:"frontend/get_translations",language:i,category:"entity_component",integration:"weather"});if(!o)return void sp(i,"this instance exposes no WebSocket command API");const s=[n];ip.set(i,s);const l=e=>{const t=(rp.get(i)?.failures??0)+1;rp.set(i,{failures:t,retryAt:Date.now()+xr(t)}),sp(i,e)};o.then(e=>{const t=function(e){const t=e?.resources;if(!t)return{};const n={};for(const[e,i]of Object.entries(t))e.startsWith("component.weather.entity_component._.state.")&&"string"==typeof i&&i&&(n[e.slice(43)]=i);return n}(e);if(0!==Object.keys(t).length){rp.delete(i),np.set(i,t),function(e,t){const n=ep.filter(e=>!t[e]);0!==n.length&&it(`Home Assistant returned ${Object.keys(t).length} weather conditions for ${e}, without ${n.join(", ")}; those will follow the instance's language instead`)}(i,t),it(`Loaded ${Object.keys(t).length} weather conditions in ${i}`);for(const e of s)e()}else l("Home Assistant returned no condition strings")}).catch(e=>{l(String(e))}).finally(()=>{ip.delete(i)})}(this.hass,this.config.language,()=>this.requestUpdate()),this._syncEntityColors(),(e.has("hass")||e.has("config"))&&this._updateTitleSubscription(),this._applyVisibility(),this._syncTitleScroll(),this._syncTitleFits(),this._syncToolbarLabelFit(),this._syncMonthFit(),this._syncHeadingMiddle(),this._syncLegendFit(!1),this._handFocusToMenu(),this._handFocusAcrossSwitcher(),this._syncStartFoldFit(),this._syncSearchRing(),this._syncMonthFocus(),function(e){for(const t of e.querySelectorAll(".legend-chip-label")){const e=t.closest(".legend-chip");e&&(t.scrollWidth>t.clientWidth+.5?e.setAttribute("title",t.textContent??""):e.removeAttribute("title"))}}(this.renderRoot),function(e){for(const[t,n]of[...Gf])t.isConnected&&n.opener.isConnected?e.contains(t)&&(n.placedAt=Kf(t,n.opener),Yf(t,n.parts)):Jf(t,"gone")}(this.renderRoot),function(e){for(const t of e.querySelectorAll(".view-switcher-segment")){const[e,n]=t.classList.contains("selected")?t.querySelectorAll(":scope > .view-switcher-probe"):[];Vf(t,"--calendar-card-toolbar-selected-surface",e&&n?Uf(e,n,t):void 0)}}(this.renderRoot)}_updateTitleSubscription(){if(this.isConnected)return rb(this.config.title)?(this._titleSubscription||(this._titleSubscription=new ab({onResult:e=>{this.renderedTitle=e},onError:()=>{void 0===this.renderedTitle&&(this.renderedTitle="")}})),void this._titleSubscription.update(this.hass,this.config.title)):(this._titleSubscription&&(this._titleSubscription.destroy(),this._titleSubscription=void 0),void(this.renderedTitle=void 0))}_applyVisibility(){const e=!(this.isInitialLoad||this.safeHass&&0!==this.config.entities.length),t=!(!0!==this.config.hide_when_empty||null!==this._pageRequested||null!==this._pageShown||this._legendHidesAShownCalendar||this.preview||this.editMode||e||0!==this._shownFailures.length||this._homeHasEvents());this.hidden!==t&&(it(`hide_when_empty: ${t?"hiding":"revealing"} card`),t&&(eg(this.renderRoot),this._search?.close()),this.hidden=t,this.style.display=t?"none":"",this.dispatchEvent(new CustomEvent("card-visibility-changed",{detail:{value:!t},bubbles:!0,composed:!0})))}_syncTitleScroll(){if(!this.isConnected||!Xt(this._rowsConfig,this.effectiveView))return void this._stopTitleScrollObserver();const e=this.renderRoot.querySelectorAll(".event-title.title-scrollable"),t=Array.from(e).filter(e=>e.querySelector(".event-title-scroll"));if(e.forEach(e=>{t.includes(e)||zb(e)}),this._stopTitleScrollObserver(0===e.length),!e.length)return;t.length||this._stopTitleMotion(),t.length&&!this._titleMotion&&"undefined"!=typeof CSS&&CSS.supports("animation-timing-function","linear(0, 1, 0)")&&"undefined"!=typeof CSSAnimation&&"undefined"!=typeof Animation&&"undefined"!=typeof AnimationEffect&&"function"==typeof AnimationEffect.prototype.getComputedTiming&&"function"==typeof Object.getOwnPropertyDescriptor(Animation.prototype,"startTime")?.set&&"function"==typeof Element.prototype.getAnimations&&"undefined"!=typeof IntersectionObserver&&"function"==typeof matchMedia&&"function"==typeof matchMedia("(prefers-reduced-motion: reduce)").addEventListener&&void 0!==document.timeline&&(this._titleMotion=new gb(this,()=>this._scheduleTitleScrollMeasure())),this._titleMotion?.sync(t),"undefined"!=typeof ResizeObserver&&(this._titleScrollObserver=new ResizeObserver(()=>this._scheduleTitleScrollMeasure()),this._titleScrollObserver.observe(this),e.forEach(e=>{this._titleScrollObserver?.observe(e);const t=e.parentElement;t&&(this._titleScrollObserver?.observe(t),Array.from(t.children).forEach(e=>this._titleScrollObserver?.observe(e)))})),t.length&&!this._titleMotion&&"undefined"!=typeof IntersectionObserver&&(this._titleScrollIntersectionObserver=new IntersectionObserver(e=>{const t=e.every(e=>!e.isIntersecting);this.classList.toggle("calendar-card-title-scroll-paused",t)}),this._titleScrollIntersectionObserver.observe(this)),"undefined"!=typeof MutationObserver&&(this._titleScrollMutations=new MutationObserver(e=>{e.some(e=>!Ib(e,this))&&this._scheduleTitleScrollMeasure()}),this._titleScrollMutations.observe(this.renderRoot,{childList:!0,characterData:!0,subtree:!0}),Nb(this._titleScrollMutations,this));const n=document.fonts;if(n){let e=!0;const t=()=>{e&&this._scheduleTitleScrollMeasure()};n.ready.then(t),"function"==typeof n.addEventListener&&n.addEventListener("loadingdone",t),this._titleScrollFontsCleanup=()=>{e=!1,"function"==typeof n.removeEventListener&&n.removeEventListener("loadingdone",t)}}this._scheduleTitleScrollMeasure()}_scheduleTitleScrollMeasure(){null!==this._titleScrollRaf&&cancelAnimationFrame(this._titleScrollRaf),this._titleScrollRaf=requestAnimationFrame(()=>{this._titleScrollRaf=null,this.isConnected&&Xt(this._rowsConfig,this.effectiveView)&&this._measureTitleScroll()})}_measureTitleScroll(e=this.renderRoot.querySelectorAll(".event-title.title-scrollable")){const t=Array.from(e);P_(t);const n=t.flatMap(e=>{const t=e.closest(".grid-event")?.dataset.gridTitleFit;if("blank"===t||"measuring"===t)return[];const n=e.querySelector(".event-title-scroll");return n?[{title:e,content:n}]:[]}),i=this._titleMotion?.enhanced?n.filter(({content:e})=>"inline"===getComputedStyle(e).display).map(({content:e})=>({content:e,display:e.style.getPropertyValue("display"),priority:e.style.getPropertyPriority("display")})):[];for(const{content:e}of i)e.style.setProperty("display","inline-block","important");let r;try{r=n.map(({title:e,content:t})=>{const n=getComputedStyle(e);return{title:e,content:t,distance:t.offsetWidth-t_(e),direction:"rtl"===n.direction?1:-1,signature:JSON.stringify([t.textContent,n.font,n.letterSpacing,n.wordSpacing,n.textTransform])}})}finally{for(const{content:e,display:t,priority:n}of i)t?e.style.setProperty("display",t,n):e.style.removeProperty("display")}r.forEach(({title:e,distance:t,direction:n})=>{if(t>1&&!e.classList.contains("empty-day-title")){const i=Math.max(4,t/(45*.7));e.style.setProperty("--calendar-card-title-scroll-distance",`${t}px`),e.style.setProperty("--calendar-card-title-scroll-direction",String(n)),e.style.setProperty("--calendar-card-title-scroll-duration",`${i.toFixed(2)}s`),e.classList.add("title-overflowing")}else zb(e)}),this._titleMotion?.measure(r)}_stopTitleMotion(){this._titleMotion?.dispose(),this._titleMotion=null,this.classList.remove("calendar-card-title-scroll-paused")}_stopTitleScrollObserver(e=!0){this._titleScrollObserver?.disconnect(),this._titleScrollObserver=null,this._titleScrollIntersectionObserver?.disconnect(),this._titleScrollIntersectionObserver=null,this._titleScrollMutations?.disconnect(),this._titleScrollMutations=null,this._titleScrollFontsCleanup?.(),this._titleScrollFontsCleanup=null,null!==this._titleScrollRaf&&(cancelAnimationFrame(this._titleScrollRaf),this._titleScrollRaf=null),e&&(this._stopTitleMotion(),this.renderRoot.querySelectorAll("[data-scroll-labels]").forEach(e=>{e.removeAttribute("data-scroll-labels")}))}_syncTitleFits(){this._stopTitleFits();const e=this.isConnected?Array.from(this.renderRoot.querySelectorAll(".summary-row.title-wrap")):[],t=this.isConnected?this._cappedTitles():[];if(!e.length&&!t.length)return this.renderRoot.querySelectorAll(`[${q_}]`).forEach(J_),void this.renderRoot.querySelectorAll(`[${Q_}]`).forEach(e=>e.removeAttribute(Q_));if(this._measureTitleFits(),"undefined"!=typeof ResizeObserver){const n=new ResizeObserver(()=>this._scheduleTitleFits());this._titleFitObserver=n,n.observe(this),e.forEach(e=>{e.querySelectorAll(":scope > .summary, :scope > .title-aside").forEach(e=>n.observe(e))}),t.forEach(e=>n.observe(e))}"undefined"!=typeof MutationObserver&&(this._titleFitMutations=new MutationObserver(e=>{e.some(e=>!Ib(e,this))&&this._scheduleTitleFits()}),Nb(this._titleFitMutations,this));const n=document.fonts;if(n){let e=!0;const t=()=>{e&&this._scheduleTitleFits()};n.ready.then(t),"function"==typeof n.addEventListener&&n.addEventListener("loadingdone",t),this._titleFitFontsCleanup=()=>{e=!1,"function"==typeof n.removeEventListener&&n.removeEventListener("loadingdone",t)}}}_measureTitleFits(){const e=this._rowsConfig;this.renderRoot.querySelectorAll(`[${Q_}]`).forEach(e=>e.removeAttribute(Q_)),Z_(this.renderRoot.querySelectorAll(".summary-row.title-wrap"),Zt(e,this.effectiveView)&&Number(e.title_max_lines)||0),ty(this._cappedTitles())}_cappedTitles(){return Qt(this._rowsConfig,this.effectiveView)?Array.from(this.renderRoot.querySelectorAll(".summary:not(.summary-scroll)")):[]}_scheduleTitleFits(){null!==this._titleFitRaf&&cancelAnimationFrame(this._titleFitRaf),this._titleFitRaf=requestAnimationFrame(()=>{this._titleFitRaf=null,this.isConnected&&this._measureTitleFits()})}_stopTitleFits(){this._titleFitObserver?.disconnect(),this._titleFitObserver=null,this._titleFitMutations?.disconnect(),this._titleFitMutations=null,this._titleFitFontsCleanup?.(),this._titleFitFontsCleanup=null,null!==this._titleFitRaf&&(cancelAnimationFrame(this._titleFitRaf),this._titleFitRaf=null)}getCustomStyles(){return{...this._customProperties(),...Mv(this.config,this.effectiveView,this._monthNarrow?"narrow":"wide",this._holdsSectionsSlot)}}_customProperties(){return Jp(this.effectiveConfig)}get _holdsSectionsSlot(){return e=this.layout,t=this.config,"grid"===e&&"number"==typeof function(e){const t=e,n=t.layout_options,i=t.grid_options?t.grid_options:n&&nb(n)&&void 0!==n.grid_rows?{rows:n.grid_rows}:{};return{...tb(e),...nb(i)?i:{}}.rows}(t);var e,t}_syncEntityColors(){var e,t,n;this.isConnected&&(kr((e=this.config).accent_color)||(e.entities??[]).some(e=>"object"==typeof e&&null!==e&&kr(e.accent_color))?(t=this.hass,n=this._onEntityColorsChanged,t&&(Ir=t,Wr.add(n),Gr(t),function(e){const t=e.connection;t&&"function"==typeof t.addEventListener&&!Nr.has(t)&&(Nr.add(t),t.addEventListener("ready",()=>{Ar?.hass.connection===t?Vr(!0):Pr&&Ir?.connection===t&&Wr.size>0&&qr(Ir),void 0!==zr&&Ir?.connection===t&&(clearTimeout(zr),zr=void 0,Hr=0,Gr(Ir))}))}(t),Ar?Ar.hass=t:Pr||Dr||qr(t))):Kr(this._onEntityColorsChanged))}startRefreshTimer(){this._scheduleRefresh(Date.now()+this._refreshIntervalMs())}_scheduleRefresh(e){if(this._refreshTimerId&&(clearTimeout(this._refreshTimerId),this._refreshTimerId=void 0),!this.isConnected)return;const t=Math.min(Math.max(e-Date.now(),1e3),2**31-1);this._refreshTimerId=window.setTimeout(()=>{this._refreshTimerId=void 0,this.updateEvents("cache")},t),it(`Scheduled next refresh in ${Math.round(t/1e3)}s`)}_syncLive(){null!==this._liveSyncTimer&&(clearTimeout(this._liveSyncTimer),this._liveSyncTimer=null);const e=this.safeHass;if(!this.isConnected||!e||!this.config.entities?.length||this.isLoading)return;this._liveConnection!==e.connection&&(this._liveUnlisten?.(),this._liveUnlisten=function(e,t){const n=Tc(e);if(!n)return()=>{};const i=Mc(n);return i.listeners.add(t),()=>i.listeners.delete(t)}(e,this._onLiveChange),this._liveConnection=e.connection);const t=this._pageShown,n=this._loadConfigForPage(t),i=iu(e,n),r=i.entityIds.flatMap(t=>Fc(e,t,i.window)??[]);for(const e of this._liveReleases)e(0);this._liveReleases=r,this._liveCalendars=new Set(i.entityIds);const a=null===t?"persistent":"page",o=r.length>0&&function(e,t,n){return t.length>0&&t.every(t=>"live"===Rc(e,t,n)?.state)}(e,i.entityIds,i.window);if(0===r.length||!o){if(!this._refreshTimerId){const i=Qc(e,n,this._instanceIdForPage(t),a);this._scheduleRefresh(i?.nextAttemptAt??Date.now()+this._refreshIntervalMs())}if(0===r.length)return}const s=function(e,t,n,i){const{window:r}=Zc(e,t,""),a=[];for(const o of ru(t.entities)){const t=Rc(e,o,r);if("live"!==t?.state||t.reconnecting)continue;const s=n.filter(e=>e._entityId===o);(i.includes(o)||jc(s)!==t.fingerprint)&&a.push(`${o}@${t.version}`)}return a}(e,n,this._drawnRaw,this._failedEntities).join();if(s&&s!==this._liveDriftLoaded)return nt(`Live update: ${s}`),this._liveDriftLoaded=s,void this.updateEvents("live");o&&this._refreshTimerId&&(it("Every calendar shown is live; not polling"),clearTimeout(this._refreshTimerId),this._refreshTimerId=void 0)}_releaseLive(){null!==this._liveSyncTimer&&(clearTimeout(this._liveSyncTimer),this._liveSyncTimer=null);for(const e of this._liveReleases)e(5e3);this._liveReleases=[],this._liveCalendars=new Set,this._liveUnlisten?.(),this._liveUnlisten=null,this._liveConnection=null}_refreshIntervalMs(){return Vu(this.config)}_scheduleWeatherSetup(){this._weatherSetupPending||(this._weatherSetupPending=!0,queueMicrotask(()=>{this._weatherSetupPending=!1,this.isConnected&&this._setupWeatherSubscriptions()}))}_weatherPlan(){if(!this.config)return{entity:void 0,types:[]};const e=Zr(this.config);return{entity:e,types:void 0===e?[]:Ja(this.config,this.preview)}}async _setupWeatherSubscriptions(){const e=++this._weatherSetupVersion;this._cleanupWeatherSubscriptions();const{entity:t,types:n}=this._weatherPlan();if(!t||!this.hass)return;const i=Date.now();this._weatherCurrentAt=Object.fromEntries(Object.keys(this._weatherCurrentAt).map(e=>[e,i]));for(const t of n){if(this._weatherSetupVersion!==e)return;const n=await fp(this.hass,this.config,t,n=>{this._weatherSetupVersion===e&&(this.weatherForecasts={...this.weatherForecasts,[t]:n},this._weatherCurrentAt={...this._weatherCurrentAt,[t]:Date.now()},this.requestUpdate())});if(this._weatherSetupVersion!==e)return void(n&&n());n&&this._weatherUnsubscribers.push(n)}}_cleanupWeatherSubscriptions(){const e=this._weatherUnsubscribers.length;e>0&&it(`Unsubscribing ${e} weather forecast subscription(s)`),this._weatherUnsubscribers.forEach(e=>{try{"function"==typeof e&&e()}catch(e){et("Failed to unsubscribe weather forecast",e)}}),this._weatherUnsubscribers=[]}_releaseActivePointerCapture(){this._releasingPointerCapture=!0;try{if(this._pointerCaptureTarget&&null!==this._capturedPointerId&&this._pointerCaptureTarget.hasPointerCapture?.(this._capturedPointerId))try{this._pointerCaptureTarget.releasePointerCapture(this._capturedPointerId)}catch{}this._pointerCaptureTarget=null,this._capturedPointerId=null}finally{this._releasingPointerCapture=!1}}_captureActivePointer(e){this._releaseActivePointerCapture();const t=e.currentTarget;if(t instanceof Element&&"function"==typeof t.setPointerCapture)try{t.setPointerCapture(e.pointerId),this._pointerCaptureTarget=t,this._capturedPointerId=e.pointerId}catch{}}_handlePointerDown(e){if(this._draft&&e.pointerId!==this._activePointerId)return;if("number"==typeof e.button&&0!==e.button)return;const t=this._pressPath(e),n=t?.path,i=this._startsOnRowLink(e,n),r=i?void 0:this._eventTapAt(e,n),a=i||r?void 0:this._monthPickAt(e,n),o=i||r||a?void 0:this._dayHitAt(e,n);e.currentTarget?.toggleAttribute?.("data-own-press",Boolean(i||r||o||a));const s=this._swipeStartsAt(e),l=this._draftAnchorFor(o),d=t?.lifts?this._moveFrom(e,r,t.path,t.handedTo):void 0,c=!i&&(void 0!==l||void 0!==d||this._holdRunsFor(r));(i?s:this._hasTapAction||c||r||o||a||s)&&!1!==e.isPrimary&&null===this._activePointerId&&(this._activePointerId=e.pointerId,this._pointerStart={x:e.clientX,y:e.clientY},this._pointerMoved=!1,this._holdTriggered=!1,this._pointerTapTarget=r??null,this._pointerDayHit=o??null,this._pointerMonthPick=a??null,this._pointerAddContext=i?null:this._addContextAt(e,n)??null,this._pointerDayAdd=i?null:this._dayAddAt(e,n)?.element??null,this._pointerHandedTo=t?.handedTo??null,this._pointerSwipeable=s,this._pointerOnLink=i,this._pointerDraftFrom=l??null,this._move=d??null,this._derivedClick=null,i||this._captureActivePointer(e),this._washDay(o),this._holdIndicator&&(md(this._holdIndicator),this._holdIndicator=null),c&&(this._holdTimer&&clearTimeout(this._holdTimer),this._holdTimer=window.setTimeout(()=>{if(this._activePointerId===e.pointerId){if(this._holdTriggered=!0,this._washDay(void 0),this._pointerDraftFrom)return void this._startDraft();if(this._move)return void this._startMove();this._holdIndicator&&(md(this._holdIndicator),this._holdIndicator=null),this._holdIndicator=function(e,t){const n=document.createElement("div");n.style.position="fixed",n.style.pointerEvents="none",n.style.borderRadius="50%",n.style.backgroundColor=t.accent_color,n.style.opacity=`${De.HOLD_INDICATOR_OPACITY}`,n.style.transform="translate(-50%, -50%) scale(0)",n.style.transition="transform 200ms ease-out",n.style.left=e.clientX+"px",n.style.top=e.clientY+"px";const i="touch"===e.pointerType?De.HOLD_INDICATOR.TOUCH_SIZE:De.HOLD_INDICATOR.POINTER_SIZE;return n.style.width=`${i}px`,n.style.height=`${i}px`,document.body.appendChild(n),setTimeout(()=>{n.style.transform="translate(-50%, -50%) scale(1)"},10),it("Created hold indicator"),n}(e,this.config)}},500)))}_syncNewShown(){const e=this._newShown;e&&(this._draftContext()===e.context?this._paintNew():this._drawingPress?this._draftStillShown():this._dropNew())}get _drawingPress(){return Boolean(this._draft||this._move?.started)}_draftAnchorFor(e){if(e&&"grid"===this.effectiveView&&this._dayTapsActive){if(e.allDay)return{allDay:!0,timestamp:e.timestamp};if(void 0!==e.minute)return{allDay:!1,point:{timestamp:e.timestamp,minute:e.minute}}}}_startDraft(){const e=this._pointerDraftFrom;e&&!this._draft&&(this._dropNew(),this._draft={anchor:e,moved:!1,under:this._pointerDayHit?.element??null},this._newShown={times:e.allDay?wd(e.timestamp,e.timestamp):yd(e.point,e.point,!1),title:"",calendarId:this._draftCalendarId(),context:this._draftContext(),inPopover:!1,saved:!1,arrived:!1},window.addEventListener("keydown",this._draftKeyDown,!0),window.addEventListener("pointerdown",this._draftSecondContact,!0),this._paintNew())}_draftContext(){const e=[...this.renderRoot.querySelectorAll(".grid-day-body")].map(e=>{const t=Kh(e);return"time"===t?.kind?vd(t.timestamp):""});return[this.effectiveView,this._pageShown,this._drawsNewEvents,...e].join("|")}_draftStillShown(){return!(!this._drawingPress||!this._newShown||this._draftContext()!==this._newShown.context&&(it("The days an event was drawn on are gone; throwing the press away"),this._endGesture(),1))}_moveDraft(e,t){if(!this._draftStillShown())return;const n=this._draft,i=this._newShown;if(!n||!i)return;const r=n.anchor,a=i.times;if(r.allDay){const t=Qh(this.renderRoot.querySelectorAll(".grid-day-header"),e);if(!t)return;i.times=wd(r.timestamp,t.timestamp),n.under=t.element}else{const a=Qh(this.renderRoot.querySelectorAll(".grid-day-body"),e);if(!a?.band)return;const o={timestamp:a.timestamp,minute:Yh(a.element.getBoundingClientRect(),t,a.band.startMin,a.band.endMin)};(function(e,t){return vd(e.timestamp)===vd(t.timestamp)&&e.minute===t.minute})(o,r.point)||(n.moved=!0),i.times=yd(r.point,o,n.moved),n.under=a.element}bd(a,i.times)||this._paintNew()}_paintNew(){const e=this._newShown;if(!e)return this._clearNewDrawing(),void this._markMoveOrigin();const t=this.effectiveConfig,n=this.effectiveLanguage,i=this.safeHass,r=(e,t)=>[...this.renderRoot.querySelectorAll(e)].flatMap(e=>{const n=Kh(e);return n?.kind===t?[{element:e,slot:n,day:vd(n.timestamp)}]:[]}),a=new Map,o=r(".grid-day-header","day").map(({day:e})=>e),s=this._newEventByDay(e,o);if(e.times.allDay||[...s.values()].some(e=>e._gridBanner)){const e=s,r=o.flatMap((t,n)=>e.has(t)?[n]:[]),l=e.values().next().value,d=[];if(l&&r.length){const e={...l,...l._gridSource??{}};let a=0;for(let s=1;s<=r.length;s++){if(s<r.length&&r[s]===r[s-1]+1)continue;const l=r[a],c=_c(e,o.slice(l,r[s-1]+1).map(e=>new Date(e)));c&&d.push(If(e,{...c,columnIndex:c.columnIndex+l},t,n,i)),a=s}}this._openBandForNew(d.length>0);const c=this.renderRoot.querySelector(".grid-allday-band");c&&d.length&&a.set(c,d)}else{this._openBandForNew(!1);const o=r(".grid-day-body","time"),s=this._newEventByDay(e,o.map(({day:e})=>e)),l=ma(t,"show_now_line"),d=new Date;d.setSeconds(0,0);for(const{element:e,slot:r,day:c}of o){const o=e.querySelector(":scope > .grid-day-plane"),u=s.get(c),h=u&&vc(u);if("time"!==r.kind||!o||!u||!h)continue;const m={startMin:r.startMin,endMin:r.endMin,usedFallback:!1},p=l&&c===vd(d.getTime())&&null!==tc(d,m)?Yd(d):null,f=this._coversAnEvent(o,h.startMin,h.endMin,m);a.set(o,Nf({...u,...h},m,f,p,t,n,this.weatherForecasts,i))}}for(const[e,t]of this._newHosts)a.has(e)&&t.parentNode===e||this._removeNewHost(e);for(const[e,t]of a){let n=this._newHosts.get(e);n?se(t,n,{host:this}):(n=document.createElement("div"),n.className=Of,n.setAttribute("data-add-draft",""),n.setAttribute("aria-hidden","true"),se(t,n,{host:this}),e.append(n),this._newHosts.set(e,n))}this._fitNewBlocks(),this._markMoveOrigin()}_coversAnEvent(e,t,n,i){const{topPct:r,heightPct:a}=Zh(t,n,i);return[...e.querySelectorAll(":scope > .grid-event")].some(e=>{const t=parseFloat(e.style.getPropertyValue("--calendar-card-grid-block-top")),n=parseFloat(e.style.getPropertyValue("--calendar-card-grid-block-height"));return t<r+a&&r<t+n})}_fitNewBlocks(){for(const e of[...this._newObserved])if(!e.isConnected){for(const[t,n]of this._gridDisclosureTargets)n===e&&(this._gridDisclosureObserver?.unobserve(t),this._gridDisclosureTargets.delete(t));this._newObserved.delete(e)}const e=[...this._newHosts.values()].flatMap(e=>[...e.querySelectorAll(":scope > .grid-event")]);if(!e.length)return;this._gridDisclosureObserver||this._syncGridDisclosureSafety(!1);const t=this._gridDisclosureObserver;if(!t)return;let n=!1;for(const i of e){this._newObserved.add(i);for(const e of[i,...i.querySelectorAll(".summary, .event-title")])this._gridDisclosureTargets.has(e)||(this._gridDisclosureTargets.set(e,i),t.observe(e),this._gridDisclosureDirty.add(i),n=!0)}n&&(this._scheduleGridDisclosureSafety(!1),this._syncTitleScroll())}_removeNewHost(e){this._newHosts.get(e)?.remove(),this._newHosts.delete(e)}_clearNewDrawing(){for(const e of[...this._newHosts.keys()])this._removeNewHost(e);this._fitNewBlocks()}_endDraft(){this._draft&&(this._draft=null,window.removeEventListener("keydown",this._draftKeyDown,!0),window.removeEventListener("pointerdown",this._draftSecondContact,!0),this._newShown?.inPopover||this._dropNew())}_dropNew(){this._clearNewDrawing(),this._newShown=null,this._markMoveOrigin(),this._openBandForNew(!1),void 0!==this._newTimer&&(clearTimeout(this._newTimer),this._newTimer=void 0)}_openBandForNew(e){e!==this._bandOpenForNew&&(this._bandOpenForNew=e,this.requestUpdate())}_followNew(e){const t=this._newShown;t?.inPopover&&(t.times=e.times,t.title=e.summary,t.calendarId=e.calendarId,t.location=e.location,t.description=e.description,this._paintNew())}_newClosed(){const e=this._newShown;e?.inPopover&&(e.inPopover=!1,e.saved&&!e.arrived?this._awaitArrival(e):this._dropNew())}_awaitArrival(e){this._newShown!==e||e.arrived||(void 0!==this._newTimer&&clearTimeout(this._newTimer),this._newTimer=window.setTimeout(()=>{this._newTimer=void 0,this._newShown===e&&this._dropNew()},5e3))}_newArrived(e){this._newShown===e&&(e.arrived=!0,e.inPopover||this._dropNew())}get _drawsNewEvents(){return"grid"===this.effectiveView&&this._dayTapsActive}_draftCalendarId(){return Vo(this._writableCalendars,this._activeHiddenCalendars)}_newEventSource(e){const{times:t}=e,n={start:t.allDay?{date:gl(t.start)}:{dateTime:t.start.toISOString()},end:t.allDay?{date:gl((i=t.end,new Date(i.getFullYear(),i.getMonth(),i.getDate()+1)))}:{dateTime:t.end.toISOString()}};var i;return e.moving?{...e.moving.source,...n,_entityId:e.calendarId}:{summary:e.title.trim()||Xs(this.effectiveLanguage).newEvent,...n,...e.location?.trim()&&{location:e.location},...e.description?.trim()&&{description:e.description},_entityId:e.calendarId}}_newEventByDay(e,t){const n=this.effectiveConfig,i=this._newEventSource(e),r=new Map,[a]=xu([i],n);if(a){const e=wu([a],n,this.isExpanded,this.effectiveLanguage,this.effectiveView,this.hass);for(const t of e){const e=t.events.find(e=>!e._isEmptyDay);e&&r.set(vd(t.timestamp),e)}if(r.size)return r}if(!t.length)return r;const o=a?._matchedConfig??n.entities.find(e=>"object"==typeof e&&e.entity===i._entityId),s={...i,..."object"==typeof o&&{_matchedConfig:o}};if(Zl(s)){const e=Ql(i,s._matchedConfig,this.effectiveLanguage);s.summary=e.title,s.location="",s.description="",s._privateTitle=e.locked.title||void 0}s._entityLabel=Fu(i._entityId,n,s);const l=new Date(Math.min(...t)),d=new Date(Math.max(...t)),c=new Date(d.getFullYear(),d.getMonth(),d.getDate()+1),u=_u(s,n);for(const e of gc(s,l,c)){const t=e.start.dateTime?new Date(e.start.dateTime):fl(e.start.date??"");r.set(vd(t.getTime()),u?{...e,_gridBanner:!0}:e)}return r}_draftBoxOn(e){const t=e.getBoundingClientRect(),n=Kh(e),i=this._newShown?.times,r=i&&!i.allDay&&"time"===n?.kind?function(e,t){const n=new Date(vd(t)),i=new Date(vd(t));if(i.setDate(i.getDate()+1),e.end<=n||e.start>=i)return;const r=e=>60*e.getHours()+e.getMinutes();return{fromMin:e.start<=n?0:r(e.start),untilMin:e.end>=i?1440:r(e.end)}}(i,n.timestamp):void 0;if(!r||"time"!==n?.kind)return t;const{topPct:a,heightPct:o}=Zh(r.fromMin,r.untilMin,n),s=t.top+t.height*a/100;return{left:t.left,right:t.right,top:s,bottom:s+t.height*o/100}}get _movesEvents(){return"grid"===this.effectiveView&&!this._isBeingEdited&&!1!==this.config.allow_event_edit&&[this.config.event_tap_action,this.config.event_hold_action].some(e=>"details"===ed(e))}_moveFrom(e,t,n,i){if(!t||!this._movesEvents)return;const r=t.element;if(!(r instanceof Element&&r.classList.contains("grid-event")))return;const{event:a}=t.target,o=a._entityId,s=dd(a);if(!o||!s?.uid)return;const l=function(e){const t=Td(e.dtstart,e.dtend);if(!t||t.allDay)return;const n=t.start.getTime(),i=t.end.getTime();return i<n?void 0:vd(n)===vd(Math.max(n,i-1))?t:void 0}(s);if(!l||!this._eventPermissions(a,s).canEdit)return;const d=n.find(e=>"time"===Kh(e)?.kind),c=Kh(d);return d&&"time"===c?.kind?{element:r,clickOwner:i??r,target:t.target,entry:s,times:l,key:{entityId:o,uid:s.uid,recurrenceId:s.recurrence_id,start:l.start.getTime()},grab:{timestamp:c.timestamp,minute:Rd(d.getBoundingClientRect(),e.clientY,c.startMin,c.endMin)},started:!1,left:!1,under:d}:void 0}_startMove(){const e=this._move;if(!e||e.started||this._draft)return;this._dropNew(),e.started=!0,this._washDay(void 0),this._holdIndicator&&(md(this._holdIndicator),this._holdIndicator=null);const{event:t}=e.target;this._newShown={times:e.times,title:"",calendarId:e.key.entityId,context:this._draftContext(),inPopover:!1,saved:!1,arrived:!1,moving:{key:e.key,source:t._source??t}},window.addEventListener("keydown",this._draftKeyDown,!0),window.addEventListener("pointerdown",this._draftSecondContact,!0),this._paintNew()}_followMove(e,t){if(!this._draftStillShown())return;const n=this._move,i=this._newShown;if(!n||!i)return;const r=Qh(this.renderRoot.querySelectorAll(".grid-day-body"),e);if(!r?.band)return;const a={timestamp:r.timestamp,minute:Rd(r.element.getBoundingClientRect(),t,r.band.startMin,r.band.endMin)},o=function(e,t,n){const i=De.ADD_SLOT_MINUTES,r=e.start,a=e.end.getTime()-r.getTime(),o=60*r.getHours()+r.getMinutes(),s=Math.ceil(a/6e4),l=Math.ceil(-o/i),d=Math.max(l,Math.min(Math.floor((1439-o)/i),Math.floor((1440-o-s)/i)));let c=Math.min(d,Math.max(l,Math.round((n.minute-t.minute)/i)));const u=Ad(new Date(vd(t.timestamp)),new Date(vd(n.timestamp))),h=Sd(new Date(vd(r.getTime())),u),m=e=>{const t=_d(h.getTime(),o+e*i);t.setSeconds(r.getSeconds(),r.getMilliseconds());const n=6e4*(r.getTimezoneOffset()-t.getTimezoneOffset()),a=new Date(t.getTime()+n);return 0!==n&&function(e,t){return Md(e)===Md(t)&&e.getHours()===t.getHours()&&e.getMinutes()===t.getMinutes()&&e.getSeconds()===t.getSeconds()}(a,t)?a:t};let p=m(c);for(let e=0;e<8&&c>l;e++){const e=p.getTime()+a;if(vd(Math.max(p.getTime(),e-1))===vd(p.getTime()))break;c-=1,p=m(c)}return{allDay:!1,start:p,end:new Date(p.getTime()+a)}}(n.times,n.grab,a);n.under=r.element,bd(i.times,o)||(i.times=o,bd(o,n.times)||(n.left=!0),this._paintNew())}_dropMove(e,t,n){if(!e.entry.recurrence_id&&!e.entry.rrule)return t.saved=!0,this._markMoveOrigin(),void this._writeMove(e,t);const i=e.under?this._draftBoxOn(e.under):void 0,r=this._detailsParams(e.target.event,e.target.color,{x:n.clientX,y:n.clientY,pointerType:n.pointerType,rect:i});r&&(t.inPopover=!0,this._openPopover({...r,moved:t.times,updated:(...n)=>(this._newShown===t&&(t.saved=!0,this._markMoveOrigin()),this._refreshAfterWrite({ids:n.length?n:[e.key.entityId]},()=>this._newArrived(t))),closed:()=>{this._newShown===t&&this._newClosed()}}))}async _writeMove(e,t){const n=this.safeHass,i=e.key.entityId;try{if(!n)throw new Error("Home Assistant is not connected");await zo(n,{entityId:i,uid:e.key.uid},Od(e.entry,t.times))}catch(e){return et("Moving the event failed",e),this._newShown===t&&this._dropNew(),void this._notify(Ho(e)??"Unknown error")}it(`Moved an event of ${i}`),this._refreshAfterWrite({ids:[i]},()=>this._newArrived(t)),this._awaitArrival(t);const r=Xs(this.effectiveLanguage);this._notify(function(e,t,n,i,r=!1){const a=Dl(t.start,i,r),o=Md(t.start)!==Md(e.start)?`${n.daysOfWeek[t.start.getDay()]} ${a}`:a;return n.movedTo.replace("{time}",o)}(e.times,t.times,r,Pl(this.effectiveConfig,n),this.effectiveConfig.time_two_digit_hours),{text:r.undo,action:()=>{this._undoMove(e,t)}})}async _undoMove(e,t){const n=this.safeHass,i=e.key.entityId;try{if(!n)throw new Error("Home Assistant is not connected");await zo(n,{entityId:i,uid:e.key.uid},Od(e.entry,e.times))}catch(e){return et("Moving the event back failed",e),void this._notify(Ho(e)??"Unknown error")}it(`Moved an event of ${i} back`),this._newShown===t&&this._dropNew(),this._refreshAfterWrite({ids:[i]})}_notify(e,t){const n=new Event("hass-notification",{bubbles:!0,composed:!0});n.detail=t?{message:e,action:t,duration:8e3}:{message:e},this.dispatchEvent(n)}_endMove(){const e=this._move;if(!e)return;if(this._move=null,!e.started)return;this._derivedClick={element:e.clickOwner,deadline:Date.now()+Se},this._draft||(window.removeEventListener("keydown",this._draftKeyDown,!0),window.removeEventListener("pointerdown",this._draftSecondContact,!0));const t=this._newShown;!t?.moving||t.inPopover||t.saved||this._dropNew()}_markMoveOrigin(){const e=this._newShown,t=e?.moving?.key,n=e?.saved?"dropped":"lifted",i=this.renderRoot.querySelectorAll(t?".grid-event":"[data-move-origin]");for(const e of i){const i=t&&!e.closest(`.${Of}`)?Hh(e):void 0;void 0!==t&&void 0!==i&&Nd(t,i.event._entityId,dd(i.event))?e.getAttribute("data-move-origin")!==n&&e.setAttribute("data-move-origin",n):e.removeAttribute("data-move-origin")}}_startsOnRowLink(e,t){return!!t&&function(e,t){for(const n of e){if(n===t)return!1;if("a"===n.localName&&n.classList?.contains(Bh))return!0}return!1}(t,e.currentTarget)}_holdRunsFor(e){return null!=e&&this._eventHoldRuns||this._hasHoldAction}_dayHitAt(e,t){if(this._dayTapsActive&&t)return Xh(t,e.currentTarget,{x:e.clientX,y:e.clientY})}_monthPickAt(e,t){if(this._drawsNarrowMonth&&!this._isBeingEdited&&t)return function(e,t){for(const n of e){if(n===t)return;const e=n?.calendarCardMonthPick;if(void 0!==e)return{element:n,timestamp:e}}}(t,e.currentTarget)}_addContextAt(e,t){const n=e=>e?.action===ye;if((n(this.config.tap_action)||n(this.config.hold_action))&&this._canAddEvents&&t)return Xh(t,e.currentTarget,{x:e.clientX,y:e.clientY},!0)}_dayAddAt(e,t=this._pathOf(e)){if(this._dayTapsActive&&t)return function(e,t){for(const n of e){if(n===t)return;const e=em(n);if(void 0!==e)return{element:n,timestamp:e}}}(t,e.currentTarget)}_washDay(e){const t=this._washedDay;if(t&&(t.removeAttribute("data-add-pressed"),t instanceof HTMLElement&&(t.style.removeProperty("--calendar-card-add-hour-top"),t.style.removeProperty("--calendar-card-add-hour-height")),this._washedDay=null),e){if(e.element.setAttribute("data-add-pressed",""),void 0!==e.minute&&e.band&&e.element instanceof HTMLElement){const{topPct:t,heightPct:n}=Zh(e.minute,e.minute+60,e.band);e.element.style.setProperty("--calendar-card-add-hour-top",`${t}%`),e.element.style.setProperty("--calendar-card-add-hour-height",`${n}%`)}this._washedDay=e.element}}_handlePointerMove(e){if(e.pointerId!==this._activePointerId||!this._pointerStart)return;if(this._draft)return void this._moveDraft(e.clientX,e.clientY);if(this._move?.started)return void this._followMove(e.clientX,e.clientY);if(this._holdTriggered)return;const t=e.clientX-this._pointerStart.x,n=e.clientY-this._pointerStart.y;if(!this._pointerMoved){if(Math.hypot(t,n)<=De.POINTER_MOVE_TOLERANCE)return;if(this._move&&"mouse"===e.pointerType)return this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._pointerMoved=!0,this._startMove(),void this._followMove(e.clientX,e.clientY);if(this._pointerDraftFrom&&"mouse"===e.pointerType)return this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._holdTriggered=!0,this._washDay(void 0),this._startDraft(),void this._moveDraft(e.clientX,e.clientY);this._pointerMoved=!0,this._washDay(void 0),this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._holdIndicator&&(md(this._holdIndicator),this._holdIndicator=null)}this._pointerSwipeable&&this._nudgeSwipe(t,n)}_handlePointerUp(e){if(e.pointerId!==this._activePointerId)return;if("number"==typeof e.button&&0!==e.button)return;this._liftingTouch="touch"===e.pointerType,this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null);const t=this._pointerTapTarget,n=this._pointerDayHit,i={...this._pointerStart??{x:e.clientX,y:e.clientY},pointerType:e.pointerType,rect:t?Hb(t.element)?.rect:void 0},r=this._cardActions(this._pointerAddContext,i);let a=!1;const o=this._move?.started&&this._draftStillShown()?this._move:null,s=o?this._newShown:null,l=this._draftStillShown()?this._draft:null,d=l?this._newShown:null,c=null!==o&&!o.left&&!this._holdRunsFor(t);if(o&&s&&o.left)bd(s.times,o.times)||(this._releasePressFocus(),this._dropMove(o,s,e));else if(l&&d){it("Adding the event drawn");const t=l.under?this._draftBoxOn(l.under):void 0;this._releasePressFocus(),this._openCreateEventDialog(d.times,{x:e.clientX,y:e.clientY,pointerType:e.pointerType,rect:t},!0),a=!0}else if(this._holdTriggered&&!c)t&&this._eventHoldRuns?(this._releasePressFocus(),this._runEventAction(t.target,"hold",i)):this._hasHoldAction&&(it("Executing hold action"),this._releasePressFocus(),Ro(this,this.config,"hold",r,this._shownEntries));else if(this._pointerMoved){if(this._pointerSwipeable){const t=this._pointerStart;t&&this._swipeEnded(e.clientX-t.x,e.clientY-t.y)}}else this._pointerOnLink||(t&&this._eventTapRuns?(this._releasePressFocus(),this._runEventAction(t.target,"tap",i)):this._pointerMonthPick?(this._selectMonthDay(this._pointerMonthPick.timestamp),a=!0):n&&this._dayTapsActive?(it("Executing day tap action"),this._releasePressFocus(),this._addEventAt(n,i),a=!0):this._hasTapAction&&(it("Executing tap action"),this._releasePressFocus(),Ro(this,this.config,"tap",r,this._shownEntries),a=!0));const u=this._pointerHandedTo??(t?t.element:this._pointerDayAdd??(a?null:void 0));this._derivedClick=void 0===u?null:{element:u,deadline:Date.now()+Se},this._endGesture()}_releasePressFocus(){const e=this.shadowRoot?.activeElement;e instanceof HTMLElement&&e.blur()}_handlePointerCancel(e){e.pointerId===this._activePointerId&&this._endGesture()}_endGesture(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._releaseActivePointerCapture(),this._activePointerId=null,this._pointerStart=null,this._pointerMoved=!1,this._holdTriggered=!1,this._pointerTapTarget=null,this._pointerDayHit=null,this._pointerMonthPick=null,this._pointerAddContext=null,this._pointerDayAdd=null,this._pointerHandedTo=null,this._pointerSwipeable=!1,this._pointerOnLink=!1,this._pointerDraftFrom=null,this._liftingTouch=!1,this._endDraft(),this._endMove(),this._washDay(void 0),this._springBackSwipe(),this._holdIndicator&&(md(this._holdIndicator),this._holdIndicator=null)}_handlePointerLeave(e){if(e.pointerId!==this._activePointerId)return;const t=e.currentTarget;t instanceof Element&&this._capturedPointerId===e.pointerId&&t.hasPointerCapture?.(e.pointerId)||this._handlePointerCancel(e)}_handleLostPointerCapture(e){this._releasingPointerCapture||e.pointerId!==this._activePointerId&&e.pointerId!==this._capturedPointerId||this._handlePointerCancel(e)}_swipeStartsAt(e){if("touch"!==e.pointerType&&"pen"!==e.pointerType)return!1;if(!this._swipeAvailable)return!1;const t=De.SWIPE_EDGE_GUARD,n=window.innerWidth;return e.clientX>=t&&(!(n>0)||e.clientX<=n-t)}_swipeDirection(e,t){const n=Math.abs(e);return n<De.SWIPE_MIN_DISTANCE||n<De.SWIPE_MIN_SLOPE_RATIO*Math.abs(t)?0:e<0!==this._cardRightToLeft?1:-1}_swipeEnded(e,t){const n=this._swipeDirection(e,t);if(0===n||!this._swipeAvailable)return;it("Swipe pages "+(n>0?"forward":"back"));const i=this._pageRequested;this._stepPage(n),this._pageRequested===i||Wb()||(this._swipeArrival={page:this._pageRequested,from:e<0?1:-1})}_nudgeSwipe(e,t){const n=Math.abs(e)>=De.SWIPE_MIN_SLOPE_RATIO*Math.abs(t);let i=this._swipeNudge;if(!i){if(!n||Wb())return;const e=this.renderRoot.querySelector(".content-container");if(!e)return;this._swipeMotion?.cancel(),this._swipeMotion=null,i=this._swipeNudge={element:e,offset:0}}const r=n?function(e){const t=De.SWIPE_NUDGE_MAX;return Math.sign(e)*t*(1-Math.exp(-Math.abs(e)/(2*t)))}(e):0;r!==i.offset&&(i.offset=r,0===r?qb(i.element):i.element.style.transform=`translateX(${r.toFixed(1)}px)`)}_springBackSwipe(){const e=this._swipeNudge;e&&(this._swipeNudge=null,qb(e.element),0!==e.offset&&this._startSwipeMotion(e.element,[{transform:`translateX(${e.offset.toFixed(1)}px)`},{transform:"translateX(0)"}],180))}_startSwipeMotion(e,t,n){if(this._swipeMotion?.cancel(),this._swipeMotion=null,"function"!=typeof e.animate||Wb())return;const i=e.animate(t,{duration:n,easing:"ease-out"});i.finished?.catch(()=>{}),this._swipeMotion=i}_syncSwipeArrival(){const e=this._swipeArrival;if(!e)return;if(!this._swipeAvailable)return void(this._swipeArrival=null);if(this._pageShown!==e.page||this.isInitialLoad)return;this._swipeArrival=null;const t=this.renderRoot.querySelector(".content-container");if(!t)return;const n=e.from*De.SWIPE_ARRIVAL_OFFSET;this._startSwipeMotion(t,[{transform:`translateX(${n}px)`,opacity:0},{transform:"translateX(0)",opacity:1}],220)}_handleKeyDown(e){if(!this._handleEventKeyDown(e)&&!this._handleMonthKeyDown(e)&&!(null!=e.currentTarget&&e.target!==e.currentTarget||"Enter"!==e.key&&" "!==e.key)){if(!this._hasTapAction)return;e.preventDefault(),Ro(this,this.config,"tap",this._cardActions(null,Hb(e.target)),this._shownEntries)}}_keyTargetOn(e){const t=this._eventsActivatable?Hh(e):void 0;if(t)return{event:t};const n=this._dayTapsActive?em(e):void 0;return void 0===n?void 0:{day:n}}_activate(e,t){"event"in e?this._runEventAction(e.event,this._eventTapRuns?"tap":"hold",t):(it("Executing day tap action"),this._addEventAt(void 0,t,e.day))}_handleEventKeyDown(e){if("Enter"!==e.key&&" "!==e.key)return!1;const t=this._keyTargetOn(e.target);return!!t&&(e.preventDefault(),e.stopPropagation(),e.repeat||("Enter"===e.key?this._activate(t,Hb(e.target)):this._spaceArmedOn=e.target),!0)}_handleKeyUp(e){if(" "!==e.key)return;const t=this._spaceArmedOn;this._spaceArmedOn=null;const n="month"===this.effectiveView?tm(e.target):void 0;if(void 0!==n){if(null===t||t!==e.target)return;return e.preventDefault(),e.stopPropagation(),void this._activateMonthCell(n,e.target)}const i=this._keyTargetOn(e.target);i&&null!==t&&t===e.target&&(e.preventDefault(),e.stopPropagation(),this._activate(i,Hb(e.target)))}_handleClick(e){const t=this._eventTapAt(e),n=t?void 0:this._dayAddAt(e),i=t||n?void 0:this._monthPickAt(e,this._pathOf(e)),r=t||n||i||0!==e.detail?void 0:this._wideMonthCellAt(e),a=this._derivedClick;a&&Date.now()>a.deadline&&(this._derivedClick=null);const o=t?.element??n?.element??i?.element??r?.element??null;if(this._derivedClick&&(null===o||o===this._derivedClick.element))return this._derivedClick=null,void(o&&e.stopPropagation());o&&(e.stopPropagation(),t?this._activate({event:t.target},Hb(t.element)):n?this._activate({day:n.timestamp},Hb(n.element)):i?this._selectMonthDay(i.timestamp):r&&this._activateMonthCell(r.timestamp,r.element))}_wideMonthCellAt(e){if("month"!==this.effectiveView||this._monthNarrow||this._isBeingEdited)return;const t=e.composedPath()[0],n=tm(t);return void 0!==n&&t instanceof HTMLElement?{element:t,timestamp:n}:void 0}setConfig(e){const t=this.config,n=this._instanceId;for(const t of function(e){const t=e,n=[];for(const[e,i]of Object.entries(xi))e in t&&n.push(`"${e}" was removed in v3.0.0 and is being ignored — use "${i}"`);const i=t.entities;return Array.isArray(i)&&i.forEach((e,t)=>{if("object"!=typeof e||null===e)return;const i=e;for(const[e,r]of Object.entries(ki))e in i&&n.push(`"${e}" on entities[${t}] was removed in v3.0.0 and is being ignored — use "${r}"`)}),n}(e))tt(t);const i=Si(mi,e);this.config=i,this.config.entities=fr(this.config.entities),Pi(this.config),function(e){for(const t of Hi)Gt(mi,t.split(".")[0])&&dr(t,Fi(e,t))}(this.config),function(e){for(const t of yi)bi(e[t],t)}(this.config),hr(this.config),function(e){const t=e.view;if(Ae.includes(t))return;const n=Ae.map(e=>`"${e}"`).join(" or ");et(`Ignoring "view: ${JSON.stringify(t)}": not a recognized view. Expected ${n}. Falling back to "list".`),e.view="list"}(this.config),Xa(this.config);for(const e of function(e){const t=Vt(e.toolbar)?e.toolbar.buttons:void 0;return Array.isArray(t)?t.filter(e=>!Ei(e)):[]}(this.config))et(`Toolbar button left out, as it cannot be drawn as written: ${JSON.stringify(e)}. Each needs an icon; a name and an entity are text, and a tap_action is an action.`);for(const e of function(e){const t=Vt(e.toolbar)?e.toolbar.view_switcher_layouts:void 0;return Array.isArray(t)?t.filter(e=>!Ae.includes(e)):[]}(this.config))et(`Layout left out of toolbar.view_switcher_layouts, as it names none: ${JSON.stringify(e)}. Expected ${Ae.map(e=>`"${e}"`).join(", ")}.`);for(const e of this.config.entities){const t="string"!=typeof e&&e.visibility?li(e.visibility):[];"string"!=typeof e&&0!==t.length&&et(`${e.entity}: some of its visibility conditions cannot be judged (${t.join(", ")}) and hide it wherever they would decide. A state or numeric_state condition that waits (for) or templates (value_template) needs entity_id, as Home Assistant's own Visibility editor writes it.`)}if(this.config.time_grid){const e=ma(this.config,"start_time"),t=ma(this.config,"end_time");Vd(e,t).usedFallback&&et(`Invalid time_grid time range "${e} - ${t}": expected HH:mm bounds with the end after the start (24:00 is allowed for the end). Falling back to ${Wd}-${Bd}.`);const n=this.config.time_grid.axis_width;void 0!==n&&ha(n).usedFallback&&et(`Invalid time_grid axis_width "${n}": expected a pixel length such as "128px", or "max-content". Other CSS lengths cannot be reserved before the grid is laid out, so the day columns would be fitted against the wrong axis width. Falling back to "max-content".`)}const r=this._syncDeviceChoice(e),a=r&&null!==this._pageRequested;a&&this._requestPage(null),r&&(this._carriedDay=null,this._monthSelection=null,this._monthFocusDay=null);const o=Co(this.requestedView,this.config,this._measuredWidthPx,null===this._measuredWidthPx?null:{view:this._effectiveView,columns:this._columnCount});this._effectiveView=o.view,this._columnCount=o.columns,this._instanceId!==n&&this._setFailures([]);const s=new Date,l=e=>Nl(e.first_day_of_week,this.hass?.locale),d=function(e,t){if(!e||0===Object.keys(e).length)return!0;const n=(e.entities||[]).map(e=>"string"==typeof e?e:e.entity).sort().join(","),i=(t.entities||[]).map(e=>"string"==typeof e?e:e.entity).sort().join(","),r=e?.refresh_interval!==t?.refresh_interval,a=n!==i||e.days_to_show!==t.days_to_show||e.start_date!==t.start_date||e.first_day_of_week!==t.first_day_of_week;return(a||r)&&it("Configuration change requires data refresh"),a||r}(So(t,l(t),!0,s),So(this.config,l(this.config),!0,s));var c,u;d?(it("Configuration changed, refreshing data"),this.updateEvents(this._appearLoadPending?"navigate":"network")):(c=t,u=this.config,c&&0!==Object.keys(c).length&&(gr(c.entities)!==gr(u.entities)||vr.some(e=>c[e]!==u[e]))?(it("Per-calendar configuration changed, reprocessing cached data"),this.updateEvents("reprocess")):a&&this._loadPage())}_syncDeviceChoice(e){const t=kb(e);if(t===this._configFingerprint)return!1;this._configFingerprint=t;const n=this._wantsViewSwitcher?function(e,t=$b()){return Cb(t)[e]?.view}(t):void 0;this._viewChoice=void 0!==n&&n!==this.config.view&&this._switcherViews.includes(n)?n:null;const i=new Set(lg(this.config.entities)),r=this._wantsLegend?Pb(t):void 0,a=(r??[]).filter(e=>i.has(e));return this._hiddenCalendars=a.length>0?new Set(a):Jb,this._hiddenMatchesStorage=void 0!==r,this._legendFold=null,!0}refreshEvents(e){return this.updateEvents("reload",e)}async updateEvents(e="cache",t){const n=!0===e?"network":!1===e?"cache":e;if(it(`Updating events (${n})`),!this.isConnected)return;const i=++this._eventRequestGeneration,r=()=>i!==this._eventRequestGeneration;this.safeHass&&this._initialLoadRetryId&&(clearTimeout(this._initialLoadRetryId),this._initialLoadRetryId=void 0);const a=this.safeHass;if(!a||!this.config.entities.length)return this.isLoading=!1,void(a?(this._loadedWindowShown=null,this._setFailures([]),this.isInitialLoad=!1):(this._initialLoadRetryId&&clearTimeout(this._initialLoadRetryId),this._initialLoadRetryId=window.setTimeout(()=>{this.updateEvents(n,t)},1500)));const o="navigate"===n;this._appearLoadPending=!1;const s=this._pageRequested,l=this._loadConfigForPage(s),d=this._instanceIdForPage(s),c=null===s?"persistent":"page",u="network"!==n&&"reload"!==n&&"live"!==n;this._failureCountQuery!==d&&(this._failureCountHint=0,this._failureCountQuery=d),"reload"===n&&function(e,t){const n=Tc(e),i=n?bc.get(n):void 0;if(!i)return;const r=new Set;for(const e of[...i.subscriptions.values()])t.includes(e.entityId)&&(Ec(i,e),r.add(e.entityId));for(const e of r)Cc(i,e)}(a,iu(a,l).entityIds);let h=null;if(u)try{h=Qc(a,l,d,c)}catch(e){et("Could not read cached events:",e)}null===h||"navigate"!==n&&"page"!==n&&"reprocess"!==n&&h.due||!h?o&&this.events.length>0&&this._dropUndrawableResidentEvents():(nt(`Drawing ${h.events.length} cached events`),this._commitEvents(h,d,s,l));const m=h?Date.now()-h.fetchedAt:1/0;if(!(!h||h.inFlight||"reprocess"!==n&&h.due||o&&!0===l.refresh_on_navigate&&0===h.failedEntities.length&&m>=5e3)&&h)return this.isLoading=!1,this._scheduleRefresh(h.nextAttemptAt),void this._syncLive();try{if(this.isLoading=!0,await this.updateComplete,r())return void it("Discarding a superseded event request");const e=this.isInitialLoad||!this._drawsEventOn(s),o=this._completeDrawing;let u;try{u=await eu(a,l,d,"reload"===n||"live"===n?n:"network",this._failureCountHint,t,c,e?e=>this._schedulePartialCommit(e,d,s,l,i):void 0)}finally{this._cancelPartialCommit(i)}if(r())return void it("Discarding a superseded event response");const h=u.failedEntities??[];h.length>0&&et(`Could not load calendar(s): ${h.join(", ")}`),this._failureCountHint=h.length>0?this._failureCountHint+1:0;const m=o.instanceId===d,p=h.length>0&&o.events.length>0&&m;this._commitEvents(p?this._keepFailedCalendars(a,l,u,o):u,d,s,l),this.isLoading=!1,this._scheduleRefresh(u.nextAttemptAt??Date.now()+this._refreshIntervalMs()),this._syncLive(),0===h.length&&nt("Event update completed successfully")}catch(e){if(r())return void it("Ignoring a failure from a superseded event request");Qe("Failed to update events:",e),this._failureCountHint+=1,this._setFailures(Array.from(new Set(l.entities.map(e=>"string"==typeof e?e:e.entity)))),this.isLoading=!1,this.isInitialLoad=!1,this._scheduleRefresh(Date.now()+Math.min(6e4*2**Math.min(this._failureCountHint-1,20),this._refreshIntervalMs())),this._syncLive()}}_commitEvents(e,t,n,i){const r=e.failedEntities??[];this.events=[...e.events??[]],this._eventsInstanceId=t,this._pageShown=n,this._recordLoadedWindow(i),this._eventsFetchedAt=e.loadedAt??e.fetchedAt??Date.now(),this._drawnRaw=e.raw??[],this._drawnLoadedAt=e.lastSuccess??{},this._completeDrawing={instanceId:t,events:this.events,raw:this._drawnRaw,loadedAt:this._drawnLoadedAt,fetchedAt:this._eventsFetchedAt},this._liveDriftLoaded="",this._setFailures(r),this.isInitialLoad=!1,0===r.length&&(this._lastUpdateTime=Date.now(),this._failureCountHint=0)}_recordLoadedWindow(e){const t=this._loadedWindowShown,n=$o(e);null!==t&&t.startDate===e.start_date&&t.days===e.days_to_show&&t.spansMonth===n||(this._loadedWindowShown={startDate:e.start_date,days:e.days_to_show,spansMonth:n})}_keepFailedCalendars(e,t,n,i){const r=n.lastSuccess??{},a=Date.now(),o=Object.fromEntries((n.failedEntities??[]).flatMap(e=>{if("number"==typeof r[e])return[];const t=Zb(i,e);return a-t<864e5?[[e,t]]:[]})),s=i.raw.filter(e=>"number"==typeof o[e._entityId??""]);return 0===s.length?n:(et(`Keeping the last events drawn of ${[...new Set(s.map(e=>e._entityId))].join(", ")}, which the cache could not carry`),function(e,t,n,i,r){const a=[...n.raw??[],...i],o=Nl(t.first_day_of_week,e.locale),s={...n.lastSuccess};let l=n.loadedAt??n.fetchedAt??Date.now();for(const e of i){const t=e._entityId?r[e._entityId]:void 0;e._entityId&&void 0!==t&&(s[e._entityId]=t,l=Math.min(l,t))}return{...n,raw:a,events:du(a,t,o),lastSuccess:s,loadedAt:l}}(e,t,n,s,o))}_drawnLoadedAtOf(e){return Zb({loadedAt:this._drawnLoadedAt,fetchedAt:this._eventsFetchedAt},e)}_schedulePartialCommit(e,t,n,i,r){r===this._eventRequestGeneration&&(this._partialCommit={partial:e,instanceId:t,page:n,loaded:i,generation:r},null===this._partialTimer&&(this._partialTimer=window.setTimeout(()=>{this._partialTimer=null;const e=this._partialCommit;if(this._partialCommit=null,!e||e.generation!==this._eventRequestGeneration||!this.isConnected)return;if(!this._partialDrawsAnEvent(e.partial.events,e.page))return;this.events=[...e.partial.events],this._drawnRaw=e.partial.raw??[],this._drawnLoadedAt=e.partial.lastSuccess??{},this._eventsInstanceId=e.instanceId,this._pageShown=e.page;const t=this._loadedWindowShown;null!==t&&t.startDate===e.loaded.start_date&&t.spansMonth===$o(e.loaded)||this._recordLoadedWindow(e.loaded),this._eventsFetchedAt=e.partial.fetchedAt,this._setFailures([]),this.isInitialLoad=!1},0)))}_drawsEventOn(e){if(0===this.events.length)return!1;let t=this._daysOnScreen(this.groupedEvents,this._pageShown);if(e!==this._pageShown){const n=this._daysSpan(e);t=t.filter(e=>e.timestamp>=n.from&&e.timestamp<n.until)}return aw(this.effectiveView,t,this.effectiveConfig)}_daysSpan(e){const t=this._pageRange(e);return{from:t.start.getTime(),until:Ju(t.start,t.days).getTime()}}_daysOnScreen(e,t){if("list"===this.effectiveView)return e;const n=this._shownColumnCount;if(this._wantsNavigation&&n>0&&n<this._viewDays){const n=this._pageRange(t),i=n.start.getTime(),r=Ju(n.start,n.days).getTime();return e.filter(e=>e.timestamp>=i&&e.timestamp<r)}if(n<=0||n>=e.length)return e;const i=function(e,t,n){if(t<=0||t>=e.length)return 0;const i=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),r=e.findIndex(e=>e.timestamp>=i);return Math.min(-1===r?e.length:r,e.length-t)}(e,n,new Date);return e.slice(i,i+n)}_partialDrawsAnEvent(e,t){const n=e.filter(e=>this._eventShown(e)),i=this._drawnConfig(t,this.effectiveView),r=wu(n,i,this.isExpanded,this.effectiveLanguage,this.effectiveView,this.hass);return aw(this.effectiveView,this._daysOnScreen(r,t),i)}_cancelPartialCommit(e){void 0!==e&&this._partialCommit?.generation!==e||(null!==this._partialTimer&&(clearTimeout(this._partialTimer),this._partialTimer=null),this._partialCommit=null)}_setFailures(e){const t=e.length!==this._failedEntities.length||e.some((e,t)=>e!==this._failedEntities[t]);this._failedEntities=[...e],t&&this.requestUpdate()}_dropUndrawableResidentEvents(){if(""===this._eventsInstanceId)return;const e=Date.now(),t=this._eventsInstanceId===this._instanceIdForPage(this._pageRequested),n=n=>t&&e-this._drawnLoadedAtOf(n._entityId)<864e5,i=this.events.filter(n);if(i.length>0){if(i.length===this.events.length)return;return this._eventsFetchedAt=Math.min(...i.map(e=>this._drawnLoadedAtOf(e._entityId))),this.events=i,void(this._drawnRaw=this._drawnRaw.filter(n))}this.events=[],this._drawnRaw=[],this._drawnLoadedAt={},this._eventsInstanceId="",this._setFailures([]),this.isInitialLoad=!0}hasCompactModeLimits(){if(!Ha(this.effectiveView))return!1;const e=e=>"number"==typeof e&&Number.isFinite(e),t=this.effectiveConfig;return!(!e(t.compact_events_to_show)&&!e(t.compact_days_to_show))||(t.entities??[]).some(t=>{return"object"==typeof t&&null!==t&&e(t.compact_events_to_show)&&(n=t,!(0!==(i=this._visibility).hidden.size&&"string"!=typeof n&&n.visibility&&i.hidden.has(ci(n.entity,n.visibility))));var n,i})}toggleExpanded(){this.hasCompactModeLimits()&&(this.isExpanded=!this.isExpanded)}handleAction(e){const t=e===this.config.hold_action?"hold":"tap";Ro(this,this.config,t,this._cardActions(),this._shownEntries)}render(){const e=this.getCustomStyles(),t={keyDown:e=>this._handleKeyDown(e),keyUp:e=>this._handleKeyUp(e),click:e=>this._handleClick(e),pointerDown:e=>this._handlePointerDown(e),pointerMove:e=>this._handlePointerMove(e),pointerUp:e=>this._handlePointerUp(e),pointerCancel:e=>this._handlePointerCancel(e),pointerLeave:e=>this._handlePointerLeave(e),lostPointerCapture:e=>this._handleLostPointerCapture(e),touchMove:this._drawsNewEvents||this._movesEvents?this._draftTouchMove:void 0,touchEnd:this._swallowTouchEnd,nativeDrag:this._movesEvents?this._refuseNativeDrag:void 0};let n,i=!1;const r=this._dayAddButtons,a=e=>this._daysOnScreen(e,this._pageShown);let o,s;this._monthListDrawn=null;const l=()=>s??=this._headerToolbar(),d=e=>{if("grid"===this.effectiveView)return jf(e,this.effectiveConfig,this.effectiveLanguage,this.weatherForecasts,this.safeHass,void 0,this._cascadeThresholds,this._overflowStripPct,this._eventsActivatable,r,this._bandOpenForNew,function(e,t,n){return n||"auto"!==ga(e,"grid").height}(this.config,0,this._holdsSectionsSlot));if("month"===this.effectiveView){const t=this._monthRowsStart(this._pageShown);return vv(e,t,this.effectiveConfig,this.effectiveLanguage,this._monthCapacity,this.safeHass,this._eventsActivatable,{more:(e,t)=>this._openDayPanel(e,t),narrow:o,focusDay:this._monthTabStop(t),scaleLines:this._monthScaleLines})}return"column"===this.effectiveView?rw(e,this.effectiveConfig,this.effectiveLanguage,this.weatherForecasts,this.safeHass,this._eventsActivatable,r):hw(e,this.effectiveConfig,this.effectiveLanguage,this.weatherForecasts,this.safeHass,this._eventsActivatable,r,this._headingMonth(l()))};if(this.isInitialLoad)n=sw("loading",this.effectiveLanguage,this.hass);else if(this.safeHass&&this.config.entities.length)if(this._shownFailures.length>0&&!this._holdsShownEvent)n=B``;else{const e=this._searchRing,t=e&&this._pageShown===e.page?e.target:null,s=function(e,t){if(!t)return{days:e,found:!1};let n=!1;const i=e.map(e=>e.events.some(e=>Rh(e,t))?(n=!0,{...e,events:e.events.map(e=>Rh(e,t)?{...e,_searchRing:!0}:e)}):e);return{days:n?i:e,found:n}}(a(this.groupedEvents),t);this._searchRingDrawn=s.found,this._searchRingBehindMore=null,this._searchRingPending=!1;const l=s.days,c="month"===this.effectiveView,u=c?this._monthRowsStart(this._pageShown):void 0,h=u&&this._monthNarrowView(u,t);o=h?h.narrow:void 0,this._monthListDrawn=h?h.list:null,h?(this._searchRingDrawn=h.ringed,this._searchRingPending=h.ringPending,h.behindMore&&e&&(this._searchRingBehindMore=Zu(e.day))):u&&e&&s.found&&(this._searchRingDrawn=function(e,t,n,i){return Xg(e,t,n,i).some(e=>e.layout.placements.some(e=>e.visible&&!0===e.item.event._searchRing))}(l,u,this._monthCapacity,Kg(this.effectiveConfig,this._monthScaleLines)),this._searchRingDrawn||(this._searchRingBehindMore=Zu(e.day))),n=d(l),i=c||void 0!==r&&l.length>0||this._eventsActivatable&&aw(this.effectiveView,l,this.effectiveConfig)||function(e,t,n){return!("month"===e||!ra.open_links.has(e)||!mf(n))&&t.some(e=>e.events.some(e=>{if(e._isEmptyDay)return!1;const t=Hm(hf(e,n),e._source);return void 0!==t.location||void 0!==t.description}))}(this.effectiveView,l,this.effectiveConfig)}else n=sw("error",this.effectiveLanguage,this.hass);const c=l();return ow(e,this.effectiveTitle,n,t,this.isLoading,this.isTitlePending,this.effectiveView,this._hasTapAction,this._hasHoldAction,this._renderFetchErrorNotice(),c,this._hostsControls(c,i),this._pageRequested!==this._pageShown&&!this.isInitialLoad,this._refreshPhase,this._swipeAvailable,this._tapControl(),this._weatherStale(Date.now()))}_weatherStale(e){const t=hp(this._weatherCurrentAt,this._weatherPlanned.types);return null!==t&&t<=e}_focusedTapTarget(){const e=this._focusedInCard();return e?e.matches("ha-card")?"card":e.matches(".card-tap-control")?"control":null:null}_keepTapFocus(){const e=this._tapFocusBefore;if(this._tapFocusBefore=null,!e)return;const t=this.shadowRoot?.querySelector("ha-card"),n=t?.querySelector(":scope > .card-tap-control"),i=n??(t?.hasAttribute("tabindex")?t:null);i&&i!==this.shadowRoot?.activeElement&&(null===this._focusedTapTarget()&&this.shadowRoot?.activeElement||i.focus({preventScroll:!0}))}_tapControl(){if(!this._hasTapAction)return;const e=this.config.tap_action?.action,t=e=>Ro(this,this.config,"tap",this._cardActions(null,Hb(e)),this._shownEntries),n=this._commandName(e);if(n)return{label:n.word??n.fallback,activate:t};const i=this._shownEntries[0],r="string"==typeof i?i:i?.entity;return{label:this.effectiveTitle?.trim()||(r?this._calendarName(r):""),expanded:"expand"===e&&this.hasCompactModeLimits()?this.isExpanded:void 0,activate:t}}_headerToolbar(){const e=this._legend(),t={heading:this._monthHeading(void 0!==e&&!e.folded),navigation:this._dateNavigation(),legend:e,viewSwitcher:this._viewSwitcher(),reset:this._resetButton(),refresh:this._refreshButton(),search:this._searchButton(),addEvent:this._addEventButton(),customButtons:this._customButtons()};this._toolbarRow=this._actionRow(t);const n=this._rowPlan(this._toolbarRow,this._toolbarWidthPx);return t.startFold=this._startFold(n),t.viewSwitcher&&n.collapsed&&(t.viewSwitcher={...t.viewSwitcher,collapsed:!0}),this._toolbarLabelMinWidthPx=this._toolbarLabelMinWidth(t),{labeled:this._toolbarLabeledFor(t),large:"large"===Di(this.config).size,...t}}_toolbarLabeledFor(e){const t=this._toolbarLabelMinWidth(e);if(null===this._toolbarWidthPx||null===t)return!1;const n=this._toolbarLabelsOverflowed,i=this._toolbarLabelSignature(e);return!(n&&n.signature===i&&this._toolbarWidthPx<=n.widthPx)&&this._toolbarWidthPx>=t}_toolbarLabelMinWidth(e){if(!e.viewSwitcher)return null;const t=[e.reset,e.refresh,e.search].filter(e=>void 0!==e).length;return _b(e.viewSwitcher.views.map(e=>e.view))+vb(wg(e).length)+vb(t)}_toolbarLabelSignature(e){return[this.effectiveLanguage,e.viewSwitcher?"views":"",e.addEvent?"add":"",e.reset?"reset":"",e.refresh?"refresh":"",e.search?"search":"",e.legend?.folded?"filter":"",`buttons:${e.customButtons?.length??0}`].join("\0")}_syncToolbarLabelFit(){const e=this.renderRoot.querySelector(".toolbar-actions");if(!e||!e.querySelector(".toolbar-button-label"))return;const t=e.getBoundingClientRect();if(0===t.width)return;const n=[...e.querySelectorAll(".toolbar-button, .view-switcher")].map(e=>e.getBoundingClientRect()).filter(e=>e.width>0&&e.height>0);if(0===n.length)return;const i=n.some(e=>e.right>t.right+.5||e.left<t.left-.5),r=Math.min(...n.map(e=>e.bottom)),a=n.some(e=>e.top>r-.5);(i||a)&&(it(`View switcher words do not fit at ${this._toolbarWidthPx}px`),this._toolbarLabelsOverflowed={widthPx:this._toolbarWidthPx??0,signature:this._toolbarLabelSignature(this._headerToolbar())},this.requestUpdate())}_hostsControls(e,t){return void 0!==e.navigation||void 0!==e.legend||void 0!==e.viewSwitcher||void 0!==e.reset||void 0!==e.refresh||void 0!==e.search||void 0!==e.addEvent||void 0!==e.customButtons||t}_renderFetchErrorNotice(){const e=this._shownFailures;return this.isInitialLoad||0===e.length?V:function(e,t,n){const i=Bm(Xs(t).loadFailed,Wm(t,n));return B`
    <div class="fetch-error" role="status">
      <ha-icon class="fetch-error-icon" icon="mdi:alert-circle-outline"></ha-icon>
      <span class="fetch-error-text">${i} ${e.join(", ")}</span>
    </div>
  `}(e.map(e=>gf(e,this.config,this.hass)),this.effectiveLanguage,this.hass)}_calendarName(e){return ff(e,this.config,this.hass)}_haString(e){const t=this.hass?.localize?.(e);return t&&t!==e?t:void 0}_newEventDate(){const e=this._pageRange(this._pageShown);if("month"===this.effectiveView){const e=new Date;return Uo(this._monthOwnDay(this._pageShown,e),1,e)}return Uo(e.start,e.days)}_addEventButton(){const e=Di(this.config);if(e.show&&e.addEvent&&0!==this._writableCalendars.length)return{label:qo(this.safeHass),onActivate:(e,t)=>{t&&this._releasePressFocus();const n=Hb(e);this._addEventAt(void 0,n&&{...n,...t&&{pointerType:t.pointerType},below:!0})}}}_addEventAt(e,t,n){const i=e?.timestamp??n??(this._drawsNarrowMonth?this._monthSelectedDay().getTime():void 0),r=void 0===i?function(e){const t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours());return{allDay:!1,start:t,end:new Date(t.getTime()+36e5)}}(this._newEventDate()):function(e,t,n=new Date){const i=new Date(e);if(i.setHours(0,0,0,0),"all-day"===t)return{allDay:!0,start:i,end:new Date(i)};const r=new Date(i);return void 0===t?r.setHours(n.getHours(),0,0,0):r.setHours(0,t,0,0),{allDay:!1,start:r,end:new Date(r.getTime()+36e5)}}(i,e?.allDay?"all-day":e?.minute),a=void 0!==e&&(void 0!==e.minute||!0===e.allDay);this._openCreateEventDialog(r,t,a)}_openCreateEventDialog(e,t,n=!1){if(this._isBeingEdited)return it("Not opening a new event while the card is being edited"),void this._dropNew();const i=this._writableCalendars,r=Vo(i,this._activeHiddenCalendars);if(!r)return void this._dropNew();let a=this._draft?this._newShown:null;a||this._dropNew(),n&&this._drawsNewEvents&&(a??={times:e,title:"",context:this._draftContext(),inPopover:!1,saved:!1,arrived:!1},a.times=e,a.calendarId=r,a.inPopover=!0,this._newShown=a,this._paintNew());const o=null!==a&&a.inPopover;this._openPopover({mode:"new",calendarId:r,calendars:i.map(e=>this._popoverCalendar(e)),times:e,canEdit:!0,canDelete:!1,anchor:t,updated:(...e)=>{const t=o&&a&&this._newShown===a?a:null;return t&&(t.saved=!0),this._refreshAfterWrite(e.length?{ids:e}:{feature:1},t?()=>this._newArrived(t):void 0)},changed:o?e=>{this._newShown===a&&this._followNew(e)}:void 0,closed:o?()=>{this._newShown===a&&this._newClosed()}:void 0})}_monthHeading(e){if(!Di(this.config).show)return;const t=new Date,n=this.effectiveLanguage,i=this._pageRange(this._pageRequested,t),r=!e&&this._monthFormShort(),a=r?"short":"long";return{text:uh(this._headerMonth(i),n,a),reserve:fh(n,a),full:fh(n,"long"),short:r,range:ah(i,n,t),languageMark:Wm(n,this.hass)}}_headingMonth(e){if(e.heading&&Lg(e))return this._headerMonth(this._pageRange(this._pageRequested,new Date))}_headerMonth(e){return"month"===this.effectiveView?nh(e):eh(e,this._listsLatestFirst)}_monthFitSignature(){return[this.effectiveLanguage,this.effectiveView,String(this._toolbarFontGeneration),this._wantsNavigation?"navigation":"",String(this.config.title_font_size??""),Di(this.config).size].join("\0")}_monthFormShort(){const e=this._monthFit;return!(!e||null===this._toolbarWidthPx)&&e.signature===this._monthFitSignature()&&this._toolbarWidthPx<e.fullFromPx}_syncMonthFit(){if(!this.isConnected)return;const e=this.renderRoot.querySelector(".toolbar-heading"),t=e?.querySelector(".toolbar-month"),n=t?.querySelector(".toolbar-month-probe");if(!e||!t||!n)return;this._watchToolbarFonts();const i=this.getBoundingClientRect().width,r=n.getBoundingClientRect().width,a=e.getBoundingClientRect(),o=t.getBoundingClientRect();if(i<=0||r<=0||a.width<=0)return;const s=getComputedStyle(e),l=parseFloat(s.columnGap)||0,d=e.querySelector(".date-navigation"),c=e.querySelector(".toolbar-heading-end")?(d?.getBoundingClientRect().width??0)+l:0,u=i+r-(("rtl"===s.direction?o.right-a.left-(parseFloat(s.paddingLeft)||0):a.right-(parseFloat(s.paddingRight)||0)-o.left)-c)-.5,h=this._monthFormShort();this._monthFit={signature:this._monthFitSignature(),fullFromPx:u},this._monthFormShort()!==h&&(it(`Month heading ${h?"fits in full":"shortened"} at ${Math.round(i)}px`),this.requestUpdate())}_syncHeadingMiddle(){const e=this.renderRoot.querySelector(".toolbar-heading"),t=e?.querySelector(".toolbar-month-cap");if(!e||!t)return;const n=e.getBoundingClientRect();if(n.height<=0)return;const i=t.getBoundingClientRect(),r=n.bottom-(parseFloat(getComputedStyle(e).paddingBottom)||0),a=`${Math.max(0,r-(i.top+i.bottom)/2).toFixed(2)}px`;e.style.getPropertyValue("--calendar-card-heading-middle")!==a&&e.style.setProperty("--calendar-card-heading-middle",a)}_dateNavigation(){if(!this._wantsNavigation)return;const e=new Date,t=this.effectiveLanguage,n=this._pageRange(this._pageRequested,e),i=this._listsLatestFirst;return{homeName:"month"===this.effectiveView?wh(this._homeRange(e),t,e):yh(this._homeRange(e),t,e,i),languageMark:Wm(t,this.hass),previousName:this._haString("ui.common.previous"),nextName:this._haString("ui.common.next"),inert:this._isBeingEdited,pickerValue:Xu(this._headerMonth(n)),homeConfirming:this._homeConfirming&&null===this._pageRequested,onPrevious:()=>this._stepPage(-1),onHome:()=>this._pressHome(),onNext:()=>this._stepPage(1),onPick:e=>this._pickDate(e)}}_pressHome(){const e=null!==this._pageRequested;this._isBeingEdited||(this._carriedDay=null),null===this._monthSelection&&null===this._monthFocusDay||this._isBeingEdited||(this._monthSelection=null,this._monthFocusDay=null,this.requestUpdate()),this._goToPage(null),e&&null===this._pageRequested&&(clearTimeout(this._homeConfirmTimer),this._homeConfirming=!0,this._homeConfirmTimer=setTimeout(()=>{this._homeConfirmTimer=void 0,this._homeConfirming=!1,this.requestUpdate()},1e3))}_settleHomeConfirmation(){clearTimeout(this._homeConfirmTimer),this._homeConfirmTimer=void 0,this._homeConfirming=!1}_stepPage(e){const t=this._pageRange(this._pageRequested);if("month"===this.effectiveView){const n=nh(t);return void this._goToPage(new Date(n.getFullYear(),n.getMonth()+e,1))}this._goToPage(function(e,t,n){return Ju(e,n*t)}(t.start,t.days,e))}_pickDate(e){if(!/^\d{4}-\d{2}-\d{2}$/.test(e))return;const t=Zu(e);if(isNaN(t.getTime()))return;if("month"===this.effectiveView)return void this._goToPage(new Date(t.getFullYear(),t.getMonth(),1));const n=this._homeRange();this._goToPage(th(n,t)?null:function(e,t,n){const i=Math.max(1,n),r=xl(t.start,Yu(e));return Ju(t.start,Math.floor(r/i)*i)}(t,n,n.days))}_goToPage(e){if(this._isBeingEdited)return void it("Not paging while the card is being edited");const t=null===e||("month"===this.effectiveView?Xu(bo(e,this._firstDayOfWeek))===Xu(this._monthRowsStart(null)):Xu(e)===Xu(this._homeRange().start))?null:Xu(e);t!==this._pageRequested&&(it(`Paging to ${t??"home"}`),this._requestPage(t),this.requestUpdate(),this._loadPage())}_requestPage(e){this._pageRequested=e,this._carriedDay=null,this._monthSelection&&this._monthSelection.page!==e&&(this._monthSelection=null),this._monthFocusDay=null,this._monthFocusPending=!1,this._swipeArrival=null,this._searchRing&&this._searchRing.page!==e&&this._settleSearchRing()}_loadPage(){if(null===this._pageRequested&&this._homeStale)return this._homeStale=!1,void this.updateEvents("network");this.updateEvents("page")}_refreshButton(){const e=Di(this.config);if(e.show&&e.refresh)return{label:this._haString("ui.common.refresh"),phase:"idle"!==this._refreshPhase?this._refreshPhase:this.isLoading?"turning":"idle",unasked:"idle"===this._refreshPhase&&this.isLoading,onActivate:()=>{this._isBeingEdited?it("Not refreshing from the toolbar while the card is being edited"):this._requestRefresh()}}}_requestRefresh(){if("idle"!==this._refreshPhase)return void it("Not refreshing: the last refresh is still showing");if(this.isLoading||this.isInitialLoad)return void it("Not refreshing: a load is already under way");it("Refreshing on request");const e=++this._refreshTicket,t=Date.now();this._setRefreshPhase("turning");const n=this.refreshEvents(),i=this._eventRequestGeneration;n.then(()=>!1,()=>!0).then(n=>{e===this._refreshTicket&&(i!==this._eventRequestGeneration&&this.isLoading?this._refreshAwaitsLoad={ticket:e,startedAt:t}:this._showRefreshOutcome(t,n||this._shownFailures.length>0))})}_showRefreshOutcome(e,t){const n=Math.max(0,1e3-(Date.now()-e));this._refreshPhaseTimer=setTimeout(()=>{this._setRefreshPhase(t?"failed":"done"),this._refreshPhaseTimer=setTimeout(()=>this._settleRefreshPhase(),1500)},n)}_syncReplacedRefresh(){const e=this._refreshAwaitsLoad;e&&!this.isLoading&&(this._refreshAwaitsLoad=null,e.ticket===this._refreshTicket&&this._showRefreshOutcome(e.startedAt,this._shownFailures.length>0))}_setRefreshPhase(e){this._refreshPhase=e,this.requestUpdate()}_settleRefreshPhase(){this._refreshTicket++,this._refreshAwaitsLoad=null,clearTimeout(this._refreshPhaseTimer),this._refreshPhaseTimer=void 0,"idle"!==this._refreshPhase&&this._setRefreshPhase("idle")}_searchButton(){const e=Di(this.config);if(e.show&&e.search&&e.navigation)return{label:this._haString("ui.common.search"),onActivate:(e,t)=>this._openSearch(e,t)}}_openSearch(e,t){if(this._isBeingEdited)return void it("Not searching while the card is being edited");const n=this._search??=new Ih(()=>this._searchHost(),{picked:e=>this._pickSearchResult(e),gone:()=>this._searchGone()});if(n.isOpen)return;n.prepare(),e.focus({preventScroll:!0}),this._searchPanelGone=!1;const i=Hb(e),r={source:n,anchor:i&&{...i,...t&&{pointerType:t.pointerType},below:!0},hang:"rtl"===getComputedStyle(e).direction?"right":"left",dark:this._panelsDark(),language:this.effectiveLanguage,pastOpacity:this.effectiveConfig.past_event_opacity/100},a=new Event("show-dialog",{bubbles:!0,composed:!0});a.detail={dialogTag:fw,dialogImport:()=>customElements.whenDefined(fw),dialogParams:r},this.dispatchEvent(a),it("Opened the search panel")}_searchHost(){return{hass:this.hass,config:this.config,viewConfig:this.effectiveConfig,view:this.effectiveView,language:this.effectiveLanguage,hidden:this._activeHiddenCalendars,visibility:this._visibility,held:this.events,today:this._haString("ui.components.calendar.today"),colorOf:e=>this._resolvedColor((e._mergedFrom?.length??0)>1&&this.effectiveConfig.duplicate_accent_color||Lu(e._entityId,this.config,void 0,e,Br())),nameOf:e=>this._calendarName(e),failedNameOf:e=>gf(e,this.config,this.hass)}}_pickSearchResult(e){this._settleSearchRing(),this._pickDate(e.day),"month"!==this.effectiveView||this._isBeingEdited||(this._monthSelection=jg(Zu(e.day),this._pageRequested),this._monthFocusDay=e.day),this._searchRing={target:e.target,page:this._pageRequested,day:e.day,focus:!0,listFitted:!1,inPanel:!1},it(`Search: paging to ${e.day} to ring a result`),this.requestUpdate()}_searchGone(){const e=e=>requestAnimationFrame(()=>setTimeout(e));e(()=>e(()=>{this._searchPanelGone=!0,this.requestUpdate()}))}_syncSearchRing(){const e=this._searchRing;if(!e)return;const t=this._searchRingBehindMore;if(void 0===e.until){if(this._searchRingPending)return;if(this._searchRingDrawn)this._startSearchRing(e);else{if(t){if(!this._searchPanelGone)return;const n=e.focus;return e.focus=!1,void this._ringBehindMore(e,t,n)}if(this._pageShown===e.page&&!this.isLoading&&!this.isInitialLoad)return it("Search: the page does not draw the result picked; nothing to ring"),void(this._searchRing=null)}}else if(t&&!e.inPanel&&!this._searchRingDrawn&&this._drawsNarrowMonth&&this._searchPanelGone){const n=e.focus||null!==this._focusedMonthListPart();return e.focus=!1,void this._ringBehindMore(e,t,n)}if(e.focus&&void 0!==e.until&&this._searchPanelGone){e.focus=!1,"month"===this.effectiveView&&(this._monthFocusDay=e.day,this.requestUpdate());const t=this.renderRoot.querySelector(".search-ring"),n=t?.matches(Yb)?t:t?.querySelector(Yb);n?.focus({preventScroll:!0}),t?.scrollIntoView?.({block:"nearest",inline:"nearest"})}}_ringBehindMore(e,t,n){this._startSearchRing(e),e.inPanel=!0;const i=this._drawsNarrowMonth?this.renderRoot.querySelector(".month-day-list .month-day-list-more"):null,r=this._monthCellFor(t);i?this._openDayPanel(t,i,n,!0):r&&this._openDayPanel(t,r,n),it('Search: the pick is behind "+N more"; ringing it in its day\'s panel')}_startSearchRing(e){e.until=Date.now()+2e3,clearTimeout(this._searchRingTimer),this._searchRingTimer=setTimeout(()=>this._settleSearchRing(),2e3)}_settleSearchRing(){clearTimeout(this._searchRingTimer),this._searchRingTimer=void 0,null!==this._searchRing&&(this._searchRing=null,this.requestUpdate())}_panelsDark(){return this.safeHass?.themes?.darkMode??window.matchMedia?.("(prefers-color-scheme: dark)")?.matches??!1}get _wantsLegend(){const e=Di(this.config);return e.show&&!1!==e.legend&&lg(this.config.entities).length>0}get _wantsLegendChips(){return this._wantsLegend&&"chips"===Di(this.config).legend}_legend(){if(!this._wantsLegend)return;const e=this._legendCalendarIds();if(0===e.length)return;const t=this._activeHiddenCalendars,n=Br(),i=Xs(this.effectiveLanguage),r=e.map(e=>({id:e,name:this._calendarName(e),color:Lu(e,this.effectiveConfig,void 0,void 0,n),shown:!t.has(e)}));return{calendars:r,name:this._haString("ui.components.calendar.my_calendars"),folded:!this._wantsLegendChips||this._legendFoldedFor(this._legendSignature(r)),inert:this._isBeingEdited,showAllLabel:i.showAll,hideAllLabel:i.hideAll,onToggle:e=>this._toggleCalendar(e),onSetAll:e=>this._setAllCalendars(e)}}_legendSignature(e){return[this.effectiveLanguage,this.effectiveView,String(this._toolbarFontGeneration),this._wantsNavigation?"navigation":"",String(this.config.title_font_size??""),Di(this.config).size,...e.map(e=>`${e.id}${e.name}`)].join("\0")}_legendFoldedFor(e){const t=this._legendFold;return!(!t||t.signature!==e)&&(null===this._legendWidthPx||this._legendWidthPx<t.unfoldAtPx)}_legendMenuMayStayOpen(){return!(!this._wantsLegend||this._isBeingEdited||this.hidden)&&!0===this._legend()?.folded}_toggleCalendar(e){const t=new Set(this._hiddenCalendars);t.has(e)?t.delete(e):t.add(e),this._hideCalendars(t,`${t.has(e)?"Hid":"Showed"} ${e}`)}_setAllCalendars(e){const t=this._legendCalendarIds(),n=[...this._hiddenCalendars].filter(e=>!t.includes(e)),i=new Set(e?n:[...n,...t]);this._hideCalendars(i,e?"Showed every calendar":"Hid every calendar")}_hideCalendars(e,t){this._isBeingEdited?it("Not hiding calendars while the card is being edited"):this._wantsLegend&&(this._hiddenCalendars=e.size>0?e:Jb,null!==this._configFingerprint&&(this._hiddenMatchesStorage=function(e,t,n=$b(),i=Date.now()){return Eb(e,{hidden:Tb(t)},n,i)}(this._configFingerprint,[...e])),this._announceHiddenCalendars([...e],this._hiddenMatchesStorage),it(t),this.requestUpdate())}_announceHiddenCalendars(e,t){if(null===this._configFingerprint)return;const n={fingerprint:this._configFingerprint,hidden:e,stored:t,source:this};window.dispatchEvent(new CustomEvent(ig,{detail:n}))}_syncLegendFit(e=!0){if(!this.isConnected||!this._wantsLegendChips)return;this._watchToolbarFonts();const t=this.getBoundingClientRect().width;if(t<=0)return;if(e||null===this._legendWidthPx)this._legendWidthPx=t;else if(Math.abs(t-this._legendWidthPx)>.5)return void this._scheduleLegendFit();const n=this.renderRoot.querySelector(".toolbar-legend"),i=n?.querySelector(".legend-chips");if(!n||!i){const n=null!==this.renderRoot.querySelector(".legend-button");return void(e&&n&&!1===this._legend()?.folded&&(this._legendUnfoldedAtPx=t,this.requestUpdate()))}const r=i.getBoundingClientRect().width,a=this._legendChipsRoom(n);if(r<=0||null===a)return;if(r<=a+.5)return void(this._legendUnfoldedAtPx=null);const o=this._legend();if(!o)return;const s=Math.ceil(t+r-a)+De.LEGEND_UNFOLD_MARGIN;this._legendWidthPx=t,this._legendFold={signature:this._legendSignature(o.calendars),unfoldAtPx:Math.max(s,(this._legendUnfoldedAtPx??0)+1)},this._legendUnfoldedAtPx=null,it(`Legend chips need ${Math.ceil(r)}px of ${Math.floor(a)}px; folded until ${this._legendFold.unfoldAtPx}px`),this.requestUpdate()}_legendChipsRoom(e){const t=e.parentElement,n=t?.querySelector(".toolbar-month-probe");if(!t||!n)return null;const i=t.getBoundingClientRect().width,r=n.getBoundingClientRect().width;if(i<=0||r<=0)return null;const a=getComputedStyle(t),o=getComputedStyle(e),s=e=>parseFloat(e)||0,l=t.querySelector(".date-navigation"),d=t.querySelector(".toolbar-month"),c=d?s(getComputedStyle(d).marginInlineStart):0;return i-s(a.paddingLeft)-s(a.paddingRight)-(r+c)-(l?.getBoundingClientRect().width??0)-2*s(a.columnGap)-s(o.paddingLeft)-s(o.paddingRight)-s(o.marginLeft)-s(o.marginRight)}_scheduleLegendFit(){this._wantsLegendChips&&null===this._legendFitRaf&&(this._legendFitRaf=requestAnimationFrame(()=>{this._legendFitRaf=null,this._syncLegendFit()}))}_watchToolbarFonts(){if(this._toolbarFontsCleanup)return;const e="undefined"==typeof document?void 0:document.fonts;if(!e||"function"!=typeof e.addEventListener)return;const t=()=>{this.isConnected&&Di(this.config).show&&(this._toolbarFontGeneration++,this.requestUpdate())};e.addEventListener("loadingdone",t),this._toolbarFontsCleanup=()=>e.removeEventListener("loadingdone",t)}_customButtons(){const e=Di(this.config);if(e.show&&0!==e.buttons.length)return e.buttons.map(e=>({icon:e.icon.trim(),...this._customButtonNames(e),onActivate:(t,n)=>this._pressCustomButton(e,t,n)}))}_customButtonNames(e){const t="string"==typeof e.name?e.name.trim():"";if(""!==t)return{label:t,tooltip:t};const n=this._commandName(e.tap_action?.action);if(n)return{label:n.word??n.fallback,tooltip:n.word};const i=e.icon.trim(),r=function(e){return e.slice(e.indexOf(":")+1).split(/[-_\s]+/).filter(e=>""!==e).join(" ")}(i)||i;return Qb.has(i)||(Qb.add(i),it(`Toolbar button ${i} has no name; screen readers hear "${r}"`)),{label:r,tooltip:void 0}}_commandName(e){switch(e){case be:return{word:this._haString("ui.common.back"),fallback:"Back"};case"refresh":return{word:this._haString("ui.common.refresh"),fallback:cg};case ye:return{word:qo(this.safeHass),fallback:Bo};case we:return{word:this._haString("ui.common.reset"),fallback:ug};default:return}}_pressCustomButton(e,t,n){if(this._isBeingEdited)return void it("Not running a toolbar button while the card is being edited");n&&this._releasePressFocus();const i=Hb(t),r=i&&{...i,...n&&{pointerType:n.pointerType},below:!0};!function(e,t,n,i={}){const r=t.tap_action;r&&"string"==typeof r.action&&"none"!==r.action&&(Fo(r,i)||(Lo(e,{entity:t.entity??Po(n),tap_action:r},"tap"),it(`Delegated toolbar button action (${r.action}) to HA native handler`)))}(this,e,this._shownEntries,this._cardActions(null,r))}_actionRow(e){const t=[];return e.reset&&t.push("reset"),e.refresh&&t.push("refresh"),e.search&&t.push("search"),{start:wg(e),end:t,views:e.viewSwitcher?.views.length??0,insetPx:De.TOOLBAR_ROW_INSET[this.effectiveView]}}_rowPlan(e,t){const n=t??0;return function(e,t,n={atLeast:0,collapse:!1}){const i=e.views>0&&(n.collapse||t<function(e){return e.views>0?yb(e,function(e){return e.start.length>=3?2:e.start.length}(e)):0}(e));return{...wb(e,t,i?e.start.length:n.atLeast),collapsed:i}}(e,n,this._foldRequest(e,n))}_startFold(e){if(0!==e.overflow.length)return{plan:e,menuName:this._haString("ui.common.menu"),inert:this._isBeingEdited}}_rowPlanKey(e){const t=this._toolbarRow;if(null===t)return"";const n=this._rowPlan(t,e);return`${n.overflow.length}:${n.collapsed?"collapsed":"segments"}`}_foldRequest(e,t){const n=this._startFoldGuard;return null===n||n.widthPx!==t||n.signature!==JSON.stringify(e)?{atLeast:0,collapse:!1}:n.request}_syncStartFoldFit(){const e=this._toolbarWidthPx,t=this._toolbarRow,n=this.renderRoot.querySelector(".toolbar-actions");if(null===e||null===t||!n)return;if(n.querySelector(".toolbar-button-label"))return;const i=n.getBoundingClientRect();if(0===i.width)return;const r=[...n.querySelectorAll(".toolbar-button, .view-switcher")].map(e=>e.getBoundingClientRect()).filter(e=>e.width>0&&e.height>0);if(0===r.length)return;const a=r.some(e=>e.right>i.right+.5||e.left<i.left-.5),o=Math.min(...r.map(e=>e.bottom)),s=r.some(e=>e.top>o-.5);if(!a&&!s)return;const l=this._rowPlan(t,e),d=l.overflow.length;let c;if(t.start.length>=3&&d<t.start.length-1)c={atLeast:d+1,collapse:!1};else{if(!(t.views>0)||l.collapsed)return;c={atLeast:d,collapse:!0}}it(`Toolbar row does not fit on one line at ${e}px; folding one more step`),this._startFoldGuard={widthPx:e,signature:JSON.stringify(t),request:c},this.requestUpdate()}_startMenuMayStayOpen(){return!this._isBeingEdited&&!this.hidden&&void 0!==this._headerToolbar().startFold}_focusedInCard(){return this.isConnected?this.shadowRoot?.activeElement??null:null}_focusedStartControl(){const e=this._focusedInCard();return e instanceof HTMLElement&&!0===e.parentElement?.classList.contains("toolbar-start")?e.classList.contains("add-event-button")?{kind:"add"}:e.classList.contains("custom-button")?{kind:"button",index:[...this.renderRoot.querySelectorAll(".toolbar-start > .custom-button")].indexOf(e)}:null:null}_handFocusToMenu(){const e=this._focusBeforeFold;this._focusBeforeFold=null;const t=this._toolbarRow,n=this._toolbarWidthPx;if(null===e||null===t||null===n)return;const{overflow:i}=this._rowPlan(t,n);i.some(t=>t.kind===e.kind&&("button"!==t.kind||"button"===e.kind&&t.index===e.index))&&this.renderRoot.querySelector(".custom-menu-button")?.focus({preventScroll:!0})}_focusedSwitcherForm(){const e=this._focusedInCard();return e instanceof HTMLElement?e.classList.contains("view-switcher-segment")?"segment":e.classList.contains("view-switcher-pill")?"pill":null:null}_handFocusAcrossSwitcher(){const e=this._switcherFocusBefore;if(this._switcherFocusBefore=null,null===e||null!==this._focusedSwitcherForm())return;const t="segment"===e?this.renderRoot.querySelector(".view-switcher-pill"):this.renderRoot.querySelector(".view-switcher-segment.selected");t?.focus({preventScroll:!0})}_layoutMenuMayStayOpen(){return!this._isBeingEdited&&!this.hidden&&!0===this._headerToolbar().viewSwitcher?.collapsed}get _wantsViewSwitcher(){return this._switcherViews.length>0}get _switcherViews(){return Ci(this.config)}_viewSwitcher(){if(!this._wantsViewSwitcher)return;const e=Xs(this.effectiveLanguage),t=this._switcherViews.map(t=>({view:t,label:e[pg[t]]})),n=this._isBeingEdited?this.config.view:this.requestedView,i=t.find(e=>e.view===n)?.label??"";return{views:t,selected:n,name:e.layout,currentName:e.layoutCurrent.replace("{view}",()=>i),inert:this._isBeingEdited,onSelect:e=>this._chooseView(e)}}_chooseView(e){if(this._isBeingEdited)return void it("Not switching views while the card is being edited");if(!this._switcherViews.includes(e))return;const t=e===this.config.view?null:e;if(null!==this._configFingerprint&&function(e,t,n=$b(),i=Date.now()){Eb(e,{view:t},n,i)}(this._configFingerprint,t??void 0),t===this._viewChoice&&e===this._effectiveView)return;const n=this._dateInView(),i=this._effectiveView;this._viewChoice=t;const r=Eo(this.requestedView,this.config,this._measuredWidthPx);it(`Switched to ${e}, drawn as ${r.view}/${r.columns}`),this._effectiveView=r.view,this._columnCount=r.columns,r.view!==i&&this._openOnDate(n),this.requestUpdate()}_dateInView(e=new Date){const t=this._pageRequested;if("month"===this.effectiveView){const n=zg(this._monthSelection,t,this._monthRowsStart(t,e),e);return null!==n?n:null===t?null:this._monthOwnDay(t,e)}return null!==t?Zu(t):null===this._carriedDay?null:Zu(this._carriedDay)}_openOnDate(e){if(this._monthSelection=null,this._monthFocusDay=null,this._carriedDay=null,this._goToPage(e),null===e)return;const t=gl(e);"month"===this.effectiveView?(this._monthSelection={page:this._pageRequested,day:t},this._monthFocusDay=t):null===this._pageRequested&&(this._carriedDay=t)}get _hasExpandAction(){const e=this.config.tap_action,t=this.config.hold_action;return"expand"===e?.action||"expand"===t?.action}get _hasResettable(){return this._wantsNavigation||this._wantsViewSwitcher||this._wantsLegend||this._hasExpandAction}get _wantsReset(){const e=Di(this.config);return e.show&&e.reset&&this._hasResettable}get _canReset(){return!this._isBeingEdited&&(this._hasResettable||this.isExpanded&&this.hasCompactModeLimits())}get _differsFromConfiguration(){return!this._isBeingEdited&&(null!==this._pageRequested||this._viewChoiceShows||this._legendHidesAShownCalendar||this.isExpanded&&this.hasCompactModeLimits()||this._monthSelectionAway)}get _viewChoiceShows(){return null!==this._viewChoice}_resetButton(){if(this._wantsReset)return{label:this._haString("ui.common.reset"),active:this._differsFromConfiguration,confirmation:this._resetConfirmation??void 0,onActivate:()=>this._resetToConfiguration()}}_confirmReset(){clearTimeout(this._resetConfirmTimer),this._resetConfirmation="showing",this._resetConfirmTimer=setTimeout(()=>{this._resetConfirmation="leaving",this.requestUpdate(),this._resetConfirmTimer=setTimeout(()=>{this._resetConfirmTimer=void 0,this._resetConfirmation=null,this.requestUpdate()},200)},1e3)}_settleResetConfirmation(){clearTimeout(this._resetConfirmTimer),this._resetConfirmTimer=void 0,this._resetConfirmation=null}_resetToConfiguration(){if(this._isBeingEdited)it("Not resetting while the card is being edited");else if(this._canReset){if(it("Resetting to the configuration"),null!==this._configFingerprint&&(this._hiddenMatchesStorage=function(e,t=$b()){const n=Cb(t);return Object.prototype.hasOwnProperty.call(n,e)?(delete n[e],Ab(t,n)):null!==t}(this._configFingerprint)),null!==this._viewChoice){this._viewChoice=null;const e=Eo(this.requestedView,this.config,this._measuredWidthPx);this._effectiveView=e.view,this._columnCount=e.columns}this._hiddenCalendars.size>0&&(this._hiddenCalendars=Jb,this._announceHiddenCalendars([],this._hiddenMatchesStorage)),this.isExpanded=!1,this._monthSelection=null,this._monthFocusDay=null,this._carriedDay=null,this._goToPage(null),this._wantsReset&&this._confirmReset(),this.requestUpdate()}}_resetFromAction(){this._differsFromConfiguration?this._resetToConfiguration():it("Nothing to reset")}};tx.getStubConfig=br,Rb([me({attribute:!1})],tx.prototype,"hass",2),Rb([me({attribute:!1})],tx.prototype,"config",2),Rb([me({attribute:!1})],tx.prototype,"events",2),Rb([me({attribute:!1})],tx.prototype,"isInitialLoad",2),Rb([me({attribute:!1})],tx.prototype,"isLoading",2),Rb([me({attribute:!1})],tx.prototype,"isExpanded",2),Rb([me({attribute:!1})],tx.prototype,"weatherForecasts",2),Rb([me({attribute:!1})],tx.prototype,"renderedTitle",2),Rb([me({type:Boolean})],tx.prototype,"preview",2),Rb([me({type:Boolean})],tx.prototype,"editMode",2),Rb([me({attribute:!1})],tx.prototype,"layout",2),tx=Rb([(e=>(t,n)=>{void 0!==n?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)})("calendar-card-pro")],tx);const nx=customElements.get("calendar-card-pro");nx&&(nx.getStubConfig=br),window.customCards=window.customCards||[],window.customCards.push({type:"calendar-card-pro",name:"Calendar Card Pro",preview:!0,description:"A calendar card that supports multiple calendars with individual styling.",documentationURL:"https://calendar-card-pro.alexpfau.com",getEntitySuggestion:function(e,t){if("string"!=typeof t||"calendar"!==t.split(".")[0])return null;if(!e||"object"!=typeof e)return null;const n=e.states;if(!n||"object"!=typeof n||!n[t])return null;const i=function(e){if(!e||"object"!=typeof e)return;const t=Object.keys(e).filter(e=>e.startsWith("weather."));return 1===t.length?t[0]:void 0}(n);return[{label:"Interactive List",config:{...wr([t]),...yr(i),grid_options:{..._r}}},{label:"Interactive Time Grid",config:{...wr([t]),view:"grid",...yr(i),grid_options:{..._r}}},{config:{...wr([t]),grid_options:{..._r}}},{label:"Columns",config:{...wr([t]),view:"column",grid_options:{..._r}}},{label:"Time Grid",config:{...wr([t]),view:"grid",grid_options:{..._r}}}]}});export{Kb as GRID_DETAIL_ROWS,Ob as adoptEditorComponent,Gb as fittedGridDetailLines,Ub as gridContentOverflows,Vb as resolveLineHeightPx};
