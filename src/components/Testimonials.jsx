import React, { useState } from 'react';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Verified Customer',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            rating: 5,
            comment: 'Amazing products and exceptional customer service! My order arrived quickly and was exactly as described. Highly recommended!'
        },
        {
            id: 2,
            name: 'Mike Chen',
            role: 'Regular Customer',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            rating: 5,
            comment: 'Been shopping here for over a year now. The quality is consistently great and the prices are unbeatable. Love the fast shipping!'
        },
        {
            id: 3,
            name: 'Emily Davis',
            role: 'Happy Customer',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            rating: 5,
            comment: 'The return process was so easy when I needed to exchange an item. Customer support was incredibly helpful and friendly.'
        },
        {
            id: 4,
            name: 'David Wilson',
            role: 'Tech Enthusiast',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            rating: 5,
            comment: 'Great selection of tech products! Found exactly what I was looking for at a competitive price. Will definitely shop here again.'
        }
    ];

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentReview = testimonials[currentTestimonial];

    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        What Our Customers Say
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 relative">
                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
                        >
                            <FiChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
                        >
                            <FiChevronRight className="w-6 h-6" />
                        </button>

                        <div className="text-center">
                            {/* Customer Image */}
                            <img
                                src={currentReview.image}
                                alt={currentReview.name}
                                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100 dark:border-blue-900"
                            />

                            {/* Rating */}
                            <div className="flex justify-center mb-6">
                                {[...Array(currentReview.rating)].map((_, index) => (
                                    <FiStar key={index} className="w-6 h-6 text-yellow-400 fill-current" />
                                ))}
                            </div>

                            {/* Comment */}
                            <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic">
                                "{currentReview.comment}"
                            </blockquote>

                            {/* Customer Info */}
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {currentReview.name}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {currentReview.role}
                                </p>
                            </div>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentTestimonial(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                            ? 'bg-blue-600 scale-125'
                                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
