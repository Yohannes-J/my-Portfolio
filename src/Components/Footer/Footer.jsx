import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          yohannesjohn126@gmail.com
        </li>
        <li className="flex gap-1 items-center">
        <FaPhone />
          <p> 0924-16-49-94/07-16-12-21-63</p>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/Yohannes Alemayehu
        </li>
        
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/yohannes j
        </li>
      </ul>
    </div>
  );
};

export default Footer;
