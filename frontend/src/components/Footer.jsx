import React from 'react'
import "./Footer.css";
import Whatsapp from '../assets/icons8-whatsapp-48.png';
import Linkedin from '../assets/icons8-linkedin-48.png';
import Insta from '../assets/icons8-instagram-48.png';


export default function Footer() {
  return (
    <div className='footer'>
      <div className='sb_footer section_padding'>
        <div className='sb_footer-links'>
            <div className="sb_footer-links_div">
                <p>
                    Join our WhatsApp Community and follow us on Instagram to keep up to date with our latest events and announcements.
                </p>
            </div>
            <div className='"sb_footer-links_div'>
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
            <div className="sb_footer-links_div">
                <h4>Community</h4>
                <div className="socialmedia">
                    <p><img src={Whatsapp} alt="" /></p>
                    <p><img src={Insta} alt="" /></p>
                    <p><img src={Linkedin} alt="" /></p>
                </div>
            </div>

            <hr />

            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} Blockchain Club | VIT Bhopal. All rights reserved.
                    </p>
                </div>
                <div className="sb_footer-below-links">
                    <a href="/terms"><div><p>Term & Conditions</p></div></a>
                    <a href="/privacy"><div><p>Privacy</p></div></a>
                    <a href="/security"><div><p>Security</p></div></a>
                    <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}
