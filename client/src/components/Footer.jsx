import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 text-white"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {/* Company Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/" className="flex items-center space-x-2 mb-6">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <FiShoppingBag className="text-2xl text-blue-400" />
                                </motion.div>
                                <span className="text-xl font-bold">ShopHub</span>
                            </Link>
                        </motion.div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Your trusted online marketplace for quality products at affordable prices.
                            We're committed to providing exceptional shopping experiences.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: FiFacebook, href: "#" },
                                { icon: FiTwitter, href: "#" },
                                { icon: FiInstagram, href: "#" },
                                { icon: FiLinkedin, href: "#" }
                            ].map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{ scale: 1.2, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                    >
                                        <Icon className="w-6 h-6" />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { to: "/", label: "Home" },
                                { to: "/products", label: "All Products" },
                                { to: "/about", label: "About Us" },
                                { to: "/contact", label: "Contact" },
                                { to: "/faq", label: "FAQ" }
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Customer Service */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-6">Customer Service</h3>
                        <ul className="space-y-3">
                            {[
                                { to: "/shipping", label: "Shipping Info" },
                                { to: "/returns", label: "Returns & Exchanges" },
                                { to: "/privacy", label: "Privacy Policy" },
                                { to: "/terms", label: "Terms of Service" },
                                { to: "/support", label: "Help Center" }
                            ].map((link, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-gray-300 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
                        <div className="space-y-4">
                            {[
                                { icon: FiMapPin, text: "123 Business Street, City, State 12345" },
                                { icon: FiPhone, text: "+1 (555) 123-4567" },
                                { icon: FiMail, text: "support@shophub.com" }
                            ].map((contact, index) => {
                                const Icon = contact.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <Icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                        <span className="text-gray-300">{contact.text}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-gray-800 mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} ShopHub. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            {[
                                { to: "/privacy", label: "Privacy Policy" },
                                { to: "/terms", label: "Terms of Service" },
                                { to: "/cookies", label: "Cookie Policy" }
                            ].map((link, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link
                                        to={link.to}
                                        className="text-gray-400 hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
