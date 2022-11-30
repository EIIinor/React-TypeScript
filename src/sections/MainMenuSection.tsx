import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'



const MainMenuSection: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
    const {totalQuantity} = useShoppingCartContext () as ShoppingCartContextType


  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='mainmenu'>
      <div className='container'>
        <NavLink className="logo" to='/' end>Fixxo.</NavLink>
        <div className={`menu-links ${ showMenu ? "d-grid": "" }`}>
            <NavLink className="menu-link" to='/' end >Home</NavLink>
            <NavLink className="menu-link" to='/categories' end >Categories</NavLink>
            <NavLink className="menu-link" to='/products' >Products</NavLink>
            <NavLink className="menu-link" to='/contacts' end >Contacts</NavLink>
            <NavLink className="menu-link" to='/editProducts' end >Edit Products</NavLink>
        </div>
        <div className='menu-icons'>
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" />
            <MenuIcon  quantity={3} link="/wishlist" icon="fa-regular fa-heart" />

            <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{totalQuantity}</span>
              <i className="fa-regular fa-bag-shopping"></i>
            </button>

            <button onClick={toggleMenu} className='d-xl-none menu-icon btn-menu-icon'><i className='fa-regular fa-bars'></i></button>

        </div>
      </div>
    </nav>
  )
}

export default MainMenuSection
