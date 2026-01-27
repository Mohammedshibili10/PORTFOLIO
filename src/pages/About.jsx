import React from 'react'
import Navbar from '../components/Navbar'
import { MdArrowOutward, MdDescription } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Form from '../components/Form';
import aboutImage from '../assets/images/image.jpg'
import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <div className='font-display '>
      <Navbar />
       <div className='hidden lg:block relative top-5 left-20 text-gray-300 '>
              <Link to="/">  <button className=' hover:text-white text-sm border-b  rounded-lg w-25 h-8'>Home <IoReturnDownBackSharp className='inline w-7 h-7' /></button></Link> 
            </div>
      <div className='px-5 md:px-20 lg:px-20  py-10 md:py-20   lg:flex justify-between xl:gap-30   '>
        <div>
          <h1 className='text-4xl w-80  md:text-[50px] lg:text-5xl xl:text-6xl text-white  font-bold'>ABOUT ME</h1>
        </div>
        <div className=' space-y-4 '>
          <h1 className='text-xl md:text-3xl lg:text-4xl   text-white '>I’m a MERN Stack Developer skilled in MongoDB, Express, React, and Node.js, focused on building fast, scalable, and user-friendly web applications. </h1>
          <p className=' text-sm md:text-md lg:text-lg text-[#C7C7C7]'>I am a passionate MERN Stack Developer who builds modern, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I focus on writing clean, scalable code and creating intuitive user experiences while continuously upgrading my skills to deliver impactful digital solutions.</p>
          <div className='flex gap-5 mt-10'>
            <button className=' text-md bg-[#D3E97A] w-50 h-13 pl-2 pt-1 rounded-full text-black font-bold '> DOWNLOAD RESUME<MdArrowOutward className='w-6 h-6 ml-2 mb-1  inline ' />  </button>
           <a href="https://www.linkedin.com/in/mohammed-shibili-ek" target='_blank'  rel="noopener noreferrer"> <button className=' w-13 h-13 rounded-full bg-[#222222]  '><FaLinkedinIn className='w-6 h-6 ml-3.5 text-[#D3E97A]' /></button></a>
            <a href="https://github.com/Mohammedshibili10" target='_blank'  rel="noopener noreferrer"> <button className=' w-13 h-13 rounded-full bg-[#222222]'><FaGithub className='w-6 h-6 ml-3.5 text-[#D3E97A]' /></button></a>
          </div>
        </div>
      </div>
      <div className=' px-5 md:px-20 lg:px-20 '>
        <img className='w-screen h-80 md:h-100 lg:h-150 rounded-lg' src={aboutImage} alt="error" />
      </div>

      {/* MY CAPABILITES */}
      <div className='text-white mt-10 lg:mt-25 '>
        <div className='lg:flex justify-between gap-30 px-5 md:px-20 lg:px-20 mb-20 '>
          <div>
            <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold'>MY CAPABILITIES</h1>
          </div>
          <div className='max-w-3xl'>
            <p className='lg:text-lg text-[#C7C7C7]'>Full-stack MERN developer skilled in building responsive user interfaces, secure RESTful APIs, and scalable database-driven applications. I focus on clean code, performance, and delivering reliable end-to-end web solutions.</p>
            <div className='lg:max-w-2xl  flex flex-wrap  gap-5 text-center mt-10'>

              <h1 className=' w-30 h-12 text-sm md:text-md  pt-2.5 border-2 rounded-full border-[#222222]'>HTML</h1>
              <h1 className=' w-20 h-12 text-sm md:text-md pt-2.5 border-2 rounded-full border-[#222222]'>CSS</h1>
              <h1 className=' w-42 h-12 text-sm md:text-md pt-2.5 border-2 rounded-full border-[#222222]'>TAILWIND CSS</h1>
              <h1 className=' w-40 h-12 text-sm md:text-md pt-2.5 border-2 rounded-full border-[#222222]'>JAVASCRIPT</h1>

              <h1 className=' w-33 h-12 text-sm md:text-md pt-2.5  border-2 rounded-full border-[#222222]'>BOOTSTRAP</h1>
              <h1 className=' w-25 h-12 text-sm md:text-md pt-2.5  border-2 rounded-full border-[#222222]'>REACT</h1>
              <h1 className=' w-26 h-12 text-sm md:text-md pt-2.5  border-2 rounded-full border-[#222222]'>NODE JS</h1>
              <h1 className=' w-35 h-12 text-sm md:text-md pt-2.5  border-2 rounded-full border-[#222222]'>EXPRESS</h1>
            </div>
          </div>
        </div>
        <hr className='text-[#222222]'></hr>
      </div>


      {/* EXPERINCE */}

      <div className='text-white'>
        <div className='lg:flex justify-between gap-30 px-5 md:px-20 lg:px-20 mt-10 md:mt-20 mb-20 '>
          <div>
            <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold'>MY EXPERIENCE</h1>
          </div>
          <div>
            <div className='max-w-3xl space-y-1 md:space-y-3 mt-5 md:mt-0'>
              <div className='md:flex justify-between '>
                <h1 className='text-2xl md:text-3xl'>Freelance Developer</h1>
                <p className='md:mt-3 text-sm lg:text-md  text-[#C7C7C7]'>Nov 2023 — Present </p>
              </div>
              <p className='text-md md:text-lg mt-3 md:mt-0 text-[#C7C7C7]'> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

              <div className='md:flex justify-between mt-10 md:mt-20'>
                <h1 className='text-2xl md:text-3xl'>Mern Stack eveloper</h1>
                <p className='mt-3 text-sm lg:text-md text-[#C7C7C7]'>DEC-2025-PRESENT </p>
              </div>
              <p className=' text-[#D3E97A] '>Ash Academy</p>
              <p className='text-md md:text-lg mt-3 md:mt-0 text-[#C7C7C7]'> Interned at ASH Academy, gaining hands-on MERN stack experience and building responsive, user-friendly web applications. </p>
            </div>
          </div>
        </div>
        <hr className='text-[#222222]'></hr>
      </div>

      {/* CONTACT */}
             
                   {/* GRID WRAPPER */}
                   <div className="grid grid-cols-2  xl:gap-32 items-start text-white">
             
                     {/* LEFT */}
                     <div className="px-5 md:px-20 lg:px-20 py-20">
                       <div className="max-w-md space-y-2">
                         <h1 className="text-4xl md:text-[50px] lg:text-6xl font-bold tracking-tight">
                           LET’S CONNECT
                         </h1>
             
                         <p>
                           Say hello at{" "}
                           <span className="border-b border-[#D3E97A]">
                             shibiliek516@gmail.com
                           </span>
                         </p>
             
                         <p>
                           For more info here’s my{" "}
                           <span className="border-b border-[#D3E97A]">Resume</span>
                         </p>
                       </div>
             
                       <div className="grid grid-cols-4 gap-5 mt-10 w-fit">
                         <FaLinkedinIn className="w-8 h-8 text-[#D3E97A]" />
                         <FaGithub className="w-8 h-8 text-[#D3E97A]" />
                         <FaXTwitter className="w-8 h-8 text-[#D3E97A]" />
                         <FaInstagram className="w-8 h-8 text-[#D3E97A]" />
                       </div>
                     </div>
             
                     {/* RIGHT */}
                     <div className="pt-20">
                       <Form />
                     </div>
             
                   </div>





    </div>
  )
}
