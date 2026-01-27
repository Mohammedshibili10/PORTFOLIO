import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="font-display text-white">
      <Navbar />

      {/* Back Button */}
      <div className="hidden lg:block relative top-5 left-20 text-gray-300">
        <Link to="/">
          <button className="hover:text-white text-sm border-b rounded-lg h-8">
            Home <IoReturnDownBackSharp className="inline w-6 h-6" />
          </button>
        </Link>
      </div>

      {/* MAIN SECTION */}
      <div className=" px-5 sm:px-8 md:px-14 xl:px-50 py-16 lg:py-24">
        <div className="md:flex justify-between  gap-16 lg:gap-40 items-start">

          {/* CONTACT CONTENT */}
          <div className="max-w-lg">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Get in touch <br /> with me!
            </h1>

            <p className="text-[#C7C7C7] mt-6">
              If you have any inquiries or just want to say hello,
              please use the contact form!
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <MdOutlineEmail className="inline w-8 h-8 text-[#D3E97A]" />
                <span className="ml-4 underline underline-offset-4 text-lg">
                  shibiliek516@gmail.com
                </span>
              </div>

              <div className="flex gap-8">
                <FaLinkedinIn className="w-7 h-7 text-[#D3E97A]" />
                <FaGithub className="w-7 h-7 text-[#D3E97A]" />
                <FaXTwitter className="w-7 h-7 text-[#D3E97A]" />
                <FaInstagram className="w-7 h-7 text-[#D3E97A]" />
              </div>
            </div>
          </div>

          {/* FORM BELOW CONTACT */}
          <div className="w-full max-w-xl">
            <Form />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
