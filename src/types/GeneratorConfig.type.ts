import { PlopGenerator } from 'plop'

export type GeneratorConfig = Omit<PlopGenerator, 'runActions' | 'runPrompts'>
