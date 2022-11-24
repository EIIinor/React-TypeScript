import React, {useEffect} from 'react'
import {IProductContext, ProductContext} from '../contexts/productContext'
import { Product } from '../models/productsModel'

const ProductsList = () => {
    const { products, getAll } = React.useContext(ProductContext) as IProductContext

  useEffect(() => {
    getAll()

  }, [getAll])


  return (
    <>
    <h3 className='display-6 mb-4'>List of Products</h3>
        {
            products.map((product:Product) => (<div key={product.articleNumber} className='mb-3'>{product.name}</div>))
        }
    </>
  )
}

export default ProductsList