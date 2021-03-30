import { NodePlopAPI } from 'plop'
import { plural, singular } from 'pluralize'

import { CODEGEN_SUCCESS } from '../../constants/prefixes'
import { plopGeneratorConfig } from '../../generators/plop-generator/plop-generator.config'
import { plopGeneratorConstants } from '../../generators/plop-generator/plop-generator.constants'
import { defaultOptions } from './setupPlop.constants'
import { Options } from './setupPlop.types'

export const setupPlop = (plop: NodePlopAPI, options?: Options): void => {
  const finalOptions = { ...defaultOptions, ...options }

  if (finalOptions.shouldDisplayWelcomeMessage) {
    plop.setWelcomeMessage(`${CODEGEN_SUCCESS} What do you want to generate?`)
  }

  if (finalOptions.shouldSetupGeneratorTemplate) {
    plop.setGenerator(plopGeneratorConstants.name, plopGeneratorConfig)
  }

  plop.setHelper('singular', singular)
  plop.setHelper('plural', plural)
}
