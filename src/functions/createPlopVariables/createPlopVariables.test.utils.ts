import { createPlopVariable } from '../createPlopVariable/createPlopVariable'

export const testCli = {
  name: 'name'
} as const

export const createPlopVariablesDefaultResult = {
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

export const createPlopVariablesOptions = {
  name: { superCase: createPlopVariable('test', 'pascalCase', 'sentenceCase') }
}

export const createPlopVariablesCustomVariablesResult = {
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
