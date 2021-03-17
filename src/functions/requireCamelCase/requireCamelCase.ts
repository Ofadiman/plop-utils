import { Validator } from '../../types/Validator.type'

const camelCaseRegex = /^[a-z][A-Za-z]*$/u

export const requireCamelCase = (errorMessage: string): Validator => (promptValue: string): string | null =>
  camelCaseRegex.test(promptValue) ? null : errorMessage
