// client/src/components/home/HeroBanner.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: '/images/banner1.jpg',
    title: 'New Collection',
    description: 'Discover our latest arrivals',
    buttonText: 'Shop Now',
    buttonLink: '/products/new-arrivals'
  },
  {
    id: 2,
    image: '/images/banner2.jpg',
    title: 'Summer Sale',
    description: 'Up to 50% off on selected items',
    buttonText: 'View Offers',
    buttonLink: '/products/sale'
  }
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative h-96 md:h-screen-70 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-2">{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-6">{slide.description}</p>
              <Link
                to={slide.buttonLink}
                className="inline-block px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-100 transition"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;