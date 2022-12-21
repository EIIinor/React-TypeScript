import React, {useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {IProductContext, ApiProductContext} from '../contexts/ApiProductContext'
import { ProductModel } from '../models/ProductModel'

interface IProductsListProps {
  remove: any
  products: any
}

const ProductsList: React.FC<IProductsListProps> = ( {remove, products}) => {
    const {id} = useParams()
    const { get, getAll } = React.useContext(ApiProductContext) as IProductContext

  useEffect(() => {
    getAll()
    get(id)
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
                      <NavLink to={`/updateProduct/${product.articleNumber}`}>
                        <button className='edit'><i className="fa-solid fa-pencil"></i></button>
                      </NavLink>
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