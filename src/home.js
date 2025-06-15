import React from "react";
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="text">
        <p>Hello, It's Me</p>
        <h1>Sadaf Imteyaz</h1>
        <p>And I'm a <strong>Frontend Developer</strong></p><br/>
        <p>I’m a passionate Computer Science student focused on building modern web applications and solving real-world problems through code.</p>
        <p>I’m currently learning full-stack development, specializing in React, JavaScript, and backend technologies.</p><br/>
        <a href="/Resume.pdf" download className="n-link">Download Resume</a>
        <Link to="/Project" className="n-link">Project</Link>
        <br/><br/>
        <div className="icon">
          <div className="ico">
            <i className="fa-brands fa-linkedin"></i>
          </div>
          <div className="ico">
            <i class="fa-brands fa-square-github"></i>
          </div>
          <div className="ico">
            <i class="fa-brands fa-square-whatsapp"></i>
          </div>
          <div className="ico">
            <i class="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
      <div className="img1">
        <img src="/sdf.png" alt=" " />
      </div>
    </div>
  );
}

export default Home;
