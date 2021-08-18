import * as requireInputModule from '../../validators/requireInput/requireInput'
import * as requiredKebabCaseModule from '../../validators/requireKebabCase/requireKebabCase'
import { composeValidators } from './composeValidators'
import { composeValidatorsTestUtils as t } from './composeValidators.test.utils'

describe('composeValidators function', () => {
  test('should call all passed validators', () => {
    composeValidators(t.firstValidator, t.secondValidator, t.thirdValidator)(t.promptValue)

    expect(t.firstValidator).toHaveBeenCalledTimes(1)
    expect(t.secondValidator).toHaveBeenCalledTimes(1)
    expect(t.thirdValidator).toHaveBeenCalledTimes(1)
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

    composeValidators()(t.promptValue)

    expect(requireInputMock).toHaveBeenCalledTimes(1)
    expect(requiredKebabCaseMock).toHaveBeenCalledTimes(1)

    requireInputSpy.mockRestore()
    requireKebabCaseSpy.mockRestore()
  })

  test('should return first error message when validation fails more than once', () => {
    t.firstValidator.mockImplementationOnce(() => null)
    t.secondValidator.mockImplementationOnce(() => t.firstErrorMessage)
    t.thirdValidator.mockImplementationOnce(() => t.secondErrorMessage)

    const result = composeValidators(t.firstValidator, t.secondValidator, t.thirdValidator)(t.promptValue)

    expect(result).toEqual(t.firstErrorMessage)
  })

  test('should return "true" when all validators pass', () => {
    t.firstValidator.mockImplementationOnce(() => null)
    t.secondValidator.mockImplementationOnce(() => null)
    t.thirdValidator.mockImplementationOnce(() => null)

    const result = composeValidators(t.firstValidator, t.secondValidator, t.thirdValidator)(t.promptValue)

    expect(result).toEqual(true)
  })
})
