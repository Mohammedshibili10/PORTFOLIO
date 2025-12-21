import React from 'react'

export default function About() {
  return (
    <div>
       <div className='px-5 md:px-20 lg:px-50 py-10 md:py-30 lg:flex   md:gap-90 '>
            <div>
              <h1 className='text-4xl md:text-[50px] lg:text-6xl tracking-tight text-white  font-bold'>ABOUT ME</h1>
            </div>
            <div className=' max-w-3xl space-y-4 '>
              <h1 className='text-xl md:text-2xl lg:text-5xl  text-left text-white '>I am a front-end developer based in Sydney. Has Mechanical Engineering background. </h1>
              <p className=' text-sm md:text-md text-[#C7C7C7]'>I am a front-end developer based in Sydney looking for exciting opportunities. Has Mechanical Engineering background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.</p>
              <button className='text-sm md:text-md border w- text-[#D3E97A] '>MORE ABOUT ME</button>
            </div>
          </div>
    </div>
  )
}
