import { NodePlopAPI } from 'plop'

import { getTypeActions } from './type.actions'
import { config } from './type.constants'
import { getTypePrompts } from './type.prompts'

export const setupTypeCodegen = (plop: NodePlopAPI): void => {
  const prompts = getTypePrompts()
  const actions = getTypeActions()

  config.prompts.push(prompts.name)
  config.actions.push(...Object.values(actions))

  plop.setGenerator('type', config)
}
