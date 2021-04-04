import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type GetTypePromptsReturn = {
  name: PromptQuestion
}

export type GetTypeActionsReturn = {
  main: ActionType
  modifyIndex: ActionType
}
