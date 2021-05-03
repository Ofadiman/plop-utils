import { PromptQuestion } from 'node-plop'
import { ActionType, NodePlopAPI } from 'plop'

export type GetContainerActionsReturn = {
  javascript: {
    main: ActionType
    tests: ActionType
  }
  typescript: {
    main: ActionType
    tests: ActionType
    types: ActionType
  }
}

export type GetContainerActionsOptions = {
  root: string
}

export type GetContainerPromptsReturn = {
  name: PromptQuestion
}

export type Container = {
  generatorName?: string
  language: 'javascript' | 'typescript'
  tests?: boolean
}

export type SetupContainerCodegenOptions = {
  containerOptions: Container | boolean
  plop: NodePlopAPI
  root: string
}
