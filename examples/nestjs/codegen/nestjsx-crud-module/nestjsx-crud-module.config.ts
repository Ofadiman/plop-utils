import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { nestjsxCrudModuleActions } from './nestjsx-crud-module.actions'
import { nestjsxCrudModuleConstants } from './nestjsx-crud-module.constants'

export const nestjsxCrudModuleConfig: GeneratorConfig = {
  actions: nestjsxCrudModuleActions,
  description: 'Generate a/an nestjsx crud module.',
  prompts: [
    {
      message: 'Nestjsx crud module name:',
      name: nestjsxCrudModuleConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    }
  ]
}
