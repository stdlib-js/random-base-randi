// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).randi={})}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||l.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(e,r,t.get),s&&u&&u.call(e,r,t.set),e};var c=t;function y(e,r,t){c(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(e,r,t){c(e,r,{configurable:!1,enumerable:!1,get:t})}function h(e,r,t,n){c(e,r,{configurable:!1,enumerable:!1,get:t,set:n})}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return p&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function w(e,r){return null!=e&&b.call(e,r)}var v="function"==typeof Symbol?Symbol.toStringTag:"";var d=m()?function(e){var r,t,n;if(null==e)return g.call(e);t=e[v],r=w(e,v);try{e[v]=void 0}catch(r){return g.call(e)}return n=g.call(e),r?e[v]=t:delete e[v],n}:function(e){return g.call(e)};var E=Array.isArray?Array.isArray:function(e){return"[object Array]"===d(e)};function A(e){return"object"==typeof e&&null!==e&&!E(e)}var _=/./;function T(e){return"boolean"==typeof e}var j=Boolean.prototype.toString;var x=m();function L(e){return"object"==typeof e&&(e instanceof Boolean||(x?function(e){try{return j.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===d(e)))}function B(e){return T(e)||L(e)}function R(){return new Function("return this;")()}y(B,"isPrimitive",T),y(B,"isObject",L);var S="object"==typeof self?self:null,V="object"==typeof window?window:null,O="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof O?O:null;var M=function(e){if(arguments.length){if(!T(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return R()}if(S)return S;if(V)return V;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),N=M.document&&M.document.childNodes,k=Int8Array;function P(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;function U(e){return null!==e&&"object"==typeof e}function F(e){var r,t,n,o;if(("Object"===(t=d(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return U(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}y(P,"REGEXP",C),y(U,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!E(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(U));var Y="function"==typeof _||"object"==typeof k||"function"==typeof N?function(e){return F(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?F(e).toLowerCase():r};function G(e){return"function"===Y(e)}var W,q=Object.getPrototypeOf;W=G(Object.getPrototypeOf)?q:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===d(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var J=W;function X(e){return null==e?null:(e=Object(e),J(e))}var K=Object.prototype;function z(e){var r;return!!A(e)&&(!(r=X(e))||!w(e,"constructor")&&w(r,"constructor")&&G(r.constructor)&&"[object Function]"===d(r.constructor)&&w(r,"isPrototypeOf")&&G(r.isPrototypeOf)&&(r===K||function(e){var r;for(r in e)if(!w(e,r))return!1;return!0}(e)))}function D(){}var H="foo"===D.name;var Q="function"==typeof Float64Array;var Z="function"==typeof Float64Array?Float64Array:null;function $(){var e,r,t;if("function"!=typeof Z)return!1;try{r=new Z([1,3.14,-3.14,NaN]),t=r,e=(Q&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}var ee="function"==typeof Float64Array?Float64Array:void 0;var re=$()?ee:function(){throw new Error("not implemented")},te="function"==typeof Int8Array;var ne="function"==typeof Int8Array?Int8Array:null;var oe="function"==typeof Int8Array?Int8Array:void 0;var ie=function(){var e,r,t;if("function"!=typeof ne)return!1;try{r=new ne([1,3.14,-3.14,128]),t=r,e=(te&&t instanceof Int8Array||"[object Int8Array]"===d(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?oe:function(){throw new Error("not implemented")},ae="function"==typeof Uint8Array;var ue="function"==typeof Uint8Array?Uint8Array:null;var fe="function"==typeof Uint8Array?Uint8Array:void 0;var le=function(){var e,r,t;if("function"!=typeof ue)return!1;try{r=new ue(r=[1,3.14,-3.14,256,257]),t=r,e=(ae&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?fe:function(){throw new Error("not implemented")},ce="function"==typeof Uint8ClampedArray;var ye="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var se="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var he=function(){var e,r,t;if("function"!=typeof ye)return!1;try{r=new ye([-1,0,1,3.14,4.99,255,256]),t=r,e=(ce&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===d(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?se:function(){throw new Error("not implemented")},pe="function"==typeof Int16Array;var me="function"==typeof Int16Array?Int16Array:null;var ge="function"==typeof Int16Array?Int16Array:void 0;var be=function(){var e,r,t;if("function"!=typeof me)return!1;try{r=new me([1,3.14,-3.14,32768]),t=r,e=(pe&&t instanceof Int16Array||"[object Int16Array]"===d(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?ge:function(){throw new Error("not implemented")},we="function"==typeof Uint16Array;var ve="function"==typeof Uint16Array?Uint16Array:null;var de="function"==typeof Uint16Array?Uint16Array:void 0;var Ee=function(){var e,r,t;if("function"!=typeof ve)return!1;try{r=new ve(r=[1,3.14,-3.14,65536,65537]),t=r,e=(we&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?de:function(){throw new Error("not implemented")},Ae="function"==typeof Int32Array;var _e="function"==typeof Int32Array?Int32Array:null;var Te="function"==typeof Int32Array?Int32Array:void 0;var je=function(){var e,r,t;if("function"!=typeof _e)return!1;try{r=new _e([1,3.14,-3.14,2147483648]),t=r,e=(Ae&&t instanceof Int32Array||"[object Int32Array]"===d(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?Te:function(){throw new Error("not implemented")},xe="function"==typeof Uint32Array;var Le="function"==typeof Uint32Array?Uint32Array:null;var Be="function"==typeof Uint32Array?Uint32Array:void 0;var Re=function(){var e,r,t;if("function"!=typeof Le)return!1;try{r=new Le(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(xe&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Be:function(){throw new Error("not implemented")},Se="function"==typeof Float32Array;var Ve=Number.POSITIVE_INFINITY,Oe="function"==typeof Float32Array?Float32Array:null;var Ie="function"==typeof Float32Array?Float32Array:void 0;var Me=function(){var e,r,t;if("function"!=typeof Oe)return!1;try{r=new Oe([1,3.14,-3.14,5e40]),t=r,e=(Se&&t instanceof Float32Array||"[object Float32Array]"===d(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ve}catch(r){e=!1}return e}()?Ie:function(){throw new Error("not implemented")},Ne=[re,Me,je,Re,be,Ee,ie,le,he],ke=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Pe=$()?X(re):Ce;function Ce(){}function Ue(e){return"number"==typeof e}Pe="TypedArray"===function(e){if(!1===G(e))throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return H?e.name:C.exec(e.toString())[1]}(Pe)?Pe:Ce;var Fe=Number,Ye=Fe.prototype.toString;var Ge=m();function We(e){return"object"==typeof e&&(e instanceof Fe||(Ge?function(e){try{return Ye.call(e),!0}catch(e){return!1}}(e):"[object Number]"===d(e)))}function qe(e){return Ue(e)||We(e)}y(qe,"isPrimitive",Ue),y(qe,"isObject",We);var Je=Fe.NEGATIVE_INFINITY,Xe=Math.floor;function Ke(e){return Xe(e)===e}function ze(e){return e<Ve&&e>Je&&Ke(e)}function De(e){return Ue(e)&&ze(e)}function He(e){return We(e)&&ze(e.valueOf())}function Qe(e){return De(e)||He(e)}function Ze(e){return De(e)&&e>=0}function $e(e){return He(e)&&e.valueOf()>=0}function er(e){return Ze(e)||$e(e)}y(Qe,"isPrimitive",De),y(Qe,"isObject",He),y(er,"isPrimitive",Ze),y(er,"isObject",$e);function rr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ke(e.length)&&e.length>=0&&e.length<=4294967295}function tr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Ke(e.length)&&e.length>=0&&e.length<=9007199254740991}var nr="function"==typeof ArrayBuffer;function or(e){return nr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===d(e)}function ir(e,r){if(!(this instanceof ir))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ue(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!Ue(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}y(ir,"BYTES_PER_ELEMENT",8),y(ir.prototype,"BYTES_PER_ELEMENT",8),y(ir.prototype,"byteLength",16),y(ir.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),y(ir.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var ar="function"==typeof Math.fround?Math.fround:null,ur=new Me(1);var fr="function"==typeof ar?ar:function(e){return ur[0]=e,ur[0]};function lr(e,r){if(!(this instanceof lr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Ue(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!Ue(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return c(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:fr(e)}),c(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:fr(r)}),this}function cr(e){return e instanceof ir||e instanceof lr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function yr(e){return Ke(e/2)}function sr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}y(lr,"BYTES_PER_ELEMENT",4),y(lr.prototype,"BYTES_PER_ELEMENT",4),y(lr.prototype,"byteLength",8),y(lr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),y(lr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var hr=sr()?Symbol.iterator:null;function pr(e){return e.re}function mr(e){return e.im}function gr(e,r){return new Me(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function br(e,r){return new re(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function wr(e,r){return e[r]}function vr(e,r){return e.get(r)}function dr(e,r,t){e[r]=t}function Er(e,r,t){e.set(t,r)}function Ar(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?vr:wr,setter:r?Er:dr}}function _r(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(rr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!cr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(pr(n),mr(n))}return r}function Tr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,rr(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!cr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(pr(i),mr(i))}return n}function jr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!cr(n=r[o]))return null;e[i]=pr(n),e[i+1]=mr(n),i+=2}return e}var xr=2*Me.BYTES_PER_ELEMENT,Lr=sr();function Br(e){return e instanceof Or||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Rr(e){return e===Or||"Complex128Array"===e.name}function Sr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===xr}function Vr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*xr}function Or(){var e,r,t,n;if(r=arguments.length,!(this instanceof Or))return 0===r?new Or:1===r?new Or(arguments[0]):2===r?new Or(arguments[0],arguments[1]):new Or(arguments[0],arguments[1],arguments[2]);if(0===r)t=new Me(0);else if(1===r)if(Ze(arguments[0]))t=new Me(2*arguments[0]);else if(tr(arguments[0]))if((n=(t=arguments[0]).length)&&E(t)&&cr(t[0])){if(null===(t=jr(new Me(2*n),t))){if(!yr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Me(arguments[0])}}else{if(Sr(t))t=gr(t,0);else if(Vr(t))t=br(t,0);else if(!yr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Me(t)}else if(or(arguments[0])){if(!Ke((t=arguments[0]).byteLength/xr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+xr+". Byte length: `"+t.byteLength+"`.");t=new Me(t)}else{if(!A(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Lr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!G(t[hr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!G((t=t[hr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=_r(t))instanceof Error)throw t;t=new Me(t)}else{if(!or(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ze(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Ke(e/xr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+xr+". Value: `"+e+"`.");if(2===r){if(!Ke((n=t.byteLength-e)/xr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+xr+". View byte length: `"+n+"`.");t=new Me(t,e)}else{if(!Ze(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*xr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*xr+"`.");t=new Me(t,e,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}function Ir(e){return e.re}function Mr(e){return e.im}function Nr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(rr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!cr(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Ir(n),Mr(n))}return r}function kr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,rr(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!cr(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Ir(i),Mr(i))}return n}function Pr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!cr(n=r[o]))return null;e[i]=Ir(n),e[i+1]=Mr(n),i+=2}return e}y(Or,"BYTES_PER_ELEMENT",xr),y(Or,"name","Complex64Array"),y(Or,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!G(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!G(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Br(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(cr(l=n.call(r,e.get(c),c)))i[y]=pr(l),i[y+1]=mr(l);else{if(!(rr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(tr(e)){if(n){for(u=e.length,a=Ar(e),c=0;c<u;c++)if(!cr(a.getter(e,c))){f=!0;break}if(f){if(!yr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(cr(l=n.call(r,a.getter(e,c),c)))i[y]=pr(l),i[y+1]=mr(l);else{if(!(rr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(A(e)&&Lr&&G(e[hr])){if(!G((i=e[hr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Tr(i,n,r):_r(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),y(Or,"of",(function(){var e,r;if(!G(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Rr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),s(Or.prototype,"buffer",(function(){return this._buffer.buffer})),s(Or.prototype,"byteLength",(function(){return this._buffer.byteLength})),s(Or.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(Or.prototype,"BYTES_PER_ELEMENT",Or.BYTES_PER_ELEMENT),y(Or.prototype,"copyWithin",(function(e,r){if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),y(Or.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,y(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new lr(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),y(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),hr&&y(t,hr,(function(){return r.entries()})),t})),y(Or.prototype,"get",(function(e){var r;if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ze(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new lr((r=this._buffer)[e*=2],r[e+1])})),s(Or.prototype,"length",(function(){return this._length})),y(Or.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Br(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ze(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(cr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=pr(e),void(n[t+1]=mr(e))}if(Br(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*xr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new Me(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!tr(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!cr(e[f])){i=!0;break}if(i){if(!yr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*xr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new Me(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=pr(u),n[t+1]=mr(u),t+=2}}));var Cr=2*re.BYTES_PER_ELEMENT,Ur=sr();function Fr(e){return e instanceof qr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Yr(e){return e===qr||"Complex64Array"===e.name}function Gr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Cr/2}function Wr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Cr}function qr(){var e,r,t,n;if(r=arguments.length,!(this instanceof qr))return 0===r?new qr:1===r?new qr(arguments[0]):2===r?new qr(arguments[0],arguments[1]):new qr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new re(0);else if(1===r)if(Ze(arguments[0]))t=new re(2*arguments[0]);else if(tr(arguments[0]))if((n=(t=arguments[0]).length)&&E(t)&&cr(t[0])){if(null===(t=Pr(new re(2*n),t))){if(!yr(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new re(arguments[0])}}else{if(Gr(t))t=gr(t,0);else if(Wr(t))t=br(t,0);else if(!yr(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new re(t)}else if(or(arguments[0])){if(!Ke((t=arguments[0]).byteLength/Cr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Cr+". Byte length: `"+t.byteLength+"`.");t=new re(t)}else{if(!A(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ur)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!G(t[hr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!G((t=t[hr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Nr(t))instanceof Error)throw t;t=new re(t)}else{if(!or(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ze(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Ke(e/Cr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Cr+". Value: `"+e+"`.");if(2===r){if(!Ke((n=t.byteLength-e)/Cr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Cr+". View byte length: `"+n+"`.");t=new re(t,e)}else{if(!Ze(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Cr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Cr+"`.");t=new re(t,e,2*n)}}return y(this,"_buffer",t),y(this,"_length",t.length/2),this}y(qr,"BYTES_PER_ELEMENT",Cr),y(qr,"name","Complex128Array"),y(qr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!G(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Yr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!G(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Fr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(cr(l=n.call(r,e.get(c),c)))i[y]=Ir(l),i[y+1]=Mr(l);else{if(!(rr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(tr(e)){if(n){for(u=e.length,a=Ar(e),c=0;c<u;c++)if(!cr(a.getter(e,c))){f=!0;break}if(f){if(!yr(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(cr(l=n.call(r,a.getter(e,c),c)))i[y]=Ir(l),i[y+1]=Mr(l);else{if(!(rr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(A(e)&&Ur&&G(e[hr])){if(!G((i=e[hr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?kr(i,n,r):Nr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),y(qr,"of",(function(){var e,r;if(!G(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Yr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),s(qr.prototype,"buffer",(function(){return this._buffer.buffer})),s(qr.prototype,"byteLength",(function(){return this._buffer.byteLength})),s(qr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),y(qr.prototype,"BYTES_PER_ELEMENT",qr.BYTES_PER_ELEMENT),y(qr.prototype,"copyWithin",(function(e,r){if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),y(qr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,y(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new ir(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),y(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),hr&&y(t,hr,(function(){return r.entries()})),t})),y(qr.prototype,"get",(function(e){var r;if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ze(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new ir((r=this._buffer)[e*=2],r[e+1])})),s(qr.prototype,"length",(function(){return this._length})),y(qr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Fr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ze(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(cr(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Ir(e),void(n[t+1]=Mr(e))}if(Fr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Cr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new re(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!tr(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!cr(e[f])){i=!0;break}if(i){if(!yr(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Cr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new re(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ir(u),n[t+1]=Mr(u),t+=2}}));var Jr=[qr,Or],Xr=["Complex64Array","Complex128Array"];function Kr(e,r){if("function"!=typeof r)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+r+"`.");return e instanceof r}var zr=[[re,"Float64Array"],[Me,"Float32Array"],[je,"Int32Array"],[Re,"Uint32Array"],[be,"Int16Array"],[Ee,"Uint16Array"],[ie,"Int8Array"],[le,"Uint8Array"],[he,"Uint8ClampedArray"],[Or,"Complex64Array"],[qr,"Complex128Array"]];function Dr(e){var r,t;for(t=0;t<zr.length;t++)if(Kr(e,zr[t][0]))return zr[t][1];for(;e;){for(r=F(e),t=0;t<zr.length;t++)if(r===zr[t][1])return zr[t][1];e=X(e)}}function Hr(e){var r,t,n;if(function(e){var r,t;if("object"!=typeof e||null===e)return!1;if(e instanceof Pe)return!0;for(t=0;t<Ne.length;t++)if(e instanceof Ne[t])return!0;for(;e;){for(r=F(e),t=0;t<ke.length;t++)if(ke[t]===r)return!0;e=X(e)}return!1}(e))r=e;else{if(!function(e){var r,t;if("object"!=typeof e||null===e)return!1;for(t=0;t<Jr.length;t++)if(e instanceof Jr[t])return!0;for(;e;){for(r=F(e),t=0;t<Xr.length;t++)if(Xr[t]===r)return!0;e=X(e)}return!1}(e))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+e+"`.");r=8===e.BYTES_PER_ELEMENT?gr(e,0):br(e,0)}for(t={type:Dr(e),data:[]},n=0;n<r.length;n++)t.data.push(r[n]);return t}function Qr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}var Zr="mt19937",$r=!0,et={};function rt(e){var r,t,n;if(r={name:Zr,copy:$r},arguments.length){if(!z(e))throw new TypeError(Qr("0PN4K",e));if(w(e,"name")&&(r.name=e.name),w(e,"state")){if(r.state=e.state,void 0===r.state)throw new TypeError(Qr("0PN7q","state",r.state))}else if(w(e,"seed")&&(r.seed=e.seed,void 0===r.seed))throw new TypeError(Qr("0PN7q","seed",r.seed));if(w(e,"copy")&&(r.copy=e.copy,!T(r.copy)))throw new TypeError(Qr("0PN30","copy",r.copy))}if(void 0===(n=et[r.name]))throw new Error(Qr("0PN7r",r.name));return t=void 0===r.state?void 0===r.seed?n.factory():n.factory({seed:r.seed}):n.factory({state:r.state,copy:r.copy}),y(p,"NAME","randi"),s(p,"seed",o),s(p,"seedLength",i),h(p,"state",f,l),s(p,"stateLength",a),s(p,"byteLength",u),y(p,"toJSON",c),y(p,"PRNG",t),y(p,"MIN",t.MIN),y(p,"MAX",t.MAX),p;function o(){return t.seed}function i(){return t.seedLength}function a(){return t.stateLength}function u(){return t.byteLength}function f(){return t.state}function l(e){t.state=e}function c(){var e={type:"PRNG"};return e.name=p.NAME+"-"+t.NAME,e.state=Hr(t.state),e.params=[],e}function p(){return t()}}et.minstd=require("@stdlib/random-base-minstd"),et["minstd-shuffle"]=require("@stdlib/random-base-minstd-shuffle"),et.mt19937=require("@stdlib/random-base-mt19937");var tt=rt();y(tt,"factory",rt),e.default=tt,e.factory=rt,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
