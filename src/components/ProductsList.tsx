import React, {useEffect} from 'react'
import {IProductContext, ApiProductContext} from '../contexts/ApiProductContext'
import { ProductModel } from '../models/ProductModel'

const ProductsList = () => {
    const { products, getAll, remove } = React.useContext(ApiProductContext) as IProductContext

  useEffect(() => {
    getAll()

  }, [getAll])


  const removeProduct = (articleNumber:number) => {
    remove(articleNumber)
  }

  return (
    <div className='container'>
      <h3 className='display-6 mb-4'>List of Products</h3>
        {
            products.map((product:ProductModel) => (
            <div onClick={() => removeProduct} key={product.articleNumber} className='mb-3'>
              {product.name} {product.category} {product.price}
            </div>))
        }
    </div>
  )
}

export default ProductsList