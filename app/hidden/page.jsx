import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='flex-col justify-center'>
            <Image
              className='z-10'
              src="/images/stradminlogo.png"
              width={250}
              height={250}
            />
            <div className='text-white flex justify-center mx-auto mb-2'>Admin Section</div>
            <Link
              href='/login'
              className='flex items-center px-3 py-2 rounded-xl bg-slate-600 hover:bg-slate-400'>Login
            </Link>
        </div>
    </div>
  )
}

export default page