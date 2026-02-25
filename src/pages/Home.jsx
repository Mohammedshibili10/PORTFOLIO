import React from 'react'
import Navbar from '../components/Navbar'
import { FaLinkedinIn, FaNodeJs, FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Featured from './Featured';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Form from '../components/Form';
import ClickSpark from '../components/Clickspark';
// import Particles from '../components/Particle';
import { Link } from 'react-router-dom'
import me from '../assets/images/me.png'
import { useInView } from "react-intersection-observer";
import { FaArrowDown } from 'react-icons/fa';
import Footer from '../components/Footer';
import { MdOutlineEmail } from "react-icons/md";
import { ArrowUpRight, LinkIcon } from "lucide-react";

import { SiMongodb, SiExpress } from "react-icons/si";

export default function Home() {


  return (




    <div className='text-white font-display'>
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-bg-zoom"
            style={{ backgroundImage: `url(${me})` }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-red-800/0 to-red-600/40" />
          <div className="absolute inset-0 bg-red-900/5 " />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center animate-slide-up">
          <p className="text-red-600 font-medium tracking-widest uppercase text-sm mb-4">
            Creative Developer
          </p>
          <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl leading-none tracking-tight text-foreground drop-shadow-lg">
            Hello,
            <br />
            I'm <span className="text-red-600">SHIBILI</span>
          </h1>
          <p className="mt-6 text-foreground/80 text-lg max-w-md mx-auto font-light drop-shadow-md">
            I craft bold digital experiences with clean code and stunning visuals.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <button

              className="px-8 py-3 bg-red-500 text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity glow-shadow"
            >
              View Work
            </button>
            <button
              className="px-8 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute z-50 bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <FaArrowDown className="text-[#D3E97A] text-2xl" />
        </div>
      </section>

          <section>
        <div className='px-5 md:px-20 lg:px-30 py-10 md:py-50 space-y-5 flex flex-row lg:flex-col gap-20 lg:gap-30 xl:gap-90  '>
          <div className="lg:col-span-3 space-y-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-1 rounded-full bg-white" />
            <span className="text-md font-semibold tracking-[0.25em] uppercase text-white">
              Who I am
            </span>
            </div>
            <h1 className='text-4xl md:text-[50px] lg:text-7xl   font-bold '>ABOUT <span className='text-red-600'> ME</span></h1>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug" style={{ fontWeight: 500 }}>
                I'm a MERN Stack Developer skilled in MongoDB, Express, React,
                and Node.js, focused on building fast, scalable, and
                user-friendly web applications.
              </h2>
              <p className=' text-sm md:text-md   text-[#C7C7C7]'>I am a passionate MERN Stack Developer who builds modern, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I focus on writing clean, scalable code and creating intuitive user experiences while continuously upgrading my skills to deliver impactful digital solutions.</p>
              <Link to={'/about'}> <h1 className='text-md md:text-lg underline underline-offset-8 text-red-600 mt-5 '>MORE ABOUT ME</h1></Link>
            </div>
          </div>

          <div className="w-full max-w-md space-y-6">

            {[
              { name: "React.js", icon: FaReact },
              { name: "Node.js", icon: FaNodeJs },
              { name: "MongoDB", icon: SiMongodb },
              { name: "Express", icon: SiExpress },
            ].map((skill, index) => (
              <div
                key={index}
                className="group flex items-center justify-between border border-gray-200 rounded-2xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-red-600/20 text-white p-3 rounded-md w-12 h-12 flex items-center justify-center">
                    {skill.icon && React.createElement(skill.icon, { size: 30 })}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>

                <span className="w-3 h-3 bg-red-600 rounded-full group-hover:scale-125 transition-all duration-300"></span>
              </div>
            ))}


          </div>
        </div>
      </section>


      <div className='pt-20'>
        <Featured />
      </div>

      {/* ABOUT ME */}


      {/* <div>
        <div className='px-5 md:px-20 lg:px-30 py-10 md:py-30 lg:flex lg:gap-30 xl:gap-90  '>
          <div>
            <h1 className='text-4xl md:text-[50px] lg:text-6xl   font-bold '>ABOUT <span className='text-red-600'> ME</span></h1>
          </div>
          <div className=' max-w-7xl space-y-4 '>
            <h1 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl text-left '>I’m a MERN Stack Developer skilled in MongoDB, Express, React, and Node.js, focused on building fast, scalable, and user-friendly web applications. </h1>
            <p className=' text-sm md:text-md   text-[#C7C7C7]'>I am a passionate MERN Stack Developer who builds modern, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I focus on writing clean, scalable code and creating intuitive user experiences while continuously upgrading my skills to deliver impactful digital solutions.</p>
            <Link to={'/about'}> <h1 className='text-md md:text-md underline underline-offset-8 text-red-600 '>MORE ABOUT ME</h1></Link>
          </div>
        </div>
        <hr className='mt-35 text-gray-500' ></hr>
      </div> */}
    

      {/* CONTACT */}


      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-28">
        <div className="grid  sm:grid-cols-2 gap-20">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Get in touch <br /><span className='text-red-600'>with me!</span>
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
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                <MdOutlineEmail className="text-white  w-5 h-5" />
              </div>
              <span className="underline underline-offset-4 text-lg break-all">
                shibiliek516@gmail.com
              </span>
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6 mt-10 text-red-600">
              <a href="https://www.linkedin.com/in/mohammed-shibili-ek" target='_blank' rel="noopener noreferrer">  <FaLinkedinIn size={22} /></a>
              <a href="https://github.com/Mohammedshibili10" target='_blank' rel="noopener noreferrer">  <FaGithub size={22} /></a>
              <a href="https://x.com/shibili_233" target='_blank' rel="noopener noreferrer">  <FaXTwitter size={22} /></a>
              <a href="https://www.instagram.com/_.shibili._____?igsh=MTM0NzJlNGpvaGwzaA==" target='_blank' rel="noopener noreferrer">   <FaInstagram size={22} /></a>
            </div>


            {/* STATUS CARD */}
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

          {/* RIGHT FORM */}
          <div id="contact-form">
            <h2 className="text-2xl font-semibold mb-10 flex items-center gap-2">
              Send a message
              <ArrowUpRight className="w-5 h-5 text-red-600" />
            </h2>

            <Form />
          </div>
        </div>
      </main>


      <Footer />

    </div>


  )
}
