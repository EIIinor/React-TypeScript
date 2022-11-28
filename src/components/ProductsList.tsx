import React, {useEffect} from 'react'
import {IProductContext, ProductContext} from '../contexts/ApiProductContext'
import { Product } from '../models/ProductModel'

const ProductsList = () => {
    const { products, getAll, remove } = React.useContext(ProductContext) as IProductContext

  useEffect(() => {
    getAll()

  }, [getAll])


  const removeProduct = (articleNumber:number) => {
    remove(articleNumber)
  }

  return (
    <>
    <h3 className='display-6 mb-4'>List of Products</h3>
        {
            products.map((product:Product) => (<div onClick={() => removeProduct} key={product.articleNumber} className='mb-3'>{product.name}</div>))
        }
    </>
  )
}

export default ProductsList