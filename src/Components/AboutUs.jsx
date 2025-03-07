import React from 'react';
import a1 from '../assets/a1.png';

function AboutUs() {
  return (
    <div className="container p-4">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <p className="px-3" style={{ lineHeight: '1.8' }}>
            "Hi, I'm Muhammed Sabique K, a passionate web developer specializing in the MERN/MEAN stack. 
            After earning my Bachelor's in Computer Applications from GEMS Arts & Science College, Ramapuram (2024), 
            I completed an intensive Full-Stack training at Luminar Technolab, Calicut (May - Dec 2024). 
            I have worked on projects like HomeChefs, Project Fair, Weather App, and smaller web applications, 
            gaining expertise in user authentication, API integrations, and database management. 
            I am excited to build scalable and efficient web solutions."
          </p>
        </div>
        <div className="col-lg-6 col-md-12 text-center">
          <img src={a1} alt="About Me" className="img-fluid rounded shadow-lg" style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
