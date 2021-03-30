export const oraReturnValue = {
  start: jest.fn().mockName('startMock'),
  stop: jest.fn().mockName('stopMock')
}

export const fileToLint = 'src/file.ts'

export const eslintError = new Error('eslint error')
