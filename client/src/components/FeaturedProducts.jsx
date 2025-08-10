import React, { useEffect, useState } from 'react';
import { collection, query, limit, getDocs, orderBy, where } from 'firebase/firestore';
import { motion } from 'framer-motion';
import { db } from '../firebase/firebase.config';
import ProductCard from './ProductCard';
import Spinner from './Spinner';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedProducts = async () => {
            try {
                // First try to get products marked as featured (without orderBy to avoid index requirement)
                let q = query(
                    collection(db, 'products'),
                    where('isFeatured', '==', true),
                    limit(8)
                );

                let querySnapshot = await getDocs(q);
                let productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Sort manually by creation date if we have featured products
                if (productsData.length > 0) {
                    productsData.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
                } else {
                    // If no featured products found, get recent products instead
                    q = query(
                        collection(db, 'products'),
                        orderBy('creationDate', 'desc'),
                        limit(8)
                    );
                    querySnapshot = await getDocs(q);
                    productsData = querySnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                }

                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching featured products:', error);
                // If there's any error, just fetch recent products
                try {
                    const fallbackQuery = query(
                        collection(db, 'products'),
                        limit(8)
                    );
                    const fallbackSnapshot = await getDocs(fallbackQuery);
                    const fallbackData = fallbackSnapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setProducts(fallbackData);
                } catch (fallbackError) {
                    console.error('Error fetching fallback products:', fallbackError);
                    setProducts([]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedProducts();
    }, []); if (loading) {
        return <Spinner />;
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-16 bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Products
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover our handpicked selection of premium products that offer exceptional quality and value
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, staggerChildren: 0.1 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>

                {products.length === 0 && !loading && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            No featured products available at the moment.
                        </p>
                    </motion.div>
                )}
            </div>
        </motion.section>
    );
};

export default FeaturedProducts;
