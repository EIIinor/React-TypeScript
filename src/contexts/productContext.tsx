
import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductModel } from '../models/ProductModel'


interface IProductProviderProps {
    children: any
}

export interface ProductContextType {
    product: ProductModel
    products: ProductModel[]
    featured: ProductModel[]
    getProduct: (articleNumber?: string) => void
    getProducts: (take?: number) => void
    getFeatured: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}


    const ProductProvider: React.FC<IProductProviderProps> = ({children}) => {
    const baseUrl:string = 'https://win22-webapi.azurewebsites.net/api/products'
    const empty_product: ProductModel = {articleNumber: '', name:'', category:'', price: 0, imageUrl: '', quantity:0 }

    const [product, setProduct] = useState<ProductModel>(empty_product)
    const [products, setProducts] = useState<ProductModel[]>([])
    const [featured, setFeatured] = useState<ProductModel[]>([])

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(baseUrl + `/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async (take: number = 0) => {
        let url = baseUrl
        if (take !== 0)
            url = baseUrl + `?take=${take}`

        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = baseUrl + `?tag=featured`
        if (take !== 0)
            url += `&take=${take}`

        const res = await fetch(baseUrl)
        setFeatured(await res.json())
    }


    return <ProductContext.Provider value={{product, products, featured, getProduct, getProducts, getFeatured}}>
        {children}
        </ProductContext.Provider>
}

export default ProductProvider