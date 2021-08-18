import { requirePluralForm } from './requirePluralForm'
import { requirePluralFormTestUtils as t } from './requirePluralForm.test.utils'

describe('requirePluralForm function', () => {
  t.testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requirePluralForm(t.errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
