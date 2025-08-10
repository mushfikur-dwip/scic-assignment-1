import React from 'react';
import { FiPercent, FiClock, FiGift } from 'react-icons/fi';

const SalesPromotion = () => {
    return (
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        Special Offers
                    </h2>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Don't miss out on these incredible deals and limited-time offers
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Flash Sale */}
                    <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                        <FiClock className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                        <h3 className="text-2xl font-bold mb-4">Flash Sale</h3>
                        <p className="text-blue-100 mb-6">
                            Up to 50% off on selected items. Limited time offer!
                        </p>
                        <div className="bg-red-500 text-white px-4 py-2 rounded-full inline-block font-semibold">
                            Ends in 2 days
                        </div>
                    </div>

                    {/* Mega Discount */}
                    <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                        <FiPercent className="w-16 h-16 mx-auto mb-4 text-green-300" />
                        <h3 className="text-2xl font-bold mb-4">Mega Discount</h3>
                        <p className="text-blue-100 mb-6">
                            Buy 2 get 1 free on all electronics. No code needed!
                        </p>
                        <div className="bg-green-500 text-white px-4 py-2 rounded-full inline-block font-semibold">
                            Valid until stock lasts
                        </div>
                    </div>

                    {/* Free Shipping */}
                    <div className="bg-white bg-opacity-10 rounded-lg p-8 text-center backdrop-blur-sm hover:bg-opacity-20 transition-all duration-300">
                        <FiGift className="w-16 h-16 mx-auto mb-4 text-purple-300" />
                        <h3 className="text-2xl font-bold mb-4">Free Shipping</h3>
                        <p className="text-blue-100 mb-6">
                            Free shipping on orders over $99. No hidden charges!
                        </p>
                        <div className="bg-purple-500 text-white px-4 py-2 rounded-full inline-block font-semibold">
                            Always available
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-lg">
                        View All Offers
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SalesPromotion;
