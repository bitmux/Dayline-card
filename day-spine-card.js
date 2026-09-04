function t(t,e,r,i){var o,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,i);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(s<3?o(a):s>3?o(e,r,a):o(e,r))||a);return s>3&&a&&Object.defineProperty(e,r,a),a}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new WeakMap;let s=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(e,t))}return t}toString(){return this.cssText}};const a=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:n,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:c,getOwnPropertySymbols:h,getPrototypeOf:p}=Object,u=globalThis,f=u.trustedTypes,g=f?f.emptyScript:"",v=u.reactiveElementPolyfillSupport,_=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},w=(t,e)=>!n(t,e),y={attribute:!0,type:String,converter:m,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);void 0!==i&&l(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:o}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:i,set(e){const s=i?.call(this);o?.call(this,e),this.requestUpdate(t,s,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...c(t),...h(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{if(r)t.adoptedStyleSheets=i.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=r.cssText,t.appendChild(i)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:m).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=r.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=i;const s=o.fromAttribute(e,t.type);this[i]=s??this._$Ej?.get(i)??s,this._$Em=null}}requestUpdate(t,e,r,i=!1,o){if(void 0!==t){const s=this.constructor;if(!1===i&&(o=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??w)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===i&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,i=this[e];!0!==t||this._$AL.has(e)||void 0===i||this.C(e,void 0,r,i)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[_("elementProperties")]=new Map,$[_("finalized")]=new Map,v?.({ReactiveElement:$}),(u.reactiveElementVersions??=[]).push("2.1.2");const b=globalThis,x=t=>t,A=b.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,M="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+E,C=`<${S}>`,T=document,P=()=>T.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,z="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,U=/>/g,R=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,I=/"/g,L=/^(?:script|style|textarea|title)$/i,F=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),B=F(1),q=F(2),W=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Z=new WeakMap,K=T.createTreeWalker(T,129);function G(t,e){if(!O(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const J=(t,e)=>{const r=t.length-1,i=[];let o,s=2===e?"<svg>":3===e?"<math>":"",a=H;for(let e=0;e<r;e++){const r=t[e];let n,l,d=-1,c=0;for(;c<r.length&&(a.lastIndex=c,l=a.exec(r),null!==l);)c=a.lastIndex,a===H?"!--"===l[1]?a=N:void 0!==l[1]?a=U:void 0!==l[2]?(L.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=R):void 0!==l[3]&&(a=R):a===R?">"===l[0]?(a=o??H,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,n=l[1],a=void 0===l[3]?R:'"'===l[3]?I:j):a===I||a===j?a=R:a===N||a===U?a=H:(a=R,o=void 0);const h=a===R&&t[e+1].startsWith("/>")?" ":"";s+=a===H?r+C:d>=0?(i.push(n),r.slice(0,d)+M+r.slice(d)+E+h):r+E+(-2===d?e:h)}return[G(t,s+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]};class Y{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,n=this.parts,[l,d]=J(t,e);if(this.el=Y.createElement(l,r),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=K.nextNode())&&n.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(M)){const e=d[s++],r=i.getAttribute(t).split(E),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:a[2],strings:r,ctor:"."===a[1]?rt:"?"===a[1]?it:"@"===a[1]?ot:et}),i.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:o}),i.removeAttribute(t));if(L.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let r=0;r<e;r++)i.append(t[r],P()),K.nextNode(),n.push({type:2,index:++o});i.append(t[e],P())}}}else if(8===i.nodeType)if(i.data===S)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)n.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const r=T.createElement("template");return r.innerHTML=t,r}}function Q(t,e,r=t,i){if(e===W)return e;let o=void 0!==i?r._$Co?.[i]:r._$Cl;const s=D(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,r,i)),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,i)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);K.currentNode=i;let o=K.nextNode(),s=0,a=0,n=r[0];for(;void 0!==n;){if(s===n.index){let e;2===n.type?e=new tt(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new st(o,this,t)),this._$AV.push(e),n=r[++a]}s!==n?.index&&(o=K.nextNode(),s++)}return K.currentNode=T,i}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class tt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),D(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Y.createElement(G(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new X(i,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=Z.get(t.strings);return void 0===e&&Z.set(t.strings,e=new Y(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const o of t)i===e.length?e.push(r=new tt(this.O(P()),this.O(P()),this,this.options)):r=e[i],r._$AI(o),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=V}_$AI(t,e=this,r,i){const o=this.strings;let s=!1;if(void 0===o)t=Q(this,t,e,0),s=!D(t)||t!==this._$AH&&t!==W,s&&(this._$AH=t);else{const i=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=Q(this,i[r+a],e,a),n===W&&(n=this._$AH[a]),s||=!D(n)||n!==this._$AH[a],n===V?t=V:t!==V&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}s&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class rt extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class it extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class ot extends et{constructor(t,e,r,i,o){super(t,e,r,i,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===W)return;const r=this._$AH,i=t===V&&r!==V||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==V&&(r===V||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const at=b.litHtmlPolyfillSupport;at?.(Y,tt),(b.litHtmlVersions??=[]).push("3.3.3");const nt=globalThis;let lt=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const i=r?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=r?.renderBefore??null;i._$litPart$=o=new tt(e.insertBefore(P(),t),t,void 0,r??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};lt._$litElement$=!0,lt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:lt});const dt=nt.litElementPolyfillSupport;dt?.({LitElement:lt}),(nt.litElementVersions??=[]).push("4.2.2");const ct={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:w},ht=(t=ct,e,r)=>{const{kind:i,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===i&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),"accessor"===i){const{name:i}=r;return{set(r){const o=e.get.call(this);e.set.call(this,r),this.requestUpdate(i,o,t,!0,r)},init(e){return void 0!==e&&this.C(i,void 0,t,e),e}}}if("setter"===i){const{name:i}=r;return function(r){const o=this[i];e.call(this,r),this.requestUpdate(i,o,t,!0,r)}}throw Error("Unsupported decorator location: "+i)};function pt(t){return function(t){return(e,r)=>"object"==typeof r?ht(t,e,r):((t,e,r)=>{const i=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),i?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}({...t,state:!0,attribute:!1})}const ut=((t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new s(r,t,i)})`
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
   * Deliberately colors only. The spine's geometry and its two typefaces are the
   * design; a theme that recolors the card still reads as this card, a theme that
   * resizes it does not.
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

    border-radius: var(--ha-card-border-radius, var(--radius-lg));
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
    font: 600 10px/1 ui-monospace, Menlo, monospace;
    padding: 5px 8px;
    border-radius: 999px;
    background: var(--ds-divider);
    color: var(--color-neutral-400);
  }
  .pill.stale {
    background: var(--ds-alert);
    color: var(--color-accent-200);
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

  .allday {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 14px;
    border-radius: var(--radius-md);
    background: var(--ds-raised);
  }
  .allday-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    font-size: 14.5px;
    color: var(--color-neutral-300);
  }
  .allday-item .icon {
    color: var(--color-accent-2-400);
    flex: none;
    margin-top: 1px;
  }
  .allday-body {
    flex: 1;
    min-width: 0;
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
    min-height: 0;
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
  .row.past .rail::after {
    content: "";
    position: absolute;
    left: -4px;
    top: 18px;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: var(--ds-dot-past);
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
  .row.now .t {
    font-family: var(--font-heading);
    font-weight: 400;
    font-size: 20px;
    color: var(--color-accent-400);
    padding-top: 8px;
  }
  .row.now .rail {
    background: linear-gradient(var(--ds-rail-past) 0 20px, var(--color-accent-500) 20px 100%);
  }
  /* Something is already running above the marker — do not break the run. */
  .row.now.after-live .rail {
    background: var(--color-accent-500);
  }
  .row.now .rail::after {
    content: "";
    position: absolute;
    left: -8px;
    top: 12px;
    width: 18px;
    height: 18px;
    border-radius: 999px;
    background: var(--color-accent-500);
    box-shadow: 0 0 0 5px rgba(198, 113, 57, 0.22);
  }
  .row.now .c {
    padding: 6px 0 18px;
  }
  .now-l {
    font-size: 15px;
    font-weight: 700;
    color: var(--color-accent-300);
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
  .row.future .rail::after {
    content: "";
    position: absolute;
    left: -5px;
    top: 17px;
    width: 12px;
    height: 12px;
    border-radius: 999px;
    background: var(--ds-bg);
    border: 3px solid var(--color-accent-2-500);
    box-sizing: border-box;
  }
  .row.future .c {
    padding: 10px 0 16px;
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
`,ft=2;class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class vt extends gt{constructor(t){if(super(t),this.it=V,t.type!==ft)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===V||null==t)return this._t=void 0,this.it=t;if(t===W)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}vt.directiveName="unsafeHTML",vt.resultType=1;class _t extends vt{}_t.directiveName="unsafeSVG",_t.resultType=2;const mt=(t=>(...e)=>({_$litDirective$:t,values:e}))(_t),wt={"calendar-days":'<path d="M8 2v3" /> <path d="M16 2v3" /> <rect x="3" y="3" width="18" height="18" rx="2" /> <path d="M3 9h18" /> <path d="M8 13h.01" /> <path d="M12 13h.01" /> <path d="M16 13h.01" /> <path d="M8 17h.01" /> <path d="M12 17h.01" /> <path d="M16 17h.01" />',sparkles:'<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /> <path d="M20 2v4" /> <path d="M22 4h-4" /> <circle cx="4" cy="20" r="2" />',info:'<circle cx="12" cy="12" r="10" /> <path d="M12 16v-4" /> <path d="M12 8h.01" />',"wifi-off":'<path d="M12 20h.01" /> <path d="M8.5 16.429a5 5 0 0 1 7 0" /> <path d="M5 12.859a10 10 0 0 1 5.17-2.69" /> <path d="M19 12.859a10 10 0 0 0-2.007-1.523" /> <path d="M2 8.82a15 15 0 0 1 4.177-2.643" /> <path d="M22 8.82a15 15 0 0 0-11.288-3.764" /> <path d="m2 2 20 20" />',check:'<path d="M20 6 9 17l-5-5" />',sun:'<circle cx="12" cy="12" r="4" /> <path d="M12 2v2" /> <path d="M12 20v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="m17.66 17.66 1.41 1.41" /> <path d="M2 12h2" /> <path d="M20 12h2" /> <path d="m6.34 17.66-1.41 1.41" /> <path d="m19.07 4.93-1.41 1.41" />',moon:'<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />',cloud:'<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />',cloudy:'<path d="M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" /> <path d="M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" />',"cloud-sun":'<path d="M12 2v2" /> <path d="m4.93 4.93 1.41 1.41" /> <path d="M20 12h2" /> <path d="m19.07 4.93-1.41 1.41" /> <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" /> <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />',"cloud-rain":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v6" /> <path d="M8 14v6" /> <path d="M12 16v6" />',"cloud-drizzle":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 19v1" /> <path d="M8 14v1" /> <path d="M16 19v1" /> <path d="M16 14v1" /> <path d="M12 21v1" /> <path d="M12 16v1" />',"cloud-snow":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M8 15h.01" /> <path d="M8 19h.01" /> <path d="M12 17h.01" /> <path d="M12 21h.01" /> <path d="M16 15h.01" /> <path d="M16 19h.01" />',"cloud-lightning":'<path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" /> <path d="m13 12-3 5h4l-3 5" />',"cloud-fog":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 17H7" /> <path d="M17 21H9" />',"cloud-hail":'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /> <path d="M16 14v2" /> <path d="M8 14v2" /> <path d="M16 20h.01" /> <path d="M8 20h.01" /> <path d="M12 16v2" /> <path d="M12 22h.01" />',wind:'<path d="M12.8 19.6A2 2 0 1 0 14 16H2" /> <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" /> <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />'};function yt(t,e){return q`<svg
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
  >${mt(wt[t]??"")}</svg>`}const $t={"clear-night":"moon",cloudy:"cloudy",exceptional:"cloud-lightning",fog:"cloud-fog",hail:"cloud-hail",lightning:"cloud-lightning","lightning-rainy":"cloud-lightning",partlycloudy:"cloud-sun",pouring:"cloud-rain",rainy:"cloud-drizzle",snowy:"cloud-snow","snowy-rainy":"cloud-snow",sunny:"sun",windy:"wind","windy-variant":"wind"};const bt="Past entries stay, struck through, so the day reads as a whole. Sage lines are what the house will do on its own.",xt="day-spine-card-fonts",At={show_all_day:!0,show_sources:!0,show_legend:!0,interactive_rows:!1,max_past:3,max_future:6,collapse_low_priority:!0,recent_events:!0,recent_ttl:300,load_fonts:!0,show_clock:!0,show_day:!0,show_headline:!0,show_sun:!0,show_past:!0,show_tags:!0,show_progress:!0,time_format:"auto",show_weather:!0,use_ha_theme:!1,show_duration:!0};class kt extends lt{constructor(){super(...arguments),this._now=Date.now(),this._expanded=!1,this._pending=new Set}setConfig(t){if(!t?.entity)throw new Error("day-spine-card: `entity` is required (the merged feed sensor).");this._config={...At,...t},this._expanded=!1,this._applyFonts()}_applyFonts(){const t=this._config.font_family,e=this._config.heading_font_family??t;for(const[r,i]of[["--font-body",t],["--font-heading",e]])i?this.style.setProperty(r,i):this.style.removeProperty(r)}set hass(t){this._hass=t;const e=t?.states?.[this._config?.entity];e!==this._stateObj&&e?.last_updated!==this._stateObj?.last_updated?(this._stateObj=e,this._pending=new Set):!e&&this._stateObj&&(this._stateObj=void 0)}connectedCallback(){super.connectedCallback(),this._config?.load_fonts&&this._loadFonts(),this._startClock()}disconnectedCallback(){super.disconnectedCallback(),this._timer&&window.clearInterval(this._timer),this._align&&window.clearTimeout(this._align),this._timer=this._align=void 0}_startClock(){const t=()=>{this._now=Date.now()};this._align=window.setTimeout(()=>{t(),this._timer=window.setInterval(t,6e4)},6e4-Date.now()%6e4)}_loadFonts(){if(document.getElementById(xt))return;const t=document.createElement("link");t.id=xt,t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=Caprasimo&family=Figtree:wght@400;500;600;700&display=swap",document.head.appendChild(t)}getCardSize(){return 6}getGridOptions(){return{columns:12,rows:10,min_columns:6,min_rows:4}}static getStubConfig(t){return{type:"custom:day-spine-card",entity:Object.keys(t?.states??{}).find(e=>e.startsWith("sensor.")&&Array.isArray(t?.states[e]?.attributes?.entries))??"sensor.day_spine"}}render(){const t=this._config,e=this._stateObj,r=!e||"unavailable"===e.state||"unknown"===e.state,i=e?.attributes??{},o=new Intl.DateTimeFormat(this._locale,{weekday:"long",timeZone:this._tz}).format(new Date(this._now));if(r)return B`<div class="card ${t.use_ha_theme?"themed":""}">
        ${this._renderHeader(o,i.headline??"…")} ${this._renderSkeleton()}
        ${t.show_legend?this._renderFoot(t.legend??bt,!1):V}
      </div>`;const s=this._live(Array.isArray(i.entries)?i.entries:[]),a=s.filter(t=>t.all_day||this._startedEarlier(t)),n=s.filter(t=>!t.all_day&&!this._startedEarlier(t)),{rows:l,hidden:d}=this._plan(n),c=this._sources(i,s),h=i.stale_message||void 0;return B`<div class="card ${t.use_ha_theme?"themed":""}">
      ${this._renderHeader(o,i.headline??"")}
      ${t.show_all_day&&a.length?this._renderAllDay(a):V}
      <div class="spine">
        ${l.map(t=>this._renderRow(t))}
        ${d.length?this._renderMore(d.length):V}
      </div>
      ${t.show_sources&&c.length?this._renderSources(c):V}
      ${h?this._renderFoot(h,!0):V}
      ${t.show_legend?this._renderFoot(t.legend??bt,!1):V}
    </div>`}_renderHeader(t,e){return B`<div class="hdr">
      <div class="hdr-day">
        ${this._config.show_day?B`<div class="day">${t}</div>`:V}
        ${e&&this._config.show_headline?B`<div class="sub">${e}</div>`:V}
      </div>
      ${this._renderClock()}
    </div>`}_renderClock(){if(!this._config.show_clock)return V;const t=this._fmt(this._now,!1),e=this._fmt(this._now,!0),r=t.startsWith(e)?t.slice(e.length).trim():"";return B`<div class="clock">
      ${e}${r?B`<span class="mer">${r}</span>`:V}
    </div>`}_renderSources(t){return B`<div class="foot pills">
      ${t.map(t=>B`<span class="pill ${t.stale?"stale":""}" title=${t.stale?"Not updating":""}
            >${t.label}</span
          >`)}
    </div>`}_renderAllDay(t){return B`<div class="allday">
      ${t.map(e=>{const r=B`${e.title}${this._renderTags(e)}`;return B`<div class="allday-item">
          ${yt("calendar-days",18)}
          <div class="allday-body">
            ${this._startedEarlier(e)&&e.end?B`<div>${r}<span class="dur">until ${this._endLabel(e)}</span></div>`:1!==t.length||e.automation||e.action?B`<div>${r}</div>`:B`All day · ${r}`}
            ${e.automation?B`<div class="auto">${yt("sparkles",14)}${e.automation}</div>`:V}
            ${this._renderAction(e)}
          </div>
        </div>`})}
    </div>`}_renderSkeleton(){return B`<div class="spine">
      ${[0,1,2,3].map(()=>B`<div class="row past skeleton">
          <div class="t"></div>
          <div class="rail"></div>
          <div class="c"></div>
        </div>`)}
    </div>`}_renderRow(t){const e=t.entry,r=this._config.interactive_rows&&!!e?.entity_id&&"now"!==t.variant,i=["row",t.variant,t.last?"last":"",t.firstLive?"live-start":"",t.afterLive?"after-live":"",r?"tappable":"",e&&this._pending.has(e.id)?"done":""].filter(Boolean).join(" ");return B`<div
      class=${i}
      role=${r?"button":V}
      tabindex=${r?0:V}
      @click=${r?()=>this._moreInfo(e.entity_id):V}
      @keydown=${r?t=>this._rowKey(t,e.entity_id):V}
    >
      <div class="t">${t.time}${this._renderWeather(t)}</div>
      <div class="rail"></div>
      <div class="c">${this._renderContent(t)}</div>
    </div>`}_renderTags(t){if(!t.tags?.length||!this._config.show_tags)return V;const e=t.tag_state??"inert";return B`${t.tags.map(t=>B`<span class="tag ${e}">#${t}</span>`)}`}_renderContent(t){const e=t.entry;switch(t.variant){case"now":return B`<div class="now-l">Now</div>
          ${t.subline?B`<div class="now-s">${t.subline}</div>`:V}`;case"past":return B`${e.title}${this._renderTags(e)}`;case"recent":return B`${yt("sparkles",14)}<span>${e.title}</span>`;case"live":return B`<div class="ttl">${e.title}${this._renderTags(e)}</div>
          ${e.automation?B`<div class="auto">${yt("sparkles",14)}${e.automation}</div>`:V}
          ${this._renderProgress(t)} ${this._renderAction(e)}`;default:{const t=this._config.show_duration?this._duration(e):null;return B`<div class="ttl">
            ${e.title}${this._renderTags(e)}${t?B`<span class="dur">${t}</span>`:V}
          </div>
          ${e.automation?B`<div class="auto">${yt("sparkles",14)}${e.automation}</div>`:V}
          ${this._renderAction(e)}`}}}_renderWeather(t){const e=t.entry?.weather;if(!this._config.show_weather||!e||"future"!==t.variant)return V;if(void 0===e.condition&&void 0===e.temperature)return V;const r=e.precipitation_probability,i=e.precipitation,o="number"==typeof r&&r>=40||"number"!=typeof r&&"number"==typeof i&&i>0,s="number"==typeof r?`${Math.round(r)}% chance of precipitation`:"number"==typeof i&&i>0?`${i} mm of precipitation forecast`:V;return B`<div class="wx ${o?"wet":""}" title=${s}>
      ${a=e.condition,n=13,yt($t[a??""]??"cloud",n)}
      ${void 0!==e.temperature?B`<span>${Math.round(e.temperature)}°</span>`:V}
    </div>`;var a,n}_renderProgress(t){if(!this._config.show_progress)return V;const e=Math.round(100*(t.progress??0));return B`<div class="prog">
      <div class="prog-track" role="progressbar" aria-valuenow=${e} aria-valuemin="0" aria-valuemax="100">
        <div class="prog-fill" style="width:${e}%"></div>
        <span class="prog-chip">${this._remaining(t.entry)}</span>
      </div>
      <div class="prog-end">${this._endLabel(t.entry)}</div>
    </div>`}_renderAction(t){if(!t.action)return V;const e=this._pending.has(t.id);return B`<button
      class="act"
      ?disabled=${e}
      @click=${e=>{e.stopPropagation(),this._act(t)}}
    >
      ${yt("check",14)}${t.action.label}
    </button>`}_renderMore(t){return B`<div class="row more">
      <div class="t"></div>
      <div class="rail"></div>
      <div class="c">
        <button class="more-btn" @click=${()=>this._expanded=!this._expanded}>
          ${this._expanded?"Show less":`+${t} more today`}
        </button>
      </div>
    </div>`}_renderFoot(t,e){return B`<div class="foot ${e?"warn":""}">
      ${yt(e?"wifi-off":"info",16)}<span>${t}</span>
    </div>`}_act(t){const e=t.action,[r,i]=e.service.split(".");r&&i&&(this._pending=new Set(this._pending).add(t.id),this._hass?.callService(r,i,e.data??{},e.target).catch(()=>{const e=new Set(this._pending);e.delete(t.id),this._pending=e}))}_moreInfo(t){this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_rowKey(t,e){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._moreInfo(e))}get _locale(){return this._hass?.locale?.language??this._hass?.language??navigator.language}get _tz(){return this._hass?.config?.time_zone}_startedEarlier(t){const e=Date.parse(t.start);return this._dayKey(e)!==this._dayKey(this._now)&&e<this._now}_dayKey(t){return new Intl.DateTimeFormat("en-CA",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:this._tz}).format(new Date(t))}_live(t){const e=1e3*this._config.recent_ttl;return t.filter(t=>{if(!t?.start||!t?.title)return!1;if("event"===t.kind&&!this._config.recent_events)return!1;if("sun"===t.kind&&!this._config.show_sun)return!1;const r=t.expires?Date.parse(t.expires):"event"===t.kind?Date.parse(t.start)+e:null;return null===r||Number.isNaN(r)||r>this._now})}_plan(t){const e=this._config,r=this._now,i=[...t].sort((t,e)=>Date.parse(t.start)-Date.parse(e.start)),o=[],s=[],a=[],n=[],l=[];for(const t of i){const e=Date.parse(t.start),i=t.end?Date.parse(t.end):NaN;"event"===t.kind?s.push(t):e>r?l.push(t):!Number.isNaN(i)&&i>r?n.push(t):t.sticky&&t.action?a.push(t):o.push(t)}const d=e.show_past?o:[];let c=d;d.length>e.max_past&&(c=d.slice(d.length-e.max_past));let h=l;if(l.length>e.max_future){const t=l.filter(t=>"high"===this._prio(t)),r=l.filter(t=>"high"!==this._prio(t)),i=Math.max(0,e.max_future-t.length),o=e.collapse_low_priority?[...r.filter(t=>"low"!==this._prio(t)),...r.filter(t=>"low"===this._prio(t))]:r,s=new Set(o.slice(0,i));h=l.filter(e=>t.includes(e)||s.has(e))}const p=[...d.filter(t=>!c.includes(t)),...l.filter(t=>!h.includes(t))],u=this._expanded?d:c,f=this._expanded?l:h,g=[...u.map(t=>this._row("past",t)),...s.map(t=>this._row("recent",t)),...a.map(t=>this._row("overdue",t)),...n.map(t=>this._row("live",t))].sort((t,e)=>Date.parse(t.entry.start)-Date.parse(e.entry.start)),v=g.find(t=>"live"===t.variant);v&&(v.firstLive=!0);const _={variant:"now",time:this._fmt(r,!0),subline:this._stateObj?.attributes?.now??void 0,afterLive:!!v&&"live"===g[g.length-1]?.variant},m=[...g,_,...f.map(t=>this._row("future",t))];return m.length&&!p.length&&(m[m.length-1].last=!0),{rows:m,hidden:p}}_row(t,e){const r={variant:t,entry:e,time:this._fmt(Date.parse(e.start),!1)};if("live"===t){const t=Date.parse(e.start),i=Date.parse(e.end);r.progress=Math.min(1,Math.max(0,(this._now-t)/(i-t)))}return r}_duration(t){if(!t.end||t.all_day)return null;const e=Math.round((Date.parse(t.end)-Date.parse(t.start))/6e4);if(!Number.isFinite(e)||e<5)return null;const r=Math.floor(e/60),i=e%60;return r&&i?`${r}h ${i}m`:r?`${r}h`:`${i}m`}_remaining(t){const e=Math.max(0,Math.round((Date.parse(t.end)-this._now)/6e4)),r=Math.floor(e/60),i=e%60;return`${r&&i?`${r}h ${i}m`:r?`${r}h`:`${i}m`} left`}_endLabel(t){const e=new Date(Date.parse(t.end)),r=this._fmt(e.getTime(),!1),i=new Date(this._now);if(e.toDateString()===i.toDateString())return r;const o=new Date(i);return o.setDate(i.getDate()+1),e.toDateString()===o.toDateString()?`${r} tomorrow`:`${r} ${new Intl.DateTimeFormat(this._locale,{weekday:"short",timeZone:this._tz}).format(e)}`}_prio(t){return"high"===t.priority||"low"===t.priority?t.priority:"sun"===t.kind?"low":"normal"}_fmt(t,e){const r=new Intl.DateTimeFormat(this._locale,{hour:"numeric",minute:"2-digit",timeZone:this._tz,hour12:"auto"===this._config.time_format?void 0:"12"===this._config.time_format}).format(new Date(t));return e?r.replace(/\s*[APap][.\s]*[Mm][.\s]*$/,"").trim():r}_sources(t,e){if(Array.isArray(t.sources)&&t.sources.length)return t.sources.filter(t=>t?.label);const r=[];for(const t of e)t.source&&!r.includes(t.source)&&r.push(t.source);return r.map(t=>({label:t}))}}kt.styles=ut,t([pt()],kt.prototype,"_config",void 0),t([pt()],kt.prototype,"_stateObj",void 0),t([pt()],kt.prototype,"_now",void 0),t([pt()],kt.prototype,"_expanded",void 0),t([pt()],kt.prototype,"_pending",void 0),customElements.get("day-spine-card")||(customElements.define("day-spine-card",kt),window.customCards=window.customCards||[],window.customCards.push({type:"day-spine-card",name:"Dayline",description:"Today as one vertical spine: calendar, sun, and what the house will do on its own.",preview:!1}),console.info("%c DAYLINE %c 0.1.1 ","background:#d67f48;color:#1a1714",""));export{kt as DaySpineCard};
