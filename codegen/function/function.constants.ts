import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants } from '../../src'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const functionConstants = {
  base,
  handlebars
}

export const functionConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a helper function',
  prompts: [] as PromptQuestion[]
}
