import { generatorConstants } from '../generator.constants'

const { handlebars } = generatorConstants

export const template = `import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

export type Get${handlebars.name.pascalCase}ActionsReturn = {
  main: ActionType
}

export type Get${handlebars.name.pascalCase}PromptsReturn = {
  name: PromptQuestion
}
`
