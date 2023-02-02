import React from 'react';
import { Link } from 'react-router-dom';
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
            Howdy, dear Guest!{' '}
            <span className="block mt-4 md:text-center lg:text-left">
              I'm Tim Aivazov
            </span>
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
          <div>
            <ul className="flex justify-between mt-6 max-w-[200px] w-full  bg-gray-200/50 rounded-lg">
              <li className="p-2">
                <Link
                  to="https://linkedin.com/in/timur-aivazov"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaLinkedinIn
                    size={20}
                    className=" hover:text-gray-100 ease-in duration-200"
                  />
                </Link>
              </li>

              <li className="p-2">
                <Link
                  to="https://www.instagram.com/aivazov_t/"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaInstagram
                    size={20}
                    className=" hover:text-gray-100 ease-in duration-200"
                  />
                </Link>
              </li>
              <li className="p-2">
                <Link
                  to="https://t.me/Timur_Av"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaTelegramPlane
                    size={20}
                    className=" hover:text-gray-100 ease-in duration-200r"
                  />
                </Link>
              </li>
              <li className="p-2">
                <Link
                  to="https://github.com/aivazov"
                  target="_blank"
                  className="cursor-pointer"
                >
                  <FaGithub
                    size={20}
                    className=" hover:text-gray-100 ease-in duration-200"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
