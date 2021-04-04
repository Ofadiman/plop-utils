import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type GetConstantPromptsReturn = {
  name: PromptQuestion
}

export type GetConstantActionsReturn = {
  main: ActionType
  modifyIndex: ActionType
}
