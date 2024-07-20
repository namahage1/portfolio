import React, { useEffect } from 'react';
import images from '../utils/importImages'; // Import the images

// Project component
const Project = ({ projects }) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const containerStyles = {
    marginRight: '2em',
    color: 'blue',
    backgroundColor: 'lightgrey',
    padding: '10px'
  };

  const titleStyles = {
    fontSize: '24px'
  };

  const imageStyles = {
    width: '100%', // Adjust the image width as needed
    maxWidth: '600px', // Adjust the max width as needed
    height: 'auto',
    margin: '20px 0' // Adjust the margin as needed
  };

  return (
    <div style={containerStyles}>
      <h1 style={titleStyles}>My Projects</h1>
      <h2>These are examples of projects (click images below):</h2>
      {projects.map((project) => (
        <a href={project.repoUrl} key={project.id} target="_blank" rel="noopener noreferrer">
          <img src={project.src} alt={project.alt} style={imageStyles} />
        </a>
      ))}
    </div>
  );
};

const Portfolio = () => {
  
  return (
    <div>
      <h1>My Portfolio</h1>
      <Project projects={images} />
    </div>
  );
};
export default Portfolio;
