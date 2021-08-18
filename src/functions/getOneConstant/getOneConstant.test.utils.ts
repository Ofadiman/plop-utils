import { Helpers } from '../../types/Helpers.type'

export const testCases = [
  { expectedResult: '{{ name }}', helpers: [], title: 'call "getOneConstant" without helpers', variable: 'name' },
  {
    expectedResult: `{{ camelCase name }}`,
    helpers: ['camelCase'] as Helpers[],
    title: 'call "getOneConstant" with 1 helper',
    variable: 'name'
  },
  {
    expectedResult: `{{ camelCase ( pascalCase ( dotCase name ) ) }}`,
    helpers: ['dotCase', 'pascalCase', 'camelCase'] as Helpers[],
    title: 'call "getOneConstant" with many helpers',
    variable: 'name'
  }
]

export const getOneConstantTestUtils = { testCases }
