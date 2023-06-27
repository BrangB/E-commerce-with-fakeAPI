import React, { createContext, useState } from 'react'
import Product from '../components/Product';

export const CartContext = createContext();

const CartProvier = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, id) => {
      const newItem = {...product, amount: 1};
      const cartItem = cart.find(item => {
        return item.id === id
      })
      
      //check item if already in
      if(cartItem){
        const newCart = [...cart].map(item => {
          if(item.id === id){
            return {...item, amount: cartItem.amount + 1}
          }else{
            return item;
          }
        })
        setCart(newCart)
      }else{
        setCart([...cart, newItem])
      }
    }

    const removeFromCart = (id) => {
      const newCart = cart.filter(item => {
        return item.id !== id
      })
      setCart(newCart)
    }
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvier