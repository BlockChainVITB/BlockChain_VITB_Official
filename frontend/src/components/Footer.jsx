import React from 'react';
import Whatsapp from '../assets/whatsapp-logo.png';
import Linkedin from '../assets/linkedin-logo.png';
import Insta from '../assets/insta-logo.png';
import logo from '../assets/BCL.ico'


export default function Footer() {
  return (
    <div 
    id='footer'
    className='bg-[hsla(0,_0%,_6%,_0.2)]'
    >
      <div className='flex flex-col p-16'>
        <div className='flex justify-between items-start flex-row flex-wrap w-full text-left mb-8'>
            <div className="w-[250px] m-4 flex justify-start flex-col text-[white]">
                <div className="logo-div mix-blend-mode: luminosity ">
                <img src={logo} alt="Logo" className="w-16 h-16 mb-1 mix-blend-mode: luminosity rounded-[100%]"/>

                </div>
                <p className='text-[14px] leading-[17px] mx-[0] my-2 cursor-pointer'>
                    Join our WhatsApp Community and follow us on Instagram to keep up to date with our latest events and announcements.
                </p>
            </div>
            <div className='w-[150px] m-4 flex justify-start flex-col text-[white]'>
                <h4 className='font-bold text-lg mb-3 pl-5'>Quick Links</h4>
                <a href="/About">
                    <p>About</p>
                </a>
                <a href="/OurMotive">
                    <p>Our Motive</p>
                </a>
                <a href="/Timeline">
                    <p>Timeline</p>
                </a>
                <a href="/TeamDetails">
                    <p>Team Details</p>
                </a>
            </div>
            <div className="text-[14px] leading-[17px] mb-[0.9rem]">
                <h4 className="font-bold text-lg mb-3 pl-5">Community</h4>
                <div className="flex flex-row ">
                    <p><img src={Whatsapp} alt="" className='w-16 h-16 mb-1 mix-blend-mode: luminosity' /></p>
                    <p><img src={Insta} alt="" className='w-16 h-16 mb-1 mix-blend-mode: luminosity'/></p>
                    <p><img src={Linkedin} alt="" className='w-16 h-16 mb-1 mix-blend-mode: luminosity'/></p>
                </div>
            </div>

            <hr className="my-4" />

            <div className="flex flex-col items-start">
                <div className="mb-2">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Blockchain Club | VIT Bhopal. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-4">
                    <a href="/terms" className="text-sm text-blue-500 hover:underline">Term & Conditions</a>
                    <a href="/privacy" className="text-sm text-blue-500 hover:underline">Privacy</a>
                    <a href="/security" className="text-sm text-blue-500 hover:underline">Security</a>
                    <a href="/cookie" className="text-sm text-blue-500 hover:underline">Cookie Declaration</a>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}