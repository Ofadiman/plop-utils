import { componentConstants } from '../../../component.constants'

const { handlebars } = componentConstants

export const template = `import clsx from 'clsx'
import React, { ReactElement } from 'react'

import { useStyles } from './${handlebars.name.pascalCase}.component.styles'
import { Props } from './${handlebars.name.pascalCase}.component.types'

export const ${handlebars.name.pascalCase} = ({ className }: Props): ReactElement | null => {
  const classes = useStyles()

  return <div className={clsx(classes.root, className)}>{'renders ${handlebars.name.pascalCase}'}</div>
}
`
