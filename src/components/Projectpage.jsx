import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward, MdDescription } from "react-icons/md";
import image from '../assets/images/image.png'
export default function Projectpage() {
    const project = [{
        id:1,
        image: image,
        title: "Supplement Store – Full Stack E-commerce Application",
        Description: "A full-stack e-commerce web application for supplements built with React, Tailwind CSS, Node.js, Express, and MongoDB. The project includes dynamic product cards, product detail pages with routing, backend APIs, image handling, and a responsive user-friendly design optimized for performance.",
        year: "2026",
        role: "Full Stack Developer"
    },
    {
        id:2,
        image: "",
        title: "Blog site for World News",
        Description: "Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in  front-end development.",
        year: "2023",
        role: "Front-end Developer"
    },
    {
        id:3,
        image: "",
        title: "Promotional landing page for our favorite show",
        Description: "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.",
        year: "2023",
        role: "Front-end Developer"
    },]
    return (
        <div>
            {project.map((work)=>(
            <div className=' flex-cols md:flex-cols lg:flex  gap-20 mt-10 md:mt-20 font-display md:ml-10 xl:ml-20'>
                <div className='  sm:w-90 md:w-full h-100 md:h-120 bg-[#1A1A1A] rounded-lg flex items-center justify-center '>
                    <img className='border w-70 md:w-100 lg:w-80 xl:w-110 h-75 md:h-80 rounded-lg' src={work.image} alt="error" />
                </div>
                <div className=' w-full space-y-7 mt-8 md:mt-12'>
                    <div className=' '>
                        <h1 className='text-2xl md:text-4xl'>{work.title}</h1>
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
                    <a href="https://supplement-store-vse9.vercel.app/" target='_blank' rel='noopener noreferrer'>    <h1 className='text-sm md:text-md text-[#D3E97A] underline  underline-offset-8'>LIVE DEMO<MdArrowOutward className='w-5 h-5 ml-2 mb-1 text-[#D3E97A] inline ' /> </h1></a>
                       <a href="https://github.com/Mohammedshibili10/SUPPLEMENT-STORE"><h1 className='text-sm md:text-md text-[#D3E97A] underline  underline-offset-8'> SEE ON GITHUB<FaGithub className='w-5 h-5 ml-2 mb-1 text-[#D3E97A] inline' /> </h1></a>
                    </div>
                </div>
            </div>
            ))}
            
        </div>
    )
}
