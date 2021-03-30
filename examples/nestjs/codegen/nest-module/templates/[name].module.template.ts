import { nestModuleConstants } from '../nest-module.constants'

export const template = `import { Module } from '@nestjs/common'

import { ${nestModuleConstants.variables.handlebars.name.pascalCase}Controller } from './${nestModuleConstants.variables.handlebars.name.kebabCase}.controller'
import { ${nestModuleConstants.variables.handlebars.name.pascalCase}Service } from './${nestModuleConstants.variables.handlebars.name.kebabCase}.service'

@Module({
  controllers: [${nestModuleConstants.variables.handlebars.name.pascalCase}Controller],
  exports: [${nestModuleConstants.variables.handlebars.name.pascalCase}Service],
  providers: [${nestModuleConstants.variables.handlebars.name.pascalCase}Service]
})
export class ${nestModuleConstants.variables.handlebars.name.pascalCase}Module {}
`
