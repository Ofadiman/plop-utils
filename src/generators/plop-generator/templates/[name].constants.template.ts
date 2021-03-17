import { plopGeneratorConstants } from '../plop-generator.constants'

export const template = `import { createPlopVariables } from '@ofadiman/plop-utils'

import { ${plopGeneratorConstants.variables.handlebars.name.camelCase}Config } from './${plopGeneratorConstants.variables.handlebars.name.kebabCase}.config'

const base = {
  name: 'name'
} as const

const handlebars = createPlopVariables(base)

export const ${plopGeneratorConstants.variables.handlebars.name.camelCase}Const = {
  generator: {
    config: ${plopGeneratorConstants.variables.handlebars.name.camelCase}Config,
    name: '${plopGeneratorConstants.variables.handlebars.name.kebabCase}'
  },
  variables: {
    base,
    handlebars
  }
}
`
