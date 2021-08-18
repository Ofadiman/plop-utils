const errorMessage = 'invalid input'

const testCases = [
  { expectedResult: null, string: 'users' },
  { expectedResult: errorMessage, string: 'user' }
]

export const requirePluralFormTestUtils = {
  errorMessage,
  testCases
}
