import { ActionType } from 'plop'

import { typeConstants } from './type.constants'

export const typeActions: ActionType[] = [
  {
    path: `src/${typeConstants.variables.handlebars.moduleName.kebabCase}/types/${typeConstants.variables.handlebars.name.kebabCase}.type.ts`,
    template: require('./templates/[name].template').template,
    type: 'add'
  }
]
