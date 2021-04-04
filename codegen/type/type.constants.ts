import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants } from '../../src'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const typeConstants = {
  base,
  handlebars
}

export const config: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a type definition',
  prompts: [] as PromptQuestion[]
}
