export const errorMessage = 'invalid input'

export const testCases = [
  { expectedResult: null, string: 'useValidHookName' },
  { expectedResult: errorMessage, string: 'useNotValid-HookName' },
  { expectedResult: errorMessage, string: 'useNOTVALIDHOOKNAME' },
  { expectedResult: errorMessage, string: 'useNot.Valid.Hook.Name' },
  { expectedResult: errorMessage, string: 'notValidHookName' },
  { expectedResult: errorMessage, string: 'usenotValidHookName' }
]
