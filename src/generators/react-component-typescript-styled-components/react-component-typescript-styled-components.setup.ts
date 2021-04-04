import { NodePlopAPI } from 'plop'

import { getReactComponentTypeScriptStyledComponentsActions } from './react-component-typescript-styled-components.actions'
import {
  defaultOptions,
  reactComponentTypescriptStyledComponentsConfig
} from './react-component-typescript-styled-components.constants'
import { getReactComponentTypeScriptStyledComponentsPrompts } from './react-component-typescript-styled-components.prompts'
import { SetupReactComponentTypeScriptStyledComponentsCodegenOptions } from './react-component-typescript-styled-components.types'

export const setupReactComponentTypeScriptStyledComponentsCodegen = (
  plop: NodePlopAPI,
  options?: SetupReactComponentTypeScriptStyledComponentsCodegenOptions | boolean
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

  reactComponentTypescriptStyledComponentsConfig.prompts.push(prompts.name)
  reactComponentTypescriptStyledComponentsConfig.actions.push(actions.component, actions.styles, actions.types)

  if (hasTests) {
    reactComponentTypescriptStyledComponentsConfig.actions.push(actions.test)
  }

  if (hasStories) {
    reactComponentTypescriptStyledComponentsConfig.actions.push(actions.stories)
  }

  plop.setGenerator('react-component-typescript-styled-components', reactComponentTypescriptStyledComponentsConfig)
}
