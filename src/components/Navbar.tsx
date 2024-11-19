import React from 'react';
import { Menu, X, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-orange-50 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">रुत्विक्</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#services" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#muhurtam" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Muhurtam</a>
                <a href="#poojas" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Poojas</a>
                <a href="#samagri" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Samagri</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-orange-600">
              <ShoppingBag className="h-5 w-5 mr-1" />
              <span>Cart</span>
            </button>
            <button className="flex items-center text-gray-700 hover:text-orange-600">
              <User className="h-5 w-5 mr-1" />
              <span>Login</span>
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-orange-50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#muhurtam" className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">Muhurtam</a>
            <a href="#poojas" className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">Poojas</a>
            <a href="#samagri" className="block text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-base font-medium">Samagri</a>
          </div>
        </div>
      )}
    </nav>
  );
}