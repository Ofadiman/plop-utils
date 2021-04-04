import { NodePlopAPI } from 'plop'

import { getReactComponentTypeScriptAtomicDesignStyledComponentsActions } from './react-component-typescript-atomic-design-styled-components.actions'
import {
  defaultOptions,
  reactComponentTypescriptAtomicDesignStyledComponentsConfig
} from './react-component-typescript-atomic-design-styled-components.constants'
import { getReactComponentTypeScriptAtomicDesignStyledComponentsPrompts } from './react-component-typescript-atomic-design-styled-components.prompts'
import { SetupReactComponentTypeScriptAtomicDesignStyledComponentsCodegenOptions } from './react-component-typescript-atomic-design-styled-components.types'

export const setupReactComponentTypeScriptAtomicDesignStyledComponentsCodegen = (
  plop: NodePlopAPI,
  options?: SetupReactComponentTypeScriptAtomicDesignStyledComponentsCodegenOptions | boolean
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

  reactComponentTypescriptAtomicDesignStyledComponentsConfig.prompts.push(prompts.name, prompts.type)
  reactComponentTypescriptAtomicDesignStyledComponentsConfig.actions.push(
    actions.component,
    actions.styles,
    actions.types
  )

  if (hasTests) {
    reactComponentTypescriptAtomicDesignStyledComponentsConfig.actions.push(actions.test)
  }

  if (hasStories) {
    reactComponentTypescriptAtomicDesignStyledComponentsConfig.actions.push(actions.stories)
  }

  plop.setGenerator(
    'react-component-typescript-atomic-design-styled-components',
    reactComponentTypescriptAtomicDesignStyledComponentsConfig
  )
}
