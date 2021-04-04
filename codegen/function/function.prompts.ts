import { composeValidators } from '../../src'
import { functionConstants } from './function.constants'
import { GetFunctionPromptsReturn } from './function.types'

const { base } = functionConstants

export const getFunctionPrompts = (): GetFunctionPromptsReturn => {
  return {
    name: {
      message: 'What do you want to name the function?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    }
  }
}
