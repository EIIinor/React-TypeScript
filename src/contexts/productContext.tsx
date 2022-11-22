import React, {useState, useContext, createContext} from 'react'
import { Product } from '../models/productsModel'

interface IProductContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    products: Product[]
    create: (e: React.FC) => void
    get: (id: number) => void
    getAll: () => void
    update: (id: number, e:React.FC) => void
    remove: (id: number) => void

}

export const ProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () => {return useContext(ProductContext)}

interface IProductProviderProps {
    children: any
}

const ProductProvider = ( {children} : IProductProviderProps ) => {

    const defaultValues: Product = {articleNumber: '', name: '', price: 0, category: '', imageName: '', quantity: 0,  }
    const [product, setProduct] = useState<Product>(defaultValues)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FC) => {}
    const get = async (id: number) => {}
    const getAll = async () => {}
    const update = async (id: number, e:React.FC) => {}
    const remove = async (id: number) => {}

  return (
    <ProductContext.Provider value={{ product, setProduct, products, create, get, getAll, update, remove }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider