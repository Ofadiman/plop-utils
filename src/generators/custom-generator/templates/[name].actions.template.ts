import { customGeneratorConstants } from '../custom-generator.constants'

const { handlebars } = customGeneratorConstants

export const template = `import { Get${handlebars.name.pascalCase}ActionsReturn } from './${handlebars.name.kebabCase}.types'

export const get${handlebars.name.pascalCase}Actions = (): Get${handlebars.name.pascalCase}ActionsReturn => {
  return {
    action: {
      path: \`src\`,
      template: require('./templates/[name].template').template,
      type: 'add'
    }
  }
}
`
