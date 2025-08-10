import React, { useState } from 'react';
import { FiMail, FiSend } from 'react-icons/fi';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setMessage('Thank you for subscribing to our newsletter!');
            setEmail('');
        } catch {
            setMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setMessage(''), 5000);
        }
    };

    return (
        <section className="py-16 bg-blue-600 dark:bg-blue-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-white">
                    <div className="max-w-3xl mx-auto">
                        <FiMail className="w-16 h-16 mx-auto mb-6 text-blue-200" />

                        <h2 className="text-4xl font-bold mb-4">
                            Stay Updated
                        </h2>

                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Subscribe to our newsletter and be the first to know about new products,
                            exclusive deals, and special offers. Join thousands of satisfied customers!
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        required
                                        className="w-full px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[120px]"
                                >
                                    {isSubmitting ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                                    ) : (
                                        <>
                                            <FiSend className="w-4 h-4 mr-2" />
                                            Subscribe
                                        </>
                                    )}
                                </button>
                            </div>

                            {message && (
                                <p className={`mt-4 text-sm ${message.includes('Thank you') ? 'text-green-200' : 'text-red-200'}`}>
                                    {message}
                                </p>
                            )}
                        </form>

                        <div className="mt-8 text-sm text-blue-200">
                            <p>
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
