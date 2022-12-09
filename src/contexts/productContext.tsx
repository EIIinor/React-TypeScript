import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductModel } from '../models/ProductModel'

export interface ProductContextType {
    product: ProductModel
    products: ProductModel[]
    featured: ProductModel []
    mens: ProductModel []
    womens: ProductModel []
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeatured: (take?: number) => void
    getMens: (take?: number) => void
    getWomens: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

interface IProductProviderProps {
    children: any
}

const ProductProvider: React.FC<IProductProviderProps> = ({children}) => {

    const baseUrl:string =  'http://localhost:1234/api/products' // 'https://win22-webapi.azurewebsites.net/api/products'
    const empty_product: ProductModel = { tag:'', articleNumber: '', name: '', description: '', price: 0, category: '', imageName: '' }

    const [product, setProduct] = useState<ProductModel>(empty_product)
    const [products, setProducts] = useState<ProductModel[]>([])
    const [featured, setFeatured] = useState<ProductModel[]>([])
    const [mens, setMens] = useState<ProductModel[]>([])
    const [womens, setWomens] = useState<ProductModel[]>([])


    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`

        const result = await fetch(url)
        setFeatured(await result.json())
    }

    const getMens = async (take: number = 0) => {
        let url = `${baseUrl}/mens`

        if (take !== 0)
            url += `/${take}`

        const result = await fetch(url)
        setMens(await result.json())
    }

    const getWomens = async (take: number = 0) => {
        let url = `${baseUrl}/womens`

        if (take !== 0)
            url += `/${take}`

        const result = await fetch(url)
        setWomens(await result.json())
    }


    return <ProductContext.Provider value={{product, products, featured ,mens ,womens, getWomens, getMens, getFeatured, getProduct, getProducts,}}>
        {children}
        </ProductContext.Provider>
}

export default ProductProvider