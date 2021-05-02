import { Validator } from '../../types/Validator.type'

const kebabCaseRegex = /^[a-z]+((-[a-z]+)+)?$/u

export const requireKebabCase = (errorMessage: string): Validator => {
  return (promptValue: string): string | null => {
    if (kebabCaseRegex.test(promptValue)) {
      return null
    }

    return errorMessage
  }
}
