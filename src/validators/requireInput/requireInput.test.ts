import { requireInput } from './requireInput'
import { requireInputTestUtils as t } from './requireInput.test.utils'

describe('requireInput function', () => {
  t.testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireInput(t.errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
