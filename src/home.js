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
        <Link to="/Resume"className="n-link" >Resume</Link>
        <Link to="/Project" className="n-link">Project</Link>
        <br/><br/>
        <div className="icon">
          <div className="ico">
            <a href="https://www.linkedin.com/in/sadaf-imteyaz" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="ico">
            <a href="https://github.com/sadafimteyaz374" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-github"></i></a>
          </div>
          <div className="ico">
            <a href="https://wa.me/9142581206" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-whatsapp"></i></a>
          </div>
          {/*<div className="ico">
            <a href="https://www.linkedin.com/in/sadaf-imteyaz" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
          </div>
          */}
        </div>
      </div>
      <div className="img1">
        <img src="/sdf.png" alt=" " />
      </div>
    </div>
  );
}

export default Home;
