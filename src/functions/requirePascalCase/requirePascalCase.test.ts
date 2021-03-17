import { requirePascalCase } from './requirePascalCase'
import { errorMessage, testCases } from './requirePascalCase.test.utils'

describe('requirePascalCase function', () => {
  testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requirePascalCase(errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
