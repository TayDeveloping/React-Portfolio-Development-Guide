import React from 'react';
import Project from '../components/Project';

const projects = [
  {
    title: 'Project 1',
    image: '/assets/project1.png',
    deployedLink: 'https://example.com/project1',
    githubLink: 'https://github.com/your-github/project1',
  },
  {
    title: 'Project 2',
    image: '/assets/project2.png',
    deployedLink: 'https://example.com/project2',
    githubLink: 'https://github.com/your-github/project2',
  },0
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;