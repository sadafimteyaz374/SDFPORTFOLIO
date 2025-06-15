import React from "react";
import './skill.css';

function Skill() {
  return (
    <div className="myskill">
      <h1 className="section-title">Web Technologies</h1>
      <p className="info">I have a growing interest in Web Technologies and have actively worked on multiple web development projects. I am currently learning backend technologies such as Node.js, Express.js, and MongoDB.</p>

      <div className="skill-row">
        <div className="box">
          <i className="fa-brands fa-html5"></i>
          <h2>HTML</h2>
          <p className="description">Markup language for creating web structure.</p>
        </div>
        <div className="box">
          <i className="fa-brands fa-css3-alt"></i>
          <h2>CSS</h2>
          <p className="description">Stylesheet language for designing web pages.</p>
        </div>
      </div>

      <div className="skill-row">
        <div className="box">
          <i className="fa-brands fa-js"></i>
          <h2>JavaScript</h2>
          <p className="description">Make websites dynamic & interactive.</p>
        </div>
        <div className="box">
          <i className="fa-brands fa-react"></i>
          <h2>React</h2>
          <p className="description">Library for building UI components.</p>
        </div>
      </div>

      <div className="skill-row">
        <div className="box">
          <i className="fa-brands fa-node-js"></i>
          <h2>Node.js</h2>
          <p className="description">JavaScript runtime for server-side development.</p>
        </div>
        <div className="box">
          <i className="fa-solid fa-server"></i>
          <h2>Express.js</h2>
          <p className="description">Minimal and flexible Node.js web framework.</p>
        </div>
      </div>

      <div className="skill-row">
        <div className="box">
          <i className="fa-solid fa-database"></i>
          <h2>MongoDB</h2>
          <p className="description">NoSQL database for modern applications.</p>
        </div>
      </div>

      <h1 className="section-title">Programming Languages</h1>
      <p className="info">I have a fundamental understanding of various programming languages such as C, C++, Python, and JavaScript. This has helped me build a strong foundation in programming concepts like data structures, algorithms, problem-solving, and object-oriented programming (OOP).</p>
      <div className="skill-row">
        <div className="box">
          <i className="fa-solid fa-c"></i>
          <h2>C</h2>
          <p className="description">General-purpose procedural language.</p>
        </div>
        <div className="box">
          <i className="fa-brands fa-c"></i>
          <h2>C++</h2>
          <p className="description">Object-oriented extension of C language.</p>
        </div>
      </div>

      <div className="skill-row">
        <div className="box">
          <i className="fa-brands fa-python"></i>
          <h2>Python</h2>
          <p className="description">High-level language for automation & AI.</p>
        </div>
        <div className="box">
          <i className="fa-brands fa-java"></i>
          <h2>Java</h2>
          <p className="description">Versatile language used in web & mobile apps.</p>
        </div>
      </div>

      <h1 className="section-title">Tools</h1>
      <p className="info">Familiar with development tools such as Git and GitHub for version control and collaboration, and Visual Studio Code as a primary code editor. </p>
      <div className="skill-row">
        <div className="box">
          <i className="fa-brands fa-github"></i>
          <h2>Git & GitHub</h2>
          <p className="description">Version control system for managing code.</p>
        </div>
        <div className="box">
          <i className="fa-solid fa-code"></i>
          <h2>VS Code</h2>
          <p className="description">Popular source code editor by Microsoft.</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
