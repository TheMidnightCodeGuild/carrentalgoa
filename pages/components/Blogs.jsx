import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";
import Head from "next/head";

const Blogs = () => {
  const blogPosts = [
    {
      title: "Best Scenic Drives in Goa",
      heading: "Coastal Road Trips",
      excerpt:
        "Discover the most beautiful coastal and mountain roads to explore Goa by car...",
      image: "/images/blog1.jpg",
      date: "Oct 15, 2023",
    },
    {
      title: "Car Rental Tips for First-Time Visitors",
      heading: "Goa Travel Guide",
      excerpt:
        "Essential advice for tourists renting a car in Goa for the first time...",
      image: "/images/blog2.jpg",
      date: "Oct 10, 2023",
    },
    {
      title: "Luxury vs. Economy: Choosing the Right Rental",
      heading: "Vehicle Selection Guide",
      excerpt:
        "How to decide between premium and budget car options for your Goa adventure...",
      image: "/images/blog3.webp",
      date: "Oct 5, 2023",
    },
    {
      title: "Hidden Beaches Accessible by Car",
      heading: "Off-Road Adventures",
      excerpt:
        "Explore Goa's secret beaches and coves that are best reached with your rental car...",
      image: "/images/blog4.jpg",
      date: "Oct 1, 2023",
    },
    {
      title: "Monsoon Driving Safety in Goa",
      heading: "Seasonal Travel Tips",
      excerpt:
        "Important safety considerations when driving rental cars during Goa's rainy season...",
      image: "/images/blog5.jpg",
      date: "Sep 28, 2023",
    },
    {
      title: "Weekend Road Trips from Goa",
      heading: "Regional Exploration",
      excerpt:
        "The best destinations within driving distance for weekend getaways from Goa...",
      image: "/images/blog6.jpg",
      date: "Sep 20, 2023",
    }
  ];

  return (
    <>
      <Head>
        <title>Car Rental Blogs & Travel Tips | Goa Car Rentals</title>
        <meta
          name="description"
          content="Explore our travel blogs with tips on car rentals in Goa, scenic drives, hidden beaches, and seasonal driving advice for your perfect Goa adventure."
        />
      </Head>
      
      <Navbar />

      {/* Hero Banner */}
      <div
        className="bg-cover min-h-[300px] lg:min-h-[550px] mt-10 lg:mt-0 flex items-center bg-center object-cover justify-center bg-black flex-col relative w-full"
        style={{
          backgroundImage: "url('/images/landingbg.png')",
          objectFit: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-filter backdrop-blur-[2px]"></div>
        <div className="lg:mt-10 flex items-center justify-center flex-col w-full mt-10 relative z-10 px-4 animate-fadeIn">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white mx-auto font-bold tracking-wider text-center drop-shadow-lg">
            Travel <span className="text-yellow-400">Insights</span> & Tips
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white text-center mt-4 max-w-2xl font-light">
            Stay informed with our latest articles about car rentals, scenic drives, and making the most of your Goa adventure
          </p>
          <nav
            aria-label="breadcrumb"
            className="bg-gray-200/20 backdrop-blur-md rounded-full px-6 sm:px-8 md:px-10 mt-8 py-3 sm:py-4 border border-white/10"
          >
            <ol className="flex text-center justify-center items-center">
              <li>
                <a
                  className="text-xs sm:text-sm md:text-base text-white hover:text-yellow-400 transition-colors"
                  href="/"
                  aria-label="Home"
                >
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2 sm:mx-3 text-white">/</span>
              </li>
              <li>
                <span
                  className="text-yellow-400 font-semibold text-xs sm:text-sm md:text-base"
                  aria-current="page"
                >
                  Blogs
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {post.heading}
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/components/Blogs/Blog${index + 1}`}
                    className="text-yellow-500 font-semibold hover:text-yellow-600 transition-colors duration-300"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
