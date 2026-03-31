import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward, MdDescription } from "react-icons/md";
import image from '../assets/images/image.png'
import ltsintro from '../assets/images/ltsintro.jpeg'
import nextxintro from '../assets/images/nextxintro.jpeg'

export default function Projectpage() {
    const project = [{
        id:1,
        image: image,
        title: "Supplement Store – ",
        type:"Full Stack E-commerce Application",
        Description: "A full-stack e-commerce web application for supplements built with React, Tailwind CSS, Node.js, Express, and MongoDB. The project includes dynamic product cards, product detail pages with routing, backend APIs, image handling, and a responsive user-friendly design optimized for performance.",
        year: "2026",
        role: "Full Stack ",
         siteurl:"https://supplement-store-e-commerce-project.vercel.app/",
         giturl:"https://github.com/Mohammedshibili10/SUPPLEMENT-STORE-E-COMMERCE-project-"

    },
    {
        id:2,
        image: ltsintro,
        title: "LTS SMART SYSTEM - ",
        type:"Frontend project",
        Description: " A modern smart systems website built to showcase building automation, security, and integrated technology solutions. The platform highlights services such as ELV, IT infrastructure, home automation, and audiovisual systems, delivering a clean UI with responsive design for seamless user experience.",
        year: "2025",
        role: "Front-end ",
        siteurl:"https://lts-automations.vercel.app/",
        giturl:"https://github.com/Mohammedshibili10/LTS-SMART-SYSTEM"
    },
    {
        id:3,
        image: nextxintro,
        title: "NEXTX Games Store - ",
        type:"Full Stack Project",
        Description: "Built a full-stack Gaming Store web application using the MERN stack (MongoDB, Express, React, Node.js). The platform allows users to browse products, add items to cart and wishlist, post reviews, and securely authenticate accounts. Designed a responsive and intuitive UI based on Figma, with a focus on smooth user experience and efficient backend API integration.",
        year: "Work is Ongoing ....",
        role: "Full stack ",
        siteurl:"https://nextx-games-store.vercel.app/",
        giturl:"https://github.com/Mohammedshibili10/NEXTX-GAMES-STORE/commits?author=Mohammedshibili10"
   

    },]
   
    return (
        <div>
            {project.map((work)=>(
            <div className=' flex-cols md:flex-cols lg:flex  gap-20 mt-10 md:mt-20 font-display md:ml-10 xl:ml-20'>
                <div className='  sm:w-90 md:w-full h-100 md:h-120 bg-[#1A1A1A] rounded-lg flex items-center justify-center '>
                    <img className='border border-red-600 w-70 md:w-100 lg:w-80 xl:w-110 h-75 md:h-80 rounded-lg' src={work.image} alt="error" />
                </div>
                <div className=' w-full space-y-7 mt-8 md:mt-12'>
                    <div className=' '>
                        <h1 className='text-2xl md:text-4xl'>{work.title}<span className='text-red-600'>{work.type }</span></h1>
                        <p className='text-sm md:text-md text-justify text-[#C7C7C7]'>{work.Description}</p>
                    </div>
                    <div className=' space-y-2'>
                        <h1>PROJECT INFO</h1>
                        <hr ></hr>
                        <div className='flex justify-between'>
                            <p className='text-sm'>Year</p>
                            <p className='text-sm text-[#C7C7C7]'>{work.year}</p>
                        </div>
                        <hr ></hr>
                        <div className='flex justify-between'>
                            <p className='text-sm'>Role</p>
                            <p className='text-sm text-[#C7C7C7]'>{work.role}</p>
                        </div>
                        <hr ></hr>
                    </div>
                    <div className='flex gap-5 mt-12'>
                    <a href={work.siteurl} target='_blank' rel='noopener noreferrer'>    <h1 className='text-sm md:text-md text-white underline  underline-offset-8'>LIVE DEMO<MdArrowOutward className='w-5 h-5 ml-2 mb-1 text-white inline ' /> </h1></a>
                       <a href={work.giturl}><h1 className='text-sm md:text-md text-red-600 underline  underline-offset-8'> SEE ON GITHUB<FaGithub className='w-5 h-5 ml-2  text-red-600 inline' /> </h1></a>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    )
}
