import { generatorConstants } from './generator.constants'
import { GetGeneratorActionsReturn } from './generator.types'

const { handlebars } = generatorConstants

export const getGeneratorActions = (): GetGeneratorActionsReturn => {
  return {
    actions: {
      path: `src/generators/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.actions.ts`,
      template: require('./templates/[name].actions.template').template,
      type: 'add'
    },
    constants: {
      path: `src/generators/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.constants.ts`,
      template: require('./templates/[name].constants.template').template,
      type: 'add'
    },
    main: {
      path: `src/generators/${handlebars.name.kebabCase}/templates/[name].template.ts`,
      template: require('./templates/[name].template').template,
      type: 'add'
    },
    prompts: {
      path: `src/generators/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.prompts.ts`,
      template: require('./templates/[name].prompts.template').template,
      type: 'add'
    },
    setup: {
      path: `src/generators/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.setup.ts`,
      template: require('./templates/[name].setup.template').template,
      type: 'add'
    },
    types: {
      path: `src/generators/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.types.ts`,
      template: require('./templates/[name].types.template').template,
      type: 'add'
    }
  }
}
