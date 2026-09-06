function t(t,e,a,r){var o,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,a,r);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(n=(i<3?o(n):i>3?o(e,a,n):o(e,a))||n);return i>3&&n&&Object.defineProperty(e,a,n),n}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,a=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let i=class{constructor(t,e,a){if(this._$cssResult$=!0,a!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(a&&void 0===t){const a=void 0!==e&&1===e.length;a&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),a&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const a=1===t.length?t[0]:e.reduce((e,a,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[r+1],t[0]);return new i(a,t,r)},s=a?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const a of t.cssRules)e+=a.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,r))(e)})(t):t,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,w=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let a=t;switch(e){case Boolean:a=null!==t;break;case Number:a=null===t?null:Number(t);break;case Object:case Array:try{a=JSON.parse(t)}catch(t){a=null}}return a}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const a=Symbol(),r=this.getPropertyDescriptor(t,a,e);void 0!==r&&d(this.prototype,t,r)}}static getPropertyDescriptor(t,e,a){const{get:r,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:r,set(e){const i=r?.call(this);o?.call(this,e),this.requestUpdate(t,i,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const t=this.properties,e=[...c(t),...p(t)];for(const a of e)this.createProperty(a,t[a])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,a]of e)this.elementProperties.set(t,a)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const a=this._$Eu(t,e);void 0!==a&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const a=new Set(t.flat(1/0).reverse());for(const t of a)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const a=e.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const a of e.keys())this.hasOwnProperty(a)&&(t.set(a,this[a]),delete this[a]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,r)=>{if(a)t.adoptedStyleSheets=r.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const a of r){const r=document.createElement("style"),o=e.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=a.cssText,t.appendChild(r)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,a){this._$AK(t,a)}_$ET(t,e){const a=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,a);if(void 0!==r&&!0===a.reflect){const o=(void 0!==a.converter?.toAttribute?a.converter:_).toAttribute(e,a.type);this._$Em=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const a=this.constructor,r=a._$Eh.get(t);if(void 0!==r&&this._$Em!==r){const t=a.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=r;const i=o.fromAttribute(e,t.type);this[r]=i??this._$Ej?.get(r)??i,this._$Em=null}}requestUpdate(t,e,a,r=!1,o){if(void 0!==t){const i=this.constructor;if(!1===r&&(o=this[t]),a??=i.getPropertyOptions(t),!((a.hasChanged??y)(o,e)||a.useDefault&&a.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,a))))return;this.C(t,e,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:a,reflect:r,wrapped:o},i){a&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==o||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||a||(e=void 0),this._$AL.set(t,e)),!0===r&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,a]of t){const{wrapped:t}=a,r=this[e];!0!==t||this._$AL.has(e)||void 0===r||this.C(e,void 0,a,r)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[w("elementProperties")]=new Map,x[w("finalized")]=new Map,v?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=t=>t,A=$.trustedTypes,M=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,z=`<${C}>`,T=document,D=()=>T.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,N="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,j=/>/g,R=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,q=/"/g,L=/^(?:script|style|textarea|title)$/i,F=t=>(e,...a)=>({_$litType$:t,strings:e,values:a}),B=F(1),W=F(2),Z=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),G=new WeakMap,K=T.createTreeWalker(T,129);function J(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(e):e}const Y=(t,e)=>{const a=t.length-1,r=[];let o,i=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<a;e++){const a=t[e];let s,l,d=-1,h=0;for(;h<a.length&&(n.lastIndex=h,l=n.exec(a),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=U:void 0!==l[1]?n=j:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=R):void 0!==l[3]&&(n=R):n===R?">"===l[0]?(n=o??H,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?R:'"'===l[3]?q:I):n===q||n===I?n=R:n===U||n===j?n=H:(n=R,o=void 0);const c=n===R&&t[e+1].startsWith("/>")?" ":"";i+=n===H?a+z:d>=0?(r.push(s),a.slice(0,d)+S+a.slice(d)+E+c):a+E+(-2===d?e:c)}return[J(t,i+(t[a]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),r]};class Q{constructor({strings:t,_$litType$:e},a){let r;this.parts=[];let o=0,i=0;const n=t.length-1,s=this.parts,[l,d]=Y(t,e);if(this.el=Q.createElement(l,a),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(r=K.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(S)){const e=d[i++],a=r.getAttribute(t).split(E),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:n[2],strings:a,ctor:"."===n[1]?rt:"?"===n[1]?ot:"@"===n[1]?it:at}),r.removeAttribute(t)}else t.startsWith(E)&&(s.push({type:6,index:o}),r.removeAttribute(t));if(L.test(r.tagName)){const t=r.textContent.split(E),e=t.length-1;if(e>0){r.textContent=A?A.emptyScript:"";for(let a=0;a<e;a++)r.append(t[a],D()),K.nextNode(),s.push({type:2,index:++o});r.append(t[e],D())}}}else if(8===r.nodeType)if(r.data===C)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=r.data.indexOf(E,t+1));)s.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const a=T.createElement("template");return a.innerHTML=t,a}}function X(t,e,a=t,r){if(e===Z)return e;let o=void 0!==r?a._$Co?.[r]:a._$Cl;const i=P(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(t),o._$AT(t,a,r)),void 0!==r?(a._$Co??=[])[r]=o:a._$Cl=o),void 0!==o&&(e=X(t,o._$AS(t,e.values),o,r)),e}class tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:a}=this._$AD,r=(t?.creationScope??T).importNode(e,!0);K.currentNode=r;let o=K.nextNode(),i=0,n=0,s=a[0];for(;void 0!==s;){if(i===s.index){let e;2===s.type?e=new et(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new nt(o,this,t)),this._$AV.push(e),s=a[++n]}i!==s?.index&&(o=K.nextNode(),i++)}return K.currentNode=T,r}p(t){let e=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(t,a,e),e+=a.strings.length-2):a._$AI(t[e])),e++}}class et{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,a,r){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=a,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),P(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==Z&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:a}=t,r="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=Q.createElement(J(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===r)this._$AH.p(e);else{const t=new tt(r,this),a=t.u(this.options);t.p(e),this.T(a),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new Q(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let a,r=0;for(const o of t)r===e.length?e.push(a=new et(this.O(D()),this.O(D()),this,this.options)):a=e[r],a._$AI(o),r++;r<e.length&&(this._$AR(a&&a._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=k(t).nextSibling;k(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,a,r,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=V}_$AI(t,e=this,a,r){const o=this.strings;let i=!1;if(void 0===o)t=X(this,t,e,0),i=!P(t)||t!==this._$AH&&t!==Z,i&&(this._$AH=t);else{const r=t;let n,s;for(t=o[0],n=0;n<o.length-1;n++)s=X(this,r[a+n],e,n),s===Z&&(s=this._$AH[n]),i||=!P(s)||s!==this._$AH[n],s===V?t=V:t!==V&&(t+=(s??"")+o[n+1]),this._$AH[n]=s}i&&!r&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class ot extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends at{constructor(t,e,a,r,o){super(t,e,a,r,o),this.type=5}_$AI(t,e=this){if((t=X(this,t,e,0)??V)===Z)return;const a=this._$AH,r=t===V&&a!==V||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,o=t!==V&&(a===V||r);r&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,a){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const st=$.litHtmlPolyfillSupport;st?.(Q,et),($.litHtmlVersions??=[]).push("3.3.3");const lt=globalThis;let dt=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,a)=>{const r=a?.renderBefore??e;let o=r._$litPart$;if(void 0===o){const t=a?.renderBefore??null;r._$litPart$=o=new et(e.insertBefore(D(),t),t,void 0,a??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};dt._$litElement$=!0,dt.finalized=!0,lt.litElementHydrateSupport?.({LitElement:dt});const ht=lt.litElementPolyfillSupport;ht?.({LitElement:dt}),(lt.litElementVersions??=[]).push("4.2.2");const ct={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},pt=(t=ct,e,a)=>{const{kind:r,metadata:o}=a;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===r&&((t=Object.create(t)).wrapped=!0),i.set(a.name,t),"accessor"===r){const{name:r}=a;return{set(a){const o=e.get.call(this);e.set.call(this,a),this.requestUpdate(r,o,t,!0,a)},init(e){return void 0!==e&&this.C(r,void 0,t,e),e}}}if("setter"===r){const{name:r}=a;return function(a){const o=this[r];e.call(this,a),this.requestUpdate(r,o,t,!0,a)}}throw Error("Unsupported decorator location: "+r)};function ut(t){return function(t){return(e,a)=>"object"==typeof a?pt(t,e,a):((t,e,a)=>{const r=e.hasOwnProperty(a);return e.constructor.createProperty(a,t),r?Object.getOwnPropertyDescriptor(e,a):void 0})(t,e,a)}({...t,state:!0,attribute:!1})}const ft=n`
  :host {
    /* Organic design system */
    --color-neutral-100: #f9f4ed;
    --color-neutral-300: #dcd3c4;
    --color-neutral-400: #c0b6a5;
    --color-neutral-500: #a19786;
    --color-neutral-600: #82796a;
    --color-accent: #c67139;
    --color-accent-200: #ffe1d0;
    --color-accent-300: #ffc6a5;
    --color-accent-400: #f6a06b;
    --color-accent-500: #d67f48;
    --color-accent-700: #8c491a;
    --color-accent-800: #643312;
    --color-accent-2-400: #aebf92;
    --color-accent-2-500: #8fa073;
    --radius-md: 16px;
    --radius-lg: 28px;
    --space-1: 4.4px;
    --space-2: 8.8px;
    --space-3: 13.2px;
    --space-4: 17.6px;
    --space-6: 26.4px;
    --font-heading: "Caprasimo", Georgia, serif;
    --font-body: "Figtree", system-ui, sans-serif;
    /*
     * The glance card's clock, and only that.
     *
     * Caprasimo is a display face — it is the day name on the spine card, read
     * once, up close, as a piece of the design. A clock is read constantly from
     * across a room by someone who wants the time and nothing else, and a
     * display serif at 200px is a poster, not an instrument. Roboto because
     * that is what Home Assistant's own frontend is set in, so the panel looks
     * like part of the house rather than a card with opinions.
     */
    --font-clock: "Roboto", "Figtree", system-ui, -apple-system, "Segoe UI", sans-serif;

    /* Dark ground — this card overrides the system's light cream default */
    --ds-bg: #1a1714;
    --ds-raised: #241f1a;
    --ds-divider: #2c2620;
    --ds-rail-past: #332c25;
    --ds-dot-past: #4a4038;
    --ds-alert: #2e2117;
    /* Text that sits *on* an accent fill rather than beside it. Its own token
       because in themed mode every accent shade collapses to the one
       --primary-color, and anything drawn accent-on-accent disappears. */
    --ds-on-accent: var(--color-accent-200);

    /*
     * Calendar identity — the *who* axis, since the spine already answers what
     * and when.
     *
     * Deliberately not theme-dependent. These are identities, not roles: the
     * calendar that is teal should stay teal when the dashboard changes clothes,
     * the way a highlighter does not change colour with the paper. They are also
     * only ever drawn as a filled dot, a ring, or a small swatch — never as text
     * on a background — so they need to be distinguishable, not readable, which
     * is what lets one set work on light and dark ground alike.
     *
     * Hues near 25deg and 85deg are absent on purpose: terracotta already means
     * *now* and sage already means *the house acting on its own*.
     */
    --cal-blue: #6aa9f0;
    --cal-cyan: #4fc3d9;
    --cal-teal: #45bfa5;
    --cal-green: #7bc86c;
    --cal-violet: #a98cf0;
    --cal-magenta: #d987d3;
    --cal-rose: #ef8098;

    /*
     * Now. The one mark on the card that must never be mistaken for anything
     * else, and the only colour with a job important enough to survive a
     * re-theme.
     *
     * Here it is simply the accent scale. The themed block is where the work
     * is — see --ds-now-seed there.
     */
    --ds-now: var(--color-accent-500);
    --ds-now-text: var(--color-accent-400);
    --ds-now-halo: rgba(198, 113, 57, 0.22);

    /*
     * Levels, for rows an automation pushed in and marked. Red is reserved
     * entirely for this: nothing else on the card is red, which is the only
     * reason red still means anything by the time you need it.
     */
    --ds-level-alert: #e5645f;
    --ds-level-info: #7fb2d9;

    display: block;
    /*
     * The fluid floor has to key off the card's own width, not the viewport: on a
     * wall tablet this card is one narrow column inside a wide window, and a
     * @media query would never fire.
     */
    container-type: inline-size;
    /*
     * Fill whatever the dashboard gives us. In a sections view that is the
     * height the user dragged; anywhere else the parent is auto and this
     * resolves to auto, which is the old behaviour exactly.
     */
    height: 100%;
  }

  /*
   * Theme mode. Colors defer to the active Home Assistant theme, with the
   * Organic values as fallbacks so an incomplete theme degrades to this card's
   * own palette rather than to browser defaults.
   *
   * Colors and the card surface — never the spine's geometry or its two
   * typefaces, which are the design. A theme that recolors the card, or gives it
   * the same glass and shadow as every other card on the dashboard, still reads
   * as this card. A theme that resizes it does not.
   */
  .card.themed {
    --ds-bg: var(--ha-card-background, var(--card-background-color, #1a1714));
    --ds-raised: var(--secondary-background-color, #241f1a);
    --ds-divider: var(--divider-color, #2c2620);
    --ds-rail-past: var(--divider-color, #332c25);
    --ds-dot-past: var(--disabled-text-color, #4a4038);
    --ds-alert: var(--error-color, #2e2117);

    --color-neutral-100: var(--primary-text-color, #f9f4ed);
    --color-neutral-300: var(--primary-text-color, #dcd3c4);
    --color-neutral-400: var(--secondary-text-color, #c0b6a5);
    --color-neutral-500: var(--secondary-text-color, #a19786);
    --color-neutral-600: var(--secondary-text-color, #82796a);

    --color-accent: var(--primary-color, #c67139);
    --color-accent-200: var(--primary-color, #ffe1d0);
    --color-accent-300: var(--primary-color, #ffc6a5);
    --color-accent-400: var(--primary-color, #f6a06b);
    --color-accent-500: var(--primary-color, #d67f48);
    --color-accent-700: var(--primary-color, #8c491a);
    --color-accent-800: var(--primary-color, #643312);

    --color-accent-2-400: var(--accent-color, #aebf92);
    --color-accent-2-500: var(--accent-color, #8fa073);

    /* The theme's own answer to "text on the primary colour", because ours
       would be the primary colour. */
    --ds-on-accent: var(--text-primary-color, #fff);

    /*
     * Now, under someone else's theme — tilted toward terracotta rather than
     * pinned to it.
     *
     * Deferring to --primary-color like the rest of the accent scale loses the
     * distinction entirely: the marker becomes the same colour as every other
     * themed thing on the card, and "where am I in the day" stops being
     * answerable at a glance. But a fixed terracotta is worse in the other
     * direction — on a warm background behind translucent cards, terracotta
     * text on near-terracotta ground is unreadable, and a theme's background is
     * not ours to predict.
     *
     * So each of these starts from the theme's own text colour, which is
     * readable against that theme's card by construction, and mixes our hue in.
     * Contrast comes from the theme; identity comes from us. On a light theme
     * the mix lands as a dark burnt orange, on a dark one as a warm peach, and
     * on an orange one it keeps roughly half the lightness distance the theme's
     * own text has — never the zero distance a pinned hex would give.
     *
     * oklab because mixing through sRGB darkens and greys the midpoint; the
     * whole value of this is that the midpoint stays a colour someone chose.
     */
    --ds-now-seed: #e07b39;
    --ds-now: color-mix(in oklab, var(--ds-now-seed) 72%, var(--primary-text-color, #f9f4ed));
    --ds-now-text: color-mix(in oklab, var(--ds-now-seed) 42%, var(--primary-text-color, #f9f4ed));
    --ds-now-halo: color-mix(in oklab, var(--ds-now-seed) 30%, transparent);

    /* A theme that has named its own error and info colours has said something
       more useful than our two guesses; take it. */
    --ds-level-alert: var(--error-color, #e5645f);
    --ds-level-info: var(--info-color, #7fb2d9);

    /*
     * The surface itself, on the same terms every other card gets.
     *
     * This card draws its own container rather than wrapping ha-card, so it
     * never saw these — which is why a frosted-glass theme came out the right
     * colours and the wrong material. Home Assistant themes can only set custom
     * properties, so honouring the four ha-card surface tokens is the whole of
     * what "looks like the other cards" means; the blur in particular is
     * --ha-card-backdrop-filter and nothing else.
     *
     * Every fallback is this card's existing look, so a theme that sets none of
     * them changes nothing. A border defaulting to ha-card's own 1px would put
     * a line around a card that has never had one.
     */
    border-radius: var(--ha-card-border-radius, var(--radius-lg));
    -webkit-backdrop-filter: var(--ha-card-backdrop-filter, none);
    backdrop-filter: var(--ha-card-backdrop-filter, none);
    box-shadow: var(--ha-card-box-shadow, none);
    border: var(--ha-card-border-width, 0px) solid
      var(--ha-card-border-color, transparent);
  }
`,gt=n`
  ${ft}

  .card {
    background: var(--ds-bg);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    height: 100%;
    box-sizing: border-box;
    /* The corners are the design; content must not square them off. */
    overflow: hidden;
  }

  /* ---------- header ---------- */

  .hdr {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: var(--space-4);
  }
  /* The day name is what gives way when the card is narrow, never the clock. */
  .hdr-day {
    min-width: 0;
  }

  /*
   * The clock. Bounded above so it cannot grow past the two lines beside it and
   * push the day down the page — the whole reason this card exists is what is
   * under the header, and the header is not allowed to eat it.
   *
   * Tabular figures because a proportional 1 is narrower than a 0, and a clock
   * that shifts sideways every minute is the sort of thing you cannot un-see.
   */
  .clock {
    font-family: var(--font-heading);
    font-size: clamp(26px, 8.5cqw, 40px);
    line-height: 1;
    color: var(--color-neutral-300);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.01em;
    white-space: nowrap;
    flex: none;
  }
  .clock .mer {
    font-size: 0.4em;
    margin-left: 0.16em;
    letter-spacing: 0.06em;
    color: var(--color-neutral-500);
  }
  .day {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 34px;
    line-height: 1;
    color: var(--color-neutral-100);
  }
  .sub {
    font-size: 14px;
    color: var(--color-neutral-500);
    margin-top: 4px;
  }
  /* At the foot of the card now, and wrapping: eight calendars overflowed a
     header built for three. */
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .pill {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font: 600 10px/1 ui-monospace, Menlo, monospace;
    padding: 5px 8px;
    border-radius: 999px;
    background: var(--ds-divider);
    color: var(--color-neutral-400);
  }
  /*
   * The key. Without it the coloured dots up the spine are decoration; with it
   * they are an index, and the legend is where you go to read it.
   *
   * A swatch rather than tinting the pill's own text: the colours are chosen to
   * be told apart at dot size on any ground, not to be legible as 10px type,
   * and asking them to be both would mean a duller set that is worse at the one
   * job colour has here.
   */
  .pill .swatch {
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: var(--cal, transparent);
    flex: none;
  }
  .pill.stale {
    background: var(--ds-alert);
    color: var(--color-accent-200);
  }
  /* A stale pill is making a different point, and the colour would compete. */
  .pill.stale .swatch {
    background: var(--color-accent-300);
  }

  /* A #tag a person typed into an event title, in the three states the feed
     can put it in: outline for something the house is going to do, filled for
     something it has done, and flat grey for a tag that will do nothing at all.
     Grey is the default and the quietest, because a chip claiming the house is
     about to act has to earn it. */
  .tag {
    display: inline-block;
    font: 600 10px/1 ui-monospace, Menlo, monospace;
    padding: 3px 6px;
    margin-left: 6px;
    border: 1px solid var(--ds-divider);
    border-radius: 999px;
    color: var(--color-neutral-500);
    vertical-align: 1px;
    white-space: nowrap;
  }
  .tag.will_fire {
    border-color: var(--color-accent-700);
    color: var(--color-accent-300);
  }
  .tag.fired {
    border-color: var(--color-accent-500);
    background: var(--color-accent-800);
    color: var(--ds-on-accent);
  }

  /* ---------- all-day ---------- */

  /*
   * The count cap in the card does the real work; this is the safety net under
   * it. On a short card at phone width even four all-day rows can leave the
   * spine a couple of pixels tall, and expanding the frame deliberately should
   * not be able to swallow the day either.
   *
   * So the frame may never take more than two fifths of the card. Past that it
   * scrolls — which is the nested scroller worth avoiding as a primary
   * mechanism, and exactly right as a last resort, because by then the
   * alternative is a spine with no room to exist.
   *
   * The percentage resolves against the card only when the card has a definite
   * height. Under rows:auto it resolves to none, which is correct: nothing is
   * being crushed there, the card simply grows.
   */
  .allday {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 14px;
    border-radius: var(--radius-md);
    background: var(--ds-raised);
    flex: 0 1 auto;
    min-height: 0;
    max-height: 40%;
    overflow-y: auto;
    scrollbar-width: thin;
    overscroll-behavior: contain;
  }
  .allday-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 14.5px;
    color: var(--color-neutral-300);
  }
  .allday-item .icon {
    color: var(--cal, var(--color-accent-2-400));
    flex: none;
    margin-top: 1px;
  }
  .allday-body {
    flex: 1;
    min-width: 0;
  }
  /* Indented to the text column, so it reads as the end of the list rather
     than another entry with a missing icon. */
  .allday-more {
    margin-left: 28px;
    font-size: 13.5px;
  }

  /* ---------- spine ---------- */

  /*
   * The spine is what gives when the card is shorter than its day. Header,
   * all-day frame and footer are fixed points a person navigates by; the middle
   * is the part that is honestly a list, so the middle is what scrolls.
   *
   * min-height:0 because a flex child will not shrink below its content
   * without it, and the overflow would leave the card instead of entering the
   * scroller — which looks exactly like a broken layout.
   */
  .spine {
    display: flex;
    flex-direction: column;
    /*
     * A floor, not the zero it used to be. Zero let the all-day frame and the
     * legend squeeze the day itself down to a few pixels on a short card —
     * a timeline card showing no timeline. The frame above shrinks and scrolls
     * before this gives, because the day is the point and everything else on
     * the card is context for it.
     */
    min-height: 72px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--ds-rail-past) transparent;
  }
  .row {
    display: flex;
    gap: 14px;
  }
  .t {
    width: 66px;
    flex: none;
    text-align: right;
    font-size: 13px;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
  }
  .rail {
    width: 2px;
    flex: none;
    position: relative;
  }

  /*
   * Weather sits under the time, inside the gutter, so it reads as part of
   * *when* rather than competing with the event title for attention.
   */
  .wx {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3px;
    margin-top: 4px;
    font-size: 11.5px;
    font-weight: 600;
    color: var(--color-neutral-600);
  }
  .wx .icon {
    flex: none;
    opacity: 0.9;
  }
  /* Rain worth knowing about before you leave the house. */
  .wx.wet {
    color: var(--color-accent-400);
  }
  .c {
    flex: 1;
    min-width: 0;
  }

  /* past */
  .row.past .t {
    color: var(--color-neutral-600);
    padding-top: 13px;
  }
  .row.past .rail {
    background: var(--ds-rail-past);
  }
  /*
   * A past dot keeps a trace of whose it was, muted well down. Identity still
   * helps when you are scanning back up the morning, but past has to keep
   * reading as past — full strength here would make the finished half of the
   * day louder than the half still to come.
   *
   * With no --cal this mixes the grey with itself, which is the grey.
   */
  .row.past .rail::after {
    content: "";
    position: absolute;
    left: -4px;
    top: 18px;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--cal, var(--ds-dot-past)) 45%, var(--ds-dot-past));
  }
  .row.past .c {
    padding: 10px 0 16px;
    font-size: 15px;
    color: var(--color-neutral-600);
    text-decoration: line-through;
    text-decoration-color: rgba(255, 255, 255, 0.2);
  }

  /*
   * recent — "what just happened". Past geometry, but sage rather than grey and
   * never struck through: nothing was completed, the house simply did something.
   */
  .row.recent .t {
    color: var(--color-neutral-600);
    padding-top: 13px;
  }
  .row.recent .rail {
    background: var(--ds-rail-past);
  }
  .row.recent .rail::after {
    content: "";
    position: absolute;
    left: -4px;
    top: 18px;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--color-accent-2-500);
  }
  .row.recent .c {
    padding: 10px 0 16px;
    font-size: 14.5px;
    color: var(--color-neutral-500);
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .row.recent .icon {
    color: var(--color-accent-2-400);
    flex: none;
  }

  /*
   * overdue — its time has passed but it is not done. Reads live, not finished:
   * accent time, full-strength title, filled terracotta dot, no strikethrough.
   */
  .row.overdue .t {
    color: var(--color-accent-400);
    padding-top: 13px;
  }
  .row.overdue .rail {
    background: var(--ds-rail-past);
  }
  .row.overdue .rail::after {
    content: "";
    position: absolute;
    left: -4px;
    top: 18px;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--color-accent-500);
  }
  .row.overdue .c {
    padding: 10px 0 16px;
  }
  .row.overdue.done {
    opacity: 0.45;
  }

  /*
   * live — started, not finished. Reads as the most present thing on the card,
   * because it is: it sits above the marker in accent, never struck through, and
   * the budget never collapses it.
   */
  .row.live .t {
    color: var(--color-accent-400);
    padding-top: 13px;
  }
  .row.live .rail {
    background: var(--color-accent-500);
  }
  /* The colour starts at the first live dot, matching how the now marker does it. */
  .row.live.live-start .rail {
    background: linear-gradient(var(--ds-rail-past) 0 23px, var(--color-accent-500) 23px 100%);
  }
  .row.live .rail::after {
    content: "";
    position: absolute;
    left: -5px;
    top: 17px;
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: var(--color-accent-500);
    box-sizing: border-box;
  }
  .row.live .c {
    padding: 10px 0 16px;
  }

  /* the progress bar under a live entry */
  .prog {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-top: 9px;
  }
  .prog-track {
    position: relative;
    flex: 1;
    min-width: 0;
    height: 14px;
    border-radius: 999px;
    background: var(--ds-divider);
    overflow: hidden;
  }
  .prog-fill {
    position: absolute;
    inset: 0 auto 0 0;
    border-radius: 999px;
    /* One step up from the rail's accent-800: at bar size that reads as filled
       rather than as a slightly different shade of dark. */
    background: var(--color-accent-700);
  }
  .prog-chip {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: var(--color-accent-300);
    white-space: nowrap;
  }
  .prog-end {
    flex: none;
    font-size: 12px;
    font-weight: 700;
    color: var(--color-accent-400);
    font-variant-numeric: tabular-nums;
  }

  /* the duration chip on upcoming entries */
  .dur {
    display: inline-block;
    margin-left: 8px;
    padding: 2px 7px;
    border-radius: 999px;
    background: var(--ds-divider);
    color: var(--color-neutral-500);
    font-size: 11px;
    font-weight: 700;
    vertical-align: 2px;
    white-space: nowrap;
  }

  /* now */
  /*
   * The now marker draws from --ds-now rather than the accent scale directly.
   * That indirection is the whole point: in themed mode every accent shade
   * collapses to the single --primary-color, and the one mark on the card that
   * must never be mistaken for anything else would become the same colour as
   * everything else the theme touches. See the --ds-now block on :host.
   */
  .row.now .t {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 20px;
    color: var(--ds-now-text);
    padding-top: 8px;
  }
  .row.now .rail {
    background: linear-gradient(var(--ds-rail-past) 0 20px, var(--ds-now) 20px 100%);
  }
  /* Something is already running above the marker — do not break the run. */
  .row.now.after-live .rail {
    background: var(--ds-now);
  }
  .row.now .rail::after {
    content: "";
    position: absolute;
    left: -8px;
    top: 12px;
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: var(--ds-now);
    box-shadow: 0 0 0 5px var(--ds-now-halo);
  }
  .row.now .c {
    padding: 6px 0 18px;
  }
  .now-l {
    font-size: 15px;
    font-weight: 700;
    color: var(--ds-now-text);
  }
  .now-s {
    font-size: 14px;
    color: var(--color-neutral-500);
    margin-top: 1px;
  }

  /* future */
  .row.future .t {
    color: var(--color-neutral-300);
    padding-top: 13px;
  }
  .row.future .rail {
    background: var(--color-accent-800);
  }
  /*
   * The ring is where a calendar's colour lands on a future row. It is the one
   * mark on the spine that is not already saying something else: terracotta is
   * *now*, sage on the sub-line is *the house acting on its own*, and grey is
   * *done*. Falls back to the sage ring, so an uncoloured calendar looks exactly
   * as it always did.
   */
  .row.future .rail::after {
    content: "";
    position: absolute;
    left: -5px;
    top: 17px;
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: var(--ds-bg);
    border: 3px solid var(--cal, var(--color-accent-2-500));
    box-sizing: border-box;
  }
  .row.future .c {
    padding: 10px 0 16px;
  }

  /*
   * A level takes over the row's dot and its icon, and nothing else — not the
   * title, not the rail. The row still has to read as part of one day; a red
   * band across it would make the timeline stop being a timeline at the point
   * it matters most.
   */
  .row.lvl-alert .rail::after,
  .row.lvl-info .rail::after {
    background: var(--lvl);
    border-color: var(--lvl);
  }
  .row.lvl-alert .ttl .icon,
  .row.lvl-info .ttl .icon {
    color: var(--lvl);
    flex: none;
    margin-right: 6px;
    vertical-align: -2px;
  }
  .row.lvl-alert {
    --lvl: var(--ds-level-alert);
  }
  .row.lvl-info {
    --lvl: var(--ds-level-info);
  }
  /* Alert gets the halo the now marker has. It is the only other thing on the
     card allowed to interrupt you. */
  .row.lvl-alert .rail::after {
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--ds-level-alert) 22%, transparent);
  }

  /* last row — the rail fades out rather than stopping hard */
  .row.last .rail {
    background: linear-gradient(var(--color-accent-800) 0 28px, transparent 28px 100%);
  }
  .row.last.past .rail,
  .row.last.recent .rail,
  .row.last.live .rail,
  .row.last.overdue .rail {
    background: linear-gradient(var(--ds-rail-past) 0 28px, transparent 28px 100%);
  }
  .row.last .c {
    padding-bottom: 0;
  }

  .ttl {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-neutral-100);
  }
  .auto {
    font-size: 13.5px;
    color: var(--color-accent-2-400);
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 3px;
  }
  .auto .icon {
    flex: none;
  }

  /* ---------- the action button ---------- */

  .act {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 7px;
    padding: 6px 11px;
    border: none;
    border-radius: 999px;
    background: var(--ds-divider);
    color: var(--color-accent-300);
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: background 120ms ease;
  }
  .act:hover {
    background: #3a322a;
  }
  .act:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
  .act[disabled] {
    cursor: default;
    opacity: 0.6;
  }
  /* Two buttons wrap rather than squeeze: this card is often one narrow column,
     and a truncated "Close it" is worse than a second line. */
  .acts {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  /*
   * The second button is the decline. Quieter on purpose — it carries no tick
   * and no accent, because "not now" should not look as inviting as the thing
   * the row is actually asking for.
   */
  .act-alt {
    background: transparent;
    border: 1px solid var(--ds-divider);
    color: var(--color-neutral-500);
  }
  .act-alt:hover {
    background: var(--ds-divider);
    color: var(--color-neutral-300);
  }

  /* ---------- overflow ---------- */

  .row.more .rail {
    background: linear-gradient(var(--color-accent-800) 0 14px, transparent 14px 100%);
  }
  .row.more .c {
    padding: 8px 0 0;
  }
  .more-btn {
    padding: 0;
    border: none;
    background: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    color: var(--color-neutral-500);
    cursor: pointer;
    text-align: left;
  }
  .more-btn:hover {
    color: var(--color-neutral-300);
  }
  .more-btn:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* ---------- interactive rows (opt-in) ---------- */

  .row.tappable {
    cursor: pointer;
    border-radius: 10px;
    transition: background 120ms ease;
  }
  .row.tappable:hover {
    background: var(--ds-raised);
  }
  .row.tappable:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  /* ---------- loading ---------- */

  /*
   * The rail runs full height with no dots. The card must not change size while
   * loading — a card that resizes on every load reads as unreliable.
   */
  .row.skeleton .rail {
    background: var(--ds-rail-past);
  }
  .row.skeleton .rail::after {
    content: none;
  }
  .row.skeleton .c {
    padding: 10px 0 16px;
    min-height: 20px;
  }

  /* ---------- footer ---------- */

  .foot {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: var(--space-3);
    border-top: 1px solid var(--ds-divider);
    font-size: 12.5px;
    line-height: 1.45;
    color: var(--color-neutral-600);
  }
  .foot .icon {
    flex: none;
  }
  .foot.warn {
    color: var(--color-accent-200);
  }
  .foot + .foot {
    padding-top: 10px;
    border-top: none;
  }

  /* ---------- fluid floor ---------- */

  @container (max-width: 420px) {
    .card {
      padding: var(--space-4);
      gap: var(--space-4);
    }
    .day {
      font-size: 28px;
    }
    .t {
      width: 58px;
    }
    .row {
      gap: 11px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .row.tappable,
    .act {
      transition: none;
    }
  }
`,mt=2;class vt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,a){this._$Ct=t,this._$AM=e,this._$Ci=a}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class wt extends vt{constructor(t){if(super(t),this.it=V,t.type!==mt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this._t=void 0,this.it=t;if(t===Z)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}wt.directiveName="unsafeHTML",wt.resultType=1;class _t extends wt{}_t.directiveName="unsafeSVG",_t.resultType=2;const yt=(t=>(...e)=>({_$litDirective$:t,values:e}))(_t),bt={"calendar-days":'<path d="M8 2v3" /> <path d="M16 2v3" /> <rect x="3" y="3" width="18" height="18" rx="2" /> <path d="M3 9h18" /> <path d="M8 13h.01" /> <path d="M12 13h.01" /> <path d="M16 13h.01" /> <path d="M8 17h.01" /> <path d="M12 17h.01" /> <path d="M16 17h.01" />',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /> <path d="M12 9v4" /> <path d="M12 17h.01" />',"wifi-off":'<path d="M12 20h.01" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" /> <path d="M5 12.859a10 10 0 0 1 5.17-2.69" /> <path d="M19 12.859a10 10 0 0 0-2.007-1.523" /> <path d="M2 8.82a15 15 0 0 1 4.177-2.643" /> <path d="M22 8.82a15 15 0 0 0-11.288-3.764" /> <path d="m2 2 20 20" />',check:'<path d="M20 6 9 17l-5-5" />',sun:'<circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" />',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',cloudy:'<path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" /> <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />',"cloud-sun":'<path d="M12 2v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="M20 12h2" /> <path d="m19.07 4.93-1.41 1.41" /> <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" /> <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />',"cloud-rain":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v6" /> <path d="M8 14v6" /> <path d="M12 16v6" />',"cloud-drizzle":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 19v1" /> <path d="M8 14v1" /> <path d="M16 19v1" /> <path d="M16 14v1" /> <path d="M12 21v1" /> <path d="M12 16v1" />',"cloud-snow":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 15h.01" /> <path d="M8 19h.01" /> <path d="M12 17h.01" /> <path d="M12 21h.01" /> <path d="M16 15h.01" /> <path d="M16 19h.01" />',"cloud-lightning":'<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" /> <path d="m13 12-3 5h4l-3 5" />',"cloud-fog":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 17H7" /> <path d="M17 21H9" />',"cloud-hail":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v2" /> <path d="M8 14v2" /> <path d="M16 20h.01" /> <path d="M8 20h.01" /> <path d="M12 16v2" /> <path d="M12 22h.01" />',wind:'<path d="M12.8 19.6A2 2 0 1 0 14 16H2" /> <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /> <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />'};function xt(t,e){return W`<svg
    class="icon"
    width=${e}
    height=${e}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >${yt(bt[t]??"")}</svg>`}const $t={"clear-night":"moon",cloudy:"cloudy",exceptional:"cloud-lightning",fog:"cloud-fog",hail:"cloud-hail",lightning:"cloud-lightning","lightning-rainy":"cloud-lightning",partlycloudy:"cloud-sun",pouring:"cloud-rain",rainy:"cloud-drizzle",snowy:"cloud-snow","snowy-rainy":"cloud-snow",sunny:"sun",windy:"wind","windy-variant":"wind"};const kt=["blue","cyan","teal","green","violet","magenta","rose"],At=t=>t&&kt.includes(t)?`--cal: var(--cal-${t})`:"",Mt="day-spine-card-fonts";function St(){if(document.getElementById(Mt))return;const t=document.createElement("link");t.id=Mt,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Figtree:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap",document.head.appendChild(t)}const Et="Past entries stay, struck through, so the day reads as a whole. Sage lines are what the house will do on its own.",Ct={show_all_day:!0,max_all_day:4,show_sources:!0,show_legend:!0,interactive_rows:!1,max_past:3,max_future:6,collapse_low_priority:!0,recent_events:!0,recent_ttl:300,load_fonts:!0,show_clock:!0,show_day:!0,show_headline:!0,show_sun:!0,show_past:!0,show_tags:!0,show_progress:!0,time_format:"auto",show_weather:!0,use_ha_theme:!1,show_duration:!0};class zt extends dt{constructor(){super(...arguments),this._now=Date.now(),this._expanded=!1,this._alldayExpanded=!1,this._pending=new Set}setConfig(t){if(!t?.entity)throw new Error("day-spine-card: `entity` is required (the merged feed sensor).");this._config={...Ct,...t},this._expanded=!1,this._alldayExpanded=!1,this._applyFonts()}_applyFonts(){const t=this._config.font_family,e=this._config.heading_font_family??t;for(const[a,r]of[["--font-body",t],["--font-heading",e]])r?this.style.setProperty(a,r):this.style.removeProperty(a)}set hass(t){this._hass=t;const e=t?.states?.[this._config?.entity];e!==this._stateObj&&e?.last_updated!==this._stateObj?.last_updated?(this._stateObj=e,this._pending=new Set):!e&&this._stateObj&&(this._stateObj=void 0)}connectedCallback(){super.connectedCallback(),this._config?.load_fonts&&St(),this._startClock()}disconnectedCallback(){super.disconnectedCallback(),this._timer&&window.clearInterval(this._timer),this._align&&window.clearTimeout(this._align),this._timer=this._align=void 0}_startClock(){const t=()=>{this._now=Date.now()};this._align=window.setTimeout(()=>{t(),this._timer=window.setInterval(t,6e4)},6e4-Date.now()%6e4)}getCardSize(){return 6}getGridOptions(){return{columns:12,rows:10,min_columns:6,min_rows:4}}static getStubConfig(t){return{type:"custom:day-spine-card",entity:Object.keys(t?.states??{}).find(e=>e.startsWith("sensor.")&&Array.isArray(t?.states[e]?.attributes?.entries))??"sensor.day_spine",use_ha_theme:!0}}render(){const t=this._config,e=this._stateObj,a=!e||"unavailable"===e.state||"unknown"===e.state,r=e?.attributes??{},o=new Intl.DateTimeFormat(this._locale,{weekday:"long",timeZone:this._tz}).format(new Date(this._now));if(a)return B`<div class="card ${t.use_ha_theme?"themed":""}">
        ${this._renderHeader(o,r.headline??"…")} ${this._renderSkeleton()}
        ${t.show_legend?this._renderFoot(t.legend??Et,!1):V}
      </div>`;const i=this._live(Array.isArray(r.entries)?r.entries:[]),n=i.filter(t=>t.all_day||this._startedEarlier(t)),s=i.filter(t=>!t.all_day&&!this._startedEarlier(t)),{rows:l,hidden:d}=this._plan(s),h=this._sources(r,i),c=r.stale_message||void 0;return B`<div class="card ${t.use_ha_theme?"themed":""}">
      ${this._renderHeader(o,r.headline??"")}
      ${t.show_all_day&&n.length?this._renderAllDay(n):V}
      <div class="spine">
        ${l.map(t=>this._renderRow(t))}
        ${d.length?this._renderMore(d.length):V}
      </div>
      ${c?this._renderFoot(c,!0):V}
      ${t.show_legend?B`${t.show_sources&&h.length?this._renderSources(h):V}
            ${this._renderFoot(t.legend??Et,!1)}`:V}
    </div>`}_renderHeader(t,e){return B`<div class="hdr">
      <div class="hdr-day">
        ${this._config.show_day?B`<div class="day">${t}</div>`:V}
        ${e&&this._config.show_headline?B`<div class="sub">${e}</div>`:V}
      </div>
      ${this._renderClock()}
    </div>`}_renderClock(){if(!this._config.show_clock)return V;const t=this._fmt(this._now,!1),e=this._fmt(this._now,!0),a=t.startsWith(e)?t.slice(e.length).trim():"";return B`<div class="clock">
      ${e}${a?B`<span class="mer">${a}</span>`:V}
    </div>`}_renderSources(t){return B`<div class="foot pills">
      ${t.map(t=>B`<span
            class="pill ${t.stale?"stale":""}"
            style=${At(t.color)}
            title=${t.stale?"Not updating":""}
          >
            ${t.color?B`<i class="swatch"></i>`:V}${t.label}</span
          >`)}
    </div>`}_renderAllDay(t){const e=Math.max(1,this._config.max_all_day),a=t.filter(t=>t.action||"will_fire"===t.tag_state),r=t.filter(t=>!a.includes(t)),o=[...a,...r],i=this._alldayExpanded?0:Math.max(0,o.length-e),n=i?o.slice(0,e):o;return B`<div class="allday">
      ${n.map(e=>{const a=B`${e.title}${this._renderTags(e)}`;return B`<div class="allday-item" style=${At(e.color)}>
          ${xt("calendar-days",18)}
          <div class="allday-body">
            ${this._startedEarlier(e)&&e.end?B`<div>${a}<span class="dur">until ${this._endLabel(e)}</span></div>`:1!==t.length||e.automation||e.action?B`<div>${a}</div>`:B`All day · ${a}`}
            ${e.automation?B`<div class="auto">${xt("sparkles",14)}${e.automation}</div>`:V}
            ${this._renderAction(e)}
          </div>
        </div>`})}
      ${i||this._alldayExpanded?B`<button
            class="more-btn allday-more"
            @click=${()=>this._alldayExpanded=!this._alldayExpanded}
          >
            ${this._alldayExpanded?"Show fewer":`+${i} more all day`}
          </button>`:V}
    </div>`}_renderSkeleton(){return B`<div class="spine">
      ${[0,1,2,3].map(()=>B`<div class="row past skeleton">
          <div class="t"></div>
          <div class="rail"></div>
          <div class="c"></div>
        </div>`)}
    </div>`}_renderRow(t){const e=t.entry,a=this._config.interactive_rows&&!!e?.entity_id&&"now"!==t.variant,r=["row",t.variant,t.last?"last":"",t.firstLive?"live-start":"",t.afterLive?"after-live":"",a?"tappable":"",e?.level&&"normal"!==e.level?`lvl-${e.level}`:"",e&&this._pending.has(e.id)?"done":""].filter(Boolean).join(" ");return B`<div
      class=${r}
      style=${At(e?.color)}
      role=${a?"button":V}
      tabindex=${a?0:V}
      @click=${a?()=>this._moreInfo(e.entity_id):V}
      @keydown=${a?t=>this._rowKey(t,e.entity_id):V}
    >
      <div class="t">${t.time}${this._renderWeather(t)}</div>
      <div class="rail"></div>
      <div class="c">${this._renderContent(t)}</div>
    </div>`}_renderTags(t){if(!t.tags?.length||!this._config.show_tags)return V;const e=t.tag_state??"inert";return B`${t.tags.map(t=>B`<span class="tag ${e}">#${t}</span>`)}`}_renderContent(t){const e=t.entry;switch(t.variant){case"now":return B`<div class="now-l">Now</div>
          ${t.subline?B`<div class="now-s">${t.subline}</div>`:V}`;case"past":return B`${e.title}${this._renderTags(e)}`;case"recent":return B`${xt("sparkles",14)}<span>${e.title}</span>`;case"live":return B`<div class="ttl">${e.title}${this._renderTags(e)}</div>
          ${e.automation?B`<div class="auto">${xt("sparkles",14)}${e.automation}</div>`:V}
          ${this._renderProgress(t)} ${this._renderAction(e)}`;default:{const t=this._config.show_duration?this._duration(e):null;return B`<div class="ttl">
            ${this._renderLevel(e)}${e.title}${this._renderTags(e)}${t?B`<span class="dur">${t}</span>`:V}
          </div>
          ${e.automation?B`<div class="auto">${xt("sparkles",14)}${e.automation}</div>`:V}
          ${this._renderAction(e)}`}}}_renderLevel(t){return"alert"===t.level?B`${xt("triangle-alert",15)}`:"info"===t.level?B`${xt("info",15)}`:V}_renderWeather(t){const e=t.entry?.weather;if(!this._config.show_weather||!e||"future"!==t.variant)return V;if(void 0===e.condition&&void 0===e.temperature)return V;const a=e.precipitation_probability,r=e.precipitation,o="number"==typeof a&&a>=40||"number"!=typeof a&&"number"==typeof r&&r>0,i="number"==typeof a?`${Math.round(a)}% chance of precipitation`:"number"==typeof r&&r>0?`${r} mm of precipitation forecast`:V;return B`<div class="wx ${o?"wet":""}" title=${i}>
      ${n=e.condition,s=13,xt($t[n??""]??"cloud",s)}
      ${void 0!==e.temperature?B`<span>${Math.round(e.temperature)}°</span>`:V}
    </div>`;var n,s}_renderProgress(t){if(!this._config.show_progress)return V;const e=Math.round(100*(t.progress??0));return B`<div class="prog">
      <div class="prog-track" role="progressbar" aria-valuenow=${e} aria-valuemin="0" aria-valuemax="100">
        <div class="prog-fill" style="width:${e}%"></div>
        <span class="prog-chip">${this._remaining(t.entry)}</span>
      </div>
      <div class="prog-end">${this._endLabel(t.entry)}</div>
    </div>`}_renderAction(t){const e=t.actions?.length?t.actions:t.action?[t.action]:[];if(!e.length)return V;const a=this._pending.has(t.id);return B`<div class="acts">
      ${e.slice(0,2).map((e,r)=>B`<button
          class="act ${r?"act-alt":""}"
          ?disabled=${a}
          @click=${a=>{a.stopPropagation(),this._act(t,e)}}
        >
          ${r?V:xt("check",14)}${e.label}
        </button>`)}
    </div>`}_renderMore(t){return B`<div class="row more">
      <div class="t"></div>
      <div class="rail"></div>
      <div class="c">
        <button class="more-btn" @click=${()=>this._expanded=!this._expanded}>
          ${this._expanded?"Show less":`+${t} more today`}
        </button>
      </div>
    </div>`}_renderFoot(t,e){return B`<div class="foot ${e?"warn":""}">
      ${xt(e?"wifi-off":"info",16)}<span>${t}</span>
    </div>`}_act(t,e){const a=e??t.actions?.[0]??t.action;if(!a)return;if(a.more_info)return this._moreInfo(a.more_info);if(a.url)return void window.open(a.url,"_blank","noopener");if(a.navigate)return history.pushState(null,"",a.navigate),void window.dispatchEvent(new CustomEvent("location-changed"));if(!a.service)return;const[r,o]=a.service.split(".");if(!r||!o)return;this._pending=new Set(this._pending).add(t.id);const i=()=>this._clearPending(t.id);window.setTimeout(i,2e4),this._hass?.callService(r,o,a.data??{},a.target).catch(i)}_clearPending(t){if(!this._pending.has(t))return;const e=new Set(this._pending);e.delete(t),this._pending=e}_moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_rowKey(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._moreInfo(e))}get _locale(){return this._hass?.locale?.language??this._hass?.language??navigator.language}get _tz(){return this._hass?.config?.time_zone}_startedEarlier(t){const e=Date.parse(t.start);return this._dayKey(e)!==this._dayKey(this._now)&&e<this._now}_dayKey(t){return new Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:this._tz}).format(new Date(t))}_live(t){const e=1e3*this._config.recent_ttl;return t.filter(t=>{if(!t?.start||!t?.title)return!1;if("event"===t.kind&&!this._config.recent_events)return!1;if("sun"===t.kind&&!this._config.show_sun)return!1;const a=t.expires?Date.parse(t.expires):"event"===t.kind?Date.parse(t.start)+e:null;return null===a||Number.isNaN(a)||a>this._now})}_plan(t){const e=this._config,a=this._now,r=[...t].sort((t,e)=>Date.parse(t.start)-Date.parse(e.start)),o=[],i=[],n=[],s=[],l=[];for(const t of r){const e=Date.parse(t.start),r=t.end?Date.parse(t.end):NaN;"event"===t.kind?i.push(t):"standing"===t.kind?n.push(t):e>a?l.push(t):!Number.isNaN(r)&&r>a?s.push(t):t.sticky&&t.action?n.push(t):o.push(t)}const d=e.show_past?o:[];let h=d;d.length>e.max_past&&(h=d.slice(d.length-e.max_past));let c=l;if(l.length>e.max_future){const t=l.filter(t=>"high"===this._prio(t)),a=l.filter(t=>"high"!==this._prio(t)),r=Math.max(0,e.max_future-t.length),o=e.collapse_low_priority?[...a.filter(t=>"low"!==this._prio(t)),...a.filter(t=>"low"===this._prio(t))]:a,i=new Set(o.slice(0,r));c=l.filter(e=>t.includes(e)||i.has(e))}const p=[...d.filter(t=>!h.includes(t)),...l.filter(t=>!c.includes(t))],u=this._expanded?d:h,f=this._expanded?l:c,g=[...u.map(t=>this._row("past",t)),...i.map(t=>this._row("recent",t)),...n.map(t=>this._row("overdue",t)),...s.map(t=>this._row("live",t))].sort((t,e)=>Date.parse(t.entry.start)-Date.parse(e.entry.start)),m=g.find(t=>"live"===t.variant);m&&(m.firstLive=!0);const v={variant:"now",time:this._fmt(a,!0),subline:this._stateObj?.attributes?.now??void 0,afterLive:!!m&&"live"===g[g.length-1]?.variant},w=[...g,v,...f.map(t=>this._row("future",t))];return w.length&&!p.length&&(w[w.length-1].last=!0),{rows:w,hidden:p}}_row(t,e){const a={variant:t,entry:e,time:this._fmt(Date.parse(e.start),!1)};if("live"===t){const t=Date.parse(e.start),r=Date.parse(e.end);a.progress=Math.min(1,Math.max(0,(this._now-t)/(r-t)))}return a}_duration(t){if(!t.end||t.all_day)return null;const e=Math.round((Date.parse(t.end)-Date.parse(t.start))/6e4);if(!Number.isFinite(e)||e<5)return null;const a=Math.floor(e/60),r=e%60;return a&&r?`${a}h ${r}m`:a?`${a}h`:`${r}m`}_remaining(t){const e=Math.max(0,Math.round((Date.parse(t.end)-this._now)/6e4)),a=Math.floor(e/60),r=e%60;return`${a&&r?`${a}h ${r}m`:a?`${a}h`:`${r}m`} left`}_endLabel(t){const e=new Date(Date.parse(t.end)),a=this._fmt(e.getTime(),!1),r=new Date(this._now);if(e.toDateString()===r.toDateString())return a;const o=new Date(r);return o.setDate(r.getDate()+1),e.toDateString()===o.toDateString()?`${a} tomorrow`:`${a} ${new Intl.DateTimeFormat(this._locale,{weekday:"short",timeZone:this._tz}).format(e)}`}_prio(t){return"high"===t.priority||"low"===t.priority?t.priority:"sun"===t.kind?"low":"normal"}_fmt(t,e){const a=new Intl.DateTimeFormat(this._locale,{hour:"numeric",minute:"2-digit",timeZone:this._tz,hour12:"auto"===this._config.time_format?void 0:"12"===this._config.time_format}).format(new Date(t));return e?a.replace(/\s*[APap][.\s]*[Mm][.\s]*$/,"").trim():a}_sources(t,e){if(Array.isArray(t.sources)&&t.sources.length)return t.sources.filter(t=>t?.label);const a=[];for(const t of e)t.source&&!a.includes(t.source)&&a.push(t.source);return a.map(t=>({label:t}))}}zt.styles=gt,t([ut()],zt.prototype,"_config",void 0),t([ut()],zt.prototype,"_stateObj",void 0),t([ut()],zt.prototype,"_now",void 0),t([ut()],zt.prototype,"_expanded",void 0),t([ut()],zt.prototype,"_alldayExpanded",void 0),t([ut()],zt.prototype,"_pending",void 0),customElements.get("day-spine-card")||(customElements.define("day-spine-card",zt),window.customCards=window.customCards||[],window.customCards.push({type:"day-spine-card",name:"Dayline",description:"Today as one vertical spine: calendar, sun, and what the house will do on its own.",preview:!1}),console.info("%c DAYLINE %c 0.1.1 ","background:#d67f48;color:#1a1714",""));const Tt=n`
  ${ft}

  .card {
    background: var(--ds-bg);
    border-radius: var(--radius-lg);
    /* The insets are extra padding rather than a smaller card on purpose: the
       background still runs edge to edge under whatever is drawing over it, so
       a panel overlay sits on the card rather than on a gap beside it. */
    padding: calc(var(--space-6) + var(--inset-top, 0px)) var(--space-6)
      calc(var(--space-6) + var(--inset-bottom, 0px));
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  /* ---------- the clock ---------- */

  .clock-zone {
    /* Takes every pixel the alerts have not claimed, and gives them back the
       moment one arrives. */
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-1);
  }

  .clock {
    font-family: var(--font-clock);
    font-weight: 500;
    color: var(--color-neutral-100);
    /* Tabular figures so the whole line does not shift sideways at 1:10.
       A clock that twitches every minute is the thing you notice from across
       a room, and noticing the clock is not the point. */
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum" 1;
    line-height: 1;
    letter-spacing: -0.02em;
    /* Plain px first, so a browser too old for container units still gets a
       readable size rather than an inherited default. The clamp below wins
       wherever cqw resolves. */
    font-size: 96px;
    font-size: calc(clamp(64px, 34cqw, 200px) * var(--clock-scale, 1));
  }
  .a1 .clock {
    font-size: 72px;
    font-size: calc(clamp(52px, 26cqw, 152px) * var(--clock-scale, 1));
  }
  .a2 .clock {
    font-size: 58px;
    font-size: calc(clamp(42px, 20cqw, 118px) * var(--clock-scale, 1));
  }

  .mer {
    /* Small, and quieter than the digits. At a third of a 200px clock the
       meridiem was competing with the time for the same glance, and nobody has
       ever needed to know it is the afternoon from across a room. */
    font-size: 0.24em;
    font-weight: 400;
    color: var(--color-neutral-500);
    margin-left: 0.14em;
    /* Baseline-aligned rather than superscript: this is a word after a number,
       not a footnote on it. */
    letter-spacing: 0;
  }

  .date {
    font-size: 20px;
    font-size: clamp(15px, 4.4cqw, 26px);
    color: var(--color-neutral-500);
    letter-spacing: 0.01em;
  }

  /* ---------- what is next ---------- */

  .next {
    flex: 0 0 auto;
    display: flex;
    align-items: baseline;
    gap: var(--space-3);
    padding-top: var(--space-3);
    border-top: 1px solid var(--ds-divider);
    min-width: 0;
  }

  .next-when {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .next-time {
    font-size: 24px;
    font-size: clamp(19px, 5.4cqw, 32px);
    font-weight: 600;
    color: var(--color-neutral-100);
    font-variant-numeric: tabular-nums;
    line-height: 1.1;
  }
  /* The relative reading is the one that gets acted on. "In 10 min" is a
     decision; "3:40" is arithmetic someone has to do while walking. */
  .next-rel {
    font-size: 14px;
    font-size: clamp(12px, 3.2cqw, 18px);
    color: var(--ds-now-text);
    letter-spacing: 0.01em;
  }

  .next-what {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .next-title {
    font-size: 22px;
    font-size: clamp(17px, 4.8cqw, 30px);
    color: var(--color-neutral-100);
    line-height: 1.2;
    /* Two lines, then stop. A long calendar summary must never push the alerts
       off the bottom of a panel that cannot scroll. */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .next-auto {
    font-size: 15px;
    font-size: clamp(13px, 3.4cqw, 20px);
    color: var(--color-accent-2-400);
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dot {
    display: inline-block;
    width: 0.62em;
    height: 0.62em;
    border-radius: 50%;
    margin-right: 0.42em;
    /* No colour on the calendar means no dot at all, rather than a grey one
       standing in for an answer we do not have. */
    background: var(--cal, transparent);
    vertical-align: baseline;
  }

  .quiet {
    font-size: 18px;
    font-size: clamp(15px, 4cqw, 24px);
    color: var(--color-neutral-500);
  }

  /* ---------- alerts ---------- */

  .alerts {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .alert {
    background: var(--ds-raised);
    border-radius: var(--radius-md);
    /* The stripe carries the level. It is the only red on either card, which is
       the whole reason red still means something by the time one of these
       appears. */
    border-left: 4px solid var(--lv, var(--color-neutral-500));
    padding: var(--space-3) var(--space-4);
    display: flex;
    align-items: center;
    gap: var(--space-3);
    min-width: 0;
    /* Always, rather than below some measured width. The buttons will not
       shrink, so without this the text is the only thing that can, and it
       collapses to one letter per line long before anything overflows and the
       fit steps notice. Wrapping instead pushes the buttons onto their own row,
       which does overflow, which is a problem the card knows how to solve. */
    flex-wrap: wrap;
  }
  .alert.pending {
    opacity: 0.45;
  }

  .alert-ico {
    flex: 0 0 auto;
    color: var(--lv, var(--color-neutral-400));
    display: flex;
  }

  .alert-body {
    /* The floor is what makes the wrap happen at the right moment: below about
       this much room the text stops being readable, so the buttons go under. */
    flex: 1 1 10em;
    min-width: 8em;
  }
  .alert-title {
    font-size: 19px;
    font-size: clamp(15px, 4.2cqw, 26px);
    color: var(--color-neutral-100);
    line-height: 1.25;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .alert-sub {
    font-size: 14px;
    font-size: clamp(12px, 3cqw, 17px);
    color: var(--color-neutral-500);
    margin-top: 2px;
  }

  .btns {
    flex: 0 0 auto;
    display: flex;
    gap: var(--space-2);
    margin-left: auto;
  }
  button {
    font-family: inherit;
    font-size: 16px;
    font-size: clamp(14px, 3.4cqw, 20px);
    color: var(--color-accent-300);
    background: var(--ds-alert);
    border: 1px solid transparent;
    border-radius: 999px;
    /* Sized for a thumb on a wall, not a cursor on a desk. Below about 44px
       these stop being reliably pressable by someone walking past. */
    min-height: 44px;
    padding: 0 var(--space-4);
    display: inline-flex;
    align-items: center;
    gap: var(--space-1);
    cursor: pointer;
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
  }
  button.quiet-btn {
    color: var(--color-neutral-400);
    background: transparent;
    border-color: var(--ds-divider);
  }
  button:focus-visible {
    outline: 2px solid var(--color-accent-400);
    outline-offset: 2px;
  }
  button:active {
    transform: translateY(1px);
  }
  @media (prefers-reduced-motion: reduce) {
    button:active {
      transform: none;
    }
  }

  /* ---------- the fit steps ----------
     Steps 3 and 4 drop whole elements and so live in the render; these two only
     hide, which CSS does without another pass through Lit. */

  /* Step 2: the clock comes down before anything else is taken away.
     Sizing off the container's width alone is right on a panel roughly as tall
     as it is wide, and wrong on a wide short one — 1024x300 would give a clock
     taller than the card. Rather than reach for height units, which need a
     definite height this card cannot promise in every dashboard, the measure
     that is already running just tells it to be smaller. */
  .f2,
  .f3,
  .f4,
  .f5 {
    --clock-scale: 0.62;
  }

  .f1 .next-auto,
  .f2 .next-auto,
  .f3 .next-auto,
  .f4 .next-auto,
  .f5 .next-auto,
  .f1 .alert-sub,
  .f2 .alert-sub,
  .f3 .alert-sub,
  .f4 .alert-sub,
  .f5 .alert-sub {
    display: none;
  }

  /* ---------- narrow ---------- */

  @container (max-width: 380px) {
    /* Once they have wrapped onto their own row anyway, spread them across it:
       a thumb aimed from a doorway wants the whole width, not two pills tucked
       into the right corner. */
    .btns {
      width: 100%;
    }
    button {
      flex: 1 1 0;
      justify-content: center;
    }
    .next {
      flex-direction: column;
      align-items: flex-start;
      gap: var(--space-1);
    }
  }
`,Dt={show_date:!0,show_next:!0,max_alerts:2,quiet_message:"Nothing else today",inset_bottom:0,inset_top:0,time_format:"auto",load_fonts:!0,use_ha_theme:!1};class Pt extends dt{constructor(){super(...arguments),this._now=Date.now(),this._pending=new Set,this._fit=0}setConfig(t){if(!t?.entity)throw new Error("dayline-glance-card: `entity` is required (the merged feed sensor).");this._config={...Dt,...t},this._fit=0,this._applyFonts(),this._applyInsets()}_applyInsets(){for(const[t,e]of[["--inset-bottom",this._config.inset_bottom],["--inset-top",this._config.inset_top]]){const a=Number(e);Number.isFinite(a)&&a>0?this.style.setProperty(t,`${a}px`):this.style.removeProperty(t)}}_applyFonts(){const t=this._config.font_family,e=this._config.heading_font_family??t;for(const[a,r]of[["--font-body",t],["--font-heading",e],["--font-clock",this._config.clock_font_family]])r?this.style.setProperty(a,r):this.style.removeProperty(a)}set hass(t){this._hass=t;const e=t?.states?.[this._config?.entity];e!==this._stateObj&&e?.last_updated!==this._stateObj?.last_updated?(this._stateObj=e,this._pending=new Set,this._fit=0):!e&&this._stateObj&&(this._stateObj=void 0)}connectedCallback(){super.connectedCallback(),this._config?.load_fonts&&St(),this._startClock(),"undefined"!=typeof ResizeObserver&&(this._ro=new ResizeObserver(()=>{this._fit=0}),this._ro.observe(this))}disconnectedCallback(){super.disconnectedCallback(),this._timer&&window.clearInterval(this._timer),this._align&&window.clearTimeout(this._align),this._timer=this._align=void 0,this._ro?.disconnect(),this._ro=void 0}updated(){if(this._fit>=5)return;const t=this.renderRoot.querySelector(".card");t&&t.scrollHeight>t.clientHeight+1&&(this._fit+=1)}_startClock(){const t=()=>{this._now=Date.now()};this._align=window.setTimeout(()=>{t(),this._timer=window.setInterval(t,6e4)},6e4-Date.now()%6e4)}getCardSize(){return 4}getGridOptions(){return{columns:12,rows:6,min_columns:6,min_rows:3}}static getStubConfig(t){return{type:"custom:dayline-glance-card",entity:Object.keys(t?.states??{}).find(e=>e.startsWith("sensor.")&&Array.isArray(t?.states[e]?.attributes?.entries))??"sensor.day_spine",use_ha_theme:!0}}render(){const t=this._config,e=this._stateObj,a=!e||"unavailable"===e.state||"unknown"===e.state,r=a?[]:this._live(Array.isArray(e.attributes.entries)?e.attributes.entries:[]),o=this._alerts(r).slice(0,this._fit>=4?1:void 0),i=this._next(r,o),n=t.show_next&&this._fit<5,s=t.show_date&&this._fit<3;return B`<div class="card ${t.use_ha_theme?"themed":""} a${o.length} f${this._fit}">
      <div class="clock-zone">
        ${this._renderClock()} ${s?B`<div class="date">${this._dateLine()}</div>`:V}
      </div>
      ${n?this._renderNext(i,a):V}
      ${o.length?B`<div class="alerts">${o.map(t=>this._renderAlert(t))}</div>`:V}
    </div>`}_renderClock(){const t=this._fmt(this._now,!1),e=this._fmt(this._now,!0),a=t.startsWith(e)?t.slice(e.length).trim():"";return B`<div class="clock">
      ${e}${a?B`<span class="mer">${a}</span>`:V}
    </div>`}_dateLine(){return new Intl.DateTimeFormat(this._locale,{weekday:"long",month:"long",day:"numeric",timeZone:this._tz}).format(new Date(this._now))}_renderNext(t,e){if(e)return B`<div class="next"><div class="quiet">Dayline feed unavailable</div></div>`;if(!t)return B`<div class="next"><div class="quiet">${this._config.quiet_message}</div></div>`;const{entry:a,running:r}=t,o=At(a.color);return B`<div class="next">
      <div class="next-when">
        <div class="next-time">${this._fmt(Date.parse(a.start),!1)}</div>
        <div class="next-rel">${r?"now":this._relative(Date.parse(a.start))}</div>
      </div>
      <div class="next-what">
        <div class="next-title">
          ${o?B`<span class="dot" style=${o}></span>`:V}${a.title}
        </div>
        ${a.automation?B`<div class="next-auto">${a.automation}</div>`:V}
      </div>
    </div>`}_renderAlert(t){const e=(t.actions?.length?t.actions:t.action?[t.action]:[]).slice(0,2),a="info"===t.level?"var(--ds-level-info)":"var(--ds-level-alert)";return B`<div
      class="alert ${this._pending.has(t.id)?"pending":""}"
      style="--lv: ${a}"
    >
      <span class="alert-ico">${xt("info"===t.level?"info":"triangle-alert",24)}</span>
      <div class="alert-body">
        <div class="alert-title">${t.title}</div>
        ${t.automation?B`<div class="alert-sub">${t.automation}</div>`:V}
      </div>
      ${e.length?B`<div class="btns">
            ${e.map((e,a)=>B`<button
                  class=${a?"quiet-btn":""}
                  @click=${()=>this._act(t,e)}
                  ?disabled=${this._pending.has(t.id)}
                >
                  ${0===a?xt("check",18):V}${e.label}
                </button>`)}
          </div>`:V}
    </div>`}_act(t,e){const a=e??t.actions?.[0]??t.action;if(!a)return;if(a.more_info)return this._moreInfo(a.more_info);if(a.url)return void window.open(a.url,"_blank","noopener");if(a.navigate)return history.pushState(null,"",a.navigate),void window.dispatchEvent(new CustomEvent("location-changed"));if(!a.service)return;const[r,o]=a.service.split(".");if(!r||!o)return;this._pending=new Set(this._pending).add(t.id);const i=()=>this._clearPending(t.id);window.setTimeout(i,2e4),this._hass?.callService(r,o,a.data??{},a.target).catch(i)}_clearPending(t){if(!this._pending.has(t))return;const e=new Set(this._pending);e.delete(t),this._pending=e}_moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}get _locale(){return this._hass?.locale?.language??this._hass?.language??navigator.language}get _tz(){return this._hass?.config?.time_zone}_live(t){return t.filter(t=>{if(!t?.start||!t?.title)return!1;const e=t.expires?Date.parse(t.expires):null;return null===e||Number.isNaN(e)||e>this._now})}_alerts(t){const e=t=>"alert"===t.level?0:1;return t.filter(t=>"alert"===t.level||"standing"===t.kind).sort((t,a)=>e(t)-e(a)||Date.parse(a.start)-Date.parse(t.start)).slice(0,Math.max(0,this._config.max_alerts))}_next(t,e){const a=new Set(e.map(t=>t.id)),r=t.filter(t=>!t.all_day&&"event"!==t.kind&&"standing"!==t.kind&&"alert"!==t.level&&!a.has(t.id)).sort((t,e)=>Date.parse(t.start)-Date.parse(e.start)),o=r.find(t=>{const e=Date.parse(t.start),a=t.end?Date.parse(t.end):NaN;return e<=this._now&&!Number.isNaN(a)&&a>this._now});if(o)return{entry:o,running:!0};const i=r.find(t=>Date.parse(t.start)>this._now);return i?{entry:i,running:!1}:void 0}_relative(t){const e=Math.max(0,Math.round((t-this._now)/6e4));if(e<1)return"any moment";if(e<60)return`in ${e} min`;const a=Math.floor(e/60),r=e%60;return r?`in ${a}h ${r}m`:`in ${a}h`}_fmt(t,e){const a=new Intl.DateTimeFormat(this._locale,{hour:"numeric",minute:"2-digit",timeZone:this._tz,hour12:"auto"===this._config.time_format?void 0:"12"===this._config.time_format}).format(new Date(t));return e?a.replace(/\s*[APap][.\s]*[Mm][.\s]*$/,"").trim():a}}Pt.styles=Tt,t([ut()],Pt.prototype,"_config",void 0),t([ut()],Pt.prototype,"_stateObj",void 0),t([ut()],Pt.prototype,"_now",void 0),t([ut()],Pt.prototype,"_pending",void 0),t([ut()],Pt.prototype,"_fit",void 0),customElements.get("dayline-glance-card")||(customElements.define("dayline-glance-card",Pt),window.customCards=window.customCards||[],window.customCards.push({type:"dayline-glance-card",name:"Dayline Glance",description:"The time, what is next, and anything wrong — sized to be read from across a room.",preview:!1}));
