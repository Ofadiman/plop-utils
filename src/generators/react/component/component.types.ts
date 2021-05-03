import { PromptQuestion } from 'node-plop'
import { ActionType, NodePlopAPI } from 'plop'

export type GetComponentActionsReturn = {
  javascript: {
    materialUI: {
      main: ActionType
      styles: ActionType
    }
    shared: {
      stories: ActionType
      tests: ActionType
    }
    styledComponents: {
      main: ActionType
      styles: ActionType
    }
  }
  typescript: {
    materialUI: {
      main: ActionType
      styles: ActionType
    }
    shared: {
      stories: ActionType
      tests: ActionType
      types: ActionType
    }
    styledComponents: {
      main: ActionType
      styles: ActionType
    }
  }
}

export type GetComponentActionsOptions = {
  root: string
}

export type GetComponentPromptsReturn = {
  name: PromptQuestion
}

export type Component = {
  css?: 'material-ui' | 'styled-components'
  generatorName?: string
  language?: 'javascript' | 'typescript'
  stories?: boolean
  tests?: boolean
}

export type SetupComponentCodegenOptions = {
  componentOptions: Component | boolean
  plop: NodePlopAPI
  root: string
}
