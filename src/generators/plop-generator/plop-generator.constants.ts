import { createPlopVariable } from '../../functions/createPlopVariable/createPlopVariable'
import { createPlopVariables } from '../../functions/createPlopVariables/createPlopVariables'
import { plopGeneratorConfig } from './plop-generator.config'

const base = {
  name: 'name'
} as const

const handlebars = createPlopVariables(base, {
  name: { lowerSentenceCase: createPlopVariable(base.name, 'sentenceCase', 'lowerCase') }
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
