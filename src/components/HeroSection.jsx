import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Premium Shopping Experience",
            subtitle: "Discover quality products with style",
            description: "Curated collection of the finest products with exceptional quality and unmatched service",
            cta: "Shop Now"
        },
        {
            id: 2,
            title: "Latest Technology",
            subtitle: "Innovation at your fingertips",
            description: "Explore cutting-edge gadgets and innovative solutions that transform your daily life",
            cta: "Explore Tech"
        },
        {
            id: 3,
            title: "Exclusive Deals",
            subtitle: "Special offers just for you",
            description: "Limited time offers on premium products with up to 50% off selected items",
            cta: "View Deals"
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
        <section className="relative h-[70vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 dark:from-blue-900/30 dark:to-purple-900/30"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                className="mb-6"
                            >
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {slides[currentSlide].title}
                                </h1>
                                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
                                    {slides[currentSlide].subtitle}
                                </h2>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
                            >
                                {slides[currentSlide].description}
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4"
                            >
                                <Link
                                    to="/products"
                                    className="group inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
                                >
                                    {slides[currentSlide].cta}
                                    <FiArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-8 py-4 rounded-xl text-base transition-all duration-300"
                                >
                                    Learn More
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Buttons */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-gray-700 dark:text-gray-300 p-3 rounded-full transition-all duration-300 border border-white/20"
            >
                <FiChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 text-gray-700 dark:text-gray-300 p-3 rounded-full transition-all duration-300 border border-white/20"
            >
                <FiChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                            ? 'bg-blue-600 scale-125 shadow-lg'
                            : 'bg-gray-400 dark:bg-gray-500 hover:bg-blue-400 dark:hover:bg-blue-400'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
