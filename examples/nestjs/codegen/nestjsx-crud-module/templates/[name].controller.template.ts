import { nestjsxCrudModuleConstants } from '../nestjsx-crud-module.constants'

export const template = `import { Controller } from '@nestjs/common'
import { Crud, CrudController } from '@nestjsx/crud'

import { ${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase} } from './${nestjsxCrudModuleConstants.variables.handlebars.name.singularKebabCase}.entity'
import { ${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Service } from './${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}.service'

@Controller('${nestjsxCrudModuleConstants.variables.handlebars.name.kebabCase}')
@Crud({
  model: {
    type: ${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase}
  }
})
export class ${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Controller implements CrudController<${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase}> {
  public constructor(public readonly service: ${nestjsxCrudModuleConstants.variables.handlebars.name.pascalCase}Service) {}
}
`
