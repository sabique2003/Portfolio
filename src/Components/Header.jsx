import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myImage from '../Images/myImage.png'
function Header() {
  return (
    <>
      <Navbar className='bg-success'>
        <Container>
          <Row className="w-100 justify-content-between align-items-center">
            <Col xs="auto">
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={myImage}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                PortFolio
              </Navbar.Brand>
            </Col>
            <Col xs="auto">
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search"
                
                />
                <Button type="submit" className='ms-2'><i className="fa-solid fa-magnifying-glass"/></Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
