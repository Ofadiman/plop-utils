import { merge } from 'lodash'

import { getOneConstant } from '../getOneConstant/getOneConstant'
import { PlopConstants } from './getManyConstants.types'

export const getManyConstants = <
  BaseConstants extends Record<string, string>,
  AdditionalConstants extends { [Key in keyof BaseConstants]?: Record<string, string> }
>(
  baseConstants: BaseConstants,
  additionalConstants?: AdditionalConstants
): AdditionalConstants & PlopConstants<BaseConstants> => {
  const plopConstants = (Object.values(baseConstants) as BaseConstants[keyof BaseConstants][]).reduce(
    (accumulator, value) => {
      accumulator[value] = {
        camelCase: getOneConstant(value, 'camelCase'),
        constantCase: getOneConstant(value, 'constantCase'),
        dotCase: getOneConstant(value, 'dotCase'),
        kebabCase: getOneConstant(value, 'kebabCase'),
        lowerCase: getOneConstant(value, 'lowerCase'),
        pascalCase: getOneConstant(value, 'pascalCase'),
        pathCase: getOneConstant(value, 'pathCase'),
        plural: getOneConstant(value, 'plural'),
        sentenceCase: getOneConstant(value, 'sentenceCase'),
        singular: getOneConstant(value, 'singular'),
        snakeCase: getOneConstant(value, 'snakeCase'),
        titleCase: getOneConstant(value, 'titleCase'),
        unmodified: getOneConstant(value)
      }

      return accumulator
    },
    {} as PlopConstants<BaseConstants>
  )

  return merge(plopConstants, additionalConstants)
}
