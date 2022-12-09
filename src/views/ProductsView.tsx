import React, {useEffect} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import FooterSection from '../sections/FooterSection'
import { IProductContext, useProductContext } from '../contexts/ApiProductContext'

const ProductsView: React.FC = () => {
    document.title = 'Products | Fixxo.'
    const {products, getAll} = useProductContext() as IProductContext

    useEffect(() => {
      getAll()
    }, [getAll])


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
