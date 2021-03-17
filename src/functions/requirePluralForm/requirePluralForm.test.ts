import { requirePluralForm } from './requirePluralForm'
import { errorMessage, testCases } from './requirePluralForm.test.utils'

describe('requirePluralForm function', () => {
  testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requirePluralForm(errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
