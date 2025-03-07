import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Works() {
  return (
    <Container className='mt-5'>
      <Row className='justify-content-center'>
        {/* Home Chefs Card */}
        <Col xs={12} sm={6} md={4} className='mb-4 d-flex justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' style={{ height: '160px' }} src='https://assets.website-files.com/61350df459066563d0954cce/6135284d6048e42768aef3fc_new-smoke-animation.gif' />
            <Card.Body>
              <Card.Title>Home Chefs</Card.Title>
              <Card.Text>
                HomeChefs is a MERN stack platform connecting home cooks with customers, featuring authentication, profile management, and ordering.
              </Card.Text>
              <Button variant='success'>
                <a href='https://home-chefs-nine.vercel.app/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                  View
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Project Fair Card */}
        <Col xs={12} sm={6} md={4} className='mb-4 d-flex justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' style={{ height: '160px' }} src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d9c68865007279.5ae5a4dae852b.gif' />
            <Card.Body>
              <Card.Title>Project Fair</Card.Title>
              <Card.Text>
                ProjectFair is a MERN stack web app for showcasing and discovering projects, with authentication and portfolio display.
              </Card.Text>
              <Button variant='success'>
                <a href='https://project-fair-client-rho.vercel.app/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                  View
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Weather App Card */}
        <Col xs={12} sm={6} md={4} className='mb-4 d-flex justify-content-center'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' style={{ height: '160px' }} src='https://i.pinimg.com/originals/79/35/fd/7935fdf1fe2c5dd8205de03a214befb0.gif' />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                A React-based weather app that provides real-time weather updates using API integration.
              </Card.Text>
              <Button variant='success'>
                <a href='https://sabique2003.github.io/Weather/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>
                  View
                </a>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Works;