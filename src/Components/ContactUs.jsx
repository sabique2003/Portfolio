import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ContactUs() {
  return (
    <>
  <div className="d-flex flex-column align-items-center justify-content-center container-fluid p-3" style={{ height: "100vh" }}>
    {/* Center the title */}
    <h2 className="mb-4">Contact Me</h2>

    {/* Center the small box below the title */}
    <div className="w-75 border border-2 border-shadow-3 p-4 bg-light">
    <FloatingLabel
        controlId="floatingInput"
        label="Your Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Jhon" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Email"
        className="mb-3"
      >
        <Form.Control type="mail" placeholder="Project" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput"
        label="Subject"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Project" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Message"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Project"   style={{ height: '150px' }} />
      </FloatingLabel>
      <div className="d-flex justify-content-center">
      <button className='btn btn-success text-center'>Submit</button>
      </div>
    </div>
  </div>
</>

  )
}

export default ContactUs