import { nestModuleConstants } from '../nest-module.constants'

export const template = `import { Controller } from '@nestjs/common'

@Controller('${nestModuleConstants.variables.handlebars.name.kebabCase}')
export class ${nestModuleConstants.variables.handlebars.name.pascalCase}Controller {}
`
