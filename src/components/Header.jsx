import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../Context/SidebarContext';
import { CartContext } from '../Context/CartContext';
import { AiOutlineShopping } from "react-icons/ai";
import logo from '../img/logo.svg'
import { Link } from 'react-router-dom';


const Header = () => {
  const {isOpen, setIsOpen, handleClose} = useContext(SidebarContext);
  const {itemAmount} = useContext(CartContext)

  //header active state
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  return (
    <header className={`${isActive? 'bg-white py-3 shadow-md' : 'bg-none py-4'} fixed w-full z-10 transition-all`}>
      <div className='mx-auto flex items-center justify-between h-full container p-1'>
        <Link to={'/'}>
            <div>
              <img className='w-[40px]' src={logo} alt="" />
            </div>
          </Link>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative max-w-[50px]'>
          <AiOutlineShopping className='text-2xl'/>
          <div className='bg-red-500 absolute -right-2 -bottom-2 w-[22px] h-[22px] text-md rounded-full flex items-center justify-center text-white'>{itemAmount}</div>
        </div>
      </div>
    </header>
  )
}

export default Header