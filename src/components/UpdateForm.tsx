import React, { useEffect } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { IProductContext, ApiProductContext } from '../contexts/ApiProductContext'

interface IProductsListProps {
  product: any
  update: any
}


const UpdateForm: React.FC<IProductsListProps> = ({product, update}) => {
    // const {id} = useParams()
    const { setProduct, get } = React.useContext(ApiProductContext) as IProductContext

    const navigate = useNavigate()

  //  useEffect(() => {
  //      get(product.articleNumber)
  //  }, [get, id])

  // const articleNumber = useParams().articleNumber
  // const getId = articleNumber !== undefined ? (articleNumber): "";

  // useEffect (() => {
  //     get(id)
  // }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await update()
    navigate('/editProducts')
  }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className="d-grid mb-5" >
        <h3 className='display-6 mb-4' >Update Product</h3>
        <input type="hidden" value={product.articleNumber} />
        <input value={product.articleNumber} onChange={(e) => setProduct ({...product, articleNumber: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product articleNumber"/>
        <input value={product.name} onChange={(e) => setProduct ({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product name"/>
        <input value={product.price} onChange={(e) => setProduct ({...product, price: e.target.valueAsNumber})} type="number" className="form-control py-2 mb-3" placeholder="Enter product price"/>
        <input value={product.category} onChange={(e) => setProduct ({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product category"/>
        <input value={product.imageName} onChange={(e) => setProduct ({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder="Enter product imageUrl"/>
        {/* <NavLink to={'/editProducts'}> */}
          <button type="submit" className='btn btn-theme'>UPDATE PRODUCT</button>
        {/* </NavLink> */}
        <NavLink to={'/editProducts'}>
            <button className='btn btn-theme-dark'>GO BACK</button>
        </NavLink>
      </form>
    </div>
  )
}

export default UpdateForm