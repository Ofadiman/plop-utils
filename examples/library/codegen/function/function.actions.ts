import { camelCase } from 'change-case'
import { Answers } from 'inquirer'
import { ActionType } from 'plop'

import { functionConstants } from './function.constants'

export const functionActions: ActionType[] = [
  {
    path: `src/functions/${functionConstants.variables.handlebars.name.camelCase}/${functionConstants.variables.handlebars.name.camelCase}.ts`,
    template: require('./templates/[name].template').template,
    type: 'add'
  },
  {
    path: `src/functions/${functionConstants.variables.handlebars.name.camelCase}/${functionConstants.variables.handlebars.name.camelCase}.test.ts`,
    template: require('./templates/[name].test.template').template,
    type: 'add'
  },
  {
    path: 'src/index.ts',
    transform: (fileContent: string, answers: Answers): string => {
      const name = answers[functionConstants.variables.base.name]
      const camelCaseName = camelCase(name)

      const arrayOfExports = fileContent.split(/\n/gu)

      arrayOfExports.pop()
      arrayOfExports.push(`export { ${camelCaseName} } from './functions/${camelCaseName}/${camelCaseName}'`)
      arrayOfExports.sort()

      return `${arrayOfExports.join(`\n`)}\n`
    },
    type: 'modify'
  }
]
