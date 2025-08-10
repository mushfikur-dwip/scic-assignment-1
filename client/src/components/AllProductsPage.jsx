import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProductCard from './ProductCard';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'products'));
            const productsList = querySnapshot.docs.map(doc => doc.data());
            setProducts(productsList);
        };
        fetchProducts();
    }, []);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        }
        return b.price - a.price;
    });

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between mb-6">
                <h2 className="text-3xl">All Products</h2>
                <select onChange={handleSortChange} value={sortOrder} className="border p-2 rounded">
                    <option value="asc">Sort by Price: Low to High</option>
                    <option value="desc">Sort by Price: High to Low</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllProductsPage;
