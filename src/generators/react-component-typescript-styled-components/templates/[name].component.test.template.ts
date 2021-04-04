import { reactComponentTypescriptStyledComponentsConstants } from '../react-component-typescript-styled-components.constants'

const { handlebars } = reactComponentTypescriptStyledComponentsConstants

export const template = `import React from 'react'

import { {{ renderFunctionName }} } from '{{ renderFunctionLocation }}'
import { ${handlebars.name.pascalCase} } from './${handlebars.name.pascalCase}.component'

describe('${handlebars.name.pascalCase} component', () => {
  test('should be defined', () => {
    const { asFragment } = {{ renderFunctionName }}(<${handlebars.name.pascalCase} />)

    expect(asFragment()).toBeDefined()
  })
})
`
