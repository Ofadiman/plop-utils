import { Helpers } from '../../types/Helpers.type'

export type PlopVariables<Variables extends Record<string, string>> = {
  [Key in Variables[keyof Variables]]: {
    [Key in Helpers]: string
  }
}
