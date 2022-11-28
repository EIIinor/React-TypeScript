import React from 'react'
import { IProductContext, ProductContext } from '../contexts/ApiProductContext'

const CreateFormProduct = () => {
    const { create , product, setProduct } = React.useContext(ProductContext) as IProductContext

  return (
    <form onSubmit={create} className="d-grid mb-5" >
      <h3 className='display-6 mb-4' >Create Product</h3>
      <input value={product.articleNumber} onChange={(e) => setProduct ({...product, articleNumber: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product articleNumber"/>
      <input value={product.name} onChange={(e) => setProduct ({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product name"/>
      <input value={product.price} onChange={(e) => setProduct ({...product, price: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product price"/>
      <input value={product.category} onChange={(e) => setProduct ({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product category"/>
      <input value={product.imageUrl} onChange={(e) => setProduct ({...product, imageUrl: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product imageUrl"/>
      <input value={product.quantity} onChange={(e) => setProduct ({...product, quantity: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product quantity"/>
      <button type="submit" className='btn btn-theme'>CREATE PRODUCT</button>
    </form>
  )
}

export default CreateFormProduct