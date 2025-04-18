import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Landing = () => {
  return (
    <div className="h-screen">
      {/* Hero Section */}
      <div className="relative h-screen border-4 border-white">
        <div className="absolute inset-0 blur-[2px]">
          <Image
            src="/images/landingbg.png"
            alt="Goa Beach Road"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative px-4 sm:px-6 lg:px-0 lg:max-w-[1300px] mx-4 sm:mx-8 lg:mx-16 h-full flex items-end sm:items-center pb-28 sm:pb-0 mt-16 sm:mt-20">
          <div className="text-white w-full max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold mb-3 sm:mb-4 text-left">
              <span className="text-yellow-400">Explore Goa Your Way</span>
            </h1>
            <p className="text-[10px] sm:text-sm md:text-base mb-4 sm:mb-6 md:mb-8 max-w-xl font-semibold text-left">
              Experience the freedom of exploring Goa&apos;s beautiful beaches and hidden gems with our premium car rental service.
            </p>
            <div className="flex justify-start">
              <Link 
                href="/components/Our-cars" 
                className="bg-yellow-500 text-black px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 text-xs sm:text-sm md:text-base"
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
