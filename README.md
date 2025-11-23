# strip-ansi

[![ci](https://github.com/flex-development/strip-ansi/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/flex-development/strip-ansi/actions/workflows/ci.yml)
[![github release](https://img.shields.io/github/v/release/flex-development/strip-ansi.svg?include_prereleases\&sort=semver)](https://github.com/flex-development/strip-ansi/releases/latest)
[![npm](https://img.shields.io/npm/v/@flex-development/strip-ansi.svg)](https://npmjs.com/package/@flex-development/strip-ansi)
[![npm downloads](https://img.shields.io/npm/dm/@flex-development/strip-ansi.svg)](https://www.npmcharts.com/compare/@flex-development/strip-ansi?interval=30)
[![install size](https://packagephobia.now.sh/badge?p=@flex-development/strip-ansi)](https://packagephobia.now.sh/result?p=@flex-development/strip-ansi)
[![codecov](https://codecov.io/gh/flex-development/strip-ansi/graph/badge.svg?token=xXqYKx921U)](https://codecov.io/gh/flex-development/strip-ansi)
[![module type: esm](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![license](https://img.shields.io/github/license/flex-development/strip-ansi.svg)](LICENSE.md)
[![conventional commits](https://img.shields.io/badge/-conventional%20commits-fe5196?logo=conventional-commits\&logoColor=ffffff)](https://conventionalcommits.org)
[![typescript](https://img.shields.io/badge/-typescript-3178c6?logo=typescript\&logoColor=ffffff)](https://typescriptlang.org)
[![vitest](https://img.shields.io/badge/-vitest-6e9f18?style=flat\&logo=vitest\&logoColor=ffffff)](https://vitest.dev)
[![yarn](https://img.shields.io/badge/-yarn-2c8ebb?style=flat\&logo=yarn\&logoColor=ffffff)](https://yarnpkg.com)

Remove [ANSI escape codes][aec]

## Contents

- [What is this?](#what-is-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`stripAnsi(value[, options])`](#stripansivalue-options)
- [Types](#types)
  - [`Options`](#options)
  - [`ToString<[T]>`](#tostringt)
- [Contribute](#contribute)

## What is this?

This is a tiny, but useful package for removing [ANSI escape codes][aec] from a string or stringified value.

## Install

This package is [ESM only][esm].

In Node.js with [yarn][]:

```sh
yarn add @flex-development/strip-ansi
```

<blockquote>
  <small>
    See <a href='https://yarnpkg.com/protocol/git'>Git - Protocols | Yarn</a>
    &nbsp;for details regarding installing from Git.
  </small>
</blockquote>

In Deno with [`esm.sh`][esmsh]:

```ts
import { stripAnsi } from 'https://esm.sh/@flex-development/strip-ansi'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import { stripAnsi } from 'https://esm.sh/@flex-development/strip-ansi'
</script>
```

With [bun][]:

```sh
bun add @flex-development/strip-ansi
```

<blockquote>
  <small>
    See <a href='https://bun.com/docs/cli/add'><code>bun add</code></a> for more details.
  </small>
</blockquote>

## Use

[`example.mjs`](./example.mjs):

```js
import { ansiRegex } from '@flex-development/ansi-regex'
import c from '@flex-development/colors'
import { stripAnsi } from '@flex-development/strip-ansi'

const hello = c.bgBlue(c.bold('hello world 🌎'))
const hi = stripAnsi(hello, { flags: { u: false } })

console.log(`${JSON.stringify(hello)}:`, ansiRegex().test(hello))
console.log(`${JSON.stringify(hi)}:`, ansiRegex().test(hi))
```

...yields

```sh
"\u001b[44m\u001b[1mhello world 🌎\u001b[22m\u001b[49m": true
"hello world 🌎": false
```

## API

This package exports the following identifiers:

- [`stripAnsi`](#stripansivalue-options)

The default export is [`stripAnsi`](#stripansivalue-options).

### `stripAnsi(value[, options])`

Remove ANSI escape codes from `value`.

#### Parameters

- `value` (`unknown`)
  — the string or value to remove escape codes from.\
  non-string values will be converted to strings (i.e. `options.toString(value)`)
- `options` ([`Options`](#options) | `null` | `undefined`, optional)
  — options for removing escape codes
  - **default**: `{ flags: { g: true, u: true }, toString: String }`

#### Returns

(`string`) The stringified `value` with ANSI escape codes removed

## Types

This package is fully typed with [TypeScript][].

### `Options`

Options for removing ANSI escape codes (`interface`).

#### Properties

- `flags?` ([`Flags`][flags] | `null` | `undefined`, optional)
  — record, where each key is a regular expression flag and each truthy value indicates if the flag should be applied to
  the regular expression matching ansi escape codes
- `toString?` ([`ToString`](#tostringt) | `null` | `undefined`, optional)
  — convert a value to a string

### `ToString<[T]>`

Convert `value` to a string (`type`).

```ts
type ToString<T = any> = (this: void, value: T) => string
```

#### Type Parameters

- `T` (`any`, optional)
  — the thing to stringify

#### Parameters

- `value` (`T`)
  — the thing to stringify

#### Returns

(`string`) The stringified `value`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[aec]: https://en.wikipedia.org/wiki/ANSI_escape_code

[bun]: https://bun.sh

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[flags]: https://github.com/flex-development/ansi-regex#flags

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
