import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type GetFunctionPromptsReturn = {
  name: PromptQuestion
}

export type GetFunctionActionsReturn = {
  main: ActionType
  modifyIndex: ActionType
  test: ActionType
  types: ActionType
}
