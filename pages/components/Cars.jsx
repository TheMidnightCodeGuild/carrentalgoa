import React from 'react';
import Image from 'next/image';


const Cars = () => {
  const carData = [
    {
      name: "Wagon R Manual",
      price: "₹1500",
      image: "/images/wagonr.png",
      features: ["5 Seater", "AC", "Manual"]
    },
    {
      name: "i10 Manual", 
      price: "₹1500",
      image: "/images/i10.png",
      features: ["5 Seater", "AC", "Manual"]
    },
    {
      name: "Swift Manual",
      price: "₹1500", 
      image: "/images/swift.png",
      features: ["5 Seater", "AC", "Manual"]
    }
  ];

  return (
    <>

      <div className="bg-gray-50">
        <div className="lg:max-w-[1300px] mx-auto px-4 py-20">
          <div className="text-left mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Fleet</h2>
            <p className="text-gray-600 max-w-2xl mx-left">
              Choose from our selection of well-maintained vehicles perfect for your Goa adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {carData.map((car, index) => (
              <div key={index} className="bg-white rounded-xl verflow-hidden border-2 border-gray-300">
                <div className="relative h-56 bg-gray-100">
                  <Image
                    src={car.image}
                    alt={car.name}
                    layout="fill"
                    objectFit="contain"
                    className="p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <div className="flex gap-2 mb-4">
                    {car.features.map((feature, i) => (
                      <span key={i} className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg mb-6">Starting from <span className="font-bold text-gray-900">{car.price}</span>/day</p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                      Book Now
                    </button>
                    <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-400 transition duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <button className="bg-yellow-500 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition duration-300 shadow-lg hover:shadow-xl">
              View All Cars
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Cars;
