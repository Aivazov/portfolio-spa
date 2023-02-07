import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

const animation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default function Main() {
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const loadingPhotoTimeout = setTimeout(() => {
    setLoadingPhoto(true);
  }, 1000);

  useEffect(() => {
    loadingPhotoTimeout;
    clearTimeout(loadingPhotoTimeout);
  }, []);

  return (
    <div className="" id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1484278786775-527ac0d0b608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/40">
        <div className="flex justify-between items-center max-w-[750px] m-auto h-full w-full">
          <div className="max-w-[750px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
            <h1 className="sm:text-5xl text-4xl font-bold text-gray-300 sm:text-center md:text-center lg:text-left">
              Welcome, dear Guest!
              <span className="block mt-4 min-[320px]:text-center lg:text-left text-gray-100">
                I'm Tim Aivazov
              </span>
            </h1>
            <h2 className="flex justify-center lg:justify-start sm:text-3xl text-2xl pt-4 text-gray-100">
              <TypeAnimation
                sequence={[
                  'Front-End Developer', // Types 'One'
                  2000, // Waits 2s
                  'JavaScript | TypeScript', // Deletes 'One' and types 'Two' and so on
                  3000,
                  'React | Next.js | Vite.js',
                  3000,
                  'Bootstrap | Tailwind | Material UI',
                  3000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em' }}
              />
            </h2>
            <div className="sm:flex justify-center lg:justify-start">
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
          {loadingPhoto && (
            <motion.div
              variants={animation}
              custom={2}
              initial="hidden"
              whileInView="visible"
              className="md:hidden sm:hidden min-[320px]:hidden lg:inline-block rounded-full"
            >
              <img
                // src="../assets/1669725289507.jpg"
                src="https://media.licdn.com/dms/image/D4D03AQH7bsCe0UQo8w/profile-displayphoto-shrink_800_800/0/1669725289507?e=2147483647&v=beta&t=_bb9Oq1uGr-DU-HHez1hCqIxFLdfeu6LPV-g-rtC39o"
                alt="Tim's Photo"
                className="max-w-[200px] border-2 rounded-full z-100 object-cover bg-white"
              />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
