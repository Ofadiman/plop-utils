import { guardConstants } from '../guard.constants'

export const template = `export const ${guardConstants.variables.handlebars.name.pascalCase}Guard = (value: unknown): value is unknown => {
  return true
}
`
