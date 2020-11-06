// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'
// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// Product Inteface
export type IProduct = {
  _id: string
  name: string
  description: string
  categories: string[]
  sizes: string[]
  brand: string
  image: string
  price: number
  rating: number
  numReviews: number
}

export type ratingProps = {
  rating: number
  numReviews: number
}

export type WrapperProps = {
  children: React.ReactNode
}

export type MessageProps = {
  children: React.ReactNode
  variant: string
}
// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
}
