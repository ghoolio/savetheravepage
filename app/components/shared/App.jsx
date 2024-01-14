import React from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Hero from './Hero';

const App = () => {
  return (
    <div>
      <video
        src="/images/str2.mp4"
        autoPlay={true}
        loop
        muted
        className='absolute inset-0 w-full z-0 h-screen bg-cover bg-center'
      ></video>
    
      <div className='absolute z-10 w-full'>
        <Navbar />
      </div>

      <div>
        <Hero />
      </div>

    </div>      
  );
}

export default App;

