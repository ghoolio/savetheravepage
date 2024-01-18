import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full">
        <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
            <Link href="/">
                <Image
                    src="images/logo2.svg"
                    alt="Save The Rave Logo"
                    width={150}
                    height={150}
                />
            </Link>
            <p>2023 Save The Rave. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer