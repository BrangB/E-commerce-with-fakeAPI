import React, {useContext} from 'react'

import {ProductContext} from '../Context/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero'

const Home = () => {

  const {products} = useContext(ProductContext)

  const filteredProducts = products.filter(item => {
    return item.category === "men's clothing" || item.category === "women's clothing"
  })
  return (
    <>
      <Hero />
      <section className='py-16'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]'>
            {filteredProducts.map(product => {
              return(
                <Product product={product} key={product.id}/>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home