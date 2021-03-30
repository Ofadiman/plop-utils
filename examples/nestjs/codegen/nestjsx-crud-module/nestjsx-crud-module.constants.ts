import { getManyConstants, getOneConstant } from '@ofadiman/plop-utils'

const base = {
  name: 'name'
} as const

const handlebars = getManyConstants(base, {
  name: {
    singularKebabCase: getOneConstant(base.name, 'singular', 'kebabCase'),
    singularPascalCase: getOneConstant(base.name, 'singular', 'pascalCase'),
    singularSnakeCase: getOneConstant(base.name, 'singular', 'snakeCase')
  }
})

export const nestjsxCrudModuleConstants = {
  name: 'nestjsx-crud-module',
  variables: {
    base,
    handlebars
  }
}
