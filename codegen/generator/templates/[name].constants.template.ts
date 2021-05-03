import { generatorConstants } from '../generator.constants'

const { handlebars } = generatorConstants

export const template = `import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

import { getManyConstants } from '../../../functions/getManyConstants/getManyConstants'
import { GeneratorConfig } from '../../../types/GeneratorConfig.type'

const base = {
  name: 'name'
} as const

export const ${handlebars.name.camelCase}Constants = getManyConstants(base)

export const ${handlebars.name.camelCase}Config: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a custom generator.',
  prompts: [] as PromptQuestion[]
}
`
