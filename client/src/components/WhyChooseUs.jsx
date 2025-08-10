import React from 'react';
import { FiTruck, FiShield, FiRefreshCw, FiHeadphones } from 'react-icons/fi';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: FiTruck,
            title: 'Fast Delivery',
            description: 'Get your orders delivered within 24-48 hours with our express shipping service.'
        },
        {
            id: 2,
            icon: FiShield,
            title: 'Secure Payment',
            description: 'Your payment information is protected with industry-standard encryption technology.'
        },
        {
            id: 3,
            icon: FiRefreshCw,
            title: 'Easy Returns',
            description: 'Not satisfied? Return your items within 30 days for a full refund, no questions asked.'
        },
        {
            id: 4,
            icon: FiHeadphones,
            title: '24/7 Support',
            description: 'Our customer support team is available round the clock to assist you with any queries.'
        }
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We're committed to providing you with the best shopping experience possible
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map(feature => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={feature.id}
                                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                            >
                                <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <IconComponent className="w-10 h-10 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
