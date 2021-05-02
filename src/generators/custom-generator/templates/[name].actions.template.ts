import { customGeneratorConstants } from '../custom-generator.constants'

const { handlebars } = customGeneratorConstants

export const template = `import { ${handlebars.name.camelCase}Constants } from './${handlebars.name.camelCase}.constants'
import { Get${handlebars.name.pascalCase}ActionsReturn } from './${handlebars.name.kebabCase}.types'

const { handlebars } = ${handlebars.name.camelCase}Constants

export const get${handlebars.name.pascalCase}Actions = (): Get${handlebars.name.pascalCase}ActionsReturn => {
  return {
    main: {
      path: \`src\`,
      template: require('./templates/[name].template').template,
      type: 'add'
    }
  }
}
`