import React from 'react'
import smallCardImg from "../assets/images/small-card-img.png"
import ExternalLinkIcon from '../components/ExternalLinkIcon'
import { ProductModel } from '../models/productModel'

interface ICardSectionProps {
    product: ProductModel
}


const ProductCardSection: React.FC<ICardSectionProps> = ( {product} ) => {


  return (
    <section className='products-card'>
        <div className='container'>
            <div className='card'>
                <div className='images'>
                    <img src={product.imageUrl} alt='' />
                    <img className='one' src={smallCardImg} alt='' />
                    <img className='two' src={smallCardImg} alt='' />
                    <img className='three' src={smallCardImg} alt='' />
                </div>
                <div className='card-body'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='title-brand'>SKU: 12345670 BRAND: The Northland</p>
                    <p className='card-rating'>
                        <i className='fa-sharp fa-solid fa-star'></i>
                        <i className='fa-sharp fa-solid fa-star'></i>
                        <i className='fa-sharp fa-solid fa-star'></i>
                        <i className='fa-sharp fa-solid fa-star'></i>
                        <i className='fa-sharp fa-solid fa-star'></i>
                    </p>
                    <p className='card-price'>${product.price}</p>
                    <p className='product-info'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel
                        <span  
                            className="dots">...
                        </span>
                        <span 
                            className="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.
                        </span>
                    </p>
                    <button  className="myBtn">(read more)</button>
                    <div className='size'>
                        <h6>Size:</h6>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                    <div className="color">
                        <h6>Color:</h6>
                        <button  className="dropbtn">Choose an option</button>
                    </div>
                    <div className='quantity'>
                        <h6>Quantity:</h6>
                        <button className='button'>ADD TO CART</button>
                    </div>
                    <div className='share'>
                        <h6>Share:</h6>
                        <ExternalLinkIcon link="https://facebook.com" icon="fa-brands fa-facebook-f" />
                        <ExternalLinkIcon link="https://instagram.com" icon="fa-brands fa-instagram" />
                        <ExternalLinkIcon link="https://twitter.com" icon="fa-brands fa-twitter" />
                        <ExternalLinkIcon link="https://google.com" icon="fa-brands fa-google" />
                        <ExternalLinkIcon link="https://linkedin.com" icon="fa-brands fa-linkedin" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}



export default ProductCardSection