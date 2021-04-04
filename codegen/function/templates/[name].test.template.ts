import { functionConstants } from '../function.constants'

const { handlebars } = functionConstants

export const template = `import { ${handlebars.name.camelCase} } from './${handlebars.name.camelCase}'

describe('${handlebars.name.camelCase} function', () => {
  test('should be defined', () => {
    expect(${handlebars.name.camelCase}).toBeDefined()
  })
})
`
