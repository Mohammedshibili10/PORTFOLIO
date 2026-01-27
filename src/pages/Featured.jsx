import React from 'react'
import Projectpage from '../components/Projectpage'

export default function Featured() {
  return (
    <div className='text-white  '>
      <div className='px-5  md:px-20 xl:px-30 '>
        <div className='max-w-md md:max-w-lg '>
            <div className='space-y-2 font-display'>
            <h1 className='text-3xl  md:text-5xl font-bold '>FEATURED PROJECTS</h1>
            <p className='text-sm  md:text-md text-[#C7C7C7]'>Here are some of the selected projects that showcase my passion for full stack development.</p>
            </div>
        </div>
        <Projectpage/>
        </div>
    <hr className='mt-15 text-gray-500' ></hr>
    </div>
  )
}
