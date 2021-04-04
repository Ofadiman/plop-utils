import { pascalCase } from 'change-case'
import { Answers } from 'inquirer'

import { typeConstants } from './type.constants'
import { GetTypeActionsReturn } from './type.types'

const { handlebars, base } = typeConstants

export const getTypeActions = (): GetTypeActionsReturn => {
  return {
    main: {
      path: `src/types/${handlebars.name.pascalCase}.type.ts`,
      template: require('./templates/[name].template').template,
      type: 'add'
    },
    modifyIndex: {
      path: 'src/index.ts',
      transform: (fileContent: string, answers: Answers): string => {
        const pascalCaseName = pascalCase(answers[base.name])

        const arrayOfExports = fileContent.split(/\n/gu).filter((export_) => export_ !== '')

        arrayOfExports.push(`export type { ${pascalCaseName} } from './types/${pascalCaseName}.type'`)
        arrayOfExports.sort()

        return `${arrayOfExports.join(`\n`)}\n`
      },
      type: 'modify'
    }
  }
}
