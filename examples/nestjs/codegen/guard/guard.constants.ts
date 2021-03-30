import { getManyConstants } from '@ofadiman/plop-utils'

const base = {
  moduleName: 'moduleName',
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const guardConstants = {
  name: 'guard',
  variables: {
    base,
    handlebars
  }
}
