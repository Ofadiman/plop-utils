import { customGeneratorConstants } from '../custom-generator.constants'

const { handlebars } = customGeneratorConstants

export const template = `import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type Setup${handlebars.name.pascalCase}Options = {}

export type Get${handlebars.name.pascalCase}PromptsReturn = {
  name: PromptQuestion
}

export type Get${handlebars.name.pascalCase}ActionsReturn = {
  action: ActionType
}
`
