import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type SetupReactComponentTypeScriptAtomicDesignStyledComponentsOptions = {
  componentsDirectory?: string
  hasStories?: boolean
  hasTests?: boolean
  renderFunctionLocation?: string
  renderFunctionName?: string
}

export type GetReactComponentTypeScriptAtomicDesignStyledComponentsPromptsReturn = {
  name: PromptQuestion
  type: PromptQuestion
}

export type GetReactComponentTypeScriptAtomicDesignStyledComponentsPromptsOptions = {
  componentsDirectory: string
}

export type GetReactComponentTypescriptAtomicDesignStyledComponentsActionsOptions = {
  componentsDirectory: string
  renderFunctionLocation: string
  renderFunctionName: string
}

export type GetReactComponentTypescriptAtomicDesignStyledComponentsActionsReturn = {
  component: ActionType
  stories: ActionType
  styles: ActionType
  test: ActionType
  types: ActionType
}
