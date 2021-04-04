import { composeValidators } from '../../functions/composeValidators/composeValidators'
import { reactComponentTypescriptStyledComponentsConstants } from './react-component-typescript-styled-components.constants'
import { GetReactComponentTypeScriptStyledComponentsPromptsReturn } from './react-component-typescript-styled-components.types'

const { base } = reactComponentTypescriptStyledComponentsConstants

export const getReactComponentTypeScriptStyledComponentsPrompts = (): GetReactComponentTypeScriptStyledComponentsPromptsReturn => ({
  name: {
    message: 'What do you want to name the component?',
    name: base.name,
    type: 'input',
    validate: composeValidators()
  }
})
