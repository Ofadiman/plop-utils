import { reactComponentTypescriptAtomicDesignStyledComponentsConstants } from '../react-component-typescript-atomic-design-styled-components.constants'

const { handlebars } = reactComponentTypescriptAtomicDesignStyledComponentsConstants

export const template = `import styled, { css } from 'styled-components/macro'

export const ${handlebars.name.pascalCase} = styled.div\`
  \${({ theme }) => css\`\`}
\`
`
