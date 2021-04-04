import { SetupReactComponentTypeScriptAtomicDesignStyledComponentsCodegenOptions } from '../../generators/react-component-typescript-atomic-design-styled-components/react-component-typescript-atomic-design-styled-components.types'
import { SetupReactComponentTypeScriptStyledComponentsCodegenOptions } from '../../generators/react-component-typescript-styled-components/react-component-typescript-styled-components.types'

export type SetupPlopOptions = {
  customGenerator?: boolean
  reactComponentTypescriptAtomicDesignStyledComponents?:
    | SetupReactComponentTypeScriptAtomicDesignStyledComponentsCodegenOptions
    | boolean
  reactComponentTypescriptStyledComponents?: SetupReactComponentTypeScriptStyledComponentsCodegenOptions | boolean
}
