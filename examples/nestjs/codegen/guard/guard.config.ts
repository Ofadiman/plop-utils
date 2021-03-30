import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { getDirectories } from '../../../../dist/functions/getDirectories/getDirectories'
import { guardActions } from './guard.actions'
import { guardConstants } from './guard.constants'

export const guardConfig: GeneratorConfig = {
  actions: guardActions,
  description: 'Generate a/an guard.',
  prompts: [
    {
      message: 'Guard name:',
      name: guardConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    },
    {
      choices: getDirectories('src'),
      message: 'Guard directory:',
      name: guardConstants.variables.base.moduleName,
      type: 'list'
    }
  ]
}
