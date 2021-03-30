import { ActionType } from 'plop'

import { enumConstants } from './enum.constants'

export const enumActions: ActionType[] = [
  {
    path: `src/${enumConstants.variables.handlebars.moduleName.kebabCase}/enums/${enumConstants.variables.handlebars.name.kebabCase}.enum.ts`,
    template: require('./templates/[name].enum.template').template,
    type: 'add'
  }
]
