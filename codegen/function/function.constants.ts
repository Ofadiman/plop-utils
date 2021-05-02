import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants } from '../../src'

export const functionConstants = getManyConstants({
  name: 'name'
} as const)

export const functionConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a helper function',
  prompts: [] as PromptQuestion[]
}
