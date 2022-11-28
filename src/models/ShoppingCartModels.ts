import { ProductModel } from "./ProductModel"

export interface CartItem {
    articleNumber: string
    product: ProductModel
    quantity: number
}
