import { composeValidators } from '../../../functions/composeValidators/composeValidators'
import { requireInput } from '../../../validators/requireInput/requireInput'
import { generatorConstants } from './generator.constants'
import { GetGeneratorPromptsReturn } from './generator.types'

const { base } = generatorConstants

export const getGeneratorPrompts = (): GetGeneratorPromptsReturn => {
  return {
    description: {
      message: 'What is the description of the generator?',
      name: base.description,
      type: 'input',
      validate: composeValidators(requireInput('Generator description is required!'))
    },
    name: {
      message: 'What do you want to name the generator?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    }
  }
}
