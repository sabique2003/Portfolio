import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function ContactUs() {
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center container-fluid p-3" style={{ minHeight: "100vh" }}>
        <h2 className="mb-4 text-center">Contact Me</h2>

        <div className="w-100 w-md-75 w-lg-50 border border-2 shadow p-4 bg-light rounded">
          <FloatingLabel controlId="floatingName" label="Your Name" className="mb-3">
            <Form.Control type="text" placeholder="John Doe" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
            <Form.Control type="email" placeholder="email@example.com" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingSubject" label="Subject" className="mb-3">
            <Form.Control type="text" placeholder="Project Inquiry" />
          </FloatingLabel>

          <FloatingLabel controlId="floatingMessage" label="Message" className="mb-3">
            <Form.Control as="textarea" placeholder="Your message here..." style={{ height: '150px' }} />
          </FloatingLabel>

          <div className="d-flex justify-content-center">
            <button className='btn btn-success w-100 w-md-auto'>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
