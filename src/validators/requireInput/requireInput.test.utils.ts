const errorMessage = 'invalid input'

const testCases = [
  { expectedResult: null, string: 'valid string' },
  { expectedResult: errorMessage, string: '' }
]

export const requireInputTestUtils = {
  errorMessage,
  testCases
}
