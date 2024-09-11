import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Works() {
  return (
    <>
    <div className='d-flex justify-content-around m-3 p-3 mt-5 container-fluid' style={{ height: "70vh" }}>
        <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" style={{height:"160px"}} src="https://cdn.dribbble.com/users/410036/screenshots/2128761/concept2.gif" />
      <Card.Body>
        <Card.Title>E-commerce App</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-center">
        <Button variant="success">View</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" style={{height:"160px"}} src="https://cdn.dribbble.com/users/293101/screenshots/4804121/seo_icons.gif" />
      <Card.Body>
        <Card.Title>Task Manager</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-center">
        <Button variant="success">View</Button>
        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" style={{height:"160px"}} src="https://i.gifer.com/CM9n.gif" />
      <Card.Body>
        <Card.Title>Real-time Chat App</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-center">
        <Button variant="success">View</Button>
        </div>
      </Card.Body>
    </Card>
    </div>
    
    </>
  )
}

export default Works