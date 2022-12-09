import React, {useEffect} from 'react'
import {IProductContext, ApiProductContext} from '../contexts/ApiProductContext'
import { ProductModel } from '../models/ProductModel'

const ProductsList = () => {
    const { products, getAll, remove, update } = React.useContext(ApiProductContext) as IProductContext

  useEffect(() => {
    getAll()

  }, [])

  return (
    <div className='container'>
      <h3 className='display-6 mb-4'>List of Products</h3>
        {
            products.map((product:ProductModel) => (
            <div key={product.articleNumber} className='mb-3'>
              <div>

                <img src={product.imageName}/>
                <p>Name: {product.name} </p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price} $</p>
                <button onClick={() => update }><i className="fa-solid fa-pencil"></i></button>
                <button onClick={() => remove(product.articleNumber)}><i className="fa-solid fa-trash"></i></button>

              </div>
            </div>))
        }
    </div>
  )
}

export default ProductsList