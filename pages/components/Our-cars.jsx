import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image';

const Ourcars = () => {
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
            Our Cars
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
                <span className="text-white font-semibold text-sm sm:text-base">Our Cars</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet of Cars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our wide selection of well-maintained vehicles to suit your needs and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/swift.png"
                  alt="Economy Car"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Economy Car</h3>
                <p className="text-gray-600 mb-4">Perfect for city driving and small groups</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">₹1500/day</span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/swift.png"
                  alt="Economy Car"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Economy Car</h3>
                <p className="text-gray-600 mb-4">Perfect for city driving and small groups</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">₹1500/day</span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/swift.png"
                  alt="Economy Car"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Economy Car</h3>
                <p className="text-gray-600 mb-4">Perfect for city driving and small groups</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">₹1500/day</span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/swift.png"
                  alt="Economy Car"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Economy Car</h3>
                <p className="text-gray-600 mb-4">Perfect for city driving and small groups</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">₹1500/day</span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>


            {/* Car Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/wagonr.png"
                  alt="SUV"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">SUV</h3>
                <p className="text-gray-600 mb-4">Spacious and comfortable for family trips</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">₹2500/day</span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Car Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/i10.png"
                  alt="Luxury Sedan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Luxury Sedan</h3>
                <p className="text-gray-600 mb-4">Premium comfort and style</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">₹3500/day</span>
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default Ourcars;
