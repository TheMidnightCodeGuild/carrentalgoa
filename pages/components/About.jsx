import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="bg-white   border-4 border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          
          {/* Content Section */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Car Rental Partner in Goa
            </h1>
            <div className="space-y-4 text-gray-600">
              <p>
                Welcome to Car Rental Services, your premier destination for hassle-free car rentals in Goa. With years of experience in the industry, we pride ourselves on providing reliable, comfortable, and affordable transportation solutions.
              </p>
              <p>
                Our fleet consists of well-maintained vehicles that undergo regular safety inspections. From compact cars for solo travelers to spacious SUVs for families, we have the perfect vehicle for every need.
              </p>
          
            </div>
            <button className="mt-8 bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
              Contact Us
            </button>
          </div>

          {/* Image Section */}
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <Image
              src="/images/about.png"
              alt="Car Rental Service"
              width={800}
              height={500}
              quality={100}
              priority
              className=" rounded-xl object-cover "
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
