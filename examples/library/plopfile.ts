import { setupPlop } from '@ofadiman/plop-utils'
import { NodePlopAPI } from 'plop'

import { enumConfig } from './codegen/enum/enum.config'
import { enumConstants } from './codegen/enum/enum.constants'
import { functionConfig } from './codegen/function/function.config'
import { functionConstants } from './codegen/function/function.constants'

export default function plopGenerator(plop: NodePlopAPI): void {
  plop.setGenerator(enumConstants.name, enumConfig)
  plop.setGenerator(functionConstants.name, functionConfig)
  setupPlop(plop)
}
