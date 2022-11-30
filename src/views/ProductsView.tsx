import React, {useEffect} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductsView: React.FC = () => {
    document.title = 'Products | Fixxo.'
    const {products, getProducts} = useProductContext() as ProductContextType

    useEffect(() => {
      getProducts()
    }, [])


  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Related Products" items={products}/>
      <FooterSection />
    </>
  )
}

export default ProductsView
