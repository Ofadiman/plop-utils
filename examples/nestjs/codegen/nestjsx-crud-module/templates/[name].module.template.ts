import { nestjsxCrudModuleConstants } from '../nestjsx-crud-module.constants'

export const template = `import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase} } from './${nestjsxCrudModuleConstants.variables.handlebars.name.singularKebabCase}.entity'
import { ${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Controller } from './${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}.controller'
import { ${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Service } from './${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}.service'

@Module({
  controllers: [${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Controller],
  exports: [${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Service],
  imports: [TypeOrmModule.forFeature([${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase}])],
  providers: [${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Service]
})
export class ${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Module {}
`
