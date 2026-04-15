import React from 'react';
import { NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';  
import logoImg from "../../assets/logo.png"
const Navbar = () => {
    return (
        <div>
           <nav className="shadow-md bg-white">
      <div className="flex justify-between items-center container w-[90%] mx-auto px-4 py-2">
        {/* Logo */}
        <div>
            <img src={logoImg} alt="" />
            </div>

        {/* Links (Desktop) */}
        <div className="flex items-center gap-4">
          <ul className="lg:flex hidden justify-between items-center gap-4">
            <li>
              <NavLink
                to="/"
                className={({isActive}) =>
                `font-semibold p-2 rounded-lg ${isActive ? "bg-[#244d3f] text-white" : "bg-white text-[#64748b]"}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={({isActive}) =>
                `font-semibold p-2 rounded-lg ${isActive ? "bg-[#244d3f] text-white" : "bg-white text-[#64748b]"}`}
              >
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                 className={({isActive}) =>
                `font-semibold p-2 rounded-lg ${isActive ? "bg-[#244d3f] text-white" : "bg-white text-[#64748b]"}`}
              >
                Stats
              </NavLink>
            </li>
          </ul>

          {/* Contribute Button */}
         
        </div>
      </div>

      
    
    </nav>
        </div>
    );
};

export default Navbar;