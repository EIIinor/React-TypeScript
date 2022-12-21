import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UpdateForm from '../components/UpdateForm'
import {IProductContext, ApiProductContext} from '../contexts/ApiProductContext'

const UpdateProductView: React.FC = () => {
  document.title = 'Update Product | Fixxo.'
  const {id} = useParams()
  const { update, get, product } = React.useContext(ApiProductContext) as IProductContext
 
  // const articleNumber = useParams().articleNumber
  // const getId = articleNumber !== undefined ? (articleNumber): "";


  useEffect(() => {
    get(id)
  }, [])

  // useEffect (() => {
  //   if(product.articleNumber) {
  //     get(product.articleNumber)
  //   }
  // }, [])


  return (
    <>
      <UpdateForm product={product} update={update}/>
    </>
  )
}

export default UpdateProductView
