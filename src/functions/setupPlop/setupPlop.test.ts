import { plural, singular } from 'pluralize'

import { plopGeneratorConfig } from '../../generators/plop-generator/plop-generator.config'
import { plopGeneratorConstants } from '../../generators/plop-generator/plop-generator.constants'
import { setupPlop } from './setupPlop'
import { plop, setGeneratorMock, setHelperMock, setWelcomeMessageMock } from './setupPlop.test.utils'

describe('setupPlop function', () => {
  afterEach(() => {
    setGeneratorMock.mockReset()
    setHelperMock.mockReset()
    setWelcomeMessageMock.mockReset()
  })

  test('default plop setup', () => {
    setupPlop(plop)

    expect(setWelcomeMessageMock).toHaveBeenCalledTimes(1)

    expect(setGeneratorMock).toHaveBeenCalledTimes(1)
    expect(setGeneratorMock).toHaveBeenCalledWith(plopGeneratorConstants.generator.name, plopGeneratorConfig)

    expect(setHelperMock).toHaveBeenCalledTimes(2)
    expect(setHelperMock).toHaveBeenCalledWith('singular', singular)
    expect(setHelperMock).toHaveBeenCalledWith('plural', plural)
  })

  test('plop setup with custom options', () => {
    setupPlop(plop, { shouldDisplayWelcomeMessage: false, shouldSetupGeneratorTemplate: false })

    expect(setHelperMock).toHaveBeenCalledTimes(2)
    expect(setHelperMock).toHaveBeenCalledWith('singular', singular)
    expect(setHelperMock).toHaveBeenCalledWith('plural', plural)
  })
})
