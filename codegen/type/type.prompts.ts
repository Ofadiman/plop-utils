import { composeValidators } from '../../src'
import { typeConstants } from './type.constants'
import { GetTypePromptsReturn } from './type.types'

const { base } = typeConstants

export const getTypePrompts = (): GetTypePromptsReturn => {
  return {
    name: {
      message: 'What do you want to name the type?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    }
  }
}
