import { getManyConstants } from '@ofadiman/plop-utils'

const base = {
  moduleName: 'moduleName',
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const dtoConstants = {
  name: 'dto',
  variables: {
    base,
    handlebars
  }
}
