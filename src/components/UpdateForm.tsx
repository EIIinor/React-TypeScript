import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IProductContext, ApiProductContext } from '../contexts/ApiProductContext'

const UpdateForm = () => {
    const id = useParams()
    const { update , product, setProduct, get } = React.useContext(ApiProductContext) as IProductContext


   useEffect(() => {
       get(product.articleNumber)
   }, [get, id])

  return (
    <form onSubmit={update} className="d-grid mb-5" >
      <h3 className='display-6 mb-4' >Update Product</h3>
      <input type="hidden" value={product.articleNumber} />
      <input value={product.articleNumber} onChange={(e) => setProduct ({...product, articleNumber: e.target.value})} type="number" className="form-control py-2 mb-3" placeholder="Enter product articleNumber"/>
      <input value={product.name} onChange={(e) => setProduct ({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product name"/>
      <input value={product.price} onChange={(e) => setProduct ({...product, price: e.target.valueAsNumber})} type="number" className="form-control py-2 mb-3" placeholder="Enter product price"/>
      <input value={product.category} onChange={(e) => setProduct ({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product category"/>
      <input value={product.imageName} onChange={(e) => setProduct ({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product imageUrl"/>
      <button type="submit" className='btn btn-theme'>UPDATE PRODUCT</button>
    </form>
  )
}

export default UpdateForm