import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvier = ({children}) => {

    const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={'this is the cart context'}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvier