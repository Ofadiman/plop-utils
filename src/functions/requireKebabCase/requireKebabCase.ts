import { Validator } from '../../types/Validator.type'

const kebabCaseRegex = /^[a-z]+((-[a-z]+)+)?$/u

export const requireKebabCase = (errorMessage: string): Validator => (promptValue: string): string | null =>
  kebabCaseRegex.test(promptValue) ? null : errorMessage
