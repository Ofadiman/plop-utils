import { plural, singular } from 'pluralize'

import { setupPlop } from './setupPlop'
import {
  plop,
  setGeneratorMock,
  setHelperMock,
  setupCustomGeneratorSpy,
  setWelcomeMessageMock
} from './setupPlop.test.utils'

describe('setupPlop function', () => {
  afterEach(() => {
    setGeneratorMock.mockReset()
    setHelperMock.mockReset()
    setWelcomeMessageMock.mockReset()
    setupCustomGeneratorSpy.mockReset()
  })

  afterAll(() => {
    setGeneratorMock.mockRestore()
    setHelperMock.mockRestore()
    setWelcomeMessageMock.mockRestore()
    setupCustomGeneratorSpy.mockRestore()
  })

  test('default plop setup', () => {
    setupPlop(plop)

    expect(setHelperMock).toHaveBeenCalledWith('plural', plural)
    expect(setHelperMock).toHaveBeenCalledWith('singular', singular)
    expect(setWelcomeMessageMock).toHaveBeenCalledTimes(1)
  })

  test('plop setup with custom options', () => {
    setupPlop(plop, { customGenerator: true })

    expect(setHelperMock).toHaveBeenCalledWith('plural', plural)
    expect(setHelperMock).toHaveBeenCalledWith('singular', singular)
    expect(setupCustomGeneratorSpy).toHaveBeenCalledTimes(1)
  })
})
