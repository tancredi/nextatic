import { ComponentType } from 'react'

export type Locale = string

export interface Content<AttributesT = any> {
  react: ComponentType
  attributes: AttributesT
}
