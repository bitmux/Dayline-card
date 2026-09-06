function e(e,t,a,r){var o,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,a,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i<3?o(n):i>3?o(t,a,n):o(t,a))||n);return i>3&&n&&Object.defineProperty(t,a,n),n}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,a=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new WeakMap;let i=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&o.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const a=1===e.length?e[0]:t.reduce((t,a,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[r+1],e[0]);return new i(a,e,r)},s=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new i("string"==typeof e?e:e+"",void 0,r))(t)})(e):e,{is:l,defineProperty:h,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,f=globalThis,g=f.trustedTypes,m=g?g.emptyScript:"",v=f.reactiveElementPolyfillSupport,w=(e,t)=>e,_={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},y=(e,t)=>!l(e,t),b={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=b){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),r=this.getPropertyDescriptor(e,a,t);void 0!==r&&h(this.prototype,e,r)}}static getPropertyDescriptor(e,t,a){const{get:r,set:o}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){const i=r?.call(this);o?.call(this,t),this.requestUpdate(e,i,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??b}static _$Ei(){if(this.hasOwnProperty(w("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(w("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(w("properties"))){const e=this.properties,t=[...d(e),...p(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,r)=>{if(a)e.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const a of r){const r=document.createElement("style"),o=t.litNonce;void 0!==o&&r.setAttribute("nonce",o),r.textContent=a.cssText,e.appendChild(r)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){const a=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,a);if(void 0!==r&&!0===a.reflect){const o=(void 0!==a.converter?.toAttribute?a.converter:_).toAttribute(t,a.type);this._$Em=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){const a=this.constructor,r=a._$Eh.get(e);if(void 0!==r&&this._$Em!==r){const e=a.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:_;this._$Em=r;const i=o.fromAttribute(t,e.type);this[r]=i??this._$Ej?.get(r)??i,this._$Em=null}}requestUpdate(e,t,a,r=!1,o){if(void 0!==e){const i=this.constructor;if(!1===r&&(o=this[e]),a??=i.getPropertyOptions(e),!((a.hasChanged??y)(o,t)||a.useDefault&&a.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,a))))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:r,wrapped:o},i){a&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==o||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e){const{wrapped:e}=a,r=this[t];!0!==e||this._$AL.has(t)||void 0===r||this.C(t,void 0,a,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[w("elementProperties")]=new Map,x[w("finalized")]=new Map,v?.({ReactiveElement:x}),(f.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=e=>e,A=$.trustedTypes,M=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+E,C=`<${z}>`,T=document,D=()=>T.createComment(""),N=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,O="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,j=/>/g,U=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,F=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),B=F(1),W=F(2),Z=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),V=new WeakMap,K=T.createTreeWalker(T,129);function J(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==M?M.createHTML(t):t}const Y=(e,t)=>{const a=e.length-1,r=[];let o,i=2===t?"<svg>":3===t?"<math>":"",n=H;for(let t=0;t<a;t++){const a=e[t];let s,l,h=-1,c=0;for(;c<a.length&&(n.lastIndex=c,l=n.exec(a),null!==l);)c=n.lastIndex,n===H?"!--"===l[1]?n=R:void 0!==l[1]?n=j:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=U):void 0!==l[3]&&(n=U):n===U?">"===l[0]?(n=o??H,h=-1):void 0===l[1]?h=-2:(h=n.lastIndex-l[2].length,s=l[1],n=void 0===l[3]?U:'"'===l[3]?I:q):n===I||n===q?n=U:n===R||n===j?n=H:(n=U,o=void 0);const d=n===U&&e[t+1].startsWith("/>")?" ":"";i+=n===H?a+C:h>=0?(r.push(s),a.slice(0,h)+S+a.slice(h)+E+d):a+E+(-2===h?t:d)}return[J(e,i+(e[a]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),r]};class Q{constructor({strings:e,_$litType$:t},a){let r;this.parts=[];let o=0,i=0;const n=e.length-1,s=this.parts,[l,h]=Y(e,t);if(this.el=Q.createElement(l,a),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(r=K.nextNode())&&s.length<n;){if(1===r.nodeType){if(r.hasAttributes())for(const e of r.getAttributeNames())if(e.endsWith(S)){const t=h[i++],a=r.getAttribute(e).split(E),n=/([.?@])?(.*)/.exec(t);s.push({type:1,index:o,name:n[2],strings:a,ctor:"."===n[1]?re:"?"===n[1]?oe:"@"===n[1]?ie:ae}),r.removeAttribute(e)}else e.startsWith(E)&&(s.push({type:6,index:o}),r.removeAttribute(e));if(L.test(r.tagName)){const e=r.textContent.split(E),t=e.length-1;if(t>0){r.textContent=A?A.emptyScript:"";for(let a=0;a<t;a++)r.append(e[a],D()),K.nextNode(),s.push({type:2,index:++o});r.append(e[t],D())}}}else if(8===r.nodeType)if(r.data===z)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=r.data.indexOf(E,e+1));)s.push({type:7,index:o}),e+=E.length-1}o++}}static createElement(e,t){const a=T.createElement("template");return a.innerHTML=e,a}}function X(e,t,a=e,r){if(t===Z)return t;let o=void 0!==r?a._$Co?.[r]:a._$Cl;const i=N(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(e),o._$AT(e,a,r)),void 0!==r?(a._$Co??=[])[r]=o:a._$Cl=o),void 0!==o&&(t=X(e,o._$AS(e,t.values),o,r)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,r=(e?.creationScope??T).importNode(t,!0);K.currentNode=r;let o=K.nextNode(),i=0,n=0,s=a[0];for(;void 0!==s;){if(i===s.index){let t;2===s.type?t=new te(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new ne(o,this,e)),this._$AV.push(t),s=a[++n]}i!==s?.index&&(o=K.nextNode(),i++)}return K.currentNode=T,r}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,r){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),N(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==Z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>P(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,r="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Q.createElement(J(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===r)this._$AH.p(t);else{const e=new ee(r,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new Q(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,r=0;for(const o of e)r===t.length?t.push(a=new te(this.O(D()),this.O(D()),this,this.options)):a=t[r],a._$AI(o),r++;r<t.length&&(this._$AR(a&&a._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,r,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=G}_$AI(e,t=this,a,r){const o=this.strings;let i=!1;if(void 0===o)e=X(this,e,t,0),i=!N(e)||e!==this._$AH&&e!==Z,i&&(this._$AH=e);else{const r=e;let n,s;for(e=o[0],n=0;n<o.length-1;n++)s=X(this,r[a+n],t,n),s===Z&&(s=this._$AH[n]),i||=!N(s)||s!==this._$AH[n],s===G?e=G:e!==G&&(e+=(s??"")+o[n+1]),this._$AH[n]=s}i&&!r&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class re extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class oe extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ie extends ae{constructor(e,t,a,r,o){super(e,t,a,r,o),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??G)===Z)return;const a=this._$AH,r=e===G&&a!==G||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==G&&(a===G||r);r&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const se=$.litHtmlPolyfillSupport;se?.(Q,te),($.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;let he=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{const r=a?.renderBefore??t;let o=r._$litPart$;if(void 0===o){const e=a?.renderBefore??null;r._$litPart$=o=new te(t.insertBefore(D(),e),e,void 0,a??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}};he._$litElement$=!0,he.finalized=!0,le.litElementHydrateSupport?.({LitElement:he});const ce=le.litElementPolyfillSupport;ce?.({LitElement:he}),(le.litElementVersions??=[]).push("4.2.2");const de={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y},pe=(e=de,t,a)=>{const{kind:r,metadata:o}=a;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===r&&((e=Object.create(e)).wrapped=!0),i.set(a.name,e),"accessor"===r){const{name:r}=a;return{set(a){const o=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,o,e,!0,a)},init(t){return void 0!==t&&this.C(r,void 0,e,t),t}}}if("setter"===r){const{name:r}=a;return function(a){const o=this[r];t.call(this,a),this.requestUpdate(r,o,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function ue(e){return function(e){return(t,a)=>"object"==typeof a?pe(e,t,a):((e,t,a)=>{const r=t.hasOwnProperty(a);return t.constructor.createProperty(a,e),r?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}({...e,state:!0,attribute:!1})}const fe=n`
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
`,ge=n`
  ${fe}

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

  /* ---------- when to leave ---------- */
  /*
   * Neither sage nor terracotta while there is still time: the house is not
   * acting and nothing is happening yet. Terracotta the moment the time has
   * gone, which is the only point at which this line is asking for anything.
   */
  .leave {
    font-size: 13.5px;
    color: var(--color-neutral-500);
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 3px;
  }
  .leave .icon {
    flex: none;
  }
  .leave.late {
    color: var(--color-accent-300);
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
`,me=2;class ve{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}class we extends ve{constructor(e){if(super(e),this.it=G,e.type!==me)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===G||null==e)return this._t=void 0,this.it=e;if(e===Z)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}we.directiveName="unsafeHTML",we.resultType=1;class _e extends we{}_e.directiveName="unsafeSVG",_e.resultType=2;const ye=(e=>(...t)=>({_$litDirective$:e,values:t}))(_e),be={"calendar-days":'<path d="M8 2v3" /> <path d="M16 2v3" /> <rect x="3" y="3" width="18" height="18" rx="2" /> <path d="M3 9h18" /> <path d="M8 13h.01" /> <path d="M12 13h.01" /> <path d="M16 13h.01" /> <path d="M8 17h.01" /> <path d="M12 17h.01" /> <path d="M16 17h.01" />',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /> <path d="M12 9v4" /> <path d="M12 17h.01" />',"wifi-off":'<path d="M12 20h.01" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" /> <path d="M5 12.859a10 10 0 0 1 5.17-2.69" /> <path d="M19 12.859a10 10 0 0 0-2.007-1.523" /> <path d="M2 8.82a15 15 0 0 1 4.177-2.643" /> <path d="M22 8.82a15 15 0 0 0-11.288-3.764" /> <path d="m2 2 20 20" />',check:'<path d="M20 6 9 17l-5-5" />',car:'<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /> <circle cx="7" cy="17" r="2" /> <path d="M9 17h6" /> <circle cx="17" cy="17" r="2" />',sun:'<circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" />',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',cloudy:'<path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" /> <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />',"cloud-sun":'<path d="M12 2v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="M20 12h2" /> <path d="m19.07 4.93-1.41 1.41" /> <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" /> <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />',"cloud-rain":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v6" /> <path d="M8 14v6" /> <path d="M12 16v6" />',"cloud-drizzle":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 19v1" /> <path d="M8 14v1" /> <path d="M16 19v1" /> <path d="M16 14v1" /> <path d="M12 21v1" /> <path d="M12 16v1" />',"cloud-snow":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 15h.01" /> <path d="M8 19h.01" /> <path d="M12 17h.01" /> <path d="M12 21h.01" /> <path d="M16 15h.01" /> <path d="M16 19h.01" />',"cloud-lightning":'<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" /> <path d="m13 12-3 5h4l-3 5" />',"cloud-fog":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 17H7" /> <path d="M17 21H9" />',"cloud-hail":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v2" /> <path d="M8 14v2" /> <path d="M16 20h.01" /> <path d="M8 20h.01" /> <path d="M12 16v2" /> <path d="M12 22h.01" />',wind:'<path d="M12.8 19.6A2 2 0 1 0 14 16H2" /> <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /> <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />'};function xe(e,t){return W`<svg
    class="icon"
    width=${t}
    height=${t}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.75"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >${ye(be[e]??"")}</svg>`}const $e={"clear-night":"moon",cloudy:"cloudy",exceptional:"cloud-lightning",fog:"cloud-fog",hail:"cloud-hail",lightning:"cloud-lightning","lightning-rainy":"cloud-lightning",partlycloudy:"cloud-sun",pouring:"cloud-rain",rainy:"cloud-drizzle",snowy:"cloud-snow","snowy-rainy":"cloud-snow",sunny:"sun",windy:"wind","windy-variant":"wind"};function ke(e,t){return xe($e[e??""]??"cloud",t)}const Ae=["blue","cyan","teal","green","violet","magenta","rose"],Me=e=>e&&Ae.includes(e)?`--cal: var(--cal-${e})`:"",Se="day-spine-card-fonts";function Ee(){if(document.getElementById(Se))return;const e=document.createElement("link");e.id=Se,e.rel="stylesheet",e.href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Figtree:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap",document.head.appendChild(e)}const ze="Past entries stay, struck through, so the day reads as a whole. Sage lines are what the house will do on its own.",Ce={show_all_day:!0,max_all_day:4,show_sources:!0,show_legend:!0,interactive_rows:!1,max_past:3,max_future:6,collapse_low_priority:!0,recent_events:!0,recent_ttl:300,load_fonts:!0,show_clock:!0,show_day:!0,show_headline:!0,show_sun:!0,show_past:!0,show_tags:!0,show_progress:!0,time_format:"auto",show_weather:!0,use_ha_theme:!1,show_duration:!0,show_leave_by:!0};class Te extends he{constructor(){super(...arguments),this._now=Date.now(),this._expanded=!1,this._alldayExpanded=!1,this._pending=new Set}setConfig(e){if(!e?.entity)throw new Error("day-spine-card: `entity` is required (the merged feed sensor).");this._config={...Ce,...e},this._expanded=!1,this._alldayExpanded=!1,this._applyFonts()}_applyFonts(){const e=this._config.font_family,t=this._config.heading_font_family??e;for(const[a,r]of[["--font-body",e],["--font-heading",t]])r?this.style.setProperty(a,r):this.style.removeProperty(a)}set hass(e){this._hass=e;const t=e?.states?.[this._config?.entity];t!==this._stateObj&&t?.last_updated!==this._stateObj?.last_updated?(this._stateObj=t,this._pending=new Set):!t&&this._stateObj&&(this._stateObj=void 0)}connectedCallback(){super.connectedCallback(),this._config?.load_fonts&&Ee(),this._startClock()}disconnectedCallback(){super.disconnectedCallback(),this._timer&&window.clearInterval(this._timer),this._align&&window.clearTimeout(this._align),this._timer=this._align=void 0}_startClock(){const e=()=>{this._now=Date.now()};this._align=window.setTimeout(()=>{e(),this._timer=window.setInterval(e,6e4)},6e4-Date.now()%6e4)}getCardSize(){return 6}getGridOptions(){return{columns:12,rows:10,min_columns:6,min_rows:4}}static getStubConfig(e){return{type:"custom:day-spine-card",entity:Object.keys(e?.states??{}).find(t=>t.startsWith("sensor.")&&Array.isArray(e?.states[t]?.attributes?.entries))??"sensor.day_spine",use_ha_theme:!0}}render(){const e=this._config,t=this._stateObj,a=!t||"unavailable"===t.state||"unknown"===t.state,r=t?.attributes??{},o=new Intl.DateTimeFormat(this._locale,{weekday:"long",timeZone:this._tz}).format(new Date(this._now));if(a)return B`<div class="card ${e.use_ha_theme?"themed":""}">
        ${this._renderHeader(o,r.headline??"…")} ${this._renderSkeleton()}
        ${e.show_legend?this._renderFoot(e.legend??ze,!1):G}
      </div>`;const i=this._live(Array.isArray(r.entries)?r.entries:[]),n=i.filter(e=>e.all_day||this._startedEarlier(e)),s=i.filter(e=>!e.all_day&&!this._startedEarlier(e)),{rows:l,hidden:h}=this._plan(s),c=this._sources(r,i),d=r.stale_message||void 0;return B`<div class="card ${e.use_ha_theme?"themed":""}">
      ${this._renderHeader(o,r.headline??"")}
      ${e.show_all_day&&n.length?this._renderAllDay(n):G}
      <div class="spine">
        ${l.map(e=>this._renderRow(e))}
        ${h.length?this._renderMore(h.length):G}
      </div>
      ${d?this._renderFoot(d,!0):G}
      ${e.show_legend?B`${e.show_sources&&c.length?this._renderSources(c):G}
            ${this._renderFoot(e.legend??ze,!1)}`:G}
    </div>`}_renderHeader(e,t){return B`<div class="hdr">
      <div class="hdr-day">
        ${this._config.show_day?B`<div class="day">${e}</div>`:G}
        ${t&&this._config.show_headline?B`<div class="sub">${t}</div>`:G}
      </div>
      ${this._renderClock()}
    </div>`}_renderClock(){if(!this._config.show_clock)return G;const e=this._fmt(this._now,!1),t=this._fmt(this._now,!0),a=e.startsWith(t)?e.slice(t.length).trim():"";return B`<div class="clock">
      ${t}${a?B`<span class="mer">${a}</span>`:G}
    </div>`}_renderSources(e){return B`<div class="foot pills">
      ${e.map(e=>B`<span
            class="pill ${e.stale?"stale":""}"
            style=${Me(e.color)}
            title=${e.stale?"Not updating":""}
          >
            ${e.color?B`<i class="swatch"></i>`:G}${e.label}</span
          >`)}
    </div>`}_renderAllDay(e){const t=Math.max(1,this._config.max_all_day),a=e.filter(e=>e.action||"will_fire"===e.tag_state),r=e.filter(e=>!a.includes(e)),o=[...a,...r],i=this._alldayExpanded?0:Math.max(0,o.length-t),n=i?o.slice(0,t):o;return B`<div class="allday">
      ${n.map(t=>{const a=B`${t.title}${this._renderTags(t)}`;return B`<div class="allday-item" style=${Me(t.color)}>
          ${xe("calendar-days",18)}
          <div class="allday-body">
            ${this._startedEarlier(t)&&t.end?B`<div>${a}<span class="dur">until ${this._endLabel(t)}</span></div>`:1!==e.length||t.automation||t.action?B`<div>${a}</div>`:B`All day · ${a}`}
            ${t.automation?B`<div class="auto">${xe("sparkles",14)}${t.automation}</div>`:G}
            ${this._renderAction(t)}
          </div>
        </div>`})}
      ${i||this._alldayExpanded?B`<button
            class="more-btn allday-more"
            @click=${()=>this._alldayExpanded=!this._alldayExpanded}
          >
            ${this._alldayExpanded?"Show fewer":`+${i} more all day`}
          </button>`:G}
    </div>`}_renderSkeleton(){return B`<div class="spine">
      ${[0,1,2,3].map(()=>B`<div class="row past skeleton">
          <div class="t"></div>
          <div class="rail"></div>
          <div class="c"></div>
        </div>`)}
    </div>`}_renderRow(e){const t=e.entry,a=this._config.interactive_rows&&!!t?.entity_id&&"now"!==e.variant,r=["row",e.variant,e.last?"last":"",e.firstLive?"live-start":"",e.afterLive?"after-live":"",a?"tappable":"",t?.level&&"normal"!==t.level?`lvl-${t.level}`:"",t&&this._pending.has(t.id)?"done":""].filter(Boolean).join(" ");return B`<div
      class=${r}
      style=${Me(t?.color)}
      role=${a?"button":G}
      tabindex=${a?0:G}
      @click=${a?()=>this._moreInfo(t.entity_id):G}
      @keydown=${a?e=>this._rowKey(e,t.entity_id):G}
    >
      <div class="t">${e.time}${this._renderWeather(e)}</div>
      <div class="rail"></div>
      <div class="c">${this._renderContent(e)}</div>
    </div>`}_renderTags(e){if(!e.tags?.length||!this._config.show_tags)return G;const t=e.tag_state??"inert";return B`${e.tags.map(e=>B`<span class="tag ${t}">#${e}</span>`)}`}_renderContent(e){const t=e.entry;switch(e.variant){case"now":return B`<div class="now-l">Now</div>
          ${e.subline?B`<div class="now-s">${e.subline}</div>`:G}`;case"past":return B`${t.title}${this._renderTags(t)}`;case"recent":return B`${xe("sparkles",14)}<span>${t.title}</span>`;case"live":return B`<div class="ttl">${t.title}${this._renderTags(t)}</div>
          ${t.automation?B`<div class="auto">${xe("sparkles",14)}${t.automation}</div>`:G}
          ${this._renderProgress(e)} ${this._renderAction(t)}`;default:{const e=this._config.show_duration?this._duration(t):null;return B`<div class="ttl">
            ${this._renderLevel(t)}${t.title}${this._renderTags(t)}${e?B`<span class="dur">${e}</span>`:G}
          </div>
          ${t.automation?B`<div class="auto">${xe("sparkles",14)}${t.automation}</div>`:G}
          ${this._renderLeave(t)} ${this._renderAction(t)}`}}}_renderLeave(e){if(!this._config.show_leave_by||!e.leave_by)return G;const t=Date.parse(e.leave_by);if(!Number.isFinite(t))return G;if(Date.parse(e.start)<=this._now)return G;const a=e.travel?.minutes,r=a?`${a} min drive`:null,o=t<=this._now,i=o?"Leave now":`Leave by ${this._fmt(t,!1)}`;return B`<div class="leave ${o?"late":""}">
      ${xe("car",14)}<span>${r?`${i} · ${r}`:i}</span>
    </div>`}_renderLevel(e){return"alert"===e.level?B`${xe("triangle-alert",15)}`:"info"===e.level?B`${xe("info",15)}`:G}_renderWeather(e){const t=e.entry?.weather;if(!this._config.show_weather||!t||"future"!==e.variant)return G;if(void 0===t.condition&&void 0===t.temperature)return G;const a=t.precipitation_probability,r=t.precipitation,o="number"==typeof a&&a>=40||"number"!=typeof a&&"number"==typeof r&&r>0,i="number"==typeof a?`${Math.round(a)}% chance of precipitation`:"number"==typeof r&&r>0?`${r} mm of precipitation forecast`:G;return B`<div class="wx ${o?"wet":""}" title=${i}>
      ${ke(t.condition,13)}
      ${void 0!==t.temperature?B`<span>${Math.round(t.temperature)}°</span>`:G}
    </div>`}_renderProgress(e){if(!this._config.show_progress)return G;const t=Math.round(100*(e.progress??0));return B`<div class="prog">
      <div class="prog-track" role="progressbar" aria-valuenow=${t} aria-valuemin="0" aria-valuemax="100">
        <div class="prog-fill" style="width:${t}%"></div>
        <span class="prog-chip">${this._remaining(e.entry)}</span>
      </div>
      <div class="prog-end">${this._endLabel(e.entry)}</div>
    </div>`}_renderAction(e){const t=e.actions?.length?e.actions:e.action?[e.action]:[];if(!t.length)return G;const a=this._pending.has(e.id);return B`<div class="acts">
      ${t.slice(0,2).map((t,r)=>B`<button
          class="act ${r?"act-alt":""}"
          ?disabled=${a}
          @click=${a=>{a.stopPropagation(),this._act(e,t)}}
        >
          ${r?G:xe("check",14)}${t.label}
        </button>`)}
    </div>`}_renderMore(e){return B`<div class="row more">
      <div class="t"></div>
      <div class="rail"></div>
      <div class="c">
        <button class="more-btn" @click=${()=>this._expanded=!this._expanded}>
          ${this._expanded?"Show less":`+${e} more today`}
        </button>
      </div>
    </div>`}_renderFoot(e,t){return B`<div class="foot ${t?"warn":""}">
      ${xe(t?"wifi-off":"info",16)}<span>${e}</span>
    </div>`}_act(e,t){const a=t??e.actions?.[0]??e.action;if(!a)return;if(a.more_info)return this._moreInfo(a.more_info);if(a.url)return void window.open(a.url,"_blank","noopener");if(a.navigate)return history.pushState(null,"",a.navigate),void window.dispatchEvent(new CustomEvent("location-changed"));if(!a.service)return;const[r,o]=a.service.split(".");if(!r||!o)return;this._pending=new Set(this._pending).add(e.id);const i=()=>this._clearPending(e.id);window.setTimeout(i,2e4),this._hass?.callService(r,o,a.data??{},a.target).catch(i)}_clearPending(e){if(!this._pending.has(e))return;const t=new Set(this._pending);t.delete(e),this._pending=t}_moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_rowKey(e,t){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._moreInfo(t))}get _locale(){return this._hass?.locale?.language??this._hass?.language??navigator.language}get _tz(){return this._hass?.config?.time_zone}_startedEarlier(e){const t=Date.parse(e.start);return this._dayKey(t)!==this._dayKey(this._now)&&t<this._now}_dayKey(e){return new Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:this._tz}).format(new Date(e))}_live(e){const t=1e3*this._config.recent_ttl;return e.filter(e=>{if(!e?.start||!e?.title)return!1;if("event"===e.kind&&!this._config.recent_events)return!1;if("sun"===e.kind&&!this._config.show_sun)return!1;const a=e.expires?Date.parse(e.expires):"event"===e.kind?Date.parse(e.start)+t:null;return null===a||Number.isNaN(a)||a>this._now})}_plan(e){const t=this._config,a=this._now,r=[...e].sort((e,t)=>Date.parse(e.start)-Date.parse(t.start)),o=[],i=[],n=[],s=[],l=[];for(const e of r){const t=Date.parse(e.start),r=e.end?Date.parse(e.end):NaN;"event"===e.kind?i.push(e):"standing"===e.kind?n.push(e):t>a?l.push(e):!Number.isNaN(r)&&r>a?s.push(e):e.sticky&&e.action?n.push(e):o.push(e)}const h=t.show_past?o:[];let c=h;h.length>t.max_past&&(c=h.slice(h.length-t.max_past));let d=l;if(l.length>t.max_future){const e=l.filter(e=>"high"===this._prio(e)),a=l.filter(e=>"high"!==this._prio(e)),r=Math.max(0,t.max_future-e.length),o=t.collapse_low_priority?[...a.filter(e=>"low"!==this._prio(e)),...a.filter(e=>"low"===this._prio(e))]:a,i=new Set(o.slice(0,r));d=l.filter(t=>e.includes(t)||i.has(t))}const p=[...h.filter(e=>!c.includes(e)),...l.filter(e=>!d.includes(e))],u=this._expanded?h:c,f=this._expanded?l:d,g=[...u.map(e=>this._row("past",e)),...i.map(e=>this._row("recent",e)),...n.map(e=>this._row("overdue",e)),...s.map(e=>this._row("live",e))].sort((e,t)=>Date.parse(e.entry.start)-Date.parse(t.entry.start)),m=g.find(e=>"live"===e.variant);m&&(m.firstLive=!0);const v={variant:"now",time:this._fmt(a,!0),subline:this._stateObj?.attributes?.now??void 0,afterLive:!!m&&"live"===g[g.length-1]?.variant},w=[...g,v,...f.map(e=>this._row("future",e))];return w.length&&!p.length&&(w[w.length-1].last=!0),{rows:w,hidden:p}}_row(e,t){const a={variant:e,entry:t,time:this._fmt(Date.parse(t.start),!1)};if("live"===e){const e=Date.parse(t.start),r=Date.parse(t.end);a.progress=Math.min(1,Math.max(0,(this._now-e)/(r-e)))}return a}_duration(e){if(!e.end||e.all_day)return null;const t=Math.round((Date.parse(e.end)-Date.parse(e.start))/6e4);if(!Number.isFinite(t)||t<5)return null;const a=Math.floor(t/60),r=t%60;return a&&r?`${a}h ${r}m`:a?`${a}h`:`${r}m`}_remaining(e){const t=Math.max(0,Math.round((Date.parse(e.end)-this._now)/6e4)),a=Math.floor(t/60),r=t%60;return`${a&&r?`${a}h ${r}m`:a?`${a}h`:`${r}m`} left`}_endLabel(e){const t=new Date(Date.parse(e.end)),a=this._fmt(t.getTime(),!1),r=new Date(this._now);if(t.toDateString()===r.toDateString())return a;const o=new Date(r);return o.setDate(r.getDate()+1),t.toDateString()===o.toDateString()?`${a} tomorrow`:`${a} ${new Intl.DateTimeFormat(this._locale,{weekday:"short",timeZone:this._tz}).format(t)}`}_prio(e){return"high"===e.priority||"low"===e.priority?e.priority:"sun"===e.kind?"low":"normal"}_fmt(e,t){const a=new Intl.DateTimeFormat(this._locale,{hour:"numeric",minute:"2-digit",timeZone:this._tz,hour12:"auto"===this._config.time_format?void 0:"12"===this._config.time_format}).format(new Date(e));return t?a.replace(/\s*[APap][.\s]*[Mm][.\s]*$/,"").trim():a}_sources(e,t){if(Array.isArray(e.sources)&&e.sources.length)return e.sources.filter(e=>e?.label);const a=[];for(const e of t)e.source&&!a.includes(e.source)&&a.push(e.source);return a.map(e=>({label:e}))}}Te.styles=ge,e([ue()],Te.prototype,"_config",void 0),e([ue()],Te.prototype,"_stateObj",void 0),e([ue()],Te.prototype,"_now",void 0),e([ue()],Te.prototype,"_expanded",void 0),e([ue()],Te.prototype,"_alldayExpanded",void 0),e([ue()],Te.prototype,"_pending",void 0),customElements.get("day-spine-card")||(customElements.define("day-spine-card",Te),window.customCards=window.customCards||[],window.customCards.push({type:"day-spine-card",name:"Dayline",description:"Today as one vertical spine: calendar, sun, and what the house will do on its own.",preview:!1}),console.info("%c DAYLINE %c 0.1.1 ","background:#d67f48;color:#1a1714",""));const De=n`
  ${fe}

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
    /* Unset by default, so this is inert until someone gives the card a ceiling
       the parent would not. */
    max-height: var(--glance-max-height, none);
    box-sizing: border-box;
    overflow: hidden;
    /* Only so the corner weather has something to be a corner of. */
    position: relative;
  }

  /* ---------- conditions now ---------- */
  /*
   * Absolutely placed, and that is the point: on a panel that cannot scroll,
   * anything in the normal flow is height taken away from the clock. This costs
   * nothing, because it sits in room the centred clock was never going to use.
   */
  .wx-now {
    position: absolute;
    top: calc(var(--space-6) + var(--inset-top, 0px));
    right: var(--space-6);
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--color-neutral-500);
    line-height: 1;
    /* Below the clock in the reading order it belongs to. Loud enough to read
       at a glance, quiet enough that nobody looks at it first. */
    font-size: 20px;
    font-size: clamp(15px, 4cqw, 26px);
  }
  .wx-now svg {
    width: 1.15em;
    height: 1.15em;
  }
  .wx-temp {
    font-variant-numeric: tabular-nums;
  }

  /* ---------- the clock ---------- */

  .clock-zone {
    /* Takes every pixel the alerts have not claimed, and gives them back the
       moment one arrives.

       No min-height of zero, which would be the reflex here and is wrong. It lets
       this box shrink below the clock inside it; the clock then spills out of a
       zone that is centring it, in both directions at once, and the card's own
       scrollHeight never changes — so the measure concludes everything fits
       while the top of the clock is being cut off. Left at its content floor,
       the overflow reaches the card, where it can be seen and answered by making
       the clock smaller, which is the actual remedy. */
    flex: 1 1 auto;
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
    font-size: calc(clamp(64px, 32cqw, 176px) * var(--clock-scale, 1));
  }
  .a1 .clock {
    font-size: 72px;
    font-size: calc(clamp(52px, 24cqw, 140px) * var(--clock-scale, 1));
  }
  .a2 .clock {
    font-size: 58px;
    font-size: calc(clamp(42px, 19cqw, 108px) * var(--clock-scale, 1));
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
  /* Small, spaced, and upper case — a label, so it is never mistaken for part
     of the sentence underneath it. */
  .next-eyebrow {
    font-size: 12px;
    font-size: clamp(10px, 2.6cqw, 15px);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 600;
    color: var(--color-neutral-500);
    line-height: 1;
    margin-bottom: 2px;
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
    /* Grows, so the lines inside it have the full width of the band to work
       with: the progress track reaches across, and the forecast at the end of
       the follow-on line sits at the edge of the card instead of trailing the
       title by a space. Behind a short title that was the whole of the empty
       lower right. */
    flex: 1 1 auto;
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
  /* Neutral while there is time; the accent the moment there is not. The only
     line on this card that is an instruction rather than a fact. */
  /* ---------- how far through ---------- */
  /*
   * A few pixels of track instead of a line of text. That is the whole reason
   * the follow-on line below can also be afforded: "how much of this is left"
   * and "what is after it" together cost about what one sentence would.
   */
  .prog {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    margin-top: 5px;
  }
  .prog-track {
    flex: 1 1 auto;
    height: 6px;
    border-radius: 3px;
    background: var(--ds-prog-track, rgba(255, 255, 255, 0.11));
    overflow: hidden;
  }
  .prog-fill {
    height: 100%;
    border-radius: 3px;
    background: var(--ds-now-dot, var(--color-accent-500));
  }
  .prog-left {
    flex: none;
    font-size: 13px;
    font-size: clamp(11px, 2.9cqw, 17px);
    color: var(--color-neutral-500);
    font-variant-numeric: tabular-nums;
  }

  /* ---------- and then ---------- */
  .then {
    font-size: 15px;
    font-size: clamp(13px, 3.4cqw, 20px);
    color: var(--color-neutral-500);
    line-height: 1.25;
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: var(--space-3);
  }
  /* The title gives way first: the temperature is two characters and losing
     them saves nothing, while a long summary can always spare its tail. */
  .then-text {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .then .next-wx {
    font-size: 1em;
  }
  /* Matches the eyebrow's treatment, so "Next" means the same thing in both
     places it appears on this card. */
  .then-lead {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.78em;
    font-weight: 600;
    color: var(--color-neutral-600, var(--color-neutral-500));
    margin-right: 0.6em;
  }
  /* The time carries the weight, because it is the part that gets acted on. */
  .then-time {
    color: var(--color-neutral-400, var(--color-neutral-500));
    font-variant-numeric: tabular-nums;
    margin-right: 0.5em;
  }

  /* The meridiem follows the tint, so the clock reads as one object going
     amber rather than a number arguing with its own AM. */
  .clock.tint .mer {
    color: inherit;
    opacity: 0.72;
  }

  /*
   * The forecast for the event being named, in what was dead space behind every
   * short title. margin-left:auto rather than a fixed column: with a long
   * title the band still gives the words the room, and this closes up.
   */
  .next-wx {
    flex: 0 0 auto;
    margin-left: auto;
    align-self: center;
    padding-left: var(--space-3);
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--color-neutral-500);
    line-height: 1;
    font-size: 17px;
    font-size: clamp(14px, 3.6cqw, 22px);
  }
  .next-wx svg {
    width: 1.15em;
    height: 1.15em;
  }
  /* Rain is the only forecast that changes what someone does on the way out. */
  .next-wx.wet {
    color: var(--color-accent-400);
  }

  .next-leave {
    font-size: 15px;
    font-size: clamp(13px, 3.4cqw, 20px);
    color: var(--color-neutral-500);
    line-height: 1.25;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .next-leave.late {
    color: var(--color-accent-300);
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
  .f3 {
    --clock-scale: 0.78;
  }
  .f4,
  .f5,
  .f6 {
    --clock-scale: 0.56;
  }

  .f1 .next-auto,
  .f2 .next-auto,
  .f3 .next-auto,
  .f4 .next-auto,
  .f5 .next-auto,
  .f6 .next-auto,
  .f4 .next-leave,
  .f5 .next-leave,
  .f6 .next-leave,
  .f4 .then,
  .f5 .then,
  .f6 .then,
  .f1 .alert-sub,
  .f2 .alert-sub,
  .f3 .alert-sub,
  .f4 .alert-sub,
  .f5 .alert-sub,
  .f6 .alert-sub {
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
`,Ne={show_date:!0,show_next:!0,show_progress:!0,show_then:!0,show_leave_by:!0,show_weather:!0,show_eyebrow:!0,warn_minutes:15,warn_color:"#e8b04b",urgent_color:"#e0563f",max_alerts:2,quiet_message:"Nothing else today",inset_bottom:0,inset_top:0,time_format:"auto",load_fonts:!0,use_ha_theme:!1};class Pe extends he{constructor(){super(...arguments),this._now=Date.now(),this._pending=new Set,this._fit=0,this._box={h:0,w:0}}setConfig(e){if(!e?.entity)throw new Error("dayline-glance-card: `entity` is required (the merged feed sensor).");this._config={...Ne,...e},this._fit=0,this._applyFonts(),this._applyInsets()}_applyInsets(){const e=this._config.max_height;e&&/^[0-9.]+(px|em|rem|vh|svh|dvh|lvh|%)$/.test(e.trim())?this.style.setProperty("--glance-max-height",e.trim()):this.style.removeProperty("--glance-max-height");for(const[e,t]of[["--inset-bottom",this._config.inset_bottom],["--inset-top",this._config.inset_top]]){const a=Number(t);Number.isFinite(a)&&a>0?this.style.setProperty(e,`${a}px`):this.style.removeProperty(e)}}_applyFonts(){const e=this._config.font_family,t=this._config.heading_font_family??e;for(const[a,r]of[["--font-body",e],["--font-heading",t],["--font-clock",this._config.clock_font_family]])r?this.style.setProperty(a,r):this.style.removeProperty(a)}set hass(e){this._hass=e;const t=e?.states?.[this._config?.entity];t!==this._stateObj&&t?.last_updated!==this._stateObj?.last_updated?(this._stateObj=t,this._pending=new Set,this._fit=0):!t&&this._stateObj&&(this._stateObj=void 0)}connectedCallback(){super.connectedCallback(),this._config?.load_fonts&&Ee(),this._startClock(),"undefined"!=typeof ResizeObserver&&(this._ro=new ResizeObserver(()=>{const e=this.clientHeight,t=this.clientWidth;(e>this._box.h+1||t!==this._box.w)&&(this._fit=0),this._box={h:e,w:t}}),this._ro.observe(this))}disconnectedCallback(){super.disconnectedCallback(),this._timer&&window.clearInterval(this._timer),this._align&&window.clearTimeout(this._align),this._timer=this._align=void 0,this._ro?.disconnect(),this._ro=void 0}updated(){if(this._fit>=6)return;const e=this.renderRoot.querySelector(".card");e&&(e.scrollHeight>e.clientHeight+1||this._overflowsScreen())&&(this._fit+=1)}_overflowsScreen(){const e=this.renderRoot.querySelector(".clock-zone");if(!e)return!1;const t=Array.from(e.children),a=parseFloat(getComputedStyle(e).rowGap)||0,r=t.reduce((e,t)=>e+t.getBoundingClientRect().height,0)+a*Math.max(0,t.length-1);if(e.getBoundingClientRect().height-r>2)return!1;const o=this.getBoundingClientRect(),i=window.innerHeight||0;return!(!i||!o.height||o.top>.4*i)&&o.bottom>i+1}_startClock(){const e=()=>{this._now=Date.now()};this._align=window.setTimeout(()=>{e(),this._timer=window.setInterval(e,6e4)},6e4-Date.now()%6e4)}getCardSize(){return 4}getGridOptions(){return{columns:12,rows:6,min_columns:6,min_rows:3}}static getStubConfig(e){return{type:"custom:dayline-glance-card",entity:Object.keys(e?.states??{}).find(t=>t.startsWith("sensor.")&&Array.isArray(e?.states[t]?.attributes?.entries))??"sensor.day_spine",use_ha_theme:!0}}render(){const e=this._config,t=this._stateObj,a=!t||"unavailable"===t.state||"unknown"===t.state,r=a?[]:this._live(Array.isArray(t.attributes.entries)?t.attributes.entries:[]),o=this._alerts(r).slice(0,this._fit>=5?1:void 0),i=this._next(r,o),n=e.show_next&&this._fit<6,s=e.show_date&&this._fit<3;return B`<div class="card ${e.use_ha_theme?"themed":""} a${o.length} f${this._fit}">
      ${this._renderNowWeather(a)}
      <div class="clock-zone">
        ${this._renderClock(i)} ${s?B`<div class="date">${this._dateLine()}</div>`:G}
      </div>
      ${n?this._renderNext(i,a):G}
      ${o.length?B`<div class="alerts">${o.map(e=>this._renderAlert(e))}</div>`:G}
    </div>`}_renderClock(e){const t=this._fmt(this._now,!1),a=this._fmt(this._now,!0),r=t.startsWith(a)?t.slice(a.length).trim():"",o=this._tint(e);return B`<div
      class="clock ${o?"tint":""}"
      style=${o?`color:${o}`:G}
    >
      ${a}${r?B`<span class="mer">${r}</span>`:G}
    </div>`}_tint(e){const t=e?.running?e.then:e?.entry;if(!t?.leave_by||!this._config.show_leave_by)return null;if(!this._config.show_next||this._fit>=4)return null;const a=Date.parse(t.leave_by);if(!Number.isFinite(a)||Date.parse(t.start)<=this._now)return null;if(this._now>=a)return this._config.urgent_color||null;const r=Number(this._config.warn_minutes)||0;return r<=0||this._now<a-6e4*r?null:this._config.warn_color||null}_dateLine(){return new Intl.DateTimeFormat(this._locale,{weekday:"long",month:"long",day:"numeric",timeZone:this._tz}).format(new Date(this._now))}_renderNext(e,t){if(t)return B`<div class="next"><div class="quiet">Dayline feed unavailable</div></div>`;if(!e)return B`<div class="next"><div class="quiet">${this._config.quiet_message}</div></div>`;const{entry:a,running:r}=e,o=r?"Now":"Next",i=Me(a.color);return B`<div class="next">
      <div class="next-when">
        ${this._config.show_eyebrow?B`<div class="next-eyebrow">${o}</div>`:G}
        <div class="next-time">${this._fmt(Date.parse(a.start),!1)}</div>
        ${r?this._config.show_eyebrow?G:B`<div class="next-rel">now</div>`:B`<div class="next-rel">${this._relative(Date.parse(a.start))}</div>`}
      </div>
      <div class="next-what">
        <div class="next-title">
          ${i?B`<span class="dot" style=${i}></span>`:G}${a.title}
        </div>
        ${r?this._renderProgress(a):G}
        ${a.automation?B`<div class="next-auto">${a.automation}</div>`:G}
        ${this._renderLeave(r?e.then:a)}
        ${this._renderThen(e)}
      </div>
      ${r?G:this._renderEntryWeather(a)}
    </div>`}_renderNowWeather(e){if(!this._config.show_weather||e||this._fit>=5)return G;const t=this._stateObj?.attributes?.weather;return!t||void 0===t.condition&&void 0===t.temperature?G:B`<div class="wx-now">
      ${ke(t.condition,26)}
      ${void 0!==t.temperature?B`<span class="wx-temp">${Math.round(t.temperature)}°</span>`:G}
    </div>`}_renderEntryWeather(e){const t=e?.weather;if(!this._config.show_weather||!t)return G;if(void 0===t.condition&&void 0===t.temperature)return G;const a=t.precipitation_probability,r=t.precipitation;return B`<div class="next-wx ${"number"==typeof a&&a>=30||"number"!=typeof a&&"number"==typeof r&&r>0?"wet":""}">
      ${ke(t.condition,22)}
      ${void 0!==t.temperature?B`<span class="wx-temp">${Math.round(t.temperature)}°</span>`:G}
    </div>`}_renderProgress(e){if(!this._config.show_progress||!e.end)return G;const t=Date.parse(e.start),a=Date.parse(e.end);if(!Number.isFinite(t)||!Number.isFinite(a)||a<=t)return G;const r=Math.round(100*Math.min(1,Math.max(0,(this._now-t)/(a-t)))),o=Math.max(0,Math.round((a-this._now)/6e4)),i=Math.floor(o/60),n=o%60;return B`<div class="prog">
      <div
        class="prog-track"
        role="progressbar"
        aria-valuenow=${r}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="prog-fill" style="width:${r}%"></div>
      </div>
      <div class="prog-left">${i&&n?`${i}h ${n}m`:i?`${i}h`:`${n}m`} left</div>
    </div>`}_renderThen(e){const t=e.then;return this._config.show_then&&e.running&&t?B`<div class="then">
      <span class="then-text"
        ><span class="then-lead">Next</span
        ><span class="then-time">${this._fmt(Date.parse(t.start),!1)}</span>${t.title}</span
      >
      ${this._renderEntryWeather(t)}
    </div>`:G}_renderLeave(e){if(!e?.leave_by||!this._config.show_leave_by)return G;const t=Date.parse(e.leave_by);if(!Number.isFinite(t)||Date.parse(e.start)<=this._now)return G;const a=e.travel?.minutes,r=t<=this._now,o=r?"Leave now":`Leave by ${this._fmt(t,!1)}`;return B`<div class="next-leave ${r?"late":""}">
      ${a?`${o} · ${a} min`:o}
    </div>`}_renderAlert(e){const t=(e.actions?.length?e.actions:e.action?[e.action]:[]).slice(0,2),a="info"===e.level?"var(--ds-level-info)":"var(--ds-level-alert)";return B`<div
      class="alert ${this._pending.has(e.id)?"pending":""}"
      style="--lv: ${a}"
    >
      <span class="alert-ico">${xe("info"===e.level?"info":"triangle-alert",24)}</span>
      <div class="alert-body">
        <div class="alert-title">${e.title}</div>
        ${e.automation?B`<div class="alert-sub">${e.automation}</div>`:G}
      </div>
      ${t.length?B`<div class="btns">
            ${t.map((t,a)=>B`<button
                  class=${a?"quiet-btn":""}
                  @click=${()=>this._act(e,t)}
                  ?disabled=${this._pending.has(e.id)}
                >
                  ${0===a?xe("check",18):G}${t.label}
                </button>`)}
          </div>`:G}
    </div>`}_act(e,t){const a=t??e.actions?.[0]??e.action;if(!a)return;if(a.more_info)return this._moreInfo(a.more_info);if(a.url)return void window.open(a.url,"_blank","noopener");if(a.navigate)return history.pushState(null,"",a.navigate),void window.dispatchEvent(new CustomEvent("location-changed"));if(!a.service)return;const[r,o]=a.service.split(".");if(!r||!o)return;this._pending=new Set(this._pending).add(e.id);const i=()=>this._clearPending(e.id);window.setTimeout(i,2e4),this._hass?.callService(r,o,a.data??{},a.target).catch(i)}_clearPending(e){if(!this._pending.has(e))return;const t=new Set(this._pending);t.delete(e),this._pending=t}_moreInfo(e){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}get _locale(){return this._hass?.locale?.language??this._hass?.language??navigator.language}get _tz(){return this._hass?.config?.time_zone}_live(e){return e.filter(e=>{if(!e?.start||!e?.title)return!1;const t=e.expires?Date.parse(e.expires):null;return null===t||Number.isNaN(t)||t>this._now})}_alerts(e){const t=e=>"alert"===e.level?0:1;return e.filter(e=>"alert"===e.level||"standing"===e.kind).sort((e,a)=>t(e)-t(a)||Date.parse(a.start)-Date.parse(e.start)).slice(0,Math.max(0,this._config.max_alerts))}_next(e,t){const a=new Set(t.map(e=>e.id)),r=e.filter(e=>!e.all_day&&"event"!==e.kind&&"standing"!==e.kind&&"alert"!==e.level&&!a.has(e.id)).sort((e,t)=>Date.parse(e.start)-Date.parse(t.start)),o=r.find(e=>{const t=Date.parse(e.start),a=e.end?Date.parse(e.end):NaN;return t<=this._now&&!Number.isNaN(a)&&a>this._now}),i=r.find(e=>Date.parse(e.start)>this._now);return o?{entry:o,running:!0,then:i}:i?{entry:i,running:!1}:void 0}_relative(e){const t=Math.max(0,Math.round((e-this._now)/6e4));if(t<1)return"any moment";if(t<60)return`in ${t} min`;const a=Math.floor(t/60),r=t%60;return r?`in ${a}h ${r}m`:`in ${a}h`}_fmt(e,t){const a=new Intl.DateTimeFormat(this._locale,{hour:"numeric",minute:"2-digit",timeZone:this._tz,hour12:"auto"===this._config.time_format?void 0:"12"===this._config.time_format}).format(new Date(e));return t?a.replace(/\s*[APap][.\s]*[Mm][.\s]*$/,"").trim():a}}Pe.styles=De,e([ue()],Pe.prototype,"_config",void 0),e([ue()],Pe.prototype,"_stateObj",void 0),e([ue()],Pe.prototype,"_now",void 0),e([ue()],Pe.prototype,"_pending",void 0),e([ue()],Pe.prototype,"_fit",void 0),customElements.get("dayline-glance-card")||(customElements.define("dayline-glance-card",Pe),window.customCards=window.customCards||[],window.customCards.push({type:"dayline-glance-card",name:"Dayline Glance",description:"The time, what is next, and anything wrong — sized to be read from across a room.",preview:!1}));
