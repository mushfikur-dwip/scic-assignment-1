import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: 'url(path-to-your-image)' }}>
            <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
                <h1 className="text-4xl text-white font-semibold">Welcome to Cozy Touch</h1>
            </div>
        </div>
    );
};

export default HeroSection;
