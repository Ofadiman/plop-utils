import { reactComponentTypescriptStyledComponentsConstants } from '../react-component-typescript-styled-components.constants'

const { handlebars } = reactComponentTypescriptStyledComponentsConstants

export const template = `export type ${handlebars.name.pascalCase}Props = {
  className?: string
}
`
