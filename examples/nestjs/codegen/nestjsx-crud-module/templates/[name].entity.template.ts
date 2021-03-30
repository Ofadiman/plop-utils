import { nestjsxCrudModuleConstants } from '../nestjsx-crud-module.constants'

export const template = `import { Entity } from 'typeorm'

@Entity({ name: '${nestjsxCrudModuleConstants.variables.handlebars.name.snakeCase}' })
export class ${nestjsxCrudModuleConstants.variables.handlebars.name.singularPascalCase} {}
`
