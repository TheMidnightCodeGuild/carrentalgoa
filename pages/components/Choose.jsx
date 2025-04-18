import React from "react";
import Image from "next/image";

const Choose = () => {
  return (
    <div className="bg-yellow-50 border-2 py-8 sm:py-16 rounded-2xl sm:rounded-full m-2 sm:m-10">
      <div className="lg:max-w-[1200px] mx-auto px-4 mb-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose <span className="text-yellow-500">Us?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Experience the best car rental service in Goa with our premium fleet and exceptional customer service.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <div className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/quality.png"
                alt="Quality Fleet"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Quality Fleet
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Well-maintained vehicles that undergo regular inspections to ensure your safety and comfort.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <div className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/support.png"
                alt="24/7 Support"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              24/7 Support
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Round-the-clock customer service to assist you with any queries or roadside assistance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <div className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/price.png"
                alt="Competitive Pricing"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Competitive Pricing
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Best rates in Goa with transparent pricing and no hidden charges.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <div className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/flexible.png"
                alt="Flexible Rentals"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Flexible Rentals
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Choose from hourly, daily, or weekly rentals with easy pickup and drop-off options.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <div className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/insurance.png"
                alt="Full Insurance"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Full Insurance
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Comprehensive insurance coverage for peace of mind during your journey.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-yellow-500">
            <div className="w-10 h-10 sm:w-16 sm:h-12 relative mb-3 sm:mb-4">
              <Image
                src="/images/location.png"
                alt="Multiple Locations"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Multiple Locations
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Convenient pickup and drop-off points across major locations in Goa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
