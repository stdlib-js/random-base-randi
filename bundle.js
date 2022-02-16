// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).randi=e()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,s=function(t,e,n){var r,l,s,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,e)||c.call(t,e)?(r=t.__proto__,t.__proto__=o,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(t,e,n.get),y&&u&&u.call(t,e,n.set),t},y=r,p=s,v=(l=n()?y:p,l);var d=function(t,e,n){v(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})},h=d,g=l;var E=function(t,e,n){g(t,e,{configurable:!1,enumerable:!1,get:n})},b=E,m=l;var w=function(t,e,n,r){m(t,e,{configurable:!1,enumerable:!1,get:n,set:r})},A=w;var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return _&&"symbol"==typeof Symbol.toStringTag},T=Object.prototype.toString,N=T;var M=function(t){return N.call(t)},j=Object.prototype.hasOwnProperty;var P=function(t,e){return null!=t&&j.call(t,e)},R="function"==typeof Symbol?Symbol.toStringTag:"",L=P,I=R,S=T;var U=M,x=function(t){var e,n,r;if(null==t)return S.call(t);n=t[I],e=L(t,I);try{t[I]=void 0}catch(e){return S.call(t)}return r=S.call(t),e?t[I]=n:delete t[I],r},B=O()?x:U,Y=B;var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===Y(t)},V=F;var G=function(t){return"object"==typeof t&&null!==t&&!V(t)},X=/./;var C=function(t){return"boolean"==typeof t},k=Boolean.prototype.toString;var q=B,J=function(t){try{return k.call(t),!0}catch(t){return!1}},z=O();var D=function(t){return"object"==typeof t&&(t instanceof Boolean||(z?J(t):"[object Boolean]"===q(t)))},H=C,K=D;var Q=h,W=function(t){return H(t)||K(t)},Z=D;Q(W,"isPrimitive",C),Q(W,"isObject",Z);var $=W;var tt=function(){return new Function("return this;")()},et="object"==typeof self?self:null,nt="object"==typeof window?window:null,rt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},ot="object"==typeof rt?rt:null;module.exports=ot;var it=$.isPrimitive,at=tt,ut=et,ft=nt,ct=t(Object.freeze({__proto__:null}));var lt=function(t){if(arguments.length){if(!it(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return at()}if(ut)return ut;if(ft)return ft;if(ct)return ct;throw new Error("unexpected error. Unable to resolve global object.")},st=lt(),yt=st.document&&st.document.childNodes,pt=Int8Array,vt=X,dt=yt,ht=pt;var gt=function(){return"function"==typeof vt||"object"==typeof ht||"function"==typeof dt};var Et=function(){return/^\s*function\s*([^(]*)/i},bt=Et;h(bt,"REGEXP",Et());var mt=bt,wt=F;var At=function(t){return null!==t&&"object"==typeof t};h(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,r;if(!wt(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(At));var _t=At;var Ot=B,Tt=mt.REGEXP,Nt=function(t){return _t(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var Mt=function(t){var e,n,r;if(("Object"===(n=Ot(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=Tt.exec(r.toString()))return e[1]}return Nt(t)?"Buffer":n},jt=Mt,Pt=jt;var Rt=function(t){var e;return null===t?"null":"object"===(e=typeof t)?Pt(t).toLowerCase():e},Lt=jt;var It=Rt,St=function(t){return Lt(t).toLowerCase()},Ut=gt()?St:It;var xt=function(t){return"function"===Ut(t)},Bt=Object.getPrototypeOf;var Yt=function(t){return t.__proto__},Ft=B,Vt=Yt;var Gt=function(t){var e=Vt(t);return e||null===e?e:"[object Function]"===Ft(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Xt=Bt,Ct=Gt,kt=xt(Object.getPrototypeOf)?Xt:Ct;var qt=function(t){return null==t?null:(t=Object(t),kt(t))},Jt=G,zt=xt,Dt=qt,Ht=P,Kt=B,Qt=Object.prototype;var Wt=function(t){var e;return!!Jt(t)&&(!(e=Dt(t))||!Ht(t,"constructor")&&Ht(e,"constructor")&&zt(e.constructor)&&"[object Function]"===Kt(e.constructor)&&Ht(e,"isPrototypeOf")&&zt(e.isPrototypeOf)&&(e===Qt||function(t){var e;for(e in t)if(!Ht(t,e))return!1;return!0}(t)))},Zt=Wt;var $t=function(){};var te=xt,ee=mt.REGEXP,ne=function(){return"foo"===$t.name}();var re=function(t){if(!1===te(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return ne?t.name:ee.exec(t.toString())[1]},oe=B,ie="function"==typeof Float64Array;var ae="function"==typeof Float64Array?Float64Array:null,ue=function(t){return ie&&t instanceof Float64Array||"[object Float64Array]"===oe(t)},fe=ae;var ce=function(){var t,e;if("function"!=typeof fe)return!1;try{e=new fe([1,3.14,-3.14,NaN]),t=ue(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t};var le="function"==typeof Float64Array?Float64Array:void 0,se=function(){throw new Error("not implemented")},ye=ce()?le:se,pe=B,ve="function"==typeof Int8Array;var de="function"==typeof Int8Array?Int8Array:null,he=function(t){return ve&&t instanceof Int8Array||"[object Int8Array]"===pe(t)},ge=de;var Ee="function"==typeof Int8Array?Int8Array:void 0,be=function(){throw new Error("not implemented")},me=function(){var t,e;if("function"!=typeof ge)return!1;try{e=new ge([1,3.14,-3.14,128]),t=he(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){t=!1}return t}()?Ee:be,we=B,Ae="function"==typeof Uint8Array;var _e="function"==typeof Uint8Array?Uint8Array:null,Oe=function(t){return Ae&&t instanceof Uint8Array||"[object Uint8Array]"===we(t)},Te=_e;var Ne="function"==typeof Uint8Array?Uint8Array:void 0,Me=function(){throw new Error("not implemented")},je=function(){var t,e;if("function"!=typeof Te)return!1;try{e=new Te(e=[1,3.14,-3.14,256,257]),t=Oe(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Ne:Me,Pe=B,Re="function"==typeof Uint8ClampedArray;var Le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Ie=function(t){return Re&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Pe(t)},Se=Le;var Ue="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,xe=function(){throw new Error("not implemented")},Be=function(){var t,e;if("function"!=typeof Se)return!1;try{e=new Se([-1,0,1,3.14,4.99,255,256]),t=Ie(e)&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){t=!1}return t}()?Ue:xe,Ye=B,Fe="function"==typeof Int16Array;var Ve="function"==typeof Int16Array?Int16Array:null,Ge=function(t){return Fe&&t instanceof Int16Array||"[object Int16Array]"===Ye(t)},Xe=Ve;var Ce="function"==typeof Int16Array?Int16Array:void 0,ke=function(){throw new Error("not implemented")},qe=function(){var t,e;if("function"!=typeof Xe)return!1;try{e=new Xe([1,3.14,-3.14,32768]),t=Ge(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){t=!1}return t}()?Ce:ke,Je=B,ze="function"==typeof Uint16Array;var De="function"==typeof Uint16Array?Uint16Array:null,He=function(t){return ze&&t instanceof Uint16Array||"[object Uint16Array]"===Je(t)},Ke=De;var Qe="function"==typeof Uint16Array?Uint16Array:void 0,We=function(){throw new Error("not implemented")},Ze=function(){var t,e;if("function"!=typeof Ke)return!1;try{e=new Ke(e=[1,3.14,-3.14,65536,65537]),t=He(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Qe:We,$e=B,tn="function"==typeof Int32Array;var en=function(t){return tn&&t instanceof Int32Array||"[object Int32Array]"===$e(t)},nn=2147483647,rn="function"==typeof Int32Array?Int32Array:null,on=en,an=rn;var un="function"==typeof Int32Array?Int32Array:void 0,fn=function(){throw new Error("not implemented")},cn=function(){var t,e;if("function"!=typeof an)return!1;try{e=new an([1,3.14,-3.14,2147483648]),t=on(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){t=!1}return t}()?un:fn,ln=B,sn="function"==typeof Uint32Array;var yn=function(t){return sn&&t instanceof Uint32Array||"[object Uint32Array]"===ln(t)},pn=4294967295,vn="function"==typeof Uint32Array?Uint32Array:null,dn=yn,hn=vn;var gn="function"==typeof Uint32Array?Uint32Array:void 0,En=function(){throw new Error("not implemented")},bn=function(){var t,e;if("function"!=typeof hn)return!1;try{e=new hn(e=[1,3.14,-3.14,4294967296,4294967297]),t=dn(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?gn:En,mn=B,wn="function"==typeof Float32Array;var An=function(t){return wn&&t instanceof Float32Array||"[object Float32Array]"===mn(t)},_n=Number.POSITIVE_INFINITY,On="function"==typeof Float32Array?Float32Array:null,Tn=An,Nn=_n,Mn=On;var jn="function"==typeof Float32Array?Float32Array:void 0,Pn=function(){throw new Error("not implemented")},Rn=function(){var t,e;if("function"!=typeof Mn)return!1;try{e=new Mn([1,3.14,-3.14,5e40]),t=Tn(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Nn}catch(e){t=!1}return t}()?jn:Pn,Ln=jt,In=re,Sn=qt,Un=ye,xn=[ye,Rn,cn,bn,qe,Ze,me,je,Be],Bn=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Yn=ce()?Sn(Un):Fn;function Fn(){}Yn="TypedArray"===In(Yn)?Yn:Fn;var Vn=function(t,e){if("function"!=typeof e)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return t instanceof e},Gn=jt,Xn=qt,Cn=[[ye,"Float64Array"],[Rn,"Float32Array"],[cn,"Int32Array"],[bn,"Uint32Array"],[qe,"Int16Array"],[Ze,"Uint16Array"],[me,"Int8Array"],[je,"Uint8Array"],[Be,"Uint8ClampedArray"]];var kn=function(t){var e,n;if("object"!=typeof t||null===t)return!1;if(t instanceof Yn)return!0;for(n=0;n<xn.length;n++)if(t instanceof xn[n])return!0;for(;t;){for(e=Ln(t),n=0;n<Bn.length;n++)if(Bn[n]===e)return!0;t=Sn(t)}return!1},qn=function(t){var e,n;for(n=0;n<Cn.length;n++)if(Vn(t,Cn[n][0]))return Cn[n][1];for(;t;){for(e=Gn(t),n=0;n<Cn.length;n++)if(e===Cn[n][1])return Cn[n][1];t=Xn(t)}};var Jn=function(t){var e,n;if(!kn(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((e={}).type=qn(t),e.data=[],n=0;n<t.length;n++)e.data.push(t[n]);return e},zn={name:"mt19937",copy:!0},Dn=Math.floor,Hn=Dn;var Kn=function(t){return Hn(t)===t},Qn=Kn;var Wn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Qn(t.length)&&t.length>=0&&t.length<=9007199254740991};var Zn=function(t){return"number"==typeof t},$n=Number,tr=$n.prototype.toString;var er=B,nr=$n,rr=function(t){try{return tr.call(t),!0}catch(t){return!1}},or=O();var ir=function(t){return"object"==typeof t&&(t instanceof nr||(or?rr(t):"[object Number]"===er(t)))},ar=Zn,ur=ir;var fr=h,cr=function(t){return ar(t)||ur(t)},lr=ir;fr(cr,"isPrimitive",Zn),fr(cr,"isObject",lr);var sr=cr,yr=$n.NEGATIVE_INFINITY,pr=_n,vr=yr,dr=Kn;var hr=function(t){return t<pr&&t>vr&&dr(t)},gr=sr.isPrimitive,Er=hr;var br=function(t){return gr(t)&&Er(t)},mr=sr.isObject,wr=hr;var Ar=function(t){return mr(t)&&wr(t.valueOf())},_r=br,Or=Ar;var Tr=h,Nr=function(t){return _r(t)||Or(t)},Mr=Ar;Tr(Nr,"isPrimitive",br),Tr(Nr,"isObject",Mr);var jr=Nr.isPrimitive;var Pr=function(t){return jr(t)&&t>0},Rr=Nr.isObject;var Lr=function(t){return Rr(t)&&t.valueOf()>0},Ir=Pr,Sr=Lr;var Ur=h,xr=function(t){return Ir(t)||Sr(t)},Br=Lr;Ur(xr,"isPrimitive",Pr),Ur(xr,"isObject",Br);var Yr=xr;var Fr=function(t,e,n,r,o){var i,a,u,f;if(t<=0)return r;if(1===n&&1===o){if((u=t%8)>0)for(f=0;f<u;f++)r[f]=e[f];if(t<8)return r;for(f=u;f<t;f+=8)r[f]=e[f],r[f+1]=e[f+1],r[f+2]=e[f+2],r[f+3]=e[f+3],r[f+4]=e[f+4],r[f+5]=e[f+5],r[f+6]=e[f+6],r[f+7]=e[f+7];return r}for(i=n<0?(1-t)*n:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)r[a]=e[i],i+=n,a+=o;return r};var Vr=function(t,e,n,r,o,i,a){var u,f,c,l;if(t<=0)return o;if(u=r,f=a,1===n&&1===i){if((c=t%8)>0)for(l=0;l<c;l++)o[f]=e[u],u+=n,f+=i;if(t<8)return o;for(l=c;l<t;l+=8)o[f]=e[u],o[f+1]=e[u+1],o[f+2]=e[u+2],o[f+3]=e[u+3],o[f+4]=e[u+4],o[f+5]=e[u+5],o[f+6]=e[u+6],o[f+7]=e[u+7],u+=8,f+=8;return o}for(l=0;l<t;l++)o[f]=e[u],u+=n,f+=i;return o},Gr=Fr;h(Gr,"ndarray",Vr);var Xr=Gr,Cr=Dn;var kr=function(){return 0|Cr(1+2147483646*Math.random())},qr=h,Jr=b,zr=A,Dr=P,Hr=Zt,Kr=$.isPrimitive,Qr=Wn,Wr=Yr.isPrimitive,Zr=en,$r=nn,to=cn,eo=Xr,no=Jn,ro=kr,oo=2147483646,io=2147483646;function ao(t,e){var n;return n=e?"option":"argument",t.length<6?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):2!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 2. Actual: "+t[1]+"."):1!==t[2]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+1..toString()+". Actual: "+t[2]+"."):t[4]!==t.length-5?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-5)+". Actual: "+t[4]+"."):null}var uo=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!Hr(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Dr(t,"copy")&&(r.copy=t.copy,!Kr(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(Dr(t,"state")){if(n=t.state,r.state=!0,!Zr(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(a=ao(n,!0))throw a;!1===r.copy?e=n:(e=new to(n.length),eo(n.length,n,1,e,1)),n=new to(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new to(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,n[4])}if(void 0===o)if(Dr(t,"seed"))if(o=t.seed,r.seed=!0,Wr(o)){if(o>io)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(Qr(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(e=new to(5+i))[0]=1,e[1]=2,e[2]=1,e[4]=i,eo.ndarray(i,o,1,0,e,1,5),n=new to(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new to(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,i),n[0]=o[0]}else o=0|ro()}else o=0|ro();return void 0===n&&((e=new to(6))[0]=1,e[1]=2,e[2]=1,e[4]=1,e[5]=o,n=new to(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new to(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,1),n[0]=o[0]),qr(v,"NAME","minstd"),Jr(v,"seed",u),Jr(v,"seedLength",f),zr(v,"state",s,y),Jr(v,"stateLength",c),Jr(v,"byteLength",l),qr(v,"toJSON",p),qr(v,"MIN",1),qr(v,"MAX",2147483646),qr(v,"normalized",d),qr(d,"NAME",v.NAME),Jr(d,"seed",u),Jr(d,"seedLength",f),zr(d,"state",s,y),Jr(d,"stateLength",c),Jr(d,"byteLength",l),qr(d,"toJSON",p),qr(d,"MIN",(v.MIN-1)/oo),qr(d,"MAX",(v.MAX-1)/oo),v;function u(){var t=e[4];return eo(t,o,1,new to(t),1)}function f(){return e[4]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return eo(t,e,1,new to(t),1)}function y(t){var i;if(!Zr(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(i=ao(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?eo(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new to(t.length)),eo(t.length,t,1,e,1)),n=new to(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new to(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,e[4])}function p(){var t={type:"PRNG"};return t.name=v.NAME,t.state=no(e),t.params=[],t}function v(){var t=0|n[0];return t=16807*t%$r|0,n[0]=t,0|t}function d(){return(v()-1)/oo}},fo=uo({seed:kr()});h(fo,"factory",uo);var co=fo;var lo=function(t){return t!=t},so=lo;var yo=function(t,e,n){var r,o;for(o=0;o<8;o++)if(r=t(),so(r))throw new Error("unexpected error. PRNG returned `NaN`.");for(o=n-1;o>=0;o--)e[o]=t();return e},po=Dn;var vo=function(){return 0|po(1+2147483646*Math.random())},ho=h,go=b,Eo=A,bo=P,mo=Zt,wo=$.isPrimitive,Ao=Wn,_o=Yr.isPrimitive,Oo=en,To=Xr,No=Dn,Mo=cn,jo=nn,Po=Jn,Ro=yo,Lo=vo,Io=2147483646,So=2147483646,Uo=32,xo=39;function Bo(t,e){var n;return n=e?"option":"argument",t.length<40?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==Uo?new RangeError("invalid "+n+". `state` array has an incompatible table length. Expected: "+"32. Actual: "+t[2]+"."):2!==t[35]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+2..toString()+". Actual: "+t[35]+"."):t[38]!==t.length-xo?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-xo)+". Actual: "+t[38]+"."):null}var Yo=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!mo(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(bo(t,"copy")&&(r.copy=t.copy,!wo(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(bo(t,"state")){if(n=t.state,r.state=!0,!Oo(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(a=Bo(n,!0))throw a;!1===r.copy?e=n:(e=new Mo(n.length),To(n.length,n,1,e,1)),n=new Mo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Uo),o=new Mo(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,n[38])}if(void 0===o)if(bo(t,"seed"))if(o=t.seed,r.seed=!0,_o(o)){if(o>So)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(Ao(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(e=new Mo(xo+i))[0]=1,e[1]=3,e[2]=Uo,e[35]=2,e[37]=o[0],e[38]=i,To.ndarray(i,o,1,0,e,1,39),n=new Mo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Uo),o=new Mo(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,i),n=Ro(v,n,Uo),e[36]=n[0]}else o=0|Lo()}else o=0|Lo();return void 0===n&&((e=new Mo(40))[0]=1,e[1]=3,e[2]=Uo,e[35]=2,e[37]=o,e[38]=1,e[39]=o,n=new Mo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Uo),o=new Mo(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,1),n=Ro(v,n,Uo),e[36]=n[0]),ho(d,"NAME","minstd-shuffle"),go(d,"seed",u),go(d,"seedLength",f),Eo(d,"state",s,y),go(d,"stateLength",c),go(d,"byteLength",l),ho(d,"toJSON",p),ho(d,"MIN",1),ho(d,"MAX",2147483646),ho(d,"normalized",h),ho(h,"NAME",d.NAME),go(h,"seed",u),go(h,"seedLength",f),Eo(h,"state",s,y),go(h,"stateLength",c),go(h,"byteLength",l),ho(h,"toJSON",p),ho(h,"MIN",(d.MIN-1)/Io),ho(h,"MAX",(d.MAX-1)/Io),d;function u(){var t=e[38];return To(t,o,1,new Mo(t),1)}function f(){return e[38]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return To(t,e,1,new Mo(t),1)}function y(t){var i;if(!Oo(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(i=Bo(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?To(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new Mo(t.length)),To(t.length,t,1,e,1)),n=new Mo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Uo),o=new Mo(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,e[38])}function p(){var t={type:"PRNG"};return t.name=d.NAME,t.state=Po(e),t.params=[],t}function v(){var t=0|e[37];return t=16807*t%jo|0,e[37]=t,0|t}function d(){var t,r;return t=e[36],r=No(Uo*(t/jo)),t=n[r],e[36]=t,n[r]=v(),t}function h(){return(d()-1)/Io}},Fo=Yo({seed:vo()});h(Fo,"factory",Yo);var Vo=Fo,Go=_n;var Xo=function(t){return 0===t&&1/t===Go},Co=lo,ko=yr,qo=_n;var Jo=function(t,e){var n,r,o,i;if(2===(n=arguments.length))return Co(t)||Co(e)?NaN:t===qo||e===qo?qo:t===e&&0===t?Xo(t)?t:e:t>e?t:e;for(r=ko,i=0;i<n;i++){if(Co(o=arguments[i])||o===qo)return o;(o>r||o===r&&0===o&&Xo(o))&&(r=o)}return r};var zo=Dn;var Do=function(){return zo(1+4294967294*Math.random())>>>0},Ho=h,Ko=b,Qo=A,Wo=P,Zo=Zt,$o=Wn,ti=yn,ei=$.isPrimitive,ni=Yr.isPrimitive,ri=pn,oi=bn,ii=Jo,ai=function(t,e){var n,r;return((n=(65535&(t>>>=0))>>>0)*(r=(65535&(e>>>=0))>>>0)>>>0)+((t>>>16>>>0)*r+n*(e>>>16>>>0)<<16>>>0)>>>0},ui=Xr,fi=Jn,ci=Do,li=624,si=4294967295,yi=19650218,pi=2147483648,vi=2147483647,di=2636928640,hi=4022730752,gi=[0,2567483615],Ei=1/9007199254740992,bi=67108864,mi=.9999999999999999,wi=630;function Ai(t,e){var n;return n=e?"option":"argument",t.length<631?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==li?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+li+". Actual: "+t[2]+"."):1!==t[627]?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+t[627]+"."):t[629]!==t.length-wi?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-wi)+". Actual: "+t[629]+"."):null}function _i(t,e,n){var r;for(t[0]=n>>>0,r=1;r<e;r++)n=((n=t[r-1]>>>0)^n>>>30)>>>0,t[r]=ai(n,1812433253)+r>>>0;return t}function Oi(t,e,n,r){var o,i,a,u;for(i=1,a=0,u=ii(e,r);u>0;u--)o=t[i-1]>>>0,o=ai(o=(o^o>>>30)>>>0,1664525)>>>0,t[i]=(t[i]>>>0^o)+n[a]+a>>>0,a+=1,(i+=1)>=e&&(t[0]=t[e-1],i=1),a>=r&&(a=0);for(u=e-1;u>0;u--)o=t[i-1]>>>0,o=ai(o=(o^o>>>30)>>>0,1566083941)>>>0,t[i]=(t[i]>>>0^o)-i>>>0,(i+=1)>=e&&(t[0]=t[e-1],i=1);return t[0]=2147483648,t}function Ti(t){var e,n;for(227,n=0;n<227;n++)e=t[n]&pi|t[n+1]&vi,t[n]=t[n+397]^e>>>1^gi[1&e];for(623;n<623;n++)e=t[n]&pi|t[n+1]&vi,t[n]=t[n-227]^e>>>1^gi[1&e];return e=t[623]&pi|t[0]&vi,t[623]=t[396]^e>>>1^gi[1&e],t}var Ni=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!Zo(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Wo(t,"copy")&&(r.copy=t.copy,!ei(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(Wo(t,"state")){if(n=t.state,r.state=!0,!ti(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(a=Ai(n,!0))throw a;!1===r.copy?e=n:(e=new oi(n.length),ui(n.length,n,1,e,1)),n=new oi(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,li),o=new oi(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,n[629])}if(void 0===o)if(Wo(t,"seed"))if(o=t.seed,r.seed=!0,ni(o)){if(o>si)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else{if(!1===$o(o)||o.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(1===o.length){if(o=o[0],!ni(o))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(o>si)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else i=o.length,(e=new oi(wi+i))[0]=1,e[1]=3,e[2]=li,e[627]=1,e[628]=li,e[629]=i,ui.ndarray(i,o,1,0,e,1,630),n=new oi(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,li),o=new oi(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,i),n=Oi(n=_i(n,li,yi),li,o,i)}else o=ci()>>>0}else o=ci()>>>0;return void 0===n&&((e=new oi(631))[0]=1,e[1]=3,e[2]=li,e[627]=1,e[628]=li,e[629]=1,e[630]=o,n=new oi(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,li),o=new oi(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,1),n=_i(n,li,o)),Ho(v,"NAME","mt19937"),Ko(v,"seed",u),Ko(v,"seedLength",f),Qo(v,"state",s,y),Ko(v,"stateLength",c),Ko(v,"byteLength",l),Ho(v,"toJSON",p),Ho(v,"MIN",1),Ho(v,"MAX",ri),Ho(v,"normalized",d),Ho(d,"NAME",v.NAME),Ko(d,"seed",u),Ko(d,"seedLength",f),Qo(d,"state",s,y),Ko(d,"stateLength",c),Ko(d,"byteLength",l),Ho(d,"toJSON",p),Ho(d,"MIN",0),Ho(d,"MAX",mi),v;function u(){var t=e[629];return ui(t,o,1,new oi(t),1)}function f(){return e[629]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return ui(t,e,1,new oi(t),1)}function y(t){var i;if(!ti(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");if(i=Ai(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?ui(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new oi(t.length)),ui(t.length,t,1,e,1)),n=new oi(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,li),o=new oi(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,e[629])}function p(){var t={type:"PRNG"};return t.name=v.NAME,t.state=fi(e),t.params=[],t}function v(){var t,r;return(r=e[628])>=li&&(n=Ti(n),r=0),t=n[r],e[628]=r+1,t^=t>>>11,t^=t<<7&di,t^=t<<15&hi,(t^=t>>>18)>>>0}function d(){var t=v()>>>5,e=v()>>>6;return(t*bi+e)*Ei}},Mi=Ni({seed:Do()});h(Mi,"factory",Ni);var ji=Mi,Pi={};Pi.minstd=co,Pi["minstd-shuffle"]=Vo,Pi.mt19937=ji;var Ri=h,Li=b,Ii=A,Si=Zt,Ui=$.isPrimitive,xi=P,Bi=Jn,Yi=zn,Fi=Pi;var Vi=function(t){var e,n,r;if(e={name:Yi.name,copy:Yi.copy},arguments.length){if(!Si(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");if(xi(t,"name")&&(e.name=t.name),xi(t,"state")){if(e.state=t.state,void 0===e.state)throw new TypeError("invalid option. `state` option cannot be undefined. Option: `"+e.state+"`.")}else if(xi(t,"seed")&&(e.seed=t.seed,void 0===e.seed))throw new TypeError("invalid option. `seed` option cannot be undefined. Option: `"+e.seed+"`.");if(xi(t,"copy")&&(e.copy=t.copy,!Ui(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.")}if(void 0===(r=Fi[e.name]))throw new Error("invalid option. Unrecognized/unsupported PRNG. Option: `"+e.name+"`.");return n=void 0===e.state?void 0===e.seed?r.factory():r.factory({seed:e.seed}):r.factory({state:e.state,copy:e.copy}),Ri(s,"NAME","randi"),Li(s,"seed",o),Li(s,"seedLength",i),Ii(s,"state",f,c),Li(s,"stateLength",a),Li(s,"byteLength",u),Ri(s,"toJSON",l),Ri(s,"PRNG",n),Ri(s,"MIN",n.MIN),Ri(s,"MAX",n.MAX),s;function o(){return n.seed}function i(){return n.seedLength}function a(){return n.stateLength}function u(){return n.byteLength}function f(){return n.state}function c(t){n.state=t}function l(){var t={type:"PRNG"};return t.name=s.NAME+"-"+n.NAME,t.state=Bi(n.state),t.params=[],t}function s(){return n()}},Gi=Vi();return h(Gi,"factory",Vi),Gi}));
//# sourceMappingURL=bundle.js.map
