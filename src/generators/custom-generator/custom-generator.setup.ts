import { NodePlopAPI } from 'plop'

import { getCustomGeneratorActions } from './custom-generator.actions'
import { customGeneratorConfig } from './custom-generator.constants'
import { getCustomGeneratorPrompts } from './custom-generator.prompts'

export const setupCustomGeneratorCodegen = (plop: NodePlopAPI, options: boolean | undefined): void => {
  if (!options) {
    return
  }

  const prompts = getCustomGeneratorPrompts()
  const actions = getCustomGeneratorActions()

  customGeneratorConfig.prompts.push(prompts.name, prompts.description)
  customGeneratorConfig.actions.push(...Object.values(actions))

  plop.setGenerator('custom-generator', customGeneratorConfig)
}
