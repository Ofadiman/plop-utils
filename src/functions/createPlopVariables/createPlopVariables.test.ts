import { createPlopVariables } from './createPlopVariables'
import {
  createPlopVariablesCustomVariablesResult,
  createPlopVariablesDefaultResult,
  createPlopVariablesOptions,
  testCli
} from './createPlopVariables.test.utils'

describe('initPlopVariables function', () => {
  test('create plop variables', () => {
    const result = createPlopVariables(testCli)

    expect(result).toEqual(createPlopVariablesDefaultResult)
  })

  test('create plop variables with custom properties', () => {
    const result = createPlopVariables(testCli, createPlopVariablesOptions)

    expect(result).toEqual(createPlopVariablesCustomVariablesResult)
  })
})
