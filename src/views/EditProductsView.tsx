import React from 'react'
import ProductsList from '../components/ProductsList'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import EditProductsSection from '../sections/EditProductsSection'
import MainMenuSection from '../sections/MainMenuSection'

const EditProductsView: React.FC = () => {
    document.title = 'Fixxo.'


  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage={'Edit Products'} />
    <EditProductsSection />
    <ProductsList />
    </>
  )
}

export default EditProductsView