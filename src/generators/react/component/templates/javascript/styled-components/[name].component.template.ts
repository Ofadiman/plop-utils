import { componentConstants } from '../../../component.constants'

const { handlebars } = componentConstants

export const template = `import React from 'react'

import * as S from './${handlebars.name.pascalCase}.component.styles'

export const ${handlebars.name.pascalCase} = ({ className }) => {
  return <S.Root className={className}>{'renders ${handlebars.name.pascalCase}'}</S.Root>
}
`
