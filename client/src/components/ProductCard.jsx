import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <div className="relative overflow-hidden">
                <img
                    src={productImage}
                    alt={productName}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2">
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-red bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Link
                        to={`/product/${id}`}
                        className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                    >
                        <FiEye className="inline mr-2" />
                        Quick View
                    </Link>
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{brand}</span>
                    <div className="flex items-center">
                        <FiStar className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">{ratings}</span>
                    </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
                    {productName}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        ${price}
                    </span>
                    <Link
                        to={`/product/${id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                        See More
                    </Link>
                </div>

                <div className="mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                        Added: {new Date(creationDate).toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
