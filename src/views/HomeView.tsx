import React, {useContext} from 'react'
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
import { FeaturedProductsContext, FourProductsContext } from '../contexts/contexts'

const HomeView: React.FC = () => {
  window.top.document.title = 'Fixxo.'
  const products = useContext(FeaturedProductsContext);
  const four = useContext(FourProductsContext);
  

  return (
    <>
      <header>
        <MainMenuSection />
        <ShowcaseSection />
      </header>
      <WinterClearenceSection />
      <ProductGridSection title="Featured Products" items={products} />
      <TopPicksSection />
      <OurSpecialitySection />
      <OfferAndCardsSectionOne items={four} />
      <OfferAndCardsSectionTwo items={four} />
      <WinterFashionSection />
      <SmallCardsSection />
      <CustomerInfoSection />
      <FooterSection />
    </>
  )
}

export default HomeView
