import React from 'react';
import pngwing from '../Images/pngwing.png';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <Container fluid className='mt-5'>
      <Row className='align-items-center text-center text-md-start'>
        <Col xs={12} md={6} className='mb-4 mb-md-0'>
          <h4 className='mb-2'>Hyy, I am Sabique</h4>
          <h2 className='mt-2'>MERN STACK Developer</h2>
          <p className='ms-md-3' style={{ lineHeight: '1.6', maxWidth: '90%' }}>
            "I’m a developer focused on creating responsive and user-friendly web applications. Using modern tools like React and Bootstrap, I bring ideas to life with clean code and a strong emphasis on user experience."
          </p>
          <div>
            <Link to='/projects'>
              <Button variant='success' className='m-2'>Projects</Button>
            </Link>
            <Button variant='outline-success' className='m-2'>Contact</Button>
          </div>
        </Col>
        <Col xs={12} md={6} className='text-center'>
          <img
            src={pngwing}
            alt='Developer illustration'
            className='img-fluid'
            style={{ maxWidth: '700px' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
