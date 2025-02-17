"use client";
import React from 'react'
import { FaInstagram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (
   <>
    <div className="w-full bg-black text-white py-8 mt-10">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
    <div className="flex items-center justify-center mb-4 md:mb-0">
      <span className="text-lg font-semibold">L&B Bazaarr</span>
    </div>

   
    <div className="flex flex-wrap gap-6 text-sm justify-center md:justify-start">
      <a href="#" className="hover:text-gray-400 transition">About </a>
      <a href="#" >
        <>
        <p className="hover:text-gray-400 transition" > Categories</p>
        <div className="   flex-wrap gap-6">
        <p>Clothing</p>
        <p>Lingerie</p>
        <p>FootWear</p>
        <p>Hand Bag</p>
        </div>
        </>

      </a>
      <a href="#" className="hover:text-gray-400 transition">Informations</a>
      <a href="#" className="hover:text-gray-400 transition">Contact</a>
    </div>

    <div className="flex items-center gap-4 mt-4 md:mt-0">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition"
        aria-label="Twitter"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 transition"
        aria-label="GitHub"
      >
        <FaGithub size={20} />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition"
        aria-label="Facebook"
      >
        <FaFacebook size={20} />
      </a>
      <a
       
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500 transition"
        aria-label="Dribbble"
      >
        
      </a>
    </div>
  </div>

  
  <div className="border-t border-gray-600 mt-6 pt-4 flex justify-between text-sm opacity-70">
    <p>© 2024 L&B Bazaar. All rights reserved.</p>
    <div className="flex items-center gap-2">
      <span>English</span>
      <span className="cursor-pointer">&#9660;</span> 
    </div>
  </div>
</div>
</>

  )
}
export default Footer;