
import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductModel } from '../models/ProductModel'


interface IProductProviderProps {
    children: any
}

export interface ProductContextType {
    product: ProductModel
    products: ProductModel[]
    eight: ProductModel []
    four: ProductModel []
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getEight: (take?: number) => void
    getFour: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}


    const ProductProvider: React.FC<IProductProviderProps> = ({children}) => {
    const baseUrl:string =  'http://localhost:1234/api/products' // 'https://win22-webapi.azurewebsites.net/api/products'
    const empty_product: ProductModel = { tag:'', articleNumber: '', name: '', description: '', price: 0, category: '', imageName: '' }

    const [product, setProduct] = useState<ProductModel>(empty_product)
    const [products, setProducts] = useState<ProductModel[]>([])
    const [eight, setEight] = useState<ProductModel[]>([])
    const [four, setFour] = useState<ProductModel[]>([])


    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getEight = async (take: number = 0) => {
        let url = `${baseUrl}/eight`

        if (take !== 0)
            url += `/${take}`

        const result = await fetch(url)
        setEight(await result.json())
    }

    const getFour = async (take: number = 0) => {
        let url = `${baseUrl}/eight`

        if (take !== 0)
            url += `/${take}`

        const result = await fetch(url)
        setFour(await result.json())
    }



    return <ProductContext.Provider value={{product, products, eight,four, getFour, getEight, getProduct, getProducts,}}>
        {children}
        </ProductContext.Provider>
}

export default ProductProvider