import { merge } from 'lodash'

import { getComponentActions } from './component.actions'
import { componentConfig, defaultComponentOptions } from './component.constants'
import { getComponentPrompts } from './component.prompts'
import { SetupComponentCodegenOptions } from './component.types'

export const setupComponentCodegen = (options: SetupComponentCodegenOptions): void => {
  if (!options.componentOptions) {
    return
  }

  const finalOptions =
    typeof options.componentOptions === 'object'
      ? merge(defaultComponentOptions, options.componentOptions)
      : defaultComponentOptions

  const prompts = getComponentPrompts()
  const actions = getComponentActions({ root: options.root })

  componentConfig.prompts.push(prompts.name)

  if (finalOptions.language === 'typescript') {
    componentConfig.actions.push(actions.typescript.shared.types)

    if (finalOptions.tests) {
      componentConfig.actions.push(actions.typescript.shared.tests)
    }

    if (finalOptions.stories) {
      componentConfig.actions.push(actions.typescript.shared.stories)
    }

    if (finalOptions.css === 'material-ui') {
      componentConfig.actions.push(...Object.values(actions.typescript.materialUI))
    }

    if (finalOptions.css === 'styled-components') {
      componentConfig.actions.push(...Object.values(actions.typescript.styledComponents))
    }
  }

  if (finalOptions.language === 'javascript') {
    if (finalOptions.tests) {
      componentConfig.actions.push(actions.javascript.shared.tests)
    }

    if (finalOptions.stories) {
      componentConfig.actions.push(actions.javascript.shared.stories)
    }

    if (finalOptions.css === 'material-ui') {
      componentConfig.actions.push(...Object.values(actions.javascript.materialUI))
    }

    if (finalOptions.css === 'styled-components') {
      componentConfig.actions.push(...Object.values(actions.javascript.styledComponents))
    }
  }

  options.plop.setGenerator(finalOptions.generatorName, componentConfig)
}
