import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Works() {
  return (
    <>
    <div className='d-flex justify-content-around m-3 p-3 mt-5 container-fluid' style={{ height: "90vh" }}>
        <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" style={{height:"160px"}} src="https://assets.website-files.com/61350df459066563d0954cce/6135284d6048e42768aef3fc_new-smoke-animation.gif" />
      <Card.Body>
        <Card.Title>Home Chefs</Card.Title>
        <Card.Text>
        HomeChefs is a MERN stack web platform that connects home cooks with customers,
         featuring user authentication, profile management, and an intuitive ordering system.
        </Card.Text>
        <div className="d-flex justify-content-center mt-5">
        <Button variant="success">
        <a href="https://home-chefs-nine.vercel.app/" target="_blank" rel="noopener noreferrer"
       style={{ textDecoration: "none", color: "white" }}>
          View
        </a>
</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" style={{height:"160px"}} src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d9c68865007279.5ae5a4dae852b.gif" />
      <Card.Body>
        <Card.Title>Project Fair</Card.Title>
        <Card.Text>
        ProjectFair is a MERN stack web app for showcasing and discovering development projects,
         featuring user authentication, project uploads, and a dynamic portfolio display.
        </Card.Text>
        <div className="d-flex justify-content-center mt-5">
        <Button variant="success">
        <a href="https://project-fair-client-rho.vercel.app/" target="_blank" rel="noopener noreferrer"
       style={{ textDecoration: "none", color: "white" }}>
          View
        </a>
</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" style={{height:"160px"}} src="https://i.pinimg.com/originals/79/35/fd/7935fdf1fe2c5dd8205de03a214befb0.gif" />
      <Card.Body>
        <Card.Title>Weather App</Card.Title>
        <Card.Text>
        Weather App is a React-based application that provides real-time weather updates using
         API integration, displaying temperature, humidity, and forecasts for any location.
        </Card.Text>
        <div className="d-flex justify-content-center mt-5">
        <Button variant="success">
        <a href="https://sabique2003.github.io/Weather/" target="_blank" rel="noopener noreferrer"
       style={{ textDecoration: "none", color: "white" }}>
          View
        </a>
</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
    
    </>
  )
}

export default Works