import React from 'react'
import { NavLink } from 'react-router-dom'
import ImgWoman from '../assets/images/showcase-woman-img.png';
import ImgMale from '../assets/images/showcase-male-img.png';

const ShowcaseSection: React.FC = () => {
  return (
    <section className='showcase'>
        <div className='container-fluid'>
            <img src={ImgWoman} alt='showcase img' />
            <div className='info'>
                <h1>SALE UP <span>To 50% Off</span></h1>
                <p>Online shopping free home delivery over $100</p>
                <NavLink to="/products" className="btn-theme">
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    SHOP NOW
                </NavLink>
            </div>
            <img src={ImgMale} alt='showcase img' />
        </div>
    </section>
  )
}

export default ShowcaseSection
