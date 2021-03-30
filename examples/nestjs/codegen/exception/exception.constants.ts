import { getManyConstants } from '@ofadiman/plop-utils'

const base = {
  message: 'message',
  moduleName: 'moduleName',
  name: 'name',
  statusCode: 'statusCode'
} as const

const handlebars = getManyConstants(base)

export const exceptionConstants = {
  name: 'exception',
  variables: {
    base,
    handlebars
  }
}
