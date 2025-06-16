import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>Sadaf Imteyaz</h1>
      <p>Email: <a href="mailto:sadafimteyaz97@gmail.com">sadafimteyaz97@gmail.com</a> | Phone: <a href="tel:+919142581206">+91 9142581206</a></p>

      <div className="section">
        <h2>Career Objective</h2>
        <p>
          Motivated and detail-oriented student pursuing B.Tech in Computer Science Engineering. Seeking a challenging role to apply technical skills, contribute to team success, and gain practical experience in software development and web technologies.
        </p>
      </div>

      <div className="section">
        <h2>Education</h2>
        <ul className="no-bullets">
          <li>
            <strong>B.Tech in Computer Science Engineering</strong> (3rd Year)<br />
            Maulana Azad National Urdu University, Hyderabad (2023 – 2027)
          </li>
          <li>
            <strong>Diploma in Computer Science Engineering</strong><br />
            Maulana Azad National Urdu University, Hyderabad (2020 – 2023) | CGPA: 9.5
          </li>
          <li>
            <strong>Matriculation (X)</strong><br />
            BSEB Board (2020) | Percentage: 72.8%
          </li>
        </ul>
      </div>

      <div className="section">
        <h2>Technical Training</h2>
        <ul className="no-bullets">
          <li>Python course with Engineering Core Summer Internship in association with Effervescence IIIT Allahabad (August 2022)</li>
          <li>3-week training on Web Development from SWETCHA (September 2021)</li>
        </ul>
      </div>

      <div className="section">
        <h2>Technical Skills</h2>
        <ul className="no-bullets">
          <li>Languages: C, Python, Java, C++</li>
          <li>Web Technologies: HTML, CSS, JavaScript, React</li>
        </ul>
      </div>

      <div className="section">
        <h2>Projects</h2>
        <ul className="no-bullets">
          <li><strong>To-Do List App:</strong> Task management app using React & CSS.</li>
          <li><strong>Online Food Ordering System:</strong> Desktop-based app using C++.</li>
          <li><strong>Voting System:</strong> CLI-based system using C.</li>
          <li><strong>Hospital Management System:</strong> CLI-based system using C.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Strengths</h2>
        <ul className="no-bullets">
          <li>Teamwork</li>
          <li>Multitasking</li>
          <li>Creativity</li>
        </ul>
      </div>

      <div className="section">
        <h2>Declaration</h2>
        <p>I hereby declare that the information provided above is true and correct to the best of my knowledge.</p>
      </div>

      
      <div className="section">
        <a href="/sadaf_resume.pdf" download className="n-link1">Download Resume</a>
      </div>
    </div>
  );
};

export default Resume;
