import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Premium Quality Products",
            subtitle: "Discover our curated collection of high-quality items",
            description: "Shop from thousands of products with guaranteed quality and fast delivery",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            cta: "Shop Now"
        },
        {
            id: 2,
            title: "Latest Technology",
            subtitle: "Stay ahead with cutting-edge gadgets",
            description: "Explore the newest technology products and innovative solutions",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
            cta: "Explore"
        },
        {
            id: 3,
            title: "Special Offers",
            subtitle: "Don't miss our exclusive deals",
            description: "Get up to 50% off on selected items for a limited time",
            image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
            cta: "View Offers"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative h-screen overflow-hidden">
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                            <div className="relative z-10 flex items-center justify-center h-full">
                                <div className="text-center text-white max-w-4xl mx-auto px-4">
                                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                        {slide.title}
                                    </h1>
                                    <h2 className="text-2xl md:text-3xl font-light mb-6">
                                        {slide.subtitle}
                                    </h2>
                                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                                        {slide.description}
                                    </p>
                                    <Link
                                        to="/products"
                                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        {slide.cta}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            >
                <FiChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
            >
                <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
