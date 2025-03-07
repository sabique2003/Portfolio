import React from 'react'
import a1 from '../assets/a1.png'

function AboutUs() {
  return (
    <>
    <div className="container-fluid p-3">
    <h2 className="text-center">About Me</h2>
    <div className='text-center p-3 m-3'>
    <p>"Hyy Iam Muhammed Sabique K,a passionate and detail-oriented web developer with a strong foundation
             in the MERN/MEAN stack. After completing Bachelor of Computer Apllication from GEMS ARTS AND SCIENCE COLLEGE,RAMAPURAM in 2024,
              I pursued intensive training at Luminar Technolab, 
             Calicut, from May to December 2024, where I honed my skills in full-stack development.
              Throughout my journey, I have worked on various projects, including HomeChefs, Project Fair and Weather App also small projects
               which have helped me gain hands-on experience in user authentication, profile management, API integrations, and database handling.
                I am eager to leverage my expertise to build scalable and efficient web applications..</p>
    <img  className="my-3" src={a1} alt="" style={{width:"85vw", height:"90vh"}}/>
    </div>
    </div>
    </>
  )
}

export default AboutUs