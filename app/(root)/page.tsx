import Image from 'next/image'
import { FiChevronDown } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <div className='bg-primary-50 bg-dotted-pattern bg-contain'>
        <video
          src="/images/str2.mp4"
          autoPlay={true}
          loop
          muted
          className='pt-0 inset-0 w-full z-0 h-screen bg-cover bg-center object-center'
        ></video>

        {/* ----------------(optional) Text-------------------- */}
        <div className='absolute inset-x-0 top-[35%] text-center text-white drop-shadow-sm'>
            <Image
                src="/images/logo2.svg"
                alt="Save The Rave"
                width={400}
                height={400}
                className='mx-auto'
            />
            {/* <h1 className='text-4xl font-bold'>FEINDBILD all night long</h1>
            <p className='p-regular-20 md:p-regular-24 text-sm'>Designing stuff is <span className='underline-offset-4 underline'>exhausting as fuck</span></p> */}
        </div>

        <div className='flex flex-col items-center justify-center lg:flex-row absolute inset-x-0 bottom-[30%]'>
            <a href="#events"><button className='bg-black hover:bg-[#393c41] w-96 lg:w-64 lg:mx-4 py-1 px-4 h-10 rounded-3xl text-xs mt-2 font-semibold text-white drop-shadow-sm'>Events</button></a>
            <a href="#tickets"><button className='bg-black hover:bg-[#393c41] w-96 lg:w-64 lg:mx-4 py-1 px-4 h-10 rounded-3xl text-xs mt-2 font-semibold text-white drop-shadow-sm'>Tickets</button></a>
        </div>

        <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%] text-white drop-shadow-md'>
            <a href="#events"><FiChevronDown size={30} /></a>
        </div>
      </div>
    

      <div id='events' className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className='z-50 h2-bold'>Trusted</h2>
        <div className='flex w-full flex-col gap-5 flex-row'>
          Search
          CategoryFilter
        </div>  
      </div>
    </>
  )
  
}

