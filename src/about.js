import React from "react";
import './about.css';

const aboutdata = [
  {
    title: "Programming Knowledge",
    description: "I’ve worked with languages like <strong>C, C++, Java, Python</strong>, and <strong>JavaScript</strong>. These languages have helped me build projects like restaurant management systems, voting applications, and hospital record systems.",
  },
  {
    title: "Frontend Development",
    description: "I have strong experience with <strong>HTML, CSS, JavaScript, React.js, Bootstrap</strong>. I build responsive, clean UIs and love using React components to bring interactivity to life.",
  },
  {
    title: "Full Stack Journey",
    description: "I'm currently learning <strong>Node.js, Express.js</strong>, and <strong>MongoDB</strong> to become a full stack developer. I believe in continuous learning through real-world projects and hands-on practice.",
  },
  {
    title: "Career Goals",
    description: "I'm looking for internship opportunities where I can contribute to meaningful projects, collaborate with a <strong>Technical Team</strong>, and grow as a professional developer. I’m committed to improving every day.",
  },
];

function About() {
  return (
    <div className="container">
      <div className="data">
        <div className="img">
          <img src="/sdf.png" alt="Profile" />
        </div>
        <div className="intro">
          <h1>About Me</h1>
          <p>
            Hi, I'm a 3rd-year B.Tech <strong>Computer Science</strong> student at Maulana Azad National Urdu University.<br />
            I'm passionate about web development and constantly learning new technologies like <strong>React, JavaScript</strong>, and <strong>UI/UX Design</strong>.<br />
            I enjoy turning ideas into responsive, user-friendly websites.<br />
            Currently, I'm looking for opportunities to grow through internships and collaborative projects.
          </p>
        </div>
      </div>

      <div className="work">
        <h1 className="workhead">My Skills & Journey</h1>
        <div className="info">
          {aboutdata.map((project, index) => (
            <div className="card" key={index}>
              <h2>{project.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
