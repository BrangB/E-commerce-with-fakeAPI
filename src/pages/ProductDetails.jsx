import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { CartContext } from '../Context/CartContext';
import { ProductContext } from '../Context/ProductContext';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart} = useContext(CartContext)
  const { products } = useContext(ProductContext)
  
  const product = products.find(item => {
    return item.id === parseInt(id);
  })
  
  if(!product){
    return(
      <section className='h-screen flex items-center justify-center text-xl font-bold'>
        Loading...
      </section>
    )
  }

  const { title, price, description, image} = product;

  return (
    <section className='pt-24 pb-12 h-screen lg:py-32'>
      <div className='container mx-auto'>
        <div className="flex flex-col lg:flex-row items-center">
          <div className='flex flex-1 items-center justify-center mb-8 lg:mb-0'>
            <img className='max-w-[130px] lg:max-w-[200px] xl:max-w-[300px]' src={image} alt="" />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[24px] mb-2 mx-auto max-w-[450px] font-medium lg:mx-0'>{title}</h1>
            <div className='text-red-400 text:xl font-medium mb-3'>$ {price}</div>
            <p className='mb-8 text-[15px] lg:text-[20px]'>{description}</p>
            <button onClick={() => addToCart(product, product.id)} className='py-2 px-6 bg-primary text-white '>Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails