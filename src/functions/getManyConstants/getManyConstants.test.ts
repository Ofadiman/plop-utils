import { getManyConstants } from './getManyConstants'
import { getManyConstantsTestUtils as t } from './getManyConstants.test.utils'

describe('getManyConstants function', () => {
  test('get default constants', () => {
    const result = getManyConstants(t.testBase)

    expect(result).toEqual(t.defaultResult)
  })

  test('get constants with custom properties', () => {
    const result = getManyConstants(t.testBase, t.additionalConstants)

    expect(result).toEqual(t.additionalConstantsResult)
  })
})
