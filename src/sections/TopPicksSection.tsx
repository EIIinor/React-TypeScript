import React from 'react'
import { NavLink } from 'react-router-dom'
import PamelaImg from '../assets/images/pamela.png';
import ConsciousImg from '../assets/images/conscious-img.png';

const TopPicksSection: React.FC = () => {

  return (
    <section className='top-picks'>
        <div className='container'>
            <div className='shop-now'>
                <div className='image'>
                    <img src={PamelaImg} alt='' />
                </div>
                <div className='info'>
                    <h1>Pamela Rief's <span>Top Picks</span></h1>
                    <NavLink to="#" className="btn-theme-dark">
                        <span className='corner-left'></span>
                        <span className='corner-right'></span>
                        SHOP NOW
                    </NavLink>
                </div>
            </div>
            <div className='flash-sale'>
                <div className='image'>
                    <img src={ConsciousImg} alt='' />
                </div>
                <div className='info'>
                    <h1>Lets Be <span>Conscious</span></h1>
                    <NavLink to="#" className="btn-theme-white">
                        <span className='corner-left'></span>
                        <span className='corner-right'></span>
                        FLASH SALE
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopPicksSection
