import { customGeneratorConstants } from '../custom-generator.constants'

const { handlebars } = customGeneratorConstants

export const template = `import { GeneratorConfig, getManyConstants } from '@ofadiman/plop-utils'
import { ActionType, PromptQuestion } from 'node-plop'

const base = {
  name: 'name'
} as const

export const ${handlebars.name.camelCase}Constants = getManyConstants(base)

export const ${handlebars.name.camelCase}Config: GeneratorConfig = {
  actions: [] as ActionType[],
  description: '${handlebars.description.sentenceCase}',
  prompts: [] as PromptQuestion[]
}
`
