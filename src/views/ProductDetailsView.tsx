import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import ProductGridSection from '../sections/ProductGridSection'
import { useParams } from 'react-router-dom'
import { IProductContext, useProductContext } from '../contexts/ApiProductContext'

const ProductDetailsView: React.FC = () => {
  document.title = 'Product Details | Fixxo.'
  const {id} = useParams<string>()
  const productContext = useProductContext () as IProductContext
 
  

  useEffect(() => {
    productContext.get(id)
    productContext.getFeatured(4)
  }, [])


  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection parentPage="Products" currentPage={productContext.product.name} />
      <ProductDetailsSection product={productContext.product} />
      
      <ProductGridSection title="Related Products" items={productContext.featured}/>

      <FooterSection />
    </>
  )
}

export default ProductDetailsView
