import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection: React.FC = ( {title, items = [] } ) => {

  return (
    <section className='product-grid'>
        <div className='container'>
            <h1> {title} </h1>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4'>
               {
                  items.map( product => <ProductCard key={product.articalNumber} item={product} />)
               }
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection