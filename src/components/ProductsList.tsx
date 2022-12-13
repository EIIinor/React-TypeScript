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
      <h3 className='display-6 mb-4'>Products</h3>
        <div className='list'>
          {
              products.map((product:ProductModel) => (
              <div key={product.articleNumber} className='mb-3'>
                <div className='box'>
                  <img src={product.imageName}/>

                  <div className='info'>
                    <p className='name'><p>Name:</p> {product.name} </p>
                    <p className='category'><p>Category:</p> {product.category}</p>
                    <p className='price'><p>Price:</p> {product.price} $</p>
                    <p className='tag'><p>Tag:</p> {product.tag}</p>
                    <p className='description'><p>Description:</p> {product.description}</p>
                  </div>

                  <div className='buttons'>
                    <button className='edit' onClick={() => update }><i className="fa-solid fa-pencil"></i></button>
                    <button className='delete' onClick={() => remove(product.articleNumber)}><i className="fa-solid fa-trash"></i></button>
                  </div>

                </div>
              </div>))
          }
        </div>
    </div>
  )
}

export default ProductsList