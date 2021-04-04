import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type GeneratorConfig = {
  actions: ActionType[]
  description: string
  prompts: PromptQuestion[]
}
