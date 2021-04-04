import { SetupReactComponentTypeScriptAtomicDesignStyledComponentsOptions } from '../../generators/react-component-typescript-atomic-design-styled-components/react-component-typescript-atomic-design-styled-components.types'
import { SetupReactComponentTypeScriptStyledComponentsOptions } from '../../generators/react-component-typescript-styled-components/react-component-typescript-styled-components.types'

export type SetupPlopOptions = {
  customGenerator?: boolean
  reactComponentTypescriptAtomicDesignStyledComponents?:
    | SetupReactComponentTypeScriptAtomicDesignStyledComponentsOptions
    | boolean
  reactComponentTypescriptStyledComponents?: SetupReactComponentTypeScriptStyledComponentsOptions | boolean
}
