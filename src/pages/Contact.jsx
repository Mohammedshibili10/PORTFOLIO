import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";
import Form from "../components/Form";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-6 flex items-center justify-between">
        <span className="text-xl font-bold">Portfolio</span>
        <a href="#contact-form" className="text-sm text-gray-400 hover:text-white">
          Contact
        </a>
      </nav>

      {/* MAIN */}
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

      {/* FOOTER */}
      <footer className="border-t border-[#222] py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} — Built with passion.
      </footer>
    </div>
  );
}
