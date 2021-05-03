import { merge } from 'lodash'
import { NodePlopAPI } from 'plop'
import { plural, singular } from 'pluralize'

import { CODEGEN_SUCCESS } from '../../constants/prefixes'
import { setupCustomGeneratorCodegen } from '../../generators/custom-generator/custom-generator.setup'
import { setupComponentCodegen } from '../../generators/react/component/component.setup'
import { defaultOptions } from './setupPlop.constants'
import { SetupPlopOptions } from './setupPlop.types'

export const setupPlop = (plop: NodePlopAPI, options: SetupPlopOptions = {}): void => {
  plop.setWelcomeMessage(`${CODEGEN_SUCCESS} What do you want to generate?`)
  plop.setHelper('singular', singular)
  plop.setHelper('plural', plural)

  const finalOptions = merge(defaultOptions, options)

  setupCustomGeneratorCodegen(plop, finalOptions.plop.generator)

  setupComponentCodegen({ componentOptions: finalOptions.react.component, plop, root: finalOptions.react.root })
}
