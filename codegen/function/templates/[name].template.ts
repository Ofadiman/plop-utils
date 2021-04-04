import { functionConstants } from '../function.constants'

const { handlebars } = functionConstants

export const template = `import { Options, Result } from './${handlebars.name.camelCase}.types'

export const ${handlebars.name.camelCase} = (options: Options): Result => {}
`
