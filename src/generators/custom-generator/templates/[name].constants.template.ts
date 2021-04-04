import { customGeneratorConstants } from '../custom-generator.constants'

const { handlebars } = customGeneratorConstants

export const template = `import { GeneratorConfig, getManyConstants } from '@ofadiman/plop-utils'
import { ActionType, PromptQuestion } from 'node-plop'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const ${handlebars.name.camelCase}Constants = {
  base,
  handlebars
}

export const config: GeneratorConfig = {
  actions: [] as ActionType[],
  description: '${handlebars.description.sentenceCase}',
  prompts: [] as PromptQuestion[]
}
`
