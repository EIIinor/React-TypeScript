import React, {useState, useContext, createContext} from 'react'
import { Product } from '../models/productsModel'

export interface IProductContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    products: Product[]
    create: (e: React.FC) => void
    read: (id: number) => void
    update: (id: number, e:React.FC) => void
    remove: (id: number) => void
}

export const ProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () => {return useContext(ProductContext)}

interface IProductProviderProps {
    children: any
}

const ProductProvider = ( {children} : IProductProviderProps ) => {

    const baseUrl = 'http://localhost:5000/api/products'
    const defaultValues: Product = {articleNumber: '', name: '', price: 0, category: '', imageName: '', quantity: 0,  }
    const [product, setProduct] = useState<Product>(defaultValues)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FC) => {
      const result = await fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(products)
      })
      if (result.status === 201)
        setProducts(await result.json())
    }

    const read = async (id: number) => {
      const result = await fetch(`${baseUrl}/${id}`)
      if (result.status === 201)
        setProduct(await result.json())
    }

  
    const update = async (id: number, e: React.FC) => {
      const result = await fetch(`${baseUrl}/${id}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      if (result.status === 200)
        setProduct(await result.json())

    }

    const remove = async (id: number) => {
      const result = await fetch(`${baseUrl}/${id}`, {
        method: 'delete'
      })
      if (result.status === 204)
        setProduct(await result.json())
    }
    

  return (
    <ProductContext.Provider value={{ product, setProduct, products, create, read, update, remove }}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider