import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'
import { DeepRequired } from 'utility-types'

import { getManyConstants } from '../../../functions/getManyConstants/getManyConstants'
import { getOneConstant } from '../../../functions/getOneConstant/getOneConstant'
import { GeneratorConfig } from '../../../types/GeneratorConfig.type'
import { Generator } from './generator.types'

const base = {
  description: 'description',
  name: 'name'
} as const

export const generatorConstants = getManyConstants(base, {
  name: { lowerSentenceCase: getOneConstant(base.name, 'sentenceCase', 'lowerCase') }
})

export const customGeneratorConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a plop generator.',
  prompts: [] as PromptQuestion[]
}

export const defaultOptions: DeepRequired<Generator> = {
  generatorName: 'generator'
}
