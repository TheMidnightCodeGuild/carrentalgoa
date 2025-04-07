import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image';

const Aboutus = () => {
  return (
    <>
      <Navbar/>
      <div 
        className="bg-cover h-[300px] lg:h-[550px] mt-10 lg:mt-0 flex items-center bg-center object-cover justify-center bg-black flex-col relative" 
        style={{backgroundImage: "url('/images/contactbanner.png')", objectFit: "cover"}}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10">
          <h3 className="text-2xl sm:text-3xl lg:text-5xl text-white relative z-0 mx-auto font-bold font-lora tracking-wider text-center px-4">
            About Us
          </h3>
          <nav className="bg-gray-200/20 rounded-full px-4 sm:px-6 mt-4 z-0 py-2">
            <ol className="flex text-center justify-center">
              <li>
                <a className="text-white text-sm sm:text-base" href="/">Home</a>
              </li>
              <li>
                <span className="mx-2 text-white font-semibold">&gt;</span>
              </li>
              <li>
                <span className="text-white font-semibold text-sm sm:text-base">About Us</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/about-us.jpg"
                alt="About Our Car Rental Service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Trusted Car Rental Partner in Goa</h2>
              <p className="text-gray-600 mb-4">
                Welcome to Goa's premier car rental service. Since our establishment, we have been committed to providing exceptional car rental experiences to both tourists and locals alike.
              </p>
              <p className="text-gray-600 mb-4">
                Our fleet consists of well-maintained vehicles ranging from economical cars to luxury vehicles, ensuring we have the perfect option for every need and budget.
              </p>
              <p className="text-gray-600">
                With our customer-first approach, competitive rates, and 24/7 support, we make sure your journey in Goa is comfortable, safe, and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Aboutus;
