import { Validator } from '../../types/Validator.type'

const anyStringRegex = /.+/u

export const requireInput = (errorMessage: string): Validator => (promptValue: string): string | null =>
  anyStringRegex.test(promptValue) ? null : errorMessage
