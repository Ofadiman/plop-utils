import { camelCase } from 'change-case'
import { Answers } from 'inquirer'
import { ActionType } from 'plop'

import { plopGeneratorConstants } from './plop-generator.constants'

export const plopGeneratorActions: ActionType[] = [
  {
    path: `codegen/${plopGeneratorConstants.variables.handlebars.name.kebabCase}/${plopGeneratorConstants.variables.handlebars.name.kebabCase}.actions.ts`,
    template: require('./templates/[name].actions.template').template,
    type: 'add'
  },
  {
    path: `codegen/${plopGeneratorConstants.variables.handlebars.name.kebabCase}/${plopGeneratorConstants.variables.handlebars.name.kebabCase}.config.ts`,
    template: require('./templates/[name].config.template').template,
    type: 'add'
  },
  {
    path: `codegen/${plopGeneratorConstants.variables.handlebars.name.kebabCase}/${plopGeneratorConstants.variables.handlebars.name.kebabCase}.constants.ts`,
    template: require('./templates/[name].constants.template').template,
    type: 'add'
  },
  {
    path: `codegen/${plopGeneratorConstants.variables.handlebars.name.kebabCase}/templates/[name].template.ts`,
    template: require('./templates/[name].template').template,
    type: 'add'
  },
  {
    path: 'plopfile.ts',
    transform: (fileContent: string, answers: Answers): string => {
      const name = answers[plopGeneratorConstants.variables.base.name]
      const camelCaseName = camelCase(name)
      const plopExportRegex = /\nexport default function.*/u
      const generatorConstantsImport = `import { ${camelCaseName}Const } from './codegen/${name}/${name}.constants'`
      const generatorSetup = `plop.setGenerator(${camelCaseName}Const.generator.name, ${camelCaseName}Const.generator.config)`

      return fileContent.replace(plopExportRegex, (matched: string): string => {
        return `${generatorConstantsImport}\n${matched}\n  ${generatorSetup}`
      })
    },
    type: 'modify'
  }
]
