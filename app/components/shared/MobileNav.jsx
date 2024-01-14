import React, { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'

const MobileNav = () => {
    const [isClick, setisClick] = useState(false);
    const [isHovering, setIsHovered] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick);
    };

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <nav>
            <div className='text-white lg:hidden'>
                <button
                    className="inline-flex items-center justify-center p-2.5 rounded-md text-white md:text-white 
                    hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-black/5 shadow-sm hover:bg-black/10"
                    onClick={toggleNavbar}
                >
                    {isClick ? (
                        <svg
                            className="h-6 w-6 z-50"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="h-6 w-6 z-50"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>

                {isClick && (
                    <div className={`md:hidden ${isClick ? "block" : "hidden"} bg-black absolute top-0 right-0 w-full h-full z-50`}>
                        <div className="w-full h-screen px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black z-50">
                            <div 
                                className="flex justify-between items-center px-12 p-4"
                                onMouseEnter={onMouseEnter}
                                onMouseLeave={onMouseLeave}
                            >
                                <Link href="/">
                                    {isHovering ? (
                                        <Image
                                            src="images/logo1.svg"
                                            alt="Save The Rave Logo"
                                            width={150}
                                            height={150}
                                        />
                                    ) : (
                                        <Image
                                            src="images/logo2.svg"
                                            alt="Save The Rave Logo"
                                            width={150}
                                            height={150}
                                        />
                                    )} 
                                </Link>
                            </div>
                            <ul className="pt-10">
                                <a
                                    href="#events"
                                    className="p-2 block text-lg text-center text-white hover:bg-slate-900 hover:bg-opacity-75 hover:text-white"
                                >
                                    Events
                                </a>
                                <a
                                    href="#tickets"
                                    className="p-2 block text-lg text-center text-white hover:bg-slate-900 hover:bg-opacity-75 hover:text-white"
                                >
                                    Tickets
                                </a>
                                <a
                                    href="#artists"
                                    className="p-2 block text-lg text-center text-white hover:bg-slate-900 hover:bg-opacity-75 hover:text-white"
                                >
                                    Artists
                                </a>
                                <a
                                    href="#artists"
                                    className="p-2 block text-lg text-center text-white hover:bg-slate-900 hover:bg-opacity-75 hover:text-white"
                                >
                                    Store
                                </a>
                                <a
                                    href="#faq"
                                    className="p-2 block text-lg text-center text-white hover:bg-slate-900 hover:bg-opacity-75 hover:text-white"
                                >
                                    FAQ
                                </a>
                            </ul>
                            
                            <ul className="flex justify-center hover:cursor-pointer pl-4 pt-10">
                                <li className='text-white py-1 px-2 hover:rounded hover:bg-black/5'>
                                    <a href="https://t.me/+cQNcvSJW6RwzNTQy">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x={0}
                                        y={0}
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        style={{ fill: "#FFFFFF" }}
                                    >
                                        <title>Telegram</title>
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                    </svg>
                                    </a>
                                </li>

                                <li className='text-white py-1 px-2 hover:rounded hover:bg-black/5'>
                                    <a href="https://www.tiktok.com/@save.the.rave.1?_t=8iyVWwe5Tw8&_r=1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x={0}
                                        y={0}
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        style={{ fill: "#FFFFFF" }}
                                    >
                                        <title>TikTok</title>
                                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                    </svg>
                                    </a>
                                </li>

                                <li className='text-white py-1 px-2 hover:rounded hover:bg-black/5'>
                                    <a href="https://www.instagram.com/save.the.rave.events">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x={0}
                                        y={0}
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        style={{ fill: "#FFFFFF" }}
                                    >
                                        <title>Instagram</title>
                                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                    </svg>
                                    </a>
                                </li>

                                <li className='text-white py-1 px-2 hover:rounded hover:bg-black/5'>
                                    <a href="https://www.facebook.com/Savetheraveevents">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x={0}
                                        y={0}
                                        width={30}
                                        height={30}
                                        viewBox="0 0 30 30"
                                        style={{ fill: "#FFFFFF" }}
                                    >
                                        <title>Facebook</title>
                                        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                                    </svg>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    
                )} 
            </div>
        </nav>

    )
}

export default MobileNav