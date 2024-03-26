import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header className="w-full top-0 left-0 bg-transparent z-50">
      <nav className="flex items-center justify-between relative h-16 m-4">
        <NavLink to="/" className="text-primary transition-colors duration-400 text-2xl font-secondary">
          Blockchain Club
        </NavLink>

        <div className={`flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0 ${showMenu ? "right-0" : "-right-full"} fixed lg:static top-0 bg-black bg-opacity-20 backdrop-blur-md w-4/5 lg:w-auto h-full lg:h-auto pt-24 lg:pt-0 transition-right duration-400`}
          id="nav-menu">
          <ul className="space-y-10 lg:space-y-0 lg:flex lg:items-center lg:space-x-10">
            <li>
              <NavLink to="/" className="text-title font-semibold transition-colors duration-400" onClick={closeMenuOnMobile}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className="text-title font-semibold transition-colors duration-400" onClick={closeMenuOnMobile}>
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-title font-semibold transition-colors duration-400"
                onClick={closeMenuOnMobile}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/profiles"
                className="text-title font-semibold transition-colors duration-400"
                onClick={closeMenuOnMobile}
              >
                Profiles
              </NavLink>
            </li>

          </ul>
          <div className="absolute top-4 right-6 text-2xl text-title cursor-pointer lg:hidden" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="text-2xl text-title cursor-pointer lg:hidden" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
        <button className="text-black px-4 p-2 font-[500] text-[14px] rounded-full self-center hover:font-bold transition-all duration-200   bg-gradient-to-r from-BASE_YELLOW to-orange">Join Us</button>

      </nav>
    </header>
  );
};

export default Navbar;