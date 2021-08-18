import fs, { Dirent } from 'fs'

const cwdSpy = jest.spyOn(process, 'cwd').mockName('cwdSpy')
const readdirSyncSpy = jest.spyOn(fs, 'readdirSync').mockName('readdirSyncSpy')

const cwd = '/home/user'
const srcDirName = 'src'
const additionalDirectories = ['pages', 'containers']
const additionalDirectoriesWithDuplicates = ['pages', 'pages', 'pages', 'pages']

const cannotReadDirectoryError = new Error('cannotReadDirectoryError')

const componentsDirectory = new Dirent()
componentsDirectory.name = 'components'
componentsDirectory.isDirectory = () => true

const typeScriptFile = new Dirent()
typeScriptFile.name = 'Header.ts'
typeScriptFile.isDirectory = () => false

export const getDirectoriesTestUtils = {
  additionalDirectories,
  additionalDirectoriesWithDuplicates,
  cannotReadDirectoryError,
  componentsDirectory,
  cwd,
  cwdSpy,
  readdirSyncSpy,
  srcDirName,
  typeScriptFile
}
