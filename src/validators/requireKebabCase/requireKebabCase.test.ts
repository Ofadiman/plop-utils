import { requireKebabCase } from './requireKebabCase'
import { errorMessage, testCases } from './requireKebabCase.test.utils'

describe('requireKebabCase function', () => {
  testCases.forEach(({ string, expectedResult }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireKebabCase(errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
