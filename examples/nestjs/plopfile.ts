import { setupPlop } from '@ofadiman/plop-utils'
import { NodePlopAPI } from 'plop'

import { dtoConfig } from './codegen/dto/dto.config'
import { dtoConstants } from './codegen/dto/dto.constants'
import { enumConfig } from './codegen/enum/enum.config'
import { enumConstants } from './codegen/enum/enum.constants'
import { exceptionConfig } from './codegen/exception/exception.config'
import { exceptionConstants } from './codegen/exception/exception.constants'
import { guardConfig } from './codegen/guard/guard.config'
import { guardConstants } from './codegen/guard/guard.constants'
import { nestModuleConfig } from './codegen/nest-module/nest-module.config'
import { nestModuleConstants } from './codegen/nest-module/nest-module.constants'
import { nestjsxCrudModuleConfig } from './codegen/nestjsx-crud-module/nestjsx-crud-module.config'
import { nestjsxCrudModuleConstants } from './codegen/nestjsx-crud-module/nestjsx-crud-module.constants'
import { typeConfig } from './codegen/type/type.config'
import { typeConstants } from './codegen/type/type.constants'

export default function plopGenerator(plop: NodePlopAPI): void {
  plop.setGenerator(nestjsxCrudModuleConstants.name, nestjsxCrudModuleConfig)
  plop.setGenerator(nestModuleConstants.name, nestModuleConfig)
  plop.setGenerator(guardConstants.name, guardConfig)
  plop.setGenerator(exceptionConstants.name, exceptionConfig)
  plop.setGenerator(enumConstants.name, enumConfig)
  plop.setGenerator(dtoConstants.name, dtoConfig)
  plop.setGenerator(typeConstants.name, typeConfig)
  setupPlop(plop)
}
