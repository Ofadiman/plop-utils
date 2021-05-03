import { componentConstants } from './component.constants'
import { GetComponentActionsOptions, GetComponentActionsReturn } from './component.types'

const { handlebars } = componentConstants

export const getComponentActions = (options: GetComponentActionsOptions): GetComponentActionsReturn => {
  const { root } = options

  return {
    javascript: {
      materialUI: {
        main: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.jsx`,
          template: require('./templates/javascript/material-ui/[name].component.template').template,
          type: 'add'
        },
        styles: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.styles.js`,
          template: require('./templates/javascript/material-ui/[name].component.styles.template').template,
          type: 'add'
        }
      },
      shared: {
        stories: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.stories.jsx`,
          template: require('./templates/javascript/shared/[name].component.stories.template').template,
          type: 'add'
        },
        tests: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.test.jsx`,
          template: require('./templates/javascript/shared/[name].component.test.template').template,
          type: 'add'
        }
      },
      styledComponents: {
        main: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.jsx`,
          template: require('./templates/javascript/styled-components/[name].component.template').template,
          type: 'add'
        },
        styles: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.styles.js`,
          template: require('./templates/javascript/styled-components/[name].component.styles.template').template,
          type: 'add'
        }
      }
    },
    typescript: {
      materialUI: {
        main: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.tsx`,
          template: require('./templates/typescript/material-ui/[name].component.template').template,
          type: 'add'
        },
        styles: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.styles.ts`,
          template: require('./templates/typescript/material-ui/[name].component.styles.template').template,
          type: 'add'
        }
      },
      shared: {
        stories: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.stories.tsx`,
          template: require('./templates/typescript/shared/[name].component.stories.template').template,
          type: 'add'
        },
        tests: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.test.tsx`,
          template: require('./templates/typescript/shared/[name].component.test.template').template,
          type: 'add'
        },
        types: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.types.ts`,
          template: require('./templates/typescript/shared/[name].component.types.template').template,
          type: 'add'
        }
      },
      styledComponents: {
        main: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.tsx`,
          template: require('./templates/typescript/styled-components/[name].component.template').template,
          type: 'add'
        },
        styles: {
          path: `${root}/components/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.styles.ts`,
          template: require('./templates/typescript/styled-components/[name].component.styles.template').template,
          type: 'add'
        }
      }
    }
  }
}
