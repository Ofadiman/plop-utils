import { composeValidators } from '../../functions/composeValidators/composeValidators'
import { getDirectories } from '../../functions/getDirectories/getDirectories'
import { reactComponentTypescriptAtomicDesignStyledComponentsConstants } from './react-component-typescript-atomic-design-styled-components.constants'
import {
  GetReactComponentTypeScriptAtomicDesignStyledComponentsPromptsOptions,
  GetReactComponentTypeScriptAtomicDesignStyledComponentsPromptsReturn
} from './react-component-typescript-atomic-design-styled-components.types'

const { base } = reactComponentTypescriptAtomicDesignStyledComponentsConstants

export const getReactComponentTypeScriptAtomicDesignStyledComponentsPrompts = ({
  componentsDirectory
}: GetReactComponentTypeScriptAtomicDesignStyledComponentsPromptsOptions): GetReactComponentTypeScriptAtomicDesignStyledComponentsPromptsReturn => ({
  name: {
    message: 'What do you want to name the component?',
    name: base.name,
    type: 'input',
    validate: composeValidators()
  },
  type: {
    choices: getDirectories(componentsDirectory, { addDirs: ['atoms', 'molecules', 'organisms', 'templates'] }),
    message: 'What type of component do you want to generate?',
    name: base.type,
    type: 'list'
  }
})
