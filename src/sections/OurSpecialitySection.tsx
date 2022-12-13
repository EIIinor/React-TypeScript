import React from 'react'
import { NavLink } from 'react-router-dom'
import graySmallImg from "../assets/images/gray-small-img.png"
import deliveryImg from "../assets/images/delivery-img.webp"
import adjustImg from "../assets/images/adjust-price.webp"
import returnImg from "../assets/images/return-img.webp"

const OurSpecialitySection: React.FC = () => {

  return (
    <section className='speciality'>
        <div className='container-fluid'>
            <h1>Our Speciality</h1>
            <div className='choices'>
                <div className='track'>
                    <h1>Track Your Order</h1>
                    <NavLink to="#" className="link">Get Started </NavLink>
                </div>
                <img className='first' src={deliveryImg} alt='' />
                <div className='return'>
                <h1>Make a Return</h1>
                    <NavLink to="#" className="link">Get Started </NavLink>
                </div>
                <img className='seacond' src={returnImg} alt='' />
                <div className='adjustment'>
                <h1>Request a Price <span>Adjustment</span></h1>
                    <NavLink to="#" className="link">Get Started </NavLink>
                </div>
                <img className='third' src={adjustImg} alt='' />
            </div>
        </div>
    </section>
  )
}

export default OurSpecialitySection