import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

export default function ProjectItem({ img, title, stack, projectLink }) {
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  setTimeout(() => {
    setLoadingPhoto(true);
  }, 1000);
  return (
    <>
      {loadingPhoto && (
        <motion.div
          className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 group rounded-xl hover:bg-[#1a243c]/40 ease-in duration-200"
          variants={animation}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src={img}
            alt=""
            className="rounded-xl group-hover:opacity-10 ease-in duration-200"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl font-bold text-white tracking-wider text-center">
              {title}
            </h3>
            <p className="pb-4 pt-2 text-white text-center">{stack}</p>
            <Link to={projectLink} target="_blank">
              <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-gray-200">
                Go to the App
              </p>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
