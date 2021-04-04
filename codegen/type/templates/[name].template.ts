import { typeConstants } from '../type.constants'

const { handlebars } = typeConstants

export const template = `export type ${handlebars.name.pascalCase} = {}
`
