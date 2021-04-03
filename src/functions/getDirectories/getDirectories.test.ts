import mockConsole from 'jest-mock-console'

import { getDirectories } from './getDirectories'
import {
  additionalDirectories,
  additionalDirectoriesWithDuplicates,
  cannotReadDirectoryError,
  componentsDirectory,
  cwd,
  cwdSpy,
  readdirSyncSpy,
  srcDirName,
  typeScriptFile
} from './getDirectories.test.utils'

describe('getDirectories function', () => {
  let resetConsole: ReturnType<typeof mockConsole>
  beforeEach(() => {
    cwdSpy.mockReset()
    readdirSyncSpy.mockReset()
  })

  beforeAll(() => {
    resetConsole = mockConsole()
  })

  afterAll(() => {
    cwdSpy.mockRestore()
    readdirSyncSpy.mockRestore()
    resetConsole()
  })

  test('should return directory names at given path', () => {
    cwdSpy.mockReturnValueOnce(cwd)
    readdirSyncSpy.mockReturnValueOnce([componentsDirectory, typeScriptFile])

    const result = getDirectories(srcDirName)

    expect(result).toEqual([componentsDirectory.name])
    expect(readdirSyncSpy).toHaveBeenCalledWith(`${cwd}/src`, { withFileTypes: true })
  })

  test('should exclude unwanted directory names', () => {
    cwdSpy.mockReturnValueOnce(cwd)
    readdirSyncSpy.mockReturnValueOnce([componentsDirectory, typeScriptFile])

    const result = getDirectories(srcDirName, { excludeDirs: [componentsDirectory.name] })

    expect(result).toEqual([])
    expect(readdirSyncSpy).toHaveBeenCalledWith(`${cwd}/src`, { withFileTypes: true })
  })

  test('should add extra directory names', () => {
    cwdSpy.mockReturnValueOnce(cwd)
    readdirSyncSpy.mockReturnValueOnce([componentsDirectory, typeScriptFile])

    const result = getDirectories(srcDirName, { addDirs: additionalDirectories })

    expect(result).toEqual([componentsDirectory.name, ...additionalDirectories])
    expect(readdirSyncSpy).toHaveBeenCalledWith(`${cwd}/src`, { withFileTypes: true })
  })

  test('should not duplicate directories in final output', () => {
    cwdSpy.mockReturnValueOnce(cwd)
    readdirSyncSpy.mockReturnValueOnce([componentsDirectory, typeScriptFile])

    const result = getDirectories(srcDirName, { addDirs: additionalDirectoriesWithDuplicates })

    expect(readdirSyncSpy).toHaveBeenCalledWith(`${cwd}/src`, { withFileTypes: true })
    expect(result).toEqual([...new Set([componentsDirectory.name, ...additionalDirectoriesWithDuplicates])])
  })

  test('should handle error while reading a directory that does not exist', () => {
    cwdSpy.mockReturnValueOnce(cwd)
    readdirSyncSpy.mockImplementationOnce(() => {
      throw cannotReadDirectoryError
    })

    const result = getDirectories(srcDirName)

    expect(console.error).toHaveBeenCalledTimes(1)
    expect(readdirSyncSpy).toHaveBeenCalledWith(`${cwd}/src`, { withFileTypes: true })
    expect(result).toEqual([])
  })
})
