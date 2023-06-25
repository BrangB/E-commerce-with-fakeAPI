import React, {useContext} from 'react'

import {ProductContext} from '../Context/ProductContext'

const Home = () => {

  const products = useContext(ProductContext)

  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })
  console.log(filteredProducts)
  return (
    <div>
      <section className='py-16'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
            {filteredProducts.map(product => {
              return(
                <div className='w-full h-[300px] bg-pink-200' key={product.id}>{product.title}</div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home