import { generatorConstants } from '../generator.constants'

const { handlebars } = generatorConstants

export const template = `import { composeValidators } from '../../../functions/composeValidators/composeValidators'
import { ${handlebars.name.camelCase}Constants } from './${handlebars.name.kebabCase}.constants'
import { Get${handlebars.name.pascalCase}PromptsReturn } from './${handlebars.name.kebabCase}.types'

const { base } = ${handlebars.name.camelCase}Constants

export const get${handlebars.name.pascalCase}Prompts = (): Get${handlebars.name.pascalCase}PromptsReturn => {
  return {
    name: {
      message: 'What do you want to name the ${handlebars.name.lowerCase}?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    }
  }
}
`
