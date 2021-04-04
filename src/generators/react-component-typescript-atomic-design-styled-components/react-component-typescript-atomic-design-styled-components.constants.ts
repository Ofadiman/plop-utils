import { ActionType, PromptQuestion } from 'node-plop'

import { getManyConstants } from '../../functions/getManyConstants/getManyConstants'
import { SetupReactComponentTypeScriptAtomicDesignStyledComponentsCodegenOptions } from './react-component-typescript-atomic-design-styled-components.types'

const base = {
  name: 'name',
  type: 'type'
} as const

const handlebars = getManyConstants(base)

export const reactComponentTypescriptAtomicDesignStyledComponentsConstants = {
  base,
  handlebars
}

export const defaultOptions: Required<SetupReactComponentTypeScriptAtomicDesignStyledComponentsCodegenOptions> = {
  componentsDirectory: 'src/components',
  hasStories: true,
  hasTests: true,
  renderFunctionLocation: '../../../functions/renderComponent/renderComponent',
  renderFunctionName: 'renderComponent'
}

export const reactComponentTypescriptAtomicDesignStyledComponentsConfig = {
  actions: [] as ActionType[],
  description: 'Generate a React component with TypeScript and styled components and atomic design project structure.',
  prompts: [] as PromptQuestion[]
}
