import { command } from 'execa'
import mockConsole from 'jest-mock-console'
import ora from 'ora'

import { CODEGEN_FAIL, CODEGEN_SUCCESS } from '../../constants/prefixes'
import { runEslint } from './runEslint'
import { eslintError, fileToLint, oraReturnValue } from './runEslint.test.utils'

jest.mock('ora', () => ({
  __esModule: true,
  ...jest.requireActual('ora'),
  default: jest.fn().mockName('oraMock')
}))

jest.mock('execa', () => ({
  ...jest.requireActual('execa'),
  command: jest.fn().mockName('commandMock')
}))

describe('runEslint function', () => {
  const oraMock: jest.Mock = (ora as unknown) as jest.Mock
  const commandMock: jest.Mock = (command as unknown) as jest.Mock
  let resetConsole: ReturnType<typeof mockConsole>

  beforeAll(() => {
    resetConsole = mockConsole()
  })

  afterEach(() => {
    commandMock.mockReset()
    oraMock.mockReset()
    oraReturnValue.start.mockReset()
    oraReturnValue.stop.mockReset()
  })

  afterAll(() => {
    commandMock.mockRestore()
    oraMock.mockRestore()
    resetConsole()
  })

  test('should successfully execute `eslint --fix` command on passed files', async () => {
    oraMock.mockImplementationOnce(() => oraReturnValue)

    const output = await runEslint(fileToLint)()

    expect(commandMock).toHaveBeenCalledWith(`eslint --fix ${fileToLint}`)
    expect(oraMock).toHaveBeenCalledTimes(1)
    expect(oraReturnValue.start).toHaveBeenCalledTimes(1)
    expect(oraReturnValue.stop).toHaveBeenCalledTimes(1)
    expect(output).toMatch(CODEGEN_SUCCESS)
  })

  test('should handle error during `eslint --fix` command', async () => {
    oraMock.mockImplementationOnce(() => oraReturnValue)
    commandMock.mockImplementationOnce(async () => {
      throw eslintError
    })

    const output = await runEslint(fileToLint)()

    expect(commandMock).toHaveBeenCalledWith(`eslint --fix ${fileToLint}`)
    expect(console.error).toHaveBeenCalledWith(eslintError)
    expect(oraMock).toHaveBeenCalledTimes(1)
    expect(oraReturnValue.start).toHaveBeenCalledTimes(1)
    expect(oraReturnValue.stop).toHaveBeenCalledTimes(1)
    expect(output).toMatch(CODEGEN_FAIL)
  })
})
