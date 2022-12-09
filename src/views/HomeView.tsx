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
import { IProductContext, useProductContext } from '../contexts/ApiProductContext'



const HomeView: React.FC = () => {
  document.title = 'Fixxo.'
  const {featured, getFeatured, mens, getMens, womens, getWomens} = useProductContext() as IProductContext

  useEffect(() => {
    getFeatured(8)
    getMens(4)
    getWomens(4)
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
      <OfferAndCardsSectionOne items={womens} />
      <OfferAndCardsSectionTwo items={mens} />
      <WinterFashionSection />
      <SmallCardsSection />
      <CustomerInfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView
