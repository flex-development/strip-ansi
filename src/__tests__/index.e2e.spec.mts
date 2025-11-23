/**
 * @file E2E Tests - api
 * @module strip-ansi/tests/e2e/api
 */

import * as testSubject from '@flex-development/strip-ansi'
import { alphabetize, identity } from '@flex-development/tutils'

describe('e2e:strip-ansi', () => {
  it('should expose public api', () => {
    expect(alphabetize(Object.keys(testSubject), identity)).toMatchSnapshot()
  })
})
