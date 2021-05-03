import { ActionType, PromptQuestion } from 'node-plop'

import { GeneratorConfig, getManyConstants, getOneConstant } from '../../src'

const base = {
  directory: 'directory',
  name: 'name'
} as const

export const generatorConstants = getManyConstants(base, {
  name: {
    lowerSentenceCase: getOneConstant(base.name, 'sentenceCase', 'lowerCase')
  }
})

export const generatorConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate the template for the generator provided in the library',
  prompts: [] as PromptQuestion[]
}
