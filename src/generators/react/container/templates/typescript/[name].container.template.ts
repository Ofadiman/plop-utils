import { containerConstants } from '../../container.constants'

const { handlebars } = containerConstants

export const template = `import React, { ReactElement } from 'react'

import { Props } from './${handlebars.name.pascalCase}.container.types'

export const ${handlebars.name.pascalCase}Container = (props: Props): ReactElement | null => {
  return <>{'renders ${handlebars.name.pascalCase}Container'}</>
}
`
