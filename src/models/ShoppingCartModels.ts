import { ProductModel } from "./ProductModel"

export interface CartItem {
    articleNumber: number
    product: ProductModel
    quantity: number
}
