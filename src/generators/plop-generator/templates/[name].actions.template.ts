import { plopGeneratorConstants } from '../plop-generator.constants'

export const template = `import { ActionType } from 'plop'

export const ${plopGeneratorConstants.variables.handlebars.name.camelCase}Actions: ActionType[] = [
  {
    path: \`\`,
    template: require('./templates/[name].template').template,
    type: 'add'
  }
]
`
