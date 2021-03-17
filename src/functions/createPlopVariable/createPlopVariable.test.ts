import { createPlopVariable } from './createPlopVariable'
import { testCases } from './createPlopVariable.test.utils'

describe('createPlopVariable function', () => {
  testCases.forEach(({ expectedResult, helpers, variable, title }) => {
    test(title, () => {
      const result = createPlopVariable(variable, ...helpers)

      expect(result).toEqual(expectedResult)
    })
  })
})
