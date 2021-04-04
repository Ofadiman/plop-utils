import { camelCase, constantCase } from 'change-case'
import { Answers } from 'inquirer'

import { constantConstants } from './constant.constants'
import { GetConstantActionsReturn } from './constant.types'

const { handlebars, base } = constantConstants

export const getConstantActions = (): GetConstantActionsReturn => {
  return {
    main: {
      path: `src/constants/${handlebars.name.camelCase}.constant.ts`,
      template: require('./templates/[name].template').template,
      type: 'add'
    },
    modifyIndex: {
      path: 'src/index.ts',
      transform: (fileContent: string, answers: Answers): string => {
        const constantCaseName = constantCase(answers[base.name])
        const camelCaseName = camelCase(answers[base.name])

        const arrayOfExports = fileContent.split(/\n/gu).filter((export_) => export_ !== '')

        arrayOfExports.push(`export { ${constantCaseName} } from './constants/${camelCaseName}.constant'`)
        arrayOfExports.sort()

        return `${arrayOfExports.join(`\n`)}\n`
      },
      type: 'modify'
    }
  }
}
