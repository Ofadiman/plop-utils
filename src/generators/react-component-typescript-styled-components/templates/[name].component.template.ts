import { reactComponentTypescriptStyledComponentsConstants } from '../react-component-typescript-styled-components.constants'

const { handlebars } = reactComponentTypescriptStyledComponentsConstants

export const template = `import React, { VFC } from 'react'

import * as S from './${handlebars.name.pascalCase}.component.styles'
import { ${handlebars.name.pascalCase}Props } from './${handlebars.name.pascalCase}.component.types'

export const ${handlebars.name.pascalCase}: VFC<${handlebars.name.pascalCase}Props> = ({ className }) => {
  return <S.${handlebars.name.pascalCase} className={className}>{'Renders ${handlebars.name.pascalCase} component.'}</S.${handlebars.name.pascalCase}>
}
`
