// import React from 'react'
import logoicon from '../assets/HKprofile.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img className='w-16 rounded-lg mx-2' src={logoicon} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaLinkedin></FaLinkedin>
        <FaGithub></FaGithub>
        <FaInstagram></FaInstagram>
        <FaTwitterSquare></FaTwitterSquare>
      </div>
    </nav>

  )

}

export default Navbar