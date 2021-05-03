import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'
import { DeepRequired } from 'utility-types'

import { getManyConstants } from '../../../functions/getManyConstants/getManyConstants'
import { GeneratorConfig } from '../../../types/GeneratorConfig.type'
import { Container } from './container.types'

const base = {
  name: 'name'
} as const

export const containerConstants = getManyConstants(base)

export const containerConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a React container.',
  prompts: [] as PromptQuestion[]
}

export const defaultOptions: DeepRequired<Container> = {
  generatorName: 'container',
  language: 'typescript',
  tests: true
}
