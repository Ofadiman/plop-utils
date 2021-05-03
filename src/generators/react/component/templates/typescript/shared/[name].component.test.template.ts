import { componentConstants } from '../../../component.constants'

const { handlebars } = componentConstants

export const template = `import { ${handlebars.name.pascalCase} } from './${handlebars.name.pascalCase}.component'

describe('${handlebars.name.pascalCase} component', () => {
  test('should be defined', () => {
    expect(${handlebars.name.pascalCase}).toBeDefined()
  })
})
`
