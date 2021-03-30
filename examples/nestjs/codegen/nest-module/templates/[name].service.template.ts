import { nestModuleConstants } from '../nest-module.constants'

export const template = `import { Injectable } from '@nestjs/common'

@Injectable()
export class ${nestModuleConstants.variables.handlebars.name.pascalCase}Service {}
`
