import getPlop from 'node-plop'

export const setGeneratorMock = jest.fn().mockName('setGeneratorMock')
export const setWelcomeMessageMock = jest.fn().mockName('setWelcomeMessageMock')
export const setHelperMock = jest.fn().mockName('setHelperMock')
export const plop = {
  ...getPlop(''),
  setGenerator: setGeneratorMock,
  setHelper: setHelperMock,
  setWelcomeMessage: setWelcomeMessageMock
}
