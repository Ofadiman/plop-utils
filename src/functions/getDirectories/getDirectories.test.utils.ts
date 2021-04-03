import fs, { Dirent } from 'fs'

export const cwdSpy = jest.spyOn(process, 'cwd').mockName('cwdSpy')
export const readdirSyncSpy = jest.spyOn(fs, 'readdirSync').mockName('readdirSyncSpy')

export const cwd = '/home/user'
export const srcDirName = 'src'
export const additionalDirectories = ['pages', 'containers']
export const additionalDirectoriesWithDuplicates = ['pages', 'pages', 'pages', 'pages']

export const cannotReadDirectoryError = new Error('cannotReadDirectoryError')

export const componentsDirectory = new Dirent()
componentsDirectory.name = 'components'
componentsDirectory.isDirectory = () => true

export const typeScriptFile = new Dirent()
typeScriptFile.name = 'Header.ts'
typeScriptFile.isDirectory = () => false
