import React from 'react';

export default function About() {
  return (
    <div className="bg-black text-gray-400" style={{ height: '83vh' }}>
      <div className="text-4xl leading-normal text-gray-400">
        A Next.JS 12 boilorplate, tailored for SPA
      </div>
      <p className="text-2xl leading-normal">Features:</p>
      <ul
        style={{
          listStyle: 'disc',
          padding: '0 50px',
        }}
      >
        <li>React 18.0</li>
        <li>Typescript 4.3.6</li>
        <li>Eslint 8</li>
        <li>Plugin Airbnb</li>
        <li>Prettier</li>
        <li>React-router 6</li>
        <li>TailwindCSS 3</li>
        <li>Static assets compression</li>
        <li>VSCode autoformat settings and extension recommendations</li>
      </ul>
    </div>
  );
}
