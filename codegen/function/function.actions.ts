import { camelCase } from 'change-case'
import { Answers } from 'inquirer'

import { functionConstants } from './function.constants'
import { GetFunctionActionsReturn } from './function.types'

const { handlebars, base } = functionConstants

export const getFunctionActions = (): GetFunctionActionsReturn => {
  return {
    main: {
      path: `src/functions/${handlebars.name.camelCase}/${handlebars.name.camelCase}.ts`,
      template: require('./templates/[name].template').template,
      type: 'add'
    },
    modifyIndex: {
      path: 'src/index.ts',
      transform: (fileContent: string, answers: Answers): string => {
        const camelCaseName = camelCase(answers[base.name])

        const arrayOfExports = fileContent.split(/\n/gu).filter((export_) => export_ !== '')

        arrayOfExports.push(`export { ${camelCaseName} } from './functions/${camelCaseName}/${camelCaseName}'`)
        arrayOfExports.sort()

        return `${arrayOfExports.join(`\n`)}\n`
      },
      type: 'modify'
    },
    test: {
      path: `src/functions/${handlebars.name.camelCase}/${handlebars.name.camelCase}.test.ts`,
      template: require('./templates/[name].test.template').template,
      type: 'add'
    },
    types: {
      path: `src/functions/${handlebars.name.camelCase}/${handlebars.name.camelCase}.types.ts`,
      template: require('./templates/[name].types.template').template,
      type: 'add'
    }
  }
}
