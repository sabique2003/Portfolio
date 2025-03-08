import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center text-md-start align-items-center">
          {/* Left Column - About Me */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-3">About Me</h5>
            <p className="mb-3">
              I'm <strong>Muhammed Sabique K</strong>, a passionate <strong>MERN Stack Developer </strong> 
               specializing in building dynamic and scalable web applications. I enjoy creating user-friendly 
              interfaces and solving real-world problems with modern web technologies.
            </p>
          </Col>

          {/* Middle Column - Personal Details */}
          <Col md={4} className="text-center">
            <h5 className="mb-3">Personal Details</h5>
            <ul className="list-unstyled d-inline-block text-start">
              <li className="mb-2">
                <i className="fas fa-map-marker-alt text-danger me-2"></i> Manjeri, Kerala, India
              </li>
              <li className="mb-2">
                <i className="fas fa-phone-alt text-success me-2"></i> 
                <a href="tel:+919876543210" className="text-light text-decoration-none">+91 79941 04542</a>
              </li>
              <li className="mb-2">
                <i className="fas fa-envelope text-primary me-2"></i> 
                <a href="mailto:sabique@example.com" className="text-light text-decoration-none">sabique81@gmail.com</a>
              </li>
            </ul>
          </Col>

          {/* Right Column - Social Media Links */}
          <Col md={4} className="text-center text-md-end">
            <h5 className="mb-3">Connect with Me</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a href="https://github.com/sabique2003" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://wa.me/917994104542" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
              <a href="www.linkedin.com/in/sabique-k" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>

            <p className="mb-0">&copy; 2025 Portfolio. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
