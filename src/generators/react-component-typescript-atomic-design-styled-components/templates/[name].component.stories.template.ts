import { reactComponentTypescriptAtomicDesignStyledComponentsConstants } from '../react-component-typescript-atomic-design-styled-components.constants'

const { handlebars } = reactComponentTypescriptAtomicDesignStyledComponentsConstants

export const template = `import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ${handlebars.name.pascalCase} } from './${handlebars.name.pascalCase}.component'
import { ${handlebars.name.pascalCase}Props } from './${handlebars.name.pascalCase}.component.types'

export default {
  title: 'Components/${handlebars.type.pascalCase}/${handlebars.name.pascalCase}'
} as Meta

const Template: Story<${handlebars.name.pascalCase}Props> = (args) => <${handlebars.name.pascalCase} {...args} />

export const Main = Template.bind({})
Main.args = {}
`
