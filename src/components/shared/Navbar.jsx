import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { FaBars, FaTimes } from 'react-icons/fa';
import logoImg from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive ? "bg-[#244d3f] text-white" : "text-[#64748b] hover:bg-gray-100"
    }`;

  return (
    <nav className="shadow-md bg-white">
      <div className="flex justify-between items-center container w-[90%] mx-auto px-4 py-3">
        
        {/* Logo */}
        <div>
          <img src={logoImg} alt="Logo" className="h-10 w-auto object-contain" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-4">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={navLinkClass}>
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={navLinkClass}>
              Stats
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-[#244d3f]"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden w-[90%] mx-auto pb-4">
          <ul className="flex flex-col gap-3 bg-white rounded-xl shadow-md p-4">
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timeline"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;