import { PromptQuestion } from 'node-plop'
import { ActionType, NodePlopAPI } from 'plop'

export type GetGeneratorActionsReturn = {
  actions: ActionType
  constants: ActionType
  main: ActionType
  modifyPlopfile: ActionType
  prompts: ActionType
  setup: ActionType
  types: ActionType
}

export type GetGeneratorPromptsReturn = {
  description: PromptQuestion
  name: PromptQuestion
}

export type Generator = {
  generatorName?: string
}

export type SetupGeneratorOptions = {
  generatorOptions: Generator | boolean
  plop: NodePlopAPI
}
