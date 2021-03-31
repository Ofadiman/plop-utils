import { functionConstants } from '../function.constants'

export const template = `import { ${functionConstants.variables.handlebars.name.camelCase} } from './${functionConstants.variables.handlebars.name.camelCase}'

describe('${functionConstants.variables.handlebars.name.camelCase} function', () => {
  test('should be defined', () => {
    expect(${functionConstants.variables.handlebars.name.camelCase}).toBeDefined()
  })
})
`
