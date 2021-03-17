import { Helpers } from '../../types/Helpers.type'

export const testCases = [
  { expectedResult: '{{ name }}', helpers: [], title: 'call "createPlopVariable" without helpers', variable: 'name' },
  {
    expectedResult: `{{ camelCase name }}`,
    helpers: ['camelCase'] as Helpers[],
    title: 'call "createPlopVariable" with 1 helper',
    variable: 'name'
  },
  {
    expectedResult: `{{ camelCase ( pascalCase ( dotCase name ) ) }}`,
    helpers: ['dotCase', 'pascalCase', 'camelCase'] as Helpers[],
    title: 'call "createPlopVariable" with many helpers',
    variable: 'name'
  }
]
