import React from 'react';

export default function ProjectItem({ img, title }) {
  return (
    <div>
      <img src={img} alt="" />
      <h1>{title}</h1>
    </div>
  );
}
