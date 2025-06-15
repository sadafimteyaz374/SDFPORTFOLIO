import React from "react";
import "./project.css";

const projectData = [
  {
    title: "To-Do List App",
    image: '/todo.png',
    description: "A task management app built with React for the frontend and CSS for styling.",
    tech: "React, CSS",
  },
  {
    title: "Mini-Blog site",
    image: '/blog.png',
    description: "A Blog site app built with React for the frontend and CSS for styling.",
    tech: "React, CSS",
  },
  {
    title: "Portfolio Website",
    image: '/port.png',
    description: "A personal portfolio website that presents about me, my skills, my projects and my resume.",
    tech: "React, CSS",
  },
  {
    title: "Online Food Ordering System",
    image: '/food.png',
    description: "A C++ based restaurant system to handle orders and billing.",
    tech: "C++",
  },
  {
    title: "Voting System",
    image: '/vote.png',
    description: "A command-line voting app developed in C.",
    tech: "C",
  },
  {
    title: "Hospital Management System",
    image: '/hospital.png',
    description: "CLI-based system to manage hospital records, patients, and appointments.",
    tech: "C",
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <img src={project.image} alt=" " />
            <p>{project.description}</p>
            <span className="tech-used">{project.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
