import { NodePlopAPI } from 'plop'

import { getCustomGeneratorActions } from './custom-generator.actions'
import { config } from './custom-generator.constants'
import { getCustomGeneratorPrompts } from './custom-generator.prompts'

export const setupCustomGenerator = (plop: NodePlopAPI): void => {
  const prompts = getCustomGeneratorPrompts()
  const actions = getCustomGeneratorActions()

  config.prompts.push(...Object.values(prompts))
  config.actions.push(...Object.values(actions))

  plop.setGenerator('custom-generator', config)
}
