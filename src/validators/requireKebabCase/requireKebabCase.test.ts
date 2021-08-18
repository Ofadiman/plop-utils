import { requireKebabCase } from './requireKebabCase'
import { requireKebabCaseTestUtils as t } from './requireKebabCase.test.utils'

describe('requireKebabCase function', () => {
  t.testCases.forEach(({ string, expectedResult }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireKebabCase(t.errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
