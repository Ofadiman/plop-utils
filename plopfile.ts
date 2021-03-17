import { NodePlopAPI } from 'plop'

import { setupPlop } from './src'

export default function plopGenerator(plop: NodePlopAPI): void {
  setupPlop(plop)
}
