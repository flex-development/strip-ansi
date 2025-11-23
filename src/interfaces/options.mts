/**
 * @file Interfaces - Options
 * @module strip-ansi/interfaces/Options
 */

import type { Flags } from '@flex-development/ansi-regex'
import type { ToString } from '@flex-development/strip-ansi'

/**
 * Options for removing ANSI escape codes.
 */
interface Options {
  /**
   * Record, where each key is a regular expression flag and each truthy value
   * indicates if the flag should be applied to the regular expression matching
   * ANSI escape codes.
   *
   * @see {@linkcode Flags}
   */
  flags?: Flags | null | undefined

  /**
   * Convert a value to a string.
   *
   * @see {@linkcode ToString}
   */
  toString?: ToString | null | undefined
}

export type { Options as default }
