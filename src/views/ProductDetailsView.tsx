import React, { useEffect, useState, useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetailsSection from '../sections/ProductDetailsSection'
import ProductGridSection from '../sections/ProductGridSection'
import { useParams } from 'react-router-dom'
import {FourProductsContext } from '../contexts/contexts'

const ProductDetailsView: React.FC = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  const four = useContext(FourProductsContext);
  

  useEffect(() => {
      const fetchData = async () => {
          const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
          setProduct(await result.json())
      }
      fetchData()
  }, [])


  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductDetailsSection product={product} />
      <ProductGridSection title="Related Products" items={four}/>
      <FooterSection />
    </>
  )
}

export default ProductDetailsView
