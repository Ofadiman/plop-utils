import { componentConstants } from '../../../component.constants'

const { handlebars } = componentConstants

export const template = `import clsx from 'clsx'
import React from 'react'

import { useStyles } from './${handlebars.name.pascalCase}.component.styles'

export const ${handlebars.name.pascalCase} = ({ className }) => {
  const classes = useStyles()

  return <div className={clsx(classes.root, className)}>{'renders ${handlebars.name.pascalCase}'}</div>
}
`
