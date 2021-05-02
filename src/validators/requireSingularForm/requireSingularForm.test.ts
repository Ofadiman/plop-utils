import { requireSingularForm } from './requireSingularForm'
import { errorMessage, testCases } from './requireSingularForm.test.utils'

describe('requireSingularForm function', () => {
  testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireSingularForm(errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
