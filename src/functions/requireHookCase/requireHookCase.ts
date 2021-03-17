import { Validator } from '../../types/Validator.type'

const hookRegex = /use([A-Z][a-z]+)+$/u

export const requireHookCase = (errorMessage: string): Validator => (promptValue: string): string | null =>
  hookRegex.test(promptValue) ? null : errorMessage
