// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";var f="mt19937",c=!0,l={};function h(m){var a,p,h;if(a={name:f,copy:c},arguments.length){if(!r(m))throw new TypeError(d("0ox47,Gz",m));if(o(m,"name")&&(a.name=m.name),o(m,"state")){if(a.state=m.state,void 0===a.state)throw new TypeError(d("0ox7Y,NT","state",a.state))}else if(o(m,"seed")&&(a.seed=m.seed,void 0===a.seed))throw new TypeError(d("0ox7Y,NT","seed",a.seed));if(o(m,"copy")&&(a.copy=m.copy,!n(a.copy)))throw new TypeError(d("0ox2o,GE","copy",a.copy))}if(void 0===(h=l[a.name]))throw new Error(d("0ox7Z,NU",a.name));return p=void 0===a.state?void 0===a.seed?h.factory():h.factory({seed:a.seed}):h.factory({state:a.state,copy:a.copy}),e(w,"NAME","randi"),t(w,"seed",j),t(w,"seedLength",v),s(w,"state",b,g),t(w,"stateLength",u),t(w,"byteLength",y),e(w,"toJSON",x),e(w,"PRNG",p),e(w,"MIN",p.MIN),e(w,"MAX",p.MAX),w;function j(){return p.seed}function v(){return p.seedLength}function u(){return p.stateLength}function y(){return p.byteLength}function b(){return p.state}function g(e){p.state=e}function x(){var e={type:"PRNG"};return e.name=w.NAME+"-"+p.NAME,e.state=i(p.state),e.params=[],e}function w(){return p()}}l.minstd=m,l["minstd-shuffle"]=a,l.mt19937=p;var j=h();e(j,"factory",h);export{j as default,h as factory};
//# sourceMappingURL=index.mjs.map
