import { ActionType } from 'plop'

import { dtoConstants } from './dto.constants'

export const dtoActions: ActionType[] = [
  {
    path: `src/${dtoConstants.variables.handlebars.moduleName.kebabCase}/dto/${dtoConstants.variables.handlebars.name.kebabCase}.dto.ts`,
    template: require('./templates/[name].dto.template').template,
    type: 'add'
  }
]
