const promptValue = 'promptValue'

const firstErrorMessage = 'firstErrorMessage'
const secondErrorMessage = 'secondErrorMessage'

const firstValidator = jest.fn().mockName('firstValidator')
const secondValidator = jest.fn().mockName('secondValidator')
const thirdValidator = jest.fn().mockName('thirdValidator')

export const composeValidatorsTestUtils = {
  firstErrorMessage,
  firstValidator,
  promptValue,
  secondErrorMessage,
  secondValidator,
  thirdValidator
}
