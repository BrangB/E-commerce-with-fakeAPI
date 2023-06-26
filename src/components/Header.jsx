import React, { useContext } from 'react'
import { SidebarContext } from '../Context/SidebarContext';
import { AiOutlineShopping } from "react-icons/ai";


const Header = () => {
  const {isOpen, setIsOpen, handleClose} = useContext(SidebarContext);
  return (
    <header className='bg-pink-200'>
      <div>Header</div>
      <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
        <AiOutlineShopping className='text-2xl'/>
      </div>
    </header>
  )
}

export default Header