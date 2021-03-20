import { Helpers } from '../../types/Helpers.type'

export const getOneConstant = (variable: string, ...helpers: Helpers[]): string => {
  if (helpers.length === 0) {
    return `{{ ${variable} }}`
  }

  const reducedHelpers = helpers.reduce((accumulator, helper, index) => {
    if (index === 0) {
      return `${helper} ${accumulator}`
    }

    return `${helper} ( ${accumulator} )`
  }, variable)

  return `{{ ${reducedHelpers} }}`
}
