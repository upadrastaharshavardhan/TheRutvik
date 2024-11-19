import React from 'react';
import { Calendar, Users, ShoppingBag } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-orange-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Connect with Trusted</span>
            <span className="block text-orange-600">Rutviks & Services</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Book consultations, poojas, and order samagri from verified Rutviks in your city. Experience seamless spiritual services at your convenience.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10">
                Get Started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a href="#about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Learn More
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-orange-500" />
              <h3 className="ml-3 text-xl font-medium text-gray-900">Muhurtam Consultation</h3>
            </div>
            <p className="mt-4 text-gray-500">Get expert guidance for auspicious timing of your important events</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-orange-500" />
              <h3 className="ml-3 text-xl font-medium text-gray-900">Book Rutviks</h3>
            </div>
            <p className="mt-4 text-gray-500">Connect with experienced Rutviks for various poojas and ceremonies</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <div className="flex items-center">
              <ShoppingBag className="h-8 w-8 text-orange-500" />
              <h3 className="ml-3 text-xl font-medium text-gray-900">Pooja Samagri</h3>
            </div>
            <p className="mt-4 text-gray-500">Order all necessary pooja items with doorstep delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
}