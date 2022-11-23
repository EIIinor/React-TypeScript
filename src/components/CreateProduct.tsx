import React from 'react'
import { IProductContext, ProductContext } from '../contexts/productContext'

const CreateProduct = () => {
    const { create , setProduct } = React.useContext(ProductContext) as IProductContext

  return (
    <div>CreateProduct</div>
  )
}

export default CreateProduct