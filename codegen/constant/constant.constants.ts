import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants } from '../../src'

export const constantConstants = getManyConstants({
  name: 'name'
} as const)

export const config: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a constant value available globally',
  prompts: [] as PromptQuestion[]
}
