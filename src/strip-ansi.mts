/**
 * @file stripAnsi
 * @module strip-ansi/stripAnsi
 */

import { ansiRegex } from '@flex-development/ansi-regex'
import type { Options } from '@flex-development/strip-ansi'

/**
 * Remove ANSI escape codes from `value`.
 *
 * @see {@linkcode Options}
 *
 * @this {void}
 *
 * @param {unknown} value
 *  The string or value to remove escape codes from.\
 *  Non-string values will be converted to strings using `options.toString`
 * @param {Options | null | undefined} [options]
 *  Options for removing escape codes
 * @return {string}
 *  The stringified `value` with ANSI escape codes removed
 */
function stripAnsi(
  this: void,
  value: unknown,
  options?: Options | null | undefined
): string {
  const { flags } = { ...options }

  /**
   * The string to remove escape codes from.
   *
   * @var {string} string
   */
  let string: string = value as string

  // convert non-string values to strings.
  if (typeof value !== 'string') {
    // nullish-coalescing syntax is used to prevent `Object.prototype.toString`
    // from being accidentally called.
    // using the `toString` from the options object spread above
    // will lead to '[object Undefined]' being printed instead of
    // the actual stringified `value` with ansi escape codes removed.
    string = (options?.toString ?? String)(value)
  }

  return string.replace(ansiRegex(flags), '')
}

export default stripAnsi
