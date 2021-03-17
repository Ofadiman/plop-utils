import { requireInput } from './requireInput'
import { errorMessage, testCases } from './requireInput.test.utils'

describe('requireInput function', () => {
  testCases.forEach(({ expectedResult, string }) => {
    test(`should return ${String(expectedResult)} for ${string}`, () => {
      const result = requireInput(errorMessage)(string)

      expect(result).toEqual(expectedResult)
    })
  })
})
