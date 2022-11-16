import React from 'react'
import { NavLink } from 'react-router-dom'

const WinterFashionSection: React.FC = () => {
  return (
    <section className='winter-fashion'>
        <div className='container'>
            <div className='info'>
                <h1>Up to 70% off*</h1>
                <p>Women`s, Men`s & Kid`s Winter Fashion</p>
                <NavLink to="#" className="btn-theme-white">
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    FLASH SALE
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default WinterFashionSection