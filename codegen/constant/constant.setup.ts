import { NodePlopAPI } from 'plop'

import { getConstantActions } from './constant.actions'
import { config } from './constant.constants'
import { getConstantPrompts } from './constant.prompts'

export const setupConstantCodegen = (plop: NodePlopAPI): void => {
  const prompts = getConstantPrompts()
  const actions = getConstantActions()

  config.prompts.push(prompts.name)
  config.actions.push(...Object.values(actions))

  plop.setGenerator('constant', config)
}
