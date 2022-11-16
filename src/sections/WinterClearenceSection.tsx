import React from 'react'
import { NavLink } from 'react-router-dom'
import winter from "../assets/images/winter-img.svg"
import newArrivals from "../assets/images/newArrivals-img.svg"

const WinterClearenceSection: React.FC = () => {
  return (
    <section className='winter-clearence'>
        <div className='container'>
            <div className='winter'>
                <img src={winter} alt='winter clearance img' />
                <div className='winter-info'>    
                    <h1>Winter Clearence <span>Up to 70% Off!</span></h1>
                    <p>text text text text texttexttexttext text texttext texttext texttextex ters t tesxt text text testc tetc trtdc trtv trct text</p>
                    <NavLink to="#" className="btn-theme-dark">
                    <span className='corner-left'></span>
                    <span className='corner-right'></span>
                    SHOP NOW
                </NavLink>
                </div>
            </div>
            <div className='new-arrivals'>
                <img src={newArrivals} alt='winter clearance img' />
                <div className='arrivals-info'>
                    <h1>New <span>Arrivals</span></h1>
                    <NavLink to="#" className="btn-theme-dark">
                        <span className='corner-left'></span>
                        <span className='corner-right'></span>
                        SHOP NOW
                    </NavLink>
                </div>
            </div>
        </div>

    </section>
  )
}

export default WinterClearenceSection