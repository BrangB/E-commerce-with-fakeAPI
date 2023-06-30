import React, { useContext } from 'react'
import { SidebarContext } from '../Context/SidebarContext'
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineClear } from "react-icons/ai";
import { CartContext } from '../Context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart, total, itemAmount} = useContext(CartContext)

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[30px]`}>
      <div className='py-4 flex  items-center justify-between border-b'>
        <div className='text-sm uppercase font-semibold'>Shopping Bag ({itemAmount})</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center' onClick={handleClose}>
         <FiArrowRight className='text-2xl' />
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:[620px] overflow-y-auto overflow-x-hidden'>{cart.map(item => {
        return <CartItem item={item} key={item.id}/>
      })}
      </div>
        <div className='gap-y-2 flex flex-col items-center justify-center border-t-2 absolute right-0 bottom-0 w-full min-h-[100px] bg-white py-3 px-5 shadow-xl'>
          <div className=' flex items-center justify-between w-full mb-4'>
            <div><span className='font-semibold uppercase'>Total: </span>$ {total}</div>
            <div className='cursor-pointer w-10 h-10 flex items-center justify-center text-white bg-red-500 py-4 text-lg' onClick={clearCart}><AiOutlineClear /></div>
          </div>
          <Link to={'/'} className='bg-gray-200 flex justify-center items-center p-2 font-medium w-full text-primary mb-2'>
            View Cart
          </Link>
          <Link to={'/'} className='bg-primary flex justify-center items-center p-2  w-full text-white'>
            Checkout
          </Link>
        </div>
    </div>
  )
}

export default Sidebar