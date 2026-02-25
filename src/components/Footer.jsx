import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <div> 
        <footer className="border-t border-border bg-card text-white border-gray-500">
      <div className="px-5 md:px-10 lg:px-20 py-12">
        <div className="flex     md:flex-row md:justify-between gap-8">
          <div className=''>
            <Link to="/">
              <h2 className="text-md font-bold font-display mb-2">
                MOHAMMED <span className="text-red-600">SHIBILI EK</span>
              </h2>
            </Link>
            <p className="text-muted-foreground text-sm">
              Building digital experiences with passion
            </p>
          </div>
          
          <div className="flex gap-6">
            
         <FaLinkedinIn className="w-5 h-5 text-red-600" />
         <FaGithub className="w-5 h-5 text-red-600" />
         <FaXTwitter className="w-5 h-5 text-red-600" />
         <FaInstagram className="w-5 h-5 text-red-600" />
           
          
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-gray-500 border-border text-center">
          <p className="text-muted-foreground text-[10px]">
            © 2026 Mohammed Shibili EK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
}
 
