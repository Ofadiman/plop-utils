import { NodePlopAPI } from 'plop'

import { getReactComponentTypeScriptStyledComponentsActions } from './react-component-typescript-styled-components.actions'
import { config, defaultOptions } from './react-component-typescript-styled-components.constants'
import { getReactComponentTypeScriptStyledComponentsPrompts } from './react-component-typescript-styled-components.prompts'
import { SetupReactComponentTypeScriptStyledComponentsOptions } from './react-component-typescript-styled-components.types'

export const setupReactComponentTypeScriptStyledComponents = (
  plop: NodePlopAPI,
  options?: SetupReactComponentTypeScriptStyledComponentsOptions | boolean
): void => {
  const { componentsDirectory, renderFunctionLocation, renderFunctionName, hasTests, hasStories } = {
    ...defaultOptions,
    ...(typeof options === 'object' && options)
  }

  const prompts = getReactComponentTypeScriptStyledComponentsPrompts()
  const actions = getReactComponentTypeScriptStyledComponentsActions({
    componentsDirectory,
    renderFunctionLocation,
    renderFunctionName
  })

  config.prompts.push(prompts.name)
  config.actions.push(actions.component)
  config.actions.push(actions.styles)
  config.actions.push(actions.types)

  if (hasTests) {
    config.actions.push(actions.test)
  }

  if (hasStories) {
    config.actions.push(actions.stories)
  }

  plop.setGenerator('react-component-typescript-styled-components', config)
}
