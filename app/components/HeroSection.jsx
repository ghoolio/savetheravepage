import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='h-screen'>
      {/* ----------------Home Section-------------------- */}
      <div className='flex flex-col h-screen items-center justify-between bg-center bg-cover'>
        <video
          src="/images/str2.mp4"
          autoPlay={true}
          loop
          muted
          className='absolute inset-0 w-full h-full object-cover z-0'
        ></video>
        <div className='flex flex-col items-center justify-center h-full'>
          <div className='relative'>
            <Image
              src="/images/logo1.svg"
              alt="Save The Rave"
              width={400}
              height={400}
              className='mx-auto'
            />
          </div>

          {/* ----------------(optional) Text-------------------- */}
          {/* <div className='pb-40 text-center'>
            <h1 className='text-4xl relative z-10 drop-shadow-md'>Ghool All Night Long</h1>
            <p className='relative z-10 drop-shadow-md'>Designing stuff is <span className='underline'>exhausting</span></p>
          </div> */}
          
          {/* ----------------Buttons-------------------- */}
          <div className='relative z-10 flex text-center mb-24 gap-8 mt-10'>
            <button className='bg-black hover:bg-[#393c41] w-48 py-1 px-4 rounded-3xl text-xs'>Events</button>
            <button className='bg-black hover:bg-[#393c41] w-48 py-1 px-4 rounded-3xl text-xs'>Tickets</button>
          </div>



          {/* ----------------Arrow-------------------- */}
          <div className="absolute animate-bounce bottom-4">
            <a href='#events'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className='relative z-10'
              >
                <polyline points='6 9 12 15 18 9'></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* ----------------Event Section------------------ */}
      <div
        style={{
          backgroundColor: 'black',
          //backgroundImage: url('')
        }}
        id='events'
        className='flex flex-col h-screen items-center justify-between bg-center bg-cover'
      >
        <div className='flex flex-col items-center justify-between h-full'>
          {/* ----------------(optional) Text-------------------- */}
          <div className='pt-48 text-center'>
            <h1 className='text-4xl relative z-10 drop-shadow-md'>Frohe Weihnachten</h1>
            <p className='relative z-10 drop-shadow-md'>Wünschen euch irgendwelche <span className='underline'>Leute</span></p>
          </div>
          {/* ----------------Buttons-------------------- */}
          <div className='relative z-10 flex text-center mb-24 gap-8'>
            <button className='bg-black hover:bg-[#393c41] w-48 py-1 px-4 rounded-3xl text-xs'>Events</button>
            <button className='bg-black hover:bg-[#393c41] w-48 py-1 px-4 rounded-3xl text-xs'>Tickets</button>
          </div>
        </div>
      </div>

      {/* ----------------Ticket Section------------------ */}
      <div
        style={{
          backgroundColor: 'black',
          //backgroundImage: url('')
        }}
        id='tickets'
        className='flex flex-col h-screen items-center justify-between bg-center bg-cover'
      >
        
      </div>
    </div>
  );
};

export default HeroSection;

