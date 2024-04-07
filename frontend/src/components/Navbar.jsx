import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import logo from '../assets/BCL.ico'
import Lottie from 'react-lottie';
import NavbarAnimationData from '../assets/NavAnimationData.json';
import { HashLink as NavLink } from 'react-router-hash-link';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isHidden, setIsHidden] = useState(window.innerWidth<=1250);

  useEffect(()=>{
    const handleResize = ()=>{
      setIsHidden(window.innerWidth<=1250);
    }

    window.addEventListener('resize', handleResize);

    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[])
  const NavbarAnimationOptions ={
    loop:true,
    autoplay:true, 
    animationData: NavbarAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };
  const containerStyles = {
    // hover:text-orange hover:underline hover:underline-offset-8
    textDecoration: 'underline',
    color: 'orange',
  }

  return (
    <header className="w-full top-0 left-0  z-50">
      <nav className="flex items-center justify-between relative h-30 m-0 w-5/6 mx-auto">
        <NavLink to="/" className="text-primary transition-colors duration-400 text-4xl font-weight-800 font-secondary flex gap-2 items-center	">
          {/* <img src={logo} alt="Logo" className="w-16 h-16 mb-1 rounded-full mix-blend-luminosity"/> */}
          <Lottie options={NavbarAnimationOptions} height={100} width={100}/>
          <h2>Blockchain Club</h2>
        </NavLink>

        <div className={`flex flex-col space-y-10 lg:flex-row lg:space-x-10 bg-black-300 lg:space-y-0 ${showMenu ? "right-0 bg-neutral-900" : "-right-full"}  bg-grey-900 fixed lg:static  top-0  z-10  h-full w-4/5 lg:w-auto p-10 rounded-xl lg:p-0 lg:h-auto pt-24 lg:pt-0 transition-right duration-500 `}
          id="nav-menu">
          <ul className="space-y-10 lg:space-y-0  lg:flex lg:items-center lg:space-x-10 ">
            <li className="text-center">
              <NavLink smooth to="#home" className="text-title font-semibold transition-colors duration-400 hover:underline hover:underline-offset-4 hover:text-orange " onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink smooth to="#motive" className={`text-title font-semibold transition-colors duration-400 hover:underline hover:underline-offset-4 hover:text-orange`}
              
              onClick={closeMenuOnMobile}>
                About Us
              </NavLink>
              {/* <span className="absolute inset-x-0 bottom-0 h-1 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span> */}

            </li>
            <li className="text-center">
              <NavLink smooth to="/#events" className="text-title font-semibold transition-colors duration-400 hover:underline hover:underline-offset-4 hover:text-orange" onClick={closeMenuOnMobile}>
                Events
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                smooth to="/#profiles"
                className="text-title font-semibold transition-colors duration-400 hover:underline hover:underline-offset-4 hover:text-orange"
                onClick={closeMenuOnMobile}
              >
                Profiles
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                smooth to="/#footer"
                className="text-title font-semibold transition-colors duration-400 hover:underline hover:underline-offset-4 hover:text-orange"
                onClick={closeMenuOnMobile}
              >
                Contact Us
              </NavLink>
            </li>

          </ul>
          <div className="absolute top-4 right-6 text-3xl hover:text-zinc-200 text-title cursor-pointer lg:hidden" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="text-3xl text-title hover:text-4xl hover:text-zinc-200 duration-100	data-twe-attribute.	cursor-pointer lg:hidden" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>

        <button className={` ${window.innerWidth<=1250 ? "hidden" : ""} text-black px-4 p-2 font-[500] text-[14px] rounded-full self-center hover:font-bold transition-all duration-200   bg-gradient-to-r from-BASE_YELLOW to-orange`}>Join Us</button>

      </nav>
    </header>
  );
};

export default Navbar;