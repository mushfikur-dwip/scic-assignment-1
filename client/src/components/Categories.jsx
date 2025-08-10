import React from 'react';
import { Link } from 'react-router-dom';
import { FiSmartphone, FiMonitor, FiHeadphones, FiWatch, FiHome } from 'react-icons/fi';
import { FaTshirt } from 'react-icons/fa';  // Imported from Fa

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: 'Electronics',
            icon: FiSmartphone,
            description: 'Latest gadgets and tech',
            image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            count: '250+ products'
        },
        {
            id: 2,
            name: 'Computers',
            icon: FiMonitor,
            description: 'Laptops, desktops & accessories',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            count: '180+ products'
        },
        {
            id: 3,
            name: 'Audio',
            icon: FiHeadphones,
            description: 'Headphones & speakers',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            count: '120+ products'
        },
        {
            id: 4,
            name: 'Wearables',
            icon: FiWatch,
            description: 'Smart watches & fitness trackers',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            count: '95+ products'
        },
        {
            id: 5,
            name: 'Home & Garden',
            icon: FiHome,
            description: 'Home appliances & decor',
            image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            count: '300+ products'
        },
        {
            id: 6,
            name: 'Fashion',
            icon: FaTshirt,  // Replaced FiShirt with FaTshirt
            description: 'Clothing & accessories',
            image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            count: '200+ products'
        }
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Shop by Category
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Explore our wide range of product categories to find exactly what you're looking for
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map(category => {
                        const IconComponent = category.icon;
                        return (
                            <Link
                                key={category.id}
                                to={`/products?category=${category.name.toLowerCase()}`}
                                className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <IconComponent className="w-16 h-16 text-white mb-4" />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                                        {category.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {category.count}
                                        </span>
                                        <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:underline">
                                            Browse →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Categories;
