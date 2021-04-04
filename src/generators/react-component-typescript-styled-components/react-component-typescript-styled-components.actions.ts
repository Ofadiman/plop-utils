import { reactComponentTypescriptStyledComponentsConstants } from './react-component-typescript-styled-components.constants'
import {
  GetReactComponentTypeScriptStyledComponentsActionsOptions,
  GetReactComponentTypeScriptStyledComponentsActionsReturn
} from './react-component-typescript-styled-components.types'

const { handlebars } = reactComponentTypescriptStyledComponentsConstants

export const getReactComponentTypeScriptStyledComponentsActions = ({
  componentsDirectory,
  renderFunctionLocation,
  renderFunctionName
}: GetReactComponentTypeScriptStyledComponentsActionsOptions): GetReactComponentTypeScriptStyledComponentsActionsReturn => {
  return {
    component: {
      path: `${componentsDirectory}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.tsx`,
      template: require('./templates/[name].component.template').template,
      type: 'add'
    },
    stories: {
      path: `${componentsDirectory}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.stories.tsx`,
      template: require('./templates/[name].component.stories.template').template,
      type: 'add'
    },
    styles: {
      path: `${componentsDirectory}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.styles.ts`,
      template: require('./templates/[name].component.styles.template').template,
      type: 'add'
    },
    test: {
      data: {
        renderFunctionLocation,
        renderFunctionName
      },
      path: `${componentsDirectory}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.test.tsx`,
      template: require('./templates/[name].component.test.template').template,
      type: 'add'
    },
    types: {
      path: `${componentsDirectory}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.types.ts`,
      template: require('./templates/[name].component.types.template').template,
      type: 'add'
    }
  }
}
