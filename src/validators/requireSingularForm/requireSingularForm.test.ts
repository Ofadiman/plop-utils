import { requireSingularForm } from './requireSingularForm'
import { requireSingularFormTestUtils as t } from './requireSingularForm.test.utils'

describe('requireSingularForm function', () => {
  t.testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireSingularForm(t.errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
