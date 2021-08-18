import { NodePlopAPI } from 'plop'
import { plural, singular } from 'pluralize'

export const setupPlop = (plop: NodePlopAPI): void => {
  plop.setWelcomeMessage('What do you want to generate?')
  plop.setHelper('singular', singular)
  plop.setHelper('plural', plural)
}
