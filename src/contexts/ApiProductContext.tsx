import React, {useState, useContext, createContext} from 'react'
import { ProductModel } from '../models/ProductModel'

export interface IProductContext {
    product: ProductModel
    setProduct: React.Dispatch<React.SetStateAction<ProductModel>>
    products: ProductModel[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e:React.FormEvent) => void
    remove: (articlenumber: number) => void
}

export const ApiProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () => {return useContext(ApiProductContext)}

interface IProductProviderProps {
    children: any
}

const ApiProductProvider = ( {children} : IProductProviderProps ) => {

    const baseUrl = 'http://localhost:1234/api/products'

    const product_default: ProductModel = {articleNumber: 0, name: '', price: 0, category: '', imageName: '' }

    const [product, setProduct] = useState<ProductModel>(product_default)
    const [products, setProducts] = useState<ProductModel[]>([])

    const create = async (e: React.FormEvent) => {
      e.preventDefault()

      const result = await fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      if (result.status === 201)
        setProduct(product_default)
    }

    const get = async (articleNumber: number) => {
      const result = await fetch(`${baseUrl}/${articleNumber}`)
      if (result.status === 201)
        setProduct(await result.json())
    }

    const getAll = async () => {
      const result = await fetch(`${baseUrl}`)
      if (result.status === 200)
        setProducts(await result.json())
    }

  
    const update = async (e: React.FormEvent) => {
      e.preventDefault()

      const result = await fetch(`${baseUrl}/${product.articleNumber}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      if (result.status === 200) 
        setProduct(await result.json())
    }

    const remove = async (articleNumber: number) => {
      const result = await fetch(`${baseUrl}/${articleNumber}`, {
        method: 'delete'
      })
      if (result.status === 204)
        setProduct(await result.json())
    }
    

  return (
    <ApiProductContext.Provider value={{ product, setProduct, products, create, get, getAll, update, remove }}>
        {children}
    </ApiProductContext.Provider>
  )
}

export default ApiProductProvider