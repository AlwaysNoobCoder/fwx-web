import { SEAField } from 'fwx-api/types'

export type EntityView = {
  url: string
  name: string
  fields: SEAField[]
}

export type TableView = EntityView & {
  multipleSelect: boolean
}

export type FormView = EntityView & {
  columns: number
}

export const A = 1
