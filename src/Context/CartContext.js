import React, { createContext, useEffect, useState } from 'react'
import Product from '../components/Product';

export const CartContext = createContext();

const CartProvier = ({children}) => {

    const [cart, setCart] = useState([]);
    const [itemAmount, setItemAmount] = useState(0);
    const [total, setTotal] = useState(0);

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

    const clearCart = () => {
      setCart([]);
    }

    const increaseAmount = (id) => {
      const cartItem = cart.find((item) => item.id === id)
      addToCart(cartItem, id)
    }

    const decreaseAmount = (id) => {
      const cartItem = cart.find((item) => item.id === id)
      if(cartItem){
        const newCart = cart.map(item => {
          if(item.id === id){
            return {...item, amount: cartItem.amount - 1}
          }else{
            return item;
          }
        })
        setCart(newCart)
      }
      if(cartItem.amount < 2){
        removeFromCart(id)
      }
    }

    useEffect(() => {
        if(cart){
          const amount = cart.reduce((accumulator, currentItem) => {
            return accumulator + currentItem.amount;
          }, 0)
          setItemAmount(amount)
        }
    }, [cart])

    useEffect(() => {
      if(cart){
        const totalPrice = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.price * currentItem.amount
        }, 0)
        setTotal(totalPrice)
      }
    })
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, itemAmount, total}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvier