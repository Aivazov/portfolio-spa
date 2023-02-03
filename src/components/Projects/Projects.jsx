import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectItem from './ProjectItem';
import dashboardImg from '../../assets/dashboard.jpg';
import weatherImg from '../../assets/weather-app.jpg';
import imageFinderImg from '../../assets/image-finder-react.jpg';

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

const apps = [
  {
    img: dashboardImg,
    title: 'Dashboard App',
    library: 'Next.js',
    link: 'https://nextjs-dashboard-test-task-git-main-aivazov.vercel.app/',
  },
  {
    img: weatherImg,
    title: 'Weather App',
    library: 'Next.js',
    link: 'https://weather-responsive-app-nextjs.vercel.app/',
  },
  {
    img: imageFinderImg,
    title: 'ImageFinder App',
    library: 'React CRA',
    link: 'https://aivazov.github.io/react-cra-3-image-gallery/',
  },
];

export default function Projects() {
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  setTimeout(() => {
    setLoadingPhoto(true);
  }, 1000);
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-center font-bold text-4xl text-[#1a243c]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
        recusandae cupiditate repellendus ipsam quo, id quasi odio inventore
        incidunt facilis autem, natus laborum perspiciatis quibusdam perferendis
        mollitia iusto assumenda beatae! Omnis sed aperiam praesentium dolore,
        accusantium veritatis. Hic nam obcaecati cumque ipsa vel officiis eaque
        ut, pariatur nostrum eos accusamus voluptatum dolorum, veritatis
        inventore similique repellendus quisquam in, nihil praesentium? Modi
        porro at rem ea eveniet maiores labore iusto numquam odit quod fugit,
        explicabo itaque corrupti dignissimos id eos iure fugiat debitis placeat
        ullam aperiam. Repudiandae culpa labore nemo qui.
      </p>
      {loadingPhoto && (
        <motion.div
          className="grid sm:grid-cols-2 gap-12"
          variants={animation}
          custom={2}
          initial="hidden"
          whileInView="visible"
        >
          {apps.map(({ link, img, title, library }) => (
            <ProjectItem
              key={link}
              img={img}
              title={title}
              stack={library}
              projectLink={link}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
