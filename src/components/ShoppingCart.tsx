import React from 'react'
import {useShoppingCart} from '../contexts/ShoppingCartContext'
import ShoppingCartItem from './ShoppingCartItem'
import { Product } from '../models/productsModel'

interface IShoppingCartProps {
    item: string
}

const ShoppingCart: React.FC<IShoppingCartProps> = () => {
    const {cartItems} = useShoppingCart ()


      
  return (
    <div className="shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-bag-shopping me-3"></i>Your Amazing finds</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            {
                cartItems.map((item:Product) => (<ShoppingCartItem key={item.articleNumber} item={item} />))
            }
        </div>
    </div>
  )
}

export default ShoppingCart
