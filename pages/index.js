import React from 'react'
import Head from 'next/head'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import Cars from './components/Cars'
import About from './components/About'
import Choose from './components/Choose'
import Loader from './components/Loader'

const Index = () => {
  return (
    <div>
      <Head>
        <title>Goa Car Rentals | Premium Car Rental Services in Goa</title>
        <meta name="description" content="Explore Goa with our premium car rental services. Wide selection of vehicles with competitive rates and exceptional service for your perfect Goa adventure." />
        <meta name="keywords" content="car rental, Goa, vehicle hire, premium cars, self-drive, chauffeur service, beach travel, Goa tourism" />
        <meta property="og:title" content="Goa Car Rentals | Premium Car Rental Services" />
        <meta property="og:description" content="Your premier destination for car rentals in Goa. Explore beaches and hidden gems with our reliable vehicles and exceptional service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goacarrentals.com" />
        <link rel="canonical" href="https://www.goacarrentals.com" />
      </Head>
      <Loader/>
      <Navbar />

      <Landing />
      <About />
      <Cars />
      <Choose />
      <Footer />
    </div>
  )
}

export default Index
