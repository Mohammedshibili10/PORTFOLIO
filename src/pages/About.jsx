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
import { FaArrowDown } from 'react-icons/fa';
import Footer from '../components/Footer';
import { MdOutlineEmail } from "react-icons/md";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <div className='font-display pt-10  '>
      <Navbar />
       <div className='hidden lg:block relative top-5 left-20 text-gray-300  '>
              <Link to="/">  <button className=' hover:text-white text-sm border-b  rounded-lg w-25 h-8'>Home <IoReturnDownBackSharp className='inline w-7 h-7' /></button></Link> 
            </div>
      <div className='px-5 md:px-20 lg:px-20  py-10 md:py-20   lg:flex justify-between xl:gap-30   '>
        <div>
          <h1 className='text-4xl w-80  md:text-[50px] lg:text-5xl xl:text-6xl text-white  font-bold'>ABOUT <span className='text-red-600'>ME</span></h1>
        </div>
        <div className=' space-y-4 '>
          <h1 className='text-xl md:text-3xl lg:text-4xl   text-white '>I’m a MERN Stack Developer skilled in MongoDB, Express, React, and Node.js, focused on building fast, scalable, and user-friendly web applications. </h1>
          <p className=' text-sm md:text-md lg:text-lg text-[#C7C7C7]'>I am a passionate MERN Stack Developer who builds modern, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I focus on writing clean, scalable code and creating intuitive user experiences while continuously upgrading my skills to deliver impactful digital solutions.</p>
          <div className='flex gap-5 mt-10'>
            <button className=' text-md bg-red-600 w-50 h-13 pl-2 pt-1 rounded-full text-white  '> DOWNLOAD RESUME<MdArrowOutward className='w-6 h-6 ml-2 mb-1  inline ' />  </button>
           <a href="https://www.linkedin.com/in/mohammed-shibili-ek" target='_blank'  rel="noopener noreferrer"> <button className=' w-13 h-13 rounded-full bg-[#222222]  '><FaLinkedinIn className='w-6 h-6 ml-3.5 text-red-600' /></button></a>
            <a href="https://github.com/Mohammedshibili10" target='_blank'  rel="noopener noreferrer"> <button className=' w-13 h-13 rounded-full bg-[#222222]'><FaGithub className='w-6 h-6 ml-3.5 text-red-600' /></button></a>
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
            <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold'>MY <span className='text-red-600'>CAPABILITIES</span></h1>
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
            <h1 className='text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold'>MY <span className='text-red-600'>EXPERIENCE</span></h1>
          </div>
          <div>
            <div className='max-w-3xl space-y-1 md:space-y-3 mt-5 md:mt-0'>
              <div className='md:flex justify-between '>
                <h1 className='text-2xl md:text-3xl'>Freelance Developer</h1>
                <p className='md:mt-3 text-sm lg:text-md  text-[#C7C7C7]'> Present </p>
              </div>
              <p className='text-md md:text-lg mt-3 md:mt-0 text-[#C7C7C7]'>  </p>

              <div className='md:flex justify-between mt-10 md:mt-20'>
                <h1 className='text-2xl md:text-3xl'>Mern Stack eveloper</h1>
                <p className='mt-3 text-sm lg:text-md text-[#C7C7C7]'>DEC-2025-PRESENT </p>
              </div>
              <p className=' text-red-600 '>Ash Academy</p>
              <p className='text-md md:text-lg mt-3 md:mt-0 text-[#C7C7C7]'> Interned at ASH Academy, gaining hands-on MERN stack experience and building responsive, user-friendly web applications. </p>
            </div>
          </div>
        </div>
        <hr className='text-[#222222]'></hr>
      </div>

      {/* CONTACT */}
             
                <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-28 text-white">
        <div className="grid  sm:grid-cols-2 gap-20">

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Get in touch <br /><span className='text-red-600'>with me!</span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-md">
              If you have any inquiries or just want to say hello, please use
              the contact form!
            </p>

            <a
              href="mailto:shibiliek516@gmail.com"
              className="flex items-center gap-4 mt-12 w-fit"
            >
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <MdOutlineEmail className="text-white w-5 h-5" />
              </div>
              <span className="underline underline-offset-4 text-lg break-all">
                shibiliek516@gmail.com
              </span>
            </a>

          
          <div className="flex gap-6 mt-10 text-red-600">
                       <a href="https://www.linkedin.com/in/mohammed-shibili-ek" target='_blank'  rel="noopener noreferrer">  <FaLinkedinIn size={22} /></a>
                     <a href="https://github.com/Mohammedshibili10" target='_blank'  rel="noopener noreferrer">  <FaGithub size={22} /></a> 
                        <a href="https://x.com/shibili_233" target='_blank'  rel="noopener noreferrer">  <FaXTwitter size={22} /></a>
                       <a href="https://www.instagram.com/_.shibili._____?igsh=MTM0NzJlNGpvaGwzaA==" target='_blank'  rel="noopener noreferrer">   <FaInstagram size={22} /></a>
                     </div>
         

       
            <div className="mt-14 p-6 rounded-2xl bg-[#111] border border-[#222] max-w-md">
              <p className="text-sm text-gray-400">Available for</p>
              <p className="mt-1 text-lg font-semibold">
                Freelance & Full-time roles
              </p>

              <div className="mt-3 flex items-center gap-2 text-red-600 text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
                </span>
                Currently open to work
              </div>
            </div>
          </div>

      
          <div id="contact-form">
            <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
              Send a message
              <ArrowUpRight className="w-5 h-5 text-red-600" />
            </h2>

            <Form />
          </div>
        </div>
      </main>

 <Footer/>


    </div>
  )
}
