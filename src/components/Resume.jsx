import React from 'react';
import PersonImg from '../../public/static/person.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-8">
      <h1 className="text-center font-bold text-4xl text-[#1a243c]">Resume</h1>

      <div className="flex max-md:flex-col mt-4 justify-between items-center">
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          src={PersonImg}
          // src="/static/person.png"
          alt="Tim's-photo"
          loading="lazy"
          className="mt-4 rounded-lg max-w-[400px] max-h-[500px] object-cover max-sm:w-[300px]"
        />

        <div className="max-xl:ml-4 md:max-w-md text-lg max-sm:text-sm max-md:w-[300px]">
          <p className="text-left py-4">
            I'm an aspiring Front-End developer with 7 months of nonprofit
            experience. I've submitted some of my work above to give an overview
            of my skills and how I code.
          </p>

          <p className="text-left py-4">
            At first, coding was my hobby. But now I see that I can give real
            value to web development. It will also give me the opportunity to
            develop further and grow as a professional.
          </p>

          <p className="text-left py-4">
            I enjoy mastering new technologies. Learn fast. Motivated. Without
            bad habits. Honest. Like to finish work to the end.
          </p>
        </div>
      </div>
    </div>
  );
}
