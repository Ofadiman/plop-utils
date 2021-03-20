import { getOneConstant } from '../getOneConstant/getOneConstant'

export const testBase = {
  name: 'name'
} as const

export const defaultResult = {
  name: {
    camelCase: '{{ camelCase name }}',
    constantCase: '{{ constantCase name }}',
    dotCase: '{{ dotCase name }}',
    kebabCase: '{{ kebabCase name }}',
    lowerCase: '{{ lowerCase name }}',
    pascalCase: '{{ pascalCase name }}',
    pathCase: '{{ pathCase name }}',
    plural: '{{ plural name }}',
    sentenceCase: '{{ sentenceCase name }}',
    singular: '{{ singular name }}',
    snakeCase: '{{ snakeCase name }}',
    titleCase: '{{ titleCase name }}',
    unmodified: '{{ name }}'
  }
}

export const additionalConstants = {
  name: { superCase: getOneConstant('test', 'pascalCase', 'sentenceCase') }
}

export const additionalConstantsResult = {
  name: {
    camelCase: '{{ camelCase name }}',
    constantCase: '{{ constantCase name }}',
    dotCase: '{{ dotCase name }}',
    kebabCase: '{{ kebabCase name }}',
    lowerCase: '{{ lowerCase name }}',
    pascalCase: '{{ pascalCase name }}',
    pathCase: '{{ pathCase name }}',
    plural: '{{ plural name }}',
    sentenceCase: '{{ sentenceCase name }}',
    singular: '{{ singular name }}',
    snakeCase: '{{ snakeCase name }}',
    superCase: '{{ sentenceCase ( pascalCase test ) }}',
    titleCase: '{{ titleCase name }}',
    unmodified: '{{ name }}'
  }
}
