<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# randi

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Pseudorandom numbers having integer values.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-base-randi
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var randi = require( '@stdlib/random-base-randi' );
```

#### randi()

Returns a pseudorandom number having an integer value.

```javascript
var v = randi();
// returns <number>
```

#### randi.factory( \[options] )

Returns a pseudorandom number generator (PRNG) for generating random numbers.

```javascript
var rand = randi.factory();
```

The function accepts the following `options`:

-   **name**: name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers. The following generators are supported:

    -   [`mt19937`][@stdlib/random/base/mt19937]: 32-bit Mersenne Twister.
    -   [`minstd`][@stdlib/random/base/minstd]: linear congruential pseudorandom number generator (LCG) based on Park and Miller.
    -   [`minstd-shuffle`][@stdlib/random/base/minstd-shuffle]: linear congruential pseudorandom number generator (LCG) whose output is shuffled.

    Default: [`'mt19937'`][@stdlib/random/base/mt19937].

-   **seed**: pseudorandom number generator seed. Valid seed values vary according to the underlying PRNG.

-   **state**: pseudorandom number generator state. Valid state values vary according to the underlying PRNG. If provided, the function ignores the `seed` option.

-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned generator has exclusive control over its internal state. Default: `true`.

By default, the underlying pseudorandom number generator is [`mt19937`][@stdlib/random/base/mt19937]. To use a different PRNG, set the `name` option.

```javascript
var rand = randi.factory({
    'name': 'minstd-shuffle'
});

var v = rand();
// returns <number>
```

To seed a pseudorandom number generator, set the `seed` option.

```javascript
var rand1 = randi.factory({
    'seed': 12345
});

var r1 = rand1();
// returns <number>

var rand2 = randi.factory({
    'seed': 12345
});

var r2 = rand2();
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To return a generator having a specific initial state, set the generator `state` option.

```javascript
var rand;
var bool;
var r;
var i;

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = randi();
}

// Create a new PRNG initialized to the current state of `randi`:
rand = randi.factory({
    'state': randi.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( rand() === randi() );
// returns true
```

#### randi.NAME

The generator name.

```javascript
var str = randi.NAME;
// returns 'randi'
```

#### randi.PRNG

The underlying pseudorandom number generator.

```javascript
var prng = randi.PRNG;
// returns <Function>
```

#### randi.MIN

Minimum value lower bound (specific to underlying PRNG).

```javascript
var min = randi.MIN;
// returns <number>
```

#### randi.MAX

Maximum value upper bound (specific to underlying PRNG).

```javascript
var max = randi.MAX;
// returns <number>
```

#### randi.seed

The value used to seed `randi()`.

```javascript
var rand;
var v;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    v = randi();
}

// Generate the same pseudorandom values...
rand = randi.factory({
    'seed': randi.seed
});
for ( i = 0; i < 100; i++ ) {
    v = rand();
}
```

#### randi.seedLength

Length of generator seed.

```javascript
var len = randi.seedLength;
// returns <number>
```

#### randi.state

Writable property for getting and setting the generator state.

```javascript
var r = randi();
// returns <number>

r = randi();
// returns <number>

// ...

// Get a copy of the current state:
var state = randi.state;

r = randi();
// returns <number>

r = randi();
// returns <number>

// Reset the state:
randi.state = state;

// Replay the last two pseudorandom numbers:
r = randi();
// returns <number>

r = randi();
// returns <number>

// ...
```

#### randi.stateLength

Length of generator state.

```javascript
var len = randi.stateLength;
// returns <number>
```

#### randi.byteLength

Size (in bytes) of generator state.

```javascript
var sz = randi.byteLength;
// returns <number>
```

#### randi.toJSON()

Serializes the pseudorandom number generator as a JSON object.

```javascript
var o = randi.toJSON();
// returns { 'type': 'PRNG', 'name': '...', 'state': {...}, 'params': [] }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   **Warning**: the default underlying source of pseudorandom numbers may **change** in the future. If exact reproducibility is required, either explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
-   If PRNG state is "shared" (meaning a state array was provided during PRNG creation and **not** copied) and one sets the generator state to a state array having a different length, the PRNG does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize PRNG output according to the new shared state array, the state array for **each** relevant PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the generator state to a state array of the same length, the PRNG state is updated (along with the state of all other PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randi = require( '@stdlib/random-base-randi' );

var seed;
var rand;
var i;

// Generate pseudorandom numbers...
for ( i = 0; i < 100; i++ ) {
    console.log( randi() );
}

// Create a new pseudorandom number generator...
seed = 1234;
rand = randi.factory({
    'seed': seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}

// Create another pseudorandom number generator using a previous seed...
rand = randi.factory({
    'seed': randi.seed
});
for ( i = 0; i < 100; i++ ) {
    console.log( rand() );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-base/minstd`][@stdlib/random/base/minstd]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="package-name">[`@stdlib/random-base/minstd-shuffle`][@stdlib/random/base/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="package-name">[`@stdlib/random-base/mt19937`][@stdlib/random/base/mt19937]</span><span class="delimiter">: </span><span class="description">A 32-bit Mersenne Twister pseudorandom number generator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base-randi.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base-randi

[test-image]: https://github.com/stdlib-js/random-base-randi/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/random-base-randi/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base-randi/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base-randi?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base-randi.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base-randi/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base-randi/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base-randi/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base-randi/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base-randi/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base-randi/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base-randi/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base-randi/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base-randi/main/LICENSE

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random-base-mt19937

[@stdlib/random/base/minstd]: https://github.com/stdlib-js/random-base-minstd

[@stdlib/random/base/minstd-shuffle]: https://github.com/stdlib-js/random-base-minstd-shuffle

<!-- <related-links> -->

[@stdlib/random/base/minstd]: https://github.com/stdlib-js/random-base-minstd

[@stdlib/random/base/minstd-shuffle]: https://github.com/stdlib-js/random-base-minstd-shuffle

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random-base-mt19937

<!-- </related-links> -->

</section>

<!-- /.links -->
