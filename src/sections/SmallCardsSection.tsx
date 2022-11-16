import React from 'react'
import SmallProductCard from '../components/SmallProductCard'


const SmallCardsSection: React.FC = ( ) => {

  return (
    <section className='small-cards'>
        <div className='container'>
            <div className='latest'>
                <h1>Latest Product</h1>
                <SmallProductCard  />
                <SmallProductCard  />
                <SmallProductCard  />
            </div>
            <div className='best-selling'>
                <h1>Best Selling Product</h1>
                <SmallProductCard  />
                <SmallProductCard  />
                <SmallProductCard  />
            </div>
            <div className='top-ranked'>
                <h1>Top Ranked Product</h1>
                <SmallProductCard  />
                <SmallProductCard  />
                <SmallProductCard  />
            </div>
        </div>
    </section>
  )
}

export default SmallCardsSection