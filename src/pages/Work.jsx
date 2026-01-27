import React from 'react'

import { IoReturnDownBackSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Projectpage from '../components/Projectpage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Work() {
  return (
    <div className="font-display text-foreground">
      <Navbar />
      
      {/* Back Button */}
      <div className="hidden lg:block relative top-5 left-20 ">
        <Link to="/">
          <button className="hover:text-white text-sm border-b border-border rounded-lg w-25 h-8 ">
            Home <IoReturnDownBackSharp className="inline w-7 h-7" />
          </button>
        </Link>
      </div>

      {/* Work Content */}
      <div className="px-5 md:px-20 xl:px-30 py-10 md:py-20 text-white">
        <div className="max-w-md md:max-w-lg">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold">ALL PROJECTS</h1>
            <p className="text-sm md:text-md text-muted-foreground">
              Here are all the projects that showcase my passion for full stack development.
            </p>
          </div>
        </div>
        <Projectpage />
      </div>

      <Footer/>
    </div>
  );
}