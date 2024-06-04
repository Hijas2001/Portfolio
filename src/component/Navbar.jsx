// import React from 'react'
import logoicon from '../assets/HKprofile.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img className='w-16 rounded-lg mx-2' src={logoicon} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/hijas-k-670a74288/'> <FaLinkedin></FaLinkedin></a>
        <a href='https://github.com/Hijas2001'> <FaGithub></FaGithub></a>
        <a href='https://www.instagram.com/hijasss_/'>  <FaInstagram></FaInstagram></a>
        <a href='https://leetcode.com/profile/'>  <SiLeetcode /></a>

      </div>
    </nav>

  )

}

export default Navbar