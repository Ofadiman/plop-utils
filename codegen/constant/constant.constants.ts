import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants } from '../../src'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const constantConstants = {
  base,
  handlebars
}

export const config: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a constant value available globally',
  prompts: [] as PromptQuestion[]
}
