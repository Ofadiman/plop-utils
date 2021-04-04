import getPlop from 'node-plop'

import * as plopGeneratorModule from '../../generators/plop-generator/plop-generator.setup'

export const setupCustomGeneratorSpy = jest.spyOn(plopGeneratorModule, 'setupCustomGenerator')

export const setGeneratorMock = jest.fn().mockName('setGeneratorMock')
export const setWelcomeMessageMock = jest.fn().mockName('setWelcomeMessageMock')
export const setHelperMock = jest.fn().mockName('setHelperMock')
export const plop = {
  ...getPlop(''),
  setGenerator: setGeneratorMock,
  setHelper: setHelperMock,
  setWelcomeMessage: setWelcomeMessageMock
}
