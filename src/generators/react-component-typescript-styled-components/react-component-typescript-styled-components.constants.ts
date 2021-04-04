import { ActionType, PromptQuestion } from 'node-plop'

import { getManyConstants } from '../../functions/getManyConstants/getManyConstants'
import { SetupReactComponentTypeScriptStyledComponentsCodegenOptions } from './react-component-typescript-styled-components.types'

const base = {
  name: 'name',
  type: 'type'
} as const

const handlebars = getManyConstants(base)

export const reactComponentTypescriptStyledComponentsConstants = {
  base,
  handlebars
}

export const defaultOptions: Required<SetupReactComponentTypeScriptStyledComponentsCodegenOptions> = {
  componentsDirectory: 'src/components',
  hasStories: true,
  hasTests: true,
  renderFunctionLocation: '../../functions/renderComponent/renderComponent',
  renderFunctionName: 'renderComponent'
}

export const reactComponentTypescriptStyledComponentsConfig = {
  actions: [] as ActionType[],
  description: 'Generate a React component with TypeScript and styled components.',
  prompts: [] as PromptQuestion[]
}
