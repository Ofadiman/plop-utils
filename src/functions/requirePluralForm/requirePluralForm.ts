import { isPlural } from 'pluralize'

import { Validator } from '../../types/Validator.type'

export const requirePluralForm = (errorMessage: string): Validator => (promptValue: string): string | null =>
  isPlural(promptValue) ? null : errorMessage
