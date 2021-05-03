import { componentConstants } from '../../../component.constants'

const { handlebars } = componentConstants

export const template = `import React, { ReactElement } from 'react'

import * as S from './${handlebars.name.pascalCase}.component.styles'
import { Props } from './${handlebars.name.pascalCase}.component.types'

export const ${handlebars.name.pascalCase} = ({ className }: Props): ReactElement | null => {
  return <S.Root className={className}>{'renders ${handlebars.name.pascalCase}'}</S.Root>
}
`
