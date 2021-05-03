import { containerConstants } from '../../container.constants'

const { handlebars } = containerConstants

export const template = `import React from 'react'

export const ${handlebars.name.pascalCase}Container = (props) => {
  return <div>{'renders ${handlebars.name.pascalCase}Container'}</div>
}
`
