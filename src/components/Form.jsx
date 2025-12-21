import React from 'react'

export default function Form() {
  return (
    <div className='lg:mt-20  px-10 md:px-20 lg:px-0'>
        <div className='space-y-3 '>
            <label className='block text-[#C7C7C7]'>Name</label>
            <input className='bg-[#1A1A1A] w-80 sm:w-95 md:w-130 h-12 rounded-md' type="text" />
            <label className='block text-[#C7C7C7]'>Email</label>
            <input className='bg-[#1A1A1A] w-80  sm:w-100 md:w-130 h-12 rounded-md' type="email" />
            <label className='block text-[#C7C7C7]'>Subject</label>
            <input className='bg-[#1A1A1A] w-80 sm:w-95 md:w-130 h-12 rounded-md' type="text" />
            <label className='block text-[#C7C7C7]'>Message</label>
            <input className='bg-[#1A1A1A] w-80 sm:w-95 md:w-130 h-40 rounded-md' type="text" />

            <button className='block w-40 h-12 rounded-full text-black font-bold text-lg bg-[#D3E97A] mt-5'>SUBMIT</button>

        </div>


    </div>
  )
}
