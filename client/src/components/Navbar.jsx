import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { FiMenu, FiX, FiUser, FiLogOut, FiShoppingBag, FiPlus } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="sticky top-0 z-50 w-full bg-blue-600 dark:bg-blue-800 shadow-lg backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/" className="flex items-center space-x-2">
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            >
                                <FiShoppingBag className="text-2xl text-white" />
                            </motion.div>
                            <span className="text-xl font-bold text-white">ShopHub</span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/"
                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                            >
                                Home
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/products"
                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                            >
                                All Products
                            </Link>
                        </motion.div>

                        {user ? (
                            <>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/dashboard"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                    >
                                        Dashboard
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/add-product"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                    >
                                        Add Product
                                    </Link>
                                </motion.div>

                                {/* User Dropdown */}
                                <div className="relative">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={toggleDropdown}
                                        className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200"
                                    >
                                        {user.photoURL ? (
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                src={user.photoURL}
                                                alt={user.displayName || 'User'}
                                                className="w-8 h-8 rounded-full border-2 border-white"
                                            />
                                        ) : (
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <FiUser className="w-8 h-8 p-1 bg-blue-500 rounded-full" />
                                            </motion.div>
                                        )}
                                        <span className="font-medium">{user.displayName || 'User'}</span>
                                    </motion.button>

                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50"
                                            >
                                                <motion.div
                                                    whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Link
                                                        to="/profile"
                                                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                        onClick={() => setIsDropdownOpen(false)}
                                                    >
                                                        <FiUser className="w-4 h-4" />
                                                        <span>Profile</span>
                                                    </Link>
                                                </motion.div>
                                                <motion.button
                                                    whileHover={{ backgroundColor: "rgba(243, 244, 246, 1)" }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={handleLogout}
                                                    className="flex items-center space-x-2 w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                >
                                                    <FiLogOut className="w-4 h-4" />
                                                    <span>Logout</span>
                                                </motion.button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </>
                        ) : (
                            <>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/login"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                    >
                                        Login
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/register"
                                        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                                    >
                                        Register
                                    </Link>
                                </motion.div>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-blue-200 transition-colors duration-200"
                    >
                        {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden py-4 border-t border-blue-500"
                        >
                            <div className="flex flex-col space-y-4">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                        onClick={toggleMenu}
                                    >
                                        Home
                                    </Link>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/products"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                        onClick={toggleMenu}
                                    >
                                        All Products
                                    </Link>
                                </motion.div>

                                {user ? (
                                    <>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                to="/dashboard"
                                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                                onClick={toggleMenu}
                                            >
                                                Dashboard
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                to="/add-product"
                                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                                onClick={toggleMenu}
                                            >
                                                Add Product
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                to="/profile"
                                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                                onClick={toggleMenu}
                                            >
                                                Profile
                                            </Link>
                                        </motion.div>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => {
                                                handleLogout();
                                                toggleMenu();
                                            }}
                                            className="text-left text-red-300 hover:text-red-100 transition-colors duration-200 font-medium"
                                        >
                                            Logout
                                        </motion.button>
                                    </>
                                ) : (
                                    <>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                to="/login"
                                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                                onClick={toggleMenu}
                                            >
                                                Login
                                            </Link>
                                        </motion.div>
                                        <motion.div
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Link
                                                to="/register"
                                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                                onClick={toggleMenu}
                                            >
                                                Register
                                            </Link>
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
