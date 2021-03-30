import { composeValidators, GeneratorConfig, requireInput } from '@ofadiman/plop-utils'

import { getDirectories } from '../../../../dist/functions/getDirectories/getDirectories'
import { exceptionActions } from './exception.actions'
import { exceptionConstants } from './exception.constants'

export const exceptionConfig: GeneratorConfig = {
  actions: exceptionActions,
  description: 'Generate a/an exception.',
  prompts: [
    {
      message: 'Exception name:',
      name: exceptionConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    },
    {
      message: 'Exception message:',
      name: exceptionConstants.variables.base.message,
      type: 'input',
      validate: composeValidators(requireInput('Exception message is required!'))
    },
    {
      message: 'Status code:',
      name: exceptionConstants.variables.base.statusCode,
      type: 'input',
      validate: composeValidators(requireInput('Status code is required!'))
    },
    {
      choices: getDirectories('src'),
      message: 'Exception directory:',
      name: exceptionConstants.variables.base.moduleName,
      type: 'list'
    }
  ]
}
