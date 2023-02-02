import React from 'react';

export default function ProjectItem({ img, title, stack, projectLink }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 group rounded-xl hover:bg-[#1a243c]/40 ease-in duration-300">
      {/* <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 group rounded-xl hover:bg-gradient-to-r from-gray-200 to-[#1a243c] ease-in duration-300"> */}
      <img src={img} alt="" className="rounded-xl group-hover:opacity-10 ease-in duration-200" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{stack}</p>
        <a href={projectLink} target="_blank">
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-gray-200">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
}
