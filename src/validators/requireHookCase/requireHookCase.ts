import { Validator } from '../../types/Validator.type'

const hookRegex = /^use(-([a-z]+))+$/u

export const requireHookCase = (errorMessage: string): Validator => {
  return (promptValue: string): string | null => {
    if (hookRegex.test(promptValue)) {
      return null
    }

    return errorMessage
  }
}
