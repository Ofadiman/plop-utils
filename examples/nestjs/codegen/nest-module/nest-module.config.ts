import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { nestModuleActions } from './nest-module.actions'
import { nestModuleConstants } from './nest-module.constants'

export const nestModuleConfig: GeneratorConfig = {
  actions: nestModuleActions,
  description: 'Generate a/an nest module.',
  prompts: [
    {
      message: 'Nest module name:',
      name: nestModuleConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    }
  ]
}
