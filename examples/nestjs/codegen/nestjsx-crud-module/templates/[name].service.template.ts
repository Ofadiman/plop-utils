import { nestjsxCrudModuleConstants } from '../nestjsx-crud-module.constants'

export const template = `import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'
import { Repository } from 'typeorm'

import { ${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase} } from './${nestjsxCrudModuleConstants.variables.handlebars.name.singularKebabCase}.entity'

@Injectable()
export class ${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Service extends TypeOrmCrudService<${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase}> {
  public constructor(@InjectRepository(${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase}) ${nestjsxCrudModuleConstants.variables.handlebars.name.camelCase}Repository: Repository<${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase}>) {
    super(${nestjsxCrudModuleConstants.variables.handlebars.name.camelCase}Repository)
  }
}
`
