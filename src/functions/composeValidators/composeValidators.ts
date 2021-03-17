import { Validator } from '../../types/Validator.type'
import { requireInput } from '../requireInput/requireInput'
import { requireKebabCase } from '../requireKebabCase/requireKebabCase'

const validateInput = (validators: Validator[], value: string): boolean | string => {
  const errors = validators.reduce<string[]>((accumulator, validator) => {
    const result = validator(value)

    if (result !== null) {
      accumulator.push(result)
    }

    return accumulator
  }, [])

  return errors.length > 0 ? errors[0] : true
}

export const composeValidators = (...validators: Validator[]) => {
  return (promptValue: string): boolean | string => {
    if (validators.length === 0) {
      return validateInput(
        [requireInput('Field name is required!'), requireKebabCase('Field name must be in kebab case!')],
        promptValue
      )
    }

    return validateInput(validators, promptValue)
  }
}
