import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card bg-white p-4 rounded-md shadow-lg">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl mt-4">{product.title}</h2>
            <p className="text-gray-700">{product.shortDescription}</p>
            <button className="bg-blue-700 text-white mt-4 px-6 py-2 rounded-full">See More</button>
        </div>
    );
};

export default ProductCard;
