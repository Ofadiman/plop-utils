import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { getDirectories } from '../../../../dist/functions/getDirectories/getDirectories'
import { dtoActions } from './dto.actions'
import { dtoConstants } from './dto.constants'

export const dtoConfig: GeneratorConfig = {
  actions: dtoActions,
  description: 'Generate a/an dto.',
  prompts: [
    {
      message: 'Dto name:',
      name: dtoConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    },
    {
      choices: getDirectories('src'),
      message: 'Dto directory:',
      name: dtoConstants.variables.base.moduleName,
      type: 'list'
    }
  ]
}
