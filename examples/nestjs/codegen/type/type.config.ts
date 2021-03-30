import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { getDirectories } from '../../../../dist/functions/getDirectories/getDirectories'
import { typeActions } from './type.actions'
import { typeConstants } from './type.constants'

export const typeConfig: GeneratorConfig = {
  actions: typeActions,
  description: 'Generate a/an type.',
  prompts: [
    {
      message: 'Type name:',
      name: typeConstants.variables.base.name,
      type: 'input',
      validate: composeValidators()
    },
    {
      choices: getDirectories('src'),
      message: 'Type directory:',
      name: typeConstants.variables.base.moduleName,
      type: 'list'
    }
  ]
}
