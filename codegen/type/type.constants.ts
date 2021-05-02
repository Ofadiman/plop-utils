import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants } from '../../src'

export const typeConstants = getManyConstants({
  name: 'name'
} as const)

export const config: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a type definition',
  prompts: [] as PromptQuestion[]
}
