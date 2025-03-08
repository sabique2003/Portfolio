import './App.css'
import Header from './Components/Header'
import Intro from './Components/Intro'
import Works from './Components/Works'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Intro/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
