import { containerConstants } from './container.constants'
import { GetContainerActionsReturn } from './container.types'

const { handlebars } = containerConstants

export const getContainerActions = (): GetContainerActionsReturn => {
  return {
    javascript: {
      main: {
        path: `src/containers/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.container.jsx`,
        template: require('./templates/javascript/[name].container.template').template,
        type: 'add'
      },
      tests: {
        path: `src/containers/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.container.test.jsx`,
        template: require('./templates/javascript/[name].container.test.template').template,
        type: 'add'
      }
    },
    typescript: {
      main: {
        path: `src/containers/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.container.tsx`,
        template: require('./templates/typescript/[name].container.template').template,
        type: 'add'
      },
      tests: {
        path: `src/containers/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.container.test.tsx`,
        template: require('./templates/typescript/[name].container.test.template').template,
        type: 'add'
      },
      types: {
        path: `src/containers/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.container.types.ts`,
        template: require('./templates/typescript/[name].container.types.template').template,
        type: 'add'
      }
    }
  }
}
