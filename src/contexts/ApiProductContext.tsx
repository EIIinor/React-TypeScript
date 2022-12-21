import React, {useState, useContext, createContext} from 'react'
import { ProductModel } from '../models/ProductModel'

export interface IProductContext {
    product: ProductModel
    products: ProductModel[]
    featured: ProductModel []
    mens: ProductModel []
    womens: ProductModel []
    get: (articleNumber?: string) => void
    getAll: () => void
    getFeatured: (take?: number) => void
    getMens: (take?: number) => void
    getWomens: (take?: number) => void
    setProduct: React.Dispatch<React.SetStateAction<ProductModel>>
    create: (e: React.FormEvent) => void
    update: (e:React.FormEvent) => void
    remove: (articleNumber: string) => void
}

export const ApiProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () => {return useContext(ApiProductContext)}

interface IProductProviderProps {
    children: any
}

const ApiProductProvider = ( {children} : IProductProviderProps ) => {
    const baseUrl = 'http://localhost:1234/api/products'
    const product_default: ProductModel = { tag:'', articleNumber: '', name: '', description: '', price: 0, category: '', imageName: '' }

    const [product, setProduct] = useState<ProductModel>(product_default)
    const [products, setProducts] = useState<ProductModel[]>([])
    const [featured, setFeatured] = useState<ProductModel[]>([])
    const [mens, setMens] = useState<ProductModel[]>([])
    const [womens, setWomens] = useState<ProductModel[]>([])

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

    const get = async (articleNumber?: string) => {
      if (articleNumber !== undefined) {
          const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
          setProduct(await res.json())
      }
    }

    const getAll = async () => {
      const res = await fetch(baseUrl)
      setProducts(await res.json())
    }

  
    const update = async () => {
      // e.preventDefault()

      const res = await fetch(`${baseUrl}/${product.articleNumber}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      console.log(res)
      if (res.status === 200) 
         setProduct(product_default)
      
        // {
        //     const data = await result.json()
        //     setProducts(products => {
        //       return products.map(product => {
        //         if(product.articleNumber === data.articleNumber) return data
        //         return product
        //      })
        //     })
        // }
    }

    const remove = async (articleNumber: string) => {
      const result = await fetch(`${baseUrl}/${articleNumber}`, {
        method: 'delete'
      })
      if (result.status === 204)
        setProduct(await result.json())
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


  return (
    <ApiProductContext.Provider value={{ product,products, featured ,mens ,womens, getWomens, getMens, getFeatured, get, getAll,setProduct, create, update, remove }}>
        {children}
    </ApiProductContext.Provider>
  )
}

export default ApiProductProvider