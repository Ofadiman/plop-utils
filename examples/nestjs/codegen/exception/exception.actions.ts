import { ActionType } from 'plop'

import { exceptionConstants } from './exception.constants'

export const exceptionActions: ActionType[] = [
  {
    path: `src/${exceptionConstants.variables.handlebars.moduleName.kebabCase}/exceptions/${exceptionConstants.variables.handlebars.name.kebabCase}.exception.ts`,
    template: require('./templates/[name].exception.template').template,
    type: 'add'
  }
]
