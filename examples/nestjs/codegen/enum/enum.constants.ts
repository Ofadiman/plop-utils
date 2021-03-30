import { getManyConstants } from '@ofadiman/plop-utils'

const base = {
  moduleName: 'moduleName',
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const enumConstants = {
  name: 'enum',
  variables: {
    base,
    handlebars
  }
}
