import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center">
                {/* 404 Animation */}
                <div className="mb-8">
                    <div className="text-9xl font-bold text-blue-600 dark:text-blue-400 opacity-20 mb-4">
                        404
                    </div>
                    <div className="relative">
                        <div className="w-32 h-32 bg-blue-100 dark:bg-blue-900 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <div className="w-16 h-16 bg-blue-600 dark:bg-blue-400 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </div>

                {/* Error Message */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Page Not Found
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Oops! The page you're looking for doesn't exist. It might have been moved,
                        deleted, or you entered the wrong URL.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                    >
                        <FiHome className="w-5 h-5 mr-2" />
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                        <FiArrowLeft className="w-5 h-5 mr-2" />
                        Go Back
                    </button>
                </div>

                {/* Additional Help */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Still having trouble? Contact our{' '}
                        <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
                            support team
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
