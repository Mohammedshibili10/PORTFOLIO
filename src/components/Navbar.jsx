import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open,setOpen]=useState(false)
  function add(){
    setOpen(!open)
  }
  return (
    <div className='text-white relative'>
        <div className='flex   justify-between  px-5 md:px-10 lg:px-20 py-4 md:py-7 border-b border-gray-500 rounded-xl'>
            <div>
             <Link to="/">   <h1 className=' inline  text-lg md:text-2xl lg:text-2xl font-bold'>MOHAMMED <span className='block md:inline'>SHIBILI EK</span> </h1></Link>
            </div>
            <div className='hidden  lg:flex gap-20 mt-2 font-bold'>
                <p>WORK</p>
                <Link to={'/about'}><p>ABOUT</p></Link>
                <Link to={'/contact'}><p>CONTACT</p></Link>
            </div>
            <div className='lg:hidden ' >
          {open ? <IoClose  onClick={add} style={{color:'white', fontSize:'40px',}} />
         :<GiHamburgerMenu  onClick={add} style={{color:'white', fontSize:'40px',}}/>
       }

        </div>
        {open &&(
         <div className='lg:hidden lg:flex absolute top-27 bg-gray-500 w-screen h-60 mr-10 gap-20 mt-2 font-bold'>
                <p>WORK</p>
                <p>ABOUT</p>
                <p>CONTACT</p>
            </div>
            )}
        </div>






    </div>
  )
}
