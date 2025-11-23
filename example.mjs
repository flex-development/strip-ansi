/**
 * @file example
 * @module example
 */

import { ansiRegex } from '@flex-development/ansi-regex'
import c from '@flex-development/colors'
import { stripAnsi } from '@flex-development/strip-ansi'

const hello = c.bgBlue(c.bold('hello world 🌎'))
const hi = stripAnsi(hello, { flags: { u: false } })

console.log(`${JSON.stringify(hello)}:`, ansiRegex().test(hello))
console.log(`${JSON.stringify(hi)}:`, ansiRegex().test(hi))
