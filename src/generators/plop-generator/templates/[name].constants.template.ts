import { plopGeneratorConstants } from '../plop-generator.constants'

export const template = `import { getManyConstants } from '@ofadiman/plop-utils'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const ${plopGeneratorConstants.variables.handlebars.name.camelCase}Constants = {
  name: '${plopGeneratorConstants.variables.handlebars.name.kebabCase}',
  variables: {
    base,
    handlebars
  }
}
`
