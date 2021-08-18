import { plural, singular } from 'pluralize'

import { setupPlop } from './setupPlop'
import { setupPlopTestUtils as t } from './setupPlop.test.utils'

describe('setupPlop function', () => {
  afterEach(() => {
    t.setHelperMock.mockReset()
    t.setWelcomeMessageMock.mockReset()
  })

  afterAll(() => {
    t.setHelperMock.mockRestore()
    t.setWelcomeMessageMock.mockRestore()
  })

  test('should setup plop', () => {
    setupPlop(t.plop)

    expect(t.setHelperMock).toHaveBeenCalledWith('plural', plural)
    expect(t.setHelperMock).toHaveBeenCalledWith('singular', singular)
    expect(t.setWelcomeMessageMock).toHaveBeenCalledTimes(1)
  })
})
