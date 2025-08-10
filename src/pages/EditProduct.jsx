import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import { useAuth } from '../hooks/useAuth';
import { FiImage, FiDollarSign, FiTag, FiFileText, FiSave, FiStar } from 'react-icons/fi';
import Spinner from '../components/Spinner';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [formData, setFormData] = useState({
        productName: '',
        productImage: '',
        description: '',
        price: '',
        category: '',
        brand: '',
        ratings: '4.5',
        isFeatured: false
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');

    const categories = [
        'Electronics',
        'Computers',
        'Audio',
        'Wearables',
        'Home & Garden',
        'Fashion',
        'Sports',
        'Books',
        'Health',
        'Beauty'
    ];

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, 'products', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const productData = docSnap.data();

                    // Check if current user is the owner
                    if (productData.userEmail !== user.email) {
                        setError('You can only edit your own products');
                        return;
                    }

                    setFormData({
                        productName: productData.productName || '',
                        productImage: productData.productImage || '',
                        description: productData.description || '',
                        price: productData.price?.toString() || '',
                        category: productData.category || '',
                        brand: productData.brand || '',
                        ratings: productData.ratings?.toString() || '4.5',
                        isFeatured: productData.isFeatured || false
                    });
                } else {
                    setError('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product:', error);
                setError('Failed to load product');
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchProduct();
        }
    }, [id, user]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSaving(true);

        try {
            const updatedData = {
                ...formData,
                price: parseFloat(formData.price),
                ratings: parseFloat(formData.ratings),
                updatedDate: new Date().toISOString()
            };

            await updateDoc(doc(db, 'products', id), updatedData);
            navigate('/dashboard');
        } catch (error) {
            setError('Failed to update product. Please try again.');
            console.error('Error updating product:', error);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <Spinner />;
    }

    if (error && !formData.productName) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                        {error}
                    </h1>
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Edit Product
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Update your product information and settings
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Product Name */}
                            <div>
                                <label htmlFor="productName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Product Name *
                                </label>
                                <input
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    required
                                    value={formData.productName}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="Enter product name"
                                />
                            </div>

                            {/* Brand */}
                            <div>
                                <label htmlFor="brand" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Brand *
                                </label>
                                <input
                                    type="text"
                                    id="brand"
                                    name="brand"
                                    required
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="Enter brand name"
                                />
                            </div>
                        </div>

                        {/* Product Image URL */}
                        <div>
                            <label htmlFor="productImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <FiImage className="inline w-4 h-4 mr-1" />
                                Product Image URL *
                            </label>
                            <input
                                type="url"
                                id="productImage"
                                name="productImage"
                                required
                                value={formData.productImage}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="https://example.com/image.jpg"
                            />
                            {formData.productImage && (
                                <div className="mt-2">
                                    <img
                                        src={formData.productImage}
                                        alt="Preview"
                                        className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                <FiFileText className="inline w-4 h-4 mr-1" />
                                Description *
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                required
                                rows={4}
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                placeholder="Describe your product..."
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Price */}
                            <div>
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    <FiDollarSign className="inline w-4 h-4 mr-1" />
                                    Price *
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    required
                                    min="0"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="0.00"
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    <FiTag className="inline w-4 h-4 mr-1" />
                                    Category *
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    required
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                >
                                    <option value="">Select category</option>
                                    {categories.map(category => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Ratings */}
                            <div>
                                <label htmlFor="ratings" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Rating
                                </label>
                                <input
                                    type="number"
                                    id="ratings"
                                    name="ratings"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    value={formData.ratings}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Featured Product Checkbox */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <div className="flex items-center">
                                <input
                                    id="isFeatured"
                                    name="isFeatured"
                                    type="checkbox"
                                    checked={formData.isFeatured}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="isFeatured" className="ml-3 flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                                    <FiStar className="w-4 h-4 mr-2 text-yellow-500" />
                                    Mark as Featured Product
                                </label>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Featured products will be displayed prominently on the homepage and get more visibility.
                            </p>
                        </div>

                        {/* Submit Buttons */}
                        <div className="pt-6 flex gap-4">
                            <button
                                type="submit"
                                disabled={saving}
                                className="flex-1 flex justify-center items-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                            >
                                {saving ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                ) : (
                                    <>
                                        <FiSave className="w-4 h-4 mr-2" />
                                        Update Product
                                    </>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={() => navigate('/dashboard')}
                                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
