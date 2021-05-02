import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants } from '../../src'

export const generatorConstants = getManyConstants({
  name: 'name'
} as const)

export const generatorConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate the template for the generator provided in the library',
  prompts: [] as PromptQuestion[]
}
