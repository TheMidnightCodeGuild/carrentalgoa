import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Cars from "./components/Cars";
import About from "./components/About";
import Choose from "./components/Choose";
import Loader from "./components/Loader";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Best Car Rental in Goa | Most Affordable Car Hire Services Goa</title>
        <meta
          name="description"
          content="Best car rental service in Goa offering luxury & budget cars. Top-rated car hire in North & South Goa. Book self-drive cars & chauffeur services at lowest prices."
        />
        <meta
          name="keywords"
          content="best car rental goa, cheap car rental goa, car hire goa, goa car rental service, car rental north goa, car rental south goa, luxury car rental goa, budget car rental goa, self drive car rental goa, car lease goa, airport car rental goa, monthly car rental goa, car rental packages goa"
        />
        <meta
          property="og:title"
          content="Best Car Rental in Goa | Top-Rated Vehicle Hire Services"
        />
        <meta
          property="og:description"
          content="Leading car rental service in Goa offering wide range of vehicles. Best prices guaranteed for self-drive cars and chauffeur services across Goa."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bestcarrentalgoa.com" />
        <link rel="canonical" href="https://www.bestcarrentalgoa.com" />
      </Head>
      <Loader />
      <Navbar />
      <Landing />
      <About />
      <Cars />
      <Choose />
      <Footer />
    </div>
  );
};

export default Index;
