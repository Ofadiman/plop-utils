import { composeValidators } from '../../../functions/composeValidators/composeValidators'
import { containerConstants } from './container.constants'
import { GetContainerPromptsReturn } from './container.types'

const { base } = containerConstants

export const getContainerPrompts = (): GetContainerPromptsReturn => {
  return {
    name: {
      message: 'What do you want to name the container?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    }
  }
}
