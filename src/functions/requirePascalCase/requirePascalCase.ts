import { Validator } from '../../types/Validator.type'

const pascalCaseRegex = /^[A-Z][A-Za-z]*$/u

export const requirePascalCase = (errorMessage: string): Validator => (promptValue: string): string | null =>
  pascalCaseRegex.test(promptValue) ? null : errorMessage
