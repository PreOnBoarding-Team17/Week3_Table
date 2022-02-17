export interface ProductInterface {
  code: string
  name: string
  price: number
  number: number
  relatedCode: string
}

export interface OrderInterface {
  code: string
  orderForm: string
  orderName: string
  orderNum: string
  orderUnit: string
  ordererName: string
  ordererPhone: string
  recieverName: string
  recieverPhone: string
  memo: string
  delivery: string
}

export interface ReleaseInterface {
  code: string
  num: number
  state: string
  type: string
  company: string
  person: string
  date: string
  storage: string
}

export interface DataInterface {
  dataFrom?: string
  dataFileName?: string
  excelNum?: number
  mappingState?: string
  outOfStock?: string
  product?: ProductInterface
  order?: OrderInterface
  release?: ReleaseInterface
}
