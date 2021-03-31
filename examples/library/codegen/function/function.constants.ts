import { getManyConstants } from '@ofadiman/plop-utils'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const functionConstants = {
  name: 'function',
  variables: {
    base,
    handlebars
  }
}
