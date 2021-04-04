import { composeValidators } from '../../src'
import { generatorConstants } from './generator.constants'
import { GetGeneratorPromptsReturn } from './generator.types'

const { base } = generatorConstants

export const getGeneratorPrompts = (): GetGeneratorPromptsReturn => {
  return {
    name: {
      message: 'What do you want to name the generator?',
      name: base.name,
      type: 'input',
      validate: composeValidators()
    }
  }
}
