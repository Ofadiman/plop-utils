import { NodePlopAPI } from 'plop'

import { setupConstantCodegen } from './codegen/constant/constant.setup'
import { setupFunctionCodegen } from './codegen/function/function.setup'
import { setupGeneratorCodegen } from './codegen/generator/generator.setup'
import { setupTypeCodegen } from './codegen/type/type.setup'
import { setupPlop } from './src'

export default function plopGenerator(plop: NodePlopAPI): void {
  setupPlop(plop)
  setupGeneratorCodegen(plop)
  setupConstantCodegen(plop)
  setupTypeCodegen(plop)
  setupFunctionCodegen(plop)
}
