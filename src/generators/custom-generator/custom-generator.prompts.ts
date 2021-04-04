import { composeValidators } from '../../functions/composeValidators/composeValidators'
import { requireInput } from '../../functions/requireInput/requireInput'
import { customGeneratorConstants } from './custom-generator.constants'
import { GetCustomGeneratorPromptsReturn } from './custom-generator.types'

const { base } = customGeneratorConstants

export const getCustomGeneratorPrompts = (): GetCustomGeneratorPromptsReturn => {
  return {
    description: {
      message: 'What do you want to name the generator?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    },
    name: {
      message: 'What is the description of your generator?',
      name: base.description,
      type: 'input',
      validate: composeValidators(requireInput('Generator description is required!'))
    }
  }
}
