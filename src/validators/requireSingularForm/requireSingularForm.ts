import { isSingular } from 'pluralize'

import { Validator } from '../../types/Validator.type'

export const requireSingularForm = (errorMessage: string): Validator => {
  return (promptValue: string): string | null => {
    if (isSingular(promptValue)) {
      return null
    }

    return errorMessage
  }
}
