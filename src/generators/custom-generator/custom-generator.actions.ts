import { pascalCase } from 'change-case'
import { Answers } from 'inquirer'

import { customGeneratorConstants } from './custom-generator.constants'
import { GetCustomGeneratorActionsReturn } from './custom-generator.types'

const { handlebars, base } = customGeneratorConstants

export const getCustomGeneratorActions = (): GetCustomGeneratorActionsReturn => {
  return {
    actions: {
      path: `codegen/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.actions.ts`,
      template: require('./templates/[name].actions.template').template,
      type: 'add'
    },
    constants: {
      path: `codegen/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.constants.ts`,
      template: require('./templates/[name].constants.template').template,
      type: 'add'
    },
    modifyPlopfile: {
      path: 'plopfile.ts',
      transform: (fileContent: string, answers: Answers): string => {
        const name = answers[base.name]
        const pascalCaseName = pascalCase(name)
        const lineEndRegex = /^\}/mu
        const exportPlopRegex = /export/u
        const importSetupFunction = `import { setup${pascalCaseName} } from './codegen/${name}/${name}.setup'`
        const setupGenerator = `setup${pascalCaseName}(plop)`

        const fileContentWithNewGenerator = fileContent.replace(lineEndRegex, (matched: string): string => {
          return `  ${setupGenerator}\n${matched}`
        })

        return fileContentWithNewGenerator.replace(exportPlopRegex, (matched: string): string => {
          return `${importSetupFunction}\n\n${matched}`
        })
      },
      type: 'modify'
    },
    prompts: {
      path: `codegen/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.prompts.ts`,
      template: require('./templates/[name].prompts.template').template,
      type: 'add'
    },
    setup: {
      path: `codegen/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.setup.ts`,
      template: require('./templates/[name].setup.template').template,
      type: 'add'
    },
    template: {
      path: `codegen/${handlebars.name.kebabCase}/templates/[name].template.ts`,
      template: require('./templates/[name].template').template,
      type: 'add'
    },
    types: {
      path: `codegen/${handlebars.name.kebabCase}/${handlebars.name.kebabCase}.types.ts`,
      template: require('./templates/[name].types.template').template,
      type: 'add'
    }
  }
}
