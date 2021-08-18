import mockConsole from 'jest-mock-console'

import { getDirectories } from './getDirectories'
import { getDirectoriesTestUtils as t } from './getDirectories.test.utils'

describe('getDirectories function', () => {
  let resetConsole: ReturnType<typeof mockConsole>
  beforeEach(() => {
    t.cwdSpy.mockReset()
    t.readdirSyncSpy.mockReset()
  })

  beforeAll(() => {
    resetConsole = mockConsole()
  })

  afterAll(() => {
    t.cwdSpy.mockRestore()
    t.readdirSyncSpy.mockRestore()
    resetConsole()
  })

  test('should return directory names at given path', () => {
    t.cwdSpy.mockReturnValueOnce(t.cwd)
    t.readdirSyncSpy.mockReturnValueOnce([t.componentsDirectory, t.typeScriptFile])

    const result = getDirectories(t.srcDirName)

    expect(result).toEqual([t.componentsDirectory.name])
    expect(t.readdirSyncSpy).toHaveBeenCalledWith(`${t.cwd}/src`, { withFileTypes: true })
  })

  test('should exclude unwanted directory names', () => {
    t.cwdSpy.mockReturnValueOnce(t.cwd)
    t.readdirSyncSpy.mockReturnValueOnce([t.componentsDirectory, t.typeScriptFile])

    const result = getDirectories(t.srcDirName, { filterDirs: [t.componentsDirectory.name] })

    expect(result).toEqual([])
    expect(t.readdirSyncSpy).toHaveBeenCalledWith(`${t.cwd}/src`, { withFileTypes: true })
  })

  test('should add extra directory names', () => {
    t.cwdSpy.mockReturnValueOnce(t.cwd)
    t.readdirSyncSpy.mockReturnValueOnce([t.componentsDirectory, t.typeScriptFile])

    const result = getDirectories(t.srcDirName, { concatDirs: t.additionalDirectories })

    expect(result).toEqual([t.componentsDirectory.name, ...t.additionalDirectories])
    expect(t.readdirSyncSpy).toHaveBeenCalledWith(`${t.cwd}/src`, { withFileTypes: true })
  })

  test('should not duplicate directories in final output', () => {
    t.cwdSpy.mockReturnValueOnce(t.cwd)
    t.readdirSyncSpy.mockReturnValueOnce([t.componentsDirectory, t.typeScriptFile])

    const result = getDirectories(t.srcDirName, { concatDirs: t.additionalDirectoriesWithDuplicates })

    expect(t.readdirSyncSpy).toHaveBeenCalledWith(`${t.cwd}/src`, { withFileTypes: true })
    expect(result).toEqual([...new Set([t.componentsDirectory.name, ...t.additionalDirectoriesWithDuplicates])])
  })

  test('should handle error while reading a directory that does not exist', () => {
    t.cwdSpy.mockReturnValueOnce(t.cwd)
    t.readdirSyncSpy.mockImplementationOnce(() => {
      throw t.cannotReadDirectoryError
    })

    const result = getDirectories(t.srcDirName)

    expect(console.error).toHaveBeenCalledTimes(1)
    expect(t.readdirSyncSpy).toHaveBeenCalledWith(`${t.cwd}/src`, { withFileTypes: true })
    expect(result).toEqual([])
  })
})
