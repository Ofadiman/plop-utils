const errorMessage = 'invalid input'

const testCases = [
  { expectedResult: errorMessage, string: 'posts' },
  { expectedResult: null, string: 'post' }
]

export const requireSingularFormTestUtils = {
  errorMessage,
  testCases
}
