import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
// import { GrProjects } from 'react-icons/gr';

export default function Sidenav() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    // console.log('state changes:', nav);
  };

  return (
    <div>
      {nav ? (
        <AiOutlineClose
          size={25}
          onClick={handleNav}
          className="z-[99] md:hidden fixed top-4 right-4 cursor-pointer"
        />
      ) : (
        <AiOutlineMenu
          size={25}
          onClick={handleNav}
          className="z-[99] md:hidden fixed top-4 right-4 cursor-pointer"
        />
      )}

      {nav ? (
        <div className="fixed w-full h-screen bg-white/70 flex flex-col justify-center items-center z-20 opacity-100 transition-opacity ease-linear duration-300">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center bg-gray-200 shadow-md rounded-full shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center bg-gray-200 shadow-md rounded-full shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center bg-gray-200 shadow-md rounded-full shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center bg-gray-200 shadow-md rounded-full shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div
          // onClick={handleNav}
          className="opacity-0 transition-opacity ease-linear duration-300"
        />
        // ''
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="m-3 p-4 rounded-full bg-gray-100 shadow-gray-400 shadow-md hover:scale-110 hover:bg-gray-200 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#projects"
            className="m-3 p-4 rounded-full bg-gray-100 shadow-gray-400 shadow-md hover:scale-110 hover:bg-gray-200 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#main"
            className="m-3 p-4 rounded-full bg-gray-100 shadow-gray-400 shadow-md hover:scale-110 hover:bg-gray-200 ease-in duration-200"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="m-3 p-4 rounded-full bg-gray-100 shadow-gray-400 shadow-md hover:scale-110 hover:bg-gray-200 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
