import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPicksSection from '../sections/TopPicksSection'
import OfferAndCardsSectionOne from '../sections/OfferAndCardsSectionOne'
import OfferAndCardsSectionTwo from '../sections/OfferAndCardsSectionTwo'
import CustomerInfoSection from '../sections/CustomerInfoSection'
import WinterClearenceSection from '../sections/WinterClearenceSection'
import OurSpecialitySection from '../sections/OurSpecialitySection'
import WinterFashionSection from '../sections/WinterFashionSection'
import SmallCardsSection from '../sections/SmallCardsSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'



const HomeView: React.FC = () => {
  document.title = 'Fixxo.'
  const {featured, getFeatured, products, getProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeatured(8)
    getProducts(4)
  }, [])
  

  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <WinterClearenceSection />
      <ProductGridSection title="Featured Products" items={featured} />
      <TopPicksSection />
      <OurSpecialitySection />
      <OfferAndCardsSectionOne items={products} />
      <OfferAndCardsSectionTwo items={products} />
      <WinterFashionSection />
      <SmallCardsSection />
      <CustomerInfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView
