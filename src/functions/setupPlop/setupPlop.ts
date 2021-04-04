/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { NodePlopAPI } from 'plop'
import { plural, singular } from 'pluralize'

import { CODEGEN_SUCCESS } from '../../constants/prefixes'
import { setupCustomGenerator } from '../../generators/custom-generator/custom-generator.setup'
import { setupReactComponentTypeScriptAtomicDesignStyledComponents } from '../../generators/react-component-typescript-atomic-design-styled-components/react-component-typescript-atomic-design-styled-components.setup'
import { setupReactComponentTypeScriptStyledComponents } from '../../generators/react-component-typescript-styled-components/react-component-typescript-styled-components.setup'
import { SetupPlopOptions } from './setupPlop.types'

export const setupPlop = (plop: NodePlopAPI, options: SetupPlopOptions = {}): void => {
  plop.setWelcomeMessage(`${CODEGEN_SUCCESS} What do you want to generate?`)
  plop.setHelper('singular', singular)
  plop.setHelper('plural', plural)

  if (options.customGenerator) {
    setupCustomGenerator(plop)
  }

  if (options.reactComponentTypescriptStyledComponents) {
    setupReactComponentTypeScriptStyledComponents(plop, options.reactComponentTypescriptStyledComponents)
  }
  if (options.reactComponentTypescriptAtomicDesignStyledComponents) {
    setupReactComponentTypeScriptAtomicDesignStyledComponents(
      plop,
      options.reactComponentTypescriptAtomicDesignStyledComponents
    )
  }
}
