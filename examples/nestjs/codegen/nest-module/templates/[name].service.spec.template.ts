import { nestModuleConstants } from '../nest-module.constants'

export const template = `import { Test, TestingModule } from '@nestjs/testing'

import { ${nestModuleConstants.variables.handlebars.name.pascalCase}Service } from './${nestModuleConstants.variables.handlebars.name.kebabCase}.service'

describe('${nestModuleConstants.variables.handlebars.name.pascalCase}Service', () => {
  let ${nestModuleConstants.variables.handlebars.name.camelCase}Service: ${nestModuleConstants.variables.handlebars.name.pascalCase}Service

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [${nestModuleConstants.variables.handlebars.name.pascalCase}Service]
    }).compile()

    ${nestModuleConstants.variables.handlebars.name.camelCase}Service = module.get<${nestModuleConstants.variables.handlebars.name.pascalCase}Service>(${nestModuleConstants.variables.handlebars.name.pascalCase}Service)
  })

  it('should be defined', () => {
    expect(${nestModuleConstants.variables.handlebars.name.camelCase}Service).toBeDefined()
  })
})
`
