import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { AiOutlinePlus,AiOutlineEye } from "react-icons/ai";
import { CartContext } from '../Context/CartContext';


const Product = ({product}) => {

  const {addToCart} = useContext(CartContext)

  const {id, image, category, title, price} = product;
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='max-h-[140px] group-hover:scale-110 transition-all object-cover' src={image} alt="" />
          </div>
        </div>
        <div className='absolute top-3 -right-11 group-hover:right-3 bg-red-500/40 p-1 flex flex-col justify-center items-center opacity-0 gap-y-2 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => addToCart(product, id)} >
            <div className='flex items-center justify-center w-7 h-7 text-white bg-red-500'>
              <AiOutlinePlus  className='text-lg'/>
            </div>
          </button>
          <Link to={`product/${id}`} className='flex items-center justify-center w-7 h-7 text-primary bg-white drop-shadow-lg'>
            <AiOutlineEye className='text-lg'/>
          </Link>
        </div>
      </div>
      <div>
        <div className='text-sm mb-1 capitalize text-gray-500'>{category}</div>
        <Link to={`product/${id}`}>
          <h2 className='font-semibold mb-2 text-md'>{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  )
}

export default Product