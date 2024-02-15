// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-to-json@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd-shuffle@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-mt19937@v0.1.0-esm/index.mjs";var l="mt19937",c=!0,f={};function h(a){var m,p,h;if(m={name:l,copy:c},arguments.length){if(!n(a))throw new TypeError(d("invalid argument. Must provide an object. Value: `%s`.",a));if(i(a,"name")&&(m.name=a.name),i(a,"state")){if(m.state=a.state,void 0===m.state)throw new TypeError(d("invalid option. `%s` option cannot be undefined. Option: `%s`.","state",m.state))}else if(i(a,"seed")&&(m.seed=a.seed,void 0===m.seed))throw new TypeError(d("invalid option. `%s` option cannot be undefined. Option: `%s`.","seed",m.seed));if(i(a,"copy")&&(m.copy=a.copy,!r(m.copy)))throw new TypeError(d("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",m.copy))}if(void 0===(h=f[m.name]))throw new Error(d("invalid option. Unrecognized/unsupported PRNG. Option: `%s`.",m.name));return p=void 0===m.state?void 0===m.seed?h.factory():h.factory({seed:m.seed}):h.factory({state:m.state,copy:m.copy}),e(x,"NAME","randi"),t(x,"seed",v),t(x,"seedLength",j),s(x,"state",y,g),t(x,"stateLength",u),t(x,"byteLength",b),e(x,"toJSON",w),e(x,"PRNG",p),e(x,"MIN",p.MIN),e(x,"MAX",p.MAX),x;function v(){return p.seed}function j(){return p.seedLength}function u(){return p.stateLength}function b(){return p.byteLength}function y(){return p.state}function g(e){p.state=e}function w(){var e={type:"PRNG"};return e.name=x.NAME+"-"+p.NAME,e.state=o(p.state),e.params=[],e}function x(){return p()}}f.minstd=a,f["minstd-shuffle"]=m,f.mt19937=p;var v=h();e(v,"factory",h);export{v as default,h as factory};
//# sourceMappingURL=index.mjs.map
