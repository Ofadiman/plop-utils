import { generatorConstants } from '../generator.constants'

const { handlebars } = generatorConstants

export const template = `import { NodePlopAPI } from 'plop'

import { get${handlebars.name.pascalCase}Actions } from './${handlebars.name.kebabCase}.actions'
import { ${handlebars.name.camelCase}Config } from './${handlebars.name.kebabCase}.constants'
import { get${handlebars.name.pascalCase}Prompts } from './${handlebars.name.kebabCase}.prompts'

export const setup${handlebars.name.pascalCase}Codegen = (plop: NodePlopAPI): void => {
  const prompts = get${handlebars.name.pascalCase}Prompts()
  const actions = get${handlebars.name.pascalCase}Actions()

  ${handlebars.name.camelCase}Config.prompts.push(prompts.name)
  ${handlebars.name.camelCase}Config.actions.push(actions.main)

  plop.setGenerator('${handlebars.name.kebabCase}', ${handlebars.name.camelCase}Config)
}
`
