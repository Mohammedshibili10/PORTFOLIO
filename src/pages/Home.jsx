import React from 'react'
import Navbar from '../components/Navbar'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Featured from './Featured';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Form from '../components/Form';
import ClickSpark from '../components/Clickspark';
// import Particles from '../components/Particle';
import { Link } from 'react-router-dom'
import shibiliImage from '../assets/images/shibili2.png'

import { FaArrowDown } from 'react-icons/fa';
import Footer from '../components/Footer';
import { MdOutlineEmail } from "react-icons/md";
import { ArrowUpRight } from "lucide-react";




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
      {/* <div className=' md:flex-cols lg:flex justify-between px-5 md:px-20 lg:px-30  '>
        <div className='md:max-w-lg space-y-2 py-10 md:py-10 lg:py-40'>
          <h1 className='text-5xl md:text-[85px] xl:text-[100px] font-bold leading-none'>HI,I AM <span className='text-[#D3E97A]'> MOHAMMED SHIBILI EK</span></h1>
          <p className='text-md text-[#C7C7C7]' >Passionate MERN Stack Developer crafting fast, scalable, and user-friendly web applications with clean code and modern technologies.</p>
          <div className='flex gap-3 mt-10 '>
            <Link to={'/contact'}>  <button className='border w-35 h-12 rounded-full font-medium bg-[#D3E97A] text-black hover:scale-110'>CONTACT ME</button></Link>
            <a href="https://www.linkedin.com/in/mohammed-shibili-ek" target='_blank' rel="noopener noreferrer">  <button className=' w-12 h-12 rounded-full bg-[#222222]  '><FaLinkedinIn className='w-5 h-5 ml-3.5 text-[#D3E97A]' /></button></a>
            <a href="https://github.com/Mohammedshibili10" target='_blank' rel="noopener noreferrer">  <button className=' w-12 h-12 rounded-full bg-[#222222]'><FaGithub className='w-5 h-5 ml-3.5 text-[#D3E97A]' /></button></a>
          </div>
        </div>
        <div >
          <img className='sm:w-100 sm:h-100   md:w-150 md:h-150 md:mt-10 lg:mt-20 rounded-xl relative' src={shibiliImage} alt="error" />
        </div>
      </div> */}



      <section className="min-h-[90vh] flex flex-col justify-center px-5 md:px-10 lg:px-20 py-20">
        <div className="max-w-4xl">
          <p className="text-primary text-sm md:text-base font-medium mb-4 animate-fade-in">
            CREATIVE DEVELOPER & DESIGNER
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            I craft digital experiences that{' '}
            <span className="text-gradient text-[#D3E97A]">inspire</span> and{' '}
            <span className="text-gradient text-[#D3E97A]">engage</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A passionate developer focused on creating beautiful, functional, and user-centered digital experiences. Based in India, working globally.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#D3E97A] text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D3E97A]/25"
            >
              GET IN TOUCH
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center justify-center border border-foreground text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-foreground hover:text-[#D3E97A] hover:scale-105"
            >
              VIEW WORK
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute z-50 bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <FaArrowDown className="text-[#D3E97A] text-2xl" />
        </div>
      </section>




      <div>
        <Featured />
      </div>

      {/* ABOUT ME */}


      <div>
        <div className='px-5 md:px-20 lg:px-30 py-10 md:py-30 lg:flex lg:gap-30 xl:gap-90  '>
          <div>
            <h1 className='text-4xl md:text-[50px] lg:text-6xl   font-bold'>ABOUT ME</h1>
          </div>
          <div className=' max-w-7xl space-y-4 '>
            <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl text-left '>I’m a MERN Stack Developer skilled in MongoDB, Express, React, and Node.js, focused on building fast, scalable, and user-friendly web applications. </h1>
            <p className=' text-sm md:text-md   text-[#C7C7C7]'>I am a passionate MERN Stack Developer who builds modern, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I focus on writing clean, scalable code and creating intuitive user experiences while continuously upgrading my skills to deliver impactful digital solutions.</p>
            <Link to={'/about'}> <h1 className='text-sm md:text-md underline underline-offset-8 text-[#D3E97A] '>MORE ABOUT ME</h1></Link>
          </div>
        </div>
        <hr className='mt-35 text-gray-500' ></hr>
      </div>
      {/* CONTACT */}

      
    <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-28">
        <div className="grid  sm:grid-cols-2 gap-20">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Get in touch <br /> with me!
            </h1>

            <p className="text-gray-400 mt-6 max-w-md">
              If you have any inquiries or just want to say hello, please use
              the contact form!
            </p>

            {/* EMAIL */}
            <a
              href="mailto:shibiliek516@gmail.com"
              className="flex items-center gap-4 mt-12 w-fit"
            >
              <div className="w-12 h-12 rounded-full bg-[#D3E97A] flex items-center justify-center">
                <MdOutlineEmail className="text-black w-5 h-5" />
              </div>
              <span className="underline underline-offset-4 text-lg break-all">
                shibiliek516@gmail.com
              </span>
            </a>

            {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-10 text-[#D3E97A]">
                       <a href="https://www.linkedin.com/in/mohammed-shibili-ek" target='_blank'  rel="noopener noreferrer">  <FaLinkedinIn size={22} /></a>
                     <a href="https://github.com/Mohammedshibili10" target='_blank'  rel="noopener noreferrer">  <FaGithub size={22} /></a> 
                        <a href="https://x.com/shibili_233" target='_blank'  rel="noopener noreferrer">  <FaXTwitter size={22} /></a>
                       <a href="https://www.instagram.com/_.shibili._____?igsh=MTM0NzJlNGpvaGwzaA==" target='_blank'  rel="noopener noreferrer">   <FaInstagram size={22} /></a>
                     </div>
         

            {/* STATUS CARD */}
            <div className="mt-14 p-6 rounded-2xl bg-[#111] border border-[#222] max-w-md">
              <p className="text-sm text-gray-400">Available for</p>
              <p className="mt-1 text-lg font-semibold">
                Freelance & Full-time roles
              </p>

              <div className="mt-3 flex items-center gap-2 text-[#D3E97A] text-sm font-medium">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#D3E97A] opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D3E97A]" />
                </span>
                Currently open to work
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div id="contact-form">
            <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
              Send a message
              <ArrowUpRight className="w-5 h-5 text-[#D3E97A]" />
            </h2>

            <Form />
          </div>
        </div>
      </main>
    

      <Footer />

    </div>
    // </ClickSpark>
  )
}
