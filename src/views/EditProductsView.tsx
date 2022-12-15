import React, { useEffect } from 'react'
import ProductsList from '../components/ProductsList'
import BreadcrumbSection from '../sections/BreadcrumbSection'
// import EditProductsSection from '../sections/EditProductsSection'
import MainMenuSection from '../sections/MainMenuSection'
import CreateFormProduct from '../components/CreateFormProduct'
import {IProductContext, ApiProductContext} from '../contexts/ApiProductContext'



const EditProductsView: React.FC = () => {
    const { products, getAll, remove} = React.useContext(ApiProductContext) as IProductContext
    document.title = 'Fixxo.'

    useEffect(() => {
      getAll()
  
    }, [])

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage={'Edit Products'} />
    <CreateFormProduct />
    <ProductsList products={products} remove={remove} />
    </>
  )
}

export default EditProductsView