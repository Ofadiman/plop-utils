import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { enumActions } from './enum.actions'
import { enumConstants } from './enum.constants'

export const enumConfig: GeneratorConfig = {
  actions: enumActions,
  description: 'Generate a/an enum.',
  prompts: [
    {
      message: 'Enum name:',
      name: enumConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    }
  ]
}
