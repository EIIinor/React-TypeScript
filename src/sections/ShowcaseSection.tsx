import React from 'react'
import { NavLink } from 'react-router-dom'
import ImgWoman from '../assets/images/showcase-woman-img.png';
import ImgMale from '../assets/images/showcase-male-img.png';
import showCase1 from "../assets/images/showcase-img-1.png"
import showCase2 from "../assets/images/showcase-img-2.png"

const ShowcaseSection: React.FC = () => {
  return (
    <section className='showcase'>
        <div className='container-fluid'>
            <img src={showCase1} alt='showcase img' />
            <div className='info'>
                <h1>SALE UP <span>To 50% Off</span></h1>
                <p>Online shopping free home delivery over $100</p>
                <NavLink to="/products" className="btn-theme">
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    SHOP NOW
                </NavLink>
            </div>
            <img src={showCase2} alt='showcase img' />
        </div>
    </section>
  )
}

export default ShowcaseSection
