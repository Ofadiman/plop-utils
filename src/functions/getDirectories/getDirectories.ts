import { readdirSync } from 'fs'

import { Options } from './getDirectories.types'

const readDirs = (path: string): string[] => {
  const cwd = process.cwd()
  const finalPath = `${cwd}/${path}`

  try {
    return readdirSync(finalPath, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
  } catch {
    console.error(`Cannot read directory at path "${path}"!`)

    return []
  }
}

const excludeDirectories = (dirs: string[], excludeDirs: string[]): string[] => {
  return dirs.filter((dir) => !excludeDirs.includes(dir))
}

export const getDirectories = (path: string, options: Options = {}): string[] => {
  const finalOptions: Required<Options> = { concatDirs: [], filterDirs: [], ...options }

  const directoriesAtPath = readDirs(path)
  const filteredDirectories = excludeDirectories(directoriesAtPath, finalOptions.filterDirs)

  return [...new Set(filteredDirectories.concat(finalOptions.concatDirs))]
}
