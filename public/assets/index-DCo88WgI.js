(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();var nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var E0={exports:{}},Ic={},k0={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ds=Symbol.for("react.element"),OS=Symbol.for("react.portal"),TS=Symbol.for("react.fragment"),_S=Symbol.for("react.strict_mode"),PS=Symbol.for("react.profiler"),RS=Symbol.for("react.provider"),MS=Symbol.for("react.context"),AS=Symbol.for("react.forward_ref"),LS=Symbol.for("react.suspense"),IS=Symbol.for("react.memo"),zS=Symbol.for("react.lazy"),Rm=Symbol.iterator;function FS(e){return e===null||typeof e!="object"?null:(e=Rm&&e[Rm]||e["@@iterator"],typeof e=="function"?e:null)}var j0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$0=Object.assign,N0={};function jo(e,t,r){this.props=e,this.context=t,this.refs=N0,this.updater=r||j0}jo.prototype.isReactComponent={};jo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function C0(){}C0.prototype=jo.prototype;function xp(e,t,r){this.props=e,this.context=t,this.refs=N0,this.updater=r||j0}var Sp=xp.prototype=new C0;Sp.constructor=xp;$0(Sp,jo.prototype);Sp.isPureReactComponent=!0;var Mm=Array.isArray,D0=Object.prototype.hasOwnProperty,Ep={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function T0(e,t,r){var n,a={},o=null,i=null;if(t!=null)for(n in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)D0.call(t,n)&&!O0.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(s===1)a.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:ds,type:e,key:o,ref:i,props:a,_owner:Ep.current}}function US(e,t){return{$$typeof:ds,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function kp(e){return typeof e=="object"&&e!==null&&e.$$typeof===ds}function BS(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Am=/\/+/g;function Yu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?BS(""+e.key):t.toString(36)}function yl(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case ds:case OS:i=!0}}if(i)return i=e,a=a(i),e=n===""?"."+Yu(i,0):n,Mm(a)?(r="",e!=null&&(r=e.replace(Am,"$&/")+"/"),yl(a,t,r,"",function(u){return u})):a!=null&&(kp(a)&&(a=US(a,r+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Am,"$&/")+"/")+e)),t.push(a)),1;if(i=0,n=n===""?".":n+":",Mm(e))for(var s=0;s<e.length;s++){o=e[s];var l=n+Yu(o,s);i+=yl(o,t,r,l,a)}else if(l=FS(e),typeof l=="function")for(e=l.call(e),s=0;!(o=e.next()).done;)o=o.value,l=n+Yu(o,s++),i+=yl(o,t,r,l,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Hs(e,t,r){if(e==null)return e;var n=[],a=0;return yl(e,n,"","",function(o){return t.call(r,o,a++)}),n}function HS(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Dt={current:null},wl={transition:null},WS={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:wl,ReactCurrentOwner:Ep};function _0(){throw Error("act(...) is not supported in production builds of React.")}ge.Children={map:Hs,forEach:function(e,t,r){Hs(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Hs(e,function(){t++}),t},toArray:function(e){return Hs(e,function(t){return t})||[]},only:function(e){if(!kp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ge.Component=jo;ge.Fragment=TS;ge.Profiler=PS;ge.PureComponent=xp;ge.StrictMode=_S;ge.Suspense=LS;ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;ge.act=_0;ge.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=$0({},e.props),a=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ep.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)D0.call(t,l)&&!O0.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:ds,type:e.type,key:a,ref:o,props:n,_owner:i}};ge.createContext=function(e){return e={$$typeof:MS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:RS,_context:e},e.Consumer=e};ge.createElement=T0;ge.createFactory=function(e){var t=T0.bind(null,e);return t.type=e,t};ge.createRef=function(){return{current:null}};ge.forwardRef=function(e){return{$$typeof:AS,render:e}};ge.isValidElement=kp;ge.lazy=function(e){return{$$typeof:zS,_payload:{_status:-1,_result:e},_init:HS}};ge.memo=function(e,t){return{$$typeof:IS,type:e,compare:t===void 0?null:t}};ge.startTransition=function(e){var t=wl.transition;wl.transition={};try{e()}finally{wl.transition=t}};ge.unstable_act=_0;ge.useCallback=function(e,t){return Dt.current.useCallback(e,t)};ge.useContext=function(e){return Dt.current.useContext(e)};ge.useDebugValue=function(){};ge.useDeferredValue=function(e){return Dt.current.useDeferredValue(e)};ge.useEffect=function(e,t){return Dt.current.useEffect(e,t)};ge.useId=function(){return Dt.current.useId()};ge.useImperativeHandle=function(e,t,r){return Dt.current.useImperativeHandle(e,t,r)};ge.useInsertionEffect=function(e,t){return Dt.current.useInsertionEffect(e,t)};ge.useLayoutEffect=function(e,t){return Dt.current.useLayoutEffect(e,t)};ge.useMemo=function(e,t){return Dt.current.useMemo(e,t)};ge.useReducer=function(e,t,r){return Dt.current.useReducer(e,t,r)};ge.useRef=function(e){return Dt.current.useRef(e)};ge.useState=function(e){return Dt.current.useState(e)};ge.useSyncExternalStore=function(e,t,r){return Dt.current.useSyncExternalStore(e,t,r)};ge.useTransition=function(){return Dt.current.useTransition()};ge.version="18.3.1";k0.exports=ge;var $=k0.exports;const C=qe($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VS=$,GS=Symbol.for("react.element"),YS=Symbol.for("react.fragment"),KS=Object.prototype.hasOwnProperty,qS=VS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XS={key:!0,ref:!0,__self:!0,__source:!0};function P0(e,t,r){var n,a={},o=null,i=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(n in t)KS.call(t,n)&&!XS.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:GS,type:e,key:o,ref:i,props:a,_owner:qS.current}}Ic.Fragment=YS;Ic.jsx=P0;Ic.jsxs=P0;E0.exports=Ic;var c=E0.exports,Gd={},R0={exports:{}},Xt={},M0={exports:{}},A0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,F){var H=T.length;T.push(F);e:for(;0<H;){var Z=H-1>>>1,P=T[Z];if(0<a(P,F))T[Z]=F,T[H]=P,H=Z;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var F=T[0],H=T.pop();if(H!==F){T[0]=H;e:for(var Z=0,P=T.length,L=P>>>1;Z<L;){var U=2*(Z+1)-1,G=T[U],J=U+1,oe=T[J];if(0>a(G,H))J<P&&0>a(oe,G)?(T[Z]=oe,T[J]=H,Z=J):(T[Z]=G,T[U]=H,Z=U);else if(J<P&&0>a(oe,H))T[Z]=oe,T[J]=H,Z=J;else break e}}return F}function a(T,F){var H=T.sortIndex-F.sortIndex;return H!==0?H:T.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],d=1,f=null,p=3,v=!1,y=!1,m=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(T){for(var F=r(u);F!==null;){if(F.callback===null)n(u);else if(F.startTime<=T)n(u),F.sortIndex=F.expirationTime,t(l,F);else break;F=r(u)}}function S(T){if(m=!1,w(T),!y)if(r(l)!==null)y=!0,I(b);else{var F=r(u);F!==null&&V(S,F.startTime-T)}}function b(T,F){y=!1,m&&(m=!1,h(k),k=-1),v=!0;var H=p;try{for(w(F),f=r(l);f!==null&&(!(f.expirationTime>F)||T&&!R());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,p=f.priorityLevel;var P=Z(f.expirationTime<=F);F=e.unstable_now(),typeof P=="function"?f.callback=P:f===r(l)&&n(l),w(F)}else n(l);f=r(l)}if(f!==null)var L=!0;else{var U=r(u);U!==null&&V(S,U.startTime-F),L=!1}return L}finally{f=null,p=H,v=!1}}var E=!1,j=null,k=-1,D=5,O=-1;function R(){return!(e.unstable_now()-O<D)}function Q(){if(j!==null){var T=e.unstable_now();O=T;var F=!0;try{F=j(!0,T)}finally{F?X():(E=!1,j=null)}}else E=!1}var X;if(typeof g=="function")X=function(){g(Q)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,z=Y.port2;Y.port1.onmessage=Q,X=function(){z.postMessage(null)}}else X=function(){x(Q,0)};function I(T){j=T,E||(E=!0,X())}function V(T,F){k=x(function(){T(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,I(b))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(l)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var F=3;break;default:F=p}var H=p;p=F;try{return T()}finally{p=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,F){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=p;p=T;try{return F()}finally{p=H}},e.unstable_scheduleCallback=function(T,F,H){var Z=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?Z+H:Z):H=Z,T){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=H+P,T={id:d++,callback:F,priorityLevel:T,startTime:H,expirationTime:P,sortIndex:-1},H>Z?(T.sortIndex=H,t(u,T),r(l)===null&&T===r(u)&&(m?(h(k),k=-1):m=!0,V(S,H-Z))):(T.sortIndex=P,t(l,T),y||v||(y=!0,I(b))),T},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(T){var F=p;return function(){var H=p;p=F;try{return T.apply(this,arguments)}finally{p=H}}}})(A0);M0.exports=A0;var QS=M0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JS=$,Kt=QS;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L0=new Set,Oi={};function $a(e,t){oo(e,t),oo(e+"Capture",t)}function oo(e,t){for(Oi[e]=t,e=0;e<t.length;e++)L0.add(t[e])}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yd=Object.prototype.hasOwnProperty,ZS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Lm={},Im={};function eE(e){return Yd.call(Im,e)?!0:Yd.call(Lm,e)?!1:ZS.test(e)?Im[e]=!0:(Lm[e]=!0,!1)}function tE(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rE(e,t,r,n){if(t===null||typeof t>"u"||tE(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ot(e,t,r,n,a,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){vt[e]=new Ot(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];vt[t]=new Ot(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){vt[e]=new Ot(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){vt[e]=new Ot(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){vt[e]=new Ot(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){vt[e]=new Ot(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){vt[e]=new Ot(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){vt[e]=new Ot(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){vt[e]=new Ot(e,5,!1,e.toLowerCase(),null,!1,!1)});var jp=/[\-:]([a-z])/g;function $p(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(jp,$p);vt[t]=new Ot(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(jp,$p);vt[t]=new Ot(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(jp,$p);vt[t]=new Ot(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){vt[e]=new Ot(e,1,!1,e.toLowerCase(),null,!1,!1)});vt.xlinkHref=new Ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){vt[e]=new Ot(e,1,!1,e.toLowerCase(),null,!0,!0)});function Np(e,t,r,n){var a=vt.hasOwnProperty(t)?vt[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rE(t,r,a,n)&&(r=null),n||a===null?eE(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var cn=JS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ws=Symbol.for("react.element"),Ia=Symbol.for("react.portal"),za=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),Kd=Symbol.for("react.profiler"),I0=Symbol.for("react.provider"),z0=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),qd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),Op=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),F0=Symbol.for("react.offscreen"),zm=Symbol.iterator;function qo(e){return e===null||typeof e!="object"?null:(e=zm&&e[zm]||e["@@iterator"],typeof e=="function"?e:null)}var Ve=Object.assign,Ku;function ui(e){if(Ku===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Ku=t&&t[1]||""}return`
`+Ku+e}var qu=!1;function Xu(e,t){if(!e||qu)return"";qu=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=n.stack.split(`
`),i=a.length-1,s=o.length-1;1<=i&&0<=s&&a[i]!==o[s];)s--;for(;1<=i&&0<=s;i--,s--)if(a[i]!==o[s]){if(i!==1||s!==1)do if(i--,s--,0>s||a[i]!==o[s]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{qu=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ui(e):""}function nE(e){switch(e.tag){case 5:return ui(e.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return e=Xu(e.type,!1),e;case 11:return e=Xu(e.type.render,!1),e;case 1:return e=Xu(e.type,!0),e;default:return""}}function Qd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case za:return"Fragment";case Ia:return"Portal";case Kd:return"Profiler";case Cp:return"StrictMode";case qd:return"Suspense";case Xd:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case z0:return(e.displayName||"Context")+".Consumer";case I0:return(e._context.displayName||"Context")+".Provider";case Dp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Op:return t=e.displayName||null,t!==null?t:Qd(e.type)||"Memo";case wn:t=e._payload,e=e._init;try{return Qd(e(t))}catch{}}return null}function aE(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qd(t);case 8:return t===Cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function U0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oE(e){var t=U0(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){n=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(i){n=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vs(e){e._valueTracker||(e._valueTracker=oE(e))}function B0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=U0(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jd(e,t){var r=t.checked;return Ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Fm(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Mn(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function H0(e,t){t=t.checked,t!=null&&Np(e,"checked",t,!1)}function Zd(e,t){H0(e,t);var r=Mn(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ef(e,t.type,r):t.hasOwnProperty("defaultValue")&&ef(e,t.type,Mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Um(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function ef(e,t,r){(t!=="number"||Yl(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var di=Array.isArray;function Qa(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Mn(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function tf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return Ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(q(92));if(di(r)){if(1<r.length)throw Error(q(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Mn(r)}}function W0(e,t){var r=Mn(t.value),n=Mn(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Hm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function V0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?V0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gs,G0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gs=Gs||document.createElement("div"),Gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ti(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var gi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iE=["Webkit","ms","Moz","O"];Object.keys(gi).forEach(function(e){iE.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gi[t]=gi[e]})});function Y0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||gi.hasOwnProperty(e)&&gi[e]?(""+t).trim():t+"px"}function K0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=Y0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var sE=Ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nf(e,t){if(t){if(sE[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function af(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function Tp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sf=null,Ja=null,Za=null;function Wm(e){if(e=hs(e)){if(typeof sf!="function")throw Error(q(280));var t=e.stateNode;t&&(t=Hc(t),sf(e.stateNode,e.type,t))}}function q0(e){Ja?Za?Za.push(e):Za=[e]:Ja=e}function X0(){if(Ja){var e=Ja,t=Za;if(Za=Ja=null,Wm(e),t)for(e=0;e<t.length;e++)Wm(t[e])}}function Q0(e,t){return e(t)}function J0(){}var Qu=!1;function Z0(e,t,r){if(Qu)return e(t,r);Qu=!0;try{return Q0(e,t,r)}finally{Qu=!1,(Ja!==null||Za!==null)&&(J0(),X0())}}function _i(e,t){var r=e.stateNode;if(r===null)return null;var n=Hc(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(q(231,t,typeof r));return r}var lf=!1;if(rn)try{var Xo={};Object.defineProperty(Xo,"passive",{get:function(){lf=!0}}),window.addEventListener("test",Xo,Xo),window.removeEventListener("test",Xo,Xo)}catch{lf=!1}function lE(e,t,r,n,a,o,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var yi=!1,Kl=null,ql=!1,cf=null,cE={onError:function(e){yi=!0,Kl=e}};function uE(e,t,r,n,a,o,i,s,l){yi=!1,Kl=null,lE.apply(cE,arguments)}function dE(e,t,r,n,a,o,i,s,l){if(uE.apply(this,arguments),yi){if(yi){var u=Kl;yi=!1,Kl=null}else throw Error(q(198));ql||(ql=!0,cf=u)}}function Na(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ey(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vm(e){if(Na(e)!==e)throw Error(q(188))}function fE(e){var t=e.alternate;if(!t){if(t=Na(e),t===null)throw Error(q(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Vm(a),e;if(o===n)return Vm(a),t;o=o.sibling}throw Error(q(188))}if(r.return!==n.return)r=a,n=o;else{for(var i=!1,s=a.child;s;){if(s===r){i=!0,r=a,n=o;break}if(s===n){i=!0,n=a,r=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===r){i=!0,r=o,n=a;break}if(s===n){i=!0,n=o,r=a;break}s=s.sibling}if(!i)throw Error(q(189))}}if(r.alternate!==n)throw Error(q(190))}if(r.tag!==3)throw Error(q(188));return r.stateNode.current===r?e:t}function ty(e){return e=fE(e),e!==null?ry(e):null}function ry(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ry(e);if(t!==null)return t;e=e.sibling}return null}var ny=Kt.unstable_scheduleCallback,Gm=Kt.unstable_cancelCallback,pE=Kt.unstable_shouldYield,hE=Kt.unstable_requestPaint,Qe=Kt.unstable_now,mE=Kt.unstable_getCurrentPriorityLevel,_p=Kt.unstable_ImmediatePriority,ay=Kt.unstable_UserBlockingPriority,Xl=Kt.unstable_NormalPriority,vE=Kt.unstable_LowPriority,oy=Kt.unstable_IdlePriority,zc=null,Ar=null;function gE(e){if(Ar&&typeof Ar.onCommitFiberRoot=="function")try{Ar.onCommitFiberRoot(zc,e,void 0,(e.current.flags&128)===128)}catch{}}var xr=Math.clz32?Math.clz32:bE,yE=Math.log,wE=Math.LN2;function bE(e){return e>>>=0,e===0?32:31-(yE(e)/wE|0)|0}var Ys=64,Ks=4194304;function fi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ql(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,i=r&268435455;if(i!==0){var s=i&~a;s!==0?n=fi(s):(o&=i,o!==0&&(n=fi(o)))}else i=r&~a,i!==0?n=fi(i):o!==0&&(n=fi(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-xr(t),a=1<<r,n|=e[r],t&=~a;return n}function xE(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SE(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-xr(o),s=1<<i,l=a[i];l===-1?(!(s&r)||s&n)&&(a[i]=xE(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}function uf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iy(){var e=Ys;return Ys<<=1,!(Ys&4194240)&&(Ys=64),e}function Ju(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function fs(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xr(t),e[t]=r}function EE(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-xr(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function Pp(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-xr(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var ke=0;function sy(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ly,Rp,cy,uy,dy,df=!1,qs=[],Nn=null,Cn=null,Dn=null,Pi=new Map,Ri=new Map,xn=[],kE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ym(e,t){switch(e){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Pi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ri.delete(t.pointerId)}}function Qo(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=hs(t),t!==null&&Rp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function jE(e,t,r,n,a){switch(t){case"focusin":return Nn=Qo(Nn,e,t,r,n,a),!0;case"dragenter":return Cn=Qo(Cn,e,t,r,n,a),!0;case"mouseover":return Dn=Qo(Dn,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return Pi.set(o,Qo(Pi.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,Ri.set(o,Qo(Ri.get(o)||null,e,t,r,n,a)),!0}return!1}function fy(e){var t=ta(e.target);if(t!==null){var r=Na(t);if(r!==null){if(t=r.tag,t===13){if(t=ey(r),t!==null){e.blockedOn=t,dy(e.priority,function(){cy(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ff(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);of=n,r.target.dispatchEvent(n),of=null}else return t=hs(r),t!==null&&Rp(t),e.blockedOn=r,!1;t.shift()}return!0}function Km(e,t,r){bl(e)&&r.delete(t)}function $E(){df=!1,Nn!==null&&bl(Nn)&&(Nn=null),Cn!==null&&bl(Cn)&&(Cn=null),Dn!==null&&bl(Dn)&&(Dn=null),Pi.forEach(Km),Ri.forEach(Km)}function Jo(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,$E)))}function Mi(e){function t(a){return Jo(a,e)}if(0<qs.length){Jo(qs[0],e);for(var r=1;r<qs.length;r++){var n=qs[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Nn!==null&&Jo(Nn,e),Cn!==null&&Jo(Cn,e),Dn!==null&&Jo(Dn,e),Pi.forEach(t),Ri.forEach(t),r=0;r<xn.length;r++)n=xn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<xn.length&&(r=xn[0],r.blockedOn===null);)fy(r),r.blockedOn===null&&xn.shift()}var eo=cn.ReactCurrentBatchConfig,Jl=!0;function NE(e,t,r,n){var a=ke,o=eo.transition;eo.transition=null;try{ke=1,Mp(e,t,r,n)}finally{ke=a,eo.transition=o}}function CE(e,t,r,n){var a=ke,o=eo.transition;eo.transition=null;try{ke=4,Mp(e,t,r,n)}finally{ke=a,eo.transition=o}}function Mp(e,t,r,n){if(Jl){var a=ff(e,t,r,n);if(a===null)ld(e,t,n,Zl,r),Ym(e,n);else if(jE(a,e,t,r,n))n.stopPropagation();else if(Ym(e,n),t&4&&-1<kE.indexOf(e)){for(;a!==null;){var o=hs(a);if(o!==null&&ly(o),o=ff(e,t,r,n),o===null&&ld(e,t,n,Zl,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else ld(e,t,n,null,r)}}var Zl=null;function ff(e,t,r,n){if(Zl=null,e=Tp(n),e=ta(e),e!==null)if(t=Na(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ey(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zl=e,null}function py(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mE()){case _p:return 1;case ay:return 4;case Xl:case vE:return 16;case oy:return 536870912;default:return 16}default:return 16}}var kn=null,Ap=null,xl=null;function hy(){if(xl)return xl;var e,t=Ap,r=t.length,n,a="value"in kn?kn.value:kn.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var i=r-e;for(n=1;n<=i&&t[r-n]===a[o-n];n++);return xl=a.slice(e,1<n?1-n:void 0)}function Sl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xs(){return!0}function qm(){return!1}function Qt(e){function t(r,n,a,o,i){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Xs:qm,this.isPropagationStopped=qm,this}return Ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Xs)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Xs)},persist:function(){},isPersistent:Xs}),t}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lp=Qt($o),ps=Ve({},$o,{view:0,detail:0}),DE=Qt(ps),Zu,ed,Zo,Fc=Ve({},ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zo&&(Zo&&e.type==="mousemove"?(Zu=e.screenX-Zo.screenX,ed=e.screenY-Zo.screenY):ed=Zu=0,Zo=e),Zu)},movementY:function(e){return"movementY"in e?e.movementY:ed}}),Xm=Qt(Fc),OE=Ve({},Fc,{dataTransfer:0}),TE=Qt(OE),_E=Ve({},ps,{relatedTarget:0}),td=Qt(_E),PE=Ve({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),RE=Qt(PE),ME=Ve({},$o,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),AE=Qt(ME),LE=Ve({},$o,{data:0}),Qm=Qt(LE),IE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=FE[e])?!!t[e]:!1}function Ip(){return UE}var BE=Ve({},ps,{key:function(e){if(e.key){var t=IE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(e){return e.type==="keypress"?Sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HE=Qt(BE),WE=Ve({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=Qt(WE),VE=Ve({},ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),GE=Qt(VE),YE=Ve({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),KE=Qt(YE),qE=Ve({},Fc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),XE=Qt(qE),QE=[9,13,27,32],zp=rn&&"CompositionEvent"in window,wi=null;rn&&"documentMode"in document&&(wi=document.documentMode);var JE=rn&&"TextEvent"in window&&!wi,my=rn&&(!zp||wi&&8<wi&&11>=wi),Zm=" ",ev=!1;function vy(e,t){switch(e){case"keyup":return QE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function ZE(e,t){switch(e){case"compositionend":return gy(t);case"keypress":return t.which!==32?null:(ev=!0,Zm);case"textInput":return e=t.data,e===Zm&&ev?null:e;default:return null}}function e3(e,t){if(Fa)return e==="compositionend"||!zp&&vy(e,t)?(e=hy(),xl=Ap=kn=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return my&&t.locale!=="ko"?null:t.data;default:return null}}var t3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!t3[e.type]:t==="textarea"}function yy(e,t,r,n){q0(n),t=ec(t,"onChange"),0<t.length&&(r=new Lp("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var bi=null,Ai=null;function r3(e){Dy(e,0)}function Uc(e){var t=Ha(e);if(B0(t))return e}function n3(e,t){if(e==="change")return t}var wy=!1;if(rn){var rd;if(rn){var nd="oninput"in document;if(!nd){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),nd=typeof rv.oninput=="function"}rd=nd}else rd=!1;wy=rd&&(!document.documentMode||9<document.documentMode)}function nv(){bi&&(bi.detachEvent("onpropertychange",by),Ai=bi=null)}function by(e){if(e.propertyName==="value"&&Uc(Ai)){var t=[];yy(t,Ai,e,Tp(e)),Z0(r3,t)}}function a3(e,t,r){e==="focusin"?(nv(),bi=t,Ai=r,bi.attachEvent("onpropertychange",by)):e==="focusout"&&nv()}function o3(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Uc(Ai)}function i3(e,t){if(e==="click")return Uc(t)}function s3(e,t){if(e==="input"||e==="change")return Uc(t)}function l3(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kr=typeof Object.is=="function"?Object.is:l3;function Li(e,t){if(kr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Yd.call(t,a)||!kr(e[a],t[a]))return!1}return!0}function av(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ov(e,t){var r=av(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=av(r)}}function xy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sy(){for(var e=window,t=Yl();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Yl(e.document)}return t}function Fp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function c3(e){var t=Sy(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&xy(r.ownerDocument.documentElement,r)){if(n!==null&&Fp(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=ov(r,o);var i=ov(r,n);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var u3=rn&&"documentMode"in document&&11>=document.documentMode,Ua=null,pf=null,xi=null,hf=!1;function iv(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;hf||Ua==null||Ua!==Yl(n)||(n=Ua,"selectionStart"in n&&Fp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),xi&&Li(xi,n)||(xi=n,n=ec(pf,"onSelect"),0<n.length&&(t=new Lp("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Ua)))}function Qs(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ba={animationend:Qs("Animation","AnimationEnd"),animationiteration:Qs("Animation","AnimationIteration"),animationstart:Qs("Animation","AnimationStart"),transitionend:Qs("Transition","TransitionEnd")},ad={},Ey={};rn&&(Ey=document.createElement("div").style,"AnimationEvent"in window||(delete Ba.animationend.animation,delete Ba.animationiteration.animation,delete Ba.animationstart.animation),"TransitionEvent"in window||delete Ba.transitionend.transition);function Bc(e){if(ad[e])return ad[e];if(!Ba[e])return e;var t=Ba[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Ey)return ad[e]=t[r];return e}var ky=Bc("animationend"),jy=Bc("animationiteration"),$y=Bc("animationstart"),Ny=Bc("transitionend"),Cy=new Map,sv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fn(e,t){Cy.set(e,t),$a(t,[e])}for(var od=0;od<sv.length;od++){var id=sv[od],d3=id.toLowerCase(),f3=id[0].toUpperCase()+id.slice(1);Fn(d3,"on"+f3)}Fn(ky,"onAnimationEnd");Fn(jy,"onAnimationIteration");Fn($y,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(Ny,"onTransitionEnd");oo("onMouseEnter",["mouseout","mouseover"]);oo("onMouseLeave",["mouseout","mouseover"]);oo("onPointerEnter",["pointerout","pointerover"]);oo("onPointerLeave",["pointerout","pointerover"]);$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$a("onBeforeInput",["compositionend","keypress","textInput","paste"]);$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p3=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function lv(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,dE(n,t,void 0,e),e.currentTarget=null}function Dy(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var i=n.length-1;0<=i;i--){var s=n[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&a.isPropagationStopped())break e;lv(a,s,u),o=l}else for(i=0;i<n.length;i++){if(s=n[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&a.isPropagationStopped())break e;lv(a,s,u),o=l}}}if(ql)throw e=cf,ql=!1,cf=null,e}function Me(e,t){var r=t[wf];r===void 0&&(r=t[wf]=new Set);var n=e+"__bubble";r.has(n)||(Oy(t,e,2,!1),r.add(n))}function sd(e,t,r){var n=0;t&&(n|=4),Oy(r,e,n,t)}var Js="_reactListening"+Math.random().toString(36).slice(2);function Ii(e){if(!e[Js]){e[Js]=!0,L0.forEach(function(r){r!=="selectionchange"&&(p3.has(r)||sd(r,!1,e),sd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Js]||(t[Js]=!0,sd("selectionchange",!1,t))}}function Oy(e,t,r,n){switch(py(t)){case 1:var a=NE;break;case 4:a=CE;break;default:a=Mp}r=a.bind(null,t,r,e),a=void 0,!lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function ld(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var i=n.tag;if(i===3||i===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(i===4)for(i=n.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;s!==null;){if(i=ta(s),i===null)return;if(l=i.tag,l===5||l===6){n=o=i;continue e}s=s.parentNode}}n=n.return}Z0(function(){var u=o,d=Tp(r),f=[];e:{var p=Cy.get(e);if(p!==void 0){var v=Lp,y=e;switch(e){case"keypress":if(Sl(r)===0)break e;case"keydown":case"keyup":v=HE;break;case"focusin":y="focus",v=td;break;case"focusout":y="blur",v=td;break;case"beforeblur":case"afterblur":v=td;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=TE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=GE;break;case ky:case jy:case $y:v=RE;break;case Ny:v=KE;break;case"scroll":v=DE;break;case"wheel":v=XE;break;case"copy":case"cut":case"paste":v=AE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Jm}var m=(t&4)!==0,x=!m&&e==="scroll",h=m?p!==null?p+"Capture":null:p;m=[];for(var g=u,w;g!==null;){w=g;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,h!==null&&(S=_i(g,h),S!=null&&m.push(zi(g,S,w)))),x)break;g=g.return}0<m.length&&(p=new v(p,y,null,r,d),f.push({event:p,listeners:m}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&r!==of&&(y=r.relatedTarget||r.fromElement)&&(ta(y)||y[nn]))break e;if((v||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,v?(y=r.relatedTarget||r.toElement,v=u,y=y?ta(y):null,y!==null&&(x=Na(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=u),v!==y)){if(m=Xm,S="onMouseLeave",h="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(m=Jm,S="onPointerLeave",h="onPointerEnter",g="pointer"),x=v==null?p:Ha(v),w=y==null?p:Ha(y),p=new m(S,g+"leave",v,r,d),p.target=x,p.relatedTarget=w,S=null,ta(d)===u&&(m=new m(h,g+"enter",y,r,d),m.target=w,m.relatedTarget=x,S=m),x=S,v&&y)t:{for(m=v,h=y,g=0,w=m;w;w=Ra(w))g++;for(w=0,S=h;S;S=Ra(S))w++;for(;0<g-w;)m=Ra(m),g--;for(;0<w-g;)h=Ra(h),w--;for(;g--;){if(m===h||h!==null&&m===h.alternate)break t;m=Ra(m),h=Ra(h)}m=null}else m=null;v!==null&&cv(f,p,v,m,!1),y!==null&&x!==null&&cv(f,x,y,m,!0)}}e:{if(p=u?Ha(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var b=n3;else if(tv(p))if(wy)b=s3;else{b=o3;var E=a3}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(b=i3);if(b&&(b=b(e,u))){yy(f,b,r,d);break e}E&&E(e,p,u),e==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&ef(p,"number",p.value)}switch(E=u?Ha(u):window,e){case"focusin":(tv(E)||E.contentEditable==="true")&&(Ua=E,pf=u,xi=null);break;case"focusout":xi=pf=Ua=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,iv(f,r,d);break;case"selectionchange":if(u3)break;case"keydown":case"keyup":iv(f,r,d)}var j;if(zp)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Fa?vy(e,r)&&(k="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(k="onCompositionStart");k&&(my&&r.locale!=="ko"&&(Fa||k!=="onCompositionStart"?k==="onCompositionEnd"&&Fa&&(j=hy()):(kn=d,Ap="value"in kn?kn.value:kn.textContent,Fa=!0)),E=ec(u,k),0<E.length&&(k=new Qm(k,e,null,r,d),f.push({event:k,listeners:E}),j?k.data=j:(j=gy(r),j!==null&&(k.data=j)))),(j=JE?ZE(e,r):e3(e,r))&&(u=ec(u,"onBeforeInput"),0<u.length&&(d=new Qm("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=j))}Dy(f,t)})}function zi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ec(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=_i(e,r),o!=null&&n.unshift(zi(e,o,a)),o=_i(e,t),o!=null&&n.push(zi(e,o,a))),e=e.return}return n}function Ra(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cv(e,t,r,n,a){for(var o=t._reactName,i=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)break;s.tag===5&&u!==null&&(s=u,a?(l=_i(r,o),l!=null&&i.unshift(zi(r,l,s))):a||(l=_i(r,o),l!=null&&i.push(zi(r,l,s)))),r=r.return}i.length!==0&&e.push({event:t,listeners:i})}var h3=/\r\n?/g,m3=/\u0000|\uFFFD/g;function uv(e){return(typeof e=="string"?e:""+e).replace(h3,`
`).replace(m3,"")}function Zs(e,t,r){if(t=uv(t),uv(e)!==t&&r)throw Error(q(425))}function tc(){}var mf=null,vf=null;function gf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,v3=typeof clearTimeout=="function"?clearTimeout:void 0,dv=typeof Promise=="function"?Promise:void 0,g3=typeof queueMicrotask=="function"?queueMicrotask:typeof dv<"u"?function(e){return dv.resolve(null).then(e).catch(y3)}:yf;function y3(e){setTimeout(function(){throw e})}function cd(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Mi(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Mi(t)}function On(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var No=Math.random().toString(36).slice(2),Pr="__reactFiber$"+No,Fi="__reactProps$"+No,nn="__reactContainer$"+No,wf="__reactEvents$"+No,w3="__reactListeners$"+No,b3="__reactHandles$"+No;function ta(e){var t=e[Pr];if(t)return t;for(var r=e.parentNode;r;){if(t=r[nn]||r[Pr]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=fv(e);e!==null;){if(r=e[Pr])return r;e=fv(e)}return t}e=r,r=e.parentNode}return null}function hs(e){return e=e[Pr]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ha(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function Hc(e){return e[Fi]||null}var bf=[],Wa=-1;function Un(e){return{current:e}}function Ie(e){0>Wa||(e.current=bf[Wa],bf[Wa]=null,Wa--)}function Te(e,t){Wa++,bf[Wa]=e.current,e.current=t}var An={},Et=Un(An),At=Un(!1),ha=An;function io(e,t){var r=e.type.contextTypes;if(!r)return An;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Lt(e){return e=e.childContextTypes,e!=null}function rc(){Ie(At),Ie(Et)}function pv(e,t,r){if(Et.current!==An)throw Error(q(168));Te(Et,t),Te(At,r)}function Ty(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(q(108,aE(e)||"Unknown",a));return Ve({},r,n)}function nc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,ha=Et.current,Te(Et,e),Te(At,At.current),!0}function hv(e,t,r){var n=e.stateNode;if(!n)throw Error(q(169));r?(e=Ty(e,t,ha),n.__reactInternalMemoizedMergedChildContext=e,Ie(At),Ie(Et),Te(Et,e)):Ie(At),Te(At,r)}var Qr=null,Wc=!1,ud=!1;function _y(e){Qr===null?Qr=[e]:Qr.push(e)}function x3(e){Wc=!0,_y(e)}function Bn(){if(!ud&&Qr!==null){ud=!0;var e=0,t=ke;try{var r=Qr;for(ke=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Qr=null,Wc=!1}catch(a){throw Qr!==null&&(Qr=Qr.slice(e+1)),ny(_p,Bn),a}finally{ke=t,ud=!1}}return null}var Va=[],Ga=0,ac=null,oc=0,tr=[],rr=0,ma=null,Zr=1,en="";function Xn(e,t){Va[Ga++]=oc,Va[Ga++]=ac,ac=e,oc=t}function Py(e,t,r){tr[rr++]=Zr,tr[rr++]=en,tr[rr++]=ma,ma=e;var n=Zr;e=en;var a=32-xr(n)-1;n&=~(1<<a),r+=1;var o=32-xr(t)+a;if(30<o){var i=a-a%5;o=(n&(1<<i)-1).toString(32),n>>=i,a-=i,Zr=1<<32-xr(t)+a|r<<a|n,en=o+e}else Zr=1<<o|r<<a|n,en=e}function Up(e){e.return!==null&&(Xn(e,1),Py(e,1,0))}function Bp(e){for(;e===ac;)ac=Va[--Ga],Va[Ga]=null,oc=Va[--Ga],Va[Ga]=null;for(;e===ma;)ma=tr[--rr],tr[rr]=null,en=tr[--rr],tr[rr]=null,Zr=tr[--rr],tr[rr]=null}var Yt=null,Vt=null,Ue=!1,br=null;function Ry(e,t){var r=ar(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function mv(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Yt=e,Vt=On(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Yt=e,Vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ma!==null?{id:Zr,overflow:en}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ar(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Yt=e,Vt=null,!0):!1;default:return!1}}function xf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sf(e){if(Ue){var t=Vt;if(t){var r=t;if(!mv(e,t)){if(xf(e))throw Error(q(418));t=On(r.nextSibling);var n=Yt;t&&mv(e,t)?Ry(n,r):(e.flags=e.flags&-4097|2,Ue=!1,Yt=e)}}else{if(xf(e))throw Error(q(418));e.flags=e.flags&-4097|2,Ue=!1,Yt=e}}}function vv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Yt=e}function el(e){if(e!==Yt)return!1;if(!Ue)return vv(e),Ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gf(e.type,e.memoizedProps)),t&&(t=Vt)){if(xf(e))throw My(),Error(q(418));for(;t;)Ry(e,t),t=On(t.nextSibling)}if(vv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Vt=On(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Vt=null}}else Vt=Yt?On(e.stateNode.nextSibling):null;return!0}function My(){for(var e=Vt;e;)e=On(e.nextSibling)}function so(){Vt=Yt=null,Ue=!1}function Hp(e){br===null?br=[e]:br.push(e)}var S3=cn.ReactCurrentBatchConfig;function ei(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(q(309));var n=r.stateNode}if(!n)throw Error(q(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var s=a.refs;i===null?delete s[o]:s[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(q(284));if(!r._owner)throw Error(q(290,e))}return e}function tl(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gv(e){var t=e._init;return t(e._payload)}function Ay(e){function t(h,g){if(e){var w=h.deletions;w===null?(h.deletions=[g],h.flags|=16):w.push(g)}}function r(h,g){if(!e)return null;for(;g!==null;)t(h,g),g=g.sibling;return null}function n(h,g){for(h=new Map;g!==null;)g.key!==null?h.set(g.key,g):h.set(g.index,g),g=g.sibling;return h}function a(h,g){return h=Rn(h,g),h.index=0,h.sibling=null,h}function o(h,g,w){return h.index=w,e?(w=h.alternate,w!==null?(w=w.index,w<g?(h.flags|=2,g):w):(h.flags|=2,g)):(h.flags|=1048576,g)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function s(h,g,w,S){return g===null||g.tag!==6?(g=gd(w,h.mode,S),g.return=h,g):(g=a(g,w),g.return=h,g)}function l(h,g,w,S){var b=w.type;return b===za?d(h,g,w.props.children,S,w.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===wn&&gv(b)===g.type)?(S=a(g,w.props),S.ref=ei(h,g,w),S.return=h,S):(S=Dl(w.type,w.key,w.props,null,h.mode,S),S.ref=ei(h,g,w),S.return=h,S)}function u(h,g,w,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==w.containerInfo||g.stateNode.implementation!==w.implementation?(g=yd(w,h.mode,S),g.return=h,g):(g=a(g,w.children||[]),g.return=h,g)}function d(h,g,w,S,b){return g===null||g.tag!==7?(g=sa(w,h.mode,S,b),g.return=h,g):(g=a(g,w),g.return=h,g)}function f(h,g,w){if(typeof g=="string"&&g!==""||typeof g=="number")return g=gd(""+g,h.mode,w),g.return=h,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ws:return w=Dl(g.type,g.key,g.props,null,h.mode,w),w.ref=ei(h,null,g),w.return=h,w;case Ia:return g=yd(g,h.mode,w),g.return=h,g;case wn:var S=g._init;return f(h,S(g._payload),w)}if(di(g)||qo(g))return g=sa(g,h.mode,w,null),g.return=h,g;tl(h,g)}return null}function p(h,g,w,S){var b=g!==null?g.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return b!==null?null:s(h,g,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ws:return w.key===b?l(h,g,w,S):null;case Ia:return w.key===b?u(h,g,w,S):null;case wn:return b=w._init,p(h,g,b(w._payload),S)}if(di(w)||qo(w))return b!==null?null:d(h,g,w,S,null);tl(h,w)}return null}function v(h,g,w,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(w)||null,s(g,h,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ws:return h=h.get(S.key===null?w:S.key)||null,l(g,h,S,b);case Ia:return h=h.get(S.key===null?w:S.key)||null,u(g,h,S,b);case wn:var E=S._init;return v(h,g,w,E(S._payload),b)}if(di(S)||qo(S))return h=h.get(w)||null,d(g,h,S,b,null);tl(g,S)}return null}function y(h,g,w,S){for(var b=null,E=null,j=g,k=g=0,D=null;j!==null&&k<w.length;k++){j.index>k?(D=j,j=null):D=j.sibling;var O=p(h,j,w[k],S);if(O===null){j===null&&(j=D);break}e&&j&&O.alternate===null&&t(h,j),g=o(O,g,k),E===null?b=O:E.sibling=O,E=O,j=D}if(k===w.length)return r(h,j),Ue&&Xn(h,k),b;if(j===null){for(;k<w.length;k++)j=f(h,w[k],S),j!==null&&(g=o(j,g,k),E===null?b=j:E.sibling=j,E=j);return Ue&&Xn(h,k),b}for(j=n(h,j);k<w.length;k++)D=v(j,h,k,w[k],S),D!==null&&(e&&D.alternate!==null&&j.delete(D.key===null?k:D.key),g=o(D,g,k),E===null?b=D:E.sibling=D,E=D);return e&&j.forEach(function(R){return t(h,R)}),Ue&&Xn(h,k),b}function m(h,g,w,S){var b=qo(w);if(typeof b!="function")throw Error(q(150));if(w=b.call(w),w==null)throw Error(q(151));for(var E=b=null,j=g,k=g=0,D=null,O=w.next();j!==null&&!O.done;k++,O=w.next()){j.index>k?(D=j,j=null):D=j.sibling;var R=p(h,j,O.value,S);if(R===null){j===null&&(j=D);break}e&&j&&R.alternate===null&&t(h,j),g=o(R,g,k),E===null?b=R:E.sibling=R,E=R,j=D}if(O.done)return r(h,j),Ue&&Xn(h,k),b;if(j===null){for(;!O.done;k++,O=w.next())O=f(h,O.value,S),O!==null&&(g=o(O,g,k),E===null?b=O:E.sibling=O,E=O);return Ue&&Xn(h,k),b}for(j=n(h,j);!O.done;k++,O=w.next())O=v(j,h,k,O.value,S),O!==null&&(e&&O.alternate!==null&&j.delete(O.key===null?k:O.key),g=o(O,g,k),E===null?b=O:E.sibling=O,E=O);return e&&j.forEach(function(Q){return t(h,Q)}),Ue&&Xn(h,k),b}function x(h,g,w,S){if(typeof w=="object"&&w!==null&&w.type===za&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Ws:e:{for(var b=w.key,E=g;E!==null;){if(E.key===b){if(b=w.type,b===za){if(E.tag===7){r(h,E.sibling),g=a(E,w.props.children),g.return=h,h=g;break e}}else if(E.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===wn&&gv(b)===E.type){r(h,E.sibling),g=a(E,w.props),g.ref=ei(h,E,w),g.return=h,h=g;break e}r(h,E);break}else t(h,E);E=E.sibling}w.type===za?(g=sa(w.props.children,h.mode,S,w.key),g.return=h,h=g):(S=Dl(w.type,w.key,w.props,null,h.mode,S),S.ref=ei(h,g,w),S.return=h,h=S)}return i(h);case Ia:e:{for(E=w.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===w.containerInfo&&g.stateNode.implementation===w.implementation){r(h,g.sibling),g=a(g,w.children||[]),g.return=h,h=g;break e}else{r(h,g);break}else t(h,g);g=g.sibling}g=yd(w,h.mode,S),g.return=h,h=g}return i(h);case wn:return E=w._init,x(h,g,E(w._payload),S)}if(di(w))return y(h,g,w,S);if(qo(w))return m(h,g,w,S);tl(h,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,g!==null&&g.tag===6?(r(h,g.sibling),g=a(g,w),g.return=h,h=g):(r(h,g),g=gd(w,h.mode,S),g.return=h,h=g),i(h)):r(h,g)}return x}var lo=Ay(!0),Ly=Ay(!1),ic=Un(null),sc=null,Ya=null,Wp=null;function Vp(){Wp=Ya=sc=null}function Gp(e){var t=ic.current;Ie(ic),e._currentValue=t}function Ef(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function to(e,t){sc=e,Wp=Ya=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Rt=!0),e.firstContext=null)}function lr(e){var t=e._currentValue;if(Wp!==e)if(e={context:e,memoizedValue:t,next:null},Ya===null){if(sc===null)throw Error(q(308));Ya=e,sc.dependencies={lanes:0,firstContext:e}}else Ya=Ya.next=e;return t}var ra=null;function Yp(e){ra===null?ra=[e]:ra.push(e)}function Iy(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,Yp(t)):(r.next=a.next,a.next=r),t.interleaved=r,an(e,n)}function an(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var bn=!1;function Kp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zy(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,xe&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,an(e,r)}return a=n.interleaved,a===null?(t.next=t,Yp(n)):(t.next=a.next,a.next=t),n.interleaved=t,an(e,r)}function El(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Pp(e,r)}}function yv(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var i={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=i:o=o.next=i,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function lc(e,t,r,n){var a=e.updateQueue;bn=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?o=u:i.next=u,i=l;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==i&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=a.baseState;i=0,d=u=l=null,s=o;do{var p=s.lane,v=s.eventTime;if((n&p)===p){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,m=s;switch(p=t,v=r,m.tag){case 1:if(y=m.payload,typeof y=="function"){f=y.call(v,f,p);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=m.payload,p=typeof y=="function"?y.call(v,f,p):y,p==null)break e;f=Ve({},f,p);break e;case 2:bn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[s]:p.push(s))}else v={eventTime:v,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,i|=p;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;p=s,s=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(d===null&&(l=f),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);ga|=i,e.lanes=i,e.memoizedState=f}}function wv(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(q(191,a));a.call(n)}}}var ms={},Lr=Un(ms),Ui=Un(ms),Bi=Un(ms);function na(e){if(e===ms)throw Error(q(174));return e}function qp(e,t){switch(Te(Bi,t),Te(Ui,e),Te(Lr,ms),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:rf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=rf(t,e)}Ie(Lr),Te(Lr,t)}function co(){Ie(Lr),Ie(Ui),Ie(Bi)}function Fy(e){na(Bi.current);var t=na(Lr.current),r=rf(t,e.type);t!==r&&(Te(Ui,e),Te(Lr,r))}function Xp(e){Ui.current===e&&(Ie(Lr),Ie(Ui))}var He=Un(0);function cc(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dd=[];function Qp(){for(var e=0;e<dd.length;e++)dd[e]._workInProgressVersionPrimary=null;dd.length=0}var kl=cn.ReactCurrentDispatcher,fd=cn.ReactCurrentBatchConfig,va=0,We=null,at=null,st=null,uc=!1,Si=!1,Hi=0,E3=0;function wt(){throw Error(q(321))}function Jp(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kr(e[r],t[r]))return!1;return!0}function Zp(e,t,r,n,a,o){if(va=o,We=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,kl.current=e===null||e.memoizedState===null?N3:C3,e=r(n,a),Si){o=0;do{if(Si=!1,Hi=0,25<=o)throw Error(q(301));o+=1,st=at=null,t.updateQueue=null,kl.current=D3,e=r(n,a)}while(Si)}if(kl.current=dc,t=at!==null&&at.next!==null,va=0,st=at=We=null,uc=!1,t)throw Error(q(300));return e}function eh(){var e=Hi!==0;return Hi=0,e}function Tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?We.memoizedState=st=e:st=st.next=e,st}function cr(){if(at===null){var e=We.alternate;e=e!==null?e.memoizedState:null}else e=at.next;var t=st===null?We.memoizedState:st.next;if(t!==null)st=t,at=e;else{if(e===null)throw Error(q(310));at=e,e={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},st===null?We.memoizedState=st=e:st=st.next=e}return st}function Wi(e,t){return typeof t=="function"?t(e):t}function pd(e){var t=cr(),r=t.queue;if(r===null)throw Error(q(311));r.lastRenderedReducer=e;var n=at,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var i=a.next;a.next=o.next,o.next=i}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var s=i=null,l=null,u=o;do{var d=u.lane;if((va&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=f,i=n):l=l.next=f,We.lanes|=d,ga|=d}u=u.next}while(u!==null&&u!==o);l===null?i=n:l.next=s,kr(n,t.memoizedState)||(Rt=!0),t.memoizedState=n,t.baseState=i,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,We.lanes|=o,ga|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function hd(e){var t=cr(),r=t.queue;if(r===null)throw Error(q(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do o=e(o,i.action),i=i.next;while(i!==a);kr(o,t.memoizedState)||(Rt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Uy(){}function By(e,t){var r=We,n=cr(),a=t(),o=!kr(n.memoizedState,a);if(o&&(n.memoizedState=a,Rt=!0),n=n.queue,th(Vy.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||st!==null&&st.memoizedState.tag&1){if(r.flags|=2048,Vi(9,Wy.bind(null,r,n,a,t),void 0,null),ct===null)throw Error(q(349));va&30||Hy(r,t,a)}return a}function Hy(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Wy(e,t,r,n){t.value=r,t.getSnapshot=n,Gy(t)&&Yy(e)}function Vy(e,t,r){return r(function(){Gy(t)&&Yy(e)})}function Gy(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kr(e,r)}catch{return!0}}function Yy(e){var t=an(e,1);t!==null&&Sr(t,e,1,-1)}function bv(e){var t=Tr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=$3.bind(null,We,e),[t.memoizedState,e]}function Vi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=We.updateQueue,t===null?(t={lastEffect:null,stores:null},We.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Ky(){return cr().memoizedState}function jl(e,t,r,n){var a=Tr();We.flags|=e,a.memoizedState=Vi(1|t,r,void 0,n===void 0?null:n)}function Vc(e,t,r,n){var a=cr();n=n===void 0?null:n;var o=void 0;if(at!==null){var i=at.memoizedState;if(o=i.destroy,n!==null&&Jp(n,i.deps)){a.memoizedState=Vi(t,r,o,n);return}}We.flags|=e,a.memoizedState=Vi(1|t,r,o,n)}function xv(e,t){return jl(8390656,8,e,t)}function th(e,t){return Vc(2048,8,e,t)}function qy(e,t){return Vc(4,2,e,t)}function Xy(e,t){return Vc(4,4,e,t)}function Qy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jy(e,t,r){return r=r!=null?r.concat([e]):null,Vc(4,4,Qy.bind(null,t,e),r)}function rh(){}function Zy(e,t){var r=cr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Jp(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ew(e,t){var r=cr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Jp(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function tw(e,t,r){return va&21?(kr(r,t)||(r=iy(),We.lanes|=r,ga|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Rt=!0),e.memoizedState=r)}function k3(e,t){var r=ke;ke=r!==0&&4>r?r:4,e(!0);var n=fd.transition;fd.transition={};try{e(!1),t()}finally{ke=r,fd.transition=n}}function rw(){return cr().memoizedState}function j3(e,t,r){var n=Pn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},nw(e))aw(t,r);else if(r=Iy(e,t,r,n),r!==null){var a=Nt();Sr(r,e,n,a),ow(r,t,n)}}function $3(e,t,r){var n=Pn(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(nw(e))aw(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,s=o(i,r);if(a.hasEagerState=!0,a.eagerState=s,kr(s,i)){var l=t.interleaved;l===null?(a.next=a,Yp(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}r=Iy(e,t,a,n),r!==null&&(a=Nt(),Sr(r,e,n,a),ow(r,t,n))}}function nw(e){var t=e.alternate;return e===We||t!==null&&t===We}function aw(e,t){Si=uc=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function ow(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Pp(e,r)}}var dc={readContext:lr,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useInsertionEffect:wt,useLayoutEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useMutableSource:wt,useSyncExternalStore:wt,useId:wt,unstable_isNewReconciler:!1},N3={readContext:lr,useCallback:function(e,t){return Tr().memoizedState=[e,t===void 0?null:t],e},useContext:lr,useEffect:xv,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,jl(4194308,4,Qy.bind(null,t,e),r)},useLayoutEffect:function(e,t){return jl(4194308,4,e,t)},useInsertionEffect:function(e,t){return jl(4,2,e,t)},useMemo:function(e,t){var r=Tr();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Tr();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=j3.bind(null,We,e),[n.memoizedState,e]},useRef:function(e){var t=Tr();return e={current:e},t.memoizedState=e},useState:bv,useDebugValue:rh,useDeferredValue:function(e){return Tr().memoizedState=e},useTransition:function(){var e=bv(!1),t=e[0];return e=k3.bind(null,e[1]),Tr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=We,a=Tr();if(Ue){if(r===void 0)throw Error(q(407));r=r()}else{if(r=t(),ct===null)throw Error(q(349));va&30||Hy(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,xv(Vy.bind(null,n,o,e),[e]),n.flags|=2048,Vi(9,Wy.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Tr(),t=ct.identifierPrefix;if(Ue){var r=en,n=Zr;r=(n&~(1<<32-xr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Hi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=E3++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C3={readContext:lr,useCallback:Zy,useContext:lr,useEffect:th,useImperativeHandle:Jy,useInsertionEffect:qy,useLayoutEffect:Xy,useMemo:ew,useReducer:pd,useRef:Ky,useState:function(){return pd(Wi)},useDebugValue:rh,useDeferredValue:function(e){var t=cr();return tw(t,at.memoizedState,e)},useTransition:function(){var e=pd(Wi)[0],t=cr().memoizedState;return[e,t]},useMutableSource:Uy,useSyncExternalStore:By,useId:rw,unstable_isNewReconciler:!1},D3={readContext:lr,useCallback:Zy,useContext:lr,useEffect:th,useImperativeHandle:Jy,useInsertionEffect:qy,useLayoutEffect:Xy,useMemo:ew,useReducer:hd,useRef:Ky,useState:function(){return hd(Wi)},useDebugValue:rh,useDeferredValue:function(e){var t=cr();return at===null?t.memoizedState=e:tw(t,at.memoizedState,e)},useTransition:function(){var e=hd(Wi)[0],t=cr().memoizedState;return[e,t]},useMutableSource:Uy,useSyncExternalStore:By,useId:rw,unstable_isNewReconciler:!1};function gr(e,t){if(e&&e.defaultProps){t=Ve({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function kf(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Ve({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Gc={isMounted:function(e){return(e=e._reactInternals)?Na(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Nt(),a=Pn(e),o=tn(n,a);o.payload=t,r!=null&&(o.callback=r),t=Tn(e,o,a),t!==null&&(Sr(t,e,a,n),El(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Nt(),a=Pn(e),o=tn(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Tn(e,o,a),t!==null&&(Sr(t,e,a,n),El(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Nt(),n=Pn(e),a=tn(r,n);a.tag=2,t!=null&&(a.callback=t),t=Tn(e,a,n),t!==null&&(Sr(t,e,n,r),El(t,e,n))}};function Sv(e,t,r,n,a,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,i):t.prototype&&t.prototype.isPureReactComponent?!Li(r,n)||!Li(a,o):!0}function iw(e,t,r){var n=!1,a=An,o=t.contextType;return typeof o=="object"&&o!==null?o=lr(o):(a=Lt(t)?ha:Et.current,n=t.contextTypes,o=(n=n!=null)?io(e,a):An),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Gc,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ev(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Gc.enqueueReplaceState(t,t.state,null)}function jf(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Kp(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=lr(o):(o=Lt(t)?ha:Et.current,a.context=io(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(kf(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Gc.enqueueReplaceState(a,a.state,null),lc(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function uo(e,t){try{var r="",n=t;do r+=nE(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function md(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function $f(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var O3=typeof WeakMap=="function"?WeakMap:Map;function sw(e,t,r){r=tn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){pc||(pc=!0,Af=n),$f(e,t)},r}function lw(e,t,r){r=tn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){$f(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){$f(e,t),typeof n!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),r}function kv(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new O3;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=W3.bind(null,e,t,r),t.then(e,e))}function jv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $v(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=tn(-1,1),t.tag=2,Tn(r,t,1))),r.lanes|=1),e)}var T3=cn.ReactCurrentOwner,Rt=!1;function kt(e,t,r,n){t.child=e===null?Ly(t,null,r,n):lo(t,e.child,r,n)}function Nv(e,t,r,n,a){r=r.render;var o=t.ref;return to(t,a),n=Zp(e,t,r,n,o,a),r=eh(),e!==null&&!Rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,on(e,t,a)):(Ue&&r&&Up(t),t.flags|=1,kt(e,t,n,a),t.child)}function Cv(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!uh(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,cw(e,t,o,n,a)):(e=Dl(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var i=o.memoizedProps;if(r=r.compare,r=r!==null?r:Li,r(i,n)&&e.ref===t.ref)return on(e,t,a)}return t.flags|=1,e=Rn(o,n),e.ref=t.ref,e.return=t,t.child=e}function cw(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(Li(o,n)&&e.ref===t.ref)if(Rt=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&(Rt=!0);else return t.lanes=e.lanes,on(e,t,a)}return Nf(e,t,r,n,a)}function uw(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(qa,Ht),Ht|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Te(qa,Ht),Ht|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,Te(qa,Ht),Ht|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,Te(qa,Ht),Ht|=n;return kt(e,t,a,r),t.child}function dw(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Nf(e,t,r,n,a){var o=Lt(r)?ha:Et.current;return o=io(t,o),to(t,a),r=Zp(e,t,r,n,o,a),n=eh(),e!==null&&!Rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,on(e,t,a)):(Ue&&n&&Up(t),t.flags|=1,kt(e,t,r,a),t.child)}function Dv(e,t,r,n,a){if(Lt(r)){var o=!0;nc(t)}else o=!1;if(to(t,a),t.stateNode===null)$l(e,t),iw(t,r,n),jf(t,r,n,a),n=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=r.contextType;typeof u=="object"&&u!==null?u=lr(u):(u=Lt(r)?ha:Et.current,u=io(t,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==n||l!==u)&&Ev(t,i,n,u),bn=!1;var p=t.memoizedState;i.state=p,lc(t,n,i,a),l=t.memoizedState,s!==n||p!==l||At.current||bn?(typeof d=="function"&&(kf(t,r,d,n),l=t.memoizedState),(s=bn||Sv(t,r,s,n,p,l,u))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),i.props=n,i.state=l,i.context=u,n=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,zy(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:gr(t.type,s),i.props=u,f=t.pendingProps,p=i.context,l=r.contextType,typeof l=="object"&&l!==null?l=lr(l):(l=Lt(r)?ha:Et.current,l=io(t,l));var v=r.getDerivedStateFromProps;(d=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==f||p!==l)&&Ev(t,i,n,l),bn=!1,p=t.memoizedState,i.state=p,lc(t,n,i,a);var y=t.memoizedState;s!==f||p!==y||At.current||bn?(typeof v=="function"&&(kf(t,r,v,n),y=t.memoizedState),(u=bn||Sv(t,r,u,n,p,y,l)||!1)?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,y,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,y,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),i.props=n,i.state=y,i.context=l,n=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Cf(e,t,r,n,o,a)}function Cf(e,t,r,n,a,o){dw(e,t);var i=(t.flags&128)!==0;if(!n&&!i)return a&&hv(t,r,!1),on(e,t,o);n=t.stateNode,T3.current=t;var s=i&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&i?(t.child=lo(t,e.child,null,o),t.child=lo(t,null,s,o)):kt(e,t,s,o),t.memoizedState=n.state,a&&hv(t,r,!0),t.child}function fw(e){var t=e.stateNode;t.pendingContext?pv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&pv(e,t.context,!1),qp(e,t.containerInfo)}function Ov(e,t,r,n,a){return so(),Hp(a),t.flags|=256,kt(e,t,r,n),t.child}var Df={dehydrated:null,treeContext:null,retryLane:0};function Of(e){return{baseLanes:e,cachePool:null,transitions:null}}function pw(e,t,r){var n=t.pendingProps,a=He.current,o=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Te(He,a&1),e===null)return Sf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=n.children,e=n.fallback,o?(n=t.mode,o=t.child,i={mode:"hidden",children:i},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=qc(i,n,0,null),e=sa(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Of(r),t.memoizedState=Df,e):nh(t,i));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return _3(e,t,i,n,s,a,r);if(o){o=n.fallback,i=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:n.children};return!(i&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=Rn(a,l),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?o=Rn(s,o):(o=sa(o,i,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,i=e.child.memoizedState,i=i===null?Of(r):{baseLanes:i.baseLanes|r,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~r,t.memoizedState=Df,n}return o=e.child,e=o.sibling,n=Rn(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function nh(e,t){return t=qc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function rl(e,t,r,n){return n!==null&&Hp(n),lo(t,e.child,null,r),e=nh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _3(e,t,r,n,a,o,i){if(r)return t.flags&256?(t.flags&=-257,n=md(Error(q(422))),rl(e,t,i,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=qc({mode:"visible",children:n.children},a,0,null),o=sa(o,a,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&lo(t,e.child,null,i),t.child.memoizedState=Of(i),t.memoizedState=Df,o);if(!(t.mode&1))return rl(e,t,i,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(q(419)),n=md(o,n,void 0),rl(e,t,i,n)}if(s=(i&e.childLanes)!==0,Rt||s){if(n=ct,n!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|i)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,an(e,a),Sr(n,e,a,-1))}return ch(),n=md(Error(q(421))),rl(e,t,i,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=V3.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Vt=On(a.nextSibling),Yt=t,Ue=!0,br=null,e!==null&&(tr[rr++]=Zr,tr[rr++]=en,tr[rr++]=ma,Zr=e.id,en=e.overflow,ma=t),t=nh(t,n.children),t.flags|=4096,t)}function Tv(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ef(e.return,t,r)}function vd(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function hw(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(kt(e,t,n.children,r),n=He.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tv(e,r,t);else if(e.tag===19)Tv(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Te(He,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&cc(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),vd(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&cc(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}vd(t,!0,r,null,o);break;case"together":vd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $l(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function on(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ga|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,r=Rn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Rn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function P3(e,t,r){switch(t.tag){case 3:fw(t),so();break;case 5:Fy(t);break;case 1:Lt(t.type)&&nc(t);break;case 4:qp(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;Te(ic,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Te(He,He.current&1),t.flags|=128,null):r&t.child.childLanes?pw(e,t,r):(Te(He,He.current&1),e=on(e,t,r),e!==null?e.sibling:null);Te(He,He.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return hw(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Te(He,He.current),n)break;return null;case 22:case 23:return t.lanes=0,uw(e,t,r)}return on(e,t,r)}var mw,Tf,vw,gw;mw=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Tf=function(){};vw=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,na(Lr.current);var o=null;switch(r){case"input":a=Jd(e,a),n=Jd(e,n),o=[];break;case"select":a=Ve({},a,{value:void 0}),n=Ve({},n,{value:void 0}),o=[];break;case"textarea":a=tf(e,a),n=tf(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=tc)}nf(r,n);var i;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(i in s)s.hasOwnProperty(i)&&(r||(r={}),r[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Oi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var l=n[u];if(s=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(r||(r={}),r[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(r||(r={}),r[i]=l[i])}else r||(o||(o=[]),o.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Oi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Me("scroll",e),o||s===l||(o=[])):(o=o||[]).push(u,l))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};gw=function(e,t,r,n){r!==n&&(t.flags|=4)};function ti(e,t){if(!Ue)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function bt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function R3(e,t,r){var n=t.pendingProps;switch(Bp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(t),null;case 1:return Lt(t.type)&&rc(),bt(t),null;case 3:return n=t.stateNode,co(),Ie(At),Ie(Et),Qp(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(el(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,br!==null&&(zf(br),br=null))),Tf(e,t),bt(t),null;case 5:Xp(t);var a=na(Bi.current);if(r=t.type,e!==null&&t.stateNode!=null)vw(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(q(166));return bt(t),null}if(e=na(Lr.current),el(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Pr]=t,n[Fi]=o,e=(t.mode&1)!==0,r){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<pi.length;a++)Me(pi[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Fm(n,o),Me("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Me("invalid",n);break;case"textarea":Bm(n,o),Me("invalid",n)}nf(r,o),a=null;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i];i==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&Zs(n.textContent,s,e),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&Zs(n.textContent,s,e),a=["children",""+s]):Oi.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&Me("scroll",n)}switch(r){case"input":Vs(n),Um(n,o,!0);break;case"textarea":Vs(n),Hm(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=tc)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=V0(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=i.createElement(r,{is:n.is}):(e=i.createElement(r),r==="select"&&(i=e,n.multiple?i.multiple=!0:n.size&&(i.size=n.size))):e=i.createElementNS(e,r),e[Pr]=t,e[Fi]=n,mw(e,t,!1,!1),t.stateNode=e;e:{switch(i=af(r,n),r){case"dialog":Me("cancel",e),Me("close",e),a=n;break;case"iframe":case"object":case"embed":Me("load",e),a=n;break;case"video":case"audio":for(a=0;a<pi.length;a++)Me(pi[a],e);a=n;break;case"source":Me("error",e),a=n;break;case"img":case"image":case"link":Me("error",e),Me("load",e),a=n;break;case"details":Me("toggle",e),a=n;break;case"input":Fm(e,n),a=Jd(e,n),Me("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=Ve({},n,{value:void 0}),Me("invalid",e);break;case"textarea":Bm(e,n),a=tf(e,n),Me("invalid",e);break;default:a=n}nf(r,a),s=a;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?K0(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&G0(e,l)):o==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ti(e,l):typeof l=="number"&&Ti(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Oi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Me("scroll",e):l!=null&&Np(e,o,l,i))}switch(r){case"input":Vs(e),Um(e,n,!1);break;case"textarea":Vs(e),Hm(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Mn(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Qa(e,!!n.multiple,o,!1):n.defaultValue!=null&&Qa(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=tc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return bt(t),null;case 6:if(e&&t.stateNode!=null)gw(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(q(166));if(r=na(Bi.current),na(Lr.current),el(t)){if(n=t.stateNode,r=t.memoizedProps,n[Pr]=t,(o=n.nodeValue!==r)&&(e=Yt,e!==null))switch(e.tag){case 3:Zs(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zs(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Pr]=t,t.stateNode=n}return bt(t),null;case 13:if(Ie(He),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ue&&Vt!==null&&t.mode&1&&!(t.flags&128))My(),so(),t.flags|=98560,o=!1;else if(o=el(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(q(317));o[Pr]=t}else so(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;bt(t),o=!1}else br!==null&&(zf(br),br=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||He.current&1?ot===0&&(ot=3):ch())),t.updateQueue!==null&&(t.flags|=4),bt(t),null);case 4:return co(),Tf(e,t),e===null&&Ii(t.stateNode.containerInfo),bt(t),null;case 10:return Gp(t.type._context),bt(t),null;case 17:return Lt(t.type)&&rc(),bt(t),null;case 19:if(Ie(He),o=t.memoizedState,o===null)return bt(t),null;if(n=(t.flags&128)!==0,i=o.rendering,i===null)if(n)ti(o,!1);else{if(ot!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=cc(e),i!==null){for(t.flags|=128,ti(o,!1),n=i.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Te(He,He.current&1|2),t.child}e=e.sibling}o.tail!==null&&Qe()>fo&&(t.flags|=128,n=!0,ti(o,!1),t.lanes=4194304)}else{if(!n)if(e=cc(i),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ti(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!Ue)return bt(t),null}else 2*Qe()-o.renderingStartTime>fo&&r!==1073741824&&(t.flags|=128,n=!0,ti(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(r=o.last,r!==null?r.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Qe(),t.sibling=null,r=He.current,Te(He,n?r&1|2:r&1),t):(bt(t),null);case 22:case 23:return lh(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Ht&1073741824&&(bt(t),t.subtreeFlags&6&&(t.flags|=8192)):bt(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function M3(e,t){switch(Bp(t),t.tag){case 1:return Lt(t.type)&&rc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return co(),Ie(At),Ie(Et),Qp(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xp(t),null;case 13:if(Ie(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));so()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(He),null;case 4:return co(),null;case 10:return Gp(t.type._context),null;case 22:case 23:return lh(),null;case 24:return null;default:return null}}var nl=!1,St=!1,A3=typeof WeakSet=="function"?WeakSet:Set,te=null;function Ka(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ye(e,t,n)}else r.current=null}function _f(e,t,r){try{r()}catch(n){Ye(e,t,n)}}var _v=!1;function L3(e,t){if(mf=Jl,e=Sy(),Fp(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var i=0,s=-1,l=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var v;f!==r||a!==0&&f.nodeType!==3||(s=i+a),f!==o||n!==0&&f.nodeType!==3||(l=i+n),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===r&&++u===a&&(s=i),p===o&&++d===n&&(l=i),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}r=s===-1||l===-1?null:{start:s,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(vf={focusedElem:e,selectionRange:r},Jl=!1,te=t;te!==null;)if(t=te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,te=e;else for(;te!==null;){t=te;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var m=y.memoizedProps,x=y.memoizedState,h=t.stateNode,g=h.getSnapshotBeforeUpdate(t.elementType===t.type?m:gr(t.type,m),x);h.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(S){Ye(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,te=e;break}te=t.return}return y=_v,_v=!1,y}function Ei(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&_f(t,r,o)}a=a.next}while(a!==n)}}function Yc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Pf(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function yw(e){var t=e.alternate;t!==null&&(e.alternate=null,yw(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pr],delete t[Fi],delete t[wf],delete t[w3],delete t[b3])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ww(e){return e.tag===5||e.tag===3||e.tag===4}function Pv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ww(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=tc));else if(n!==4&&(e=e.child,e!==null))for(Rf(e,t,r),e=e.sibling;e!==null;)Rf(e,t,r),e=e.sibling}function Mf(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Mf(e,t,r),e=e.sibling;e!==null;)Mf(e,t,r),e=e.sibling}var pt=null,yr=!1;function pn(e,t,r){for(r=r.child;r!==null;)bw(e,t,r),r=r.sibling}function bw(e,t,r){if(Ar&&typeof Ar.onCommitFiberUnmount=="function")try{Ar.onCommitFiberUnmount(zc,r)}catch{}switch(r.tag){case 5:St||Ka(r,t);case 6:var n=pt,a=yr;pt=null,pn(e,t,r),pt=n,yr=a,pt!==null&&(yr?(e=pt,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):pt.removeChild(r.stateNode));break;case 18:pt!==null&&(yr?(e=pt,r=r.stateNode,e.nodeType===8?cd(e.parentNode,r):e.nodeType===1&&cd(e,r),Mi(e)):cd(pt,r.stateNode));break;case 4:n=pt,a=yr,pt=r.stateNode.containerInfo,yr=!0,pn(e,t,r),pt=n,yr=a;break;case 0:case 11:case 14:case 15:if(!St&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&_f(r,t,i),a=a.next}while(a!==n)}pn(e,t,r);break;case 1:if(!St&&(Ka(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Ye(r,t,s)}pn(e,t,r);break;case 21:pn(e,t,r);break;case 22:r.mode&1?(St=(n=St)||r.memoizedState!==null,pn(e,t,r),St=n):pn(e,t,r);break;default:pn(e,t,r)}}function Rv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new A3),t.forEach(function(n){var a=G3.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function vr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:pt=s.stateNode,yr=!1;break e;case 3:pt=s.stateNode.containerInfo,yr=!0;break e;case 4:pt=s.stateNode.containerInfo,yr=!0;break e}s=s.return}if(pt===null)throw Error(q(160));bw(o,i,a),pt=null,yr=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){Ye(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)xw(t,e),t=t.sibling}function xw(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vr(t,e),Or(e),n&4){try{Ei(3,e,e.return),Yc(3,e)}catch(m){Ye(e,e.return,m)}try{Ei(5,e,e.return)}catch(m){Ye(e,e.return,m)}}break;case 1:vr(t,e),Or(e),n&512&&r!==null&&Ka(r,r.return);break;case 5:if(vr(t,e),Or(e),n&512&&r!==null&&Ka(r,r.return),e.flags&32){var a=e.stateNode;try{Ti(a,"")}catch(m){Ye(e,e.return,m)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,i=r!==null?r.memoizedProps:o,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&H0(a,o),af(s,i);var u=af(s,o);for(i=0;i<l.length;i+=2){var d=l[i],f=l[i+1];d==="style"?K0(a,f):d==="dangerouslySetInnerHTML"?G0(a,f):d==="children"?Ti(a,f):Np(a,d,f,u)}switch(s){case"input":Zd(a,o);break;case"textarea":W0(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Qa(a,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?Qa(a,!!o.multiple,o.defaultValue,!0):Qa(a,!!o.multiple,o.multiple?[]:"",!1))}a[Fi]=o}catch(m){Ye(e,e.return,m)}}break;case 6:if(vr(t,e),Or(e),n&4){if(e.stateNode===null)throw Error(q(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(m){Ye(e,e.return,m)}}break;case 3:if(vr(t,e),Or(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Mi(t.containerInfo)}catch(m){Ye(e,e.return,m)}break;case 4:vr(t,e),Or(e);break;case 13:vr(t,e),Or(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(ih=Qe())),n&4&&Rv(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(St=(u=St)||d,vr(t,e),St=u):vr(t,e),Or(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(te=e,d=e.child;d!==null;){for(f=te=d;te!==null;){switch(p=te,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ei(4,p,p.return);break;case 1:Ka(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(m){Ye(n,r,m)}}break;case 5:Ka(p,p.return);break;case 22:if(p.memoizedState!==null){Av(f);continue}}v!==null?(v.return=p,te=v):Av(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=f.stateNode,l=f.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=Y0("display",i))}catch(m){Ye(e,e.return,m)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){Ye(e,e.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vr(t,e),Or(e),n&4&&Rv(e);break;case 21:break;default:vr(t,e),Or(e)}}function Or(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ww(r)){var n=r;break e}r=r.return}throw Error(q(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Ti(a,""),n.flags&=-33);var o=Pv(e);Mf(e,o,a);break;case 3:case 4:var i=n.stateNode.containerInfo,s=Pv(e);Rf(e,s,i);break;default:throw Error(q(161))}}catch(l){Ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function I3(e,t,r){te=e,Sw(e)}function Sw(e,t,r){for(var n=(e.mode&1)!==0;te!==null;){var a=te,o=a.child;if(a.tag===22&&n){var i=a.memoizedState!==null||nl;if(!i){var s=a.alternate,l=s!==null&&s.memoizedState!==null||St;s=nl;var u=St;if(nl=i,(St=l)&&!u)for(te=a;te!==null;)i=te,l=i.child,i.tag===22&&i.memoizedState!==null?Lv(a):l!==null?(l.return=i,te=l):Lv(a);for(;o!==null;)te=o,Sw(o),o=o.sibling;te=a,nl=s,St=u}Mv(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,te=o):Mv(e)}}function Mv(e){for(;te!==null;){var t=te;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:St||Yc(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!St)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:gr(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wv(t,o,n);break;case 3:var i=t.updateQueue;if(i!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}wv(t,i,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Mi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}St||t.flags&512&&Pf(t)}catch(p){Ye(t,t.return,p)}}if(t===e){te=null;break}if(r=t.sibling,r!==null){r.return=t.return,te=r;break}te=t.return}}function Av(e){for(;te!==null;){var t=te;if(t===e){te=null;break}var r=t.sibling;if(r!==null){r.return=t.return,te=r;break}te=t.return}}function Lv(e){for(;te!==null;){var t=te;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Yc(4,t)}catch(l){Ye(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(l){Ye(t,a,l)}}var o=t.return;try{Pf(t)}catch(l){Ye(t,o,l)}break;case 5:var i=t.return;try{Pf(t)}catch(l){Ye(t,i,l)}}}catch(l){Ye(t,t.return,l)}if(t===e){te=null;break}var s=t.sibling;if(s!==null){s.return=t.return,te=s;break}te=t.return}}var z3=Math.ceil,fc=cn.ReactCurrentDispatcher,ah=cn.ReactCurrentOwner,or=cn.ReactCurrentBatchConfig,xe=0,ct=null,et=null,ht=0,Ht=0,qa=Un(0),ot=0,Gi=null,ga=0,Kc=0,oh=0,ki=null,Pt=null,ih=0,fo=1/0,Kr=null,pc=!1,Af=null,_n=null,al=!1,jn=null,hc=0,ji=0,Lf=null,Nl=-1,Cl=0;function Nt(){return xe&6?Qe():Nl!==-1?Nl:Nl=Qe()}function Pn(e){return e.mode&1?xe&2&&ht!==0?ht&-ht:S3.transition!==null?(Cl===0&&(Cl=iy()),Cl):(e=ke,e!==0||(e=window.event,e=e===void 0?16:py(e.type)),e):1}function Sr(e,t,r,n){if(50<ji)throw ji=0,Lf=null,Error(q(185));fs(e,r,n),(!(xe&2)||e!==ct)&&(e===ct&&(!(xe&2)&&(Kc|=r),ot===4&&Sn(e,ht)),It(e,n),r===1&&xe===0&&!(t.mode&1)&&(fo=Qe()+500,Wc&&Bn()))}function It(e,t){var r=e.callbackNode;SE(e,t);var n=Ql(e,e===ct?ht:0);if(n===0)r!==null&&Gm(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Gm(r),t===1)e.tag===0?x3(Iv.bind(null,e)):_y(Iv.bind(null,e)),g3(function(){!(xe&6)&&Bn()}),r=null;else{switch(sy(n)){case 1:r=_p;break;case 4:r=ay;break;case 16:r=Xl;break;case 536870912:r=oy;break;default:r=Xl}r=Ow(r,Ew.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Ew(e,t){if(Nl=-1,Cl=0,xe&6)throw Error(q(327));var r=e.callbackNode;if(ro()&&e.callbackNode!==r)return null;var n=Ql(e,e===ct?ht:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=mc(e,n);else{t=n;var a=xe;xe|=2;var o=jw();(ct!==e||ht!==t)&&(Kr=null,fo=Qe()+500,ia(e,t));do try{B3();break}catch(s){kw(e,s)}while(!0);Vp(),fc.current=o,xe=a,et!==null?t=0:(ct=null,ht=0,t=ot)}if(t!==0){if(t===2&&(a=uf(e),a!==0&&(n=a,t=If(e,a))),t===1)throw r=Gi,ia(e,0),Sn(e,n),It(e,Qe()),r;if(t===6)Sn(e,n);else{if(a=e.current.alternate,!(n&30)&&!F3(a)&&(t=mc(e,n),t===2&&(o=uf(e),o!==0&&(n=o,t=If(e,o))),t===1))throw r=Gi,ia(e,0),Sn(e,n),It(e,Qe()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(q(345));case 2:Qn(e,Pt,Kr);break;case 3:if(Sn(e,n),(n&130023424)===n&&(t=ih+500-Qe(),10<t)){if(Ql(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Nt(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=yf(Qn.bind(null,e,Pt,Kr),t);break}Qn(e,Pt,Kr);break;case 4:if(Sn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var i=31-xr(n);o=1<<i,i=t[i],i>a&&(a=i),n&=~o}if(n=a,n=Qe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*z3(n/1960))-n,10<n){e.timeoutHandle=yf(Qn.bind(null,e,Pt,Kr),n);break}Qn(e,Pt,Kr);break;case 5:Qn(e,Pt,Kr);break;default:throw Error(q(329))}}}return It(e,Qe()),e.callbackNode===r?Ew.bind(null,e):null}function If(e,t){var r=ki;return e.current.memoizedState.isDehydrated&&(ia(e,t).flags|=256),e=mc(e,t),e!==2&&(t=Pt,Pt=r,t!==null&&zf(t)),e}function zf(e){Pt===null?Pt=e:Pt.push.apply(Pt,e)}function F3(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!kr(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~oh,t&=~Kc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-xr(t),n=1<<r;e[r]=-1,t&=~n}}function Iv(e){if(xe&6)throw Error(q(327));ro();var t=Ql(e,0);if(!(t&1))return It(e,Qe()),null;var r=mc(e,t);if(e.tag!==0&&r===2){var n=uf(e);n!==0&&(t=n,r=If(e,n))}if(r===1)throw r=Gi,ia(e,0),Sn(e,t),It(e,Qe()),r;if(r===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Qn(e,Pt,Kr),It(e,Qe()),null}function sh(e,t){var r=xe;xe|=1;try{return e(t)}finally{xe=r,xe===0&&(fo=Qe()+500,Wc&&Bn())}}function ya(e){jn!==null&&jn.tag===0&&!(xe&6)&&ro();var t=xe;xe|=1;var r=or.transition,n=ke;try{if(or.transition=null,ke=1,e)return e()}finally{ke=n,or.transition=r,xe=t,!(xe&6)&&Bn()}}function lh(){Ht=qa.current,Ie(qa)}function ia(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,v3(r)),et!==null)for(r=et.return;r!==null;){var n=r;switch(Bp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&rc();break;case 3:co(),Ie(At),Ie(Et),Qp();break;case 5:Xp(n);break;case 4:co();break;case 13:Ie(He);break;case 19:Ie(He);break;case 10:Gp(n.type._context);break;case 22:case 23:lh()}r=r.return}if(ct=e,et=e=Rn(e.current,null),ht=Ht=t,ot=0,Gi=null,oh=Kc=ga=0,Pt=ki=null,ra!==null){for(t=0;t<ra.length;t++)if(r=ra[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var i=o.next;o.next=a,n.next=i}r.pending=n}ra=null}return e}function kw(e,t){do{var r=et;try{if(Vp(),kl.current=dc,uc){for(var n=We.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}uc=!1}if(va=0,st=at=We=null,Si=!1,Hi=0,ah.current=null,r===null||r.return===null){ot=1,Gi=t,et=null;break}e:{var o=e,i=r.return,s=r,l=t;if(t=ht,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=jv(i);if(v!==null){v.flags&=-257,$v(v,i,s,o,t),v.mode&1&&kv(o,u,t),t=v,l=u;var y=t.updateQueue;if(y===null){var m=new Set;m.add(l),t.updateQueue=m}else y.add(l);break e}else{if(!(t&1)){kv(o,u,t),ch();break e}l=Error(q(426))}}else if(Ue&&s.mode&1){var x=jv(i);if(x!==null){!(x.flags&65536)&&(x.flags|=256),$v(x,i,s,o,t),Hp(uo(l,s));break e}}o=l=uo(l,s),ot!==4&&(ot=2),ki===null?ki=[o]:ki.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=sw(o,l,t);yv(o,h);break e;case 1:s=l;var g=o.type,w=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(_n===null||!_n.has(w)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=lw(o,s,t);yv(o,S);break e}}o=o.return}while(o!==null)}Nw(r)}catch(b){t=b,et===r&&r!==null&&(et=r=r.return);continue}break}while(!0)}function jw(){var e=fc.current;return fc.current=dc,e===null?dc:e}function ch(){(ot===0||ot===3||ot===2)&&(ot=4),ct===null||!(ga&268435455)&&!(Kc&268435455)||Sn(ct,ht)}function mc(e,t){var r=xe;xe|=2;var n=jw();(ct!==e||ht!==t)&&(Kr=null,ia(e,t));do try{U3();break}catch(a){kw(e,a)}while(!0);if(Vp(),xe=r,fc.current=n,et!==null)throw Error(q(261));return ct=null,ht=0,ot}function U3(){for(;et!==null;)$w(et)}function B3(){for(;et!==null&&!pE();)$w(et)}function $w(e){var t=Dw(e.alternate,e,Ht);e.memoizedProps=e.pendingProps,t===null?Nw(e):et=t,ah.current=null}function Nw(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=M3(r,t),r!==null){r.flags&=32767,et=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ot=6,et=null;return}}else if(r=R3(r,t,Ht),r!==null){et=r;return}if(t=t.sibling,t!==null){et=t;return}et=t=e}while(t!==null);ot===0&&(ot=5)}function Qn(e,t,r){var n=ke,a=or.transition;try{or.transition=null,ke=1,H3(e,t,r,n)}finally{or.transition=a,ke=n}return null}function H3(e,t,r,n){do ro();while(jn!==null);if(xe&6)throw Error(q(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(EE(e,o),e===ct&&(et=ct=null,ht=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||al||(al=!0,Ow(Xl,function(){return ro(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=or.transition,or.transition=null;var i=ke;ke=1;var s=xe;xe|=4,ah.current=null,L3(e,r),xw(r,e),c3(vf),Jl=!!mf,vf=mf=null,e.current=r,I3(r),hE(),xe=s,ke=i,or.transition=o}else e.current=r;if(al&&(al=!1,jn=e,hc=a),o=e.pendingLanes,o===0&&(_n=null),gE(r.stateNode),It(e,Qe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(pc)throw pc=!1,e=Af,Af=null,e;return hc&1&&e.tag!==0&&ro(),o=e.pendingLanes,o&1?e===Lf?ji++:(ji=0,Lf=e):ji=0,Bn(),null}function ro(){if(jn!==null){var e=sy(hc),t=or.transition,r=ke;try{if(or.transition=null,ke=16>e?16:e,jn===null)var n=!1;else{if(e=jn,jn=null,hc=0,xe&6)throw Error(q(331));var a=xe;for(xe|=4,te=e.current;te!==null;){var o=te,i=o.child;if(te.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(te=u;te!==null;){var d=te;switch(d.tag){case 0:case 11:case 15:Ei(8,d,o)}var f=d.child;if(f!==null)f.return=d,te=f;else for(;te!==null;){d=te;var p=d.sibling,v=d.return;if(yw(d),d===u){te=null;break}if(p!==null){p.return=v,te=p;break}te=v}}}var y=o.alternate;if(y!==null){var m=y.child;if(m!==null){y.child=null;do{var x=m.sibling;m.sibling=null,m=x}while(m!==null)}}te=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,te=i;else e:for(;te!==null;){if(o=te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ei(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,te=h;break e}te=o.return}}var g=e.current;for(te=g;te!==null;){i=te;var w=i.child;if(i.subtreeFlags&2064&&w!==null)w.return=i,te=w;else e:for(i=g;te!==null;){if(s=te,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Yc(9,s)}}catch(b){Ye(s,s.return,b)}if(s===i){te=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,te=S;break e}te=s.return}}if(xe=a,Bn(),Ar&&typeof Ar.onPostCommitFiberRoot=="function")try{Ar.onPostCommitFiberRoot(zc,e)}catch{}n=!0}return n}finally{ke=r,or.transition=t}}return!1}function zv(e,t,r){t=uo(r,t),t=sw(e,t,1),e=Tn(e,t,1),t=Nt(),e!==null&&(fs(e,1,t),It(e,t))}function Ye(e,t,r){if(e.tag===3)zv(e,e,r);else for(;t!==null;){if(t.tag===3){zv(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_n===null||!_n.has(n))){e=uo(r,e),e=lw(t,e,1),t=Tn(t,e,1),e=Nt(),t!==null&&(fs(t,1,e),It(t,e));break}}t=t.return}}function W3(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Nt(),e.pingedLanes|=e.suspendedLanes&r,ct===e&&(ht&r)===r&&(ot===4||ot===3&&(ht&130023424)===ht&&500>Qe()-ih?ia(e,0):oh|=r),It(e,t)}function Cw(e,t){t===0&&(e.mode&1?(t=Ks,Ks<<=1,!(Ks&130023424)&&(Ks=4194304)):t=1);var r=Nt();e=an(e,t),e!==null&&(fs(e,t,r),It(e,r))}function V3(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Cw(e,r)}function G3(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(q(314))}n!==null&&n.delete(t),Cw(e,r)}var Dw;Dw=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||At.current)Rt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Rt=!1,P3(e,t,r);Rt=!!(e.flags&131072)}else Rt=!1,Ue&&t.flags&1048576&&Py(t,oc,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;$l(e,t),e=t.pendingProps;var a=io(t,Et.current);to(t,r),a=Zp(null,t,n,e,a,r);var o=eh();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Lt(n)?(o=!0,nc(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Kp(t),a.updater=Gc,t.stateNode=a,a._reactInternals=t,jf(t,n,e,r),t=Cf(null,t,n,!0,o,r)):(t.tag=0,Ue&&o&&Up(t),kt(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch($l(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=K3(n),e=gr(n,e),a){case 0:t=Nf(null,t,n,e,r);break e;case 1:t=Dv(null,t,n,e,r);break e;case 11:t=Nv(null,t,n,e,r);break e;case 14:t=Cv(null,t,n,gr(n.type,e),r);break e}throw Error(q(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:gr(n,a),Nf(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:gr(n,a),Dv(e,t,n,a,r);case 3:e:{if(fw(t),e===null)throw Error(q(387));n=t.pendingProps,o=t.memoizedState,a=o.element,zy(e,t),lc(t,n,null,r);var i=t.memoizedState;if(n=i.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=uo(Error(q(423)),t),t=Ov(e,t,n,r,a);break e}else if(n!==a){a=uo(Error(q(424)),t),t=Ov(e,t,n,r,a);break e}else for(Vt=On(t.stateNode.containerInfo.firstChild),Yt=t,Ue=!0,br=null,r=Ly(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(so(),n===a){t=on(e,t,r);break e}kt(e,t,n,r)}t=t.child}return t;case 5:return Fy(t),e===null&&Sf(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,i=a.children,gf(n,a)?i=null:o!==null&&gf(n,o)&&(t.flags|=32),dw(e,t),kt(e,t,i,r),t.child;case 6:return e===null&&Sf(t),null;case 13:return pw(e,t,r);case 4:return qp(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=lo(t,null,n,r):kt(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:gr(n,a),Nv(e,t,n,a,r);case 7:return kt(e,t,t.pendingProps,r),t.child;case 8:return kt(e,t,t.pendingProps.children,r),t.child;case 12:return kt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,Te(ic,n._currentValue),n._currentValue=i,o!==null)if(kr(o.value,i)){if(o.children===a.children&&!At.current){t=on(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){i=o.child;for(var l=s.firstContext;l!==null;){if(l.context===n){if(o.tag===1){l=tn(-1,r&-r),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=r,l=o.alternate,l!==null&&(l.lanes|=r),Ef(o.return,r,t),s.lanes|=r;break}l=l.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(q(341));i.lanes|=r,s=i.alternate,s!==null&&(s.lanes|=r),Ef(i,r,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}kt(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,to(t,r),a=lr(a),n=n(a),t.flags|=1,kt(e,t,n,r),t.child;case 14:return n=t.type,a=gr(n,t.pendingProps),a=gr(n.type,a),Cv(e,t,n,a,r);case 15:return cw(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:gr(n,a),$l(e,t),t.tag=1,Lt(n)?(e=!0,nc(t)):e=!1,to(t,r),iw(t,n,a),jf(t,n,a,r),Cf(null,t,n,!0,e,r);case 19:return hw(e,t,r);case 22:return uw(e,t,r)}throw Error(q(156,t.tag))};function Ow(e,t){return ny(e,t)}function Y3(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(e,t,r,n){return new Y3(e,t,r,n)}function uh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function K3(e){if(typeof e=="function")return uh(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Dp)return 11;if(e===Op)return 14}return 2}function Rn(e,t){var r=e.alternate;return r===null?(r=ar(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Dl(e,t,r,n,a,o){var i=2;if(n=e,typeof e=="function")uh(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case za:return sa(r.children,a,o,t);case Cp:i=8,a|=8;break;case Kd:return e=ar(12,r,t,a|2),e.elementType=Kd,e.lanes=o,e;case qd:return e=ar(13,r,t,a),e.elementType=qd,e.lanes=o,e;case Xd:return e=ar(19,r,t,a),e.elementType=Xd,e.lanes=o,e;case F0:return qc(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case I0:i=10;break e;case z0:i=9;break e;case Dp:i=11;break e;case Op:i=14;break e;case wn:i=16,n=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=ar(i,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function sa(e,t,r,n){return e=ar(7,e,n,t),e.lanes=r,e}function qc(e,t,r,n){return e=ar(22,e,n,t),e.elementType=F0,e.lanes=r,e.stateNode={isHidden:!1},e}function gd(e,t,r){return e=ar(6,e,null,t),e.lanes=r,e}function yd(e,t,r){return t=ar(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function q3(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ju(0),this.expirationTimes=Ju(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ju(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function dh(e,t,r,n,a,o,i,s,l){return e=new q3(e,t,r,s,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ar(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(o),e}function X3(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ia,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Tw(e){if(!e)return An;e=e._reactInternals;e:{if(Na(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Lt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var r=e.type;if(Lt(r))return Ty(e,r,t)}return t}function _w(e,t,r,n,a,o,i,s,l){return e=dh(r,n,!0,e,a,o,i,s,l),e.context=Tw(null),r=e.current,n=Nt(),a=Pn(r),o=tn(n,a),o.callback=t??null,Tn(r,o,a),e.current.lanes=a,fs(e,a,n),It(e,n),e}function Xc(e,t,r,n){var a=t.current,o=Nt(),i=Pn(a);return r=Tw(r),t.context===null?t.context=r:t.pendingContext=r,t=tn(o,i),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Tn(a,t,i),e!==null&&(Sr(e,a,i,o),El(e,a,i)),i}function vc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Fv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function fh(e,t){Fv(e,t),(e=e.alternate)&&Fv(e,t)}function Q3(){return null}var Pw=typeof reportError=="function"?reportError:function(e){console.error(e)};function ph(e){this._internalRoot=e}Qc.prototype.render=ph.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Xc(e,t,null,null)};Qc.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ya(function(){Xc(null,e,null,null)}),t[nn]=null}};function Qc(e){this._internalRoot=e}Qc.prototype.unstable_scheduleHydration=function(e){if(e){var t=uy();e={blockedOn:null,target:e,priority:t};for(var r=0;r<xn.length&&t!==0&&t<xn[r].priority;r++);xn.splice(r,0,e),r===0&&fy(e)}};function hh(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Jc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uv(){}function J3(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var u=vc(i);o.call(u)}}var i=_w(t,n,e,0,null,!1,!1,"",Uv);return e._reactRootContainer=i,e[nn]=i.current,Ii(e.nodeType===8?e.parentNode:e),ya(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var u=vc(l);s.call(u)}}var l=dh(e,0,!1,null,null,!1,!1,"",Uv);return e._reactRootContainer=l,e[nn]=l.current,Ii(e.nodeType===8?e.parentNode:e),ya(function(){Xc(t,l,r,n)}),l}function Zc(e,t,r,n,a){var o=r._reactRootContainer;if(o){var i=o;if(typeof a=="function"){var s=a;a=function(){var l=vc(i);s.call(l)}}Xc(t,i,e,a)}else i=J3(r,t,e,a,n);return vc(i)}ly=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=fi(t.pendingLanes);r!==0&&(Pp(t,r|1),It(t,Qe()),!(xe&6)&&(fo=Qe()+500,Bn()))}break;case 13:ya(function(){var n=an(e,1);if(n!==null){var a=Nt();Sr(n,e,1,a)}}),fh(e,1)}};Rp=function(e){if(e.tag===13){var t=an(e,134217728);if(t!==null){var r=Nt();Sr(t,e,134217728,r)}fh(e,134217728)}};cy=function(e){if(e.tag===13){var t=Pn(e),r=an(e,t);if(r!==null){var n=Nt();Sr(r,e,t,n)}fh(e,t)}};uy=function(){return ke};dy=function(e,t){var r=ke;try{return ke=e,t()}finally{ke=r}};sf=function(e,t,r){switch(t){case"input":if(Zd(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=Hc(n);if(!a)throw Error(q(90));B0(n),Zd(n,a)}}}break;case"textarea":W0(e,r);break;case"select":t=r.value,t!=null&&Qa(e,!!r.multiple,t,!1)}};Q0=sh;J0=ya;var Z3={usingClientEntryPoint:!1,Events:[hs,Ha,Hc,q0,X0,sh]},ri={findFiberByHostInstance:ta,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e4={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:cn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ty(e),e===null?null:e.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||Q3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ol.isDisabled&&ol.supportsFiber)try{zc=ol.inject(e4),Ar=ol}catch{}}Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z3;Xt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(t))throw Error(q(200));return X3(e,t,null,r)};Xt.createRoot=function(e,t){if(!hh(e))throw Error(q(299));var r=!1,n="",a=Pw;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=dh(e,1,!1,null,null,r,!1,n,a),e[nn]=t.current,Ii(e.nodeType===8?e.parentNode:e),new ph(t)};Xt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=ty(t),e=e===null?null:e.stateNode,e};Xt.flushSync=function(e){return ya(e)};Xt.hydrate=function(e,t,r){if(!Jc(t))throw Error(q(200));return Zc(null,e,t,!0,r)};Xt.hydrateRoot=function(e,t,r){if(!hh(e))throw Error(q(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",i=Pw;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(i=r.onRecoverableError)),t=_w(t,null,e,1,r??null,a,!1,o,i),e[nn]=t.current,Ii(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Qc(t)};Xt.render=function(e,t,r){if(!Jc(t))throw Error(q(200));return Zc(null,e,t,!1,r)};Xt.unmountComponentAtNode=function(e){if(!Jc(e))throw Error(q(40));return e._reactRootContainer?(ya(function(){Zc(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};Xt.unstable_batchedUpdates=sh;Xt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Jc(r))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Zc(e,t,r,!1,n)};Xt.version="18.3.1-next-f1338f8080-20240426";function Rw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rw)}catch(e){console.error(e)}}Rw(),R0.exports=Xt;var mh=R0.exports;const Mw=qe(mh);var Bv=mh;Gd.createRoot=Bv.createRoot,Gd.hydrateRoot=Bv.hydrateRoot;const t4="modulepreload",r4=function(e){return"/"+e},Hv={},n4=function(t,r,n){let a=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),i=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));a=Promise.all(r.map(s=>{if(s=r4(s),s in Hv)return;Hv[s]=!0;const l=s.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":t4,l||(d.as="script",d.crossOrigin=""),d.href=s,i&&d.setAttribute("nonce",i),document.head.appendChild(d),l)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})}))}return a.then(()=>t()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};var vh={};Object.defineProperty(vh,"__esModule",{value:!0});vh.parse=u4;vh.serialize=d4;const a4=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o4=/^[\u0021-\u003A\u003C-\u007E]*$/,i4=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s4=/^[\u0020-\u003A\u003D-\u007E]*$/,l4=Object.prototype.toString,c4=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function u4(e,t){const r=new c4,n=e.length;if(n<2)return r;const a=(t==null?void 0:t.decode)||f4;let o=0;do{const i=e.indexOf("=",o);if(i===-1)break;const s=e.indexOf(";",o),l=s===-1?n:s;if(i>l){o=e.lastIndexOf(";",i-1)+1;continue}const u=Wv(e,o,i),d=Vv(e,i,u),f=e.slice(u,d);if(r[f]===void 0){let p=Wv(e,i+1,l),v=Vv(e,l,p);const y=a(e.slice(p,v));r[f]=y}o=l+1}while(o<n);return r}function Wv(e,t,r){do{const n=e.charCodeAt(t);if(n!==32&&n!==9)return t}while(++t<r);return r}function Vv(e,t,r){for(;t>r;){const n=e.charCodeAt(--t);if(n!==32&&n!==9)return t+1}return r}function d4(e,t,r){const n=(r==null?void 0:r.encode)||encodeURIComponent;if(!a4.test(e))throw new TypeError(`argument name is invalid: ${e}`);const a=n(t);if(!o4.test(a))throw new TypeError(`argument val is invalid: ${t}`);let o=e+"="+a;if(!r)return o;if(r.maxAge!==void 0){if(!Number.isInteger(r.maxAge))throw new TypeError(`option maxAge is invalid: ${r.maxAge}`);o+="; Max-Age="+r.maxAge}if(r.domain){if(!i4.test(r.domain))throw new TypeError(`option domain is invalid: ${r.domain}`);o+="; Domain="+r.domain}if(r.path){if(!s4.test(r.path))throw new TypeError(`option path is invalid: ${r.path}`);o+="; Path="+r.path}if(r.expires){if(!p4(r.expires)||!Number.isFinite(r.expires.valueOf()))throw new TypeError(`option expires is invalid: ${r.expires}`);o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.partitioned&&(o+="; Partitioned"),r.priority)switch(typeof r.priority=="string"?r.priority.toLowerCase():void 0){case"low":o+="; Priority=Low";break;case"medium":o+="; Priority=Medium";break;case"high":o+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${r.priority}`)}if(r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"none":o+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${r.sameSite}`)}return o}function f4(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function p4(e){return l4.call(e)==="[object Date]"}var Gv="popstate";function h4(e={}){function t(n,a){let{pathname:o,search:i,hash:s}=n.location;return Yi("",{pathname:o,search:i,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function r(n,a){return typeof a=="string"?a:Ln(a)}return v4(t,r,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mt(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function m4(){return Math.random().toString(36).substring(2,10)}function Yv(e,t){return{usr:e.state,key:e.key,idx:t}}function Yi(e,t,r=null,n){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Hn(t):t,state:r,key:t&&t.key||n||m4()}}function Ln({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Hn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function v4(e,t,r,n={}){let{window:a=document.defaultView,v5Compat:o=!1}=n,i=a.history,s="POP",l=null,u=d();u==null&&(u=0,i.replaceState({...i.state,idx:u},""));function d(){return(i.state||{idx:null}).idx}function f(){s="POP";let x=d(),h=x==null?null:x-u;u=x,l&&l({action:s,location:m.location,delta:h})}function p(x,h){s="PUSH";let g=Yi(m.location,x,h);u=d()+1;let w=Yv(g,u),S=m.createHref(g);try{i.pushState(w,"",S)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(S)}o&&l&&l({action:s,location:m.location,delta:1})}function v(x,h){s="REPLACE";let g=Yi(m.location,x,h);u=d();let w=Yv(g,u),S=m.createHref(g);i.replaceState(w,"",S),o&&l&&l({action:s,location:m.location,delta:0})}function y(x){let h=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof x=="string"?x:Ln(x);return g=g.replace(/ $/,"%20"),ye(h,`No window.location.(origin|href) available to create URL for href: ${g}`),new URL(g,h)}let m={get action(){return s},get location(){return e(a,i)},listen(x){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Gv,f),l=x,()=>{a.removeEventListener(Gv,f),l=null}},createHref(x){return t(a,x)},createURL:y,encodeLocation(x){let h=y(x);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:p,replace:v,go(x){return i.go(x)}};return m}var g4=new Set(["lazy","caseSensitive","path","id","index","children"]);function y4(e){return e.index===!0}function gc(e,t,r=[],n={}){return e.map((a,o)=>{let i=[...r,String(o)],s=typeof a.id=="string"?a.id:i.join("-");if(ye(a.index!==!0||!a.children,"Cannot specify children on an index route"),ye(!n[s],`Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`),y4(a)){let l={...a,...t(a),id:s};return n[s]=l,l}else{let l={...a,...t(a),id:s,children:void 0};return n[s]=l,a.children&&(l.children=gc(a.children,t,i,n)),l}})}function En(e,t,r="/"){return Ol(e,t,r,!1)}function Ol(e,t,r,n){let a=typeof t=="string"?Hn(t):t,o=jr(a.pathname||"/",r);if(o==null)return null;let i=Aw(e);b4(i);let s=null;for(let l=0;s==null&&l<i.length;++l){let u=T4(o);s=D4(i[l],u,n)}return s}function w4(e,t){let{route:r,pathname:n,params:a}=e;return{id:r.id,pathname:n,params:a,data:t[r.id],handle:r.handle}}function Aw(e,t=[],r=[],n=""){let a=(o,i,s)=>{let l={relativePath:s===void 0?o.path||"":s,caseSensitive:o.caseSensitive===!0,childrenIndex:i,route:o};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(n),`Absolute route path "${l.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(n.length));let u=Ir([n,l.relativePath]),d=r.concat(l);o.children&&o.children.length>0&&(ye(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${u}".`),Aw(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:N4(u,o.index),routesMeta:d})};return e.forEach((o,i)=>{var s;if(o.path===""||!((s=o.path)!=null&&s.includes("?")))a(o,i);else for(let l of Lw(o.path))a(o,i,l)}),t}function Lw(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let i=Lw(n.join("/")),s=[];return s.push(...i.map(l=>l===""?o:[o,l].join("/"))),a&&s.push(...i),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function b4(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:C4(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var x4=/^:[\w-]+$/,S4=3,E4=2,k4=1,j4=10,$4=-2,Kv=e=>e==="*";function N4(e,t){let r=e.split("/"),n=r.length;return r.some(Kv)&&(n+=$4),t&&(n+=E4),r.filter(a=>!Kv(a)).reduce((a,o)=>a+(x4.test(o)?S4:o===""?k4:j4),n)}function C4(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function D4(e,t,r=!1){let{routesMeta:n}=e,a={},o="/",i=[];for(let s=0;s<n.length;++s){let l=n[s],u=s===n.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=yc({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),p=l.route;if(!f&&u&&r&&!n[n.length-1].route.index&&(f=yc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(a,f.params),i.push({params:a,pathname:Ir([o,f.pathname]),pathnameBase:R4(Ir([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Ir([o,f.pathnameBase]))}return i}function yc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=O4(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:n.reduce((u,{paramName:d,isOptional:f},p)=>{if(d==="*"){let y=s[p]||"";i=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const v=s[p];return f&&!v?u[d]=void 0:u[d]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function O4(e,t=!1,r=!0){mt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,l)=>(n.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function T4(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mt(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function jr(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function _4(e,t="/"){let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Hn(e):e;return{pathname:r?r.startsWith("/")?r:P4(r,t):t,search:M4(n),hash:A4(a)}}function P4(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function wd(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Iw(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function gh(e){let t=Iw(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function yh(e,t,r,n=!1){let a;typeof e=="string"?a=Hn(e):(a={...e},ye(!a.pathname||!a.pathname.includes("?"),wd("?","pathname","search",a)),ye(!a.pathname||!a.pathname.includes("#"),wd("#","pathname","hash",a)),ye(!a.search||!a.search.includes("#"),wd("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,s;if(i==null)s=r;else{let f=t.length-1;if(!n&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),f-=1;a.pathname=p.join("/")}s=f>=0?t[f]:"/"}let l=_4(a,s),u=i&&i!=="/"&&i.endsWith("/"),d=(o||i===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}var Ir=e=>e.join("/").replace(/\/\/+/g,"/"),R4=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M4=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,A4=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ne=(e,t=302)=>{let r=t;typeof r=="number"?r={status:r}:typeof r.status>"u"&&(r.status=302);let n=new Headers(r.headers);return n.set("Location",e),new Response(null,{...r,headers:n})},wc=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function eu(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var zw=["POST","PUT","PATCH","DELETE"],L4=new Set(zw),I4=["GET",...zw],z4=new Set(I4),F4=new Set([301,302,303,307,308]),U4=new Set([307,308]),bd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},B4={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ni={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,H4=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Fw="remix-router-transitions",Uw=Symbol("ResetLoaderData");function W4(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u";ye(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let n=e.mapRouteProperties||H4,a={},o=gc(e.routes,n,void 0,a),i,s=e.basename||"/",l=e.dataStrategy||q4,u=e.patchRoutesOnNavigation,d={...e.future},f=null,p=new Set,v=null,y=null,m=null,x=e.hydrationData!=null,h=En(o,e.history.location,s),g=null;if(h==null&&!u){let N=er(404,{pathname:e.history.location.pathname}),{matches:_,route:A}=og(o);h=_,g={[A.id]:N}}h&&!e.hydrationData&&Is(h,o,e.history.location.pathname).active&&(h=null);let w;if(h)if(h.some(N=>N.route.lazy))w=!1;else if(!h.some(N=>N.route.loader))w=!0;else{let N=e.hydrationData?e.hydrationData.loaderData:null,_=e.hydrationData?e.hydrationData.errors:null;if(_){let A=h.findIndex(K=>_[K.route.id]!==void 0);w=h.slice(0,A+1).every(K=>!Uf(K.route,N,_))}else w=h.every(A=>!Uf(A.route,N,_))}else{w=!1,h=[];let N=Is(null,o,e.history.location.pathname);N.active&&N.matches&&(h=N.matches)}let S,b={historyAction:e.history.action,location:e.history.location,matches:h,initialized:w,navigation:bd,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||g,fetchers:new Map,blockers:new Map},E="POP",j=!1,k,D=!1,O=new Map,R=null,Q=!1,X=!1,Y=new Set,z=new Map,I=0,V=-1,T=new Map,F=new Set,H=new Map,Z=new Map,P=new Set,L=new Map,U,G=null;function J(){if(f=e.history.listen(({action:N,location:_,delta:A})=>{if(U){U(),U=void 0;return}mt(L.size===0||A!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=Om({currentLocation:b.location,nextLocation:_,historyAction:N});if(K&&A!=null){let ne=new Promise(ce=>{U=ce});e.history.go(A*-1),Ls(K,{state:"blocked",location:_,proceed(){Ls(K,{state:"proceeding",proceed:void 0,reset:void 0,location:_}),ne.then(()=>e.history.go(A))},reset(){let ce=new Map(b.blockers);ce.set(K,ni),le({blockers:ce})}});return}return rt(N,_)}),r){ik(t,O);let N=()=>sk(t,O);t.addEventListener("pagehide",N),R=()=>t.removeEventListener("pagehide",N)}return b.initialized||rt("POP",b.location,{initialHydration:!0}),S}function oe(){f&&f(),R&&R(),p.clear(),k&&k.abort(),b.fetchers.forEach((N,_)=>Ta(_)),b.blockers.forEach((N,_)=>Dm(_))}function de(N){return p.add(N),()=>p.delete(N)}function le(N,_={}){b={...b,...N};let A=[],K=[];b.fetchers.forEach((ne,ce)=>{ne.state==="idle"&&(P.has(ce)?A.push(ce):K.push(ce))}),[...p].forEach(ne=>ne(b,{deletedFetchers:A,viewTransitionOpts:_.viewTransitionOpts,flushSync:_.flushSync===!0})),A.forEach(ne=>Ta(ne)),K.forEach(ne=>b.fetchers.delete(ne))}function be(N,_,{flushSync:A}={}){var ee,fe;let K=b.actionData!=null&&b.navigation.formMethod!=null&&wr(b.navigation.formMethod)&&b.navigation.state==="loading"&&((ee=N.state)==null?void 0:ee._isRedirect)!==!0,ne;_.actionData?Object.keys(_.actionData).length>0?ne=_.actionData:ne=null:K?ne=b.actionData:ne=null;let ce=_.loaderData?ng(b.loaderData,_.loaderData,_.matches||[],_.errors):b.loaderData,ue=b.blockers;ue.size>0&&(ue=new Map(ue),ue.forEach((me,ze)=>ue.set(ze,ni)));let ae=j===!0||b.navigation.formMethod!=null&&wr(b.navigation.formMethod)&&((fe=N.state)==null?void 0:fe._isRedirect)!==!0;i&&(o=i,i=void 0),Q||E==="POP"||(E==="PUSH"?e.history.push(N,N.state):E==="REPLACE"&&e.history.replace(N,N.state));let ie;if(E==="POP"){let me=O.get(b.location.pathname);me&&me.has(N.pathname)?ie={currentLocation:b.location,nextLocation:N}:O.has(N.pathname)&&(ie={currentLocation:N,nextLocation:b.location})}else if(D){let me=O.get(b.location.pathname);me?me.add(N.pathname):(me=new Set([N.pathname]),O.set(b.location.pathname,me)),ie={currentLocation:b.location,nextLocation:N}}le({..._,actionData:ne,loaderData:ce,historyAction:E,location:N,initialized:!0,navigation:bd,revalidation:"idle",restoreScrollPosition:_m(N,_.matches||b.matches),preventScrollReset:ae,blockers:ue},{viewTransitionOpts:ie,flushSync:A===!0}),E="POP",j=!1,D=!1,Q=!1,X=!1,G==null||G.resolve(),G=null}async function Pe(N,_){if(typeof N=="number"){e.history.go(N);return}let A=Ff(b.location,b.matches,s,N,_==null?void 0:_.fromRouteId,_==null?void 0:_.relative),{path:K,submission:ne,error:ce}=qv(!1,A,_),ue=b.location,ae=Yi(b.location,K,_&&_.state);ae={...ae,...e.history.encodeLocation(ae)};let ie=_&&_.replace!=null?_.replace:void 0,ee="PUSH";ie===!0?ee="REPLACE":ie===!1||ne!=null&&wr(ne.formMethod)&&ne.formAction===b.location.pathname+b.location.search&&(ee="REPLACE");let fe=_&&"preventScrollReset"in _?_.preventScrollReset===!0:void 0,me=(_&&_.flushSync)===!0,ze=Om({currentLocation:ue,nextLocation:ae,historyAction:ee});if(ze){Ls(ze,{state:"blocked",location:ae,proceed(){Ls(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:ae}),Pe(N,_)},reset(){let ft=new Map(b.blockers);ft.set(ze,ni),le({blockers:ft})}});return}await rt(ee,ae,{submission:ne,pendingError:ce,preventScrollReset:fe,replace:_&&_.replace,enableViewTransition:_&&_.viewTransition,flushSync:me})}function Ge(){G||(G=lk()),Kn(),le({revalidation:"loading"});let N=G.promise;return b.navigation.state==="submitting"?N:b.navigation.state==="idle"?(rt(b.historyAction,b.location,{startUninterruptedRevalidation:!0}),N):(rt(E||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation,enableViewTransition:D===!0}),N)}async function rt(N,_,A){k&&k.abort(),k=null,E=N,Q=(A&&A.startUninterruptedRevalidation)===!0,$S(b.location,b.matches),j=(A&&A.preventScrollReset)===!0,D=(A&&A.enableViewTransition)===!0;let K=i||o,ne=A&&A.overrideNavigation,ce=En(K,_,s),ue=(A&&A.flushSync)===!0,ae=Is(ce,K,_.pathname);if(ae.active&&ae.matches&&(ce=ae.matches),!ce){let{error:Be,notFoundMatches:Re,route:nt}=Vu(_.pathname);be(_,{matches:Re,loaderData:{},errors:{[nt.id]:Be}},{flushSync:ue});return}if(b.initialized&&!X&&tk(b.location,_)&&!(A&&A.submission&&wr(A.submission.formMethod))){be(_,{matches:ce},{flushSync:ue});return}k=new AbortController;let ie=Ma(e.history,_,k.signal,A&&A.submission),ee;if(A&&A.pendingError)ee=[Zn(ce).route.id,{type:"error",error:A.pendingError}];else if(A&&A.submission&&wr(A.submission.formMethod)){let Be=await Uo(ie,_,A.submission,ce,ae.active,{replace:A.replace,flushSync:ue});if(Be.shortCircuited)return;if(Be.pendingActionResult){let[Re,nt]=Be.pendingActionResult;if(Wt(nt)&&eu(nt.error)&&nt.error.status===404){k=null,be(_,{matches:Be.matches,loaderData:{},errors:{[Re]:nt.error}});return}}ce=Be.matches||ce,ee=Be.pendingActionResult,ne=xd(_,A.submission),ue=!1,ae.active=!1,ie=Ma(e.history,ie.url,ie.signal)}let{shortCircuited:fe,matches:me,loaderData:ze,errors:ft}=await Bo(ie,_,ce,ae.active,ne,A&&A.submission,A&&A.fetcherSubmission,A&&A.replace,A&&A.initialHydration===!0,ue,ee);fe||(k=null,be(_,{matches:me||ce,...ag(ee),loaderData:ze,errors:ft}))}async function Uo(N,_,A,K,ne,ce={}){Kn();let ue=ak(_,A);if(le({navigation:ue},{flushSync:ce.flushSync===!0}),ne){let ee=await zs(K,_.pathname,N.signal);if(ee.type==="aborted")return{shortCircuited:!0};if(ee.type==="error"){let fe=Zn(ee.partialMatches).route.id;return{matches:ee.partialMatches,pendingActionResult:[fe,{type:"error",error:ee.error}]}}else if(ee.matches)K=ee.matches;else{let{notFoundMatches:fe,error:me,route:ze}=Vu(_.pathname);return{matches:fe,pendingActionResult:[ze.id,{type:"error",error:me}]}}}let ae,ie=hi(K,_);if(!ie.route.action&&!ie.route.lazy)ae={type:"error",error:er(405,{method:N.method,pathname:_.pathname,routeId:ie.route.id})};else if(ae=(await dn("action",b,N,[ie],K,null))[ie.route.id],N.signal.aborted)return{shortCircuited:!0};if(aa(ae)){let ee;return ce&&ce.replace!=null?ee=ce.replace:ee=eg(ae.response.headers.get("Location"),new URL(N.url),s)===b.location.pathname+b.location.search,await Jt(N,ae,!0,{submission:A,replace:ee}),{shortCircuited:!0}}if(Wt(ae)){let ee=Zn(K,ie.route.id);return(ce&&ce.replace)!==!0&&(E="PUSH"),{matches:K,pendingActionResult:[ee.route.id,ae]}}return{matches:K,pendingActionResult:[ie.route.id,ae]}}async function Bo(N,_,A,K,ne,ce,ue,ae,ie,ee,fe){let me=ne||xd(_,ce),ze=ce||ue||sg(me),ft=!Q&&!ie;if(K){if(ft){let yt=Ho(fe);le({navigation:me,...yt!==void 0?{actionData:yt}:{}},{flushSync:ee})}let De=await zs(A,_.pathname,N.signal);if(De.type==="aborted")return{shortCircuited:!0};if(De.type==="error"){let yt=Zn(De.partialMatches).route.id;return{matches:De.partialMatches,loaderData:{},errors:{[yt]:De.error}}}else if(De.matches)A=De.matches;else{let{error:yt,notFoundMatches:Bs,route:Ko}=Vu(_.pathname);return{matches:Bs,loaderData:{},errors:{[Ko.id]:yt}}}}let Be=i||o,[Re,nt]=Qv(e.history,b,A,ze,_,ie===!0,X,Y,P,H,F,Be,s,fe);if(V=++I,Re.length===0&&nt.length===0){let De=Nm();return be(_,{matches:A,loaderData:{},errors:fe&&Wt(fe[1])?{[fe[0]]:fe[1].error}:null,...ag(fe),...De?{fetchers:new Map(b.fetchers)}:{}},{flushSync:ee}),{shortCircuited:!0}}if(ft){let De={};if(!K){De.navigation=me;let yt=Ho(fe);yt!==void 0&&(De.actionData=yt)}nt.length>0&&(De.fetchers=As(nt)),le(De,{flushSync:ee})}nt.forEach(De=>{fn(De.key),De.controller&&z.set(De.key,De.controller)});let _a=()=>nt.forEach(De=>fn(De.key));k&&k.signal.addEventListener("abort",_a);let{loaderResults:Go,fetcherResults:Yr}=await Wo(b,A,Re,nt,N);if(N.signal.aborted)return{shortCircuited:!0};k&&k.signal.removeEventListener("abort",_a),nt.forEach(De=>z.delete(De.key));let Dr=il(Go);if(Dr)return await Jt(N,Dr.result,!0,{replace:ae}),{shortCircuited:!0};if(Dr=il(Yr),Dr)return F.add(Dr.key),await Jt(N,Dr.result,!0,{replace:ae}),{shortCircuited:!0};let{loaderData:Gu,errors:Yo}=rg(b,A,Go,fe,nt,Yr);ie&&b.errors&&(Yo={...b.errors,...Yo});let qn=Nm(),Fs=Cm(V),Us=qn||Fs||nt.length>0;return{matches:A,loaderData:Gu,errors:Yo,...Us?{fetchers:new Map(b.fetchers)}:{}}}function Ho(N){if(N&&!Wt(N[1]))return{[N[0]]:N[1].data};if(b.actionData)return Object.keys(b.actionData).length===0?null:b.actionData}function As(N){return N.forEach(_=>{let A=b.fetchers.get(_.key),K=ai(void 0,A?A.data:void 0);b.fetchers.set(_.key,K)}),new Map(b.fetchers)}async function Hu(N,_,A,K){fn(N);let ne=(K&&K.flushSync)===!0,ce=i||o,ue=Ff(b.location,b.matches,s,A,_,K==null?void 0:K.relative),ae=En(ce,ue,s),ie=Is(ae,ce,ue);if(ie.active&&ie.matches&&(ae=ie.matches),!ae){Zt(N,_,er(404,{pathname:ue}),{flushSync:ne});return}let{path:ee,submission:fe,error:me}=qv(!0,ue,K);if(me){Zt(N,_,me,{flushSync:ne});return}let ze=hi(ae,ee),ft=(K&&K.preventScrollReset)===!0;if(fe&&wr(fe.formMethod)){await Wu(N,_,ee,ze,ae,ie.active,ne,ft,fe);return}H.set(N,{routeId:_,path:ee}),await Gr(N,_,ee,ze,ae,ie.active,ne,ft,fe)}async function Wu(N,_,A,K,ne,ce,ue,ae,ie){Kn(),H.delete(N);function ee(Je){if(!Je.route.action&&!Je.route.lazy){let Pa=er(405,{method:ie.formMethod,pathname:A,routeId:_});return Zt(N,_,Pa,{flushSync:ue}),!0}return!1}if(!ce&&ee(K))return;let fe=b.fetchers.get(N);mr(N,ok(ie,fe),{flushSync:ue});let me=new AbortController,ze=Ma(e.history,A,me.signal,ie);if(ce){let Je=await zs(ne,A,ze.signal);if(Je.type==="aborted")return;if(Je.type==="error"){Zt(N,_,Je.error,{flushSync:ue});return}else if(Je.matches){if(ne=Je.matches,K=hi(ne,A),ee(K))return}else{Zt(N,_,er(404,{pathname:A}),{flushSync:ue});return}}z.set(N,me);let ft=I,Re=(await dn("action",b,ze,[K],ne,N))[K.route.id];if(ze.signal.aborted){z.get(N)===me&&z.delete(N);return}if(P.has(N)){if(aa(Re)||Wt(Re)){mr(N,gn(void 0));return}}else{if(aa(Re))if(z.delete(N),V>ft){mr(N,gn(void 0));return}else return F.add(N),mr(N,ai(ie)),Jt(ze,Re,!1,{fetcherSubmission:ie,preventScrollReset:ae});if(Wt(Re)){Zt(N,_,Re.error);return}}let nt=b.navigation.location||b.location,_a=Ma(e.history,nt,me.signal),Go=i||o,Yr=b.navigation.state!=="idle"?En(Go,b.navigation.location,s):b.matches;ye(Yr,"Didn't find any matches after fetcher action");let Dr=++I;T.set(N,Dr);let Gu=ai(ie,Re.data);b.fetchers.set(N,Gu);let[Yo,qn]=Qv(e.history,b,Yr,ie,nt,!1,X,Y,P,H,F,Go,s,[K.route.id,Re]);qn.filter(Je=>Je.key!==N).forEach(Je=>{let Pa=Je.key,Pm=b.fetchers.get(Pa),DS=ai(void 0,Pm?Pm.data:void 0);b.fetchers.set(Pa,DS),fn(Pa),Je.controller&&z.set(Pa,Je.controller)}),le({fetchers:new Map(b.fetchers)});let Fs=()=>qn.forEach(Je=>fn(Je.key));me.signal.addEventListener("abort",Fs);let{loaderResults:Us,fetcherResults:De}=await Wo(b,Yr,Yo,qn,_a);if(me.signal.aborted)return;me.signal.removeEventListener("abort",Fs),T.delete(N),z.delete(N),qn.forEach(Je=>z.delete(Je.key));let yt=il(Us);if(yt)return Jt(_a,yt.result,!1,{preventScrollReset:ae});if(yt=il(De),yt)return F.add(yt.key),Jt(_a,yt.result,!1,{preventScrollReset:ae});let{loaderData:Bs,errors:Ko}=rg(b,Yr,Us,void 0,qn,De);if(b.fetchers.has(N)){let Je=gn(Re.data);b.fetchers.set(N,Je)}Cm(Dr),b.navigation.state==="loading"&&Dr>V?(ye(E,"Expected pending action"),k&&k.abort(),be(b.navigation.location,{matches:Yr,loaderData:Bs,errors:Ko,fetchers:new Map(b.fetchers)})):(le({errors:Ko,loaderData:ng(b.loaderData,Bs,Yr,Ko),fetchers:new Map(b.fetchers)}),X=!1)}async function Gr(N,_,A,K,ne,ce,ue,ae,ie){let ee=b.fetchers.get(N);mr(N,ai(ie,ee?ee.data:void 0),{flushSync:ue});let fe=new AbortController,me=Ma(e.history,A,fe.signal);if(ce){let Re=await zs(ne,A,me.signal);if(Re.type==="aborted")return;if(Re.type==="error"){Zt(N,_,Re.error,{flushSync:ue});return}else if(Re.matches)ne=Re.matches,K=hi(ne,A);else{Zt(N,_,er(404,{pathname:A}),{flushSync:ue});return}}z.set(N,fe);let ze=I,Be=(await dn("loader",b,me,[K],ne,N))[K.route.id];if(z.get(N)===fe&&z.delete(N),!me.signal.aborted){if(P.has(N)){mr(N,gn(void 0));return}if(aa(Be))if(V>ze){mr(N,gn(void 0));return}else{F.add(N),await Jt(me,Be,!1,{preventScrollReset:ae});return}if(Wt(Be)){Zt(N,_,Be.error);return}mr(N,gn(Be.data))}}async function Jt(N,_,A,{submission:K,fetcherSubmission:ne,preventScrollReset:ce,replace:ue}={}){_.response.headers.has("X-Remix-Revalidate")&&(X=!0);let ae=_.response.headers.get("Location");ye(ae,"Expected a Location header on the redirect Response"),ae=eg(ae,new URL(N.url),s);let ie=Yi(b.location,ae,{_isRedirect:!0});if(r){let Be=!1;if(_.response.headers.has("X-Remix-Reload-Document"))Be=!0;else if(wh.test(ae)){const Re=e.history.createURL(ae);Be=Re.origin!==t.location.origin||jr(Re.pathname,s)==null}if(Be){ue?t.location.replace(ae):t.location.assign(ae);return}}k=null;let ee=ue===!0||_.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:fe,formAction:me,formEncType:ze}=b.navigation;!K&&!ne&&fe&&me&&ze&&(K=sg(b.navigation));let ft=K||ne;if(U4.has(_.response.status)&&ft&&wr(ft.formMethod))await rt(ee,ie,{submission:{...ft,formAction:ae},preventScrollReset:ce||j,enableViewTransition:A?D:void 0});else{let Be=xd(ie,K);await rt(ee,ie,{overrideNavigation:Be,fetcherSubmission:ne,preventScrollReset:ce||j,enableViewTransition:A?D:void 0})}}async function dn(N,_,A,K,ne,ce){let ue,ae={};try{ue=await X4(l,N,_,A,K,ne,ce,a,n)}catch(ie){return K.forEach(ee=>{ae[ee.route.id]={type:"error",error:ie}}),ae}for(let[ie,ee]of Object.entries(ue))if(rk(ee)){let fe=ee.result;ae[ie]={type:"redirect",response:Z4(fe,A,ie,ne,s)}}else ae[ie]=await J4(ee);return ae}async function Wo(N,_,A,K,ne){let ce=dn("loader",N,ne,A,_,null),ue=Promise.all(K.map(async ee=>{if(ee.matches&&ee.match&&ee.controller){let me=(await dn("loader",N,Ma(e.history,ee.path,ee.controller.signal),[ee.match],ee.matches,ee.key))[ee.match.route.id];return{[ee.key]:me}}else return Promise.resolve({[ee.key]:{type:"error",error:er(404,{pathname:ee.path})}})})),ae=await ce,ie=(await ue).reduce((ee,fe)=>Object.assign(ee,fe),{});return{loaderResults:ae,fetcherResults:ie}}function Kn(){X=!0,H.forEach((N,_)=>{z.has(_)&&Y.add(_),fn(_)})}function mr(N,_,A={}){b.fetchers.set(N,_),le({fetchers:new Map(b.fetchers)},{flushSync:(A&&A.flushSync)===!0})}function Zt(N,_,A,K={}){let ne=Zn(b.matches,_);Ta(N),le({errors:{[ne.route.id]:A},fetchers:new Map(b.fetchers)},{flushSync:(K&&K.flushSync)===!0})}function Vo(N){return Z.set(N,(Z.get(N)||0)+1),P.has(N)&&P.delete(N),b.fetchers.get(N)||B4}function Ta(N){let _=b.fetchers.get(N);z.has(N)&&!(_&&_.state==="loading"&&T.has(N))&&fn(N),H.delete(N),T.delete(N),F.delete(N),P.delete(N),Y.delete(N),b.fetchers.delete(N)}function ES(N){let _=(Z.get(N)||0)-1;_<=0?(Z.delete(N),P.add(N)):Z.set(N,_),le({fetchers:new Map(b.fetchers)})}function fn(N){let _=z.get(N);_&&(_.abort(),z.delete(N))}function $m(N){for(let _ of N){let A=Vo(_),K=gn(A.data);b.fetchers.set(_,K)}}function Nm(){let N=[],_=!1;for(let A of F){let K=b.fetchers.get(A);ye(K,`Expected fetcher: ${A}`),K.state==="loading"&&(F.delete(A),N.push(A),_=!0)}return $m(N),_}function Cm(N){let _=[];for(let[A,K]of T)if(K<N){let ne=b.fetchers.get(A);ye(ne,`Expected fetcher: ${A}`),ne.state==="loading"&&(fn(A),T.delete(A),_.push(A))}return $m(_),_.length>0}function kS(N,_){let A=b.blockers.get(N)||ni;return L.get(N)!==_&&L.set(N,_),A}function Dm(N){b.blockers.delete(N),L.delete(N)}function Ls(N,_){let A=b.blockers.get(N)||ni;ye(A.state==="unblocked"&&_.state==="blocked"||A.state==="blocked"&&_.state==="blocked"||A.state==="blocked"&&_.state==="proceeding"||A.state==="blocked"&&_.state==="unblocked"||A.state==="proceeding"&&_.state==="unblocked",`Invalid blocker state transition: ${A.state} -> ${_.state}`);let K=new Map(b.blockers);K.set(N,_),le({blockers:K})}function Om({currentLocation:N,nextLocation:_,historyAction:A}){if(L.size===0)return;L.size>1&&mt(!1,"A router only supports one blocker at a time");let K=Array.from(L.entries()),[ne,ce]=K[K.length-1],ue=b.blockers.get(ne);if(!(ue&&ue.state==="proceeding")&&ce({currentLocation:N,nextLocation:_,historyAction:A}))return ne}function Vu(N){let _=er(404,{pathname:N}),A=i||o,{matches:K,route:ne}=og(A);return{notFoundMatches:K,route:ne,error:_}}function jS(N,_,A){if(v=N,m=_,y=A||null,!x&&b.navigation===bd){x=!0;let K=_m(b.location,b.matches);K!=null&&le({restoreScrollPosition:K})}return()=>{v=null,m=null,y=null}}function Tm(N,_){return y&&y(N,_.map(K=>w4(K,b.loaderData)))||N.key}function $S(N,_){if(v&&m){let A=Tm(N,_);v[A]=m()}}function _m(N,_){if(v){let A=Tm(N,_),K=v[A];if(typeof K=="number")return K}return null}function Is(N,_,A){if(u)if(N){if(Object.keys(N[0].params).length>0)return{active:!0,matches:Ol(_,A,s,!0)}}else return{active:!0,matches:Ol(_,A,s,!0)||[]};return{active:!1,matches:null}}async function zs(N,_,A){if(!u)return{type:"success",matches:N};let K=N;for(;;){let ne=i==null,ce=i||o,ue=a;try{await u({path:_,matches:K,patch:(ee,fe)=>{A.aborted||Zv(ee,fe,ce,ue,n)}})}catch(ee){return{type:"error",error:ee,partialMatches:K}}finally{ne&&!A.aborted&&(o=[...o])}if(A.aborted)return{type:"aborted"};let ae=En(ce,_,s);if(ae)return{type:"success",matches:ae};let ie=Ol(ce,_,s,!0);if(!ie||K.length===ie.length&&K.every((ee,fe)=>ee.route.id===ie[fe].route.id))return{type:"success",matches:null};K=ie}}function NS(N){a={},i=gc(N,n,void 0,a)}function CS(N,_){let A=i==null;Zv(N,_,i||o,a,n),A&&(o=[...o],le({}))}return S={get basename(){return s},get future(){return d},get state(){return b},get routes(){return o},get window(){return t},initialize:J,subscribe:de,enableScrollRestoration:jS,navigate:Pe,fetch:Hu,revalidate:Ge,createHref:N=>e.history.createHref(N),encodeLocation:N=>e.history.encodeLocation(N),getFetcher:Vo,deleteFetcher:ES,dispose:oe,getBlocker:kS,deleteBlocker:Dm,patchRoutes:CS,_internalFetchControllers:z,_internalSetRoutes:NS},S}function V4(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function Ff(e,t,r,n,a,o){let i,s;if(a){i=[];for(let u of t)if(i.push(u),u.route.id===a){s=u;break}}else i=t,s=t[t.length-1];let l=yh(n||".",gh(i),jr(e.pathname,r)||e.pathname,o==="path");if(n==null&&(l.search=e.search,l.hash=e.hash),(n==null||n===""||n===".")&&s){let u=bh(l.search);if(s.route.index&&!u)l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index";else if(!s.route.index&&u){let d=new URLSearchParams(l.search),f=d.getAll("index");d.delete("index"),f.filter(v=>v).forEach(v=>d.append("index",v));let p=d.toString();l.search=p?`?${p}`:""}}return r!=="/"&&(l.pathname=l.pathname==="/"?r:Ir([r,l.pathname])),Ln(l)}function qv(e,t,r){if(!r||!V4(r))return{path:t};if(r.formMethod&&!nk(r.formMethod))return{path:t,error:er(405,{method:r.formMethod})};let n=()=>({path:t,error:er(400,{type:"invalid-body"})}),o=(r.formMethod||"get").toUpperCase(),i=Hw(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!wr(o))return n();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((p,[v,y])=>`${p}${v}=${y}
`,""):String(r.body);return{path:t,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!wr(o))return n();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:o,formAction:i,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return n()}}}ye(typeof FormData=="function","FormData is not available in this environment");let s,l;if(r.formData)s=Bf(r.formData),l=r.formData;else if(r.body instanceof FormData)s=Bf(r.body),l=r.body;else if(r.body instanceof URLSearchParams)s=r.body,l=tg(s);else if(r.body==null)s=new URLSearchParams,l=new FormData;else try{s=new URLSearchParams(r.body),l=tg(s)}catch{return n()}let u={formMethod:o,formAction:i,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:l,json:void 0,text:void 0};if(wr(u.formMethod))return{path:t,submission:u};let d=Hn(t);return e&&d.search&&bh(d.search)&&s.append("index",""),d.search=`?${s}`,{path:Ln(d),submission:u}}function Xv(e,t,r=!1){let n=e.findIndex(a=>a.route.id===t);return n>=0?e.slice(0,r?n+1:n):e}function Qv(e,t,r,n,a,o,i,s,l,u,d,f,p,v){let y=v?Wt(v[1])?v[1].error:v[1].data:void 0,m=e.createURL(t.location),x=e.createURL(a),h=r;o&&t.errors?h=Xv(r,Object.keys(t.errors)[0],!0):v&&Wt(v[1])&&(h=Xv(r,v[0]));let g=v?v[1].statusCode:void 0,w=g&&g>=400,S=h.filter((E,j)=>{let{route:k}=E;if(k.lazy)return!0;if(k.loader==null)return!1;if(o)return Uf(k,t.loaderData,t.errors);if(G4(t.loaderData,t.matches[j],E))return!0;let D=t.matches[j],O=E;return Jv(E,{currentUrl:m,currentParams:D.params,nextUrl:x,nextParams:O.params,...n,actionResult:y,actionStatus:g,defaultShouldRevalidate:w?!1:i||m.pathname+m.search===x.pathname+x.search||m.search!==x.search||Y4(D,O)})}),b=[];return u.forEach((E,j)=>{if(o||!r.some(Q=>Q.route.id===E.routeId)||l.has(j))return;let k=En(f,E.path,p);if(!k){b.push({key:j,routeId:E.routeId,path:E.path,matches:null,match:null,controller:null});return}let D=t.fetchers.get(j),O=hi(k,E.path),R=!1;d.has(j)?R=!1:s.has(j)?(s.delete(j),R=!0):D&&D.state!=="idle"&&D.data===void 0?R=i:R=Jv(O,{currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:x,nextParams:r[r.length-1].params,...n,actionResult:y,actionStatus:g,defaultShouldRevalidate:w?!1:i}),R&&b.push({key:j,routeId:E.routeId,path:E.path,matches:k,match:O,controller:new AbortController})}),[S,b]}function Uf(e,t,r){if(e.lazy)return!0;if(!e.loader)return!1;let n=t!=null&&t[e.id]!==void 0,a=r!=null&&r[e.id]!==void 0;return!n&&a?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!n&&!a}function G4(e,t,r){let n=!t||r.route.id!==t.route.id,a=!e.hasOwnProperty(r.route.id);return n||a}function Y4(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function Jv(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}function Zv(e,t,r,n,a){let o;if(e){let l=n[e];ye(l,`No route found to patch children into: routeId = ${e}`),l.children||(l.children=[]),o=l.children}else o=r;let i=t.filter(l=>!o.some(u=>Bw(l,u))),s=gc(i,a,[e||"_","patch",String((o==null?void 0:o.length)||"0")],n);o.push(...s)}function Bw(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((r,n)=>{var a;return(a=t.children)==null?void 0:a.some(o=>Bw(r,o))}):!1}async function K4(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let a=r[e.id];ye(a,"No route found in manifest");let o={};for(let i in n){let l=a[i]!==void 0&&i!=="hasErrorBoundary";mt(!l,`Route "${a.id}" has a static property "${i}" defined but its lazy function is also returning a value for this property. The lazy route property "${i}" will be ignored.`),!l&&!g4.has(i)&&(o[i]=n[i])}Object.assign(a,o),Object.assign(a,{...t(a),lazy:void 0})}async function q4({matches:e}){let t=e.filter(n=>n.shouldLoad);return(await Promise.all(t.map(n=>n.resolve()))).reduce((n,a,o)=>Object.assign(n,{[t[o].route.id]:a}),{})}async function X4(e,t,r,n,a,o,i,s,l,u){let d=o.map(v=>v.route.lazy?K4(v.route,l,s):void 0),f=o.map((v,y)=>{let m=d[y],x=a.some(g=>g.route.id===v.route.id);return{...v,shouldLoad:x,resolve:async g=>(g&&n.method==="GET"&&(v.route.lazy||v.route.loader)&&(x=!0),x?Q4(t,n,v,m,g,u):Promise.resolve({type:"data",result:void 0}))}}),p=await e({matches:f,request:n,params:o[0].params,fetcherKey:i,context:u});try{await Promise.all(d)}catch{}return p}async function Q4(e,t,r,n,a,o){let i,s,l=u=>{let d,f=new Promise((y,m)=>d=m);s=()=>d(),t.signal.addEventListener("abort",s);let p=y=>typeof u!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${e}" [routeId: ${r.route.id}]`)):u({request:t,params:r.params,context:o},...y!==void 0?[y]:[]),v=(async()=>{try{return{type:"data",result:await(a?a(m=>p(m)):p())}}catch(y){return{type:"error",result:y}}})();return Promise.race([v,f])};try{let u=r.route[e];if(n)if(u){let d,[f]=await Promise.all([l(u).catch(p=>{d=p}),n]);if(d!==void 0)throw d;i=f}else if(await n,u=r.route[e],u)i=await l(u);else if(e==="action"){let d=new URL(t.url),f=d.pathname+d.search;throw er(405,{method:t.method,pathname:f,routeId:r.route.id})}else return{type:"data",result:void 0};else if(u)i=await l(u);else{let d=new URL(t.url),f=d.pathname+d.search;throw er(404,{pathname:f})}}catch(u){return{type:"error",result:u}}finally{s&&t.signal.removeEventListener("abort",s)}return i}async function J4(e){var n,a,o,i;let{result:t,type:r}=e;if(Ww(t)){let s;try{let l=t.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?t.body==null?s=null:s=await t.json():s=await t.text()}catch(l){return{type:"error",error:l}}return r==="error"?{type:"error",error:new wc(t.status,t.statusText,s),statusCode:t.status,headers:t.headers}:{type:"data",data:s,statusCode:t.status,headers:t.headers}}if(r==="error"){if(ig(t)){if(t.data instanceof Error)return{type:"error",error:t.data,statusCode:(n=t.init)==null?void 0:n.status};t=new wc(((a=t.init)==null?void 0:a.status)||500,void 0,t.data)}return{type:"error",error:t,statusCode:eu(t)?t.status:void 0}}return ig(t)?{type:"data",data:t.data,statusCode:(o=t.init)==null?void 0:o.status,headers:(i=t.init)!=null&&i.headers?new Headers(t.init.headers):void 0}:{type:"data",data:t}}function Z4(e,t,r,n,a){let o=e.headers.get("Location");if(ye(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!wh.test(o)){let i=n.slice(0,n.findIndex(s=>s.route.id===r)+1);o=Ff(new URL(t.url),i,a,o),e.headers.set("Location",o)}return e}function eg(e,t,r){if(wh.test(e)){let n=e,a=n.startsWith("//")?new URL(t.protocol+n):new URL(n),o=jr(a.pathname,r)!=null;if(a.origin===t.origin&&o)return a.pathname+a.search+a.hash}return e}function Ma(e,t,r,n){let a=e.createURL(Hw(t)).toString(),o={signal:r};if(n&&wr(n.formMethod)){let{formMethod:i,formEncType:s}=n;o.method=i.toUpperCase(),s==="application/json"?(o.headers=new Headers({"Content-Type":s}),o.body=JSON.stringify(n.json)):s==="text/plain"?o.body=n.text:s==="application/x-www-form-urlencoded"&&n.formData?o.body=Bf(n.formData):o.body=n.formData}return new Request(a,o)}function Bf(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function tg(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function ek(e,t,r,n=!1,a=!1){let o={},i=null,s,l=!1,u={},d=r&&Wt(r[1])?r[1].error:void 0;return e.forEach(f=>{if(!(f.route.id in t))return;let p=f.route.id,v=t[p];if(ye(!aa(v),"Cannot handle redirect results in processLoaderData"),Wt(v)){let y=v.error;if(d!==void 0&&(y=d,d=void 0),i=i||{},a)i[p]=y;else{let m=Zn(e,p);i[m.route.id]==null&&(i[m.route.id]=y)}n||(o[p]=Uw),l||(l=!0,s=eu(v.error)?v.error.status:500),v.headers&&(u[p]=v.headers)}else o[p]=v.data,v.statusCode&&v.statusCode!==200&&!l&&(s=v.statusCode),v.headers&&(u[p]=v.headers)}),d!==void 0&&r&&(i={[r[0]]:d},o[r[0]]=void 0),{loaderData:o,errors:i,statusCode:s||200,loaderHeaders:u}}function rg(e,t,r,n,a,o){let{loaderData:i,errors:s}=ek(t,r,n);return a.forEach(l=>{let{key:u,match:d,controller:f}=l,p=o[u];if(ye(p,"Did not find corresponding fetcher result"),!(f&&f.signal.aborted))if(Wt(p)){let v=Zn(e.matches,d==null?void 0:d.route.id);s&&s[v.route.id]||(s={...s,[v.route.id]:p.error}),e.fetchers.delete(u)}else if(aa(p))ye(!1,"Unhandled fetcher revalidation redirect");else{let v=gn(p.data);e.fetchers.set(u,v)}}),{loaderData:i,errors:s}}function ng(e,t,r,n){let a=Object.entries(t).filter(([,o])=>o!==Uw).reduce((o,[i,s])=>(o[i]=s,o),{});for(let o of r){let i=o.route.id;if(!t.hasOwnProperty(i)&&e.hasOwnProperty(i)&&o.route.loader&&(a[i]=e[i]),n&&n.hasOwnProperty(i))break}return a}function ag(e){return e?Wt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Zn(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function og(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function er(e,{pathname:t,routeId:r,method:n,type:a,message:o}={}){let i="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(i="Bad Request",n&&t&&r?s=`You made a ${n} request to "${t}" but did not provide a \`loader\` for route "${r}", so there is no way to handle the request.`:a==="invalid-body"&&(s="Unable to encode submission body")):e===403?(i="Forbidden",s=`Route "${r}" does not match URL "${t}"`):e===404?(i="Not Found",s=`No route matches URL "${t}"`):e===405&&(i="Method Not Allowed",n&&t&&r?s=`You made a ${n.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${r}", so there is no way to handle the request.`:n&&(s=`Invalid request method "${n.toUpperCase()}"`)),new wc(e||500,i,new Error(s),!0)}function il(e){let t=Object.entries(e);for(let r=t.length-1;r>=0;r--){let[n,a]=t[r];if(aa(a))return{key:n,result:a}}}function Hw(e){let t=typeof e=="string"?Hn(e):e;return Ln({...t,hash:""})}function tk(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function rk(e){return Ww(e.result)&&F4.has(e.result.status)}function Wt(e){return e.type==="error"}function aa(e){return(e&&e.type)==="redirect"}function ig(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Ww(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function nk(e){return z4.has(e.toUpperCase())}function wr(e){return L4.has(e.toUpperCase())}function bh(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function hi(e,t){let r=typeof t=="string"?Hn(t).search:t.search;if(e[e.length-1].route.index&&bh(r||""))return e[e.length-1];let n=Iw(e);return n[n.length-1]}function sg(e){let{formMethod:t,formAction:r,formEncType:n,text:a,formData:o,json:i}=e;if(!(!t||!r||!n)){if(a!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:a};if(o!=null)return{formMethod:t,formAction:r,formEncType:n,formData:o,json:void 0,text:void 0};if(i!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:i,text:void 0}}}function xd(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ak(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function ai(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function ok(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function gn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function ik(e,t){try{let r=e.sessionStorage.getItem(Fw);if(r){let n=JSON.parse(r);for(let[a,o]of Object.entries(n||{}))o&&Array.isArray(o)&&t.set(a,new Set(o||[]))}}catch{}}function sk(e,t){if(t.size>0){let r={};for(let[n,a]of t)r[n]=[...a];try{e.sessionStorage.setItem(Fw,JSON.stringify(r))}catch(n){mt(!1,`Failed to save applied view transitions in sessionStorage (${n}).`)}}}function lk(){let e,t,r=new Promise((n,a)=>{e=async o=>{n(o);try{await r}catch{}},t=async o=>{a(o);try{await r}catch{}}});return{promise:r,resolve:e,reject:t}}var Ca=$.createContext(null);Ca.displayName="DataRouter";var vs=$.createContext(null);vs.displayName="DataRouterState";var xh=$.createContext({isTransitioning:!1});xh.displayName="ViewTransition";var Vw=$.createContext(new Map);Vw.displayName="Fetchers";var ck=$.createContext(null);ck.displayName="Await";var Br=$.createContext(null);Br.displayName="Navigation";var tu=$.createContext(null);tu.displayName="Location";var Nr=$.createContext({outlet:null,matches:[],isDataRoute:!1});Nr.displayName="Route";var Sh=$.createContext(null);Sh.displayName="RouteError";function uk(e,{relative:t}={}){ye(gs(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=$.useContext(Br),{hash:a,pathname:o,search:i}=ys(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:Ir([r,o])),n.createHref({pathname:s,search:i,hash:a})}function gs(){return $.useContext(tu)!=null}function pr(){return ye(gs(),"useLocation() may be used only in the context of a <Router> component."),$.useContext(tu).location}var Gw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yw(e){$.useContext(Br).static||$.useLayoutEffect(e)}function Hr(){let{isDataRoute:e}=$.useContext(Nr);return e?Sk():dk()}function dk(){ye(gs(),"useNavigate() may be used only in the context of a <Router> component.");let e=$.useContext(Ca),{basename:t,navigator:r}=$.useContext(Br),{matches:n}=$.useContext(Nr),{pathname:a}=pr(),o=JSON.stringify(gh(n)),i=$.useRef(!1);return Yw(()=>{i.current=!0}),$.useCallback((l,u={})=>{if(mt(i.current,Gw),!i.current)return;if(typeof l=="number"){r.go(l);return}let d=yh(l,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Ir([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,o,a,e])}var Kw=$.createContext(null);function Cr(){return $.useContext(Kw)}function fk(e){let t=$.useContext(Nr).outlet;return t&&$.createElement(Kw.Provider,{value:e},t)}function Da(){let{matches:e}=$.useContext(Nr),t=e[e.length-1];return t?t.params:{}}function ys(e,{relative:t}={}){let{matches:r}=$.useContext(Nr),{pathname:n}=pr(),a=JSON.stringify(gh(r));return $.useMemo(()=>yh(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function pk(e,t,r,n){ye(gs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=$.useContext(Br),{matches:o}=$.useContext(Nr),i=o[o.length-1],s=i?i.params:{},l=i?i.pathname:"/",u=i?i.pathnameBase:"/",d=i&&i.route;{let h=d&&d.path||"";Xw(l,!d||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let f=pr(),p;p=f;let v=p.pathname||"/",y=v;if(u!=="/"){let h=u.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(h.length).join("/")}let m=En(e,{pathname:y});return mt(d||m!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),mt(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),yk(m&&m.map(h=>Object.assign({},h,{params:Object.assign({},s,h.params),pathname:Ir([u,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?u:Ir([u,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),o,r,n)}function hk(){let e=qw(),t=eu(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=$.createElement($.Fragment,null,$.createElement("p",null,"💿 Hey developer 👋"),$.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",$.createElement("code",{style:o},"ErrorBoundary")," or"," ",$.createElement("code",{style:o},"errorElement")," prop on your route.")),$.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),r?$.createElement("pre",{style:a},r):null,i)}var mk=$.createElement(hk,null),vk=class extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?$.createElement(Nr.Provider,{value:this.props.routeContext},$.createElement(Sh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function gk({routeContext:e,match:t,children:r}){let n=$.useContext(Ca);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),$.createElement(Nr.Provider,{value:e},r)}function yk(e,t=[],r=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,o=r==null?void 0:r.errors;if(o!=null){let l=a.findIndex(u=>u.route.id&&(o==null?void 0:o[u.route.id])!==void 0);ye(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,l+1))}let i=!1,s=-1;if(r)for(let l=0;l<a.length;l++){let u=a[l];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(s=l),u.route.id){let{loaderData:d,errors:f}=r,p=u.route.loader&&!d.hasOwnProperty(u.route.id)&&(!f||f[u.route.id]===void 0);if(u.route.lazy||p){i=!0,s>=0?a=a.slice(0,s+1):a=[a[0]];break}}}return a.reduceRight((l,u,d)=>{let f,p=!1,v=null,y=null;r&&(f=o&&u.route.id?o[u.route.id]:void 0,v=u.route.errorElement||mk,i&&(s<0&&d===0?(Xw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),p=!0,y=null):s===d&&(p=!0,y=u.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,d+1)),x=()=>{let h;return f?h=v:p?h=y:u.route.Component?h=$.createElement(u.route.Component,null):u.route.element?h=u.route.element:h=l,$.createElement(gk,{match:u,routeContext:{outlet:l,matches:m,isDataRoute:r!=null},children:h})};return r&&(u.route.ErrorBoundary||u.route.errorElement||d===0)?$.createElement(vk,{location:r.location,revalidation:r.revalidation,component:v,error:f,children:x(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):x()},null)}function Eh(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wk(e){let t=$.useContext(Ca);return ye(t,Eh(e)),t}function kh(e){let t=$.useContext(vs);return ye(t,Eh(e)),t}function bk(e){let t=$.useContext(Nr);return ye(t,Eh(e)),t}function ru(e){let t=bk(e),r=t.matches[t.matches.length-1];return ye(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function xk(){return ru("useRouteId")}function Co(){return kh("useNavigation").navigation}function Ce(){let e=kh("useLoaderData"),t=ru("useLoaderData");return e.loaderData[t]}function qw(){var n;let e=$.useContext(Sh),t=kh("useRouteError"),r=ru("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function Sk(){let{router:e}=wk("useNavigate"),t=ru("useNavigate"),r=$.useRef(!1);return Yw(()=>{r.current=!0}),$.useCallback(async(a,o={})=>{mt(r.current,Gw),r.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var lg={};function Xw(e,t,r){!t&&!lg[e]&&(lg[e]=!0,mt(!1,r))}var cg={};function ug(e,t){!e&&!cg[t]&&(cg[t]=!0,console.warn(t))}function Ek(e){let t={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&mt(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(t,{element:$.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&mt(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(t,{hydrateFallbackElement:$.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&mt(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(t,{errorElement:$.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),t}var kk=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}};function jk({router:e,flushSync:t}){let[r,n]=$.useState(e.state),[a,o]=$.useState(),[i,s]=$.useState({isTransitioning:!1}),[l,u]=$.useState(),[d,f]=$.useState(),[p,v]=$.useState(),y=$.useRef(new Map),m=$.useCallback((w,{deletedFetchers:S,flushSync:b,viewTransitionOpts:E})=>{S.forEach(k=>y.current.delete(k)),w.fetchers.forEach((k,D)=>{k.data!==void 0&&y.current.set(D,k.data)}),ug(b===!1||t!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let j=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(ug(E==null||j,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!E||!j){t&&b?t(()=>n(w)):$.startTransition(()=>n(w));return}if(t&&b){t(()=>{d&&(l&&l.resolve(),d.skipTransition()),s({isTransitioning:!0,flushSync:!0,currentLocation:E.currentLocation,nextLocation:E.nextLocation})});let k=e.window.document.startViewTransition(()=>{t(()=>n(w))});k.finished.finally(()=>{t(()=>{u(void 0),f(void 0),o(void 0),s({isTransitioning:!1})})}),t(()=>f(k));return}d?(l&&l.resolve(),d.skipTransition(),v({state:w,currentLocation:E.currentLocation,nextLocation:E.nextLocation})):(o(w),s({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}))},[e.window,t,d,l]);$.useLayoutEffect(()=>e.subscribe(m),[e,m]),$.useEffect(()=>{i.isTransitioning&&!i.flushSync&&u(new kk)},[i]),$.useEffect(()=>{if(l&&a&&e.window){let w=a,S=l.promise,b=e.window.document.startViewTransition(async()=>{$.startTransition(()=>n(w)),await S});b.finished.finally(()=>{u(void 0),f(void 0),o(void 0),s({isTransitioning:!1})}),f(b)}},[a,l,e.window]),$.useEffect(()=>{l&&a&&r.location.key===a.location.key&&l.resolve()},[l,d,r.location,a]),$.useEffect(()=>{!i.isTransitioning&&p&&(o(p.state),s({isTransitioning:!0,flushSync:!1,currentLocation:p.currentLocation,nextLocation:p.nextLocation}),v(void 0))},[i.isTransitioning,p]);let x=$.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:w=>e.navigate(w),push:(w,S,b)=>e.navigate(w,{state:S,preventScrollReset:b==null?void 0:b.preventScrollReset}),replace:(w,S,b)=>e.navigate(w,{replace:!0,state:S,preventScrollReset:b==null?void 0:b.preventScrollReset})}),[e]),h=e.basename||"/",g=$.useMemo(()=>({router:e,navigator:x,static:!1,basename:h}),[e,x,h]);return $.createElement($.Fragment,null,$.createElement(Ca.Provider,{value:g},$.createElement(vs.Provider,{value:r},$.createElement(Vw.Provider,{value:y.current},$.createElement(xh.Provider,{value:i},$.createElement(Ck,{basename:h,location:r.location,navigationType:r.historyAction,navigator:x},$.createElement($k,{routes:e.routes,future:e.future,state:r})))))),null)}var $k=$.memo(Nk);function Nk({routes:e,future:t,state:r}){return pk(e,void 0,r,t)}function Wn(e){return fk(e.context)}function Ck({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:a,static:o=!1}){ye(!gs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),s=$.useMemo(()=>({basename:i,navigator:a,static:o,future:{}}),[i,a,o]);typeof r=="string"&&(r=Hn(r));let{pathname:l="/",search:u="",hash:d="",state:f=null,key:p="default"}=r,v=$.useMemo(()=>{let y=jr(l,i);return y==null?null:{location:{pathname:y,search:u,hash:d,state:f,key:p},navigationType:n}},[i,l,u,d,f,p,n]);return mt(v!=null,`<Router basename="${i}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),v==null?null:$.createElement(Br.Provider,{value:s},$.createElement(tu.Provider,{children:t,value:v}))}var Tl="get",_l="application/x-www-form-urlencoded";function nu(e){return e!=null&&typeof e.tagName=="string"}function Dk(e){return nu(e)&&e.tagName.toLowerCase()==="button"}function Ok(e){return nu(e)&&e.tagName.toLowerCase()==="form"}function Tk(e){return nu(e)&&e.tagName.toLowerCase()==="input"}function _k(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Pk(e,t){return e.button===0&&(!t||t==="_self")&&!_k(e)}var sl=null;function Rk(){if(sl===null)try{new FormData(document.createElement("form"),0),sl=!1}catch{sl=!0}return sl}var Mk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sd(e){return e!=null&&!Mk.has(e)?(mt(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_l}"`),null):e}function Ak(e,t){let r,n,a,o,i;if(Ok(e)){let s=e.getAttribute("action");n=s?jr(s,t):null,r=e.getAttribute("method")||Tl,a=Sd(e.getAttribute("enctype"))||_l,o=new FormData(e)}else if(Dk(e)||Tk(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||s.getAttribute("action");if(n=l?jr(l,t):null,r=e.getAttribute("formmethod")||s.getAttribute("method")||Tl,a=Sd(e.getAttribute("formenctype"))||Sd(s.getAttribute("enctype"))||_l,o=new FormData(s,e),!Rk()){let{name:u,type:d,value:f}=e;if(d==="image"){let p=u?`${u}.`:"";o.append(`${p}x`,"0"),o.append(`${p}y`,"0")}else u&&o.append(u,f)}}else{if(nu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Tl,n=null,a=_l,i=e}return o&&a==="text/plain"&&(i=o,o=void 0),{action:n,method:r.toLowerCase(),encType:a,formData:o,body:i}}function jh(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Lk(e,t){if(e.id in t)return t[e.id];try{let r=await n4(()=>import(e.module),[]);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ik(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function zk(e,t,r){let n=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let i=await Lk(o,r);return i.links?i.links():[]}return[]}));return Hk(n.flat(1).filter(Ik).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function dg(e,t,r,n,a,o){let i=(l,u)=>r[u]?l.route.id!==r[u].route.id:!0,s=(l,u)=>{var d;return r[u].pathname!==l.pathname||((d=r[u].route.path)==null?void 0:d.endsWith("*"))&&r[u].params["*"]!==l.params["*"]};return o==="assets"?t.filter((l,u)=>i(l,u)||s(l,u)):o==="data"?t.filter((l,u)=>{var f;let d=n.routes[l.route.id];if(!d||!d.hasLoader)return!1;if(i(l,u)||s(l,u))return!0;if(l.route.shouldRevalidate){let p=l.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof p=="boolean")return p}return!0}):[]}function Fk(e,t){return Uk(e.map(r=>{let n=t.routes[r.route.id];if(!n)return[];let a=[n.module];return n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function Uk(e){return[...new Set(e)]}function Bk(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Hk(e,t){let r=new Set;return new Set(t),e.reduce((n,a)=>{let o=JSON.stringify(Bk(a));return r.has(o)||(r.add(o),n.push({key:o,link:a})),n},[])}function Wk(e){let t=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function Vk(){let e=$.useContext(Ca);return jh(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Gk(){let e=$.useContext(vs);return jh(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var $h=$.createContext(void 0);$h.displayName="FrameworkContext";function Qw(){let e=$.useContext($h);return jh(e,"You must render this element inside a <HydratedRouter> element"),e}function Yk(e,t){let r=$.useContext($h),[n,a]=$.useState(!1),[o,i]=$.useState(!1),{onFocus:s,onBlur:l,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=t,p=$.useRef(null);$.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let m=h=>{h.forEach(g=>{i(g.isIntersecting)})},x=new IntersectionObserver(m,{threshold:.5});return p.current&&x.observe(p.current),()=>{x.disconnect()}}},[e]),$.useEffect(()=>{if(n){let m=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(m)}}},[n]);let v=()=>{a(!0)},y=()=>{a(!1),i(!1)};return r?e!=="intent"?[o,p,{}]:[o,p,{onFocus:oi(s,v),onBlur:oi(l,y),onMouseEnter:oi(u,v),onMouseLeave:oi(d,y),onTouchStart:oi(f,v)}]:[!1,p,{}]}function oi(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Kk({page:e,...t}){let{router:r}=Vk(),n=$.useMemo(()=>En(r.routes,e,r.basename),[r.routes,e,r.basename]);return n?$.createElement(Xk,{page:e,matches:n,...t}):null}function qk(e){let{manifest:t,routeModules:r}=Qw(),[n,a]=$.useState([]);return $.useEffect(()=>{let o=!1;return zk(e,t,r).then(i=>{o||a(i)}),()=>{o=!0}},[e,t,r]),n}function Xk({page:e,matches:t,...r}){let n=pr(),{manifest:a,routeModules:o}=Qw(),{loaderData:i,matches:s}=Gk(),l=$.useMemo(()=>dg(e,t,s,a,n,"data"),[e,t,s,a,n]),u=$.useMemo(()=>dg(e,t,s,a,n,"assets"),[e,t,s,a,n]),d=$.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let v=new Set,y=!1;if(t.forEach(x=>{var g;let h=a.routes[x.route.id];!h||!h.hasLoader||(!l.some(w=>w.route.id===x.route.id)&&x.route.id in i&&((g=o[x.route.id])!=null&&g.shouldRevalidate)||h.hasClientLoader?y=!0:v.add(x.route.id))}),v.size===0)return[];let m=Wk(e);return y&&v.size>0&&m.searchParams.set("_routes",t.filter(x=>v.has(x.route.id)).map(x=>x.route.id).join(",")),[m.pathname+m.search]},[i,n,a,l,t,e,o]),f=$.useMemo(()=>Fk(u,a),[u,a]),p=qk(u);return $.createElement($.Fragment,null,d.map(v=>$.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...r})),f.map(v=>$.createElement("link",{key:v,rel:"modulepreload",href:v,...r})),p.map(({key:v,link:y})=>$.createElement("link",{key:v,...y})))}function Qk(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var Jw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Jw&&(window.__reactRouterVersion="7.1.1")}catch{}function Jk(e,t){return W4({basename:t==null?void 0:t.basename,future:t==null?void 0:t.future,history:h4({window:t==null?void 0:t.window}),hydrationData:Zk(),routes:e,mapRouteProperties:Ek,dataStrategy:t==null?void 0:t.dataStrategy,patchRoutesOnNavigation:t==null?void 0:t.patchRoutesOnNavigation,window:t==null?void 0:t.window}).initialize()}function Zk(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:ej(e.errors)}),e}function ej(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,a]of t)if(a&&a.__type==="RouteErrorResponse")r[n]=new wc(a.status,a.statusText,a.data,a.internal===!0);else if(a&&a.__type==="Error"){if(a.__subType){let o=window[a.__subType];if(typeof o=="function")try{let i=new o(a.message);i.stack="",r[n]=i}catch{}}if(r[n]==null){let o=new Error(a.message);o.stack="",r[n]=o}}else r[n]=a;return r}var Zw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_e=$.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:a,reloadDocument:o,replace:i,state:s,target:l,to:u,preventScrollReset:d,viewTransition:f,...p},v){let{basename:y}=$.useContext(Br),m=typeof u=="string"&&Zw.test(u),x,h=!1;if(typeof u=="string"&&m&&(x=u,Jw))try{let D=new URL(window.location.href),O=u.startsWith("//")?new URL(D.protocol+u):new URL(u),R=jr(O.pathname,y);O.origin===D.origin&&R!=null?u=R+O.search+O.hash:h=!0}catch{mt(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let g=uk(u,{relative:a}),[w,S,b]=Yk(n,p),E=rj(u,{replace:i,state:s,target:l,preventScrollReset:d,relative:a,viewTransition:f});function j(D){t&&t(D),D.defaultPrevented||E(D)}let k=$.createElement("a",{...p,...b,href:x||g,onClick:h||o?t:j,ref:Qk(v,S),target:l,"data-discover":!m&&r==="render"?"true":void 0});return w&&!m?$.createElement($.Fragment,null,k,$.createElement(Kk,{page:g})):k});_e.displayName="Link";var no=$.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:a=!1,style:o,to:i,viewTransition:s,children:l,...u},d){let f=ys(i,{relative:u.relative}),p=pr(),v=$.useContext(vs),{navigator:y,basename:m}=$.useContext(Br),x=v!=null&&ij(f)&&s===!0,h=y.encodeLocation?y.encodeLocation(f).pathname:f.pathname,g=p.pathname,w=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(g=g.toLowerCase(),w=w?w.toLowerCase():null,h=h.toLowerCase()),w&&m&&(w=jr(w,m)||w);const S=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let b=g===h||!a&&g.startsWith(h)&&g.charAt(S)==="/",E=w!=null&&(w===h||!a&&w.startsWith(h)&&w.charAt(h.length)==="/"),j={isActive:b,isPending:E,isTransitioning:x},k=b?t:void 0,D;typeof n=="function"?D=n(j):D=[n,b?"active":null,E?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let O=typeof o=="function"?o(j):o;return $.createElement(_e,{...u,"aria-current":k,className:D,ref:d,style:O,to:i,viewTransition:s},typeof l=="function"?l(j):l)});no.displayName="NavLink";var Se=$.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:a,state:o,method:i=Tl,action:s,onSubmit:l,relative:u,preventScrollReset:d,viewTransition:f,...p},v)=>{let y=Nh(),m=oj(s,{relative:u}),x=i.toLowerCase()==="get"?"get":"post",h=typeof s=="string"&&Zw.test(s),g=w=>{if(l&&l(w),w.defaultPrevented)return;w.preventDefault();let S=w.nativeEvent.submitter,b=(S==null?void 0:S.getAttribute("formmethod"))||i;y(S||w.currentTarget,{fetcherKey:t,method:b,navigate:r,replace:a,state:o,relative:u,preventScrollReset:d,viewTransition:f})};return $.createElement("form",{ref:v,method:x,action:m,onSubmit:n?l:g,...p,"data-discover":!h&&e==="render"?"true":void 0})});Se.displayName="Form";function tj(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eb(e){let t=$.useContext(Ca);return ye(t,tj(e)),t}function rj(e,{target:t,replace:r,state:n,preventScrollReset:a,relative:o,viewTransition:i}={}){let s=Hr(),l=pr(),u=ys(e,{relative:o});return $.useCallback(d=>{if(Pk(d,t)){d.preventDefault();let f=r!==void 0?r:Ln(l)===Ln(u);s(e,{replace:f,state:n,preventScrollReset:a,relative:o,viewTransition:i})}},[l,s,u,r,n,t,e,a,o,i])}var nj=0,aj=()=>`__${String(++nj)}__`;function Nh(){let{router:e}=eb("useSubmit"),{basename:t}=$.useContext(Br),r=xk();return $.useCallback(async(n,a={})=>{let{action:o,method:i,encType:s,formData:l,body:u}=Ak(n,t);if(a.navigate===!1){let d=a.fetcherKey||aj();await e.fetch(d,r,a.action||o,{preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||i,formEncType:a.encType||s,flushSync:a.flushSync})}else await e.navigate(a.action||o,{preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||i,formEncType:a.encType||s,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,r])}function oj(e,{relative:t}={}){let{basename:r}=$.useContext(Br),n=$.useContext(Nr);ye(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),o={...ys(e||".",{relative:t})},i=pr();if(e==null){o.search=i.search;let s=new URLSearchParams(o.search),l=s.getAll("index");if(l.some(d=>d==="")){s.delete("index"),l.filter(f=>f).forEach(f=>s.append("index",f));let d=s.toString();o.search=d?`?${d}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:Ir([r,o.pathname])),Ln(o)}function ij(e,t={}){let r=$.useContext(xh);ye(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=eb("useViewTransitionState"),a=ys(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=jr(r.currentLocation.pathname,n)||r.currentLocation.pathname,i=jr(r.nextLocation.pathname,n)||r.nextLocation.pathname;return yc(a.pathname,i)!=null||yc(a.pathname,o)!=null}new TextEncoder;/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sj(e){return $.createElement(jk,{flushSync:mh.flushSync,...e})}const lj="/assets/error-WMaxsmkR-BYxrGyaR.jpg";var Mt=function(){return Mt=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},Mt.apply(this,arguments)};function bc(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var Ae="-ms-",$i="-moz-",Ee="-webkit-",tb="comm",au="rule",Ch="decl",cj="@import",rb="@keyframes",uj="@layer",nb=Math.abs,Dh=String.fromCharCode,Hf=Object.assign;function dj(e,t){return lt(e,0)^45?(((t<<2^lt(e,0))<<2^lt(e,1))<<2^lt(e,2))<<2^lt(e,3):0}function ab(e){return e.trim()}function qr(e,t){return(e=t.exec(e))?e[0]:e}function pe(e,t,r){return e.replace(t,r)}function Pl(e,t,r){return e.indexOf(t,r)}function lt(e,t){return e.charCodeAt(t)|0}function po(e,t,r){return e.slice(t,r)}function _r(e){return e.length}function ob(e){return e.length}function mi(e,t){return t.push(e),e}function fj(e,t){return e.map(t).join("")}function fg(e,t){return e.filter(function(r){return!qr(r,t)})}var ou=1,ho=1,ib=0,ur=0,Ze=0,Do="";function iu(e,t,r,n,a,o,i,s){return{value:e,root:t,parent:r,type:n,props:a,children:o,line:ou,column:ho,length:i,return:"",siblings:s}}function yn(e,t){return Hf(iu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Aa(e){for(;e.root;)e=yn(e.root,{children:[e]});mi(e,e.siblings)}function pj(){return Ze}function hj(){return Ze=ur>0?lt(Do,--ur):0,ho--,Ze===10&&(ho=1,ou--),Ze}function Er(){return Ze=ur<ib?lt(Do,ur++):0,ho++,Ze===10&&(ho=1,ou++),Ze}function la(){return lt(Do,ur)}function Rl(){return ur}function su(e,t){return po(Do,e,t)}function Wf(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function mj(e){return ou=ho=1,ib=_r(Do=e),ur=0,[]}function vj(e){return Do="",e}function Ed(e){return ab(su(ur-1,Vf(e===91?e+2:e===40?e+1:e)))}function gj(e){for(;(Ze=la())&&Ze<33;)Er();return Wf(e)>2||Wf(Ze)>3?"":" "}function yj(e,t){for(;--t&&Er()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return su(e,Rl()+(t<6&&la()==32&&Er()==32))}function Vf(e){for(;Er();)switch(Ze){case e:return ur;case 34:case 39:e!==34&&e!==39&&Vf(Ze);break;case 40:e===41&&Vf(e);break;case 92:Er();break}return ur}function wj(e,t){for(;Er()&&e+Ze!==57;)if(e+Ze===84&&la()===47)break;return"/*"+su(t,ur-1)+"*"+Dh(e===47?e:Er())}function bj(e){for(;!Wf(la());)Er();return su(e,ur)}function xj(e){return vj(Ml("",null,null,null,[""],e=mj(e),0,[0],e))}function Ml(e,t,r,n,a,o,i,s,l){for(var u=0,d=0,f=i,p=0,v=0,y=0,m=1,x=1,h=1,g=0,w="",S=a,b=o,E=n,j=w;x;)switch(y=g,g=Er()){case 40:if(y!=108&&lt(j,f-1)==58){Pl(j+=pe(Ed(g),"&","&\f"),"&\f",nb(u?s[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:j+=Ed(g);break;case 9:case 10:case 13:case 32:j+=gj(y);break;case 92:j+=yj(Rl()-1,7);continue;case 47:switch(la()){case 42:case 47:mi(Sj(wj(Er(),Rl()),t,r,l),l);break;default:j+="/"}break;case 123*m:s[u++]=_r(j)*h;case 125*m:case 59:case 0:switch(g){case 0:case 125:x=0;case 59+d:h==-1&&(j=pe(j,/\f/g,"")),v>0&&_r(j)-f&&mi(v>32?hg(j+";",n,r,f-1,l):hg(pe(j," ","")+";",n,r,f-2,l),l);break;case 59:j+=";";default:if(mi(E=pg(j,t,r,u,d,a,s,w,S=[],b=[],f,o),o),g===123)if(d===0)Ml(j,t,E,E,S,o,f,s,b);else switch(p===99&&lt(j,3)===110?100:p){case 100:case 108:case 109:case 115:Ml(e,E,E,n&&mi(pg(e,E,E,0,0,a,s,w,a,S=[],f,b),b),a,b,f,s,n?S:b);break;default:Ml(j,E,E,E,[""],b,0,s,b)}}u=d=v=0,m=h=1,w=j="",f=i;break;case 58:f=1+_r(j),v=y;default:if(m<1){if(g==123)--m;else if(g==125&&m++==0&&hj()==125)continue}switch(j+=Dh(g),g*m){case 38:h=d>0?1:(j+="\f",-1);break;case 44:s[u++]=(_r(j)-1)*h,h=1;break;case 64:la()===45&&(j+=Ed(Er())),p=la(),d=f=_r(w=j+=bj(Rl())),g++;break;case 45:y===45&&_r(j)==2&&(m=0)}}return o}function pg(e,t,r,n,a,o,i,s,l,u,d,f){for(var p=a-1,v=a===0?o:[""],y=ob(v),m=0,x=0,h=0;m<n;++m)for(var g=0,w=po(e,p+1,p=nb(x=i[m])),S=e;g<y;++g)(S=ab(x>0?v[g]+" "+w:pe(w,/&\f/g,v[g])))&&(l[h++]=S);return iu(e,t,r,a===0?au:s,l,u,d,f)}function Sj(e,t,r,n){return iu(e,t,r,tb,Dh(pj()),po(e,2,-2),0,n)}function hg(e,t,r,n,a){return iu(e,t,r,Ch,po(e,0,n),po(e,n+1,-1),n,a)}function sb(e,t,r){switch(dj(e,t)){case 5103:return Ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ee+e+e;case 4789:return $i+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+e+$i+e+Ae+e+e;case 5936:switch(lt(e,t+11)){case 114:return Ee+e+Ae+pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ee+e+Ae+pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ee+e+Ae+pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ee+e+Ae+e+e;case 6165:return Ee+e+Ae+"flex-"+e+e;case 5187:return Ee+e+pe(e,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+Ae+"flex-$1$2")+e;case 5443:return Ee+e+Ae+"flex-item-"+pe(e,/flex-|-self/g,"")+(qr(e,/flex-|baseline/)?"":Ae+"grid-row-"+pe(e,/flex-|-self/g,""))+e;case 4675:return Ee+e+Ae+"flex-line-pack"+pe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ee+e+Ae+pe(e,"shrink","negative")+e;case 5292:return Ee+e+Ae+pe(e,"basis","preferred-size")+e;case 6060:return Ee+"box-"+pe(e,"-grow","")+Ee+e+Ae+pe(e,"grow","positive")+e;case 4554:return Ee+pe(e,/([^-])(transform)/g,"$1"+Ee+"$2")+e;case 6187:return pe(pe(pe(e,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),e,"")+e;case 5495:case 3959:return pe(e,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return pe(pe(e,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ee+e+e;case 4200:if(!qr(e,/flex-|baseline/))return Ae+"grid-column-align"+po(e,t)+e;break;case 2592:case 3360:return Ae+pe(e,"template-","")+e;case 4384:case 3616:return r&&r.some(function(n,a){return t=a,qr(n.props,/grid-\w+-end/)})?~Pl(e+(r=r[t].value),"span",0)?e:Ae+pe(e,"-start","")+e+Ae+"grid-row-span:"+(~Pl(r,"span",0)?qr(r,/\d+/):+qr(r,/\d+/)-+qr(e,/\d+/))+";":Ae+pe(e,"-start","")+e;case 4896:case 4128:return r&&r.some(function(n){return qr(n.props,/grid-\w+-start/)})?e:Ae+pe(pe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return pe(e,/(.+)-inline(.+)/,Ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_r(e)-1-t>6)switch(lt(e,t+1)){case 109:if(lt(e,t+4)!==45)break;case 102:return pe(e,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+$i+(lt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Pl(e,"stretch",0)?sb(pe(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return pe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,a,o,i,s,l,u){return Ae+a+":"+o+u+(i?Ae+a+"-span:"+(s?l:+l-+o)+u:"")+e});case 4949:if(lt(e,t+6)===121)return pe(e,":",":"+Ee)+e;break;case 6444:switch(lt(e,lt(e,14)===45?18:11)){case 120:return pe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(lt(e,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+Ae+"$2box$3")+e;case 100:return pe(e,":",":"+Ae)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return pe(e,"scroll-","scroll-snap-")+e}return e}function xc(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function Ej(e,t,r,n){switch(e.type){case uj:if(e.children.length)break;case cj:case Ch:return e.return=e.return||e.value;case tb:return"";case rb:return e.return=e.value+"{"+xc(e.children,n)+"}";case au:if(!_r(e.value=e.props.join(",")))return""}return _r(r=xc(e.children,n))?e.return=e.value+"{"+r+"}":""}function kj(e){var t=ob(e);return function(r,n,a,o){for(var i="",s=0;s<t;s++)i+=e[s](r,n,a,o)||"";return i}}function jj(e){return function(t){t.root||(t=t.return)&&e(t)}}function $j(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case Ch:e.return=sb(e.value,e.length,r);return;case rb:return xc([yn(e,{value:pe(e.value,"@","@"+Ee)})],n);case au:if(e.length)return fj(r=e.props,function(a){switch(qr(a,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Aa(yn(e,{props:[pe(a,/:(read-\w+)/,":"+$i+"$1")]})),Aa(yn(e,{props:[a]})),Hf(e,{props:fg(r,n)});break;case"::placeholder":Aa(yn(e,{props:[pe(a,/:(plac\w+)/,":"+Ee+"input-$1")]})),Aa(yn(e,{props:[pe(a,/:(plac\w+)/,":"+$i+"$1")]})),Aa(yn(e,{props:[pe(a,/:(plac\w+)/,Ae+"input-$1")]})),Aa(yn(e,{props:[a]})),Hf(e,{props:fg(r,n)});break}return""})}}var Nj={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Bt={},mo=typeof process<"u"&&Bt!==void 0&&(Bt.REACT_APP_SC_ATTR||Bt.SC_ATTR)||"data-styled",lb="active",cb="data-styled-version",lu="6.1.8",Oh=`/*!sc*/
`,Th=typeof window<"u"&&"HTMLElement"in window,Cj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Bt.REACT_APP_SC_DISABLE_SPEEDY!==""?Bt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Bt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Bt!==void 0&&Bt.SC_DISABLE_SPEEDY!==void 0&&Bt.SC_DISABLE_SPEEDY!==""&&Bt.SC_DISABLE_SPEEDY!=="false"&&Bt.SC_DISABLE_SPEEDY),cu=Object.freeze([]),vo=Object.freeze({});function Dj(e,t,r){return r===void 0&&(r=vo),e.theme!==r.theme&&e.theme||t||r.theme}var ub=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Oj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tj=/(^-|-$)/g;function mg(e){return e.replace(Oj,"-").replace(Tj,"")}var _j=/(a)(d)/gi,ll=52,vg=function(e){return String.fromCharCode(e+(e>25?39:97))};function Gf(e){var t,r="";for(t=Math.abs(e);t>ll;t=t/ll|0)r=vg(t%ll)+r;return(vg(t%ll)+r).replace(_j,"$1-$2")}var kd,db=5381,Xa=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},fb=function(e){return Xa(db,e)};function Pj(e){return Gf(fb(e)>>>0)}function Rj(e){return e.displayName||e.name||"Component"}function jd(e){return typeof e=="string"&&!0}var pb=typeof Symbol=="function"&&Symbol.for,hb=pb?Symbol.for("react.memo"):60115,Mj=pb?Symbol.for("react.forward_ref"):60112,Aj={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Lj={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mb={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ij=((kd={})[Mj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kd[hb]=mb,kd);function gg(e){return("type"in(t=e)&&t.type.$$typeof)===hb?mb:"$$typeof"in e?Ij[e.$$typeof]:Aj;var t}var zj=Object.defineProperty,Fj=Object.getOwnPropertyNames,yg=Object.getOwnPropertySymbols,Uj=Object.getOwnPropertyDescriptor,Bj=Object.getPrototypeOf,wg=Object.prototype;function vb(e,t,r){if(typeof t!="string"){if(wg){var n=Bj(t);n&&n!==wg&&vb(e,n,r)}var a=Fj(t);yg&&(a=a.concat(yg(t)));for(var o=gg(e),i=gg(t),s=0;s<a.length;++s){var l=a[s];if(!(l in Lj||r&&r[l]||i&&l in i||o&&l in o)){var u=Uj(t,l);try{zj(e,l,u)}catch{}}}}return e}function go(e){return typeof e=="function"}function _h(e){return typeof e=="object"&&"styledComponentId"in e}function oa(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function bg(e,t){if(e.length===0)return"";for(var r=e[0],n=1;n<e.length;n++)r+=e[n];return r}function Ki(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Yf(e,t,r){if(r===void 0&&(r=!1),!r&&!Ki(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=Yf(e[n],t[n]);else if(Ki(t))for(var n in t)e[n]=Yf(e[n],t[n]);return e}function Ph(e,t){Object.defineProperty(e,"toString",{value:t})}function ws(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Hj=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var r=0,n=0;n<t;n++)r+=this.groupSizes[n];return r},e.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var n=this.groupSizes,a=n.length,o=a;t>=o;)if((o<<=1)<0)throw ws(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=a;i<o;i++)this.groupSizes[i]=0}for(var s=this.indexOfGroup(t+1),l=(i=0,r.length);i<l;i++)this.tag.insertRule(s,r[i])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],n=this.indexOfGroup(t),a=n+r;this.groupSizes[t]=0;for(var o=n;o<a;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var n=this.groupSizes[t],a=this.indexOfGroup(t),o=a+n,i=a;i<o;i++)r+="".concat(this.tag.getRule(i)).concat(Oh);return r},e}(),Al=new Map,Sc=new Map,Ll=1,cl=function(e){if(Al.has(e))return Al.get(e);for(;Sc.has(Ll);)Ll++;var t=Ll++;return Al.set(e,t),Sc.set(t,e),t},Wj=function(e,t){Ll=t+1,Al.set(e,t),Sc.set(t,e)},Vj="style[".concat(mo,"][").concat(cb,'="').concat(lu,'"]'),Gj=new RegExp("^".concat(mo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Yj=function(e,t,r){for(var n,a=r.split(","),o=0,i=a.length;o<i;o++)(n=a[o])&&e.registerName(t,n)},Kj=function(e,t){for(var r,n=((r=t.textContent)!==null&&r!==void 0?r:"").split(Oh),a=[],o=0,i=n.length;o<i;o++){var s=n[o].trim();if(s){var l=s.match(Gj);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(Wj(d,u),Yj(e,d,l[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(s)}}};function qj(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var gb=function(e){var t=document.head,r=e||t,n=document.createElement("style"),a=function(s){var l=Array.from(s.querySelectorAll("style[".concat(mo,"]")));return l[l.length-1]}(r),o=a!==void 0?a.nextSibling:null;n.setAttribute(mo,lb),n.setAttribute(cb,lu);var i=qj();return i&&n.setAttribute("nonce",i),r.insertBefore(n,o),n},Xj=function(){function e(t){this.element=gb(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,a=0,o=n.length;a<o;a++){var i=n[a];if(i.ownerNode===r)return i}throw ws(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},e}(),Qj=function(){function e(t){this.element=gb(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Jj=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),xg=Th,Zj={isServer:!Th,useCSSOMInjection:!Cj},yb=function(){function e(t,r,n){t===void 0&&(t=vo),r===void 0&&(r={});var a=this;this.options=Mt(Mt({},Zj),t),this.gs=r,this.names=new Map(n),this.server=!!t.isServer,!this.server&&Th&&xg&&(xg=!1,function(o){for(var i=document.querySelectorAll(Vj),s=0,l=i.length;s<l;s++){var u=i[s];u&&u.getAttribute(mo)!==lb&&(Kj(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Ph(this,function(){return function(o){for(var i=o.getTag(),s=i.length,l="",u=function(f){var p=function(h){return Sc.get(h)}(f);if(p===void 0)return"continue";var v=o.names.get(p),y=i.getGroup(f);if(v===void 0||y.length===0)return"continue";var m="".concat(mo,".g").concat(f,'[id="').concat(p,'"]'),x="";v!==void 0&&v.forEach(function(h){h.length>0&&(x+="".concat(h,","))}),l+="".concat(y).concat(m,'{content:"').concat(x,'"}').concat(Oh)},d=0;d<s;d++)u(d);return l}(a)})}return e.registerId=function(t){return cl(t)},e.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new e(Mt(Mt({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var n=r.useCSSOMInjection,a=r.target;return r.isServer?new Jj(a):n?new Xj(a):new Qj(a)}(this.options),new Hj(t)));var t},e.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},e.prototype.registerName=function(t,r){if(cl(t),this.names.has(t))this.names.get(t).add(r);else{var n=new Set;n.add(r),this.names.set(t,n)}},e.prototype.insertRules=function(t,r,n){this.registerName(t,r),this.getTag().insertRules(cl(t),n)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(cl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),e$=/&/g,t$=/^\s*\/\/.*$/gm;function wb(e,t){return e.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(n){return"".concat(t," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=wb(r.children,t)),r})}function r$(e){var t,r,n,a=vo,o=a.options,i=o===void 0?vo:o,s=a.plugins,l=s===void 0?cu:s,u=function(p,v,y){return y.startsWith(r)&&y.endsWith(r)&&y.replaceAll(r,"").length>0?".".concat(t):p},d=l.slice();d.push(function(p){p.type===au&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(e$,r).replace(n,u))}),i.prefix&&d.push($j),d.push(Ej);var f=function(p,v,y,m){v===void 0&&(v=""),y===void 0&&(y=""),m===void 0&&(m="&"),t=m,r=v,n=new RegExp("\\".concat(r,"\\b"),"g");var x=p.replace(t$,""),h=xj(y||v?"".concat(y," ").concat(v," { ").concat(x," }"):x);i.namespace&&(h=wb(h,i.namespace));var g=[];return xc(h,kj(d.concat(jj(function(w){return g.push(w)})))),g};return f.hash=l.length?l.reduce(function(p,v){return v.name||ws(15),Xa(p,v.name)},db).toString():"",f}var n$=new yb,Kf=r$(),bb=C.createContext({shouldForwardProp:void 0,styleSheet:n$,stylis:Kf});bb.Consumer;C.createContext(void 0);function Sg(){return $.useContext(bb)}var a$=function(){function e(t,r){var n=this;this.inject=function(a,o){o===void 0&&(o=Kf);var i=n.name+o.hash;a.hasNameForId(n.id,i)||a.insertRules(n.id,i,o(n.rules,i,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Ph(this,function(){throw ws(12,String(n.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Kf),this.name+t.hash},e}(),o$=function(e){return e>="A"&&e<="Z"};function Eg(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(r===1&&n==="-"&&e[0]==="-")return e;o$(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var xb=function(e){return e==null||e===!1||e===""},Sb=function(e){var t,r,n=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!xb(o)&&(Array.isArray(o)&&o.isCss||go(o)?n.push("".concat(Eg(a),":"),o,";"):Ki(o)?n.push.apply(n,bc(bc(["".concat(a," {")],Sb(o),!1),["}"],!1)):n.push("".concat(Eg(a),": ").concat((t=a,(r=o)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in Nj||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function ca(e,t,r,n){if(xb(e))return[];if(_h(e))return[".".concat(e.styledComponentId)];if(go(e)){if(!go(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var a=e(t);return ca(a,t,r,n)}var o;return e instanceof a$?r?(e.inject(r,n),[e.getName(n)]):[e]:Ki(e)?Sb(e):Array.isArray(e)?Array.prototype.concat.apply(cu,e.map(function(i){return ca(i,t,r,n)})):[e.toString()]}function i$(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(go(r)&&!_h(r))return!1}return!0}var s$=fb(lu),l$=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&i$(t),this.componentId=r,this.baseHash=Xa(s$,r),this.baseStyle=n,yb.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))a=oa(a,this.staticRulesId);else{var o=bg(ca(this.rules,t,r,n)),i=Gf(Xa(this.baseHash,o)>>>0);if(!r.hasNameForId(this.componentId,i)){var s=n(o,".".concat(i),void 0,this.componentId);r.insertRules(this.componentId,i,s)}a=oa(a,i),this.staticRulesId=i}else{for(var l=Xa(this.baseHash,n.hash),u="",d=0;d<this.rules.length;d++){var f=this.rules[d];if(typeof f=="string")u+=f;else if(f){var p=bg(ca(f,t,r,n));l=Xa(l,p+d),u+=p}}if(u){var v=Gf(l>>>0);r.hasNameForId(this.componentId,v)||r.insertRules(this.componentId,v,n(u,".".concat(v),void 0,this.componentId)),a=oa(a,v)}}return a},e}(),Eb=C.createContext(void 0);Eb.Consumer;var $d={};function c$(e,t,r){var n=_h(e),a=e,o=!jd(e),i=t.attrs,s=i===void 0?cu:i,l=t.componentId,u=l===void 0?function(S,b){var E=typeof S!="string"?"sc":mg(S);$d[E]=($d[E]||0)+1;var j="".concat(E,"-").concat(Pj(lu+E+$d[E]));return b?"".concat(b,"-").concat(j):j}(t.displayName,t.parentComponentId):l,d=t.displayName,f=d===void 0?function(S){return jd(S)?"styled.".concat(S):"Styled(".concat(Rj(S),")")}(e):d,p=t.displayName&&t.componentId?"".concat(mg(t.displayName),"-").concat(t.componentId):t.componentId||u,v=n&&a.attrs?a.attrs.concat(s).filter(Boolean):s,y=t.shouldForwardProp;if(n&&a.shouldForwardProp){var m=a.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;y=function(S,b){return m(S,b)&&x(S,b)}}else y=m}var h=new l$(r,p,n?a.componentStyle:void 0);function g(S,b){return function(E,j,k){var D=E.attrs,O=E.componentStyle,R=E.defaultProps,Q=E.foldedComponentIds,X=E.styledComponentId,Y=E.target,z=C.useContext(Eb),I=Sg(),V=E.shouldForwardProp||I.shouldForwardProp,T=Dj(j,z,R)||vo,F=function(G,J,oe){for(var de,le=Mt(Mt({},J),{className:void 0,theme:oe}),be=0;be<G.length;be+=1){var Pe=go(de=G[be])?de(le):de;for(var Ge in Pe)le[Ge]=Ge==="className"?oa(le[Ge],Pe[Ge]):Ge==="style"?Mt(Mt({},le[Ge]),Pe[Ge]):Pe[Ge]}return J.className&&(le.className=oa(le.className,J.className)),le}(D,j,T),H=F.as||Y,Z={};for(var P in F)F[P]===void 0||P[0]==="$"||P==="as"||P==="theme"&&F.theme===T||(P==="forwardedAs"?Z.as=F.forwardedAs:V&&!V(P,H)||(Z[P]=F[P]));var L=function(G,J){var oe=Sg(),de=G.generateAndInjectStyles(J,oe.styleSheet,oe.stylis);return de}(O,F),U=oa(Q,X);return L&&(U+=" "+L),F.className&&(U+=" "+F.className),Z[jd(H)&&!ub.has(H)?"class":"className"]=U,Z.ref=k,$.createElement(H,Z)}(w,S,b)}g.displayName=f;var w=C.forwardRef(g);return w.attrs=v,w.componentStyle=h,w.displayName=f,w.shouldForwardProp=y,w.foldedComponentIds=n?oa(a.foldedComponentIds,a.styledComponentId):"",w.styledComponentId=p,w.target=n?a.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=n?function(b){for(var E=[],j=1;j<arguments.length;j++)E[j-1]=arguments[j];for(var k=0,D=E;k<D.length;k++)Yf(b,D[k],!0);return b}({},a.defaultProps,S):S}}),Ph(w,function(){return".".concat(w.styledComponentId)}),o&&vb(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function kg(e,t){for(var r=[e[0]],n=0,a=t.length;n<a;n+=1)r.push(t[n],e[n+1]);return r}var jg=function(e){return Object.assign(e,{isCss:!0})};function u$(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(go(e)||Ki(e))return jg(ca(kg(cu,bc([e],t,!0))));var n=e;return t.length===0&&n.length===1&&typeof n[0]=="string"?ca(n):jg(ca(kg(n,t)))}function qf(e,t,r){if(r===void 0&&(r=vo),!t)throw ws(1,t);var n=function(a){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,r,u$.apply(void 0,bc([a],o,!1)))};return n.attrs=function(a){return qf(e,t,Mt(Mt({},r),{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},n.withConfig=function(a){return qf(e,t,Mt(Mt({},r),a))},n}var kb=function(e){return qf(c$,e)},se=kb;ub.forEach(function(e){se[e]=kb(e)});const $g=se.main`
  background: red;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 70vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  .attribution {
    font-size: 0.6rem;
    margin-top: -2rem;
    margin-bottom: 3rem;
  }
  .attribution:hover {
    color: white;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: black;
  }
  a {
    text-decoration: none;
    color: blue;
    text-transform: capitalize;
  }
  a:hover {
    color: white;
  }
  /* Medai Queries */
  @media (min-width: 800px) {
    .attribution {
      font-size: 1rem;
    }
  }
  /* End Of Medai Queries */
`,d$=()=>{const e=qw();return e.status===404?c.jsxs($g,{children:[c.jsx("img",{src:lj,alt:"Error",className:"img"}),c.jsx("span",{className:"attribution",children:c.jsx("a",{href:"https://www.vecteezy.com/free-photos",target:"_blank",children:"Free Stock photos by Vecteezy"})}),c.jsx("h3",{children:"Page Not Found!"}),c.jsx("p",{children:e.data}),c.jsx(_e,{to:"/",children:"back to home"})]}):c.jsx($g,{children:c.jsx("div",{children:c.jsx("h3",{children:"something went wrong! "})})})},f$=se.nav`
  /* Nav */
  .nav-container {
    height: 5rem;
    background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* Header */

  .header a {
    padding-left: 0.5rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    text-decoration: none;
    color: black;
  }
  /* Login */
  .login a {
    padding: 0.2rem 0.8rem;
    margin-right: 0.5rem;
    text-transform: uppercase;
    font-size: 0.8rem;
    text-decoration: none;
    background: black;
    color: red;
    border: transparent;
    border-radius: 10px;
  }
  a:hover {
    color: white;
  }
  @media (min-width: 600px) {
    .header a {
      font-size: 2rem;
    }
    .login a {
      margin-right: 4rem;
      font-size: 1.3rem;
    }
  }
`;var jb={exports:{}},p$="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",h$=p$,m$=h$;function $b(){}function Nb(){}Nb.resetWarningCache=$b;var v$=function(){function e(n,a,o,i,s,l){if(l!==m$){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Nb,resetWarningCache:$b};return r.PropTypes=r,r};jb.exports=v$();var g$=jb.exports;const M=qe(g$),uu=({header:e,register:t,login:r})=>c.jsx(f$,{children:c.jsxs("div",{className:"nav-container",children:[c.jsx("div",{className:"header",children:c.jsx("header",{children:c.jsx(_e,{to:"/",children:e})})}),c.jsxs("div",{className:"login",children:[c.jsx(_e,{to:"/register",children:t}),c.jsx(_e,{to:"/login",children:r})]})]})});uu.propTypes={header:M.string,register:M.string,login:M.string};const y$=()=>c.jsx("div",{className:"footer",children:c.jsx("h2",{children:"genocide"})}),w$="/assets/hero-img-AyzDgOp1-DLMOA6nU.jpg",Cb=({className:e})=>c.jsx("img",{src:w$,alt:"Home-Photo",className:e});Cb.propTypes={className:M.string};const b$=se.section`
  /* background: red; */
  width: 100vw;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 5rem;

  .message-article {
    min-height: calc(100vh - 5rem);
    background: red;
  }

  .hero {
    font-size: 1.5rem;
    text-align: center;
    color: black;
    text-transform: capitalize;
    margin-bottom: 5rem;
  }
  .message {
    font-size: 1.5rem;
    text-align: center;
    color: black;
    text-transform: capitalize;
    margin-top: 50%;
  }
  .title-underline {
    background: black;
    margin-top: -4.5rem;
  }
`,x$=()=>c.jsx(b$,{children:c.jsxs("article",{className:"message-article",children:[c.jsx("h1",{className:"hero",children:" genocide"}),c.jsx("p",{className:"message",children:"a computer science club & a investors paradise. come join us for the fun!"})]})}),Il=({title:e,message:t})=>c.jsxs(c.Fragment,{children:[c.jsx("h2",{className:"article-title",children:e}),c.jsx("div",{className:"title-underline"}),c.jsx("p",{className:"article-message",children:t})]});Il.propTypes={title:M.string,message:M.string};const ve=({type:e,name:t,placeholder:r,defaultValue:n})=>c.jsxs("div",{children:[c.jsx("label",{htmlFor:t,className:"form-label",children:t}),c.jsx("input",{type:e,id:t,name:t,placeholder:r,className:"form-input",defaultValue:n,required:!0})]});ve.propTypes={type:M.string,name:M.string,placeholder:M.string,defaultValue:M.string};const S$=se.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);

    .sidebar-container {
      background: black;
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      font-size: 2rem;
      text-transform: uppercase;
      color: red;
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .sidebar-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .sidebar-sublinks {
      margin-bottom: 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1rem;
    }
    h2 {
      color: red;
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      color: red;
    }
    svg {
      margin-right: 0.3rem;
      color: red;
    }
    .active {
      color: white;
    }
  }
`,E$=se.section`
  background: white;
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;function Db(e,t){return function(){return e.apply(t,arguments)}}const{toString:k$}=Object.prototype,{getPrototypeOf:Rh}=Object,du=(e=>t=>{const r=k$.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Wr=e=>(e=e.toLowerCase(),t=>du(t)===e),fu=e=>t=>typeof t===e,{isArray:Oo}=Array,qi=fu("undefined");function j$(e){return e!==null&&!qi(e)&&e.constructor!==null&&!qi(e.constructor)&&ir(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ob=Wr("ArrayBuffer");function $$(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ob(e.buffer),t}const N$=fu("string"),ir=fu("function"),Tb=fu("number"),pu=e=>e!==null&&typeof e=="object",C$=e=>e===!0||e===!1,zl=e=>{if(du(e)!=="object")return!1;const t=Rh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},D$=Wr("Date"),O$=Wr("File"),T$=Wr("Blob"),_$=Wr("FileList"),P$=e=>pu(e)&&ir(e.pipe),R$=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ir(e.append)&&((t=du(e))==="formdata"||t==="object"&&ir(e.toString)&&e.toString()==="[object FormData]"))},M$=Wr("URLSearchParams"),A$=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bs(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,a;if(typeof e!="object"&&(e=[e]),Oo(e))for(n=0,a=e.length;n<a;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(n=0;n<i;n++)s=o[n],t.call(null,e[s],s,e)}}function _b(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,a;for(;n-- >0;)if(a=r[n],t===a.toLowerCase())return a;return null}const Pb=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rb=e=>!qi(e)&&e!==Pb;function Xf(){const{caseless:e}=Rb(this)&&this||{},t={},r=(n,a)=>{const o=e&&_b(t,a)||a;zl(t[o])&&zl(n)?t[o]=Xf(t[o],n):zl(n)?t[o]=Xf({},n):Oo(n)?t[o]=n.slice():t[o]=n};for(let n=0,a=arguments.length;n<a;n++)arguments[n]&&bs(arguments[n],r);return t}const L$=(e,t,r,{allOwnKeys:n}={})=>(bs(t,(a,o)=>{r&&ir(a)?e[o]=Db(a,r):e[o]=a},{allOwnKeys:n}),e),I$=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),z$=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},F$=(e,t,r,n)=>{let a,o,i;const s={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),o=a.length;o-- >0;)i=a[o],(!n||n(i,e,t))&&!s[i]&&(t[i]=e[i],s[i]=!0);e=r!==!1&&Rh(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},U$=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},B$=e=>{if(!e)return null;if(Oo(e))return e;let t=e.length;if(!Tb(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},H$=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Rh(Uint8Array)),W$=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=n.next())&&!a.done;){const o=a.value;t.call(e,o[0],o[1])}},V$=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},G$=Wr("HTMLFormElement"),Y$=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,a){return n.toUpperCase()+a}),Ng=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),K$=Wr("RegExp"),Mb=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};bs(r,(a,o)=>{let i;(i=t(a,o,e))!==!1&&(n[o]=i||a)}),Object.defineProperties(e,n)},q$=e=>{Mb(e,(t,r)=>{if(ir(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(ir(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},X$=(e,t)=>{const r={},n=a=>{a.forEach(o=>{r[o]=!0})};return Oo(e)?n(e):n(String(e).split(t)),r},Q$=()=>{},J$=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Nd="abcdefghijklmnopqrstuvwxyz",Cg="0123456789",Ab={DIGIT:Cg,ALPHA:Nd,ALPHA_DIGIT:Nd+Nd.toUpperCase()+Cg},Z$=(e=16,t=Ab.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function eN(e){return!!(e&&ir(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tN=e=>{const t=new Array(10),r=(n,a)=>{if(pu(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[a]=n;const o=Oo(n)?[]:{};return bs(n,(i,s)=>{const l=r(i,a+1);!qi(l)&&(o[s]=l)}),t[a]=void 0,o}}return n};return r(e,0)},rN=Wr("AsyncFunction"),nN=e=>e&&(pu(e)||ir(e))&&ir(e.then)&&ir(e.catch),B={isArray:Oo,isArrayBuffer:Ob,isBuffer:j$,isFormData:R$,isArrayBufferView:$$,isString:N$,isNumber:Tb,isBoolean:C$,isObject:pu,isPlainObject:zl,isUndefined:qi,isDate:D$,isFile:O$,isBlob:T$,isRegExp:K$,isFunction:ir,isStream:P$,isURLSearchParams:M$,isTypedArray:H$,isFileList:_$,forEach:bs,merge:Xf,extend:L$,trim:A$,stripBOM:I$,inherits:z$,toFlatObject:F$,kindOf:du,kindOfTest:Wr,endsWith:U$,toArray:B$,forEachEntry:W$,matchAll:V$,isHTMLForm:G$,hasOwnProperty:Ng,hasOwnProp:Ng,reduceDescriptors:Mb,freezeMethods:q$,toObjectSet:X$,toCamelCase:Y$,noop:Q$,toFiniteNumber:J$,findKey:_b,global:Pb,isContextDefined:Rb,ALPHABET:Ab,generateString:Z$,isSpecCompliantForm:eN,toJSONObject:tN,isAsyncFn:rN,isThenable:nN};function we(e,t,r,n,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),a&&(this.response=a)}B.inherits(we,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Lb=we.prototype,Ib={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ib[e]={value:e}});Object.defineProperties(we,Ib);Object.defineProperty(Lb,"isAxiosError",{value:!0});we.from=(e,t,r,n,a,o)=>{const i=Object.create(Lb);return B.toFlatObject(e,i,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),we.call(i,e.message,t,r,n,a),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const aN=null;function Qf(e){return B.isPlainObject(e)||B.isArray(e)}function zb(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function Dg(e,t,r){return e?e.concat(t).map(function(a,o){return a=zb(a),!r&&o?"["+a+"]":a}).join(r?".":""):t}function oN(e){return B.isArray(e)&&!e.some(Qf)}const iN=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function hu(e,t,r){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=B.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,x){return!B.isUndefined(x[m])});const n=r.metaTokens,a=r.visitor||d,o=r.dots,i=r.indexes,l=(r.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(a))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(B.isDate(y))return y.toISOString();if(!l&&B.isBlob(y))throw new we("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(y)||B.isTypedArray(y)?l&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function d(y,m,x){let h=y;if(y&&!x&&typeof y=="object"){if(B.endsWith(m,"{}"))m=n?m:m.slice(0,-2),y=JSON.stringify(y);else if(B.isArray(y)&&oN(y)||(B.isFileList(y)||B.endsWith(m,"[]"))&&(h=B.toArray(y)))return m=zb(m),h.forEach(function(w,S){!(B.isUndefined(w)||w===null)&&t.append(i===!0?Dg([m],S,o):i===null?m:m+"[]",u(w))}),!1}return Qf(y)?!0:(t.append(Dg(x,m,o),u(y)),!1)}const f=[],p=Object.assign(iN,{defaultVisitor:d,convertValue:u,isVisitable:Qf});function v(y,m){if(!B.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+m.join("."));f.push(y),B.forEach(y,function(h,g){(!(B.isUndefined(h)||h===null)&&a.call(t,h,B.isString(g)?g.trim():g,m,p))===!0&&v(h,m?m.concat(g):[g])}),f.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Og(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Mh(e,t){this._pairs=[],e&&hu(e,this,t)}const Fb=Mh.prototype;Fb.append=function(t,r){this._pairs.push([t,r])};Fb.toString=function(t){const r=t?function(n){return t.call(this,n,Og)}:Og;return this._pairs.map(function(a){return r(a[0])+"="+r(a[1])},"").join("&")};function sN(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ub(e,t,r){if(!t)return e;const n=r&&r.encode||sN,a=r&&r.serialize;let o;if(a?o=a(t,r):o=B.isURLSearchParams(t)?t.toString():new Mh(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Tg{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Bb={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lN=typeof URLSearchParams<"u"?URLSearchParams:Mh,cN=typeof FormData<"u"?FormData:null,uN=typeof Blob<"u"?Blob:null,dN={isBrowser:!0,classes:{URLSearchParams:lN,FormData:cN,Blob:uN},protocols:["http","https","file","blob","url","data"]},Hb=typeof window<"u"&&typeof document<"u",fN=(e=>Hb&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),pN=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",hN=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Hb,hasStandardBrowserEnv:fN,hasStandardBrowserWebWorkerEnv:pN},Symbol.toStringTag,{value:"Module"})),Mr={...hN,...dN};function mN(e,t){return hu(e,new Mr.classes.URLSearchParams,Object.assign({visitor:function(r,n,a,o){return Mr.isNode&&B.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function vN(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function gN(e){const t={},r=Object.keys(e);let n;const a=r.length;let o;for(n=0;n<a;n++)o=r[n],t[o]=e[o];return t}function Wb(e){function t(r,n,a,o){let i=r[o++];if(i==="__proto__")return!0;const s=Number.isFinite(+i),l=o>=r.length;return i=!i&&B.isArray(a)?a.length:i,l?(B.hasOwnProp(a,i)?a[i]=[a[i],n]:a[i]=n,!s):((!a[i]||!B.isObject(a[i]))&&(a[i]=[]),t(r,n,a[i],o)&&B.isArray(a[i])&&(a[i]=gN(a[i])),!s)}if(B.isFormData(e)&&B.isFunction(e.entries)){const r={};return B.forEachEntry(e,(n,a)=>{t(vN(n),a,r,0)}),r}return null}function yN(e,t,r){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const xs={transitional:Bb,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",a=n.indexOf("application/json")>-1,o=B.isObject(t);if(o&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return a?JSON.stringify(Wb(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return mN(t,this.formSerializer).toString();if((s=B.isFileList(t))||n.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return hu(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||a?(r.setContentType("application/json",!1),yN(t)):t}],transformResponse:[function(t){const r=this.transitional||xs.transitional,n=r&&r.forcedJSONParsing,a=this.responseType==="json";if(t&&B.isString(t)&&(n&&!this.responseType||a)){const i=!(r&&r.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(s){if(i)throw s.name==="SyntaxError"?we.from(s,we.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mr.classes.FormData,Blob:Mr.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],e=>{xs.headers[e]={}});const wN=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bN=e=>{const t={};let r,n,a;return e&&e.split(`
`).forEach(function(i){a=i.indexOf(":"),r=i.substring(0,a).trim().toLowerCase(),n=i.substring(a+1).trim(),!(!r||t[r]&&wN[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},_g=Symbol("internals");function ii(e){return e&&String(e).trim().toLowerCase()}function Fl(e){return e===!1||e==null?e:B.isArray(e)?e.map(Fl):String(e)}function xN(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const SN=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Cd(e,t,r,n,a){if(B.isFunction(n))return n.call(this,t,r);if(a&&(t=r),!!B.isString(t)){if(B.isString(n))return t.indexOf(n)!==-1;if(B.isRegExp(n))return n.test(t)}}function EN(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function kN(e,t){const r=B.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(a,o,i){return this[n].call(this,t,a,o,i)},configurable:!0})})}class sr{constructor(t){t&&this.set(t)}set(t,r,n){const a=this;function o(s,l,u){const d=ii(l);if(!d)throw new Error("header name must be a non-empty string");const f=B.findKey(a,d);(!f||a[f]===void 0||u===!0||u===void 0&&a[f]!==!1)&&(a[f||l]=Fl(s))}const i=(s,l)=>B.forEach(s,(u,d)=>o(u,d,l));return B.isPlainObject(t)||t instanceof this.constructor?i(t,r):B.isString(t)&&(t=t.trim())&&!SN(t)?i(bN(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=ii(t),t){const n=B.findKey(this,t);if(n){const a=this[n];if(!r)return a;if(r===!0)return xN(a);if(B.isFunction(r))return r.call(this,a,n);if(B.isRegExp(r))return r.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=ii(t),t){const n=B.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Cd(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let a=!1;function o(i){if(i=ii(i),i){const s=B.findKey(n,i);s&&(!r||Cd(n,n[s],s,r))&&(delete n[s],a=!0)}}return B.isArray(t)?t.forEach(o):o(t),a}clear(t){const r=Object.keys(this);let n=r.length,a=!1;for(;n--;){const o=r[n];(!t||Cd(this,this[o],o,t,!0))&&(delete this[o],a=!0)}return a}normalize(t){const r=this,n={};return B.forEach(this,(a,o)=>{const i=B.findKey(n,o);if(i){r[i]=Fl(a),delete r[o];return}const s=t?EN(o):String(o).trim();s!==o&&delete r[o],r[s]=Fl(a),n[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return B.forEach(this,(n,a)=>{n!=null&&n!==!1&&(r[a]=t&&B.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(a=>n.set(a)),n}static accessor(t){const n=(this[_g]=this[_g]={accessors:{}}).accessors,a=this.prototype;function o(i){const s=ii(i);n[s]||(kN(a,i),n[s]=!0)}return B.isArray(t)?t.forEach(o):o(t),this}}sr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(sr.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});B.freezeMethods(sr);function Dd(e,t){const r=this||xs,n=t||r,a=sr.from(n.headers);let o=n.data;return B.forEach(e,function(s){o=s.call(r,o,a.normalize(),t?t.status:void 0)}),a.normalize(),o}function Vb(e){return!!(e&&e.__CANCEL__)}function Ss(e,t,r){we.call(this,e??"canceled",we.ERR_CANCELED,t,r),this.name="CanceledError"}B.inherits(Ss,we,{__CANCEL__:!0});function jN(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new we("Request failed with status code "+r.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const $N=Mr.hasStandardBrowserEnv?{write(e,t,r,n,a,o){const i=[e+"="+encodeURIComponent(t)];B.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),B.isString(n)&&i.push("path="+n),B.isString(a)&&i.push("domain="+a),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function NN(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function CN(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Gb(e,t){return e&&!NN(t)?CN(e,t):t}const DN=Mr.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function a(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=a(window.location.href),function(i){const s=B.isString(i)?a(i):i;return s.protocol===n.protocol&&s.host===n.host}}():function(){return function(){return!0}}();function ON(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function TN(e,t){e=e||10;const r=new Array(e),n=new Array(e);let a=0,o=0,i;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=n[o];i||(i=u),r[a]=l,n[a]=u;let f=o,p=0;for(;f!==a;)p+=r[f++],f=f%e;if(a=(a+1)%e,a===o&&(o=(o+1)%e),u-i<t)return;const v=d&&u-d;return v?Math.round(p*1e3/v):void 0}}function Pg(e,t){let r=0;const n=TN(50,250);return a=>{const o=a.loaded,i=a.lengthComputable?a.total:void 0,s=o-r,l=n(s),u=o<=i;r=o;const d={loaded:o,total:i,progress:i?o/i:void 0,bytes:s,rate:l||void 0,estimated:l&&i&&u?(i-o)/l:void 0,event:a};d[t?"download":"upload"]=!0,e(d)}}const _N=typeof XMLHttpRequest<"u",PN=_N&&function(e){return new Promise(function(r,n){let a=e.data;const o=sr.from(e.headers).normalize();let{responseType:i,withXSRFToken:s}=e,l;function u(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}let d;if(B.isFormData(a)){if(Mr.hasStandardBrowserEnv||Mr.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if((d=o.getContentType())!==!1){const[m,...x]=d?d.split(";").map(h=>h.trim()).filter(Boolean):[];o.setContentType([m||"multipart/form-data",...x].join("; "))}}let f=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(m+":"+x))}const p=Gb(e.baseURL,e.url);f.open(e.method.toUpperCase(),Ub(p,e.params,e.paramsSerializer),!0),f.timeout=e.timeout;function v(){if(!f)return;const m=sr.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),h={data:!i||i==="text"||i==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:m,config:e,request:f};jN(function(w){r(w),u()},function(w){n(w),u()},h),f=null}if("onloadend"in f?f.onloadend=v:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(v)},f.onabort=function(){f&&(n(new we("Request aborted",we.ECONNABORTED,e,f)),f=null)},f.onerror=function(){n(new we("Network Error",we.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let x=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const h=e.transitional||Bb;e.timeoutErrorMessage&&(x=e.timeoutErrorMessage),n(new we(x,h.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,e,f)),f=null},Mr.hasStandardBrowserEnv&&(s&&B.isFunction(s)&&(s=s(e)),s||s!==!1&&DN(p))){const m=e.xsrfHeaderName&&e.xsrfCookieName&&$N.read(e.xsrfCookieName);m&&o.set(e.xsrfHeaderName,m)}a===void 0&&o.setContentType(null),"setRequestHeader"in f&&B.forEach(o.toJSON(),function(x,h){f.setRequestHeader(h,x)}),B.isUndefined(e.withCredentials)||(f.withCredentials=!!e.withCredentials),i&&i!=="json"&&(f.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&f.addEventListener("progress",Pg(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Pg(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=m=>{f&&(n(!m||m.type?new Ss(null,e,f):m),f.abort(),f=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const y=ON(p);if(y&&Mr.protocols.indexOf(y)===-1){n(new we("Unsupported protocol "+y+":",we.ERR_BAD_REQUEST,e));return}f.send(a||null)})},Jf={http:aN,xhr:PN};B.forEach(Jf,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Rg=e=>`- ${e}`,RN=e=>B.isFunction(e)||e===null||e===!1,Yb={getAdapter:e=>{e=B.isArray(e)?e:[e];const{length:t}=e;let r,n;const a={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!RN(r)&&(n=Jf[(i=String(r)).toLowerCase()],n===void 0))throw new we(`Unknown adapter '${i}'`);if(n)break;a[i||"#"+o]=n}if(!n){const o=Object.entries(a).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Rg).join(`
`):" "+Rg(o[0]):"as no adapter specified";throw new we("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:Jf};function Od(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ss(null,e)}function Mg(e){return Od(e),e.headers=sr.from(e.headers),e.data=Dd.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Yb.getAdapter(e.adapter||xs.adapter)(e).then(function(n){return Od(e),n.data=Dd.call(e,e.transformResponse,n),n.headers=sr.from(n.headers),n},function(n){return Vb(n)||(Od(e),n&&n.response&&(n.response.data=Dd.call(e,e.transformResponse,n.response),n.response.headers=sr.from(n.response.headers))),Promise.reject(n)})}const Ag=e=>e instanceof sr?{...e}:e;function yo(e,t){t=t||{};const r={};function n(u,d,f){return B.isPlainObject(u)&&B.isPlainObject(d)?B.merge.call({caseless:f},u,d):B.isPlainObject(d)?B.merge({},d):B.isArray(d)?d.slice():d}function a(u,d,f){if(B.isUndefined(d)){if(!B.isUndefined(u))return n(void 0,u,f)}else return n(u,d,f)}function o(u,d){if(!B.isUndefined(d))return n(void 0,d)}function i(u,d){if(B.isUndefined(d)){if(!B.isUndefined(u))return n(void 0,u)}else return n(void 0,d)}function s(u,d,f){if(f in t)return n(u,d);if(f in e)return n(void 0,u)}const l={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:s,headers:(u,d)=>a(Ag(u),Ag(d),!0)};return B.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=l[d]||a,p=f(e[d],t[d],d);B.isUndefined(p)&&f!==s||(r[d]=p)}),r}const Kb="1.6.8",Ah={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Ah[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Lg={};Ah.transitional=function(t,r,n){function a(o,i){return"[Axios v"+Kb+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,s)=>{if(t===!1)throw new we(a(i," has been removed"+(r?" in "+r:"")),we.ERR_DEPRECATED);return r&&!Lg[i]&&(Lg[i]=!0,console.warn(a(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,s):!0}};function MN(e,t,r){if(typeof e!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let a=n.length;for(;a-- >0;){const o=n[a],i=t[o];if(i){const s=e[o],l=s===void 0||i(s,o,e);if(l!==!0)throw new we("option "+o+" must be "+l,we.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new we("Unknown option "+o,we.ERR_BAD_OPTION)}}const Zf={assertOptions:MN,validators:Ah},hn=Zf.validators;class ua{constructor(t){this.defaults=t,this.interceptors={request:new Tg,response:new Tg}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let a;Error.captureStackTrace?Error.captureStackTrace(a={}):a=new Error;const o=a.stack?a.stack.replace(/^.+\n/,""):"";n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=yo(this.defaults,r);const{transitional:n,paramsSerializer:a,headers:o}=r;n!==void 0&&Zf.assertOptions(n,{silentJSONParsing:hn.transitional(hn.boolean),forcedJSONParsing:hn.transitional(hn.boolean),clarifyTimeoutError:hn.transitional(hn.boolean)},!1),a!=null&&(B.isFunction(a)?r.paramsSerializer={serialize:a}:Zf.assertOptions(a,{encode:hn.function,serialize:hn.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&B.merge(o.common,o[r.method]);o&&B.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),r.headers=sr.concat(i,o);const s=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(r)===!1||(l=l&&m.synchronous,s.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let d,f=0,p;if(!l){const y=[Mg.bind(this),void 0];for(y.unshift.apply(y,s),y.push.apply(y,u),p=y.length,d=Promise.resolve(r);f<p;)d=d.then(y[f++],y[f++]);return d}p=s.length;let v=r;for(f=0;f<p;){const y=s[f++],m=s[f++];try{v=y(v)}catch(x){m.call(this,x);break}}try{d=Mg.call(this,v)}catch(y){return Promise.reject(y)}for(f=0,p=u.length;f<p;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=yo(this.defaults,t);const r=Gb(t.baseURL,t.url);return Ub(r,t.params,t.paramsSerializer)}}B.forEach(["delete","get","head","options"],function(t){ua.prototype[t]=function(r,n){return this.request(yo(n||{},{method:t,url:r,data:(n||{}).data}))}});B.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,s){return this.request(yo(s||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}ua.prototype[t]=r(),ua.prototype[t+"Form"]=r(!0)});class Lh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(a=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](a);n._listeners=null}),this.promise.then=a=>{let o;const i=new Promise(s=>{n.subscribe(s),o=s}).then(a);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,s){n.reason||(n.reason=new Ss(o,i,s),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Lh(function(a){t=a}),cancel:t}}}function AN(e){return function(r){return e.apply(null,r)}}function LN(e){return B.isObject(e)&&e.isAxiosError===!0}const ep={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ep).forEach(([e,t])=>{ep[t]=e});function qb(e){const t=new ua(e),r=Db(ua.prototype.request,t);return B.extend(r,ua.prototype,t,{allOwnKeys:!0}),B.extend(r,t,null,{allOwnKeys:!0}),r.create=function(a){return qb(yo(e,a))},r}const tt=qb(xs);tt.Axios=ua;tt.CanceledError=Ss;tt.CancelToken=Lh;tt.isCancel=Vb;tt.VERSION=Kb;tt.toFormData=hu;tt.AxiosError=we;tt.Cancel=tt.CanceledError;tt.all=function(t){return Promise.all(t)};tt.spread=AN;tt.isAxiosError=LN;tt.mergeConfig=yo;tt.AxiosHeaders=sr;tt.formToJSON=e=>Wb(B.isHTMLForm(e)?new FormData(e):e);tt.getAdapter=Yb.getAdapter;tt.HttpStatusCode=ep;tt.default=tt;const re=tt.create({baseURL:"/api/v1"});function Xb(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Xb(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function $n(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Xb(e))&&(n&&(n+=" "),n+=t);return n}const Xi=e=>typeof e=="number"&&!isNaN(e),da=e=>typeof e=="string",Gt=e=>typeof e=="function",Ul=e=>da(e)||Gt(e)?e:null,tp=e=>$.isValidElement(e)||da(e)||Gt(e)||Xi(e);function IN(e,t,r){r===void 0&&(r=300);const{scrollHeight:n,style:a}=e;requestAnimationFrame(()=>{a.minHeight="initial",a.height=n+"px",a.transition=`all ${r}ms`,requestAnimationFrame(()=>{a.height="0",a.padding="0",a.margin="0",setTimeout(t,r)})})}function mu(e){let{enter:t,exit:r,appendPosition:n=!1,collapse:a=!0,collapseDuration:o=300}=e;return function(i){let{children:s,position:l,preventExitTransition:u,done:d,nodeRef:f,isIn:p,playToast:v}=i;const y=n?`${t}--${l}`:t,m=n?`${r}--${l}`:r,x=$.useRef(0);return $.useLayoutEffect(()=>{const h=f.current,g=y.split(" "),w=S=>{S.target===f.current&&(v(),h.removeEventListener("animationend",w),h.removeEventListener("animationcancel",w),x.current===0&&S.type!=="animationcancel"&&h.classList.remove(...g))};h.classList.add(...g),h.addEventListener("animationend",w),h.addEventListener("animationcancel",w)},[]),$.useEffect(()=>{const h=f.current,g=()=>{h.removeEventListener("animationend",g),a?IN(h,d,o):d()};p||(u?g():(x.current=1,h.className+=` ${m}`,h.addEventListener("animationend",g)))},[p]),C.createElement(C.Fragment,null,s)}}function Ig(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const $t=new Map;let Qi=[];const rp=new Set,zN=e=>rp.forEach(t=>t(e)),Qb=()=>$t.size>0;function Jb(e,t){var r;if(t)return!((r=$t.get(t))==null||!r.isToastActive(e));let n=!1;return $t.forEach(a=>{a.isToastActive(e)&&(n=!0)}),n}function Zb(e,t){tp(e)&&(Qb()||Qi.push({content:e,options:t}),$t.forEach(r=>{r.buildToast(e,t)}))}function zg(e,t){$t.forEach(r=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===r.id&&r.toggle(e,t==null?void 0:t.id):r.toggle(e,t==null?void 0:t.id)})}function FN(e){const{subscribe:t,getSnapshot:r,setProps:n}=$.useRef(function(o){const i=o.containerId||1;return{subscribe(s){const l=function(d,f,p){let v=1,y=0,m=[],x=[],h=[],g=f;const w=new Map,S=new Set,b=()=>{h=Array.from(w.values()),S.forEach(k=>k())},E=k=>{x=k==null?[]:x.filter(D=>D!==k),b()},j=k=>{const{toastId:D,onOpen:O,updateId:R,children:Q}=k.props,X=R==null;k.staleId&&w.delete(k.staleId),w.set(D,k),x=[...x,k.props.toastId].filter(Y=>Y!==k.staleId),b(),p(Ig(k,X?"added":"updated")),X&&Gt(O)&&O($.isValidElement(Q)&&Q.props)};return{id:d,props:g,observe:k=>(S.add(k),()=>S.delete(k)),toggle:(k,D)=>{w.forEach(O=>{D!=null&&D!==O.props.toastId||Gt(O.toggle)&&O.toggle(k)})},removeToast:E,toasts:w,clearQueue:()=>{y-=m.length,m=[]},buildToast:(k,D)=>{if((P=>{let{containerId:L,toastId:U,updateId:G}=P;const J=L?L!==d:d!==1,oe=w.has(U)&&G==null;return J||oe})(D))return;const{toastId:O,updateId:R,data:Q,staleId:X,delay:Y}=D,z=()=>{E(O)},I=R==null;I&&y++;const V={...g,style:g.toastStyle,key:v++,...Object.fromEntries(Object.entries(D).filter(P=>{let[L,U]=P;return U!=null})),toastId:O,updateId:R,data:Q,closeToast:z,isIn:!1,className:Ul(D.className||g.toastClassName),bodyClassName:Ul(D.bodyClassName||g.bodyClassName),progressClassName:Ul(D.progressClassName||g.progressClassName),autoClose:!D.isLoading&&(T=D.autoClose,F=g.autoClose,T===!1||Xi(T)&&T>0?T:F),deleteToast(){const P=w.get(O),{onClose:L,children:U}=P.props;Gt(L)&&L($.isValidElement(U)&&U.props),p(Ig(P,"removed")),w.delete(O),y--,y<0&&(y=0),m.length>0?j(m.shift()):b()}};var T,F;V.closeButton=g.closeButton,D.closeButton===!1||tp(D.closeButton)?V.closeButton=D.closeButton:D.closeButton===!0&&(V.closeButton=!tp(g.closeButton)||g.closeButton);let H=k;$.isValidElement(k)&&!da(k.type)?H=$.cloneElement(k,{closeToast:z,toastProps:V,data:Q}):Gt(k)&&(H=k({closeToast:z,toastProps:V,data:Q}));const Z={content:H,props:V,staleId:X};g.limit&&g.limit>0&&y>g.limit&&I?m.push(Z):Xi(Y)?setTimeout(()=>{j(Z)},Y):j(Z)},setProps(k){g=k},setToggle:(k,D)=>{w.get(k).toggle=D},isToastActive:k=>x.some(D=>D===k),getSnapshot:()=>g.newestOnTop?h.reverse():h}}(i,o,zN);$t.set(i,l);const u=l.observe(s);return Qi.forEach(d=>Zb(d.content,d.options)),Qi=[],()=>{u(),$t.delete(i)}},setProps(s){var l;(l=$t.get(i))==null||l.setProps(s)},getSnapshot(){var s;return(s=$t.get(i))==null?void 0:s.getSnapshot()}}}(e)).current;n(e);const a=$.useSyncExternalStore(t,r,r);return{getToastToRender:function(o){if(!a)return[];const i=new Map;return a.forEach(s=>{const{position:l}=s.props;i.has(l)||i.set(l,[]),i.get(l).push(s)}),Array.from(i,s=>o(s[0],s[1]))},isToastActive:Jb,count:a==null?void 0:a.length}}function UN(e){const[t,r]=$.useState(!1),[n,a]=$.useState(!1),o=$.useRef(null),i=$.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:l,closeToast:u,onClick:d,closeOnClick:f}=e;var p,v;function y(){r(!0)}function m(){r(!1)}function x(w){const S=o.current;i.canDrag&&S&&(i.didMove=!0,t&&m(),i.delta=e.draggableDirection==="x"?w.clientX-i.start:w.clientY-i.start,i.start!==w.clientX&&(i.canCloseOnClick=!1),S.style.transform=`translate3d(${e.draggableDirection==="x"?`${i.delta}px, var(--y)`:`0, calc(${i.delta}px + var(--y))`},0)`,S.style.opacity=""+(1-Math.abs(i.delta/i.removalDistance)))}function h(){document.removeEventListener("pointermove",x),document.removeEventListener("pointerup",h);const w=o.current;if(i.canDrag&&i.didMove&&w){if(i.canDrag=!1,Math.abs(i.delta)>i.removalDistance)return a(!0),e.closeToast(),void e.collapseAll();w.style.transition="transform 0.2s, opacity 0.2s",w.style.removeProperty("transform"),w.style.removeProperty("opacity")}}(v=$t.get((p={id:e.toastId,containerId:e.containerId,fn:r}).containerId||1))==null||v.setToggle(p.id,p.fn),$.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||m(),window.addEventListener("focus",y),window.addEventListener("blur",m),()=>{window.removeEventListener("focus",y),window.removeEventListener("blur",m)}},[e.pauseOnFocusLoss]);const g={onPointerDown:function(w){if(e.draggable===!0||e.draggable===w.pointerType){i.didMove=!1,document.addEventListener("pointermove",x),document.addEventListener("pointerup",h);const S=o.current;i.canCloseOnClick=!0,i.canDrag=!0,S.style.transition="none",e.draggableDirection==="x"?(i.start=w.clientX,i.removalDistance=S.offsetWidth*(e.draggablePercent/100)):(i.start=w.clientY,i.removalDistance=S.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(w){const{top:S,bottom:b,left:E,right:j}=o.current.getBoundingClientRect();w.nativeEvent.type!=="touchend"&&e.pauseOnHover&&w.clientX>=E&&w.clientX<=j&&w.clientY>=S&&w.clientY<=b?m():y()}};return s&&l&&(g.onMouseEnter=m,e.stacked||(g.onMouseLeave=y)),f&&(g.onClick=w=>{d&&d(w),i.canCloseOnClick&&u()}),{playToast:y,pauseToast:m,isRunning:t,preventExitTransition:n,toastRef:o,eventHandlers:g}}function BN(e){let{delay:t,isRunning:r,closeToast:n,type:a="default",hide:o,className:i,style:s,controlledProgress:l,progress:u,rtl:d,isIn:f,theme:p}=e;const v=o||l&&u===0,y={...s,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused"};l&&(y.transform=`scaleX(${u})`);const m=$n("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":d}),x=Gt(i)?i({rtl:d,type:a,defaultClassName:m}):$n(m,i),h={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{f&&n()}};return C.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":v},C.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${a}`}),C.createElement("div",{role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:x,style:y,...h}))}let HN=1;const ex=()=>""+HN++;function WN(e){return e&&(da(e.toastId)||Xi(e.toastId))?e.toastId:ex()}function Ni(e,t){return Zb(e,t),t.toastId}function Ec(e,t){return{...t,type:t&&t.type||e,toastId:WN(t)}}function ul(e){return(t,r)=>Ni(t,Ec(e,r))}function W(e,t){return Ni(e,Ec("default",t))}W.loading=(e,t)=>Ni(e,Ec("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),W.promise=function(e,t,r){let n,{pending:a,error:o,success:i}=t;a&&(n=da(a)?W.loading(a,r):W.loading(a.render,{...r,...a}));const s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(d,f,p)=>{if(f==null)return void W.dismiss(n);const v={type:d,...s,...r,data:p},y=da(f)?{render:f}:f;return n?W.update(n,{...v,...y}):W(y.render,{...v,...y}),p},u=Gt(e)?e():e;return u.then(d=>l("success",i,d)).catch(d=>l("error",o,d)),u},W.success=ul("success"),W.info=ul("info"),W.error=ul("error"),W.warning=ul("warning"),W.warn=W.warning,W.dark=(e,t)=>Ni(e,Ec("default",{theme:"dark",...t})),W.dismiss=function(e){(function(t){var r;if(Qb()){if(t==null||da(r=t)||Xi(r))$t.forEach(n=>{n.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const n=$t.get(t.containerId);n?n.removeToast(t.id):$t.forEach(a=>{a.removeToast(t.id)})}}else Qi=Qi.filter(n=>t!=null&&n.options.toastId!==t)})(e)},W.clearWaitingQueue=function(e){e===void 0&&(e={}),$t.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},W.isActive=Jb,W.update=function(e,t){t===void 0&&(t={});const r=((n,a)=>{var o;let{containerId:i}=a;return(o=$t.get(i||1))==null?void 0:o.toasts.get(n)})(e,t);if(r){const{props:n,content:a}=r,o={delay:100,...n,...t,toastId:t.toastId||e,updateId:ex()};o.toastId!==e&&(o.staleId=e);const i=o.render||a;delete o.render,Ni(i,o)}},W.done=e=>{W.update(e,{progress:1})},W.onChange=function(e){return rp.add(e),()=>{rp.delete(e)}},W.play=e=>zg(!0,e),W.pause=e=>zg(!1,e);const VN=typeof window<"u"?$.useLayoutEffect:$.useEffect,dl=e=>{let{theme:t,type:r,isLoading:n,...a}=e;return C.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${r})`,...a})},Td={info:function(e){return C.createElement(dl,{...e},C.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return C.createElement(dl,{...e},C.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return C.createElement(dl,{...e},C.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return C.createElement(dl,{...e},C.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return C.createElement("div",{className:"Toastify__spinner"})}},GN=e=>{const{isRunning:t,preventExitTransition:r,toastRef:n,eventHandlers:a,playToast:o}=UN(e),{closeButton:i,children:s,autoClose:l,onClick:u,type:d,hideProgressBar:f,closeToast:p,transition:v,position:y,className:m,style:x,bodyClassName:h,bodyStyle:g,progressClassName:w,progressStyle:S,updateId:b,role:E,progress:j,rtl:k,toastId:D,deleteToast:O,isIn:R,isLoading:Q,closeOnClick:X,theme:Y}=e,z=$n("Toastify__toast",`Toastify__toast-theme--${Y}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":X}),I=Gt(m)?m({rtl:k,position:y,type:d,defaultClassName:z}):$n(z,m),V=function(Z){let{theme:P,type:L,isLoading:U,icon:G}=Z,J=null;const oe={theme:P,type:L};return G===!1||(Gt(G)?J=G({...oe,isLoading:U}):$.isValidElement(G)?J=$.cloneElement(G,oe):U?J=Td.spinner():(de=>de in Td)(L)&&(J=Td[L](oe))),J}(e),T=!!j||!l,F={closeToast:p,type:d,theme:Y};let H=null;return i===!1||(H=Gt(i)?i(F):$.isValidElement(i)?$.cloneElement(i,F):function(Z){let{closeToast:P,theme:L,ariaLabel:U="close"}=Z;return C.createElement("button",{className:`Toastify__close-button Toastify__close-button--${L}`,type:"button",onClick:G=>{G.stopPropagation(),P(G)},"aria-label":U},C.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},C.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(F)),C.createElement(v,{isIn:R,done:O,position:y,preventExitTransition:r,nodeRef:n,playToast:o},C.createElement("div",{id:D,onClick:u,"data-in":R,className:I,...a,style:x,ref:n},C.createElement("div",{...R&&{role:E},className:Gt(h)?h({type:d}):$n("Toastify__toast-body",h),style:g},V!=null&&C.createElement("div",{className:$n("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!Q})},V),C.createElement("div",null,s)),H,C.createElement(BN,{...b&&!T?{key:`pb-${b}`}:{},rtl:k,theme:Y,delay:l,isRunning:t,isIn:R,closeToast:p,hide:f,type:d,style:S,className:w,controlledProgress:T,progress:j||0})))},vu=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},YN=mu(vu("bounce",!0));mu(vu("slide",!0));mu(vu("zoom"));mu(vu("flip"));const KN={position:"top-right",transition:YN,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function qN(e){let t={...KN,...e};const r=e.stacked,[n,a]=$.useState(!0),o=$.useRef(null),{getToastToRender:i,isToastActive:s,count:l}=FN(t),{className:u,style:d,rtl:f,containerId:p}=t;function v(m){const x=$n("Toastify__toast-container",`Toastify__toast-container--${m}`,{"Toastify__toast-container--rtl":f});return Gt(u)?u({position:m,rtl:f,defaultClassName:x}):$n(x,Ul(u))}function y(){r&&(a(!0),W.play())}return VN(()=>{if(r){var m;const x=o.current.querySelectorAll('[data-in="true"]'),h=12,g=(m=t.position)==null?void 0:m.includes("top");let w=0,S=0;Array.from(x).reverse().forEach((b,E)=>{const j=b;j.classList.add("Toastify__toast--stacked"),E>0&&(j.dataset.collapsed=`${n}`),j.dataset.pos||(j.dataset.pos=g?"top":"bot");const k=w*(n?.2:1)+(n?0:h*E);j.style.setProperty("--y",`${g?k:-1*k}px`),j.style.setProperty("--g",`${h}`),j.style.setProperty("--s",""+(1-(n?S:0))),w+=j.offsetHeight,S+=.025})}},[n,l,r]),C.createElement("div",{ref:o,className:"Toastify",id:p,onMouseEnter:()=>{r&&(a(!1),W.pause())},onMouseLeave:y},i((m,x)=>{const h=x.length?{...d}:{...d,pointerEvents:"none"};return C.createElement("div",{className:v(m),style:h,key:`container-${m}`},x.map(g=>{let{content:w,props:S}=g;return C.createElement(GN,{...S,stacked:r,collapseAll:y,isIn:s(S.toastId,S.containerId),style:S.style,key:`toast-${S.key}`},w)}))}))}const XN=async()=>{try{const{data:e}=await re.get("users/current-user");return e}catch(e){return e}},tx=$.createContext(),QN=()=>{const{user:e,member:t}=Ce(),r=Hr(),[n,a]=$.useState(!1),o=()=>{a(!n)},i=async()=>{r("/"),await re.get("user/logut"),W.success("Logging out...")};return c.jsx(tx.Provider,{value:{showSidebar:n,toggleSidebar:o,logoutUser:i,user:e},children:c.jsx(E$,{children:c.jsxs("main",{className:"dashboard",children:[c.jsx(f5,{}),c.jsx(JN,{}),c.jsxs("div",{className:"navbar",children:[c.jsx(h5,{}),c.jsx("div",{className:"dashboard-page",children:c.jsx(Wn,{context:{user:e,member:t}})})]})]})})})},Es=()=>$.useContext(tx),JN=()=>{const{showSidebar:e}=Es();return c.jsx(S$,{children:c.jsx("div",{className:e?"sidebar-container ":"sidebar-container show-sidebar",children:c.jsxs("div",{className:"content",children:[c.jsx("header",{children:"genocide"}),c.jsx(Ih,{isBigSidebar:!0})]})})})},ZN=se.aside`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    /* toggle */
    opacity: 0;
    visibility: hidden;
  }
  .show-sidebar {
    opacity: 1;
    visibility: visible;
    transition-property: opacity;
    transition-duration: 1s;
  }
  .sidebar-container {
    padding: 4rem 2rem;
    position: relative;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: red;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  article {
    margin-bottom: 2rem;
  }
  h2 {
    margin-bottom: 1rem;
    color: red;
  }
  .sidebar-sublinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.5rem;
  }
  .sidebar-sublinks a {
    display: block;
    color: red;
    text-transform: capitalize;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  svg {
    color: red;
  }

  @media (min-width: 992px) {
    display: none;
  }

  .active {
    color: white;
  }
`;var rx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Fg=C.createContext&&C.createContext(rx),e5=["attr","size","title"];function t5(e,t){if(e==null)return{};var r=r5(e,t),n,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function r5(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function kc(){return kc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},kc.apply(this,arguments)}function Ug(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function jc(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ug(Object(r),!0).forEach(function(n){n5(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ug(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function n5(e,t,r){return t=a5(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a5(e){var t=o5(e,"string");return typeof t=="symbol"?t:t+""}function o5(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nx(e){return e&&e.map((t,r)=>C.createElement(t.tag,jc({key:r},t.attr),nx(t.child)))}function Xe(e){return t=>C.createElement(i5,kc({attr:jc({},e.attr)},t),nx(e.child))}function i5(e){var t=r=>{var{attr:n,size:a,title:o}=e,i=t5(e,e5),s=a||r.size||"1em",l;return r.className&&(l=r.className),e.className&&(l=(l?l+" ":"")+e.className),C.createElement("svg",kc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,i,{className:l,style:jc(jc({color:e.color||r.color},r.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&C.createElement("title",null,o),e.children)};return Fg!==void 0?C.createElement(Fg.Consumer,null,r=>t(r)):t(rx)}function s5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(e)}function l5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"},child:[]}]})(e)}function gu(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zM142.1 273l135.5 135.5c9.4 9.4 24.6 9.4 33.9 0l17-17c9.4-9.4 9.4-24.6 0-33.9L226.9 256l101.6-101.6c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L142.1 239c-9.4 9.4-9.4 24.6 0 34z"},child:[]}]})(e)}function yu(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"},child:[]}]})(e)}function c5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"},child:[]}]})(e)}function u5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function d5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}const f5=()=>{const{showSidebar:e,toggleSidebar:t}=Es();return c.jsx(ZN,{children:c.jsx("div",{className:e?"sidebar show-sidebar":"sidebar",children:c.jsxs("div",{className:"sidebar-container",children:[c.jsx("button",{className:"close-btn",onClick:t,children:c.jsx(u5,{})}),c.jsx("div",{className:"sidebar-links",children:c.jsx(Ih,{})})]})})})},p5=se.nav`
  background: red;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }
  .logo {
    text-decoration: none;
    color: black;
    text-transform: capitalize;
  }
  .info {
    padding: 0.5rem 0.5rem;
    background: black;
    color: white;
    border-radius: 10px;
  }
  .info:hover {
    background: grey;
    color: red;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
  }
`,h5=()=>{const{toggleSidebar:e,showSidebar:t}=Es();return c.jsx(p5,{children:c.jsxs("div",{className:"nav-center",children:[c.jsx("button",{type:"button",className:"toggle-btn",onClick:e,children:c.jsx(s5,{})}),c.jsx("div",{children:c.jsx("h2",{children:c.jsx(_e,{to:"/",className:"logo",children:"genocide"})})}),c.jsx("div",{className:"btn-container",children:t?null:c.jsx($5,{})}),c.jsx("h3",{children:"payment"}),c.jsx(_e,{to:"version-info",className:"logo info",children:"developer info"})]})})};function m5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 29.5c-6.557 0-12.898 3.62-18.146 10.924C104.604 47.728 101 58.51 101 70.596c0 12.085 3.605 22.866 8.854 30.17 5.248 7.303 11.59 10.923 18.146 10.923 6.557 0 12.898-3.62 18.146-10.924 5.25-7.304 8.854-18.085 8.854-30.17 0-12.086-3.605-22.868-8.854-30.172C140.898 33.12 134.556 29.5 128 29.5zm256 0c-6.557 0-12.898 3.62-18.146 10.924C360.604 47.728 357 58.51 357 70.596c0 12.085 3.605 22.866 8.854 30.17 5.248 7.303 11.59 10.923 18.146 10.923 6.557 0 12.898-3.62 18.146-10.924 5.25-7.304 8.854-18.085 8.854-30.17 0-12.086-3.605-22.868-8.854-30.172C396.898 33.12 390.556 29.5 384 29.5zm-235.736 93.912c-5.99 3.932-12.87 6.277-20.264 6.277-7.25 0-13.996-2.26-19.902-6.053l-2.67 2.67c.905 4.4 3.467 9.56 7.77 15.298 3.93 5.24 9.223 10.835 14.802 16.532 5.58-5.697 10.87-11.292 14.8-16.532 4.402-5.868 6.963-11.122 7.81-15.584l-2.346-2.608zm215.472 0l-2.345 2.61c.846 4.46 3.408 9.715 7.81 15.583 3.93 5.24 9.22 10.835 14.8 16.532 5.58-5.697 10.87-11.292 14.8-16.532 4.305-5.74 6.867-10.9 7.772-15.298l-2.67-2.67c-5.906 3.792-12.653 6.052-19.902 6.052-7.395 0-14.273-2.346-20.264-6.278zM88.998 134.826l-31.93 10.643c.077 28.387 1.13 55.42 13.496 82.132 43.338 13.938 71.534 13.938 114.872 0 12.367-26.712 13.42-53.745 13.496-82.133l-31.93-10.644c-2.11 6.28-5.692 12.1-9.803 17.58-6.577 8.768-14.837 16.963-22.837 24.963L128 183.733l-6.363-6.365c-8-8-16.26-16.196-22.836-24.964-4.11-5.48-7.693-11.3-9.802-17.58zm256 0l-31.93 10.643c.077 28.387 1.13 55.42 13.496 82.132 43.338 13.938 71.534 13.938 114.872 0 12.367-26.712 13.42-53.745 13.496-82.133l-31.93-10.644c-2.11 6.28-5.692 12.1-9.803 17.58-6.577 8.768-14.837 16.963-22.837 24.963L384 183.733l-6.363-6.365c-8-8-16.26-16.196-22.836-24.964-4.11-5.48-7.693-11.3-9.802-17.58zM18 146.5v36h22.44c-1.203-12.188-1.39-24.202-1.422-36H18zm198.982 0c-.03 11.798-.22 23.812-1.42 36h80.878c-1.203-12.188-1.39-24.202-1.422-36h-78.036zm256 0c-.03 11.798-.22 23.812-1.42 36H494v-36h-21.018zM73 247.24v63.45c5.94 4.56 14.298 7.316 23 7.316 8.627 0 17.07-2.6 23-7.086v-27.914h18v27.914c5.93 4.487 14.373 7.086 23 7.086 8.702 0 17.06-2.757 23-7.317v-63.45c-39.33 11.437-70.67 11.437-110 0zm256 0v63.45c5.94 4.56 14.298 7.316 23 7.316 8.627 0 17.07-2.6 23-7.086v-27.914h18v27.914c5.93 4.487 14.373 7.086 23 7.086 8.702 0 17.06-2.757 23-7.317v-63.45c-39.33 11.437-70.67 11.437-110 0zm-210 84.252c-7.228 3.056-15.142 4.514-23 4.514-7.847 0-15.77-1.42-23-4.45v27.364c5.93 4.487 14.373 7.086 23 7.086s17.07-2.6 23-7.086v-27.428zm18 0v27.428c5.93 4.487 14.373 7.086 23 7.086s17.07-2.6 23-7.086v-27.363c-7.23 3.03-15.153 4.45-23 4.45-7.858 0-15.772-1.46-23-4.515zm238 0c-7.228 3.056-15.142 4.514-23 4.514-7.847 0-15.77-1.42-23-4.45v27.364c5.93 4.487 14.373 7.086 23 7.086s17.07-2.6 23-7.086v-27.428zm18 0v27.428c5.93 4.487 14.373 7.086 23 7.086s17.07-2.6 23-7.086v-27.363c-7.23 3.03-15.153 4.45-23 4.45-7.858 0-15.772-1.46-23-4.515zm-274 48c-7.228 3.056-15.142 4.514-23 4.514-6.4 0-12.813-1.076-18.898-3.068 1.1 3.693 2.132 7.308 3.437 11.222 2.93 8.792 6.073 17.492 7.564 25.846H119v-38.514zm18 0v24.373c4.736-7.94 11.14-14.775 18.723-20.02-6.43-.438-12.806-1.85-18.723-4.353zm238 0c-7.228 3.056-15.142 4.514-23 4.514-6.4 0-12.813-1.076-18.898-3.068 1.1 3.693 2.132 7.308 3.437 11.222 2.93 8.792 6.073 17.492 7.564 25.846H375v-38.514zm18 0v38.514h30.896c1.49-8.354 4.634-17.054 7.565-25.846 1.306-3.914 2.34-7.53 3.438-11.223-6.085 1.993-12.497 3.07-18.898 3.07-7.858 0-15.772-1.46-23-4.515zM192 390.5c-25.512 0-46 20.488-46 46s20.488 46 46 46 46-20.488 46-46-20.488-46-46-46zM89 436.006v44h56.156C134.526 468.57 128 453.274 128 436.5c0-.166.01-.33.012-.494H89zm256 0v44h78v-44h-78z"},child:[]}]})(e)}function fl(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M27.47 15.344c62.946 25.422 108.824 61.313 115.843 132.03v.188c52.31 30.132 92.605 72.538 104.28 119.938 1.792 7.272 2.84 14.637 3.126 22.03 31.737-3.283 64-20.935 87.843-46.624 26.42-28.467 42.056-65.91 36.843-103.03-15.205 1.917-30.855.922-46.5-2.314-50.282-10.398-101.7-42.974-148.562-77.875-4.79-4.21-9.93-8.084-15.406-11.656-34.787-22.69-82.864-32.686-137.47-32.686zM234.687 41.25l-15.72 23c19.23 13.107 38.792 25.095 58.126 34.72l13.437-19.25c-12.406-18.774-34.986-32.363-55.842-38.47zm239.375 21.375c-16.886 31.464-37.035 52.625-59.72 64.875-6.702 3.62-13.573 6.434-20.593 8.53 6.67 44.027-11.746 87.505-41.5 119.564-27.275 29.387-64.424 49.947-102.53 52.844-4.482 31.48-23.408 62.858-59.75 90.312 40.743 9.164 78.742 9.05 113.436 1.906l7.72-49.03 2.937-18.595 13.03 13.595L359 379.875c27.795-16.753 64.71-44.308 83.22-67.906L413.31 262l-11.468-19.78 22.03 6.093 47.938 13.25c13.232-23.865 21.327-60.527 21.47-98.875.13-34.855-6.22-70.88-19.22-100.063zM146.092 170.97L20.564 354.75l.812 110.625 175.53-251.5c-13.78-15.612-31.054-30.19-50.81-42.906z"},child:[]}]})(e)}function v5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M312.813 24.313L88.5 282.938l65.563 95.718c90.372-68.07 182.097-177.937 254.843-295.844l-96.094-58.5zm9.125 30.03c2.658.03 4.815.813 6.562 2 3.494 2.376 6.438 7.41 6.438 16.376 0 17.928-14.45 41.012-29.657 48.124-7.603 3.555-12.692 2.844-16.186.47-3.494-2.377-6.47-7.412-6.47-16.376 0-17.93 14.48-41.014 29.688-48.126 3.803-1.777 6.967-2.5 9.625-2.468zm102.937 38.188c-73.88 119.784-166.747 231.365-260.25 301.564l42.53 62.125c93.965-68.158 219.3-202.6 281.564-324.845L424.874 92.53zM73.5 294.126c-17.832 17.12-35.684 32.712-53.563 46.844V461.56c27.78-33.634 57.404-75.49 87.75-117.53L73.5 294.124z"},child:[]}]})(e)}function g5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M41 66.91V415.8c86.5 1 147.5 14.8 206 29.3V141.4c-45.3-30.1-90.4-58.75-206-74.49zm430 0C355.4 82.65 310.3 111.3 265 141.4v303.7c58.5-14.5 119.5-28.3 206-29.3zm-20.9 26.6l.8 66.99c-59.4 17.6-114.5 37.9-168.9 56-.4-20.9-.7-41.7-1.1-62.6 52.8-29.2 111.2-48.1 169.2-60.39zM69.01 105.3C129.8 119.4 184.1 136 226.1 150.1l.2 19c-41.6-13.9-101.3-32.3-161.35-46.3zm.12 46.6l35.97 6.5-3.2 17.8-35.97-6.5zm54.17 11.3l32.5 6.2-3.4 17.6-32.5-6.2zm53.2 10.5l49.6 9.6-3.4 17.6-49.6-9.6zm263.1 19.9l5.2 17.2-56 16.9-5.2-17.2zm-377.68 4.7C119.2 205 176 212.2 223.8 225l-4.6 17.4c-46-12.4-102.2-19.6-159.38-26.3zM357.1 216l4.8 17.4-71.7 19.8-4.8-17.4zm86.4 21l4.8 17.4-32.8 9.1-4.8-17.4zm-378.3 1.6l49.9 5.2-2 18-49.8-5.4zm76.9 9.8l82.1 12.3-2.6 17.8-82.1-12.3zm248.5 3.7l4.8 17.4L288.5 299l-4.8-17.4zm55.8 22.9l4.6 17.4L348.5 319l-4.6-17.4zm-388.06 6.4c29.84 3.1 61.96 7.5 84.46 13v111L59.2 398c-.33-38.9-.48-77.7-.86-116.6zm104.56 14.7l61.5 7.5-2.2 17.8-61.5-7.5zm161.5 11.8l4.2 17.5-37.8 9.1-4.2-17.5zm129.1 4.1l.4 82.2-78.5 10.2c-.3-23.8-.4-47.7-.7-71.5zM164 334.4l59.8 9.8-3 17.8-59.8-9.8zm271.7 1l-42.8 11.3.3 37.3 42.7-5.6zm-81.4 9.8l3.4 17.6-68.9 13.1-3.4-17.6zm-191.1 29.1l62.6 12.4-3.4 17.6-62.6-12.4zm186.6 6.8l4 17.6-62.5 13.9-4-17.6z"},child:[]}]})(e)}function _d(e){return Xe({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M.3013 17.6146c-.1299-.3387-.5228-1.5119-.1337-2.4314l9.8273 5.6738a.329.329 0 0 0 .3299 0L24 12.9616v2.3542l-13.8401 7.9906-9.8586-5.6918zM.1911 8.9628c-.2882.8769.0149 2.0581.1236 2.4261l9.8452 5.6841L24 9.0823V6.7275L10.3248 14.623a.329.329 0 0 1-.3299 0L.1911 8.9628zm13.1698-1.9361c-.1819.1113-.4394.0015-.4852-.2064l-.2805-1.1336-2.1254-.1752a.33.33 0 0 1-.1378-.6145l5.5782-3.2207-1.7021-.9826L.6979 8.4935l9.462 5.463 13.5104-7.8004-4.401-2.5407-5.9084 3.4113zm-.1821-1.7286.2321.938 5.1984-3.0014-2.0395-1.1775-4.994 2.8834 1.3099.108a.3302.3302 0 0 1 .2931.2495zM24 9.845l-13.6752 7.8954a.329.329 0 0 1-.3299 0L.1678 12.0667c-.3891.919.003 2.0914.1332 2.4311l9.8589 5.692L24 12.1993V9.845z"},child:[]}]})(e)}function Bg(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0z"},child:[]},{tag:"path",attr:{d:"M386.34 193.66 264.45 315.79A41.08 41.08 0 0 1 247.58 326l-25.9 8.67a35.92 35.92 0 0 1-44.33-44.33l8.67-25.9a41.08 41.08 0 0 1 10.19-16.87l122.13-121.91a8 8 0 0 0-5.65-13.66H104a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h240a56 56 0 0 0 56-56V199.31a8 8 0 0 0-13.66-5.65z"},child:[]}]})(e)}function y5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"rect",attr:{width:"96",height:"96",x:"96",y:"112",fill:"none",rx:"16",ry:"16"},child:[]},{tag:"path",attr:{d:"M468 112h-52v304a32 32 0 0 0 32 32 32 32 0 0 0 32-32V124a12 12 0 0 0-12-12z"},child:[]},{tag:"path",attr:{d:"M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25zM96 208v-96h96v96zm224 192H96v-32h224zm0-64H96v-32h224zm0-64H96v-32h224zm0-64h-96v-32h96zm0-64h-96v-32h96z"},child:[]}]})(e)}function w5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"},child:[]}]})(e)}function b5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"},child:[]}]})(e)}function x5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM424 688c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-136c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm374.5-91.3l-165 228.7a15.9 15.9 0 0 1-25.8 0L493.5 531.2c-3.8-5.3 0-12.7 6.5-12.7h54.9c5.1 0 9.9 2.5 12.9 6.6l52.8 73.1 103.7-143.7c3-4.2 7.8-6.6 12.9-6.6H792c6.5.1 10.3 7.5 6.5 12.8z"},child:[]}]})(e)}function S5(e){return Xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M17,7 L23,7 L23,23 L7,23 L7,19 M23,11 L17,11 M13,0 L13,3 M1,7 L17,7 M1,3 L17,3 L17,19 L1,19 L1,3 Z M5,0 L5,3 M4,11 L6,11 M8,11 L14,11 M4,15 L6,15 M8,15 L14,15"},child:[]}]})(e)}const E5="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let he=(e=21)=>{let t="",r=crypto.getRandomValues(new Uint8Array(e));for(;e--;)t+=E5[r[e]&63];return t};const k5=[{pageId:he(),page:"headline",links:[{id:he(),label:"bulletBoard",icon:c.jsx(y5,{}),url:"."},{id:he(),label:"view headline",icon:c.jsx(g5,{}),url:"view-headline"},{id:he(),label:"create schedule",icon:c.jsx(x5,{}),url:"create-schedule"},{id:he(),label:"view schedule",icon:c.jsx(S5,{}),url:"view-schedule"}]},{pageId:he(),page:"war",links:[{id:he(),label:"create group",icon:c.jsx(fl,{}),url:"war/create-group"},{id:he(),label:"Browse Groups",icon:c.jsx(fl,{}),url:"war/browse-groups"},{id:he(),label:"my groups",icon:c.jsx(fl,{}),url:"war/my-groups"},{id:he(),label:"joined groups",icon:c.jsx(fl,{}),url:"war/joined-groups"}]},{pageId:he(),page:"education",links:[{id:he(),label:"course selection",icon:c.jsx(_d,{}),url:"education"},{id:he(),label:"upload course",icon:c.jsx(_d,{}),url:"education/upload"},{id:he(),label:"update course",icon:c.jsx(_d,{}),url:"education/update"}]},{pageId:he(),page:"Investment Groups",links:[{id:he(),label:"Browse All Groups",icon:c.jsx(m5,{}),url:"investment/browse-all-groups"},{id:he(),label:"Create Investment Groups",icon:c.jsx(Bg,{}),url:"investment/create-groups"},{id:he(),label:"My Investment Groups",icon:c.jsx(Bg,{}),url:"investment/select-group"}]},{pageId:he(),page:"users",links:[{id:he(),label:"user profile",icon:c.jsx(b5,{}),url:"user/user-profile"},{id:he(),label:"leave organization",icon:c.jsx(v5,{}),url:"user/leave-org"}]}],Ih=({isBigSidebar:e})=>{const{toggleSidebar:t}=Es();return c.jsx("div",{className:"sidebar-links",children:k5.map(r=>{const{pageId:n,page:a,links:o}=r;return c.jsxs("article",{children:[c.jsx("h2",{children:a}),c.jsx("div",{className:"sidebar-sublinks",children:o.map(i=>{const{id:s,label:l,icon:u,url:d}=i;return c.jsxs(no,{to:d,onClick:e?null:t,end:!0,children:[u,l]},s)})})]},n)})})};Ih.propTypes={isBigSidebar:M.bool};const j5=se.div`
  position: relative;
  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    text-align: center;
    visibility: hidden;
    border-radius: 10px;
    background: black;
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: 10px;
    padding: 0.5rem;
    background: black;
    border-color: transparent;
    color: red;
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`,$5=()=>{const[e,t]=$.useState(!1),{user:r,logoutUser:n}=Es();return c.jsxs(j5,{children:[c.jsxs("button",{type:"button",className:"btn logout-btn",onClick:()=>t(!e),children:[c.jsx(d5,{}),r.firstName,c.jsx(l5,{})]}),c.jsx("div",{className:e?"dropdown show-dropdown":"dropdown",children:c.jsx("button",{type:"button",className:"dropdown-btn",onClick:n,children:"logout"})})]})};function wu(e){return Xe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"},child:[]}]})(e)}function bu(e){return Xe({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z",clipRule:"evenodd"},child:[]}]})(e)}const zh=se.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;

  .btn-container {
    background: red;
    border-radius: 10px;
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 10px;
    color: black;
    cursor: pointer;
  }
  .active {
    background: black;
    color: red;
  }
  .prev-btn,
  .next-btn {
    background: red;
    color: black;
    border-color: transparent;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    text-transform: capitalize;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: black;
    color: red;
    transition: var(--transition);
  }
  .dots {
    display: grid;
    place-items: center;
    cursor: pointer;
  }
`,N5=()=>{const{data:{numOfPages:e,currentPage:t}}=Cr(),{search:r,pathname:n}=pr(),a=Hr(),o=l=>{const u=new URLSearchParams(r);u.set("page",l),a(`${n}?${u.toString()}`)},i=({pageNumber:l,activeClass:u})=>c.jsx("button",{className:`btn page-btn ${u&&"active"}`,onClick:()=>o(l),children:l},l),s=()=>{const l=[];return l.push(i({pageNumber:1,activeClass:t===1})),t>3&&l.push(c.jsx("span",{className:"page-btn dots",children:"..."},"dots-1")),t!==1&&t!==2&&l.push(i({pageNumber:t-1,activeClass:!1})),t<e-2&&l.push(c.jsx("span",{className:"page-btn dots",children:"..."},"dots+1")),t!==1&&t!==e&&l.push(i({pageNumber:t,activeClass:!0})),t!==e&&t!==e-1&&l.push(i({pageNumber:t+1,activeClass:!1})),l.push(i({pageNumber:e,activeClass:t===e})),l};return c.jsxs(zh,{children:[c.jsxs("button",{className:"btn prev-btn",onClick:()=>{let l=t-1;l<1&&(l=e),o(l)},children:[c.jsx(wu,{}),"prev"]}),c.jsx("div",{className:"btn-container",children:s()}),c.jsxs("button",{className:"btn next-btn",onClick:()=>{let l=t+1;l>e&&(l=1),o(l)},children:[c.jsx(bu,{}),"next"]})]})},Fh=({numOfPages:e,currentPage:t})=>{const{search:r,pathname:n}=pr(),a=Hr(),o=Array.from({length:e},(s,l)=>l+1),i=s=>{const l=new URLSearchParams(r);l.set("page",s),a(`${n}?${l.toString()}`)};return c.jsxs(zh,{children:[c.jsxs("button",{className:" btn prev-btn",onClick:()=>{let s=t-1;s<1&&(s=e),i(s)},children:[c.jsx(wu,{}),"prev button"]}),c.jsx("div",{className:"btn-container",children:o.map(s=>c.jsx("button",{className:`btn page-btn ${s===t&&"active"}`,onClick:()=>i(s),children:s},s))}),c.jsxs("button",{className:"btn next-btn",onClick:()=>{let s=t+1;s>e&&(s=1),i(s)},children:["nextBtn",c.jsx(bu,{})]})]})};Fh.propTypes={numOfPages:M.number,currentPage:M.number};const np={DEAD_BY_DAYLIGHT:"dead by daylight",WORLD_OF_WARCRAFT:"world of warcraft"},ap={NONE:"none",DUNGEONS:"dungeons",MYTHIC_RAIDING:"mythic raiding",MYTHIC_DUNGEONS:"mythic dungeons",BATTLEGROUNDS:"battlegrounds",ARENA:"arena",RANKED_BATTLEGROUNDS:"ranked battlegrounds"},ax={VIDEO_GAME_STUDIO:"Video Game Studio",MUSIC_STUDIO:"Music Studio",VIDEO_GAME_GUILDS:"Video Game Guilds",YOUTUBE_GUILDS:"Youtube Guilds",FILM_PRODUCTION:"Film Production",THEATER:"Theater",SOFTWARE_DEVELOPMENT:"Software Development"},C5={ONE:1,TEN:10,FIFTY:50,HUNDRED:100,THOUSAND:1e3,ONE_HUNDRED_THOUSAND:1e5,ONE_MILLION:1e6},D5={ZERO:0,TEN:10,FIFTY:50,HUNDRED:100,THOUSAND:1e3,ONE_HUNDRED_THOUSAND:1e5,ONE_MILLION:1e6},Uh={AL:"Alabama",AK:"Alaska",AZ:"Arizona",AR:"Arkansas",CA:"California",CO:"Colorado",CT:"Connecticut",DE:"Delaware",FL:"Florida",GA:"Georgia",HI:"Hawaii",ID:"Idaho",IL:"Illinois",IN:"Indiana",IA:"Iowa",KS:"Kansas",KY:"Kentucky",LA:"Louisiana",ME:"Maine",MD:"Maryland",MA:"Massachusetts",MI:"Michigan",MN:"Minnesota",MS:"Mississippi",MO:"Missouri",MT:"Montana",NE:"Nebraska",NV:"Nevada",NH:"New Hampshire",NJ:"New Jersey",NM:"New Mexico",NY:"New York",NC:"North Carolina",ND:"North Dakota",OH:"Ohio",OK:"Oklahoma",OR:"Oregon",PA:"Pennsylvania",RI:"Rhode Island",SC:"South Carolina",SD:"South Dakota",TN:"Tennessee",TX:"Texas",UT:"Utah",VT:"Vermont",VA:"Virginia",WA:"Washington",WV:"West Virginia",WI:"Wisconsin",WY:"Wyoming"},Pd={MATH:"math",READING:"reading",HISTORY:"history",SCIENCE:"science",ENGLISH:"english"},O5=se.div`
  .form {
    width: 15rem;
    background: black;
  }
  .form-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .form-title {
    color: red;
    margin-bottom: 1rem;
  }
  .form-label {
    color: red;
  }
  .form-select {
    color: red;
    text-transform: uppercase;
  }

  .btn {
    text-decoration: none;
    color: black;
    transition: var(--transition);
  }
  .btn:hover {
    color: red;
  }
  @media (min-width: 600px) {
    .form {
      width: 40vw;
    }
  }
`,T5=()=>{const{searchValues:e}=Cr(),{games:t,goals:r}=e,n=Nh();return c.jsx(O5,{children:c.jsxs(Se,{className:"form",children:[c.jsx("h5",{className:"form-title",children:"search games"}),c.jsxs("div",{className:"form-center",children:[c.jsx(Ct,{labelText:"games",name:"games",list:["allGames",...Object.values(np)],defaultValue:t,onChange:a=>{n(a.currentTarget.form)}}),c.jsx(Ct,{labelText:"goals",name:"goals",list:["allGoals",...Object.values(ap)],defaultValue:r,onChange:a=>{n(a.currentTarget.form)}})]}),c.jsx(_e,{to:"/dashboard/war/browse-groups",className:"btn form-btn delete-btn",children:"Reset Search Values"})]})})},_5=se.div`
  margin-left: 2rem;

  .form {
    width: 20rem;
    background: black;
  }
  .form-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .form-title {
    color: red;
    margin-bottom: 1rem;
  }
  .form-label {
    color: red;
    text-align: center;
  }
  .form-select {
    color: red;
    text-transform: uppercase;
  }

  .btn {
    text-decoration: none;
    color: black;
    transition: var(--transition);
  }

  .btn:hover {
    color: red;
  }
  @media (min-width: 800px) {
    margin-right: 25rem;
  }
  @media (min-width: 1000px) {
    margin-right: 10rem;
    .form {
      width: 30rem;
    }
  }
  @media (min-width: 1200px) {
    margin-right: 20rem;
    .form {
      width: 40rem;
    }
  }
`,P5=()=>{const e=Nh();return c.jsx(_5,{children:c.jsxs(Se,{className:"form",children:[c.jsx("h5",{className:"form-title",children:"search investment groups"}),c.jsxs("div",{className:"form-center",children:[c.jsx(Ct,{labelText:"investments",name:"investment",list:["all",...Object.values(ax)],defaultValue:"investments",onChange:t=>{e(t.currentTarget.form)}}),c.jsx(Ct,{labelText:"state",name:"state",list:["all",...Object.values(Uh)],onChange:t=>{e(t.currentTarget.form)}})]}),c.jsx(_e,{to:"/dashboard/investment/browse-all-groups",className:"btn form-btn delete-btn",children:"Reset Search Values"})]})})},Ct=({name:e,labelText:t,list:r,defaultValue:n="",onChange:a})=>c.jsxs("div",{className:"form-row",children:[c.jsx("label",{htmlFor:e,className:"form-label",children:t||e}),c.jsx("select",{className:"form-select",name:e,id:e,defaultValue:n,onChange:a,children:r.map(o=>c.jsx("option",{value:o,children:o},o))})]});Ct.propTypes={name:M.string,labelText:M.string,list:M.array,defaultValue:M.string};const ox=({members:e,groupId:t})=>c.jsx("div",{children:e.map(r=>{const{_id:n,firstName:a}=r;return c.jsx(Se,{method:"post",className:"links",action:`../delete-member/${t}/${n}`,children:c.jsxs("button",{type:"submit",className:"btn btn-links",children:["Delete: ",a]})},n)})});ox.propTypes={members:M.array,groupId:M.string};const ix=({groupId:e,user:t})=>c.jsx("div",{children:c.jsx(Se,{method:"post",action:`../delete-self/${e}/${t._id}`,className:"member-form",children:c.jsx("button",{type:"submit",className:"member-btn",children:t.firstName})})});ix.propTypes={groupId:M.string,user:M.object};const R5=()=>{const{data:{numOfPages:e,currentPage:t}}=Cr(),{search:r,pathname:n}=pr(),a=Hr(),o=Array.from({length:e},(s,l)=>l+1),i=s=>{const l=new URLSearchParams(r);l.set("page",s),a(`${n}?${l.toString()}`)};return c.jsxs(zh,{children:[c.jsxs("button",{className:"btn prev-btn",onClick:()=>{let s=t-1;s<1&&(s=e),i(s)},children:[c.jsx(wu,{}),"prev"]}),c.jsx("div",{className:"btn-container",children:o.map(s=>c.jsx("button",{className:`btn page-btn ${s===t&&"active"}`,onClick:()=>i(s),children:s},s))}),c.jsxs("button",{className:"btn next-btn",onClick:()=>{let s=t+1;s>e&&(s=1),i(s)},children:[c.jsx(bu,{}),"next"]})]})},sx=({members:e,subId:t,teamLeader:r})=>{const[n,a]=$.useState(!1),[o,i]=$.useState(""),[s,l]=$.useState(""),u=v=>{n===!1?(a(!n),i(v.target.firstChild.data),l(v.target.id)):(a(!n),i(""),l(""))},d=v=>{n===!0&&i(v.target.firstChild.data)},f=async()=>{var m,x;const y={memberId:s,groupId:t};try{await re.patch("/investment/user-group/update-teamleader",y),W.success(`${o} is now a team leader!`),i(""),l(""),window.location.reload()}catch(h){console.log(h),W.error((x=(m=h==null?void 0:h.response)==null?void 0:m.data)==null?void 0:x.msg),setTimeout(()=>{window.location.reload()},3e3)}},p=async()=>{var m,x;const y={memberId:s,groupId:t};try{await re.patch("/investment/user-group/remove-member",y),W.success(`${o} has been removed!`),i(""),l(""),window.location.reload()}catch(h){console.log(h),W.error((x=(m=h==null?void 0:h.response)==null?void 0:m.data)==null?void 0:x.msg),setTimeout(()=>{window.location.reload()},3e3)}};return c.jsxs("div",{children:[c.jsx("ul",{className:"list",children:e.map(v=>{const{_id:y,firstName:m}=v;return c.jsx("li",{id:y,className:y===r?"teamleader":"lists",onClick:u,children:m},y)})}),n?c.jsxs("div",{className:"btn-container",children:[c.jsx("p",{onClick:d,className:"useName",children:o}),c.jsxs("div",{className:"btns",children:[c.jsx("button",{type:"button",onClick:f,className:"update-btn",children:"make team leader"}),c.jsx("button",{type:"button",onClick:p,className:"update-btn",children:"remove member"})]})]}):null]})};sx.propTypes={members:M.array,subId:M.string,teamLeader:M.string};const lx=({subgroups:e})=>{const[t]=$.useState(e);return t.length===0?c.jsx("div",{children:c.jsx("h3",{className:"error-msg",children:"your not in a subgroup"})}):c.jsx("div",{className:"table-container",children:t.map(r=>{const{_id:n,subgroupName:a,members:o}=r;return c.jsxs("table",{children:[c.jsx("caption",{children:a}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"firstName"}),c.jsx("th",{children:"lastName"}),c.jsx("th",{children:"state"}),c.jsx("th",{children:"city"}),c.jsx("th",{children:"contact"})]})}),c.jsx("tbody",{children:o.map(i=>{const{_id:s,firstName:l,lastName:u,city:d,state:f}=i;return c.jsxs("tr",{children:[c.jsx("td",{"data-cell":"firstName",children:l}),c.jsx("td",{"data-cell":"lastName",children:u}),c.jsx("td",{"data-cell":"state",children:f}),c.jsx("td",{"data-cell":"city",children:d}),c.jsx("td",{"data-cell":"contact",children:c.jsx("button",{className:"link-btn",children:c.jsx(_e,{to:`../contact/${s}`,children:"contact me"})})})]},s)})})]},n)})})};lx.propTypes={member:M.object,subgroups:M.array};const cx=({groupMembers:e})=>{const[t]=$.useState(e);return t.length===0?c.jsx("div",{children:c.jsx("h3",{className:"error-msg",children:"no groups exists"})}):c.jsx("div",{className:"table-container",children:t.map(r=>{const{_id:n,subgroupName:a,members:o}=r;return c.jsxs("table",{children:[c.jsx("caption",{children:a}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"firstName"}),c.jsx("th",{children:"lastName"}),c.jsx("th",{children:"state"}),c.jsx("th",{children:"city"}),c.jsx("th",{children:"contact"})]})}),c.jsx("tbody",{children:o.map(i=>{const{_id:s,firstName:l,lastName:u,city:d,state:f}=i;return c.jsxs("tr",{children:[c.jsx("td",{"data-cell":"firstName",children:l}),c.jsx("td",{"data-cell":"lastName",children:u}),c.jsx("td",{"data-cell":"state",children:f}),c.jsx("td",{"data-cell":"city",children:d}),c.jsx("td",{"data-cell":"contact",children:c.jsx("button",{className:"link-btn",children:c.jsx(_e,{to:`../contact/${s}`,children:"contact me"})})})]},s)})})]},n)})})};cx.propTypes={member:M.object,groupMembers:M.array};const ux=({subgroup:e})=>e.length===0?c.jsx("div",{children:c.jsx("h2",{className:"error-msg",children:"no subgroup links"})}):c.jsxs("div",{className:"center",children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:"subgroup links"})}),c.jsx("div",{className:"article-section",children:e.map(t=>{const{_id:r,subgroupName:n,link:a}=t;return c.jsxs("article",{className:"article",children:[c.jsx("h3",{children:n}),c.jsx("a",{href:a,target:"_blank",children:c.jsx("h5",{children:a})})]},r)})})]});ux.propTypes={subgroup:M.array};const dx=({headline:e})=>e.length===0?c.jsx("div",{children:c.jsx("h2",{className:"error-msg",children:"no headline links"})}):c.jsxs("div",{className:"center",children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:"headline links"})}),c.jsx("div",{className:"article-section",children:e.map(t=>{const{_id:r,headline:n,link:a}=t;return c.jsxs("article",{className:"article",children:[c.jsx("h3",{children:n}),c.jsx("a",{href:a,target:"_blank",children:c.jsx("h5",{children:a})})]},r)})})]});dx.propTypes={headline:M.array};const fx=({user:e})=>{const{firstName:t,lastName:r,city:n,state:a,email:o,phoneNumber:i}=e;return c.jsx("div",{children:c.jsxs(Se,{method:"post",className:"form",children:[c.jsx("div",{className:"title",children:c.jsx("h3",{children:"Update Profile"})}),c.jsx(ve,{type:"text",name:"firstName",defaultValue:t}),c.jsx(ve,{type:"text",name:"lastName",defaultValue:r}),c.jsx(Ct,{type:"text",name:"state",list:Object.values(Uh),defaultValue:a}),c.jsx(ve,{type:"text",name:"city",defaultValue:n}),c.jsx(ve,{type:"email",name:"email",defaultValue:o}),c.jsx(ve,{type:"text",name:"phoneNumber",defaultValue:i}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"submit update"})]})})};fx.propTypes={user:M.object};const px=({group:e,user:t})=>{const[r,n]=$.useState(0);if(e.length===0)return c.jsx("div",{className:"error-msg",children:c.jsx("h2",{children:"you have not joined a investment group"})});const{groupName:a,investment:o,member:i}=e[r],s=()=>{n(u=>{const d=u-1;return d<0?e.length-1:d})},l=()=>{n(u=>{const d=u+1;return d>e.length-1?0:d})};return c.jsxs("div",{children:[c.jsxs("article",{className:"investment-article",children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:a})}),c.jsx("h2",{children:o}),i.map(u=>{const{_id:d,firstName:f,lastName:p,state:v,city:y,permission:m,uniqueName:x,createdBy:h}=u;if(!(d&&t._id!==h))return c.jsxs("ul",{className:"lists",children:[c.jsxs("li",{children:["firstName: ",f]}),c.jsxs("li",{children:["lastName: ",p]}),c.jsxs("li",{children:["uniqueName: ",x]}),c.jsxs("li",{children:["state: ",v]}),c.jsxs("li",{children:["city: ",y]}),c.jsxs("li",{children:["role: ",m.role]})]},d)})]}),c.jsxs("div",{className:"investment-btn-container",children:[c.jsx("button",{type:"button",className:"prev",onClick:s,children:c.jsx(gu,{})}),c.jsx("button",{type:"button",className:"next",onClick:l,children:c.jsx(yu,{})})]})]})};px.propTypes={group:M.array,user:M.object};const M5="/assets/facepic-D2_RSaBj.jpg",hx=({pic:e})=>c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"img-container",children:c.jsx("img",{src:M5,alt:"",className:"img"})}),c.jsx("div",{className:"btn-container",children:c.jsx("form",{action:"",children:c.jsx("input",{type:"file",name:"photo",id:"photo",className:"btn"})})})]});hx.propTypes={pic:M.object};const A5=()=>c.jsx("div",{children:"EducationProfile"}),L5=se.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;

  .btn-container {
    background: red;
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    border-radius: 10px;
    color: black;
    cursor: pointer;
  }
  .active {
    background: black;
    color: red;
  }
  .prev-btn,
  .next-btn {
    background: red;
    color: black;
    border-color: transparent;
    border-radius: 10px;
    width: 100px;
    height: 40px;
    text-transform: capitalize;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: black;
    color: red;
    transition: var(--transition);
  }
`,mx=({numOfPages:e,currentPage:t})=>{const r=Hr(),{search:n,pathname:a}=pr(),o=Array.from({length:e},(s,l)=>l+1),i=s=>{const l=new URLSearchParams(n);l.set("page",s),r(`${a}?${l.toString()}`)};return c.jsxs(L5,{children:[c.jsxs("button",{type:"button",className:" btn prev-btn",onClick:()=>{let s=t-1;s<1&&(s=e),i(s)},children:["prev",c.jsx(wu,{})]}),c.jsx("div",{className:"btn-container",children:o.map(s=>c.jsx("button",{className:`btn page-btn ${s===t&&"active"}`,onClick:()=>i(s),children:s},s))}),c.jsxs("button",{type:"button",className:" btn next-btn",onClick:()=>{let s=t+1;s>e&&(s=1),i(s)},children:["next",c.jsx(bu,{})]})]})};mx.propTypes={numOfPages:M.number,currentPage:M.number};const vx=({section:e,videoFunc:t})=>c.jsx("div",{children:e.map((r,n)=>c.jsx("div",{children:c.jsx(gx,{sections:r,videoFunc:t})},n))});vx.propTypes={section:M.array,videoFunc:M.func};const gx=({sections:e,videoFunc:t})=>{const[r,n]=$.useState(!1);return c.jsx("div",{children:e.map(a=>{const{_id:o,section:i,newFile:s}=a;return c.jsxs("div",{className:"course-section",children:[c.jsxs("button",{type:"button",onClick:()=>n(!r),className:"btn-block",children:[`section ${i}`,c.jsx(w5,{})]}),c.jsx("div",{className:r?"course-list show-list":"course-list",children:c.jsx(yx,{files:s,videoFunc:t})})]},o)})})};gx.propTypes={sections:M.array,videoFunc:M.func};const yx=({files:e,videoFunc:t})=>c.jsx("div",{children:c.jsx("ul",{className:"list-container",children:e.map(r=>{const{_id:n,title:a,src:o}=r;return c.jsxs("li",{className:"list",children:[c.jsx("p",{className:"title",children:a}),c.jsx("button",{type:"button",className:"icon",onClick:()=>t(o),children:c.jsx(c5,{})})]},n)})})});yx.propTypes={files:M.array,videoFunc:M.func};const wx=({video:e})=>c.jsx("div",{className:"video-container",children:c.jsx("video",{src:e,className:"video-file",controls:!0,autoPlay:!0})});wx.propTypes={video:M.string};function I5(e,t){if(t===e)return!1;const r=Object.values(t),n=Object.values(e);if(r.length!==n.length||r.some((o,i)=>o!==n[i]))return!0;const a=Object.keys(e);return Object.keys(t).some((o,i)=>o!==a[i])}function z5(e,t){return e.matches[t]=!1,e.mediaQueries[t]={},e}function bx(e){const t=Object.keys(e);return typeof window>"u"?t.reduce(z5,{mediaQueries:{},matches:{}}):t.reduce((r,n)=>{const a=window.matchMedia(e[n]);return r.mediaQueries[n]=a,r.matches[n]=a.matches,r},{mediaQueries:{},matches:{}})}function F5(e,t){function r(n,a){return n[a]=e.mediaQueries[a].matches,n}switch(t.type){case"updateMatches":return{matches:Object.keys(e.mediaQueries).reduce(r,{}),mediaQueries:e.mediaQueries};case"setQueries":return bx(t.queries)}}function U5(e){const t=$.useRef(e),[r,n]=$.useReducer(F5,e,bx);$.useEffect(()=>{I5(e,t.current)&&(n({type:"setQueries",queries:e}),t.current=e)},[e]);function a(){return n({type:"updateMatches"})}function o(l){const u=a;return typeof l.addListener<"u"?l.addListener(u):l.addEventListener("change",u),u}$.useEffect(()=>{const l=Object.values(r.mediaQueries),u=l.map(o);function d(f,p){typeof f.addListener<"u"?f.removeListener(u[p]):f.removeEventListener("change",u[p])}return()=>{l.forEach(d)}},[r.mediaQueries]);const{matches:i}=r,s=$.useMemo(()=>Object.values(i),[i]);return{matches:i,matchesAny:s.some(Boolean),matchesAll:s.length>0&&s.every(Boolean)}}function xx(e){return U5(B5(e)).matchesAll}const Rd={};function B5(e){return Rd[e]===void 0&&(Rd[e]={default:e}),Rd[e]}const Sx=({section:e,setSection:t,removeSection:r,setRemoveSection:n,file:a,setFile:o,removeFile:i,setRemoveFile:s})=>{const l=xx("only screen and (min-width:800px)"),u=()=>{n(!1),o(!1),s(!1),t(!e)},d=()=>{o(!1),s(!1),t(!1),n(!r)},f=()=>{s(!1),t(!1),n(!1),o(!a)},p=()=>{t(!1),n(!1),o(!1),s(!i)};return c.jsx("div",{children:l?c.jsxs("div",{className:"large-container",children:[c.jsx("button",{type:"button",className:"btn add-section",onClick:u,children:"add section"}),c.jsx("button",{type:"button",className:"btn remove-section",onClick:d,children:"remove section"}),c.jsx("button",{type:"button",className:"btn add-files",onClick:f,children:"add files"}),c.jsx("button",{type:"button",className:"btn remove-files",onClick:p,children:"remove files"})]}):c.jsxs("div",{className:"small-container",children:[c.jsx("button",{type:"button",className:"btn add-section",onClick:u,children:"add section"}),c.jsx("button",{type:"button",className:"btn remove-section",onClick:d,children:"remove section"}),c.jsx("button",{type:"button",className:"btn add-files",onClick:f,children:"add files"}),c.jsx("button",{type:"button",className:"btn remove-files",onClick:p,children:"remove files"})]})})};Sx.propTypes={section:M.bool,setSection:M.func,removeSection:M.bool,setRemoveSection:M.func,file:M.bool,setFile:M.func,removeFile:M.bool,setRemoveFile:M.func};const H5=()=>{const e=t=>{t.preventDefault();const r=new FormData(t.currentTarget),n=Object.fromEntries(r);console.log(n)};return c.jsx("div",{children:c.jsxs("form",{method:"POST",className:"form",onSubmit:e,children:[c.jsx("label",{htmlFor:"section",className:"form-label",children:"what section do you want to add?"}),c.jsx("input",{type:"number",name:"section",id:"section",className:"form-input",placeholder:"1"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"submit"})]})})},W5=()=>{const e=t=>{t.preventDefault();const r=new FormData(t.currentTarget),n=Object.fromEntries(r);console.log(n)};return c.jsx("div",{children:c.jsxs("form",{method:"POST",className:"form",onSubmit:e,children:[c.jsx("label",{htmlFor:"removeSection",className:"form-label",children:"what section do you want to remove?"}),c.jsx("input",{type:"number",name:"removeSection",id:"removeSection",className:"form-input",placeholder:"1"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"submit"})]})})},V5=()=>{const e=t=>{t.preventDefault();const r=t.target.files[0];new FormData().append("file",r)};return c.jsx("div",{children:c.jsxs("form",{method:"POST",className:"form",children:[c.jsx("label",{htmlFor:"file",className:"form-label",children:"what file do you want to add?"}),c.jsx("input",{type:"file",name:"file",id:"file",onChange:e,className:"form-input"}),c.jsx("label",{htmlFor:"section",className:"form-label",children:"what section do you want to add it too?"}),c.jsx("input",{type:"number",name:"section",id:"section",className:"form-input"}),c.jsx("button",{type:"button",className:"btn btn-block",children:"initalize file"}),c.jsx("button",{type:"button",className:"btn btn-block",children:"submit"})]})})},G5=()=>{const e=t=>{t.preventDefault();const r=t.target.files[0];new FormData().append("file",r)};return c.jsx("div",{children:c.jsxs("form",{method:"POST",className:"form",children:[c.jsx("label",{htmlFor:"file",className:"form-label",children:"what file do you want to remove?"}),c.jsx("input",{type:"file",name:"file",id:"file",onChange:e,className:"form-input"}),c.jsx("label",{htmlFor:"section",className:"form-label",children:"what section is this file in?"}),c.jsx("input",{type:"number",name:"section",id:"section",className:"form-input"}),c.jsx("button",{type:"button",className:"btn btn-block",children:"initalize file"}),c.jsx("button",{type:"button",className:"btn btn-block",children:"submit"})]})})},op=({course:e})=>{const t=e.map(r=>r.sections);return c.jsx("div",{children:t.map((r,n)=>c.jsx("div",{children:r.map(a=>{const{_id:o,section:i,files:s}=a;return c.jsxs("article",{className:"article",children:[c.jsx(kx,{section:i}),c.jsx(Ex,{files:s})]},o)})},n))})};op.propTypes={course:M.array};const Ex=({files:e})=>c.jsx("div",{className:"files",children:e.map(t=>{const{_id:r,title:n,src:a}=t;return c.jsx("div",{children:c.jsxs("div",{className:"title",children:[c.jsx("h3",{children:"files"}),c.jsxs("p",{children:["title:",n]}),c.jsxs("p",{children:["src:",a]})]})},r)})});Ex.propTypes={files:M.array};const kx=({section:e})=>c.jsxs("div",{children:[c.jsx("div",{className:"title",children:c.jsx("h3",{children:"sections"})}),c.jsx("ul",{children:c.jsx("li",{className:"list",children:`sections:${e}`})})]});kx.propTypes={section:M.number};const Y5=se.main`
  min-height: 100vh;
  background: black;

  .footer {
    background: red;
  }
  .footer h2 {
    color: black;
    text-align: center;
    margin-top: 2rem;
  }
`,K5=()=>c.jsxs(Y5,{children:[c.jsx(Wn,{}),c.jsx(y$,{})]}),q5=se.main`
  min-height: 100vh;
  background: black;
  /* img */
  .hero-section {
    height: calc(100vh - 5rem);
  }
  .attribution {
    visibility: hidden;
  }
  .attribution a:hover {
    color: white;
  }

  .hero-img {
    width: 100vw;
    display: block;
    background-repeat: no-repeat;
    object-fit: cover;
  }

  /* Article */

  .article-section {
    height: auto;
  }
  .article-title {
    color: red;
    font-size: 2rem;
    text-transform: capitalize;
    text-align: center;
  }
  .title-underline {
    width: 10rem;
    margin-top: 0.6rem;
    background: black;
    margin-bottom: 2rem;
  }
  .about-title {
    font-size: 4rem;
    margin: 0 auto;
    margin-bottom: 3rem;
    text-align: center;
    color: red;
    text-transform: uppercase;
  }
  .about-span {
    color: white;
  }
  .article {
    background: white;
    width: 90vw;
    margin: 0 auto;
    margin-bottom: 2rem;
    padding: 1.25rem 1rem;
    border-radius: 5px;
    border: 2px solid red;
  }
  .article-message {
    margin: 0 auto;
    line-height: 1.5;
    color: black;
    text-transform: capitalize;
  }
  /* End Of Article */
  /* Media Queries */
  @media (min-width: 800px) {
    /* img */
    .hero-section {
      height: calc(90vh - 5rem);
    }
    .attribution {
      visibility: visible;
    }
  }
  @media (min-width: 900px) {
    /* img */
    .hero-section {
      height: calc(90vh - 5rem);
    }
  }
  @media (min-width: 1170px) {
    /* img */
    .hero-section {
      height: calc(100vh - 5rem);
    }
  }
  @media (min-width: 1200px) {
    /* img */
    .article {
      width: auto;
    }
    #article-container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1300px) {
    /* img */
    .hero-section {
      height: calc(120vh - 5rem);
    }
  }
  @media (min-width: 1400px) {
    /* img */
    .hero-section {
      height: calc(140vh - 5rem);
    }
  }
  /* End Of Media Queries */
`,X5=()=>{const e=xx("only screen and (min-width:800px)");return c.jsxs(q5,{children:[c.jsx(uu,{header:"genocide",register:"register",login:"login"}),c.jsxs("div",{className:"hero-section",children:[e?c.jsx(Cb,{className:"hero-img"}):c.jsx(x$,{}),c.jsx("span",{className:"attribution",children:c.jsx("a",{href:"https://www.vecteezy.com/free-photos",target:"_blank",children:"Free Stock photos by Vecteezy"})})]}),c.jsxs("div",{className:"article-section",children:[c.jsx("div",{className:"title",children:c.jsxs("p",{className:"about-title",children:["about",c.jsx("span",{className:"about-span",children:"us"})]})}),c.jsxs("div",{id:"article-container",children:[c.jsx("div",{className:"article",children:c.jsx(Il,{title:"education",message:`this organization is huge on education, there are currently over 291 college degrees and we want them all! right now we need students and treasurers for these degrees:\r
             \r
            Game Art,\r
            Game Business & Esports,\r
            Game Design Undergraduate,\r
            Game Design Graduate,\r
            Game Development, Computer Animation\r
            Digital Arts & Design\r
            Graphic Design\r
            Media Design\r
            User Experience,\r
            Creative Writing\r
            Digital Cinematography\r
            Film\r
            Film Production\r
            Show Production\r
            Audio Production\r
            Music Production\r
            Recording Arts\r
            Computer Science Undergraduate\r
            Computer Science Graduate\r
            Cybersecurity\r
            Information Technology\r
            Simulation & Visualization\r
            Web Development\r
            Business Intelligence\r
            Digital Marketing Undergraduate\r
            Digital Marketing Graduate\r
            Entertainment Business Undergraduate\r
            Entertainment Business Graduate\r
            Game Business & Esports\r
            Innovation & Entrepreneurship\r
            Music Business. all this is from full sail university there are many more to get and this is called phase one!           \r
            `})}),c.jsx("div",{className:"article",children:c.jsx(Il,{title:"investments",message:"In genocide we  invest to start our own business's and we're working towards independence and sustain. We use a hive mind set to accomplish our goals, for example,  we are going to college for game development so it would make sense to own a game studio. We all fund the game studio untill we have one in every location till we all have access to one. Here is a guide to how we do that: {Game-Studio = 1,000,000/USD}, {Organization = 100,000/people}, {1,000,000 / 100,000 = 10/USD}. As you can see, it will only cost 10$/person to build a game studio. We place each studio in or around a two-hour radius for each state that the organization is in, and once each state has one we build more as needed till each person who wants to make games has a studio near them! This is just one example of hundred's  i can make. "})}),c.jsx("div",{className:"article",children:c.jsx(Il,{title:"competition",message:"A big part of this organization is our competition. There will be 100/people to a team, each team invest $10,000/month, each competition cost will be $1,000/competition. As you can see, each person invest $100/month and the prize money will be split by 1%/person totaling up to 100%! The prize money will be determined by how many teams are competing , {100,000/teams} * ${1,000} = $100,000,000. Since there are 100/people to a team then your cut is $1,000,000! Crazy Right!"})})]})]})]})},Q5=se.div`
  height: 110vh;
  margin: auto 0;
  background: whitesmoke;
  header {
    margin-top: 3rem;
  }
  .form {
    background: black;
  }
  .header {
    margin-bottom: 3rem;
  }
  .header h3 {
    color: red;
    text-align: center;
  }
  label {
    font-size: 1.2rem;
    color: red;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
  }
  input {
    background: white;
  }
  input::placeholder {
    color: red;
  }
  .btn {
    margin-top: 2rem;
  }
  .form-select {
    width: 100%;
    padding: 0.5rem 0;
    color: red;
  }
`,J5=async({request:e})=>{var n,a;const t=await e.formData(),r=Object.fromEntries(t);try{return await re.post("/user/register",r),W.success("You have Registered With Genocide!"),Ne("/login")}catch(o){return console.log(o),W.error((a=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:a.msg),o}},Z5=()=>{const t=Co().state==="submitting";return c.jsxs(Q5,{children:[c.jsx(uu,{header:"genocide",register:"register",login:"login"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx("div",{className:"header",children:c.jsx("h3",{children:"register"})}),c.jsx(ve,{type:"text",name:"firstName",placeholder:"FirstName"}),c.jsx(ve,{type:"text",name:"lastName",placeholder:"LastName"}),c.jsx(ve,{type:"email",name:"email",placeholder:"email"}),c.jsx(ve,{type:"password",name:"password",placeholder:"Password"}),c.jsx(Ct,{name:"state",list:Object.values(Uh)}),c.jsx(ve,{type:"text",name:"city",placeholder:"city"}),c.jsx(ve,{type:"text",name:"phoneNumber",placeholder:"xxx-xxx-xxxx"}),c.jsx("button",{type:"submit",className:"btn btn-block",disabled:t,children:t?"submitting":"submit"})]})]})},eC=se.main`
  min-height: 100vh;
  background: white;
  .form {
    margin: 10rem auto;
    background: black;
  }
  header {
    margin-top: 0.5rem;
  }
  .header h3 {
    color: red;
    text-align: center;
  }
  label {
    font-size: 1.2rem;
    color: red;
    margin-bottom: 1.2rem;
    margin-top: 1rem;
  }
  input {
    background: white;
  }
  input::placeholder {
    color: red;
  }
  .btn {
    margin-top: 2rem;
  }
`,tC=async({request:e})=>{var n,a;const t=await e.formData(),r=Object.fromEntries(t);try{return await re.post("/user/login",r),W.success("You Are Logged In!"),Ne("/dashboard")}catch(o){return W.error((a=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:a.msg),o}},rC=()=>{const t=Co().state==="submitting";return c.jsxs(eC,{children:[c.jsx(uu,{header:"genocide",register:"register",login:"login"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx("div",{className:"header",children:c.jsx("h3",{children:"login"})}),c.jsx(ve,{type:"email",name:"email",id:"email",placeholder:"Email"}),c.jsx(ve,{type:"password",name:"password",id:"password",placeholder:"Password..."}),c.jsx("button",{type:"submit",className:"btn btn-block",disabled:t,children:t?"submitting":"submit"})]})]})},nC=se.main`
  background: green;
`,aC=()=>c.jsx(nC,{children:c.jsx("div",{children:"version info"})}),jx=se.main`
  min-height: 100vh;

  span {
    color: red;
  }
  .form {
    width: 50vw;
    background: black;
  }
  label {
    color: red;
  }
  .form-label {
    color: red;
  }
  .form-input {
    background: white;
    color: red;
    margin-bottom: 1rem;
  }
  .form-select {
    width: 100%;
    padding: 0.3rem 0;
    color: red;
  }
  h6 {
    color: red;
  }
  .link {
    width: 100%;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
  }
  .desc {
    width: 100%;
    height: 10rem;
    margin-bottom: 1rem;
  }
  .btn:hover {
    color: red;
    background: black;
  }
`,oC={GENERAL:"general",MEET_UP:"meet up"},iC={GENERAL:"general",MEET_UP:"meet up",CONGRATZ:"congratulations"},sC=async({request:e})=>{var n,a;const t=await e.formData(),r=Object.fromEntries(t);try{return await re.post("/dash/create-headline/",r),W.success("New Headline Created!"),window.location.reload(),Ne("../dashboard")}catch(o){return console.log(o),W.error((a=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:a.msg),o}},lC=()=>c.jsx(jx,{children:c.jsxs("div",{className:"section-center",children:[c.jsx("div",{className:"title",children:c.jsxs("h2",{children:["create ",c.jsx("span",{children:"headline"})]})}),c.jsx("div",{className:"title-underline"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(Ct,{name:"category",list:[...Object.values(iC)]}),c.jsx(ve,{type:"text",name:"headline",placeholder:"happy hour"}),c.jsx("label",{htmlFor:"link",children:"URL Link"}),c.jsx("input",{className:"link",id:"link",type:"url",name:"link",placeholder:"https://discord.gg/afhpsZgV"}),c.jsx("br",{}),c.jsx("h6",{children:"descritpion"}),c.jsx("textarea",{name:"desc",placeholder:"write here",className:"desc"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"create headline"})]})]})}),cC=se.main`
  min-height: 100vh;
  .section-center {
    margin: 0 auto;
    width: 60vw;
    max-width: 1170px;
  }
  .article {
    margin: 1rem auto;
    padding: 1rem 1.25rem;
    border: 2px solid red;
    border-radius: 10px;
    background: black;
    min-height: 600px;
    max-width: 400px;
  }
  .category {
    text-align: center;
    color: red;
    margin-bottom: 1rem;
  }
  .headline {
    text-align: center;
    color: red;
    margin-bottom: 1rem;
  }
  .desc {
    margin: 0 auto;
    text-align: center;
    margin-bottom: 1rem;
    color: white;
  }
  .desc p {
    color: white;
    text-transform: capitalize;
    line-height: 1.2;
    margin-bottom: 2rem;
  }
  .link {
    color: red;
    text-align: center;
    margin-bottom: 1rem;
  }
  a {
    color: red;
    text-decoration: none;
  }
  @media (min-width: 2000px) {
    .section-center {
      margin: 0;
      width: 70vw;
      max-width: 2000px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`,uC=async({request:e})=>{const t=Object.fromEntries([...new URL(e.url).searchParams.entries()]);try{const{data:r}=await re.get("/dash/view-headline",{params:t});return r}catch(r){return r}},dC=()=>{const{viewHeadline:e,numOfPages:t,currentPage:r}=Ce();return c.jsx(cC,{children:c.jsxs("div",{className:"section-center",children:[e.map(n=>{const{_id:a,category:o,headline:i,desc:s,link:l}=n;return c.jsxs("article",{className:"article",children:[c.jsx("h3",{className:"category",children:o}),c.jsx("h5",{className:"headline",children:i}),c.jsx("div",{className:"desc",children:c.jsx("p",{children:s})}),c.jsx("p",{className:"link",children:c.jsx("a",{href:l,target:"_blank",children:l})})]},a)}),c.jsx("div",{className:"btn-container",children:t>1?c.jsx(mx,{numOfPages:t,currentPage:r}):null})]})})},$x=se.main`
  min-height: 100vh;

  span {
    color: red;
  }
  .form {
    width: 50vw;
    background: black;
  }
  label {
    color: red;
  }
  .form-label {
    color: red;
  }
  .form-input {
    background: white;
    color: red;
    margin-bottom: 0.5rem;
  }
  .form-select {
    width: 100%;
    padding: 0.3rem 0;
    color: red;
  }
  h6 {
    color: red;
  }
  .desc {
    width: 100%;
    height: 10rem;
    margin-bottom: 1rem;
  }
  .btn:hover {
    color: red;
    background: black;
  }
`,fC=async({request:e})=>{var n,a;const t=await e.formData(),r=Object.fromEntries(t);try{return await re.post("/dash/create-schedule",r),W.success("This Schedule Has Been Created!"),Ne("../")}catch(o){return console.log(o),W.error((a=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:a.msg),o}},pC=()=>c.jsxs($x,{children:[c.jsx("div",{className:"title",children:c.jsxs("h1",{children:["create ",c.jsx("span",{children:"schedule"})]})}),c.jsx("div",{className:"title-underline"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(ve,{type:"text",name:"title",placeholder:"title"}),c.jsx(ve,{type:"date",name:"start"}),c.jsx(ve,{type:"time",name:"start_time"}),c.jsx(ve,{type:"date",name:"end"}),c.jsx(ve,{type:"time",name:"end_time"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"create schedule"})]})]});function sn(e){"@babel/helpers - typeof";return sn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sn(e)}function hC(e,t){if(sn(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(sn(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nx(e){var t=hC(e,"string");return sn(t)=="symbol"?t:t+""}function ea(e,t,r){return(t=Nx(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Hg(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),r.push.apply(r,n)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Hg(Object(r),!0).forEach(function(n){ea(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Hg(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function xu(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function Ur(e,t){if(e==null)return{};var r,n,a=xu(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function ut(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Wg(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Nx(n.key),n)}}function dt(e,t,r){return t&&Wg(e.prototype,t),r&&Wg(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function $c(e){return $c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$c(e)}function Cx(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Cx=function(){return!!e})()}function mC(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function vC(e,t){if(t&&(sn(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return mC(e)}function Tt(e,t,r){return t=$c(t),vC(e,Cx()?Reflect.construct(t,r||[],$c(e).constructor):t.apply(e,r))}function Nc(e,t){return Nc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},Nc(e,t)}function _t(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Nc(e,t)}function Dx(e){if(Array.isArray(e))return e}function gC(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,o,i,s=[],l=!0,u=!1;try{if(o=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);l=!0);}catch(d){u=!0,a=d}finally{try{if(!l&&r.return!=null&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw a}}return s}}function ip(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function Bh(e,t){if(e){if(typeof e=="string")return ip(e,t);var r={}.toString.call(e).slice(8,-1);return r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set"?Array.from(e):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ip(e,t):void 0}}function Ox(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jr(e,t){return Dx(e)||gC(e,t)||Bh(e,t)||Ox()}function Ke(){return Ke=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ke.apply(null,arguments)}var yC=function(e,t,r,n,a,o,i,s){if(!e){var l;if(t===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,n,a,o,i,s],d=0;l=new Error(t.replace(/%s/g,function(){return u[d++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},wC=yC;const Ji=qe(wC);var bC=function(){};function xC(e,t){var r={};return Object.keys(e).forEach(function(n){r[Bl(n)]=bC}),r}function Vg(e,t){return e[t]!==void 0}function Bl(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function SC(e){return!!e&&(typeof e!="function"||e.prototype&&e.prototype.isReactComponent)}function EC(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Nc(e,t)}function Tx(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function _x(e){function t(r){var n=this.constructor.getDerivedStateFromProps(e,r);return n??null}this.setState(t.bind(this))}function Px(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}Tx.__suppressDeprecationWarning=!0;_x.__suppressDeprecationWarning=!0;Px.__suppressDeprecationWarning=!0;function kC(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var r=null,n=null,a=null;if(typeof t.componentWillMount=="function"?r="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?n="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(n="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?a="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(a="UNSAFE_componentWillUpdate"),r!==null||n!==null||a!==null){var o=e.displayName||e.name,i=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+o+" uses "+i+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Tx,t.componentWillReceiveProps=_x),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Px;var s=t.componentDidUpdate;t.componentDidUpdate=function(u,d,f){var p=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;s.call(this,u,d,p)}}return e}var jC="/Users/jquense/src/uncontrollable/src/uncontrollable.js";function Rx(e,t,r){r===void 0&&(r=[]);var n=e.displayName||e.name||"Component",a=SC(e),o=Object.keys(t),i=o.map(Bl);a||!r.length||Ji(!1);var s=function(u){EC(d,u);function d(){for(var p,v=arguments.length,y=new Array(v),m=0;m<v;m++)y[m]=arguments[m];p=u.call.apply(u,[this].concat(y))||this,p.handlers=Object.create(null),o.forEach(function(h){var g=t[h],w=function(b){if(p.props[g]){var E;p._notifying=!0;for(var j=arguments.length,k=new Array(j>1?j-1:0),D=1;D<j;D++)k[D-1]=arguments[D];(E=p.props)[g].apply(E,[b].concat(k)),p._notifying=!1}p.unmounted||p.setState(function(O){var R,Q=O.values;return{values:Ke(Object.create(null),Q,(R={},R[h]=b,R))}})};p.handlers[g]=w}),r.length&&(p.attachRef=function(h){p.inner=h});var x=Object.create(null);return o.forEach(function(h){x[h]=p.props[Bl(h)]}),p.state={values:x,prevProps:{}},p}var f=d.prototype;return f.shouldComponentUpdate=function(){return!this._notifying},d.getDerivedStateFromProps=function(v,y){var m=y.values,x=y.prevProps,h={values:Ke(Object.create(null),m),prevProps:{}};return o.forEach(function(g){h.prevProps[g]=v[g],!Vg(v,g)&&Vg(x,g)&&(h.values[g]=v[Bl(g)])}),h},f.componentWillUnmount=function(){this.unmounted=!0},f.render=function(){var v=this,y=this.props,m=y.innerRef,x=xu(y,["innerRef"]);i.forEach(function(g){delete x[g]});var h={};return o.forEach(function(g){var w=v.props[g];h[g]=w!==void 0?w:v.state.values[g]}),C.createElement(e,Ke({},x,h,this.handlers,{ref:m||this.attachRef}))},d}(C.Component);kC(s),s.displayName="Uncontrolled("+n+")",s.propTypes=Ke({innerRef:function(){}},xC(t)),r.forEach(function(u){s.prototype[u]=function(){var f;return(f=this.inner)[u].apply(f,arguments)}});var l=s;return C.forwardRef&&(l=C.forwardRef(function(u,d){return C.createElement(s,Ke({},u,{innerRef:d,__source:{fileName:jC,lineNumber:128},__self:this}))}),l.propTypes=s.propTypes),l.ControlledComponent=e,l.deferControlTo=function(u,d,f){return d===void 0&&(d={}),Rx(u,Ke({},t,d),f)},l}function Mx(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=Mx(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function it(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=Mx(e))&&(n&&(n+=" "),n+=t);return n}var Cc="milliseconds",Zi="seconds",es="minutes",ts="hours",wa="day",wo="week",rs="month",ba="year",xa="decade",Sa="century",Ax={milliseconds:1,seconds:1e3,minutes:60*1e3,hours:60*60*1e3,day:24*60*60*1e3,week:7*24*60*60*1e3},$C={month:1,year:12,decade:10*12,century:100*12};function NC(e){return[31,CC(e),31,30,31,30,31,31,30,31,30,31]}function CC(e){return e%4===0&&e%100!==0||e%400===0?29:28}function $r(e,t,r){switch(e=new Date(e),r){case Cc:case Zi:case es:case ts:case wa:case wo:return DC(e,t*Ax[r]);case rs:case ba:case xa:case Sa:return OC(e,t*$C[r])}throw new TypeError('Invalid units: "'+r+'"')}function DC(e,t){var r=new Date(+e+t);return TC(e,r)}function OC(e,t){var r=e.getFullYear(),n=e.getMonth(),a=e.getDate(),o=r*12+n+t,i=Math.trunc(o/12),s=o%12,l=Math.min(a,NC(i)[s]),u=new Date(e);return u.setFullYear(i),u.setDate(1),u.setMonth(s),u.setDate(l),u}function TC(e,t){var r=e.getTimezoneOffset(),n=t.getTimezoneOffset(),a=n-r;return new Date(+t+a*Ax.minutes)}function ns(e,t,r){return $r(e,-t,r)}function gt(e,t,r){switch(e=new Date(e),t){case Sa:case xa:case ba:e=Oc(e,0);case rs:e=Ux(e,1);case wo:case wa:e=is(e,0);case ts:e=bo(e,0);case es:e=os(e,0);case Zi:e=as(e,0)}return t===xa&&(e=ns(e,Ea(e)%10,"year")),t===Sa&&(e=ns(e,Ea(e)%100,"year")),t===wo&&(e=Bx(e,0,r)),e}function Dc(e,t,r){switch(e=new Date(e),e=gt(e,t,r),t){case Sa:case xa:case ba:case rs:case wo:e=$r(e,1,t),e=ns(e,1,wa),e.setHours(23,59,59,999);break;case wa:e.setHours(23,59,59,999);break;case ts:case es:case Zi:e=$r(e,1,t),e=ns(e,1,Cc)}return e}var ks=_o(function(e,t){return e===t}),Hh=_o(function(e,t){return e!==t}),Su=_o(function(e,t){return e>t}),js=_o(function(e,t){return e>=t}),Wh=_o(function(e,t){return e<t}),To=_o(function(e,t){return e<=t});function Lx(){return new Date(Math.min.apply(Math,arguments))}function Ix(){return new Date(Math.max.apply(Math,arguments))}function zx(e,t,r,n){return n=n||"day",(!t||js(e,t,n))&&(!r||To(e,r,n))}var as=Vn("Milliseconds"),os=Vn("Seconds"),bo=Vn("Minutes"),is=Vn("Hours"),Fx=Vn("Day"),Ux=Vn("Date"),Oc=Vn("Month"),Ea=Vn("FullYear");function _C(e,t){return t===void 0?Ea(gt(e,xa)):$r(e,t+10,ba)}function PC(e,t){return t===void 0?Ea(gt(e,Sa)):$r(e,t+100,ba)}function Bx(e,t,r){var n=(Fx(e)+7-(r||0))%7;return t===void 0?n:$r(e,t-n,wa)}function RC(e,t,r,n){var a,o,i;switch(r){case Cc:case Zi:case es:case ts:case wa:case wo:a=t.getTime()-e.getTime();break;case rs:case ba:case xa:case Sa:a=(Ea(t)-Ea(e))*12+Oc(t)-Oc(e);break;default:throw new TypeError('Invalid units: "'+r+'"')}switch(r){case Cc:o=1;break;case Zi:o=1e3;break;case es:o=1e3*60;break;case ts:o=1e3*60*60;break;case wa:o=1e3*60*60*24;break;case wo:o=1e3*60*60*24*7;break;case rs:o=1;break;case ba:o=12;break;case xa:o=120;break;case Sa:o=1200;break;default:throw new TypeError('Invalid units: "'+r+'"')}return i=a/o,n?i:Math.round(i)}function Vn(e){var t=function(r){switch(r){case"Milliseconds":return 36e5;case"Seconds":return 3600;case"Minutes":return 60;case"Hours":return 1;default:return null}}(e);return function(r,n){if(n===void 0)return r["get"+e]();var a=new Date(r);return a["set"+e](n),t&&a["get"+e]()!=n&&(e==="Hours"||n>=t&&a.getHours()-r.getHours()<Math.floor(n/t))&&a["set"+e](n+t),a}}function _o(e){return function(t,r,n){return e(+gt(t,n),+gt(r,n))}}const Gg=Object.freeze(Object.defineProperty({__proto__:null,add:$r,century:PC,date:Ux,day:Fx,decade:_C,diff:RC,endOf:Dc,eq:ks,gt:Su,gte:js,hours:is,inRange:zx,lt:Wh,lte:To,max:Ix,milliseconds:as,min:Lx,minutes:bo,month:Oc,neq:Hh,seconds:os,startOf:gt,subtract:ns,weekday:Bx,year:Ea},Symbol.toStringTag,{value:"Module"}));function MC(e){if(Array.isArray(e))return ip(e)}function Hx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function AC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hl(e){return MC(e)||Hx(e)||Bh(e)||AC()}function LC(e,t,r){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),r=r>a?a:r,r<0&&(r+=a),a=t>r?0:r-t>>>0,t>>>=0;for(var o=Array(a);++n<a;)o[n]=e[n+t];return o}var Wx=LC;function IC(e,t){return e===t||e!==e&&t!==t}var $s=IC,zC=typeof nr=="object"&&nr&&nr.Object===Object&&nr,Vx=zC,FC=Vx,UC=typeof self=="object"&&self&&self.Object===Object&&self,BC=FC||UC||Function("return this")(),Vr=BC,HC=Vr,WC=HC.Symbol,Po=WC,Yg=Po,Gx=Object.prototype,VC=Gx.hasOwnProperty,GC=Gx.toString,si=Yg?Yg.toStringTag:void 0;function YC(e){var t=VC.call(e,si),r=e[si];try{e[si]=void 0;var n=!0}catch{}var a=GC.call(e);return n&&(t?e[si]=r:delete e[si]),a}var KC=YC,qC=Object.prototype,XC=qC.toString;function QC(e){return XC.call(e)}var JC=QC,Kg=Po,ZC=KC,e8=JC,t8="[object Null]",r8="[object Undefined]",qg=Kg?Kg.toStringTag:void 0;function n8(e){return e==null?e===void 0?r8:t8:qg&&qg in Object(e)?ZC(e):e8(e)}var Ro=n8;function a8(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var un=a8,o8=Ro,i8=un,s8="[object AsyncFunction]",l8="[object Function]",c8="[object GeneratorFunction]",u8="[object Proxy]";function d8(e){if(!i8(e))return!1;var t=o8(e);return t==l8||t==c8||t==s8||t==u8}var Vh=d8,f8=9007199254740991;function p8(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=f8}var Gh=p8,h8=Vh,m8=Gh;function v8(e){return e!=null&&m8(e.length)&&!h8(e)}var Ns=v8,g8=9007199254740991,y8=/^(?:0|[1-9]\d*)$/;function w8(e,t){var r=typeof e;return t=t??g8,!!t&&(r=="number"||r!="symbol"&&y8.test(e))&&e>-1&&e%1==0&&e<t}var Yh=w8,b8=$s,x8=Ns,S8=Yh,E8=un;function k8(e,t,r){if(!E8(r))return!1;var n=typeof t;return(n=="number"?x8(r)&&S8(t,r.length):n=="string"&&t in r)?b8(r[t],e):!1}var Eu=k8,j8=/\s/;function $8(e){for(var t=e.length;t--&&j8.test(e.charAt(t)););return t}var N8=$8,C8=N8,D8=/^\s+/;function O8(e){return e&&e.slice(0,C8(e)+1).replace(D8,"")}var T8=O8;function _8(e){return e!=null&&typeof e=="object"}var Gn=_8,P8=Ro,R8=Gn,M8="[object Symbol]";function A8(e){return typeof e=="symbol"||R8(e)&&P8(e)==M8}var Cs=A8,L8=T8,Xg=un,I8=Cs,Qg=NaN,z8=/^[-+]0x[0-9a-f]+$/i,F8=/^0b[01]+$/i,U8=/^0o[0-7]+$/i,B8=parseInt;function H8(e){if(typeof e=="number")return e;if(I8(e))return Qg;if(Xg(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Xg(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=L8(e);var r=F8.test(e);return r||U8.test(e)?B8(e.slice(2),r?2:8):z8.test(e)?Qg:+e}var W8=H8,V8=W8,Jg=1/0,G8=17976931348623157e292;function Y8(e){if(!e)return e===0?e:0;if(e=V8(e),e===Jg||e===-Jg){var t=e<0?-1:1;return t*G8}return e===e?e:0}var Yx=Y8,K8=Yx;function q8(e){var t=K8(e),r=t%1;return t===t?r?t-r:t:0}var Kx=q8,X8=Wx,Q8=Eu,J8=Kx,Z8=Math.ceil,eD=Math.max;function tD(e,t,r){(r?Q8(e,t,r):t===void 0)?t=1:t=eD(J8(t),0);var n=e==null?0:e.length;if(!n||t<1)return[];for(var a=0,o=0,i=Array(Z8(n/t));a<n;)i[o++]=X8(e,a,a+=t);return i}var rD=tD;const nD=qe(rD);function Ds(e){return e&&e.ownerDocument||document}function aD(e){var t=Ds(e);return t&&t.defaultView||window}function oD(e,t){return aD(e).getComputedStyle(e,t)}var iD=/([A-Z])/g;function sD(e){return e.replace(iD,"-$1").toLowerCase()}var lD=/^ms-/;function pl(e){return sD(e).replace(lD,"-ms-")}var cD=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function uD(e){return!!(e&&cD.test(e))}function La(e,t){var r="",n="";if(typeof t=="string")return e.style.getPropertyValue(pl(t))||oD(e).getPropertyValue(pl(t));Object.keys(t).forEach(function(a){var o=t[a];!o&&o!==0?e.style.removeProperty(pl(a)):uD(a)?n+=a+"("+o+") ":r+=pl(a)+": "+o+";"}),n&&(r+="transform: "+n+";"),e.style.cssText+=";"+r}function ss(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function dD(e){return"nodeType"in e&&e.nodeType===document.DOCUMENT_NODE}function Kh(e){return"window"in e&&e.window===e?e:dD(e)&&e.defaultView||!1}function qx(e){var t=e==="pageXOffset"?"scrollLeft":"scrollTop";function r(n,a){var o=Kh(n);if(a===void 0)return o?o[e]:n[t];o?o.scrollTo(o[e],a):n[t]=a}return r}const Xx=qx("pageXOffset"),Qx=qx("pageYOffset");function fa(e){var t=Ds(e),r={top:0,left:0,height:0,width:0},n=t&&t.documentElement;return!n||!ss(n,e)||(e.getBoundingClientRect!==void 0&&(r=e.getBoundingClientRect()),r={top:r.top+Qx(n)-(n.clientTop||0),left:r.left+Xx(n)-(n.clientLeft||0),width:r.width,height:r.height}),r}var fD=function(t){return!!t&&"offsetParent"in t};function pD(e){for(var t=Ds(e),r=e&&e.offsetParent;fD(r)&&r.nodeName!=="HTML"&&La(r,"position")==="static";)r=r.offsetParent;return r||t.documentElement}var hD=function(t){return t.nodeName&&t.nodeName.toLowerCase()};function Jx(e,t){var r={top:0,left:0},n;if(La(e,"position")==="fixed")n=e.getBoundingClientRect();else{var a=t||pD(e);n=fa(e),hD(a)!=="html"&&(r=fa(a));var o=String(La(a,"borderTopWidth")||0);r.top+=parseInt(o,10)-Qx(a)||0;var i=String(La(a,"borderLeftWidth")||0);r.left+=parseInt(i,10)-Xx(a)||0}var s=String(La(e,"marginTop")||0),l=String(La(e,"marginLeft")||0);return Ke({},n,{top:n.top-r.top-(parseInt(s,10)||0),left:n.left-r.left-(parseInt(l,10)||0)})}const qh=!!(typeof window<"u"&&window.document&&window.document.createElement);var Zg=new Date().getTime();function mD(e){var t=new Date().getTime(),r=Math.max(0,16-(t-Zg)),n=setTimeout(e,r);return Zg=t,n}var vD=["","webkit","moz","o","ms"],sp="clearTimeout",lp=mD,e1=function(t,r){return t+(t?r[0].toUpperCase()+r.substr(1):r)+"AnimationFrame"};qh&&vD.some(function(e){var t=e1(e,"request");return t in window&&(sp=e1(e,"cancel"),lp=function(n){return window[t](n)}),!!lp});var t1=function(t){typeof window[sp]=="function"&&window[sp](t)},Zx=lp,Md;function gD(e,t){if(!Md){var r=document.body,n=r.matches||r.matchesSelector||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector;Md=function(o,i){return n.call(o,i)}}return Md(e,t)}var yD=Function.prototype.bind.call(Function.prototype.call,[].slice);function wD(e,t){return yD(e.querySelectorAll(t))}var cp=!1,up=!1;try{var Ad={get passive(){return cp=!0},get once(){return up=cp=!0}};qh&&(window.addEventListener("test",Ad,Ad),window.removeEventListener("test",Ad,!0))}catch{}function bD(e,t,r,n){if(n&&typeof n!="boolean"&&!up){var a=n.once,o=n.capture,i=r;!up&&a&&(i=r.__once||function s(l){this.removeEventListener(t,s,o),r.call(this,l)},r.__once=i),e.addEventListener(t,i,cp?n:o)}e.addEventListener(t,r,n)}function xD(e){const t=$.useRef(e);return $.useEffect(()=>{t.current=e},[e]),t}function r1(e){const t=xD(e);return $.useCallback(function(...r){return t.current&&t.current(...r)},[t])}function n1(){return $.useState(null)}function SD(){const e=$.useRef(!0),t=$.useRef(()=>e.current);return $.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),t.current}function ED(e){const t=SD();return[e[0],$.useCallback(r=>{if(t())return e[1](r)},[t,e[1]])]}var zt="top",dr="bottom",fr="right",Ft="left",Xh="auto",Os=[zt,dr,fr,Ft],xo="start",ls="end",kD="clippingParents",e2="viewport",li="popper",jD="reference",a1=Os.reduce(function(e,t){return e.concat([t+"-"+xo,t+"-"+ls])},[]),Qh=[].concat(Os,[Xh]).reduce(function(e,t){return e.concat([t,t+"-"+xo,t+"-"+ls])},[]),$D="beforeRead",ND="read",CD="afterRead",DD="beforeMain",OD="main",TD="afterMain",_D="beforeWrite",PD="write",RD="afterWrite",MD=[$D,ND,CD,DD,OD,TD,_D,PD,RD];function zr(e){return e.split("-")[0]}function qt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ka(e){var t=qt(e).Element;return e instanceof t||e instanceof Element}function Fr(e){var t=qt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Jh(e){if(typeof ShadowRoot>"u")return!1;var t=qt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var pa=Math.max,Tc=Math.min,So=Math.round;function dp(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function t2(){return!/^((?!chrome|android).)*safari/i.test(dp())}function Eo(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&Fr(e)&&(a=e.offsetWidth>0&&So(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&So(n.height)/e.offsetHeight||1);var i=ka(e)?qt(e):window,s=i.visualViewport,l=!t2()&&r,u=(n.left+(l&&s?s.offsetLeft:0))/a,d=(n.top+(l&&s?s.offsetTop:0))/o,f=n.width/a,p=n.height/o;return{width:f,height:p,top:d,right:u+f,bottom:d+p,left:u,x:u,y:d}}function Zh(e){var t=Eo(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function r2(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Jh(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function In(e){return e?(e.nodeName||"").toLowerCase():null}function ln(e){return qt(e).getComputedStyle(e)}function AD(e){return["table","td","th"].indexOf(In(e))>=0}function Yn(e){return((ka(e)?e.ownerDocument:e.document)||window.document).documentElement}function ku(e){return In(e)==="html"?e:e.assignedSlot||e.parentNode||(Jh(e)?e.host:null)||Yn(e)}function o1(e){return!Fr(e)||ln(e).position==="fixed"?null:e.offsetParent}function LD(e){var t=/firefox/i.test(dp()),r=/Trident/i.test(dp());if(r&&Fr(e)){var n=ln(e);if(n.position==="fixed")return null}var a=ku(e);for(Jh(a)&&(a=a.host);Fr(a)&&["html","body"].indexOf(In(a))<0;){var o=ln(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function Ts(e){for(var t=qt(e),r=o1(e);r&&AD(r)&&ln(r).position==="static";)r=o1(r);return r&&(In(r)==="html"||In(r)==="body"&&ln(r).position==="static")?t:r||LD(e)||t}function em(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ci(e,t,r){return pa(e,Tc(t,r))}function ID(e,t,r){var n=Ci(e,t,r);return n>r?r:n}function n2(){return{top:0,right:0,bottom:0,left:0}}function a2(e){return Object.assign({},n2(),e)}function o2(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var zD=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,a2(typeof t!="number"?t:o2(t,Os))};function FD(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,i=r.modifiersData.popperOffsets,s=zr(r.placement),l=em(s),u=[Ft,fr].indexOf(s)>=0,d=u?"height":"width";if(!(!o||!i)){var f=zD(a.padding,r),p=Zh(o),v=l==="y"?zt:Ft,y=l==="y"?dr:fr,m=r.rects.reference[d]+r.rects.reference[l]-i[l]-r.rects.popper[d],x=i[l]-r.rects.reference[l],h=Ts(o),g=h?l==="y"?h.clientHeight||0:h.clientWidth||0:0,w=m/2-x/2,S=f[v],b=g-p[d]-f[y],E=g/2-p[d]/2+w,j=Ci(S,E,b),k=l;r.modifiersData[n]=(t={},t[k]=j,t.centerOffset=j-E,t)}}function UD(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||r2(t.elements.popper,a)&&(t.elements.arrow=a))}const BD={name:"arrow",enabled:!0,phase:"main",fn:FD,effect:UD,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ko(e){return e.split("-")[1]}var HD={top:"auto",right:"auto",bottom:"auto",left:"auto"};function WD(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:So(r*a)/a||0,y:So(n*a)/a||0}}function i1(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,d=e.roundOffsets,f=e.isFixed,p=i.x,v=p===void 0?0:p,y=i.y,m=y===void 0?0:y,x=typeof d=="function"?d({x:v,y:m}):{x:v,y:m};v=x.x,m=x.y;var h=i.hasOwnProperty("x"),g=i.hasOwnProperty("y"),w=Ft,S=zt,b=window;if(u){var E=Ts(r),j="clientHeight",k="clientWidth";if(E===qt(r)&&(E=Yn(r),ln(E).position!=="static"&&s==="absolute"&&(j="scrollHeight",k="scrollWidth")),E=E,a===zt||(a===Ft||a===fr)&&o===ls){S=dr;var D=f&&E===b&&b.visualViewport?b.visualViewport.height:E[j];m-=D-n.height,m*=l?1:-1}if(a===Ft||(a===zt||a===dr)&&o===ls){w=fr;var O=f&&E===b&&b.visualViewport?b.visualViewport.width:E[k];v-=O-n.width,v*=l?1:-1}}var R=Object.assign({position:s},u&&HD),Q=d===!0?WD({x:v,y:m},qt(r)):{x:v,y:m};if(v=Q.x,m=Q.y,l){var X;return Object.assign({},R,(X={},X[S]=g?"0":"",X[w]=h?"0":"",X.transform=(b.devicePixelRatio||1)<=1?"translate("+v+"px, "+m+"px)":"translate3d("+v+"px, "+m+"px, 0)",X))}return Object.assign({},R,(t={},t[S]=g?m+"px":"",t[w]=h?v+"px":"",t.transform="",t))}function VD(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,i=o===void 0?!0:o,s=r.roundOffsets,l=s===void 0?!0:s,u={placement:zr(t.placement),variation:ko(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,i1(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,i1(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const GD={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:VD,data:{}};var hl={passive:!0};function YD(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,i=n.resize,s=i===void 0?!0:i,l=qt(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach(function(d){d.addEventListener("scroll",r.update,hl)}),s&&l.addEventListener("resize",r.update,hl),function(){o&&u.forEach(function(d){d.removeEventListener("scroll",r.update,hl)}),s&&l.removeEventListener("resize",r.update,hl)}}const KD={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:YD,data:{}};var qD={left:"right",right:"left",bottom:"top",top:"bottom"};function Wl(e){return e.replace(/left|right|bottom|top/g,function(t){return qD[t]})}var XD={start:"end",end:"start"};function s1(e){return e.replace(/start|end/g,function(t){return XD[t]})}function tm(e){var t=qt(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function rm(e){return Eo(Yn(e)).left+tm(e).scrollLeft}function QD(e,t){var r=qt(e),n=Yn(e),a=r.visualViewport,o=n.clientWidth,i=n.clientHeight,s=0,l=0;if(a){o=a.width,i=a.height;var u=t2();(u||!u&&t==="fixed")&&(s=a.offsetLeft,l=a.offsetTop)}return{width:o,height:i,x:s+rm(e),y:l}}function JD(e){var t,r=Yn(e),n=tm(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=pa(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),i=pa(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+rm(e),l=-n.scrollTop;return ln(a||r).direction==="rtl"&&(s+=pa(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:i,x:s,y:l}}function nm(e){var t=ln(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function i2(e){return["html","body","#document"].indexOf(In(e))>=0?e.ownerDocument.body:Fr(e)&&nm(e)?e:i2(ku(e))}function Di(e,t){var r;t===void 0&&(t=[]);var n=i2(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=qt(n),i=a?[o].concat(o.visualViewport||[],nm(n)?n:[]):n,s=t.concat(i);return a?s:s.concat(Di(ku(i)))}function fp(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ZD(e,t){var r=Eo(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function l1(e,t,r){return t===e2?fp(QD(e,r)):ka(t)?ZD(t,r):fp(JD(Yn(e)))}function eO(e){var t=Di(ku(e)),r=["absolute","fixed"].indexOf(ln(e).position)>=0,n=r&&Fr(e)?Ts(e):e;return ka(n)?t.filter(function(a){return ka(a)&&r2(a,n)&&In(a)!=="body"}):[]}function tO(e,t,r,n){var a=t==="clippingParents"?eO(e):[].concat(t),o=[].concat(a,[r]),i=o[0],s=o.reduce(function(l,u){var d=l1(e,u,n);return l.top=pa(d.top,l.top),l.right=Tc(d.right,l.right),l.bottom=Tc(d.bottom,l.bottom),l.left=pa(d.left,l.left),l},l1(e,i,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function s2(e){var t=e.reference,r=e.element,n=e.placement,a=n?zr(n):null,o=n?ko(n):null,i=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,l;switch(a){case zt:l={x:i,y:t.y-r.height};break;case dr:l={x:i,y:t.y+t.height};break;case fr:l={x:t.x+t.width,y:s};break;case Ft:l={x:t.x-r.width,y:s};break;default:l={x:t.x,y:t.y}}var u=a?em(a):null;if(u!=null){var d=u==="y"?"height":"width";switch(o){case xo:l[u]=l[u]-(t[d]/2-r[d]/2);break;case ls:l[u]=l[u]+(t[d]/2-r[d]/2);break}}return l}function cs(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,i=o===void 0?e.strategy:o,s=r.boundary,l=s===void 0?kD:s,u=r.rootBoundary,d=u===void 0?e2:u,f=r.elementContext,p=f===void 0?li:f,v=r.altBoundary,y=v===void 0?!1:v,m=r.padding,x=m===void 0?0:m,h=a2(typeof x!="number"?x:o2(x,Os)),g=p===li?jD:li,w=e.rects.popper,S=e.elements[y?g:p],b=tO(ka(S)?S:S.contextElement||Yn(e.elements.popper),l,d,i),E=Eo(e.elements.reference),j=s2({reference:E,element:w,strategy:"absolute",placement:a}),k=fp(Object.assign({},w,j)),D=p===li?k:E,O={top:b.top-D.top+h.top,bottom:D.bottom-b.bottom+h.bottom,left:b.left-D.left+h.left,right:D.right-b.right+h.right},R=e.modifiersData.offset;if(p===li&&R){var Q=R[a];Object.keys(O).forEach(function(X){var Y=[fr,dr].indexOf(X)>=0?1:-1,z=[zt,dr].indexOf(X)>=0?"y":"x";O[X]+=Q[z]*Y})}return O}function rO(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,i=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,u=l===void 0?Qh:l,d=ko(n),f=d?s?a1:a1.filter(function(y){return ko(y)===d}):Os,p=f.filter(function(y){return u.indexOf(y)>=0});p.length===0&&(p=f);var v=p.reduce(function(y,m){return y[m]=cs(e,{placement:m,boundary:a,rootBoundary:o,padding:i})[zr(m)],y},{});return Object.keys(v).sort(function(y,m){return v[y]-v[m]})}function nO(e){if(zr(e)===Xh)return[];var t=Wl(e);return[s1(e),t,s1(t)]}function aO(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,i=r.altAxis,s=i===void 0?!0:i,l=r.fallbackPlacements,u=r.padding,d=r.boundary,f=r.rootBoundary,p=r.altBoundary,v=r.flipVariations,y=v===void 0?!0:v,m=r.allowedAutoPlacements,x=t.options.placement,h=zr(x),g=h===x,w=l||(g||!y?[Wl(x)]:nO(x)),S=[x].concat(w).reduce(function(U,G){return U.concat(zr(G)===Xh?rO(t,{placement:G,boundary:d,rootBoundary:f,padding:u,flipVariations:y,allowedAutoPlacements:m}):G)},[]),b=t.rects.reference,E=t.rects.popper,j=new Map,k=!0,D=S[0],O=0;O<S.length;O++){var R=S[O],Q=zr(R),X=ko(R)===xo,Y=[zt,dr].indexOf(Q)>=0,z=Y?"width":"height",I=cs(t,{placement:R,boundary:d,rootBoundary:f,altBoundary:p,padding:u}),V=Y?X?fr:Ft:X?dr:zt;b[z]>E[z]&&(V=Wl(V));var T=Wl(V),F=[];if(o&&F.push(I[Q]<=0),s&&F.push(I[V]<=0,I[T]<=0),F.every(function(U){return U})){D=R,k=!1;break}j.set(R,F)}if(k)for(var H=y?3:1,Z=function(G){var J=S.find(function(oe){var de=j.get(oe);if(de)return de.slice(0,G).every(function(le){return le})});if(J)return D=J,"break"},P=H;P>0;P--){var L=Z(P);if(L==="break")break}t.placement!==D&&(t.modifiersData[n]._skip=!0,t.placement=D,t.reset=!0)}}const oO={name:"flip",enabled:!0,phase:"main",fn:aO,requiresIfExists:["offset"],data:{_skip:!1}};function c1(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function u1(e){return[zt,fr,dr,Ft].some(function(t){return e[t]>=0})}function iO(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,i=cs(t,{elementContext:"reference"}),s=cs(t,{altBoundary:!0}),l=c1(i,n),u=c1(s,a,o),d=u1(l),f=u1(u);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:d,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":f})}const sO={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:iO};function lO(e,t,r){var n=zr(e),a=[Ft,zt].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,i=o[0],s=o[1];return i=i||0,s=(s||0)*a,[Ft,fr].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}function cO(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,i=Qh.reduce(function(d,f){return d[f]=lO(f,t.rects,o),d},{}),s=i[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=i}const uO={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:cO};function dO(e){var t=e.state,r=e.name;t.modifiersData[r]=s2({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const fO={name:"popperOffsets",enabled:!0,phase:"read",fn:dO,data:{}};function pO(e){return e==="x"?"y":"x"}function hO(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,i=r.altAxis,s=i===void 0?!1:i,l=r.boundary,u=r.rootBoundary,d=r.altBoundary,f=r.padding,p=r.tether,v=p===void 0?!0:p,y=r.tetherOffset,m=y===void 0?0:y,x=cs(t,{boundary:l,rootBoundary:u,padding:f,altBoundary:d}),h=zr(t.placement),g=ko(t.placement),w=!g,S=em(h),b=pO(S),E=t.modifiersData.popperOffsets,j=t.rects.reference,k=t.rects.popper,D=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,O=typeof D=="number"?{mainAxis:D,altAxis:D}:Object.assign({mainAxis:0,altAxis:0},D),R=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,Q={x:0,y:0};if(E){if(o){var X,Y=S==="y"?zt:Ft,z=S==="y"?dr:fr,I=S==="y"?"height":"width",V=E[S],T=V+x[Y],F=V-x[z],H=v?-k[I]/2:0,Z=g===xo?j[I]:k[I],P=g===xo?-k[I]:-j[I],L=t.elements.arrow,U=v&&L?Zh(L):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:n2(),J=G[Y],oe=G[z],de=Ci(0,j[I],U[I]),le=w?j[I]/2-H-de-J-O.mainAxis:Z-de-J-O.mainAxis,be=w?-j[I]/2+H+de+oe+O.mainAxis:P+de+oe+O.mainAxis,Pe=t.elements.arrow&&Ts(t.elements.arrow),Ge=Pe?S==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,rt=(X=R==null?void 0:R[S])!=null?X:0,Uo=V+le-rt-Ge,Bo=V+be-rt,Ho=Ci(v?Tc(T,Uo):T,V,v?pa(F,Bo):F);E[S]=Ho,Q[S]=Ho-V}if(s){var As,Hu=S==="x"?zt:Ft,Wu=S==="x"?dr:fr,Gr=E[b],Jt=b==="y"?"height":"width",dn=Gr+x[Hu],Wo=Gr-x[Wu],Kn=[zt,Ft].indexOf(h)!==-1,mr=(As=R==null?void 0:R[b])!=null?As:0,Zt=Kn?dn:Gr-j[Jt]-k[Jt]-mr+O.altAxis,Vo=Kn?Gr+j[Jt]+k[Jt]-mr-O.altAxis:Wo,Ta=v&&Kn?ID(Zt,Gr,Vo):Ci(v?Zt:dn,Gr,v?Vo:Wo);E[b]=Ta,Q[b]=Ta-Gr}t.modifiersData[n]=Q}}const mO={name:"preventOverflow",enabled:!0,phase:"main",fn:hO,requiresIfExists:["offset"]};function vO(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function gO(e){return e===qt(e)||!Fr(e)?tm(e):vO(e)}function yO(e){var t=e.getBoundingClientRect(),r=So(t.width)/e.offsetWidth||1,n=So(t.height)/e.offsetHeight||1;return r!==1||n!==1}function wO(e,t,r){r===void 0&&(r=!1);var n=Fr(t),a=Fr(t)&&yO(t),o=Yn(t),i=Eo(e,a,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!r)&&((In(t)!=="body"||nm(o))&&(s=gO(t)),Fr(t)?(l=Eo(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):o&&(l.x=rm(o))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function bO(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var i=[].concat(o.requires||[],o.requiresIfExists||[]);i.forEach(function(s){if(!r.has(s)){var l=t.get(s);l&&a(l)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function xO(e){var t=bO(e);return MD.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function SO(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function EO(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var d1={placement:"bottom",modifiers:[],strategy:"absolute"};function f1(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function kO(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?d1:a;return function(s,l,u){u===void 0&&(u=o);var d={placement:"bottom",orderedModifiers:[],options:Object.assign({},d1,o),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},f=[],p=!1,v={state:d,setOptions:function(h){var g=typeof h=="function"?h(d.options):h;m(),d.options=Object.assign({},o,d.options,g),d.scrollParents={reference:ka(s)?Di(s):s.contextElement?Di(s.contextElement):[],popper:Di(l)};var w=xO(EO([].concat(n,d.options.modifiers)));return d.orderedModifiers=w.filter(function(S){return S.enabled}),y(),v.update()},forceUpdate:function(){if(!p){var h=d.elements,g=h.reference,w=h.popper;if(f1(g,w)){d.rects={reference:wO(g,Ts(w),d.options.strategy==="fixed"),popper:Zh(w)},d.reset=!1,d.placement=d.options.placement,d.orderedModifiers.forEach(function(O){return d.modifiersData[O.name]=Object.assign({},O.data)});for(var S=0;S<d.orderedModifiers.length;S++){if(d.reset===!0){d.reset=!1,S=-1;continue}var b=d.orderedModifiers[S],E=b.fn,j=b.options,k=j===void 0?{}:j,D=b.name;typeof E=="function"&&(d=E({state:d,options:k,name:D,instance:v})||d)}}}},update:SO(function(){return new Promise(function(x){v.forceUpdate(),x(d)})}),destroy:function(){m(),p=!0}};if(!f1(s,l))return v;v.setOptions(u).then(function(x){!p&&u.onFirstUpdate&&u.onFirstUpdate(x)});function y(){d.orderedModifiers.forEach(function(x){var h=x.name,g=x.options,w=g===void 0?{}:g,S=x.effect;if(typeof S=="function"){var b=S({state:d,name:h,instance:v,options:w}),E=function(){};f.push(b||E)}})}function m(){f.forEach(function(x){return x()}),f=[]}return v}}var jO=kO({defaultModifiers:[sO,fO,GD,KD,uO,oO,mO,BD]}),p1=function(t){return{position:t,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},$O={name:"applyStyles",enabled:!1},NO={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(t){var r=t.state;return function(){var n=r.elements,a=n.reference,o=n.popper;if("removeAttribute"in a){var i=(a.getAttribute("aria-describedby")||"").split(",").filter(function(s){return s.trim()!==o.id});i.length?a.setAttribute("aria-describedby",i.join(",")):a.removeAttribute("aria-describedby")}}},fn:function(t){var r,n=t.state,a=n.elements,o=a.popper,i=a.reference,s=(r=o.getAttribute("role"))==null?void 0:r.toLowerCase();if(o.id&&s==="tooltip"&&"setAttribute"in i){var l=i.getAttribute("aria-describedby");if(l&&l.split(",").indexOf(o.id)!==-1)return;i.setAttribute("aria-describedby",l?l+","+o.id:o.id)}}},CO=[];function DO(e,t,r){var n=r===void 0?{}:r,a=n.enabled,o=a===void 0?!0:a,i=n.placement,s=i===void 0?"bottom":i,l=n.strategy,u=l===void 0?"absolute":l,d=n.modifiers,f=d===void 0?CO:d,p=xu(n,["enabled","placement","strategy","modifiers"]),v=$.useRef(),y=$.useCallback(function(){var S;(S=v.current)==null||S.update()},[]),m=$.useCallback(function(){var S;(S=v.current)==null||S.forceUpdate()},[]),x=ED($.useState({placement:s,update:y,forceUpdate:m,attributes:{},styles:{popper:p1(u),arrow:{}}})),h=x[0],g=x[1],w=$.useMemo(function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(b){var E=b.state,j={},k={};Object.keys(E.elements).forEach(function(D){j[D]=E.styles[D],k[D]=E.attributes[D]}),g({state:E,styles:j,attributes:k,update:y,forceUpdate:m,placement:E.placement})}}},[y,m,g]);return $.useEffect(function(){!v.current||!o||v.current.setOptions({placement:s,strategy:u,modifiers:[].concat(f,[w,$O])})},[u,s,w,o]),$.useEffect(function(){if(!(!o||e==null||t==null))return v.current=jO(e,t,Ke({},p,{placement:s,strategy:u,modifiers:[].concat(f,[NO,w])})),function(){v.current!=null&&(v.current.destroy(),v.current=void 0,g(function(S){return Ke({},S,{attributes:{},styles:{popper:p1(u)}})}))}},[o,e,t]),h}function OO(e,t,r,n){var a=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(t,r,a),r.__once&&e.removeEventListener(t,r.__once,a)}function vi(e,t,r,n){return bD(e,t,r,n),function(){OO(e,t,r,n)}}var TO=function(){},_O=TO;const PO=qe(_O);function RO(e){return e&&"setState"in e?Mw.findDOMNode(e):e??null}const MO=function(e){return Ds(RO(e))};var AO=27,h1=function(){};function LO(e){return e.button===0}function IO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var m1=function(t){return t&&("current"in t?t.current:t)};function zO(e,t,r){var n=r===void 0?{}:r,a=n.disabled,o=n.clickTrigger,i=o===void 0?"click":o,s=$.useRef(!1),l=t||h1,u=$.useCallback(function(p){var v,y=m1(e);PO(!!y,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),s.current=!y||IO(p)||!LO(p)||!!ss(y,(v=p.composedPath==null?void 0:p.composedPath()[0])!=null?v:p.target)},[e]),d=r1(function(p){s.current||l(p)}),f=r1(function(p){p.keyCode===AO&&l(p)});$.useEffect(function(){if(!(a||e==null)){var p=window.event,v=MO(m1(e)),y=vi(v,i,u,!0),m=vi(v,i,function(g){if(g===p){p=void 0;return}d(g)}),x=vi(v,"keyup",function(g){if(g===p){p=void 0;return}f(g)}),h=[];return"ontouchstart"in v.documentElement&&(h=[].slice.call(v.body.children).map(function(g){return vi(g,"mousemove",h1)})),function(){y(),m(),x(),h.forEach(function(g){return g()})}}},[e,a,i,u,d,f])}function FO(e){var t={};return Array.isArray(e)?(e==null||e.forEach(function(r){t[r.name]=r}),t):e||t}function UO(e){return e===void 0&&(e={}),Array.isArray(e)?e:Object.keys(e).map(function(t){return e[t].name=t,e[t]})}function BO(e){var t,r,n,a,o=e.enabled,i=e.enableEvents,s=e.placement,l=e.flip,u=e.offset,d=e.fixed,f=e.containerPadding,p=e.arrowElement,v=e.popperConfig,y=v===void 0?{}:v,m=FO(y.modifiers);return Ke({},y,{placement:s,enabled:o,strategy:d?"fixed":y.strategy,modifiers:UO(Ke({},m,{eventListeners:{enabled:i},preventOverflow:Ke({},m.preventOverflow,{options:f?Ke({padding:f},(t=m.preventOverflow)==null?void 0:t.options):(r=m.preventOverflow)==null?void 0:r.options}),offset:{options:Ke({offset:u},(n=m.offset)==null?void 0:n.options)},arrow:Ke({},m.arrow,{enabled:!!p,options:Ke({},(a=m.arrow)==null?void 0:a.options,{element:p})}),flip:Ke({enabled:!!l},m.flip)}))})}function HO(e,t){return e.classList?e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function WO(e,t){e.classList?e.classList.add(t):HO(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function v1(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function VO(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=v1(e.className,t):e.setAttribute("class",v1(e.className&&e.className.baseVal||"",t))}var ml;function l2(e){if((!ml&&ml!==0||e)&&qh){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),ml=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return ml}var Ld=function(t){var r;return typeof document>"u"?null:t==null?Ds().body:(typeof t=="function"&&(t=t()),t&&"current"in t&&(t=t.current),(r=t)!=null&&r.nodeType&&t||null)};function g1(e,t){var r=$.useState(function(){return Ld(e)}),n=r[0],a=r[1];if(!n){var o=Ld(e);o&&a(o)}return $.useEffect(function(){},[t,n]),$.useEffect(function(){var i=Ld(e);i!==n&&a(i)},[e,n]),n}const y1=e=>!e||typeof e=="function"?e:t=>{e.current=t};function GO(e,t){const r=y1(e),n=y1(t);return a=>{r&&r(a),n&&n(a)}}function YO(e,t){return $.useMemo(()=>GO(e,t),[e,t])}var am=C.forwardRef(function(e,t){var r=e.flip,n=e.offset,a=e.placement,o=e.containerPadding,i=o===void 0?5:o,s=e.popperConfig,l=s===void 0?{}:s,u=e.transition,d=n1(),f=d[0],p=d[1],v=n1(),y=v[0],m=v[1],x=YO(p,t),h=g1(e.container),g=g1(e.target),w=$.useState(!e.show),S=w[0],b=w[1],E=DO(g,f,BO({placement:a,enableEvents:!!e.show,containerPadding:i||5,flip:r,offset:n,arrowElement:y,popperConfig:l})),j=E.styles,k=E.attributes,D=xu(E,["styles","attributes"]);e.show?S&&b(!1):!e.transition&&!S&&b(!0);var O=function(){b(!0),e.onExited&&e.onExited.apply(e,arguments)},R=e.show||u&&!S;if(zO(f,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!R)return null;var Q=e.children(Ke({},D,{show:!!e.show,props:Ke({},k.popper,{style:j.popper,ref:x}),arrowProps:Ke({},k.arrow,{style:j.arrow,ref:m})}));if(u){var X=e.onExit,Y=e.onExiting,z=e.onEnter,I=e.onEntering,V=e.onEntered;Q=C.createElement(u,{in:e.show,appear:!0,onExit:X,onExiting:Y,onExited:O,onEnter:z,onEntering:I,onEntered:V},Q)}return h?Mw.createPortal(Q,h):null});am.displayName="Overlay";am.propTypes={show:M.bool,placement:M.oneOf(Qh),target:M.any,container:M.any,flip:M.bool,children:M.func.isRequired,containerPadding:M.number,popperConfig:M.object,rootClose:M.bool,rootCloseEvent:M.oneOf(["click","mousedown"]),rootCloseDisabled:M.bool,onHide:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];if(t.rootClose){var o;return(o=M.func).isRequired.apply(o,[t].concat(n))}return M.func.apply(M,[t].concat(n))},transition:M.elementType,onEnter:M.func,onEntering:M.func,onEntered:M.func,onExit:M.func,onExiting:M.func,onExited:M.func};function KO(){this.__data__=[],this.size=0}var qO=KO,XO=$s;function QO(e,t){for(var r=e.length;r--;)if(XO(e[r][0],t))return r;return-1}var ju=QO,JO=ju,ZO=Array.prototype,eT=ZO.splice;function tT(e){var t=this.__data__,r=JO(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():eT.call(t,r,1),--this.size,!0}var rT=tT,nT=ju;function aT(e){var t=this.__data__,r=nT(t,e);return r<0?void 0:t[r][1]}var oT=aT,iT=ju;function sT(e){return iT(this.__data__,e)>-1}var lT=sT,cT=ju;function uT(e,t){var r=this.__data__,n=cT(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var dT=uT,fT=qO,pT=rT,hT=oT,mT=lT,vT=dT;function Mo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Mo.prototype.clear=fT;Mo.prototype.delete=pT;Mo.prototype.get=hT;Mo.prototype.has=mT;Mo.prototype.set=vT;var $u=Mo,gT=$u;function yT(){this.__data__=new gT,this.size=0}var wT=yT;function bT(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var xT=bT;function ST(e){return this.__data__.get(e)}var ET=ST;function kT(e){return this.__data__.has(e)}var jT=kT,$T=Vr,NT=$T["__core-js_shared__"],CT=NT,Id=CT,w1=function(){var e=/[^.]+$/.exec(Id&&Id.keys&&Id.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function DT(e){return!!w1&&w1 in e}var OT=DT,TT=Function.prototype,_T=TT.toString;function PT(e){if(e!=null){try{return _T.call(e)}catch{}try{return e+""}catch{}}return""}var c2=PT,RT=Vh,MT=OT,AT=un,LT=c2,IT=/[\\^$.*+?()[\]{}|]/g,zT=/^\[object .+?Constructor\]$/,FT=Function.prototype,UT=Object.prototype,BT=FT.toString,HT=UT.hasOwnProperty,WT=RegExp("^"+BT.call(HT).replace(IT,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function VT(e){if(!AT(e)||MT(e))return!1;var t=RT(e)?WT:zT;return t.test(LT(e))}var GT=VT;function YT(e,t){return e==null?void 0:e[t]}var KT=YT,qT=GT,XT=KT;function QT(e,t){var r=XT(e,t);return qT(r)?r:void 0}var Oa=QT,JT=Oa,ZT=Vr,e_=JT(ZT,"Map"),om=e_,t_=Oa,r_=t_(Object,"create"),Nu=r_,b1=Nu;function n_(){this.__data__=b1?b1(null):{},this.size=0}var a_=n_;function o_(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var i_=o_,s_=Nu,l_="__lodash_hash_undefined__",c_=Object.prototype,u_=c_.hasOwnProperty;function d_(e){var t=this.__data__;if(s_){var r=t[e];return r===l_?void 0:r}return u_.call(t,e)?t[e]:void 0}var f_=d_,p_=Nu,h_=Object.prototype,m_=h_.hasOwnProperty;function v_(e){var t=this.__data__;return p_?t[e]!==void 0:m_.call(t,e)}var g_=v_,y_=Nu,w_="__lodash_hash_undefined__";function b_(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=y_&&t===void 0?w_:t,this}var x_=b_,S_=a_,E_=i_,k_=f_,j_=g_,$_=x_;function Ao(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ao.prototype.clear=S_;Ao.prototype.delete=E_;Ao.prototype.get=k_;Ao.prototype.has=j_;Ao.prototype.set=$_;var N_=Ao,x1=N_,C_=$u,D_=om;function O_(){this.size=0,this.__data__={hash:new x1,map:new(D_||C_),string:new x1}}var T_=O_;function __(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var P_=__,R_=P_;function M_(e,t){var r=e.__data__;return R_(t)?r[typeof t=="string"?"string":"hash"]:r.map}var Cu=M_,A_=Cu;function L_(e){var t=A_(this,e).delete(e);return this.size-=t?1:0,t}var I_=L_,z_=Cu;function F_(e){return z_(this,e).get(e)}var U_=F_,B_=Cu;function H_(e){return B_(this,e).has(e)}var W_=H_,V_=Cu;function G_(e,t){var r=V_(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var Y_=G_,K_=T_,q_=I_,X_=U_,Q_=W_,J_=Y_;function Lo(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Lo.prototype.clear=K_;Lo.prototype.delete=q_;Lo.prototype.get=X_;Lo.prototype.has=Q_;Lo.prototype.set=J_;var im=Lo,Z_=$u,e6=om,t6=im,r6=200;function n6(e,t){var r=this.__data__;if(r instanceof Z_){var n=r.__data__;if(!e6||n.length<r6-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new t6(n)}return r.set(e,t),this.size=r.size,this}var a6=n6,o6=$u,i6=wT,s6=xT,l6=ET,c6=jT,u6=a6;function Io(e){var t=this.__data__=new o6(e);this.size=t.size}Io.prototype.clear=i6;Io.prototype.delete=s6;Io.prototype.get=l6;Io.prototype.has=c6;Io.prototype.set=u6;var sm=Io,d6="__lodash_hash_undefined__";function f6(e){return this.__data__.set(e,d6),this}var p6=f6;function h6(e){return this.__data__.has(e)}var m6=h6,v6=im,g6=p6,y6=m6;function _c(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new v6;++t<r;)this.add(e[t])}_c.prototype.add=_c.prototype.push=g6;_c.prototype.has=y6;var w6=_c;function b6(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var x6=b6;function S6(e,t){return e.has(t)}var E6=S6,k6=w6,j6=x6,$6=E6,N6=1,C6=2;function D6(e,t,r,n,a,o){var i=r&N6,s=e.length,l=t.length;if(s!=l&&!(i&&l>s))return!1;var u=o.get(e),d=o.get(t);if(u&&d)return u==t&&d==e;var f=-1,p=!0,v=r&C6?new k6:void 0;for(o.set(e,t),o.set(t,e);++f<s;){var y=e[f],m=t[f];if(n)var x=i?n(m,y,f,t,e,o):n(y,m,f,e,t,o);if(x!==void 0){if(x)continue;p=!1;break}if(v){if(!j6(t,function(h,g){if(!$6(v,g)&&(y===h||a(y,h,r,n,o)))return v.push(g)})){p=!1;break}}else if(!(y===m||a(y,m,r,n,o))){p=!1;break}}return o.delete(e),o.delete(t),p}var u2=D6,O6=Vr,T6=O6.Uint8Array,d2=T6;function _6(e){var t=-1,r=Array(e.size);return e.forEach(function(n,a){r[++t]=[a,n]}),r}var P6=_6;function R6(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var M6=R6,S1=Po,E1=d2,A6=$s,L6=u2,I6=P6,z6=M6,F6=1,U6=2,B6="[object Boolean]",H6="[object Date]",W6="[object Error]",V6="[object Map]",G6="[object Number]",Y6="[object RegExp]",K6="[object Set]",q6="[object String]",X6="[object Symbol]",Q6="[object ArrayBuffer]",J6="[object DataView]",k1=S1?S1.prototype:void 0,zd=k1?k1.valueOf:void 0;function Z6(e,t,r,n,a,o,i){switch(r){case J6:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Q6:return!(e.byteLength!=t.byteLength||!o(new E1(e),new E1(t)));case B6:case H6:case G6:return A6(+e,+t);case W6:return e.name==t.name&&e.message==t.message;case Y6:case q6:return e==t+"";case V6:var s=I6;case K6:var l=n&F6;if(s||(s=z6),e.size!=t.size&&!l)return!1;var u=i.get(e);if(u)return u==t;n|=U6,i.set(e,t);var d=L6(s(e),s(t),n,a,o,i);return i.delete(e),d;case X6:if(zd)return zd.call(e)==zd.call(t)}return!1}var eP=Z6;function tP(e,t){for(var r=-1,n=t.length,a=e.length;++r<n;)e[a+r]=t[r];return e}var lm=tP,rP=Array.isArray,hr=rP,nP=lm,aP=hr;function oP(e,t,r){var n=t(e);return aP(e)?n:nP(n,r(e))}var f2=oP;function iP(e,t){for(var r=-1,n=e==null?0:e.length,a=0,o=[];++r<n;){var i=e[r];t(i,r,e)&&(o[a++]=i)}return o}var sP=iP;function lP(){return[]}var p2=lP,cP=sP,uP=p2,dP=Object.prototype,fP=dP.propertyIsEnumerable,j1=Object.getOwnPropertySymbols,pP=j1?function(e){return e==null?[]:(e=Object(e),cP(j1(e),function(t){return fP.call(e,t)}))}:uP,cm=pP;function hP(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var mP=hP,vP=Ro,gP=Gn,yP="[object Arguments]";function wP(e){return gP(e)&&vP(e)==yP}var bP=wP,$1=bP,xP=Gn,h2=Object.prototype,SP=h2.hasOwnProperty,EP=h2.propertyIsEnumerable,kP=$1(function(){return arguments}())?$1:function(e){return xP(e)&&SP.call(e,"callee")&&!EP.call(e,"callee")},um=kP,Pc={exports:{}};function jP(){return!1}var $P=jP;Pc.exports;(function(e,t){var r=Vr,n=$P,a=t&&!t.nodeType&&t,o=a&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===a,s=i?r.Buffer:void 0,l=s?s.isBuffer:void 0,u=l||n;e.exports=u})(Pc,Pc.exports);var Du=Pc.exports,NP=Ro,CP=Gh,DP=Gn,OP="[object Arguments]",TP="[object Array]",_P="[object Boolean]",PP="[object Date]",RP="[object Error]",MP="[object Function]",AP="[object Map]",LP="[object Number]",IP="[object Object]",zP="[object RegExp]",FP="[object Set]",UP="[object String]",BP="[object WeakMap]",HP="[object ArrayBuffer]",WP="[object DataView]",VP="[object Float32Array]",GP="[object Float64Array]",YP="[object Int8Array]",KP="[object Int16Array]",qP="[object Int32Array]",XP="[object Uint8Array]",QP="[object Uint8ClampedArray]",JP="[object Uint16Array]",ZP="[object Uint32Array]",Le={};Le[VP]=Le[GP]=Le[YP]=Le[KP]=Le[qP]=Le[XP]=Le[QP]=Le[JP]=Le[ZP]=!0;Le[OP]=Le[TP]=Le[HP]=Le[_P]=Le[WP]=Le[PP]=Le[RP]=Le[MP]=Le[AP]=Le[LP]=Le[IP]=Le[zP]=Le[FP]=Le[UP]=Le[BP]=!1;function eR(e){return DP(e)&&CP(e.length)&&!!Le[NP(e)]}var tR=eR;function rR(e){return function(t){return e(t)}}var Ou=rR,Rc={exports:{}};Rc.exports;(function(e,t){var r=Vx,n=t&&!t.nodeType&&t,a=n&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===n,i=o&&r.process,s=function(){try{var l=a&&a.require&&a.require("util").types;return l||i&&i.binding&&i.binding("util")}catch{}}();e.exports=s})(Rc,Rc.exports);var dm=Rc.exports,nR=tR,aR=Ou,N1=dm,C1=N1&&N1.isTypedArray,oR=C1?aR(C1):nR,fm=oR,iR=mP,sR=um,lR=hr,cR=Du,uR=Yh,dR=fm,fR=Object.prototype,pR=fR.hasOwnProperty;function hR(e,t){var r=lR(e),n=!r&&sR(e),a=!r&&!n&&cR(e),o=!r&&!n&&!a&&dR(e),i=r||n||a||o,s=i?iR(e.length,String):[],l=s.length;for(var u in e)(t||pR.call(e,u))&&!(i&&(u=="length"||a&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||uR(u,l)))&&s.push(u);return s}var m2=hR,mR=Object.prototype;function vR(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||mR;return e===r}var pm=vR;function gR(e,t){return function(r){return e(t(r))}}var v2=gR,yR=v2,wR=yR(Object.keys,Object),bR=wR,xR=pm,SR=bR,ER=Object.prototype,kR=ER.hasOwnProperty;function jR(e){if(!xR(e))return SR(e);var t=[];for(var r in Object(e))kR.call(e,r)&&r!="constructor"&&t.push(r);return t}var $R=jR,NR=m2,CR=$R,DR=Ns;function OR(e){return DR(e)?NR(e):CR(e)}var _s=OR,TR=f2,_R=cm,PR=_s;function RR(e){return TR(e,PR,_R)}var g2=RR,D1=g2,MR=1,AR=Object.prototype,LR=AR.hasOwnProperty;function IR(e,t,r,n,a,o){var i=r&MR,s=D1(e),l=s.length,u=D1(t),d=u.length;if(l!=d&&!i)return!1;for(var f=l;f--;){var p=s[f];if(!(i?p in t:LR.call(t,p)))return!1}var v=o.get(e),y=o.get(t);if(v&&y)return v==t&&y==e;var m=!0;o.set(e,t),o.set(t,e);for(var x=i;++f<l;){p=s[f];var h=e[p],g=t[p];if(n)var w=i?n(g,h,p,t,e,o):n(h,g,p,e,t,o);if(!(w===void 0?h===g||a(h,g,r,n,o):w)){m=!1;break}x||(x=p=="constructor")}if(m&&!x){var S=e.constructor,b=t.constructor;S!=b&&"constructor"in e&&"constructor"in t&&!(typeof S=="function"&&S instanceof S&&typeof b=="function"&&b instanceof b)&&(m=!1)}return o.delete(e),o.delete(t),m}var zR=IR,FR=Oa,UR=Vr,BR=FR(UR,"DataView"),HR=BR,WR=Oa,VR=Vr,GR=WR(VR,"Promise"),YR=GR,KR=Oa,qR=Vr,XR=KR(qR,"Set"),QR=XR,JR=Oa,ZR=Vr,eM=JR(ZR,"WeakMap"),tM=eM,pp=HR,hp=om,mp=YR,vp=QR,gp=tM,y2=Ro,zo=c2,O1="[object Map]",rM="[object Object]",T1="[object Promise]",_1="[object Set]",P1="[object WeakMap]",R1="[object DataView]",nM=zo(pp),aM=zo(hp),oM=zo(mp),iM=zo(vp),sM=zo(gp),Jn=y2;(pp&&Jn(new pp(new ArrayBuffer(1)))!=R1||hp&&Jn(new hp)!=O1||mp&&Jn(mp.resolve())!=T1||vp&&Jn(new vp)!=_1||gp&&Jn(new gp)!=P1)&&(Jn=function(e){var t=y2(e),r=t==rM?e.constructor:void 0,n=r?zo(r):"";if(n)switch(n){case nM:return R1;case aM:return O1;case oM:return T1;case iM:return _1;case sM:return P1}return t});var Tu=Jn,Fd=sm,lM=u2,cM=eP,uM=zR,M1=Tu,A1=hr,L1=Du,dM=fm,fM=1,I1="[object Arguments]",z1="[object Array]",vl="[object Object]",pM=Object.prototype,F1=pM.hasOwnProperty;function hM(e,t,r,n,a,o){var i=A1(e),s=A1(t),l=i?z1:M1(e),u=s?z1:M1(t);l=l==I1?vl:l,u=u==I1?vl:u;var d=l==vl,f=u==vl,p=l==u;if(p&&L1(e)){if(!L1(t))return!1;i=!0,d=!1}if(p&&!d)return o||(o=new Fd),i||dM(e)?lM(e,t,r,n,a,o):cM(e,t,l,r,n,a,o);if(!(r&fM)){var v=d&&F1.call(e,"__wrapped__"),y=f&&F1.call(t,"__wrapped__");if(v||y){var m=v?e.value():e,x=y?t.value():t;return o||(o=new Fd),a(m,x,r,n,o)}}return p?(o||(o=new Fd),uM(e,t,r,n,a,o)):!1}var mM=hM,vM=mM,U1=Gn;function w2(e,t,r,n,a){return e===t?!0:e==null||t==null||!U1(e)&&!U1(t)?e!==e&&t!==t:vM(e,t,r,n,w2,a)}var hm=w2,gM=hm;function yM(e,t){return gM(e,t)}var wM=yM;const bM=qe(wM);function Ud(e,t){var r=Kh(e);return r?r.innerHeight:fa(e).height}function b2(e,t,r){e.closest&&!r&&e.closest(t);var n=e;do{if(gD(n,t))return n;n=n.parentElement}while(n&&n!==r&&n.nodeType===document.ELEMENT_NODE);return null}function xM(e,t,r,n){for(var a=e.length,o=r+(n?1:-1);n?o--:++o<a;)if(t(e[o],o,e))return o;return-1}var SM=xM,EM=sm,kM=hm,jM=1,$M=2;function NM(e,t,r,n){var a=r.length,o=a,i=!n;if(e==null)return!o;for(e=Object(e);a--;){var s=r[a];if(i&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++a<o;){s=r[a];var l=s[0],u=e[l],d=s[1];if(i&&s[2]){if(u===void 0&&!(l in e))return!1}else{var f=new EM;if(n)var p=n(u,d,l,e,t,f);if(!(p===void 0?kM(d,u,jM|$M,n,f):p))return!1}}return!0}var CM=NM,DM=un;function OM(e){return e===e&&!DM(e)}var x2=OM,TM=x2,_M=_s;function PM(e){for(var t=_M(e),r=t.length;r--;){var n=t[r],a=e[n];t[r]=[n,a,TM(a)]}return t}var RM=PM;function MM(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var S2=MM,AM=CM,LM=RM,IM=S2;function zM(e){var t=LM(e);return t.length==1&&t[0][2]?IM(t[0][0],t[0][1]):function(r){return r===e||AM(r,e,t)}}var FM=zM,UM=hr,BM=Cs,HM=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,WM=/^\w*$/;function VM(e,t){if(UM(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||BM(e)?!0:WM.test(e)||!HM.test(e)||t!=null&&e in Object(t)}var mm=VM,E2=im,GM="Expected a function";function vm(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(GM);var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(vm.Cache||E2),r}vm.Cache=E2;var YM=vm,KM=YM,qM=500;function XM(e){var t=KM(e,function(n){return r.size===qM&&r.clear(),n}),r=t.cache;return t}var QM=XM,JM=QM,ZM=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,eA=/\\(\\)?/g,tA=JM(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ZM,function(r,n,a,o){t.push(a?o.replace(eA,"$1"):n||r)}),t}),rA=tA;function nA(e,t){for(var r=-1,n=e==null?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a}var gm=nA,B1=Po,aA=gm,oA=hr,iA=Cs,sA=1/0,H1=B1?B1.prototype:void 0,W1=H1?H1.toString:void 0;function k2(e){if(typeof e=="string")return e;if(oA(e))return aA(e,k2)+"";if(iA(e))return W1?W1.call(e):"";var t=e+"";return t=="0"&&1/e==-sA?"-0":t}var lA=k2,cA=lA;function uA(e){return e==null?"":cA(e)}var dA=uA,fA=hr,pA=mm,hA=rA,mA=dA;function vA(e,t){return fA(e)?e:pA(e,t)?[e]:hA(mA(e))}var _u=vA,gA=Cs,yA=1/0;function wA(e){if(typeof e=="string"||gA(e))return e;var t=e+"";return t=="0"&&1/e==-yA?"-0":t}var Ps=wA,bA=_u,xA=Ps;function SA(e,t){t=bA(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[xA(t[r++])];return r&&r==n?e:void 0}var Pu=SA,EA=Pu;function kA(e,t,r){var n=e==null?void 0:EA(e,t);return n===void 0?r:n}var jA=kA;function $A(e,t){return e!=null&&t in Object(e)}var NA=$A,CA=_u,DA=um,OA=hr,TA=Yh,_A=Gh,PA=Ps;function RA(e,t,r){t=CA(t,e);for(var n=-1,a=t.length,o=!1;++n<a;){var i=PA(t[n]);if(!(o=e!=null&&r(e,i)))break;e=e[i]}return o||++n!=a?o:(a=e==null?0:e.length,!!a&&_A(a)&&TA(i,a)&&(OA(e)||DA(e)))}var MA=RA,AA=NA,LA=MA;function IA(e,t){return e!=null&&LA(e,t,AA)}var zA=IA,FA=hm,UA=jA,BA=zA,HA=mm,WA=x2,VA=S2,GA=Ps,YA=1,KA=2;function qA(e,t){return HA(e)&&WA(t)?VA(GA(e),t):function(r){var n=UA(r,e);return n===void 0&&n===t?BA(r,e):FA(t,n,YA|KA)}}var XA=qA;function QA(e){return e}var Ru=QA;function JA(e){return function(t){return t==null?void 0:t[e]}}var ZA=JA,e7=Pu;function t7(e){return function(t){return e7(t,e)}}var r7=t7,n7=ZA,a7=r7,o7=mm,i7=Ps;function s7(e){return o7(e)?n7(i7(e)):a7(e)}var l7=s7,c7=FM,u7=XA,d7=Ru,f7=hr,p7=l7;function h7(e){return typeof e=="function"?e:e==null?d7:typeof e=="object"?f7(e)?u7(e[0],e[1]):c7(e):p7(e)}var Mu=h7,m7=SM,v7=Mu,g7=Kx,y7=Math.max;function w7(e,t,r){var n=e==null?0:e.length;if(!n)return-1;var a=r==null?0:g7(r);return a<0&&(a=y7(n+a,0)),m7(e,v7(t),a)}var b7=w7;const x7=qe(b7);var S7=Math.ceil,E7=Math.max;function k7(e,t,r,n){for(var a=-1,o=E7(S7((t-e)/(r||1)),0),i=Array(o);o--;)i[n?o:++a]=e,e+=r;return i}var j7=k7,$7=j7,N7=Eu,Bd=Yx;function C7(e){return function(t,r,n){return n&&typeof n!="number"&&N7(t,r,n)&&(r=n=void 0),t=Bd(t),r===void 0?(r=t,t=0):r=Bd(r),n=n===void 0?t<r?1:-1:Bd(n),$7(t,r,n,e)}}var D7=C7,O7=D7,T7=O7(),_7=T7;const P7=qe(_7);var V1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function R7(e,t){return!!(e===t||V1(e)&&V1(t))}function M7(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!R7(e[r],t[r]))return!1;return!0}function j2(e,t){t===void 0&&(t=M7);var r=null;function n(){for(var a=[],o=0;o<arguments.length;o++)a[o]=arguments[o];if(r&&r.lastThis===this&&t(a,r.lastArgs))return r.lastResult;var i=e.apply(this,a);return r={lastResult:i,lastArgs:a,lastThis:this},i}return n.clear=function(){r=null},n}var G1=Po,A7=um,L7=hr,Y1=G1?G1.isConcatSpreadable:void 0;function I7(e){return L7(e)||A7(e)||!!(Y1&&e&&e[Y1])}var z7=I7,F7=lm,U7=z7;function $2(e,t,r,n,a){var o=-1,i=e.length;for(r||(r=U7),a||(a=[]);++o<i;){var s=e[o];t>0&&r(s)?t>1?$2(s,t-1,r,n,a):F7(a,s):n||(a[a.length]=s)}return a}var N2=$2;function B7(e){return function(t,r,n){for(var a=-1,o=Object(t),i=n(t),s=i.length;s--;){var l=i[e?s:++a];if(r(o[l],l,o)===!1)break}return t}}var H7=B7,W7=H7,V7=W7(),G7=V7,Y7=G7,K7=_s;function q7(e,t){return e&&Y7(e,t,K7)}var ym=q7,X7=Ns;function Q7(e,t){return function(r,n){if(r==null)return r;if(!X7(r))return e(r,n);for(var a=r.length,o=t?a:-1,i=Object(r);(t?o--:++o<a)&&n(i[o],o,i)!==!1;);return r}}var J7=Q7,Z7=ym,e9=J7,t9=e9(Z7),r9=t9,n9=r9,a9=Ns;function o9(e,t){var r=-1,n=a9(e)?Array(e.length):[];return n9(e,function(a,o,i){n[++r]=t(a,o,i)}),n}var i9=o9;function s9(e,t){var r=e.length;for(e.sort(t);r--;)e[r]=e[r].value;return e}var l9=s9,K1=Cs;function c9(e,t){if(e!==t){var r=e!==void 0,n=e===null,a=e===e,o=K1(e),i=t!==void 0,s=t===null,l=t===t,u=K1(t);if(!s&&!u&&!o&&e>t||o&&i&&l&&!s&&!u||n&&i&&l||!r&&l||!a)return 1;if(!n&&!o&&!u&&e<t||u&&r&&a&&!n&&!o||s&&r&&a||!i&&a||!l)return-1}return 0}var u9=c9,d9=u9;function f9(e,t,r){for(var n=-1,a=e.criteria,o=t.criteria,i=a.length,s=r.length;++n<i;){var l=d9(a[n],o[n]);if(l){if(n>=s)return l;var u=r[n];return l*(u=="desc"?-1:1)}}return e.index-t.index}var p9=f9,Hd=gm,h9=Pu,m9=Mu,v9=i9,g9=l9,y9=Ou,w9=p9,b9=Ru,x9=hr;function S9(e,t,r){t.length?t=Hd(t,function(o){return x9(o)?function(i){return h9(i,o.length===1?o[0]:o)}:o}):t=[b9];var n=-1;t=Hd(t,y9(m9));var a=v9(e,function(o,i,s){var l=Hd(t,function(u){return u(o)});return{criteria:l,index:++n,value:o}});return g9(a,function(o,i){return w9(o,i,r)})}var E9=S9;function k9(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}var j9=k9,$9=j9,q1=Math.max;function N9(e,t,r){return t=q1(t===void 0?e.length-1:t,0),function(){for(var n=arguments,a=-1,o=q1(n.length-t,0),i=Array(o);++a<o;)i[a]=n[t+a];a=-1;for(var s=Array(t+1);++a<t;)s[a]=n[a];return s[t]=r(i),$9(e,this,s)}}var C2=N9;function C9(e){return function(){return e}}var D9=C9,O9=Oa,T9=function(){try{var e=O9(Object,"defineProperty");return e({},"",{}),e}catch{}}(),D2=T9,_9=D9,X1=D2,P9=Ru,R9=X1?function(e,t){return X1(e,"toString",{configurable:!0,enumerable:!1,value:_9(t),writable:!0})}:P9,M9=R9,A9=800,L9=16,I9=Date.now;function z9(e){var t=0,r=0;return function(){var n=I9(),a=L9-(n-r);if(r=n,a>0){if(++t>=A9)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}var F9=z9,U9=M9,B9=F9,H9=B9(U9),O2=H9,W9=Ru,V9=C2,G9=O2;function Y9(e,t){return G9(V9(e,t,W9),e+"")}var T2=Y9,K9=N2,q9=E9,X9=T2,Q1=Eu,Q9=X9(function(e,t){if(e==null)return[];var r=t.length;return r>1&&Q1(e,t[0],t[1])?t=[]:r>2&&Q1(t[0],t[1],t[2])&&(t=[t[0]]),q9(e,K9(t,1),[])}),J9=Q9;const Z9=qe(J9);function yp(e,t){var r=Kh(e);return r?r.innerWidth:fa(e).width}function _2(e){return Dx(e)||Hx(e)||Bh(e)||Ox()}function eL(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var P2=eL,J1=D2;function tL(e,t,r){t=="__proto__"&&J1?J1(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var wm=tL,rL=wm,nL=$s,aL=Object.prototype,oL=aL.hasOwnProperty;function iL(e,t,r){var n=e[t];(!(oL.call(e,t)&&nL(n,r))||r===void 0&&!(t in e))&&rL(e,t,r)}var R2=iL,sL=R2,lL=wm;function cL(e,t,r,n){var a=!r;r||(r={});for(var o=-1,i=t.length;++o<i;){var s=t[o],l=n?n(r[s],e[s],s,r,e):void 0;l===void 0&&(l=e[s]),a?lL(r,s,l):sL(r,s,l)}return r}var Rs=cL,uL=Rs,dL=_s;function fL(e,t){return e&&uL(t,dL(t),e)}var pL=fL;function hL(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var mL=hL,vL=un,gL=pm,yL=mL,wL=Object.prototype,bL=wL.hasOwnProperty;function xL(e){if(!vL(e))return yL(e);var t=gL(e),r=[];for(var n in e)n=="constructor"&&(t||!bL.call(e,n))||r.push(n);return r}var SL=xL,EL=m2,kL=SL,jL=Ns;function $L(e){return jL(e)?EL(e,!0):kL(e)}var Au=$L,NL=Rs,CL=Au;function DL(e,t){return e&&NL(t,CL(t),e)}var OL=DL,Mc={exports:{}};Mc.exports;(function(e,t){var r=Vr,n=t&&!t.nodeType&&t,a=n&&!0&&e&&!e.nodeType&&e,o=a&&a.exports===n,i=o?r.Buffer:void 0,s=i?i.allocUnsafe:void 0;function l(u,d){if(d)return u.slice();var f=u.length,p=s?s(f):new u.constructor(f);return u.copy(p),p}e.exports=l})(Mc,Mc.exports);var TL=Mc.exports;function _L(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var PL=_L,RL=Rs,ML=cm;function AL(e,t){return RL(e,ML(e),t)}var LL=AL,IL=v2,zL=IL(Object.getPrototypeOf,Object),Lu=zL,FL=lm,UL=Lu,BL=cm,HL=p2,WL=Object.getOwnPropertySymbols,VL=WL?function(e){for(var t=[];e;)FL(t,BL(e)),e=UL(e);return t}:HL,M2=VL,GL=Rs,YL=M2;function KL(e,t){return GL(e,YL(e),t)}var qL=KL,XL=f2,QL=M2,JL=Au;function ZL(e){return XL(e,JL,QL)}var A2=ZL,eI=Object.prototype,tI=eI.hasOwnProperty;function rI(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&tI.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var nI=rI,Z1=d2;function aI(e){var t=new e.constructor(e.byteLength);return new Z1(t).set(new Z1(e)),t}var bm=aI,oI=bm;function iI(e,t){var r=t?oI(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var sI=iI,lI=/\w*$/;function cI(e){var t=new e.constructor(e.source,lI.exec(e));return t.lastIndex=e.lastIndex,t}var uI=cI,e0=Po,t0=e0?e0.prototype:void 0,r0=t0?t0.valueOf:void 0;function dI(e){return r0?Object(r0.call(e)):{}}var fI=dI,pI=bm;function hI(e,t){var r=t?pI(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var mI=hI,vI=bm,gI=sI,yI=uI,wI=fI,bI=mI,xI="[object Boolean]",SI="[object Date]",EI="[object Map]",kI="[object Number]",jI="[object RegExp]",$I="[object Set]",NI="[object String]",CI="[object Symbol]",DI="[object ArrayBuffer]",OI="[object DataView]",TI="[object Float32Array]",_I="[object Float64Array]",PI="[object Int8Array]",RI="[object Int16Array]",MI="[object Int32Array]",AI="[object Uint8Array]",LI="[object Uint8ClampedArray]",II="[object Uint16Array]",zI="[object Uint32Array]";function FI(e,t,r){var n=e.constructor;switch(t){case DI:return vI(e);case xI:case SI:return new n(+e);case OI:return gI(e,r);case TI:case _I:case PI:case RI:case MI:case AI:case LI:case II:case zI:return bI(e,r);case EI:return new n;case kI:case NI:return new n(e);case jI:return yI(e);case $I:return new n;case CI:return wI(e)}}var UI=FI,BI=un,n0=Object.create,HI=function(){function e(){}return function(t){if(!BI(t))return{};if(n0)return n0(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),L2=HI,WI=L2,VI=Lu,GI=pm;function YI(e){return typeof e.constructor=="function"&&!GI(e)?WI(VI(e)):{}}var KI=YI,qI=Tu,XI=Gn,QI="[object Map]";function JI(e){return XI(e)&&qI(e)==QI}var ZI=JI,ez=ZI,tz=Ou,a0=dm,o0=a0&&a0.isMap,rz=o0?tz(o0):ez,nz=rz,az=Tu,oz=Gn,iz="[object Set]";function sz(e){return oz(e)&&az(e)==iz}var lz=sz,cz=lz,uz=Ou,i0=dm,s0=i0&&i0.isSet,dz=s0?uz(s0):cz,fz=dz,pz=sm,hz=P2,mz=R2,vz=pL,gz=OL,yz=TL,wz=PL,bz=LL,xz=qL,Sz=g2,Ez=A2,kz=Tu,jz=nI,$z=UI,Nz=KI,Cz=hr,Dz=Du,Oz=nz,Tz=un,_z=fz,Pz=_s,Rz=Au,Mz=1,Az=2,Lz=4,I2="[object Arguments]",Iz="[object Array]",zz="[object Boolean]",Fz="[object Date]",Uz="[object Error]",z2="[object Function]",Bz="[object GeneratorFunction]",Hz="[object Map]",Wz="[object Number]",F2="[object Object]",Vz="[object RegExp]",Gz="[object Set]",Yz="[object String]",Kz="[object Symbol]",qz="[object WeakMap]",Xz="[object ArrayBuffer]",Qz="[object DataView]",Jz="[object Float32Array]",Zz="[object Float64Array]",eF="[object Int8Array]",tF="[object Int16Array]",rF="[object Int32Array]",nF="[object Uint8Array]",aF="[object Uint8ClampedArray]",oF="[object Uint16Array]",iF="[object Uint32Array]",Oe={};Oe[I2]=Oe[Iz]=Oe[Xz]=Oe[Qz]=Oe[zz]=Oe[Fz]=Oe[Jz]=Oe[Zz]=Oe[eF]=Oe[tF]=Oe[rF]=Oe[Hz]=Oe[Wz]=Oe[F2]=Oe[Vz]=Oe[Gz]=Oe[Yz]=Oe[Kz]=Oe[nF]=Oe[aF]=Oe[oF]=Oe[iF]=!0;Oe[Uz]=Oe[z2]=Oe[qz]=!1;function Vl(e,t,r,n,a,o){var i,s=t&Mz,l=t&Az,u=t&Lz;if(r&&(i=a?r(e,n,a,o):r(e)),i!==void 0)return i;if(!Tz(e))return e;var d=Cz(e);if(d){if(i=jz(e),!s)return wz(e,i)}else{var f=kz(e),p=f==z2||f==Bz;if(Dz(e))return yz(e,s);if(f==F2||f==I2||p&&!a){if(i=l||p?{}:Nz(e),!s)return l?xz(e,gz(i,e)):bz(e,vz(i,e))}else{if(!Oe[f])return a?e:{};i=$z(e,f,s)}}o||(o=new pz);var v=o.get(e);if(v)return v;o.set(e,i),_z(e)?e.forEach(function(x){i.add(Vl(x,t,r,x,e,o))}):Oz(e)&&e.forEach(function(x,h){i.set(h,Vl(x,t,r,h,e,o))});var y=u?l?Ez:Sz:l?Rz:Pz,m=d?void 0:y(e);return hz(m||e,function(x,h){m&&(h=x,x=e[h]),mz(i,h,Vl(x,t,r,h,e,o))}),i}var sF=Vl;function lF(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var cF=lF,uF=Pu,dF=Wx;function fF(e,t){return t.length<2?e:uF(e,dF(t,0,-1))}var pF=fF,hF=_u,mF=cF,vF=pF,gF=Ps;function yF(e,t){return t=hF(t,e),e=vF(e,t),e==null||delete e[gF(mF(t))]}var wF=yF,bF=Ro,xF=Lu,SF=Gn,EF="[object Object]",kF=Function.prototype,jF=Object.prototype,U2=kF.toString,$F=jF.hasOwnProperty,NF=U2.call(Object);function CF(e){if(!SF(e)||bF(e)!=EF)return!1;var t=xF(e);if(t===null)return!0;var r=$F.call(t,"constructor")&&t.constructor;return typeof r=="function"&&r instanceof r&&U2.call(r)==NF}var DF=CF,OF=DF;function TF(e){return OF(e)?void 0:e}var _F=TF,PF=N2;function RF(e){var t=e==null?0:e.length;return t?PF(e,1):[]}var MF=RF,AF=MF,LF=C2,IF=O2;function zF(e){return IF(LF(e,void 0,AF),e+"")}var FF=zF,UF=gm,BF=sF,HF=wF,WF=_u,VF=Rs,GF=_F,YF=FF,KF=A2,qF=1,XF=2,QF=4,JF=YF(function(e,t){var r={};if(e==null)return r;var n=!1;t=UF(t,function(o){return o=WF(o,e),n||(n=o.length>1),o}),VF(e,KF(e),r),n&&(r=BF(r,qF|XF|QF,GF));for(var a=t.length;a--;)HF(r,t[a]);return r}),ZF=JF;const eU=qe(ZF);var tU=T2,rU=$s,nU=Eu,aU=Au,B2=Object.prototype,oU=B2.hasOwnProperty,iU=tU(function(e,t){e=Object(e);var r=-1,n=t.length,a=n>2?t[2]:void 0;for(a&&nU(t[0],t[1],a)&&(n=1);++r<n;)for(var o=t[r],i=aU(o),s=-1,l=i.length;++s<l;){var u=i[s],d=e[u];(d===void 0||rU(d,B2[u])&&!oU.call(e,u))&&(e[u]=o[u])}return e}),sU=iU;const lU=qe(sU);var cU=P2,uU=L2,dU=ym,fU=Mu,pU=Lu,hU=hr,mU=Du,vU=Vh,gU=un,yU=fm;function wU(e,t,r){var n=hU(e),a=n||mU(e)||yU(e);if(t=fU(t),r==null){var o=e&&e.constructor;a?r=n?new o:[]:gU(e)?r=vU(o)?uU(pU(e)):{}:r={}}return(a?cU:dU)(e,function(i,s,l){return t(r,i,s,l)}),r}var bU=wU;const xU=qe(bU);var SU=wm,EU=ym,kU=Mu;function jU(e,t){var r={};return t=kU(t),EU(e,function(n,a,o){SU(r,a,t(n,a,o))}),r}var $U=jU;const NU=qe($U);var H2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nr,function(){return function(r,n,a){n.prototype.isBetween=function(o,i,s,l){var u=a(o),d=a(i),f=(l=l||"()")[0]==="(",p=l[1]===")";return(f?this.isAfter(u,s):!this.isBefore(u,s))&&(p?this.isBefore(d,s):!this.isAfter(d,s))||(f?this.isBefore(u,s):!this.isAfter(u,s))&&(p?this.isAfter(d,s):!this.isBefore(d,s))}}})})(H2);var CU=H2.exports;const DU=qe(CU);var W2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nr,function(){return function(r,n){n.prototype.isSameOrAfter=function(a,o){return this.isSame(a,o)||this.isAfter(a,o)}}})})(W2);var OU=W2.exports;const TU=qe(OU);var V2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nr,function(){return function(r,n){n.prototype.isSameOrBefore=function(a,o){return this.isSame(a,o)||this.isBefore(a,o)}}})})(V2);var _U=V2.exports;const PU=qe(_U);var G2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nr,function(){return function(r,n,a){var o=n.prototype,i=function(f){return f&&(f.indexOf?f:f.s)},s=function(f,p,v,y,m){var x=f.name?f:f.$locale(),h=i(x[p]),g=i(x[v]),w=h||g.map(function(b){return b.slice(0,y)});if(!m)return w;var S=x.weekStart;return w.map(function(b,E){return w[(E+(S||0))%7]})},l=function(){return a.Ls[a.locale()]},u=function(f,p){return f.formats[p]||function(v){return v.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(y,m,x){return m||x.slice(1)})}(f.formats[p.toUpperCase()])},d=function(){var f=this;return{months:function(p){return p?p.format("MMMM"):s(f,"months")},monthsShort:function(p){return p?p.format("MMM"):s(f,"monthsShort","months",3)},firstDayOfWeek:function(){return f.$locale().weekStart||0},weekdays:function(p){return p?p.format("dddd"):s(f,"weekdays")},weekdaysMin:function(p){return p?p.format("dd"):s(f,"weekdaysMin","weekdays",2)},weekdaysShort:function(p){return p?p.format("ddd"):s(f,"weekdaysShort","weekdays",3)},longDateFormat:function(p){return u(f.$locale(),p)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};o.localeData=function(){return d.bind(this)()},a.localeData=function(){var f=l();return{firstDayOfWeek:function(){return f.weekStart||0},weekdays:function(){return a.weekdays()},weekdaysShort:function(){return a.weekdaysShort()},weekdaysMin:function(){return a.weekdaysMin()},months:function(){return a.months()},monthsShort:function(){return a.monthsShort()},longDateFormat:function(p){return u(f,p)},meridiem:f.meridiem,ordinal:f.ordinal}},a.months=function(){return s(l(),"months")},a.monthsShort=function(){return s(l(),"monthsShort","months",3)},a.weekdays=function(f){return s(l(),"weekdays",null,null,f)},a.weekdaysShort=function(f){return s(l(),"weekdaysShort","weekdays",3,f)},a.weekdaysMin=function(f){return s(l(),"weekdaysMin","weekdays",2,f)}}})})(G2);var RU=G2.exports;const MU=qe(RU);var Y2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nr,function(){var r={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,a,o){var i=a.prototype,s=i.format;o.en.formats=r,i.format=function(l){l===void 0&&(l="YYYY-MM-DDTHH:mm:ssZ");var u=this.$locale().formats,d=function(f,p){return f.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,y,m){var x=m&&m.toUpperCase();return y||p[m]||r[m]||p[x].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(h,g,w){return g||w.slice(1)})})}(l,u===void 0?{}:u);return s.call(this,d)}}})})(Y2);var AU=Y2.exports;const LU=qe(AU);var K2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nr,function(){return function(r,n,a){var o=function(i,s){if(!s||!s.length||s.length===1&&!s[0]||s.length===1&&Array.isArray(s[0])&&!s[0].length)return null;var l;s.length===1&&s[0].length>0&&(s=s[0]),l=(s=s.filter(function(d){return d}))[0];for(var u=1;u<s.length;u+=1)s[u].isValid()&&!s[u][i](l)||(l=s[u]);return l};a.max=function(){var i=[].slice.call(arguments,0);return o("isAfter",i)},a.min=function(){var i=[].slice.call(arguments,0);return o("isBefore",i)}}})})(K2);var IU=K2.exports;const zU=qe(IU);var q2={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nr,function(){var r="minute",n=/[+-]\d\d(?::?\d\d)?/g,a=/([+-]|\d\d)/g;return function(o,i,s){var l=i.prototype;s.utc=function(m){var x={date:m,utc:!0,args:arguments};return new i(x)},l.utc=function(m){var x=s(this.toDate(),{locale:this.$L,utc:!0});return m?x.add(this.utcOffset(),r):x},l.local=function(){return s(this.toDate(),{locale:this.$L,utc:!1})};var u=l.parse;l.parse=function(m){m.utc&&(this.$u=!0),this.$utils().u(m.$offset)||(this.$offset=m.$offset),u.call(this,m)};var d=l.init;l.init=function(){if(this.$u){var m=this.$d;this.$y=m.getUTCFullYear(),this.$M=m.getUTCMonth(),this.$D=m.getUTCDate(),this.$W=m.getUTCDay(),this.$H=m.getUTCHours(),this.$m=m.getUTCMinutes(),this.$s=m.getUTCSeconds(),this.$ms=m.getUTCMilliseconds()}else d.call(this)};var f=l.utcOffset;l.utcOffset=function(m,x){var h=this.$utils().u;if(h(m))return this.$u?0:h(this.$offset)?f.call(this):this.$offset;if(typeof m=="string"&&(m=function(b){b===void 0&&(b="");var E=b.match(n);if(!E)return null;var j=(""+E[0]).match(a)||["-",0,0],k=j[0],D=60*+j[1]+ +j[2];return D===0?0:k==="+"?D:-D}(m),m===null))return this;var g=Math.abs(m)<=16?60*m:m,w=this;if(x)return w.$offset=g,w.$u=m===0,w;if(m!==0){var S=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(w=this.local().add(g+S,r)).$offset=g,w.$x.$localOffset=S}else w=this.utc();return w};var p=l.format;l.format=function(m){var x=m||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return p.call(this,x)},l.valueOf=function(){var m=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*m},l.isUTC=function(){return!!this.$u},l.toISOString=function(){return this.toDate().toISOString()},l.toString=function(){return this.toDate().toUTCString()};var v=l.toDate;l.toDate=function(m){return m==="s"&&this.$offset?s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():v.call(this)};var y=l.diff;l.diff=function(m,x,h){if(m&&this.$u===m.$u)return y.call(this,m,x,h);var g=this.local(),w=s(m).local();return y.call(g,w,x,h)}}})})(q2);var FU=q2.exports;const UU=qe(FU);function Xr(e){return e.children}var Ut={PREVIOUS:"PREV",NEXT:"NEXT",TODAY:"TODAY",DATE:"DATE"},jt={MONTH:"month",WEEK:"week",WORK_WEEK:"work_week",DAY:"day",AGENDA:"agenda"},l0=Object.keys(jt).map(function(e){return jt[e]});M.oneOfType([M.string,M.func]);M.any;M.func;M.oneOfType([M.arrayOf(M.oneOf(l0)),M.objectOf(function(e,t){var r=l0.indexOf(t)!==-1&&typeof e[t]=="boolean";if(r)return null;for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];return M.elementType.apply(M,[e,t].concat(a))})]);M.oneOfType([M.oneOf(["overlap","no-overlap"]),M.func]);function Fe(e,t){e&&e.apply(null,[].concat(t))}var c0={seconds:1e3,minutes:1e3*60,hours:1e3*60*60,day:1e3*60*60*24};function X2(e,t){var r=gt(e,"month");return gt(r,"week",t.startOfWeek())}function Q2(e,t){var r=Dc(e,"month");return Dc(r,"week",t.startOfWeek())}function BU(e,t){for(var r=X2(e,t),n=Q2(e,t),a=[];To(r,n,"day");)a.push(r),r=$r(r,1,"day");return a}function HU(e,t){var r=gt(e,t);return ks(r,e)?r:$r(r,1,t)}function WU(e,t){for(var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"day",n=e,a=[];To(n,t,r);)a.push(n),n=$r(n,1,r);return a}function VU(e,t){return t==null&&e==null?null:(t==null&&(t=new Date),e==null&&(e=new Date),e=gt(e,"day"),e=is(e,is(t)),e=bo(e,bo(t)),e=os(e,os(t)),as(e,as(t)))}function u0(e){return is(e)===0&&bo(e)===0&&os(e)===0&&as(e)===0}function GU(e,t,r,n){return r==="day"&&(r="date"),Math.abs(Gg[r](e,void 0,n)-Gg[r](t,void 0,n))}function xm(e,t,r){return!r||r==="milliseconds"?Math.abs(+e-+t):Math.round(Math.abs(+gt(e,r)/c0[r]-+gt(t,r)/c0[r]))}var YU=M.oneOfType([M.string,M.func]);function KU(e,t,r,n,a){var o=typeof n=="function"?n(r,a,e):t.call(e,r,n,a);return Ji(o==null||typeof o=="string","`localizer format(..)` must return a string, null, or undefined"),o}function qU(e,t,r){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,t+r,0,0)}function Sm(e,t){return e.getTimezoneOffset()-t.getTimezoneOffset()}function XU(e,t){return xm(e,t,"minutes")+Sm(e,t)}function QU(e){var t=gt(e,"day");return xm(t,e,"minutes")+Sm(t,e)}function JU(e,t){return Wh(e,t,"day")}function ZU(e,t,r){var n=ks(e,t,"minutes");return n?js(t,r,"minutes"):Su(t,r,"minutes")}function wp(e,t){return GU(e,t,"day")}function eB(e){var t=e.evtA,r=t.start,n=t.end,a=t.allDay,o=e.evtB,i=o.start,s=o.end,l=o.allDay,u=+gt(r,"day")-+gt(i,"day"),d=wp(r,n),f=wp(i,s);return u||f-d||!!l-!!a||+r-+i||+n-+s}function tB(e){var t=e.event,r=t.start,n=t.end,a=e.range,o=a.start,i=a.end,s=gt(r,"day"),l=To(s,i,"day"),u=Hh(s,n,"minutes"),d=u?Su(n,o,"minutes"):js(n,o,"minutes");return l&&d}function rB(e,t){return ks(e,t,"day")}function nB(e,t){return u0(e)&&u0(t)}var aB=dt(function e(t){var r=this;ut(this,e),Ji(typeof t.format=="function","date localizer `format(..)` must be a function"),Ji(typeof t.firstOfWeek=="function","date localizer `firstOfWeek(..)` must be a function"),this.propType=t.propType||YU,this.formats=t.formats,this.format=function(){for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return KU.apply(void 0,[r,t.format].concat(a))},this.startOfWeek=t.firstOfWeek,this.merge=t.merge||VU,this.inRange=t.inRange||zx,this.lt=t.lt||Wh,this.lte=t.lte||To,this.gt=t.gt||Su,this.gte=t.gte||js,this.eq=t.eq||ks,this.neq=t.neq||Hh,this.startOf=t.startOf||gt,this.endOf=t.endOf||Dc,this.add=t.add||$r,this.range=t.range||WU,this.diff=t.diff||xm,this.ceil=t.ceil||HU,this.min=t.min||Lx,this.max=t.max||Ix,this.minutes=t.minutes||bo,this.daySpan=t.daySpan||wp,this.firstVisibleDay=t.firstVisibleDay||X2,this.lastVisibleDay=t.lastVisibleDay||Q2,this.visibleDays=t.visibleDays||BU,this.getSlotDate=t.getSlotDate||qU,this.getTimezoneOffset=t.getTimezoneOffset||function(n){return n.getTimezoneOffset()},this.getDstOffset=t.getDstOffset||Sm,this.getTotalMin=t.getTotalMin||XU,this.getMinutesFromMidnight=t.getMinutesFromMidnight||QU,this.continuesPrior=t.continuesPrior||JU,this.continuesAfter=t.continuesAfter||ZU,this.sortEvents=t.sortEvents||eB,this.inEventRange=t.inEventRange||tB,this.isSameDate=t.isSameDate||rB,this.startAndEndAreDateOnly=t.startAndEndAreDateOnly||nB,this.segmentOffset=t.browserTZOffset?t.browserTZOffset():0});function oB(e,t,r,n){var a=$e($e({},e.formats),r);return $e($e({},e),{},{messages:n,startOfWeek:function(){return e.startOfWeek(t)},format:function(i,s){return e.format(i,a[s]||s,t)}})}var iB={date:"Date",time:"Time",event:"Event",allDay:"All Day",week:"Week",work_week:"Work Week",day:"Day",month:"Month",previous:"Back",next:"Next",yesterday:"Yesterday",tomorrow:"Tomorrow",today:"Today",agenda:"Agenda",noEventsInRange:"There are no events in this range.",showMore:function(t){return"+".concat(t," more")}};function sB(e){return $e($e({},iB),e)}function lB(e){var t=e.ref,r=e.callback;$.useEffect(function(){var n=function(o){t.current&&!t.current.contains(o.target)&&r()};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}},[t,r])}var cB=["style","className","event","selected","isAllDay","onSelect","onDoubleClick","onKeyPress","localizer","continuesPrior","continuesAfter","accessors","getters","children","components","slotStart","slotEnd"],J2=function(e){function t(){return ut(this,t),Tt(this,t,arguments)}return _t(t,e),dt(t,[{key:"render",value:function(){var n=this.props,a=n.style,o=n.className,i=n.event,s=n.selected,l=n.isAllDay,u=n.onSelect,d=n.onDoubleClick,f=n.onKeyPress,p=n.localizer,v=n.continuesPrior,y=n.continuesAfter,m=n.accessors,x=n.getters,h=n.children,g=n.components,w=g.event,S=g.eventWrapper,b=n.slotStart,E=n.slotEnd,j=Ur(n,cB);delete j.resizable;var k=m.title(i),D=m.tooltip(i),O=m.end(i),R=m.start(i),Q=m.allDay(i),X=l||Q||p.diff(R,p.ceil(O,"day"),"day")>1,Y=x.eventProp(i,R,O,s),z=C.createElement("div",{className:"rbc-event-content",title:D||void 0},w?C.createElement(w,{event:i,continuesPrior:v,continuesAfter:y,title:k,isAllDay:Q,localizer:p,slotStart:b,slotEnd:E}):k);return C.createElement(S,Object.assign({},this.props,{type:"date"}),C.createElement("div",Object.assign({},j,{style:$e($e({},Y.style),a),className:it("rbc-event",o,Y.className,{"rbc-selected":s,"rbc-event-allday":X,"rbc-event-continues-prior":v,"rbc-event-continues-after":y}),onClick:function(V){return u&&u(i,V)},onDoubleClick:function(V){return d&&d(i,V)},onKeyDown:function(V){return f&&f(i,V)}}),typeof h=="function"?h(z):z))}}])}(C.Component);function Iu(e,t){return!e||t==null?!1:bM(e,t)}function Z2(e,t){var r=e.right-e.left,n=r/t;return n}function eS(e,t,r,n){var a=Z2(e,n);return r?n-1-Math.floor((t-e.left)/a):Math.floor((t-e.left)/a)}function uB(e,t){var r=t.x,n=t.y;return n>=e.top&&n<=e.bottom&&r>=e.left&&r<=e.right}function dB(e,t,r,n,a){var o=-1,i=-1,s=n-1,l=Z2(t,n),u=eS(t,r.x,a,n),d=t.top<r.y&&t.bottom>r.y,f=t.top<e.y&&t.bottom>e.y,p=e.y>t.bottom,v=t.top>e.y,y=r.top<t.top&&r.bottom>t.bottom;return y&&(o=0,i=s),d&&(v?(o=0,i=u):p&&(o=u,i=s)),f&&(o=i=a?s-Math.floor((e.x-t.left)/l):Math.floor((e.x-t.left)/l),d?u<o?o=u:i=u:e.y<r.y?i=s:o=0),{startIdx:o,endIdx:i}}function fB(e){var t=e.target,r=e.offset,n=e.container,a=e.box,o=fa(t),i=o.top,s=o.left,l=o.width,u=o.height,d=fa(n),f=d.top,p=d.left,v=d.width,y=d.height,m=fa(a),x=m.width,h=m.height,g=f+y,w=p+v,S=i+h,b=s+x,E=r.x,j=r.y,k=S>g?i-h-j:i+j+u,D=b>w?s+E-x+l:s+E;return{topOffset:k,leftOffset:D}}function pB(e){var t=e.containerRef,r=e.accessors,n=e.getters,a=e.selected,o=e.components,i=e.localizer,s=e.position,l=e.show,u=e.events,d=e.slotStart,f=e.slotEnd,p=e.onSelect,v=e.onDoubleClick,y=e.onKeyPress,m=e.handleDragStart,x=e.popperRef,h=e.target,g=e.offset;lB({ref:x,callback:l}),$.useLayoutEffect(function(){var b=fB({target:h,offset:g,container:t.current,box:x.current}),E=b.topOffset,j=b.leftOffset;x.current.style.top="".concat(E,"px"),x.current.style.left="".concat(j,"px")},[g.x,g.y,h]);var w=s.width,S={minWidth:w+w/2};return C.createElement("div",{style:S,className:"rbc-overlay",ref:x},C.createElement("div",{className:"rbc-overlay-header"},i.format(d,"dayHeaderFormat")),u.map(function(b,E){return C.createElement(J2,{key:E,type:"popup",localizer:i,event:b,getters:n,onSelect:p,accessors:r,components:o,onDoubleClick:v,onKeyPress:y,continuesPrior:i.lt(r.end(b),d,"day"),continuesAfter:i.gte(r.start(b),f,"day"),slotStart:d,slotEnd:f,selected:Iu(b,a),draggable:!0,onDragStart:function(){return m(b)},onDragEnd:function(){return l()}})}))}var tS=C.forwardRef(function(e,t){return C.createElement(pB,Object.assign({},e,{popperRef:t}))});tS.propTypes={accessors:M.object.isRequired,getters:M.object.isRequired,selected:M.object,components:M.object.isRequired,localizer:M.object.isRequired,position:M.object.isRequired,show:M.func.isRequired,events:M.array.isRequired,slotStart:M.instanceOf(Date).isRequired,slotEnd:M.instanceOf(Date),onSelect:M.func,onDoubleClick:M.func,onKeyPress:M.func,handleDragStart:M.func,style:M.object,offset:M.shape({x:M.number,y:M.number})};function hB(e){var t=e.containerRef,r=e.popupOffset,n=r===void 0?5:r,a=e.overlay,o=e.accessors,i=e.localizer,s=e.components,l=e.getters,u=e.selected,d=e.handleSelectEvent,f=e.handleDoubleClickEvent,p=e.handleKeyPressEvent,v=e.handleDragStart,y=e.onHide,m=e.overlayDisplay,x=$.useRef(null);if(!a.position)return null;var h=n;isNaN(n)||(h={x:n,y:n});var g=a.position,w=a.events,S=a.date,b=a.end;return C.createElement(am,{rootClose:!0,flip:!0,show:!0,placement:"bottom",onHide:y,target:a.target},function(E){var j=E.props;return C.createElement(tS,Object.assign({},j,{containerRef:t,ref:x,target:a.target,offset:h,accessors:o,getters:l,selected:u,components:s,localizer:i,position:g,show:m,events:w,slotStart:S,slotEnd:b,onSelect:d,onDoubleClick:f,onKeyPress:p,handleDragStart:v}))})}var Em=C.forwardRef(function(e,t){return C.createElement(hB,Object.assign({},e,{containerRef:t}))});Em.propTypes={popupOffset:M.oneOfType([M.number,M.shape({x:M.number,y:M.number})]),overlay:M.shape({position:M.object,events:M.array,date:M.instanceOf(Date),end:M.instanceOf(Date)}),accessors:M.object.isRequired,localizer:M.object.isRequired,components:M.object.isRequired,getters:M.object.isRequired,selected:M.object,handleSelectEvent:M.func,handleDoubleClickEvent:M.func,handleKeyPressEvent:M.func,handleDragStart:M.func,onHide:M.func,overlayDisplay:M.func};function xt(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document;return vi(r,e,t,{passive:!1})}function mB(e,t,r){return!e||ss(e,document.elementFromPoint(t,r))}function vB(e,t){var r=t.clientX,n=t.clientY,a=document.elementFromPoint(r,n);return b2(a,".rbc-event",e)}function gB(e,t){var r=t.clientX,n=t.clientY,a=document.elementFromPoint(r,n);return b2(a,".rbc-show-more",e)}function Ac(e,t){return!!vB(e,t)}function yB(e,t){return!!gB(e,t)}function ci(e){var t=e;return e.touches&&e.touches.length&&(t=e.touches[0]),{clientX:t.clientX,clientY:t.clientY,pageX:t.pageX,pageY:t.pageY}}var d0=5,wB=250,rS=function(){function e(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.global,a=n===void 0?!1:n,o=r.longPressThreshold,i=o===void 0?250:o,s=r.validContainers,l=s===void 0?[]:s;ut(this,e),this._initialEvent=null,this.selecting=!1,this.isDetached=!1,this.container=t,this.globalMouse=!t||a,this.longPressThreshold=i,this.validContainers=l,this._listeners=Object.create(null),this._handleInitialEvent=this._handleInitialEvent.bind(this),this._handleMoveEvent=this._handleMoveEvent.bind(this),this._handleTerminatingEvent=this._handleTerminatingEvent.bind(this),this._keyListener=this._keyListener.bind(this),this._dropFromOutsideListener=this._dropFromOutsideListener.bind(this),this._dragOverFromOutsideListener=this._dragOverFromOutsideListener.bind(this),this._removeTouchMoveWindowListener=xt("touchmove",function(){},window),this._removeKeyDownListener=xt("keydown",this._keyListener),this._removeKeyUpListener=xt("keyup",this._keyListener),this._removeDropFromOutsideListener=xt("drop",this._dropFromOutsideListener),this._removeDragOverFromOutsideListener=xt("dragover",this._dragOverFromOutsideListener),this._addInitialEventListener()}return dt(e,[{key:"on",value:function(r,n){var a=this._listeners[r]||(this._listeners[r]=[]);return a.push(n),{remove:function(){var i=a.indexOf(n);i!==-1&&a.splice(i,1)}}}},{key:"emit",value:function(r){for(var n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];var i,s=this._listeners[r]||[];return s.forEach(function(l){i===void 0&&(i=l.apply(void 0,a))}),i}},{key:"teardown",value:function(){this._initialEvent=null,this._initialEventData=null,this._selectRect=null,this.selecting=!1,this._lastClickData=null,this.isDetached=!0,this._listeners=Object.create(null),this._removeTouchMoveWindowListener&&this._removeTouchMoveWindowListener(),this._removeInitialEventListener&&this._removeInitialEventListener(),this._removeEndListener&&this._removeEndListener(),this._onEscListener&&this._onEscListener(),this._removeMoveListener&&this._removeMoveListener(),this._removeKeyUpListener&&this._removeKeyUpListener(),this._removeKeyDownListener&&this._removeKeyDownListener(),this._removeDropFromOutsideListener&&this._removeDropFromOutsideListener(),this._removeDragOverFromOutsideListener&&this._removeDragOverFromOutsideListener()}},{key:"isSelected",value:function(r){var n=this._selectRect;return!n||!this.selecting?!1:f0(n,ja(r))}},{key:"filter",value:function(r){var n=this._selectRect;return!n||!this.selecting?[]:r.filter(this.isSelected,this)}},{key:"_addLongPressListener",value:function(r,n){var a=this,o=null,i=null,s=null,l=function(p){o=setTimeout(function(){d(),r(p)},a.longPressThreshold),i=xt("touchmove",function(){return d()}),s=xt("touchend",function(){return d()})},u=xt("touchstart",l),d=function(){o&&clearTimeout(o),i&&i(),s&&s(),o=null,i=null,s=null};return n&&l(n),function(){d(),u()}}},{key:"_addInitialEventListener",value:function(){var r=this,n=xt("mousedown",function(o){r._removeInitialEventListener(),r._handleInitialEvent(o),r._removeInitialEventListener=xt("mousedown",r._handleInitialEvent)}),a=xt("touchstart",function(o){r._removeInitialEventListener(),r._removeInitialEventListener=r._addLongPressListener(r._handleInitialEvent,o)});this._removeInitialEventListener=function(){n(),a()}}},{key:"_dropFromOutsideListener",value:function(r){var n=ci(r),a=n.pageX,o=n.pageY,i=n.clientX,s=n.clientY;this.emit("dropFromOutside",{x:a,y:o,clientX:i,clientY:s}),r.preventDefault()}},{key:"_dragOverFromOutsideListener",value:function(r){var n=ci(r),a=n.pageX,o=n.pageY,i=n.clientX,s=n.clientY;this.emit("dragOverFromOutside",{x:a,y:o,clientX:i,clientY:s}),r.preventDefault()}},{key:"_handleInitialEvent",value:function(r){if(this._initialEvent=r,!this.isDetached){var n=ci(r),a=n.clientX,o=n.clientY,i=n.pageX,s=n.pageY,l=this.container(),u,d;if(!(r.which===3||r.button===2||!mB(l,a,o))){if(!this.globalMouse&&l&&!ss(l,r.target)){var f=bB(0),p=f.top,v=f.left,y=f.bottom,m=f.right;if(d=ja(l),u=f0({top:d.top-p,left:d.left-v,bottom:d.bottom+y,right:d.right+m},{top:s,left:i}),!u)return}var x=this.emit("beforeSelect",this._initialEventData={isTouch:/^touch/.test(r.type),x:i,y:s,clientX:a,clientY:o});if(x!==!1)switch(r.type){case"mousedown":this._removeEndListener=xt("mouseup",this._handleTerminatingEvent),this._onEscListener=xt("keydown",this._handleTerminatingEvent),this._removeMoveListener=xt("mousemove",this._handleMoveEvent);break;case"touchstart":this._handleMoveEvent(r),this._removeEndListener=xt("touchend",this._handleTerminatingEvent),this._removeMoveListener=xt("touchmove",this._handleMoveEvent);break}}}}},{key:"_isWithinValidContainer",value:function(r){var n=r.target,a=this.validContainers;return!a||!a.length||!n?!0:a.some(function(o){return!!n.closest(o)})}},{key:"_handleTerminatingEvent",value:function(r){var n=this.selecting,a=this._selectRect;if(!n&&r.type.includes("key")&&(r=this._initialEvent),this.selecting=!1,this._removeEndListener&&this._removeEndListener(),this._removeMoveListener&&this._removeMoveListener(),this._selectRect=null,this._initialEvent=null,this._initialEventData=null,!!r){var o=!this.container||ss(this.container(),r.target),i=this._isWithinValidContainer(r);return r.key==="Escape"||!i?this.emit("reset"):!n&&o?this._handleClickEvent(r):n?this.emit("select",a):this.emit("reset")}}},{key:"_handleClickEvent",value:function(r){var n=ci(r),a=n.pageX,o=n.pageY,i=n.clientX,s=n.clientY,l=new Date().getTime();return this._lastClickData&&l-this._lastClickData.timestamp<wB?(this._lastClickData=null,this.emit("doubleClick",{x:a,y:o,clientX:i,clientY:s})):(this._lastClickData={timestamp:l},this.emit("click",{x:a,y:o,clientX:i,clientY:s}))}},{key:"_handleMoveEvent",value:function(r){if(!(this._initialEventData===null||this.isDetached)){var n=this._initialEventData,a=n.x,o=n.y,i=ci(r),s=i.pageX,l=i.pageY,u=Math.abs(a-s),d=Math.abs(o-l),f=Math.min(s,a),p=Math.min(l,o),v=this.selecting,y=this.isClick(s,l);y&&!v&&!(u||d)||(!v&&!y&&this.emit("selectStart",this._initialEventData),y||(this.selecting=!0,this._selectRect={top:p,left:f,x:s,y:l,right:f+u,bottom:p+d},this.emit("selecting",this._selectRect)),r.preventDefault())}}},{key:"_keyListener",value:function(r){this.ctrl=r.metaKey||r.ctrlKey}},{key:"isClick",value:function(r,n){var a=this._initialEventData,o=a.x,i=a.y,s=a.isTouch;return!s&&Math.abs(r-o)<=d0&&Math.abs(n-i)<=d0}}])}();function bB(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;return sn(e)!=="object"&&(e={top:e,left:e,right:e,bottom:e}),e}function f0(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=ja(e),a=n.top,o=n.left,i=n.right,s=i===void 0?o:i,l=n.bottom,u=l===void 0?a:l,d=ja(t),f=d.top,p=d.left,v=d.right,y=v===void 0?p:v,m=d.bottom,x=m===void 0?f:m;return!(u-r<f||a+r>x||s-r<p||o+r>y)}function ja(e){if(!e.getBoundingClientRect)return e;var t=e.getBoundingClientRect(),r=t.left+p0("left"),n=t.top+p0("top");return{top:n,left:r,right:(e.offsetWidth||0)+r,bottom:(e.offsetHeight||0)+n}}function p0(e){if(e==="left")return window.pageXOffset||document.body.scrollLeft||0;if(e==="top")return window.pageYOffset||document.body.scrollTop||0}var xB=function(e){function t(r,n){var a;return ut(this,t),a=Tt(this,t,[r,n]),a.state={selecting:!1},a.containerRef=$.createRef(),a}return _t(t,e),dt(t,[{key:"componentDidMount",value:function(){this.props.selectable&&this._selectable()}},{key:"componentWillUnmount",value:function(){this._teardownSelectable()}},{key:"componentDidUpdate",value:function(n){!n.selectable&&this.props.selectable&&this._selectable(),n.selectable&&!this.props.selectable&&this._teardownSelectable()}},{key:"render",value:function(){var n=this.props,a=n.range,o=n.getNow,i=n.getters,s=n.date,l=n.components.dateCellWrapper,u=n.localizer,d=this.state,f=d.selecting,p=d.startIdx,v=d.endIdx,y=o();return C.createElement("div",{className:"rbc-row-bg",ref:this.containerRef},a.map(function(m,x){var h=f&&x>=p&&x<=v,g=i.dayProp(m),w=g.className,S=g.style;return C.createElement(l,{key:x,value:m,range:a},C.createElement("div",{style:S,className:it("rbc-day-bg",w,h&&"rbc-selected-cell",u.isSameDate(m,y)&&"rbc-today",s&&u.neq(s,m,"month")&&"rbc-off-range-bg")}))}))}},{key:"_selectable",value:function(){var n=this,a=this.containerRef.current,o=this._selector=new rS(this.props.container,{longPressThreshold:this.props.longPressThreshold}),i=function(l,u){if(!Ac(a,l)&&!yB(a,l)){var d=ja(a),f=n.props,p=f.range,v=f.rtl;if(uB(d,l)){var y=eS(d,l.x,v,p.length);n._selectSlot({startIdx:y,endIdx:y,action:u,box:l})}}n._initial={},n.setState({selecting:!1})};o.on("selecting",function(s){var l=n.props,u=l.range,d=l.rtl,f=-1,p=-1;if(n.state.selecting||(Fe(n.props.onSelectStart,[s]),n._initial={x:s.x,y:s.y}),o.isSelected(a)){var v=ja(a),y=dB(n._initial,v,s,u.length,d);f=y.startIdx,p=y.endIdx}n.setState({selecting:!0,startIdx:f,endIdx:p})}),o.on("beforeSelect",function(s){if(n.props.selectable==="ignoreEvents")return!Ac(n.containerRef.current,s)}),o.on("click",function(s){return i(s,"click")}),o.on("doubleClick",function(s){return i(s,"doubleClick")}),o.on("select",function(s){n._selectSlot($e($e({},n.state),{},{action:"select",bounds:s})),n._initial={},n.setState({selecting:!1}),Fe(n.props.onSelectEnd,[n.state])})}},{key:"_teardownSelectable",value:function(){this._selector&&(this._selector.teardown(),this._selector=null)}},{key:"_selectSlot",value:function(n){var a=n.endIdx,o=n.startIdx,i=n.action,s=n.bounds,l=n.box;a!==-1&&o!==-1&&this.props.onSelectSlot&&this.props.onSelectSlot({start:o,end:a,action:i,bounds:s,box:l,resourceId:this.props.resourceId})}}])}(C.Component),Rr={propTypes:{slotMetrics:M.object.isRequired,selected:M.object,isAllDay:M.bool,accessors:M.object.isRequired,localizer:M.object.isRequired,components:M.object.isRequired,getters:M.object.isRequired,onSelect:M.func,onDoubleClick:M.func,onKeyPress:M.func},defaultProps:{segments:[],selected:{}},renderEvent:function(t,r){var n=t.selected;t.isAllDay;var a=t.accessors,o=t.getters,i=t.onSelect,s=t.onDoubleClick,l=t.onKeyPress,u=t.localizer,d=t.slotMetrics,f=t.components,p=t.resizable,v=d.continuesPrior(r),y=d.continuesAfter(r);return C.createElement(J2,{event:r,getters:o,localizer:u,accessors:a,components:f,onSelect:i,onDoubleClick:s,onKeyPress:l,continuesPrior:v,continuesAfter:y,slotStart:d.first,slotEnd:d.last,selected:Iu(r,n),resizable:p})},renderSpan:function(t,r,n){var a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:" ",o=Math.abs(r)/t*100+"%";return C.createElement("div",{key:n,className:"rbc-row-segment",style:{WebkitFlexBasis:o,flexBasis:o,maxWidth:o}},a)}},nS=function(e){function t(){return ut(this,t),Tt(this,t,arguments)}return _t(t,e),dt(t,[{key:"render",value:function(){var n=this,a=this.props,o=a.segments,i=a.slotMetrics.slots,s=a.className,l=1;return C.createElement("div",{className:it(s,"rbc-row")},o.reduce(function(u,d,f){var p=d.event,v=d.left,y=d.right,m=d.span,x="_lvl_"+f,h=v-l,g=Rr.renderEvent(n.props,p);return h&&u.push(Rr.renderSpan(i,h,"".concat(x,"_gap"))),u.push(Rr.renderSpan(i,m,x,g)),l=y+1,u},[]))}}])}(C.Component);nS.defaultProps=$e({},Rr.defaultProps);function aS(e){var t=e.dateRange,r=e.unit,n=r===void 0?"day":r,a=e.localizer;return{first:t[0],last:a.add(t[t.length-1],1,n)}}function SB(e,t,r,n){var a=aS({dateRange:t,localizer:n}),o=a.first,i=a.last,s=n.diff(o,i,"day"),l=n.max(n.startOf(r.start(e),"day"),o),u=n.min(n.ceil(r.end(e),"day"),i),d=x7(t,function(p){return n.isSameDate(p,l)}),f=n.diff(l,u,"day");return f=Math.min(f,s),f=Math.max(f-n.segmentOffset,1),{event:e,span:f,left:d+1,right:Math.max(d+f,1)}}function oS(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1/0,r,n,a,o=[],i=[];for(r=0;r<e.length;r++){for(a=e[r],n=0;n<o.length&&EB(a,o[n]);n++);n>=t?i.push(a):(o[n]||(o[n]=[])).push(a)}for(r=0;r<o.length;r++)o[r].sort(function(s,l){return s.left-l.left});return{levels:o,extra:i}}function us(e,t,r,n,a){var o={start:n.start(e),end:n.end(e)},i={start:t,end:r};return a.inEventRange({event:o,range:i})}function EB(e,t){return t.some(function(r){return r.left<=e.right&&r.right>=e.left})}function kB(e,t,r){var n=Hl(e),a=[],o=[];n.forEach(function(l){var u=t.start(l),d=t.end(l);r.daySpan(u,d)>1?a.push(l):o.push(l)});var i=a.sort(function(l,u){return bp(l,u,t,r)}),s=o.sort(function(l,u){return bp(l,u,t,r)});return[].concat(Hl(i),Hl(s))}function bp(e,t,r,n){var a={start:r.start(e),end:r.end(e),allDay:r.allDay(e)},o={start:r.start(t),end:r.end(t),allDay:r.allDay(t)};return n.sortEvents({evtA:a,evtB:o})}var iS=function(t,r){return t.left<=r&&t.right>=r},h0=function(t,r){return t.filter(function(n){return iS(n,r)}).map(function(n){return n.event})},sS=function(e){function t(){return ut(this,t),Tt(this,t,arguments)}return _t(t,e),dt(t,[{key:"render",value:function(){for(var n=this.props,a=n.segments,o=n.slotMetrics.slots,i=oS(a).levels[0],s=1,l=1,u=[];s<=o;){var d="_lvl_"+s,f=i.filter(function(g){return iS(g,s)})[0]||{},p=f.event,v=f.left,y=f.right,m=f.span;if(!p){s++;continue}var x=Math.max(0,v-l);if(this.canRenderSlotEvent(v,m)){var h=Rr.renderEvent(this.props,p);x&&u.push(Rr.renderSpan(o,x,d+"_gap")),u.push(Rr.renderSpan(o,m,d,h)),l=s=y+1}else x&&u.push(Rr.renderSpan(o,x,d+"_gap")),u.push(Rr.renderSpan(o,1,d,this.renderShowMore(a,s))),l=s=s+1}return C.createElement("div",{className:"rbc-row"},u)}},{key:"canRenderSlotEvent",value:function(n,a){var o=this.props.segments;return P7(n,n+a).every(function(i){var s=h0(o,i).length;return s===1})}},{key:"renderShowMore",value:function(n,a){var o=this,i=this.props,s=i.localizer,l=i.slotMetrics,u=l.getEventsForSlot(a),d=h0(n,a),f=d.length;return f?C.createElement("button",{type:"button",key:"sm_"+a,className:it("rbc-button-link","rbc-show-more"),onClick:function(v){return o.showMore(a,v)}},s.messages.showMore(f,d,u)):!1}},{key:"showMore",value:function(n,a){a.preventDefault(),a.stopPropagation(),this.props.onShowMore(n,a.target)}}])}(C.Component);sS.defaultProps=$e({},Rr.defaultProps);var jB=function(t){var r=t.children;return C.createElement("div",{className:"rbc-row-content-scroll-container"},r)},$B=function(t,r){return t.left<=r&&t.right>=r},NB=function(t,r){return t[0].range===r[0].range&&t[0].events===r[0].events};function lS(){return j2(function(e){for(var t=e.range,r=e.events,n=e.maxRows,a=e.minRows,o=e.accessors,i=e.localizer,s=aS({dateRange:t,localizer:i}),l=s.first,u=s.last,d=r.map(function(m){return SB(m,t,o,i)}),f=oS(d,Math.max(n-1,1)),p=f.levels,v=f.extra,y=v.length>0?a-1:a;p.length<y;)p.push([]);return{first:l,last:u,levels:p,extra:v,range:t,slots:t.length,clone:function(x){var h=lS();return h($e($e({},e),x))},getDateForSlot:function(x){return t[x]},getSlotForDate:function(x){return t.find(function(h){return i.isSameDate(h,x)})},getEventsForSlot:function(x){return d.filter(function(h){return $B(h,x)}).map(function(h){return h.event})},continuesPrior:function(x){return i.continuesPrior(o.start(x),l)},continuesAfter:function(x){var h=o.start(x),g=o.end(x);return i.continuesAfter(h,g,u)}}},NB)}var Lc=function(e){function t(){var r;ut(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=Tt(this,t,[].concat(a)),r.handleSelectSlot=function(i){var s=r.props,l=s.range,u=s.onSelectSlot;u(l.slice(i.start,i.end+1),i)},r.handleShowMore=function(i,s){var l=r.props,u=l.range,d=l.onShowMore,f=r.slotMetrics(r.props),p=wD(r.containerRef.current,".rbc-row-bg")[0],v;p&&(v=p.children[i-1]);var y=f.getEventsForSlot(i);d(y,u[i-1],v,i,s)},r.getContainer=function(){var i=r.props.container;return i?i():r.containerRef.current},r.renderHeadingCell=function(i,s){var l=r.props,u=l.renderHeader,d=l.getNow,f=l.localizer;return u({date:i,key:"header_".concat(s),className:it("rbc-date-cell",f.isSameDate(i,d())&&"rbc-now")})},r.renderDummy=function(){var i=r.props,s=i.className,l=i.range,u=i.renderHeader,d=i.showAllEvents;return C.createElement("div",{className:s,ref:r.containerRef},C.createElement("div",{className:it("rbc-row-content",d&&"rbc-row-content-scrollable")},u&&C.createElement("div",{className:"rbc-row",ref:r.headingRowRef},l.map(r.renderHeadingCell)),C.createElement("div",{className:"rbc-row",ref:r.eventRowRef},C.createElement("div",{className:"rbc-row-segment"},C.createElement("div",{className:"rbc-event"},C.createElement("div",{className:"rbc-event-content"}," "))))))},r.containerRef=$.createRef(),r.headingRowRef=$.createRef(),r.eventRowRef=$.createRef(),r.slotMetrics=lS(),r}return _t(t,e),dt(t,[{key:"getRowLimit",value:function(){var n,a=Ud(this.eventRowRef.current),o=(n=this.headingRowRef)!==null&&n!==void 0&&n.current?Ud(this.headingRowRef.current):0,i=Ud(this.containerRef.current)-o;return Math.max(Math.floor(i/a),1)}},{key:"render",value:function(){var n=this.props,a=n.date,o=n.rtl,i=n.range,s=n.className,l=n.selected,u=n.selectable,d=n.renderForMeasure,f=n.accessors,p=n.getters,v=n.components,y=n.getNow,m=n.renderHeader,x=n.onSelect,h=n.localizer,g=n.onSelectStart,w=n.onSelectEnd,S=n.onDoubleClick,b=n.onKeyPress,E=n.resourceId,j=n.longPressThreshold,k=n.isAllDay,D=n.resizable,O=n.showAllEvents;if(d)return this.renderDummy();var R=this.slotMetrics(this.props),Q=R.levels,X=R.extra,Y=O?jB:Xr,z=v.weekWrapper,I={selected:l,accessors:f,getters:p,localizer:h,components:v,onSelect:x,onDoubleClick:S,onKeyPress:b,resourceId:E,slotMetrics:R,resizable:D};return C.createElement("div",{className:s,role:"rowgroup",ref:this.containerRef},C.createElement(xB,{localizer:h,date:a,getNow:y,rtl:o,range:i,selectable:u,container:this.getContainer,getters:p,onSelectStart:g,onSelectEnd:w,onSelectSlot:this.handleSelectSlot,components:v,longPressThreshold:j,resourceId:E}),C.createElement("div",{className:it("rbc-row-content",O&&"rbc-row-content-scrollable"),role:"row"},m&&C.createElement("div",{className:"rbc-row ",ref:this.headingRowRef},i.map(this.renderHeadingCell)),C.createElement(Y,null,C.createElement(z,Object.assign({isAllDay:k},I,{rtl:this.props.rtl}),Q.map(function(V,T){return C.createElement(nS,Object.assign({key:T,segments:V},I))}),!!X.length&&C.createElement(sS,Object.assign({segments:X,onShowMore:this.handleShowMore},I))))))}}])}(C.Component);Lc.defaultProps={minRows:0,maxRows:1/0};var cS=function(t){var r=t.label;return C.createElement("span",{role:"columnheader","aria-sort":"none"},r)},CB=function(t){var r=t.label,n=t.drilldownView,a=t.onDrillDown;return n?C.createElement("button",{type:"button",className:"rbc-button-link",onClick:a,role:"cell"},r):C.createElement("span",null,r)},DB=["date","className"],OB=function(t,r,n,a,o){return t.filter(function(i){return us(i,r,n,a,o)})},zu=function(e){function t(){var r;ut(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=Tt(this,t,[].concat(a)),r.getContainer=function(){return r.containerRef.current},r.renderWeek=function(i,s){var l=r.props,u=l.events,d=l.components,f=l.selectable,p=l.getNow,v=l.selected,y=l.date,m=l.localizer,x=l.longPressThreshold,h=l.accessors,g=l.getters,w=l.showAllEvents,S=r.state,b=S.needLimitMeasure,E=S.rowLimit,j=OB(Hl(u),i[0],i[i.length-1],h,m),k=kB(j,h,m);return C.createElement(Lc,{key:s,ref:s===0?r.slotRowRef:void 0,container:r.getContainer,className:"rbc-month-row",getNow:p,date:y,range:i,events:k,maxRows:w?1/0:E,selected:v,selectable:f,components:d,accessors:h,getters:g,localizer:m,renderHeader:r.readerDateHeading,renderForMeasure:b,onShowMore:r.handleShowMore,onSelect:r.handleSelectEvent,onDoubleClick:r.handleDoubleClickEvent,onKeyPress:r.handleKeyPressEvent,onSelectSlot:r.handleSelectSlot,longPressThreshold:x,rtl:r.props.rtl,resizable:r.props.resizable,showAllEvents:w})},r.readerDateHeading=function(i){var s=i.date,l=i.className,u=Ur(i,DB),d=r.props,f=d.date,p=d.getDrilldownView,v=d.localizer,y=v.neq(s,f,"month"),m=v.isSameDate(s,f),x=p(s),h=v.format(s,"dateFormat"),g=r.props.components.dateHeader||CB;return C.createElement("div",Object.assign({},u,{className:it(l,y&&"rbc-off-range",m&&"rbc-current"),role:"cell"}),C.createElement(g,{label:h,date:s,drilldownView:x,isOffRange:y,onDrillDown:function(S){return r.handleHeadingClick(s,x,S)}}))},r.handleSelectSlot=function(i,s){r._pendingSelection=r._pendingSelection.concat(i),clearTimeout(r._selectTimer),r._selectTimer=setTimeout(function(){return r.selectDates(s)})},r.handleHeadingClick=function(i,s,l){l.preventDefault(),r.clearSelection(),Fe(r.props.onDrillDown,[i,s])},r.handleSelectEvent=function(){r.clearSelection();for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onSelectEvent,s)},r.handleDoubleClickEvent=function(){r.clearSelection();for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onDoubleClickEvent,s)},r.handleKeyPressEvent=function(){r.clearSelection();for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onKeyPressEvent,s)},r.handleShowMore=function(i,s,l,u,d){var f=r.props,p=f.popup,v=f.onDrillDown,y=f.onShowMore,m=f.getDrilldownView,x=f.doShowMoreDrillDown;if(r.clearSelection(),p){var h=Jx(l,r.containerRef.current);r.setState({overlay:{date:s,events:i,position:h,target:d}})}else x&&Fe(v,[s,m(s)||jt.DAY]);Fe(y,[i,s,u])},r.overlayDisplay=function(){r.setState({overlay:null})},r.state={rowLimit:5,needLimitMeasure:!0,date:null},r.containerRef=$.createRef(),r.slotRowRef=$.createRef(),r._bgRows=[],r._pendingSelection=[],r}return _t(t,e),dt(t,[{key:"componentDidMount",value:function(){var n=this,a;this.state.needLimitMeasure&&this.measureRowLimit(this.props),window.addEventListener("resize",this._resizeListener=function(){a||Zx(function(){a=!1,n.setState({needLimitMeasure:!0})})},!1)}},{key:"componentDidUpdate",value:function(){this.state.needLimitMeasure&&this.measureRowLimit(this.props)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._resizeListener,!1)}},{key:"render",value:function(){var n=this.props,a=n.date,o=n.localizer,i=n.className,s=o.visibleDays(a,o),l=nD(s,7);return this._weekCount=l.length,C.createElement("div",{className:it("rbc-month-view",i),role:"table","aria-label":"Month View",ref:this.containerRef},C.createElement("div",{className:"rbc-row rbc-month-header",role:"row"},this.renderHeaders(l[0])),l.map(this.renderWeek),this.props.popup&&this.renderOverlay())}},{key:"renderHeaders",value:function(n){var a=this.props,o=a.localizer,i=a.components,s=n[0],l=n[n.length-1],u=i.header||cS;return o.range(s,l,"day").map(function(d,f){return C.createElement("div",{key:"header_"+f,className:"rbc-header"},C.createElement(u,{date:d,localizer:o,label:o.format(d,"weekdayFormat")}))})}},{key:"renderOverlay",value:function(){var n,a,o=this,i=(n=(a=this.state)===null||a===void 0?void 0:a.overlay)!==null&&n!==void 0?n:{},s=this.props,l=s.accessors,u=s.localizer,d=s.components,f=s.getters,p=s.selected,v=s.popupOffset,y=s.handleDragStart,m=function(){return o.setState({overlay:null})};return C.createElement(Em,{overlay:i,accessors:l,localizer:u,components:d,getters:f,selected:p,popupOffset:v,ref:this.containerRef,handleKeyPressEvent:this.handleKeyPressEvent,handleSelectEvent:this.handleSelectEvent,handleDoubleClickEvent:this.handleDoubleClickEvent,handleDragStart:y,show:!!i.position,overlayDisplay:this.overlayDisplay,onHide:m})}},{key:"measureRowLimit",value:function(){this.setState({needLimitMeasure:!1,rowLimit:this.slotRowRef.current.getRowLimit()})}},{key:"selectDates",value:function(n){var a=this._pendingSelection.slice();this._pendingSelection=[],a.sort(function(s,l){return+s-+l});var o=new Date(a[0]),i=new Date(a[a.length-1]);i.setDate(a[a.length-1].getDate()+1),Fe(this.props.onSelectSlot,{slots:a,start:o,end:i,action:n.action,bounds:n.bounds,box:n.box})}},{key:"clearSelection",value:function(){clearTimeout(this._selectTimer),this._pendingSelection=[]}}],[{key:"getDerivedStateFromProps",value:function(n,a){var o=n.date,i=n.localizer;return{date:o,needLimitMeasure:i.neq(o,a.date,"month")}}}])}(C.Component);zu.range=function(e,t){var r=t.localizer,n=r.firstVisibleDay(e,r),a=r.lastVisibleDay(e,r);return{start:n,end:a}};zu.navigate=function(e,t,r){var n=r.localizer;switch(t){case Ut.PREVIOUS:return n.add(e,-1,"month");case Ut.NEXT:return n.add(e,1,"month");default:return e}};zu.title=function(e,t){var r=t.localizer;return r.format(e,"monthHeaderFormat")};var m0=function(t){var r=t.min,n=t.max,a=t.step,o=t.slots,i=t.localizer;return"".concat(+i.startOf(r,"minutes"))+"".concat(+i.startOf(n,"minutes"))+"".concat(a,"-").concat(o)};function km(e){for(var t=e.min,r=e.max,n=e.step,a=e.timeslots,o=e.localizer,i=m0({start:t,end:r,step:n,timeslots:a,localizer:o}),s=1+o.getTotalMin(t,r),l=o.getMinutesFromMidnight(t),u=Math.ceil((s-1)/(n*a)),d=u*a,f=new Array(u),p=new Array(d),v=0;v<u;v++){f[v]=new Array(a);for(var y=0;y<a;y++){var m=v*a+y,x=m*n;p[m]=f[v][y]=o.getSlotDate(t,l,x)}}var h=p.length*n;p.push(o.getSlotDate(t,l,h));function g(w){var S=o.diff(t,w,"minutes")+o.getDstOffset(t,w);return Math.min(S,s)}return{groups:f,update:function(S){return m0(S)!==i?km(S):this},dateIsInGroup:function(S,b){var E=f[b+1];return o.inRange(S,f[b][0],E?E[0]:r,"minutes")},nextSlot:function(S){var b=p[Math.min(p.findIndex(function(E){return E===S||o.eq(E,S)})+1,p.length-1)];return o.eq(b,S)&&(b=o.add(S,n,"minutes")),b},closestSlotToPosition:function(S){var b=Math.min(p.length-1,Math.max(0,Math.floor(S*d)));return p[b]},closestSlotFromPoint:function(S,b){var E=Math.abs(b.top-b.bottom);return this.closestSlotToPosition((S.y-b.top)/E)},closestSlotFromDate:function(S){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(o.lt(S,t,"minutes"))return p[0];if(o.gt(S,r,"minutes"))return p[p.length-1];var E=o.diff(t,S,"minutes");return p[(E-E%n)/n+b]},startsBeforeDay:function(S){return o.lt(S,t,"day")},startsAfterDay:function(S){return o.gt(S,r,"day")},startsBefore:function(S){return o.lt(o.merge(t,S),t,"minutes")},startsAfter:function(S){return o.gt(o.merge(r,S),r,"minutes")},getRange:function(S,b,E,j){E||(S=o.min(r,o.max(t,S))),j||(b=o.min(r,o.max(t,b)));var k=g(S),D=g(b),O=D>n*d&&!o.eq(r,b)?(k-n)/(n*d)*100:k/(n*d)*100;return{top:O,height:D/(n*d)*100-O,start:g(S),startDate:S,end:g(b),endDate:b}},getCurrentTimePosition:function(S){var b=g(S),E=b/(n*d)*100;return E}}}var TB=function(){function e(t,r){var n=r.accessors,a=r.slotMetrics;ut(this,e);var o=a.getRange(n.start(t),n.end(t)),i=o.start,s=o.startDate,l=o.end,u=o.endDate,d=o.top,f=o.height;this.start=i,this.end=l,this.startMs=+s,this.endMs=+u,this.top=d,this.height=f,this.data=t}return dt(e,[{key:"_width",get:function(){if(this.rows){var r=this.rows.reduce(function(a,o){return Math.max(a,o.leaves.length+1)},0)+1;return 100/r}if(this.leaves){var n=100-this.container._width;return n/(this.leaves.length+1)}return this.row._width}},{key:"width",get:function(){var r=this._width,n=Math.min(100,this._width*1.7);if(this.rows)return n;if(this.leaves)return this.leaves.length>0?n:r;var a=this.row.leaves,o=a.indexOf(this);return o===a.length-1?r:n}},{key:"xOffset",get:function(){if(this.rows)return 0;if(this.leaves)return this.container._width;var r=this.row,n=r.leaves,a=r.xOffset,o=r._width,i=n.indexOf(this)+1;return a+i*o}}])}();function _B(e,t,r){return Math.abs(t.start-e.start)<r||t.start>e.start&&t.start<e.end}function PB(e){for(var t=Z9(e,["startMs",function(s){return-s.endMs}]),r=[];t.length>0;){var n=t.shift();r.push(n);for(var a=0;a<t.length;a++){var o=t[a];if(!(n.endMs>o.startMs)){if(a>0){var i=t.splice(a,1)[0];r.push(i)}break}}}return r}function uS(e){for(var t=e.events,r=e.minimumStartDifference,n=e.slotMetrics,a=e.accessors,o=t.map(function(d){return new TB(d,{slotMetrics:n,accessors:a})}),i=PB(o),s=[],l=function(){var f=i[u],p=s.find(function(m){return m.end>f.start||Math.abs(f.start-m.start)<r});if(!p)return f.rows=[],s.push(f),1;f.container=p;for(var v=null,y=p.rows.length-1;!v&&y>=0;y--)_B(p.rows[y],f,r)&&(v=p.rows[y]);v?(v.leaves.push(f),f.row=v):(f.leaves=[],p.rows.push(f))},u=0;u<i.length;u++)l();return i.map(function(d){return{event:d.data,style:{top:d.top,height:d.height,width:d.width,xOffset:Math.max(0,d.xOffset)}}})}function dS(e,t,r){for(var n=0;n<e.friends.length;++n)if(!(r.indexOf(e.friends[n])>-1)){t=t>e.friends[n].idx?t:e.friends[n].idx,r.push(e.friends[n]);var a=dS(e.friends[n],t,r);t=t>a?t:a}return t}function RB(e){var t=e.events,r=e.minimumStartDifference,n=e.slotMetrics,a=e.accessors,o=uS({events:t,minimumStartDifference:r,slotMetrics:n,accessors:a});o.sort(function(z,I){return z=z.style,I=I.style,z.top!==I.top?z.top>I.top?1:-1:z.height!==I.height?z.top+z.height<I.top+I.height?1:-1:0});for(var i=0;i<o.length;++i)o[i].friends=[],delete o[i].style.left,delete o[i].style.left,delete o[i].idx,delete o[i].size;for(var s=0;s<o.length-1;++s)for(var l=o[s],u=l.style.top,d=l.style.top+l.style.height,f=s+1;f<o.length;++f){var p=o[f],v=p.style.top,y=p.style.top+p.style.height;(v>=u&&y<=d||y>u&&y<=d||v>=u&&v<d)&&(l.friends.push(p),p.friends.push(l))}for(var m=0;m<o.length;++m){for(var x=o[m],h=[],g=0;g<100;++g)h.push(1);for(var w=0;w<x.friends.length;++w)x.friends[w].idx!==void 0&&(h[x.friends[w].idx]=0);x.idx=h.indexOf(1)}for(var S=0;S<o.length;++S){var b=0;if(!o[S].size){var E=[],j=dS(o[S],0,E);b=100/(j+1),o[S].size=b;for(var k=0;k<E.length;++k)E[k].size=b}}for(var D=0;D<o.length;++D){var O=o[D];O.style.left=O.idx*O.size;for(var R=0,Q=0;Q<O.friends.length;++Q){var X=O.friends[Q].idx;R=R>X?R:X}R<=O.idx&&(O.size=100-O.idx*O.size);var Y=O.idx===0?0:3;O.style.width="calc(".concat(O.size,"% - ").concat(Y,"px)"),O.style.height="calc(".concat(O.style.height,"% - 2px)"),O.style.xOffset="calc(".concat(O.style.left,"% + ").concat(Y,"px)")}return o}var v0={overlap:uS,"no-overlap":RB};function MB(e){return!!(e&&e.constructor&&e.call&&e.apply)}function AB(e){e.events,e.minimumStartDifference,e.slotMetrics,e.accessors;var t=e.dayLayoutAlgorithm,r=t;return t in v0&&(r=v0[t]),MB(r)?r.apply(this,arguments):[]}var fS=function(e){function t(){return ut(this,t),Tt(this,t,arguments)}return _t(t,e),dt(t,[{key:"render",value:function(){var n=this.props,a=n.renderSlot,o=n.resource,i=n.group,s=n.getters,l=n.components,u=l===void 0?{}:l,d=u.timeSlotWrapper,f=d===void 0?Xr:d,p=s?s.slotGroupProp(i):{};return C.createElement("div",Object.assign({className:"rbc-timeslot-group"},p),i.map(function(v,y){var m=s?s.slotProp(v,o):{};return C.createElement(f,{key:y,value:v,resource:o},C.createElement("div",Object.assign({},m,{className:it("rbc-time-slot",m.className)}),a&&a(v,y)))}))}}])}($.Component);function gl(e){return typeof e=="string"?e:e+"%"}function LB(e){var t=e.style,r=e.className,n=e.event,a=e.accessors,o=e.rtl,i=e.selected,s=e.label,l=e.continuesPrior,u=e.continuesAfter,d=e.getters,f=e.onClick,p=e.onDoubleClick,v=e.isBackgroundEvent,y=e.onKeyPress,m=e.components,x=m.event,h=m.eventWrapper,g=a.title(n),w=a.tooltip(n),S=a.end(n),b=a.start(n),E=d.eventProp(n,b,S,i),j=[C.createElement("div",{key:"1",className:"rbc-event-label"},s),C.createElement("div",{key:"2",className:"rbc-event-content"},x?C.createElement(x,{event:n,title:g}):g)],k=t.height,D=t.top,O=t.width,R=t.xOffset,Q=$e($e({},E.style),{},ea({top:gl(D),height:gl(k),width:gl(O)},o?"right":"left",gl(R)));return C.createElement(h,Object.assign({type:"time"},e),C.createElement("div",{role:"button",tabIndex:0,onClick:f,onDoubleClick:p,style:Q,onKeyDown:y,title:w?(typeof s=="string"?s+": ":"")+w:void 0,className:it(v?"rbc-background-event":"rbc-event",r,E.className,{"rbc-selected":i,"rbc-event-continues-earlier":l,"rbc-event-continues-later":u})},j))}var IB=function(t){var r=t.children,n=t.className,a=t.style,o=t.innerRef;return C.createElement("div",{className:n,style:a,ref:o},r)},zB=C.forwardRef(function(e,t){return C.createElement(IB,Object.assign({},e,{innerRef:t}))}),FB=["dayProp"],UB=["eventContainerWrapper"],pS=function(e){function t(){var r;ut(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=Tt(this,t,[].concat(a)),r.state={selecting:!1,timeIndicatorPosition:null},r.intervalTriggered=!1,r.renderEvents=function(i){var s=i.events,l=i.isBackgroundEvent,u=r.props,d=u.rtl,f=u.selected,p=u.accessors,v=u.localizer,y=u.getters,m=u.components,x=u.step,h=u.timeslots,g=u.dayLayoutAlgorithm,w=u.resizable,S=r,b=S.slotMetrics,E=v.messages,j=AB({events:s,accessors:p,slotMetrics:b,minimumStartDifference:Math.ceil(x*h/2),dayLayoutAlgorithm:g});return j.map(function(k,D){var O=k.event,R=k.style,Q=p.end(O),X=p.start(O),Y="eventTimeRangeFormat",z,I=b.startsBeforeDay(X),V=b.startsAfterDay(Q);I?Y="eventTimeRangeEndFormat":V&&(Y="eventTimeRangeStartFormat"),I&&V?z=E.allDay:z=v.format({start:X,end:Q},Y);var T=I||b.startsBefore(X),F=V||b.startsAfter(Q);return C.createElement(LB,{style:R,event:O,label:z,key:"evt_"+D,getters:y,rtl:d,components:m,continuesPrior:T,continuesAfter:F,accessors:p,resource:r.props.resource,selected:Iu(O,f),onClick:function(Z){return r._select($e($e($e({},O),r.props.resource&&{sourceResource:r.props.resource}),l&&{isBackgroundEvent:!0}),Z)},onDoubleClick:function(Z){return r._doubleClick(O,Z)},isBackgroundEvent:l,onKeyPress:function(Z){return r._keyPress(O,Z)},resizable:w})})},r._selectable=function(){var i=r.containerRef.current,s=r.props,l=s.longPressThreshold,u=s.localizer,d=r._selector=new rS(function(){return i},{longPressThreshold:l}),f=function(m){var x=r.props.onSelecting,h=r.state||{},g=p(m),w=g.startDate,S=g.endDate;x&&(u.eq(h.startDate,w,"minutes")&&u.eq(h.endDate,S,"minutes")||x({start:w,end:S,resourceId:r.props.resource})===!1)||(r.state.start!==g.start||r.state.end!==g.end||r.state.selecting!==g.selecting)&&r.setState(g)},p=function(m){var x=r.slotMetrics.closestSlotFromPoint(m,ja(i));r.state.selecting||(r._initialSlot=x);var h=r._initialSlot;u.lte(h,x)?x=r.slotMetrics.nextSlot(x):u.gt(h,x)&&(h=r.slotMetrics.nextSlot(h));var g=r.slotMetrics.getRange(u.min(h,x),u.max(h,x));return $e($e({},g),{},{selecting:!0,top:"".concat(g.top,"%"),height:"".concat(g.height,"%")})},v=function(m,x){if(!Ac(r.containerRef.current,m)){var h=p(m),g=h.startDate,w=h.endDate;r._selectSlot({startDate:g,endDate:w,action:x,box:m})}r.setState({selecting:!1})};d.on("selecting",f),d.on("selectStart",f),d.on("beforeSelect",function(y){if(r.props.selectable==="ignoreEvents")return!Ac(r.containerRef.current,y)}),d.on("click",function(y){return v(y,"click")}),d.on("doubleClick",function(y){return v(y,"doubleClick")}),d.on("select",function(y){r.state.selecting&&(r._selectSlot($e($e({},r.state),{},{action:"select",bounds:y})),r.setState({selecting:!1}))}),d.on("reset",function(){r.state.selecting&&r.setState({selecting:!1})})},r._teardownSelectable=function(){r._selector&&(r._selector.teardown(),r._selector=null)},r._selectSlot=function(i){for(var s=i.startDate,l=i.endDate,u=i.action,d=i.bounds,f=i.box,p=s,v=[];r.props.localizer.lte(p,l);)v.push(p),p=new Date(+p+r.props.step*60*1e3);Fe(r.props.onSelectSlot,{slots:v,start:s,end:l,resourceId:r.props.resource,action:u,bounds:d,box:f})},r._select=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onSelectEvent,s)},r._doubleClick=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onDoubleClickEvent,s)},r._keyPress=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onKeyPressEvent,s)},r.slotMetrics=km(r.props),r.containerRef=$.createRef(),r}return _t(t,e),dt(t,[{key:"componentDidMount",value:function(){this.props.selectable&&this._selectable(),this.props.isNow&&this.setTimeIndicatorPositionUpdateInterval()}},{key:"componentWillUnmount",value:function(){this._teardownSelectable(),this.clearTimeIndicatorInterval()}},{key:"componentDidUpdate",value:function(n,a){this.props.selectable&&!n.selectable&&this._selectable(),!this.props.selectable&&n.selectable&&this._teardownSelectable();var o=this.props,i=o.getNow,s=o.isNow,l=o.localizer,u=o.date,d=o.min,f=o.max,p=l.neq(n.getNow(),i(),"minutes");if(n.isNow!==s||p){if(this.clearTimeIndicatorInterval(),s){var v=!p&&l.eq(n.date,u,"minutes")&&a.timeIndicatorPosition===this.state.timeIndicatorPosition;this.setTimeIndicatorPositionUpdateInterval(v)}}else s&&(l.neq(n.min,d,"minutes")||l.neq(n.max,f,"minutes"))&&this.positionTimeIndicator()}},{key:"setTimeIndicatorPositionUpdateInterval",value:function(){var n=this,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;!this.intervalTriggered&&!a&&this.positionTimeIndicator(),this._timeIndicatorTimeout=window.setTimeout(function(){n.intervalTriggered=!0,n.positionTimeIndicator(),n.setTimeIndicatorPositionUpdateInterval()},6e4)}},{key:"clearTimeIndicatorInterval",value:function(){this.intervalTriggered=!1,window.clearTimeout(this._timeIndicatorTimeout)}},{key:"positionTimeIndicator",value:function(){var n=this.props,a=n.min,o=n.max,i=n.getNow,s=i();if(s>=a&&s<=o){var l=this.slotMetrics.getCurrentTimePosition(s);this.intervalTriggered=!0,this.setState({timeIndicatorPosition:l})}else this.clearTimeIndicatorInterval()}},{key:"render",value:function(){var n=this.props,a=n.date,o=n.max,i=n.rtl,s=n.isNow,l=n.resource,u=n.accessors,d=n.localizer,f=n.getters,p=f.dayProp,v=Ur(f,FB),y=n.components,m=y.eventContainerWrapper,x=Ur(y,UB);this.slotMetrics=this.slotMetrics.update(this.props);var h=this.slotMetrics,g=this.state,w=g.selecting,S=g.top,b=g.height,E=g.startDate,j=g.endDate,k={start:E,end:j},D=p(o),O=D.className,R=D.style,Q=x.dayColumnWrapper||zB;return C.createElement(Q,{ref:this.containerRef,date:a,style:R,className:it(O,"rbc-day-slot","rbc-time-column",s&&"rbc-now",s&&"rbc-today",w&&"rbc-slot-selecting"),slotMetrics:h,resource:l},h.groups.map(function(X,Y){return C.createElement(fS,{key:Y,group:X,resource:l,getters:v,components:x})}),C.createElement(m,{localizer:d,resource:l,accessors:u,getters:v,components:x,slotMetrics:h},C.createElement("div",{className:it("rbc-events-container",i&&"rtl")},this.renderEvents({events:this.props.backgroundEvents,isBackgroundEvent:!0}),this.renderEvents({events:this.props.events}))),w&&C.createElement("div",{className:"rbc-slot-selection",style:{top:S,height:b}},C.createElement("span",null,d.format(k,"selectRangeFormat"))),s&&this.intervalTriggered&&C.createElement("div",{className:"rbc-current-time-indicator",style:{top:"".concat(this.state.timeIndicatorPosition,"%")}}))}}])}(C.Component);pS.defaultProps={dragThroughEvents:!0,timeslots:2};function BB(e){var t=e.min,r=e.max,n=e.localizer;return n.getTimezoneOffset(t)!==n.getTimezoneOffset(r)?{start:n.add(t,-1,"day"),end:n.add(r,-1,"day")}:{start:t,end:r}}var HB=function(t){var r=t.min,n=t.max,a=t.timeslots,o=t.step,i=t.localizer,s=t.getNow,l=t.resource,u=t.components,d=t.getters,f=t.gutterRef,p=u.timeGutterWrapper,v=$.useMemo(function(){return BB({min:r,max:n,localizer:i})},[r==null?void 0:r.toISOString(),n==null?void 0:n.toISOString(),i]),y=v.start,m=v.end,x=$.useState(km({min:y,max:m,timeslots:a,step:o,localizer:i})),h=Jr(x,2),g=h[0],w=h[1];$.useEffect(function(){g&&w(g.update({min:y,max:m,timeslots:a,step:o,localizer:i}))},[y==null?void 0:y.toISOString(),m==null?void 0:m.toISOString(),a,o]);var S=$.useCallback(function(b,E){if(E)return null;var j=g.dateIsInGroup(s(),E);return C.createElement("span",{className:it("rbc-label",j&&"rbc-now")},i.format(b,"timeGutterFormat"))},[g,i,s]);return C.createElement(p,{slotMetrics:g},C.createElement("div",{className:"rbc-time-gutter rbc-time-column",ref:f},g.groups.map(function(b,E){return C.createElement(fS,{key:E,group:b,resource:l,components:u,renderSlot:S,getters:d})})))},WB=C.forwardRef(function(e,t){return C.createElement(HB,Object.assign({gutterRef:t},e))}),VB=function(t){var r=t.label;return C.createElement(C.Fragment,null,r)},GB=function(e){function t(){var r;ut(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=Tt(this,t,[].concat(a)),r.handleHeaderClick=function(i,s,l){l.preventDefault(),Fe(r.props.onDrillDown,[i,s])},r.renderRow=function(i){var s=r.props,l=s.events,u=s.rtl,d=s.selectable,f=s.getNow,p=s.range,v=s.getters,y=s.localizer,m=s.accessors,x=s.components,h=s.resizable,g=m.resourceId(i),w=i?l.filter(function(S){return m.resource(S)===g}):l;return C.createElement(Lc,{isAllDay:!0,rtl:u,getNow:f,minRows:2,maxRows:r.props.allDayMaxRows+1,range:p,events:w,resourceId:g,className:"rbc-allday-cell",selectable:d,selected:r.props.selected,components:x,accessors:m,getters:v,localizer:y,onSelect:r.props.onSelectEvent,onShowMore:r.props.onShowMore,onDoubleClick:r.props.onDoubleClickEvent,onKeyPress:r.props.onKeyPressEvent,onSelectSlot:r.props.onSelectSlot,longPressThreshold:r.props.longPressThreshold,resizable:h})},r}return _t(t,e),dt(t,[{key:"renderHeaderCells",value:function(n){var a=this,o=this.props,i=o.localizer,s=o.getDrilldownView,l=o.getNow,u=o.getters.dayProp,d=o.components.header,f=d===void 0?cS:d,p=l();return n.map(function(v,y){var m=s(v),x=i.format(v,"dayFormat"),h=u(v),g=h.className,w=h.style,S=C.createElement(f,{date:v,label:x,localizer:i});return C.createElement("div",{key:y,style:w,className:it("rbc-header",g,i.isSameDate(v,p)&&"rbc-today")},m?C.createElement("button",{type:"button",className:"rbc-button-link",onClick:function(E){return a.handleHeaderClick(v,m,E)}},S):C.createElement("span",null,S))})}},{key:"render",value:function(){var n=this,a=this.props,o=a.width,i=a.rtl,s=a.resources,l=a.range,u=a.events,d=a.getNow,f=a.accessors,p=a.selectable,v=a.components,y=a.getters,m=a.scrollRef,x=a.localizer,h=a.isOverflowing,g=a.components,w=g.timeGutterHeader,S=g.resourceHeader,b=S===void 0?VB:S,E=a.resizable,j={};h&&(j[i?"marginLeft":"marginRight"]="".concat(l2()-1,"px"));var k=s.groupEvents(u);return C.createElement("div",{style:j,ref:m,className:it("rbc-time-header",h&&"rbc-overflowing")},C.createElement("div",{className:"rbc-label rbc-time-header-gutter",style:{width:o,minWidth:o,maxWidth:o}},w&&C.createElement(w,null)),s.map(function(D,O){var R=Jr(D,2),Q=R[0],X=R[1];return C.createElement("div",{className:"rbc-time-header-content",key:Q||O},X&&C.createElement("div",{className:"rbc-row rbc-row-resource",key:"resource_".concat(O)},C.createElement("div",{className:"rbc-header"},C.createElement(b,{index:O,label:f.resourceTitle(X),resource:X}))),C.createElement("div",{className:"rbc-row rbc-time-header-cell".concat(l.length<=1?" rbc-time-header-cell-single-day":"")},n.renderHeaderCells(l)),C.createElement(Lc,{isAllDay:!0,rtl:i,getNow:d,minRows:2,maxRows:n.props.allDayMaxRows+1,range:l,events:k.get(Q)||[],resourceId:X&&Q,className:"rbc-allday-cell",selectable:p,selected:n.props.selected,components:v,accessors:f,getters:y,localizer:x,onSelect:n.props.onSelectEvent,onShowMore:n.props.onShowMore,onDoubleClick:n.props.onDoubleClickEvent,onKeyDown:n.props.onKeyPressEvent,onSelectSlot:n.props.onSelectSlot,longPressThreshold:n.props.longPressThreshold,resizable:E}))}))}}])}(C.Component),Wd={};function YB(e,t){return{map:function(n){return e?e.map(function(a,o){return n([t.resourceId(a),a],o)}):[n([Wd,null],0)]},groupEvents:function(n){var a=new Map;return e?(n.forEach(function(o){var i=t.resource(o)||Wd;if(Array.isArray(i))i.forEach(function(l){var u=a.get(l)||[];u.push(o),a.set(l,u)});else{var s=a.get(i)||[];s.push(o),a.set(i,s)}}),a):(a.set(Wd,n),a)}}}var Fo=function(e){function t(r){var n;return ut(this,t),n=Tt(this,t,[r]),n.handleScroll=function(a){n.scrollRef.current&&(n.scrollRef.current.scrollLeft=a.target.scrollLeft)},n.handleResize=function(){t1(n.rafHandle),n.rafHandle=Zx(n.checkOverflow)},n.handleKeyPressEvent=function(){n.clearSelection();for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];Fe(n.props.onKeyPressEvent,o)},n.handleSelectEvent=function(){n.clearSelection();for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];Fe(n.props.onSelectEvent,o)},n.handleDoubleClickEvent=function(){n.clearSelection();for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];Fe(n.props.onDoubleClickEvent,o)},n.handleShowMore=function(a,o,i,s,l){var u=n.props,d=u.popup,f=u.onDrillDown,p=u.onShowMore,v=u.getDrilldownView,y=u.doShowMoreDrillDown;if(n.clearSelection(),d){var m=Jx(i,n.containerRef.current);n.setState({overlay:{date:o,events:a,position:$e($e({},m),{},{width:"200px"}),target:l}})}else y&&Fe(f,[o,v(o)||jt.DAY]);Fe(p,[a,o,s])},n.handleSelectAllDaySlot=function(a,o){var i=n.props.onSelectSlot,s=new Date(a[0]),l=new Date(a[a.length-1]);l.setDate(a[a.length-1].getDate()+1),Fe(i,{slots:a,start:s,end:l,action:o.action,resourceId:o.resourceId})},n.overlayDisplay=function(){n.setState({overlay:null})},n.checkOverflow=function(){if(!n._updatingOverflow){var a=n.contentRef.current;if(a!=null&&a.scrollHeight){var o=a.scrollHeight>a.clientHeight;n.state.isOverflowing!==o&&(n._updatingOverflow=!0,n.setState({isOverflowing:o},function(){n._updatingOverflow=!1}))}}},n.memoizedResources=j2(function(a,o){return YB(a,o)}),n.state={gutterWidth:void 0,isOverflowing:null},n.scrollRef=C.createRef(),n.contentRef=C.createRef(),n.containerRef=C.createRef(),n._scrollRatio=null,n.gutterRef=$.createRef(),n}return _t(t,e),dt(t,[{key:"getSnapshotBeforeUpdate",value:function(){return this.checkOverflow(),null}},{key:"componentDidMount",value:function(){this.props.width==null&&this.measureGutter(),this.calculateScroll(),this.applyScroll(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),t1(this.rafHandle),this.measureGutterAnimationFrameRequest&&window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest)}},{key:"componentDidUpdate",value:function(){this.applyScroll()}},{key:"renderEvents",value:function(n,a,o,i){var s=this,l=this.props,u=l.min,d=l.max,f=l.components,p=l.accessors,v=l.localizer,y=l.dayLayoutAlgorithm,m=this.memoizedResources(this.props.resources,p),x=m.groupEvents(a),h=m.groupEvents(o);return m.map(function(g,w){var S=Jr(g,2),b=S[0],E=S[1];return n.map(function(j,k){var D=(x.get(b)||[]).filter(function(R){return v.inRange(j,p.start(R),p.end(R),"day")}),O=(h.get(b)||[]).filter(function(R){return v.inRange(j,p.start(R),p.end(R),"day")});return C.createElement(pS,Object.assign({},s.props,{localizer:v,min:v.merge(j,u),max:v.merge(j,d),resource:E&&b,components:f,isNow:v.isSameDate(j,i),key:w+"-"+k,date:j,events:D,backgroundEvents:O,dayLayoutAlgorithm:y}))})})}},{key:"render",value:function(){var n,a=this.props,o=a.events,i=a.backgroundEvents,s=a.range,l=a.width,u=a.rtl,d=a.selected,f=a.getNow,p=a.resources,v=a.components,y=a.accessors,m=a.getters,x=a.localizer,h=a.min,g=a.max,w=a.showMultiDayTimes,S=a.longPressThreshold,b=a.resizable;l=l||this.state.gutterWidth;var E=s[0],j=s[s.length-1];this.slots=s.length;var k=[],D=[],O=[];return o.forEach(function(R){if(us(R,E,j,y,x)){var Q=y.start(R),X=y.end(R);y.allDay(R)||x.startAndEndAreDateOnly(Q,X)||!w&&!x.isSameDate(Q,X)?k.push(R):D.push(R)}}),i.forEach(function(R){us(R,E,j,y,x)&&O.push(R)}),k.sort(function(R,Q){return bp(R,Q,y,x)}),C.createElement("div",{className:it("rbc-time-view",p&&"rbc-time-view-resources"),ref:this.containerRef},C.createElement(GB,{range:s,events:k,width:l,rtl:u,getNow:f,localizer:x,selected:d,allDayMaxRows:this.props.showAllEvents?1/0:(n=this.props.allDayMaxRows)!==null&&n!==void 0?n:1/0,resources:this.memoizedResources(p,y),selectable:this.props.selectable,accessors:y,getters:m,components:v,scrollRef:this.scrollRef,isOverflowing:this.state.isOverflowing,longPressThreshold:S,onSelectSlot:this.handleSelectAllDaySlot,onSelectEvent:this.handleSelectEvent,onShowMore:this.handleShowMore,onDoubleClickEvent:this.props.onDoubleClickEvent,onKeyPressEvent:this.props.onKeyPressEvent,onDrillDown:this.props.onDrillDown,getDrilldownView:this.props.getDrilldownView,resizable:b}),this.props.popup&&this.renderOverlay(),C.createElement("div",{ref:this.contentRef,className:"rbc-time-content",onScroll:this.handleScroll},C.createElement(WB,{date:E,ref:this.gutterRef,localizer:x,min:x.merge(E,h),max:x.merge(E,g),step:this.props.step,getNow:this.props.getNow,timeslots:this.props.timeslots,components:v,className:"rbc-time-gutter",getters:m}),this.renderEvents(s,D,O,f())))}},{key:"renderOverlay",value:function(){var n,a,o=this,i=(n=(a=this.state)===null||a===void 0?void 0:a.overlay)!==null&&n!==void 0?n:{},s=this.props,l=s.accessors,u=s.localizer,d=s.components,f=s.getters,p=s.selected,v=s.popupOffset,y=s.handleDragStart,m=function(){return o.setState({overlay:null})};return C.createElement(Em,{overlay:i,accessors:l,localizer:u,components:d,getters:f,selected:p,popupOffset:v,ref:this.containerRef,handleKeyPressEvent:this.handleKeyPressEvent,handleSelectEvent:this.handleSelectEvent,handleDoubleClickEvent:this.handleDoubleClickEvent,handleDragStart:y,show:!!i.position,overlayDisplay:this.overlayDisplay,onHide:m})}},{key:"clearSelection",value:function(){clearTimeout(this._selectTimer),this._pendingSelection=[]}},{key:"measureGutter",value:function(){var n=this;this.measureGutterAnimationFrameRequest&&window.cancelAnimationFrame(this.measureGutterAnimationFrameRequest),this.measureGutterAnimationFrameRequest=window.requestAnimationFrame(function(){var a,o=(a=n.gutterRef)!==null&&a!==void 0&&a.current?yp(n.gutterRef.current):void 0;o&&n.state.gutterWidth!==o&&n.setState({gutterWidth:o})})}},{key:"applyScroll",value:function(){if(this._scrollRatio!=null&&this.props.enableAutoScroll===!0){var n=this.contentRef.current;n.scrollTop=n.scrollHeight*this._scrollRatio,this._scrollRatio=null}}},{key:"calculateScroll",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props,a=n.min,o=n.max,i=n.scrollToTime,s=n.localizer,l=s.diff(s.merge(i,a),i,"milliseconds"),u=s.diff(a,o,"milliseconds");this._scrollRatio=l/u}}])}($.Component);Fo.defaultProps={step:30,timeslots:2};var KB=["date","localizer","min","max","scrollToTime","enableAutoScroll"],Fu=function(e){function t(){return ut(this,t),Tt(this,t,arguments)}return _t(t,e),dt(t,[{key:"render",value:function(){var n=this.props,a=n.date,o=n.localizer,i=n.min,s=i===void 0?o.startOf(new Date,"day"):i,l=n.max,u=l===void 0?o.endOf(new Date,"day"):l,d=n.scrollToTime,f=d===void 0?o.startOf(new Date,"day"):d,p=n.enableAutoScroll,v=p===void 0?!0:p,y=Ur(n,KB),m=t.range(a,{localizer:o});return C.createElement(Fo,Object.assign({},y,{range:m,eventOffset:10,localizer:o,min:s,max:u,scrollToTime:f,enableAutoScroll:v}))}}])}(C.Component);Fu.range=function(e,t){var r=t.localizer;return[r.startOf(e,"day")]};Fu.navigate=function(e,t,r){var n=r.localizer;switch(t){case Ut.PREVIOUS:return n.add(e,-1,"day");case Ut.NEXT:return n.add(e,1,"day");default:return e}};Fu.title=function(e,t){var r=t.localizer;return r.format(e,"dayHeaderFormat")};var qB=["date","localizer","min","max","scrollToTime","enableAutoScroll"],zn=function(e){function t(){return ut(this,t),Tt(this,t,arguments)}return _t(t,e),dt(t,[{key:"render",value:function(){var n=this.props,a=n.date,o=n.localizer,i=n.min,s=i===void 0?o.startOf(new Date,"day"):i,l=n.max,u=l===void 0?o.endOf(new Date,"day"):l,d=n.scrollToTime,f=d===void 0?o.startOf(new Date,"day"):d,p=n.enableAutoScroll,v=p===void 0?!0:p,y=Ur(n,qB),m=t.range(a,this.props);return C.createElement(Fo,Object.assign({},y,{range:m,eventOffset:15,localizer:o,min:s,max:u,scrollToTime:f,enableAutoScroll:v}))}}])}(C.Component);zn.defaultProps=Fo.defaultProps;zn.navigate=function(e,t,r){var n=r.localizer;switch(t){case Ut.PREVIOUS:return n.add(e,-1,"week");case Ut.NEXT:return n.add(e,1,"week");default:return e}};zn.range=function(e,t){var r=t.localizer,n=r.startOfWeek(),a=r.startOf(e,"week",n),o=r.endOf(e,"week",n);return r.range(a,o)};zn.title=function(e,t){var r=t.localizer,n=zn.range(e,{localizer:r}),a=_2(n),o=a[0],i=a.slice(1);return r.format({start:o,end:i.pop()},"dayRangeHeaderFormat")};var XB=["date","localizer","min","max","scrollToTime","enableAutoScroll"];function jm(e,t){return zn.range(e,t).filter(function(r){return[6,0].indexOf(r.getDay())===-1})}var Ms=function(e){function t(){return ut(this,t),Tt(this,t,arguments)}return _t(t,e),dt(t,[{key:"render",value:function(){var n=this.props,a=n.date,o=n.localizer,i=n.min,s=i===void 0?o.startOf(new Date,"day"):i,l=n.max,u=l===void 0?o.endOf(new Date,"day"):l,d=n.scrollToTime,f=d===void 0?o.startOf(new Date,"day"):d,p=n.enableAutoScroll,v=p===void 0?!0:p,y=Ur(n,XB),m=jm(a,this.props);return C.createElement(Fo,Object.assign({},y,{range:m,eventOffset:15,localizer:o,min:s,max:u,scrollToTime:f,enableAutoScroll:v}))}}])}(C.Component);Ms.defaultProps=Fo.defaultProps;Ms.range=jm;Ms.navigate=zn.navigate;Ms.title=function(e,t){var r=t.localizer,n=jm(e,{localizer:r}),a=_2(n),o=a[0],i=a.slice(1);return r.format({start:o,end:i.pop()},"dayRangeHeaderFormat")};var Uu=30;function Bu(e){var t=e.accessors,r=e.components,n=e.date,a=e.events,o=e.getters,i=e.length,s=i===void 0?Uu:i,l=e.localizer,u=e.onDoubleClickEvent,d=e.onSelectEvent,f=e.selected,p=$.useRef(null),v=$.useRef(null),y=$.useRef(null),m=$.useRef(null),x=$.useRef(null);$.useEffect(function(){w()});var h=function(k,D,O){var R=r.event,Q=r.date;return D=D.filter(function(X){return us(X,l.startOf(k,"day"),l.endOf(k,"day"),t,l)}),D.map(function(X,Y){var z=t.title(X),I=t.end(X),V=t.start(X),T=o.eventProp(X,V,I,Iu(X,f)),F=Y===0&&l.format(k,"agendaDateFormat"),H=Y===0?C.createElement("td",{rowSpan:D.length,className:"rbc-agenda-date-cell"},Q?C.createElement(Q,{day:k,label:F}):F):!1;return C.createElement("tr",{key:O+"_"+Y,className:T.className,style:T.style},H,C.createElement("td",{className:"rbc-agenda-time-cell"},g(k,X)),C.createElement("td",{className:"rbc-agenda-event-cell",onClick:function(P){return d&&d(X,P)},onDoubleClick:function(P){return u&&u(X,P)}},R?C.createElement(R,{event:X,title:z}):z))},[])},g=function(k,D){var O="",R=r.time,Q=l.messages.allDay,X=t.end(D),Y=t.start(D);return t.allDay(D)||(l.eq(Y,X)?Q=l.format(Y,"agendaTimeFormat"):l.isSameDate(Y,X)?Q=l.format({start:Y,end:X},"agendaTimeRangeFormat"):l.isSameDate(k,Y)?Q=l.format(Y,"agendaTimeFormat"):l.isSameDate(k,X)&&(Q=l.format(X,"agendaTimeFormat"))),l.gt(k,Y,"day")&&(O="rbc-continues-prior"),l.lt(k,X,"day")&&(O+=" rbc-continues-after"),C.createElement("span",{className:O.trim()},R?C.createElement(R,{event:D,day:k,label:Q}):Q)},w=function(){if(x.current){var k=p.current,D=x.current.firstChild;if(D){var O=m.current.scrollHeight>m.current.clientHeight,R=[],Q=R;R=[yp(D.children[0]),yp(D.children[1])],(Q[0]!==R[0]||Q[1]!==R[1])&&(v.current.style.width=R[0]+"px",y.current.style.width=R[1]+"px"),O?(WO(k,"rbc-header-overflowing"),k.style.marginRight=l2()+"px"):VO(k,"rbc-header-overflowing")}}},S=l.messages,b=l.add(n,s,"day"),E=l.range(n,b,"day");return a=a.filter(function(j){return us(j,l.startOf(n,"day"),l.endOf(b,"day"),t,l)}),a.sort(function(j,k){return+t.start(j)-+t.start(k)}),C.createElement("div",{className:"rbc-agenda-view"},a.length!==0?C.createElement(C.Fragment,null,C.createElement("table",{ref:p,className:"rbc-agenda-table"},C.createElement("thead",null,C.createElement("tr",null,C.createElement("th",{className:"rbc-header",ref:v},S.date),C.createElement("th",{className:"rbc-header",ref:y},S.time),C.createElement("th",{className:"rbc-header"},S.event)))),C.createElement("div",{className:"rbc-agenda-content",ref:m},C.createElement("table",{className:"rbc-agenda-table"},C.createElement("tbody",{ref:x},E.map(function(j,k){return h(j,a,k)}))))):C.createElement("span",{className:"rbc-agenda-empty"},S.noEventsInRange))}Bu.range=function(e,t){var r=t.length,n=r===void 0?Uu:r,a=t.localizer,o=a.add(e,n,"day");return{start:e,end:o}};Bu.navigate=function(e,t,r){var n=r.length,a=n===void 0?Uu:n,o=r.localizer;switch(t){case Ut.PREVIOUS:return o.add(e,-a,"day");case Ut.NEXT:return o.add(e,a,"day");default:return e}};Bu.title=function(e,t){var r=t.length,n=r===void 0?Uu:r,a=t.localizer,o=a.add(e,n,"day");return a.format({start:e,end:o},"agendaHeaderFormat")};var Gl=ea(ea(ea(ea(ea({},jt.MONTH,zu),jt.WEEK,zn),jt.WORK_WEEK,Ms),jt.DAY,Fu),jt.AGENDA,Bu),QB=["action","date","today"];function JB(e,t){var r=t.action,n=t.date,a=t.today,o=Ur(t,QB);switch(e=typeof e=="string"?Gl[e]:e,r){case Ut.TODAY:n=a||new Date;break;case Ut.DATE:break;default:Ji(e&&typeof e.navigate=="function","Calendar View components must implement a static `.navigate(date, action)` method.s"),n=e.navigate(n,r,o)}return n}var ZB=function(e){function t(){var r;ut(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=Tt(this,t,[].concat(a)),r.navigate=function(i){r.props.onNavigate(i)},r.view=function(i){r.props.onView(i)},r}return _t(t,e),dt(t,[{key:"render",value:function(){var n=this.props,a=n.localizer.messages,o=n.label;return C.createElement("div",{className:"rbc-toolbar"},C.createElement("span",{className:"rbc-btn-group"},C.createElement("button",{type:"button",onClick:this.navigate.bind(null,Ut.TODAY)},a.today),C.createElement("button",{type:"button",onClick:this.navigate.bind(null,Ut.PREVIOUS)},a.previous),C.createElement("button",{type:"button",onClick:this.navigate.bind(null,Ut.NEXT)},a.next)),C.createElement("span",{className:"rbc-toolbar-label"},o),C.createElement("span",{className:"rbc-btn-group"},this.viewNamesGroup(a)))}},{key:"viewNamesGroup",value:function(n){var a=this,o=this.props.views,i=this.props.view;if(o.length>1)return o.map(function(s){return C.createElement("button",{type:"button",key:s,className:it({"rbc-active":i===s}),onClick:a.view.bind(null,s)},n[s])})}}])}(C.Component);function eH(e,t){var r=null;return typeof t=="function"?r=t(e):typeof t=="string"&&sn(e)==="object"&&e!=null&&t in e&&(r=e[t]),r}var mn=function(t){return function(r){return eH(r,t)}},tH=["view","date","getNow","onNavigate"],rH=["view","toolbar","events","backgroundEvents","style","className","elementProps","date","getNow","length","showMultiDayTimes","onShowMore","doShowMoreDrillDown","components","formats","messages","culture"];function hS(e){if(Array.isArray(e))return e;for(var t=[],r=0,n=Object.entries(e);r<n.length;r++){var a=Jr(n[r],2),o=a[0],i=a[1];i&&t.push(o)}return t}function nH(e,t){var r=t.views,n=hS(r);return n.indexOf(e)!==-1}var mS=function(e){function t(){var r;ut(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return r=Tt(this,t,[].concat(a)),r.getViews=function(){var i=r.props.views;return Array.isArray(i)?xU(i,function(s,l){return s[l]=Gl[l]},{}):sn(i)==="object"?NU(i,function(s,l){return s===!0?Gl[l]:s}):Gl},r.getView=function(){var i=r.getViews();return i[r.props.view]},r.getDrilldownView=function(i){var s=r.props,l=s.view,u=s.drilldownView,d=s.getDrilldownView;return d?d(i,l,Object.keys(r.getViews())):u},r.handleRangeChange=function(i,s,l){var u=r.props,d=u.onRangeChange,f=u.localizer;d&&s.range&&d(s.range(i,{localizer:f}),l)},r.handleNavigate=function(i,s){var l=r.props,u=l.view,d=l.date,f=l.getNow,p=l.onNavigate,v=Ur(l,tH),y=r.getView(),m=f();d=JB(y,$e($e({},v),{},{action:i,date:s||d||m,today:m})),p(d,u,i),r.handleRangeChange(d,y)},r.handleViewChange=function(i){i!==r.props.view&&nH(i,r.props)&&r.props.onView(i);var s=r.getViews();r.handleRangeChange(r.props.date||r.props.getNow(),s[i],i)},r.handleSelectEvent=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onSelectEvent,s)},r.handleDoubleClickEvent=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onDoubleClickEvent,s)},r.handleKeyPressEvent=function(){for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];Fe(r.props.onKeyPressEvent,s)},r.handleSelectSlot=function(i){Fe(r.props.onSelectSlot,i)},r.handleDrillDown=function(i,s){var l=r.props.onDrillDown;if(l){l(i,s,r.drilldownView);return}s&&r.handleViewChange(s),r.handleNavigate(Ut.DATE,i)},r.state={context:t.getContext(r.props)},r}return _t(t,e),dt(t,[{key:"render",value:function(){var n=this.props,a=n.view,o=n.toolbar,i=n.events,s=n.backgroundEvents,l=n.style,u=n.className,d=n.elementProps,f=n.date,p=n.getNow,v=n.length,y=n.showMultiDayTimes,m=n.onShowMore,x=n.doShowMoreDrillDown;n.components,n.formats,n.messages,n.culture;var h=Ur(n,rH);f=f||p();var g=this.getView(),w=this.state.context,S=w.accessors,b=w.components,E=w.getters,j=w.localizer,k=w.viewNames,D=b.toolbar||ZB,O=g.title(f,{localizer:j,length:v});return C.createElement("div",Object.assign({},d,{className:it(u,"rbc-calendar",h.rtl&&"rbc-rtl"),style:l}),o&&C.createElement(D,{date:f,view:a,views:k,label:O,onView:this.handleViewChange,onNavigate:this.handleNavigate,localizer:j}),C.createElement(g,Object.assign({},h,{events:i,backgroundEvents:s,date:f,getNow:p,length:v,localizer:j,getters:E,components:b,accessors:S,showMultiDayTimes:y,getDrilldownView:this.getDrilldownView,onNavigate:this.handleNavigate,onDrillDown:this.handleDrillDown,onSelectEvent:this.handleSelectEvent,onDoubleClickEvent:this.handleDoubleClickEvent,onKeyPressEvent:this.handleKeyPressEvent,onSelectSlot:this.handleSelectSlot,onShowMore:m,doShowMoreDrillDown:x})))}}],[{key:"getDerivedStateFromProps",value:function(n){return{context:t.getContext(n)}}},{key:"getContext",value:function(n){var a=n.startAccessor,o=n.endAccessor,i=n.allDayAccessor,s=n.tooltipAccessor,l=n.titleAccessor,u=n.resourceAccessor,d=n.resourceIdAccessor,f=n.resourceTitleAccessor,p=n.eventPropGetter,v=n.backgroundEventPropGetter,y=n.slotPropGetter,m=n.slotGroupPropGetter,x=n.dayPropGetter,h=n.view,g=n.views,w=n.localizer,S=n.culture,b=n.messages,E=b===void 0?{}:b,j=n.components,k=j===void 0?{}:j,D=n.formats,O=D===void 0?{}:D,R=hS(g),Q=sB(E);return{viewNames:R,localizer:oB(w,S,O,Q),getters:{eventProp:function(){return p&&p.apply(void 0,arguments)||{}},backgroundEventProp:function(){return v&&v.apply(void 0,arguments)||{}},slotProp:function(){return y&&y.apply(void 0,arguments)||{}},slotGroupProp:function(){return m&&m.apply(void 0,arguments)||{}},dayProp:function(){return x&&x.apply(void 0,arguments)||{}}},components:lU(k[h]||{},eU(k,R),{eventWrapper:Xr,backgroundEventWrapper:Xr,eventContainerWrapper:Xr,dateCellWrapper:Xr,weekWrapper:Xr,timeSlotWrapper:Xr,timeGutterWrapper:Xr}),accessors:{start:mn(a),end:mn(o),allDay:mn(i),tooltip:mn(s),title:mn(l),resource:mn(u),resourceId:mn(d),resourceTitle:mn(f)}}}}])}(C.Component);mS.defaultProps={events:[],backgroundEvents:[],elementProps:{},popup:!1,toolbar:!0,view:jt.MONTH,views:[jt.MONTH,jt.WEEK,jt.DAY,jt.AGENDA],step:30,length:30,allDayMaxRows:1/0,doShowMoreDrillDown:!0,drilldownView:jt.DAY,titleAccessor:"title",tooltipAccessor:"title",allDayAccessor:"allDay",startAccessor:"start",endAccessor:"end",resourceAccessor:"resourceId",resourceIdAccessor:"id",resourceTitleAccessor:"title",longPressThreshold:250,getNow:function(){return new Date},dayLayoutAlgorithm:"overlap"};var vS=Rx(mS,{view:"onView",date:"onNavigate",selected:"onSelectEvent"}),aH=function(t,r,n){var a=t.start,o=t.end;return n.format(a,"MMMM DD",r)+" – "+n.format(o,n.eq(a,o,"month")?"DD":"MMMM DD",r)},oH=function(t,r,n){var a=t.start,o=t.end;return n.format(a,"L",r)+" – "+n.format(o,"L",r)},Vd=function(t,r,n){var a=t.start,o=t.end;return n.format(a,"LT",r)+" – "+n.format(o,"LT",r)},iH=function(t,r,n){var a=t.start;return n.format(a,"LT",r)+" – "},sH=function(t,r,n){var a=t.end;return" – "+n.format(a,"LT",r)},lH={dateFormat:"DD",dayFormat:"DD ddd",weekdayFormat:"ddd",selectRangeFormat:Vd,eventTimeRangeFormat:Vd,eventTimeRangeStartFormat:iH,eventTimeRangeEndFormat:sH,timeGutterFormat:"LT",monthHeaderFormat:"MMMM YYYY",dayHeaderFormat:"dddd MMM DD",dayRangeHeaderFormat:aH,agendaHeaderFormat:oH,agendaDateFormat:"ddd MMM DD",agendaTimeFormat:"LT",agendaTimeRangeFormat:Vd};function vn(e){var t=e&&e.toLowerCase();return t==="FullYear"?t="year":t||(t=void 0),t}function gS(e){e.extend(DU),e.extend(TU),e.extend(PU),e.extend(MU),e.extend(LU),e.extend(zU),e.extend(UU);var t=function(L,U){return U?L.locale(U):L},r=e.tz?e.tz:e;function n(P){return r(P).toDate().getTimezoneOffset()}function a(P,L){var U,G=r(P),J=r(L);if(!r.tz)return G.toDate().getTimezoneOffset()-J.toDate().getTimezoneOffset();var oe=(U=G.tz().$x.$timezone)!==null&&U!==void 0?U:e.tz.guess(),de=-r.tz(+G,oe).utcOffset(),le=-r.tz(+J,oe).utcOffset();return de-le}function o(P){var L=r(P).startOf("day");return a(L,P)}function i(P,L,U){var G=vn(U),J=G?r(P).startOf(G):r(P),oe=G?r(L).startOf(G):r(L);return[J,oe,G]}function s(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,L=arguments.length>1?arguments[1]:void 0,U=vn(L);return U?r(P).startOf(U).toDate():r(P).toDate()}function l(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,L=arguments.length>1?arguments[1]:void 0,U=vn(L);return U?r(P).endOf(U).toDate():r(P).toDate()}function u(P,L,U){var G=i(P,L,U),J=Jr(G,3),oe=J[0],de=J[1],le=J[2];return oe.isSame(de,le)}function d(P,L,U){return!u(P,L,U)}function f(P,L,U){var G=i(P,L,U),J=Jr(G,3),oe=J[0],de=J[1],le=J[2];return oe.isAfter(de,le)}function p(P,L,U){var G=i(P,L,U),J=Jr(G,3),oe=J[0],de=J[1],le=J[2];return oe.isBefore(de,le)}function v(P,L,U){var G=i(P,L,U),J=Jr(G,3),oe=J[0],de=J[1],le=J[2];return oe.isSameOrBefore(de,le)}function y(P,L,U){var G=i(P,L,U),J=Jr(G,3),oe=J[0],de=J[1],le=J[2];return oe.isSameOrBefore(de,le)}function m(P,L,U){var G=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"day",J=vn(G),oe=r(P),de=r(L),le=r(U);return oe.isBetween(de,le,J,"[]")}function x(P,L){var U=r(P),G=r(L),J=e.min(U,G);return J.toDate()}function h(P,L){var U=r(P),G=r(L),J=e.max(U,G);return J.toDate()}function g(P,L){if(!P&&!L)return null;var U=r(L).format("HH:mm:ss"),G=r(P).startOf("day").format("MM/DD/YYYY");return e("".concat(G," ").concat(U),"MM/DD/YYYY HH:mm:ss").toDate()}function w(P,L,U){var G=vn(U);return r(P).add(L,G).toDate()}function S(P,L){for(var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"day",G=vn(U),J=r(P).toDate(),oe=[];y(J,L);)oe.push(J),J=w(J,1,G);return oe}function b(P,L){var U=vn(L),G=s(P,U);return u(G,P)?G:w(G,1,U)}function E(P,L){var U=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"day",G=vn(U),J=r(P),oe=r(L);return oe.diff(J,G)}function j(P){var L=r(P);return L.minutes()}function k(P){var L=P?e.localeData(P):e.localeData();return L?L.firstDayOfWeek():0}function D(P){return r(P).startOf("month").startOf("week").toDate()}function O(P){return r(P).endOf("month").endOf("week").toDate()}function R(P){for(var L=D(P),U=O(P),G=[];y(L,U);)G.push(L),L=w(L,1,"d");return G}function Q(P,L,U){return r(P).startOf("day").minute(L+U).toDate()}function X(P,L){return E(P,L,"minutes")}function Y(P){var L=r(P).startOf("day"),U=r(P);return U.diff(L,"minutes")+o(P)}function z(P,L){var U=r(P),G=r(L);return U.isBefore(G,"day")}function I(P,L,U){var G=r(L),J=r(U);return G.isSameOrAfter(J,"minutes")}function V(P,L){var U=r(P),G=r(L);return G.diff(U,"day")}function T(P){var L=P.evtA,U=L.start,G=L.end,J=L.allDay,oe=P.evtB,de=oe.start,le=oe.end,be=oe.allDay,Pe=+s(U,"day")-+s(de,"day"),Ge=V(U,G),rt=V(de,le);return Pe||rt-Ge||!!be-!!J||+U-+de||+G-+le}function F(P){var L=P.event,U=L.start,G=L.end,J=P.range,oe=J.start,de=J.end,le=r(U).startOf("day"),be=r(G),Pe=r(oe),Ge=r(de),rt=le.isSameOrBefore(Ge,"day"),Uo=!le.isSame(be,"minutes"),Bo=Uo?be.isAfter(Pe,"minutes"):be.isSameOrAfter(Pe,"minutes");return rt&&Bo}function H(P,L){var U=r(P),G=r(L);return U.isSame(G,"day")}function Z(){var P=new Date,L=/-/.test(P.toString())?"-":"",U=P.getTimezoneOffset(),G=Number("".concat(L).concat(Math.abs(U))),J=r().utcOffset();return J>G?1:0}return new aB({formats:lH,firstOfWeek:k,firstVisibleDay:D,lastVisibleDay:O,visibleDays:R,format:function(L,U,G){return t(r(L),G).format(U)},lt:p,lte:y,gt:f,gte:v,eq:u,neq:d,merge:g,inRange:m,startOf:s,endOf:l,range:S,add:w,diff:E,ceil:b,min:x,max:h,minutes:j,getSlotDate:Q,getTimezoneOffset:n,getDstOffset:a,getTotalMin:X,getMinutesFromMidnight:Y,continuesPrior:z,continuesAfter:I,sortEvents:T,inEventRange:F,isSameDate:H,browserTZOffset:Z})}var yS={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(nr,function(){var r=1e3,n=6e4,a=36e5,o="millisecond",i="second",s="minute",l="hour",u="day",d="week",f="month",p="quarter",v="year",y="date",m="Invalid Date",x=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Y){var z=["th","st","nd","rd"],I=Y%100;return"["+Y+(z[(I-20)%10]||z[I]||z[0])+"]"}},w=function(Y,z,I){var V=String(Y);return!V||V.length>=z?Y:""+Array(z+1-V.length).join(I)+Y},S={s:w,z:function(Y){var z=-Y.utcOffset(),I=Math.abs(z),V=Math.floor(I/60),T=I%60;return(z<=0?"+":"-")+w(V,2,"0")+":"+w(T,2,"0")},m:function Y(z,I){if(z.date()<I.date())return-Y(I,z);var V=12*(I.year()-z.year())+(I.month()-z.month()),T=z.clone().add(V,f),F=I-T<0,H=z.clone().add(V+(F?-1:1),f);return+(-(V+(I-T)/(F?T-H:H-T))||0)},a:function(Y){return Y<0?Math.ceil(Y)||0:Math.floor(Y)},p:function(Y){return{M:f,y:v,w:d,d:u,D:y,h:l,m:s,s:i,ms:o,Q:p}[Y]||String(Y||"").toLowerCase().replace(/s$/,"")},u:function(Y){return Y===void 0}},b="en",E={};E[b]=g;var j="$isDayjsObject",k=function(Y){return Y instanceof Q||!(!Y||!Y[j])},D=function Y(z,I,V){var T;if(!z)return b;if(typeof z=="string"){var F=z.toLowerCase();E[F]&&(T=F),I&&(E[F]=I,T=F);var H=z.split("-");if(!T&&H.length>1)return Y(H[0])}else{var Z=z.name;E[Z]=z,T=Z}return!V&&T&&(b=T),T||!V&&b},O=function(Y,z){if(k(Y))return Y.clone();var I=typeof z=="object"?z:{};return I.date=Y,I.args=arguments,new Q(I)},R=S;R.l=D,R.i=k,R.w=function(Y,z){return O(Y,{locale:z.$L,utc:z.$u,x:z.$x,$offset:z.$offset})};var Q=function(){function Y(I){this.$L=D(I.locale,null,!0),this.parse(I),this.$x=this.$x||I.x||{},this[j]=!0}var z=Y.prototype;return z.parse=function(I){this.$d=function(V){var T=V.date,F=V.utc;if(T===null)return new Date(NaN);if(R.u(T))return new Date;if(T instanceof Date)return new Date(T);if(typeof T=="string"&&!/Z$/i.test(T)){var H=T.match(x);if(H){var Z=H[2]-1||0,P=(H[7]||"0").substring(0,3);return F?new Date(Date.UTC(H[1],Z,H[3]||1,H[4]||0,H[5]||0,H[6]||0,P)):new Date(H[1],Z,H[3]||1,H[4]||0,H[5]||0,H[6]||0,P)}}return new Date(T)}(I),this.init()},z.init=function(){var I=this.$d;this.$y=I.getFullYear(),this.$M=I.getMonth(),this.$D=I.getDate(),this.$W=I.getDay(),this.$H=I.getHours(),this.$m=I.getMinutes(),this.$s=I.getSeconds(),this.$ms=I.getMilliseconds()},z.$utils=function(){return R},z.isValid=function(){return this.$d.toString()!==m},z.isSame=function(I,V){var T=O(I);return this.startOf(V)<=T&&T<=this.endOf(V)},z.isAfter=function(I,V){return O(I)<this.startOf(V)},z.isBefore=function(I,V){return this.endOf(V)<O(I)},z.$g=function(I,V,T){return R.u(I)?this[V]:this.set(T,I)},z.unix=function(){return Math.floor(this.valueOf()/1e3)},z.valueOf=function(){return this.$d.getTime()},z.startOf=function(I,V){var T=this,F=!!R.u(V)||V,H=R.p(I),Z=function(le,be){var Pe=R.w(T.$u?Date.UTC(T.$y,be,le):new Date(T.$y,be,le),T);return F?Pe:Pe.endOf(u)},P=function(le,be){return R.w(T.toDate()[le].apply(T.toDate("s"),(F?[0,0,0,0]:[23,59,59,999]).slice(be)),T)},L=this.$W,U=this.$M,G=this.$D,J="set"+(this.$u?"UTC":"");switch(H){case v:return F?Z(1,0):Z(31,11);case f:return F?Z(1,U):Z(0,U+1);case d:var oe=this.$locale().weekStart||0,de=(L<oe?L+7:L)-oe;return Z(F?G-de:G+(6-de),U);case u:case y:return P(J+"Hours",0);case l:return P(J+"Minutes",1);case s:return P(J+"Seconds",2);case i:return P(J+"Milliseconds",3);default:return this.clone()}},z.endOf=function(I){return this.startOf(I,!1)},z.$set=function(I,V){var T,F=R.p(I),H="set"+(this.$u?"UTC":""),Z=(T={},T[u]=H+"Date",T[y]=H+"Date",T[f]=H+"Month",T[v]=H+"FullYear",T[l]=H+"Hours",T[s]=H+"Minutes",T[i]=H+"Seconds",T[o]=H+"Milliseconds",T)[F],P=F===u?this.$D+(V-this.$W):V;if(F===f||F===v){var L=this.clone().set(y,1);L.$d[Z](P),L.init(),this.$d=L.set(y,Math.min(this.$D,L.daysInMonth())).$d}else Z&&this.$d[Z](P);return this.init(),this},z.set=function(I,V){return this.clone().$set(I,V)},z.get=function(I){return this[R.p(I)]()},z.add=function(I,V){var T,F=this;I=Number(I);var H=R.p(V),Z=function(U){var G=O(F);return R.w(G.date(G.date()+Math.round(U*I)),F)};if(H===f)return this.set(f,this.$M+I);if(H===v)return this.set(v,this.$y+I);if(H===u)return Z(1);if(H===d)return Z(7);var P=(T={},T[s]=n,T[l]=a,T[i]=r,T)[H]||1,L=this.$d.getTime()+I*P;return R.w(L,this)},z.subtract=function(I,V){return this.add(-1*I,V)},z.format=function(I){var V=this,T=this.$locale();if(!this.isValid())return T.invalidDate||m;var F=I||"YYYY-MM-DDTHH:mm:ssZ",H=R.z(this),Z=this.$H,P=this.$m,L=this.$M,U=T.weekdays,G=T.months,J=T.meridiem,oe=function(be,Pe,Ge,rt){return be&&(be[Pe]||be(V,F))||Ge[Pe].slice(0,rt)},de=function(be){return R.s(Z%12||12,be,"0")},le=J||function(be,Pe,Ge){var rt=be<12?"AM":"PM";return Ge?rt.toLowerCase():rt};return F.replace(h,function(be,Pe){return Pe||function(Ge){switch(Ge){case"YY":return String(V.$y).slice(-2);case"YYYY":return R.s(V.$y,4,"0");case"M":return L+1;case"MM":return R.s(L+1,2,"0");case"MMM":return oe(T.monthsShort,L,G,3);case"MMMM":return oe(G,L);case"D":return V.$D;case"DD":return R.s(V.$D,2,"0");case"d":return String(V.$W);case"dd":return oe(T.weekdaysMin,V.$W,U,2);case"ddd":return oe(T.weekdaysShort,V.$W,U,3);case"dddd":return U[V.$W];case"H":return String(Z);case"HH":return R.s(Z,2,"0");case"h":return de(1);case"hh":return de(2);case"a":return le(Z,P,!0);case"A":return le(Z,P,!1);case"m":return String(P);case"mm":return R.s(P,2,"0");case"s":return String(V.$s);case"ss":return R.s(V.$s,2,"0");case"SSS":return R.s(V.$ms,3,"0");case"Z":return H}return null}(be)||H.replace(":","")})},z.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},z.diff=function(I,V,T){var F,H=this,Z=R.p(V),P=O(I),L=(P.utcOffset()-this.utcOffset())*n,U=this-P,G=function(){return R.m(H,P)};switch(Z){case v:F=G()/12;break;case f:F=G();break;case p:F=G()/3;break;case d:F=(U-L)/6048e5;break;case u:F=(U-L)/864e5;break;case l:F=U/a;break;case s:F=U/n;break;case i:F=U/r;break;default:F=U}return T?F:R.a(F)},z.daysInMonth=function(){return this.endOf(f).$D},z.$locale=function(){return E[this.$L]},z.locale=function(I,V){if(!I)return this.$L;var T=this.clone(),F=D(I,V,!0);return F&&(T.$L=F),T},z.clone=function(){return R.w(this.$d,this)},z.toDate=function(){return new Date(this.valueOf())},z.toJSON=function(){return this.isValid()?this.toISOString():null},z.toISOString=function(){return this.$d.toISOString()},z.toString=function(){return this.$d.toUTCString()},Y}(),X=Q.prototype;return O.prototype=X,[["$ms",o],["$s",i],["$m",s],["$H",l],["$W",u],["$M",f],["$y",v],["$D",y]].forEach(function(Y){X[Y[1]]=function(z){return this.$g(z,Y[0],Y[1])}}),O.extend=function(Y,z){return Y.$i||(Y(z,Q,O),Y.$i=!0),O},O.locale=D,O.isDayjs=k,O.unix=function(Y){return O(1e3*Y)},O.en=E[b],O.Ls=E,O.p={},O})})(yS);var cH=yS.exports;const ao=qe(cH),uH=async()=>{try{const{data:e}=await re.get("/dash/view-schedule");return e}catch(e){return e}},dH=()=>{const e=gS(ao),{schedule:t}=Ce(),r=t.map(n=>({start:new Date(ao(n.start_time)),end:new Date(ao(n.end_time)),title:n.title}));return c.jsx("div",{children:c.jsx(vS,{localizer:e,events:r,style:{height:500,marginTop:"8rem"}})})},fH=async({request:e})=>{const t=Object.fromEntries([...new URL(e.url).searchParams.entries()]);try{const{data:r}=await re.get("/investment/browse-investment-group",{params:t});return{data:r}}catch(r){return r}},pH=()=>{const{data:e}=Ce(),{user:t,member:r}=Cr();return c.jsx("div",{children:c.jsx(Wn,{context:{data:e,member:r,user:t}})})};function hH(e){return Xe({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.5 12.473c0-2.495-.818-4.426-2.653-6.259-.309-.309-.676-.533-1.073-.682l-.946-.946-3.707-3.707c-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879c-.567.566-.879 1.32-.879 2.121 0 .277.037.549.11.809-1.029.461-1.974 1.12-2.827 1.974-1.795 1.793-2.783 4.178-2.783 6.717 0 2.495.818 4.426 2.653 6.259.299.298.652.521 1.034.669l.985.986 3.707 3.707c.566.567 1.32.879 2.121.879s1.555-.312 2.121-.879c.567-.566.879-1.32.879-2.121 0-.286-.04-.566-.117-.834 1.031-.461 1.978-1.121 2.833-1.975 1.796-1.794 2.784-4.18 2.784-6.718zm-9.13 7.484l1.337 1.336c.391.391.391 1.023 0 1.414-.195.195-.451.293-.707.293s-.512-.098-.707-.293l-3.707-3.707 3.707-3.707c.195-.195.451-.293.707-.293s.512.098.707.293c.391.391.391 1.023 0 1.414l-1.247 1.247c1.351-.091 2.425-.59 3.428-1.593 1.039-1.038 1.611-2.419 1.611-3.888 0-1.422-.401-2.351-1.48-3.429-.391-.391-.391-1.023 0-1.415.195-.195.451-.293.708-.293.256 0 .512.098.707.292 1.448 1.447 2.066 2.896 2.066 4.844 0 2.004-.78 3.887-2.197 5.303-1.39 1.39-3.01 2.1-4.933 2.182zm-.766-14.939l-1.311-1.311c-.391-.391-.391-1.023 0-1.414.195-.195.451-.293.707-.293s.512.098.707.293l3.707 3.707-3.707 3.707c-.195.195-.451.293-.707.293s-.512-.098-.707-.293c-.391-.391-.391-1.023 0-1.414l1.275-1.275c-1.365.086-2.448.584-3.456 1.593-1.04 1.039-1.612 2.42-1.612 3.889 0 1.422.401 2.351 1.48 3.429.391.391.391 1.023 0 1.415-.195.195-.452.293-.708.293s-.512-.098-.707-.292c-1.447-1.448-2.065-2.897-2.065-4.845 0-2.004.78-3.887 2.197-5.303 1.382-1.383 2.993-2.093 4.907-2.179zm-2.916 10.204c-.888-.887-1.188-1.574-1.188-2.722 0-1.202.468-2.332 1.318-3.181l.187-.179c.033.481.236.93.581 1.274.378.378.88.586 1.414.586s1.036-.208 1.414-.586l2.339-2.339c-.078.596.104 1.219.56 1.675.888.887 1.188 1.574 1.188 2.722 0 1.202-.468 2.332-1.318 3.181l-.188.181c-.039-.472-.241-.91-.579-1.248-.38-.378-.882-.586-1.416-.586s-1.036.208-1.414.586l-2.342 2.342c.089-.605-.093-1.242-.556-1.706z"},child:[]}]})(e)}const mH=se.main`
  min-height: 100vh;

  .section-center {
    margin: 0 auto;
    width: 90vw;
  }
  .article {
    width: 80vw;
    position: relative;
    margin: 0 auto;
    background: black;
    border-radius: 10px;
    margin-bottom: 1.5rem;
  }
  .groupInfo {
    background: transparent;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .btn-group {
    background: transparent;
    border: transparent;
    color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .info-text {
    color: red;
    margin-bottom: 1rem;
  }
  svg {
    font-size: 1.5rem;
    background: transparent;
    border: transparent;
  }
  p {
    text-align: center;
    text-transform: capitalize;
    color: white;
    margin: 0 auto;
    margin-bottom: 0.4rem;
  }
  h4 {
  }
  .groupName {
    padding: 1rem 0;
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .investment {
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  .dues {
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  .members {
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  .desc {
    padding-bottom: 0.5rem;
    color: red;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 1.5rem;
  }
  .firstName {
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  .state {
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  .city {
    color: red;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
  }
  a {
    text-decoration: none;
    text-align: center;
  }

  .btn-block {
    transition: var(--transition);
  }
  .btn-block:hover {
    background: white;
    color: black;
  }
  @media (min-width: 700px) {
    .article {
      width: 50vw;
    }
  }
  @media (min-width: 800px) {
    .section-center {
      display: grid;
      grid-template-columns: 0.2fr 0.5fr;
    }
    .article {
      position: relative;
      width: 40vw;
      margin-right: 4rem;
    }
    .btn-block {
      position: absolute;
      bottom: 0;
    }
  }
  @media (min-width: 950px) {
    .article {
      width: 30vw;
    }
  }
`,vH=()=>{const{data:{groups:e,numOfPages:t}}=Cr(),[r,n]=$.useState(!1),a=()=>{n(!r)};return c.jsxs(mH,{children:[c.jsx(P5,{}),c.jsx("div",{className:"section-center",children:e.map(o=>{const{_id:i,groupName:s,desc:l,dues:u,investment:d,members:f,joinedBy:p}=o;return c.jsxs("article",{className:"article",children:[c.jsxs("div",{className:"groupInfo",children:[c.jsx("h5",{className:"info-text",children:"groupInfo"}),c.jsx(_e,{className:"btn-group",to:`../group-info/${i}`,onClick:a,children:c.jsx(hH,{})})]}),c.jsx("h3",{className:"groupName",children:s}),c.jsx("p",{children:"type of group:"}),c.jsx("h4",{className:"investment",children:d}),c.jsx("p",{children:"how much $$$/month:"}),c.jsxs("h4",{className:"dues",children:["$",u]}),c.jsx("p",{children:"how many members are needed:"}),c.jsx("h4",{className:"members",children:`${p.length}  / ${f}`}),c.jsxs("div",{className:"desc",children:[c.jsx("p",{children:"desc:"}),c.jsx("q",{children:l})]}),c.jsx(_e,{to:`../create-member/${i}`,className:"btn btn-block",children:"join group"})]},i)})}),c.jsx("div",{className:"pagination",children:t>1?c.jsx(R5,{}):null})]})},gH=se.main`
  min-height: 100vh;
  .form {
    background: black;
  }
  .form-input {
    color: black;
    margin-bottom: 1.5rem;
  }
  .form-label {
    font-size: 1.2rem;
    color: red;
    margin-bottom: 0.8rem;
  }
  .form-select {
    width: 100%;
    background: grey;
  }
  .label {
    font-size: 1.2rem;
    color: red;
    text-transform: capitalize;
  }
  .area {
    margin-top: 1rem;
    width: 100%;
    background: white;
  }
  .btn {
    margin-top: 2rem;
  }
`,yH=async({request:e})=>{var n,a;const t=await e.formData(),r=Object.fromEntries(t);try{return await re.post("/investment/create-investment-group",r),W.success("You have Created A Investment Group, Congratz!"),Ne("../../../dashboard")}catch(o){return W.error((a=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:a.msg),null}},wH=()=>c.jsx(gH,{children:c.jsxs("div",{className:"section-center",children:[c.jsxs("div",{className:"title",children:[c.jsx("h3",{children:"Investment Groups"}),c.jsx("div",{className:"title-underline"})]}),c.jsx("div",{className:"form-container",children:c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(ve,{type:"text",name:"uniqueName",placeholder:"Special Name"}),c.jsx(ve,{type:"text",name:"groupName",placeholder:"GroupName"}),c.jsx(Ct,{name:"investment",list:Object.values(ax),defaultValue:"Video Game Studio"}),c.jsx(Ct,{name:"members",list:Object.values(C5),defaultValue:"1"}),c.jsx(Ct,{name:"dues",list:Object.values(D5),defaultValue:"100"}),c.jsx("label",{htmlFor:"area",className:"label",children:"goals for this group"}),c.jsx("textarea",{name:"desc",id:"area",className:"area",placeholder:"write here",maxLength:"200"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"submit"})]})})]})}),bH=se.article`
  border-radius: 10px;
  min-height: 30vh;
  background: red;
  .title {
    margin-bottom: 5rem;
  }
  ul li {
    text-align: center;
    color: black;
  }
  li {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
  }
  p {
    text-transform: capitalize;
    color: yellow;
    text-align: center;
    margin-bottom: 1rem;
  }
  svg {
    margin-left: 1rem;
    font-size: 2rem;
    background-color: black;
    color: red;
    transition: var(--transition);
  }
  svg:hover {
    background: yellow;
    color: blue;
  }
  @media (min-width: 600px) {
    p {
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
`;function xH(e){return Xe({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19 21a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14zM12 7v4h5v2h-5v4l-5-5 5-5z"},child:[]}]})(e)}const SH=async({params:e})=>{try{const{data:t}=await re.get(`/investment/group-info/${e.id}`);return t}catch(t){return t}},EH=()=>{const e=Ce(),{groupInfo:t}=e;return c.jsxs(bH,{children:[t.map(r=>{const{president:n,createdBy:a}=r;return c.jsxs("article",{children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:"group info"})}),n.map(o=>{const{_id:i,state:s,city:l,firstName:u,role:d}=o;return c.jsxs("ul",{children:[c.jsx("p",{children:"President"}),c.jsx("li",{children:u}),c.jsx("p",{children:"state"}),c.jsx("li",{children:s}),c.jsx("p",{children:"city"}),c.jsx("li",{children:l}),c.jsx("p",{children:"organization role"}),c.jsx("li",{children:d})]},i)})]},a)}),c.jsx(_e,{className:"btn-group",to:"../browse-all-groups",children:c.jsx(xH,{})})]})},kH=se.main`
  min-height: 50vh;
  .form {
    background: black;
  }
  .title {
    color: red;
    margin-bottom: 3rem;
  }
  .form-label {
    color: red;
    margin-bottom: 2rem;
  }
  .form-input {
    color: red;
    margin-bottom: 2rem;
  }
  .link-container {
    width: 50vw;
    margin: 0 auto;
  }
  a {
    text-align: center;
    text-decoration: none;
    transition: var(--transition);
    cursor: pointer;
  }
  a:hover {
    color: red;
  }
  @media (min-width: 1200px) {
    .link-container {
      width: 35vw;
    }
  }
`,jH=async({request:e,params:t})=>{var a,o;const r=await e.formData(),n=Object.fromEntries(r);try{return await re.post(`/investment/create-member/${t.groupId}`,n),W.success("You Have Joined This Group!"),Ne("../../../dashboard")}catch(i){return W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}},$H=()=>c.jsxs(kH,{children:[c.jsxs(Se,{method:"post",className:"form",children:[c.jsx("div",{className:"title",children:c.jsx("h3",{children:"create member"})}),c.jsx(ve,{type:"text",name:"uniqueName",placeholder:"special Name"}),c.jsx(ve,{type:"text",name:"phoneNumber",placeholder:"123-456-7890"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"create member"})]}),c.jsx("div",{className:"link-container",children:c.jsx(_e,{className:"btn btn-block",to:"../browse-all-groups",children:"change mind"})})]}),NH=async()=>{try{const{data:e}=await re.get("/investment/select-group/get-all-user-groups");return e}catch(e){return e}},CH=()=>{const{group:e}=Ce();return c.jsx(c.Fragment,{children:c.jsx(Wn,{context:{group:e}})})},DH=se.main`
  min-height: 100vh;
  .section-center {
    width: 90vw;
  }
  .article {
    width: 60vw;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 3rem;
    border-radius: 10px;
  }
  h2 {
    padding-top: 0.5rem;
    color: red;
    margin-bottom: 1rem;
  }
  h4 {
    color: red;
    margin-bottom: 1rem;
  }
  a {
    text-align: center;
    text-decoration: none;
    background: red;
    padding: 0.3rem 2.5rem;
    transition: var(--transition);
  }
  a:hover {
    background: white;
    color: red;
  }
  @media (min-width: 600px) {
    .section-center {
      margin: 0 auto;
    }
    .article {
      width: 40vw;
      margin: 3rem auto;
    }
  }
  @media (min-width: 1000px) {
    .section-center {
      display: grid;
      grid-template-columns: 0.5fr 0.2fr 0.1fr;
    }
    .article {
      width: 20vw;
      margin-right: 10rem;
    }
  }
`,OH=()=>{const{group:e}=Cr();return c.jsx(DH,{children:c.jsx("div",{className:"section-center",children:e.map(t=>{const{_id:r,groupName:n,investment:a}=t;return c.jsxs("article",{className:"article",children:[c.jsx("h2",{children:n}),c.jsx("h4",{children:a}),c.jsx(_e,{to:`../select-group/user-group/${r}`,className:"btn btn-block",children:"initalize group"})]},r)})})})},TH=se.main`
  min-height: 100vh;
  .section-center {
    margin: 0 auto;
    margin-top: 10rem;
  }
  .title h3 {
    color: red;
  }
  .form {
    background: black;
  }
  .form-label {
    color: red;
  }
  .form-input {
    background: white;
  }
  .form-input,
  ::placeholder {
    color: red;
  }
  .btn {
    background: red;
  }
`,_H=async({params:e,request:t})=>{var a,o;const r=await t.formData(),n=Object.fromEntries(r);try{return await re.post(`investment/select-group/user-group/${e.id}`,n),W.success("initalizing group "),Ne(`/dashboard/investment/user-group/${e.id}`)}catch(i){return W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}},PH=()=>c.jsx(TH,{children:c.jsx("div",{className:"section-center",children:c.jsxs(Se,{method:"post",className:"form",children:[c.jsx("div",{className:"title",children:c.jsx("h3",{children:"Initalize group"})}),c.jsx(ve,{type:"text",name:"uniqueName",placeholder:"Special Name"}),c.jsx(ve,{type:"email",name:"email",placeholder:"login email"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"initalize group"})]})})}),RH=se.main`
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  .aside {
    min-height: 100vh;
    margin-right: 3rem;
    background: black;
  }
  .title {
    color: red;
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }
  .headline {
    padding: 1rem 0.45rem;
  }
  .title-underline {
    background-color: red;
    width: auto;
    margin-top: -0.7rem;
    margin-bottom: 1rem;
  }
  ul {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    text-align: center;
    color: red;
    font-size: 0.8rem;
    transition: var(--transition);
    cursor: pointer;
  }
  a:hover {
    color: white;
  }
  .active {
    color: white;
  }
  @media (min-width: 800px) {
    .title {
      font-size: 1.5rem;
    }

    a {
      font-size: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
    }
  }
`,MH=[{pageId:he(),page:"create",links:[{id:he(),label:"create headline",url:"create/create-headline",view:!0},{id:he(),label:"create schedule",url:"create/create-schedule",view:!0},{id:he(),label:"create sub groups",url:"create/sub-groups",view:!0},{id:he(),label:"create link",url:"create/link",view:!0},{id:he(),label:"promotion",url:"create/promotion",view:!0}]},{pageId:he(),page:"delete",links:[{id:he(),label:"delete headline",url:"delete/delete-headline",view:!0},{id:he(),label:"delete schedule",url:"delete/delete-schedule",view:!0},{id:he(),label:"delete sub groups",url:"delete/delete-subgroups",view:!0},{id:he(),label:"delete entire group",url:"delete/entire-group",view:!0},{id:he(),label:"leave group",url:"delete/leave-group",view:!0}]},{pageId:he(),page:"views",links:[{id:he(),label:"headline news",url:"views/headline-news",view:!0},{id:he(),label:"view schedule",url:"views/view-schedule",view:!0},{id:he(),label:"view all groups",url:"views/view-all-groups",view:!0},{id:he(),label:"messages",url:"views/messages",view:!0},{id:he(),label:"view all links",url:"views/view-all-links",view:!0}]}],AH=async({params:e})=>{try{const{data:t}=await re.get(`/investment/user-group/get-member/${e.groupId}`);return t}catch(t){return t}},LH=()=>{const{member:e,groupMembers:t,checkPresident:r}=Ce(),[n]=$.useState(r),{members:a}=t[0],o=Hr();return $.useEffect(()=>{if(n.length===0)return o("emergency")},[n.length,o]),c.jsxs(RH,{children:[c.jsx("aside",{className:"aside",children:MH.map(i=>{const{pageId:s,page:l,links:u}=i;return c.jsx("article",{children:c.jsxs("div",{className:"title",children:[c.jsx("h5",{className:"headline",children:l}),c.jsx("div",{className:"title-underline"}),c.jsx("div",{className:"navbar"}),c.jsx("div",{className:"links",children:u.map(d=>{const{id:f,label:p,url:v}=d;if(!(p==="create headline"&&e.permission.headline!==!0)&&!(p==="create schedule"&&e.permission.schedule!==!0)&&!(p==="create sub groups"&&e.permission.subgroups!==!0)&&!(p==="create link"&&e.permission.subgroup_link!==!0)&&!(p==="promotion"&&e.permission.promotion!==!0)&&!(p==="delete headline"&&e.permission.delete_headline!==!0)&&!(p==="delete schedule"&&e.permission.delete_schedule!==!0)&&!(p==="delete sub groups"&&e.permission.delete_subgroups!==!0)&&!(p==="headline news"&&e.permission.view_headline!==!0)&&!(p==="view schedule"&&e.permission.view_schedule!==!0)&&!(p==="view subgroup"&&e.permission.view_subgroup!==!0)&&!(p==="messages"&&e.permission.view_messages!==!0)&&!(p==="view all links"&&e.permission.view_all_links!==!0)&&!(p==="delete entire group"&&e.permission.delete_investment_group!==!0)&&!(p==="leave group"&&e.permission.leave_group!==!0))return c.jsx("ul",{children:c.jsx(no,{to:v,children:p})},f)})})]})},s)})}),c.jsx("div",{className:"main",children:c.jsx(Wn,{context:{member:e,members:a}})})]})},IH=async({request:e,params:t})=>{var a,o;const r=await e.formData(),n=Object.fromEntries(r);try{return await re.post(`/investment/user-group/create-headline/${t.groupId}`,n),W.success("New Headline Created!"),Ne("../views/headline-news")}catch(i){return console.log(i),W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}},zH=()=>c.jsx(jx,{children:c.jsxs("div",{className:"section-center",children:[c.jsx("div",{className:"title",children:c.jsxs("h2",{children:["create ",c.jsx("span",{children:"headline"})]})}),c.jsx("div",{className:"title-underline"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(Ct,{name:"category",list:[...Object.values(oC)]}),c.jsx(ve,{type:"text",name:"headline",placeholder:"happy hour"}),c.jsx("label",{htmlFor:"link",children:"URL Link"}),c.jsx("input",{className:"link",id:"link",type:"url",name:"link",placeholder:"https://discord.gg/afhpsZgV"}),c.jsx("br",{}),c.jsx("h6",{children:"descritpion"}),c.jsx("textarea",{name:"desc",placeholder:"write here",className:"desc"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"create headline"})]})]})}),FH=async({request:e,params:t})=>{var a,o;const r=await e.formData(),n=Object.fromEntries(r);try{return await re.post(`/investment/user-group/create-schedule/${t.groupId}`,n),W.success("This Schedule Has Been Created!"),Ne("../views/view-schedule")}catch(i){return console.log(i),W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}},UH=()=>c.jsxs($x,{children:[c.jsx("div",{className:"title",children:c.jsxs("h1",{children:["create ",c.jsx("span",{children:"schedule"})]})}),c.jsx("div",{className:"title-underline"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(ve,{type:"text",name:"title",placeholder:"title"}),c.jsx(ve,{type:"date",name:"start"}),c.jsx(ve,{type:"time",name:"start_time"}),c.jsx(ve,{type:"date",name:"end"}),c.jsx(ve,{type:"time",name:"end_time"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"create schedule"})]})]}),BH=se.main`
  min-height: 100vh;

  .nav {
    background: black;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5rem;
    margin-bottom: 3rem;
  }
  .link {
    color: red;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1rem;
    margin-right: 2rem;
    padding: 0 1.25rem;
    cursor: pointer;
  }
  .link:hover {
    color: white;
  }
`,HH=()=>c.jsxs(BH,{children:[c.jsxs("div",{className:"nav",children:[c.jsx(no,{className:"link",to:"../",children:"Home"}),c.jsx(no,{id:"create-subgroup",className:"link",to:"create-subgroup",children:"create subGroup"}),c.jsx(no,{className:"link",to:"view-subgroups",children:"view subGroups"})]}),c.jsx(Wn,{})]}),WH=se.main`
  min-height: 100vh;
  width: 70vw;
  .form {
    width: 70vw;
  }
  .form-label {
    color: red;
  }
  .form-input {
    color: red;
    background: black;
    margin-bottom: 0.5rem;
  }
`,VH=async({request:e,params:t})=>{var a,o;const r=await e.formData(),n=Object.fromEntries(r);try{return await re.post(`/investment/user-group/create-subgroup/${t.groupId}`,n),W.success("SubGroup has been created!"),Ne("../view-subgroups")}catch(i){return W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}},GH=()=>c.jsx(WH,{children:c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(ve,{type:"text",name:"subgroupName",placeholder:"team1"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"create subGroup"})]})}),g0=se.main`
  min-height: 100vh;
  .article {
    background: black;
    border-radius: 10px;
    margin: 15rem auto;
  }
  .groupName {
    text-align: center;
    padding: 1rem 0;
    color: red;
  }
  ul li {
    text-align: center;
    color: red;
    margin-right: 1rem;
  }
  .input {
    width: 100%;
    padding: 0.5rem 0;
  }
`,YH=async()=>{try{const{data:e}=await re.get("/investment/user-group/view-teamleader-group");return e}catch(e){return console.log(e),e}},KH=()=>{const{teamLeaderGroup:e}=Ce(),[t]=$.useState(e),[r,n]=$.useState("");if(t.length===0)return c.jsx(g0,{children:c.jsx("h3",{className:"error-msg",children:"you are not a teamLeader of any groups!"})});const{subgroupName:a,members:o,_id:i}=t[0],s=async l=>{var d,f;l.preventDefault();const u={link:r};try{await re.patch(`/investment/user-group/update-link/${i}`,u),W.success("you have added a link to this subgroup!"),n("")}catch(p){W.error((f=(d=p==null?void 0:p.response)==null?void 0:d.data)==null?void 0:f.msg)}};return c.jsx(g0,{children:c.jsxs("article",{className:"article",children:[c.jsx("h4",{className:"groupName",children:a}),c.jsx("ul",{children:o.map(l=>{const{_id:u,firstName:d}=l;return c.jsx("li",{className:"list",children:d},u)})}),c.jsxs("form",{method:"post",onSubmit:s,children:[c.jsx("input",{type:"url",className:"input",name:"link",value:r,onChange:l=>n(l.target.value),placeholder:"https://discord.gg/afhpsZgV"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"submit"})]})]})})},y0=se.main`
  min-height: 100vh;
  .error-msg {
    color: red;
  }
  .section-center {
    width: 80vw;
    margin: 5rem auto;
  }

  .article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: black;
    border-radius: 5px;
    margin: 0 auto;
    width: 40%;
    margin-bottom: 4rem;
  }
  .title h2 {
    color: red;
  }
  .members {
    color: red;
    text-align: center;
    margin: 3rem auto;
  }
  a {
    text-decoration: none;
  }
  .teamleader {
    display: block;
    background: red;
    color: white;
    text-align: center;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
  }
  .lists {
    display: block;
    background: grey;
    color: black;
    text-align: center;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
  }

  .btns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .useName {
    display: block;
    text-align: center;
    margin-bottom: 1rem;
    background: white;
    color: red;
    padding: 0.5rem 0;
  }
  .update-btn {
    width: 6rem;
    border: none;
    background: white;
    border-radius: 5px;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    color: red;
    text-transform: capitalize;
    font-size: 1rem;
    transition: var(--transition);
  }
  .update-btn:hover {
    background: red;
    color: black;
  }
  .btn {
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    background: red;
    color: black;
  }
  @media (min-width: 800px) {
    .article {
      width: 300px;
    }
    .section-center {
      display: grid;
      grid-template-columns: 0.5fr 0.4fr;
      gap: 2rem;
    }
    .btns {
      flex-direction: row;
    }
    .update-btn {
      width: auto;
      margin-bottom: 0;
      margin-right: 0.125rem;
      font-size: 1rem;
    }
  }
  @media (min-width: 1170px) {
    .article {
      width: 500px;
    }
  }
`,qH=async()=>{try{const{data:e}=await re.get("/investment/user-group/view-created-subgroups");return e}catch(e){return console.log(e),e}},XH=()=>{const{subgroups:e}=Ce(),{groupId:t}=Da();return e.length===0?c.jsx(y0,{children:c.jsx("h2",{className:"error-msg",children:"no subgroups were created!"})}):c.jsxs(y0,{children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:"pick a group"})}),c.jsx("div",{className:"title-underline"}),c.jsx("div",{className:"section-center",children:e.map(r=>{const{_id:n,subgroupName:a,joinedBy:o,members:i,teamLeader:s}=r;return c.jsxs("article",{className:"article",children:[c.jsx("div",{className:"title",children:c.jsx("h3",{children:a})}),c.jsxs("p",{className:"members",children:["members:",`${o.length}`]}),c.jsx(sx,{members:i,subId:n,teamLeader:s}),c.jsx(_e,{to:`../select-members/${t}/${n}`,className:"btn btn-block",children:"assign members"})]},n)})})]})},QH=se.main`
  min-height: 100vh;
  .title-underline {
    width: 30%;
  }
  .section-center {
    margin: 0 auto;
  }
  .article {
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    border-radius: 10px;
  }
  h5 {
    margin-top: 0.8rem;
    color: yellow;
  }
  .info {
    margin-bottom: 1rem;
  }
  .info p {
    color: red;
    text-transform: capitalize;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
  .btn:hover {
    color: black;
    background: red;
  }
  @media (min-width: 1500px) {
    .section-center {
      width: 80vw;
      display: grid;
      grid-template-columns: 0.5fr 0.5fr;
      gap: 1rem;
    }
    .article {
      max-width: 800px;
    }
  }
`,JH=async({params:e})=>{try{const{data:t}=await re.get(`/investment/user-group/get-all-members/${e.groupId}`);return t}catch(t){return console.log(t),t}},ZH=()=>{const{subgroupId:e}=Da(),{groupMembers:t}=Ce(),{members:r}=t[0];return c.jsxs(QH,{children:[c.jsx("div",{className:"title",children:c.jsxs("h3",{children:["select ",c.jsx("span",{children:"members"})]})}),c.jsx("div",{className:"title-underline"}),c.jsx("div",{className:"section-center",children:r.map(n=>{const{_id:a,state:o,city:i,firstName:s}=n;return c.jsxs("article",{className:"article",children:[c.jsxs("div",{className:"info",children:[c.jsx("h5",{children:"firstname:"}),c.jsx("p",{children:s}),c.jsx("h5",{children:"state:"}),c.jsx("p",{children:o}),c.jsx("h5",{children:"city:"}),c.jsx("p",{children:i})]}),c.jsx(Se,{method:"post",action:`../process-member/${a}/${e}`,children:c.jsx("button",{type:"submit",className:"btn btn-block",children:"assign member"})})]},a)})})]})},wS=se.main`
  min-height: 100vh;
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }

  table {
    width: 80%;
    margin: 0 auto;
    border-collapse: collapse;
  }
  table,
  caption {
    text-transform: capitalize;
    margin: 2rem 0;
    font-size: 2rem;
    color: red;
  }
  th,
  td {
    text-align: center;
    padding: 1rem;
  }
  th {
    background: black;
    color: red;
    text-transform: capitalize;
  }
  tr:nth-child(odd) {
    text-transform: capitalize;
    background: grey;
    color: black;
    font-size: 0.9rem;
  }
  tr:nth-child(even) {
    text-transform: capitalize;
    background: red;
    color: black;
    font-size: 0.9rem;
  }

  tr:hover {
    background: whitesmoke;
    color: red;
    cursor: pointer;
    font-size: 1rem;
  }
  .btn {
    background: white;
    color: black;
  }
  @media (max-width: 715px) {
    th {
      display: none;
    }
    td {
      display: grid;
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem;
    }
    td:first-child {
      padding-top: 2rem;
    }
    td:last-child {
      padding-bottom: 2rem;
    }
    td::before {
      content: attr(data-cell) ": ";
      color: black;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`,eW=async({params:e})=>{try{const{data:t}=await re.get(`investment/user-group/get-all-members/${e.groupId}`);return t}catch(t){return t}},tW=()=>{const{groupMembers:e}=Ce(),{groupId:t}=Da(),{members:r}=e[0],a=Co().state==="submitting";return c.jsx(wS,{children:c.jsx("div",{className:"section-center",children:c.jsxs("table",{children:[c.jsx("caption",{children:"choose who to promote"}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"firstName"}),c.jsx("th",{children:"lastName"}),c.jsx("th",{children:"state"}),c.jsx("th",{children:"city"}),c.jsx("th",{children:"role"}),c.jsx("th",{children:"president"}),c.jsx("th",{children:"vice president"}),c.jsx("th",{children:"treasurer"}),c.jsx("th",{children:"associate"})]})}),c.jsx("tbody",{children:r.map(o=>{const{_id:i,firstName:s,lastName:l,state:u,city:d,permission:f}=o;return c.jsxs("tr",{children:[c.jsx("td",{"data-cell":"firstName",children:s}),c.jsx("td",{"data-cell":"lastName",children:l}),c.jsx("td",{"data-cell":"state",children:u}),c.jsx("td",{"data-cell":"city",children:d}),c.jsx("td",{"data-cell":"role",children:f.role}),c.jsx("td",{"data-cell":"select president",children:c.jsx(Se,{method:"post",action:`../president/${t}/${i}`,children:c.jsx("button",{type:"submit",className:"btn",disabled:a,children:a?"submitting...":"select president"})})}),c.jsx("td",{"data-cell":"select vice president",children:c.jsx(Se,{method:"post",action:`../vicepresident/${t}/${i}`,children:c.jsx("button",{type:"submit",className:"btn",disabled:a,children:a?"submitting...":"select vice president"})})}),c.jsx("td",{"data-cell":"select treasurer",children:c.jsx(Se,{method:"post",action:`../treasurer/${t}/${i}`,children:c.jsx("button",{type:"submit",className:"btn",disabled:a,children:a?"submitting...":"select treasurer"})})}),c.jsx("td",{"data-cell":"select associate",children:c.jsx(Se,{method:"post",action:`../associate/${t}/${i}`,children:c.jsx("button",{type:"submit",className:"btn",disabled:a,children:a?"submitting...":"select associate"})})})]},i)})})]})})})},rW=se.main`
  min-height: 100vh;

  .article {
    max-width: 800px;
    margin: 15rem auto;
    background: black;
    padding: 2rem 2rem;
  }
  h3 {
    text-align: center;
    color: red;
    margin-bottom: 0.5rem;
  }
  h5 {
    text-align: center;
    color: yellow;
    margin-bottom: 0.5rem;
  }
  p {
    text-align: center;
    text-transform: capitalize;
    color: white;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
  .prev-btn,
  .next-btn {
    background: transparent;
    border: transparent;
    color: red;
    font-size: 2rem;
    cursor: pointer;
  }
  .delete-btn {
    text-transform: capitalize;
    padding: 0.3rem 1.125rem;
    color: red;
    border: transparent;
    background: white;
    transition: var(--transition);
    cursor: pointer;
    margin: 0 2rem;
  }
  .delete-btn:hover {
    background: red;
    color: black;
  }
`,nW=async({params:e})=>{try{const{data:t}=await re.get(`/investment/user-group/view-headline/${e.groupId}`);return t}catch(t){return console.log(t),t}},aW=()=>{const{viewHeadline:e}=Ce(),[t,r]=$.useState(0),[n]=$.useState(e);if(n.length===0)return c.jsx("h1",{children:"no headlines"});const{_id:a,category:o,headline:i,desc:s}=n[t],l=()=>{r(d=>{const f=d+1;return f>n.length-1?0:f})},u=()=>{r(d=>{const f=d-1;return f<0?n.length-1:f})};return c.jsx(rW,{children:c.jsxs("article",{className:"article",children:[c.jsx("h3",{children:o}),c.jsx("h5",{children:i}),c.jsx("p",{children:s}),c.jsxs("div",{className:"btn-container",children:[c.jsx("button",{type:"button",onClick:u,className:"prev-btn",children:c.jsx(gu,{})}),c.jsx(Se,{method:"post",action:`../delete-headlines/${a}`,children:c.jsx("button",{type:"submit",className:"delete-btn",children:"delete headline"})}),c.jsx("button",{type:"button",onClick:l,className:"next-btn",children:c.jsx(yu,{})})]})]})})},oW=se.main`
  min-height: 100vh;
  .title,
  h2 {
    color: black;
  }
  span {
    color: red;
    margin-left: 1rem;
  }
  .title-underline {
    width: 25%;
  }
  .article {
    max-width: 500px;
    background: black;
    margin: 20rem auto;
    border-radius: 10px;
  }
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 0.8rem;
    color: white;
  }
  p {
    text-align: center;
    color: red;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .btn-container {
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .delete-btn {
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    background: red;
    color: white;
    border-radius: 10px;
    border: transparent;
    cursor: pointer;
  }
  .delete-btn:hover {
    background: white;
    color: red;
  }
  .prev-btn,
  .next-btn {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    color: red;
    padding: 0 1rem;
    cursor: pointer;
    transition: var(--transition);
  }
  .prev-btn :hover {
    color: white;
  }
  .next-btn :hover {
    color: white;
  }
`,iW=async({params:e})=>{try{const{data:t}=await re.get(`/investment/user-group/get-schedule/${e.groupId}`);return t}catch(t){return console.log(t),t}},sW=()=>{const e=Co(),{schedule:t}=Ce(),[r]=t,{dates:n}=r,[a,o]=$.useState(0),[i]=$.useState(n);if(i.length===0)return c.jsx("h1",{children:"no dates"});const s=e.state==="submitting",{_id:l,title:u,start_time:d,end_time:f}=i[a],p=()=>{o(y=>{const m=y+1;return m>i.length-1?0:m})},v=()=>{o(y=>{const m=y-1;return m<0?i.length-1:m})};return c.jsxs(oW,{children:[c.jsx("div",{className:"title",children:c.jsxs("h2",{children:["delete",c.jsx("span",{children:"dates"})]})}),c.jsx("div",{className:"title-underline"}),c.jsxs("article",{className:"article",children:[c.jsx("h1",{children:u}),c.jsx("p",{children:d}),c.jsx("p",{children:f}),c.jsxs("div",{className:"btn-container",children:[c.jsx("button",{type:"button",className:"prev-btn",onClick:v,children:c.jsx(gu,{})}),c.jsx(Se,{method:"post",action:`../delete-date/${l}`,children:c.jsx("button",{type:"submit",className:"delete-btn",disabled:s,children:s?"deleting date...":"delete date"})}),c.jsx("button",{type:"button",className:"next-btn",onClick:p,children:c.jsx(yu,{})})]})]})]})},w0=se.main`
  min-height: 100vh;
  .delete-msg {
    color: red;
    margin: 10rem auto;
  }
  .title h3 {
    color: black;
  }
  span {
    color: red;
  }
  .title-underline {
    width: 25%;
  }
  .article {
    background: black;
    margin: 15rem auto;
    max-width: 400px;
    border-radius: 10px;
  }

  h4 {
    color: red;
    text-align: center;
    padding-top: 0.5rem;
    margin-bottom: 1rem;
  }
  p {
    color: red;
    text-align: center;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    justify-content: space-between;
  }
  .delete-btn {
    color: red;
    border: transparent;
    border-radius: 5px;
    text-transform: capitalize;
    padding: 0.3rem 1rem;
    margin-bottom: 0.5rem;
    transition: var(--transition);
    cursor: pointer;
  }
  .delete-btn:hover {
    background: red;
    color: black;
  }
  .prev-btn,
  .next-btn {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    margin: 0 1rem;
    color: white;
    transition: var(--transition);
    cursor: pointer;
  }
  .prev-btn:hover,
  .next-btn:hover {
    color: red;
  }
`,lW=async()=>{try{const{data:e}=await re.get("/investment/user-group/view-created-subgroups");return e}catch(e){return console.log(e),e}},cW=()=>{const{subgroups:e}=Ce(),t=Co(),[r,n]=$.useState(0),[a]=$.useState(e);if(a.length===0)return c.jsx(w0,{children:c.jsx("h1",{className:"delete-msg",children:"no subgroups"})});const{_id:o,subgroupName:i,joinedBy:s}=a[r],l=t.state==="submitting",u=()=>{n(f=>{const p=f+1;return p>a.length-1?0:p})},d=()=>{n(f=>{const p=f-1;return p<0?a.length-1:p})};return c.jsxs(w0,{children:[c.jsx("div",{className:"title",children:c.jsxs("h3",{children:["delete ",c.jsx("span",{children:"subgroup"})]})}),c.jsx("div",{className:"title-underline"}),c.jsxs("article",{className:"article",children:[c.jsx("h4",{children:i}),c.jsx("p",{children:"members:"}),c.jsx("p",{children:s.length}),c.jsxs(Se,{method:"post",action:`../delete-subgroup/${o}`,children:[c.jsx("button",{type:"button",className:"prev-btn",onClick:d,children:c.jsx(gu,{})}),c.jsx("button",{type:"submit",className:"delete-btn",disabled:l,children:l?"deleteing group...":"delete subgroup"}),c.jsx("button",{type:"button",className:"next-btn",onClick:u,children:c.jsx(yu,{})})]})]})]})},b0=se.main`
  min-height: 100vh;
  .no-news {
    color: red;
    margin: 10rem auto;
  }
  .title h3 {
    color: black;
  }
  span {
    color: red;
  }
  .title-underline {
    width: 25%;
  }
  .section-center {
    max-width: 800px;
  }
  .article {
    background: black;
    width: 20rem;
    padding: 0.5rem 0;
    margin: 2rem auto;
    border: 3px solid red;
    border-radius: 10px;
  }
  .category {
    color: red;
  }
  .article-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .headline h3 {
    color: red;
  }
  a {
    margin: 0 auto;
  }
  .link {
    margin-bottom: 1rem;
    cursor: pointer;
    color: white;
  }
  .link:hover {
    color: red;
  }
  .desc p {
    color: white;
    width: 20em;
    padding: 0 1.5rem;
    text-align: center;
    text-transform: capitalize;
  }
  @media (min-width: 1000px) {
    .section-center {
      max-width: 90vw;
      display: grid;
      grid-template-columns: 0.5fr 0.4fr;
      gap: 0 1rem;
    }
  }
  @media (min-width: 1200px) {
    .section-center {
      grid-template-columns: 0.5fr 0.4fr 0.4fr;
    }
  }
`,uW=async({params:e})=>{try{const{data:t}=await re.get(`/investment/user-group/view-headline/${e.groupId}`);return t}catch(t){return t}},dW=()=>{const{viewHeadline:e}=Ce();return e.length===0?c.jsx(b0,{children:c.jsx("h1",{className:"no-news",children:"no headline news!"})}):c.jsxs(b0,{children:[c.jsx("div",{className:"title",children:c.jsxs("h3",{children:["headline ",c.jsx("span",{children:"news"})]})}),c.jsx("div",{className:"title-underline"}),c.jsx("div",{className:"section-center",children:e.map(t=>{const{_id:r,category:n,headline:a,desc:o,link:i="none"}=t;return c.jsx("article",{className:"article",children:c.jsxs("div",{className:"article-center",children:[c.jsx("h2",{className:"category",children:n}),c.jsx("div",{className:"headline",children:c.jsx("h3",{children:a})}),c.jsxs("div",{className:"desc",children:[c.jsx("p",{className:"link",children:c.jsx("a",{href:i,target:"_blank",children:i})}),c.jsx("p",{children:o})]})]})},r)})})]})},fW=async({params:e})=>{try{const{data:t}=await re.get(`/investment/user-group/get-schedule/${e.groupId}`);return t}catch(t){return t}},pW=()=>{const e=gS(ao),{schedule:t}=Ce(),r=t.map(o=>o.dates),[n]=r,a=n.map(o=>({start:new Date(ao(o.start_time)),end:new Date(ao(o.end_time)),title:o.title}));return c.jsx("div",{children:c.jsx(vS,{localizer:e,events:a,style:{height:500,marginTop:"8rem"}})})},x0=se.main`
  min-height: 100vh;
  .error-msg {
    color: red;
    margin: 10rem auto;
  }
  .change-btn {
    width: 20rem;
    height: 3rem;
    color: red;
    font-size: 1.5rem;
    text-align: center;
    margin: 0 auto;
    background: black;
  }
  .error {
    margin: 10rem auto;
    color: red;
  }

  .section-center {
    width: 60vw;
    margin: 0 auto;
  }

  table {
    width: 60%;
    margin: 0 auto;
    border-collapse: collapse;
  }
  table,
  caption {
    text-transform: capitalize;
    margin: 2rem 0;
    font-size: 2rem;
  }
  th,
  td {
    text-align: center;
    padding: 1rem;
  }
  th {
    background: black;
    color: red;
    text-transform: capitalize;
  }
  tr:nth-child(odd) {
    text-transform: capitalize;
    background: grey;
    color: black;
    font-size: 0.9rem;
  }
  tr:nth-child(even) {
    text-transform: capitalize;
    background: red;
    color: black;
    font-size: 0.9rem;
  }
  .link-btn {
    background: black;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    cursor: pointer;
  }
  @media (max-width: 650px) {
    th {
      display: none;
    }
    td {
      display: grid;
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem;
    }
    td:first-child {
      padding-top: 2rem;
    }
    td:last-child {
      padding-bottom: 2rem;
    }
    td::before {
      content: attr(data-cell) ": ";
      color: black;
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  @media (min-width: 1000px) {
    .error {
      margin-left: 25%;
    }
    table {
      width: 80%;
    }
    tr:nth-child(odd) {
      font-size: 1rem;
    }
    tr:nth-child(even) {
      font-size: 1rem;
    }
    .btn {
      width: 50%;
      margin: 0 auto;
    }
  }
`,hW=async({params:e})=>{try{const{data:t}=await re.get(`/investment/user-group/all-groups/${e.groupId}`);return t}catch(t){return console.log(t),t}},mW=()=>{const{subgroups:e,groupMembers:t}=Ce(),[r,n]=$.useState(!1);if(e.length===0&&t.length===0)return c.jsx(x0,{children:c.jsx("h2",{className:"error",children:"you have not been created in a subgroup yet!"})});const a=()=>{n(!r)};return c.jsxs(x0,{children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:r?"SubGroup Members":"All Group Members"})}),c.jsx("div",{className:"title-underline"}),c.jsx("button",{type:"button",onClick:a,className:"change-btn",children:r?"All Group Members":"SubGroup Members"}),c.jsx("div",{className:"section-center",children:r?c.jsx(lx,{subgroups:e}):c.jsx(cx,{groupMembers:t})})]})},S0=se.main`
  min-height: 100vh;
  .error-msg {
    color: red;
    margin: 10rem auto;
  }
  tr:nth-child(odd) {
    background: black;
    color: red;
    cursor: pointer;
  }
  tr:nth-child(even) {
    background: grey;
    cursor: pointer;
  }
  tr:hover {
    background: white;
  }

  .title-underline {
    width: 25%;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th {
    background: red;
    color: black;
    padding: 0.5rem 0;
    text-transform: upperCase;
  }

  td {
    padding: 0.8rem 0;
    text-align: center;
    text-transform: capitalize;
  }

  .link-btn {
    background: black;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    cursor: pointer;
  }
  .link-btn a {
    color: green;
  }
  .link-btn a:hover {
    color: red;
  }

  .delete {
    background: black;
    color: green;
    padding: 0.2rem 0.8rem;
    border-radius: 10px;
    cursor: pointer;
  }
  .delete:hover {
    color: red;
  }

  @media (max-width: 600px) {
    th {
      display: none;
    }
    td {
      display: grid;
      color: white;
      text-align: center;
      text-transform: capitalize;
      grid-template-columns: 15ch auto;
      padding: 0.5rem 1rem;
      font-weight: 700;
    }
    td::before {
      content: attr(data-cell) ":";
      color: red;
      text-transform: uppercase;
      font-weight: 600;
    }
    .delete {
      width: 100%;
    }
  }
`,vW=async()=>{try{const{data:e}=await re.get("/investment/user-group/contact/get-messages");return e}catch(e){return console.log(e),e}},gW=()=>{const{messages:e}=Ce(),{messenger:t}=e[0];return t.length===0?c.jsx(S0,{children:c.jsx("h2",{className:"error-msg",children:"no messages!"})}):c.jsxs(S0,{children:[c.jsx("div",{className:"title",children:c.jsx("h3",{children:"mail"})}),c.jsx("div",{className:"title-underline"}),c.jsxs("table",{children:[c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"greeting"}),c.jsx("th",{children:"firstName"}),c.jsx("th",{children:"lastName"}),c.jsx("th",{children:"read"}),c.jsx("th",{children:"contact"}),c.jsx("th",{children:"delete"})]})}),c.jsx("tbody",{children:t.map(r=>{const{_id:n,greeting:a,desc:o,firstName:i,lastName:s,sentBy:l}=r;return c.jsxs("tr",{children:[c.jsx("td",{"data-cell":"greeting",children:a}),c.jsx("td",{"data-cell":"firstName",children:i}),c.jsx("td",{"data-cell":"lastName",children:s}),c.jsx("td",{"data-cell":"read",children:c.jsx("button",{className:"link-btn",children:c.jsx(_e,{to:`../read-messages/${l}`,state:{msg:o},children:"read"})})}),c.jsx("td",{"data-cell":"contact",children:c.jsx("button",{className:"link-btn",children:c.jsx(_e,{to:`../reply/${l}`,children:"contact"})})}),c.jsx("td",{"data-cell":"delete",children:c.jsx(Se,{method:"post",action:`../delete-message/${n}`,children:c.jsx("button",{type:"submit",className:"link-btn delete",children:"delete"})})})]},n)})})]})]})},yW=se.main`
  min-height: 100vh;
  .article {
    width: 50%;
    margin: 5rem auto;
    background: black;
    border-radius: 10px;
    padding: 1rem 2rem;
  }
  .article p {
    color: white;
    text-transform: capitalize;
    text-align: center;
    margin: 0 auto;
    line-height: 1.3;
    margin-bottom: 1rem;
  }
  .btn-container {
    display: flex;
    justify-content: space-between;
  }
  .back,
  .reply {
    border: none;
    background: black;
    color: red;
    padding: 0.5rem 1rem;
    text-transform: capitalize;
    border-radius: 10px;
    transition: var(--transition);
  }
  .back:hover,
  .reply:hover {
    background: red;
    color: black;
  }
`,wW=()=>{const{groupMemberId:e}=Da(),t=pr(),{msg:r}=t.state;return c.jsxs(yW,{children:[c.jsx("article",{className:"article",children:c.jsx("p",{children:r})}),c.jsxs("div",{className:"btn-container",children:[c.jsx(_e,{to:"../views/messages",className:"back",children:"go back"}),c.jsx(_e,{to:`../reply/${e}`,className:"reply",children:"reply"})]})]})},bS=se.main`
  min-height: 100vh;
  .form {
    background: black;
  }
  .form-input::placeholder {
    color: red;
  }
  .form-label {
    color: red;
    margin: 1rem 0;
  }
  .desc {
    width: 100%;
    height: 10rem;
    margin-bottom: 1rem;
  }
  .desc::placeholder {
    color: red;
  }
  .btn {
    background: red;
  }
  .btn:hover {
    color: black;
  }
  .cancel {
    background: red;
    color: white;
    width: 50%;
    margin: 0 auto;
    padding: 0.5rem 0;
    transition: var(--transition);
    display: block;
  }
  .cancel:hover {
    color: black;
  }
`,bW=async({request:e,params:t})=>{var a,o;const r=await e.formData(),n=Object.fromEntries(r);try{return await re.post(`/investment/user-group/contact/create-message/${t.groupMemberId}`,n),W.success("you have sent a message!"),Ne("../views/messages")}catch(i){return W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}},xW=()=>c.jsxs(bS,{children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:"reply"})}),c.jsx("div",{className:"title-underline"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(ve,{type:"text",name:"greeting",placeholder:"hey man what ya doing!"}),c.jsx("label",{className:"form-label",htmlFor:"desc",children:"description"}),c.jsx("textarea",{className:"desc",name:"desc",id:"desc",placeholder:"write here"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"send msg"})]}),c.jsx(_e,{to:"../views/messages",className:"cancel btn-block",children:"cancel"})]}),SW=se.main`
  min-height: 100vh;
  .error-msg {
    color: red;
    margin: 15rem auto;
  }
  .section-center {
  }
  .center {
    margin: 0 auto;
    margin-top: 5rem;
    padding-left: 0.3rem;
  }

  .article {
    background: black;
    width: 20rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    border-radius: 10px;
    padding: 1rem 1.5rem;
  }
  .article h3 {
    color: red;
    margin-bottom: 1rem;
  }
  .article h3,
  h5 {
    text-align: center;
    margin-bottom: 1rem;
  }
  a {
    font-size: 1rem;
    color: white;
    transition: var(--transition);
  }
  a:hover {
    color: red;
  }
  .btn-text {
    text-align: center;
    margin: 0 auto;
    padding: 1rem 0;
    color: red;
    background: black;
    font-size: 2rem;
    border-radius: 10px;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .btn-text:hover {
    background: red;
    color: black;
  }
  @media (min-width: 1100px) {
    .article-section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .article {
      margin: 1rem;
    }
  }
`,EW=async({params:e})=>{try{const{data:t}=await re.get(`/investment/user-group/view-all-links/${e.groupId}`);return t}catch(t){return console.log(t),t}},kW=()=>{const[e,t]=$.useState(!1),{subgroup:r,headline:n}=Ce(),a=()=>{t(!e)};return c.jsx(SW,{children:c.jsxs("div",{className:"section-center",children:[c.jsx("p",{className:"btn-text",onClick:a,children:e?"headline Links":"subgroup links"}),e?c.jsx(ux,{subgroup:r,handleBtn:a}):c.jsx(dx,{headline:n,handleBtn:a})]})})},jW=se.main`
  min-height: 100vh;
  .article {
    margin: 10rem auto;
    background: grey;
    width: 50vw;
    border-radius: 10px;
  }
  .title {
    padding-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .question {
    text-align: center;
    text-transform: capitalize;
    margin: 0 auto;
    color: black;
    margin-bottom: 3rem;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
  }
  button {
    font-size: 0.2rem;
  }
  .cancel {
    font-size: 0.6rem;
    margin-right: 1rem;
    padding: 0 1.25rem;
    border-radius: 10px;
    background: black;
    color: red;
    text-transform: capitalize;
  }
  .delete {
    font-size: 0.6rem;
    padding: 0.5rem 1.25rem;
    border-radius: 10px;
    background: black;
    color: red;
    text-transform: capitalize;
  }
  @media (min-width: 900px) {
    .article {
      max-width: 600px;
    }
    .cancel {
      font-size: 1rem;
    }
    .delete {
      font-size: 1rem;
    }
  }
`,$W=()=>{const{groupId:e}=Da(),t=Hr(),r=()=>{t("../")},n=async()=>{var a,o;try{await re.delete(`/investment/user-group/delete-group/${e}`),W.success("you have deleted this investment group"),t("/dashboard")}catch(i){return W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}};return c.jsx(jW,{children:c.jsxs("article",{className:"article",children:[c.jsx("h3",{className:"title",children:"delete investment group"}),c.jsx("p",{className:"question",children:"do you want to delete this entire group?"}),c.jsxs("div",{className:"btn-container",children:[c.jsx("button",{type:"button",className:"cancel",onClick:r,children:"cancel"}),c.jsx("button",{type:"button",className:"delete",onClick:n,children:"delete group"})]})]})})},NW=se.main`
  min-height: 100vh;
  .article {
    margin: 10rem auto;
    background: black;
    width: 50vw;
    border-radius: 10px;
  }
  .title {
    padding-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .question {
    text-align: center;
    text-transform: capitalize;
    margin: 0 auto;
    color: white;
    margin-bottom: 3rem;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
  }
  button {
    font-size: 0.2rem;
  }
  .cancel {
    font-size: 0.6rem;
    margin-right: 1rem;
    padding: 0 1.25rem;
    border-radius: 10px;
    background: black;
    color: red;
    text-transform: capitalize;
  }
  .delete {
    font-size: 0.6rem;
    padding: 0.5rem 1.25rem;
    border-radius: 10px;
    background: black;
    color: red;
    text-transform: capitalize;
  }
  @media (min-width: 900px) {
    .article {
      max-width: 600px;
    }
    .cancel {
      font-size: 1rem;
    }
    .delete {
      font-size: 1rem;
    }
  }
`,CW=()=>{const{groupId:e}=Da(),t=Hr(),r=()=>{t("../")},n=async()=>{var a,o;try{await re.delete(`/investment/user-group/leave-group/${e}`),W.success("you have left this group!"),t("/dashboard")}catch(i){return W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}};return c.jsx(NW,{children:c.jsxs("article",{className:"article",children:[c.jsx("h3",{className:"title",children:"leave group"}),c.jsx("p",{className:"question",children:"do you want to leave this investment group?"}),c.jsxs("div",{className:"btn-container",children:[c.jsx("button",{type:"button",className:"cancel",onClick:r,children:"cancel"}),c.jsx("button",{type:"button",className:"delete",onClick:n,children:"leave group"})]})]})})},xS=()=>{const{members:e}=Cr(),{groupId:t}=Da(),n=Co().state==="submitting";return c.jsx(wS,{children:c.jsx("div",{className:"section-center",children:c.jsxs("table",{children:[c.jsx("caption",{children:"Investment Groups Must Have A President"}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsx("th",{children:"firstName"}),c.jsx("th",{children:"lastName"}),c.jsx("th",{children:"state"}),c.jsx("th",{children:"city"}),c.jsx("th",{children:"role"}),c.jsx("th",{children:"president"})]})}),c.jsx("tbody",{children:e.map(a=>{const{_id:o,firstName:i,lastName:s,state:l,city:u,permission:d}=a;return c.jsxs("tr",{children:[c.jsx("td",{"data-cell":"firstName",children:i}),c.jsx("td",{"data-cell":"lastName",children:s}),c.jsx("td",{"data-cell":"state",children:l}),c.jsx("td",{"data-cell":"city",children:u}),c.jsx("td",{"data-cell":"role",children:d.role}),c.jsx("td",{"data-cell":"select president",children:c.jsx(Se,{method:"post",action:`../president/${t}/${o}`,children:c.jsx("button",{type:"submit",className:"btn",disabled:n,children:n?"submitting...":"select president"})})})]},o)})})]})})})};xS.propTypes={members:M.array};const DW=async({request:e,params:t})=>{var a,o;const r=await e.formData(),n=Object.fromEntries(r);try{return await re.post(`/investment/user-group/contact/create-message/${t.groupMemberId}`,n),W.success("you have sent a message!"),Ne("../views/view-all-groups")}catch(i){return W.error((o=(a=i==null?void 0:i.response)==null?void 0:a.data)==null?void 0:o.msg),i}},OW=()=>c.jsxs(bS,{children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:"contact"})}),c.jsx("div",{className:"title-underline"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(ve,{type:"text",name:"greeting",placeholder:"hey man what ya doing!"}),c.jsx("label",{className:"form-label",htmlFor:"desc",children:"description"}),c.jsx("textarea",{className:"desc",name:"desc",id:"desc",placeholder:"write here"}),c.jsx("button",{type:"submit",className:"btn btn-block",children:"send msg"})]}),c.jsx(_e,{to:"../views/view-all-groups",className:"cancel btn-block",children:"cancel"})]}),TW=se.main`
  min-height: 100vh;
`,_W=async()=>{var e,t;try{const{data:r}=await re.get("education/courses");return r}catch(r){return W.error((t=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:t.msg),r}},PW=()=>{const{courses:e}=Ce();return c.jsx(TW,{children:c.jsx(Wn,{context:{courses:e}})})},RW=se.main`
  min-height: 100vh;
  .form {
    display: flex;
    flex-direction: column;
  }
  .forms {
    display: flex;
    flex-direction: column;
  }
  .label {
    margin-bottom: 1rem;
  }
  .form-select {
    width: 100%;
    background: black;
    color: red;
    padding: 0.5rem 0;
  }
  .input {
    background: black;
    color: red;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
  }
  .input::placeholder {
    color: white;
  }
  span {
    color: red;
  }
  .btn-block {
    background: black;
    color: red;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    transition: var(--transition);
  }
  .btn-block:hover {
    background: red;
    color: black;
  }
  .course-submit-message {
    text-align: center;
    margin-bottom: 2rem;
  }
`,MW=()=>{const[e,t]=$.useState(!0),[r,n]=$.useState(!1),[a,o]=$.useState(!1),[i,s]=$.useState(!1),[l,u]=$.useState(Pd.MATH),[d,f]=$.useState(""),[p,v]=$.useState(""),[y,m]=$.useState(""),x=async S=>{var E,j;S.preventDefault();const b=new FormData;b.append("course",l);try{const k=await re.post("/education/check-course",b);k.statusText==="Accepted"&&(t(!1),n(!0),W.info(k.data.msg)),k.statusText==="Created"&&(t(!1),n(!0),W.success(k.data.msg));return}catch(k){W.error((j=(E=k==null?void 0:k.response)==null?void 0:E.data)==null?void 0:j.msg)}},h=async S=>{var E,j;S.preventDefault();const b=new FormData;b.append("section",d),b.append("course",l);try{const k=await re.post("/education/check-section",b);k.statusText==="Accepted"&&(n(!1),o(!0),W.info(k.data.msg)),k.statusText==="Created"&&(n(!1),o(!0),W.success(k.data.msg));return}catch(k){W.error((j=(E=k==null?void 0:k.response)==null?void 0:E.data)==null?void 0:j.msg)}},g=async S=>{var j,k;S.preventDefault();const b=S.target.files[0],E=new FormData;E.append("file",b),E.append("course",l),E.append("section",d);try{const D=await re.post("/education/upload",E,{headers:{"Content-Type":"multipart/form-data"}});D.statusText==="Accepted"&&(o(!1),t(!0),W.info(D.data.msg)),D.statusText==="Created"&&(v(D.data.file.src),W.success(D.data.file.msg),o(!1),s(!0));return}catch(D){W.error((k=(j=D==null?void 0:D.response)==null?void 0:j.data)==null?void 0:k.msg)}},w=async S=>{var E,j;S.preventDefault();const b={course:l,section:d,title:y,src:p};try{const{data:{msg:k}}=await re.post("/education/create-course",b);s(!1),t(!0),W.success(k)}catch(k){W.error((j=(E=k==null?void 0:k.response)==null?void 0:E.data)==null?void 0:j.msg)}};return c.jsxs(RW,{children:[c.jsx("div",{className:"title",children:c.jsxs("h1",{children:["file ",c.jsx("span",{children:"upload"})]})}),c.jsx("div",{className:"title-underline"}),c.jsx("div",{className:"section-center",children:c.jsxs("form",{method:"POST",className:"form",children:[e?c.jsx(Ct,{labelText:"courses",name:"course",defaultValue:Pd.MATH,value:l,onChange:S=>u(S.target.value),list:Object.values(Pd)}):null,r?c.jsxs("div",{className:"forms",children:[c.jsx("label",{htmlFor:"section",className:"label",children:"select what section to upload in"}),c.jsx("input",{type:"number",value:d,onChange:S=>f(S.target.value),name:"section",id:"section",placeholder:"1",className:"input"})]}):null,a?c.jsxs("div",{className:"forms",children:[c.jsx("label",{htmlFor:"section",className:"label",children:"what is the title of the video?"}),c.jsx("input",{type:"text",name:"title",className:"input",placeholder:"video 1",value:y,onChange:S=>m(S.target.value)})]}):null,a?c.jsx("input",{type:"file",name:"src",className:"input",onChange:g}):null,c.jsxs("div",{className:"btn-container",children:[e?c.jsx("button",{type:"button",onClick:x,className:"btn-block",children:"prepare course"}):null,r?c.jsx("button",{type:"button",onClick:h,className:"btn-block",children:"prepare section"}):null,i?c.jsxs("div",{children:[c.jsx("h3",{className:"course-submit-message",children:"press submit to finish uploading the course"}),c.jsx("button",{type:"button",onClick:w,className:"btn-block",children:"submit"})]}):null]})]})})]})},AW=se.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem 0;

  .video-container {
    width: 100%;
    height: 20rem;
  }
  .video-file {
    width: 100%;
    height: 100%;
  }
  .section {
    min-height: 100vh;
  }
  .list-container {
    background: black;
  }
  .course-list {
    visibility: hidden;
  }
  .list {
    margin-bottom: 1rem;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: linear;
  }
  .show-list {
    visibility: visible;
  }
  .list:hover {
    background: white;
  }
  svg {
    font-size: 2rem;
    color: red;
    border-radius: 5px;
    border-color: transparent;
    transition: linear;
  }
  svg:hover {
    color: black;
  }
  .icon {
    background: transparent;
    border: transparent;
    padding-right: 1rem;
  }
  .title {
    color: red;
    padding-left: 1rem;
    text-transform: capitalize;
  }

  .btn-block {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-block,
  svg {
    font-size: 1.2rem;
  }
  @media (min-width: 1700px) {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 0 2rem;
    .video-container {
      width: 100%;
      height: 50%;
    }
    .video-file {
      width: 100%;
      height: 100%;
    }
  }
`,LW=async({params:e})=>{var t,r;try{const{data:n}=await re.get(`/education/course/${e.courseId}`);return n}catch(n){return W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}},IW=()=>{const{course:e}=Ce(),[t,r]=$.useState(""),n=e.map(({newSection:a})=>a);return c.jsxs(AW,{children:[c.jsx("div",{className:"video",children:c.jsx(wx,{video:t})}),c.jsx("div",{className:"section",children:c.jsx(vx,{section:n,videoFunc:r})})]})},zW=se.main`
  min-height: 100vh;

  .section-center {
    width: 80vw;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .article {
    margin-top: 2rem;
    background: black;
    border: 5px solid red;
    width: 300px;
    height: 15rem;
    border-radius: 10px;
    margin-bottom: 10rem;
    text-align: center;
  }
  .title {
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
  .title h2 {
    color: white;
  }
  .section-length {
    color: red;
    margin-bottom: 3rem;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: white;
    transition: var(--transition);
  }
  a:hover {
    color: red;
  }
  @media (min-width: 800px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 1rem;
    }
  }
  @media (min-width: 1170px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem 1rem;
    }
  }
`,FW=()=>{const{courses:e}=Cr();return c.jsx(zW,{children:c.jsx("div",{className:"section-center",children:e.map(t=>{const{_id:r,course:n,section:a}=t;return c.jsxs("article",{className:"article",children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:n})}),c.jsx("p",{className:"section-length",children:`${a.length} sections`}),c.jsx(_e,{to:`course/${r}`,children:`go to ${n}`})]},r)})})})},UW=se.main`
  min-height: 100vh;

  .section-center {
    width: 80vw;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .article {
    margin-top: 2rem;
    background: black;
    border: 5px solid red;
    width: 300px;
    height: 15rem;
    border-radius: 10px;
    margin-bottom: 10rem;
    text-align: center;
  }
  .title {
    margin-top: 1rem;
    margin-bottom: 5rem;
  }
  .title h2 {
    color: white;
  }
  .section-length {
    color: red;
    margin-bottom: 3rem;
  }
  a {
    text-decoration: none;
    text-transform: capitalize;
    color: white;
    transition: var(--transition);
  }
  a:hover {
    color: red;
  }
  @media (min-width: 800px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem 1rem;
    }
  }
  @media (min-width: 1170px) {
    .section-center {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem 1rem;
    }
  }
`,BW=async()=>{var e,t;try{const{data:r}=await re.get("/education/my-course");return r}catch(r){return W.error((t=(e=r==null?void 0:r.response)==null?void 0:e.data)==null?void 0:t.msg),r}},HW=()=>{const{course:e}=Ce();return c.jsx(UW,{children:c.jsx("div",{className:"section-center",children:e.map(t=>{const{_id:r,course:n,section:a}=t;return c.jsxs("article",{className:"article",children:[c.jsx("div",{className:"title",children:c.jsx("h2",{children:n})}),c.jsx("p",{className:"section-length",children:`${a.length} sections`}),c.jsx(_e,{to:`../edit/${r}`,children:`edit ${n} `})]},r)})})})},WW=se.main`
  min-height: 100vh;
  .small-container {
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
  }
  .section-center {
    margin: 0 auto;
    margin-top: 5rem;
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem 0;
  }
  .title p {
    color: red;
  }
  .list {
    color: red;
  }
  .form {
    width: 60vw;
    display: flex;
    flex-direction: column;
    gap: 1rem 0;
  }

  @media (min-width: 800px) {
    .nav {
      background: black;
      height: 5rem;
    }
    .large-container {
      display: flex;
      justify-content: space-around;
    }
    .btn {
      margin-top: 0.5rem;
      padding: 1.5rem 2rem;
      box-shadow: none;
      transition: var(--transition);
    }
    .btn:hover {
      background: white;
      color: red;
    }
  }
  @media (min-width: 1000px) {
    .section-center {
      width: 60vw;
      flex-direction: row;
      gap: 0rem 5rem;
    }
    .form {
      width: 40vw;
    }
  }
`,VW=async({params:e})=>{var t,r;try{const{data:n}=await re.get(`/education/my-course/${e.courseId}`);return n}catch(n){return W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg),n}},GW=()=>{const[e,t]=$.useState(!1),[r,n]=$.useState(!1),[a,o]=$.useState(!1),[i,s]=$.useState(!1),{course:l}=Ce();return c.jsxs(WW,{children:[c.jsx("div",{className:"nav",children:c.jsx(Sx,{section:e,setSection:t,removeSection:r,setRemoveSection:n,file:a,setFile:o,removeFile:i,setRemoveFile:s})}),c.jsxs("div",{className:"section-center",children:[e?c.jsx(H5,{}):null,r?c.jsx(W5,{}):null,a?c.jsx(V5,{}):null,i?c.jsx(G5,{}):null,e||r||a||i?c.jsx("div",{className:"data-true",children:c.jsx(op,{course:l})}):c.jsx("div",{className:"data-false",children:c.jsx(op,{course:l})})]})]})},YW=se.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;

  /*
 =======
 IMAGES
========
*/
  .images {
    background: black;
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  .img-container {
    position: relative;
    width: 20rem;
    height: 20rem;
    margin: 0 auto;
  }
  .img {
    position: relative;
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .img-container::before {
    content: "";
    width: 100%;
    height: 100%;
    background: red;
    position: absolute;
    border-radius: 50%;
    top: -0.25rem;
    right: -0.8rem;
  }
  .btn {
    padding: 0.5rem 1.25rem;
  }

  input::file-selector-button {
    color: red;
    background: black;
    margin-right: 1rem;
  }

  /*
 =======
 Profile
========
*/
  .profile {
    background: black;
  }
  .form {
    min-height: 100vh;
    background: red;
  }

  .form-input {
    background: black;
    color: white;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .form-input::placeholder {
    color: red;
    text-transform: capitalize;
    text-align: center;
  }
  .form-select {
    width: 100%;
    padding: 0.5rem 0;
    background: black;
    color: white;
  }
  .btn {
    background: black;
    border: none;
    color: white;
    padding: 0.5rem 0;
    transition: var(--transition);
  }
  .btn:hover {
    background: black;
    color: red;
  }

  /*
==================
INVESTMENT PROFILE
==================
*/
  .error-msg {
    margin: 10rem auto;
    max-width: 400px;
  }
  .investment-profile {
    min-height: 100vh;
    background: black;
  }
  .investment-article {
    min-height: 100vh;
  }
  .investment-article,
  .title {
    margin-top: 2rem;
    margin-bottom: 5rem;
  }
  h2 {
    color: red;
    text-align: center;
    margin-bottom: 2rem;
  }
  .lists,
  li {
    font-size: 2rem;
    text-align: center;
    color: red;
  }
  .investment-btn-container {
    margin: 0 auto;
    margin-top: -50rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .prev,
  .next {
    background: none;
    border: none;
    font-size: 2rem;
    color: red;
  }
  /*
 =========
 EDUCATION
==========
*/
  .education {
    min-height: 100vh;
    background: black;
  }
  /*
 ===========
 MEDIA QUERY
============
*/
  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr;
  }
`,KW=async()=>{try{const{data:e}=await re.get("/users/user-profile");return e}catch(e){return console.log(e),e}},qW=async({request:e})=>{var n,a;const t=await e.formData(),r=Object.fromEntries(t);try{return await re.patch("/users/update-profile",r),W.success("you have updated this user!"),window.location.reload()}catch(o){return W.error((a=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:a.msg),o}},XW=()=>{const{user:e,investmentGroup:t}=Ce();return c.jsxs(YW,{children:[c.jsx("div",{className:"images",children:c.jsx(hx,{pic:e})}),c.jsx("div",{className:"profile",children:c.jsx(fx,{user:e})}),c.jsx("div",{className:"investment-profile",children:c.jsx(px,{group:t,user:e})}),c.jsx("div",{className:"education",children:c.jsx(A5,{})})]})},QW=se.main`
  min-height: 100vh;
  background: black;
  .article {
    background: black;
    padding: 0.5rem 1rem;
    height: 50vh;
  }
  .question {
    margin: 5rem auto;

    text-align: center;
    line-height: 1.3;
    color: white;
    text-transform: capitalize;
    margin-bottom: 5rem;
  }
  .list-container {
    width: 80vw;
    max-width: 800px;
    margin: 0 auto;
  }
  ol li {
    list-style-type: upper-roman;
    color: red;
    text-align: center;
  }
  li {
    margin-left: 2rem;
    margin-bottom: 5rem;
  }
  .btn-container {
    display: flex;
    justify-content: space-around;
  }
  .cancel,
  .delete {
    padding: 0.5rem 1rem;
    background: red;
    color: white;
    border-color: white;
    transition: var(--transition);
  }
  .cancel:hover,
  .delete:hover {
    background: black;
    color: red;
  }
  @media (min-width: 1000px) {
    .article {
      height: 100vh;
    }
  }
`,JW=()=>{const e=Hr(),t=()=>{e("../")},r=async()=>{var n,a;try{await re.delete("/users/leave-org"),W.success("you have left this organization!"),e("/")}catch(o){return W.error((a=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:a.msg),o}};return c.jsx(QW,{children:c.jsxs("article",{className:"article",children:[c.jsx("p",{className:"question",children:"sorry to see you go... but if you must i will explain a few things before you leave!"}),c.jsx("div",{className:"list-container",children:c.jsxs("ol",{className:"lists",children:[c.jsx("li",{children:"you have to leave all investment groups first"}),c.jsx("li",{children:"you have access to the github repository for your all the degrees you contributed to. make sure you get them before you leave!"}),c.jsx("li",{children:"you wont have access to any of your investment groups on this site, but whatever arrangements you made outside this network is totally fine!"}),c.jsx("li",{children:"you can still hang out with us!"}),c.jsx("li",{children:"you can come back anytime!"})]})}),c.jsxs("div",{className:"btn-container",children:[c.jsx("button",{type:"button",className:"cancel",onClick:t,children:"cancel"}),c.jsx("button",{type:"button",className:"delete",onClick:r,children:"leave group"})]})]})})},ZW=async({request:e})=>{const t=Object.fromEntries([...new URL(e.url).searchParams.entries()]);try{const{data:r}=await re.get("/war/browse-groups",{params:t});return{data:r,searchValues:{...t}}}catch(r){return r}},eV=()=>{const{searchValues:e,data:t}=Ce(),{user:r}=Cr();return c.jsx(c.Fragment,{children:c.jsx(Wn,{context:{data:t,searchValues:e,user:r}})})},tV=se.main`
  /* display: grid;
  place-items: center; */
  min-height: 110vh;
  background: black;
  .warning {
    background: red;
    margin-bottom: 3rem;
  }

  .warning h2 {
    text-align: center;
    color: black;
    letter-spacing: 0.4rem;
    margin-bottom: 0.8rem;
  }
  ul li {
    text-decoration: none;
    color: black;
    text-transform: capitalize;
  }
  li {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
  header {
    color: red;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 10rem;
  }
  .form {
    margin: 0 auto;
    margin-top: -5rem;
    display: flex;
    flex-direction: column;
    max-width: 60vw;
    min-width: 250px;
    border: 1px solid red;
  }
  label {
    text-align: center;
    color: red;
    margin-bottom: 1rem;
  }
  .form-input {
    background: red;
    margin-bottom: 1rem;
  }
  .form-input::placeholder {
    color: black;
  }
  .form-select {
    padding: 0.8rem 0;
    width: 100%;
    background: black;
    color: red;
  }
  .text-area {
    height: 5rem;
    margin-bottom: 1rem;
  }
  .btn-block {
    background: red;
    border: transparent;
    padding: 1.1rem 0;
    transition: var(--transition);
  }
  .btn-block:hover {
    background: black;
    color: red;
  }
  @media (min-width: 800px) {
    header {
      font-size: 3rem;
    }
    .warning {
      text-align: center;
    }
  }
`,rV=async({request:e})=>{var n,a;const t=await e.formData(),r=Object.fromEntries(t);try{return await re.post("/war/create-group",r),W.success("WarBand Has Been Created!"),Ne("../my-groups")}catch(o){return W.error((a=(n=o==null?void 0:o.response)==null?void 0:n.data)==null?void 0:a.msg),null}},nV=()=>c.jsxs(tV,{children:[c.jsxs("div",{className:"warning",children:[c.jsx("h2",{children:"warning"}),c.jsxs("ul",{children:[c.jsxs("li",{children:["1. create a discord account and create a ",c.jsx("span",{children:"game"})," server"]}),c.jsx("li",{children:"2. go to voice chat and copy the link and paste it in the discord link form"})]})]}),c.jsx("header",{children:"create war group"}),c.jsxs(Se,{method:"post",className:"form",children:[c.jsx(Ct,{name:"games",labelText:"games",defaultValue:np.DEAD_BY_DAYLIGHT,list:Object.values(np)}),c.jsx(ve,{type:"text",name:"groupName",placeholder:"GroupName"}),c.jsx(ve,{type:"number",name:"players",placeholder:"Number Of Players"}),c.jsx(Ct,{name:"goals",labelText:"goals",defaultValue:ap.NONE,list:Object.values(ap)}),c.jsx(ve,{type:"url",name:"url",placeholder:"Discord Link"}),c.jsx("label",{htmlFor:"desc",children:"description"}),c.jsx("textarea",{name:"desc",id:"desc",className:"text-area",placeholder:"Write Here"}),c.jsx("button",{type:"submit",className:"btn-block",children:"create group"})]})]}),aV=se.main`
  min-height: 100vh;
  .total-groups {
    margin-bottom: 3rem;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }
  .hide-article {
    display: none;
  }
  .article {
    margin: 0 auto;
    background: black;
    margin-bottom: 3rem;
    border-radius: 10px;
  }
  .games {
    color: red;
    text-align: center;
    padding-top: 0.25rem;
    margin-bottom: 0.8rem;
  }
  .groupName {
    text-align: center;
    color: yellow;
    margin-bottom: 0.8rem;
  }
  .players {
    text-align: center;
    color: green;
    margin-bottom: 0.8rem;
  }
  .goals {
    text-align: center;
    color: blue;
    margin-bottom: 0.5rem;
  }
  .discord {
    text-align: center;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: red;
    cursor: pointer;
  }
  .desc {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 2rem;
    width: 15em;
  }
  .desc p {
    word-wrap: break-word;
    color: white;
    line-height: 1;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
  }
  .btn-container {
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
    background: transparent;
  }
  .btn {
    color: black;
    border: transparent;
    background: red;
    cursor: pointer;
    transition: var(--transition);
  }
  .btn:hover {
    color: red;
    background: none;
    box-shadow: none;
  }
  @media (min-width: 700px) {
    .section-center {
      width: 60vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
  @media (min-width: 1100px) {
    .section-center {
      width: 70vw;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 2rem;
    }
  }
`,oV=()=>{const{data:{groups:e,totalGroups:t}}=Cr();return c.jsxs(aV,{children:[c.jsxs("h4",{className:"total-groups",children:[t," groups available"]}),c.jsx(T5,{}),c.jsx("div",{className:"section-center",children:e.map(r=>{const{_id:n,groupName:a,players:o,desc:i,games:s,joinedBy:l,goals:u,url:d}=r;let f=1;return c.jsxs("article",{className:l.length+f>=o?"hide-article":"article",children:[c.jsx("h3",{className:"games",children:s}),c.jsx("h4",{className:"groupName",children:a}),c.jsxs("h5",{className:"players",children:[l.length+f," / ",o]}),c.jsx("h5",{className:"goals",children:u}),c.jsx("div",{className:"discord",children:c.jsx("a",{href:d,target:"_blank",children:d})}),c.jsx("div",{className:"btn-container",children:c.jsx(Se,{method:"post",action:`../join-group/${n}`,children:c.jsx("button",{type:"submit",className:"btn join-btn",children:"join group"})})}),c.jsx("div",{className:"desc",children:c.jsx("p",{children:i||"none"})})]},n)})}),t<=9?null:c.jsx(N5,{})]})},SS=se.main`
  min-height: 100vh;
  .title h2 {
    color: red;
  }
  .title span {
    color: black;
  }
  .title-underline {
    color: red;
    margin-bottom: 3rem;
  }
  .section-center {
    width: 90vw;
    margin: 0 auto;
  }
  .article {
    background: black;
    border-radius: 10px;
    padding: 0.7rem 0;
    margin-bottom: 1.5rem;
  }
  .games {
    text-align: center;
    color: red;
    margin-bottom: 0.5rem;
  }
  .groupName {
    color: purple;
    text-align: center;
    margin-bottom: 0.5rem;
  }
  .links {
    display: block;
    text-decoration: none;
    color: white;
    text-align: center;
    margin-bottom: 0.8rem;
  }
  .text {
    text-align: center;
    text-transform: capitalize;
    color: white;
    margin-bottom: 0.9rem;
  }
  .btn-block {
    background: black;
    color: red;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    transition: var(--transition);
  }
  .btn-block:hover {
    color: black;
    background: red;
  }
  .member-form {
    text-align: center;
    margin: 0 auto;
  }
  .member-btn {
    font-size: 1.2rem;
    background: transparent;
    border: transparent;
    color: red;
    text-transform: capitalize;
  }

  @media (min-width: 700px) {
    .section-center {
      width: 60vw;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
  @media (min-width: 1100px) {
    .section-center {
      width: 70vw;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: 2rem;
    }
  }
`,iV=async({request:e})=>{const t=Object.fromEntries([...new URL(e.url).searchParams.entries()]);try{const{data:r}=await re.get("/war/my-group",{params:t});return{data:r,searchParams:{...t}}}catch(r){return r}},sV=()=>{const{data:{people:e,currentPage:t,numOfPages:r}}=Ce(),[n]=e,{docs:a}=n;return c.jsxs(SS,{children:[c.jsx("div",{className:"title",children:c.jsxs("h2",{children:["my ",c.jsx("span",{children:"groups"})]})}),c.jsx("div",{className:"title-underline"}),c.jsx("div",{className:"section-center",children:a.map(o=>{const{_id:i,games:s,members:l,groupName:u}=o;return c.jsxs("article",{className:"article",children:[c.jsx("h3",{className:"games",children:s}),c.jsx("h4",{className:"groupName",children:u}),c.jsx("p",{className:"text",children:"delete members"}),c.jsx(ox,{members:l,groupId:i}),c.jsx(Se,{method:"post",action:`../delete-group/${i}`,children:c.jsx("button",{type:"submit",className:"btn-block",children:"delete group"})})]},i)})}),r>1&&c.jsx(Fh,{currentPage:t,numOfPages:r})]})},lV=async({request:e})=>{const t=Object.fromEntries([...new URL(e.url).searchParams.entries()]);try{const{data:r}=await re.get("/war/joined-group",{params:t});return{data:r}}catch(r){return r}},cV=()=>{const{user:e}=Cr(),{data:{joinedGroups:t,currentPage:r,numOfPages:n}}=Ce(),[a]=t,{docs:o}=a;return c.jsxs(SS,{children:[c.jsx("div",{className:"title",children:c.jsxs("h2",{children:["joined ",c.jsx("span",{children:"groups"})]})}),c.jsx("div",{className:"title-underline"}),c.jsx("div",{className:"section-center",children:o.map(i=>{const{_id:s,games:l,groupName:u}=i;return c.jsxs("article",{className:"article",children:[c.jsx("h3",{className:"games",children:l}),c.jsx("h4",{className:"groupName",children:u}),c.jsx("p",{className:"text",children:"delete members"}),c.jsx(ix,{groupId:s,user:e})]},s)})}),n>1&&c.jsx(Fh,{currentPage:r,numOfPages:n})]})},uV=()=>c.jsx("div",{children:"LeaveGroup"}),dV=async({params:e})=>{var t,r;try{await re.patch(`/war/join-group/${e.id}`),W.success("You have joined this group!")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("../joined-groups")},fV=async({params:e})=>{var t,r;try{await re.delete(`/war/delete-group/${e.id}`),W.success("Group Has Been Disbanded")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("/dashboard/war/my-groups")},pV=async({params:e})=>{var t,r;try{await re.patch(`/war/delete-member/${e.id}/${e.user}`),W.success("Member has been deleted")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("/dashboard/war/my-groups")},hV=async({params:e})=>{var t,r;try{await re.patch(`/war/delete-self/${e.id}/${e.user}`),W.success("You have left the group!")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("/dashboard/war/my-groups")},mV=async({params:e})=>{var t,r;try{await re.patch(`/investment/join-group/${e.id}/${e.userId}`),W.success("You Have Joined A Investment Group!")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("../../../dashboard")},vV=async({params:e})=>{var t,r;try{await re.patch(`/investment/user-group/process-member/${e.memberId}/${e.subgroupId}`),W.success("You have assigned this member to this group!")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("../")},gV=async({params:e})=>{var t,r;try{await re.patch(`/investment/user-group/create-treasurer/${e.groupId}/${e.memberId}`),W.success("you have created a treasurer")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg),console.log(n)}return Ne("../create/promotion")},yV=async({params:e})=>{var t,r;try{await re.patch(`/investment/user-group/create-president/${e.groupId}/${e.memberId}`),W.success("you have created a president")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg),console.log(n)}return Ne("../create/promotion")},wV=async({params:e})=>{var t,r;try{await re.patch(`/investment/user-group/create-vicepresident/${e.groupId}/${e.memberId}`),W.success("you have created a vice president")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg),console.log(n)}return Ne("../create/promotion")},bV=async({params:e})=>{var t,r;try{await re.patch(`/investment/user-group/create-associate/${e.groupId}/${e.memberId}`),W.success("you have created a associate")}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg),console.log(n)}return Ne("../create/promotion")},xV=async({params:e})=>{var t,r;try{await re.delete(`/investment/user-group/delete-headlines/${e.id}`),W.success("you have deleted a headline"),window.location.reload()}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("../delete/delete-headline")},SV=async({params:e})=>{var t,r;try{await re.delete(`/investment/user-group/delete-date/${e.id}`),W.success("you have deleted a date"),window.location.reload()}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("../delete/delete-schedule")},EV=async({params:e})=>{var t,r;try{await re.delete(`/investment/user-group/delete-subgroup/${e.id}`),W.success("you have deleted a subGroup"),window.location.reload()}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("../delete/delete-subgroup")},kV=async({params:e})=>{var t,r;try{await re.delete(`/investment/user-group/contact/delete-message/${e.messageId}`),W.success("you have deleted a message"),window.location.reload()}catch(n){W.error((r=(t=n==null?void 0:n.response)==null?void 0:t.data)==null?void 0:r.msg)}return Ne("../views/messages")},je=()=>c.jsx("div",{children:c.jsx("p",{children:"Loading..."})}),jV=Jk([{path:"/",element:c.jsx(K5,{}),errorElement:c.jsx(d$,{}),children:[{index:!0,element:c.jsx(X5,{})},{path:"register",element:c.jsx(Z5,{}),action:J5},{path:"login",element:c.jsx(rC,{}),action:tC},{path:"/dashboard",element:c.jsx(QN,{}),loader:XN,HydrateFallback:je,children:[{index:!0,element:c.jsx(lC,{}),action:sC},{path:"view-headline",element:c.jsx(dC,{}),loader:uC,HydrateFallback:je},{path:"create-schedule",element:c.jsx(pC,{}),action:fC},{path:"view-schedule",element:c.jsx(dH,{}),loader:uH,HydrateFallback:je},{path:"war/",element:c.jsx(eV,{}),loader:ZW,HydrateFallback:je,children:[{path:"create-group",element:c.jsx(nV,{}),action:rV},{path:"browse-groups",element:c.jsx(oV,{})},{path:"my-groups",element:c.jsx(sV,{}),loader:iV,HydrateFallback:je},{path:"delete-member/:id/:user",action:pV},{path:"delete-self/:id/:user",action:hV},{path:"joined-groups",element:c.jsx(cV,{}),loader:lV,HydrateFallback:je},{path:"delete-group/:id",action:fV},{path:"join-group/:id",action:dV},{path:"leave-group",element:c.jsx(uV,{})}]},{path:"investment/",element:c.jsx(pH,{}),loader:fH,HydrateFallback:je,children:[{path:"create-groups",element:c.jsx(wH,{}),action:yH},{path:"create-member/:groupId",element:c.jsx($H,{}),action:jH},{path:"browse-all-groups",element:c.jsx(vH,{})},{path:"group-info/:id",element:c.jsx(EH,{}),loader:SH,HydrateFallback:je},{path:"join-group/:id/:userId",action:mV},{path:"select-group",element:c.jsx(CH,{}),loader:NH,HydrateFallback:je,children:[{index:!0,element:c.jsx(OH,{})},{path:"user-group/:id",element:c.jsx(PH,{}),action:_H}]},{path:"user-group/:groupId",element:c.jsx(LH,{}),loader:AH,HydrateFallback:je,children:[{path:"emergency",element:c.jsx(xS,{})},{path:"create/create-headline",element:c.jsx(zH,{}),action:IH},{path:"create/create-schedule",element:c.jsx(UH,{}),action:FH},{path:"create/sub-groups",element:c.jsx(HH,{}),children:[{path:"create-subgroup",element:c.jsx(GH,{}),action:VH},{path:"view-subgroups",element:c.jsx(XH,{}),loader:qH,HydrateFallback:je},{path:"select-members/:groupId/:subgroupId",element:c.jsx(ZH,{}),loader:JH,HydrateFallback:je},{path:"process-member/:memberId/:subgroupId",action:vV}]},{path:"create/link",element:c.jsx(KH,{}),loader:YH,HydrateFallback:je},{path:"create/promotion",element:c.jsx(tW,{}),loader:eW,HydrateFallback:je},{path:"president/:groupId/:memberId",action:yV},{path:"vicepresident/:groupId/:memberId",action:wV},{path:"treasurer/:groupId/:memberId",action:gV},{path:"associate/:groupId/:memberId",action:bV},{path:"delete/delete-headline",element:c.jsx(aW,{}),loader:nW,HydrateFallback:je},{path:"delete-headlines/:id",action:xV},{path:"delete/delete-schedule",element:c.jsx(sW,{}),loader:iW,HydrateFallback:je},{path:"delete-date/:id",action:SV},{path:"delete/delete-subgroups",element:c.jsx(cW,{}),loader:lW,HydrateFallback:je},{path:"delete-subgroup/:id",action:EV},{path:"views/headline-news",element:c.jsx(dW,{}),loader:uW,HydrateFallback:je},{path:"views/view-schedule",element:c.jsx(pW,{}),loader:fW,HydrateFallback:je},{path:"views/view-all-groups",element:c.jsx(mW,{}),loader:hW,HydrateFallback:je},{path:"views/messages",element:c.jsx(gW,{}),loader:vW,HydrateFallback:je},{path:"views/view-all-links",element:c.jsx(kW,{}),loader:EW,HydrateFallback:je},{path:"read-messages/:groupMemberId",element:c.jsx(wW,{})},{path:"reply/:groupMemberId",element:c.jsx(xW,{}),action:bW},{path:"delete-message/:messageId",action:kV},{path:"contact/:groupMemberId",element:c.jsx(OW,{}),action:DW},{path:"delete/entire-group",element:c.jsx($W,{})},{path:"delete/leave-group",element:c.jsx(CW,{})}]}]},{path:"education",element:c.jsx(PW,{}),loader:_W,HydrateFallback:je,children:[{index:!0,element:c.jsx(FW,{})},{path:"course/:courseId",element:c.jsx(IW,{}),loader:LW,HydrateFallback:je},{path:"upload",element:c.jsx(MW,{})},{path:"update",element:c.jsx(HW,{}),loader:BW,HydrateFallback:je},{path:"edit/:courseId",element:c.jsx(GW,{}),loader:VW,HydrateFallback:je}]},{path:"user/user-profile",element:c.jsx(XW,{}),loader:KW,HydrateFallback:je,action:qW},{path:"user/leave-org",element:c.jsx(JW,{})},{path:"version-info",element:c.jsx(aC,{})}]}]}]);function $V(){return c.jsx(sj,{router:jV})}Gd.createRoot(document.getElementById("root")).render(c.jsxs(C.StrictMode,{children:[c.jsx($V,{}),c.jsx(qN,{position:"top-center"})]}));
