import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UpdateForm from '../components/UpdateForm'
import { IProductContext, useProductContext } from '../contexts/ApiProductContext'

const UpdateProductView: React.FC = () => {
  document.title = 'Update Product | Fixxo.'
  const {id} = useParams<string>()
  const productContext = useProductContext () as IProductContext
 
  

  useEffect(() => {
    productContext.get(id)
  }, [])


  return (
    <>
      <UpdateForm  />
    </>
  )
}

export default UpdateProductView
