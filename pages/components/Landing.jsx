import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
  return (
    <div className="h-screen">
      {/* Hero Section */}
      <div className="relative h-screen border-4 border-white">
        <div className="absolute inset-0">
          <Image
            src="/images/landingbg.png"
            alt="Goa Beach Road"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-full flex items-center">
          <div className="text-white w-full max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Explore Goa Your Way
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl">
              Experience the freedom of exploring Goa's beautiful beaches and hidden gems with our premium car rental service.
            </p>
            <div className="flex justify-center sm:justify-start">
              <Link 
                href="/components/Contact-us" 
                className="bg-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 text-sm sm:text-base"
              >
                View Our Cars
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
