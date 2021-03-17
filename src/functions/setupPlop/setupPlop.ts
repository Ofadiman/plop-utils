import chalk from 'chalk'
import { NodePlopAPI } from 'plop'
import { plural, singular } from 'pluralize'

import { plopGeneratorConfig } from '../../generators/plop-generator/plop-generator.config'
import { plopGeneratorConstants } from '../../generators/plop-generator/plop-generator.constants'
import { defaultOptions } from './setupPlop.constants'
import { Options } from './setupPlop.types'

export const setupPlop = (plop: NodePlopAPI, options?: Options): void => {
  const finalOptions = { ...defaultOptions, ...options }

  if (finalOptions.shouldDisplayWelcomeMessage) {
    plop.setWelcomeMessage(`${chalk.green('[Codegen]')} What do you want to generate?`)
  }

  if (finalOptions.shouldSetupGeneratorTemplate) {
    plop.setGenerator(plopGeneratorConstants.generator.name, plopGeneratorConfig)
  }

  plop.setHelper('singular', singular)
  plop.setHelper('plural', plural)
}
