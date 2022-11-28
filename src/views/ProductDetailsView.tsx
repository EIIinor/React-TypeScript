import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import ProductGridSection from '../sections/ProductGridSection'
import { useParams } from 'react-router-dom'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView: React.FC = () => {
  document.title = 'Product Details | Fixxo.'
  const {id} = useParams<string>()
  const productContext = useProductContext () as ProductContextType
 
  

  useEffect(() => {
    productContext.getProduct(id)
  }, [])


  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductDetailsSection product={productContext.product} />
      <ProductGridSection title="Related Products" items={productContext.product}/>
      <FooterSection />
    </>
  )
}

export default ProductDetailsView
