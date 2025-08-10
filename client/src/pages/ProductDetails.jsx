import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import { FiStar, FiArrowLeft, FiCalendar, FiTag, FiUser } from 'react-icons/fi';
import Spinner from '../components/Spinner';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, 'products', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setError('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Failed to load product details');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {error}
                    </h1>
                    <Link
                        to="/products"
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Product not found
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-8 transition-colors duration-200"
                >
                    <FiArrowLeft className="w-5 h-5 mr-2" />
                    Back to Products
                </button>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                        {/* Product Image */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                                <img
                                    src={product.productImage}
                                    alt={product.productName}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6">
                            {/* Category Badge */}
                            <div>
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                    <FiTag className="w-4 h-4 mr-1" />
                                    {product.category}
                                </span>
                            </div>

                            {/* Product Name */}
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                {product.productName}
                            </h1>

                            {/* Brand */}
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                by {product.brand}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, index) => (
                                        <FiStar
                                            key={index}
                                            className={`w-5 h-5 ${index < Math.floor(product.ratings || 0)
                                                    ? 'text-yellow-400 fill-current'
                                                    : 'text-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                    {product.ratings || 'No rating'}
                                </span>
                                <span className="text-gray-500 dark:text-gray-400">
                                    ({Math.floor(Math.random() * 100) + 1} reviews)
                                </span>
                            </div>

                            {/* Price */}
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                                ${product.price}
                            </div>

                            {/* Description */}
                            <div className="prose prose-gray dark:prose-invert max-w-none">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Product Description
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Product Meta */}
                            <div className="space-y-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <FiUser className="w-5 h-5 mr-2" />
                                    <span>Added by: {product.userName || 'Anonymous'}</span>
                                </div>

                                <div className="flex items-center text-gray-600 dark:text-gray-400">
                                    <FiCalendar className="w-5 h-5 mr-2" />
                                    <span>
                                        Added on: {new Date(product.creationDate).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                                    Add to Cart
                                </button>
                                <button className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                                    Add to Wishlist
                                </button>
                            </div>

                            {/* Additional Info */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mt-6">
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                                    Product Features
                                </h4>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• High quality materials</li>
                                    <li>• Fast and reliable shipping</li>
                                    <li>• 30-day return policy</li>
                                    <li>• Customer support included</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                        You might also like
                    </h2>
                    <div className="text-center py-8 text-gray-600 dark:text-gray-400">
                        <p>Related products will be shown here</p>
                        <Link
                            to="/products"
                            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                        >
                            Browse All Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
