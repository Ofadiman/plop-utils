import { requireHookCase } from './requireHookCase'
import { requireHookCaseTestUtils as t } from './requireHookCase.test.utils'

describe('requireValidHookName function', () => {
  t.testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireHookCase(t.errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
