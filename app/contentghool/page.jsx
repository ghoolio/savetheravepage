"use client";


import React from 'react'
import Head from 'next/head'
import PostBox from './postbox'
import LoginLogoutButton from '../components/LoginLogoutButton'



const page = () => {
  return (
    <div className='my-7 max-w-5xl mx-auto'>
        <Head>
					<title>contentghool</title>
				</Head>

				{/* Posting Box */}
				<PostBox />
				<div>
				{/* Feed */}
				</div>
				<LoginLogoutButton />
    </div>
  )
}

export default page