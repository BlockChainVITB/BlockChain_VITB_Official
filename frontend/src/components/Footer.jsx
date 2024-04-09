import React from 'react';
import Whatsapp from '../assets/whatsapp-logo.png';
import Linkedin from '../assets/linkedin-logo.png';
import Insta from '../assets/insta-logo.png';
import logo from '../assets/BCL.ico'
import { HashLink as Link } from 'react-router-hash-link';
import art from '../assets/footertop.png';

export default function Footer() {
  return (
    <div 
    id='footer'
    className='bg-[hsla(0,_0%,_6%,_0.2)] flex-col justify-center'
    >
        <div className="relative flex justify-center items-center flex-col">
            <div className="absolute z-10 flex flex-col items-center justify-center">
                <h1 className="bg-clip-text text-transparent bg-gradient-to-t w-5/6  from-amber-700 via-amber-600 to-amber-300 font-bold text-5xl lg:text-8xl my-12 text-center">
                    Let's start connecting
                </h1>
                <button className={` text-black px-4 py-2 font-semibold text-sm lg:text-lg rounded-full self-center hover:font-extrabold transition-all duration-200 from-amber-700 via-amber-400 to-amber-300 bg-gradient-to-r`}>Join Us</button>
            </div>
            <img className="opacity-60" src={art} alt="image" />
        </div>

        <div className='flex flex-col p-16 w-5/6'>
            <div className='flex justify-between items-start flex-row flex-wrap w-full text-left mb-8'>
                <div className="w-[250px] flex justify-start flex-col">
                    <div className="logo-div mix-blend-mode: luminosity ">
                    <img src={logo} alt="Logo" className="w-16 h-16 mb-1 mix-blend-mode: luminosity rounded-[100%]"/>

                    </div>
                    <p className='text-sm font-semibold leading-[17px] mx-[0] my-2 cursor-pointer text-neutral-350 '>
                        Join our WhatsApp Community and follow us on Instagram to keep up to date with our latest events and announcements.
                    </p>
                </div>
                <div className='w-[150px] flex justify-start flex-col '>
                    <h4 className='font-extrabold text-lg mb-3 text-neutral-300 '>Quick Links</h4>
                    <Link smooth to="#home" className='font-thin text-neutral-200'>
                        <p>About</p>
                    </Link>
                    <Link smooth to="#motive" className='font-thin text-neutral-200'>
                        <p>Our Motive</p>
                    </Link>
                    <Link smooth to="#events" className='font-thin text-neutral-200'>
                        <p>Timeline</p>
                    </Link>
                    <Link smooth to="#profiles" className='font-thin text-neutral-200'>
                        <p>Team Details</p>
                    </Link>
                </div>
                <div className=" leading-[17px] mb-[0.9rem]">
                    <h4 className="font-extrabold text-lg text-neutral-300 mb-3 pl-5">Community</h4>
                    <div className="flex flex-row ">
                        <p><img src={Whatsapp} alt="" className='w-16 h-16 mb-1 mix-blend-mode: luminosity' /></p>
                        <p><img src={Insta} alt="" className='w-16 h-16 mb-1 mix-blend-mode: luminosity'/></p>
                        <p><img src={Linkedin} alt="" className='w-16 h-16 mb-1 mix-blend-mode: luminosity'/></p>
                    </div>
                </div>

                <hr className="my-4" />

                <div className="flex flex-col items-start ">
                    <div className="mb-2">
                        <p className="text-sm font-extrabold text-neutral-50">
                            &copy; {new Date().getFullYear()} Blockchain Club | VIT Bhopal. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="/terms" className="text-sm font-semibold text-blue-500 hover:underline">Term & Conditions</a>
                        <a href="/privacy" className="text-sm font-semibold text-blue-500 hover:underline">Privacy</a>
                        <a href="/security" className="text-sm font-semibold text-blue-500 hover:underline">Security</a>
                        <a href="/cookie" className="text-sm font-semibold text-blue-500 hover:underline">Cookie Declaration</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}