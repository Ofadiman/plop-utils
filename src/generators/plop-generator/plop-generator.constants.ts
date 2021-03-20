import { getManyConstants } from '../../functions/getManyConstants/getManyConstants'
import { getOneConstant } from '../../functions/getOneConstant/getOneConstant'
import { plopGeneratorConfig } from './plop-generator.config'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base, {
  name: { lowerSentenceCase: getOneConstant(base.name, 'sentenceCase', 'lowerCase') }
})

export const plopGeneratorConstants = {
  generator: {
    config: plopGeneratorConfig,
    name: 'plop-generator'
  },
  variables: {
    base,
    handlebars
  }
}
