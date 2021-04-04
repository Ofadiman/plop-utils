import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type GetCustomGeneratorActionsReturn = {
  actions: ActionType
  constants: ActionType
  modifyPlopfile: ActionType
  prompts: ActionType
  setup: ActionType
  template: ActionType
  types: ActionType
}

export type GetCustomGeneratorPromptsReturn = {
  description: PromptQuestion
  name: PromptQuestion
}
