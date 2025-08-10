import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    return (
        <nav className="navbar sticky top-0 w-full bg-blue-700 text-white px-4 py-2">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">Cozy Touch</Link>
                <ul className="flex space-x-6">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">All Products</Link></li>
                    {user ? (
                        <>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    ) : (
                        <li><Link to="/login">Login</Link></li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
