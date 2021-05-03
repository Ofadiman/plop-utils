import { Component } from '../../generators/react/component/component.types'
import { Container } from '../../generators/react/container/container.types'

export type SetupPlopOptions = {
  plop?: {
    generator?: boolean
  }
  react?: {
    component?: Component | boolean
    container?: Container | boolean
    root?: string
  }
}
