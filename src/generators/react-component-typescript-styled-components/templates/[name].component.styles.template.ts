import { reactComponentTypescriptStyledComponentsConstants } from '../react-component-typescript-styled-components.constants'

const { handlebars } = reactComponentTypescriptStyledComponentsConstants

export const template = `import styled, { css } from 'styled-components/macro'

export const ${handlebars.name.pascalCase} = styled.div\`
  \${({ theme }) => css\`\`}
\`
`
