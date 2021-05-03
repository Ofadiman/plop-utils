import { PromptQuestion } from 'node-plop'
import { ActionType } from 'plop'

import { getManyConstants } from '../../../functions/getManyConstants/getManyConstants'
import { GeneratorConfig } from '../../../types/GeneratorConfig.type'
import { Component } from './component.types'

const base = {
  name: 'name'
} as const

export const componentConstants = getManyConstants(base)

export const componentConfig: GeneratorConfig = {
  actions: [] as ActionType[],
  description: 'Generate a React component.',
  prompts: [] as PromptQuestion[]
}

export const defaultComponentOptions: Required<Component> = {
  css: 'material-ui',
  generatorName: 'component',
  language: 'typescript',
  stories: true,
  tests: true
}
