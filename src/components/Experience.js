import React from 'react';
import img from '../assets/img/hsbc.png';
// import './Experience.css'; // Import the CSS file

const Experience = () => {
  return (
    <>
      <section className="project" id="experience">
        <h2 style={{ marginBottom: '5px' }}>Experience</h2>
      </section>

      <div className="experience-body">
        <div className="rectangle">
          <div className="logo">
            <img src={img} alt="Logo" className="logoImg" />
          </div>
          <div className="work">
            <h4>HSBC Technology India</h4>
            <p style={{ color: '#C0C0C0' }}>Software Developer Intern</p>
            <p style={{ color: '#C0C0C0' }}>July 2023 - December 2023</p>
            <p>
              Worked on API development, applying API security policies, providing support to existing APIs.
            </p>
            <br></br>
              <b><i>Skills:</i></b>
            
            <ul>
              <li>SpringBoot -- Jenkins -- Postman</li>
              {/* <li>Java</li>
              <li>Jenkins</li>
              <li>Postman</li> */}
            </ul>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Experience;
