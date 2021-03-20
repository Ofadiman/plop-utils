import { getManyConstants } from './getManyConstants'
import { additionalConstants, additionalConstantsResult, defaultResult, testBase } from './getManyConstants.test.utils'

describe('getManyConstants function', () => {
  test('get default constants', () => {
    const result = getManyConstants(testBase)

    expect(result).toEqual(defaultResult)
  })

  test('get constants with custom properties', () => {
    const result = getManyConstants(testBase, additionalConstants)

    expect(result).toEqual(additionalConstantsResult)
  })
})
