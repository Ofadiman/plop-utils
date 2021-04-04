import { reactComponentTypescriptAtomicDesignStyledComponentsConstants } from '../react-component-typescript-atomic-design-styled-components.constants'

const { handlebars } = reactComponentTypescriptAtomicDesignStyledComponentsConstants

export const template = `export type ${handlebars.name.pascalCase}Props = {
  className?: string
}
`
