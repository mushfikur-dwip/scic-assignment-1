import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
        <nav className="sticky top-0 z-50 w-full bg-blue-600 dark:bg-blue-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <FiShoppingBag className="text-2xl text-white" />
                        <span className="text-xl font-bold text-white">ShopHub</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                        >
                            All Products
                        </Link>

                        {user ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/add-product"
                                    className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                >
                                    Add Product
                                </Link>

                                {/* User Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors duration-200"
                                    >
                                        {user.photoURL ? (
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName || 'User'}
                                                className="w-8 h-8 rounded-full border-2 border-white"
                                            />
                                        ) : (
                                            <FiUser className="w-8 h-8 p-1 bg-blue-500 rounded-full" />
                                        )}
                                        <span className="font-medium">{user.displayName || 'User'}</span>
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                                            <Link
                                                to="/profile"
                                                className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                <FiUser className="w-4 h-4" />
                                                <span>Profile</span>
                                            </Link>
                                            <button
                                                onClick={handleLogout}
                                                className="flex items-center space-x-2 w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                <FiLogOut className="w-4 h-4" />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/login"
                                    className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-white hover:text-blue-200 transition-colors duration-200"
                    >
                        {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-blue-500">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                            <Link
                                to="/products"
                                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                onClick={toggleMenu}
                            >
                                All Products
                            </Link>

                            {user ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                        onClick={toggleMenu}
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        to="/add-product"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                        onClick={toggleMenu}
                                    >
                                        Add Product
                                    </Link>
                                    <Link
                                        to="/profile"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                        onClick={toggleMenu}
                                    >
                                        Profile
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            toggleMenu();
                                        }}
                                        className="text-left text-red-300 hover:text-red-100 transition-colors duration-200 font-medium"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                        onClick={toggleMenu}
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
                                        onClick={toggleMenu}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
