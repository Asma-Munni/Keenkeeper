import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#244d3f] text-white py-8">
      <div className="container w-[90%] mx-auto px-6">
        {/* Footer Content */}
        <div className="text-center mb-6">
          <p className="text-xl font-bold">KeenKeeper</p>
          <p className="text-sm mt-2">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>
        </div>

        {/* Social Links */}
        <div>
            <h3 className='text-center text-white font-semibold py-3'>Social Links</h3>
        </div>
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-2xl hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-2xl hover:text-blue-400" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-pink-500" />
          </a>
        </div>

        {/* Footer Links */}
        <div className='flex justify-between items-center'>
          {/* Copyright Text */}
        <div className=" text-sm mb-6">
          <p>&copy; 2026 KeenKeeper. All rights reserved.</p>
        </div>

         <div className="flex justify-center gap-8 mb-6">
          <a href="/privacy-policy" className="text-sm hover:text-gray-300">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-sm hover:text-gray-300">
            Terms of Service
          </a>
          <a href="/cookies" className="text-sm hover:text-gray-300">
            Cookies
          </a>
        </div>


        </div>
       

       
      </div>
    </footer>
        </div>
    );
};

export default Footer;