import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AiFillDelete,AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from '../Context/CartContext';


const CartItem = ({item}) => {
  const {removeFromCart} = useContext(CartContext)
  const {id, image, title, price, amount} = item;
  return (
    <div className='flex gap-x-4 py-4 lg:px-4 xl:px-6 border-b border-gray-300 font-light text-gray-500 w-full '>
      <div className='flex items-center w-full min-h-[100px] gap-x-2'>
        <Link className='me-4' to={`product/${id}`}>
          <img className='max-w-[40px] object-cover' src={image} alt="" />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-3'>
            <Link to={`product/${id}`} className='text-sm text-primary uppercase hover:underline font-medium max-w-[280px] '>{title}</Link>
            <div className='cursor-pointer'>
              <AiFillDelete className='text-lg hover:text-red-500 text-gray-500 transition-all duration-300' onClick={() => removeFromCart(id)}/>
            </div>
          </div>
          <div className='flex gap-x-2 text-sm h-[36px] px-2'>
            <div className='flex items-center justify-between min-w-[100px] max-w-[200px] lg:max-w-[230px] h-full text-sm text-primary border px-2 lg:px-3 font-medium'>
              {/* remove icon */}
              <div className='cursor-pointer'>
                <AiOutlineMinus />
              </div>
              {/* amount */}
              <div className='cursor-pointer'>
                {amount}
              </div>
              {/* add icon */}
              <div className='cursor-pointer'>
                <AiOutlinePlus />
              </div>
            </div>
            <div className='flex-1 flex h-full items-center justify-around'>$ {price}</div>
            <div className='flex-1 flex h-full items-center justify-end'>${parseFloat(price * amount).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem