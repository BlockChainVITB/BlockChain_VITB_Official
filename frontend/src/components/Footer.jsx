import React from 'react';
import Whatsapp from '../assets/icons8-whatsapp-48.png';
import Linkedin from '../assets/icons8-linkedin-48.png';
import Insta from '../assets/icons8-instagram-48.png';


export default function Footer() {
  return (
    <div className='bg-[hsla(0,_0%,_6%,_0.2)]'>
      <div className='flex flex-col p-16'>
        <div className='flex justify-between items-start flex-row flex-wrap w-full text-left mb-8'>
            <div className="w-[150px] m-4 flex justify-start flex-col text-[white]">
                <p className='text-[12px] leading-[15px] mx-[0] my-2 cursor-pointer'>
                    Join our WhatsApp Community and follow us on Instagram to keep up to date with our latest events and announcements.
                </p>
            </div>
            <div className='w-[150px] m-4 flex justify-start flex-col text-[white]'>
                <h4>Quick Links</h4>
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
                <h4 className="font-bold text-lg mb-2">Community</h4>
                <div className="flex flex-row">
                    <p><img src={Whatsapp} alt="" className='w-4/5' /></p>
                    <p><img src={Insta} alt="" className='w-4/5'/></p>
                    <p><img src={Linkedin} alt="" className='w-4/5'/></p>
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
