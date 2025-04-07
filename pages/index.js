import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Cars from './components/Cars'
import About from './components/About'
import Choose from './components/Choose'
const index = () => {
  return (
    <div>
      <Navbar />
      <Landing/>
      <About/>
      <Cars/>
     <Choose/>
      <Footer/>
    </div>
  )
}

export default index
