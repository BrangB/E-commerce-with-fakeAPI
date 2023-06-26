import React, { useContext } from 'react'
import { SidebarContext } from '../Context/SidebarContext'
import { FiArrowRight } from "react-icons/fi";


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);
  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full h-full bg-white fixed top-0 shadow-xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[30px]`}>
      <div className='py-6 flex  items-center justify-between border-b'>
        <div className='text-sm uppercase font-semibold'>Shopping Bag (0)</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center' onClick={handleClose}>
         <FiArrowRight className='text-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar