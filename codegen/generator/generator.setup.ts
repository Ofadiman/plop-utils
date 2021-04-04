import { NodePlopAPI } from 'plop'

import { getGeneratorActions } from './generator.actions'
import { generatorConfig } from './generator.constants'
import { getGeneratorPrompts } from './generator.prompts'

export const setupGeneratorCodegen = (plop: NodePlopAPI): void => {
  const prompts = getGeneratorPrompts()
  const actions = getGeneratorActions()

  generatorConfig.prompts.push(...Object.values(prompts))
  generatorConfig.actions.push(...Object.values(actions))

  plop.setGenerator('generator', generatorConfig)
}
