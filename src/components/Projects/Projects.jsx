import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import dashboardImg from '../../assets/dashboard.jpg';
import weatherImg from '../../assets/weather-app.jpg';
import imageFinderImg from '../../assets/image-finder-react.jpg';

const apps = [
  {
    img: dashboardImg,
    title: 'Dashboard App',
    library: 'Next.js, Chart.js',
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
    link: 'https://aivazov.github.io/react-hooks-images-gallery/',
  },
];

export default function Projects() {
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

      <div className="grid sm:grid-cols-2 gap-12">
        {apps.map(({ link, img, title, library }) => (
          <ProjectItem
            key={link}
            img={img}
            title={title}
            stack={library}
            projectLink={link}
          />
        ))}
      </div>
    </div>
  );
}
