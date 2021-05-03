import getPlop from 'node-plop'

import * as generatorModule from '../../generators/plop/generator/generator.setup'

export const setupGeneratorSpy = jest.spyOn(generatorModule, 'setupGeneratorCodegen')

export const setGeneratorMock = jest.fn().mockName('setGeneratorMock')
export const setWelcomeMessageMock = jest.fn().mockName('setWelcomeMessageMock')
export const setHelperMock = jest.fn().mockName('setHelperMock')
export const plop = {
  ...getPlop(''),
  setGenerator: setGeneratorMock,
  setHelper: setHelperMock,
  setWelcomeMessage: setWelcomeMessageMock
}
