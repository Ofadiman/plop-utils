import { containerConstants } from '../../container.constants'

const { handlebars } = containerConstants

export const template = `import { ${handlebars.name.pascalCase}Container } from './${handlebars.name.pascalCase}.container'

describe('${handlebars.name.pascalCase} container', () => {
  test('should be defined', () => {
    expect(${handlebars.name.pascalCase}Container).toBeDefined()
  })
})
`
