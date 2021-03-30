import { nestModuleConstants } from '../nest-module.constants'

export const template = `import { Test, TestingModule } from '@nestjs/testing'

import { ${nestModuleConstants.variables.handlebars.name.pascalCase}Controller } from './${nestModuleConstants.variables.handlebars.name.kebabCase}.controller'

describe('${nestModuleConstants.variables.handlebars.name.pascalCase}Controller', () => {
  let ${nestModuleConstants.variables.handlebars.name.camelCase}Controller: ${nestModuleConstants.variables.handlebars.name.pascalCase}Controller

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [${nestModuleConstants.variables.handlebars.name.pascalCase}Controller]
    }).compile()

    ${nestModuleConstants.variables.handlebars.name.camelCase}Controller = module.get<${nestModuleConstants.variables.handlebars.name.pascalCase}Controller>(${nestModuleConstants.variables.handlebars.name.pascalCase}Controller)
  })

  it('should be defined', () => {
    expect(${nestModuleConstants.variables.handlebars.name.camelCase}Controller).toBeDefined()
  })
})
`
