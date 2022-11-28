import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { ProductModel } from '../models/productModel'


interface IShoppingCartProps {
  item: ProductModel
}

const ShoppingCartItem: React.FC<IShoppingCartProps> = ({item}) => {


  
  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart ()

  return (
    <div className='shoppingcart-item'>
      <div className='item-image'>
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className='item-info'>
        <div className='item-info-name'>{item.name}</div>
        <div className='item-info-quantity'>
          <div className='item-info-quantity-box'>
            <button onClick={() => decrementQuantity(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementQuantity(item)}>+</button>
          </div>
        </div>
      </div>
      <div className='item-price'>
        <div>{currencyFormatter(item.price * item.quantity)}</div>
        <button onClick={() => removeItem(item.articleNumber)}><i className='fa-solid fa-trash'></i></button>
      </div>
    </div>
  )
}

export default ShoppingCartItem