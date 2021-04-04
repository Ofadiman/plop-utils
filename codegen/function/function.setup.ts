import { NodePlopAPI } from 'plop'

import { getFunctionActions } from './function.actions'
import { functionConfig } from './function.constants'
import { getFunctionPrompts } from './function.prompts'

export const setupFunctionCodegen = (plop: NodePlopAPI): void => {
  const prompts = getFunctionPrompts()
  const actions = getFunctionActions()

  functionConfig.prompts.push(prompts.name)
  functionConfig.actions.push(...Object.values(actions))

  plop.setGenerator('function', functionConfig)
}
