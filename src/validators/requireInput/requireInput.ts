import { Validator } from '../../types/Validator.type'

export const requireInput = (errorMessage: string): Validator => {
  return (promptValue: string): string | null => {
    if (promptValue.length === 0) {
      return errorMessage
    }

    return null
  }
}
