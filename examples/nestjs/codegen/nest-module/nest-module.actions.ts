import { paramCase, pascalCase } from 'change-case'
import { Answers } from 'inquirer'
import { ActionType } from 'plop'

import { nestjsxCrudModuleConstants } from '../nestjsx-crud-module/nestjsx-crud-module.constants'
import { nestModuleConstants } from './nest-module.constants'

export const nestModuleActions: ActionType[] = [
  {
    path: `src/${nestModuleConstants.variables.handlebars.name.kebabCase}/${nestModuleConstants.variables.handlebars.name.kebabCase}.module.ts`,
    template: require('./templates/[name].module.template').template,
    type: 'add'
  },
  {
    path: `src/${nestModuleConstants.variables.handlebars.name.kebabCase}/${nestModuleConstants.variables.handlebars.name.kebabCase}.service.ts`,
    template: require('./templates/[name].service.template').template,
    type: 'add'
  },
  {
    path: `src/${nestModuleConstants.variables.handlebars.name.kebabCase}/${nestModuleConstants.variables.handlebars.name.kebabCase}.service.spec.ts`,
    template: require('./templates/[name].service.spec.template').template,
    type: 'add'
  },
  {
    path: `src/${nestModuleConstants.variables.handlebars.name.kebabCase}/${nestModuleConstants.variables.handlebars.name.kebabCase}.controller.ts`,
    template: require('./templates/[name].controller.template').template,
    type: 'add'
  },
  {
    path: `src/${nestModuleConstants.variables.handlebars.name.kebabCase}/${nestModuleConstants.variables.handlebars.name.kebabCase}.controller.spec.ts`,
    template: require('./templates/[name].controller.spec.template').template,
    type: 'add'
  },
  {
    path: 'src/app.module.ts',
    transform: (fileContent: string, answers: Answers): string => {
      const appModuleImportArrayRegex = /imports: \[/u
      const name = answers[nestjsxCrudModuleConstants.variables.base.name]
      const pascalCaseName = `${pascalCase(name)}Module`
      const kebabCaseName = paramCase(name)
      const importString = `import { ${pascalCaseName} } from './${kebabCaseName}/${kebabCaseName}.module'`

      const fileContentWithModifiedImportsArray = fileContent.replace(
        appModuleImportArrayRegex,
        (matchedValue: string): string => {
          return `${matchedValue}${pascalCaseName},`
        }
      )

      return `${importString}\n${fileContentWithModifiedImportsArray}`
    },
    type: 'modify'
  }
]
