import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Main() {
  return (
    <div className="" id="main">
      <img
        className="w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1484278786775-527ac0d0b608?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-black/10">
        <div>
          <h1>I am Tim Aivazov</h1>
          <h2>
            <TypeAnimation
              sequence={[
                'Front-End Developer', // Types 'One'
                2000, // Waits 1s
                'React', // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                'NextJS', // Types 'Three' without deleting 'Two'
                1000,
                'Tailwind',
                1000,
                'ViteJS',
                1000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '1em' }}
            />
          </h2>
        </div>
      </div>
    </div>
  );
}
