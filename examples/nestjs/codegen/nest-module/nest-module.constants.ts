import { getManyConstants } from '@ofadiman/plop-utils'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base)

export const nestModuleConstants = {
  name: 'nest-module',
  variables: {
    base,
    handlebars
  }
}
