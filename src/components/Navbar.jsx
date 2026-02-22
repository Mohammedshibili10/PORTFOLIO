// import React, { useState } from 'react'
// import { IoClose } from "react-icons/io5";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   const [open, setOpen] = useState(false)
//   function add() {
//     setOpen(!open)
//   }
//   return (
//     <div className='text-white relative'>
//       <div className=' flex justify-between  px-5 md:px-10 lg:px-20 py-4 md:py-7 border-b border-gray-500 '>

//         <div >
//           <Link to="/"><h1 className='text-lg lg:text-2xl lg:text-2xl font-bold'>MOHAMMED <span className=''>SHIBILI EK</span> </h1></Link>
//         </div>
//         {/* <div className='sm:hidden lg:flex text-white gap-20 mt-2 font-bold'>
//           <Link to={'/'}><p>HOME</p></Link>
//           <Link to={'/work'}><p>WORK</p></Link>
//           <Link to={'/about'}><p>ABOUT</p></Link>
//           <Link to={'/contact'}><p>CONTACT</p></Link>
//         </div> */}
//         <div className='' >
//           {open ? <IoClose onClick={add} style={{ color: 'white', fontSize: '40px', }} />
//             : <GiHamburgerMenu onClick={add} style={{ color: 'white', fontSize: '40px', }} />
//           }

//         </div>

//         <div
//           className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300
//     ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
//           onClick={() => setOpen(false)}
//         />

//         {/* SIDEBAR */}
//         <div
//           className={`fixed top-0 right-0 z-50 h-screen w-[320px] bg-[#0d0d0d] border-l border-[#222]
//     transform transition-transform duration-500 ease-in-out
//     ${open ? "translate-x-0" : "translate-x-full"}`}
//         >
//           <div className="flex flex-col items-center py-16 space-y-8 text-white">

//             {[
//               { name: "HOME", path: "/" },
//               { name: "WORK", path: "/work" },
//               { name: "ABOUT", path: "/about" },
//               { name: "CONTACT", path: "/contact" },
//             ].map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setOpen(false)}
//                 className="group w-[260px]"
//               >
//                 <div
//                   className="flex items-center justify-center h-14 rounded-xl border border-[#D3E97A] text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#D3E97A] hover:text-black hover:shadow-lg hover:shadow-[#D3E97A]/30"
//                 >
//                   {item.name}
//                 </div>
//               </Link>
//             ))}

//           </div>
//         </div>
//       </div>






//     </div>
//   )
// }

import { Hamburger, Link, Menu } from "lucide-react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);
 
   const click = () => setOpen(prev => !prev);
 


  return (
    <>
       <h1></h1>
      {/* Toggle button – top right */}
      <button onClick={click}
        className="fixed top-6 right-6 z-[60] w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-full bg-red-600/10 backdrop-blur-md border border-red-600/30 hover:bg-red-600/20 transition-all duration-300 glow-shadow">
        {open ? (
          <IoClose className="w-8 h-8 text-red-600 " />
        ) : (
          <Menu className="w-6 h-6 text-red-500 " />
        )}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      />
      {/* Side nav panel */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-black/70 backdrop-blur-4xl border-l border-red-700/80 flex flex-col items-center justify-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Glow decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <a
          href="#"
          className="font-display text-4xl text-red-600 tracking-wider mb-10"
        >SHIBILI </a>

        {/*           
            className="text-muted-foreground hover:text-primary transition-all duration-300 text-lg font-medium tracking-widest uppercase py-3 px-8 w-full text-center hover:bg-primary/5"
            style={{
              transitionDelay: open ? `${i * 80 + 100}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(30px)",
            }}
          */}


        <div className=" hover:text-red-600 transition-all duration-300 text-2xl font-medium tracking-widest uppercase py-3 px-8 w-full text-center hover:bg-red-500/5 hover:scale-115 " style={{
          transitionDelay: open ? `${80 + 100}ms` : "0ms",
          opacity: open ? 1 : 0,
          transform: open ? "translateX(0)" : "translateX(30px)",
        }}>home</div>
        <div className="hover:text-red-600 transition-all duration-300 text-2xl font-medium tracking-widest uppercase py-3 px-8 w-full text-center hover:bg-red-500/5 hover:scale-115" style={{
          transitionDelay: open ? `${80 + 100}ms` : "0ms",
          opacity: open ? 1 : 0,
          transform: open ? "translateX(0)" : "translateX(30px)",
        }}>work</div>
        <div className="hover:text-red-600 transition-all duration-300 text-2xl font-medium tracking-widest uppercase py-3 px-8 w-full text-center hover:bg-red-500/5 hover:scale-115" style={{
          transitionDelay: open ? `${80 + 100}ms` : "0ms",
          opacity: open ? 1 : 0,
          transform: open ? "translateX(0)" : "translateX(30px)",
        }}>about</div>
        <div className="hover:text-red-600 transition-all duration-300 text-2xl font-medium tracking-widest uppercase py-3 px-8 w-full text-center hover:bg-red-500/5 hover:scale-115" style={{
          transitionDelay: open ? `${80 + 100}ms` : "0ms",
          opacity: open ? 1 : 0,
          transform: open ? "translateX(0)" : "translateX(30px)",
        }}>contact</div>

      </nav>
    </>
  );
};
export default Navbar;