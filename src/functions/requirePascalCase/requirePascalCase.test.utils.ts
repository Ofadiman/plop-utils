export const errorMessage = 'invalid input'

export const testCases = [
  { expectedResult: errorMessage, string: 'camelCaseString' },
  { expectedResult: errorMessage, string: 'kebab-case-string' },
  { expectedResult: errorMessage, string: 'snake_case_string' },
  { expectedResult: null, string: 'PascalCaseString' }
]
