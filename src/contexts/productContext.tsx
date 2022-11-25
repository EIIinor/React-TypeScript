import React, {useState, useContext, createContext} from 'react'
import { Product } from '../models/productsModel'

export interface IProductContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    products: Product[]
    create: (e: React.FormEvent) => void
    get: (id: number) => void
    getAll: () => void
    update: (e:React.FormEvent) => void
    remove: (articleNumber: number) => void
}

export const ProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () => {return useContext(ProductContext)}

interface IProductProviderProps {
    children: any
}

const ProductProvider = ( {children} : IProductProviderProps ) => {

    const baseUrl = 'http://localhost:1234/api/products'

    const product_default: Product = {articleNumber: '', name: '', price: 0, category: '', imageUrl: '', quantity: 0,  }

    const [product, setProduct] = useState<Product>(product_default)
    const [products, setProducts] = useState<Product[]>([])

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
    <ProductContext.Provider value={{ product, setProduct, products, create, get, getAll, update, remove }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider