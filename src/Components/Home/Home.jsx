import React, { useState, useEffect } from "react";
import avatarImg from "../../assets/john.jpg";
import TextChange from "../TextChange";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={`text-white flex flex-col md:flex-row w-full justify-between items-center p-10 md:p-20 ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`} 
    >
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter bg-[#465697]">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight bg-[#465697]">
          I'm a frontend and backend developer using frameworks like ReactJS, NodeJS, Express, and others.
        </p>
        <a href="#Footer">
          <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            Contact Me
          </button>
        </a>
      </div>

      <div className="flex justify-center mt-5 md:mt-0">
        
        <img className="w-40 h-40 md:w-80 md:h-80 rounded-full" src={avatarImg} alt="Profile" />
      </div>

  
      <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 p-3 bg-gray-500 text-white rounded-full focus:outline-none"
      >
        {isDarkMode ? "🌙" : "🌞"}
      </button>
    </div>
  );
};

export default Home;
