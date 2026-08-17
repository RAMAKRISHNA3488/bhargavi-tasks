function Hx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Gx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var mg={exports:{}},Ql={},gg={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),Wx=Symbol.for("react.portal"),jx=Symbol.for("react.fragment"),Xx=Symbol.for("react.strict_mode"),qx=Symbol.for("react.profiler"),Yx=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Kx=Symbol.for("react.forward_ref"),Zx=Symbol.for("react.suspense"),Qx=Symbol.for("react.memo"),Jx=Symbol.for("react.lazy"),Kh=Symbol.iterator;function e_(t){return t===null||typeof t!="object"?null:(t=Kh&&t[Kh]||t["@@iterator"],typeof t=="function"?t:null)}var vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},xg=Object.assign,_g={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||vg}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function yg(){}yg.prototype=Ks.prototype;function yf(t,e,n){this.props=t,this.context=e,this.refs=_g,this.updater=n||vg}var Sf=yf.prototype=new yg;Sf.constructor=yf;xg(Sf,Ks.prototype);Sf.isPureReactComponent=!0;var Zh=Array.isArray,Sg=Object.prototype.hasOwnProperty,Mf={current:null},Mg={key:!0,ref:!0,__self:!0,__source:!0};function Eg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Sg.call(e,i)&&!Mg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ja,type:t,key:s,ref:a,props:r,_owner:Mf.current}}function t_(t,e){return{$$typeof:Ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ja}function n_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qh=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?n_(""+t.key):e.toString(36)}function Jo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ja:case Wx:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ec(a,0):i,Zh(r)?(n="",t!=null&&(n=t.replace(Qh,"$&/")+"/"),Jo(r,e,n,"",function(c){return c})):r!=null&&(Ef(r)&&(r=t_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Qh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Zh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ec(s,o);a+=Jo(s,e,n,l,r)}else if(l=e_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ec(s,o++),a+=Jo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ho(t,e,n){if(t==null)return t;var i=[],r=0;return Jo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function i_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},el={transition:null},r_={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:el,ReactCurrentOwner:Mf};function wg(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:ho,forEach:function(t,e,n){ho(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ho(t,function(){e++}),e},toArray:function(t){return ho(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Ks;ze.Fragment=jx;ze.Profiler=qx;ze.PureComponent=yf;ze.StrictMode=Xx;ze.Suspense=Zx;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_;ze.act=wg;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=xg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Mf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Sg.call(e,l)&&!Mg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ja,type:t.type,key:r,ref:s,props:i,_owner:a}};ze.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yx,_context:t},t.Consumer=t};ze.createElement=Eg;ze.createFactory=function(t){var e=Eg.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:Kx,render:t}};ze.isValidElement=Ef;ze.lazy=function(t){return{$$typeof:Jx,_payload:{_status:-1,_result:t},_init:i_}};ze.memo=function(t,e){return{$$typeof:Qx,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};ze.unstable_act=wg;ze.useCallback=function(t,e){return sn.current.useCallback(t,e)};ze.useContext=function(t){return sn.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};ze.useEffect=function(t,e){return sn.current.useEffect(t,e)};ze.useId=function(){return sn.current.useId()};ze.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return sn.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};ze.useRef=function(t){return sn.current.useRef(t)};ze.useState=function(t){return sn.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return sn.current.useTransition()};ze.version="18.3.1";gg.exports=ze;var Z=gg.exports;const wf=Gx(Z),s_=Hx({__proto__:null,default:wf},[Z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a_=Z,o_=Symbol.for("react.element"),l_=Symbol.for("react.fragment"),c_=Object.prototype.hasOwnProperty,u_=a_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d_={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)c_.call(e,i)&&!d_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o_,type:t,key:s,ref:a,props:r,_owner:u_.current}}Ql.Fragment=l_;Ql.jsx=Tg;Ql.jsxs=Tg;mg.exports=Ql;var u=mg.exports,Pu={},Ag={exports:{}},wn={},Cg={exports:{}},bg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,j){var ee=U.length;U.push(j);e:for(;0<ee;){var ie=ee-1>>>1,le=U[ie];if(0<r(le,j))U[ie]=j,U[ee]=le,ee=ie;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var j=U[0],ee=U.pop();if(ee!==j){U[0]=ee;e:for(var ie=0,le=U.length,Ve=le>>>1;ie<Ve;){var et=2*(ie+1)-1,Ge=U[et],$=et+1,oe=U[$];if(0>r(Ge,ee))$<le&&0>r(oe,Ge)?(U[ie]=oe,U[$]=ee,ie=$):(U[ie]=Ge,U[et]=ee,ie=et);else if($<le&&0>r(oe,ee))U[ie]=oe,U[$]=ee,ie=$;else break e}}return j}function r(U,j){var ee=U.sortIndex-j.sortIndex;return ee!==0?ee:U.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],h=1,p=null,f=3,m=!1,v=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(U){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=U)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function S(U){if(E=!1,M(U),!v)if(n(l)!==null)v=!0,K(C);else{var j=n(c);j!==null&&H(S,j.startTime-U)}}function C(U,j){v=!1,E&&(E=!1,d(y),y=-1),m=!0;var ee=f;try{for(M(j),p=n(l);p!==null&&(!(p.expirationTime>j)||U&&!N());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,f=p.priorityLevel;var le=ie(p.expirationTime<=j);j=t.unstable_now(),typeof le=="function"?p.callback=le:p===n(l)&&i(l),M(j)}else i(l);p=n(l)}if(p!==null)var Ve=!0;else{var et=n(c);et!==null&&H(S,et.startTime-j),Ve=!1}return Ve}finally{p=null,f=ee,m=!1}}var T=!1,A=null,y=-1,b=5,P=-1;function N(){return!(t.unstable_now()-P<b)}function O(){if(A!==null){var U=t.unstable_now();P=U;var j=!0;try{j=A(!0,U)}finally{j?Y():(T=!1,A=null)}}else T=!1}var Y;if(typeof x=="function")Y=function(){x(O)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,k=te.port2;te.port1.onmessage=O,Y=function(){k.postMessage(null)}}else Y=function(){g(O,0)};function K(U){A=U,T||(T=!0,Y())}function H(U,j){y=g(function(){U(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,K(C))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var ee=f;f=j;try{return U()}finally{f=ee}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,j){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ee=f;f=U;try{return j()}finally{f=ee}},t.unstable_scheduleCallback=function(U,j,ee){var ie=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ie+ee:ie):ee=ie,U){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=ee+le,U={id:h++,callback:j,priorityLevel:U,startTime:ee,expirationTime:le,sortIndex:-1},ee>ie?(U.sortIndex=ee,e(c,U),n(l)===null&&U===n(c)&&(E?(d(y),y=-1):E=!0,H(S,ee-ie))):(U.sortIndex=le,e(l,U),v||m||(v=!0,K(C))),U},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(U){var j=f;return function(){var ee=f;f=j;try{return U.apply(this,arguments)}finally{f=ee}}}})(bg);Cg.exports=bg;var f_=Cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_=Z,En=f_;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Rg=new Set,La={};function Kr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(La[t]=e,t=0;t<e.length;t++)Rg.add(e[t])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nu=Object.prototype.hasOwnProperty,p_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jh={},ep={};function m_(t){return Nu.call(ep,t)?!0:Nu.call(Jh,t)?!1:p_.test(t)?ep[t]=!0:(Jh[t]=!0,!1)}function g_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v_(t,e,n,i){if(e===null||typeof e>"u"||g_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var Tf=/[\-:]([a-z])/g;function Af(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Tf,Af);jt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Tf,Af);jt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Tf,Af);jt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cf(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v_(e,n,r,i)&&(n=null),i||r===null?m_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Oi=h_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),gs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),Lu=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Ng=Symbol.for("react.context"),Rf=Symbol.for("react.forward_ref"),Du=Symbol.for("react.suspense"),Iu=Symbol.for("react.suspense_list"),Pf=Symbol.for("react.memo"),Ki=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),tp=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,wc;function va(t){if(wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+t}var Tc=!1;function Ac(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?va(t):""}function x_(t){switch(t.tag){case 5:return va(t.type);case 16:return va("Lazy");case 13:return va("Suspense");case 19:return va("SuspenseList");case 0:case 2:case 15:return t=Ac(t.type,!1),t;case 11:return t=Ac(t.type.render,!1),t;case 1:return t=Ac(t.type,!0),t;default:return""}}function Uu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case gs:return"Portal";case Lu:return"Profiler";case bf:return"StrictMode";case Du:return"Suspense";case Iu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ng:return(t.displayName||"Context")+".Consumer";case Pg:return(t._context.displayName||"Context")+".Provider";case Rf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pf:return e=t.displayName||null,e!==null?e:Uu(t.type)||"Memo";case Ki:e=t._payload,t=t._init;try{return Uu(t(e))}catch{}}return null}function __(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uu(e);case 8:return e===bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Dg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y_(t){var e=Dg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mo(t){t._valueTracker||(t._valueTracker=y_(t))}function Ig(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Dg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function np(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Ug(t,e){e=e.checked,e!=null&&Cf(t,"checked",e,!1)}function Ou(t,e){Ug(t,e);var n=gr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&ku(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ip(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ku(t,e,n){(e!=="number"||xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(xa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function Fg(t,e){var n=gr(e.value),i=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Og(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Og(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},S_=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(t){S_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ea[e]=Ea[t]})});function Bg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ea.hasOwnProperty(t)&&Ea[t]?(""+e).trim():e+"px"}function zg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Bg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M_=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vu(t,e){if(e){if(M_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,Rs=null,Ps=null;function ap(t){if(t=no(t)){if(typeof Wu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=ic(e),Wu(t.stateNode,t.type,e))}}function Vg(t){Rs?Ps?Ps.push(t):Ps=[t]:Rs=t}function Hg(){if(Rs){var t=Rs,e=Ps;if(Ps=Rs=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function Gg(t,e){return t(e)}function Wg(){}var Cc=!1;function jg(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return Gg(t,e,n)}finally{Cc=!1,(Rs!==null||Ps!==null)&&(Wg(),Hg())}}function Ia(t,e){var n=t.stateNode;if(n===null)return null;var i=ic(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var ju=!1;if(Ni)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){ju=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{ju=!1}function E_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var wa=!1,_l=null,yl=!1,Xu=null,w_={onError:function(t){wa=!0,_l=t}};function T_(t,e,n,i,r,s,a,o,l){wa=!1,_l=null,E_.apply(w_,arguments)}function A_(t,e,n,i,r,s,a,o,l){if(T_.apply(this,arguments),wa){if(wa){var c=_l;wa=!1,_l=null}else throw Error(re(198));yl||(yl=!0,Xu=c)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Xg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function op(t){if(Zr(t)!==t)throw Error(re(188))}function C_(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return op(r),t;if(s===i)return op(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function qg(t){return t=C_(t),t!==null?Yg(t):null}function Yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yg(t);if(e!==null)return e;t=t.sibling}return null}var $g=En.unstable_scheduleCallback,lp=En.unstable_cancelCallback,b_=En.unstable_shouldYield,R_=En.unstable_requestPaint,At=En.unstable_now,P_=En.unstable_getCurrentPriorityLevel,Lf=En.unstable_ImmediatePriority,Kg=En.unstable_UserBlockingPriority,Sl=En.unstable_NormalPriority,N_=En.unstable_LowPriority,Zg=En.unstable_IdlePriority,Jl=null,li=null;function L_(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:U_,D_=Math.log,I_=Math.LN2;function U_(t){return t>>>=0,t===0?32:31-(D_(t)/I_|0)|0}var vo=64,xo=4194304;function _a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=_a(o):(s&=a,s!==0&&(i=_a(s)))}else a=n&~r,a!==0?i=_a(a):s!==0&&(i=_a(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function F_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Xn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=F_(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qg(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function k_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Df(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function Jg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var e0,If,t0,n0,i0,Yu=!1,_o=[],ar=null,or=null,lr=null,Ua=new Map,Fa=new Map,Qi=[],B_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cp(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":Ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fa.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=no(e),e!==null&&If(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function z_(t,e,n,i,r){switch(e){case"focusin":return ar=ra(ar,t,e,n,i,r),!0;case"dragenter":return or=ra(or,t,e,n,i,r),!0;case"mouseover":return lr=ra(lr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ua.set(s,ra(Ua.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Fa.set(s,ra(Fa.get(s)||null,t,e,n,i,r)),!0}return!1}function r0(t){var e=Ur(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Xg(n),e!==null){t.blockedOn=e,i0(t.priority,function(){t0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=no(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function up(t,e,n){tl(t)&&n.delete(e)}function V_(){Yu=!1,ar!==null&&tl(ar)&&(ar=null),or!==null&&tl(or)&&(or=null),lr!==null&&tl(lr)&&(lr=null),Ua.forEach(up),Fa.forEach(up)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,V_)))}function Oa(t){function e(r){return sa(r,t)}if(0<_o.length){sa(_o[0],t);for(var n=1;n<_o.length;n++){var i=_o[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ar!==null&&sa(ar,t),or!==null&&sa(or,t),lr!==null&&sa(lr,t),Ua.forEach(e),Fa.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)r0(n),n.blockedOn===null&&Qi.shift()}var Ns=Oi.ReactCurrentBatchConfig,El=!0;function H_(t,e,n,i){var r=it,s=Ns.transition;Ns.transition=null;try{it=1,Uf(t,e,n,i)}finally{it=r,Ns.transition=s}}function G_(t,e,n,i){var r=it,s=Ns.transition;Ns.transition=null;try{it=4,Uf(t,e,n,i)}finally{it=r,Ns.transition=s}}function Uf(t,e,n,i){if(El){var r=$u(t,e,n,i);if(r===null)kc(t,e,i,wl,n),cp(t,i);else if(z_(r,t,e,n,i))i.stopPropagation();else if(cp(t,i),e&4&&-1<B_.indexOf(t)){for(;r!==null;){var s=no(r);if(s!==null&&e0(s),s=$u(t,e,n,i),s===null&&kc(t,e,i,wl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else kc(t,e,i,null,n)}}var wl=null;function $u(t,e,n,i){if(wl=null,t=Nf(i),t=Ur(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Xg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return wl=t,null}function s0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P_()){case Lf:return 1;case Kg:return 4;case Sl:case N_:return 16;case Zg:return 536870912;default:return 16}default:return 16}}var nr=null,Ff=null,nl=null;function a0(){if(nl)return nl;var t,e=Ff,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return nl=r.slice(t,1<i?1-i:void 0)}function il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function dp(){return!1}function Tn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?yo:dp,this.isPropagationStopped=dp,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=Tn(Zs),to=gt({},Zs,{view:0,detail:0}),W_=Tn(to),Rc,Pc,aa,ec=gt({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Rc=t.screenX-aa.screenX,Pc=t.screenY-aa.screenY):Pc=Rc=0,aa=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),fp=Tn(ec),j_=gt({},ec,{dataTransfer:0}),X_=Tn(j_),q_=gt({},to,{relatedTarget:0}),Nc=Tn(q_),Y_=gt({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),$_=Tn(Y_),K_=gt({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z_=Tn(K_),Q_=gt({},Zs,{data:0}),hp=Tn(Q_),J_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ny(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ty[t])?!!e[t]:!1}function kf(){return ny}var iy=gt({},to,{key:function(t){if(t.key){var e=J_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ey[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ry=Tn(iy),sy=gt({},ec,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Tn(sy),ay=gt({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),oy=Tn(ay),ly=gt({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),cy=Tn(ly),uy=gt({},ec,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Tn(uy),fy=[9,13,27,32],Bf=Ni&&"CompositionEvent"in window,Ta=null;Ni&&"documentMode"in document&&(Ta=document.documentMode);var hy=Ni&&"TextEvent"in window&&!Ta,o0=Ni&&(!Bf||Ta&&8<Ta&&11>=Ta),mp=" ",gp=!1;function l0(t,e){switch(t){case"keyup":return fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function c0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xs=!1;function py(t,e){switch(t){case"compositionend":return c0(e);case"keypress":return e.which!==32?null:(gp=!0,mp);case"textInput":return t=e.data,t===mp&&gp?null:t;default:return null}}function my(t,e){if(xs)return t==="compositionend"||!Bf&&l0(t,e)?(t=a0(),nl=Ff=nr=null,xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return o0&&e.locale!=="ko"?null:e.data;default:return null}}var gy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gy[t.type]:e==="textarea"}function u0(t,e,n,i){Vg(i),e=Tl(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Aa=null,ka=null;function vy(t){S0(t,0)}function tc(t){var e=Ss(t);if(Ig(e))return t}function xy(t,e){if(t==="change")return e}var d0=!1;if(Ni){var Lc;if(Ni){var Dc="oninput"in document;if(!Dc){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),Dc=typeof xp.oninput=="function"}Lc=Dc}else Lc=!1;d0=Lc&&(!document.documentMode||9<document.documentMode)}function _p(){Aa&&(Aa.detachEvent("onpropertychange",f0),ka=Aa=null)}function f0(t){if(t.propertyName==="value"&&tc(ka)){var e=[];u0(e,ka,t,Nf(t)),jg(vy,e)}}function _y(t,e,n){t==="focusin"?(_p(),Aa=e,ka=n,Aa.attachEvent("onpropertychange",f0)):t==="focusout"&&_p()}function yy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tc(ka)}function Sy(t,e){if(t==="click")return tc(e)}function My(t,e){if(t==="input"||t==="change")return tc(e)}function Ey(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Ey;function Ba(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Nu.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function yp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sp(t,e){var n=yp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yp(n)}}function h0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?h0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function p0(){for(var t=window,e=xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xl(t.document)}return e}function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wy(t){var e=p0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&h0(n.ownerDocument.documentElement,n)){if(i!==null&&zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sp(n,s);var a=Sp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ty=Ni&&"documentMode"in document&&11>=document.documentMode,_s=null,Ku=null,Ca=null,Zu=!1;function Mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zu||_s==null||_s!==xl(i)||(i=_s,"selectionStart"in i&&zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ca&&Ba(Ca,i)||(Ca=i,i=Tl(Ku,"onSelect"),0<i.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_s)))}function So(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ys={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},Ic={},m0={};Ni&&(m0=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function nc(t){if(Ic[t])return Ic[t];if(!ys[t])return t;var e=ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in m0)return Ic[t]=e[n];return t}var g0=nc("animationend"),v0=nc("animationiteration"),x0=nc("animationstart"),_0=nc("transitionend"),y0=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(t,e){y0.set(t,e),Kr(e,[t])}for(var Uc=0;Uc<Ep.length;Uc++){var Fc=Ep[Uc],Ay=Fc.toLowerCase(),Cy=Fc[0].toUpperCase()+Fc.slice(1);yr(Ay,"on"+Cy)}yr(g0,"onAnimationEnd");yr(v0,"onAnimationIteration");yr(x0,"onAnimationStart");yr("dblclick","onDoubleClick");yr("focusin","onFocus");yr("focusout","onBlur");yr(_0,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A_(i,e,void 0,t),t.currentTarget=null}function S0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;wp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;wp(r,o,c),s=l}}}if(yl)throw t=Xu,yl=!1,Xu=null,t}function dt(t,e){var n=e[nd];n===void 0&&(n=e[nd]=new Set);var i=t+"__bubble";n.has(i)||(M0(e,t,2,!1),n.add(i))}function Oc(t,e,n){var i=0;e&&(i|=4),M0(n,t,i,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[Mo]){t[Mo]=!0,Rg.forEach(function(n){n!=="selectionchange"&&(by.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,Oc("selectionchange",!1,e))}}function M0(t,e,n,i){switch(s0(e)){case 1:var r=H_;break;case 4:r=G_;break;default:r=Uf}n=r.bind(null,e,n,t),r=void 0,!ju||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function kc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Ur(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}jg(function(){var c=s,h=Nf(n),p=[];e:{var f=y0.get(t);if(f!==void 0){var m=Of,v=t;switch(t){case"keypress":if(il(n)===0)break e;case"keydown":case"keyup":m=ry;break;case"focusin":v="focus",m=Nc;break;case"focusout":v="blur",m=Nc;break;case"beforeblur":case"afterblur":m=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=X_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=oy;break;case g0:case v0:case x0:m=$_;break;case _0:m=cy;break;case"scroll":m=W_;break;case"wheel":m=dy;break;case"copy":case"cut":case"paste":m=Z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pp}var E=(e&4)!==0,g=!E&&t==="scroll",d=E?f!==null?f+"Capture":null:f;E=[];for(var x=c,M;x!==null;){M=x;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,d!==null&&(S=Ia(x,d),S!=null&&E.push(Va(x,S,M)))),g)break;x=x.return}0<E.length&&(f=new m(f,v,null,n,h),p.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Gu&&(v=n.relatedTarget||n.fromElement)&&(Ur(v)||v[Li]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Ur(v):null,v!==null&&(g=Zr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(E=fp,S="onMouseLeave",d="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(E=pp,S="onPointerLeave",d="onPointerEnter",x="pointer"),g=m==null?f:Ss(m),M=v==null?f:Ss(v),f=new E(S,x+"leave",m,n,h),f.target=g,f.relatedTarget=M,S=null,Ur(h)===c&&(E=new E(d,x+"enter",v,n,h),E.target=M,E.relatedTarget=g,S=E),g=S,m&&v)t:{for(E=m,d=v,x=0,M=E;M;M=ts(M))x++;for(M=0,S=d;S;S=ts(S))M++;for(;0<x-M;)E=ts(E),x--;for(;0<M-x;)d=ts(d),M--;for(;x--;){if(E===d||d!==null&&E===d.alternate)break t;E=ts(E),d=ts(d)}E=null}else E=null;m!==null&&Tp(p,f,m,E,!1),v!==null&&g!==null&&Tp(p,g,v,E,!0)}}e:{if(f=c?Ss(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=xy;else if(vp(f))if(d0)C=My;else{C=yy;var T=_y}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Sy);if(C&&(C=C(t,c))){u0(p,C,n,h);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&ku(f,"number",f.value)}switch(T=c?Ss(c):window,t){case"focusin":(vp(T)||T.contentEditable==="true")&&(_s=T,Ku=c,Ca=null);break;case"focusout":Ca=Ku=_s=null;break;case"mousedown":Zu=!0;break;case"contextmenu":case"mouseup":case"dragend":Zu=!1,Mp(p,n,h);break;case"selectionchange":if(Ty)break;case"keydown":case"keyup":Mp(p,n,h)}var A;if(Bf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else xs?l0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(o0&&n.locale!=="ko"&&(xs||y!=="onCompositionStart"?y==="onCompositionEnd"&&xs&&(A=a0()):(nr=h,Ff="value"in nr?nr.value:nr.textContent,xs=!0)),T=Tl(c,y),0<T.length&&(y=new hp(y,t,null,n,h),p.push({event:y,listeners:T}),A?y.data=A:(A=c0(n),A!==null&&(y.data=A)))),(A=hy?py(t,n):my(t,n))&&(c=Tl(c,"onBeforeInput"),0<c.length&&(h=new hp("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:c}),h.data=A))}S0(p,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ia(t,n),s!=null&&i.unshift(Va(t,s,r)),s=Ia(t,e),s!=null&&i.push(Va(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ia(n,s),l!=null&&a.unshift(Va(n,l,o))):r||(l=Ia(n,s),l!=null&&a.push(Va(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Ry=/\r\n?/g,Py=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(Ry,`
`).replace(Py,"")}function Eo(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(re(425))}function Al(){}var Qu=null,Ju=null;function ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var td=typeof setTimeout=="function"?setTimeout:void 0,Ny=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,Ly=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(t){return Cp.resolve(null).then(t).catch(Dy)}:td;function Dy(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Oa(e)}function cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),si="__reactFiber$"+Qs,Ha="__reactProps$"+Qs,Li="__reactContainer$"+Qs,nd="__reactEvents$"+Qs,Iy="__reactListeners$"+Qs,Uy="__reactHandles$"+Qs;function Ur(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bp(t);t!==null;){if(n=t[si])return n;t=bp(t)}return e}t=n,n=t.parentNode}return null}function no(t){return t=t[si]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function ic(t){return t[Ha]||null}var id=[],Ms=-1;function Sr(t){return{current:t}}function ft(t){0>Ms||(t.current=id[Ms],id[Ms]=null,Ms--)}function ut(t,e){Ms++,id[Ms]=t.current,t.current=e}var vr={},Jt=Sr(vr),fn=Sr(!1),Hr=vr;function Bs(t,e){var n=t.type.contextTypes;if(!n)return vr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Cl(){ft(fn),ft(Jt)}function Rp(t,e,n){if(Jt.current!==vr)throw Error(re(168));ut(Jt,e),ut(fn,n)}function E0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,__(t)||"Unknown",r));return gt({},n,i)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vr,Hr=Jt.current,ut(Jt,t),ut(fn,fn.current),!0}function Pp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=E0(t,e,Hr),i.__reactInternalMemoizedMergedChildContext=t,ft(fn),ft(Jt),ut(Jt,t)):ft(fn),ut(fn,n)}var Mi=null,rc=!1,zc=!1;function w0(t){Mi===null?Mi=[t]:Mi.push(t)}function Fy(t){rc=!0,w0(t)}function Mr(){if(!zc&&Mi!==null){zc=!0;var t=0,e=it;try{var n=Mi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,rc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),$g(Lf,Mr),r}finally{it=e,zc=!1}}return null}var Es=[],ws=0,Rl=null,Pl=0,Rn=[],Pn=0,Gr=null,wi=1,Ti="";function Pr(t,e){Es[ws++]=Pl,Es[ws++]=Rl,Rl=t,Pl=e}function T0(t,e,n){Rn[Pn++]=wi,Rn[Pn++]=Ti,Rn[Pn++]=Gr,Gr=t;var i=wi;t=Ti;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,wi=1<<32-Xn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function Vf(t){t.return!==null&&(Pr(t,1),T0(t,1,0))}function Hf(t){for(;t===Rl;)Rl=Es[--ws],Es[ws]=null,Pl=Es[--ws],Es[ws]=null;for(;t===Gr;)Gr=Rn[--Pn],Rn[Pn]=null,Ti=Rn[--Pn],Rn[Pn]=null,wi=Rn[--Pn],Rn[Pn]=null}var Sn=null,yn=null,ht=!1,Hn=null;function A0(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sd(t){if(ht){var e=yn;if(e){var n=e;if(!Np(t,e)){if(rd(t))throw Error(re(418));e=cr(n.nextSibling);var i=Sn;e&&Np(t,e)?A0(i,n):(t.flags=t.flags&-4097|2,ht=!1,Sn=t)}}else{if(rd(t))throw Error(re(418));t.flags=t.flags&-4097|2,ht=!1,Sn=t}}}function Lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function wo(t){if(t!==Sn)return!1;if(!ht)return Lp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ed(t.type,t.memoizedProps)),e&&(e=yn)){if(rd(t))throw C0(),Error(re(418));for(;e;)A0(t,e),e=cr(e.nextSibling)}if(Lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?cr(t.stateNode.nextSibling):null;return!0}function C0(){for(var t=yn;t;)t=cr(t.nextSibling)}function zs(){yn=Sn=null,ht=!1}function Gf(t){Hn===null?Hn=[t]:Hn.push(t)}var Oy=Oi.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function To(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dp(t){var e=t._init;return e(t._payload)}function b0(t){function e(d,x){if(t){var M=d.deletions;M===null?(d.deletions=[x],d.flags|=16):M.push(x)}}function n(d,x){if(!t)return null;for(;x!==null;)e(d,x),x=x.sibling;return null}function i(d,x){for(d=new Map;x!==null;)x.key!==null?d.set(x.key,x):d.set(x.index,x),x=x.sibling;return d}function r(d,x){return d=hr(d,x),d.index=0,d.sibling=null,d}function s(d,x,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<x?(d.flags|=2,x):M):(d.flags|=2,x)):(d.flags|=1048576,x)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,x,M,S){return x===null||x.tag!==6?(x=qc(M,d.mode,S),x.return=d,x):(x=r(x,M),x.return=d,x)}function l(d,x,M,S){var C=M.type;return C===vs?h(d,x,M.props.children,S,M.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ki&&Dp(C)===x.type)?(S=r(x,M.props),S.ref=oa(d,x,M),S.return=d,S):(S=ul(M.type,M.key,M.props,null,d.mode,S),S.ref=oa(d,x,M),S.return=d,S)}function c(d,x,M,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==M.containerInfo||x.stateNode.implementation!==M.implementation?(x=Yc(M,d.mode,S),x.return=d,x):(x=r(x,M.children||[]),x.return=d,x)}function h(d,x,M,S,C){return x===null||x.tag!==7?(x=Vr(M,d.mode,S,C),x.return=d,x):(x=r(x,M),x.return=d,x)}function p(d,x,M){if(typeof x=="string"&&x!==""||typeof x=="number")return x=qc(""+x,d.mode,M),x.return=d,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case po:return M=ul(x.type,x.key,x.props,null,d.mode,M),M.ref=oa(d,null,x),M.return=d,M;case gs:return x=Yc(x,d.mode,M),x.return=d,x;case Ki:var S=x._init;return p(d,S(x._payload),M)}if(xa(x)||na(x))return x=Vr(x,d.mode,M,null),x.return=d,x;To(d,x)}return null}function f(d,x,M,S){var C=x!==null?x.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return C!==null?null:o(d,x,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case po:return M.key===C?l(d,x,M,S):null;case gs:return M.key===C?c(d,x,M,S):null;case Ki:return C=M._init,f(d,x,C(M._payload),S)}if(xa(M)||na(M))return C!==null?null:h(d,x,M,S,null);To(d,M)}return null}function m(d,x,M,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(M)||null,o(x,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case po:return d=d.get(S.key===null?M:S.key)||null,l(x,d,S,C);case gs:return d=d.get(S.key===null?M:S.key)||null,c(x,d,S,C);case Ki:var T=S._init;return m(d,x,M,T(S._payload),C)}if(xa(S)||na(S))return d=d.get(M)||null,h(x,d,S,C,null);To(x,S)}return null}function v(d,x,M,S){for(var C=null,T=null,A=x,y=x=0,b=null;A!==null&&y<M.length;y++){A.index>y?(b=A,A=null):b=A.sibling;var P=f(d,A,M[y],S);if(P===null){A===null&&(A=b);break}t&&A&&P.alternate===null&&e(d,A),x=s(P,x,y),T===null?C=P:T.sibling=P,T=P,A=b}if(y===M.length)return n(d,A),ht&&Pr(d,y),C;if(A===null){for(;y<M.length;y++)A=p(d,M[y],S),A!==null&&(x=s(A,x,y),T===null?C=A:T.sibling=A,T=A);return ht&&Pr(d,y),C}for(A=i(d,A);y<M.length;y++)b=m(A,d,y,M[y],S),b!==null&&(t&&b.alternate!==null&&A.delete(b.key===null?y:b.key),x=s(b,x,y),T===null?C=b:T.sibling=b,T=b);return t&&A.forEach(function(N){return e(d,N)}),ht&&Pr(d,y),C}function E(d,x,M,S){var C=na(M);if(typeof C!="function")throw Error(re(150));if(M=C.call(M),M==null)throw Error(re(151));for(var T=C=null,A=x,y=x=0,b=null,P=M.next();A!==null&&!P.done;y++,P=M.next()){A.index>y?(b=A,A=null):b=A.sibling;var N=f(d,A,P.value,S);if(N===null){A===null&&(A=b);break}t&&A&&N.alternate===null&&e(d,A),x=s(N,x,y),T===null?C=N:T.sibling=N,T=N,A=b}if(P.done)return n(d,A),ht&&Pr(d,y),C;if(A===null){for(;!P.done;y++,P=M.next())P=p(d,P.value,S),P!==null&&(x=s(P,x,y),T===null?C=P:T.sibling=P,T=P);return ht&&Pr(d,y),C}for(A=i(d,A);!P.done;y++,P=M.next())P=m(A,d,y,P.value,S),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?y:P.key),x=s(P,x,y),T===null?C=P:T.sibling=P,T=P);return t&&A.forEach(function(O){return e(d,O)}),ht&&Pr(d,y),C}function g(d,x,M,S){if(typeof M=="object"&&M!==null&&M.type===vs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case po:e:{for(var C=M.key,T=x;T!==null;){if(T.key===C){if(C=M.type,C===vs){if(T.tag===7){n(d,T.sibling),x=r(T,M.props.children),x.return=d,d=x;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ki&&Dp(C)===T.type){n(d,T.sibling),x=r(T,M.props),x.ref=oa(d,T,M),x.return=d,d=x;break e}n(d,T);break}else e(d,T);T=T.sibling}M.type===vs?(x=Vr(M.props.children,d.mode,S,M.key),x.return=d,d=x):(S=ul(M.type,M.key,M.props,null,d.mode,S),S.ref=oa(d,x,M),S.return=d,d=S)}return a(d);case gs:e:{for(T=M.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===M.containerInfo&&x.stateNode.implementation===M.implementation){n(d,x.sibling),x=r(x,M.children||[]),x.return=d,d=x;break e}else{n(d,x);break}else e(d,x);x=x.sibling}x=Yc(M,d.mode,S),x.return=d,d=x}return a(d);case Ki:return T=M._init,g(d,x,T(M._payload),S)}if(xa(M))return v(d,x,M,S);if(na(M))return E(d,x,M,S);To(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,x!==null&&x.tag===6?(n(d,x.sibling),x=r(x,M),x.return=d,d=x):(n(d,x),x=qc(M,d.mode,S),x.return=d,d=x),a(d)):n(d,x)}return g}var Vs=b0(!0),R0=b0(!1),Nl=Sr(null),Ll=null,Ts=null,Wf=null;function jf(){Wf=Ts=Ll=null}function Xf(t){var e=Nl.current;ft(Nl),t._currentValue=e}function ad(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){Ll=t,Wf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Wf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Ll===null)throw Error(re(308));Ts=t,Ll.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Fr=null;function qf(t){Fr===null?Fr=[t]:Fr.push(t)}function P0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,qf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Di(t,i)}function Di(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zi=!1;function Yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function N0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Di(t,n)}return r=i.interleaved,r===null?(e.next=e,qf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Di(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}function Ip(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Dl(t,e,n,i){var r=t.updateQueue;Zi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;a=0,h=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,E=o;switch(f=e,m=n,E.tag){case 1:if(v=E.payload,typeof v=="function"){p=v.call(m,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=E.payload,f=typeof v=="function"?v.call(m,p,f):v,f==null)break e;p=gt({},p,f);break e;case 2:Zi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=m,l=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);jr|=a,t.lanes=a,t.memoizedState=p}}function Up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var io={},ci=Sr(io),Ga=Sr(io),Wa=Sr(io);function Or(t){if(t===io)throw Error(re(174));return t}function $f(t,e){switch(ut(Wa,e),ut(Ga,t),ut(ci,io),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zu(e,t)}ft(ci),ut(ci,e)}function Hs(){ft(ci),ft(Ga),ft(Wa)}function L0(t){Or(Wa.current);var e=Or(ci.current),n=zu(e,t.type);e!==n&&(ut(Ga,t),ut(ci,n))}function Kf(t){Ga.current===t&&(ft(ci),ft(Ga))}var pt=Sr(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function Zf(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var sl=Oi.ReactCurrentDispatcher,Hc=Oi.ReactCurrentBatchConfig,Wr=0,mt=null,Dt=null,Bt=null,Ul=!1,ba=!1,ja=0,ky=0;function qt(){throw Error(re(321))}function Qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Jf(t,e,n,i,r,s){if(Wr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?Hy:Gy,t=n(i,r),ba){s=0;do{if(ba=!1,ja=0,25<=s)throw Error(re(301));s+=1,Bt=Dt=null,e.updateQueue=null,sl.current=Wy,t=n(i,r)}while(ba)}if(sl.current=Fl,e=Dt!==null&&Dt.next!==null,Wr=0,Bt=Dt=mt=null,Ul=!1,e)throw Error(re(300));return t}function eh(){var t=ja!==0;return ja=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?mt.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Un(){if(Dt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Bt===null?mt.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=t;else{if(t===null)throw Error(re(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?mt.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Xa(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Un(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var h=c.lane;if((Wr&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=p,a=i):l=l.next=p,mt.lanes|=h,jr|=h}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Yn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,jr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wc(t){var e=Un(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Yn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function D0(){}function I0(t,e){var n=mt,i=Un(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,th(O0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,qa(9,F0.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(re(349));Wr&30||U0(n,e,r)}return r}function U0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function F0(t,e,n,i){e.value=n,e.getSnapshot=i,k0(e)&&B0(t)}function O0(t,e,n){return n(function(){k0(e)&&B0(t)})}function k0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function B0(t){var e=Di(t,1);e!==null&&qn(e,t,1,-1)}function Fp(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=Vy.bind(null,mt,t),[e.memoizedState,t]}function qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function z0(){return Un().memoizedState}function al(t,e,n,i){var r=ii();mt.flags|=t,r.memoizedState=qa(1|e,n,void 0,i===void 0?null:i)}function sc(t,e,n,i){var r=Un();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Qf(i,a.deps)){r.memoizedState=qa(e,n,s,i);return}}mt.flags|=t,r.memoizedState=qa(1|e,n,s,i)}function Op(t,e){return al(8390656,8,t,e)}function th(t,e){return sc(2048,8,t,e)}function V0(t,e){return sc(4,2,t,e)}function H0(t,e){return sc(4,4,t,e)}function G0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function W0(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,G0.bind(null,e,t),n)}function nh(){}function j0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function X0(t,e){var n=Un();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function q0(t,e,n){return Wr&21?(Yn(n,e)||(n=Qg(),mt.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function By(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Hc.transition;Hc.transition={};try{t(!1),e()}finally{it=n,Hc.transition=i}}function Y0(){return Un().memoizedState}function zy(t,e,n){var i=fr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$0(t))K0(e,n);else if(n=P0(t,e,n,i),n!==null){var r=nn();qn(n,t,i,r),Z0(n,e,i)}}function Vy(t,e,n){var i=fr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($0(t))K0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Yn(o,a)){var l=e.interleaved;l===null?(r.next=r,qf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=P0(t,e,r,i),n!==null&&(r=nn(),qn(n,t,i,r),Z0(n,e,i))}}function $0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function K0(t,e){ba=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Z0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Df(t,n)}}var Fl={readContext:In,useCallback:qt,useContext:qt,useEffect:qt,useImperativeHandle:qt,useInsertionEffect:qt,useLayoutEffect:qt,useMemo:qt,useReducer:qt,useRef:qt,useState:qt,useDebugValue:qt,useDeferredValue:qt,useTransition:qt,useMutableSource:qt,useSyncExternalStore:qt,useId:qt,unstable_isNewReconciler:!1},Hy={readContext:In,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,G0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=zy.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:Fp,useDebugValue:nh,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=Fp(!1),e=t[0];return t=By.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ii();if(ht){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),zt===null)throw Error(re(349));Wr&30||U0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Op(O0.bind(null,i,s,t),[t]),i.flags|=2048,qa(9,F0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=zt.identifierPrefix;if(ht){var n=Ti,i=wi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ja++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ky++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gy={readContext:In,useCallback:j0,useContext:In,useEffect:th,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:H0,useMemo:X0,useReducer:Gc,useRef:z0,useState:function(){return Gc(Xa)},useDebugValue:nh,useDeferredValue:function(t){var e=Un();return q0(e,Dt.memoizedState,t)},useTransition:function(){var t=Gc(Xa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:I0,useId:Y0,unstable_isNewReconciler:!1},Wy={readContext:In,useCallback:j0,useContext:In,useEffect:th,useImperativeHandle:W0,useInsertionEffect:V0,useLayoutEffect:H0,useMemo:X0,useReducer:Wc,useRef:z0,useState:function(){return Wc(Xa)},useDebugValue:nh,useDeferredValue:function(t){var e=Un();return Dt===null?e.memoizedState=t:q0(e,Dt.memoizedState,t)},useTransition:function(){var t=Wc(Xa)[0],e=Un().memoizedState;return[t,e]},useMutableSource:D0,useSyncExternalStore:I0,useId:Y0,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ac={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=fr(t),s=Ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(qn(e,t,r,i),rl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=fr(t),s=Ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ur(t,s,r),e!==null&&(qn(e,t,r,i),rl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=fr(t),r=Ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=ur(t,r,i),e!==null&&(qn(e,t,i,n),rl(e,t,i))}};function kp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,i)||!Ba(r,s):!0}function Q0(t,e,n){var i=!1,r=vr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=hn(e)?Hr:Jt.current,i=e.contextTypes,s=(i=i!=null)?Bs(t,r):vr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ac,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ac.enqueueReplaceState(e,e.state,null)}function ld(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=hn(e)?Hr:Jt.current,r.context=Bs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(od(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ac.enqueueReplaceState(r,r.state,null),Dl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=x_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jy=typeof WeakMap=="function"?WeakMap:Map;function J0(t,e,n){n=Ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,_d=i),cd(t,e)},n}function ev(t,e,n){n=Ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){cd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){cd(t,e),typeof i!="function"&&(dr===null?dr=new Set([this]):dr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function zp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sS.bind(null,t,e,n),e.then(t,t))}function Vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ci(-1,1),e.tag=2,ur(n,e,1))),n.lanes|=1),t)}var Xy=Oi.ReactCurrentOwner,dn=!1;function tn(t,e,n,i){e.child=t===null?R0(e,null,n,i):Vs(e,t.child,n,i)}function Gp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=Jf(t,e,n,i,s,r),n=eh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ht&&n&&Vf(e),e.flags|=1,tn(t,e,i,r),e.child)}function Wp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!uh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tv(t,e,s,i,r)):(t=ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(a,i)&&t.ref===e.ref)return Ii(t,e,r)}return e.flags|=1,t=hr(s,i),t.ref=e.ref,t.return=e,e.child=t}function tv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ba(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Ii(t,e,r)}return ud(t,e,n,i,r)}function nv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Cs,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Cs,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Cs,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Cs,_n),_n|=i;return tn(t,e,r,n),e.child}function iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ud(t,e,n,i,r){var s=hn(n)?Hr:Jt.current;return s=Bs(e,s),Ls(e,r),n=Jf(t,e,n,i,s,r),i=eh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ii(t,e,r)):(ht&&i&&Vf(e),e.flags|=1,tn(t,e,n,r),e.child)}function jp(t,e,n,i,r){if(hn(n)){var s=!0;bl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)ol(t,e),Q0(e,n,i),ld(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=hn(n)?Hr:Jt.current,c=Bs(e,c));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Bp(e,a,i,c),Zi=!1;var f=e.memoizedState;a.state=f,Dl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||fn.current||Zi?(typeof h=="function"&&(od(e,n,h,i),l=e.memoizedState),(o=Zi||kp(e,n,o,i,f,l,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,N0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:zn(e.type,o),a.props=c,p=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=hn(n)?Hr:Jt.current,l=Bs(e,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==l)&&Bp(e,a,i,l),Zi=!1,f=e.memoizedState,a.state=f,Dl(e,i,a,r);var v=e.memoizedState;o!==p||f!==v||fn.current||Zi?(typeof m=="function"&&(od(e,n,m,i),v=e.memoizedState),(c=Zi||kp(e,n,c,i,f,v,l)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return dd(t,e,n,i,s,r)}function dd(t,e,n,i,r,s){iv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Pp(e,n,!1),Ii(t,e,s);i=e.stateNode,Xy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,o,s)):tn(t,e,o,s),e.memoizedState=i.state,r&&Pp(e,n,!0),e.child}function rv(t){var e=t.stateNode;e.pendingContext?Rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rp(t,e.context,!1),$f(t,e.containerInfo)}function Xp(t,e,n,i,r){return zs(),Gf(r),e.flags|=256,tn(t,e,n,i),e.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function sv(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(pt,r&1),t===null)return sd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=cc(a,i,0,null),t=Vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hd(n),e.memoizedState=fd,t):ih(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return qy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=hr(o,s):(s=Vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?hd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=fd,i}return s=t.child,t=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ih(t,e){return e=cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ao(t,e,n,i){return i!==null&&Gf(i),Vs(e,t.child,null,n),t=ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=jc(Error(re(422))),Ao(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=cc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,a),e.child.memoizedState=hd(a),e.memoizedState=fd,s);if(!(e.mode&1))return Ao(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=jc(s,i,void 0),Ao(t,e,a,i)}if(o=(a&t.childLanes)!==0,dn||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Di(t,r),qn(i,t,r,-1))}return ch(),i=jc(Error(re(421))),Ao(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=aS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=cr(r.nextSibling),Sn=e,ht=!0,Hn=null,t!==null&&(Rn[Pn++]=wi,Rn[Pn++]=Ti,Rn[Pn++]=Gr,wi=t.id,Ti=t.overflow,Gr=e),e=ih(e,i.children),e.flags|=4096,e)}function qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ad(t.return,e,n)}function Xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function av(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qp(t,n,e);else if(t.tag===19)qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ii(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yy(t,e,n){switch(e.tag){case 3:rv(e),zs();break;case 5:L0(e);break;case 1:hn(e.type)&&bl(e);break;case 4:$f(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?sv(t,e,n):(ut(pt,pt.current&1),t=Ii(t,e,n),t!==null?t.sibling:null);ut(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return av(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,nv(t,e,n)}return Ii(t,e,n)}var ov,pd,lv,cv;ov=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pd=function(){};lv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(ci.current);var s=null;switch(n){case"input":r=Fu(t,r),i=Fu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Bu(t,r),i=Bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Al)}Vu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cv=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $y(t,e,n){var i=e.pendingProps;switch(Hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return hn(e.type)&&Cl(),Yt(e),null;case 3:return i=e.stateNode,Hs(),ft(fn),ft(Jt),Zf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Md(Hn),Hn=null))),pd(t,e),Yt(e),null;case 5:Kf(e);var r=Or(Wa.current);if(n=e.type,t!==null&&e.stateNode!=null)lv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Yt(e),null}if(t=Or(ci.current),wo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Ha]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<ya.length;r++)dt(ya[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":np(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":rp(i,s),dt("invalid",i)}Vu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Eo(i.textContent,o,t),r=["children",""+o]):La.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":mo(i),ip(i,s,!0);break;case"textarea":mo(i),sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Og(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[Ha]=i,ov(t,e,!1,!1),e.stateNode=t;e:{switch(a=Hu(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ya.length;r++)dt(ya[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":np(t,i),r=Fu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":rp(t,i),r=Bu(t,i),dt("invalid",t);break;default:r=i}Vu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?zg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Da(t,l):typeof l=="number"&&Da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Cf(t,s,l,a))}switch(n){case"input":mo(t),ip(t,i,!1);break;case"textarea":mo(t),sp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+gr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)cv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Or(Wa.current),Or(ci.current),wo(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:Eo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Eo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return Yt(e),null;case 13:if(ft(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&yn!==null&&e.mode&1&&!(e.flags&128))C0(),zs(),e.flags|=98560,s=!1;else if(s=wo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[si]=e}else zs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Hn!==null&&(Md(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?It===0&&(It=3):ch())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Hs(),pd(t,e),t===null&&za(e.stateNode.containerInfo),Yt(e),null;case 10:return Xf(e.type._context),Yt(e),null;case 17:return hn(e.type)&&Cl(),Yt(e),null;case 19:if(ft(pt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)la(s,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Il(t),a!==null){for(e.flags|=128,la(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&At()>Ws&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=Il(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return Yt(e),null}else 2*At()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=At(),e.sibling=null,n=pt.current,ut(pt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return lh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Ky(t,e){switch(Hf(e),e.tag){case 1:return hn(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),ft(fn),ft(Jt),Zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kf(e),null;case 13:if(ft(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));zs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(pt),null;case 4:return Hs(),null;case 10:return Xf(e.type._context),null;case 22:case 23:return lh(),null;case 24:return null;default:return null}}var Co=!1,Zt=!1,Zy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function md(t,e,n){try{n()}catch(i){yt(t,e,i)}}var Yp=!1;function Qy(t,e){if(Qu=El,t=p0(),zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(l=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++h===i&&(l=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ju={focusedElem:t,selectionRange:n},El=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var E=v.memoizedProps,g=v.memoizedState,d=e.stateNode,x=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:zn(e.type,E),g);d.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){yt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=Yp,Yp=!1,v}function Ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&md(e,n,s)}r=r.next}while(r!==i)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function uv(t){var e=t.alternate;e!==null&&(t.alternate=null,uv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Ha],delete e[nd],delete e[Iy],delete e[Uy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function dv(t){return t.tag===5||t.tag===3||t.tag===4}function $p(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||dv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}function xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}var Ht=null,Vn=!1;function Gi(t,e,n){for(n=n.child;n!==null;)fv(t,e,n),n=n.sibling}function fv(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:Zt||As(n,e);case 6:var i=Ht,r=Vn;Ht=null,Gi(t,e,n),Ht=i,Vn=r,Ht!==null&&(Vn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Vn?(t=Ht,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),Oa(t)):Bc(Ht,n.stateNode));break;case 4:i=Ht,r=Vn,Ht=n.stateNode.containerInfo,Vn=!0,Gi(t,e,n),Ht=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&md(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!Zt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Gi(t,e,n),Zt=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function Kp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zy),e.forEach(function(i){var r=oS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Vn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Vn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Vn=!0;break e}o=o.return}if(Ht===null)throw Error(re(160));fv(s,a,r),Ht=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){yt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)hv(e,t),e=e.sibling}function hv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),ei(t),i&4){try{Ra(3,t,t.return),oc(3,t)}catch(E){yt(t,t.return,E)}try{Ra(5,t,t.return)}catch(E){yt(t,t.return,E)}}break;case 1:Fn(e,t),ei(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Fn(e,t),ei(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Da(r,"")}catch(E){yt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Ug(r,s),Hu(o,a);var c=Hu(o,s);for(a=0;a<l.length;a+=2){var h=l[a],p=l[a+1];h==="style"?zg(r,p):h==="dangerouslySetInnerHTML"?kg(r,p):h==="children"?Da(r,p):Cf(r,h,p,c)}switch(o){case"input":Ou(r,s);break;case"textarea":Fg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?bs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?bs(r,!!s.multiple,s.defaultValue,!0):bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ha]=s}catch(E){yt(t,t.return,E)}}break;case 6:if(Fn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){yt(t,t.return,E)}}break;case 3:if(Fn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(e.containerInfo)}catch(E){yt(t,t.return,E)}break;case 4:Fn(e,t),ei(t);break;case 13:Fn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ah=At())),i&4&&Kp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||h,Fn(e,t),Zt=c):Fn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Se=t,h=t.child;h!==null;){for(p=Se=h;Se!==null;){switch(f=Se,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ra(4,f,f.return);break;case 1:As(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(E){yt(i,n,E)}}break;case 5:As(f,f.return);break;case 22:if(f.memoizedState!==null){Qp(p);continue}}m!==null?(m.return=f,Se=m):Qp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,l=p.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Bg("display",a))}catch(E){yt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(E){yt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Fn(e,t),ei(t),i&4&&Kp(t);break;case 21:break;default:Fn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(dv(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Da(r,""),i.flags&=-33);var s=$p(t);xd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=$p(t);vd(t,o,a);break;default:throw Error(re(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jy(t,e,n){Se=t,pv(t)}function pv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Co;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=Co;var c=Zt;if(Co=a,(Zt=l)&&!c)for(Se=r;Se!==null;)a=Se,l=a.child,a.tag===22&&a.memoizedState!==null?Jp(r):l!==null?(l.return=a,Se=l):Jp(r);for(;s!==null;)Se=s,pv(s),s=s.sibling;Se=r,Co=o,Zt=c}Zp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Zp(t)}}function Zp(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||oc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Up(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Up(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Oa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Zt||e.flags&512&&gd(e)}catch(f){yt(e,e.return,f)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Qp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Jp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{gd(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{gd(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){Se=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Se=o;break}Se=e.return}}var eS=Math.ceil,Ol=Oi.ReactCurrentDispatcher,rh=Oi.ReactCurrentOwner,Dn=Oi.ReactCurrentBatchConfig,Ke=0,zt=null,Pt=null,Wt=0,_n=0,Cs=Sr(0),It=0,Ya=null,jr=0,lc=0,sh=0,Pa=null,un=null,ah=0,Ws=1/0,Si=null,kl=!1,_d=null,dr=null,bo=!1,ir=null,Bl=0,Na=0,yd=null,ll=-1,cl=0;function nn(){return Ke&6?At():ll!==-1?ll:ll=At()}function fr(t){return t.mode&1?Ke&2&&Wt!==0?Wt&-Wt:Oy.transition!==null?(cl===0&&(cl=Qg()),cl):(t=it,t!==0||(t=window.event,t=t===void 0?16:s0(t.type)),t):1}function qn(t,e,n,i){if(50<Na)throw Na=0,yd=null,Error(re(185));eo(t,n,i),(!(Ke&2)||t!==zt)&&(t===zt&&(!(Ke&2)&&(lc|=n),It===4&&Ji(t,Wt)),pn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ws=At()+500,rc&&Mr()))}function pn(t,e){var n=t.callbackNode;O_(t,e);var i=Ml(t,t===zt?Wt:0);if(i===0)n!==null&&lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lp(n),e===1)t.tag===0?Fy(em.bind(null,t)):w0(em.bind(null,t)),Ly(function(){!(Ke&6)&&Mr()}),n=null;else{switch(Jg(i)){case 1:n=Lf;break;case 4:n=Kg;break;case 16:n=Sl;break;case 536870912:n=Zg;break;default:n=Sl}n=Mv(n,mv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mv(t,e){if(ll=-1,cl=0,Ke&6)throw Error(re(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=Ml(t,t===zt?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=zl(t,i);else{e=i;var r=Ke;Ke|=2;var s=vv();(zt!==t||Wt!==e)&&(Si=null,Ws=At()+500,zr(t,e));do try{iS();break}catch(o){gv(t,o)}while(!0);jf(),Ol.current=s,Ke=r,Pt!==null?e=0:(zt=null,Wt=0,e=It)}if(e!==0){if(e===2&&(r=qu(t),r!==0&&(i=r,e=Sd(t,r))),e===1)throw n=Ya,zr(t,0),Ji(t,i),pn(t,At()),n;if(e===6)Ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!tS(r)&&(e=zl(t,i),e===2&&(s=qu(t),s!==0&&(i=s,e=Sd(t,s))),e===1))throw n=Ya,zr(t,0),Ji(t,i),pn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Nr(t,un,Si);break;case 3:if(Ji(t,i),(i&130023424)===i&&(e=ah+500-At(),10<e)){if(Ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=td(Nr.bind(null,t,un,Si),e);break}Nr(t,un,Si);break;case 4:if(Ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Xn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eS(i/1960))-i,10<i){t.timeoutHandle=td(Nr.bind(null,t,un,Si),i);break}Nr(t,un,Si);break;case 5:Nr(t,un,Si);break;default:throw Error(re(329))}}}return pn(t,At()),t.callbackNode===n?mv.bind(null,t):null}function Sd(t,e){var n=Pa;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=zl(t,e),t!==2&&(e=un,un=n,e!==null&&Md(e)),t}function Md(t){un===null?un=t:un.push.apply(un,t)}function tS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ji(t,e){for(e&=~sh,e&=~lc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function em(t){if(Ke&6)throw Error(re(327));Ds();var e=Ml(t,0);if(!(e&1))return pn(t,At()),null;var n=zl(t,e);if(t.tag!==0&&n===2){var i=qu(t);i!==0&&(e=i,n=Sd(t,i))}if(n===1)throw n=Ya,zr(t,0),Ji(t,e),pn(t,At()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,un,Si),pn(t,At()),null}function oh(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ws=At()+500,rc&&Mr())}}function Xr(t){ir!==null&&ir.tag===0&&!(Ke&6)&&Ds();var e=Ke;Ke|=1;var n=Dn.transition,i=it;try{if(Dn.transition=null,it=1,t)return t()}finally{it=i,Dn.transition=n,Ke=e,!(Ke&6)&&Mr()}}function lh(){_n=Cs.current,ft(Cs)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ny(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Hf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cl();break;case 3:Hs(),ft(fn),ft(Jt),Zf();break;case 5:Kf(i);break;case 4:Hs();break;case 13:ft(pt);break;case 19:ft(pt);break;case 10:Xf(i.type._context);break;case 22:case 23:lh()}n=n.return}if(zt=t,Pt=t=hr(t.current,null),Wt=_n=e,It=0,Ya=null,sh=lc=jr=0,un=Pa=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Fr=null}return t}function gv(t,e){do{var n=Pt;try{if(jf(),sl.current=Fl,Ul){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Wr=0,Bt=Dt=mt=null,ba=!1,ja=0,rh.current=null,n===null||n.return===null){It=1,Ya=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Vp(a);if(m!==null){m.flags&=-257,Hp(m,a,o,s,e),m.mode&1&&zp(s,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var E=new Set;E.add(l),e.updateQueue=E}else v.add(l);break e}else{if(!(e&1)){zp(s,c,e),ch();break e}l=Error(re(426))}}else if(ht&&o.mode&1){var g=Vp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Hp(g,a,o,s,e),Gf(Gs(l,o));break e}}s=l=Gs(l,o),It!==4&&(It=2),Pa===null?Pa=[s]:Pa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=J0(s,l,e);Ip(s,d);break e;case 1:o=l;var x=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(dr===null||!dr.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ev(s,o,e);Ip(s,S);break e}}s=s.return}while(s!==null)}_v(n)}catch(C){e=C,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function vv(){var t=Ol.current;return Ol.current=Fl,t===null?Fl:t}function ch(){(It===0||It===3||It===2)&&(It=4),zt===null||!(jr&268435455)&&!(lc&268435455)||Ji(zt,Wt)}function zl(t,e){var n=Ke;Ke|=2;var i=vv();(zt!==t||Wt!==e)&&(Si=null,zr(t,e));do try{nS();break}catch(r){gv(t,r)}while(!0);if(jf(),Ke=n,Ol.current=i,Pt!==null)throw Error(re(261));return zt=null,Wt=0,It}function nS(){for(;Pt!==null;)xv(Pt)}function iS(){for(;Pt!==null&&!b_();)xv(Pt)}function xv(t){var e=Sv(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?_v(t):Pt=e,rh.current=null}function _v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ky(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Pt=null;return}}else if(n=$y(n,e,_n),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);It===0&&(It=5)}function Nr(t,e,n){var i=it,r=Dn.transition;try{Dn.transition=null,it=1,rS(t,e,n,i)}finally{Dn.transition=r,it=i}return null}function rS(t,e,n,i){do Ds();while(ir!==null);if(Ke&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(k_(t,s),t===zt&&(Pt=zt=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,Mv(Sl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var a=it;it=1;var o=Ke;Ke|=4,rh.current=null,Qy(t,n),hv(n,t),wy(Ju),El=!!Qu,Ju=Qu=null,t.current=n,Jy(n),R_(),Ke=o,it=a,Dn.transition=s}else t.current=n;if(bo&&(bo=!1,ir=t,Bl=r),s=t.pendingLanes,s===0&&(dr=null),L_(n.stateNode),pn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=_d,_d=null,t;return Bl&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===yd?Na++:(Na=0,yd=t):Na=0,Mr(),null}function Ds(){if(ir!==null){var t=Jg(Bl),e=Dn.transition,n=it;try{if(Dn.transition=null,it=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Bl=0,Ke&6)throw Error(re(331));var r=Ke;for(Ke|=4,Se=t.current;Se!==null;){var s=Se,a=s.child;if(Se.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Se=c;Se!==null;){var h=Se;switch(h.tag){case 0:case 11:case 15:Ra(8,h,s)}var p=h.child;if(p!==null)p.return=h,Se=p;else for(;Se!==null;){h=Se;var f=h.sibling,m=h.return;if(uv(h),h===c){Se=null;break}if(f!==null){f.return=m,Se=f;break}Se=m}}}var v=s.alternate;if(v!==null){var E=v.child;if(E!==null){v.child=null;do{var g=E.sibling;E.sibling=null,E=g}while(E!==null)}}Se=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Se=a;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Se=d;break e}Se=s.return}}var x=t.current;for(Se=x;Se!==null;){a=Se;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Se=M;else e:for(a=x;Se!==null;){if(o=Se,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:oc(9,o)}}catch(C){yt(o,o.return,C)}if(o===a){Se=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Se=S;break e}Se=o.return}}if(Ke=r,Mr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Jl,t)}catch{}i=!0}return i}finally{it=n,Dn.transition=e}}return!1}function tm(t,e,n){e=Gs(n,e),e=J0(t,e,1),t=ur(t,e,1),e=nn(),t!==null&&(eo(t,1,e),pn(t,e))}function yt(t,e,n){if(t.tag===3)tm(t,t,n);else for(;e!==null;){if(e.tag===3){tm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dr===null||!dr.has(i))){t=Gs(n,t),t=ev(e,t,1),e=ur(e,t,1),t=nn(),e!==null&&(eo(e,1,t),pn(e,t));break}}e=e.return}}function sS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Wt&n)===n&&(It===4||It===3&&(Wt&130023424)===Wt&&500>At()-ah?zr(t,0):sh|=n),pn(t,e)}function yv(t,e){e===0&&(t.mode&1?(e=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):e=1);var n=nn();t=Di(t,e),t!==null&&(eo(t,e,n),pn(t,n))}function aS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yv(t,n)}function oS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),yv(t,n)}var Sv;Sv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,Yy(t,e,n);dn=!!(t.flags&131072)}else dn=!1,ht&&e.flags&1048576&&T0(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ol(t,e),t=e.pendingProps;var r=Bs(e,Jt.current);Ls(e,n),r=Jf(null,e,i,t,r,n);var s=eh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,bl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Yf(e),r.updater=ac,e.stateNode=r,r._reactInternals=e,ld(e,i,t,n),e=dd(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Vf(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ol(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cS(i),t=zn(i,t),r){case 0:e=ud(null,e,i,t,n);break e;case 1:e=jp(null,e,i,t,n);break e;case 11:e=Gp(null,e,i,t,n);break e;case 14:e=Wp(null,e,i,zn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ud(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),jp(t,e,i,r,n);case 3:e:{if(rv(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,N0(t,e),Dl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(re(423)),e),e=Xp(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(re(424)),e),e=Xp(t,e,i,n,r);break e}else for(yn=cr(e.stateNode.containerInfo.firstChild),Sn=e,ht=!0,Hn=null,n=R0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zs(),i===r){e=Ii(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return L0(e),t===null&&sd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ed(i,r)?a=null:s!==null&&ed(i,s)&&(e.flags|=32),iv(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&sd(e),null;case 13:return sv(t,e,n);case 4:return $f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Gp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(Nl,i._currentValue),i._currentValue=a,s!==null)if(Yn(s.value,a)){if(s.children===r.children&&!fn.current){e=Ii(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ad(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ad(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=In(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),Wp(t,e,i,r,n);case 15:return tv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ol(t,e),e.tag=1,hn(i)?(t=!0,bl(e)):t=!1,Ls(e,n),Q0(e,i,r),ld(e,i,r,n),dd(null,e,i,!0,t,n);case 19:return av(t,e,n);case 22:return nv(t,e,n)}throw Error(re(156,e.tag))};function Mv(t,e){return $g(t,e)}function lS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new lS(t,e,n,i)}function uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cS(t){if(typeof t=="function")return uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rf)return 11;if(t===Pf)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")uh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case vs:return Vr(n.children,r,s,e);case bf:a=8,r|=8;break;case Lu:return t=Ln(12,n,e,r|2),t.elementType=Lu,t.lanes=s,t;case Du:return t=Ln(13,n,e,r),t.elementType=Du,t.lanes=s,t;case Iu:return t=Ln(19,n,e,r),t.elementType=Iu,t.lanes=s,t;case Lg:return cc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pg:a=10;break e;case Ng:a=9;break e;case Rf:a=11;break e;case Pf:a=14;break e;case Ki:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Ln(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Vr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function cc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Lg,t.lanes=n,t.stateNode={isHidden:!1},t}function qc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function dh(t,e,n,i,r,s,a,o,l){return t=new uS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(s),t}function dS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ev(t){if(!t)return vr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(hn(n))return E0(t,n,e)}return e}function wv(t,e,n,i,r,s,a,o,l){return t=dh(n,i,!0,t,r,s,a,o,l),t.context=Ev(null),n=t.current,i=nn(),r=fr(n),s=Ci(i,r),s.callback=e??null,ur(n,s,r),t.current.lanes=r,eo(t,r,i),pn(t,i),t}function uc(t,e,n,i){var r=e.current,s=nn(),a=fr(r);return n=Ev(n),e.context===null?e.context=n:e.pendingContext=n,e=Ci(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ur(r,e,a),t!==null&&(qn(t,r,a,s),rl(t,r,a)),a}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fh(t,e){nm(t,e),(t=t.alternate)&&nm(t,e)}function fS(){return null}var Tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function hh(t){this._internalRoot=t}dc.prototype.render=hh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));uc(t,e,null,null)};dc.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){uc(null,t,null,null)}),e[Li]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var e=n0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&r0(t)}};function ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function hS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vl(a);s.call(c)}}var a=wv(e,i,t,0,null,!1,!1,"",im);return t._reactRootContainer=a,t[Li]=a.current,za(t.nodeType===8?t.parentNode:t),Xr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Vl(l);o.call(c)}}var l=dh(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=l,t[Li]=l.current,za(t.nodeType===8?t.parentNode:t),Xr(function(){uc(e,l,n,i)}),l}function hc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Vl(a);o.call(l)}}uc(e,a,t,r)}else a=hS(n,e,t,r,i);return Vl(a)}e0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_a(e.pendingLanes);n!==0&&(Df(e,n|1),pn(e,At()),!(Ke&6)&&(Ws=At()+500,Mr()))}break;case 13:Xr(function(){var i=Di(t,1);if(i!==null){var r=nn();qn(i,t,1,r)}}),fh(t,1)}};If=function(t){if(t.tag===13){var e=Di(t,134217728);if(e!==null){var n=nn();qn(e,t,134217728,n)}fh(t,134217728)}};t0=function(t){if(t.tag===13){var e=fr(t),n=Di(t,e);if(n!==null){var i=nn();qn(n,t,e,i)}fh(t,e)}};n0=function(){return it};i0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Wu=function(t,e,n){switch(e){case"input":if(Ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ic(i);if(!r)throw Error(re(90));Ig(i),Ou(i,r)}}}break;case"textarea":Fg(t,n);break;case"select":e=n.value,e!=null&&bs(t,!!n.multiple,e,!1)}};Gg=oh;Wg=Xr;var pS={usingClientEntryPoint:!1,Events:[no,Ss,ic,Vg,Hg,oh]},ca={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mS={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Oi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qg(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||fS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{Jl=Ro.inject(mS),li=Ro}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pS;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ph(e))throw Error(re(200));return dS(t,e,null,n)};wn.createRoot=function(t,e){if(!ph(t))throw Error(re(299));var n=!1,i="",r=Tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=dh(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,za(t.nodeType===8?t.parentNode:t),new hh(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=qg(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Xr(t)};wn.hydrate=function(t,e,n){if(!fc(e))throw Error(re(200));return hc(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!ph(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=wv(e,null,t,1,n??null,r,!1,s,a),t[Li]=e.current,za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new dc(e)};wn.render=function(t,e,n){if(!fc(e))throw Error(re(200));return hc(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!fc(t))throw Error(re(40));return t._reactRootContainer?(Xr(function(){hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};wn.unstable_batchedUpdates=oh;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!fc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return hc(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),Ag.exports=wn;var gS=Ag.exports,rm=gS;Pu.createRoot=rm.createRoot,Pu.hydrateRoot=rm.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$a.apply(null,arguments)}var rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(rr||(rr={}));const sm="popstate";function vS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return Ed("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:Hl(r)}return _S(e,n,null,t)}function Mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xS(){return Math.random().toString(36).substr(2,8)}function am(t,e){return{usr:t.state,key:t.key,idx:e}}function Ed(t,e,n,i){return n===void 0&&(n=null),$a({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Js(e):e,{state:n,key:e&&e.key||i||xS()})}function Hl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Js(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function _S(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=rr.Pop,l=null,c=h();c==null&&(c=0,a.replaceState($a({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function p(){o=rr.Pop;let g=h(),d=g==null?null:g-c;c=g,l&&l({action:o,location:E.location,delta:d})}function f(g,d){o=rr.Push;let x=Ed(E.location,g,d);c=h()+1;let M=am(x,c),S=E.createHref(x);try{a.pushState(M,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}s&&l&&l({action:o,location:E.location,delta:1})}function m(g,d){o=rr.Replace;let x=Ed(E.location,g,d);c=h();let M=am(x,c),S=E.createHref(x);a.replaceState(M,"",S),s&&l&&l({action:o,location:E.location,delta:0})}function v(g){let d=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof g=="string"?g:Hl(g);return x=x.replace(/ $/,"%20"),Mt(d,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,d)}let E={get action(){return o},get location(){return t(r,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(sm,p),l=g,()=>{r.removeEventListener(sm,p),l=null}},createHref(g){return e(r,g)},createURL:v,encodeLocation(g){let d=v(g);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:f,replace:m,go(g){return a.go(g)}};return E}var om;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(om||(om={}));function yS(t,e,n){return n===void 0&&(n="/"),SS(t,e,n)}function SS(t,e,n,i){let r=typeof e=="string"?Js(e):e,s=js(r.pathname||"/",n);if(s==null)return null;let a=Cv(t);MS(a);let o=null,l=DS(s);for(let c=0;o==null&&c<a.length;++c)o=NS(a[c],l);return o}function Cv(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Mt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=pr([i,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Mt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Cv(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:RS(c,s.index),routesMeta:h})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of bv(s.path))r(s,a,l)}),e}function bv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=bv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function MS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PS(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const ES=/^:[\w-]+$/,wS=3,TS=2,AS=1,CS=10,bS=-2,lm=t=>t==="*";function RS(t,e){let n=t.split("/"),i=n.length;return n.some(lm)&&(i+=bS),e&&(i+=TS),n.filter(r=>!lm(r)).reduce((r,s)=>r+(ES.test(s)?wS:s===""?AS:CS),i)}function PS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function NS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,h=s==="/"?e:e.slice(s.length)||"/",p=wd({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),f=l.route;if(!p)return null;Object.assign(r,p.params),a.push({params:r,pathname:pr([s,p.pathname]),pathnameBase:kS(pr([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=pr([s,p.pathnameBase]))}return a}function wd(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=LS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,h,p)=>{let{paramName:f,isOptional:m}=h;if(f==="*"){let E=o[p]||"";a=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const v=o[p];return m&&!v?c[f]=void 0:c[f]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function LS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function DS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function js(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const IS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,US=t=>IS.test(t);function FS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Js(t):t,s;if(n)if(US(n))s=n;else{if(n.includes("//")){let a=n;n=Nv(n),mh(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=cm(n.substring(1),"/"):s=cm(n,e)}else s=e;return{pathname:s,search:BS(i),hash:zS(r)}}function cm(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Rv(t,e){let n=OS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Pv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Js(t):(r=$a({},t),Mt(!r.pathname||!r.pathname.includes("?"),$c("?","pathname","search",r)),Mt(!r.pathname||!r.pathname.includes("#"),$c("#","pathname","hash",r)),Mt(!r.search||!r.search.includes("#"),$c("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let p=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;r.pathname=f.join("/")}o=p>=0?e[p]:"/"}let l=FS(r,o),c=a&&a!=="/"&&a.endsWith("/"),h=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Nv=t=>t.replace(/\/\/+/g,"/"),pr=t=>Nv(t.join("/")),kS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,zS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Lv=["post","put","patch","delete"];new Set(Lv);const HS=["get",...Lv];new Set(HS);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ka.apply(null,arguments)}const pc=Z.createContext(null),Dv=Z.createContext(null),Er=Z.createContext(null),mc=Z.createContext(null),wr=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),Iv=Z.createContext(null);function GS(t,e){let{relative:n}=e===void 0?{}:e;ro()||Mt(!1);let{basename:i,navigator:r}=Z.useContext(Er),{hash:s,pathname:a,search:o}=gc(t,{relative:n}),l=a;return i!=="/"&&(l=a==="/"?i:pr([i,a])),r.createHref({pathname:l,search:o,hash:s})}function ro(){return Z.useContext(mc)!=null}function ki(){return ro()||Mt(!1),Z.useContext(mc).location}function Uv(t){Z.useContext(Er).static||Z.useLayoutEffect(t)}function so(){let{isDataRoute:t}=Z.useContext(wr);return t?n1():WS()}function WS(){ro()||Mt(!1);let t=Z.useContext(pc),{basename:e,future:n,navigator:i}=Z.useContext(Er),{matches:r}=Z.useContext(wr),{pathname:s}=ki(),a=JSON.stringify(Rv(r,n.v7_relativeSplatPath)),o=Z.useRef(!1);return Uv(()=>{o.current=!0}),Z.useCallback(function(c,h){if(h===void 0&&(h={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let p=Pv(c,JSON.parse(a),s,h.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:pr([e,p.pathname])),(h.replace?i.replace:i.push)(p,h.state,h)},[e,i,a,s,t])}function Fv(){let{matches:t}=Z.useContext(wr),e=t[t.length-1];return e?e.params:{}}function gc(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=Z.useContext(Er),{matches:r}=Z.useContext(wr),{pathname:s}=ki(),a=JSON.stringify(Rv(r,i.v7_relativeSplatPath));return Z.useMemo(()=>Pv(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function jS(t,e){return XS(t,e)}function XS(t,e,n,i){ro()||Mt(!1);let{navigator:r}=Z.useContext(Er),{matches:s}=Z.useContext(wr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=ki(),h;if(e){var p;let g=typeof e=="string"?Js(e):e;l==="/"||(p=g.pathname)!=null&&p.startsWith(l)||Mt(!1),h=g}else h=c;let f=h.pathname||"/",m=f;if(l!=="/"){let g=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(g.length).join("/")}let v=yS(t,{pathname:m}),E=ZS(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:pr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:pr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&E?Z.createElement(mc.Provider,{value:{location:Ka({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:rr.Pop}},E):E}function qS(){let t=t1(),e=VS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),n?Z.createElement("pre",{style:r},n):null,null)}const YS=Z.createElement(qS,null);class $S extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Z.createElement(wr.Provider,{value:this.props.routeContext},Z.createElement(Iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KS(t){let{routeContext:e,match:n,children:i}=t,r=Z.useContext(pc);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Z.createElement(wr.Provider,{value:e},i)}function ZS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let h=a.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);h>=0||Mt(!1),a=a.slice(0,Math.min(a.length,h+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let h=0;h<a.length;h++){let p=a[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:f,errors:m}=n,v=p.route.loader&&f[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||v){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,p,f)=>{let m,v=!1,E=null,g=null;n&&(m=o&&p.route.id?o[p.route.id]:void 0,E=p.route.errorElement||YS,l&&(c<0&&f===0?(i1("route-fallback"),v=!0,g=null):c===f&&(v=!0,g=p.route.hydrateFallbackElement||null)));let d=e.concat(a.slice(0,f+1)),x=()=>{let M;return m?M=E:v?M=g:p.route.Component?M=Z.createElement(p.route.Component,null):p.route.element?M=p.route.element:M=h,Z.createElement(KS,{match:p,routeContext:{outlet:h,matches:d,isDataRoute:n!=null},children:M})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?Z.createElement($S,{location:n.location,revalidation:n.revalidation,component:E,error:m,children:x(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):x()},null)}var Ov=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Ov||{}),kv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(kv||{});function QS(t){let e=Z.useContext(pc);return e||Mt(!1),e}function JS(t){let e=Z.useContext(Dv);return e||Mt(!1),e}function e1(t){let e=Z.useContext(wr);return e||Mt(!1),e}function Bv(t){let e=e1(),n=e.matches[e.matches.length-1];return n.route.id||Mt(!1),n.route.id}function t1(){var t;let e=Z.useContext(Iv),n=JS(),i=Bv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function n1(){let{router:t}=QS(Ov.UseNavigateStable),e=Bv(kv.UseNavigateStable),n=Z.useRef(!1);return Uv(()=>{n.current=!0}),Z.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ka({fromRouteId:e},s)))},[t,e])}const um={};function i1(t,e,n){um[t]||(um[t]=!0)}function r1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function cn(t){Mt(!1)}function s1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=rr.Pop,navigator:s,static:a=!1,future:o}=t;ro()&&Mt(!1);let l=e.replace(/^\/*/,"/"),c=Z.useMemo(()=>({basename:l,navigator:s,static:a,future:Ka({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Js(i));let{pathname:h="/",search:p="",hash:f="",state:m=null,key:v="default"}=i,E=Z.useMemo(()=>{let g=js(h,l);return g==null?null:{location:{pathname:g,search:p,hash:f,state:m,key:v},navigationType:r}},[l,h,p,f,m,v,r]);return E==null?null:Z.createElement(Er.Provider,{value:c},Z.createElement(mc.Provider,{children:n,value:E}))}function a1(t){let{children:e,location:n}=t;return jS(Td(e),n)}new Promise(()=>{});function Td(t,e){e===void 0&&(e=[]);let n=[];return Z.Children.forEach(t,(i,r)=>{if(!Z.isValidElement(i))return;let s=[...e,r];if(i.type===Z.Fragment){n.push.apply(n,Td(i.props.children,s));return}i.type!==cn&&Mt(!1),!i.props.index||!i.props.children||Mt(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Td(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Gl.apply(null,arguments)}function zv(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function o1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function l1(t,e){return t.button===0&&(!e||e==="_self")&&!o1(t)}function Ad(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function c1(t,e){let n=Ad(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}const u1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],d1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],f1="6";try{window.__reactRouterVersion=f1}catch{}const h1=Z.createContext({isTransitioning:!1}),p1="startTransition",dm=s_[p1];function m1(t){let{basename:e,children:n,future:i,window:r}=t,s=Z.useRef();s.current==null&&(s.current=vS({window:r,v5Compat:!0}));let a=s.current,[o,l]=Z.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},h=Z.useCallback(p=>{c&&dm?dm(()=>l(p)):l(p)},[l,c]);return Z.useLayoutEffect(()=>a.listen(h),[a,h]),Z.useEffect(()=>r1(i),[i]),Z.createElement(s1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}const g1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=Z.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:a,state:o,target:l,to:c,preventScrollReset:h,viewTransition:p}=e,f=zv(e,u1),{basename:m}=Z.useContext(Er),v,E=!1;if(typeof c=="string"&&v1.test(c)&&(v=c,g1))try{let M=new URL(window.location.href),S=c.startsWith("//")?new URL(M.protocol+c):new URL(c),C=js(S.pathname,m);S.origin===M.origin&&C!=null?c=C+S.search+S.hash:E=!0}catch{}let g=GS(c,{relative:r}),d=_1(c,{replace:a,state:o,target:l,preventScrollReset:h,relative:r,viewTransition:p});function x(M){i&&i(M),M.defaultPrevented||d(M)}return Z.createElement("a",Gl({},f,{href:v||g,onClick:E||s?i:x,ref:n,target:l}))}),fm=Z.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:c,children:h}=e,p=zv(e,d1),f=gc(l,{relative:p.relative}),m=ki(),v=Z.useContext(Dv),{navigator:E,basename:g}=Z.useContext(Er),d=v!=null&&S1(f)&&c===!0,x=E.encodeLocation?E.encodeLocation(f).pathname:f.pathname,M=m.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(M=M.toLowerCase(),S=S?S.toLowerCase():null,x=x.toLowerCase()),S&&g&&(S=js(S,g)||S);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let T=M===x||!a&&M.startsWith(x)&&M.charAt(C)==="/",A=S!=null&&(S===x||!a&&S.startsWith(x)&&S.charAt(x.length)==="/"),y={isActive:T,isPending:A,isTransitioning:d},b=T?i:void 0,P;typeof s=="function"?P=s(y):P=[s,T?"active":null,A?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let N=typeof o=="function"?o(y):o;return Z.createElement(Ye,Gl({},p,{"aria-current":b,className:P,ref:n,style:N,to:l,viewTransition:c}),typeof h=="function"?h(y):h)});var Cd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Cd||(Cd={}));var hm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hm||(hm={}));function x1(t){let e=Z.useContext(pc);return e||Mt(!1),e}function _1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:a,viewTransition:o}=e===void 0?{}:e,l=so(),c=ki(),h=gc(t,{relative:a});return Z.useCallback(p=>{if(l1(p,n)){p.preventDefault();let f=i!==void 0?i:Hl(c)===Hl(h);l(t,{replace:f,state:r,preventScrollReset:s,relative:a,viewTransition:o})}},[c,l,h,i,r,n,t,s,a,o])}function y1(t){let e=Z.useRef(Ad(t)),n=Z.useRef(!1),i=ki(),r=Z.useMemo(()=>c1(i.search,n.current?null:e.current),[i.search]),s=so(),a=Z.useCallback((o,l)=>{const c=Ad(typeof o=="function"?o(r):o);n.current=!0,s("?"+c,l)},[s,r]);return[r,a]}function S1(t,e){e===void 0&&(e={});let n=Z.useContext(h1);n==null&&Mt(!1);let{basename:i}=x1(Cd.useViewTransitionState),r=gc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=js(n.currentLocation.pathname,i)||n.currentLocation.pathname,a=js(n.nextLocation.pathname,i)||n.nextLocation.pathname;return wd(r.pathname,a)!=null||wd(r.pathname,s)!=null}/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var E1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Z.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Z.createElement("svg",{ref:l,...E1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Vv("lucide",r),...o},[...a.map(([c,h])=>Z.createElement(c,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(t,e)=>{const n=Z.forwardRef(({className:i,...r},s)=>Z.createElement(w1,{ref:s,iconNode:e,className:Vv(`lucide-${M1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=Re("Armchair",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"1qyhux"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=Re("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=Re("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=Re("Bed",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=Re("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=Re("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Re("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=Re("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=Re("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Re("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Re("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=Re("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Re("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=Re("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Re("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Re("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Re("Diamond",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=Re("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=Re("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=Re("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=Re("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Re("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=Re("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=Re("Lamp",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=Re("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=Re("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=Re("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=Re("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Re("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Re("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=Re("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=Re("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=Re("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=Re("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=Re("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=Re("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=Re("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=Re("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=Re("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=Re("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=Re("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=Re("Sofa",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Re("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=Re("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=Re("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=Re("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=Re("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=Re("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=Re("Utensils",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=Re("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.428.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=Re("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function tM(){const[t,e]=Z.useState(!1),[n,i]=Z.useState(!1),r=ki();Z.useEffect(()=>{const a=()=>{window.scrollY>20?i(!0):i(!1)};return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),Z.useEffect(()=>{e(!1)},[r.pathname]);const s=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Services",path:"/services"},{name:"Portfolio",path:"/portfolio"},{name:"Blog",path:"/blog"},{name:"Contact",path:"/contact"},{name:"Status",path:"/confirmed"}];return u.jsxs("header",{className:`header ${n?"header-scrolled":""}`,children:[u.jsxs("div",{className:"container header-container",children:[u.jsxs(Ye,{to:"/",className:"header-logo",children:[u.jsx("div",{className:"logo-icon-box",children:u.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("rect",{width:"40",height:"40",rx:"8",fill:"#E5A93C",fillOpacity:"0.15"}),u.jsx("path",{d:"M10 32V16L20 9L30 16V32H10Z",stroke:"#E5A93C",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:"M16 32V21H24V32",stroke:"#E5A93C",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),u.jsxs("div",{className:"logo-text-group",children:[u.jsx("span",{className:"logo-brand-name",children:"Interio"}),u.jsx("span",{className:"logo-brand-sub",children:"DESIGN STUDIO"})]})]}),u.jsx("nav",{className:"desktop-nav",children:s.map(a=>u.jsx(fm,{to:a.path,className:({isActive:o})=>`nav-link ${o?"active-nav-link":""}`,end:a.path==="/",children:a.name},a.name))}),u.jsxs("div",{className:"header-cta-wrapper",children:[u.jsxs(Ye,{to:"/quote",className:"btn-gold header-cta-btn",children:[u.jsx("span",{children:"Get a Free Quote"}),u.jsx("span",{className:"btn-gold-icon",children:u.jsx(xr,{size:14})})]}),u.jsx("button",{className:"mobile-toggle-btn",onClick:()=>e(!t),"aria-label":"Toggle navigation menu",children:t?u.jsx(Kv,{size:26}):u.jsx(V1,{size:26})})]})]}),u.jsx("div",{className:`mobile-menu-drawer ${t?"drawer-open":""}`,children:u.jsxs("div",{className:"mobile-drawer-content",children:[s.map(a=>u.jsx(fm,{to:a.path,className:({isActive:o})=>`mobile-nav-link ${o?"active-mobile-link":""}`,end:a.path==="/",children:a.name},a.name)),u.jsxs(Ye,{to:"/quote",className:"btn-gold mobile-drawer-cta",children:[u.jsx("span",{children:"Get a Free Quote"}),u.jsx("span",{className:"btn-gold-icon",children:u.jsx(xr,{size:14})})]})]})})]})}function nM(){return u.jsxs("footer",{className:"footer",children:[u.jsxs("div",{className:"container footer-container",children:[u.jsxs("div",{className:"footer-col brand-col",children:[u.jsxs(Ye,{to:"/",className:"footer-logo",children:[u.jsx("div",{className:"logo-icon-box",children:u.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[u.jsx("path",{d:"M10 32V16L20 9L30 16V32H10Z",stroke:"#E5A93C",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"}),u.jsx("path",{d:"M16 32V21H24V32",stroke:"#E5A93C",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),u.jsxs("div",{className:"logo-text-group",children:[u.jsx("span",{className:"logo-brand-name",children:"Interio"}),u.jsx("span",{className:"logo-brand-sub",children:"DESIGN STUDIO"})]})]}),u.jsx("p",{className:"footer-desc",children:"We craft modern, functional, and visually captivating interior spaces tailored specifically to your lifestyle and personal aesthetic."}),u.jsxs("div",{className:"social-links",children:[u.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer","aria-label":"Instagram",className:"social-icon",children:u.jsx(jv,{size:18})}),u.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",className:"social-icon",children:u.jsx(xh,{size:18})}),u.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook",className:"social-icon",children:u.jsx(vh,{size:18})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{className:"footer-title",children:"Quick Links"}),u.jsxs("ul",{className:"footer-links-list",children:[u.jsx("li",{children:u.jsx(Ye,{to:"/",children:"Home"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/about",children:"About Us"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/services",children:"Our Services"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/portfolio",children:"Portfolio"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/blog",children:"Latest Blog"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/contact",children:"Contact Us"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/confirmed",children:"Check Booking Status"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{className:"footer-title",children:"Our Services"}),u.jsxs("ul",{className:"footer-links-list",children:[u.jsx("li",{children:u.jsx(Ye,{to:"/services",children:"Interior Design"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/services",children:"Space Planning"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/services",children:"Renovation & Remodeling"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/services",children:"Lighting Design"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/services",children:"Custom Furniture"})}),u.jsx("li",{children:u.jsx(Ye,{to:"/services",children:"Commercial Interiors"})})]})]}),u.jsxs("div",{className:"footer-col",children:[u.jsx("h4",{className:"footer-title",children:"Contact Us"}),u.jsxs("div",{className:"footer-contact-items",children:[u.jsxs("div",{className:"contact-item",children:[u.jsx(yh,{size:18,className:"contact-icon"}),u.jsx("span",{children:"123 Design Street, Creative City, CA 90210, USA"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx(Sh,{size:18,className:"contact-icon"}),u.jsx("span",{children:"+1 234 567 8900"})]}),u.jsxs("div",{className:"contact-item",children:[u.jsx(_h,{size:18,className:"contact-icon"}),u.jsx("span",{children:"hello@interiodesign.com"})]})]})]})]}),u.jsx("div",{className:"footer-bottom",children:u.jsxs("div",{className:"container footer-bottom-content",children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," Interio Design Studio. All rights reserved."]}),u.jsxs("div",{className:"footer-legal-links",children:[u.jsx(Ye,{to:"/contact",children:"Privacy Policy"}),u.jsx("span",{className:"dot",children:"•"}),u.jsx(Ye,{to:"/contact",children:"Terms of Service"})]})]})})]})}function er({children:t,to:e,onClick:n,variant:i="gold",type:r="button",className:s="",icon:a=!0}){const o=u.jsxs(u.Fragment,{children:[u.jsx("span",{children:t}),a&&u.jsx("span",{className:"btn-gold-icon",children:u.jsx(xr,{size:14})})]}),l=`${i==="gold"?"btn-gold":"btn-outline"} ${s}`;return e?u.jsx(Ye,{to:e,className:l,children:o}):u.jsx("button",{type:r,onClick:n,className:l,children:o})}function $n({eyebrow:t,title:e,highlightWord:n,description:i,center:r=!1,light:s=!1}){const a=()=>{if(!n||!e.includes(n))return e;const o=e.split(n);return u.jsxs(u.Fragment,{children:[o[0],u.jsx("span",{className:"text-gold",children:n}),o[1]]})};return u.jsxs("div",{style:{textAlign:r?"center":"left",marginBottom:"40px"},children:[t&&u.jsx("span",{className:"eyebrow-gold",children:t}),u.jsx("h2",{style:{color:s?"var(--text-dark)":"var(--text-white)",marginTop:"4px"},children:a()}),i&&u.jsx("p",{style:{maxWidth:r?"680px":"620px",margin:r?"16px auto 0 auto":"16px 0 0 0",color:s?"var(--text-dark-muted)":"var(--text-muted)",fontSize:"1.05rem"},children:i})]})}function Eh({project:t,onQuickView:e}){return u.jsx("div",{className:"project-card card-hover-effect",children:u.jsxs("div",{className:"project-card-image-box",children:[u.jsx("img",{src:t.heroImage,alt:t.title,loading:"lazy"}),u.jsxs("div",{className:"project-card-overlay",children:[u.jsx("span",{className:"project-category-badge",children:t.category}),u.jsx("h3",{className:"project-card-title",children:t.title}),u.jsxs("div",{className:"project-card-actions",children:[u.jsxs(Ye,{to:`/portfolio/${t.id}`,className:"btn-gold project-view-btn",children:[u.jsx("span",{children:"View Project"}),u.jsx("span",{className:"btn-gold-icon",children:u.jsx(xr,{size:14})})]}),e&&u.jsx("button",{type:"button",onClick:()=>e(t),className:"btn-outline quick-view-btn","aria-label":"Quick preview image",children:u.jsx(Wv,{size:16})})]})]})]})})}const mr=[{id:1,title:"Modern Luxury Living Room",category:"Living Room",client:"Private Residence",date:"May 2024",location:"Beverly Hills, CA",area:"850 sq. ft.",services:["Interior Design","Space Planning","Lighting Design"],description:"A stylish and comfortable living room designed with a perfect blend of modern aesthetics, warm neutral color palettes, and bespoke golden lighting accents. The layout emphasizes open-concept relaxation and effortless entertainment.",features:["Modern furniture & custom layout","Warm neutral color palette with gold accents","Architectural ambient & task lighting","Custom wall paneling & artwork integration"],heroImage:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop"]},{id:2,title:"Serene Master Bedroom",category:"Bedroom",client:"The Heights Penthouse",date:"April 2024",location:"Manhattan, NY",area:"620 sq. ft.",services:["Interior Design","Furniture & Decor","Lighting Design"],description:"An elegant master bedroom sanctuary designed with textured headboards, mood lighting, plush luxury textiles, and integrated custom cabinetry for seamless clutter-free living.",features:["Custom velvet platform bed frame","Dimmable indirect cove lighting","Floor-to-ceiling silk drapery","En-suite custom wardrobe layout"],heroImage:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=1000&auto=format&fit=crop"]},{id:3,title:"Scandinavian Kitchen & Dining",category:"Kitchen",client:"Oakwood Villa",date:"March 2024",location:"Austin, TX",area:"540 sq. ft.",services:["Renovation","Space Planning","Custom Furniture"],description:"A bright, open-plan kitchen featuring matte black hardware, Italian Calacatta marble counter surfaces, warm oak millwork, and brass pendant lighting over a spacious island.",features:["Calacatta marble kitchen island","Integrated smart appliances","Bespoke oak bar cabinetry","Architectural pendant lighting"],heroImage:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1000&auto=format&fit=crop"]},{id:4,title:"Executive Office Suite",category:"Office",client:"Vanguard Partners",date:"February 2024",location:"Chicago, IL",area:"1,200 sq. ft.",services:["Commercial Design","Space Planning","Project Management"],description:"A sophisticated corporate office space combining acoustic walnut wall panels, ergonomic leather seating, executive meeting pods, and warm golden lighting fixtures.",features:["Acoustic walnut wood paneling","Ergonomic leather seating solution","Concealed cable wire management","Private conference nook"],heroImage:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"]},{id:5,title:"Boutique Commercial Lounge",category:"Commercial",client:"Luxe Hospitality",date:"January 2024",location:"Miami, FL",area:"2,100 sq. ft.",services:["Commercial Design","3D Visualization","Lighting Design"],description:"A moody, luxurious hospitality space with custom brass framing, velvet banquette seating, ambient ceiling sconces, and statement stone finishes designed for high-end dining and cocktail events.",features:["Custom brass wall features","Deep gold ambient lighting layout","Custom velvet plush banquettes","Acoustic ceiling baffles"],heroImage:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop"]},{id:6,title:"Luxury Penthouse Lounge",category:"Living Room",client:"Private Client",date:"June 2024",location:"Los Angeles, CA",area:"950 sq. ft.",services:["Interior Design","Furniture & Decor"],description:"An expansive penthouse living room overlooking city skyline views, framed with dark oak paneling, golden accent chairs, and an oversized modular sofa.",features:["Panoramic glass curtain wall","Custom modular velvet sofa","Gold leaf trim accent walls","Smart motorized curtain track"],heroImage:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",gallery:["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000&auto=format&fit=crop","https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=1000&auto=format&fit=crop"]}],bd=["All","Living Room","Bedroom","Kitchen","Office","Commercial"],iM=[{id:1,title:"Interior Design",description:"Customized design solutions for your dream spaces, blending functionality, luxury aesthetics, and your personal lifestyle.",icon:"Layout",image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop"},{id:2,title:"Space Planning",description:"Smart layouts that maximize space efficiency, ergonomics, traffic flow, and everyday comfort.",icon:"Maximize",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop"},{id:3,title:"Renovation",description:"Transform your existing property with modern upgrades, structural refinements, and premium architectural finishing.",icon:"Hammer",image:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1000&auto=format&fit=crop"},{id:4,title:"Furniture & Decor",description:"Stylish furniture curation and decorative styling that complements your space's unique color stories and proportions.",icon:"Armchair",image:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop"},{id:5,title:"Lighting Design",description:"Perfect layer lighting design (ambient, task, accent) to enhance the mood, depth, and architectural features.",icon:"Lamp",image:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop"},{id:6,title:"Project Management",description:"Seamless turnkey execution from initial concept, contractor supervision, material procurement to final completion.",icon:"ClipboardCheck",image:"https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop"},{id:7,title:"Residential Design",description:"Full-scale interior transformations for luxury villas, modern apartments, penthouses, and private estates.",icon:"Home",image:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"},{id:8,title:"Commercial Design",description:"High-impact retail, office, cafe, and hospitality interior design built to amplify your brand experience.",icon:"Building2",image:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop"},{id:9,title:"3D Visualization",description:"Photorealistic 3D renders and virtual walkthroughs to help you visualize every texture and lighting layout beforehand.",icon:"Box",image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1000&auto=format&fit=crop"},{id:10,title:"Custom Furniture",description:"Bespoke handcrafted tables, storage units, headboards, and cabinetry tailored specifically to your dimensions.",icon:"Palette",image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop"}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="185",rM=0,mm=1,sM=2,dl=1,aM=2,Sa=3,_r=0,mn=1,Ei=2,bi=0,Us=1,gm=2,vm=3,xm=4,oM=5,Dr=100,lM=101,cM=102,uM=103,dM=104,fM=200,hM=201,pM=202,mM=203,Rd=204,Pd=205,gM=206,vM=207,xM=208,_M=209,yM=210,SM=211,MM=212,EM=213,wM=214,Nd=0,Ld=1,Dd=2,Xs=3,Id=4,Ud=5,Fd=6,Od=7,Zv=0,TM=1,AM=2,ui=0,Qv=1,Jv=2,ex=3,tx=4,nx=5,ix=6,rx=7,sx=300,qr=301,qs=302,Zc=303,Qc=304,vc=306,kd=1e3,Ai=1001,Bd=1002,Gt=1003,CM=1004,Po=1005,Qt=1006,Jc=1007,kr=1008,Nn=1009,ax=1010,ox=1011,Za=1012,Th=1013,hi=1014,ai=1015,Ui=1016,Ah=1017,Ch=1018,Qa=1020,lx=35902,cx=35899,ux=1021,dx=1022,jn=1023,Fi=1026,Br=1027,fx=1028,bh=1029,Yr=1030,Rh=1031,Ph=1033,fl=33776,hl=33777,pl=33778,ml=33779,zd=35840,Vd=35841,Hd=35842,Gd=35843,Wd=36196,jd=37492,Xd=37496,qd=37488,Yd=37489,jl=37490,$d=37491,Kd=37808,Zd=37809,Qd=37810,Jd=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,af=37817,of=37818,lf=37819,cf=37820,uf=37821,df=36492,ff=36494,hf=36495,pf=36283,mf=36284,Xl=36285,gf=36286,bM=3200,_m=0,RM=1,tr="",bn="srgb",ql="srgb-linear",Yl="linear",nt="srgb",ns=7680,ym=519,PM=512,NM=513,LM=514,Nh=515,DM=516,IM=517,Lh=518,UM=519,Sm=35044,Mm="300 es",oi=2e3,$l=2001;function FM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OM(){const t=Kl("canvas");return t.style.display="block",t}const Em={};function wm(...t){const e="THREE."+t.shift();console.log(e,...t)}function hx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Le(...t){t=hx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=hx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Fs(...t){const e=t.join(" ");e in Em||(Em[e]=!0,Le(...t))}function kM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const BM={[Nd]:Ld,[Dd]:Fd,[Id]:Od,[Xs]:Ud,[Ld]:Nd,[Fd]:Dd,[Od]:Id,[Ud]:Xs};class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=Math.PI/180,vf=180/Math.PI;function ao(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function zM(t,e){return(t%e+e)%e}function tu(t,e,n){return(1-n)*t+n*e}function ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fh=class Fh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fh.prototype.isVector2=!0;let Ze=Fh;class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],E=s[a+3];if(p!==E||l!==f||c!==m||h!==v){let g=l*f+c*m+h*v+p*E;g<0&&(f=-f,m=-m,v=-v,E=-E,g=-g);let d=1-o;if(g<.9995){const x=Math.acos(g),M=Math.sin(x);d=Math.sin(d*x)/M,o=Math.sin(o*x)/M,l=l*d+f*o,c=c*d+m*o,h=h*d+v*o,p=p*d+E*o}else{l=l*d+f*o,c=c*d+m*o,h=h*d+v*o,p=p*d+E*o;const x=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=x,c*=x,h*=x,p*=x}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*p+l*m-c*f,e[n+1]=l*v+h*f+c*p-o*m,e[n+2]=c*v+h*m+o*f-l*p,e[n+3]=h*v-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"YXZ":this._x=f*h*p+c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"ZXY":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p-f*m*v;break;case"ZYX":this._x=f*h*p-c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p+f*m*v;break;case"YZX":this._x=f*h*p+c*m*v,this._y=c*m*p+f*h*v,this._z=c*h*v-f*m*p,this._w=c*h*p-f*m*v;break;case"XZY":this._x=f*h*p-c*m*v,this._y=c*m*p-f*h*v,this._z=c*h*v+f*m*p,this._w=c*h*p+f*m*v;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oh=class Oh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nu.copy(this).projectOnVector(e),this.sub(nu)}reflect(e){return this.sub(nu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oh.prototype.isVector3=!0;let V=Oh;const nu=new V,Tm=new ea,kh=class kh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],v=i[8],E=r[0],g=r[3],d=r[6],x=r[1],M=r[4],S=r[7],C=r[2],T=r[5],A=r[8];return s[0]=a*E+o*x+l*C,s[3]=a*g+o*M+l*T,s[6]=a*d+o*S+l*A,s[1]=c*E+h*x+p*C,s[4]=c*g+h*M+p*T,s[7]=c*d+h*S+p*A,s[2]=f*E+m*x+v*C,s[5]=f*g+m*M+v*T,s[8]=f*d+m*S+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,m=c*s-a*l,v=n*p+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=p*E,e[1]=(r*c-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=f*E,e[4]=(h*n-r*l)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*l-c*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(iu.makeScale(e,n)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(iu.makeRotation(-e)),this}translate(e,n){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kh.prototype.isMatrix3=!0;let Ie=kh;const iu=new Ie,Am=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cm=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VM(){const t={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===nt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===nt&&(r.r=Os(r.r),r.g=Os(r.g),r.b=Os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?Yl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ql]:{primaries:e,whitePoint:i,transfer:Yl,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:Am,fromXYZ:Cm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const We=VM();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class HM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{is===void 0&&(is=Kl("canvas")),is.width=e.width,is.height=e.height;const r=is.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=is}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GM=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ru(r[a].image)):s.push(ru(r[a]))}else s=ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?HM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let WM=0;const su=new V;class rn extends Qr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Ai,r=Ai,s=Qt,a=kr,o=jn,l=Nn,c=rn.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=ao(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=sx;rn.DEFAULT_ANISOTROPY=1;const Bh=class Bh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],v=l[9],E=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(m+1)/2,C=(d+1)/2,T=(h+f)/4,A=(p+E)/4,y=(v+g)/4;return M>S&&M>C?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=T/i,s=A/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=y/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=y/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(p-E)*(p-E)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(p-E)/x,this.z=(f-h)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bh.prototype.isVector4=!0;let St=Bh;class jM extends Qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Dh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends jM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class px extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XM extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zl=class Zl{constructor(e,n,i,r,s,a,o,l,c,h,p,f,m,v,E,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,h,p,f,m,v,E,g)}set(e,n,i,r,s,a,o,l,c,h,p,f,m,v,E,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=v,d[11]=E,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/rs.setFromMatrixColumn(e,0).length(),s=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,v=o*h,E=o*p;n[0]=l*h,n[4]=-l*p,n[8]=c,n[1]=m+v*c,n[5]=f-E*c,n[9]=-o*l,n[2]=E-f*c,n[6]=v+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,v=c*h,E=c*p;n[0]=f+E*o,n[4]=v*o-m,n[8]=a*c,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=E+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,v=c*h,E=c*p;n[0]=f-E*o,n[4]=-a*p,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=E-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,v=o*h,E=o*p;n[0]=l*h,n[4]=v*c-m,n[8]=f*c+E,n[1]=l*p,n[5]=E*c+f,n[9]=m*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,v=o*l,E=o*c;n[0]=l*h,n[4]=E-f*p,n[8]=v*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=m*p+v,n[10]=f-E*p}else if(e.order==="XZY"){const f=a*l,m=a*c,v=o*l,E=o*c;n[0]=l*h,n[4]=-p,n[8]=c*h,n[1]=f*p+E,n[5]=a*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=o*h,n[10]=E*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qM,e,YM)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Wi.crossVectors(i,vn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Wi.crossVectors(i,vn)),Wi.normalize(),No.crossVectors(vn,Wi),r[0]=Wi.x,r[4]=No.x,r[8]=vn.x,r[1]=Wi.y,r[5]=No.y,r[9]=vn.y,r[2]=Wi.z,r[6]=No.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],v=i[2],E=i[6],g=i[10],d=i[14],x=i[3],M=i[7],S=i[11],C=i[15],T=r[0],A=r[4],y=r[8],b=r[12],P=r[1],N=r[5],O=r[9],Y=r[13],te=r[2],k=r[6],K=r[10],H=r[14],U=r[3],j=r[7],ee=r[11],ie=r[15];return s[0]=a*T+o*P+l*te+c*U,s[4]=a*A+o*N+l*k+c*j,s[8]=a*y+o*O+l*K+c*ee,s[12]=a*b+o*Y+l*H+c*ie,s[1]=h*T+p*P+f*te+m*U,s[5]=h*A+p*N+f*k+m*j,s[9]=h*y+p*O+f*K+m*ee,s[13]=h*b+p*Y+f*H+m*ie,s[2]=v*T+E*P+g*te+d*U,s[6]=v*A+E*N+g*k+d*j,s[10]=v*y+E*O+g*K+d*ee,s[14]=v*b+E*Y+g*H+d*ie,s[3]=x*T+M*P+S*te+C*U,s[7]=x*A+M*N+S*k+C*j,s[11]=x*y+M*O+S*K+C*ee,s[15]=x*b+M*Y+S*H+C*ie,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],v=e[3],E=e[7],g=e[11],d=e[15],x=l*m-c*f,M=o*m-c*p,S=o*f-l*p,C=a*m-c*h,T=a*f-l*h,A=a*p-o*h;return n*(E*x-g*M+d*S)-i*(v*x-g*C+d*T)+r*(v*M-E*C+d*A)-s*(v*S-E*T+g*A)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return n*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],v=e[12],E=e[13],g=e[14],d=e[15],x=n*o-i*a,M=n*l-r*a,S=n*c-s*a,C=i*l-r*o,T=i*c-s*o,A=r*c-s*l,y=h*E-p*v,b=h*g-f*v,P=h*d-m*v,N=p*g-f*E,O=p*d-m*E,Y=f*d-m*g,te=x*Y-M*O+S*N+C*P-T*b+A*y;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/te;return e[0]=(o*Y-l*O+c*N)*k,e[1]=(r*O-i*Y-s*N)*k,e[2]=(E*A-g*T+d*C)*k,e[3]=(f*T-p*A-m*C)*k,e[4]=(l*P-a*Y-c*b)*k,e[5]=(n*Y-r*P+s*b)*k,e[6]=(g*S-v*A-d*M)*k,e[7]=(h*A-f*S+m*M)*k,e[8]=(a*O-o*P+c*y)*k,e[9]=(i*P-n*O-s*y)*k,e[10]=(v*T-E*S+d*x)*k,e[11]=(p*S-h*T-m*x)*k,e[12]=(o*b-a*N-l*y)*k,e[13]=(n*N-i*b+r*y)*k,e[14]=(E*M-v*C-g*x)*k,e[15]=(h*C-p*M+f*x)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,h=a+a,p=o+o,f=s*c,m=s*h,v=s*p,E=a*h,g=a*p,d=o*p,x=l*c,M=l*h,S=l*p,C=i.x,T=i.y,A=i.z;return r[0]=(1-(E+d))*C,r[1]=(m+S)*C,r[2]=(v-M)*C,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(f+d))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(v+M)*A,r[9]=(g-x)*A,r[10]=(1-(f+E))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=rs.set(r[0],r[1],r[2]).length();const o=rs.set(r[4],r[5],r[6]).length(),l=rs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),On.copy(this);const c=1/a,h=1/o,p=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=p,On.elements[9]*=p,On.elements[10]*=p,n.setFromRotationMatrix(On),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let v,E;if(l)v=s/(a-s),E=a*s/(a-s);else if(o===oi)v=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===$l)v=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,E;if(l)v=1/(a-s),E=a/(a-s);else if(o===oi)v=-2/(a-s),E=-(a+s)/(a-s);else if(o===$l)v=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Zl.prototype.isMatrix4=!0;let Nt=Zl;const rs=new V,On=new Nt,qM=new V(0,0,0),YM=new V(1,1,1),Wi=new V,No=new V,vn=new V,bm=new Nt,Rm=new ea;class $r{constructor(e=0,n=0,i=0,r=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rm.setFromEuler(this),this.setFromQuaternion(Rm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $M=0;const Pm=new V,ss=new ea,gi=new Nt,Lo=new V,da=new V,KM=new V,ZM=new ea,Nm=new V(1,0,0),Lm=new V(0,1,0),Dm=new V(0,0,1),Im={type:"added"},QM={type:"removed"},as={type:"childadded",child:null},au={type:"childremoved",child:null};class Mn extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new V,n=new $r,i=new ea,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Ie}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,n){return ss.setFromAxisAngle(e,n),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Dm,e)}translateOnAxis(e,n){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(da,Lo,this.up):gi.lookAt(Lo,da,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),ss.setFromRotationMatrix(gi),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),as.child=e,this.dispatchEvent(as),as.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QM),au.child=e,this.dispatchEvent(au),au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,KM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,ZM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Mn.DEFAULT_UP=new V(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Do extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JM={type:"move"};class ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const g=n.getJointPose(E,i),d=this._getHandJoint(c,E);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&f>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(JM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Io={h:0,s:0,l:0};function lu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=We.workingColorSpace){return this.r=e,this.g=n,this.b=i,We.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=We.workingColorSpace){if(e=zM(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=lu(a,s,e+1/3),this.g=lu(a,s,e),this.b=lu(a,s,e-1/3)}return We.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=gx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return We.workingToColorSpace(Kt.copy(this),e),Math.round(je(Kt.r*255,0,255))*65536+Math.round(je(Kt.g*255,0,255))*256+Math.round(je(Kt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=We.workingColorSpace){We.workingToColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=We.workingColorSpace){return We.workingToColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=bn){We.workingToColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(Io);const i=tu(ji.h,Io.h,n),r=tu(ji.s,Io.s,n),s=tu(ji.l,Io.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Je;Je.NAMES=gx;class eE extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const kn=new V,vi=new V,cu=new V,xi=new V,os=new V,ls=new V,Um=new V,uu=new V,du=new V,fu=new V,hu=new St,pu=new St,mu=new St;class Wn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),vi.subVectors(i,n),cu.subVectors(e,n);const a=kn.dot(kn),o=kn.dot(vi),l=kn.dot(cu),c=vi.dot(vi),h=vi.dot(cu),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,v=(a*h-o*l)*f;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return hu.setScalar(0),pu.setScalar(0),mu.setScalar(0),hu.fromBufferAttribute(e,n),pu.fromBufferAttribute(e,i),mu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(hu,s.x),a.addScaledVector(pu,s.y),a.addScaledVector(mu,s.z),a}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),vi.subVectors(e,n),kn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),kn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;os.subVectors(r,i),ls.subVectors(s,i),uu.subVectors(e,i);const l=os.dot(uu),c=ls.dot(uu);if(l<=0&&c<=0)return n.copy(i);du.subVectors(e,r);const h=os.dot(du),p=ls.dot(du);if(h>=0&&p<=h)return n.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(os,a);fu.subVectors(e,s);const m=os.dot(fu),v=ls.dot(fu);if(v>=0&&m<=v)return n.copy(s);const E=m*c-l*v;if(E<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(ls,o);const g=h*v-m*p;if(g<=0&&p-h>=0&&m-v>=0)return Um.subVectors(s,r),o=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(Um,o);const d=1/(g+E+f);return a=E*d,o=f*d,n.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oo{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uo.copy(i.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Fo.subVectors(this.max,fa),cs.subVectors(e.a,fa),us.subVectors(e.b,fa),ds.subVectors(e.c,fa),Xi.subVectors(us,cs),qi.subVectors(ds,us),Ar.subVectors(cs,ds);let n=[0,-Xi.z,Xi.y,0,-qi.z,qi.y,0,-Ar.z,Ar.y,Xi.z,0,-Xi.x,qi.z,0,-qi.x,Ar.z,0,-Ar.x,-Xi.y,Xi.x,0,-qi.y,qi.x,0,-Ar.y,Ar.x,0];return!gu(n,cs,us,ds,Fo)||(n=[1,0,0,0,1,0,0,0,1],!gu(n,cs,us,ds,Fo))?!1:(Oo.crossVectors(Xi,qi),n=[Oo.x,Oo.y,Oo.z],gu(n,cs,us,ds,Fo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new V,new V,new V,new V,new V,new V,new V,new V],Bn=new V,Uo=new oo,cs=new V,us=new V,ds=new V,Xi=new V,qi=new V,Ar=new V,fa=new V,Fo=new V,Oo=new V,Cr=new V;function gu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Cr.fromArray(t,s);const o=r.x*Math.abs(Cr.x)+r.y*Math.abs(Cr.y)+r.z*Math.abs(Cr.z),l=e.dot(Cr),c=n.dot(Cr),h=i.dot(Cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Rt=new V,ko=new Ze;let tE=0;class fi extends Qr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tE++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sm,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ko.fromBufferAttribute(this,n),ko.applyMatrix3(e),this.setXY(n,ko.x,ko.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ua(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ua(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ua(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ua(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ua(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vx extends fi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class xx extends fi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pi extends fi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const nE=new oo,ha=new V,vu=new V;class Ih{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):nE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const n=ha.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(vu)),this.expandByPoint(ha.copy(e.center).sub(vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let iE=0;const Cn=new Nt,xu=new Mn,fs=new V,xn=new oo,pa=new oo,kt=new V;class Bi extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iE++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(FM(e)?xx:vx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ie().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ih);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(xn.min,pa.min),xn.expandByPoint(kt),kt.addVectors(xn.max,pa.max),xn.expandByPoint(kt)):(xn.expandByPoint(pa.min),xn.expandByPoint(pa.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(fs.fromBufferAttribute(e,c),kt.add(fs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new fi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new V,l[y]=new V;const c=new V,h=new V,p=new V,f=new Ze,m=new Ze,v=new Ze,E=new V,g=new V;function d(y,b,P){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,b),p.fromBufferAttribute(i,P),f.fromBufferAttribute(s,y),m.fromBufferAttribute(s,b),v.fromBufferAttribute(s,P),h.sub(c),p.sub(c),m.sub(f),v.sub(f);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(E.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(N),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(N),o[y].add(E),o[b].add(E),o[P].add(E),l[y].add(g),l[b].add(g),l[P].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,b=x.length;y<b;++y){const P=x[y],N=P.start,O=P.count;for(let Y=N,te=N+O;Y<te;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const M=new V,S=new V,C=new V,T=new V;function A(y){C.fromBufferAttribute(r,y),T.copy(C);const b=o[y];M.copy(b),M.sub(C.multiplyScalar(C.dot(b))).normalize(),S.crossVectors(T,b);const N=S.dot(l[y])<0?-1:1;a.setXYZW(y,M.x,M.y,M.z,N)}for(let y=0,b=x.length;y<b;++y){const P=x[y],N=P.start,O=P.count;for(let Y=N,te=N+O;Y<te;Y+=3)A(e.getX(Y+0)),A(e.getX(Y+1)),A(e.getX(Y+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new fi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,h=new V,p=new V;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),E=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,v=0;for(let E=0,g=l.length;E<g;E++){o.isInterleavedBufferAttribute?m=l[E]*o.data.stride+o.offset:m=l[E]*h;for(let d=0;d<h;d++)f[v++]=c[m++]}return new fi(f,h,p)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Bi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(n))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let rE=0;class xc extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Us,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Le(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Le(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==_r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yi=new V,_u=new V,Bo=new V,Yi=new V,yu=new V,zo=new V,Su=new V;class sE{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_u.copy(e).add(n).multiplyScalar(.5),Bo.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(_u);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Bo),o=Yi.dot(this.direction),l=-Yi.dot(Bo),c=Yi.lengthSq(),h=Math.abs(1-a*a);let p,f,m,v;if(h>0)if(p=a*l-o,f=a*o-l,v=s*h,p>=0)if(f>=-v)if(f<=v){const E=1/h;p*=E,f*=E,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-v?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=v?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(_u).addScaledVector(Bo,f),m}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){yu.subVectors(n,e),zo.subVectors(i,e),Su.crossVectors(yu,zo);let a=this.direction.dot(Su),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const l=o*this.direction.dot(zo.crossVectors(Yi,zo));if(l<0)return null;const c=o*this.direction.dot(yu.cross(Yi));if(c<0||l+c>a)return null;const h=-o*Yi.dot(Su);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _x extends xc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=Zv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fm=new Nt,br=new sE,Vo=new Ih,Om=new V,Ho=new V,Go=new V,Wo=new V,Mu=new V,jo=new V,km=new V,Xo=new V;class pi extends Mn{constructor(e=new Bi,n=new _x){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){jo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Mu.fromBufferAttribute(p,e),a?jo.addScaledVector(Mu,h):jo.addScaledVector(Mu.sub(n),h))}n.add(jo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Vo.containsPoint(br.origin)===!1&&(br.intersectSphere(Vo,Om)===null||br.origin.distanceToSquared(Om)>(e.far-e.near)**2))&&(Fm.copy(s).invert(),br.copy(e.ray).applyMatrix4(Fm),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,C=M;S<C;S+=3){const T=o.getX(S),A=o.getX(S+1),y=o.getX(S+2);r=qo(this,d,e,i,c,h,p,T,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let g=v,d=E;g<d;g+=3){const x=o.getX(g),M=o.getX(g+1),S=o.getX(g+2);r=qo(this,a,e,i,c,h,p,x,M,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,E=f.length;v<E;v++){const g=f[v],d=a[g.materialIndex],x=Math.max(g.start,m.start),M=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=x,C=M;S<C;S+=3){const T=S,A=S+1,y=S+2;r=qo(this,d,e,i,c,h,p,T,A,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let g=v,d=E;g<d;g+=3){const x=g,M=g+1,S=g+2;r=qo(this,a,e,i,c,h,p,x,M,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function aE(t,e,n,i,r,s,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===_r,o),l===null)return null;Xo.copy(o),Xo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Xo);return c<n.near||c>n.far?null:{distance:c,point:Xo.clone(),object:t}}function qo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ho),t.getVertexPosition(l,Go),t.getVertexPosition(c,Wo);const h=aE(t,e,n,i,Ho,Go,Wo,km);if(h){const p=new V;Wn.getBarycoord(km,Ho,Go,Wo,p),r&&(h.uv=Wn.getInterpolatedAttribute(r,o,l,c,p,new Ze)),s&&(h.uv1=Wn.getInterpolatedAttribute(s,o,l,c,p,new Ze)),a&&(h.normal=Wn.getInterpolatedAttribute(a,o,l,c,p,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new V,materialIndex:0};Wn.getNormal(Ho,Go,Wo,f.normal),h.face=f,h.barycoord=p}return h}class oE extends rn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Gt,h=Gt,p,f){super(null,a,o,l,c,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=new V,lE=new V,cE=new Ie;class Lr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Eu.subVectors(i,n).cross(lE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Eu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cE.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Ih,uE=new Ze(.5,.5),Yo=new V;class yx{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,a=new Lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],f=s[6],m=s[7],v=s[8],E=s[9],g=s[10],d=s[11],x=s[12],M=s[13],S=s[14],C=s[15];if(r[0].setComponents(c-a,m-h,d-v,C-x).normalize(),r[1].setComponents(c+a,m+h,d+v,C+x).normalize(),r[2].setComponents(c+o,m+p,d+E,C+M).normalize(),r[3].setComponents(c-o,m-p,d-E,C-M).normalize(),i)r[4].setComponents(l,f,g,S).normalize(),r[5].setComponents(c-l,m-f,d-g,C-S).normalize();else if(r[4].setComponents(c-l,m-f,d-g,C-S).normalize(),n===oi)r[5].setComponents(c+l,m+f,d+g,C+S).normalize();else if(n===$l)r[5].setComponents(l,f,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const n=uE.distanceTo(e.center);return Rr.radius=.7071067811865476+n,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Yo.x=r.normal.x>0?e.max.x:e.min.x,Yo.y=r.normal.y>0?e.max.y:e.min.y,Yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sx extends rn{constructor(e=[],n=qr,i,r,s,a,o,l,c,h){super(e,n,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ys extends rn{constructor(e,n,i=hi,r,s,a,o=Gt,l=Gt,c,h=Fi,p=1){if(h!==Fi&&h!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class dE extends Ys{constructor(e,n=hi,i=qr,r,s,a=Gt,o=Gt,l,c=Fi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Mx extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lo extends Bi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pi(c,3)),this.setAttribute("normal",new Pi(h,3)),this.setAttribute("uv",new Pi(p,2));function v(E,g,d,x,M,S,C,T,A,y,b){const P=S/A,N=C/y,O=S/2,Y=C/2,te=T/2,k=A+1,K=y+1;let H=0,U=0;const j=new V;for(let ee=0;ee<K;ee++){const ie=ee*N-Y;for(let le=0;le<k;le++){const Ve=le*P-O;j[E]=Ve*x,j[g]=ie*M,j[d]=te,c.push(j.x,j.y,j.z),j[E]=0,j[g]=0,j[d]=T>0?1:-1,h.push(j.x,j.y,j.z),p.push(le/A),p.push(1-ee/y),H+=1}}for(let ee=0;ee<y;ee++)for(let ie=0;ie<A;ie++){const le=f+ie+k*ee,Ve=f+ie+k*(ee+1),et=f+(ie+1)+k*(ee+1),Ge=f+(ie+1)+k*ee;l.push(le,Ve,Ge),l.push(Ve,et,Ge),U+=6}o.addGroup(m,U,b),m+=U,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class co extends Bi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=n/l,m=[],v=[],E=[],g=[];for(let d=0;d<h;d++){const x=d*f-a;for(let M=0;M<c;M++){const S=M*p-s;v.push(S,-x,0),E.push(0,0,1),g.push(M/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const M=x+c*d,S=x+c*(d+1),C=x+1+c*(d+1),T=x+1+c*d;m.push(M,S,T),m.push(S,C,T)}this.setIndex(m),this.setAttribute("position",new Pi(v,3)),this.setAttribute("normal",new Pi(E,3)),this.setAttribute("uv",new Pi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.widthSegments,e.heightSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Bm(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Bm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const r in i)e[r]=i[r]}return e}function Bm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function fE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ex(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}const hE={clone:$s,merge:en};var pE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends xc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pE,this.fragmentShader=mE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=fE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new V().fromArray(r.value);break;case"v4":this.uniforms[i].value=new St().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Nt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class gE extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vE extends xc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xE extends xc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $o=new V,Ko=new ea,ti=new V;class wx extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($o,Ko,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Ko,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose($o,Ko,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($o,Ko,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new V,zm=new Ze,Vm=new Ze;class Gn extends wx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,zm,Vm),n.subVectors(Vm,zm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(eu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Uh extends wx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=-90,ps=1;class _E extends Mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(hs,ps,e,n);r.layers=this.layers,this.add(r);const s=new Gn(hs,ps,e,n);s.layers=this.layers,this.add(s);const a=new Gn(hs,ps,e,n);a.layers=this.layers,this.add(a);const o=new Gn(hs,ps,e,n);o.layers=this.layers,this.add(o);const l=new Gn(hs,ps,e,n);l.layers=this.layers,this.add(l);const c=new Gn(hs,ps,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$l)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class yE extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zh=class zh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};zh.prototype.isMatrix2=!0;let Hm=zh;function Gm(t,e,n,i){const r=SE(i);switch(n){case ux:return t*e;case fx:return t*e/r.components*r.byteLength;case bh:return t*e/r.components*r.byteLength;case Yr:return t*e*2/r.components*r.byteLength;case Rh:return t*e*2/r.components*r.byteLength;case dx:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case Ph:return t*e*4/r.components*r.byteLength;case fl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Gd:return Math.max(t,16)*Math.max(e,8)/4;case zd:case Hd:return Math.max(t,8)*Math.max(e,8)/2;case Wd:case jd:case qd:case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xd:case jl:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case df:case ff:case hf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case pf:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xl:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SE(t){switch(t){case Nn:case ax:return{byteLength:1,components:1};case Za:case ox:case Ui:return{byteLength:2,components:1};case Ah:case Ch:return{byteLength:2,components:4};case hi:case Th:case ai:return{byteLength:4,components:1};case lx:case cx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ME(t){const e=new WeakMap;function n(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(t.bindBuffer(c,o),p.length===0)t.bufferSubData(c,0,h);else{p.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<p.length;m++){const v=p[f],E=p[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++f,p[f]=E)}p.length=f+1;for(let m=0,v=p.length;m<v;m++){const E=p[m];t.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var EE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,PE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,LE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,HE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,GE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,XE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$E=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ew=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ow=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,mw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ew=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ww=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Aw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Hw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$w=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,aT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ET=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:EE,alphahash_pars_fragment:wE,alphamap_fragment:TE,alphamap_pars_fragment:AE,alphatest_fragment:CE,alphatest_pars_fragment:bE,aomap_fragment:RE,aomap_pars_fragment:PE,batching_pars_vertex:NE,batching_vertex:LE,begin_vertex:DE,beginnormal_vertex:IE,bsdfs:UE,iridescence_fragment:FE,bumpmap_pars_fragment:OE,clipping_planes_fragment:kE,clipping_planes_pars_fragment:BE,clipping_planes_pars_vertex:zE,clipping_planes_vertex:VE,color_fragment:HE,color_pars_fragment:GE,color_pars_vertex:WE,color_vertex:jE,common:XE,cube_uv_reflection_fragment:qE,defaultnormal_vertex:YE,displacementmap_pars_vertex:$E,displacementmap_vertex:KE,emissivemap_fragment:ZE,emissivemap_pars_fragment:QE,colorspace_fragment:JE,colorspace_pars_fragment:ew,envmap_fragment:tw,envmap_common_pars_fragment:nw,envmap_pars_fragment:iw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:mw,envmap_vertex:sw,fog_vertex:aw,fog_pars_vertex:ow,fog_fragment:lw,fog_pars_fragment:cw,gradientmap_pars_fragment:uw,lightmap_pars_fragment:dw,lights_lambert_fragment:fw,lights_lambert_pars_fragment:hw,lights_pars_begin:pw,lights_toon_fragment:gw,lights_toon_pars_fragment:vw,lights_phong_fragment:xw,lights_phong_pars_fragment:_w,lights_physical_fragment:yw,lights_physical_pars_fragment:Sw,lights_fragment_begin:Mw,lights_fragment_maps:Ew,lights_fragment_end:ww,lightprobes_pars_fragment:Tw,logdepthbuf_fragment:Aw,logdepthbuf_pars_fragment:Cw,logdepthbuf_pars_vertex:bw,logdepthbuf_vertex:Rw,map_fragment:Pw,map_pars_fragment:Nw,map_particle_fragment:Lw,map_particle_pars_fragment:Dw,metalnessmap_fragment:Iw,metalnessmap_pars_fragment:Uw,morphinstance_vertex:Fw,morphcolor_vertex:Ow,morphnormal_vertex:kw,morphtarget_pars_vertex:Bw,morphtarget_vertex:zw,normal_fragment_begin:Vw,normal_fragment_maps:Hw,normal_pars_fragment:Gw,normal_pars_vertex:Ww,normal_vertex:jw,normalmap_pars_fragment:Xw,clearcoat_normal_fragment_begin:qw,clearcoat_normal_fragment_maps:Yw,clearcoat_pars_fragment:$w,iridescence_pars_fragment:Kw,opaque_fragment:Zw,packing:Qw,premultiplied_alpha_fragment:Jw,project_vertex:eT,dithering_fragment:tT,dithering_pars_fragment:nT,roughnessmap_fragment:iT,roughnessmap_pars_fragment:rT,shadowmap_pars_fragment:sT,shadowmap_pars_vertex:aT,shadowmap_vertex:oT,shadowmask_pars_fragment:lT,skinbase_vertex:cT,skinning_pars_vertex:uT,skinning_vertex:dT,skinnormal_vertex:fT,specularmap_fragment:hT,specularmap_pars_fragment:pT,tonemapping_fragment:mT,tonemapping_pars_fragment:gT,transmission_fragment:vT,transmission_pars_fragment:xT,uv_pars_fragment:_T,uv_pars_vertex:yT,uv_vertex:ST,worldpos_vertex:MT,background_vert:ET,background_frag:wT,backgroundCube_vert:TT,backgroundCube_frag:AT,cube_vert:CT,cube_frag:bT,depth_vert:RT,depth_frag:PT,distance_vert:NT,distance_frag:LT,equirect_vert:DT,equirect_frag:IT,linedashed_vert:UT,linedashed_frag:FT,meshbasic_vert:OT,meshbasic_frag:kT,meshlambert_vert:BT,meshlambert_frag:zT,meshmatcap_vert:VT,meshmatcap_frag:HT,meshnormal_vert:GT,meshnormal_frag:WT,meshphong_vert:jT,meshphong_frag:XT,meshphysical_vert:qT,meshphysical_frag:YT,meshtoon_vert:$T,meshtoon_frag:KT,points_vert:ZT,points_frag:QT,shadow_vert:JT,shadow_frag:e2,sprite_vert:t2,sprite_frag:n2},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},ri={basic:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:en([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:en([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:en([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:en([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:en([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:en([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:en([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:en([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:en([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:en([me.common,me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:en([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};ri.physical={uniforms:en([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Zo={r:0,b:0,g:0},i2=new Nt,Ax=new Ie;Ax.set(-1,0,0,0,1,0,0,0,1);function r2(t,e,n,i,r,s){const a=new Je(0);let o=r===!0?0:1,l,c,h=null,p=0,f=null;function m(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=e.get(M,S)}return M}function v(x){let M=!1;const S=m(x);S===null?g(a,o):S&&S.isColor&&(g(S,1),M=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(x,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===vc)?(c===void 0&&(c=new pi(new lo(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:$s(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(i2.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ax),c.material.toneMapped=We.getTransfer(S.colorSpace)!==nt,(h!==S||p!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new pi(new co(2,2),new Kn({name:"BackgroundMaterial",uniforms:$s(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=We.getTransfer(S.colorSpace)!==nt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){x.getRGB(Zo,Ex(t)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,M,s)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:v,addToRenderList:E,dispose:d}}function s2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(N,O,Y,te,k){let K=!1;const H=p(N,te,Y,O);s!==H&&(s=H,c(s.object)),K=m(N,te,Y,k),K&&v(N,te,Y,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(N,O,Y,te),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(N){return t.bindVertexArray(N)}function h(N){return t.deleteVertexArray(N)}function p(N,O,Y,te){const k=te.wireframe===!0;let K=i[O.id];K===void 0&&(K={},i[O.id]=K);const H=N.isInstancedMesh===!0?N.id:0;let U=K[H];U===void 0&&(U={},K[H]=U);let j=U[Y.id];j===void 0&&(j={},U[Y.id]=j);let ee=j[k];return ee===void 0&&(ee=f(l()),j[k]=ee),ee}function f(N){const O=[],Y=[],te=[];for(let k=0;k<n;k++)O[k]=0,Y[k]=0,te[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:Y,attributeDivisors:te,object:N,attributes:{},index:null}}function m(N,O,Y,te){const k=s.attributes,K=O.attributes;let H=0;const U=Y.getAttributes();for(const j in U)if(U[j].location>=0){const ie=k[j];let le=K[j];if(le===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(le=N.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;H++}return s.attributesNum!==H||s.index!==te}function v(N,O,Y,te){const k={},K=O.attributes;let H=0;const U=Y.getAttributes();for(const j in U)if(U[j].location>=0){let ie=K[j];ie===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));const le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),k[j]=le,H++}s.attributes=k,s.attributesNum=H,s.index=te}function E(){const N=s.newAttributes;for(let O=0,Y=N.length;O<Y;O++)N[O]=0}function g(N){d(N,0)}function d(N,O){const Y=s.newAttributes,te=s.enabledAttributes,k=s.attributeDivisors;Y[N]=1,te[N]===0&&(t.enableVertexAttribArray(N),te[N]=1),k[N]!==O&&(t.vertexAttribDivisor(N,O),k[N]=O)}function x(){const N=s.newAttributes,O=s.enabledAttributes;for(let Y=0,te=O.length;Y<te;Y++)O[Y]!==N[Y]&&(t.disableVertexAttribArray(Y),O[Y]=0)}function M(N,O,Y,te,k,K,H){H===!0?t.vertexAttribIPointer(N,O,Y,k,K):t.vertexAttribPointer(N,O,Y,te,k,K)}function S(N,O,Y,te){E();const k=te.attributes,K=Y.getAttributes(),H=O.defaultAttributeValues;for(const U in K){const j=K[U];if(j.location>=0){let ee=k[U];if(ee===void 0&&(U==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),U==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const ie=ee.normalized,le=ee.itemSize,Ve=e.get(ee);if(Ve===void 0)continue;const et=Ve.buffer,Ge=Ve.type,$=Ve.bytesPerElement,oe=Ge===t.INT||Ge===t.UNSIGNED_INT||ee.gpuType===Th;if(ee.isInterleavedBufferAttribute){const se=ee.data,De=se.stride,Ue=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Pe=0;Pe<j.locationSize;Pe++)d(j.location+Pe,se.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<j.locationSize;Pe++)g(j.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,et);for(let Pe=0;Pe<j.locationSize;Pe++)M(j.location+Pe,le/j.locationSize,Ge,ie,De*$,(Ue+le/j.locationSize*Pe)*$,oe)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)d(j.location+se,ee.meshPerAttribute);N.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<j.locationSize;se++)g(j.location+se);t.bindBuffer(t.ARRAY_BUFFER,et);for(let se=0;se<j.locationSize;se++)M(j.location+se,le/j.locationSize,Ge,ie,le*$,le/j.locationSize*se*$,oe)}}else if(H!==void 0){const ie=H[U];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(j.location,ie);break;case 3:t.vertexAttrib3fv(j.location,ie);break;case 4:t.vertexAttrib4fv(j.location,ie);break;default:t.vertexAttrib1fv(j.location,ie)}}}}x()}function C(){b();for(const N in i){const O=i[N];for(const Y in O){const te=O[Y];for(const k in te){const K=te[k];for(const H in K)h(K[H].object),delete K[H];delete te[k]}}delete i[N]}}function T(N){if(i[N.id]===void 0)return;const O=i[N.id];for(const Y in O){const te=O[Y];for(const k in te){const K=te[k];for(const H in K)h(K[H].object),delete K[H];delete te[k]}}delete i[N.id]}function A(N){for(const O in i){const Y=i[O];for(const te in Y){const k=Y[te];if(k[N.id]===void 0)continue;const K=k[N.id];for(const H in K)h(K[H].object),delete K[H];delete k[N.id]}}}function y(N){for(const O in i){const Y=i[O],te=N.isInstancedMesh===!0?N.id:0,k=Y[te];if(k!==void 0){for(const K in k){const H=k[K];for(const U in H)h(H[U].object),delete H[U];delete k[K]}delete Y[te],Object.keys(Y).length===0&&delete i[O]}}}function b(){P(),a=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:g,disableUnusedAttributes:x}}function a2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,h){h!==0&&(t.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function o2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==jn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Nn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ai&&!y)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Le("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:C,samples:T}}function l2(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Lr,o=new Ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const v=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,d=t.get(p);if(!r||v===null||v.length===0||s&&!g)s?h(null):c();else{const x=s?0:i,M=x*4;let S=d.clippingState||null;l.value=S,S=h(v,f,M,m);for(let C=0;C!==M;++C)S[C]=n[C];d.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,v){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=l.value,v!==!0||g===null){const d=m+E*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,S=m;M!==E;++M,S+=4)a.copy(p[M]).applyMatrix4(x,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const sr=4,Wm=[.125,.215,.35,.446,.526,.582],Ir=20,c2=256,ma=new Uh,jm=new Je;let wu=null,Tu=0,Au=0,Cu=!1;const u2=new V;class Xm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=u2}=s;wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ym(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wu,Tu,Au),this._renderer.xr.enabled=Cu,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ui,format:jn,colorSpace:ql,depthBuffer:!1},r=qm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=d2(s)),this._blurMaterial=h2(s,e,n),this._ggxMaterial=f2(s,e,n)}return r}_compileMaterial(e){const n=new pi(new Bi,e);this._renderer.compile(n,ma)}_sceneToCubeUV(e,n,i,r,s){const l=new Gn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(jm),p.toneMapping=ui,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pi(new lo,new _x({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let d=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,d=!0):(g.color.copy(jm),d=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const C=this._cubeSize;ms(r,S*C,M>2?C:0,C,C),p.setRenderTarget(r),d&&p.render(E,l),p.render(e,l)}p.toneMapping=m,p.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===qr||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ym());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ms(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ma)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),f=0+c*1.25,m=p*f,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-sr?i-v+sr:0),d=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=v-n,ms(s,g,d,3*E,2*E),r.setRenderTarget(s),r.render(o,ma),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ms(e,g,d,3*E,2*E),r.setRenderTarget(e),r.render(o,ma)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=c;const f=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ir-1),E=s/v,g=isFinite(s)?1+Math.floor(h*E):Ir;g>Ir&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ir}`);const d=[];let x=0;for(let A=0;A<Ir;++A){const y=A/E,b=Math.exp(-y*y/2);d.push(b),A===0?x+=b:A<g&&(x+=2*b)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-i;const S=this._sizeLods[r],C=3*S*(r>M-sr?r-M+sr:0),T=4*(this._cubeSize-S);ms(n,C,T,3*S,2*S),l.setRenderTarget(n),l.render(p,ma)}}function d2(t){const e=[],n=[],i=[];let r=t;const s=t-sr+1+Wm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-sr?l=Wm[a-t+sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,p=1+c,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,v=6,E=3,g=2,d=1,x=new Float32Array(E*v*m),M=new Float32Array(g*v*m),S=new Float32Array(d*v*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,y=T>2?0:-1,b=[A,y,0,A+2/3,y,0,A+2/3,y+1,0,A,y,0,A+2/3,y+1,0,A,y+1,0];x.set(b,E*v*T),M.set(f,g*v*T);const P=[T,T,T,T,T,T];S.set(P,d*v*T)}const C=new Bi;C.setAttribute("position",new fi(x,E)),C.setAttribute("uv",new fi(M,g)),C.setAttribute("faceIndex",new fi(S,d)),i.push(new pi(C,null)),r>sr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function qm(t,e,n){const i=new di(t,e,n);return i.texture.mapping=vc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ms(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function f2(t,e,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:c2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function h2(t,e,n){const i=new Float32Array(Ir),r=new V(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Ym(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function $m(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Cx extends di{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new lo(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:bi});s.uniforms.tEquirect.value=n;const a=new pi(r,s),o=n.minFilter;return n.minFilter===kr&&(n.minFilter=Qt),new _E(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function p2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Zc||m===Qc)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const E=new Cx(v.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",c),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,v=m===Zc||m===Qc,E=m===qr||m===qs;if(v||E){let g=n.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Xm(t)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return v&&x&&x.height>0||E&&x&&l(x)?(i===null&&(i=new Xm(t)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,m){return m===Zc?f.mapping=qr:m===Qc&&(f.mapping=qs),f}function l(f){let m=0;const v=6;for(let E=0;E<v;E++)f[E]!==void 0&&m++;return m===v}function c(f){const m=f.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function m2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fs("WebGLRenderer: "+i+" extension not supported."),r}}}function g2(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function c(p){const f=[],m=p.index,v=p.attributes.position;let E=0;if(v===void 0)return;if(m!==null){const x=m.array;E=m.version;for(let M=0,S=x.length;M<S;M+=3){const C=x[M+0],T=x[M+1],A=x[M+2];f.push(C,T,T,A,A,C)}}else{const x=v.array;E=v.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const C=M+0,T=M+1,A=M+2;f.push(C,T,T,A,A,C)}}const g=new(v.count>=65535?xx:vx)(f,1);g.version=E;const d=s.get(p);d&&e.remove(d),s.set(p,g)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function v2(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function c(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let E=0;for(let g=0;g<m;g++)E+=f[g];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function x2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _2(t,e,n){const i=new WeakMap,r=new St;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let P=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),E===!0&&(S=2),g===!0&&(S=3);let C=o.attributes.position.count*S,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*T*4*p),y=new px(A,C,T,p);y.type=ai,y.needsUpdate=!0;const b=S*4;for(let N=0;N<p;N++){const O=d[N],Y=x[N],te=M[N],k=C*T*4*N;for(let K=0;K<O.count;K++){const H=K*b;v===!0&&(r.fromBufferAttribute(O,K),A[k+H+0]=r.x,A[k+H+1]=r.y,A[k+H+2]=r.z,A[k+H+3]=0),E===!0&&(r.fromBufferAttribute(Y,K),A[k+H+4]=r.x,A[k+H+5]=r.y,A[k+H+6]=r.z,A[k+H+7]=0),g===!0&&(r.fromBufferAttribute(te,K),A[k+H+8]=r.x,A[k+H+9]=r.y,A[k+H+10]=r.z,A[k+H+11]=te.itemSize===4?r.w:1)}}f={count:p,texture:y,size:new Ze(C,T)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const E=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",E),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function y2(t,e,n,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,p=c.geometry,f=e.get(c,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const S2={[Qv]:"LINEAR_TONE_MAPPING",[Jv]:"REINHARD_TONE_MAPPING",[ex]:"CINEON_TONE_MAPPING",[tx]:"ACES_FILMIC_TONE_MAPPING",[ix]:"AGX_TONE_MAPPING",[rx]:"NEUTRAL_TONE_MAPPING",[nx]:"CUSTOM_TONE_MAPPING"};function M2(t,e,n,i,r,s){const a=new di(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ys(e,n):void 0}),o=new di(e,n,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),l=new Bi;l.setAttribute("position",new Pi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Pi([0,2,0,0,2,0],2));const c=new gE({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new pi(l,c),p=new Uh(-1,1,1,-1,0,1);let f=null,m=null,v=!1,E,g=null,d=[],x=!1;this.setSize=function(M,S){a.setSize(M,S),o.setSize(M,S);for(let C=0;C<d.length;C++){const T=d[C];T.setSize&&T.setSize(M,S)}},this.setEffects=function(M){d=M,x=d.length>0&&d[0].isRenderPass===!0;const S=a.width,C=a.height;for(let T=0;T<d.length;T++){const A=d[T];A.setSize&&A.setSize(S,C)}},this.begin=function(M,S){if(v||M.toneMapping===ui&&d.length===0)return!1;if(g=S,S!==null){const C=S.width,T=S.height;(a.width!==C||a.height!==T)&&this.setSize(C,T)}return x===!1&&M.setRenderTarget(a),E=M.toneMapping,M.toneMapping=ui,!0},this.hasRenderPass=function(){return x},this.end=function(M,S){M.toneMapping=E,v=!0;let C=a,T=o;for(let A=0;A<d.length;A++){const y=d[A];if(y.enabled!==!1&&(y.render(M,T,C,S),y.needsSwap!==!1)){const b=C;C=T,T=b}}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,c.defines={},We.getTransfer(f)===nt&&(c.defines.SRGB_TRANSFER="");const A=S2[m];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=C.texture,M.setRenderTarget(g),M.render(h,p),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const bx=new rn,xf=new Ys(1,1),Rx=new px,Px=new XM,Nx=new Sx,Km=[],Zm=[],Qm=new Float32Array(16),Jm=new Float32Array(9),eg=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Km[r];if(s===void 0&&(s=new Float32Array(r),Km[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yc(t,e){let n=Zm[e];n===void 0&&(n=new Int32Array(e),Zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function E2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function w2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function T2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function A2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function C2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;eg.set(i),t.uniformMatrix2fv(this.addr,!1,eg),Ft(n,i)}}function b2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Jm.set(i),t.uniformMatrix3fv(this.addr,!1,Jm),Ft(n,i)}}function R2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Qm.set(i),t.uniformMatrix4fv(this.addr,!1,Qm),Ft(n,i)}}function P2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function L2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function I2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function F2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function k2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(xf.compareFunction=n.isReversedDepthBuffer()?Lh:Nh,s=xf):s=bx,n.setTexture2D(e||s,r)}function B2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Px,r)}function z2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Nx,r)}function V2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Rx,r)}function H2(t){switch(t){case 5126:return E2;case 35664:return w2;case 35665:return T2;case 35666:return A2;case 35674:return C2;case 35675:return b2;case 35676:return R2;case 5124:case 35670:return P2;case 35667:case 35671:return N2;case 35668:case 35672:return L2;case 35669:case 35673:return D2;case 5125:return I2;case 36294:return U2;case 36295:return F2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return k2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return z2;case 36289:case 36303:case 36311:case 36292:return V2}}function G2(t,e){t.uniform1fv(this.addr,e)}function W2(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function j2(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function X2(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function q2(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Y2(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $2(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function K2(t,e){t.uniform1iv(this.addr,e)}function Z2(t,e){t.uniform2iv(this.addr,e)}function Q2(t,e){t.uniform3iv(this.addr,e)}function J2(t,e){t.uniform4iv(this.addr,e)}function eA(t,e){t.uniform1uiv(this.addr,e)}function tA(t,e){t.uniform2uiv(this.addr,e)}function nA(t,e){t.uniform3uiv(this.addr,e)}function iA(t,e){t.uniform4uiv(this.addr,e)}function rA(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=xf:a=bx;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function sA(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Px,s[a])}function aA(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Nx,s[a])}function oA(t,e,n){const i=this.cache,r=e.length,s=yc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Rx,s[a])}function lA(t){switch(t){case 5126:return G2;case 35664:return W2;case 35665:return j2;case 35666:return X2;case 35674:return q2;case 35675:return Y2;case 35676:return $2;case 5124:case 35670:return K2;case 35667:case 35671:return Z2;case 35668:case 35672:return Q2;case 35669:case 35673:return J2;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return aA;case 36289:case 36303:case 36311:case 36292:return oA}}class cA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=H2(n.type)}}class uA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lA(n.type)}}class dA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function tg(t,e){t.seq.push(e),t.map[e.id]=e}function fA(t,e,n){const i=t.name,r=i.length;for(bu.lastIndex=0;;){const s=bu.exec(i),a=bu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tg(n,c===void 0?new cA(o,t,e):new uA(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new dA(o),tg(n,p)),n=p}}}class gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);fA(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function ng(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hA=37297;let pA=0;function mA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const ig=new Ie;function gA(t){We._getMatrix(ig,We.workingColorSpace,t);const e=`mat3( ${ig.elements.map(n=>n.toFixed(4))} )`;switch(We.getTransfer(t)){case Yl:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function rg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+mA(t.getShaderSource(e),o)}else return s}function vA(t,e){const n=gA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const xA={[Qv]:"Linear",[Jv]:"Reinhard",[ex]:"Cineon",[tx]:"ACESFilmic",[ix]:"AgX",[rx]:"Neutral",[nx]:"Custom"};function _A(t,e){const n=xA[e];return n===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qo=new V;function yA(){We.getLuminanceCoefficients(Qo);const t=Qo.x.toFixed(4),e=Qo.y.toFixed(4),n=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function MA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ma(t){return t!==""}function sg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wA=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(t){return t.replace(wA,AA)}const TA=new Map;function AA(t,e){let n=ke[e];if(n===void 0){const i=TA.get(e);if(i!==void 0)n=ke[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _f(n)}const CA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function og(t){return t.replace(CA,bA)}function bA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const RA={[dl]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function PA(t){return RA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NA={[qr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[vc]:"ENVMAP_TYPE_CUBE_UV"};function LA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":NA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const DA={[qs]:"ENVMAP_MODE_REFRACTION"};function IA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":DA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UA={[Zv]:"ENVMAP_BLENDING_MULTIPLY",[TM]:"ENVMAP_BLENDING_MIX",[AM]:"ENVMAP_BLENDING_ADD"};function FA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":UA[t.combine]||"ENVMAP_BLENDING_NONE"}function OA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=PA(n),c=LA(n),h=IA(n),p=FA(n),f=OA(n),m=SA(n),v=MA(s),E=r.createProgram();let g,d,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ma).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ma).join(`
`),d.length>0&&(d+=`
`)):(g=[lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),d=[lg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?ke.tonemapping_pars_fragment:"",n.toneMapping!==ui?_A("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,vA("linearToOutputTexel",n.outputColorSpace),yA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ma).join(`
`)),a=_f(a),a=sg(a,n),a=ag(a,n),o=_f(o),o=sg(o,n),o=ag(o,n),a=og(a),o=og(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===Mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=x+g+a,S=x+d+o,C=ng(r,r.VERTEX_SHADER,M),T=ng(r,r.FRAGMENT_SHADER,S);r.attachShader(E,C),r.attachShader(E,T),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(N){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(E)||"",Y=r.getShaderInfoLog(C)||"",te=r.getShaderInfoLog(T)||"",k=O.trim(),K=Y.trim(),H=te.trim();let U=!0,j=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,C,T);else{const ee=rg(r,C,"vertex"),ie=rg(r,T,"fragment");$e("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ee+`
`+ie)}else k!==""?Le("WebGLProgram: Program Info Log:",k):(K===""||H==="")&&(j=!1);j&&(N.diagnostics={runnable:U,programLog:k,vertexShader:{log:K,prefix:g},fragmentShader:{log:H,prefix:d}})}r.deleteShader(C),r.deleteShader(T),y=new gl(r,E),b=EA(r,E)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(E,hA)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=C,this.fragmentShader=T,this}let BA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VA(e),n.set(e,i)),i}}class VA{constructor(e){this.id=BA++,this.code=e,this.usedTimes=0}}function HA(t){return t===Yr||t===jl||t===Xl}function GA(t,e,n,i,r,s){const a=new mx,o=new zA,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function E(y,b,P,N,O,Y){const te=N.fog,k=O.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||K,H),j=U&&U.mapping===vc?U.image.height:null,ee=m[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,le=ie!==void 0?ie.length:0;let Ve=0;k.morphAttributes.position!==void 0&&(Ve=1),k.morphAttributes.normal!==void 0&&(Ve=2),k.morphAttributes.color!==void 0&&(Ve=3);let et,Ge,$,oe;if(ee){const Me=ri[ee];et=Me.vertexShader,Ge=Me.fragmentShader}else{et=y.vertexShader,Ge=y.fragmentShader;const Me=o.getVertexShaderStage(y),xt=o.getFragmentShaderStage(y);o.update(y,Me,xt),$=Me.id,oe=xt.id}const se=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),Ue=O.isInstancedMesh===!0,Pe=O.isBatchedMesh===!0,Et=!!y.map,He=!!y.matcap,st=!!U,Qe=!!y.aoMap,Xe=!!y.lightMap,Ct=!!y.bumpMap&&y.wireframe===!1,Lt=!!y.normalMap,Ot=!!y.displacementMap,Vt=!!y.emissiveMap,vt=!!y.metalnessMap,bt=!!y.roughnessMap,D=y.anisotropy>0,on=y.clearcoat>0,tt=y.dispersion>0,R=y.iridescence>0,_=y.sheen>0,F=y.transmission>0,G=D&&!!y.anisotropyMap,X=on&&!!y.clearcoatMap,ae=on&&!!y.clearcoatNormalMap,ue=on&&!!y.clearcoatRoughnessMap,q=R&&!!y.iridescenceMap,J=R&&!!y.iridescenceThicknessMap,de=_&&!!y.sheenColorMap,Te=_&&!!y.sheenRoughnessMap,pe=!!y.specularMap,fe=!!y.specularColorMap,be=!!y.specularIntensityMap,Ne=F&&!!y.transmissionMap,Fe=F&&!!y.thicknessMap,L=!!y.gradientMap,ce=!!y.alphaMap,Q=y.alphaTest>0,he=!!y.alphaHash,xe=!!y.extensions;let ne=ui;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(ne=t.toneMapping);const we={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:et,fragmentShader:Ge,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:oe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Et,matcap:He,envMap:st,envMapMode:st&&U.mapping,envMapCubeUVHeight:j,aoMap:Qe,lightMap:Xe,bumpMap:Ct,normalMap:Lt,displacementMap:Ot,emissiveMap:Vt,normalMapObjectSpace:Lt&&y.normalMapType===RM,normalMapTangentSpace:Lt&&y.normalMapType===_m,packedNormalMap:Lt&&y.normalMapType===_m&&HA(y.normalMap.format),metalnessMap:vt,roughnessMap:bt,anisotropy:D,anisotropyMap:G,clearcoat:on,clearcoatMap:X,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:tt,iridescence:R,iridescenceMap:q,iridescenceThicknessMap:J,sheen:_,sheenColorMap:de,sheenRoughnessMap:Te,specularMap:pe,specularColorMap:fe,specularIntensityMap:be,transmission:F,transmissionMap:Ne,thicknessMap:Fe,gradientMap:L,opaque:y.transparent===!1&&y.blending===Us&&y.alphaToCoverage===!1,alphaMap:ce,alphaTest:Q,alphaHash:he,combine:y.combine,mapUv:Et&&v(y.map.channel),aoMapUv:Qe&&v(y.aoMap.channel),lightMapUv:Xe&&v(y.lightMap.channel),bumpMapUv:Ct&&v(y.bumpMap.channel),normalMapUv:Lt&&v(y.normalMap.channel),displacementMapUv:Ot&&v(y.displacementMap.channel),emissiveMapUv:Vt&&v(y.emissiveMap.channel),metalnessMapUv:vt&&v(y.metalnessMap.channel),roughnessMapUv:bt&&v(y.roughnessMap.channel),anisotropyMapUv:G&&v(y.anisotropyMap.channel),clearcoatMapUv:X&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(y.sheenRoughnessMap.channel),specularMapUv:pe&&v(y.specularMap.channel),specularColorMapUv:fe&&v(y.specularColorMap.channel),specularIntensityMapUv:be&&v(y.specularIntensityMap.channel),transmissionMapUv:Ne&&v(y.transmissionMap.channel),thicknessMapUv:Fe&&v(y.thicknessMap.channel),alphaMapUv:ce&&v(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Lt||D),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(Et||ce),fog:!!te,useFog:y.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Lt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:De,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:Y.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:Et&&y.map.isVideoTexture===!0&&We.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:Vt&&y.emissiveMap.isVideoTexture===!0&&We.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ei,flipSided:y.side===mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&y.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(d(b,y),x(b,y),b.push(t.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function d(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function M(y){const b=m[y.type];let P;if(b){const N=ri[b];P=hE.clone(N.uniforms)}else P=y.uniforms;return P}function S(y,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new kA(t,b,y,r),c.push(P),h.set(b,P)),P}function C(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function A(){o.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:M,acquireProgram:S,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:A}}function WA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function jA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function cg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ug(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,v,E,g,d){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:g,group:d},t[e]=x):(x.id=f.id,x.object=f,x.geometry=m,x.material=v,x.materialVariant=a(f),x.groupOrder=E,x.renderOrder=f.renderOrder,x.z=g,x.group=d),e++,x}function l(f,m,v,E,g,d){const x=o(f,m,v,E,g,d);v.transmission>0?i.push(x):v.transparent===!0?r.push(x):n.push(x)}function c(f,m,v,E,g,d){const x=o(f,m,v,E,g,d);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function h(f,m,v){n.length>1&&n.sort(f||jA),i.length>1&&i.sort(m||cg),r.length>1&&r.sort(m||cg),v&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let f=e,m=t.length;f<m;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function XA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new ug,t.set(i,[a])):r>=s.length?(a=new ug,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function qA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Je};break;case"SpotLight":n={position:new V,direction:new V,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function YA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let $A=0;function KA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZA(t){const e=new qA,n=YA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new Nt,a=new Nt;function o(c){let h=0,p=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,v=0,E=0,g=0,d=0,x=0,M=0,S=0,C=0,T=0,A=0;c.sort(KA);for(let b=0,P=c.length;b<P;b++){const N=c[b],O=N.color,Y=N.intensity,te=N.distance;let k=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Yr?k=N.shadow.map.texture:k=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=O.r*Y,p+=O.g*Y,f+=O.b*Y;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],Y);A++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const H=N.shadow,U=n.get(N);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.directionalShadow[m]=U,i.directionalShadowMap[m]=k,i.directionalShadowMatrix[m]=N.shadow.matrix,x++}i.directional[m]=K,m++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(O).multiplyScalar(Y),K.distance=te,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[E]=K;const H=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,H.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[E]=H.matrix,N.castShadow){const U=n.get(N);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.spotShadow[E]=U,i.spotShadowMap[E]=k,S++}E++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(O).multiplyScalar(Y),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=K,g++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const H=N.shadow,U=n.get(N);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,i.pointShadow[v]=U,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=N.shadow.matrix,M++}i.point[v]=K,v++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(Y),K.groundColor.copy(N.groundColor).multiplyScalar(Y),i.hemi[d]=K,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==m||y.pointLength!==v||y.spotLength!==E||y.rectAreaLength!==g||y.hemiLength!==d||y.numDirectionalShadows!==x||y.numPointShadows!==M||y.numSpotShadows!==S||y.numSpotMaps!==C||y.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,y.directionalLength=m,y.pointLength=v,y.spotLength=E,y.rectAreaLength=g,y.hemiLength=d,y.numDirectionalShadows=x,y.numPointShadows=M,y.numSpotShadows=S,y.numSpotMaps=C,y.numLightProbes=A,i.version=$A++)}function l(c,h){let p=0,f=0,m=0,v=0,E=0;const g=h.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const M=c[d];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),E++}}}return{setup:o,setupView:l,state:i}}function dg(t){const e=new ZA(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function QA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new dg(t),e.set(r,[o])):s>=a.length?(o=new dg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tC=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],nC=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],fg=new Nt,ga=new V,Ru=new V;function iC(t,e,n){let i=new yx;const r=new Ze,s=new Ze,a=new St,o=new vE,l=new xE,c={},h=n.maxTextureSize,p={[_r]:mn,[mn]:_r,[Ei]:Ei},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:JA,fragmentShader:eC}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Bi;v.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new pi(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let d=this.type;this.render=function(T,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===aM&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dl);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),O=t.state;O.setBlending(bi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=d!==this.type;Y&&A.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(k=>k.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,k=T.length;te<k;te++){const K=T[te],H=K.shadow;if(H===void 0){Le("WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const U=H.getFrameExtents();r.multiply(U),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/U.x),r.x=s.x*U.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/U.y),r.y=s.y*U.y,H.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=j,H.map===null||Y===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Sa){if(K.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new di(r.x,r.y,{format:Yr,type:Ui,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),H.map.texture.name=K.name+".shadowMap",H.map.depthTexture=new Ys(r.x,r.y,ai),H.map.depthTexture.name=K.name+".shadowMapDepth",H.map.depthTexture.format=Fi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt}else K.isPointLight?(H.map=new Cx(r.x),H.map.depthTexture=new dE(r.x,hi)):(H.map=new di(r.x,r.y),H.map.depthTexture=new Ys(r.x,r.y,hi)),H.map.depthTexture.name=K.name+".shadowMap",H.map.depthTexture.format=Fi,this.type===dl?(H.map.depthTexture.compareFunction=j?Lh:Nh,H.map.depthTexture.minFilter=Qt,H.map.depthTexture.magFilter=Qt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Gt,H.map.depthTexture.magFilter=Gt);H.camera.updateProjectionMatrix()}const ee=H.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<ee;ie++){if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,ie),t.clear();else{ie===0&&(t.setRenderTarget(H.map),t.clear());const le=H.getViewport(ie);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),O.viewport(a)}if(K.isPointLight){const le=H.camera,Ve=H.matrix,et=K.distance||le.far;et!==le.far&&(le.far=et,le.updateProjectionMatrix()),ga.setFromMatrixPosition(K.matrixWorld),le.position.copy(ga),Ru.copy(le.position),Ru.add(tC[ie]),le.up.copy(nC[ie]),le.lookAt(Ru),le.updateMatrixWorld(),Ve.makeTranslation(-ga.x,-ga.y,-ga.z),fg.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),H._frustum.setFromProjectionMatrix(fg,le.coordinateSystem,le.reversedDepth)}else H.updateMatrices(K);i=H.getFrustum(),S(A,y,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===Sa&&x(H,y),H.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(b,P,N)};function x(T,A){const y=e.update(E);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new di(r.x,r.y,{format:Yr,type:Ui})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,y,f,E,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,y,m,E,null)}function M(T,A,y,b){let P=null;const N=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const O=P.uuid,Y=A.uuid;let te=c[O];te===void 0&&(te={},c[O]=te);let k=te[Y];k===void 0&&(k=P.clone(),te[Y]=k,A.addEventListener("dispose",C)),P=k}if(P.visible=A.visible,P.wireframe=A.wireframe,b===Sa?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:p[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=y}return P}function S(T,A,y,b,P){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Sa)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),te=T.material;if(Array.isArray(te)){const k=Y.groups;for(let K=0,H=k.length;K<H;K++){const U=k[K],j=te[U.materialIndex];if(j&&j.visible){const ee=M(T,j,b,P);T.onBeforeShadow(t,T,A,y,Y,ee,U),t.renderBufferDirect(y,null,Y,ee,T,U),T.onAfterShadow(t,T,A,y,Y,ee,U)}}}else if(te.visible){const k=M(T,te,b,P);T.onBeforeShadow(t,T,A,y,Y,k,null),t.renderBufferDirect(y,null,Y,k,T,null),T.onAfterShadow(t,T,A,y,Y,k,null)}}const O=T.children;for(let Y=0,te=O.length;Y<te;Y++)S(O[Y],A,y,b,P)}function C(T){T.target.removeEventListener("dispose",C);for(const y in c){const b=c[y],P=T.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function rC(t,e){function n(){let L=!1;const ce=new St;let Q=null;const he=new St(0,0,0,0);return{setMask:function(xe){Q!==xe&&!L&&(t.colorMask(xe,xe,xe,xe),Q=xe)},setLocked:function(xe){L=xe},setClear:function(xe,ne,we,Me,xt){xt===!0&&(xe*=Me,ne*=Me,we*=Me),ce.set(xe,ne,we,Me),he.equals(ce)===!1&&(t.clearColor(xe,ne,we,Me),he.copy(ce))},reset:function(){L=!1,Q=null,he.set(-1,0,0,0)}}}function i(){let L=!1,ce=!1,Q=null,he=null,xe=null;return{setReversed:function(ne){if(ce!==ne){const we=e.get("EXT_clip_control");ne?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),ce=ne;const Me=xe;xe=null,this.setClear(Me)}},getReversed:function(){return ce},setTest:function(ne){ne?se(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!L&&(t.depthMask(ne),Q=ne)},setFunc:function(ne){if(ce&&(ne=BM[ne]),he!==ne){switch(ne){case Nd:t.depthFunc(t.NEVER);break;case Ld:t.depthFunc(t.ALWAYS);break;case Dd:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case Id:t.depthFunc(t.EQUAL);break;case Ud:t.depthFunc(t.GEQUAL);break;case Fd:t.depthFunc(t.GREATER);break;case Od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}he=ne}},setLocked:function(ne){L=ne},setClear:function(ne){xe!==ne&&(xe=ne,ce&&(ne=1-ne),t.clearDepth(ne))},reset:function(){L=!1,Q=null,he=null,xe=null,ce=!1}}}function r(){let L=!1,ce=null,Q=null,he=null,xe=null,ne=null,we=null,Me=null,xt=null;return{setTest:function(lt){L||(lt?se(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(lt){ce!==lt&&!L&&(t.stencilMask(lt),ce=lt)},setFunc:function(lt,Zn,Qn){(Q!==lt||he!==Zn||xe!==Qn)&&(t.stencilFunc(lt,Zn,Qn),Q=lt,he=Zn,xe=Qn)},setOp:function(lt,Zn,Qn){(ne!==lt||we!==Zn||Me!==Qn)&&(t.stencilOp(lt,Zn,Qn),ne=lt,we=Zn,Me=Qn)},setLocked:function(lt){L=lt},setClear:function(lt){xt!==lt&&(t.clearStencil(lt),xt=lt)},reset:function(){L=!1,ce=null,Q=null,he=null,xe=null,ne=null,we=null,Me=null,xt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},f={},m=new WeakMap,v=[],E=null,g=!1,d=null,x=null,M=null,S=null,C=null,T=null,A=null,y=new Je(0,0,0),b=0,P=!1,N=null,O=null,Y=null,te=null,k=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,U=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=U>=2);let ee=null,ie={};const le=t.getParameter(t.SCISSOR_BOX),Ve=t.getParameter(t.VIEWPORT),et=new St().fromArray(le),Ge=new St().fromArray(Ve);function $(L,ce,Q,he){const xe=new Uint8Array(4),ne=t.createTexture();t.bindTexture(L,ne),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<Q;we++)L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,he,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ce+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ne}const oe={};oe[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(t.DEPTH_TEST),a.setFunc(Xs),Ct(!1),Lt(mm),se(t.CULL_FACE),Qe(bi);function se(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function De(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ue(L,ce){return f[L]!==ce?(t.bindFramebuffer(L,ce),f[L]=ce,L===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ce),L===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function Pe(L,ce){let Q=v,he=!1;if(L){Q=m.get(ce),Q===void 0&&(Q=[],m.set(ce,Q));const xe=L.textures;if(Q.length!==xe.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ne=0,we=xe.length;ne<we;ne++)Q[ne]=t.COLOR_ATTACHMENT0+ne;Q.length=xe.length,he=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,he=!0);he&&t.drawBuffers(Q)}function Et(L){return E!==L?(t.useProgram(L),E=L,!0):!1}const He={[Dr]:t.FUNC_ADD,[lM]:t.FUNC_SUBTRACT,[cM]:t.FUNC_REVERSE_SUBTRACT};He[uM]=t.MIN,He[dM]=t.MAX;const st={[fM]:t.ZERO,[hM]:t.ONE,[pM]:t.SRC_COLOR,[Rd]:t.SRC_ALPHA,[yM]:t.SRC_ALPHA_SATURATE,[xM]:t.DST_COLOR,[gM]:t.DST_ALPHA,[mM]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[_M]:t.ONE_MINUS_DST_COLOR,[vM]:t.ONE_MINUS_DST_ALPHA,[SM]:t.CONSTANT_COLOR,[MM]:t.ONE_MINUS_CONSTANT_COLOR,[EM]:t.CONSTANT_ALPHA,[wM]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(L,ce,Q,he,xe,ne,we,Me,xt,lt){if(L===bi){g===!0&&(De(t.BLEND),g=!1);return}if(g===!1&&(se(t.BLEND),g=!0),L!==oM){if(L!==d||lt!==P){if((x!==Dr||C!==Dr)&&(t.blendEquation(t.FUNC_ADD),x=Dr,C=Dr),lt)switch(L){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFunc(t.ONE,t.ONE);break;case vm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case xm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",L);break}else switch(L){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case vm:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xm:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",L);break}M=null,S=null,T=null,A=null,y.set(0,0,0),b=0,d=L,P=lt}return}xe=xe||ce,ne=ne||Q,we=we||he,(ce!==x||xe!==C)&&(t.blendEquationSeparate(He[ce],He[xe]),x=ce,C=xe),(Q!==M||he!==S||ne!==T||we!==A)&&(t.blendFuncSeparate(st[Q],st[he],st[ne],st[we]),M=Q,S=he,T=ne,A=we),(Me.equals(y)===!1||xt!==b)&&(t.blendColor(Me.r,Me.g,Me.b,xt),y.copy(Me),b=xt),d=L,P=!1}function Xe(L,ce){L.side===Ei?De(t.CULL_FACE):se(t.CULL_FACE);let Q=L.side===mn;ce&&(Q=!Q),Ct(Q),L.blending===Us&&L.transparent===!1?Qe(bi):Qe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const he=L.stencilWrite;o.setTest(he),he&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Vt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(L){N!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),N=L)}function Lt(L){L!==rM?(se(t.CULL_FACE),L!==O&&(L===mm?t.cullFace(t.BACK):L===sM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),O=L}function Ot(L){L!==Y&&(H&&t.lineWidth(L),Y=L)}function Vt(L,ce,Q){L?(se(t.POLYGON_OFFSET_FILL),(te!==ce||k!==Q)&&(te=ce,k=Q,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,Q))):De(t.POLYGON_OFFSET_FILL)}function vt(L){L?se(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function bt(L){L===void 0&&(L=t.TEXTURE0+K-1),ee!==L&&(t.activeTexture(L),ee=L)}function D(L,ce,Q){Q===void 0&&(ee===null?Q=t.TEXTURE0+K-1:Q=ee);let he=ie[Q];he===void 0&&(he={type:void 0,texture:void 0},ie[Q]=he),(he.type!==L||he.texture!==ce)&&(ee!==Q&&(t.activeTexture(Q),ee=Q),t.bindTexture(L,ce||oe[L]),he.type=L,he.texture=ce)}function on(){const L=ie[ee];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{t.compressedTexImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function _(){try{t.texSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function F(){try{t.texSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function X(){try{t.compressedTexSubImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function ae(){try{t.texStorage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function ue(){try{t.texStorage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function q(){try{t.texImage2D(...arguments)}catch(L){$e("WebGLState:",L)}}function J(){try{t.texImage3D(...arguments)}catch(L){$e("WebGLState:",L)}}function de(L){return p[L]!==void 0?p[L]:t.getParameter(L)}function Te(L,ce){p[L]!==ce&&(t.pixelStorei(L,ce),p[L]=ce)}function pe(L){et.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function fe(L){Ge.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function be(L,ce){let Q=c.get(ce);Q===void 0&&(Q=new WeakMap,c.set(ce,Q));let he=Q.get(L);he===void 0&&(he=t.getUniformBlockIndex(ce,L.name),Q.set(L,he))}function Ne(L,ce){const he=c.get(ce).get(L);l.get(ce)!==he&&(t.uniformBlockBinding(ce,he,L.__bindingPointIndex),l.set(ce,he))}function Fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},ee=null,ie={},f={},m=new WeakMap,v=[],E=null,g=!1,d=null,x=null,M=null,S=null,C=null,T=null,A=null,y=new Je(0,0,0),b=0,P=!1,N=null,O=null,Y=null,te=null,k=null,et.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:se,disable:De,bindFramebuffer:Ue,drawBuffers:Pe,useProgram:Et,setBlending:Qe,setMaterial:Xe,setFlipSided:Ct,setCullFace:Lt,setLineWidth:Ot,setPolygonOffset:Vt,setScissorTest:vt,activeTexture:bt,bindTexture:D,unbindTexture:on,compressedTexImage2D:tt,compressedTexImage3D:R,texImage2D:q,texImage3D:J,pixelStorei:Te,getParameter:de,updateUBOMapping:be,uniformBlockBinding:Ne,texStorage2D:ae,texStorage3D:ue,texSubImage2D:_,texSubImage3D:F,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:pe,viewport:fe,reset:Fe}}function sC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,_){return v?new OffscreenCanvas(R,_):Kl("canvas")}function g(R,_,F){let G=1;const X=tt(R);if((X.width>F||X.height>F)&&(G=F/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(G*X.width),ue=Math.floor(G*X.height);f===void 0&&(f=E(ae,ue));const q=_?E(ae,ue):f;return q.width=ae,q.height=ue,q.getContext("2d").drawImage(R,0,0,ae,ue),Le("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ae+"x"+ue+")."),q}else return"data"in R&&Le("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),R;return R}function d(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,_,F,G,X,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;G&&(ue=e.get("EXT_texture_norm16"),ue||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=_;if(_===t.RED&&(F===t.FLOAT&&(q=t.R32F),F===t.HALF_FLOAT&&(q=t.R16F),F===t.UNSIGNED_BYTE&&(q=t.R8),F===t.UNSIGNED_SHORT&&ue&&(q=ue.R16_EXT),F===t.SHORT&&ue&&(q=ue.R16_SNORM_EXT)),_===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.R8UI),F===t.UNSIGNED_SHORT&&(q=t.R16UI),F===t.UNSIGNED_INT&&(q=t.R32UI),F===t.BYTE&&(q=t.R8I),F===t.SHORT&&(q=t.R16I),F===t.INT&&(q=t.R32I)),_===t.RG&&(F===t.FLOAT&&(q=t.RG32F),F===t.HALF_FLOAT&&(q=t.RG16F),F===t.UNSIGNED_BYTE&&(q=t.RG8),F===t.UNSIGNED_SHORT&&ue&&(q=ue.RG16_EXT),F===t.SHORT&&ue&&(q=ue.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RG8UI),F===t.UNSIGNED_SHORT&&(q=t.RG16UI),F===t.UNSIGNED_INT&&(q=t.RG32UI),F===t.BYTE&&(q=t.RG8I),F===t.SHORT&&(q=t.RG16I),F===t.INT&&(q=t.RG32I)),_===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RGB8UI),F===t.UNSIGNED_SHORT&&(q=t.RGB16UI),F===t.UNSIGNED_INT&&(q=t.RGB32UI),F===t.BYTE&&(q=t.RGB8I),F===t.SHORT&&(q=t.RGB16I),F===t.INT&&(q=t.RGB32I)),_===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),F===t.UNSIGNED_INT&&(q=t.RGBA32UI),F===t.BYTE&&(q=t.RGBA8I),F===t.SHORT&&(q=t.RGBA16I),F===t.INT&&(q=t.RGBA32I)),_===t.RGB&&(F===t.UNSIGNED_SHORT&&ue&&(q=ue.RGB16_EXT),F===t.SHORT&&ue&&(q=ue.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),_===t.RGBA){const J=ae?Yl:We.getTransfer(X);F===t.FLOAT&&(q=t.RGBA32F),F===t.HALF_FLOAT&&(q=t.RGBA16F),F===t.UNSIGNED_BYTE&&(q=J===nt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&ue&&(q=ue.RGBA16_EXT),F===t.SHORT&&ue&&(q=ue.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function C(R,_){let F;return R?_===null||_===hi||_===Qa?F=t.DEPTH24_STENCIL8:_===ai?F=t.DEPTH32F_STENCIL8:_===Za&&(F=t.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===hi||_===Qa?F=t.DEPTH_COMPONENT24:_===ai?F=t.DEPTH_COMPONENT32F:_===Za&&(F=t.DEPTH_COMPONENT16),F}function T(R,_){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function A(R){const _=R.target;_.removeEventListener("dispose",A),b(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function y(R){const _=R.target;_.removeEventListener("dispose",y),N(_)}function b(R){const _=i.get(R);if(_.__webglInit===void 0)return;const F=R.source,G=m.get(F);if(G){const X=G[_.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(R),Object.keys(G).length===0&&m.delete(F)}i.remove(R)}function P(R){const _=i.get(R);t.deleteTexture(_.__webglTexture);const F=R.source,G=m.get(F);delete G[_.__cacheKey],a.memory.textures--}function N(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let X=0;X<_.__webglFramebuffer[G].length;X++)t.deleteFramebuffer(_.__webglFramebuffer[G][X]);else t.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)t.deleteFramebuffer(_.__webglFramebuffer[G]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=R.textures;for(let G=0,X=F.length;G<X;G++){const ae=i.get(F[G]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(F[G])}i.remove(R)}let O=0;function Y(){O=0}function te(){return O}function k(R){O=R}function K(){const R=O;return R>=r.maxTextures&&Le("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function H(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function U(R,_){const F=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const G=R.image;if(G===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{De(F,R,_);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+_)}function j(R,_){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){De(F,R,_);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+_)}function ee(R,_){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){De(F,R,_);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+_)}function ie(R,_){const F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){Ue(F,R,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+_)}const le={[kd]:t.REPEAT,[Ai]:t.CLAMP_TO_EDGE,[Bd]:t.MIRRORED_REPEAT},Ve={[Gt]:t.NEAREST,[CM]:t.NEAREST_MIPMAP_NEAREST,[Po]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[Jc]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},et={[PM]:t.NEVER,[UM]:t.ALWAYS,[NM]:t.LESS,[Nh]:t.LEQUAL,[LM]:t.EQUAL,[Lh]:t.GEQUAL,[DM]:t.GREATER,[IM]:t.NOTEQUAL};function Ge(R,_){if(_.type===ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===Jc||_.magFilter===Po||_.magFilter===kr||_.minFilter===Qt||_.minFilter===Jc||_.minFilter===Po||_.minFilter===kr)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,le[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,le[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,le[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Ve[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Ve[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,et[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Po&&_.minFilter!==kr||_.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $(R,_){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",A));const G=_.source;let X=m.get(G);X===void 0&&(X={},m.set(G,X));const ae=H(_);if(ae!==R.__cacheKey){X[ae]===void 0&&(X[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[ae].usedTimes++;const ue=X[R.__cacheKey];ue!==void 0&&(X[R.__cacheKey].usedTimes--,ue.usedTimes===0&&P(_)),R.__cacheKey=ae,R.__webglTexture=X[ae].texture}return F}function oe(R,_,F){return Math.floor(Math.floor(R/F)/_)}function se(R,_,F,G){const ae=R.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,F,G,_.data);else{ae.sort((Te,pe)=>Te.start-pe.start);let ue=0;for(let Te=1;Te<ae.length;Te++){const pe=ae[ue],fe=ae[Te],be=pe.start+pe.count,Ne=oe(fe.start,_.width,4),Fe=oe(pe.start,_.width,4);fe.start<=be+1&&Ne===Fe&&oe(fe.start+fe.count-1,_.width,4)===Ne?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ue,ae[ue]=fe)}ae.length=ue+1;const q=n.getParameter(t.UNPACK_ROW_LENGTH),J=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Te=0,pe=ae.length;Te<pe;Te++){const fe=ae[Te],be=Math.floor(fe.start/4),Ne=Math.ceil(fe.count/4),Fe=be%_.width,L=Math.floor(be/_.width),ce=Ne,Q=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Fe),n.pixelStorei(t.UNPACK_SKIP_ROWS,L),n.texSubImage2D(t.TEXTURE_2D,0,Fe,L,ce,Q,F,G,_.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,J),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function De(R,_,F){let G=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=t.TEXTURE_3D);const X=$(R,_),ae=_.source;n.bindTexture(G,R.__webglTexture,t.TEXTURE0+F);const ue=i.get(ae);if(ae.version!==ue.__version||X===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const Q=We.getPrimaries(We.workingColorSpace),he=_.colorSpace===tr?null:We.getPrimaries(_.colorSpace),xe=_.colorSpace===tr||Q===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let J=g(_.image,!1,r.maxTextureSize);J=on(_,J);const de=s.convert(_.format,_.colorSpace),Te=s.convert(_.type);let pe=S(_.internalFormat,de,Te,_.normalized,_.colorSpace,_.isVideoTexture);Ge(G,_);let fe;const be=_.mipmaps,Ne=_.isVideoTexture!==!0,Fe=ue.__version===void 0||X===!0,L=ae.dataReady,ce=T(_,J);if(_.isDepthTexture)pe=C(_.format===Br,_.type),Fe&&(Ne?n.texStorage2D(t.TEXTURE_2D,1,pe,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,de,Te,null));else if(_.isDataTexture)if(be.length>0){Ne&&Fe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,be[0].width,be[0].height);for(let Q=0,he=be.length;Q<he;Q++)fe=be[Q],Ne?L&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,de,Te,fe.data):n.texImage2D(t.TEXTURE_2D,Q,pe,fe.width,fe.height,0,de,Te,fe.data);_.generateMipmaps=!1}else Ne?(Fe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,J.width,J.height),L&&se(_,J,de,Te)):n.texImage2D(t.TEXTURE_2D,0,pe,J.width,J.height,0,de,Te,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ne&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,be[0].width,be[0].height,J.depth);for(let Q=0,he=be.length;Q<he;Q++)if(fe=be[Q],_.format!==jn)if(de!==null)if(Ne){if(L)if(_.layerUpdates.size>0){const xe=Gm(fe.width,fe.height,_.format,_.type);for(const ne of _.layerUpdates){const we=fe.data.subarray(ne*xe/fe.data.BYTES_PER_ELEMENT,(ne+1)*xe/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ne,fe.width,fe.height,1,de,we)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,J.depth,de,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,pe,fe.width,fe.height,J.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,J.depth,de,Te,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,pe,fe.width,fe.height,J.depth,0,de,Te,fe.data)}else{Ne&&Fe&&n.texStorage2D(t.TEXTURE_2D,ce,pe,be[0].width,be[0].height);for(let Q=0,he=be.length;Q<he;Q++)fe=be[Q],_.format!==jn?de!==null?Ne?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,de,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,pe,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,fe.width,fe.height,de,Te,fe.data):n.texImage2D(t.TEXTURE_2D,Q,pe,fe.width,fe.height,0,de,Te,fe.data)}else if(_.isDataArrayTexture)if(Ne){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,pe,J.width,J.height,J.depth),L)if(_.layerUpdates.size>0){const Q=Gm(J.width,J.height,_.format,_.type);for(const he of _.layerUpdates){const xe=J.data.subarray(he*Q/J.data.BYTES_PER_ELEMENT,(he+1)*Q/J.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,he,J.width,J.height,1,de,Te,xe)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,de,Te,J.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,J.width,J.height,J.depth,0,de,Te,J.data);else if(_.isData3DTexture)Ne?(Fe&&n.texStorage3D(t.TEXTURE_3D,ce,pe,J.width,J.height,J.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,de,Te,J.data)):n.texImage3D(t.TEXTURE_3D,0,pe,J.width,J.height,J.depth,0,de,Te,J.data);else if(_.isFramebufferTexture){if(Fe)if(Ne)n.texStorage2D(t.TEXTURE_2D,ce,pe,J.width,J.height);else{let Q=J.width,he=J.height;for(let xe=0;xe<ce;xe++)n.texImage2D(t.TEXTURE_2D,xe,pe,Q,he,0,de,Te,null),Q>>=1,he>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const Q=t.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),J.parentNode!==Q){Q.appendChild(J),p.add(_),Q.onpaint=he=>{const xe=he.changedElements;for(const ne of p)xe.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,J);else{const xe=t.RGBA,ne=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ne,we,J)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(Ne&&Fe){const Q=tt(be[0]);n.texStorage2D(t.TEXTURE_2D,ce,pe,Q.width,Q.height)}for(let Q=0,he=be.length;Q<he;Q++)fe=be[Q],Ne?L&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,de,Te,fe):n.texImage2D(t.TEXTURE_2D,Q,pe,de,Te,fe);_.generateMipmaps=!1}else if(Ne){if(Fe){const Q=tt(J);n.texStorage2D(t.TEXTURE_2D,ce,pe,Q.width,Q.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Te,J)}else n.texImage2D(t.TEXTURE_2D,0,pe,de,Te,J);d(_)&&x(G),ue.__version=ae.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Ue(R,_,F){if(_.image.length!==6)return;const G=$(R,_),X=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+F);const ae=i.get(X);if(X.version!==ae.__version||G===!0){n.activeTexture(t.TEXTURE0+F);const ue=We.getPrimaries(We.workingColorSpace),q=_.colorSpace===tr?null:We.getPrimaries(_.colorSpace),J=_.colorSpace===tr||ue===q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);const de=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,pe=[];for(let ne=0;ne<6;ne++)!de&&!Te?pe[ne]=g(_.image[ne],!0,r.maxCubemapSize):pe[ne]=Te?_.image[ne].image:_.image[ne],pe[ne]=on(_,pe[ne]);const fe=pe[0],be=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type),Fe=S(_.internalFormat,be,Ne,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,ce=ae.__version===void 0||G===!0,Q=X.dataReady;let he=T(_,fe);Ge(t.TEXTURE_CUBE_MAP,_);let xe;if(de){L&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,fe.width,fe.height);for(let ne=0;ne<6;ne++){xe=pe[ne].mipmaps;for(let we=0;we<xe.length;we++){const Me=xe[we];_.format!==jn?be!==null?L?Q&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Me.width,Me.height,be,Me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Fe,Me.width,Me.height,0,Me.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,0,0,Me.width,Me.height,be,Ne,Me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we,Fe,Me.width,Me.height,0,be,Ne,Me.data)}}}else{if(xe=_.mipmaps,L&&ce){xe.length>0&&he++;const ne=tt(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Fe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Te){L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,pe[ne].width,pe[ne].height,be,Ne,pe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,pe[ne].width,pe[ne].height,0,be,Ne,pe[ne].data);for(let we=0;we<xe.length;we++){const xt=xe[we].image[ne].image;L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,xt.width,xt.height,be,Ne,xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Fe,xt.width,xt.height,0,be,Ne,xt.data)}}else{L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,be,Ne,pe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Fe,be,Ne,pe[ne]);for(let we=0;we<xe.length;we++){const Me=xe[we];L?Q&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,0,0,be,Ne,Me.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,we+1,Fe,be,Ne,Me.image[ne])}}}d(_)&&x(t.TEXTURE_CUBE_MAP),ae.__version=X.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Pe(R,_,F,G,X,ae){const ue=s.convert(F.format,F.colorSpace),q=s.convert(F.type),J=S(F.internalFormat,ue,q,F.normalized,F.colorSpace),de=i.get(_),Te=i.get(F);if(Te.__renderTarget=_,!de.__hasExternalTextures){const pe=Math.max(1,_.width>>ae),fe=Math.max(1,_.height>>ae);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,ae,J,pe,fe,_.depth,0,ue,q,null):n.texImage2D(X,ae,J,pe,fe,0,ue,q,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),bt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,X,Te.__webglTexture,0,vt(_)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,X,Te.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Et(R,_,F){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const G=_.depthTexture,X=G&&G.isDepthTexture?G.type:null,ae=C(_.stencilBuffer,X),ue=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;bt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(_),ae,_.width,_.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(_),ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const G=_.textures;for(let X=0;X<G.length;X++){const ae=G[X],ue=s.convert(ae.format,ae.colorSpace),q=s.convert(ae.type),J=S(ae.internalFormat,ue,q,ae.normalized,ae.colorSpace);bt(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,vt(_),J,_.width,_.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,vt(_),J,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,J,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(R,_,F){const G=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const X=i.get(_.depthTexture);if(X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,_.depthTexture);const de=s.convert(_.depthTexture.format),Te=s.convert(_.depthTexture.type);let pe;_.depthTexture.format===Fi?pe=t.DEPTH_COMPONENT24:_.depthTexture.format===Br&&(pe=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,_.width,_.height,0,de,Te,null)}}else U(_.depthTexture,0);const ae=X.__webglTexture,ue=vt(_),q=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,J=_.depthTexture.format===Br?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Fi)bt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,q,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,q,ae,0);else if(_.depthTexture.format===Br)bt(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,q,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,J,q,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(R){const _=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){const X=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),_.__depthDisposeCallback=X}_.__boundDepthTexture=G}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let G=0;G<6;G++)He(_.__webglFramebuffer[G],R,G);else{const G=R.texture.mipmaps;G&&G.length>0?He(_.__webglFramebuffer[0],R,0):He(_.__webglFramebuffer,R,0)}else if(F){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=t.createRenderbuffer(),Et(_.__webglDepthbuffer[G],R,!1);else{const X=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,ae)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Et(_.__webglDepthbuffer,R,!1);else{const X=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(R,_,F){const G=i.get(R);_!==void 0&&Pe(G.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&st(R)}function Xe(R){const _=R.texture,F=i.get(R),G=i.get(_);R.addEventListener("dispose",y);const X=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ue=X.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=_.version,a.memory.textures++),ae){F.__webglFramebuffer=[];for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[q]=[];for(let J=0;J<_.mipmaps.length;J++)F.__webglFramebuffer[q][J]=t.createFramebuffer()}else F.__webglFramebuffer[q]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let q=0;q<_.mipmaps.length;q++)F.__webglFramebuffer[q]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(ue)for(let q=0,J=X.length;q<J;q++){const de=i.get(X[q]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&bt(R)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let q=0;q<X.length;q++){const J=X[q];F.__webglColorRenderbuffer[q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[q]);const de=s.convert(J.format,J.colorSpace),Te=s.convert(J.type),pe=S(J.internalFormat,de,Te,J.normalized,J.colorSpace,R.isXRRenderTarget===!0),fe=vt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,F.__webglColorRenderbuffer[q])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,_);for(let q=0;q<6;q++)if(_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Pe(F.__webglFramebuffer[q][J],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,J);else Pe(F.__webglFramebuffer[q],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);d(_)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let q=0,J=X.length;q<J;q++){const de=X[q],Te=i.get(de);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Te.__webglTexture),Ge(pe,de),Pe(F.__webglFramebuffer,R,de,t.COLOR_ATTACHMENT0+q,pe,0),d(de)&&x(pe)}n.unbindTexture()}else{let q=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(q=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(q,G.__webglTexture),Ge(q,_),_.mipmaps&&_.mipmaps.length>0)for(let J=0;J<_.mipmaps.length;J++)Pe(F.__webglFramebuffer[J],R,_,t.COLOR_ATTACHMENT0,q,J);else Pe(F.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,q,0);d(_)&&x(q),n.unbindTexture()}R.depthBuffer&&st(R)}function Ct(R){const _=R.textures;for(let F=0,G=_.length;F<G;F++){const X=_[F];if(d(X)){const ae=M(R),ue=i.get(X).__webglTexture;n.bindTexture(ae,ue),x(ae),n.unbindTexture()}}}const Lt=[],Ot=[];function Vt(R){if(R.samples>0){if(bt(R)===!1){const _=R.textures,F=R.width,G=R.height;let X=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),q=_.length>1;if(q)for(let de=0;de<_.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const J=R.texture.mipmaps;J&&J.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let de=0;de<_.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Te=i.get(_[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,F,G,0,0,F,G,X,t.NEAREST),l===!0&&(Lt.length=0,Ot.length=0,Lt.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Lt.push(ae),Ot.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ot)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),q)for(let de=0;de<_.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,ue.__webglColorRenderbuffer[de]);const Te=i.get(_[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function vt(R){return Math.min(r.maxSamples,R.samples)}function bt(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function on(R,_){const F=R.colorSpace,G=R.format,X=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==ql&&F!==tr&&(We.getTransfer(F)===nt?(G!==jn||X!==Nn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",F)),_}function tt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.getTextureUnits=te,this.setTextureUnits=k,this.setTexture2D=U,this.setTexture2DArray=j,this.setTexture3D=ee,this.setTextureCube=ie,this.rebindTextures=Qe,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function aC(t,e){function n(i,r=tr){let s;const a=We.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ch)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ax)return t.BYTE;if(i===ox)return t.SHORT;if(i===Za)return t.UNSIGNED_SHORT;if(i===Th)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Ui)return t.HALF_FLOAT;if(i===ux)return t.ALPHA;if(i===dx)return t.RGB;if(i===jn)return t.RGBA;if(i===Fi)return t.DEPTH_COMPONENT;if(i===Br)return t.DEPTH_STENCIL;if(i===fx)return t.RED;if(i===bh)return t.RED_INTEGER;if(i===Yr)return t.RG;if(i===Rh)return t.RG_INTEGER;if(i===Ph)return t.RGBA_INTEGER;if(i===fl||i===hl||i===pl||i===ml)if(a===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zd||i===Vd||i===Hd||i===Gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wd||i===jd||i===Xd||i===qd||i===Yd||i===jl||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wd||i===jd)return a===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===qd)return s.COMPRESSED_R11_EAC;if(i===Yd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===jl)return s.COMPRESSED_RG11_EAC;if(i===$d)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf||i===uf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Kd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jd)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ef)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===af)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===of)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uf)return a===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===df||i===ff||i===hf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===df)return a===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ff)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pf||i===mf||i===Xl||i===gf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const oC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Mx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Kn({vertexShader:oC,fragmentShader:lC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pi(new co(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uC extends Qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,v=null;const E=typeof XRWebGLBinding<"u",g=new cC,d={},x=n.getContextAttributes();let M=null,S=null;const C=[],T=[],A=new Ze;let y=null;const b=new Gn;b.viewport=new St;const P=new Gn;P.viewport=new St;const N=[b,P],O=new yE;let Y=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=C[$];return oe===void 0&&(oe=new ou,C[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=C[$];return oe===void 0&&(oe=new ou,C[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=C[$];return oe===void 0&&(oe=new ou,C[$]=oe),oe.getHandSpace()};function k($){const oe=T.indexOf($.inputSource);if(oe===-1)return;const se=C[oe];se!==void 0&&(se.update($.inputSource,$.frame,c||a),se.dispatchEvent({type:$.type,data:$.inputSource}))}function K(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",H);for(let $=0;$<C.length;$++){const oe=T[$];oe!==null&&(T[$]=null,C[$].disconnect(oe))}Y=null,te=null,g.reset();for(const $ in d)delete d[$];e.setRenderTarget(M),m=null,f=null,p=null,r=null,S=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",K),r.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,De=null,Ue=null;x.depth&&(Ue=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?Br:Fi,De=x.stencil?Qa:hi);const Pe={colorFormat:n.RGBA8,depthFormat:Ue,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new di(f.textureWidth,f.textureHeight,{format:jn,type:Nn,depthTexture:new Ys(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new di(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H($){for(let oe=0;oe<$.removed.length;oe++){const se=$.removed[oe],De=T.indexOf(se);De>=0&&(T[De]=null,C[De].disconnect(se))}for(let oe=0;oe<$.added.length;oe++){const se=$.added[oe];let De=T.indexOf(se);if(De===-1){for(let Pe=0;Pe<C.length;Pe++)if(Pe>=T.length){T.push(se),De=Pe;break}else if(T[Pe]===null){T[Pe]=se,De=Pe;break}if(De===-1)break}const Ue=C[De];Ue&&Ue.connect(se)}}const U=new V,j=new V;function ee($,oe,se){U.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const De=U.distanceTo(j),Ue=oe.projectionMatrix.elements,Pe=se.projectionMatrix.elements,Et=Ue[14]/(Ue[10]-1),He=Ue[14]/(Ue[10]+1),st=(Ue[9]+1)/Ue[5],Qe=(Ue[9]-1)/Ue[5],Xe=(Ue[8]-1)/Ue[0],Ct=(Pe[8]+1)/Pe[0],Lt=Et*Xe,Ot=Et*Ct,Vt=De/(-Xe+Ct),vt=Vt*-Xe;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(vt),$.translateZ(Vt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ue[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const bt=Et+Vt,D=He+Vt,on=Lt-vt,tt=Ot+(De-vt),R=st*He/D*bt,_=Qe*He/D*bt;$.projectionMatrix.makePerspective(on,tt,R,_,bt,D),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ie($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let oe=$.near,se=$.far;g.texture!==null&&(g.depthNear>0&&(oe=g.depthNear),g.depthFar>0&&(se=g.depthFar)),O.near=P.near=b.near=oe,O.far=P.far=b.far=se,(Y!==O.near||te!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),Y=O.near,te=O.far),O.layers.mask=$.layers.mask|6,b.layers.mask=O.layers.mask&-5,P.layers.mask=O.layers.mask&-3;const De=$.parent,Ue=O.cameras;ie(O,De);for(let Pe=0;Pe<Ue.length;Pe++)ie(Ue[Pe],De);Ue.length===2?ee(O,b,P):O.projectionMatrix.copy(b.projectionMatrix),le($,O,De)};function le($,oe,se){se===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(se.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=vf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function($){return d[$]};let Ve=null;function et($,oe){if(h=oe.getViewerPose(c||a),v=oe,h!==null){const se=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let De=!1;se.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let He=0;He<se.length;He++){const st=se[He];let Qe=null;if(m!==null)Qe=m.getViewport(st);else{const Ct=p.getViewSubImage(f,st);Qe=Ct.viewport,He===0&&(e.setRenderTargetTextures(S,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(S))}let Xe=N[He];Xe===void 0&&(Xe=new Gn,Xe.layers.enable(He),Xe.viewport=new St,N[He]=Xe),Xe.matrix.fromArray(st.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(st.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),He===0&&(O.matrix.copy(Xe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(Xe)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const He=p.getDepthInformation(se[0]);He&&He.isValid&&He.texture&&g.init(He,r.renderState)}if(Ue&&Ue.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let He=0;He<se.length;He++){const st=se[He].camera;if(st){let Qe=d[st];Qe||(Qe=new Mx,d[st]=Qe);const Xe=p.getCameraImage(st);Qe.sourceTexture=Xe}}}}for(let se=0;se<C.length;se++){const De=T[se],Ue=C[se];De!==null&&Ue!==void 0&&Ue.update(De,oe,c||a)}Ve&&Ve($,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),v=null}const Ge=new Tx;Ge.setAnimationLoop(et),this.setAnimationLoop=function($){Ve=$},this.dispose=function(){}}}const dC=new Nt,Lx=new Ie;Lx.set(-1,0,0,0,1,0,0,0,1);function fC(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Ex(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,x,M,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(g,d):d.isMeshLambertMaterial?(s(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(g,d),p(g,d)):d.isMeshPhongMaterial?(s(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(g,d),f(g,d),d.isMeshPhysicalMaterial&&m(g,d,S)):d.isMeshMatcapMaterial?(s(g,d),v(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),E(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,x,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===mn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===mn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const x=e.get(d),M=x.envMap,S=x.envMapRotation;M&&(g.envMap.value=M,g.envMapRotation.value.setFromMatrix4(dC.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Lx),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,x,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*x,g.scale.value=M*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function p(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function m(g,d,x){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,d){d.matcap&&(g.matcap.value=d.matcap)}function E(g,d){const x=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,C){const T=C.program;i.uniformBlockBinding(S,T)}function c(S,C){let T=r[S.id];T===void 0&&(g(S),T=h(S),r[S.id]=T,S.addEventListener("dispose",x));const A=C.program;i.updateUBOMapping(S,A);const y=e.render.frame;s[S.id]!==y&&(f(S),s[S.id]=y)}function h(S){const C=p();S.__bindingPointIndex=C;const T=t.createBuffer(),A=S.__size,y=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,A,y),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,C,T),T}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const C=r[S.id],T=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,C);for(let y=0,b=T.length;y<b;y++){const P=T[y];if(Array.isArray(P))for(let N=0,O=P.length;N<O;N++)m(P[N],y,N,A);else m(P,y,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,C,T,A){if(E(S,C,T,A)===!0){const y=S.__offset,b=S.value;if(Array.isArray(b)){let P=0;for(let N=0;N<b.length;N++){const O=b[N],Y=d(O);v(O,S.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(b,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,y,S.__data)}}function v(S,C,T){typeof S=="number"||typeof S=="boolean"?C[0]=S:S.isMatrix3?(C[0]=S.elements[0],C[1]=S.elements[1],C[2]=S.elements[2],C[3]=0,C[4]=S.elements[3],C[5]=S.elements[4],C[6]=S.elements[5],C[7]=0,C[8]=S.elements[6],C[9]=S.elements[7],C[10]=S.elements[8],C[11]=0):ArrayBuffer.isView(S)?C.set(new S.constructor(S.buffer,S.byteOffset,C.length)):S.toArray(C,T)}function E(S,C,T,A){const y=S.value,b=C+"_"+T;if(A[b]===void 0)return typeof y=="number"||typeof y=="boolean"?A[b]=y:ArrayBuffer.isView(y)?A[b]=y.slice():A[b]=y.clone(),!0;{const P=A[b];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return A[b]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function g(S){const C=S.uniforms;let T=0;const A=16;for(let b=0,P=C.length;b<P;b++){const N=Array.isArray(C[b])?C[b]:[C[b]];for(let O=0,Y=N.length;O<Y;O++){const te=N[O],k=Array.isArray(te.value)?te.value:[te.value];for(let K=0,H=k.length;K<H;K++){const U=k[K],j=d(U),ee=T%A,ie=ee%j.boundary,le=ee+ie;T+=ie,le!==0&&A-le<j.storage&&(T+=A-le),te.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=T,T+=j.storage}}}const y=T%A;return y>0&&(T+=A-y),S.__size=T,S.__cache={},this}function d(S){const C={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(C.boundary=16,C.storage=S.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",S),C}function x(S){const C=S.target;C.removeEventListener("dispose",x);const T=a.indexOf(C.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[C.id]),delete r[C.id],delete s[C.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:M}}const pC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function mC(){return ni===null&&(ni=new oE(pC,16,16,Yr,Ui),ni.name="DFG_LUT",ni.minFilter=Qt,ni.magFilter=Qt,ni.wrapS=Ai,ni.wrapT=Ai,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class gC{constructor(e={}){const{canvas:n=OM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Nn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const E=m,g=new Set([Ph,Rh,bh]),d=new Set([Nn,hi,Za,Qa,Ah,Ch]),x=new Uint32Array(4),M=new Int32Array(4),S=new V;let C=null,T=null;const A=[],y=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,O=null,Y=null,te=null,k=null;this._outputColorSpace=bn;let K=0,H=0,U=null,j=-1,ee=null;const ie=new St,le=new St;let Ve=null;const et=new Je(0);let Ge=0,$=n.width,oe=n.height,se=1,De=null,Ue=null;const Pe=new St(0,0,$,oe),Et=new St(0,0,$,oe);let He=!1;const st=new yx;let Qe=!1,Xe=!1;const Ct=new Nt,Lt=new V,Ot=new St,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function bt(){return U===null?se:1}let D=i;function on(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wh}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",Zn,!1),D===null){const I="webgl2";if(D=on(I,w),D===null)throw on(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw $e("WebGLRenderer: "+w.message),w}let tt,R,_,F,G,X,ae,ue,q,J,de,Te,pe,fe,be,Ne,Fe,L,ce,Q,he,xe,ne;function we(){tt=new m2(D),tt.init(),he=new aC(D,tt),R=new o2(D,tt,e,he),_=new rC(D,tt),R.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),Y=D.createFramebuffer(),te=D.createFramebuffer(),k=D.createFramebuffer(),F=new x2(D),G=new WA,X=new sC(D,tt,_,G,R,he,F),ae=new p2(P),ue=new ME(D),xe=new s2(D,ue),q=new g2(D,ue,F,xe),J=new y2(D,q,ue,xe,F),L=new _2(D,R,X),be=new l2(G),de=new GA(P,ae,tt,R,xe,be),Te=new fC(P,G),pe=new XA,fe=new QA(tt),Fe=new r2(P,ae,_,J,v,l),Ne=new iC(P,J,R),ne=new hC(D,F,R,_),ce=new a2(D,tt,F),Q=new v2(D,tt,F),F.programs=de.programs,P.capabilities=R,P.extensions=tt,P.properties=G,P.renderLists=pe,P.shadowMap=Ne,P.state=_,P.info=F}we(),E!==Nn&&(b=new M2(E,n.width,n.height,o,r,s));const Me=new uC(P,D);this.xr=Me,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize($,oe,!1))},this.getSize=function(w){return w.set($,oe)},this.setSize=function(w,I,W=!0){if(Me.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}$=w,oe=I,n.width=Math.floor(w*se),n.height=Math.floor(I*se),W===!0&&(n.style.width=w+"px",n.style.height=I+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set($*se,oe*se).floor()},this.setDrawingBufferSize=function(w,I,W){$=w,oe=I,se=W,n.width=Math.floor(w*W),n.height=Math.floor(I*W),this.setViewport(0,0,w,I)},this.setEffects=function(w){if(E===Nn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let I=0;I<w.length;I++)if(w[I].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ie)},this.getViewport=function(w){return w.copy(Pe)},this.setViewport=function(w,I,W,B){w.isVector4?Pe.set(w.x,w.y,w.z,w.w):Pe.set(w,I,W,B),_.viewport(ie.copy(Pe).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy(Et)},this.setScissor=function(w,I,W,B){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,I,W,B),_.scissor(le.copy(Et).multiplyScalar(se).round())},this.getScissorTest=function(){return He},this.setScissorTest=function(w){_.setScissorTest(He=w)},this.setOpaqueSort=function(w){De=w},this.setTransparentSort=function(w){Ue=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(w=!0,I=!0,W=!0){let B=0;if(w){let z=!1;if(U!==null){const ve=U.texture.format;z=g.has(ve)}if(z){const ve=U.texture.type,ye=d.has(ve),ge=Fe.getClearColor(),Ee=Fe.getClearAlpha(),Ae=ge.r,Oe=ge.g,Be=ge.b;ye?(x[0]=Ae,x[1]=Oe,x[2]=Be,x[3]=Ee,D.clearBufferuiv(D.COLOR,0,x)):(M[0]=Ae,M[1]=Oe,M[2]=Be,M[3]=Ee,D.clearBufferiv(D.COLOR,0,M))}else B|=D.COLOR_BUFFER_BIT}I&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),O=w},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",Zn,!1),Fe.dispose(),pe.dispose(),fe.dispose(),G.dispose(),ae.dispose(),J.dispose(),xe.dispose(),ne.dispose(),de.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Hh),Me.removeEventListener("sessionend",Gh),Tr.stop()};function xt(w){w.preventDefault(),wm("WebGLRenderer: Context Lost."),N=!0}function lt(){wm("WebGLRenderer: Context Restored."),N=!1;const w=F.autoReset,I=Ne.enabled,W=Ne.autoUpdate,B=Ne.needsUpdate,z=Ne.type;we(),F.autoReset=w,Ne.enabled=I,Ne.autoUpdate=W,Ne.needsUpdate=B,Ne.type=z}function Zn(w){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qn(w){const I=w.target;I.removeEventListener("dispose",Qn),Ux(I)}function Ux(w){Fx(w),G.remove(w)}function Fx(w){const I=G.get(w).programs;I!==void 0&&(I.forEach(function(W){de.releaseProgram(W)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,W,B,z,ve){I===null&&(I=Vt);const ye=z.isMesh&&z.matrixWorld.determinantAffine()<0,ge=Bx(w,I,W,B,z);_.setMaterial(B,ye);let Ee=W.index,Ae=1;if(B.wireframe===!0){if(Ee=q.getWireframeAttribute(W),Ee===void 0)return;Ae=2}const Oe=W.drawRange,Be=W.attributes.position;let Ce=Oe.start*Ae,rt=(Oe.start+Oe.count)*Ae;ve!==null&&(Ce=Math.max(Ce,ve.start*Ae),rt=Math.min(rt,(ve.start+ve.count)*Ae)),Ee!==null?(Ce=Math.max(Ce,0),rt=Math.min(rt,Ee.count)):Be!=null&&(Ce=Math.max(Ce,0),rt=Math.min(rt,Be.count));const wt=rt-Ce;if(wt<0||wt===1/0)return;xe.setup(z,B,ge,W,Ee);let _t,at=ce;if(Ee!==null&&(_t=ue.get(Ee),at=Q,at.setIndex(_t)),z.isMesh)B.wireframe===!0?(_.setLineWidth(B.wireframeLinewidth*bt()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(z.isLine){let Xt=B.linewidth;Xt===void 0&&(Xt=1),_.setLineWidth(Xt*bt()),z.isLineSegments?at.setMode(D.LINES):z.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else z.isPoints?at.setMode(D.POINTS):z.isSprite&&at.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Xt=z._multiDrawStarts,_e=z._multiDrawCounts,gn=z._multiDrawCount,qe=Ee?ue.get(Ee).bytesPerElement:1,An=G.get(B).currentProgram.getUniforms();for(let Jn=0;Jn<gn;Jn++)An.setValue(D,"_gl_DrawID",Jn),at.render(Xt[Jn]/qe,_e[Jn])}else if(z.isInstancedMesh)at.renderInstances(Ce,wt,z.count);else if(W.isInstancedBufferGeometry){const Xt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_e=Math.min(W.instanceCount,Xt);at.renderInstances(Ce,wt,_e)}else at.render(Ce,wt)};function Vh(w,I,W){w.transparent===!0&&w.side===Ei&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,fo(w,I,W),w.side=_r,w.needsUpdate=!0,fo(w,I,W),w.side=Ei):fo(w,I,W)}this.compile=function(w,I,W=null){W===null&&(W=w),T=fe.get(W),T.init(I),y.push(T),W.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(T.pushLight(z),z.castShadow&&T.pushShadow(z))}),T.setupLights();const B=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ve=z.material;if(ve)if(Array.isArray(ve))for(let ye=0;ye<ve.length;ye++){const ge=ve[ye];Vh(ge,W,z),B.add(ge)}else Vh(ve,W,z),B.add(ve)}),T=y.pop(),B},this.compileAsync=function(w,I,W=null){const B=this.compile(w,I,W);return new Promise(z=>{function ve(){if(B.forEach(function(ye){G.get(ye).currentProgram.isReady()&&B.delete(ye)}),B.size===0){z(w);return}setTimeout(ve,10)}tt.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Sc=null;function Ox(w){Sc&&Sc(w)}function Hh(){Tr.stop()}function Gh(){Tr.start()}const Tr=new Tx;Tr.setAnimationLoop(Ox),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(w){Sc=w,Me.setAnimationLoop(w),w===null?Tr.stop():Tr.start()},Me.addEventListener("sessionstart",Hh),Me.addEventListener("sessionend",Gh),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(w,I);const W=Me.enabled===!0&&Me.isPresenting===!0,B=b!==null&&(U===null||W)&&b.begin(P,U);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(I),I=Me.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,I,U),T=fe.get(w,y.length),T.init(I),T.state.textureUnits=X.getTextureUnits(),y.push(T),Ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),st.setFromProjectionMatrix(Ct,oi,I.reversedDepth),Xe=this.localClippingEnabled,Qe=be.init(this.clippingPlanes,Xe),C=pe.get(w,A.length),C.init(),A.push(C),Me.enabled===!0&&Me.isPresenting===!0){const ye=P.xr.getDepthSensingMesh();ye!==null&&Mc(ye,I,-1/0,P.sortObjects)}Mc(w,I,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(De,Ue,I.reversedDepth),vt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,vt&&Fe.addToRenderList(C,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&be.beginShadows();const z=T.state.shadowsArray;if(Ne.render(z,w,I),Qe===!0&&be.endShadows(),(B&&b.hasRenderPass())===!1){const ye=C.opaque,ge=C.transmissive;if(T.setupLights(),I.isArrayCamera){const Ee=I.cameras;if(ge.length>0)for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Be=Ee[Ae];jh(ye,ge,w,Be)}vt&&Fe.render(w);for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Be=Ee[Ae];Wh(C,w,Be,Be.viewport)}}else ge.length>0&&jh(ye,ge,w,I),vt&&Fe.render(w),Wh(C,w,I)}U!==null&&H===0&&(X.updateMultisampleRenderTarget(U),X.updateRenderTargetMipmap(U)),B&&b.end(P),w.isScene===!0&&w.onAfterRender(P,w,I),xe.resetDefaultState(),j=-1,ee=null,y.pop(),y.length>0?(T=y[y.length-1],X.setTextureUnits(T.state.textureUnits),Qe===!0&&be.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?C=A[A.length-1]:C=null,O!==null&&O.renderEnd()};function Mc(w,I,W,B){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLightProbeGrid)T.pushLightProbeGrid(w);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||st.intersectsSprite(w)){B&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ct);const ye=J.update(w),ge=w.material;ge.visible&&C.push(w,ye,ge,W,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||st.intersectsObject(w))){const ye=J.update(w),ge=w.material;if(B&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ot.copy(ye.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(Ct)),Array.isArray(ge)){const Ee=ye.groups;for(let Ae=0,Oe=Ee.length;Ae<Oe;Ae++){const Be=Ee[Ae],Ce=ge[Be.materialIndex];Ce&&Ce.visible&&C.push(w,ye,Ce,W,Ot.z,Be)}}else ge.visible&&C.push(w,ye,ge,W,Ot.z,null)}}const ve=w.children;for(let ye=0,ge=ve.length;ye<ge;ye++)Mc(ve[ye],I,W,B)}function Wh(w,I,W,B){const{opaque:z,transmissive:ve,transparent:ye}=w;T.setupLightsView(W),Qe===!0&&be.setGlobalState(P.clippingPlanes,W),B&&_.viewport(ie.copy(B)),z.length>0&&uo(z,I,W),ve.length>0&&uo(ve,I,W),ye.length>0&&uo(ye,I,W),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function jh(w,I,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[B.id]===void 0){const Ce=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[B.id]=new di(1,1,{generateMipmaps:!0,type:Ce?Ui:Nn,minFilter:kr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:We.workingColorSpace})}const ve=T.state.transmissionRenderTarget[B.id],ye=B.viewport||ie;ve.setSize(ye.z*P.transmissionResolutionScale,ye.w*P.transmissionResolutionScale);const ge=P.getRenderTarget(),Ee=P.getActiveCubeFace(),Ae=P.getActiveMipmapLevel();P.setRenderTarget(ve),P.getClearColor(et),Ge=P.getClearAlpha(),Ge<1&&P.setClearColor(16777215,.5),P.clear(),vt&&Fe.render(W);const Oe=P.toneMapping;P.toneMapping=ui;const Be=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),T.setupLightsView(B),Qe===!0&&be.setGlobalState(P.clippingPlanes,B),uo(w,W,B),X.updateMultisampleRenderTarget(ve),X.updateRenderTargetMipmap(ve),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let rt=0,wt=I.length;rt<wt;rt++){const _t=I[rt],{object:at,geometry:Xt,material:_e,group:gn}=_t;if(_e.side===Ei&&at.layers.test(B.layers)){const qe=_e.side;_e.side=mn,_e.needsUpdate=!0,Xh(at,W,B,Xt,_e,gn),_e.side=qe,_e.needsUpdate=!0,Ce=!0}}Ce===!0&&(X.updateMultisampleRenderTarget(ve),X.updateRenderTargetMipmap(ve))}P.setRenderTarget(ge,Ee,Ae),P.setClearColor(et,Ge),Be!==void 0&&(B.viewport=Be),P.toneMapping=Oe}function uo(w,I,W){const B=I.isScene===!0?I.overrideMaterial:null;for(let z=0,ve=w.length;z<ve;z++){const ye=w[z],{object:ge,geometry:Ee,group:Ae}=ye;let Oe=ye.material;Oe.allowOverride===!0&&B!==null&&(Oe=B),ge.layers.test(W.layers)&&Xh(ge,I,W,Ee,Oe,Ae)}}function Xh(w,I,W,B,z,ve){w.onBeforeRender(P,I,W,B,z,ve),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(P,I,W,B,w,ve),z.transparent===!0&&z.side===Ei&&z.forceSinglePass===!1?(z.side=mn,z.needsUpdate=!0,P.renderBufferDirect(W,I,B,z,w,ve),z.side=_r,z.needsUpdate=!0,P.renderBufferDirect(W,I,B,z,w,ve),z.side=Ei):P.renderBufferDirect(W,I,B,z,w,ve),w.onAfterRender(P,I,W,B,z,ve)}function fo(w,I,W){I.isScene!==!0&&(I=Vt);const B=G.get(w),z=T.state.lights,ve=T.state.shadowsArray,ye=z.state.version,ge=de.getParameters(w,z.state,ve,I,W,T.state.lightProbeGridArray),Ee=de.getProgramCacheKey(ge);let Ae=B.programs;B.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?I.environment:null,B.fog=I.fog;const Oe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;B.envMap=ae.get(w.envMap||B.environment,Oe),B.envMapRotation=B.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Ae===void 0&&(w.addEventListener("dispose",Qn),Ae=new Map,B.programs=Ae);let Be=Ae.get(Ee);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===ye)return Yh(w,ge),Be}else ge.uniforms=de.getUniforms(w),O!==null&&w.isNodeMaterial&&O.build(w,W,ge),w.onBeforeCompile(ge,P),Be=de.acquireProgram(ge,Ee),Ae.set(Ee,Be),B.uniforms=ge.uniforms;const Ce=B.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=be.uniform),Yh(w,ge),B.needsLights=Vx(w),B.lightsStateVersion=ye,B.needsLights&&(Ce.ambientLightColor.value=z.state.ambient,Ce.lightProbe.value=z.state.probe,Ce.directionalLights.value=z.state.directional,Ce.directionalLightShadows.value=z.state.directionalShadow,Ce.spotLights.value=z.state.spot,Ce.spotLightShadows.value=z.state.spotShadow,Ce.rectAreaLights.value=z.state.rectArea,Ce.ltc_1.value=z.state.rectAreaLTC1,Ce.ltc_2.value=z.state.rectAreaLTC2,Ce.pointLights.value=z.state.point,Ce.pointLightShadows.value=z.state.pointShadow,Ce.hemisphereLights.value=z.state.hemi,Ce.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ce.spotLightMatrix.value=z.state.spotLightMatrix,Ce.spotLightMap.value=z.state.spotLightMap,Ce.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=T.state.lightProbeGridArray.length>0,B.currentProgram=Be,B.uniformsList=null,Be}function qh(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=gl.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function Yh(w,I){const W=G.get(w);W.outputColorSpace=I.outputColorSpace,W.batching=I.batching,W.batchingColor=I.batchingColor,W.instancing=I.instancing,W.instancingColor=I.instancingColor,W.instancingMorph=I.instancingMorph,W.skinning=I.skinning,W.morphTargets=I.morphTargets,W.morphNormals=I.morphNormals,W.morphColors=I.morphColors,W.morphTargetsCount=I.morphTargetsCount,W.numClippingPlanes=I.numClippingPlanes,W.numIntersection=I.numClipIntersection,W.vertexAlphas=I.vertexAlphas,W.vertexTangents=I.vertexTangents,W.toneMapping=I.toneMapping}function kx(w,I){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;S.setFromMatrixPosition(I.matrixWorld);for(let W=0,B=w.length;W<B;W++){const z=w[W];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function Bx(w,I,W,B,z){I.isScene!==!0&&(I=Vt),X.resetTextureUnits();const ve=I.fog,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?I.environment:null,ge=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:We.workingColorSpace,Ee=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ae=ae.get(B.envMap||ye,Ee),Oe=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Be=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ce=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color;let _t=ui;B.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(_t=P.toneMapping);const at=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Xt=at!==void 0?at.length:0,_e=G.get(B),gn=T.state.lights;if(Qe===!0&&(Xe===!0||w!==ee)){const ct=w===ee&&B.id===j;be.setState(B,w,ct)}let qe=!1;B.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==gn.state.version||_e.outputColorSpace!==ge||z.isBatchedMesh&&_e.batching===!1||!z.isBatchedMesh&&_e.batching===!0||z.isBatchedMesh&&_e.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_e.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_e.instancing===!1||!z.isInstancedMesh&&_e.instancing===!0||z.isSkinnedMesh&&_e.skinning===!1||!z.isSkinnedMesh&&_e.skinning===!0||z.isInstancedMesh&&_e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_e.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_e.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_e.instancingMorph===!1&&z.morphTexture!==null||_e.envMap!==Ae||B.fog===!0&&_e.fog!==ve||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==be.numPlanes||_e.numIntersection!==be.numIntersection)||_e.vertexAlphas!==Oe||_e.vertexTangents!==Be||_e.morphTargets!==Ce||_e.morphNormals!==rt||_e.morphColors!==wt||_e.toneMapping!==_t||_e.morphTargetsCount!==Xt||!!_e.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,_e.__version=B.version);let An=_e.currentProgram;qe===!0&&(An=fo(B,I,z),O&&B.isNodeMaterial&&O.onUpdateProgram(B,An,_e));let Jn=!1,zi=!1,Jr=!1;const ot=An.getUniforms(),Tt=_e.uniforms;if(_.useProgram(An.program)&&(Jn=!0,zi=!0,Jr=!0),B.id!==j&&(j=B.id,zi=!0),_e.needsLights){const ct=kx(T.state.lightProbeGridArray,z);_e.lightProbeGrid!==ct&&(_e.lightProbeGrid=ct,zi=!0)}if(Jn||ee!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",w.projectionMatrix),ot.setValue(D,"viewMatrix",w.matrixWorldInverse);const Hi=ot.map.cameraPosition;Hi!==void 0&&Hi.setValue(D,Lt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ot.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,zi=!0,Jr=!0)}if(_e.needsLights&&(gn.state.directionalShadowMap.length>0&&ot.setValue(D,"directionalShadowMap",gn.state.directionalShadowMap,X),gn.state.spotShadowMap.length>0&&ot.setValue(D,"spotShadowMap",gn.state.spotShadowMap,X),gn.state.pointShadowMap.length>0&&ot.setValue(D,"pointShadowMap",gn.state.pointShadowMap,X)),z.isSkinnedMesh){ot.setOptional(D,z,"bindMatrix"),ot.setOptional(D,z,"bindMatrixInverse");const ct=z.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),ot.setValue(D,"boneTexture",ct.boneTexture,X))}z.isBatchedMesh&&(ot.setOptional(D,z,"batchingTexture"),ot.setValue(D,"batchingTexture",z._matricesTexture,X),ot.setOptional(D,z,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",z._indirectTexture,X),ot.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",z._colorsTexture,X));const Vi=W.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&L.update(z,W,An),(zi||_e.receiveShadow!==z.receiveShadow)&&(_e.receiveShadow=z.receiveShadow,ot.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&I.environment!==null&&(Tt.envMapIntensity.value=I.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=mC()),zi){if(ot.setValue(D,"toneMappingExposure",P.toneMappingExposure),_e.needsLights&&zx(Tt,Jr),ve&&B.fog===!0&&Te.refreshFogUniforms(Tt,ve),Te.refreshMaterialUniforms(Tt,B,se,oe,T.state.transmissionRenderTarget[w.id]),_e.needsLights&&_e.lightProbeGrid){const ct=_e.lightProbeGrid;Tt.probesSH.value=ct.texture,Tt.probesMin.value.copy(ct.boundingBox.min),Tt.probesMax.value.copy(ct.boundingBox.max),Tt.probesResolution.value.copy(ct.resolution)}gl.upload(D,qh(_e),Tt,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gl.upload(D,qh(_e),Tt,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ot.setValue(D,"center",z.center),ot.setValue(D,"modelViewMatrix",z.modelViewMatrix),ot.setValue(D,"normalMatrix",z.normalMatrix),ot.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){const ct=B.uniformsGroups;for(let Hi=0,es=ct.length;Hi<es;Hi++){const $h=ct[Hi];ne.update($h,An),ne.bind($h,An)}}return An}function zx(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Vx(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,I,W){const B=G.get(w);B.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=I,G.get(w.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,I){const W=G.get(w);W.__webglFramebuffer=I,W.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,W=0){U=w,K=I,H=W;let B=null,z=!1,ve=!1;if(w){const ge=G.get(w);if(ge.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,ge.__webglFramebuffer),ie.copy(w.viewport),le.copy(w.scissor),Ve=w.scissorTest,_.viewport(ie),_.scissor(le),_.setScissorTest(Ve),j=-1;return}else if(ge.__webglFramebuffer===void 0)X.setupRenderTarget(w);else if(ge.__hasExternalTextures)X.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(ge.__boundDepthTexture!==Oe){if(Oe!==null&&G.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(w)}}const Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ve=!0);const Ae=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ae[I])?B=Ae[I][W]:B=Ae[I],z=!0):w.samples>0&&X.useMultisampledRTT(w)===!1?B=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Ae)?B=Ae[W]:B=Ae,ie.copy(w.viewport),le.copy(w.scissor),Ve=w.scissorTest}else ie.copy(Pe).multiplyScalar(se).floor(),le.copy(Et).multiplyScalar(se).floor(),Ve=He;if(W!==0&&(B=Y),_.bindFramebuffer(D.FRAMEBUFFER,B)&&_.drawBuffers(w,B),_.viewport(ie),_.scissor(le),_.setScissorTest(Ve),z){const ge=G.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,ge.__webglTexture,W)}else if(ve){const ge=I;for(let Ee=0;Ee<w.textures.length;Ee++){const Ae=G.get(w.textures[Ee]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ee,Ae.__webglTexture,W,ge)}}else if(w!==null&&W!==0){const ge=G.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ge.__webglTexture,W)}j=-1},this.readRenderTargetPixels=function(w,I,W,B,z,ve,ye,ge=0){if(!(w&&w.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){_.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const Ae=w.textures[ge],Oe=Ae.format,Be=Ae.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Oe)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Be)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-B&&W>=0&&W<=w.height-z&&D.readPixels(I,W,B,z,he.convert(Oe),he.convert(Be),ve)}finally{const Ae=U!==null?G.get(U).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,I,W,B,z,ve,ye,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(I>=0&&I<=w.width-B&&W>=0&&W<=w.height-z){_.bindFramebuffer(D.FRAMEBUFFER,Ee);const Ae=w.textures[ge],Oe=Ae.format,Be=Ae.type;if(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ve.byteLength,D.STREAM_READ),D.readPixels(I,W,B,z,he.convert(Oe),he.convert(Be),0);const rt=U!==null?G.get(U).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,rt);const wt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await kM(D,wt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ve),D.deleteBuffer(Ce),D.deleteSync(wt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,I=null,W=0){const B=Math.pow(2,-W),z=Math.floor(w.image.width*B),ve=Math.floor(w.image.height*B),ye=I!==null?I.x:0,ge=I!==null?I.y:0;X.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,ye,ge,z,ve),_.unbindTexture()},this.copyTextureToTexture=function(w,I,W=null,B=null,z=0,ve=0){let ye,ge,Ee,Ae,Oe,Be,Ce,rt,wt;const _t=w.isCompressedTexture?w.mipmaps[ve]:w.image;if(W!==null)ye=W.max.x-W.min.x,ge=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,Ae=W.min.x,Oe=W.min.y,Be=W.isBox3?W.min.z:0;else{const Tt=Math.pow(2,-z);ye=Math.floor(_t.width*Tt),ge=Math.floor(_t.height*Tt),w.isDataArrayTexture?Ee=_t.depth:w.isData3DTexture?Ee=Math.floor(_t.depth*Tt):Ee=1,Ae=0,Oe=0,Be=0}B!==null?(Ce=B.x,rt=B.y,wt=B.z):(Ce=0,rt=0,wt=0);const at=he.convert(I.format),Xt=he.convert(I.type);let _e;I.isData3DTexture?(X.setTexture3D(I,0),_e=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(X.setTexture2DArray(I,0),_e=D.TEXTURE_2D_ARRAY):(X.setTexture2D(I,0),_e=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const gn=_.getParameter(D.UNPACK_ROW_LENGTH),qe=_.getParameter(D.UNPACK_IMAGE_HEIGHT),An=_.getParameter(D.UNPACK_SKIP_PIXELS),Jn=_.getParameter(D.UNPACK_SKIP_ROWS),zi=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),_.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Be);const Jr=w.isDataArrayTexture||w.isData3DTexture,ot=I.isDataArrayTexture||I.isData3DTexture;if(w.isDepthTexture){const Tt=G.get(w),Vi=G.get(I),ct=G.get(Tt.__renderTarget),Hi=G.get(Vi.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,ct.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let es=0;es<Ee;es++)Jr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(w).__webglTexture,z,Be+es),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(I).__webglTexture,ve,wt+es)),D.blitFramebuffer(Ae,Oe,ye,ge,Ce,rt,ye,ge,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||G.has(w)){const Tt=G.get(w),Vi=G.get(I);_.bindFramebuffer(D.READ_FRAMEBUFFER,te),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let ct=0;ct<Ee;ct++)Jr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Tt.__webglTexture,z,Be+ct):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Tt.__webglTexture,z),ot?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Vi.__webglTexture,ve,wt+ct):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Vi.__webglTexture,ve),z!==0?D.blitFramebuffer(Ae,Oe,ye,ge,Ce,rt,ye,ge,D.COLOR_BUFFER_BIT,D.NEAREST):ot?D.copyTexSubImage3D(_e,ve,Ce,rt,wt+ct,Ae,Oe,ye,ge):D.copyTexSubImage2D(_e,ve,Ce,rt,Ae,Oe,ye,ge);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ot?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(_e,ve,Ce,rt,wt,ye,ge,Ee,at,Xt,_t.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(_e,ve,Ce,rt,wt,ye,ge,Ee,at,_t.data):D.texSubImage3D(_e,ve,Ce,rt,wt,ye,ge,Ee,at,Xt,_t):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ve,Ce,rt,ye,ge,at,Xt,_t.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ve,Ce,rt,_t.width,_t.height,at,_t.data):D.texSubImage2D(D.TEXTURE_2D,ve,Ce,rt,ye,ge,at,Xt,_t);_.pixelStorei(D.UNPACK_ROW_LENGTH,gn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qe),_.pixelStorei(D.UNPACK_SKIP_PIXELS,An),_.pixelStorei(D.UNPACK_SKIP_ROWS,Jn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,zi),ve===0&&I.generateMipmaps&&D.generateMipmap(_e),_.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&X.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?X.setTextureCube(w,0):w.isData3DTexture?X.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?X.setTexture2DArray(w,0):X.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){K=0,H=0,U=null,_.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),n.unpackColorSpace=We._getUnpackColorSpace()}}const vC=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,xC=`
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uFlakeSize;
uniform float uMinFlakeSize;
uniform float uPixelResolution;
uniform float uSpeed;
uniform float uDepthFade;
uniform float uFarPlane;
uniform vec3 uColor;
uniform float uBrightness;
uniform float uGamma;
uniform float uDensity;
uniform float uVariant;
uniform float uDirection;

// Precomputed constants
#define PI 3.14159265
#define PI_OVER_6 0.5235988
#define PI_OVER_3 1.0471976
#define INV_SQRT3 0.57735027
#define M1 1597334677U
#define M2 3812015801U
#define M3 3299493293U
#define F0 2.3283064e-10

// Optimized hash - inline multiplication
#define hash(n) (n * (n ^ (n >> 15)))
#define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

// Precomputed camera basis vectors (normalized vec3(1,1,1), vec3(1,0,-1))
const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
const vec3 camI = vec3(0.70710678, 0.0, -0.70710678);
const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);

// Precomputed branch direction
const vec2 b1d = vec2(0.574, 0.819);

vec3 hash3(uint n) {
  uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
  return vec3(hashed) * F0;
}

float snowflakeDist(vec2 p) {
  float r = length(p);
  float a = atan(p.y, p.x);
  a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
  vec2 q = r * vec2(cos(a), sin(a));
  float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
  float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
  float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
  float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
  float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
  return min(dMain, min(dB1, dB2)) * 10.0;
}

void main() {
  // Precompute reciprocals to avoid division
  float invPixelRes = 1.0 / uPixelResolution;
  float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
  float invPixelSize = 1.0 / pixelSize;
  
  vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
  vec2 res = uResolution * invPixelSize;
  float invResX = 1.0 / res.x;

  vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
  ray = ray.x * camI + ray.y * camJ + ray.z * camK;

  // Precompute time-based values
  float timeSpeed = uTime * uSpeed;
  float windX = cos(uDirection) * 0.4;
  float windY = sin(uDirection) * 0.4;
  vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
  vec3 pos = camPos;

  // Precompute ray reciprocal for strides
  vec3 absRay = max(abs(ray), vec3(0.001));
  vec3 strides = 1.0 / absRay;
  vec3 raySign = step(ray, vec3(0.0));
  vec3 phase = fract(pos) * strides;
  phase = mix(strides - phase, phase, raySign);

  // Precompute for intersection test
  float rayDotCamK = dot(ray, camK);
  float invRayDotCamK = 1.0 / rayDotCamK;
  float invDepthFade = 1.0 / uDepthFade;
  float halfInvResX = 0.5 * invResX;
  vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);

  float t = 0.0;
  for (int i = 0; i < 128; i++) {
    if (t >= uFarPlane) break;
    
    vec3 fpos = floor(pos);
    uint cellCoord = coord3(fpos);
    float cellHash = hash3(cellCoord).x;

    if (cellHash < uDensity) {
      vec3 h = hash3(cellCoord);
      
      // Optimized flake position calculation
      vec3 sinArg1 = fpos.yzx * 0.073;
      vec3 sinArg2 = fpos.zxy * 0.27;
      vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
      flakePos = flakePos * 0.8 + 0.1 + fpos;

      float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;
      
      if (toIntersection > 0.0) {
        vec3 testPos = pos + ray * toIntersection - flakePos;
        float testX = dot(testPos, camI);
        float testY = dot(testPos, camJ);
        vec2 testUV = abs(vec2(testX, testY));
        
        float depth = dot(flakePos - camPos, camK);
        float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);
        
        // Avoid branching with step functions where possible
        float dist;
        if (uVariant < 0.5) {
          dist = max(testUV.x, testUV.y);
        } else if (uVariant < 1.5) {
          dist = length(testUV);
        } else {
          float invFlakeSize = 1.0 / flakeSize;
          dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
        }

        if (dist < flakeSize) {
          float flakeSizeRatio = uFlakeSize / flakeSize;
          float intensity = exp2(-(t + toIntersection) * invDepthFade) *
                           min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
          gl_FragColor = vec4(uColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
          return;
        }
      }
    }

    float nextStep = min(min(phase.x, phase.y), phase.z);
    vec3 sel = step(phase, vec3(nextStep));
    phase = phase - nextStep + strides * sel;
    t += nextStep;
    pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
  }

  gl_FragColor = vec4(0.0);
}
`;function hg({color:t="#ffffff",flakeSize:e=.01,minFlakeSize:n=1.25,pixelResolution:i=200,speed:r=1.25,depthFade:s=8,farPlane:a=20,brightness:o=1,gamma:l=.4545,density:c=.3,variant:h="square",direction:p=125,className:f="",style:m={}}){const v=Z.useRef(null),E=Z.useRef(0),g=Z.useRef(!0),d=Z.useRef(null),x=Z.useRef(null),M=Z.useRef(null),S=Z.useMemo(()=>h==="round"?1:h==="snowflake"?2:0,[h]),C=Z.useMemo(()=>{const A=new Je(t);return new V(A.r,A.g,A.b)},[t]),T=Z.useCallback(()=>{M.current&&clearTimeout(M.current),M.current=window.setTimeout(()=>{const A=v.current,y=d.current,b=x.current;if(!A||!y||!b)return;const P=A.offsetWidth,N=A.offsetHeight;y.setSize(P,N),b.uniforms.uResolution.value.set(P,N)},100)},[]);return Z.useEffect(()=>{const A=v.current;if(!A)return;const y=new IntersectionObserver(([b])=>{g.current=b.isIntersecting},{threshold:0});return y.observe(A),()=>y.disconnect()},[]),Z.useEffect(()=>{const A=v.current;if(!A)return;const y=new eE,b=new Uh(-1,1,1,-1,0,1),P=new gC({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.setSize(A.offsetWidth,A.offsetHeight),P.setClearColor(0,0),A.appendChild(P.domElement),d.current=P;const N=new Kn({vertexShader:vC,fragmentShader:xC,uniforms:{uTime:{value:0},uResolution:{value:new Ze(A.offsetWidth,A.offsetHeight)},uFlakeSize:{value:e},uMinFlakeSize:{value:n},uPixelResolution:{value:i},uSpeed:{value:r},uDepthFade:{value:s},uFarPlane:{value:a},uColor:{value:C.clone()},uBrightness:{value:o},uGamma:{value:l},uDensity:{value:c},uVariant:{value:S},uDirection:{value:p*Math.PI/180}},transparent:!0});x.current=N;const O=new co(2,2);y.add(new pi(O,N)),window.addEventListener("resize",T);const Y=performance.now(),te=()=>{E.current=requestAnimationFrame(te),g.current&&(N.uniforms.uTime.value=(performance.now()-Y)*.001,P.render(y,b))};return te(),()=>{cancelAnimationFrame(E.current),window.removeEventListener("resize",T),M.current&&clearTimeout(M.current),A.contains(P.domElement)&&A.removeChild(P.domElement),P.dispose(),P.forceContextLoss(),O.dispose(),N.dispose(),d.current=null,x.current=null}},[T]),Z.useEffect(()=>{const A=x.current;A&&(A.uniforms.uFlakeSize.value=e,A.uniforms.uMinFlakeSize.value=n,A.uniforms.uPixelResolution.value=i,A.uniforms.uSpeed.value=r,A.uniforms.uDepthFade.value=s,A.uniforms.uFarPlane.value=a,A.uniforms.uBrightness.value=o,A.uniforms.uGamma.value=l,A.uniforms.uDensity.value=c,A.uniforms.uVariant.value=S,A.uniforms.uDirection.value=p*Math.PI/180,A.uniforms.uColor.value.copy(C))},[e,n,i,r,s,a,o,l,c,S,p,C]),u.jsx("div",{ref:v,className:`pixel-snow-container ${f}`,style:m})}function _C(){const t=[{title:"Personalized Design",desc:"Spaces that reflect your style and personality.",icon:Z1},{title:"Functional Spaces",desc:"Smart layouts that maximize comfort and usability.",icon:q1},{title:"Quality Execution",desc:"Premium materials and flawless finishing.",icon:U1},{title:"End-to-End Support",desc:"From concept to completion, we've got you covered.",icon:Mh}],e=[{title:"Living Room",desc:"Sophisticated lounge layouts designed for relaxation and warm social gatherings.",icon:Y1,image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",category:"Living Room"},{title:"Bedroom",desc:"Serene private havens with ambient cove lighting and customized headboards.",icon:C1,image:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1000&auto=format&fit=crop",category:"Bedroom"},{title:"Kitchen",desc:"Modern open-plan culinary spaces with marble islands and custom oak millwork.",icon:J1,image:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",category:"Kitchen"},{title:"Office Spaces",desc:"Ergonomic executive suites engineered for focus, productivity, and luxury.",icon:R1,image:"https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",category:"Office"}];return u.jsxs("div",{className:"home-page",children:[u.jsxs("section",{className:"home-hero-section",children:[u.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:0},children:u.jsx(hg,{color:"#E5A93C",flakeSize:.012,minFlakeSize:1.25,pixelResolution:180,speed:.9,density:.25,direction:135,brightness:.9,variant:"round"})}),u.jsxs("div",{className:"container hero-container",style:{position:"relative",zIndex:1},children:[u.jsxs("div",{className:"hero-content-left animate-fade-in",children:[u.jsx("span",{className:"eyebrow-gold",children:"DESIGN THAT INSPIRES"}),u.jsxs("h1",{className:"hero-title",children:["Let's Create Spaces You ",u.jsx("span",{className:"text-gold",children:"Love."})]}),u.jsx("p",{className:"hero-description",children:"We design modern, functional and beautiful interiors tailored to your lifestyle and personality."}),u.jsxs("div",{className:"hero-action-buttons",children:[u.jsx(er,{to:"/portfolio",variant:"gold",children:"Explore Our Work"}),u.jsx(er,{to:"/services",variant:"outline",children:"Our Services"})]}),u.jsxs("div",{className:"hero-client-stack",children:[u.jsxs("div",{className:"avatar-group",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",alt:"Client Avatar 1"}),u.jsx("img",{src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",alt:"Client Avatar 2"}),u.jsx("img",{src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop",alt:"Client Avatar 3"}),u.jsx("img",{src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop",alt:"Client Avatar 4"})]}),u.jsxs("div",{className:"client-text",children:[u.jsx("span",{className:"client-count text-gold",children:"500+ Happy Clients"}),u.jsx("span",{className:"client-sub",children:"across the globe"})]})]})]}),u.jsx("div",{className:"hero-image-right animate-fade-in",children:u.jsx("div",{className:"hero-gold-frame-box",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",alt:"Modern Luxury Interior Living Room",className:"hero-main-img"})})})]})]}),u.jsx("section",{className:"features-strip-section",children:u.jsx("div",{className:"container",children:u.jsx("div",{className:"features-grid",children:t.map((n,i)=>{const r=n.icon;return u.jsxs("div",{className:"feature-item-card",children:[u.jsx("div",{className:"icon-circle-gold-outline",children:u.jsx(r,{size:24})}),u.jsxs("div",{className:"feature-text",children:[u.jsx("h4",{children:n.title}),u.jsx("p",{children:n.desc})]})]},i)})})})}),u.jsx("section",{className:"space-collection-section bg-cream-theme section-padding",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"space-collection-header",children:[u.jsx($n,{eyebrow:"OUR COLLECTION",title:"Designs for Every Space",light:!0}),u.jsx(er,{to:"/portfolio",variant:"gold",className:"collection-cta-btn",children:"View All Projects"})]}),u.jsx("div",{className:"space-cards-grid",children:e.map((n,i)=>{const r=n.icon;return u.jsxs("div",{className:"space-card",children:[u.jsxs("div",{className:"space-card-img-wrapper",children:[u.jsx("img",{src:n.image,alt:n.title,loading:"lazy"}),u.jsx("div",{className:"space-card-icon-circle",children:u.jsx(r,{size:22})})]}),u.jsxs("div",{className:"space-card-content",children:[u.jsx("h3",{children:n.title}),u.jsx("p",{children:n.desc}),u.jsxs(Ye,{to:`/portfolio?category=${encodeURIComponent(n.category)}`,className:"space-card-link",children:[u.jsxs("span",{children:["Explore ",n.title]}),u.jsx(xr,{size:16})]})]})]},i)})})]})}),u.jsx("section",{className:"featured-portfolio-section section-padding",children:u.jsxs("div",{className:"container",children:[u.jsx($n,{eyebrow:"OUR PORTFOLIO",title:"Featured Design Projects",highlightWord:"Projects",description:"Take a glance at our recent bespoke interior transformations engineered with precision and elegance.",center:!0}),u.jsx("div",{className:"projects-grid",children:mr.slice(0,3).map(n=>u.jsx(Eh,{project:n},n.id))}),u.jsx("div",{style:{textAlign:"center",marginTop:"48px"},children:u.jsx(er,{to:"/portfolio",variant:"outline",children:"Browse Full Portfolio"})})]})}),u.jsxs("section",{className:"home-quote-cta-banner",children:[u.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",zIndex:0},children:u.jsx(hg,{color:"#ffffff",flakeSize:.01,minFlakeSize:1.25,pixelResolution:200,speed:1,density:.25,direction:120,brightness:.85,variant:"snowflake"})}),u.jsx("div",{className:"container",style:{position:"relative",zIndex:1},children:u.jsxs("div",{className:"quote-cta-inner",children:[u.jsxs("div",{className:"quote-cta-text",children:[u.jsx("span",{className:"eyebrow-gold",children:"READY TO TRANSFORM YOUR SPACE?"}),u.jsx("h2",{children:"Let's Build Your Dream Interior Together."}),u.jsx("p",{children:"Schedule a personalized consultation with our principal interior architects today."})]}),u.jsx(er,{to:"/quote",variant:"gold",className:"quote-cta-button",children:"Get a Free Quote"})]})})]})]})}function mi({items:t}){return u.jsxs("nav",{className:"breadcrumb-container","aria-label":"Breadcrumb",children:[u.jsx(Ye,{to:"/",children:"Home"}),t.map((e,n)=>u.jsxs(wf.Fragment,{children:[u.jsx(N1,{size:14,className:"breadcrumb-separator"}),e.path?u.jsx(Ye,{to:e.path,children:e.name}):u.jsx("span",{style:{color:"var(--gold)",fontWeight:600},children:e.name})]},n))]})}function yC({member:t}){return u.jsxs("div",{className:"team-card card-hover-effect",children:[u.jsx("div",{className:"team-card-image-box",children:u.jsx("img",{src:t.image,alt:t.name,loading:"lazy"})}),u.jsxs("div",{className:"team-card-body",children:[u.jsx("h3",{className:"team-member-name",children:t.name}),u.jsx("span",{className:"team-member-role",children:t.role}),t.bio&&u.jsx("p",{className:"team-member-bio",children:t.bio}),u.jsxs("div",{className:"team-member-socials",children:[u.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer","aria-label":"Facebook",className:"team-social-icon",children:u.jsx(vh,{size:16})}),u.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer","aria-label":"Twitter",className:"team-social-icon",children:u.jsx($v,{size:16})}),u.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",className:"team-social-icon",children:u.jsx(xh,{size:16})})]})]})]})}const SC=[{id:1,name:"James Smith",role:"Founder & CEO",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",bio:"Visionary leader with over 15 years of experience shaping high-end interior spaces and luxury architectural concepts."},{id:2,name:"Emily Johnson",role:"Lead Designer",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",bio:"Passionate about modern aesthetics, spatial harmony, and creating warm, inviting residential sanctuaries."},{id:3,name:"Michael Brown",role:"Interior Architect",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",bio:"Specializing in spatial planning, structural interior modifications, and photorealistic 3D architectural rendering."},{id:4,name:"Sophia Williams",role:"Design Consultant",image:"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",bio:"Expert in luxury material finishes, custom furniture curation, layered lighting ambiance, and decorative styling."}],MC=[{value:"10+",label:"Years of Experience"},{value:"500+",label:"Projects Completed"},{value:"100%",label:"Client Satisfaction"}],EC=[{title:"Creativity",description:"Unique design concepts tailored specifically to every client's spatial personality.",icon:"Sparkles"},{title:"Integrity",description:"Honest communication, transparent budgeting, and unwavering commitment to deadlines.",icon:"ShieldCheck"},{title:"Excellence",description:"Flawless craftsmanship, premium materials, and meticulous attention to every single detail.",icon:"Award"}],wC={Sparkles:Wl,ShieldCheck:Mh,Award:A1};function TC(){return u.jsxs("div",{className:"about-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"About Us"}),u.jsx(mi,{items:[{name:"About Us"}]})]})}),u.jsx("section",{className:"about-story-section section-padding",children:u.jsxs("div",{className:"container story-grid",children:[u.jsx("div",{className:"story-image-box",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",alt:"Interio Design Studio Lounge"})}),u.jsxs("div",{className:"story-content-box",children:[u.jsx("span",{className:"eyebrow-gold",children:"WHO WE ARE"}),u.jsx("h2",{className:"story-title",children:"Passionate About Design. Dedicated to Creating Beautiful Spaces."}),u.jsx("p",{className:"story-para",children:"Interio Design Studio is a full-service interior design firm with a passion for creating elegant, functional and inspiring spaces tailored specifically to your unique personality and lifestyle."}),u.jsx("p",{className:"story-para",children:"With years of experience and a talented multidisciplinary team, we bring ideas to life with creativity, architectural precision and an uncompromising personal touch."}),u.jsx("div",{className:"stats-counters-row",children:MC.map((t,e)=>u.jsxs("div",{className:"stat-counter-item",children:[u.jsx("span",{className:"stat-value text-gold",children:t.value}),u.jsx("span",{className:"stat-label",children:t.label})]},e))})]})]})}),u.jsx("section",{className:"about-values-section section-padding bg-dark-secondary",children:u.jsxs("div",{className:"container",children:[u.jsx($n,{eyebrow:"OUR VALUES",title:"Principles That Guide Our Craft",highlightWord:"Craft",center:!0}),u.jsx("div",{className:"values-grid",children:EC.map((t,e)=>{const n=wC[t.icon]||Wl;return u.jsxs("div",{className:"value-card card-hover-effect",children:[u.jsx("div",{className:"icon-circle-gold",children:u.jsx(n,{size:24})}),u.jsx("h3",{className:"value-title",children:t.title}),u.jsx("p",{className:"value-desc",children:t.description})]},e)})})]})}),u.jsx("section",{className:"about-team-section section-padding",children:u.jsxs("div",{className:"container",children:[u.jsx($n,{eyebrow:"OUR TEAM",title:"Meet Our Creative Directors",highlightWord:"Directors",description:"Our talented team of designers and creatives bring passion, experience, and innovation to every project.",center:!0}),u.jsx("div",{className:"team-grid",children:SC.map(t=>u.jsx(yC,{member:t},t.id))})]})})]})}const AC={Layout:qv,Maximize:z1,Hammer:F1,Armchair:T1,Lamp:k1,ClipboardCheck:L1,Home:O1,Building2:P1,Box:b1,Palette:G1};function CC({service:t}){const e=AC[t.icon]||qv;return u.jsxs("div",{className:"service-card card-hover-effect",children:[u.jsxs("div",{className:"service-card-image-box",children:[u.jsx("img",{src:t.image,alt:t.title,loading:"lazy"}),u.jsx("div",{className:"service-card-icon-badge",children:u.jsx(e,{size:22})})]}),u.jsxs("div",{className:"service-card-body",children:[u.jsx("h3",{className:"service-card-title",children:t.title}),u.jsx("p",{className:"service-card-desc",children:t.description})]})]})}function bC(){return u.jsxs("div",{className:"services-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Our Services"}),u.jsx(mi,{items:[{name:"Services"}]})]})}),u.jsx("section",{className:"services-main-section section-padding",children:u.jsxs("div",{className:"container",children:[u.jsx($n,{eyebrow:"BESPOKE SOLUTIONS",title:"Comprehensive Interior Architecture & Design",highlightWord:"Architecture",description:"We offer end-to-end interior design solutions tailored to your needs and style."}),u.jsx("div",{className:"services-grid",children:iM.map(t=>u.jsx(CC,{service:t},t.id))}),u.jsx("div",{className:"services-bottom-cta",children:u.jsxs("div",{className:"cta-box bg-dark-secondary",children:[u.jsx("h3",{children:"Have a Custom Interior Project in Mind?"}),u.jsx("p",{children:"Consult with our lead architects to turn your architectural vision into reality."}),u.jsx(er,{to:"/quote",variant:"gold",children:"Request Free Quote"})]})})]})})]})}function Dx({categories:t,activeCategory:e,onSelectCategory:n}){return u.jsx("div",{className:"filter-tabs-container",children:t.map(i=>u.jsx("button",{type:"button",className:`filter-tab-btn ${e===i?"active-filter-tab":""}`,onClick:()=>n(i),children:i},i))})}function Ix({image:t,title:e,category:n,onClose:i}){return Z.useEffect(()=>{const r=s=>{s.key==="Escape"&&i()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[i]),t?u.jsx("div",{className:"lightbox-backdrop",onClick:i,children:u.jsxs("div",{className:"lightbox-content",onClick:r=>r.stopPropagation(),children:[u.jsx("button",{type:"button",className:"lightbox-close-btn",onClick:i,"aria-label":"Close modal",children:u.jsx(Kv,{size:24})}),u.jsx("div",{className:"lightbox-image-box",children:u.jsx("img",{src:t,alt:e||"Gallery Preview"})}),(e||n)&&u.jsxs("div",{className:"lightbox-caption",children:[n&&u.jsx("span",{className:"lightbox-category",children:n}),e&&u.jsx("h3",{children:e})]})]})}):null}function RC(){const[t,e]=y1(),n=t.get("category")||"All",[i,r]=Z.useState(n),[s,a]=Z.useState(null);Z.useEffect(()=>{const c=t.get("category");c&&bd.includes(c)&&r(c)},[t]);const o=c=>{r(c),c==="All"?(t.delete("category"),e(t)):e({category:c})},l=i==="All"?mr:mr.filter(c=>c.category===i);return u.jsxs("div",{className:"portfolio-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Our Portfolio"}),u.jsx(mi,{items:[{name:"Portfolio"}]})]})}),u.jsx("section",{className:"portfolio-main-section section-padding",children:u.jsxs("div",{className:"container",children:[u.jsx($n,{eyebrow:"SELECTED WORK",title:"Explore Our Curated Projects",highlightWord:"Projects",description:"Browse our portfolio across luxury living spaces, master bedrooms, modern kitchens, corporate offices, and commercial interiors."}),u.jsx(Dx,{categories:bd,activeCategory:i,onSelectCategory:o}),l.length>0?u.jsx("div",{className:"portfolio-grid",children:l.map(c=>u.jsx(Eh,{project:c,onQuickView:h=>a(h)},c.id))}):u.jsxs("div",{className:"empty-portfolio-state",children:[u.jsx("h3",{children:"No projects found in this category."}),u.jsx("p",{children:"Try switching filter tabs to view more of our work."}),u.jsx("button",{type:"button",className:"btn-gold",onClick:()=>o("All"),style:{marginTop:"16px"},children:"View All Projects"})]})]})}),s&&u.jsx(Ix,{image:s.heroImage,title:s.title,category:s.category,onClose:()=>a(null)})]})}function PC(){const{id:t}=Fv(),e=mr.find(s=>s.id===parseInt(t,10))||mr[0],[n,i]=Z.useState(e.heroImage);Z.useEffect(()=>{i(e.heroImage),window.scrollTo(0,0)},[e]);const r=mr.filter(s=>s.id!==e.id).slice(0,3);return u.jsxs("div",{className:"project-details-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsx("div",{className:"container",children:u.jsx(mi,{items:[{name:"Portfolio",path:"/portfolio"},{name:e.title}]})})}),u.jsx("section",{className:"project-details-main section-padding",children:u.jsxs("div",{className:"container details-grid",children:[u.jsxs("div",{className:"project-media-column",children:[u.jsx("div",{className:"project-main-image-box",children:u.jsx("img",{src:n,alt:e.title})}),u.jsx("div",{className:"project-thumbnails-strip",children:e.gallery.map((s,a)=>u.jsx("button",{type:"button",className:`thumbnail-btn ${n===s?"active-thumb":""}`,onClick:()=>i(s),children:u.jsx("img",{src:s,alt:`Thumbnail ${a+1}`})},a))})]}),u.jsxs("div",{className:"project-info-column",children:[u.jsx("h1",{className:"project-detail-title",children:e.title}),u.jsxs("div",{className:"project-meta-list",children:[u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"icon-circle-gold-small",children:u.jsx(K1,{size:16})}),u.jsx("span",{className:"meta-label",children:"Category:"}),u.jsx("span",{className:"meta-val",children:e.category})]}),u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"icon-circle-gold-small",children:u.jsx(Q1,{size:16})}),u.jsx("span",{className:"meta-label",children:"Client:"}),u.jsx("span",{className:"meta-val",children:e.client})]}),u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"icon-circle-gold-small",children:u.jsx(gh,{size:16})}),u.jsx("span",{className:"meta-label",children:"Date:"}),u.jsx("span",{className:"meta-val",children:e.date})]}),e.location&&u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"icon-circle-gold-small",children:u.jsx(yh,{size:16})}),u.jsx("span",{className:"meta-label",children:"Location:"}),u.jsx("span",{className:"meta-val",children:e.location})]}),e.area&&u.jsxs("div",{className:"meta-row",children:[u.jsx("span",{className:"icon-circle-gold-small",children:u.jsx(B1,{size:16})}),u.jsx("span",{className:"meta-label",children:"Area:"}),u.jsx("span",{className:"meta-val",children:e.area})]})]}),u.jsx("p",{className:"project-detail-desc",children:e.description}),u.jsxs("div",{className:"project-features-box",children:[u.jsx("h3",{children:"Project Features"}),u.jsx("ul",{className:"features-list",children:e.features.map((s,a)=>u.jsxs("li",{children:[u.jsx(Is,{size:18,className:"text-gold"}),u.jsx("span",{children:s})]},a))})]}),u.jsx("div",{style:{marginTop:"32px"},children:u.jsx(er,{to:"/portfolio",variant:"gold",children:"View More Projects"})})]})]})}),u.jsx("section",{className:"related-projects-section section-padding bg-dark-secondary",children:u.jsxs("div",{className:"container",children:[u.jsx($n,{eyebrow:"MORE INSPIRATION",title:"Related Interior Projects",highlightWord:"Projects",center:!0}),u.jsx("div",{className:"projects-grid",children:r.map(s=>u.jsx(Eh,{project:s},s.id))})]})})]})}function NC({blog:t}){return u.jsxs("article",{className:"blog-card card-hover-effect",children:[u.jsxs("div",{className:"blog-card-image-box",children:[u.jsx("img",{src:t.image,alt:t.title,loading:"lazy"}),u.jsx("span",{className:"blog-category-tag",children:t.category})]}),u.jsxs("div",{className:"blog-card-body",children:[u.jsxs("div",{className:"blog-meta-date",children:[u.jsx(gh,{size:14,className:"meta-icon"}),u.jsx("span",{children:t.date})]}),u.jsx("h3",{className:"blog-card-title",children:u.jsx(Ye,{to:`/blog/${t.id}`,children:t.title})}),u.jsx("p",{className:"blog-card-excerpt",children:t.excerpt}),u.jsxs(Ye,{to:`/blog/${t.id}`,className:"blog-read-more",children:[u.jsx("span",{children:"Read More"}),u.jsx(xr,{size:16})]})]})]})}const vl=[{id:1,title:"10 Tips to Make Your Living Room Look Elegant",slug:"10-tips-to-make-your-living-room-look-elegant",category:"Design Tips",date:"May 10, 2024",author:"Elena Rostova",image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",excerpt:"Your living room is the heart of your home. Discover 10 simple design principles to elevate your space with timeless luxury, balanced proportions, and curated gold accents.",content:`
Your living room is the heart of your home. It's where you relax, entertain guests, and spend quality time with family. Here are 10 simple tips to make it look elegant and inviting.

### 1. Choose a Neutral Color Palette
Neutral colors create a calm and timeless look. Shades like beige, warm gray, ivory, and soft cream never go out of style. Accentuate them with subtle golden highlights or dark charcoal trim for striking contrast.

### 2. Master Layered Lighting
Relying on a single ceiling fixture makes a room feel flat. Integrate warm ambient cove lights, architectural floor lamps, and focused task lighting over reading nooks to build depth and warmth.

### 3. Invest in Statement Furniture
Rather than overcrowding the living area with small items, invest in one or two high-quality statement pieces—such as a tailored velvet modular sofa or a custom travertine coffee table.

### 4. Hang Curtains High and Wide
Mount curtain rods close to the ceiling line rather than right above the window frame. Extending drapes all the way to the floor creates the visual illusion of loftier ceilings.

### 5. Incorporate Metallic Accents
Subtle gold, brushed brass, or matte black metal accents on lamp bases, table frames, and cabinet hardware immediately lend a refined editorial touch.
    `},{id:2,title:"Top Interior Design Trends for 2024",slug:"top-interior-design-trends-for-2024",category:"Interior Trends",date:"May 5, 2024",author:"Marcus Vance",image:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",excerpt:"From warm dark woods and curved organic furniture shapes to golden ambient lighting, explore the leading aesthetic movements shaping luxury homes this year.",content:`
Interior design in 2024 is all about personal expression, tactile comfort, and grounded luxury. Here are the top trends reshaping residential architecture this season.

### 1. Warm Earthy & Dark Palettes
Deep obsidian blacks, warm taupe creams, and rich gold accents are replacing cold monochromatic greys. Homeowners are seeking sanctuary spaces that feel intimate and grounded.

### 2. Curved Furniture & Soft Geometries
Arched doorways, rounded sofa profiles, and fluid coffee tables bring organic harmony into living rooms, contrasting beautifully with sleek architectural lines.

### 3. Integrated Architectural Lighting
Concealed LED light channels tucked behind headboards, floating shelving, and wall paneling create architectural depth without visual clutter.
    `},{id:3,title:"How to Choose the Perfect Color Palette",slug:"how-to-choose-the-perfect-color-palette",category:"Decor Ideas",date:"Apr 28, 2024",author:"Sophia Chen",image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",excerpt:"Learn how to orchestrate harmonious primary, secondary, and accent colors to evoke mood, enhance spatial flow, and highlight architectural features.",content:`
Selecting the right color palette is the foundation of every successful interior design scheme. Colors directly influence human emotion, energy levels, and perceived space size.

### The 60-30-10 Rule
A classic interior design rule is balancing 60% dominant color (usually a neutral wall shade like warm cream), 30% secondary color (upholstery and rugs), and 10% accent color (luxury gold, rich emerald, or obsidian black).

### Testing Paint Under Natural Light
Always test paint swatches during different times of day. Warm sunlight will bring out golden undertones, while evening ambient lamp light shifts colors into cozy muted tones.
    `},{id:4,title:"The Ultimate Guide to Lighting Your Home",slug:"the-ultimate-guide-to-lighting-your-home",category:"Lighting",date:"Apr 20, 2024",author:"David Ross",image:"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1200&auto=format&fit=crop",excerpt:"Lighting can instantly alter the atmosphere of any room. Uncover expert techniques to blend ambient, task, and accent lighting seamlessly.",content:`
Lighting is often dubbed the 'fourth dimension' of interior architecture. Even the most exquisite furniture looks dull under harsh or poorly positioned fixtures.

### 1. Ambient Lighting
Ambient lighting provides overall uniform illumination. Soft indirect LED coves and dimmable flush mounts establish a welcoming baseline glow.

### 2. Accent & Feature Lighting
Highlight artwork, textured stone walls, or custom shelving using focused 2700K warm spotlights or golden wall sconces.
    `},{id:5,title:"Maximizing Small Spaces with Smart Layouts",slug:"maximizing-small-spaces-with-smart-layouts",category:"Space Planning",date:"Apr 15, 2024",author:"Elena Rostova",image:"https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1200&auto=format&fit=crop",excerpt:"Living in a compact urban penthouse? Master multifunctional furniture, vertical storage, and visual trickery to expand your footprint without sacrificing style.",content:`
Small-space interior design requires a strategic blend of architectural ingenuity, fluid layout zoning, and custom millwork. Here are proven principles for compact luxury.

### 1. Embrace Custom Floor-to-Ceiling Storage
Off-the-shelf furniture leaves wasted gaps. Custom floor-to-ceiling cabinetry eliminates visual clutter while doubling functional storage capacity.

### 2. Reflective Materials & Glass Dividers
Fluted glass partitions and strategically placed smoked bronze mirrors bounce light throughout the room, creating an expanded sense of openness.

### 3. Multifunctional Sculptural Pieces
Select coffee tables with hidden storage drawers or ottomans that double as extra seating during social gatherings.
    `},{id:6,title:"Biophilic Design: Bringing Nature Into Modern Interiors",slug:"biophilic-design-bringing-nature-into-modern-interiors",category:"Interior Trends",date:"Apr 08, 2024",author:"Marcus Vance",image:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop",excerpt:"Integrating indoor greenery, natural stone, and organic wood textures promotes wellbeing while creating serene, oxygen-rich living environments.",content:`
Biophilic design bridges the gap between indoor architecture and the natural world. Research proves that incorporating natural elements lowers stress and enhances creativity.

### 1. Tactile Natural Materials
Incorporate unvarnished white oak flooring, honed Calacatta marble counters, and raw linen upholstery that invite touch and age gracefully.

### 2. Indoor Architectural Gardens
Vertical living walls, oversized olive trees in terracotta planters, and indoor courtyard lightwells bring lush tranquility into urban residences.

### 3. Maximizing Natural Daylight
Opt for sheer linen drapery that filters harsh glare while saturating living rooms in soft natural sunlight throughout the morning hours.
    `},{id:7,title:"Luxury Kitchen Islands: Functionality Meets Elegance",slug:"luxury-kitchen-islands-functionality-meets-elegance",category:"Decor Ideas",date:"Mar 30, 2024",author:"Sophia Chen",image:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",excerpt:"Discover how waterfall marble counters, integrated gold fixtures, and hidden storage turn the kitchen island into the show-stopping centerpiece of your home.",content:`
The kitchen island has evolved into the social epicenter of modern homes. Combining cooking functionality with casual entertaining requires meticulous detail.

### 1. The Waterfall Edge Marble Countertop
Continuing marble or quartzite slabs seamlessly down the sides of the island creates a clean, architectural statement that grounds the culinary space.

### 2. Dual-Purpose Seating & Prep Zones
Design overhangs of at least 12-15 inches to comfortably accommodate leather upholstered barstools while maintaining ample prep area for private dining experiences.
    `},{id:8,title:"The Art of Curating Sustainable & Eco-Friendly Decor",slug:"the-art-of-curating-sustainable-and-eco-friendly-decor",category:"Design Tips",date:"Mar 22, 2024",author:"David Ross",image:"https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop",excerpt:"Explore sustainable luxury materials—reclaimed timber, organic linen, non-toxic finishes, and artisan handcrafted ceramics that leave a light footprint.",content:`
Sustainable luxury interior design emphasizes longevity, artisanal craftsmanship, and non-toxic indoor air quality without ever compromising on refined beauty.

### 1. Reclaimed Hardwoods
Reclaimed oak, teak, and walnut bring rich history, unique grain patterns, and structural durability to custom dining tables and flooring.

### 2. Non-Toxic & Low-VOC Finishes
Choosing low-VOC paints and natural oil wood sealants ensures your home remains free of harmful chemical off-gassing.
    `}],LC=[{name:"Design Tips",count:15},{name:"Interior Trends",count:12},{name:"Decor Ideas",count:9},{name:"Space Planning",count:7},{name:"Lighting",count:6},{name:"Furniture",count:5}];function DC(){return u.jsxs("div",{className:"blog-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Our Blog"}),u.jsx(mi,{items:[{name:"Blog"}]})]})}),u.jsx("section",{className:"blog-main-section section-padding",children:u.jsxs("div",{className:"container",children:[u.jsx($n,{eyebrow:"JOURNAL & ARTICLES",title:"Design Inspiration & Expert Insights",highlightWord:"Insights",description:"Ideas, inspiration and insights about interior design and home decor."}),u.jsx("div",{className:"blog-grid",children:vl.map(t=>u.jsx(NC,{blog:t},t.id))})]})})]})}function IC(){const{id:t}=Fv(),e=vl.find(s=>s.id===parseInt(t,10))||vl[0],[n,i]=Z.useState(""),r=vl.filter(s=>s.id!==e.id);return u.jsxs("div",{className:"blog-article-page bg-cream-theme animate-fade-in",children:[u.jsx("section",{className:"article-header-section",children:u.jsx("div",{className:"container",children:u.jsx(mi,{items:[{name:"Blog",path:"/blog"},{name:e.title}]})})}),u.jsx("section",{className:"article-body-section section-padding",children:u.jsxs("div",{className:"container article-layout-grid",children:[u.jsxs("main",{className:"article-main-content",children:[u.jsx("h1",{className:"article-title-heading",children:e.title}),u.jsxs("div",{className:"article-meta-row",children:[u.jsx("span",{children:e.date}),u.jsx("span",{className:"divider",children:"|"}),u.jsxs("span",{children:["By ",e.author]}),u.jsx("span",{className:"divider",children:"|"}),u.jsx("span",{className:"category-pill-light",children:e.category})]}),u.jsx("div",{className:"article-hero-image-box",children:u.jsx("img",{src:e.image,alt:e.title})}),u.jsxs("div",{className:"article-prose-text",children:[u.jsx("p",{className:"article-intro-lead",children:e.excerpt}),u.jsx("div",{dangerouslySetInnerHTML:{__html:e.content.replace(/\n\n/g,"<br/><br/>").replace(/### (.*)/g,"<h3>$1</h3>")}})]})]}),u.jsxs("aside",{className:"article-sidebar",children:[u.jsxs("div",{className:"sidebar-widget search-widget",children:[u.jsx("h4",{className:"widget-title",children:"Search"}),u.jsxs("div",{className:"search-input-wrapper",children:[u.jsx("input",{type:"text",placeholder:"Search here...",value:n,onChange:s=>i(s.target.value),className:"sidebar-search-input"}),u.jsx(j1,{size:18,className:"search-icon"})]})]}),u.jsxs("div",{className:"sidebar-widget categories-widget",children:[u.jsx("h4",{className:"widget-title",children:"Categories"}),u.jsx("ul",{className:"categories-list",children:LC.map((s,a)=>u.jsx("li",{children:u.jsxs(Ye,{to:"/blog",className:"cat-link",children:[u.jsx("span",{children:s.name}),u.jsxs("span",{className:"cat-count",children:["(",s.count,")"]})]})},a))})]}),u.jsxs("div",{className:"sidebar-widget recent-posts-widget",children:[u.jsx("h4",{className:"widget-title",children:"Recent Posts"}),u.jsx("div",{className:"recent-posts-list",children:r.map(s=>u.jsxs("div",{className:"recent-post-item",children:[u.jsx(Ye,{to:`/blog/${s.id}`,className:"recent-thumb",children:u.jsx("img",{src:s.image,alt:s.title})}),u.jsxs("div",{className:"recent-post-info",children:[u.jsx("h5",{children:u.jsx(Ye,{to:`/blog/${s.id}`,children:s.title})}),u.jsx("span",{className:"recent-date",children:s.date})]})]},s.id))})]})]})]})})]})}function UC(){const t=so(),[e,n]=Z.useState({name:"",email:"",phone:"",message:""}),[i,r]=Z.useState({}),[s,a]=Z.useState("idle"),[o,l]=Z.useState(""),c=()=>{const f={};return e.name.trim()||(f.name="Your name is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim())||(f.email="Please enter a valid email address"):f.email="Email address is required",e.phone.trim()?/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(e.phone.trim())||(f.phone="Please enter a valid phone number"):f.phone="Phone number is required",e.message.trim()?e.message.trim().length<10&&(f.message="Message must be at least 10 characters long"):f.message="Your message is required",r(f),Object.keys(f).length===0},h=f=>{const{name:m,value:v}=f.target;n(E=>({...E,[m]:v})),i[m]&&r(E=>({...E,[m]:""}))},p=f=>{f.preventDefault(),c()&&(a("loading"),setTimeout(()=>{a("success");const m=`INT-${new Date().getFullYear()}-${Math.floor(1e3+Math.random()*9e3)}`;t("/confirmed",{state:{refNumber:m,name:e.name,email:e.email,phone:e.phone,service:"General Interior Consultation",details:e.message}})},1e3))};return u.jsxs("div",{className:"contact-form-box",children:[s==="success"&&u.jsxs("div",{className:"form-alert success-alert",children:[u.jsx(Is,{size:20}),u.jsx("span",{children:o})]}),s==="error"&&u.jsxs("div",{className:"form-alert error-alert",children:[u.jsx(Hv,{size:20}),u.jsx("span",{children:o||"Failed to submit form. Please try again."})]}),u.jsxs("form",{onSubmit:p,noValidate:!0,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:h,className:`form-input ${i.name?"error":""}`,disabled:s==="loading"}),i.name&&u.jsx("span",{className:"error-text",children:i.name})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:e.email,onChange:h,className:`form-input ${i.email?"error":""}`,disabled:s==="loading"}),i.email&&u.jsx("span",{className:"error-text",children:i.email})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:e.phone,onChange:h,className:`form-input ${i.phone?"error":""}`,disabled:s==="loading"}),i.phone&&u.jsx("span",{className:"error-text",children:i.phone})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("textarea",{name:"message",rows:"5",placeholder:"Your Message",value:e.message,onChange:h,className:`form-textarea ${i.message?"error":""}`,disabled:s==="loading"}),i.message&&u.jsx("span",{className:"error-text",children:i.message})]}),u.jsx("button",{type:"submit",className:"btn-gold form-submit-btn",disabled:s==="loading",children:s==="loading"?u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"Sending..."}),u.jsx(Xv,{size:18,className:"spinner-icon"})]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"Send Message"}),u.jsx("span",{className:"btn-gold-icon",children:u.jsx(Yv,{size:14})})]})})]})]})}function FC(){return u.jsxs("div",{className:"contact-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Contact Us"}),u.jsx(mi,{items:[{name:"Contact"}]})]})}),u.jsx("section",{className:"contact-main-section section-padding",children:u.jsxs("div",{className:"container contact-grid",children:[u.jsxs("div",{className:"contact-info-column",children:[u.jsx($n,{eyebrow:"GET IN TOUCH",title:"Let's Discuss Your Interior Vision",highlightWord:"Vision",description:"Reach out to our studio directors to schedule a complimentary design consultation."}),u.jsxs("div",{className:"contact-details-list",children:[u.jsxs("div",{className:"contact-detail-card",children:[u.jsx("div",{className:"icon-circle-gold",children:u.jsx(yh,{size:22})}),u.jsxs("div",{className:"detail-text",children:[u.jsx("h4",{children:"Address"}),u.jsx("p",{children:"123 Design Street, Creative City, CA 90210, USA"})]})]}),u.jsxs("div",{className:"contact-detail-card",children:[u.jsx("div",{className:"icon-circle-gold",children:u.jsx(Sh,{size:22})}),u.jsxs("div",{className:"detail-text",children:[u.jsx("h4",{children:"Phone"}),u.jsx("p",{children:"+1 234 567 8900"})]})]}),u.jsxs("div",{className:"contact-detail-card",children:[u.jsx("div",{className:"icon-circle-gold",children:u.jsx(_h,{size:22})}),u.jsxs("div",{className:"detail-text",children:[u.jsx("h4",{children:"Email"}),u.jsx("p",{children:"hello@interiodesign.com"})]})]}),u.jsxs("div",{className:"contact-detail-card",children:[u.jsx("div",{className:"icon-circle-gold",children:u.jsx(Gv,{size:22})}),u.jsxs("div",{className:"detail-text",children:[u.jsx("h4",{children:"Working Hours"}),u.jsx("p",{children:"Mon - Fri: 9:00 AM - 6:00 PM"}),u.jsx("p",{children:"Sat: 10:00 AM - 2:00 PM"})]})]})]}),u.jsxs("div",{className:"contact-social-bar",children:[u.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",className:"social-icon",children:u.jsx($v,{size:18})}),u.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noreferrer",className:"social-icon",children:u.jsx(vh,{size:18})}),u.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noreferrer",className:"social-icon",children:u.jsx(jv,{size:18})}),u.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"social-icon",children:u.jsx(xh,{size:18})})]})]}),u.jsx("div",{className:"contact-form-column",children:u.jsx(UC,{})})]})})]})}function OC(){const t=so(),[e,n]=Z.useState({name:"",email:"",phone:"",service:"",budget:"",details:""}),[i,r]=Z.useState({}),[s,a]=Z.useState("idle"),[o,l]=Z.useState(""),c=["Interior Design","Space Planning","Renovation & Remodeling","Furniture & Decor","Lighting Design","Project Management","Residential Design","Commercial Design","3D Visualization","Custom Furniture"],h=["$10,000 - $25,000","$25,000 - $50,000","$50,000 - $100,000","$100,000+"],p=()=>{const v={};return e.name.trim()||(v.name="Your name is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim())||(v.email="Please enter a valid email address"):v.email="Email address is required",e.phone.trim()?/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(e.phone.trim())||(v.phone="Please enter a valid phone number"):v.phone="Phone number is required",e.service||(v.service="Please select a service"),e.budget||(v.budget="Please select a budget range"),e.details.trim()||(v.details="Project details are required"),r(v),Object.keys(v).length===0},f=v=>{const{name:E,value:g}=v.target;n(d=>({...d,[E]:g})),i[E]&&r(d=>({...d,[E]:""}))},m=v=>{v.preventDefault(),p()&&(a("loading"),setTimeout(()=>{a("success");const E=`INT-${new Date().getFullYear()}-${Math.floor(1e3+Math.random()*9e3)}`;t("/confirmed",{state:{refNumber:E,name:e.name,email:e.email,phone:e.phone,service:e.service,budget:e.budget,details:e.details}})},1e3))};return u.jsxs("div",{className:"contact-form-box",children:[s==="success"&&u.jsxs("div",{className:"form-alert success-alert",children:[u.jsx(Is,{size:20}),u.jsx("span",{children:o})]}),s==="error"&&u.jsxs("div",{className:"form-alert error-alert",children:[u.jsx(Hv,{size:20}),u.jsx("span",{children:"Please review the errors below and try again."})]}),u.jsxs("form",{onSubmit:m,noValidate:!0,children:[u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"text",name:"name",placeholder:"Your Name",value:e.name,onChange:f,className:`form-input ${i.name?"error":""}`,disabled:s==="loading"}),i.name&&u.jsx("span",{className:"error-text",children:i.name})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"email",name:"email",placeholder:"Email Address",value:e.email,onChange:f,className:`form-input ${i.email?"error":""}`,disabled:s==="loading"}),i.email&&u.jsx("span",{className:"error-text",children:i.email})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("input",{type:"tel",name:"phone",placeholder:"Phone Number",value:e.phone,onChange:f,className:`form-input ${i.phone?"error":""}`,disabled:s==="loading"}),i.phone&&u.jsx("span",{className:"error-text",children:i.phone})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("select",{name:"service",value:e.service,onChange:f,className:`form-select ${i.service?"error":""}`,disabled:s==="loading",children:[u.jsx("option",{value:"",children:"Select Service"}),c.map(v=>u.jsx("option",{value:v,children:v},v))]}),i.service&&u.jsx("span",{className:"error-text",children:i.service})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("select",{name:"budget",value:e.budget,onChange:f,className:`form-select ${i.budget?"error":""}`,disabled:s==="loading",children:[u.jsx("option",{value:"",children:"Budget Range"}),h.map(v=>u.jsx("option",{value:v,children:v},v))]}),i.budget&&u.jsx("span",{className:"error-text",children:i.budget})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("textarea",{name:"details",rows:"4",placeholder:"Project Details",value:e.details,onChange:f,className:`form-textarea ${i.details?"error":""}`,disabled:s==="loading"}),i.details&&u.jsx("span",{className:"error-text",children:i.details})]}),u.jsx("button",{type:"submit",className:"btn-gold form-submit-btn",disabled:s==="loading",children:s==="loading"?u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"Submitting Request..."}),u.jsx(Xv,{size:18,className:"spinner-icon"})]}):u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"Request Quote"}),u.jsx("span",{className:"btn-gold-icon",children:u.jsx(Yv,{size:14})})]})})]})]})}function kC(){return u.jsxs("div",{className:"free-quote-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Get a Free Quote"}),u.jsx(mi,{items:[{name:"Get a Free Quote"}]})]})}),u.jsx("section",{className:"quote-main-section section-padding",children:u.jsxs("div",{className:"container quote-grid",children:[u.jsxs("div",{className:"quote-form-column",children:[u.jsx($n,{eyebrow:"ESTIMATE YOUR PROJECT",title:"Tailored Design Consultation",highlightWord:"Consultation",description:"Tell us about your project and we'll get back to you with a customized quote."}),u.jsx(OC,{})]}),u.jsx("div",{className:"quote-image-column",children:u.jsx("div",{className:"quote-image-frame",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",alt:"Luxury Yellow Lounge Armchair and Lamp"})})})]})})]})}function BC(){const[t,e]=Z.useState("All"),[n,i]=Z.useState(null),r=t==="All"?mr:mr.filter(s=>s.category===t);return u.jsxs("div",{className:"projects-gallery-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"Our Projects"}),u.jsx(mi,{items:[{name:"Projects"}]})]})}),u.jsx("section",{className:"gallery-main-section section-padding",children:u.jsxs("div",{className:"container",children:[u.jsx($n,{eyebrow:"GALLERY SHOWCASE",title:"Architectural & Interior Showcase",highlightWord:"Showcase",description:"Explore our high-resolution gallery of contemporary living rooms, luxury bedrooms, designer kitchens, and corporate spaces."}),u.jsx(Dx,{categories:bd,activeCategory:t,onSelectCategory:s=>e(s)}),u.jsx("div",{className:"gallery-masonry-grid",children:r.map(s=>u.jsx("div",{className:"gallery-item-card card-hover-effect",children:u.jsxs("div",{className:"gallery-item-image-box",children:[u.jsx("img",{src:s.heroImage,alt:s.title,loading:"lazy"}),u.jsxs("div",{className:"gallery-item-overlay",children:[u.jsx("span",{className:"gallery-cat-badge",children:s.category}),u.jsx("h4",{children:s.title}),u.jsxs("div",{className:"gallery-actions",children:[u.jsxs("button",{type:"button",className:"btn-gold gallery-zoom-btn",onClick:()=>i(s),children:[u.jsx(Wv,{size:16}),u.jsx("span",{children:"Quick Zoom"})]}),u.jsxs(Ye,{to:`/portfolio/${s.id}`,className:"btn-outline gallery-details-btn",children:[u.jsx("span",{children:"Details"}),u.jsx(xr,{size:14})]})]})]})]})},s.id))})]})}),n&&u.jsx(Ix,{image:n.heroImage,title:n.title,category:n.category,onClose:()=>i(null)})]})}function zC(){return u.jsx("div",{className:"not-found-page animate-fade-in",children:u.jsxs("div",{className:"container not-found-container",children:[u.jsxs("div",{className:"not-found-content",children:[u.jsx("span",{className:"not-found-code text-gold",children:"404"}),u.jsx("h1",{className:"not-found-heading",children:"Oops! Page Not Found"}),u.jsx("p",{className:"not-found-text",children:"The page you are looking for doesn't exist or has been moved."}),u.jsx(er,{to:"/",variant:"gold",className:"not-found-btn",children:"Back to Home"})]}),u.jsx("div",{className:"not-found-media",children:u.jsx("div",{className:"not-found-img-frame",children:u.jsx("img",{src:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",alt:"Dark Armchair and Gold Floor Lamp"})})})]})})}function pg(){const t=ki();so();const e=t.state||{},[n,i]=Z.useState(!1),[r,s]=Z.useState(!1),[a,o]=Z.useState(e.stageIndex||0),l={refNumber:e.refNumber||"INT-2026-8942",name:e.name||"Sophia Vance",email:e.email||"sophia.vance@example.com",phone:e.phone||"+1 (555) 234-8901",service:e.service||"Full Home Interior Design",budget:e.budget||"$50,000 - $100,000",date:"Thursday, Aug 20, 2026",time:"10:30 AM EST",mode:"Virtual 3D Studio Consultation",details:e.details||"Looking to redesign our 3-bedroom penthouse with modern warm minimalist aesthetics and custom oak millwork.",createdTime:new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})},[c,h]=Z.useState([{id:1,text:"Consultation request submitted & reference code generated",completed:!0},{id:2,text:"Gather floor plan, sketches or dimensions of your room/house",completed:!0},{id:3,text:"Save 3 to 5 inspiration photos of interior styles you admire",completed:!1},{id:4,text:"List your key functional needs (e.g. storage, lighting, seating)",completed:!1}]),p=d=>{h(x=>x.map(M=>M.id===d?{...M,completed:!M.completed}:M))},f=()=>{navigator.clipboard.writeText(l.refNumber),i(!0),setTimeout(()=>i(!1),2e3)},m=()=>{navigator.clipboard.writeText(window.location.href),s(!0),setTimeout(()=>s(!1),2500)},v=()=>{window.print()},E=()=>{const d=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Interio Design Studio//Consultation//EN","BEGIN:VEVENT",`SUMMARY:Interio Design Consultation (${l.refNumber})`,"DESCRIPTION:Virtual 3D Design Consultation with Senior Architect Elena Rostova.","LOCATION:Online Video Studio","DTSTART:20260820T143000Z","DTEND:20260820T153000Z","STATUS:CONFIRMED","END:VEVENT","END:VCALENDAR"].join(`\r
`),x=new Blob([d],{type:"text/calendar;charset=utf-8"}),M=window.URL.createObjectURL(x),S=document.createElement("a");S.href=M,S.setAttribute("download",`Interio_Consultation_${l.refNumber}.ics`),document.body.appendChild(S),S.click(),document.body.removeChild(S)},g=[{title:"Consultation Confirmed",desc:"Your request is verified and logged in our system.",badge:"Step 1 • Completed",icon:u.jsx(Is,{size:20})},{title:"Specialist Briefing & Site Assessment",desc:"Architect assigned; reviewing layout & spatial requirements.",badge:"Step 2 • Active Stage",icon:u.jsx(D1,{size:20})},{title:"3D Moodboard & Concept Approval",desc:"Custom material palettes, lighting plan & 3D visualizations.",badge:"Step 3 • Upcoming",icon:u.jsx(Wl,{size:20})},{title:"Turnkey Execution & Delivery",desc:"Site transformation, custom furniture install & final walkthrough.",badge:"Step 4 • Final",icon:u.jsx(pm,{size:20})}];return u.jsxs("div",{className:"confirmed-status-page animate-fade-in",children:[u.jsx("section",{className:"page-header-section",children:u.jsxs("div",{className:"container",children:[u.jsx("div",{className:"status-breadcrumb-wrapper",children:u.jsxs("span",{className:"status-pill-badge",children:[u.jsx(Mh,{size:14})," STATUS: CONFIRMED"]})}),u.jsx("h1",{children:"Booking Confirmation"}),u.jsx(mi,{items:[{name:"Status"},{name:"Confirmed"}]})]})}),u.jsx("section",{className:"status-main-section section-padding",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"status-hero-card",children:[u.jsx("div",{className:"hero-card-glow"}),u.jsxs("div",{className:"hero-card-content",children:[u.jsxs("div",{className:"status-icon-wrapper",children:[u.jsx("div",{className:"status-pulse-ring"}),u.jsx("div",{className:"status-icon-badge",children:u.jsx(Is,{size:36})})]}),u.jsxs("div",{className:"hero-text-block",children:[u.jsxs("div",{className:"hero-meta-row",children:[u.jsx("span",{className:"hero-status-tag",children:"CONFIRMED & SCHEDULED"}),u.jsxs("span",{className:"hero-date-tag",children:["Created ",l.createdTime]})]}),u.jsx("h2",{children:"Your Consultation is Successfully Confirmed!"}),u.jsx("p",{children:"Thank you for choosing Interio Design Studio. We have assigned a Lead Interior Architect to guide your transformation."})]}),u.jsxs("div",{className:"reference-code-box",children:[u.jsx("span",{className:"ref-label",children:"Reference Code"}),u.jsxs("div",{className:"ref-value-group",children:[u.jsx("span",{className:"ref-value",children:l.refNumber}),u.jsxs("button",{className:"btn-copy-ref",onClick:f,title:"Copy reference code",children:[n?u.jsx(Kc,{size:16,className:"text-gold"}):u.jsx(I1,{size:16}),u.jsx("span",{children:n?"Copied!":"Copy"})]})]})]})]}),u.jsxs("div",{className:"status-action-bar",children:[u.jsxs("button",{className:"status-action-btn",onClick:E,children:[u.jsx(gh,{size:16}),u.jsx("span",{children:"Add to Calendar (.ics)"})]}),u.jsxs("button",{className:"status-action-btn",onClick:v,children:[u.jsx(W1,{size:16}),u.jsx("span",{children:"Print / Save PDF"})]}),u.jsxs("button",{className:"status-action-btn",onClick:m,children:[u.jsx(X1,{size:16}),u.jsx("span",{children:"Share Status Link"})]})]})]}),r&&u.jsxs("div",{className:"status-toast animate-fade-in",children:[u.jsx(Is,{size:16})," Status page link copied to clipboard!"]}),u.jsxs("div",{className:"status-grid",children:[u.jsxs("div",{className:"status-left-column",children:[u.jsxs("div",{className:"status-card",children:[u.jsxs("div",{className:"card-header-bar",children:[u.jsxs("h3",{children:[u.jsx(pm,{size:20,className:"card-header-icon"})," Consultation Summary"]}),u.jsx("span",{className:"badge-gold-subtle",children:"Verified Request"})]}),u.jsxs("div",{className:"details-grid-pairs",children:[u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Client Name"}),u.jsx("span",{className:"detail-val highlight-val",children:l.name})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Email Address"}),u.jsx("span",{className:"detail-val",children:l.email})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Phone Contact"}),u.jsx("span",{className:"detail-val",children:l.phone})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Service Type"}),u.jsx("span",{className:"detail-val text-gold font-bold",children:l.service})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Estimated Budget"}),u.jsx("span",{className:"detail-val",children:l.budget})]}),u.jsxs("div",{className:"detail-item",children:[u.jsx("span",{className:"detail-label",children:"Consultation Date & Time"}),u.jsxs("span",{className:"detail-val icon-val",children:[u.jsx(Gv,{size:14,className:"text-gold"})," ",l.date," • ",l.time]})]}),u.jsxs("div",{className:"detail-item full-width-item",children:[u.jsx("span",{className:"detail-label",children:"Meeting Format"}),u.jsxs("span",{className:"detail-val icon-val",children:[u.jsx(eM,{size:15,className:"text-gold"})," ",l.mode]})]}),u.jsxs("div",{className:"detail-item full-width-item",children:[u.jsx("span",{className:"detail-label",children:"Project Scope & Notes"}),u.jsx("p",{className:"details-notes-box",children:l.details})]})]})]}),u.jsxs("div",{className:"status-card",children:[u.jsxs("div",{className:"card-header-bar",children:[u.jsxs("h3",{children:[u.jsx($1,{size:20,className:"card-header-icon"})," What to Prepare Next"]}),u.jsxs("span",{className:"checklist-counter",children:[c.filter(d=>d.completed).length," of ",c.length," Completed"]})]}),u.jsx("p",{className:"card-sub-desc",children:"Check off the steps below before your scheduled session to get the most out of your consultation."}),u.jsx("div",{className:"checklist-items",children:c.map(d=>u.jsxs("div",{className:`checklist-row ${d.completed?"checked":""}`,onClick:()=>p(d.id),children:[u.jsx("div",{className:"checkbox-custom",children:d.completed&&u.jsx(Kc,{size:14})}),u.jsx("span",{className:"checklist-text",children:d.text})]},d.id))})]})]}),u.jsxs("div",{className:"status-right-column",children:[u.jsxs("div",{className:"status-card specialist-card",children:[u.jsx("div",{className:"specialist-badge",children:"ASSIGNED SPECIALIST"}),u.jsxs("div",{className:"specialist-profile",children:[u.jsxs("div",{className:"specialist-avatar-frame",children:[u.jsx("img",{src:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",alt:"Elena Rostova - Senior Interior Architect"}),u.jsx("div",{className:"specialist-online-dot",title:"Online & Ready"})]}),u.jsxs("div",{className:"specialist-info",children:[u.jsx("h4",{children:"Elena Rostova"}),u.jsx("p",{className:"specialist-role",children:"Lead Architectural Interior Specialist"}),u.jsx("span",{className:"specialist-exp",children:"12+ Years Experience • Luxury Residential"})]})]}),u.jsxs("div",{className:"specialist-contact-links",children:[u.jsxs("a",{href:"mailto:elena@interiodesign.com",className:"spec-contact-btn",children:[u.jsx(_h,{size:14})," Email Architect"]}),u.jsxs("a",{href:"tel:+12345678900",className:"spec-contact-btn",children:[u.jsx(Sh,{size:14})," Studio Line"]})]})]}),u.jsxs("div",{className:"status-card",children:[u.jsx("div",{className:"card-header-bar",children:u.jsxs("h3",{children:[u.jsx(Wl,{size:20,className:"card-header-icon"})," Project Roadmap"]})}),u.jsxs("div",{className:"stage-simulator-bar",children:[u.jsx("span",{className:"simulator-label",children:"Test Stage View:"}),u.jsx("div",{className:"stage-pills",children:g.map((d,x)=>u.jsxs("button",{className:`stage-pill ${a===x?"active":""}`,onClick:()=>o(x),children:["Step ",x+1]},x))})]}),u.jsx("div",{className:"stepper-list",children:g.map((d,x)=>{const M=x<a||a===0&&x===0,S=x===a;return u.jsxs("div",{className:`stepper-item ${M?"done":S?"active":"upcoming"}`,children:[u.jsxs("div",{className:"stepper-icon-col",children:[u.jsx("div",{className:"stepper-circle",children:M?u.jsx(Kc,{size:16}):d.icon}),x<g.length-1&&u.jsx("div",{className:"stepper-line"})]}),u.jsxs("div",{className:"stepper-content",children:[u.jsxs("div",{className:"stepper-header-line",children:[u.jsx("h4",{className:"stepper-title",children:d.title}),u.jsx("span",{className:"stepper-badge",children:d.badge})]}),u.jsx("p",{className:"stepper-desc",children:d.desc})]})]},x)})})]}),u.jsxs("div",{className:"status-support-box",children:[u.jsx("div",{className:"support-icon-circle",children:u.jsx(H1,{size:22})}),u.jsxs("div",{className:"support-text",children:[u.jsx("h4",{children:"Have Questions About Your Status?"}),u.jsx("p",{children:"Our client care concierge team is available Mon-Fri, 9am-6pm EST."})]}),u.jsxs("div",{className:"support-actions",children:[u.jsxs(Ye,{to:"/contact",className:"btn-gold btn-sm",children:[u.jsx("span",{children:"Contact Concierge"}),u.jsx("span",{className:"btn-gold-icon",children:u.jsx(xr,{size:12})})]}),u.jsx(Ye,{to:"/portfolio",className:"btn-outline btn-sm",children:u.jsx("span",{children:"View Projects"})})]})]})]})]})]})})]})}function VC(){const{pathname:t}=ki();return Z.useEffect(()=>{window.scrollTo(0,0)},[t]),null}function HC(){return u.jsxs(m1,{children:[u.jsx(VC,{}),u.jsxs("div",{className:"app-root",children:[u.jsx(tM,{}),u.jsx("main",{className:"app-main-content",children:u.jsxs(a1,{children:[u.jsx(cn,{path:"/",element:u.jsx(_C,{})}),u.jsx(cn,{path:"/about",element:u.jsx(TC,{})}),u.jsx(cn,{path:"/services",element:u.jsx(bC,{})}),u.jsx(cn,{path:"/portfolio",element:u.jsx(RC,{})}),u.jsx(cn,{path:"/portfolio/:id",element:u.jsx(PC,{})}),u.jsx(cn,{path:"/blog",element:u.jsx(DC,{})}),u.jsx(cn,{path:"/blog/:id",element:u.jsx(IC,{})}),u.jsx(cn,{path:"/contact",element:u.jsx(FC,{})}),u.jsx(cn,{path:"/quote",element:u.jsx(kC,{})}),u.jsx(cn,{path:"/projects",element:u.jsx(BC,{})}),u.jsx(cn,{path:"/confirmed",element:u.jsx(pg,{})}),u.jsx(cn,{path:"/status",element:u.jsx(pg,{})}),u.jsx(cn,{path:"*",element:u.jsx(zC,{})})]})}),u.jsx(nM,{})]})]})}Pu.createRoot(document.getElementById("root")).render(u.jsx(wf.StrictMode,{children:u.jsx(HC,{})}));
