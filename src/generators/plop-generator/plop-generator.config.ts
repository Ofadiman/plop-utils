import { composeValidators } from '../../functions/composeValidators/composeValidators'
import { GeneratorConfig } from '../../types/GeneratorConfig.type'
import { plopGeneratorActions } from './plop-generator.actions'
import { plopGeneratorConstants } from './plop-generator.constants'

export const plopGeneratorConfig: GeneratorConfig = {
  actions: plopGeneratorActions,
  description: 'Generate a/an plop generator.',
  prompts: [
    {
      message: 'Plop generator name:',
      name: plopGeneratorConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    }
  ]
}
