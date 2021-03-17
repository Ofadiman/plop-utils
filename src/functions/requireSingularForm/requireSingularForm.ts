import { isSingular } from 'pluralize'

import { Validator } from '../../types/Validator.type'

export const requireSingularForm = (errorMessage: string): Validator => (promptValue: string): string | null =>
  isSingular(promptValue) ? null : errorMessage
