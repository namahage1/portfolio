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
      <p>This is an example of projects loaded from GitHub:</p>
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      repoUrl: "https://namahage1.github.io/myportfolio/",
      imageName: "890842.jpg",
      imageAlt: "Project 1"
    },
    {
      repoUrl: "https://github.com/namahage1/anotherproject",
      imageName: "another-image.jpg",
      imageAlt: "Project 2"
    },
    // Add more projects as needed
  ];
  return (
    <div>
      <h1>My Portfolio</h1>
      <Project projects={projects} />
    </div>
  );
};
export default Portfolio;
