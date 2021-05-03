import { merge } from 'lodash'

import { getContainerActions } from './container.actions'
import { containerConfig, defaultOptions } from './container.constants'
import { getContainerPrompts } from './container.prompts'
import { SetupContainerCodegenOptions } from './container.types'

export const setupContainerCodegen = (options: SetupContainerCodegenOptions): void => {
  if (!options.containerOptions) {
    return
  }

  const prompts = getContainerPrompts()
  const actions = getContainerActions({ root: options.root })

  const finalOptions =
    typeof options.containerOptions === 'object' ? merge(defaultOptions, options.containerOptions) : defaultOptions

  containerConfig.prompts.push(prompts.name)

  if (finalOptions.language === 'typescript') {
    containerConfig.actions.push(actions.typescript.main, actions.typescript.types)

    if (finalOptions.tests) {
      containerConfig.actions.push(actions.typescript.tests)
    }
  }
  if (finalOptions.language === 'javascript') {
    containerConfig.actions.push(actions.javascript.main)

    if (finalOptions.tests) {
      containerConfig.actions.push(actions.javascript.tests)
    }
  }

  options.plop.setGenerator(finalOptions.generatorName, containerConfig)
}
