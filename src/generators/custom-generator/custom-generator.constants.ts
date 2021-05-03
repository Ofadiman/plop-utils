import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

import { getManyConstants } from '../../functions/getManyConstants/getManyConstants'
import { getOneConstant } from '../../functions/getOneConstant/getOneConstant'
import { GeneratorConfig } from '../../types/GeneratorConfig.type'

const base = {
  description: 'description',
  name: 'name'
} as const

export const customGeneratorConstants = getManyConstants(base, {
  name: { lowerSentenceCase: getOneConstant(base.name, 'sentenceCase', 'lowerCase') }
})

export const customGeneratorConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a custom generator.',
  prompts: [] as PromptQuestion[]
}
