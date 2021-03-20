import { getDirectories } from './getDirectories'
import {
  additionalDirectories,
  componentsDirectory,
  cwd,
  cwdSpy,
  readdirSyncSpy,
  srcDirName,
  typeScriptFile
} from './getDirectories.test.utils'

describe('getDirectories function', () => {
  beforeEach(() => {
    cwdSpy.mockReset()
    readdirSyncSpy.mockReset()
  })

  afterAll(() => {
    cwdSpy.mockRestore()
    readdirSyncSpy.mockRestore()
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
})
