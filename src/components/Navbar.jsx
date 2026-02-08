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
    <div className='text-white relative'>
      <div className=' flex justify-between  px-5 md:px-10 lg:px-20 py-4 md:py-7 border-b border-gray-500 '>

        <div >
          <Link to="/"><h1 className='text-lg lg:text-2xl lg:text-2xl font-bold'>MOHAMMED <span className=''>SHIBILI EK</span> </h1></Link>
        </div>
        {/* <div className='sm:hidden lg:flex text-white gap-20 mt-2 font-bold'>
          <Link to={'/'}><p>HOME</p></Link>
          <Link to={'/work'}><p>WORK</p></Link>
          <Link to={'/about'}><p>ABOUT</p></Link>
          <Link to={'/contact'}><p>CONTACT</p></Link>
        </div> */}
        <div className='' >
          {open ? <IoClose onClick={add} style={{ color: 'white', fontSize: '40px', }} />
            : <GiHamburgerMenu onClick={add} style={{ color: 'white', fontSize: '40px', }} />
          }

        </div>

        <div
          className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setOpen(false)}
        />

        {/* SIDEBAR */}
        <div
          className={`fixed top-0 right-0 z-50 h-screen w-[320px] bg-[#0d0d0d] border-l border-[#222]
    transform transition-transform duration-500 ease-in-out
    ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex flex-col items-center py-16 space-y-8 text-white">

            {[
              { name: "HOME", path: "/" },
              { name: "WORK", path: "/work" },
              { name: "ABOUT", path: "/about" },
              { name: "CONTACT", path: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="group w-[260px]"
              >
                <div
                  className="flex items-center justify-center h-14 rounded-xl border border-[#D3E97A] text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#D3E97A] hover:text-black hover:shadow-lg hover:shadow-[#D3E97A]/30"
                >
                  {item.name}
                </div>
              </Link>
            ))}

          </div>
        </div>
      </div>






    </div>
  )
}
