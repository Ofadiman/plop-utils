import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type SetupReactComponentTypeScriptStyledComponentsOptions = {
  componentsDirectory?: string
  hasStories?: boolean
  hasTests?: boolean
  renderFunctionLocation?: string
  renderFunctionName?: string
}

export type GetReactComponentTypeScriptStyledComponentsActionsReturn = {
  component: ActionType
  stories: ActionType
  styles: ActionType
  test: ActionType
  types: ActionType
}

export type GetReactComponentTypeScriptStyledComponentsActionsOptions = {
  componentsDirectory: string
  renderFunctionLocation: string
  renderFunctionName: string
}

export type GetReactComponentTypeScriptStyledComponentsPromptsReturn = {
  name: PromptQuestion
}
