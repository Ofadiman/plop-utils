import { isPlural } from 'pluralize'

import { Validator } from '../../types/Validator.type'

export const requirePluralForm = (errorMessage: string): Validator => {
  return (promptValue: string): string | null => {
    if (isPlural(promptValue)) {
      return null
    }

    return errorMessage
  }
}
