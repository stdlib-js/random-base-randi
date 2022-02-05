/// <reference types="./mod.d.ts" />
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return e({},"x",{}),!0}catch(t){return!1}},r=Object.defineProperty,o=Object.prototype,i=o.toString,a=o.__defineGetter__,u=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l,s=function(t,e,n){var r,l,s,y;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,e)||c.call(t,e)?(r=t.__proto__,t.__proto__=o,delete t[e],t[e]=n.value,t.__proto__=r):t[e]=n.value),s="get"in n,y="set"in n,l&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&a&&a.call(t,e,n.get),y&&u&&u.call(t,e,n.set),t},y=r,p=s,v=(l=n()?y:p,l);var h=function(t,e,n){v(t,e,{configurable:!1,enumerable:!1,writable:!1,value:n})},d=h,g=l;var E=function(t,e,n){g(t,e,{configurable:!1,enumerable:!1,get:n})},b=E,m=l;var w=function(t,e,n,r){m(t,e,{configurable:!1,enumerable:!1,get:n,set:r})},A=w;var T=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var _=function(){return T&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,N=O;var M=function(t){return N.call(t)},j=Object.prototype.hasOwnProperty;var P=function(t,e){return null!=t&&j.call(t,e)},R="function"==typeof Symbol?Symbol.toStringTag:"",L=P,I=R,S=O;var U=M,x=function(t){var e,n,r;if(null==t)return S.call(t);n=t[I],e=L(t,I);try{t[I]=void 0}catch(e){return S.call(t)}return r=S.call(t),e?t[I]=n:delete t[I],r},B=_()?x:U,Y=B;var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===Y(t)},V=F;var G=function(t){return"object"==typeof t&&null!==t&&!V(t)},X=/./;var C=function(t){return"boolean"==typeof t},k=Boolean.prototype.toString;var q=B,J=function(t){try{return k.call(t),!0}catch(t){return!1}},z=_();var D=function(t){return"object"==typeof t&&(t instanceof Boolean||(z?J(t):"[object Boolean]"===q(t)))},H=C,K=D;var Q=d,W=function(t){return H(t)||K(t)},Z=D;Q(W,"isPrimitive",C),Q(W,"isObject",Z);var $=W;var tt="object"==typeof self?self:null,et="object"==typeof window?window:null,nt=$.isPrimitive,rt=function(){return new Function("return this;")()},ot=tt,it=et,at="object"==typeof t?t:null;var ut=function(t){if(arguments.length){if(!nt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return rt()}if(ot)return ot;if(it)return it;if(at)return at;throw new Error("unexpected error. Unable to resolve global object.")},ft=ut(),ct=ft.document&&ft.document.childNodes,lt=Int8Array,st=X,yt=ct,pt=lt;var vt=function(){return"function"==typeof st||"object"==typeof pt||"function"==typeof yt};var ht=function(){return/^\s*function\s*([^(]*)/i},dt=ht;d(dt,"REGEXP",ht());var gt=dt,Et=F;var bt=function(t){return null!==t&&"object"==typeof t};d(bt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var n,r;if(!Et(e))return!1;if(0===(n=e.length))return!1;for(r=0;r<n;r++)if(!1===t(e[r]))return!1;return!0}}(bt));var mt=bt;var wt=B,At=gt.REGEXP,Tt=function(t){return mt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var _t=function(t){var e,n,r;if(("Object"===(n=wt(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(e=At.exec(r.toString()))return e[1]}return Tt(t)?"Buffer":n},Ot=_t,Nt=Ot;var Mt=function(t){var e;return null===t?"null":"object"===(e=typeof t)?Nt(t).toLowerCase():e},jt=Ot;var Pt=Mt,Rt=function(t){return jt(t).toLowerCase()},Lt=vt()?Rt:Pt;var It=function(t){return"function"===Lt(t)},St=Object.getPrototypeOf;var Ut=function(t){return t.__proto__},xt=B,Bt=Ut;var Yt=function(t){var e=Bt(t);return e||null===e?e:"[object Function]"===xt(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},Ft=St,Vt=Yt,Gt=It(Object.getPrototypeOf)?Ft:Vt;var Xt=function(t){return null==t?null:(t=Object(t),Gt(t))},Ct=G,kt=It,qt=Xt,Jt=P,zt=B,Dt=Object.prototype;var Ht=function(t){var e;return!!Ct(t)&&(!(e=qt(t))||!Jt(t,"constructor")&&Jt(e,"constructor")&&kt(e.constructor)&&"[object Function]"===zt(e.constructor)&&Jt(e,"isPrototypeOf")&&kt(e.isPrototypeOf)&&(e===Dt||function(t){var e;for(e in t)if(!Jt(t,e))return!1;return!0}(t)))},Kt=Ht;var Qt=function(){};var Wt=It,Zt=gt.REGEXP,$t=function(){return"foo"===Qt.name}();var te=function(t){if(!1===Wt(t))throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return $t?t.name:Zt.exec(t.toString())[1]},ee=B,ne="function"==typeof Float64Array;var re="function"==typeof Float64Array?Float64Array:null,oe=function(t){return ne&&t instanceof Float64Array||"[object Float64Array]"===ee(t)},ie=re;var ae=function(){var t,e;if("function"!=typeof ie)return!1;try{e=new ie([1,3.14,-3.14,NaN]),t=oe(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t};var ue="function"==typeof Float64Array?Float64Array:void 0,fe=function(){throw new Error("not implemented")},ce=ae()?ue:fe,le=B,se="function"==typeof Int8Array;var ye="function"==typeof Int8Array?Int8Array:null,pe=function(t){return se&&t instanceof Int8Array||"[object Int8Array]"===le(t)},ve=ye;var he="function"==typeof Int8Array?Int8Array:void 0,de=function(){throw new Error("not implemented")},ge=function(){var t,e;if("function"!=typeof ve)return!1;try{e=new ve([1,3.14,-3.14,128]),t=pe(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){t=!1}return t}()?he:de,Ee=B,be="function"==typeof Uint8Array;var me="function"==typeof Uint8Array?Uint8Array:null,we=function(t){return be&&t instanceof Uint8Array||"[object Uint8Array]"===Ee(t)},Ae=me;var Te="function"==typeof Uint8Array?Uint8Array:void 0,_e=function(){throw new Error("not implemented")},Oe=function(){var t,e;if("function"!=typeof Ae)return!1;try{e=new Ae(e=[1,3.14,-3.14,256,257]),t=we(e)&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Te:_e,Ne=B,Me="function"==typeof Uint8ClampedArray;var je="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Pe=function(t){return Me&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===Ne(t)},Re=je;var Le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Ie=function(){throw new Error("not implemented")},Se=function(){var t,e;if("function"!=typeof Re)return!1;try{e=new Re([-1,0,1,3.14,4.99,255,256]),t=Pe(e)&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){t=!1}return t}()?Le:Ie,Ue=B,xe="function"==typeof Int16Array;var Be="function"==typeof Int16Array?Int16Array:null,Ye=function(t){return xe&&t instanceof Int16Array||"[object Int16Array]"===Ue(t)},Fe=Be;var Ve="function"==typeof Int16Array?Int16Array:void 0,Ge=function(){throw new Error("not implemented")},Xe=function(){var t,e;if("function"!=typeof Fe)return!1;try{e=new Fe([1,3.14,-3.14,32768]),t=Ye(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){t=!1}return t}()?Ve:Ge,Ce=B,ke="function"==typeof Uint16Array;var qe="function"==typeof Uint16Array?Uint16Array:null,Je=function(t){return ke&&t instanceof Uint16Array||"[object Uint16Array]"===Ce(t)},ze=qe;var De="function"==typeof Uint16Array?Uint16Array:void 0,He=function(){throw new Error("not implemented")},Ke=function(){var t,e;if("function"!=typeof ze)return!1;try{e=new ze(e=[1,3.14,-3.14,65536,65537]),t=Je(e)&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?De:He,Qe=B,We="function"==typeof Int32Array;var Ze=function(t){return We&&t instanceof Int32Array||"[object Int32Array]"===Qe(t)},$e="function"==typeof Int32Array?Int32Array:null,tn=Ze,en=$e;var nn="function"==typeof Int32Array?Int32Array:void 0,rn=function(){throw new Error("not implemented")},on=function(){var t,e;if("function"!=typeof en)return!1;try{e=new en([1,3.14,-3.14,2147483648]),t=tn(e)&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){t=!1}return t}()?nn:rn,an=B,un="function"==typeof Uint32Array;var fn=function(t){return un&&t instanceof Uint32Array||"[object Uint32Array]"===an(t)},cn="function"==typeof Uint32Array?Uint32Array:null,ln=fn,sn=cn;var yn="function"==typeof Uint32Array?Uint32Array:void 0,pn=function(){throw new Error("not implemented")},vn=function(){var t,e;if("function"!=typeof sn)return!1;try{e=new sn(e=[1,3.14,-3.14,4294967296,4294967297]),t=ln(e)&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?yn:pn,hn=B,dn="function"==typeof Float32Array;var gn=function(t){return dn&&t instanceof Float32Array||"[object Float32Array]"===hn(t)},En=Number.POSITIVE_INFINITY,bn="function"==typeof Float32Array?Float32Array:null,mn=gn,wn=En,An=bn;var Tn="function"==typeof Float32Array?Float32Array:void 0,_n=function(){throw new Error("not implemented")},On=function(){var t,e;if("function"!=typeof An)return!1;try{e=new An([1,3.14,-3.14,5e40]),t=mn(e)&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===wn}catch(e){t=!1}return t}()?Tn:_n,Nn=Ot,Mn=te,jn=Xt,Pn=ce,Rn=[ce,On,on,vn,Xe,Ke,ge,Oe,Se],Ln=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],In=ae()?jn(Pn):Sn;function Sn(){}In="TypedArray"===Mn(In)?In:Sn;var Un=function(t,e){if("function"!=typeof e)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return t instanceof e},xn=Ot,Bn=Xt,Yn=[[ce,"Float64Array"],[On,"Float32Array"],[on,"Int32Array"],[vn,"Uint32Array"],[Xe,"Int16Array"],[Ke,"Uint16Array"],[ge,"Int8Array"],[Oe,"Uint8Array"],[Se,"Uint8ClampedArray"]];var Fn=function(t){var e,n;if("object"!=typeof t||null===t)return!1;if(t instanceof In)return!0;for(n=0;n<Rn.length;n++)if(t instanceof Rn[n])return!0;for(;t;){for(e=Nn(t),n=0;n<Ln.length;n++)if(Ln[n]===e)return!0;t=jn(t)}return!1},Vn=function(t){var e,n;for(n=0;n<Yn.length;n++)if(Un(t,Yn[n][0]))return Yn[n][1];for(;t;){for(e=xn(t),n=0;n<Yn.length;n++)if(e===Yn[n][1])return Yn[n][1];t=Bn(t)}};var Gn=function(t){var e,n;if(!Fn(t))throw new TypeError("invalid argument. Must provide a typed array. Value: `"+t+"`.");for((e={}).type=Vn(t),e.data=[],n=0;n<t.length;n++)e.data.push(t[n]);return e},Xn={name:"mt19937",copy:!0},Cn=Math.floor,kn=Cn;var qn=function(t){return kn(t)===t},Jn=qn;var zn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Jn(t.length)&&t.length>=0&&t.length<=9007199254740991};var Dn=function(t){return"number"==typeof t},Hn=Number,Kn=Hn.prototype.toString;var Qn=B,Wn=Hn,Zn=function(t){try{return Kn.call(t),!0}catch(t){return!1}},$n=_();var tr=function(t){return"object"==typeof t&&(t instanceof Wn||($n?Zn(t):"[object Number]"===Qn(t)))},er=Dn,nr=tr;var rr=d,or=function(t){return er(t)||nr(t)},ir=tr;rr(or,"isPrimitive",Dn),rr(or,"isObject",ir);var ar=or,ur=Hn.NEGATIVE_INFINITY,fr=En,cr=ur,lr=qn;var sr=function(t){return t<fr&&t>cr&&lr(t)},yr=ar.isPrimitive,pr=sr;var vr=function(t){return yr(t)&&pr(t)},hr=ar.isObject,dr=sr;var gr=function(t){return hr(t)&&dr(t.valueOf())},Er=vr,br=gr;var mr=d,wr=function(t){return Er(t)||br(t)},Ar=gr;mr(wr,"isPrimitive",vr),mr(wr,"isObject",Ar);var Tr=wr.isPrimitive;var _r=function(t){return Tr(t)&&t>0},Or=wr.isObject;var Nr=function(t){return Or(t)&&t.valueOf()>0},Mr=_r,jr=Nr;var Pr=d,Rr=function(t){return Mr(t)||jr(t)},Lr=Nr;Pr(Rr,"isPrimitive",_r),Pr(Rr,"isObject",Lr);var Ir=Rr;var Sr=function(t,e,n,r,o){var i,a,u,f;if(t<=0)return r;if(1===n&&1===o){if((u=t%8)>0)for(f=0;f<u;f++)r[f]=e[f];if(t<8)return r;for(f=u;f<t;f+=8)r[f]=e[f],r[f+1]=e[f+1],r[f+2]=e[f+2],r[f+3]=e[f+3],r[f+4]=e[f+4],r[f+5]=e[f+5],r[f+6]=e[f+6],r[f+7]=e[f+7];return r}for(i=n<0?(1-t)*n:0,a=o<0?(1-t)*o:0,f=0;f<t;f++)r[a]=e[i],i+=n,a+=o;return r};var Ur=function(t,e,n,r,o,i,a){var u,f,c,l;if(t<=0)return o;if(u=r,f=a,1===n&&1===i){if((c=t%8)>0)for(l=0;l<c;l++)o[f]=e[u],u+=n,f+=i;if(t<8)return o;for(l=c;l<t;l+=8)o[f]=e[u],o[f+1]=e[u+1],o[f+2]=e[u+2],o[f+3]=e[u+3],o[f+4]=e[u+4],o[f+5]=e[u+5],o[f+6]=e[u+6],o[f+7]=e[u+7],u+=8,f+=8;return o}for(l=0;l<t;l++)o[f]=e[u],u+=n,f+=i;return o},xr=Sr;d(xr,"ndarray",Ur);var Br=xr,Yr=Cn;var Fr=function(){return 0|Yr(1+2147483646*Math.random())},Vr=d,Gr=b,Xr=A,Cr=P,kr=Kt,qr=$.isPrimitive,Jr=zn,zr=Ir.isPrimitive,Dr=Ze,Hr=on,Kr=Br,Qr=Gn,Wr=Fr;function Zr(t,e){var n;return n=e?"option":"argument",t.length<6?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):2!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 2. Actual: "+t[1]+"."):1!==t[2]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+1..toString()+". Actual: "+t[2]+"."):t[4]!==t.length-5?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-5)+". Actual: "+t[4]+"."):null}var $r=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!kr(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Cr(t,"copy")&&(r.copy=t.copy,!qr(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(Cr(t,"state")){if(n=t.state,r.state=!0,!Dr(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(a=Zr(n,!0))throw a;!1===r.copy?e=n:(e=new Hr(n.length),Kr(n.length,n,1,e,1)),n=new Hr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new Hr(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,n[4])}if(void 0===o)if(Cr(t,"seed"))if(o=t.seed,r.seed=!0,zr(o)){if(o>2147483646)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(Jr(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(e=new Hr(5+i))[0]=1,e[1]=2,e[2]=1,e[4]=i,Kr.ndarray(i,o,1,0,e,1,5),n=new Hr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new Hr(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,i),n[0]=o[0]}else o=0|Wr()}else o=0|Wr();return void 0===n&&((e=new Hr(6))[0]=1,e[1]=2,e[2]=1,e[4]=1,e[5]=o,n=new Hr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new Hr(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,1),n[0]=o[0]),Vr(v,"NAME","minstd"),Gr(v,"seed",u),Gr(v,"seedLength",f),Xr(v,"state",s,y),Gr(v,"stateLength",c),Gr(v,"byteLength",l),Vr(v,"toJSON",p),Vr(v,"MIN",1),Vr(v,"MAX",2147483646),Vr(v,"normalized",h),Vr(h,"NAME",v.NAME),Gr(h,"seed",u),Gr(h,"seedLength",f),Xr(h,"state",s,y),Gr(h,"stateLength",c),Gr(h,"byteLength",l),Vr(h,"toJSON",p),Vr(h,"MIN",(v.MIN-1)/2147483646),Vr(h,"MAX",(v.MAX-1)/2147483646),v;function u(){var t=e[4];return Kr(t,o,1,new Hr(t),1)}function f(){return e[4]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return Kr(t,e,1,new Hr(t),1)}function y(t){var i;if(!Dr(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(i=Zr(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?Kr(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new Hr(t.length)),Kr(t.length,t,1,e,1)),n=new Hr(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,1),o=new Hr(e.buffer,e.byteOffset+5*e.BYTES_PER_ELEMENT,e[4])}function p(){var t={type:"PRNG"};return t.name=v.NAME,t.state=Qr(e),t.params=[],t}function v(){var t=0|n[0];return t=16807*t%2147483647|0,n[0]=t,0|t}function h(){return(v()-1)/2147483646}},to=$r({seed:Fr()});d(to,"factory",$r);var eo=to;var no=function(t){return t!=t},ro=no;var oo=function(t,e,n){var r,o;for(o=0;o<8;o++)if(r=t(),ro(r))throw new Error("unexpected error. PRNG returned `NaN`.");for(o=n-1;o>=0;o--)e[o]=t();return e},io=Cn;var ao=function(){return 0|io(1+2147483646*Math.random())},uo=d,fo=b,co=A,lo=P,so=Kt,yo=$.isPrimitive,po=zn,vo=Ir.isPrimitive,ho=Ze,go=Br,Eo=Cn,bo=on,mo=Gn,wo=oo,Ao=ao;function To(t,e){var n;return n=e?"option":"argument",t.length<40?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):32!==t[2]?new RangeError("invalid "+n+". `state` array has an incompatible table length. Expected: 32. Actual: "+t[2]+"."):2!==t[35]?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+2..toString()+". Actual: "+t[35]+"."):t[38]!==t.length-39?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-39)+". Actual: "+t[38]+"."):null}var _o=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!so(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(lo(t,"copy")&&(r.copy=t.copy,!yo(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(lo(t,"state")){if(n=t.state,r.state=!0,!ho(n))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+n+"`.");if(a=To(n,!0))throw a;!1===r.copy?e=n:(e=new bo(n.length),go(n.length,n,1,e,1)),n=new bo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,32),o=new bo(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,n[38])}if(void 0===o)if(lo(t,"seed"))if(o=t.seed,r.seed=!0,vo(o)){if(o>2147483646)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+o+"`.");o|=0}else{if(!(po(o)&&o.length>0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+o+"`.");i=o.length,(e=new bo(39+i))[0]=1,e[1]=3,e[2]=32,e[35]=2,e[37]=o[0],e[38]=i,go.ndarray(i,o,1,0,e,1,39),n=new bo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,32),o=new bo(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,i),n=wo(v,n,32),e[36]=n[0]}else o=0|Ao()}else o=0|Ao();return void 0===n&&((e=new bo(40))[0]=1,e[1]=3,e[2]=32,e[35]=2,e[37]=o,e[38]=1,e[39]=o,n=new bo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,32),o=new bo(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,1),n=wo(v,n,32),e[36]=n[0]),uo(h,"NAME","minstd-shuffle"),fo(h,"seed",u),fo(h,"seedLength",f),co(h,"state",s,y),fo(h,"stateLength",c),fo(h,"byteLength",l),uo(h,"toJSON",p),uo(h,"MIN",1),uo(h,"MAX",2147483646),uo(h,"normalized",d),uo(d,"NAME",h.NAME),fo(d,"seed",u),fo(d,"seedLength",f),co(d,"state",s,y),fo(d,"stateLength",c),fo(d,"byteLength",l),uo(d,"toJSON",p),uo(d,"MIN",(h.MIN-1)/2147483646),uo(d,"MAX",(h.MAX-1)/2147483646),h;function u(){var t=e[38];return go(t,o,1,new bo(t),1)}function f(){return e[38]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return go(t,e,1,new bo(t),1)}function y(t){var i;if(!ho(t))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+t+"`.");if(i=To(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?go(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new bo(t.length)),go(t.length,t,1,e,1)),n=new bo(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,32),o=new bo(e.buffer,e.byteOffset+39*e.BYTES_PER_ELEMENT,e[38])}function p(){var t={type:"PRNG"};return t.name=h.NAME,t.state=mo(e),t.params=[],t}function v(){var t=0|e[37];return t=16807*t%2147483647|0,e[37]=t,0|t}function h(){var t,r;return t=e[36],r=Eo(t/2147483647*32),t=n[r],e[36]=t,n[r]=v(),t}function d(){return(h()-1)/2147483646}},Oo=_o({seed:ao()});d(Oo,"factory",_o);var No=Oo,Mo=En;var jo=function(t){return 0===t&&1/t===Mo},Po=no,Ro=ur,Lo=En;var Io=Cn;var So=function(){return Io(1+4294967294*Math.random())>>>0},Uo=d,xo=b,Bo=A,Yo=P,Fo=Kt,Vo=zn,Go=fn,Xo=$.isPrimitive,Co=Ir.isPrimitive,ko=vn,qo=function(t,e){var n,r,o,i;if(2===(n=arguments.length))return Po(t)||Po(e)?NaN:t===Lo||e===Lo?Lo:t===e&&0===t?jo(t)?t:e:t>e?t:e;for(r=Ro,i=0;i<n;i++){if(Po(o=arguments[i])||o===Lo)return o;(o>r||o===r&&0===o&&jo(o))&&(r=o)}return r},Jo=function(t,e){var n,r;return((n=(65535&(t>>>=0))>>>0)*(r=(65535&(e>>>=0))>>>0)>>>0)+((t>>>16>>>0)*r+n*(e>>>16>>>0)<<16>>>0)>>>0},zo=Br,Do=Gn,Ho=So,Ko=624,Qo=[0,2567483615];function Wo(t,e){var n;return n=e?"option":"argument",t.length<631?new RangeError("invalid "+n+". `state` array has insufficient length."):1!==t[0]?new RangeError("invalid "+n+". `state` array has an incompatible schema version. Expected: 1. Actual: "+t[0]+"."):3!==t[1]?new RangeError("invalid "+n+". `state` array has an incompatible number of sections. Expected: 3. Actual: "+t[1]+"."):t[2]!==Ko?new RangeError("invalid "+n+". `state` array has an incompatible state length. Expected: "+Ko+". Actual: "+t[2]+"."):1!==t[627]?new RangeError("invalid "+n+". `state` array has an incompatible section length. Expected: "+1..toString()+". Actual: "+t[627]+"."):t[629]!==t.length-630?new RangeError("invalid "+n+". `state` array length is incompatible with seed section length. Expected: "+(t.length-630)+". Actual: "+t[629]+"."):null}function Zo(t,e,n){var r;for(t[0]=n>>>0,r=1;r<e;r++)n=((n=t[r-1]>>>0)^n>>>30)>>>0,t[r]=Jo(n,1812433253)+r>>>0;return t}function $o(t,e,n,r){var o,i,a,u;for(i=1,a=0,u=qo(e,r);u>0;u--)o=t[i-1]>>>0,o=Jo(o=(o^o>>>30)>>>0,1664525)>>>0,t[i]=(t[i]>>>0^o)+n[a]+a>>>0,a+=1,(i+=1)>=e&&(t[0]=t[e-1],i=1),a>=r&&(a=0);for(u=e-1;u>0;u--)o=t[i-1]>>>0,o=Jo(o=(o^o>>>30)>>>0,1566083941)>>>0,t[i]=(t[i]>>>0^o)-i>>>0,(i+=1)>=e&&(t[0]=t[e-1],i=1);return t[0]=2147483648,t}function ti(t){var e,n;for(227,n=0;n<227;n++)e=2147483648&t[n]|2147483647&t[n+1],t[n]=t[n+397]^e>>>1^Qo[1&e];for(623;n<623;n++)e=2147483648&t[n]|2147483647&t[n+1],t[n]=t[n-227]^e>>>1^Qo[1&e];return e=2147483648&t[623]|2147483647&t[0],t[623]=t[396]^e>>>1^Qo[1&e],t}var ei=function(t){var e,n,r,o,i,a;if(r={},arguments.length){if(!Fo(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Yo(t,"copy")&&(r.copy=t.copy,!Xo(t.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+t.copy+"`.");if(Yo(t,"state")){if(n=t.state,r.state=!0,!Go(n))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n+"`.");if(a=Wo(n,!0))throw a;!1===r.copy?e=n:(e=new ko(n.length),zo(n.length,n,1,e,1)),n=new ko(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Ko),o=new ko(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,n[629])}if(void 0===o)if(Yo(t,"seed"))if(o=t.seed,r.seed=!0,Co(o)){if(o>4294967295)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else{if(!1===Vo(o)||o.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(1===o.length){if(o=o[0],!Co(o))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");if(o>4294967295)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+o+"`.");o>>>=0}else i=o.length,(e=new ko(630+i))[0]=1,e[1]=3,e[2]=Ko,e[627]=1,e[628]=Ko,e[629]=i,zo.ndarray(i,o,1,0,e,1,630),n=new ko(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Ko),o=new ko(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,i),n=$o(n=Zo(n,Ko,19650218),Ko,o,i)}else o=Ho()>>>0}else o=Ho()>>>0;return void 0===n&&((e=new ko(631))[0]=1,e[1]=3,e[2]=Ko,e[627]=1,e[628]=Ko,e[629]=1,e[630]=o,n=new ko(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Ko),o=new ko(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,1),n=Zo(n,Ko,o)),Uo(v,"NAME","mt19937"),xo(v,"seed",u),xo(v,"seedLength",f),Bo(v,"state",s,y),xo(v,"stateLength",c),xo(v,"byteLength",l),Uo(v,"toJSON",p),Uo(v,"MIN",1),Uo(v,"MAX",4294967295),Uo(v,"normalized",h),Uo(h,"NAME",v.NAME),xo(h,"seed",u),xo(h,"seedLength",f),Bo(h,"state",s,y),xo(h,"stateLength",c),xo(h,"byteLength",l),Uo(h,"toJSON",p),Uo(h,"MIN",0),Uo(h,"MAX",.9999999999999999),v;function u(){var t=e[629];return zo(t,o,1,new ko(t),1)}function f(){return e[629]}function c(){return e.length}function l(){return e.byteLength}function s(){var t=e.length;return zo(t,e,1,new ko(t),1)}function y(t){var i;if(!Go(t))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+t+"`.");if(i=Wo(t,!1))throw i;!1===r.copy?r.state&&t.length===e.length?zo(t.length,t,1,e,1):(e=t,r.state=!0):(t.length!==e.length&&(e=new ko(t.length)),zo(t.length,t,1,e,1)),n=new ko(e.buffer,e.byteOffset+3*e.BYTES_PER_ELEMENT,Ko),o=new ko(e.buffer,e.byteOffset+630*e.BYTES_PER_ELEMENT,e[629])}function p(){var t={type:"PRNG"};return t.name=v.NAME,t.state=Do(e),t.params=[],t}function v(){var t,r;return(r=e[628])>=Ko&&(n=ti(n),r=0),t=n[r],e[628]=r+1,t^=t>>>11,t^=t<<7&2636928640,t^=t<<15&4022730752,(t^=t>>>18)>>>0}function h(){return 11102230246251565e-32*(67108864*(v()>>>5)+(v()>>>6))}},ni=ei({seed:So()});d(ni,"factory",ei);var ri=ni,oi={};oi.minstd=eo,oi["minstd-shuffle"]=No,oi.mt19937=ri;var ii=d,ai=b,ui=A,fi=Kt,ci=$.isPrimitive,li=P,si=Gn,yi=Xn,pi=oi;var vi=function(t){var e,n,r;if(e={name:yi.name,copy:yi.copy},arguments.length){if(!fi(t))throw new TypeError("invalid argument. Must provide an object. Value: `"+t+"`.");if(li(t,"name")&&(e.name=t.name),li(t,"state")){if(e.state=t.state,void 0===e.state)throw new TypeError("invalid option. `state` option cannot be undefined. Option: `"+e.state+"`.")}else if(li(t,"seed")&&(e.seed=t.seed,void 0===e.seed))throw new TypeError("invalid option. `seed` option cannot be undefined. Option: `"+e.seed+"`.");if(li(t,"copy")&&(e.copy=t.copy,!ci(e.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+e.copy+"`.")}if(void 0===(r=pi[e.name]))throw new Error("invalid option. Unrecognized/unsupported PRNG. Option: `"+e.name+"`.");return n=void 0===e.state?void 0===e.seed?r.factory():r.factory({seed:e.seed}):r.factory({state:e.state,copy:e.copy}),ii(s,"NAME","randi"),ai(s,"seed",o),ai(s,"seedLength",i),ui(s,"state",f,c),ai(s,"stateLength",a),ai(s,"byteLength",u),ii(s,"toJSON",l),ii(s,"PRNG",n),ii(s,"MIN",n.MIN),ii(s,"MAX",n.MAX),s;function o(){return n.seed}function i(){return n.seedLength}function a(){return n.stateLength}function u(){return n.byteLength}function f(){return n.state}function c(t){n.state=t}function l(){var t={type:"PRNG"};return t.name=s.NAME+"-"+n.NAME,t.state=si(n.state),t.params=[],t}function s(){return n()}},hi=vi();d(hi,"factory",vi);var di=hi;export{di as default};
//# sourceMappingURL=mod.js.map
