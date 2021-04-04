import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type GetCustomGeneratorActionsReturn = {
  actions: ActionType
  constants: ActionType
  main: ActionType
  modifyPlopfile: ActionType
  prompts: ActionType
  setup: ActionType
  types: ActionType
}

export type GetCustomGeneratorPromptsReturn = {
  description: PromptQuestion
  name: PromptQuestion
}
