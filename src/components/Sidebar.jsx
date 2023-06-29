import React, { useContext } from 'react'
import { SidebarContext } from '../Context/SidebarContext'
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineClear } from "react-icons/ai";
import { CartContext } from '../Context/CartContext';
import CartItem from './CartItem';


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  const {cart, clearCart} = useContext(CartContext)

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[30px]`}>
      <div className='py-6 flex  items-center justify-between border-b'>
        <div className='text-sm uppercase font-semibold'>Shopping Bag (0)</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center' onClick={handleClose}>
         <FiArrowRight className='text-2xl' />
        </div>
      </div>
      <div className=''>{cart.map(item => {
        return <CartItem item={item} key={item.id}/>
      })}
      </div>
      <div className='gap-y-4 mt-2 flex flex-col py-4'>
        <div className=' flex items-center justify-between w-full'>
          <div><span className='font-semibold uppercase'>Total: </span>$10000</div>
        <div className='cursor-pointer w-10 h-10 flex items-center justify-center text-white bg-red-500 py-4 text-lg' onClick={clearCart}><AiOutlineClear /></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar