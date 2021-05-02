import { requireHookCase } from './requireHookCase'
import { errorMessage, testCases } from './requireHookCase.test.utils'

describe('requireValidHookName function', () => {
  testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireHookCase(errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
