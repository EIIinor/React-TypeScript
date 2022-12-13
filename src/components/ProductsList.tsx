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
                    <h1 className='name'><p>Name:</p> {product.name} </h1>
                    <h1 className='category'><p>Category:</p> {product.category}</h1>
                    <h1 className='price'><p>Price:</p> {product.price} $</h1>
                    <h1 className='tag'><p>Tag:</p> {product.tag}</h1>
                    <h1 className='description'><p>Description:</p> {product.description}</h1>
                  </div>

                  <div className='buttons'>
                    <button className='edit' onClick={update}><i className="fa-solid fa-pencil"></i></button>
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