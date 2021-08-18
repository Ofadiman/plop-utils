import getPlop from 'node-plop'

const setWelcomeMessageMock = jest.fn().mockName('setWelcomeMessageMock')
const setHelperMock = jest.fn().mockName('setHelperMock')
const plop = {
  ...getPlop(''),
  setHelper: setHelperMock,
  setWelcomeMessage: setWelcomeMessageMock
}

export const setupPlopTestUtils = {
  plop,
  setHelperMock,
  setWelcomeMessageMock
}
