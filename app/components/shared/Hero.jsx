import React from 'react'
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  return (
    <div>
        {/* ----------------(optional) Text-------------------- */}
        <div className='absolute inset-x-0 top-[15%] text-center text-white drop-shadow-sm'>
            <h1 className='text-4xl font-bold'>FEINDBILD all night long</h1>
            <p className='p-2 text-sm'>Designing stuff is <span className='underline-offset-4 underline'>exhausting as fuck</span></p>
        </div>

        <div className='flex flex-col items-center justify-center lg:flex-row absolute inset-x-0 bottom-[10%]'>
            <a href="#events"><button className='bg-black hover:bg-[#393c41] w-96 lg:w-64 lg:mx-4 py-1 px-4 h-10 rounded-3xl text-xs mt-2 font-semibold text-white drop-shadow-sm'>Events</button></a>
            <a href="#tickets"><button className='bg-black hover:bg-[#393c41] w-96 lg:w-64 lg:mx-4 py-1 px-4 h-10 rounded-3xl text-xs mt-2 font-semibold text-white drop-shadow-sm'>Tickets</button></a>
        </div>

        <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%] text-white drop-shadow-sm'>
            <a href="#events"><FiChevronDown size={30} /></a>
        </div>

    </div>
  )
}

export default Hero