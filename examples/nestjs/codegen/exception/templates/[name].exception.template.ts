import { exceptionConstants } from '../exception.constants'

export const template = `import { HttpException } from '@nestjs/common'

export class ${exceptionConstants.variables.handlebars.name.pascalCase}Exception extends HttpException {
  public constructor() {
    super('${exceptionConstants.variables.handlebars.message.unmodified}', ${exceptionConstants.variables.handlebars.statusCode.unmodified})
  }
}
`
