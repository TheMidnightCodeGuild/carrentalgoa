import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-yellow-50 border-t border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <Image
                src="/images/logo.png" 
                alt="Company Logo"
                width={130}
                height={45}
                className="mb-4"
              />
            </Link>
            <p className="text-gray-600 text-sm">
              Your premier destination for car rentals. We offer a wide selection of vehicles
              to meet your transportation needs with competitive rates and exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/components/Contact-us" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/components/Contact-us" className="text-gray-600 hover:text-yellow-600 text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-yellow-900 font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Email: rentals@carservice.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: Indore, Madhya Pradesh, India</li>
              <li>Hours: Open 24/7</li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-yellow-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Car Rental Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
