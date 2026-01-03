import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className='font-display  text-white '>
            <Navbar />
        <div className='hidden lg:block relative top-5 left-20 text-gray-300  w-25 '>
              <Link to="/">  <button className=' hover:text-white text-sm border-b  rounded-lg w-25 h-8'>Home <IoReturnDownBackSharp className='inline w-7 h-7' /></button></Link> 
            </div>
        <div className=' lg:flex  justify-around lg:gap-10 px-5 md:px-10 lg:px-30 py-10 md:py-20 lg:py-20 space-y-10 lg:space-y-5 '>
            <div>
                <div className='lg:mt-20 max-w-lg  lg:max-w-sm space-y-5'>
                    <h1 className=' text-4xl md:text-6xl font-bold'>Get in touch with me!</h1>
                    <p>If you have any inquiries or just want to say hello.please use the contact form ! </p>
                </div>
                <div className=' mt-5 md:mt-10 lg:mt-20 '>
                    <MdOutlineEmail className='w-7 h-7 sm:w-10 sm:h-10 text-sm sm:text-md mb-1 text-[#D3E97A] inline' /> <span className='ml-5 underline underline-offset-4 text-lg'>shibiliek516@gmail.com</span>
                    <div className='flex gap-8 mt-5'>
                        <FaLinkedinIn className='w-7 h-7 sm:w-8 sm:h-8  text-[#D3E97A]' />
                        <FaGithub className='w-7 h-7 sm:w-8 sm:h-8  text-[#D3E97A]' />
                        <FaXTwitter className='w-7 h-7 sm:w-8 sm:h-8  text-[#D3E97A]' />
                        <FaInstagram className='w-7 h-7 sm:w-8 sm:h-8  text-[#D3E97A]' />
                    </div>
                </div>
            </div>
            <div className='md:ml-25 mt-10 lg:mt-0'>
            <Form />
            </div>
        </div>
        </div>
    )
}
