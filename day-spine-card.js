function t(t,e,r,a){var o,i=arguments.length,s=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,a);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(s=(i<3?o(s):i>3?o(e,r,s):o(e,r))||s);return i>3&&s&&Object.defineProperty(e,r,s),s}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;let i=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(e,t))}return t}toString(){return this.cssText}};const s=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,a))(e)})(t):t,{is:n,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:c,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",v=u.reactiveElementPolyfillSupport,m=(t,e)=>t,w={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},_=(t,e)=>!n(t,e),y={attribute:!0,type:String,converter:w,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),a=this.getPropertyDescriptor(t,r,e);void 0!==a&&l(this.prototype,t,a)}}static getPropertyDescriptor(t,e,r){const{get:a,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:a,set(e){const i=a?.call(this);o?.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const t=this.properties,e=[...h(t),...c(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,a)=>{if(r)t.adoptedStyleSheets=a.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of a){const a=document.createElement("style"),o=e.litNonce;void 0!==o&&a.setAttribute("nonce",o),a.textContent=r.cssText,t.appendChild(a)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,r);if(void 0!==a&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:w).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(t,e){const r=this.constructor,a=r._$Eh.get(t);if(void 0!==a&&this._$Em!==a){const t=r.getPropertyOptions(a),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:w;this._$Em=a;const i=o.fromAttribute(e,t.type);this[a]=i??this._$Ej?.get(a)??i,this._$Em=null}}requestUpdate(t,e,r,a=!1,o){if(void 0!==t){const i=this.constructor;if(!1===a&&(o=this[t]),r??=i.getPropertyOptions(t),!((r.hasChanged??_)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:a,wrapped:o},i){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==o||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===a&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,a=this[e];!0!==t||this._$AL.has(e)||void 0===a||this.C(e,void 0,r,a)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[m("elementProperties")]=new Map,b[m("finalized")]=new Map,v?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.1.2");const x=globalThis,$=t=>t,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+E,C=`<${S}>`,T=document,P=()=>T.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,O="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,R=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,B=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),F=B(1),q=B(2),W=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),V=new WeakMap,K=T.createTreeWalker(T,129);function G(t,e){if(!D(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const J=(t,e)=>{const r=t.length-1,a=[];let o,i=2===e?"<svg>":3===e?"<math>":"",s=H;for(let e=0;e<r;e++){const r=t[e];let n,l,d=-1,h=0;for(;h<r.length&&(s.lastIndex=h,l=s.exec(r),null!==l);)h=s.lastIndex,s===H?"!--"===l[1]?s=N:void 0!==l[1]?s=U:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=R):void 0!==l[3]&&(s=R):s===R?">"===l[0]?(s=o??H,d=-1):void 0===l[1]?d=-2:(d=s.lastIndex-l[2].length,n=l[1],s=void 0===l[3]?R:'"'===l[3]?I:j):s===I||s===j?s=R:s===N||s===U?s=H:(s=R,o=void 0);const c=s===R&&t[e+1].startsWith("/>")?" ":"";i+=s===H?r+C:d>=0?(a.push(n),r.slice(0,d)+M+r.slice(d)+E+c):r+E+(-2===d?e:c)}return[G(t,i+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),a]};class Q{constructor({strings:t,_$litType$:e},r){let a;this.parts=[];let o=0,i=0;const s=t.length-1,n=this.parts,[l,d]=J(t,e);if(this.el=Q.createElement(l,r),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(a=K.nextNode())&&n.length<s;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(M)){const e=d[i++],r=a.getAttribute(t).split(E),s=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:s[2],strings:r,ctor:"."===s[1]?rt:"?"===s[1]?at:"@"===s[1]?ot:et}),a.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:o}),a.removeAttribute(t));if(L.test(a.tagName)){const t=a.textContent.split(E),e=t.length-1;if(e>0){a.textContent=k?k.emptyScript:"";for(let r=0;r<e;r++)a.append(t[r],P()),K.nextNode(),n.push({type:2,index:++o});a.append(t[e],P())}}}else if(8===a.nodeType)if(a.data===S)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=a.data.indexOf(E,t+1));)n.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function Y(t,e,r=t,a){if(e===W)return e;let o=void 0!==a?r._$Co?.[a]:r._$Cl;const i=z(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(t),o._$AT(t,r,a)),void 0!==a?(r._$Co??=[])[a]=o:r._$Cl=o),void 0!==o&&(e=Y(t,o._$AS(t,e.values),o,a)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,a=(t?.creationScope??T).importNode(e,!0);K.currentNode=a;let o=K.nextNode(),i=0,s=0,n=r[0];for(;void 0!==n;){if(i===n.index){let e;2===n.type?e=new tt(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new it(o,this,t)),this._$AV.push(e),n=r[++s]}i!==n?.index&&(o=K.nextNode(),i++)}return K.currentNode=T,a}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,a){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),z(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>D(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==Z&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,a="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Q.createElement(G(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(e);else{const t=new X(a,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new Q(t)),e}k(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,a=0;for(const o of t)a===e.length?e.push(r=new tt(this.O(P()),this.O(P()),this,this.options)):r=e[a],r._$AI(o),a++;a<e.length&&(this._$AR(r&&r._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=$(t).nextSibling;$(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,a,o){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Z}_$AI(t,e=this,r,a){const o=this.strings;let i=!1;if(void 0===o)t=Y(this,t,e,0),i=!z(t)||t!==this._$AH&&t!==W,i&&(this._$AH=t);else{const a=t;let s,n;for(t=o[0],s=0;s<o.length-1;s++)n=Y(this,a[r+s],e,s),n===W&&(n=this._$AH[s]),i||=!z(n)||n!==this._$AH[s],n===Z?t=Z:t!==Z&&(t+=(n??"")+o[s+1]),this._$AH[s]=n}i&&!a&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}class at extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Z)}}class ot extends et{constructor(t,e,r,a,o){super(t,e,r,a,o),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??Z)===W)return;const r=this._$AH,a=t===Z&&r!==Z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==Z&&(r===Z||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const st=x.litHtmlPolyfillSupport;st?.(Q,tt),(x.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;let lt=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const a=r?.renderBefore??e;let o=a._$litPart$;if(void 0===o){const t=r?.renderBefore??null;a._$litPart$=o=new tt(e.insertBefore(P(),t),t,void 0,r??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:lt});const dt=nt.litElementPolyfillSupport;dt?.({LitElement:lt}),(nt.litElementVersions??=[]).push("4.2.2");const ht={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:_},ct=(t=ht,e,r)=>{const{kind:a,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===a&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),"accessor"===a){const{name:a}=r;return{set(r){const o=e.get.call(this);e.set.call(this,r),this.requestUpdate(a,o,t,!0,r)},init(e){return void 0!==e&&this.C(a,void 0,t,e),e}}}if("setter"===a){const{name:a}=r;return function(r){const o=this[a];e.call(this,r),this.requestUpdate(a,o,t,!0,r)}}throw Error("Unsupported decorator location: "+a)};function pt(t){return function(t){return(e,r)=>"object"==typeof r?ct(t,e,r):((t,e,r)=>{const a=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),a?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}({...t,state:!0,attribute:!1})}const ut=((t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[a+1],t[0]);return new i(r,t,a)})`
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
`,ft=2;class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class vt extends gt{constructor(t){if(super(t),this.it=Z,t.type!==ft)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Z||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}vt.directiveName="unsafeHTML",vt.resultType=1;class mt extends vt{}mt.directiveName="unsafeSVG",mt.resultType=2;const wt=(t=>(...e)=>({_$litDirective$:t,values:e}))(mt),_t={"calendar-days":'<path d="M8 2v3" /> <path d="M16 2v3" /> <rect x="3" y="3" width="18" height="18" rx="2" /> <path d="M3 9h18" /> <path d="M8 13h.01" /> <path d="M12 13h.01" /> <path d="M16 13h.01" /> <path d="M8 17h.01" /> <path d="M12 17h.01" /> <path d="M16 17h.01" />',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',"triangle-alert":'<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /> <path d="M12 9v4" /> <path d="M12 17h.01" />',"wifi-off":'<path d="M12 20h.01" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" /> <path d="M5 12.859a10 10 0 0 1 5.17-2.69" /> <path d="M19 12.859a10 10 0 0 0-2.007-1.523" /> <path d="M2 8.82a15 15 0 0 1 4.177-2.643" /> <path d="M22 8.82a15 15 0 0 0-11.288-3.764" /> <path d="m2 2 20 20" />',check:'<path d="M20 6 9 17l-5-5" />',sun:'<circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" />',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',cloudy:'<path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" /> <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />',"cloud-sun":'<path d="M12 2v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="M20 12h2" /> <path d="m19.07 4.93-1.41 1.41" /> <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" /> <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />',"cloud-rain":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v6" /> <path d="M8 14v6" /> <path d="M12 16v6" />',"cloud-drizzle":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 19v1" /> <path d="M8 14v1" /> <path d="M16 19v1" /> <path d="M16 14v1" /> <path d="M12 21v1" /> <path d="M12 16v1" />',"cloud-snow":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 15h.01" /> <path d="M8 19h.01" /> <path d="M12 17h.01" /> <path d="M12 21h.01" /> <path d="M16 15h.01" /> <path d="M16 19h.01" />',"cloud-lightning":'<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" /> <path d="m13 12-3 5h4l-3 5" />',"cloud-fog":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 17H7" /> <path d="M17 21H9" />',"cloud-hail":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v2" /> <path d="M8 14v2" /> <path d="M16 20h.01" /> <path d="M8 20h.01" /> <path d="M12 16v2" /> <path d="M12 22h.01" />',wind:'<path d="M12.8 19.6A2 2 0 1 0 14 16H2" /> <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /> <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />'};function yt(t,e){return q`<svg
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
  >${wt(_t[t]??"")}</svg>`}const bt={"clear-night":"moon",cloudy:"cloudy",exceptional:"cloud-lightning",fog:"cloud-fog",hail:"cloud-hail",lightning:"cloud-lightning","lightning-rainy":"cloud-lightning",partlycloudy:"cloud-sun",pouring:"cloud-rain",rainy:"cloud-drizzle",snowy:"cloud-snow","snowy-rainy":"cloud-snow",sunny:"sun",windy:"wind","windy-variant":"wind"};const xt="Past entries stay, struck through, so the day reads as a whole. Sage lines are what the house will do on its own.",$t=["blue","cyan","teal","green","violet","magenta","rose"],kt=t=>t&&$t.includes(t)?`--cal: var(--cal-${t})`:"",At="day-spine-card-fonts",Mt={show_all_day:!0,max_all_day:4,show_sources:!0,show_legend:!0,interactive_rows:!1,max_past:3,max_future:6,collapse_low_priority:!0,recent_events:!0,recent_ttl:300,load_fonts:!0,show_clock:!0,show_day:!0,show_headline:!0,show_sun:!0,show_past:!0,show_tags:!0,show_progress:!0,time_format:"auto",show_weather:!0,use_ha_theme:!1,show_duration:!0};class Et extends lt{constructor(){super(...arguments),this._now=Date.now(),this._expanded=!1,this._alldayExpanded=!1,this._pending=new Set}setConfig(t){if(!t?.entity)throw new Error("day-spine-card: `entity` is required (the merged feed sensor).");this._config={...Mt,...t},this._expanded=!1,this._alldayExpanded=!1,this._applyFonts()}_applyFonts(){const t=this._config.font_family,e=this._config.heading_font_family??t;for(const[r,a]of[["--font-body",t],["--font-heading",e]])a?this.style.setProperty(r,a):this.style.removeProperty(r)}set hass(t){this._hass=t;const e=t?.states?.[this._config?.entity];e!==this._stateObj&&e?.last_updated!==this._stateObj?.last_updated?(this._stateObj=e,this._pending=new Set):!e&&this._stateObj&&(this._stateObj=void 0)}connectedCallback(){super.connectedCallback(),this._config?.load_fonts&&this._loadFonts(),this._startClock()}disconnectedCallback(){super.disconnectedCallback(),this._timer&&window.clearInterval(this._timer),this._align&&window.clearTimeout(this._align),this._timer=this._align=void 0}_startClock(){const t=()=>{this._now=Date.now()};this._align=window.setTimeout(()=>{t(),this._timer=window.setInterval(t,6e4)},6e4-Date.now()%6e4)}_loadFonts(){if(document.getElementById(At))return;const t=document.createElement("link");t.id=At,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Figtree:wght@400;500;600;700&display=swap",document.head.appendChild(t)}getCardSize(){return 6}getGridOptions(){return{columns:12,rows:10,min_columns:6,min_rows:4}}static getStubConfig(t){return{type:"custom:day-spine-card",entity:Object.keys(t?.states??{}).find(e=>e.startsWith("sensor.")&&Array.isArray(t?.states[e]?.attributes?.entries))??"sensor.day_spine",use_ha_theme:!0}}render(){const t=this._config,e=this._stateObj,r=!e||"unavailable"===e.state||"unknown"===e.state,a=e?.attributes??{},o=new Intl.DateTimeFormat(this._locale,{weekday:"long",timeZone:this._tz}).format(new Date(this._now));if(r)return F`<div class="card ${t.use_ha_theme?"themed":""}">
        ${this._renderHeader(o,a.headline??"…")} ${this._renderSkeleton()}
        ${t.show_legend?this._renderFoot(t.legend??xt,!1):Z}
      </div>`;const i=this._live(Array.isArray(a.entries)?a.entries:[]),s=i.filter(t=>t.all_day||this._startedEarlier(t)),n=i.filter(t=>!t.all_day&&!this._startedEarlier(t)),{rows:l,hidden:d}=this._plan(n),h=this._sources(a,i),c=a.stale_message||void 0;return F`<div class="card ${t.use_ha_theme?"themed":""}">
      ${this._renderHeader(o,a.headline??"")}
      ${t.show_all_day&&s.length?this._renderAllDay(s):Z}
      <div class="spine">
        ${l.map(t=>this._renderRow(t))}
        ${d.length?this._renderMore(d.length):Z}
      </div>
      ${c?this._renderFoot(c,!0):Z}
      ${t.show_legend?F`${t.show_sources&&h.length?this._renderSources(h):Z}
            ${this._renderFoot(t.legend??xt,!1)}`:Z}
    </div>`}_renderHeader(t,e){return F`<div class="hdr">
      <div class="hdr-day">
        ${this._config.show_day?F`<div class="day">${t}</div>`:Z}
        ${e&&this._config.show_headline?F`<div class="sub">${e}</div>`:Z}
      </div>
      ${this._renderClock()}
    </div>`}_renderClock(){if(!this._config.show_clock)return Z;const t=this._fmt(this._now,!1),e=this._fmt(this._now,!0),r=t.startsWith(e)?t.slice(e.length).trim():"";return F`<div class="clock">
      ${e}${r?F`<span class="mer">${r}</span>`:Z}
    </div>`}_renderSources(t){return F`<div class="foot pills">
      ${t.map(t=>F`<span
            class="pill ${t.stale?"stale":""}"
            style=${kt(t.color)}
            title=${t.stale?"Not updating":""}
          >
            ${t.color?F`<i class="swatch"></i>`:Z}${t.label}</span
          >`)}
    </div>`}_renderAllDay(t){const e=Math.max(1,this._config.max_all_day),r=t.filter(t=>t.action||"will_fire"===t.tag_state),a=t.filter(t=>!r.includes(t)),o=[...r,...a],i=this._alldayExpanded?0:Math.max(0,o.length-e),s=i?o.slice(0,e):o;return F`<div class="allday">
      ${s.map(e=>{const r=F`${e.title}${this._renderTags(e)}`;return F`<div class="allday-item" style=${kt(e.color)}>
          ${yt("calendar-days",18)}
          <div class="allday-body">
            ${this._startedEarlier(e)&&e.end?F`<div>${r}<span class="dur">until ${this._endLabel(e)}</span></div>`:1!==t.length||e.automation||e.action?F`<div>${r}</div>`:F`All day · ${r}`}
            ${e.automation?F`<div class="auto">${yt("sparkles",14)}${e.automation}</div>`:Z}
            ${this._renderAction(e)}
          </div>
        </div>`})}
      ${i||this._alldayExpanded?F`<button
            class="more-btn allday-more"
            @click=${()=>this._alldayExpanded=!this._alldayExpanded}
          >
            ${this._alldayExpanded?"Show fewer":`+${i} more all day`}
          </button>`:Z}
    </div>`}_renderSkeleton(){return F`<div class="spine">
      ${[0,1,2,3].map(()=>F`<div class="row past skeleton">
          <div class="t"></div>
          <div class="rail"></div>
          <div class="c"></div>
        </div>`)}
    </div>`}_renderRow(t){const e=t.entry,r=this._config.interactive_rows&&!!e?.entity_id&&"now"!==t.variant,a=["row",t.variant,t.last?"last":"",t.firstLive?"live-start":"",t.afterLive?"after-live":"",r?"tappable":"",e?.level&&"normal"!==e.level?`lvl-${e.level}`:"",e&&this._pending.has(e.id)?"done":""].filter(Boolean).join(" ");return F`<div
      class=${a}
      style=${kt(e?.color)}
      role=${r?"button":Z}
      tabindex=${r?0:Z}
      @click=${r?()=>this._moreInfo(e.entity_id):Z}
      @keydown=${r?t=>this._rowKey(t,e.entity_id):Z}
    >
      <div class="t">${t.time}${this._renderWeather(t)}</div>
      <div class="rail"></div>
      <div class="c">${this._renderContent(t)}</div>
    </div>`}_renderTags(t){if(!t.tags?.length||!this._config.show_tags)return Z;const e=t.tag_state??"inert";return F`${t.tags.map(t=>F`<span class="tag ${e}">#${t}</span>`)}`}_renderContent(t){const e=t.entry;switch(t.variant){case"now":return F`<div class="now-l">Now</div>
          ${t.subline?F`<div class="now-s">${t.subline}</div>`:Z}`;case"past":return F`${e.title}${this._renderTags(e)}`;case"recent":return F`${yt("sparkles",14)}<span>${e.title}</span>`;case"live":return F`<div class="ttl">${e.title}${this._renderTags(e)}</div>
          ${e.automation?F`<div class="auto">${yt("sparkles",14)}${e.automation}</div>`:Z}
          ${this._renderProgress(t)} ${this._renderAction(e)}`;default:{const t=this._config.show_duration?this._duration(e):null;return F`<div class="ttl">
            ${this._renderLevel(e)}${e.title}${this._renderTags(e)}${t?F`<span class="dur">${t}</span>`:Z}
          </div>
          ${e.automation?F`<div class="auto">${yt("sparkles",14)}${e.automation}</div>`:Z}
          ${this._renderAction(e)}`}}}_renderLevel(t){return"alert"===t.level?F`${yt("triangle-alert",15)}`:"info"===t.level?F`${yt("info",15)}`:Z}_renderWeather(t){const e=t.entry?.weather;if(!this._config.show_weather||!e||"future"!==t.variant)return Z;if(void 0===e.condition&&void 0===e.temperature)return Z;const r=e.precipitation_probability,a=e.precipitation,o="number"==typeof r&&r>=40||"number"!=typeof r&&"number"==typeof a&&a>0,i="number"==typeof r?`${Math.round(r)}% chance of precipitation`:"number"==typeof a&&a>0?`${a} mm of precipitation forecast`:Z;return F`<div class="wx ${o?"wet":""}" title=${i}>
      ${s=e.condition,n=13,yt(bt[s??""]??"cloud",n)}
      ${void 0!==e.temperature?F`<span>${Math.round(e.temperature)}°</span>`:Z}
    </div>`;var s,n}_renderProgress(t){if(!this._config.show_progress)return Z;const e=Math.round(100*(t.progress??0));return F`<div class="prog">
      <div class="prog-track" role="progressbar" aria-valuenow=${e} aria-valuemin="0" aria-valuemax="100">
        <div class="prog-fill" style="width:${e}%"></div>
        <span class="prog-chip">${this._remaining(t.entry)}</span>
      </div>
      <div class="prog-end">${this._endLabel(t.entry)}</div>
    </div>`}_renderAction(t){const e=t.actions?.length?t.actions:t.action?[t.action]:[];if(!e.length)return Z;const r=this._pending.has(t.id);return F`<div class="acts">
      ${e.slice(0,2).map((e,a)=>F`<button
          class="act ${a?"act-alt":""}"
          ?disabled=${r}
          @click=${r=>{r.stopPropagation(),this._act(t,e)}}
        >
          ${a?Z:yt("check",14)}${e.label}
        </button>`)}
    </div>`}_renderMore(t){return F`<div class="row more">
      <div class="t"></div>
      <div class="rail"></div>
      <div class="c">
        <button class="more-btn" @click=${()=>this._expanded=!this._expanded}>
          ${this._expanded?"Show less":`+${t} more today`}
        </button>
      </div>
    </div>`}_renderFoot(t,e){return F`<div class="foot ${e?"warn":""}">
      ${yt(e?"wifi-off":"info",16)}<span>${t}</span>
    </div>`}_act(t,e){const r=e??t.actions?.[0]??t.action;if(!r)return;if(r.more_info)return this._moreInfo(r.more_info);if(r.url)return void window.open(r.url,"_blank","noopener");if(r.navigate)return history.pushState(null,"",r.navigate),void window.dispatchEvent(new CustomEvent("location-changed"));if(!r.service)return;const[a,o]=r.service.split(".");if(!a||!o)return;this._pending=new Set(this._pending).add(t.id);const i=()=>this._clearPending(t.id);window.setTimeout(i,2e4),this._hass?.callService(a,o,r.data??{},r.target).catch(i)}_clearPending(t){if(!this._pending.has(t))return;const e=new Set(this._pending);e.delete(t),this._pending=e}_moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_rowKey(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._moreInfo(e))}get _locale(){return this._hass?.locale?.language??this._hass?.language??navigator.language}get _tz(){return this._hass?.config?.time_zone}_startedEarlier(t){const e=Date.parse(t.start);return this._dayKey(e)!==this._dayKey(this._now)&&e<this._now}_dayKey(t){return new Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:this._tz}).format(new Date(t))}_live(t){const e=1e3*this._config.recent_ttl;return t.filter(t=>{if(!t?.start||!t?.title)return!1;if("event"===t.kind&&!this._config.recent_events)return!1;if("sun"===t.kind&&!this._config.show_sun)return!1;const r=t.expires?Date.parse(t.expires):"event"===t.kind?Date.parse(t.start)+e:null;return null===r||Number.isNaN(r)||r>this._now})}_plan(t){const e=this._config,r=this._now,a=[...t].sort((t,e)=>Date.parse(t.start)-Date.parse(e.start)),o=[],i=[],s=[],n=[],l=[];for(const t of a){const e=Date.parse(t.start),a=t.end?Date.parse(t.end):NaN;"event"===t.kind?i.push(t):"standing"===t.kind?s.push(t):e>r?l.push(t):!Number.isNaN(a)&&a>r?n.push(t):t.sticky&&t.action?s.push(t):o.push(t)}const d=e.show_past?o:[];let h=d;d.length>e.max_past&&(h=d.slice(d.length-e.max_past));let c=l;if(l.length>e.max_future){const t=l.filter(t=>"high"===this._prio(t)),r=l.filter(t=>"high"!==this._prio(t)),a=Math.max(0,e.max_future-t.length),o=e.collapse_low_priority?[...r.filter(t=>"low"!==this._prio(t)),...r.filter(t=>"low"===this._prio(t))]:r,i=new Set(o.slice(0,a));c=l.filter(e=>t.includes(e)||i.has(e))}const p=[...d.filter(t=>!h.includes(t)),...l.filter(t=>!c.includes(t))],u=this._expanded?d:h,f=this._expanded?l:c,g=[...u.map(t=>this._row("past",t)),...i.map(t=>this._row("recent",t)),...s.map(t=>this._row("overdue",t)),...n.map(t=>this._row("live",t))].sort((t,e)=>Date.parse(t.entry.start)-Date.parse(e.entry.start)),v=g.find(t=>"live"===t.variant);v&&(v.firstLive=!0);const m={variant:"now",time:this._fmt(r,!0),subline:this._stateObj?.attributes?.now??void 0,afterLive:!!v&&"live"===g[g.length-1]?.variant},w=[...g,m,...f.map(t=>this._row("future",t))];return w.length&&!p.length&&(w[w.length-1].last=!0),{rows:w,hidden:p}}_row(t,e){const r={variant:t,entry:e,time:this._fmt(Date.parse(e.start),!1)};if("live"===t){const t=Date.parse(e.start),a=Date.parse(e.end);r.progress=Math.min(1,Math.max(0,(this._now-t)/(a-t)))}return r}_duration(t){if(!t.end||t.all_day)return null;const e=Math.round((Date.parse(t.end)-Date.parse(t.start))/6e4);if(!Number.isFinite(e)||e<5)return null;const r=Math.floor(e/60),a=e%60;return r&&a?`${r}h ${a}m`:r?`${r}h`:`${a}m`}_remaining(t){const e=Math.max(0,Math.round((Date.parse(t.end)-this._now)/6e4)),r=Math.floor(e/60),a=e%60;return`${r&&a?`${r}h ${a}m`:r?`${r}h`:`${a}m`} left`}_endLabel(t){const e=new Date(Date.parse(t.end)),r=this._fmt(e.getTime(),!1),a=new Date(this._now);if(e.toDateString()===a.toDateString())return r;const o=new Date(a);return o.setDate(a.getDate()+1),e.toDateString()===o.toDateString()?`${r} tomorrow`:`${r} ${new Intl.DateTimeFormat(this._locale,{weekday:"short",timeZone:this._tz}).format(e)}`}_prio(t){return"high"===t.priority||"low"===t.priority?t.priority:"sun"===t.kind?"low":"normal"}_fmt(t,e){const r=new Intl.DateTimeFormat(this._locale,{hour:"numeric",minute:"2-digit",timeZone:this._tz,hour12:"auto"===this._config.time_format?void 0:"12"===this._config.time_format}).format(new Date(t));return e?r.replace(/\s*[APap][.\s]*[Mm][.\s]*$/,"").trim():r}_sources(t,e){if(Array.isArray(t.sources)&&t.sources.length)return t.sources.filter(t=>t?.label);const r=[];for(const t of e)t.source&&!r.includes(t.source)&&r.push(t.source);return r.map(t=>({label:t}))}}Et.styles=ut,t([pt()],Et.prototype,"_config",void 0),t([pt()],Et.prototype,"_stateObj",void 0),t([pt()],Et.prototype,"_now",void 0),t([pt()],Et.prototype,"_expanded",void 0),t([pt()],Et.prototype,"_alldayExpanded",void 0),t([pt()],Et.prototype,"_pending",void 0),customElements.get("day-spine-card")||(customElements.define("day-spine-card",Et),window.customCards=window.customCards||[],window.customCards.push({type:"day-spine-card",name:"Dayline",description:"Today as one vertical spine: calendar, sun, and what the house will do on its own.",preview:!1}),console.info("%c DAYLINE %c 0.1.1 ","background:#d67f48;color:#1a1714",""));export{Et as DaySpineCard};
