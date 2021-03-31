import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { functionActions } from './function.actions'
import { functionConstants } from './function.constants'

export const functionConfig: GeneratorConfig = {
  actions: functionActions,
  description: 'Generate a/an function.',
  prompts: [
    {
      message: 'Function name:',
      name: functionConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    }
  ]
}
