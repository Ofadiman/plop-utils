const errorMessage = 'invalid input'

const testCases = [
  { expectedResult: null, string: 'valid' },
  { expectedResult: null, string: 'valid-kebab' },
  { expectedResult: null, string: 'valid-very-long-kebab-case-string' },
  { expectedResult: errorMessage, string: '-invalid-hyphen-at-start' },
  { expectedResult: errorMessage, string: 'invalid-hyphen-at-end-' },
  { expectedResult: errorMessage, string: 'Big-Letters' },
  { expectedResult: errorMessage, string: 'PascalCaseString' },
  { expectedResult: errorMessage, string: 'camelCaseString' },
  { expectedResult: errorMessage, string: 'invalid-end-hyphen-' },
  { expectedResult: errorMessage, string: 'snake_case_string' }
]

export const requireKebabCaseTestUtils = {
  errorMessage,
  testCases
}
