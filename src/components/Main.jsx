import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';

export default function Main() {
  return (
    <div className="" id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1484278786775-527ac0d0b608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-200 md:text-center lg:text-left">
            Howdy, dear Guest! <span className='block mt-4'>I'm Tim Aivazov</span>
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-100">
            <TypeAnimation
              sequence={[
                'Front-End Developer', // Types 'One'
                2000, // Waits 1s
                'React / Next.js / Vite.js', // Deletes 'One' and types 'Two'
                3000, // Waits 2s
                'Bootstrap / Tailwind CSS / Material UI', // Types 'Three' without deleting 'Two'
                3000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em' }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaLinkedinIn
              size={20}
              className="cursor-pointer hover:text-gray-300 ease-in duration-200"
            />
            <FaInstagram
              size={20}
              className="cursor-pointer hover:text-gray-300 ease-in duration-200"
            />
            <FaTelegramPlane
              size={20}
              className="cursor-pointer hover:text-gray-300 ease-in duration-200r"
            />
            <FaGithub
              size={20}
              className="cursor-pointer hover:text-gray-300 ease-in duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
