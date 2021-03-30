import { command } from 'execa'
import ora from 'ora'

import { CODEGEN_FAIL, CODEGEN_START, CODEGEN_SUCCESS } from '../../constants/prefixes'

export const runEslint = (...files: string[]) => async (): Promise<string> => {
  const spinner = ora(`${CODEGEN_START} Running eslint on ${files.join(', ')}.`)

  try {
    spinner.start()
    await command(`eslint --fix ${files.join(' ')}`)

    return `${CODEGEN_SUCCESS} Successfully run eslint!`
  } catch (error: unknown) {
    console.error(error)

    return `${CODEGEN_FAIL} Failed to run eslint!`
  } finally {
    spinner.stop()
  }
}
