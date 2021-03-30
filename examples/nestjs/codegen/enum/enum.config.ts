import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { getDirectories } from '../../../../dist/functions/getDirectories/getDirectories'
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
    },
    {
      choices: getDirectories('src'),
      message: 'Enum directory:',
      name: enumConstants.variables.base.moduleName,
      type: 'list'
    }
  ]
}
