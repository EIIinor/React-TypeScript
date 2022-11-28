
import { useContext, useState } from "react"
import { createContext } from "react"
import { ProductModel } from '../models/ProductModel'


interface IProductProviderProps {
    children: any
    
}

export interface ProductContextType {
    product: ProductModel
    all: ProductModel[]
    featured: ProductModel[]
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}


export const ProductProvider: React.FC<IProductProviderProps> = ({children}) => {
    const empty_product: ProductModel = {articleNumber: '', name:'', category:'', price: 0, imageUrl: '', quantity:0 }

    const [product, setProduct] = useState<ProductModel>(empty_product)
    const [all, setAll] = useState<ProductModel[]>([])
    const [featured, setFeatured] = useState<ProductModel[]>([])



    const url = 'https://win22-webapi.azurewebsites.net/api/products'


    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProduct(await res.json())
    }

    return <ProductContext.Provider value={{product, all, featured, getProducts, getFeaturedProducts, getProduct}}>
        {children}
        </ProductContext.Provider>
}