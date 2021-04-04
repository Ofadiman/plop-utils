import { NodePlopAPI } from 'plop'

import { config } from '../react-component-typescript-styled-components/react-component-typescript-styled-components.constants'
import { getReactComponentTypeScriptAtomicDesignStyledComponentsActions } from './react-component-typescript-atomic-design-styled-components.actions'
import { defaultOptions } from './react-component-typescript-atomic-design-styled-components.constants'
import { getReactComponentTypeScriptAtomicDesignStyledComponentsPrompts } from './react-component-typescript-atomic-design-styled-components.prompts'
import { SetupReactComponentTypeScriptAtomicDesignStyledComponentsOptions } from './react-component-typescript-atomic-design-styled-components.types'

export const setupReactComponentTypeScriptAtomicDesignStyledComponents = (
  plop: NodePlopAPI,
  options?: SetupReactComponentTypeScriptAtomicDesignStyledComponentsOptions | boolean
): void => {
  const { componentsDirectory, renderFunctionLocation, renderFunctionName, hasTests, hasStories } = {
    ...defaultOptions,
    ...(typeof options === 'object' && options)
  }

  const prompts = getReactComponentTypeScriptAtomicDesignStyledComponentsPrompts({ componentsDirectory })
  const actions = getReactComponentTypeScriptAtomicDesignStyledComponentsActions({
    componentsDirectory,
    renderFunctionLocation,
    renderFunctionName
  })

  config.prompts.push(prompts.name, prompts.type)
  config.actions.push(actions.component, actions.styles, actions.types)

  if (hasTests) {
    config.actions.push(actions.test)
  }

  if (hasStories) {
    config.actions.push(actions.stories)
  }

  plop.setGenerator('react-component-typescript-atomic-design-styled-components', config)
}
