/**
 * @file Type Tests - Options
 * @module strip-ansi/interfaces/tests/unit-d/Options
 */

import type TestSubject from '#interfaces/options'
import type { Flags } from '@flex-development/ansi-regex'
import type { ToString } from '@flex-development/strip-ansi'
import type { Nilable, OptionalKeys } from '@flex-development/tutils'

describe('unit-d:interfaces/Options', () => {
  it('should have all optional keys', () => {
    expectTypeOf<OptionalKeys<TestSubject>>().toEqualTypeOf<keyof TestSubject>()
  })

  it('should match [flags?: Flags | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('flags')
      .toEqualTypeOf<Nilable<Flags>>()
  })

  it('should match [toString?: ToString | null | undefined]', () => {
    expectTypeOf<TestSubject>()
      .toHaveProperty('toString')
      .toEqualTypeOf<Nilable<ToString>>()
  })
})
