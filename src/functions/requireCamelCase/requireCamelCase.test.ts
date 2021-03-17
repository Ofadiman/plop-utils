import { requireCamelCase } from './requireCamelCase'
import { errorMessage, testCases } from './requireCamelCase.test.utils'

describe('requireCamelCase function', () => {
  testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireCamelCase(errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
