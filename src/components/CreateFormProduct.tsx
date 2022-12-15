import React from 'react'
import { IProductContext, ApiProductContext } from '../contexts/ApiProductContext'



const CreateFormProduct: React.FC = () => {
    const { create , product, setProduct } = React.useContext(ApiProductContext) as IProductContext

  return (
    <div className='container'>
      <form onSubmit={create} className="d-grid mb-5" >
        <h3 className='display-6 mb-4' >Create Product</h3>
        <input value={product.articleNumber} onChange={(e) => setProduct ({...product, articleNumber: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product articleNumber"/>
        <input value={product.imageName} onChange={(e) => setProduct ({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product imageUrl"/>
        <input value={product.name} onChange={(e) => setProduct ({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product name"/>
        <input value={product.price} onChange={(e) => setProduct ({...product, price: e.target.valueAsNumber})} type="number" className="form-control py-2 mb-3" placeholder="Enter product price"/>
        <input value={product.category} onChange={(e) => setProduct ({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product category"/>
        <input value={product.description} onChange={(e) => setProduct ({...product, description: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product description"/>
        <input value={product.tag} onChange={(e) => setProduct ({...product, tag: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product tag"/>
        <button type="submit" className='btn btn-theme'>CREATE PRODUCT</button>
      </form>
    </div>
  )
}

export default CreateFormProduct