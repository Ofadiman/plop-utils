import { getManyConstants } from '../../functions/getManyConstants/getManyConstants'
import { getOneConstant } from '../../functions/getOneConstant/getOneConstant'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base, {
  name: { lowerSentenceCase: getOneConstant(base.name, 'sentenceCase', 'lowerCase') }
})

export const plopGeneratorConstants = {
  name: 'plop-generator',
  variables: {
    base,
    handlebars
  }
}
