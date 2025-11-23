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

Remove [ANSI escape codes][ansi-escape-code]

## Contents

- [What is this?](#what-is-this)
- [Install](#install)
- [Use](#use)
- [API](#api)
  - [`stripAnsi([flags][, toString])`](#stripansiflags-tostring)
- [Types](#types)
  - [`Options`](#options)
  - [`ToString<[T]>`](#tostringt)
- [Contribute](#contribute)

## What is this?

This is a tiny, but useful package for removing [ANSI escape codes][ansi-escape-code].

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

**TODO**: use

## API

This package exports the following identifiers:

- [`stripAnsi`](#stripansiflags-tostring)

The default export is [`stripAnsi`](#stripansiflags-tostring).

### `stripAnsi([flags][, toString])`

**TODO**: `stripAnsi([flags][, toString])`

## Types

This package is fully typed with [TypeScript][].

### `Options`

**TODO**: `Options`

### `ToString<[T]>`

**TODO**: `ToString<[T]>`

## Contribute

See [`CONTRIBUTING.md`](CONTRIBUTING.md).

This project has a [code of conduct](./CODE_OF_CONDUCT.md). By interacting with this repository, organization, or
community you agree to abide by its terms.

[ansi-escape-code]: https://en.wikipedia.org/wiki/ANSI_escape_code

[bun]: https://bun.sh

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[yarn]: https://yarnpkg.com
