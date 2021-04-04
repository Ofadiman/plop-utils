import { composeValidators } from '../../src'
import { constantConstants } from './constant.constants'
import { GetConstantPromptsReturn } from './constant.types'

const { base } = constantConstants

export const getConstantPrompts = (): GetConstantPromptsReturn => {
  return {
    name: {
      message: 'What do you want to name the constant?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    }
  }
}
