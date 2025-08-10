import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar, FiEye } from 'react-icons/fi';

const ProductCard = ({ product }) => {
    const {
        id,
        productName,
        productImage,
        description,
        price,
        category,
        ratings = 4.5,
        brand,
        creationDate
    } = product;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group"
        >
            <div className="relative overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={productImage}
                    alt={productName}
                    className="w-full h-48 object-cover"
                />
                <motion.div
                    className="absolute top-2 right-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {category}
                    </span>
                </motion.div>
                <motion.div
                    className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            to={`/product/${id}`}
                            className="bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:shadow-lg"
                        >
                            <FiEye className="inline mr-2" />
                            Quick View
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{brand}</span>
                    <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.1 }}
                    >
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">{ratings}</span>
                    </motion.div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {productName}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between">
                    <motion.span
                        className="text-xl font-bold text-blue-600 dark:text-blue-400"
                        whileHover={{ scale: 1.1 }}
                    >
                        ${price}
                    </motion.span>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to={`/product/${id}`}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            See More
                        </Link>
                    </motion.div>
                </div>

                <div className="mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Added: {new Date(creationDate).toLocaleDateString()}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
