import { composeValidators } from '../../../functions/composeValidators/composeValidators'
import { componentConstants } from './component.constants'
import { GetComponentPromptsReturn } from './component.types'

const { base } = componentConstants

export const getComponentPrompts = (): GetComponentPromptsReturn => {
  return {
    name: {
      message: 'What do you want to name the component?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    }
  }
}
