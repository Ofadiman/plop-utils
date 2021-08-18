const errorMessage = 'invalid input'

const testCases = [
  { expectedResult: null, string: 'use-valid-hook-name' },
  { expectedResult: errorMessage, string: 'use-' },
  { expectedResult: errorMessage, string: 'use-Not-Valid-Hook-Name' },
  { expectedResult: errorMessage, string: 'invaliduse-not-valid-hook-name' }
]

export const requireHookCaseTestUtils = {
  errorMessage,
  testCases
}
