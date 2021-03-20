import { getOneConstant } from './getOneConstant'
import { testCases } from './getOneConstant.test.utils'

describe('getOneConstant function', () => {
  testCases.forEach(({ expectedResult, helpers, variable, title }) => {
    test(title, () => {
      const result = getOneConstant(variable, ...helpers)

      expect(result).toEqual(expectedResult)
    })
  })
})
