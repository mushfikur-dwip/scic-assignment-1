import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="text-center my-20">
            <h2 className="text-4xl font-semibold">404 - Page Not Found</h2>
            <p className="text-gray-700">Sorry, the page you are looking for doesn't exist.</p>
            <Link to="/" className="mt-4 text-blue-700">Go Back to Home</Link>
        </div>
    );
};

export default NotFoundPage;
