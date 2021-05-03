import { componentConstants } from '../../../component.constants'

const { handlebars } = componentConstants

export const template = `import React from 'react'

import { ${handlebars.name.pascalCase} } from './${handlebars.name.pascalCase}.component'

export default {
  title: 'Components/${handlebars.name.pascalCase}'
}

const Template = (args) => <${handlebars.name.pascalCase} {...args} />

export const Main = Template.bind({})
Main.args = {}
`
