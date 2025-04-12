import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image';
import { BsWhatsapp, BsTelephoneFill } from 'react-icons/bs';
import { FaGasPump } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal, MdSpeed } from 'react-icons/md';
import Head from 'next/head';
import Link from 'next/link'
const Ourcars = () => {
  const carsList = [
    {
      name: "Mini Cooper",
      image: "/images/mini-cooper.png", 
      description: "Luxury and style redefined",
      price: 20000,
      features: ["Automatic", "Premium Interior", "Sunroof"],

    },
    {
      name: "Fortuner (Automatic)",
      image: "/images/fortuner.png",
      description: "Premium SUV experience", 
      price: 8000,
      features: ["7 Seater", "4x4 Available", "Premium Interior"],

    },
    {
      name: "Endeavour (Automatic)", 
      image: "/images/endeavour.png",
      description: "Luxury SUV for ultimate comfort",
      price: 7000,
      features: ["7 Seater", "Premium Interior", "Panoramic Sunroof"],

    },
    {
      name: "Thar (Automatic)",
      image: "/images/thar.png",
      description: "Adventure ready off-roader",
      price: 4000,
      features: ["4x4", "Convertible", "Adventure Ready"],

    },
    {
      name: "Thar Hardtop (Automatic)",
      image: "/images/thar-hardtop.png",
      description: "Covered comfort with off-road capability",
      price: 4000,
      features: ["4x4", "Hardtop", "Adventure Ready"],

    },
    {
      name: "Ertiga (Automatic)",
      image: "/images/ertiga.png",
      description: "Spacious family MPV",
      price: 2500,
      features: ["7 Seater", "Spacious", "Family Friendly"],

    },
    {
      name: "Ertiga (Manual)",
      image: "/images/ertiga.png",
      description: "Spacious family MPV",
      price: 2200,
      features: ["7 Seater", "Spacious", "Family Friendly"],
  
    },
   
    {
      name: "i20 (Manual)",
      image: "/images/i20.png",
      description: "Premium hatchback",
      price: 1400,
      features: ["Spacious", "Fuel Efficient", "Premium Interior"],

    },
    {
      name: "i10 (Automatic)",
      image: "/images/i10.png",
      description: "Compact and efficient",
      price: 1500,
      features: ["City Friendly", "Fuel Efficient", "Easy to Drive"],
   
    },
    {
      name: "i10 (Manual)",
      image: "/images/i10.png",
      description: "Compact and efficient",
      price: 1200,
      features: ["City Friendly", "Fuel Efficient", "Easy to Drive"],

    },
    {
      name: "Baleno (Automatic)",
      image: "/images/baleno.png",
      description: "Comfortable premium hatchback",
      price: 1600,
      features: ["Spacious", "Premium Interior", "Automatic"],
 
    },
    {
      name: "Baleno (Manual)",
      image: "/images/baleno.png",
      description: "Comfortable premium hatchback",
      price: 1300,
      features: ["Spacious", "Premium Interior", "Fuel Efficient"],

    },
    {
      name: "Swift (Automatic)",
      image: "/images/swift.png",
      description: "Sporty and efficient hatchback",
      price: 1600,
      features: ["Sporty", "Fuel Efficient", "Automatic"],
     
    },
    {
      name: "Swift (Manual)",
      image: "/images/swift.png",
      description: "Sporty and efficient hatchback",
      price: 1300,
      features: ["Sporty", "Fuel Efficient", "Easy to Drive"],
     
    },
  ];

  return (
    <>
      <Head>
        <title>Our Premium Fleet | Luxury Car Rentals in Goa</title>
        <meta name="description" content="Explore our diverse range of premium vehicles for rent in Goa. From luxury SUVs to compact city cars, find the perfect ride for your journey." />
      </Head>
      
      <Navbar/>
      <div 
        className="bg-cover min-h-[300px] lg:min-h-[550px] mt-10 lg:mt-0 flex items-center bg-center object-cover justify-center bg-black flex-col relative w-full" 
        style={{backgroundImage: "url('/images/contactbanner.png')", objectFit: "cover"}}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-filter backdrop-blur-[2px]"></div>
        <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10 relative z-10 px-4 animate-fadeIn">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white mx-auto font-bold tracking-wider text-center drop-shadow-lg">
            Our <span className="text-yellow-400">Premium</span> Fleet
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white text-center mt-4 max-w-2xl font-light">
            Experience luxury and comfort with our diverse range of vehicles
          </p>
          <nav aria-label="breadcrumb" className="bg-gray-200/20 backdrop-blur-md rounded-full px-6 sm:px-8 md:px-10 mt-8 py-3 sm:py-4 border border-white/10">
            <ol className="flex text-center justify-center items-center">
              <li>
                <a className="text-xs sm:text-sm md:text-base text-white hover:text-yellow-400 transition-colors" href="/" aria-label="Home">Home</a>
              </li>
              <li>
                <span className="mx-2 sm:mx-3 text-white">/</span>
              </li>
              <li>
                <span className="text-yellow-400 font-semibold text-xs sm:text-sm md:text-base" aria-current="page">Our Cars</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {carsList.map((car, index) => (
              <div key={index} className="overflow-hidden  border border-yellow-600 ">
                <div className="relative h-56 sm:h-60 md:h-48 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    ₹{car.price}/day
                  </div>
                 
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 mb-4">{car.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm flex items-center">
                        {idx === 0 && <MdAirlineSeatReclineNormal className="mr-1 text-yellow-500" />}
                        {idx === 1 && <FaGasPump className="mr-1 text-yellow-500" />}
                        {idx === 2 && <MdSpeed className="mr-1 text-yellow-500" />}
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <Link 
                        href="tel:+919876543210" 
                        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-300/30 transform hover:-translate-y-1"
                        title="Call us"
                        aria-label="Call to book this car"
                      >
                        <BsTelephoneFill size={18} />
                      </Link>
                      <Link 
                        href="https://wa.me/919876543210" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-300/30 transform hover:-translate-y-1"
                        title="WhatsApp us"
                        aria-label="WhatsApp to book this car"
                      >
                        <BsWhatsapp size={18} />
                      </Link>
                    </div>
                    <button 
                      className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 transition-all duration-300 font-semibold shadow-xl hover:shadow-yellow-300/30 transform hover:-translate-y-1 flex items-center"
                      aria-label="Book this car now"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Ourcars;
