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
    <div
      id="projects"
      className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-lg max-sm:text-sm"
    >
      <h1 className="text-center font-bold text-4xl text-[#1a243c]">
        Projects
      </h1>
      <p className="text-left py-6">
        Here are my pet projects where I tested some new technology stacks. In
        the Dashboard project, I used React Framework Next.js for the first
        time. Also in this project, I applied Chart.js and worked with a chart
        based on a plain local data array.
      </p>

      <p className="text-left py-4">
        The second project is the Weather App. A simple app that shows the user
        the current data of the city that the user enters in the search bar. The
        data is taken from WeatherAPI. Demonstrates the ability to retrieve data
        from the backend and render it on the client side. Built on Next.js.
      </p>

      <p className="text-left py-4">
        The third application searches for images based on the tags entered in
        the search bar. The data is taken from PixabayAPI. Pagination is
        present. Built on classic React CRA.
      </p>

      <div className="grid sm:grid-cols-2 gap-12 mt-4">
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
