export const errorMessage = 'invalid input'

export const testCases = [
  { expectedResult: errorMessage, string: '-invalid-hyphen' },
  { expectedResult: errorMessage, string: 'Big-Letters' },
  { expectedResult: errorMessage, string: 'PascalCaseString' },
  { expectedResult: errorMessage, string: 'camelCaseString' },
  { expectedResult: errorMessage, string: 'invalid-end-hyphen-' },
  { expectedResult: errorMessage, string: 'snake_case_string' },
  { expectedResult: null, string: 'valid' },
  { expectedResult: null, string: 'valid-kebab' },
  { expectedResult: null, string: 'valid-very-long-kebab-case-string' }
]
