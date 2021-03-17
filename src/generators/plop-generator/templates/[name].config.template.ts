import { plopGeneratorConstants } from '../plop-generator.constants'

export const template = `import { composeValidators, GeneratorConfig } from '@ofadiman/plop-utils'

import { ${plopGeneratorConstants.variables.handlebars.name.camelCase}Actions } from './${plopGeneratorConstants.variables.handlebars.name.kebabCase}.actions'
import { ${plopGeneratorConstants.variables.handlebars.name.camelCase}Const } from './${plopGeneratorConstants.variables.handlebars.name.kebabCase}.constants'

export const ${plopGeneratorConstants.variables.handlebars.name.camelCase}Config: GeneratorConfig = {
  actions: ${plopGeneratorConstants.variables.handlebars.name.camelCase}Actions,
  description: 'Generate a/an ${plopGeneratorConstants.variables.handlebars.name.lowerSentenceCase}.',
  prompts: [
    {
      message: '${plopGeneratorConstants.variables.handlebars.name.sentenceCase} name:',
      name: ${plopGeneratorConstants.variables.handlebars.name.camelCase}Const.variables.base.name,
      type: 'input',
      validate: composeValidators()
    }
  ]
}
`
