import { composeValidators, GeneratorConfig, runEslint } from '@ofadiman/plop-utils'

import { nestModuleActions } from './nest-module.actions'
import { nestModuleConstants } from './nest-module.constants'

export const nestModuleConfig: GeneratorConfig = {
  actions: [...nestModuleActions, runEslint('src/app.module.ts')],
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
