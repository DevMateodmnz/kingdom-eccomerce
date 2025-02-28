// client/src/components/layout/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">
              <img src="/images/logo.png" alt="Your Store" className="h-12" />
            </Link>
          </div>
          
          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-800 hover:text-black font-medium">Home</Link>
            <Link to="/products" className="text-gray-800 hover:text-black font-medium">Shop</Link>
            <Link to="/collections" className="text-gray-800 hover:text-black font-medium">Collections</Link>
            <Link to="/about" className="text-gray-800 hover:text-black font-medium">About</Link>
            <Link to="/contact" className="text-gray-800 hover:text-black font-medium">Contact</Link>
          </nav>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="py-1 px-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 hidden md:block"
              />
              <FaSearch className="text-gray-600 cursor-pointer md:absolute md:right-3 md:top-2" />
            </div>
            
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-xl text-gray-800" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
            
            <Link to="/login">
              <FaUser className="text-xl text-gray-800" />
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pb-4 md:hidden">
            <Link to="/" className="block py-2 text-gray-800 hover:text-black font-medium">Home</Link>
            <Link to="/products" className="block py-2 text-gray-800 hover:text-black font-medium">Shop</Link>
            <Link to="/collections" className="block py-2 text-gray-800 hover:text-black font-medium">Collections</Link>
            <Link to="/about" className="block py-2 text-gray-800 hover:text-black font-medium">About</Link>
            <Link to="/contact" className="block py-2 text-gray-800 hover:text-black font-medium">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;