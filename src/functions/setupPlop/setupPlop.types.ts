import { Component } from '../../generators/react/component/component.types'

type Container = {}
type Page = {}

export type SetupPlopOptions = {
  plop?: {
    generator?: boolean
  }
  react?: {
    component?: Component | boolean
    container?: Container | boolean
    page?: Page | boolean
    root?: string
  }
}
