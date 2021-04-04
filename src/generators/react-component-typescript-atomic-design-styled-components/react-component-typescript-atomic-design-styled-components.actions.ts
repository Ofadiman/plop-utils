import { reactComponentTypescriptAtomicDesignStyledComponentsConstants } from './react-component-typescript-atomic-design-styled-components.constants'
import {
  GetReactComponentTypescriptAtomicDesignStyledComponentsActionsOptions,
  GetReactComponentTypescriptAtomicDesignStyledComponentsActionsReturn
} from './react-component-typescript-atomic-design-styled-components.types'

const { handlebars } = reactComponentTypescriptAtomicDesignStyledComponentsConstants

export const getReactComponentTypeScriptAtomicDesignStyledComponentsActions = ({
  componentsDirectory,
  renderFunctionLocation,
  renderFunctionName
}: GetReactComponentTypescriptAtomicDesignStyledComponentsActionsOptions): GetReactComponentTypescriptAtomicDesignStyledComponentsActionsReturn => {
  return {
    component: {
      path: `${componentsDirectory}/${handlebars.type.unmodified}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.tsx`,
      template: require('./templates/[name].component.template').template,
      type: 'add'
    },
    stories: {
      path: `${componentsDirectory}/${handlebars.type.unmodified}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.stories.tsx`,
      template: require('./templates/[name].component.stories.template').template,
      type: 'add'
    },
    styles: {
      path: `${componentsDirectory}/${handlebars.type.unmodified}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.styles.ts`,
      template: require('./templates/[name].component.styles.template').template,
      type: 'add'
    },
    test: {
      data: {
        renderFunctionLocation,
        renderFunctionName
      },
      path: `${componentsDirectory}/${handlebars.type.unmodified}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.test.tsx`,
      template: require('./templates/[name].component.test.template').template,
      type: 'add'
    },
    types: {
      path: `${componentsDirectory}/${handlebars.type.unmodified}/${handlebars.name.pascalCase}/${handlebars.name.pascalCase}.component.types.ts`,
      template: require('./templates/[name].component.types.template').template,
      type: 'add'
    }
  }
}
