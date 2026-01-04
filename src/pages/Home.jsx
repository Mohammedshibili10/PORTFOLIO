import React from 'react'
import Navbar from '../components/Navbar'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Featured from './Featured';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Form from '../components/Form';
import ClickSpark from '../components/Clickspark';
import Particles from '../components/Particle';
import { Link } from 'react-router-dom'
import shibiliImage from '../assets/images/shibili2.png'


export default function Home() {
  return (
//     <ClickSpark
//       sparkColor='#fff'
//       sparkSize={30}
//       sparkRadius={40}
//       sparkCount={8}
//       duration={400}
//     >
//       <div className='text-white font-display '>
//         <div style={{ width: '100%', height: '100vh', position: ' absolute' }}>
//           <Particles
//             particleColors={['#ffffff', '#ffffff']}
//             particleCount={200}
//             particleSpread={10}
//             speed={0.1}
//             particleBaseSize={100}
//             moveParticlesOnHover={true}
//             alphaParticles={false}
//             disableRotation={false}
//           />
//  </div>
<div className='text-white font-display'>
          <Navbar />
          <div className=' md:flex-cols lg:flex justify-between px-5 md:px-20 lg:px-50 '>
            <div className='md:max-w-lg space-y-2 py-10 md:py-10 lg:py-40'>
              <h1 className='text-5xl md:text-[85px] font-bold leading-none'>HI,I AM <span className='text-[#D3E97A]'> MOHAMMED SHIBILI EK</span></h1>
              <p className='text-md text-[#C7C7C7]' >Passionate MERN Stack Developer crafting fast, scalable, and user-friendly web applications with clean code and modern technologies.</p>
              <div className='flex gap-3 mt-10 '>
             <Link to={'/contact'}>  <button className='border w-35 h-12 rounded-full font-medium bg-[#D3E97A] text-black hover:scale-110'>CONTACT ME</button></Link> 
              <a href="https://www.linkedin.com/in/mohammed-shibili-ek" target='_blank'  rel="noopener noreferrer">  <button className=' w-12 h-12 rounded-full bg-[#222222]  '><FaLinkedinIn className='w-5 h-5 ml-3.5 text-[#D3E97A]' /></button></a>
              <a href="https://github.com/Mohammedshibili10" target='_blank'  rel="noopener noreferrer">  <button className=' w-12 h-12 rounded-full bg-[#222222]'><FaGithub className='w-5 h-5 ml-3.5 text-[#D3E97A]' /></button></a>
              </div>
            </div>
            <div >
              <img className= 'sm:w-100 sm:h-100   md:w-150 md:h-150 md:mt-10 lg:mt-20 rounded-xl relative' src={shibiliImage} alt="error" />
            </div>
          </div>
       
        <div>
          <Featured />
        </div>

        {/* ABOUT ME */}
        <div>
          <div className='px-5 md:px-20 lg:px-50 py-10 md:py-30 lg:flex  md:gap-90  '>
            <div>
              <h1 className='text-4xl md:text-[50px] lg:text-6xl tracking-tight   font-bold'>ABOUT ME</h1>
            </div>
            <div className=' max-w-3xl space-y-4 '>
              <h1 className='text-xl md:text-2xl lg:text-5xl  text-left '>I’m a MERN Stack Developer skilled in MongoDB, Express, React, and Node.js, focused on building fast, scalable, and user-friendly web applications. </h1>
              <p className=' text-sm md:text-md text-[#C7C7C7]'>I am a passionate MERN Stack Developer who builds modern, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I focus on writing clean, scalable code and creating intuitive user experiences while continuously upgrading my skills to deliver impactful digital solutions.</p>
             <Link to={'/about'}> <h1 className='text-sm md:text-md underline underline-offset-8 text-[#D3E97A] '>MORE ABOUT ME</h1></Link>
            </div>
          </div>
          <hr className='mt-35 text-gray-500' ></hr>
        </div>
        {/* CONTACT */}
        <div className='lg:flex lg:gap-50 mb-20'>
          <div className='px-5 md:px-20 lg:px-50 py-20'>
            <div className='max-w-md space-y-1'>
              <h1 className='text-4xl md:text-[50px] lg:text-6xl tracking-tight  font-bold'>LET`S CONNECT</h1>
              <p className=''>Say hello at <span className='border-b border-[#D3E97A]'> shibiliek516@gmail.com</span></p>
              <p>For more info here`s my <span className='border-b border-[#D3E97A]'>Resume</span></p>
            </div>
            <div className='flex gap-5 mt-10   '>
           <a href="https://www.linkedin.com/in/mohammed-shibili-ek" target='_blank'  rel="noopener noreferrer">   <FaLinkedinIn className='w-8 h-8 text-[#D3E97A]' /></a>
              <a href="https://github.com/Mohammedshibili10" target='_blank'  rel="noopener noreferrer"> <FaGithub className='w-8 h-8 text-[#D3E97A]' /></a>
             <a href="https://x.com/shibili_233" target='_blank' rel='noopener noreferrer'> <FaXTwitter className='w-8 h-8  text-[#D3E97A]' /></a>
             <a href="https://www.instagram.com/_.shibili._____?igsh=MTM0NzJlNGpvaGwzaA==" target='_blank' rel='noopener noreferrer'><FaInstagram className='w-8 h-8  text-[#D3E97A]' /></a> 
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>




      </div>
    // </ClickSpark>
  )
}
