import { pascalCase } from 'change-case'
import { Answers } from 'inquirer'
import { ActionType } from 'plop'

import { enumConstants } from './enum.constants'

export const enumActions: ActionType[] = [
  {
    path: `src/enums/${enumConstants.variables.handlebars.name.pascalCase}.enum.ts`,
    template: require('./templates/[name].template').template,
    type: 'add'
  },
  {
    path: 'src/index.ts',
    transform: (fileContent: string, answers: Answers): string => {
      const name = answers[enumConstants.variables.base.name]
      const pascalCaseName = pascalCase(name)

      const arrayOfExports = fileContent.split(/\n/gu)

      arrayOfExports.pop()
      arrayOfExports.push(`export { ${pascalCaseName} } from './enums/${pascalCaseName}.enum'`)
      arrayOfExports.sort()

      return `${arrayOfExports.join(`\n`)}\n`
    },
    type: 'modify'
  }
]
