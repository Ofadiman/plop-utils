import { merge } from 'lodash'

import { createPlopVariable } from '../createPlopVariable/createPlopVariable'
import { PlopVariables } from './createPlopVariables.types'

export const createPlopVariables = <
  Variables extends { [Key: string]: string },
  VariablesValues extends Variables[keyof Variables][],
  AdditionalVariables extends { [Key in keyof Variables]?: Record<string, string> }
>(
  variables: Variables,
  additionalVariables?: AdditionalVariables
): AdditionalVariables & PlopVariables<Variables> => {
  const initialAccumulator = {} as PlopVariables<Variables>

  const basePlopVariables = (Object.values(variables) as VariablesValues).reduce((accumulator, value) => {
    accumulator[value] = {
      camelCase: createPlopVariable(value, 'camelCase'),
      constantCase: createPlopVariable(value, 'constantCase'),
      dotCase: createPlopVariable(value, 'dotCase'),
      kebabCase: createPlopVariable(value, 'kebabCase'),
      lowerCase: createPlopVariable(value, 'lowerCase'),
      pascalCase: createPlopVariable(value, 'pascalCase'),
      pathCase: createPlopVariable(value, 'pathCase'),
      plural: createPlopVariable(value, 'plural'),
      sentenceCase: createPlopVariable(value, 'sentenceCase'),
      singular: createPlopVariable(value, 'singular'),
      snakeCase: createPlopVariable(value, 'snakeCase'),
      titleCase: createPlopVariable(value, 'titleCase'),
      unmodified: createPlopVariable(value)
    }

    return accumulator
  }, initialAccumulator)

  return merge(basePlopVariables, additionalVariables)
}
