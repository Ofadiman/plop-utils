import { paramCase, pascalCase } from 'change-case'
import { Answers } from 'inquirer'
import { ActionType } from 'plop'

import { nestjsxCrudModuleConstants } from './nestjsx-crud-module.constants'

export const nestjsxCrudModuleActions: ActionType[] = [
  {
    path: `src/${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}/${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}.module.ts`,
    template: require('./templates/[name].module.template').template,
    type: 'add'
  },
  {
    path: `src/${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}/${nestjsxCrudModuleConstants.variables.handlebars.name.singularKebabCase}.entity.ts`,
    template: require('./templates/[name].entity.template').template,
    type: 'add'
  },
  {
    path: `src/${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}/${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}.service.ts`,
    template: require('./templates/[name].service.template').template,
    type: 'add'
  },
  {
    path: `src/${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}/${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}.controller.ts`,
    template: require('./templates/[name].controller.template').template,
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
