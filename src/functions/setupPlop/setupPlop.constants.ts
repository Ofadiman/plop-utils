import { DeepRequired } from 'utility-types'

import { SetupPlopOptions } from './setupPlop.types'

export const defaultOptions: DeepRequired<SetupPlopOptions> = {
  plop: {
    generator: false
  },
  react: {
    component: false,
    container: false,
    page: false,
    root: 'src'
  }
}
