import { componentConstants } from '../../../component.constants'

const { handlebars } = componentConstants

export const template = `import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ${handlebars.name.pascalCase} } from './${handlebars.name.pascalCase}.component'
import { Props } from './${handlebars.name.pascalCase}.component.types'

export default {
  title: 'Components/${handlebars.name.pascalCase}'
} as Meta

const Template: Story<Props> = (args) => <${handlebars.name.pascalCase} {...args} />

export const Main = Template.bind({})
Main.args = {}
`
