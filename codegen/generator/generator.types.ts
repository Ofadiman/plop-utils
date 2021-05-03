import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type GetGeneratorPromptsReturn = {
  directory: PromptQuestion
  name: PromptQuestion
}

export type GetGeneratorActionsReturn = {
  actions: ActionType
  constants: ActionType
  main: ActionType
  prompts: ActionType
  setup: ActionType
  types: ActionType
}
