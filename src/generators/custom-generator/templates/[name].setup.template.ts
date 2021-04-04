import { customGeneratorConstants } from '../custom-generator.constants'

const { handlebars } = customGeneratorConstants

export const template = `import { NodePlopAPI } from 'plop'

import { get${handlebars.name.pascalCase}Actions } from './${handlebars.name.kebabCase}.actions'
import { config } from './${handlebars.name.kebabCase}.constants'
import { get${handlebars.name.pascalCase}Prompts } from './${handlebars.name.kebabCase}.prompts'

export const setup${handlebars.name.pascalCase} = (plop: NodePlopAPI): void => {
  const prompts = get${handlebars.name.pascalCase}Prompts()
  const actions = get${handlebars.name.pascalCase}Actions()

  config.prompts.push(prompts.name)
  config.actions.push(actions.action)

  plop.setGenerator('${handlebars.name.kebabCase}', config)
}
`
