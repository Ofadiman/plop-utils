import { constantConstants } from '../constant.constants'

const { handlebars } = constantConstants

export const template = `export const ${handlebars.name.constantCase} = {} as const
`
