import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4" style={{height:"30vh"}}>
      <Container>
        <Row className="text-center">
          <Col md={6} className="mt-3">
          <p className="mb-3">An online portfolio ensures that you’re discoverable by potential clients, employers, or collaborators.Creating a portfolio website doesn’t have to be complicated. Use platforms like Weblium, WordPress, or even build a custom site from scratch. Showcase your best work, tell your story, and let your portfolio speak for itself!</p> 
            </Col>
            <Col md={6}>
            <h5 className='mt-3'>Connect with us</h5>
            <div className='my-3'>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <i className="fab fa-whatsapp fa-2x"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-light">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          
            <p>&copy; 2024 PortFolio. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;