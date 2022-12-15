import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom'
import GrayImage from '../assets/images/gray-img.png'
import ProductCard from '../components/ProductCard'
import { ProductModel } from '../models/ProductModel'
import WomenOne from '../assets/images/twoForOne.1.jpg'
import WomenTwo from '../assets/images/twoForOne-2.jpg'

interface ICardsProps {
  items: ProductModel[]
}

const OfferAndCardsSectionOne: React.FC<ICardsProps> = ({items = [] } ) => {

  return (
    <section className='offer-one'>
        <div className='container'>
            <img src={WomenTwo} alt=''/>
            <div className='info'>
              <h1>2 FOR USD<p>$29</p></h1>
              <NavLink to="/products" className="btn-theme-white">
                  <span className='corner-left'></span>
                  <span className='corner-right'></span>
                  SHOP NOW
              </NavLink>
            </div>
            <div className='cards'>
              <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4'>
                {
                    items.map(product => <ProductCard key={product.articleNumber} product={product} />)
                }
              </div>
            </div>
        </div>
        <div>
       
        </div>
    </section>
  )
}

export default OfferAndCardsSectionOne