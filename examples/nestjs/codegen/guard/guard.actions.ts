import { ActionType } from 'plop'

import { guardConstants } from './guard.constants'

export const guardActions: ActionType[] = [
  {
    path: `src/${guardConstants.variables.handlebars.moduleName.kebabCase}/guards/${guardConstants.variables.handlebars.name.kebabCase}.guard.ts`,
    template: require('./templates/[name].guard.template').template,
    type: 'add'
  }
]
