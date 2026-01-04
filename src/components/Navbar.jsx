import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  function add() {
    setOpen(!open)
  }
  return (
    <div className='text-white '>
      <div className='flex   justify-between  px-5 md:px-10 lg:px-20 py-4 md:py-7 border-b border-gray-500 '>
        <div>
          <Link to="/">   <h1 className=' inline  text-lg md:text-2xl lg:text-2xl font-bold'>MOHAMMED <span className='block md:inline'>SHIBILI EK</span> </h1></Link>
        </div>
        <div className='hidden  lg:flex gap-20 mt-2 font-bold'>
          <Link to={'/'}><p>HOME</p></Link>
          <p>WORK</p>
          <Link to={'/about'}><p>ABOUT</p></Link>
          <Link to={'/contact'}><p>CONTACT</p></Link>
        </div>
        <div className='lg:hidden ' >
          {open ? <IoClose onClick={add} style={{ color: 'white', fontSize: '40px', }} />
            : <GiHamburgerMenu onClick={add} style={{ color: 'white', fontSize: '40px', }} />
          }

        </div>
        {open && (
          <div className='absolute top-22 left-0 w-full h-screen bg-black z-[999] lg:hidden'>
            <div className='flex flex-col items-center py-10 space-y-6'>
              <Link to={'/'} onClick={()=>setOpen(false)}><div className=' flex items-center justify-center border border-[#D3E97A] text-lg w-[320px]  h-12 text-center  rounded-lg hover:bg-[#D3E97A] active:bg-[#D3E97A]'>HOME</div></Link>
              <div className='flex items-center justify-center border border-[#D3E97A] text-lg w-[320px]  h-12 text-center  rounded-lg hover:bg-[#D3E97A] active:bg-[#D3E97A]'>WORK</div>
              <Link to={'/about'} onClick={()=>setOpen(false)}><div className='flex items-center justify-center border border-[#D3E97A] text-lg w-[320px]  h-12 text-center  rounded-lg hover:bg-[#D3E97A] active:bg-[#D3E97A]'>ABOUT</div></Link>
              <Link to={'/contact'}  onClick={()=>setOpen(false)}><div className=' flex items-center justify-center border border-[#D3E97A] text-lg w-[320px]  h-12 text-center  rounded-lg hover:bg-[#D3E97A] active:bg-[#D3E97A]'>CONTACT</div></Link>
            </div>
          </div>
        )}
      </div>






    </div>
  )
}
