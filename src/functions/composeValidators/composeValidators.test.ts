import * as requireInputModule from '../requireInput/requireInput'
import * as requiredKebabCaseModule from '../requireKebabCase/requireKebabCase'
import { composeValidators } from './composeValidators'
import {
  firstErrorMessage,
  firstValidator,
  promptValue,
  secondErrorMessage,
  secondValidator,
  thirdValidator
} from './composeValidators.test.utils'

describe('composeValidators function', () => {
  test('should call all passed validators', () => {
    composeValidators(firstValidator, secondValidator, thirdValidator)(promptValue)

    expect(firstValidator).toHaveBeenCalledTimes(1)
    expect(secondValidator).toHaveBeenCalledTimes(1)
    expect(thirdValidator).toHaveBeenCalledTimes(1)
  })

  test('should call default validators when called without arguments', () => {
    const requireInputMock = jest.fn().mockName('requireInputMock')
    const requiredKebabCaseMock = jest.fn().mockName('requiredKebabCaseMock')
    const requireInputSpy = jest
      .spyOn(requireInputModule, 'requireInput')
      .mockImplementationOnce(() => requireInputMock)
    const requireKebabCaseSpy = jest
      .spyOn(requiredKebabCaseModule, 'requireKebabCase')
      .mockImplementationOnce(() => requiredKebabCaseMock)

    composeValidators()(promptValue)

    expect(requireInputMock).toHaveBeenCalledTimes(1)
    expect(requiredKebabCaseMock).toHaveBeenCalledTimes(1)

    requireInputSpy.mockRestore()
    requireKebabCaseSpy.mockRestore()
  })

  test('should return first error message when validation fails more than once', () => {
    firstValidator.mockImplementationOnce(() => null)
    secondValidator.mockImplementationOnce(() => firstErrorMessage)
    thirdValidator.mockImplementationOnce(() => secondErrorMessage)

    const result = composeValidators(firstValidator, secondValidator, thirdValidator)(promptValue)

    expect(result).toEqual(firstErrorMessage)
  })

  test('should return "true" when all validators pass', () => {
    firstValidator.mockImplementationOnce(() => null)
    secondValidator.mockImplementationOnce(() => null)
    thirdValidator.mockImplementationOnce(() => null)

    const result = composeValidators(firstValidator, secondValidator, thirdValidator)(promptValue)

    expect(result).toEqual(true)
  })
})
