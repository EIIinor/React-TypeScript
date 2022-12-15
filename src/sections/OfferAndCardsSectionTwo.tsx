import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import GrayImage from '../assets/images/gray-img.png'
import ProductCard from '../components/ProductCard'
import { ProductModel } from '../models/ProductModel'
import MaleOne from '../assets/images/twoForOneMale.jpg'

interface ICardsProps {
  items: ProductModel[]
}

const OfferAndCardsSectionTwo: React.FC<ICardsProps> = ({ items = [] }) => {

  return (
    <section className='offer-two'>
        <div className='container'>
           <div className='cards'>
              <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'>
                {
                    items.map(product => <ProductCard key={product.articleNumber} product={product} />)
                }
              </div>
            </div>
            <img src={MaleOne} alt=''/>
            <div className='info'>
              <h1>2 FOR USD<p>$29</p></h1>
                <NavLink to="#" className="btn-theme-white">
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    SHOP NOW
                </NavLink>
            </div>
            </div>
            <div>
        </div>
    </section>
  )
}

export default OfferAndCardsSectionTwo