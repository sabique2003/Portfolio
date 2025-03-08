import React from 'react';

function AboutUs() {
  return (
    <div className="container p-4">
      <h2 className="text-center mb-4">About Me</h2>
      <div className="row align-items-center">
        {/* Left Side - About Text */}
        <div className="col-lg-6 col-md-12 text-center mb-4">
          <p className="px-3" style={{ lineHeight: '1.8' }}>
            "Hi, I'm Muhammed Sabique K, a passionate web developer specializing in the MERN/MEAN stack. 
            I have worked on projects like HomeChefs, Project Fair, Weather App, and smaller web applications, 
            gaining expertise in user authentication, API integrations, and database management. 
            I am excited to build scalable and efficient web solutions."
          </p>

          {/* Download CV Button */}
          <a href="/cv.pdf" download="MuhammedSabique_CV.pdf" className="btn btn-primary">
            <i className="fas fa-file-download me-2"></i> Download CV
          </a>
        </div>

        {/* Right Side - Education Graphical Representation */}
        <div className="col-lg-6 col-md-12">
          <div className="text-center">
            <h4 className="mb-3">Education</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fas fa-graduation-cap text-primary me-2"></i>
                Bachelor's in Computer Applications (BCA)
              </li>
              <li className="mb-3">
                <i className="fas fa-university text-success me-2"></i>
                GEMS Arts & Science College, Ramapuram (2024)
              </li>
              <li>
                <i className="fas fa-university text-danger me-2"></i>
                Full-Stack Training, Luminar Technolab (May - Dec 2024)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
