import React from 'react'

export default function Form() {
  return (
    <div className=" px-5 md:px-10 lg:px-20 mt-10 md:mt-0 flex justify-center">
      
      <div className="space-y-3 w-full ">
        
        <label className="block text-[#C7C7C7]">Name</label>
        <input
          type="text"
          className="bg-[#1A1A1A] w-full h-12 rounded-md px-4 text-white outline-none"
        />

        <label className="block text-[#C7C7C7]">Email</label>
        <input
          type="email"
          className="bg-[#1A1A1A] w-full h-12 rounded-md px-4 text-white outline-none"
        />

        <label className="block text-[#C7C7C7]">Subject</label>
        <input
          type="text"
          className="bg-[#1A1A1A] w-full h-12 rounded-md px-4 text-white outline-none"
        />

        <label className="block text-[#C7C7C7]">Message</label>
        <textarea
          className="bg-[#1A1A1A] w-full h-40 rounded-md px-4 py-3 text-white outline-none resize-none"
        ></textarea>

        <button className="block w-40 h-12 rounded-full text-black font-bold text-lg bg-[#D3E97A] mt-5">
          SUBMIT
        </button>

      </div>

    </div>
  )
}
