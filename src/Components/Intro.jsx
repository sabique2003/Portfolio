import React from 'react';
import pngwing from '../Images/pngwing.png';
import Button from 'react-bootstrap/Button';
import Works from './Works';

function Intro() {
  return (
    <>
      <div className='d-flex justify-content-between m-3 p-3 mt-5 container-fluid' style={{ height: "60vh" }}>
        <div className='w-50 mt-5'>
          <h4 className='text-center mb-2'>Hyy, I am Sabique</h4>
          <h2 className='text-center mt-2'>MEARN STACK Developer</h2>
          <p className='text-justify ms-3 text-center' style={{ lineHeight: '1.6', maxWidth: '90%' }}>
            "I’m a developer focused on creating responsive and user-friendly web applications. Using modern tools like React and Bootstrap, I bring ideas to life with clean code and a strong emphasis on user experience."
          </p>
          <div className='text-center'>
              <Button variant="success" href={<Works/>} className='m-2'>Projects</Button>
            <Button variant="outline-success" className='m-2'>Contact</Button>
          </div>
        </div>
        <div className='w-50'>
          <img
            src={pngwing}
            alt="Developer illustration"
            style={{ width: '100%', maxWidth: '700px', height: 'auto' }}
          />
        </div>
      </div>
    </>
  );
}

export default Intro