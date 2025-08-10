import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2 mb-6">
                            <FiShoppingBag className="text-2xl text-blue-400" />
                            <span className="text-xl font-bold">ShopHub</span>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your trusted online marketplace for quality products at affordable prices.
                            We're committed to providing exceptional shopping experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <FiFacebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <FiTwitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <FiInstagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                                <FiLinkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Shipping Info
                                </Link>
                            </li>
                            <li>
                                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Returns & Exchanges
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/support" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    Help Center
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <FiMapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-gray-300">
                                    123 Business Street, City, State 12345
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiPhone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-gray-300">
                                    +1 (555) 123-4567
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FiMail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <span className="text-gray-300">
                                    support@shophub.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} ShopHub. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </Link>
                            <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
