/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { NodePlopAPI } from 'plop'
import { plural, singular } from 'pluralize'

import { CODEGEN_SUCCESS } from '../../constants/prefixes'
import { setupCustomGeneratorCodegen } from '../../generators/custom-generator/custom-generator.setup'
import { setupReactComponentTypeScriptAtomicDesignStyledComponentsCodegen } from '../../generators/react-component-typescript-atomic-design-styled-components/react-component-typescript-atomic-design-styled-components.setup'
import { setupReactComponentTypeScriptStyledComponentsCodegen } from '../../generators/react-component-typescript-styled-components/react-component-typescript-styled-components.setup'
import { SetupPlopOptions } from './setupPlop.types'

export const setupPlop = (plop: NodePlopAPI, options: SetupPlopOptions = {}): void => {
  plop.setWelcomeMessage(`${CODEGEN_SUCCESS} What do you want to generate?`)
  plop.setHelper('singular', singular)
  plop.setHelper('plural', plural)

  if (options.customGenerator) {
    setupCustomGeneratorCodegen(plop)
  }

  if (options.reactComponentTypescriptStyledComponents) {
    setupReactComponentTypeScriptStyledComponentsCodegen(plop, options.reactComponentTypescriptStyledComponents)
  }
  if (options.reactComponentTypescriptAtomicDesignStyledComponents) {
    setupReactComponentTypeScriptAtomicDesignStyledComponentsCodegen(
      plop,
      options.reactComponentTypescriptAtomicDesignStyledComponents
    )
  }
}
