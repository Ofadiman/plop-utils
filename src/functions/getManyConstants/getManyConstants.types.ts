import { Helpers } from '../../types/Helpers.type'

export type PlopConstants<Constants extends Record<string, string>> = {
  [Key in Constants[keyof Constants]]: {
    [Key in Helpers]: string
  }
}
