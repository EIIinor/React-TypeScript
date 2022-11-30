
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
    getProducts: (take?: number) => void
    getEight: (take?: number) => void
    getFour: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}


    const ProductProvider: React.FC<IProductProviderProps> = ({children}) => {
    const baseUrl:string = 'https://win22-webapi.azurewebsites.net/api/products'
    const empty_product: ProductModel = {articleNumber: 0, name:'', category:'', price: 0, imageName: ''}

    const [product, setProduct] = useState<ProductModel>(empty_product)
    const [products, setProducts] = useState<ProductModel[]>([])
    const [eight, setEight] = useState<ProductModel[]>([])
    const [four, setFour] = useState<ProductModel[]>([])


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

    const getEight = async (take: number = 0) => {
       // let url = baseUrl + `?tag=eight`
       // if (take !== 0)
        //    url += `&take=${take}`

        const result = await fetch(baseUrl + `?take=${take}`)
        setEight(await result.json())
    }

    const getFour = async (take: number = 0) => {
      //  let url = baseUrl + `?tag=four`
      //  if (take !== 0)
      //      url += `?take=${take}`

        const res = await fetch(baseUrl + `?take=${take}`)
        setFour(await res.json())
    }



    return <ProductContext.Provider value={{product, products, eight,four, getFour, getEight, getProduct, getProducts,}}>
        {children}
        </ProductContext.Provider>
}

export default ProductProvider