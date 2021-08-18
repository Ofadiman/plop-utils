import { getOneConstant } from './getOneConstant'
import { getOneConstantTestUtils as t } from './getOneConstant.test.utils'

describe('getOneConstant function', () => {
  t.testCases.forEach(({ expectedResult, helpers, variable, title }) => {
    test(title, () => {
      const result = getOneConstant(variable, ...helpers)

      expect(result).toEqual(expectedResult)
    })
  })
})
