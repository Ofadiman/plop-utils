import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants } from '../../src'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const generatorConstants = {
  base,
  handlebars
}

export const generatorConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate the template for the generator provided in the library',
  prompts: [] as PromptQuestion[]
}
