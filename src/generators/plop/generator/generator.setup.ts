import { merge } from 'lodash'

import { getGeneratorActions } from './generator.actions'
import { customGeneratorConfig, defaultOptions } from './generator.constants'
import { getGeneratorPrompts } from './generator.prompts'
import { SetupGeneratorOptions } from './generator.types'

export const setupGeneratorCodegen = (options: SetupGeneratorOptions): void => {
  if (!options.generatorOptions) {
    return
  }

  const finalOptions =
    typeof options.generatorOptions === 'object' ? merge(defaultOptions, options.generatorOptions) : defaultOptions

  const prompts = getGeneratorPrompts()
  const actions = getGeneratorActions()

  customGeneratorConfig.prompts.push(prompts.name, prompts.description)
  customGeneratorConfig.actions.push(...Object.values(actions))

  options.plop.setGenerator(finalOptions.generatorName, customGeneratorConfig)
}
